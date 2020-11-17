import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-site',
  templateUrl: './b-site.component.html',
  styleUrls: ['./b-site.component.scss'],
})
export class BSiteComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(99);
  }
}
