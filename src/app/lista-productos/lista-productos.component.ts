import { Component, OnInit } from '@angular/core';
import { Productos } from '../model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listaProducotos: Productos;
  constructor() {
    this.listaProducotos = [
      {
        id: 1,
        nombre: 'Uranio',
        descripcion: ''
      },
      {
        id: 1,
        nombre: 'Plutonio',
        descripcion: ''
      },
      {
        id: 1,
        nombre: 'Radon',
        descripcion: ''
      },
      {
        id: 1,
        nombre: 'Notrogeno',
        descripcion: ''
      }
    ]
  }

  ngOnInit() {
  }

}
