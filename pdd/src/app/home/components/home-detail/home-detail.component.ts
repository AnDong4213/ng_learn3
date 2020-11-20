import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { ImageSlider, Channel, Ad, Product } from 'src/app/shared';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  username4 = 'ww';
  selectedTabLink$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    /* this.route.paramMap.subscribe((params) => {
      console.log(params);
      this.selectedTabLink = params.get('tabLink');

      // 改变的不是input这种参数，没有@input修饰器，得调用脏值监测的方法通知系统来检测自己的变化
      this.cd.markForCheck();
    }); */

    /* this.route.paramMap
      .pipe(
        filter((params) => params.has('tabLink')),
        map((params) => params.get('tabLink'))
      )
      .subscribe((tabLink) => {
        console.log('tabLink', tabLink);
        this.selectedTabLink = tabLink;
        this.cd.markForCheck();
      }); */

    // 使用async不用做脏值监测了  省略了this.cd.markForCheck()
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter((params) => params.has('tabLink')),
      map((params) => params.get('tabLink'))
    );

    this.sub = this.route.queryParamMap.subscribe((params) => {
      // console.log('查询参数', params);
    });

    /* this.route.url.subscribe((params) => {
      // console.log('url', params[0]);
    });

    this.route.data.subscribe((params) => {
      // console.log(' data', params);
    }); */

    // console.log('children', this.route.children);

    /* this.imageSliders = this.service.getBanners();
    this.channels = this.service.getChannels(); */

    /* this.service.getBanners().subscribe((bans) => {
      this.imageSliders = bans;
      this.cd.markForCheck();
    });
    this.service.getChannels().subscribe((chans) => {
      this.channels = chans;
      this.cd.markForCheck();
    }); */
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    // this.service.getAdByTab('men').subscribe((a) => console.log(a));

    this.ad$ = this.selectedTabLink$.pipe(
      switchMap((tab) => this.service.getAdByTab(tab)),
      filter((ads) => {
        // console.log('ads', ads);
        return ads.length > 0;
      }),
      map((ads) => ads[0])
    );
    this.products$ = this.selectedTabLink$.pipe(
      switchMap((tab) => this.service.getProductsByTab(tab))
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe(); // 把订阅取消掉，不取消有内存泄露的风险，使用async管道的不用写这步了
  }
}
