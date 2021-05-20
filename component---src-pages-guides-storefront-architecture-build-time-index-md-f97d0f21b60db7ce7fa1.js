(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8465],{92985:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return m}});var i,a=t(22122),o=t(19756),r=(t(15007),t(64983)),d=t(99536),s={},p=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:s},c=d.Z;function m(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.mdx)(c,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"build-time-architecture"},"Build time architecture"),(0,r.mdx)("p",null,"The build architecture of PWA Studio is the system used to compile JavaScript and CSS source code into a production-ready PWA storefront application."),(0,r.mdx)("h2",{id:"magento-store-dependency"},"Magento store dependency"),(0,r.mdx)("p",null,"PWA Studio is part of Magento's ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Service-oriented_architecture"},"service-oriented architecture")," vision.\nThis vision minimizes dependencies by separating the merchant-facing store admin and the shopper-facing storefront application.\nSeparating these two applications minimizes the dependencies between them."),(0,r.mdx)("p",null,"The Venia build system respects this principle by running the build process independent from the Magento core application.\nHowever, the build system does use the Magento API at compilation time for additional validation and optimization of storefront code."),(0,r.mdx)("h2",{id:"repository-organization"},"Repository organization"),(0,r.mdx)("p",null,"Unlike Magento themes, the source code for a PWA Studio storefront does not need to be located within the Magento application code.\nA PWA Studio storefront and its backing Magento server are two separate applications, so\ntheir codebase is separate from each other."),(0,r.mdx)("p",null,"The Venia concept storefront uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn")," package for dependency management, but\nstorefronts built using PWA Studio can also use NPM to manage dependencies and run scripts."),(0,r.mdx)("p",null,"Early adopters of PWA Studio have cloned the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/"},(0,r.mdx)("inlineCode",{parentName:"a"},"pwa-studio")," repository")," and made direct customizations to the Venia concept source.\nThis can lead to conflicts when updating to the latest version of the codebase.\nThe preferred approach is to add PWA Studio tools and libraries as dependencies in a project."),(0,r.mdx)("p",null,"The recommended way of getting started is to use the scaffolding tool to ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/setup-storefront/"},"setup a new storefront project"),"."),(0,r.mdx)("h2",{id:"build-pipeline"},"Build pipeline"),(0,r.mdx)("p",null,"The build pipeline is the mechanism that consumes the project source code to generate production-ready files.\nThis process includes code ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Source-to-source_compiler"},"transpilation")," and smart script bundling.\nLike most modern Web compilation tools, it is built on ",(0,r.mdx)("a",{parentName:"p",href:"https://nodejs.org/en/about/"},"NodeJS"),"."),(0,r.mdx)("p",null,"The main tools used for the build pipeline are ",(0,r.mdx)("a",{parentName:"p",href:"https://babeljs.io"},"Babel")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),".\nThe Buildpack library provides a convenient API for configuring these tools, but the underlying API for building a Magento PWA is a direct configuration of Babel and Webpack."),(0,r.mdx)("p",null,"The Venia example storefront project contains an opinionated build pipeline setup, using Buildpack's ",(0,r.mdx)("inlineCode",{parentName:"p"},"configureWebpack")," API, but\ndevelopers can also use the PWA-Studio build libraries and configurations to define custom pipelines."),(0,r.mdx)("h3",{id:"venia-build-steps"},"Venia build steps"),(0,r.mdx)("p",null,"The following sections provide insight into the processes that make up Venia's build pipeline."),(0,r.mdx)("h4",{id:"starting-a-build"},"Starting a build"),(0,r.mdx)("p",null,"Venia's build process begins at the command prompt.\nIt is compatible with OSX and most Linux environments that use a ",(0,r.mdx)("inlineCode",{parentName:"p"},"bash")," shell."),(0,r.mdx)("p",null,"PWA Studio projects use ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/scripts"},"NPM scripts")," to organize frequently used commands.\nThese ",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn run")," commands are found in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"scripts")," section of the Venia storefront's ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-concept/package.json"},"package.json")," file."),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"build")," command to start the build process:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run build\n")),(0,r.mdx)("h4",{id:"cleanup-step"},"Cleanup step"),(0,r.mdx)("p",null,"The build process runs a ",(0,r.mdx)("inlineCode",{parentName:"p"},"clean")," script to remove old artifacts from the Venia concept's ",(0,r.mdx)("inlineCode",{parentName:"p"},"dist")," directory before generating the code."),(0,r.mdx)("h4",{id:"environment-validation"},"Environment validation"),(0,r.mdx)("p",null,"The next phase uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"buildpack load-env")," command to load and validate the ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file, which describes the store project configuration.\nThis file is found in the root directory of the Venia concept project."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/configuration/"},"Configuration management")," for more information."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"If there is no ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file in your project, create one with the ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/create-environment-file/"},(0,r.mdx)("inlineCode",{parentName:"a"},"buildpack create-env-file")," command"),"."),(0,r.mdx)("h4",{id:"query-validation"},"Query validation"),(0,r.mdx)("p",null,"After the environment validation phase, the build runs the ",(0,r.mdx)("inlineCode",{parentName:"p"},"validate-queries")," script.\nThis script uses the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/tree/develop/packages/graphql-cli-validate-magento-pwa-queries"},(0,r.mdx)("inlineCode",{parentName:"a"},"graphql-cli-validate-magento-pwa-queries"))," tool to analyze the GraphQL queries in the project and validates them against the schema downloaded from the configured Magento instance."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The connected Magento instance is defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"MAGENTO_BACKEND_URL")," environment variable."),(0,r.mdx)("h4",{id:"webpack-execution"},"Webpack execution"),(0,r.mdx)("p",null,"The final step in the build process uses the webpack CLI (",(0,r.mdx)("inlineCode",{parentName:"p"},"webpack"),") to process files into bundles.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"webpack.config.js")," file in the storefront project's root configures webpack to use external tools, such as Babel and Workbox, during file processing and bundle creation."),(0,r.mdx)("p",null,"The artifacts generated by webpack are located in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"dist")," folder.\nThese are static files ready to be served from an HTML document's app shell."),(0,r.mdx)("p",null,"When a browser loads these files, it launches a single-page application that is the Venia storefront."),(0,r.mdx)("h3",{id:"other-build-features"},"Other build features"),(0,r.mdx)("p",null,"The following build features are used mainly in a development environment.\nThey are not part of the normal production build process."),(0,r.mdx)("h4",{id:"watch-mode"},"Watch mode"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch")," script launches a development server and a persistent compiler process that monitors the source code for changes.\nWhen a change is detected, it initiates an incremental rebuild instead of a full build to keep the application in the browser up to date."),(0,r.mdx)("p",null,"This feature allows you to make edits in the code and see the changes in the application without going through the full build process."),(0,r.mdx)("h4",{id:"linting-and-testing"},"Linting and testing"),(0,r.mdx)("p",null,"The Venia concept project also contains scripts for formatting (",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn run prettier"),"), style analysis (",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn run lint"),"), and running unit tests (",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn test"),")."),(0,r.mdx)("p",null,"Use these scripts to keep your codebase well-formatted and test functionality."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-storefront-architecture-build-time-index-md-f97d0f21b60db7ce7fa1.js.map