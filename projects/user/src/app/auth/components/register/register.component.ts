import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { createAccount } from '../../context/DTOs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb:FormBuilder,
    private service: LoginService,
    private route:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email:['' , [Validators.required , Validators.email]],
      username: ['' , [Validators.required ]],
      password: ['' , [Validators.required ]],
      confirmPassword: ['' , [Validators.required ]],
    }, {validators:this.checkPassword});
  }

  createAccount() {
    const MODEL :createAccount={
      email : this.registerForm.value["email"],
      username : this.registerForm.value["username"],
      password : this.registerForm.value["password"],
      role :"user"
    }
    this.service.createAccount(MODEL).subscribe(res=>{
      this.route.navigate(['/tasks']);
      this.toastr.success('Register Successfully' ,'success')
    }) 
  }

  checkPassword:ValidatorFn = (groub:AbstractControl):ValidationErrors | null =>{
    let password = groub.get("password")?.value;
    let conPass  = groub.get("confirmPassword")?.value;
    return password === conPass ? null : {notSame : true}
  }

}
