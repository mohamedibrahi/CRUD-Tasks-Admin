import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeStatus, UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'tasksAssigned', 'actions'];
  dataSource: any = [];
  timeOutId: any;
  page = 1;
  totalItems: any;
  filteration: any = {
    page: this.page,
    limit: 10
  };
  constructor(
    private service: UsersService,
    private toastr: ToastrService
  ) {
    this.getDataFormSubject()
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.service.getAllUsers(this.filteration)
  }

  getDataFormSubject() {
    this.service.userData.subscribe((res: any) => {
      this.dataSource = res.data;
      this.totalItems = res.total;
    })
  }
  
  search(event: any) {
    this.filteration["name"] = event.value;
    clearTimeout(this.timeOutId)
    this.timeOutId = setTimeout(() => {
      this.getUsers();
    }, 2000)
  }

  deleteUSer(id: any, index: number) {
    if (this.dataSource[index].assignedTasks > 0) {
      this.toastr.error('You Can`t Delete This User Until Finished Your Tasks');
    } else {
      this.service.deleteUser(id).subscribe((res: any) => {
        this.toastr.success('User Deleted Successfully', 'success');
        this.page = 1;
        this.getUsers()
      })
    }

  }

  changeUSerStatus(status: string, id: any, index: number) {
    const Model: ChangeStatus = {
      id,
      status
    }
    if (this.dataSource[index].assignedTasks > 0) {
      this.toastr.error('You Can`t Update This User Until Finished Your Tasks');
    } else {
      this.service.changeStatus(Model).subscribe(res => {
        this.toastr.success('User Status Updated Successfully', 'success');
        this.page = 1;
        this.getUsers()
      })
    }

  }

  changePage(event: any) {
    this.page = event;
    this.getUsers();
  }


}
