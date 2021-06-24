import { Component, OnInit } from '@angular/core';

interface MunuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: MunuItem[] = [
    {ruta: '/graficas/barra', texto: 'Barras'},
    {ruta: '/graficas/barra-doble', texto: 'Barras Doble'},
    {ruta: '/graficas/dona-http', texto: 'Dona Http'},
    {ruta: '/graficas/dona', texto: 'Dona'},
  ];

  constructor() { }


}
