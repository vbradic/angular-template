import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ScrollEventModule } from 'ngx-scroll-event';
import {StickyModule} from 'ng2-sticky-kit';

import { CollapseModule } from 'ngx-bootstrap/collapse';


import { AppComponent } from './app.component';
import { MiddleUpComponent } from './middle-up/middle-up.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MiddleUpComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ScrollEventModule,
    StickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
