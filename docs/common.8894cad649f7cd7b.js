"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[592],{1433:(d,c,e)=>{e.d(c,{f:()=>s});var _=e(529),r=e(7507),o=e(1135),u=e(4650);let s=(()=>{class a{constructor(t){this.http=t,this.userData=new o.X({})}getUsers(t){let n=new _.LE;return t&&Object.entries(t).forEach(([h,E])=>{n=n.append(h,E)}),this.http.get(r.N.baseApi.replace("/tasks","/auth")+"/users",{params:n})}deleteUser(t){return this.http.delete(r.N.baseApi.replace("/tasks","/auth")+"/user/"+t)}changeStatus(t){return this.http.put(r.N.baseApi.replace("/tasks","/auth")+"/user-status",t)}getAllUsers(t){this.getUsers(t).subscribe(n=>{this.userData.next({data:n.users,total:n.totalItems})})}}return a.\u0275fac=function(t){return new(t||a)(u.LFG(_.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},9027:(d,c,e)=>{e.d(c,{m:()=>u});var _=e(6895),r=e(3081),o=e(4650);let u=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[_.ez,r.aw.forChild({extend:!0}),r.aw]}),s})()}}]);