import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public router: Router, /*private file: File,*/ public activeRoute:ActivatedRoute) {
    this.users = [
      {name:'Jugador 1', value:''},
      {name:'Jugador 2', value:''},
      {name:'Jugador 3', value:''}
    ]
    this.cartas = ["Sin Mariconeos", "En pareja", "Piscina y amigos", "Piscina"];
    this.h2_posicion = 0;
  }
  /* ESTA PARTE ES PARA LA VISTA 1 */
    users: object[];
    
    boton_vista_uno() {
      var x: number = 0;
      var solo_uno: number;

      //this.router.navigate (['questions'])
      for(let i=0; i<this.users.length; i++) {
        if (this.users[`${i}`].value == "") {
          x = x + 1;
        };
      };
        solo_uno = this.users.length - x;
      if (x == this.users.length) {
        document.getElementById("mensaje_vacio").style.display = "flex";
        document.getElementById("ajuste_oculto_fondo").style.display = "flex";
      } else if (solo_uno == 1) {
        document.getElementById("mensaje_amigos").style.display = "flex";
        document.getElementById("ajuste_oculto_fondo").style.display = "flex";
      } else {

        /*Guarda la información de los usuarios en el local storage*/
        var num: number = 0;
        this.users.forEach(element => {
          if (element["value"] != "") {
            num = num + 1;
            localStorage.setItem(`j${num}`, `${element["value"]}`);
          }
        });
        localStorage.setItem("jn", `${num}`);

        /*Efectos del diseño*/
        document.getElementById("partesuperior").style.opacity = "0";
        document.getElementById("barra").style.transform = "translateY(-83px)";
        document.getElementById("atras_vista_uno").style.opacity = "1";
        document.getElementById("silla2").style.transform = "translateX(-80px)";
        document.getElementById("silla3").style.transform = "translateX(80px)";
        document.getElementById("silla1").style.opacity = "0";
        document.getElementById("silla4").style.opacity = "0";
        document.getElementById("carta_titulo").style.opacity = "1";
        document.getElementById("boton_vista_uno").style.opacity = "0";
        document.getElementById("boton_vista_dos").style.opacity = "1";
        document.getElementById("boton_vista_dos").style.zIndex = "3";
        document.getElementById("formulario_usuarios").style.opacity = "0";
        document.getElementById("formulario_cartas").style.display = "flex";
        document.getElementById("ajustes").style.display = "none";
        setTimeout(function(){
          document.getElementById("formulario_usuarios").style.display = "none";
          document.getElementById("formulario_cartas").style.opacity = "1";
        }, 200);
      }
      
    }

    mas_jugadores() {
      let totalUser = this.users.length + 1;
      this.users.push({name: `Jugador ${totalUser}`, value:''}); /* id:`id_${totalUser}` */
      /* document.getElementById("id_4").focus(); */
      /* document.getElementById("plus").focus(); */
    }

    /*Muestra ajustes*/

      ajustes(estado) {
        if (estado == "abrir") {
          document.getElementById("ajuste_oculto_fondo").style.display = "flex";
          document.getElementById("ajuste_oculto").style.display = "flex";
          
        } else if (estado == "cerrar") {
          document.getElementById("ajuste_oculto_fondo").style.display = "none";
          document.getElementById("ajuste_oculto").style.display = "none";
          document.getElementById("mensaje_amigos").style.display = "none";
          document.getElementById("mensaje_vacio").style.display = "none";
          document.getElementById("info_oculto").style.display = "none";
        }
      }

  /* ESTA PARTE ES PARA LA VISTA DOS */
    cartas: string[];
    h2_posicion: number;

    atras_vista_uno() {
      document.getElementById("partesuperior").style.opacity = "1";
      document.getElementById("barra").style.transform = "translateY(0px)";
      document.getElementById("atras_vista_uno").style.opacity = "0";
      document.getElementById("silla2").style.transform = "translateX(0px)";
      document.getElementById("silla3").style.transform = "translateX(0px)";
      document.getElementById("silla1").style.opacity = "1";
      document.getElementById("silla4").style.opacity = "1";
      document.getElementById("carta_titulo").style.opacity = "0";
      document.getElementById("boton_vista_uno").style.opacity = "1";
      document.getElementById("boton_vista_dos").style.opacity = "0";
      document.getElementById("boton_vista_dos").style.zIndex = "0";
      document.getElementById("formulario_cartas").style.opacity = "0";
      document.getElementById("ajustes").style.display = "block";
      setTimeout(function(){
        document.getElementById("formulario_usuarios").style.display = "block";
        document.getElementById("formulario_cartas").style.display = "none";
        document.getElementById("formulario_usuarios").style.opacity = "1";
      }, 200);
    }

      posicion_cartas(direccion) {
        if (direccion == "derecha") {
          if (this.h2_posicion == this.cartas.length-1) {
            this.h2_posicion = 0;
          } else {
            this.h2_posicion = this.h2_posicion + 1;
          }
        } else if (direccion == "izquierda") {
          if (this.h2_posicion == 0) {
            this.h2_posicion = this.cartas.length-1;
          } else {
            this.h2_posicion = this.h2_posicion - 1;
          }
        }
        document.getElementById("titulo_carta").innerHTML = this.cartas[this.h2_posicion];
      }
      info() {
        if (document.getElementById("info_oculto").style.display == "none" || document.getElementById("info_oculto").style.display == "") {
          document.getElementById("ajuste_oculto_fondo").style.display = "flex";
          document.getElementById("info_oculto").style.display = "flex";
        } else {
          document.getElementById("ajuste_oculto_fondo").style.display = "none";
          document.getElementById("info_oculto").style.display = "none";
        }
      }
}