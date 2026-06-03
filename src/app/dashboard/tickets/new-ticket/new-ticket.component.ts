import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  //we can use View child to get access to a element of the component template
  //in the argument we need to pass the template variable name string
  //then angular will search for that variable in the template and assign it's value to the viewchild variable
  //in the argument we can also pass a Component or Directive class to query by type

  add=output<{title:string,text:string}>()

  onSubmit(title:string,request:string){
    this.add.emit({title,text:request});
    this.form?.nativeElement.reset();

    //WHy nativeElement ?
    //Because ElementRef puts a wrapper on the returned value 
    //so to access the underline element we used nativeElement property
  }
}
