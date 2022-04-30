import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioWebComponent } from './portafolio-web.component';

describe('PortafolioWebComponent', () => {
  let component: PortafolioWebComponent;
  let fixture: ComponentFixture<PortafolioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
