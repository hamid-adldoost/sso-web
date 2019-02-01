import {Injectable, OnInit} from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpResponseBase
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
// import {SimpleTimer} from "ng2-simple-timer";
import {Router} from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';
import {HttpStatusService} from './http-status.service';
import {catchError, map} from 'rxjs/internal/operators';

/**
 * Created by root on 1/23/18.
 */
@Injectable()
export class DwmHttpInterceptor implements HttpInterceptor, OnInit {

    constructor(private authService: AuthService,
                // private simpleTime: SimpleTimer,
                private router: Router,
                private messageService: MessageService,
                private httpStatusService: HttpStatusService) {

    }


    ngOnInit(): void {

    }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.httpStatusService.increaseConnectionCount();
    request = request.clone({
      setHeaders: {
        Authorization: `${this.authService.getToken()}`
      }
    });

    return next.handle(request)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.httpStatusService.decreaseConnectionCount();
          const refreshToken = event.headers.get('Authorization');
          if (refreshToken) {
            localStorage.setItem('auth-token', refreshToken);
          }
        }
        return event;
      })).pipe(
        catchError((err: any, caught) => {
          if (err instanceof HttpResponseBase) {
            this.httpStatusService.decreaseConnectionCount();
          }
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log('not authorized: ' + err.status);
              this.messageService.add({severity: 'error', summary: 'دسترسی امکان پذیر نمیباشد.'});
              this.router.navigate(['/login']);
            }
            return throwError(err);
          }
        }));
  }
}

