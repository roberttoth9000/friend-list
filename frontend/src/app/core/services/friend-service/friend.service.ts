import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFriendViewModel } from '../../models/IFriendViewModel';
import { IFriendDataApi } from '../../models/IFriendDataApi';
import { INewFriendForm } from '../../models/INewFriendForm';
import { INewFriendDataApi } from '../../models/INewFriendDataApi';

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
              comment: friendData.comment,
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

  addNewFriend(newFriend: INewFriendDataApi): void {
    this.http
      .post(`${environment.baseUrl}/Friend`, newFriend, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe();
  }
}
