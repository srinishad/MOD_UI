import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[confirmPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi:true}]
})
export class PasswordValidatorDirective implements Validator {

  constructor() { }
  @Input() confirmPasswordValidator : string;
  public validate(control:AbstractControl): { [key: string] : any } | null {
    const controlToCompare = control.parent.get(this.confirmPasswordValidator);
    if(controlToCompare && controlToCompare.value !== control.value) {
        return{ 'notEqual' : true };
    }
    return null;
    
  }

}