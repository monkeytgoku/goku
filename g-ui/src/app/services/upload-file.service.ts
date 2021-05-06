import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor() {}

  upload(data: FormData): Observable<string> {
    return of('');
  }
}
