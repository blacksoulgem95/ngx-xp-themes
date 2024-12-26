
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-explorer-delete',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-explorer-delete.component.html',
  styleUrl: './whistler-icon-explorer-delete.component.css'
})
export class WhistlerIconExplorerDeleteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
