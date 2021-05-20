(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3385],{5727:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return l}});var s=t(22122),n=t(19756),i=(t(15007),t(64983)),o=t(99536),d={},p={_frontmatter:d},m=o.Z;function l(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,i.mdx)(m,(0,s.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"venia-sample-data"},"Venia sample data"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://venia.magento.com/"},"Venia demo storefront")," runs on top of a Magento 2 backend that has a specific set of sample data installed.\nThe sample Magento backend that developers can use also contains the same sample data set."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"434px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"193.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/a8824b4a0dedd1e3d1d3937ed78a7330/cb523/accessories-sample-data.webp 320w","/commerce-pwa-studio/static/a8824b4a0dedd1e3d1d3937ed78a7330/ea7ff/accessories-sample-data.webp 434w"],sizes:"(max-width: 434px) 100vw, 434px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/a8824b4a0dedd1e3d1d3937ed78a7330/72799/accessories-sample-data.png 320w","/commerce-pwa-studio/static/a8824b4a0dedd1e3d1d3937ed78a7330/ade6e/accessories-sample-data.png 434w"],sizes:"(max-width: 434px) 100vw, 434px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/a8824b4a0dedd1e3d1d3937ed78a7330/ade6e/accessories-sample-data.png",alt:"venia-sample-data",title:"venia-sample-data",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"installing-the-venia-sample-data"},"Installing the Venia sample data"),(0,i.mdx)("p",null,"If you have access to your own Magento 2 backend and you want to install the Venia sample data, follow these instructions."),(0,i.mdx)("h3",{id:"step-1-copy-or-create-the-deploy-script"},"Step 1. Copy or create the deploy script"),(0,i.mdx)("p",null,"Copy the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-concept/deployVeniaSampleData.sh"},"deployVeniaSampleData.sh")," script into the root directory of your Magento installation.\nA copy of this script is also included when you ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/setup-storefront/"},"setup your storefront project"),"."),(0,i.mdx)("h3",{id:"step-2-execute-the-deploy-script"},"Step 2. Execute the deploy script"),(0,i.mdx)("p",null,"Execute the script in the root directory of your Magento instance to add the Venia sample data modules to Magento:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"bash deployVeniaSampleData.sh\n")),(0,i.mdx)("h3",{id:"step-3-install-the-sample-data-modules"},"Step 3. Install the sample data modules"),(0,i.mdx)("p",null,"Run the following command in the Magento root directory to install the Venia data from the modules:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"bin/magento setup:upgrade\n")),(0,i.mdx)("h3",{id:"step-4-reindex-the-new-data"},"Step 4. Reindex the new data"),(0,i.mdx)("p",null,"Run the following command in the Magento root directory to reindex the data from the modules:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"bin/magento indexer:reindex\n")),(0,i.mdx)("h3",{id:"step-5-verify-installation"},"Step 5. Verify installation"),(0,i.mdx)("p",null,"Log into the Admin section or visit the store of your Magento instance to verify the sample data installation."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"879px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/cb523/sample-data-installed.webp 320w","/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/797b9/sample-data-installed.webp 640w","/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/50eb6/sample-data-installed.webp 879w"],sizes:"(max-width: 879px) 100vw, 879px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/72799/sample-data-installed.png 320w","/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/6af66/sample-data-installed.png 640w","/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/bcb8c/sample-data-installed.png 879w"],sizes:"(max-width: 879px) 100vw, 879px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/ab36467dd8965d490834a17f9b54466f/bcb8c/sample-data-installed.png",alt:"sample-data-in-luma",title:"sample-data-in-luma",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-packages-venia-sample-data-index-md-94403858c8d2ea2e7577.js.map