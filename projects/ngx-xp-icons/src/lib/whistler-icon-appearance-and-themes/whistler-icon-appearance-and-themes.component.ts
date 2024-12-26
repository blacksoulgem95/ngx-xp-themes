
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-appearance-and-themes',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-appearance-and-themes.component.html',
  styleUrl: './whistler-icon-appearance-and-themes.component.css'
})
export class WhistlerIconAppearanceAndThemesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
