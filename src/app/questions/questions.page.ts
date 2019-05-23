import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor( public activeRoute:ActivatedRoute) { }
  random;
  // user1:string
  user1 = localStorage.getItem("user1");
  user2 = this.activeRoute.snapshot.paramMap.get('user2');
  user3 = this.activeRoute.snapshot.paramMap.get('user3');
  
  ngOnInit() {
    // let user1 = this.activeRoute.snapshot.paramMap.get('user')
    // console.log(user1)
  }
  genRandom(){
    this.random = Math.floor((Math.random() * 100) + 1);
  };
}
