
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-applications-vlc',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './applications-icon-vlc.component.html',
  styleUrl: './applications-icon-vlc.component.css'
})
export class ApplicationsIconVlcComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
