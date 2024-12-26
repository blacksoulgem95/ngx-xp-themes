
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-whistler-recycle-bin-full',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './whistler-icon-recycle-bin-full.component.html',
  styleUrl: './whistler-icon-recycle-bin-full.component.css'
})
export class WhistlerIconRecycleBinFullComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
