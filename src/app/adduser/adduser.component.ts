import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Users} from '../user-model';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  name="";
  rollno= "";
  adno="";
  college="";

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }

  onUserCreate(form:NgForm){

    console.log(form);
    const user : Users=
    {
     name:form.value.name,
     rollno:form.value.rollno,
     adno:form.value.adno,
     college:form.value.college
    }

    this.apiService.sendData(user).subscribe((response)=>{

         console.log(response);
         alert('successfully Inserted')

    } );
  }

}
