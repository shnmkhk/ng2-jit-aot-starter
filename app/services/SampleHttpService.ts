import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
@Injectable()
export class SampleHttpService {
    constructor(private http:Http){

    }

    getConfig() {
        this.http.get('/config.json')
    }
}