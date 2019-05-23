import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  //users: object[];
  constructor( public activeRoute:ActivatedRoute) { 
    //let users = localStorage.getItem('usuarios');
    //let randomNumber = 2;
    //let user = users[randomNumber];
  }
  random;

  randomNumber = 2;
  users = localStorage.getItem('usuarios');
  //user = users[randomNumber];
  user21 = this.activeRoute.snapshot.paramMap.get('user1');
  user2 = this.activeRoute.snapshot.paramMap.get('user2');
  user3 = this.activeRoute.snapshot.paramMap.get('user3');

  ngOnInit() {
    
    // let user1 = this.activeRoute.snapshot.paramMap.get('user')
    // console.log(user1)
  }
  genRandom(){
    //this.random = Math.floor((Math.random() * 100) + 1);
  };
}
