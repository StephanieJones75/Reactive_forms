import { Component, HOST_TAG_NAME } from '@angular/core';
import { HouseDetails } from '../house-details/house-details';
import { Home } from '../home';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-houses',
  imports: [HouseDetails, FormsModule],
  templateUrl: './houses.html',
  styleUrl: './houses.css'
})
export class Houses {

  description = "Housing-details in Parent";
  event_name = "";

  houses: Home[] =[
    {
      id: 0,
      name: 'ABC Housing',
      city: 'Flin Flon',
      state: 'MB'
    },
    {
      id: 1,
      name: 'XYZ Housing',
      city: 'Whisler',
      state: 'BC',
    }
  ];

  childFromVal(event:any){
    this.event_name = event;
  }
}
