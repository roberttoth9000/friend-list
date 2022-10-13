import { IFood } from './IFood';

export interface IFriendDataApi {
  id: number;
  name: string;
  email: string;
  comment: string;
  favFood: IFood;
  relationshipStatus: number;
}
