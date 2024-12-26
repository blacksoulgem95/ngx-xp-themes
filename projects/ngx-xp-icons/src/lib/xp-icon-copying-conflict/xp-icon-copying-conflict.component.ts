
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-copying-conflict',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-copying-conflict.component.html',
  styleUrl: './xp-icon-copying-conflict.component.css'
})
export class XpIconCopyingConflictComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
