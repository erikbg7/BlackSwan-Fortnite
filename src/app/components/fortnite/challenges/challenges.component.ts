import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store/store.service';
import {Router} from '@angular/router';
import {Item} from '../../../models/item';
import {Challenge} from '../../../models/challenge/challenge';
import {Week} from '../../../models/week/week';



@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  constructor(private storeService: StoreService, private router: Router) { }

  renderChallenges = false;
  weeks: Week[];

  ngOnInit() {
    this.getCH();

  }

  getCH() {
    this.storeService.getChallenges()
      .subscribe((res: object) => {
        this.weeks = Object.values(res['challenges']);
        console.log(this.weeks);
        this.renderChallenges = true;

        //  this.weeks = res.challenges;
        // console.log(this.weeks['week1']);
        // console.log(Object.values(this.weeks));


        }
      );
  }



}
