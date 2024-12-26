
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-setup-task',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-setup-task.component.html',
  styleUrl: './xp-icon-setup-task.component.css'
})
export class XpIconSetupTaskComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
