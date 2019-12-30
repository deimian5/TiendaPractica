import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos:string[] = ["Uranio", "Plutonio", "Radon", "Nitrogeno", "Mercurio"]
  constructor() { }

  ngOnInit() {
  }

}
