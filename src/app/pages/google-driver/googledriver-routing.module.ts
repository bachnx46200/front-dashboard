import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleDriverComponent } from './google-driver.component';
import { ModalUpFileComponent } from './modal-up-file/modal-up-file.component';
const routes: Routes = [
  { path: '', component: GoogleDriverComponent },
  { path: 'up-file', component: ModalUpFileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogledriverRoutingModule { }
