import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AddNoticeService } from 'src/app/add-notice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  success = false;
  constructor(
    private fb: FormBuilder,
    private addNoticeService:AddNoticeService,
    private router:Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', Validators.required],
      title:['',Validators.required],
      date:['', [Validators.required,Validators.pattern('[2019]+[-]+([0-9]{2})[-]+([0-9]{2})')]],
    });
  }

  get f() { return this.form.controls;  }
  logout(){
    this.router.navigate(['./admin']);
    localStorage.removeItem('token');
  }

  onSubmit() 
  {

    let value = this.form.value;
    

    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    else{
    
     console.log(value);
      this.addNoticeService.addNotice(value.title,value.date,value.description).subscribe(
        data => {
            console.log(data.id);
            this.success =true;
        },
        error =>{
          console.log(error);
         // alert("date must by of year 2019")
        }
      );

    }
   

  }

}/*
 additems(name)
  {
      if(name == "")
      {
        alert("empty value not allowed");
      }
       this.addtodoservice.addItem(name).subscribe(
         data => {
           console.log("success");
           //this.todos = data;
           console.log(data.id);
           this.todos.push({id:data.id,title : name});   
          // this.todos.push({data} as Todo);
           //console.log(data.title);
         },
         error =>{
           console.log(error);
         }
       )   
     
      //this.contacts.push({name} as Todo); // adding object to array contacts      
    
  }*/