import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFriendViewModel } from '../../models/IFriendViewModel';
import { IFriendDataApi } from '../../models/IFriendDataApi';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private friendsSubject = new BehaviorSubject<IFriendViewModel[]>([]);
  friendsObservable$: Observable<IFriendViewModel[]> =
    this.friendsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllFriends(): void {
    this.http
      .get<IFriendDataApi[]>(`${environment.baseUrl}/Friend`)
      .pipe(
        map((data: IFriendDataApi[]) =>
          data.map<IFriendViewModel>((friendData: IFriendDataApi) => {
            return {
              id: friendData.id,
              name: friendData.name,
              email: friendData.email,
              comment: friendData.email,
              favFoodname: friendData.favFood.name,
              relationshipStatus: friendData.relationshipStatus,
            };
          })
        )
      )
      .subscribe((friends: IFriendViewModel[]) => {
        this.friendsSubject.next(friends);
      });
  }
}
