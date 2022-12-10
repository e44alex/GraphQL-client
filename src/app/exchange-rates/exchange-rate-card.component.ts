import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/Currency';

@Component({
  selector: 'exchange-rate-card',
  template: `<div class="card exchange-rate-card" appHighlight="blue" style="background: {{color}}">
    <div class="exchange-rate-card__currency">{{rate.currency | uppercase}}</div>
    <div class="exchange-rate-card__rate">{{rate.rate! | currency}}</div>
  </div>`,
  styleUrls: ['./exchange-rates.component.css']
})
export default class ExchangeRateCardComponent {
  @Input()
  rate: Currency = {rate: "", currency: ""};
  color: string = 'white';

  ngOnInit(): void {
    this.color = this.getRandomColor();
  }

  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
