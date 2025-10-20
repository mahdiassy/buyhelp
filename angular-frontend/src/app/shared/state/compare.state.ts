import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Store, Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { Product } from "../interface/product.interface";
import { AddToCompare, DeleteCompare, GetCompare } from "../action/compare.action";
import { CompareService } from "../services/compare.service";
import { NotificationService } from "../services/notification.service";

export class CompareStateModel {
    items: Product[]
    total: number
    comparIds: number[]
}

@State<CompareStateModel>({
  name: "compare",
  defaults: {
    items: [],
    total: 0,
    comparIds: []
  }
})

@Injectable()
export class CompareState {

  constructor(private store: Store, public router: Router,
    private notificationService: NotificationService,
    private compareService: CompareService){}

  @Selector()
  static compareItems(state: CompareStateModel) {
    return state.items;
  }

  @Selector()
  static compareIds(state: CompareStateModel) {
    return state.comparIds;
  }

  @Selector()
  static compareTotal(state: CompareStateModel) {
    return state.total;
  }

  @Action(GetCompare)
  getCompareItems(ctx: StateContext<GetCompare>) {
    if(!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      return;
    }
    this.compareService.skeletonLoader = true;
    return this.compareService.getComparItems().pipe(
      tap({
        next: result => {
          let ids = result.data.map(product => product.id)
          ctx.patchState({
            items: result.data,
            total: result?.total ? result?.total : result.data?.length,
            comparIds: ids
          });
        },
        complete: () => {
          this.compareService.skeletonLoader = false;
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(AddToCompare)
  add(ctx: StateContext<CompareStateModel>, action: AddToCompare){
    if(!this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      localStorage.setItem('compare', action.payload['product_id'])
      this.router.navigate(['/auth/login']);
      return;
    }
    return this.compareService.addCompar(action.payload).pipe(
      tap({
        next: result => {
          const state = ctx.getState();
          let ids = [...state.comparIds, action.payload['product_id'] ]
          ctx.patchState({
            items: result.data,
            total: state?.total + 1,
            comparIds: ids
          });
        },
        complete: () => {
          if(!localStorage.getItem('compare')){
            this.notificationService.showSuccess('Product added Successfully.');
          } else {
            localStorage.setItem('compare', '')
          }
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(DeleteCompare)
  delete(ctx: StateContext<CompareStateModel>, { id }: DeleteCompare) {
    return this.compareService.deleteCompar(id).pipe(
      tap({
        next: () => {
          const state = ctx.getState();
          let item = state.items.filter(value => value.id !== id);
          let ids = state.comparIds?.filter(ids => ids !== id);
          ctx.patchState({
            ...state,
              items: item,
              total: state.total - 1,
              comparIds: ids
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }
}
