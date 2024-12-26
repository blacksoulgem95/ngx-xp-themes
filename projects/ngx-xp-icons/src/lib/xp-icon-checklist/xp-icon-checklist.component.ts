
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-checklist',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-checklist.component.html',
  styleUrl: './xp-icon-checklist.component.css'
})
export class XpIconChecklistComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
