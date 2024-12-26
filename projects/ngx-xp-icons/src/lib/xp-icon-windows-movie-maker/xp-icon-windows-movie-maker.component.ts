
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-movie-maker',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-movie-maker.component.html',
  styleUrl: './xp-icon-windows-movie-maker.component.css'
})
export class XpIconWindowsMovieMakerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
