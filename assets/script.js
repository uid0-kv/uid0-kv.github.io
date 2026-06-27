// ===== Light / dark theme toggle =====
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const stored = localStorage.getItem('site-theme');
  if(stored === 'dark'){ root.setAttribute('data-theme', 'dark'); }

  function syncLabel(){
    if(!btn) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? 'light mode' : 'dark mode';
  }
  syncLabel();

  if(btn){
    btn.addEventListener('click', function(){
      const isDark = root.getAttribute('data-theme') === 'dark';
      if(isDark){
        root.removeAttribute('data-theme');
        localStorage.setItem('site-theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('site-theme', 'dark');
      }
      syncLabel();
    });
  }
})();

// ===== Active nav highlight on scroll =====
(function(){
  const links = document.querySelectorAll('nav.site-nav a[data-section]');
  if(!links.length) return;
  const sections = Array.from(links).map(a => document.getElementById(a.dataset.section)).filter(Boolean);
  if(!sections.length) return;
  const setActive = (id) => links.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));
})();

// ===== Easter egg: toggle visible text to/from hexadecimal =====
(function(){
  const btn = document.getElementById('easter-egg-btn');
  if(!btn) return;

  let hexMode = false;
  let originalMap = null;

  function toHex(str){
    return str.split('').map(ch => {
      if(/\s/.test(ch)) return ch;
      return ch.codePointAt(0).toString(16);
    }).join(' ');
  }

  function collectTextNodes(root){
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if(!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if(!parent) return NodeFilter.FILTER_REJECT;
        if(parent.closest('script, style, #easter-egg-btn')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let n;
    while((n = walker.nextNode())) nodes.push(n);
    return nodes;
  }

  btn.addEventListener('click', function(){
    if(!hexMode){
      const nodes = collectTextNodes(document.body);
      originalMap = new Map();
      nodes.forEach(node => {
        originalMap.set(node, node.textContent);
        node.textContent = toHex(node.textContent);
      });
      hexMode = true;
      btn.textContent = 'click me again.';
    } else {
      if(originalMap){
        originalMap.forEach((text, node) => { node.textContent = text; });
      }
      hexMode = false;
      btn.textContent = "don't click me.";
    }
  });
})();
