
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-legacy-floppy-disk',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-legacy-floppy-disk.component.html',
  styleUrl: './xp-icon-legacy-floppy-disk.component.css'
})
export class XpIconLegacyFloppyDiskComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
