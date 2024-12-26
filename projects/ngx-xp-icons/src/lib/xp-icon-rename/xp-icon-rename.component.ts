
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-rename',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-rename.component.html',
  styleUrl: './xp-icon-rename.component.css'
})
export class XpIconRenameComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
