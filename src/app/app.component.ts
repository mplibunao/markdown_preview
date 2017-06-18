import { Component } from '@angular/core';
import { MarkedService } from './marked.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private markedService: MarkedService) {}

  title = 'Markdown Previewer';
  raw = '';

  handleInput(input: string): void {
    this.raw = input;
  }

  parseMarkdown(): string {
    return this.markedService.dangerousParse(this.raw);
  }


}
