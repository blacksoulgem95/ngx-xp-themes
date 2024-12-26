
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-help-and-support-change-view2',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-help-and-support-change-view2.component.html',
  styleUrl: './xp-icon-help-and-support-change-view2.component.css'
})
export class XpIconHelpAndSupportChangeView2Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
