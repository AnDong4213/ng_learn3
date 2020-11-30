import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { TopMenu, ImageSliderComponent } from 'src/app/shared/components';
import { HomeService, token } from '../../services';

interface Dict {
  [key: string]: string;
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit, AfterViewInit {
  title = 'pinduoduo';
  backgroundColor = '#fff';
  titleColor = '#000';
  dict: Dict = {
    a: '9',
    b: 'b',
  };
  // TopMenus: TopMenu[] = [];
  TopMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;

  @ViewChild(ImageSliderComponent) imageSlider: ImageSliderComponent; // 也可以用别名，组件的类型或者指令directive
  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute,

    // `@Inject` 这个注解用于找到可注入的标识，
    // 也就是 provide 的那个标识
    @Inject(token) private baseUrl: string
  ) {}

  ngOnInit(): void {
    // console.log('ngOnInit');
    // this.TopMenus = this.service.getTabs();
    this.TopMenus$ = this.service.getTabs();

    console.log(this.baseUrl);
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter((params) => params.has('tabLink')),
      map((params) => params.get('tabLink'))
    );
  }

  ngAfterViewInit(): void {
    // console.log('imageSlider', this.imageSlider.el.nativeElement); // 属性“el”为私有属性，只能在类“ImageSliderComponent”中访问。
    // console.log('imageSlider', this.imageSlider);
  }

  handleTabSelected(tap: TopMenu) {
    // console.log(tap);
    /* let colors = ['red', 'pink', 'blue'];
    let ids = Math.floor(Math.random() * 3);
    this.backgroundColor = colors[ids]; */
    this.router.navigate(['home', tap.link]);
  }
}
