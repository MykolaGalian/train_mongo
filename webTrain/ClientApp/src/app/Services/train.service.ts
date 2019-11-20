import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../Models/train';
import { Router } from '@angular/router';
import { StationService } from './station.service';
import { Station } from '../Models/station';


@Injectable({
  providedIn: 'root'
})
export class TrainService {

  public trains: Train[];
  public train: Train;
  public url = 'http://localhost:5000/';

  constructor(private http: HttpClient, private router: Router, private serviceStation: StationService) { }

  GetTrains() {
  this.http.get<Train[]>(this.url + 'trains/gettrain').subscribe(result => {
      this.trains = result;
    console.log(this.trains );
    }, error => console.error(error));
  }

  UpdateTrains() {
    this.http.put(this.url + 'trains/updatetrain/' + this.train.trainNumber, this.train)
    .subscribe(( data: any) => { console.log('Ok');
      this.router.navigate(['/trains']); }// на страницу списка поездов
      );
    }

    AddTrain(newtrain: Train, newstations: Station[]) {
      newtrain.trainNumber =  Number.parseInt(String(newtrain.trainNumber));
      console.log(newtrain);
      this.http.post(this.url + 'trains', newtrain)
      .subscribe(( data: any) => { console.log('Ok');
        this.serviceStation.AddStation(newtrain, newstations); // вызов метода для добавления станций для нового поезда
        }
       );
      }
      DeleteTrain(trainnamber_: any ) {
        this.http.delete(this.url + 'trains/deletetrain/' + Number.parseInt(String(trainnamber_)))
          .subscribe(( data: any) => { console.log('Ok');
            this.router.navigate(['/']);
            }, error => console.error(error));
      }
}
