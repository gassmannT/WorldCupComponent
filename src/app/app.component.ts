import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>Hallo Angular Element</div>
  <app-matches-by-country [country]="'sui'"></app-matches-by-country>
 <hr>
 <app-matches-today></app-matches-today>
  `
})
export class AppComponent {
  constructor() {}
}
