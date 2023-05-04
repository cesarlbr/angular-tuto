import { Component } from '@angular/core';

@Component({
  selector: 'app-un-ami',
  // ! On peut suppr le fichier html ?
  templateUrl: './un-ami.component.html',
  // ! On peut suppr le fichier css ?
  styleUrls: ['./un-ami.component.css']
  

})
export class UnAmiComponent {
  unAmiId: number = 99;
  unAmiStatus: string = '';
  unAmiTemplate: string = '<p>LOL</p>';

  constructor() {
    //  if (Math.random() < 0.5){
    //   this.unAmiStatus = "off"
    //  } else {
    //   this.unAmiStatus = "on"
    //  }
    this.unAmiStatus = Math.random() > 0.5 ? 'on' : 'off';
  }

  getColor() {
    if (this.unAmiStatus == 'off') {
      return 'red';
    } else {
      return 'green';
    }
  }
}
