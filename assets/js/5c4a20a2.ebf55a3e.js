"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[163],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81254:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"API Changes",id:"api_changes"},c={unversionedId:"process/api_changes",id:"process/api_changes",isDocsHomePage:!1,title:"API Changes",description:"Pretty much every change to the API needs an RFC. Note that changes to documentation are not considered changes to API design unless there are associated changes to data structures transmitted or there is a change to error handling or defined behaviour that impacts existing API surface.",source:"@site/rfc/process/api_changes.md",sourceDirName:"process",slug:"/process/api_changes",permalink:"/rfc/process/api_changes",version:"current",frontMatter:{title:"API Changes",id:"api_changes"},sidebar:"defaultSidebar",previous:{title:"RFC Template (RFC Title goes here)",permalink:"/rfc/process/template"},next:{title:"Architecture Changes",permalink:"/rfc/process/arch_changes"}},l=[{value:"Amendments",id:"amendments",children:[]}],h={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rfc-policy---api-design"},"RFC policy - API design"),(0,o.kt)("p",null,"Pretty much every change to the API needs an RFC. Note that changes to documentation are not considered changes to API design unless there are associated changes to data structures transmitted or there is a change to error handling or defined behaviour that impacts existing API surface."),(0,o.kt)("p",null,"Deprecations, removal of API methods, and the addition of new methods are considered design changes and should follow ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org"},"semantic versioning")," principles."),(0,o.kt)("p",null,"API RFCs are managed by the api sub-team, and tagged ",(0,o.kt)("inlineCode",{parentName:"p"},"api"),". The API sub-team will do an initial triage of new PRs within a week of submission. The result of triage will either be that the PR is assigned to a member of the sub-team for shepherding, the PR is closed as postponed because the subteam believe it might be a good idea, but is not currently aligned with Tremor's priorities, or the PR is closed because the sub-team feel it should not be done and further discussion is not necessary. In the latter two cases, the sub-team will give a detailed explanation. We'll follow the standard procedure for shepherding, final comment period, etc."),(0,o.kt)("h2",{id:"amendments"},"Amendments"),(0,o.kt)("p",null,"Sometimes, in the implementation of an RFC, changes are required. In general,\nthese don't require an RFC as long as they are very minor and in the spirit of\nthe accepted RFC (essentially bug fixes). In this case, implementers should\nsubmit an RFC PR which amends the accepted RFC with the new details. Although\nthe RFC repository is not intended as a reference manual, it is preferred that\nRFCs do reflect what was actually implemented. Amendment RFCs will go through\nthe same process as regular RFCs, but should be less controversial, and thus\nshould move more quickly."),(0,o.kt)("p",null,"When a change is more dramatic, it is better to create a new RFC. The RFC should\nbe standalone and reference the original, rather than modifying the existing\nRFC. You should add a comment to the original RFC with referencing the new RFC\nas part of the PR."),(0,o.kt)("p",null,"There is some scope for judgment here. As a guideline, if a change\naffects more than one part of the RFC (i.e., is a non-local change), affects the\napplicability of the RFC to its motivating use cases, or there are multiple\npossible new solutions, then the feature is probably not 'minor' and should get\na new RFC."))}u.isMDXComponent=!0}}]);