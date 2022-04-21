import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username!:string;

  constructor(
    private apiTokens: TokenService,

  ) { }

  ngOnInit(): void {
    this.username = this.apiTokens.getUserName();
  }

}
