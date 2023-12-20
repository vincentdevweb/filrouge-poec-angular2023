import { OrderEnum } from './order.enum';
import { ClientPostDTO } from '../client/clientPostDTO.model';

export interface OrderDTO {
  id: number;
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  state: OrderEnum;
  client: ClientPostDTO;
}
