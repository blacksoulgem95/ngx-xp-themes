
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-add-or-remove-windows-components',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-add-or-remove-windows-components.component.html',
  styleUrl: './xp-icon-add-or-remove-windows-components.component.css'
})
export class XpIconAddOrRemoveWindowsComponentsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
