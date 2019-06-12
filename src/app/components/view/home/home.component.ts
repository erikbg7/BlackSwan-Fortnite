import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FortniteApiService} from '../../../services/fortnite-api/fortnite-api.service';
import {EpicNew} from '../../../models/new/new';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


// Para acelerar la carga de contenidos será necesario que al entrar
// en la pagina web ya esten cargados los contenidos que se van a renderizar
// Lo que haremos será una pedir todos los servicios al principio y hacer una copia local en Mongo.


export class HomeComponent implements OnInit {

  constructor(private fortniteService: FortniteApiService, private router: Router) { }

  epicNews: EpicNew[];

  toggleMoreNews: boolean;



  newsCache: EpicNew[];

  ngOnInit() {
    this.toggleMoreNews = false;

    const s = new Date(1559433647).toLocaleDateString();
    console.error('DATE --> ', s);
    this.loadNews();
  }

  searchEpicPlayer(username: string) {
    this.fortniteService.getEpicId(username)
      .subscribe( (res: object) => {
        const epicId = res['data']['uid'];
        this.router.navigateByUrl('/api/stats/' + epicId);
      });
  }

  // TODO: max age in cache, actually it uses most of the time the cached response
  loadNews() {
    if (localStorage.getItem('EpicNews')) {
      this.epicNews = JSON.parse(localStorage.getItem('EpicNews'));
      console.error('Storage news', this.epicNews);
    } else {
      this.fortniteService.getNews()
        .subscribe(res => {
          this.epicNews = res['data'];
          localStorage.setItem('EpicNews', JSON.stringify(res['data']));
          console.error('Live news');
        });
    }
  }

  toggleNews() {
    this.toggleMoreNews = true;
  }

}
