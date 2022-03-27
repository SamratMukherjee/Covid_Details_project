import { APP_ID, Component, OnInit } from '@angular/core';
import { CovidApiService } from './covid-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public totalRows:number=0;
public page:number=1;
public covidlist:any=[];
  constructor(private covidapi:CovidApiService){}
  
  
  ngOnInit():void{
    this.covidapi.getAllCovid_details()
    .subscribe((res:any)=>{
      console.log(res);
      this.covidlist = res;
      //this.totalRows=res.length;

    })
  }
}
