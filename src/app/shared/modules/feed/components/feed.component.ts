import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {getFeedAction} from '../store/actions/getFeed.action'

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrl}))
  }
}
