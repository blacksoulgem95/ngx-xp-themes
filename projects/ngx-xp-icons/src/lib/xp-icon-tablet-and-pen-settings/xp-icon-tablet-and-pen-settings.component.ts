
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-tablet-and-pen-settings',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-tablet-and-pen-settings.component.html',
  styleUrl: './xp-icon-tablet-and-pen-settings.component.css'
})
export class XpIconTabletAndPenSettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
