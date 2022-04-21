import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/Myutils/utils.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isCollapsed = false;

  constructor(private utils: UtilsService,private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  sidebar(Collapsed: any){
    this.utils.señalesBehavior(Collapsed);
  }   

  closeSession() {
    this.tokenService.logOut();
  }

}
