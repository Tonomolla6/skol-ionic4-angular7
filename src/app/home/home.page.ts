import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  users: object[];
  posicion: string;

    constructor(public router: Router, public activeRoute:ActivatedRoute) {
      this.users = [
      {name:'jugador_1'},
      {name:'jugador_2'},
      {name:'jugador_3'}
    ]
    localStorage.clear();
  }

  user3 = this.activeRoute.snapshot.paramMap.get('jugador_1');

  onClick() {
    //this.users.forEach(function(usuario) {
      //localStorage.setItem("usuarios", JSON.stringify(this.activeRoute.snapshot.paramMap.get(`${usuario["name"]}`)));
      //console.log(this.activeRoute.snapshot.paramMap.get(`${usuario["name"]}`));
    //});

    console.log(this.activeRoute.snapshot.paramMap.get('jugador_1'));

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
    this.users.push({name: `jugador_${totalUser}`});
  }
}

