(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return n?o.a.createElement(f,i(i({ref:t},d),{},{components:n})):o.a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(129)),c=["components"],i={id:"getting-started",title:"Getting started"},l={unversionedId:"chaincode-deployment/getting-started",id:"chaincode-deployment/getting-started",isDocsHomePage:!1,title:"Getting started",description:"The chaincode is a program that handles business logic agreed to by members of the network, as a smart contract. Chaincode can run in a variety of different platforms:",source:"@site/docs/chaincode-deployment/getting-started.md",slug:"/chaincode-deployment/getting-started",permalink:"/bevel-operator-fabric/docs/chaincode-deployment/getting-started",editUrl:"https://github.com/hyperledger/bevel-operator-fabric/edit/master/website/docs/chaincode-deployment/getting-started.md",version:"current",sidebar:"someSidebar1",previous:{title:"Getting started",permalink:"/bevel-operator-fabric/docs/chaincode-development/getting-started"},next:{title:"External chaincode as a service",permalink:"/bevel-operator-fabric/docs/chaincode-deployment/external-chaincode-as-a-service"}},d=[],p={toc:d};function s(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The chaincode is a program that handles business logic agreed to by members of the network, as a smart contract. Chaincode can run in a variety of different platforms:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Docker"),Object(a.b)("li",{parentName:"ul"},"Kubernetes (not neccesarily on Docker, it can be ContainerD)"),Object(a.b)("li",{parentName:"ul"},"On baremetal")),Object(a.b)("p",null,"Since this documentation is for the HLF Operator, we will focus on deploying the chaincode in Kubernetes."),Object(a.b)("p",null,"If you want to know how to develop chaincodes remotely from your machine, you can read the ",Object(a.b)("a",{parentName:"p",href:"/bevel-operator-fabric/docs/chaincode-development/getting-started"},"developing-chaincode")," section."),Object(a.b)("p",null,"In order to know how to deploy the chaincode, you have to options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/bevel-operator-fabric/docs/chaincode-deployment/external-chaincode-as-a-service"},"Deploy using the external chaincode as a service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/bevel-operator-fabric/docs/chaincode-deployment/k8s-builder"},"Deploy using the Kubernetes builder"))))}s.isMDXComponent=!0}}]);