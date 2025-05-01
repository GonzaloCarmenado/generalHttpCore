import { Component } from '@angular/core';
import { GeneralHttpCoreHubService } from '../../projects/general-http-core-hub/src/public-api';

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
}
