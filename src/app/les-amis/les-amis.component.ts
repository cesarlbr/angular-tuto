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
export class LesAmisComponent {}
