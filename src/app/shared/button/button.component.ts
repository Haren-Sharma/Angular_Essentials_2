import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[app-button]',//only matches a <button> tag with appButton
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
}
