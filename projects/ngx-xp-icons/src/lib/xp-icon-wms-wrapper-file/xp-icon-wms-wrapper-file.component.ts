
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-wrapper-file',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-wrapper-file.component.html',
  styleUrl: './xp-icon-wms-wrapper-file.component.css'
})
export class XpIconWmsWrapperFileComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
