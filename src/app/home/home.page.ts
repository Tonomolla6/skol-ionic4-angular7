import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  cache: string = localStorage.getItem("cache");
  
  constructor(public router: Router, private statusBar: StatusBar,/*private file: File,*/ public activeRoute:ActivatedRoute, public nativeAudio: NativeAudio) {
    this.users = [
      {name:'Jugador 1', value:''},
      {name:'Jugador 2', value:''},
      {name:'Jugador 3', value:''}
    ]
    this.nativeAudio.loop('fondo');
    
    this.tema = 0;
    localStorage.setItem("fondo", "0");
    localStorage.setItem("sonido", "yes");

    /*Asignamos los nombres de los temas y su descripción*/
    this.cartas = ["0"];
    this.descripcion = ["0"];
    this.numero_de_cartas = parseInt(localStorage.getItem("tn"));
    for (let index = 0; index < this.numero_de_cartas ; index++) {
      this.cartas[index] = localStorage.getItem(`t${index}`);
      this.descripcion[index] = localStorage.getItem(`t${index}d`);
    }
    this.camareros();
  }
  


  /* ESTA PARTE ES PARA LA VISTA 1 */
    users: object[];
    intervalo_camarero;
    camareros() {
      var cambio_de_turno: number = 0;
      var siguente_turno: string = "camarero";
      this.intervalo_camarero = setInterval(function intervalo(){ 
        
        if (cambio_de_turno >= 6 ) {
          document.getElementById("camarero").style.left = `-20vw`;
          if (siguente_turno == "camarero") {
            siguente_turno = "camarera";
          } else {
            siguente_turno = "camarero";
          }
          setTimeout(function(){ 
            document.getElementById("camarero").setAttribute('src', `assets/images/${siguente_turno}.svg`);
          }, 1500);
          cambio_de_turno = 0;
        } else {
          var posicion = Math.random() * (83 - 13) + 13;
          document.getElementById("camarero").style.left = `${posicion}vw`;
          cambio_de_turno = cambio_de_turno + 1;
          console.log(cambio_de_turno);
        }
      }, 4000);
      this.intervalo_camarero;
    }

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
            localStorage.setItem(`j${num}`, `${element["value"]}`);
            num = num + 1;
          }
        });
        localStorage.setItem("jn", `${num -1}`);

        /*Efectos del diseño*/
        document.getElementById("partesuperior").style.opacity = "0";
        document.getElementById("barra").style.transform = "translateY(-83px)";
        document.getElementById("atras_vista_uno").style.opacity = "1";
        document.getElementById("silla2").style.transform = "translateX(-80px)";
        document.getElementById("silla3").style.transform = "translateX(80px)";
        document.getElementById("silla1").style.opacity = "0";
        document.getElementById("silla4").style.opacity = "0";
        document.getElementById("carta_titulo").style.opacity = "1";
        document.getElementById("boton_vista_dos").style.zIndex = "3";
        document.getElementById("formulario_usuarios").style.opacity = "0";
        document.getElementById("formulario_cartas").style.display = "flex";
        document.getElementById("ajustes").style.display = "none";
        
        
      document.getElementById("boton_vista_uno").style.bottom = "-3px";
      setTimeout(function(){
        document.getElementById("boton_vista_uno").style.bottom = "0px";
       }, 100);
       setTimeout(function(){
        document.getElementById("boton_vista_uno").style.opacity = "0";
        document.getElementById("boton_vista_dos").style.opacity = "1";
       }, 150);

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
          document.getElementById("boton_meritos").style.right = "0px";
          document.getElementById("ajuste_oculto_fondo").style.display = "flex";
          this.statusBar.backgroundColorByHexString('#531e1e');

          /*document.getElementById("ajuste_oculto").style.display = "flex"; */
          document.getElementById("ajuste_desplegable").style.transform = "translateX(0px)";
          document.getElementById("ajustes").style.transform = "translateX(-50px)rotate(-300deg)";
          document.getElementById("mensajes_desplegable").style.transform ="translate(0px)";
          
        } else if (estado == "cerrar") {
          document.getElementById("boton_meritos").style.right = "-60px";
          document.getElementById("ajuste_oculto_fondo").style.display = "none";
          this.statusBar.backgroundColorByHexString('#702829');
          document.getElementById("meritos").style.right ="-235px";

          /*document.getElementById("ajuste_oculto").style.display = "none"; */
          document.getElementById("mensaje_amigos").style.display = "none";
          document.getElementById("mensaje_vacio").style.display = "none";
          document.getElementById("info_oculto").style.display = "none";
          document.getElementById("ajustes").style.transform = "translateX(0px)rotate(0deg)";
          document.getElementById("ajuste_desplegable").style.transform = "translateX(-65px)";
          document.getElementById("mensajes_desplegable").style.transform ="translateX(-255px)";
        }
      }

    volumen(modo) {
      var fondo = localStorage.getItem("fondo");
      var sound = localStorage.getItem("sound");

      if (modo == "fondo") {
        if (fondo == "0") {

          document.getElementById("fondo").setAttribute('src', 'assets/images/volumen_down.svg');
          this.nativeAudio.stop('fondo');
          localStorage.setItem("fondo", "1");
        } else {

          this.nativeAudio.loop('fondo');
          document.getElementById("fondo").setAttribute('src', 'assets/images/volumen_up.svg');
          localStorage.setItem("fondo", "0");
        }
      } else if (modo == "sound") {
        if (sound == "0") {
          document.getElementById("sound").setAttribute('src', 'assets/images/sound_down.svg');
          localStorage.setItem("sound", "1");
          localStorage.setItem("sonido", "no");

        } else {
          document.getElementById("sound").setAttribute('src', 'assets/images/sound_up.svg');
          localStorage.setItem("sound", "0");
          localStorage.setItem("sonido", "yes");
        }
      }
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

    controlador:number = 0;
    meritos() {
      if (this.controlador == 0) {
        document.getElementById("mensajes_desplegable").style.transform ="translateX(-255px)";
        document.getElementById("meritos").style.right ="0px";
        this.controlador = 1;
      } else {
        document.getElementById("mensajes_desplegable").style.transform ="translateX(0px)";
        document.getElementById("meritos").style.right ="-235px";
        this.controlador = 0;
      }

    }
  /* ESTA PARTE ES PARA LA VISTA DOS */
    cartas: string[];
    tema: number;
    numero_de_cartas: number;
    descripcion: string[];

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

    boton_vista_dos() {
      localStorage.setItem("t", `${this.tema}`);

      document.getElementById("boton_vista_dos").style.bottom = "-3px";
      setTimeout(function(){
        document.getElementById("boton_vista_dos").style.bottom = "0px";
       }, 100);
    }
    posicion_cartas(direccion) {
      if (direccion == "derecha") {

        document.getElementById("cartas_slider").style.left = "-100vw";
        document.getElementById("bloque").style.display = "block";    
        document.getElementById("img_d").style.right = "-1vw";
        setTimeout(function(){
          document.getElementById("img_d").style.right = "0vw"; 
        }, 200);
        setTimeout(function(){
          document.getElementById("cartas_slider").style.transition = "0s";
          document.getElementById("cartas_slider").style.left = "0vw";
        }, 750);
        setTimeout(function(){
          document.getElementById("cartas_slider").style.transition = "0.6s";
          document.getElementById("bloque").style.display = "none";
        }, 800);

        if (this.tema == this.cartas.length - 1) {
          this.tema = 0;
          var foto = this.tema;
        } else {
          this.tema = this.tema + 1;
          var foto = this.tema;
        }
        document.getElementById("carta_fondo3").setAttribute('src', `assets/themes/${foto}.svg`);
        setTimeout(function(){
          document.getElementById("carta_fondo2").setAttribute('src', `assets/themes/${foto}.svg`);
        }, 700);
      } else if (direccion == "izquierda") {

        document.getElementById("cartas_slider").style.left = "100vw";
        document.getElementById("bloque").style.display = "block";    
        document.getElementById("img_i").style.left = "-1vw";
        setTimeout(function(){
          document.getElementById("img_i").style.left = "0vw"; 
        }, 200);
        setTimeout(function(){
          document.getElementById("cartas_slider").style.transition = "0s";
          document.getElementById("cartas_slider").style.left = "0vw";
        }, 750);
        setTimeout(function(){
          document.getElementById("cartas_slider").style.transition = "0.6s";
          document.getElementById("bloque").style.display = "none";
        }, 800);

        if (this.tema == 0) {
          this.tema = this.cartas.length - 1;
          var foto = this.tema;
        } else {
          this.tema = this.tema - 1;
          var foto = this.tema;
        }
        document.getElementById("carta_fondo1").setAttribute('src', `assets/themes/${foto}.svg`);
        setTimeout(function(){
          document.getElementById("carta_fondo2").setAttribute('src', `assets/themes/${foto}.svg`);
        }, 700);
      }
      /*Imprime los datos*/
      document.getElementById("titulo_carta").innerHTML = this.cartas[this.tema];
      document.getElementById("descripcion").innerHTML = this.descripcion[this.tema];
      document.getElementById("carta_fondo2").style.backgroundImage = `assets/themes/${[this.tema]}.svg`;
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
    siguente() {
      var puto_ionic = this;
      setTimeout(function(){
        document.getElementById("boton_vista_uno").style.opacity = "0";
        puto_ionic.router.navigateByUrl('/game-config');
       }, 150);
    }
}