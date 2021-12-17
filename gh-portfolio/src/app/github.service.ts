import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http
      .get<User>(`${environment.apiUrl}/users/${environment.username}`)
      .pipe(shareReplay(1));
  }
}
