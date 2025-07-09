import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Home } from '../home';

@Component({
  selector: 'app-house-details',
  imports: [],
  templateUrl: './house-details.html',
  styleUrl: './house-details.css'
})
export class HouseDetails {
  @Input() all_houses!: Home[];
  @Input() house_description = '';
  @Output() newEvent = new EventEmitter<string>();
  @Output() newEvent1 = new EventEmitter<string>();

  constructor(){
    console.log(this.house_description);
    this.house_description ='Initial output'
  };

  ngOnInit(){
    console.log(this.house_description);
    this.house_description ='Ouput after initial load'
  };

  ngOnChanges(changes: SimpleChanges){
    console.log(this.house_description);
    this.house_description = 'Output after changes are made'
  };

  //   submitVal(value:string){
  //     if(value){
  //     this.newEvent.emit(value);
  //   }
  submitVal(value: string) {
    if (value) {
      this.newEvent1.emit(value);
    }
  }
}


