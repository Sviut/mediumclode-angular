import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getArticleAction} from '../store/actions/articleFeed.action'
import {ActivatedRoute} from '@angular/router'
import {ArticleInterface} from '../../shared/types/article.interface'
import {Observable, Subscription} from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../store/selectors'

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
