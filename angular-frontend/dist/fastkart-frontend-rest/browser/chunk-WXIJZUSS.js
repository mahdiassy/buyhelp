import {
  Action,
  AsyncPipe,
  BreadcrumbComponent,
  ButtonComponent,
  HttpClient,
  Location,
  NgIf,
  Select,
  Selector,
  State,
  ThemeOptionState,
  __decorate,
  environment,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WW7SXIET.js";

// src/app/components/page/error404/error404.component.ts
function Error404Component_div_7_app_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 11);
    \u0275\u0275listener("click", function Error404Component_div_7_app_button_5_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn btn-md text-white theme-bg-color mt-4 mx-auto");
    \u0275\u0275property("id", "back_button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = \u0275\u0275pipeBind1(2, 5, ctx_r1.themeOption$)) == null ? null : tmp_5_0.error_page == null ? null : tmp_5_0.error_page.back_button_text, " ");
  }
}
function Error404Component_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 8)(2, "h3", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Error404Component_div_7_app_button_5_Template, 3, 7, "app-button", 10);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.themeOption$)) == null ? null : tmp_1_0.error_page == null ? null : tmp_1_0.error_page.error_page_content, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(6, 4, ctx_r1.themeOption$)) == null ? null : tmp_2_0.error_page == null ? null : tmp_2_0.error_page.back_button_enable);
  }
}
var _Error404Component = class _Error404Component {
  constructor(location) {
    this.location = location;
    this.breadcrumb = {
      title: "404",
      items: [{ label: "404", active: true }]
    };
  }
  back() {
    this.location.back();
  }
};
_Error404Component.\u0275fac = function Error404Component_Factory(t) {
  return new (t || _Error404Component)(\u0275\u0275directiveInject(Location));
};
_Error404Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404Component, selectors: [["app-error404"]], decls: 9, vars: 4, consts: [[3, "breadcrumb"], [1, "section-404", "section-lg-space"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "image-404"], ["src", "assets/images/inner-page/404.png", "alt", "error page", 1, "img-fluid"], ["class", "col-12", 4, "ngIf"], [1, "contain-404"], [1, "text-content"], [3, "class", "id", "spinner", "click", 4, "ngIf"], [3, "click", "id", "spinner"]], template: function Error404Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, Error404Component_div_7_Template, 7, 6, "div", 7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(8, 2, ctx.themeOption$)) == null ? null : tmp_1_0.error_page == null ? null : tmp_1_0.error_page.error_page_content);
  }
}, dependencies: [NgIf, BreadcrumbComponent, ButtonComponent, AsyncPipe] });
var Error404Component = _Error404Component;
__decorate([
  Select(ThemeOptionState.themeOptions)
], Error404Component.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404Component, { className: "Error404Component", filePath: "src\\app\\components\\page\\error404\\error404.component.ts", lineNumber: 14 });
})();

// src/app/shared/action/coupon.action.ts
var _GetCoupons = class _GetCoupons {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetCoupons.type = "[Coupon] Get";
var GetCoupons = _GetCoupons;

// src/app/shared/services/coupon.service.ts
var _CouponService = class _CouponService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getCoupons(payload) {
    return this.http.get(`${environment.URL}/coupon`, { params: payload });
  }
};
_CouponService.\u0275fac = function CouponService_Factory(t) {
  return new (t || _CouponService)(\u0275\u0275inject(HttpClient));
};
_CouponService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CouponService, factory: _CouponService.\u0275fac, providedIn: "root" });
var CouponService = _CouponService;

// src/app/shared/state/coupon.state.ts
var _a;
var CouponState = (_a = class {
  constructor(couponService) {
    this.couponService = couponService;
  }
  static coupon(state) {
    return state.coupon;
  }
  getCoupons(ctx, action) {
    this.couponService.skeletonLoader = true;
    return this.couponService.getCoupons(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          coupon: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.couponService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a.\u0275fac = function CouponState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(CouponService));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetCoupons)
], CouponState.prototype, "getCoupons", null);
__decorate([
  Selector()
], CouponState, "coupon", null);
CouponState = __decorate([
  State({
    name: "coupon",
    defaults: {
      coupon: {
        data: [],
        total: 0
      }
    }
  })
], CouponState);

export {
  Error404Component,
  GetCoupons,
  CouponService,
  CouponState
};
//# sourceMappingURL=chunk-WXIJZUSS.js.map
