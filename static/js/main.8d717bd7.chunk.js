(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__3jX68",icon:"Message_icon__2DZH0",angle:"Message_angle__2uk7x",messageContent:"Message_messageContent__2ETAV",namePlusMessage:"Message_namePlusMessage__luAti",time:"Message_time__1KOLj"}},,,,,function(e,t,n){e.exports={commonInputClass:"SuperInputText_commonInputClass__3UUhh",superInput:"SuperInputText_superInput__2LhrV",errorInput:"SuperInputText_errorInput__3Wp5Z",error:"SuperInputText_error__1bT_o"}},,,,,,,function(e,t,n){e.exports={header:"Header_header__111PL",menuButton:"Header_menuButton__Kciae",shake:"Header_shake__33TqX"}},function(e,t,n){e.exports={buttonsCommonClass:"SuperButton_buttonsCommonClass__1mc9e",blink:"SuperButton_blink__TVwYQ",red:"SuperButton_red__1Q5nN"}},function(e,t,n){e.exports={container:"Greeting_container__1jJke",inputContainer:"Greeting_inputContainer__tebZo",error:"Greeting_error__3-_Zr"}},function(e,t,n){e.exports={blue:"HW4_blue__1vrh3",column:"HW4_column__38v5m",testSpanError:"HW4_testSpanError__1mQo1"}},,,,,function(e,t,n){e.exports={customCheckbox:"SuperCheckbox_customCheckbox__3Ds3C"}},,function(e,t,n){e.exports={date_invisible:"HW9_date_invisible__hb5iQ",date_visible:"HW9_date_visible__rUDOe"}},,,function(e,t,n){e.exports={App:"App_App__7lniK"}},function(e,t,n){e.exports={spanClass:"SuperEditableSpan_spanClass__2Rkzs"}},,function(e,t,n){e.exports={peopleTable:"HW8_peopleTable__u3xmK"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),s=n.n(r),i=(n(41),n(33)),o=n.n(i),j=n(9),l=n(2),u=n(20),b=n.n(u),d=n(0);var h=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],s="".concat(b.a.header," ").concat(a&&b.a.active);return Object(d.jsxs)("div",{className:s,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:"/pre-jun",activeClassName:"selected",children:"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430"}),Object(d.jsx)(j.b,{to:"/junior",activeClassName:"selected",children:"\u0414\u0436\u0443\u043d\u0438\u043e\u0440"}),Object(d.jsx)(j.b,{to:"/junior-plus",activeClassName:"selected",children:"\u0414\u0436\u0443\u043d +"})]}),Object(d.jsx)("div",{onClick:function(){r(!a)},className:b.a.menuButton,children:Object(d.jsx)("span",{})})]})},O=n(3),x=n(8),p=n.n(x);var m=function(e){return Object(d.jsx)("div",{className:p.a.messageWrap,children:Object(d.jsxs)("div",{className:p.a.message,children:[Object(d.jsx)("div",{className:p.a.icon,children:Object(d.jsx)("img",{src:"https://www.theplace.ru/cache/archive/arnold_schwarzenegger/img/3(60)-gthumb-gwdata600-ghdata400-gfitdatamax.jpg",alt:"ava"})}),Object(d.jsx)("div",{className:p.a.angle}),Object(d.jsxs)("div",{className:p.a.messageContent,children:[Object(d.jsxs)("div",{className:p.a.namePlusMessage,children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("p",{children:e.message})]}),Object(d.jsx)("div",{className:p.a.time,children:Object(d.jsx)("span",{children:e.time})})]})]})})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",g="some text",_="22:00";var C=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(m,{avatar:v,name:f,message:g,time:_}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},k=n(4),N=n(5),S=n(21),w=n.n(S),y=function(e){var t=e.red,n=e.className,c=Object(N.a)(e,["red","className"]),a="".concat(t?w.a.red:w.a.default," ").concat(n," ").concat(w.a.buttonsCommonClass);return Object(d.jsx)("button",Object(k.a)({className:a},c))};var I=function(e){return Object(d.jsxs)("div",{children:[e.affair.name,Object(d.jsx)(y,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(d.jsx)(I,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(y,{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(y,{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(y,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(y,{onClick:function(){e.setFilter("low")},children:"Low"})]})},E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(c.useState)(E),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(l.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(T,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},L=n(12),B=n(50),H=n(22),M=n.n(H),F=n(13),W=n.n(F),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(W.a.error," ").concat(i||""),l="".concat(W.a.commonInputClass," ").concat(r?W.a.errorInput:W.a.superInput," ").concat(s||W.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},D=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=a?M.a.error:"";return Object(d.jsxs)("div",{className:M.a.container,children:[Object(d.jsxs)("div",{className:M.a.inputContainer,children:[Object(d.jsx)(P,{value:t,onChange:n,className:s}),a&&Object(d.jsx)("p",{children:a})]}),Object(d.jsx)(y,{onClick:c,children:"add"}),Object(d.jsx)("span",{children:r})]})},U=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],h=t.length;return Object(d.jsx)(D,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;b(""),i(t)},addUser:function(){if(!s||0===s.trim().length)return i(""),void b("User's name cant be empty");alert("Hello, ".concat(s,"!")),n(s),i(""),b("")},error:u,totalUsers:h})};var J=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(U,{users:n,addUserCallback:function(e){var t={_id:Object(B.a)(),name:e};a([t].concat(Object(L.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},K=n(23),G=n.n(K),Z=n(28),Q=n.n(Z),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(c||"");return Object(d.jsxs)("label",{className:Q.a.customCheckbox,children:[Object(d.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.target.checked)},className:s},r)),Object(d.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var q=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(P,{value:n,onChangeText:a,onEnter:s,error:r,spanClassName:G.a.testSpanError}),Object(d.jsx)(P,{className:G.a.blue}),Object(d.jsx)(y,{children:"default"}),Object(d.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(y,{disabled:!0,children:"disabled"}),Object(d.jsx)(X,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(X,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},z=n(34),V=n.n(z),R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=a||{},b=u.children,h=u.onDoubleClick,O=u.className,x=Object(N.a)(u,["children","onDoubleClick","className"]),p="".concat(V.a.spanClass," ").concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(P,Object(k.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(k.a)(Object(k.a)({onDoubleClick:function(e){j(!0),h&&h(e)},className:p},x),{},{children:["\u270e",b||r.value]}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}Y("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(R,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(y,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(d.jsx)(y,{onClick:function(){var e=$("editable-span-value","");a(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(A,{}),Object(d.jsx)(J,{}),Object(d.jsx)(q,{}),Object(d.jsx)(ee,{})]})},ne=n.p+"static/media/error_404.cf2cc339.jpeg";var ce=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"100%"},src:ne,alt:"404 not found"})})})},ae=n(16),re=n(11),se={isLoading:!1},ie=function(e){return{type:"SET_IS_LOADING",isLoading:e}},oe=Object(re.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOADING":return Object(k.a)(Object(k.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),je=Object(re.c)(oe),le=je;window.store=je;var ue=n.p+"static/media/Blinking squares.dc065982.gif";var be=function(){var e=Object(ae.b)(),t=Object(ae.c)((function(e){return le.getState().loading.isLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:" homeworks 10"}),t?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:ue,alt:"loader"})}):Object(d.jsx)("div",{children:Object(d.jsx)(y,{onClick:function(){e(ie(!0)),console.log("loading..."),setTimeout((function(){e(ie(!1))}),2e3)},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},de=function(e){var t=e.options,n=e.value,c=(e.onChange,e.onChangeOption),a=Object(N.a)(e,["options","value","onChange","onChangeOption"]),r=null===t||void 0===t?void 0:t.map((function(e,t){return e?Object(d.jsx)("option",{value:e,children:e},t):Object(d.jsx)("option",{children:"\u041d\u0435 \u0438\u0437 \u0447\u0435\u0433\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c"})}));return Object(d.jsx)("select",Object(k.a)(Object(k.a)({onChange:function(e){t&&c&&c(e.target.value)}},a),{},{value:n,children:r}))},he=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=(e.onChange,e.onChangeOption),r=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){n&&a&&a(n[Number(e.target.value)])}),s=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{name:t,type:"radio",checked:c===e,value:n,onChange:r}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:s})},Oe=["x","y","z"];var xe=function(){var e=Object(c.useState)(Oe[0]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homeworks 7"}),Object(d.jsx)("div",{children:Object(d.jsx)(de,{options:Oe,value:n,onChangeOption:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(he,{name:"radio",options:Oe,value:n,onChangeOption:a})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},pe=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(L.a)(e.sort((function(e,t){return e.name>t.name?1:-1}))):Object(L.a)(e.sort((function(e,t){return e.name<t.name?1:-1})));case"check":return Object(L.a)(e.filter((function(e){return e.age>t.payload})));default:return e}},me=n(36),ve=n.n(me),fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ge=function(){var e=Object(c.useState)(fe),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:ve.a.peopleTable,children:[Object(d.jsx)("span",{children:e.name})," ",Object(d.jsx)("span",{children:e.age})]})},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homeworks 8"}),r,Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{onClick:function(){return a(pe(fe,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(y,{onClick:function(){return a(pe(fe,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(y,{onClick:function(){return a(pe(fe,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_e=n(30),Ce=n.n(_e);var ke=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(l.a)(j,2),b=u[0],h=u[1],O=function(){clearInterval(n)},x=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(d.jsx)("br",{}),p=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)},children:x}),Object(d.jsx)("div",{className:b?Ce.a.date_visible:Ce.a.date_invisible,children:p}),Object(d.jsx)(y,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(d.jsx)(y,{onClick:O,children:"stop"})]})};var Ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homeworks 9"}),Object(d.jsx)(ke,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Se=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Junior"}),Object(d.jsx)(xe,{}),Object(d.jsx)(ge,{}),Object(d.jsx)(Ne,{}),Object(d.jsx)(be,{})]})};var we=function(){return Object(d.jsx)("div",{children:"Junior plus"})},ye="/pre-jun",Ie="/junior",Te="/junior-plus";var Ee=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:[Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:ye})}}),Object(d.jsx)(O.b,{path:ye,exact:!0,render:function(){return Object(d.jsx)(te,{})}}),Object(d.jsx)(O.b,{path:Ie,exact:!0,render:function(){return Object(d.jsx)(Se,{})}}),Object(d.jsx)(O.b,{path:Te,exact:!0,render:function(){return Object(d.jsx)(we,{})}}),Object(d.jsx)(O.b,{render:function(){return Object(d.jsx)(ce,{})}})]})})};var Ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(Ee,{})]})})};var Le=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("h1",{children:"react homeworks:"}),Object(d.jsx)(Ae,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae.a,{store:le,children:Object(d.jsx)(Le,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.8d717bd7.chunk.js.map