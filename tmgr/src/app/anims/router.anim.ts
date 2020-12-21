// :enter 和 :leave 别名
// :enter 和 :leave 分别是 void => * 和 * => void 的别名。 这些别名供多个动画函数使用。
import {
  animate,
  state,
  style,
  transition,
  trigger,
  group,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
  state('void', style({ display: 'flex', overflow: 'auto' })),
  state('*', style({ display: 'flex', overflow: 'auto' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
      animate('.3s ease-in', style({ opacity: 1 })),
    ]),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    group([
      animate('.5s ease-in-out', style({ transform: 'translateX(100%)' })),
      animate('.3s ease-in', style({ opacity: 0 })),
    ]),
  ]),
]);

export const defaultRouteAnim: AnimationTriggerMetadata = slideToRight;
