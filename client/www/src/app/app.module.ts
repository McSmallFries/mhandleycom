import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GlobalService } from './providers/global.service';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/navbar/components.module';
import { CookieOptions, CookieService, CookieOptionsProvider } from 'ngx-cookie';
import { UtilityService } from './providers/utility.service';
import { WebApi } from './providers/api.service';
import { WebsocketService } from './providers/websocket.service';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [GlobalService, UtilityService, WebApi, WebsocketService]
})
export class AppModule {}