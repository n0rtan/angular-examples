import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, OnDestroy, AfterViewInit {
  @Input()
  element: {
    type: string,
    name: string,
    content: string
  };

  @Input()
  name: string;

  @ViewChild('heading')
  header: ElementRef;

  @ContentChild('contentParagraph')
  paragraph: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
