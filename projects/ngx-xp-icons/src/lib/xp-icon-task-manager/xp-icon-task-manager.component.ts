
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-task-manager',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-task-manager.component.html',
  styleUrl: './xp-icon-task-manager.component.css'
})
export class XpIconTaskManagerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
