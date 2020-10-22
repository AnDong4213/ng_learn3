import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TopMenu, ImageSliderComponent } from 'src/app/shared/components';

interface Dict {
  [key: string]: string;
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit, AfterViewInit {
  title = 'pinduoduo';
  backgroundColor = 'pink';
  titleColor = '#fff';
  dict: Dict = {
    a: '9',
    b: 'b',
  };
  TopMenus: TopMenu[] = [
    {
      title: '热门',
      link: 'hot',
      id: 1,
    },
    {
      id: 2,
      title: '男装',
      link: 'men',
    },
    {
      id: 3,
      title: '百货',
      link: 'department',
    },
    {
      id: 4,
      title: '运动',
      link: 'sports',
    },
    {
      id: 5,
      title: '手机',
      link: 'mobile',
    },
    {
      id: 6,
      title: '家纺',
      link: 'textile',
    },
    {
      id: 7,
      title: '食品',
      link: 'food',
    },
    {
      id: 8,
      title: '电器',
      link: 'appliance',
    },
    {
      id: 9,
      title: '鞋包',
      link: 'shoes',
    },
    {
      id: 10,
      title: '汽车',
      link: 'cars',
    },
    {
      id: 11,
      title: '水果',
      link: 'fruits',
    },
    {
      id: 12,
      title: '电脑',
      link: 'computers',
    },
    {
      id: 13,
      title: '内衣',
      link: 'underwears',
    },
    {
      id: 14,
      title: '家装',
      link: 'home',
    },
    {
      id: 15,
      title: '母婴',
      link: 'baby',
    },
    {
      id: 16,
      title: '美妆',
      link: 'makeup',
    },
    {
      id: 17,
      title: '家具',
      link: 'furnitures',
    },
  ];

  @ViewChild(ImageSliderComponent) imageSlider: ImageSliderComponent; // 也可以用别名，组件的类型或者指令directive
  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    // console.log('imageSlider', this.imageSlider.el.nativeElement); // 属性“el”为私有属性，只能在类“ImageSliderComponent”中访问。
    // console.log('imageSlider', this.imageSlider);
  }

  handleTabSelected(tap: TopMenu) {
    console.log(tap);
    /* let colors = ['red', 'pink', 'blue'];
    let ids = Math.floor(Math.random() * 3);
    this.backgroundColor = colors[ids]; */
    this.router.navigate(['home', tap.link]);
  }
}
