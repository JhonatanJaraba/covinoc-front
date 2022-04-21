import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /* BehaviorSubject */
  sideBehavior : any;
  private subjectSidebar = new BehaviorSubject<any>('');
  subjectSidebarBehavior = this.subjectSidebar.asObservable();


  constructor() { }

  señalesBehavior(sideBehavior: any){
    this.sideBehavior = sideBehavior;
    this.subjectSidebar.next(sideBehavior);
  }
}
