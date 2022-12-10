import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { AppComponent } from './app.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TestPipePipe } from 'src/app/pipes/test-pipe.pipe';
import { TestDirective } from 'src/app/directives/test.directive';
import { TestStructuralDirective } from './directives/test-structural.directive';
import ExchangeRateCardComponent from 'src/app/exchange-rates/exchange-rate-card.component';
import { TestComponent } from './test-component/test.component';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild, CanDeactivate,
  RouterModule,
  RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { Observable } from 'rxjs';

const canTest = () => {
  const item = localStorage.getItem('admin');
  console.log(item);

  return !!(item? JSON.parse(item) : false);
}

@Injectable()
export class TestGuard implements CanActivate, CanDeactivate<TestComponent> {
  canDeactivate(component: TestComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return canTest();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return canTest();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    TestPipePipe,
    TestDirective,
    TestStructuralDirective,
    ExchangeRateCardComponent,
    TestComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'exchange-rates', component: ExchangeRatesComponent},
      {path: 'test', component: TestComponent, canActivate: [TestGuard]},
      {path: 'notfound', component: NotfoundComponent},
      {path: '', redirectTo: '/exchange-rates', pathMatch: 'full'},
      {path: '**', redirectTo: '/notfound'}
    ])
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://48p1r2roz4.sse.codesandbox.io'
        })
      }
    },
    deps: [HttpLink]
  },
    TestGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
