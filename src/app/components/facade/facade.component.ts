import { Component } from '@angular/core';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss']
})
export class FacadeComponent {
  opacityValue = 1;
  displayValue = 'flex';

  constructor() {
    this.hideFacade();
  }

  hideFacade() {
    const intervalDuration = 500;
    const steps = 100;
    const stepOpacityChange = 10 / steps;

    const interval = setInterval(() => {
      this.opacityValue -= stepOpacityChange;

      if (this.opacityValue <= 0.5) {
        this.displayValue = 'none';
        clearInterval(interval);
      }
    }, intervalDuration);
  }
}
