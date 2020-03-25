(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(81)},52:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},54:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(15),l=a.n(i),s=(a(52),a(53),a(54),a(46)),c=a(83),o=a(84),m=a(85),g=a(86),p=a(87),u=a(88),d=a(89),h=a(90),f=a(102),E=a(91),b=a(92),y=a(93),v=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),i=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement(c.a,{color:"light",light:!0,expand:"md"},n.a.createElement(o.a,{href:"/"},"Doug Co."),n.a.createElement(m.a,{onClick:function(){return l(!i)}}),n.a.createElement(g.a,{isOpen:i,navbar:!0},n.a.createElement(p.a,{className:"mr-auto",navbar:!0},n.a.createElement(u.a,null,n.a.createElement(d.a,{href:"/components/"},"Components")),n.a.createElement(u.a,null,n.a.createElement(d.a,{href:"https://github.com/reactstrap/reactstrap"},"GitHub")),n.a.createElement(h.a,{nav:!0,inNavbar:!0},n.a.createElement(f.a,{nav:!0,caret:!0},"Options"),n.a.createElement(E.a,{right:!0},n.a.createElement(b.a,null,"Option 1"),n.a.createElement(b.a,null,"Option 2"),n.a.createElement(b.a,{divider:!0}),n.a.createElement(b.a,null,"Reset")))),n.a.createElement(y.a,null,"Simple Text"))))},k=a(23),O=a(45),w=a(17),C=a(18),N=a(20),F=a(19),T=a(21),S=a(94),x=a(42),B=a(95),j=a(96),D="https://ElDugano.github.io/testreactwebsite/",L=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).state={isOpen:!1,isSubOpen:[!1]},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.matchMedia("(max-width: 992px)"),a=function(){t.matches?e.setState({isOpen:!1}):e.setState({isOpen:!0})};a(),t.addListener(a)}},{key:"displayCurrentOrder",value:function(){var e,t=this.props.currentOrderToppings,a=this.props.condiments;return e=Object.keys(t).map((function(e,r){if(t[e]){var i="";return"Regular"!==t[e]&&(i=t[e]+" "),n.a.createElement("div",{key:e},n.a.createElement(S.a,{style:{width:"16px",height:"16px"},src:D+a[r].image,alt:a[r].name}),i,e,n.a.createElement("span",{className:"float-right"},a[r].calories))}return""})),n.a.createElement(n.a.Fragment,null,n.a.createElement("h5",null,n.a.createElement(S.a,{style:{width:"32px",height:"32px"},src:D+this.props.currentOrder.image,alt:this.props.currentOrder.name}),this.props.currentOrder.name),n.a.createElement("div",null,n.a.createElement("h5",null,"Toppings",n.a.createElement("span",{className:"float-right"},"Calories"))),e)}},{key:"displayWholeOrder",value:function(){var e=this;return this.props.fullOrder.map((function(t,a){var r="",i="",l=t.toppings,s=e.props.condiments,c=0;return t.toppings&&(r=e.state.isSubOpen[a]?n.a.createElement("span",{className:"fa fa-angle-down fa-lg"}):n.a.createElement("span",{className:"fa fa-angle-up fa-lg"}),i=Object.keys(l).map((function(e,t){if(l[e]){var a="";return"Regular"!==l[e]&&(a=l[e]+" "),c>0?(c++,n.a.createElement("span",{key:e},", ",n.a.createElement(S.a,{style:{width:"16px",height:"16px"},src:D+s[t].image,alt:s[t].name}),a,e)):(c++,n.a.createElement("span",{key:e},n.a.createElement(S.a,{style:{width:"16px",height:"16px"},src:D+s[t].image,alt:s[t].name}),a,e))}return""}))),n.a.createElement("div",{key:a},n.a.createElement("h5",{className:"outline test",onClick:function(){var t=e.state.isSubOpen;t[a]=!t[a],e.setState({isSubOpen:t})}},n.a.createElement(S.a,{style:{width:"32px",height:"32px"},src:D+t.food.image,alt:t.food.food}),t.food.name,r),n.a.createElement(g.a,{isOpen:e.state.isSubOpen[a]},i))}))}},{key:"displayOrder",value:function(){var e,t=this,a=null;this.props.currentOrder?(e=this.displayCurrentOrder(),a=n.a.createElement(x.a,{color:"primary",onClick:this.props.addToOrder},"Add to order")):this.props.fullOrder.length>0&&(e=this.displayWholeOrder(),a=n.a.createElement(x.a,{color:"primary",onClick:this.props.submitOrder},"Finalize Order"));var r="0.00";this.props.currentOrder?r=this.props.currentOrder.price:this.props.fullOrder.length>0&&this.props.fullOrder.map((function(e,a){r=+r+ +t.props.fullOrder[a].food.price})),r=(+r+0).toFixed(2);var i=(Math.round(+r*+this.props.salesTax*100)/100).toFixed(2);return n.a.createElement(B.a,null,n.a.createElement("h5",null,"Your order"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-sm-7 col-md-8 col-lg-12"},e),n.a.createElement("div",{className:"col-xs-12 col-sm-5 col-md-4 col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8"},"Subtotal"),n.a.createElement("div",{className:"col-4"},"$",r),n.a.createElement("div",{className:"col-8"},"Estimated Tax"),n.a.createElement("div",{className:"col-4"},"$",i),n.a.createElement("div",{className:"col-8"},"Total"),n.a.createElement("div",{className:"col-4"},"$",(+r+ +i).toFixed(2))))),n.a.createElement("div",{className:"row pt-4 text-right"},n.a.createElement("div",{className:"col-12"},a)))}},{key:"render",value:function(){var e=this,t=this.state.isOpen?"Hide order":"View order",a=this.displayOrder();return n.a.createElement("div",{className:"orderStatus"},n.a.createElement(g.a,{isOpen:this.state.isOpen},n.a.createElement(j.a,null,a)),n.a.createElement("div",{className:"text-right orderStatusToggleButton"},n.a.createElement(x.a,{color:"outline",onMouseDown:function(e){return e.preventDefault()},onClick:function(){return e.setState({isOpen:!e.state.isOpen})}},t)))}}]),t}(r.Component),H=a(101),R=a(29),I=a(97),M=a(98),A=a(99),G=a(100),W=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).state={dropdownOpen:!1,tooltipOpen:!1},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=null;this.props.checkable&&(t=this.props.checked?n.a.createElement("div",{className:"card-checkbox"},n.a.createElement("span",{className:"fa fa-check fa-lg text-dark float-right"})):n.a.createElement("div",{className:"card-checkbox"}));var a=null;this.props.tooltip&&(a=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card-infoBox",id:this.props.title.replace(/\s/g,"")},n.a.createElement("span",{className:"fa fa-info fa-lg text-info float-right"})),n.a.createElement(H.a,{placement:"bottom-start",trigger:"click focus hover",isOpen:this.state.tooltipOpen,target:this.props.title.replace(/\s/g,""),toggle:function(){return e.setState({tooltipOpen:!e.state.tooltipOpen})}},this.props.tooltip)));var r=null;if(null!=this.props.options&&this.props.checked){var i=this.props.options.map((function(e,t){return n.a.createElement(b.a,{key:t,onClick:function(){return e.onClick()}},e.value)}));r=n.a.createElement(R.a,{className:"card-options",size:"sm",isOpen:this.state.dropdownOpen,toggle:function(){return e.setState({dropdownOpen:!e.state.dropdownOpen})}},n.a.createElement(f.a,{caret:!0,outline:!0},this.props.checked),n.a.createElement(E.a,{right:!0},i))}return n.a.createElement("div",{className:"col-12 col-sm-6"},n.a.createElement(j.a,{className:"menuItem rounded-0"},n.a.createElement(S.a,{src:D+this.props.image,alt:this.props.title}),a,n.a.createElement(I.a,{onClick:this.props.onClick},n.a.createElement(M.a,null,n.a.createElement("h5",null,this.props.title)),n.a.createElement(A.a,null,this.props.subtitle),n.a.createElement(G.a,null,this.props.thirdtitle),t),r))}}]),t}(r.Component);var $=function(e){var t=e.condiments.map((function(t,a){return"condiment"===t.category?n.a.createElement(W,{key:a+"condiment",title:t.name,subtitle:t.calories+" cal",options:[{value:"Light",onClick:function(){return e.selectTopping(t.name,"Light")}},{value:"Regular",onClick:function(){return e.selectTopping(t.name,"Regular")}},{value:"Extra",onClick:function(){return e.selectTopping(t.name,"Extra")}}],image:t.image,checkable:!0,checked:e.toppings[t.name],onClick:function(){return e.selectTopping(t.name,!e.toppings[t.name])}}):""})),a=e.condiments.map((function(t,a){return"sauce"===t.category?n.a.createElement(W,{key:a+"sauce",title:t.name,subtitle:t.calories+" cal",options:[{value:"Light",onClick:function(){return e.selectTopping(t.name,"Light")}},{value:"Regular",onClick:function(){return e.selectTopping(t.name,"Regular")}},{value:"Extra",onClick:function(){return e.selectTopping(t.name,"Extra")}}],image:t.image,checkable:!0,checked:e.toppings[t.name],onClick:function(){return e.selectTopping(t.name,!e.toppings[t.name])}}):""}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Condiments")),t),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Sauces")),a))},J={Burgers:[{id:0,name:"Hamburger",image:"/images/burger.png",description:"A delicious double beef patty burger, complete with ",price:"8.47",calories:840},{id:1,name:"Cheeseburger",image:"/images/cheeseburger.png",description:"A delicious double beef patty burger, complete with two slices of melted cheese",price:"9.21",calories:980},{id:2,name:"Bacon Burger",image:"/images/baconburger.png",description:"A delicious double beef patty burger, complete with two strips of grilled bacon",price:"9.53",calories:920},{id:3,name:"Bacon Cheeseburger",image:"/images/baconcheeseburger.png",description:"A delicious double beef patty burger, complete with two slices of melted cheesw and two strips of grilled bacon",price:"10.21",calories:1060},{id:4,name:"Little Hamburger",image:"/images/littleburger.png",description:"A delicious single beef patty burger",price:"6.35",calories:540},{id:5,name:"Little Cheeseburger",image:"/images/littlecheeseburger.png",description:"A delicious single beef patty burger, complete with one slice of melted cheese",price:"9.21",calories:610},{id:6,name:"Little Bacon Burger",image:"/images/littlebaconburger.png",description:"A delicious single beef patty burger, complete with two strips of bacon",price:"9.21",calories:620},{id:7,name:"Little Bacon Cheeseburger",image:"/images/littlebaconcheeseburger.png",description:"A delicious single beef patty burger, complete with one slice of melted cheese and two strips of bacon",price:"9.21",calories:990}],"Hot Dogs":[{id:0,name:"Hot Dog",image:"/images/hotdog.png",price:"5.93",calories:520},{id:1,name:"Cheese Hot Dog",image:"/images/cheesehotdog.png",price:"6.99",calories:600},{id:2,name:"Bacon Hot Dog",image:"/images/baconhotdog.png",price:"6.67",calories:590},{id:3,name:"Bacon Cheese Hot Dog",image:"/images/baconcheesehotdog.png",price:"7.73",calories:670}],Sandwiches:[{id:0,name:"Grilled Cheese Sandwich",image:"/images/grilledcheesesandwich.png",price:"5.29",calories:420},{id:1,name:"Veggie Sandwich",image:"/images/veggiesandwich.png",price:"4.55",calories:280},{id:2,name:"BTL Sandwich",image:"/images/bltsandwich.png",price:"6.67",calories:600},{id:3,name:"Veggie Sandwich with Cheese",image:"/images/veggiecheesesandwich.png",price:"5.29",calories:420}],Fries:[{id:0,name:"Little Fries",image:"/images/littlefries.png",price:"4.02",calories:530},{id:1,name:"Little Cajun Fries",image:"/images/littlecajunfries.png",price:"4.02",calories:530},{id:2,name:"Regular Fries",image:"/images/regularfries.png",price:"5.18",calories:950},{id:3,name:"Cajun Fries",image:"/images/regularcajunfries.png",price:"5.18",calories:950},{id:4,name:"Large Fries",image:"/images/largefries.png",price:"6.77",calories:1310},{id:5,name:"Large Cajun Fries",image:"/images/largecajunfries.png",price:"6.77",calories:1310}],Drinks:[{id:0,name:"Regular Drink",image:"/images/regulardrink.png",price:"2.86",calories:"0-360"},{id:1,name:"Large Drink",image:"/images/largedrink.png",price:"3.13",calories:"0-520"},{id:2,name:"Bottled Water",image:"/images/bottledwater.png",price:"2.53",calories:0},{id:3,name:"Honest Tea Bottle",image:"/images/honesttea.png",price:"3.13",calories:60},{id:4,name:"Simply lemonade Bottle",image:"/images/lemonade.png",price:"3.13",calories:160},{id:5,name:"Coke Bottle",image:"/images/coke.png",price:"3.13",calories:212},{id:6,name:"Diet Coke Bottle",image:"/images/dietcoke.png",price:"3.13",calories:0},{id:7,name:"Sprite Bottle",image:"/images/sprite.png",price:"3.13",calories:224}]},V=[{id:0,name:"Lettuce",image:"/images/lettuce.png",category:"condiment",alltheway:!0,calories:10},{id:1,name:"Pickles",image:"/images/pickles.png",category:"condiment",alltheway:!0,calories:5},{id:2,name:"Tomatoes",image:"/images/tomatoes.png",category:"condiment",alltheway:!0,calories:10},{id:3,name:"Grilled Onions",image:"/images/grilledonions.png",category:"condiment",alltheway:!0,calories:10},{id:4,name:"Grilled Mushrooms",image:"/images/grilledmushrooms.png",category:"condiment",alltheway:!0,calories:5},{id:5,name:"Grilled Green Peppers",image:"/images/greenpeppers.png",category:"condiment",alltheway:!1,calories:5},{id:6,name:"Raw Onions",image:"/images/onions.png",category:"condiment",alltheway:!1,calories:10},{id:7,name:"Grilled Jalape\xf1os",image:"/images/jalapenos.png",category:"condiment",alltheway:!1,calories:5},{id:8,name:"Relish",image:"/images/relish.png",category:"condiment",alltheway:!1,calories:15},{id:9,name:"Ketchup",image:"/images/ketchup.png",category:"sauce",alltheway:!0,calories:20},{id:10,name:"Mustard",image:"/images/mustard.png",category:"sauce",alltheway:!0,calories:0},{id:11,name:"Mayo",image:"/images/mayo.png",category:"sauce",alltheway:!0,calories:100},{id:12,name:"BBQ Sauce",image:"/images/bbqsauce.png",category:"sauce",alltheway:!1,calories:80},{id:13,name:"Steak Sauce",image:"/images/steaksauce.png",category:"sauce",alltheway:!1,calories:15},{id:14,name:"Hot Sauce",image:"/images/hotsauce.png",category:"sauce",alltheway:!1,calories:0}],z=function(e){function t(){var e;return Object(w.a)(this,t),(e=Object(N.a)(this,Object(F.a)(t).call(this))).state={selectedFoodCategory:null,selectedFoodItem:null,currentOrderToppings:null,fullOrder:[]},e}return Object(T.a)(t,e),Object(C.a)(t,[{key:"selectCategory",value:function(e){window.scrollTo(0,0),this.setState({selectedFoodCategory:e})}},{key:"selectFood",value:function(e){if(window.scrollTo(0,0),null!==e){if("Fries"==this.state.selectedFoodCategory||"Drinks"==this.state.selectedFoodCategory){var t=this.state.fullOrder;return t.push({food:e,toppings:null}),void this.setState({selectedFoodCategory:null,selectedFoodItem:null,currentOrderToppings:null,fullOrder:t})}var a={};V.forEach((function(e){!0===e.alltheway?a[e.name]="Regular":a[e.name]=!1})),this.setState({selectedFoodItem:e,currentOrderToppings:a})}else this.setState({selectedFoodItem:null,currentOrderToppings:null})}},{key:"selectTopping",value:function(e,t){!0===t&&(t="Regular"),this.setState({currentOrderToppings:Object(O.a)({},this.state.currentOrderToppings,Object(k.a)({},e,t))})}},{key:"addFoodToMenu",value:function(){var e=this.state.fullOrder;e.push({food:this.state.selectedFoodItem,toppings:this.state.currentOrderToppings}),this.setState({selectedFoodCategory:null,selectedFoodItem:null,currentOrderToppings:null,fullOrder:e})}},{key:"submitOrder",value:function(){alert("We did it, reddit!")}},{key:"orderMenu",value:function(){var e=this,t={breadCrumb:null,title:null,menu:null};if(null!=this.state.selectedFoodItem)switch(this.state.selectedFoodCategory){case"Burgers":case"Hot Dogs":case"Sandwiches":t.breadCrumb=n.a.createElement("span",{className:"backBreadcrumb",onClick:function(){return e.selectFood(null)}},"Back"),t.Title=this.state.selectedFoodItem.name,t.menu=n.a.createElement($,{toppings:this.state.currentOrderToppings,condiments:V,selectTopping:function(t,a){return e.selectTopping(t,a)}});break;case"Fries":case"Drinks":case"Shakes":default:t.breadCrumb=n.a.createElement("span",{className:"backBreadcrumb",onClick:function(){return e.selectFood(null)}},"Back"),t.Title=this.state.selectedFoodItem.name,t.menu=n.a.createElement("div",null,"coming soon")}else this.state.selectedFoodCategory?(t.breadCrumb=n.a.createElement("span",{className:"backBreadcrumb",onClick:function(){return e.selectCategory(null)}},"Back"),t.Title=this.state.selectedFoodCategory,t.menu=n.a.createElement("div",{className:"row"},J[this.state.selectedFoodCategory].map((function(t,a){return n.a.createElement(W,{key:a,title:t.name,tooltip:t.description,subtitle:"$"+t.price,thirdtitle:t.calories+" cal",image:t.image,onClick:function(){return e.selectFood(t)}})})))):(t.breadCrumb=n.a.createElement("span",{className:"backBreadcrumb"},"\xa0"),t.Title="What can we get for you?",t.menu=n.a.createElement("div",{className:"row"},n.a.createElement(W,{title:"Burgers",image:"images/cheeseburger.png",onClick:function(){return e.selectCategory("Burgers")}}),n.a.createElement(W,{title:"HotDogs",image:"images/cheesehotdog.png",onClick:function(){return e.selectCategory("Hot Dogs")}}),n.a.createElement(W,{title:"Sandwiches",image:"images/bltsandwich.png",onClick:function(){return e.selectCategory("Sandwiches")}}),n.a.createElement(W,{title:"Fries",image:"images/regularfries.png",onClick:function(){return e.selectCategory("Fries")}}),n.a.createElement(W,{title:"Drinks",image:"images/largedrink.png",onClick:function(){return e.selectCategory("Drinks")}}),n.a.createElement(W,{title:"Shakes",image:"images/shakes.png"})));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},t.breadCrumb,n.a.createElement("h3",null,t.Title))),t.menu)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-lg container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-lg-8 orderMenu order-lg-1 order-2"},this.orderMenu()),n.a.createElement("div",{className:"col-12 col-lg-4 order-lg-2 order-1"},n.a.createElement(L,{fullOrder:this.state.fullOrder,currentOrder:this.state.selectedFoodItem,currentOrderToppings:this.state.currentOrderToppings,condiments:V,salesTax:.095,addToOrder:function(){return e.addFoodToMenu()},submitOrder:function(){return e.submitOrder()}}))))}}]),t}(r.Component);var P=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null),n.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79),a(80);l.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f33ec8c9.chunk.js.map