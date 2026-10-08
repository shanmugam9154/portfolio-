document.addEventListener('DOMContentLoaded',()=>{
  const active=document.querySelector('[data-page="skills"]');
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
const skills={
programming:{title:'Programming Languages',icon:'i-code',intro:'Practical programming foundations and libraries learned while building projects.',groups:[
['Python','NumPy, Pandas, Matplotlib, OpenCV, PyTesseract, Flask, FastAPI, APScheduler, OOP, APIs, exception handling'],
['Java','OOP, classes and objects, inheritance, polymorphism, collections, exception handling'],
['JavaScript','ES6+, DOM, events, async/await, Fetch API, dynamic UI'],
['Rust','Ownership, structs, enums, pattern matching and error handling'],['SQL','CRUD, joins, subqueries, aggregation and database design']]},
web:{title:'Web Development',intro:'Frontend and backend technologies used to build responsive applications.',groups:[
['HTML','Semantic HTML, forms, tables, accessibility basics, multimedia'],
['CSS','Flexbox, Grid, responsive design, animations, transitions'],
['JavaScript','DOM manipulation, event handling, APIs, async/await'],
['React','Components, props, state, hooks and API integration'],
['Flask','Routing, REST APIs, backend integration'],['Node.js','HTTP services, APIs and backend basics']]},
database:{title:'Databases',intro:'Database technologies and practical data handling.',groups:[
['SQLite3','Tables, CRUD, queries, relationships and local database design'],
['SQLAlchemy','ORM, models, queries and database integration'],
['SQL','Joins, filtering, grouping, subqueries and aggregate functions']]},
aiml:{title:'AI / ML & Data Science',intro:'Libraries and techniques used in machine learning and data projects.',groups:[
['NumPy','Arrays, numerical operations and vectorized computation'],
['Pandas','DataFrames, cleaning, transformation and analysis'],
['Matplotlib','Data visualization and plotting'],
['Scikit-learn','Preprocessing, regression, classification and evaluation'],
['NLP','Tokenization, TF-IDF and text classification'],
['Generative AI','Prompt engineering, LLM API integration and AI applications'],
['Jupyter','Interactive experiments, analysis and visualization']]},
tools:{title:'Tools & Platforms',intro:'Development and deployment tools used in practical projects.',groups:[
['Git / GitHub','Repositories, commits, branching, push/pull and version control'],
['VS Code','Development, debugging and extensions'],
['Jupyter Notebook','Data analysis and experimentation'],
['Render','Deployment, web services and environment variables'],
['Vercel','Frontend deployment and production hosting']]},
core:{title:'Core Concepts',intro:'Core software engineering and problem-solving foundations.',groups:[
['DSA','Data structures, algorithms, complexity and problem solving'],
['OOP','Classes, objects, inheritance, abstraction and polymorphism'],
['System Design','Architecture, APIs, components and data flow'],
['Problem Solving','Requirement analysis, decomposition, prototyping and iteration']]}
};
const modal=document.getElementById('skillModal'),title=document.getElementById('skillTitle'),body=document.getElementById('skillBody');
document.querySelectorAll('[data-skill]').forEach(card=>card.onclick=()=>{
 const d=skills[card.dataset.skill];title.textContent=d.title;
 body.innerHTML=`<p>${d.intro}</p>${d.groups.map(g=>`<h3>${g[0]}</h3><p>${g[1]}</p>`).join('')}`;
 modal.classList.add('open');
});
document.querySelector('[data-close]').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
