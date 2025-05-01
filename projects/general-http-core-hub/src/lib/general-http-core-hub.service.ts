import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderHttpCoreHubService } from './header-http-core-hub.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralHttpCoreHubService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly headerServices: HeaderHttpCoreHubService
  ) { }


  public commonGet(uri:string):Promise<any>{
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(uri, {
          headers: this.headerServices.createHeaders()
        })
        .subscribe({
          next: (respuesta) => {
            resolve(respuesta);
          },
          error: (error) => {
            reject(error);
          }
        });
    });
  }
}
