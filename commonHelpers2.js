import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const i=document.querySelector(".feedback-form"),m=document.querySelector(".input-email"),u=document.querySelector(".message"),d=document.querySelector(".text"),l=document.querySelector(".error"),o=document.querySelector(".empty-error");class g{constructor(t,n){this.email=t,this.message=n}}i.addEventListener("submit",f);function f(e){e.preventDefault();const t=e.target.elements.email.value,n=e.target.elements.message.value,a=["!","£","$","%","^","&","*","(",")","_","-","+","=","#","~","/","?","{","}","[","]","`","¬","|",'"',",","<",">",":",";"];for(let r=0;r<a.length;r+=1)if(t.includes(a[r]))return l.textContent=`Invalid character in name: ${a[r]}`,l.textContent;if(l.textContent="",t.length===0&&n.length===0||(o.textContent="",n.length===0))return o.textContent="Fill please all fields";o.textContent="";const c=new g(t.trim().toLowerCase(),n.trim());console.log(c),d.textContent="Success!"}const s={email:"",message:""};m.addEventListener("input",e=>{s.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))});u.addEventListener("input",e=>{s.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))});
//# sourceMappingURL=commonHelpers2.js.map
