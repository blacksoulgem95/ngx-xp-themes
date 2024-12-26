
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-convert-a-file',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wme-convert-a-file.component.html',
  styleUrl: './xp-icon-wme-convert-a-file.component.css'
})
export class XpIconWmeConvertAFileComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
