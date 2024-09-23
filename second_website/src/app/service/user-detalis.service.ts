import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetalisService {

  constructor() { }

  getData():string{
    return "Welcome to the page if u need any assistence then kindly get back to us";
  }
  getUsername():string{
    return "Gayathri";
  }
}
