export * from './lib/XPIconComponent'
export {ICON_BASE_PATH_FOR_ASSETS} from './lib/asset.service'
export {

  // validators
  isTypeIconPack,
  isTypeIconPackXp,
  isTypeIconPackXpSP2,
  isTypeIconPackWhistler,
  isTypeIconPackLonghorn,
  isTypeIconPackOffice2003,
  isTypeIconPackOffice2007,
  isTypeIconPackApplications,

  // full metadata
  iconPacks
} from './lib/asset.library'

export type {
  // types
  IconPack,
  IconPackXp,
  IconPackXpSP2,
  IconPackLonghorn,
  IconPackWhistler,
  IconPackOffice2003,
  IconPackOffice2007,
  IconPackApplications
} from './lib/asset.library'
