import { A as Y, O as H, T as x, f as I, o as T, $ as W, u as b, U as j, n as N, j as M, R as q, a8 as z, i as G, c as K, N as Q, C as V, z as X, l as J, ae as Z, ad as P, a1 as w, ac as C, x as _, a0 as $, p as U, s as ee, y as te, W as se, e as re, X as ae, a3 as ne, D as ie, Q as fe, d as le, P as oe, t as ce, K as ue, S as de, L as _e, w as he, ab as y, V as ve, Y as ge, k as pe } from "./runtime-BIPnt0zS.js";
function me(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function be(r, e) {
  var t = (
    /** @type {Effect} */
    I
  );
  t.nodes === null && (t.nodes = { start: r, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function k(r, e) {
  var t = (e & x) !== 0, s, a = !r.startsWith("<!>");
  return () => {
    s === void 0 && (s = me(a ? r : "<!>" + r), s = /** @type {TemplateNode} */
    Y(s));
    var n = (
      /** @type {TemplateNode} */
      t || H ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    return be(n, n), n;
  };
}
function O(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
class Ee {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #s = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #a = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    this.anchor = e, this.#a = t;
  }
  #n = () => {
    var e = (
      /** @type {Batch} */
      T
    );
    if (this.#t.has(e)) {
      var t = (
        /** @type {Key} */
        this.#t.get(e)
      ), s = this.#s.get(t);
      if (s)
        W(s), this.#r.delete(t);
      else {
        var a = this.#e.get(t);
        a && (this.#s.set(t, a.effect), this.#e.delete(t), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), s = a.effect);
      }
      for (const [n, i] of this.#t) {
        if (this.#t.delete(n), n === e)
          break;
        const f = this.#e.get(i);
        f && (b(f.effect), this.#e.delete(i));
      }
      for (const [n, i] of this.#s) {
        if (n === t || this.#r.has(n)) continue;
        const f = () => {
          if (Array.from(this.#t.values()).includes(n)) {
            var o = document.createDocumentFragment();
            q(i, o), o.append(N()), this.#e.set(n, { effect: i, fragment: o });
          } else
            b(i);
          this.#r.delete(n), this.#s.delete(n);
        };
        this.#a || !s ? (this.#r.add(n), j(i, f, !1)) : f();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (e) => {
    this.#t.delete(e);
    const t = Array.from(this.#t.values());
    for (const [s, a] of this.#e)
      t.includes(s) || (b(a.effect), this.#e.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var s = (
      /** @type {Batch} */
      T
    ), a = z();
    if (t && !this.#s.has(e) && !this.#e.has(e))
      if (a) {
        var n = document.createDocumentFragment(), i = N();
        n.append(i), this.#e.set(e, {
          effect: M(() => t(i)),
          fragment: n
        });
      } else
        this.#s.set(
          e,
          M(() => t(this.anchor))
        );
    if (this.#t.set(s, e), a) {
      for (const [f, l] of this.#s)
        f === e ? s.skipped_effects.delete(l) : s.skipped_effects.add(l);
      for (const [f, l] of this.#e)
        f === e ? s.skipped_effects.delete(l.effect) : s.skipped_effects.add(l.effect);
      s.oncommit(this.#n), s.ondiscard(this.#i);
    } else
      this.#n();
  }
}
function Se(r, e, t = !1) {
  var s = new Ee(r), a = t ? K : 0;
  function n(i, f) {
    s.ensure(i, f);
  }
  G(() => {
    var i = !1;
    e((f, l = !0) => {
      i = !0, n(l, f);
    }), i || n(!1, null);
  }, a);
}
const R = [...` 	
\r\f \v\uFEFF`];
function Ae(r, e, t) {
  var s = "" + r;
  if (t) {
    for (var a in t)
      if (t[a])
        s = s ? s + " " + a : a;
      else if (s.length)
        for (var n = a.length, i = 0; (i = s.indexOf(a, i)) >= 0; ) {
          var f = i + n;
          (i === 0 || R.includes(s[i - 1])) && (f === s.length || R.includes(s[f])) ? s = (i === 0 ? "" : s.substring(0, i)) + s.substring(f + 1) : i = f;
        }
  }
  return s === "" ? null : s;
}
function Te(r, e, t, s, a, n) {
  var i = r.__className;
  if (i !== t || i === void 0) {
    var f = Ae(t, s, n);
    f == null ? r.removeAttribute("class") : r.className = f, r.__className = t;
  } else if (n && a !== n)
    for (var l in n) {
      var o = !!n[l];
      (a == null || o !== !!a[l]) && r.classList.toggle(l, o);
    }
  return n;
}
const Ne = /* @__PURE__ */ Symbol("is custom element"), Me = /* @__PURE__ */ Symbol("is html");
function Pe(r, e, t, s) {
  var a = we(r);
  a[e] !== (a[e] = t) && (t == null ? r.removeAttribute(e) : typeof t != "string" && ye(r).includes(e) ? r[e] = t : r.setAttribute(e, t));
}
function we(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [Ne]: r.nodeName.includes("-"),
      [Me]: r.namespaceURI === Q
    }
  );
}
var L = /* @__PURE__ */ new Map();
function ye(r) {
  var e = r.getAttribute("is") || r.nodeName, t = L.get(e);
  if (t) return t;
  L.set(e, t = []);
  for (var s, a = r, n = Element.prototype; n !== a; ) {
    s = X(a);
    for (var i in s)
      s[i].set && t.push(i);
    a = V(a);
  }
  return t;
}
function Oe(r = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    J
  ), t = e.l.u;
  if (!t) return;
  let s = () => U(e.s);
  if (r) {
    let a = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = ee(() => {
      let f = !1;
      const l = e.s;
      for (const o in l)
        l[o] !== n[o] && (n[o] = l[o], f = !0);
      return f && a++, a;
    });
    s = () => _(i);
  }
  t.b.length && Z(() => {
    D(e, s), w(t.b);
  }), P(() => {
    const a = C(() => t.m.map($));
    return () => {
      for (const n of a)
        typeof n == "function" && n();
    };
  }), t.a.length && P(() => {
    D(e, s), w(t.a);
  });
}
function D(r, e) {
  if (r.l.s)
    for (const t of r.l.s) _(t);
  e();
}
let p = !1;
function Re(r) {
  var e = p;
  try {
    return p = !1, [r(), p];
  } finally {
    p = e;
  }
}
function E(r, e, t, s) {
  var a = !fe || (t & le) !== 0, n = (t & oe) !== 0, i = (
    /** @type {V} */
    s
  ), f = !0, l = () => (f && (f = !1, i = /** @type {V} */
  s), i), o;
  {
    var h = de in r || _e in r;
    o = te(r, e)?.set ?? (h && e in r ? (c) => r[e] = c : void 0);
  }
  var v, S = !1;
  [v, S] = Re(() => (
    /** @type {V} */
    r[e]
  )), v === void 0 && s !== void 0 && (v = l(), o && (a && se(), o(v)));
  var u;
  if (a ? u = () => {
    var c = (
      /** @type {V} */
      r[e]
    );
    return c === void 0 ? l() : (f = !0, c);
  } : u = () => {
    var c = (
      /** @type {V} */
      r[e]
    );
    return c !== void 0 && (i = /** @type {V} */
    void 0), c === void 0 ? i : c;
  }, a && (t & re) === 0)
    return u;
  if (o) {
    var B = r.$$legacy;
    return (
      /** @type {() => V} */
      (function(c, g) {
        return arguments.length > 0 ? ((!a || !g || B || S) && o(g ? u() : c), c) : u();
      })
    );
  }
  var m = !1, d = ce(() => (m = !1, u()));
  _(d);
  var F = (
    /** @type {Effect} */
    I
  );
  return (
    /** @type {() => V} */
    (function(c, g) {
      if (arguments.length > 0) {
        const A = g ? _(d) : a && n ? ae(c) : c;
        return ne(d, A), m = !0, i !== void 0 && (i = A), c;
      }
      return ue && m || (F.f & ie) !== 0 ? d.v : _(d);
    })
  );
}
he();
var Le = /* @__PURE__ */ k('<img alt=""/>'), De = /* @__PURE__ */ k("<div><!></div>");
function Ce(r, e) {
  ge(e, !1);
  let t = E(e, "value", 8), s = E(e, "type", 8), a = E(e, "selected", 8, !1);
  Oe();
  var n = De();
  let i;
  var f = pe(n);
  {
    var l = (o) => {
      var h = Le();
      y(() => Pe(h, "src", (U(t()), C(() => t().url)))), O(o, h);
    };
    Se(f, (o) => {
      t() && o(l);
    });
  }
  y(() => i = Te(n, 1, "container svelte-s3apn9", null, i, {
    table: s() === "table",
    gallery: s() === "gallery",
    selected: a(),
    border: t()
  })), O(r, n), ve();
}
export {
  Ce as default
};
