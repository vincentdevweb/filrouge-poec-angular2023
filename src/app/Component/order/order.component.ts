import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDTO } from '../../Model/order/orderDTO.model';
import { OrderEnum } from '../../Model/order/order.enum';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  @Input()
  orderDTO!: OrderDTO;

  @Input()
  orderEnum!: OrderEnum;

}
