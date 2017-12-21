import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ScrollEventModule } from 'ngx-scroll-event';
import {StickyModule} from 'ng2-sticky-kit';

import { CollapseModule } from 'ngx-bootstrap/collapse';


import { AppComponent } from './app.component';
import { MiddleUpComponent } from './middle-up/middle-up.component';
import { HeaderComponent } from './header/header.component';
import { MiddleDownComponent } from './middle-down/middle-down.component';

import { routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ScrollEventModule,
    StickyModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
