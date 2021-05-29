(this["webpackJsonpshopping-list-app"]=this["webpackJsonpshopping-list-app"]||[]).push([[0],{26:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},39:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},52:function(t,e,a){},55:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(13),s=a.n(c),i=(a(34),a(35),a(16)),o=a(3),l=(a(26),a(9)),d="ADD_ITEM_TO_CART",u="REMOVE_CART_ITEM",m="REDUCE_CART_ITEM",j="SET_CART_NAME",p="CLEAR_CART",h=function(t){return{type:d,info:"Action to add a item top cart, and also increase quantity by one, if already exists on cart",payload:t}},b=(a(39),a(0)),O=function(t){var e=t.shoppingItems,a=t.addItem;return Object(b.jsx)(b.Fragment,{children:e.map((function(t,e){return Object(b.jsxs)("div",{className:"itemlist",children:[Object(b.jsx)("h2",{className:"itemlist-category",children:t.categoryName}),Object(b.jsx)("div",{className:"itemlist-list",children:t.items.map((function(t){return Object(b.jsxs)("div",{className:"item-card",children:[Object(b.jsx)("p",{children:t.name}),Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:"fas fa-plus-circle",onClick:function(){return a(t)}})})]},t.id)}))})]},t.id)}))})},f=Object(l.b)((function(t){return{shoppingItems:t.shoppingItems,currentCart:t.currentCart}}),(function(t){return{addItem:function(e){return t(h(e))}}}))((function(t){var e=t.shoppingItems,a=t.addItem,n=t.currentCart;return Object(b.jsxs)("div",{className:"main-content",children:[Object(b.jsxs)("h2",{className:"heading",children:[Object(b.jsx)("span",{children:"Listify"})," allows you to take your shopping list wherever you go"]}),Object(b.jsx)(O,{shoppingItems:e.shoppingItemsDetails,addItem:a,currentCart:n})]})})),x=a(10),y=(a(41),a(42),a(12)),C=a.n(y);C.a.setAppElement("#root");var N=function(t){var e=t.modalIsOpen,a=t.setModalIsOpen,n=t.cartToView;return Object(b.jsx)(C.a,{className:"Modal",overlayClassName:"Overlay",isOpen:e,onRequestClose:function(){return a(!1)},children:n?Object(b.jsxs)("div",{className:"cart-info-container",style:{height:"100%"},children:[Object(b.jsx)("div",{className:"cart-name",children:Object(b.jsxs)("h2",{children:[n.shoppingCartName,"...",Object(b.jsxs)("span",{children:["(",n.status,")"]})]})}),Object(b.jsx)("div",{className:"item-list-container",style:{height:"90%"},children:Object(b.jsx)("ul",{className:"item-list",children:n.shoppingCartList.map((function(t){return Object(b.jsxs)("li",{children:["-",t.name," - ",t.quantity,"pcs"]},t.id)}))})})]}):Object(b.jsx)("h1",{children:"Cart Name"})})},g=function(t){var e=t.history,a=t.toggleDrop,r=t.toggleStatus,c=t.cancelCart,s=Object(n.useState)(!1),i=Object(x.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(),u=Object(x.a)(d,2),m=u[0],j=u[1];return Object(b.jsxs)("div",{className:"history",style:{marginLeft:"1rem"},children:[e.cartHistory?e.cartHistory.map((function(t){return Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsx)("p",{className:"cart-name",children:t.shoppingCartName}),Object(b.jsxs)("p",{className:"cart-quantity",children:[t.shoppingCartList.length," Items"]}),Object(b.jsxs)("div",{className:"cart-right",children:[Object(b.jsx)("i",{className:"far fa-calendar-alt"}),Object(b.jsx)("p",{children:"Thu May 13 2021"})]}),Object(b.jsx)("p",{style:{background:"completed"===t.status?"#99cc0b":"#9f0bcc"},className:"status",children:t.status}),Object(b.jsx)("i",{onClick:function(){return a(t)},className:"fas fa-chevron-down dropdown"}),t.dropdown?Object(b.jsxs)("ul",{className:"dropdown-menu",children:[Object(b.jsx)("li",{onClick:function(){return r(t)},className:"dropdown-option completed",children:"Completed"}),Object(b.jsx)("li",{onClick:function(){return c(t)},className:"dropdown-option cancelled",children:"Cancelled"}),Object(b.jsx)("li",{onClick:function(){return function(t){j(t),l(!0),a(t)}(t)},className:"dropdown-option view-cart",children:"View Cart"})]}):Object(b.jsx)(b.Fragment,{})]},t.id)})):Object(b.jsx)("div",{children:"No Cart"}),Object(b.jsx)(N,{modalIsOpen:o,setModalIsOpen:l,cartToView:m})]})},v="ADD_CART",I="REMOVE_CART",k="TOGGLE_DROPDOWN",w="SET_STATUS",T=Object(l.b)((function(t){return{history:t.cartHistory}}),(function(t){return{toggleDrop:function(e){return t(function(t){return{type:k,info:"Action to toggle dropdown",payload:t}}(e))},toggleStatus:function(e){return t(function(t){return{type:w,info:"Action to set status of cart",payload:t}}(e))},cancelCart:function(e){return t(function(t){return{type:I,info:"Action to remove cart from cart history",payload:t}}(e))}}}))((function(t){var e=t.history,a=t.toggleDrop,n=t.toggleStatus,r=t.cancelCart;return Object(b.jsxs)("div",{className:"main-content",style:{width:"100%"},children:[Object(b.jsxs)("h2",{className:"heading",children:["Your ",Object(b.jsx)("span",{children:"Listify"})," History"]}),Object(b.jsx)(g,{history:e,toggleDrop:a,toggleStatus:n,cancelCart:r})]})})),A=(a(52),Object(l.b)((function(t){return{currentCart:t.currentCart}}))((function(t){var e=t.currentCart;return Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsx)("div",{className:"home-logo",children:Object(b.jsx)("i",{className:"fas fa-cart-plus"})}),Object(b.jsxs)("ul",{className:"nav-items",children:[Object(b.jsx)("li",{className:"shopping-items",children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("i",{className:"fas fa-tasks nav-item"})})}),Object(b.jsx)("li",{className:"history",children:Object(b.jsx)(i.b,{to:"/history",children:Object(b.jsx)("i",{className:"fas fa-history nav-item"})})})]}),Object(b.jsxs)("div",{className:"cart-box",children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"}),Object(b.jsx)("span",{className:"cart-count",children:e.currentCart.length})]})]})}))),E=(a(55),a(56),function(t){var e=t.currentCart,a=t.removeItem,n=t.reduceItem,r=t.addItem,c=t.addCart,s=(t.cartHistory,t.clearCart),i=t.setListName;return Object(b.jsx)(b.Fragment,{children:e.currentCart.length?Object(b.jsxs)("div",{className:"cart-list",children:[e.currentCart.map((function(t){return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsx)("p",{className:"item-name",children:t.name}),Object(b.jsxs)("div",{className:"cart-item-details",children:[Object(b.jsx)("i",{className:"fas fa-trash trash",onClick:function(){return a(t)}}),Object(b.jsx)("i",{className:"fas fa-minus-circle reduce",onClick:function(){return n(t)}}),Object(b.jsx)("p",{className:"quantity",onClick:function(){return console.log(t)},children:t.quantity}),Object(b.jsx)("i",{className:"fas fa-plus-circle add",onClick:function(){return r(t)}})]})]},t.id)})),Object(b.jsx)("div",{className:"save-btn-container",children:Object(b.jsx)("button",{className:"save-btn",style:{padding:"0.5rem"},onClick:function(){return c(e),s(),void i("Edit Cart Name")},children:"Save Cart"})})]}):Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("p",{className:"empty-message",children:"Cart is Empty!"}),Object(b.jsx)("div",{className:"cart-illistration",children:Object(b.jsx)("i",{className:"fas fa-shopping-basket basket"})})," "]})})});a(57);C.a.setAppElement("#root");var M=function(t){var e=t.modalIsOpen,a=t.setModalIsOpen,r=t.addItem,c=Object(n.useState)(),s=Object(x.a)(c,2),i=s[0],o=s[1];return Object(b.jsx)(C.a,{className:"Modal",overlayClassName:"Overlay",isOpen:e,onRequestClose:function(){return a(!1)},children:Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{className:"add-item-form",onSubmit:function(t){r({id:Math.floor(1e5*Math.random())+1,name:i,quantity:1}),o(""),a(!1),t.preventDefault()},children:[Object(b.jsx)("i",{className:"fas fa-shopping-basket basket"}),Object(b.jsxs)("div",{className:"item-name-container field",children:[Object(b.jsx)("label",{className:"item-name-label label",children:"Enter Item Name:"}),Object(b.jsx)("input",{onChange:function(t){o(t.target.value)},type:"text",className:"name input",placeholder:"Item Name"})]}),Object(b.jsxs)("div",{className:"item-description-container field",children:[Object(b.jsx)("label",{className:"item-description-label label",children:"Enter Item Description:"}),Object(b.jsx)("input",{type:"text",className:"name input",placeholder:"Describe the Item"})]}),Object(b.jsx)("button",{className:"add-button",type:"submit",children:"Add Item"})]})})})},D=Object(l.b)((function(t){return{currentCart:t.currentCart,cartHistory:t.cartHistory}}),(function(t){return{addItem:function(e){return t(h(e))},removeItem:function(e){return t(function(t){return{type:u,info:"This action is used to remove the item from cart completely",payload:t}}(e))},reduceItem:function(e){return t(function(t){return{type:m,info:"This action is used to reduce the item from cart.",payload:t}}(e))},setCartName:function(e){return t(function(t){return{type:j,info:"This action is used to set the name of the current cart",payload:t}}(e))},clearCart:function(){return t({type:p,info:"This action is used to clear the cart"})},addCart:function(e){return t(function(t){return{type:v,info:"Action to add current cart to cart history",payload:t}}(e))}}}))((function(t){var e=t.currentCart,a=t.removeItem,r=t.reduceItem,c=t.addItem,s=t.setCartName,i=t.cartHistory,o=t.addCart,l=t.clearCart,d=Object(n.useState)(!1),u=Object(x.a)(d,2),m=u[0],j=u[1],p=Object(n.useState)(""),h=Object(x.a)(p,2),O=h[0],f=h[1],y=Object(n.useState)(!1),C=Object(x.a)(y,2),N=C[0],g=C[1];return Object(b.jsxs)("div",{className:"shopping-list",children:[Object(b.jsxs)("div",{className:"addItems-helper",children:[Object(b.jsx)("p",{children:"Don't find what you need?"}),Object(b.jsx)("button",{onClick:function(){return g(!0)},className:"add-btn",children:"Add Item"})]}),Object(b.jsx)("div",{className:"shopping-list-name",children:m?Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("input",{className:"edit-cart-name",onChange:function(t){return f(t.target.value)}}),Object(b.jsx)("div",{className:"edit-name-container",children:Object(b.jsx)("i",{className:"fas fa-check",onClick:function(){j(!1),s(O)}})})," "]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:e.currentCartName}),Object(b.jsx)("div",{className:"edit-name-container",children:Object(b.jsx)("i",{className:"fas fa-pencil-alt",onClick:function(){return j(!0)}})})]})}),Object(b.jsx)(E,{currentCart:e,removeItem:a,reduceItem:r,addItem:c,addCart:o,cartHistory:i,clearCart:l,setListName:f}),Object(b.jsx)(M,{modalIsOpen:N,setModalIsOpen:g,addItem:c})]})}));var H=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(A,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(o.a,{path:"/history",exact:!0,component:T})]}),Object(b.jsx)(D,{})]})})},S=a(20),q={shoppingItemsDetails:[{id:"1",categoryName:"Fruit and vegetables",items:[{id:"1",name:"Avocado"},{id:"2",name:"Cherries"},{id:"3",name:"Apples"},{id:"4",name:"Mangos"},{id:"5",name:"Baby Carrots"}]},{id:"2",categoryName:"Meat and Fish",items:[{id:"9",name:"Chicken Legs"},{id:"10",name:"Steak Bites"},{id:"11",name:"Salmon"},{id:"12",name:"Turkey Necks"}]},{id:"3",categoryName:"Beverages",items:[{id:"13",name:"Bournvita"},{id:"14",name:"Brownie Chocolate Drink"},{id:"15",name:"Coca Cola"},{id:"16",name:"Guiness"},{id:"17",name:"Orange Juice"},{id:"18",name:"Moonshine"}]},{id:"4",categoryName:"Pets Food",items:[{id:"19",name:"Purina"},{id:"20",name:"Tuna Chowder"},{id:"21",name:"Water"}]}]},R=a(19),_=a(8),L={currentCart:[],currentCartName:"Edit Cart Name..."},F={cartHistory:[]},B=function(){return Math.floor(1e5*Math.random())+1},V=Object(S.a)({shoppingItems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;return e.type,t},currentCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:for(var a=e.payload,n=a.id,r=a.name,c=!1,s=0;s<=t.currentCart.length&&t.currentCart[s];s++)t.currentCart[s].id===n&&(c=!0);if(!c)return Object(_.a)(Object(_.a)({},t),{},{currentCart:[].concat(Object(R.a)(t.currentCart),[{id:n,name:r,quantity:1}])});if(c)return Object(_.a)(Object(_.a)({},t),{},{currentCart:t.currentCart.map((function(t){return t.id===e.payload.id&&(t.quantity=t.quantity+1),t}))});case u:return Object(_.a)(Object(_.a)({},t),{},{currentCart:t.currentCart.filter((function(t){return t.id!==e.payload.id}))});case m:return Object(_.a)(Object(_.a)({},t),{},{currentCart:t.currentCart.map((function(t){return t.quantity>1&&t.id===e.payload.id&&(t.quantity=t.quantity-1),t}))});case j:return Object(_.a)(Object(_.a)({},t),{},{currentCartName:e.payload});case p:return{currentCart:[],currentCartName:"Edit Cart Name..."};default:return t}},cartHistory:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return{cartHistory:[].concat(Object(R.a)(t.cartHistory),[{date:new Date,id:B(),status:"pending",shoppingCartName:e.payload.currentCartName,shoppingCartList:e.payload.currentCart,dropdown:!1}])};case k:return{cartHistory:t.cartHistory.map((function(t){return t.id===e.payload.id&&(t.dropdown=!t.dropdown),t}))};case w:return{cartHistory:t.cartHistory.map((function(t){return t.id===e.payload.id&&(t.status="completed",t.dropdown=!t.dropdown),t}))};case I:return{cartHistory:t.cartHistory.filter((function(t){return t.id!==e.payload.id}))};default:return t}}}),G=Object(S.b)(V);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(l.a,{store:G,children:Object(b.jsx)(H,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3d15b1d4.chunk.js.map