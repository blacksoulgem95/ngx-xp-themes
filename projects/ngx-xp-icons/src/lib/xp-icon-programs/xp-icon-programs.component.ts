
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-programs',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-programs.component.html',
  styleUrl: './xp-icon-programs.component.css'
})
export class XpIconProgramsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
