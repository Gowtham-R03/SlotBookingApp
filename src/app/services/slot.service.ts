import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slot } from '../model/slot';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http:HttpClient) { }

  getSlots(){
    return this.http.get<any>('http://localhost:8080/slot/getSlots')
  }

  addSlot(slot:Slot){
    return this.http.post<any>('http://localhost:8080/slot/addSlot',slot);
  }

  updateSlot(slot:Slot){
    return this.http.put<any>('http://localhost:8080/slot/updateSlot',slot);
  }

  deleteSlot(id:any){
    return this.http.delete<any>(`http://localhost:8080/slot/deleteSlot/${id}`);
  }
}
