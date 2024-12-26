
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-bluetooth-access-point',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-bluetooth-access-point.component.html',
  styleUrl: './xp-icon-bluetooth-access-point.component.css'
})
export class XpIconBluetoothAccessPointComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
