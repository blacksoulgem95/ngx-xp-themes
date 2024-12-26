
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-scheduled-tasks',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-scheduled-tasks.component.html',
  styleUrl: './xp-icon-scheduled-tasks.component.css'
})
export class XpIconScheduledTasksComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
