const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- Catalog: Title~Author, 200 books ---------- */
const C=[['EN','Engineering',210],['AS','Arts & Science',150],['PO','Polytechnic',30],['BE','B.Ed',280],['UG','UG',190],['PG','PG',260],['GK','General Knowledge',50],['ST','Story Books',330],['AU','Author Books',10]];
const R=[
'Engineering Mathematics~B.S. Grewal|Engineering Mechanics~S.S. Bhavikatti|Engineering Thermodynamics~P.K. Nag|Fluid Mechanics~R.K. Bansal|Strength of Materials~R.K. Rajput|Data Structures in C~Reema Thareja|Digital Design~M. Morris Mano|Computer Networks~A. Tanenbaum|Operating System Concepts~Silberschatz|Database System Concepts~Korth|Control Systems~Nagrath & Gopal|Signals and Systems~Oppenheim|Electrical Machines~P.S. Bimbhra|Power Systems~C.L. Wadhwa|Surveying~B.C. Punmia|Concrete Technology~M.S. Shetty|Machine Design~V.B. Bhandari|Microprocessors~Ramesh Gaonkar|CMOS VLSI Design~Neil Weste|Engineering Physics~Gaur & Gupta|Engineering Chemistry~Jain & Jain|Think Python~Allen Downey',
'Principles of Economics~N.G. Mankiw|Indian Polity~M. Laxmikanth|Modern Indian History~Bipan Chandra|Organic Chemistry~Morrison & Boyd|Physical Chemistry~P.W. Atkins|Calculus~Thomas & Finney|Linear Algebra~Hoffman & Kunze|Modern Zoology~Kotpal|Botany~B.P. Pandey|Microbiology~Prescott|Sociology~Anthony Giddens|Psychology~Morgan & King|Financial Accounting~R.L. Gupta|Business Law~N.D. Kapoor|Statistics~S.C. Gupta|Tamil Ilakkiya Varalaru~Mu. Varadarajan|English Literature~W.H. Hudson|Fundamentals of Physics~Halliday & Resnick|Environmental Studies~Erach Bharucha|Marketing Management~Philip Kotler|Mass Communication~Denis McQuail|The Story of Philosophy~Will Durant',
'Engineering Drawing~N.D. Bhatt|Workshop Technology~Hajra Choudhury|Applied Mathematics~TNDTE|Applied Physics~TNDTE|Basic Electrical Engineering~V.K. Mehta|Basic Electronics~B.L. Theraja|Automobile Engineering~Kirpal Singh|Theory of Machines~R.S. Khurmi|Strength of Materials~Ramamrutham|Manufacturing Processes~P.N. Rao|Building Construction~Sushil Kumar|Estimating and Costing~B.N. Dutta|Computer Fundamentals~P.K. Sinha|Programming in C~E. Balagurusamy|Web Designing~TNDTE|Hydraulics~Jagdish Lal|Thermal Engineering~R.S. Khurmi|Industrial Management~O.P. Khanna|Communication Skills~TNDTE|Mechatronics~W. Bolton|Welding Technology~O.P. Khanna|Engineering Materials~TNDTE',
'Educational Psychology~Anita Woolfolk|Philosophy of Education~J.C. Aggarwal|Teaching of Mathematics~Kulbir Sidhu|Teaching of English~Bhatia|Teaching of Science~Vaidya|Teaching of Tamil~State Syllabus|Curriculum Development~Hilda Taba|Evaluation in Education~Robert Ebel|Inclusive Education~Mangal|Guidance and Counselling~Sharma|Educational Technology~Mohanty|Child Development~Hurlock|Sociology of Education~Ottaway|Classroom Management~Marzano|ICT in Education~Rani|Action Research~Mills|History of Indian Education~Nurullah & Naik|Educational Measurement~Garrett|Pedagogy of Social Science~Kochhar|Value Education~Kapoor|Gender, School and Society~NCERT|Learning and Teaching~Dandapani',
'Fundamentals of Accounting~Maheshwari|Business Economics~Dwivedi|Computer Applications~Rajaraman|Programming in Java~E. Balagurusamy|Discrete Mathematics~Kenneth Rosen|Probability and Statistics~Gupta|Analytical Geometry~T.K. Manickavasagam|Differential Equations~Dennis Zill|Quantum Mechanics~Gupta|Inorganic Chemistry~J.D. Lee|Cell Biology~De Robertis|Genetics~Gardner|Principles of Management~Koontz|Banking Theory~Gordon & Natarajan|Corporate Accounting~Reddy & Murthy|Cost Accounting~Jain & Narang|History of Tamil Nadu~K. Rajayyan|Indian Constitution~D.D. Basu|Criminology~Sutherland|Public Administration~Avasthi|Human Resource Management~Gary Dessler|Physics Lab Manual~Department',
'Advanced Engineering Mathematics~Kreyszig|Research Methodology~C.R. Kothari|Introduction to Algorithms~Cormen|Machine Learning~Tom Mitchell|Artificial Intelligence~Russell & Norvig|Digital Image Processing~Gonzalez|Fundamentals of Database Systems~Elmasri|Software Engineering~Pressman|Cloud Computing~Buyya|Strategic Management~Hitt|Financial Management~Prasanna Chandra|Operations Research~Hamdy Taha|Organic Spectroscopy~Kemp|Advanced Physical Chemistry~Puri|Basic Econometrics~Gujarati|Advanced Accounting~Shukla|Thesis Writing Guide~Department|International Business~Cherunilam|Data Mining~Han & Kamber|Cryptography and Network Security~Stallings|Advanced Microbiology~Pelczar|The Mirror and the Lamp~M.H. Abrams',
'India After Gandhi~Ramachandra Guha|General Knowledge Manual~Lucent|Manorama Yearbook~Manorama|India Year Book~Govt. of India|Atlas of the World~Oxford|Dictionary of Science~Oxford|Current Affairs Digest~Pratiyogita|Indian Geography~Majid Husain|World History~Arjun Dev|Indian Economy~Ramesh Singh|Science and Technology~Ravi Agrahari|Sports Almanac~Various|Who is Who of India~Various|Famous Personalities~Pratiyogita|Environment~Shankar IAS|Wonders of the World~Various|Cosmos~Carl Sagan|Computer GK~Arihant|Tamil Nadu GK~TNPSC Guide|Quantitative Aptitude~R.S. Aggarwal|Verbal and Non-Verbal Reasoning~R.S. Aggarwal|Encyclopedia of General Knowledge~Britannica',
'Panchatantra Tales~Vishnu Sharma|Tales of Tenali Raman~Folk|Akbar and Birbal~Folk|Jataka Tales~Folk|Arabian Nights~Folk|Aesop\'s Fables~Aesop|Malgudi Days~R.K. Narayan|Swami and Friends~R.K. Narayan|The Jungle Book~Rudyard Kipling|Alice in Wonderland~Lewis Carroll|Treasure Island~R.L. Stevenson|Vikram and Betaal~Folk|Ponniyin Selvan~Kalki|Sivagamiyin Sabadham~Kalki|Gulliver\'s Travels~Jonathan Swift|Thirukkural Stories~Various|Moral Stories for Children~Various|Grimm\'s Fairy Tales~Brothers Grimm|Heidi~Johanna Spyri|Tom Sawyer~Mark Twain|Charlotte\'s Web~E.B. White|Fairy Tales~H.C. Andersen',
'Wings of Fire~A.P.J. Abdul Kalam|Ignited Minds~A.P.J. Abdul Kalam|India 2020~A.P.J. Abdul Kalam|Agni Siragugal~A.P.J. Abdul Kalam|The Alchemist~Paulo Coelho|Godan~Premchand|Gitanjali~Rabindranath Tagore|The Discovery of India~Jawaharlal Nehru|My Experiments with Truth~M.K. Gandhi|The Guide~R.K. Narayan|The God of Small Things~Arundhati Roy|Train to Pakistan~Khushwant Singh|Thirukkural~Thiruvalluvar|Silappathikaram~Ilango Adigal|Kamba Ramayanam~Kambar|Midnight\'s Children~Salman Rushdie|The White Tiger~Aravind Adiga|Mahabharata~C. Rajagopalachari|Arthashastra~Kautilya|Aathichudi~Avvaiyar|Bharathiyar Kavithaigal~Bharathiyar|Pudhumaipithan Kathaigal~Pudhumaipithan|Sujatha Short Stories~Sujatha|Ramayana~R.K. Narayan'
];
const BOOKS=[];
C.forEach((c,i)=>R[i].split('|').forEach((s,n)=>{const[t,a]=s.split('~');BOOKS.push({id:c[0]+'-'+String(n+1).padStart(3,'0'),t,a,cat:c[1],h:(c[2]+n*17)%360})}));

/* ---------- State ---------- */
let S;try{S=JSON.parse(localStorage.getItem('vlib'))}catch(e){}
S=S||{issues:[],auto:false};
const save=()=>{try{localStorage.setItem('vlib',JSON.stringify(S))}catch(e){}};
const out=id=>S.issues.some(i=>i.bid===id&&!i.ret);
let cat='All',q='',pick=null,cur=null,view='home',busy=false;
const hue=t=>[...t].reduce((a,c)=>a+c.charCodeAt(0),0)*7%360;
const fd=x=>new Date(x).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
const status=r=>r.ret?'Returned':new Date(r.due)<new Date()?'Overdue':'Issued';
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)};

/* ---------- 3D book ---------- */
const bk=(t,h,w=150,ht=210,d=34,x='')=>`<div class="bk" style="--w:${w}px;--h:${ht}px;--d:${d}px;--rx:-14deg;--sd:28s;--c1:hsl(${h} 62% 34%);--c2:hsl(${(h+35)%360} 58% 15%)${x}"><div class="face front"><span>${esc(t)}</span></div><div class="face back"></div><div class="face left"></div><div class="face right pages"></div><div class="face top"></div><div class="face bottom"></div></div>`;
const stage3=(t,h,w=190,ht=270,d=42)=>`<div class="stage3"><div class="halo"></div><div class="fl" style="--fd:5s">${bk(t,h,w,ht,d)}</div></div>`;
const showcase=b=>{const o=out(b.id);return`<div class="show">${stage3(b.t,b.h)}<div><span class="badge ${o?'no':'ok'}">${o?'Issued out':'Available'}</span><h3>${esc(b.t)}</h3><p class="by">${esc(b.a)}</p><div class="facts"><div><span>Call no</span>${b.id}</div><div><span>Department</span>${esc(b.cat)}</div></div><button class="btn gold" data-issue="${b.id}" ${o?'disabled':''}>Issue this book</button></div></div>`};

/* ---------- Page 1: catalog ---------- */
function render(){
  const k=q.trim().toLowerCase();
  const L=BOOKS.filter(b=>(cat==='All'||b.cat===cat)&&(!k||(b.t+' '+b.a+' '+b.cat+' '+b.id).toLowerCase().includes(k)));
  const active=S.issues.filter(i=>!i.ret).length;
  $('#stTotal').textContent=BOOKS.length;$('#stAvail').textContent=BOOKS.filter(b=>!out(b.id)).length;
  $('#stIssued').textContent=active;$('#stCats').textContent=C.length;$('#issuedCount').textContent=active;
  $('#chips').innerHTML=[['All',BOOKS.length],...C.map(c=>[c[1],BOOKS.filter(b=>b.cat===c[1]).length])].map(([n,c])=>`<button class="chip ${n===cat?'active':''}" data-c="${esc(n)}">${esc(n)} (${c})</button>`).join('');
  const s=pick||(k&&L[0]);$('#showcase').innerHTML=s?showcase(s):'';
  $('#info').textContent=L.length?`${L.length} book${L.length>1?'s':''}${cat!=='All'?' in '+cat:''}${k?' matching "'+q.trim()+'"':''}`:'';
  let last='',g='';
  L.forEach(b=>{
    if(b.cat!==last){last=b.cat;g+=`<div class="dept-head" style="--h:${b.h}"><span class="dept-code">${b.id.slice(0,2)}</span><h3>${esc(last)}</h3><span class="dept-count">${L.filter(x=>x.cat===last).length} books</span><i></i></div>`}
    g+=`<article class="card" data-b="${b.id}"><div class="cover" style="background:linear-gradient(145deg,hsl(${b.h} 62% 36%),hsl(${(b.h+35)%360} 58% 16%))"><div class="ct">${esc(b.t)}</div><div class="ca">${esc(b.a)}</div></div><div class="card-info"><div class="meta"><span class="by">${b.id}</span><span class="badge ${out(b.id)?'no':'ok'}">${out(b.id)?'Issued':'Available'}</span></div></div></article>`;
  });
  $('#grid').innerHTML=g||'<p class="noresult">No book found. Use "Book not listed? Issue manually" to add it.</p>';
}

/* ---------- Page 2: issue ---------- */
function renderIssue(){
  const man=!pick;$('#manual').checked=man;$('#mf').hidden=!man;
  $('#mc').innerHTML=C.map(c=>`<option>${esc(c[1])}</option>`).join('')+'<option>Other</option>';
  $('#err').textContent='';preview();
}
function preview(){
  const man=$('#manual').checked;
  if(man){const t=$('#mt').value.trim()||'Your book';$('#issueBook').innerHTML=stage3(t,hue(t),170,240,38)+`<h3>${esc(t)}</h3>`}
  else $('#issueBook').innerHTML=stage3(pick.t,pick.h,170,240,38)+`<h3>${esc(pick.t)}</h3><p class="by">${esc(pick.a)} · ${pick.id}</p>`;
}

/* ---------- Page 3: details ---------- */
function renderSlip(){
  $('#auto').checked=S.auto;
  const r=cur||S.issues[S.issues.length-1];
  if(r){
    const b=BOOKS.find(x=>x.id===r.bid),h=b?b.h:hue(r.t);
    $('#slipBook').innerHTML=stage3(r.t,h,170,240,38);
    $('#slip').innerHTML=`<div class="slip-top"><div><p class="by">VIGNESH Library · Book issue slip</p><h3>${esc(r.t)}</h3><p class="by">${esc(r.a)}</p></div><span class="badge ${status(r)==='Returned'?'ok':status(r)==='Overdue'?'no':'warn'}">${status(r)}</span></div>
    <div class="facts"><div><span>Slip no</span>${r.no}</div><div><span>Call no</span>${r.bid}</div><div><span>Department</span>${esc(r.cat)}</div><div><span>Loan period</span>${r.days} days</div>
    <div><span>Member</span>${esc(r.name)}</div><div><span>Register no</span>${esc(r.reg)}</div><div><span>Class</span>${esc(r.dept)||'—'}</div><div><span>Phone</span>${esc(r.phone)||'—'}</div>
    <div><span>Issued on</span>${fd(r.d)}</div><div><span>Return by</span>${fd(r.due)}</div></div>
    <div class="sign"><span>Member signature</span><span>Librarian</span></div>`;
  }else{$('#slipBook').innerHTML='';$('#slip').innerHTML='<p class="empty">No slip yet. Issue a book to see its details here.</p>'}
  $('#issuedEmpty').style.display=S.issues.length?'none':'block';
  $('#issuedBody').innerHTML=S.issues.slice().reverse().map(r=>`<tr><td>${esc(r.t)}<small>${r.bid}</small></td><td>${esc(r.name)}<small>${esc(r.reg)}</small></td><td>${fd(r.d)}</td><td>${fd(r.due)}</td><td><span class="badge ${status(r)==='Returned'?'ok':status(r)==='Overdue'?'no':'warn'}">${status(r)}</span></td><td><button class="btn ghost sm" data-print="${r.no}">Print</button> ${r.ret?'':`<button class="btn ghost sm" data-ret="${r.no}">Return</button>`}</td></tr>`).join('');
}

/* ---------- Page-turn navigation ---------- */
const ORDER=['home','issue','slip'];
function go(v,after){
  if(busy)return;if(v===view){after&&after();return}
  busy=true;const t=$('#turn');t.className='on '+(ORDER.indexOf(v)>ORDER.indexOf(view)?'fwd':'back');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    $$('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));
    $$('.nav [data-go]').forEach(a=>a.classList.toggle('on',a.dataset.go===v));
    view=v;scrollTo(0,0);if(v==='home')render();if(v==='issue')renderIssue();if(v==='slip')renderSlip();
    t.classList.add('go');setTimeout(()=>{t.className='';busy=false;after&&after()},1250);
  }));
}

/* ---------- Events ---------- */
$('#search').oninput=e=>{q=e.target.value;pick=null;render()};
$('#manual').onchange=()=>{$('#mf').hidden=!$('#manual').checked;if(!$('#manual').checked&&!pick){$('#manual').checked=true;$('#mf').hidden=false;toast('Pick a book from the catalog first.')}preview()};
$('#mt').oninput=preview;
$('#auto').onchange=e=>{S.auto=e.target.checked;save()};
$('#printBtn').onclick=()=>print();
$('#form').onsubmit=e=>{
  e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),man=$('#manual').checked,err=m=>$('#err').textContent=m;
  let b;
  if(man){if(!f.mt.trim())return err('Enter the book name.');b={id:'MAN-'+String(S.issues.filter(i=>i.man).length+1).padStart(3,'0'),t:f.mt.trim(),a:f.ma.trim()||'—',cat:f.mc,man:1}}
  else{b=pick;if(!b)return err('Pick a book first, or enter it manually.');if(out(b.id))return err('This book is already issued.')}
  if(!f.name.trim()||!f.reg.trim())return err('Member name and register number are required.');
  const d=new Date(),due=new Date(d.getTime()+ +f.days*864e5);
  cur={no:'ISS-'+String(S.issues.length+1).padStart(4,'0'),bid:b.id,t:b.t,a:b.a,cat:b.cat,man:b.man||0,name:f.name.trim(),reg:f.reg.trim(),dept:f.dept.trim(),phone:f.phone.trim(),days:+f.days,d:d.toISOString(),due:due.toISOString(),ret:null};
  S.issues.push(cur);save();e.target.reset();pick=null;toast('Book issued');
  go('slip',()=>{if(S.auto)print()});
};
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();if(g.dataset.go==='issue'&&view!=='issue')pick=pick;return go(g.dataset.go)}
  const i=e.target.closest('[data-issue]');if(i){pick=i.dataset.issue==='manual'?null:BOOKS.find(b=>b.id===i.dataset.issue);return go('issue')}
  const c=e.target.closest('[data-c]');if(c){cat=c.dataset.c;pick=null;return render()}
  const b=e.target.closest('[data-b]');if(b){pick=BOOKS.find(x=>x.id===b.dataset.b);render();return $('#showcase').scrollIntoView({behavior:'smooth',block:'center'})}
  const p=e.target.closest('[data-print]');if(p){cur=S.issues.find(r=>r.no===p.dataset.print);renderSlip();scrollTo(0,0);return setTimeout(()=>print(),300)}
  const r=e.target.closest('[data-ret]');if(r){const x=S.issues.find(y=>y.no===r.dataset.ret);x.ret=new Date().toISOString();save();toast('Book returned');renderSlip();render()}
});

/* ---------- Floating background books ---------- */
for(let i=0;i<7;i++){const b=BOOKS[i*29%BOOKS.length];$('#stage').insertAdjacentHTML('beforeend',`<div class="fl" style="left:${5+i*14}%;top:${(i%3)*30+6}%;--fd:${6+i}s;opacity:.5;transform:translateZ(${-200-i*50}px)">${bk(b.t,b.h,110,155,26,`;--sd:${24+i*3}s`)}</div>`)}
render();
