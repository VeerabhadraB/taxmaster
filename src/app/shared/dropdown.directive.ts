import { Directive, HostBinding, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.text-info') isOpen = false;
  @HostListener('click') myToggle(){
    this.isOpen =!this.isOpen;
  } 
}
