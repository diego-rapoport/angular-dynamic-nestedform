import { Component, Optional, Self, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-text',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './simple-text.component.html',
  styleUrl: './simple-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleTextComponent),
      multi: true
    }
  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]

})
export class SimpleTextComponent implements ControlValueAccessor {
  controlName = 'simpleText'
  inputValue = ''

  _onChange = (_: string) => { }

  constructor(
    @Self() @Optional() public ngControl: NgControl,
  ) { }

  writeValue(value: any): void {
    this.inputValue = value
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  sendInput(ev: any) {
    this._onChange(ev.value)
  }

}
