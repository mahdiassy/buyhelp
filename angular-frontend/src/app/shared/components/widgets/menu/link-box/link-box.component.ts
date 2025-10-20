import { Component, Input } from '@angular/core';
import { Menu } from '../../../../interface/menu.interface';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-link-box',
  templateUrl: './link-box.component.html',
  styleUrl: './link-box.component.scss'
})
export class LinkBoxComponent {

  @Input() menu: Menu

  // Translation mapping for common navigation items
  private navigationTranslations: { [key: string]: string } = {
    'Pages': 'pages',
    'Products': 'products', 
    'Seller': 'seller',
    'Services': 'services',
    'Support': 'support'
  };

  constructor( private router: Router){
  }

  // Get translation key for menu title
  getTranslationKey(title: string): string {
    return this.navigationTranslations[title] || title.toLowerCase();
  }

  redirect(path:string){
    this.router.navigateByUrl(path)
  }

  handleLinkClick(url: string) {
    // Check if it's an external link (contains http/https and not localhost)
    if (url && (url.startsWith('http://') || url.startsWith('https://')) && !url.includes('localhost') && !url.includes('127.0.0.1')) {
      // External link - block for local development
      console.log('External link blocked for local development:', url);
      // Don't show alert, just block silently
    } else {
      // Internal link - navigate normally
      this.redirect(url);
    }
  }
}
