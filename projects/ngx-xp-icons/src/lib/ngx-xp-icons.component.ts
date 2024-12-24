import { Component } from '@angular/core';
import {XpIconComponent} from './xp-icon/xp-icon.component';
import {TwokIconComponent} from './twok-icon/twok-icon.component';

@Component({
  selector: 'lib-ngx-xp-icons',
  standalone: true,
  imports: [XpIconComponent, TwokIconComponent],
  template: `
    <p>
      ngx-xp-icons works!
    </p>
  `,
  styles: ``
})
export class NgxXpIconsComponent {

}
