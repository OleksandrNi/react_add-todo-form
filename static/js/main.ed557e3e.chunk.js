(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(8),n=a.n(i),s=a(6),r=a(2),o=a(7),c=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],m=a(0),u=function(){var e=d.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))})})),t=Object(c.useState)(""),a=Object(r.a)(t,2),i=a[0],n=a[1],u=Object(c.useState)(""),h=Object(r.a)(u,2),b=h[0],p=h[1],j=Object(c.useState)(e),g=Object(r.a)(j,2),y=g[0],f=g[1],O=Object(c.useState)(!0),x=Object(r.a)(O,2),v=x[0],S=x[1],w=Object(c.useState)(!0),k=Object(r.a)(w,2),_=k[0],z=k[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)("input",{className:"form__input",type:"title",placeholder:"Title",value:b,onChange:function(e){p(e.target.value.replace(/[^A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u04010-9 ]/g,"")),S(!0)}}),Object(m.jsx)("div",{className:"form__error-message",children:!v&&Object(m.jsx)("span",{children:"Please enter the title"})}),Object(m.jsxs)("label",{className:"form__label",children:["Choose user:",Object(m.jsxs)("select",{name:"selectUser",value:i,onChange:function(e){n(e.target.value),z(!0)},children:[Object(m.jsx)("option",{children:"Please choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),Object(m.jsx)("div",{className:"form__error-message",children:!_&&Object(m.jsx)("span",{children:"Please choose a user"})}),Object(m.jsx)("button",{className:"form__add-button",type:"button",onClick:function(){if(b||S(!1),i||z(!1),b&&i){var e={userId:+i,id:y[y.length-1].id+1,title:b,completed:!1,user:l.find((function(e){return e.id===+i}))};f([].concat(Object(s.a)(y),[e])),n(""),p("")}},children:"Add ToDo"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"todo__title",children:"ToDo list"}),Object(m.jsx)("div",{className:"todo__list",children:Object(m.jsx)("ul",{className:"todo",children:Object(s.a)(y).reverse().map((function(e){var t;return Object(m.jsxs)("li",{className:"todo__list-item",children:[Object(m.jsx)("p",{children:null===(t=e.user)||void 0===t?void 0:t.name}),Object(m.jsx)("p",{children:e.title}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{className:"task",type:"checkbox",checked:e.completed}),"Done"]})]},e.id)}))})})]})]})};n.a.render(Object(m.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ed557e3e.chunk.js.map