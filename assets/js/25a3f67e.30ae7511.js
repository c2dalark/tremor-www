"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[946],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4525:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={},s={unversionedId:"accepted/plugin-development-kit",id:"accepted/plugin-development-kit",isDocsHomePage:!1,title:"Plugin development Kit",description:"- Feature Name: plugindevelopmentkit",source:"@site/rfc/accepted/0006-plugin-development-kit.md",sourceDirName:"accepted",slug:"/accepted/plugin-development-kit",permalink:"/rfc/accepted/plugin-development-kit",version:"current",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sliding Window Mechanism",permalink:"/rfc/accepted/sliding-window-mechanism"},next:{title:"Ramp Interface",permalink:"/rfc/accepted/ramp-interface"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Guide-level Explanation",id:"guide-level-explanation",children:[]},{value:"Reference-level Explanation",id:"reference-level-explanation",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Rationale and Alternatives",id:"rationale-and-alternatives",children:[]},{value:"Prior Art",id:"prior-art",children:[]},{value:"Unresolved Questions",id:"unresolved-questions",children:[]},{value:"Future Possibilities",id:"future-possibilities",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature Name: plugin_development_kit"),(0,a.kt)("li",{parentName:"ul"},"Start Date: (fill me in with today's date, YYYY-MM-DD)"),(0,a.kt)("li",{parentName:"ul"},"Tremor Issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-runtime/issues/37"},"tremor-rs/tremor-runtime#0037")),(0,a.kt)("li",{parentName:"ul"},"RFC PR: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/pull/0010"},"tremor-rs/tremor-rfcs#0010"))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A plugin development kit (PDK) enables modularization of Tremor components decoupling their software development lifecycle. "),(0,a.kt)("p",null,"The two main requirements for the PDK are: loading shared linked libraries via a standard plugin mechanism that expose the plugin artifacts, and refactoring internal component registries to allow referencing plugins."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The first benefit of a PDK is to decouple the deployment of the Tremor executable and components. This enables shipping, deploying, or updating artifacts dynamically after initial deployment."),(0,a.kt)("p",null,"The second benefit is separating core and non-core or extended features development lifecycles. It stabilises and standardises how new artifacts are developed, shipped, tested, and deployed whilst normalising packaging, operations and management."),(0,a.kt)("p",null,"Lastly, Rust compile times are high. Partitioning out components as plugins from the core runtime allows them to be compiled separately, and only when there are significant changes, reducing build times, and offering faster development cycles, whilst simultaneously reducing overall compile times. "),(0,a.kt)("h2",{id:"guide-level-explanation"},"Guide-level Explanation"),(0,a.kt)("p",null,"The PDK supports plugins of the following kind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Onramps"),(0,a.kt)("li",{parentName:"ul"},"Offramps"),(0,a.kt)("li",{parentName:"ul"},"Codecs"),(0,a.kt)("li",{parentName:"ul"},"Preprocessors"),(0,a.kt)("li",{parentName:"ul"},"Postprocessors"),(0,a.kt)("li",{parentName:"ul"},"Operators"),(0,a.kt)("li",{parentName:"ul"},"Functions"),(0,a.kt)("li",{parentName:"ul"},"Extractors")),(0,a.kt)("p",null,"The resulting plugins can be loaded into a Tremor instance, either at start-time or dynamically and then used in deployments."),(0,a.kt)("h2",{id:"reference-level-explanation"},"Reference-level Explanation"),(0,a.kt)("p",null,"The PDK requires extending registries for various artefacts; we need to enable registering additional artefacts in addition to the supporting builtin ones. Nested namespaces may be of benefit to prevent collisions."),(0,a.kt)("p",null,"Plugin unloading needs careful consideration. In this revision, we are forbid unloading to eliminate the complexity of dependency tracking and live usage tracking. Unloading a plugin in the initial implementation will require a restart of the runtime. Plugin lifecycle with support for etherealization, destruction and unloading is envisaged. A future RFC revision may replace this one for this purpose."),(0,a.kt)("p",null,"Developer tooling such as template projects, traits, examples, and eventually, testing frameworks to facilitate higher developer experience for plugin developers is out of scope in this revision. A future RFC should cover off plugin developer experience once the PDK and a set of plugins have been implemented as concrete needs will become clearer over time."),(0,a.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,a.kt)("p",null,"Plugins add deployment complexity. Currently, Tremor is a single binary. A binary with plugins introduces versioning and dependency management complexities. For example, when to allow/disallow multiple versions in the same process."),(0,a.kt)("p",null,"Once the PDK is published, internal interfaces become public API surfaces. Binary compatibility, forward compatibility and separation of public from private or internal structures, types, behaviours and interfaces will be new concerns and constraints on the project."),(0,a.kt)("p",null,"Plugin ownership and maintenance. Aside from code-related issues, we need a process for managing officially maintained plugins and for managing the promotion, demotion/deprecation and changes to maintership or ownership. The governance of plugins will require explicit consideration with respect to standards, processes and community governance."),(0,a.kt)("h2",{id:"rationale-and-alternatives"},"Rationale and Alternatives"),(0,a.kt)("p",null,"The alternative to a PDK, is to internalize every artefact explicitly. This limits scalability and effectivness and is not tenable in the medium to long-term."),(0,a.kt)("p",null,"Another alternative is enhance Tremor so that plugins can be 'soft coded' through a DSL. This may require extending existing languages, adding new DSLs and other changes to the Tremor runtime. For some artefacts, such as codecs, or pre and post processors, this may be worth investigating. However, performance critical regions of the tremor runtime may limit the applicability of 'soft coded' plugins until the runtime evolves suitable APIs, facilities and development tooling."),(0,a.kt)("p",null,"WebAssembly might be another way to get and deploy additional code to Tremor without the need for linked libraries; however, interaction with existing third party libraries is unresolved."),(0,a.kt)("h2",{id:"prior-art"},"Prior Art"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html"},"Java Package Name Conventions"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/libloading/0.5.2/libloading/index.html"},"libloading Rust Crate for Dynamic Library Loading"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Java_Web_Start"},"Java WebStart"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Universal_binary"},"Mac OS X Universal Binaries"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WebAssembly")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wasmerio/wasmer"},"wasmer WebAssembly Runtime"),", ",(0,a.kt)("a",{parentName:"li",href:"wasmtime"},"wasmtime WebAssembly Runtime"),".")),(0,a.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,a.kt)("p",null,"The impact of clustering on the PDK and plugin development and runtime lifecycle is unknown. As clustering support in Tremor is in progress but not delivered at the time of writing, these questions are unexplored."),(0,a.kt)("h2",{id:"future-possibilities"},"Future Possibilities"),(0,a.kt)("p",null,"Central plugin registry (eg: maven repository, cargo for crates, CPAN), cluster-aware PDK, bundles, and dependency/usage tracking, version management."))}c.isMDXComponent=!0}}]);