
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-missing-disc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-missing-disc.component.html',
  styleUrl: './xp-icon-wmp-missing-disc.component.css'
})
export class XpIconWmpMissingDiscComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
