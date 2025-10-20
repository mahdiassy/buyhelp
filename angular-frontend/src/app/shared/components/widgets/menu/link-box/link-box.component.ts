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

  // Translation mapping for navigation items
  // Maps backend menu titles to translation keys
  private navigationTranslations: { [key: string]: string } = {
    // Main navigation
    'Home': 'home',
    'Shop': 'shop',
    'Products': 'products',
    'Product': 'product',
    'Pages': 'pages',
    'Blog': 'blog',
    'Blogs': 'blog',
    'Contact': 'contact',
    'Seller': 'seller',
    'Services': 'services',
    'Support': 'support',
    
    // Common page titles
    'Home Page': 'home',
    'About Us': 'about_us',
    'About': 'about_us',
    'FAQ': 'faq',
    'FAQs': 'faq',
    'Contact Us': 'contact',
    'Privacy Policy': 'privacy',
    'Privacy': 'privacy',
    'Terms & Conditions': 'terms',
    'Terms': 'terms',
    
    // Shopping pages
    'Collections': 'collections',
    'Collection': 'collections',
    'Cart': 'cart',
    'Wishlist': 'wishlist',
    'Compare': 'compare',
    'Checkout': 'checkout',
    'My Account': 'my_account',
    'Account': 'my_account',
    
    // Additional pages
    'Categories': 'categories',
    'Category': 'category',
    'Brands': 'brands',
    'Brand': 'brands',
    'Search': 'search',
    'Orders': 'orders',
    'Order': 'orders',
    
    // Seller section
    'Seller Stores': 'seller_stores',
    'Seller Store': 'seller_stores',
    'Seller Stores (Basic)': 'seller_stores_basic',
    'Seller Stores (Classic)': 'seller_stores_classic',
    'Store Details': 'store_details',
    'Store Details (Basic)': 'store_details_basic',
    'Store Details (Classic)': 'store_details_classic',
    'Become Seller': 'become_seller',
    'Become a Seller': 'become_seller',
    
    // Product section variations
    'All Products': 'all_products',
    'All Items': 'all_items',
    'All_items': 'all_items',
    'Product List': 'product_list',
    'Product Details': 'product_details',
    'New Products': 'new_products',
    'Featured Products': 'featured_products',
    'Best Sellers': 'best_sellers',
    'On Sale': 'on_sale',
    'Special Offers': 'special_offers'
  };

  constructor( private router: Router){
  }

  // Get translation key for menu title
  // This method maps backend menu titles to translation keys
  getTranslationKey(title: string): string {
    if (!title) return '';
    
    // First check if there's an exact match in our mapping
    if (this.navigationTranslations[title]) {
      return this.navigationTranslations[title];
    }
    
    // Try case-insensitive match
    const titleLower = title.toLowerCase();
    const matchingKey = Object.keys(this.navigationTranslations).find(
      key => key.toLowerCase() === titleLower
    );
    
    if (matchingKey) {
      return this.navigationTranslations[matchingKey];
    }
    
    // Fallback: convert to snake_case and lowercase
    // "Home Page" -> "home_page"
    // "About Us" -> "about_us"
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
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
