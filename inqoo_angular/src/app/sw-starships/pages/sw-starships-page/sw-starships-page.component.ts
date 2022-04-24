import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../../api/services/swapi.service";

@Component({
  selector: 'app-sw-starships-page',
  templateUrl: './sw-starships-page.component.html',
  styleUrls: ['./sw-starships-page.component.scss']
})
export class SwStarshipsPageComponent implements OnInit {

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.swapi.getStarships().subscribe(result => console.log(result))
  }

}
