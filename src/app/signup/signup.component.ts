import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:User = new User();
  selectedFile: any;
  one:any;
  two:any;
  url="";

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['login']);
  }


  // public onFileChanged(event:any) {
  //   //Select File
  //   // this.selectedFile = event.target.files[0];
  //   // console.log(this.selectedFile);
  //   var reader =new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload=(event:any)=>{
  //     this.url=event.target.result;
  //     this.user.picName=this.url;}
   
  // }

  onSignUp(form: NgForm){
    
    
    // const uploadImageData = new FormData();
    // // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // // this.userService.uploadUserImage(uploadImageData).subscribe(response=>{console.log(response);});
    this.userService.addUser(this.user).subscribe(response=>{alert('The user details is saved'); form.resetForm();this.router.navigate(['login']);});
  }


}
