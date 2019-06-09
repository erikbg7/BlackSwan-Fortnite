import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FortniteApiService} from '../../../services/fortnite-api/fortnite-api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private fortntieApiService: FortniteApiService) { }

  username: string; wins: string; kills: string; matches: string; winrate: string; kd: string;

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.getUserStats(params['epicId']);
    });
  }

  getUserStats(epicId: string) {
    this.fortntieApiService.getStatistics(epicId)
      .subscribe(res => {
        console.error('stats --> ', res);
        this.username = res['username'];
        this.wins = res['totals']['wins'];
        this.kills = res['totals']['kills'];
        this.matches = res['totals']['matchesplayed'];
        this.winrate = res['totals']['winrate'];
        this.kd = res['totals']['kd'];

      });
  }
}
