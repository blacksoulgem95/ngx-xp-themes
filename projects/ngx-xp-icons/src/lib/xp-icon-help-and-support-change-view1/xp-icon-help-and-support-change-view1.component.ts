
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support-change-view1',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-help-and-support-change-view1.component.html',
  styleUrl: './xp-icon-help-and-support-change-view1.component.css'
})
export class XpIconHelpAndSupportChangeView1Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
