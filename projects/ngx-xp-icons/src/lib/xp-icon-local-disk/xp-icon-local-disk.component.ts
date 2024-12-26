
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-local-disk',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-local-disk.component.html',
  styleUrl: './xp-icon-local-disk.component.css'
})
export class XpIconLocalDiskComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
