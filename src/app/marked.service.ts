import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkedService {
  constructor() { }

  dangerousParse(raw: string): string {
    return marked(raw);
  }

  safeParse(raw: string): string {
    marked.setOptions({sanitize: true});
    return marked(raw);
  }
}
