
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-convert-film',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wme-convert-film.component.html',
  styleUrl: './xp-icon-wme-convert-film.component.css'
})
export class XpIconWmeConvertFilmComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
