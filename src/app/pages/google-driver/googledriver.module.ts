import { NgModule } from '@angular/core';

import { GoogledriverRoutingModule } from './googledriver-routing.module';

import { GoogleDriverComponent } from './google-driver.component';


@NgModule({
  imports: [GoogledriverRoutingModule],
  declarations: [GoogleDriverComponent],
  exports: [GoogleDriverComponent]
})
export class GoogledriverModule { }
