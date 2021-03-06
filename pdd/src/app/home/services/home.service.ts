import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageSlider, Channel, TopMenu, Ad, Product } from 'src/app/shared';
import { environment } from 'src/environments/environment';

/**
 * 如果采用 `providedIn` ，
 * 这个形式是 Angular v6 之后引入的
 * 这种写法和传统的在 Module 中设置 providers 数组的写法的区别在于
 * 可以让服务在真正被其它组件或服务注入时才编译到最后的 js 中
 * 对于引入第三方类库较多的应用可以有效减小 js 大小
 */

@Injectable({
  providedIn: 'root',
})
export class HomeService {
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

  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        'https://img.alicdn.com/i1/1622630691/O1CN01In1kDx1GyWAOvpFIM_!!1622630691.jpg',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        'https://img.alicdn.com/i3/1622630691/TB2ok4mwFmWBuNjSspdXXbugXXa_!!1622630691.jpg',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        'https://img.alicdn.com/i1/2203600174/O1CN01YcqOVI1D9jWfQM72p_!!2203600174-0-lubanu-s.jpg',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        'https://img.alicdn.com/i4/2207921760818/O1CN01chTwD81HugaLTHxJ8_!!2207921760818-0-scmitem176000.jpg',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        'https://img.alicdn.com/i1/2207528123363/O1CN01FhnETV1aiIaYPKzoz_!!2207528123363.jpg',
      link: '',
      caption: '',
    },
  ];

  channels: Channel[] = [
    {
      id: 1,
      title: '限时秒杀',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-13/298376dd8176f90df743de9f08a756eb.png',
      link: 'hot',
    },
    {
      id: 2,
      title: '断码清仓',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-07/678088ee2500f08a193ea8619bc0ae76.png',
      link: 'men',
    },
    {
      id: 3,
      title: '品牌馆',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-03-14/a01571d7bde632029c76ad9a298570ec.png',
      link: 'sports',
    },
    {
      id: 4,
      title: '多多果园',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-03/d21a7598e29ce189a9a57bb234ee4fad.png',
      link: 'department',
    },
    {
      id: 5,
      title: '9块9特卖',
      icon:
        'http://t01img.yangkeduo.com/images/2018-05-16/d86ceaeaa0bccaeb3b3dee76f64f0192.png',
      link: 'food',
    },
    {
      id: 6,
      title: '助力享免单',
      icon:
        'http://t05img.yangkeduo.com/images/2018-05-16/bf18833fa4c298a040fe01f279f6f6ec.png',
      link: 'textile',
    },
    {
      id: 7,
      title: '天天领现金',
      icon:
        'http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png',
      link: 'mobile',
    },
    {
      id: 8,
      title: '1分抽大奖',
      icon:
        'http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png',
      link: 'appliance',
    },
    {
      id: 9,
      title: '充值中心',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-02/68aefda33f6afac045997edd25a3844e.png',
      link: 'shoes',
    },
    {
      id: 10,
      title: '每日好店',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png',
      link: 'computers',
    },
    {
      id: 11,
      title: '现金签到',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-08-01/f13e2dff54d604518a1db4facd89d300.png',
      link: 'fruits',
    },
    {
      id: 12,
      title: '金猪赚大钱',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png',
      link: 'cars',
    },
    {
      id: 13,
      title: '电器城',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-26/ee327a5ee7fb7ff76a98cf71be967a20.png',
      link: 'underwears',
    },
    {
      id: 14,
      title: '爱逛街',
      icon:
        'http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png',
      link: 'home',
    },
    {
      id: 15,
      title: '砍价免费拿',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-14/4ad66f8d7d28d6237a9f25b9a6d19f3e.png',
      link: 'baby',
    },
    {
      id: 16,
      title: '帮帮免费团',
      icon:
        'http://t11img.yangkeduo.com/images/2018-04-28/5cfc9925dac860135143921e0f687a7d.png',
      link: 'furnitures',
    },
  ];

  constructor(private http: HttpClient) {}

  getTabs() {
    // return this.TopMenus;

    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
  }

  getBanners() {
    // return this.imageSliders;

    /* return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`, {
      params: { icode: `${environment.icode}` },
    }); */

    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
  }

  getChannels() {
    // return this.channels;

    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
  }

  getAdByTab(tab: string) {
    return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
      params: { categories_like: tab },
    });
  }

  getProductsByTab(tab: string) {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
      params: { categories_like: tab },
    });
  }
}
