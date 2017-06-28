import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Workout provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Workout {  
  apiKey:string;
  workoutsUrl:string;
  constructor(private http: Http) {
    this.http = http;
    this.apiKey = 'batC_hxi9vpazTFQ1jDIUlefUAqPVLkO';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutapp/collections/workouts';
  }

  getWorkouts(){
    return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout),
    { headers: headers })
    .map(res => res.json());
  }

  deleteWorkout(workoutId){
    return this.http.delete(this.workoutsUrl+'/' + workoutId + '?apiKey='+this.apiKey)
      .map(res => res.json());
  }

}
