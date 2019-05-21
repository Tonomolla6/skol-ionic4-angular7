import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor() { }
  random;
  ngOnInit() {
  }
  genRandom(){
    this.random = Math.floor((Math.random() * 100) + 1);
  }
}
