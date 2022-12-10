import { Injectable } from '@angular/core';
import { Currency } from 'src/app/models/Currency';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

export interface GetExchangeRatesResult {
  rates: Currency[];
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeServiceService {

  constructor(private apollo: Apollo) { }

  getExchangeRates() {
    return this.apollo.client.watchQuery<GetExchangeRatesResult>({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `
      });
  }

  test(): Observable<number> {
    return new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete()
    })
  }
}
