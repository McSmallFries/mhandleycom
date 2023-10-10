import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieOptions, CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  theme = '';
  title = 'mh-com';
  appReady = true; // change back to false. // load routes => appReady = true;
  approot = document.getElementsByTagName('app-root')[0];
  
  constructor(private route: ActivatedRoute )  {
    console.log(route);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
