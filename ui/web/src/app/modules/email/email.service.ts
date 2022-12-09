import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { notificationUri } from 'src/app/configs/notification.uri';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  getEmails(): Observable<any> {
    return this.http.get(notificationUri.getAllEmail);
  }
}
