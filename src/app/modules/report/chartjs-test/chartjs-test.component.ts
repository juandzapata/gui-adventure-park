import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

declare const firstReport:any;

@Component({
  selector: 'app-chartjs-test',
  templateUrl: './chartjs-test.component.html',
  styleUrls: ['./chartjs-test.component.css']
})
export class ChartjsTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.report();
  }

  report(){
    const data = [
    { year: 2015, count: 100 },
    { year: 2016, count: 201 },
    { year: 2017, count: 152 },
    { year: 2018, count: 253 },
    { year: 2019, count: 224 },
    { year: 2020, count: 302 },
    { year: 2021, count: 281 },
    ]

    firstReport(data);
  }

}
