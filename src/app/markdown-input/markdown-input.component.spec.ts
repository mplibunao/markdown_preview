import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownInputComponent } from './markdown-input.component';

describe('MarkdownInputComponent', () => {
  let component: MarkdownInputComponent;
  let fixture: ComponentFixture<MarkdownInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
