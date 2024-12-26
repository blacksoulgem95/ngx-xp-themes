
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-whistler-recycle-bin-empty',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './whistler-icon-recycle-bin-empty.component.html',
  styleUrl: './whistler-icon-recycle-bin-empty.component.css'
})
export class WhistlerIconRecycleBinEmptyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
