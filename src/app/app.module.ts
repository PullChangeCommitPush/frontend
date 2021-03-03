import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { EduDetailsComponent } from './components/edu-details/edu-details.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { OtherDetComponent } from './components/other-det/other-det.component';

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'app-user',component:UserComponent},
  {path:'app-login',component:LoginComponent},
  {path:'app-edu-details',component:EduDetailsComponent},
  {path:'app-experience',component:ExperienceComponent},
  {path:'app-personal-details',component:PersonalDetailsComponent},
  {path:'app-other-det',component:OtherDetComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    EduDetailsComponent,
    ExperienceComponent,
    PersonalDetailsComponent,
    OtherDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
