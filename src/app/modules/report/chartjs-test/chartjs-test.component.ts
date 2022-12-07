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
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    ]

    firstReport(data);
  }

}
