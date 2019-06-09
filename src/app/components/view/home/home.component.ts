import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FortniteApiService} from '../../../services/fortnite-api/fortnite-api.service';

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

  ngOnInit() {
  }

  searchEpicPlayer(username: string) {
    this.fortniteService.getEpicId(username)
      .subscribe( (res: object) => {

        console.error(res);
        console.error(res['data']);
        const epicId = res['data']['uid'];

        console.error(epicId);

        this.router.navigateByUrl('/api/stats/' + epicId);


        //console.error(info.valueOf());
        //console.error(info.toString());



        //alert(res['data']['entries']);
      }
  );


  }


}
