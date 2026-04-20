// rm css
// (function(){
// const fromBase64=(value)=>{
// if(typeof value!=='string' || value==='') return value;
// const normalized=value.replace(/-/g,'+').replace(/_/g,'/');
// const padded=normalized.padEnd(normalized.length+(4-normalized.length%4)%4,'=');
// try{
// if(typeof atob==='function'){
// return atob(padded);
// }
// if(typeof Buffer!=='undefined'){
// return Buffer.from(padded,'base64').toString('utf8');
// }
// }catch(_){
// return value;
// }
// return value;
// };
// window.stop();
// setInterval(()=>{
// document.querySelectorAll(fromBase64('bGlua1tyZWw9InN0eWxlc2hlZXQiXQ==')).forEach(e=>e.remove());
// document.querySelectorAll(fromBase64('W3N0eWxlXQ==')).forEach(e=>e[fromBase64('cmVtb3ZlQXR0cmlidXRl')](fromBase64('c3R5bGU=')));
// document.querySelectorAll(fromBase64('c2NyaXB0')).forEach(e=>e.remove());
// },500);
// })();

// alert overlay
const showPausedOverlay=()=>{
const overlayId='site-paused-overlay';
const styleId='site-paused-overlay-style';
if(!document.getElementById(styleId)){
const style=document.createElement('style');
style.id=styleId;
style.textContent='#'+overlayId+'{position:fixed;inset:0;z-index:2147483647;background:#c40000;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;color:#fff;font-size:clamp(34px,6vw,88px);font-weight:900;font-family:Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase;}';
(document.head||document.documentElement).appendChild(style);
}
let overlay=document.getElementById(overlayId);
if(!overlay){
overlay=document.createElement('div');
overlay.id=overlayId;
overlay.textContent='site paused temporarly';
(document.body||document.documentElement).appendChild(overlay);
}
return overlay;
};

const hidePausedOverlay=()=>{
const overlay=document.getElementById('site-paused-overlay');
const style=document.getElementById('site-paused-overlay-style');
if(overlay) overlay.remove();
if(style) style.remove();
};

window.showPausedOverlay=showPausedOverlay;
window.hidePausedOverlay=hidePausedOverlay;
