(this["webpackJsonptweetme-frontend"]=this["webpackJsonptweetme-frontend"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),i=(n(13),n(2)),s=n(1);function l(e,t,n,a){var c;a&&(c=JSON.stringify(a));var o=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);o.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");o.open(e,r),o.setRequestHeader("Content-Type","application/json"),i&&(o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("X-CSRFToken",i)),o.onload=function(){403===o.status&&("Authentication credentials were not provided."===o.response.detail&&(window.location.href="/login?showLoginRequired=true"));n(o.response,o.status)},o.onerror=function(e){console.log(e),n({message:"Components/Lookup: This request is an error"})},o.send(c)}function u(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;console.log(n),l("POST","/tweets/create",a,{content:n}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var m=n(7);function d(e){var t=e.tweet,n=e.action,a=e.didPerformAction;console.log(n);var o=t.likes?t.likes:0,r=e.className?e.className:"btn btn-outline-info btn-sm",i=n.display?n.display:"Action",s=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)},u="like"===n.type?"".concat(o," ").concat(i):i;return c.a.createElement("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,n){l("POST","/tweets/action",n,{id:e,action:t})}(t.id,n.type,s)}},u)}function f(e){var t=e.tweet;return t.parent?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto p-3 border rounded"},c.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),c.a.createElement(w,{hideActions:!0,className:"",tweet:t.parent}))):null}function w(e){var t=e.tweet,n=e.didRetweet,o=e.hideActions,r=Object(a.useState)(e.tweet?e.tweet:null),i=Object(s.a)(r,2),l=i[0],u=i[1],w=e.className?e.className:"col-8 mx-auto col-md-6",p=window.location.pathname.match(Object(m.a)(/([0-9]+)/,{tweetid:1})),b=p?p.groups.tweetid:-1,v="".concat(t.id)==="".concat(b),E=function(e,t){200===t?u(e):201===t&&n&&n(e)};return c.a.createElement("div",{className:w},c.a.createElement("div",null,c.a.createElement("p",null,t.id," - ",t.content),c.a.createElement(f,{tweet:t})),c.a.createElement("div",{className:"btn btn-group"},l&&!0!==o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{tweet:l,didPerformAction:E,action:{type:"like",display:"Likes"}}),c.a.createElement(d,{tweet:l,didPerformAction:E,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(d,{tweet:l,didPerformAction:E,action:{type:"retweet",display:"Retweet"}})),!0===v?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}function p(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)([]),m=Object(s.a)(u,2),d=m[0],f=m[1],p=Object(a.useState)(!1),b=Object(s.a)(p,2),v=b[0],E=b[1];Object(a.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(o);t.length!==d.length&&f(t)}),[e.newTweets,d,o]),Object(a.useEffect)((function(){if(!1===v){!function(e,t){var n="/tweets";e&&(n="/tweets/?username=".concat(e)),l("GET",n,t)}(e.username,(function(e,t){200===t?(r(e),E(!0)):alert("There was an error")}))}}),[o,v,E,e.username]);var h=function(e){var t=Object(i.a)(o);t.unshift(e),r(t);var n=Object(i.a)(d);n.unshift(d),f(n)};return d.map((function(e,t){return c.a.createElement(w,{tweet:e,didRetweet:h,className:"my-5 py-3 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function b(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1],l="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===l&&c.a.createElement(u,{didTweet:function(e){var t=Object(i.a)(o);t.unshift(e),r(t)},className:"col-12 mb-3"}),c.a.createElement(p,Object.assign({newTweets:o},e)))}function v(e){var t=e.tweetId,n=Object(a.useState)(!1),o=Object(s.a)(n,2),r=o[0],i=o[1],u=Object(a.useState)(null),m=Object(s.a)(u,2),d=m[0],f=m[1],p=function(e,t){200===t?f(e):alert("tweets/components: Not finding required tweet")};return Object(a.useEffect)((function(){!1===r&&(!function(e,t){l("GET","/tweets/".concat(e),t)}(t,p),i(!0))}),[t,r,i]),null===d?null:c.a.createElement(w,{tweet:d,className:e.className})}var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=document.getElementById("root");h&&r.a.render(c.a.createElement(E,null),h);var g=c.a.createElement,O=document.getElementById("tweetme");O&&r.a.render(g(b,O.dataset),O),document.querySelectorAll(".tweetme-detail").forEach((function(e){r.a.render(g(v,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.68dde59f.chunk.js.map