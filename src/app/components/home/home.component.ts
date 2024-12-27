import {Component} from '@angular/core';
import {IconComponent, IconPack, iconPacks, IconPackXp} from 'ngx-xp-icons'
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    IconComponent,
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

  getNamesForPack(pack: IconPack): IconPackXp[] {
    return Object.keys(iconPacks[pack].files).filter(icon => this.searchValue ? icon.indexOf(this.searchValue) >= 0 : true) as IconPackXp[]
  }
}
