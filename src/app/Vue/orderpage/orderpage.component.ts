import { empty } from 'rxjs';
import { OrderDTO } from './../../Model/order/orderDTO.model';
import { Component } from '@angular/core';
import { OrderComponent } from '../../Component/order/order.component';
import { OrderService } from '../../Service/order.service';
import { CommonModule } from '@angular/common';
import { OrderPostDTO } from '../../Model/order/orderPostDTO.model';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderEnum } from '../../Model/order/order.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderpage',
  standalone: true,
  imports: [OrderComponent, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './orderpage.component.html',
  styleUrl: './orderpage.component.css'
})
export class OrderpageComponent {
  orders!: OrderDTO[];
  newOrder: OrderPostDTO = { typePresta: '', designation: '', nbDays: 0, unitPrice: 0, state: OrderEnum.OPTION, client: { id: 0 } };

  orderPatch: any = {};
  // constructor(private dataOrderService: OrderService) {
  //   this.orders = this.dataOrderService.order;
  // }
  // Méthode pour commencer l'édition d'un champ

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  filterOrdersByState(state: string) {
    this.orderService.getAllOrders().subscribe((data) => {
      this.orders = data.filter(order => order.state === state);
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadOrder(+id);
    } else {
      this.loadOrders();
    }
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  loadOrder(id: number) {
    this.orderService.getOrderById(id).subscribe((data) => {
      this.orders = [];
      this.orders.push(data);
    });
  }

  createOrder() {
    console.log(this.newOrder);
    this.orderService.createOrder(this.newOrder).subscribe(
      () => {
        this.loadOrders();
      }
    );
  }


  patchOrder(id: number) {
    this.orderService.patchOrder(id, this.orderPatch).subscribe(
      () => {
        console.log('Order updated successfully:');
        this.loadOrders();
      }
    );
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(
      () => {
        console.log('Order deleted successfully:');
        this.loadOrders();
      }
    );
  }
}
