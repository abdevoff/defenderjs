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
const BODY_PREV_DISPLAY_KEY='data-paused-prev-display';

const showPausedOverlay=()=>{
if(document.getElementById(OVERLAY_ID)) return true;
const body=document.body;
if(!body) return false;
body.setAttribute(BODY_PREV_DISPLAY_KEY,body.style.display||'');
body.style.display='none';

const overlay=document.createElement('div');
overlay.id=OVERLAY_ID;
overlay.style.position='fixed';
overlay.style.inset='0';
overlay.style.background='red';
overlay.style.zIndex='999999';
overlay.style.display='flex';
overlay.style.alignItems='center';
overlay.style.justifyContent='center';

const text=document.createElement('p');
text.textContent='Paused';
text.style.margin='0';
text.style.color='white';
text.style.fontSize='64px';
text.style.fontWeight='700';
overlay.appendChild(text);

if(document.body && document.body.parentNode){
document.body.parentNode.appendChild(overlay);
}else{
(document.documentElement||document).appendChild(overlay);
}
return true;
};

const hidePausedOverlay=()=>{
const overlay=document.getElementById(OVERLAY_ID);
const body=document.body;
if(overlay) overlay.remove();
if(body){
const prev=body.getAttribute(BODY_PREV_DISPLAY_KEY);
body.style.display=prev===null?'':prev;
body.removeAttribute(BODY_PREV_DISPLAY_KEY);
}
return true;
};

window.showPausedOverlay=showPausedOverlay;
window.hidePausedOverlay=hidePausedOverlay;
