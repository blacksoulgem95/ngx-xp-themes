
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-personal-bar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-personal-bar.component.html',
  styleUrl: './whistler-icon-ie-personal-bar.component.css'
})
export class WhistlerIconIePersonalBarComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
