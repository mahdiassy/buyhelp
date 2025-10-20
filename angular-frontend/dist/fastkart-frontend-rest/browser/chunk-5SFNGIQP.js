import {
  BlogModule,
  SkeletonBlogComponent
} from "./chunk-QJY27I25.js";
import "./chunk-WR2UTWN2.js";
import {
  ShopModule
} from "./chunk-NAO4B3EB.js";
import {
  GetStores,
  StoreState
} from "./chunk-QSXMB2OB.js";
import {
  BrandState,
  GetBrands
} from "./chunk-45MFMN27.js";
import "./chunk-7LRX5UZJ.js";
import "./chunk-KBJRTARI.js";
import {
  ActivatedRoute,
  AddToCompare,
  AddToWishlist,
  AsyncPipe,
  BlogService,
  BlogState,
  ButtonComponent,
  CarouselComponent,
  CarouselSlideDirective,
  CategoriesComponent,
  CommonModule,
  CurrencySymbolPipe,
  DatePipe,
  DefaultValueAccessor,
  DeleteWishlist,
  EventEmitter,
  FormControl,
  FormControlDirective,
  GetBlogs,
  GetCategoryProducts,
  GetHomePage,
  GetProductByIds,
  ImageLinkComponent,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgStyle,
  NgbRating,
  NgbRatingConfig,
  NoDataComponent,
  ProductBoxComponent,
  ProductService,
  ProductState,
  RouterLink,
  RouterModule,
  SearchComponent,
  Select,
  SharedModule,
  SkeletonProductBoxComponent,
  Store,
  Subscription,
  ThemeOptionService,
  ThemeOptionState,
  ThemeState,
  TitleComponent,
  TranslateModule,
  TranslatePipe,
  UpdateProductBox,
  Validators,
  __decorate,
  __spreadProps,
  __spreadValues,
  bannerSlider,
  categorySlider,
  categorySlider9,
  customOptionsItem3,
  customOptionsItem4,
  environment,
  forkJoin,
  productSlider,
  productSlider2,
  productSlider6Item,
  productSlider6ItemMargin,
  productSliderMargin,
  singleSlider,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WW7SXIET.js";

// src/app/components/themes/widgets/home-banner/home-banner.component.ts
function HomeBannerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "span", 9)(4, "span", 10)(5, "span", 11)(6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
  }
}
function HomeBannerComponent_div_0_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 8);
    \u0275\u0275element(3, "span", 9)(4, "span", 10)(5, "span", 11)(6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
  }
}
function HomeBannerComponent_div_0_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 8);
    \u0275\u0275element(3, "span", 9)(4, "span", 10)(5, "span", 11)(6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2)("bgImage", true);
  }
}
function HomeBannerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 3);
    \u0275\u0275template(2, HomeBannerComponent_div_0_div_3_div_2_Template, 8, 2, "div", 15)(3, HomeBannerComponent_div_0_div_3_div_3_Template, 8, 2, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1 == null ? null : ctx_r0.data.sub_banner_1.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2 == null ? null : ctx_r0.data.sub_banner_2.image_url);
  }
}
function HomeBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, HomeBannerComponent_div_0_div_2_Template, 8, 2, "div", 4)(3, HomeBannerComponent_div_0_div_3_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.main_banner == null ? null : ctx_r0.data.main_banner.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1 == null ? null : ctx_r0.data.sub_banner_1.image_url) && (ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2 == null ? null : ctx_r0.data.sub_banner_2.image_url));
  }
}
function HomeBannerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 18)(3, "div", 19)(4, "div", 8);
    \u0275\u0275element(5, "span", 9)(6, "span", 10)(7, "span", 11)(8, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275element(10, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23)(13, "div", 8);
    \u0275\u0275element(14, "span", 9)(15, "span", 10)(16, "span", 11)(17, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20);
    \u0275\u0275element(19, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 24)(21, "div", 19)(22, "div", 8);
    \u0275\u0275element(23, "span", 9)(24, "span", 10)(25, "span", 11)(26, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "app-image-link", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2)("bgImage", true);
  }
}
function HomeBannerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 25)(3, "div", 26)(4, "div", 8);
    \u0275\u0275element(5, "span", 9)(6, "span", 10)(7, "span", 11)(8, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-image-link", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 27)(11, "div", 28)(12, "div", 8);
    \u0275\u0275element(13, "span", 9)(14, "span", 10)(15, "span", 11)(16, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "app-image-link", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
  }
}
function HomeBannerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 29)(3, "div", 30)(4, "div", 8);
    \u0275\u0275element(5, "span", 9)(6, "span", 10)(7, "span", 11)(8, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-image-link", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 32)(12, "div", 20)(13, "div", 8);
    \u0275\u0275element(14, "span", 9)(15, "span", 10)(16, "span", 11)(17, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 33)(20, "div", 34)(21, "div", 35)(22, "div", 36)(23, "div", 8);
    \u0275\u0275element(24, "span", 9)(25, "span", 10)(26, "span", 11)(27, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "app-image-link", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 35)(30, "div", 36)(31, "div", 8);
    \u0275\u0275element(32, "span", 9)(33, "span", 10)(34, "span", 11)(35, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "app-image-link", 21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
    \u0275\u0275advance(10);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_2)("bgImage", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_3)("bgImage", true);
  }
}
function HomeBannerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "div");
    \u0275\u0275element(5, "app-image-link", 21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
  }
}
function HomeBannerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 41)(3, "div", 8);
    \u0275\u0275element(4, "span", 9)(5, "span", 10)(6, "span", 11)(7, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-image-link", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 42)(10, "div", 8);
    \u0275\u0275element(11, "span", 9)(12, "span", 10)(13, "span", 11)(14, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "app-image-link", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap("home-contain furniture-contain-2");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
    \u0275\u0275advance(7);
    \u0275\u0275classMap("home-contain h-100 home-furniture");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.sub_banner_1)("bgImage", true);
  }
}
function HomeBannerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 3)(2, "div", 43)(3, "div", 7)(4, "div", 2)(5, "div", 8);
    \u0275\u0275element(6, "span", 9)(7, "span", 10)(8, "span", 11)(9, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "app-image-link", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275classMap("home-contain rounded-0 p-0");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.main_banner)("bgImage", true);
  }
}
var _HomeBannerComponent = class _HomeBannerComponent {
  constructor() {
    this.theme = "paris";
  }
};
_HomeBannerComponent.\u0275fac = function HomeBannerComponent_Factory(t) {
  return new (t || _HomeBannerComponent)();
};
_HomeBannerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeBannerComponent, selectors: [["app-theme-home-banner"]], inputs: { theme: "theme", data: "data" }, decls: 7, vars: 7, consts: [["class", "container-fluid-lg", 4, "ngIf"], ["class", "container-fluid p-0 ratio_30", 4, "ngIf"], [1, "container-fluid-lg"], [1, "row", "g-4"], ["class", "col-xl-8 ratio_65", 4, "ngIf"], ["class", "col-xl-4 ratio_65", 4, "ngIf"], [1, "col-xl-8", "ratio_65"], [1, "home-contain", "h-100", "skeleton-banner-xl"], [1, "skeleton-text-wrap"], [1, "placeholder", "col-7"], [1, "placeholder", "col-5"], [1, "placeholder", "col-4"], [1, "placeholder", "col-6"], [1, "b-cl", 3, "image", "bgImage"], [1, "col-xl-4", "ratio_65"], ["class", "col-xl-12 col-md-6 skeleton-banner-sm", 4, "ngIf"], [1, "col-xl-12", "col-md-6", "skeleton-banner-sm"], [1, "home-contain"], [1, "col-xxl-3", "col-lg-4", "col-sm-6", "ratio_180", "d-sm-block", "d-none", "b-top"], [1, "home-contain", "rounded", "skeleton-banner-vertical"], [1, "h-100"], [3, "image", "bgImage"], [1, "col-xxl-6", "col-lg-8", "order-xxl-0", "ratio_87"], [1, "home-contain", "rounded", "skeleton-banner-xl"], [1, "col-xxl-3", "col-xl-4", "col-sm-6", "ratio_180", "custom-ratio", "d-xxl-block", "d-lg-none", "d-sm-block", "d-none", "b-top"], [1, "col-xl-9", "col-lg-8"], [1, "home-contain", "h-100", "skeleton-banner-xl", "ratio_52"], [1, "col-xl-3", "col-lg-4", "d-lg-inline-block", "d-none", "ratio_156"], [1, "home-contain", "h-100", "skeleton-banner-vertical"], [1, "col-xxl-6", "col-md-8"], [1, "home-contain", "ratio_65", "h-100", "skeleton-banner-xl"], [1, "col-xxl-3", "col-md-4", "ratio_medium", "d-md-block", "d-none"], [1, "home-contain", "home-small", "h-100", "skeleton-banner-vertical"], [1, "col-xxl-3", "ratio_65", "d-xxl-block", "d-none"], [1, "row", "g-3"], [1, "col-xxl-12", "col-sm-6"], [1, "home-contain", "skeleton-banner-sm"], [1, "container-fluid", "p-0", "ratio_30"], [1, "row"], [1, "col-12"], [1, "slider-animate", "skeleton-banner-xl"], [1, "col-xl-9", "col-lg-8", "ratio_50_1", "skeleton-banner-xl", "b-left"], [1, "col-xl-3", "col-lg-4", "d-lg-inline-block", "d-none", "skeleton-banner-vertical"], [1, "col-12", "slider-animate"]], template: function HomeBannerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeBannerComponent_div_0_Template, 4, 2, "div", 0)(1, HomeBannerComponent_div_1_Template, 28, 6, "div", 0)(2, HomeBannerComponent_div_2_Template, 18, 4, "div", 0)(3, HomeBannerComponent_div_3_Template, 37, 8, "div", 0)(4, HomeBannerComponent_div_4_Template, 6, 2, "div", 1)(5, HomeBannerComponent_div_5_Template, 16, 8, "div", 0)(6, HomeBannerComponent_div_6_Template, 11, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "paris");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "tokyo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "osaka");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "rome");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "madrid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "berlin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.theme && ctx.theme == "denver");
  }
}, dependencies: [NgIf, ImageLinkComponent] });
var HomeBannerComponent = _HomeBannerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeBannerComponent, { className: "HomeBannerComponent", filePath: "src\\app\\components\\themes\\widgets\\home-banner\\home-banner.component.ts", lineNumber: 8 });
})();

// src/app/components/themes/widgets/banner/banner.component.ts
function BannerComponent_div_0_ng_container_3_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9);
    \u0275\u0275element(2, "app-image-link", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain");
    \u0275\u0275property("image", banner_r1)("bgImage", false);
  }
}
function BannerComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BannerComponent_div_0_ng_container_3_ng_container_1_ng_template_1_Template, 3, 4, "ng-template", 7);
    \u0275\u0275elementContainerEnd();
  }
}
function BannerComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 7);
    \u0275\u0275template(1, BannerComponent_div_0_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", banner_r1 == null ? null : banner_r1.status);
  }
}
function BannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "owl-carousel-o", 5);
    \u0275\u0275template(3, BannerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.bannerSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.banners);
  }
}
function BannerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.class);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain");
    \u0275\u0275property("image", ctx_r1.banners)("bgImage", false);
  }
}
function BannerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("banner-contain");
    \u0275\u0275property("image", ctx_r1.banners)("bgImage", false);
  }
}
var _BannerComponent = class _BannerComponent {
  constructor() {
    this.style = "horizontal";
    this.bannerSlider = bannerSlider;
  }
};
_BannerComponent.\u0275fac = function BannerComponent_Factory(t) {
  return new (t || _BannerComponent)();
};
_BannerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BannerComponent, selectors: [["app-theme-banner"]], inputs: { style: "style", class: "class", contentClass: "contentClass", banners: "banners" }, decls: 3, vars: 3, consts: [["class", "container-fluid-lg", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid-lg"], [1, "banner-slider"], [3, "options"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["href", "#"], [1, "banner-contain", "hover-effect"], [3, "image", "bgImage"], [1, "home-contain", "hover-effect"]], template: function BannerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BannerComponent_div_0_Template, 4, 2, "div", 0)(1, BannerComponent_div_1_Template, 3, 6, "div", 1)(2, BannerComponent_div_2_Template, 2, 4, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", (ctx.banners == null ? null : ctx.banners.length) && ctx.style == "horizontal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.banners == null ? null : ctx.banners.image_url) && ctx.style == "vertical");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.banners == null ? null : ctx.banners.image_url) && ctx.style == "full_width");
  }
}, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, ImageLinkComponent] });
var BannerComponent = _BannerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BannerComponent, { className: "BannerComponent", filePath: "src\\app\\components\\themes\\widgets\\banner\\banner.component.ts", lineNumber: 9 });
})();

// src/app/components/themes/widgets/categories/categories.component.ts
var _CategoriesComponent = class _CategoriesComponent {
  constructor() {
    this.categoryIds = [];
    this.style = "vertical";
    this.selectedCategory = new EventEmitter();
  }
  selectCategory(id) {
    this.selectedCategory.emit(id);
  }
};
_CategoriesComponent.\u0275fac = function CategoriesComponent_Factory(t) {
  return new (t || _CategoriesComponent)();
};
_CategoriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-theme-categories"]], inputs: { categoryIds: "categoryIds", style: "style", title: "title", image: "image", theme: "theme", sliderOption: "sliderOption", selectedCategoryId: "selectedCategoryId" }, outputs: { selectedCategory: "selectedCategory" }, decls: 1, vars: 8, consts: [[3, "selectedCategory", "categoryIds", "image", "theme", "title", "sliderOption", "selectedCategoryId"]], template: function CategoriesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-categories", 0);
    \u0275\u0275listener("selectedCategory", function CategoriesComponent_Template_app_categories_selectedCategory_0_listener($event) {
      return ctx.selectCategory($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(ctx.style);
    \u0275\u0275property("categoryIds", ctx.categoryIds)("image", ctx.image)("theme", ctx.theme)("title", ctx.title)("sliderOption", ctx.sliderOption)("selectedCategoryId", ctx.selectedCategoryId);
  }
}, dependencies: [CategoriesComponent] });
var CategoriesComponent2 = _CategoriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent2, { className: "CategoriesComponent", filePath: "src\\app\\components\\themes\\widgets\\categories\\categories.component.ts", lineNumber: 9 });
})();

// src/app/components/themes/widgets/product/product.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
var _c1 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ProductComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
  }
}
function ProductComponent_ul_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductComponent_ul_0_ng_container_1_li_1_Template, 2, 2, "li", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ProductComponent_ul_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-product-box", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function ProductComponent_ul_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_ul_0_ng_template_2_li_0_Template, 2, 3, "li", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275template(1, ProductComponent_ul_0_ng_container_1_Template, 2, 1, "ng-container", 12)(2, ProductComponent_ul_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const productVertical_r3 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.productService.skeletonLoader)("ngIfElse", productVertical_r3);
  }
}
function ProductComponent_div_1_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
  }
}
function ProductComponent_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductComponent_div_1_ng_container_4_li_1_Template, 2, 2, "li", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ProductComponent_div_1_ng_template_5_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-product-box", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r4);
  }
}
function ProductComponent_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_1_ng_template_5_li_0_Template, 2, 3, "li", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275elementStart(3, "ul", 18);
    \u0275\u0275template(4, ProductComponent_div_1_ng_container_4_Template, 2, 1, "ng-container", 12)(5, ProductComponent_div_1_ng_template_5_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const productVerticalContent_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.productService.skeletonLoader)("ngIfElse", productVerticalContent_r5);
  }
}
function ProductComponent_div_2_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
}
function ProductComponent_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275template(2, ProductComponent_div_2_ng_container_5_div_2_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ProductComponent_div_2_ng_template_6_div_0_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap(ctx_r0.boxClass);
    \u0275\u0275property("product", product_r6);
  }
}
function ProductComponent_div_2_ng_template_6_div_0_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_2_ng_template_6_div_0_2_ng_template_0_Template, 3, 5, "ng-template", 24);
  }
}
function ProductComponent_div_2_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "owl-carousel-o", 23);
    \u0275\u0275template(2, ProductComponent_div_2_ng_template_6_div_0_2_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.sliderOption);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_2_ng_template_6_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap(ctx_r0.boxClass);
    \u0275\u0275property("product", product_r7);
  }
}
function ProductComponent_div_2_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ProductComponent_div_2_ng_template_6_ng_template_1_ng_container_1_Template, 3, 5, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c1, ctx_r0.showItem === 5 ? "row g-sm-4 g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2" : "", ctx_r0.showItem === 6 ? "row g-sm-4 g-3 row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-2" : "", ctx_r0.showItem === 2 ? "row g-sm-4 g-3 row-cols-sm-2 row-cols-2" : "", ctx_r0.showItem === 4 ? "row g-sm-4 g-3 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1" : ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_2_ng_template_6_div_0_Template, 3, 2, "div", 21)(1, ProductComponent_div_2_ng_template_6_ng_template_1_Template, 2, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const productBox_r8 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.slider)("ngIfElse", productBox_r8);
  }
}
function ProductComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, ProductComponent_div_2_ng_container_5_Template, 3, 1, "ng-container", 12)(6, ProductComponent_div_2_ng_template_6_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const productContent_r9 = \u0275\u0275reference(7);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(!ctx_r0.productService.skeletonLoader ? ctx_r0.productStyle : "");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(13, _c0, (tmp_3_0 = \u0275\u0275pipeBind1(1, 5, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.full_border, (tmp_3_0 = \u0275\u0275pipeBind1(2, 7, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.image_bg, (tmp_3_0 = \u0275\u0275pipeBind1(3, 9, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.product_box_bg, (tmp_3_0 = \u0275\u0275pipeBind1(4, 11, ctx_r0.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.product_box_border));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.productService.skeletonLoader)("ngIfElse", productContent_r9);
  }
}
function ProductComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap(ctx_r0.boxClass);
    \u0275\u0275property("product", product_r10);
  }
}
function ProductComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ProductComponent_div_3_ng_container_1_Template, 3, 5, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275element(2, "app-product-box", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("product", product_r11);
  }
}
function ProductComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, ProductComponent_div_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_4_ng_template_2_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 14);
  }
  if (rf & 2) {
    const product_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("product", product_r12);
  }
}
function ProductComponent_div_4_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_div_4_ng_template_2_1_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function ProductComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 23);
    \u0275\u0275template(1, ProductComponent_div_4_ng_template_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r0.sliderOption);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ProductComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ProductComponent_div_4_div_1_Template, 2, 1, "div", 28)(2, ProductComponent_div_4_ng_template_2_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sliderProduct_r13 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.slider)("ngIfElse", sliderProduct_r13);
  }
}
function ProductComponent_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 31);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_product_found");
  }
}
var _ProductComponent = class _ProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.style = "vertical";
    this.productIds = [];
    this.productStyle = "";
    this.sliderOption = productSlider;
    this.products = [];
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
  }
  ngOnChanges() {
    if (Array.isArray(this.productIds) && this.productIds.length) {
      this.product$.subscribe((products) => {
        this.products = products.filter((product) => this.productIds?.includes(product.id));
      });
    }
  }
  ngOnInit() {
    this.themeOption$.subscribe((option) => {
      if (option?.product?.product_box_border || option?.product?.image_bg || option?.product?.product_box_bg) {
        this.sliderOption["margin"] = 15;
      }
    });
  }
};
_ProductComponent.\u0275fac = function ProductComponent_Factory(t) {
  return new (t || _ProductComponent)(\u0275\u0275directiveInject(ProductService));
};
_ProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-theme-product"]], inputs: { style: "style", productIds: "productIds", boxClass: "boxClass", productStyle: "productStyle", layout: "layout", sliderOption: "sliderOption", slider: "slider", showItem: "showItem" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 6, consts: [["productVertical", ""], ["productVerticalContent", ""], ["productContent", ""], ["productBox", ""], ["sliderProduct", ""], ["class", "product-list border-0 p-0 sidebar-product d-flex", 4, "ngIf"], ["class", "best-selling-slider product-wrapper", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], ["class", "row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow", 4, "ngIf"], [4, "ngIf"], [3, "class", "text", 4, "ngIf"], [1, "product-list", "border-0", "p-0", "sidebar-product", "d-flex"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "product"], [1, "best-selling-slider", "product-wrapper"], [1, "position-relative"], [1, "border-effect"], [1, "product-list"], [3, "ngClass"], [1, "row", "row-cols-5", "m-0"], ["class", "product-box-slider", 4, "ngIf", "ngIfElse"], [1, "product-box-slider"], [3, "options"], ["carouselSlide", ""], [1, "row", "m-0"], [1, "col-12", "px-0"], [1, "row", "row-cols-xxl-6", "row-cols-xl-5", "row-cols-lg-4", "row-cols-sm-3", "row-cols-2", "g-sm-4", "g-3", "no-arrow"], ["class", "row g-4", 4, "ngIf", "ngIfElse"], [1, "row", "g-4"], [1, "col-xxl-3", "col-lg-4", "col-sm-6"], [3, "text"]], template: function ProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_ul_0_Template, 4, 2, "ul", 5)(1, ProductComponent_div_1_Template, 7, 2, "div", 6)(2, ProductComponent_div_2_Template, 8, 18, "div", 7)(3, ProductComponent_div_3_Template, 2, 1, "div", 8)(4, ProductComponent_div_4_Template, 4, 2, "div", 9)(5, ProductComponent_app_no_data_5_Template, 1, 3, "app-no-data", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.style == "vertical" && (ctx.productService.skeletonLoader || (ctx.products == null ? null : ctx.products.length)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.style == "classic" && (ctx.productService.skeletonLoader || (ctx.products == null ? null : ctx.products.length)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.style == "horizontal" && (ctx.productService.skeletonLoader || (ctx.products == null ? null : ctx.products.length)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.style === "book-horizontal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.style === "cairo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.products == null ? null : ctx.products.length));
  }
}, dependencies: [NgClass, NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, AsyncPipe], styles: ["\n\n.test[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  background-color: aqua;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=product.component.css.map */"] });
var ProductComponent = _ProductComponent;
__decorate([
  Select(ProductState.productByIds)
], ProductComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src\\app\\components\\themes\\widgets\\product\\product.component.ts", lineNumber: 17 });
})();

// src/app/components/themes/widgets/newsletter/newsletter.component.ts
var _c02 = (a0) => ({ "background-image": a0 });
function NewsletterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 3)(4, "div", 6)(5, "div", 7)(6, "div")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 8)(12, "div", 9)(13, "div", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "app-button", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
    \u0275\u0275element(21, "img", 15);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(14, _c02, "url(" + ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.image_url) + ")"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.sub_title);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 10, "enter_your_email"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn bg-white theme-color btn-md fw-500 submit-button");
    \u0275\u0275property("type", "submit")("spinner", true)("id", "subscribe_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "subscribe"), " ");
  }
}
function NewsletterComponent_ng_template_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function NewsletterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 3)(4, "div", 19)(5, "div", 20)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275element(11, "input", 22);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275element(13, "i", 23);
    \u0275\u0275elementStart(14, "app-button", 24);
    \u0275\u0275listener("click", function NewsletterComponent_ng_template_2_Template_app_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 27);
    \u0275\u0275template(20, NewsletterComponent_ng_template_2_div_20_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(15, _c02, "url(" + ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.image_url) + ")"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(12, 11, "enter_your_email"));
    \u0275\u0275property("formControl", ctx_r0.email);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("sub-btn btn-animation");
    \u0275\u0275property("id", "subscribe")("spinner", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "subscribe"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isSubmit && (ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]));
  }
}
var _NewsletterComponent = class _NewsletterComponent {
  constructor(store) {
    this.store = store;
    this.style = "basic";
    this.email = new FormControl("", [Validators.email]);
    this.isSubmit = false;
    this.storageURL = environment.storageURL;
  }
  submit() {
    this.isSubmit = true;
    if (this.email.valid) {
      this.store.dispatch(new Subscription({ email: this.email.value }));
      this.email.reset();
      this.isSubmit = false;
    }
  }
};
_NewsletterComponent.\u0275fac = function NewsletterComponent_Factory(t) {
  return new (t || _NewsletterComponent)(\u0275\u0275directiveInject(Store));
};
_NewsletterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsletterComponent, selectors: [["app-newsletter"]], inputs: { data: "data", style: "style" }, decls: 4, vars: 2, consts: [["basic", ""], [1, "container-fluid-lg"], ["class", "row", 4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-12"], [1, "newsletter-box", "hover-effect", "bg-size", 3, "ngStyle"], [1, "col-xxl-8", "col-xl-7"], [1, "newsletter-detail", "p-center-left", "text-white"], [1, "row", "g-2"], [1, "col-sm-10", "col-12"], [1, "newsletter-form"], ["type", "email", "id", "email", 1, "form-control", 3, "placeholder"], [3, "type", "spinner", "id"], [1, "col-xxl-4", "col-xl-5", "d-xl-block", "d-none"], [1, "shape-box"], ["src", "assets/images/basket.png", "alt", "basket", 1, "img-fluid", "image-1"], [1, "newsletter-box", "newsletter-box-2", 3, "ngStyle"], [1, "newsletter-contain", "py-5"], [1, "container-fluid"], [1, "col-xxl-4", "col-lg-5", "col-md-7", "col-sm-9", "offset-xxl-2", "offset-md-1"], [1, "newsletter-detail"], [1, "input-box"], ["type", "email", 1, "form-control", 3, "placeholder", "formControl"], [1, "ri-mail-line", "arrow"], [3, "click", "id", "spinner"], [1, "d-sm-inline-block", "d-none"], [1, "ri-arrow-right-line", "icon"], [1, "input-box", "mt-1"], ["class", "invalid-feedback mt-1", 4, "ngIf"], [1, "invalid-feedback", "mt-1"]], template: function NewsletterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NewsletterComponent_div_1_Template, 22, 16, "div", 2)(2, NewsletterComponent_ng_template_2_Template, 21, 17, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const basic_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.style == "classic")("ngIfElse", basic_r3);
  }
}, dependencies: [NgIf, NgStyle, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgForm, ButtonComponent, TranslatePipe] });
var NewsletterComponent = _NewsletterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsletterComponent, { className: "NewsletterComponent", filePath: "src\\app\\components\\themes\\widgets\\newsletter\\newsletter.component.ts", lineNumber: 14 });
})();

// src/app/components/themes/widgets/blog/blog.component.ts
var _c03 = (a0) => ["/blog/", a0];
var _c12 = (a0) => ({ "background-image": a0 });
function BlogComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-blog");
  }
}
function BlogComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 6);
    \u0275\u0275template(1, BlogComponent_ng_container_2_ng_container_1_ng_template_1_Template, 1, 0, "ng-template", 6);
    \u0275\u0275elementContainerEnd();
  }
}
function BlogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BlogComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function BlogComponent_ng_template_3_ng_container_0_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "Featured"));
  }
}
function BlogComponent_ng_template_3_ng_container_0_ng_template_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 14);
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", blog_r2 == null ? null : blog_r2.description, \u0275\u0275sanitizeHtml);
  }
}
function BlogComponent_ng_template_3_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275template(2, BlogComponent_ng_template_3_ng_container_0_ng_template_1_div_2_Template, 4, 3, "div", 8);
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "a", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 11)(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h5");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, BlogComponent_ng_template_3_ng_container_0_ng_template_1_p_11_Template, 1, 1, "p", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("sticky-blog-box", (blog_r2 == null ? null : blog_r2.is_sticky) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", blog_r2 == null ? null : blog_r2.is_featured);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c03, blog_r2 == null ? null : blog_r2.slug))("ngStyle", \u0275\u0275pureFunction1(14, _c12, "url(" + (blog_r2.blog_thumbnail ? blog_r2 == null ? null : blog_r2.blog_thumbnail == null ? null : blog_r2.blog_thumbnail.original_url : "assets/images/product.png") + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c03, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, blog_r2 == null ? null : blog_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r2 == null ? null : blog_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.description);
  }
}
function BlogComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 6);
    \u0275\u0275template(1, BlogComponent_ng_template_3_ng_container_0_ng_template_1_Template, 12, 18, "ng-template", 6);
    \u0275\u0275elementContainerEnd();
  }
}
function BlogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BlogComponent_ng_template_3_ng_container_0_Template, 2, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r0.blogs);
  }
}
function BlogComponent_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 15);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_blog_found");
  }
}
var _BlogComponent = class _BlogComponent {
  constructor(blogService) {
    this.blogService = blogService;
    this.blogIds = [];
    this.blogs = [];
    this.skeletonItems = Array.from({ length: 5 }, (_, index) => index);
    this.blogOption = customOptionsItem3;
  }
  ngOnChanges() {
    if (Array.isArray(this.blogIds)) {
      this.blog$.subscribe((blogs) => {
        this.blogs = blogs.data.filter((blog) => this.blogIds?.includes(blog?.id));
      });
    }
  }
};
_BlogComponent.\u0275fac = function BlogComponent_Factory(t) {
  return new (t || _BlogComponent)(\u0275\u0275directiveInject(BlogService));
};
_BlogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], inputs: { blogIds: "blogIds", sliderOption: "sliderOption", description: "description" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 4, consts: [["blogContent", ""], [1, "slider-3-blog", "ratio_65", "no-arrow", "product-wrapper"], [3, "options"], [4, "ngIf", "ngIfElse"], [3, "class", "text", 4, "ngIf"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "blog-box", "ratio_65"], ["class", "blog-label-tag", 4, "ngIf"], [1, "blog-box-image"], [1, "blog-image", "bg-size", 3, "routerLink", "ngStyle"], [1, "blog-detail", 3, "routerLink"], [3, "innerHTML", 4, "ngIf"], [1, "blog-label-tag"], [3, "innerHTML"], [3, "text"]], template: function BlogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "owl-carousel-o", 2);
    \u0275\u0275template(2, BlogComponent_ng_container_2_Template, 2, 1, "ng-container", 3)(3, BlogComponent_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, BlogComponent_app_no_data_5_Template, 1, 3, "app-no-data", 4);
  }
  if (rf & 2) {
    const blogContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.sliderOption ? ctx.sliderOption : ctx.blogOption);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.blogService.skeletonLoader)("ngIfElse", blogContent_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx.blogs == null ? null : ctx.blogs.length));
  }
}, dependencies: [NgForOf, NgIf, NgStyle, RouterLink, CarouselComponent, CarouselSlideDirective, NoDataComponent, SkeletonBlogComponent, DatePipe, TranslatePipe], styles: ['\n\n.blog-section[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 9, 12, 0.02) 0%,\n      rgba(8, 9, 12, 0) 100%);\n  overflow: hidden;\n}\n.blog-section[_ngcontent-%COMP%]::before, .blog-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  pointer-events: none;\n  inset: auto auto -20% -10%;\n  width: 40rem;\n  height: 40rem;\n  background:\n    radial-gradient(\n      closest-side,\n      rgba(111, 76, 255, 0.08),\n      transparent 70%);\n  filter: blur(24px);\n  transform: translate3d(0, 0, 0);\n}\n.blog-section[_ngcontent-%COMP%]::after {\n  inset: -10% -15% auto auto;\n  width: 36rem;\n  height: 36rem;\n  background:\n    radial-gradient(\n      closest-side,\n      rgba(0, 190, 160, 0.08),\n      transparent 70%);\n}\n.blog-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 14px;\n  background: #ffffff;\n  box-shadow: 0 2px 14px rgba(16, 24, 40, 0.06);\n  transition:\n    transform 320ms ease,\n    box-shadow 320ms ease,\n    background 320ms ease;\n  will-change: transform;\n  backface-visibility: hidden;\n  overflow: hidden;\n}\n.blog-box.sticky-blog-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.12);\n}\n.blog-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 38px rgba(16, 24, 40, 0.14);\n}\n.blog-label-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 2;\n}\n.blog-label-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 10px;\n  font-size: 11px;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  border-radius: 999px;\n  color: #ffffff;\n  background:\n    linear-gradient(\n      135deg,\n      #6f4cff 0%,\n      #00bea0 100%);\n  box-shadow: 0 6px 18px rgba(111, 76, 255, 0.25);\n}\n.blog-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: rgba(15, 23, 42, 0.062745098);\n}\n.blog-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  transform: scale3d(1, 1, 1);\n  transition: transform 500ms ease, filter 500ms ease;\n  will-change: transform;\n}\n.blog-box[_ngcontent-%COMP%]:hover   .blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale3d(1.045, 1.045, 1);\n  filter: saturate(1.02) contrast(1.02);\n}\n.blog-contain[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%] {\n  padding: 18px 18px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #ffffff 100%);\n}\n.blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 8px;\n  color: #667085;\n}\n.blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   .super[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   .super[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6f4cff;\n}\n.blog-contain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 6px 0 10px;\n  font-size: 18px;\n  line-height: 1.35;\n  color: #101828;\n  font-weight: 700;\n  letter-spacing: -0.2px;\n  transition: color 220ms ease;\n}\n.blog-contain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #6f4cff;\n}\n.blog-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #475467;\n  line-height: 1.6;\n}\n.blog-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #6f4cff;\n  font-weight: 600;\n  position: relative;\n  transition: color 220ms ease, transform 220ms ease;\n}\n.blog-button[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -2px;\n  height: 2px;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #6f4cff,\n      #00bea0);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 260ms ease;\n}\n.blog-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 220ms ease;\n}\n.blog-button[_ngcontent-%COMP%]:hover {\n  color: #593bff;\n}\n.blog-button[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n}\n.blog-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n}\n.blog-list[_ngcontent-%COMP%]   .blog-image[_ngcontent-%COMP%] {\n  max-height: 320px;\n}\n.blog-list[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n@keyframes _ngcontent-%COMP%_blogFadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.blog-section[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_blogFadeUp 540ms ease forwards;\n}\n.blog-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:nth-child(1)   .blog-box[_ngcontent-%COMP%] {\n  animation-delay: 40ms;\n}\n.blog-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:nth-child(2)   .blog-box[_ngcontent-%COMP%] {\n  animation-delay: 80ms;\n}\n.blog-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:nth-child(3)   .blog-box[_ngcontent-%COMP%] {\n  animation-delay: 120ms;\n}\n.blog-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:nth-child(4)   .blog-box[_ngcontent-%COMP%] {\n  animation-delay: 160ms;\n}\n.blog-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:nth-child(5)   .blog-box[_ngcontent-%COMP%] {\n  animation-delay: 200ms;\n}\n.blog-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:nth-child(6)   .blog-box[_ngcontent-%COMP%] {\n  animation-delay: 240ms;\n}\n@media (max-width: 991.98px) {\n  .blog-contain[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 575.98px) {\n  .blog-contain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .blog-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .blog-contain-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.dark[_ngcontent-%COMP%]   .blog-section[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-section[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02) 0%,\n      rgba(255, 255, 255, 0) 100%);\n}\n.dark[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%] {\n  background: #0b1220;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);\n}\n.dark[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b1220 0%,\n      #0b1220 100%);\n}\n.dark[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%] {\n  color: #98a2b3;\n}\n.dark[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   .blog-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8a77ff;\n}\n.dark[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e4e7ec;\n}\n.dark[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #b9a8ff;\n}\n.dark[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-contain-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.dark[_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%], [data-theme=dark][_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%] {\n  color: #b9a8ff;\n}\n.dark[_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%]:hover, .dark-theme[_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%]:hover, [data-theme=dark][_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%]:hover {\n  color: #d2c9ff;\n}\n.dark[_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%]::after, .dark-theme[_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%]::after, [data-theme=dark][_ngcontent-%COMP%]   .blog-button[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      #b9a8ff,\n      #5eead4);\n}\n/*# sourceMappingURL=blog.component.css.map */'] });
var BlogComponent = _BlogComponent;
__decorate([
  Select(BlogState.blog)
], BlogComponent.prototype, "blog$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src\\app\\components\\themes\\widgets\\blog\\blog.component.ts", lineNumber: 15 });
})();

// src/app/components/themes/widgets/brand/brand.component.ts
var _c04 = (a0) => ["/brand", a0];
function BrandComponent_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", brand_r1.brand_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function BrandComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(brand_r1.name);
  }
}
function BrandComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 6);
    \u0275\u0275template(2, BrandComponent_div_3_img_2_Template, 1, 1, "img", 7)(3, BrandComponent_div_3_ng_template_3_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const brand_r1 = ctx.$implicit;
    const name_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c04, brand_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", brand_r1.brand_image)("ngIfElse", name_r2);
  }
}
function BrandComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 9);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_product_found");
  }
}
var _BrandComponent = class _BrandComponent {
  ngOnInit() {
    this.brand$.subscribe((brands) => {
      this.brands = brands.data.filter((brand) => this.brandIds.includes(brand.id));
    });
  }
};
_BrandComponent.\u0275fac = function BrandComponent_Factory(t) {
  return new (t || _BrandComponent)();
};
_BrandComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandComponent, selectors: [["app-brand"]], inputs: { brandIds: "brandIds" }, decls: 5, vars: 4, consts: [["name", ""], [1, "brand-section"], [1, "brand-row"], [1, "row", "row-cols-6", "justify-content-center"], [4, "ngFor", "ngForOf"], [3, "class", "text", 4, "ngIf"], ["href", "javascript:void(0)", 3, "routerLink"], ["class", "img-fluid", 3, "src", 4, "ngIf", "ngIfElse"], [1, "img-fluid", 3, "src"], [3, "text"]], template: function BrandComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, BrandComponent_div_3_Template, 5, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BrandComponent_app_no_data_4_Template, 1, 3, "app-no-data", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classProp("no-bg", ctx.brands.length < 6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.brands);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.brands == null ? null : ctx.brands.length));
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NoDataComponent] });
var BrandComponent = _BrandComponent;
__decorate([
  Select(BrandState.brand)
], BrandComponent.prototype, "brand$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandComponent, { className: "BrandComponent", filePath: "src\\app\\components\\themes\\widgets\\brand\\brand.component.ts", lineNumber: 12 });
})();

// src/app/components/themes/widgets/top-seller/top-seller.component.ts
var _c05 = (a0) => ["/seller/store/", a0];
function TopSellerComponent_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const store_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate("alt", store_r1.store_name);
    \u0275\u0275property("src", store_r1.store_logo.original_url, \u0275\u0275sanitizeUrl);
  }
}
function TopSellerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 6);
    \u0275\u0275template(2, TopSellerComponent_div_3_img_2_Template, 1, 2, "img", 7);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275element(6, "ngb-rating", 9);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const store_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c05, store_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", store_r1.store_logo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r1.store_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("rate", store_r1.rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", store_r1.reviews_count, ")");
  }
}
function TopSellerComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light justify-content-center");
    \u0275\u0275property("text", "no_store_found");
  }
}
var _TopSellerComponent = class _TopSellerComponent {
  ngOnInit() {
    this.store$.subscribe((stores) => {
      if (this.sellerIds?.length)
        this.sellers = stores.data.filter((seller) => this.sellerIds.includes(seller.id));
    });
  }
};
_TopSellerComponent.\u0275fac = function TopSellerComponent_Factory(t) {
  return new (t || _TopSellerComponent)();
};
_TopSellerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopSellerComponent, selectors: [["app-top-seller"]], inputs: { sellerIds: "sellerIds" }, decls: 5, vars: 2, consts: [[1, "brand-section"], [1, "brand-row"], [1, "row", "g-sm-4", "g-3", "row-cols-xxl-6", "row-cols-lg-5", "row-cols-md-3", "row-cols-2"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "class", "text", 4, "ngIf"], [1, "col"], [3, "routerLink"], ["class", "img-fluid", 3, "src", "alt", 4, "ngIf"], [1, "product-rating"], [3, "rate"], [1, "img-fluid", 3, "src", "alt"], [3, "text"]], template: function TopSellerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275template(3, TopSellerComponent_div_3_Template, 9, 7, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TopSellerComponent_app_no_data_4_Template, 1, 3, "app-no-data", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.sellers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.sellers == null ? null : ctx.sellers.length));
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NgbRating, NoDataComponent] });
var TopSellerComponent = _TopSellerComponent;
__decorate([
  Select(StoreState.store)
], TopSellerComponent.prototype, "store$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopSellerComponent, { className: "TopSellerComponent", filePath: "src\\app\\components\\themes\\widgets\\top-seller\\top-seller.component.ts", lineNumber: 12 });
})();

// src/app/components/themes/paris/paris.component.ts
var _c06 = () => [];
function ParisComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9);
    \u0275\u0275element(1, "app-theme-home-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "paris")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function ParisComponent_div_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.product_ids) || \u0275\u0275pureFunction0(4, _c06));
  }
}
function ParisComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275element(3, "app-theme-categories", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(4, "app-theme-banner", 3)(5, "app-theme-banner", 3);
    \u0275\u0275template(6, ParisComponent_div_7_ng_container_6_Template, 6, 5, "ng-container", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(14, _c06));
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_156 section-t-space");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners.banner_1);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_medium section-t-space");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.left_side_banners.banner_2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.status);
  }
}
function ParisComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 17);
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275element(3, "app-theme-product", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.product_ids) || \u0275\u0275pureFunction0(7, _c06))("slider", true)("sliderOption", ctx_r0.productSlider);
  }
}
function ParisComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-title", 17)(3, "app-theme-categories", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("sliderOption", ctx_r0.categorySlider)("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.image_url)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_list == null ? null : ctx_r0.data.content.main_content.section2_categories_list.category_ids) || \u0275\u0275pureFunction0(8, _c06))("theme", "paris");
  }
}
function ParisComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24);
    \u0275\u0275element(5, "app-image-link", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "div", 24);
    \u0275\u0275element(8, "app-image-link", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_2)("bgImage", false);
  }
}
function ParisComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 17);
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275element(3, "app-theme-product", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.product_ids) || \u0275\u0275pureFunction0(7, _c06))("sliderOption", ctx_r0.productSlider)("slider", true);
  }
}
function ParisComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 17);
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275element(3, "app-top-seller", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.store_ids) || \u0275\u0275pureFunction0(3, _c06));
  }
}
function ParisComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275element(2, "app-theme-banner", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section5_coupons);
  }
}
function ParisComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "div", 31)(3, "div", 24);
    \u0275\u0275element(4, "app-image-link", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "div", 24);
    \u0275\u0275element(7, "app-image-link", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners.banner_2)("bgImage", false);
  }
}
function ParisComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParisComponent_ng_container_15_div_1_Template, 8, 4, "div", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners == null ? null : ctx_r0.data.content.main_content.section6_two_column_banners.status);
  }
}
function ParisComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 17)(2, "app-theme-product", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section7_products == null ? null : ctx_r0.data.content.main_content.section7_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section7_products == null ? null : ctx_r0.data.content.main_content.section7_products.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section7_products == null ? null : ctx_r0.data.content.main_content.section7_products.product_ids) || \u0275\u0275pureFunction0(5, _c06));
  }
}
function ParisComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 24);
    \u0275\u0275element(3, "app-image-link", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section8_full_width_banner)("bgImage", false);
  }
}
function ParisComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-title", 17)(2, "app-blog", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs.description);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs == null ? null : ctx_r0.data.content.main_content.section9_featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c06));
  }
}
function ParisComponent_ng_container_19_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 5);
    \u0275\u0275element(2, "app-brand", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c06));
  }
}
function ParisComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParisComponent_ng_container_19_section_1_Template, 3, 2, "section", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids == null ? null : ctx_r0.data.content.brands.brand_ids.length);
  }
}
function ParisComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 38);
    \u0275\u0275element(2, "app-newsletter", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var _ParisComponent = class _ParisComponent {
  constructor(store, themeOptionService, route) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route = route;
    this.categorySlider = categorySlider;
    this.productSlider = productSlider;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.main_content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content.main_content?.section9_featured_blogs?.blog_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBlogs$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1000"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1e3: {
              items: 3
            }
          }) });
        }
      } else {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1000"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 5, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1e3: {
              items: 5
            }
          }) });
        }
      }
    });
  }
};
_ParisComponent.\u0275fac = function ParisComponent_Factory(t) {
  return new (t || _ParisComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(ActivatedRoute));
};
_ParisComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParisComponent, selectors: [["app-paris"]], inputs: { data: "data", slug: "slug" }, decls: 21, vars: 19, consts: [[1, "bg-effect"], ["class", "home-section pt-2", 4, "ngIf"], [1, "banner-section", "ratio_60"], [3, "banners"], [1, "product-section"], [1, "container-fluid-lg"], [1, "row", "g-sm-4", "g-3"], ["class", "col-xxl-3 col-xl-4 d-none d-xl-block", 4, "ngIf"], [4, "ngIf"], [1, "home-section", "pt-2"], [3, "theme", "data"], [1, "col-xxl-3", "col-xl-4", "d-none", "d-xl-block"], [1, "p-sticky"], [3, "categoryIds"], [1, "section-t-space"], [1, "category-menu"], [3, "productIds"], [3, "title", "description"], [1, "section-b-space"], [3, "productIds", "slider", "sliderOption"], [3, "sliderOption", "image", "categoryIds", "theme"], [1, "section-t-space", "section-b-space"], [1, "row", "g-md-4", "g-3"], [1, "col-md-6"], [1, "banner-contain", "hover-effect"], [3, "image", "bgImage"], [3, "productIds", "sliderOption", "slider"], [3, "sellerIds"], [1, "section-b-space", "ratio_12"], [1, "sale-banner", 3, "banners"], ["class", "section-b-space", 4, "ngIf"], [1, "col-xxl-8", "col-xl-12", "col-md-7"], [1, "col-xxl-4", "col-xl-12", "col-md-5"], [1, "section-b-space", "section-t-space"], [3, "blogIds"], ["class", "brand-effect", 4, "ngIf"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"], [3, "data"]], template: function ParisComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ParisComponent_section_1_Template, 2, 2, "section", 1);
    \u0275\u0275elementStart(2, "section", 2);
    \u0275\u0275element(3, "app-theme-banner", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275template(7, ParisComponent_div_7_Template, 7, 15, "div", 7);
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275template(9, ParisComponent_ng_container_9_Template, 4, 8, "ng-container", 8)(10, ParisComponent_ng_container_10_Template, 4, 9, "ng-container", 8)(11, ParisComponent_ng_container_11_Template, 9, 4, "ng-container", 8)(12, ParisComponent_ng_container_12_Template, 4, 8, "ng-container", 8)(13, ParisComponent_ng_container_13_Template, 4, 4, "ng-container", 8)(14, ParisComponent_ng_container_14_Template, 3, 3, "ng-container", 8)(15, ParisComponent_ng_container_15_Template, 2, 1, "ng-container", 8)(16, ParisComponent_ng_container_16_Template, 3, 6, "ng-container", 8)(17, ParisComponent_ng_container_17_Template, 4, 2, "ng-container", 8)(18, ParisComponent_ng_container_18_Template, 3, 4, "ng-container", 8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(19, ParisComponent_ng_container_19_Template, 2, 1, "ng-container", 8)(20, ParisComponent_ng_container_20_Template, 3, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.banners);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section1_products == null ? null : ctx.data.content.main_content.section1_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section2_categories_list == null ? null : ctx.data.content.main_content.section2_categories_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section3_two_column_banners == null ? null : ctx.data.content.main_content.section3_two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.seller == null ? null : ctx.data.content.main_content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section5_coupons == null ? null : ctx.data.content.main_content.section5_coupons.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section6_two_column_banners == null ? null : ctx.data.content.main_content.section6_two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section8_full_width_banner == null ? null : ctx.data.content.main_content.section8_full_width_banner.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section9_featured_blogs == null ? null : ctx.data.content.main_content.section9_featured_blogs.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, BlogComponent, BrandComponent, TopSellerComponent] });
var ParisComponent = _ParisComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], ParisComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParisComponent, { className: "ParisComponent", filePath: "src\\app\\components\\themes\\paris\\paris.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/widgets/four-column-product/four-column-product.component.ts
var _c07 = () => [];
function FourColumnProductComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_1 == null ? null : ctx_r0.data.product_slider_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_1 == null ? null : ctx_r0.data.product_slider_1.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
function FourColumnProductComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_2 == null ? null : ctx_r0.data.product_slider_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_2 == null ? null : ctx_r0.data.product_slider_2.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
function FourColumnProductComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_3 == null ? null : ctx_r0.data.product_slider_3.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_3 == null ? null : ctx_r0.data.product_slider_3.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
function FourColumnProductComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.col ? ctx_r0.col : "col-xxl-3 col-xl-4 col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.product_ids) || \u0275\u0275pureFunction0(7, _c07));
  }
}
var _FourColumnProductComponent = class _FourColumnProductComponent {
  getProducts(ids) {
    if (Array.isArray(ids)) {
      let filteredProducts = [];
      this.product$.subscribe((products) => {
        filteredProducts = products.data.filter((product) => ids?.includes(product?.id));
      });
      return filteredProducts;
    }
    return;
  }
};
_FourColumnProductComponent.\u0275fac = function FourColumnProductComponent_Factory(t) {
  return new (t || _FourColumnProductComponent)();
};
_FourColumnProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FourColumnProductComponent, selectors: [["app-four-column-product"]], inputs: { data: "data", col: "col" }, decls: 5, vars: 4, consts: [[1, "row", "g-4"], [4, "ngIf"], [1, "category-menu"], [3, "productIds"]], template: function FourColumnProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, FourColumnProductComponent_ng_container_1_Template, 6, 8, "ng-container", 1)(2, FourColumnProductComponent_ng_container_2_Template, 6, 8, "ng-container", 1)(3, FourColumnProductComponent_ng_container_3_Template, 6, 8, "ng-container", 1)(4, FourColumnProductComponent_ng_container_4_Template, 6, 8, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_1 == null ? null : ctx.data.product_slider_1.status) && (ctx.data == null ? null : ctx.data.product_slider_1 == null ? null : ctx.data.product_slider_1.product_ids == null ? null : ctx.data.product_slider_1.product_ids.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.status) && (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.product_ids == null ? null : ctx.data.product_slider_2.product_ids.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_3 == null ? null : ctx.data.product_slider_3.status) && (ctx.data == null ? null : ctx.data.product_slider_3 == null ? null : ctx.data.product_slider_3.product_ids == null ? null : ctx.data.product_slider_3.product_ids.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.product_slider_4 == null ? null : ctx.data.product_slider_4.status) && (ctx.data == null ? null : ctx.data.product_slider_4 == null ? null : ctx.data.product_slider_4.product_ids == null ? null : ctx.data.product_slider_4.product_ids.length));
  }
}, dependencies: [NgIf, ProductComponent] });
var FourColumnProductComponent = _FourColumnProductComponent;
__decorate([
  Select(ProductState.product)
], FourColumnProductComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FourColumnProductComponent, { className: "FourColumnProductComponent", filePath: "src\\app\\components\\themes\\widgets\\four-column-product\\four-column-product.component.ts", lineNumber: 13 });
})();

// src/app/components/themes/tokyo/tokyo.component.ts
var _c08 = () => [];
function TokyoComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4);
    \u0275\u0275element(2, "app-theme-categories", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "paris")("sliderOption", ctx_r0.categorySlider)("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.image_url)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(6, _c08));
  }
}
function TokyoComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "app-theme-banner", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupons);
  }
}
function TokyoComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-banner", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banners);
  }
}
function TokyoComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.product_ids) || \u0275\u0275pureFunction0(10, _c08))("slider", true)("sliderOption", ctx_r0.productSlider)("productStyle", "product-standard")("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_slider_products == null ? null : ctx_r0.data.content.main_content.section2_slider_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_slider_products == null ? null : ctx_r0.data.content.main_content.section2_slider_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("productIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_slider_products == null ? null : ctx_r0.data.content.main_content.section2_slider_products.product_ids)("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 16);
    \u0275\u0275element(2, "app-title", 17)(3, "app-top-seller", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.description);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.store_ids) || \u0275\u0275pureFunction0(3, _c08));
  }
}
function TokyoComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_products == null ? null : ctx_r0.data.content.main_content.section3_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_products == null ? null : ctx_r0.data.content.main_content.section3_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_products == null ? null : ctx_r0.data.content.main_content.section3_products.product_ids) || \u0275\u0275pureFunction0(10, _c08))("slider", true)("sliderOption", ctx_r0.productSlider)("productStyle", "product-standard")("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "app-title", 12)(3, "app-theme-product", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.description)("svg", "cake");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.product_ids) || \u0275\u0275pureFunction0(10, _c08))("slider", true)("sliderOption", ctx_r0.productSlider)("productStyle", "product-standard")("boxClass", "product-box-bg");
  }
}
function TokyoComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20);
    \u0275\u0275element(3, "app-theme-banner", 10)(4, "app-theme-banner", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_209 rounded");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.banner_1);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("ratio_125 section-t-space");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.banner_2);
  }
}
function TokyoComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 4)(3, "div", 8)(4, "div", 21);
    \u0275\u0275element(5, "app-image-link", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap("home-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner)("bgImage", false);
  }
}
function TokyoComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 23)(2, "div", 4);
    \u0275\u0275element(3, "app-four-column-product", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function TokyoComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 4);
    \u0275\u0275element(2, "app-brand", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c08));
  }
}
function TokyoComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 27);
    \u0275\u0275element(2, "app-newsletter", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var _TokyoComponent = class _TokyoComponent {
  constructor(store, themeOptionService, route) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route = route;
    this.productSlider = productSlider2;
    this.categorySlider = categorySlider9;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.main_content?.seller?.store_ids?.join()
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["990"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            990: {
              items: 3
            }
          }) });
        }
      } else {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["990"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 5, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            990: {
              items: 5
            }
          }) });
        }
      }
    });
  }
  ngAfterViewChecked() {
    document.querySelector(".header-top")?.classList.add("bg-dark");
  }
  ngOnDestroy() {
    document.querySelector(".header-top")?.classList.remove("bg-dark");
  }
};
_TokyoComponent.\u0275fac = function TokyoComponent_Factory(t) {
  return new (t || _TokyoComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(ActivatedRoute));
};
_TokyoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TokyoComponent, selectors: [["app-tokyo"]], inputs: { data: "data", slug: "slug" }, decls: 19, vars: 17, consts: [[1, "home-section", "home-section-ratio", "pt-md-2", "pt-3"], [3, "theme", "data"], [4, "ngIf"], ["class", "banner-section ratio_60", 4, "ngIf"], [1, "container-fluid-lg"], [1, "row", "g-3"], ["class", "brand-effect", 4, "ngIf"], [3, "theme", "sliderOption", "image", "categoryIds"], [1, "row"], [1, "col-12", "sale-banner"], [3, "banners"], [1, "banner-section", "ratio_60"], [3, "title", "description", "svg"], [3, "productIds", "slider", "sliderOption", "productStyle", "boxClass"], [1, "section-t-space"], [3, "productIds", "boxClass"], [1, "border-brand"], [3, "title", "description"], [3, "sellerIds"], [1, "col-xxl-3", "col-xl-4", "d-none", "d-xl-block"], [1, "position-sticky", "top-0"], [1, "col-12"], [3, "image", "bgImage"], [1, "top-selling-section"], [3, "data"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"]], template: function TokyoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "app-theme-home-banner", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TokyoComponent_section_2_Template, 3, 7, "section", 2)(3, TokyoComponent_section_3_Template, 5, 5, "section", 2)(4, TokyoComponent_section_4_Template, 2, 3, "section", 3);
    \u0275\u0275elementStart(5, "section")(6, "div", 4)(7, "div", 5)(8, "div");
    \u0275\u0275template(9, TokyoComponent_ng_container_9_Template, 4, 11, "ng-container", 2)(10, TokyoComponent_ng_container_10_Template, 4, 7, "ng-container", 2)(11, TokyoComponent_ng_container_11_Template, 4, 4, "ng-container", 2)(12, TokyoComponent_ng_container_12_Template, 4, 11, "ng-container", 2)(13, TokyoComponent_ng_container_13_Template, 4, 11, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TokyoComponent_ng_container_14_Template, 5, 10, "ng-container", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, TokyoComponent_ng_container_15_Template, 6, 4, "ng-container", 2)(16, TokyoComponent_ng_container_16_Template, 4, 1, "ng-container", 2)(17, TokyoComponent_section_17_Template, 3, 2, "section", 6)(18, TokyoComponent_ng_container_18_Template, 3, 1, "ng-container", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("theme", "tokyo")("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupons == null ? null : ctx.data.content.coupons.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.status);
    \u0275\u0275advance(4);
    \u0275\u0275classMap((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section1_products == null ? null : ctx.data.content.main_content.section1_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section2_slider_products == null ? null : ctx.data.content.main_content.section2_slider_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.seller == null ? null : ctx.data.content.main_content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section3_products == null ? null : ctx.data.content.main_content.section3_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.sidebar == null ? null : ctx.data.content.main_content.sidebar.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner == null ? null : ctx.data.content.full_width_banner.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, FourColumnProductComponent, BrandComponent, TopSellerComponent] });
var TokyoComponent = _TokyoComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], TokyoComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(ThemeState.activeTheme)
], TokyoComponent.prototype, "activeTheme$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokyoComponent, { className: "TokyoComponent", filePath: "src\\app\\components\\themes\\tokyo\\tokyo.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/widgets/collection/collection .component.ts
function CollectionComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 5);
    \u0275\u0275element(2, "app-image-link", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "div")(5, "a", 8)(6, "h3", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const bundles_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("image", bundles_r1)("bgImage", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bundles_r1 == null ? null : bundles_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bundles_r1 == null ? null : bundles_r1.sub_title);
  }
}
function CollectionComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CollectionComponent_ng_container_2_ng_container_1_ng_template_1_Template, 10, 4, "ng-template", 3);
    \u0275\u0275elementContainerEnd();
  }
}
function CollectionComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, CollectionComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bundles_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bundles_r1 == null ? null : bundles_r1.status);
  }
}
var _CollectionComponent = class _CollectionComponent {
  constructor() {
    this.bannerSlider = bannerSlider;
  }
};
_CollectionComponent.\u0275fac = function CollectionComponent_Factory(t) {
  return new (t || _CollectionComponent)();
};
_CollectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionComponent, selectors: [["app-theme-collection"]], inputs: { data: "data" }, decls: 3, vars: 2, consts: [[1, "slider-4-1", "ratio_65", "no-arrow", "product-wrapper"], [3, "options"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [4, "ngIf"], [1, "product-slider"], [1, "b-cl", 3, "image", "bgImage"], [1, "product-slider-detail"], ["href", "javascript:void(0)", 1, "d-block"], [1, "text-title"]], template: function CollectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "owl-carousel-o", 1);
    \u0275\u0275template(2, CollectionComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.bannerSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.data);
  }
}, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, ImageLinkComponent] });
var CollectionComponent = _CollectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionComponent, { className: "CollectionComponent", filePath: "src\\app\\components\\themes\\widgets\\collection\\collection .component.ts", lineNumber: 10 });
})();

// src/app/components/themes/osaka/osaka.component.ts
var _c09 = () => [];
function OsakaComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8)(3, "app-theme-categories", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "paris")("sliderOption", ctx_r0.categorySlider)("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.image_url)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(8, _c09));
  }
}
function OsakaComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-banner", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupons);
  }
}
function OsakaComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "app-theme-product", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c09))("slider", true)("sliderOption", ctx_r0.productSlider6Item);
  }
}
function OsakaComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-banner", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("offer-box hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner);
  }
}
function OsakaComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 7);
    \u0275\u0275element(3, "app-title", 8)(4, "app-top-seller", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.description);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(3, _c09));
  }
}
function OsakaComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "app-theme-product", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(7, _c09))("slider", true)("sliderOption", ctx_r0.productSlider6Item);
  }
}
function OsakaComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-collection", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_bundles == null ? null : ctx_r0.data.content.product_bundles.bundles) || \u0275\u0275pureFunction0(1, _c09));
  }
}
function OsakaComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 7);
    \u0275\u0275element(2, "app-four-column-product", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function OsakaComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 7);
    \u0275\u0275element(2, "app-title", 8)(3, "app-blog", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.description);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c09))("sliderOption", ctx_r0.productSlider);
  }
}
function OsakaComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 7);
    \u0275\u0275element(2, "app-brand", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c09));
  }
}
function OsakaComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21);
    \u0275\u0275element(1, "app-newsletter", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter);
  }
}
var _OsakaComponent = class _OsakaComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6Item = productSlider6Item;
    this.productSlider = bannerSlider;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBrand$, getStore$, getBlogs$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 4
            }
          }) });
        }
      } else {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 6
            }
          }) });
        }
      }
    });
  }
};
_OsakaComponent.\u0275fac = function OsakaComponent_Factory(t) {
  return new (t || _OsakaComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_OsakaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OsakaComponent, selectors: [["app-osaka"]], inputs: { data: "data", slug: "slug" }, decls: 14, vars: 13, consts: [[1, "bg-effect"], [1, "home-section", "pt-md-2", "pt-3"], [3, "theme", "data"], [4, "ngIf"], ["class", "top-selling-section border-box", 4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], ["class", "newsletter-section section-b-space", 4, "ngIf"], [1, "container-fluid-lg"], [3, "title", "description"], [3, "theme", "sliderOption", "image", "categoryIds"], [1, "container-fluid-lg", "sale-banner"], [1, "row"], [1, "col-12"], [3, "banners"], [3, "productIds", "slider", "sliderOption"], [3, "sellerIds"], [3, "data"], [1, "top-selling-section", "border-box"], [3, "blogIds", "sliderOption"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"]], template: function OsakaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
    \u0275\u0275element(2, "app-theme-home-banner", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OsakaComponent_section_3_Template, 4, 9, "section", 3)(4, OsakaComponent_section_4_Template, 5, 5, "section", 3)(5, OsakaComponent_section_5_Template, 5, 8, "section", 3)(6, OsakaComponent_section_6_Template, 5, 5, "section", 3)(7, OsakaComponent_ng_container_7_Template, 5, 4, "ng-container", 3)(8, OsakaComponent_section_8_Template, 5, 8, "section", 3)(9, OsakaComponent_section_9_Template, 5, 2, "section", 3)(10, OsakaComponent_section_10_Template, 3, 1, "section", 4)(11, OsakaComponent_section_11_Template, 4, 5, "section", 3)(12, OsakaComponent_section_12_Template, 3, 2, "section", 5)(13, OsakaComponent_section_13_Template, 2, 1, "section", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("theme", "osaka")("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupons == null ? null : ctx.data.content.coupons.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_bundles == null ? null : ctx.data.content.product_bundles.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids == null ? null : ctx.data.content.featured_blogs.blog_ids.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgIf, TitleComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, BlogComponent, CollectionComponent, FourColumnProductComponent, BrandComponent, TopSellerComponent] });
var OsakaComponent = _OsakaComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], OsakaComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OsakaComponent, { className: "OsakaComponent", filePath: "src\\app\\components\\themes\\osaka\\osaka.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/widgets/category-product-filter/category-product-filter.component.ts
var _c010 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c13 = (a0, a1, a2) => [a0, a1, a2];
var _c2 = () => [];
function CategoryProductFilterComponent_app_theme_categories_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-theme-categories", 6);
    \u0275\u0275listener("selectedCategory", function CategoryProductFilterComponent_app_theme_categories_1_Template_app_theme_categories_selectedCategory_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap("filter");
    \u0275\u0275property("categoryIds", (ctx_r1.data == null ? null : ctx_r1.data.categories_products == null ? null : ctx_r1.data.categories_products.category_ids) || \u0275\u0275pureFunction0(4, _c2))("selectedCategoryId", ctx_r1.selectedCategoryId);
  }
}
function CategoryProductFilterComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "app-product-box", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("product", product_r3);
  }
}
var _CategoryProductFilterComponent = class _CategoryProductFilterComponent {
  constructor(store, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.grid = 3;
    this.productFilterIds = [];
  }
  ngOnChanges() {
    this.categoryProduct$.subscribe((products) => {
      this.products = products.map((product) => product).slice(0, this.grid * 2);
    });
  }
  selectCategory(id) {
    this.selectedCategoryId = id;
    this.categoryProduct$.subscribe((products) => {
      if (id) {
        this.products = products.filter((product) => product?.categories?.map((category) => category.id).includes(id)).map((product) => product).slice(0, this.grid * 2);
      } else {
        this.products = products.filter((product) => product?.categories?.map((category) => category.id)).map((product) => product).slice(0, this.grid * 2);
      }
    });
  }
};
_CategoryProductFilterComponent.\u0275fac = function CategoryProductFilterComponent_Factory(t) {
  return new (t || _CategoryProductFilterComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService));
};
_CategoryProductFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryProductFilterComponent, selectors: [["app-category-product-filter"]], inputs: { data: "data", sliderOption: "sliderOption", grid: "grid" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 26, consts: [[3, "title"], [3, "categoryIds", "style", "selectedCategoryId", "selectedCategory", 4, "ngIf"], [1, "container-fluid-lg"], [3, "ngClass"], [1, "row", "g-sm-4", "g-3", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "selectedCategory", "categoryIds", "selectedCategoryId"], [3, "product"]], template: function CategoryProductFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-title", 0);
    \u0275\u0275template(1, CategoryProductFilterComponent_app_theme_categories_1_Template, 1, 5, "app-theme-categories", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275template(9, CategoryProductFilterComponent_ng_container_9_Template, 3, 3, "ng-container", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275styleMap("simple");
    \u0275\u0275classMap("container-fluid-lg");
    \u0275\u0275property("title", ctx.data == null ? null : ctx.data.categories_products == null ? null : ctx.data.categories_products.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.categories_products == null ? null : ctx.data.categories_products.category_ids == null ? null : ctx.data.categories_products.category_ids.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(17, _c010, ((tmp_4_0 = \u0275\u0275pipeBind1(4, 9, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.full_border) ? "full_border" : "", ((tmp_4_0 = \u0275\u0275pipeBind1(5, 11, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.image_bg) ? "product_img_bg" : "", ((tmp_4_0 = \u0275\u0275pipeBind1(6, 13, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.product_box_bg) ? "full_bg" : "", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 15, ctx.themeOption$)) == null ? null : tmp_4_0.product == null ? null : tmp_4_0.product.product_box_border) ? "product_border" : ""));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(22, _c13, ctx.grid === 4 ? "row-cols-xl-4 row-cols-md-3 row-cols-2" : "", ctx.grid === 5 ? "row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2" : "", ctx.grid === 6 ? "row-cols-xxl-6 row-cols-lg-4 row-cols-md-3 row-cols-2" : ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.products);
  }
}, dependencies: [NgClass, NgForOf, NgIf, TitleComponent, ProductBoxComponent, CategoriesComponent2, AsyncPipe] });
var CategoryProductFilterComponent = _CategoryProductFilterComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CategoryProductFilterComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(ProductState.categoryProducts)
], CategoryProductFilterComponent.prototype, "categoryProduct$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryProductFilterComponent, { className: "CategoryProductFilterComponent", filePath: "src\\app\\components\\themes\\widgets\\category-product-filter\\category-product-filter.component.ts", lineNumber: 17 });
})();

// src/app/components/themes/rome/rome.component.ts
var _c011 = (a0) => ({ "background-image": a0 });
var _c14 = () => [];
function RomeComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-home-banner", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c011, "url(" + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.bg_image_url) + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("theme", "rome")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function RomeComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 14);
    \u0275\u0275element(2, "app-title", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275element(5, "app-theme-categories", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.title);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "rome")("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.category_ids) || \u0275\u0275pureFunction0(8, _c14))("sliderOption", ctx_r0.categorySlider);
  }
}
function RomeComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-title", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "app-theme-banner", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("simple");
    \u0275\u0275classMap("container-fluid-lg");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.value_banners == null ? null : ctx_r0.data.content.value_banners.title);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.value_banners == null ? null : ctx_r0.data.content.value_banners.banners);
  }
}
function RomeComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21);
    \u0275\u0275element(1, "app-category-product-filter", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content)("grid", ctx_r0.showProductBox);
  }
}
function RomeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 14);
    \u0275\u0275element(3, "app-title", 15)(4, "app-top-seller", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c14));
  }
}
function RomeComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "div", 14)(2, "div", 25)(3, "div", 26);
    \u0275\u0275element(4, "app-image-link", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275element(6, "app-image-link", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_2)("bgImage", false);
  }
}
function RomeComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28)(1, "div", 14);
    \u0275\u0275element(2, "app-four-column-product", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function RomeComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-theme-banner", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleMap("full_width");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner);
  }
}
function RomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, RomeComponent_div_8_div_1_Template, 2, 3, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner == null ? null : ctx_r0.data.content.full_width_banner.status);
  }
}
function RomeComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 14);
    \u0275\u0275element(2, "app-title", 15)(3, "app-theme-product", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(10, _c14))("slider", true)("productStyle", "product-standard")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function RomeComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 14);
    \u0275\u0275element(2, "app-title", 15)(3, "app-blog", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title);
    \u0275\u0275advance();
    \u0275\u0275property("sliderOption", ctx_r0.customOptionsItem4)("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c14));
  }
}
function RomeComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 14);
    \u0275\u0275element(2, "app-brand", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c14));
  }
}
function RomeComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36);
    \u0275\u0275element(1, "app-newsletter", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter);
  }
}
var _RomeComponent = class _RomeComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.customOptionsItem4 = customOptionsItem4;
    this.productFilterIds = [];
    this.showProductBox = 6;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
      }));
      const getCatProducts$ = this.store.dispatch(new GetCategoryProducts({
        category_ids: this.data?.content?.categories_products?.category_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBlogs$, getCatProducts$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
      if (this.data?.content?.categories_products && this.data?.content?.categories_products?.category_ids?.length) {
        this.selectCategory(this.data?.content?.categories_products?.category_ids[0]);
      }
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 4
            }
          }) });
          this.showProductBox = 4;
        }
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 6
            }
          }) });
          this.showProductBox = 6;
        }
      }
    });
  }
  selectCategory(id) {
    this.selectedCategoryId = id;
    this.categoryProduct$.subscribe((products) => {
      this.productFilterIds = products.filter((product) => product?.categories?.map((category) => category.id).includes(id))?.map((product) => product.id).slice(0, 5);
    });
  }
};
_RomeComponent.\u0275fac = function RomeComponent_Factory(t) {
  return new (t || _RomeComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_RomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RomeComponent, selectors: [["app-rome"]], inputs: { data: "data", slug: "slug" }, decls: 13, vars: 12, consts: [[1, "bg-effect"], ["class", "home-section-2 home-section-small section-b-space", 3, "ngStyle", 4, "ngIf"], ["class", "category-section-2", 4, "ngIf"], ["class", "overflow-hidden", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], [4, "ngIf"], ["class", "banner-section", 4, "ngIf"], ["class", "top-selling-section border-box section-b-space", 4, "ngIf"], ["class", "container-fluid-lg", 4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], ["class", "newsletter-section-2 section-b-space", 4, "ngIf"], [1, "home-section-2", "home-section-small", "section-b-space", 3, "ngStyle"], [3, "theme", "data"], [1, "category-section-2"], [1, "container-fluid-lg"], [3, "title"], [1, "row"], [1, "col-12"], [3, "theme", "categoryIds", "sliderOption"], [1, "overflow-hidden"], [3, "banners"], [1, "product-section"], [3, "data", "grid"], [3, "sellerIds"], [1, "banner-section"], [1, "row", "gy-xl-0", "gy-3"], [1, "col-lg-6"], [3, "image", "bgImage"], [1, "top-selling-section", "border-box", "section-b-space"], [3, "data"], ["class", "ratio_12", 4, "ngIf"], [1, "ratio_12"], [3, "productIds", "slider", "productStyle", "boxClass", "sliderOption"], [3, "sliderOption", "blogIds"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section-2", "section-b-space"]], template: function RomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, RomeComponent_section_1_Template, 2, 5, "section", 1)(2, RomeComponent_section_2_Template, 6, 9, "section", 2)(3, RomeComponent_section_3_Template, 5, 8, "section", 3)(4, RomeComponent_section_4_Template, 2, 2, "section", 4)(5, RomeComponent_ng_container_5_Template, 5, 5, "ng-container", 5)(6, RomeComponent_section_6_Template, 7, 8, "section", 6)(7, RomeComponent_section_7_Template, 3, 1, "section", 7)(8, RomeComponent_div_8_Template, 2, 1, "div", 8)(9, RomeComponent_section_9_Template, 4, 11, "section", 4)(10, RomeComponent_section_10_Template, 4, 6, "section", 5)(11, RomeComponent_section_11_Template, 3, 2, "section", 9)(12, RomeComponent_section_12_Template, 2, 3, "section", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_image_list == null ? null : ctx.data.content.categories_image_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.value_banners == null ? null : ctx.data.content.value_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.category_ids == null ? null : ctx.data.content.categories_products.category_ids.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.two_column_banners == null ? null : ctx.data.content.two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner == null ? null : ctx.data.content.full_width_banner.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgIf, NgStyle, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, BlogComponent, FourColumnProductComponent, CategoryProductFilterComponent, BrandComponent, TopSellerComponent] });
var RomeComponent = _RomeComponent;
__decorate([
  Select(ProductState.categoryProducts)
], RomeComponent.prototype, "categoryProduct$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], RomeComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RomeComponent, { className: "RomeComponent", filePath: "src\\app\\components\\themes\\rome\\rome.component.ts", lineNumber: 22 });
})();

// src/app/components/themes/widgets/wallet-offer/wallet-offer.component.ts
function WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275element(4, "img", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const offer_r2 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(offer_r2.coupon_code, $event) || (offer_r2.coupon_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "app-button", 11);
    \u0275\u0275listener("click", function WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template_app_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const offer_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyFunction(offer_r2.coupon_code));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const offer_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.storageURL + offer_r2.image_url, \u0275\u0275sanitizeUrl)("alt", offer_r2.coupon_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 11, "code"), " : ");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", offer_r2.coupon_code);
    \u0275\u0275twoWayProperty("ngModel", offer_r2.coupon_code);
    \u0275\u0275advance();
    \u0275\u0275classMap("bank-coupon btn");
    \u0275\u0275property("type", "button")("id", "coupon_btn")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "copy_code"));
  }
}
function WalletOfferComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WalletOfferComponent_ng_container_2_ng_container_1_ng_template_1_Template, 13, 15, "ng-template", 3);
    \u0275\u0275elementContainerEnd();
  }
}
function WalletOfferComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275template(1, WalletOfferComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const offer_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", offer_r2 == null ? null : offer_r2.status);
  }
}
var _WalletOfferComponent = class _WalletOfferComponent {
  constructor() {
    this.customOptionsItem3 = customOptionsItem3;
    this.storageURL = environment.storageURL;
  }
  copyFunction(txt) {
    navigator.clipboard.writeText(txt);
  }
};
_WalletOfferComponent.\u0275fac = function WalletOfferComponent_Factory(t) {
  return new (t || _WalletOfferComponent)();
};
_WalletOfferComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletOfferComponent, selectors: [["app-wallet-offer"]], inputs: { offers: "offers" }, decls: 3, vars: 2, consts: [[1, "slider-bank-3", "arrow-slider", "slick-height"], [3, "options"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], ["carouselSlide", ""], [4, "ngIf"], [1, "bank-offer"], [1, "bank-header"], [1, "bank-right", "w-100"], [1, "img-fluid", 3, "src", "alt"], [1, "bank-footer"], ["type", "text", 1, "form-control", 3, "ngModelChange", "name", "ngModel"], [3, "click", "type", "id", "spinner"]], template: function WalletOfferComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "owl-carousel-o", 1);
    \u0275\u0275template(2, WalletOfferComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.customOptionsItem3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.offers);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, CarouselComponent, CarouselSlideDirective, ButtonComponent, TranslatePipe] });
var WalletOfferComponent = _WalletOfferComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletOfferComponent, { className: "WalletOfferComponent", filePath: "src\\app\\components\\themes\\widgets\\wallet-offer\\wallet-offer.component.ts", lineNumber: 11 });
})();

// src/app/components/themes/widgets/deal/deal.component.ts
var _c012 = (a0) => ({ "background-image": a0 });
var _c15 = (a0) => ["/product/", a0];
var _c22 = (a0) => ({ width: a0 });
function DealComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementStart(4, "div", 13)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.label);
  }
}
function DealComponent_div_0_ng_container_8_1_ng_template_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "ul", 41)(2, "li")(3, "div", 42)(4, "div", 43)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "li")(8, "div", 42)(9, "div", 44)(10, "h6");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "li")(13, "div", 42)(14, "div", 45)(15, "h6");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "li")(18, "div", 42)(19, "div", 46)(20, "h6");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const deal_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.days);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.hours);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.minutes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(deal_r3 == null ? null : deal_r3.remainingTime == null ? null : deal_r3.remainingTime.seconds);
  }
}
function DealComponent_div_0_ng_container_8_1_ng_template_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, deal_r3.remainingTime.seconds < 0 ? "offer_closed" : ""));
  }
}
function DealComponent_div_0_ng_container_8_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "a", 17);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 19)(5, "li", 20)(6, "a", 21);
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 23)(9, "a", 24);
    \u0275\u0275listener("click", function DealComponent_div_0_ng_container_8_1_ng_template_0_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const deal_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToWishlist(deal_r3.product));
    });
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 25)(12, "a", 26);
    \u0275\u0275listener("click", function DealComponent_div_0_ng_container_8_1_ng_template_0_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const deal_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToCompare(deal_r3.product.id));
    });
    \u0275\u0275element(13, "i", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 28)(15, "ul", 29);
    \u0275\u0275element(16, "ngb-rating", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 17)(18, "h3", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h3", 32);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currencySymbol");
    \u0275\u0275elementStart(23, "del", 33);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34);
    \u0275\u0275element(27, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h5", 36);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "span", 37);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 38);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, DealComponent_div_0_ng_container_8_1_ng_template_0_div_37_Template, 22, 4, "div", 39)(38, DealComponent_div_0_ng_container_8_1_ng_template_0_ng_template_38_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const offer_close_r4 = \u0275\u0275reference(39);
    const deal_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.product_thumbnail == null ? null : deal_r3.product.product_thumbnail.original_url, \u0275\u0275sanitizeUrl)("alt", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c15, deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.slug));
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("ri-heart-", (deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.is_wishlist) ? "fill" : "line", "");
    \u0275\u0275classProp("theme-color", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.is_wishlist);
    \u0275\u0275advance(6);
    \u0275\u0275property("rate", (deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.rating_count) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.sale_price), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 21, deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.price));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(31, _c22, (deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.quantity) * 100 / 10 + "%"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 23, "sold"), " : ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", deal_r3 == null ? null : deal_r3.product == null ? null : deal_r3.product.quantity, " ", \u0275\u0275pipeBind1(33, 25, "items"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 27, "hurry_up_offer_end_in"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", deal_r3.remainingTime.seconds >= 0)("ngIfElse", offer_close_r4);
  }
}
function DealComponent_div_0_ng_container_8_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DealComponent_div_0_ng_container_8_1_ng_template_0_Template, 40, 33, "ng-template", 15);
  }
}
function DealComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DealComponent_div_0_ng_container_8_1_Template, 1, 0, null, 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const deal_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (deal_r3 == null ? null : deal_r3.status) && !!deal_r3.remainingTime);
  }
}
function DealComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, DealComponent_div_0_div_5_Template, 7, 1, "div", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "owl-carousel-o", 7);
    \u0275\u0275template(8, DealComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c012, "url(" + (ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.image_url)) + ")"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.dealSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.deals);
  }
}
var _DealComponent = class _DealComponent {
  constructor(config, store) {
    this.config = config;
    this.store = store;
    this.isDeal = new EventEmitter();
    this.dealSlider = singleSlider;
    this.deals = [];
    this.storageURL = environment.storageURL;
    config.max = 5;
    config.readonly = true;
  }
  ngOnChanges(changes) {
    let dealsArray = changes["data"]?.currentValue?.deals;
    this.product$.subscribe((products) => {
      dealsArray.map((deal) => {
        deal.product = products.find((product) => product.id === deal.product_id);
      });
      this.deals = dealsArray;
      this.isDeal.emit(this.deals?.length ? true : false);
      this.startTimers();
    });
  }
  startTimers() {
    for (let counterItem of this.deals) {
      const endDate = new Date(counterItem.end_date).getTime();
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      const timeDifference = endDate - currentTime;
      if (timeDifference > 0) {
        counterItem.remainingTime = this.calculateRemainingTime(timeDifference);
        setInterval(() => {
          counterItem.remainingTime = this.calculateRemainingTime(endDate - (/* @__PURE__ */ new Date()).getTime());
        }, 1e3);
      }
    }
  }
  calculateRemainingTime(timeDifference) {
    const days = Math.floor(timeDifference / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const minutes = Math.floor(timeDifference % (1e3 * 60 * 60) / (1e3 * 60));
    const seconds = Math.floor(timeDifference % (1e3 * 60) / 1e3);
    return { days, hours, minutes, seconds };
  }
  addToWishlist(product) {
    product["is_wishlist"] = !product["is_wishlist"];
    let action = product["is_wishlist"] ? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  addToCompare(id) {
    this.store.dispatch(new AddToCompare({ product_id: id }));
  }
};
_DealComponent.\u0275fac = function DealComponent_Factory(t) {
  return new (t || _DealComponent)(\u0275\u0275directiveInject(NgbRatingConfig), \u0275\u0275directiveInject(Store));
};
_DealComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealComponent, selectors: [["app-deal"]], inputs: { data: "data" }, outputs: { isDeal: "isDeal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["offer_close", ""], ["class", "product-bg-image", 3, "ngStyle", 4, "ngIf"], [1, "product-bg-image", 3, "ngStyle"], [1, "product-title", "product-warning"], [1, "product-box-4", "product-box-3", "rounded-0"], ["class", "deal-box", 4, "ngIf"], [1, "top-selling-slider", "product-arrow"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "deal-box"], [1, "circle-box"], [1, "shape-circle"], ["src", "assets/images/svg/circle.svg", "alt", "circle"], [1, "shape-text"], [4, "ngIf"], ["carouselSlide", ""], [1, "product-image"], ["href", "javascript:void(0)"], [1, "img-fluid", "product-image", 3, "src", "alt"], [1, "option"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Quick View"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "ri-eye-line"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Wishlist"], ["href", "javascript:void(0)", 1, "notifi-wishlist", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Compare"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-refresh-line"], [1, "product-detail", "text-center"], [1, "product-rating", "justify-content-center"], [3, "rate"], [1, "name", "w-100", "mx-auto", "text-center"], [1, "price", "theme-color", "d-flex", "justify-content-center"], [1, "delete-price"], [1, "progress", "custom-progressbar"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngStyle"], [1, "text-content"], [1, "text-dark"], [1, "ms-auto", "text-content"], ["class", "timer timer-2 ms-0 my-4", "id", "clockdiv-1", 4, "ngIf", "ngIfElse"], ["id", "clockdiv-1", 1, "timer", "timer-2", "ms-0", "my-4"], [1, "d-flex", "justify-content-center"], [1, "counter"], [1, "days"], [1, "hours"], [1, "minutes"], [1, "seconds"], [1, "mt-3"]], template: function DealComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DealComponent_div_0_Template, 9, 7, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.deals.length);
  }
}, dependencies: [NgForOf, NgIf, NgStyle, RouterLink, CarouselComponent, CarouselSlideDirective, NgbRating, CurrencySymbolPipe, TranslatePipe] });
var DealComponent = _DealComponent;
__decorate([
  Select(ProductState.productByIds)
], DealComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealComponent, { className: "DealComponent", filePath: "src\\app\\components\\themes\\widgets\\deal\\deal.component.ts", lineNumber: 19 });
})();

// src/app/components/themes/madrid/madrid.component.ts
var _c013 = () => [];
var _c16 = () => ({});
function MadridComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275element(1, "app-theme-home-banner", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "madrid")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function MadridComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275element(1, "app-theme-banner", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banners);
  }
}
function MadridComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-categories", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "madrid")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.category_ids) || \u0275\u0275pureFunction0(9, _c013))("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_image_list == null ? null : ctx_r0.data.content.categories_image_list.image_url);
  }
}
function MadridComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-wallet-offer", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.bank_wallet_offers == null ? null : ctx_r0.data.content.bank_wallet_offers.title);
    \u0275\u0275advance();
    \u0275\u0275property("offers", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.bank_wallet_offers == null ? null : ctx_r0.data.content.bank_wallet_offers.offers) || \u0275\u0275pureFunction0(4, _c013));
  }
}
function MadridComponent_section_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "app-deal", 30);
    \u0275\u0275listener("isDeal", function MadridComponent_section_5_div_4_Template_app_deal_isDeal_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getDeals($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days);
  }
}
function MadridComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18);
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275template(4, MadridComponent_section_5_div_4_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275element(6, "app-theme-product", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.status) && ctx_r0.enableDeal);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.status) && ctx_r0.enableDeal ? "col-xxl-8 col-lg-12 order-lg-1" : "col-xxl-12 col-lg-12 order-lg-1");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.products_list == null ? null : ctx_r0.data.content.product_with_deals.products_list.product_ids) || \u0275\u0275pureFunction0(14, _c013))("productStyle", "")("boxClass", "")("showItem", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.status) && (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_with_deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.deals == null ? null : ctx_r0.data.content.product_with_deals.deal_of_days.deals.length) || 0 ? ctx_r0.item : ctx_r0.item * 2)("sliderOption", ctx_r0.item >= 6 ? ctx_r0.productSlider6ItemMargin : \u0275\u0275pureFunction0(15, _c16))("slider", ctx_r0.item >= 6 ? true : false);
  }
}
function MadridComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 17);
    \u0275\u0275element(3, "app-title", 18)(4, "app-top-seller", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c013));
  }
}
function MadridComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 17)(2, "div", 33)(3, "div", 34);
    \u0275\u0275element(4, "app-image-link", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("offer-box hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner)("bgImage", false);
  }
}
function MadridComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 17)(2, "div", 38)(3, "div", 39);
    \u0275\u0275element(4, "app-image-link", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275element(6, "app-image-link", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-3 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_2)("bgImage", false);
  }
}
function MadridComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_4 == null ? null : ctx_r0.data.content.products_list_4.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_4 == null ? null : ctx_r0.data.content.products_list_4.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_5 == null ? null : ctx_r0.data.content.products_list_5.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_5 == null ? null : ctx_r0.data.content.products_list_5.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 17)(2, "div", 38)(3, "div", 40);
    \u0275\u0275element(4, "app-image-link", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275element(6, "app-image-link", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("banner-contain-3 h-100 pt-sm-5 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.delivery_banners == null ? null : ctx_r0.data.content.delivery_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-3 pt-lg-4 h-100 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.delivery_banners == null ? null : ctx_r0.data.content.delivery_banners.banner_2)("bgImage", false);
  }
}
function MadridComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_6 == null ? null : ctx_r0.data.content.products_list_6.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_6 == null ? null : ctx_r0.data.content.products_list_6.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_7 == null ? null : ctx_r0.data.content.products_list_7.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_7 == null ? null : ctx_r0.data.content.products_list_7.product_ids) || \u0275\u0275pureFunction0(10, _c013))("slider", true)("productStyle", "product-standard theme-plus")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSlider6ItemMargin);
  }
}
function MadridComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 42)(1, "div", 17);
    \u0275\u0275element(2, "app-title", 18)(3, "app-blog", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c013))("sliderOption", ctx_r0.customOptionsItem4);
  }
}
function MadridComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 44)(1, "div", 17);
    \u0275\u0275element(2, "app-brand", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c013));
  }
}
var _MadridComponent = class _MadridComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6Item = productSlider6Item;
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.customOptionsItem4 = customOptionsItem4;
    this.item = 2;
    this.enableDeal = true;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1,
        ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBlogs$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 4
            }
          }) });
        }
        this.item = this.enableDeal ? 2 : 4;
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 6
            }
          }) });
        }
        this.item = this.enableDeal ? 4 : 6;
      }
    });
  }
  getDeals(value) {
    this.enableDeal = Boolean(value);
  }
};
_MadridComponent.\u0275fac = function MadridComponent_Factory(t) {
  return new (t || _MadridComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_MadridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MadridComponent, selectors: [["app-madrid"]], inputs: { data: "data", slug: "slug" }, decls: 18, vars: 18, consts: [["class", "home-section-2 home-section-bg pt-0 overflow-hidden", 4, "ngIf"], ["class", "banner-section ratio_60", 4, "ngIf"], ["class", "category-section-3", 4, "ngIf"], ["class", "product-section-3", 4, "ngIf"], ["class", "bank-section overflow-hidden", 4, "ngIf"], ["class", "product-section product-section-3", 4, "ngIf"], [4, "ngIf"], ["class", "offer-section sale-banner", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], ["class", "banner-section", 4, "ngIf"], ["class", "section-b-space", 4, "ngIf"], ["class", "brand-effect pt-0 section-b-space", 4, "ngIf"], [1, "home-section-2", "home-section-bg", "pt-0", "overflow-hidden"], [3, "theme", "data"], [1, "banner-section", "ratio_60"], [3, "banners"], [1, "category-section-3"], [1, "container-fluid-lg"], [3, "title"], [3, "theme", "sliderOption", "categoryIds", "image"], [1, "product-section-3"], [3, "productIds", "slider", "productStyle", "boxClass", "sliderOption"], [1, "bank-section", "overflow-hidden"], [3, "offers"], [1, "product-section", "product-section-3"], [1, "row", "g-sm-4", "g-3"], ["class", "col-xxl-4  order-lg-2 d-xxl-block d-none", 4, "ngIf"], [1, "col-xxl-8", "col-lg-12", "order-lg-1"], [3, "productIds", "productStyle", "boxClass", "showItem", "sliderOption", "slider"], [1, "col-xxl-4", "order-lg-2", "d-xxl-block", "d-none"], [3, "isDeal", "data"], [3, "sellerIds"], [1, "offer-section", "sale-banner"], [1, "row"], [1, "col-12"], [3, "image", "bgImage"], [1, "product-section"], [1, "banner-section"], [1, "row", "gy-lg-0", "gy-3"], [1, "col-lg-6"], [1, "col-lg-8"], [1, "col-lg-4"], [1, "section-b-space"], [3, "blogIds", "sliderOption"], [1, "brand-effect", "pt-0", "section-b-space"], [3, "brandIds"]], template: function MadridComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MadridComponent_section_0_Template, 2, 2, "section", 0)(1, MadridComponent_section_1_Template, 2, 3, "section", 1)(2, MadridComponent_section_2_Template, 4, 10, "section", 2)(3, MadridComponent_section_3_Template, 4, 11, "section", 3)(4, MadridComponent_section_4_Template, 4, 5, "section", 4)(5, MadridComponent_section_5_Template, 7, 16, "section", 5)(6, MadridComponent_ng_container_6_Template, 5, 5, "ng-container", 6)(7, MadridComponent_section_7_Template, 5, 4, "section", 7)(8, MadridComponent_section_8_Template, 4, 11, "section", 8)(9, MadridComponent_section_9_Template, 4, 11, "section", 8)(10, MadridComponent_section_10_Template, 7, 8, "section", 9)(11, MadridComponent_section_11_Template, 4, 11, "section", 8)(12, MadridComponent_section_12_Template, 4, 11, "section", 8)(13, MadridComponent_section_13_Template, 7, 8, "section", 9)(14, MadridComponent_section_14_Template, 4, 11, "section", 8)(15, MadridComponent_section_15_Template, 4, 11, "section", 8)(16, MadridComponent_section_16_Template, 4, 6, "section", 10)(17, MadridComponent_section_17_Template, 3, 2, "section", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_image_list == null ? null : ctx.data.content.categories_image_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.bank_wallet_offers == null ? null : ctx.data.content.bank_wallet_offers.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_with_deals == null ? null : ctx.data.content.product_with_deals.deal_of_days == null ? null : ctx.data.content.product_with_deals.deal_of_days.deals == null ? null : ctx.data.content.product_with_deals.deal_of_days.deals.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_with_deals == null ? null : ctx.data.content.product_with_deals.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner == null ? null : ctx.data.content.full_width_banner.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.two_column_banners == null ? null : ctx.data.content.two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_4 == null ? null : ctx.data.content.products_list_4.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_5 == null ? null : ctx.data.content.products_list_5.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.delivery_banners == null ? null : ctx.data.content.delivery_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_6 == null ? null : ctx.data.content.products_list_6.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_7 == null ? null : ctx.data.content.products_list_7.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
  }
}, dependencies: [NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, BlogComponent, WalletOfferComponent, DealComponent, BrandComponent, TopSellerComponent] });
var MadridComponent = _MadridComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], MadridComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MadridComponent, { className: "MadridComponent", filePath: "src\\app\\components\\themes\\madrid\\madrid.component.ts", lineNumber: 20 });
})();

// src/app/components/themes/moscow/moscow.component.ts
var _c014 = () => [];
function MoscowComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "app-theme-home-banner", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "denver")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function MoscowComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 3);
    \u0275\u0275element(2, "app-theme-categories", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "moscow")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(6, _c014))("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.title);
  }
}
function MoscowComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 3)(2, "div", 8)(3, "div", 17);
    \u0275\u0275element(4, "app-theme-banner", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("full_width");
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupons);
  }
}
function MoscowComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "app-image-link", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-2 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product_with_banner == null ? null : ctx_r0.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx_r0.data.content.slider_product_with_banner.left_side_banners.banner_1)("bgImage", false);
  }
}
function MoscowComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "div", 3);
    \u0275\u0275element(2, "app-brand", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c014));
  }
}
function MoscowComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 24);
    \u0275\u0275element(2, "app-newsletter", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var _MoscowComponent = class _MoscowComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6Item = productSlider6Item;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 4
            }
          }) });
        }
      } else {
        if (this.productSlider6Item && this.productSlider6Item.responsive && this.productSlider6Item.responsive["1065"]) {
          this.productSlider6Item = __spreadProps(__spreadValues({}, this.productSlider6Item), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6Item.responsive), {
            1065: {
              items: 6
            }
          }) });
        }
      }
    });
  }
};
_MoscowComponent.\u0275fac = function MoscowComponent_Factory(t) {
  return new (t || _MoscowComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_MoscowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoscowComponent, selectors: [["app-moscow"]], inputs: { data: "data", slug: "slug" }, decls: 19, vars: 27, consts: [["class", "home-section-2 home-section-bg pt-md-0 pt-3 overflow-hidden", 4, "ngIf"], ["class", "book-category", 4, "ngIf"], [1, "product-section"], [1, "container-fluid-lg"], [3, "title"], [3, "productIds", "slider", "sliderOption"], [4, "ngIf"], [1, "top-selling-section", "no-bg-category"], [1, "row"], [3, "ngClass"], [3, "data", "col"], ["class", "col-xl-3 col-lg-4 d-lg-block d-none", 4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], [1, "home-section-2", "home-section-bg", "pt-md-0", "pt-3", "overflow-hidden"], [3, "theme", "data"], [1, "book-category"], [3, "theme", "sliderOption", "categoryIds", "title"], [1, "col-12", "sale-banner"], [3, "banners"], [1, "col-xl-3", "col-lg-4", "d-lg-block", "d-none"], [1, "ratio_156"], [3, "image", "bgImage"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"], [3, "data"]], template: function MoscowComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MoscowComponent_section_0_Template, 2, 2, "section", 0)(1, MoscowComponent_section_1_Template, 3, 7, "section", 1);
    \u0275\u0275elementStart(2, "section", 2)(3, "div", 3);
    \u0275\u0275element(4, "app-title", 4)(5, "app-theme-product", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MoscowComponent_section_6_Template, 5, 5, "section", 6);
    \u0275\u0275elementStart(7, "section", 7)(8, "div", 3)(9, "div", 8)(10, "div", 9);
    \u0275\u0275element(11, "app-four-column-product", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MoscowComponent_div_12_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "section", 2)(14, "div", 3);
    \u0275\u0275element(15, "app-title", 4)(16, "app-theme-product", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, MoscowComponent_section_17_Template, 3, 2, "section", 12)(18, MoscowComponent_ng_container_18_Template, 3, 1, "ng-container", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(25, _c014))("slider", true)("sliderOption", ctx.productSlider6Item);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupons == null ? null : ctx.data.content.coupons.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners.status) ? "col-xl-9 col-lg-8" : "col-xxl-12 col-lg-12");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.slider_products)("col", "col-xl-4 col-lg-6 col-md-4 col-sm-6");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners.status);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(26, _c014))("slider", true)("sliderOption", ctx.productSlider6Item);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgClass, NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, BannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, FourColumnProductComponent, BrandComponent] });
var MoscowComponent = _MoscowComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], MoscowComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoscowComponent, { className: "MoscowComponent", filePath: "src\\app\\components\\themes\\moscow\\moscow.component.ts", lineNumber: 17 });
})();

// src/app/components/themes/widgets/service/service.component.ts
function ServiceComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementStart(3, "div", 6)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h6", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.storageURL + service_r1.image_url, \u0275\u0275sanitizeUrl)("alt", service_r1 == null ? null : service_r1.sub_title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1 == null ? null : service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1 == null ? null : service_r1.sub_title);
  }
}
var _ServiceComponent = class _ServiceComponent {
  constructor() {
    this.storageURL = environment.storageURL;
  }
};
_ServiceComponent.\u0275fac = function ServiceComponent_Factory(t) {
  return new (t || _ServiceComponent)();
};
_ServiceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceComponent, selectors: [["app-service"]], inputs: { data: "data" }, decls: 4, vars: 1, consts: [[1, "service-section"], [1, "container-fluid-lg"], [1, "row", "g-3", "row-cols-xxl-5", "row-cols-lg-3", "row-cols-sm-2"], [4, "ngFor", "ngForOf"], [1, "service-contain-2"], [1, "icon-width", 3, "src", "alt"], [1, "service-detail"], [1, "text-content"]], template: function ServiceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275template(3, ServiceComponent_div_3_Template, 8, 4, "div", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.data);
  }
}, dependencies: [NgForOf] });
var ServiceComponent = _ServiceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceComponent, { className: "ServiceComponent", filePath: "src\\app\\components\\themes\\widgets\\service\\service.component.ts", lineNumber: 10 });
})();

// src/app/components/themes/berlin/berlin.component.ts
var _c015 = () => [];
function BerlinComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-home-banner", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "berlin")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function BerlinComponent_app_service_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services_banner == null ? null : ctx_r0.data.content.services_banner.services) || \u0275\u0275pureFunction0(1, _c015));
  }
}
function BerlinComponent_section_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-title", 18)(2, "app-theme-product", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.product_ids) || \u0275\u0275pureFunction0(9, _c015))("productStyle", "product-classic")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSliderMargin)("slider", true);
  }
}
function BerlinComponent_section_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-title", 18)(2, "app-theme-categories", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.category_ids) || \u0275\u0275pureFunction0(7, _c015))("theme", "paris");
  }
}
function BerlinComponent_section_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 21)(2, "div", 22);
    \u0275\u0275element(3, "app-image-link", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275element(5, "app-image-link", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.banner_2)("bgImage", false);
  }
}
function BerlinComponent_section_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "app-title", 18)(2, "app-theme-product", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.product_ids) || \u0275\u0275pureFunction0(9, _c015))("productStyle", "product-classic")("boxClass", "product-box-bg")("sliderOption", ctx_r0.productSliderMargin)("slider", true);
  }
}
function BerlinComponent_section_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section");
    \u0275\u0275element(2, "app-title", 25)(3, "app-top-seller", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.store_ids) || \u0275\u0275pureFunction0(2, _c015));
  }
}
function BerlinComponent_section_2_div_9_app_theme_categories_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-categories", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.title)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(4, _c015));
  }
}
function BerlinComponent_section_2_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "app-image-link", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("home-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.banner_1)("bgImage", false);
  }
}
function BerlinComponent_section_2_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.product_ids);
  }
}
function BerlinComponent_section_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275template(2, BerlinComponent_section_2_div_9_app_theme_categories_2_Template, 1, 5, "app-theme-categories", 29)(3, BerlinComponent_section_2_div_9_div_3_Template, 2, 4, "div", 30)(4, BerlinComponent_section_2_div_9_div_4_Template, 5, 4, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list == null ? null : ctx_r0.data.content.main_content.sidebar.categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners == null ? null : ctx_r0.data.content.main_content.sidebar.right_side_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products == null ? null : ctx_r0.data.content.main_content.sidebar.sidebar_products.status);
  }
}
function BerlinComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275template(4, BerlinComponent_section_2_div_4_Template, 3, 10, "div", 14)(5, BerlinComponent_section_2_div_5_Template, 3, 8, "div", 14)(6, BerlinComponent_section_2_div_6_Template, 6, 8, "div", 14)(7, BerlinComponent_section_2_div_7_Template, 3, 10, "div", 15)(8, BerlinComponent_section_2_ng_container_8_Template, 4, 3, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BerlinComponent_section_2_div_9_Template, 5, 3, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section1_products == null ? null : ctx_r0.data.content.main_content.section1_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list == null ? null : ctx_r0.data.content.main_content.section2_categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners == null ? null : ctx_r0.data.content.main_content.section3_two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.section4_products == null ? null : ctx_r0.data.content.main_content.section4_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.seller == null ? null : ctx_r0.data.content.main_content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.main_content == null ? null : ctx_r0.data.content.main_content.sidebar == null ? null : ctx_r0.data.content.main_content.sidebar.status);
  }
}
function BerlinComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 11)(2, "div", 38)(3, "div", 39);
    \u0275\u0275element(4, "app-image-link", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("home-contain hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_width_banner)("bgImage", false);
  }
}
function BerlinComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 11);
    \u0275\u0275element(2, "app-title", 18)(3, "app-theme-product", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_list_1 == null ? null : ctx_r0.data.content.product_list_1.title)("description", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_list_1 == null ? null : ctx_r0.data.content.product_list_1.description);
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_list_1 == null ? null : ctx_r0.data.content.product_list_1.product_ids) || \u0275\u0275pureFunction0(5, _c015));
  }
}
function BerlinComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 40)(1, "div", 11);
    \u0275\u0275element(2, "app-brand", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c015));
  }
}
function BerlinComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 42);
    \u0275\u0275element(1, "app-newsletter", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter) || null);
  }
}
var _BerlinComponent = class _BerlinComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider;
    this.productSliderMargin = productSliderMargin;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.main_content?.seller?.store_ids?.join()
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
      this.route.queryParams.subscribe((params) => {
        if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
          if (this.productSliderMargin && this.productSliderMargin.responsive && this.productSliderMargin.responsive["1030"]) {
            this.productSliderMargin = __spreadProps(__spreadValues({}, this.productSliderMargin), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSliderMargin.responsive), {
              1030: {
                items: 3
              }
            }) });
          }
        } else {
          if (this.productSliderMargin && this.productSliderMargin.responsive && this.productSliderMargin.responsive["1030"]) {
            this.productSliderMargin = __spreadProps(__spreadValues({}, this.productSliderMargin), { items: 5, responsive: __spreadProps(__spreadValues({}, this.productSliderMargin.responsive), {
              1030: {
                items: 5
              }
            }) });
          }
        }
      });
    }
  }
};
_BerlinComponent.\u0275fac = function BerlinComponent_Factory(t) {
  return new (t || _BerlinComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_BerlinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BerlinComponent, selectors: [["app-berlin"]], inputs: { data: "data", slug: "slug" }, decls: 7, vars: 7, consts: [["class", "home-section pt-2 ratio_50", 4, "ngIf"], [3, "data", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], ["class", "banner-section", 4, "ngIf"], [4, "ngIf"], ["class", "brand-effect", 4, "ngIf"], ["class", "newsletter-section section-b-space", 4, "ngIf"], [1, "home-section", "pt-2", "ratio_50"], [3, "theme", "data"], [3, "data"], [1, "product-section"], [1, "container-fluid-lg"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-9", "col-xl-8"], ["class", "section-b-space", 4, "ngIf"], ["class", "", 4, "ngIf"], ["class", "col-xxl-3 col-xl-4 d-none d-xl-block", 4, "ngIf"], [1, "section-b-space"], [3, "title", "description"], [3, "productIds", "productStyle", "boxClass", "sliderOption", "slider"], [3, "sliderOption", "categoryIds", "theme"], [1, "row", "g-md-4", "g-3"], [1, "col-xxl-6", "col-xl-12", "col-lg-6"], [3, "image", "bgImage"], [1, ""], [3, "title"], [3, "sellerIds"], [1, "col-xxl-3", "col-xl-4", "d-none", "d-xl-block"], [1, "position-sticky"], [3, "title", "categoryIds", "style", 4, "ngIf"], ["class", "ratio_156 section-t-space", 4, "ngIf"], ["class", "section-t-space", 4, "ngIf"], [3, "title", "categoryIds"], [1, "ratio_156", "section-t-space"], [1, "section-t-space"], [1, "category-menu"], [3, "productIds"], [1, "banner-section"], [1, "row"], [1, "col-12"], [1, "brand-effect"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"]], template: function BerlinComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BerlinComponent_section_0_Template, 2, 2, "section", 0)(1, BerlinComponent_app_service_1_Template, 1, 2, "app-service", 1)(2, BerlinComponent_section_2_Template, 10, 8, "section", 2)(3, BerlinComponent_section_3_Template, 5, 4, "section", 3)(4, BerlinComponent_section_4_Template, 4, 6, "section", 4)(5, BerlinComponent_section_5_Template, 3, 2, "section", 5)(6, BerlinComponent_section_6_Template, 2, 1, "section", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services_banner == null ? null : ctx.data.content.services_banner.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_width_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.main_content == null ? null : ctx.data.content.main_content.section4_products == null ? null : ctx.data.content.main_content.section4_products.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, ServiceComponent, BrandComponent, TopSellerComponent] });
var BerlinComponent = _BerlinComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], BerlinComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BerlinComponent, { className: "BerlinComponent", filePath: "src\\app\\components\\themes\\berlin\\berlin.component.ts", lineNumber: 19 });
})();

// src/app/components/themes/denver/denver.component.ts
var _c016 = () => [];
function DenverComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275element(1, "app-theme-home-banner", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("theme", "denver")("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function DenverComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4);
    \u0275\u0275element(2, "app-theme-categories", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "paris")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(6, _c016))("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.image_url);
  }
}
function DenverComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 4)(2, "div");
    \u0275\u0275element(3, "app-title", 16)(4, "app-theme-product", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(10, _c016))("slider", true)("sliderOption", ctx_r0.productSlider6ItemMargin)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4)(2, "div", 18)(3, "div", 19);
    \u0275\u0275element(4, "app-image-link", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275element(6, "app-image-link", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_1)("bgImage", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.two_column_banners == null ? null : ctx_r0.data.content.two_column_banners.banner_2)("bgImage", false);
  }
}
function DenverComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 4);
    \u0275\u0275element(3, "app-title", 16)(4, "app-top-seller", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c016));
  }
}
function DenverComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "app-image-link", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("banner-contain-2 hover-effect");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product_with_banner == null ? null : ctx_r0.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx_r0.data.content.slider_product_with_banner.left_side_banners.banner_1)("bgImage", false);
  }
}
function DenverComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 4)(2, "div", 26);
    \u0275\u0275element(3, "app-image-link", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.coupon_banner)("bgImage", false);
  }
}
function DenverComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 4)(2, "div");
    \u0275\u0275element(3, "app-title", 16)(4, "app-theme-product", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(10, _c016))("slider", true)("sliderOption", ctx_r0.productSlider6ItemMargin)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 4)(2, "div");
    \u0275\u0275element(3, "app-title", 16)(4, "app-theme-product", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(10, _c016))("slider", true)("sliderOption", ctx_r0.productSlider6ItemMargin)("productStyle", "product-solid")("boxClass", "product-box-bg");
  }
}
function DenverComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 27)(1, "div", 4);
    \u0275\u0275element(2, "app-brand", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c016));
  }
}
function DenverComponent_section_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 29);
    \u0275\u0275element(1, "app-newsletter", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.news_letter);
  }
}
var _DenverComponent = class _DenverComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.categorySlider = categorySlider9;
    this.productSlider6ItemMargin = productSlider6ItemMargin;
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      document.body.classList.add("skeleton-body");
      forkJoin([getProducts$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 4
            }
          }) });
        }
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive["1180"]) {
          this.productSlider6ItemMargin = __spreadProps(__spreadValues({}, this.productSlider6ItemMargin), { items: 6, responsive: __spreadProps(__spreadValues({}, this.productSlider6ItemMargin.responsive), {
            1180: {
              items: 6
            }
          }) });
        }
      }
    });
  }
};
_DenverComponent.\u0275fac = function DenverComponent_Factory(t) {
  return new (t || _DenverComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_DenverComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DenverComponent, selectors: [["app-denver"]], inputs: { data: "data", slug: "slug" }, decls: 16, vars: 14, consts: [["class", "home-section-2 home-section-bg pt-md-0 pt-3 overflow-hidden", 4, "ngIf"], [4, "ngIf"], ["class", "product-section product-section-3", 4, "ngIf"], [1, "top-selling-section", "no-bg-category"], [1, "container-fluid-lg"], [1, "row"], ["class", "col-xl-3 col-lg-4 d-lg-block d-none", 4, "ngIf"], [3, "ngClass"], [3, "data", "col"], ["class", "section-t-space", 4, "ngIf"], ["class", "brand-effect border-brand", 4, "ngIf"], ["class", "newsletter-section section-b-space", 4, "ngIf"], [1, "home-section-2", "home-section-bg", "pt-md-0", "pt-3", "overflow-hidden"], [3, "theme", "data"], [3, "theme", "sliderOption", "categoryIds", "image"], [1, "product-section", "product-section-3"], [3, "title"], [3, "productIds", "slider", "sliderOption", "productStyle", "boxClass"], [1, "row", "g-4"], [1, "col-xxl-8", "col-xl-12", "col-md-7"], [3, "image", "bgImage"], [1, "col-xxl-4", "col-xl-12", "col-md-5"], [3, "sellerIds"], [1, "col-xl-3", "col-lg-4", "d-lg-block", "d-none"], [1, "ratio_156"], [1, "section-t-space"], [1, "banner-contain"], [1, "brand-effect", "border-brand"], [3, "brandIds"], [1, "newsletter-section", "section-b-space"], [3, "data"]], template: function DenverComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DenverComponent_section_0_Template, 2, 2, "section", 0)(1, DenverComponent_section_1_Template, 3, 7, "section", 1)(2, DenverComponent_section_2_Template, 5, 11, "section", 2)(3, DenverComponent_section_3_Template, 7, 4, "section", 1)(4, DenverComponent_ng_container_4_Template, 5, 5, "ng-container", 1);
    \u0275\u0275elementStart(5, "section", 3)(6, "div", 4)(7, "div", 5);
    \u0275\u0275template(8, DenverComponent_div_8_Template, 3, 4, "div", 6);
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275element(10, "app-four-column-product", 8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, DenverComponent_section_11_Template, 4, 2, "section", 9)(12, DenverComponent_section_12_Template, 5, 11, "section", 2)(13, DenverComponent_section_13_Template, 5, 11, "section", 2)(14, DenverComponent_section_14_Template, 3, 2, "section", 10)(15, DenverComponent_section_15_Template, 2, 1, "section", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.two_column_banners == null ? null : ctx.data.content.two_column_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners == null ? null : ctx.data.content.slider_product_with_banner.left_side_banners.status) ? "col-xl-9 col-lg-8" : "col-xxl-12 col-lg-12");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product_with_banner == null ? null : ctx.data.content.slider_product_with_banner.slider_products)("col", "col-xl-4 col-lg-6 col-md-4 col-sm-6");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupon_banner == null ? null : ctx.data.content.coupon_banner.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.coupon_banner));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.news_letter == null ? null : ctx.data.content.news_letter.status);
  }
}, dependencies: [NgClass, NgIf, TitleComponent, ImageLinkComponent, HomeBannerComponent, CategoriesComponent2, ProductComponent, NewsletterComponent, FourColumnProductComponent, BrandComponent, TopSellerComponent] });
var DenverComponent = _DenverComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], DenverComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DenverComponent, { className: "DenverComponent", filePath: "src\\app\\components\\themes\\denver\\denver.component.ts", lineNumber: 19 });
})();

// src/app/components/themes/cairo/cairo.component.ts
var _c017 = (a0) => ({ "background-image": a0 });
var _c17 = () => [];
function CairoComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "app-box-search");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("category_search");
  }
}
function CairoComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div")(5, "div", 27)(6, "div")(7, "div", 28);
    \u0275\u0275element(8, "span", 29)(9, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "div", 28);
    \u0275\u0275element(12, "span", 29)(13, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 31)(15, "div", 28);
    \u0275\u0275element(16, "span", 29)(17, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 32)(19, "div", 28);
    \u0275\u0275element(20, "span", 29)(21, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "div", 28);
    \u0275\u0275element(24, "span", 29)(25, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "div", 28);
    \u0275\u0275element(28, "span", 29)(29, "span", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(30, "app-theme-categories", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("theme", "cairo")("sliderOption", ctx_r0.categorySlider)("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(5, _c17));
  }
}
function CairoComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 24);
    \u0275\u0275element(2, "app-title", 37)(3, "app-theme-product", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c17))("showItem", ctx_r0.showProductBox);
  }
}
function CairoComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 24);
    \u0275\u0275element(2, "app-title", 37)(3, "app-theme-categories", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list_2 == null ? null : ctx_r0.data.content.categories_icon_list_2.title);
    \u0275\u0275advance();
    \u0275\u0275styleMap("cairo_classic");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list_2 == null ? null : ctx_r0.data.content.categories_icon_list_2.category_ids) || \u0275\u0275pureFunction0(7, _c17))("sliderOption", ctx_r0.categorySlider);
  }
}
function CairoComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 41)(1, "div", 24)(2, "div", 42)(3, "div", 43)(4, "div", 44)(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275element(13, "i", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 47);
    \u0275\u0275element(15, "app-theme-product", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c017, "url(" + (ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.image_url)) + ")"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 9, "view_all"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_product == null ? null : ctx_r0.data.content.slider_product.product_ids) || \u0275\u0275pureFunction0(13, _c17))("slider", true)("sliderOption", ctx_r0.productSlider);
  }
}
function CairoComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "div", 24);
    \u0275\u0275element(3, "app-title", 37)(4, "app-top-seller", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.title);
    \u0275\u0275advance();
    \u0275\u0275property("sellerIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.seller == null ? null : ctx_r0.data.content.seller.store_ids) || \u0275\u0275pureFunction0(4, _c17));
  }
}
function CairoComponent_section_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36);
    \u0275\u0275element(1, "app-category-product-filter", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content)("grid", ctx_r0.showProductBox);
  }
}
function CairoComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 51)(1, "div", 24);
    \u0275\u0275element(2, "app-title", 37)(3, "app-blog", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.title);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(6, _c17))("sliderOption", ctx_r0.bannerSlider)("description", true);
  }
}
function CairoComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 53)(1, "div", 24);
    \u0275\u0275element(2, "app-brand", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brands == null ? null : ctx_r0.data.content.brands.brand_ids) || \u0275\u0275pureFunction0(1, _c17));
  }
}
var _CairoComponent = class _CairoComponent {
  constructor(store, themeOptionService, route) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route = route;
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
    this.storageURL = environment.storageURL;
    this.categorySlider = categorySlider9;
    this.productSlider = customOptionsItem3;
    this.bannerSlider = bannerSlider;
    this.showProductBox = 6;
    this.productFilterIds = [];
    this.categories = [];
  }
  ngOnInit() {
    this.themeOptionService.isDigitalProductBox = true;
    if (this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(",")
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));
      const getBlogs$ = this.store.dispatch(new GetBlogs({
        status: 1
      }));
      const getCategoryProduct$ = this.store.dispatch(new GetCategoryProducts({
        category_ids: this.data.content?.categories_products?.category_ids?.join(",")
      }));
      document.body.classList.add("skeleton-body");
      document.body.classList.add("cairo");
      forkJoin([getProducts$, getBrand$, getStore$, getBlogs$, getCategoryProduct$]).subscribe({
        complete: () => {
          document.body.classList.remove("skeleton-body");
          this.themeOptionService.preloader = false;
        }
      });
    }
    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.data["data"].theme_option.productBox === "digital") {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1050"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 3, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1050: {
              items: 3
            }
          }) });
          this.showProductBox = 4;
        }
      } else {
        if (this.productSlider && this.productSlider.responsive && this.productSlider.responsive["1050"]) {
          this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), { items: 4, responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
            1050: {
              items: 4
            }
          }) });
          this.showProductBox = 6;
        }
      }
    });
  }
  ngOnDestroy() {
    document.body.classList.remove("cairo");
  }
};
_CairoComponent.\u0275fac = function CairoComponent_Factory(t) {
  return new (t || _CairoComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(ActivatedRoute));
};
_CairoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CairoComponent, selectors: [["app-cairo"]], inputs: { data: "data", slug: "slug" }, decls: 29, vars: 14, consts: [[1, "home-search-full", "pt-0", "gradient-home"], [1, "container-fluid", "p-0"], [1, "row", "m-0"], [1, "col-12", "p-0"], [1, "slider-animate"], ["alt", "Background Image", 1, "home-contain", "rounded-0", "p-0", 3, "ngStyle"], [1, "skeleton-banner-xl"], [1, "skeleton-text-wrap"], [1, "placeholder", "col-7"], [1, "placeholder", "col-5"], [1, "placeholder", "col-4"], [1, "placeholder", "col-6"], [1, "home-detail", "p-center", "text-center", "home-overlay", "position-relative"], [1, "content"], ["class", "search-box input-group", 4, "ngIf"], ["class", "feature-category-panel pt-0", 4, "ngIf"], ["class", "product-section", 4, "ngIf"], ["class", "category-panel section-b-space m-0", 4, "ngIf"], ["class", "featured-sec section-b-space", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "section-b-space", 4, "ngIf"], ["class", "brand-effect pt-0 section-b-space", 4, "ngIf"], [1, "search-box", "input-group"], [1, "feature-category-panel", "pt-0"], [1, "container-fluid-lg"], [1, "row", "justify-content-center"], [1, "col-sm-9", "position-relative"], [1, "category-skeleton", "feature-panel-slider", "row", "row-cols-xl-6", "row-cols-lg-5", "row-cols-md-4", "row-cols-sm-3", "row-cols-2"], [1, "cate-box"], [1, "placeholder-text"], [1, "placeholder-text", "w-75", "mt-3"], [1, "d-sm-inline-block", "d-none"], [1, "d-md-inline-block", "d-none"], [1, "d-lg-inline-block", "d-none"], [1, "d-xl-inline-block", "d-none"], [3, "theme", "sliderOption", "categoryIds"], [1, "product-section"], [3, "title"], [3, "productIds", "showItem"], [1, "category-panel", "section-b-space", "m-0"], [3, "categoryIds", "sliderOption"], [1, "featured-sec", "section-b-space", 3, "ngStyle"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-3", "col-lg-4"], [1, "feature-title"], [1, "btn", "theme-bg-color", "text-light", "mt-sm-4", "mt-3"], ["data-feather", "arrow-right"], [1, "col-xxl-9", "col-lg-8"], [3, "productIds", "slider", "sliderOption"], [3, "sellerIds"], [3, "data", "grid"], [1, "section-b-space"], [3, "blogIds", "sliderOption", "description"], [1, "brand-effect", "pt-0", "section-b-space"], [3, "brandIds"]], template: function CairoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "div", 6)(8, "div", 7);
    \u0275\u0275element(9, "span", 8)(10, "span", 9)(11, "span", 10)(12, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div")(15, "div", 13)(16, "h1");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CairoComponent_div_20_Template, 2, 2, "div", 14);
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275template(21, CairoComponent_section_21_Template, 31, 6, "section", 15)(22, CairoComponent_section_22_Template, 4, 8, "section", 16)(23, CairoComponent_section_23_Template, 4, 8, "section", 17)(24, CairoComponent_section_24_Template, 16, 14, "section", 18)(25, CairoComponent_ng_container_25_Template, 5, 5, "ng-container", 19)(26, CairoComponent_section_26_Template, 2, 2, "section", 16)(27, CairoComponent_section_27_Template, 4, 7, "section", 20)(28, CairoComponent_section_28_Template, 3, 2, "section", 21);
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c017, "url(" + (ctx.storageURL + (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.image_url)) + ")"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.sub_title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.main_banner == null ? null : ctx.data.content.home_banner.main_banner.search_enable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list_2 == null ? null : ctx.data.content.categories_icon_list_2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_product == null ? null : ctx.data.content.slider_product.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.seller == null ? null : ctx.data.content.seller.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.category_ids == null ? null : ctx.data.content.categories_products.category_ids.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.brand_ids) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brands == null ? null : ctx.data.content.brands.status));
  }
}, dependencies: [NgIf, NgStyle, TitleComponent, SearchComponent, CategoriesComponent2, ProductComponent, BlogComponent, CategoryProductFilterComponent, BrandComponent, TopSellerComponent, TranslatePipe] });
var CairoComponent = _CairoComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CairoComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CairoComponent, { className: "CairoComponent", filePath: "src\\app\\components\\themes\\cairo\\cairo.component.ts", lineNumber: 21 });
})();

// src/app/components/themes/themes.component.ts
function ThemesComponent_app_paris_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-paris", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_tokyo_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tokyo", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_osaka_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-osaka", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_rome_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-rome", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_madrid_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-madrid", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_berlin_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-berlin", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_denver_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-denver", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_moscow_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-moscow", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function ThemesComponent_app_cairo_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-cairo", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
var _ThemesComponent = class _ThemesComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.route.queryParams.subscribe((params) => {
      this.themeOptionService.preloader = true;
      this.activeTheme$.subscribe((theme) => {
        this.theme = params["theme"] ? params["theme"] : theme;
        this.store.dispatch(new GetHomePage(params["theme"] ? params["theme"] : theme)).subscribe((data) => {
          this.homePage = data.theme.homePage;
          this.themeOptionService.preloader = false;
        });
      });
    });
    document.body.classList.add("home");
  }
  ngOnDestroy() {
    document.body.classList.remove("home");
  }
};
_ThemesComponent.\u0275fac = function ThemesComponent_Factory(t) {
  return new (t || _ThemesComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
};
_ThemesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemesComponent, selectors: [["app-themes"]], decls: 9, vars: 9, consts: [[3, "data", "slug", 4, "ngIf"], [3, "data", "slug"]], template: function ThemesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemesComponent_app_paris_0_Template, 1, 2, "app-paris", 0)(1, ThemesComponent_app_tokyo_1_Template, 1, 2, "app-tokyo", 0)(2, ThemesComponent_app_osaka_2_Template, 1, 2, "app-osaka", 0)(3, ThemesComponent_app_rome_3_Template, 1, 2, "app-rome", 0)(4, ThemesComponent_app_madrid_4_Template, 1, 2, "app-madrid", 0)(5, ThemesComponent_app_berlin_5_Template, 1, 2, "app-berlin", 0)(6, ThemesComponent_app_denver_6_Template, 1, 2, "app-denver", 0)(7, ThemesComponent_app_moscow_7_Template, 1, 2, "app-moscow", 0)(8, ThemesComponent_app_cairo_8_Template, 1, 2, "app-cairo", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "paris");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "tokyo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "osaka");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "rome");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "madrid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "berlin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "denver");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "moscow");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.homePage == null ? null : ctx.homePage.slug) === "cairo");
  }
}, dependencies: [NgIf, ParisComponent, TokyoComponent, OsakaComponent, RomeComponent, MadridComponent, MoscowComponent, BerlinComponent, DenverComponent, CairoComponent] });
var ThemesComponent = _ThemesComponent;
__decorate([
  Select(ThemeState.homePage)
], ThemesComponent.prototype, "homePage$", void 0);
__decorate([
  Select(ThemeState.activeTheme)
], ThemesComponent.prototype, "activeTheme$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemesComponent, { className: "ThemesComponent", filePath: "src\\app\\components\\themes\\themes.component.ts", lineNumber: 14 });
})();

// src/app/shared/resolvers/home.resolver.ts
var _HomeResolver = class _HomeResolver {
  constructor(store, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
  }
  resolve(route) {
    this.theme = route.queryParams["theme"];
    if (this.theme === "paris" || this.theme === "tokyo") {
      this.themeOptionService.productBox = "basic";
    } else if (this.theme === "berlin" || this.theme === "denver") {
      this.themeOptionService.productBox = "standard";
    } else if (this.theme === "osaka" || this.theme === "rome") {
      this.themeOptionService.productBox = "classic";
    } else if (this.theme === "cairo") {
      this.themeOptionService.productBox = "digital";
    } else if (this.theme === "madrid" || this.theme === "moscow") {
      this.themeOptionService.productBox = "premium";
    } else {
      this.themeOption$.subscribe((theme) => {
        this.themeOptionService.productBox = theme?.product ? theme?.product?.product_box_variant : "basic";
      });
    }
    return this.store.dispatch(new UpdateProductBox(this.themeOptionService.productBox));
  }
};
_HomeResolver.\u0275fac = function HomeResolver_Factory(t) {
  return new (t || _HomeResolver)(\u0275\u0275inject(Store), \u0275\u0275inject(ThemeOptionService));
};
_HomeResolver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeResolver, factory: _HomeResolver.\u0275fac, providedIn: "root" });
var HomeResolver = _HomeResolver;
__decorate([
  Select(ThemeOptionState.themeOptions)
], HomeResolver.prototype, "themeOption$", void 0);

// src/app/components/themes/themes-routing.module.ts
var routes = [
  {
    path: "home",
    component: ThemesComponent
  },
  {
    path: "",
    component: ThemesComponent,
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      data: HomeResolver
    }
  }
];
var _ThemesRoutingModule = class _ThemesRoutingModule {
};
_ThemesRoutingModule.\u0275fac = function ThemesRoutingModule_Factory(t) {
  return new (t || _ThemesRoutingModule)();
};
_ThemesRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ThemesRoutingModule });
_ThemesRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ThemesRoutingModule = _ThemesRoutingModule;

// src/app/components/themes/themes.module.ts
var _ThemesModule = class _ThemesModule {
};
_ThemesModule.\u0275fac = function ThemesModule_Factory(t) {
  return new (t || _ThemesModule)();
};
_ThemesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ThemesModule });
_ThemesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ThemesRoutingModule,
  SharedModule,
  BlogModule,
  ShopModule,
  TranslateModule
] });
var ThemesModule = _ThemesModule;
export {
  ThemesModule
};
//# sourceMappingURL=chunk-5SFNGIQP.js.map
