const el = document.getElementById("post");
document.getElementById("yr").textContent = new Date().getFullYear();
const slug = new URLSearchParams(location.search).get("p");

(async () => {
  if (!slug || !/^[\w-]+$/.test(slug)) { el.innerHTML = '<p>Article not found. <a href="index.html#articles">Back to articles</a></p>'; return; }
  try {
    const [index, md] = await Promise.all([
      fetch("articles/index.json").then(r => r.json()),
      fetch(`articles/${slug}.md`).then(r => { if (!r.ok) throw 0; return r.text(); })
    ]);
    const meta = index.find(a => a.slug === slug) || {};
    document.title = `${meta.title || slug} · Krish Vedak`;
    const date = meta.date ? new Date(meta.date + "T00:00:00").toLocaleDateString("en-GB", {year:"numeric", month:"long", day:"numeric"}) : "";
    const math = [];
    const safe = md.replace(/\$\$[\s\S]+?\$\$|\$[^\n$]+?\$/g, m => { math.push(m); return `@@M${math.length - 1}@@`; });
    const html = marked.parse(safe).replace(/@@M(\d+)@@/g, (_, i) => math[+i].replace(/&/g, "&amp;").replace(/</g, "&lt;"));
    el.innerHTML = `<p class="meta"><a href="index.html#articles">← All articles</a>${date ? " · " + date : ""}</p>` + html;
    renderMathInElement(el, {delimiters: [{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}]});
  } catch (e) {
    el.innerHTML = '<p>Could not load this article. <a href="index.html#articles">Back to articles</a></p>';
  }
})();
