import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import {Router} from '@angular/router';
import {Item} from '../../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private storeService: StoreService, private router: Router) { }

  items: Item[];
  dailyItems: Item[];
  weeklyItems: Item[];
  renderStore = false;


  res2: Item[];



  ngOnInit() {
    this.getStore();
    this.res2 = [
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/4DEB1211_large.png',
        manifestId: 1211,
        name: 'Pot O\' Gold',
        rarity: 'Sturdy',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/EA9511024_large.png',
        manifestId: 11024,
        name: 'Quickstrike',
        rarity: 'Handmade',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/6E2511031_large.png',
        manifestId: 11031,
        name: 'Emerald Smasher',
        rarity: 'Sturdy',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 800
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/30FB11011_large.png',
        manifestId: 11011,
        name: 'Kenji',
        rarity: 'Quality',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/70BB11032_large.png',
        manifestId: 11032,
        name: 'Lucky Rider',
        rarity: 'Quality',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/700F11012_large.png',
        manifestId: 11012,
        name: 'Kuno',
        rarity: 'Quality',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/A5351212_large.png',
        manifestId: 1212,
        name: 'Sgt. Green Clover',
        rarity: 'Handmade',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 800
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/6B371248_large.png',
        manifestId: 1248,
        name: 'Step it Up',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/0C2111018_large.png',
        manifestId: 11018,
        name: 'Raining Doubloons',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/B46311033_large.png',
        manifestId: 11033,
        name: 'Lucky Coins',
        rarity: 'Handmade',
        storeCategory: 'BRDailyStorefront',
        vBucks: 200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/7269417_large.png',
        manifestId: 417,
        name: 'Recon Specialist',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/FA3011034_large.png',
        manifestId: 11034,
        name: 'Lucky',
        rarity: 'Handmade',
        storeCategory: 'BRDailyStorefront',
        vBucks: 300
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/ECF94835_large.png',
        manifestId: 4835,
        name: 'Spectre',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 800
      }
    ];

    // this.getFakeData();
  }




  getFakeData() {
    this.items = this.res2;
    this.dailyItems = this.items.filter(item => item.storeCategory === 'BRDailyStorefront');
    this.weeklyItems = this.items.filter(item => item.storeCategory === 'BRWeeklyStorefront');
    this.renderStore = true;
  }










  getStore() {
    this.storeService.getStore()
      .subscribe((res: Item[]) => {
          this.items = res;
          this.dailyItems = this.items.filter(item => item.storeCategory === 'BRDailyStorefront');
          this.weeklyItems = this.items.filter(item => item.storeCategory === 'BRWeeklyStorefront');
          this.renderStore = true;
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
