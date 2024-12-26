
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-local-security-policy',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-local-security-policy.component.html',
  styleUrl: './xp-icon-local-security-policy.component.css'
})
export class XpIconLocalSecurityPolicyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
