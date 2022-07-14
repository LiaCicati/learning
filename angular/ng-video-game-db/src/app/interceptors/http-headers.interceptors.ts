import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '4846675a5dmshde2d8b337127389p1bfe39jsn9ab75d3ec406',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams: {
        key: 'add7b5312357414990b6b8abb4fcd0da',
      }
    });
    return next.handle(req);
  }
}
