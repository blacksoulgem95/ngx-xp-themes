
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-write-files-to-disc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-write-files-to-disc.component.html',
  styleUrl: './xp-icon-write-files-to-disc.component.css'
})
export class XpIconWriteFilesToDiscComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
