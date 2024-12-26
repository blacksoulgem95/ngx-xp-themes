
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-save',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-save.component.html',
  styleUrl: './xp-icon-save.component.css'
})
export class XpIconSaveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
