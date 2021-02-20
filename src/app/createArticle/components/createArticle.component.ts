import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../shared/types/articleInput.interface'

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    body: 'text',
    description: 'Desc',
    title: 'Title',
    tagList: ['tag', 'tag2'],
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit($event: ArticleInputInterface): void {
    console.log($event)
  }
}
