import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as f}from"./assets/vendor-77e16229.js";const e=document.querySelector("[data-start]"),o=document.querySelector("#datetime-picker"),h=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s=null,c=null;e.addEventListener("click",g);function g(){c=setInterval(q,1e3),e.disabled=!0,o.disabled=!0}function q(){const t=s-new Date;if(t<=0){clearInterval(c),o.disabled=!1;return}const{days:n,hours:r,minutes:a,seconds:u}=C(t);h.textContent=String(n).padStart(2,0),S.textContent=String(r).padStart(2,0),y.textContent=String(a).padStart(2,0),b.textContent=String(u).padStart(2,0)}const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date)return e.disabled=!0,f.error({position:"topRight",message:"Please choose a date in the future"});e.disabled=!1,s=t[0],console.log(t[0])}};p(o,M);function C(t){const i=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:d,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
