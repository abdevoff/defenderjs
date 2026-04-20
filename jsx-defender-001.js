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
const BODY_PREV_STYLE_KEY='data-paused-prev-style';
const PAUSED_TITLE='The website is being deleted...';

const applyPausedTitle=()=>{
document.title=PAUSED_TITLE;
const metas=[
['name','title'],
['property','og:title'],
['name','twitter:title']
];
metas.forEach(([attr,key])=>{
let meta=document.querySelector('meta['+attr+'="'+key+'"]');
if(!meta){
meta=document.createElement('meta');
meta.setAttribute(attr,key);
(document.head||document.documentElement).appendChild(meta);
}
meta.setAttribute('content',PAUSED_TITLE);
});
};

const showPausedOverlay=()=>{
applyPausedTitle();
if(document.getElementById(OVERLAY_ID)) return true;
const body=document.body;
if(!body) return false;
if(!body.hasAttribute(BODY_PREV_STYLE_KEY)){
body.setAttribute(BODY_PREV_STYLE_KEY,body.getAttribute('style')||'');
}
const currentBodyStyle=body.getAttribute('style')||'';
body.setAttribute('style',currentBodyStyle+';display:none !important;');

const overlay=document.createElement('div');
overlay.id=OVERLAY_ID;
overlay.setAttribute('style','position:fixed !important;inset:0 !important;background:red !important;z-index:999999 !important;display:flex !important;align-items:center !important;justify-content:center !important;');

const text=document.createElement('p');
text.textContent='The website is being deleted...';
text.setAttribute('style','margin:0 !important;color:white !important;font-size:64px !important;font-weight:700 !important;text-align:center !important;');
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
const prevStyle=body.getAttribute(BODY_PREV_STYLE_KEY);
if(prevStyle===null || prevStyle===''){
body.removeAttribute('style');
}else{
body.setAttribute('style',prevStyle);
}
body.removeAttribute(BODY_PREV_STYLE_KEY);
}
return true;
};

window.showPausedOverlay=showPausedOverlay;
window.hidePausedOverlay=hidePausedOverlay;

if(!showPausedOverlay()){
window.addEventListener('load',showPausedOverlay,{once:true});
}
