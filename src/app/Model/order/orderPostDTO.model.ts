import { Client } from '../client/client.model';
import { OrderEnum } from './order.enum';

export interface OrderPostDTO {
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  state: OrderEnum;
  client: Client;
}
