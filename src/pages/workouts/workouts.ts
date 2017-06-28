import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Workout } from './../../providers/workout';
import { WorkoutDetailsPage } from './../workout-details/workout-details';

/*
  Generated class for the Workouts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [Workout]
})
export class WorkoutsPage {
  workouts:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: Workout) {
    this.navCtrl = navCtrl;
    this.workoutService = workoutService;
    this.workouts;

    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    })
  }

  ionViewDidLoad() {
    
  }

  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    })
  }

  workoutSelected(event, workout){
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }

}
