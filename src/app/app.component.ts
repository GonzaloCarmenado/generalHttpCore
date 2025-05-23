import { Component } from '@angular/core';
import { GeneralHttpCoreHubService } from '../../projects/general-http-core-hub/src/public-api';
import { ClientModel } from './models/client-data.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'generalHttpCore';

  constructor(
    private readonly generalService: GeneralHttpCoreHubService
  ) { }

  public testGet(): void {
    this.generalService.commonGet('https://68133ebe129f6313e210adc8.mockapi.io/api/v1/clients').then(
      (respuesta) => {
        console.log(respuesta)
      })
  }

  public testPost(): void {
    this.generalService.commonPost('https://68133ebe129f6313e210adc8.mockapi.io/api/v1/clients',this.generateClientPostPut()).then(
      (respuesta) => {
        console.log(respuesta)
      })
  }

  public testPut(): void {
    this.generalService.commonPut('https://68133ebe129f6313e210adc8.mockapi.io/api/v1/clients/2',this.generateClientPostPut()).then(
      (respuesta) => {
        console.log(respuesta)
      })
  }

  public testDelete(): void {
    this.generalService.commonDelete('https://68133ebe129f6313e210adc8.mockapi.io/api/v1/clients/3').then(
      (respuesta) => {
        console.log(respuesta)
      })
  }

  public generateClientPostPut():ClientModel{
    return {
      id: "2",
      createdAt: "2024-12-01T10:32:45Z",
      name: "Lucía Ortega",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastname: "Ortega",
      secondLastname: "Fernández",
      phone: "+34 612 345 678",
      email: "lucia.ortega@example.com"
    };
  }
}
