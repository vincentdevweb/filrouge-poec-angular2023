import { Injectable } from '@angular/core';
import { Order} from '../Model/order/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderPostDTO } from '../Model/order/orderPostDTO.model';
import { ClientEnum } from '../Model/client/client.enum';
import { OrderEnum } from '../Model/order/order.enum';
import { OrderDTO } from '../Model/order/orderDTO.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // order: Order[] = [{
  //   id: 1,
  //   typePresta: 'Type 1',
  //   designation: 'Designation 1',
  //   client: {
  //     id: 1,
  //     companyName: 'Company 1',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'john.doe@example.com',
  //     phone: '123-456-7890',
  //     address: '123 Main St',
  //     zipCode: '12345',
  //     city: 'Cityville',
  //     country: 'Countryland',
  //     state: ClientEnum.ACTIVE,
  //     orders: []
  //   },
  //   nbDays: 5,
  //   unitPrice: 100,
  //   totalExcludeTaxe: 500,
  //   totalWithTaxe: 550,
  //   state: OrderEnum.PENDING,
  // }];

  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(this.apiUrl);
  }

  getOrderById(id: number): Observable<OrderDTO> {
    return this.http.get<OrderDTO>(`${this.apiUrl}/${id}`);
  }

  createOrder(orderPostDTO: OrderPostDTO): Observable<string> {
    return this.http.post<string>(this.apiUrl, orderPostDTO);
  }

  updateOrder(id: number, orderPostDTO: OrderPostDTO): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, orderPostDTO);
  }

  patchOrder(id: number, orderPostDTO: OrderPostDTO): Observable<string> {
    return this.http.patch<string>(`${this.apiUrl}/${id}`, orderPostDTO);
  }

  deleteOrder(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

}
