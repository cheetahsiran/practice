import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithoutAuthComponent } from 'src/app/without-auth/without-auth.component';
import { WithAuthComponent } from 'src/app/with-auth/with-auth.component';

const routes: Routes = [
  {
    path: '',
    component: WithoutAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
