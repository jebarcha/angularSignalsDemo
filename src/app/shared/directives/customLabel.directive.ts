import {
  Directive,
  effect,
  ElementRef,
  Input,
  input,
  OnInit,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;

  //private _color: string = 'red';
  color = input<string>();

  private _errors?: ValidationErrors | null;
  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    //console.log(value);
    this.setErrorMessage();
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = 'No Errors';
      return;
    }

    const errors = Object.keys(this._errors);
    //console.log(errors);
    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Field is required';
      return;
    }
    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerHTML = `Min ${current}/${min} characters.`;
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'Should be email';
      return;
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    //console.log('Directive constructor');
    //console.log(el);
    this.htmlElement = el;

    effect(() => {
      this.color();
      //this._color = this.color()!;
      this.setStyle();
    });
    //this.htmlElement.nativeElement.innerHTML = 'Hello World from Directive';
  }
  ngOnInit(): void {
    //console.log('Directive - NgOnInit');
    //console.log(this.color());
    this.setStyle();
  }

  setStyle() {
    if (!this.htmlElement) return;

    //this.htmlElement!.nativeElement.style.color = this._color; //this.color();
    this.htmlElement!.nativeElement.style.color = this.color()!;
  }
}
