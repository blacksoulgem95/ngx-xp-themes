
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-registry-document',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-registry-document.component.html',
  styleUrl: './xp-icon-registry-document.component.css'
})
export class XpIconRegistryDocumentComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
