import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.page.html',
  styleUrls: ['./game-config.page.scss'],
})
export class GameConfigPage implements OnInit {

  constructor(public router: Router, private statusBar: StatusBar, private file: File) { 

  }

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
  modo: number = 0;
  modo_change(modo_clase) {
    if (modo_clase == "grupo") {
      document.getElementById("grupo").style.borderColor = "#702829";
      document.getElementById("individual").style.borderColor = "white";
      document.getElementById("todos").style.borderColor = "white";
      this.modo = 2;
      document.getElementById("grupo_p").style.color = "black";
      document.getElementById("individual_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("todos_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (modo_clase == "individual") {
      document.getElementById("grupo").style.borderColor = "white";
      document.getElementById("individual").style.borderColor = "#702829";
      document.getElementById("todos").style.borderColor = "white";
      this.modo = 3;
      document.getElementById("grupo_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("individual_p").style.color = "black";
      document.getElementById("todos_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (modo_clase == "todos") {
      document.getElementById("grupo").style.borderColor = "white";
      document.getElementById("individual").style.borderColor = "white";
      document.getElementById("todos").style.borderColor = "#702829";
      this.modo = 0;
      document.getElementById("grupo_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("individual_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("todos_p").style.color = "black";

    }
  }
  preguntas: Number = 10;
  preguntas_change(num_preguntas) {
    if (num_preguntas == "diez") {
      document.getElementById("diez").setAttribute('src', 'assets/images/1_chupito_lleno.svg');
      document.getElementById("veinte").setAttribute('src', 'assets/images/2_chupito_vacio.svg');
      document.getElementById("treinta").setAttribute('src', 'assets/images/3_chupito_vacio.svg');
      this.preguntas = 10;
      document.getElementById("diez_p").style.color = "black";
      document.getElementById("veinte_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("treinta_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (num_preguntas == "veinte") {
      document.getElementById("diez").setAttribute('src', 'assets/images/1_chupito_vacio.svg');
      document.getElementById("veinte").setAttribute('src', 'assets/images/2_chupito_lleno.svg');
      document.getElementById("treinta").setAttribute('src', 'assets/images/3_chupito_vacio.svg');
      this.preguntas = 20;
      document.getElementById("diez_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("veinte_p").style.color = "black";
      document.getElementById("treinta_p").style.color = "rgba(0, 0, 0, 0.62)";

    } else if (num_preguntas == "treinta") {
      document.getElementById("diez").setAttribute('src', 'assets/images/1_chupito_vacio.svg');
      document.getElementById("veinte").setAttribute('src', 'assets/images/2_chupito_vacio.svg');
      document.getElementById("treinta").setAttribute('src', 'assets/images/3_chupito_lleno.svg');
      this.preguntas = 30;
      document.getElementById("diez_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("veinte_p").style.color = "rgba(0, 0, 0, 0.62)";
      document.getElementById("treinta_p").style.color = "black";

    }
  }
  
  empieza_el_juego() {
    /*Guardamos la información en el LocalStorage*/
    localStorage.setItem("pn", `${this.preguntas}`);

    /*Se borran las notas y el atrás*/
    document.getElementById("notas").style.opacity = "0";
    document.getElementById("atras").style.opacity = "0";

    /*Susituye el titulo del boton*/
    document.getElementById("titulo_boton").innerHTML = "PREPARANDO...";
    
    document.getElementById("boton_vista_tres").style.transform = "translateY(-40vh)";
    document.getElementById("palo").style.height = "45.3vh";

    /*Configuramos y preparamos las preguntas para questions*/
    var json_importado =  localStorage.getItem("tg");
    var temas = JSON.parse(json_importado);
    var tema = localStorage.getItem("t");

    console.log(tema);
    if (this.modo == 0) {
      var numero_de_preguntas_i: number = temas["temas"][tema]["3"].length;
      var numero_de_preguntas_g: number = temas["temas"][tema]["2"].length;
      var numero_de_preguntas: number = numero_de_preguntas_g + numero_de_preguntas_i;
    } else {
      var numero_de_preguntas: number = temas["temas"][tema][this.modo].length;
    }
    
    console.log(numero_de_preguntas);
    var repetidos: number[] = new Array();
    var aleatorio: number;
    var salida: number;
    
    for (let index = 0; index < this.preguntas; index++) {
      let i: number = 0;
      while (i < 1) {
        salida = 0;
        aleatorio = Math.round(Math.random()*numero_de_preguntas);
        console.log(aleatorio);
        for (let vari = 0; vari < repetidos.length; vari++) {
          console.log(repetidos);
          if (repetidos[vari] == aleatorio) {
            break;
          } else {
            salida = salida + 1;
          }
        }

        if (salida == repetidos.length) {
          if (this.modo == 0) {
            var modo_multiple: number = Math.round(Math.random()* (3 - 2) + 2);
            console.log(modo_multiple);
            localStorage.setItem(`p${index}m`, `${temas["temas"][tema][modo_multiple][aleatorio]["0"]}`);
            localStorage.setItem(`p${index}p`, `${temas["temas"][tema][modo_multiple][aleatorio]["1"]}`);
          } else {
            localStorage.setItem(`p${index}m`, `${temas["temas"][tema][this.modo][aleatorio]["0"]}`);
            localStorage.setItem(`p${index}p`, `${temas["temas"][tema][this.modo][aleatorio]["1"]}`);
          }
          repetidos[repetidos.length]=aleatorio;
          i = 2;
        }
      }
    }/**/
    
    //localStorage.setItem("",);

    setTimeout(function(){
      setTimeout(function(){
        document.getElementById("boton_vista_tres_img").setAttribute('src', 'assets/images/boton_del_juego_1.svg');
        document.getElementById("titulo_boton").innerHTML = "LISTO!!!";
      }, 500);
    }, 2000);

    var miguel = this;
    setTimeout(function(){
      miguel.statusBar.backgroundColorByHexString('#471717');
      document.getElementById("cubo").style.top = "0";
    }, 2700);


    setTimeout(function(){
      miguel.router.navigateByUrl('/questions')
    }, 4500);

  }
  atras() {
    this.router.navigateByUrl('/home');
  }
  
}
