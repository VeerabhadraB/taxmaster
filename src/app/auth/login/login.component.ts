import { Component, OnInit } from '@angular/core';
import { Ilogin } from './Ilogin';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit() {
    let ls = localStorage;
    
    if(ls.getItem('Username')!==null && ls.getItem('Password')!==null){
        this.route.navigate(['/home']);
    }
    if(ls.getItem('Username')===null && ls.getItem('Password')===null){
      this.route.navigate(['/login']);
    }
  }
  
  login(form:NgForm){
    let ls =localStorage;
    ls.setItem("UserName",form.value.username);
    ls.setItem("Password",form.value.password);
   if(ls.getItem("UserName")!==''&& ls.getItem("UserName")!==''){
      this.route.navigate(['/home']);
   }
   // Your api logic should go here..
  }
}

