var e=document.querySelector(".logo"),n=document.querySelector("body"),r=new Promise(function(n){e.addEventListener("click",function(){n()})}),o=new Promise(function(e,n){setTimeout(function(){return n(Error())},3e3)});r.then(function(){n.insertAdjacentHTML("beforeend",'<div class="message">Promise was resolved!</div>')}),o.catch(function(){n.insertAdjacentHTML("beforeend",'<div class="message error-message">Promise was rejected!</div>')});//# sourceMappingURL=index.2cfa0628.js.map

//# sourceMappingURL=index.2cfa0628.js.map
