
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-login-question',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-login-question.component.html',
  styleUrl: './xp-icon-login-question.component.css'
})
export class XpIconLoginQuestionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
