document.addEventListener('DOMContentLoaded',()=>{
  const active=document.querySelector('[data-page="about"]');
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
const modal=document.getElementById('aboutModal'),title=document.getElementById('aboutTitle'),body=document.getElementById('aboutBody');
const details={
education:`<div class="modal-grid"><div class="modal-image image-box"><img src="../gallery/photo6.png" alt="Education" onerror="this.style.display='none'"></div><div><h3>B.Tech CSE (AI & ML)</h3><p>Kuppam Engineering College · Affiliated to JNTUA · Passing Year: 2028 · CGPA: 8.7 / 10 · Current Year: 3rd Year</p><h3>Academic interests</h3><p>Artificial Intelligence, Machine Learning, Data Structures, Algorithms and real-world applications.</p></div></div>`,
focus:`<h3>Focus Areas</h3><div class="tags"><span class="tag">AI / ML</span><span class="tag">Web Development</span><span class="tag">Cybersecurity</span><span class="tag">Blockchain</span><span class="tag">Digital Watermarking</span><span class="tag">Data Science</span></div>`,
goal:`<h3>My Goal</h3><p>To build impactful real-world solutions, strengthen practical engineering skills and gain experience through meaningful software projects and internships.</p>`,
current:`<h3>Currently</h3><p>Exploring advanced AI/ML, practical web applications, cybersecurity concepts, blockchain/DLT and open-source style development workflows.</p>`
};
function openAbout(key){title.textContent={education:'My Education Journey',focus:'My Focus Areas',goal:'My Goal',current:'Currently'}[key];body.innerHTML=details[key];modal.classList.add('open')}
document.querySelectorAll('[data-modal]').forEach(b=>b.onclick=()=>openAbout(b.dataset.modal));
function closeAbout(){modal.classList.remove('open')}
document.querySelector('[data-close]').onclick=closeAbout;modal.onclick=e=>{if(e.target===modal)closeAbout()};
