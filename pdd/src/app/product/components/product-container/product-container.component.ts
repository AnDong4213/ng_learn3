import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { OrderService } from '../../services';
import { DialogService } from 'src/app/dialog';

import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  subs: Subscription[] = [];

  constructor(
    private orderService: OrderService,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter((params) => params.has('productId')),
      map((params) => params.get('productId'))
    );
    // productId$.subscribe((a) => console.log(a));
    this.variants$ = productId$.pipe(
      switchMap((productId) =>
        this.orderService.getProductVariantsByProductId(productId)
      )
    );
    // this.variants$.subscribe((a) => console.log(a));
  }

  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;
    // console.log('variants', variants);
    // Subject既是一个Observable，也是一个Observer,即使数据的发送者，也是数据的订阅者
    // Subject作为一个Observer可以发射值next(xxx),也可以作为一个Observable可以进行subscribe
    // BehaviorSubject是Subject的一种特殊形式，可以记住最新的值，Subject不可以
    // 在angular中rxjs是深入集成进去了，很多对象的返回值就是一个observable

    // 传入 Output，EventEmitter 其实就是一个 Subject

    const formSubmitted = new EventEmitter();
    this.subs.push(
      formSubmitted.subscribe((ev) => {
        console.log('ev', ev);
        this.dialogService.saveData(ev);
        this.router.navigate(['/orders', 'confirm']);
      })
    );
    const selected = new EventEmitter<number>();
    this.subs.push(
      selected.subscribe((idx: number) => {
        console.log('idx', idx);
        this.selectedIndex = idx;
      })
    );

    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex,
      },
      outputs: { formSubmitted, selected },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`,
      },
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
    this.subs = [];
  }
}
