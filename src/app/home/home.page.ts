import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public router: Router, private storage: Storage) {}
  user1: string;
  user2: string;
  user3: string;
  onClick() {
    localStorage.setItem('user1', this.user1);
    this.router.navigate (['questions']);
  }
}