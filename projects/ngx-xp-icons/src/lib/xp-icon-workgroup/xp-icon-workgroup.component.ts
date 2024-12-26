
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-workgroup',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-workgroup.component.html',
  styleUrl: './xp-icon-workgroup.component.css'
})
export class XpIconWorkgroupComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
