import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ChartjsTestComponent } from './chartjs-test/chartjs-test.component';


@NgModule({
  declarations: [
    ChartjsTestComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
