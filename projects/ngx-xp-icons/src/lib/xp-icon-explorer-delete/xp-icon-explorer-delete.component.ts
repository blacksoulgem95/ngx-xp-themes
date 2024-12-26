
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-explorer-delete',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-explorer-delete.component.html',
  styleUrl: './xp-icon-explorer-delete.component.css'
})
export class XpIconExplorerDeleteComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
