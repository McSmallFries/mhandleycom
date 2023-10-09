import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../../providers/global.service';
import { TranslateService } from '@ngx-translate/core';
import { WebApi } from '../../../providers/api.service';
import { NotificationsService } from 'angular2-notifications';
import { UtilityService } from '../../../providers/utility.service';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../../../providers/websocket.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations: [
      trigger('hideRedirectPanel', 
        [state('hide', 
          style({
            bottom: '50px',
            'padding-bottom': '0'
        })),
        state('show', style({
          bottom: '-30px',
          'padding-bottom': '16px'
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('600ms ease-out')),
      ])
    ]
})

export class NavbarComponent implements OnInit {

    showNav = true;
    showRedirectPanel = true;

    constructor(private router: Router, private route: ActivatedRoute, private globals: GlobalService, private util: UtilityService,
       private api: WebApi, private socket: WebsocketService) {
            // this.showNav = this.globals.showNav;
            /* Setting default */
            // this.showRedirectPanel = this.globals.redirectPanelState;
    }

    async ngOnInit() {
    
    }

    goToLink(url: string) {
        url = url.includes("http") ? url : "//" + url;
        window.open(url, "_blank");
    }

    async onLogout() {
        // this.globals.logout();
        await this.router.navigate(['/']);
    }

    setLang(lang: string) {
        // const userSettings = new Array<UserSetting>();
        // userSettings.push(this.userLanguageSetting);
        // this.tsmservice.CreateOrUpdateUserSettings(userSettings)
        //     .catch(err => {
        //         this.toast.error('Error', err, this.util.getDefaultToastOptions());
        //     });
    }

    toggleRedirectPanel() {
    //   this.globals.redirectPanelState = !this.globals.redirectPanelState;
    //   this.showRedirectPanel = this.globals.redirectPanelState;
    }

}
