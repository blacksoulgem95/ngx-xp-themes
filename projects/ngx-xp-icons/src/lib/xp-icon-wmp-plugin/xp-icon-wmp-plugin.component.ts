
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-plugin',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-plugin.component.html',
  styleUrl: './xp-icon-wmp-plugin.component.css'
})
export class XpIconWmpPluginComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
