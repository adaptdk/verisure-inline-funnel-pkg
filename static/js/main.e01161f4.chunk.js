(this["webpackJsonpverisure-fe"]=this["webpackJsonpverisure-fe"]||[]).push([[0],{101:function(e,t,n){e.exports=n(201)},106:function(e,t,n){},107:function(e,t,n){},12:function(e,t,n){e.exports=n.p+"static/media/verisure-portal.39cf59c6.png"},201:function(e,t,n){"use strict";n.r(t);var r,a,l=n(0),i=n.n(l),u=n(76),c=n.n(u),o=n(13),s=n(205),m=n(206),d=n(207),p=n(77),g=(n(106),n(107),n(35)),_=n(36),k=n.n(_),f=n(37);function v(){var e=Object(g.a)(["\n    query GetStep($step_id: ID!, $conditions: [InputCondition!]!) {\n  GetNextStep(step_id: $step_id, conditions: $conditions) {\n    step_id\n    render_type\n    message\n    progress\n    title\n    redirect_url\n    buildingblocks {\n      __typename\n      ... on BuildingBlockTitle {\n        title\n      }\n      ... on BuildingBlockParagraph {\n        type\n        markdown\n        html\n      }\n      ... on BuildingBlockMessage {\n        markdown\n        html\n      }\n      ... on BuildingBlockSubmit {\n        input_key\n        label\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockTextfield {\n        input_key\n        sticky\n        type\n        placeholder\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockRadio {\n        input_key\n        type\n        label\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockButton {\n        input_key\n        label\n        type\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockQuestion {\n        text\n      }\n      ... on BuildingBlockProgress {\n        percentage\n      }\n      ... on BuildingBlockImage {\n        alt_text\n        title_text\n        images {\n          conversion\n          url\n          full_url\n          mime_type\n        }\n        responsive_images {\n          input_key\n          url\n        }\n      }\n    }\n  }\n}\n    "]);return v=function(){return e},e}function E(){var e=Object(g.a)(["\n    query GetFlow {\n  GetFlow(conditions: []) {\n    step_id\n    render_type\n    message\n    progress\n    title\n    redirect_url\n    buildingblocks {\n      __typename\n      ... on BuildingBlockTitle {\n        title\n      }\n      ... on BuildingBlockParagraph {\n        type\n        markdown\n        html\n      }\n      ... on BuildingBlockMessage {\n        markdown\n        html\n      }\n      ... on BuildingBlockSubmit {\n        input_key\n        label\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockTextfield {\n        input_key\n        sticky\n        type\n        placeholder\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockRadio {\n        input_key\n        type\n        label\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockButton {\n        input_key\n        label\n        type\n        output_conditions {\n          input_key\n          input_value\n          input_type\n        }\n      }\n      ... on BuildingBlockQuestion {\n        text\n      }\n      ... on BuildingBlockProgress {\n        percentage\n      }\n      ... on BuildingBlockImage {\n        alt_text\n        title_text\n        images {\n          conversion\n          url\n          full_url\n          mime_type\n        }\n        responsive_images {\n          input_key\n          url\n        }\n      }\n    }\n  }\n}\n    "]);return E=function(){return e},e}function b(){var e=Object(g.a)(["\n    mutation SubmitFlow($data: [InputCondition!]!) {\n  SubmitFlow(data: $data) {\n    message\n  }\n}\n    "]);return b=function(){return e},e}!function(e){e.Asc="ASC",e.Desc="DESC"}(r||(r={})),function(e){e.Only="ONLY",e.With="WITH",e.Without="WITHOUT"}(a||(a={}));var B=k()(b());var y=k()(E());var h=k()(v());var O,w=n(7),j=n(19);!function(e){e.setCurrentStep="@flowContext/set-current-step",e.addToTimeline="@flowContext/add-to-timeline",e.removeLastFromTimeline="@flowContext/remove-last-from-timeline",e.addGlobalConditions="@flowContext/add-global-conditions",e.getResultPage="@flowContext/get-result-page",e.updateCurrentInputConditions="@flowContext/update-current-input-value",e.addCurrentInputValueToTimeline="@flowContext/add-current-input-value-to-timeline"}(O||(O={}));var x,N=function(e){return e[e.length-1]};!function(e){e[e.idle=0]="idle",e[e.exiting=1]="exiting",e[e.exited=2]="exited"}(x||(x={}));var S=n(99),C=function(e){return e.map((function(e){if(void 0!==e.__typename){e.__typename;return Object(S.a)(e,["__typename"])}return e}))},T={currentStep:null,backStep:null,timeline:[],stepTransitionState:x.exiting,globalConditions:[],currentInputConditions:[],resultPageType:null},I=function(e,t){switch(t.type){case O.updateCurrentInputConditions:return Object(j.a)({},e,{currentInputConditions:t.conditions});case O.addGlobalConditions:return t.conditions?Object(j.a)({},e,{globalConditions:[].concat(Object(w.a)(e.globalConditions),Object(w.a)(t.conditions))}):e;case O.setCurrentStep:return Object(j.a)({},e,{currentStep:t.step});case O.addToTimeline:return Object(j.a)({},e,{timeline:[].concat(Object(w.a)(e.timeline),[{step:e.currentStep,conditions:C(t.conditions)}]),backStep:null});case O.removeLastFromTimeline:var n=Object(w.a)(e.timeline),r=N(n);return n.length>0&&(n=n.slice(0,-1)),n.length&&(r=N(n)),Object(j.a)({},e,{timeline:n},r?{currentStep:r.step}:{},{backStep:e.currentStep});case O.getResultPage:return Object(j.a)({},e,{resultPageType:t.resultType});default:throw new Error("Unhandled action type: ".concat(t.type))}},P=Object(l.createContext)(T),R=function(e){var t=e.children;return(i.a.createElement(P.Provider,{value:Object(l.useReducer)(I,T)},t))},D=function(){return Object(l.useContext)(P)},G=n(9);function V(){var e=Object(g.a)(["\n    query GetStep($step_id: ID!, $conditions: [InputCondition!]!){\n        GetNextStep(step_id: $step_id, conditions: $conditions){\n            step_id\n            render_type\n            message\n            progress\n            title\n            redirect_url\n            buildingblocks {\n                __typename\n                ... on BuildingBlockTitle {title}\n                ... on BuildingBlockParagraph {type markdown html}\n                ... on BuildingBlockMessage {markdown html}\n                ... on BuildingBlockSubmit {input_key label output_conditions {input_key, input_value, input_type}}\n                ... on BuildingBlockTextfield {input_key sticky type placeholder output_conditions {input_key, input_value, input_type}}\n                ... on BuildingBlockRadio {input_key type label output_conditions {input_key, input_value, input_type}}\n                ... on BuildingBlockButton {input_key label type output_conditions {input_key, input_value, input_type}}\n                ... on BuildingBlockQuestion {text}\n                ... on BuildingBlockProgress {percentage}\n                ... on BuildingBlockImage {alt_text title_text images { conversion url full_url mime_type } responsive_images { input_key url }}\n            }\n        }}\n"]);return V=function(){return e},e}var L,F,A=k()(V());!function(e){e.paragraph="BuildingBlockParagraph",e.question="BuildingBlockQuestion",e.radio="BuildingBlockRadio",e.submit="BuildingBlockSubmit",e.textfield="BuildingBlockTextfield",e.button="BuildingBlockButton",e.title="BuildingBlockTitle",e.back="BuildingBlockBack",e.progress="BuildingBlockProgress",e.image="BuildingBlockImage",e.message="BuildingBlockMessage"}(L||(L={})),function(e){e.form="form",e.context="context"}(F||(F={}));var H,q,M,z=function(e,t){return e.filter((function(e){return e&&e.input_type&&t.includes(e.input_type)}))},Q=function(e,t){return function(e,t,n){return{input_key:e,input_value:t,input_type:n}}(e,t,F.context)},$=n(82),K=n.n($),U=function(e){var t=e.title;return l.createElement("h1",{className:K.a.title},t)},W=n(47),J=n.n(W),Z=n(83),Y=n.n(Z),X=function(e){var t=e.markdown,n=e.type;return l.createElement("div",{className:Y.a[n]},l.createElement(J.a,{source:t}))},ee=n(58),te=n.n(ee),ne=function(e){var t=e.markdown,n=D(),r=Object(G.a)(n,1)[0].currentInputConditions.reduce((function(e,t){return t.input_value}),"");return l.createElement(l.Fragment,null,r&&l.createElement("div",{className:te.a.zipcode},r),l.createElement("div",{className:te.a.message},l.createElement(J.a,{source:t})))},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;return new Promise((function(t){return setTimeout(t,e)}))},ae=n(84);!function(e){e.onex="1x",e.twox="2x",e.threex="3x",e.original="original"}(H||(H={})),function(e){e.utm_campaign="utm_campaign"}(q||(q={})),function(e){e._gid="_gid"}(M||(M={}));var le,ie=[q.utm_campaign],ue=[H.onex,H.twox,H.threex],ce=[M._gid];!function(e){e.fcon="fcon",e.campaign="campaign",e.referrer="referrer"}(le||(le={}));var oe,se=function(){var e=function(){var e=window.location.search;return Object(ae.parse)(e.substring(1))}(),t=me();return Object.keys(e).map((function(n){return t.includes(n)||delete e[n],null})),e},me=function(){return ie},de=function(e){var t=[],n=String(e).match(/^(.*)fcon(.*)$/);if(n&&3===n.length){var r=Object(G.a)(n,3),a=r[1],l=r[2];return t.push(Q(le.campaign,a)),t.push(Q(le.fcon,l)),t}return[]},pe=function(e){return function(e){return e.replace(/\s/g,"").split(";").reduce((function(e,t){var n=t.split("="),r=Object(G.a)(n,2),a=r[0],l=r[1];return[].concat(Object(w.a)(e),[{key:a,value:l}])}),[])}(e).reduce((function(e,t){return ce.includes(t.key)&&(e=[].concat(Object(w.a)(e),[Q(t.key,t.value)])),e}),[])},ge=function(){return[].concat(Object(w.a)(document.cookie?pe(document.cookie):[]),Object(w.a)(document.referrer?(t=document.referrer,[Q(le.referrer,t)]):[]),Object(w.a)((e=se(),Object.keys(e).reduce((function(t,n){var r=[];if(n===q.utm_campaign){var a=de(String(e[n]));if(a.length)return[].concat(Object(w.a)(t),Object(w.a)(a))}return r.push(Q(n,String(e[n]))),[].concat(Object(w.a)(t),r)}),[]))));var e,t},_e=function(){var e=D(),t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.reduce((function(e,n){return e=[].concat(Object(w.a)(e),t?Object(w.a)(z(n.conditions,t)):Object(w.a)(n.conditions))}),[])}(Object(G.a)(e,1)[0].timeline,[F.form]),n=ge();return[].concat(Object(w.a)(t),Object(w.a)(n))},ke=n(11);!function(e){e.home="home",e.components="components",e.business="business",e.competition="competition",e.unknown="unknown"}(oe||(oe={}));var fe,ve=function(e){var t,n=(t={},Object(ke.a)(t,oe.home,Ee),Object(ke.a)(t,oe.components,be),Object(ke.a)(t,oe.competition,Be),Object(ke.a)(t,oe.business,ye),t);return Object.keys(n).reduce((function(t,r){return n[r](e)&&(t=r),t}),oe.unknown)},Ee=function(e){return!1},be=function(e){return!1},Be=function(e){return!1},ye=function(e){return e.reduce((function(e,t){return"16"===t.input_key&&"form"===t.input_type&&(e=!0),e}),!1)},he=n(85),Oe=n.n(he),we=function(e){var t,n=e.label,r=D(),a=Object(G.a)(r,2)[1],i=_e(),u=f.b(B,t),c=Object(G.a)(u,1)[0];return l.createElement("button",{className:Oe.a.button,type:"submit",onClick:function(e){re().then((function(){c({variables:{data:i}}).then((function(e){a({type:O.getResultPage,resultType:ve(i)})}))}))}},n,l.createElement("svg",{viewBox:"0 0 9.95 16.91"},l.createElement("path",{d:"M10,8.5,1.75.34A1,1,0,0,0,.34.35a1,1,0,0,0,0,1.41L7.16,8.5h0L.34,15.25a1,1,0,0,0,1.41,1.42L10,8.5Z",transform:"translate(-0.05 -0.05)"})))},je=n(51),xe=n.n(je);!function(e){e.button="button",e.list="list"}(fe||(fe={}));var Ne,Se,Ce=function(e){var t=e.input_key,n=e.type,r=e.label,a=e.output_conditions,i=e.eventHandler;return l.createElement("div",{className:xe.a[n]},l.createElement("input",{className:xe.a.input,id:t,type:"radio",name:t,value:t,onChange:function(){switch(n){case fe.button:re().then((function(){return i(a)}));break;case fe.list:i(a)}}}),l.createElement("label",{className:xe.a.label,htmlFor:t},r))},Te=n(48),Ie=n.n(Te),Pe=function(e){var t=e.label,n=e.type,r=e.eventHandler,a=e.output_conditions,i=D(),u=Object(G.a)(i,1)[0].currentInputConditions;return l.createElement("button",{className:Ie.a[n],type:"button",onClick:function(){return re().then((function(){var e=[].concat(Object(w.a)(u.length?u:[]),Object(w.a)(a.length?a:[]));if(e.length)return r(e)}))}},t)},Re=n(86),De=n.n(Re),Ge=function(e){var t=e.text;return l.createElement("h2",{className:De.a.question},t)},Ve=n(18),Le=n.n(Ve),Fe=n(59),Ae=n.n(Fe);!function(e){e.zipcode="zipcode",e.phonenumber="phonenumber",e.unknown="unknown"}(Ne||(Ne={})),function(e){e.number="number",e.tel="tel"}(Se||(Se={}));var He,qe=function(e){var t,n=e.input_key,r=e.sticky,a=e.type,i=e.placeholder,u=e.eventHandler,c=Le()(Ae.a.textfield,Object(ke.a)({},Ae.a.textfieldNotSticky,r)),o=(t={},Object(ke.a)(t,Ne.phonenumber,Se.tel),Object(ke.a)(t,Ne.zipcode,Se.number),Object(ke.a)(t,Ne.unknown,a),t),s=o[a]||o[Ne.unknown];return l.createElement("div",{className:c},l.createElement("input",{type:s,placeholder:i,id:n,name:n,onChange:function(e){u([{input_key:n,input_value:e.target.value,input_type:F.form}])}}))},Me=function(e){var t=e.eventHandler;return l.createElement("button",{className:Ie.a.back,type:"button",onClick:t},l.createElement("svg",{viewBox:"0 0 9.95 16.91"},l.createElement("path",{d:"M10,8.5,1.75.34A1,1,0,0,0,.34.35a1,1,0,0,0,0,1.41L7.16,8.5h0L.34,15.25a1,1,0,0,0,1.41,1.42L10,8.5Z",transform:"translate(-0.05 -0.05)"})))},ze=n(60),Qe=n.n(ze),$e=function(e){var t=e.percentage,n={width:"".concat(t,"%")};return l.createElement("div",{className:Qe.a.Progress},l.createElement("div",{className:Qe.a.ProgressCurrent,style:n}))};!function(e){e.jpg="image/jpeg",e.png="image/png",e.svg="image/svg+xml",e.unknown="unknown"}(He||(He={}));var Ke,Ue=n(42),We=n.n(Ue),Je=function(e){var t=e.images,n=e.title_text,r=e.alt_text,a=He.unknown,i="",u=t.reduce((function(e,t){return a=t.mime_type,t.conversion===H.onex&&(i=t.full_url),ue.includes(t.conversion)&&(e="".concat(e," ").concat(t.full_url," ").concat(t.conversion,",")),a===He.svg&&t.conversion===H.original&&(e=t.full_url),e}),"");switch(a){case He.svg:return l.createElement("div",{className:We.a.imageBlock},l.createElement("object",{className:We.a.image,type:"image/svg+xml","aria-label":r,data:u}));default:return l.createElement("div",{className:We.a.imageBlock},l.createElement("picture",{className:We.a.image},l.createElement("source",{srcSet:u}),l.createElement("img",{src:i,alt:r,title:n})))}};!function(e){e[e.unknown=0]="unknown",e[e.valueChanged=1]="valueChanged",e[e.valueSubmitted=2]="valueSubmitted",e[e.optionSelected=3]="optionSelected",e[e.wantedToGoBack=4]="wantedToGoBack"}(Ke||(Ke={}));var Ze=function(e){var t,n=e.__typename,r=e.dispatch,a=(t={},Object(ke.a)(t,Ke.unknown,Ke.unknown),Object(ke.a)(t,L.radio,Ke.optionSelected),Object(ke.a)(t,L.button,Ke.valueSubmitted),Object(ke.a)(t,L.back,Ke.wantedToGoBack),Object(ke.a)(t,L.textfield,Ke.valueChanged),t);switch(a[n]||a[Ke.unknown]){case Ke.optionSelected:return function(e){return r({type:O.addToTimeline,conditions:e})};case Ke.valueChanged:return function(e){return r({type:O.updateCurrentInputConditions,conditions:e})};case Ke.valueSubmitted:return function(e){return r({type:O.addToTimeline,conditions:e})};case Ke.wantedToGoBack:return function(){return r({type:O.removeLastFromTimeline})}}return null},Ye=function(e){var t=e.type,n=e.data,r=e.prefetchStep,a=D(),i=Object(G.a)(a,2)[1];switch(Object(l.useEffect)((function(){r(Object(j.a)({blockType:t},n))}),[t,n,r]),t){case L.back:return l.createElement(Me,{eventHandler:Ze(Object(j.a)({},n,{dispatch:i}))});case L.progress:return l.createElement($e,n);case L.question:return l.createElement(Ge,n);case L.title:return l.createElement(U,n);case L.paragraph:return l.createElement(X,n);case L.radio:return l.createElement(Ce,Object.assign({},n,{eventHandler:Ze(Object(j.a)({},n,{dispatch:i}))}));case L.message:return l.createElement(ne,n);case L.button:return l.createElement(Pe,Object.assign({},n,{eventHandler:Ze(Object(j.a)({},n,{dispatch:i}))}));case L.textfield:return l.createElement(qe,Object.assign({},n,{eventHandler:Ze(Object(j.a)({},n,{dispatch:i}))}));case L.submit:return l.createElement(we,n);case L.image:return l.createElement(Je,n);default:return null}},Xe=n(50),et=n(87),tt=n.n(et),nt=function(e){var t=e.id,n=e.children,r=Object(s.b)(),a=l.createRef();l.useLayoutEffect((function(){a.current&&Xe.a.fromTo(a.current,{opacity:0},{opacity:1,duration:.5})}),[a]);var i=Object(l.useCallback)((function(e){var n=e.output_conditions,a=e.blockType,l=[L.radio];n&&l.includes(a)&&r.query({query:A,variables:{step_id:String(t),conditions:C(z(n,[F.form]))}})}),[t,r]);return l.createElement(l.Fragment,null,l.createElement("div",{className:tt.a.step,ref:a},n&&n.map((function(e,n){return!!e&&l.createElement(l.Fragment,{key:"".concat(t,"-").concat(n)},l.createElement(Ye,{type:e.__typename,data:e,prefetchStep:i}))}))))},rt=n(88),at=n.n(rt),lt=function(){var e=l.createRef();return l.useLayoutEffect((function(){e.current&&Xe.a.fromTo(e.current,{opacity:0},{opacity:1,duration:.3,delay:.6})}),[e]),l.createElement("div",{className:at.a.loader,ref:e},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},l.createElement("path",{fill:"#DCDDDE",d:"M50,25.56a24.44,24.44,0,0,0-1.54,48.83A24,24,0,0,0,66.63,67.8,24.46,24.46,0,0,0,50,25.56"}),l.createElement("path",{fill:"#DCDDDE",d:"M67.44,68.88a25.36,25.36,0,0,1-17.56,7q-.83,0-1.65-.06a25.76,25.76,0,1,1,19.21-7ZM82.92,24A24.32,24.32,0,0,1,64.37,10.41a15.85,15.85,0,0,0-28.7,0A24.3,24.3,0,0,1,17.12,24,16,16,0,0,0,8.24,51.45,25.09,25.09,0,0,1,15.33,73.7C13,87,26.81,97.14,38.56,90.76a24,24,0,0,1,22.92,0C73.23,97.14,87.08,87,84.72,73.7c-1.11-6.2-.63-14.94,7-22.13C101.41,42.35,96.15,25.87,82.92,24Z"})))},it=function(){var e,t=D(),n=Object(G.a)(t,2),r=n[0],a=r.timeline,i=r.currentStep,u=n[1],c=N(a)||{step:{step_id:null,render_type:""},conditions:[]},o=(e={variables:{step_id:String(c.step.step_id),conditions:c.conditions},errorPolicy:"all"},f.c(h,e)),s=o.data,m=o.loading;if(Object(l.useEffect)((function(){if(s){var e=s.GetNextStep;e!==i&&u({type:O.setCurrentStep,step:e})}}),[a,s,i,u]),!c)return null;var d=s&&s.GetNextStep;return l.createElement(l.Fragment,null,(!s||m)&&l.createElement(lt,null),!m&&d&&l.createElement(nt,{key:Number(d.step_id),id:Number(d.step_id)},d.buildingblocks))},ut=n(89),ct=n.n(ut),ot=n(3),st=n.n(ot),mt=function(){var e=Le()(st.a.row,st.a.hero),t=Le()(st.a.row,st.a.usp),n=Le()(st.a.row,st.a.rowGrey),r=Le()(st.a.row,st.a.rowGreyDark),a=Le()(st.a.row,st.a.rowGrey,st.a.tp);return l.createElement("div",{className:st.a.result},l.createElement("div",{className:e},l.createElement("div",null,l.createElement("h4",null,"Anbefalingen til dig:"),l.createElement("h1",null,"Verisure Home")),l.createElement("img",{src:ct.a,alt:"Verisure Home"})),l.createElement("div",{className:t},l.createElement("h4",null,"Sikrer dit hjem mod"),l.createElement("div",{className:st.a.col3},l.createElement("div",{className:st.a.uspBreakin},"Indbrud"),l.createElement("div",{className:st.a.uspFire},"Brand"),l.createElement("div",{className:st.a.uspAssault},"Overfald"))),l.createElement("div",{className:n},l.createElement("h2",null,"Alarmpakken til dig"),l.createElement("p",null,"Med Verisure Home f\xe5r du en effektiv d\xf8gnoverv\xe5get tyveri- og brandalarm."),l.createElement("p",null,"Kameraoverv\xe5gning, overfaldsalarm og tovejskommunikation med direkte forbindelse til Verisures vagtcentral sikrer dig lynhurtig og professionel assistance, hvis uheldet er ude."),l.createElement("h3",null,"Alarmpakken indeholder:"),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"Vibrationssensor"),l.createElement("td",null,"2 stk.")),l.createElement("tr",null,l.createElement("td",null,"Fotodetektor"),l.createElement("td",null,"1 stk.")),l.createElement("tr",null,l.createElement("td",null,"Verisure Portal"),l.createElement("td",null,"1 stk.")),l.createElement("tr",null,l.createElement("td",null,"R\xf8galarm"),l.createElement("td",null,"2 stk.")),l.createElement("tr",null,l.createElement("td",null,"Alarmskilt"),l.createElement("td",null,"10 stk.")),l.createElement("tr",null,l.createElement("td",null,"Verisure app"),l.createElement("td",null)))),l.createElement("h3",null,"Pris:"),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"Abonnement:"),l.createElement("td",null,"349 kr./md.")),l.createElement("tr",null,l.createElement("td",null,"Installation:"),l.createElement("td",null,"100 kr.md. de f\xf8rste 60 md.")),l.createElement("tr",null,l.createElement("td",null,"Oprettelse:"),l.createElement("td",null,"3.995 kr.")),l.createElement("tr",null,l.createElement("td",null,"PBS-gebyr:"),l.createElement("td",null,"9,75 kr./md.")))),l.createElement("p",null,"Pris f\xf8rste m\xe5ned er 4.453,75 kr., hvorefter den falder til 358,75 kr./md."),l.createElement("p",null,"Der er 14 dages fortrydelsesret efter aftalens indg\xe5else."),l.createElement("p",null,"Kreditgodkendelse foruds\xe6ttes.")),l.createElement("div",{className:st.a.row},l.createElement("h3",null,"Verisure Home"),l.createElement("ul",null,l.createElement("li",null,"Fotosensor"),l.createElement("li",null,"Brandalarm med billedverifikation"),l.createElement("li",null,"\xc5bningskontakter med vibrationsdetektor"),l.createElement("li",null,"Overfaldsalarm via portal"),l.createElement("li",null,"Direkte tovejskommunikation via portal"),l.createElement("li",null,"Hel eller delvis tilkobling af systemet uanset om du er ude eller hjemme"),l.createElement("li",null,"Professionel installation"),l.createElement("li",null,"GSM- og bredb\xe5ndsforbindelse til kontrolcentral"),l.createElement("li",null,"D\xf8gnoverv\xe5gning og vagtudrykning"),l.createElement("li",null,"Gratis app"),l.createElement("li",null,"Ingen bindingsperiode"))),l.createElement("div",{className:r},l.createElement("h1",null,"Som Verisure-kunde f\xe5r du:"),l.createElement("ul",{className:st.a.specilList},l.createElement("li",null,l.createElement("strong",null,"73 %")," lavere risiko for indbrud"),l.createElement("li",null,"D\xf8gnoverv\xe5gning fra ",l.createElement("strong",null,"politigodkendt")," kontrolcentral"),l.createElement("li",null,l.createElement("strong",null,"Gratis")," vagtudrykning d\xf8gnet rundt"),l.createElement("li",null,"Op til ",l.createElement("strong",null,"7.200 kr.")," i h\xe5ndv\xe6rkerfradrag"))),l.createElement("div",{className:a},l.createElement("h1",null,"Det siger kunderne om verisure")))},dt=n(12),pt=n.n(dt),gt=function(){var e=Le()(st.a.row,st.a.hero),t=Le()(st.a.row,st.a.rowGrey),n=Le()(st.a.row,st.a.rowGreyDark),r=Le()(st.a.row,st.a.rowGrey,st.a.tp);return l.createElement("div",{className:st.a.result},l.createElement("div",{className:e},l.createElement("div",null,l.createElement("h4",{className:st.a.red},"Dit resultat:"),l.createElement("h1",null,"Pris inkl. fri vagtudrykning",l.createElement("br",null),"Fra 349kr./m\xe5ned"),l.createElement("p",null,"Hertil kommer fradragsberettigede installationsomkostninger og oprettelsesgebyr."))),l.createElement("div",{className:t},l.createElement("h2",null,"Dit resultat af alarmtesten"),l.createElement("p",null,"Kombinationen af dine svar i alarmtesten g\xf8r, at flere af vores alarml\xf8sninger vil kunne passe til dig. Derfor viser vi ikke en specifik pakke her. I stedet kan du nedenfor se de komponenter, vi som udgangspunkt vil anbefale dig, at dit alarmsystem omfatter. Antallet af komponenter afh\xe6nger af dit hjems st\xf8rrelse, plantegning og indretning."),l.createElement("p",null,"Det er vigtigt for os, at alarmsystemet passer pr\xe6cist til dit hjem og dine \xf8nsker. Derved opn\xe5r du nemlig den h\xf8jeste grad af sikkerhed, tryghed og tilfredshed. Vi ringer derfor snart til dig med uddybende sp\xf8rgsm\xe5l om din bolig og dine behov, s\xe5 vi sammen kan komme n\xe6rmere den bedste l\xf8sning til dig.")),l.createElement("div",{className:t},l.createElement("h3",null,"Anbefalede alarmkomponenter"),l.createElement("ul",{className:st.a.productList},l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Cantralenhed"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Verisure Portal"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Vibrationsdetektor"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Fotosensor"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Alarmskilt"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"R\xf8galarm"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Smartplug"))),l.createElement("div",{className:st.a.row},l.createElement("h3",null,"Derudover b\xf8r du overveje"),l.createElement("ul",{className:st.a.productList},l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Night Control overfaldsalarm"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Indend\xf8rs videooverv\xe5gning"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Udend\xf8rs videooverv\xe5gning"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"SmartCam overv\xe5gningskamera"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"R\xf8gkanon til t\xe5gesikring"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Vandalarm"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Klimasensor"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Yale Doorman d\xf8rl\xe5s"),l.createElement("li",null,l.createElement("div",{className:st.a.productImage},l.createElement("img",{src:pt.a,alt:"Verisure"})),"Sirene"))),l.createElement("div",{className:n},l.createElement("h1",null,"Som Verisure-kunde f\xe5r du:"),l.createElement("ul",{className:st.a.specilList},l.createElement("li",null,l.createElement("strong",null,"73 %")," lavere risiko for indbrud"),l.createElement("li",null,"D\xf8gnoverv\xe5gning fra ",l.createElement("strong",null,"politigodkendt")," kontrolcentral"),l.createElement("li",null,l.createElement("strong",null,"Gratis")," vagtudrykning d\xf8gnet rundt"),l.createElement("li",null,"Op til ",l.createElement("strong",null,"7.200 kr.")," i h\xe5ndv\xe6rkerfradrag"))),l.createElement("div",{className:r},l.createElement("h1",null,"Det siger kunderne om verisure")))},_t=function(e){switch(e.type){case oe.home:return l.createElement(mt,null);case oe.components:return l.createElement(gt,null);case oe.business:return alert(" I am business result page"),l.createElement(mt,null);case oe.competition:return alert(" I am competition result page"),l.createElement(mt,null);case oe.unknown:default:return l.createElement(mt,null)}},kt=function(e){var t=e.firstStep,n=D(),r=Object(G.a)(n,1)[0],a=r.timeline,i=r.resultPageType;return l.createElement(l.Fragment,null,!i&&0===a.length&&t&&l.createElement(nt,{id:Number(t.step_id)},t.buildingblocks),!i&&a.length>=1&&l.createElement(it,null),i&&l.createElement(_t,{type:i}))},ft=function(e){var t=e.firstStep,n=D(),r=Object(G.a)(n,2)[1];return Object(l.useEffect)((function(){t&&(r({type:O.setCurrentStep,step:t}),r({type:O.addGlobalConditions,conditions:ge()}))}),[t,r]),l.createElement(l.Fragment,null,l.createElement(kt,{firstStep:t}))},vt=function(){var e,t=ge(),n=(e={variables:{conditions:t}},f.c(y,e)),r=n.data;return n.loading?i.a.createElement(lt,null):r?i.a.createElement(R,null,i.a.createElement("div",{className:"App"},i.a.createElement(ft,{firstStep:r.GetFlow}))):null};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GRAPHQL_ENDPOINT:"http://sdapi.docker.localhost/graphql"}));var Et=new m.a({cache:new d.a(p),uri:"http://sdapi.docker.localhost/graphql"});c.a.render(i.a.createElement(o.a,{client:Et},i.a.createElement(s.a,{client:Et},i.a.createElement(vt,null))),document.getElementById("root"))},3:function(e,t,n){e.exports={result:"Result_result__bzLfj",specilList:"Result_specilList__e1I-R",productList:"Result_productList__1UGug",productImage:"Result_productImage__XTNfN",row:"Result_row__Vsz1i",hero:"Result_hero__1jJfz",usp:"Result_usp__1j0PU",uspBreakin:"Result_uspBreakin__3VqbZ",uspFire:"Result_uspFire__3uFsP",uspAssault:"Result_uspAssault__1dQ_R",tp:"Result_tp__3KwhY",rowGrey:"Result_rowGrey__3o80v",rowGreyDark:"Result_rowGreyDark__3PQ42",col3:"Result_col3__1Li1B",red:"Result_red__O9BiP"}},42:function(e,t,n){e.exports={imageBlock:"Image_imageBlock__3zDpk",image:"Image_image__1k372"}},48:function(e,t,n){e.exports={primary:"Button_primary__2ZjcM",secondary:"Button_secondary__1tm6o",back:"Button_back__Jazp8"}},51:function(e,t,n){e.exports={input:"RadioButton_input__PWZz6",button:"RadioButton_button__28NH5",label:"RadioButton_label__qcB7W",list:"RadioButton_list__1t486",slider:"RadioButton_slider__3qH5C"}},58:function(e,t,n){e.exports={message:"Message_message__1NuUO",zipcode:"Message_zipcode__30JFa"}},59:function(e,t,n){e.exports={textfield:"TextField_textfield__1USm_"}},60:function(e,t,n){e.exports={Progress:"Progress_Progress__2wMGn",ProgressCurrent:"Progress_ProgressCurrent__1wduK"}},77:function(e){e.exports=JSON.parse('{"possibleTypes":{"BuildingBlockable":["BuildingBlockParagraph","BuildingBlockTitle","BuildingBlockSubmit","BuildingBlockTextfield","BuildingBlockRadio","BuildingBlockButton","BuildingBlockQuestion","BuildingBlockBack","BuildingBlockProgress","BuildingBlockImage","BuildingBlockMessage"],"BuildingBlock":["BuildingBlockParagraph","BuildingBlockTitle","BuildingBlockSubmit","BuildingBlockTextfield","BuildingBlockRadio","BuildingBlockButton","BuildingBlockQuestion","BuildingBlockBack","BuildingBlockProgress","BuildingBlockImage","BuildingBlockMessage"]}}')},82:function(e,t,n){e.exports={title:"Title_title__3JGDv"}},83:function(e,t,n){e.exports={paragraph:"Paragraph_paragraph__3_E2D",quote:"Paragraph_quote__1xFu7",checkboxed:"Paragraph_checkboxed__1nxbL"}},85:function(e,t,n){e.exports={button:"SubmitButton_button__QdroQ"}},86:function(e,t,n){e.exports={question:"Question_question__jNMHl"}},87:function(e,t,n){e.exports={step:"Step_step__5edtl"}},88:function(e,t,n){e.exports={loader:"Loader_loader__lzqSF",rotating:"Loader_rotating__3wagq"}},89:function(e,t,n){e.exports=n.p+"static/media/verisure-home.0ae190ad.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.e01161f4.chunk.js.map