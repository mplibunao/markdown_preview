import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { INTRO } from '../intro';

@Component({
  selector: 'app-markdown-input',
  templateUrl: './markdown-input.component.html',
  styleUrls: ['./markdown-input.component.css']
})
export class MarkdownInputComponent implements OnInit {
  
  // Used in two-way model binding
  inputText: string;
  // Old input is just used for checking if the value in the text area has changed
  oldInput: string;

  // Use @Output decorator to create an event emitter which will emit the custom event when we update the text area
  @Output() inputChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  // Initialize introductory message and emit event to update preview
  ngOnInit() {
    this.oldInput = this.inputText = INTRO.message;
    this.inputChange.emit(this.inputText);
  }

  // If input text changed, emit an event for other components to see
  updateInput(): void {
    if (this.oldInput !== this.inputText){
      this.oldInput = this.inputText;
      this.inputChange.emit(this.inputText);
    }
  }

  // Clear text area and emit event
  clearInput(): void {
    this.oldInput = this.inputText = '';
    this.inputChange.emit(this.inputText);
  }


}
