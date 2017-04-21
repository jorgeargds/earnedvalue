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

 @Injectable()
export class EarnedValueComponent {

   private baseUrl: string = 'http://localhost:8080';
//   randomQuote = 'is this a randomQuote?';
  constructor(private http: Http) { }
//

  saveProject(){
    var body = { project:{id:1,name:'Project'},description:'EarnedValue'};
    this.http.post(`${this.baseUrl}/saveProject`, body, { headers: this.getHeaders() })
   .map(res => res.json())
   .subscribe(
   data => {
         console.log(data);
   },
   err => this.logError(err),

 );

}

private getHeaders() {
  let headers = new Headers();
  headers.append('Accept', 'application/json');

  return headers;
}
logError(err: String) {
  console.error('There was an error: ' + err);

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
