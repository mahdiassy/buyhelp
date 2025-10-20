import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Menu, MenuModel } from '../../../interface/menu.interface';
import { ProductState } from '../../../../shared/state/product.state';
import { Product } from '../../../../shared/interface/product.interface';
import { BlogState } from '../../../../shared/state/blog.state';
import { Blog, BlogModel } from '../../../../shared/interface/blog.interface';
import { MenuState } from '../../../state/menu.state';
import { GetMenuProducts } from '../../../action/product.action';
import { Router } from '@angular/router';
import { GetSelectedBlogs } from '../../../action/blog.action';
import { MenuService } from '../../../services/menu.service';
import { ThemeOptionState } from '../../../state/theme-option.state';
import { Option } from '../../../interface/theme-option.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Select(ProductState.dealProducts) product$: Observable<Product[]>;
  @Select(BlogState.blog) blog$: Observable<BlogModel>;
  @Select(MenuState.menu) menu$: Observable<MenuModel>;
  @Select(ProductState.menuProducts) menuProduct$: Observable<MenuModel>;

  @Select(ThemeOptionState.themeOptions) themeOption$: Observable<Option>;

  public menu: Menu[] = [];
  public products: any[];
  public blogs: Blog[];

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

  constructor(private store: Store, private router: Router, public menuService: MenuService){
    this.menu$.subscribe(menu => {
      // Set the menu data for the toggle method to work
      if (menu && menu.data) {
        this.menu = menu.data;
      }
      
      const productIds = Array.from(new Set(this.concatDynamicProductKeys(menu, 'product_ids')));
      if(productIds && productIds.length){
        this.store.dispatch(new GetMenuProducts({ids: productIds?.join()})).subscribe({
          next: (val) => {
            this.products = val.product.menuProducts.slice(0,2);
          }
        })
      }

      const blogIds = Array.from(new Set(this.concatDynamicProductKeys(menu, 'blog_ids')));
      if(blogIds && blogIds.length){
        this.store.dispatch(new GetSelectedBlogs({status: 1, ids: blogIds?.join()})).subscribe({
          next: (val) => {
            this.blogs = val.blog.selectedBlogs.slice(0,2);
          }
        })
      }
    })
  }

  redirect(path:string){
    this.router.navigateByUrl(path)
  }

  handleLinkClick(url: string) {
    if (url && url.includes('buyhelp.dnci.net')) {
      // This is a buyhelp link, convert it to local path
      const urlObj = new URL(url);
      const localPath = urlObj.pathname + urlObj.search + urlObj.hash;
      console.log('Converting buyhelp link to local path:', url, '->', localPath);
      this.redirect(localPath);
    } else if (url && (url.startsWith('http://') || url.startsWith('https://')) && !url.includes('localhost') && !url.includes('127.0.0.1')) {
      // External link - block for local development
      console.log('External link blocked for local development:', url);
      // Don't show alert, just block silently
    } else {
      // Internal link - navigate normally
      this.redirect(url);
    }
  }

  toggle(menu: Menu){
    if(!menu.active){
      this.menu.forEach(item => {
        if(this.menu.includes(item)){
          item.active = false;
        }
      })
    }
    menu.active = !menu.active;
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

  concatDynamicProductKeys(obj: any, keyName: string) {
    const result: number[] = [];
    function traverse(obj: any) {
      for (const key in obj) {
        if (key === keyName && Array.isArray(obj[key])) {
          result.push(...obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          traverse(obj[key]);
        }else {
          if(key === keyName && obj.product_ids){
            result.push(obj.product_ids)
          };
        }
      }
    }
    traverse(obj);
    return result;
  }
   
}
