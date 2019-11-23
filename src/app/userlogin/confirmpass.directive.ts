import { Directive, Input } from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
@Directive({
  selector: '[appConfirmpass]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmpassDirective,
    multi:true
  }]
})
export class ConfirmpassDirective implements Validator {
  @Input() appConfirmpass:string;
   validate(control:AbstractControl):{[key:string]:any} | null{
    const controlToCompare=control.parent.get(this.appConfirmpass);
    if(controlToCompare && controlToCompare.value!==control.value){
      return{'notEqual':true};
    }
    return null;
   }
  constructor() { }

}
