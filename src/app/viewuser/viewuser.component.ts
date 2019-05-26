import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  private data: Array<object> = [];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.RetrieveData();
  }

  public RetrieveData(){

    this.apiService.getData().subscribe( (recievedData:Array<object>)=>{

        this.data=recievedData;
        console.log(this.data);



    });
  }

}
