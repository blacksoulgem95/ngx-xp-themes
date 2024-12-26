
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-delete-confirmation',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-delete-confirmation.component.html',
  styleUrl: './xp-icon-delete-confirmation.component.css'
})
export class XpIconDeleteConfirmationComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
