import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownOptionsService {

  getOptions(): Observable<string[]> {
    return of(['First Option', 'Second Option', 'Third Option'])
  }
}
