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

import { CompanyDto } from '../models/company-dto';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation all
   */
  static readonly AllPath = '/company';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `all()` instead.
   *
   * This method doesn't expect any request body.
   */
  all$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CompanyDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.AllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CompanyDto>>;
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
): Observable<Array<CompanyDto>> {

    return this.all$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CompanyDto>>) => r.body as Array<CompanyDto>)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/company';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    context?: HttpContext
    body: CompanyDto
  }
): Observable<StrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.CreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    context?: HttpContext
    body: CompanyDto
  }
): Observable<CompanyDto> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Path part for operation get
   */
  static readonly GetPath = '/company/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CompanyDto> {

    return this.get$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

}
