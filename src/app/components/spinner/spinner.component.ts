import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="loader-container" *ngIf="isLoading$ | async">
    <div class="lds-ring"></div>
  </div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerSvc.isLoading$;

  constructor(private spinnerSvc: SpinnerService) { }

  ngOnInit(): void {
  }

}
