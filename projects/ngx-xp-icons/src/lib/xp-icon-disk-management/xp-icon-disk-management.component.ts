
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-disk-management',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-disk-management.component.html',
  styleUrl: './xp-icon-disk-management.component.css'
})
export class XpIconDiskManagementComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
