const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.course-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    filter.classList.add('active');

    const category = filter.dataset.filter;
    cards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.style.display = show ? 'flex' : 'none';
    });
  });
});

const form = document.getElementById('demoForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  message.textContent = `Thanks ${name}! Your demo request has been captured in this demo website.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

const style = document.createElement('style');
style.textContent = `
@media(max-width:900px){
  .nav-links.open{
    display:flex;position:absolute;top:76px;left:0;right:0;background:#fff;
    padding:20px 4%;border-bottom:1px solid #e7e8ec;flex-direction:column;gap:16px;
    box-shadow:0 15px 30px rgba(0,0,0,.08)
  }
}`;
document.head.appendChild(style);
