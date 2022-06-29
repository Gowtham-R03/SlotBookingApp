import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Slot } from '../model/slot';
import { User } from '../model/user';
import { ShareService } from '../services/share.service';
import { SlotService } from '../services/slot.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  slot:Slot = new Slot;
  user:User = new User;
  userInfo:any
  id:any;
  slotlist:any[]=[];

  constructor(private sharedData:ShareService, private slotService:SlotService, private router:Router, private userService:UserService) { }

  ngOnInit(): void {

    this.userInfo = this.sharedData.getUser();
    console.log(this.userInfo);
    this.id = this.userInfo.userId;
    this.getUser();
    this.getSlots();
  }

  getUser(){
    this.userService.findByUserId(this.id).subscribe((response:any)=>{this.user=response;});
  }

  getSlots(){
    this.slotService.getSlots().subscribe(response=>{this.slotlist=response});
  }

  onBook(myForm:NgForm){

    this.slotService.getSlots().subscribe(response=>{const slot = response.find((a:any)=>{ 
      return a.slotDate == this.slot.slotDate && a.slotTime == this.slot.slotTime
    });
    if(!slot){
      this.slot.userId= this.user.userId;
      this.slot.slotUser=this.user.userName;
      this.slot.slotDate=this.slot.slotDate.toString();
      this.slotService.addSlot(this.slot).subscribe(response=>{alert('The Slot details is saved'); myForm.resetForm();});
    }
    else{
      alert("This slot already exist");
    }
  
  })


   
  }

 

  

}
