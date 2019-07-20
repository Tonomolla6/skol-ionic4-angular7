import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { File } from '@ionic-native/file/ngx';

import database from './database.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  temas = database;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private file: File,
   
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#702829');
      localStorage.clear();
      /*Pasamos la base de datos a un array*/
      console.log(this.temas);
      var json = this.temas;

      /*Procesa la información*/ 
      var json_importado = JSON.stringify(json);
      var temas = JSON.parse(json_importado);

      /*Guarda el numero de temas que hay creados*/
      localStorage.setItem("tn", `${temas["temas"].length}`);

      /*Guarda el numbre y la descripción de cada tema*/
      for (let index = 0; index < temas["temas"].length; index++) {
        /*Nombre de los temas*/
        localStorage.setItem(`t${index}`, `${temas["temas"][index][0]}`);

        /*Descripción de los temas*/
        localStorage.setItem(`t${index}d`, `${temas["temas"][index][1]}`);

        /*Guarda las preguntas*/
        localStorage.setItem("tg", `${json_importado}`);
      }



    });
    
  }

}
