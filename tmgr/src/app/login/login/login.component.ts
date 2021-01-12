import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { QuoteService } from './../../services';
import { Quote } from '../../domain';
import { debug } from '../../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote$: Observable<Quote>;

  constructor(private fb: FormBuilder, private quoteService: QuoteService) {
    this.quote$ = this.quoteService
      .getQuote()
      .pipe(debug('自定义operators')) as Observable<Quote>;

    /* this.quoteService.getQuote().subscribe((q) => {
      console.log(q);
    }); */
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        'zhaoad@163.com',
        Validators.compose([
          Validators.required,
          Validators.email,
          this.validate,
        ]),
      ],
      password: ['qwe', Validators.required],
    });
  }

  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();

    console.log('value, valid', value, valid);

    // 动态验证器
    // if ()
    // this.form.controls['email'].setValidators(this.validate);

    // this.form.setValue()
  }

  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }

    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }

    return {
      emailNotValid: 'The email must start with wang',
    };
  }
}
