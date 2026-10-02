/* Genesis A&I — site interactions */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: scrolled state ---------- */
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile navigation ---------- */
  const toggle = $('.nav-toggle');
  const nav = $('.main-nav');
  const setNav = open => {
    nav.classList.toggle('open', open);
    header.classList.toggle('nav-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open);
  };
  toggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setNav(false); });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Footer helpers ---------- */
  $$('[data-year]').forEach(el => (el.textContent = new Date().getFullYear()));
  $$('[data-top]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0 }); }));

  /* ---------- Process wheel ---------- */
  const wheel = $('[data-wheel]');
  const steps = $$('[data-steps] li');
  if (wheel && steps.length) {
    const total = steps.length;
    const progress = $('.ring-progress', wheel);
    const fade = $('.fade', wheel);
    const kEl = $('[data-k]', wheel), titleEl = $('[data-title]', wheel), descEl = $('[data-desc]', wheel);
    let current = 0, timer = null;

    const nodes = steps.map((li, i) => {
      const angle = (-90 + (360 / total) * i) * Math.PI / 180;
      const btn = document.createElement('button');
      btn.className = 'wheel-node';
      btn.type = 'button';
      btn.textContent = i + 1;
      btn.setAttribute('aria-label', `Step ${i + 1}: ${$('h4', li).textContent}`);
      btn.style.left = `${50 + 50 * Math.cos(angle)}%`;
      btn.style.top = `${50 + 50 * Math.sin(angle)}%`;
      btn.addEventListener('click', () => { stop(); show(i); });
      wheel.appendChild(btn);
      li.addEventListener('click', () => { stop(); show(i); });
      return btn;
    });

    const show = i => {
      current = i;
      nodes.forEach((n, j) => n.classList.toggle('active', j === i));
      steps.forEach((s, j) => s.classList.toggle('active', j === i));
      progress.style.strokeDashoffset = 100 - ((i + 1) / total) * 100;
      fade.classList.add('out');
      setTimeout(() => {
        kEl.textContent = String(i + 1).padStart(2, '0');
        titleEl.textContent = $('h4', steps[i]).textContent;
        descEl.textContent = steps[i].dataset.desc;
        fade.classList.remove('out');
      }, reduceMotion ? 0 : 250);
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => { if (!reduceMotion && !timer) timer = setInterval(() => show((current + 1) % total), 4500); };

    show(0);
    new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.3 }).observe(wheel);
  }

  /* ---------- Products sub-navigation highlight ---------- */
  const subLinks = $$('.subnav a');
  if (subLinks.length) {
    const map = new Map(subLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const bar = subLinks[0].closest('ul');
    const sio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const a = map.get(e.target.id);
          if (!a || a.classList.contains('active')) return;
          subLinks.forEach(l => l.classList.remove('active'));
          a.classList.add('active');
          // Centre the pill by scrolling the bar sideways only. scrollIntoView would also
          // scroll the page (the sticky bar sits inside html's scroll-padding), causing jumps.
          const offset = a.getBoundingClientRect().left - bar.getBoundingClientRect().left;
          bar.scrollTo({ left: bar.scrollLeft + offset - (bar.clientWidth - a.offsetWidth) / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) sio.observe(s); });
  }

  /* ---------- Quote form ---------- */
  const form = $('#quote-form');
  if (form) {
    // Pre-select a product category passed as ?interest=...
    const interest = new URLSearchParams(location.search).get('interest');
    if (interest) {
      const box = $$('input[name="interest"]', form).find(i => i.value.toLowerCase() === interest.toLowerCase());
      if (box) box.checked = true;
    }

    const compose = () => {
      const f = new FormData(form);
      const interests = f.getAll('interest');
      const lines = [
        `Name: ${f.get('name')}`,
        f.get('company') && `Company: ${f.get('company')}`,
        f.get('phone') && `Phone: ${f.get('phone')}`,
        f.get('email') && `Email: ${f.get('email')}`,
        interests.length && `Interested in: ${interests.join(', ')}`,
        '',
        f.get('message')
      ].filter(l => l !== false && l !== null && l !== undefined && l !== 0);
      return {
        subject: `Quote request from ${f.get('name')}${f.get('company') ? ' (' + f.get('company') + ')' : ''}`,
        body: lines.join('\n')
      };
    };

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const { subject, body } = compose();
      const via = e.submitter && e.submitter.dataset.via;
      if (via === 'whatsapp') {
        window.open(`https://wa.me/27732440444?text=${encodeURIComponent(subject + '\n\n' + body)}`, '_blank', 'noopener');
      } else {
        window.location.href = `mailto:Jeremy@automotivesupplies.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    });
  }
})();
