"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[798],{798:(y,u,e)=>{e.r(u),e.d(u,{AuthModule:()=>L});var d=e(6895),g=e(4911),s=e(4006),c=e(529),l=e(9299),t=e(4650),p=e(7507);let h=(()=>{class o{constructor(n){this.http=n}login(n){return this.http.post(p.N.baseApi.replace("tasks","auth")+"/login",n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(c.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=e(7185),v=e(4859),i=e(9549),C=e(4144),x=e(3081);const A=[{path:"",component:(()=>{class o{constructor(n,r,m,M){this.fb=n,this.service=r,this.toastr=m,this.router=M}ngOnInit(){this.createForm()}createForm(){this.loginForm=this.fb.group({email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(20)]],role:["admin"]})}login(){this.service.login(this.loginForm.value).subscribe(n=>{localStorage.setItem("token",n.token),this.toastr.success("success","Login Success",{disableTimeOut:!1,titleClass:"toastr_title",messageClass:"toastr_message",timeOut:5e3,closeButton:!0}),this.router.navigate(["/tasks"])},n=>{this.toastr.error(n.error,"",{disableTimeOut:!1,titleClass:"toastr_title",messageClass:"toastr_message",timeOut:5e3,closeButton:!0})})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(h),t.Y36(f._W),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:34,vars:25,consts:[[1,"login","d-flex","justify-content-center","align-items-center","m-auto"],[1,"row"],[1,"col-md-6","p-0"],[1,"overlay"],["src","../../../../assets/desola-lanre-ologun-zYgV-NGZtlA-unsplash.jpg","alt",""],[1,"col-md-6"],[1,"h-100","d-flex","align-items-center","justify-content-center","w-100"],[1,"box","w-75"],[3,"formGroup"],["appearance","outline",1,"w-100"],["matInput","","formControlName","email",3,"placeholder"],["matInput","","formControlName","password","type","password",3,"placeholder"],[1,"d-flex","justify-content-center"],["mat-raised-button","","color","warn",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3)(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"form",8)(12,"mat-form-field",9)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",10),t.ALo(17,"translate"),t.TgZ(18,"mat-error"),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"mat-form-field",9)(22,"mat-label"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t._UZ(25,"input",11),t.ALo(26,"translate"),t.TgZ(27,"mat-error"),t._uU(28),t.ALo(29,"translate"),t.qZA()()(),t.TgZ(30,"div",12)(31,"button",13),t.NdJ("click",function(){return r.login()}),t._uU(32),t.ALo(33,"translate"),t.qZA()()()()()()()),2&n&&(t.xp6(9),t.hij("",t.lcZ(10,9,"auth.login")," "),t.xp6(2),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Oqu(t.lcZ(15,11,"auth.email")),t.xp6(2),t.s9C("placeholder",t.lcZ(17,13,"auth.email")),t.xp6(3),t.Oqu(t.lcZ(20,15,"auth.required")),t.xp6(4),t.Oqu(t.lcZ(24,17,"auth.password")),t.xp6(2),t.s9C("placeholder",t.lcZ(26,19,"auth.password")),t.xp6(3),t.Oqu(t.lcZ(29,21,"auth.required")),t.xp6(4),t.Oqu(t.lcZ(33,23,"auth.login")))},dependencies:[v.lW,i.TO,i.KE,i.hX,C.Nt,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,x.X$],styles:["*[_ngcontent-%COMP%]{font-family:cursive}.login[_ngcontent-%COMP%]{position:absolute;inset:0}.login[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{background-color:#0009;position:absolute;inset:0;z-index:1}.login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100vh}.login[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{z-index:5;width:30%;padding:50px 20px;border:1px solid #ddd;border-radius:15px;box-shadow:0 2px 5px #ca25104d}.login[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#bc1059}.login[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2px 100px}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]}),o})();var O=e(9027);let L=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.q,Z,s.u5,s.UX,c.JF,d.ez,O.m]}),o})()}}]);