
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-legacy-floppy-disk',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-legacy-floppy-disk.component.html',
  styleUrl: './xp-icon-legacy-floppy-disk.component.css'
})
export class XpIconLegacyFloppyDiskComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
