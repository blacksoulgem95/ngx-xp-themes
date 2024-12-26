
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-default-programs-sp1-version',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-default-programs-sp1-version.component.html',
  styleUrl: './xp-icon-default-programs-sp1-version.component.css'
})
export class XpIconDefaultProgramsSp1VersionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
