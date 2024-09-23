import { Component } from '@angular/core';

interface servicesI{
imagepath:string;
name:string;
description:string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isActive:boolean=true;
  isDisable:boolean=true;
  color:string="active";
  services:servicesI[]=[
{
  imagepath:"bharathanatiyam.jpg",
  name:"Offline classs",
  description:"Bharatanatyam is a dance of Tamil Nadu in southern India. It traces its origins back to the Natyashastra, an ancient treatise on theatre written by the mythic priest Bharata. Originally a temple dance for women, bharatanatyam often is used to express Hindu religious stories and devotions."
},
{
  imagepath:"wetern.jpg",
  name:" Interships",
  description:"Bharatanatyam is a dance of Tamil Nadu in southern India. It traces its origins back to the Natyashastra, an ancient treatise on theatre written by the mythic priest Bharata. Originally a temple dance for women, bharatanatyam often is used to express Hindu religious stories and devotions."
},
{
  imagepath:"singledance.jpg",
  name:"Summer Offer",
  description:"Bharatanatyam is a dance of Tamil Nadu in southern India. It traces its origins back to the Natyashastra, an ancient treatise on theatre written by the mythic priest Bharata. Originally a temple dance for women, bharatanatyam often is used to express Hindu religious stories and devotions."
}
]
}
