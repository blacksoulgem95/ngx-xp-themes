
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-shortcut',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-shortcut.component.html',
  styleUrl: './xp-icon-internet-shortcut.component.css'
})
export class XpIconInternetShortcutComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
