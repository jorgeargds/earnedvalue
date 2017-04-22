import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'riskMatrix',
  templateUrl: 'app/view/riskMatrix.html'
})
export class RiskMatrixComponent {

  console.console.log("gg");
  public riesgos: any[];

  constructor(private http: Http) {
    riesgos.push({"riesgo":"Riesgo #1","proabilidad":70,"impacto":5});
    riesgos.push({"riesgo":"Riesgo #2","proabilidad":20,"impacto":3});
    riesgos.push({"riesgo":"Riesgo #3","proabilidad":50,"impacto":1});
  };

  public btnGetResponse(){
    console.log('gg');
  }

};
