import {
  Action,
  HttpClient,
  Router,
  Selector,
  State,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WW7SXIET.js";

// src/app/shared/action/page.action.ts
var _GetPages = class _GetPages {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetPages.type = "[Page] Get";
var GetPages = _GetPages;
var _GetPageBySlug = class _GetPageBySlug {
  constructor(slug) {
    this.slug = slug;
  }
};
_GetPageBySlug.type = "[Page] By Slug";
var GetPageBySlug = _GetPageBySlug;
var _GetFaqs = class _GetFaqs {
};
_GetFaqs.type = "[Faq] Get";
var GetFaqs = _GetFaqs;
var _ContactUs = class _ContactUs {
  constructor(payload) {
    this.payload = payload;
  }
};
_ContactUs.type = "[ContactUs] Post";
var ContactUs = _ContactUs;

// src/app/shared/services/page.service.ts
var _PageService = class _PageService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getPages(payload) {
    const safePayload = __spreadValues({}, payload);
    if (safePayload && "status" in safePayload) {
      delete safePayload["status"];
    }
    return this.http.get(`${environment.URL}/page`, { params: safePayload });
  }
  getPageBySlug(slug) {
    return this.http.get(`${environment.URL}/page/slug/${slug}`);
  }
  getFaqs() {
    return this.http.get(`${environment.URL}/faq`);
  }
  contactUs(payload) {
    return this.http.post(`${environment.URL}/contact-us`, payload);
  }
  getStores(payload) {
    return this.http.get(`${environment.URL}/store`, { params: payload });
  }
};
_PageService.\u0275fac = function PageService_Factory(t) {
  return new (t || _PageService)(\u0275\u0275inject(HttpClient));
};
_PageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageService, factory: _PageService.\u0275fac, providedIn: "root" });
var PageService = _PageService;

// src/app/shared/state/page.state.ts
var _a;
var PageState = (_a = class {
  constructor(router, pageService) {
    this.router = router;
    this.pageService = pageService;
  }
  static page(state) {
    return state.page;
  }
  static faq(state) {
    return state.faq;
  }
  static selectedPage(state) {
    return state.selectedPage;
  }
  getPages(ctx, action) {
    return this.pageService.getPages(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          page: {
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
  getPageBySlug(ctx, { slug }) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getPageBySlug(slug).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedPage: result
        }));
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getFaqs(ctx) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getFaqs().pipe(tap({
      next: (result) => {
        ctx.patchState({
          faq: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  contactUs(ctx, { payload }) {
    return this.pageService.contactUs(payload).pipe(tap({
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a.\u0275fac = function PageState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(Router), \u0275\u0275inject(PageService));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetPages)
], PageState.prototype, "getPages", null);
__decorate([
  Action(GetPageBySlug)
], PageState.prototype, "getPageBySlug", null);
__decorate([
  Action(GetFaqs)
], PageState.prototype, "getFaqs", null);
__decorate([
  Action(ContactUs)
], PageState.prototype, "contactUs", null);
__decorate([
  Selector()
], PageState, "page", null);
__decorate([
  Selector()
], PageState, "faq", null);
__decorate([
  Selector()
], PageState, "selectedPage", null);
PageState = __decorate([
  State({
    name: "page",
    defaults: {
      page: {
        data: [],
        total: 0
      },
      faq: {
        data: [],
        total: 0
      },
      selectedPage: null
    }
  })
], PageState);

export {
  GetPages,
  GetPageBySlug,
  GetFaqs,
  ContactUs,
  PageService,
  PageState
};
//# sourceMappingURL=chunk-KBJRTARI.js.map
