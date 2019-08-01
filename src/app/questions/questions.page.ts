import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  preguntas_totales = localStorage.getItem("pn");
  cont = 0;
  constructor( public activeRoute: ActivatedRoute , private statusBar: StatusBar, public router: Router, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.unlock();
  }

  ngOnInit() {
    var numero_jugadores: number = parseInt(localStorage.getItem("jn"))
    var aleatorio: string = `${Math.round(Math.random()*numero_jugadores)}`;
    var user1: string = localStorage.getItem(`j${aleatorio}`);
    var i: number = 0;
    var tragos_x: string;
    var tragos_y: string;

    while (i < 1) {
      aleatorio = `${Math.round(Math.random()*numero_jugadores)}`;
      var user2: string = localStorage.getItem(`j${aleatorio}`);
      if (user1 != user2) {
        i = 2;
      }
    }
    //srt.replace(A, B);
    //Aleatorio de los tragos x
    if (localStorage.getItem("d") == "1") {
      tragos_x = `${Math.round(Math.random()* (3 - 2) + 2)}`;
    } else if (localStorage.getItem("d") == "2") {
      tragos_x = `${Math.round(Math.random()* (4 - 3) + 3)}`;
    } else if (localStorage.getItem("d") == "3") {
      tragos_x = `${Math.round(Math.random()* (7 - 4) + 4)}`;
    }

  //Aleatorio de los tragos y
    if (localStorage.getItem("d") == "1") {
      tragos_y = `${Math.round(Math.random()* (3 - 2) + 2)}`;
    } else if (localStorage.getItem("d") == "2") {
      tragos_y = `${Math.round(Math.random()* (4 - 3) + 3)}`;
    } else if (localStorage.getItem("d") == "3") {
      tragos_y = `${Math.round(Math.random()* (7 - 4) + 4)}`;
    }

    var pregunta_defecto: string = localStorage.getItem(`p0p`);
    var pregunta_cambiada: string = pregunta_defecto.replace("@user1",user1).replace("@user2",user2).replace("@x",tragos_x).replace("@y",tragos_y);

    document.getElementById("contador_preguntas").innerHTML = `1/${this.preguntas_totales}`;

    document.getElementById("preguntas_texto").innerHTML = pregunta_cambiada;
    
    if (localStorage.getItem(`p${this.cont}m`) == "none") {
      document.getElementById("preguntas_titulo").style.display = "none";
    } else {
      document.getElementById("preguntas_titulo").innerHTML = `${localStorage.getItem(`p0m`)}`;
    }

  }

  salir(estado) {
    if (estado == "mensaje") {
      this.statusBar.backgroundColorByHexString('#351111');
      document.getElementById("fondo_negro").style.display = "flex";
    } else if (estado == "continuar") {
      this.statusBar.backgroundColorByHexString('#471717');
      document.getElementById("fondo_negro").style.display = "none";
    } else if (estado == "salir") {
      document.getElementById("fondo_negro").style.display = "none";
      this.statusBar.backgroundColorByHexString('#702829');
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.router.navigateByUrl('/home');
    }
  }

    siguiente() {
      this.cont = this.cont + 1;
      var tope_de_preguntas: number = parseInt(this.preguntas_totales);
      if (this.cont == tope_de_preguntas ) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.router.navigateByUrl('game-end');
      }
      var numero_jugadores: number = parseInt(localStorage.getItem("jn"))
      var aleatorio: string = `${Math.round(Math.random()*numero_jugadores)}`;
      var user1: string = localStorage.getItem(`j${aleatorio}`);
      var i: number = 0;
      var tragos_x: string;
      var tragos_y: string;

      while (i < 1) {
        aleatorio = `${Math.round(Math.random()*numero_jugadores)}`;
        var user2: string = localStorage.getItem(`j${aleatorio}`);
        if (user1 != user2) {
          i = 2;
        }
      }

    //Aleatorio de los tragos x
      if (localStorage.getItem("d") == "1") {
        tragos_x = `${Math.round(Math.random()* (3 - 2) + 2)}`;
      } else if (localStorage.getItem("d") == "2") {
        tragos_x = `${Math.round(Math.random()* (4 - 3) + 3)}`;
      } else if (localStorage.getItem("d") == "3") {
        tragos_x = `${Math.round(Math.random()* (7 - 4) + 4)}`;
      }

    //Aleatorio de los tragos y
      if (localStorage.getItem("d") == "1") {
        tragos_y = `${Math.round(Math.random()* (3 - 2) + 2)}`;
      } else if (localStorage.getItem("d") == "2") {
        tragos_y = `${Math.round(Math.random()* (4 - 3) + 3)}`;
      } else if (localStorage.getItem("d") == "3") {
        tragos_y = `${Math.round(Math.random()* (7 - 4) + 4)}`;
      }

      //srt.replace(A, B);

      var pregunta_defecto: string = localStorage.getItem(`p${this.cont}p`);
      var pregunta_cambiada: string = pregunta_defecto.replace("@user1",user1).replace("@user2",user2).replace("@x",tragos_x).replace("@y",tragos_y);

      document.getElementById("contador_preguntas").innerHTML = `${this.cont + 1}/${this.preguntas_totales}`;

      document.getElementById("preguntas_texto").innerHTML = pregunta_cambiada;
      
      if (localStorage.getItem(`p${this.cont}m`) == "none") {
        document.getElementById("preguntas_titulo").style.display = "none";
      } else {
        document.getElementById("preguntas_titulo").style.display = "flex";
        document.getElementById("preguntas_titulo").innerHTML = `${localStorage.getItem(`p${this.cont}m`)}`;
      }
    }


}
