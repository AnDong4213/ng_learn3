import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImageSlider, Channel } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit {
  username4 = 'ww';
  selectedTabLink;
  imageSliders: ImageSlider[] = [];

  channels: Channel[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // console.log(params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    });

    this.route.queryParamMap.subscribe((params) => {
      // console.log('查询参数', params);
    });

    this.route.url.subscribe((params) => {
      // console.log('url', params[0]);
    });

    this.route.data.subscribe((params) => {
      // console.log(' data', params);
    });

    // console.log('children', this.route.children);

    this.imageSliders = this.service.getBanners();

    this.channels = this.service.getChannels();
  }
}
