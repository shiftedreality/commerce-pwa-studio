(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7368],{90393:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return m}});var a=t(22122),o=t(19756),s=(t(15007),t(64983)),l=t(99536),d={},p={_frontmatter:d},r=l.Z;function m(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,s.mdx)(r,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"enable-sass-or-less-support"},"Enable SASS or LESS support"),(0,s.mdx)("p",null,"This tutorial provides the steps to enable SASS or LESS support in your storefront project.\nUse these Webpack configurations to add support for SASS and LESS alongside ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/css-modules/"},"CSS Modules"),"."),(0,s.mdx)("h2",{id:"add-sass-support"},"Add SASS support"),(0,s.mdx)("h3",{id:"step-1-install-dependencies"},"Step 1. Install dependencies"),(0,s.mdx)("p",null,"Use a package manager, such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"npm"),", to install the SASS loader as a dev dependency."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev sass-loader node-sass\n")),(0,s.mdx)("h3",{id:"step-2-modify-the-webpack-configuration"},"Step 2. Modify the Webpack configuration"),(0,s.mdx)("p",null,"Edit ",(0,s.mdx)("inlineCode",{parentName:"p"},"webpack.config.js")," and add a new ",(0,s.mdx)("inlineCode",{parentName:"p"},"config")," rule entry:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-diff"},"\n    config.plugins = [\n        ...config.plugins,\n        new DefinePlugin({\n            /**\n             * Make sure to add the same constants to\n             * the globals object in jest.config.js.\n             */\n            POSSIBLE_TYPES: JSON.stringify(possibleTypes),\n            STORE_NAME: JSON.stringify('Venia')\n        }),\n        new HTMLWebpackPlugin({\n            filename: 'index.html',\n            template: './template.html',\n            minify: {\n                collapseWhitespace: true,\n                removeComments: true\n            }\n        })\n    ];\n+\n+   config.module.rules.push({\n+       test: /\\.s[ca]ss$/,\n+       use: [\n+           'style-loader',\n+           {\n+               loader: 'css-loader',\n+               options: {\n+                   modules: true,\n+                   sourceMap: true,\n+                   localIdentName: '[name]-[local]-[hash:base64:3]'\n+               }\n+           },\n+           'sass-loader'\n+       ]\n+   });\n")),(0,s.mdx)("h3",{id:"step-3-create-a-sass-file-and-import-it-in-a-component"},"Step 3. Create a SASS file and import it in a component"),(0,s.mdx)("p",null,"Create the ",(0,s.mdx)("inlineCode",{parentName:"p"},"myComponent.scss")," file:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-scss"},"$button-color: #ff495b;\n$button-color-hover: #ff9c1a;\n\n.root {\n  padding: 15px;\n}\n\n.button {\n  color: $button-color;\n\n  &:hover {\n    color: $button-color-hover;\n  }\n}\n")),(0,s.mdx)("p",null,"Create a component and import the SASS file:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport defaultClasses from "./myComponent.scss";\n\nconst MyComponent = () => (\n  <div className={defaultClasses.root}>\n    <button className={defaultClasses.button}>My Component</button>\n  </div>\n);\n\nexport default MyComponent;\n')),(0,s.mdx)("h2",{id:"add-less-support"},"Add LESS support"),(0,s.mdx)("h3",{id:"step-1-install-dependencies-1"},"Step 1. Install dependencies"),(0,s.mdx)("p",null,"Use a package manager, such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"npm"),", to install the LESS loader as a dev dependency."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev less-loader less\n")),(0,s.mdx)("h3",{id:"step-2-modify-the-webpack-configuration-1"},"Step 2. Modify the Webpack configuration"),(0,s.mdx)("p",null,"Edit ",(0,s.mdx)("inlineCode",{parentName:"p"},"webpack.config.js")," and add a new ",(0,s.mdx)("inlineCode",{parentName:"p"},"config")," rule entry:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-diff"},"\n    config.plugins = [\n        ...config.plugins,\n        new DefinePlugin({\n            /**\n             * Make sure to add the same constants to\n             * the globals object in jest.config.js.\n             */\n            POSSIBLE_TYPES: JSON.stringify(possibleTypes),\n            STORE_NAME: JSON.stringify('Venia')\n        }),\n        new HTMLWebpackPlugin({\n            filename: 'index.html',\n            template: './template.html',\n            minify: {\n                collapseWhitespace: true,\n                removeComments: true\n            }\n        })\n    ];\n+\n+   config.module.rules.push({\n+       test: /\\.less$/,\n+       use: [\n+           'style-loader',\n+           {\n+               loader: 'css-loader',\n+               options: {\n+                   modules: true,\n+                   sourceMap: true,\n+                   localIdentName: '[name]-[local]-[hash:base64:3]'\n+               }\n+           },\n+           'less-loader'\n+       ]\n+   });\n")),(0,s.mdx)("h3",{id:"step-3-create-a-less-file-and-import-it-on-your-component"},"Step 3. Create a LESS file and import it on your component"),(0,s.mdx)("p",null,"Create the ",(0,s.mdx)("inlineCode",{parentName:"p"},"myComponent.less")," file:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-less"},"@button-color: #ff495b;\n@button-color-hover: #ff9c1a;\n\n.root {\n  padding: 15px;\n}\n\n.button {\n  color: @button-color;\n\n  &:hover {\n    color: @button-color-hover;\n  }\n}\n")),(0,s.mdx)("p",null,"Create a component and import the LESS file:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport defaultClasses from "./myComponent.less";\n\nconst MyComponent = () => (\n  <div className={defaultClasses.root}>\n    <button className={defaultClasses.button}>My Component</button>\n  </div>\n);\n\nexport default MyComponent;\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-basic-modifications-enable-sass-less-index-md-56322d625a4ecf5d39d1.js.map