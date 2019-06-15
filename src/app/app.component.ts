import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from './services/data/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BS-Fortnite';

  message: any;
  subscription: Subscription;


  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getState().subscribe(message => {
      this.message = message;
      console.error('app message', this.message);
    });
  }
}
