import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu = 'inicio';
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.establecermenu()
  }

  ngOnInit() {
    this.establecermenu()
  }
  usuario(){
    this.menu = 'usuario';
    localStorage.setItem('url','usuario');
  }
  responsable(){
    this.menu = 'responsable';
    localStorage.setItem('url','responsable');
  }
  iniciousuario(){
    this.menu = 'iniciousuario';
    localStorage.setItem('url','iniciousuario');
  }
  inicioresponsable(){
    this.menu = 'inicioresponsable';
    localStorage.setItem('url','inicioresponsable');
  }
  salir(){
    this.menu = 'inicio';
    localStorage.setItem('url','inicio');
  }
  establecermenu(){
    let actual= localStorage.getItem('url');
    if(actual =='inicio'){
      this.menu= 'inicio'
    }
    if(actual == 'usuario'){
      this.menu = 'usuario'
    }
    if(actual == 'responsable'){
      this.menu = 'responsable';
    }
    if(actual == 'iniciousuario'){
      this.menu = 'iniciousuario'
    }
    if(actual == 'inicioresponsable'){
      this.menu = 'inicioresponsable';
    }

  }

}
