import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;

  constructor() { 
    this.label = '';
    this.placeholder = '';
  }

  ngOnInit(): void {
  }

}
