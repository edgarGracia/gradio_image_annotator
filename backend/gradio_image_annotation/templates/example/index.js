const {
  SvelteComponent: m,
  attr: f,
  detach: o,
  element: d,
  init: b,
  insert: g,
  noop: c,
  safe_not_equal: v,
  src_url_equal: u,
  toggle_class: a
} = window.__gradio__svelte__internal;
function _(n) {
  let e, l;
  return {
    c() {
      e = d("img"), u(e.src, l = /*value*/
      n[0].url) || f(e, "src", l), f(e, "alt", "");
    },
    m(t, i) {
      g(t, e, i);
    },
    p(t, i) {
      i & /*value*/
      1 && !u(e.src, l = /*value*/
      t[0].url) && f(e, "src", l);
    },
    d(t) {
      t && o(e);
    }
  };
}
function y(n) {
  let e, l = (
    /*value*/
    n[0] && _(n)
  );
  return {
    c() {
      e = d("div"), l && l.c(), f(e, "class", "container svelte-1sgcyba"), a(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), a(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), a(
        e,
        "selected",
        /*selected*/
        n[2]
      ), a(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    m(t, i) {
      g(t, e, i), l && l.m(e, null);
    },
    p(t, [i]) {
      /*value*/
      t[0] ? l ? l.p(t, i) : (l = _(t), l.c(), l.m(e, null)) : l && (l.d(1), l = null), i & /*type*/
      2 && a(
        e,
        "table",
        /*type*/
        t[1] === "table"
      ), i & /*type*/
      2 && a(
        e,
        "gallery",
        /*type*/
        t[1] === "gallery"
      ), i & /*selected*/
      4 && a(
        e,
        "selected",
        /*selected*/
        t[2]
      ), i & /*value*/
      1 && a(
        e,
        "border",
        /*value*/
        t[0]
      );
    },
    i: c,
    o: c,
    d(t) {
      t && o(e), l && l.d();
    }
  };
}
function h(n, e, l) {
  let { value: t } = e, { type: i } = e, { selected: r = !1 } = e;
  return n.$$set = (s) => {
    "value" in s && l(0, t = s.value), "type" in s && l(1, i = s.type), "selected" in s && l(2, r = s.selected);
  }, [t, i, r];
}
class k extends m {
  constructor(e) {
    super(), b(this, e, h, y, v, { value: 0, type: 1, selected: 2 });
  }
}
export {
  k as default
};
