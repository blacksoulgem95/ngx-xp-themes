
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-add-new-programs',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-add-new-programs.component.html',
  styleUrl: './xp-icon-add-new-programs.component.css'
})
export class XpIconAddNewProgramsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
