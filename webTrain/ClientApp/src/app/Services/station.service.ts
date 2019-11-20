import { Injectable } from '@angular/core';
import { Station } from '../Models/station';
import { HttpClient } from '@angular/common/http';
import { Train } from '../Models/train';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StationService {

  public stations: Station[];
  public url = 'http://localhost:5000/';

  constructor(private http: HttpClient, private router: Router) { }

  GetStation(numberTrain: number) {
    this.http.get<Station[]>(this.url + 'trains/gettrainstation/' + numberTrain)
    .subscribe(result => {
      this.stations = result;
      console.log(this.stations);

    }, error => console.error(error));
  }

  AddStation( newtrain: Train , newstations: Station[]) {
    this.http.put(this.url + 'trains/poststationfortrain/' + newtrain.trainNumber, newstations)
    .subscribe((
      data: any) => { console.log('Ok');
      this.router.navigate(['/trains']); }// на страницу поездов
      );
    }
}
