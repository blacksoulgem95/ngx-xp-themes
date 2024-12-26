
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-default-programs',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-default-programs.component.html',
  styleUrl: './xp-icon-default-programs.component.css'
})
export class XpIconDefaultProgramsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
