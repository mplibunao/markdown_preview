import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarkdownInputComponent } from './markdown-input/markdown-input.component';
import { MarkdownPreviewComponent } from './markdown-preview/markdown-preview.component';

import { MarkedService } from './marked.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownInputComponent,
    MarkdownPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MarkedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
