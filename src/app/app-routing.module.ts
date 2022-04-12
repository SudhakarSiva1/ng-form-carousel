import { CarouselComponent } from './components/carousel/carousel.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: '', redirectTo: '/user-form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() {
    console.log("Form Works");
}

}
