document.addEventListener('DOMContentLoaded',()=>{
  const active=document.querySelector('[data-page="education"]');
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
const data={
btech:{title:'B.Tech in Computer Science & Engineering (AI & ML)',img:'photo6.png',body:'Kuppam Engineering College, affiliated to JNTUA. Passing year: 2028. Current year: 3rd Year. CGPA: 8.7 / 10.'},
intermediate:{title:'Intermediate (MPC)',img:'photo7.png',body:'Sri Chaitanya Junior College. Year: 2024. Percentage: 91%.'},
school:{title:'Secondary School',img:'photo8.png',body:'ZP High School, Kuppam. Year: 2022. Percentage: 95%.'}
};
const modal=document.getElementById('eduModal'),title=document.getElementById('eduTitle'),body=document.getElementById('eduBody');
document.querySelectorAll('[data-edu]').forEach(b=>b.onclick=()=>{const d=data[b.dataset.edu];title.textContent=d.title;body.innerHTML=`<div class="modal-grid"><div class="modal-image image-box"><img src="../gallery/${d.img}" alt="${d.title}" onerror="this.style.display='none'"></div><div><p>${d.body}</p><h3>Academic Value</h3><p>This stage contributed to problem solving, technical foundations and preparation for higher-level computer science work.</p></div></div>`;modal.classList.add('open')});
document.querySelector('[data-close]').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
