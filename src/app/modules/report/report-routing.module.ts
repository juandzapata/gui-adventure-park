import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsTestComponent } from './chartjs-test/chartjs-test.component';

const routes: Routes = [
  {
    path: "chartjs-test",
    component: ChartjsTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
