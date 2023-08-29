import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpTestService {
  constructor(private http: HttpClient) {}

  getListe() {
    const httpParams = new HttpParams().set('number', 1);
    return this.http.get('api/URL', { params: httpParams });
  }
}
