import {
  Action,
  AttributeService,
  AuthService,
  Feedback,
  GetQuestionAnswers,
  GetReview,
  GetUserDetails,
  HttpClient,
  NotificationService,
  Router,
  Selector,
  SendQuestion,
  SendReview,
  State,
  Store,
  UpdateQuestionAnswers,
  UpdateReview,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WW7SXIET.js";

// src/app/core/guard/auth.guard.ts
var _AuthGuard = class _AuthGuard {
  constructor(store, router, authService) {
    this.store = store;
    this.router = router;
    this.authService = authService;
  }
  canActivate(route, state) {
    this.authService.redirectUrl = state.url;
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return this.router.createUrlTree(["/auth/login"]);
    }
    this.store.dispatch(new GetUserDetails()).subscribe({
      complete: () => {
        return true;
      }
    });
    return true;
  }
  canActivateChild(route, state) {
    if (!!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      if (this.router.url.startsWith("/account") || this.router.url == "/checkout" || this.router.url == "/compare")
        this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(t) {
  return new (t || _AuthGuard)(\u0275\u0275inject(Store), \u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;

// src/app/shared/action/store.action.ts
var _GetStores = class _GetStores {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetStores.type = "[Store] Get";
var GetStores = _GetStores;
var _GetStoreBySlug = class _GetStoreBySlug {
  constructor(slug) {
    this.slug = slug;
  }
};
_GetStoreBySlug.type = "[Store] Get By Slug";
var GetStoreBySlug = _GetStoreBySlug;

// src/app/shared/services/store.service.ts
var _StoreService = class _StoreService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getStores(payload) {
    return this.http.get(`${environment.URL}/store`, { params: payload });
  }
  getStoreBySlug(slug) {
    return this.http.get(`${environment.URL}/store/slug/${slug}`);
  }
};
_StoreService.\u0275fac = function StoreService_Factory(t) {
  return new (t || _StoreService)(\u0275\u0275inject(HttpClient));
};
_StoreService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StoreService, factory: _StoreService.\u0275fac, providedIn: "root" });
var StoreService = _StoreService;

// src/app/shared/state/store.state.ts
var _a;
var StoreState = (_a = class {
  constructor(storeService, router) {
    this.storeService = storeService;
    this.router = router;
  }
  static store(state) {
    return state.store;
  }
  static selectedStore(state) {
    return state.selectedStore;
  }
  getStores(ctx, action) {
    this.storeService.skeletonLoader = true;
    return this.storeService.getStores(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          store: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.storeService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getStoreBySlug(ctx, { slug }) {
    return this.storeService.getStoreBySlug(slug).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedStore: result
        }));
      },
      error: (err) => {
        this.router.navigate(["/404"]);
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a.\u0275fac = function StoreState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(StoreService), \u0275\u0275inject(Router));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetStores)
], StoreState.prototype, "getStores", null);
__decorate([
  Action(GetStoreBySlug)
], StoreState.prototype, "getStoreBySlug", null);
__decorate([
  Selector()
], StoreState, "store", null);
__decorate([
  Selector()
], StoreState, "selectedStore", null);
StoreState = __decorate([
  State({
    name: "store",
    defaults: {
      store: {
        data: [],
        total: 0
      },
      selectedStore: null
    }
  })
], StoreState);

// src/app/shared/action/attribute.action.ts
var _GetAttributes = class _GetAttributes {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetAttributes.type = "[Attribute] Get";
var GetAttributes = _GetAttributes;
var _GetAttributeValues = class _GetAttributeValues {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetAttributeValues.type = "[Attribute] Value Get";
var GetAttributeValues = _GetAttributeValues;

// src/app/shared/state/attribute.state.ts
var _a2;
var AttributeState = (_a2 = class {
  constructor(attributeService) {
    this.attributeService = attributeService;
  }
  static attribute(state) {
    return state.attribute;
  }
  static attribute_value(state) {
    return (id) => {
      if (!id)
        return [];
      return state?.attribute_values.filter((attr_val) => +attr_val.attribute_id === id)?.map((value) => {
        return { label: value?.value, value: value?.id };
      });
    };
  }
  getAttributes(ctx, action) {
    this.attributeService.skeletonLoader = true;
    return this.attributeService.getAttributes(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          attribute: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      complete: () => {
        this.attributeService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getAttributeValues(ctx, action) {
    return this.attributeService.getAttributeValues(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          attribute_values: result.data
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a2.\u0275fac = function AttributeState_Factory(t) {
  return new (t || _a2)(\u0275\u0275inject(AttributeService));
}, _a2.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a2, factory: _a2.\u0275fac }), _a2);
__decorate([
  Action(GetAttributes)
], AttributeState.prototype, "getAttributes", null);
__decorate([
  Action(GetAttributeValues)
], AttributeState.prototype, "getAttributeValues", null);
__decorate([
  Selector()
], AttributeState, "attribute", null);
__decorate([
  Selector()
], AttributeState, "attribute_value", null);
AttributeState = __decorate([
  State({
    name: "attribute",
    defaults: {
      attribute: {
        data: [],
        total: 0
      },
      attribute_values: []
    }
  })
], AttributeState);

// src/app/shared/services/questions-answers.service.ts
var _QuestionsAnswersService = class _QuestionsAnswersService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getQuestionAnswers(slug) {
    return this.http.get(`${environment.URL}/question-and-answer`, { params: slug });
  }
  sendQuestion(payload) {
    return this.http.post(`${environment.URL}/question-and-answer`, payload);
  }
  updateQuestionAnswers(id, payload) {
    return this.http.put(`${environment.URL}/question-and-answer/${id}`, payload);
  }
  feedback(payload) {
    return this.http.post(`${environment.URL}/question-and-answer/feedback`, payload);
  }
};
_QuestionsAnswersService.\u0275fac = function QuestionsAnswersService_Factory(t) {
  return new (t || _QuestionsAnswersService)(\u0275\u0275inject(HttpClient));
};
_QuestionsAnswersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionsAnswersService, factory: _QuestionsAnswersService.\u0275fac, providedIn: "root" });
var QuestionsAnswersService = _QuestionsAnswersService;

// src/app/shared/state/questions-answers.state.ts
var _a3;
var QuestionAnswersState = (_a3 = class {
  constructor(questionsAnswersService) {
    this.questionsAnswersService = questionsAnswersService;
  }
  static questionsAnswers(state) {
    return state.question;
  }
  getQuestionAnswers(ctx, action) {
    this.questionsAnswersService.skeletonLoader = true;
    return this.questionsAnswersService.getQuestionAnswers(action.slug).pipe(tap({
      next: (result) => {
        ctx.patchState({
          question: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.questionsAnswersService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  sendQuestion(ctx, action) {
    return this.questionsAnswersService.sendQuestion(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          question: {
            data: [...state.question.data, result],
            total: state?.question.total + 1
          }
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  update(ctx, { payload, id }) {
    return this.questionsAnswersService.updateQuestionAnswers(id, payload).pipe(tap({
      next: (result) => {
        if (typeof result === "object") {
          const state = ctx.getState();
          const questions = [...state.question.data];
          const index = questions.findIndex((question) => question.id === id);
          questions[index] = result;
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            question: {
              data: questions,
              total: state.question.total
            }
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  Feedback(ctx, action) {
    const state = ctx.getState();
    const question = [...state.question.data];
    const index = question.findIndex((item) => Number(item.id) === Number(action.payload["question_and_answer_id"]));
    if (action.type === "liked" || action.type === "disliked") {
      const currentReaction = question[index].reaction;
      const newReaction = action.payload["reaction"];
      if (currentReaction === newReaction) {
        if (action.type === "liked") {
          question[index].total_likes -= 1;
        } else {
          question[index].total_dislikes -= 1;
        }
        question[index].reaction = null;
        action.payload["reaction"] = null;
      } else {
        if (currentReaction === "liked") {
          question[index].total_likes -= 1;
        } else if (currentReaction === "disliked") {
          question[index].total_dislikes -= 1;
        }
        if (action.type === "liked") {
          question[index].total_likes += 1;
        } else {
          question[index].total_dislikes += 1;
        }
        question[index].reaction = newReaction;
        action.payload["reaction"] = newReaction;
      }
    }
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      question: {
        data: question,
        total: state.question.total
      }
    }));
    return this.questionsAnswersService.feedback(action.payload);
  }
}, _a3.\u0275fac = function QuestionAnswersState_Factory(t) {
  return new (t || _a3)(\u0275\u0275inject(QuestionsAnswersService));
}, _a3.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a3, factory: _a3.\u0275fac }), _a3);
__decorate([
  Action(GetQuestionAnswers)
], QuestionAnswersState.prototype, "getQuestionAnswers", null);
__decorate([
  Action(SendQuestion)
], QuestionAnswersState.prototype, "sendQuestion", null);
__decorate([
  Action(UpdateQuestionAnswers)
], QuestionAnswersState.prototype, "update", null);
__decorate([
  Action(Feedback)
], QuestionAnswersState.prototype, "Feedback", null);
__decorate([
  Selector()
], QuestionAnswersState, "questionsAnswers", null);
QuestionAnswersState = __decorate([
  State({
    name: "question",
    defaults: {
      question: {
        data: [],
        total: 0
      }
    }
  })
], QuestionAnswersState);

// src/app/shared/services/review.service.ts
var _ReviewService = class _ReviewService {
  constructor(http) {
    this.http = http;
  }
  getReview(slug) {
    return this.http.get(`${environment.URL}/front/review`, { params: slug });
  }
  sendReview(payload) {
    return this.http.post(`${environment.URL}/review`, payload);
  }
  updateReview(id, payload) {
    return this.http.put(`${environment.URL}/review/${id}`, payload);
  }
};
_ReviewService.\u0275fac = function ReviewService_Factory(t) {
  return new (t || _ReviewService)(\u0275\u0275inject(HttpClient));
};
_ReviewService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
var ReviewService = _ReviewService;

// src/app/shared/state/review.state.ts
var _a4;
var ReviewState = (_a4 = class {
  constructor(notificationService, reviewsService) {
    this.notificationService = notificationService;
    this.reviewsService = reviewsService;
  }
  static review(state) {
    return state.review;
  }
  getReview(ctx, action) {
    return this.reviewsService.getReview(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          review: {
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
  sendReview(ctx, action) {
    return this.reviewsService.sendReview(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          review: {
            data: [...state.review.data, result],
            total: state?.review.total + 1
          }
        }));
      },
      complete: () => {
        this.notificationService.showSuccess("Review Send Successfully.");
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  update(ctx, { payload, id }) {
    return this.reviewsService.updateReview(id, payload).pipe(tap({
      next: (result) => {
        if (typeof result === "object") {
          const state = ctx.getState();
          const reviews = [...state.review.data];
          const index = reviews.findIndex((review) => review.id === id);
          reviews[index] = result;
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            review: {
              data: reviews,
              total: state.review.total
            }
          }));
        }
      },
      complete: () => {
        this.notificationService.showSuccess("Review Updated Successfully.");
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a4.\u0275fac = function ReviewState_Factory(t) {
  return new (t || _a4)(\u0275\u0275inject(NotificationService), \u0275\u0275inject(ReviewService));
}, _a4.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a4, factory: _a4.\u0275fac }), _a4);
__decorate([
  Action(GetReview)
], ReviewState.prototype, "getReview", null);
__decorate([
  Action(SendReview)
], ReviewState.prototype, "sendReview", null);
__decorate([
  Action(UpdateReview)
], ReviewState.prototype, "update", null);
__decorate([
  Selector()
], ReviewState, "review", null);
ReviewState = __decorate([
  State({
    name: "review",
    defaults: {
      review: {
        data: [],
        total: 0
      }
    }
  })
], ReviewState);

export {
  AuthGuard,
  GetStores,
  GetStoreBySlug,
  StoreService,
  StoreState,
  GetAttributes,
  AttributeState,
  QuestionsAnswersService,
  QuestionAnswersState,
  ReviewState
};
//# sourceMappingURL=chunk-QSXMB2OB.js.map
