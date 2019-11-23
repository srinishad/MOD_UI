import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
  selector: '[appConfirmpasss]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmpasssDirective,
    multi:true
  }]
})
export class ConfirmpasssDirective implements Validator {
  @Input() appConfirmpasss:string;
   validate(control:AbstractControl):{[key:string]:any} | null{
    const controlToCompare=control.parent.get(this.appConfirmpasss);
    if(controlToCompare && controlToCompare.value!==control.value){
      return{'notEqual':true};
    }
    return null;
   }
  constructor() { }

}
