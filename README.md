https://t2informatik.de/en/blog/single-spa-angular-react/

Create Single-SPA root-config [shell app]
--------------------------
1) npx create-single-spa
- directory to create root-config: root-config
- package manager: npm
- use TypeScript: no
- organization name: org1


Create Angular app [first]
-------------------
1) ng new app --routing
2) ng add single-spa-angular --skip-confirmation, do npm install
3) Open app-routing.module.ts, 
add providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
{ path: '**', component: EmptyRouteComponent }
Now go to app.module.ts and add EmptyRouteComponent to the declarations array in the NgModule
4) register the Angular application. To do this, open root-config/src/index.ejs and remove the comment from the line that imports zone.js. In my version, this is line 61
5) register your Angular app by adding the following property to the import object
"@mfa-org/mfa-app1": "http://localhost:4200/main.js"
6) do npm start for rootconfig - open http://localhost:9000/
do npm run serve:single-spa:mfa-app1 - open and verify with http://localhost:9000/app1


If second app is angular, repeat the same steps to create another mfa app
change the port alone in serve command