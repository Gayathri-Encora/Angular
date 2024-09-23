import { Component, OnInit } from '@angular/core';
import { UserDetalisService } from 'src/app/service/user-detalis.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit{
  userdata:string="";
  name:string="";
 constructor(public userdetails:UserDetalisService){

 }
  ngOnInit(): void {
    this.userdata=this.userdetails.getData();
    alert(this.userdata);
  }

  showName(){
 this.name=this.userdetails.getUsername();
 console.log(this.name+ "Welcome to encora");
 alert(this.name+"contact us if u have any quries");
  }
}
