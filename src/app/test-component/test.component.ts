import { Component, OnInit } from '@angular/core';
import { ExchangeServiceService } from 'src/app/services/exchange-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  numbers: number[] = [];

  constructor(private service:ExchangeServiceService) {
    console.log("constructor");
  }

  ngOnInit(): void {
    // console.log("onInit");
    this.service.test().subscribe((value) => {
      this.numbers.push(value);
    })
  }

}
