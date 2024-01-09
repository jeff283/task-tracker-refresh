import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor (private uiService:UiService){
    this.showAddTask = false;
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask=value)
    )
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
    
  }

}

