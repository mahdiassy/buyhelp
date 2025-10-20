import {
  RecaptchaComponent,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaValueAccessorDirective
} from "./chunk-2NULJ4ZX.js";
import {
  AlertComponent,
  AsyncPipe,
  AuthService,
  AuthState,
  BreadcrumbComponent,
  ButtonComponent,
  CartState,
  CheckboxControlValueAccessor,
  CommonModule,
  CustomValidators,
  DefaultValueAccessor,
  ForgotPassWord,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  GetCartItems,
  Login,
  LoginWithNumber,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgxsModule,
  NumberValueAccessor,
  ReactiveFormsModule,
  Register,
  Router,
  RouterLink,
  RouterModule,
  Select,
  Select2,
  SettingState,
  SharedModule,
  Store,
  SyncCart,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe,
  UpdatePassword,
  Validators,
  VerifyEmailOtp,
  VerifyNumberOTP,
  __decorate,
  countryCodes,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WW7SXIET.js";

// src/app/components/auth/login/login.component.ts
var _c0 = () => ["/auth/forgot-password"];
var _c1 = () => ["/auth/register"];
var _c2 = () => ["/auth/login-with-number"];
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "email_is_required"), " ");
  }
}
function LoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function LoginComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "password_is_required"), " ");
  }
}
function LoginComponent_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "reCaptcha is required"), " ");
  }
}
function LoginComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "re-captcha", 32);
    \u0275\u0275template(2, LoginComponent_div_37_div_2_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].touched) && (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].errors == null ? null : ctx_r0.form.controls["recaptcha"].errors["required"]));
  }
}
function LoginComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "Login With Mobile Number"), "");
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(store, router, formBuilder, authService) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.breadcrumb = {
      title: "Log in",
      items: [{ label: "Log in", active: true }]
    };
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(null, Validators.required)
    });
    this.setting$.subscribe((setting) => {
      if (setting?.google_reCaptcha && !setting?.google_reCaptcha?.status || !setting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new Login(this.form.value)).subscribe({
        complete: () => {
          let syncCartItems = [];
          this.cartItem$.subscribe((items) => {
            items.filter((item) => {
              if (item) {
                const params = {
                  id: null,
                  product: item?.product,
                  product_id: item?.product_id,
                  variation: item?.variation ? item.variation : null,
                  variation_id: item?.variation_id ? item.variation_id : null,
                  quantity: item.quantity
                };
                syncCartItems.push(params);
              }
            });
          });
          if (syncCartItems.length) {
            this.store.dispatch(new SyncCart(syncCartItems));
          } else {
            this.store.dispatch(new GetCartItems());
          }
          const redirectUrl = this.authService.redirectUrl || "/account/dashboard";
          this.router.navigateByUrl(redirectUrl);
          this.authService.redirectUrl = void 0;
        }
      });
    }
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 65, vars: 53, consts: [[3, "breadcrumb"], [1, "log-in-section", "background-image-2", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/log-in.png", "alt", "login", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "form-floating", "log-in-form"], ["type", "email", "id", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "email"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-floating", "theme-form-floating", "log-in-form"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["for", "password"], ["class", "col-12", 4, "ngIf"], [1, "forgot-box"], [1, "form-check", "ps-0", "m-0", "remember-box"], ["type", "checkbox", "id", "remeberme", 1, "checkbox_animated", "check-box"], ["for", "remeberme", 1, "form-check-label"], [1, "forgot-password", 3, "routerLink"], [3, "id"], [1, "other-log-in"], [1, "sign-up-box"], [3, "routerLink"], [1, "number-btn", 3, "routerLink"], [1, "invalid-feedback"], ["formControlName", "recaptcha"], [1, "ri-smartphone-line"]], template: function LoginComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "form", 11);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
    \u0275\u0275element(22, "input", 14);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "label", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, LoginComponent_div_27_Template, 3, 3, "div", 16)(28, LoginComponent_div_28_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "div", 17);
    \u0275\u0275element(31, "input", 18);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementStart(33, "label", 19);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, LoginComponent_div_36_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, LoginComponent_div_37_Template, 3, 1, "div", 20);
    \u0275\u0275elementStart(38, "div", 12)(39, "div", 21)(40, "div", 22);
    \u0275\u0275element(41, "input", 23);
    \u0275\u0275elementStart(42, "label", 24);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "a", 25);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 12)(49, "app-button", 26);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 27)(53, "h6");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 28)(57, "h4");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "a", 29);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(63, LoginComponent_Conditional_63_Template, 4, 5, "a", 30);
    \u0275\u0275pipe(64, "async");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_21_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 23, "welcome_to"), " ", (tmp_1_0 = \u0275\u0275pipeBind1(14, 25, ctx.setting$)) == null ? null : tmp_1_0.general == null ? null : tmp_1_0.general.site_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 27, "login_your_account"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 29, "email_address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 31, "email_address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(32, 33, "password"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 35, "password"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.reCaptcha);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 37, "remember_me"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(51, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(47, 39, "forgot_password"), "?");
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "login_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 41, "log_in"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 43, "or"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(59, 45, "don't_have_an_account"), "?");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(52, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 47, "sign_up"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(63, ((tmp_21_0 = \u0275\u0275pipeBind1(64, 49, ctx.setting$)) == null ? null : tmp_21_0.activation == null ? null : tmp_21_0.activation.login_number) ? 63 : -1);
  }
}, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, RecaptchaComponent, RecaptchaValueAccessorDirective, AsyncPipe, TranslatePipe] });
var LoginComponent = _LoginComponent;
__decorate([
  Select(CartState.cartItems)
], LoginComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(SettingState.setting)
], LoginComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\auth\\login\\login.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "email_is_required"), " ");
  }
}
function ForgotPasswordComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function ForgotPasswordComponent_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "reCaptcha is required"), " ");
  }
}
function ForgotPasswordComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "re-captcha", 20);
    \u0275\u0275template(2, ForgotPasswordComponent_div_29_div_2_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.form.controls["recaptcha"].touched && (ctx_r0.form.controls["recaptcha"].errors == null ? null : ctx_r0.form.controls["recaptcha"].errors["required"]));
  }
}
var _ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(store, router, authService, formBuilder) {
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "Forgot Password",
      items: [{ label: "Forgot Password", active: true }]
    };
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      recaptcha: ["", [Validators.required]]
    });
    this.setting$.subscribe((setting) => {
      if (setting?.google_reCaptcha && !setting?.google_reCaptcha?.status || !setting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ForgotPassWord(this.form.value)).subscribe({
        complete: () => {
          this.authService.otpType = "email";
          this.router.navigateByUrl("/auth/otp");
        }
      });
    }
  }
};
_ForgotPasswordComponent.\u0275fac = function ForgotPasswordComponent_Factory(t) {
  return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
};
_ForgotPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 34, vars: 24, consts: [[3, "breadcrumb"], [1, "log-in-section", "section-b-space", "forgot-section"], [1, "container-fluid-lg", "w-100"], [1, "row", "align-items-center"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/forgot.png", "alt", "image", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "form-floating", "theme-form-floating", "log-in-form"], ["type", "email", "formControlName", "email", "id", "email", 1, "form-control", 3, "placeholder"], ["for", "email"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [3, "id"], [1, "invalid-feedback"], ["formControlName", "recaptcha"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "form", 11);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_19_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
    \u0275\u0275element(22, "input", 14);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "label", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ForgotPasswordComponent_div_27_Template, 3, 3, "div", 16)(28, ForgotPasswordComponent_div_28_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ForgotPasswordComponent_div_29_Template, 3, 1, "div", 17);
    \u0275\u0275elementStart(30, "div", 12)(31, "app-button", 18);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 12, "welcome_to"), " ", (tmp_1_0 = \u0275\u0275pipeBind1(14, 14, ctx.setting$)) == null ? null : tmp_1_0.general == null ? null : tmp_1_0.general.site_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "forgot_your_password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 18, "email_address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 20, "email_address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.reCaptcha);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "forgot_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 22, "send"));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, RecaptchaComponent, RecaptchaValueAccessorDirective, AsyncPipe, TranslatePipe] });
var ForgotPasswordComponent = _ForgotPasswordComponent;
__decorate([
  Select(ThemeOptionState.themeOptions)
], ForgotPasswordComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(SettingState.setting)
], ForgotPasswordComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\components\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/otp/otp.component.ts
function OtpComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.email);
  }
}
function OtpComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.number.phone);
  }
}
var _OtpComponent = class _OtpComponent {
  constructor(router, store, authService, formBuilder) {
    this.router = router;
    this.store = store;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "OTP",
      items: [{ label: "OTP", active: true }]
    };
    this.form = this.formBuilder.group({
      otp: new FormControl("", [Validators.required, Validators.minLength(5)])
    });
  }
  ngOnInit() {
    this.otpType = this.authService.otpType;
    if (this.otpType === "email") {
      this.email = this.store.selectSnapshot((state) => state.auth.email);
      if (!this.email) {
        this.router.navigateByUrl("/auth/login");
      }
    } else if (this.otpType === "number") {
      this.number = this.store.selectSnapshot((state) => state.auth.number);
      if (!this.number.phone) {
        this.router.navigateByUrl("/auth/login");
      }
    } else {
      this.router.navigateByUrl("/auth/login");
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      var action;
      var value;
      if (this.otpType === "email") {
        value = {
          email: this.email,
          token: this.form.value.otp
        };
        action = new VerifyEmailOtp(value);
      }
      if (this.otpType === "number") {
        value = {
          phone: this.number.phone,
          country_code: this.number.country_code,
          token: this.form.value.otp
        };
        action = new VerifyNumberOTP(value);
      }
      this.store.dispatch(action).subscribe({
        complete: () => {
          if (this.otpType === "email") {
            this.router.navigateByUrl("/auth/update-password");
          } else {
            this.router.navigateByUrl("/account/dashboard");
          }
        }
      });
    }
  }
};
_OtpComponent.\u0275fac = function OtpComponent_Factory(t) {
  return new (t || _OtpComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
};
_OtpComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], decls: 26, vars: 16, consts: [[3, "breadcrumb"], [1, "log-in-section", "otp-section", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row", "align-items-center"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/otp.png", "alt", "image", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "text-title"], [1, "text-content"], [4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "outer-otp"], ["id", "otp", 1, "inner-otp"], ["type", "text", "formControlName", "otp", "maxlength", "5", "oninput", "this.value = this.value?.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "onKeyPress", "if(this.value.length==5) return false;"], [3, "id"]], template: function OtpComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275element(8, "app-alert");
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h3", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h5", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275template(17, OtpComponent_span_17_Template, 2, 1, "span", 12)(18, OtpComponent_span_18_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "form", 13);
    \u0275\u0275listener("ngSubmit", function OtpComponent_Template_form_ngSubmit_19_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(20, "div", 14)(21, "div", 15);
    \u0275\u0275element(22, "input", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "app-button", 17);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "please_enter_the_one_time_password_to_verify_your_account"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 12, "a_code_has_been_sent_to"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.otpType === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.otpType === "number");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275classMap("btn btn-animation w-100 mt-3");
    \u0275\u0275property("id", "forgot_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "validate"));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, TranslatePipe] });
var OtpComponent = _OtpComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent", filePath: "src\\app\\components\\auth\\otp\\otp.component.ts", lineNumber: 15 });
})();

// src/app/components/auth/update-password/update-password.component.ts
function UpdatePasswordComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "new_password_is_required"), " ");
  }
}
function UpdatePasswordComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm_password_is_required"), " ");
  }
}
var _UpdatePasswordComponent = class _UpdatePasswordComponent {
  constructor(store, formBuilder, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.router = router;
    this.breadcrumb = {
      title: "Reset Password",
      items: [{ label: "Reset Password", active: true }]
    };
    this.email = this.store.selectSnapshot((state) => state.auth.email);
    this.token = this.store.selectSnapshot((state) => state.auth.token);
    if (!this.email && !this.token)
      this.router.navigateByUrl("/auth/login");
    this.form = this.formBuilder.group({
      newPassword: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePassword({
        email: this.email,
        token: this.token,
        password: this.form.value.newPassword,
        password_confirmation: this.form.value.confirmPassword
      })).subscribe({
        complete: () => {
          this.router.navigateByUrl("/auth/login");
        }
      });
    }
  }
};
_UpdatePasswordComponent.\u0275fac = function UpdatePasswordComponent_Factory(t) {
  return new (t || _UpdatePasswordComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
};
_UpdatePasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 40, vars: 29, consts: [[3, "breadcrumb"], [1, "log-in-section", "background-image-2", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/log-in.png", "alt", "update password", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "form-floating", "theme-form-floating", "log-in-form"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "placeholder"], ["for", "newPassword"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "placeholder"], ["for", "confirmPassword"], [3, "id"], [1, "invalid-feedback"]], template: function UpdatePasswordComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "form", 11);
    \u0275\u0275listener("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_19_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
    \u0275\u0275element(22, "input", 14);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "label", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, UpdatePasswordComponent_div_27_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12)(29, "div", 13);
    \u0275\u0275element(30, "input", 17);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementStart(32, "label", 18);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, UpdatePasswordComponent_div_35_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 12)(37, "app-button", 19);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 13, "welcome_to"), " ", (tmp_1_0 = \u0275\u0275pipeBind1(14, 15, ctx.setting$)) == null ? null : tmp_1_0.general == null ? null : tmp_1_0.general.site_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, "reset_your_account_password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 19, "password"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "new_password"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["newPassword"].touched && (ctx.form.controls["newPassword"].errors == null ? null : ctx.form.controls["newPassword"].errors["required"]));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(31, 23, "confirm_password"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "confirm_password"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["confirmPassword"].touched && (ctx.form.controls["confirmPassword"].errors == null ? null : ctx.form.controls["confirmPassword"].errors["required"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "confirm_pass_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 27, "submit"));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, AsyncPipe, TranslatePipe] });
var UpdatePasswordComponent = _UpdatePasswordComponent;
__decorate([
  Select(SettingState.setting)
], UpdatePasswordComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePasswordComponent, { className: "UpdatePasswordComponent", filePath: "src\\app\\components\\auth\\update-password\\update-password.component.ts", lineNumber: 16 });
})();

// src/app/components/auth/register/register.component.ts
var _c02 = () => ["/auth/login"];
function RegisterComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "name_is_required"));
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "email_is_required"));
  }
}
function RegisterComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function RegisterComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "phone_number_is_required"));
  }
}
function RegisterComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
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
function RegisterComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "password_is_required"));
  }
}
function RegisterComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "confirm_password_is_required"));
  }
}
function RegisterComponent_ng_template_63_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm_password_does_not_matched"), " ");
  }
}
function RegisterComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RegisterComponent_ng_template_63_div_0_Template, 3, 3, "div", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.passwordMatchError);
  }
}
function RegisterComponent_div_80_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "reCaptcha is required"), " ");
  }
}
function RegisterComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "re-captcha", 45);
    \u0275\u0275template(2, RegisterComponent_div_80_div_2_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.controls["recaptcha"].touched && (ctx_r2.form.controls["recaptcha"].errors == null ? null : ctx_r2.form.controls["recaptcha"].errors["required"]));
  }
}
var _RegisterComponent = class _RegisterComponent {
  constructor(store, router, formBuilder) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "Sign In",
      items: [{ label: "Sign In", active: true }]
    };
    this.codes = countryCodes;
    this.tnc = new FormControl(false, [Validators.requiredTrue]);
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      country_code: new FormControl("91", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      password_confirmation: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(null, Validators.required)
    }, { validator: CustomValidators.MatchValidator("password", "password_confirmation") });
    this.setting$.subscribe((seting) => {
      if (seting?.google_reCaptcha && !seting?.google_reCaptcha?.status || !seting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
  }
  get passwordMatchError() {
    return this.form.getError("mismatch") && this.form.get("password_confirmation")?.touched;
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.tnc.invalid) {
      return;
    }
    if (this.form.valid) {
      this.store.dispatch(new Register(this.form.value)).subscribe({
        complete: () => {
          this.router.navigateByUrl("/account/dashboard");
        }
      });
    }
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder));
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 97, vars: 82, consts: [["template", ""], ["error", ""], [3, "breadcrumb"], [1, "log-in-section", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/sign-up.png", "alt", "register", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "form-floating", "log-in-form"], ["type", "name", "id", "name", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "name"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "id", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "email"], [1, "col-12", "phone-field"], ["type", "number", "id", "phone", "id", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["for", "phone"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "data", "templates"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["for", "password"], ["type", "password", "id", "password_confirmation", "formControlName", "password_confirmation", 1, "form-control", 3, "placeholder"], ["for", "password_confirmation"], ["autocomplete", "false", "class", "invalid-feedback", 4, "ngIf", "ngIfElse"], [1, "forgot-box"], [1, "form-check", "ps-0", "m-0", "remember-box"], ["type", "checkbox", "id", "flexCheckDefault", 1, "checkbox_animated", "check-box", 3, "formControl"], ["for", "flexCheckDefault", 1, "form-check-label"], ["class", "col-12", 4, "ngIf"], [3, "id", "disabled"], [1, "other-log-in"], [1, "sign-up-box"], [3, "routerLink"], [1, "col-xxl-7", "col-xl-6", "col-lg-6"], [1, "invalid-feedback"], [1, "country"], [1, "flag-box"], [1, "dial-code"], ["autocomplete", "false", 1, "invalid-feedback"], ["formControlName", "recaptcha"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-breadcrumb", 2);
    \u0275\u0275elementStart(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275element(6, "img", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12)(18, "form", 13);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "label", 17);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, RegisterComponent_div_26_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "div", 15);
    \u0275\u0275element(29, "input", 19);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "label", 20);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, RegisterComponent_div_34_Template, 3, 3, "div", 18)(35, RegisterComponent_div_35_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 21)(37, "div", 15);
    \u0275\u0275element(38, "input", 22);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementStart(40, "label", 23);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, RegisterComponent_div_43_Template, 3, 3, "div", 18);
    \u0275\u0275elementStart(44, "select2", 24);
    \u0275\u0275template(45, RegisterComponent_ng_template_45_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 14)(48, "div", 15);
    \u0275\u0275element(49, "input", 25);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementStart(51, "label", 26);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, RegisterComponent_div_54_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 14)(56, "div", 15);
    \u0275\u0275element(57, "input", 27);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementStart(59, "label", 28);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, RegisterComponent_div_62_Template, 3, 3, "div", 29)(63, RegisterComponent_ng_template_63_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 14)(66, "div", 30)(67, "div", 31);
    \u0275\u0275element(68, "input", 32);
    \u0275\u0275elementStart(69, "label", 33);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(80, RegisterComponent_div_80_Template, 3, 1, "div", 34);
    \u0275\u0275elementStart(81, "div", 14)(82, "app-button", 35);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 36)(86, "h6");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 37)(90, "h4");
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "a", 38);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(96, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const template_r4 = \u0275\u0275reference(46);
    const error_r5 = \u0275\u0275reference(64);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 39, "welcome_to"), " ", (tmp_3_0 = \u0275\u0275pipeBind1(13, 41, ctx.setting$)) == null ? null : tmp_3_0.general == null ? null : tmp_3_0.general.site_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 43, "create_new_account"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(22, 45, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 47, "full_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(30, 49, "email_address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 51, "email_address"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(39, 53, "phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 55, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.codes)("templates", template_r4);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(50, 57, "password"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 59, "password"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(58, 61, "password_confirmation"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 63, "password_confirmation"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["password_confirmation"].touched && (ctx.form.controls["password_confirmation"].errors == null ? null : ctx.form.controls["password_confirmation"].errors["required"]))("ngIfElse", error_r5);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx.tnc);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx.tnc.errors == null ? null : ctx.tnc.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(71, 65, "i_agree_with"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 67, "terms"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 69, "and"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 71, "privacy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.reCaptcha);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "sign_up_btn")("disabled", ctx.tnc.invalid || ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 73, "sign_up"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 75, "or"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(92, 77, "already_have_an_account"), "?");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(81, _c02));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 79, "log_in"));
  }
}, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, BreadcrumbComponent, ButtonComponent, Select2, RecaptchaComponent, RecaptchaValueAccessorDirective, AsyncPipe, TranslatePipe] });
var RegisterComponent = _RegisterComponent;
__decorate([
  Select(SettingState.setting)
], RegisterComponent.prototype, "setting$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], RegisterComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\components\\auth\\register\\register.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/login-with-number/login-with-number.component.ts
var _c03 = () => ["/auth/register"];
function LoginWithNumberComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "phone_number_is_required"));
  }
}
function LoginWithNumberComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
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
var _LoginWithNumberComponent = class _LoginWithNumberComponent {
  constructor(store, router, authService, formBuilder) {
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.codes = countryCodes;
    this.breadcrumb = {
      title: "Login With Number",
      items: [{ label: "Login With Number", active: true }]
    };
    this.form = this.formBuilder.group({
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      country_code: new FormControl("91", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new LoginWithNumber(this.form.value)).subscribe({
        complete: () => {
          this.authService.otpType = "number";
          this.router.navigateByUrl("/auth/otp");
        }
      });
    }
  }
};
_LoginWithNumberComponent.\u0275fac = function LoginWithNumberComponent_Factory(t) {
  return new (t || _LoginWithNumberComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
};
_LoginWithNumberComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginWithNumberComponent, selectors: [["app-login-with-number"]], decls: 47, vars: 35, consts: [["template", ""], [3, "breadcrumb"], [1, "log-in-section", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/sign-up.png", "alt", "register", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12", "phone-field"], [1, "form-floating", "log-in-form"], ["type", "number", "id", "phone", "id", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["for", "phone"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "data", "templates"], [1, "col-12"], [3, "id"], [1, "other-log-in"], [1, "sign-up-box"], [3, "routerLink"], [1, "col-xxl-7", "col-xl-6", "col-lg-6"], [1, "invalid-feedback"], [1, "country"], [1, "flag-box"], [1, "dial-code"]], template: function LoginWithNumberComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-breadcrumb", 1);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275element(6, "img", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275element(8, "app-alert");
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11)(19, "form", 12);
    \u0275\u0275listener("ngSubmit", function LoginWithNumberComponent_Template_form_ngSubmit_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
    \u0275\u0275element(22, "input", 15);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "label", 16);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, LoginWithNumberComponent_div_27_Template, 3, 3, "div", 17);
    \u0275\u0275elementStart(28, "select2", 18);
    \u0275\u0275template(29, LoginWithNumberComponent_ng_template_29_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 19)(32, "app-button", 20);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 21)(36, "h6");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 22)(40, "h4");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 23);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(46, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const template_r3 = \u0275\u0275reference(30);
    \u0275\u0275property("breadcrumb", ctx.breadcrumb);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 16, "welcome_to"), " ", (tmp_2_0 = \u0275\u0275pipeBind1(14, 18, ctx.setting$)) == null ? null : tmp_2_0.general == null ? null : tmp_2_0.general.site_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "login_your_account"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 22, "phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 24, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.codes)("templates", template_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("id", "send_otp_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 26, "Send Otp"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 28, "or"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 30, "don't_have_an_account"), "?");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(34, _c03));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 32, "sign_up"));
  }
}, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, Select2, AsyncPipe, TranslatePipe] });
var LoginWithNumberComponent = _LoginWithNumberComponent;
__decorate([
  Select(SettingState.setting)
], LoginWithNumberComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginWithNumberComponent, { className: "LoginWithNumberComponent", filePath: "src\\app\\components\\auth\\login-with-number\\login-with-number.component.ts", lineNumber: 19 });
})();

// src/app/components/auth/auth-routing.module.ts
var routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "otp",
    component: OtpComponent
  },
  {
    path: "update-password",
    component: UpdatePasswordComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login-with-number",
    component: LoginWithNumberComponent
  }
];
var _AuthRoutingModule = class _AuthRoutingModule {
};
_AuthRoutingModule.\u0275fac = function AuthRoutingModule_Factory(t) {
  return new (t || _AuthRoutingModule)();
};
_AuthRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
_AuthRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AuthRoutingModule = _AuthRoutingModule;

// src/app/components/auth/auth.module.ts
var _AuthModule = class _AuthModule {
};
_AuthModule.\u0275fac = function AuthModule_Factory(t) {
  return new (t || _AuthModule)();
};
_AuthModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
_AuthModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  AuthRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  NgxsModule.forFeature([AuthState]),
  TranslateModule,
  RecaptchaModule,
  RecaptchaFormsModule
] });
var AuthModule = _AuthModule;
export {
  AuthModule
};
//# sourceMappingURL=chunk-K2Y4MRUS.js.map
