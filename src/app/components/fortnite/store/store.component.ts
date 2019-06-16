import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FortniteApiService} from '../../../services/fortnite-api/fortnite-api.service';
import {Item} from '../../../models/item/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private fortniteService: FortniteApiService, private router: Router) { }

  items: Item[];
  dailyItems: Item[];
  weeklyItems: Item[];
  renderStore = false;




  res2: Item[];



  ngOnInit() {
    this.getStore();
    this.res2 = [
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/14F56846_large.png',
        manifestId: 6846,
        name: 'Cabbie',
        rarity: 'Handmade',
        storeCategory: 'BRDailyStorefront',
        vBucks: 800
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/6C01717_large.png',
        manifestId: 717,
        name: 'Batsickle',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 800
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/B2446571_large.png',
        manifestId: 6571,
        name: 'Backstroke',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/3C4F6926_large.png',
        manifestId: 6926,
        name: 'Firewalker',
        rarity: 'Sturdy',
        storeCategory: 'BRDailyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/300C11266_large.png',
        manifestId: 11266,
        name: 'Digital Grayscale',
        rarity: 'Handmade',
        storeCategory: 'BRDailyStorefront',
        vBucks: 300
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/1A161568_large.png',
        manifestId: 1568,
        name: 'Finger Guns',
        rarity: 'Handmade',
        storeCategory: 'BRDailyStorefront',
        vBucks: 200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/3E8B11789_large.png',
        manifestId: 11789,
        name: 'Scimitar',
        rarity: 'Rare',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/37AB11788_large.png',
        manifestId: 11788,
        name: 'Emblem',
        rarity: 'Rare',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/B19C10921_large.png',
        manifestId: 10921,
        name: 'Choppa',
        rarity: 'Quality',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/AEBF10896_large.png',
        manifestId: 10896,
        name: 'Bandolette',
        rarity: 'Sturdy',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/B06C10952_large.png',
        manifestId: 10952,
        name: 'Machete',
        rarity: 'Handmade',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 500
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/D2DC11790_large.png',
        manifestId: 11790,
        name: 'Chrono',
        rarity: 'Rare',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 400
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/341511787_large.png',
        manifestId: 11787,
        name: 'Sandstorm',
        rarity: 'Rare',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 1200
      },
      {
        imageUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/470511793_large.png',
        manifestId: 11793,
        name: 'Fork Knife',
        rarity: 'Handmade',
        storeCategory: 'BRWeeklyStorefront',
        vBucks: 500
      }
    ];

    this.getFakeData();

  // This is the only important
  }
  //



  getFakeData() {
    this.items = this.res2;
    this.dailyItems = this.items.filter(item => item.storeCategory === 'BRDailyStorefront');
    this.weeklyItems = this.items.filter(item => item.storeCategory === 'BRWeeklyStorefront');
    this.renderStore = true;
  }










  getStore() {
    this.fortniteService.getStore()
      .subscribe((res: Item[]) => {
          this.items = res;
          this.dailyItems = this.items.filter(item => item.storeCategory === 'BRDailyStorefront');
          this.weeklyItems = this.items.filter(item => item.storeCategory === 'BRWeeklyStorefront');
          this.renderStore = true;
        }
      );

    this.fortniteService.store()
      .subscribe( (res => {
        console.error('NEW STORE BITCH', res);
      } ));
  }

  defineStyle(style: 'Handmade' | 'Sturdy' | 'Quality' | 'Fine' | 'Rare'): object {
    switch (style) {
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
      case 'Rare':
        return {'background-image': 'radial-gradient(#fb9625 0%,#875134 100%)',
          'border-image-source': 'linear-gradient(25deg,#df7241 15%,#f6c87c)'};
    }
  }

}
