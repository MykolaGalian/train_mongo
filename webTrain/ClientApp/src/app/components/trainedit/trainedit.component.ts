import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../../Services/train.service';



@Component({
  selector: 'app-trainedit',
  templateUrl: './trainedit.component.html' 
})
export class TraineditComponent implements OnInit {

  private selectedTrain: any;  

  constructor(private route: ActivatedRoute, private serviceTrain : TrainService,)  { }

  ngOnInit() {    
    this.selectedTrain = this.route.snapshot.paramMap.get('trainNumber'); 
    this.selectedTrain =  Number.parseInt(this.selectedTrain); 
  }

  OnEdit() {
    this.serviceTrain.UpdateTrains();
  }

}
