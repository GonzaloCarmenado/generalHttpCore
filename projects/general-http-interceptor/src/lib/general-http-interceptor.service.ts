import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';



export const GeneralHttpInterceptorService: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  req = req.clone({
    headers: req.headers.set('Authorization', 'Tu token aqui')
  });


  if (!req.headers.has('Content-Type')) {
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json; charset=utf-8')
    });
  }    

  req = req.clone({
    headers: req.headers.set('Accept', 'application/json')
  });

  req = req.clone({
    headers: req.headers.set('Platform', 'web')
  });

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        window.location.href = `URL de prohibido o login`;
      }
       
      return throwError(err);
    }),
    finalize(() => {
    })
  );
  
};
