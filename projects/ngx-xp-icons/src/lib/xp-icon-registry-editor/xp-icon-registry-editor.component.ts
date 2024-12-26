
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-registry-editor',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-registry-editor.component.html',
  styleUrl: './xp-icon-registry-editor.component.css'
})
export class XpIconRegistryEditorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
