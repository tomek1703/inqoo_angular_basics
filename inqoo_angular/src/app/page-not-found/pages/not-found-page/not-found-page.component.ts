import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate([RoutesConfig.home]);
    // }, 3000)
  }

}
