import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { I18nService, Language } from '../../../../services/i18n.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit, OnDestroy {

  @Input() style: string = 'basic';

  public active: boolean = false;
  public languages: Language[] = [];
  public selectedLanguage!: Language;
  
  private languageSubscription?: Subscription;

  constructor(public i18nService: I18nService) {}

  ngOnInit(): void {
    // Get available languages
    this.languages = this.i18nService.availableLanguages;
    
    // Set current language
    this.selectedLanguage = this.i18nService.getCurrentLanguage();
    
    // Subscribe to language changes (in case changed from elsewhere)
    this.languageSubscription = this.i18nService.currentLanguage$.subscribe(
      language => {
        this.selectedLanguage = language;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Select and apply language
   */
  selectLanguage(language: Language): void {
    this.active = false;
    this.i18nService.setLanguage(language.code);
  }

  /**
   * Toggle dropdown
   */
  openDropDown(): void {
    this.active = !this.active;
  }

  /**
   * Hide dropdown
   */
  hideDropdown(): void {
    this.active = false;
  }

  /**
   * Check if language is currently selected
   */
  isSelected(language: Language): boolean {
    return this.selectedLanguage?.code === language.code;
  }
}
