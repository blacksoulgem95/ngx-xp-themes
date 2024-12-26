
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-data-execution-prevention',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-data-execution-prevention.component.html',
  styleUrl: './xp-icon-data-execution-prevention.component.css'
})
export class XpIconDataExecutionPreventionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
