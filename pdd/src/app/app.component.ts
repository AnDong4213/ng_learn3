import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { TabItem } from './shared';
import { DialogService } from './dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'app.addStyle.css'],
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>;
  data$: Observable<any>;

  constructor(private router: Router, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map((tab) => this.getSelectedIndex(tab))
    );

    this.data$ = this.dialogService.getData();
  }

  handleTabSelect(tab: TabItem) {
    // console.log(tab);
    this.router.navigate([tab.link]);
  }

  getSelectedIndex(tab: string) {
    switch (tab) {
      case 'recommend':
        return 1;
      case 'category':
        return 2;
      case 'chat':
        return 3;
      case 'my':
        return 4;
      default:
        return 0;
    }
  }

  removeDialog() {
    this.dialogService.close();
  }
}
