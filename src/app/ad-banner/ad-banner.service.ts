import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdSettings } from './ad-banner';

@Injectable({
  providedIn: 'root'
})
export class AdBannerService {
  private adImage: string = 'assets/ad2.png';
  private adSize: BehaviorSubject<number> = new BehaviorSubject<number>(300);
  private adSettings: BehaviorSubject<AdSettings> = new BehaviorSubject<AdSettings>({ adImage: this.adImage, adSize: 'medium' });

  public adImage$ = new BehaviorSubject<string>(this.adImage);
  public adSize$ = this.adSize.asObservable();
  public adSettings$ = this.adSettings.asObservable();

  constructor() {}

  setAdImage(image: string) {
    this.adImage = image;
    this.adImage$.next(this.adImage);
  }

  setAdSize(size: number) {
    this.adSize.next(size);
  }

  setAdSettings(settings: AdSettings) {
    this.adSettings.next(settings);
  }
}