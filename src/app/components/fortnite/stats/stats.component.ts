import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FortniteApiService} from '../../../services/fortnite-api/fortnite-api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  renderStats: boolean;
  username: string; wins: string; kills: string; matches: string; winrate: string; kd: string;

  constructor(private activatedRouter: ActivatedRoute, private fortniteService: FortniteApiService) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.searchEpicPlayer(params['epicId']);
    });
  }

  searchEpicPlayer(username: string) {
    this.renderStats = false;
    this.fortniteService.getEpicId(username)
      .subscribe( (res: object) => {
        const epicId = res['data']['uid'];
        this.getUserStats(epicId);
      });
  }

  getUserStats(epicId: string) {
    this.fortniteService.getStatistics(epicId)
      .subscribe(res => {
        console.error('stats --> ', res);
        this.username = res['username'];
        this.wins = res['totals']['wins'];
        this.kills = res['totals']['kills'];
        this.matches = res['totals']['matchesplayed'];
        this.winrate = res['totals']['winrate'];
        this.kd = res['totals']['kd'];
        this.renderStats = true;
      });
  }
}
