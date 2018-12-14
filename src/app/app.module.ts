import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { DataContentComponent } from './home/data-content/data-content.component';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoaderComponent } from './shared/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeadermenuComponent,
    DataContentComponent,
    SideMenuComponent,
    DropdownDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
