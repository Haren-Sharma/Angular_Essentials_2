import { Component, effect, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data=input.required<Ticket>(); 
  completeRequest=output<Number>();
  detailsVisible=signal(true)

  toggleDetails(){
    this.detailsVisible.update((wasVisible)=>!wasVisible);
  }

  onCompleteRequest(){
    this.completeRequest.emit(this.data().id);
  }
}
