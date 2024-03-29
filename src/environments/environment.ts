// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDzMoG5oL4B5pu7Fw_WazRYUs4lztQW7ME',
    authDomain: 'news-center-a8a2e.firebaseapp.com',
    databaseURL: 'https://news-center-a8a2e.firebaseio.com',
    projectId: 'news-center-a8a2e',
    storageBucket: 'news-center-a8a2e.appspot.com',
    messagingSenderId: '442628539010',
    appId: '1:442628539010:web:c1fb9dd34e5ce63a58ea9b',
    measurementId: 'G-FC34QQ399X'
  },
  api_url: 'http://localhost:5000/news-center-a8a2e/us-central1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
