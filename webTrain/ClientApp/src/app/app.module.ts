import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { TraineditComponent } from './components/trainedit/trainedit.component';
import { StationService } from './Services/station.service';
import { TrainService } from './Services/train.service';
import { TrainaddComponent } from './components/trainadd/trainadd.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TraineditComponent,
    TrainaddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'stations', component: CounterComponent },
      { path: 'trains', component: FetchDataComponent },
      { path: 'trainedit/:trainNumber', component: TraineditComponent },   
      { path: 'trainadd', component: TrainaddComponent } 
    ])
  ],
  providers: [StationService, TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
