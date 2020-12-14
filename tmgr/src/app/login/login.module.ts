import { NgModule } from '@angular/core';
import { SharedModule } from './../shared';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
