
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-java-script',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-java-script.component.html',
  styleUrl: './xp-icon-java-script.component.css'
})
export class XpIconJavaScriptComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
