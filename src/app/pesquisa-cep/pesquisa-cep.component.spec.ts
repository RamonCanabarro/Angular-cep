import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCepComponent } from './pesquisa-cep.component';

describe('PesquisaCepComponent', () => {
  let component: PesquisaCepComponent;
  let fixture: ComponentFixture<PesquisaCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
