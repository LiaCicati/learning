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
        'x-rapidapi-key': 'b9f4cd854cmsh4914de259cd292cp11287ajsn760eb1121bec',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams: {
        key: '4846675a5dmshde2d8b337127389p1bfe39jsn9ab75d3ec406',
      }
    });
    return next.handle(req);
  }
}
