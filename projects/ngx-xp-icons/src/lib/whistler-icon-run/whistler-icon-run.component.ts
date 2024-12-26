
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-run',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-run.component.html',
  styleUrl: './whistler-icon-run.component.css'
})
export class WhistlerIconRunComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
