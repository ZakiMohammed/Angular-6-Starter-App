import { FormGroup, FormControl } from "@angular/forms";

export class Helper{
    static validateForm(formGroup: FormGroup){
      Object.keys(formGroup.controls).forEach(controlName => {
        const control = formGroup.get(controlName);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateForm(control);
        }
      });
    }
}