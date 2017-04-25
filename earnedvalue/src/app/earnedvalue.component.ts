import { Component, Input } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Sprint} from './interfaces/sprint'
import { WorkPackage} from './interfaces/workPackage'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'earnedvalue',
  templateUrl: 'app/view/earnedvalue.html'

})

@Injectable()
export class EarnedValueComponent {
  title : "";
  projectName : "";
  cantSprints : "";
  sprints : Sprint[];
  sprint : Sprint;
  isOpen : false;
  workPackage : WorkPackage;
  isCreate : boolean;


  private baseUrl: string = 'http://localhost:8080';

  //   randomQuote = 'is this a randomQuote?';
  constructor(private http: Http, private route: ActivatedRoute,
    private router: Router) {
      this.sprints = [];
      this.workPackage = new WorkPackage("","","","","","","","");
    }
    //
    ngOnInit() {
      this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.title = ""
        this.sprints = [];
        if(Object.keys(params).length !== 0){
          this.http.post(`${this.baseUrl}/getProject`, params, { headers: this.getHeaders() })
          .map(res => res.json())
          .subscribe(
            data => {
              this.title = data.name;
              this.http.post(`${this.baseUrl}/getProjectSprints`, data, { headers: this.getHeaders() })
              .map(res => res.json())
              .subscribe(
                data => {
                  this.sprints =this.getSprintWorkPackages(data);

                },
                err => this.logError(err),
              );
            },
            err => this.logError(err),

          );
        }
      });
    }

    saveProject(){
      var body = { project:{name:this.projectName,cantSprints:this.cantSprints}};
      this.cleanProjectAttributes();

      this.http.post(`${this.baseUrl}/saveProject`, body, { headers: this.getHeaders() })
      .map(res => res.json())
      .subscribe(
        data => {
          this.title = data.name;
          this.setSprints(data.cantSprints, data.id);
        },
        err => this.logError(err),

      );
      //el post le retorna el id del proyecto y despues se lo manda a los sprints

    }

    private setSprints(cantSprints: String, projectId: String){
      var length = +cantSprints;
      var sprints : any[];
      sprints = [];

      for(var i =0; i < length; i++)
      sprints.push({id:'sprint'+(i+1),idProject:projectId, name: 'Sprint '+(i+1), workPackages:[]});

      this.http.post(`${this.baseUrl}/saveSprints`, sprints, { headers: this.getHeaders() })
      .map(res => res.json())
      .subscribe(
        data => {this.sprints =data},
        err => this.logError(err),
      );
    }
    setWorkPackage(workPackage: WorkPackage){
      this.workPackage = workPackage;
    }

    executeWorkPackage(){

      // if(this.workPackage.name != '')
      //   this.editWorkPackage();
      // else
      //   this.saveWorkPackage();


    }
    saveWorkPackage (){
      var workPackage = {
        idSprint:this.sprint.id,
        name:this.workPackage.name,
        description:this.workPackage.description,
        hours:this.workPackage.hours,
        hourCost:this.workPackage.hourCost,
        extraCost:this.workPackage.extraCost};


        this.http.post(`${this.baseUrl}/saveWorkPackage`,workPackage , { headers: this.getHeaders() })
        .map(res => res.json())
        .subscribe(
          data => {
            if(this.sprint.workPackages == undefined)
            this.sprint.workPackages = [];
            this.sprint.workPackages.push(data);
            this.workPackage = new WorkPackage("","","","","","","","");
          },
          err => this.logError(err),
        );
      }

      private cleanProjectAttributes (){
        this.projectName = "";
        this.cantSprints = "";
      }

      private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');

        return headers;
      }
      logError(err: String) {
        console.error('There was an error: ' + err);

      }
      getSprint(sprint: Sprint, action :String){
        if(action === 'create')
          this.isCreate = true;
        else
          this.isCreate = false;

        this.sprint = sprint;

      }

      // editWorkPackage(){
      //   this.isCreate = false;
      //   this.workPackage = new WorkPackage(workPackage.name,workPackage.description,workPackage.hours,workPackage.hourCost,workPackage.extraCost,"","","");
      // }
      getSprintWorkPackages(data : Sprint[]){
        var sprints : Sprint[];
        sprints = [];
        data.forEach(sprint => {
          this.http.post(`${this.baseUrl}/getSprintWorkPackages`, sprint, { headers: this.getHeaders() })
          .map(res => res.json())
          .subscribe(
            data => {
              sprint.workPackages = [];
              sprint.workPackages = data;
              sprints.push(sprint);

            },
            err => this.logError(err),
          );
        });
        return sprints;
      };
    };
