import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[email]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi:true}]
})
export class EmailValidatorDirective implements Validator{

  constructor() { }
  public validate(control :AbstractControl): { [key: string] : any} {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let valid = emailRegex.test(control.value);
    return control.value < 1 || valid ? null: {"email" : true};
}
}
