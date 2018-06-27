import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatchesByCountryComponent } from './components/matches-by-country/matches-by-country.component';
import { MatchesTodayComponent } from './components/matches-today/matches-today.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatCardModule],
  declarations: [AppComponent, MatchesByCountryComponent, MatchesTodayComponent],
  providers: [],
  entryComponents: [MatchesByCountryComponent, MatchesTodayComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MatchesByCountryComponent, { injector: this.injector });
    customElements.define('app-matches-by-country', el);

    const el1 = createCustomElement(MatchesTodayComponent, { injector: this.injector });
    customElements.define('app-matches-today', el1);
  }
}
