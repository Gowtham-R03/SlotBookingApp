import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ShareService } from '../services/share.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formValue !: FormGroup;
  formValue1 !: FormGroup;
  userInfo:any;
  id:any;
  user:User = new User();
  retriveImage:any;
  url="";

  constructor(private sharedData:ShareService, private userService:UserService,
     private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.formValue=this.formBuilder.group({
      userName: ['',Validators.required],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
     phnNumber : ['',Validators.required]
    });

    this.formValue1=this.formBuilder.group({
      password: [''],
      newPassword : [''],
      conformPassword : ['']
    });

    this.userInfo = this.sharedData.getUser();
    console.log(this.userInfo);
    this.id = this.userInfo.userId;
    this.getUser();
  }

  getUser(){
    this.userService.findByUserId(this.id).subscribe((response:any)=>{this.user=response;});
  }

  public onFileChanged(event:any) {
    //Select File
    // this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
    var reader =new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;}
   
  }
  

  onEdit(){
    this.formValue.controls['userName'].setValue(this.user.userName)
    this.formValue.controls['firstName'].setValue(this.user.firstName)
    this.formValue.controls['lastName'].setValue(this.user.lastName)
  }

  onUpdate(){
    this.user.userName = this.formValue.value.userName;

    this.userService.updateUser(this.user).subscribe(res=>{
      alert("Employee Details Updated")
      this.formValue.reset();
      let ref = document.getElementById("cancle");
      ref?.click();
      this.getUser();
    })

  }

  onDelete(){
    this.userService.deleteUser(this.id).subscribe(res=>{alert("User Details Deleted");
    this.sharedData.setUser(this.user=new User());
    this.getUser();})
  }

  onChangePassword(){
    this.getUser();
  }

  onUpdatePassword(){

    if(this.user.password==this.formValue1.value.password){ 
      if(this.formValue1.value.newPassword==this.formValue1.value.conformPassword){
        this.user.password=this.formValue1.value.newPassword;
        this.userService.updateUser(this.user).subscribe(res=>{
          alert("Employee Password Updated")
          this.formValue1.reset();
          let ref1 = document.getElementById("cancle1");
          ref1?.click();
          this.getUser();
    })}
      else{
        alert('Conform password doesnt match');
      }
    }
    else{
    alert('Old password was wrong')
    }
  }

  onLogOut(){
    this.sharedData.setUser('');
    this.sharedData.setLogin('false');
    this.router.navigate(['login']);
}

}
