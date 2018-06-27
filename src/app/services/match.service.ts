import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private SERVICE_BASE_URL = 'https://worldcup.sfg.io/matches/';

  constructor(private http: HttpClient) {}

  getMatchesByCountry(countryCode: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.SERVICE_BASE_URL}country?fifa_code=${countryCode}`);
  }

  getTodayMatches() {
    return this.http.get<Match[]>(`${this.SERVICE_BASE_URL}today`);
  }
}
