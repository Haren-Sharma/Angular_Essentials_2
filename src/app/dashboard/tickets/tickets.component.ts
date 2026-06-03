import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(obj: { title: string; text: string }) {
    const ticket: Ticket = {
      title: obj.title,
      request: obj.text,
      status: 'open',
      id: this.tickets.length > 0 ? this.tickets.at(-1)!.id + 1 : 1,
    };

    this.tickets.push(ticket);
  }

  completeRequest(id: Number) {
    this.tickets.find((t) => t.id === id)!.status = 'closed';
  }
}
