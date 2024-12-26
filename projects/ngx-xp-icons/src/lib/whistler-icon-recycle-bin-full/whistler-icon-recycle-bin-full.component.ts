
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-recycle-bin-full',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-recycle-bin-full.component.html',
  styleUrl: './whistler-icon-recycle-bin-full.component.css'
})
export class WhistlerIconRecycleBinFullComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
