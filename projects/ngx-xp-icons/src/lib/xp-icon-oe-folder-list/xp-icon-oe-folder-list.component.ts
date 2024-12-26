
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-folder-list',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-folder-list.component.html',
  styleUrl: './xp-icon-oe-folder-list.component.css'
})
export class XpIconOeFolderListComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
