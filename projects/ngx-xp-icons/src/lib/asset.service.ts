import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {IconNames, IconPack, iconPacks} from './asset.library';

export const ICON_BASE_PATH_FOR_ASSETS = new InjectionToken<string>('xpiBasePathForAssets')

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  constructor(@Optional() @Inject(ICON_BASE_PATH_FOR_ASSETS) private basePath: string) {
  }

  getAssetUrl(pack: IconPack, name: IconNames): string {
    const iconPack = iconPacks[pack]
    if (!iconPack.validator(name)) {
      throw new Error(`Icon ${name} not of pack ${pack}`)
    }
    const files: { [index: string]: any } = iconPack.files

    if (!files[name]) {
      throw new Error(`Icon ${name} of pack ${pack} - file not found`)
    }

    let path = files[name] as string

    if (this.basePath) path = this.basePath + path

    return path
  }
}
