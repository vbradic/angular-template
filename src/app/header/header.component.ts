import { Component, OnInit, ElementRef, EventEmitter, HostListener,Input,Output } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  title = 'app';
  
    isIn = false;   // store state
  
    scroll = false;
    
    isShrunk: boolean = false;

    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
  
    public handleScroll(event: ScrollEvent) {
      this.scroll = true;
      console.log('scroll occurred', event.originalEvent);
    }

/*
    constructor(zone: NgZone) {
      window.onscroll = () => {
        zone.run(() => {
          if(window.pageYOffset > 0) {
               this.isShrunk = true;
          } else {
               this.isShrunk = false;
          }
        });
      }
    }

  
*/
  ngOnInit() {
  }

}
