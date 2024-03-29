/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { EmailDto } from '../models/email-dto';

@Injectable({
  providedIn: 'root',
})
export class EmailService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation all
   */
  static readonly AllPath = '/api/email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `all()` instead.
   *
   * This method doesn't expect any request body.
   */
  all$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<EmailDto>>> {

    const rb = new RequestBuilder(this.rootUrl, EmailService.AllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmailDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `all$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  all(params?: {
    context?: HttpContext
  }
): Observable<Array<EmailDto>> {

    return this.all$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EmailDto>>) => r.body as Array<EmailDto>)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/api/email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method doesn't expect any request body.
   */
  create$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmailService.CreatePath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  create(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
