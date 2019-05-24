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
      {name:'user1', value:''},
      {name:'user2', value:''},
      {name:'user3', value:''}
    ]
  }

  //user = this.activeRoute.snapshot.paramMap.get('user1');

  x = 3;

  onClick() {
    //this.router.navigate (['questions'])
    console.log(this.users);
  }
}

