import{S as t}from"./chunk-2HHBJRZU.js";import"./chunk-DB7F5TEQ.js";var r=t.create({addGlobalAttributes(){return[{types:["tableCell","tableHeader"],attributes:{background:{default:null,renderHTML:({background:e})=>e?{style:`background: ${e}`}:null,parseHTML:({style:e})=>e.background,keepOnSplit:!1}}}]},addCommands(){return{setCellBackground:e=>({chain:l})=>l().updateAttributes("tableCell",{background:e}).updateAttributes("tableHeader",{background:e}).run(),unsetCellBackground:()=>({chain:e})=>e().updateAttributes("tableCell",{background:null}).updateAttributes("tableHeader",{background:null}).run()}}});export{r as TableCellBackground};
//# sourceMappingURL=chunk-LMOTM6HY.js.map
