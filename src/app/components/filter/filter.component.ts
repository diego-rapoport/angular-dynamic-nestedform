import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

export type FilterComponents = ComponentRef<any> & {
  controlName: string
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnDestroy, AfterViewInit {
  @Input({ required: true }) filterComponents: Type<FilterComponents>[] = [] as Type<FilterComponents>[]
  @ViewChild('filtersField', { read: ViewContainerRef })
  filtersField!: ViewContainerRef;

  form: FormGroup = this.fb.group({})
  componentRefs: ComponentRef<FilterComponents>[] = []

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit(): void {
    this.filtersField.clear()
    for (const component of this.filterComponents) {
      const newComponent = this.filtersField.createComponent<any>(component)
      this.form.addControl(newComponent.instance['controlName'], this.fb.control(''))
      this.componentRefs.push(newComponent)
      this.cdr.detectChanges()
    }
  }

  ngOnDestroy(): void {
    this.componentRefs.map(component => component.destroy())
  }

  sendFilter() {
    console.log('CONTROL = ', this.form.value)
  }
}
