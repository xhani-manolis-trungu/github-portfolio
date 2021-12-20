import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './interfaces/repository';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
  }

  getUser(): Observable<User> {
    return this.http
      .get<User>(this.userUrl)
      .pipe(shareReplay(1));
  }

  getRepos(): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(this.userUrl + '/repos')
      .pipe(shareReplay(1));
  }
}
