document.addEventListener('DOMContentLoaded',()=>{
  const active=document.querySelector('[data-page="projects"]');
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
const projects={
quantumtrace:{title:'QuantumTrace',img:'photo2.png',overview:'A forensic watermark system designed to create a recipient- and session-specific watermark when protected content is decrypted.',problem:'Digital documents can be redistributed after legitimate decryption, making it difficult to identify the recipient or session associated with a leaked copy.',solution:'Generate a unique forensic watermark at the moment of decryption, bind it to the recipient/session, create an audit record and release the watermarked plaintext.',features:['Session-specific watermark','Recipient binding','Cryptographic audit record','Offline DLT audit storage','Tamper-evident verification'],tech:['Python','Flask','Cryptography','SHA3-256','Digital Watermarking','Blockchain / DLT','HTML','CSS','JavaScript'],contribution:'End-to-end workflow, security logic, watermarking concept, audit architecture and prototype interface.'},
agrivoice:{title:'AgriVoice',img:'photo3.png',overview:'An AI-powered agricultural assistance system focused on practical crop and farmer guidance.',problem:'Farmers need accessible guidance for crop selection, disease identification and agriculture-related decisions.',solution:'Combine AI/ML, voice interaction and agriculture-focused data to provide understandable recommendations.',features:['Crop recommendation','Disease assistance','Voice interaction','AI-powered responses','Farmer-friendly interface'],tech:['Python','NLP','Machine Learning','OpenCV','Flask','HTML','CSS','JavaScript'],contribution:'Application workflow and AI-oriented features for a practical farmer assistance interface.'},
mood:{title:'Mood Predictor',img:'photo4.png',overview:'A machine-learning web application that predicts a user mood from provided signals and presents an understandable result.',problem:'Users may want a lightweight way to understand mood-related patterns from their inputs.',solution:'Preprocess user input, apply a trained ML model and present the prediction through a simple web application.',features:['Input preprocessing','ML prediction','Simple web UI','Result visualization','Flask backend'],tech:['Python','Scikit-learn','Pandas','NumPy','Flask','HTML','CSS','JavaScript'],contribution:'ML workflow, preprocessing, Flask integration and user-facing application.'},
md:{title:'MD Photography',img:'photo5.png',overview:'A photography portfolio and booking concept for showcasing services and managing client booking workflows.',problem:'Photography clients need a clear way to explore packages, view work and submit booking information through one interface.',solution:'Create a modern responsive portfolio with package presentation, gallery content and a booking-oriented workflow.',features:['Photography portfolio','Package showcase','Booking workflow','Gallery','Responsive UI','Client contact flow'],tech:['HTML','CSS','JavaScript','Flask','SQLite','SQL','Responsive Design'],contribution:'Portfolio interface, booking workflow, responsive UI and backend-connected structure.'}
};
const modal=document.getElementById('projectModal'),title=document.getElementById('projectTitle'),body=document.getElementById('projectBody');
function openProject(key){
 const p=projects[key];title.textContent=p.title;
 body.innerHTML=`<div class="modal-grid"><div><div class="modal-image image-box"><img src="../gallery/${p.img}" alt="${p.title}" onerror="this.style.display='none'"></div><div class="project-modal-actions"><a class="btn dark" href="https://github.com/" target="_blank">GitHub</a><a class="btn" href="${key==='quantumtrace'?'https://quantumtrace-3t8k.onrender.com/':'https://example.com/'}" target="_blank">Live Demo</a></div></div><div><span class="badge">Project Details</span><h3>Project Overview</h3><p>${p.overview}</p><h3>Problem Statement</h3><p>${p.problem}</p><h3>Proposed Solution</h3><p>${p.solution}</p></div></div><h3>Key Features</h3><div class="tags">${p.features.map(x=>`<span class="tag">${x}</span>`).join('')}</div><h3>Technologies Used</h3><div class="tags">${p.tech.map(x=>`<span class="tag">${x}</span>`).join('')}</div><h3>My Contribution</h3><p>${p.contribution}</p>`;
 modal.classList.add('open');
}
document.querySelectorAll('[data-project]').forEach(c=>{c.onclick=()=>openProject(c.dataset.project);c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(c.dataset.project)}}});
document.querySelector('[data-close]').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
