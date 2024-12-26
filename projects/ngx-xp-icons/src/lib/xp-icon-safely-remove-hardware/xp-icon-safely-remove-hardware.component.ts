
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-safely-remove-hardware',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-safely-remove-hardware.component.html',
  styleUrl: './xp-icon-safely-remove-hardware.component.css'
})
export class XpIconSafelyRemoveHardwareComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
