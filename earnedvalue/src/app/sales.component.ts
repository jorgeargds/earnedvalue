import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Component({
  selector: 'sales',
  templateUrl: 'app/view/earnedvalue.html'

})

// @Injectable()
export class SalesComponent {
//   private baseUrl: string = 'http://localhost:8080';
//   randomQuote = 'is this a randomQuote?';
//   constructor(private http: Http) { }
//
//   saveProduct() {
//     this.http.get(`${this.baseUrl}/saveProduct`, { headers: this.getHeaders() })
//       .map(res => res.text())
//       .subscribe(
//       data => {
//         this.randomQuote = data
//         console.log(this.randomQuote)
//       },
//       err => this.logError(err),
//
//     );
//
//   }
//
//   private getHeaders() {
//     let headers = new Headers();
//     headers.append('Accept', 'application/json');
//
//     return headers;
//   }
//   logError(err: String) {
//     console.error('There was an error: ' + err);
//   }
};
