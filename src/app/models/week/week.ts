import {Challenge} from '../challenge/challenge';

export class Week {


  challenges: Challenge[];


  constructor(challenges: Challenge[]) {
    this.challenges = challenges;
  }
}
