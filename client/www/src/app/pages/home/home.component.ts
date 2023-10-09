import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { WebApi } from 'src/app/providers/api.service';
import { GlobalService } from 'src/app/providers/global.service';
import { UtilityService } from 'src/app/providers/utility.service';
import { WebsocketService } from 'src/app/providers/websocket.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('basicFade', [
      transition(':enter', [
        style({ opacity: 1000 }),
        animate(0, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(500, style({ opacity: 0 }))])
    ]),
    trigger('progressFadeOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(0, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(1000, style({ opacity: 0 }))])
    ])
  ],
  providers: []
})

export class HomeComponent implements OnInit  {


  constructor (private router: Router, private route: ActivatedRoute, private globals: GlobalService, private util: UtilityService,
    private api: WebApi, private socket: WebsocketService)  {

  }

  ngOnInit()  {

  }
}