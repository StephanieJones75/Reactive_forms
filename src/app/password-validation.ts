import { AbstractControl } from "@angular/forms";

export function PasswordValidation(control: AbstractControl){
    console.log(control.value);
    if (control.value.toUpperCase() == "PASSWORD") {
        return {
            weakPassword: true
        }
    }
    return null;
}
