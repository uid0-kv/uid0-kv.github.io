(() => {
  const b = document.body, btn = document.getElementById("menu-btn"), scrim = document.getElementById("scrim");
  const wide = () => matchMedia("(min-width:861px)").matches;
  let saved = null;
  try { saved = localStorage.getItem("menu"); } catch (e) {}
  const set = open => {
    b.classList.toggle("collapsed", !open);
    btn.setAttribute("aria-expanded", open);
    if (wide()) try { localStorage.setItem("menu", open ? "open" : "closed"); } catch (e) {}
  };
  set(wide() ? saved !== "closed" : false);
  btn.addEventListener("click", () => set(b.classList.contains("collapsed")));
  scrim.addEventListener("click", () => set(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !wide()) set(false); });
  document.querySelectorAll("#sidebar nav a").forEach(a => a.addEventListener("click", () => { if (!wide()) set(false); }));
  // highlight current section
  const links = [...document.querySelectorAll("#sidebar nav a[data-s]")];
  const secs = links.map(l => document.getElementById(l.dataset.s)).filter(Boolean);
  if (secs.length > 1) {
    const spy = () => {
      let cur = secs[0];
      if (scrollY > 40) secs.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .35) cur = s; });
      links.forEach(l => l.classList.toggle("on", l.dataset.s === cur.id));
    };
    addEventListener("scroll", spy, {passive: true}); addEventListener("load", spy); new ResizeObserver(spy).observe(document.querySelector("main")); spy();
  }
})();
