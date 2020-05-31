import { ApiService } from './../../core/services/api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeadlinesResponse } from '../models/headlines.model';

@Injectable({ providedIn: 'root' })
export class HeadlinesApi {
  readonly path = '/headlines';

  constructor(private http: HttpClient, private api: ApiService) {}

  getTopHeadlines(body): Observable<HeadlinesResponse> {
    return this.api.post(this.path, body);
  }
}
