import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareMainContentService } from 'src/app/services/shared/share-main-content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  mainContent: string;

  constructor(private shareMainContentService: ShareMainContentService) { }

  ngOnInit(): void {
    this.subscription.add(
        this.shareMainContentService.mainContent.subscribe(mainContent => {
          this.mainContent = mainContent;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
