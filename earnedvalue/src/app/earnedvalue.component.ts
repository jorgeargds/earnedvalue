import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Component({
  selector: 'earnedvalue',
  templateUrl: 'app/view/earnedvalue.html'

})

// @Injectable()
export class EarnedValueComponent {

//   private baseUrl: string = 'http://localhost:8080';
//   randomQuote = 'is this a randomQuote?';
//   constructor(private http: Http) { }
//

  saveProject(){

  }
  btnGetResponse(){
    console.log('gg');
  }
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
