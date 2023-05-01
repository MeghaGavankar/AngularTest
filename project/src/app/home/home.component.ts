import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 

  value: number = 100;
  options: Options = {
    floor: 20,
    ceil: 60
  };
 
  final:any;
  
  myresult:any;
  mydata:any;


  

  constructor(private userService:UserService,private http: HttpClient,private route:Router){
 
    
  
  setInterval('autoRefresh()', 2000);
  }
  // getData() {
  //   throw new Error('Method not implemented.');
  // }




  registerform=new FormGroup({
    profile:new FormControl(''),
    firstname: new FormControl('',[Validators.pattern("[a-zA-Z]+$"),Validators.maxLength(20),Validators.required]),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
   country:new FormControl('',Validators.required),
   address:new FormControl('',Validators.required),
    tags:new FormControl('',Validators.required),
  
  
   })  



    get firstname()
    {
     return this.registerform.get('firstname');
    }
   
   loguser:any;
   myuser:any;
   
   save(val:any){
   this.userService.saveUser(val).subscribe(data=>{
      // console.log(val);
      alert("registerd succesfully");
    
      this.route.navigate(['profile']);
   
      
      }
      )
} 



 
    profile:any;
   ngOnInit():void{
    this.profile='/assets/profile.jpg'
   }
  
  //  onselectfile(e:any){
  //   if(e.taget.files){
  //     var reader=new FileReader();
  //     reader.readAsDataURL(e.taget.files[0]);
  //     reader.onload=(event:any){=>
  //       this.profile=event.target.user
  //     }
  //   }

    
    
    
   
     
    ImageUpload(event:any):void{

    }

      
}



function getData() {
  throw new Error('Function not implemented.');
}

