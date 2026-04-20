// rm css
(function(){
const fromBase64=(value)=>{
if(typeof value!=='string' || value==='') return value;
const normalized=value.replace(/-/g,'+').replace(/_/g,'/');
const padded=normalized.padEnd(normalized.length+(4-normalized.length%4)%4,'=');
try{
if(typeof atob==='function'){
return atob(padded);
}
if(typeof Buffer!=='undefined'){
return Buffer.from(padded,'base64').toString('utf8');
}
}catch(_){
return value;
}
return value;
};
window.stop();
setInterval(()=>{
document.querySelectorAll(fromBase64('bGlua1tyZWw9InN0eWxlc2hlZXQiXQ==')).forEach(e=>e.remove());
document.querySelectorAll(fromBase64('W3N0eWxlXQ==')).forEach(e=>e[fromBase64('cmVtb3ZlQXR0cmlidXRl')](fromBase64('c3R5bGU=')));
document.querySelectorAll(fromBase64('c2NyaXB0')).forEach(e=>e.remove());
},500);
})();