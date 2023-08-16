import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
    constructor() { }
    logStatus=false;
    loggesIn()
    {
      this.logStatus=true;
    }
    loggedOut()
    {
      this.logStatus=false;
    }
    getLogStatus()
    {
      return this.logStatus;
    }
}