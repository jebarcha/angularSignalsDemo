import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    //this.counter.set(this.counter() + value);
    this.counter.update((current) => current + value);
  }
}
