import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:"dashboard",component:DashBoardComponent,
  children:[
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]
},

{path:"",
redirectTo: "dashboard/home",
pathMatch: 'full'
}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
