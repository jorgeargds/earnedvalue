import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'riskMatrix',
  templateUrl: 'app/view/riskMatrix.html'
})
export class RiskMatrixComponent {


   riesgos: any[];

  constructor(private http: Http) {
    this.riesgos =[];
    this.riesgo = {};
    this.descripcion = "";
    this.probabilidad = 0;
    this.impacto = 0;
    this.riesgos.push({"descripcion":"Riesgo A","probabilidad":70,"impacto":2});
    this.riesgos.push({"descripcion":"Riesgo B","probabilidad":20,"impacto":5});
    this.riesgos.push({"descripcion":"Riesgo C","probabilidad":50,"impacto":3});
  };

  public btnGetResponse(riesgo){
    this.riesgos.push({"riesgo":riesgo.descripcion,"probabilidad":riesgo.probabilidad,"impacto":riesgo.impacto});
  }

};
