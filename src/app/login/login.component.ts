import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService,
     private router:Router, private sharedData:ShareService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    })
  }

  onLogIn(){
    this.userService.getUser()
    .subscribe(res=>{
      const user = res.find((a:any)=>{ 
        return a.userName == this.loginForm.value.userName && a.password == this.loginForm.value.password
      });
      if(user){
        res.find((a:any)=>{ 
          if (a.userName == this.loginForm.value.userName && a.password == this.loginForm.value.password){
            this.sharedData.setUser(a.userId);
          }
        });
        alert("Login success");
        this.sharedData.setLogin('true');
        this.loginForm.reset();
        this.router.navigate(['profile']);
      }else{
        alert("User Not Found");
      }
    }, err=>{
      alert("Something Went Wrong");
    }
    )
    
  }

}
