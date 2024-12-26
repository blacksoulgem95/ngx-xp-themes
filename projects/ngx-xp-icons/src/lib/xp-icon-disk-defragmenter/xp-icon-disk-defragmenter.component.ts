
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-disk-defragmenter',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-disk-defragmenter.component.html',
  styleUrl: './xp-icon-disk-defragmenter.component.css'
})
export class XpIconDiskDefragmenterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
