import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // return next.handle(req);

    // 对响应消息进行处理
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (
          event instanceof HttpResponse &&
          event.status >= 200 &&
          event.status < 300
        ) {
          console.log('[此处假装弹出消息] 请求成功！');
        }
      })
    );
  }
}
