/* Minimal standalone runtime for the prototype's .dc.html pages:
   renders <x-dc> templates, <sc-if> blocks, {{ }} bindings and setState. */
(function () {
  var style = document.createElement('style');
  style.textContent = 'x-dc{display:contents;visibility:hidden}x-dc.ready{visibility:visible}helmet{display:none}' +
    /* floating browser window around the app UI (everything below the caption) */
    '.bw-stage{background:#E4E6EA !important}' +
    '.bw-chrome{flex:none;height:40px;display:flex;align-items:center;gap:16px;padding:0 14px;background:#EDEEF0;border-bottom:1px solid #DADCE0}' +
    '.bw-dots{flex:none;display:flex;gap:8px}.bw-dots i{width:12px;height:12px;border-radius:50%;background:#D5D7DB}' +
    '.bw-dots i:nth-child(1){background:#FF5F57}.bw-dots i:nth-child(2){background:#FEBC2E}.bw-dots i:nth-child(3){background:#28C840}' +
    '.bw-url{flex:1;min-width:0;max-width:560px;margin:0 auto;height:26px;box-sizing:border-box;padding:0 12px;border-radius:6px;background:#FFFFFF;color:#525252;font-size:12px;line-height:26px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.bw-url svg{vertical-align:-2px;margin-right:6px}' +
    '.bw-spacer{flex:none;width:52px}' +
    '@media (max-width:760px){.bw-spacer{display:none}}' +
    /* carousel: big arrows either side of the window, dots underneath */
    '.bw-row{flex:1;min-height:0;position:relative;display:flex;align-items:center;gap:20px;padding:0 24px 28px}' +
    '.bw-window{flex:1;align-self:stretch;min-width:0;max-width:1600px;margin:0 auto;display:flex;flex-direction:column;background:#F7F7F7;border-radius:12px;overflow:hidden;transform:translateZ(0);box-shadow:0 0 0 1px rgba(17,23,28,0.08),0 2px 6px rgba(17,23,28,0.06),0 24px 64px rgba(17,23,28,0.18)}' +
    '.bw-arrow{flex:none;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#FFFFFF;color:#161616;box-shadow:0 1px 2px rgba(17,23,28,.08),0 4px 14px rgba(17,23,28,.14);transition:transform .15s ease,box-shadow .15s ease,background-color .15s ease}' +
    '.bw-arrow:hover{transform:scale(1.06);box-shadow:0 2px 4px rgba(17,23,28,.1),0 8px 24px rgba(17,23,28,.2)}' +
    '.bw-arrow:active{transform:scale(.97)}' +
    '.bw-arrow:focus-visible{outline:2px solid #2272B4;outline-offset:3px}' +
    '.bw-arrow.off{visibility:hidden}' +
    '.bw-nav{flex:none;height:48px;display:flex;align-items:center;justify-content:center;gap:2px}' +
    '.bw-nav a{width:22px;height:32px;display:flex;align-items:center;justify-content:center}' +
    '.bw-nav a i{width:8px;height:8px;border-radius:50%;background:#B4B8BF;transition:background-color .2s ease,transform .2s ease}' +
    '.bw-nav a:hover i{background:#7C828B}' +
    '.bw-nav a[aria-current] i{background:#161616;transform:scale(1.2)}' +
    '@media (max-width:760px){.bw-row{padding:0 8px 8px}.bw-arrow{position:absolute;top:50%;z-index:2;width:44px;height:44px;margin-top:-22px}.bw-prev{left:14px}.bw-next{right:14px}.bw-window{border-radius:10px}}' +
    /* while hovering the window, the step's [data-action] link fades into a steady glow */
    '[data-action]{position:relative}' +
    '[data-action]::after{content:"";position:absolute;inset:-1px;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s ease;box-shadow:0 0 0 3px rgba(34,114,180,.45),0 0 22px 8px rgba(34,114,180,.5)}' +
    '.bw-window:hover [data-action]::after{opacity:1}' +
    /* caption bar uses the portfolio site's font */
    '[aria-label="Prototype caption"]{font-family:"Plus Jakarta Sans",-apple-system,system-ui,sans-serif !important;display:grid !important;grid-template-columns:minmax(48px,1fr) minmax(0,900px) minmax(48px,1fr)}' +
    '.cap-count{grid-column:3;justify-self:end;font-size:14px;line-height:20px;font-weight:600;color:rgba(255,255,255,0.55);font-variant-numeric:tabular-nums;white-space:nowrap}' +
    '.cap-text{grid-column:2;min-width:0;display:grid;align-items:center}.cap-text>p{grid-area:1/1}.cap-text>.cap-ghost{visibility:hidden}';
  document.head.appendChild(style);
  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400..700&display=swap';
  document.head.appendChild(font);

  // The walkthrough's steps in order, with each one's caption text. Each page stacks every
  // caption invisibly behind its own, so the caption bar is always as tall as the longest one
  // and doesn't jump between pages. Keep in sync with the captions in the .dc.html pages.
  var STEPS = [
    ['Main', '<strong>Genie detects missing business logic:</strong> Genie attempts to answer a user question about sentiment, but identifies that there is no known definition.'],
    ['Monitor', '<strong>Missing business logic is flagged to the data team:</strong> The data team is alerted that multiple users are asking about sentiment, which is not defined and requires extraction. Genie proposes to add a new column.'],
    ['Pipeline', '<strong>Reviewing pipeline fix:</strong> Data engineers can review the proposed change to the data pipeline and approve or edit it.'],
    ['Deployed', '<strong>Approved fix:</strong> The pipeline change is approved. As admins become comfortable with this workflow, they can start to set rules to auto-approve pipeline changes.'],
    ['AutoFix', 'Approved and auto-fixed changes both show under Applied. Pipeline Rules control what Genie can apply without approval.'],
    ['Rules', '<strong>Governed, self-improving data models:</strong> Admins choose which data modeling changes Genie can apply on its own, in pipelines or metric views, and set limits for all of them. Some changes always need a person to approve.']
  ];
  function stepUrl(i) { return STEPS[i][0] + '.dc.html'; }
  var ARROW = '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3.5L5.5 8l4.5 4.5"></path></svg>';
  var RESTART = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.75 8a5.25 5.25 0 101.6-3.8"></path><path d="M2.5 1.75v3h3"></path></svg>';

  // Moves everything after the caption bar into a browser-window frame, with carousel
  // arrows either side of it and step dots underneath.
  function frame(content, page) {
    var root = Array.prototype.filter.call(content.children, function (el) { return el.tagName === 'DIV'; })[0];
    var caption = root && Array.prototype.filter.call(root.children, function (el) { return el.getAttribute('role') === 'region'; })[0];
    if (!caption) return;
    var cur = STEPS.map(function (s) { return s[0]; }).indexOf(page);
    if (cur < 0) cur = 0;

    // the caption keeps only its text plus a step count on the right; the arrows and dots replace Back/Next
    Array.prototype.slice.call(caption.children).forEach(function (el) { if (el.tagName !== 'P') el.remove(); });
    var count = document.createElement('span');
    count.className = 'cap-count';
    count.textContent = (cur + 1) + ' of ' + STEPS.length;
    caption.appendChild(count);
    var text = caption.querySelector('p');
    if (text) {
      var stack = document.createElement('div');
      stack.className = 'cap-text';
      text.parentNode.insertBefore(stack, text);
      stack.appendChild(text);
      STEPS.forEach(function (step) {
        var ghost = text.cloneNode(false);
        ghost.className = 'cap-ghost';
        ghost.setAttribute('aria-hidden', 'true');
        ghost.innerHTML = step[1].replace(/<strong>/g, '<strong style="font-weight: 700">');
        stack.appendChild(ghost);
      });
    }

    root.classList.add('bw-stage');
    var row = document.createElement('div');
    row.className = 'bw-row';
    var last = cur === STEPS.length - 1;
    row.innerHTML = (cur > 0
        ? '<a class="bw-arrow bw-prev" href="' + stepUrl(cur - 1) + '" aria-label="Previous step">' + ARROW + '</a>'
        : '<span class="bw-arrow bw-prev off" aria-hidden="true"></span>') +
      '<div class="bw-window"><div class="bw-chrome" aria-hidden="true"><span class="bw-dots"><i></i><i></i><i></i></span>' +
      '<span class="bw-url"><svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="7" width="10" height="7.5" rx="1.5"></rect><path d="M5.5 7V5a2.5 2.5 0 015 0v2"></path></svg>bakehouse-prod.cloud.databricks.com</span>' +
      '<span class="bw-spacer"></span></div></div>' +
      '<a class="bw-arrow bw-next" href="' + stepUrl(last ? 0 : cur + 1) + '" aria-label="' + (last ? 'Start over' : 'Next step') + '">' +
      (last ? RESTART : ARROW.replace('M10 3.5L5.5 8l4.5 4.5', 'M6 3.5L10.5 8 6 12.5')) + '</a>';
    var win = row.querySelector('.bw-window');
    while (caption.nextSibling) win.appendChild(caption.nextSibling);
    var nav = document.createElement('nav');
    nav.className = 'bw-nav';
    nav.setAttribute('aria-label', 'Steps');
    nav.innerHTML = STEPS.map(function (s, i) {
      return '<a href="' + stepUrl(i) + '" aria-label="Step ' + (i + 1) + ' of ' + STEPS.length + '"' + (i === cur ? ' aria-current="step"' : '') + '><i></i></a>';
    }).join('');
    root.appendChild(nav);
    root.appendChild(row);
  }

  function DCLogic() { this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    this.state = Object.assign({}, this.state || {}, patch);
    if (this.__render) this.__render();
  };
  window.DCLogic = DCLogic;

  var BIND = /^\s*\{\{\s*([\s\S]*?)\s*\}\}\s*$/;
  function evaluate(expr, vals) {
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    if (Object.prototype.hasOwnProperty.call(vals, expr)) return vals[expr];
    try { return Function.apply(null, Object.keys(vals).concat('return (' + expr + ');')).apply(null, Object.keys(vals).map(function (k) { return vals[k]; })); }
    catch (e) { return undefined; }
  }

  function process(node, vals) {
    var kids = Array.prototype.slice.call(node.childNodes);
    kids.forEach(function (child) {
      if (child.nodeType === 3) {
        if (child.nodeValue.indexOf('{{') > -1) {
          child.nodeValue = child.nodeValue.replace(/\{\{\s*([\s\S]*?)\s*\}\}/g, function (_, e) { var v = evaluate(e, vals); return v == null ? '' : String(v); });
        }
        return;
      }
      if (child.nodeType !== 1) return;
      var tag = child.tagName.toLowerCase();
      if (tag === 'helmet') { child.remove(); return; }
      if (tag === 'sc-if') {
        var m = BIND.exec(child.getAttribute('value') || '');
        var show = m ? !!evaluate(m[1], vals) : false;
        if (show) {
          process(child, vals);
          while (child.firstChild) node.insertBefore(child.firstChild, child);
        }
        child.remove();
        return;
      }
      Array.prototype.slice.call(child.attributes).forEach(function (a) {
        if (a.name === 'hint-placeholder-val') { child.removeAttribute(a.name); return; }
        var mm = BIND.exec(a.value);
        if (!mm) return;
        var v = evaluate(mm[1], vals);
        if (/^on/i.test(a.name)) {
          child.removeAttribute(a.name);
          if (typeof v === 'function') child.addEventListener(a.name.slice(2).toLowerCase(), function (ev) { v(ev); });
        } else if (v === false || v == null) {
          child.removeAttribute(a.name);
          if (/^aria-/.test(a.name)) child.setAttribute(a.name, 'false');
        } else {
          child.setAttribute(a.name, v === true ? (/^aria-/.test(a.name) ? 'true' : '') : String(v));
        }
      });
      process(child, vals);
    });
  }

  function scrollers(root) {
    return Array.prototype.slice.call(root.querySelectorAll('*')).filter(function (el) {
      var o = getComputedStyle(el); return /(auto|scroll)/.test(o.overflowY + o.overflowX);
    });
  }

  // Renders a page's <x-dc> template (from this document or a fetched step) into host.
  var added = {};
  function mount(host, doc, page) {
    var src = doc.querySelector('x-dc');
    var helmet = src.querySelector('helmet');
    if (helmet) Array.prototype.slice.call(helmet.children).forEach(function (el) {
      if (added[el.outerHTML]) return;
      added[el.outerHTML] = true;
      document.head.appendChild(el.cloneNode(true));
    });
    var template = document.createElement('template');
    template.innerHTML = src.innerHTML;
    frame(template.content, page);
    var Component = null;
    var script = doc.querySelector('script[data-dc-script]');
    if (script) {
      try { Component = new Function('DCLogic', script.textContent + '\n;return typeof Component !== "undefined" ? Component : null;')(DCLogic); }
      catch (e) { console.error(e); }
    }
    var inst = Component ? new Component() : new DCLogic();
    if (!inst.state) inst.state = {};
    inst.__render = function () {
      var before = scrollers(host).map(function (el) { return [el.scrollTop, el.scrollLeft]; });
      var vals = typeof inst.renderVals === 'function' ? (inst.renderVals() || {}) : {};
      var frag = template.content.cloneNode(true);
      process(frag, vals);
      host.replaceChildren(frag);
      var after = scrollers(host);
      before.forEach(function (p, i) { if (after[i]) { after[i].scrollTop = p[0]; after[i].scrollLeft = p[1]; } });
      host.classList.add('ready');
    };
    inst.__render();
  }

  // The walkthrough runs as a single page: moving between steps swaps the content in place
  // (old window slides out and fades, new one slides in) instead of loading a new document.
  var current = null, settle = null, docs = {};
  function pageOf(url) {
    var u = new URL(url, location.href);
    if (u.origin !== location.origin) return null;
    var m = u.pathname.match(/([A-Za-z]+)\.dc(\.html)?$/);
    return m && stepIndex(m[1]) > -1 ? m[1] : null;
  }
  function stepIndex(page) { return STEPS.map(function (s) { return s[0]; }).indexOf(page); }
  function load(page) {
    if (!docs[page]) docs[page] = fetch(page + '.dc.html').then(function (r) { return r.text(); })
      .then(function (t) { return new DOMParser().parseFromString(t, 'text/html'); });
    return docs[page];
  }

  function go(page, push) {
    if (!current || page === current.page) return;
    var from = stepIndex(current.page), to = stepIndex(page);
    var dir = to > from || (from === STEPS.length - 1 && to === 0) ? 1 : -1;
    load(page).then(function (doc) {
      if (settle) settle();
      if (push) history.pushState(null, '', page + '.dc.html');
      document.title = doc.title;
      var old = current.host, oldRoot = old.firstElementChild;
      var host = document.createElement('x-dc');
      document.body.appendChild(host);
      mount(host, doc, page);
      current = { host: host, page: page };

      // old step sits on top and fades out, so the caption bar and arrows never blink
      oldRoot.style.position = 'fixed';
      oldRoot.style.inset = '0';
      oldRoot.style.zIndex = '5';
      oldRoot.style.pointerEvents = 'none';
      var opts = { duration: 450, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' };
      var fade = oldRoot.animate([{ opacity: 1 }, { opacity: 0 }], opts);
      var ow = oldRoot.querySelector('.bw-window'), nw = host.querySelector('.bw-window');
      if (ow) ow.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(' + (-dir * 72) + 'px)' }], opts);
      if (nw) nw.animate([{ transform: 'translateX(' + (dir * 72) + 'px)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }], { duration: 450, easing: opts.easing });
      settle = function () { settle = null; clearTimeout(timer); fade.cancel(); old.remove(); };
      // timer backs up the animation, which never finishes while the tab is in the background
      var timer = setTimeout(function () { if (settle) settle(); }, opts.duration + 50);
      fade.finished.then(function () { if (settle) settle(); }, function () {});
    }, function () { location.href = page + '.dc.html'; });
  }

  function boot() {
    var host = document.querySelector('x-dc');
    if (!host) return;
    var page = pageOf(location.href) || STEPS[0][0];
    mount(host, document, page);
    current = { host: host, page: page };
    history.replaceState(null, '', location.href);
    STEPS.forEach(function (s) { if (s[0] !== page) load(s[0]); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target) return;
    var page = pageOf(a.href);
    if (!page) return;
    e.preventDefault();
    go(page, true);
  });
  window.addEventListener('popstate', function () {
    var page = pageOf(location.href);
    if (page) go(page, false);
  });

  // Left/right arrow keys follow the carousel arrows.
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    var cls = e.key === 'ArrowLeft' ? 'bw-prev' : e.key === 'ArrowRight' ? 'bw-next' : null;
    var link = cls && current && current.host.querySelector('a.' + cls + '[href]');
    if (link) { e.preventDefault(); go(pageOf(link.href), true); }
  });
})();
