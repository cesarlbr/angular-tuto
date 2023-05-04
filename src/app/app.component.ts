import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  showPara : boolean = false;
  clickCount : any = [0]
  name = 'Jeff Dezos';

  onClick(){
    this.showPara = !this.showPara
    this.clickCount ++
  }
}
