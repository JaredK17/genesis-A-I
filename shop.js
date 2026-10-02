/* Genesis A&I — online shop
   =========================================================
   EDIT YOUR PRODUCTS HERE.
   Each product:
     id     unique code (also used as the SKU shown on the card)
     name   product name
     brand  brand name (optional)
     cat    one of the keys in CATEGORIES below
     pack   what one unit is, e.g. "Box of 100" or "Each"
     desc   short description
     image  optional path to a photo, e.g. "assets/shop/hvlp-gun.jpg"
            (leave out to show the category icon). Photos look best ~900px wide.
     tiers  quantity pricing in Rands, excl. VAT. "min" is the quantity
            at which that unit price starts. First tier must be min: 1.
     stock  optional: "in" (default), "low" or "order" (made to order)
   ========================================================= */
const PRODUCTS = [
  { id: 'AB-1001', name: 'Hook & Loop Sanding Discs 150mm', brand: '3M', cat: 'abrasives', pack: 'Box of 100',
    desc: '6-hole discs for DA sanders. Grades P80–P800.', image: 'assets/shop/sanding-discs.jpg',
    tiers: [{ min: 1, price: 489 }, { min: 5, price: 455 }, { min: 10, price: 419 }] },
  { id: 'AB-1002', name: 'Thin Cutting Discs 115 × 1mm', brand: 'Bulldog', cat: 'abrasives', pack: 'Box of 25',
    desc: 'Fast, burr-free cuts on steel and stainless.', image: 'assets/shop/cutting-discs.jpg',
    tiers: [{ min: 1, price: 245 }, { min: 10, price: 219 }, { min: 25, price: 199 }] },
  { id: 'AB-1003', name: 'Zirconia Flap Discs 115mm P60', brand: 'Bulldog', cat: 'abrasives', pack: 'Box of 10',
    desc: 'Grind and blend in one step with a cooler cut.', image: 'assets/shop/flap-disc.jpg',
    tiers: [{ min: 1, price: 329 }, { min: 5, price: 299 }, { min: 10, price: 275 }] },

  { id: 'CO-2001', name: '2K Primer Filler — Grey', brand: 'Genesis Select', cat: 'coatings', pack: '1L kit incl. hardener',
    desc: 'High-build, easy-sanding primer for refinish and repair.', image: 'assets/shop/primer.jpg',
    tiers: [{ min: 1, price: 645 }, { min: 6, price: 599 }, { min: 12, price: 565 }] },
  { id: 'CO-2002', name: 'HS Clear Coat 2:1', brand: 'Genesis Select', cat: 'coatings', pack: '5L kit incl. hardener',
    desc: 'High-solids clear with deep gloss and fast cure.', image: 'assets/shop/clear-coat.jpg',
    tiers: [{ min: 1, price: 2450 }, { min: 3, price: 2295 }, { min: 6, price: 2150 }] },

  { id: 'CN-3001', name: 'Automotive Masking Tape 24mm × 50m', brand: '3M', cat: 'consumables', pack: 'Sleeve of 36 rolls',
    desc: 'Clean removal up to 110°C, sharp paint lines.', image: 'assets/shop/masking-tape.jpg',
    tiers: [{ min: 1, price: 720 }, { min: 5, price: 669 }, { min: 10, price: 629 }] },
  { id: 'CN-3002', name: 'Pre-Taped Masking Film 4m × 150m', brand: '3M', cat: 'consumables', pack: 'Roll',
    desc: 'Paint-adhering film that stops flaking onto fresh work.', image: 'assets/img/film-sm.jpg',
    tiers: [{ min: 1, price: 585 }, { min: 5, price: 545 }, { min: 10, price: 509 }] },
  { id: 'CN-3003', name: 'Premium Tack Cloths', brand: 'Genesis Select', cat: 'consumables', pack: 'Pack of 100',
    desc: 'Low-residue tack rags for dust-free final wipe.', image: 'assets/shop/tack-cloth.jpg',
    tiers: [{ min: 1, price: 395 }, { min: 5, price: 365 }, { min: 10, price: 339 }] },
  { id: 'CN-3004', name: 'Cutting Compound — Heavy', brand: '3M', cat: 'consumables', pack: '1kg bottle',
    desc: 'Removes P1500 sanding marks quickly with minimal dust.', image: 'assets/img/polishing-sm.jpg',
    tiers: [{ min: 1, price: 549 }, { min: 6, price: 515 }, { min: 12, price: 489 }] },

  { id: 'EQ-4001', name: 'HVLP Spray Gun 1.3mm', brand: 'DeVilbiss', cat: 'equipment', pack: 'Each',
    desc: 'Gravity-feed gun for base and clear, high transfer efficiency.', image: 'assets/shop/spray-gun.jpg',
    tiers: [{ min: 1, price: 4950 }, { min: 3, price: 4690 }], stock: 'low' },
  { id: 'EQ-4002', name: 'Dual-Action Sander 150mm, 5mm orbit', brand: 'Genesis Select', cat: 'equipment', pack: 'Each',
    desc: 'Lightweight pneumatic sander with dust-extraction port.', image: 'assets/shop/da-sander.jpg',
    tiers: [{ min: 1, price: 3850 }, { min: 3, price: 3650 }], stock: 'order' },

  { id: 'PP-5001', name: 'Nitrile Gloves, Black — Large', brand: 'Genesis Select', cat: 'ppe', pack: 'Box of 100',
    desc: 'Powder-free, solvent resistant, textured grip.', image: 'assets/shop/nitrile-gloves.jpg',
    tiers: [{ min: 1, price: 189 }, { min: 10, price: 169 }, { min: 50, price: 149 }] },
  { id: 'PP-5002', name: 'Half-Mask Respirator A2P2', brand: '3M', cat: 'ppe', pack: 'Each, filters fitted',
    desc: 'Protection against paint vapours and spray mist.', image: 'assets/shop/respirator.jpg',
    tiers: [{ min: 1, price: 465 }, { min: 10, price: 425 }, { min: 25, price: 399 }] },
  { id: 'PP-5003', name: 'Disposable Paint Suit', brand: 'Genesis Select', cat: 'ppe', pack: 'Each',
    desc: 'Lint-free, anti-static hooded coverall. M–XXL.', image: 'assets/shop/paint-suit.jpg',
    tiers: [{ min: 1, price: 95 }, { min: 25, price: 85 }, { min: 100, price: 75 }] },

  { id: 'SE-6001', name: 'PU Seam Sealer, Grey', brand: 'WEICON', cat: 'sealing', pack: '290ml cartridge',
    desc: 'Paintable, flexible seam and joint sealer.', image: 'assets/shop/seam-sealer.jpg',
    tiers: [{ min: 1, price: 135 }, { min: 12, price: 122 }, { min: 48, price: 109 }] }
];

const VAT_RATE = 0.15;
const ORDER_EMAIL = 'Jeremy@automotivesupplies.co.za';
const ORDER_WHATSAPP = '27732440444';

/* Category colours live in styles.css ([data-cat="..."]) */
const ICON_ATTRS = 'viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"';
const CATEGORIES = {
  abrasives:   { label: 'Abrasives', icon: `<svg ${ICON_ATTRS}><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="4"/><circle cx="24" cy="13" r="1.3"/><circle cx="24" cy="35" r="1.3"/><circle cx="13" cy="24" r="1.3"/><circle cx="35" cy="24" r="1.3"/></svg>` },
  coatings:    { label: 'Coatings', icon: `<svg ${ICON_ATTRS}><path d="M24 6c6 8 11 13.5 11 19a11 11 0 0 1-22 0c0-5.5 5-11 11-19z"/><path d="M18.5 27a5.5 5.5 0 0 0 5.5 5.5"/></svg>` },
  consumables: { label: 'Consumables', icon: `<svg ${ICON_ATTRS}><circle cx="21" cy="21" r="14"/><circle cx="21" cy="21" r="6"/><path d="M35 21v20H22"/></svg>` },
  equipment:   { label: 'Equipment', icon: `<svg ${ICON_ATTRS}><path d="M11 15h21l4 4v4H11z"/><path d="M5 17h6M5 21h6"/><path d="M27 15V8h8v7"/><path d="M25 23l-2 17h-7l2-17"/><path d="M29 23c0 4-1.5 6.5-4 7.5"/></svg>` },
  ppe:         { label: 'Protection', icon: `<svg ${ICON_ATTRS}><path d="M24 5 9 10v12c0 10 6.5 17 15 21 8.5-4 15-11 15-21V10z"/><path d="m17 24 5 5 9-10"/></svg>` },
  sealing:     { label: 'Sealing', icon: `<svg ${ICON_ATTRS}><path d="M24 8 42 17 24 26 6 17z"/><path d="m6 24 18 9 18-9"/><path d="m6 31 18 9 18-9"/></svg>` }
};
const STOCK = { in: 'In stock', low: 'Low stock', order: 'Made to order' };
const CART_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 4h2.5l2.2 11h10.6L20.5 7H6.6"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>';

(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const grid = $('[data-shop-grid]');
  if (!grid) return;

  const byId = new Map(PRODUCTS.map(p => [p.id, p]));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // R 1 234.50 — South African style with space thousands separator
  const rand = n => 'R ' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const randShort = n => 'R ' + (n % 1 ? n.toFixed(2) : String(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const unitPrice = (p, qty) => p.tiers.reduce((price, t) => (qty >= t.min ? t.price : price), p.tiers[0].price);
  const maxSave = p => Math.round((1 - p.tiers[p.tiers.length - 1].price / p.tiers[0].price) * 100);
  const clampQty = v => Math.max(1, Math.min(9999, parseInt(v, 10) || 1));
  const thumb = p => (p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : `<span class="ph">${CATEGORIES[p.cat].icon}</span>`);

  /* ---------- Cart state (kept in this browser) ---------- */
  const KEY = 'genesis-cart';
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { cart = {}; }
  Object.keys(cart).forEach(id => { if (!byId.has(id)) delete cart[id]; });
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ } };

  /* ---------- Product cards ---------- */
  const card = p => {
    const cat = CATEGORIES[p.cat];
    const stock = p.stock || 'in';
    const pct = maxSave(p);
    const tiers = p.tiers.map(t => `<button type="button" data-tier="${t.min}"><b>${t.min}+</b><span>${randShort(t.price)}</span></button>`).join('');
    return `
      <article class="shop-card" data-id="${esc(p.id)}" data-cat="${esc(p.cat)}">
        <div class="sc-media">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">` : `<span class="ph">${cat.icon}</span>`}
          <span class="sc-cat">${cat.icon}${esc(cat.label)}</span>
          ${pct > 0 ? `<span class="sc-badge">Save up to ${pct}%</span>` : ''}
        </div>
        <div class="sc-body">
          <p class="sc-meta"><span class="sc-brand">${esc(p.brand || cat.label)}</span><span class="sc-stock ${stock}">${STOCK[stock]}</span></p>
          <h3>${esc(p.name)}</h3>
          <p class="sc-pack">${esc(p.pack)} <span>· ${esc(p.id)}</span></p>
          <p class="sc-desc">${esc(p.desc)}</p>
          <div class="sc-tiers" role="group" aria-label="Volume pricing, tap to set quantity">${tiers}</div>
          <div class="sc-price">
            <span class="now" data-unit></span><s class="was" data-was></s>
            <small>each · excl. VAT</small>
          </div>
          <div class="sc-buy">
            <div class="qty">
              <button type="button" data-step="-1" aria-label="Decrease quantity">−</button>
              <input type="number" min="1" max="9999" value="1" inputmode="numeric" aria-label="Quantity">
              <button type="button" data-step="1" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="add-btn" data-add>${CART_ICON}<span>Add to cart</span></button>
          </div>
          <p class="sc-line" data-line></p>
        </div>
      </article>`;
  };

  const updateCard = el => {
    const p = byId.get(el.dataset.id);
    const qty = clampQty($('input', el).value);
    const unit = unitPrice(p, qty);
    $('[data-unit]', el).textContent = rand(unit);
    $('[data-was]', el).textContent = unit < p.tiers[0].price ? rand(p.tiers[0].price) : '';
    $('[data-line]', el).innerHTML = qty > 1 ? `${qty} × ${rand(unit)} = <b>${rand(unit * qty)}</b>` : '&nbsp;';
    const active = p.tiers.filter(t => qty >= t.min).pop().min;
    $$('[data-tier]', el).forEach(b => b.classList.toggle('on', +b.dataset.tier === active));
  };

  grid.innerHTML = PRODUCTS.map(card).join('');
  $$('.shop-card', grid).forEach(updateCard);

  grid.addEventListener('click', e => {
    const el = e.target.closest('.shop-card');
    if (!el) return;
    const input = $('input', el);
    const step = e.target.closest('[data-step]');
    const tier = e.target.closest('[data-tier]');
    if (step) {
      input.value = clampQty(+input.value + +step.dataset.step);
      updateCard(el);
    } else if (tier) {
      input.value = tier.dataset.tier;
      updateCard(el);
    } else if (e.target.closest('[data-add]')) {
      const p = byId.get(el.dataset.id);
      const qty = clampQty(input.value);
      cart[p.id] = Math.min(9999, (cart[p.id] || 0) + qty);
      save(); renderCart();
      const btn = e.target.closest('[data-add]');
      btn.classList.add('done');
      $('span', btn).textContent = 'Added';
      setTimeout(() => { btn.classList.remove('done'); $('span', btn).textContent = 'Add to cart'; }, 1400);
      input.value = 1; updateCard(el);
      bump(); toast(p, qty);
    }
  });
  grid.addEventListener('input', e => { const el = e.target.closest('.shop-card'); if (el) updateCard(el); });
  grid.addEventListener('change', e => {
    const el = e.target.closest('.shop-card');
    if (el && e.target.matches('input')) { e.target.value = clampQty(e.target.value); updateCard(el); }
  });

  /* ---------- Filter, search, sort ---------- */
  const filters = $('[data-shop-filters]');
  const counts = PRODUCTS.reduce((m, p) => (m[p.cat] = (m[p.cat] || 0) + 1, m), {});
  filters.innerHTML = `<li><button type="button" class="active" data-cat="all"><span class="ic">${CART_ICON}</span><b>All products</b><small>${PRODUCTS.length} items</small></button></li>` +
    Object.entries(CATEGORIES).filter(([k]) => counts[k])
      .map(([k, c]) => `<li><button type="button" data-cat="${k}"><span class="ic">${c.icon}</span><b>${esc(c.label)}</b><small>${counts[k]} item${counts[k] === 1 ? '' : 's'}</small></button></li>`).join('');

  let activeCat = 'all';
  const search = $('[data-shop-search]');
  const sort = $('[data-shop-sort]');
  const empty = $('[data-shop-empty]');
  const countEl = $('[data-shop-count]');

  const applyView = () => {
    const q = search.value.trim().toLowerCase();
    const cards = $$('.shop-card', grid);
    let shown = 0;
    cards.forEach(el => {
      const p = byId.get(el.dataset.id);
      const hay = `${p.name} ${p.brand || ''} ${p.id} ${p.desc} ${CATEGORIES[p.cat].label}`.toLowerCase();
      const ok = (activeCat === 'all' || p.cat === activeCat) && (!q || hay.includes(q));
      el.hidden = !ok;
      if (ok) shown++;
    });
    const order = PRODUCTS.map(p => p.id);
    const key = {
      'price-asc': (a, b) => a.tiers[0].price - b.tiers[0].price,
      'price-desc': (a, b) => b.tiers[0].price - a.tiers[0].price,
      'save': (a, b) => maxSave(b) - maxSave(a),
      'name': (a, b) => a.name.localeCompare(b.name),
      'default': (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
    }[sort.value];
    cards.sort((a, b) => key(byId.get(a.dataset.id), byId.get(b.dataset.id))).forEach(el => grid.appendChild(el));
    empty.hidden = shown > 0;
    const label = activeCat === 'all' ? 'All products' : CATEGORIES[activeCat].label;
    countEl.innerHTML = `<b>${esc(label)}</b> · ${shown} product${shown === 1 ? '' : 's'}`;
  };

  filters.addEventListener('click', e => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    activeCat = b.dataset.cat;
    $$('[data-cat]', filters).forEach(x => x.classList.toggle('active', x === b));
    applyView();
  });
  search.addEventListener('input', applyView);
  sort.addEventListener('change', applyView);
  applyView();

  /* ---------- Cart drawer ---------- */
  const drawer = $('[data-cart]');
  const overlay = $('[data-cart-overlay]');
  const fab = $('.cart-fab');
  const itemsEl = $('[data-cart-items]');
  const form = $('[data-cart-form]');

  const setOpen = open => {
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', !open);
    drawer.inert = !open;
    document.body.classList.toggle('cart-open', open);
    if (open) $('[data-cart-close]').focus(); else fab.focus({ preventScroll: true });
  };
  drawer.inert = true;
  $$('[data-cart-open]').forEach(b => b.addEventListener('click', () => setOpen(true)));
  overlay.addEventListener('click', () => setOpen(false));
  $('[data-cart-close]').addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false); });

  const bump = () => { fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump'); };

  /* ---------- Toast ---------- */
  const toastEl = $('[data-toast]');
  let toastTimer;
  const toast = (p, qty) => {
    toastEl.innerHTML = `<span class="t-img">${thumb(p)}</span><span class="t-txt"><b>Added to cart</b>${qty} × ${esc(p.name)}</span><button type="button" data-toast-view>View cart</button>`;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3200);
  };
  toastEl.addEventListener('click', e => { if (e.target.closest('[data-toast-view]')) { toastEl.classList.remove('show'); setOpen(true); } });

  const totals = () => {
    let sub = 0, savings = 0, units = 0;
    const lines = Object.entries(cart).map(([id, qty]) => {
      const p = byId.get(id);
      const unit = unitPrice(p, qty);
      sub += unit * qty; savings += (p.tiers[0].price - unit) * qty; units += qty;
      return { p, qty, unit };
    });
    const vat = sub * VAT_RATE;
    return { lines, sub, savings, vat, total: sub + vat, units };
  };

  const renderCart = () => {
    const t = totals();
    $$('[data-cart-count]').forEach(el => (el.textContent = t.units));
    fab.classList.toggle('has-items', t.units > 0);
    $('[data-cart-empty]').hidden = t.lines.length > 0;
    $('[data-cart-foot]').hidden = t.lines.length === 0;
    $('[data-cart-sub]').textContent = t.units ? `${t.units} item${t.units === 1 ? '' : 's'}` : '';
    itemsEl.innerHTML = t.lines.map(({ p, qty, unit }) => {
      const next = p.tiers.find(x => x.min > qty);
      const hint = next
        ? `<p class="ci-hint">Add ${next.min - qty} more to pay ${rand(next.price)} each</p>`
        : (p.tiers.length > 1 ? '<p class="ci-hint best">Best price unlocked</p>' : '');
      return `
        <li data-id="${esc(p.id)}" data-cat="${esc(p.cat)}">
          <div class="ci-ic">${thumb(p)}</div>
          <div class="ci-body">
            <h4>${esc(p.name)}</h4>
            <p class="ci-meta">${esc(p.pack)} · ${rand(unit)} each</p>
            ${hint}
            <div class="ci-row">
              <div class="qty sm">
                <button type="button" data-step="-1" aria-label="Decrease quantity">−</button>
                <input type="number" min="1" max="9999" value="${qty}" inputmode="numeric" aria-label="Quantity">
                <button type="button" data-step="1" aria-label="Increase quantity">+</button>
              </div>
              <strong>${rand(unit * qty)}</strong>
            </div>
          </div>
          <button type="button" class="ci-remove" data-remove aria-label="Remove ${esc(p.name)}">×</button>
        </li>`;
    }).join('');
    $('[data-sum-sub]').textContent = rand(t.sub);
    $('[data-sum-save]').textContent = '−' + rand(t.savings);
    $('[data-sum-save-row]').hidden = t.savings <= 0;
    $('[data-sum-vat]').textContent = rand(t.vat);
    $('[data-sum-total]').textContent = rand(t.total);
  };

  const setQty = (id, qty) => {
    if (qty <= 0) delete cart[id]; else cart[id] = clampQty(qty);
    save(); renderCart();
  };
  itemsEl.addEventListener('click', e => {
    const li = e.target.closest('li[data-id]');
    if (!li) return;
    if (e.target.closest('[data-remove]')) setQty(li.dataset.id, 0);
    else if (e.target.closest('[data-step]')) setQty(li.dataset.id, cart[li.dataset.id] + +e.target.closest('[data-step]').dataset.step);
  });
  itemsEl.addEventListener('change', e => {
    const li = e.target.closest('li[data-id]');
    if (li && e.target.matches('input')) setQty(li.dataset.id, parseInt(e.target.value, 10) || 0);
  });
  $('[data-cart-clear]').addEventListener('click', () => { cart = {}; save(); renderCart(); });

  /* ---------- Send order ---------- */
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const t = totals();
    const opt = (label, key) => (f.get(key) ? `${label}: ${f.get(key)}` : null);
    const lines = [
      'ORDER REQUEST',
      `Name: ${f.get('name')}`,
      opt('Company', 'company'),
      `Phone: ${f.get('phone')}`,
      opt('Delivery', 'delivery'),
      '',
      ...t.lines.map(({ p, qty, unit }) => `${qty} × ${p.name} (${p.id}, ${p.pack}) @ ${rand(unit)} = ${rand(unit * qty)}`),
      '',
      `Subtotal: ${rand(t.sub)}`,
      `VAT (${VAT_RATE * 100}%): ${rand(t.vat)}`,
      `Total: ${rand(t.total)}`,
      opt('\nNotes', 'notes')
    ].filter(l => l !== null).join('\n').replace(/ /g, ' ');
    const subject = `Order request from ${f.get('name')}${f.get('company') ? ' (' + f.get('company') + ')' : ''}`;
    if (e.submitter && e.submitter.dataset.via === 'email') {
      window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    } else {
      window.open(`https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(lines)}`, '_blank', 'noopener');
    }
  });

  renderCart();
})();
