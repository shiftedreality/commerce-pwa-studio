"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[4991],{37301:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return r},default:function(){return s}});var t=n(87462),o=n(63366),m=(n(15007),n(64983)),i=n(99536),p=["components"],r={},l={_frontmatter:r},d=i.Z;function s(e){var a=e.components,n=(0,o.Z)(e,p);return(0,m.mdx)(d,(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"install-the-open-source-metapackage"},"Install the Open Source metapackage"),(0,m.mdx)("p",null,"While PWA uses the standard GraphQL workflow, the metapackage adds capabilities for some PWA Studio features."),(0,m.mdx)("p",null,"You must install this metapackage in all projects using PWA Studio 12.1.0 and higher."),(0,m.mdx)("h2",{id:"installation-as-a-git-based-composer-package"},"Installation as a git-based composer package"),(0,m.mdx)("p",null,"To set up and develop your PWA extension modules locally, use the following instructions."),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Clone the ",(0,m.mdx)("inlineCode",{parentName:"p"},"magento2-pwa")," repository into your vendor directory name:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:magento/magento2-pwa.git ext/magento/magento2-pwa\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Update the ",(0,m.mdx)("inlineCode",{parentName:"p"},"magento2/composer.json")," settings to create a better development workflow for your extension modules:"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Update the ",(0,m.mdx)("inlineCode",{parentName:"p"},"minimum-stability")," for packages to ",(0,m.mdx)("inlineCode",{parentName:"p"},"dev"),". This allows for the installation of development modules:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"composer config minimum-stability dev\n"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"To work with ",(0,m.mdx)("inlineCode",{parentName:"p"},"stable")," packages, ensure that the ",(0,m.mdx)("inlineCode",{parentName:"p"},"prefer-stable")," property is ",(0,m.mdx)("inlineCode",{parentName:"p"},"true"),". This property should already be included in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer.json")," file, right above the ",(0,m.mdx)("inlineCode",{parentName:"p"},"minimum-stability")," setting.")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Configure ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer")," to find new extension modules. The following command configures ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer")," to treat any extension code inside the ",(0,m.mdx)("inlineCode",{parentName:"p"},"ext")," directory as a package and creates a symlink to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"vendor")," directory:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},'composer config repositories.ext path "./ext/*/*/*"\n'))))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Install the ",(0,m.mdx)("inlineCode",{parentName:"p"},"pwa")," metapackage:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"composer require magento/pwa\n")))),(0,m.mdx)("p",null,"At this point, you should see symlinks for all the ",(0,m.mdx)("inlineCode",{parentName:"p"},"pwa")," modules inside the ",(0,m.mdx)("inlineCode",{parentName:"p"},"vendor")," directory. These symlinks allow you to:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Run a Magento installation with additional modules."),(0,m.mdx)("li",{parentName:"ul"},"Develop locally using the standard git workflow.")),(0,m.mdx)("p",null,"You may need to ensure that there are no ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento_PWA*")," modules listed as ",(0,m.mdx)("inlineCode",{parentName:"p"},"enabled")," when you run ",(0,m.mdx)("inlineCode",{parentName:"p"},"bin/magento module:status"),". If there are, ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/enable-module.html"},"follow the docs on how to enable modules"),"."),(0,m.mdx)("h2",{id:"setting-up-the-git-workflow"},"Setting up the Git workflow"),(0,m.mdx)("p",null,"To improve the developer experience even further, you can add these configurations as well:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Exclude all the ",(0,m.mdx)("inlineCode",{parentName:"p"},"ext")," directories in the project's ",(0,m.mdx)("inlineCode",{parentName:"p"},".git")," configuration:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"echo ext >> ./.git/info/exclude\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Skip your project's root directory ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer.\\*")," files to avoid committing them by mistake:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"git update-index --skip-worktree composer.json && git update-index --skip-worktree composer.lock\n")),(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("strong",{parentName:"p"},"NOTE:")," You can reverse this operation anytime as needed:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"git update-index --no-skip-worktree composer.json && git update-index --no-skip-worktree composer.lock\n")))),(0,m.mdx)("h2",{id:"cloud-deployment-extension-installation"},"Cloud deployment extension installation"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Add ",(0,m.mdx)("a",{parentName:"p",href:"https://repo.magento.com"},"https://repo.magento.com")," as a composer repository by adding the following to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer.json")," file of your cloud instances."),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'"repositories": {\n    "repo": {\n        "type": "composer",\n        "url": "https://repo.magento.com"\n    }\n},\n'))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Require in ",(0,m.mdx)("inlineCode",{parentName:"p"},"magento/magento2-pwa")," extension by adding the following to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer.json")," file of your cloud instances."),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'"require": {\n    "magento/magento2-pwa": "0.2.1"\n},\n'))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Ensure your ",(0,m.mdx)("inlineCode",{parentName:"p"},"auth.json")," file has valid credentials for ",(0,m.mdx)("inlineCode",{parentName:"p"},"repo.magento.com"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Run ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer update")," to update your ",(0,m.mdx)("inlineCode",{parentName:"p"},"composer.lock")," file.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Push the changes and deploy your cloud instance."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-metapackages-open-source-index-md-b52d1f4200a1cb2c382b.js.map