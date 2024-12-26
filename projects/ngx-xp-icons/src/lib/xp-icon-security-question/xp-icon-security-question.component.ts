
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-security-question',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-security-question.component.html',
  styleUrl: './xp-icon-security-question.component.css'
})
export class XpIconSecurityQuestionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
