import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
user1:string;
users(){
  console.log(this.user1);
  console.log('Form submit');
}
onClick() {
}

}
