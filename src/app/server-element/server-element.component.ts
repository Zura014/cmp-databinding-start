import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, AfterContentInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  @Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  constructor() {
    console.log('constructor called');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('text:' + this.header.nativeElement.textContent);
    console.log('pcontent:' + this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentInit(): void {
    console.log('pcontent:' + this.paragraph.nativeElement.textContent);
  }

}
