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

import { SaveVacancyDto } from '../models/save-vacancy-dto';
import { VacancyDto } from '../models/vacancy-dto';

@Injectable({
  providedIn: 'root',
})
export class VacancyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation all_1
   */
  static readonly All_1Path = '/api/vacancy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `all_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  all_1$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<VacancyDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VacancyService.All_1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VacancyDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `all_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  all_1(params?: {
    context?: HttpContext
  }
): Observable<Array<VacancyDto>> {

    return this.all_1$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VacancyDto>>) => r.body as Array<VacancyDto>)
    );
  }

  /**
   * Path part for operation save_1
   */
  static readonly Save_1Path = '/api/vacancy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save_1$Response(params: {
    context?: HttpContext
    body: SaveVacancyDto
  }
): Observable<StrictHttpResponse<VacancyDto>> {

    const rb = new RequestBuilder(this.rootUrl, VacancyService.Save_1Path, 'post');
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
        return r as StrictHttpResponse<VacancyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `save_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save_1(params: {
    context?: HttpContext
    body: SaveVacancyDto
  }
): Observable<VacancyDto> {

    return this.save_1$Response(params).pipe(
      map((r: StrictHttpResponse<VacancyDto>) => r.body as VacancyDto)
    );
  }

  /**
   * Path part for operation getById
   */
  static readonly GetByIdPath = '/api/vacancy/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VacancyDto>> {

    const rb = new RequestBuilder(this.rootUrl, VacancyService.GetByIdPath, 'get');
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
        return r as StrictHttpResponse<VacancyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: {
    id: number;
    context?: HttpContext
  }
): Observable<VacancyDto> {

    return this.getById$Response(params).pipe(
      map((r: StrictHttpResponse<VacancyDto>) => r.body as VacancyDto)
    );
  }

}
