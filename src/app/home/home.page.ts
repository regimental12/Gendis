import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../Services/HttpService';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    constructor(private httpService: HttpService) {
        this.syncSummary();
    }

    status: any;

    website: any;
    API: any;
    https: any;
    login: any;
    incidents: any;

    summarySync: Subscription;


    ngOnInit() {
        this.getInfo();
    }

    getInfo() {
        this.httpService.getSummary().subscribe((res) => {
            console.log(res);
            this.status = res;
            this.website = res.components[0];
            this.API = res.components[1];
            this.https = res.components[3];
            this.login = res.components[10];
            this.incidents = res.incidents.length;
        });
    }

    syncSummary() {
        this.summarySync = interval(10000).subscribe(() => {
            this.getInfo();
        });
    }
}
