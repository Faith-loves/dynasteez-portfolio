const photos=[
{"id":21,"title":"Clothes for the Benefit University Saving App","category":"tops","src":"21.jpeg","note":"Original supplied navy quarter-zip top."},
{"id":22,"title":"Top made for BUCC GAMES","category":"tops","src":"22.jpeg","note":"Red Dynasteez signature tee, front view."},
{"id":23,"title":"Info Tech 01 / Reverse","category":"tops","src":"23.jpeg","note":"Red Info Tech 01 tee, back view."},
{"id":24,"title":"Customized brand","category":"tops","src":"24.jpeg","note":"Original supplied sleeveless designs, front and back."},
{"id":25,"title":"Mavix / Street Legacy 44","category":"jerseys","src":"25.jpeg","note":"Original supplied Mavix jersey collection artwork."},
{"id":26,"title":"Mavix 44 / Red","category":"jerseys","src":"26.jpeg","note":"Original supplied red polo, front and back."},
{"id":27,"title":"Mavix 44 / Black","category":"jerseys","src":"27.jpeg","note":"Original supplied black polo, front and back."},
 {id:16,title:'The 77 / Hot pink',category:'jerseys',src:'16.jpeg',note:'The original pink-on-black jersey. Front and back.'},
 {id:7,title:'After hours',category:'sets',src:'display/look-7.jpg',note:'The black matching set.'},
 {id:5,title:'The 77 / Ice wash',category:'jerseys',src:'5.jpeg',note:'The ice-grey jersey. Front and back.'},
 {id:10,title:'Pink graphic, blue denim',category:'sets',src:'display/look-10.jpg',note:'Graphic jersey paired with denim shorts.'},
 {id:18,title:'The 77 / Violet hour',category:'jerseys',src:'18.jpeg',note:'Violet graphics on black. Front and back.'},
 {id:13,title:'The crown tank',category:'tops',src:'display/look-13.jpg',note:'Black sleeveless top with the original chest signature.'},
 {id:8,title:'The 77 / Lilac haze',category:'jerseys',src:'8.jpeg',note:'The lilac edition. Front and back.'},
 {id:20,title:'Powder-blue details',category:'sets',src:'20.jpeg',note:'The zip jacket and matching trouser, up close.'},
 {id:9,title:'The 77 / Midnight',category:'jerseys',src:'9.jpeg',note:'Black on black, with silver graphics. Front and back.'},
 {id:14,title:'Off-duty energy',category:'sets',src:'display/look-14.jpg',note:'The crown tank with printed trousers.'},
 {id:11,title:'The grey signature',category:'tops',src:'display/look-11.jpg',note:'Grey logo tee styled with denim shorts.'},
 {id:19,title:'Inside the collective',category:'studio',src:'display/look-19.jpg',note:'The studio, the signature and the clothing rail.'},
 {id:1,title:'Caps & acid denim',category:'sets',src:'display/look-1.jpg',note:'Black top, printed caps and denim shorts.'},
 {id:17,title:'Ice wash / Front study',category:'tops',src:'display/look-17.jpg',note:'The light-grey graphic jersey styled with denim.'},
 {id:6,title:'The crown tee',category:'tops',src:'display/look-6.jpg',note:'A closer view of the black signature tee.'},
 {id:2,title:'The street uniform',category:'sets',src:'display/look-2.jpg',note:'Black top and denim, styled with the cap collection.'},
 {id:15,title:'The statement / Reverse',category:'tops',src:'display/look-15.jpg',note:'The pink graphic jersey, seen from the back.'},
 {id:3,title:'Black tee, track shorts',category:'sets',src:'display/look-3.jpg',note:'An easy black-on-black combination with coloured caps.'},
 {id:12,title:'Ice wash / Reverse',category:'tops',src:'display/look-12.jpg',note:'A closer look at the back of the 77 jersey.'},
 {id:4,title:'Everyday, with attitude',category:'sets',src:'display/look-4.jpg',note:'Another view of the black top, shorts and signature caps.'}
];
const grid=document.querySelector('#collection-grid'),dialog=document.querySelector('#image-dialog');let selectedIndex=0,activeFilter='all';
function openPhoto(id){selectedIndex=photos.findIndex(p=>p.id===id);updateDialog();if(!dialog.open)dialog.showModal()}
function updateDialog(){const p=photos[selectedIndex];document.querySelector('#dialog-image').src='assets/'+p.src;document.querySelector('#dialog-image').alt=p.title;document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-note').textContent=p.note;document.querySelector('#dialog-index').textContent=`${String(selectedIndex+1).padStart(2,'0')} / ${photos.length} — DYNASTEEZ ORIGINALS`}
function render(){grid.replaceChildren();const list=document.body.dataset.page==='collection'?photos.filter(p=>activeFilter==='all'||p.category===activeFilter):[22,16,21,24,26,13].map(id=>photos.find(p=>p.id===id));document.querySelector('#collection-count').textContent=`${String(list.length).padStart(2,'0')} IMAGES`;list.forEach((p,i)=>{const button=document.createElement('button');button.className='collection-card '+(p.category==='jerseys'?'product':'editorial');button.dataset.photo=p.id;const media=document.createElement('div');media.className='card-media';const image=document.createElement('img');image.src='assets/'+p.src;image.alt=p.title;image.loading='eager';image.decoding='async';media.append(image);const zoom=document.createElement('span');zoom.className='image-zoom';zoom.textContent='↗';media.append(zoom);const caption=document.createElement('div');caption.className='card-caption';const number=document.createElement('span');number.textContent=String(i+1).padStart(2,'0');const title=document.createElement('h3');title.textContent=p.title;const tag=document.createElement('small');tag.textContent=p.category==='jerseys'?'FRONT / BACK':p.category==='studio'?'THE STUDIO':'COLLECTION STUDY';caption.append(number,title,tag);button.append(media,caption);button.onclick=()=>openPhoto(p.id);grid.append(button)})}
for(const button of document.querySelectorAll('[data-filter]'))button.onclick=()=>{activeFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});render()};
for(const button of document.querySelectorAll('[data-image]'))button.onclick=()=>openPhoto(Number(button.dataset.image));
document.querySelector('.dialog-close').onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close()};document.querySelector('#previous-image').onclick=()=>{selectedIndex=(selectedIndex+photos.length-1)%photos.length;updateDialog()};document.querySelector('#next-image').onclick=()=>{selectedIndex=(selectedIndex+1)%photos.length;updateDialog()};document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowRight')document.querySelector('#next-image').click();if(e.key==='ArrowLeft')document.querySelector('#previous-image').click()});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;let scheduled=false;const heroGarment=document.querySelector('.hero-fan');if(heroGarment)addEventListener('scroll',()=>{if(reduced||scheduled)return;scheduled=true;requestAnimationFrame(()=>{heroGarment.style.transform=`translateY(${Math.min(scrollY*.4,180)}px) rotate(${Math.min(scrollY*.015,6)}deg)`;scheduled=false})},{passive:true});render();