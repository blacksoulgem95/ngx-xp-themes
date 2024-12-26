
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-recycle-bin-empty',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-recycle-bin-empty.component.html',
  styleUrl: './whistler-icon-recycle-bin-empty.component.css'
})
export class WhistlerIconRecycleBinEmptyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
