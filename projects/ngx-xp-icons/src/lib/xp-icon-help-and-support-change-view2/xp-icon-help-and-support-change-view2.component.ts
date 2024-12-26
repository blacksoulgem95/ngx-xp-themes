
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support-change-view2',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-help-and-support-change-view2.component.html',
  styleUrl: './xp-icon-help-and-support-change-view2.component.css'
})
export class XpIconHelpAndSupportChangeView2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
