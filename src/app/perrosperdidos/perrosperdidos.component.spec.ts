import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosperdidosComponent } from './perrosperdidos.component';

describe('PerrosperdidosComponent', () => {
  let component: PerrosperdidosComponent;
  let fixture: ComponentFixture<PerrosperdidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerrosperdidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosperdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
