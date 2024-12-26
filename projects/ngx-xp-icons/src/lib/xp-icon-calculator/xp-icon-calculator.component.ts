
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-calculator',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-calculator.component.html',
  styleUrl: './xp-icon-calculator.component.css'
})
export class XpIconCalculatorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
