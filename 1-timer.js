import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as S}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),b=document.querySelector("span[data-days]"),q=document.querySelector("span[data-hours]"),v=document.querySelector("span[data-minutes]"),C=document.querySelector("span[data-seconds]");let s=null,d=!1,i=null;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],m.defaultDate>=s?(S.error({color:"red",position:"center",message:"Please choose a date in the future"}),e.disabled=!0):e.disabled=!1}};y(l,m);function D(){d||(d=!0,e.disabled=!0,l.disabled=!0,i=setInterval(()=>{const t=Date.now(),o=s-t,{days:a,hours:u,minutes:c,seconds:r}=M(o);if(o<=0){clearInterval(i),e.disabled=!1;return}b.textContent=n(a),q.textContent=n(u),v.textContent=n(c),C.textContent=n(r)},1e3))}function M(t){const r=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:f,minutes:p,seconds:h}}function n(t){return String(t).padStart(2,"0")}e.addEventListener("click",D);
//# sourceMappingURL=1-timer.js.map
