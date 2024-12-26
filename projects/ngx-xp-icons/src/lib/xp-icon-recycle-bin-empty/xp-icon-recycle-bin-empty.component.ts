
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-recycle-bin-empty',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-recycle-bin-empty.component.html',
  styleUrl: './xp-icon-recycle-bin-empty.component.css'
})
export class XpIconRecycleBinEmptyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
