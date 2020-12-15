import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PesquisaCepComponent } from './pesquisa-cep.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PesquisaCepComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PesquisaCepModule { }
