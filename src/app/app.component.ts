import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login:any;
  

  constructor(private router:Router, private sharedData:ShareService) { }
  title = 'slot-booking-app';

  ngOnInit(): void {
    
  }

  onProfileIconClick(){
    this.login = this.sharedData.getLogin();
    if(this.login=="true"){
      this.router.navigate(['profile']);
    }
    else{
      alert("You need to Login");
    }
  }

  onSlotClick(){
    this.login = this.sharedData.getLogin();
    if(this.login=="true"){
      this.router.navigate(['slot']);
    }
    else{
      alert("You need to Login");
    }
  }
}
