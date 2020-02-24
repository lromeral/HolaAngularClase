import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaAngularComponent } from './hola-angular.component';

describe('HolaAngularComponent', () => {
  let component: HolaAngularComponent;
  let fixture: ComponentFixture<HolaAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
