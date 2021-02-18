import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ErrorMessageComponent} from './banner/errorMessage.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
