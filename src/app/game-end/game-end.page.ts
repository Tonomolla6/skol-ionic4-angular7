import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-game-end',
  templateUrl: './game-end.page.html',
  styleUrls: ['./game-end.page.scss'],
})
export class GameEndPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation, public nativeAudio: NativeAudio) {
  }

  ngOnInit() {
  }

  sonidos(tipo) {
    var activador = localStorage.getItem("sonido");
    
    if (activador == "yes") {
      if (tipo == "normal") {
        this.nativeAudio.play('normal');
      } else if (tipo == "salir") {
        this.nativeAudio.play('salir');
      }
    } 
  }
}

