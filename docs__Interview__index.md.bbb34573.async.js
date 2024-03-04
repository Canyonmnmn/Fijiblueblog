"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5927],{99803:function(M,j,r){r.r(j);var i=r(71100),T=r(35532),P=r(44813),A=r(67915),L=r(37134),$=r(60454),Z=r(67294),d=r(85893);function B(){var D=(0,$.eL)(),h=D.texts;return(0,d.jsx)($.dY,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsxs)("h1",{id:"\u4ECB\u7ECD",children:[(0,d.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4ECB\u7ECD",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u4ECB\u7ECD"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("strong",{children:h[0].value}),h[1].value]})]}),(0,d.jsx)(P.Z,{type:"info",title:"Tips",children:(0,d.jsxs)("p",{children:[h[2].value,(0,d.jsx)("a",{href:"https://github.com/Canyonmnmn/Canyonmnmn/discussions/2",children:h[3].value}),h[4].value]})}),(0,d.jsx)("div",{className:"markdown",children:(0,d.jsx)("p",{children:(0,d.jsx)("img",{alt:"1",src:r(36886)})})})]})})}j.default=B},44813:function(M,j,r){r.d(j,{Z:function(){return pe}});var i=r(67294),T=r(69123),P=r(86581),A=r(12057),L=r(88141),$=r(31510),Z=r(93967),d=r.n(Z),B=r(82225),D=r(64217),h=r(96159),Y=r(53124),F=r(14947),J=r(14747),Q=r(91945);const S=(n,e,t,o,l)=>({background:n,border:`${(0,F.bf)(o.lineWidth)} ${o.lineType} ${e}`,[`${l}-icon`]:{color:t}}),q=n=>{const{componentCls:e,motionDurationSlow:t,marginXS:o,marginSM:l,fontSize:a,fontSizeLG:u,lineHeight:c,borderRadiusLG:g,motionEaseInOutCirc:p,withDescriptionIconSize:b,colorText:I,colorTextHeading:x,withDescriptionPadding:m,defaultPadding:y}=n;return{[e]:Object.assign(Object.assign({},(0,J.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:y,wordWrap:"break-word",borderRadius:g,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:o,lineHeight:0},["&-description"]:{display:"none",fontSize:a,lineHeight:c},"&-message":{color:x},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${p}, opacity ${t} ${p},
        padding-top ${t} ${p}, padding-bottom ${t} ${p},
        margin-bottom ${t} ${p}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:m,[`${e}-icon`]:{marginInlineEnd:l,fontSize:b,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:o,color:x,fontSize:u},[`${e}-description`]:{display:"block",color:I}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},ee=n=>{const{componentCls:e,colorSuccess:t,colorSuccessBorder:o,colorSuccessBg:l,colorWarning:a,colorWarningBorder:u,colorWarningBg:c,colorError:g,colorErrorBorder:p,colorErrorBg:b,colorInfo:I,colorInfoBorder:x,colorInfoBg:m}=n;return{[e]:{"&-success":S(l,o,t,n,e),"&-info":S(m,x,I,n,e),"&-warning":S(c,u,a,n,e),"&-error":Object.assign(Object.assign({},S(b,p,g,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},ne=n=>{const{componentCls:e,iconCls:t,motionDurationMid:o,marginXS:l,fontSizeIcon:a,colorIcon:u,colorIconHover:c}=n;return{[e]:{["&-action"]:{marginInlineStart:l},[`${e}-close-icon`]:{marginInlineStart:l,padding:0,overflow:"hidden",fontSize:a,lineHeight:(0,F.bf)(a),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:u,transition:`color ${o}`,"&:hover":{color:c}}},"&-close-text":{color:u,transition:`color ${o}`,"&:hover":{color:c}}}}},oe=n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`});var te=(0,Q.I$)("Alert",n=>[q(n),ee(n),ne(n)],oe),z=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(n);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(n,o[l])&&(t[o[l]]=n[o[l]]);return t};const re={success:T.Z,info:$.Z,error:P.Z,warning:L.Z},le=n=>{const{icon:e,prefixCls:t,type:o}=n,l=re[o]||null;return e?(0,h.wm)(e,i.createElement("span",{className:`${t}-icon`},e),()=>({className:d()(`${t}-icon`,{[e.props.className]:e.props.className})})):i.createElement(l,{className:`${t}-icon`})},se=n=>{const{isClosable:e,prefixCls:t,closeIcon:o,handleClose:l,ariaProps:a}=n,u=o===!0||o===void 0?i.createElement(A.Z,null):o;return e?i.createElement("button",Object.assign({type:"button",onClick:l,className:`${t}-close-icon`,tabIndex:0},a),u):null};var W=n=>{const{description:e,prefixCls:t,message:o,banner:l,className:a,rootClassName:u,style:c,onMouseEnter:g,onMouseLeave:p,onClick:b,afterClose:I,showIcon:x,closable:m,closeText:y,closeIcon:E,action:_}=n,Ce=z(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[G,he]=i.useState(!1),be=i.useRef(null),{getPrefixCls:xe,direction:ye,alert:s}=i.useContext(Y.E_),f=xe("alert",t),[Ee,je,Ie]=te(f),$e=v=>{var C;he(!0),(C=n.onClose)===null||C===void 0||C.call(n,v)},V=i.useMemo(()=>n.type!==void 0?n.type:l?"warning":"info",[n.type,l]),Se=i.useMemo(()=>typeof m=="object"&&m.closeIcon||y?!0:typeof m=="boolean"?m:E!==!1&&E!==null&&E!==void 0?!0:!!(s!=null&&s.closable),[y,E,m,s==null?void 0:s.closable]),X=l&&x===void 0?!0:x,Oe=d()(f,`${f}-${V}`,{[`${f}-with-description`]:!!e,[`${f}-no-icon`]:!X,[`${f}-banner`]:!!l,[`${f}-rtl`]:ye==="rtl"},s==null?void 0:s.className,a,u,Ie,je),Me=(0,D.Z)(Ce,{aria:!0,data:!0}),Pe=i.useMemo(()=>{var v,C;return typeof m=="object"&&m.closeIcon?m.closeIcon:y||(E!==void 0?E:typeof(s==null?void 0:s.closable)=="object"&&(!((v=s==null?void 0:s.closable)===null||v===void 0)&&v.closeIcon)?(C=s==null?void 0:s.closable)===null||C===void 0?void 0:C.closeIcon:s==null?void 0:s.closeIcon)},[E,m,y,s==null?void 0:s.closeIcon]),Be=i.useMemo(()=>{const v=m!=null?m:s==null?void 0:s.closable;if(typeof v=="object"){const{closeIcon:C}=v;return z(v,["closeIcon"])}return{}},[m,s==null?void 0:s.closable]);return Ee(i.createElement(B.ZP,{visible:!G,motionName:`${f}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:v=>({maxHeight:v.offsetHeight}),onLeaveEnd:I},v=>{let{className:C,style:k}=v;return i.createElement("div",Object.assign({ref:be,"data-show":!G,className:d()(Oe,C),style:Object.assign(Object.assign(Object.assign({},s==null?void 0:s.style),c),k),onMouseEnter:g,onMouseLeave:p,onClick:b,role:"alert"},Me),X?i.createElement(le,{description:e,icon:n.icon,prefixCls:f,type:V}):null,i.createElement("div",{className:`${f}-content`},o?i.createElement("div",{className:`${f}-message`},o):null,e?i.createElement("div",{className:`${f}-description`},e):null),_?i.createElement("div",{className:`${f}-action`},_):null,i.createElement(se,{isClosable:Se,prefixCls:f,closeIcon:Pe,handleClose:$e,ariaProps:Be}))}))},ie=r(15671),ae=r(43144),ce=r(53640),de=r(60136),ue=function(n){(0,de.Z)(e,n);function e(){var t;return(0,ie.Z)(this,e),t=(0,ce.Z)(this,e,arguments),t.state={error:void 0,info:{componentStack:""}},t}return(0,ae.Z)(e,[{key:"componentDidCatch",value:function(o,l){this.setState({error:o,info:l})}},{key:"render",value:function(){const{message:o,description:l,children:a}=this.props,{error:u,info:c}=this.state,g=c&&c.componentStack?c.componentStack:null,p=typeof o=="undefined"?(u||"").toString():o,b=typeof l=="undefined"?g:l;return u?i.createElement(W,{type:"error",message:p,description:i.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},b)}):a}}]),e}(i.Component);const H=W;H.ErrorBoundary=ue;var me=H,O=r(30168),fe=r(66151),w,R,U,K,ge=(0,fe.kc)(function(n){var e=n.token,t=n.prefixCls,o=n.css,l=function(c){return c.replace(/( |^)[a-z]/g,function(g){return g.toUpperCase()})},a=function(c){var g={background:e["color".concat(l(c),"Bg")],text:e["color".concat(l(c),"Text")]};return o(w||(w=(0,O.Z)([`
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
    `])),t,c,g.background,t,g.text,t,g.text)};return{container:o(R||(R=(0,O.Z)([`
      margin: 8px 0;

      `,`

      `,`

      `,`

      `,`
    `])),a("info"),a("warning"),a("success"),a("error")),alert:o(U||(U=(0,O.Z)([`
      border: none;

      .`,`-alert-message {
        font-weight: bold;
      }
    `])),t),desc:o(K||(K=(0,O.Z)([`
      p {
        margin: 0;
      }
    `])))}}),N=r(85893),ve=function(e){var t=e.type,o=e.title,l=e.children,a=ge(),u=a.styles,c=a.cx;return(0,N.jsx)("div",{"data-type":t,className:u.container,children:(0,N.jsx)(me,{showIcon:!0,type:t,message:o||t.toUpperCase(),description:(0,N.jsx)("div",{className:c(u.desc,"markdown"),children:l}),className:u.alert})})},pe=ve},36886:function(M,j,r){M.exports=r.p+"static/mianshi.84e475d3.svg"}}]);
