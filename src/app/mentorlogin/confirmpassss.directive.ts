import { Directive, Input } from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
@Directive({
  selector: '[appConfirmpassss]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmpassssDirective,
    multi:true
  }]
})
export class ConfirmpassssDirective implements Validator {
  @Input() appConfirmpassss:string;
   validate(control:AbstractControl):{[key:string]:any} | null{
    const controlToCompare=control.parent.get(this.appConfirmpassss);
    if(controlToCompare && controlToCompare.value!==control.value){
      return{'notEqual':true};
    }
    return null;
   }
  constructor() { }

}
