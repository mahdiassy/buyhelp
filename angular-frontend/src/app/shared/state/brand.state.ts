import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { GetBrandBySlug, GetBrands } from "../action/brand.action";
import { Brand } from "../interface/brand.interface";
import { BrandService } from "../services/brand.service";

export class BrandStateModel {
  brand = {
    data: [] as Brand[],
    total: 0
  }
  selectedBrand: Brand | null;
}

@State<BrandStateModel>({
  name: "brand",
  defaults: {
    brand: {
      data: [],
      total: 0
    },
    selectedBrand: null
  },
})
@Injectable()
export class BrandState {
  
  constructor(private brandService: BrandService) {}

  @Selector()
  static brand(state: BrandStateModel) {
    return state.brand;
  }

  @Selector()
  static selectedBrand(state: BrandStateModel) {
    return state.selectedBrand;
  }

  @Action(GetBrands)
  getBrands(ctx: StateContext<BrandStateModel>, action: GetBrands) {
    return this.brandService.getBrands(action.payload).pipe(
      tap({
        next: result => { 
          ctx.patchState({
            brand: {
              data: result.data,
              total: result?.total ? result?.total : result.data?.length
            }
          });
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetBrandBySlug)
  getBrandBySlug(ctx: StateContext<BrandStateModel>, action: GetBrandBySlug) {
    return this.brandService.getBrandBySlug(action.slug).pipe(
      tap({
        next: result => { 
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            selectedBrand: result
          });
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }
}