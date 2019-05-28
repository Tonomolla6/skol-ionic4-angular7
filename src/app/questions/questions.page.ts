import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from 'C:/xampp/htdocs/Proyect_X/src/assets/questions/questions.json';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor( public activeRoute:ActivatedRoute) { 

  }
  random;
  word;
  num;
  
  // user1:string
  user1 = this.activeRoute.snapshot.paramMap.get('user1');
  user2 = this.activeRoute.snapshot.paramMap.get('user2');
  user3 = this.activeRoute.snapshot.paramMap.get('user3');
test() {

}

  ngOnInit() {
    // let user1 = this.activeRoute.snapshot.paramMap.get('user')
    // console.log(user1)
  }
  genRandom(){
    // var nums=Array;
    // console.log("hola");
    // var nums=[1,2,3];
    // var exist;
    // do{
    //   exist=false;
    //   for(var i=0;i <= nums.length; i++){
    //     if(4 == nums[i]){
    //       exist=true;
    //       console.log("si esta");
    //       console.log(exist);
    //       return;
    //     }
    //     console.log(exist);
    //   }
    //   console.log(exist);
    // }while(exist == true)
    // console.log("no esta");

    this.random = Math.floor((Math.random() * 3) + 0);
    this.word = data.questions[1].questions[this.random].question
    console.log(this.word); // output 'testing'
    console.log(this.num);
    console.log(this.random);
    this.random += this.num;
  };
}

