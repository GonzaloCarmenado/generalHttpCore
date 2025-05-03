import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class HeaderHttpCoreHubService {
    constructor() {}

    public createHeaders(): HttpHeaders {
      return new HttpHeaders({
        'X-Custom-Header': 'MiHeader',
        'X-Custom-Header2': 'MiHeader2'
      });
    }
}