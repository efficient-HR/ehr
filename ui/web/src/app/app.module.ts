import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailModule } from './modules/email/email.module';
import { ApiModule } from './api/notification/api.module';
import { environment } from 'src/environments/environment';
import { LayoutModule } from './layout/layout.module';
import { EnrollmentApiModule } from './api/enrollment/enrollment-api.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmailModule,
    LayoutModule,
    ApiModule.forRoot({ rootUrl: environment.notificationUri }),
    EnrollmentApiModule.forRoot({ rootUrl: environment.enrollmentUri }),
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
