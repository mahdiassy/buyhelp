import {
  Action,
  HttpClient,
  Selector,
  State,
  __decorate,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WW7SXIET.js";

// src/app/shared/action/tag.action.ts
var _GetTags = class _GetTags {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetTags.type = "[Tag] Get";
var GetTags = _GetTags;

// src/app/shared/services/tag.service.ts
var _TagService = class _TagService {
  constructor(http) {
    this.http = http;
  }
  getTags(payload) {
    return this.http.get(`${environment.URL}/tag`, { params: payload });
  }
};
_TagService.\u0275fac = function TagService_Factory(t) {
  return new (t || _TagService)(\u0275\u0275inject(HttpClient));
};
_TagService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TagService, factory: _TagService.\u0275fac, providedIn: "root" });
var TagService = _TagService;

// src/app/shared/state/tag.state.ts
var _a;
var TagState = (_a = class {
  constructor(tagService) {
    this.tagService = tagService;
  }
  static tag(state) {
    return state.tag;
  }
  getTags(ctx, action) {
    return this.tagService.getTags(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          tag: {
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
}, _a.\u0275fac = function TagState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(TagService));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetTags)
], TagState.prototype, "getTags", null);
__decorate([
  Selector()
], TagState, "tag", null);
TagState = __decorate([
  State({
    name: "tag",
    defaults: {
      tag: {
        data: [],
        total: 0
      }
    }
  })
], TagState);

export {
  GetTags,
  TagState
};
//# sourceMappingURL=chunk-WR2UTWN2.js.map
