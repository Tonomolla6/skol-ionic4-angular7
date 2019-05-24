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
  constructor(public router: Router, public activeRoute:ActivatedRoute) {
    this.users = [
      {name:'Jugador 1', value:''},
      {name:'Jugador 2', value:''},
      {name:'Jugador 3', value:''}
    ]
  }

  //user = this.activeRoute.snapshot.paramMap.get('user1');

  x = 3;

  onClick() {
    //this.router.navigate (['questions'])
    console.log(this.users);
  }

  mas_jugadores() {
    let totalUser = this.users.length + 1;
    this.users.push({name: `Jugador ${totalUser}`, value:''});
  }
}

