
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-copy-protected-music',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-wmp-copy-protected-music.component.html',
  styleUrl: './xp-icon-wmp-copy-protected-music.component.css'
})
export class XpIconWmpCopyProtectedMusicComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
