import { Component, OnChanges, Input } from '@angular/core';
import { Alert } from '../../models/app.model';

@Component({
  selector: 'control-alert',
  template: `
    <div class="alert mt-3 {{alert.className}}" *ngIf="alert.visible" [innerHTML]="alert.message"></div>
  `,  
})
export class AlertComponent {

  @Input() alert: Alert;  

  constructor() { }
}
