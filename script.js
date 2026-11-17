const $=s=>document.querySelector(s),WA='https://wa.me/558421421094?text=';
const S=[['Acompanhamento hospitalar e domiciliar','Plantão avulso: apoio em internação, alta ou recuperação, com higiene, alimentação e mobilidade.','hospitalar'],
['Acompanhamento fixo domiciliar','Presença frequente ou contínua, com rotina de cuidados personalizada e apoio nas atividades do dia a dia.','fixo'],
['Banho e alimentação','Auxílio no banho e na higiene pessoal, apoio durante as refeições e na mobilidade, com atenção e dignidade.','banho'],
['Apoio com medicação','Lembrete dos horários e apoio na organização da rotina de medicamentos, conforme orientação médica.','medicacao'],
['Cuidado cirúrgico','Auxílio na higiene e nos cuidados com o curativo, apoio na medicação conforme prescrição e atenção constante na recuperação.','cirurgico'],
['Serviços de enfermagem','Troca de curativos, cuidados com sondas, administração de medicamentos e outros serviços de enfermagem no conforto do lar.','enfermagem']];
$('#sv').innerHTML=S.map(s=>`<article class="sv fr rv" data-wa="Olá! Tenho interesse em: ${s[0]}."><img loading="lazy" src="assets/${s[2]}.jpg" alt="${s[0]}"><div class="cap"><h3>${s[0]}</h3><p>${s[1]}</p><b class="go">Pedir pelo WhatsApp</b></div></article>`).join('');
const T=['Curativos simples e especiais','Passagem de sonda','Medicações','Acompanhamento domiciliar e hospitalar','Acompanhamento em consultas e exames','Retirada de pontos','Prevenção e tratamento de lesões por pressão','Troca de bolsa de colostomia/ileostomia','Acompanhamento de pós-cirúrgicos','Serviços de banho e alimentação'];
$('#tl').innerHTML=T.map((t,i)=>`<a class="rv" href="#" data-wa="Olá! Tenho interesse em: ${t}."><i>${String(i+1).padStart(2,'0')}</i>${t}</a>`).join('');
document.addEventListener('click',e=>{const a=e.target.closest('[data-wa]');if(a){e.preventDefault();window.open(WA+encodeURIComponent(a.dataset.wa),'_blank','noopener')}});
let done=0;function open(){if(done)return;done=1;$('#intro').classList.add('go');document.body.classList.remove('lock');setTimeout(()=>document.body.classList.add('ready'),500);setTimeout(()=>$('#intro').remove(),1400);setTimeout(io,500)}
$('#pts').innerHTML=Array.from({length:26},()=>`<i class="pt" style="--x:${Math.random()*100}%;--d:${2+Math.random()*3}s;--w:${Math.random()*2}s"></i>`).join('');
setTimeout(open,4300);$('#skip').onclick=open;
function io(){document.querySelectorAll('.ph').forEach(e=>e.classList.add('l'));document.querySelectorAll('.doc>.rv:not(.ph)').forEach(e=>e.classList.add('r'));document.querySelectorAll('.bx,.fb,.sv,.eq').forEach(e=>e.classList.add('z'));
document.querySelectorAll('.bxg,.fbg,.svg,.eqg,.grid').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--dl',(i%3)*.12+'s')));
const o=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting?x.target.classList.add('in'):x.target.classList.remove('in')),{threshold:.12,rootMargin:'0px 0px -6% 0px'});document.querySelectorAll('.rv').forEach(n=>o.observe(n))}
const m=$('#menu'),b=$('#bg');const tg=f=>{m.classList.toggle('o',f);b.classList.toggle('o',f)};b.onclick=()=>tg(!m.classList.contains('o'));m.onclick=e=>{if(e.target.tagName=='A')tg(false)};
document.querySelectorAll('.ph').forEach(c=>{if(!matchMedia('(hover:hover)').matches)return;c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
