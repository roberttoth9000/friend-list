import { IFood } from './IFood';

export interface IFriendViewModel {
  id: number;
  name: string;
  email: string;
  comment: string;
  favFood: IFood;
  relationshipStatus: number;
}
