document.addEventListener('DOMContentLoaded',()=>{
  const active=document.querySelector('[data-page="contact"]');
  if(active) active.classList.add('active');
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  }
});
document.getElementById('contactForm').addEventListener('submit',async e=>{
 e.preventDefault();const status=document.getElementById('status');status.textContent='Sending...';
 const data=Object.fromEntries(new FormData(e.target));
 try{const r=await fetch('http://localhost:3000/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
 status.textContent=r.ok?'Message received successfully.':'Backend returned an error.';if(r.ok)e.target.reset();}
 catch(err){status.textContent='Backend is not running. Start backend/server.js to receive messages.';}
});
