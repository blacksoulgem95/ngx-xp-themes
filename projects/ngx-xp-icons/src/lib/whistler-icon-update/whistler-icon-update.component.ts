
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-whistler-update',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './whistler-icon-update.component.html',
  styleUrl: './whistler-icon-update.component.css'
})
export class WhistlerIconUpdateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
