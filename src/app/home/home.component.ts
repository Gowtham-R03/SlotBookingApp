import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Slot } from '../model/slot';
import { ShareService } from '../services/share.service';
import { SlotService } from '../services/slot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slot:any[]=[];
  formValue !: FormGroup;
  userInfo:any;
  id:any;
  totalLength:any;
  page:number=1;
 

  constructor(private sloService:SlotService, private sharedData:ShareService) { }

  ngOnInit(): void {

    this.getSlots();
    console.log(this.slot);
    
  }
  getSlots() {
    this.sloService.getSlots().subscribe((response:any)=>{this.slot=response;})
  }

  
  onDeleteSlot(list:any){

    this.userInfo = this.sharedData.getUser();
    this.id=this.userInfo.userId;

    if(this.id==list.userId){
    
    this.sloService.deleteSlot(list.slotId).subscribe((response:any)=>{alert("Slot deleted");this.getSlots();});
    }
    else{
      alert("This Slot Not belong to You")
    }
  }


}
