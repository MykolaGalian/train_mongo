import { Component } from '@angular/core';
import { TrainService } from '../../Services/train.service';
import { StationService } from '../../Services/station.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  
  constructor(private serviceTrain : TrainService, private serviceStation : StationService){}


  
}
