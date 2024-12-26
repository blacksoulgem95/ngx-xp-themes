
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ir-file-transfer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ir-file-transfer.component.html',
  styleUrl: './xp-icon-ir-file-transfer.component.css'
})
export class XpIconIrFileTransferComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
