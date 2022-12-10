import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Currency } from 'src/app/models/Currency';
import { ExchangeServiceService } from 'src/app/services/exchange-service.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExchangeRatesComponent implements OnInit {
  searchValue: string = ""
  rates: Currency[] | undefined
  filteredRates: Currency[] | undefined
  loading = true
  error: any

  @Input() testProp = '';
  constructor(private exchangeService: ExchangeServiceService) { }

  ngOnInit(): void {
    this.exchangeService.getExchangeRates().subscribe((value: any) => {
      this.rates = value.data?.rates;
      this.filteredRates= value.data?.rates;
      this.loading = false;
    })
    console.log(this.testProp);
  }

  searchCurrency() {
    if (this.searchValue && this.searchValue !== "") {
      this.searchValue = this.searchValue.toUpperCase();

      this.filteredRates = this.rates?.filter(rate => rate.currency.includes(this.searchValue))
    } else {
      this.clearSearch()
    }
  }

  clearSearch() {
    this.searchValue = "";
    this.filteredRates = this.rates;
  }
}
