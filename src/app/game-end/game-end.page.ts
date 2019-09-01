import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-game-end',
  templateUrl: './game-end.page.html',
  styleUrls: ['./game-end.page.scss'],
})
export class GameEndPage implements OnInit {

  constructor(public router: Router, private screenOrientation: ScreenOrientation) { 
  }

  ngOnInit() {
  }

  rutas(ruta) {
    if ( ruta == "cartas") {
      this.router.navigateByUrl("/home");
    } else if ( ruta == "preguntas") {
      this.router.navigateByUrl("/game-config");
    }
  }
}
