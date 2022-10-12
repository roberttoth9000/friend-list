import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFriendViewModel } from '../../models/IFriendViewModel';

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
      .get<IFriendViewModel[]>(`${environment.baseUrl}/Friend`)
      .subscribe((friends: IFriendViewModel[]) => {
        this.friendsSubject.next(friends);
      });
  }
}
