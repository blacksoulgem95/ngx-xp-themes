
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-whistler-rename',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whistler-icon-rename.component.html',
  styleUrl: './whistler-icon-rename.component.css'
})
export class WhistlerIconRenameComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
