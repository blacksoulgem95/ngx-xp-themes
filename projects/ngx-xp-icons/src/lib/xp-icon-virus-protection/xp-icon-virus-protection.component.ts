
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-virus-protection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-virus-protection.component.html',
  styleUrl: './xp-icon-virus-protection.component.css'
})
export class XpIconVirusProtectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
