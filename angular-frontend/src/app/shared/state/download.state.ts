import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { DownloadService } from "../services/download.service";
import { DownloadFiles, DownloadLicense, Downloads } from "../action/download.action";
import { Download } from "../interface/download.interface";
 

export class DownloadStateModel {
  download = {
    data: [] as Download[],
    total: 0
  }
}

@State<DownloadStateModel>({
  name: "download",
  defaults: {
    download: {
      data: [],
      total: 0
    },
  },
})

@Injectable()
export class DownloadState {

  constructor(private downloadService: DownloadService) {}

  @Selector()
  static download(state: DownloadStateModel) {
    return state.download;
  }
 
  @Action(Downloads)
  downloads(ctx: StateContext<DownloadStateModel>, action: Downloads) {
    return this.downloadService.downloads(action.payload).pipe(
      tap({
        next: result => { 
          ctx.patchState({
            download: {
              data: result.data,
              total: result?.total ? result?.total : result.data?.length
            }
          });
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(DownloadFiles)
  downloadFiles(ctx: StateContext<DownloadStateModel>, action: DownloadFiles) {
    return this.downloadService.downloadFiles(action.id).pipe(
      tap({
        next: result => { 
          if(result && result.download_link) {
            window.location.assign(result.download_link)
          }
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(DownloadLicense)
  downloadLicense(ctx: StateContext<DownloadStateModel>, action: DownloadFiles) {
    return this.downloadService.downloadLicense(action.id).pipe(
      tap({
        next: result => { 
          if(result && result.download_link) {
            window.location.assign(result.download_link)
          }
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }

}