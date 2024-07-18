import{a as oe,b as ae}from"./chunk-JT5E325H.js";import{B as ne,Oa as M,Pa as ie,Qa as N,S as y,Sa as T,Ta as b,Ua as h,Wa as L,a as $,b as z,da as se,e as X,f as Z,h as R,ia as B,j as C,k as P,n as k,o as S,p as Q,q as ee,r as te,u as re,y as u}from"./chunk-2HHBJRZU.js";import{a as H,b as O,c as U}from"./chunk-DB7F5TEQ.js";var le=y.create({name:"customEnter",addKeyboardShortcuts(){return{Enter:({editor:t})=>{var r,e,s,n,i;return t.isActive("summary")?(t.commands.selectNodeForward(),t==null||t.commands.focus(((r=t==null?void 0:t.state.selection.anchor)!==null&&r!==void 0?r:0)+1),globalThis.document&&((i=(n=(s=(e=t.view.nodeDOM(t.state.selection.anchor))===null||e===void 0?void 0:e.parentElement)===null||s===void 0?void 0:s.closest("details"))===null||n===void 0?void 0:n.querySelector('[data-type="details-content"]'))===null||i===void 0||i.prepend(document.createElement("p"))),!1):this.editor.chain().createParagraphNear().run()}}}});var Ve=/^\s*>\s$/,de=h.create({name:"blockquote",addOptions(){return{HTMLAttributes:{}}},content:"block+",group:"block",defining:!0,parseHTML(){return[{tag:"blockquote"}]},renderHTML({HTMLAttributes:t}){return["blockquote",u(this.options.HTMLAttributes,t),0]},addCommands(){return{setBlockquote:()=>({commands:t})=>t.wrapIn(this.name),toggleBlockquote:()=>({commands:t})=>t.toggleWrap(this.name),unsetBlockquote:()=>({commands:t})=>t.lift(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-b":()=>this.editor.commands.toggleBlockquote()}},addInputRules(){return[T({find:Ve,type:this.type})]}});var je=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,Ge=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,We=/(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,Fe=/(?:^|\s)((?:__)((?:[^__]+))(?:__))/g,ue=b.create({name:"bold",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"strong"},{tag:"b",getAttrs:t=>t.style.fontWeight!=="normal"&&null},{style:"font-weight",getAttrs:t=>/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null}]},renderHTML({HTMLAttributes:t}){return["strong",u(this.options.HTMLAttributes,t),0]},addCommands(){return{setBold:()=>({commands:t})=>t.setMark(this.name),toggleBold:()=>({commands:t})=>t.toggleMark(this.name),unsetBold:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-b":()=>this.editor.commands.toggleBold(),"Mod-B":()=>this.editor.commands.toggleBold()}},addInputRules(){return[M({find:je,type:this.type}),M({find:We,type:this.type})]},addPasteRules(){return[L({find:Ge,type:this.type}),L({find:Fe,type:this.type})]}});var qe=h.create({name:"listItem",addOptions(){return{HTMLAttributes:{},bulletListTypeName:"bulletList",orderedListTypeName:"orderedList"}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:t}){return["li",u(this.options.HTMLAttributes,t),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),pe=b.create({name:"textStyle",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"span",getAttrs:t=>t.hasAttribute("style")?{}:!1}]},renderHTML({HTMLAttributes:t}){return["span",u(this.options.HTMLAttributes,t),0]},addCommands(){return{removeEmptyTextStyle:()=>({state:t,commands:r})=>{let e=B(t,this.type);return Object.entries(e).some(([,n])=>!!n)?!0:r.unsetMark(this.name)}}}}),ce=/^\s*([-+*])\s$/,he=h.create({name:"bulletList",addOptions(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:"block list",content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:"ul"}]},renderHTML({HTMLAttributes:t}){return["ul",u(this.options.HTMLAttributes,t),0]},addCommands(){return{toggleBulletList:()=>({commands:t,chain:r})=>this.options.keepAttributes?r().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(qe.name,this.editor.getAttributes(pe.name)).run():t.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-8":()=>this.editor.commands.toggleBulletList()}},addInputRules(){let t=T({find:ce,type:this.type});return(this.options.keepMarks||this.options.keepAttributes)&&(t=T({find:ce,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:()=>this.editor.getAttributes(pe.name),editor:this.editor})),[t]}});var Je=/(?:^|\s)((?:`)((?:[^`]+))(?:`))$/,Ye=/(?:^|\s)((?:`)((?:[^`]+))(?:`))/g,fe=b.create({name:"code",addOptions(){return{HTMLAttributes:{}}},excludes:"_",code:!0,exitable:!0,parseHTML(){return[{tag:"code"}]},renderHTML({HTMLAttributes:t}){return["code",u(this.options.HTMLAttributes,t),0]},addCommands(){return{setCode:()=>({commands:t})=>t.setMark(this.name),toggleCode:()=>({commands:t})=>t.toggleMark(this.name),unsetCode:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-e":()=>this.editor.commands.toggleCode()}},addInputRules(){return[M({find:Je,type:this.type})]},addPasteRules(){return[L({find:Ye,type:this.type})]}});var Ue=/^```([a-z]+)?[\s\n]$/,Xe=/^~~~([a-z]+)?[\s\n]$/,me=h.create({name:"codeBlock",addOptions(){return{languageClassPrefix:"language-",exitOnTripleEnter:!0,exitOnArrowDown:!0,HTMLAttributes:{}}},content:"text*",marks:"",group:"block",code:!0,defining:!0,addAttributes(){return{language:{default:null,parseHTML:t=>{var r;let{languageClassPrefix:e}=this.options,i=[...((r=t.firstElementChild)===null||r===void 0?void 0:r.classList)||[]].filter(o=>o.startsWith(e)).map(o=>o.replace(e,""))[0];return i||null},rendered:!1}}},parseHTML(){return[{tag:"pre",preserveWhitespace:"full"}]},renderHTML({node:t,HTMLAttributes:r}){return["pre",u(this.options.HTMLAttributes,r),["code",{class:t.attrs.language?this.options.languageClassPrefix+t.attrs.language:null},0]]},addCommands(){return{setCodeBlock:t=>({commands:r})=>r.setNode(this.name,t),toggleCodeBlock:t=>({commands:r})=>r.toggleNode(this.name,"paragraph",t)}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{let{empty:t,$anchor:r}=this.editor.state.selection,e=r.pos===1;return!t||r.parent.type.name!==this.name?!1:e||!r.parent.textContent.length?this.editor.commands.clearNodes():!1},Enter:({editor:t})=>{if(!this.options.exitOnTripleEnter)return!1;let{state:r}=t,{selection:e}=r,{$from:s,empty:n}=e;if(!n||s.parent.type!==this.type)return!1;let i=s.parentOffset===s.parent.nodeSize-2,o=s.parent.textContent.endsWith(`

`);return!i||!o?!1:t.chain().command(({tr:a})=>(a.delete(s.pos-2,s.pos),!0)).exitCode().run()},ArrowDown:({editor:t})=>{if(!this.options.exitOnArrowDown)return!1;let{state:r}=t,{selection:e,doc:s}=r,{$from:n,empty:i}=e;if(!i||n.parent.type!==this.type||!(n.parentOffset===n.parent.nodeSize-2))return!1;let a=n.after();return a===void 0||s.nodeAt(a)?!1:t.commands.exitCode()}}},addInputRules(){return[N({find:Ue,type:this.type,getAttributes:t=>({language:t[1]})}),N({find:Xe,type:this.type,getAttributes:t=>({language:t[1]})})]},addProseMirrorPlugins(){return[new k({key:new S("codeBlockVSCodeHandler"),props:{handlePaste:(t,r)=>{if(!r.clipboardData||this.editor.isActive(this.type.name))return!1;let e=r.clipboardData.getData("text/plain"),s=r.clipboardData.getData("vscode-editor-data"),n=s?JSON.parse(s):void 0,i=n==null?void 0:n.mode;if(!e||!i)return!1;let{tr:o}=t.state;return o.replaceSelectionWith(this.type.create({language:i})),o.setSelection(C.near(o.doc.resolve(Math.max(0,o.selection.from-2)))),o.insertText(e.replace(/\r\n?/g,`
`)),o.setMeta("paste",!0),t.dispatch(o),!0}}})]}});var ge=h.create({name:"doc",topNode:!0,content:"block+"});function ve(t={}){return new k({view(r){return new V(r,t)}})}var V=class{constructor(r,e){var s;this.editorView=r,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=(s=e.width)!==null&&s!==void 0?s:1,this.color=e.color===!1?void 0:e.color||"black",this.class=e.class,this.handlers=["dragover","dragend","drop","dragleave"].map(n=>{let i=o=>{this[n](o)};return r.dom.addEventListener(n,i),{name:n,handler:i}})}destroy(){this.handlers.forEach(({name:r,handler:e})=>this.editorView.dom.removeEventListener(r,e))}update(r,e){this.cursorPos!=null&&e.doc!=r.state.doc&&(this.cursorPos>r.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(r){r!=this.cursorPos&&(this.cursorPos=r,r==null?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let r=this.editorView.state.doc.resolve(this.cursorPos),e=!r.parent.inlineContent,s;if(e){let a=r.nodeBefore,l=r.nodeAfter;if(a||l){let d=this.editorView.nodeDOM(this.cursorPos-(a?a.nodeSize:0));if(d){let p=d.getBoundingClientRect(),c=a?p.bottom:p.top;a&&l&&(c=(c+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),s={left:p.left,right:p.right,top:c-this.width/2,bottom:c+this.width/2}}}}if(!s){let a=this.editorView.coordsAtPos(this.cursorPos);s={left:a.left-this.width/2,right:a.left+this.width/2,top:a.top,bottom:a.bottom}}let n=this.editorView.dom.offsetParent;this.element||(this.element=n.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none;",this.color&&(this.element.style.backgroundColor=this.color)),this.element.classList.toggle("prosemirror-dropcursor-block",e),this.element.classList.toggle("prosemirror-dropcursor-inline",!e);let i,o;if(!n||n==document.body&&getComputedStyle(n).position=="static")i=-pageXOffset,o=-pageYOffset;else{let a=n.getBoundingClientRect();i=a.left-n.scrollLeft,o=a.top-n.scrollTop}this.element.style.left=s.left-i+"px",this.element.style.top=s.top-o+"px",this.element.style.width=s.right-s.left+"px",this.element.style.height=s.bottom-s.top+"px"}scheduleRemoval(r){clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setCursor(null),r)}dragover(r){if(!this.editorView.editable)return;let e=this.editorView.posAtCoords({left:r.clientX,top:r.clientY}),s=e&&e.inside>=0&&this.editorView.state.doc.nodeAt(e.inside),n=s&&s.type.spec.disableDropCursor,i=typeof n=="function"?n(this.editorView,e,r):n;if(e&&!i){let o=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice){let a=Z(this.editorView.state.doc,o,this.editorView.dragging.slice);a!=null&&(o=a)}this.setCursor(o),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(r){(r.target==this.editorView.dom||!this.editorView.dom.contains(r.relatedTarget))&&this.setCursor(null)}};var ye=y.create({name:"dropCursor",addOptions(){return{color:"currentColor",width:1,class:void 0}},addProseMirrorPlugins(){return[ve(this.options)]}});var v=class t extends R{constructor(r){super(r,r)}map(r,e){let s=r.resolve(e.map(this.head));return t.valid(s)?new t(s):R.near(s)}content(){return z.empty}eq(r){return r instanceof t&&r.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(r,e){if(typeof e.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new t(r.resolve(e.pos))}getBookmark(){return new j(this.anchor)}static valid(r){let e=r.parent;if(e.isTextblock||!Ze(r)||!Qe(r))return!1;let s=e.type.spec.allowGapCursor;if(s!=null)return s;let n=e.contentMatchAt(r.index()).defaultType;return n&&n.isTextblock}static findGapCursorFrom(r,e,s=!1){e:for(;;){if(!s&&t.valid(r))return r;let n=r.pos,i=null;for(let o=r.depth;;o--){let a=r.node(o);if(e>0?r.indexAfter(o)<a.childCount:r.index(o)>0){i=a.child(e>0?r.indexAfter(o):r.index(o)-1);break}else if(o==0)return null;n+=e;let l=r.doc.resolve(n);if(t.valid(l))return l}for(;;){let o=e>0?i.firstChild:i.lastChild;if(!o){if(i.isAtom&&!i.isText&&!P.isSelectable(i)){r=r.doc.resolve(n+i.nodeSize*e),s=!1;continue e}break}i=o,n+=e;let a=r.doc.resolve(n);if(t.valid(a))return a}return null}}};v.prototype.visible=!1;v.findFrom=v.findGapCursorFrom;R.jsonID("gapcursor",v);var j=class t{constructor(r){this.pos=r}map(r){return new t(r.map(this.pos))}resolve(r){let e=r.resolve(this.pos);return v.valid(e)?new v(e):R.near(e)}};function Ze(t){for(let r=t.depth;r>=0;r--){let e=t.index(r),s=t.node(r);if(e==0){if(s.type.spec.isolating)return!0;continue}for(let n=s.child(e-1);;n=n.lastChild){if(n.childCount==0&&!n.inlineContent||n.isAtom||n.type.spec.isolating)return!0;if(n.inlineContent)return!1}}return!0}function Qe(t){for(let r=t.depth;r>=0;r--){let e=t.indexAfter(r),s=t.node(r);if(e==s.childCount){if(s.type.spec.isolating)return!0;continue}for(let n=s.child(e);;n=n.firstChild){if(n.childCount==0&&!n.inlineContent||n.isAtom||n.type.spec.isolating)return!0;if(n.inlineContent)return!1}}return!0}function be(){return new k({props:{decorations:nt,createSelectionBetween(t,r,e){return r.pos==e.pos&&v.valid(e)?new v(e):null},handleClick:tt,handleKeyDown:et,handleDOMEvents:{beforeinput:rt}}})}var et=te({ArrowLeft:D("horiz",-1),ArrowRight:D("horiz",1),ArrowUp:D("vert",-1),ArrowDown:D("vert",1)});function D(t,r){let e=t=="vert"?r>0?"down":"up":r>0?"right":"left";return function(s,n,i){let o=s.selection,a=r>0?o.$to:o.$from,l=o.empty;if(o instanceof C){if(!i.endOfTextblock(e)||a.depth==0)return!1;l=!1,a=s.doc.resolve(r>0?a.after():a.before())}let d=v.findGapCursorFrom(a,r,l);return d?(n&&n(s.tr.setSelection(new v(d))),!0):!1}}function tt(t,r,e){if(!t||!t.editable)return!1;let s=t.state.doc.resolve(r);if(!v.valid(s))return!1;let n=t.posAtCoords({left:e.clientX,top:e.clientY});return n&&n.inside>-1&&P.isSelectable(t.state.doc.nodeAt(n.inside))?!1:(t.dispatch(t.state.tr.setSelection(new v(s))),!0)}function rt(t,r){if(r.inputType!="insertCompositionText"||!(t.state.selection instanceof v))return!1;let{$from:e}=t.state.selection,s=e.parent.contentMatchAt(e.index()).findWrapping(t.state.schema.nodes.text);if(!s)return!1;let n=$.empty;for(let o=s.length-1;o>=0;o--)n=$.from(s[o].createAndFill(null,n));let i=t.state.tr.replace(e.pos,e.pos,new z(n,0,0));return i.setSelection(C.near(i.doc.resolve(e.pos+1))),t.dispatch(i),!1}function nt(t){if(!(t.selection instanceof v))return null;let r=document.createElement("div");return r.className="ProseMirror-gapcursor",ae.create(t.doc,[oe.widget(t.selection.head,r,{key:"gapcursor"})])}var ke=y.create({name:"gapCursor",addProseMirrorPlugins(){return[be()]},extendNodeSchema(t){var r;let e={name:t.name,options:t.options,storage:t.storage};return{allowGapCursor:(r=ne(re(t,"allowGapCursor",e)))!==null&&r!==void 0?r:null}}});var Me=h.create({name:"hardBreak",addOptions(){return{keepMarks:!0,HTMLAttributes:{}}},inline:!0,group:"inline",selectable:!1,parseHTML(){return[{tag:"br"}]},renderHTML({HTMLAttributes:t}){return["br",u(this.options.HTMLAttributes,t)]},renderText(){return`
`},addCommands(){return{setHardBreak:()=>({commands:t,chain:r,state:e,editor:s})=>t.first([()=>t.exitCode(),()=>t.command(()=>{let{selection:n,storedMarks:i}=e;if(n.$from.parent.type.spec.isolating)return!1;let{keepMarks:o}=this.options,{splittableMarks:a}=s.extensionManager,l=i||n.$to.parentOffset&&n.$from.marks();return r().insertContent({type:this.name}).command(({tr:d,dispatch:p})=>{if(p&&l&&o){let c=l.filter(f=>a.includes(f.type.name));d.ensureMarks(c)}return!0}).run()})])}},addKeyboardShortcuts(){return{"Mod-Enter":()=>this.editor.commands.setHardBreak(),"Shift-Enter":()=>this.editor.commands.setHardBreak()}}});var Te=h.create({name:"heading",addOptions(){return{levels:[1,2,3,4,5,6],HTMLAttributes:{}}},content:"inline*",group:"block",defining:!0,addAttributes(){return{level:{default:1,rendered:!1}}},parseHTML(){return this.options.levels.map(t=>({tag:`h${t}`,attrs:{level:t}}))},renderHTML({node:t,HTMLAttributes:r}){return[`h${this.options.levels.includes(t.attrs.level)?t.attrs.level:this.options.levels[0]}`,u(this.options.HTMLAttributes,r),0]},addCommands(){return{setHeading:t=>({commands:r})=>this.options.levels.includes(t.level)?r.setNode(this.name,t):!1,toggleHeading:t=>({commands:r})=>this.options.levels.includes(t.level)?r.toggleNode(this.name,"paragraph",t):!1}},addKeyboardShortcuts(){return this.options.levels.reduce((t,r)=>O(H({},t),{[`Mod-Alt-${r}`]:()=>this.editor.commands.toggleHeading({level:r})}),{})},addInputRules(){return this.options.levels.map(t=>N({find:new RegExp(`^(#{1,${t}})\\s$`),type:this.type,getAttributes:{level:t}}))}});var _=200,g=function(){};g.prototype.append=function(r){return r.length?(r=g.from(r),!this.length&&r||r.length<_&&this.leafAppend(r)||this.length<_&&r.leafPrepend(this)||this.appendInner(r)):this};g.prototype.prepend=function(r){return r.length?g.from(r).append(this):this};g.prototype.appendInner=function(r){return new st(this,r)};g.prototype.slice=function(r,e){return r===void 0&&(r=0),e===void 0&&(e=this.length),r>=e?g.empty:this.sliceInner(Math.max(0,r),Math.min(this.length,e))};g.prototype.get=function(r){if(!(r<0||r>=this.length))return this.getInner(r)};g.prototype.forEach=function(r,e,s){e===void 0&&(e=0),s===void 0&&(s=this.length),e<=s?this.forEachInner(r,e,s,0):this.forEachInvertedInner(r,e,s,0)};g.prototype.map=function(r,e,s){e===void 0&&(e=0),s===void 0&&(s=this.length);var n=[];return this.forEach(function(i,o){return n.push(r(i,o))},e,s),n};g.from=function(r){return r instanceof g?r:r&&r.length?new Le(r):g.empty};var Le=function(t){function r(s){t.call(this),this.values=s}t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r;var e={length:{configurable:!0},depth:{configurable:!0}};return r.prototype.flatten=function(){return this.values},r.prototype.sliceInner=function(n,i){return n==0&&i==this.length?this:new r(this.values.slice(n,i))},r.prototype.getInner=function(n){return this.values[n]},r.prototype.forEachInner=function(n,i,o,a){for(var l=i;l<o;l++)if(n(this.values[l],a+l)===!1)return!1},r.prototype.forEachInvertedInner=function(n,i,o,a){for(var l=i-1;l>=o;l--)if(n(this.values[l],a+l)===!1)return!1},r.prototype.leafAppend=function(n){if(this.length+n.length<=_)return new r(this.values.concat(n.flatten()))},r.prototype.leafPrepend=function(n){if(this.length+n.length<=_)return new r(n.flatten().concat(this.values))},e.length.get=function(){return this.values.length},e.depth.get=function(){return 0},Object.defineProperties(r.prototype,e),r}(g);g.empty=new Le([]);var st=function(t){function r(e,s){t.call(this),this.left=e,this.right=s,this.length=e.length+s.length,this.depth=Math.max(e.depth,s.depth)+1}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},r.prototype.getInner=function(s){return s<this.left.length?this.left.get(s):this.right.get(s-this.left.length)},r.prototype.forEachInner=function(s,n,i,o){var a=this.left.length;if(n<a&&this.left.forEachInner(s,n,Math.min(i,a),o)===!1||i>a&&this.right.forEachInner(s,Math.max(n-a,0),Math.min(this.length,i)-a,o+a)===!1)return!1},r.prototype.forEachInvertedInner=function(s,n,i,o){var a=this.left.length;if(n>a&&this.right.forEachInvertedInner(s,n-a,Math.max(i,a)-a,o+a)===!1||i<a&&this.left.forEachInvertedInner(s,Math.min(n,a),i,o)===!1)return!1},r.prototype.sliceInner=function(s,n){if(s==0&&n==this.length)return this;var i=this.left.length;return n<=i?this.left.slice(s,n):s>=i?this.right.slice(s-i,n-i):this.left.slice(s,i).append(this.right.slice(0,n-i))},r.prototype.leafAppend=function(s){var n=this.right.leafAppend(s);if(n)return new r(this.left,n)},r.prototype.leafPrepend=function(s){var n=this.left.leafPrepend(s);if(n)return new r(n,this.right)},r.prototype.appendInner=function(s){return this.left.depth>=Math.max(this.right.depth,s.depth)+1?new r(this.left,new r(this.right,s)):new r(this,s)},r}(g),G=g;var it=500,E=class t{constructor(r,e){this.items=r,this.eventCount=e}popEvent(r,e){if(this.eventCount==0)return null;let s=this.items.length;for(;;s--)if(this.items.get(s-1).selection){--s;break}let n,i;e&&(n=this.remapping(s,this.items.length),i=n.maps.length);let o=r.tr,a,l,d=[],p=[];return this.items.forEach((c,f)=>{if(!c.step){n||(n=this.remapping(s,f+1),i=n.maps.length),i--,p.push(c);return}if(n){p.push(new A(c.map));let m=c.step.map(n.slice(i)),I;m&&o.maybeStep(m).doc&&(I=o.mapping.maps[o.mapping.maps.length-1],d.push(new A(I,void 0,void 0,d.length+p.length))),i--,I&&n.appendMap(I,i)}else o.maybeStep(c.step);if(c.selection)return a=n?c.selection.map(n.slice(i)):c.selection,l=new t(this.items.slice(0,s).append(p.reverse().concat(d)),this.eventCount-1),!1},this.items.length,0),{remaining:l,transform:o,selection:a}}addTransform(r,e,s,n){let i=[],o=this.eventCount,a=this.items,l=!n&&a.length?a.get(a.length-1):null;for(let p=0;p<r.steps.length;p++){let c=r.steps[p].invert(r.docs[p]),f=new A(r.mapping.maps[p],c,e),m;(m=l&&l.merge(f))&&(f=m,p?i.pop():a=a.slice(0,a.length-1)),i.push(f),e&&(o++,e=void 0),n||(l=f)}let d=o-s.depth;return d>at&&(a=ot(a,d),o-=d),new t(a.append(i),o)}remapping(r,e){let s=new X;return this.items.forEach((n,i)=>{let o=n.mirrorOffset!=null&&i-n.mirrorOffset>=r?s.maps.length-n.mirrorOffset:void 0;s.appendMap(n.map,o)},r,e),s}addMaps(r){return this.eventCount==0?this:new t(this.items.append(r.map(e=>new A(e))),this.eventCount)}rebased(r,e){if(!this.eventCount)return this;let s=[],n=Math.max(0,this.items.length-e),i=r.mapping,o=r.steps.length,a=this.eventCount;this.items.forEach(f=>{f.selection&&a--},n);let l=e;this.items.forEach(f=>{let m=i.getMirror(--l);if(m==null)return;o=Math.min(o,m);let I=i.maps[m];if(f.step){let ze=r.steps[m].invert(r.docs[m]),Y=f.selection&&f.selection.map(i.slice(l+1,m));Y&&a++,s.push(new A(I,ze,Y))}else s.push(new A(I))},n);let d=[];for(let f=e;f<o;f++)d.push(new A(i.maps[f]));let p=this.items.slice(0,n).append(d).append(s),c=new t(p,a);return c.emptyItemCount()>it&&(c=c.compress(this.items.length-s.length)),c}emptyItemCount(){let r=0;return this.items.forEach(e=>{e.step||r++}),r}compress(r=this.items.length){let e=this.remapping(0,r),s=e.maps.length,n=[],i=0;return this.items.forEach((o,a)=>{if(a>=r)n.push(o),o.selection&&i++;else if(o.step){let l=o.step.map(e.slice(s)),d=l&&l.getMap();if(s--,d&&e.appendMap(d,s),l){let p=o.selection&&o.selection.map(e.slice(s));p&&i++;let c=new A(d.invert(),l,p),f,m=n.length-1;(f=n.length&&n[m].merge(c))?n[m]=f:n.push(c)}}else o.map&&s--},this.items.length,0),new t(G.from(n.reverse()),i)}};E.empty=new E(G.empty,0);function ot(t,r){let e;return t.forEach((s,n)=>{if(s.selection&&r--==0)return e=n,!1}),t.slice(e)}var A=class t{constructor(r,e,s,n){this.map=r,this.step=e,this.selection=s,this.mirrorOffset=n}merge(r){if(this.step&&r.step&&!r.selection){let e=r.step.merge(this.step);if(e)return new t(e.getMap().invert(),e,this.selection)}}},x=class{constructor(r,e,s,n,i){this.done=r,this.undone=e,this.prevRanges=s,this.prevTime=n,this.prevComposition=i}},at=20;function lt(t,r,e,s){let n=e.getMeta(w),i;if(n)return n.historyState;e.getMeta(ut)&&(t=new x(t.done,t.undone,null,0,-1));let o=e.getMeta("appendedTransaction");if(e.steps.length==0)return t;if(o&&o.getMeta(w))return o.getMeta(w).redo?new x(t.done.addTransform(e,void 0,s,K(r)),t.undone,Ae(e.mapping.maps[e.steps.length-1]),t.prevTime,t.prevComposition):new x(t.done,t.undone.addTransform(e,void 0,s,K(r)),null,t.prevTime,t.prevComposition);if(e.getMeta("addToHistory")!==!1&&!(o&&o.getMeta("addToHistory")===!1)){let a=e.getMeta("composition"),l=t.prevTime==0||!o&&t.prevComposition!=a&&(t.prevTime<(e.time||0)-s.newGroupDelay||!dt(e,t.prevRanges)),d=o?W(t.prevRanges,e.mapping):Ae(e.mapping.maps[e.steps.length-1]);return new x(t.done.addTransform(e,l?r.selection.getBookmark():void 0,s,K(r)),E.empty,d,e.time,a??t.prevComposition)}else return(i=e.getMeta("rebased"))?new x(t.done.rebased(e,i),t.undone.rebased(e,i),W(t.prevRanges,e.mapping),t.prevTime,t.prevComposition):new x(t.done.addMaps(e.mapping.maps),t.undone.addMaps(e.mapping.maps),W(t.prevRanges,e.mapping),t.prevTime,t.prevComposition)}function dt(t,r){if(!r)return!1;if(!t.docChanged)return!0;let e=!1;return t.mapping.maps[0].forEach((s,n)=>{for(let i=0;i<r.length;i+=2)s<=r[i+1]&&n>=r[i]&&(e=!0)}),e}function Ae(t){let r=[];return t.forEach((e,s,n,i)=>r.push(n,i)),r}function W(t,r){if(!t)return null;let e=[];for(let s=0;s<t.length;s+=2){let n=r.map(t[s],1),i=r.map(t[s+1],-1);n<=i&&e.push(n,i)}return e}function Ce(t,r,e,s){let n=K(r),i=w.get(r).spec.config,o=(s?t.undone:t.done).popEvent(r,n);if(!o)return;let a=o.selection.resolve(o.transform.doc),l=(s?t.done:t.undone).addTransform(o.transform,r.selection.getBookmark(),i,n),d=new x(s?l:o.remaining,s?o.remaining:l,null,0,-1);e(o.transform.setSelection(a).setMeta(w,{redo:s,historyState:d}).scrollIntoView())}var F=!1,xe=null;function K(t){let r=t.plugins;if(xe!=r){F=!1,xe=r;for(let e=0;e<r.length;e++)if(r[e].spec.historyPreserveItems){F=!0;break}}return F}var w=new S("history"),ut=new S("closeHistory");function we(t={}){return t={depth:t.depth||100,newGroupDelay:t.newGroupDelay||500},new k({key:w,state:{init(){return new x(E.empty,E.empty,null,0,-1)},apply(r,e,s){return lt(e,s,r,t)}},config:t,props:{handleDOMEvents:{beforeinput(r,e){let s=e.inputType,n=s=="historyUndo"?q:s=="historyRedo"?J:null;return n?(e.preventDefault(),n(r.state,r.dispatch)):!1}}}})}var q=(t,r)=>{let e=w.getState(t);return!e||e.done.eventCount==0?!1:(r&&Ce(e,t,r,!1),!0)},J=(t,r)=>{let e=w.getState(t);return!e||e.undone.eventCount==0?!1:(r&&Ce(e,t,r,!0),!0)};var Ie=y.create({name:"history",addOptions(){return{depth:100,newGroupDelay:500}},addCommands(){return{undo:()=>({state:t,dispatch:r})=>q(t,r),redo:()=>({state:t,dispatch:r})=>J(t,r)}},addProseMirrorPlugins(){return[we(this.options)]},addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Mod-Z":()=>this.editor.commands.undo(),"Mod-y":()=>this.editor.commands.redo(),"Mod-Y":()=>this.editor.commands.redo(),"Shift-Mod-z":()=>this.editor.commands.redo(),"Shift-Mod-Z":()=>this.editor.commands.redo(),"Mod-\u044F":()=>this.editor.commands.undo(),"Shift-Mod-\u044F":()=>this.editor.commands.redo()}}});var He=h.create({name:"horizontalRule",addOptions(){return{HTMLAttributes:{}}},group:"block",parseHTML(){return[{tag:"hr"}]},renderHTML({HTMLAttributes:t}){return["hr",u(this.options.HTMLAttributes,t)]},addCommands(){return{setHorizontalRule:()=>({chain:t,state:r})=>{let{$to:e}=r.selection,s=t();return e.parentOffset===0?s.insertContentAt(Math.max(e.pos-2,0),{type:this.name}):s.insertContent({type:this.name}),s.command(({tr:n,dispatch:i})=>{var o;if(i){let{$to:a}=n.selection,l=a.end();if(a.nodeAfter)a.nodeAfter.isTextblock?n.setSelection(C.create(n.doc,a.pos+1)):a.nodeAfter.isBlock?n.setSelection(P.create(n.doc,a.pos)):n.setSelection(C.create(n.doc,a.pos));else{let d=(o=a.parent.type.contentMatch.defaultType)===null||o===void 0?void 0:o.create();d&&(n.insert(l,d),n.setSelection(C.create(n.doc,l+1)))}n.scrollIntoView()}return!0}).run()}}},addInputRules(){return[ie({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}});var pt=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,ct=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,ht=/(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,ft=/(?:^|\s)((?:_)((?:[^_]+))(?:_))/g,Se=b.create({name:"italic",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"em"},{tag:"i",getAttrs:t=>t.style.fontStyle!=="normal"&&null},{style:"font-style=italic"}]},renderHTML({HTMLAttributes:t}){return["em",u(this.options.HTMLAttributes,t),0]},addCommands(){return{setItalic:()=>({commands:t})=>t.setMark(this.name),toggleItalic:()=>({commands:t})=>t.toggleMark(this.name),unsetItalic:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-i":()=>this.editor.commands.toggleItalic(),"Mod-I":()=>this.editor.commands.toggleItalic()}},addInputRules(){return[M({find:pt,type:this.type}),M({find:ht,type:this.type})]},addPasteRules(){return[L({find:ct,type:this.type}),L({find:ft,type:this.type})]}});var Ee=h.create({name:"listItem",addOptions(){return{HTMLAttributes:{},bulletListTypeName:"bulletList",orderedListTypeName:"orderedList"}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:t}){return["li",u(this.options.HTMLAttributes,t),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}});var mt=h.create({name:"listItem",addOptions(){return{HTMLAttributes:{},bulletListTypeName:"bulletList",orderedListTypeName:"orderedList"}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:t}){return["li",u(this.options.HTMLAttributes,t),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),Oe=b.create({name:"textStyle",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"span",getAttrs:t=>t.hasAttribute("style")?{}:!1}]},renderHTML({HTMLAttributes:t}){return["span",u(this.options.HTMLAttributes,t),0]},addCommands(){return{removeEmptyTextStyle:()=>({state:t,commands:r})=>{let e=B(t,this.type);return Object.entries(e).some(([,n])=>!!n)?!0:r.unsetMark(this.name)}}}}),Re=/^(\d+)\.\s$/,Pe=h.create({name:"orderedList",addOptions(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:"block list",content(){return`${this.options.itemTypeName}+`},addAttributes(){return{start:{default:1,parseHTML:t=>t.hasAttribute("start")?parseInt(t.getAttribute("start")||"",10):1}}},parseHTML(){return[{tag:"ol"}]},renderHTML({HTMLAttributes:t}){let s=t,{start:r}=s,e=U(s,["start"]);return r===1?["ol",u(this.options.HTMLAttributes,e),0]:["ol",u(this.options.HTMLAttributes,t),0]},addCommands(){return{toggleOrderedList:()=>({commands:t,chain:r})=>this.options.keepAttributes?r().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(mt.name,this.editor.getAttributes(Oe.name)).run():t.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-7":()=>this.editor.commands.toggleOrderedList()}},addInputRules(){let t=T({find:Re,type:this.type,getAttributes:r=>({start:+r[1]}),joinPredicate:(r,e)=>e.childCount+e.attrs.start===+r[1]});return(this.options.keepMarks||this.options.keepAttributes)&&(t=T({find:Re,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:r=>H({start:+r[1]},this.editor.getAttributes(Oe.name)),joinPredicate:(r,e)=>e.childCount+e.attrs.start===+r[1],editor:this.editor})),[t]}});var Ne=h.create({name:"paragraph",priority:1e3,addOptions(){return{HTMLAttributes:{}}},group:"block",content:"inline*",parseHTML(){return[{tag:"p"}]},renderHTML({HTMLAttributes:t}){return["p",u(this.options.HTMLAttributes,t),0]},addCommands(){return{setParagraph:()=>({commands:t})=>t.setNode(this.name)}},addKeyboardShortcuts(){return{"Mod-Alt-0":()=>this.editor.commands.setParagraph()}}});var Be=y.create({name:"placeholder",addOptions(){return{emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something \u2026",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}},addProseMirrorPlugins(){return[new k({key:new S("placeholder"),props:{decorations:({doc:t,selection:r})=>{let e=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:s}=r,n=[];if(!e)return null;let i=t.type.createAndFill(),o=(i==null?void 0:i.sameMarkup(t))&&i.content.findDiffStart(t.content)===null;return t.descendants((a,l)=>{let d=s>=l&&s<=l+a.nodeSize,p=!a.isLeaf&&!a.childCount;if((d||!this.options.showOnlyCurrent)&&p){let c=[this.options.emptyNodeClass];o&&c.push(this.options.emptyEditorClass);let f=Q.node(l,l+a.nodeSize,{class:c.join(" "),"data-placeholder":typeof this.options.placeholder=="function"?this.options.placeholder({editor:this.editor,node:a,pos:l,hasAnchor:d}):this.options.placeholder});n.push(f)}return this.options.includeChildren}),ee.create(t,n)}}})]}});var gt=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,vt=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,De=b.create({name:"strike",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:!1,getAttrs:t=>t.includes("line-through")?{}:!1}]},renderHTML({HTMLAttributes:t}){return["s",u(this.options.HTMLAttributes,t),0]},addCommands(){return{setStrike:()=>({commands:t})=>t.setMark(this.name),toggleStrike:()=>({commands:t})=>t.toggleMark(this.name),unsetStrike:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){let t={};return se()?t["Mod-Shift-s"]=()=>this.editor.commands.toggleStrike():t["Ctrl-Shift-s"]=()=>this.editor.commands.toggleStrike(),t},addInputRules(){return[M({find:gt,type:this.type})]},addPasteRules(){return[L({find:vt,type:this.type})]}});var yt=/^\s*(\[([( |x])?\])\s$/,_e=h.create({name:"taskItem",addOptions(){return{nested:!1,HTMLAttributes:{},taskListTypeName:"taskList"}},content(){return this.options.nested?"paragraph block*":"paragraph+"},defining:!0,addAttributes(){return{checked:{default:!1,keepOnSplit:!1,parseHTML:t=>t.getAttribute("data-checked")==="true",renderHTML:t=>({"data-checked":t.checked})}}},parseHTML(){return[{tag:`li[data-type="${this.name}"]`,priority:51}]},renderHTML({node:t,HTMLAttributes:r}){return["li",u(this.options.HTMLAttributes,r,{"data-type":this.name}),["label",["input",{type:"checkbox",checked:t.attrs.checked?"checked":null}],["span"]],["div",0]]},addKeyboardShortcuts(){let t={Enter:()=>this.editor.commands.splitListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)};return this.options.nested?O(H({},t),{Tab:()=>this.editor.commands.sinkListItem(this.name)}):t},addNodeView(){return({node:t,HTMLAttributes:r,getPos:e,editor:s})=>{let n=document.createElement("li"),i=document.createElement("label"),o=document.createElement("span"),a=document.createElement("input"),l=document.createElement("div");return i.contentEditable="false",a.type="checkbox",a.addEventListener("change",d=>{if(!s.isEditable&&!this.options.onReadOnlyChecked){a.checked=!a.checked;return}let{checked:p}=d.target;s.isEditable&&typeof e=="function"&&s.chain().focus(void 0,{scrollIntoView:!1}).command(({tr:c})=>{let f=e(),m=c.doc.nodeAt(f);return c.setNodeMarkup(f,void 0,O(H({},m==null?void 0:m.attrs),{checked:p})),!0}).run(),!s.isEditable&&this.options.onReadOnlyChecked&&(this.options.onReadOnlyChecked(t,p)||(a.checked=!a.checked))}),Object.entries(this.options.HTMLAttributes).forEach(([d,p])=>{n.setAttribute(d,p)}),n.dataset.checked=t.attrs.checked,t.attrs.checked&&a.setAttribute("checked","checked"),i.append(a,o),n.append(i,l),Object.entries(r).forEach(([d,p])=>{n.setAttribute(d,p)}),{dom:n,contentDOM:l,update:d=>d.type!==this.type?!1:(n.dataset.checked=d.attrs.checked,d.attrs.checked?a.setAttribute("checked","checked"):a.removeAttribute("checked"),!0)}}},addInputRules(){return[T({find:yt,type:this.type,getAttributes:t=>({checked:t[t.length-1]==="x"})})]}});var Ke=h.create({name:"taskList",addOptions(){return{itemTypeName:"taskItem",HTMLAttributes:{}}},group:"block list",content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:`ul[data-type="${this.name}"]`,priority:51}]},renderHTML({HTMLAttributes:t}){return["ul",u(this.options.HTMLAttributes,t,{"data-type":this.name}),0]},addCommands(){return{toggleTaskList:()=>({commands:t})=>t.toggleList(this.name,this.options.itemTypeName)}},addKeyboardShortcuts(){return{"Mod-Shift-9":()=>this.editor.commands.toggleTaskList()}}});var $e=h.create({name:"text",group:"inline"});var ln=y.create({name:"starterKit",addExtensions(){var t;let r=[],e=this.options;return(e==null?void 0:e.blockquote)!==!1&&r.push(de.configure(e==null?void 0:e.blockquote)),(e==null?void 0:e.bold)!==!1&&r.push(ue.configure(e==null?void 0:e.bold)),(e==null?void 0:e.bulletList)!==!1&&r.push(he.configure(e==null?void 0:e.bulletList)),(e==null?void 0:e.code)!==!1&&r.push(fe.configure(e==null?void 0:e.code)),(e==null?void 0:e.codeBlock)!==!1&&r.push(me.configure(e==null?void 0:e.codeBlock)),(e==null?void 0:e.document)!==!1&&r.push(ge.configure(e==null?void 0:e.document)),(e==null?void 0:e.dropcursor)!==!1&&r.push(ye.configure(e==null?void 0:e.dropcursor)),(e==null?void 0:e.gapcursor)!==!1&&r.push(ke.configure(e==null?void 0:e.gapcursor)),(e==null?void 0:e.hardBreak)!==!1&&r.push(Me.configure(e==null?void 0:e.hardBreak)),(e==null?void 0:e.heading)!==!1&&r.push(Te.configure(Object.assign({levels:[1,2,3,4,5,6]},e==null?void 0:e.heading)).extend({addKeyboardShortcuts(){return this.options.levels.reduce((s,n)=>Object.assign(Object.assign({},s||{}),{[`Mod-Alt-${n}`]:()=>this===null||this===void 0?void 0:this.editor.commands.toggleHeading({level:n})}),{})}})),(e==null?void 0:e.history)!==!1&&r.push(Ie.configure(Object.assign({depth:100,newGroupDelay:500},e==null?void 0:e.history))),(e==null?void 0:e.horizontalRule)!==!1&&r.push(He.configure(e==null?void 0:e.horizontalRule)),(e==null?void 0:e.italic)!==!1&&r.push(Se.configure(e==null?void 0:e.italic)),(e==null?void 0:e.listItem)!==!1&&r.push(Ee.configure(e==null?void 0:e.listItem)),(e==null?void 0:e.taskList)!==!1&&r.push(Ke.configure(e==null?void 0:e.taskList)),(e==null?void 0:e.taskItem)!==!1&&r.push(_e.configure(Object.assign({nested:!0},e==null?void 0:e.taskItem))),(e==null?void 0:e.orderedList)!==!1&&r.push(Pe.configure(e==null?void 0:e.orderedList)),(e==null?void 0:e.paragraph)!==!1&&r.push(Ne.configure(e==null?void 0:e.paragraph)),(e==null?void 0:e.strike)!==!1&&r.push(De.configure(e==null?void 0:e.strike)),(e==null?void 0:e.text)!==!1&&r.push($e.configure(e==null?void 0:e.text)),(e==null?void 0:e.placeholder)!==!1&&r.push(Be.configure(Object.assign({emptyNodeClass:"t-editor-placeholder",includeChildren:!0,showOnlyCurrent:!0,showOnlyWhenEditable:!0,placeholder:""},(t=e==null?void 0:e.placeholder)!==null&&t!==void 0?t:{}))),(e==null?void 0:e.enter)!==!1&&r.push(le),r}});export{ln as StarterKit};
//# sourceMappingURL=chunk-M5P7IOAR.js.map
