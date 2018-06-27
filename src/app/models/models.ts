export interface Match {
    venue: string;
    location: string;
    status: string;
    time?: string | null;
    fifa_id: string;
    home_team_statistics?: HomeTeamStatisticsOrAwayTeamStatistics | null;
    away_team_statistics?: HomeTeamStatisticsOrAwayTeamStatistics | null;
    datetime: string;
    last_event_update_at?: string | null;
    last_score_update_at: string;
    home_team: HomeTeamOrAwayTeam;
    away_team: HomeTeamOrAwayTeam;
    winner?: string | null;
    winner_code?: string | null;
    home_team_events?: (HomeTeamEventsEntityOrAwayTeamEventsEntity | null)[] | null;
    away_team_events?: (HomeTeamEventsEntityOrAwayTeamEventsEntity | null)[] | null;
  }
  export interface HomeTeamStatisticsOrAwayTeamStatistics {
    attempts_on_goal: number;
    on_target: number;
    off_target: number;
    blocked: number;
    woodwork: number;
    corners: number;
    offsides: number;
    ball_possession: number;
    pass_accuracy: number;
    num_passes: number;
    passes_completed: number;
    distance_covered: number;
    balls_recovered: number;
    tackles: number;
    clearances: number;
    yellow_cards: number;
    red_cards: number;
    fouls_committed: number;
    country: string;
  }

  export interface HomeTeamOrAwayTeam {
    country: string;
    code: string;
    goals: number;
  }
  export interface HomeTeamEventsEntityOrAwayTeamEventsEntity {
    id: number;
    type_of_event: string;
    player: string;
    time: string;
  }
