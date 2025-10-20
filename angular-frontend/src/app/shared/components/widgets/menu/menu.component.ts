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

  // Translation mapping for common navigation items
  private navigationTranslations: { [key: string]: string } = {
    'Pages': 'pages',
    'Products': 'products', 
    'Seller': 'seller',
    'Services': 'services',
    'Support': 'support'
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
  getTranslationKey(title: string): string {
    return this.navigationTranslations[title] || title.toLowerCase();
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
