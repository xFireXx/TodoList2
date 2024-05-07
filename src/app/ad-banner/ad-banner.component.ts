import { Component, Input, OnInit } from '@angular/core';
import { AdBannerService } from './ad-banner.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {
  @Input() backgroundColor: string = 'rgba(55, 48, 163, 1)';
  
  adImage: string = '';
  adSize: string = 'medium';
  maxSize: number = 1200;
  showSettings: boolean = false;

  constructor(private adBannerService: AdBannerService) {}

  ngOnInit() {
    this.adBannerService.adImage$.subscribe(image => this.adImage = image);
    this.adBannerService.adSize$.subscribe(size => this.adSize = size.toString());
  }

  saveAdChanges() {
    const adSizeNumber = this.mapSizeToNumber(this.adSize);
    this.adBannerService.setAdSize(adSizeNumber);
  }
  
  setAdImage(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.adBannerService.setAdImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  
  mapSizeToNumber(size: string): number {
    switch (size) {
      case 'small':
        return 200;
      case 'medium':
        return 300;
      case 'large':
        return 370;
      default:
        return 300;
    }
  }
  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
