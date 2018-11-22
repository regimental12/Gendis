import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../Services/HttpService';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    incidents: any;

    incidentSync: Subscription;

    constructor(private httpService: HttpService) {
        this.syncIncidents();
    }

    ngOnInit() {
        this.getInfo();
    }

    getInfo() {
        this.httpService.getIncidents().subscribe((res) => {
            console.log(res);
            this.incidents = res;
        });
    }

    sort(name) {
        console.log(name);
        switch (name) {
            case 'status':
                this.incidents.incidents.sort((a, b) => {
                    return a.status <= b.status ? 1 : -1;
                });
                break;
            case 'service':
                this.incidents.incidents.sort((a, b) => {
                    return a.name <= b.name ? 1 : -1;
                });
                break;
            case 'created':
                this.incidents.incidents.sort((a, b) => {
                    return a.created_at <= b.created_at ? 1 : -1;
                });
                break;

        }
    }

    syncIncidents() {
        this.incidentSync = interval(10000).subscribe((res) => {
            this.getInfo();
        });
    }

}
