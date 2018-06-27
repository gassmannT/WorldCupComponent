import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Match } from '../../models/models';
import { MatchService } from './../../services/match.service';

@Component({
  selector: 'app-matches-by-country',
  templateUrl: 'matches-by-country.component.html',
  styleUrls: ['matches-by-country.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class MatchesByCountryComponent implements OnChanges {
  @Input() country: string;
  // public matches$: Observable<Match[]>;
  public matches: Match[] = [];

  constructor(private matchService: MatchService, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['country']) {
      console.log('ngOnChanges', this.country);
      // this.matches$ = this.matchService
      //   .getMatchesByCountry(this.country)
      //   .pipe(tap(val => console.log(val)));
      this.matches = [];

      this.matchService.getMatchesByCountry(this.country).subscribe(list => {
        this.matches = list;
        this.cdr.detectChanges();
      });
    }
  }
}
