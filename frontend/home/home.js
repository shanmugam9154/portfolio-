document.addEventListener('DOMContentLoaded',()=>{
  const active=document.querySelector('[data-page="home"]');
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
const modal=document.getElementById('homeModal'),title=document.getElementById('homeTitle'),body=document.getElementById('homeBody');
function showHome(t,h){title.textContent=t;body.innerHTML=h;modal.classList.add('open')}
function closeHome(){modal.classList.remove('open')}
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeHome);
modal.addEventListener('click',e=>{if(e.target===modal)closeHome()});
document.getElementById('problemBtn').onclick=()=>showHome('Problem Solver',`<p>I enjoy breaking real-world problems into smaller technical steps, researching practical solutions and turning them into working prototypes.</p><h3>Approach</h3><ul><li>Understand the real requirement</li><li>Design a practical technical solution</li><li>Build and test the prototype</li><li>Iterate from feedback</li></ul>`);
document.getElementById('learningBtn').onclick=()=>showHome('Always Learning',`<p>Current learning areas include AI/ML, data science, web development, cybersecurity, blockchain and modern developer tooling.</p><div class="tags"><span class="tag">AI / ML</span><span class="tag">Python</span><span class="tag">Web Development</span><span class="tag">Cybersecurity</span><span class="tag">Blockchain</span></div>`);
