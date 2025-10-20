import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { MenuService } from "../services/menu.service";
import { GetMenu } from "../action/menu.action";
import { tap } from "rxjs";
import { Menu } from "../interface/menu.interface";
import { ThemeOptionService } from "../services/theme-option.service";
 

export class MenuStateModel {
  menu = {
    data: [] as Menu[],
    total: 0
  }
}

@State<MenuStateModel>({
  name: "menu",
  defaults: {
    menu: {
      data: [],
      total: 0
    },
  },
})

@Injectable()
export class MenuState {

  constructor(private menuService: MenuService) {}

  @Selector()
  static menu(state: MenuStateModel) {
    return state.menu;
  }
 
  @Action(GetMenu)
  getMenu(ctx: StateContext<MenuStateModel>, action: GetMenu) {
    this.menuService.skeletonLoader = true;
    return this.menuService.getMenu(action.payload).pipe(
      tap({
        next: result => { 
          ctx.patchState({
            menu: {
              data: result?.data || [],
              total: result?.total || 0
            }
          });
        },
        error: err => { 
          console.warn('Menu API error:', err?.error?.message || 'Unknown error');
          // Try to load menu without status parameter
          this.menuService.getMenu({}).pipe(
            tap({
              next: fallbackResult => {
                ctx.patchState({
                  menu: {
                    data: fallbackResult?.data || [],
                    total: fallbackResult?.total || 0
                  }
                });
              },
              error: () => {
                // If still fails, set empty data
                ctx.patchState({
                  menu: {
                    data: [],
                    total: 0
                  }
                });
              }
            })
          ).subscribe();
        },
        complete: () => {
          this.menuService.skeletonLoader = false;
        }
      })
    );
  }

}