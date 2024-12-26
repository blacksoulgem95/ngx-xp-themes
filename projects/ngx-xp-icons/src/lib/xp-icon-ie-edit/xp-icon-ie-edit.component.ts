
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-edit',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-edit.component.html',
  styleUrl: './xp-icon-ie-edit.component.css'
})
export class XpIconIeEditComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
