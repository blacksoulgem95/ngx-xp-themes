
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-missing-file',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-missing-file.component.html',
  styleUrl: './xp-icon-wmp-missing-file.component.css'
})
export class XpIconWmpMissingFileComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
