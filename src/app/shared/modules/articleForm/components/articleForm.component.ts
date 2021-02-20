import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ArticleInputInterface} from '../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../types/backendErrors.interface'
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputInterface
  @Input() isSubmitting: boolean
  @Input() errors: BackendErrorsInterface | null

  @Output() articleSubmit = new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      body: '',
      tagList: '',
    })
  }

  onSubmitHandler(): void {
    this.articleSubmit.emit(this.form.value)
  }
}
