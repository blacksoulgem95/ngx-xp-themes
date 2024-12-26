
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-catalog',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-catalog.component.html',
  styleUrl: './xp-icon-windows-catalog.component.css'
})
export class XpIconWindowsCatalogComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
