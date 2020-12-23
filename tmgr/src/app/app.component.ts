import {
  Component,
  Injector,
  ReflectiveInjector,
  Inject,
  Injectable,
} from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { environment } from 'src/environments/environment';
import { token } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state('green', style({ backgroundColor: 'green' })),
      state('red', style({ backgroundColor: 'red' })),
      transition('green => red', animate(1000)),
      transition('red => green', animate(1000)),
    ]),
    trigger('square2', [
      state('green', style({ backgroundColor: 'pink' })),
      state('red', style({ backgroundColor: 'orange' })),
      transition('green => red', animate(1000)),
      transition(
        'red => green',
        animate(
          '3s',
          keyframes([
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'blue' }),
            style({ backgroundColor: 'orange' }),
            style({ backgroundColor: 'black' }),
          ])
        )
      ),
    ]),
  ],
})
export class AppComponent {
  squareState: string;
  darkTheme = false;

  constructor(@Inject(token) public config: string) {
    console.log('config', config);

    const injector = Injector.create([
      {
        provide: Person,
        useClass: Person,
        deps: [Id, Address], // Can't resolve all parameters for Person: (?, ?)
      },
      {
        provide: Address,
        useFactory: () => {
          if (environment.production) {
            return new Address('北京', 'br', 'kk', 'oo');
          } else {
            return new Address('上海', '上海', '静安区', '外滩');
          }
        },
      },
      {
        provide: Id,
        useFactory: () => {
          return Id.getInstance('idcard');
        },
      },
    ]);

    console.log(injector.get(Person));
  }

  ngOnInit() {}

  switchTheme(checked) {
    this.darkTheme = checked;
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
class Id {
  static getInstance(type: string): Id {
    return new Id();
  }
}
class Address {
  privince: string;
  city: string;
  district: string;
  street: string;
  constructor(privince, city, district, street) {
    this.privince = privince;
    this.city = city;
    this.district = district;
    this.street = street;
  }
}

/* class Person {
  id: Id;
  address: Address;
  constructor() {
    this.id = Id.getInstance('idcard');
    this.address = new Address('北京', 'br', 'kk', 'oo');
  }
} */

class Person {
  id: Id;
  address: Address;

  constructor(@Inject(Id) id: any, @Inject(Address) address: any) {
    this.id = id;
    this.address = address;
  }
}
