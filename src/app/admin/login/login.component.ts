import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationServiceService } from 'src/app/authorization-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted;
  myForm: FormGroup;
  err:boolean;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authorizationService:AuthorizationServiceService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        pwd: ['',Validators.required],        
      }
    );
  }
  formSubmit() 
  {       
    
    
    this.submitted = true;
    if (this.myForm.invalid)
    {
      return;
    }
    else
    {   
       //  this.router.navigate(['/admin/notices'])
      //alert("hello");
      this.authorizationService.login(
        this.myForm.value.email,
        this.myForm.value.pwd
      ).subscribe(
          data=>{
            console.log(data);
            this.router.navigate(['/admin/notices']);
            localStorage.setItem("token",data.token);
          },
          error => {
            this.err = true;
            console.log(error);
          }
          
      );
   
      /* this.authorazationService.login(
            this.myForm.value.username,
            this.myForm.value.pwd
            ).subscribe(
                  data => {
                    console.log(data);
                    this.router.navigate(['/todo-list']);
                    localStorage.setItem("token",data.token);
                  },
                  error =>{
                    this.error=true;
                    console.log(error);
                  }

            );*/

        
    }
  }

}
