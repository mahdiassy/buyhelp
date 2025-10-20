import {
  Action,
  Checkout,
  DownloadInvoice,
  GetOrders,
  HttpClient,
  NotificationService,
  OrderTracking,
  PlaceOrder,
  RePayment,
  Router,
  Selector,
  State,
  ViewOrder,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WW7SXIET.js";

// src/app/shared/services/order.service.ts
var _OrderService = class _OrderService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getOrders(payload) {
    return this.http.get(`${environment.URL}/order`, { params: payload });
  }
  viewOrder(id) {
    return this.http.get(`${environment.URL}/order/${id}`);
  }
  checkout(payload) {
    return this.http.post(`${environment.URL}/checkout`, payload);
  }
  placeOrder(payload) {
    return this.http.post(`${environment.URL}/order`, payload);
  }
  rePayment(payload) {
    return this.http.post(`${environment.URL}/rePayment`, payload);
  }
  orderTracking(payload) {
    return this.http.get(`${environment.URL}/trackOrder`, { params: payload });
  }
  downloadInvoice(payload) {
    const requestBody = {};
    return this.http.post(`${environment.URL}/order/invoice`, payload, {
      responseType: "blob"
    });
  }
};
_OrderService.\u0275fac = function OrderService_Factory(t) {
  return new (t || _OrderService)(\u0275\u0275inject(HttpClient));
};
_OrderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
var OrderService = _OrderService;

// src/app/shared/state/order.state.ts
var _a;
var OrderState = (_a = class {
  constructor(notificationService, router, orderService) {
    this.notificationService = notificationService;
    this.router = router;
    this.orderService = orderService;
  }
  static order(state) {
    return state.order;
  }
  static selectedOrder(state) {
    return state.selectedOrder;
  }
  static checkout(state) {
    return state.checkout;
  }
  getOrders(ctx, action) {
    return this.orderService.getOrders(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          order: {
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
  viewOrder(ctx, { id }) {
    this.orderService.skeletonLoader = true;
    return this.orderService.viewOrder(id).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedOrder: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      },
      complete: () => {
        this.orderService.skeletonLoader = false;
      }
    }));
  }
  checkout(ctx, action) {
    return this.orderService.checkout(action?.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          checkout: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  placeOrder(ctx, action) {
    return this.orderService.placeOrder(action?.payload).pipe(tap({
      next: (result) => {
        if ((action.payload.payment_method == "cod" || action.payload.payment_method == "bank_transfer") && !result.is_guest) {
          this.router.navigateByUrl(`/account/order/details/${result.order_number}`);
        } else if ((action.payload.payment_method == "cod" || action.payload.payment_method == "bank_transfer") && result.is_guest) {
          this.router.navigate(["order/details"], { queryParams: { order_number: result.order_number, email_or_phone: action?.payload.email } });
        } else {
          window.open(result.url, "_self");
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  rePayment(ctx, action) {
    return this.orderService.rePayment(action.payload).pipe(tap({
      next: (result) => {
        if ((action.payload.payment_method == "cod" || action.payload.payment_method == "bank_transfer") && !result.is_guest) {
          this.router.navigateByUrl(`/account/order/details/${result.order_number}`);
        } else if ((action.payload.payment_method == "cod" || action.payload.payment_method == "bank_transfer") && result.is_guest) {
          this.router.navigate(["order/details"], { queryParams: { order_number: result.order_number, email_or_phone: result.email } });
        } else {
          window.open(result.url, "_self");
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  orderTracking(ctx, action) {
    this.notificationService.notification = false;
    return this.orderService.orderTracking(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedOrder: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  downloadInvoice(ctx, action) {
    return this.orderService.downloadInvoice(action.payload).pipe(tap({
      next: (result) => {
        const blob = new Blob([result], { type: "pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${action.payload["order_number"]}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a.\u0275fac = function OrderState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(NotificationService), \u0275\u0275inject(Router), \u0275\u0275inject(OrderService));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetOrders)
], OrderState.prototype, "getOrders", null);
__decorate([
  Action(ViewOrder)
], OrderState.prototype, "viewOrder", null);
__decorate([
  Action(Checkout)
], OrderState.prototype, "checkout", null);
__decorate([
  Action(PlaceOrder)
], OrderState.prototype, "placeOrder", null);
__decorate([
  Action(RePayment)
], OrderState.prototype, "rePayment", null);
__decorate([
  Action(OrderTracking)
], OrderState.prototype, "orderTracking", null);
__decorate([
  Action(DownloadInvoice)
], OrderState.prototype, "downloadInvoice", null);
__decorate([
  Selector()
], OrderState, "order", null);
__decorate([
  Selector()
], OrderState, "selectedOrder", null);
__decorate([
  Selector()
], OrderState, "checkout", null);
OrderState = __decorate([
  State({
    name: "order",
    defaults: {
      order: {
        data: [],
        total: 0
      },
      selectedOrder: null,
      checkout: null
    }
  })
], OrderState);

// src/app/shared/action/order-status.action.ts
var _GetOrderStatus = class _GetOrderStatus {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetOrderStatus.type = "[Order Status] Get";
var GetOrderStatus = _GetOrderStatus;

// src/app/shared/services/order-status.service.ts
var _OrderStatusService = class _OrderStatusService {
  constructor(http) {
    this.http = http;
  }
  getOrderStatus(payload) {
    return this.http.get(`${environment.URL}/orderStatus`, { params: payload });
  }
};
_OrderStatusService.\u0275fac = function OrderStatusService_Factory(t) {
  return new (t || _OrderStatusService)(\u0275\u0275inject(HttpClient));
};
_OrderStatusService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderStatusService, factory: _OrderStatusService.\u0275fac, providedIn: "root" });
var OrderStatusService = _OrderStatusService;

// src/app/shared/state/order-status.state.ts
var _a2;
var OrderStatusState = (_a2 = class {
  constructor(orderStatusService) {
    this.orderStatusService = orderStatusService;
  }
  static orderStatus(state) {
    return state.orderStatus;
  }
  static orderStatuses(state) {
    return state.orderStatus.data.map((res) => {
      return { label: res?.name, value: res?.id };
    });
  }
  static selectedOrderStatus(state) {
    return state.selectedOrderStatus;
  }
  getOrderStatus(ctx, action) {
    return this.orderStatusService.getOrderStatus(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          orderStatus: {
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
}, _a2.\u0275fac = function OrderStatusState_Factory(t) {
  return new (t || _a2)(\u0275\u0275inject(OrderStatusService));
}, _a2.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a2, factory: _a2.\u0275fac }), _a2);
__decorate([
  Action(GetOrderStatus)
], OrderStatusState.prototype, "getOrderStatus", null);
__decorate([
  Selector()
], OrderStatusState, "orderStatus", null);
__decorate([
  Selector()
], OrderStatusState, "orderStatuses", null);
__decorate([
  Selector()
], OrderStatusState, "selectedOrderStatus", null);
OrderStatusState = __decorate([
  State({
    name: "orderStatus",
    defaults: {
      orderStatus: {
        data: [],
        total: 0
      },
      selectedOrderStatus: null
    }
  })
], OrderStatusState);

export {
  OrderState,
  GetOrderStatus,
  OrderStatusState
};
//# sourceMappingURL=chunk-7LRX5UZJ.js.map
