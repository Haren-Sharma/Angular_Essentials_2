import { Component, ElementRef, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  // ViewEncapsulation.None does disable Angular's style scoping, making the component's CSS rules apply globally instead of being isolated to the component's view.
  // Emulated (default): Angular emulates scoping by adding unique attributes to elements, so styles only apply to this component.
  // ShadowDom: uses the native browser Shadow DOM API to fully isolate styles — they cannot leak in or out.
  host:{
    class:'control'
  }
})
export class ControlComponent {
  constructor(private e:ElementRef){}
  @HostListener('click') onClick(){
    console.log("CLICKED!!")
    console.log(this.e);
  }
  title=input.required<string>()
}
