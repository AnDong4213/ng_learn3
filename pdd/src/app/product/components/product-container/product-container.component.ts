import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { OrderService } from '../../services';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;

  constructor(private service: OrderService, private route: ActivatedRoute) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter((params) => params.has('productId')),
      map((params) => params.get('productId'))
    );
    // productId$.subscribe((a) => console.log(a));
    this.variants$ = productId$.pipe(
      switchMap((productId) =>
        this.service.getProductVariantsByProductId(productId)
      )
    );
    // this.variants$.subscribe((a) => console.log(a));
  }
}
