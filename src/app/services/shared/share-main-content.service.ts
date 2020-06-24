import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareMainContentService {
  private mainContentBehaviourSubject = new BehaviorSubject('welcome');

  mainContent = this.mainContentBehaviourSubject.asObservable();
  constructor() { }

  setMainContent(contentPath: string): void {
    this.mainContentBehaviourSubject.next(contentPath);
  }
}
