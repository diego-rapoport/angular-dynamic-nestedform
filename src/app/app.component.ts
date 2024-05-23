import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { SimpleTextComponent } from './components/filter-inputs/simple-text/simple-text.component';
import { FilterComponents } from './components/types';
import { DropdownComponent } from './components/filter-inputs/dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilterComponent, SimpleTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'subforms';
  filters: FilterComponents[] = [
    {component: SimpleTextComponent, controlName: 'myText'},
    {component: DropdownComponent, controlName: 'option'}
  ];

}
