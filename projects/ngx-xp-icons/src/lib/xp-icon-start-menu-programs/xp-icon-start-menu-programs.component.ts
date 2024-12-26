
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-start-menu-programs',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-start-menu-programs.component.html',
  styleUrl: './xp-icon-start-menu-programs.component.css'
})
export class XpIconStartMenuProgramsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
