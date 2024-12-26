import {NgClass, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {AssetService} from './asset.service';
import {
  IconPack,
  IconPackApplications,
  IconPackLonghorn,
  IconPackWhistler,
  IconPackXp,
  IconPackXpSP2
} from './asset.library';

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
    [height]="size"
    [width]="size"/>`
})
export class IconComponent {
  /**
   * The size of the icon. Accepts valid CSS values
   */
  @Input() size = '100%';

  /**
   * The name of the icon pack
   */
  @Input() pack!: IconPack
  /**
   * The name of the icon to render
   */
  @Input() name!: IconPackXp | IconPackXpSP2 | IconPackLonghorn | IconPackWhistler | IconPackApplications;

  constructor(private assetService: AssetService) {
  }

  get src() {
    return this.assetService.getAssetUrl(this.pack, this.name)
  }
}