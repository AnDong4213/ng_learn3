import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { token } from './injectionToken';
import { Quote } from '../domain';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(
    private http: HttpClient,
    @Inject(token) private config: { uri: string }
  ) {}

  getQuote(): Observable<Quote> {
    const url = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.http.get<Quote>(url);
  }
}
