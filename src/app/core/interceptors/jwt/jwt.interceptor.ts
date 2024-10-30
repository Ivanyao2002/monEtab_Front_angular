import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {LocalStorageService} from '../../services/localStorage/local-storage.service';
import {Router} from '@angular/router';

export class jwtInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getToken();
    let authReq: any;
    if(token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.stringify(token)}`
        }
      });
    }
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401 || err.status === 403 || (err.status === 400 && err.error.codeError === "INSUFFICIENT_AUTHENTICATION")) {
          this.localStorageService.removeToken();
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error(err.error.message || err.message));
      })
    );
  }

};
