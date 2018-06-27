import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../../models/models';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-matches-today',
  templateUrl: 'matches-today.component.html',
  styleUrls: ['matches-today.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MatchesTodayComponent implements OnInit {
  public matches$: Observable<Match[]>;
  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matches$ = this.matchService.getTodayMatches();
  }
}
