import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShareMainContentService } from 'src/app/services/shared/share-main-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  userName: string;

  constructor(private authService: AuthService, private shareMainContentService: ShareMainContentService) { }

  ngOnInit(): void {
     this.userName = this.authService.currentUserValue.user.first_name + ' ' + this.authService.currentUserValue.user.last_name ;
  }

  logout(): void{
    this.authService.logout();
  }

  publishContent(contentPath: string): void{
    this.shareMainContentService.setMainContent(contentPath);
  }

}
