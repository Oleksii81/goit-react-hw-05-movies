"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[57],{245:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(881),i=t(168),a=t(867).zo.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 100500;\n    "]))),s=t(184),l=function(n){var e=n.loading;return(0,s.jsx)(a,{children:(0,s.jsx)(o.s5,{loading:e,strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},57:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,o,i=t(439),a=t(689),s=t(87),l=t(245),c=t(791),d=t(568),h=t(168),p=t(867),m=p.zo.form(r||(r=(0,h.Z)(["\n    display: flex;\n    padding: 0 24px;\n    justify-content: center;\n    align-items: center;\n    .search-input {\n        margin-right: 24px;\n        height: 32px;\n        min-width: 180px;\n        padding-left: 8px;\n        border-radius: 5px;\n        border-color: transparent;\n        background-color: #85afe4c0;\n        color: #1d2475;\n        align-items: center;\n        transition: width 1,5s ease-in-out;\n    }\n    .search-input:focus {\n        width: 300px;\n    }\n    .search-input:hover {\n    border-color: #daf52e;\n    box-shadow: 0px 3px 20px rgb(247, 243, 4);\n    }\n    .search-input:hover::before {\n    opacity: 1;\n    animation: glowing-border 1s ease-out infinite alternate;\n  }\n\n  @keyframes glowing-border {\n    0% {\n      box-shadow: 0 0 5px #daf52e;\n    }\n    100% {\n      box-shadow: 0 0 20px 10px #daf52e;\n    }\n  }\n  .search-btn {\n    border-radius: 5px;\n    border-color: transparent;\n    background-color: #1d2475;\n    font-weight: 500;\n    padding: 8px 16px;\n    color: white;\n    font-weight: 500;\n  }\n  .search-btn:hover {\n    border-color: #daf52e;\n    box-shadow: 0px 3px 20px rgb(247, 243, 4);\n    }\n    .search-btn:hover::before {\n    opacity: 1;\n    animation: glowing-border 1s ease-out infinite alternate;\n  }\n"]))),u=t(184),x=function(n){n.onSubmit;return(0,u.jsxs)(m,{children:[(0,u.jsx)("input",{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+)*$",title:"May contain only letters, apostrophe, dash and spaces. For example moon",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie...",className:"search-input"}),(0,u.jsx)("button",{type:"submit",className:"search-btn",children:(0,u.jsx)("span",{children:"Search"})})]})},f=p.ZP.main(o||(o=(0,h.Z)(["\n  .search-movie-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    list-style: none;\n    gap: 24px;\n    padding: 24px;\n  }\n  .search-movie-item {\n    background-color: #1d2475;\n    border-radius: 15px;\n    border-color: transparent;\n    overflow: hidden;\n    list-style: none;\n  }\n  .search-movie-item:hover {\n    border-color: #daf52e;\n    box-shadow: 0px 3px 20px rgb(247, 243, 4);\n  }\n\n  .search-movie-item:hover::before {\n    opacity: 1;\n    animation: glowing-border 1s ease-out infinite alternate;\n  }\n\n  @keyframes glowing-border {\n    0% {\n      box-shadow: 0 0 5px #daf52e;\n    }\n    100% {\n      box-shadow: 0 0 20px 10px #daf52e;\n    }\n  }\n  .original-title {\n    font-weight: 700;\n    text-align: center;\n    min-height: 48px;\n    width: 210px;\n    color: white;\n    background-color: #1d2475;\n    margin: 0;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n}\n.search-movie-link {\n    text-decoration: none;\n}\n"]))),g=function(){var n,e=(0,a.TH)(),t=(0,s.lr)(),r=(0,i.Z)(t,2),o=r[0],h=r[1],p=null!==(n=o.get("movieName"))&&void 0!==n?n:"",m=(0,c.useState)([]),g=(0,i.Z)(m,2),b=g[0],w=g[1],v=(0,c.useState)(!1),y=(0,i.Z)(v,2),j=y[0],k=y[1],N=(0,c.useState)(!1),Z=(0,i.Z)(N,2),_=Z[0],S=Z[1];(0,c.useEffect)((function(){""!==p&&(w([]),k(!0),(0,d.z1)(p).then((function(n){if(!n.results.length)return k(!1),S(!0),console.log("There is no movies with this request. Please, try again");S(!1),w(n.results),k(!1)})))}),[p]);return(0,u.jsxs)(f,{children:[(0,u.jsx)(x,{className:"searchbar",onSubmit:function(n){n.preventDefault();var e=n.currentTarget;h({movieName:e.elements.movieName.value})}}),_&&(0,u.jsx)("p",{children:"We can't find any movie with this name"}),(0,u.jsx)("ul",{className:"search-movie-list",children:b.map((function(n){return(0,u.jsx)("li",{className:"search-movie-item",children:(0,u.jsxs)(s.rU,{className:"search-movie-link",to:"/movies/".concat(n.id),state:{from:e},children:[(0,u.jsx)("img",{className:"search-movie-img",width:210,height:315,src:n.poster_path?"https://image.tmdb.org/t/p/w300"+n.poster_path:"http://www.suryalaya.org/images/no_image.jpg",alt:n.original_title}),(0,u.jsx)("p",{className:"original-title",children:n.title})]})},n.id)}))}),(0,u.jsx)("div",{children:j&&(0,u.jsx)(l.Z,{})})]})}}}]);
//# sourceMappingURL=57.bb7e7bfc.chunk.js.map