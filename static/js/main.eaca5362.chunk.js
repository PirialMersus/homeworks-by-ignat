(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{12:function(e,t,n){e.exports={commonInputClass:"SuperInputText_commonInputClass__3UUhh",superInput:"SuperInputText_superInput__2LhrV",errorInput:"SuperInputText_errorInput__3Wp5Z",error:"SuperInputText_error__1bT_o"}},14:function(e,t,n){e.exports={buttonsCommonClass:"SuperButton_buttonsCommonClass__1mc9e",blink:"SuperButton_blink__TVwYQ",red:"SuperButton_red__1Q5nN"}},15:function(e,t,n){e.exports={container:"Greeting_container__1jJke",inputContainer:"Greeting_inputContainer__tebZo",error:"Greeting_error__3-_Zr"}},16:function(e,t,n){e.exports={blue:"HW4_blue__1vrh3",column:"HW4_column__38v5m",testSpanError:"HW4_testSpanError__1mQo1"}},21:function(e,t,n){e.exports={customCheckbox:"SuperCheckbox_customCheckbox__3Ds3C"}},25:function(e,t,n){e.exports={App:"App_App__7lniK"}},27:function(e,t,n){e.exports={classHeader:"HW5_classHeader__2PlZN",shake:"HW5_shake__3SKTD"}},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),s=n.n(a),i=(n(33),n(25)),o=n.n(i),j=n(7),l=n(0);var u=function(e){var t=e.className;return Object(l.jsxs)("div",{className:t,children:[Object(l.jsx)(j.b,{to:"/pre-jun",activeClassName:"selected",children:"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430"}),Object(l.jsx)(j.b,{to:"/junior",activeClassName:"selected",children:"\u0414\u0436\u0443\u043d\u0438\u043e\u0440"}),Object(l.jsx)(j.b,{to:"/junior-plus",activeClassName:"selected",children:"\u0414\u0436\u0443\u043d +"})]})},d=n(2),b=n(6),h=n.n(b);var m=function(e){return Object(l.jsx)("div",{className:h.a.messageWrap,children:Object(l.jsxs)("div",{className:h.a.message,children:[Object(l.jsx)("div",{className:h.a.icon,children:Object(l.jsx)("img",{src:"https://www.theplace.ru/cache/archive/arnold_schwarzenegger/img/3(60)-gthumb-gwdata600-ghdata400-gfitdatamax.jpg",alt:"ava"})}),Object(l.jsx)("div",{className:h.a.angle}),Object(l.jsxs)("div",{className:h.a.messageContent,children:[Object(l.jsxs)("div",{className:h.a.namePlusMessage,children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("p",{children:e.message})]}),Object(l.jsx)("div",{className:h.a.time,children:Object(l.jsx)("span",{children:e.time})})]})]})})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",p="some text",f="22:00";var _=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)(m,{avatar:x,name:O,message:p,time:f}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},v=n(5),g=n(8),C=n(9),k=n(14),N=n.n(k),w=function(e){var t=e.red,n=e.className,r=Object(C.a)(e,["red","className"]),c="".concat(t?N.a.red:N.a.default," ").concat(n," ").concat(N.a.buttonsCommonClass);return Object(l.jsx)("button",Object(g.a)({className:c},r))};var S=function(e){return Object(l.jsxs)("div",{children:[e.affair.name,Object(l.jsx)(w,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(l.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)(w,{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)(w,{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)(w,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)(w,{onClick:function(){e.setFilter("low")},children:"Low"})]})},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(r.useState)(T),t=Object(v.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(v.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},A=n(28),H=n(42),M=n(15),W=n.n(M),E=n(12),U=n.n(E),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(C.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),u="".concat(U.a.commonInputClass," ").concat(a?U.a.errorInput:U.a.superInput," ").concat(s||"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(g.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},F=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=c?W.a.error:"";return Object(l.jsxs)("div",{className:W.a.container,children:[Object(l.jsxs)("div",{className:W.a.inputContainer,children:[Object(l.jsx)(P,{value:t,onChange:n,className:s}),c&&Object(l.jsx)("p",{children:c})]}),Object(l.jsx)(w,{onClick:r,children:"add"}),Object(l.jsx)("span",{children:a})]})},B=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(v.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),u=j[0],d=j[1],b=t.length;return Object(l.jsx)(F,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;d(""),i(t)},addUser:function(){if(!s||0===s.trim().length)return i(""),void d("User's name cant be empty");alert("Hello, ".concat(s,"!")),n(s),i(""),d("")},error:u,totalUsers:b})};var J=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};c([t].concat(Object(A.a)(n)))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},K=n(16),Z=n.n(K),G=n(21),D=n.n(G),L=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(C.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(r||"");return Object(l.jsxs)("label",{className:D.a.customCheckbox,children:[Object(l.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.target.checked)},className:s},a)),Object(l.jsx)("span",{className:D.a.spanClassName,children:c})]})};var Q=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:Z.a.column,children:[Object(l.jsx)(P,{value:n,onChangeText:c,onEnter:s,error:a,spanClassName:Z.a.testSpanError}),Object(l.jsx)(P,{className:Z.a.blue}),Object(l.jsx)(w,{children:"default"}),Object(l.jsx)(w,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(w,{disabled:!0,children:"disabled"}),Object(l.jsx)(L,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(L,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var V=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(_,{}),Object(l.jsx)(I,{}),Object(l.jsx)(J,{}),Object(l.jsx)(Q,{})]})},X=n.p+"static/media/error_404.cf2cc339.jpeg";var Y=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("img",{style:{width:"100%"},src:X,alt:"404 not found"})})})};var q=function(){return Object(l.jsx)("div",{children:"Junior page"})};var z=function(){return Object(l.jsx)("div",{children:"Junior plus"})},R="/pre-jun",$="/junior",ee="/junior-plus";var te=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(d.a,{to:R})}}),Object(l.jsx)(d.b,{path:R,exact:!0,render:function(){return Object(l.jsx)(V,{})}}),Object(l.jsx)(d.b,{path:$,exact:!0,render:function(){return Object(l.jsx)(q,{})}}),Object(l.jsx)(d.b,{path:ee,exact:!0,render:function(){return Object(l.jsx)(z,{})}}),Object(l.jsx)(d.b,{render:function(){return Object(l.jsx)(Y,{})}})]})})},ne=n(27),re=n.n(ne);var ce=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{className:re.a.classHeader}),Object(l.jsx)(te,{})]})})};var ae=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={message:"Message_message__3jX68",icon:"Message_icon__2DZH0",angle:"Message_angle__2uk7x",messageContent:"Message_messageContent__2ETAV",namePlusMessage:"Message_namePlusMessage__luAti",time:"Message_time__1KOLj"}}},[[40,1,2]]]);
//# sourceMappingURL=main.eaca5362.chunk.js.map