import { IFood } from './IFood';

export interface INewFriendDataApi {
  name: string;
  email: string;
  comment: string;
  favFood: IFood;
  relationshipStatus: number;
}
