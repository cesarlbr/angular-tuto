import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
})
export class StyleComponent implements OnInit {
  colorInput: string = '';
  clickPara: boolean = false;

  constructor() {}

  ngOnInit() {}
  onClick() {
    this.clickPara = !this.clickPara;
  }
}
