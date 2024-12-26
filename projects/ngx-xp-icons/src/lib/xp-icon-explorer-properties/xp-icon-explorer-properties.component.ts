
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-explorer-properties',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-explorer-properties.component.html',
  styleUrl: './xp-icon-explorer-properties.component.css'
})
export class XpIconExplorerPropertiesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
