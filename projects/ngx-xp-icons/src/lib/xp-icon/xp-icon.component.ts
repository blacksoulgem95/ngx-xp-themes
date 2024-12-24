import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'ngx-xp-icon',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon.component.html',
  styleUrl: './xp-icon.component.css'
})
export class XpIconComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''
  @Input() icon: XPIcon = 'explorer'
}
