import { Order } from "../order/order.model";
import { ClientEnum } from './client.enum';

export interface Client {
  id: number;
  companyName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  state?: ClientEnum;
  orders?: Order[];
}


