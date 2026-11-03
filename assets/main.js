const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const links = ls => ls && ls.length ? `<div class="links">${ls.map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join("")}</div>` : "";
const tags = ts => ts && ts.length ? `<div class="tags">${ts.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : "";
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB", {year:"numeric", month:"short", day:"numeric"});

$("yr").textContent = new Date().getFullYear();

async function load() {
  try {
    const [c, a] = await Promise.all([
      fetch("data/content.json").then(r => r.json()),
      fetch("articles/index.json").then(r => r.json())
    ]);
    const i = c.intro;
    document.title = `${i.name} · ${i.field}`;
    $("intro").innerHTML = `<h1>${esc(i.name)}</h1><p class="tagline">${esc(i.tagline)}</p>` +
      i.bio.map(p => `<p>${esc(p)}</p>`).join("") + links(i.links) + `<div class="pins" aria-hidden="true"></div>`;

    $("interests-list").innerHTML = c.interests.map(x => `<div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join("");

    $("courses-list").innerHTML = c.courses.map(g => `<div class="group"><h3>${esc(g.group)}</h3>` +
      g.items.map(x => `<div class="row"><span>${esc(x.name)}${x.provider ? ` <span class="muted">${esc(x.provider)}</span>` : ""}</span><span class="meta">${esc(x.year)}</span></div>`).join("") + `</div>`).join("");

    $("projects-list").innerHTML = c.projects.map(p => `<div class="item"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>${tags(p.tags)}${links(p.links)}</div>`).join("");

    $("internships-list").innerHTML = c.internships.map(n => `<div class="item"><div class="head"><h3>${esc(n.role)}, ${esc(n.org)}</h3><span class="meta">${esc(n.dates)}</span></div>` +
      `<ul>${n.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("");

    a.sort((x, y) => y.date.localeCompare(x.date));
    $("articles-list").innerHTML = a.length ? a.map(p => `<div class="item"><div class="head"><h3><a href="article.html?p=${encodeURIComponent(p.slug)}">${esc(p.title)}</a></h3><span class="meta">${fmtDate(p.date)}</span></div><p>${esc(p.summary)}</p>${tags(p.tags)}</div>`).join("")
      : `<p class="muted">No articles yet. Add one in the articles folder.</p>`;
  } catch (e) {
    $("intro").innerHTML = `<h1>Krish Vedak</h1><p class="muted">Content could not load. If you opened this file directly, run a local server (python3 -m http.server) or view the GitHub Pages site. Also check that data/content.json is valid JSON.</p>`;
  }
}
load();
