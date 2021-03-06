import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { ProductVariant } from './../../domain';
import { DialogService } from 'src/app/dialog/services';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductVariantDialogComponent implements OnInit {
  @Input() variants: ProductVariant[] = [];
  @Input() selectedVariantIndex = -1;

  @Output() formSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter<number>();
  count = 1;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  get price() {
    if (!this.variants.length || this.selectedVariantIndex < 0) {
      return 0;
    }
    return this.variants[this.selectedVariantIndex].price;
  }

  get productImage() {
    return this.selectedVariantIndex < 0
      ? this.variants[0].product.imageUrl
      : this.variants[this.selectedVariantIndex].product.imageUrl;
  }

  get selectedVariantName() {
    return this.selectedVariantIndex < 0
      ? ''
      : this.variants[this.selectedVariantIndex].name;
  }

  handleSelection(idx: number) {
    this.selectedVariantIndex = idx;
    this.selected.emit(idx);
  }

  handleConfirm() {
    if (this.selectedVariantIndex < 0 || !this.count) {
      return;
    }
    this.formSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count,
    });
    this.dialogService.close();
  }

  handleAmountChange(count: number) {
    this.count = count;
  }
}
