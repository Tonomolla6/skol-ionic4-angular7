import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public router: Router) {}

  user1:string;
  user2:string;
  user3:string;
  x = 3;

  users(){
    console.log(this.user1);
    console.log(this.user2);
    console.log('x is ' + this.x);

  }
  onClick() {
    this.router.navigate (['questions', this.user1, this.user2, this.user3])
  }
}
  