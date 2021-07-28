(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[126],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=l,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8345:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),o=["components"],i={id:"drawing",title:"Drawing",sidebar_label:"Drawing"},s={unversionedId:"user_manual/drawing",id:"user_manual/drawing",isDocsHomePage:!1,title:"Drawing",description:"Drawing is the main feature of Pixelorama and it's what you will be doing most of the time. There are multiple tools that can be used for drawing in the canvas, with the main one being the Pencil tool.",source:"@site/docs/user_manual/drawing.md",sourceDirName:"user_manual",slug:"/user_manual/drawing",permalink:"/Pixelorama-Docs/user_manual/drawing",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/drawing.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1627514520,formattedLastUpdatedAt:"7/28/2021",sidebar_label:"Drawing",frontMatter:{id:"drawing",title:"Drawing",sidebar_label:"Drawing"},sidebar:"docs",previous:{title:"The Timeline",permalink:"/Pixelorama-Docs/user_manual/user_interface/timeline"},next:{title:"Selecting",permalink:"/Pixelorama-Docs/user_manual/selecting"}},p=[{value:"Drawing Tools",id:"drawing-tools",children:[]},{value:"Pencil and Eraser",id:"pencil-and-eraser",children:[{value:"Pencil Tool Options",id:"pencil-tool-options",children:[]},{value:"Pixel Perfect",id:"pixel-perfect",children:[]}]},{value:"Bucket",id:"bucket",children:[]},{value:"Shape tools",id:"shape-tools",children:[]},{value:"Color Picker",id:"color-picker",children:[]},{value:"Mirroring",id:"mirroring",children:[]}],c={toc:p};function u(e){var t=e.components,i=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Drawing is the main feature of Pixelorama and it's what you will be doing most of the time. There are multiple tools that can be used for drawing in the ",(0,r.kt)("a",{parentName:"p",href:"user_interface/canvas"},"canvas"),", with the main one being the ",(0,r.kt)("strong",{parentName:"p"},"Pencil")," tool."),(0,r.kt)("h2",{id:"drawing-tools"},"Drawing Tools"),(0,r.kt)("p",null,"You can use one of the available drawing tools in Pixelorama to bring your heart's content to life."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pencil"),(0,r.kt)("td",{parentName:"tr",align:null},"Draw individual pixels on mouse position."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"P"),", R: ",(0,r.kt)("kbd",null," Alt + P"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill a same-color area or all of the pixels of the same color with a new color."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"B"),", R: ",(0,r.kt)("kbd",null," Alt + B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Line Tool"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a straight line."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"L"),", R: ",(0,r.kt)("kbd",null," Alt + L"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rectangle Tool"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a rectangle."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"S"),", R: ",(0,r.kt)("kbd",null," Alt + S"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ellipse Tool"),(0,r.kt)("td",{parentName:"tr",align:null},"Create an ellipse."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"C"),", R: ",(0,r.kt)("kbd",null," Alt + C"))))),(0,r.kt)("p",null,"Tools that are not used directly for drawing but are very helpful for your drawing process:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Color Picker"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the color of the pixel on mouse position."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"O"),", R: ",(0,r.kt)("kbd",null," Alt + O"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eraser"),(0,r.kt)("td",{parentName:"tr",align:null},"Erase individual pixels on mouse position."),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"E"),", R: ",(0,r.kt)("kbd",null," Alt + E"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shading"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"shading"},"See this page for a detailed explanation.")),(0,r.kt)("td",{parentName:"tr",align:null},"L: ",(0,r.kt)("kbd",null,"U"),", R: ",(0,r.kt)("kbd",null," Alt + U"))))),(0,r.kt)("h2",{id:"pencil-and-eraser"},"Pencil and Eraser"),(0,r.kt)("p",null,"The main tools of Pixelorama. Used to draw or erase pixels at an individual pixel level. You can select from multiple ",(0,r.kt)("a",{parentName:"p",href:"../concepts/brush"},"brushes")," and change their size. You can also hold ",(0,r.kt)("kbd",null,"Shift")," before drawing to create lines between two points, and by also holding ",(0,r.kt)("kbd",null,"Control"),', you constrain them either by 15 degrees, or always making them be pixel-perfect angles by having the "Pixel Perfect" option enabled.'),(0,r.kt)("p",null,"The eraser erases pixels by simply overwriting their color value to be (0, 0, 0 ,0), which is equivalent to black that is completely transparent."),(0,r.kt)("h3",{id:"pencil-tool-options"},"Pencil Tool Options"),(0,r.kt)("p",null,'The Pencil tool also has an "Overwrite Color" tool option. If this is enabled, the color of the drawn pixels will always become the same color as the selected one. Otherwise, if the colors are transparent, their alpha values will blend. For example, if the color of the drawn pixels have are 30% transparent and your currently selected color is 25% transparent, the resulting transparency will be 55%. While if the overwrite color option is on, the resulting transparency will always be 25%.'),(0,r.kt)("p",null,'The "Fill inside" option fills the entire area with the selected color between the first mouse-clicked position and the last, after the mouse button gets released.'),(0,r.kt)("h3",{id:"pixel-perfect"},"Pixel Perfect"),(0,r.kt)("p",null,"The Pencil and Eraser (and ",(0,r.kt)("a",{parentName:"p",href:"shading"},"Shading"),'!) tools have an option called "Pixel Perfect". This essentially creates "pixel perfect" lines for you by automatically removing the middle pixel of L-shapes. In other words, it removes extra adjacent pixels often referred to as "doubles" in order to create lines that are one-pixel thick.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Not pixel-perfect line vs pixel perfect line",src:a(2310).Z})),(0,r.kt)("h5",{id:"not-pixel-perfect-line-on-the-left-compared-to-a-pixel-perfect-line-on-the-right"},"Not pixel-perfect line on the left, compared to a pixel perfect line on the right."),(0,r.kt)("h2",{id:"bucket"},"Bucket"),(0,r.kt)("p",null,'The bucket tool is a quick way to paint large sections of the image. You can select one of two fill areas. "Same color area" will fill the area around the mouse click position that is the same color as the pixel on mouse position with the selected color, using a ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Flood_fill"},"flood fill algorithm"),'. "Same color pixels" will change all of the pixels of the selected ',(0,r.kt)("a",{parentName:"p",href:"../concepts/cel"},"cels")," of the same color as the one on mouse position with the selected color."),(0,r.kt)("p",null,"You can also choose to fill with patterns instead of a color."),(0,r.kt)("h2",{id:"shape-tools"},"Shape tools"),(0,r.kt)("p",null,"The shape tools include the line tool, rectangle tool and ellipse tool. All of them are very straightforward to use; you click on where you want to place your shape, hold your mouse button and finally release it on where you want your shape to end. You can also change the shape's thickness, and for the rectangle and ellipse tools, you can choose whether to create hollow or filled with color shapes."),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("a",{parentName:"p",href:"selection"},"selection tools"),", you can use keyboard shortcuts to modify how the shapes are being created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mouse click + ",(0,r.kt)("kbd",null,"Shift")," = Create a 1:1 (square/circle) shape. For the line tool, ",(0,r.kt)("kbd",null," Shift")," will restrain the angle to be pixel perfect, similar to how ",(0,r.kt)("kbd",null,"Control")," and ",(0,r.kt)("kbd",null,"Shift")," do for the Pencil tool."),(0,r.kt)("li",{parentName:"ul"},"Mouse click + ",(0,r.kt)("kbd",null,"Control")," = Create a shape that expands from center."),(0,r.kt)("li",{parentName:"ul"},"Mouse click + ",(0,r.kt)("kbd",null,"Alt")," = Displaces the origin of the shape.")),(0,r.kt)("h2",{id:"color-picker"},"Color Picker"),(0,r.kt)("p",null,"This one is fairly simple to comprehend. While not a drawing tool itself, the color picker tool is used for getting a sample of an existing color on the canvas with the purpose of replicating it, depending on which pixel the selection is done at."),(0,r.kt)("p",null,'Now, there\'s only one category available as an option for the time being, called "Pick for:". This means that the sample taken will replace one of the colors, either the ',(0,r.kt)("strong",{parentName:"p"},"Left Color")," or ",(0,r.kt)("strong",{parentName:"p"},"Right Color"),". Choosing ",(0,r.kt)("strong",{parentName:"p"},"Left Color")," replaces the left selected color, while right replaces the right selected color. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tip: A quick and helpful way to use the color picker is having it mapped to your")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"right mouse button"))," ",(0,r.kt)("em",{parentName:"p"},"and having the")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Left Color"))," ",(0,r.kt)("em",{parentName:"p"},"option selected while having a drawing tool mapped to your")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"left mouse button."))," ",(0,r.kt)("em",{parentName:"p"},"The color picker can compliment the drawing tool by selecting the color you next desire to paint with, making it an immediate way of switching between hues.")),(0,r.kt)("h2",{id:"mirroring"},"Mirroring"),(0,r.kt)("p",null,"All drawing tools can work with symmetry. Symmetry in Pixelorama is either horizontal, vertical or both at the same time. It can be enabled from the tool options. If, for example, horizontal symmetry is enabled, whatever you draw will get mirrored, meaning it will also get drawn on the other horizontal side, having the same distance from the symmetry line as your original drawing. So if you draw a pixel two pixels from the left of the vertical symmetry line and horizontal symmetry is enabled, then the pixel two pixels from the right of the symmetry line and on the same vertical position will also get drawn. The same holds true for when vertical symmetry is enabled."),(0,r.kt)("p",null,"If you have both horizontal and vertical mirroring enabled, then the drawn pixels will get repeated four times."))}u.isMDXComponent=!0},2310:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABaCAYAAACWuwCqAAAAAXNSR0IArs4c6QAAAfdJREFUeJzt3UFuwjAUQEGouDfKydttF124TwGbeOYA1KG2nrz45H6b5Pl8fs/62zMcx3GfvYYdjO6rq/w/nCNeYXRffb16IQBck4AAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAMnj7A88ezJ29cnT0efdbUL6bLtNXNsvf/O9rMUNBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAZHgSfbcJ81Gjz7HbJPWo3faVSWpmOnv/uYEAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJA8dpsE5jOtvq9MmDPTrP3nBgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQDL8TnQTtAD85gYCQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAyPIkO/zH6jmbgc7mBAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQmERnquM47rPXAKsa/UWHWefIDQSAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgMQU8Juc/Y7wWZOnV3kOrm31Ce7V1zfKDQSAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgGTpKccdnT3pPcvqE7Rwu807b1c5H24gACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkPwvQZzqzq/nnAAAAAElFTkSuQmCC"}}]);