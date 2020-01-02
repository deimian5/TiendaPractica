import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosComponent } from './lista-productos.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('ListaProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;

  const productosMock = [
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
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductosComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('deberia haber una etiqueta "H3" que contenga el texto producotos',()=> {
    const h2 = fixture.debugElement.query(By.css('h2'));
    const h23Element = h2.nativeElement;
    expect(h2).toBeTruthy();
    expect(h23Element.textContent).toBe('Productos');
  });

  it('deberia existir una propiedad llamada "listaProductos"',()=>{
    component.listaProducotos = productosMock;
    expect(component.listaProducotos).toBeTruthy();
  });

  it('deberia haber tantas etiqutas "P" como "listaProductos"',()=>{
    const productoComponent = fixture.debugElement.queryAll(By.css('app-producto'));
    expect(productoComponent.length).toBe(component.listaProducotos.length);
  });
});
