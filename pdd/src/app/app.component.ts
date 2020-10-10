import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';

interface Dict {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'app.addStyle.css'],
})
export class AppComponent {
  title = 'pinduoduo';
  backgroundColor = 'red';
  titleColor = '#fff'
  dict: Dict = {
    a: '9',
    b: 'b',
  };
  TopMenus: TopMenu[] = [
    {
      title: '热门',
      link: '',
    },
    {
      title: '男装',
      link: '',
    },
    {
      title: '百货',
      link: '',
    },
    {
      title: '运动',
      link: '',
    },
    {
      title: '手机',
      link: '',
    },
    {
      title: '家纺',
      link: '',
    },
    {
      title: '食品',
      link: '',
    },
    {
      title: '电器',
      link: '',
    },
    {
      title: '鞋包',
      link: '',
    },
    {
      title: '汽车',
      link: '',
    },
    {
      title: '水果',
      link: '',
    },
    {
      title: '电脑',
      link: '',
    },
    {
      title: '内衣',
      link: '',
    },
    {
      title: '家装',
      link: '',
    },
    {
      title: '母婴',
      link: '',
    },
    {
      title: '美妆',
      link: '',
    },
    {
      title: '家具',
      link: '',
    },
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        'https://img.alicdn.com/i1/1622630691/O1CN01In1kDx1GyWAOvpFIM_!!1622630691.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://img.alicdn.com/i4/761832027/O1CN01Zm2yKr1QqPNdxPUE9_!!761832027.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://img.alicdn.com/i1/2203600174/O1CN01YcqOVI1D9jWfQM72p_!!2203600174-0-lubanu-s.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://img.alicdn.com/i4/2207921760818/O1CN01chTwD81HugaLTHxJ8_!!2207921760818-0-scmitem176000.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://img.alicdn.com/i1/2207528123363/O1CN01FhnETV1aiIaYPKzoz_!!2207528123363.jpg',
      link: '',
      caption: ''
    }
  ]

  handleTabSelected(m) {
    console.log(m);
    let colors = ['red', 'pink', 'blue'];
    let ids = Math.floor(Math.random() * 3);
    this.backgroundColor = colors[ids]
  }
}
