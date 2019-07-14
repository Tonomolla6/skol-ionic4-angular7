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
      document.getElementById("vaso_p").style.color = "black";
      document.getElementById("jarra_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("cerveza_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (nivel == "jarra") {
      document.getElementById("vaso").setAttribute('src', 'assets/images/vaso_vacio.svg');
      document.getElementById("jarra").setAttribute('src', 'assets/images/jarra_llena.svg');
      document.getElementById("cerveza").setAttribute('src', 'assets/images/cerveza_vacia.svg');
      this.dificultad = 2;
      document.getElementById("vaso_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("jarra_p").style.color = "black";
      document.getElementById("cerveza_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (nivel == "cerveza") {
      document.getElementById("vaso").setAttribute('src', 'assets/images/vaso_vacio.svg');
      document.getElementById("jarra").setAttribute('src', 'assets/images/jarra_vacia.svg');
      document.getElementById("cerveza").setAttribute('src', 'assets/images/cerveza_llena.svg');
      this.dificultad = 3;
      document.getElementById("vaso_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("jarra_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("cerveza_p").style.color = "black";

    }
  }
  modo: Number = 3;
  modo_change(modo_clase) {
    if (modo_clase == "grupo") {
      document.getElementById("grupo").style.borderColor = "#702829";
      document.getElementById("individual").style.borderColor = "white";
      document.getElementById("todos").style.borderColor = "white";
      this.modo = 1;
      document.getElementById("grupo_p").style.color = "black";
      document.getElementById("individual_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("todos_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (modo_clase == "individual") {
      document.getElementById("grupo").style.borderColor = "white";
      document.getElementById("individual").style.borderColor = "#702829";
      document.getElementById("todos").style.borderColor = "white";
      this.modo = 2;
      document.getElementById("grupo_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("individual_p").style.color = "black";
      document.getElementById("todos_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (modo_clase == "todos") {
      document.getElementById("grupo").style.borderColor = "white";
      document.getElementById("individual").style.borderColor = "white";
      document.getElementById("todos").style.borderColor = "#702829";
      this.modo = 3;
      document.getElementById("grupo_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("individual_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("todos_p").style.color = "black";

    }
  }
  preguntas: Number = 3;
  preguntas_change(num_preguntas) {
    if (num_preguntas == "diez") {
      document.getElementById("diez").setAttribute('src', 'assets/images/1_chupito_lleno.svg');
      document.getElementById("veinte").setAttribute('src', 'assets/images/2_chupito_vacio.svg');
      document.getElementById("treinta").setAttribute('src', 'assets/images/3_chupito_vacio.svg');
      this.preguntas = 1;
      document.getElementById("diez_p").style.color = "black";
      document.getElementById("veinte_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("treinta_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (num_preguntas == "veinte") {
      document.getElementById("diez").setAttribute('src', 'assets/images/1_chupito_vacio.svg');
      document.getElementById("veinte").setAttribute('src', 'assets/images/2_chupito_lleno.svg');
      document.getElementById("treinta").setAttribute('src', 'assets/images/3_chupito_vacio.svg');
      this.preguntas = 2;
      document.getElementById("diez_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("veinte_p").style.color = "black";
      document.getElementById("treinta_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (num_preguntas == "treinta") {
      document.getElementById("diez").setAttribute('src', 'assets/images/1_chupito_vacio.svg');
      document.getElementById("veinte").setAttribute('src', 'assets/images/2_chupito_vacio.svg');
      document.getElementById("treinta").setAttribute('src', 'assets/images/3_chupito_lleno.svg');
      this.preguntas = 3;
      document.getElementById("diez_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("veinte_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("treinta_p").style.color = "black";

    }
  }
}
