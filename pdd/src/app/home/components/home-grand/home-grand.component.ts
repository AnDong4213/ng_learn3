import {
  Component,
  OnInit,
  Injectable,
  Injector,
  Inject,
  InjectionToken,
} from '@angular/core';

// 这个注解说，我这个类是可以注入的
@Injectable()
class Product {
  constructor(
    @Inject(String) private name: string,
    @Inject(String) private model: string,
    @Inject(String) private color: string
  ) {}
}

@Injectable()
class PurchaseOrder {
  // private product: Product;
  private amount: number;
  constructor(private product: Product) {
    // this.product = new Product('多少');
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css'],
})
export class HomeGrandComponent implements OnInit {
  obj = { id: '112', name: 'xx手机', model: '全面屏' };
  date: Date;
  date1: Date;
  price: number;
  data = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {
    this.date = new Date();
    this.date1 = this.minusDays(new Date(), 69);
    this.price = 11123.23;
    // console.log(+new Date());

    const token = new InjectionToken<string>('baseUrl');

    const injector = Injector.create({
      // 在providers数组里描述这些东西用该怎样被创建，provider用来告诉Injector你应该怎样去构造这个对象
      providers: [
        {
          // provide是令牌或是类的形式标识它，知道要在池子里找什么东西
          provide: Product,
          useFactory: () => {
            return new Product('大米手机', 'DM-9', '黑色');
          },
          deps: [],
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product],
        },
        {
          provide: token,
          useValue: 'http://localhost1',
        },
      ],
    });

    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder));
    console.log(injector.get(token));
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
