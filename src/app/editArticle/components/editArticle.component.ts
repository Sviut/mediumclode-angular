import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../shared/types/articleInput.interface'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'
import {select, Store} from '@ngrx/store'
import {ActivatedRoute} from '@angular/router'
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors'
import {filter, map} from 'rxjs/operators'
import {ArticleInterface} from '../../shared/types/article.interface'
import {getArticleAction} from '../store/actions/getArticle.action'

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    // this.store.dispatch(editArticleAction({articleInput}))
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter<ArticleInterface>((article) => article !== null),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          tagList: article.tagList,
          description: article.description,
          body: article.body,
        }
      })
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
