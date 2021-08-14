(()=>{var e,t={50968:(e,t,r)=>{"use strict";var n=r(67294),a=r(73935),i=r(76439),l=(r(79753),r(82526),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(47042),r(68309),r(91038),r(88674),r(35666),r(23998));r(47941),r(82772),r(19601);const o={buttonRoot:"_1ke7tsa0",buttonBg:"_1ke7tsa1",buttonContent:"_1ke7tsa2",text:"_1ke7tsa3"};var c=r(86010),s=["block"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const p=function(e){var t=e.block,r=void 0!==t&&t,a=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),i=(0,c.Z)([o.buttonRoot,r&&o.button_block]);return n.createElement("button",u({},a,{className:i}),n.createElement("div",{className:o.buttonBg}),n.createElement("div",{className:o.buttonContent},n.createElement("span",{className:o.text},a.children)))};r(21249);const m={root:"hwvzqi0",childContainer:"hwvzqi1",stackChild:"hwvzqi2",spaceVariant:{xxs:"hwvzqi3",xs:"hwvzqi4",sm:"hwvzqi5",md:"hwvzqi6",lg:"hwvzqi7",xl:"hwvzqi8",gap_xs:"hwvzqi9",gap_sm:"hwvzqia",gap_md:"hwvzqib",gap_lg:"hwvzqic",gap_xl:"hwvzqid",gap_xxl:"hwvzqie"},spaceVariant_container:{xxs:"hwvzqif",xs:"hwvzqig",sm:"hwvzqih",md:"hwvzqii",lg:"hwvzqij",xl:"hwvzqik",gap_xs:"hwvzqil",gap_sm:"hwvzqim",gap_md:"hwvzqin",gap_lg:"hwvzqio",gap_xl:"hwvzqip",gap_xxl:"hwvzqiq"},align:{left:"hwvzqir",right:"hwvzqis",center:"hwvzqit"}};var v=["space","align"];function f(e){var t=e.space,r=e.align,a=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,v);return n.createElement("div",{className:m.root},n.createElement("div",{className:(0,c.Z)([m.childContainer,m.spaceVariant_container[t]])},n.Children.map(a.children,(function(e){return n.createElement("div",{className:(0,c.Z)([m.stackChild,m.spaceVariant[t],m.align[r]])},e)}))))}const d={inlineRoot:"_140ars20",inlineContainer:"_140ars21",inlineChild:"_140ars22",spaceVariant:{xxs:"_140ars23",xs:"_140ars24",sm:"_140ars25",md:"_140ars26",lg:"_140ars27",xl:"_140ars28",gap_xs:"_140ars29",gap_sm:"_140ars2a",gap_md:"_140ars2b",gap_lg:"_140ars2c",gap_xl:"_140ars2d",gap_xxl:"_140ars2e"},spaceVariant_container:{xxs:"_140ars2f",xs:"_140ars2g",sm:"_140ars2h",md:"_140ars2i",lg:"_140ars2j",xl:"_140ars2k",gap_xs:"_140ars2l",gap_sm:"_140ars2m",gap_md:"_140ars2n",gap_lg:"_140ars2o",gap_xl:"_140ars2p",gap_xxl:"_140ars2q"}};var h=["space"];function g(e){var t=e.space,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,h);return n.createElement("div",{className:d.inlineRoot},n.createElement("div",{className:(0,c.Z)([d.inlineContainer,d.spaceVariant_container[t]])},n.Children.map(r.children,(function(e){return n.createElement("div",{className:(0,c.Z)([d.inlineChild,d.spaceVariant[t]])},e)}))))}var _=r(32930),b=(r(91380),r(49047),r(29656));const w="s8d73s2",y=function(e){var t=e.onChange,r=e.value;return n.createElement("div",{className:"s8d73s0"},n.createElement(l.Z,{className:"s8d73s1",split:"vertical",minSize:"50%"},n.createElement("div",{className:w},n.createElement(b.Rt,{value:r||"",options:{mode:"markdown",theme:"material"},onChange:function(e,r,n){t(n)},className:"s8d73s3"})),n.createElement("div",{className:w},n.createElement(_.Z,null,r))))};function x(e,t,r,n,a,i,l){try{var o=e[i](l),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function l(e){x(i,n,a,l,o,"next",e)}function o(e){x(i,n,a,l,o,"throw",e)}l(void 0)}))}}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(){var e=(0,n.useRef)(null),t=E((0,n.useState)(""),2),r=t[0],a=t[1],i=E((0,n.useState)(""),2),l=i[0],o=i[1],c=function(){var t=O(regeneratorRuntime.mark((function t(){var r,n,i,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.showOpenFilePicker({types:[{description:"Markdown Files"}],excludeAcceptAllOption:!0,multiple:!1});case 2:return r=t.sent,n=E(r,1),i=n[0],e.current=i,(l=new FileReader).onload=function(){a(l.result),o(l.result)},t.next=10,i.getFile();case 10:c=t.sent,l.readAsText(c);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=O(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.current.createWritable();case 2:return r=t.sent,t.next=5,r.write(l);case 5:return t.next=7,r.close();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var e=O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(r);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.createElement("div",{className:"e5x7fm0"},n.createElement(f,{space:"lg",align:"left"},n.createElement("div",null,n.createElement(p,{block:!0,onClick:c},"Open File")),n.createElement(y,{onChange:o,value:l}),n.createElement(g,{space:"sm"},n.createElement(p,{onClick:s},"Save"),n.createElement(p,{onClick:u},"Revert"))))}function k(){return n.createElement(i.F0,null,n.createElement(z,{path:"".concat("/mdx-editor")}))}const j=function(){return n.createElement("div",{className:"qe4lp80"},n.createElement(k,null))};a.render(n.createElement(j,null),document.getElementById("root"))},33770:()=>{},29438:()=>{},72950:()=>{},54882:()=>{},42019:()=>{}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,r,a,i)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,i]=e[u],o=!0,c=0;c<r.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(o=!1,i<l&&(l=i));if(o){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[l,o,c]=r,s=0;for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var u=c(n);for(t&&t(r);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[l[s]]=0;return n.O(u)},r=self.webpackChunkmdx_editor=self.webpackChunkmdx_editor||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[433],(()=>n(50968)));a=n.O(a)})();
//# sourceMappingURL=main.js.map