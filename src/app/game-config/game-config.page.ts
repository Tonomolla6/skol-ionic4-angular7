import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.page.html',
  styleUrls: ['./game-config.page.scss'],
})
export class GameConfigPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dificultad: number = 2;
  dificultad_change(nivel) {
    if (nivel == "vaso") {
      document.getElementById("vaso").setAttribute('src', 'assets/images/vaso_lleno.svg');
      document.getElementById("jarra").setAttribute('src', 'assets/images/jarra_vacia.svg');
      document.getElementById("cerveza").setAttribute('src', 'assets/images/cerveza_vacia.svg');
      this.dificultad = 1;
    } else if (nivel == "jarra") {
      document.getElementById("vaso").setAttribute('src', 'assets/images/vaso_vacio.svg');
      document.getElementById("jarra").setAttribute('src', 'assets/images/jarra_llena.svg');
      document.getElementById("cerveza").setAttribute('src', 'assets/images/cerveza_vacia.svg');
      this.dificultad = 2;
    } else if (nivel == "cerveza") {
      document.getElementById("vaso").setAttribute('src', 'assets/images/vaso_vacio.svg');
      document.getElementById("jarra").setAttribute('src', 'assets/images/jarra_vacia.svg');
      document.getElementById("cerveza").setAttribute('src', 'assets/images/cerveza_llena.svg');
      this.dificultad = 3;
    }
  }
  modo: Number = 3;
  modo_change(modo_clase) {
    if (modo_clase == "grupo") {
      document.getElementById("grupo").style.borderColor = "#702829";
      document.getElementById("individual").style.borderColor = "white";
      document.getElementById("todos").style.borderColor = "white";
      this.modo = 1;
    } else if (modo_clase == "individual") {
      document.getElementById("grupo").style.borderColor = "white";
      document.getElementById("individual").style.borderColor = "#702829";
      document.getElementById("todos").style.borderColor = "white";
      this.modo = 2;
    } else if (modo_clase == "todos") {
      document.getElementById("grupo").style.borderColor = "white";
      document.getElementById("individual").style.borderColor = "white";
      document.getElementById("todos").style.borderColor = "#702829";
      this.modo = 3;
    }
  }
}
