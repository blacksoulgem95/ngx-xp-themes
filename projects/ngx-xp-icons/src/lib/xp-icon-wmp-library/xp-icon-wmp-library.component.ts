
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-library',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-library.component.html',
  styleUrl: './xp-icon-wmp-library.component.css'
})
export class XpIconWmpLibraryComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
