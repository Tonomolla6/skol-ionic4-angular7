import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  users: object[];
  posicion: string;

  constructor(public router: Router, private storage: Storage, public activeRoute:ActivatedRoute) {
    this.users = [
      {name:'Jugador 1'},
      {name:'Jugador 2'},
      {name:'Jugador 3'}
    ]
    localStorage.clear();
  }
  

  onClick() {
    //this.users.forEach(function(usuario) {
      //localStorage.setItem("usuarios", JSON.stringify(this.activeRoute.snapshot.paramMap.get(`${usuario["name"]}`)));
      //console.log(this.activeRoute.snapshot.paramMap.get(`${usuario["name"]}`));
    //});

    console.log(this.activeRoute.snapshot.paramMap.get('Jugador 1'));

    ///
    //let users = localStorage.getItem('usuarios')
    //let randomNumber = 2;
    //let user = null;
    //user = users[randomNumber];

    // /localStorage.setItem("usuarios", JSON.stringify(this.users));

  //this.router.navigate (['questions']);
  }
  mas_jugadores(){
    let totalUser = this.users.length + 1;
    this.users.push({name: `Jugador ${totalUser}`});
  }
}
