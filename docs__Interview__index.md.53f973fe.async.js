"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[927],{20446:function(B,x,r){r.r(x);var D=r(71100),L=r(35532),M=r(46e3),A=r(67915),W=r(95735),j=r(69904),$=r(67294),i=r(85893);function l(){var N=(0,j.eL)(),g=N.texts;return(0,i.jsx)(j.dY,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"\u4ECB\u7ECD",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4ECB\u7ECD",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"\u4ECB\u7ECD"]}),(0,i.jsxs)("p",{children:[g[0].value,(0,i.jsx)("strong",{children:g[1].value}),g[2].value,(0,i.jsx)("strong",{children:g[3].value}),g[4].value,(0,i.jsx)("strong",{children:g[5].value}),g[6].value]})]}),(0,i.jsx)(M.Z,{type:"info",title:"Tips",children:(0,i.jsxs)("p",{children:[g[7].value,(0,i.jsx)("a",{href:"https://github.com/Canyonmnmn/Canyonmnmn/discussions/2",children:g[8].value}),g[9].value]})}),(0,i.jsx)("div",{className:"markdown",children:(0,i.jsx)("p",{children:(0,i.jsx)("img",{alt:"1",src:r(72503)})})})]})})}x.default=l},46e3:function(B,x,r){r.d(x,{Z:function(){return pe}});var D=r(69123),L=r(86581),M=r(12057),A=r(88141),W=r(31510),j=r(94184),$=r.n(j),i=r(82225),l=r(67294),N=r(53124);function g(t){return Object.keys(t).reduce((e,n)=>((n.startsWith("data-")||n.startsWith("aria-")||n==="role")&&!n.startsWith("data-__")&&(e[n]=t[n]),e),{})}var X=r(96159),k=r(15671),V=r(43144),Y=r(60136),J=r(18486),Q=function(t){(0,Y.Z)(n,t);var e=(0,J.Z)(n);function n(){var o;return(0,k.Z)(this,n),o=e.apply(this,arguments),o.state={error:void 0,info:{componentStack:""}},o}return(0,V.Z)(n,[{key:"componentDidCatch",value:function(s,a){this.setState({error:s,info:a})}},{key:"render",value:function(){const{message:s,description:a,children:d}=this.props,{error:c,info:m}=this.state,p=m&&m.componentStack?m.componentStack:null,h=typeof s=="undefined"?(c||"").toString():s,f=typeof a=="undefined"?p:a;return c?l.createElement(F,{type:"error",message:h,description:l.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},f)}):d}}]),n}(l.Component),q=r(67968),ee=r(45503),ne=r(14747);const S=(t,e,n,o,s)=>({backgroundColor:t,border:`${o.lineWidth}px ${o.lineType} ${e}`,[`${s}-icon`]:{color:n}}),te=t=>{const{componentCls:e,motionDurationSlow:n,marginXS:o,marginSM:s,fontSize:a,fontSizeLG:d,lineHeight:c,borderRadiusLG:m,motionEaseInOutCirc:p,alertIconSizeLG:h,colorText:f,paddingContentVerticalSM:C,alertPaddingHorizontal:E,paddingMD:I,paddingContentHorizontalLG:T}=t;return{[e]:Object.assign(Object.assign({},(0,ne.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:`${C}px ${E}px`,wordWrap:"break-word",borderRadius:m,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:o,lineHeight:0},["&-description"]:{display:"none",fontSize:a,lineHeight:c},"&-message":{color:f},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${p}, opacity ${n} ${p},
        padding-top ${n} ${p}, padding-bottom ${n} ${p},
        margin-bottom ${n} ${p}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",paddingInline:T,paddingBlock:I,[`${e}-icon`]:{marginInlineEnd:s,fontSize:h,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:o,color:f,fontSize:d},[`${e}-description`]:{display:"block"}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},oe=t=>{const{componentCls:e,colorSuccess:n,colorSuccessBorder:o,colorSuccessBg:s,colorWarning:a,colorWarningBorder:d,colorWarningBg:c,colorError:m,colorErrorBorder:p,colorErrorBg:h,colorInfo:f,colorInfoBorder:C,colorInfoBg:E}=t;return{[e]:{"&-success":S(s,o,n,t,e),"&-info":S(E,C,f,t,e),"&-warning":S(c,d,a,t,e),"&-error":Object.assign(Object.assign({},S(h,p,m,t,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},re=t=>{const{componentCls:e,iconCls:n,motionDurationMid:o,marginXS:s,fontSizeIcon:a,colorIcon:d,colorIconHover:c}=t;return{[e]:{["&-action"]:{marginInlineStart:s},[`${e}-close-icon`]:{marginInlineStart:s,padding:0,overflow:"hidden",fontSize:a,lineHeight:`${a}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:d,transition:`color ${o}`,"&:hover":{color:c}}},"&-close-text":{color:d,transition:`color ${o}`,"&:hover":{color:c}}}}},se=t=>[te(t),oe(t),re(t)];var ae=(0,q.Z)("Alert",t=>{const{fontSizeHeading3:e}=t,n=(0,ee.TS)(t,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[se(n)]}),le=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(n[o[s]]=t[o[s]]);return n};const ie={success:D.Z,info:W.Z,error:L.Z,warning:A.Z},ce=t=>{const{icon:e,prefixCls:n,type:o}=t,s=ie[o]||null;return e?(0,X.wm)(e,l.createElement("span",{className:`${n}-icon`},e),()=>({className:$()(`${n}-icon`,{[e.props.className]:e.props.className})})):l.createElement(s,{className:`${n}-icon`})},de=t=>{const{isClosable:e,closeText:n,prefixCls:o,closeIcon:s,handleClose:a}=t;return e?l.createElement("button",{type:"button",onClick:a,className:`${o}-close-icon`,tabIndex:0},n?l.createElement("span",{className:`${o}-close-text`},n):s):null},Z=t=>{var{description:e,prefixCls:n,message:o,banner:s,className:a,rootClassName:d,style:c,onMouseEnter:m,onMouseLeave:p,onClick:h,afterClose:f,showIcon:C,closable:E,closeText:I,closeIcon:T=l.createElement(M.Z,null),action:U}=t,y=le(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[K,fe]=l.useState(!1),ve=l.useRef(),{getPrefixCls:he,direction:Ce}=l.useContext(N.E_),u=he("alert",n),[xe,Ee]=ae(u),ye=v=>{var b;fe(!0),(b=y.onClose)===null||b===void 0||b.call(y,v)},be=()=>{const{type:v}=y;return v!==void 0?v:s?"warning":"info"},je=I?!0:E,G=be(),_=s&&C===void 0?!0:C,$e=$()(u,`${u}-${G}`,{[`${u}-with-description`]:!!e,[`${u}-no-icon`]:!_,[`${u}-banner`]:!!s,[`${u}-rtl`]:Ce==="rtl"},a,d,Ee),Se=g(y);return xe(l.createElement(i.ZP,{visible:!K,motionName:`${u}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:v=>({maxHeight:v.offsetHeight}),onLeaveEnd:f},v=>{let{className:b,style:Oe}=v;return l.createElement("div",Object.assign({ref:ve,"data-show":!K,className:$()($e,b),style:Object.assign(Object.assign({},c),Oe),onMouseEnter:m,onMouseLeave:p,onClick:h,role:"alert"},Se),_?l.createElement(ce,{description:e,icon:y.icon,prefixCls:u,type:G}):null,l.createElement("div",{className:`${u}-content`},o?l.createElement("div",{className:`${u}-message`},o):null,e?l.createElement("div",{className:`${u}-description`},e):null),U?l.createElement("div",{className:`${u}-action`},U):null,l.createElement(de,{isClosable:!!je,closeText:I,prefixCls:u,closeIcon:T,handleClose:ye}))}))};Z.ErrorBoundary=Q;var F=Z,O=r(30168),me=r(83741),z,R,H,w,ue=(0,me.kc)(function(t){var e=t.token,n=t.prefixCls,o=t.css,s=function(c){return c.replace(/( |^)[a-z]/g,function(m){return m.toUpperCase()})},a=function(c){var m={background:e["color".concat(s(c),"Bg")],text:e["color".concat(s(c),"Text")]};return o(z||(z=(0,O.Z)([`
      .`,"-alert-",` {
        background: `,`;

        .`,`-alert-message {
          color: `,`;
          font-weight: bold;
        }

        .`,`-alert-description {
          .markdown {
            color: `,`;
          }
        }
      }
    `])),n,c,m.background,n,m.text,n,m.text)};return{container:o(R||(R=(0,O.Z)([`
      margin: 8px 0;

      `,`

      `,`

      `,`

      `,`
    `])),a("info"),a("warning"),a("success"),a("error")),alert:o(H||(H=(0,O.Z)([`
      border: none;

      .`,`-alert-message {
        font-weight: bold;
      }
    `])),n),desc:o(w||(w=(0,O.Z)([`
      p {
        margin: 0;
      }
    `])))}}),P=r(85893),ge=function(e){var n=e.type,o=e.title,s=e.children,a=ue(),d=a.styles,c=a.cx;return(0,P.jsx)("div",{"data-type":n,className:d.container,children:(0,P.jsx)(F,{showIcon:!0,type:n,message:o||n.toUpperCase(),description:(0,P.jsx)("div",{className:c(d.desc,"markdown"),children:s}),className:d.alert})})},pe=ge},72503:function(B,x,r){B.exports=r.p+"static/mianshi.84e475d3.svg"}}]);