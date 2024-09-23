import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  
  title:string="Providing Service is payable. Please login and search for services ";
isDisabled:boolean=true;

  constructor(){

  }
  ngOnInit(): void {
    alert("Services Page is Loading.....");
  }
onSave(action:string){
  alert(action+"Saved sucessfully");
}
}

