import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";document.querySelector('button[type="submit"]');const t=document.querySelector(".form"),e=t.elements.delay,i=t.elements.state;t.addEventListener("submit",r=>{r.preventDefault(),new Promise((s,l)=>setTimeout(()=>{i.value==="fulfilled"?s(e.value):l(e.value)},e.value)).then(s=>{o.success({color:"green",position:"center",message:`✅ Fulfilled promise in ${e.value}ms`})}).catch(s=>{o.error({color:"red",position:"center",message:`❌ Rejected promise in ${e.value}ms`})}).finally(()=>t.reset())});
//# sourceMappingURL=2-snackbar.js.map
