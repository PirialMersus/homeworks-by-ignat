(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__3jX68",icon:"Message_icon__2DZH0",angle:"Message_angle__2uk7x",messageContent:"Message_messageContent__2ETAV",namePlusMessage:"Message_namePlusMessage__luAti",time:"Message_time__1KOLj"}},,function(e,t,n){e.exports={commonInputClass:"SuperInputText_commonInputClass__3UUhh",superInput:"SuperInputText_superInput__2LhrV",errorInput:"SuperInputText_errorInput__3Wp5Z",error:"SuperInputText_error__1bT_o"}},,,,function(e,t,n){e.exports={header:"Header_header__111PL",menuButton:"Header_menuButton__Kciae",shake:"Header_shake__33TqX"}},function(e,t,n){e.exports={buttonsCommonClass:"SuperButton_buttonsCommonClass__1mc9e",blink:"SuperButton_blink__TVwYQ",red:"SuperButton_red__1Q5nN"}},function(e,t,n){e.exports={container:"Greeting_container__1jJke",inputContainer:"Greeting_inputContainer__tebZo",error:"Greeting_error__3-_Zr"}},function(e,t,n){e.exports={blue:"HW4_blue__1vrh3",column:"HW4_column__38v5m",testSpanError:"HW4_testSpanError__1mQo1"}},,,,,function(e,t,n){e.exports={customCheckbox:"SuperCheckbox_customCheckbox__3Ds3C"}},,,,function(e,t,n){e.exports={App:"App_App__7lniK"}},,function(e,t,n){e.exports={spanClass:"SuperEditableSpan_spanClass__2Rkzs"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(25),s=n.n(r),o=(n(34),n(26)),i=n.n(o),j=n(9),l=n(3),u=n(14),b=n.n(u),d=n(0);var h=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],s="".concat(b.a.header," ").concat(a&&b.a.active);return Object(d.jsxs)("div",{className:s,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:"/pre-jun",activeClassName:"selected",children:"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430"}),Object(d.jsx)(j.b,{to:"/junior",activeClassName:"selected",children:"\u0414\u0436\u0443\u043d\u0438\u043e\u0440"}),Object(d.jsx)(j.b,{to:"/junior-plus",activeClassName:"selected",children:"\u0414\u0436\u0443\u043d +"})]}),Object(d.jsx)("div",{onClick:function(){r(!a)},className:b.a.menuButton,children:Object(d.jsx)("span",{})})]})},O=n(2),x=n(8),m=n.n(x);var p=function(e){return Object(d.jsx)("div",{className:m.a.messageWrap,children:Object(d.jsxs)("div",{className:m.a.message,children:[Object(d.jsx)("div",{className:m.a.icon,children:Object(d.jsx)("img",{src:"https://www.theplace.ru/cache/archive/arnold_schwarzenegger/img/3(60)-gthumb-gwdata600-ghdata400-gfitdatamax.jpg",alt:"ava"})}),Object(d.jsx)("div",{className:m.a.angle}),Object(d.jsxs)("div",{className:m.a.messageContent,children:[Object(d.jsxs)("div",{className:m.a.namePlusMessage,children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("p",{children:e.message})]}),Object(d.jsx)("div",{className:m.a.time,children:Object(d.jsx)("span",{children:e.time})})]})]})})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",g="some text",_="22:00";var C=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(p,{avatar:v,name:f,message:g,time:_}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},k=n(5),N=n(4),S=n(15),w=n.n(S),y=function(e){var t=e.red,n=e.className,c=Object(N.a)(e,["red","className"]),a="".concat(t?w.a.red:w.a.default," ").concat(n," ").concat(w.a.buttonsCommonClass);return Object(d.jsx)("button",Object(k.a)({className:a},c))};var I=function(e){return Object(d.jsxs)("div",{children:[e.affair.name,Object(d.jsx)(y,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(d.jsx)(I,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(y,{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(y,{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(y,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(y,{onClick:function(){e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(c.useState)(A),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(l.a)(r,2),o=s[0],i=s[1],j=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,o);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(T,{data:j,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},B=n(29),F=n(43),M=n(16),P=n.n(M),H=n(10),U=n.n(H),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(o||""),l="".concat(U.a.commonInputClass," ").concat(r?U.a.errorInput:U.a.superInput," ").concat(s||U.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:l},i)),r&&Object(d.jsx)("span",{className:j,children:r})]})},J=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=a?P.a.error:"";return Object(d.jsxs)("div",{className:P.a.container,children:[Object(d.jsxs)("div",{className:P.a.inputContainer,children:[Object(d.jsx)(W,{value:t,onChange:n,className:s}),a&&Object(d.jsx)("p",{children:a})]}),Object(d.jsx)(y,{onClick:c,children:"add"}),Object(d.jsx)("span",{children:r})]})},K=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(l.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),j=Object(l.a)(i,2),u=j[0],b=j[1],h=t.length;return Object(d.jsx)(J,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;b(""),o(t)},addUser:function(){if(!s||0===s.trim().length)return o(""),void b("User's name cant be empty");alert("Hello, ".concat(s,"!")),n(s),o(""),b("")},error:u,totalUsers:h})};var D=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(K,{users:n,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};a([t].concat(Object(B.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Z=n(17),G=n.n(Z),L=n(22),X=n.n(L),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(c||"");return Object(d.jsxs)("label",{className:X.a.customCheckbox,children:[Object(d.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.target.checked)},className:s},r)),Object(d.jsx)("span",{className:X.a.spanClassName,children:a})]})};var Q=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),i=Object(l.a)(o,2),j=i[0],u=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(W,{value:n,onChangeText:a,onEnter:s,error:r,spanClassName:G.a.testSpanError}),Object(d.jsx)(W,{className:G.a.blue}),Object(d.jsx)(y,{children:"default"}),Object(d.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(y,{disabled:!0,children:"disabled"}),Object(d.jsx)(z,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(z,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},V=n(28),q=n.n(V),R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(l.a)(s,2),i=o[0],j=o[1],u=a||{},b=u.children,h=u.onDoubleClick,O=u.className,x=Object(N.a)(u,["children","onDoubleClick","className"]),m="".concat(q.a.spanClass," ").concat(O);return Object(d.jsx)(d.Fragment,{children:i?Object(d.jsx)(W,Object(k.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(k.a)(Object(k.a)({onDoubleClick:function(e){j(!0),h&&h(e)},className:m},x),{},{children:["\u270e",b||r.value]}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}Y("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(R,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(y,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(d.jsx)(y,{onClick:function(){var e=$("editable-span-value","");a(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(E,{}),Object(d.jsx)(D,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(ee,{})]})},ne=n.p+"static/media/error_404.cf2cc339.jpeg";var ce=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"100%"},src:ne,alt:"404 not found"})})})},ae=function(e){var t=e.options,n=e.value,c=(e.onChange,e.onChangeOption),a=Object(N.a)(e,["options","value","onChange","onChangeOption"]),r=null===t||void 0===t?void 0:t.map((function(e,t){return e?Object(d.jsx)("option",{value:e,children:e},t):Object(d.jsx)("option",{children:"\u041d\u0435 \u0438\u0437 \u0447\u0435\u0433\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c"})}));return Object(d.jsx)("select",Object(k.a)(Object(k.a)({onChange:function(e){t&&c&&c(e.target.value)}},a),{},{value:n,children:r}))},re=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=(e.onChange,e.onChangeOption),r=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){n&&a&&a(n[Number(e.target.value)])}),s=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{name:t,type:"radio",checked:c===e,value:n,onChange:r}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:s})},se=["x","y","z"];var oe=function(){var e=Object(c.useState)(se[0]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ae,{options:se,value:n,onChangeOption:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(re,{name:"radio",options:se,value:n,onChangeOption:a})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ie=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Junior"}),Object(d.jsx)(oe,{})]})};var je=function(){return Object(d.jsx)("div",{children:"Junior plus"})},le="/pre-jun",ue="/junior",be="/junior-plus";var de=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:[Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:le})}}),Object(d.jsx)(O.b,{path:le,exact:!0,render:function(){return Object(d.jsx)(te,{})}}),Object(d.jsx)(O.b,{path:ue,exact:!0,render:function(){return Object(d.jsx)(ie,{})}}),Object(d.jsx)(O.b,{path:be,exact:!0,render:function(){return Object(d.jsx)(je,{})}}),Object(d.jsx)(O.b,{render:function(){return Object(d.jsx)(ce,{})}})]})})};var he=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(de,{})]})})};var Oe=function(){return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)("h1",{children:"react homeworks:"}),Object(d.jsx)(he,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.9c00f84b.chunk.js.map