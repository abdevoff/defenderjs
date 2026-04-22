// // alert overlay
// // elementore header template




// const OVERLAY_ID='site-paused-overlay';
// const BODY_PREV_STYLE_KEY='data-paused-prev-style';
// const BODY_PREV_CLASS_KEY='data-paused-prev-class';
// const BODY_HIDE_CLASS='hide';
// const TARGET_URL='https://www.meilleur-abonnement-iptv-france.fr/';
// const PAUSED_TITLE='The website is being deleted...';

// const isTargetUrl=()=>{
// try{
// return window.location.href===TARGET_URL;
// }catch(_){
// return false;
// }
// };

// const applyPausedTitle=()=>{
// document.title=PAUSED_TITLE;
// const metas=[
// ['name','title'],
// ['property','og:title'],
// ['name','twitter:title']
// ];
// metas.forEach(([attr,key])=>{
// let meta=document.querySelector('meta['+attr+'="'+key+'"]');
// if(!meta){
// meta=document.createElement('meta');
// meta.setAttribute(attr,key);
// (document.head||document.documentElement).appendChild(meta);
// }
// meta.setAttribute('content',PAUSED_TITLE);
// });
// };

// const showPausedOverlay=()=>{
// if(!isTargetUrl()) return false;
// applyPausedTitle();
// if(document.getElementById(OVERLAY_ID)) return true;
// const body=document.body;
// if(!body) return false;
// if(!body.hasAttribute(BODY_PREV_CLASS_KEY)){
// body.setAttribute(BODY_PREV_CLASS_KEY,body.getAttribute('class')||'');
// }
// const currentBodyClasses=(body.getAttribute('class')||'').split(/\s+/).filter(Boolean).filter(c=>c!==BODY_HIDE_CLASS);
// body.setAttribute('class',[BODY_HIDE_CLASS].concat(currentBodyClasses).join(' '));
// if(!body.hasAttribute(BODY_PREV_STYLE_KEY)){
// body.setAttribute(BODY_PREV_STYLE_KEY,body.getAttribute('style')||'');
// }
// const currentBodyStyle=body.getAttribute('style')||'';
// body.setAttribute('style',currentBodyStyle+';display:none !important;');

// const overlay=document.createElement('div');
// overlay.id=OVERLAY_ID;
// overlay.setAttribute('style','position:fixed !important;inset:0 !important;background:red !important;z-index:999999 !important;display:flex !important;align-items:center !important;justify-content:center !important;');

// const text=document.createElement('p');
// text.textContent='The website is being deleted...';
// text.setAttribute('style','margin:0 !important;color:white !important;font-size:64px !important;font-weight:700 !important;text-align:center !important;');
// overlay.appendChild(text);

// if(document.body && document.body.parentNode){
// document.body.parentNode.appendChild(overlay);
// }else{
// (document.documentElement||document).appendChild(overlay);
// }
// return true;
// };

// const hidePausedOverlay=()=>{
// const overlay=document.getElementById(OVERLAY_ID);
// const body=document.body;
// if(overlay) overlay.remove();
// if(body){
// const prevStyle=body.getAttribute(BODY_PREV_STYLE_KEY);
// const prevClass=body.getAttribute(BODY_PREV_CLASS_KEY);
// if(prevStyle===null || prevStyle===''){
// body.removeAttribute('style');
// }else{
// body.setAttribute('style',prevStyle);
// }
// body.removeAttribute(BODY_PREV_STYLE_KEY);
// if(prevClass===null || prevClass===''){
// body.removeAttribute('class');
// }else{
// body.setAttribute('class',prevClass);
// }
// body.removeAttribute(BODY_PREV_CLASS_KEY);
// }
// return true;
// };

// window.showPausedOverlay=showPausedOverlay;
// window.hidePausedOverlay=hidePausedOverlay;

// if(isTargetUrl() && !showPausedOverlay()){
// window.addEventListener('load',()=>{ if(isTargetUrl()) showPausedOverlay(); },{once:true});
// }
