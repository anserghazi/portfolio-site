"use strict";(self.webpackChunkanser_ghazi_portfolio=self.webpackChunkanser_ghazi_portfolio||[]).push([[934],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},6296:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return x},P:function(){return v},S:function(){return j},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return l},h:function(){return c}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function l(e,t,a,r,n,i,o,c){var d={};i&&(d.backgroundColor=i,"fixed"===a?(d.width=r,d.height=n,d.backgroundColor=i,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),c&&(d.objectPosition=c);var l=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return l}var u,p=["children"],b=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(b,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],h=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,c=void 0===i?"":i,d=e.shouldLoad,l=o(e,g);return r.createElement("img",s({},l,{decoding:"async",loading:n,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?a:void 0,"data-srcset":d?void 0:a,alt:c}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,c=void 0===i||i,d=o(e,m),l=d.sizes||(null==t?void 0:t.sizes),u=r.createElement(h,s({},d,t,{sizes:l,shouldLoad:c}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:l})})),u):u};h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var y=["fallback"],v=function(e){var t=e.fallback,a=o(e,y);return t?r.createElement(w,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(u=w.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(w,s({},e)),r.createElement("noscript",null,r.createElement(w,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var C,E,S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:S},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],z=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,d=e.style,l=e.backgroundColor,u=e.className,p=e.class,b=e.onStartLoad,f=e.onLoad,g=e.onError,m=o(e,k),h=i.width,w=i.height,y=i.layout,v=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,w,y),x=v.style,S=v.className,L=o(v,T),O=(0,r.useRef)(),_=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var I=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,h,w);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(989)]).then(a.bind(a,5989)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=O.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==b||b({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==b||b({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void z.add(_)):E&&z.has(_)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;O.current&&(O.current.innerHTML=r(s({isLoading:!0,isLoaded:z.has(_),image:i},m)),z.has(_)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,_,z,d,b,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){z.has(_)&&E&&(O.current.innerHTML=E(s({isLoading:z.has(_),isLoaded:z.has(_),image:i},m)),null==b||b({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},L,{style:s({},x,d,{backgroundColor:l}),className:S+(u?" "+u:""),ref:O,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));_.propTypes=L,_.displayName="GatsbyImage";var I,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:S,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(I=_,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,N);return n&&console.warn(n),a?r.createElement(I,s({image:a},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=R},7932:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/41135dd66f94bc183e33fea896b0ca29/4f3db/digital-cupboard.png","srcSet":"/static/41135dd66f94bc183e33fea896b0ca29/a6a8d/digital-cupboard.png 200w,\\n/static/41135dd66f94bc183e33fea896b0ca29/b6349/digital-cupboard.png 400w,\\n/static/41135dd66f94bc183e33fea896b0ca29/4f3db/digital-cupboard.png 800w,\\n/static/41135dd66f94bc183e33fea896b0ca29/8c4e0/digital-cupboard.png 1600w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/41135dd66f94bc183e33fea896b0ca29/6db13/digital-cupboard.webp 200w,\\n/static/41135dd66f94bc183e33fea896b0ca29/a7392/digital-cupboard.webp 400w,\\n/static/41135dd66f94bc183e33fea896b0ca29/f4cfb/digital-cupboard.webp 800w,\\n/static/41135dd66f94bc183e33fea896b0ca29/bdd86/digital-cupboard.webp 1600w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":428}')},3006:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/70dfdea68e940c3ab0c5269292cd72cd/4f3db/online-notepad.png","srcSet":"/static/70dfdea68e940c3ab0c5269292cd72cd/a6a8d/online-notepad.png 200w,\\n/static/70dfdea68e940c3ab0c5269292cd72cd/b6349/online-notepad.png 400w,\\n/static/70dfdea68e940c3ab0c5269292cd72cd/4f3db/online-notepad.png 800w,\\n/static/70dfdea68e940c3ab0c5269292cd72cd/8c4e0/online-notepad.png 1600w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/70dfdea68e940c3ab0c5269292cd72cd/6db13/online-notepad.webp 200w,\\n/static/70dfdea68e940c3ab0c5269292cd72cd/a7392/online-notepad.webp 400w,\\n/static/70dfdea68e940c3ab0c5269292cd72cd/f4cfb/online-notepad.webp 800w,\\n/static/70dfdea68e940c3ab0c5269292cd72cd/bdd86/online-notepad.webp 1600w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":428}')},6666:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/static/1806fb5fb5b7d24ebe6af8be5127a04e/3c4ce/portfolio-site.png","srcSet":"/static/1806fb5fb5b7d24ebe6af8be5127a04e/5e981/portfolio-site.png 200w,\\n/static/1806fb5fb5b7d24ebe6af8be5127a04e/16db2/portfolio-site.png 400w,\\n/static/1806fb5fb5b7d24ebe6af8be5127a04e/3c4ce/portfolio-site.png 800w,\\n/static/1806fb5fb5b7d24ebe6af8be5127a04e/2b0db/portfolio-site.png 1600w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/1806fb5fb5b7d24ebe6af8be5127a04e/26254/portfolio-site.webp 200w,\\n/static/1806fb5fb5b7d24ebe6af8be5127a04e/6b932/portfolio-site.webp 400w,\\n/static/1806fb5fb5b7d24ebe6af8be5127a04e/d6712/portfolio-site.webp 800w,\\n/static/1806fb5fb5b7d24ebe6af8be5127a04e/21e72/portfolio-site.webp 1600w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":426}')},9658:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ae5877277984184bc1c0116185eb52ab/4f3db/runroute.png","srcSet":"/static/ae5877277984184bc1c0116185eb52ab/a6a8d/runroute.png 200w,\\n/static/ae5877277984184bc1c0116185eb52ab/b6349/runroute.png 400w,\\n/static/ae5877277984184bc1c0116185eb52ab/4f3db/runroute.png 800w,\\n/static/ae5877277984184bc1c0116185eb52ab/8c4e0/runroute.png 1600w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/ae5877277984184bc1c0116185eb52ab/6db13/runroute.webp 200w,\\n/static/ae5877277984184bc1c0116185eb52ab/a7392/runroute.webp 400w,\\n/static/ae5877277984184bc1c0116185eb52ab/f4cfb/runroute.webp 800w,\\n/static/ae5877277984184bc1c0116185eb52ab/bdd86/runroute.webp 1600w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":428}')}}]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-67fc465e446e775292a0.js.map