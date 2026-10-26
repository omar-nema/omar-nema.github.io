/* Minimal standalone runtime for the prototype's .dc.html pages:
   renders <x-dc> templates, <sc-if> blocks, {{ }} bindings and setState. */
(function () {
  var style = document.createElement('style');
  style.textContent = 'x-dc{display:contents;visibility:hidden}x-dc.ready{visibility:visible}helmet{display:none}';
  document.head.appendChild(style);

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

  function boot() {
    var host = document.querySelector('x-dc');
    if (!host) return;
    var helmet = host.querySelector('helmet');
    if (helmet) Array.prototype.slice.call(helmet.children).forEach(function (el) { document.head.appendChild(el.cloneNode(true)); });
    var template = document.createElement('template');
    template.innerHTML = host.innerHTML;
    var Component = null;
    var src = document.querySelector('script[data-dc-script]');
    if (src) {
      try { Component = new Function('DCLogic', src.textContent + '\n;return typeof Component !== "undefined" ? Component : null;')(DCLogic); }
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
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
