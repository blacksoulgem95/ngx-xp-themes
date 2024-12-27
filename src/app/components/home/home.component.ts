import {Component} from '@angular/core';
import {IconNames, IconPack, iconPacks, XPIconComponent} from 'ngx-xp-icons'
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    XPIconComponent,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  iconPacks = iconPacks
  searchValue: string = '';

  get packs(): IconPack[] {
    return Object.keys(iconPacks) as IconPack[]
  }

  getNamesForPack(pack: IconPack): IconNames[] {
    return Object.keys(iconPacks[pack].files).filter(icon => this.searchValue ? icon.indexOf(this.searchValue) >= 0 : true) as IconNames[]
  }
}
