
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-graph-view',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-graph-view.component.html',
  styleUrl: './xp-icon-graph-view.component.css'
})
export class XpIconGraphViewComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
