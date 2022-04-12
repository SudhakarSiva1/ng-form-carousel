import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private t = '8d86349c09eb499d9cf2f9ed07f4b402dc85c7972b25350a7253f7a82d28ad97';
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            headers: req.headers.set(
                "Authorization",
                `Bearer ${this.t}`
            )
        });
        return next.handle(req);
    }
}