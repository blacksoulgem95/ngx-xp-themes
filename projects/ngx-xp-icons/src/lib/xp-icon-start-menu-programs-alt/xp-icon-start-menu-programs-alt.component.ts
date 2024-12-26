
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-start-menu-programs-alt',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-start-menu-programs-alt.component.html',
  styleUrl: './xp-icon-start-menu-programs-alt.component.css'
})
export class XpIconStartMenuProgramsAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
