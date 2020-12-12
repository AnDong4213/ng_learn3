import { NgModule } from '@angular/core';
import { SharedModule } from './../shared';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
