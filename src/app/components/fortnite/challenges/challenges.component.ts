import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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

    if (localStorage.getItem('Challenges')) {
      this.weeks = JSON.parse(localStorage.getItem('Challenges'));
      this.selectWeekChallenges(0);
      this.selectedWeek = 0;
      this.renderComponent = true;
    } else {
      this.fortniteService.getChallenges()
        .subscribe((res: object) => {
            this.weeks = Object.values(res['challenges']);
            localStorage.setItem('Challenges', JSON.stringify(this.weeks));
            this.selectWeekChallenges(0);
            this.selectedWeek = 0;
            this.renderComponent = true;
          }
        );
    }
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
