
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-folder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-folder.component.html',
  styleUrl: './xp-icon-network-folder.component.css'
})
export class XpIconNetworkFolderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
