import { Component, Input, OnInit, Optional, Self, forwardRef, inject } from '@angular/core';
import { DropdownOptionsService } from '../../../services/dropdown-options.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ControlContainer, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input({required: true})controlName: string = ''
  _onChange = (_: string) => { }

  dropDownService= inject(DropdownOptionsService)
  options$: Observable<string[]> = new Observable()

  constructor(
    @Self() @Optional() public ngControl: NgControl,
  ) { }

  ngOnInit(): void {
    this.options$ = this.dropDownService.getOptions()
  }

  writeValue(obj: any): void {
      throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
      throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
      throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
      throw new Error('Method not implemented.');
  }

}
