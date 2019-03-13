import { Component, OnInit } from '@angular/core';
import { PlayerStatsService } from '../../services/player-stats.service';
import {Item} from '../../models/item';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  constructor(private statsService: PlayerStatsService, private router: Router) { }



  items: Item[];
  dailyItems: Item[];
  weeklyItems: Item[];



  ngOnInit() {
    this.getStore();
  }






  getStore() {
    this.statsService.getStore()
      .subscribe((res: Item[]) => {
        this.items = res;
        this.dailyItems = this.items.filter(item => item.storeCategory === 'BRDailyStorefront');
        this.weeklyItems = this.items.filter(item => item.storeCategory === 'BRWeeklyStorefront')
        }
      );
  }


}
