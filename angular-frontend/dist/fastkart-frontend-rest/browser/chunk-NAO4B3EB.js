import {
  AttributeState,
  AuthGuard,
  GetAttributes,
  GetStoreBySlug,
  GetStores,
  QuestionAnswersState,
  QuestionsAnswersService,
  ReviewState,
  StoreService,
  StoreState
} from "./chunk-QSXMB2OB.js";
import {
  BrandState,
  GetBrandBySlug,
  GetBrands,
  SeoService
} from "./chunk-45MFMN27.js";
import {
  GetOrderStatus,
  OrderState,
  OrderStatusState
} from "./chunk-7LRX5UZJ.js";
import {
  AccountState,
  ActivatedRoute,
  AddToCart,
  AddToCompare,
  AddToWishlist,
  AddressModalComponent,
  AlertComponent,
  AsyncPipe,
  AttributeService,
  AuthService,
  AuthState,
  BreadcrumbComponent,
  BreadcrumbDigitalComponent,
  ButtonComponent,
  CarouselComponent,
  CarouselSlideDirective,
  CartService,
  CartState,
  CategoriesComponent,
  CategoryState,
  ChangeDetectorRef,
  CheckboxControlValueAccessor,
  Checkout,
  ClearCart,
  CommonModule,
  CompareService,
  CompareState,
  Component,
  CountryState,
  CurrencySymbolPipe,
  DatePipe,
  DefaultValueAccessor,
  DeleteCart,
  DeleteCompare,
  DeleteWishlist,
  DeliveryReturnModalComponent,
  DomSanitizer,
  EventEmitter,
  Feedback,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  GetCategoryBySlug,
  GetCompare,
  GetProductBySlug,
  GetProducts,
  GetQuestionAnswers,
  GetReview,
  GetSettingOption,
  GetStoreProducts,
  GetUserDetails,
  GetWishlist,
  ImageLinkComponent,
  Input,
  InputFlags,
  LoaderComponent,
  ModalDismissReasons,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbModal,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  NgbRating,
  NgxsModule,
  NoDataComponent,
  NumberValueAccessor,
  OrderTracking,
  Output,
  PaginationComponent,
  PlaceOrder,
  ProductBoxComponent,
  ProductService,
  ProductState,
  QuestionModalComponent,
  Renderer2,
  ReviewModalComponent,
  Router,
  RouterLink,
  RouterModule,
  SaleTimerComponent,
  SearchFilterPipe,
  Select,
  Select2,
  SettingState,
  SharedModule,
  SizeChartModalComponent,
  SkeletonProductBoxComponent,
  SlicePipe,
  StateState,
  Store,
  Subject,
  SummaryPipe,
  ThemeOptionState,
  TitleCasePipe,
  TitleCasePipe2,
  TitleComponent,
  TranslateModule,
  TranslatePipe,
  UpdateCart,
  UpperCasePipe,
  Validators,
  VariantAttributesComponent,
  ViewChild,
  WishlistService,
  WishlistState,
  __async,
  __decorate,
  categorySlider,
  countryCodes,
  environment,
  inject,
  map,
  mergeMap,
  of,
  productMainThumbSlider,
  productSliderLayout,
  productThumbSlider,
  setClassMetadata,
  singleSlider,
  switchMap,
  takeUntil,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WW7SXIET.js";

// node_modules/ngx-image-zoom/fesm2020/ngx-image-zoom.mjs
var _c0 = ["zoomContainer"];
var _c1 = ["imageThumbnail"];
var _c2 = ["fullSizeImage"];
var _c3 = (a0) => ({
  ngxImageZoomFullContainer: true,
  ngxImageZoomLensEnabled: a0
});
var NgxImageZoomComponent = class _NgxImageZoomComponent {
  constructor(renderer, changeDetectorRef) {
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.zoomScroll = new EventEmitter();
    this.zoomPosition = new EventEmitter();
    this.imagesLoaded = new EventEmitter();
    this.enableLens = false;
    this.lensBorderRadius = 0;
    this.thumbWidth = 0;
    this.thumbHeight = 0;
    this.fullWidth = 0;
    this.fullHeight = 0;
    this.lensWidth = 100;
    this.lensHeight = 100;
    this.zoomMode = "hover";
    this.magnification = 1;
    this.enableScrollZoom = false;
    this.scrollStepSize = 0.1;
    this.circularLens = false;
    this.minZoomRatio = 1;
    this.maxZoomRatio = 2;
    this.xRatio = 0;
    this.yRatio = 0;
    this.zoomingEnabled = false;
    this.zoomFrozen = false;
    this.isReady = false;
    this.thumbImageLoaded = false;
    this.fullImageLoaded = false;
    this.latestMouseLeft = -1;
    this.latestMouseTop = -1;
    this.eventListeners = [];
    this.altText = "";
    this.titleText = "";
  }
  set setThumbImage(thumbImage) {
    this.thumbImageLoaded = false;
    this.setIsReady(false);
    this.thumbImage = thumbImage;
  }
  set setFullImage(fullImage) {
    this.fullImageLoaded = false;
    this.setIsReady(false);
    this.fullImage = fullImage;
  }
  set setZoomMode(zoomMode) {
    if (_NgxImageZoomComponent.validZoomModes.some((m) => m === zoomMode)) {
      this.zoomMode = zoomMode;
    }
  }
  set setMagnification(magnification) {
    this.magnification = Number(magnification) || this.magnification;
    this.zoomScroll.emit(this.magnification);
  }
  set setMinZoomRatio(minZoomRatio) {
    const ratio = Number(minZoomRatio) || this.minZoomRatio || this.baseRatio || 0;
    this.minZoomRatio = Math.max(ratio, this.baseRatio || 0);
  }
  set setMaxZoomRatio(maxZoomRatio) {
    this.maxZoomRatio = Number(maxZoomRatio) || this.maxZoomRatio;
  }
  set setScrollStepSize(stepSize) {
    this.scrollStepSize = Number(stepSize) || this.scrollStepSize;
  }
  set setEnableLens(enable) {
    this.enableLens = Boolean(enable);
  }
  set setLensWidth(width) {
    this.lensWidth = Number(width) || this.lensWidth;
  }
  set setLensHeight(height) {
    this.lensHeight = Number(height) || this.lensHeight;
  }
  set setCircularLens(enable) {
    this.circularLens = Boolean(enable);
  }
  set setEnableScrollZoom(enable) {
    this.enableScrollZoom = Boolean(enable);
  }
  ngOnInit() {
    this.setUpEventListeners();
  }
  ngOnChanges() {
    if (this.enableLens) {
      if (this.circularLens) {
        this.lensBorderRadius = this.lensWidth / 2;
      } else {
        this.lensBorderRadius = 0;
      }
    }
    this.calculateRatioAndOffset();
    this.calculateImageAndLensPosition();
  }
  ngOnDestroy() {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }
  /**
   * Template helper methods
   */
  onThumbImageLoaded() {
    this.thumbImageLoaded = true;
    this.checkImagesLoaded();
  }
  onFullImageLoaded() {
    this.fullImageLoaded = true;
    this.checkImagesLoaded();
  }
  setUpEventListeners() {
    const nativeElement = this.zoomContainer.nativeElement;
    switch (this.zoomMode) {
      case "hover":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseenter", (event) => this.hoverMouseEnter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.hoverMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.hoverMouseMove(event)));
        break;
      case "toggle":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.toggleClick(event)));
        break;
      case "toggle-click":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.toggleClick(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.clickMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.clickMouseMove(event)));
        break;
      case "click":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.clickStarter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.clickMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.clickMouseMove(event)));
        break;
      case "toggle-freeze":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseleave", () => this.toggleFreezeMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.toggleFreezeMouseMove(event)), this.renderer.listen(nativeElement, "click", (event) => this.toggleFreezeClick(event)));
        break;
      case "hover-freeze":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseenter", (event) => this.hoverFreezeMouseEnter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.toggleFreezeMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.toggleFreezeMouseMove(event)), this.renderer.listen(nativeElement, "click", (event) => this.hoverFreezeClick(event)));
        break;
    }
    if (this.enableScrollZoom) {
      this.eventListeners.push(this.renderer.listen(nativeElement, "mousewheel", (event) => this.onMouseWheel(event)), this.renderer.listen(nativeElement, "DOMMouseScroll", (event) => this.onMouseWheel(event)), this.renderer.listen(nativeElement, "onmousewheel", (event) => this.onMouseWheel(event)));
    }
    if (this.enableLens && this.circularLens) {
      this.lensBorderRadius = this.lensWidth / 2;
    }
  }
  checkImagesLoaded() {
    this.calculateRatioAndOffset();
    if (this.thumbImageLoaded && this.fullImageLoaded) {
      this.calculateImageAndLensPosition();
      this.setIsReady(true);
    }
  }
  setIsReady(value) {
    this.isReady = value;
    this.imagesLoaded.emit(value);
  }
  /**
   * Zoom position setters
   */
  setZoomPosition(left, top) {
    this.latestMouseLeft = Number(left) || this.latestMouseLeft;
    this.latestMouseTop = Number(top) || this.latestMouseTop;
    const c = {
      x: this.latestMouseLeft,
      y: this.latestMouseTop
    };
    this.zoomPosition.emit(c);
  }
  /**
   * Mouse wheel event
   */
  onMouseWheel(event) {
    if (!this.zoomingEnabled || this.zoomFrozen) {
      return;
    }
    event = window.event || event;
    const direction = Math.max(Math.min(event.wheelDelta || -event.detail, 1), -1);
    if (direction > 0) {
      this.setMagnification = Math.min(this.magnification + this.scrollStepSize, this.maxZoomRatio);
    } else {
      this.setMagnification = Math.max(this.magnification - this.scrollStepSize, this.minZoomRatio);
    }
    this.calculateRatio();
    this.calculateZoomPosition(event);
    event.returnValue = false;
    if (event.preventDefault) {
      event.preventDefault();
    }
  }
  /**
   * Hover mode
   */
  hoverMouseEnter(event) {
    this.zoomOn(event);
  }
  hoverMouseLeave() {
    this.zoomOff();
  }
  hoverMouseMove(event) {
    this.calculateZoomPosition(event);
  }
  /**
   * Toggle mode
   */
  toggleClick(event) {
    if (this.zoomingEnabled) {
      this.zoomOff();
    } else {
      this.zoomOn(event);
    }
  }
  /**
   * Click mode
   */
  clickStarter(event) {
    if (this.zoomingEnabled === false) {
      this.zoomOn(event);
    }
  }
  clickMouseLeave() {
    this.zoomOff();
  }
  clickMouseMove(event) {
    if (this.zoomingEnabled) {
      this.calculateZoomPosition(event);
    }
  }
  /**
   * Toggle freeze mode
   */
  toggleFreezeMouseEnter(event) {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.zoomOn(event);
    }
  }
  hoverFreezeMouseEnter(event) {
    if (!this.zoomFrozen) {
      this.zoomOn(event);
    }
  }
  toggleFreezeMouseLeave() {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.zoomOff();
    }
  }
  toggleFreezeMouseMove(event) {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.calculateZoomPosition(event);
    }
  }
  toggleFreezeClick(event) {
    if (this.zoomingEnabled && this.zoomFrozen) {
      this.zoomFrozen = false;
      this.zoomOff();
    } else if (this.zoomingEnabled) {
      this.zoomFrozen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.zoomOn(event);
    }
  }
  hoverFreezeClick(event) {
    if (this.zoomingEnabled && this.zoomFrozen) {
      this.zoomFrozen = false;
    } else if (this.zoomingEnabled) {
      this.zoomFrozen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.zoomOn(event);
    }
  }
  /**
   * Private helper methods
   */
  zoomOn(event) {
    if (this.isReady) {
      this.zoomingEnabled = true;
      this.calculateRatioAndOffset();
      this.display = "block";
      this.calculateZoomPosition(event);
      this.changeDetectorRef.markForCheck();
    }
  }
  zoomOff() {
    this.zoomingEnabled = false;
    this.display = "none";
    this.changeDetectorRef.markForCheck();
  }
  calculateZoomPosition(event) {
    const newLeft = Math.max(Math.min(event.offsetX, this.thumbWidth), 0);
    const newTop = Math.max(Math.min(event.offsetY, this.thumbHeight), 0);
    this.setZoomPosition(newLeft, newTop);
    this.calculateImageAndLensPosition();
    this.changeDetectorRef.markForCheck();
  }
  calculateImageAndLensPosition() {
    let lensLeftMod = 0;
    let lensTopMod = 0;
    if (this.enableLens && this.latestMouseLeft > 0) {
      lensLeftMod = this.lensLeft = this.latestMouseLeft - this.lensWidth / 2;
      lensTopMod = this.lensTop = this.latestMouseTop - this.lensHeight / 2;
    }
    this.fullImageLeft = this.latestMouseLeft * -this.xRatio - lensLeftMod;
    this.fullImageTop = this.latestMouseTop * -this.yRatio - lensTopMod;
  }
  calculateRatioAndOffset() {
    this.thumbWidth = this.imageThumbnail.nativeElement.width;
    this.thumbHeight = this.imageThumbnail.nativeElement.height;
    if (!this.enableLens) {
      this.lensWidth = this.thumbWidth;
      this.lensHeight = this.thumbHeight;
      this.lensLeft = 0;
      this.lensTop = 0;
    }
    this.offsetTop = this.imageThumbnail.nativeElement.getBoundingClientRect().top;
    this.offsetLeft = this.imageThumbnail.nativeElement.getBoundingClientRect().left;
    if (this.fullImage === void 0) {
      this.fullImage = this.thumbImage;
    }
    if (this.fullImageLoaded) {
      this.fullWidth = this.fullSizeImage.nativeElement.naturalWidth;
      this.fullHeight = this.fullSizeImage.nativeElement.naturalHeight;
      this.baseRatio = Math.max(this.thumbWidth / this.fullWidth, this.thumbHeight / this.fullHeight);
      this.minZoomRatio = Math.max(this.minZoomRatio || 0, this.baseRatio || 0);
      this.calculateRatio();
    }
  }
  calculateRatio() {
    this.magnifiedWidth = this.fullWidth * this.magnification;
    this.magnifiedHeight = this.fullHeight * this.magnification;
    this.xRatio = (this.magnifiedWidth - this.thumbWidth) / this.thumbWidth;
    this.yRatio = (this.magnifiedHeight - this.thumbHeight) / this.thumbHeight;
  }
};
NgxImageZoomComponent.validZoomModes = ["hover", "toggle", "click", "toggle-click", "toggle-freeze", "hover-freeze"];
NgxImageZoomComponent.\u0275fac = function NgxImageZoomComponent_Factory(t) {
  return new (t || NgxImageZoomComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
};
NgxImageZoomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxImageZoomComponent,
  selectors: [["lib-ngx-image-zoom"]],
  viewQuery: function NgxImageZoomComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
      \u0275\u0275viewQuery(_c1, 7);
      \u0275\u0275viewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageThumbnail = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fullSizeImage = _t.first);
    }
  },
  inputs: {
    setThumbImage: [InputFlags.None, "thumbImage", "setThumbImage"],
    setFullImage: [InputFlags.None, "fullImage", "setFullImage"],
    setZoomMode: [InputFlags.None, "zoomMode", "setZoomMode"],
    setMagnification: [InputFlags.None, "magnification", "setMagnification"],
    setMinZoomRatio: [InputFlags.None, "minZoomRatio", "setMinZoomRatio"],
    setMaxZoomRatio: [InputFlags.None, "maxZoomRatio", "setMaxZoomRatio"],
    setScrollStepSize: [InputFlags.None, "scrollStepSize", "setScrollStepSize"],
    setEnableLens: [InputFlags.None, "enableLens", "setEnableLens"],
    setLensWidth: [InputFlags.None, "lensWidth", "setLensWidth"],
    setLensHeight: [InputFlags.None, "lensHeight", "setLensHeight"],
    setCircularLens: [InputFlags.None, "circularLens", "setCircularLens"],
    setEnableScrollZoom: [InputFlags.None, "enableScrollZoom", "setEnableScrollZoom"],
    altText: "altText",
    titleText: "titleText"
  },
  outputs: {
    zoomScroll: "zoomScroll",
    zoomPosition: "zoomPosition",
    imagesLoaded: "imagesLoaded"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 7,
  vars: 35,
  consts: [["zoomContainer", ""], ["imageThumbnail", ""], ["fullSizeImage", ""], [1, "ngxImageZoomContainer"], [1, "ngxImageZoomThumbnail", 3, "load", "alt", "title", "src"], [3, "ngClass"], [1, "ngxImageZoomFull", 3, "load", "alt", "title", "src"]],
  template: function NgxImageZoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3, 0)(2, "img", 4, 1);
      \u0275\u0275listener("load", function NgxImageZoomComponent_Template_img_load_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onThumbImageLoaded());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "img", 6, 2);
      \u0275\u0275listener("load", function NgxImageZoomComponent_Template_img_load_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFullImageLoaded());
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.thumbWidth, "px")("height", ctx.thumbHeight, "px");
      \u0275\u0275advance(2);
      \u0275\u0275property("alt", ctx.altText)("title", ctx.titleText)("src", ctx.thumbImage, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("display", ctx.display)("top", ctx.lensTop, "px")("left", ctx.lensLeft, "px")("width", ctx.lensWidth, "px")("height", ctx.lensHeight, "px")("border-radius", ctx.lensBorderRadius, "px");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c3, ctx.enableLens));
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.display)("top", ctx.fullImageTop, "px")("left", ctx.fullImageLeft, "px")("width", ctx.magnifiedWidth, "px")("height", ctx.magnifiedHeight, "px");
      \u0275\u0275property("alt", ctx.altText)("title", ctx.titleText)("src", ctx.fullImage, \u0275\u0275sanitizeUrl);
    }
  },
  dependencies: [NgClass],
  styles: [".ngxImageZoomContainer[_ngcontent-%COMP%]{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail[_ngcontent-%COMP%]{pointer-events:all}.ngxImageZoomFull[_ngcontent-%COMP%]{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer[_ngcontent-%COMP%]{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled[_ngcontent-%COMP%]{border:2px solid red;cursor:crosshair;pointer-events:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxImageZoomComponent, [{
    type: Component,
    args: [{
      selector: "lib-ngx-image-zoom",
      template: '<div\n    #zoomContainer\n    class="ngxImageZoomContainer"\n    [style.width.px]="this.thumbWidth"\n    [style.height.px]="this.thumbHeight"\n>\n    <img\n        #imageThumbnail\n        class="ngxImageZoomThumbnail"\n        [alt]="altText"\n        [title]="titleText"\n        [src]="thumbImage"\n        (load)="onThumbImageLoaded()"\n    />\n\n    <div\n        [ngClass]="{\n            ngxImageZoomFullContainer: true,\n            ngxImageZoomLensEnabled: this.enableLens\n        }"\n        [style.display]="this.display"\n        [style.top.px]="this.lensTop"\n        [style.left.px]="this.lensLeft"\n        [style.width.px]="this.lensWidth"\n        [style.height.px]="this.lensHeight"\n        [style.border-radius.px]="this.lensBorderRadius"\n    >\n        <img\n            #fullSizeImage\n            class="ngxImageZoomFull"\n            [alt]="altText"\n            [title]="titleText"\n            [src]="fullImage"\n            (load)="onFullImageLoaded()"\n            [style.display]="this.display"\n            [style.top.px]="this.fullImageTop"\n            [style.left.px]="this.fullImageLeft"\n            [style.width.px]="this.magnifiedWidth"\n            [style.height.px]="this.magnifiedHeight"\n        />\n    </div>\n</div>\n',
      styles: [".ngxImageZoomContainer{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail{pointer-events:all}.ngxImageZoomFull{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled{border:2px solid red;cursor:crosshair;pointer-events:none}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    zoomContainer: [{
      type: ViewChild,
      args: ["zoomContainer", {
        static: true
      }]
    }],
    imageThumbnail: [{
      type: ViewChild,
      args: ["imageThumbnail", {
        static: true
      }]
    }],
    fullSizeImage: [{
      type: ViewChild,
      args: ["fullSizeImage", {
        static: true
      }]
    }],
    zoomScroll: [{
      type: Output
    }],
    zoomPosition: [{
      type: Output
    }],
    imagesLoaded: [{
      type: Output
    }],
    setThumbImage: [{
      type: Input,
      args: ["thumbImage"]
    }],
    setFullImage: [{
      type: Input,
      args: ["fullImage"]
    }],
    setZoomMode: [{
      type: Input,
      args: ["zoomMode"]
    }],
    setMagnification: [{
      type: Input,
      args: ["magnification"]
    }],
    setMinZoomRatio: [{
      type: Input,
      args: ["minZoomRatio"]
    }],
    setMaxZoomRatio: [{
      type: Input,
      args: ["maxZoomRatio"]
    }],
    setScrollStepSize: [{
      type: Input,
      args: ["scrollStepSize"]
    }],
    setEnableLens: [{
      type: Input,
      args: ["enableLens"]
    }],
    setLensWidth: [{
      type: Input,
      args: ["lensWidth"]
    }],
    setLensHeight: [{
      type: Input,
      args: ["lensHeight"]
    }],
    setCircularLens: [{
      type: Input,
      args: ["circularLens"]
    }],
    setEnableScrollZoom: [{
      type: Input,
      args: ["enableScrollZoom"]
    }],
    altText: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }]
  });
})();
var NgxImageZoomModule = class {
};
NgxImageZoomModule.\u0275fac = function NgxImageZoomModule_Factory(t) {
  return new (t || NgxImageZoomModule)();
};
NgxImageZoomModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxImageZoomModule
});
NgxImageZoomModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxImageZoomModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxImageZoomComponent],
      imports: [CommonModule],
      exports: [NgxImageZoomComponent]
    }]
  }], null, null);
})();

// src/app/shared/resolvers/product.resolver.ts
var ProductResolver = (route, state) => {
  return inject(Store).dispatch(new GetProductBySlug(route.paramMap.get("slug")));
};

// src/app/shared/resolvers/store.resolver.ts
var StoreResolver = (route, state) => {
  return inject(Store).dispatch(new GetStoreBySlug(route.paramMap.get("slug")));
};

// src/app/shared/resolvers/brand.resolver.ts
var BrandResolver = (route, state) => {
  return inject(Store).dispatch(new GetBrandBySlug(route.paramMap.get("slug")));
};

// src/app/core/guard/checkout.guard.ts
var _CheckoutGuard = class _CheckoutGuard {
  constructor(store, router, authService) {
    this.store = store;
    this.router = router;
    this.authService = authService;
  }
  canActivate(route, state) {
    this.authService.redirectUrl = state.url;
    if (this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      this.store.dispatch(new GetUserDetails()).subscribe({
        complete: () => {
          return true;
        }
      });
    } else {
      if (this.store.selectSnapshot((state2) => state2.setting).setting.activation.guest_checkout) {
        if (this.store.selectSnapshot((state2) => state2.cart.is_digital_only)) {
          return this.router.createUrlTree(["/auth/login"]);
        }
      } else {
        return this.router.createUrlTree(["/auth/login"]);
      }
    }
    return true;
  }
};
_CheckoutGuard.\u0275fac = function CheckoutGuard_Factory(t) {
  return new (t || _CheckoutGuard)(\u0275\u0275inject(Store), \u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
};
_CheckoutGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckoutGuard, factory: _CheckoutGuard.\u0275fac, providedIn: "root" });
var CheckoutGuard = _CheckoutGuard;

// src/app/components/shop/cart/cart.component.ts
var _c02 = () => ["/checkout/"];
var _c12 = () => ["/collections/"];
var _c22 = (a0) => ["/product/", a0];
function CartComponent_div_3_tr_6_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "unit"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.product.unit, " ");
  }
}
function CartComponent_div_3_tr_6_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.price));
  }
}
function CartComponent_div_3_tr_6_li_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h5", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "saving"), ": ", \u0275\u0275pipeBind1(4, 4, ((item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation.price : item_r2.product.price) - (item_r2.variation ? item_r2 == null ? null : item_r2.variation.sale_price : item_r2.product.sale_price)), " ");
  }
}
function CartComponent_div_3_tr_6_del_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r2.variation ? item_r2.variation.price : item_r2.product.price));
  }
}
function CartComponent_div_3_tr_6_h6_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "you_save"), " : ", \u0275\u0275pipeBind1(3, 4, (item_r2.variation ? item_r2.variation.price : item_r2.product.price) - (item_r2.variation ? item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price)), " ");
  }
}
function CartComponent_div_3_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 26)(1, "td", 27)(2, "div", 28)(3, "a", 29);
    \u0275\u0275element(4, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "ul")(7, "li", 31)(8, "a", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, CartComponent_div_3_tr_6_li_10_Template, 5, 4, "li", 33);
    \u0275\u0275elementStart(11, "li")(12, "h5", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 35);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, CartComponent_div_3_tr_6_span_18_Template, 3, 3, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CartComponent_div_3_tr_6_li_19_Template, 5, 6, "li", 36);
    \u0275\u0275elementStart(20, "li", 37)(21, "div", 38)(22, "div", 39)(23, "app-button", 40);
    \u0275\u0275listener("click", function CartComponent_div_3_tr_6_Template_app_button_click_23_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, -1));
    });
    \u0275\u0275element(24, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 42);
    \u0275\u0275elementStart(26, "app-button", 40);
    \u0275\u0275listener("click", function CartComponent_div_3_tr_6_Template_app_button_click_26_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, 1));
    });
    \u0275\u0275element(27, "i", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "li")(29, "h5");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275pipe(32, "currencySymbol");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(33, "td", 15)(34, "h4", 44);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "h5");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "currencySymbol");
    \u0275\u0275template(40, CartComponent_div_3_tr_6_del_40_Template, 3, 3, "del", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, CartComponent_div_3_tr_6_h6_41_Template, 4, 6, "h6", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 46)(43, "h4", 44);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 47)(47, "div", 38)(48, "div", 39)(49, "app-button", 40);
    \u0275\u0275listener("click", function CartComponent_div_3_tr_6_Template_app_button_click_49_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, -1));
    });
    \u0275\u0275element(50, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 42);
    \u0275\u0275elementStart(52, "app-button", 40);
    \u0275\u0275listener("click", function CartComponent_div_3_tr_6_Template_app_button_click_52_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, 1));
    });
    \u0275\u0275element(53, "i", 43);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "td", 48)(55, "h4", 44);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "h5");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "td", 49)(62, "h4", 44);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "a", 50);
    \u0275\u0275listener("click", function CartComponent_div_3_tr_6_Template_a_click_65_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToWishlist(item_r2));
    });
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "a", 51);
    \u0275\u0275listener("click", function CartComponent_div_3_tr_6_Template_a_click_68_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(item_r2.id));
    });
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(67, _c22, item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r2 == null ? null : item_r2.variation) && (item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.variation_image) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.variation_image == null ? null : item_r2.variation.variation_image.original_url : (item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.product_thumbnail) ? item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.product_thumbnail == null ? null : item_r2.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(69, _c22, item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (item_r2 == null ? null : item_r2.variation) ? item_r2.variation.name : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.unit));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 43, "price"), " : ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 45, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.discount);
    \u0275\u0275advance(4);
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "minus_quantity")("spinner", false)("type", "button");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", item_r2.quantity);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "plus_quantity")("spinner", false)("type", "button");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(31, 47, "total"), ": ", \u0275\u0275pipeBind1(32, 49, ((item_r2 == null ? null : item_r2.variation) ? item_r2.variation.sale_price : item_r2.product.sale_price) * (item_r2 == null ? null : item_r2.quantity)), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 51, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 53, (item_r2 == null ? null : item_r2.variation) ? item_r2 == null ? null : item_r2.variation == null ? null : item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.product.discount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 55, "quantity"));
    \u0275\u0275advance(5);
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "minus_quantity")("spinner", false)("type", "button");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", item_r2.quantity);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "plus_quantity")("spinner", false)("type", "button");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 57, "total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 59, (item_r2.variation ? item_r2.variation.sale_price : (item_r2 == null ? null : item_r2.product) && (item_r2 == null ? null : item_r2.wholesale_price) ? item_r2 == null ? null : item_r2.wholesale_price : item_r2 == null ? null : item_r2.product == null ? null : item_r2.product.sale_price) * item_r2.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 61, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 63, "save_for_later"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 65, "remove"));
  }
}
function CartComponent_div_3_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "shipping"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "cost_at_checkout"));
  }
}
function CartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "table", 9)(5, "tbody");
    \u0275\u0275template(6, CartComponent_div_3_tr_6_Template, 71, 71, "tr", 10);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12)(10, "div", 13)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "ul")(16, "li")(17, "h4");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h4", 15);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, CartComponent_div_3_li_24_Template, 7, 6, "li", 16);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementStart(26, "li", 17)(27, "h4");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h4", 18);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "ul", 19)(34, "li", 20)(35, "h4");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h4", 21);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275pipe(41, "currencySymbol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 22)(43, "ul")(44, "li")(45, "a", 23);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "li")(49, "a", 24);
    \u0275\u0275element(50, "i", 25);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 13, ctx_r2.cartItem$));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "cart_total"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, \u0275\u0275pipeBind1(22, 19, ctx_r2.cartTotal$) || 0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(25, 23, ctx_r2.cartDigital$));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 25, "tax"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 27, "cost_at_checkout"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 29, "total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 33, \u0275\u0275pipeBind1(40, 31, ctx_r2.cartTotal$) || 0));
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c02));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 35, "process_to_checkout"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 37, "return_to_shopping"), " ");
  }
}
function CartComponent_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 55);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Items Added")("description", "It appears that nothing has been added to your cart.");
  }
}
var _CartComponent = class _CartComponent {
  constructor(store) {
    this.store = store;
    this.breadcrumb = {
      title: "Cart",
      items: [{ label: "Cart", active: true }]
    };
  }
  updateQuantity(item, qty) {
    const params = {
      id: item?.id,
      product: item?.product,
      product_id: item?.product?.id,
      variation: item?.variation,
      variation_id: item?.variation_id ? item?.variation_id : null,
      quantity: qty
    };
    this.store.dispatch(new UpdateCart(params));
  }
  addToWishlist(item) {
    this.store.dispatch(new AddToWishlist({ product_id: item.product.id })).subscribe({
      complete: () => {
        this.delete(item.id);
      }
    });
  }
  delete(id) {
    this.store.dispatch(new DeleteCart(id));
  }
};
_CartComponent.\u0275fac = function CartComponent_Factory(t) {
  return new (t || _CartComponent)(\u0275\u0275directiveInject(Store));
};
_CartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 7, vars: 7, consts: [[3, "breadcrumb"], [1, "cart-section", "section-b-space"], [1, "container-fluid-lg"], ["class", "row g-xl-5 g-sm-4 g-3", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "row", "g-xl-5", "g-sm-4", "g-3"], [1, "col-xxl-9", "col-xl-8"], [1, "cart-table"], [1, "table-responsive"], [1, "table"], ["class", "product-box-contain", 4, "ngFor", "ngForOf"], [1, "col-xxl-3", "col-xl-4"], [1, "summery-box", "p-sticky"], [1, "summery-header"], [1, "summery-contain"], [1, "price"], ["class", "align-items-start", 4, "ngIf"], [1, "align-items-start"], [1, "price", "text-end"], [1, "summery-total"], [1, "list-total", "border-top-0"], [1, "price", "theme-color"], [1, "button-group", "cart-button"], [1, "btn", "btn-animation", "proceed-btn", "fw-bold", 3, "routerLink"], [1, "btn", "shopping-button", 3, "routerLink"], [1, "ri-arrow-left-line", "me-2"], [1, "product-box-contain"], [1, "product-detail"], [1, "product", "border-0"], [1, "product-image", 3, "routerLink"], ["alt", "product", 1, "img-fluid", 3, "src"], [1, "name"], [3, "routerLink"], ["class", "text-content", 4, "ngIf"], [1, "text-content", "d-inline-block"], [1, "text-content"], [4, "ngIf"], [1, "quantity-price-box"], [1, "cart_qty"], [1, "input-group"], [3, "click", "id", "spinner", "type"], [1, "ri-subtract-fill", "ms-0"], ["type", "text", "name", "quantity", "readonly", "", 1, "form-control", "input-number", "qty-input", 3, "value"], [1, "ri-add-line", "ms-0"], [1, "table-title", "text-content"], ["class", "theme-color", 4, "ngIf"], [1, "quantity"], [1, "quantity-price"], [1, "subtotal"], [1, "save-remove"], ["href", "javascript:void(0)", 1, "save", "notifi-wishlist", 3, "click"], ["href", "javascript:void(0)", 1, "remove", "close_button", 3, "click"], [1, "text-title"], [1, "saving", "theme-color"], [1, "theme-color"], [3, "image", "text", "description"]], template: function CartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
    \u0275\u0275template(3, CartComponent_div_3_Template, 53, 41, "div", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, CartComponent_app_no_data_5_Template, 1, 5, "app-no-data", 4);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(4, 3, ctx.cartItem$)) == null ? null : tmp_1_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(6, 5, ctx.cartItem$)) == null ? null : tmp_2_0.length));
  }
}, dependencies: [NgForOf, NgIf, RouterLink, BreadcrumbComponent, ButtonComponent, NoDataComponent, AsyncPipe, CurrencySymbolPipe, TranslatePipe] });
var CartComponent = _CartComponent;
__decorate([
  Select(CartState.cartItems)
], CartComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(CartState.cartTotal)
], CartComponent.prototype, "cartTotal$", void 0);
__decorate([
  Select(CartState.cartHasDigital)
], CartComponent.prototype, "cartDigital$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\components\\shop\\cart\\cart.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/wishlist/wishlist.component.ts
var _c03 = (a0, a1, a2) => ({ "product_border": a0, "product_img_bg": a1, "full_bg": a2 });
function WishlistComponent_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275template(2, WishlistComponent_ng_container_3_div_2_Template, 2, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function WishlistComponent_ng_template_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-product-box", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap("product-box-3");
    \u0275\u0275property("product", product_r2)("close", true);
  }
}
function WishlistComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, WishlistComponent_ng_template_4_div_5_Template, 2, 6, "div", 7);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(12, _c03, ((tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r0.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.full_border) || ((tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.product_box_border), (tmp_2_0 = \u0275\u0275pipeBind1(3, 6, ctx_r0.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.image_bg, (tmp_2_0 = \u0275\u0275pipeBind1(4, 8, ctx_r0.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.product_box_bg));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", (tmp_3_0 = \u0275\u0275pipeBind1(6, 10, ctx_r0.wishlistItems$)) == null ? null : tmp_3_0.data);
  }
}
function WishlistComponent_app_no_data_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_items_added")("description", "appears_nothing_added_wishlist_explore_categories");
  }
}
var _WishlistComponent = class _WishlistComponent {
  constructor(store, wishlistService) {
    this.store = store;
    this.wishlistService = wishlistService;
    this.breadcrumb = {
      title: "Wishlist",
      items: [{ label: "Wishlist", active: true }]
    };
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    this.store.dispatch(new GetWishlist());
  }
};
_WishlistComponent.\u0275fac = function WishlistComponent_Factory(t) {
  return new (t || _WishlistComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(WishlistService));
};
_WishlistComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], decls: 8, vars: 6, consts: [["productContent", ""], [3, "breadcrumb"], [1, "wishlist-section", "section-b-space"], [1, "container-fluid-lg"], [4, "ngIf", "ngIfElse"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "row", "g-sm-3", "g-2"], ["class", "col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-lg-3", "col-md-4", "col-6", "product-box-contain"], [1, "row", "g-sm-3", "g-2", 3, "ngClass"], [3, "product", "close"], [3, "image", "text", "description"]], template: function WishlistComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3);
    \u0275\u0275template(3, WishlistComponent_ng_container_3_Template, 3, 1, "ng-container", 4)(4, WishlistComponent_ng_template_4_Template, 7, 16, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, WishlistComponent_app_no_data_6_Template, 1, 5, "app-no-data", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const productContent_r3 = \u0275\u0275reference(5);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.wishlistService == null ? null : ctx.wishlistService.skeletonLoader)("ngIfElse", productContent_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(7, 4, ctx.wishlistItems$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length) && !ctx.wishlistService.skeletonLoader);
  }
}, dependencies: [NgClass, NgForOf, NgIf, BreadcrumbComponent, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, AsyncPipe] });
var WishlistComponent = _WishlistComponent;
__decorate([
  Select(WishlistState.wishlistItems)
], WishlistComponent.prototype, "wishlistItems$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], WishlistComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src\\app\\components\\shop\\wishlist\\wishlist.component.ts", lineNumber: 17 });
})();

// src/app/components/shop/compare/compare.component.ts
function CompareComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div");
    \u0275\u0275element(4, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 12);
    \u0275\u0275element(6, "h5", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275element(9, "h5", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275element(11, "p", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "div", 15);
    \u0275\u0275element(14, "h5", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17);
    \u0275\u0275element(16, "p", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "div", 15);
    \u0275\u0275element(19, "h5", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275element(21, "p", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "div", 15);
    \u0275\u0275element(24, "h5", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "div", 21);
    \u0275\u0275element(27, "span", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 14)(29, "div", 15);
    \u0275\u0275element(30, "h5", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17);
    \u0275\u0275element(32, "p", 16);
    \u0275\u0275elementEnd()()()();
  }
}
function CompareComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CompareComponent_ng_container_5_div_1_Template, 33, 0, "div", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function CompareComponent_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 9)(2, "div", 10)(3, "div");
    \u0275\u0275element(4, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 25)(6, "h5", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "h5");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 14)(17, "div", 15)(18, "h5");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currencySymbol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 14)(26, "div", 15)(27, "h5");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 17)(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 14)(35, "div", 15)(36, "h5");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 17)(40, "div", 21);
    \u0275\u0275element(41, "ngb-rating", 27);
    \u0275\u0275elementStart(42, "span", 28);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 14)(46, "div", 15)(47, "h5");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 17)(51, "p");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 29)(54, "button", 30);
    \u0275\u0275listener("click", function CompareComponent_ng_template_6_div_0_Template_button_click_54_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.moveToCart(product_r3));
    });
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 31)(58, "a", 32);
    \u0275\u0275listener("click", function CompareComponent_ng_template_6_div_0_Template_a_click_58_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeCompare(product_r3.id));
    });
    \u0275\u0275element(59, "i", 33);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (product_r3 == null ? null : product_r3.product_thumbnail) ? product_r3 == null ? null : product_r3.product_thumbnail == null ? null : product_r3.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", product_r3 == null ? null : product_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r3 == null ? null : product_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "discount"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((product_r3 == null ? null : product_r3.discount) ? product_r3 == null ? null : product_r3.discount : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, "price"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, product_r3 == null ? null : product_r3.sale_price));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 23, "availability"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 25, product_r3 == null ? null : product_r3.stock_status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 27, "rating"));
    \u0275\u0275advance(4);
    \u0275\u0275property("rate", (product_r3 == null ? null : product_r3.rating_count) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", product_r3 == null ? null : product_r3.reviews_count, " ", \u0275\u0275pipeBind1(44, 29, "review"), ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 31, "weight"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((product_r3 == null ? null : product_r3.weight) ? product_r3 == null ? null : product_r3.weight : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 33, "move_to_cart"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 35, "remove"), " ");
  }
}
function CompareComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompareComponent_ng_template_6_div_0_Template, 62, 37, "div", 22);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(1, 1, ctx_r0.compareItems$));
  }
}
function CompareComponent_app_no_data_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 34);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/no-category.svg")("text", "no_items_added")("description", "nothing_added_to_your_compare_list");
  }
}
var _CompareComponent = class _CompareComponent {
  constructor(store, compareService) {
    this.store = store;
    this.compareService = compareService;
    this.breadcrumb = {
      title: "Compare",
      items: [{ label: "Compare", active: true }]
    };
    this.skeletonItems = Array.from({ length: 3 }, (_, index) => index);
    this.store.dispatch(new GetCompare());
  }
  moveToCart(product) {
    if (product) {
      const params = {
        id: null,
        product_id: product?.id,
        product: product ? product : null,
        variation: null,
        variation_id: null,
        quantity: 1
      };
      this.store.dispatch(new AddToCart(params)).subscribe({
        complete: () => {
          this.removeCompare(product.id);
        }
      });
    }
  }
  removeCompare(id) {
    this.store.dispatch(new DeleteCompare(id));
  }
};
_CompareComponent.\u0275fac = function CompareComponent_Factory(t) {
  return new (t || _CompareComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CompareService));
};
_CompareComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareComponent, selectors: [["app-compeer"]], decls: 10, vars: 10, consts: [["content", ""], [3, "breadcrumb"], [1, "compare-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row", "g-0"], [4, "ngIf", "ngIfElse"], [3, "class", "image", "text", "description", 4, "ngIf"], ["class", "col skeleton-compare", 4, "ngFor", "ngForOf"], [1, "col", "skeleton-compare"], [1, "compare-part"], [1, "img-section"], [1, "compare-img"], ["href", "javascript:void(0)", "tabindex", "0"], [1, "placeholder", "col-6"], [1, "detail-part"], [1, "title-detail"], [1, "placeholder", "col-3"], [1, "inner-detail"], [1, "placeholder", "col-1"], [1, "placeholder", "col-2"], [1, "placeholder", "col-4"], [1, "compare-rating"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "img-fluid", 3, "src", "alt"], ["href", "javascript:void(0)"], [1, "text-title"], [3, "rate"], [1, "text-content", "rating-text"], [1, "btn-part"], [1, "btn", "btn-animation", "btn-sm", 3, "click"], [1, "remove-part"], ["href", "javascript:void(0)", 1, "text-content", "remove_column", 3, "click"], [1, "ri-delete-bin-line"], [3, "image", "text", "description"]], template: function CompareComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, CompareComponent_ng_container_5_Template, 2, 1, "ng-container", 5)(6, CompareComponent_ng_template_6_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CompareComponent_app_no_data_8_Template, 1, 5, "app-no-data", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    const content_r4 = \u0275\u0275reference(7);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("compare-row", (tmp_2_0 = \u0275\u0275pipeBind1(4, 6, ctx.compareItems$)) == null ? null : tmp_2_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.compareService.skeletonLoader)("ngIfElse", content_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_5_0 = \u0275\u0275pipeBind1(9, 8, ctx.compareItems$)) == null ? null : tmp_5_0.length) && !ctx.compareService.skeletonLoader);
  }
}, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NgbRating, NoDataComponent, AsyncPipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
var CompareComponent = _CompareComponent;
__decorate([
  Select(CompareState.compareItems)
], CompareComponent.prototype, "compareItems$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareComponent, { className: "CompareComponent", filePath: "src\\app\\components\\shop\\compare\\compare.component.ts", lineNumber: 17 });
})();

// src/app/components/shop/seller/seller.component.ts
function SellerComponent_section_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.about == null ? null : ctx_r0.data.seller.about.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.about == null ? null : ctx_r0.data.seller.about.title);
  }
}
function SellerComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275template(3, SellerComponent_section_1_div_3_Template, 4, 2, "div", 8);
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10)(6, "div")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.about == null ? null : ctx_r0.data.seller.about.image_url);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.about == null ? null : ctx_r0.data.seller.about.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.about == null ? null : ctx_r0.data.seller.about.description);
  }
}
function SellerComponent_section_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_1 == null ? null : ctx_r0.data.seller.services.service_1.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_1 == null ? null : ctx_r0.data.seller.services.service_1.title);
  }
}
function SellerComponent_section_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_2 == null ? null : ctx_r0.data.seller.services.service_2.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_2 == null ? null : ctx_r0.data.seller.services.service_2.title);
  }
}
function SellerComponent_section_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_3 == null ? null : ctx_r0.data.seller.services.service_3.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_3 == null ? null : ctx_r0.data.seller.services.service_3.title);
  }
}
function SellerComponent_section_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_4 == null ? null : ctx_r0.data.seller.services.service_4.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_4 == null ? null : ctx_r0.data.seller.services.service_4.image_url);
  }
}
function SellerComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 6)(2, "div", 15)(3, "div", 16)(4, "div", 17);
    \u0275\u0275template(5, SellerComponent_section_2_div_5_Template, 2, 2, "div", 18);
    \u0275\u0275elementStart(6, "div", 19)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 16)(12, "div", 17);
    \u0275\u0275template(13, SellerComponent_section_2_div_13_Template, 2, 2, "div", 18);
    \u0275\u0275elementStart(14, "div", 19)(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 16)(20, "div", 17);
    \u0275\u0275template(21, SellerComponent_section_2_div_21_Template, 2, 2, "div", 18);
    \u0275\u0275elementStart(22, "div", 19)(23, "h4");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 16)(28, "div", 17);
    \u0275\u0275template(29, SellerComponent_section_2_div_29_Template, 2, 2, "div", 18);
    \u0275\u0275elementStart(30, "div", 19)(31, "h4");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_1 == null ? null : ctx_r0.data.seller.services.service_1.image_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_1 == null ? null : ctx_r0.data.seller.services.service_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_1 == null ? null : ctx_r0.data.seller.services.service_1.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_2 == null ? null : ctx_r0.data.seller.services.service_2.image_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_2 == null ? null : ctx_r0.data.seller.services.service_2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_2 == null ? null : ctx_r0.data.seller.services.service_2.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_3 == null ? null : ctx_r0.data.seller.services.service_3.image_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_3 == null ? null : ctx_r0.data.seller.services.service_3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_3 == null ? null : ctx_r0.data.seller.services.service_3.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_4 == null ? null : ctx_r0.data.seller.services.service_4.image_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_4 == null ? null : ctx_r0.data.seller.services.service_4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.services == null ? null : ctx_r0.data.seller.services.service_4 == null ? null : ctx_r0.data.seller.services.service_4.description);
  }
}
function SellerComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 6)(2, "div", 22)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "div", 24)(7, "div", 25)(8, "div", 26)(9, "div")(10, "div", 27)(11, "h2");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28)(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 25)(20, "div", 26)(21, "div")(22, "div", 27)(23, "h2");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 28)(27, "h4");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 25)(32, "div", 26)(33, "div")(34, "div", 27)(35, "h2");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 28)(39, "h4");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.title);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "1"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.step_1 == null ? null : ctx_r0.data.seller.steps.step_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.step_1 == null ? null : ctx_r0.data.seller.steps.step_1.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 12, "2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.step_2 == null ? null : ctx_r0.data.seller.steps.step_2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.step_2 == null ? null : ctx_r0.data.seller.steps.step_2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 14, "3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.step_3 == null ? null : ctx_r0.data.seller.steps.step_3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.steps == null ? null : ctx_r0.data.seller.steps.step_3 == null ? null : ctx_r0.data.seller.steps.step_3.description);
  }
}
function SellerComponent_section_4_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("href", ctx_r0.data == null ? null : ctx_r0.data.general == null ? null : ctx_r0.data.general.seller_register_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "start_selling"), " ");
  }
}
function SellerComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 29)(1, "div", 6)(2, "div", 30)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SellerComponent_section_4_a_7_Template, 3, 4, "a", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.start_selling == null ? null : ctx_r0.data.seller.start_selling.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.seller == null ? null : ctx_r0.data.seller.start_selling == null ? null : ctx_r0.data.seller.start_selling.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data == null ? null : ctx_r0.data.general == null ? null : ctx_r0.data.general.seller_register_url);
  }
}
var _SellerComponent = class _SellerComponent {
  constructor() {
    this.breadcrumb = {
      title: "Become Seller",
      items: [{ label: "Become Seller", active: true }]
    };
    this.storageURL = environment.storageURL;
    this.themeOption$.subscribe((data) => this.data = data);
  }
};
_SellerComponent.\u0275fac = function SellerComponent_Factory(t) {
  return new (t || _SellerComponent)();
};
_SellerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerComponent, selectors: [["app-seller"]], decls: 5, vars: 5, consts: [[3, "breadcrumb"], ["class", "saller-poster-section", 4, "ngIf"], ["class", "become-service section-b-space", 4, "ngIf"], ["class", "business-section section-b-space", 4, "ngIf"], ["class", "selling-section section-b-space", 4, "ngIf"], [1, "saller-poster-section"], [1, "container-fluid-lg"], [1, "row"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [1, "seller-title", "h-100", "d-flex", "align-items-center"], [1, "poster-box"], [1, "poster-image"], [1, "img-fluid", 3, "src", "alt"], [1, "become-service", "section-b-space"], [1, "row", "g-md-4", "g-3"], [1, "col-xxl-3", "col-lg-4", "col-sm-6"], [1, "service-box"], ["class", "service-svg", 4, "ngIf"], [1, "service-detail"], [1, "service-svg"], [1, "business-section", "section-b-space"], [1, "vendor-title", "mb-5"], [1, "business-contain"], [1, "row", "g-xl-4", "g-3"], [1, "col-xl-4", "col-sm-6"], [1, "business-box"], [1, "business-number"], [1, "business-detail"], [1, "selling-section", "section-b-space"], [1, "vendor-title"], ["class", "btn btn-animation theme-bg-color d-inline-block mt-3", 3, "href", 4, "ngIf"], [1, "btn", "btn-animation", "theme-bg-color", "d-inline-block", "mt-3", 3, "href"]], template: function SellerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275template(1, SellerComponent_section_1_Template, 11, 3, "section", 1)(2, SellerComponent_section_2_Template, 35, 12, "section", 2)(3, SellerComponent_section_3_Template, 43, 16, "section", 3)(4, SellerComponent_section_4_Template, 8, 3, "section", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.seller == null ? null : ctx.data.seller.about == null ? null : ctx.data.seller.about.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.seller == null ? null : ctx.data.seller.services == null ? null : ctx.data.seller.services.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.seller == null ? null : ctx.data.seller.steps == null ? null : ctx.data.seller.steps.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.seller == null ? null : ctx.data.seller.start_selling == null ? null : ctx.data.seller.start_selling.status);
  }
}, dependencies: [NgIf, BreadcrumbComponent, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --seller-primary: #5340ff;\n  --seller-secondary: #06b6d4;\n  --seller-gold: #d4b06a;\n  --seller-text-strong: #0f172a;\n  --seller-text-soft: #475569;\n  --seller-surface: rgba(255, 255, 255, 0.85);\n  --seller-surface-strong: rgba(255, 255, 255, 0.96);\n  --seller-border: rgba(15, 23, 42, 0.1);\n  --seller-border-strong: rgba(83, 64, 255, 0.2);\n  --seller-glow: rgba(83, 64, 255, 0.28);\n  --seller-grid: rgba(83, 64, 255, 0.12);\n  --seller-shadow-soft: 0 26px 70px rgba(15, 23, 42, 0.14);\n  --seller-shadow-hover: 0 38px 110px rgba(15, 23, 42, 0.18);\n}\n[data-theme=dark][_ngcontent-%COMP%], .dark[_ngcontent-%COMP%] {\n  --seller-primary: #818cf8;\n  --seller-secondary: #22d3ee;\n  --seller-gold: #f7c77d;\n  --seller-text-strong: #f8fafc;\n  --seller-text-soft: rgba(226, 232, 240, 0.82);\n  --seller-surface: rgba(15, 23, 42, 0.78);\n  --seller-surface-strong: rgba(15, 23, 42, 0.88);\n  --seller-border: rgba(148, 163, 184, 0.22);\n  --seller-border-strong: rgba(129, 140, 248, 0.5);\n  --seller-glow: rgba(129, 140, 248, 0.48);\n  --seller-grid: rgba(129, 140, 248, 0.18);\n  --seller-shadow-soft: 0 28px 100px rgba(2, 6, 23, 0.62);\n  --seller-shadow-hover: 0 42px 160px rgba(2, 6, 23, 0.78);\n}\n.saller-poster-section[_ngcontent-%COMP%], .become-service[_ngcontent-%COMP%], .business-section[_ngcontent-%COMP%], .selling-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n}\n.saller-poster-section[_ngcontent-%COMP%]::before, .become-service[_ngcontent-%COMP%]::before, .business-section[_ngcontent-%COMP%]::before, .selling-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      120% 140% at 10% -10%,\n      rgba(83, 64, 255, 0.18),\n      transparent 55%),\n    radial-gradient(\n      140% 110% at 90% 110%,\n      rgba(6, 182, 212, 0.16),\n      transparent 60%);\n  opacity: 0.95;\n  pointer-events: none;\n  z-index: 0;\n}\n.saller-poster-section[_ngcontent-%COMP%]::after, .become-service[_ngcontent-%COMP%]::after, .business-section[_ngcontent-%COMP%]::after, .selling-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      120deg,\n      transparent 10%,\n      rgba(255, 255, 255, 0.05) 40%,\n      transparent 70%),\n    linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0.08) 1px,\n      transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.08) 1px,\n      transparent 1px);\n  background-size:\n    100% 100%,\n    120px 120px,\n    120px 120px;\n  mix-blend-mode: screen;\n  opacity: 0.25;\n  pointer-events: none;\n  z-index: 0;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .saller-poster-section[_ngcontent-%COMP%]::after, .dark[_ngcontent-%COMP%]   .saller-poster-section[_ngcontent-%COMP%]::after, [data-theme=dark][_ngcontent-%COMP%]   .become-service[_ngcontent-%COMP%]::after, .dark[_ngcontent-%COMP%]   .become-service[_ngcontent-%COMP%]::after, [data-theme=dark][_ngcontent-%COMP%]   .business-section[_ngcontent-%COMP%]::after, .dark[_ngcontent-%COMP%]   .business-section[_ngcontent-%COMP%]::after, [data-theme=dark][_ngcontent-%COMP%]   .selling-section[_ngcontent-%COMP%]::after, .dark[_ngcontent-%COMP%]   .selling-section[_ngcontent-%COMP%]::after {\n  opacity: 0.18;\n  mix-blend-mode: lighten;\n}\n.container-fluid-lg[_ngcontent-%COMP%], .vendor-title[_ngcontent-%COMP%], .seller-title[_ngcontent-%COMP%], .service-box[_ngcontent-%COMP%], .business-box[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.poster-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: clamp(22px, 2.5vw, 32px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.75),\n      rgba(255, 255, 255, 0.52));\n  border: 1px solid rgba(255, 255, 255, 0.45);\n  box-shadow: var(--seller-shadow-soft);\n  overflow: hidden;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .poster-box[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .poster-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.82),\n      rgba(15, 23, 42, 0.64));\n  border-color: rgba(129, 140, 248, 0.32);\n}\n.poster-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.poster-image[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(83, 64, 255, 0.25),\n      rgba(6, 182, 212, 0.18));\n  mix-blend-mode: soft-light;\n  opacity: 0;\n  transition: opacity 0.6s ease, transform 0.6s ease;\n}\n.poster-image[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -20%;\n  background:\n    radial-gradient(\n      circle at 20% 25%,\n      rgba(214, 176, 106, 0.55),\n      transparent 55%);\n  opacity: 0;\n  filter: blur(40px);\n  transition: opacity 0.6s ease;\n}\n.poster-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  transform: scale(1.012);\n  transition: transform 0.8s cubic-bezier(0.2, 0.82, 0.2, 1), filter 0.6s ease;\n  filter: saturate(1.02) contrast(1.04);\n}\n.poster-box[_ngcontent-%COMP%]:hover   .poster-image[_ngcontent-%COMP%]::before, .poster-box[_ngcontent-%COMP%]:hover   .poster-image[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: scale(1.02);\n}\n.poster-box[_ngcontent-%COMP%]:hover   .poster-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n  filter: saturate(1.08) contrast(1.06);\n}\n.poster-box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      110deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.6) 48%,\n      rgba(255, 255, 255, 0.05) 100%);\n  transform: translateX(-120%);\n  pointer-events: none;\n}\n.poster-box[_ngcontent-%COMP%]:hover::after {\n  animation: _ngcontent-%COMP%_sheen 1.2s cubic-bezier(0.3, 0.8, 0.3, 1) forwards;\n}\n.seller-title[_ngcontent-%COMP%] {\n  padding-block: clamp(1.6rem, 3vw, 3.6rem);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.seller-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: min(100%, clamp(640px, 58vw, 920px));\n  margin-inline: auto;\n  padding-inline: clamp(1.2rem, 3vw, 3rem);\n}\n.seller-title[_ngcontent-%COMP%]::before, .seller-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 52%;\n  right: clamp(-18rem, -14vw, -10rem);\n  width: clamp(340px, 40vw, 560px);\n  height: clamp(340px, 40vw, 560px);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.75;\n  mix-blend-mode: screen;\n  filter: blur(0.5px);\n  animation: _ngcontent-%COMP%_heroOrbit 16s ease-in-out infinite;\n}\n.seller-title[_ngcontent-%COMP%]::before {\n  background:\n    radial-gradient(\n      circle at 35% 35%,\n      rgba(83, 64, 255, 0.24),\n      transparent 68%),\n    radial-gradient(\n      circle at 70% 70%,\n      rgba(6, 182, 212, 0.22),\n      transparent 72%);\n  box-shadow: 0 0 120px rgba(83, 64, 255, 0.28);\n}\n.seller-title[_ngcontent-%COMP%]::after {\n  right: auto;\n  left: clamp(-18rem, -14vw, -10rem);\n  background:\n    conic-gradient(\n      from 120deg,\n      rgba(212, 176, 106, 0.34),\n      rgba(6, 182, 212, 0.16),\n      rgba(83, 64, 255, 0.22),\n      rgba(212, 176, 106, 0.34));\n  filter: blur(12px);\n  opacity: 0.55;\n  animation-duration: 22s;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .seller-title[_ngcontent-%COMP%]::before, .dark[_ngcontent-%COMP%]   .seller-title[_ngcontent-%COMP%]::before, [data-theme=dark][_ngcontent-%COMP%]   .seller-title[_ngcontent-%COMP%]::after, .dark[_ngcontent-%COMP%]   .seller-title[_ngcontent-%COMP%]::after {\n  mix-blend-mode: lighten;\n  opacity: 0.65;\n}\n.seller-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);\n  font-weight: 800;\n  font-size: clamp(2.4rem, 3vw, 3.4rem);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  line-height: 1.12;\n  color: var(--seller-text-strong);\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.seller-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  height: 3px;\n  width: 48px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--seller-gold),\n      var(--seller-primary));\n  transform-origin: left center;\n  transform: scaleX(0);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.seller-title[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n}\n.seller-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 680px;\n  font-size: clamp(1.05rem, 1.25vw, 1.2rem);\n  color: var(--seller-text-soft);\n  line-height: 1.82;\n  text-wrap: balance;\n}\n.become-service[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  --bs-gutter-y: clamp(1.25rem, 2vw, 2rem);\n}\n.service-box[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: clamp(1.75rem, 2.2vw, 2.4rem) clamp(1.4rem, 2vw, 2rem);\n  border-radius: clamp(20px, 2.2vw, 26px);\n  background: var(--seller-surface);\n  border: 1px solid var(--seller-border);\n  box-shadow: var(--seller-shadow-soft);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(1rem, 1.4vw, 1.5rem);\n  transition:\n    transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),\n    box-shadow 0.4s ease,\n    border-color 0.4s ease,\n    background 0.4s ease;\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n  contain: paint;\n}\n.service-box[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -1px;\n  border-radius: inherit;\n  padding: 1px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(83, 64, 255, 0.55),\n      rgba(6, 182, 212, 0.45),\n      rgba(214, 176, 106, 0.45));\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n}\n.service-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) scale(1.01);\n  box-shadow: var(--seller-shadow-hover);\n  border-color: var(--seller-border-strong);\n  background: var(--seller-surface-strong);\n}\n.service-box[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.9;\n}\n.service-box[_ngcontent-%COMP%]   .service-svg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: clamp(68px, 6vw, 84px);\n  height: clamp(68px, 6vw, 84px);\n  border-radius: 24px;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(83, 64, 255, 0.14),\n      rgba(6, 182, 212, 0.12));\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35), 0 12px 26px rgba(15, 23, 42, 0.15);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition: transform 0.45s ease, box-shadow 0.45s ease;\n}\n.service-box[_ngcontent-%COMP%]   .service-svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: clamp(42px, 4vw, 56px);\n  filter: drop-shadow(0 10px 24px rgba(83, 64, 255, 0.25));\n  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.service-box[_ngcontent-%COMP%]:hover   .service-svg[_ngcontent-%COMP%] {\n  transform: translateY(-6px);\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4), 0 18px 40px rgba(83, 64, 255, 0.28);\n}\n.service-box[_ngcontent-%COMP%]:hover   .service-svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08) translateY(-2px);\n}\n.service-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: clamp(1.15rem, 1.4vw, 1.35rem);\n  font-weight: 700;\n  color: var(--seller-text-strong);\n  position: relative;\n}\n.service-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -8px;\n  width: 42px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--seller-primary),\n      transparent);\n  opacity: 0;\n  transform: translateY(4px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.service-box[_ngcontent-%COMP%]:hover   .service-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: translateY(0);\n}\n.service-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--seller-text-soft);\n  line-height: 1.7;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n.business-section[_ngcontent-%COMP%]   .vendor-title[_ngcontent-%COMP%] {\n  margin-bottom: clamp(2rem, 3vw, 3rem);\n}\n.business-box[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: clamp(1.9rem, 2.4vw, 2.5rem) clamp(1.6rem, 2.2vw, 2.3rem);\n  border-radius: clamp(22px, 2.6vw, 28px);\n  background: var(--seller-surface);\n  border: 1px solid var(--seller-border);\n  box-shadow: var(--seller-shadow-soft);\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  transition:\n    transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),\n    box-shadow 0.4s ease,\n    border-color 0.4s ease;\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n  contain: paint;\n}\n.business-box[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 14px;\n  border-radius: inherit;\n  border: 1px dashed rgba(83, 64, 255, 0.16);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n}\n.business-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-12px);\n  box-shadow: var(--seller-shadow-hover);\n  border-color: var(--seller-border-strong);\n}\n.business-box[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.business-number[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.8rem;\n}\n.business-number[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.5rem, 3vw, 3.2rem);\n  font-weight: 800;\n  color: var(--seller-text-strong);\n  position: relative;\n  padding-left: clamp(0.95rem, 1.3vw, 1.25rem);\n}\n.business-number[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 100% 0 0;\n  width: clamp(48px, 4vw, 58px);\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--seller-primary),\n      var(--seller-secondary));\n  box-shadow: 0 16px 36px var(--seller-glow);\n  z-index: -1;\n  transform: skewX(-12deg);\n}\n.business-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: clamp(1.15rem, 1.4vw, 1.35rem);\n  font-weight: 700;\n  margin-bottom: 0.4rem;\n  color: var(--seller-text-strong);\n}\n.business-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--seller-text-soft);\n  line-height: 1.7;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n.business-section[_ngcontent-%COMP%]   .business-contain[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: clamp(240px, 34vw, 420px);\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--seller-grid),\n      transparent);\n  transform: translate(-50%, -50%);\n  opacity: 0.4;\n  pointer-events: none;\n  mix-blend-mode: overlay;\n}\n.vendor-title[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 720px;\n  margin-inline: auto;\n}\n.vendor-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: clamp(0.8rem, 1.4vw, 1rem);\n  font-size: clamp(1.6rem, 2vw, 2rem);\n  font-weight: 800;\n  color: var(--seller-text-strong);\n  letter-spacing: 0.3px;\n}\n.vendor-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--seller-text-soft);\n  font-size: clamp(1rem, 1.2vw, 1.1rem);\n  line-height: 1.75;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n.vendor-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: clamp(1.2rem, 2.2vw, 1.8rem);\n  border-radius: 999px !important;\n  padding: 0.85rem 1.8rem;\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      var(--seller-gold),\n      var(--seller-primary)) !important;\n  color: #fff;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  box-shadow: 0 18px 46px rgba(83, 64, 255, 0.28) !important;\n  transition:\n    transform 0.35s ease,\n    box-shadow 0.35s ease,\n    filter 0.35s ease !important;\n}\n.vendor-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 255, 255, 0.2),\n      transparent 45%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.vendor-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 24px 70px rgba(83, 64, 255, 0.36) !important;\n  filter: brightness(1.05);\n}\n.vendor-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.vendor-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--seller-secondary);\n  outline-offset: 3px;\n}\n@keyframes _ngcontent-%COMP%_fadeRise {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sheen {\n  to {\n    transform: translateX(120%);\n  }\n}\n@keyframes _ngcontent-%COMP%_heroOrbit {\n  0% {\n    transform: translate(25%, -35%) scale(1);\n  }\n  25% {\n    transform: translate(35%, -38%) scale(1.05);\n  }\n  50% {\n    transform: translate(20%, -32%) scale(0.98);\n  }\n  75% {\n    transform: translate(32%, -42%) scale(1.08);\n  }\n  100% {\n    transform: translate(25%, -35%) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_glowPulse {\n  0%, 100% {\n    opacity: 0.75;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n}\n.seller-title[_ngcontent-%COMP%], .poster-box[_ngcontent-%COMP%], .service-box[_ngcontent-%COMP%], .business-box[_ngcontent-%COMP%], .vendor-title[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeRise 0.7s cubic-bezier(0.19, 0.82, 0.22, 1) both;\n}\n.become-service[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1)   .service-box[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.become-service[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2)   .service-box[_ngcontent-%COMP%] {\n  animation-delay: 0.18s;\n}\n.become-service[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3)   .service-box[_ngcontent-%COMP%] {\n  animation-delay: 0.26s;\n}\n.become-service[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4)   .service-box[_ngcontent-%COMP%] {\n  animation-delay: 0.34s;\n}\n.business-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1)   .business-box[_ngcontent-%COMP%] {\n  animation-delay: 0.12s;\n}\n.business-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2)   .business-box[_ngcontent-%COMP%] {\n  animation-delay: 0.24s;\n}\n.business-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3)   .business-box[_ngcontent-%COMP%] {\n  animation-delay: 0.36s;\n}\n.service-box[_ngcontent-%COMP%]:hover::before, .business-box[_ngcontent-%COMP%]:hover::before {\n  animation: _ngcontent-%COMP%_glowPulse 1.4s ease-in-out infinite alternate;\n}\n@supports (backdrop-filter: blur(12px)) {\n  .service-box[_ngcontent-%COMP%], .business-box[_ngcontent-%COMP%], .poster-box[_ngcontent-%COMP%] {\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n  }\n}\n@media (max-width: 1199.98px) {\n  .poster-box[_ngcontent-%COMP%] {\n    border-radius: 26px;\n  }\n}\n@media (max-width: 991.98px) {\n  .poster-box[_ngcontent-%COMP%] {\n    margin-bottom: 1.75rem;\n  }\n  .seller-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .seller-title[_ngcontent-%COMP%]::before, .seller-title[_ngcontent-%COMP%]::after {\n    opacity: 0.25;\n    filter: blur(18px);\n    animation: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .service-box[_ngcontent-%COMP%], .business-box[_ngcontent-%COMP%] {\n    padding: 1.6rem 1.4rem;\n    border-radius: 20px;\n  }\n  .business-section[_ngcontent-%COMP%]   .business-contain[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n@media (max-width: 575.98px) {\n  .service-box[_ngcontent-%COMP%]   .service-svg[_ngcontent-%COMP%] {\n    width: 58px;\n    height: 58px;\n    border-radius: 20px;\n  }\n  .service-box[_ngcontent-%COMP%]   .service-svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 36px;\n  }\n  .seller-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/*# sourceMappingURL=seller.component.css.map */'] });
var SellerComponent = _SellerComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], SellerComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerComponent, { className: "SellerComponent", filePath: "src\\app\\components\\shop\\seller\\seller.component.ts", lineNumber: 14 });
})();

// src/app/components/shop/seller/seller-store/skeleton-seller-store/skeleton-seller-store.component.ts
var _SkeletonSellerStoreComponent = class _SkeletonSellerStoreComponent {
};
_SkeletonSellerStoreComponent.\u0275fac = function SkeletonSellerStoreComponent_Factory(t) {
  return new (t || _SkeletonSellerStoreComponent)();
};
_SkeletonSellerStoreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonSellerStoreComponent, selectors: [["app-skeleton-seller-store"]], decls: 11, vars: 0, consts: [[1, "seller-grid-box", "seller-grid-box-1", "skeleton-seller"], [1, "grid-image"], [1, "vendor-text"], [1, "contain-name"], [1, "product-label"], [1, "grid-contain"], [1, "seller-contact-details"], [1, "saller-contact"], [1, "saller-contact", "mt-2"]], template: function SkeletonSellerStoreComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div");
    \u0275\u0275element(5, "h3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
    \u0275\u0275element(9, "div", 7)(10, "div", 8);
    \u0275\u0275elementEnd()()();
  }
} });
var SkeletonSellerStoreComponent = _SkeletonSellerStoreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonSellerStoreComponent, { className: "SkeletonSellerStoreComponent", filePath: "src\\app\\components\\shop\\seller\\seller-store\\skeleton-seller-store\\skeleton-seller-store.component.ts", lineNumber: 8 });
})();

// src/app/components/shop/seller/widgets/seller-contact-details/seller-contact-details.component.ts
var _SellerContactDetailsComponent = class _SellerContactDetailsComponent {
};
_SellerContactDetailsComponent.\u0275fac = function SellerContactDetailsComponent_Factory(t) {
  return new (t || _SellerContactDetailsComponent)();
};
_SellerContactDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerContactDetailsComponent, selectors: [["app-seller-contact-details"]], inputs: { store: "store" }, decls: 18, vars: 8, consts: [[1, "saller-contact"], [1, "seller-icon"], [1, "ri-smartphone-line"], [1, "contact-detail"], [1, "saller-contact", "mt-2"], [1, "ri-mail-line"]], template: function SellerContactDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 4)(10, "div", 1);
    \u0275\u0275element(11, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 3)(13, "h5");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 4, "contact_us"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+ ", ctx.store.vendor.phone, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 6, "email"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.store.vendor.email, "");
  }
}, dependencies: [TranslatePipe] });
var SellerContactDetailsComponent = _SellerContactDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerContactDetailsComponent, { className: "SellerContactDetailsComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-contact-details\\seller-contact-details.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/widgets/seller-store-logo/seller-store-logo.component.ts
var _c04 = (a0) => ["/seller/store/", a0];
function SellerStoreLogoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", ctx_r0.store.store_name);
    \u0275\u0275property("src", ctx_r0.store.store_logo.original_url, \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreLogoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.store.store_name.charAt(0).toString().toUpperCase());
  }
}
var _SellerStoreLogoComponent = class _SellerStoreLogoComponent {
};
_SellerStoreLogoComponent.\u0275fac = function SellerStoreLogoComponent_Factory(t) {
  return new (t || _SellerStoreLogoComponent)();
};
_SellerStoreLogoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreLogoComponent, selectors: [["app-seller-store-logo"]], inputs: { store: "store" }, decls: 4, vars: 5, consts: [["storeTextLogo", ""], [3, "routerLink"], ["class", "image", 4, "ngIf", "ngIfElse"], [1, "image"], [1, "img-fluid", 3, "src", "alt"], [1, "vendor-text"]], template: function SellerStoreLogoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275template(1, SellerStoreLogoComponent_div_1_Template, 2, 2, "div", 2)(2, SellerStoreLogoComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const storeTextLogo_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c04, ctx.store.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.store == null ? null : ctx.store.store_logo)("ngIfElse", storeTextLogo_r2);
  }
}, dependencies: [NgIf, RouterLink] });
var SellerStoreLogoComponent = _SellerStoreLogoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreLogoComponent, { className: "SellerStoreLogoComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-logo\\seller-store-logo.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/widgets/seller-store-products/seller-store-products.component.ts
function SellerStoreProductsComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r1 ? image_r1 : "assets/images/product.png", \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreProductsComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r1.store.products_count - 3, "");
  }
}
var _SellerStoreProductsComponent = class _SellerStoreProductsComponent {
};
_SellerStoreProductsComponent.\u0275fac = function SellerStoreProductsComponent_Factory(t) {
  return new (t || _SellerStoreProductsComponent)();
};
_SellerStoreProductsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreProductsComponent, selectors: [["app-seller-store-products"]], inputs: { store: "store" }, decls: 3, vars: 2, consts: [[1, "product-image"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["alt", "image", 1, "img-fluid", 3, "src"]], template: function SellerStoreProductsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 0);
    \u0275\u0275template(1, SellerStoreProductsComponent_li_1_Template, 2, 1, "li", 1)(2, SellerStoreProductsComponent_li_2_Template, 2, 1, "li", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.store.product_images);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.store.products_count > 3);
  }
}, dependencies: [NgForOf, NgIf] });
var SellerStoreProductsComponent = _SellerStoreProductsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreProductsComponent, { className: "SellerStoreProductsComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-products\\seller-store-products.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/widgets/seller-store-rating/seller-store-rating.component.ts
var _SellerStoreRatingComponent = class _SellerStoreRatingComponent {
};
_SellerStoreRatingComponent.\u0275fac = function SellerStoreRatingComponent_Factory(t) {
  return new (t || _SellerStoreRatingComponent)();
};
_SellerStoreRatingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreRatingComponent, selectors: [["app-seller-store-rating"]], inputs: { store: "store" }, decls: 5, vars: 5, consts: [[1, "product-rating"], [3, "rate"]], template: function SellerStoreRatingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "ngb-rating", 1);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("rate", ctx.store.rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", ctx.store.reviews_count, " ", \u0275\u0275pipeBind1(4, 3, "review"), ")");
  }
}, dependencies: [NgbRating, TranslatePipe] });
var SellerStoreRatingComponent = _SellerStoreRatingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreRatingComponent, { className: "SellerStoreRatingComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-rating\\seller-store-rating.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/widgets/seller-store-product-counts/seller-store-product-counts.component.ts
var _c05 = (a0) => ["/seller/store/", a0];
var _SellerStoreProductCountsComponent = class _SellerStoreProductCountsComponent {
};
_SellerStoreProductCountsComponent.\u0275fac = function SellerStoreProductCountsComponent_Factory(t) {
  return new (t || _SellerStoreProductCountsComponent)();
};
_SellerStoreProductCountsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreProductCountsComponent, selectors: [["app-seller-store-product-counts"]], inputs: { store: "store" }, decls: 4, vars: 7, consts: [[3, "routerLink"], [1, "product-label"]], template: function SellerStoreProductCountsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c05, ctx.store.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx.store.products_count, " ", \u0275\u0275pipeBind1(3, 3, "products"), "");
  }
}, dependencies: [RouterLink, TranslatePipe] });
var SellerStoreProductCountsComponent = _SellerStoreProductCountsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreProductCountsComponent, { className: "SellerStoreProductCountsComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-product-counts\\seller-store-product-counts.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/widgets/seller-store-name/seller-store-name.component.ts
var _c06 = (a0) => ["/seller/store/", a0];
var _SellerStoreNameComponent = class _SellerStoreNameComponent {
};
_SellerStoreNameComponent.\u0275fac = function SellerStoreNameComponent_Factory(t) {
  return new (t || _SellerStoreNameComponent)();
};
_SellerStoreNameComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreNameComponent, selectors: [["app-seller-store-name"]], inputs: { store: "store" }, decls: 4, vars: 6, consts: [[3, "routerLink"]], template: function SellerStoreNameComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titleCase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c06, ctx.store.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, ctx.store.store_name));
  }
}, dependencies: [RouterLink, TitleCasePipe2] });
var SellerStoreNameComponent = _SellerStoreNameComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreNameComponent, { className: "SellerStoreNameComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-name\\seller-store-name.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/seller-store/seller-store-basic/seller-store-basic.component.ts
var _c07 = (a0) => ["/seller/store/", a0];
function SellerStoreBasicComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-skeleton-seller-store");
    \u0275\u0275elementEnd();
  }
}
function SellerStoreBasicComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SellerStoreBasicComponent_ng_container_2_div_1_Template, 2, 0, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function SellerStoreBasicComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "app-seller-store-logo", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "div")(6, "div", 11);
    \u0275\u0275element(7, "app-seller-store-rating", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-seller-store-name", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-seller-store-product-counts", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 12)(11, "div", 13);
    \u0275\u0275element(12, "app-seller-contact-details", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "a", 15);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275element(17, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "app-seller-store-products", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const store_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance(4);
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance();
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance();
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c07, store_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "visit_store"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("store", store_r2);
  }
}
function SellerStoreBasicComponent_ng_template_3_app_no_data_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_store_found")("description", "regret_inform_you_Store_currently_unavailable.");
  }
}
function SellerStoreBasicComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SellerStoreBasicComponent_ng_template_3_div_0_Template, 19, 12, "div", 4)(1, SellerStoreBasicComponent_ng_template_3_app_no_data_1_Template, 1, 5, "app-no-data", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r0.stores);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.stores == null ? null : ctx_r0.stores.length));
  }
}
var _SellerStoreBasicComponent = class _SellerStoreBasicComponent {
  constructor(storeService) {
    this.storeService = storeService;
  }
};
_SellerStoreBasicComponent.\u0275fac = function SellerStoreBasicComponent_Factory(t) {
  return new (t || _SellerStoreBasicComponent)(\u0275\u0275directiveInject(StoreService));
};
_SellerStoreBasicComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreBasicComponent, selectors: [["app-seller-store-basic"]], inputs: { stores: "stores", skeletonItems: "skeletonItems" }, decls: 5, vars: 2, consts: [["storeContent", ""], [1, "container-fluid-lg"], [1, "row", "g-4"], [4, "ngIf", "ngIfElse"], ["class", "col-xxl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-4", "col-md-6"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "seller-grid-box", "seller-grid-box-1"], [1, "grid-image"], [3, "store"], [1, "contain-name"], [1, "since-number"], [1, "grid-contain"], [1, "seller-contact-details"], [1, "seller-category"], [1, "btn", "btn-sm", "theme-bg-color", "text-white", "fw-bold", 3, "routerLink"], [1, "ri-arrow-right-line", "ms-2"], [3, "image", "text", "description"]], template: function SellerStoreBasicComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, SellerStoreBasicComponent_ng_container_2_Template, 2, 1, "ng-container", 3)(3, SellerStoreBasicComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const storeContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.storeService.skeletonLoader)("ngIfElse", storeContent_r3);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NoDataComponent, SkeletonSellerStoreComponent, SellerContactDetailsComponent, SellerStoreLogoComponent, SellerStoreProductsComponent, SellerStoreRatingComponent, SellerStoreProductCountsComponent, SellerStoreNameComponent, TranslatePipe] });
var SellerStoreBasicComponent = _SellerStoreBasicComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreBasicComponent, { className: "SellerStoreBasicComponent", filePath: "src\\app\\components\\shop\\seller\\seller-store\\seller-store-basic\\seller-store-basic.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/seller/seller-store/seller-store-classic/seller-store-classic.component.ts
var _c08 = (a0) => ["/seller/store/", a0];
function SellerStoreClassicComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-skeleton-seller-store");
    \u0275\u0275elementEnd();
  }
}
function SellerStoreClassicComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SellerStoreClassicComponent_ng_container_2_div_1_Template, 2, 0, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function SellerStoreClassicComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "app-seller-contact-details", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "div");
    \u0275\u0275element(7, "app-seller-store-name", 10)(8, "app-seller-store-rating", 10);
    \u0275\u0275elementStart(9, "a", 12);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275element(12, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "a", 15);
    \u0275\u0275element(15, "app-seller-store-logo", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const store_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance();
    \u0275\u0275property("store", store_r2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c08, store_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "visit_store"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c08, store_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275property("store", store_r2);
  }
}
function SellerStoreClassicComponent_ng_template_3_app_no_data_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 16);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_store_found")("description", "regret_inform_you_Store_currently_unavailable");
  }
}
function SellerStoreClassicComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SellerStoreClassicComponent_ng_template_3_div_0_Template, 16, 13, "div", 4)(1, SellerStoreClassicComponent_ng_template_3_app_no_data_1_Template, 1, 5, "app-no-data", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r0.stores);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.stores == null ? null : ctx_r0.stores.length));
  }
}
var _SellerStoreClassicComponent = class _SellerStoreClassicComponent {
  constructor(storeService) {
    this.storeService = storeService;
  }
};
_SellerStoreClassicComponent.\u0275fac = function SellerStoreClassicComponent_Factory(t) {
  return new (t || _SellerStoreClassicComponent)(\u0275\u0275directiveInject(StoreService));
};
_SellerStoreClassicComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreClassicComponent, selectors: [["app-seller-store-classic"]], inputs: { stores: "stores", skeletonItems: "skeletonItems" }, decls: 5, vars: 2, consts: [["storeContent", ""], [1, "container-fluid-lg"], [1, "row", "g-4"], [4, "ngIf", "ngIfElse"], ["class", "col-xxl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-4", "col-md-6"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "seller-grid-box"], [1, "grid-contain"], [1, "seller-contact-details"], [3, "store"], [1, "contain-name"], [1, "btn", "btn-sm", "theme-bg-color", "text-white", "fw-bold", "w-max-content", 3, "routerLink"], [1, "ri-arrow-right-line", "ms-2"], [1, "grid-image"], [3, "routerLink"], [3, "image", "text", "description"]], template: function SellerStoreClassicComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, SellerStoreClassicComponent_ng_container_2_Template, 2, 1, "ng-container", 3)(3, SellerStoreClassicComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const storeContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.storeService.skeletonLoader)("ngIfElse", storeContent_r3);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NoDataComponent, SkeletonSellerStoreComponent, SellerContactDetailsComponent, SellerStoreLogoComponent, SellerStoreRatingComponent, SellerStoreNameComponent, TranslatePipe] });
var SellerStoreClassicComponent = _SellerStoreClassicComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreClassicComponent, { className: "SellerStoreClassicComponent", filePath: "src\\app\\components\\shop\\seller\\seller-store\\seller-store-classic\\seller-store-classic.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/seller/seller-store/seller-store.component.ts
function SellerStoreComponent_app_seller_store_basic_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seller-store-basic", 4);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("stores", (tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r0.store$)) == null ? null : tmp_1_0.data)("skeletonItems", ctx_r0.skeletonItems);
  }
}
function SellerStoreComponent_app_seller_store_classic_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seller-store-classic", 4);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("stores", (tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r0.store$)) == null ? null : tmp_1_0.data)("skeletonItems", ctx_r0.skeletonItems);
  }
}
function SellerStoreComponent_nav_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 5)(1, "app-pagination", 6);
    \u0275\u0275listener("setPage", function SellerStoreComponent_nav_4_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r0.totalItems)("currentPage", ctx_r0.filter["page"])("pageSize", ctx_r0.filter["paginate"]);
  }
}
var _SellerStoreComponent = class _SellerStoreComponent {
  constructor(store, route, storeService) {
    this.store = store;
    this.route = route;
    this.storeService = storeService;
    this.breadcrumb = {
      title: "Seller Stores",
      items: [{ label: "Seller Stores", active: true }]
    };
    this.totalItems = 0;
    this.filter = {
      "status": 1,
      "page": 1,
      "paginate": 9
      // Display per page,
    };
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
    this.layout = "basic_store";
    this.route.queryParams.subscribe((params) => {
      this.store.dispatch(new GetStores(this.filter));
      this.store$.subscribe((store2) => this.totalItems = store2?.total);
      if (params["layout"]) {
        this.layout = params["layout"];
      } else {
        this.themeOptions$.subscribe((option) => {
          this.layout = option.seller && option.seller.store_layout ? option.seller.store_layout : "basic_store";
        });
      }
    });
    this.store$.subscribe((store2) => {
      const storeIds = store2?.data.map((store3) => store3.id);
      if (Array.isArray(storeIds) && storeIds.length) {
        this.store.dispatch(new GetStoreProducts({ status: 1, store_ids: storeIds?.join(",") }));
      }
    });
  }
  setPaginate(data) {
    this.filter.page = data;
    this.store.dispatch(new GetStores(this.filter));
  }
};
_SellerStoreComponent.\u0275fac = function SellerStoreComponent_Factory(t) {
  return new (t || _SellerStoreComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(StoreService));
};
_SellerStoreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreComponent, selectors: [["app-seller-store"]], decls: 6, vars: 6, consts: [[3, "breadcrumb"], [1, "seller-grid-section", "section-b-space"], [3, "stores", "skeletonItems", 4, "ngIf"], ["class", "custome-pagination section-b-space", 4, "ngIf"], [3, "stores", "skeletonItems"], [1, "custome-pagination", "section-b-space"], [3, "setPage", "total", "currentPage", "pageSize"]], template: function SellerStoreComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1);
    \u0275\u0275template(2, SellerStoreComponent_app_seller_store_basic_2_Template, 2, 4, "app-seller-store-basic", 2)(3, SellerStoreComponent_app_seller_store_classic_3_Template, 2, 4, "app-seller-store-classic", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SellerStoreComponent_nav_4_Template, 2, 3, "nav", 3);
    \u0275\u0275pipe(5, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.layout === "basic_store");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout === "classic_store");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = \u0275\u0275pipeBind1(5, 4, ctx.store$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length) && !ctx.storeService.skeletonLoader);
  }
}, dependencies: [NgIf, BreadcrumbComponent, PaginationComponent, SellerStoreBasicComponent, SellerStoreClassicComponent, AsyncPipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  --seller-store-primary: #5340ff;\n  --seller-store-secondary: #1ec9ff;\n  --seller-store-emerald: #42f5b3;\n  --seller-store-gold: #d4b06a;\n  --seller-store-text-strong: #0b1120;\n  --seller-store-text-soft: rgba(15, 23, 42, 0.68);\n  --seller-store-surface: rgba(255, 255, 255, 0.82);\n  --seller-store-border: rgba(83, 64, 255, 0.16);\n  --seller-store-border-strong: rgba(83, 64, 255, 0.32);\n  --seller-store-shadow: 0 32px 90px rgba(15, 23, 42, 0.16);\n  --seller-store-shadow-hover: 0 36px 120px rgba(15, 23, 42, 0.22);\n  --seller-store-grid: rgba(83, 64, 255, 0.14);\n}\n[data-theme=dark][_nghost-%COMP%], [data-theme=dark]   [_nghost-%COMP%], .dark[_nghost-%COMP%], .dark   [_nghost-%COMP%] {\n  --seller-store-text-strong: rgba(248, 250, 255, 0.96);\n  --seller-store-text-soft: rgba(203, 213, 225, 0.76);\n  --seller-store-surface: rgba(15, 23, 42, 0.75);\n  --seller-store-border: rgba(129, 140, 248, 0.25);\n  --seller-store-border-strong: rgba(129, 140, 248, 0.45);\n  --seller-store-shadow: 0 38px 120px rgba(2, 6, 23, 0.65);\n  --seller-store-shadow-hover: 0 48px 160px rgba(2, 6, 23, 0.82);\n  --seller-store-grid: rgba(129, 140, 248, 0.24);\n}\n.seller-grid-section[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  padding-block: clamp(1.5rem, 2.5vw, 2.5rem);\n  margin-block-end: clamp(1.5rem, 2.5vw, 2.6rem);\n  overflow: hidden;\n  background:\n    linear-gradient(\n      150deg,\n      rgba(83, 64, 255, 0.19) 0%,\n      rgba(255, 255, 255, 0) 55%),\n    linear-gradient(\n      220deg,\n      rgba(30, 201, 255, 0.15) 8%,\n      transparent 58%),\n    radial-gradient(\n      110% 90% at 85% -10%,\n      rgba(212, 176, 106, 0.18),\n      transparent 65%);\n}\n.seller-grid-section[_ngcontent-%COMP%]::before, .seller-grid-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -40% -15% auto -15%;\n  height: 85%;\n  pointer-events: none;\n  mix-blend-mode: screen;\n  opacity: 0.35;\n  background-image:\n    linear-gradient(\n      95deg,\n      transparent 10%,\n      rgba(255, 255, 255, 0.12) 40%,\n      transparent 70%),\n    linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0.08) 1px,\n      transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.08) 1px,\n      transparent 1px);\n  background-size:\n    100% 100%,\n    160px 160px,\n    160px 160px;\n  transform: skewY(-6deg) translateY(-12%);\n  filter: blur(0.5px);\n  z-index: 0;\n}\n.seller-grid-section[_ngcontent-%COMP%]::after {\n  inset: auto -5% -45% -5%;\n  height: 70%;\n  opacity: 0.4;\n  transform: skewY(6deg) translateY(12%);\n}\n.seller-grid-section[_ngcontent-%COMP%]   .container-fluid-lg[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.custome-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-block: clamp(0.75rem, 1.2vw, 1.2rem);\n  position: relative;\n}\n.custome-pagination[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: auto clamp(1rem, 2vw, 2rem) clamp(1rem, 2vw, 2rem);\n  margin: auto;\n  max-width: 720px;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(83, 64, 255, 0.24),\n      transparent);\n  opacity: 0.5;\n  pointer-events: none;\n}\n.custome-pagination[_ngcontent-%COMP%]   app-pagination[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.custome-pagination[_ngcontent-%COMP%]     ul.pagination {\n  gap: 0.5rem;\n  padding: 0.4rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.75);\n  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.18);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.custome-pagination[_ngcontent-%COMP%]     .page-item .page-link {\n  border-radius: 999px;\n  border: none;\n  color: var(--seller-store-text-soft);\n  font-weight: 600;\n  min-width: 36px;\n  height: 36px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition:\n    transform 0.3s ease,\n    background 0.3s ease,\n    color 0.3s ease;\n}\n.custome-pagination[_ngcontent-%COMP%]     .page-item.active .page-link, .custome-pagination[_ngcontent-%COMP%]     .page-item .page-link:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--seller-store-primary),\n      var(--seller-store-secondary));\n  color: #fff;\n  box-shadow: 0 12px 30px rgba(83, 64, 255, 0.35);\n  transform: translateY(-2px);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .custome-pagination[_ngcontent-%COMP%]     ul.pagination, .dark[_ngcontent-%COMP%]   .custome-pagination[_ngcontent-%COMP%]     ul.pagination {\n  background: rgba(15, 23, 42, 0.78);\n  box-shadow: 0 26px 70px rgba(2, 6, 23, 0.68);\n}\n@media (max-width: 767.98px) {\n  .seller-grid-section[_ngcontent-%COMP%] {\n    padding-block: clamp(1.2rem, 3vw, 1.8rem);\n  }\n  .custome-pagination[_ngcontent-%COMP%]     ul.pagination {\n    gap: 0.3rem;\n    padding: 0.25rem;\n  }\n  .custome-pagination[_ngcontent-%COMP%]     .page-item .page-link {\n    min-width: 32px;\n    height: 32px;\n    font-size: 0.85rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .seller-grid-section[_ngcontent-%COMP%], .custome-pagination[_ngcontent-%COMP%]     .page-item .page-link {\n    transition: none !important;\n    animation: none !important;\n  }\n}\n/*# sourceMappingURL=seller-store.component.css.map */'] });
var SellerStoreComponent = _SellerStoreComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], SellerStoreComponent.prototype, "themeOptions$", void 0);
__decorate([
  Select(StoreState.store)
], SellerStoreComponent.prototype, "store$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreComponent, { className: "SellerStoreComponent", filePath: "src\\app\\components\\shop\\seller\\seller-store\\seller-store.component.ts", lineNumber: 19 });
})();

// src/app/components/shop/seller/widgets/seller-store-description/seller-store-description.component.ts
var _SellerStoreDescriptionComponent = class _SellerStoreDescriptionComponent {
};
_SellerStoreDescriptionComponent.\u0275fac = function SellerStoreDescriptionComponent_Factory(t) {
  return new (t || _SellerStoreDescriptionComponent)();
};
_SellerStoreDescriptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreDescriptionComponent, selectors: [["app-seller-store-description"]], inputs: { store: "store" }, decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function SellerStoreDescriptionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("innerHTML", ctx.store.description, \u0275\u0275sanitizeHtml);
  }
} });
var SellerStoreDescriptionComponent = _SellerStoreDescriptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreDescriptionComponent, { className: "SellerStoreDescriptionComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-description\\seller-store-description.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/seller/widgets/seller-store-social-links/seller-store-social-links.component.ts
function SellerStoreSocialLinksComponent_div_0_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r0.store.facebook, \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreSocialLinksComponent_div_0_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r0.store.twitter, \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreSocialLinksComponent_div_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275element(2, "i", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r0.store.instagram, \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreSocialLinksComponent_div_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r0.store.youtube, \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreSocialLinksComponent_div_0_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r0.store.pinterest, \u0275\u0275sanitizeUrl);
  }
}
function SellerStoreSocialLinksComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275template(5, SellerStoreSocialLinksComponent_div_0_li_5_Template, 3, 1, "li", 2)(6, SellerStoreSocialLinksComponent_div_0_li_6_Template, 3, 1, "li", 2)(7, SellerStoreSocialLinksComponent_div_0_li_7_Template, 3, 1, "li", 2)(8, SellerStoreSocialLinksComponent_div_0_li_8_Template, 3, 1, "li", 2)(9, SellerStoreSocialLinksComponent_div_0_li_9_Template, 3, 1, "li", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 6, "follow_us"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.store.facebook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.store == null ? null : ctx_r0.store.twitter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.store == null ? null : ctx_r0.store.instagram);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.store == null ? null : ctx_r0.store.youtube);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.store == null ? null : ctx_r0.store.pinterest);
  }
}
var _SellerStoreSocialLinksComponent = class _SellerStoreSocialLinksComponent {
};
_SellerStoreSocialLinksComponent.\u0275fac = function SellerStoreSocialLinksComponent_Factory(t) {
  return new (t || _SellerStoreSocialLinksComponent)();
};
_SellerStoreSocialLinksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerStoreSocialLinksComponent, selectors: [["app-seller-store-social-links"]], inputs: { store: "store" }, decls: 1, vars: 1, consts: [["class", "vendor-share", 4, "ngIf"], [1, "vendor-share"], [4, "ngIf"], ["target", "_blank", 3, "href"], [1, "ri-facebook-fill"], [1, "ri-twitter-fill"], [1, "ri-instagram-fill"], [1, "ri-youtube-fill"], [1, "ri-pinterest-fill"]], template: function SellerStoreSocialLinksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SellerStoreSocialLinksComponent_div_0_Template, 10, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.store.facebook || (ctx.store == null ? null : ctx.store.twitter) || (ctx.store == null ? null : ctx.store.instagram) || (ctx.store == null ? null : ctx.store.youtube) || (ctx.store == null ? null : ctx.store.pinterest));
  }
}, dependencies: [NgIf, TranslatePipe] });
var SellerStoreSocialLinksComponent = _SellerStoreSocialLinksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerStoreSocialLinksComponent, { className: "SellerStoreSocialLinksComponent", filePath: "src\\app\\components\\shop\\seller\\widgets\\seller-store-social-links\\seller-store-social-links.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/collection/widgets/filter/collection-category-filter/collection-category-filter.component.ts
var _c09 = (a0) => ({ $implicit: a0 });
function CollectionCategoryFilterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "input", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CollectionCategoryFilterComponent_div_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(2, 2, "search_text"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
  }
}
function CollectionCategoryFilterComponent_ul_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_ul_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275template(1, CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_ul_7_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const recursiveCategories_r5 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategories_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c09, category_r4.subcategories));
  }
}
function CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li")(2, "div", 10)(3, "input", 11);
    \u0275\u0275listener("change", function CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 12)(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_ul_7_Template, 2, 4, "ul", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("id", "category-", category_r4 == null ? null : category_r4.id, "");
    \u0275\u0275property("value", category_r4 == null ? null : category_r4.slug)("checked", ctx_r1.checked(category_r4 == null ? null : category_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "category-", category_r4 == null ? null : category_r4.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4 == null ? null : category_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r4 == null ? null : category_r4.subcategories.length);
  }
}
function CollectionCategoryFilterComponent_ul_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionCategoryFilterComponent_ul_1_ng_template_2_ng_container_0_Template, 8, 8, "ng-container", 9);
    \u0275\u0275pipe(1, "filter");
  }
  if (rf & 2) {
    const categories_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(1, 1, categories_r6, ctx_r1.searchText, "subcategories"));
  }
}
function CollectionCategoryFilterComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, CollectionCategoryFilterComponent_ul_1_div_1_Template, 1, 0, "div", 8)(2, CollectionCategoryFilterComponent_ul_1_ng_template_2_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recursiveCategories_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategories_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c09, ctx_r1.categories));
  }
}
function CollectionCategoryFilterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h5");
    \u0275\u0275text(2, "No results found.");
    \u0275\u0275elementEnd()();
  }
}
function CollectionCategoryFilterComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_category_found");
  }
}
var _CollectionCategoryFilterComponent = class _CollectionCategoryFilterComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.selectedCategories = [];
    this.searchText = "";
    this.category$.subscribe((res) => this.categories = res.data.filter((category) => category.type == "product"));
  }
  ngOnChanges() {
    this.selectedCategories = this.filter["category"] ? this.filter["category"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedCategories.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedCategories.push(event?.target?.value);
    else
      this.selectedCategories.splice(index, 1);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category: this.selectedCategories.length ? this.selectedCategories?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedCategories?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
};
_CollectionCategoryFilterComponent.\u0275fac = function CollectionCategoryFilterComponent_Factory(t) {
  return new (t || _CollectionCategoryFilterComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionCategoryFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategoryFilterComponent, selectors: [["app-collection-category-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 8, consts: [["recursiveCategories", ""], ["class", "theme-form search-box", 4, "ngIf"], ["class", "category-list custom-padding custom-height", 4, "ngIf"], ["class", "search-not-found-box", 4, "ngIf"], [3, "class", "text", 4, "ngIf"], [1, "theme-form", "search-box"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "category-list", "custom-padding", "custom-height"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [1, "form-check", "ps-0", "m-0", "category-list-box"], ["type", "checkbox", 1, "checkbox_animated", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], [1, "name"], ["class", "sub-category-list", 4, "ngIf"], [1, "sub-category-list"], [1, "search-not-found-box"], [3, "text"]], template: function CollectionCategoryFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionCategoryFilterComponent_div_0_Template, 3, 4, "div", 1)(1, CollectionCategoryFilterComponent_ul_1_Template, 4, 4, "ul", 2)(2, CollectionCategoryFilterComponent_div_2_Template, 3, 0, "div", 3);
    \u0275\u0275pipe(3, "filter");
    \u0275\u0275template(4, CollectionCategoryFilterComponent_app_no_data_4_Template, 1, 3, "app-no-data", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.categories.length > 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.categories == null ? null : ctx.categories.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind3(3, 4, ctx.categories, ctx.searchText, "subcategories").length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx.categories == null ? null : ctx.categories.length));
  }
}, dependencies: [NgForOf, NgIf, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, NgModel, NoDataComponent, SearchFilterPipe, TranslatePipe] });
var CollectionCategoryFilterComponent = _CollectionCategoryFilterComponent;
__decorate([
  Select(CategoryState.category)
], CollectionCategoryFilterComponent.prototype, "category$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategoryFilterComponent, { className: "CollectionCategoryFilterComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\filter\\collection-category-filter\\collection-category-filter.component.ts", lineNumber: 14 });
})();

// src/app/components/shop/collection/widgets/filter/collection-price-filter/collection-price-filter.component.ts
function CollectionPriceFilterComponent_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const price_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", price_r3 == null ? null : price_r3.text, " ", \u0275\u0275pipeBind1(2, 2, price_r3 == null ? null : price_r3.price), "");
  }
}
function CollectionPriceFilterComponent_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const price_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, price_r3 == null ? null : price_r3.minPrice), " - ", \u0275\u0275pipeBind1(3, 4, price_r3 == null ? null : price_r3.maxPrice), "");
  }
}
function CollectionPriceFilterComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 3)(2, "input", 4);
    \u0275\u0275listener("change", function CollectionPriceFilterComponent_li_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 5);
    \u0275\u0275template(4, CollectionPriceFilterComponent_li_1_span_4_Template, 3, 4, "span", 6)(5, CollectionPriceFilterComponent_li_1_ng_template_5_Template, 4, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const price_r3 = ctx.$implicit;
    const minMaxPrice_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "price-filter", price_r3 == null ? null : price_r3.id, "");
    \u0275\u0275property("value", price_r3 == null ? null : price_r3.value)("checked", ctx_r1.checked(price_r3 == null ? null : price_r3.value));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "price-filter", price_r3 == null ? null : price_r3.id, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r3 == null ? null : price_r3.price)("ngIfElse", minMaxPrice_r4);
  }
}
var _CollectionPriceFilterComponent = class _CollectionPriceFilterComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.prices = [
      {
        id: 1,
        price: 100,
        text: "Below",
        value: "100"
      },
      {
        id: 2,
        minPrice: 100,
        maxPrice: 200,
        value: "0-200"
      },
      {
        id: 3,
        minPrice: 200,
        maxPrice: 400,
        value: "200-400"
      },
      {
        id: 4,
        minPrice: 400,
        maxPrice: 600,
        value: "400-600"
      },
      {
        id: 5,
        minPrice: 600,
        maxPrice: 800,
        value: "600-800"
      },
      {
        id: 6,
        minPrice: 800,
        maxPrice: 1e3,
        value: "800-1000"
      },
      {
        id: 7,
        price: 1e3,
        text: "Above",
        value: "1000"
      }
    ];
    this.selectedPrices = [];
  }
  ngOnChanges() {
    this.selectedPrices = this.filter["price"] ? this.filter["price"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedPrices.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedPrices.push(event?.target?.value);
    else
      this.selectedPrices.splice(index, 1);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        price: this.selectedPrices.length ? this.selectedPrices?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedPrices?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
};
_CollectionPriceFilterComponent.\u0275fac = function CollectionPriceFilterComponent_Factory(t) {
  return new (t || _CollectionPriceFilterComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionPriceFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionPriceFilterComponent, selectors: [["app-collection-price-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["minMaxPrice", ""], [1, "category-list", "custom-padding", "custom-height"], [4, "ngFor", "ngForOf"], [1, "form-check", "ps-0", "m-0", "category-list-box"], ["type", "checkbox", 1, "checkbox_animated", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], ["class", "name", 4, "ngIf", "ngIfElse"], [1, "name"]], template: function CollectionPriceFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 1);
    \u0275\u0275template(1, CollectionPriceFilterComponent_li_1_Template, 7, 8, "li", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.prices);
  }
}, dependencies: [NgForOf, NgIf, CurrencySymbolPipe] });
var CollectionPriceFilterComponent = _CollectionPriceFilterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionPriceFilterComponent, { className: "CollectionPriceFilterComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\filter\\collection-price-filter\\collection-price-filter.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/collection/widgets/filter/collection-rating-filter/collection-rating-filter.component.ts
function CollectionRatingFilterComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 2)(2, "input", 3);
    \u0275\u0275listener("change", function CollectionRatingFilterComponent_li_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275element(5, "ngb-rating", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "rating-", ctx_r1.numbers[ctx_r1.numbers.length - i_r3 - 1], "");
    \u0275\u0275property("value", ctx_r1.numbers[ctx_r1.numbers.length - i_r3 - 1])("checked", ctx_r1.checked(ctx_r1.numbers[ctx_r1.numbers.length - i_r3 - 1].toString()));
    \u0275\u0275advance(3);
    \u0275\u0275property("rate", ctx_r1.numbers[ctx_r1.numbers.length - i_r3 - 1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", ctx_r1.numbers[ctx_r1.numbers.length - i_r3 - 1], " ", \u0275\u0275pipeBind1(8, 7, "star"), ")");
  }
}
var _CollectionRatingFilterComponent = class _CollectionRatingFilterComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.numbers = Array.from({ length: 5 }, (_, i) => i + 1);
    this.selectedRatings = [];
  }
  ngOnChanges() {
    this.selectedRatings = this.filter["rating"] ? this.filter["rating"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedRatings.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedRatings.push(event?.target?.value);
    else
      this.selectedRatings.splice(index, 1);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        rating: this.selectedRatings.length ? this.selectedRatings?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
      // do trigger navigation,
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedRatings?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
};
_CollectionRatingFilterComponent.\u0275fac = function CollectionRatingFilterComponent_Factory(t) {
  return new (t || _CollectionRatingFilterComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionRatingFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionRatingFilterComponent, selectors: [["app-collection-rating-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "category-list", "custom-padding"], [4, "ngFor", "ngForOf"], [1, "form-check", "ps-0", "m-0", "category-list-box"], ["type", "checkbox", 1, "checkbox_animated", 3, "change", "id", "value", "checked"], [1, "form-check-label"], [1, "product-rating"], [3, "rate"], [1, "text-content"]], template: function CollectionRatingFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 0);
    \u0275\u0275template(1, CollectionRatingFilterComponent_li_1_Template, 9, 9, "li", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.numbers);
  }
}, dependencies: [NgForOf, NgbRating, TranslatePipe] });
var CollectionRatingFilterComponent = _CollectionRatingFilterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionRatingFilterComponent, { className: "CollectionRatingFilterComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\filter\\collection-rating-filter\\collection-rating-filter.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/collection/widgets/filter/collection-filter/collection-filter.component.ts
function CollectionFilterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275listener("click", function CollectionFilterComponent_div_0_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "filters"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "clear_all"));
  }
}
function CollectionFilterComponent_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titleCase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "i", 6);
    \u0275\u0275listener("click", function CollectionFilterComponent_ul_1_li_1_Template_i_click_4_listener() {
      const filter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(filter_r4));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, filter_r4));
  }
}
function CollectionFilterComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, CollectionFilterComponent_ul_1_li_1_Template, 5, 3, "li", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filters);
  }
}
var _CollectionFilterComponent = class _CollectionFilterComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.filtersObj = {
      category: [],
      brand: [],
      tag: [],
      rating: [],
      price: [],
      attribute: []
    };
  }
  ngOnChanges() {
    this.filtersObj = {
      category: this.splitFilter("category"),
      brand: this.splitFilter("brand"),
      tag: this.splitFilter("tag"),
      rating: this.splitFilter("rating"),
      price: this.splitFilter("price"),
      attribute: this.splitFilter("attribute")
    };
    this.filters = this.mergeFilters();
  }
  remove(tag) {
    Object.keys(this.filtersObj).forEach((key) => {
      this.filtersObj[key] = this.filtersObj[key].filter((val) => {
        if (key === "rating") {
          return val !== tag.replace(/^rating /, "");
        }
        return val !== tag;
      });
    });
    this.filters = this.mergeFilters();
    const params = {};
    Object.keys(this.filtersObj).forEach((key) => {
      params[key] = this.filtersObj[key].length ? this.filtersObj[key]?.join(",") : null;
    });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge",
      skipLocationChange: false
    });
  }
  clear() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: null,
      skipLocationChange: false
    });
  }
  splitFilter(filterKey) {
    return this.filter && this.filter[filterKey] ? this.filter[filterKey].split(",") : [];
  }
  mergeFilters() {
    return [
      ...this.filtersObj["category"],
      ...this.filtersObj["brand"],
      ...this.filtersObj["tag"],
      ...this.filtersObj["rating"].map((val) => val.startsWith("rating ") ? val : `rating ${val}`),
      ...this.filtersObj["price"],
      ...this.filtersObj["attribute"]
    ];
  }
};
_CollectionFilterComponent.\u0275fac = function CollectionFilterComponent_Factory(t) {
  return new (t || _CollectionFilterComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionFilterComponent, selectors: [["app-collection-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "filter-title", 4, "ngIf"], [4, "ngIf"], [1, "filter-title"], ["href", "javascript:void(0)", 3, "click"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)"], [1, "ri-close-line", "close-icon", 3, "click"]], template: function CollectionFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionFilterComponent_div_0_Template, 7, 6, "div", 0)(1, CollectionFilterComponent_ul_1_Template, 2, 1, "ul", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.filters == null ? null : ctx.filters.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filters.length);
  }
}, dependencies: [NgForOf, NgIf, TitleCasePipe2, TranslatePipe] });
var CollectionFilterComponent = _CollectionFilterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionFilterComponent, { className: "CollectionFilterComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\filter\\collection-filter\\collection-filter.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/collection/widgets/filter/collection-attributes-filter/collection-attributes-filter.component.ts
var _c010 = (a0) => ({ "background-color": a0 });
function CollectionAttributesComponent_ul_0_li_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
  if (rf & 2) {
    const attribute_value_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c010, attribute_value_r3 == null ? null : attribute_value_r3.hex_color));
  }
}
function CollectionAttributesComponent_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 3)(2, "input", 4);
    \u0275\u0275listener("change", function CollectionAttributesComponent_ul_0_li_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 5);
    \u0275\u0275template(4, CollectionAttributesComponent_ul_0_li_1_div_4_Template, 1, 3, "div", 6);
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const attribute_value_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "attribute-", attribute_value_r3 == null ? null : attribute_value_r3.id, "");
    \u0275\u0275property("value", attribute_value_r3 == null ? null : attribute_value_r3.slug)("checked", ctx_r1.checked(attribute_value_r3 == null ? null : attribute_value_r3.slug));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "attribute-", attribute_value_r3 == null ? null : attribute_value_r3.id, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.attribute == null ? null : ctx_r1.attribute.style) === "color");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attribute_value_r3 == null ? null : attribute_value_r3.value);
  }
}
function CollectionAttributesComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 1);
    \u0275\u0275template(1, CollectionAttributesComponent_ul_0_li_1_Template, 7, 8, "li", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.attribute == null ? null : ctx_r1.attribute.attribute_values);
  }
}
var _CollectionAttributesComponent = class _CollectionAttributesComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.selectedAttributes = [];
  }
  ngOnChanges() {
    this.selectedAttributes = this.filter["attribute"] ? this.filter["attribute"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedAttributes.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedAttributes.push(event?.target?.value);
    else
      this.selectedAttributes.splice(index, 1);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        attribute: this.selectedAttributes.length ? this.selectedAttributes?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedAttributes?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
};
_CollectionAttributesComponent.\u0275fac = function CollectionAttributesComponent_Factory(t) {
  return new (t || _CollectionAttributesComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionAttributesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionAttributesComponent, selectors: [["app-collection-attributes-filter"]], inputs: { attribute: "attribute", filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "category-list custom-padding custom-height", 4, "ngIf"], [1, "category-list", "custom-padding", "custom-height"], [4, "ngFor", "ngForOf"], [1, "form-check", "ps-0", "m-0", "category-list-box"], ["type", "checkbox", 1, "checkbox_animated", 3, "change", "id", "value", "checked"], [1, "form-check-label", "color-label-box", 3, "for"], ["class", "color-box", 3, "ngStyle", 4, "ngIf"], [1, "name"], [1, "color-box", 3, "ngStyle"]], template: function CollectionAttributesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionAttributesComponent_ul_0_Template, 2, 1, "ul", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.attribute == null ? null : ctx.attribute.attribute_values == null ? null : ctx.attribute.attribute_values.length);
  }
}, dependencies: [NgForOf, NgIf, NgStyle] });
var CollectionAttributesComponent = _CollectionAttributesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionAttributesComponent, { className: "CollectionAttributesComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\filter\\collection-attributes-filter\\collection-attributes-filter.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/collection/widgets/skeleton-collection-sidebar/skeleton-collection-sidebar.component.ts
var _SkeletonCollectionSidebarComponent = class _SkeletonCollectionSidebarComponent {
};
_SkeletonCollectionSidebarComponent.\u0275fac = function SkeletonCollectionSidebarComponent_Factory(t) {
  return new (t || _SkeletonCollectionSidebarComponent)();
};
_SkeletonCollectionSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonCollectionSidebarComponent, selectors: [["app-skeleton-collection-sidebar"]], decls: 28, vars: 0, consts: [[1, "accordion", "custome-accordion"], [1, "accordion-item", "skeleton-accordion"], [1, "accordion-header"], ["type", "button", 1, "accordion-button"], [1, "accordion-collapse"], [1, "accordion-body"], [1, ""], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-11"], [1, "placeholder", "col-8"], [1, "placeholder", "col-4"]], template: function SkeletonCollectionSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "button", 3);
    \u0275\u0275element(4, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "ul", 6);
    \u0275\u0275element(8, "li", 7)(9, "li", 8)(10, "li", 9)(11, "li", 10)(12, "li", 8)(13, "li", 7)(14, "li", 8)(15, "li", 11)(16, "li", 10)(17, "li", 8)(18, "li", 12)(19, "li", 8)(20, "li", 11)(21, "li", 10)(22, "li", 8)(23, "li", 7)(24, "li", 12)(25, "li", 13)(26, "li", 10)(27, "li", 8);
    \u0275\u0275elementEnd()()()()();
  }
} });
var SkeletonCollectionSidebarComponent = _SkeletonCollectionSidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonCollectionSidebarComponent, { className: "SkeletonCollectionSidebarComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\skeleton-collection-sidebar\\skeleton-collection-sidebar.component.ts", lineNumber: 8 });
})();

// src/app/components/shop/collection/widgets/filter/collection-brand-filter/collection-brand-filter.component.ts
function CollectionBrandFilterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "input", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CollectionBrandFilterComponent_div_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(2, 2, "search_text"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
  }
}
function CollectionBrandFilterComponent_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 8)(2, "input", 9);
    \u0275\u0275listener("change", function CollectionBrandFilterComponent_ul_1_li_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "category-", brand_r4 == null ? null : brand_r4.id, "");
    \u0275\u0275property("value", brand_r4 == null ? null : brand_r4.slug)("checked", ctx_r1.checked(brand_r4 == null ? null : brand_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "brand-", brand_r4 == null ? null : brand_r4.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(brand_r4 == null ? null : brand_r4.name);
  }
}
function CollectionBrandFilterComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275template(1, CollectionBrandFilterComponent_ul_1_li_1_Template, 6, 7, "li", 7);
    \u0275\u0275pipe(2, "filter");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 1, ctx_r1.brands, ctx_r1.searchText, ""));
  }
}
function CollectionBrandFilterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h5");
    \u0275\u0275text(2, "No results found.");
    \u0275\u0275elementEnd()();
  }
}
function CollectionBrandFilterComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 13);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_category_found");
  }
}
var _CollectionBrandFilterComponent = class _CollectionBrandFilterComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.selectedBrands = [];
    this.searchText = "";
    this.brand$.subscribe((res) => this.brands = res.data);
  }
  ngOnChanges() {
    this.selectedBrands = this.filter["brand"] ? this.filter["brand"].split(",") : [];
  }
  applyFilter(event) {
    const index = this.selectedBrands.indexOf(event?.target?.value);
    if (event?.target?.checked)
      this.selectedBrands.push(event?.target?.value);
    else
      this.selectedBrands.splice(index, 1);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        brand: this.selectedBrands.length ? this.selectedBrands?.join(",") : null,
        page: 1
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
      // do trigger navigation
    });
  }
  // check if the item are selected
  checked(item) {
    if (this.selectedBrands?.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
};
_CollectionBrandFilterComponent.\u0275fac = function CollectionBrandFilterComponent_Factory(t) {
  return new (t || _CollectionBrandFilterComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionBrandFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionBrandFilterComponent, selectors: [["app-collection-brand-filter"]], inputs: { filter: "filter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 8, consts: [["class", "theme-form search-box", 4, "ngIf"], ["class", "category-list custom-padding custom-height", 4, "ngIf"], ["class", "search-not-found-box", 4, "ngIf"], [3, "class", "text", 4, "ngIf"], [1, "theme-form", "search-box"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "category-list", "custom-padding", "custom-height"], [4, "ngFor", "ngForOf"], [1, "form-check", "ps-0", "m-0", "category-list-box"], ["type", "checkbox", 1, "checkbox_animated", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], [1, "name"], [1, "search-not-found-box"], [3, "text"]], template: function CollectionBrandFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionBrandFilterComponent_div_0_Template, 3, 4, "div", 0)(1, CollectionBrandFilterComponent_ul_1_Template, 3, 5, "ul", 1)(2, CollectionBrandFilterComponent_div_2_Template, 3, 0, "div", 2);
    \u0275\u0275pipe(3, "filter");
    \u0275\u0275template(4, CollectionBrandFilterComponent_app_no_data_4_Template, 1, 3, "app-no-data", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.brands.length > 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.brands == null ? null : ctx.brands.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind3(3, 4, ctx.brands, ctx.searchText, "").length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx.brands == null ? null : ctx.brands.length));
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NoDataComponent, SearchFilterPipe, TranslatePipe] });
var CollectionBrandFilterComponent = _CollectionBrandFilterComponent;
__decorate([
  Select(BrandState.brand)
], CollectionBrandFilterComponent.prototype, "brand$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionBrandFilterComponent, { className: "CollectionBrandFilterComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\filter\\collection-brand-filter\\collection-brand-filter.component.ts", lineNumber: 13 });
})();

// src/app/components/shop/collection/widgets/sidebar/sidebar.component.ts
var _c011 = ["*"];
function CollectionSidebarComponent_app_skeleton_collection_sidebar_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-collection-sidebar");
  }
}
function CollectionSidebarComponent_ng_template_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12)(2, "button", 13)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275element(8, "app-collection-category-filter", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "categories"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
function CollectionSidebarComponent_ng_template_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12)(2, "button", 16)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 15);
    \u0275\u0275element(8, "app-collection-brand-filter", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "brand"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
function CollectionSidebarComponent_ng_template_12_ng_container_4_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12)(2, "button", 16)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 17)(6, "div", 15);
    \u0275\u0275element(7, "app-collection-attributes-filter", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attribute_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attribute_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("filter", ctx_r1.filter)("attribute", attribute_r3);
  }
}
function CollectionSidebarComponent_ng_template_12_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CollectionSidebarComponent_ng_template_12_ng_container_4_ng_container_1_div_1_Template, 8, 4, "div", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const attribute_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attribute_r3.style !== "image");
  }
}
function CollectionSidebarComponent_ng_template_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CollectionSidebarComponent_ng_template_12_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.attribute$)) == null ? null : tmp_3_0.data);
  }
}
function CollectionSidebarComponent_ng_template_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12)(2, "button", 16)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 15);
    \u0275\u0275element(8, "app-collection-price-filter", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "price"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
function CollectionSidebarComponent_ng_template_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12)(2, "button", 16)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 20)(8, "div", 15);
    \u0275\u0275element(9, "app-collection-rating-filter", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "rating"));
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
function CollectionSidebarComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, CollectionSidebarComponent_ng_template_12_div_1_Template, 9, 5, "div", 9)(2, CollectionSidebarComponent_ng_template_12_div_2_Template, 9, 5, "div", 9);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, CollectionSidebarComponent_ng_template_12_ng_container_4_Template, 3, 3, "ng-container", 10)(5, CollectionSidebarComponent_ng_template_12_div_5_Template, 9, 5, "div", 9)(6, CollectionSidebarComponent_ng_template_12_div_6_Template, 10, 5, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.hideFilter == null ? null : ctx_r1.hideFilter.includes("category")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = \u0275\u0275pipeBind1(3, 5, ctx_r1.brand$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length) && !(ctx_r1.hideFilter == null ? null : ctx_r1.hideFilter.includes("brand")));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.filter["store_slug"] && !(ctx_r1.hideFilter == null ? null : ctx_r1.hideFilter.includes("attribute")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.hideFilter == null ? null : ctx_r1.hideFilter.includes("price")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.hideFilter == null ? null : ctx_r1.hideFilter.includes("rating")));
  }
}
var _CollectionSidebarComponent = class _CollectionSidebarComponent {
  constructor(store, attributeService) {
    this.store = store;
    this.attributeService = attributeService;
    this.store.dispatch(new GetAttributes({ status: 1 }));
    this.store.dispatch(new GetBrands({ status: 1 }));
  }
  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }
};
_CollectionSidebarComponent.\u0275fac = function CollectionSidebarComponent_Factory(t) {
  return new (t || _CollectionSidebarComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(AttributeService));
};
_CollectionSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionSidebarComponent, selectors: [["app-collection-sidebar"]], inputs: { filter: "filter", hideFilter: "hideFilter" }, ngContentSelectors: _c011, decls: 14, vars: 6, consts: [["content", ""], [1, "shop-left-sidebar"], [1, "back-button", 3, "click"], ["href", "javascript:vois(0)", 1, "text-title"], [1, "ri-close-fill"], [1, "filter-category"], [3, "filter"], [4, "ngIf", "ngIfElse"], ["ngbAccordion", "", 1, "accordion", "custome-accordion"], ["class", "accordion-item", "ngbAccordionItem", "", 3, "collapsed", 4, "ngIf"], [4, "ngIf"], ["ngbAccordionItem", "", 1, "accordion-item", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["type", "button", "ngbAccordionButton", "", 1, "accordion-button"], ["ngbAccordionCollapse", "", 1, "accordion-collapse", "collapse"], ["ngbAccordionBody", "", 1, "accordion-body"], ["ngbAccordionButton", "", 1, "accordion-button"], ["ngbAccordionCollapse", ""], [4, "ngFor", "ngForOf"], [3, "filter", "attribute"], ["ngbAccordionBody", ""]], template: function CollectionSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275listener("click", function CollectionSidebarComponent_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeCanvasMenu());
    });
    \u0275\u0275elementStart(2, "h3")(3, "a", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275projection(8);
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275element(10, "app-collection-filter", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CollectionSidebarComponent_app_skeleton_collection_sidebar_11_Template, 1, 0, "app-skeleton-collection-sidebar", 7)(12, CollectionSidebarComponent_ng_template_12_Template, 7, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "back"));
    \u0275\u0275advance(4);
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.attributeService.skeletonLoader)("ngIfElse", content_r4);
  }
}, dependencies: [NgForOf, NgIf, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, CollectionCategoryFilterComponent, CollectionPriceFilterComponent, CollectionRatingFilterComponent, CollectionFilterComponent, CollectionAttributesComponent, SkeletonCollectionSidebarComponent, CollectionBrandFilterComponent, AsyncPipe, TranslatePipe] });
var CollectionSidebarComponent = _CollectionSidebarComponent;
__decorate([
  Select(AttributeState.attribute)
], CollectionSidebarComponent.prototype, "attribute$", void 0);
__decorate([
  Select(BrandState.brand)
], CollectionSidebarComponent.prototype, "brand$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionSidebarComponent, { className: "CollectionSidebarComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\sidebar\\sidebar.component.ts", lineNumber: 18 });
})();

// src/app/components/shop/collection/widgets/collection-sort/collection-sort.component.ts
var _c012 = () => [];
function CollectionSortComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "a", 20);
    \u0275\u0275listener("click", function CollectionSortComponent_div_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFilter(true));
    });
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "filter_menu"), "");
  }
}
function CollectionSortComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function CollectionSortComponent_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openOffCanvasMenu());
    });
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "filter_menu"), " ");
  }
}
var _CollectionSortComponent = class _CollectionSortComponent {
  constructor(route, attributeService, router) {
    this.route = route;
    this.attributeService = attributeService;
    this.router = router;
    this.setGridClass = new EventEmitter();
    this.showFilter = new EventEmitter();
    this.sorting = [{
      value: "asc",
      label: "Ascending Order"
    }, {
      value: "desc",
      label: "Descending Order"
    }, {
      value: "low-high",
      label: "Low - High Price"
    }, {
      value: "high-low",
      label: "High - Low Price"
    }, {
      value: "a-z",
      label: "A - Z Order"
    }, {
      value: "z-a",
      label: "Z - A Order"
    }, {
      value: "discount-high-low",
      label: "% Off - Hight To Low"
    }];
    this.selectedGrid = "collection_4_grid";
    this.class = "row g-sm-4 g-3 row-cols-xl-4 row-cols-md-3 row-cols-2 product-list-section";
    this.gridArray = ["collection_3_grid", "collection_4_grid", "collection_5_grid", "collection_list_view"];
    this.setGridClass.emit(this.class);
  }
  ngOnChanges(changes) {
    let layout = changes["filter"]?.currentValue.layout;
    let gridCol = changes["gridCol"]?.currentValue;
    if (this.gridArray.includes(gridCol)) {
      this.selectedGrid = String(this.grid(gridCol));
    }
    if (this.gridArray.includes(layout)) {
      this.grid(layout);
    }
  }
  grid(value) {
    if (this.gridArray.includes(value)) {
      if (value == "collection_3_grid")
        this.class = "row g-sm-4 g-3 product-list-section row-cols-md-3 row-cols-2";
      else if (value == "collection_4_grid")
        this.class = "row g-sm-4 g-3 product-list-section row-cols-xl-4 row-cols-md-3 row-cols-2";
      else if (value == "collection_5_grid")
        this.class = "row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2";
      else if (value == "collection_list_view")
        this.class = "row g-sm-4 g-3 product-list-section list-style";
      this.selectedGrid = value;
      this.setGridClass.emit(this.class);
    }
  }
  // SortBy Filter
  sortByFilter(data) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sortBy: data && data.value ? data.value : null
        // field: data && (data.value == 'asc' || data.value == 'desc') ? 'created_at' : null
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
      // do trigger navigation
    });
  }
  openOffCanvasMenu() {
    this.attributeService.offCanvasMenu = true;
  }
  openFilter(value) {
    this.attributeService.offCanvasMenu = value;
  }
};
_CollectionSortComponent.\u0275fac = function CollectionSortComponent_Factory(t) {
  return new (t || _CollectionSortComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AttributeService), \u0275\u0275directiveInject(Router));
};
_CollectionSortComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionSortComponent, selectors: [["app-collection-sort"]], inputs: { filter: "filter", gridCol: "gridCol" }, outputs: { setGridClass: "setGridClass", showFilter: "showFilter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 26, vars: 18, consts: [[1, "show-button"], ["class", "filter-button-group mt-0", 4, "ngIf"], [1, "top-filter-menu", "m-0"], [1, "category-dropdown"], ["href", "javascript:void(0)", "class", "filter-offcanvas-title", 3, "click", 4, "ngIf"], [1, "text-content"], [1, "dropdown"], [1, "custom-select", 3, "update", "displaySearchStatus", "placeholder", "value", "data"], [1, "grid-option", "d-none", "d-md-block"], [1, "three-grid"], ["href", "javascript:void(0)", 3, "click"], ["src", "assets/svg/grid-3.svg", "alt", "sort"], [1, "grid-btn", "d-xxl-inline-block", "d-none"], ["src", "assets/svg/grid-4.svg", "alt", "sort", 1, "d-lg-inline-block", "d-none"], ["src", "assets/svg/grid.svg", "alt", "sort", 1, "img-fluid", "d-lg-none", "d-inline-block"], ["src", "assets/svg/grid-5.svg", "alt", "sort", 1, "d-lg-inline-block", "d-none"], [1, "list-btn"], ["src", "assets/svg/list.svg", "alt", "sort"], [1, "filter-button-group", "mt-0"], [1, "filter-button", "d-inline-block", "d-lg-none"], [3, "click"], [1, "ri-filter-2-fill"], ["href", "javascript:void(0)", 1, "filter-offcanvas-title", 3, "click"]], template: function CollectionSortComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, CollectionSortComponent_div_1_Template, 6, 3, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, CollectionSortComponent_a_4_Template, 4, 3, "a", 4);
    \u0275\u0275elementStart(5, "h5", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "select2", 7);
    \u0275\u0275listener("update", function CollectionSortComponent_Template_select2_update_9_listener($event) {
      return ctx.sortByFilter($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "ul")(12, "li", 9)(13, "a", 10);
    \u0275\u0275listener("click", function CollectionSortComponent_Template_a_click_13_listener() {
      return ctx.grid("collection_3_grid");
    });
    \u0275\u0275element(14, "img", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 12)(16, "a", 10);
    \u0275\u0275listener("click", function CollectionSortComponent_Template_a_click_16_listener() {
      return ctx.grid("collection_4_grid");
    });
    \u0275\u0275element(17, "img", 13)(18, "img", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li", 12)(20, "a", 10);
    \u0275\u0275listener("click", function CollectionSortComponent_Template_a_click_20_listener() {
      return ctx.grid("collection_5_grid");
    });
    \u0275\u0275element(21, "img", 15)(22, "img", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li", 16)(24, "a", 10);
    \u0275\u0275listener("click", function CollectionSortComponent_Template_a_click_24_listener() {
      return ctx.grid("collection_list_view");
    });
    \u0275\u0275element(25, "img", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filter["layout"] !== "collection_offcanvas_filter" && ctx.filter["layout"] !== "collection_no_sidebar");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.filter && ctx.filter["layout"] == "collection_offcanvas_filter");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 15, "sort_by"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275property("displaySearchStatus", "hidden")("placeholder", "Sort")("value", ctx.filter["sortBy"])("data", ctx.sorting ? ctx.sorting : \u0275\u0275pureFunction0(17, _c012));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.selectedGrid == "collection_3_grid");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.selectedGrid == "collection_4_grid");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.selectedGrid == "collection_5_grid");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.selectedGrid == "collection_list_view");
  }
}, dependencies: [NgIf, Select2, TranslatePipe] });
var CollectionSortComponent = _CollectionSortComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionSortComponent, { className: "CollectionSortComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\collection-sort\\collection-sort.component.ts", lineNumber: 12 });
})();

// src/app/components/shop/collection/widgets/collection-paginate/collection-paginate.component.ts
function CollectionPaginateComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 1)(1, "app-pagination", 2);
    \u0275\u0275listener("setPage", function CollectionPaginateComponent_nav_0_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r1.totalItems)("currentPage", +ctx_r1.filter["page"])("pageSize", +ctx_r1.filter["paginate"]);
  }
}
var _CollectionPaginateComponent = class _CollectionPaginateComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.totalItems = 0;
    this.product$.subscribe((product) => this.totalItems = product?.total);
  }
  setPaginate(page) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page
      },
      queryParamsHandling: "merge"
      // preserve the existing query params in the route
    });
  }
};
_CollectionPaginateComponent.\u0275fac = function CollectionPaginateComponent_Factory(t) {
  return new (t || _CollectionPaginateComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CollectionPaginateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionPaginateComponent, selectors: [["app-collection-paginate"]], inputs: { filter: "filter" }, decls: 2, vars: 3, consts: [["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"]], template: function CollectionPaginateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionPaginateComponent_nav_0_Template, 2, 3, "nav", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.product$)) == null ? null : tmp_0_0.data == null ? null : tmp_0_0.data.length);
  }
}, dependencies: [NgIf, PaginationComponent, AsyncPipe] });
var CollectionPaginateComponent = _CollectionPaginateComponent;
__decorate([
  Select(ProductState.product)
], CollectionPaginateComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionPaginateComponent, { className: "CollectionPaginateComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\collection-paginate\\collection-paginate.component.ts", lineNumber: 14 });
})();

// src/app/components/shop/collection/widgets/collection-products/collection-products.component.ts
var _c013 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
function CollectionProductsComponent_ng_container_7_app_skeleton_product_box_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
}
function CollectionProductsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CollectionProductsComponent_ng_container_7_app_skeleton_product_box_1_Template, 1, 0, "app-skeleton-product-box", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletonItems);
  }
}
function CollectionProductsComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-product-box", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap("product-box-3");
    \u0275\u0275property("product", product_r3);
  }
}
function CollectionProductsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CollectionProductsComponent_ng_template_8_ng_container_0_Template, 2, 5, "ng-container", 6);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", (tmp_2_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.product$)) == null ? null : tmp_2_0.data);
  }
}
function CollectionProductsComponent_app_no_data_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 8);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "sorry_cant_find_products_looking")("description", "please_check_misspelt_something_searching_other_way");
  }
}
function CollectionProductsComponent_app_collection_paginate_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-paginate", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r1.filter);
  }
}
var _CollectionProductsComponent = class _CollectionProductsComponent {
  constructor(productService) {
    this.productService = productService;
    this.gridClass = "row g-sm-4 g-3 row-cols-xl-4 row-cols-md-3 row-cols-2 product-list-section";
    this.skeletonItems = Array.from({ length: 40 }, (_, index) => index);
  }
  setGridClass(gridClass) {
    this.gridClass = gridClass;
  }
};
_CollectionProductsComponent.\u0275fac = function CollectionProductsComponent_Factory(t) {
  return new (t || _CollectionProductsComponent)(\u0275\u0275directiveInject(ProductService));
};
_CollectionProductsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionProductsComponent, selectors: [["app-collection-products"]], inputs: { filter: "filter", gridCol: "gridCol" }, decls: 14, vars: 26, consts: [["productContent", ""], [3, "setGridClass", "filter", "gridCol"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], [3, "class", "image", "text", "description", 4, "ngIf"], [3, "filter", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "product"], [3, "image", "text", "description"], [3, "filter"]], template: function CollectionProductsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-collection-sort", 1);
    \u0275\u0275listener("setGridClass", function CollectionProductsComponent_Template_app_collection_sort_setGridClass_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setGridClass($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, CollectionProductsComponent_ng_container_7_Template, 2, 1, "ng-container", 3)(8, CollectionProductsComponent_ng_template_8_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CollectionProductsComponent_app_no_data_10_Template, 1, 5, "app-no-data", 4);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CollectionProductsComponent_app_collection_paginate_12_Template, 1, 1, "app-collection-paginate", 5);
    \u0275\u0275pipe(13, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_7_0;
    let tmp_8_0;
    const productContent_r4 = \u0275\u0275reference(9);
    \u0275\u0275property("filter", ctx.filter)("gridCol", ctx.gridCol);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(21, _c013, (tmp_3_0 = \u0275\u0275pipeBind1(2, 9, ctx.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.full_border, (tmp_3_0 = \u0275\u0275pipeBind1(3, 11, ctx.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.image_bg, (tmp_3_0 = \u0275\u0275pipeBind1(4, 13, ctx.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.product_box_bg, (tmp_3_0 = \u0275\u0275pipeBind1(5, 15, ctx.themeOption$)) == null ? null : tmp_3_0.product == null ? null : tmp_3_0.product.product_box_border));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx.gridClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.productService.skeletonLoader)("ngIfElse", productContent_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_7_0 = \u0275\u0275pipeBind1(11, 17, ctx.product$)) == null ? null : tmp_7_0.data == null ? null : tmp_7_0.data.length) && !ctx.productService.skeletonLoader);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_8_0 = \u0275\u0275pipeBind1(13, 19, ctx.product$)) == null ? null : tmp_8_0.data == null ? null : tmp_8_0.data.length) && !ctx.productService.skeletonLoader);
  }
}, dependencies: [NgClass, NgForOf, NgIf, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, CollectionSortComponent, CollectionPaginateComponent, AsyncPipe] });
var CollectionProductsComponent = _CollectionProductsComponent;
__decorate([
  Select(ProductState.product)
], CollectionProductsComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionProductsComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionProductsComponent, { className: "CollectionProductsComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\collection-products\\collection-products.component.ts", lineNumber: 16 });
})();

// src/app/components/shop/seller/seller-details/seller-details-basic/seller-details-basic.component.ts
function SellerDetailsBasicComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.storageURL + ((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.themeOptions$)) == null ? null : tmp_1_0.seller == null ? null : tmp_1_0.seller.store_image_url), \u0275\u0275sanitizeUrl);
  }
}
function SellerDetailsBasicComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", ctx_r0.store.vendor.country_code, " ", ctx_r0.store.vendor.phone, "");
  }
}
function SellerDetailsBasicComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "h5")(3, "a", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("href", "mailto:", ctx_r0.store.vendor.email, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.store.vendor.email);
  }
}
var _SellerDetailsBasicComponent = class _SellerDetailsBasicComponent {
  constructor() {
    this.storageURL = environment.storageURL;
  }
};
_SellerDetailsBasicComponent.\u0275fac = function SellerDetailsBasicComponent_Factory(t) {
  return new (t || _SellerDetailsBasicComponent)();
};
_SellerDetailsBasicComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerDetailsBasicComponent, selectors: [["app-seller-details-basic"]], inputs: { filter: "filter", store: "store" }, decls: 22, vars: 12, consts: [["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-3", "col-lg-4"], [1, "left-box"], [3, "filter"], [1, "vendor-detail-box"], ["class", "shop-roof", "alt", "seller", 3, "src", 4, "ngIf"], [1, "vendor-name", "vendor-bottom"], [1, "vendor-logo"], [3, "store"], [1, "vendor-detail-list"], [4, "ngIf"], [1, "col-xxl-9", "col-lg-8"], ["alt", "seller", 1, "shop-roof", 3, "src"], [1, "ri-smartphone-line"], [1, "ri-mail-line"], [3, "href"]], template: function SellerDetailsBasicComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "app-collection-sidebar", 5)(6, "div", 6);
    \u0275\u0275template(7, SellerDetailsBasicComponent_img_7_Template, 2, 3, "img", 7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
    \u0275\u0275element(11, "app-seller-store-logo", 10);
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275element(13, "app-seller-store-name", 10)(14, "app-seller-store-rating", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "app-seller-store-description", 10);
    \u0275\u0275elementStart(16, "ul", 11);
    \u0275\u0275template(17, SellerDetailsBasicComponent_li_17_Template, 4, 2, "li", 12)(18, SellerDetailsBasicComponent_li_18_Template, 5, 3, "li", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "app-seller-store-social-links", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275element(21, "app-collection-products", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(8, 10, ctx.themeOptions$)) == null ? null : tmp_1_0.seller == null ? null : tmp_1_0.seller.store_image_url);
    \u0275\u0275advance(4);
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(2);
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance();
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance();
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx.store == null ? null : ctx.store.hide_vendor_phone) && ctx.store.vendor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.store == null ? null : ctx.store.hide_vendor_email) && ctx.store.vendor);
    \u0275\u0275advance();
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [NgIf, SellerStoreLogoComponent, SellerStoreRatingComponent, SellerStoreNameComponent, SellerStoreDescriptionComponent, SellerStoreSocialLinksComponent, CollectionSidebarComponent, CollectionProductsComponent, AsyncPipe] });
var SellerDetailsBasicComponent = _SellerDetailsBasicComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], SellerDetailsBasicComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerDetailsBasicComponent, { className: "SellerDetailsBasicComponent", filePath: "src\\app\\components\\shop\\seller\\seller-details\\seller-details-basic\\seller-details-basic.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/seller/seller-details/seller-details-classic/seller-details-classic.component.ts
var _c014 = () => ["/contact-us"];
var _SellerDetailsClassicComponent = class _SellerDetailsClassicComponent {
};
_SellerDetailsClassicComponent.\u0275fac = function SellerDetailsClassicComponent_Factory(t) {
  return new (t || _SellerDetailsClassicComponent)();
};
_SellerDetailsClassicComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerDetailsClassicComponent, selectors: [["app-seller-details-classic"]], inputs: { filter: "filter", store: "store" }, decls: 32, vars: 15, consts: [["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-3", "col-lg-4"], [1, "left-box"], [3, "filter"], [1, "col-xxl-9", "col-lg-8"], [1, "vendor-detail-box-2"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-2", "col-md-3"], [1, "vendor-logo"], [3, "store"], [1, "col-xxl-8", "col-md-6"], [1, "vendor-name", "p-center-left"], [1, "vendor-list-name"], [1, "product-rating", "vendor-rating"], [1, "share-contact"], [1, "vendor-contect"], [1, "btn", "btn-sm", "btn-animation", 3, "routerLink"]], template: function SellerDetailsClassicComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "app-collection-sidebar", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
    \u0275\u0275element(11, "app-seller-store-logo", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div")(15, "div", 14);
    \u0275\u0275element(16, "app-seller-store-name", 11);
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275element(18, "app-seller-store-rating", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "app-seller-store-description", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 9)(21, "div", 16)(22, "div");
    \u0275\u0275element(23, "app-seller-store-social-links", 11);
    \u0275\u0275elementStart(24, "div", 17)(25, "h5");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275element(31, "app-collection-products", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(6);
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(5);
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(2);
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance();
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(4);
    \u0275\u0275property("store", ctx.store);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 10, "if_you_any_query"), "?");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c014));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 12, "contact_us"));
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [RouterLink, SellerStoreLogoComponent, SellerStoreRatingComponent, SellerStoreNameComponent, SellerStoreDescriptionComponent, SellerStoreSocialLinksComponent, CollectionSidebarComponent, CollectionProductsComponent, TranslatePipe] });
var SellerDetailsClassicComponent = _SellerDetailsClassicComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerDetailsClassicComponent, { className: "SellerDetailsClassicComponent", filePath: "src\\app\\components\\shop\\seller\\seller-details\\seller-details-classic\\seller-details-classic.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/seller/seller-details/seller-details.component.ts
function SellerDetailsComponent_app_seller_details_basic_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seller-details-basic", 2);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("store", \u0275\u0275pipeBind1(1, 2, ctx_r0.store$))("filter", ctx_r0.filter);
  }
}
function SellerDetailsComponent_app_seller_details_classic_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-seller-details-classic", 2);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("store", \u0275\u0275pipeBind1(1, 2, ctx_r0.store$))("filter", ctx_r0.filter);
  }
}
var _SellerDetailsComponent = class _SellerDetailsComponent {
  constructor(route, store) {
    this.route = route;
    this.store = store;
    this.breadcrumb = {
      title: "Seller",
      items: []
    };
    this.layout = "basic_store_details";
    this.skeleton = true;
    this.filter = {
      "page": 1,
      "paginate": 40,
      "status": 1,
      "field": "price",
      "price": "",
      "category": "",
      "tag": "",
      "sort": "",
      "sortBy": "",
      "rating": "",
      "attribute": ""
    };
    this.totalItems = 0;
    this.route.queryParams.subscribe((params) => {
      this.filter = {
        "page": params["page"] ? params["page"] : 1,
        "paginate": 40,
        "status": 1,
        "field": params["field"] ? params["field"] : "",
        "price": params["price"] ? params["price"] : "",
        "category": params["category"] ? params["category"] : "",
        "tag": params["tag"] ? params["tag"] : "",
        "sort": params["sort"] ? params["sort"] : "",
        "sortBy": params["sortBy"] ? params["sortBy"] : "",
        "rating": params["rating"] ? params["rating"] : "",
        "attribute": params["attribute"] ? params["attribute"] : ""
      };
      this.route.params.subscribe((param) => this.filter["store_slug"] = param["slug"]);
      this.breadcrumb.items = [];
      this.breadcrumb.title = this.filter["store_slug"] ? this.filter["store_slug"] : "Seller";
      this.breadcrumb.items.push({ label: "Seller Store", active: true }, { label: this.breadcrumb.title, active: false });
      this.store.dispatch(new GetProducts(this.filter));
      if (params["layout"]) {
        this.layout = params["layout"];
      } else {
        this.themeOptions$.subscribe((option) => {
          this.layout = "basic_store_details";
        });
      }
      this.filter["layout"] = this.layout;
    });
    this.product$.subscribe((product) => this.totalItems = product?.total);
  }
};
_SellerDetailsComponent.\u0275fac = function SellerDetailsComponent_Factory(t) {
  return new (t || _SellerDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Store));
};
_SellerDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerDetailsComponent, selectors: [["app-seller-details"]], decls: 3, vars: 3, consts: [[3, "breadcrumb"], [3, "store", "filter", 4, "ngIf"], [3, "store", "filter"]], template: function SellerDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275template(1, SellerDetailsComponent_app_seller_details_basic_1_Template, 2, 4, "app-seller-details-basic", 1)(2, SellerDetailsComponent_app_seller_details_classic_2_Template, 2, 4, "app-seller-details-classic", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "basic_store_details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "classic_store_details");
  }
}, dependencies: [NgIf, BreadcrumbComponent, SellerDetailsBasicComponent, SellerDetailsClassicComponent, AsyncPipe] });
var SellerDetailsComponent = _SellerDetailsComponent;
__decorate([
  Select(ProductState.product)
], SellerDetailsComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], SellerDetailsComponent.prototype, "themeOptions$", void 0);
__decorate([
  Select(StoreState.selectedStore)
], SellerDetailsComponent.prototype, "store$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerDetailsComponent, { className: "SellerDetailsComponent", filePath: "src\\app\\components\\shop\\seller\\seller-details\\seller-details.component.ts", lineNumber: 20 });
})();

// src/app/components/shop/product/product-details/widgets/store-information/store-information.component.ts
var _c015 = (a0) => ["/seller/store/", a0];
function StoreInformationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.store == null ? null : ctx_r0.store.store_logo == null ? null : ctx_r0.store.store_logo.original_url, \u0275\u0275sanitizeUrl)("alt", ctx_r0.store == null ? null : ctx_r0.store.store_name);
  }
}
function StoreInformationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.store == null ? null : ctx_r0.store.store_name == null ? null : ctx_r0.store.store_name.charAt(0).toString().toUpperCase());
  }
}
function StoreInformationComponent_div_19_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 3, "contact"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", ctx_r0.store == null ? null : ctx_r0.store.vendor == null ? null : ctx_r0.store.vendor.country_code, " ", ctx_r0.store == null ? null : ctx_r0.store.vendor == null ? null : ctx_r0.store.vendor.phone, "");
  }
}
function StoreInformationComponent_div_19_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 17);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 2, "email"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.store == null ? null : ctx_r0.store.vendor == null ? null : ctx_r0.store.vendor.email);
  }
}
function StoreInformationComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "ul");
    \u0275\u0275template(2, StoreInformationComponent_div_19_li_2_Template, 8, 5, "li", 16)(3, StoreInformationComponent_div_19_li_3_Template, 8, 4, "li", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r0.store == null ? null : ctx_r0.store.hide_vendor_phone));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.store == null ? null : ctx_r0.store.hide_vendor_email));
  }
}
var _StoreInformationComponent = class _StoreInformationComponent {
};
_StoreInformationComponent.\u0275fac = function StoreInformationComponent_Factory(t) {
  return new (t || _StoreInformationComponent)();
};
_StoreInformationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreInformationComponent, selectors: [["app-store-information"]], inputs: { store: "store" }, decls: 20, vars: 21, consts: [["storeTextLogo", ""], [1, "vendor-box"], [1, "vendor-contain"], ["href", "javascript:void(o)", 3, "routerLink"], ["class", "vendor-image", 4, "ngIf", "ngIfElse"], [1, "vendor-name"], [1, "fw-500"], [1, "ri-star-fill"], [1, "store-btn", 3, "routerLink"], [1, "ri-arrow-right-line"], [1, "vendor-detail", 3, "innerHTML"], ["class", "vendor-list", 4, "ngIf"], [1, "vendor-image"], [3, "src", "alt"], [1, "vendor-text"], [1, "vendor-list"], [4, "ngIf"], [1, "address-contact"], [1, "ri-smartphone-line"], [1, "text-content"], [1, "ri-mail-line"]], template: function StoreInformationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
    \u0275\u0275template(3, StoreInformationComponent_div_3_Template, 2, 2, "div", 4)(4, StoreInformationComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "a", 3)(8, "h5", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 8);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275element(16, "i", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "p", 10);
    \u0275\u0275pipe(18, "summary");
    \u0275\u0275template(19, StoreInformationComponent_div_19_Template, 4, 2, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const storeTextLogo_r2 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c015, ctx.store == null ? null : ctx.store.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.store == null ? null : ctx.store.store_logo)("ngIfElse", storeTextLogo_r2);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c015, ctx.store == null ? null : ctx.store.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.store == null ? null : ctx.store.store_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", (ctx.store == null ? null : ctx.store.rating_count == null ? null : ctx.store.rating_count.toFixed(1)) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c015, ctx.store == null ? null : ctx.store.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 10, "go_to_store"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(18, 12, ctx.store == null ? null : ctx.store.description, 200), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx.store == null ? null : ctx.store.hide_vendor_email) && !(ctx.store == null ? null : ctx.store.hide_vendor_email));
  }
}, dependencies: [NgIf, RouterLink, SummaryPipe, TranslatePipe] });
var StoreInformationComponent = _StoreInformationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreInformationComponent, { className: "StoreInformationComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\store-information\\store-information.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/product/product-details/widgets/trending-products/trending-products.component.ts
function TrendingProductsComponent_div_0_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-product-box", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r1);
  }
}
function TrendingProductsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 3);
    \u0275\u0275template(6, TrendingProductsComponent_div_0_li_6_Template, 2, 3, "li", 4);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "trending_products"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(7, 4, ctx_r1.relatedProducts, 0, 4));
  }
}
var _TrendingProductsComponent = class _TrendingProductsComponent {
  constructor() {
    this.relatedProducts = [];
  }
  ngOnInit() {
    this.relatedProduct$.subscribe((products) => {
      this.relatedProducts = products?.length ? products?.filter((product) => product?.is_trending) : [];
    });
  }
};
_TrendingProductsComponent.\u0275fac = function TrendingProductsComponent_Factory(t) {
  return new (t || _TrendingProductsComponent)();
};
_TrendingProductsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrendingProductsComponent, selectors: [["app-trending-products"]], decls: 1, vars: 1, consts: [["class", "pt-25", 4, "ngIf"], [1, "pt-25"], [1, "category-menu"], [1, "product-list", "border-0", "p-0", "sidebar-product", "d-flex"], [4, "ngFor", "ngForOf"], [3, "product"]], template: function TrendingProductsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TrendingProductsComponent_div_0_Template, 8, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.relatedProducts == null ? null : ctx.relatedProducts.length);
  }
}, dependencies: [NgForOf, NgIf, ProductBoxComponent, SlicePipe, TranslatePipe] });
var TrendingProductsComponent = _TrendingProductsComponent;
__decorate([
  Select(ProductState.relatedProducts)
], TrendingProductsComponent.prototype, "relatedProduct$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrendingProductsComponent, { className: "TrendingProductsComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\trending-products\\trending-products.component.ts", lineNumber: 12 });
})();

// src/app/components/shop/product/product-details/widgets/product-banner/product-banner.component.ts
var _ProductBannerComponent = class _ProductBannerComponent {
  ngOnChanges(change) {
    if (change["image"]) {
      let img = change["image"]?.currentValue;
      this.banner = {
        redirect_link: {
          link_type: "collection",
          link: "vegetables-fruits"
        },
        image_url: img
      };
    }
  }
};
_ProductBannerComponent.\u0275fac = function ProductBannerComponent_Factory(t) {
  return new (t || _ProductBannerComponent)();
};
_ProductBannerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBannerComponent, selectors: [["app-product-banner"]], inputs: { image: "image" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "ratio_156", "pt-25"], [1, "home-contain"], [3, "image", "bgImage"]], template: function ProductBannerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-image-link", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx.banner)("bgImage", false);
  }
}, dependencies: [ImageLinkComponent] });
var ProductBannerComponent = _ProductBannerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBannerComponent, { className: "ProductBannerComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-banner\\product-banner.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/product/product-details/sidebar/sidebar.component.ts
function ProductSidebarComponent_app_store_information_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-store-information", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("store", ctx_r0.product.store);
  }
}
function ProductSidebarComponent_app_trending_products_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trending-products");
  }
}
function ProductSidebarComponent_app_product_banner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-banner", 5);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("image", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.themeOptions$)) == null ? null : tmp_1_0.product == null ? null : tmp_1_0.product.banner_image_url);
  }
}
var _ProductSidebarComponent = class _ProductSidebarComponent {
  constructor() {
    this.storageURL = environment.storageURL;
  }
};
_ProductSidebarComponent.\u0275fac = function ProductSidebarComponent_Factory(t) {
  return new (t || _ProductSidebarComponent)();
};
_ProductSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductSidebarComponent, selectors: [["app-product-details-sidebar"]], inputs: { product: "product" }, decls: 7, vars: 9, consts: [[1, "right-sidebar-box"], [3, "store", 4, "ngIf"], [4, "ngIf"], [3, "image", 4, "ngIf"], [3, "store"], [3, "image"]], template: function ProductSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ProductSidebarComponent_app_store_information_1_Template, 1, 1, "app-store-information", 1)(2, ProductSidebarComponent_app_trending_products_2_Template, 1, 0, "app-trending-products", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, ProductSidebarComponent_app_product_banner_4_Template, 2, 3, "app-product-banner", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product.store);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(3, 3, ctx.themeOptions$)) == null ? null : tmp_1_0.product == null ? null : tmp_1_0.product.is_trending_product);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(5, 5, ctx.themeOptions$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.banner_enable) && ((tmp_2_0 = \u0275\u0275pipeBind1(6, 7, ctx.themeOptions$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.banner_image_url));
  }
}, dependencies: [NgIf, StoreInformationComponent, TrendingProductsComponent, ProductBannerComponent, AsyncPipe] });
var ProductSidebarComponent = _ProductSidebarComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductSidebarComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductSidebarComponent, { className: "ProductSidebarComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\sidebar\\sidebar.component.ts", lineNumber: 14 });
})();

// src/app/components/shop/product/product-details/widgets/payment-option/payment-option.component.ts
function PaymentOptionComponent_div_0_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.safe_checkout_image), \u0275\u0275sanitizeUrl);
  }
}
function PaymentOptionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PaymentOptionComponent_div_0_img_5_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "guaranteed_safe_checkout"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.safe_checkout_image);
  }
}
function PaymentOptionComponent_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.storageURL + (ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.secure_checkout_image), \u0275\u0275sanitizeUrl);
  }
}
function PaymentOptionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PaymentOptionComponent_div_1_img_4_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "secure_checkout"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.secure_checkout_image);
  }
}
var _PaymentOptionComponent = class _PaymentOptionComponent {
  constructor() {
    this.storageURL = environment.storageURL;
  }
};
_PaymentOptionComponent.\u0275fac = function PaymentOptionComponent_Factory(t) {
  return new (t || _PaymentOptionComponent)();
};
_PaymentOptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentOptionComponent, selectors: [["app-payment-option"]], inputs: { product: "product", option: "option" }, decls: 2, vars: 2, consts: [["class", "paymnet-option", 4, "ngIf"], ["class", "secure-site-sec", 4, "ngIf"], [1, "paymnet-option"], [1, "product-title"], ["class", "img-fluid payment-img", 3, "src", 4, "ngIf"], [1, "img-fluid", "payment-img", 3, "src"], [1, "secure-site-sec"]], template: function PaymentOptionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaymentOptionComponent_div_0_Template, 6, 4, "div", 0)(1, PaymentOptionComponent_div_1_Template, 5, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", (ctx.option == null ? null : ctx.option.product == null ? null : ctx.option.product.safe_checkout) && (ctx.product == null ? null : ctx.product.safe_checkout));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.option == null ? null : ctx.option.product == null ? null : ctx.option.product.secure_checkout) && (ctx.product == null ? null : ctx.product.secure_checkout));
  }
}, dependencies: [NgIf, TranslatePipe] });
var PaymentOptionComponent = _PaymentOptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentOptionComponent, { className: "PaymentOptionComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\payment-option\\payment-option.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/product/product-details/widgets/product-information/product-information.component.ts
function ProductInformationComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "sku"), ": ", ctx_r0.product == null ? null : ctx_r0.product.sku, "");
  }
}
function ProductInformationComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "unit"), ": ", ctx_r0.product == null ? null : ctx_r0.product.unit, "");
  }
}
function ProductInformationComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(2, 3, "weight"), ": ", ctx_r0.product == null ? null : ctx_r0.product.weight, " ", \u0275\u0275pipeBind1(3, 5, "gms"), "");
  }
}
function ProductInformationComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "titleCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "stock_status"), ": ", \u0275\u0275pipeBind1(3, 4, ctx_r0.product == null ? null : ctx_r0.product.stock_status), "");
  }
}
function ProductInformationComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(2, 3, "quantity"), ": ", ctx_r0.product == null ? null : ctx_r0.product.quantity, " ", \u0275\u0275pipeBind1(3, 5, "items_left"), "");
  }
}
var _ProductInformationComponent = class _ProductInformationComponent {
};
_ProductInformationComponent.\u0275fac = function ProductInformationComponent_Factory(t) {
  return new (t || _ProductInformationComponent)();
};
_ProductInformationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductInformationComponent, selectors: [["app-product-information"]], inputs: { product: "product" }, decls: 12, vars: 8, consts: [[1, "pickup-box"], [1, "product-title"], [1, "product-info"], [1, "product-info-list", "product-info-list-2"], [4, "ngIf"]], template: function ProductInformationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "ul", 3);
    \u0275\u0275template(7, ProductInformationComponent_li_7_Template, 3, 4, "li", 4)(8, ProductInformationComponent_li_8_Template, 3, 4, "li", 4)(9, ProductInformationComponent_li_9_Template, 4, 7, "li", 4)(10, ProductInformationComponent_li_10_Template, 4, 6, "li", 4)(11, ProductInformationComponent_li_11_Template, 4, 7, "li", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "product_information"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.stock_status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.quantity) > 0);
  }
}, dependencies: [NgIf, TitleCasePipe2, TranslatePipe] });
var ProductInformationComponent = _ProductInformationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductInformationComponent, { className: "ProductInformationComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-information\\product-information.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/product/product-details/widgets/product-review/product-review.component.ts
var _c016 = ["reviewModal"];
var _c13 = (a0) => ({ "width": a0 });
function ProductReviewComponent_div_1_div_3_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.product == null ? null : ctx_r0.product.rating_count == null ? null : ctx_r0.product.rating_count.toFixed(2), " ");
  }
}
function ProductReviewComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11);
    \u0275\u0275template(2, ProductReviewComponent_div_1_div_3_h2_2_Template, 3, 1, "h2", 12);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.product == null ? null : ctx_r0.product.reviews_count, " ", \u0275\u0275pipeBind1(5, 3, "rating"), "");
  }
}
function ProductReviewComponent_div_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 16)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275element(4, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275element(6, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h5", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rate_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.product == null ? null : ctx_r0.product.review_ratings == null ? null : ctx_r0.product.review_ratings.length) - 1 - i_r3 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c13, (rate_r2 / (ctx_r0.product == null ? null : ctx_r0.product.reviews_count) * 100).toFixed(0) + "%"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rate_r2);
  }
}
function ProductReviewComponent_div_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 14);
    \u0275\u0275template(1, ProductReviewComponent_div_1_ul_5_li_1_Template, 9, 5, "li", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.product == null ? null : ctx_r0.product.review_ratings == null ? null : (tmp_3_0 = ctx_r0.product.review_ratings.slice()) == null ? null : tmp_3_0.reverse());
  }
}
function ProductReviewComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h4", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-button", 22);
    \u0275\u0275listener("click", function ProductReviewComponent_div_1_div_6_Template_app_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      const reviewModal_r5 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(reviewModal_r5.openModal(ctx_r0.product, (ctx_r0.product == null ? null : ctx_r0.product.user_review) ? "edit" : "create"));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "review_this_product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "let_other_customers_know_what_you_think"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn");
    \u0275\u0275property("id", "reviews_modal_btn")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, (ctx_r0.product == null ? null : ctx_r0.product.user_review) ? "edit_review" : "write_a_review"), " ");
  }
}
function ProductReviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 2);
    \u0275\u0275template(3, ProductReviewComponent_div_1_div_3_Template, 6, 5, "div", 5);
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275template(5, ProductReviewComponent_div_1_ul_5_Template, 2, 1, "ul", 9)(6, ProductReviewComponent_div_1_div_6_Template, 10, 13, "div", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.reviews_count);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.reviews_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.can_review);
  }
}
function ProductReviewComponent_div_2_ul_2_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", review_r6 == null ? null : review_r6.consumer == null ? null : review_r6.consumer.profile_image == null ? null : review_r6.consumer.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function ProductReviewComponent_div_2_ul_2_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((review_r6 == null ? null : review_r6.consumer == null ? null : review_r6.consumer.name == null ? null : (tmp_7_0 = review_r6.consumer.name.charAt(0)) == null ? null : (tmp_7_0 = tmp_7_0.toString()) == null ? null : tmp_7_0.toUpperCase()) || "F");
  }
}
function ProductReviewComponent_div_2_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 28)(2, "div")(3, "div", 29);
    \u0275\u0275template(4, ProductReviewComponent_div_2_ul_2_li_1_img_4_Template, 1, 1, "img", 30)(5, ProductReviewComponent_div_2_ul_2_li_1_ng_template_5_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "div", 32)(9, "a", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 34)(12, "h6", 35);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 36);
    \u0275\u0275element(16, "ngb-rating", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 38)(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    const textImage_r7 = \u0275\u0275reference(6);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", review_r6 == null ? null : review_r6.consumer == null ? null : review_r6.consumer.profile_image)("ngIfElse", textImage_r7);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(review_r6 == null ? null : review_r6.consumer == null ? null : review_r6.consumer.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 6, review_r6 == null ? null : review_r6.created_at, "dd MMM yyyy hh:mm:a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("rate", (review_r6 == null ? null : review_r6.rating) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6 == null ? null : review_r6.description);
  }
}
function ProductReviewComponent_div_2_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 27);
    \u0275\u0275template(1, ProductReviewComponent_div_2_ul_2_li_1_Template, 20, 9, "li", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.reviews);
  }
}
function ProductReviewComponent_div_2_app_no_data_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 41);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "No Review Yet")("description", "There are currently no ratings or reviews for this product");
  }
}
function ProductReviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, ProductReviewComponent_div_2_ul_2_Template, 2, 1, "ul", 25)(3, ProductReviewComponent_div_2_app_no_data_3_Template, 1, 4, "app-no-data", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.reviews == null ? null : ctx_r0.reviews.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.reviews == null ? null : ctx_r0.reviews.length));
  }
}
function ProductReviewComponent_div_3_app_no_data_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 41);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "No Review Yet")("description", "There are currently no ratings or reviews for this product");
  }
}
function ProductReviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, ProductReviewComponent_div_3_app_no_data_1_Template, 1, 4, "app-no-data", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.reviews == null ? null : ctx_r0.reviews.length));
  }
}
var _ProductReviewComponent = class _ProductReviewComponent {
  constructor() {
    this.reviews = [];
  }
};
_ProductReviewComponent.\u0275fac = function ProductReviewComponent_Factory(t) {
  return new (t || _ProductReviewComponent)();
};
_ProductReviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductReviewComponent, selectors: [["app-product-review"]], viewQuery: function ProductReviewComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c016, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ProfileModal = _t.first);
  }
}, inputs: { product: "product", reviews: "reviews" }, decls: 6, vars: 3, consts: [["reviewModal", ""], ["textImage", ""], [1, "row"], ["class", "col-xl-5", 4, "ngIf"], ["class", "col-xl-7", 4, "ngIf"], ["class", "col-xl-12", 4, "ngIf"], [1, "col-xl-5"], [1, "product-rating-box"], [1, "col-xl-12"], ["class", "product-rating-list", 4, "ngIf"], ["class", "review-title-2", 4, "ngIf"], [1, "product-main-rating"], [4, "ngIf"], [1, "ri-star-fill"], [1, "product-rating-list"], [4, "ngFor", "ngForOf"], [1, "rating-product"], [1, "progress"], ["aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngStyle"], [1, "total"], [1, "review-title-2"], [1, "fw-bold"], [3, "click", "id", "spinner"], [1, "col-xl-7"], [1, "review-people"], ["class", "review-list", 4, "ngIf"], [3, "class", "text", "description", 4, "ngIf"], [1, "review-list"], [1, "people-box"], [1, "people-image", "people-text"], ["class", "img-fluid", "alt", "user", 3, "src", 4, "ngIf", "ngIfElse"], [1, "people-comment"], [1, "people-name"], ["href", "javascript:void(0)", 1, "name"], [1, "date-time"], [1, "text-content"], [1, "product-rating"], [3, "rate"], [1, "reply"], ["alt", "user", 1, "img-fluid", 3, "src"], [1, "user-round"], [3, "text", "description"]], template: function ProductReviewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ProductReviewComponent_div_1_Template, 7, 3, "div", 3)(2, ProductReviewComponent_div_2_Template, 4, 2, "div", 4)(3, ProductReviewComponent_div_3_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-review-modal", null, 0);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.can_review) || (ctx.product == null ? null : ctx.product.reviews_count));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.can_review) || (ctx.product == null ? null : ctx.product.reviews_count));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.can_review) && !(ctx.product == null ? null : ctx.product.reviews_count));
  }
}, dependencies: [NgForOf, NgIf, NgStyle, ButtonComponent, NgbRating, NoDataComponent, ReviewModalComponent, DatePipe, TranslatePipe] });
var ProductReviewComponent = _ProductReviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductReviewComponent, { className: "ProductReviewComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-review\\product-review.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/product/product-details/widgets/questions-answers/questions-answers.component.ts
var _c017 = ["questionModal"];
function QuestionsAnswersComponent_div_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 5);
    \u0275\u0275element(2, "h5")(3, "h6", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275element(5, "h5");
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275element(7, "p", 8)(8, "p", 8);
    \u0275\u0275elementEnd()()();
  }
}
function QuestionsAnswersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "ul");
    \u0275\u0275template(2, QuestionsAnswersComponent_div_0_li_2_Template, 9, 0, "li", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275listener("click", function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const qna_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.isLogin && ctx_r0.QuestionModal.openModal(ctx_r0.product, qna_r4));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275element(3, "i", 16);
    \u0275\u0275elementEnd()()();
  }
}
function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275listener("click", function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_10_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const qna_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.isLogin && ctx_r0.feedback(qna_r4, "liked"));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275element(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const qna_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("ri-thumb-up-", ctx_r0.isLogin ? qna_r4.reaction == "liked" ? "fill" : "line" : "fill", "");
    \u0275\u0275classProp("theme-color", qna_r4.reaction == "liked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qna_r4.total_likes, "");
  }
}
function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275listener("click", function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_11_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const qna_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.isLogin && ctx_r0.feedback(qna_r4, "disliked"));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275element(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const qna_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("ri-thumb-down-", ctx_r0.isLogin ? qna_r4.reaction == "disliked" ? "fill" : "line" : "fill", "");
    \u0275\u0275classProp("theme-color", qna_r4.reaction == "disliked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qna_r4.total_dislikes, "");
  }
}
function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const qna_r4 = ctx_r6.$implicit;
    const i_r8 = ctx_r6.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 3, "a"), "", i_r8 + 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", qna_r4 == null ? null : qna_r4.answer, " ");
  }
}
function QuestionsAnswersComponent_ng_template_1_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 5)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 14);
    \u0275\u0275template(8, QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_8_Template, 4, 0, "li", 12);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275template(10, QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_10_Template, 5, 6, "li", 12)(11, QuestionsAnswersComponent_ng_template_1_ul_8_li_1_li_11_Template, 5, 6, "li", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275template(13, QuestionsAnswersComponent_ng_template_1_ul_8_li_1_div_13_Template, 6, 5, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const qna_r4 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 7, "q"), "", i_r8 + 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(qna_r4 == null ? null : qna_r4.question);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (qna_r4 == null ? null : qna_r4.consumer_id) === ((tmp_9_0 = \u0275\u0275pipeBind1(9, 9, ctx_r0.user$)) == null ? null : tmp_9_0.id) && !(qna_r4 == null ? null : qna_r4.answer));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", qna_r4 == null ? null : qna_r4.answer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", qna_r4 == null ? null : qna_r4.answer);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", qna_r4 == null ? null : qna_r4.answer);
  }
}
function QuestionsAnswersComponent_ng_template_1_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, QuestionsAnswersComponent_ng_template_1_ul_8_li_1_Template, 14, 11, "li", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.questionAnswers);
  }
}
function QuestionsAnswersComponent_ng_template_1_app_no_data_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_question_posted_yet")("description", "there_are_currently_question_product");
  }
}
function QuestionsAnswersComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "a", 10);
    \u0275\u0275listener("click", function QuestionsAnswersComponent_ng_template_1_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.QuestionModal.openModal(ctx_r0.product));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275template(8, QuestionsAnswersComponent_ng_template_1_ul_8_Template, 2, 1, "ul", 12)(9, QuestionsAnswersComponent_ng_template_1_app_no_data_9_Template, 1, 4, "app-no-data", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "have_doubts_regarding_this_product"), " ? ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "post_your_question"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.questionAnswers == null ? null : ctx_r0.questionAnswers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.questionAnswers == null ? null : ctx_r0.questionAnswers.length));
  }
}
var _QuestionsAnswersComponent = class _QuestionsAnswersComponent {
  constructor(store, questionAnswersService) {
    this.store = store;
    this.questionAnswersService = questionAnswersService;
    this.question = new FormControl();
    this.isLogin = false;
    this.skeletonItems = Array.from({ length: 5 }, (_, index) => index);
    this.destroy$ = new Subject();
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
    if (this.isLogin) {
      this.store.dispatch(new GetUserDetails());
    }
  }
  feedback(qna, value) {
    const data = {
      question_and_answer_id: qna.id,
      reaction: value
    };
    this.store.dispatch(new Feedback(data, value));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_QuestionsAnswersComponent.\u0275fac = function QuestionsAnswersComponent_Factory(t) {
  return new (t || _QuestionsAnswersComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(QuestionsAnswersService));
};
_QuestionsAnswersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionsAnswersComponent, selectors: [["app-questions-answers"]], viewQuery: function QuestionsAnswersComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c017, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.QuestionModal = _t.first);
  }
}, inputs: { product: "product", questionAnswers: "questionAnswers" }, decls: 5, vars: 2, consts: [["content", ""], ["questionModal", ""], ["class", "question-answer skeleton-qa", 4, "ngIf", "ngIfElse"], [1, "question-answer", "skeleton-qa"], [4, "ngFor", "ngForOf"], [1, "question-box"], [1, "font-weight-bold", "que"], [1, "answer-box"], [1, "ans"], [1, "post-question-box"], ["href", "javascript:void(0)", 3, "click"], [1, "question-answer"], [4, "ngIf"], [3, "class", "text", "description", 4, "ngIf"], [1, "link-dislike-box"], ["class", "answer-box", 4, "ngIf"], [1, "ri-edit-fill"], [3, "text", "description"]], template: function QuestionsAnswersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuestionsAnswersComponent_div_0_Template, 3, 1, "div", 2)(1, QuestionsAnswersComponent_ng_template_1_Template, 10, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(3, "app-question-modal", null, 1);
  }
  if (rf & 2) {
    const content_r9 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", ctx.questionAnswersService.skeletonLoader)("ngIfElse", content_r9);
  }
}, dependencies: [NgForOf, NgIf, NoDataComponent, QuestionModalComponent, AsyncPipe, TranslatePipe] });
var QuestionsAnswersComponent = _QuestionsAnswersComponent;
__decorate([
  Select(AccountState.user)
], QuestionsAnswersComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionsAnswersComponent, { className: "QuestionsAnswersComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\questions-answers\\questions-answers.component.ts", lineNumber: 19 });
})();

// src/app/components/shop/product/product-details/widgets/product-details-tabs/product-details-tabs.component.ts
var _c018 = ["description"];
var _c14 = () => [];
function ProductDetailsTabsComponent_ng_template_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.getTrustedHtml(ctx_r1.product == null ? null : ctx_r1.product.description), \u0275\u0275sanitizeHtml);
  }
}
function ProductDetailsTabsComponent_ng_template_7_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ProductDetailsTabsComponent_ng_template_7_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seeMore());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, !ctx_r1.showMore ? "show_more" : "show_less"), " ");
  }
}
function ProductDetailsTabsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, ProductDetailsTabsComponent_ng_template_7_div_1_Template, 2, 1, "div", 11)(2, ProductDetailsTabsComponent_ng_template_7_button_2_Template, 4, 3, "button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("more", ctx_r1.showMore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.product == null ? null : ctx_r1.product.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.height > 500 || ctx_r1.width < 768);
  }
}
function ProductDetailsTabsComponent_li_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-review", 17);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("product", ctx_r1.product)("reviews", ((tmp_4_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.review$)) == null ? null : tmp_4_0.data) || \u0275\u0275pureFunction0(4, _c14));
  }
}
function ProductDetailsTabsComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16)(1, "a", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductDetailsTabsComponent_li_8_ng_template_4_Template, 2, 5, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "review"));
  }
}
function ProductDetailsTabsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-questions-answers", 18);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r1.product)("questionAnswers", ((tmp_3_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.question$)) == null ? null : tmp_3_0.data) || \u0275\u0275pureFunction0(4, _c14));
  }
}
var _ProductDetailsTabsComponent = class _ProductDetailsTabsComponent {
  constructor(store, sanitizer) {
    this.store = store;
    this.sanitizer = sanitizer;
    this.active = "description";
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const description = this.descriptionElement?.nativeElement;
      this.height = description?.offsetHeight;
      this.width = window.innerWidth;
    }, 0);
  }
  ngOnChanges(changes) {
    let product = changes["product"]?.currentValue;
    this.store.dispatch(new GetQuestionAnswers({ product_id: product.id }));
    this.store.dispatch(new GetReview({ product_id: product.id }));
  }
  getTrustedHtml(data) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }
  seeMore() {
    this.showMore = !this.showMore;
  }
};
_ProductDetailsTabsComponent.\u0275fac = function ProductDetailsTabsComponent_Factory(t) {
  return new (t || _ProductDetailsTabsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(DomSanitizer));
};
_ProductDetailsTabsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsTabsComponent, selectors: [["app-product-details-tabs"]], viewQuery: function ProductDetailsTabsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c018, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.descriptionElement = _t.first);
  }
}, inputs: { product: "product" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 9, consts: [["nav", "ngbNav"], ["description", ""], [1, "product-section-box", "mt-0"], ["ngbNav", "", 1, "nav", "nav-tabs", "custom-nav", 3, "activeIdChange", "activeId"], ["ngbNavItem", "description"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "review", 4, "ngIf"], ["ngbNavItem", "questions_answers"], [1, "custom-tab", 3, "ngbNavOutlet"], [1, "product-description", "more-less-box"], ["class", "nav-desh ckeditor-content", "id", "description", 3, "innerHTML", 4, "ngIf"], ["class", "btn more-lest-btn", 3, "click", 4, "ngIf"], ["id", "description", 1, "nav-desh", "ckeditor-content", 3, "innerHTML"], [1, "btn", "more-lest-btn", 3, "click"], [1, "ri-arrow-down-s-line"], ["ngbNavItem", "review"], [3, "product", "reviews"], [3, "product", "questionAnswers"]], template: function ProductDetailsTabsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "ul", 3, 0);
    \u0275\u0275twoWayListener("activeIdChange", function ProductDetailsTabsComponent_Template_ul_activeIdChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "li", 4)(4, "a", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProductDetailsTabsComponent_ng_template_7_Template, 3, 4, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProductDetailsTabsComponent_li_8_Template, 5, 3, "li", 7);
    \u0275\u0275elementStart(9, "li", 8)(10, "a", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProductDetailsTabsComponent_ng_template_13_Template, 2, 5, "ng-template", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r4 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("activeId", ctx.active);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "description"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.is_external));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "q_a"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngbNavOutlet", nav_r4);
  }
}, dependencies: [NgIf, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, ProductReviewComponent, QuestionsAnswersComponent, AsyncPipe, TranslatePipe], changeDetection: 0 });
var ProductDetailsTabsComponent = _ProductDetailsTabsComponent;
__decorate([
  Select(QuestionAnswersState.questionsAnswers)
], ProductDetailsTabsComponent.prototype, "question$", void 0);
__decorate([
  Select(ReviewState.review)
], ProductDetailsTabsComponent.prototype, "review$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsTabsComponent, { className: "ProductDetailsTabsComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-details-tabs\\product-details-tabs.component.ts", lineNumber: 19 });
})();

// src/app/components/shop/product/product-details/widgets/product-action/product-action.component.ts
var _c019 = ["sizeChartModal"];
var _c15 = ["deliveryReturnModal"];
var _c23 = ["questionModal"];
var _c32 = (a0, a1) => ({ "danger-progress": a0, "warning-progress": a1 });
var _c4 = (a0) => ({ width: a0 });
function ProductActionComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275element(7, "div", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(4, 5, "please_hurry_only"), " ", ctx_r0.product.quantity, " ", \u0275\u0275pipeBind1(5, 7, "left_in_stock"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c32, ctx_r0.product.quantity <= 2, ctx_r0.product.quantity >= 3 && ctx_r0.product.quantity <= 7));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c4, ctx_r0.product.quantity * 100 / 10 + "%"));
  }
}
function ProductActionComponent_ng_container_0_div_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function ProductActionComponent_ng_container_0_div_2_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.SizeChartModal.openModal(ctx_r0.product.size_chart_image));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "size_chart"), " ");
  }
}
function ProductActionComponent_ng_container_0_div_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function ProductActionComponent_ng_container_0_div_2_a_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DeliveryReturnModal.openModal(ctx_r0.policy));
    });
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "delivery_return"), " ");
  }
}
function ProductActionComponent_ng_container_0_div_2_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function ProductActionComponent_ng_container_0_div_2_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.QuestionModal.openModal(ctx_r0.product));
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "ask_a_question"), " ");
  }
}
function ProductActionComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, ProductActionComponent_ng_container_0_div_2_a_1_Template, 4, 3, "a", 11)(2, ProductActionComponent_ng_container_0_div_2_a_2_Template, 4, 3, "a", 11)(3, ProductActionComponent_ng_container_0_div_2_a_3_Template, 4, 3, "a", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product.size_chart_image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.policy && ctx_r0.product.is_return);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.policy && ctx_r0.product.is_return);
  }
}
function ProductActionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductActionComponent_ng_container_0_div_1_Template, 8, 14, "div", 4)(2, ProductActionComponent_ng_container_0_div_2_Template, 4, 3, "div", 5);
    \u0275\u0275element(3, "app-size-chart-modal", null, 0)(5, "app-delivery-return-modal", null, 1)(7, "app-question-modal", null, 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.product == null ? null : ctx_r0.product.quantity) && ctx_r0.product.quantity <= 10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product.size_chart_image || ctx_r0.policy && ctx_r0.product.is_return);
  }
}
var _ProductActionComponent = class _ProductActionComponent {
  constructor(store) {
    this.store = store;
    this.themeOptions$.subscribe((option) => {
      this.policy = option?.product?.shipping_and_return;
    });
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
  }
};
_ProductActionComponent.\u0275fac = function ProductActionComponent_Factory(t) {
  return new (t || _ProductActionComponent)(\u0275\u0275directiveInject(Store));
};
_ProductActionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductActionComponent, selectors: [["app-product-action"]], viewQuery: function ProductActionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c019, 5);
    \u0275\u0275viewQuery(_c15, 5);
    \u0275\u0275viewQuery(_c23, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.SizeChartModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.DeliveryReturnModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.QuestionModal = _t.first);
  }
}, inputs: { product: "product" }, decls: 1, vars: 1, consts: [["sizeChartModal", ""], ["deliveryReturnModal", ""], ["questionModal", ""], [4, "ngIf"], ["class", "progress-sec", 4, "ngIf"], ["class", "size-delivery-info", 4, "ngIf"], [1, "progress-sec"], [1, "left-progressbar"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 3, "ngClass"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 3, "ngStyle"], [1, "size-delivery-info"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-ruler-line"], [1, "ri-truck-line"], [1, "ri-questionnaire-line"]], template: function ProductActionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductActionComponent_ng_container_0_Template, 9, 2, "ng-container", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.is_external) && ctx.product.status);
  }
}, dependencies: [NgClass, NgIf, NgStyle, SizeChartModalComponent, DeliveryReturnModalComponent, QuestionModalComponent, TranslatePipe] });
var ProductActionComponent = _ProductActionComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductActionComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductActionComponent, { className: "ProductActionComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-action\\product-action.component.ts", lineNumber: 16 });
})();

// src/app/components/shop/product/product-details/widgets/product-wholesale/product-wholesale.component.ts
function ProductWholesaleComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wholesale_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wholesale_r1.min_qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wholesale_r1.max_qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.product == null ? null : ctx_r1.product.wholesale_price_type) == "fixed" ? \u0275\u0275pipeBind1(7, 3, wholesale_r1.value) : wholesale_r1.value + "% Off", " ");
  }
}
var _ProductWholesaleComponent = class _ProductWholesaleComponent {
};
_ProductWholesaleComponent.\u0275fac = function ProductWholesaleComponent_Factory(t) {
  return new (t || _ProductWholesaleComponent)();
};
_ProductWholesaleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductWholesaleComponent, selectors: [["app-product-wholesale"]], inputs: { product: "product" }, decls: 14, vars: 10, consts: [[1, "table", "mt-2", "mb-4", "modal-table"], [1, "border-top-0"], [4, "ngFor", "ngForOf"]], template: function ProductWholesaleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 1);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 1);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, ProductWholesaleComponent_tr_13_Template, 8, 5, "tr", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "Min QTY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "Max QTY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, (ctx.product == null ? null : ctx.product.wholesale_price_type) == "fixed" ? "Unit Price" : "Percentage"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.product == null ? null : ctx.product.wholesales);
  }
}, dependencies: [NgForOf, CurrencySymbolPipe, TranslatePipe] });
var ProductWholesaleComponent = _ProductWholesaleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductWholesaleComponent, { className: "ProductWholesaleComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-wholesale\\product-wholesale.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/product/product-details/widgets/product-contain/product-contain.component.ts
var _c020 = (a0) => ["/brand", a0];
var _c16 = () => [];
function ProductContainComponent_ng_container_0_div_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "h6", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.ordersCount, " ", \u0275\u0275pipeBind1(4, 2, "customers_ordered"), "");
  }
}
function ProductContainComponent_ng_container_0_div_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "h6", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.viewsCount, " ", \u0275\u0275pipeBind1(4, 2, "active_view_in_this_item"), "");
  }
}
function ProductContainComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "ul");
    \u0275\u0275template(2, ProductContainComponent_ng_container_0_div_1_li_2_Template, 5, 4, "li", 2)(3, ProductContainComponent_ng_container_0_div_1_li_3_Template, 5, 4, "li", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.encourage_order) && (ctx_r0.product == null ? null : ctx_r0.product.encourage_order));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.encourage_view) && (ctx_r0.product == null ? null : ctx_r0.product.encourage_view));
  }
}
function ProductContainComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h5")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "a", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", "Brand", ": ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c020, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.brand.name);
  }
}
function ProductContainComponent_ng_container_0_del_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
  }
}
function ProductContainComponent_ng_container_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(2, 2, "off"), " ");
  }
}
function ProductContainComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "ngb-rating", 21);
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("rate", ctx_r0.product.rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.product.reviews_count, " ", \u0275\u0275pipeBind1(4, 3, "review"), "");
  }
}
function ProductContainComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "p", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.product.short_description, \u0275\u0275sanitizeHtml);
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_app_sale_timer_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sale-timer", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("startDate", ctx_r0.product.sale_starts_at)("endDate", ctx_r0.product.sale_expired_at)("title", "hurry_up_sales_ends_in");
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-product-wholesale", 32);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 3, "Total Price:"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, ctx_r0.totalPrice));
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "app-button", 37);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_div_5_Template_app_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(-1));
    });
    \u0275\u0275element(4, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 39);
    \u0275\u0275elementStart(6, "app-button", 37);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_div_5_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(1));
    });
    \u0275\u0275element(7, "i", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 41)(9, "a", 42);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_div_5_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addToWishlist(ctx_r0.product));
    });
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-button", 37);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_div_5_Template_app_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addToCompare(ctx_r0.product.id));
    });
    \u0275\u0275element(12, "i", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "add-to-cart" + ctx_r0.product.id)("spinner", false);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx_r0.productQty);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "qty-left-minus" + ctx_r0.product.id)("spinner", false);
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("ri-heart-", ctx_r0.product.is_wishlist ? "fill" : "line", "");
    \u0275\u0275classProp("theme-color", ctx_r0.product.is_wishlist);
    \u0275\u0275advance();
    \u0275\u0275classMap("wishlist-button btn");
    \u0275\u0275property("id", "compare_btn")("spinner", false);
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_app_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 46);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_app_button_1_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.addToCart(ctx_r0.product));
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap("btn btn-md bg-theme scroll-button");
    \u0275\u0275property("id", "addcartbtnVariation" + ctx_r0.product.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "add_to_cart"), " ");
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_ng_template_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 48);
    \u0275\u0275template(1, ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_ng_template_2_i_1_Template, 1, 0, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap("btn btn-md bg-theme scroll-button disabled");
    \u0275\u0275property("id", "soldoutbtnproductcontain")("spinner", false)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedVariation && ctx_r0.selectedVariation.status && ctx_r0.selectedVariation.quantity >= ctx_r0.productQty || !ctx_r0.selectedVariation && ctx_r0.product.quantity >= ctx_r0.productQty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx_r0.selectedVariation && ctx_r0.selectedVariation.status && ctx_r0.selectedVariation.quantity < ctx_r0.productQty || !ctx_r0.selectedVariation && ctx_r0.product.quantity < ctx_r0.productQty ? "out_of_stock" : "add_to_cart"), " ");
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_app_button_1_Template, 4, 6, "app-button", 44)(2, ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_ng_template_2_Template, 4, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "app-button", 45);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_Template_app_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView((ctx_r0.selectedVariation && ctx_r0.selectedVariation.status && ctx_r0.selectedVariation.quantity >= ctx_r0.productQty || !ctx_r0.selectedVariation && ctx_r0.product.quantity >= ctx_r0.productQty) && ctx_r0.addToCart(ctx_r0.product, true));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const outStock_r6 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedVariation && ctx_r0.selectedVariation.status && ctx_r0.selectedVariation.quantity >= ctx_r0.productQty || !ctx_r0.selectedVariation && ctx_r0.product.quantity >= ctx_r0.productQty)("ngIfElse", outStock_r6);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("btn btn-md border-theme-color");
    \u0275\u0275property("id", "buynowbtn" + ctx_r0.product.id)("disabled", ctx_r0.selectedVariation && ctx_r0.selectedVariation.status && ctx_r0.selectedVariation.quantity >= ctx_r0.productQty || !ctx_r0.selectedVariation && ctx_r0.product.quantity >= ctx_r0.productQty ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "buy_now"), " ");
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 46);
    \u0275\u0275listener("click", function ProductContainComponent_ng_container_0_ng_container_13_ng_template_8_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.externalProductLink(ctx_r0.product.external_url));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-md bg-theme scroll-button");
    \u0275\u0275property("id", "externalBtn" + ctx_r0.product.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.external_button_text ? ctx_r0.product.external_button_text : \u0275\u0275pipeBind1(2, 4, "buy_now"), " ");
  }
}
function ProductContainComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25)(2, "app-variant-attributes", 26);
    \u0275\u0275listener("selectVariation", function ProductContainComponent_ng_container_0_ng_container_13_Template_app_variant_attributes_selectVariation_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectVariation($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ProductContainComponent_ng_container_0_ng_container_13_app_sale_timer_3_Template, 1, 3, "app-sale-timer", 27)(4, ProductContainComponent_ng_container_0_ng_container_13_ng_container_4_Template, 8, 7, "ng-container", 2)(5, ProductContainComponent_ng_container_0_ng_container_13_div_5_Template, 13, 18, "div", 28);
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275template(7, ProductContainComponent_ng_container_0_ng_container_13_ng_container_7_Template, 7, 9, "ng-container", 30)(8, ProductContainComponent_ng_container_0_ng_container_13_ng_template_8_Template, 3, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const isExternalProduct_r8 = \u0275\u0275reference(9);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx_r0.product)("attributes", ctx_r0.product.attributes || \u0275\u0275pureFunction0(8, _c16))("owlCar", ctx_r0.owlCar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product.sale_starts_at && ctx_r0.product.sale_expired_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.wholesales == null ? null : ctx_r0.product.wholesales.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.product == null ? null : ctx_r0.product.is_external));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r0.product == null ? null : ctx_r0.product.is_external))("ngIfElse", isExternalProduct_r8);
  }
}
function ProductContainComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "currently_item_unavailable"));
  }
}
function ProductContainComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductContainComponent_ng_container_0_div_1_Template, 4, 2, "div", 3);
    \u0275\u0275elementStart(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductContainComponent_ng_container_0_div_4_Template, 6, 5, "div", 5);
    \u0275\u0275elementStart(5, "div", 6)(6, "h3", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currencySymbol");
    \u0275\u0275template(9, ProductContainComponent_ng_container_0_del_9_Template, 3, 3, "del", 8)(10, ProductContainComponent_ng_container_0_span_10_Template, 3, 4, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProductContainComponent_ng_container_0_div_11_Template, 5, 5, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProductContainComponent_ng_container_0_div_12_Template, 2, 1, "div", 11)(13, ProductContainComponent_ng_container_0_ng_container_13_Template, 10, 9, "ng-container", 2)(14, ProductContainComponent_ng_container_0_ng_container_14_Template, 4, 3, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.encourage_order) && (ctx_r0.product == null ? null : ctx_r0.product.encourage_order) || (ctx_r0.option == null ? null : ctx_r0.option.product == null ? null : ctx_r0.option.product.encourage_view) && (ctx_r0.product == null ? null : ctx_r0.product.encourage_view));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedVariation ? ctx_r0.selectedVariation.name : ctx_r0.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.brand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.sale_price : ctx_r0.product.sale_price), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.product == null ? null : ctx_r0.product.is_external));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.short_description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.product == null ? null : ctx_r0.product.status));
  }
}
var _ProductContainComponent = class _ProductContainComponent {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.productQty = 1;
    this.totalPrice = 0;
    this.ordersCount = 10;
    this.viewsCount = 30;
  }
  ngOnChanges(changes) {
    if (changes["product"] && changes["product"].currentValue) {
      this.selectedVariation = null;
      clearInterval(this.countsInterval);
      this.product = changes["product"]?.currentValue;
    }
    this.countsInterval = setInterval(() => {
      let encourage_max_view_count = this.option?.product?.encourage_max_view_count ? this.option?.product?.encourage_max_view_count : 100;
      this.viewsCount = Math.floor(Math.random() * encourage_max_view_count) + 1;
    }, 5e3);
    this.countsInterval = setInterval(() => {
      let encourage_max_order_count = this.option?.product?.encourage_max_order_count ? this.option?.product?.encourage_max_order_count : 100;
      this.ordersCount = Math.floor(Math.random() * encourage_max_order_count) + 1;
    }, 6e4);
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => {
        if (item.variation_id) {
          this.product.variations.find((i) => {
            return i.id == item.variation_id;
          });
        } else {
          return item.product.id == this.product.id;
        }
      });
    });
  }
  ngOnInit() {
    this.wholesalePriceCal();
  }
  selectVariation(variation) {
    this.selectedVariation = variation;
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
    this.wholesalePriceCal();
  }
  addToCart(product, buyNow) {
    if (product) {
      const params = {
        id: this.cartItem && (this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id) ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCart(params)).subscribe({
        complete: () => {
          if (buyNow) {
            this.router.navigate(["/checkout"]);
          }
        }
      });
    }
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
  externalProductLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
  wholesalePriceCal() {
    let wholesale = this.product?.wholesales.find((value) => value.min_qty <= this.productQty && value.max_qty >= this.productQty) || null;
    if (wholesale && this.product?.wholesale_price_type == "fixed") {
      this.totalPrice = this.productQty * wholesale.value;
    } else if (wholesale && this.product?.wholesale_price_type == "percentage") {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product?.sale_price);
      this.totalPrice = this.totalPrice - this.totalPrice * (wholesale.value / 100);
    } else {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product?.sale_price);
    }
  }
  ngOnDestroy() {
    if (this.countsInterval) {
      clearInterval(this.countsInterval);
    }
  }
};
_ProductContainComponent.\u0275fac = function ProductContainComponent_Factory(t) {
  return new (t || _ProductContainComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router));
};
_ProductContainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductContainComponent, selectors: [["app-product-contain"]], inputs: { product: "product", option: "option", owlCar: "owlCar" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["isExternalProduct", ""], ["outStock", ""], [4, "ngIf"], ["class", "product-count", 4, "ngIf"], [1, "name"], ["class", "brand-box-suggection", 4, "ngIf"], [1, "price-rating"], [1, "theme-color", "price"], ["class", "text-content", 4, "ngIf"], ["class", "offer-top", 4, "ngIf"], ["class", "product-rating custom-rate", 4, "ngIf"], ["class", "product-contain", 4, "ngIf"], [1, "product-count"], [1, "ri-flashlight-line"], [1, "lang"], [1, "ri-eye-line"], [1, "brand-box-suggection"], [3, "routerLink"], [1, "text-content"], [1, "offer-top"], [1, "product-rating", "custom-rate"], [3, "rate"], [1, "review"], [1, "product-contain"], [3, "innerHTML"], [1, "product-package"], [3, "selectVariation", "product", "attributes", "owlCar"], [3, "startDate", "endDate", "title", 4, "ngIf"], ["class", "note-box product-package", 4, "ngIf"], [1, "dynamic-checkout"], [4, "ngIf", "ngIfElse"], [3, "startDate", "endDate", "title"], [3, "product"], [1, "theme-color"], [1, "note-box", "product-package"], [1, "cart_qty", "qty-box", "product-qty"], [1, "input-group"], [3, "click", "id", "spinner"], [1, "ri-subtract-fill"], ["type", "text", "name", "quantity", "readonly", "", 1, "form-control", "input-number", "qty-input", 3, "value"], [1, "ri-add-line"], [1, "wishlist-btn-group"], ["href", "javascript:void(0)", 1, "wishlist-button", "btn", 3, "click"], [1, "ri-refresh-line"], [3, "id", "class", "click", 4, "ngIf", "ngIfElse"], [3, "click", "id", "disabled"], [3, "click", "id"], [1, "ri-shopping-cart-line", "me-1"], [3, "id", "spinner", "disabled"], ["class", "ri-shopping-cart-line me-1", 4, "ngIf"], [1, "not-available"]], template: function ProductContainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductContainComponent_ng_container_0_Template, 15, 12, "ng-container", 2);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.product);
  }
}, dependencies: [NgIf, RouterLink, ButtonComponent, NgbRating, VariantAttributesComponent, SaleTimerComponent, ProductWholesaleComponent, CurrencySymbolPipe, TranslatePipe] });
var ProductContainComponent = _ProductContainComponent;
__decorate([
  Select(CartState.cartItems)
], ProductContainComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(WishlistState.wishlistIds)
], ProductContainComponent.prototype, "wishlistIds$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductContainComponent, { className: "ProductContainComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-contain\\product-contain.component.ts", lineNumber: 19 });
})();

// src/app/components/shop/product/product-details/widgets/product-bundle/product-bundle.component.ts
var _c021 = (a0) => ["/product/", a0];
function ProductBundleComponent_div_0_li_8_del_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crossSellProduct_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, crossSellProduct_r2.price));
  }
}
function ProductBundleComponent_div_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 10)(2, "div", 11)(3, "a", 12);
    \u0275\u0275element(4, "img", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "a", 12)(7, "h6", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h5", 16)(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProductBundleComponent_div_0_li_8_del_13_Template, 3, 3, "del", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const crossSellProduct_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c021, crossSellProduct_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", crossSellProduct_r2.product_thumbnail ? crossSellProduct_r2.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", crossSellProduct_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c021, crossSellProduct_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", crossSellProduct_r2.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, crossSellProduct_r2.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", crossSellProduct_r2.discount);
  }
}
function ProductBundleComponent_div_0_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 19)(2, "input", 20);
    \u0275\u0275listener("change", function ProductBundleComponent_div_0_li_11_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.select($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 21)(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currencySymbol");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const crossSellProduct_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", crossSellProduct_r5.id);
    \u0275\u0275propertyInterpolate1("id", "crosssell-", crossSellProduct_r5.id, "");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "crosssell-", crossSellProduct_r5.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", crossSellProduct_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, crossSellProduct_r5.sale_price));
  }
}
function ProductBundleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "ul");
    \u0275\u0275template(8, ProductBundleComponent_div_0_li_8_Template, 14, 13, "li", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "ul");
    \u0275\u0275template(11, ProductBundleComponent_div_0_li_11_Template, 9, 9, "li", 5);
    \u0275\u0275elementStart(12, "li", 7)(13, "h5");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h4", 8);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "app-button", 9);
    \u0275\u0275listener("click", function ProductBundleComponent_div_0_Template_app_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addToCartAll());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "frequently_bought_together"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.crossSellProducts);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.crossSellProducts);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 13, "product_selected_for"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 15, ctx_r3.total));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn text-white theme-bg-color btn-md mt-sm-4 mt-3 fw-bold");
    \u0275\u0275property("iconClass", "ri-shopping-cart-line")("id", "addcartAllbtn")("disabled", !ctx_r3.total);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 17, "add_all_to_cart"), " ");
  }
}
var _ProductBundleComponent = class _ProductBundleComponent {
  constructor(store) {
    this.store = store;
    this.crossSellProducts = [];
    this.selectedProduct = [];
    this.selectedProductIds = [];
    this.total = 0;
  }
  ngOnChanges() {
    if (this.product?.cross_sell_products && Array.isArray(this.product?.cross_sell_products)) {
      this.crossSellProduct$.subscribe((products) => {
        this.crossSellProducts = products.filter((product) => this.product?.cross_sell_products?.includes(product?.id));
      });
    }
  }
  select(event) {
    const index = this.selectedProductIds.indexOf(Number(event?.target?.value));
    if (event?.target?.checked)
      this.selectedProductIds.push(Number(event?.target?.value));
    else
      this.selectedProductIds.splice(index, 1);
    this.crossSellProduct$.subscribe((products) => {
      this.selectedProduct = products.filter((product) => this.selectedProductIds?.includes(product?.id));
    });
    this.total = this.selectedProduct.reduce((sum, item) => sum + item.sale_price, 0);
  }
  addToCartAll() {
    this.selectedProduct.forEach((product) => {
      if (product) {
        this.cartItem$.subscribe((items) => {
          this.cartItem = items.find((item) => item.product.id == product.id);
        });
        const params = {
          id: this.cartItem ? this.cartItem?.id : null,
          product_id: product?.id,
          product: product ? product : null,
          variation: null,
          variation_id: null,
          quantity: 1
        };
        this.store.dispatch(new AddToCart(params));
      }
    });
  }
};
_ProductBundleComponent.\u0275fac = function ProductBundleComponent_Factory(t) {
  return new (t || _ProductBundleComponent)(\u0275\u0275directiveInject(Store));
};
_ProductBundleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBundleComponent, selectors: [["app-product-bundle"]], inputs: { product: "product" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "related-product bundle-sec", 4, "ngIf"], [1, "related-product", "bundle-sec"], [1, "product-title-2"], [1, "related-box"], [1, "related-image"], [4, "ngFor", "ngForOf"], [1, "budle-list"], [1, "contant"], [1, "theme-color"], [3, "click", "iconClass", "id", "disabled"], [1, "product-box", "product-box-bg"], [1, "product-image"], [3, "routerLink"], [1, "img-fluid", 3, "src", "alt"], [1, "product-detail"], [1, "name"], [1, "sold", "text-content"], [1, "theme-color", "price"], [4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "checkbox_animated", 3, "change", "value", "id"], [1, "form-check-label", 3, "for"], [1, "color", "color-1"]], template: function ProductBundleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBundleComponent_div_0_Template, 22, 19, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.crossSellProducts == null ? null : ctx.crossSellProducts.length);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, ButtonComponent, CurrencySymbolPipe, TranslatePipe] });
var ProductBundleComponent = _ProductBundleComponent;
__decorate([
  Select(ProductState.relatedProducts)
], ProductBundleComponent.prototype, "crossSellProduct$", void 0);
__decorate([
  Select(CartState.cartItems)
], ProductBundleComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBundleComponent, { className: "ProductBundleComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-bundle\\product-bundle.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/product/product-details/widgets/product-delivery-information/product-delivery-information.component.ts
function ProductDeliveryInformationComponent_div_0_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.product == null ? null : ctx_r0.product.estimated_delivery_text, " ");
  }
}
function ProductDeliveryInformationComponent_div_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.product == null ? null : ctx_r0.product.return_policy_text, " ");
  }
}
function ProductDeliveryInformationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ul");
    \u0275\u0275template(6, ProductDeliveryInformationComponent_div_0_li_6_Template, 3, 1, "li", 3)(7, ProductDeliveryInformationComponent_div_0_li_7_Template, 3, 1, "li", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "delivery_details"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.estimated_delivery_text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.return_policy_text);
  }
}
var _ProductDeliveryInformationComponent = class _ProductDeliveryInformationComponent {
};
_ProductDeliveryInformationComponent.\u0275fac = function ProductDeliveryInformationComponent_Factory(t) {
  return new (t || _ProductDeliveryInformationComponent)();
};
_ProductDeliveryInformationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDeliveryInformationComponent, selectors: [["app-product-delivery-information"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "delivery-info", 4, "ngIf"], [1, "delivery-info"], [1, "product-title"], [4, "ngIf"], [1, "ri-truck-line"], [1, "ri-arrow-left-right-line"]], template: function ProductDeliveryInformationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDeliveryInformationComponent_div_0_Template, 8, 5, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.estimated_delivery_text) || (ctx.product == null ? null : ctx.product.return_policy_text) && (ctx.product == null ? null : ctx.product.is_return));
  }
}, dependencies: [NgIf, TranslatePipe] });
var ProductDeliveryInformationComponent = _ProductDeliveryInformationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDeliveryInformationComponent, { className: "ProductDeliveryInformationComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-delivery-information\\product-delivery-information.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/product/product-details/widgets/product-social-share/product-social-share.component.ts
function ProductSocialShareComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ul", 3)(6, "li")(7, "a", 4);
    \u0275\u0275listener("click", function ProductSocialShareComponent_div_0_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareOnFacebook(ctx_r1.product.slug));
    });
    \u0275\u0275element(8, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 4);
    \u0275\u0275listener("click", function ProductSocialShareComponent_div_0_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareOnTwitter(ctx_r1.product.slug));
    });
    \u0275\u0275element(11, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 4);
    \u0275\u0275listener("click", function ProductSocialShareComponent_div_0_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareOnLinkedIn(ctx_r1.product.slug));
    });
    \u0275\u0275element(14, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 4);
    \u0275\u0275listener("click", function ProductSocialShareComponent_div_0_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareOnWhatsApp(ctx_r1.product.slug));
    });
    \u0275\u0275element(17, "i", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 4);
    \u0275\u0275listener("click", function ProductSocialShareComponent_div_0_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareViaEmail(ctx_r1.product.slug));
    });
    \u0275\u0275element(20, "i", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "share_it"));
  }
}
var _ProductSocialShareComponent = class _ProductSocialShareComponent {
  constructor() {
    this.url = environment.baseURL;
  }
  shareOnFacebook(slug) {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(facebookShareUrl, "_blank");
  }
  shareOnTwitter(slug) {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(twitterShareUrl, "_blank");
  }
  shareOnLinkedIn(slug) {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(linkedInShareUrl, "_blank");
  }
  shareOnWhatsApp(slug) {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(whatsappShareUrl, "_blank");
  }
  shareViaEmail(slug) {
    const subject = "Check out this awesome product!";
    const body = `I thought you might be interested in this product: ${this.url + "/product/" + slug}`;
    const emailShareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailShareUrl;
  }
};
_ProductSocialShareComponent.\u0275fac = function ProductSocialShareComponent_Factory(t) {
  return new (t || _ProductSocialShareComponent)();
};
_ProductSocialShareComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductSocialShareComponent, selectors: [["app-product-social-share"]], inputs: { product: "product", option: "option" }, decls: 1, vars: 1, consts: [["class", "share-option", 4, "ngIf"], [1, "share-option"], [1, "product-title", "mt-0"], [1, "product-social"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-facebook-fill"], [1, "ri-twitter-fill"], [1, "ri-linkedin-fill"], [1, "ri-whatsapp-fill"], [1, "ri-mail-fill"]], template: function ProductSocialShareComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductSocialShareComponent_div_0_Template, 21, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.social_share) && (ctx.option == null ? null : ctx.option.product == null ? null : ctx.option.product.social_share));
  }
}, dependencies: [NgIf, TranslatePipe] });
var ProductSocialShareComponent = _ProductSocialShareComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductSocialShareComponent, { className: "ProductSocialShareComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-social-share\\product-social-share.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/product/product-details/product-thumbnail/product-thumbnail.component.ts
var _c022 = ["videoPlayModal"];
function ProductThumbnailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sale"));
  }
}
function ProductThumbnailComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function ProductThumbnailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductThumbnailComponent_ng_template_11_div_0_Template, 4, 3, "div", 26);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.is_featured);
  }
}
function ProductThumbnailComponent_ng_container_15_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "video", 31);
    \u0275\u0275element(2, "source", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2.mime_type);
  }
}
function ProductThumbnailComponent_ng_container_15_ng_template_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "audio", 34);
    \u0275\u0275element(3, "source", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2.mime_type);
  }
}
function ProductThumbnailComponent_ng_container_15_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductThumbnailComponent_ng_container_15_ng_template_1_ng_template_3_ng_container_0_Template, 4, 2, "ng-container", 30);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r3 = \u0275\u0275reference(6);
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r2.mime_type))("ngIfElse", img_r3);
  }
}
function ProductThumbnailComponent_ng_container_15_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-ngx-image-zoom", 35);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("zoomMode", "click")("thumbImage", image_r2.original_url)("fullImage", image_r2.original_url)("magnification", 3)("enableScrollZoom", true)("enableLens", true)("lensWidth", 350)("lensHeight", 350);
  }
}
function ProductThumbnailComponent_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275template(2, ProductThumbnailComponent_ng_container_15_ng_template_1_ng_container_2_Template, 3, 2, "ng-container", 30)(3, ProductThumbnailComponent_ng_container_15_ng_template_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductThumbnailComponent_ng_container_15_ng_template_1_ng_template_5_Template, 1, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r4 = \u0275\u0275reference(4);
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r2.mime_type))("ngIfElse", audio_r4);
  }
}
function ProductThumbnailComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductThumbnailComponent_ng_container_15_ng_template_1_Template, 7, 2, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", image_r2.id.toString());
  }
}
function ProductThumbnailComponent_ng_container_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275element(2, "img", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductThumbnailComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductThumbnailComponent_ng_container_16_ng_template_1_Template, 3, 2, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("id", "1");
  }
}
function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "video", 39);
    \u0275\u0275listener("click", function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_container_2_Template_video_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const image_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      const owlCar_r7 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r7.to(ctx_r0.activeSlide = image_r6.id.toString()));
    });
    \u0275\u0275element(3, "source", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", image_r6 ? image_r6.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r6.mime_type);
  }
}
function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 40);
    \u0275\u0275listener("click", function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_3_ng_container_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const image_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      const owlCar_r7 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r7.to(ctx_r0.activeSlide = image_r6.id.toString()));
    });
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_3_ng_container_0_Template, 3, 0, "ng-container", 30);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r9 = \u0275\u0275reference(6);
    const image_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r6.mime_type))("ngIfElse", img_r9);
  }
}
function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 42);
    \u0275\u0275listener("click", function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_5_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const image_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      const owlCar_r7 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r7.to(ctx_r0.activeSlide = image_r6.id.toString()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", image_r6 ? image_r6.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275template(2, ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_container_2_Template, 4, 2, "ng-container", 30)(3, ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_ng_template_5_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r11 = \u0275\u0275reference(4);
    const image_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", image_r6.id.toString() == ctx_r0.activeSlide.toString());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r6.mime_type))("ngIfElse", audio_r11);
  }
}
function ProductThumbnailComponent_div_17_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductThumbnailComponent_div_17_ng_container_3_ng_template_1_Template, 7, 4, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", image_r6.id.toString());
  }
}
function ProductThumbnailComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 37)(2, "owl-carousel-o", 15);
    \u0275\u0275template(3, ProductThumbnailComponent_div_17_ng_container_3_Template, 2, 1, "ng-container", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.productThumbSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.product == null ? null : ctx_r0.product.product_galleries);
  }
}
function ProductThumbnailComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "app-product-bundle", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var _ProductThumbnailComponent = class _ProductThumbnailComponent {
  constructor() {
    this.activeSlide = "0";
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
    this.productMainThumbSlider = productMainThumbSlider;
    this.productThumbSlider = productThumbSlider;
  }
};
_ProductThumbnailComponent.\u0275fac = function ProductThumbnailComponent_Factory(t) {
  return new (t || _ProductThumbnailComponent)();
};
_ProductThumbnailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductThumbnailComponent, selectors: [["app-product-thumbnail"]], viewQuery: function ProductThumbnailComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c022, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.VideoPlayModal = _t.first);
  }
}, inputs: { product: "product", option: "option" }, decls: 31, vars: 19, consts: [["featured", ""], ["owlCar", ""], ["audio", ""], ["img", ""], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-9", "col-xl-8", "col-lg-7"], [1, "row", "g-4"], [1, "col-xl-6"], [1, "product-left-box"], [1, "row", "g-2"], [1, "col-12"], [1, "product-main-1", "no-arrow"], [1, "product-label-group"], ["class", "product-label-tag", 4, "ngIf", "ngIfElse"], [3, "options"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "right-box-contain"], [3, "product", "option", "owlCar"], [3, "product"], [3, "product", "option"], ["class", "col-12 related-product-2", 4, "ngIf"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "d-none", "d-lg-block"], [1, "product-label-tag"], ["class", "product-label-tag warning-label-tag", 4, "ngIf"], [1, "product-label-tag", "warning-label-tag"], ["carouselSlide", "", 3, "id"], [1, "slider-image"], [4, "ngIf", "ngIfElse"], ["controls", "", 1, "w-100"], [3, "src", "type"], [1, "slider-main-img"], ["controls", ""], [3, "zoomMode", "thumbImage", "fullImage", "magnification", "enableScrollZoom", "enableLens", "lensWidth", "lensHeight"], [1, "img-fluid", 3, "src", "alt"], [1, "bottom-slider-image", "left-slider", "no-arrow", "slick-top"], [1, "ri-video-line"], ["width", "130", "height", "130", 3, "click"], [3, "click"], [1, "ri-music-2-line"], [1, "img-fluid", 3, "click", "src", "alt"], [1, "col-12", "related-product-2"]], template: function ProductThumbnailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "div", 13);
    \u0275\u0275template(10, ProductThumbnailComponent_div_10_Template, 4, 3, "div", 14)(11, ProductThumbnailComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "owl-carousel-o", 15, 1);
    \u0275\u0275template(15, ProductThumbnailComponent_ng_container_15_Template, 2, 1, "ng-container", 16)(16, ProductThumbnailComponent_ng_container_16_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, ProductThumbnailComponent_div_17_Template, 4, 2, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 19);
    \u0275\u0275element(20, "app-product-contain", 20)(21, "app-product-action", 21)(22, "app-product-information", 21)(23, "app-product-delivery-information", 21)(24, "app-payment-option", 22)(25, "app-product-social-share", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ProductThumbnailComponent_div_26_Template, 2, 1, "div", 23);
    \u0275\u0275elementStart(27, "div", 11);
    \u0275\u0275element(28, "app-product-details-tabs", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275element(30, "app-product-details-sidebar", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const featured_r12 = \u0275\u0275reference(12);
    const owlCar_r7 = \u0275\u0275reference(14);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.is_sale_enable)("ngIfElse", featured_r12);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx.productMainThumbSlider);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.product == null ? null : ctx.product.product_galleries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("product", ctx.product)("option", ctx.option)("owlCar", owlCar_r7);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.cross_sell_products) && (ctx.product == null ? null : ctx.product.cross_sell_products == null ? null : ctx.product.cross_sell_products.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
  }
}, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, NgxImageZoomComponent, ProductSidebarComponent, PaymentOptionComponent, ProductInformationComponent, ProductDetailsTabsComponent, ProductActionComponent, ProductContainComponent, ProductBundleComponent, ProductDeliveryInformationComponent, ProductSocialShareComponent, TranslatePipe] });
var ProductThumbnailComponent = _ProductThumbnailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductThumbnailComponent, { className: "ProductThumbnailComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\product-thumbnail\\product-thumbnail.component.ts", lineNumber: 12 });
})();

// src/app/components/shop/product/product-details/product-images/product-images.component.ts
function ProductImagesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sale"));
  }
}
function ProductImagesComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function ProductImagesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductImagesComponent_ng_template_8_div_0_Template, 4, 3, "div", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.is_featured);
  }
}
function ProductImagesComponent_div_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "video", 25);
    \u0275\u0275element(3, "source", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2 == null ? null : image_r2.mime_type);
  }
}
function ProductImagesComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductImagesComponent_div_11_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "audio", 28);
    \u0275\u0275element(2, "source", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2 == null ? null : image_r2.mime_type);
  }
}
function ProductImagesComponent_div_11_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductImagesComponent_div_11_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 23);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const img_r3 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r2 == null ? null : image_r2.mime_type))("ngIfElse", img_r3);
  }
}
function ProductImagesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275template(2, ProductImagesComponent_div_11_ng_container_2_Template, 4, 2, "ng-container", 23)(3, ProductImagesComponent_div_11_ng_template_3_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, ProductImagesComponent_div_11_ng_template_5_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const audio_r4 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r2 == null ? null : image_r2.mime_type))("ngIfElse", audio_r4);
  }
}
function ProductImagesComponent_ng_container_12_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "audio", 28);
    \u0275\u0275element(2, "source", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "", \u0275\u0275sanitizeUrl)("type", ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type);
  }
}
function ProductImagesComponent_ng_container_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductImagesComponent_ng_container_12_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 23);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(ctx_r0.product == null ? null : ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type))("ngIfElse", img_r5);
  }
}
function ProductImagesComponent_ng_container_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductImagesComponent_ng_container_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "video", 30);
    \u0275\u0275element(3, "source", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "", \u0275\u0275sanitizeUrl)("type", ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type);
  }
}
function ProductImagesComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 29);
    \u0275\u0275template(3, ProductImagesComponent_ng_container_12_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductImagesComponent_ng_container_12_ng_template_5_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, ProductImagesComponent_ng_container_12_ng_container_7_Template, 4, 2, "ng-container", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const audio_r6 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(ctx_r0.product == null ? null : ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type))("ngIfElse", audio_r6);
  }
}
function ProductImagesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-product-bundle", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var _ProductImagesComponent = class _ProductImagesComponent {
  constructor() {
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
  }
};
_ProductImagesComponent.\u0275fac = function ProductImagesComponent_Factory(t) {
  return new (t || _ProductImagesComponent)();
};
_ProductImagesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductImagesComponent, selectors: [["app-product-images"]], inputs: { product: "product", option: "option" }, decls: 24, vars: 15, consts: [["featured", ""], ["img", ""], ["audio", ""], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "row", "g-4"], [1, "col-xl-6"], [1, "product-left-box"], [1, "product-label-group"], ["class", "product-label-tag", 4, "ngIf", "ngIfElse"], [1, "row", "g-sm-4", "g-2"], ["class", "col-6 col-grid-box", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "right-box-contain"], [3, "product", "option"], [3, "product"], ["class", "col-12 related-product-2", 4, "ngIf"], [1, "product-label-tag"], ["class", "product-label-tag warning-label-tag", 4, "ngIf"], [1, "product-label-tag", "warning-label-tag"], [1, "col-6", "col-grid-box"], [1, "slider-image", "w-100", "h-100", "d-flex", "align-items-center", "justify-content-center"], [4, "ngIf", "ngIfElse"], [1, "ri-video-line"], ["controls", "", 1, "w-100", "h-100"], [3, "src", "type"], [1, "img-fluid", 3, "src", "alt"], ["controls", ""], [1, "slider-image"], ["controls", "", 1, "w-100"], [1, "col-12", "related-product-2"]], template: function ProductImagesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    \u0275\u0275template(7, ProductImagesComponent_div_7_Template, 4, 3, "div", 10)(8, ProductImagesComponent_ng_template_8_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11);
    \u0275\u0275template(11, ProductImagesComponent_div_11_Template, 7, 2, "div", 12)(12, ProductImagesComponent_ng_container_12_Template, 8, 2, "ng-container", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 7)(14, "div", 14);
    \u0275\u0275element(15, "app-product-contain", 15)(16, "app-product-action", 16)(17, "app-product-information", 16)(18, "app-product-delivery-information", 16)(19, "app-payment-option", 15)(20, "app-product-social-share", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ProductImagesComponent_div_21_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(22, "div", 5);
    \u0275\u0275element(23, "app-product-details-tabs", 16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const featured_r7 = \u0275\u0275reference(9);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.is_sale_enable)("ngIfElse", featured_r7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.product == null ? null : ctx.product.product_galleries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length));
    \u0275\u0275advance(3);
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.cross_sell_products) && (ctx.product == null ? null : ctx.product.cross_sell_products == null ? null : ctx.product.cross_sell_products.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
  }
}, dependencies: [NgForOf, NgIf, PaymentOptionComponent, ProductInformationComponent, ProductDetailsTabsComponent, ProductActionComponent, ProductContainComponent, ProductBundleComponent, ProductDeliveryInformationComponent, ProductSocialShareComponent, TranslatePipe] });
var ProductImagesComponent = _ProductImagesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductImagesComponent, { className: "ProductImagesComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\product-images\\product-images.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/product/product-details/product-slider/product-slider.component.ts
function ProductSliderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sale"));
  }
}
function ProductSliderComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function ProductSliderComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductSliderComponent_ng_template_7_div_0_Template, 4, 3, "div", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.is_featured);
  }
}
function ProductSliderComponent_ng_container_11_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "video", 27);
    \u0275\u0275element(2, "source", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2 == null ? null : image_r2.mime_type);
  }
}
function ProductSliderComponent_ng_container_11_ng_template_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "audio", 29);
    \u0275\u0275element(2, "source", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2 == null ? null : image_r2.mime_type);
  }
}
function ProductSliderComponent_ng_container_11_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductSliderComponent_ng_container_11_ng_template_1_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 26);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r3 = \u0275\u0275reference(6);
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r2 == null ? null : image_r2.mime_type))("ngIfElse", img_r3);
  }
}
function ProductSliderComponent_ng_container_11_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductSliderComponent_ng_container_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275template(2, ProductSliderComponent_ng_container_11_ng_template_1_ng_container_2_Template, 3, 2, "ng-container", 26)(3, ProductSliderComponent_ng_container_11_ng_template_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductSliderComponent_ng_container_11_ng_template_1_ng_template_5_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r4 = \u0275\u0275reference(4);
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("product-slider-image ", image_r2.id, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r2 == null ? null : image_r2.mime_type))("ngIfElse", audio_r4);
  }
}
function ProductSliderComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductSliderComponent_ng_container_11_ng_template_1_Template, 7, 5, "ng-template", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", image_r2.id.toString());
  }
}
function ProductSliderComponent_ng_container_12_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "video", 27);
    \u0275\u0275element(3, "source", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "", \u0275\u0275sanitizeUrl)("type", ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type);
  }
}
function ProductSliderComponent_ng_container_12_ng_template_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "audio", 29);
    \u0275\u0275element(2, "source", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "", \u0275\u0275sanitizeUrl)("type", ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type);
  }
}
function ProductSliderComponent_ng_container_12_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductSliderComponent_ng_container_12_ng_template_1_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 26);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(ctx_r0.product == null ? null : ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type))("ngIfElse", img_r5);
  }
}
function ProductSliderComponent_ng_container_12_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductSliderComponent_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 31);
    \u0275\u0275template(2, ProductSliderComponent_ng_container_12_ng_template_1_ng_container_2_Template, 4, 2, "ng-container", 26)(3, ProductSliderComponent_ng_container_12_ng_template_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductSliderComponent_ng_container_12_ng_template_1_ng_template_5_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r6 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(ctx_r0.product == null ? null : ctx_r0.product.product_thumbnail == null ? null : ctx_r0.product.product_thumbnail.mime_type))("ngIfElse", audio_r6);
  }
}
function ProductSliderComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductSliderComponent_ng_container_12_ng_template_1_Template, 7, 2, "ng-template", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("id", "1");
  }
}
function ProductSliderComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "app-product-bundle", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var _ProductSliderComponent = class _ProductSliderComponent {
  constructor() {
    this.productSliderLayout = productSliderLayout;
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
  }
};
_ProductSliderComponent.\u0275fac = function ProductSliderComponent_Factory(t) {
  return new (t || _ProductSliderComponent)();
};
_ProductSliderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductSliderComponent, selectors: [["app-product-slider"]], inputs: { product: "product", option: "option" }, decls: 31, vars: 17, consts: [["featured", ""], ["owlCar", ""], ["audio", ""], ["img", ""], [1, "pt-0"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "slider-3-product", "product-wrapper", "position-relative"], [1, "product-label-group"], ["class", "product-label-tag", 4, "ngIf", "ngIfElse"], [3, "options"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "product-section"], [1, "col-xxl-9", "col-xl-8", "col-lg-7"], [1, "row", "g-4"], [1, "right-box-contain", "full-width-right-box"], [3, "product", "option"], [3, "product"], ["class", "col-12 related-product-2", 4, "ngIf"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "d-none", "d-lg-block"], [1, "product-label-tag"], ["class", "product-label-tag warning-label-tag", 4, "ngIf"], [1, "product-label-tag", "warning-label-tag"], ["carouselSlide", "", 3, "id"], [4, "ngIf", "ngIfElse"], ["controls", "", 1, "w-100"], [3, "src", "type"], ["controls", ""], [1, "img-fluid", 3, "src", "alt"], [1, "product-slider-image"], [1, "ri-video-line"], [1, "col-12", "related-product-2"]], template: function ProductSliderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9);
    \u0275\u0275template(6, ProductSliderComponent_div_6_Template, 4, 3, "div", 10)(7, ProductSliderComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "owl-carousel-o", 11, 1);
    \u0275\u0275template(11, ProductSliderComponent_ng_container_11_Template, 2, 1, "ng-container", 12)(12, ProductSliderComponent_ng_container_12_Template, 2, 1, "ng-container", 13);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "section", 14)(14, "div", 5)(15, "div", 6)(16, "div", 15)(17, "div", 16)(18, "div", 7)(19, "div", 17);
    \u0275\u0275element(20, "app-product-contain", 18)(21, "app-product-action", 19)(22, "app-product-information", 19)(23, "app-product-delivery-information", 19)(24, "app-payment-option", 18)(25, "app-product-social-share", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ProductSliderComponent_div_26_Template, 2, 1, "div", 20);
    \u0275\u0275elementStart(27, "div", 7);
    \u0275\u0275element(28, "app-product-details-tabs", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 21);
    \u0275\u0275element(30, "app-product-details-sidebar", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const featured_r7 = \u0275\u0275reference(8);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.is_sale_enable)("ngIfElse", featured_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx.productSliderLayout);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.product == null ? null : ctx.product.product_galleries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length));
    \u0275\u0275advance(8);
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.cross_sell_products) && (ctx.product == null ? null : ctx.product.cross_sell_products == null ? null : ctx.product.cross_sell_products.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
  }
}, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, ProductSidebarComponent, PaymentOptionComponent, ProductInformationComponent, ProductDetailsTabsComponent, ProductActionComponent, ProductContainComponent, ProductBundleComponent, ProductDeliveryInformationComponent, ProductSocialShareComponent, TranslatePipe] });
var ProductSliderComponent = _ProductSliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductSliderComponent, { className: "ProductSliderComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\product-slider\\product-slider.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/product/product-details/product-sticky/product-sticky.component.ts
function ProductStickyComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sale"));
  }
}
function ProductStickyComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function ProductStickyComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductStickyComponent_ng_template_8_div_0_Template, 4, 3, "div", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.is_featured);
  }
}
function ProductStickyComponent_div_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "video", 25);
    \u0275\u0275element(2, "source", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2 == null ? null : image_r2.mime_type);
  }
}
function ProductStickyComponent_div_11_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "audio", 27);
    \u0275\u0275element(2, "source", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2 == null ? null : image_r2.mime_type);
  }
}
function ProductStickyComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductStickyComponent_div_11_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 24);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const img_r3 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r2 == null ? null : image_r2.mime_type))("ngIfElse", img_r3);
  }
}
function ProductStickyComponent_div_11_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductStickyComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 23);
    \u0275\u0275template(2, ProductStickyComponent_div_11_ng_container_2_Template, 3, 2, "ng-container", 24)(3, ProductStickyComponent_div_11_ng_template_3_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, ProductStickyComponent_div_11_ng_template_5_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const audio_r4 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r2 == null ? null : image_r2.mime_type))("ngIfElse", audio_r4);
  }
}
function ProductStickyComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 23);
    \u0275\u0275element(3, "img", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductStickyComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "app-product-bundle", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var _ProductStickyComponent = class _ProductStickyComponent {
  constructor() {
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
  }
};
_ProductStickyComponent.\u0275fac = function ProductStickyComponent_Factory(t) {
  return new (t || _ProductStickyComponent)();
};
_ProductStickyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductStickyComponent, selectors: [["app-product-sticky"]], inputs: { product: "product", option: "option" }, decls: 26, vars: 16, consts: [["featured", ""], ["audio", ""], ["img", ""], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-9", "col-xl-8", "col-lg-7"], [1, "row", "g-4"], [1, "col-xl-6"], [1, "product-left-box"], [1, "product-label-group"], ["class", "product-label-tag", 4, "ngIf", "ngIfElse"], [1, "row", "g-sm-4", "g-2"], ["class", "col-12", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "right-box-contain"], [3, "product", "option"], [3, "product"], ["class", "col-12 related-product-2", 4, "ngIf"], [1, "col-12"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "d-none", "d-lg-block"], [1, "product-label-tag"], ["class", "product-label-tag warning-label-tag", 4, "ngIf"], [1, "product-label-tag", "warning-label-tag"], [1, "slider-image"], [4, "ngIf", "ngIfElse"], ["controls", "", 1, "w-100"], [3, "src", "type"], ["controls", ""], [1, "img-fluid", 3, "src", "alt"], [1, "col-12", "related-product-2"]], template: function ProductStickyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    \u0275\u0275template(7, ProductStickyComponent_div_7_Template, 4, 3, "div", 10)(8, ProductStickyComponent_ng_template_8_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11);
    \u0275\u0275template(11, ProductStickyComponent_div_11_Template, 7, 2, "div", 12)(12, ProductStickyComponent_ng_container_12_Template, 4, 2, "ng-container", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 7)(14, "div", 14);
    \u0275\u0275element(15, "app-product-contain", 15)(16, "app-product-action", 16)(17, "app-product-information", 16)(18, "app-product-delivery-information", 16)(19, "app-payment-option", 15)(20, "app-product-social-share", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ProductStickyComponent_div_21_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275element(23, "app-product-details-tabs", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 19);
    \u0275\u0275element(25, "app-product-details-sidebar", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const featured_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.is_sale_enable)("ngIfElse", featured_r5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.product == null ? null : ctx.product.product_galleries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length));
    \u0275\u0275advance(3);
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.cross_sell_products) && (ctx.product == null ? null : ctx.product.cross_sell_products == null ? null : ctx.product.cross_sell_products.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
  }
}, dependencies: [NgForOf, NgIf, ProductSidebarComponent, PaymentOptionComponent, ProductInformationComponent, ProductDetailsTabsComponent, ProductActionComponent, ProductContainComponent, ProductBundleComponent, ProductDeliveryInformationComponent, ProductSocialShareComponent, TranslatePipe] });
var ProductStickyComponent = _ProductStickyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductStickyComponent, { className: "ProductStickyComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\product-sticky\\product-sticky.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/product/product-details/widgets/related-products/related-products.component.ts
var _c023 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
function RelatedProductsComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-product-box", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap("product-box-3");
    \u0275\u0275property("product", product_r1);
  }
}
function RelatedProductsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-title", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275template(8, RelatedProductsComponent_div_0_div_8_Template, 2, 5, "div", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", "You May Also Like");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(11, _c023, (tmp_2_0 = \u0275\u0275pipeBind1(3, 3, ctx_r1.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.full_border, (tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx_r1.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.image_bg, (tmp_2_0 = \u0275\u0275pipeBind1(5, 7, ctx_r1.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.product_box_bg, (tmp_2_0 = \u0275\u0275pipeBind1(6, 9, ctx_r1.themeOption$)) == null ? null : tmp_2_0.product == null ? null : tmp_2_0.product.product_box_border));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.relatedProducts);
  }
}
var _RelatedProductsComponent = class _RelatedProductsComponent {
  constructor() {
    this.relatedProducts = [];
  }
  ngOnChanges() {
    if (this.product?.related_products && Array.isArray(this.product?.related_products)) {
      this.relatedProduct$.subscribe((products) => {
        this.relatedProducts = products.filter((product) => this.product?.related_products?.includes(product?.id));
      });
    }
  }
};
_RelatedProductsComponent.\u0275fac = function RelatedProductsComponent_Factory(t) {
  return new (t || _RelatedProductsComponent)();
};
_RelatedProductsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RelatedProductsComponent, selectors: [["app-related-products"]], inputs: { product: "product" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "container-fluid-lg", 4, "ngIf"], [1, "container-fluid-lg"], [3, "title"], [3, "ngClass"], [1, "row", "g-sm-3", "g-2"], ["class", "col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-lg-3", "col-md-4", "col-6", "product-box-contain"], [3, "product"]], template: function RelatedProductsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RelatedProductsComponent_div_0_Template, 9, 16, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.relatedProducts == null ? null : ctx.relatedProducts.length);
  }
}, dependencies: [NgClass, NgForOf, NgIf, TitleComponent, ProductBoxComponent, AsyncPipe] });
var RelatedProductsComponent = _RelatedProductsComponent;
__decorate([
  Select(ProductState.relatedProducts)
], RelatedProductsComponent.prototype, "relatedProduct$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], RelatedProductsComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RelatedProductsComponent, { className: "RelatedProductsComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\related-products\\related-products.component.ts", lineNumber: 14 });
})();

// src/app/components/shop/product/product-details/widgets/sticky-checkout/sticky-checkout.component.ts
var _c024 = () => [];
function StickyCheckoutComponent_del_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.selectedVariation ? ctx_r1.selectedVariation.price : ctx_r1.product.price), " ");
  }
}
function StickyCheckoutComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedVariation ? ctx_r1.selectedVariation.discount : ctx_r1.product.discount, "% ", \u0275\u0275pipeBind1(2, 2, "off"), " ");
  }
}
function StickyCheckoutComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "app-button", 21);
    \u0275\u0275listener("click", function StickyCheckoutComponent_div_18_Template_app_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateQuantity(-1));
    });
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 23);
    \u0275\u0275elementStart(5, "app-button", 21);
    \u0275\u0275listener("click", function StickyCheckoutComponent_div_18_Template_app_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateQuantity(1));
    });
    \u0275\u0275element(6, "i", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "add-to-cart" + ctx_r1.product.id)("spinner", false);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx_r1.productQty);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn qty-left-minus");
    \u0275\u0275property("id", "qty-left-minus" + ctx_r1.product.id)("spinner", false);
  }
}
function StickyCheckoutComponent_ng_container_20_app_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 26);
    \u0275\u0275listener("click", function StickyCheckoutComponent_ng_container_20_app_button_1_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product));
    });
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn theme-bg-color text-white");
    \u0275\u0275property("id", "addcartbtnVariationsticky" + ctx_r1.product.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "add_to_cart"), " ");
  }
}
function StickyCheckoutComponent_ng_container_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn theme-bg-color text-white");
    \u0275\u0275property("id", "soldoutbtncheckout")("spinner", false)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity < ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity < ctx_r1.productQty ? "out_of_stock" : "add_to_cart"), " ");
  }
}
function StickyCheckoutComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StickyCheckoutComponent_ng_container_20_app_button_1_Template, 4, 6, "app-button", 25)(2, StickyCheckoutComponent_ng_container_20_ng_template_2_Template, 3, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const outStock_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty)("ngIfElse", outStock_r5);
  }
}
function StickyCheckoutComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 26);
    \u0275\u0275listener("click", function StickyCheckoutComponent_ng_template_21_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.externalProductLink(ctx_r1.product.external_url));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("btn theme-bg-color text-white");
    \u0275\u0275property("id", "externalBtn" + ctx_r1.product.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.product.external_button_text ? ctx_r1.product.external_button_text : "buy_now"), " ");
  }
}
var _StickyCheckoutComponent = class _StickyCheckoutComponent {
  constructor(store) {
    this.store = store;
    this.productQty = 1;
  }
  ngOnChanges(changes) {
    if (changes["product"] && changes["product"].currentValue) {
      this.product = changes["product"]?.currentValue;
    }
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product.id);
    });
  }
  selectVariation(variation) {
    this.selectedVariation = variation;
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
  }
  addToCart(product) {
    if (product) {
      const params = {
        id: this.cartItem && (this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id) ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCart(params));
    }
  }
  externalProductLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
};
_StickyCheckoutComponent.\u0275fac = function StickyCheckoutComponent_Factory(t) {
  return new (t || _StickyCheckoutComponent)(\u0275\u0275directiveInject(Store));
};
_StickyCheckoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StickyCheckoutComponent, selectors: [["app-sticky-checkout"]], inputs: { product: "product" }, features: [\u0275\u0275NgOnChangesFeature], decls: 23, vars: 14, consts: [["isExternalProduct", ""], ["outStock", ""], [1, "sticky-bottom-cart"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "cart-content"], [1, "product-image"], ["alt", "product", 1, "img-fluid", 3, "src"], [1, "content"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], [1, "selection-section"], [1, "form-group", "mb-0"], [3, "selectVariation", "product", "attributes", "isAllVariantStyleDropdown"], ["class", "cart_qty qty-box product-qty m-0", 4, "ngIf"], [1, "add-btn"], [4, "ngIf", "ngIfElse"], [1, "text-danger"], [1, "cart_qty", "qty-box", "product-qty", "m-0"], [1, "input-group", "h-100"], [3, "click", "id", "spinner"], [1, "ri-subtract-fill"], ["type", "text", "name", "quantity", "readonly", "", 1, "form-control", "input-number", "qty-input", 3, "value"], [1, "ri-add-line"], [3, "id", "class", "click", 4, "ngIf", "ngIfElse"], [3, "click", "id"], [1, "ri-shopping-cart-line", "me-1"], [3, "id", "spinner", "disabled"]], template: function StickyCheckoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275element(6, "img", 8);
    \u0275\u0275elementStart(7, "div", 9)(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h6");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currencySymbol");
    \u0275\u0275template(13, StickyCheckoutComponent_del_13_Template, 3, 3, "del", 10)(14, StickyCheckoutComponent_span_14_Template, 3, 4, "span", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "app-variant-attributes", 14);
    \u0275\u0275listener("selectVariation", function StickyCheckoutComponent_Template_app_variant_attributes_selectVariation_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectVariation($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, StickyCheckoutComponent_div_18_Template, 7, 9, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275template(20, StickyCheckoutComponent_ng_container_20_Template, 4, 2, "ng-container", 17)(21, StickyCheckoutComponent_ng_template_21_Template, 3, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const isExternalProduct_r7 = \u0275\u0275reference(22);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image.original_url : ctx.product.product_thumbnail ? ctx.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 11, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount);
    \u0275\u0275advance(3);
    \u0275\u0275property("product", ctx.product)("attributes", ctx.product.attributes || \u0275\u0275pureFunction0(13, _c024))("isAllVariantStyleDropdown", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.is_external));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.is_external))("ngIfElse", isExternalProduct_r7);
  }
}, dependencies: [NgIf, ButtonComponent, VariantAttributesComponent, CurrencySymbolPipe, TranslatePipe] });
var StickyCheckoutComponent = _StickyCheckoutComponent;
__decorate([
  Select(CartState.cartItems)
], StickyCheckoutComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StickyCheckoutComponent, { className: "StickyCheckoutComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\sticky-checkout\\sticky-checkout.component.ts", lineNumber: 14 });
})();

// src/app/components/shop/product/product-details/widgets/product-details-accordion/product-details-accordion.component.ts
function ProductDetailsAccordionComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.product == null ? null : ctx_r0.product.description, \u0275\u0275sanitizeHtml);
  }
}
function ProductDetailsAccordionComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-review", 9);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product)("reviews", (tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r0.review$)) == null ? null : tmp_2_0.data);
  }
}
function ProductDetailsAccordionComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-questions-answers", 10);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product)("questionAnswers", (tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r0.question$)) == null ? null : tmp_2_0.data);
  }
}
var _ProductDetailsAccordionComponent = class _ProductDetailsAccordionComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnChanges(changes) {
    let product = changes["product"]?.currentValue;
    this.store.dispatch(new GetQuestionAnswers({ product_id: product.id }));
    this.store.dispatch(new GetReview({ product_id: product.id }));
  }
};
_ProductDetailsAccordionComponent.\u0275fac = function ProductDetailsAccordionComponent_Factory(t) {
  return new (t || _ProductDetailsAccordionComponent)(\u0275\u0275directiveInject(Store));
};
_ProductDetailsAccordionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsAccordionComponent, selectors: [["app-product-details-accordion"]], inputs: { product: "product" }, features: [\u0275\u0275NgOnChangesFeature], decls: 28, vars: 11, consts: [["ngbAccordion", "", 1, "accordion-box", "product-section-box", "mt-0", 3, "closeOthers"], ["ngbAccordionItem", "", 3, "collapsed"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", ""], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["ngbAccordionItem", ""], [1, "product-description"], [1, "nav-desh", "ckeditor-content", 3, "innerHTML"], [3, "product", "reviews"], [3, "product", "questionAnswers"]], template: function ProductDetailsAccordionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "button", 3)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
    \u0275\u0275template(9, ProductDetailsAccordionComponent_ng_template_9_Template, 2, 1, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 6)(11, "h2", 2)(12, "button", 3)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "div", 5);
    \u0275\u0275template(18, ProductDetailsAccordionComponent_ng_template_18_Template, 2, 4, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 6)(20, "h2", 2)(21, "button", 3)(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 4)(26, "div", 5);
    \u0275\u0275template(27, ProductDetailsAccordionComponent_ng_template_27_Template, 2, 4, "ng-template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("closeOthers", true);
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "description"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 7, "review"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 9, "q_a"));
  }
}, dependencies: [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, ProductReviewComponent, QuestionsAnswersComponent, AsyncPipe, TranslatePipe] });
var ProductDetailsAccordionComponent = _ProductDetailsAccordionComponent;
__decorate([
  Select(QuestionAnswersState.questionsAnswers)
], ProductDetailsAccordionComponent.prototype, "question$", void 0);
__decorate([
  Select(ReviewState.review)
], ProductDetailsAccordionComponent.prototype, "review$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsAccordionComponent, { className: "ProductDetailsAccordionComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\product-details-accordion\\product-details-accordion.component.ts", lineNumber: 17 });
})();

// src/app/components/shop/product/product-details/product-accordion/product-accordion.component.ts
function ProductAccordionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sale"));
  }
}
function ProductAccordionComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function ProductAccordionComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductAccordionComponent_ng_template_11_div_0_Template, 4, 3, "div", 26);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.product == null ? null : ctx_r0.product.is_featured);
  }
}
function ProductAccordionComponent_ng_container_15_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "video", 31);
    \u0275\u0275element(2, "source", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2.mime_type);
  }
}
function ProductAccordionComponent_ng_container_15_ng_template_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "audio", 33);
    \u0275\u0275element(2, "source", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r2 ? image_r2.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r2.mime_type);
  }
}
function ProductAccordionComponent_ng_container_15_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductAccordionComponent_ng_container_15_ng_template_1_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 30);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r3 = \u0275\u0275reference(6);
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r2.mime_type))("ngIfElse", img_r3);
  }
}
function ProductAccordionComponent_ng_container_15_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lib-ngx-image-zoom", 34);
  }
  if (rf & 2) {
    const image_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("zoomMode", "click")("thumbImage", image_r2.original_url)("fullImage", image_r2.original_url)("magnification", 3)("enableScrollZoom", true)("enableLens", true)("lensWidth", 350)("lensHeight", 350);
  }
}
function ProductAccordionComponent_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275template(2, ProductAccordionComponent_ng_container_15_ng_template_1_ng_container_2_Template, 3, 2, "ng-container", 30)(3, ProductAccordionComponent_ng_container_15_ng_template_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductAccordionComponent_ng_container_15_ng_template_1_ng_template_5_Template, 1, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r4 = \u0275\u0275reference(4);
    const image_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r2.mime_type))("ngIfElse", audio_r4);
  }
}
function ProductAccordionComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductAccordionComponent_ng_container_15_ng_template_1_Template, 7, 2, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", image_r2.id.toString());
  }
}
function ProductAccordionComponent_ng_container_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275element(2, "img", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.product.product_thumbnail ? ctx_r0.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductAccordionComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductAccordionComponent_ng_container_16_ng_template_1_Template, 3, 2, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("id", "1");
  }
}
function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "video", 38);
    \u0275\u0275listener("click", function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_container_2_Template_video_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const image_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      const owlCar_r7 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r7.to(ctx_r0.activeSlide = image_r6.id.toString()));
    });
    \u0275\u0275element(3, "source", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", image_r6 ? image_r6.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r6.mime_type);
  }
}
function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_3_ng_container_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const image_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      const owlCar_r7 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r7.to(ctx_r0.activeSlide = image_r6.id.toString()));
    });
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_3_ng_container_0_Template, 3, 0, "ng-container", 30);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r9 = \u0275\u0275reference(6);
    const image_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.audioType.includes(image_r6.mime_type))("ngIfElse", img_r9);
  }
}
function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 41);
    \u0275\u0275listener("click", function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_5_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const image_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      const owlCar_r7 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r7.to(ctx_r0.activeSlide = image_r6.id.toString()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", image_r6 ? image_r6.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductAccordionComponent_div_17_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275template(2, ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_container_2_Template, 4, 2, "ng-container", 30)(3, ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ProductAccordionComponent_div_17_ng_container_3_ng_template_1_ng_template_5_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r11 = \u0275\u0275reference(4);
    const image_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", image_r6.id.toString() == ctx_r0.activeSlide.toString());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.videType.includes(image_r6.mime_type))("ngIfElse", audio_r11);
  }
}
function ProductAccordionComponent_div_17_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductAccordionComponent_div_17_ng_container_3_ng_template_1_Template, 7, 4, "ng-template", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", image_r6.id.toString());
  }
}
function ProductAccordionComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 36)(2, "owl-carousel-o", 15);
    \u0275\u0275template(3, ProductAccordionComponent_div_17_ng_container_3_Template, 2, 1, "ng-container", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.productThumbSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.product == null ? null : ctx_r0.product.product_galleries);
  }
}
function ProductAccordionComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "app-product-bundle", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var _ProductAccordionComponent = class _ProductAccordionComponent {
  constructor() {
    this.activeSlide = "0";
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
    this.productMainThumbSlider = productMainThumbSlider;
    this.productThumbSlider = productThumbSlider;
  }
};
_ProductAccordionComponent.\u0275fac = function ProductAccordionComponent_Factory(t) {
  return new (t || _ProductAccordionComponent)();
};
_ProductAccordionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductAccordionComponent, selectors: [["app-product-accordion"]], inputs: { product: "product", option: "option" }, decls: 31, vars: 19, consts: [["featured", ""], ["owlCar", ""], ["audio", ""], ["img", ""], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-9", "col-xl-8", "col-lg-7"], [1, "row", "g-4"], [1, "col-xl-6"], [1, "product-left-box"], [1, "row", "g-2"], [1, "col-12"], [1, "product-main-1", "no-arrow"], [1, "product-label-group"], ["class", "product-label-tag", 4, "ngIf", "ngIfElse"], [3, "options"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "right-box-contain"], [3, "product", "option", "owlCar"], [3, "product"], [3, "product", "option"], ["class", "col-12 related-product-2", 4, "ngIf"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "d-none", "d-lg-block"], [1, "product-label-tag"], ["class", "product-label-tag warning-label-tag", 4, "ngIf"], [1, "product-label-tag", "warning-label-tag"], ["carouselSlide", "", 3, "id"], [1, "slider-image"], [4, "ngIf", "ngIfElse"], ["controls", "", 1, "w-100"], [3, "src", "type"], ["controls", ""], [3, "zoomMode", "thumbImage", "fullImage", "magnification", "enableScrollZoom", "enableLens", "lensWidth", "lensHeight"], [1, "img-fluid", 3, "src", "alt"], [1, "bottom-slider-image", "left-slider", "no-arrow", "slick-top"], [1, "ri-video-line"], ["width", "130", "height", "130", 3, "click"], [3, "click"], [1, "ri-music-2-line"], [1, "img-fluid", 3, "click", "src", "alt"], [1, "col-12", "related-product-2"]], template: function ProductAccordionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "div", 13);
    \u0275\u0275template(10, ProductAccordionComponent_div_10_Template, 4, 3, "div", 14)(11, ProductAccordionComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "owl-carousel-o", 15, 1);
    \u0275\u0275template(15, ProductAccordionComponent_ng_container_15_Template, 2, 1, "ng-container", 16)(16, ProductAccordionComponent_ng_container_16_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, ProductAccordionComponent_div_17_Template, 4, 2, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 19);
    \u0275\u0275element(20, "app-product-contain", 20)(21, "app-product-action", 21)(22, "app-product-information", 21)(23, "app-product-delivery-information", 21)(24, "app-payment-option", 22)(25, "app-product-social-share", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ProductAccordionComponent_div_26_Template, 2, 1, "div", 23);
    \u0275\u0275elementStart(27, "div", 11);
    \u0275\u0275element(28, "app-product-details-accordion", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275element(30, "app-product-details-sidebar", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const featured_r12 = \u0275\u0275reference(12);
    const owlCar_r7 = \u0275\u0275reference(14);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.is_sale_enable)("ngIfElse", featured_r12);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx.productMainThumbSlider);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.product == null ? null : ctx.product.product_galleries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("product", ctx.product)("option", ctx.option)("owlCar", owlCar_r7);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.product == null ? null : ctx.product.cross_sell_products) && (ctx.product == null ? null : ctx.product.cross_sell_products == null ? null : ctx.product.cross_sell_products.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
  }
}, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective, NgxImageZoomComponent, ProductSidebarComponent, PaymentOptionComponent, ProductInformationComponent, ProductActionComponent, ProductContainComponent, ProductBundleComponent, ProductDeliveryInformationComponent, ProductSocialShareComponent, ProductDetailsAccordionComponent, TranslatePipe] });
var ProductAccordionComponent = _ProductAccordionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductAccordionComponent, { className: "ProductAccordionComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\product-accordion\\product-accordion.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/product/product-details/widgets/vendor-contain/vendor-contain.component.ts
var _c025 = (a0) => ["/seller/store/", a0];
function VendorContainComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.store.store_logo.original_url, \u0275\u0275sanitizeUrl)("alt", ctx_r0.store.store_name);
  }
}
function VendorContainComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.store.store_name.charAt(0).toString().toUpperCase());
  }
}
var _VendorContainComponent = class _VendorContainComponent {
};
_VendorContainComponent.\u0275fac = function VendorContainComponent_Factory(t) {
  return new (t || _VendorContainComponent)();
};
_VendorContainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorContainComponent, selectors: [["app-vendor-contain"]], inputs: { store: "store" }, decls: 15, vars: 13, consts: [["storeTextLogo", ""], [1, "vendor-contain"], ["class", "vendor-image", 4, "ngIf", "ngIfElse"], [1, "vendor-name"], ["href", "javascript:void(o)", 3, "routerLink"], [1, "fw-500"], [1, "ri-star-fill"], [1, "store-btn", 3, "routerLink"], [1, "ri-arrow-right-line"], [1, "vendor-image"], [3, "src", "alt"], [1, "vendor-text"]], template: function VendorContainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, VendorContainComponent_div_1_Template, 2, 2, "div", 2)(2, VendorContainComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "div", 3)(5, "a", 4)(6, "h5", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275element(9, "i", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275element(14, "i", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const storeTextLogo_r2 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.store == null ? null : ctx.store.store_logo)("ngIfElse", storeTextLogo_r2);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c025, ctx.store.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.store.store_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx.store.rating_count.toFixed(1) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c025, ctx.store.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 7, "go_to_store"), " ");
  }
}, dependencies: [NgIf, RouterLink, TranslatePipe] });
var VendorContainComponent = _VendorContainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorContainComponent, { className: "VendorContainComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\vendor-contain\\vendor-contain.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/product/product-details/widgets/video-play-modal/video-play-modal.component.ts
var _c026 = ["videoPlayModal"];
function VideoPlayModalComponent_ng_template_0_div_3_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 10);
    \u0275\u0275element(1, "source", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.video ? ctx_r2.video.original_url : "", \u0275\u0275sanitizeUrl)("type", ctx_r2.video.mime_type);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "audio", 15);
    \u0275\u0275element(4, "source", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.video ? ctx_r2.video.original_url : "", \u0275\u0275sanitizeUrl)("type", ctx_r2.video.mime_type);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoPlayModalComponent_ng_template_0_div_3_ng_template_3_ng_container_0_Template, 5, 2, "ng-container", 12);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.type === "audio")("ngIfElse", img_r4);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementStart(2, "video", 21);
    \u0275\u0275element(3, "source", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", image_r5 ? image_r5.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r5.mime_type);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "audio", 15);
    \u0275\u0275element(3, "source", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", image_r5 ? image_r5.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r5.mime_type);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_template_3_ng_container_0_Template, 4, 2, "ng-container", 12);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r6 = \u0275\u0275reference(6);
    const image_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r2.audioType.includes(image_r5.mime_type))("ngIfElse", img_r6);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", (image_r5 == null ? null : image_r5.original_url) ? image_r5 == null ? null : image_r5.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_container_2_Template, 4, 2, "ng-container", 12)(3, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_template_3_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r7 = \u0275\u0275reference(4);
    const image_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.videType.includes(image_r5.mime_type))("ngIfElse", audio_r7);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_ng_template_0_Template, 7, 2, "ng-template", 19);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ul")(2, "owl-carousel-o", 17);
    \u0275\u0275template(3, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_3_Template, 1, 0, null, 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.singleSlider);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.galleries);
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_ng_container_0_Template, 4, 2, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.type === "img");
  }
}
function VideoPlayModalComponent_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275template(2, VideoPlayModalComponent_ng_template_0_div_3_video_2_Template, 2, 2, "video", 9)(3, VideoPlayModalComponent_ng_template_0_div_3_ng_template_3_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, VideoPlayModalComponent_ng_template_0_div_3_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audio_r8 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.type === "video")("ngIfElse", audio_r8);
  }
}
function VideoPlayModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4);
    \u0275\u0275listener("click", function VideoPlayModalComponent_ng_template_0_Template_button_click_1_listener() {
      const modal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(modal_r2.dismiss("Cross click"));
    });
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, VideoPlayModalComponent_ng_template_0_div_3_Template, 7, 2, "div", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.video || ctx_r2.galleries);
  }
}
var _VideoPlayModalComponent = class _VideoPlayModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.modalOpen = true;
    this.singleSlider = singleSlider;
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
  }
  openModal(video, type) {
    return __async(this, null, function* () {
      this.type = type;
      if (this.type === "img") {
        this.galleries = video;
      } else {
        this.video = video;
      }
      this.modalOpen = true;
      this.modalService.open(this.VideoPlayModal, {
        ariaLabelledBy: "video-modal",
        centered: true,
        windowClass: "theme-modal modal-lg exit-modal audio-video-modal"
      }).result.then((result) => {
        `Result ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    });
  }
  getDismissReason(reason) {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
};
_VideoPlayModalComponent.\u0275fac = function VideoPlayModalComponent_Factory(t) {
  return new (t || _VideoPlayModalComponent)(\u0275\u0275directiveInject(NgbModal));
};
_VideoPlayModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoPlayModalComponent, selectors: [["app-video-play-modal"]], viewQuery: function VideoPlayModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c026, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.VideoPlayModal = _t.first);
  }
}, decls: 2, vars: 0, consts: [["videoPlayModal", ""], ["audio", ""], ["img", ""], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "ri-close-line"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "modal-media"], ["width", "1000", "height", "590", "controls", "", 4, "ngIf", "ngIfElse"], ["width", "1000", "height", "590", "controls", ""], [3, "src", "type"], [4, "ngIf", "ngIfElse"], [1, "slider-image"], [1, "slider-main-img"], ["controls", ""], [4, "ngIf"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "ri-video-line"], ["controls", "", 1, "w-100"], ["alt", "image", 3, "src"]], template: function VideoPlayModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoPlayModalComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}, dependencies: [NgForOf, NgIf, CarouselComponent, CarouselSlideDirective] });
var VideoPlayModalComponent = _VideoPlayModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoPlayModalComponent, { className: "VideoPlayModalComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\video-play-modal\\video-play-modal.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/product/product-details/product-digital/product-digital.component.ts
var _c027 = ["videoPlayModal"];
function ProductDigitalComponent_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 33);
    \u0275\u0275listener("click", function ProductDigitalComponent_ng_container_10_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.VideoPlayModal.openModal(ctx_r2.product.product_thumbnail, "video"));
    });
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ProductDigitalComponent_ng_container_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 33);
    \u0275\u0275listener("click", function ProductDigitalComponent_ng_container_10_ng_container_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.VideoPlayModal.openModal(ctx_r2.product.product_thumbnail, "audio"));
    });
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ProductDigitalComponent_ng_container_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 33);
    \u0275\u0275listener("click", function ProductDigitalComponent_ng_container_10_ng_container_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.VideoPlayModal.openModal(ctx_r2.product.product_galleries, "img"));
    });
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "preview_image"));
  }
}
function ProductDigitalComponent_ng_container_10_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r2.product.preview_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "live_preview"));
  }
}
function ProductDigitalComponent_ng_container_10_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 33);
    \u0275\u0275listener("click", function ProductDigitalComponent_ng_container_10_ng_template_6_ng_container_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.VideoPlayModal.openModal(ctx_r2.product.preview_video_file, ctx_r2.product.preview_type));
    });
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "preview_video"));
  }
}
function ProductDigitalComponent_ng_container_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDigitalComponent_ng_container_10_ng_template_6_ng_container_0_Template, 6, 3, "ng-container", 32);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const audio_r7 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.product.preview_type === "video")("ngIfElse", audio_r7);
  }
}
function ProductDigitalComponent_ng_container_10_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 40);
    \u0275\u0275listener("click", function ProductDigitalComponent_ng_container_10_ng_template_8_ng_container_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.VideoPlayModal.openModal(ctx_r2.product.preview_audio_file, ctx_r2.product.preview_type));
    });
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ProductDigitalComponent_ng_container_10_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDigitalComponent_ng_container_10_ng_template_8_ng_container_0_Template, 3, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.product.preview_type === "audio");
  }
}
function ProductDigitalComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275template(2, ProductDigitalComponent_ng_container_10_ng_container_2_Template, 3, 0, "ng-container", 12)(3, ProductDigitalComponent_ng_container_10_ng_container_3_Template, 3, 0, "ng-container", 12)(4, ProductDigitalComponent_ng_container_10_ng_container_4_Template, 6, 3, "ng-container", 12)(5, ProductDigitalComponent_ng_container_10_ng_container_5_Template, 6, 4, "ng-container", 32)(6, ProductDigitalComponent_ng_container_10_ng_template_6_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, ProductDigitalComponent_ng_container_10_ng_template_8_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const video_r9 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.product.product_thumbnail && ctx_r2.videType.includes(ctx_r2.product == null ? null : ctx_r2.product.product_thumbnail == null ? null : ctx_r2.product.product_thumbnail.mime_type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.product_thumbnail && ctx_r2.audioType.includes(ctx_r2.product == null ? null : ctx_r2.product.product_thumbnail == null ? null : ctx_r2.product.product_thumbnail.mime_type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.product_galleries && ctx_r2.product.product_galleries.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.preview_type === "url" && ctx_r2.product.preview_url)("ngIfElse", video_r9);
  }
}
function ProductDigitalComponent_li_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "a", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "last_update"), " : ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r2.product.updated_at, "dd MMM yyyy"), " ");
  }
}
function ProductDigitalComponent_li_47_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r10.name);
  }
}
function ProductDigitalComponent_li_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 41)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 42);
    \u0275\u0275template(5, ProductDigitalComponent_li_47_li_5_Template, 3, 1, "li", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "tags"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.product.tags);
  }
}
function ProductDigitalComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 16);
    \u0275\u0275element(3, "app-product-wholesale", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("product", ctx_r2.product);
  }
}
var _ProductDigitalComponent = class _ProductDigitalComponent {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.productQty = 1;
    this.totalPrice = 0;
    this.url = environment.baseURL;
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
  }
  ngOnChanges() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product.id);
    });
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
  selectVariation(variation) {
    this.selectedVariation = variation;
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
    this.wholesalePriceCal();
  }
  wholesalePriceCal() {
    let wholesale = this.product.wholesales.find((value) => value.min_qty <= this.productQty && value.max_qty >= this.productQty) || null;
    if (wholesale && this.product.wholesale_price_type == "fixed") {
      this.totalPrice = this.productQty * wholesale.value;
    } else if (wholesale && this.product.wholesale_price_type == "percentage") {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product.sale_price);
      this.totalPrice = this.totalPrice - this.totalPrice * (wholesale.value / 100);
    } else {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product.sale_price);
    }
  }
  externalProductLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
  addToCart(product, buyNow) {
    if (product) {
      const params = {
        id: this.cartItem && (this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id) ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCart(params)).subscribe({
        complete: () => {
          if (buyNow) {
            this.router.navigate(["/checkout"]);
          }
        }
      });
    }
  }
  shareOnFacebook(slug) {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(facebookShareUrl, "_blank");
  }
  shareOnInstagram(slug) {
    const whatsappShareUrl = `https://api.instagram.com/send?text=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(whatsappShareUrl, "_blank");
  }
  shareOnWhatsApp(slug) {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.url + "/product/" + slug)}`;
    window.open(whatsappShareUrl, "_blank");
  }
};
_ProductDigitalComponent.\u0275fac = function ProductDigitalComponent_Factory(t) {
  return new (t || _ProductDigitalComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router));
};
_ProductDigitalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDigitalComponent, selectors: [["app-product-digital"]], viewQuery: function ProductDigitalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c027, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.VideoPlayModal = _t.first);
  }
}, inputs: { product: "product", option: "option" }, features: [\u0275\u0275NgOnChangesFeature], decls: 51, vars: 32, consts: [["videoPlayModal", ""], ["video", ""], ["audio", ""], [1, "container-fluid-lg"], [1, "row", "g-sm-4", "g-3"], [1, "col-xl-8", "col-lg-7", "wow", "fadeInUp"], [1, "product-left-box"], [1, "col-12", "wow", "fadeInUp"], [1, "position-relative"], [1, "theme-option-box"], [1, "theme-image-option"], [1, "img-fluid", "blur-up", "w-100", "h-100", 3, "src", "alt"], [4, "ngIf"], [1, "col-12"], [3, "product"], [1, "col-xl-4", "col-lg-5", "wow", "fadeInUp", "vendor-right-box"], [1, "right-box-contain"], [1, "main-right-box-contain"], [1, "vendor-box"], [3, "store"], [1, "vendor-detail"], [3, "product", "option"], [1, "buy-box"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-shuffle-line"], [1, "pickup-box"], [1, "product-title"], [1, "product-info"], [1, "product-info-list", "product-info-list-2"], ["href", "javascript:void(0)"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "icon-btn-group"], [4, "ngIf", "ngIfElse"], [1, "theme-image-icon", "btn", "btn-md", 3, "click"], [1, "ri-play-line"], [1, "ri-headphone-line"], [1, "ri-image-2-line"], [1, "ms-2"], ["target", "_blank", 1, "theme-image-icon", "btn", "btn-md", 3, "href"], [1, "ri-share-box-line"], [1, "theme-image-icon", "theme-icon-btn", 3, "click"], [1, "d-flex", "align-items-center"], [1, "tag-list"], [4, "ngFor", "ngForOf"], [1, "pt-4"]], template: function ProductDigitalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 4)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10);
    \u0275\u0275element(9, "img", 11);
    \u0275\u0275template(10, ProductDigitalComponent_ng_container_10_Template, 10, 5, "ng-container", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275element(12, "app-product-details-tabs", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "div", 17)(16, "div", 18);
    \u0275\u0275element(17, "app-vendor-contain", 19);
    \u0275\u0275elementStart(18, "div", 20)(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(21, "app-product-contain", 21);
    \u0275\u0275elementStart(22, "div", 22)(23, "a", 23);
    \u0275\u0275listener("click", function ProductDigitalComponent_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addToWishlist(ctx.product));
    });
    \u0275\u0275element(24, "i");
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 23);
    \u0275\u0275listener("click", function ProductDigitalComponent_Template_a_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addToCompare(ctx.product.id));
    });
    \u0275\u0275element(29, "i", 24);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 25)(34, "div", 26)(35, "h4");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 27)(39, "ul", 28)(40, "li");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "a", 29);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, ProductDigitalComponent_li_46_Template, 6, 7, "li", 12)(47, ProductDigitalComponent_li_47_Template, 6, 4, "li", 30);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(48, ProductDigitalComponent_ng_container_48_Template, 4, 1, "ng-container", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(49, "app-video-play-modal", null, 0);
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("src", ctx.product.product_thumbnail ? ctx.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl)("alt", ctx.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product.product_thumbnail);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", ctx.product);
    \u0275\u0275advance(5);
    \u0275\u0275property("store", ctx.product.store);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.product.short_description);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx.product)("option", ctx.option);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("ri-heart-", ctx.product.is_wishlist ? "fill" : "line", "");
    \u0275\u0275classProp("theme-color", ctx.product.is_wishlist);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 21, "add_to_wishlist"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 23, "add_to_compare"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 25, "assets_information"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 27, "created"), " : ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 29, ctx.product.created_at, "dd MMM yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.product.updated_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product.tags.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product == null ? null : ctx.product.wholesales == null ? null : ctx.product.wholesales.length);
  }
}, dependencies: [NgForOf, NgIf, ProductDetailsTabsComponent, ProductContainComponent, ProductWholesaleComponent, VendorContainComponent, VideoPlayModalComponent, DatePipe, TranslatePipe] });
var ProductDigitalComponent = _ProductDigitalComponent;
__decorate([
  Select(CartState.cartItems)
], ProductDigitalComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDigitalComponent, { className: "ProductDigitalComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\product-digital\\product-digital.component.ts", lineNumber: 20 });
})();

// src/app/components/shop/product/product.component.ts
function ProductComponent_app_breadcrumb_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("breadcrumb", ctx_r0.breadcrumb);
  }
}
function ProductComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb-digital", 5);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 1, ctx_r0.product$));
  }
}
function ProductComponent_app_product_digital_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-digital", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 2, ctx_r0.product$))("option", \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOptions$));
  }
}
function ProductComponent_app_product_thumbnail_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-thumbnail", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 2, ctx_r0.product$))("option", \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOptions$));
  }
}
function ProductComponent_app_product_images_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-images", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 2, ctx_r0.product$))("option", \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOptions$));
  }
}
function ProductComponent_app_product_slider_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-slider", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 2, ctx_r0.product$))("option", \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOptions$));
  }
}
function ProductComponent_app_product_sticky_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-sticky", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 2, ctx_r0.product$))("option", \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOptions$));
  }
}
function ProductComponent_app_product_accordion_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-accordion", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(1, 2, ctx_r0.product$))("option", \u0275\u0275pipeBind1(2, 4, ctx_r0.themeOptions$));
  }
}
function ProductComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-related-products", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", \u0275\u0275pipeBind1(2, 1, ctx_r0.product$));
  }
}
var _ProductComponent = class _ProductComponent {
  constructor(route, seoService) {
    this.route = route;
    this.seoService = seoService;
    this.breadcrumb = {
      title: "Product",
      items: []
    };
    this.layout = "product_digital";
    this.isScrollActive = false;
    this.product$.subscribe((product) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = product.name;
      this.breadcrumb.items.push({ label: "Product", active: true }, { label: product.name, active: false });
    });
    this.route.queryParams.subscribe((params) => {
      if (params["layout"]) {
        this.layout = params["layout"];
      } else {
        this.themeOptions$.subscribe((option) => {
          this.layout = option?.product && option?.product?.product_layout ? option?.product?.product_layout : "product_thumbnail";
        });
      }
    });
  }
  onScroll() {
    const button = document.querySelector(".scroll-button");
    if (button) {
      const buttonRect = button.getBoundingClientRect();
      if (buttonRect.bottom < window.innerHeight && buttonRect.bottom < 0) {
        this.isScrollActive = true;
        document.body.classList.add("stickyCart");
      } else {
        this.isScrollActive = false;
        document.body.classList.remove("stickyCart");
      }
    }
  }
  ngOnDestroy() {
    document.body.classList.remove("stickyCart");
  }
};
_ProductComponent.\u0275fac = function ProductComponent_Factory(t) {
  return new (t || _ProductComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SeoService));
};
_ProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-product"]], hostBindings: function ProductComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("scroll", function ProductComponent_scroll_HostBindingHandler($event) {
      return ctx.onScroll($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, decls: 15, vars: 20, consts: [["other", ""], [3, "breadcrumb", 4, "ngIf", "ngIfElse"], [1, "product-section"], [3, "product", "option", 4, "ngIf"], ["class", "product-list-section releted-product section-b-space", 4, "ngIf"], [3, "product"], [3, "breadcrumb"], [3, "product", "option"], [1, "product-list-section", "releted-product", "section-b-space"]], template: function ProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductComponent_app_breadcrumb_0_Template, 1, 1, "app-breadcrumb", 1)(1, ProductComponent_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(3, "section", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, ProductComponent_app_product_digital_5_Template, 3, 6, "app-product-digital", 3)(6, ProductComponent_app_product_thumbnail_6_Template, 3, 6, "app-product-thumbnail", 3)(7, ProductComponent_app_product_images_7_Template, 3, 6, "app-product-images", 3)(8, ProductComponent_app_product_slider_8_Template, 3, 6, "app-product-slider", 3)(9, ProductComponent_app_product_sticky_9_Template, 3, 6, "app-product-sticky", 3)(10, ProductComponent_app_product_accordion_10_Template, 3, 6, "app-product-accordion", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProductComponent_section_11_Template, 3, 3, "section", 4);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275element(13, "app-sticky-checkout", 5);
    \u0275\u0275pipe(14, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_11_0;
    const other_r2 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", ctx.layout !== "product_digital")("ngIfElse", other_r2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("section-b-space", !((tmp_3_0 = \u0275\u0275pipeBind1(4, 14, ctx.product$)) == null ? null : tmp_3_0.related_products == null ? null : tmp_3_0.related_products.length))("theme-product-section", ctx.layout === "product_digital");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.layout == "product_digital");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "product_thumbnail");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "product_images");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "product_slider");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "product_sticky");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "product_accordion");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = \u0275\u0275pipeBind1(12, 16, ctx.product$)) == null ? null : tmp_11_0.related_products == null ? null : tmp_11_0.related_products.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("product", \u0275\u0275pipeBind1(14, 18, ctx.product$));
  }
}, dependencies: [NgIf, BreadcrumbComponent, BreadcrumbDigitalComponent, ProductThumbnailComponent, ProductImagesComponent, ProductSliderComponent, ProductStickyComponent, RelatedProductsComponent, StickyCheckoutComponent, ProductAccordionComponent, ProductDigitalComponent, AsyncPipe] });
var ProductComponent = _ProductComponent;
__decorate([
  Select(ProductState.selectedProduct)
], ProductComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src\\app\\components\\shop\\product\\product.component.ts", lineNumber: 17 });
})();

// src/app/components/shop/collection/widgets/collection-categories/collection-categories.component.ts
var _c028 = () => [];
var _CollectionCategoriesComponent = class _CollectionCategoriesComponent {
  constructor() {
    this.style = "vertical";
  }
};
_CollectionCategoriesComponent.\u0275fac = function CollectionCategoriesComponent_Factory(t) {
  return new (t || _CollectionCategoriesComponent)();
};
_CollectionCategoriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategoriesComponent, selectors: [["app-collection-categories"]], inputs: { style: "style", image: "image", theme: "theme", title: "title", sliderOption: "sliderOption" }, decls: 2, vars: 10, consts: [[3, "image", "theme", "title", "categoryIds", "sliderOption"]], template: function CollectionCategoriesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-categories", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275styleMap(ctx.style);
    \u0275\u0275property("image", ctx.image)("theme", ctx.theme)("title", ctx.title)("categoryIds", ((tmp_4_0 = \u0275\u0275pipeBind1(1, 7, ctx.themeOption$)) == null ? null : tmp_4_0.collection == null ? null : tmp_4_0.collection.collection_categories_ids) || \u0275\u0275pureFunction0(9, _c028))("sliderOption", ctx.sliderOption);
  }
}, dependencies: [CategoriesComponent, AsyncPipe] });
var CollectionCategoriesComponent = _CollectionCategoriesComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionCategoriesComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategoriesComponent, { className: "CollectionCategoriesComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\collection-categories\\collection-categories.component.ts", lineNumber: 13 });
})();

// src/app/components/shop/collection/collection-category-slider/collection-category-slider.component.ts
var _CollectionCategorySliderComponent = class _CollectionCategorySliderComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.categorySlider = categorySlider;
  }
};
_CollectionCategorySliderComponent.\u0275fac = function CollectionCategorySliderComponent_Factory(t) {
  return new (t || _CollectionCategorySliderComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionCategorySliderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategorySliderComponent, selectors: [["app-collection-category-slider"]], inputs: { filter: "filter" }, decls: 13, vars: 8, consts: [[1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [3, "sliderOption", "theme"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "col-custome-3"], [1, "left-box"], [3, "filter"], [1, "col-custome-9"]], template: function CollectionCategorySliderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
    \u0275\u0275element(4, "app-collection-categories", 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 4)(6, "div", 0)(7, "div", 1)(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "app-collection-sidebar", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275element(12, "app-collection-products", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("sliderOption", ctx.categorySlider)("theme", "paris");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionCategoriesComponent, CollectionSidebarComponent, CollectionProductsComponent] });
var CollectionCategorySliderComponent = _CollectionCategorySliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategorySliderComponent, { className: "CollectionCategorySliderComponent", filePath: "src\\app\\components\\shop\\collection\\collection-category-slider\\collection-category-slider.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/collection/collection-category-sidebar/collection-category-sidebar.component.ts
var _CollectionCategorySidebarComponent = class _CollectionCategorySidebarComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.categorySlider = categorySlider;
  }
};
_CollectionCategorySidebarComponent.\u0275fac = function CollectionCategorySidebarComponent_Factory(t) {
  return new (t || _CollectionCategorySidebarComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionCategorySidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionCategorySidebarComponent, selectors: [["app-collection-category-sidebar"]], inputs: { filter: "filter" }, decls: 8, vars: 5, consts: [["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-custome-3"], [1, "left-box"], [1, "col-custome-9"], [3, "filter"]], template: function CollectionCategorySidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "app-collection-categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "app-collection-products", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275styleMap("classic_vertical");
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionCategoriesComponent, CollectionProductsComponent] });
var CollectionCategorySidebarComponent = _CollectionCategorySidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionCategorySidebarComponent, { className: "CollectionCategorySidebarComponent", filePath: "src\\app\\components\\shop\\collection\\collection-category-sidebar\\collection-category-sidebar.component.ts", lineNumber: 11 });
})();

// src/app/components/shop/collection/widgets/banner/banner.component.ts
function BannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
var _BannerComponent = class _BannerComponent {
  constructor() {
    this.class = "banner-contain-2 hover-effect";
  }
};
_BannerComponent.\u0275fac = function BannerComponent_Factory(t) {
  return new (t || _BannerComponent)();
};
_BannerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BannerComponent, selectors: [["app-collection-category-banner"]], inputs: { class: "class", imageUrl: "imageUrl" }, decls: 1, vars: 1, consts: [["class", "banner-contain-2 hover-effect", 4, "ngIf"], [1, "banner-contain-2", "hover-effect"], ["alt", "banner", 1, "bg-img", "rounded-3", 3, "src"]], template: function BannerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BannerComponent_div_0_Template, 2, 1, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.imageUrl);
  }
}, dependencies: [NgIf] });
var BannerComponent = _BannerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BannerComponent, { className: "BannerComponent", filePath: "src\\app\\components\\shop\\collection\\widgets\\banner\\banner.component.ts", lineNumber: 8 });
})();

// src/app/components/shop/collection/collection-banner/collection-banner.component.ts
var _CollectionBannerComponent = class _CollectionBannerComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.storageURL = environment.storageURL;
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = this.storageURL + res?.collection?.collection_banner_image_url);
  }
};
_CollectionBannerComponent.\u0275fac = function CollectionBannerComponent_Factory(t) {
  return new (t || _CollectionBannerComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionBannerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionBannerComponent, selectors: [["app-collection-banner"]], inputs: { filter: "filter" }, decls: 9, vars: 5, consts: [["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-custome-3"], [1, "left-box"], [3, "filter"], [1, "col-custome-9"], [3, "imageUrl"]], template: function CollectionBannerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "app-collection-sidebar", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "app-collection-category-banner", 7)(8, "app-collection-products", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275property("imageUrl", ctx.bannerImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionSidebarComponent, CollectionProductsComponent, BannerComponent] });
var CollectionBannerComponent = _CollectionBannerComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionBannerComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionBannerComponent, { className: "CollectionBannerComponent", filePath: "src\\app\\components\\shop\\collection\\collection-banner\\collection-banner.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/collection/collection-left-sidebar/collection-left-sidebar.component.ts
var _CollectionLeftSidebarComponent = class _CollectionLeftSidebarComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.storageURL = environment.storageURL;
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = this.storageURL + res?.collection?.collection_banner_image_url);
  }
};
_CollectionLeftSidebarComponent.\u0275fac = function CollectionLeftSidebarComponent_Factory(t) {
  return new (t || _CollectionLeftSidebarComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionLeftSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionLeftSidebarComponent, selectors: [["app-collection-left-sidebar"]], inputs: { filter: "filter" }, decls: 13, vars: 5, consts: [[1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [3, "imageUrl"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "col-custome-3"], [1, "left-box"], [3, "filter"], [1, "col-custome-9"]], template: function CollectionLeftSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
    \u0275\u0275element(4, "app-collection-category-banner", 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 4)(6, "div", 0)(7, "div", 1)(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "app-collection-sidebar", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275element(12, "app-collection-products", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("imageUrl", ctx.storageURL + ctx.bannerImageUrl);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionSidebarComponent, CollectionProductsComponent, BannerComponent] });
var CollectionLeftSidebarComponent = _CollectionLeftSidebarComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionLeftSidebarComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionLeftSidebarComponent, { className: "CollectionLeftSidebarComponent", filePath: "src\\app\\components\\shop\\collection\\collection-left-sidebar\\collection-left-sidebar.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/collection/collection-right-sidebar/collection-right-sidebar.component.ts
var _CollectionRightSidebarComponent = class _CollectionRightSidebarComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.storageURL = environment.storageURL;
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = this.storageURL + res?.collection?.collection_banner_image_url);
  }
};
_CollectionRightSidebarComponent.\u0275fac = function CollectionRightSidebarComponent_Factory(t) {
  return new (t || _CollectionRightSidebarComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionRightSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionRightSidebarComponent, selectors: [["app-collection-right-sidebar"]], inputs: { filter: "filter" }, decls: 13, vars: 5, consts: [[1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [3, "imageUrl"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "col-custome-9"], [3, "filter"], [1, "col-custome-3"], [1, "left-box", "right-box"]], template: function CollectionRightSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
    \u0275\u0275element(4, "app-collection-category-banner", 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 4)(6, "div", 0)(7, "div", 1)(8, "div", 5);
    \u0275\u0275element(9, "app-collection-products", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
    \u0275\u0275element(12, "app-collection-sidebar", 6);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("imageUrl", ctx.bannerImageUrl);
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionSidebarComponent, CollectionProductsComponent, BannerComponent] });
var CollectionRightSidebarComponent = _CollectionRightSidebarComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionRightSidebarComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionRightSidebarComponent, { className: "CollectionRightSidebarComponent", filePath: "src\\app\\components\\shop\\collection\\collection-right-sidebar\\collection-right-sidebar.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/collection/collection-list/collection-list.component.ts
var _CollectionListComponent = class _CollectionListComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.storageURL = environment.storageURL;
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = this.storageURL + res?.collection?.collection_banner_image_url);
  }
};
_CollectionListComponent.\u0275fac = function CollectionListComponent_Factory(t) {
  return new (t || _CollectionListComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionListComponent, selectors: [["app-collection-list"]], inputs: { filter: "filter" }, decls: 13, vars: 5, consts: [[1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [3, "imageUrl"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "col-custome-3"], [1, "left-box"], [3, "filter"], [1, "col-custome-9"]], template: function CollectionListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
    \u0275\u0275element(4, "app-collection-category-banner", 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 4)(6, "div", 0)(7, "div", 1)(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "app-collection-sidebar", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275element(12, "app-collection-products", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("imageUrl", ctx.bannerImageUrl);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionSidebarComponent, CollectionProductsComponent, BannerComponent] });
var CollectionListComponent = _CollectionListComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionListComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionListComponent, { className: "CollectionListComponent", filePath: "src\\app\\components\\shop\\collection\\collection-list\\collection-list.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/collection/collection-offcanvas-filter/collection-offcanvas-filter.component.ts
var _CollectionOffCanvasFilterComponent = class _CollectionOffCanvasFilterComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
  }
  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }
};
_CollectionOffCanvasFilterComponent.\u0275fac = function CollectionOffCanvasFilterComponent_Factory(t) {
  return new (t || _CollectionOffCanvasFilterComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionOffCanvasFilterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionOffCanvasFilterComponent, selectors: [["app-collection-offcanvas-filter"]], inputs: { filter: "filter" }, decls: 9, vars: 6, consts: [[1, "section-b-space", "shop-section", "filter-offcanvas"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "overlay", 3, "click"], [1, "left-box", "top-filter"], [3, "filter"]], template: function CollectionOffCanvasFilterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275listener("click", function CollectionOffCanvasFilterComponent_Template_div_click_4_listener() {
      return ctx.closeCanvasMenu();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275element(6, "app-collection-sidebar", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275element(8, "app-collection-products", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx.attributeService.offCanvasMenu);
    \u0275\u0275advance();
    \u0275\u0275property("filter", ctx.filter);
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [CollectionSidebarComponent, CollectionProductsComponent] });
var CollectionOffCanvasFilterComponent = _CollectionOffCanvasFilterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionOffCanvasFilterComponent, { className: "CollectionOffCanvasFilterComponent", filePath: "src\\app\\components\\shop\\collection\\collection-offcanvas-filter\\collection-offcanvas-filter.component.ts", lineNumber: 10 });
})();

// src/app/components/shop/collection/collection-no-sidebar/collection-no-sidebar.component.ts
var _CollectionNoSidebarComponent = class _CollectionNoSidebarComponent {
  constructor(attributeService) {
    this.attributeService = attributeService;
    this.storageURL = environment.storageURL;
    this.themeOptions$.subscribe((res) => this.bannerImageUrl = this.storageURL + res?.collection?.collection_banner_image_url);
  }
};
_CollectionNoSidebarComponent.\u0275fac = function CollectionNoSidebarComponent_Factory(t) {
  return new (t || _CollectionNoSidebarComponent)(\u0275\u0275directiveInject(AttributeService));
};
_CollectionNoSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionNoSidebarComponent, selectors: [["app-collection-no-sidebar"]], inputs: { filter: "filter" }, decls: 10, vars: 3, consts: [[1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [3, "imageUrl"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "col-custome-12"], [3, "filter", "gridCol"]], template: function CollectionNoSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
    \u0275\u0275element(4, "app-collection-category-banner", 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 4)(6, "div", 0)(7, "div", 1)(8, "div", 5);
    \u0275\u0275element(9, "app-collection-products", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("imageUrl", ctx.bannerImageUrl);
    \u0275\u0275advance(5);
    \u0275\u0275property("filter", ctx.filter)("gridCol", "collection_5_grid");
  }
}, dependencies: [CollectionProductsComponent, BannerComponent] });
var CollectionNoSidebarComponent = _CollectionNoSidebarComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionNoSidebarComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionNoSidebarComponent, { className: "CollectionNoSidebarComponent", filePath: "src\\app\\components\\shop\\collection\\collection-no-sidebar\\collection-no-sidebar.component.ts", lineNumber: 15 });
})();

// src/app/components/shop/collection/collection.component.ts
function CollectionComponent_app_collection_category_slider_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-category-slider", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_category_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-category-sidebar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_banner_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-banner", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_left_sidebar_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-left-sidebar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_right_sidebar_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-right-sidebar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_list_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-list", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_offcanvas_filter_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-offcanvas-filter", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
function CollectionComponent_app_collection_no_sidebar_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-collection-no-sidebar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filter", ctx_r0.filter);
  }
}
var _CollectionComponent = class _CollectionComponent {
  constructor(route, store) {
    this.route = route;
    this.store = store;
    this.breadcrumb = {
      title: "Collections",
      items: [{ label: "Collections", active: false }]
    };
    this.layout = "collection_category_slider";
    this.skeleton = true;
    this.filter = {
      "page": 1,
      "paginate": 40,
      "status": 1,
      "field": "created_at",
      "price": "",
      "category": "",
      "tag": "",
      "sort": "asc",
      "sortBy": "asc",
      "rating": "",
      "attribute": ""
    };
    this.totalItems = 0;
    this.route.queryParams.subscribe((params) => {
      this.filter = {
        "page": params["page"] ? params["page"] : 1,
        "paginate": 40,
        "status": 1,
        "price": params["price"] ? params["price"] : "",
        "brand": params["brand"] ? params["brand"] : "",
        "category": params["category"] ? params["category"] : "",
        "tag": params["tag"] ? params["tag"] : "",
        "field": params["field"] ? params["field"] : this.filter["field"],
        "sortBy": params["sortBy"] ? params["sortBy"] : this.filter["sortBy"],
        "rating": params["rating"] ? params["rating"] : "",
        "attribute": params["attribute"] ? params["attribute"] : ""
      };
      this.store.dispatch(new GetProducts(this.filter));
      if (params["layout"]) {
        this.layout = params["layout"];
      } else {
        this.themeOptions$.subscribe((option) => {
          this.layout = option?.collection && option?.collection?.collection_layout ? option?.collection?.collection_layout : "collection_category_slider";
        });
      }
      this.filter["layout"] = this.layout;
    });
    this.product$.subscribe((product) => this.totalItems = product?.total);
  }
};
_CollectionComponent.\u0275fac = function CollectionComponent_Factory(t) {
  return new (t || _CollectionComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Store));
};
_CollectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionComponent, selectors: [["app-collection"]], decls: 9, vars: 9, consts: [[3, "breadcrumb"], [3, "filter", 4, "ngIf"], [3, "filter"]], template: function CollectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275template(1, CollectionComponent_app_collection_category_slider_1_Template, 1, 1, "app-collection-category-slider", 1)(2, CollectionComponent_app_collection_category_sidebar_2_Template, 1, 1, "app-collection-category-sidebar", 1)(3, CollectionComponent_app_collection_banner_3_Template, 1, 1, "app-collection-banner", 1)(4, CollectionComponent_app_collection_left_sidebar_4_Template, 1, 1, "app-collection-left-sidebar", 1)(5, CollectionComponent_app_collection_right_sidebar_5_Template, 1, 1, "app-collection-right-sidebar", 1)(6, CollectionComponent_app_collection_list_6_Template, 1, 1, "app-collection-list", 1)(7, CollectionComponent_app_collection_offcanvas_filter_7_Template, 1, 1, "app-collection-offcanvas-filter", 1)(8, CollectionComponent_app_collection_no_sidebar_8_Template, 1, 1, "app-collection-no-sidebar", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_category_slider");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_category_sidebar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_banner");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_left_sidebar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_right_sidebar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_3_grid" || ctx.layout == "collection_4_grid" || ctx.layout == "collection_5_grid" || ctx.layout == "collection_list_view");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_offcanvas_filter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout == "collection_no_sidebar");
  }
}, dependencies: [NgIf, BreadcrumbComponent, CollectionCategorySliderComponent, CollectionCategorySidebarComponent, CollectionBannerComponent, CollectionLeftSidebarComponent, CollectionRightSidebarComponent, CollectionListComponent, CollectionOffCanvasFilterComponent, CollectionNoSidebarComponent] });
var CollectionComponent = _CollectionComponent;
__decorate([
  Select(ProductState.product)
], CollectionComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], CollectionComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionComponent, { className: "CollectionComponent", filePath: "src\\app\\components\\shop\\collection\\collection.component.ts", lineNumber: 18 });
})();

// src/app/components/shop/checkout/address-block/address-block.component.ts
function AddressBlockComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_address_found"));
  }
}
function AddressBlockComponent_ng_container_2_li_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "pin_code"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", address_r3 == null ? null : address_r3.pincode, " ");
  }
}
function AddressBlockComponent_ng_container_2_li_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 14)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 3, "phone"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" +", address_r3 == null ? null : address_r3.country_code, " ", address_r3 == null ? null : address_r3.phone, " ");
  }
}
function AddressBlockComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "label", 5)(3, "div", 6)(4, "div")(5, "div", 7)(6, "input", 8);
    \u0275\u0275listener("change", function AddressBlockComponent_ng_container_2_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ul", 9)(8, "li")(9, "h4", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "p", 11)(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AddressBlockComponent_ng_container_2_li_17_Template, 6, 4, "li", 13)(18, AddressBlockComponent_ng_container_2_li_18_Template, 6, 5, "li", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const address_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate2("for", "adddress-", ctx_r1.type, "-", i_r4, "");
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("value", address_r3.id);
    \u0275\u0275propertyInterpolate1("name", "adddress-", ctx_r1.type, "");
    \u0275\u0275propertyInterpolate2("id", "adddress-", ctx_r1.type, "-", i_r4, "");
    \u0275\u0275property("checked", i_r4 === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(address_r3 == null ? null : address_r3.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 18, "address"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", address_r3 == null ? null : address_r3.street, ", ", address_r3 == null ? null : address_r3.city, ", ", address_r3 == null ? null : address_r3.state == null ? null : address_r3.state.name, ", ", address_r3 == null ? null : address_r3.country == null ? null : address_r3.country.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3.pincode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3.phone);
  }
}
var _AddressBlockComponent = class _AddressBlockComponent {
  constructor() {
    this.addresses = [];
    this.type = "shipping";
    this.selectAddress = new EventEmitter();
  }
  ngOnChanges() {
    if (this.addresses && this.addresses.length > 0) {
      const firstAddressId = this.addresses[0].id;
      this.selectAddress.emit(firstAddressId);
    }
  }
  set(event) {
    this.selectAddress.emit(Number(event.target?.value));
  }
};
_AddressBlockComponent.\u0275fac = function AddressBlockComponent_Factory(t) {
  return new (t || _AddressBlockComponent)();
};
_AddressBlockComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressBlockComponent, selectors: [["app-address-block"]], inputs: { addresses: "addresses", type: "type" }, outputs: { selectAddress: "selectAddress" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["class", "empty-box", 4, "ngIf"], [1, "row", "g-3"], [4, "ngFor", "ngForOf"], [1, "empty-box"], [1, "col-xxl-6", "col-lg-12", "col-md-6"], [3, "for"], [1, "delivery-address-box"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "change", "value", "name", "id", "checked"], [1, "delivery-address-detail"], [1, "fw-semibold"], [1, "text-content"], [1, "text-title"], [4, "ngIf"], [1, "text-content", "mb-0"]], template: function AddressBlockComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddressBlockComponent_div_0_Template, 4, 3, "div", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, AddressBlockComponent_ng_container_2_Template, 19, 20, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !(ctx.addresses == null ? null : ctx.addresses.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.addresses);
  }
}, dependencies: [NgForOf, NgIf, TranslatePipe] });
var AddressBlockComponent = _AddressBlockComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressBlockComponent, { className: "AddressBlockComponent", filePath: "src\\app\\components\\shop\\checkout\\address-block\\address-block.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/checkout/delivery-block/delivery-block.component.ts
function DeliveryBlockComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "input", 9);
    \u0275\u0275listener("change", function DeliveryBlockComponent_div_2_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeliveryDescription(ctx_r1.setting.delivery.default.title + " | " + ctx_r1.setting.delivery.default.description, "standard"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.setting.delivery.default.title, " | ", ctx_r1.setting.delivery.default.description, " ");
  }
}
function DeliveryBlockComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 11)(5, "input", 12);
    \u0275\u0275listener("change", function DeliveryBlockComponent_div_3_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeliveryDescription(ctx_r1.setting.delivery.same_day.title + " | " + ctx_r1.setting.delivery.same_day.description, "same_day"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.setting.delivery.same_day.title, " | ", ctx_r1.setting.delivery.same_day.description, " ");
  }
}
function DeliveryBlockComponent_div_4_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("click", function DeliveryBlockComponent_div_4_li_8_Template_li_click_0_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const intervals_r6 = ctx_r4.$implicit;
      const i_r7 = ctx_r4.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDeliveryInterval(intervals_r6.description, i_r7 + 1));
    });
    \u0275\u0275elementStart(1, "a", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const intervals_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedIndex && i_r7 + 1 == ctx_r1.selectedIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(intervals_r6.description);
  }
}
function DeliveryBlockComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275template(8, DeliveryBlockComponent_div_4_li_8_Template, 3, 3, "li", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.deliveryType && ctx_r1.deliveryType == "same_day");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 4, "select_timing_slot"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.setting.delivery.same_day_intervals);
  }
}
var _DeliveryBlockComponent = class _DeliveryBlockComponent {
  constructor() {
    this.selectDelivery = new EventEmitter();
    this.deliveryType = null;
    this.delivery_description = null;
    this.delivery_interval = null;
  }
  ngOnInit() {
    if (this.setting?.delivery) {
      let delivery = {
        delivery_description: this.setting.delivery?.default?.title + " | " + this.setting.delivery?.default?.description,
        delivery_interval: this.delivery_interval
      };
      this.selectDelivery.emit(delivery);
    }
  }
  setDeliveryDescription(value, type) {
    this.delivery_description = value;
    this.deliveryType = type;
    let delivery = {
      delivery_description: this.delivery_description,
      delivery_interval: this.delivery_interval
    };
    this.selectDelivery.emit(delivery);
  }
  setDeliveryInterval(value, index) {
    this.selectedIndex = index;
    this.delivery_interval = value;
    let delivery = {
      delivery_description: this.delivery_description,
      delivery_interval: this.delivery_interval
    };
    this.selectDelivery.emit(delivery);
  }
};
_DeliveryBlockComponent.\u0275fac = function DeliveryBlockComponent_Factory(t) {
  return new (t || _DeliveryBlockComponent)();
};
_DeliveryBlockComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryBlockComponent, selectors: [["app-delivery-block"]], inputs: { setting: "setting" }, outputs: { selectDelivery: "selectDelivery" }, decls: 5, vars: 3, consts: [[1, "checkout-detail"], [1, "row", "g-4"], ["class", "col-xxl-6", 4, "ngIf"], ["class", "col-12 future-box", 3, "show", 4, "ngIf"], [1, "col-xxl-6"], [1, "delivery-option"], [1, "delivery-category"], [1, "shipment-detail", "w-100"], [1, "form-check", "custom-form-check", "hide-check-box"], ["type", "radio", "name", "standard", "id", "standard", 1, "form-check-input", 3, "change", "checked"], ["for", "standard", 1, "form-check-label"], [1, "form-check", "mb-0", "custom-form-check", "show-box-checked"], ["type", "radio", "name", "standard", "id", "future", 1, "form-check-input", 3, "change"], ["for", "future", 1, "form-check-label"], [1, "col-12", "future-box"], [1, "future-option"], [1, "delivery-items"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["href", "javascript:void(0)"]], template: function DeliveryBlockComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275template(2, DeliveryBlockComponent_div_2_Template, 8, 3, "div", 2)(3, DeliveryBlockComponent_div_3_Template, 8, 2, "div", 2)(4, DeliveryBlockComponent_div_4_Template, 9, 6, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.setting == null ? null : ctx.setting.delivery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.setting == null ? null : ctx.setting.delivery == null ? null : ctx.setting.delivery.same_day_delivery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.setting == null ? null : ctx.setting.delivery == null ? null : ctx.setting.delivery.same_day_delivery);
  }
}, dependencies: [NgForOf, NgIf, TranslatePipe] });
var DeliveryBlockComponent = _DeliveryBlockComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryBlockComponent, { className: "DeliveryBlockComponent", filePath: "src\\app\\components\\shop\\checkout\\delivery-block\\delivery-block.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/checkout/payment-block/payment-block.component.ts
function PaymentBlockComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "input", 8);
    \u0275\u0275listener("change", function PaymentBlockComponent_ng_container_2_div_1_Template_input_change_4_listener() {
      \u0275\u0275restoreView(_r1);
      const payment_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set(payment_r2.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const payment_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", i_r5 === 0)("id", payment_r2.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("for", payment_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, payment_r2.title ? payment_r2.title : payment_r2.name), " ");
  }
}
function PaymentBlockComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentBlockComponent_ng_container_2_div_1_Template, 8, 6, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r2.status);
  }
}
var _PaymentBlockComponent = class _PaymentBlockComponent {
  constructor() {
    this.selectPaymentMethod = new EventEmitter();
  }
  ngOnInit() {
    if (this.setting && this.setting?.payment_methods?.length > 0) {
      if (this.setting?.payment_methods?.[0].status) {
        this.selectPaymentMethod.emit(this.setting?.payment_methods?.[0].name);
      }
    }
  }
  set(value) {
    this.selectPaymentMethod.emit(value);
  }
};
_PaymentBlockComponent.\u0275fac = function PaymentBlockComponent_Factory(t) {
  return new (t || _PaymentBlockComponent)();
};
_PaymentBlockComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentBlockComponent, selectors: [["app-payment-block"]], inputs: { setting: "setting" }, outputs: { selectPaymentMethod: "selectPaymentMethod" }, decls: 3, vars: 1, consts: [[1, "checkout-detail"], [1, "row", "g-sm-4", "g-3"], [4, "ngFor", "ngForOf"], ["class", "col-xxl-6", 4, "ngIf"], [1, "col-xxl-6"], [1, "payment-option"], [1, "payment-category", "w-100"], [1, "form-check", "custom-form-check", "hide-check-box", "w-100"], ["type", "radio", "name", "payment_method", 1, "form-check-input", 3, "change", "checked", "id"], [1, "form-check-label", 3, "for"]], template: function PaymentBlockComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275template(2, PaymentBlockComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.setting.payment_methods);
  }
}, dependencies: [NgForOf, NgIf, UpperCasePipe] });
var PaymentBlockComponent = _PaymentBlockComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentBlockComponent, { className: "PaymentBlockComponent", filePath: "src\\app\\components\\shop\\checkout\\payment-block\\payment-block.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/checkout/checkout.component.ts
var _c029 = ["addressModal"];
var _c17 = ["cpn"];
var _c24 = () => [];
function CheckoutComponent_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "name_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "email_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function CheckoutComponent_div_6_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r2 == null ? null : data_r2.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.code);
  }
}
function CheckoutComponent_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_41_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "password_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 25)(2, "label", 77);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 78);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275template(7, CheckoutComponent_div_6_div_41_div_7_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "password"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 5, "enter_password"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.form == null ? null : ctx_r2.form.controls == null ? null : ctx_r2.form.controls["password"] == null ? null : ctx_r2.form.controls["password"].touched) && (ctx_r2.form.controls["password"] == null ? null : ctx_r2.form.controls["password"].errors == null ? null : ctx_r2.form.controls["password"].errors["required"]));
  }
}
function CheckoutComponent_div_6_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "title_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "address_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "country_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "state_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "city_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "pincode_is_required"), " ");
  }
}
function CheckoutComponent_div_6_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r4 == null ? null : data_r4.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.code);
  }
}
function CheckoutComponent_div_6_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275element(2, "input", 79);
    \u0275\u0275elementStart(3, "label", 80);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "same_as_shipping"));
  }
}
function CheckoutComponent_div_6_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "title_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "address_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "country_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "state_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "city_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "pincode_is_required"), " ");
  }
}
function CheckoutComponent_div_6_ng_template_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r5 == null ? null : data_r5.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.code);
  }
}
function CheckoutComponent_div_6_div_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_is_required"), " ");
  }
}
function CheckoutComponent_div_6_div_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_payment_options_found"));
  }
}
function CheckoutComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 23)(7, "div", 24)(8, "div", 25)(9, "label", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 27);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275template(14, CheckoutComponent_div_6_div_14_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "div", 25)(17, "label", 29);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 30);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275template(22, CheckoutComponent_div_6_div_22_Template, 3, 3, "div", 28)(23, CheckoutComponent_div_6_div_23_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 31)(25, "div", 32)(26, "label", 33);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select2", 34);
    \u0275\u0275template(30, CheckoutComponent_div_6_ng_template_30_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 35);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, CheckoutComponent_div_6_div_34_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 36)(36, "div", 37);
    \u0275\u0275element(37, "input", 38);
    \u0275\u0275elementStart(38, "label", 39);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, CheckoutComponent_div_6_div_41_Template, 8, 7, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 21)(43, "div", 22)(44, "h2");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "form", 41)(48, "div", 42)(49, "div", 36)(50, "div", 25)(51, "label", 43);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 44);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275template(56, CheckoutComponent_div_6_div_56_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 45)(58, "div", 25)(59, "label", 46);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 47);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275template(64, CheckoutComponent_div_6_div_64_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 48)(66, "div", 25)(67, "label", 49);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "select2", 50);
    \u0275\u0275pipe(71, "async");
    \u0275\u0275pipe(72, "async");
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275listener("update", function CheckoutComponent_div_6_Template_select2_update_70_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shippingCountryChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, CheckoutComponent_div_6_div_74_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 48)(76, "div", 25)(77, "label", 51);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "select2", 52);
    \u0275\u0275pipe(81, "async");
    \u0275\u0275pipe(82, "async");
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275template(84, CheckoutComponent_div_6_div_84_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 48)(86, "div", 25)(87, "label", 53);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 54);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275template(92, CheckoutComponent_div_6_div_92_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 48)(94, "div", 25)(95, "label", 55);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 56);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275template(100, CheckoutComponent_div_6_div_100_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 57)(102, "div", 32)(103, "label", 58);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "select2", 34);
    \u0275\u0275template(107, CheckoutComponent_div_6_ng_template_107_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 35);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(111, CheckoutComponent_div_6_div_111_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(112, "div", 21)(113, "div", 22)(114, "h2");
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "form", 41)(118, "div", 59);
    \u0275\u0275template(119, CheckoutComponent_div_6_div_119_Template, 6, 3, "div", 60);
    \u0275\u0275elementStart(120, "div", 36)(121, "div", 25)(122, "label", 26);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(125, "input", 61);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275template(127, CheckoutComponent_div_6_div_127_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 45)(129, "div", 25)(130, "label", 62);
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "input", 63);
    \u0275\u0275pipe(134, "translate");
    \u0275\u0275template(135, CheckoutComponent_div_6_div_135_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 48)(137, "div", 25)(138, "label", 64);
    \u0275\u0275text(139);
    \u0275\u0275pipe(140, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "select2", 50);
    \u0275\u0275pipe(142, "async");
    \u0275\u0275pipe(143, "async");
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275listener("update", function CheckoutComponent_div_6_Template_select2_update_141_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.billingCountryChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(145, CheckoutComponent_div_6_div_145_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 48)(147, "div", 25)(148, "label", 65);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(151, "select2", 52);
    \u0275\u0275pipe(152, "async");
    \u0275\u0275pipe(153, "async");
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275template(155, CheckoutComponent_div_6_div_155_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 48)(157, "div", 25)(158, "label", 66);
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(161, "input", 67);
    \u0275\u0275pipe(162, "translate");
    \u0275\u0275template(163, CheckoutComponent_div_6_div_163_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 48)(165, "div", 25)(166, "label", 68);
    \u0275\u0275text(167);
    \u0275\u0275pipe(168, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(169, "input", 69);
    \u0275\u0275pipe(170, "translate");
    \u0275\u0275template(171, CheckoutComponent_div_6_div_171_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "div", 57)(173, "div", 32)(174, "label", 58);
    \u0275\u0275text(175);
    \u0275\u0275pipe(176, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "select2", 34);
    \u0275\u0275template(178, CheckoutComponent_div_6_ng_template_178_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(180, "input", 35);
    \u0275\u0275pipe(181, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(182, CheckoutComponent_div_6_div_182_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(183, "div", 21)(184, "div", 22)(185, "h2");
    \u0275\u0275text(186);
    \u0275\u0275pipe(187, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "app-delivery-block", 70);
    \u0275\u0275pipe(189, "async");
    \u0275\u0275listener("selectDelivery", function CheckoutComponent_div_6_Template_app_delivery_block_selectDelivery_188_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectDelivery($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "div", 21)(191, "div", 22)(192, "h2");
    \u0275\u0275text(193);
    \u0275\u0275pipe(194, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(195, CheckoutComponent_div_6_div_195_Template, 4, 3, "div", 71);
    \u0275\u0275pipe(196, "async");
    \u0275\u0275elementStart(197, "app-payment-block", 72);
    \u0275\u0275pipe(198, "async");
    \u0275\u0275listener("selectPaymentMethod", function CheckoutComponent_div_6_Template_app_payment_block_selectPaymentMethod_197_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPaymentMethod($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_25_0;
    let tmp_28_0;
    let tmp_32_0;
    let tmp_36_0;
    let tmp_39_0;
    let tmp_42_0;
    let tmp_47_0;
    let tmp_53_0;
    let tmp_56_0;
    let tmp_60_0;
    let tmp_64_0;
    let tmp_67_0;
    let tmp_70_0;
    let tmp_75_0;
    let tmp_79_0;
    const template_r6 = \u0275\u0275reference(31);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 76, "account_details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 78, "name"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(13, 80, "enter_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.form == null ? null : ctx_r2.form.controls == null ? null : ctx_r2.form.controls["name"] == null ? null : ctx_r2.form.controls["name"].touched) && (ctx_r2.form.controls["name"] == null ? null : ctx_r2.form.controls["name"].errors == null ? null : ctx_r2.form.controls["name"].errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 82, "email"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(21, 84, "enter_email_address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.form == null ? null : ctx_r2.form.controls == null ? null : ctx_r2.form.controls["email"] == null ? null : ctx_r2.form.controls["email"].touched) && (ctx_r2.form.controls["email"] == null ? null : ctx_r2.form.controls["email"].errors == null ? null : ctx_r2.form.controls["email"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.controls["email"].touched && (ctx_r2.form.controls["email"].errors == null ? null : ctx_r2.form.controls["email"].errors["email"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 86, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("templates", template_r6)("data", ctx_r2.codes);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(33, 88, "enter_phone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.form == null ? null : ctx_r2.form.controls == null ? null : ctx_r2.form.controls["phone"] == null ? null : ctx_r2.form.controls["phone"].touched) && (ctx_r2.form.controls["phone"] == null ? null : ctx_r2.form.controls["phone"].errors == null ? null : ctx_r2.form.controls["phone"].errors["required"]));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 90, "create_an_account?"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.controls["create_account"].value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 92, "shipping_details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 94, "title"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(55, 96, "enter_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_25_0 = ctx_r2.form.get("shipping_address.title")) == null ? null : tmp_25_0.touched) && ((tmp_25_0 = ctx_r2.form.get("shipping_address.title")) == null ? null : tmp_25_0.errors == null ? null : tmp_25_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 98, "address"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(63, 100, "enter_address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_28_0 = ctx_r2.form.get("shipping_address.street")) == null ? null : tmp_28_0.touched) && ((tmp_28_0 = ctx_r2.form.get("shipping_address.street")) == null ? null : tmp_28_0.errors == null ? null : tmp_28_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 102, "country"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", \u0275\u0275pipeBind1(71, 104, ctx_r2.countries$) ? \u0275\u0275pipeBind1(72, 106, ctx_r2.countries$) : \u0275\u0275pureFunction0(178, _c24))("placeholder", \u0275\u0275pipeBind1(73, 108, "select_country"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_32_0 = ctx_r2.form.get("shipping_address.country_id")) == null ? null : tmp_32_0.touched) && ((tmp_32_0 = ctx_r2.form.get("shipping_address.country_id")) == null ? null : tmp_32_0.errors == null ? null : tmp_32_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 110, "state"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", \u0275\u0275pipeBind1(81, 112, ctx_r2.shippingStates$) ? \u0275\u0275pipeBind1(82, 114, ctx_r2.shippingStates$) : \u0275\u0275pureFunction0(179, _c24))("placeholder", \u0275\u0275pipeBind1(83, 116, "select_state"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_36_0 = ctx_r2.form.get("shipping_address.state_id")) == null ? null : tmp_36_0.touched) && ((tmp_36_0 = ctx_r2.form.get("shipping_address.state_id")) == null ? null : tmp_36_0.errors == null ? null : tmp_36_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 118, "city"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(91, 120, "enter_city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_39_0 = ctx_r2.form.get("shipping_address.city")) == null ? null : tmp_39_0.touched) && ((tmp_39_0 = ctx_r2.form.get("shipping_address.city")) == null ? null : tmp_39_0.errors == null ? null : tmp_39_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 122, "pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(99, 124, "enter_pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_42_0 = ctx_r2.form.get("shipping_address.pincode")) == null ? null : tmp_42_0.touched) && ((tmp_42_0 = ctx_r2.form.get("shipping_address.pincode")) == null ? null : tmp_42_0.errors == null ? null : tmp_42_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 126, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("templates", template_r6)("data", ctx_r2.codes);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(110, 128, "enter_phone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_47_0 = ctx_r2.form.get("shipping_address.phone")) == null ? null : tmp_47_0.touched) && ((tmp_47_0 = ctx_r2.form.get("shipping_address.phone")) == null ? null : tmp_47_0.errors == null ? null : tmp_47_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 130, "billing_details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.controls["shipping_address"] == null ? null : ctx_r2.form.controls["shipping_address"].valid);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 132, "title"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(126, 134, "enter_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_53_0 = ctx_r2.form.get("billing_address.title")) == null ? null : tmp_53_0.touched) && ((tmp_53_0 = ctx_r2.form.get("billing_address.title")) == null ? null : tmp_53_0.errors == null ? null : tmp_53_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(132, 136, "address"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(134, 138, "enter_address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_56_0 = ctx_r2.form.get("billing_address.street")) == null ? null : tmp_56_0.touched) && ((tmp_56_0 = ctx_r2.form.get("billing_address.street")) == null ? null : tmp_56_0.errors == null ? null : tmp_56_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 140, "country"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", \u0275\u0275pipeBind1(142, 142, ctx_r2.countries$) ? \u0275\u0275pipeBind1(143, 144, ctx_r2.countries$) : \u0275\u0275pureFunction0(180, _c24))("placeholder", \u0275\u0275pipeBind1(144, 146, "select_country"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_60_0 = ctx_r2.form.get("billing_address.country_id")) == null ? null : tmp_60_0.touched) && ((tmp_60_0 = ctx_r2.form.get("billing_address.country_id")) == null ? null : tmp_60_0.errors == null ? null : tmp_60_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(150, 148, "state"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", \u0275\u0275pipeBind1(152, 150, ctx_r2.billingStates$) ? \u0275\u0275pipeBind1(153, 152, ctx_r2.billingStates$) : \u0275\u0275pureFunction0(181, _c24))("placeholder", \u0275\u0275pipeBind1(154, 154, "select_state"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_64_0 = ctx_r2.form.get("billing_address.state_id")) == null ? null : tmp_64_0.touched) && ((tmp_64_0 = ctx_r2.form.get("billing_address.state_id")) == null ? null : tmp_64_0.errors == null ? null : tmp_64_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 156, "city"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(162, 158, "enter_city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_67_0 = ctx_r2.form.get("billing_address.city")) == null ? null : tmp_67_0.touched) && ((tmp_67_0 = ctx_r2.form.get("billing_address.city")) == null ? null : tmp_67_0.errors == null ? null : tmp_67_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(168, 160, "pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(170, 162, "enter_pincode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_70_0 = ctx_r2.form.get("billing_address.pincode")) == null ? null : tmp_70_0.touched) && ((tmp_70_0 = ctx_r2.form.get("billing_address.pincode")) == null ? null : tmp_70_0.errors == null ? null : tmp_70_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 164, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("templates", template_r6)("data", ctx_r2.codes);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(181, 166, "enter_phone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_75_0 = ctx_r2.form.get("billing_address.phone")) == null ? null : tmp_75_0.touched) && ((tmp_75_0 = ctx_r2.form.get("billing_address.phone")) == null ? null : tmp_75_0.errors == null ? null : tmp_75_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(187, 168, "delivery_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(189, 170, ctx_r2.setting$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(194, 172, "payment_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_79_0 = \u0275\u0275pipeBind1(196, 174, ctx_r2.setting$)) == null ? null : tmp_79_0.payment_methods == null ? null : tmp_79_0.payment_methods.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(198, 176, ctx_r2.setting$));
  }
}
function CheckoutComponent_div_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 83);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "div", 92)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 87);
    \u0275\u0275listener("click", function CheckoutComponent_div_9_li_2_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.AddressModal.openModal());
    });
    \u0275\u0275element(9, "i", 88);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 89)(13, "app-address-block", 90);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("selectAddress", function CheckoutComponent_div_9_li_2_Template_app_address_block_selectAddress_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectShippingAddress($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "shipping_address"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "add_new"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("addresses", (tmp_5_0 = \u0275\u0275pipeBind1(14, 8, ctx_r2.user$)) == null ? null : tmp_5_0.address)("type", "shipping");
  }
}
function CheckoutComponent_div_9_li_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_delivery_options_found"));
  }
}
function CheckoutComponent_div_9_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 83);
    \u0275\u0275element(2, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "div", 92)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CheckoutComponent_div_9_li_19_div_8_Template, 4, 3, "div", 71);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementStart(10, "app-delivery-block", 70);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("selectDelivery", function CheckoutComponent_div_9_li_19_Template_app_delivery_block_selectDelivery_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectDelivery($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "delivery_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(9, 5, ctx_r2.user$));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(11, 7, ctx_r2.setting$));
  }
}
function CheckoutComponent_div_9_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_payment_options_found"));
  }
}
function CheckoutComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "ul");
    \u0275\u0275template(2, CheckoutComponent_div_9_li_2_Template, 15, 10, "li", 19);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "li")(5, "div", 83);
    \u0275\u0275element(6, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 85)(8, "div", 86)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 87);
    \u0275\u0275listener("click", function CheckoutComponent_div_9_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.AddressModal.openModal());
    });
    \u0275\u0275element(13, "i", 88);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 89)(17, "app-address-block", 90);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275listener("selectAddress", function CheckoutComponent_div_9_Template_app_address_block_selectAddress_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectBillingAddress($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(19, CheckoutComponent_div_9_li_19_Template, 12, 9, "li", 19);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementStart(21, "li")(22, "div", 83);
    \u0275\u0275element(23, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 85)(25, "div", 92)(26, "h4");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, CheckoutComponent_div_9_div_29_Template, 4, 3, "div", 71);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275elementStart(31, "app-payment-block", 72);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275listener("selectPaymentMethod", function CheckoutComponent_div_9_Template_app_payment_block_selectPaymentMethod_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPaymentMethod($event));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(3, 9, ctx_r2.cartDigital$));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "billing_address"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "add_new"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("addresses", (tmp_5_0 = \u0275\u0275pipeBind1(18, 15, ctx_r2.user$)) == null ? null : tmp_5_0.address)("type", "billing");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(20, 17, ctx_r2.cartDigital$));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 19, "payment_options"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(30, 21, ctx_r2.user$));
    \u0275\u0275advance(2);
    \u0275\u0275property("setting", \u0275\u0275pipeBind1(32, 23, ctx_r2.setting$));
  }
}
function CheckoutComponent_app_no_data_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 94);
  }
  if (rf & 2) {
    \u0275\u0275classMap("empty-cart");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_items_cart");
  }
}
function CheckoutComponent_ul_22_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 97);
    \u0275\u0275elementStart(2, "div", 98)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 99);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 100);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currencySymbol");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r10 == null ? null : item_r10.variation) && (item_r10 == null ? null : item_r10.variation == null ? null : item_r10.variation.variation_image) ? item_r10 == null ? null : item_r10.variation == null ? null : item_r10.variation.variation_image == null ? null : item_r10.variation.variation_image.original_url : (item_r10 == null ? null : item_r10.product == null ? null : item_r10.product.product_thumbnail) ? item_r10 == null ? null : item_r10.product == null ? null : item_r10.product.product_thumbnail == null ? null : item_r10.product.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r10 == null ? null : item_r10.variation) ? item_r10 == null ? null : item_r10.variation == null ? null : item_r10.variation.name : item_r10 == null ? null : item_r10.product == null ? null : item_r10.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 5, (item_r10 == null ? null : item_r10.variation) ? item_r10.variation.sale_price : (item_r10 == null ? null : item_r10.product) && (item_r10 == null ? null : item_r10.wholesale_price) ? item_r10 == null ? null : item_r10.wholesale_price : item_r10 == null ? null : item_r10.product == null ? null : item_r10.product.sale_price), " X ", item_r10.quantity, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, ((item_r10 == null ? null : item_r10.variation) ? item_r10.variation.sale_price : (item_r10 == null ? null : item_r10.product) && (item_r10 == null ? null : item_r10.wholesale_price) ? item_r10 == null ? null : item_r10.wholesale_price : item_r10 == null ? null : item_r10.product == null ? null : item_r10.product.sale_price) * item_r10.quantity), " ");
  }
}
function CheckoutComponent_ul_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 95);
    \u0275\u0275template(1, CheckoutComponent_ul_22_li_1_Template, 11, 9, "li", 96);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.cartItem$));
  }
}
function CheckoutComponent_ng_container_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "app-loader", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("loaderClass", "custom-loader-wrapper blur-bg");
  }
}
function CheckoutComponent_ng_container_24_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 100);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "shipping"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkoutTotal ? \u0275\u0275pipeBind1(6, 4, ctx_r2.checkoutTotal.total.shipping_total) : \u0275\u0275pipeBind1(7, 6, "not_calculated_yet"), " ");
  }
}
function CheckoutComponent_ng_container_24_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.form.controls["points_amount"].value ? "txt-primary fw-bold" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "points"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.form.controls["points_amount"].value ? "txt-primary fw-bold price" : "text-muted price");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkoutTotal ? \u0275\u0275pipeBind1(6, 8, ctx_r2.checkoutTotal.total.convert_point_amount) : \u0275\u0275pipeBind1(7, 10, "not_calculated_yet"), " ");
  }
}
function CheckoutComponent_ng_container_24_li_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 111)(1, "label", 112);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 113);
    \u0275\u0275listener("change", function CheckoutComponent_ng_container_24_li_26_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.togglePoint($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "point_text"));
  }
}
function CheckoutComponent_ng_container_24_li_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.form.controls["wallet_balance"].value ? "txt-primary fw-bold" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "wallet_balance"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.form.controls["wallet_balance"].value ? "txt-primary fw-bold price" : "text-muted price");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkoutTotal ? \u0275\u0275pipeBind1(6, 8, ctx_r2.checkoutTotal.total.convert_wallet_balance) : \u0275\u0275pipeBind1(7, 10, "not_calculated_yet"), " ");
  }
}
function CheckoutComponent_ng_container_24_li_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 111)(1, "label", 114);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 115);
    \u0275\u0275listener("change", function CheckoutComponent_ng_container_24_li_32_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleWallet($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "wallet_text"));
  }
}
function CheckoutComponent_ng_container_24_li_35_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 120);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_24_li_35_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showCoupon());
    });
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "have_a_promo_code?"));
  }
}
function CheckoutComponent_ng_container_24_li_35_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.couponError, " ");
  }
}
function CheckoutComponent_ng_container_24_li_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "div", 123);
    \u0275\u0275element(3, "input", 124, 2);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "app-button", 125);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_24_li_35_div_2_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const cpn_r16 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(cpn_r16.value && ctx_r2.setCoupon(cpn_r16.value));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CheckoutComponent_ng_container_24_li_35_div_2_div_9_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("coupon-error", ctx_r2.couponError);
    \u0275\u0275advance();
    \u0275\u0275classMap("form-control");
    \u0275\u0275classProp("is-invalid", ctx_r2.couponError);
    \u0275\u0275propertyInterpolate1("placeholder", "", \u0275\u0275pipeBind1(5, 14, "enter_coupon_code_here"), "...");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("btn-apply");
    \u0275\u0275property("type", "button")("id", "coupon_apply");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 16, "apply"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.couponError);
  }
}
function CheckoutComponent_ng_container_24_li_35_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div");
    \u0275\u0275element(2, "img", 127);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "a", 128);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_24_li_35_div_3_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.couponRemove());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "you_saved"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, ctx_r2.checkoutTotal.total.coupon_total_discount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "with_this_code"), " \u{1F389} ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "coupon_applied"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "remove"));
  }
}
function CheckoutComponent_ng_container_24_li_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 116);
    \u0275\u0275template(1, CheckoutComponent_ng_container_24_li_35_a_1_Template, 4, 3, "a", 117)(2, CheckoutComponent_ng_container_24_li_35_div_2_Template, 10, 18, "div", 118)(3, CheckoutComponent_ng_container_24_li_35_div_3_Template, 17, 15, "div", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.coupon && !ctx_r2.appliedCoupon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.coupon && !ctx_r2.appliedCoupon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.appliedCoupon);
  }
}
function CheckoutComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 101);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_ng_container_24_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.placeorder());
    });
    \u0275\u0275elementStart(2, "div", 102);
    \u0275\u0275template(3, CheckoutComponent_ng_container_24_div_3_Template, 2, 1, "div", 103);
    \u0275\u0275elementStart(4, "ul", 104)(5, "li")(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4", 100);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currencySymbol");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, CheckoutComponent_ng_container_24_li_13_Template, 8, 8, "li", 19);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "li")(16, "h4");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h4", 100);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currencySymbol");
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, CheckoutComponent_ng_container_24_li_23_Template, 8, 12, "li", 19);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275pipe(25, "async");
    \u0275\u0275template(26, CheckoutComponent_ng_container_24_li_26_Template, 5, 3, "li", 105);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275pipe(28, "async");
    \u0275\u0275template(29, CheckoutComponent_ng_container_24_li_29_Template, 8, 12, "li", 19);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275pipe(31, "async");
    \u0275\u0275template(32, CheckoutComponent_ng_container_24_li_32_Template, 5, 3, "li", 105);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275pipe(34, "async");
    \u0275\u0275template(35, CheckoutComponent_ng_container_24_li_35_Template, 4, 3, "li", 106);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementStart(37, "li", 107)(38, "h4");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h4", 100);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "currencySymbol");
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "app-button", 108);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 19, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkoutTotal ? \u0275\u0275pipeBind1(11, 21, ctx_r2.checkoutTotal.total.sub_total) : \u0275\u0275pipeBind1(12, 23, "not_calculated_yet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(14, 25, ctx_r2.cartDigital$));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 27, "tax"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkoutTotal ? \u0275\u0275pipeBind1(21, 29, ctx_r2.checkoutTotal.total.tax_total) : \u0275\u0275pipeBind1(22, 31, "not_calculated_yet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(24, 33, ctx_r2.user$) && ctx_r2.checkoutTotal && ((tmp_9_0 = \u0275\u0275pipeBind1(25, 35, ctx_r2.user$)) == null ? null : tmp_9_0.point == null ? null : tmp_9_0.point.balance));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(27, 37, ctx_r2.user$) && ctx_r2.checkoutTotal && ((tmp_10_0 = \u0275\u0275pipeBind1(28, 39, ctx_r2.user$)) == null ? null : tmp_10_0.point == null ? null : tmp_10_0.point.balance));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(30, 41, ctx_r2.user$) && ctx_r2.checkoutTotal && ((tmp_11_0 = \u0275\u0275pipeBind1(31, 43, ctx_r2.user$)) == null ? null : tmp_11_0.wallet == null ? null : tmp_11_0.wallet.balance));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(33, 45, ctx_r2.user$) && ctx_r2.checkoutTotal && ((tmp_12_0 = \u0275\u0275pipeBind1(34, 47, ctx_r2.user$)) == null ? null : tmp_12_0.wallet == null ? null : tmp_12_0.wallet.balance));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(36, 49, ctx_r2.user$) && ctx_r2.checkoutTotal);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 51, "total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkoutTotal ? \u0275\u0275pipeBind1(43, 53, ctx_r2.checkoutTotal.total.total) : \u0275\u0275pipeBind1(44, 55, "not_calculated_yet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold");
    \u0275\u0275property("id", "place_order")("disabled", ctx_r2.form.valid && ctx_r2.checkoutTotal ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 57, "place_order"), " ");
  }
}
var _CheckoutComponent = class _CheckoutComponent {
  constructor(store, router, formBuilder, cartService) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.cartService = cartService;
    this.breadcrumb = {
      title: "Checkout",
      items: [{ label: "Checkout", active: true }]
    };
    this.coupon = true;
    this.appliedCoupon = false;
    this.loading = false;
    this.codes = countryCodes;
    this.store.dispatch(new GetSettingOption());
    this.form = this.formBuilder.group({
      products: this.formBuilder.array([], [Validators.required]),
      shipping_address_id: new FormControl("", [Validators.required]),
      billing_address_id: new FormControl("", [Validators.required]),
      points_amount: new FormControl(false),
      wallet_balance: new FormControl(false),
      coupon: new FormControl(),
      delivery_description: new FormControl("", [Validators.required]),
      delivery_interval: new FormControl(),
      payment_method: new FormControl("", [Validators.required]),
      create_account: new FormControl(false),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      country_code: new FormControl("91", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      password: new FormControl(),
      shipping_address: new FormGroup({
        title: new FormControl("", [Validators.required]),
        street: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required]),
        pincode: new FormControl("", [Validators.required]),
        country_code: new FormControl("91", [Validators.required]),
        country_id: new FormControl("", [Validators.required]),
        state_id: new FormControl("", [Validators.required])
      }),
      billing_address: new FormGroup({
        same_shipping: new FormControl(false),
        title: new FormControl("", [Validators.required]),
        street: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required]),
        pincode: new FormControl("", [Validators.required]),
        country_code: new FormControl("91", [Validators.required]),
        country_id: new FormControl("", [Validators.required]),
        state_id: new FormControl("", [Validators.required])
      })
    });
    this.store.selectSnapshot((state) => state.setting).setting.activation.guest_checkout = true;
    if (this.store.selectSnapshot((state) => state.auth && state.auth.access_token)) {
      this.form.removeControl("create_account");
      this.form.removeControl("name");
      this.form.removeControl("email");
      this.form.removeControl("country_code");
      this.form.removeControl("phone");
      this.form.removeControl("password");
      this.form.removeControl("password_confirmation");
      this.form.removeControl("shipping_address");
      this.form.removeControl("billing_address");
      this.cartDigital$.subscribe((value) => {
        if (value == 1) {
          this.form.controls["shipping_address_id"].clearValidators();
          this.form.controls["delivery_description"].clearValidators();
        } else {
          this.form.controls["shipping_address_id"].setValidators([Validators.required]);
          this.form.controls["delivery_description"].setValidators([Validators.required]);
        }
        this.form.controls["shipping_address_id"].updateValueAndValidity();
        this.form.controls["delivery_description"].updateValueAndValidity();
      });
    } else {
      if (this.store.selectSnapshot((state) => state.setting).setting.activation.guest_checkout) {
        this.form.removeControl("shipping_address_id");
        this.form.removeControl("billing_address_id");
        this.form.removeControl("points_amount");
        this.form.removeControl("wallet_balance");
        this.form.controls["create_account"].valueChanges.subscribe((value) => {
          if (value) {
            this.form.controls["name"].setValidators([Validators.required]);
            this.form.controls["password"].setValidators([Validators.required]);
          } else {
            this.form.controls["name"].clearValidators();
            this.form.controls["password"].clearValidators();
          }
          this.form.controls["name"].updateValueAndValidity();
          this.form.controls["password"].updateValueAndValidity();
        });
        this.form.statusChanges.subscribe((value) => {
          if (value == "VALID") {
            this.checkout();
          }
        });
      }
    }
    this.form.get("billing_address.same_shipping")?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get("billing_address.title")?.setValue(this.form.get("shipping_address.title")?.value);
        this.form.get("billing_address.street")?.setValue(this.form.get("shipping_address.street")?.value);
        this.form.get("billing_address.country_id")?.setValue(this.form.get("shipping_address.country_id")?.value);
        this.form.get("billing_address.state_id")?.setValue(this.form.get("shipping_address.state_id")?.value);
        this.form.get("billing_address.city")?.setValue(this.form.get("shipping_address.city")?.value);
        this.form.get("billing_address.pincode")?.setValue(this.form.get("shipping_address.pincode")?.value);
        this.form.get("billing_address.country_code")?.setValue(this.form.get("shipping_address.country_code")?.value);
        this.form.get("billing_address.phone")?.setValue(this.form.get("shipping_address.phone")?.value);
      } else {
        this.form.get("billing_address.title")?.setValue("");
        this.form.get("billing_address.street")?.setValue("");
        this.form.get("billing_address.country_id")?.setValue("");
        this.form.get("billing_address.state_id")?.setValue("");
        this.form.get("billing_address.city")?.setValue("");
        this.form.get("billing_address.pincode")?.setValue("");
        this.form.get("billing_address.country_code")?.setValue("");
        this.form.get("billing_address.phone")?.setValue("");
      }
    });
    this.cartService.getUpdateQtyClickEvent().subscribe(() => {
      this.products();
      this.checkout();
    });
  }
  get productControl() {
    return this.form.get("products");
  }
  ngOnInit() {
    this.checkout$.subscribe((data) => this.checkoutTotal = data);
    this.products();
  }
  products() {
    this.cartItem$.subscribe((items) => {
      this.productControl.clear();
      items.forEach((item) => this.productControl.push(this.formBuilder.group({
        product_id: new FormControl(item?.product_id, [Validators.required]),
        variation_id: new FormControl(item?.variation_id ? item?.variation_id : ""),
        quantity: new FormControl(item?.quantity)
      })));
    });
  }
  selectShippingAddress(id) {
    if (id) {
      this.form.controls["shipping_address_id"].setValue(Number(id));
      this.checkout();
    }
  }
  selectBillingAddress(id) {
    if (id) {
      this.form.controls["billing_address_id"].setValue(Number(id));
      this.checkout();
    }
  }
  selectDelivery(value) {
    this.form.controls["delivery_description"].setValue(value?.delivery_description);
    this.form.controls["delivery_interval"].setValue(value?.delivery_interval);
    this.checkout();
  }
  selectPaymentMethod(value) {
    this.form.controls["payment_method"].setValue(value);
    this.checkout();
  }
  togglePoint(event) {
    this.form.controls["points_amount"].setValue(event.target?.checked);
    this.checkout();
  }
  toggleWallet(event) {
    this.form.controls["wallet_balance"].setValue(event.target?.checked);
    this.checkout();
  }
  showCoupon() {
    this.coupon = true;
  }
  setCoupon(value) {
    this.couponError = null;
    if (value)
      this.form.controls["coupon"].setValue(value);
    else
      this.form.controls["coupon"].reset();
    this.store.dispatch(new Checkout(this.form.value)).subscribe({
      error: (err) => {
        this.couponError = err.message;
      },
      complete: () => {
        this.appliedCoupon = value ? true : false;
        this.couponError = null;
      }
    });
  }
  couponRemove() {
    this.setCoupon();
  }
  shippingCountryChange(data) {
    if (data && data?.value) {
      this.shippingStates$ = this.store.select(StateState.states).pipe(map((filterFn) => filterFn(+data?.value)));
    } else {
      this.form.get("shipping_address.state_id")?.setValue("");
      this.shippingStates$ = of();
    }
  }
  billingCountryChange(data) {
    if (data && data?.value) {
      this.billingStates$ = this.store.select(StateState.states).pipe(map((filterFn) => filterFn(+data?.value)));
      if (this.form.get("billing_address.same_shipping")?.value) {
        setTimeout(() => {
          this.form.get("billing_address.state_id")?.setValue(this.form.get("shipping_address.state_id")?.value);
        }, 200);
      }
    } else {
      this.form.get("billing_address.state_id")?.setValue("");
      this.billingStates$ = of();
    }
  }
  checkout() {
    if (this.couponError) {
      this.couponError = null;
      this.cpnRef.nativeElement.value = "";
      this.form.controls["coupon"].reset();
    }
    if (this.form.valid) {
      this.loading = true;
      this.store.dispatch(new Checkout(this.form.value)).subscribe({
        error: (err) => {
          this.loading = false;
          throw new Error(err);
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      const invalidFields = Object?.keys(this.form?.controls).filter((key) => this.form.controls[key].invalid);
    }
  }
  placeorder() {
    if (this.form.valid) {
      if (this.cpnRef && !this.cpnRef.nativeElement.value) {
        this.form.controls["coupon"].reset();
      }
      this.store.dispatch(new PlaceOrder(this.form.value));
    }
  }
  clearCart() {
    this.store.dispatch(new ClearCart());
  }
  ngOnDestroy() {
    this.store.dispatch(new ClearCart());
    this.form.reset();
  }
};
_CheckoutComponent.\u0275fac = function CheckoutComponent_Factory(t) {
  return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CartService));
};
_CheckoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], viewQuery: function CheckoutComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c029, 5);
    \u0275\u0275viewQuery(_c17, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.AddressModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cpnRef = _t.first);
  }
}, decls: 28, vars: 21, consts: [["addressModal", ""], ["template", ""], ["cpn", ""], [3, "breadcrumb"], [1, "checkout-section-2", "section-b-space"], [1, "container-fluid-lg"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-8", "col-xl-7"], [1, "left-sidebar-checkout"], ["class", "checkout-form-section", 4, "ngIf"], ["class", "checkout-detail-box", 4, "ngIf"], [1, "col-xxl-4", "col-xl-5"], [1, "card", "pos-detail-card"], [1, "card-body"], [1, "title-header"], [1, "d-flex", "align-items-center"], [1, "product-details"], [3, "class", "image", "text", 4, "ngIf"], ["class", "cart-listing", 4, "ngIf"], [4, "ngIf"], [1, "checkout-form-section"], [1, "checkbox-main-box"], [1, "checkout-title1"], [1, "checkout-form", "row", 3, "formGroup"], [1, "col-md-4"], [1, "mb-3", "form-box"], ["for", "name", 1, "form-label"], ["type", "text", "formControlName", "name", "id", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "email", 1, "form-control", 3, "placeholder"], [1, "col-md-4", "phone-field"], [1, "form-box", "position-relative"], ["for", "phoneno", 1, "form-label"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "templates", "data"], ["type", "number", "formControlName", "phone", "name", "phone", 1, "form-control", "intl-input-padding", 3, "placeholder"], [1, "col-md-12"], [1, "mb-3", "form-box", "form-checkbox"], ["type", "checkbox", "id", "account", "formControlName", "create_account", 1, "form-check-input", "checkbox_animated"], ["for", "account", 1, "form-check-label"], ["class", "col-md-6", 4, "ngIf"], [1, "checkout-form", 3, "formGroup"], ["formGroupName", "shipping_address", 1, "row"], ["for", "sname", 1, "form-label"], ["type", "text", "formControlName", "title", "id", "sname", 1, "form-control", 3, "placeholder"], [1, "col-12"], ["for", "saddress", 1, "form-label"], ["type", "text", "formControlName", "street", "id", "saddress", 1, "form-control", 3, "placeholder"], [1, "col-md-6"], ["for", "scountry", 1, "form-label"], ["formControlName", "country_id", "resettable", "", 1, "custom-select", 3, "update", "data", "placeholder"], ["for", "sstate", 1, "form-label"], ["formControlName", "state_id", 1, "custom-select", 3, "data", "placeholder"], ["for", "scity", 1, "form-label"], ["type", "text", "formControlName", "city", "id", "scity", 1, "form-control", 3, "placeholder"], ["for", "spincode", 1, "form-label"], ["type", "text", "formControlName", "pincode", "id", "spincode", 1, "form-control", 3, "placeholder"], [1, "col-md-12", "phone-field"], ["for", "phone", 1, "form-label"], ["formGroupName", "billing_address", 1, "row"], ["class", "col-md-12", 4, "ngIf"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", 3, "placeholder"], ["for", "address", 1, "form-label"], ["type", "text", "formControlName", "street", "id", "address", 1, "form-control", 3, "placeholder"], ["for", "country", 1, "form-label"], ["for", "state", 1, "form-label"], ["for", "city", 1, "form-label"], ["type", "text", "formControlName", "city", "id", "city", 1, "form-control", 3, "placeholder"], ["for", "pincode", 1, "form-label"], ["type", "text", "formControlName", "pincode", "id", "pincode", 1, "form-control", 3, "placeholder"], [3, "selectDelivery", "setting"], ["class", "empty-box", 4, "ngIf"], [3, "selectPaymentMethod", "setting"], [1, "invalid-feedback"], [1, "country"], [1, "flag-box"], [1, "dial-code"], ["for", "pass", 1, "form-label"], ["type", "password", "formControlName", "password", "id", "pass", 1, "form-control", 3, "placeholder"], ["type", "checkbox", "id", "same_shipping", "formControlName", "same_shipping", 1, "form-check-input", "checkbox_animated"], ["for", "same_shipping", 1, "form-check-label"], [1, "empty-box"], [1, "checkout-detail-box"], [1, "checkout-icon"], [1, "ri-map-pin-line"], [1, "checkout-box"], ["href", "javascript:void(0)", 1, "checkout-title"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "fw-bold", 3, "click"], [1, "ri-add-line", "me-1"], [1, "checkout-detail"], [3, "selectAddress", "addresses", "type"], [1, "ri-bank-card-line"], [1, "checkout-title"], [1, "ri-truck-line"], [3, "image", "text"], [1, "cart-listing"], [4, "ngFor", "ngForOf"], ["alt", "product", 1, "img-fluid", 3, "src"], [1, "cart-content"], [1, "text-theme"], [1, "price"], [3, "ngSubmit", "formGroup"], [1, "custom-box-loader"], ["class", "box-loader", 4, "ngIf"], [1, "summary-total"], ["class", "border-cls", 4, "ngIf"], ["class", "coupon-sec", 4, "ngIf"], [1, "list-total"], [3, "id", "disabled"], [1, "box-loader"], [3, "loaderClass"], [1, "border-cls"], ["for", "ponts", 1, "form-check-label", "m-0"], ["type", "checkbox", "id", "ponts", 1, "checkbox_animated", "check-it", 3, "change"], ["for", "wallet", 1, "form-check-label", "m-0"], ["type", "checkbox", "id", "wallet", 1, "checkbox_animated", "check-it", 3, "change"], [1, "coupon-sec"], ["class", "promocode-title", 3, "click", 4, "ngIf"], ["class", "w-100", 4, "ngIf"], ["class", "apply-sec mb-3", 4, "ngIf"], [1, "promocode-title", 3, "click"], [1, "w-100"], [1, "coupon-box", "mt-2", "d-flex", "w-100"], [1, "input-group"], ["type", "text", "id", "coupon", 3, "placeholder"], [3, "click", "type", "id"], [1, "apply-sec", "mb-3"], ["src", "assets/images/offer.gif", "alt", "offer gif", 1, "img-fluid"], ["href", "javascript:void(0)", 3, "click"]], template: function CheckoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 3);
    \u0275\u0275elementStart(1, "section", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8);
    \u0275\u0275template(6, CheckoutComponent_div_6_Template, 199, 182, "div", 9);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, CheckoutComponent_div_9_Template, 33, 25, "div", 10);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "h5");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275template(20, CheckoutComponent_app_no_data_20_Template, 1, 4, "app-no-data", 17);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275template(22, CheckoutComponent_ul_22_Template, 3, 3, "ul", 18);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CheckoutComponent_ng_container_24_Template, 48, 59, "ng-container", 19);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(26, "address-modal", null, 0);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 7, ctx.setting$)) == null ? null : tmp_2_0.activation == null ? null : tmp_2_0.activation.guest_checkout) && !\u0275\u0275pipeBind1(8, 9, ctx.accessToken$));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 11, ctx.accessToken$));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "checkout"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_5_0 = \u0275\u0275pipeBind1(21, 15, ctx.cartItem$)) == null ? null : tmp_5_0.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(23, 17, ctx.cartItem$)) == null ? null : tmp_6_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_7_0 = \u0275\u0275pipeBind1(25, 19, ctx.cartItem$)) == null ? null : tmp_7_0.length);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, LoaderComponent, BreadcrumbComponent, ButtonComponent, Select2, NoDataComponent, AddressModalComponent, AddressBlockComponent, DeliveryBlockComponent, PaymentBlockComponent, AsyncPipe, CurrencySymbolPipe, TranslatePipe] });
var CheckoutComponent = _CheckoutComponent;
__decorate([
  Select(AccountState.user)
], CheckoutComponent.prototype, "user$", void 0);
__decorate([
  Select(AuthState.accessToken)
], CheckoutComponent.prototype, "accessToken$", void 0);
__decorate([
  Select(CartState.cartItems)
], CheckoutComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(OrderState.checkout)
], CheckoutComponent.prototype, "checkout$", void 0);
__decorate([
  Select(SettingState.setting)
], CheckoutComponent.prototype, "setting$", void 0);
__decorate([
  Select(CartState.cartHasDigital)
], CheckoutComponent.prototype, "cartDigital$", void 0);
__decorate([
  Select(CountryState.countries)
], CheckoutComponent.prototype, "countries$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\components\\shop\\checkout\\checkout.component.ts", lineNumber: 31 });
})();

// src/app/components/shop/order-tracking/order-tracking.component.ts
function OrderTrackingComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "order_number_is_required"), " ");
  }
}
function OrderTrackingComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "email_or_phone_is_required"), " ");
  }
}
var _OrderTrackingComponent = class _OrderTrackingComponent {
  constructor(store, formBuilder, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.router = router;
    this.breadcrumb = {
      title: "Order Tracking",
      items: [{ label: "Order Tracking", active: true }]
    };
    this.form = this.formBuilder.group({
      order_number: new FormControl("", [Validators.required]),
      email_or_phone: new FormControl("", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.router.navigate(["order/details"], { queryParams: this.form.value });
    }
  }
};
_OrderTrackingComponent.\u0275fac = function OrderTrackingComponent_Factory(t) {
  return new (t || _OrderTrackingComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
};
_OrderTrackingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderTrackingComponent, selectors: [["app-order-tracking"]], decls: 39, vars: 26, consts: [[3, "breadcrumb"], [1, "log-in-section", "background-image-2", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/order-tracking.svg", "alt", "order-tracking", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "form-floating", "theme-form-floating", "log-in-form"], ["type", "text", "id", "order_number", "formControlName", "order_number", 1, "form-control", 3, "placeholder"], ["for", "order_number"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email_or_phone", 1, "form-control", 3, "placeholder"], ["for", "email"], [3, "id"], [1, "invalid-feedback"]], template: function OrderTrackingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275element(8, "app-alert");
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "form", 11);
    \u0275\u0275listener("ngSubmit", function OrderTrackingComponent_Template_form_ngSubmit_18_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 13);
    \u0275\u0275element(21, "input", 14);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "label", 15);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, OrderTrackingComponent_div_26_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 12)(28, "div", 13);
    \u0275\u0275element(29, "input", 17);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "label", 18);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, OrderTrackingComponent_div_34_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 12)(36, "app-button", 19);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "order_tracking"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "order_tracking_description"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(22, 16, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, "order_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["order_number"].touched && (ctx.form.controls["order_number"].errors == null ? null : ctx.form.controls["order_number"].errors["required"]));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(30, 20, "enter_email_or_phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 22, "enter_email_or_phone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["email_or_phone"].touched && (ctx.form.controls["email_or_phone"].errors == null ? null : ctx.form.controls["email_or_phone"].errors["required"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "track_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 24, "track"));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, TranslatePipe] });
var OrderTrackingComponent = _OrderTrackingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderTrackingComponent, { className: "OrderTrackingComponent", filePath: "src\\app\\components\\shop\\order-tracking\\order-tracking.component.ts", lineNumber: 12 });
})();

// src/app/components/shop/order-details/order-details.component.ts
var _c030 = (a0) => ({ "d-none": a0 });
var _c18 = () => ["/order/details"];
var _c25 = (a0, a1) => ({ order_number: a0, email_or_phone: a1 });
function OrderDetailsComponent_div_5_ul_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 28)(2, "div", 29)(3, "div", 30);
    \u0275\u0275element(4, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const orderStatus_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", (orderStatus_r1 == null ? null : orderStatus_r1.sequence) <= ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c030, (orderStatus_r1 == null ? null : orderStatus_r1.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "cancelled") || (orderStatus_r1 == null ? null : orderStatus_r1.slug) == "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r1 == null ? null : orderStatus_r1.slug) == "shipped" || (orderStatus_r1 == null ? null : orderStatus_r1.slug) == "out-for-delivery")));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", orderStatus_r1 == null ? null : orderStatus_r1.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, orderStatus_r1 == null ? null : orderStatus_r1.name == null ? null : orderStatus_r1.name.replaceAll("_", " ")));
  }
}
function OrderDetailsComponent_div_5_ul_9_li_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", ctx_r1.order.order_status.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.order.order_status.name.replaceAll("_", " ")));
  }
}
function OrderDetailsComponent_div_5_ul_9_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 33);
    \u0275\u0275template(1, OrderDetailsComponent_div_5_ul_9_li_3_div_1_Template, 6, 5, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.order_status);
  }
}
function OrderDetailsComponent_div_5_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, OrderDetailsComponent_div_5_ul_9_ng_container_1_Template, 8, 10, "ng-container", 26);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, OrderDetailsComponent_div_5_ul_9_li_3_Template, 2, 1, "li", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.orderStatus$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.order_status) && (ctx_r1.order == null ? null : ctx_r1.order.order_status == null ? null : ctx_r1.order.order_status.slug) == "cancelled");
  }
}
function OrderDetailsComponent_div_5_div_10_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "h6");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "h6");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currencySymbol");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.variation) && (product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.variation == null ? null : product_r3.pivot.variation.variation_image) ? product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.variation == null ? null : product_r3.pivot.variation.variation_image == null ? null : product_r3.pivot.variation.variation_image.original_url : (product_r3 == null ? null : product_r3.product_thumbnail) ? product_r3 == null ? null : product_r3.product_thumbnail == null ? null : product_r3.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.variation) ? product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.variation == null ? null : product_r3.pivot.variation.name : product_r3 == null ? null : product_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.single_price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 7, product_r3 == null ? null : product_r3.pivot == null ? null : product_r3.pivot.subtotal));
  }
}
function OrderDetailsComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 35)(3, "table", 36)(4, "thead")(5, "tr")(6, "th", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 37);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, OrderDetailsComponent_div_5_div_10_tr_22_Template, 17, 9, "tr", 26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, "quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.products);
  }
}
function OrderDetailsComponent_div_5_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 9, "billing_address"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.billing_address.street, " ", ctx_r1.order.billing_address.city, " ", ctx_r1.getStateName(ctx_r1.order.billing_address.state_id), " ", ctx_r1.getCountryName(ctx_r1.order.billing_address.country_id), " ", ctx_r1.order.billing_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", "phone", " : +", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, " ");
  }
}
function OrderDetailsComponent_div_5_li_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 9, "shipping_address"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.shipping_address.street, " ", ctx_r1.order.shipping_address.city, " ", ctx_r1.getStateName(ctx_r1.order.shipping_address.state_id), " ", ctx_r1.getCountryName(ctx_r1.order.shipping_address.country_id), " ", ctx_r1.order.shipping_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", "phone", " : +", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, " ");
  }
}
function OrderDetailsComponent_div_5_li_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "delivery_slot"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.order.delivery_description);
  }
}
function OrderDetailsComponent_div_5_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 41)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "payment_mode"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, ctx_r1.order.payment_method));
  }
}
function OrderDetailsComponent_div_5_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 41)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "payment_status"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, ctx_r1.order.payment_status));
  }
}
function OrderDetailsComponent_div_5_li_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "shipping"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.shipping_total ? ctx_r1.order.shipping_total : 0));
  }
}
function OrderDetailsComponent_div_5_li_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "points"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.points_amount));
  }
}
function OrderDetailsComponent_div_5_li_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "wallet_balance"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.wallet_balance));
  }
}
function OrderDetailsComponent_div_5_li_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "coupon_discount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.coupon_total_discount));
  }
}
function OrderDetailsComponent_div_5_div_55_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "h6")(14, "div")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "td")(18, "a", 44);
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subOrder_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("#" + subOrder_r4.order_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, subOrder_r4.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, subOrder_r4.amount));
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("status-", subOrder_r4.order_status.slug, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subOrder_r4.order_status.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c18))("queryParams", \u0275\u0275pureFunction2(17, _c25, subOrder_r4.order_number, ctx_r1.email_or_phone));
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-eye-line");
  }
}
function OrderDetailsComponent_div_5_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 35)(3, "table", 36)(4, "thead")(5, "tr")(6, "th", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 37);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, OrderDetailsComponent_div_5_div_55_tr_22_Template, 20, 20, "tr", 26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "order_date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "total_amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.sub_orders);
  }
}
function OrderDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div")(2, "div", 8)(3, "div", 9)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 11);
    \u0275\u0275template(9, OrderDetailsComponent_div_5_ul_9_Template, 4, 4, "ul", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, OrderDetailsComponent_div_5_div_10_Template, 23, 16, "div", 13);
    \u0275\u0275elementStart(11, "div", 3)(12, "div", 14)(13, "div", 15)(14, "div", 16)(15, "h3", 17);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "ul", 19);
    \u0275\u0275template(20, OrderDetailsComponent_div_5_li_20_Template, 8, 11, "li", 20)(21, OrderDetailsComponent_div_5_li_21_Template, 8, 11, "li", 20)(22, OrderDetailsComponent_div_5_li_22_Template, 6, 4, "li", 20)(23, OrderDetailsComponent_div_5_li_23_Template, 8, 6, "li", 21)(24, OrderDetailsComponent_div_5_li_24_Template, 8, 6, "li", 21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 23)(27, "div", 16)(28, "h3", 17);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 24)(32, "ul")(33, "li");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, OrderDetailsComponent_div_5_li_39_Template, 6, 6, "li", 12);
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, OrderDetailsComponent_div_5_li_46_Template, 6, 6, "li", 25)(47, OrderDetailsComponent_div_5_li_47_Template, 6, 6, "li", 25)(48, OrderDetailsComponent_div_5_li_48_Template, 6, 6, "li", 25);
    \u0275\u0275elementStart(49, "li");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(55, OrderDetailsComponent_div_5_div_55_Template, 23, 16, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 22, "order_number"), ": #", ctx_r1.order.order_number, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order && !(ctx_r1.order == null ? null : ctx_r1.order.sub_orders == null ? null : ctx_r1.order.sub_orders.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.products == null ? null : ctx_r1.order.products.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "consumer_details"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.billing_address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.shipping_address) && !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.delivery_description) && !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.payment_method);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.payment_method);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 26, "summary"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 28, "subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 30, ctx_r1.order.amount ? ctx_r1.order.amount : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 32, "tax"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 34, ctx_r1.order.tax_total ? ctx_r1.order.tax_total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order.points_amount != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.wallet_balance != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.coupon_total_discount != 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(51, 36, "total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 38, ctx_r1.order.total ? ctx_r1.order.total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.sub_orders == null ? null : ctx_r1.order.sub_orders.length);
  }
}
function OrderDetailsComponent_app_no_data_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 45);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_order_found");
  }
}
var _OrderDetailsComponent = class _OrderDetailsComponent {
  constructor(store, route) {
    this.store = store;
    this.route = route;
    this.destroy$ = new Subject();
    this.countries = [];
    this.states = [];
    this.breadcrumb = {
      title: "Order Details",
      items: [{ label: "Order Details", active: false }]
    };
    this.store.dispatch(new GetOrderStatus());
    this.country$.subscribe((country) => this.countries = country.data);
    this.state$.subscribe((state) => this.states = state.data);
  }
  ngOnInit() {
    this.route.queryParams.pipe(switchMap((params) => {
      this.email_or_phone = params["email_or_phone"];
      return this.store.dispatch(new OrderTracking({ order_number: params["order_number"].toString(), email_or_phone: params["email_or_phone"] })).pipe(mergeMap(() => this.store.select(OrderState.selectedOrder)));
    }), takeUntil(this.destroy$)).subscribe((order) => {
      this.order = order;
      this.order && (this.order.consumer = order?.guest_order ? order?.guest_order : order?.consumer);
    });
  }
  getCountryName(id) {
    return this.countries.find((country) => country.id == id)?.name;
  }
  getStateName(id) {
    return this.states.find((state) => state.id == id)?.name;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_OrderDetailsComponent.\u0275fac = function OrderDetailsComponent_Factory(t) {
  return new (t || _OrderDetailsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute));
};
_OrderDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailsComponent, selectors: [["app-order-details"]], decls: 7, vars: 3, consts: [[3, "breadcrumb"], [1, "user-dashboard-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-12", "col-lg-12"], ["class", "dashboard-right-sidebar", 4, "ngIf"], [3, "class", "image", "text", 4, "ngIf"], [1, "dashboard-right-sidebar"], [1, "title-header"], [1, "d-flex", "align-items-center", "w-100", "justify-content-between"], [1, "mb-4"], [1, "tracking-panel"], [4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "col-xxl-8", "col-lg-12", "col-md-7"], [1, "card"], [1, "card-body"], [1, "fw-semibold", "mb-3"], [1, "customer-detail", "tracking-wrapper"], [1, "row", "g-3"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-3", 4, "ngIf"], [1, "col-xxl-4", "col-lg-12", "col-md-5"], [1, "card", "h-m30"], [1, "tracking-total", "tracking-wrapper"], ["class", "txt-primary fw-bold", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "active cancelled-box", 4, "ngIf"], [3, "ngClass"], [1, "panel-content"], [1, "icon"], ["alt", "image", 1, "img-fluid", 3, "src"], [1, "status"], [1, "active", "cancelled-box"], ["class", "panel-content", 4, "ngIf"], [1, "tracking-wrapper", "table-responsive"], [1, "table", "product-table"], ["scope", "col"], [1, "product-image"], ["alt", "product", 1, "img-fluid", 3, "src"], [1, "col-sm-6"], [1, "col-sm-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "txt-primary", "fw-bold"], ["href", "javascript:void(0)", 3, "routerLink", "queryParams"], [3, "image", "text"]], template: function OrderDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275template(5, OrderDetailsComponent_div_5_Template, 56, 40, "div", 5)(6, OrderDetailsComponent_app_no_data_6_Template, 1, 4, "app-no-data", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.order);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.order);
  }
}, dependencies: [NgClass, NgForOf, NgIf, RouterLink, BreadcrumbComponent, NoDataComponent, AsyncPipe, UpperCasePipe, TitleCasePipe, DatePipe, CurrencySymbolPipe, TranslatePipe] });
var OrderDetailsComponent = _OrderDetailsComponent;
__decorate([
  Select(OrderStatusState.orderStatus)
], OrderDetailsComponent.prototype, "orderStatus$", void 0);
__decorate([
  Select(CountryState.country)
], OrderDetailsComponent.prototype, "country$", void 0);
__decorate([
  Select(StateState.state)
], OrderDetailsComponent.prototype, "state$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailsComponent, { className: "OrderDetailsComponent", filePath: "src\\app\\components\\shop\\order-details\\order-details.component.ts", lineNumber: 23 });
})();

// src/app/components/shop/brand/brand.component.ts
function BrandComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.brand.brand_banner && ctx_r0.brand.brand_banner.original_url, \u0275\u0275sanitizeUrl);
  }
}
function BrandComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.brand.name);
  }
}
var _BrandComponent = class _BrandComponent {
  constructor(route, store) {
    this.route = route;
    this.store = store;
    this.breadcrumb = {
      title: "Brand",
      items: [{ label: "Collections", active: false }]
    };
    this.layout = "collection_category_slider";
    this.skeleton = true;
    this.filter = {
      "page": 1,
      "paginate": 40,
      "brand": ""
    };
    this.totalItems = 0;
    this.brand$.subscribe((brand) => this.brand = brand);
    this.breadcrumb.title = `Brand: ${this.brand?.name}`;
    this.breadcrumb.items[0].label = this.brand?.name;
    this.filter["brand"] = this.route.snapshot.paramMap.get("slug");
    this.store.dispatch(new GetProducts(this.filter));
  }
};
_BrandComponent.\u0275fac = function BrandComponent_Factory(t) {
  return new (t || _BrandComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Store));
};
_BrandComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandComponent, selectors: [["app-brand"]], decls: 14, vars: 5, consts: [["name", ""], [3, "breadcrumb"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "brand-box"], ["class", "img-fluid w-100", 3, "src", 4, "ngIf", "ngIfElse"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "col-custome-12"], [3, "filter", "gridCol"], [1, "img-fluid", "w-100", 3, "src"]], template: function BrandComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275elementStart(1, "section")(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275template(6, BrandComponent_img_6_Template, 1, 1, "img", 6)(7, BrandComponent_ng_template_7_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(9, "section", 7)(10, "div", 2)(11, "div", 3)(12, "div", 8);
    \u0275\u0275element(13, "app-collection-products", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const name_r2 = \u0275\u0275reference(8);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.brand.brand_banner && ctx.brand.brand_banner.original_url)("ngIfElse", name_r2);
    \u0275\u0275advance(7);
    \u0275\u0275property("filter", ctx.filter)("gridCol", "collection_5_grid");
  }
}, dependencies: [NgIf, BreadcrumbComponent, CollectionProductsComponent] });
var BrandComponent = _BrandComponent;
__decorate([
  Select(ProductState.product)
], BrandComponent.prototype, "product$", void 0);
__decorate([
  Select(BrandState.selectedBrand)
], BrandComponent.prototype, "brand$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandComponent, { className: "BrandComponent", filePath: "src\\app\\components\\shop\\brand\\brand.component.ts", lineNumber: 19 });
})();

// src/app/components/shop/category/category.component.ts
var _c031 = () => ["category"];
var _CategoryComponent = class _CategoryComponent {
  constructor(route, router, store, seoService) {
    this.route = route;
    this.router = router;
    this.store = store;
    this.seoService = seoService;
    this.breadcrumb = {
      title: "Category",
      items: [{ label: "", active: false }]
    };
    this.layout = "collection_category_slider";
    this.skeleton = true;
    this.filter = {
      "page": 1,
      "paginate": 40,
      "status": 1,
      "field": "created_at",
      "price": "",
      "category": "",
      "tag": "",
      "sort": "asc",
      "sortBy": "asc",
      "rating": "",
      "attribute": ""
    };
    this.totalItems = 0;
    this.category$.subscribe((category) => {
      this.category = category;
      this.breadcrumb.title = `Category: ${this.category?.name}`;
      this.breadcrumb.items[0].label = this.category?.name;
    });
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.route.queryParams.subscribe((params) => {
          this.filter = {
            "page": params["page"] ? params["page"] : 1,
            "paginate": 40,
            "status": 1,
            "price": params["price"] ? params["price"] : "",
            "brand": params["brand"] ? params["brand"] : "",
            "category": this.route.snapshot.paramMap.get("slug") ? this.route.snapshot.paramMap.get("slug") : "",
            "tag": params["tag"] ? params["tag"] : "",
            "field": params["field"] ? params["field"] : this.filter["field"],
            "sortBy": params["sortBy"] ? params["sortBy"] : this.filter["sortBy"],
            "rating": params["rating"] ? params["rating"] : "",
            "attribute": params["attribute"] ? params["attribute"] : ""
          };
          this.store.dispatch(new GetProducts(this.filter));
        });
      }
    });
  }
};
_CategoryComponent.\u0275fac = function CategoryComponent_Factory(t) {
  return new (t || _CategoryComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(SeoService));
};
_CategoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], decls: 9, vars: 5, consts: [[3, "breadcrumb"], ["id", "filtered_products", 1, "section-b-space", "shop-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-custome-3"], [1, "left-box"], [3, "filter", "hideFilter"], [1, "col-custome-9"], [3, "filter"]], template: function CategoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "app-collection-sidebar", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275element(8, "app-collection-products", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(6);
    \u0275\u0275property("filter", ctx.filter)("hideFilter", \u0275\u0275pureFunction0(4, _c031));
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx.filter);
  }
}, dependencies: [BreadcrumbComponent, CollectionSidebarComponent, CollectionProductsComponent] });
var CategoryComponent = _CategoryComponent;
__decorate([
  Select(ProductState.product)
], CategoryComponent.prototype, "product$", void 0);
__decorate([
  Select(CategoryState.selectedCategory)
], CategoryComponent.prototype, "category$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "src\\app\\components\\shop\\category\\category.component.ts", lineNumber: 18 });
})();

// src/app/shared/resolvers/category.resolver.ts
var CategoryResolver = (route, state) => {
  return inject(Store).dispatch(new GetCategoryBySlug(route.paramMap.get("slug")));
};

// src/app/components/shop/shop-routing.module.ts
var routes = [
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "compare",
    component: CompareComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "product/:slug",
    component: ProductComponent,
    resolve: {
      data: ProductResolver
    }
  },
  {
    path: "collections",
    component: CollectionComponent
  },
  {
    path: "seller/become-seller",
    component: SellerComponent
  },
  {
    path: "seller/stores",
    component: SellerStoreComponent
  },
  {
    path: "seller/store/:slug",
    component: SellerDetailsComponent,
    resolve: {
      data: StoreResolver
    }
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [CheckoutGuard]
  },
  {
    path: "order/tracking",
    component: OrderTrackingComponent
  },
  {
    path: "order/details",
    component: OrderDetailsComponent
  },
  {
    path: "brand/:slug",
    component: BrandComponent,
    resolve: {
      data: BrandResolver
    }
  },
  {
    path: "category/:slug",
    component: CategoryComponent,
    resolve: {
      data: CategoryResolver
    }
  }
];
var _ShopRoutingModule = class _ShopRoutingModule {
};
_ShopRoutingModule.\u0275fac = function ShopRoutingModule_Factory(t) {
  return new (t || _ShopRoutingModule)();
};
_ShopRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ShopRoutingModule });
_ShopRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ShopRoutingModule = _ShopRoutingModule;

// src/app/components/shop/product/product-details/widgets/digital-product-contain/digital-product-contain.component.ts
var _c032 = (a0) => ["/seller/store", a0];
function DigitalProductContainComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 3);
    \u0275\u0275element(2, "i", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.product.orders_count, " ", \u0275\u0275pipeBind1(4, 2, "sales"), " ");
  }
}
var _DigitalProductContainComponent = class _DigitalProductContainComponent {
};
_DigitalProductContainComponent.\u0275fac = function DigitalProductContainComponent_Factory(t) {
  return new (t || _DigitalProductContainComponent)();
};
_DigitalProductContainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigitalProductContainComponent, selectors: [["app-digital-product-contain"]], inputs: { product: "product" }, decls: 13, vars: 10, consts: [[1, "product-title"], [1, "name"], [1, "title-content-list"], [1, "content"], [3, "routerLink"], [4, "ngIf"], [1, "ri-shopping-cart-line"]], template: function DigitalProductContainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 2)(4, "li")(5, "h6", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "a", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, DigitalProductContainComponent_li_10_Template, 5, 4, "li", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 6, "by"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c032, ctx.product.store == null ? null : ctx.product.store.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.product.store == null ? null : ctx.product.store.store_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.product.orders_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.product.short_description);
  }
}, dependencies: [NgIf, RouterLink, TranslatePipe] });
var DigitalProductContainComponent = _DigitalProductContainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigitalProductContainComponent, { className: "DigitalProductContainComponent", filePath: "src\\app\\components\\shop\\product\\product-details\\widgets\\digital-product-contain\\digital-product-contain.component.ts", lineNumber: 9 });
})();

// src/app/components/shop/shop.module.ts
var _ShopModule = class _ShopModule {
};
_ShopModule.\u0275fac = function ShopModule_Factory(t) {
  return new (t || _ShopModule)();
};
_ShopModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ShopModule });
_ShopModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ShopRoutingModule,
  SharedModule,
  NgxImageZoomModule,
  TranslateModule,
  NgxsModule.forRoot([
    BrandState
  ])
] });
var ShopModule = _ShopModule;

export {
  ShopModule
};
//# sourceMappingURL=chunk-NAO4B3EB.js.map
