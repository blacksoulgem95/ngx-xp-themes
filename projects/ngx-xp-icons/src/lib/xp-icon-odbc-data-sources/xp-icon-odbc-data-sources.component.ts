
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-odbc-data-sources',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-odbc-data-sources.component.html',
  styleUrl: './xp-icon-odbc-data-sources.component.css'
})
export class XpIconOdbcDataSourcesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
