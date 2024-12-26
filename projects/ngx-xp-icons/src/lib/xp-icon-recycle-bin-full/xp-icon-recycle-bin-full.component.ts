
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-recycle-bin-full',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-recycle-bin-full.component.html',
  styleUrl: './xp-icon-recycle-bin-full.component.css'
})
export class XpIconRecycleBinFullComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
