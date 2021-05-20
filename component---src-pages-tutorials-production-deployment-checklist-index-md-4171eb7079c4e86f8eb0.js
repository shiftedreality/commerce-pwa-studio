(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3719],{35929:function(e,o,t){"use strict";t.r(o),t.d(o,{_frontmatter:function(){return s},default:function(){return u}});var n=t(22122),i=t(19756),r=(t(15007),t(64983)),a=t(99536),s={},d={_frontmatter:s},l=a.Z;function u(e){var o=e.components,t=(0,i.Z)(e,["components"]);return(0,r.mdx)(l,(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"production-launch-checklist"},"Production launch checklist"),(0,r.mdx)("p",null,"Launching a production site is the final step in the storefront development process.\nStorefronts developed using PWA Studio can be deployed in a wide range of production environments."),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"This topic highlights a few suggested steps that can be applied to most deployment processes.\nUse the methods described in this topic to ensure your deployment is successful."),(0,r.mdx)("p",null,"For Magento Cloud specific deployment instructions, see the ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/production-deployment/magento-cloud"},"Magento Cloud deployment")," tutorial."),(0,r.mdx)("h2",{id:"set-your-environment-variables"},"Set your environment variables"),(0,r.mdx)("p",null,"Make sure you set your ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/environment/variables/"},"environment variables")," according to the specific requirements of your deployment service.\nFor some services, you can use a ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file, which is what your development environment uses.\nOther services require you to set environment variables through a UI or separate configuration file."),(0,r.mdx)("h3",{id:"important-environment-variables"},"Important environment variables"),(0,r.mdx)("p",null,"The following is a list of environment variables you should set in your production environment:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"NODE_ENV"),' - Some scripts and processes have production specific logic, so set the value of this variable to "production".'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/api/buildpack/environment/variables/#magento_backend_url"},(0,r.mdx)("inlineCode",{parentName:"a"},"MAGENTO_BACKEND_URL"))," - Set the value of this environment variable to your ",(0,r.mdx)("strong",{parentName:"li"},"production")," Magento instance."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/api/buildpack/environment/variables/#checkout_braintree_token"},(0,r.mdx)("inlineCode",{parentName:"a"},"CHECKOUT_BRAINTREE_TOKEN"))," - Set this value to the BrainTree token associated with your ",(0,r.mdx)("strong",{parentName:"li"},"production")," Magento instance.")),(0,r.mdx)("h2",{id:"create-a-production-build"},"Create a production build"),(0,r.mdx)("p",null,"The PWA Studio development server is optimized for rapid development,\nbut the generated sites, while closely resembling a production version of the site, are not optimized for production.\nInstead of serving your storefront from the source, you need to create a production build of your project."),(0,r.mdx)("p",null,"Use the following command to build the production files to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"dist")," directory:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn build\n")),(0,r.mdx)("h2",{id:"run-the-server"},"Run the server"),(0,r.mdx)("p",null,"Your deployment service must support node processes in order to run the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn start\n")),(0,r.mdx)("p",null,"This command starts a production UPWARD-JS server that runs your production build."),(0,r.mdx)("h2",{id:"remove-development-packages"},"Remove development packages"),(0,r.mdx)("p",null,"Edit your project's ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file and remove any packages you only use in your development environment. For example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"venia-sample-backends")," is an extension included in projects built using the scaffolding tool."),(0,r.mdx)("h2",{id:"audit-with-lighthouse"},"Audit with Lighthouse"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse/"},"Lighthouse")," is a web developer tool that audits your website.\nIt checks the quality of your site by measuring performance, accessibility, SEO, and whether it qualifies as a progressive web application."),(0,r.mdx)("p",null,"The tool scores your site on how well it performs and creates a report with suggestions on how to improve your Lighthouse scores.\nUse the report from Lighthouse to identify opportunities for improvement in your storefront to make sure you are launching an accessible and performant progressive web application."),(0,r.mdx)("p",null,"Lighthouse is available through Chrome's DevTools, as a command line script, as a Node module, or from the web.\nSee the ",(0,r.mdx)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse/"},"Lighthouse")," page for detailed instructions on how to use each form of the tool."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-production-deployment-checklist-index-md-4171eb7079c4e86f8eb0.js.map