import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrappPage } from './registrapp.page';

describe('RegistrappPage', () => {
  let component: RegistrappPage;
  let fixture: ComponentFixture<RegistrappPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
