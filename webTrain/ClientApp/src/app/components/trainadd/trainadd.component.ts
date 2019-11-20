import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/Models/train';
import { Station } from 'src/app/Models/station';
import { TrainService } from 'src/app/Services/train.service';
import { StationService } from 'src/app/Services/station.service';

@Component({
  selector: 'app-trainadd',
  templateUrl: './trainadd.component.html',
  styleUrls: ['./trainadd.component.css']
})
export class TrainaddComponent implements OnInit {

  newtrain: Train;
  stations: Station[] = [];
  newstation: Station = null;
  addStation = false;

  constructor(private serviceTrain: TrainService, private serviceStation: StationService) { }

  ngOnInit() {

    this.newtrain = {
    trainNumber: 0,
    nameRoute: 'New'
    };

    this.newstation = {
      nameStation: 'New',
      arrivalTime: new Date(),
      departureTime: new Date()
    };

  }

  startAddStations() {
    this.addStation = true;
  }

  addStations() {
    this.stations.push(this.newstation);
    this.addStation = false;
    this.newstation = {
      nameStation: 'New',
      arrivalTime: new Date(),
      departureTime: new Date()
    };
  }

  adAllTrain() {
    this.serviceTrain.AddTrain(this.newtrain, this.stations);
  }

}
