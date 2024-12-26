
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-packager',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-packager.component.html',
  styleUrl: './xp-icon-packager.component.css'
})
export class XpIconPackagerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
