
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-recycle-bin-empty',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-recycle-bin-empty.component.html',
  styleUrl: './xp-icon-recycle-bin-empty.component.css'
})
export class XpIconRecycleBinEmptyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
