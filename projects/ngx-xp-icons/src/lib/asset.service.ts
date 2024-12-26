import {Injectable} from '@angular/core';
import {
  IconPack,
  IconPackApplications,
  IconPackLonghorn, iconPacks,
  IconPackWhistler,
  IconPackXp,
  IconPackXpSP2
} from './asset.library';

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  constructor() {
  }

  getSvgAssetUrl(pack: IconPack, name: IconPackXp | IconPackXpSP2 | IconPackLonghorn | IconPackWhistler | IconPackApplications): string {
    const iconPack = iconPacks[pack]
    if (!iconPack.validator(name)) {
      throw new Error(`Icon ${name} not of pack ${pack}`)
    }
    const files: { [index: string]: any } = iconPack.files

    if (!files[name]) {
      throw new Error(`Icon ${name} of pack ${pack} - file not found`)
    }

    return files[name] as string
  }
}
