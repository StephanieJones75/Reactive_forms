import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidation(control: AbstractControl){
    console.log(control.value);
    if (control.value.toUpperCase() == "NAME" || control.value.toUpperCase() == "TEST") {
        return {
            invalidName: true
        }
    }
    return null;
}