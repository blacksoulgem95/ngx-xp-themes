
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-offline-web-pages',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-offline-web-pages.component.html',
  styleUrl: './xp-icon-offline-web-pages.component.css'
})
export class XpIconOfflineWebPagesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
