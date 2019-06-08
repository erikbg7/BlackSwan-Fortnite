import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store/store.service';
import {Router} from '@angular/router';
import {Item} from '../../../models/item';
import {Challenge} from '../../../models/challenge/challenge';
import {Week} from '../../../models/week/week';
import {FortniteApiService} from '../../../services/fortnite-api/fortnite-api.service';



@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  constructor(private fortniteService: FortniteApiService, private router: Router) { }

  renderComponents = false;
  renderChallenges = false;
  weeks: Week[];


  ngOnInit() {
    this.getCH();

  }

  getCH() {
    this.fortniteService.getChallenges()
      .subscribe((res: object) => {
        this.weeks = Object.values(res['challenges']);
        console.log(this.weeks);
        this.renderComponents = true;

        //  this.weeks = res.challenges;
        // console.log(this.weeks['week1']);
        // console.log(Object.values(this.weeks));


        }
      );
  }

  toogleChallenges() {
    this.renderChallenges = !this.renderChallenges;
}


}
