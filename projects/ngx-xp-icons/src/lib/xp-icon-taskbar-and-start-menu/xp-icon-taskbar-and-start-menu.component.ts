
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-taskbar-and-start-menu',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-taskbar-and-start-menu.component.html',
  styleUrl: './xp-icon-taskbar-and-start-menu.component.css'
})
export class XpIconTaskbarAndStartMenuComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
