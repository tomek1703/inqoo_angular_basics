import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SwStarshipsPageComponent} from "./sw-starships/pages/sw-starships-page/sw-starships-page.component";
import {SwPeoplePageComponent} from "./sw-people/pages/sw-people-page/sw-people-page.component";
import {NotFoundPageComponent} from "./page-not-found/pages/not-found-page/not-found-page.component";
import {HomePageComponent} from "./home/pages/home-page/home-page.component";
import {
  ComponentsShowroomPageComponent
} from "./shared/pages/components-showroom-page/components-showroom-page.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'sw-starships', component: SwStarshipsPageComponent},
  {path: 'sw-people', component: SwPeoplePageComponent},
  {path: 'components', component: ComponentsShowroomPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
