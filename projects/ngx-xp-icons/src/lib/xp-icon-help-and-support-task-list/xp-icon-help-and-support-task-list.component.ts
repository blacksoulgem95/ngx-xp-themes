
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support-task-list',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-help-and-support-task-list.component.html',
  styleUrl: './xp-icon-help-and-support-task-list.component.css'
})
export class XpIconHelpAndSupportTaskListComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
