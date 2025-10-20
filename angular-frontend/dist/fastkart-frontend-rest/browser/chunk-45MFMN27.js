import {
  PageState
} from "./chunk-KBJRTARI.js";
import {
  Action,
  BlogState,
  CategoryState,
  HttpClient,
  Meta,
  NavigationEnd,
  NgZone,
  ProductState,
  Router,
  Select,
  Selector,
  SettingState,
  State,
  ThemeOptionState,
  Title,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  filter,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WW7SXIET.js";

// src/app/shared/action/brand.action.ts
var _GetBrands = class _GetBrands {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetBrands.type = "[Brand] Get";
var GetBrands = _GetBrands;
var _GetBrandBySlug = class _GetBrandBySlug {
  constructor(slug) {
    this.slug = slug;
  }
};
_GetBrandBySlug.type = "[Brand] Get Brand By Slug";
var GetBrandBySlug = _GetBrandBySlug;

// src/app/shared/services/brand.service.ts
var _BrandService = class _BrandService {
  constructor(http) {
    this.http = http;
  }
  getBrands(payload) {
    return this.http.get(`${environment.URL}/brand`, { params: payload });
  }
  getBrandBySlug(slug) {
    return this.http.get(`${environment.URL}/brand/slug/${slug}`);
  }
};
_BrandService.\u0275fac = function BrandService_Factory(t) {
  return new (t || _BrandService)(\u0275\u0275inject(HttpClient));
};
_BrandService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrandService, factory: _BrandService.\u0275fac, providedIn: "root" });
var BrandService = _BrandService;

// src/app/shared/state/brand.state.ts
var _a;
var BrandState = (_a = class {
  constructor(brandService) {
    this.brandService = brandService;
  }
  static brand(state) {
    return state.brand;
  }
  static selectedBrand(state) {
    return state.selectedBrand;
  }
  getBrands(ctx, action) {
    return this.brandService.getBrands(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          brand: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getBrandBySlug(ctx, action) {
    return this.brandService.getBrandBySlug(action.slug).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedBrand: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a.\u0275fac = function BrandState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(BrandService));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetBrands)
], BrandState.prototype, "getBrands", null);
__decorate([
  Action(GetBrandBySlug)
], BrandState.prototype, "getBrandBySlug", null);
__decorate([
  Selector()
], BrandState, "brand", null);
__decorate([
  Selector()
], BrandState, "selectedBrand", null);
BrandState = __decorate([
  State({
    name: "brand",
    defaults: {
      brand: {
        data: [],
        total: 0
      },
      selectedBrand: null
    }
  })
], BrandState);

// src/app/shared/services/seo.service.ts
var _SeoService = class _SeoService {
  constructor(meta, router, titleService, ngZone) {
    this.meta = meta;
    this.router = router;
    this.titleService = titleService;
    this.ngZone = ngZone;
    this.currentMessageIndex = 0;
    this.delay = 1e3;
    this.isTabInFocus = true;
    this.scoContent = {};
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.path = event.url;
      this.updateSeo(this.path);
    });
    this.fetchData();
  }
  fetchData() {
    this.setting$.subscribe((val) => this.setting = val);
    this.product$.subscribe((product) => this.product = product);
    this.blog$.subscribe((blog) => this.blog = blog);
    this.page$.subscribe((page) => this.page = page);
    this.brand$.subscribe((brand) => this.brand = brand);
    this.category$.subscribe((blog) => this.category = blog);
    this.themeOption$.subscribe((option) => {
      this.themeOption = option;
    });
  }
  updateSeo(path) {
    if (path.includes("product")) {
      if (this.product) {
        this.scoContent = {
          "url": window.location.href,
          "og_title": this.product.meta_title || this.themeOption?.seo?.meta_title,
          "og_description": this.product.meta_description || this.themeOption?.seo?.meta_description,
          "og_image": this.product.product_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        };
      }
      this.customSCO();
    } else if (path.includes("blog")) {
      if (this.blog) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          "url": window.location.href,
          "og_title": this.blog?.meta_title || this.themeOption?.seo?.meta_title,
          "og_description": this.blog?.meta_description || this.themeOption?.seo?.meta_description,
          "og_image": this.blog?.blog_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
        this.customSCO();
      }
    } else if (path.includes("page")) {
      if (this.page) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          "url": window.location.href,
          "og_title": this.page?.meta_title || this.themeOption?.seo?.meta_title,
          "og_description": this.page?.meta_description || this.themeOption?.seo?.meta_description,
          "og_image": this.page?.page_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
      }
      this.customSCO();
    } else if (path.includes("brand")) {
      if (this.brand) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          "url": window.location.href,
          "og_title": this.brand?.meta_title || this.themeOption?.seo?.meta_title,
          "og_description": this.brand?.meta_description || this.themeOption?.seo?.meta_description,
          "og_image": this.brand?.brand_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
      }
      this.customSCO();
    } else if (path.includes("category")) {
      if (this.category) {
        this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
          "url": window.location.href,
          "og_title": this.category?.meta_title || this.themeOption?.seo?.meta_title,
          "og_description": this.category?.meta_description || this.themeOption?.seo?.meta_description,
          "og_image": this.category?.category_meta_image?.original_url || this.themeOption?.seo?.og_image?.original_url
        });
      }
      this.customSCO();
    } else {
      this.updateDefaultSeo();
    }
  }
  updateDefaultSeo() {
    this.meta.updateTag({ name: "title", content: this.themeOption?.seo?.meta_title });
    this.meta.updateTag({ name: "description", content: this.themeOption?.seo?.meta_description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "og:title", content: this.themeOption?.seo?.meta_title });
    this.meta.updateTag({ property: "og:description", content: this.themeOption?.seo?.meta_description });
    this.meta.updateTag({ property: "og:image", content: this.scoContent["og_image"] });
    this.meta.updateTag({ property: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ property: "twitter:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "twitter:title", content: this.themeOption?.seo?.meta_title });
    this.meta.updateTag({ property: "twitter:description", content: this.themeOption?.seo?.meta_description });
    this.meta.updateTag({ property: "twitter:image", content: this.scoContent["og_image"] });
    if (this.themeOption?.general && this.themeOption?.general?.exit_tagline_enable) {
      document.addEventListener("visibilitychange", () => {
        this.messages = this.themeOption.general.taglines;
        this.ngZone.run(() => {
          this.isTabInFocus = !document.hidden;
          if (this.isTabInFocus) {
            clearTimeout(this.timeoutId);
            return this.titleService.setTitle(this.themeOption?.general?.site_title && this.themeOption?.general?.site_tagline ? `${this.themeOption?.general?.site_title} | ${this.themeOption?.general?.site_tagline}` : "");
          } else {
            this.updateMessage();
          }
        });
      });
      this.scoContent = __spreadProps(__spreadValues({}, this.scoContent), {
        "url": window.location.href,
        "og_title": this.themeOption?.seo?.meta_title,
        "og_description": this.themeOption?.seo?.meta_description,
        "og_image": this.themeOption?.seo?.og_image?.original_url
      });
      this.customSCO();
    } else {
      return this.titleService.setTitle(this.themeOption?.general?.site_title && this.themeOption?.general?.site_tagline ? `${this.themeOption?.general?.site_title} | ${this.themeOption?.general?.site_tagline}` : "");
    }
  }
  customSCO() {
    const title = this.scoContent["og_title"];
    const description = this.scoContent["og_description"];
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: "title", content: title });
    this.meta.updateTag({ name: "description", content: description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "og:title", content: title });
    this.meta.updateTag({ property: "og:description", content: description });
    this.meta.updateTag({ property: "og:image", content: this.scoContent["og_image"] });
    this.meta.updateTag({ property: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ property: "twitter:url", content: this.scoContent["url"] });
    this.meta.updateTag({ property: "twitter:title", content: title });
    this.meta.updateTag({ property: "twitter:description", content: description });
    this.meta.updateTag({ property: "twitter:image", content: this.scoContent["og_image"] });
  }
  updateMessage() {
    clearTimeout(this.timeoutId);
    this.currentMessage = this.messages[this.currentMessageIndex];
    this.titleService.setTitle(this.currentMessage);
    this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    this.timeoutId = setTimeout(() => {
      this.updateMessage();
    }, this.delay);
  }
  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
};
_SeoService.\u0275fac = function SeoService_Factory(t) {
  return new (t || _SeoService)(\u0275\u0275inject(Meta), \u0275\u0275inject(Router), \u0275\u0275inject(Title), \u0275\u0275inject(NgZone));
};
_SeoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
var SeoService = _SeoService;
__decorate([
  Select(ThemeOptionState.themeOptions)
], SeoService.prototype, "themeOption$", void 0);
__decorate([
  Select(SettingState.setting)
], SeoService.prototype, "setting$", void 0);
__decorate([
  Select(ProductState.selectedProduct)
], SeoService.prototype, "product$", void 0);
__decorate([
  Select(BlogState.selectedBlog)
], SeoService.prototype, "blog$", void 0);
__decorate([
  Select(BrandState.selectedBrand)
], SeoService.prototype, "brand$", void 0);
__decorate([
  Select(PageState.selectedPage)
], SeoService.prototype, "page$", void 0);
__decorate([
  Select(CategoryState.selectedCategory)
], SeoService.prototype, "category$", void 0);

export {
  GetBrands,
  GetBrandBySlug,
  BrandState,
  SeoService
};
//# sourceMappingURL=chunk-45MFMN27.js.map
