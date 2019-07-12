import { Component, OnInit } from '@angular/core';
import { NoticeModel } from 'src/app/notice-model';
import { GetAllNoticeService } from 'src/app/get-all-notice.service';
import { NullAstVisitor } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  constructor(private getAllNotices:GetAllNoticeService,
              private router:Router       
    ) { }
  notices:NoticeModel[];
  ngOnInit() {
    this.getAllNotices.getNotice().subscribe(
      data =>{
       //console.log(data);
       this.notices = data.notices;
       console.log(this.notices);
      }
     )
  }
  onClick(){
  //  alert("hello");
    
    if(localStorage.getItem('token') != null)
    {
      this.router.navigate(['../admin/notices']);
    }
    else{
      this.router.navigate(['../admin']);
    }
  }

}
