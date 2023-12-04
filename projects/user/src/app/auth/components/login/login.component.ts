import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb:FormBuilder,
    private service: LoginService,
    private route:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email :['', [Validators.required , Validators.email]],
      password:['', [Validators.required ]],
      role:['user']
    });
  }

  login() {
    this.service.login(this.loginForm.value).subscribe((res:any)=>{
      this.route.navigate(['/tasks']);
      localStorage.setItem("token", res.token)
      this.toastr.success('Login Successfully' ,'success')
    })
  }
 
}
