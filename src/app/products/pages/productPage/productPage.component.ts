import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CustomLabelDirective } from '../../../shared/directives/customLabel.directive';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomLabelDirective],
  templateUrl: './productPage.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {
  //constructor(private fb: FormBuilder) {}
  private fb = inject(FormBuilder);

  public color: string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
