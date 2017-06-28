import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Workout } from './../../providers/workout';
import { WorkoutsPage } from './../workouts/workouts';
// import { Form } from '@angular/forms';

/*
  Generated class for the AddWorkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [Workout]
})
export class AddWorkoutPage {
    note: string;
    title: string;
    type: string;
    result:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: Workout) {
    this.workoutService = workoutService;

  }

  ionViewDidLoad() {
    
  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }
    // Add Workout
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    }, err => console.log(err),
    () => console.log('Workout Added'));

    this.navCtrl.setRoot(WorkoutsPage);

  }

}
