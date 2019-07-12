import { Component, OnInit } from '@angular/core';
import { NoticeModel } from 'src/app/notice-model';
import { GetAllNoticeService } from 'src/app/get-all-notice.service';
import { DeleteNoticeService } from 'src/app/delete-notice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-notice',
  templateUrl: './admin-notice.component.html',
  styleUrls: ['./admin-notice.component.css']
})
export class AdminNoticeComponent implements OnInit {

  constructor(private getAllNotices:GetAllNoticeService,
              private deleteNoticeService:DeleteNoticeService,
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
  addNotice(){
    //alert('hii');
    this.router.navigate(['./admin/notices/add-notice']);
  }
  viewNotice(notice:NoticeModel){

    this.router.navigate(['./admin/notices',notice.id]);

  }
  deleteNotice(notice:NoticeModel,index){
      console.log(notice.id);
      this.deleteNoticeService.deleteNotice(notice.id).subscribe(
        data=>{
          //console.log(data);
          console.log("successfully deleted");
          this.notices.splice(index,1);
        }
      );

  }
  logout(){
    this.router.navigate(['./admin']);
    localStorage.removeItem('token');
  }

}
