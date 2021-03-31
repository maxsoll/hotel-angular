import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { ContactsComponent } from './components/contacts/contacts.component';


/* const appRoutes:Routes [
  {path: '', component: RoomComponent},
  {path: 'contacts', component: ContactsComponent},
]; */

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
