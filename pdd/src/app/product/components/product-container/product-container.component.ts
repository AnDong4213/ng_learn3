import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;

  constructor(
    private orderService: OrderService,
    private dialogService: DialogService,
    private route: ActivatedRoute
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
    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {},
      outputs: {},
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`,
      },
    });
  }
}
