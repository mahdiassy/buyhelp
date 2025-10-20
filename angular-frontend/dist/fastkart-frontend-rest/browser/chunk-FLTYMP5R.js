import {
  Action,
  GetRefund,
  HttpClient,
  NotificationService,
  Selector,
  SendRefundRequest,
  State,
  Store,
  ViewOrder,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WW7SXIET.js";

// src/app/shared/action/notification.action.ts
var _GetNotification = class _GetNotification {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetNotification.type = "[Notification] Get";
var GetNotification = _GetNotification;
var _MarkAsReadNotification = class _MarkAsReadNotification {
  constructor() {
  }
};
_MarkAsReadNotification.type = "[Notification] Mark As Read";
var MarkAsReadNotification = _MarkAsReadNotification;
var _DeleteNotification = class _DeleteNotification {
  constructor(id) {
    this.id = id;
  }
};
_DeleteNotification.type = "[Notification] Delete";
var DeleteNotification = _DeleteNotification;

// src/app/shared/state/notification.state.ts
var _a;
var NotificationState = (_a = class {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  static notification(state) {
    return state.notification.data;
  }
  getNotification(ctx, action) {
    return this.notificationService.getNotifications(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          notification: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  markAsRead(ctx) {
    return this.notificationService.markAsReadNotification().pipe(tap({
      next: (result) => {
        ctx.patchState({
          notification: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  delete(ctx, { id }) {
    return this.notificationService.deleteNotification(id).pipe(tap({
      next: () => {
        const state = ctx.getState();
        let notification = state.notification.data.filter((value) => value.id !== id);
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          notification: {
            data: notification,
            total: state.notification.total - 1
          }
        }));
      },
      complete: () => {
        this.notificationService.showSuccess("Notification Deleted Successfully.");
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a.\u0275fac = function NotificationState_Factory(t) {
  return new (t || _a)(\u0275\u0275inject(NotificationService));
}, _a.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a, factory: _a.\u0275fac }), _a);
__decorate([
  Action(GetNotification)
], NotificationState.prototype, "getNotification", null);
__decorate([
  Action(MarkAsReadNotification)
], NotificationState.prototype, "markAsRead", null);
__decorate([
  Action(DeleteNotification)
], NotificationState.prototype, "delete", null);
__decorate([
  Selector()
], NotificationState, "notification", null);
NotificationState = __decorate([
  State({
    name: "notification",
    defaults: {
      notification: {
        data: [],
        total: 0
      }
    }
  })
], NotificationState);

// src/app/shared/action/wallet.action.ts
var _GetUserTransaction = class _GetUserTransaction {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetUserTransaction.type = "[Wallet] Transaction Get";
var GetUserTransaction = _GetUserTransaction;

// src/app/shared/services/wallet.service.ts
var _WalletService = class _WalletService {
  constructor(http) {
    this.http = http;
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/wallet/consumer`, { params: payload });
  }
};
_WalletService.\u0275fac = function WalletService_Factory(t) {
  return new (t || _WalletService)(\u0275\u0275inject(HttpClient));
};
_WalletService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
var WalletService = _WalletService;

// src/app/shared/state/wallet.state.ts
var _a2;
var WalletState = (_a2 = class {
  constructor(walletService) {
    this.walletService = walletService;
  }
  static wallet(state) {
    return state.wallet;
  }
  getUserTransations(ctx, { payload }) {
    return this.walletService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          wallet: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          wallet: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a2.\u0275fac = function WalletState_Factory(t) {
  return new (t || _a2)(\u0275\u0275inject(WalletService));
}, _a2.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a2, factory: _a2.\u0275fac }), _a2);
__decorate([
  Action(GetUserTransaction)
], WalletState.prototype, "getUserTransations", null);
__decorate([
  Selector()
], WalletState, "wallet", null);
WalletState = __decorate([
  State({
    name: "wallet",
    defaults: {
      wallet: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], WalletState);

// src/app/shared/action/payment-details.action.ts
var _GetPaymentDetails = class _GetPaymentDetails {
};
_GetPaymentDetails.type = "[Payment Details] Get";
var GetPaymentDetails = _GetPaymentDetails;
var _UpdatePaymentDetails = class _UpdatePaymentDetails {
  constructor(payload) {
    this.payload = payload;
  }
};
_UpdatePaymentDetails.type = "[Payment Details] Post";
var UpdatePaymentDetails = _UpdatePaymentDetails;

// src/app/shared/services/payment-details.service.ts
var _PaymentDetailsService = class _PaymentDetailsService {
  constructor(http) {
    this.http = http;
  }
  getPaymentAccount() {
    return this.http.get(`${environment.URL}/paymentAccount`);
  }
  updatePaymentAccount(payload) {
    return this.http.post(`${environment.URL}/paymentAccount`, payload);
  }
};
_PaymentDetailsService.\u0275fac = function PaymentDetailsService_Factory(t) {
  return new (t || _PaymentDetailsService)(\u0275\u0275inject(HttpClient));
};
_PaymentDetailsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentDetailsService, factory: _PaymentDetailsService.\u0275fac, providedIn: "root" });
var PaymentDetailsService = _PaymentDetailsService;

// src/app/shared/state/payment-details.state.ts
var _a3;
var PaymentDetailsState = (_a3 = class {
  constructor(notificationService, PaymentDetailsService2) {
    this.notificationService = notificationService;
    this.PaymentDetailsService = PaymentDetailsService2;
  }
  static paymentDetails(state) {
    return state.paymentDetails;
  }
  getPaymentDetails(ctx) {
    return this.PaymentDetailsService.getPaymentAccount().pipe(tap({
      next: (result) => {
        ctx.patchState({
          paymentDetails: result
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  updatePaymentDetails(ctx, action) {
    return this.PaymentDetailsService.updatePaymentAccount(action.payload).pipe(tap({
      next: (result) => {
        if (typeof result === "object") {
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            paymentDetails: result
          }));
        }
      },
      complete: () => {
        this.notificationService.showSuccess("Account Details Updated Successfully.");
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a3.\u0275fac = function PaymentDetailsState_Factory(t) {
  return new (t || _a3)(\u0275\u0275inject(NotificationService), \u0275\u0275inject(PaymentDetailsService));
}, _a3.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a3, factory: _a3.\u0275fac }), _a3);
__decorate([
  Action(GetPaymentDetails)
], PaymentDetailsState.prototype, "getPaymentDetails", null);
__decorate([
  Action(UpdatePaymentDetails)
], PaymentDetailsState.prototype, "updatePaymentDetails", null);
__decorate([
  Selector()
], PaymentDetailsState, "paymentDetails", null);
PaymentDetailsState = __decorate([
  State({
    name: "paymentDetails",
    defaults: {
      paymentDetails: null
    }
  })
], PaymentDetailsState);

// src/app/shared/action/point.action.ts
var _GetUserTransaction2 = class _GetUserTransaction2 {
  constructor(payload) {
    this.payload = payload;
  }
};
_GetUserTransaction2.type = "[Point] Transaction Get";
var GetUserTransaction2 = _GetUserTransaction2;

// src/app/shared/services/point.service.ts
var _PointService = class _PointService {
  constructor(http) {
    this.http = http;
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/points/consumer`, { params: payload });
  }
};
_PointService.\u0275fac = function PointService_Factory(t) {
  return new (t || _PointService)(\u0275\u0275inject(HttpClient));
};
_PointService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointService, factory: _PointService.\u0275fac, providedIn: "root" });
var PointService = _PointService;

// src/app/shared/state/point.state.ts
var _a4;
var PointState = (_a4 = class {
  constructor(pointService) {
    this.pointService = pointService;
  }
  static point(state) {
    return state.point;
  }
  getUserTransaction(ctx, { payload }) {
    return this.pointService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          point: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          point: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a4.\u0275fac = function PointState_Factory(t) {
  return new (t || _a4)(\u0275\u0275inject(PointService));
}, _a4.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a4, factory: _a4.\u0275fac }), _a4);
__decorate([
  Action(GetUserTransaction2)
], PointState.prototype, "getUserTransaction", null);
__decorate([
  Selector()
], PointState, "point", null);
PointState = __decorate([
  State({
    name: "point",
    defaults: {
      point: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], PointState);

// src/app/shared/services/refund.service.ts
var _RefundService = class _RefundService {
  constructor(http) {
    this.http = http;
  }
  getRefunds(payload) {
    return this.http.get(`${environment.URL}/refund`, { params: payload });
  }
  sendRefundRequest(payload) {
    return this.http.post(`${environment.URL}/refund`, payload);
  }
  updaterefundStatus(id, status) {
    return this.http.put(`${environment.URL}/refund/${id}`, { status });
  }
};
_RefundService.\u0275fac = function RefundService_Factory(t) {
  return new (t || _RefundService)(\u0275\u0275inject(HttpClient));
};
_RefundService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RefundService, factory: _RefundService.\u0275fac, providedIn: "root" });
var RefundService = _RefundService;

// src/app/shared/state/refund.state.ts
var _a5;
var RefundState = (_a5 = class {
  constructor(refundService, store) {
    this.refundService = refundService;
    this.store = store;
  }
  static refund(state) {
    return state.refund;
  }
  getRefund(ctx, action) {
    return this.refundService.getRefunds(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          refund: {
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
  sendRefundStatus(ctx, action) {
    return this.refundService.sendRefundRequest(action.payload).pipe(tap({
      next: (result) => {
        if (typeof result === "object") {
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            refund: {
              data: [...state.refund.data, result],
              total: state.refund.total
            }
          }));
          this.store.dispatch(new ViewOrder(result.order_number));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a5.\u0275fac = function RefundState_Factory(t) {
  return new (t || _a5)(\u0275\u0275inject(RefundService), \u0275\u0275inject(Store));
}, _a5.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a5, factory: _a5.\u0275fac }), _a5);
__decorate([
  Action(GetRefund)
], RefundState.prototype, "getRefund", null);
__decorate([
  Action(SendRefundRequest)
], RefundState.prototype, "sendRefundStatus", null);
__decorate([
  Selector()
], RefundState, "refund", null);
RefundState = __decorate([
  State({
    name: "refund",
    defaults: {
      refund: {
        data: [],
        total: 0
      }
    }
  })
], RefundState);

// src/app/shared/action/download.action.ts
var _Downloads = class _Downloads {
  constructor(payload) {
    this.payload = payload;
  }
};
_Downloads.type = "[Download] Get";
var Downloads = _Downloads;
var _DownloadFiles = class _DownloadFiles {
  constructor(id) {
    this.id = id;
  }
};
_DownloadFiles.type = "[Download] Files";
var DownloadFiles = _DownloadFiles;
var _DownloadLicense = class _DownloadLicense {
  constructor(id) {
    this.id = id;
  }
};
_DownloadLicense.type = "[Download] License";
var DownloadLicense = _DownloadLicense;

// src/app/shared/services/download.service.ts
var _DownloadService = class _DownloadService {
  constructor(http) {
    this.http = http;
  }
  downloads(payload) {
    return this.http.get(`${environment.URL}/download`, { params: payload });
  }
  downloadFiles(id) {
    return this.http.post(`${environment.URL}/download/zip/link`, { id });
  }
  downloadLicense(id) {
    return this.http.post(`${environment.URL}/download/key/link`, { id });
  }
};
_DownloadService.\u0275fac = function DownloadService_Factory(t) {
  return new (t || _DownloadService)(\u0275\u0275inject(HttpClient));
};
_DownloadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DownloadService, factory: _DownloadService.\u0275fac, providedIn: "root" });
var DownloadService = _DownloadService;

// src/app/shared/state/download.state.ts
var _a6;
var DownloadState = (_a6 = class {
  constructor(downloadService) {
    this.downloadService = downloadService;
  }
  static download(state) {
    return state.download;
  }
  downloads(ctx, action) {
    return this.downloadService.downloads(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          download: {
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
  downloadFiles(ctx, action) {
    return this.downloadService.downloadFiles(action.id).pipe(tap({
      next: (result) => {
        if (result && result.download_link) {
          window.location.assign(result.download_link);
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  downloadLicense(ctx, action) {
    return this.downloadService.downloadLicense(action.id).pipe(tap({
      next: (result) => {
        if (result && result.download_link) {
          window.location.assign(result.download_link);
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
}, _a6.\u0275fac = function DownloadState_Factory(t) {
  return new (t || _a6)(\u0275\u0275inject(DownloadService));
}, _a6.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _a6, factory: _a6.\u0275fac }), _a6);
__decorate([
  Action(Downloads)
], DownloadState.prototype, "downloads", null);
__decorate([
  Action(DownloadFiles)
], DownloadState.prototype, "downloadFiles", null);
__decorate([
  Action(DownloadLicense)
], DownloadState.prototype, "downloadLicense", null);
__decorate([
  Selector()
], DownloadState, "download", null);
DownloadState = __decorate([
  State({
    name: "download",
    defaults: {
      download: {
        data: [],
        total: 0
      }
    }
  })
], DownloadState);

export {
  GetNotification,
  MarkAsReadNotification,
  NotificationState,
  GetUserTransaction,
  WalletState,
  GetPaymentDetails,
  UpdatePaymentDetails,
  PaymentDetailsState,
  GetUserTransaction2,
  PointState,
  RefundState,
  Downloads,
  DownloadFiles,
  DownloadLicense,
  DownloadState
};
//# sourceMappingURL=chunk-FLTYMP5R.js.map
