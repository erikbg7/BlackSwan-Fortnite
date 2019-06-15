import { Component, OnInit } from '@angular/core';
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

  renderComponent = false;
  weeks: Week[];
  selectedChallenges: Challenge[];
  selectedWeek: number;
  selected: string;


  ngOnInit() {
    this.getAllChallenges();
  }

  getAllChallenges() {
    this.fortniteService.getChallenges()
      .subscribe((res: object) => {
        this.weeks = Object.values(res['challenges']);
        this.selectWeekChallenges(0);
        this.selectedWeek = 0;
        this.renderComponent = true;
        //  this.weeks = res.challenges;
        // console.log(this.weeks['week1']);
        // console.log(Object.values(this.weeks));
        }
      );
  }

  selectWeekChallenges(index: number) {
    this.selectedWeek = index;
    this.selectedChallenges = this.weeks[index]['entries'];
    console.error('selected', this.selectedChallenges);
  }

  selectedWeekStyle(index: number) {
    if (this.selectedWeek === index) { return '#773399'; } else { return '#aa66cc'; }
  }

}
