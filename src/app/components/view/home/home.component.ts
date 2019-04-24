import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


// Para acelerar la carga de contenidos será necesario que al entrar
// en la pagina web ya esten cargados los contenidos que se van a renderizar
// Lo que haremos será una pedir todos los servicios al principio y hacer una copia local en Mongo.


export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
