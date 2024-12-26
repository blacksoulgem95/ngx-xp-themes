
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-floppy-disk',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-floppy-disk.component.html',
  styleUrl: './xp-icon-floppy-disk.component.css'
})
export class XpIconFloppyDiskComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
