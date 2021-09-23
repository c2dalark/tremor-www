"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1617],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(c,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Architecture Changes",id:"arch_changes"},c=void 0,l={unversionedId:"process/arch_changes",id:"process/arch_changes",isDocsHomePage:!1,title:"Architecture Changes",description:"Pretty much every change to the Tremor internals architecture needs an RFC.",source:"@site/rfc/process/arch_changes.md",sourceDirName:"process",slug:"/process/arch_changes",permalink:"/rfc/process/arch_changes",tags:[],version:"current",frontMatter:{title:"Architecture Changes",id:"arch_changes"},sidebar:"defaultSidebar",previous:{title:"API Changes",permalink:"/rfc/process/api_changes"},next:{title:"Documentation Changes",permalink:"/rfc/process/docs_changes"}},u=[{value:"Amendments",id:"amendments",children:[]}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rfc-policy---architecture-design"},"RFC policy - Architecture Design"),(0,i.kt)("p",null,"Pretty much every change to the Tremor internals architecture needs an RFC.\nNote that new facilities (or major changes to an existing facilities) are\nconsidered changes to Tremor architecture."),(0,i.kt)("p",null,"Architecture RFCs are managed by the architecture sub-team, and tagged ",(0,i.kt)("inlineCode",{parentName:"p"},"arch"),". The architecture sub-team will do an initial triage of new PRs within a week of\nsubmission. The result of triage will either be that the PR is assigned to a\nmember of the sub-team for shepherding, the PR is closed as postponed because\nthe subteam believe it might be a good idea, but is not currently aligned with\nTremor's priorities, or the PR is closed because the sub-team feel it should\nnot be done and further discussion is not necessary. In the latter two\ncases, the sub-team will give a detailed explanation. We'll follow the standard\nprocedure for shepherding, final comment period, etc."),(0,i.kt)("p",null,"As changes to Tremor architecture may intersect with multiple sub-teams, it may\nrequire multiple shepherds - one from each sub-team, and a core member to coordinate."),(0,i.kt)("p",null,"In general, changes to core architecture and internals implies a significant investment by the contributor to Tremor and implies that the contributor wishes to become a member committed to continued investment in the project. The core sub-team may wish to discuss commitment with significant contributions to insure progressing those RFCs and long term maintenance and evolution of contributed work."),(0,i.kt)("h2",{id:"amendments"},"Amendments"),(0,i.kt)("p",null,"Sometimes, in the implementation of an RFC, changes are required. In general,\nthese don't require an RFC as long as they are very minor and in the spirit of\nthe accepted RFC (essentially bug fixes). In this case, implementers should\nsubmit an RFC PR which amends the accepted RFC with the new details. Although\nthe RFC repository is not intended as a reference manual, it is preferred that\nRFCs do reflect what was actually implemented. Amendment RFCs will go through\nthe same process as regular RFCs, but should be less controversial and thus\nshould move more quickly."),(0,i.kt)("p",null,"When a change is more dramatic, it is better to create a new RFC. The RFC should\nbe standalone and reference the original, rather than modifying the existing\nRFC. You should add a comment to the original RFC with referencing the new RFC\nas part of the PR."),(0,i.kt)("p",null,"There is some scope for judgment here. As a guideline, if a change\naffects more than one part of the RFC (i.e., is a non-local change), affects the\napplicability of the RFC to its motivating use cases, or there are multiple\npossible new solutions, then the feature is probably not 'minor' and should get\na new RFC."))}m.isMDXComponent=!0}}]);