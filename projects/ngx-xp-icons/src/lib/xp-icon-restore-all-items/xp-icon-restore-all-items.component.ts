
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-restore-all-items',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-restore-all-items.component.html',
  styleUrl: './xp-icon-restore-all-items.component.css'
})
export class XpIconRestoreAllItemsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
