
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-archive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-archive.component.html',
  styleUrl: './xp-icon-fax-archive.component.css'
})
export class XpIconFaxArchiveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
