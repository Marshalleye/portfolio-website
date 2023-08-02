import { Component, OnInit } from '@angular/core';
import { WaveComponent } from './canva.enum';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss']
})
export class CanvaComponent implements OnInit {
  ngOnInit(): void {
    this.initWave('wave-top');
    this.initWave('wave-bottom');
  }

  private initWave(waveCssClass: string): void {
    anime({
      targets: `.${waveCssClass} > path`,
      easing: 'linear',
      duration: 7500,
      loop: true,

      d: [
        { value: [WaveComponent.wave1, WaveComponent.wave2] },
        { value: WaveComponent.wave3 },
        { value: WaveComponent.wave4 },
        { value: WaveComponent.wave1 }
      ]
    });
  }
}
