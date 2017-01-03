import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComponentService {

    constructor (private http: Http) {}

    baseUrl = 'http://apitodo.herokuapp.com/api/todos';

    getTodos() {
        return this.http.get(this.baseUrl);
    }
}
