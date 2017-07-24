import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(
    private http: Http
  ) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(
    //   'https://nrtproj.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers}
    // );
    return this.http.put(
      'https://nrtproj.firebaseio.com/data.json',
      servers,
      {headers: headers}
    );
  }

  getServers() {
    return this.http.get('https://nrtproj.firebaseio.com/data.json').map(
      (response: Response) => {
        return response.json();
      }
    ).catch(
      (error: Response) => {
        return Observable.throw('err');
      }
    );
  }

  getAppName() {
    return this.http.get('https://nrtproj.firebaseio.com/appName.json').map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
