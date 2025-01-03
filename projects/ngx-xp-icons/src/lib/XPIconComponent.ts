import {NgClass, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {AssetService} from './asset.service';
import {IconNames, IconPack} from './asset.library';


/**
 * The icon component
 */
@Component({
  standalone: true,
  selector: 'xpi-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [NgClass, NgOptimizedImage],
  template: `<img
    [alt]="pack + '_' + name"
    [ngSrc]="src"
    [ngClass]="ngClass"
    style="display: inline-block"
    [height]="size"
    [width]="size"/>`
})
export class XPIconComponent {
  /**
   * The size of the icon. Accepts valid CSS values
   */
  @Input() size = '100%';

  @Input() ngClass: any

  /**
   * The name of the icon pack
   */
  @Input() pack!: IconPack
  /**
   * The name of the icon to render
   */
  @Input() name!: IconNames;

  constructor(private assetService: AssetService) {
  }

  get src() {
    return this.assetService.getAssetUrl(this.pack, this.name)
  }
}
