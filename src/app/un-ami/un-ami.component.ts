import { Component } from '@angular/core';

@Component({
  selector: 'app-un-ami',
  // ! On peut suppr le fichier html ?
  // templateUrl: './un-ami.component.html',
  template:`
            <div class="un-ami">
              <h5>☺︎Ici c'est un Ami</h5>
              <h5> ID : {{unAmiId}}</h5>
              <p>{{unAmiStatus}}</p>
              <p>{{unAmiTemplate}}</p>
            </div>
           `,
  // ! On peut suppr le fichier css ?
  // styleUrls: ['./un-ami.component.css']
  styles:[`
  .un-ami{
    color: rgb(0, 255, 217);
    background-color: rgb(20, 93, 145);
}`]
})
export class UnAmiComponent {
unAmiId:number = 99;
unAmiStatus: string = 'off';
unAmiTemplate: string ='<p>LOL</p>'
}