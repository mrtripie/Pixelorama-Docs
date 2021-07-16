(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[74],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),p=a,h=c["".concat(l,".").concat(p)]||c[p]||A[p]||s;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},387:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return A}});var n=r(2122),a=r(9756),s=(r(7294),r(3905)),o=["components"],i={id:"brush",title:"Brush",sidebar_label:"Brush"},l={unversionedId:"brush",id:"brush",isDocsHomePage:!1,title:"Brush",description:"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size.",source:"@site/docs/brush.md",sourceDirName:".",slug:"/brush",permalink:"/Pixelorama-Docs/brush",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/brush.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1626448443,formattedLastUpdatedAt:"7/16/2021",sidebar_label:"Brush",frontMatter:{id:"brush",title:"Brush",sidebar_label:"Brush"},sidebar:"docs",previous:{title:"Palette",permalink:"/Pixelorama-Docs/palette"},next:{title:"FAQ",permalink:"/Pixelorama-Docs/faq"}},u=[{value:"Brush Types",id:"brush-types",children:[]},{value:"Making Your Own Custom Brushes",id:"making-your-own-custom-brushes",children:[{value:"File Brushes",id:"file-brushes",children:[]},{value:"Random Brushes",id:"random-brushes",children:[]},{value:"Project Brushes",id:"project-brushes",children:[]}]}],d={toc:u};function A(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size."),(0,s.kt)("h2",{id:"brush-types"},"Brush Types"),(0,s.kt)("p",null,"Pixelorama comes with three default brushes, the usual pixel/square brush, a hollow circle and a filled circle brush. These brushes are based on algorithms, while all of the other brushes as of right now are based on image data. The main difference is that the image-based brushes are scaled the same way that images are being scaled, which may not always have the result we desire. The image-based brushes are also divided into two types, File brushes and Project brushes. File brushes are being stored as external ",(0,s.kt)("inlineCode",{parentName:"p"},".png")," files, while project brushes are stored in the ",(0,s.kt)("a",{parentName:"p",href:"project"},"project")," itself. File brushes can also be Random brushes. Each time you draw using a random brush, the result will be something different!"),(0,s.kt)("p",null,'Image-based brushes will also have one extra option in the tool settings; a "Brush Color From" slider which goes from 0 to 100. If it\'s set to 0, the resulting color(s) of the brush will come entirely from the image data themselves. Otherwise, if set to 100, the brush color will come from the currently selected color. This setting is important to have because, since image-based brushes rely on image data, this means that they also get to keep the original colors of the image data.'),(0,s.kt)("h2",{id:"making-your-own-custom-brushes"},"Making Your Own Custom Brushes"),(0,s.kt)("h3",{id:"file-brushes"},"File Brushes"),(0,s.kt)("p",null,"Pixelorama gives you the option to create your own custom brushes, which you can later use to draw. There are two brush types, File and Project brushes. File brushes are ",(0,s.kt)("inlineCode",{parentName:"p"},".png")," files saved in the ",(0,s.kt)("inlineCode",{parentName:"p"},"pixelorama_data/Brushes"),' directory. They are available for all projects. To create a "File" custom brush, all you need to do is create your brush, and save is as a ',(0,s.kt)("inlineCode",{parentName:"p"},".png")," file in the ",(0,s.kt)("inlineCode",{parentName:"p"},"pixelorama_data/Brushes"),' directory. They will be found on the "File" tab.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"File brushes tab",src:r(1461).Z})),(0,s.kt)("h3",{id:"random-brushes"},"Random Brushes"),(0,s.kt)("p",null,"To make a random brush, save your sprites as multiple ",(0,s.kt)("inlineCode",{parentName:"p"},".png")," files, with ",(0,s.kt)("inlineCode",{parentName:"p"},'"~"')," at the beginning of their filename, and save them in the same sub-directory. For example, if you want to save a grass random brush, you can create a ",(0,s.kt)("inlineCode",{parentName:"p"},"pixelorama_data/Brushes/Grass")," directory, and name the files something like ",(0,s.kt)("inlineCode",{parentName:"p"},"~Grass1.png"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"~Grass2.png"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"~Grass3.png"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"~Grass4.png"),", and so on. The more files you add, the more variation (random values) your random brush will have."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Random brush files",src:r(339).Z})),(0,s.kt)("h3",{id:"project-brushes"},"Project Brushes"),(0,s.kt)("p",null,"Project brushes are project-dependent, which means that they're not available for all projects. They are saved inside ",(0,s.kt)("inlineCode",{parentName:"p"},".pxo")," files. To create a Project brush, you can use the rectangle selection tool, select the drawing you want to save as brush, and press ",(0,s.kt)("kbd",null,"Control + B"),' or go to Edit, New Brush. They will be found on the "Project" tab.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Project brushes tab",src:r(8526).Z})))}A.isMDXComponent=!0},1461:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAACVCAYAAACJrhxFAAAbX0lEQVR4Ae2dibMX1ZXH+ResUsENFzCuhQsqjjKKuIIILqAgi6JSrpQ6r9RyolYKg9ERh3IDRKOioiiKUEIkIopsUctkYozLxBiNk5iUjjruGo136tvP83vn933d93b/uvv3ut87v6p+dzv33NO3z6fP7f79Xne//v37O9tsDswH6usD/ezg1ffg2bGzYwcfMIhtJWIrsZr7gEFc8wNo0diisUFsEFskrrkPGMQ1P4AWiS0S9xs8eLCzre/OwS677OIGDBhQqWgMe2CX+WU6vzSI7STmdthhh0pBDHsM4HQAY54MYoPYIK65DxjENT+ARUQsi8Tpo14R8120DoPYILZIXHMfMIhrfgCLOKtbJLZIbDchan4iMIgNYoPYIC707rbdnc52UrHldM0BtOV0NocvYr6qpqM2EO+2225u8+bN7uCDD04d+ffff3937733unXr1rlDDz00db9WD9J+++0X2dhq/57qZ8vpbCcC8UX4I7bVq1e766+/3u29996Rjw0fPjzoayNGjIj6FXHMezXEV1xxhbv11lvdnnvu6XbddVf34IMPuvHjx8dOsK8t7UQbxMX8BLLqy2mB+KCDDop86cADD3R33nmnu+aaaxx84Mknn3S77757rJ+JL4Ug9vkjt/VqiG+88UZ30UUXNSaTd14mFKmvTcv58gZx34QYPjF9+nR3zz33NHzN5ydoM4jpOvaUU05xjz76qHv22WejM+KwYcPcnDlzoqUOljsAFG2y/LnkkkuaJjuuDREbOrEUx5L8iCOOaPRJajOI+ybEiMh33313IxLDzwRiwL1q1Sr31FNPudmzZ0epQCx1Tz/9tFuxYoUbPXp01C/OH0VfXFvtIzEm8PHHH3eHH354tISZOXNmtITGTgPkCy+8sDGhvmir2w455JAIepwccJ1zwQUXuCeeeCJalvvaDOK+BbEEBaRY9e2xxx7Rcloghq8899xz7sQTT3RDhgxxl19+eRPEmzZtctOmTYv6XXXVVe6OO+5oyVdrD/E555zTiLAyqTjz5YH4vPPOc/Pnz29MKHQtX77cjRo1yvnaDOK+BbFcE990003uyiuvjPxF+wCiMK6VJYpiCY3oizIvp08++WS3ZMmShqwOKtJfUt0Gf+wVEOuJkh1F2mokPvvs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"},339:function(e,t){"use strict";t.Z="data:image/png;base64,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"},8526:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);