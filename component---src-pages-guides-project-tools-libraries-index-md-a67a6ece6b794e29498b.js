"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[8259],{91967:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a,n=o(87462),r=o(63366),i=(o(15007),o(64983)),s=o(99536),p=["components"],d={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:d},m=s.Z;function u(e){var t=e.components,o=(0,r.Z)(e,p);return(0,i.mdx)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"external-tools-and-libraries"},"External tools and libraries"),(0,i.mdx)("p",null,"The following diagrams describe the route a request takes through PWA Studio and the technologies involved at each step.\nThis topic provides an overview to some of the major technologies used and other resources."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"663px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"184.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/cb523/pwa-tools-technology-overview.webp 320w","/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/797b9/pwa-tools-technology-overview.webp 640w","/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/4fecf/pwa-tools-technology-overview.webp 663w"],sizes:"(max-width: 663px) 100vw, 663px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/72799/pwa-tools-technology-overview.png 320w","/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/6af66/pwa-tools-technology-overview.png 640w","/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/0786c/pwa-tools-technology-overview.png 663w"],sizes:"(max-width: 663px) 100vw, 663px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/036bfa97f2e53f2bfaec6577cc902009/0786c/pwa-tools-technology-overview.png",alt:"tools and technology overview",title:"tools and technology overview",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"php"},"PHP"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://php.net/"},"PHP")," is the core language used in the Adobe Commerce and Magento Open Source application, but it is not one used by the main PWA Studio project.\nIn general, you do not need to know PHP to work with PWA Studio tools, but if your storefront requires heavy customizations to the backend application, you will need to know PHP to make the necessary changes."),(0,i.mdx)("h2",{id:"javascript"},"JavaScript"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript"},"JavaScript")," is a programming language used to add logic and interactive behaviors to web applications.\nJavaScript is the primary language used in the PWA Studio project, and knowing how to develop with it is necessary for using PWA Studio in your own projects."),(0,i.mdx)("p",null,"For frontend development, browser compatibility is important for creating a consistent experience.\nDifferent web browsers have different version of JavaScript installed, so developers should build their applications with this in mind."),(0,i.mdx)("p",null,"For backend developers, scripts and services in PWA Studio are created using ",(0,i.mdx)("a",{parentName:"p",href:"https://nodejs.org/en/about/"},"node.js"),".\nIt is the environment used in the PWA Studio project, but it is not a required one for your own projects."),(0,i.mdx)("h2",{id:"webpack"},"webpack"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," is a configuration-driven asset bundler and optimizer for JavaScript applications."),(0,i.mdx)("p",null,"webpack's primary function is to create one or more bundles from the dependencies in your project's modules.\nwebpack is also able to transform, package, or optimize resources and assets using plugins.\nThis allows you to extend webpack's functionality beyond JavaScript bundling."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/buildpack/"},"pwa-buildpack")," library contains webpack tools for setting up a development or production environment.\nThe configuration for these tools are found in a project's ",(0,i.mdx)("inlineCode",{parentName:"p"},"webpack.config.js")," file."),(0,i.mdx)("p",null,"webpack is not a required library for your own projects, but it is recommended for the development and performance benefits it provides."),(0,i.mdx)("h2",{id:"react"},"React"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," officially describes itself as a ",(0,i.mdx)("em",{parentName:"p"},"JavaScript library for building user interfaces"),".\nThe library provides the following features that make PWA development easier:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Simple")," - The React library does one thing: build a user interface.\nIt does this without making assumptions about the underlying technology stack.\nThis flexibility gives you the freedom to choose the appropriate solutions for the rest of your project.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Declarative")," - Creating a complex user interface is difficult when working directly with the DOM API.\nReact allows you to describe how your interface should look for a specific application state, and\nthe library takes care of rendering the UI correctly when the state changes.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Modular")," - React encourages developers to create modular and reusable components.\nTaking a modular approach to development makes your code easier to debug and maintain."))),(0,i.mdx)("h3",{id:"hooks"},"Hooks"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hooks")," are a feature introduced in React 16.8.\nThey allow the use of state and logic encapsulation without using class components."),(0,i.mdx)("p",null,"Since hooks allow you to store state inside functional components, they are a good alternative to using ",(0,i.mdx)("a",{parentName:"p",href:"#redux"},"Redux"),"."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/peregrine"},"Peregrine")," library provides custom hooks for common storefront behaviors and logic.\nDevelopers must be familiar with using hooks to get the most out of the PWA Studo library."),(0,i.mdx)("h2",{id:"redux"},"Redux"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," is a JavaScript library used for managing state in a web application."),(0,i.mdx)("p",null,"It provides a global store object that holds application state that multiple components depend on.\nComponents that plug into the store have direct access to the specific state data they need."),(0,i.mdx)("p",null,"This library is often paired with React to alleviate the problem of passing data down multiple component layers."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Redux is currently being refactored out of the ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/venia/storefront/"},"Venia example storefront")," in favor of ",(0,i.mdx)("a",{parentName:"p",href:"#hooks"},"React hooks"),".\nHowever, Redux is still a valid library for managing state in your own projects."),(0,i.mdx)("h2",{id:"graphql"},"GraphQL"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a specification for a data query language on the client side and a service layer on the server side.\nIt is often seen as an alternative to using ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/REST"},"REST")," endpoints."),(0,i.mdx)("p",null,"One of the main advantages GraphQL has over REST is that a single GraphQL endpoint can accommodate requests for any combination of X, Y, and Z pieces of data,\nwhereas REST requires specialized endpoints for different data request combinations.\nUnlike REST, which can require multiple server requests to aggregate data, a single GraphQL request returns only the data needed and nothing more."),(0,i.mdx)("p",null,"Performance is an important metric for PWAs.\nUsing GraphQL improves this by reducing the number of server calls and the amount of data returned."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/venia/storefront/"},"Venia example storefront")," uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/why-apollo/"},"Apollo client")," to fetch data from a GraphQL endpoint, but with a little extra work, it is possible to use alternative client libraries in your own project."),(0,i.mdx)("h2",{id:"workbox"},"Workbox"),(0,i.mdx)("p",null,"Google's ",(0,i.mdx)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/"},"Workbox")," library provides modules that make it easy to work with ",(0,i.mdx)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers/"},"service workers"),".\nIt is useful for boosting performance by controlling cache behavior and enables offline mode, which is a requirement for any Progressive Web Application."),(0,i.mdx)("h2",{id:"pwa-studio-ui-kit-for-adobe-xd"},"PWA Studio UI Kit for Adobe XD"),(0,i.mdx)("p",null,"Adobe XD makes handoff between designers and engineers more efficient through easy-to-use collaboration tools. The ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/commerce-xd-kits/"},"PWA Studio UI Kit")," contains a collection of templates and components compatible with Adobe Commerce.  "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-project-tools-libraries-index-md-a67a6ece6b794e29498b.js.map