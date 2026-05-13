// FAQ toggle
function toggleFaq(el){
  const item = el.parentElement;
  item.classList.toggle('open');
}

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Sticky CTA hide/show
const heroCta = document.querySelector('.hero .btn-cta');
const stickyCta = document.querySelector('.sticky-cta');
if(heroCta && stickyCta){
  const io = new IntersectionObserver(([e])=>{
    stickyCta.style.display = e.isIntersecting ? 'none' : 'flex';
  });
  io.observe(heroCta);
}
