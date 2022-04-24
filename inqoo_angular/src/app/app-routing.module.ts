import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SwStarshipsPageComponent} from "./sw-starships/pages/sw-starships-page/sw-starships-page.component";
import {SwPeoplePageComponent} from "./sw-people/pages/sw-people-page/sw-people-page.component";

const routes: Routes = [{
  path: 'sw-starships', component: SwStarshipsPageComponent
}, {
  path: 'sw-people', component: SwPeoplePageComponent
},
  // {path: '', redirectTo: '/sw-starships', pathMatch: 'full'},
  { path: '**', component: SwPeoplePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
