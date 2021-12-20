import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Repository } from '../interfaces/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repos$: Observable<Repository[]> | undefined;
  forkedRepos$: Observable<Repository[]> | undefined;

  getReposCall$: Observable<Repository[]>;

  constructor(private githubService: GithubService) {
    this.getReposCall$ = this.githubService.getRepos();
  }

  ngOnInit(): void {
    this.repos$ = this.getReposCall$
      .pipe(map((repos) => repos.filter((repo) => !repo.fork)));

    this.forkedRepos$ = this.getReposCall$
      .pipe(map((repos) => repos.filter((repo) => repo.fork)));
  }
}
