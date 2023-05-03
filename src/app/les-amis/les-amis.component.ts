import { Component } from '@angular/core';

@Component({
  //! Le selector de base est similaire au element selector de CSS
  // selector: 'app-les-amis',
  //! Avec cette syntaxe [] le composant est appelé par un attribut html
  //!<div app-les-amis></div>
  // selector:'[app-les-amis]',
  //! Avec la syntaxe des classe en css le composant est appelé avec une classe css
  //? ⚠️ par classe bof si sur un composant vous voulez hover en css
  selector: '.app-les-amis',
  templateUrl: './les-amis.component.html',
  styleUrls: ['./les-amis.component.css'],
})
export class LesAmisComponent {
  authorizeAmi: boolean = false;
  lesAmisCreationStatus: string = 'Aucun ami?';
  amiMario: string = 'Dr.Mario'
  amiCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.authorizeAmi = true;
    },);
  }
  onCreationAmi() {
    this.lesAmisCreationStatus = `Ami ajouté ${this.amiMario}`;
  }
  onClick(){
    this.amiCreated = true
  }

  onUpdateAmiName(e: Event) {
    this.amiName = (<HTMLInputElement>e.target).value;
    console.log((<HTMLInputElement>e.target).value);
  }
}
