import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { By } from '@angular/platform-browser';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  const productoMock ={
    id: 1,
    nombre: 'Uranio',
    descripcion: ''
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia existir una etiqueta "H3"', () => {
    const h3 = fixture.debugElement.query(By.css('H3'));
    expect(h3).toBeTruthy();
  });

  it('deberia existir una propiedad llamada "producto"', () => {
    component.producto = productoMock;
    expect(component.producto).toBeTruthy();
  });

  it('deberia existir una etiqueta "a" que contenga el texto de la propiedad "producto.nombre"', () => {
    const a = fixture.debugElement.query(By.css('a'));
    const aElement = a.nativeElement;
    expect(aElement.textContent.trim()).toBe(component.producto.nombre);
  });

  it('deberia existir una etiqueta "p" en la cual debe estar la descripcion del producto', ()=>{
    const pDescripcion = fixture.debugElement.query(By.css('p'));
    const pDescripcionElement= pDescripcion.nativeElement;
    expect(pDescripcion).toBeTruthy();
    expect(pDescripcionElement.textContent.trim()).toBe(component.producto.descripcion);
  });
});
