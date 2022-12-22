/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { EmailService } from './services/email.service';
import { AppService } from './services/app.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    EmailService,
    AppService,
    ApiConfiguration
  ],
})
export class NotificationApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<NotificationApiModule> {
    return {
      ngModule: NotificationApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: NotificationApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('NotificationApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
