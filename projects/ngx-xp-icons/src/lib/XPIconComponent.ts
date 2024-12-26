import { NgClass } from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {AssetService} from './asset.service';
import {
  IconPack,
  IconPackApplications,
  IconPackLonghorn,
  IconPackWhistler,
  IconPackXp,
  IconPackXpSP2
} from './asset.library';
import {HttpClient} from '@angular/common/http';

/**
 * The icon component
 */
@Component({
  standalone: true,
  selector: 'xpi-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [NgClass],
  template: `<span
    [innerHTML]="svg"
    [style.height]="size"
    [style.width]="size">
  </span>`
})
export class IconComponent implements OnChanges {
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
  private svgContent?: string;

  protected get svg(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.svgContent || `<svg></svg>`);
  }

  updateSvg() {
    const svgUrl = this.assetService.getSvgAssetUrl(this.pack, this.name);
    this.httpClient.get(svgUrl, {
      responseType: "text"
    }).subscribe({
      next: svgContent => this.svgContent = svgContent,
      error: error => console.error("Cannot load SVG:", error)
    })
  }

  ngOnInit() {
    this.updateSvg()
  }

  ngOnChanges() {
    this.updateSvg()
  }

  constructor(private sanitizer: DomSanitizer, private assetService: AssetService, private httpClient: HttpClient) {}
}
