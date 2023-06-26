(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),l=n(7),a=(n(0),n(129)),i=["components"],c={id:"installation",title:"Installation"},o={unversionedId:"kubectl-plugin/installation",id:"kubectl-plugin/installation",isDocsHomePage:!1,title:"Installation",description:"Installing the Kubectl HLF Plugin",source:"@site/docs/kubectl-plugin/installation.md",slug:"/kubectl-plugin/installation",permalink:"/bevel-operator-fabric/docs/kubectl-plugin/installation",editUrl:"https://github.com/hyperledger/bevel-operator-fabric/edit/master/website/docs/kubectl-plugin/installation.md",version:"current",sidebar:"someSidebar1",previous:{title:"Manage the channel",permalink:"/bevel-operator-fabric/docs/channel-management/manage"},next:{title:"Upgrade",permalink:"/bevel-operator-fabric/docs/kubectl-plugin/upgrade"}},u=[{value:"Installing the Kubectl HLF Plugin",id:"installing-the-kubectl-hlf-plugin",children:[]},{value:"Upgrading the Kubectl HLF Plugin",id:"upgrading-the-kubectl-hlf-plugin",children:[]},{value:"Verifying the installation",id:"verifying-the-installation",children:[]}],p={toc:u};function s(e){var t=e.components,n=Object(l.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"installing-the-kubectl-hlf-plugin"},"Installing the Kubectl HLF Plugin"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# when kubectl-hlf is in the krew-index\nkubectl krew install hlf \n")),Object(a.b)("h3",{id:"upgrading-the-kubectl-hlf-plugin"},"Upgrading the Kubectl HLF Plugin"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# when kubectl-hlf is in the krew-index\nkubectl krew upgrade hlf \n")),Object(a.b)("h3",{id:"verifying-the-installation"},"Verifying the installation"),Object(a.b)("p",null,"If the following command shows the list of commands of HLF, it means that the installation has been succesfull."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kubectl hlf --help\n")))}s.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),p=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},f=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,g=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return n?l.a.createElement(g,c(c({ref:t},u),{},{components:n})):l.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);