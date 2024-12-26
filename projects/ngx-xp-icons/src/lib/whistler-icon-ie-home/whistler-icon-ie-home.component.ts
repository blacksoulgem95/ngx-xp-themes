
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-ie-home',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-ie-home.component.html',
  styleUrl: './whistler-icon-ie-home.component.css'
})
export class WhistlerIconIeHomeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
