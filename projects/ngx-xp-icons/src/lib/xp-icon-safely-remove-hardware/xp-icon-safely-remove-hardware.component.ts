
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-safely-remove-hardware',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-safely-remove-hardware.component.html',
  styleUrl: './xp-icon-safely-remove-hardware.component.css'
})
export class XpIconSafelyRemoveHardwareComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
