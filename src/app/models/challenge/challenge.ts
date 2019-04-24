export class Challenge {

  identifier: string;
  challenge: string;
  total: number;
  stars: number;
  difficulty: string;


  constructor(identifier: string, challenge: string, total: number, stars: number, difficulty: string) {
    this.identifier = identifier;
    this.challenge = challenge;
    this.total = total;
    this.stars = stars;
    this.difficulty = difficulty;
  }
}
