import { Component, Inject } from '@angular/core';
import { Train } from '../../Models/train';
import { TrainService } from '../../Services/train.service';
import { StationService } from '../../Services/station.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {


  public url = 'http://localhost:5000/';

  constructor(private serviceTrain: TrainService, private serviceStation: StationService,
    private router: Router) {

    serviceTrain.GetTrains();
  }

  populateForm(train: Train) {
    this.serviceTrain.train = Object.assign({}, train);
    console.log(this.serviceTrain.train);
    this.serviceStation.GetStation(this.serviceTrain.train.trainNumber);
    this.router.navigate(['/stations']); // на страницу списка остановок поезда
  }

  setTrain(train: Train) {
    this.serviceTrain.train = Object.assign({}, train);
    console.log(this.serviceTrain.train);
  }


  onDelete(trainNumber: number) {
    this.serviceTrain.DeleteTrain(trainNumber);
  }


}






