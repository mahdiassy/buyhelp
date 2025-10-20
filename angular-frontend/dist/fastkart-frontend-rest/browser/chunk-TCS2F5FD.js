import {
  DownloadFiles,
  DownloadLicense,
  DownloadState,
  Downloads,
  GetNotification,
  GetPaymentDetails,
  GetUserTransaction,
  GetUserTransaction2,
  MarkAsReadNotification,
  NotificationState,
  PaymentDetailsState,
  PointState,
  RefundState,
  UpdatePaymentDetails,
  WalletState
} from "./chunk-FLTYMP5R.js";
import {
  GetOrderStatus,
  OrderState,
  OrderStatusState
} from "./chunk-7LRX5UZJ.js";
import {
  AccountState,
  ActivatedRoute,
  AddressModalComponent,
  AsyncPipe,
  BreadcrumbComponent,
  ButtonComponent,
  ChangePasswordModalComponent,
  CommonModule,
  ConfirmationModalComponent,
  CurrencySymbolPipe,
  DatePipe,
  DefaultValueAccessor,
  DeleteAddress,
  DeleteModalComponent,
  DownloadInvoice,
  EditProfileModalComponent,
  EventEmitter,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  GetOrders,
  GetRefund,
  LoaderComponent,
  LoaderState,
  Logout,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbTooltip,
  NoDataComponent,
  PaginationComponent,
  PayModalComponent,
  RefundModalComponent,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Select,
  SettingState,
  SharedModule,
  Store,
  Subject,
  TitleCasePipe,
  TitleCasePipe2,
  TranslateModule,
  TranslatePipe,
  UpdateUserProfile,
  UpperCasePipe,
  Validators,
  ViewOrder,
  __decorate,
  mergeMap,
  of,
  switchMap,
  takeUntil,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate5,
  ɵɵviewQuery
} from "./chunk-WW7SXIET.js";

// src/app/components/account/sidebar/sidebar.component.ts
var _c0 = ["confirmationModal"];
var _c1 = () => ["active"];
var _c2 = () => ["/account/dashboard"];
var _c3 = () => ["/account/notifications"];
var _c4 = () => ["/account/bank-details"];
var _c5 = () => ["/account/wallet"];
var _c6 = () => ["/account/point"];
var _c7 = () => ["/account/order"];
var _c8 = () => ["/account/downloads"];
var _c9 = () => ["/account/refund"];
var _c10 = () => ["/account/addresses"];
function SidebarComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 36);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.user$)) == null ? null : tmp_3_0.profile_image == null ? null : tmp_3_0.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function SidebarComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = \u0275\u0275pipeBind1(3, 1, ctx_r1.user$)) == null ? null : tmp_3_0.name == null ? null : (tmp_3_0 = tmp_3_0.name.charAt(0)) == null ? null : (tmp_3_0 = tmp_3_0.toString()) == null ? null : tmp_3_0.toUpperCase());
  }
}
function SidebarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function SidebarComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadImage("remove"));
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadNotificationCount);
  }
}
var _SidebarComponent = class _SidebarComponent {
  constructor(store) {
    this.store = store;
    this.menu = new EventEmitter();
    this.notification$.subscribe((notification) => {
      this.unreadNotificationCount = notification?.filter((item) => !item.read_at)?.length;
    });
  }
  logout() {
    this.store.dispatch(new Logout());
  }
  openMenu(value) {
    this.menu.emit(value);
  }
  uploadImage(event) {
    if (event?.target?.files) {
      let form = new FormData();
      form.append("profile_image", event.target.files[0]);
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    } else {
      let form = new FormData();
      form.append("profile_image_id", "");
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    }
  }
};
_SidebarComponent.\u0275fac = function SidebarComponent_Factory(t) {
  return new (t || _SidebarComponent)(\u0275\u0275directiveInject(Store));
};
_SidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ConfirmationModal = _t.first);
  }
}, inputs: { show: "show" }, outputs: { menu: "menu" }, decls: 83, vars: 92, consts: [["placeholder", ""], ["confirmationModal", ""], [1, "close-button", "d-flex", "d-lg-none"], [3, "click", "id", "spinner"], [1, "ri-close-fill"], [1, "profile-box"], [1, "cover-image"], ["src", "assets/images/inner-page/cover-img.jpg", "alt", "cover-img", 1, "img-fluid"], [1, "profile-contain"], [1, "profile-image"], [1, "position-relative"], ["class", "update_img", "alt", "profile", 3, "src", 4, "ngIf", "ngIfElse"], [1, "user-icon"], ["type", "file", "accept", "image/*", 3, "change"], [1, "ri-image-edit-line", "d-lg-block", "d-none"], [1, "ri-pencil-fill", "edit-icon", "d-lg-none"], ["class", "user-icon-2", 3, "click", 4, "ngIf"], [1, "profile-name"], [1, "text-content"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "user-nav-pills"], ["role", "presentation", 1, "nav-item"], [1, "nav-link", 3, "click", "routerLinkActive", "routerLink"], [1, "ri-home-line", "me-2"], [1, "ri-notification-line", "me-2"], ["class", "notification-count", 4, "ngIf"], [1, "ri-bank-line", "me-2"], [1, "ri-wallet-line", "me-2"], [1, "ri-coin-line", "me-2"], [1, "ri-file-text-line", "me-2"], [1, "ri-download-2-line", "me-2"], [1, "ri-money-dollar-circle-line", "me-2"], [1, "ri-map-pin-line", "me-2"], ["role", "presentation", 1, "nav-item", "logout-cls"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], [1, "ri-logout-box-r-line", "me-2"], [3, "confirmed"], ["alt", "profile", 1, "update_img", 3, "src"], [1, "user-round"], [1, "user-icon-2", 3, "click"], [1, "ri-close-line"], [1, "notification-count"]], template: function SidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "app-button", 3);
    \u0275\u0275listener("click", function SidebarComponent_Template_app_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275element(5, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "div", 10);
    \u0275\u0275template(9, SidebarComponent_img_9_Template, 2, 3, "img", 11);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275template(12, SidebarComponent_ng_template_12_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(14, "div", 12)(15, "input", 13);
    \u0275\u0275listener("change", function SidebarComponent_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.uploadImage($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "i", 14)(17, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SidebarComponent_div_18_Template, 2, 0, "div", 16);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275pipe(25, "titleCase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h6", 18);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "ul", 19)(30, "li", 20)(31, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(32, "i", 22);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li", 20)(36, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(37, "i", 23);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275template(40, SidebarComponent_span_40_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li", 20)(42, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(43, "i", 25);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li", 20)(47, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(48, "i", 26);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "li", 20)(52, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(53, "i", 27);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "li", 20)(57, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(58, "i", 28);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "li", 20)(62, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(63, "i", 29);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "li", 20)(67, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(68, "i", 30);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "li", 20)(72, "a", 21);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_72_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openMenu(false));
    });
    \u0275\u0275element(73, "i", 31);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "li", 32)(77, "a", 33);
    \u0275\u0275listener("click", function SidebarComponent_Template_a_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const confirmationModal_r4 = \u0275\u0275reference(82);
      return \u0275\u0275resetView(confirmationModal_r4.openModal());
    });
    \u0275\u0275element(78, "i", 34);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "app-confirmation-modal", 35, 1);
    \u0275\u0275listener("confirmed", function SidebarComponent_Template_app_confirmation_modal_confirmed_81_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.logout());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const placeholder_r5 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275styleMap("button");
    \u0275\u0275classMap("close-sidebar");
    \u0275\u0275property("id", "close_sidebar_btn")("spinner", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_6_0 = \u0275\u0275pipeBind1(10, 40, ctx.user$)) == null ? null : tmp_6_0.profile_image) && ((tmp_6_0 = \u0275\u0275pipeBind1(11, 42, ctx.user$)) == null ? null : tmp_6_0.profile_image == null ? null : tmp_6_0.profile_image.original_url))("ngIfElse", placeholder_r5);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_8_0 = \u0275\u0275pipeBind1(19, 44, ctx.user$)) == null ? null : tmp_8_0.profile_image) && ((tmp_8_0 = \u0275\u0275pipeBind1(20, 46, ctx.user$)) == null ? null : tmp_8_0.profile_image == null ? null : tmp_8_0.profile_image.original_url));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 50, (tmp_9_0 = \u0275\u0275pipeBind1(24, 48, ctx.user$)) == null ? null : tmp_9_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_10_0 = \u0275\u0275pipeBind1(28, 52, ctx.user$)) == null ? null : tmp_10_0.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(74, _c1))("routerLink", \u0275\u0275pureFunction0(75, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 54, "dashboard"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(76, _c1))("routerLink", \u0275\u0275pureFunction0(77, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 56, "notifications"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.unreadNotificationCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(78, _c1))("routerLink", \u0275\u0275pureFunction0(79, _c4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 58, "bank_details"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(80, _c1))("routerLink", \u0275\u0275pureFunction0(81, _c5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 60, "my_wallet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(82, _c1))("routerLink", \u0275\u0275pureFunction0(83, _c6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 62, "earning_points"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(84, _c1))("routerLink", \u0275\u0275pureFunction0(85, _c7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(60, 64, "my_orders"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(86, _c1))("routerLink", \u0275\u0275pureFunction0(87, _c8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(65, 66, "downloads"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(88, _c1))("routerLink", \u0275\u0275pureFunction0(89, _c9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 68, "refund_history"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(90, _c1))("routerLink", \u0275\u0275pureFunction0(91, _c10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 70, "saved_address"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 72, "logout"), " ");
  }
}, dependencies: [NgIf, RouterLink, RouterLinkActive, ButtonComponent, ConfirmationModalComponent, AsyncPipe, TitleCasePipe2, TranslatePipe] });
var SidebarComponent = _SidebarComponent;
__decorate([
  Select(NotificationState.notification)
], SidebarComponent.prototype, "notification$", void 0);
__decorate([
  Select(AccountState.user)
], SidebarComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\components\\account\\sidebar\\sidebar.component.ts", lineNumber: 17 });
})();

// src/app/components/account/account.component.ts
function AccountComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-loader", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("loaderClass", "custom-loader-wrapper blur-bg");
  }
}
var _AccountComponent = class _AccountComponent {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.open = false;
    this.breadcrumb = {
      title: "Dashboard",
      items: [{ label: "Dashboard", active: false }]
    };
    this.store.dispatch(new GetNotification());
    this.breadcrumb.title = this.router?.url?.split("?")[0]?.split("/")?.pop();
    if (this.router?.url.includes("order/details")) {
      this.breadcrumb.title = "Order";
    }
    this.breadcrumb.items = [];
    this.breadcrumb.items.push({ label: this.breadcrumb.title, active: false });
  }
  openMenu(value) {
    this.open = value;
  }
};
_AccountComponent.\u0275fac = function AccountComponent_Factory(t) {
  return new (t || _AccountComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router));
};
_AccountComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountComponent, selectors: [["app-account"]], decls: 17, vars: 15, consts: [[3, "breadcrumb"], [1, "user-dashboard-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-3", "col-lg-4"], [1, "dashboard-left-sidebar"], [3, "menu", "show"], ["id", "account", 1, "col-xxl-9", "col-lg-8", "custom-box-loader"], ["class", "box-loader", 4, "ngIf"], [3, "click", "type", "id", "spinner"], [1, "dashboard-right-sidebar"], [1, "tab-content"], [1, "box-loader"], [3, "loaderClass"]], template: function AccountComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "app-sidebar", 6);
    \u0275\u0275listener("menu", function AccountComponent_Template_app_sidebar_menu_6_listener($event) {
      return ctx.openMenu($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275template(8, AccountComponent_div_8_Template, 2, 1, "div", 8);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementContainerStart(10);
    \u0275\u0275elementStart(11, "app-button", 9);
    \u0275\u0275listener("click", function AccountComponent_Template_app_button_click_11_listener() {
      return ctx.openMenu(true);
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
    \u0275\u0275element(16, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("show", ctx.open);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx.open);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 11, ctx.loadingStatus$));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none");
    \u0275\u0275property("type", "button")("id", "show_menu")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "show_menu"), " ");
  }
}, dependencies: [NgIf, RouterOutlet, LoaderComponent, BreadcrumbComponent, ButtonComponent, SidebarComponent, AsyncPipe, TranslatePipe] });
var AccountComponent = _AccountComponent;
__decorate([
  Select(LoaderState.status)
], AccountComponent.prototype, "loadingStatus$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountComponent, { className: "AccountComponent", filePath: "src\\app\\components\\account\\account.component.ts", lineNumber: 14 });
})();

// src/app/components/account/dashboard/dashboard.component.ts
var _c02 = ["profileModal"];
var _c12 = ["passwordModal"];
function DashboardComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 6, "address"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5(" ", ctx_r1.address.street, " ", ctx_r1.address.city, ", ", ctx_r1.address.state.name, ", ", ctx_r1.address.country.name, " ", ctx_r1.address.pincode, " ");
  }
}
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    this.user$.subscribe((user) => {
      this.address = user?.address?.length ? user?.address?.[0] : null;
    });
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
  return new (t || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
    \u0275\u0275viewQuery(_c12, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ProfileModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.PasswordModal = _t.first);
  }
}, decls: 120, vars: 79, consts: [["profileModal", ""], ["passwordModal", ""], [1, "tab-pane", "fade", "show", "active"], [1, "dashboard-home"], [1, "title-header"], [1, "d-flex", "align-items-center"], [1, "dashboard-user-name"], [1, "text-content"], [1, "text-title"], [1, "total-box"], [1, "row", "row-cols-xxl-3", "g-sm-4", "g-3"], [1, "totle-contain"], [1, "wallet-point-box"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet", 1, "img-1"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet"], [1, "totle-detail"], ["src", "assets/images/svg/coin.svg", "alt", "coin", 1, "img-1"], ["src", "assets/images/svg/coin.svg", "alt", "coin"], ["src", "assets/images/svg/order.svg", "alt", "order", 1, "img-1"], ["src", "assets/images/svg/order.svg", "alt", "order"], [1, "profile-about", "dashboard-bg-box"], [1, "row"], [1, "col-xxl-7"], [1, "dashboard-title", "mb-3"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "col-xxl-5"], [1, "profile-image"], ["src", "assets/images/inner-page/dashboard-profile.png", "alt", "dashboard-profile", 1, "img-fluid"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 6)(8, "h6", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "b", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "titleCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "div")(21, "div", 11)(22, "div", 12);
    \u0275\u0275element(23, "img", 13)(24, "img", 14);
    \u0275\u0275elementStart(25, "div", 15)(26, "h5");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275pipe(32, "async");
    \u0275\u0275pipe(33, "currencySymbol");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div")(35, "div", 11)(36, "div", 12);
    \u0275\u0275element(37, "img", 16)(38, "img", 17);
    \u0275\u0275elementStart(39, "div", 15)(40, "h5");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h3");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "async");
    \u0275\u0275pipe(46, "async");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div")(48, "div", 11)(49, "div", 12);
    \u0275\u0275element(50, "img", 18)(51, "img", 19);
    \u0275\u0275elementStart(52, "div", 15)(53, "h5");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "h3");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "async");
    \u0275\u0275pipe(59, "async");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(60, "div", 20)(61, "div", 21)(62, "div", 22)(63, "div", 23)(64, "h3");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 24)(68, "table", 25)(69, "tbody")(70, "tr")(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "async");
    \u0275\u0275pipe(77, "titleCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "tr")(79, "td");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "td");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "async");
    \u0275\u0275pipe(85, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(86, DashboardComponent_tr_86_Template, 6, 8, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 23)(88, "h3");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 24)(92, "table", 25)(93, "tbody")(94, "tr")(95, "td");
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td");
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "async");
    \u0275\u0275elementStart(101, "a", 27);
    \u0275\u0275listener("click", function DashboardComponent_Template_a_click_101_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.ProfileModal.openModal());
    });
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "tr")(105, "td");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "td");
    \u0275\u0275text(109, " \u25CF\u25CF\u25CF\u25CF\u25CF\u25CF ");
    \u0275\u0275elementStart(110, "a", 27);
    \u0275\u0275listener("click", function DashboardComponent_Template_a_click_110_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.PasswordModal.openModal());
    });
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(113, "div", 28)(114, "div", 29);
    \u0275\u0275element(115, "img", 30);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(116, "app-edit-profile-modal", null, 0)(118, "app-change-password-modal", null, 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_20_0;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 23, "my_dashboard"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 25, "hello"), ", ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, (tmp_4_0 = \u0275\u0275pipeBind1(13, 27, ctx.user$)) == null ? null : tmp_4_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 31, "welcome_text"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 33, "balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(33, 39, ((tmp_7_0 = \u0275\u0275pipeBind1(31, 35, ctx.user$)) == null ? null : tmp_7_0.wallet) ? (tmp_7_0 = \u0275\u0275pipeBind1(32, 37, ctx.user$)) == null ? null : tmp_7_0.wallet == null ? null : tmp_7_0.wallet.balance : 0), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 41, "total_points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_9_0 = \u0275\u0275pipeBind1(45, 43, ctx.user$)) == null ? null : tmp_9_0.point) ? (tmp_9_0 = \u0275\u0275pipeBind1(46, 45, ctx.user$)) == null ? null : tmp_9_0.point == null ? null : tmp_9_0.point.balance : 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 47, "total_orders"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_11_0 = \u0275\u0275pipeBind1(58, 49, ctx.user$)) == null ? null : tmp_11_0.orders_count) ? (tmp_11_0 = \u0275\u0275pipeBind1(59, 51, ctx.user$)) == null ? null : tmp_11_0.orders_count : 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 53, "profile_information"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(73, 55, "name"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 59, (tmp_14_0 = \u0275\u0275pipeBind1(76, 57, ctx.user$)) == null ? null : tmp_14_0.name));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(81, 61, "phone"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" +", (tmp_16_0 = \u0275\u0275pipeBind1(84, 63, ctx.user$)) == null ? null : tmp_16_0.country_code, " ", (tmp_16_0 = \u0275\u0275pipeBind1(85, 65, ctx.user$)) == null ? null : tmp_16_0.phone, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.address);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 67, "login_details"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(97, 69, "email"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_20_0 = \u0275\u0275pipeBind1(100, 71, ctx.user$)) == null ? null : tmp_20_0.email, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 73, "edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(107, 75, "password"), " :");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 77, "edit"));
  }
}, dependencies: [NgIf, EditProfileModalComponent, ChangePasswordModalComponent, AsyncPipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
var DashboardComponent = _DashboardComponent;
__decorate([
  Select(AccountState.user)
], DashboardComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\components\\account\\dashboard\\dashboard.component.ts", lineNumber: 14 });
})();

// src/app/components/account/wallet/wallet.component.ts
function WalletComponent_div_5_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r1 == null ? null : transaction_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, transaction_r1 == null ? null : transaction_r1.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r1 == null ? null : transaction_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", transaction_r1 == null ? null : transaction_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, transaction_r1 == null ? null : transaction_r1.type));
  }
}
function WalletComponent_div_5_nav_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 16)(1, "app-pagination", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function WalletComponent_div_5_nav_37_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function WalletComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementStart(6, "div", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "currencySymbol");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 11)(16, "h4", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "table")(21, "tbody")(22, "tr")(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, WalletComponent_div_5_tr_35_Template, 14, 14, "tr", 14);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(37, WalletComponent_div_5_nav_37_Template, 3, 5, "nav", 15);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "wallet_balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, \u0275\u0275pipeBind1(12, 11, ctx_r2.wallet$) ? (tmp_2_0 = \u0275\u0275pipeBind1(13, 13, ctx_r2.wallet$)) == null ? null : tmp_2_0.balance : 0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "transactions"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 19, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 21, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 23, "remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_8_0 = \u0275\u0275pipeBind1(36, 27, ctx_r2.wallet$)) == null ? null : tmp_8_0.transactions == null ? null : tmp_8_0.transactions.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(38, 29, ctx_r2.wallet$)) == null ? null : tmp_9_0.transactions == null ? null : tmp_9_0.transactions.data == null ? null : tmp_9_0.transactions.data.length);
  }
}
function WalletComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_transaction_found")("description", "no_wallet_detected");
  }
}
var _WalletComponent = class _WalletComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
};
_WalletComponent.\u0275fac = function WalletComponent_Factory(t) {
  return new (t || _WalletComponent)(\u0275\u0275directiveInject(Store));
};
_WalletComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletComponent, selectors: [["app-wallet"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "row"], [1, "col-12"], [1, "totle-contain", "wallet-bg"], [1, "wallet-point-box"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet"], [1, "totle-detail"], [1, "wallet-table"], [1, "user-dashboard-title"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function WalletComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, WalletComponent_div_5_Template, 39, 31, "div", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, WalletComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
    \u0275\u0275pipe(8, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "my_wallet"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.wallet$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.data == null ? null : tmp_2_0.transactions.data.length));
  }
}, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
var WalletComponent = _WalletComponent;
__decorate([
  Select(WalletState.wallet)
], WalletComponent.prototype, "wallet$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletComponent, { className: "WalletComponent", filePath: "src\\app\\components\\account\\wallet\\wallet.component.ts", lineNumber: 14 });
})();

// src/app/components/account/notification/notification.component.ts
function NotificationComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    \u0275\u0275classProp("unread", !notification_r1.read_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r1 == null ? null : notification_r1.data == null ? null : notification_r1.data.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, notification_r1 == null ? null : notification_r1.created_at, "dd MMM yyyy hh:mm:a"), "");
  }
}
function NotificationComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275template(1, NotificationComponent_ul_5_li_1_Template, 7, 7, "li", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.notification$));
  }
}
function NotificationComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 7);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_notifications_found")("description", "You_have_not_notification_yet");
  }
}
var _NotificationComponent = class _NotificationComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnDestroy() {
    this.store.dispatch(new MarkAsReadNotification());
  }
};
_NotificationComponent.\u0275fac = function NotificationComponent_Factory(t) {
  return new (t || _NotificationComponent)(\u0275\u0275directiveInject(Store));
};
_NotificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "notification-list", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "notification-list"], [3, "unread", 4, "ngFor", "ngForOf"], [1, "ri-time-line"], [3, "image", "text", "description"]], template: function NotificationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, NotificationComponent_ul_5_Template, 3, 3, "ul", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, NotificationComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
    \u0275\u0275pipe(8, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "notifications"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.notification$)) == null ? null : tmp_1_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.notification$)) == null ? null : tmp_2_0.length));
  }
}, dependencies: [NgForOf, NgIf, NoDataComponent, AsyncPipe, DatePipe, TranslatePipe] });
var NotificationComponent = _NotificationComponent;
__decorate([
  Select(NotificationState.notification)
], NotificationComponent.prototype, "notification$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src\\app\\components\\account\\notification\\notification.component.ts", lineNumber: 13 });
})();

// src/app/components/account/bank-details/bank-details.component.ts
var _BankDetailsComponent = class _BankDetailsComponent {
  constructor(store) {
    this.store = store;
    this.active = "bank";
    this.form = new FormGroup({
      bank_account_no: new FormControl(),
      bank_name: new FormControl(),
      bank_holder_name: new FormControl(),
      swift: new FormControl(),
      ifsc: new FormControl(),
      paypal_email: new FormControl("", [Validators.email])
    });
  }
  ngOnInit() {
    this.store.dispatch(new GetPaymentDetails());
    this.paymentDetails$.subscribe((paymentDetails) => {
      this.form.patchValue({
        bank_account_no: paymentDetails?.bank_account_no,
        bank_name: paymentDetails?.bank_name,
        bank_holder_name: paymentDetails?.bank_holder_name,
        swift: paymentDetails?.swift,
        ifsc: paymentDetails?.ifsc,
        paypal_email: paymentDetails?.paypal_email
      });
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePaymentDetails(this.form.value));
    }
  }
};
_BankDetailsComponent.\u0275fac = function BankDetailsComponent_Factory(t) {
  return new (t || _BankDetailsComponent)(\u0275\u0275directiveInject(Store));
};
_BankDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankDetailsComponent, selectors: [["app-bank-details"]], decls: 58, vars: 50, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], [1, "themeform-auth", 3, "ngSubmit", "formGroup"], [1, "row", "mb-3", "align-items-center"], ["for", "bank_account_no", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], [1, "col-xxl-10", "col-lg-12", "col-md-9"], ["type", "text", "id", "bank_account_no", "formControlName", "bank_account_no", "numbersOnly", "", 1, "form-control", 3, "placeholder"], ["for", "bank_name", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "bank_name", "formControlName", "bank_name", 1, "form-control", 3, "placeholder"], ["for", "bank_holder_name", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "bank_holder_name", "formControlName", "bank_holder_name", 1, "form-control", 3, "placeholder"], ["for", "swift", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "swift", "formControlName", "swift", 1, "form-control", 3, "placeholder"], ["for", "ifsc", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "ifsc", "formControlName", "ifsc", 1, "form-control", 3, "placeholder"], [1, "mb-3", "title-header", "border-custom"], ["for", "paypal_email", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "email", "id", "paypal_email", "formControlName", "paypal_email", 1, "form-control", 3, "placeholder"], [1, "text-end"], [3, "id"]], template: function BankDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "form", 2);
    \u0275\u0275listener("ngSubmit", function BankDetailsComponent_Template_form_ngSubmit_5_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(6, "div", 3)(7, "label", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275element(11, "input", 6);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 3)(14, "label", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 5);
    \u0275\u0275element(18, "input", 8);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 3)(21, "label", 9);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 5);
    \u0275\u0275element(25, "input", 10);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 3)(28, "label", 11);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 5);
    \u0275\u0275element(32, "input", 12);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 3)(35, "label", 13);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 5);
    \u0275\u0275element(39, "input", 14);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 15)(42, "div", 1)(43, "h5");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "form", 2);
    \u0275\u0275listener("ngSubmit", function BankDetailsComponent_Template_form_ngSubmit_46_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(47, "div", 3)(48, "label", 16);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 5);
    \u0275\u0275element(52, "input", 17);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 18)(55, "app-button", 19);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 20, "bank_details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 22, "bank_account_no"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(12, 24, "enter_bank_account_no"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 26, "bank_name"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 28, "enter_bank_name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 30, "holder_name"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(26, 32, "enter_bank_holder_name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 34, "swift"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(33, 36, "enter_swift"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 38, "ifsc"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(40, 40, "enter_ifsc"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 42, "paypal_details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 44, "paypal_email"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(53, 46, "enter_paypal_email"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("btn btn-animation theme-bg-color btn-md d-inline-block");
    \u0275\u0275property("id", "payout_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 48, "save"));
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonComponent, TranslatePipe] });
var BankDetailsComponent = _BankDetailsComponent;
__decorate([
  Select(PaymentDetailsState.paymentDetails)
], BankDetailsComponent.prototype, "paymentDetails$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankDetailsComponent, { className: "BankDetailsComponent", filePath: "src\\app\\components\\account\\bank-details\\bank-details.component.ts", lineNumber: 14 });
})();

// src/app/components/account/point/point.component.ts
function PointComponent_div_5_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r1 == null ? null : transaction_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", transaction_r1 == null ? null : transaction_r1.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r1 == null ? null : transaction_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", transaction_r1 == null ? null : transaction_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, transaction_r1 == null ? null : transaction_r1.type));
  }
}
function PointComponent_div_5_nav_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 18)(1, "app-pagination", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function PointComponent_div_5_nav_43_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function PointComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementStart(6, "div", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "h3", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "currencySymbol");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 14)(23, "h4", 15);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "table")(27, "tbody")(28, "tr")(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, PointComponent_div_5_tr_41_Template, 13, 12, "tr", 16);
    \u0275\u0275pipe(42, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, PointComponent_div_5_nav_43_Template, 3, 5, "nav", 17);
    \u0275\u0275pipe(44, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "total_points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, ctx_r2.point$) ? (tmp_2_0 = \u0275\u0275pipeBind1(13, 16, ctx_r2.point$)) == null ? null : tmp_2_0.balance : 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(18, 18, "1_point"), " = ", \u0275\u0275pipeBind1(20, 22, 1 / ((tmp_3_0 = \u0275\u0275pipeBind1(19, 20, ctx_r2.setting$)) == null ? null : tmp_3_0.wallet_points == null ? null : tmp_3_0.wallet_points.point_currency_ratio)), " ", \u0275\u0275pipeBind1(21, 24, "balance"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 26, "transactions"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 28, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 32, "remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 34, "status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_9_0 = \u0275\u0275pipeBind1(42, 36, ctx_r2.point$)) == null ? null : tmp_9_0.transactions == null ? null : tmp_9_0.transactions.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_10_0 = \u0275\u0275pipeBind1(44, 38, ctx_r2.point$)) == null ? null : tmp_10_0.transactions == null ? null : tmp_10_0.transactions.data == null ? null : tmp_10_0.transactions.data.length);
  }
}
function PointComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 20);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_transaction_found")("description", "You_have_not_earned_yet");
  }
}
var _PointComponent = class _PointComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
};
_PointComponent.\u0275fac = function PointComponent_Factory(t) {
  return new (t || _PointComponent)(\u0275\u0275directiveInject(Store));
};
_PointComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointComponent, selectors: [["app-point"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "row"], [1, "col-12"], [1, "totle-contain", "wallet-bg"], [1, "wallet-point-box"], ["src", "assets/images/svg/coin.svg", "alt", "coin", 1, "img-fluid"], [1, "totle-detail"], [1, "point-ratio"], [1, "counter"], [1, "ri-information-line", "me-2"], [1, "wallet-table"], [1, "user-dashboard-title"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function PointComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, PointComponent_div_5_Template, 45, 40, "div", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, PointComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
    \u0275\u0275pipe(8, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "points"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.point$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.data == null ? null : tmp_2_0.transactions.data.length));
  }
}, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
var PointComponent = _PointComponent;
__decorate([
  Select(SettingState.setting)
], PointComponent.prototype, "setting$", void 0);
__decorate([
  Select(PointState.point)
], PointComponent.prototype, "point$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointComponent, { className: "PointComponent", filePath: "src\\app\\components\\account\\point\\point.component.ts", lineNumber: 16 });
})();

// src/app/components/account/orders/orders.component.ts
var _c03 = (a0) => ["/account/order/details", a0];
function OrdersComponent_div_5_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "a", 10);
    \u0275\u0275element(19, "i", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 12, order_r1 == null ? null : order_r1.total), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("status-", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, order_r1 == null ? null : order_r1.payment_status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", order_r1 == null ? null : order_r1.payment_method == null ? null : order_r1.payment_method.toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c03, order_r1.order_number));
  }
}
function OrdersComponent_div_5_nav_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 12)(1, "app-pagination", 13);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function OrdersComponent_div_5_nav_26_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.order$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function OrdersComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "table")(4, "tbody")(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, OrdersComponent_div_5_tr_24_Template, 20, 18, "tr", 7);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, OrdersComponent_div_5_nav_26_Template, 3, 5, "nav", 8);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "payment_status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "payment_method"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, "option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_7_0 = \u0275\u0275pipeBind1(25, 20, ctx_r2.order$)) == null ? null : tmp_7_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_8_0 = \u0275\u0275pipeBind1(27, 22, ctx_r2.order$)) == null ? null : tmp_8_0.data == null ? null : tmp_8_0.data.length);
  }
}
function OrdersComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 14);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_orders_found")("description", "no_orders_have_yet");
  }
}
var _OrdersComponent = class _OrdersComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetOrders(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetOrders(this.filter));
  }
};
_OrdersComponent.\u0275fac = function OrdersComponent_Factory(t) {
  return new (t || _OrdersComponent)(\u0275\u0275directiveInject(Store));
};
_OrdersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "fw-bolder"], [3, "routerLink"], [1, "ri-eye-line"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function OrdersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, OrdersComponent_div_5_Template, 28, 24, "div", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, OrdersComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
    \u0275\u0275pipe(8, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "my_orders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.order$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.order$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length));
  }
}, dependencies: [NgForOf, NgIf, RouterLink, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
var OrdersComponent = _OrdersComponent;
__decorate([
  Select(OrderState.order)
], OrdersComponent.prototype, "order$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\components\\account\\orders\\orders.component.ts", lineNumber: 14 });
})();

// src/app/components/account/orders/details/details.component.ts
var _c04 = ["refundModal"];
var _c13 = ["payModal"];
var _c22 = (a0) => ({ "d-none": a0 });
var _c32 = (a0) => ["/account/order/details", a0];
function OrderDetailsComponent_div_0_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_0_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const payModal_r3 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(payModal_r3.openModal(ctx_r1.order));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pay_now"));
  }
}
function OrderDetailsComponent_div_0_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_0_a_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download(ctx_r1.order.order_number));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invoice"), " ");
  }
}
function OrderDetailsComponent_div_0_ul_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275element(4, "img", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const orderStatus_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) <= ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c22, (orderStatus_r5 == null ? null : orderStatus_r5.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "cancelled") || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r5 == null ? null : orderStatus_r5.slug) == "shipped" || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "out-for-delivery")));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", orderStatus_r5 == null ? null : orderStatus_r5.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, orderStatus_r5 == null ? null : orderStatus_r5.name));
  }
}
function OrderDetailsComponent_div_0_ul_11_li_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "img", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", ctx_r1.order.order_status.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.order.order_status.name.replace("_", " ")));
  }
}
function OrderDetailsComponent_div_0_ul_11_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 38);
    \u0275\u0275template(1, OrderDetailsComponent_div_0_ul_11_li_3_div_1_Template, 6, 5, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.order_status);
  }
}
function OrderDetailsComponent_div_0_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, OrderDetailsComponent_div_0_ul_11_ng_container_1_Template, 8, 10, "ng-container", 31);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, OrderDetailsComponent_div_0_ul_11_li_3_Template, 2, 1, "li", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_4_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.orderStatus$)) == null ? null : tmp_4_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.order_status) && (ctx_r1.order == null ? null : ctx_r1.order.order_status == null ? null : ctx_r1.order.order_status.slug) == "cancelled");
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_0_div_12_tr_25_a_18_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      const refundModal_r8 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(refundModal_r8.openModal(product_r7, ctx_r1.order.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "refund"), " ");
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Non-Refundable ");
    \u0275\u0275elementContainerEnd();
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titleCase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMapInterpolate1("status-", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status == null ? null : product_r7.pivot.refund_status.toLowerCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status));
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_ng_template_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "refund"), "");
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_ng_template_1_a_1_Template, 3, 3, "a", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status));
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_div_0_Template, 4, 6, "div", 48)(1, OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_ng_template_1_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const disabled_r9 = \u0275\u0275reference(2);
    const product_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status)("ngIfElse", disabled_r9);
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_container_0_Template, 2, 0, "ng-container", 47)(1, OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_ng_template_1_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const NonRefundable_r10 = \u0275\u0275reference(2);
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", product_r7.is_return === 0)("ngIfElse", NonRefundable_r10);
  }
}
function OrderDetailsComponent_div_0_div_12_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275element(2, "img", 44);
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, OrderDetailsComponent_div_0_div_12_tr_25_a_18_Template, 3, 3, "a", 45)(19, OrderDetailsComponent_div_0_div_12_tr_25_ng_template_19_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const noRefund_r11 = \u0275\u0275reference(20);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) && (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image == null ? null : product_r7.pivot.variation.variation_image.original_url : (product_r7 == null ? null : product_r7.product_thumbnail) ? product_r7 == null ? null : product_r7.product_thumbnail == null ? null : product_r7.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.name : product_r7 == null ? null : product_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.single_price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 9, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.subtotal));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (product_r7 == null ? null : product_r7.is_return) === 1 && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) === "COMPLETED" && ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "delivered" && !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status))("ngIfElse", noRefund_r11);
  }
}
function OrderDetailsComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 40)(3, "table", 41)(4, "thead")(5, "tr")(6, "th", 42);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 42);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 42);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 42);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 42);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 42);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, OrderDetailsComponent_div_0_div_12_tr_25_Template, 21, 11, "tr", 31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 15, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 17, "Refund Status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.products);
  }
}
function OrderDetailsComponent_div_0_li_22_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.billing_address.street, " ", ctx_r1.order.billing_address.city, " ", ctx_r1.order.billing_address.state.name, " ", ctx_r1.order.billing_address.country.name, " ", ctx_r1.order.billing_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 8, "phone"), " : +", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, " ");
  }
}
function OrderDetailsComponent_div_0_li_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrderDetailsComponent_div_0_li_22_h4_4_Template, 5, 10, "h4", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "billing_address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.billing_address == null ? null : ctx_r1.order.billing_address.state);
  }
}
function OrderDetailsComponent_div_0_li_23_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.shipping_address.street, " ", ctx_r1.order.shipping_address.city, " ", ctx_r1.order.shipping_address.state.name, " ", ctx_r1.order.shipping_address.country.name, " ", ctx_r1.order.shipping_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 8, "phone"), " : +", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, " ");
  }
}
function OrderDetailsComponent_div_0_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrderDetailsComponent_div_0_li_23_h4_4_Template, 5, 10, "h4", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "shipping_address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.shipping_address == null ? null : ctx_r1.order.shipping_address.state);
  }
}
function OrderDetailsComponent_div_0_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52)(1, "label");
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
function OrderDetailsComponent_div_0_li_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54)(5, "h4");
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
function OrderDetailsComponent_div_0_li_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54)(5, "h4");
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
function OrderDetailsComponent_div_0_li_41_Template(rf, ctx) {
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
function OrderDetailsComponent_div_0_li_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 55);
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
function OrderDetailsComponent_div_0_li_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 55);
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
function OrderDetailsComponent_div_0_li_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 55);
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "discount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.coupon_total_discount));
  }
}
function OrderDetailsComponent_div_0_div_57_tr_22_Template(rf, ctx) {
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
    \u0275\u0275elementStart(17, "td")(18, "a", 56);
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subOrder_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("#" + subOrder_r12.order_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, subOrder_r12.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, subOrder_r12.amount));
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("status-", subOrder_r12.order_status.slug, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subOrder_r12.order_status.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c32, subOrder_r12.order_number));
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-eye-line");
  }
}
function OrderDetailsComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 40)(3, "table", 41)(4, "thead")(5, "tr")(6, "th", 42);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 42);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 42);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 42);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 42);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, OrderDetailsComponent_div_0_div_57_tr_22_Template, 20, 17, "tr", 31);
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
function OrderDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 6)(2, "div", 7)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275template(7, OrderDetailsComponent_div_0_a_7_Template, 4, 3, "a", 9)(8, OrderDetailsComponent_div_0_a_8_Template, 4, 3, "a", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12);
    \u0275\u0275template(11, OrderDetailsComponent_div_0_ul_11_Template, 4, 4, "ul", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, OrderDetailsComponent_div_0_div_12_Template, 26, 19, "div", 13);
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "h3", 18);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "ul", 20);
    \u0275\u0275template(22, OrderDetailsComponent_div_0_li_22_Template, 5, 4, "li", 21)(23, OrderDetailsComponent_div_0_li_23_Template, 5, 4, "li", 21)(24, OrderDetailsComponent_div_0_li_24_Template, 6, 4, "li", 21)(25, OrderDetailsComponent_div_0_li_25_Template, 8, 6, "li", 22)(26, OrderDetailsComponent_div_0_li_26_Template, 8, 6, "li", 22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "div", 17)(30, "h3", 18);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 25)(34, "ul")(35, "li");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, OrderDetailsComponent_div_0_li_41_Template, 6, 6, "li", 5);
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, OrderDetailsComponent_div_0_li_48_Template, 6, 6, "li", 26)(49, OrderDetailsComponent_div_0_li_49_Template, 6, 6, "li", 26)(50, OrderDetailsComponent_div_0_li_50_Template, 6, 6, "li", 26);
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(57, OrderDetailsComponent_div_0_div_57_Template, 23, 16, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 24, "order_number"), ": #", ctx_r1.order.order_number, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((ctx_r1.order == null ? null : ctx_r1.order.payment_status) === "FAILED" || (ctx_r1.order == null ? null : ctx_r1.order.payment_status) === "PENDING") && ((ctx_r1.order == null ? null : ctx_r1.order.order_status) && (ctx_r1.order == null ? null : ctx_r1.order.order_status == null ? null : ctx_r1.order.order_status.slug) != "cancelled") && (ctx_r1.order == null ? null : ctx_r1.order.payment_method) != "cod");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.invoice_url) && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) === "COMPLETED" && ctx_r1.isLogin);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.order && !(ctx_r1.order == null ? null : ctx_r1.order.sub_orders == null ? null : ctx_r1.order.sub_orders.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.products == null ? null : ctx_r1.order.products.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, "consumer_details"));
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 28, "summary"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(37, 30, "subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 32, ctx_r1.order.amount ? ctx_r1.order.amount : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(44, 34, "tax"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 36, ctx_r1.order.tax_total ? ctx_r1.order.tax_total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order.points_amount != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.wallet_balance != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.coupon_total_discount != 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(53, 38, "total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 40, ctx_r1.order.total ? ctx_r1.order.total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.sub_orders == null ? null : ctx_r1.order.sub_orders.length);
  }
}
var _OrderDetailsComponent = class _OrderDetailsComponent {
  constructor(store, route) {
    this.store = store;
    this.route = route;
    this.destroy$ = new Subject();
    this.store.dispatch(new GetOrderStatus());
  }
  ngOnInit() {
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
    this.route.params.pipe(switchMap((params) => {
      if (!params["id"])
        return of();
      return this.store.dispatch(new ViewOrder(params["id"])).pipe(mergeMap(() => this.store.select(OrderState.selectedOrder)));
    }), takeUntil(this.destroy$)).subscribe((order) => {
      this.order = order;
    });
  }
  download(id) {
    this.store.dispatch(new DownloadInvoice({ order_number: id }));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_OrderDetailsComponent.\u0275fac = function OrderDetailsComponent_Factory(t) {
  return new (t || _OrderDetailsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute));
};
_OrderDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailsComponent, selectors: [["app-order-details"]], viewQuery: function OrderDetailsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 5);
    \u0275\u0275viewQuery(_c13, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.RefundModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.PayModal = _t.first);
  }
}, decls: 5, vars: 1, consts: [["refundModal", ""], ["payModal", ""], ["noRefund", ""], ["NonRefundable", ""], ["disabled", ""], [4, "ngIf"], [1, "title-header"], [1, "d-flex", "align-items-center", "w-100", "justify-content-between"], [1, "right-option"], ["href", "javascript:void(0)", "class", "btn btn-md fw-bold text-light theme-bg-color", 3, "click", 4, "ngIf"], ["class", "btn btn-md fw-bold text-light theme-bg-color ms-auto", "download", "download", 3, "click", 4, "ngIf"], [1, "mb-4"], [1, "tracking-panel"], ["class", "card", 4, "ngIf"], [1, "row", "g-sm-3", "g-2"], [1, "col-xxl-8", "col-lg-12", "col-md-7"], [1, "card"], [1, "card-body"], [1, "fw-semibold", "mb-3"], [1, "customer-detail", "tracking-wrapper"], [1, "row", "g-3"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-3", 4, "ngIf"], [1, "col-xxl-4", "col-lg-12", "col-md-5"], [1, "card", "h-m30"], [1, "tracking-total", "tracking-wrapper"], ["class", "txt-primary fw-bold", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", 3, "click"], [1, "ri-refresh-line", "ms-2"], ["download", "download", 1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", "ms-auto", 3, "click"], [1, "ri-download-2-fill", "ms-2"], [4, "ngFor", "ngForOf"], ["class", "active cancelled-box", 4, "ngIf"], [3, "ngClass"], [1, "panel-content"], [1, "icon"], ["alt", "image", 1, "img-fluid", 3, "src"], [1, "status"], [1, "active", "cancelled-box"], ["class", "panel-content", 4, "ngIf"], [1, "tracking-wrapper", "table-responsive"], [1, "table", "product-table"], ["scope", "col"], [1, "product-image"], ["alt", "product", 1, "img-fluid", 3, "src"], ["class", "btn btn-md fw-bold text-light theme-bg-color btn-sm d-inline-block", "href", "javascript:void(0)", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", "btn-sm", "d-inline-block", 3, "click"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf", "ngIfElse"], ["placement", "top", "ngbTooltip", "Enable after delivery", 1, "black-tooltip"], ["class", "btn-theme-outline btn btn-sm d-inline-block disabled", 4, "ngIf"], [1, "btn-theme-outline", "btn", "btn-sm", "d-inline-block", "disabled"], [1, "col-sm-6"], [1, "col-sm-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "txt-primary", "fw-bold"], ["href", "javascript:void(0)", 3, "routerLink"]], template: function OrderDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_0_Template, 58, 42, "div", 5);
    \u0275\u0275element(1, "app-refund-modal", null, 0)(3, "app-pay-modal", null, 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.order);
  }
}, dependencies: [NgClass, NgForOf, NgIf, RouterLink, NgbTooltip, RefundModalComponent, PayModalComponent, AsyncPipe, UpperCasePipe, TitleCasePipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
var OrderDetailsComponent = _OrderDetailsComponent;
__decorate([
  Select(OrderStatusState.orderStatus)
], OrderDetailsComponent.prototype, "orderStatus$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailsComponent, { className: "OrderDetailsComponent", filePath: "src\\app\\components\\account\\orders\\details\\details.component.ts", lineNumber: 20 });
})();

// src/app/components/account/refund/refund.component.ts
function RefundComponent_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", refund_r1 == null ? null : refund_r1.order == null ? null : refund_r1.order.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", refund_r1 == null ? null : refund_r1.status, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, refund_r1 == null ? null : refund_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(refund_r1 == null ? null : refund_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, refund_r1 == null ? null : refund_r1.created_at, "dd MMM yyyy"));
  }
}
function RefundComponent_div_5_nav_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 10)(1, "app-pagination", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function RefundComponent_div_5_nav_19_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.refund$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function RefundComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "table")(3, "tbody")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, RefundComponent_div_5_tr_17_Template, 14, 12, "tr", 7);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, RefundComponent_div_5_nav_19_Template, 3, 5, "nav", 8);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "created_at"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_5_0 = \u0275\u0275pipeBind1(18, 14, ctx_r2.refund$)) == null ? null : tmp_5_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(20, 16, ctx_r2.refund$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.length);
  }
}
function RefundComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 12);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_refunds_found")("description", "you_have_no_refunds_yet");
  }
}
var _RefundComponent = class _RefundComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetRefund(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetRefund(this.filter));
  }
};
_RefundComponent.\u0275fac = function RefundComponent_Factory(t) {
  return new (t || _RefundComponent)(\u0275\u0275directiveInject(Store));
};
_RefundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundComponent, selectors: [["app-refund"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "wallet-table", "mt-0", "refund-table"], [1, "reason-table"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "fw-bolder"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function RefundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, RefundComponent_div_5_Template, 21, 18, "div", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, RefundComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
    \u0275\u0275pipe(8, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "refund"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.refund$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.refund$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length));
  }
}, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, TranslatePipe] });
var RefundComponent = _RefundComponent;
__decorate([
  Select(RefundState.refund)
], RefundComponent.prototype, "refund$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundComponent, { className: "RefundComponent", filePath: "src\\app\\components\\account\\refund\\refund.component.ts", lineNumber: 14 });
})();

// src/app/components/account/addresses/addresses.component.ts
var _c05 = ["addressModal"];
var _c14 = ["deleteModal"];
function AddressesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div")(3, "div", 14)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "table", 16)(8, "tbody")(9, "tr")(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "titleCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tr")(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(33, "div", 18)(34, "app-button", 5);
    \u0275\u0275listener("click", function AddressesComponent_div_10_div_1_Template_app_button_click_34_listener() {
      const address_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.AddressModal.openModal(address_r3));
    });
    \u0275\u0275element(35, "i", 19);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "app-button", 5);
    \u0275\u0275listener("click", function AddressesComponent_div_10_div_1_Template_app_button_click_38_listener() {
      const address_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.DeleteModal.openModal("delete", address_r3));
    });
    \u0275\u0275element(39, "i", 20);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const address_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(address_r3 == null ? null : address_r3.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 26, (tmp_7_0 = \u0275\u0275pipeBind1(12, 24, ctx_r3.user$)) == null ? null : tmp_7_0.name));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 28, "address"), " :");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", address_r3 == null ? null : address_r3.street, ", ", address_r3 == null ? null : address_r3.city, ", ", address_r3 == null ? null : address_r3.state == null ? null : address_r3.state.name, ", ", address_r3 == null ? null : address_r3.country == null ? null : address_r3.country.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 30, "pin_code"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(address_r3 == null ? null : address_r3.pincode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 32, "phone"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", address_r3 == null ? null : address_r3.country_code, " ", address_r3 == null ? null : address_r3.phone, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-sm add-button");
    \u0275\u0275property("type", "button")("spinner", false)("id", "edit_address" + address_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 34, "edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-sm add-button");
    \u0275\u0275property("type", "button")("spinner", false)("id", "remove_address" + address_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 36, "remove"), " ");
  }
}
function AddressesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, AddressesComponent_div_10_div_1_Template, 42, 38, "div", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, ctx_r3.user$)) == null ? null : tmp_3_0.address);
  }
}
function AddressesComponent_app_no_data_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_address_found")("description", "You_have_not_address_yet");
  }
}
var _AddressesComponent = class _AddressesComponent {
  constructor(store) {
    this.store = store;
  }
  delete(action, data) {
    if (action == "delete" && data)
      this.store.dispatch(new DeleteAddress(data.id));
  }
};
_AddressesComponent.\u0275fac = function AddressesComponent_Factory(t) {
  return new (t || _AddressesComponent)(\u0275\u0275directiveInject(Store));
};
_AddressesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressesComponent, selectors: [["app-addresses"]], viewQuery: function AddressesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
    \u0275\u0275viewQuery(_c14, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.AddressModal = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.DeleteModal = _t.first);
  }
}, decls: 18, vars: 17, consts: [["addressModal", ""], ["deleteModal", ""], [1, "dashboard-address"], [1, "title-header"], [1, "d-flex", "align-items-center", "w-100", "justify-content-between"], [3, "click", "type", "spinner", "id"], [1, "ri-add-line"], ["class", "row g-sm-4 g-3", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [3, "deleteItem"], [1, "row", "g-sm-4", "g-3"], ["class", "col-xxl-4 col-xl-6 col-lg-12 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6"], [1, "address-box"], [1, "label"], [1, "table-responsive", "address-table"], [1, "table"], ["colspan", "2"], [1, "button-group"], [1, "ri-edit-box-line"], [1, "ri-delete-bin-line"], [3, "image", "text", "description"]], template: function AddressesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-button", 5);
    \u0275\u0275listener("click", function AddressesComponent_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.AddressModal.openModal());
    });
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AddressesComponent_div_10_Template, 3, 3, "div", 7);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AddressesComponent_app_no_data_12_Template, 1, 5, "app-no-data", 8);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275element(14, "address-modal", null, 0);
    \u0275\u0275elementStart(16, "app-delete-modal", 9, 1);
    \u0275\u0275listener("deleteItem", function AddressesComponent_Template_app_delete_modal_deleteItem_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.delete($event.actionToPerform, $event.data));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "saved_address"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 ms-auto");
    \u0275\u0275property("type", "button")("spinner", false)("id", "add_address");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "add_address"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_8_0 = \u0275\u0275pipeBind1(11, 13, ctx.user$)) == null ? null : tmp_8_0.address == null ? null : tmp_8_0.address.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_9_0 = \u0275\u0275pipeBind1(13, 15, ctx.user$)) == null ? null : tmp_9_0.address == null ? null : tmp_9_0.address.length));
  }
}, dependencies: [NgForOf, NgIf, ButtonComponent, NoDataComponent, DeleteModalComponent, AddressModalComponent, AsyncPipe, TitleCasePipe2, TranslatePipe] });
var AddressesComponent = _AddressesComponent;
__decorate([
  Select(AccountState.user)
], AddressesComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressesComponent, { className: "AddressesComponent", filePath: "src\\app\\components\\account\\addresses\\addresses.component.ts", lineNumber: 16 });
})();

// src/app/components/account/downloads/downloads.component.ts
function DownloadsComponent_div_12_tr_15_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DownloadsComponent_div_12_tr_15_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFiles(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "all_files"), " & ", \u0275\u0275pipeBind1(3, 4, "documentation"), "");
  }
}
function DownloadsComponent_div_12_tr_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DownloadsComponent_div_12_tr_15_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadLicense(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "license_certificate"), " & ", \u0275\u0275pipeBind1(3, 4, "purchase_code"), "");
  }
}
function DownloadsComponent_div_12_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 14)(7, "button", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275template(11, DownloadsComponent_div_12_tr_15_button_11_Template, 4, 6, "button", 17)(12, DownloadsComponent_div_12_tr_15_button_12_Template, 4, 6, "button", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", data_r2.item_image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.item_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "Download"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", data_r2.can_download_file);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r2.can_download_license);
  }
}
function DownloadsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, DownloadsComponent_div_12_tr_15_Template, 13, 7, "tr", 12);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_4_0 = \u0275\u0275pipeBind1(16, 10, ctx_r2.download$)) == null ? null : tmp_4_0.data);
  }
}
function DownloadsComponent_app_no_data_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 19);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_item_found")("description", "no_orders_have_yet");
  }
}
var _DownloadsComponent = class _DownloadsComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.term = new FormControl("");
    this.store.dispatch(new Downloads(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new Downloads(this.filter));
  }
  search() {
    this.filter["search"] = this.term.value;
    ;
    this.store.dispatch(new Downloads(this.filter));
  }
  downloadFiles(id) {
    this.store.dispatch(new DownloadFiles(id));
  }
  downloadLicense(id) {
    this.store.dispatch(new DownloadLicense(id));
  }
};
_DownloadsComponent.\u0275fac = function DownloadsComponent_Factory(t) {
  return new (t || _DownloadsComponent)(\u0275\u0275directiveInject(Store));
};
_DownloadsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadsComponent, selectors: [["app-downloads"]], decls: 16, vars: 13, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], [1, "download-detail", "dashboard-bg-box"], [1, "input-group", "download-form"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], ["type", "button", 1, "btn", "theme-bg-color", "text-light", 3, "click"], ["class", "download-table", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "download-table"], [1, "table-responsive"], [1, "table"], [1, "table-name"], [4, "ngFor", "ngForOf"], ["alt", "image", 1, "img-fluid", 3, "src"], ["ngbDropdown", "", "container", "body", "placement", "bottom-end", 1, "d-inline-block"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "download-dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [3, "image", "text", "description"]], template: function DownloadsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 2)(6, "form")(7, "div", 3);
    \u0275\u0275element(8, "input", 4);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function DownloadsComponent_Template_button_click_10_listener() {
      return ctx.search();
    });
    \u0275\u0275text(11, "Search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, DownloadsComponent_div_12_Template, 17, 12, "div", 6);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DownloadsComponent_app_no_data_14_Template, 1, 5, "app-no-data", 7);
    \u0275\u0275pipe(15, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "downloads"));
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 7, "search_your_download"));
    \u0275\u0275property("formControl", ctx.term);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(13, 9, ctx.download$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(15, 11, ctx.download$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length));
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgForm, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, NoDataComponent, AsyncPipe, TranslatePipe] });
var DownloadsComponent = _DownloadsComponent;
__decorate([
  Select(DownloadState.download)
], DownloadsComponent.prototype, "download$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadsComponent, { className: "DownloadsComponent", filePath: "src\\app\\components\\account\\downloads\\downloads.component.ts", lineNumber: 15 });
})();

// src/app/components/account/account-routing.module.ts
var routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "wallet",
        component: WalletComponent
      },
      {
        path: "notifications",
        component: NotificationComponent
      },
      {
        path: "bank-details",
        component: BankDetailsComponent
      },
      {
        path: "point",
        component: PointComponent
      },
      {
        path: "order",
        component: OrdersComponent
      },
      {
        path: "order/details/:id",
        component: OrderDetailsComponent
      },
      {
        path: "refund",
        component: RefundComponent
      },
      {
        path: "addresses",
        component: AddressesComponent
      },
      {
        path: "downloads",
        component: DownloadsComponent
      }
    ]
  }
];
var _AccountRoutingModule = class _AccountRoutingModule {
};
_AccountRoutingModule.\u0275fac = function AccountRoutingModule_Factory(t) {
  return new (t || _AccountRoutingModule)();
};
_AccountRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountRoutingModule });
_AccountRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AccountRoutingModule = _AccountRoutingModule;

// src/app/components/account/account.module.ts
var _AccountModule = class _AccountModule {
};
_AccountModule.\u0275fac = function AccountModule_Factory(t) {
  return new (t || _AccountModule)();
};
_AccountModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountModule });
_AccountModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  AccountRoutingModule,
  SharedModule,
  TranslateModule
] });
var AccountModule = _AccountModule;
export {
  AccountModule
};
//# sourceMappingURL=chunk-TCS2F5FD.js.map
