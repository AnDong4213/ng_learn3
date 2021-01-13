import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Quote } from '../domain';

export const debug = (message: string) => {
  return (observable: Observable<Quote>) =>
    new Observable((observer) => {
      const subscription = observable.subscribe({
        next(value) {
          if (!environment.production) {
            console.log(message);
          }
          // value.en = 'uuu';
          observer.next(value);
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        },
      });
      return () => {
        subscription.unsubscribe(); // 取消订阅
      };
    });
};
