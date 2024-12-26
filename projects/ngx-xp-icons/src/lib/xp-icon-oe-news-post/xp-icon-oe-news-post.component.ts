
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-news-post',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-news-post.component.html',
  styleUrl: './xp-icon-oe-news-post.component.css'
})
export class XpIconOeNewsPostComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
