import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class HeaderHttpCoreHubService {
    constructor() {}

    public createHeaders(): HttpHeaders {
      return new HttpHeaders({
        'Authorization': `${this.getToken()}`,
        'X-Custom-Header': 'MiHeader',
        'X-Custom-Header2': 'MiHeader2'
      });
    }
  
    private getToken(): string {
      return localStorage.getItem('token') || '';
    }
  
}