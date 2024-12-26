
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-change-or-remove-programs',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-change-or-remove-programs.component.html',
  styleUrl: './xp-icon-change-or-remove-programs.component.css'
})
export class XpIconChangeOrRemoveProgramsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
