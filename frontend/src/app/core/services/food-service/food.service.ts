import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFood } from '../../models/IFood';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foodsSubject = new BehaviorSubject<IFood[]>([]);
  foodsObservable$: Observable<IFood[]> = this.foodsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllFood(): void {
    this.http
      .get<IFood[]>(`${environment.baseUrl}/Food`)
      .subscribe((foods: IFood[]) => {
        this.foodsSubject.next(foods);
      });
  }
}
