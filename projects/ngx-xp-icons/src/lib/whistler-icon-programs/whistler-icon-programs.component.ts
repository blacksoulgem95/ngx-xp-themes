
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-whistler-programs',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './whistler-icon-programs.component.html',
  styleUrl: './whistler-icon-programs.component.css'
})
export class WhistlerIconProgramsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
