import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PesquisaCepService } from './pesquisa-cep.service'

@Component({
  selector: 'app-pesquisa-cep',
  templateUrl: './pesquisa-cep.component.html',
  styleUrls: ['./pesquisa-cep.component.scss']
})

export class PesquisaCepComponent implements OnInit {
  cep = new FormControl('');
  filtraUf = new FormControl('')
  filtraLocal = new FormControl('')
  filtraLog = new FormControl('')
  filtraCep = new FormControl('')
  listEndereco = Array()
  enderecos = Array()

  constructor(public pesquisaCepService: PesquisaCepService) {
  }

  ngOnInit(): void {
  }
  pesquisar() {

    if (this.validaCep()) {
      {
        this.request()
      }
    } else {
      alert('CEP inválido!');
    }
  }
  validaCep() {
    var cepValido = /^[0-9]{5}[-]?[0-9]{3}$/.test(this.cep.value)

    return cepValido
  }
  request() {
    this.pesquisaCepService.getCep(this.cep.value)
      .subscribe((data: object) => {
        this.enderecos.push(data)
        this.listEndereco.push(data)
      })
  }
  exluir(cep: string) {
    this.enderecos.forEach((el, i) => {
      if (el.cep === cep) {
        this.enderecos.splice(i, 1)
        this.listEndereco.splice(i, 1)
      }
    })
  }
  filterItems() {
    this.enderecos = []
    if (this.filtraUf.value !== "")
      this.enderecos = this.filterUf()
    if (this.filtraLog.value !== "")
      this.enderecos = this.filterLog()
    if (this.filtraLocal.value !== "")
      this.enderecos = this.filterLocal()
    if (this.filtraCep.value !== "") {
      this.enderecos = this.filterCep()
    }
  }
  filterUf() {
    return this.listEndereco.filter(el => { return el.uf.toLowerCase().indexOf(this.filtraUf.value.toLowerCase()) > -1; })
  }
  filterLog() {
    return this.listEndereco.filter(el => { return el.logradouro.toLowerCase().indexOf(this.filtraLog.value.toLowerCase()) > -1; })
  }
  filterLocal() {
    return this.listEndereco.filter(el => { return el.localidade.toLowerCase().indexOf(this.filtraLocal.value.toLowerCase()) > -1; })
  }
  filterCep() {
    return this.listEndereco.filter(el => { return el.cep.toLowerCase().indexOf(this.filtraCep.value.toLowerCase()) > -1; })
  }
  clean() {
    this.enderecos = this.listEndereco
  }
}