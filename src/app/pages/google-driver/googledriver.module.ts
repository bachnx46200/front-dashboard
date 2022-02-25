import { NgModule } from '@angular/core';

import { GoogledriverRoutingModule } from './googledriver-routing.module';

import { GoogleDriverComponent } from './google-driver.component';

import { DemoNgZorroAntdModule } from '../../../app/ng-zorro-antd.module';
import { CommonModule } from '@angular/common';
import { ModalUpFileComponent } from './modal-up-file/modal-up-file.component';
@NgModule({
  imports: [GoogledriverRoutingModule,
    DemoNgZorroAntdModule,CommonModule,],
  declarations: [GoogleDriverComponent,ModalUpFileComponent],
  exports: [GoogleDriverComponent]
})
export class GoogledriverModule { }
