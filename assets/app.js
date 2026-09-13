const menu=document.querySelector('[data-menu]');
document.querySelector('[data-menu-button]')?.addEventListener('click',()=>{const open=menu.classList.toggle('open');document.querySelector('[data-menu-button]').setAttribute('aria-expanded',String(open))});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{b.classList.toggle('active');b.setAttribute('aria-pressed',String(b.classList.contains('active')))}));
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-view]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelector('[data-results]')?.classList.toggle('map-mode',b.dataset.view==='map')}));
const picks=['Art','Histoire','Sciences','Design','Photo','Insolite'];
document.querySelector('[data-inspire]')?.addEventListener('click',()=>{const out=document.querySelector('[data-inspire-result]');out.textContent=`Suggestion : ${picks[Math.floor(Math.random()*picks.length)]} · un après-midi`;out.hidden=false});
