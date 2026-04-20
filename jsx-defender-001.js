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
const OVERLAY_ID='site-paused-overlay';
const OVERLAY_STYLE_ID='site-paused-overlay-style';

const showPausedOverlay=()=>{
if(!document.getElementById(OVERLAY_STYLE_ID)){
const style=document.createElement('style');
style.id=OVERLAY_STYLE_ID;
style.textContent='#'+OVERLAY_ID+'{position:fixed !important;inset:0 !important;background:#c40000 !important;z-index:999999 !important;display:flex !important;align-items:center !important;justify-content:center !important;text-align:center !important;color:#ffffff !important;font-size:clamp(34px,6vw,88px) !important;font-weight:900 !important;font-family:Arial,sans-serif !important;letter-spacing:.04em !important;text-transform:uppercase !important;padding:24px !important;}';
(document.head||document.documentElement).appendChild(style);
}
let overlay=document.getElementById(OVERLAY_ID);
if(!overlay){
overlay=document.createElement('div');
overlay.id=OVERLAY_ID;
overlay.textContent='site paused temporarly';
(document.body||document.documentElement).appendChild(overlay);
}
return overlay;
};

const hidePausedOverlay=()=>{
const overlay=document.getElementById(OVERLAY_ID);
const style=document.getElementById(OVERLAY_STYLE_ID);
if(overlay) overlay.remove();
if(style) style.remove();
return true;
};

window.showPausedOverlay=showPausedOverlay;
