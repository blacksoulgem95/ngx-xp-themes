
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-new-scheduled-task',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-new-scheduled-task.component.html',
  styleUrl: './xp-icon-new-scheduled-task.component.css'
})
export class XpIconNewScheduledTaskComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
