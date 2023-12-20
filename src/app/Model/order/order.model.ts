import { Client } from "../client/client.model";
import { OrderEnum } from './order.enum';

export interface Order {
  id: number;
  typePresta: string;
  designation: string;
  client: Client;
  nbDays: number;
  unitPrice: number;
  totalExcludeTaxe: number;
  totalWithTaxe: number;
  state: OrderEnum;
}


