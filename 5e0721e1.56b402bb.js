(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,b=s["".concat(a,".").concat(u)]||s[u]||h[u]||i;return n?o.a.createElement(b,c(c({ref:t},d),{},{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},182:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/arch_chaincode_dev-90caf712042e966590d6944a3268375e.png"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(129)),a=["components"],c={id:"architecture",title:"Architecture"},l={unversionedId:"chaincode-development/architecture",id:"chaincode-development/architecture",isDocsHomePage:!1,title:"Architecture",description:"Problem",source:"@site/docs/chaincode-development/architecture.md",slug:"/chaincode-development/architecture",permalink:"/bevel-operator-fabric/docs/chaincode-development/architecture",editUrl:"https://github.com/hyperledger/bevel-operator-fabric/edit/master/website/docs/chaincode-development/architecture.md",version:"current",sidebar:"someSidebar1",previous:{title:"Develop chaincode locally",permalink:"/bevel-operator-fabric/docs/user-guide/develop-chaincode-locally"},next:{title:"Getting started",permalink:"/bevel-operator-fabric/docs/chaincode-development/getting-started"}},d=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}],p={toc:d};function s(e){var t=e.components,c=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"problem"},"Problem"),Object(i.b)("p",null,"When developing chaincodes, we need to have an HLF network deployed, usually in our development environment. It is hard for new developers to get started since they need to know how to deploy an HLF network."),Object(i.b)("p",null,"This tool aims to ease the onboarding of new developers that are not familiar with the internals of the HLF network but are interested in developing chaincodes."),Object(i.b)("p",null,"The only requirement is that the developer has access to a working HLF network. This network can be set up by Administrators that are used to perform these operations, so the developer doesn't need to."),Object(i.b)("p",null,"With this tool, instead of installing the chaincode in the peers, approving the chaincode definition, and finally, committing the chaincode, the developer can have the chaincode started in its machine. With one command, it can install, approve and commit the chaincode in one go. SupposeThen, ifhe developer needs to modify the chaincode logic. In that case, all it needs to do is restart the chaincode program running in its machine, just like any other application the developer is used to developing."),Object(i.b)("h2",{id:"solution"},"Solution"),Object(i.b)("p",null,"The chaincode needs to be hosted in the developer machine, by doing this the developer can modify the chaincode logic without having to re-deploy the chaincode program."),Object(i.b)("p",null,"But the developer machine is not accessible by the peer, which is deployed in another location, for this reason, we need a tunnel to be able to specify an address for the peer to connect and then, the tunnel will forward the traffic to the developer machine."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/kfsoftware/hlf-cc-dev"},Object(i.b)("inlineCode",{parentName:"a"},"hlf-cc-dev"))," is a tool that helps to deploy the chaincode program using a simple CLI interface."),Object(i.b)("p",null,"For more inforamtion you can check the following diagram."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img.png",src:n(182).default})))}s.isMDXComponent=!0}}]);