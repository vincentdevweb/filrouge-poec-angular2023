import { ClientEnum } from './client.enum';

export interface ClientPostDTO {
  cname: string;
  fname: string;
  lname: string;
  tel: string;
  add: string;
  zCode: string;
  city: string;
  country: string;
  email: string;
  state: ClientEnum;
}
