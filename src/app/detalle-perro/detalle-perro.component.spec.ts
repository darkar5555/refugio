import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePerroComponent } from './detalle-perro.component';

describe('DetallePerroComponent', () => {
  let component: DetallePerroComponent;
  let fixture: ComponentFixture<DetallePerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
