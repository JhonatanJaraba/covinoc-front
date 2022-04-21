import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/Myutils/utils.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isCollapsed = false;
  openMap:any = {
    sub1: false,
    sub2: false,
  };

 

  constructor(private utils: UtilsService,) { }

  private userServiceSubscription: Subscription | undefined;
  ngOnInit(): void {

    this.userServiceSubscription = this.utils.subjectSidebarBehavior.subscribe( 
      subjectSidebarBehavior =>{
          this.isCollapsed = subjectSidebarBehavior;
      }
    )
    this.isCollapsed = false;
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

}
