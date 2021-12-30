import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ContentUneditable]'
})
export class ContentUneditableDirective {

  constructor(el: ElementRef) {
   // el.nativeElement.IonInput.disabled = 'true';
   // el.nativeElement.IonTextarea.disabled = 'true';
    el.nativeElement.IonCard.disabled = 'true';
   }

}
