import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksService } from '../../services/tasks.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from '../../../manage-users/services/users.service';
export interface PeriodicElement {
  title: string;
  user: string;
  deadline: string;
  status: string;
}

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'user', 'deadline', 'status', 'actions'];
  dataSource: any = [];
  tasksFilter!: FormGroup;

  timeOutId: any;
  page: any = 1;
  total: any;
  filteration: any = {
    page: this.page,
    limit: 10
  };
  users: any = []

  status: any = [
    { name: this.translate.instant("tasks.Complete") },
    { name: this.translate.instant("tasks.In-Progress") },
  ]
  constructor(
    private service: TasksService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private translate: TranslateService,
    private userService: UsersService,
  ) {
    this.getDataFormSubject()
  }

  ngOnInit(): void {
    this.getUsers()
    this.getAllTasks();
    this.createform();
  } 

  getUsers() {
    this.userService.getAllUsers()
  }

  getDataFormSubject() {
    this.userService.userData.subscribe((res: any) => {
      this.users = this.userMapping(res.data);
    })
  }

  userMapping(data:any[]) {
    let newArray = data?.map((item:any) =>{
      return {
        name: item.username,
        id: item._id
      }
    })
    return newArray
  }

  search(event: any) {
    this.filteration["keyword"] = event.value;
    clearTimeout(this.timeOutId)
    this.timeOutId = setTimeout(() => {
      this.getAllTasks();
    }, 2000)
  }

  selectUser(event: any) {
    this.filteration["userId"] = event.value;
    this.page = 1;
    this.filteration["page"] = 1;
    this.getAllTasks();
  }

  selectStatus(event: any) {
    this.filteration["status"] = event.value.trim();
    this.getAllTasks();
  }

  selectDate(event: any, type: any) {
    this.filteration[type] = moment(event.value).format("DD-MM-YYYY");
    if (type == "toDate" && this.filteration["toDate"] !== 'Invalid date') {
      this.getAllTasks();
    }
  }

  createform() {
    this.tasksFilter = this.fb.group({
      title: [''],
      userId: [''],
      fromDate: [''],
      toDate: ['']
    })
  }

  getAllTasks() {

    this.service.getAllTasks(this.filteration).subscribe((res: any) => {

      this.dataSource = this.mappingData(res.tasks);
      this.total = res.totalItems
    }, err => {
      this.toastr.error(err.error.message, 'error')

    })
  }

  mappingData(data: any[]) {
    let newTasks = data.map(task => {
      return {
        ...task,
        user: task.userId.username,
      }
    })
    return newTasks
  }

  addTask() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    })
  }

  deleteTask(id: any) {
    this.service.deleteTask(id).subscribe(res => {
      this.toastr.success(this.translate.instant("tasks.taskDeleted"), 'success');
      this.getAllTasks()
    })
  }

  updateTask(element: any) {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
      data: element,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    })
  }
  changePage(event: any) {
    this.page = event;
    this.filteration["page"] = event;
    this.getAllTasks();
  }
}
