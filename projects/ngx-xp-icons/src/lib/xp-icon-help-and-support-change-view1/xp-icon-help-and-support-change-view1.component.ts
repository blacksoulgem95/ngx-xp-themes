
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support-change-view1',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-help-and-support-change-view1.component.html',
  styleUrl: './xp-icon-help-and-support-change-view1.component.css'
})
export class XpIconHelpAndSupportChangeView1Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
