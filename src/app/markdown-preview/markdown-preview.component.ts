import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.css']
})
export class MarkdownPreviewComponent implements OnInit {

  @Input() formattedOutput: string;

  constructor() { }

  ngOnInit() {
  }

}
