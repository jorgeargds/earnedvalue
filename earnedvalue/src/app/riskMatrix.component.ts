import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { RiskMatrix } from './interfaces/riskMatrix'
import { Risk } from './interfaces/risk'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'riskMatrix',
  templateUrl: 'app/view/riskMatrix.html',
  styles: [`
    .rangoVerde{
      color: #008000;
    }

    .rangoAmarillo{
      color: #FFFF00;
    }

    .rangoRojo{
      color: #FF0000;
    }

  `]
})
export class RiskMatrixComponent {
  riesgos: Risk[];
  riesgo: Risk;
  riesgoTemp: {
    descripcion : string,
    probabilidad : string,
    impacto : string,
    valor: string
  };
  rangoVerde: number = 1.6;
  rangoAmarillo: number = 3.3;
  rangoRojo: number = 3.34;
  matrix: RiskMatrix;

  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: Http, private route: ActivatedRoute,
		private router: Router) {
    this.riesgos = [];
    this.riesgoTemp = {
      descripcion : "",
      probabilidad : "",
      impacto : "",
      valor: ""
    };

  };

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.riesgos = [];
      if(Object.keys(params).length !== 0){
        this.http.post(`${this.baseUrl}/getProjectMatrix`, params, { headers: this.getHeaders() })
        .map(res => res.json())
        .subscribe(
          data => {
            this.matrix = new RiskMatrix(data.id,data.idProject);

            this.http.post(`${this.baseUrl}/getMatrixRisks`, data, { headers: this.getHeaders() })
            .map(res => res.json())
            .subscribe(
              data => {
                this.getMatrixRisks(data);

              },
              err => this.logError(err),
            );
          },
          err => this.logError(err),
        );
      }
    });
  };

  public getMatrixRisks(data : Risk[]){

    data.forEach(riesgo => {
      console.log(riesgo);
    });

  };

  public agregarRiesgo(){
    this.riesgoTemp.valor = (((+this.riesgoTemp.probabilidad / 100 ) * +this.riesgoTemp.impacto)).toString();
    let riesgo = new Risk(this.riesgoTemp.descripcion,Number(this.riesgoTemp.probabilidad),Number(this.riesgoTemp.impacto), Number(this.riesgoTemp.valor));
    this.riesgos.push(riesgo);
    this.riesgoTemp = {
      descripcion : "",
      probabilidad : "",
      impacto : "",
      valor: ""
    };
  };

  public enRangoVerde(index: number): boolean{
    if(+this.riesgos[index].valor <= this.rangoVerde){
      return true;
    }
    return false;
  };

  public enRangoAmarillo(index: number): boolean{
    if(+this.riesgos[index].valor <= this.rangoAmarillo && +this.riesgos[index].valor > this.rangoVerde){
      return true;
    }
    return false;
  };

  public enRangoRojo(index: number): boolean{
    if(+this.riesgos[index].valor <= this.rangoRojo && ++this.riesgos[index].valor > this.rangoAmarillo){
      return true;
    }
    return false;
  };

  private getHeaders() {
  	let headers = new Headers();
  	headers.append('Accept', 'application/json');
  	return headers;
	};

  logError(err: String) {
    console.error('There was an error: ' + err);
	};
};
