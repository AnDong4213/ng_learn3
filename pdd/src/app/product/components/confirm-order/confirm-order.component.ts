import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { merge, Observable, Subject, combineLatest } from 'rxjs';
import { shareReplay, tap, map } from 'rxjs/operators';

import { Payment } from './../payment';
import { DialogService } from 'src/app/dialog';
import { ProductVariant } from '../../domain';

export interface itemPro {
  variant: ProductVariant;
  count: number;
}

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmOrderComponent implements OnInit {
  item$: Observable<object | null>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[];
  item: itemPro;
  btn: false;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付',
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png',
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png',
      },
    ];
    this.item$ = this.dialogService.getData().pipe(
      tap((val) => console.log(val)),
      shareReplay(1)
    );
    this.item$.subscribe((val) => {
      this.item = val as itemPro;
    });

    const unitPrice$ = this.item$.pipe(
      map((item: itemPro) => item.variant.price)
    );

    const amount$ = this.item$.pipe(map((item: itemPro) => item.count));

    const mergedCount$ = merge(amount$, this.count$);

    // combineLatest操作符，数组里面都有值的时候才执行，合并成一个新的流
    this.totalPrice$ = combineLatest([unitPrice$, mergedCount$]).pipe(
      map(([price, amount]) => price * amount)
    );
  }

  handleAmountChange(count: number) {
    this.count$.next(count);
  }

  handlePay() {}
}
