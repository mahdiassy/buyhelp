// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseURL: 'https://api.buyhelp.dnci.net', // This represents the base URL for running our frontend project. 
  URL: 'https://api.buyhelp.dnci.net/api', // Change only the domain part, keeping "/api" intact
  storageURL: 'https://api.buyhelp.dnci.net' // Change only the laravel primary domain

};
  
/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  