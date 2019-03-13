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
          this.weeklyItems = this.items.filter(item => item.storeCategory === 'BRWeeklyStorefront');
        }
      );
  }


  defineStyle(option: string): object {
    switch (option) {
      case 'Handmade':
        return {'background-image': 'radial-gradient(#5bad03 0%,#01700a 100%)',
        'border-image-source': 'linear-gradient(25deg,#008a09 15%,#9eef00)'};
      case 'Sturdy':
        return {'background-image': 'radial-gradient(#3dc7ff 0%,#0059a1 100%)',
          'border-image-source': 'linear-gradient(25deg,#0063c5 15%,#00efec)'};
      case 'Quality':
        return {'background-image': 'radial-gradient(#d27bf4 0%,#7907a5 100%)',
          'border-image-source': 'linear-gradient(25deg,#8037d7 15%,#df2cef)'};
      case 'Fine':
        return {'background-image': 'radial-gradient(#fb9625 0%,#875134 100%)',
          'border-image-source': 'linear-gradient(25deg,#df7241 15%,#f6c87c)'};
    }
  }



}
