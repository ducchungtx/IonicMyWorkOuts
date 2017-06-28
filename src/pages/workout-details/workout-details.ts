import { Workout } from './../../providers/workout';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutsPage } from './../workouts/workouts';

/*
  Generated class for the WorkoutDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
  providers: [Workout]
})
export class WorkoutDetailsPage {
  workout:any[];
  result:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: Workout) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.workout = this.navParams.get('workout');
    this.workoutService = workoutService;
  }

  ionViewDidLoad() {
    // console.log(this.workout);
  }

  deleteWorkout(workoutId){
    this.workoutService.deleteWorkout(workoutId).subscribe(data => {
      this.result = data;
    }, err => console.log(err),
    () => console.log('Workout Deleted'));

    this.navCtrl.setRoot(WorkoutsPage);
  }

}
