import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  constructor(private log:LoginService,private route:Router){}
  adminCode:string='';
  login()
  {
    if(this.adminCode==='123@abc')
    {
      this.log.loggesIn();
      this.route.navigateByUrl('/order')

    }
    else
    {
      this.log.loggedOut();
    }
  
  }
}