import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    getSummary(): Observable<any> {
        return this.http.request('GET', 'https://bqlf8qjztdtr.statuspage.io/api/v2/summary.json');
    }

    getIncidents(): Observable<any> {
        return this.http.request('GET', 'https://bqlf8qjztdtr.statuspage.io/api/v2/incidents.json');
    }
}
