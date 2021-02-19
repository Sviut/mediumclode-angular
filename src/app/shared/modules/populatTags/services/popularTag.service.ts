import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '../../../../../environments/environment'
import {HttpClient} from '@angular/common/http'
import {GetPopularTagsResponseInterface} from '../types/getPopularTagsResponse.interface'
import {map} from 'rxjs/operators'
import {PopularTagType} from '../../../types/popularTagType'

@Injectable()
export class PopularTagService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'

    return this.http
      .get<GetPopularTagsResponseInterface>(url)
      .pipe(map((response) => response.tags))
  }
}
