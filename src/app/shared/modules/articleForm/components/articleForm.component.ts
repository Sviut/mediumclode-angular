import {Component, Input, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../types/backendErrors.interface'

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputInterface
  @Input() IsSubmitting: boolean
  @Input() errors: BackendErrorsInterface | null

  constructor() {}

  ngOnInit(): void {}
}
