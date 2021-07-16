(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[928],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},I=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),I=l(r),f=i,p=I["".concat(s,".").concat(f)]||I[f]||h[f]||a;return r?n.createElement(p,o(o({ref:t},u),{},{components:r})):n.createElement(p,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=I;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}I.displayName="MDXCreateElement"},2117:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],c={id:"project",title:"Project",sidebar_label:"Project"},s={unversionedId:"project",id:"project",isDocsHomePage:!1,title:"Project",description:'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a .pxo file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.',source:"@site/docs/project.md",sourceDirName:".",slug:"/project",permalink:"/Pixelorama-Docs/project",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/project.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1626463299,formattedLastUpdatedAt:"7/16/2021",sidebar_label:"Project",frontMatter:{id:"project",title:"Project",sidebar_label:"Project"},sidebar:"docs",previous:{title:"Transforming",permalink:"/Pixelorama-Docs/transforming"},next:{title:"Cel",permalink:"/Pixelorama-Docs/cel"}},l=[],u={toc:l};function h(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a ',(0,a.kt)("inlineCode",{parentName:"p"},".pxo")," file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab."),(0,a.kt)("p",null,"A Project contains the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A set of frames for animations, along with their duration, animation tags and FPS, as well as multiple layers. Frames and layers intersect and create ",(0,a.kt)("a",{parentName:"li",href:"cel"},"cels"),", which are the editable images themselves of the project."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"transforming/#scale"},"size")," - width and height - in pixels."),(0,a.kt)("li",{parentName:"ul"},"A name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"brush"},"Brushes")," that are local to that specific project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"canvas/#rulers-and-guides"},"Guides")," - lines that help you draw.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save Project",src:r(2556).Z})),(0,a.kt)("p",null,"To save a project, you can go to the File menu and select Save, or press ",(0,a.kt)("kbd",null,"Control + S"),". If you are using a Desktop version, you will be able to choose where you want the file to be saved. If you use the Web version, you will be asked for a file name and the .pxo file will be downloaded by your browser."))}h.isMDXComponent=!0},2556:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADVCAYAAADwzKSiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB3uSURBVHhe7Z1nsxTF24f5BpZlIIg5oIgRA2JWEMGEggkwEQ0kBZEoSRRRREUUEBQ8ioKoBEEBRUUxa5kVLX1plR/Asnw1z3P133urz9Azu9tnT5hzflRdxW53T2/PzP3rMKfve9odcMABiRCieiQeISKReISIROIRIhKJR4hIJB4hIpF4hIgkKJ6OHTsmoX/XX3+9yz/zzDPd/126dHHp/rG1pkOHDsnHH3+8F9dee+1eZU877bRk69atpe8nnXRSvfxacsEFFySrV69O3n///WTDhg3J8OHDg+WMI4880rU7lNccbNu2LTnrrLOCeUXh4YcfTu677756aQceeGCyZcuW5LLLLnPfG9MGcsUT+uFjjz02+euvv5KDDjqoScXD74byfXzxHHXUUe4idurUyX2vq6tL+vXrV698LIcffnjyzjvvJFdffbW7DqeffnryxhtvJAMGDAiWh4aKp5bth9YgHgRCx+WnXXjhhcn27dudDadtoNZULR6fliyeNLU0vp49e7ob5KddccUVEk8Tg51yH/zzmDZtWjJr1qx65RqLqsXjCyYtnhtuuCHZs2dP8vfffycffPBBcsopp5TyYiknnuuuuy7ZtGmTM4YFCxaUxOMb686dO91nuP322+sdHwOjzWuvvZbMnj07OeGEE/bKv/TSS5N169a5333mmWeSrl277iWeUBnSGc2o+7333ksWL16cHHPMMTVvP5h4zjjjjOTNN99M5s+f70bTtWvXurYtW7bM3cOXXnqpdB+ZEo0ePdr19rSPdh999NGlOpnWb968OXn77beTmTNnut+wvKzzbSgIZcKECe4z7eNcGH34Xsk1p512TbGxjz76yF1zvt95553J9OnTS8enqXjNYz1tlnhOPvnk5Pfff0/OOeccZ1w0KmsUqIbQmocbSh6Gy4Xo1atXcuihhyZjxowJigdq3XNTPxeW68Lax+o+7rjjkvXr1yfdu3d304URI0Ykjz32WL32ZJXhGr777rvu5h988MHJlClTkkcffdQd01gjD+L58MMPnWF17tw5mTp1qlvHnXfeee77vHnzXCfBMZzDLbfc4u479xjDnTx5ssvjXnBc79693b0YN25cSTxZ52ttaQhcKzobPtNmxIuI+F7JNbeOgjJDhw510zzOke+kcz58DlGzkeeee+5xn/1/f/75Z71jY8gbeejp6J3tuz9ta2zxGNwIpmtvvfWWm7oNHjzY/a4PN9RvT1aZm2++uZ5RHXLIIclFF13kPjemePxODmPit+w7s4knnnii9B0De/31153gaDejPenci6effrpUjnth4sk6XyvbEBAKdXEeCPnee+8t5VVyzbl/dIB0VitWrHDXGNHQOXBPsT+rL03NxHP33Xe7nscvWwvKiefJJ58sfW8q8WBggwYNqpdG50EvTbpvRIbfnqwyN954Yz3xcO42hWgq8fTp02cv8dg1Pvvss13PzDG0bdiwYSXxMH1esmRJ6ThfPFnnWyt44jZ+/Phk48aNpSfBUMk1h4ULFyY33XRTsmrVKvf95Zdfdk9z7dyyqJl4uKD//PNPMmrUKDds9+3b1/VS/rEx5ImnW7dupWmOTRWyxPP8888nQ4YMye1JKuX8889PduzY4QyNHoopy4svvugeV5944omuE2E0ojc799xzk6uuuqpee7LKUA/18hicKRMdkhluLdsPMeK55JJL3Hrn+OOPd22lpzYDI82fQvvTtqzztd9oKD169HDrNdYzfnol15w8hM/og+3ynek/oxJlra4QNX1ggHp/+eWX5N9//01++uknt/i1vFhMPGn4LfI5cU6URSpz8yzxMI9lkTty5MhSWkNgisbai0U1vz9x4sSkffv2Lo9HqK+88orLoxdj6pVuT6gM6dzQV1991d1ojPaII45w6bVuf4x4mCKxlqXDYv3AQ4aVK1eWytq9oG5EZeKBrPOtFVwzHmb4aZVec64xDwroEPjOAxKmpYcddljp2BBB8QgRA+sH+8xsgGmUn9/akHhETWCGwIjFSEZPzoMcRqZQ2daCxCNqBlNOnsQxrVu0aJH7C3+oXGuh3f77758IIaqn3X777ZcIIaqn3b777psIIaqn3T777JMIIaqnHX9JFUJUTzv+2iqEqB6JR4hIJB4hIpF4hIhE4hEiEolHiEgkHiEikXiEiETiESISiUeISHLFgxsqbqy4/vrpuOISoshPE20b4hbg1kyUGlzkcXkmpluobFOAQ96tt94azPMhQhHlevbsWS+dWAycj5+WpiLx4NxEAAVLl3hEGoKD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"}}]);