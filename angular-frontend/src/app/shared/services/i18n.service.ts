import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly STORAGE_KEY = 'app_language';
  private currentLanguageSubject: BehaviorSubject<Language>;
  public currentLanguage$: Observable<Language>;

  public readonly availableLanguages: Language[] = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: 'us',
      dir: 'ltr'
    },
    {
      code: 'fr',
      name: 'French',
      nativeName: 'Français',
      flag: 'fr',
      dir: 'ltr'
    },
    {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      flag: 'sa',
      dir: 'rtl'
    }
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Set available languages
    this.translate.addLangs(this.availableLanguages.map(lang => lang.code));
    
    // Set default language
    this.translate.setDefaultLang('en');

    // Initialize current language
    const savedLanguage = this.getSavedLanguage();
    const initialLanguage = this.availableLanguages.find(lang => lang.code === savedLanguage) 
      || this.availableLanguages[0];
    
    this.currentLanguageSubject = new BehaviorSubject<Language>(initialLanguage);
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();

    // Apply saved language
    this.setLanguage(initialLanguage.code, false);
  }

  /**
   * Initialize language on app start
   */
  initLanguage(): void {
    const savedLanguage = this.getSavedLanguage();
    if (savedLanguage) {
      this.setLanguage(savedLanguage, false);
    } else {
      // Try to detect browser language
      const browserLang = this.translate.getBrowserLang();
      const supportedLang = this.availableLanguages.find(lang => lang.code === browserLang);
      if (supportedLang) {
        this.setLanguage(supportedLang.code, true);
      }
    }
  }

  /**
   * Change the application language
   * @param langCode Language code (en, fr, ar)
   * @param saveToStorage Whether to persist the selection
   */
  setLanguage(langCode: string, saveToStorage: boolean = true): void {
    const language = this.availableLanguages.find(lang => lang.code === langCode);
    
    if (!language) {
      console.error(`Language ${langCode} not found`);
      return;
    }

    // Change translation
    this.translate.use(langCode).subscribe(() => {
      // Update current language subject
      this.currentLanguageSubject.next(language);

      // Update HTML attributes
      this.updateHtmlAttributes(language);

      // Save to localStorage
      if (saveToStorage && isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.STORAGE_KEY, langCode);
      }

      // Emit custom event for other components
      if (isPlatformBrowser(this.platformId)) {
        window.dispatchEvent(new CustomEvent('languageChanged', { 
          detail: { language, code: langCode } 
        }));
      }
    });
  }

  /**
   * Get current active language
   */
  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  /**
   * Get current language code
   */
  getCurrentLanguageCode(): string {
    return this.currentLanguageSubject.value.code;
  }

  /**
   * Check if current language is RTL
   */
  isRTL(): boolean {
    return this.currentLanguageSubject.value.dir === 'rtl';
  }

  /**
   * Get saved language from localStorage
   */
  private getSavedLanguage(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.STORAGE_KEY);
    }
    return null;
  }

  /**
   * Update HTML lang and dir attributes
   */
  private updateHtmlAttributes(language: Language): void {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.documentElement;
      
      // Update lang attribute
      htmlElement.setAttribute('lang', language.code);
      
      // Update dir attribute
      htmlElement.setAttribute('dir', language.dir);
      
      // Add/remove RTL class for additional styling
      if (language.dir === 'rtl') {
        htmlElement.classList.add('rtl');
        htmlElement.classList.remove('ltr');
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        htmlElement.classList.add('ltr');
        htmlElement.classList.remove('rtl');
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }

      // Update meta tags for SEO
      this.updateMetaTags(language);
    }
  }

  /**
   * Update meta tags for better SEO
   */
  private updateMetaTags(language: Language): void {
    if (isPlatformBrowser(this.platformId)) {
      // Update or create og:locale meta tag
      let ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
      if (!ogLocaleMeta) {
        ogLocaleMeta = document.createElement('meta');
        ogLocaleMeta.setAttribute('property', 'og:locale');
        document.head.appendChild(ogLocaleMeta);
      }
      ogLocaleMeta.setAttribute('content', this.getLocaleCode(language.code));
    }
  }

  /**
   * Convert language code to locale code
   */
  private getLocaleCode(langCode: string): string {
    const localeMap: { [key: string]: string } = {
      'en': 'en_US',
      'fr': 'fr_FR',
      'ar': 'ar_SA'
    };
    return localeMap[langCode] || langCode;
  }

  /**
   * Get translation instantly (synchronous)
   */
  instant(key: string, params?: any): string {
    return this.translate.instant(key, params);
  }

  /**
   * Get translation as observable
   */
  get(key: string | string[], params?: any): Observable<string | any> {
    return this.translate.get(key, params);
  }

  /**
   * Subscribe to language changes
   */
  onLanguageChange(callback: (language: Language) => void): void {
    this.currentLanguage$.subscribe(callback);
  }
}
