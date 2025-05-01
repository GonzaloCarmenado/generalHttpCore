import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderHttpCoreHubService } from './header-http-core-hub.service';
import { StandarResponse } from './models/standar-response.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralHttpCoreHubService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly headerServices: HeaderHttpCoreHubService
  ) { }


  /**
   * Este método get generico nos permite estandarizar  las llamadas Get de nuestra aplicación. Este método se encarga de añadir las cabeceras necesarias para la llamada y de devolver una respuesta estandarizada.
   * Esta logica puede complicarse todo lo que uno quiera, ya que se peuden crear mas capas de control, transformación de objetos, securización... Este es un ejemplo bastante básico pero que nos permite ver la idea
   * de como el servicio GeneralHttpCoreHubService puede estandarizar las llamadas http de nuestra aplicación.
   * @param {string} uri
   * @return {*}  {Promise<StandarResponse>}
   * @memberof GeneralHttpCoreHubService
   */
  public commonGet(uri: string): Promise<StandarResponse> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(uri, {
          headers: this.headerServices.createHeaders(),
          observe: 'response'
        })
        .subscribe({
          next: (response: HttpResponse<any>) => {
            resolve(this.generateStandarResponseData(response));
          },
          error: (error) => {
            reject(error);
          }
        });
    });
  }

  public commonPost(uri: string, body: any): Promise<StandarResponse> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(uri, body, {
          headers: this.headerServices.createHeaders(),
          observe: 'response'
        })
        .subscribe({
          next: (response: HttpResponse<any>) => {
            resolve(this.generateStandarResponseData(response));
          },
          error: (error) => {
            reject(error);
          }
        });
    });
  }

  /**
   * Se encarga de gestionar la respuesta que recibe del back y la transforma en un objeto StandarResponse. Este objeto es el que se devuelve al componente que ha llamado al servicio. De esta manera, todas las repsuestas siempre serán iguales.
   * En caso de que tuviesemos una API que no siga el estandar de respuesta, se podria transformar el objeto en este método. Por ejemplo, si la API devuelve un objeto con una propiedad "data" que contiene el objeto que nos interesa,
   *  se podría transformar el objeto en este método.
   * @private
   * @param {HttpResponse<any>} data
   * @return {*}  {StandarResponse}
   * @memberof GeneralHttpCoreHubService
   */
  private generateStandarResponseData(data: HttpResponse<any>): StandarResponse {
    return {
      status: data.status,
      message: data.statusText,
      data: data.body
    };

  }
}
