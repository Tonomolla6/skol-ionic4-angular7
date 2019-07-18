import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  preguntas_totales = localStorage.getItem("pn");

  constructor( public activeRoute:ActivatedRoute , private statusBar: StatusBar, public router: Router) { 
  }

  ngOnInit() {
    document.getElementById("contador_preguntas").innerHTML = `1/${this.preguntas_totales}`;
  }

  salir(estado) {
    if (estado == "mensaje") {
      document.getElementById("fondo_negro").style.display = "flex";
    } else if (estado == "cancelar") {
      document.getElementById("fondo_negro").style.display = "none";
    } else if (estado == "aceptar") {
      document.getElementById("fondo_negro").style.display = "none";
      this.statusBar.backgroundColorByHexString('#702829');
      this.router.navigateByUrl('/home');
    }
  }

}
