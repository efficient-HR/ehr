/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CompanyService } from './services/company.service';
import { ApiService } from './services/api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CompanyService,
    ApiService,
    ApiConfiguration
  ],
})
export class EnrollmentApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<EnrollmentApiModule> {
    return {
      ngModule: EnrollmentApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: EnrollmentApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('EnrollmentApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
