import {
  CouponService,
  CouponState,
  Error404Component,
  GetCoupons
} from "./chunk-WXIJZUSS.js";
import {
  ContactUs,
  GetFaqs,
  GetPageBySlug,
  PageService,
  PageState
} from "./chunk-KBJRTARI.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BlogState,
  BreadcrumbComponent,
  ButtonComponent,
  CarouselComponent,
  CarouselSlideDirective,
  CommonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  GetBlogs,
  GetProducts,
  Meta,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NoDataComponent,
  NumberValueAccessor,
  ProductBoxComponent,
  ProductService,
  ProductState,
  Router,
  RouterLink,
  RouterModule,
  Select,
  SharedModule,
  SkeletonProductBoxComponent,
  Store,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe,
  Validators,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  inject,
  productSlider6ItemMargin,
  productSliderMargin,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
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
  ɵɵtrustConstantResourceUrl
} from "./chunk-WW7SXIET.js";

// src/app/shared/resolvers/page.resolver.ts
var PageResolver = (route, state) => {
  return inject(Store).dispatch(new GetPageBySlug(route.paramMap.get("slug")));
};

// src/app/components/page/skeleton-page/skeleton-page.component.ts
var _SkeletonPageComponent = class _SkeletonPageComponent {
};
_SkeletonPageComponent.\u0275fac = function SkeletonPageComponent_Factory(t) {
  return new (t || _SkeletonPageComponent)();
};
_SkeletonPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPageComponent, selectors: [["app-skeleton-page"]], decls: 17, vars: 0, consts: [[1, "common-skeleton"], [1, "img-box"], [1, "img"], [1, "img-content"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-8"], [1, "placeholder", "col-11"]], template: function SkeletonPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ul");
    \u0275\u0275element(11, "li", 8)(12, "li", 7)(13, "li", 6)(14, "li", 5)(15, "li", 7)(16, "li", 9);
    \u0275\u0275elementEnd()();
  }
} });
var SkeletonPageComponent = _SkeletonPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPageComponent, { className: "SkeletonPageComponent", filePath: "src\\app\\components\\page\\skeleton-page\\skeleton-page.component.ts", lineNumber: 8 });
})();

// src/app/components/page/page.component.ts
function PageComponent_app_skeleton_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function PageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", (tmp_2_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.selectedPage$)) == null ? null : tmp_2_0.content, \u0275\u0275sanitizeHtml);
  }
}
var _PageComponent = class _PageComponent {
  constructor(meta, pageService) {
    this.meta = meta;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "Page",
      items: []
    };
    this.selectedPage$.subscribe((page) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = page.title;
      this.breadcrumb.items.push({ label: "Page", active: true }, { label: page.title, active: false });
      page?.meta_title && this.meta.updateTag({ property: "og:title", content: page?.meta_title });
      page?.meta_description && this.meta.updateTag({ property: "og:description", content: page?.meta_description });
    });
  }
};
_PageComponent.\u0275fac = function PageComponent_Factory(t) {
  return new (t || _PageComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PageService));
};
_PageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageComponent, selectors: [["app-pages"]], decls: 6, vars: 3, consts: [["content", ""], [3, "breadcrumb"], [1, "section-b-space", "ckeditor-content"], [1, "container"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"]], template: function PageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3);
    \u0275\u0275template(3, PageComponent_app_skeleton_page_3_Template, 1, 0, "app-skeleton-page", 4)(4, PageComponent_ng_template_4_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r2 = \u0275\u0275reference(5);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.pageService == null ? null : ctx.pageService.skeletonLoader)("ngIfElse", content_r2);
  }
}, dependencies: [NgIf, BreadcrumbComponent, SkeletonPageComponent, AsyncPipe] });
var PageComponent = _PageComponent;
__decorate([
  Select(PageState.selectedPage)
], PageComponent.prototype, "selectedPage$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageComponent, { className: "PageComponent", filePath: "src\\app\\components\\page\\page.component.ts", lineNumber: 15 });
})();

// src/app/components/page/faq/faq.component.ts
function FaqComponent_section_1_app_skeleton_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function FaqComponent_section_1_ng_template_3_div_12_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r1.description);
  }
}
function FaqComponent_section_1_ng_template_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2", 15)(2, "button", 16);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275template(7, FaqComponent_section_1_ng_template_3_div_12_ng_template_7_Template, 3, 1, "ng-template");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275property("collapsed", i_r2 !== 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.title, " ");
  }
}
function FaqComponent_section_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12);
    \u0275\u0275template(12, FaqComponent_section_1_ng_template_3_div_12_Template, 8, 2, "div", 13);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "frequently_asked_questions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "you_can_find_out_more_searching"));
    \u0275\u0275advance(4);
    \u0275\u0275property("closeOthers", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_6_0 = \u0275\u0275pipeBind1(13, 8, ctx_r2.faq$)) == null ? null : tmp_6_0.data);
  }
}
function FaqComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5);
    \u0275\u0275template(2, FaqComponent_section_1_app_skeleton_page_2_Template, 1, 0, "app-skeleton-page", 6)(3, FaqComponent_section_1_ng_template_3_Template, 14, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r4 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.pageService == null ? null : ctx_r2.pageService.skeletonLoader)("ngIfElse", content_r4);
  }
}
function FaqComponent_app_no_data_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_faq_found")("description", "inform_you_that_the_faq__currently_unavailable");
  }
}
var _FaqComponent = class _FaqComponent {
  constructor(store, pageService) {
    this.store = store;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "FAQ's",
      items: [{ label: "FAQ's", active: true }]
    };
    this.pageService.skeletonLoader = true;
    this.store.dispatch(new GetFaqs()).subscribe({
      complete: () => {
        this.pageService.skeletonLoader = false;
      }
    });
  }
};
_FaqComponent.\u0275fac = function FaqComponent_Factory(t) {
  return new (t || _FaqComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PageService));
};
_FaqComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 5, vars: 7, consts: [["content", ""], [3, "breadcrumb"], ["class", "faq-box-contain section-b-space", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "faq-box-contain", "section-b-space"], [1, "container"], [4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-xl-5"], [1, "faq-contain"], [1, "col-xl-7"], [1, "faq-accordion"], ["ngbAccordion", "", 1, "accordion", 3, "closeOthers"], ["ngbAccordionItem", "", "class", "accordion-item", 3, "collapsed", 4, "ngFor", "ngForOf"], ["ngbAccordionItem", "", 1, "accordion-item", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["type", "button", "ngbAccordionButton", "", 1, "accordion-button"], [1, "ri-arrow-down-s-line"], ["ngbAccordionCollapse", "", 1, "accordion-collapse", "collapse"], ["ngbAccordionBody", ""], [1, "accordion-body"], [3, "image", "text", "description"]], template: function FaqComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275template(1, FaqComponent_section_1_Template, 5, 2, "section", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, FaqComponent_app_no_data_3_Template, 1, 5, "app-no-data", 3);
    \u0275\u0275pipe(4, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx.faq$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx.faq$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length) && (ctx.pageService == null ? null : ctx.pageService.skeletonLoader));
  }
}, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, NoDataComponent, SkeletonPageComponent, AsyncPipe, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --primary: #22c55e;\n  --secondary: #06b6d4;\n  --text: #0f172a;\n  --muted: #64748b;\n  --card: #ffffff;\n  --ring: rgba(34, 197, 94, 0.22);\n}\nsection.faq-box-contain[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 2.25rem;\n  background: transparent;\n}\n.faq-contain[_ngcontent-%COMP%] {\n  background: var(--card);\n  border-radius: 16px;\n  padding: 1.25rem 1.25rem 1rem;\n  box-shadow: 0 10px 30px rgba(2, 8, 23, 0.06), 0 2px 10px rgba(2, 8, 23, 0.04);\n  border: 1px solid rgba(2, 8, 23, 0.06);\n}\n.faq-contain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text);\n  margin: 0 0 8px 0;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.faq-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  margin: 0;\n}\n.faq-accordion[_ngcontent-%COMP%] {\n  background: var(--card);\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(2, 8, 23, 0.06), 0 2px 10px rgba(2, 8, 23, 0.04);\n  border: 1px solid rgba(2, 8, 23, 0.06);\n  overflow: hidden;\n  position: relative;\n}\n.faq-accordion[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -60px;\n  top: -60px;\n  width: 180px;\n  height: 180px;\n  pointer-events: none;\n  background:\n    radial-gradient(\n      circle at center,\n      rgba(6, 182, 212, 0.08),\n      rgba(34, 197, 94, 0.06) 60%,\n      transparent 70%);\n  filter: blur(8px);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion {\n  --bs-accordion-bg: transparent;\n  --bs-accordion-border-color: rgba(2, 8, 23, 0.06);\n  --bs-accordion-border-radius: 16px;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-item {\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(2, 8, 23, 0.06);\n  transform: translateY(6px);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_slideFadeUp 520ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-item:last-child {\n  border-bottom: none;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-item:nth-child(1) {\n  animation-delay: 30ms;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-item:nth-child(2) {\n  animation-delay: 90ms;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-item:nth-child(3) {\n  animation-delay: 150ms;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-item:nth-child(4) {\n  animation-delay: 210ms;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffffff;\n  color: var(--text);\n  padding: 1rem 1.25rem;\n  font-weight: 600;\n  border-radius: 0;\n  border: none;\n  position: relative;\n  transition:\n    background-color 160ms ease,\n    color 160ms ease,\n    box-shadow 200ms ease,\n    transform 200ms ease;\n  will-change:\n    transform,\n    background-color,\n    box-shadow;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary),\n      var(--secondary));\n  opacity: 0;\n  transition: opacity 160ms ease;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button i {\n  margin-left: auto;\n  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1.1);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:not(.collapsed) {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(248, 250, 252, 0.85),\n      #ffffff);\n  box-shadow: 0 0 0 6px var(--ring) inset;\n  transform: translateZ(0) translateY(-1px);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:not(.collapsed)::before {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:focus {\n  box-shadow: 0 0 0 6px var(--ring);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:not(.collapsed) i {\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-body {\n  padding: 0.75rem 1.25rem 1rem;\n  color: var(--muted);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(248, 250, 252, 0.6),\n      rgb(255, 255, 255));\n  border-top: 1px dashed rgba(2, 8, 23, 0.08);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:hover {\n  transform: translateY(-1px);\n}\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%]     .faq-accordion .accordion-item {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideFadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-collapse.collapse {\n  transition: transform 260ms ease, opacity 220ms ease;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-collapse.collapsing {\n  height: auto !important;\n  overflow: hidden;\n  transform-origin: top;\n  transform: scaleY(0.98);\n  opacity: 0.6;\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-collapse.show {\n  transform: none;\n  opacity: 1;\n}\n.faq-accordion[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -70px;\n  bottom: -70px;\n  width: 220px;\n  height: 220px;\n  background:\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(34, 197, 94, 0.14),\n      rgba(6, 182, 212, 0.1) 60%,\n      transparent 70%);\n  filter: blur(10px);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_floatXY 9s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_floatXY {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(10px, -6px);\n  }\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:not(.collapsed) {\n  background-image:\n    linear-gradient(\n      180deg,\n      rgba(248, 250, 252, 0.9),\n      #ffffff);\n}\n[_nghost-%COMP%]     .faq-accordion .accordion-button:focus-visible {\n  outline: 2px solid var(--secondary);\n  outline-offset: 2px;\n}\n@media (max-width: 991.98px) {\n  .faq-contain[_ngcontent-%COMP%], .faq-accordion[_ngcontent-%COMP%] {\n    border-radius: 14px;\n  }\n}\n/*# sourceMappingURL=faq.component.css.map */'] });
var FaqComponent = _FaqComponent;
__decorate([
  Select(PageState.faq)
], FaqComponent.prototype, "faq$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\components\\page\\faq\\faq.component.ts", lineNumber: 15 });
})();

// src/app/components/page/contact-us/contact-us.component.ts
function ContactUsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 41);
    \u0275\u0275element(2, "img", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", ctx_r0.contactData.contact_image_url, \u0275\u0275sanitizeUrl);
  }
}
function ContactUsComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.contactData.detail_1.icon);
  }
}
function ContactUsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 43);
    \u0275\u0275template(2, ContactUsComponent_div_15_div_2_Template, 2, 2, "div", 44);
    \u0275\u0275elementStart(3, "div", 45)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !!ctx_r0.contactData.detail_1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_1.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_1.text);
  }
}
function ContactUsComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.contactData.detail_2.icon);
  }
}
function ContactUsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 43);
    \u0275\u0275template(2, ContactUsComponent_div_16_div_2_Template, 2, 2, "div", 44);
    \u0275\u0275elementStart(3, "div", 45)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !!ctx_r0.contactData.detail_2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_2.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_2.text);
  }
}
function ContactUsComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.contactData.detail_3.icon);
  }
}
function ContactUsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 43);
    \u0275\u0275template(2, ContactUsComponent_div_17_div_2_Template, 2, 2, "div", 44);
    \u0275\u0275elementStart(3, "div", 45)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !!ctx_r0.contactData.detail_3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_3.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_3.text);
  }
}
function ContactUsComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.contactData.detail_4.icon);
  }
}
function ContactUsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 43);
    \u0275\u0275template(2, ContactUsComponent_div_18_div_2_Template, 2, 2, "div", 44);
    \u0275\u0275elementStart(3, "div", 45)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !!ctx_r0.contactData.detail_4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_4.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_4.text);
  }
}
function ContactUsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "name_is_required"), " ");
  }
}
function ContactUsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "email_is_required"), " ");
  }
}
function ContactUsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function ContactUsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_number_is_required"), " ");
  }
}
function ContactUsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subject_is_required"), " ");
  }
}
function ContactUsComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "message_is_required"), " ");
  }
}
var _ContactUsComponent = class _ContactUsComponent {
  constructor(formBuilder, store) {
    this.formBuilder = formBuilder;
    this.store = store;
    this.breadcrumb = {
      title: "Contact Us",
      items: [{ label: "Contact Us", active: true }]
    };
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
    this.themeOption$.subscribe((data) => this.contactData = data.contact_us);
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ContactUs(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
        }
      });
    }
  }
};
_ContactUsComponent.\u0275fac = function ContactUsComponent_Factory(t) {
  return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Store));
};
_ContactUsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], decls: 84, vars: 57, consts: [[3, "breadcrumb"], [1, "contact-box-section"], [1, "container-fluid-lg"], [1, "row", "g-lg-5", "g-3"], [1, "col-lg-6"], [1, "left-sidebar-box"], [1, "row"], ["class", "col-xl-12", 4, "ngIf"], [1, "col-xl-12"], [1, "contact-title"], [1, "contact-detail"], [1, "row", "g-4"], ["class", "col-xxl-6 col-lg-12 col-sm-6", 4, "ngIf"], [1, "title", "d-xxl-none", "d-block"], [1, "right-sidebar-box"], [1, "row", 3, "formGroup"], [1, "col-12"], [1, "mb-md-4", "mb-3", "custom-form"], ["for", "fullname", 1, "form-label"], [1, "custom-input"], ["type", "text", "id", "fullname", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "ri-user-3-fill"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-xxl-6", "col-lg-12", "col-sm-6"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "ri-mail-fill"], ["for", "phonenumner", 1, "form-label"], ["type", "number", "id", "phonenumner", "formControlName", "phone", 1, "form-control", 3, "placeholder"], [1, "ri-smartphone-line"], ["for", "exampleFormControlInput", 1, "form-label"], ["type", "text", "id", "subject", "formControlName", "subject", 1, "form-control", 3, "placeholder"], ["for", "message", 1, "form-label"], [1, "custom-textarea"], ["id", "message", "rows", "6", "formControlName", "message", 1, "form-control", 3, "placeholder"], [1, "ri-chat-2-fill"], [3, "click", "type", "id", "spinner"], [1, "map-section"], [1, "container-fluid", "p-0"], [1, "map-box"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2994.3803116994895!2d55.29773782339708!3d25.222534631321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!3m2!1d25.2048493!2d55.2707828!4m0!5e1!3m2!1sen!2sin!4v1652217109535!5m2!1sen!2sin`, "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "contact-image"], ["alt", "contact-us", 1, "img-fluid", 3, "src"], [1, "contact-detail-box"], ["class", "contact-icon", 4, "ngIf"], [1, "contact-detail-title"], [1, "contact-detail-contain"], [1, "contact-icon"], [1, "invalid-feedback"]], template: function ContactUsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275template(7, ContactUsComponent_div_7_Template, 3, 1, "div", 7);
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
    \u0275\u0275template(15, ContactUsComponent_div_15_Template, 9, 3, "div", 12)(16, ContactUsComponent_div_16_Template, 9, 3, "div", 12)(17, ContactUsComponent_div_17_Template, 9, 3, "div", 12)(18, ContactUsComponent_div_18_Template, 9, 3, "div", 12);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(19, "div", 4)(20, "div", 13)(21, "h2");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "label", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19);
    \u0275\u0275element(32, "input", 20);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275element(34, "i", 21);
    \u0275\u0275template(35, ContactUsComponent_div_35_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 23)(37, "div", 17)(38, "label", 24);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 19);
    \u0275\u0275element(42, "input", 25);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275element(44, "i", 26);
    \u0275\u0275template(45, ContactUsComponent_div_45_Template, 3, 3, "div", 22)(46, ContactUsComponent_div_46_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 23)(48, "div", 17)(49, "label", 27);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 19);
    \u0275\u0275element(53, "input", 28);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275element(55, "i", 29);
    \u0275\u0275template(56, ContactUsComponent_div_56_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 16)(58, "div", 17)(59, "label", 30);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 19);
    \u0275\u0275element(63, "input", 31);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275element(65, "i", 21);
    \u0275\u0275template(66, ContactUsComponent_div_66_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 16)(68, "div", 17)(69, "label", 32);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 33);
    \u0275\u0275element(73, "textarea", 34);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275element(75, "i", 35);
    \u0275\u0275template(76, ContactUsComponent_div_76_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "app-button", 36);
    \u0275\u0275listener("click", function ContactUsComponent_Template_app_button_click_77_listener() {
      return ctx.submit();
    });
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(80, "section", 37)(81, "div", 38)(82, "div", 39);
    \u0275\u0275element(83, "iframe", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.contactData && (ctx.contactData == null ? null : ctx.contactData.contact_image_url));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 31, "get_in_touch"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.contactData == null ? null : ctx.contactData.detail_1 == null ? null : ctx.contactData.detail_1.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.contactData == null ? null : ctx.contactData.detail_2 == null ? null : ctx.contactData.detail_2.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.contactData == null ? null : ctx.contactData.detail_3 == null ? null : ctx.contactData.detail_3.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.contactData == null ? null : ctx.contactData.detail_4 == null ? null : ctx.contactData.detail_4.text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 33, "contact_us"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "full_name"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(33, 37, "enter_full_name"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 39, "email_address"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(43, 41, "enter_email_address"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 43, "phone_number"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(54, 45, "enter_your_phone_number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 47, "subject"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(64, 49, "enter_subject"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.form.controls["subject"].touched && (ctx.form.controls["subject"].errors == null ? null : ctx.form.controls["subject"].errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 51, "message"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(74, 53, "enter_your_message"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.form.controls["message"].touched && (ctx.form.controls["message"].errors == null ? null : ctx.form.controls["message"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275classMap("btn btn-animation btn-md fw-bold ms-auto");
    \u0275\u0275property("type", "button")("id", "send_message")("spinner", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 55, "send_message"), " ");
  }
}, dependencies: [NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, ButtonComponent, TranslatePipe] });
var ContactUsComponent = _ContactUsComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], ContactUsComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\components\\page\\contact-us\\contact-us.component.ts", lineNumber: 15 });
})();

// src/app/components/page/offer/offer.component.ts
function OfferComponent_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div");
    \u0275\u0275element(5, "h5", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "p")(8, "p", 13)(9, "p", 14);
    \u0275\u0275elementEnd()()();
  }
}
function OfferComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, OfferComponent_ng_container_1_div_4_Template, 10, 0, "div", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function OfferComponent_ng_template_2_div_3_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function OfferComponent_ng_template_2_div_3_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const coupon_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyFunction(coupon_r3.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "copy_code"), " ");
  }
}
function OfferComponent_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div")(5, "h5", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 12)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "h6", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OfferComponent_ng_template_2_div_3_a_13_Template, 3, 3, "a", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(coupon_r3 == null ? null : coupon_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupon_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", coupon_r3 == null ? null : coupon_r3.code, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", coupon_r3 == null ? null : coupon_r3.code);
  }
}
function OfferComponent_ng_template_2_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_Offers_found")("description", "inform_you_that_the_currently_unavailable");
  }
}
function OfferComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, OfferComponent_ng_template_2_div_3_Template, 14, 4, "div", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, OfferComponent_ng_template_2_app_no_data_5_Template, 1, 5, "app-no-data", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r0.coupon$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_3_0 = \u0275\u0275pipeBind1(6, 4, ctx_r0.coupon$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length) && !ctx_r0.couponService.skeletonLoader);
  }
}
var _OfferComponent = class _OfferComponent {
  constructor(store, couponService) {
    this.store = store;
    this.couponService = couponService;
    this.skeletonItems = Array.from({ length: 8 }, (_, index) => index);
    this.breadcrumb = {
      title: "Offer",
      items: [{ label: "Offer", active: true }]
    };
    this.store.dispatch(new GetCoupons({ status: 1 }));
  }
  copyFunction(txt) {
    navigator.clipboard.writeText(txt);
  }
};
_OfferComponent.\u0275fac = function OfferComponent_Factory(t) {
  return new (t || _OfferComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CouponService));
};
_OfferComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferComponent, selectors: [["app-offer"]], decls: 4, vars: 3, consts: [["offerContent", ""], [3, "breadcrumb"], [4, "ngIf", "ngIfElse"], [1, "section-b-space", "section-t-space", "offer-section", "skeleton-offer"], [1, "container-fluid-lg"], [1, "row", "g-md-4", "g-3"], ["class", "col-xxl-3 col-lg-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-3", "col-lg-4", "col-sm-6"], [1, "coupon-box"], [1, "coupon-name"], [1, "card-name"], [1, "fw-semibold", "dark-text"], [1, "coupon-content"], [1, "long"], [1, "long", "long-s"], [1, "section-b-space", "section-t-space", "offer-section"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "coupon-apply"], [1, "coupon-code", "success-color"], ["href", "javascript:void(0)", "class", "btn theme-btn border-btn copy-btn mt-0", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0", 3, "click"], [3, "image", "text", "description"]], template: function OfferComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275template(1, OfferComponent_ng_container_1_Template, 5, 1, "ng-container", 2)(2, OfferComponent_ng_template_2_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const offerContent_r4 = \u0275\u0275reference(3);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.couponService == null ? null : ctx.couponService.skeletonLoader)("ngIfElse", offerContent_r4);
  }
}, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NoDataComponent, AsyncPipe, TranslatePipe] });
var OfferComponent = _OfferComponent;
__decorate([
  Select(CouponState.coupon)
], OfferComponent.prototype, "coupon$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferComponent, { className: "OfferComponent", filePath: "src\\app\\components\\page\\offer\\offer.component.ts", lineNumber: 15 });
})();

// src/environments/environment.prod.ts
var environment = {
  production: true,
  baseURL: "https://api.buyhelp.dnci.net",
  URL: "https://api.buyhelp.dnci.net/api",
  storageURL: "https://api.buyhelp.dnci.net"
  // Change only the laravel primary domain
};

// src/app/components/page/about-us/about-us.component.ts
var _c0 = (a0) => ["/blog/", a0];
function AboutUsComponent_section_1_li_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 19)(2, "div", 21);
    \u0275\u0275element(3, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "h5", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const futures_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.basicUrl + futures_r1.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(futures_r1.title);
  }
}
function AboutUsComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "div", 12)(7, "div");
    \u0275\u0275element(8, "img", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 14)(11, "div");
    \u0275\u0275element(12, "img", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 15)(15, "div")(16, "div", 16)(17, "h4");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "p", 18);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 19);
    \u0275\u0275template(25, AboutUsComponent_section_1_li_25_Template, 7, 2, "li", 20);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r1.basicUrl + (ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.about == null ? null : ctx_r1.aboutUs.about.content_left_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.basicUrl + (ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.about == null ? null : ctx_r1.aboutUs.about.content_right_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.about == null ? null : ctx_r1.aboutUs.about.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.about == null ? null : ctx_r1.aboutUs.about.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.about == null ? null : ctx_r1.aboutUs.about.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.about == null ? null : ctx_r1.aboutUs.about.futures);
  }
}
function AboutUsComponent_section_2_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div")(2, "div", 34)(3, "div", 35);
    \u0275\u0275element(4, "img", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const client_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.basicUrl + client_r3.icon, \u0275\u0275sanitizeUrl)("alt", client_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r3.description);
  }
}
function AboutUsComponent_section_2_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_section_2_11_ng_template_0_Template, 9, 4, "ng-template", 32);
  }
}
function AboutUsComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "div", 7)(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30)(10, "owl-carousel-o", 31);
    \u0275\u0275template(11, AboutUsComponent_section_2_11_Template, 1, 0, null, 20);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.clients == null ? null : ctx_r1.aboutUs.clients.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.clients == null ? null : ctx_r1.aboutUs.clients.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.clientsOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.clients == null ? null : ctx_r1.aboutUs.clients.content);
  }
}
function AboutUsComponent_section_3_11_ng_template_0_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 44);
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", team_r4 == null ? null : team_r4.facebook, \u0275\u0275sanitizeUrl);
  }
}
function AboutUsComponent_section_3_11_ng_template_0_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", team_r4 == null ? null : team_r4.pinterest, \u0275\u0275sanitizeUrl);
  }
}
function AboutUsComponent_section_3_11_ng_template_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", team_r4 == null ? null : team_r4.twitter, \u0275\u0275sanitizeUrl);
  }
}
function AboutUsComponent_section_3_11_ng_template_0_li_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", team_r4 == null ? null : team_r4.instagram, \u0275\u0275sanitizeUrl);
  }
}
function AboutUsComponent_section_3_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div", 39);
    \u0275\u0275element(3, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 42);
    \u0275\u0275template(12, AboutUsComponent_section_3_11_ng_template_0_li_12_Template, 3, 1, "li", 43)(13, AboutUsComponent_section_3_11_ng_template_0_li_13_Template, 3, 1, "li", 43)(14, AboutUsComponent_section_3_11_ng_template_0_li_14_Template, 3, 1, "li", 43)(15, AboutUsComponent_section_3_11_ng_template_0_li_15_Template, 3, 1, "li", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.basicUrl + (team_r4 == null ? null : team_r4.profile_image_url), \u0275\u0275sanitizeUrl)("alt", team_r4 == null ? null : team_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r4 == null ? null : team_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r4 == null ? null : team_r4.designation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r4 == null ? null : team_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", team_r4 == null ? null : team_r4.facebook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r4 == null ? null : team_r4.pinterest);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r4 == null ? null : team_r4.twitter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r4 == null ? null : team_r4.instagram);
  }
}
function AboutUsComponent_section_3_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_section_3_11_ng_template_0_Template, 16, 9, "ng-template", 32);
  }
}
function AboutUsComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 7)(2, "div", 28)(3, "h4", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "div", 30)(10, "owl-carousel-o", 31);
    \u0275\u0275template(11, AboutUsComponent_section_3_11_Template, 1, 0, null, 20);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.team == null ? null : ctx_r1.aboutUs.team.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.team == null ? null : ctx_r1.aboutUs.team.title);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.teamOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.team == null ? null : ctx_r1.aboutUs.team.members);
  }
}
function AboutUsComponent_section_4_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 54);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 56)(8, "div", 57);
    \u0275\u0275element(9, "img", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 59)(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h6");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const team_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(team_r5 == null ? null : team_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', team_r5 == null ? null : team_r5.review, '"');
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.basicUrl + (team_r5 == null ? null : team_r5.profile_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r5 == null ? null : team_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r5 == null ? null : team_r5.designation);
  }
}
function AboutUsComponent_section_4_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_section_4_11_ng_template_0_Template, 15, 5, "ng-template", 32);
  }
}
function AboutUsComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 52)(1, "div", 53)(2, "div", 28)(3, "h4", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "div", 30)(10, "owl-carousel-o", 31);
    \u0275\u0275template(11, AboutUsComponent_section_4_11_Template, 1, 0, null, 20);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.testimonial == null ? null : ctx_r1.aboutUs.testimonial.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.testimonial == null ? null : ctx_r1.aboutUs.testimonial.title);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.testimonialsOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.aboutUs == null ? null : ctx_r1.aboutUs.testimonial == null ? null : ctx_r1.aboutUs.testimonial.reviews);
  }
}
function AboutUsComponent_section_5_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 62)(2, "div", 63)(3, "div", 64)(4, "a", 65);
    \u0275\u0275element(5, "img", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "a", 66)(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h5");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const blog_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, blog_r6.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", blog_r6.blog_thumbnail.original_url ? ctx_r1.basicUrl + blog_r6.blog_thumbnail.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl)("alt", blog_r6.title);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, blog_r6.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r6.created_by.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r6.title);
  }
}
function AboutUsComponent_section_5_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_section_5_13_ng_template_0_Template, 11, 10, "ng-template", 32);
  }
}
function AboutUsComponent_section_5_app_no_data_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 67);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_blog_found");
  }
}
function AboutUsComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 60)(1, "div", 7)(2, "div", 28)(3, "h4", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26)(10, "div", 27)(11, "div", 30)(12, "owl-carousel-o", 31);
    \u0275\u0275template(13, AboutUsComponent_section_5_13_Template, 1, 0, null, 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AboutUsComponent_section_5_app_no_data_14_Template, 1, 3, "app-no-data", 61);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "our_blog"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "our_latest_blog"));
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r1.blogOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.blogs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.blogs == null ? null : ctx_r1.blogs.length));
  }
}
var _AboutUsComponent = class _AboutUsComponent {
  constructor(store) {
    this.store = store;
    this.basicUrl = environment.baseURL;
    this.blogs = [];
    this.breadcrumb = {
      title: "About Us",
      items: [{ label: "About Us", active: true }]
    };
    this.productSlider = productSliderMargin;
    this.clientsOptions = {
      loop: true,
      margin: 20,
      items: 3,
      autoplay: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      }
    };
    this.teamOptions = {
      loop: true,
      margin: 20,
      items: 4,
      autoplay: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      }
    };
    this.testimonialsOptions = {
      loop: true,
      margin: 20,
      items: 4,
      // autoplay:true,
      center: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      }
    };
    this.blogOptions = {
      loop: true,
      margin: 20,
      items: 4,
      autoplay: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 4
        },
        940: {
          items: 4
        }
      }
    };
    this.themeOptions$.subscribe((option) => {
      this.aboutUs = option?.about_us;
    });
    if (Array.isArray(this.aboutUs?.blog?.blog_ids) && this.aboutUs?.blog?.blog_ids?.length) {
      this.store.dispatch(new GetBlogs({ status: 1, ids: this.aboutUs?.blog.blog_ids?.join() }));
      this.blog$.subscribe((blogs) => {
        this.blogs = blogs?.data.filter((blog) => this.aboutUs?.blog.blog_ids?.includes(blog?.id));
      });
    }
  }
};
_AboutUsComponent.\u0275fac = function AboutUsComponent_Factory(t) {
  return new (t || _AboutUsComponent)(\u0275\u0275directiveInject(Store));
};
_AboutUsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], decls: 6, vars: 6, consts: [[3, "breadcrumb"], ["class", "fresh-vegetable-section section-lg-space", 4, "ngIf"], ["class", "client-section section-lg-space", 4, "ngIf"], ["class", "team-section section-lg-space", 4, "ngIf"], ["class", "review-section section-lg-space", 4, "ngIf"], ["class", "section-lg-space", 4, "ngIf"], [1, "fresh-vegetable-section", "section-lg-space"], [1, "container-fluid-lg"], [1, "row", "gx-xl-5", "gy-xl-0", "g-3", "ratio_148_1"], [1, "col-xl-6", "col-12"], [1, "row", "g-sm-4", "g-2"], [1, "col-6"], [1, "fresh-image-2"], ["alt", "image", 1, "bg-img", 3, "src"], [1, "fresh-image"], [1, "fresh-contain", "p-center-left"], [1, "review-title"], [1, "delivery-list"], [1, "text-content"], [1, "delivery-box"], [4, "ngFor", "ngForOf"], [1, "delivery-icon"], ["alt", "icon", 3, "src"], [1, "delivery-detail"], [1, "text"], [1, "client-section", "section-lg-space"], [1, "row"], [1, "col-12"], [1, "about-us-title", "text-center"], [1, "center"], [1, "slider-dots"], [3, "options"], ["carouselSlide", ""], [1, "slider-3_1", "product-wrapper"], [1, "clint-contain"], [1, "client-icon"], [3, "src", "alt"], [1, "team-section", "section-lg-space"], [1, "team-box"], [1, "team-iamge"], [1, "img-fluid", 3, "src", "alt"], [1, "team-name"], [1, "team-media"], [4, "ngIf"], [1, "fb-bg", 3, "href"], [1, "ri-facebook-fill"], [1, "pint-bg", 3, "href"], [1, "ri-pinterest-fill"], [1, "twitter-bg", 3, "href"], [1, "ri-twitter-fill"], [1, "insta-bg", 3, "href"], [1, "ri-instagram-fill"], [1, "review-section", "section-lg-space"], [1, "container-fluid"], [1, "reviewer-box"], [1, "ri-double-quotes-r"], [1, "reviewer-profile"], [1, "reviewer-image"], ["alt", "image", 3, "src"], [1, "reviewer-name"], [1, "section-lg-space"], [3, "class", "text", 4, "ngIf"], [1, "blog-box"], [1, "blog-box-image"], [1, "blog-image"], [3, "routerLink"], [1, "blog-detail", "d-block", 3, "routerLink"], [3, "text"]], template: function AboutUsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275template(1, AboutUsComponent_section_1_Template, 26, 6, "section", 1)(2, AboutUsComponent_section_2_Template, 12, 4, "section", 2)(3, AboutUsComponent_section_3_Template, 12, 4, "section", 3)(4, AboutUsComponent_section_4_Template, 12, 4, "section", 4)(5, AboutUsComponent_section_5_Template, 15, 9, "section", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.futures == null ? null : ctx.aboutUs.about.futures.length) && ((ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.content_left_image_url) || (ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.content_right_image_url)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.aboutUs == null ? null : ctx.aboutUs.clients == null ? null : ctx.aboutUs.clients.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.clients == null ? null : ctx.aboutUs.clients.content == null ? null : ctx.aboutUs.clients.content.length) && ((ctx.aboutUs == null ? null : ctx.aboutUs.clients == null ? null : ctx.aboutUs.clients.sub_title) || (ctx.aboutUs == null ? null : ctx.aboutUs.clients == null ? null : ctx.aboutUs.clients.title)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.members == null ? null : ctx.aboutUs.team.members.length) && ((ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.sub_title) || (ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.title)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.reviews == null ? null : ctx.aboutUs.testimonial.reviews.length) && ((ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.sub_title) || (ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.title)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.aboutUs == null ? null : ctx.aboutUs.blog == null ? null : ctx.aboutUs.blog.status);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, CarouselComponent, CarouselSlideDirective, BreadcrumbComponent, NoDataComponent, TranslatePipe], styles: ['\n\n*[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 144, 226, 0.02) 0%,\n      rgba(143, 55, 199, 0.02) 100%);\n  pointer-events: none;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image[_ngcontent-%COMP%], .fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image-2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 12px;\n  position: relative;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image[_ngcontent-%COMP%]::before, .fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image-2[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3) 50%,\n      transparent);\n  transition: left 0.8s ease;\n  z-index: 2;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image[_ngcontent-%COMP%]:hover, .fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image-2[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 40px rgba(74, 144, 226, 0.25), 0 0 30px rgba(143, 55, 199, 0.15);\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image[_ngcontent-%COMP%]:hover::before, .fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image-2[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image-2[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n  filter: brightness(1.1) contrast(1.05) saturate(1.1);\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .fresh-vegetable-section[_ngcontent-%COMP%]   .fresh-image-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 0.6s ease;\n  border-radius: 12px;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .review-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4a90e2;\n  position: relative;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .review-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #4a90e2,\n      #8f37c7);\n  transition: width 0.5s ease;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .review-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4a90e2 0%,\n      #8f37c7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .delivery-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: translateX(8px);\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .delivery-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .delivery-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]   .delivery-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .delivery-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4a90e2 0%,\n      #8f37c7 100%);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.fresh-vegetable-section[_ngcontent-%COMP%]:hover   .review-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  width: 60px;\n}\n.client-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  padding: 80px 0;\n}\n.client-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 25% 25%,\n      rgba(99, 102, 241, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 75% 75%,\n      rgba(139, 92, 246, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.client-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.client-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.client-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-size: 36px;\n  font-weight: 700;\n  position: relative;\n  margin: 0;\n}\n.client-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #f97316);\n  border-radius: 2px;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 45px 25px;\n  text-align: center;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(229, 231, 235, 0.6);\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(1) {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(1)   .client-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(1)   h4[_ngcontent-%COMP%], .client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(1)   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(2) {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(2)   .client-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(2)   h4[_ngcontent-%COMP%], .client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(3) {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(3)   .client-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(3)   h4[_ngcontent-%COMP%], .client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(3)   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(4) {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(4)   .client-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(4)   h4[_ngcontent-%COMP%], .client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:nth-child(4)   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 100%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  border-radius: 24px;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px) scale(1.02);\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]:hover   .client-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotate(10deg);\n  box-shadow: 0 15px 40px rgba(255, 255, 255, 0.3);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]   .client-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 30px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  position: relative;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]   .client-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: -5px;\n  bottom: -5px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.5s ease;\n  z-index: -1;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]   .client-icon[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: scale(1.2);\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]   .client-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px !important;\n  height: 50px !important;\n  object-fit: contain;\n  position: relative;\n  z-index: 2;\n  filter: none !important;\n  max-width: 50px;\n  max-height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  border: 3px solid #ffffff;\n  border-radius: 50%;\n  padding: 8px;\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  opacity: 1;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  transition: all 0.3s ease;\n  line-height: 1.3;\n  flex-shrink: 0;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.5;\n  margin: 0;\n  opacity: 0.9;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.client-section[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n}\n.client-section[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.3);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.client-section[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.6);\n}\n.client-section[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #6366f1;\n}\n.team-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.team-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.02) 0%,\n      rgba(33, 150, 243, 0.02) 100%);\n  pointer-events: none;\n}\n.team-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.team-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n}\n.team-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #4caf50,\n      #2196f3);\n  border-radius: 2px;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n  transition: all 0.4s ease;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 50px rgba(76, 175, 80, 0.15);\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]:hover   .team-iamge[_ngcontent-%COMP%]::before {\n  opacity: 0.1;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]:hover   .team-iamge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]:hover   .team-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]:hover   .team-name[_ngcontent-%COMP%]   .team-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transform: translateY(-3px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-iamge[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-iamge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #2196f3 100%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  z-index: 1;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-iamge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border-radius: 50%;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.fb-bg[_ngcontent-%COMP%] {\n  background: #3b5998;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.pint-bg[_ngcontent-%COMP%] {\n  background: #bd081c;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.twitter-bg[_ngcontent-%COMP%] {\n  background: #1da1f2;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   .team-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.insta-bg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #f09433 0%,\n      #e6683c 25%,\n      #dc2743 50%,\n      #cc2366 75%,\n      #bc1888 100%);\n}\n.review-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.review-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(233, 30, 99, 0.02) 0%,\n      rgba(156, 39, 176, 0.02) 100%);\n  pointer-events: none;\n}\n.review-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.review-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n}\n.review-section[_ngcontent-%COMP%]   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #e91e63,\n      #9c27b0);\n  border-radius: 2px;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  transition: all 0.4s ease;\n  position: relative;\n  overflow: hidden;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #e91e63,\n      #9c27b0);\n  transform: scaleX(0);\n  transition: transform 0.4s ease;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(233, 30, 99, 0.15);\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]:hover   .ri-double-quotes-r[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n  color: #e91e63;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]:hover   .reviewer-image[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  box-shadow: 0 10px 30px rgba(233, 30, 99, 0.3);\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]   .ri-double-quotes-r[_ngcontent-%COMP%] {\n  color: #9c27b0;\n  transition: all 0.4s ease;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]   .reviewer-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  transition: all 0.4s ease;\n  border: 3px solid transparent;\n  background:\n    linear-gradient(\n      45deg,\n      #e91e63,\n      #9c27b0);\n  padding: 3px;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%]   .reviewer-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child {\n  position: relative;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.02) 0%,\n      rgba(244, 67, 54, 0.02) 100%);\n  pointer-events: none;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .about-us-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .about-us-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff9800,\n      #f44336);\n  border-radius: 2px;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  overflow: hidden;\n  transition: all 0.4s ease;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(255, 152, 0, 0.15);\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]:hover   .blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]:hover   .blog-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]:hover   .blog-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]   .blog-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]   .blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.section-lg-space[_ngcontent-%COMP%]:last-child   .blog-box[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.fresh-vegetable-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out;\n}\n.client-section[_ngcontent-%COMP%]   .clint-contain[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n  animation-delay: 0.1s;\n  animation-fill-mode: both;\n}\n.team-section[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n  animation-delay: 0.2s;\n  animation-fill-mode: both;\n}\n.review-section[_ngcontent-%COMP%]   .reviewer-box[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n  animation-delay: 0.3s;\n  animation-fill-mode: both;\n}\n.blog-box[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n  animation-delay: 0.4s;\n  animation-fill-mode: both;\n}\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\napp-breadcrumb[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInDown 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.slider-dots[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\na[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n@media (max-width: 768px) {\n  .fresh-image[_ngcontent-%COMP%]:hover, .fresh-image-2[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n  }\n  .clint-contain[_ngcontent-%COMP%]:hover, .team-box[_ngcontent-%COMP%]:hover, .reviewer-box[_ngcontent-%COMP%]:hover, .blog-box[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_sparkle {\n  0%, 100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, 100% {\n    box-shadow: 0 0 20px rgba(74, 144, 226, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(143, 55, 199, 0.5);\n  }\n}\n/*# sourceMappingURL=about-us.component.css.map */'] });
var AboutUsComponent = _AboutUsComponent;
__decorate([
  Select(BlogState.blog)
], AboutUsComponent.prototype, "blog$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], AboutUsComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src\\app\\components\\page\\about-us\\about-us.component.ts", lineNumber: 26 });
})();

// src/app/components/page/search/search.component.ts
var _c02 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
function SearchComponent_ng_container_26_app_skeleton_product_box_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
}
function SearchComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SearchComponent_ng_container_26_app_skeleton_product_box_1_Template, 1, 0, "app-skeleton-product-box", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletonItems);
  }
}
function SearchComponent_ng_template_27_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div");
    \u0275\u0275element(3, "app-product-box", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("product", product_r3);
  }
}
function SearchComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SearchComponent_ng_template_27_div_0_Template, 4, 3, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function SearchComponent_app_no_data_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "sorry_cant_find_products_looking")("description", "please_check_misspelt_something_searching_other_way");
  }
}
var _SearchComponent = class _SearchComponent {
  constructor(store, productService, route, router) {
    this.store = store;
    this.productService = productService;
    this.route = route;
    this.router = router;
    this.breadcrumb = {
      title: "Search",
      items: [{ label: "Search", active: true }]
    };
    this.search = new FormControl();
    this.totalItems = 0;
    this.gridClass = "row g-sm-4 g-3 row-cols-2 row-cols-md-3 cols-lg-4 row-cols-xxl-6 product-list-section";
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.filter = {
      "page": 1,
      "paginate": 12,
      "status": 1,
      "search": ""
    };
    this.route.queryParams.subscribe((params) => {
      if (params["search"]) {
        this.filter["search"] = params["search"];
        this.search.patchValue(params["search"] ? params["search"] : "");
      }
      this.store.dispatch(new GetProducts(this.filter)).subscribe({
        next: (val) => {
          this.products = val.product.product.data;
        }
      });
    });
  }
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((inputValue) => {
      if (inputValue.length == 0) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            search: inputValue
          }
        });
        this.filter["search"] = inputValue;
      }
    });
    this.themeOption$.subscribe((option) => {
      if (option?.product?.product_box_variant === "digital") {
        this.gridClass = "row g-sm-4 g-3 row-custom-col-1 row-cols-1 row-cols-sm-2 cols-lg-4 row-cols-xxl-4 product-list-section";
      }
    });
  }
  searchProduct() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.search.value
      }
    });
    this.filter["search"] = this.search.value;
  }
};
_SearchComponent.\u0275fac = function SearchComponent_Factory(t) {
  return new (t || _SearchComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_SearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], decls: 30, vars: 32, consts: [["productContent", ""], [3, "breadcrumb"], [1, "search-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-6", "col-xl-8", "mx-auto"], [1, "title", "d-block", "text-center"], [1, "title-leaf"], [1, "icon-width"], [0, "xlink", "href", "../assets/svg/leaf.svg#leaf"], [1, "search-box"], [1, "input-group"], ["type", "text", 1, "form-control", 3, "formControl"], [3, "click", "type", "id", "spinner"], [1, "section-b-space"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], [3, "class", "image", "text", "description", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "search-product", "product-wrapper"], [3, "product"], [3, "image", "text", "description"]], template: function SearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 8);
    \u0275\u0275element(11, "use", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275element(14, "input", 12);
    \u0275\u0275elementStart(15, "app-button", 13);
    \u0275\u0275listener("click", function SearchComponent_Template_app_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.searchProduct());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(18, "section", 14)(19, "div", 3)(20, "div", 15);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "async");
    \u0275\u0275pipe(24, "async");
    \u0275\u0275elementStart(25, "div");
    \u0275\u0275template(26, SearchComponent_ng_container_26_Template, 2, 1, "ng-container", 16)(27, SearchComponent_ng_template_27_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, SearchComponent_app_no_data_29_Template, 1, 5, "app-no-data", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const productContent_r4 = \u0275\u0275reference(28);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "search_for_products"));
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx.search);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn theme-bg-color text-white m-0");
    \u0275\u0275property("type", "button")("id", "search-btn")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "search"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(27, _c02, (tmp_9_0 = \u0275\u0275pipeBind1(21, 19, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.full_border, (tmp_9_0 = \u0275\u0275pipeBind1(22, 21, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.image_bg, (tmp_9_0 = \u0275\u0275pipeBind1(23, 23, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.product_box_bg, (tmp_9_0 = \u0275\u0275pipeBind1(24, 25, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.product_box_border));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx.gridClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.productService.skeletonLoader)("ngIfElse", productContent_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx.products == null ? null : ctx.products.length) && !ctx.productService.skeletonLoader);
  }
}, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, BreadcrumbComponent, ButtonComponent, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, AsyncPipe, TranslatePipe] });
var SearchComponent = _SearchComponent;
__decorate([
  Select(ProductState.product)
], SearchComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], SearchComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src\\app\\components\\page\\search\\search.component.ts", lineNumber: 21 });
})();

// src/app/components/page/page-routing.module.ts
var routes = [
  {
    path: "page/:slug",
    component: PageComponent,
    resolve: {
      data: PageResolver
    }
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "offers",
    component: OfferComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "search",
    component: SearchComponent
  }
];
var _PagesRoutingModule = class _PagesRoutingModule {
};
_PagesRoutingModule.\u0275fac = function PagesRoutingModule_Factory(t) {
  return new (t || _PagesRoutingModule)();
};
_PagesRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PagesRoutingModule });
_PagesRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var PagesRoutingModule = _PagesRoutingModule;

// src/app/components/page/page.module.ts
var _PagesModule = class _PagesModule {
};
_PagesModule.\u0275fac = function PagesModule_Factory(t) {
  return new (t || _PagesModule)();
};
_PagesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PagesModule });
_PagesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  PagesRoutingModule,
  SharedModule,
  TranslateModule
] });
var PagesModule = _PagesModule;
export {
  PagesModule
};
//# sourceMappingURL=chunk-5ZQBNJC4.js.map
