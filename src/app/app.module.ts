import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {CovidApiService} from './covid-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
     AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule 
  ],
  providers: [CovidApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
