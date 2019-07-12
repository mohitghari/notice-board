import { Component, OnInit } from '@angular/core';
import { GetSingleNoticeService } from 'src/app/get-single-notice.service';
import { NoticeModel } from 'src/app/notice-model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UpdateNoticeService } from 'src/app/update-notice.service';

@Component({
  selector: 'app-view-notice-detail',
  templateUrl: './view-notice-detail.component.html',
  styleUrls: ['./view-notice-detail.component.css']
})
export class ViewNoticeDetailComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  noticeId;
  noticeTitle;
  NoticeDetail;
  notice: NoticeModel;
  constructor(private getSingleNoticeService: GetSingleNoticeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router:Router,
    private updateNoticeService:UpdateNoticeService
  ) { }
  
  ngOnInit() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
      
    });

    let id = +this.route.snapshot.paramMap.get('id');
    //alert(id);
    this.noticeId=id;
    
    this.getSingleNoticeService.getNotice(id)
      .subscribe(
        data => {
          //console.log(data);
          this.notice = data;
         //    this.noticeTitle=data.title;
        //  this.NoticeDetail=data.detail;
          this.form.patchValue({
                  title: data.title,
                  description: data.detail
            })

        }
      );
      console.log(this.noticeId);
     // console.log(this.notice.title);

    }
    logout(){
      this.router.navigate(['./admin']);
      localStorage.removeItem('token');
    }
    get f() { return this.form.controls; }
    success=false;
    onSubmit(){
      let value = this.form.value;
    

      this.submitted = true;
      // stop here if form is invalid
      if (this.form.invalid) {
        return;
      }
  
      else{
      this.updateNoticeService.updateNotice(this.noticeId,value.title,value.description)
      .subscribe(
        data => {
          console.log(data);
          console.log("success");
          this.success = true;
        },
        error =>{
            console.log(error);
        }
      )
      /* console.log(value);
        this.addNoticeService.addNotice(value.title,value.date,value.description).subscribe(
          data => {
              console.log(data.id);
              this.success =true;
          },
          error =>{
            console.log(error);
           // alert("date must by of year 2019")
          }
        );*/
  
          //this.updateNoticeService.updateNotice
        }


    }




}
