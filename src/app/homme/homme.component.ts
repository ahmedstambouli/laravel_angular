import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
let loader = new Loader({
  apiKey: "AIzaSyDN_GqkbXwoaC8LnEVd49f5s_rP3k01Blo",
  })

  loader.load().then(() => {
    new google.maps.Map(document.getElementById('map'),{
      center: { lat: 36.82961984497351, lng: 10.194071166266612 },

      zoom: 15

    })
  })
  
    
}
}
