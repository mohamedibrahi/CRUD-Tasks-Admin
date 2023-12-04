import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private inject:Injector,
    private router:Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let toastr = this.inject.get(ToastrService)
        toastr.error(error.error.message)
        if(error.error.message == "jwt expired" || error.error.message == "jwt must provide") {
          this.router.navigate(['/auth/login']);
          localStorage.removeItem("token");
        }
        throw error
      }));
  }
}
