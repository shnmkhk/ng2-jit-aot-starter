import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class SampleHttpService {
    constructor(private http:Http){

    }

    getConfig():Observable<any> {
        return this.http.get('/config.json')
    }
}