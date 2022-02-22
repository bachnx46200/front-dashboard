import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleDriverComponent } from './google-driver.component';

const routes: Routes = [
  { path: '', component: GoogleDriverComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogledriverRoutingModule { }
