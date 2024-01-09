import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if(!this.text){
      alert('Please add a Task!');
      return;
    }

    const newTask = {
      text : this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);


    // Clear form
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
