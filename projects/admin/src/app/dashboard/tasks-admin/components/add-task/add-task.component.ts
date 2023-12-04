import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ConfitmationComponent } from '../confitmation/confitmation.component';
import { UsersService } from '../../../manage-users/services/users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddTaskComponent>,
    public matDialog: MatDialog,
    private service: TasksService,
    private toastr: ToastrService,
    private userService: UsersService,
    private translate: TranslateService,
    ) {
      this.getDataFormSubject()
     }
  newTaskForm !: FormGroup;
  fileName: string = '';
  formValues:any;
  users: any = []
  ngOnInit(): void {
    this.createForm()
  }

  getDataFormSubject() {
    this.userService.userData.subscribe((res: any) => {
      this.users = this.userMapping(res.data);
    })
  }

  userMapping(data:any[]) {
    let newArray = data.map((item:any) =>{
      return {
        name: item.username,
        id: item._id
      }
    })
    return newArray
  }

  createForm() {
    this.newTaskForm = this.fb.group({
      title: [this.data?.title || '', [Validators.required, Validators.minLength(5)]],
      userId: [this.data?.userId._id ||  '', Validators.required],
      image: [this.data?.image ||  '', Validators.required],
      description: [this.data?.description ||  '', Validators.required],
      deadline: [this.data ? new Date(this.data?.deadline.split('-').reverse().join('-')).toISOString() :  '', Validators.required],
    })
    this.formValues = this.newTaskForm.value
  }



  selectImage(event: any) {
    this.fileName = event.target.value;
    this.newTaskForm.get("image")?.setValue(event.target.files[0])
  }

  createTask() {
    let model = this.prepereFormData()
    this.service.createTask(model).subscribe(res => {
      this.toastr.success(this.translate.instant("toastr.taskUpdated"), 'success')
      this.dialog.close(true);
    })
  }

  updateTask() {
    let model = this.prepereFormData()
    this.service.updateTask(model, this.data._id).subscribe(res => {
      this.toastr.success(this.translate.instant("toastr.taskUpdated"), 'success')
      this.dialog.close(true);
    })
  }
  prepereFormData() {
    let newDate = moment(this.newTaskForm.value['deadline']).format('DD-MM-YYYY')
    let formData = new FormData();
    Object.entries(this.newTaskForm.value).forEach(([key, value]: any) => {
      if (key == 'deadline') {
        formData.append(key, newDate);

      } else {
        formData.append(key, value);
      }
    })
    return formData;
  }

  close() {
    let hasChanges = false;
    Object.keys(this.formValues).forEach((item) =>{
      if(this.formValues[item] !== this.newTaskForm.value[item]) {
        hasChanges = true;
      }
    })

    if(hasChanges) {
      const dialogRef = this.matDialog.open(ConfitmationComponent, {
        width: '750px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
         
        }
      })
    }else {
      this.dialog.close();
    }
  }
}
