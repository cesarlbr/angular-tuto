import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  photo : any = './doctor.jpg'
  name : string = 'Dr.Mario'
  age : number = 40
  ageRandom : number = this.numberFetiche(30)
  ageAdd : any = this.age + 10
  constructor() { }

  ngOnInit() {
  }
  numberFetiche(max: number){
    return Math.floor(Math.random()* max)
  }

}