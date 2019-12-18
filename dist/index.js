!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=15)}([function(e,r){e.exports=require("chalk")},function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,r){e.exports=require("commander")},function(e,r){e.exports=require("semver")},function(e,r){e.exports=require("inquirer")},function(e){e.exports=JSON.parse('{"name":"react-native-semver-update","version":"1.1.2","description":"Automaticly updates a project version and build number for react-native","preferGlobal":true,"bin":{"rnsemup":"./bin.js"},"scripts":{"build":"webpack --config ./config/webpack.prod.js","dev":"webpack --watch --config ./config/webpack.dev.js","dev:live":"nodemon ./dist/index.js","lint":"eslint ./src","start":"node ./dist/index.js","postinstall":"node ./postinstall.js"},"repository":{"type":"git","url":"git+https://github.com/zmnv/react-native-semver-update.git"},"keywords":["react","native","semver","update","menu","automatization","cli"],"author":"Valeriy Zimnev (@zmnv)","license":"MIT","bugs":{"url":"https://github.com/zmnv/react-native-semver-update/issues"},"homepage":"https://github.com/zmnv/react-native-semver-update#readme","dependencies":{"@babel/runtime":"^7.6.3","chalk":"^2.4.2","commander":"^4.0.1","inquirer":"^7.0.0","semver":"^7.1.1"},"devDependencies":{"@babel/core":"^7.4.3","@babel/plugin-proposal-class-properties":"^7.4.4","@babel/plugin-transform-runtime":"^7.4.3","@babel/preset-env":"^7.4.3","babel-eslint":"^10.0.2","babel-loader":"^8.0.5","clean-webpack-plugin":"^3.0.0","eslint":"^6.5.1","eslint-config-airbnb-base":"^14.0.0","eslint-import-resolver-alias":"^1.1.2","eslint-plugin-import":"^2.18.2","nodemon":"^1.18.11","raw-loader":"^2.0.0","webpack":"^4.41.2","webpack-cli":"^3.3.9","webpack-merge":"^4.2.1","webpack-node-externals":"^1.7.2"},"babel":{"presets":["@babel/preset-env"],"plugins":["@babel/plugin-proposal-class-properties","@babel/plugin-transform-runtime"]}}')},function(e,r){e.exports=require("@babel/runtime/helpers/typeof")},function(e,r){e.exports=require("@babel/runtime/helpers/inherits")},function(e,r){e.exports=require("@babel/runtime/helpers/wrapNativeSuper")},function(e,r){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,r){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,r,n){"use strict";n.r(r);var t=n(6),o=n.n(t),a=n(0),i=n.n(a),u=n(4),c=n(3),s=function(e){return Object(u.readFileSync)(e,"utf8")},p=!1,l=process.cwd();var b={PACKAGE:Object(c.resolve)(l,"./package.json"),ANDROID:Object(c.resolve)(l,"./android/app/build.gradle"),IOS:Object(c.resolve)(l,"./ios/".concat(function(){var e=p?Object(c.resolve)(l,"./src/sources/app.json"):Object(c.resolve)(l,"./app.json");Object(u.existsSync)(e)||(console.log(i.a.redBright("[rnsemup] File app.json not found in"),l),process.exit(0));var r=s(e),n=JSON.parse(r);return n.name||(console.log("App name not found in app.json from ",l),process.exit(0)),n.name}(),".xcodeproj/project.pbxproj"))},d={PACKAGE:Object(c.resolve)(l,"./src/sources/package.json"),ANDROID:Object(c.resolve)(l,"./src/sources/build.gradle"),IOS:Object(c.resolve)(l,"./src/sources/project.pbxproj")},f=p?d:b;var v=n(1),m=n.n(v),g=n(2),h=n.n(g),O=n(9),A=i.a.magentaBright("".concat(O.name," ").concat(O.version,"\n")),y={UPDATE:{PROJECT_VERSION_VARIANT:"Project Version",BUILD_NUMBER_VARIANT:"Build Number"},PLATFORM:{ALL:"All",ANDROID:"Android",IOS:"iOS",PACKAGE:"Package"}};function j(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},o="",a=0;a<r;){var i=e[a]||n;o=o.concat(i),a+=1}return e.length>r&&(o=o.replace(/.$/,"…")),t(o)}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.m1,n=void 0===r?"":r,t=e.m2,o=void 0===t?"":t,a=e.m3,u=void 0===a?"":a,c=e.m4,s=void 0===c?"":c,p=e.m5,l=void 0===p?"":p,b=11,d=j("Package",b,void 0,i.a.yellowBright),f=j("Android",b,void 0,i.a.greenBright),v=j("iOS",b,void 0,i.a.cyanBright),m=j("Project Version",16,void 0,i.a.whiteBright),g=j("Build Number",16,void 0,i.a.whiteBright),h=j(n,b,void 0,i.a.yellowBright),O=j(o,b,void 0,i.a.greenBright),A=j(u,b,void 0,i.a.cyanBright),y=j(s,b,void 0,i.a.greenBright),P=j(l,b,void 0,i.a.cyanBright);return i.a.gray("┌──────────────────┬─────────────┬─────────────┬─────────────┐\n│                  │ ".concat(d," │ ").concat(f," │ ").concat(v," │\n├──────────────────┼─────────────┼─────────────┼─────────────┤\n│ ").concat(m," │ ").concat(h," │ ").concat(O," │ ").concat(A," │\n├──────────────────┼─────────────┼─────────────┼─────────────┤\n│ ").concat(g," │ -           │ ").concat(y," │ ").concat(P," │\n└──────────────────┴─────────────┴─────────────┴─────────────┘\n"))};var R=n(5),x=n.n(R),N=n(10),w=n.n(N),k=n(11),I=n.n(k),F=(n(13),n(14),n(12)),S=n.n(F);function D(e,r){D=function(e,r){return new a(e,void 0,r)};var n=S()(RegExp),t=RegExp.prototype,o=new WeakMap;function a(e,r,t){var a=n.call(this,e,r);return o.set(a,t||o.get(e)),a}function i(e,r){var n=o.get(r);return Object.keys(n).reduce((function(r,t){return r[t]=e[n[t]],r}),Object.create(null))}return I()(a,n),a.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=i(r,this)),r},a.prototype[Symbol.replace]=function(e,r){if("string"==typeof r){var n=o.get(this);return t[Symbol.replace].call(this,e,r.replace(/\$<([^>]+)>/g,(function(e,r){return"$"+n[r]})))}if("function"==typeof r){var a=this;return t[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==w()(e[e.length-1])&&e.push(i(e,a)),r.apply(this,e)}))}return t[Symbol.replace].call(this,e,r)},D.apply(this,arguments)}var T={ANDROID:{buildVersion:D(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*versionName ")(.*)("$)/gm,{buildVersion:2}),buildNumber:D(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*versionCode )([0-9]*)($)/gm,{buildNumber:2})},IOS:{buildVersion:D(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*MARKETING_VERSION = )(.*)(;$)/gm,{buildVersion:2}),buildNumber:D(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*CURRENT_PROJECT_VERSION = )(.*)(;$)/gm,{buildNumber:2})}};function E(e,r){return{projectVersion:new RegExp(e.buildVersion).exec(r)[2],buildNumber:Number(new RegExp(e.buildNumber).exec(r)[2])}}function L(){var e,r,n=(e={Package:JSON.parse(s(f.PACKAGE))},x()(e,y.PLATFORM.IOS,s(f.IOS)),x()(e,y.PLATFORM.ANDROID,s(f.ANDROID)),e);return{files:n,versions:(r={Package:{projectVersion:n.Package.version}},x()(r,y.PLATFORM.IOS,E(T.IOS,n[y.PLATFORM.IOS])),x()(r,y.PLATFORM.ANDROID,E(T.ANDROID,n[y.PLATFORM.ANDROID])),r)}}function M(e){var r=L();return function(e,r){var n=e.versions.Package.projectVersion,t=e.versions[y.PLATFORM.IOS],o=e.versions[y.PLATFORM.ANDROID],a=P({m1:n,m2:o&&o.projectVersion,m3:t&&t.projectVersion,m4:o&&String(o.buildNumber),m5:t&&String(t.buildNumber),header:r});console.log(a)}(r,e),r}function B(e){switch(e){case"major":case"minor":case"patch":return!0;default:return r=e,n=i.a.redBright('[rnsemup] Project version: not increased\n– Invalid version unit name "'.concat(i.a.bold(i.a.white(r)),'". It must be ').concat(i.a.white("major"),", ").concat(i.a.white("minor")," or ").concat(i.a.white("patch"),".")),console.log(n),!1}var r,n}var V="[writeFile]";function _(e,r){try{Object(u.writeFileSync)(e,r)}catch(e){console.log(V,e)}}function U(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function q(e,r){if(r){var n=f.PACKAGE,t=e.files.Package,o=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?U(n,!0).forEach((function(r){x()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},t,{version:r}),a=JSON.stringify(o,null,2);JSON.stringify(t,null,2)!==a&&_(n,a)}}function C(e,r,n,t,o){var a=f[r.toUpperCase()],i=e.files[r],u=e.versions,c=u.projectVersion,s=u.buildNumber,p=i;t&&c!==t&&(p=p.replace(n.buildVersion,(function(e,r,n,o){return"".concat(r).concat(t).concat(o)}))),o&&s!==o&&(p=p.replace(n.buildNumber,(function(e,r,n,t){return"".concat(r).concat(o).concat(t)}))),i!==p&&_(a,p)}function G(e,r,n){C(e,y.PLATFORM.ANDROID,T.ANDROID,r,n)}function J(e,r,n){C(e,y.PLATFORM.IOS,T.IOS,r,n)}var K=function(e){return{package:e.versions.Package.projectVersion,android:e.versions.Android.projectVersion,ios:e.versions.iOS.projectVersion}},$=function(e){return{android:Number(e.versions.Android.buildNumber),ios:Number(e.versions.iOS.buildNumber)}};function z(){var e,r=L(),n=$(r),t={android:n.android+1,ios:n.ios+1};e=i.a.greenBright("[rnsemup] Build number: increased"),console.log(e),G(r,null,"".concat(t.android)),J(r,null,"".concat(t.ios))}var W=n(7),Z=n.n(W);function H(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"patch",n=Number(Z.a.major(e)),t=Number(Z.a.minor(e)),o=Number(Z.a.patch(e));switch(r){case"major":n+=1,t=0,o=0;break;case"minor":t+=1,o=0;break;case"patch":o+=1}return"".concat(n,".").concat(t,".").concat(o)}function Q(e){var r,n,t=L(),o=K(t),a=e.update,u={package:H(o.package,e.update),android:H(o.android,e.update),ios:H(o.ios,e.update)};r=a,n=i.a.greenBright("[rnsemup] Project version: ".concat(i.a.bold(i.a.white(r))," increased")),console.log(n),q(t,u.package),G(t,u.android),J(t,u.ios)}var X=n(8);function Y(){return ee.apply(this,arguments)}function ee(){return(ee=h()(m.a.mark((function e(){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.prompt)([{type:"list",name:"updateFor",message:"What do you want to update?",choices:[y.UPDATE.BUILD_NUMBER_VARIANT,y.UPDATE.PROJECT_VERSION_VARIANT]}]);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return ne.apply(this,arguments)}function ne(){return(ne=h()(m.a.mark((function e(r){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[y.PLATFORM.ALL,y.PLATFORM.PACKAGE,y.PLATFORM.ANDROID,y.PLATFORM.IOS],r===y.UPDATE.BUILD_NUMBER_VARIANT&&(delete n[1],n=n.filter(Boolean)),e.next=4,Object(X.prompt)([{type:"list",name:"platform",message:"Choose the platform:",choices:n.filter(Boolean)}]);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return oe.apply(this,arguments)}function oe(){return(oe=h()(m.a.mark((function e(r){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.prompt)([{type:"input",name:"version",message:r}]);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,r){return ie.apply(this,arguments)}function ie(){return(ie=h()(m.a.mark((function e(r,n){var t,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("Input the new Project Version:");case 2:t=e.sent,o=t.version,e.t0=n,e.next=e.t0===y.PLATFORM.PACKAGE?7:e.t0===y.PLATFORM.ANDROID?9:e.t0===y.PLATFORM.IOS?11:e.t0===y.PLATFORM.ALL?13:17;break;case 7:return q(r,o),e.abrupt("break",17);case 9:return G(r,o),e.abrupt("break",17);case 11:return J(r,o),e.abrupt("break",17);case 13:return q(r,o),G(r,o),J(r,o),e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,r){return ce.apply(this,arguments)}function ce(){return(ce=h()(m.a.mark((function e(r,n){var t,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te("Input the new Build Number:");case 2:t=e.sent,o=t.version,e.t0=n,e.next=e.t0===y.PLATFORM.ANDROID?7:e.t0===y.PLATFORM.IOS?9:e.t0===y.PLATFORM.ALL?11:14;break;case 7:return G(r,null,o),e.abrupt("break",14);case 9:return J(r,null,o),e.abrupt("break",14);case 11:return G(r,null,o),J(r,null,o),e.abrupt("break",14);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return pe.apply(this,arguments)}function pe(){return(pe=h()(m.a.mark((function e(r){var n,t,o,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return n=e.sent,t=n.updateFor,e.next=6,re(t);case 6:o=e.sent,a=o.platform,e.t0=t,e.next=e.t0===y.UPDATE.PROJECT_VERSION_VARIANT?11:e.t0===y.UPDATE.BUILD_NUMBER_VARIANT?14:17;break;case 11:return e.next=13,ae(r,a);case 13:return e.abrupt("break",17);case 14:return e.next=16,ue(r,a);case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=!process.argv.slice(2).length;function be(){return(be=h()(m.a.mark((function e(r){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(A),n=!1,t=M(),!le){e.next=7;break}return n=!0,e.next=7,se(t);case 7:r.build&&(n=!0,z()),r.update&&B(r.update)&&(n=!0,Q(r)),n&&(console.log(""),M());case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de,fe,ve=function(e){return be.apply(this,arguments)};o.a.option("-v, --version","Output version number").option("-u, --update [patch|minor|major]","Update part of project version").option("-b, --build","Increase build number"),o.a.parse(process.argv),de=!1,fe={},Object.keys(f).forEach((function(e){var r=Object(u.existsSync)(f[e]);fe[e]={path:f[e],isFound:r},r||(de=!0)})),de&&(console.log(i.a.redBright("[Error] Some of files not found:\n")),Object.keys(f).forEach((function(e){var r;console.log(e),console.log("– path:",fe[e].path),console.log("– is found:",(r=fe[e].isFound)?i.a.greenBright(r):i.a.redBright(r)),console.log("")})),process.exit(0)),ve(o.a)}]);
//# sourceMappingURL=index.js.map