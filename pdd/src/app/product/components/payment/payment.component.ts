import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Payment {
  id: number;
  name: string;
  icon: string;
  desc?: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() payments: Payment[] = [];
  @Output() paymentSelected = new EventEmitter<Payment>();
  selectedId = 1;

  constructor() {}

  ngOnInit() {}

  handleSelection(payment: Payment) {
    this.selectedId = payment.id;
    this.paymentSelected.emit(payment);
  }
}
