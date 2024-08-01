const {
  SvelteComponent: _r,
  assign: dr,
  create_slot: hr,
  detach: mr,
  element: gr,
  get_all_dirty_from_scope: br,
  get_slot_changes: wr,
  get_spread_update: pr,
  init: vr,
  insert: kr,
  safe_not_equal: yr,
  set_dynamic_element_data: _o,
  set_style: De,
  toggle_class: Qe,
  transition_in: na,
  transition_out: la,
  update_slot_base: Cr
} = window.__gradio__svelte__internal;
function Sr(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = hr(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      l[7]
    ) },
    { id: (
      /*elem_id*/
      l[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      l[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < s.length; a += 1)
    r = dr(r, s[a]);
  return {
    c() {
      e = gr(
        /*tag*/
        l[14]
      ), o && o.c(), _o(
        /*tag*/
        l[14]
      )(e, r), Qe(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), Qe(
        e,
        "padded",
        /*padding*/
        l[6]
      ), Qe(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), Qe(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), Qe(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), De(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), De(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), De(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), De(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), De(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), De(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), De(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      kr(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && Cr(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? wr(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : br(
          /*$$scope*/
          a[17]
        ),
        null
      ), _o(
        /*tag*/
        a[14]
      )(e, r = pr(s, [
        (!n || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || f & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), Qe(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Qe(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Qe(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Qe(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Qe(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && De(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && De(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && De(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && De(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && De(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && De(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (na(o, a), n = !0);
    },
    o(a) {
      la(o, a), n = !1;
    },
    d(a) {
      a && mr(e), o && o.d(a);
    }
  };
}
function zr(l) {
  let e, t = (
    /*tag*/
    l[14] && Sr(l)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, i) {
      t && t.m(n, i), e = !0;
    },
    p(n, [i]) {
      /*tag*/
      n[14] && t.p(n, i);
    },
    i(n) {
      e || (na(t, n), e = !0);
    },
    o(n) {
      la(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function qr(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: p = !0 } = e, { allow_overflow: w = !0 } = e, { scale: b = null } = e, { min_width: g = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const C = (v) => {
    if (v !== void 0) {
      if (typeof v == "number")
        return v + "px";
      if (typeof v == "string")
        return v;
    }
  };
  return l.$$set = (v) => {
    "height" in v && t(0, o = v.height), "width" in v && t(1, s = v.width), "elem_id" in v && t(2, r = v.elem_id), "elem_classes" in v && t(3, a = v.elem_classes), "variant" in v && t(4, f = v.variant), "border_mode" in v && t(5, u = v.border_mode), "padding" in v && t(6, c = v.padding), "type" in v && t(16, _ = v.type), "test_id" in v && t(7, d = v.test_id), "explicit_call" in v && t(8, m = v.explicit_call), "container" in v && t(9, h = v.container), "visible" in v && t(10, p = v.visible), "allow_overflow" in v && t(11, w = v.allow_overflow), "scale" in v && t(12, b = v.scale), "min_width" in v && t(13, g = v.min_width), "$$scope" in v && t(17, i = v.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    p,
    w,
    b,
    g,
    k,
    C,
    _,
    i,
    n
  ];
}
class Br extends _r {
  constructor(e) {
    super(), vr(this, e, qr, zr, yr, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Er,
  attr: Mr,
  create_slot: Ar,
  detach: Lr,
  element: Dr,
  get_all_dirty_from_scope: Rr,
  get_slot_changes: Tr,
  init: Ir,
  insert: jr,
  safe_not_equal: Hr,
  transition_in: Fr,
  transition_out: Xr,
  update_slot_base: Yr
} = window.__gradio__svelte__internal;
function Nr(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Ar(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Dr("div"), i && i.c(), Mr(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      jr(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && Yr(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Tr(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Rr(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Fr(i, o), t = !0);
    },
    o(o) {
      Xr(i, o), t = !1;
    },
    d(o) {
      o && Lr(e), i && i.d(o);
    }
  };
}
function Ur(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Or extends Er {
  constructor(e) {
    super(), Ir(this, e, Ur, Nr, Hr, {});
  }
}
const {
  SvelteComponent: Wr,
  attr: ho,
  check_outros: Vr,
  create_component: Pr,
  create_slot: Zr,
  destroy_component: Kr,
  detach: vl,
  element: Gr,
  empty: Jr,
  get_all_dirty_from_scope: Qr,
  get_slot_changes: xr,
  group_outros: $r,
  init: ef,
  insert: kl,
  mount_component: tf,
  safe_not_equal: nf,
  set_data: lf,
  space: of,
  text: sf,
  toggle_class: nn,
  transition_in: Mn,
  transition_out: yl,
  update_slot_base: af
} = window.__gradio__svelte__internal;
function mo(l) {
  let e, t;
  return e = new Or({
    props: {
      $$slots: { default: [rf] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Pr(e.$$.fragment);
    },
    m(n, i) {
      tf(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      yl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kr(e, n);
    }
  };
}
function rf(l) {
  let e;
  return {
    c() {
      e = sf(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      kl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && lf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && vl(e);
    }
  };
}
function ff(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = Zr(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && mo(l)
  );
  return {
    c() {
      e = Gr("span"), s && s.c(), t = of(), r && r.c(), n = Jr(), ho(e, "data-testid", "block-info"), ho(e, "class", "svelte-22c38v"), nn(e, "sr-only", !/*show_label*/
      l[0]), nn(e, "hide", !/*show_label*/
      l[0]), nn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      kl(a, e, f), s && s.m(e, null), kl(a, t, f), r && r.m(a, f), kl(a, n, f), i = !0;
    },
    p(a, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      8) && af(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? xr(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : Qr(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && nn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && nn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && nn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && Mn(r, 1)) : (r = mo(a), r.c(), Mn(r, 1), r.m(n.parentNode, n)) : r && ($r(), yl(r, 1, 1, () => {
        r = null;
      }), Vr());
    },
    i(a) {
      i || (Mn(s, a), Mn(r), i = !0);
    },
    o(a) {
      yl(s, a), yl(r), i = !1;
    },
    d(a) {
      a && (vl(e), vl(t), vl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function uf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class ia extends Wr {
  constructor(e) {
    super(), ef(this, e, uf, ff, nf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: cf,
  append: ti,
  attr: il,
  create_component: _f,
  destroy_component: df,
  detach: hf,
  element: go,
  init: mf,
  insert: gf,
  mount_component: bf,
  safe_not_equal: wf,
  set_data: pf,
  space: vf,
  text: kf,
  toggle_class: pt,
  transition_in: yf,
  transition_out: Cf
} = window.__gradio__svelte__internal;
function Sf(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = go("label"), t = go("span"), _f(n.$$.fragment), i = vf(), o = kf(
        /*label*/
        l[0]
      ), il(t, "class", "svelte-9gxdi0"), il(e, "for", ""), il(e, "data-testid", "block-label"), il(e, "class", "svelte-9gxdi0"), pt(e, "hide", !/*show_label*/
      l[2]), pt(e, "sr-only", !/*show_label*/
      l[2]), pt(
        e,
        "float",
        /*float*/
        l[4]
      ), pt(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      gf(r, e, a), ti(e, t), bf(n, t, null), ti(e, i), ti(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && pf(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && pt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && pt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && pt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && pt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (yf(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Cf(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && hf(e), df(n);
    }
  };
}
function zf(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class qf extends cf {
  constructor(e) {
    super(), mf(this, e, zf, Sf, wf, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Bf,
  append: ji,
  attr: ut,
  bubble: Ef,
  create_component: Mf,
  destroy_component: Af,
  detach: oa,
  element: Hi,
  init: Lf,
  insert: sa,
  listen: Df,
  mount_component: Rf,
  safe_not_equal: Tf,
  set_data: If,
  set_style: ln,
  space: jf,
  text: Hf,
  toggle_class: ke,
  transition_in: Ff,
  transition_out: Xf
} = window.__gradio__svelte__internal;
function bo(l) {
  let e, t;
  return {
    c() {
      e = Hi("span"), t = Hf(
        /*label*/
        l[1]
      ), ut(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      sa(n, e, i), ji(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && If(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && oa(e);
    }
  };
}
function Yf(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && bo(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = Hi("button"), a && a.c(), t = jf(), n = Hi("div"), Mf(i.$$.fragment), ut(n, "class", "svelte-1lrphxw"), ke(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), ke(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), ke(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], ut(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), ut(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), ut(
        e,
        "title",
        /*label*/
        l[1]
      ), ut(e, "class", "svelte-1lrphxw"), ke(
        e,
        "pending",
        /*pending*/
        l[3]
      ), ke(
        e,
        "padded",
        /*padded*/
        l[5]
      ), ke(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), ke(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), ln(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), ln(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), ln(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, u) {
      sa(f, e, u), a && a.m(e, null), ji(e, t), ji(e, n), Rf(i, n, null), o = !0, s || (r = Df(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(f, [u]) {
      /*show_label*/
      f[2] ? a ? a.p(f, u) : (a = bo(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || u & /*size*/
      16) && ke(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || u & /*size*/
      16) && ke(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || u & /*size*/
      16) && ke(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || u & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || u & /*label*/
      2) && ut(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || u & /*hasPopup*/
      256) && ut(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || u & /*label*/
      2) && ut(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || u & /*pending*/
      8) && ke(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || u & /*padded*/
      32) && ke(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || u & /*highlight*/
      64) && ke(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || u & /*transparent*/
      512) && ke(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), u & /*disabled, _color*/
      4224 && ln(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && ln(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), u & /*offset*/
      2048 && ln(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Ff(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Xf(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && oa(e), a && a.d(), Af(i), s = !1, r();
    }
  };
}
function Nf(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: u = !1 } = e, { disabled: c = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: p = 0 } = e;
  function w(b) {
    Ef.call(this, l, b);
  }
  return l.$$set = (b) => {
    "Icon" in b && t(0, i = b.Icon), "label" in b && t(1, o = b.label), "show_label" in b && t(2, s = b.show_label), "pending" in b && t(3, r = b.pending), "size" in b && t(4, a = b.size), "padded" in b && t(5, f = b.padded), "highlight" in b && t(6, u = b.highlight), "disabled" in b && t(7, c = b.disabled), "hasPopup" in b && t(8, _ = b.hasPopup), "color" in b && t(13, d = b.color), "transparent" in b && t(9, m = b.transparent), "background" in b && t(10, h = b.background), "offset" in b && t(11, p = b.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = u ? "var(--color-accent)" : d);
  }, [
    i,
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    m,
    h,
    p,
    n,
    d,
    w
  ];
}
class Ol extends Bf {
  constructor(e) {
    super(), Lf(this, e, Nf, Yf, Tf, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: Uf,
  append: Of,
  attr: ni,
  binding_callbacks: Wf,
  create_slot: Vf,
  detach: Pf,
  element: wo,
  get_all_dirty_from_scope: Zf,
  get_slot_changes: Kf,
  init: Gf,
  insert: Jf,
  safe_not_equal: Qf,
  toggle_class: vt,
  transition_in: xf,
  transition_out: $f,
  update_slot_base: eu
} = window.__gradio__svelte__internal;
function tu(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = Vf(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = wo("div"), t = wo("div"), o && o.c(), ni(t, "class", "icon svelte-3w3rth"), ni(e, "class", "empty svelte-3w3rth"), ni(e, "aria-label", "Empty value"), vt(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), vt(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), vt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), vt(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      Jf(s, e, r), Of(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && eu(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? Kf(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Zf(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && vt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && vt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && vt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && vt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (xf(o, s), n = !0);
    },
    o(s) {
      $f(o, s), n = !1;
    },
    d(s) {
      s && Pf(e), o && o.d(s), l[6](null);
    }
  };
}
function nu(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(c) {
    var _;
    if (!c) return !1;
    const { height: d } = c.getBoundingClientRect(), { height: m } = ((_ = c.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function u(c) {
    Wf[c ? "unshift" : "push"](() => {
      a = c, t(2, a);
    });
  }
  return l.$$set = (c) => {
    "size" in c && t(0, s = c.size), "unpadded_box" in c && t(1, r = c.unpadded_box), "$$scope" in c && t(4, o = c.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [s, r, a, n, o, i, u];
}
class lu extends Uf {
  constructor(e) {
    super(), Gf(this, e, nu, tu, Qf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: iu,
  append: po,
  attr: ye,
  detach: ou,
  init: su,
  insert: au,
  noop: li,
  safe_not_equal: ru,
  svg_element: ii
} = window.__gradio__svelte__internal;
function fu(l) {
  let e, t, n;
  return {
    c() {
      e = ii("svg"), t = ii("path"), n = ii("circle"), ye(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), ye(n, "cx", "12"), ye(n, "cy", "13"), ye(n, "r", "4"), ye(e, "xmlns", "http://www.w3.org/2000/svg"), ye(e, "width", "100%"), ye(e, "height", "100%"), ye(e, "viewBox", "0 0 24 24"), ye(e, "fill", "none"), ye(e, "stroke", "currentColor"), ye(e, "stroke-width", "1.5"), ye(e, "stroke-linecap", "round"), ye(e, "stroke-linejoin", "round"), ye(e, "class", "feather feather-camera");
    },
    m(i, o) {
      au(i, e, o), po(e, t), po(e, n);
    },
    p: li,
    i: li,
    o: li,
    d(i) {
      i && ou(e);
    }
  };
}
class uu extends iu {
  constructor(e) {
    super(), su(this, e, null, fu, ru, {});
  }
}
const {
  SvelteComponent: cu,
  append: _u,
  attr: Oe,
  detach: du,
  init: hu,
  insert: mu,
  noop: oi,
  safe_not_equal: gu,
  svg_element: vo
} = window.__gradio__svelte__internal;
function bu(l) {
  let e, t;
  return {
    c() {
      e = vo("svg"), t = vo("circle"), Oe(t, "cx", "12"), Oe(t, "cy", "12"), Oe(t, "r", "10"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "width", "100%"), Oe(e, "height", "100%"), Oe(e, "viewBox", "0 0 24 24"), Oe(e, "stroke-width", "1.5"), Oe(e, "stroke-linecap", "round"), Oe(e, "stroke-linejoin", "round"), Oe(e, "class", "feather feather-circle");
    },
    m(n, i) {
      mu(n, e, i), _u(e, t);
    },
    p: oi,
    i: oi,
    o: oi,
    d(n) {
      n && du(e);
    }
  };
}
class wu extends cu {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: pu,
  append: si,
  attr: We,
  detach: vu,
  init: ku,
  insert: yu,
  noop: ai,
  safe_not_equal: Cu,
  set_style: xe,
  svg_element: ol
} = window.__gradio__svelte__internal;
function Su(l) {
  let e, t, n, i;
  return {
    c() {
      e = ol("svg"), t = ol("g"), n = ol("path"), i = ol("path"), We(n, "d", "M18,6L6.087,17.913"), xe(n, "fill", "none"), xe(n, "fill-rule", "nonzero"), xe(n, "stroke-width", "2px"), We(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), We(i, "d", "M4.364,4.364L19.636,19.636"), xe(i, "fill", "none"), xe(i, "fill-rule", "nonzero"), xe(i, "stroke-width", "2px"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "version", "1.1"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), We(e, "xml:space", "preserve"), We(e, "stroke", "currentColor"), xe(e, "fill-rule", "evenodd"), xe(e, "clip-rule", "evenodd"), xe(e, "stroke-linecap", "round"), xe(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      yu(o, e, s), si(e, t), si(t, n), si(e, i);
    },
    p: ai,
    i: ai,
    o: ai,
    d(o) {
      o && vu(e);
    }
  };
}
class aa extends pu {
  constructor(e) {
    super(), ku(this, e, null, Su, Cu, {});
  }
}
const {
  SvelteComponent: zu,
  append: qu,
  attr: Sn,
  detach: Bu,
  init: Eu,
  insert: Mu,
  noop: ri,
  safe_not_equal: Au,
  svg_element: ko
} = window.__gradio__svelte__internal;
function Lu(l) {
  let e, t;
  return {
    c() {
      e = ko("svg"), t = ko("path"), Sn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Sn(t, "fill", "currentColor"), Sn(e, "id", "icon"), Sn(e, "xmlns", "http://www.w3.org/2000/svg"), Sn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Mu(n, e, i), qu(e, t);
    },
    p: ri,
    i: ri,
    o: ri,
    d(n) {
      n && Bu(e);
    }
  };
}
class Du extends zu {
  constructor(e) {
    super(), Eu(this, e, null, Lu, Au, {});
  }
}
const {
  SvelteComponent: Ru,
  append: Tu,
  attr: on,
  detach: Iu,
  init: ju,
  insert: Hu,
  noop: fi,
  safe_not_equal: Fu,
  svg_element: yo
} = window.__gradio__svelte__internal;
function Xu(l) {
  let e, t;
  return {
    c() {
      e = yo("svg"), t = yo("path"), on(t, "fill", "currentColor"), on(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), on(e, "xmlns", "http://www.w3.org/2000/svg"), on(e, "width", "100%"), on(e, "height", "100%"), on(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Hu(n, e, i), Tu(e, t);
    },
    p: fi,
    i: fi,
    o: fi,
    d(n) {
      n && Iu(e);
    }
  };
}
class Yu extends Ru {
  constructor(e) {
    super(), ju(this, e, null, Xu, Fu, {});
  }
}
const {
  SvelteComponent: Nu,
  append: Uu,
  attr: sn,
  detach: Ou,
  init: Wu,
  insert: Vu,
  noop: ui,
  safe_not_equal: Pu,
  svg_element: Co
} = window.__gradio__svelte__internal;
function Zu(l) {
  let e, t;
  return {
    c() {
      e = Co("svg"), t = Co("path"), sn(t, "d", "M5 8l4 4 4-4z"), sn(e, "class", "dropdown-arrow svelte-145leq6"), sn(e, "xmlns", "http://www.w3.org/2000/svg"), sn(e, "width", "100%"), sn(e, "height", "100%"), sn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      Vu(n, e, i), Uu(e, t);
    },
    p: ui,
    i: ui,
    o: ui,
    d(n) {
      n && Ou(e);
    }
  };
}
class to extends Nu {
  constructor(e) {
    super(), Wu(this, e, null, Zu, Pu, {});
  }
}
const {
  SvelteComponent: Ku,
  append: ci,
  attr: ie,
  detach: Gu,
  init: Ju,
  insert: Qu,
  noop: _i,
  safe_not_equal: xu,
  svg_element: sl
} = window.__gradio__svelte__internal;
function $u(l) {
  let e, t, n, i;
  return {
    c() {
      e = sl("svg"), t = sl("rect"), n = sl("circle"), i = sl("polyline"), ie(t, "x", "3"), ie(t, "y", "3"), ie(t, "width", "18"), ie(t, "height", "18"), ie(t, "rx", "2"), ie(t, "ry", "2"), ie(n, "cx", "8.5"), ie(n, "cy", "8.5"), ie(n, "r", "1.5"), ie(i, "points", "21 15 16 10 5 21"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "viewBox", "0 0 24 24"), ie(e, "fill", "none"), ie(e, "stroke", "currentColor"), ie(e, "stroke-width", "1.5"), ie(e, "stroke-linecap", "round"), ie(e, "stroke-linejoin", "round"), ie(e, "class", "feather feather-image");
    },
    m(o, s) {
      Qu(o, e, s), ci(e, t), ci(e, n), ci(e, i);
    },
    p: _i,
    i: _i,
    o: _i,
    d(o) {
      o && Gu(e);
    }
  };
}
let ra = class extends Ku {
  constructor(e) {
    super(), Ju(this, e, null, $u, xu, {});
  }
};
const {
  SvelteComponent: ec,
  append: tc,
  attr: al,
  detach: nc,
  init: lc,
  insert: ic,
  noop: di,
  safe_not_equal: oc,
  svg_element: So
} = window.__gradio__svelte__internal;
function sc(l) {
  let e, t;
  return {
    c() {
      e = So("svg"), t = So("path"), al(t, "fill", "currentColor"), al(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), al(e, "xmlns", "http://www.w3.org/2000/svg"), al(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      ic(n, e, i), tc(e, t);
    },
    p: di,
    i: di,
    o: di,
    d(n) {
      n && nc(e);
    }
  };
}
class fa extends ec {
  constructor(e) {
    super(), lc(this, e, null, sc, oc, {});
  }
}
const {
  SvelteComponent: ac,
  append: rl,
  attr: oe,
  detach: rc,
  init: fc,
  insert: uc,
  noop: hi,
  safe_not_equal: cc,
  svg_element: zn
} = window.__gradio__svelte__internal;
function _c(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = zn("svg"), t = zn("path"), n = zn("path"), i = zn("line"), o = zn("line"), oe(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), oe(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), oe(i, "x1", "12"), oe(i, "y1", "19"), oe(i, "x2", "12"), oe(i, "y2", "23"), oe(o, "x1", "8"), oe(o, "y1", "23"), oe(o, "x2", "16"), oe(o, "y2", "23"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "viewBox", "0 0 24 24"), oe(e, "fill", "none"), oe(e, "stroke", "currentColor"), oe(e, "stroke-width", "2"), oe(e, "stroke-linecap", "round"), oe(e, "stroke-linejoin", "round"), oe(e, "class", "feather feather-mic");
    },
    m(s, r) {
      uc(s, e, r), rl(e, t), rl(e, n), rl(e, i), rl(e, o);
    },
    p: hi,
    i: hi,
    o: hi,
    d(s) {
      s && rc(e);
    }
  };
}
class dc extends ac {
  constructor(e) {
    super(), fc(this, e, null, _c, cc, {});
  }
}
const {
  SvelteComponent: hc,
  append: mc,
  attr: Ce,
  detach: gc,
  init: bc,
  insert: wc,
  noop: mi,
  safe_not_equal: pc,
  svg_element: zo
} = window.__gradio__svelte__internal;
function vc(l) {
  let e, t;
  return {
    c() {
      e = zo("svg"), t = zo("rect"), Ce(t, "x", "3"), Ce(t, "y", "3"), Ce(t, "width", "18"), Ce(t, "height", "18"), Ce(t, "rx", "2"), Ce(t, "ry", "2"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "width", "100%"), Ce(e, "height", "100%"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "stroke-width", "1.5"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round"), Ce(e, "class", "feather feather-square");
    },
    m(n, i) {
      wc(n, e, i), mc(e, t);
    },
    p: mi,
    i: mi,
    o: mi,
    d(n) {
      n && gc(e);
    }
  };
}
class kc extends hc {
  constructor(e) {
    super(), bc(this, e, null, vc, pc, {});
  }
}
const {
  SvelteComponent: yc,
  append: gi,
  attr: we,
  detach: Cc,
  init: Sc,
  insert: zc,
  noop: bi,
  safe_not_equal: qc,
  svg_element: fl
} = window.__gradio__svelte__internal;
function Bc(l) {
  let e, t, n, i;
  return {
    c() {
      e = fl("svg"), t = fl("path"), n = fl("polyline"), i = fl("line"), we(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), we(n, "points", "17 8 12 3 7 8"), we(i, "x1", "12"), we(i, "y1", "3"), we(i, "x2", "12"), we(i, "y2", "15"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "90%"), we(e, "height", "90%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "2"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-upload");
    },
    m(o, s) {
      zc(o, e, s), gi(e, t), gi(e, n), gi(e, i);
    },
    p: bi,
    i: bi,
    o: bi,
    d(o) {
      o && Cc(e);
    }
  };
}
let ua = class extends yc {
  constructor(e) {
    super(), Sc(this, e, null, Bc, qc, {});
  }
};
const {
  SvelteComponent: Ec,
  append: qo,
  attr: kt,
  detach: Mc,
  init: Ac,
  insert: Lc,
  noop: wi,
  safe_not_equal: Dc,
  svg_element: pi
} = window.__gradio__svelte__internal;
function Rc(l) {
  let e, t, n;
  return {
    c() {
      e = pi("svg"), t = pi("path"), n = pi("path"), kt(t, "fill", "currentColor"), kt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), kt(n, "fill", "currentColor"), kt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), kt(e, "xmlns", "http://www.w3.org/2000/svg"), kt(e, "width", "100%"), kt(e, "height", "100%"), kt(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      Lc(i, e, o), qo(e, t), qo(e, n);
    },
    p: wi,
    i: wi,
    o: wi,
    d(i) {
      i && Mc(e);
    }
  };
}
let ca = class extends Ec {
  constructor(e) {
    super(), Ac(this, e, null, Rc, Dc, {});
  }
};
const Tc = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Bo = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Tc.reduce(
  (l, { color: e, primary: t, secondary: n }) => ({
    ...l,
    [e]: {
      primary: Bo[e][t],
      secondary: Bo[e][n]
    }
  }),
  {}
);
class Cl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Ic(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Cl("Must be on Spaces to share.");
  let t, n, i;
  t = jc(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const o = new File([t], i, { type: n }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if ((a = s.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await s.json();
      throw new Cl(`Upload failed: ${f.error}`);
    }
    throw new Cl("Upload failed.");
  }
  return await s.text();
}
function jc(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Hc,
  create_component: Fc,
  destroy_component: Xc,
  init: Yc,
  mount_component: Nc,
  safe_not_equal: Uc,
  transition_in: Oc,
  transition_out: Wc
} = window.__gradio__svelte__internal, { createEventDispatcher: Vc } = window.__gradio__svelte__internal;
function Pc(l) {
  let e, t;
  return e = new Ol({
    props: {
      Icon: Du,
      label: (
        /*i18n*/
        l[2]("common.share")
      ),
      pending: (
        /*pending*/
        l[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[5]
  ), {
    c() {
      Fc(e.$$.fragment);
    },
    m(n, i) {
      Nc(e, n, i), t = !0;
    },
    p(n, [i]) {
      const o = {};
      i & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), i & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (Oc(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wc(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xc(e, n);
    }
  };
}
function Zc(l, e, t) {
  const n = Vc();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let u = f instanceof Cl ? f.message : "Share failed.";
      n("error", u);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, s = f.i18n);
  }, [i, o, s, r, n, a];
}
class Kc extends Hc {
  constructor(e) {
    super(), Yc(this, e, Zc, Pc, Uc, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Gc,
  append: Vt,
  attr: Fi,
  check_outros: Jc,
  create_component: _a,
  destroy_component: da,
  detach: Sl,
  element: Xi,
  group_outros: Qc,
  init: xc,
  insert: zl,
  mount_component: ha,
  safe_not_equal: $c,
  set_data: Yi,
  space: Ni,
  text: An,
  toggle_class: Eo,
  transition_in: Al,
  transition_out: Ll
} = window.__gradio__svelte__internal;
function e_(l) {
  let e, t;
  return e = new ua({}), {
    c() {
      _a(e.$$.fragment);
    },
    m(n, i) {
      ha(e, n, i), t = !0;
    },
    i(n) {
      t || (Al(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ll(e.$$.fragment, n), t = !1;
    },
    d(n) {
      da(e, n);
    }
  };
}
function t_(l) {
  let e, t;
  return e = new fa({}), {
    c() {
      _a(e.$$.fragment);
    },
    m(n, i) {
      ha(e, n, i), t = !0;
    },
    i(n) {
      t || (Al(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ll(e.$$.fragment, n), t = !1;
    },
    d(n) {
      da(e, n);
    }
  };
}
function Mo(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, o, s, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = Xi("span"), t = An("- "), i = An(n), o = An(" -"), s = Ni(), a = An(r), Fi(e, "class", "or svelte-kzcjhc");
    },
    m(f, u) {
      zl(f, e, u), Vt(e, t), Vt(e, i), Vt(e, o), zl(f, s, u), zl(f, a, u);
    },
    p(f, u) {
      u & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && Yi(i, n), u & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && Yi(a, r);
    },
    d(f) {
      f && (Sl(e), Sl(s), Sl(a));
    }
  };
}
function n_(l) {
  let e, t, n, i, o, s = (
    /*i18n*/
    l[1](
      /*defs*/
      l[5][
        /*type*/
        l[0]
      ] || /*defs*/
      l[5].file
    ) + ""
  ), r, a, f;
  const u = [t_, e_], c = [];
  function _(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = c[n] = u[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && Mo(l)
  );
  return {
    c() {
      e = Xi("div"), t = Xi("span"), i.c(), o = Ni(), r = An(s), a = Ni(), d && d.c(), Fi(t, "class", "icon-wrap svelte-kzcjhc"), Eo(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), Fi(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      zl(m, e, h), Vt(e, t), c[n].m(t, null), Vt(e, o), Vt(e, r), Vt(e, a), d && d.m(e, null), f = !0;
    },
    p(m, [h]) {
      let p = n;
      n = _(m), n !== p && (Qc(), Ll(c[p], 1, 1, () => {
        c[p] = null;
      }), Jc(), i = c[n], i || (i = c[n] = u[n](m), i.c()), Al(i, 1), i.m(t, null)), (!f || h & /*hovered*/
      16) && Eo(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!f || h & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && Yi(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = Mo(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      f || (Al(i), f = !0);
    },
    o(m) {
      Ll(i), f = !1;
    },
    d(m) {
      m && Sl(e), c[n].d(), d && d.d();
    }
  };
}
function l_(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return l.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, i = f.i18n), "message" in f && t(2, o = f.message), "mode" in f && t(3, s = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, i, o, s, r, a];
}
class ma extends Gc {
  constructor(e) {
    super(), xc(this, e, l_, n_, $c, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: i_,
  append: vi,
  attr: it,
  check_outros: Ln,
  create_component: Wl,
  destroy_component: Vl,
  detach: wn,
  element: $n,
  empty: o_,
  group_outros: Dn,
  init: s_,
  insert: pn,
  listen: Pl,
  mount_component: Zl,
  safe_not_equal: a_,
  space: ki,
  toggle_class: At,
  transition_in: fe,
  transition_out: Se
} = window.__gradio__svelte__internal;
function Ao(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), o, s = (
    /*sources*/
    l[1].includes("webcam")
  ), r, a = (
    /*sources*/
    l[1].includes("clipboard")
  ), f, u = t && Lo(l), c = i && Do(l), _ = s && Ro(l), d = a && To(l);
  return {
    c() {
      e = $n("span"), u && u.c(), n = ki(), c && c.c(), o = ki(), _ && _.c(), r = ki(), d && d.c(), it(e, "class", "source-selection svelte-1jp3vgd"), it(e, "data-testid", "source-select");
    },
    m(m, h) {
      pn(m, e, h), u && u.m(e, null), vi(e, n), c && c.m(e, null), vi(e, o), _ && _.m(e, null), vi(e, r), d && d.m(e, null), f = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? u ? (u.p(m, h), h & /*sources*/
      2 && fe(u, 1)) : (u = Lo(m), u.c(), fe(u, 1), u.m(e, n)) : u && (Dn(), Se(u, 1, 1, () => {
        u = null;
      }), Ln()), h & /*sources*/
      2 && (i = /*sources*/
      m[1].includes("microphone")), i ? c ? (c.p(m, h), h & /*sources*/
      2 && fe(c, 1)) : (c = Do(m), c.c(), fe(c, 1), c.m(e, o)) : c && (Dn(), Se(c, 1, 1, () => {
        c = null;
      }), Ln()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? _ ? (_.p(m, h), h & /*sources*/
      2 && fe(_, 1)) : (_ = Ro(m), _.c(), fe(_, 1), _.m(e, r)) : _ && (Dn(), Se(_, 1, 1, () => {
        _ = null;
      }), Ln()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && fe(d, 1)) : (d = To(m), d.c(), fe(d, 1), d.m(e, null)) : d && (Dn(), Se(d, 1, 1, () => {
        d = null;
      }), Ln());
    },
    i(m) {
      f || (fe(u), fe(c), fe(_), fe(d), f = !0);
    },
    o(m) {
      Se(u), Se(c), Se(_), Se(d), f = !1;
    },
    d(m) {
      m && wn(e), u && u.d(), c && c.d(), _ && _.d(), d && d.d();
    }
  };
}
function Lo(l) {
  let e, t, n, i, o;
  return t = new ua({}), {
    c() {
      e = $n("button"), Wl(t.$$.fragment), it(e, "class", "icon svelte-1jp3vgd"), it(e, "aria-label", "Upload file"), At(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      pn(s, e, r), Zl(t, e, null), n = !0, i || (o = Pl(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && At(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && wn(e), Vl(t), i = !1, o();
    }
  };
}
function Do(l) {
  let e, t, n, i, o;
  return t = new dc({}), {
    c() {
      e = $n("button"), Wl(t.$$.fragment), it(e, "class", "icon svelte-1jp3vgd"), it(e, "aria-label", "Record audio"), At(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      pn(s, e, r), Zl(t, e, null), n = !0, i || (o = Pl(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && At(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && wn(e), Vl(t), i = !1, o();
    }
  };
}
function Ro(l) {
  let e, t, n, i, o;
  return t = new ca({}), {
    c() {
      e = $n("button"), Wl(t.$$.fragment), it(e, "class", "icon svelte-1jp3vgd"), it(e, "aria-label", "Capture from camera"), At(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      pn(s, e, r), Zl(t, e, null), n = !0, i || (o = Pl(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && At(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && wn(e), Vl(t), i = !1, o();
    }
  };
}
function To(l) {
  let e, t, n, i, o;
  return t = new fa({}), {
    c() {
      e = $n("button"), Wl(t.$$.fragment), it(e, "class", "icon svelte-1jp3vgd"), it(e, "aria-label", "Paste from clipboard"), At(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      pn(s, e, r), Zl(t, e, null), n = !0, i || (o = Pl(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && At(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && wn(e), Vl(t), i = !1, o();
    }
  };
}
function r_(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && Ao(l)
  );
  return {
    c() {
      n && n.c(), e = o_();
    },
    m(i, o) {
      n && n.m(i, o), pn(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && fe(n, 1)) : (n = Ao(i), n.c(), fe(n, 1), n.m(e.parentNode, e)) : n && (Dn(), Se(n, 1, 1, () => {
        n = null;
      }), Ln());
    },
    i(i) {
      t || (fe(n), t = !0);
    },
    o(i) {
      Se(n), t = !1;
    },
    d(i) {
      i && wn(e), n && n.d(i);
    }
  };
}
function f_(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(m, h, p, w) {
    function b(g) {
      return g instanceof p ? g : new p(function(k) {
        k(g);
      });
    }
    return new (p || (p = Promise))(function(g, k) {
      function C(y) {
        try {
          z(w.next(y));
        } catch (A) {
          k(A);
        }
      }
      function v(y) {
        try {
          z(w.throw(y));
        } catch (A) {
          k(A);
        }
      }
      function z(y) {
        y.done ? g(y.value) : b(y.value).then(C, v);
      }
      z((w = w.apply(m, h || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(m) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, s = m), a(m);
    });
  }
  const u = () => f("upload"), c = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (m) => {
    "sources" in m && t(1, o = m.sources), "active_source" in m && t(0, s = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    f,
    r,
    a,
    u,
    c,
    _,
    d
  ];
}
class u_ extends i_ {
  constructor(e) {
    super(), s_(this, e, f_, r_, a_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function dn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function ql() {
}
const c_ = (l) => l;
function __(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function Io(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const ga = typeof window < "u";
let jo = ga ? () => window.performance.now() : () => Date.now(), ba = ga ? (l) => requestAnimationFrame(l) : ql;
const gn = /* @__PURE__ */ new Set();
function wa(l) {
  gn.forEach((e) => {
    e.c(l) || (gn.delete(e), e.f());
  }), gn.size !== 0 && ba(wa);
}
function d_(l) {
  let e;
  return gn.size === 0 && ba(wa), {
    promise: new Promise((t) => {
      gn.add(e = { c: l, f: t });
    }),
    abort() {
      gn.delete(e);
    }
  };
}
function h_(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function m_(l, { delay: e = 0, duration: t = 400, easing: n = c_ } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (o) => `opacity: ${o * i}`
  };
}
function Ho(l, { delay: e = 0, duration: t = 400, easing: n = h_, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, u = a * (1 - s), [c, _] = Io(i), [d, m] = Io(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, p) => `
			transform: ${f} translate(${(1 - h) * c}${_}, ${(1 - h) * d}${m});
			opacity: ${a - u * p}`
  };
}
const an = [];
function g_(l, e = ql) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (__(l, r) && (l = r, t)) {
      const a = !an.length;
      for (const f of n)
        f[1](), an.push(f, l);
      if (a) {
        for (let f = 0; f < an.length; f += 2)
          an[f][0](an[f + 1]);
        an.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = ql) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || ql), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function Fo(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function Ui(l, e, t, n) {
  if (typeof t == "number" || Fo(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = l.opts.stiffness * i, r = l.opts.damping * o, a = (s - r) * l.inv_mass, f = (o + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, Fo(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => Ui(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = Ui(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Xo(l, e = {}) {
  const t = g_(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, u = l, c = 1, _ = 0, d = !1;
  function m(p, w = {}) {
    u = p;
    const b = a = {};
    return l == null || w.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = jo(), f = p, t.set(l = u), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), c = 0), r || (s = jo(), d = !1, r = d_((g) => {
      if (d)
        return d = !1, r = null, !1;
      c = Math.min(c + _, 1);
      const k = {
        inv_mass: c,
        opts: h,
        settled: !0,
        dt: (g - s) * 60 / 1e3
      }, C = Ui(k, f, l, u);
      return s = g, f = l, t.set(l = C), k.settled && (r = null), !k.settled;
    })), new Promise((g) => {
      r.promise.then(() => {
        b === a && g();
      });
    }));
  }
  const h = {
    set: m,
    update: (p, w) => m(p(u, l), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return h;
}
const {
  SvelteComponent: b_,
  append: Ve,
  attr: W,
  component_subscribe: Yo,
  detach: w_,
  element: p_,
  init: v_,
  insert: k_,
  noop: No,
  safe_not_equal: y_,
  set_style: ul,
  svg_element: Pe,
  toggle_class: Uo
} = window.__gradio__svelte__internal, { onMount: C_ } = window.__gradio__svelte__internal;
function S_(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _;
  return {
    c() {
      e = p_("div"), t = Pe("svg"), n = Pe("g"), i = Pe("path"), o = Pe("path"), s = Pe("path"), r = Pe("path"), a = Pe("g"), f = Pe("path"), u = Pe("path"), c = Pe("path"), _ = Pe("path"), W(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), W(i, "fill", "#FF7C00"), W(i, "fill-opacity", "0.4"), W(i, "class", "svelte-43sxxs"), W(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), W(o, "fill", "#FF7C00"), W(o, "class", "svelte-43sxxs"), W(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), W(s, "fill", "#FF7C00"), W(s, "fill-opacity", "0.4"), W(s, "class", "svelte-43sxxs"), W(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), W(r, "fill", "#FF7C00"), W(r, "class", "svelte-43sxxs"), ul(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), W(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), W(f, "fill", "#FF7C00"), W(f, "fill-opacity", "0.4"), W(f, "class", "svelte-43sxxs"), W(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), W(u, "fill", "#FF7C00"), W(u, "class", "svelte-43sxxs"), W(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), W(c, "fill", "#FF7C00"), W(c, "fill-opacity", "0.4"), W(c, "class", "svelte-43sxxs"), W(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), W(_, "fill", "#FF7C00"), W(_, "class", "svelte-43sxxs"), ul(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), W(t, "viewBox", "-1200 -1200 3000 3000"), W(t, "fill", "none"), W(t, "xmlns", "http://www.w3.org/2000/svg"), W(t, "class", "svelte-43sxxs"), W(e, "class", "svelte-43sxxs"), Uo(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, m) {
      k_(d, e, m), Ve(e, t), Ve(t, n), Ve(n, i), Ve(n, o), Ve(n, s), Ve(n, r), Ve(t, a), Ve(a, f), Ve(a, u), Ve(a, c), Ve(a, _);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && ul(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && ul(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Uo(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: No,
    o: No,
    d(d) {
      d && w_(e);
    }
  };
}
function z_(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, m, h, p) {
    function w(b) {
      return b instanceof h ? b : new h(function(g) {
        g(b);
      });
    }
    return new (h || (h = Promise))(function(b, g) {
      function k(z) {
        try {
          v(p.next(z));
        } catch (y) {
          g(y);
        }
      }
      function C(z) {
        try {
          v(p.throw(z));
        } catch (y) {
          g(y);
        }
      }
      function v(z) {
        z.done ? b(z.value) : w(z.value).then(k, C);
      }
      v((p = p.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = Xo([0, 0]);
  Yo(l, r, (d) => t(1, n = d));
  const a = Xo([0, 0]);
  Yo(l, a, (d) => t(2, i = d));
  let f;
  function u() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function c() {
    return o(this, void 0, void 0, function* () {
      yield u(), f || c();
    });
  }
  function _() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), c();
    });
  }
  return C_(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class q_ extends b_ {
  constructor(e) {
    super(), v_(this, e, z_, S_, y_, { margin: 0 });
  }
}
const {
  SvelteComponent: B_,
  append: Pt,
  attr: Je,
  binding_callbacks: Oo,
  check_outros: Oi,
  create_component: pa,
  create_slot: va,
  destroy_component: ka,
  destroy_each: ya,
  detach: X,
  element: nt,
  empty: vn,
  ensure_array_like: Dl,
  get_all_dirty_from_scope: Ca,
  get_slot_changes: Sa,
  group_outros: Wi,
  init: E_,
  insert: Y,
  mount_component: za,
  noop: Vi,
  safe_not_equal: M_,
  set_data: Ne,
  set_style: Et,
  space: Ye,
  text: ne,
  toggle_class: Xe,
  transition_in: Ge,
  transition_out: lt,
  update_slot_base: qa
} = window.__gradio__svelte__internal, { tick: A_ } = window.__gradio__svelte__internal, { onDestroy: L_ } = window.__gradio__svelte__internal, { createEventDispatcher: D_ } = window.__gradio__svelte__internal, R_ = (l) => ({}), Wo = (l) => ({}), T_ = (l) => ({}), Vo = (l) => ({});
function Po(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Zo(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function I_(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new Ol({
    props: {
      Icon: aa,
      label: (
        /*i18n*/
        l[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    l[32]
  );
  const f = (
    /*#slots*/
    l[30].error
  ), u = va(
    f,
    l,
    /*$$scope*/
    l[29],
    Wo
  );
  return {
    c() {
      e = nt("div"), pa(t.$$.fragment), n = Ye(), i = nt("span"), s = ne(o), r = Ye(), u && u.c(), Je(e, "class", "clear-status svelte-16nch4a"), Je(i, "class", "error svelte-16nch4a");
    },
    m(c, _) {
      Y(c, e, _), za(t, e, null), Y(c, n, _), Y(c, i, _), Pt(i, s), Y(c, r, _), u && u.m(c, _), a = !0;
    },
    p(c, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      c[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      c[1]("common.error") + "") && Ne(s, o), u && u.p && (!a || _[0] & /*$$scope*/
      536870912) && qa(
        u,
        f,
        c,
        /*$$scope*/
        c[29],
        a ? Sa(
          f,
          /*$$scope*/
          c[29],
          _,
          R_
        ) : Ca(
          /*$$scope*/
          c[29]
        ),
        Wo
      );
    },
    i(c) {
      a || (Ge(t.$$.fragment, c), Ge(u, c), a = !0);
    },
    o(c) {
      lt(t.$$.fragment, c), lt(u, c), a = !1;
    },
    d(c) {
      c && (X(e), X(n), X(i), X(r)), ka(t), u && u.d(c);
    }
  };
}
function j_(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && Ko(l)
  );
  function c(g, k) {
    if (
      /*progress*/
      g[7]
    ) return X_;
    if (
      /*queue_position*/
      g[2] !== null && /*queue_size*/
      g[3] !== void 0 && /*queue_position*/
      g[2] >= 0
    ) return F_;
    if (
      /*queue_position*/
      g[2] === 0
    ) return H_;
  }
  let _ = c(l), d = _ && _(l), m = (
    /*timer*/
    l[5] && Qo(l)
  );
  const h = [O_, U_], p = [];
  function w(g, k) {
    return (
      /*last_progress_level*/
      g[15] != null ? 0 : (
        /*show_progress*/
        g[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = w(l)) && (s = p[o] = h[o](l));
  let b = !/*timer*/
  l[5] && is(l);
  return {
    c() {
      u && u.c(), e = Ye(), t = nt("div"), d && d.c(), n = Ye(), m && m.c(), i = Ye(), s && s.c(), r = Ye(), b && b.c(), a = vn(), Je(t, "class", "progress-text svelte-16nch4a"), Xe(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Xe(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(g, k) {
      u && u.m(g, k), Y(g, e, k), Y(g, t, k), d && d.m(t, null), Pt(t, n), m && m.m(t, null), Y(g, i, k), ~o && p[o].m(g, k), Y(g, r, k), b && b.m(g, k), Y(g, a, k), f = !0;
    },
    p(g, k) {
      /*variant*/
      g[8] === "default" && /*show_eta_bar*/
      g[18] && /*show_progress*/
      g[6] === "full" ? u ? u.p(g, k) : (u = Ko(g), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), _ === (_ = c(g)) && d ? d.p(g, k) : (d && d.d(1), d = _ && _(g), d && (d.c(), d.m(t, n))), /*timer*/
      g[5] ? m ? m.p(g, k) : (m = Qo(g), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || k[0] & /*variant*/
      256) && Xe(
        t,
        "meta-text-center",
        /*variant*/
        g[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Xe(
        t,
        "meta-text",
        /*variant*/
        g[8] === "default"
      );
      let C = o;
      o = w(g), o === C ? ~o && p[o].p(g, k) : (s && (Wi(), lt(p[C], 1, 1, () => {
        p[C] = null;
      }), Oi()), ~o ? (s = p[o], s ? s.p(g, k) : (s = p[o] = h[o](g), s.c()), Ge(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      g[5] ? b && (Wi(), lt(b, 1, 1, () => {
        b = null;
      }), Oi()) : b ? (b.p(g, k), k[0] & /*timer*/
      32 && Ge(b, 1)) : (b = is(g), b.c(), Ge(b, 1), b.m(a.parentNode, a));
    },
    i(g) {
      f || (Ge(s), Ge(b), f = !0);
    },
    o(g) {
      lt(s), lt(b), f = !1;
    },
    d(g) {
      g && (X(e), X(t), X(i), X(r), X(a)), u && u.d(g), d && d.d(), m && m.d(), ~o && p[o].d(g), b && b.d(g);
    }
  };
}
function Ko(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = nt("div"), Je(e, "class", "eta-bar svelte-16nch4a"), Et(e, "transform", t);
    },
    m(n, i) {
      Y(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Et(e, "transform", t);
    },
    d(n) {
      n && X(e);
    }
  };
}
function H_(l) {
  let e;
  return {
    c() {
      e = ne("processing |");
    },
    m(t, n) {
      Y(t, e, n);
    },
    p: Vi,
    d(t) {
      t && X(e);
    }
  };
}
function F_(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = ne("queue: "), n = ne(t), i = ne("/"), o = ne(
        /*queue_size*/
        l[3]
      ), s = ne(" |");
    },
    m(r, a) {
      Y(r, e, a), Y(r, n, a), Y(r, i, a), Y(r, o, a), Y(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ne(n, t), a[0] & /*queue_size*/
      8 && Ne(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (X(e), X(n), X(i), X(o), X(s));
    }
  };
}
function X_(l) {
  let e, t = Dl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Jo(Zo(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = vn();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Y(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = Dl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Zo(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Jo(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && X(e), ya(n, i);
    }
  };
}
function Go(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(u, c) {
    return (
      /*p*/
      u[41].length != null ? N_ : Y_
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Ye(), n = ne(t), i = ne(" | "), s = ne(o);
    },
    m(u, c) {
      f.m(u, c), Y(u, e, c), Y(u, n, c), Y(u, i, c), Y(u, s, c);
    },
    p(u, c) {
      a === (a = r(u)) && f ? f.p(u, c) : (f.d(1), f = a(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && Ne(n, t);
    },
    d(u) {
      u && (X(e), X(n), X(i), X(s)), f.d(u);
    }
  };
}
function Y_(l) {
  let e = dn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ne(e);
    },
    m(n, i) {
      Y(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = dn(
        /*p*/
        n[41].index || 0
      ) + "") && Ne(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function N_(l) {
  let e = dn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = dn(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = ne(e), n = ne("/"), o = ne(i);
    },
    m(s, r) {
      Y(s, t, r), Y(s, n, r), Y(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = dn(
        /*p*/
        s[41].index || 0
      ) + "") && Ne(t, e), r[0] & /*progress*/
      128 && i !== (i = dn(
        /*p*/
        s[41].length
      ) + "") && Ne(o, i);
    },
    d(s) {
      s && (X(t), X(n), X(o));
    }
  };
}
function Jo(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Go(l)
  );
  return {
    c() {
      t && t.c(), e = vn();
    },
    m(n, i) {
      t && t.m(n, i), Y(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Go(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function Qo(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = ne(
        /*formatted_timer*/
        l[20]
      ), n = ne(t), i = ne("s");
    },
    m(o, s) {
      Y(o, e, s), Y(o, n, s), Y(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ne(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ne(n, t);
    },
    d(o) {
      o && (X(e), X(n), X(i));
    }
  };
}
function U_(l) {
  let e, t;
  return e = new q_({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      pa(e.$$.fragment);
    },
    m(n, i) {
      za(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ka(e, n);
    }
  };
}
function O_(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && xo(l)
  );
  return {
    c() {
      e = nt("div"), t = nt("div"), r && r.c(), n = Ye(), i = nt("div"), o = nt("div"), Je(t, "class", "progress-level-inner svelte-16nch4a"), Je(o, "class", "progress-bar svelte-16nch4a"), Et(o, "width", s), Je(i, "class", "progress-bar-wrap svelte-16nch4a"), Je(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      Y(a, e, f), Pt(e, t), r && r.m(t, null), Pt(e, n), Pt(e, i), Pt(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = xo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Et(o, "width", s);
    },
    i: Vi,
    o: Vi,
    d(a) {
      a && X(e), r && r.d(), l[31](null);
    }
  };
}
function xo(l) {
  let e, t = Dl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = ls(Po(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = vn();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Y(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Dl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Po(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ls(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && X(e), ya(n, i);
    }
  };
}
function $o(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && W_()
  ), s = (
    /*p*/
    l[41].desc != null && es(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && ts()
  ), a = (
    /*progress_level*/
    l[14] != null && ns(l)
  );
  return {
    c() {
      o && o.c(), e = Ye(), s && s.c(), t = Ye(), r && r.c(), n = Ye(), a && a.c(), i = vn();
    },
    m(f, u) {
      o && o.m(f, u), Y(f, e, u), s && s.m(f, u), Y(f, t, u), r && r.m(f, u), Y(f, n, u), a && a.m(f, u), Y(f, i, u);
    },
    p(f, u) {
      /*p*/
      f[41].desc != null ? s ? s.p(f, u) : (s = es(f), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = ts(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, u) : (a = ns(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (X(e), X(t), X(n), X(i)), o && o.d(f), s && s.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function W_(l) {
  let e;
  return {
    c() {
      e = ne(" /");
    },
    m(t, n) {
      Y(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function es(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = ne(e);
    },
    m(n, i) {
      Y(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ne(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function ts(l) {
  let e;
  return {
    c() {
      e = ne("-");
    },
    m(t, n) {
      Y(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function ns(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ne(e), n = ne("%");
    },
    m(i, o) {
      Y(i, t, o), Y(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Ne(t, e);
    },
    d(i) {
      i && (X(t), X(n));
    }
  };
}
function ls(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && $o(l)
  );
  return {
    c() {
      t && t.c(), e = vn();
    },
    m(n, i) {
      t && t.m(n, i), Y(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = $o(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function is(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = va(
    o,
    l,
    /*$$scope*/
    l[29],
    Vo
  );
  return {
    c() {
      e = nt("p"), t = ne(
        /*loading_text*/
        l[9]
      ), n = Ye(), s && s.c(), Je(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      Y(r, e, a), Pt(e, t), Y(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ne(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && qa(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? Sa(
          o,
          /*$$scope*/
          r[29],
          a,
          T_
        ) : Ca(
          /*$$scope*/
          r[29]
        ),
        Vo
      );
    },
    i(r) {
      i || (Ge(s, r), i = !0);
    },
    o(r) {
      lt(s, r), i = !1;
    },
    d(r) {
      r && (X(e), X(n)), s && s.d(r);
    }
  };
}
function V_(l) {
  let e, t, n, i, o;
  const s = [j_, I_], r = [];
  function a(f, u) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(l)) && (n = r[t] = s[t](l)), {
    c() {
      e = nt("div"), n && n.c(), Je(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Xe(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Xe(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Xe(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Xe(
        e,
        "border",
        /*border*/
        l[12]
      ), Et(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Et(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, u) {
      Y(f, e, u), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, u) {
      let c = t;
      t = a(f), t === c ? ~t && r[t].p(f, u) : (n && (Wi(), lt(r[c], 1, 1, () => {
        r[c] = null;
      }), Oi()), ~t ? (n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), Ge(n, 1), n.m(e, null)) : n = null), (!o || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && Je(e, "class", i), (!o || u[0] & /*variant, show_progress, status, show_progress*/
      336) && Xe(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Xe(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || u[0] & /*variant, show_progress, status*/
      336) && Xe(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || u[0] & /*variant, show_progress, border*/
      4416) && Xe(
        e,
        "border",
        /*border*/
        f[12]
      ), u[0] & /*absolute*/
      1024 && Et(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && Et(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (Ge(n), o = !0);
    },
    o(f) {
      lt(n), o = !1;
    },
    d(f) {
      f && X(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var P_ = function(l, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(u) {
      try {
        f(n.next(u));
      } catch (c) {
        s(c);
      }
    }
    function a(u) {
      try {
        f(n.throw(u));
      } catch (c) {
        s(c);
      }
    }
    function f(u) {
      u.done ? o(u.value) : i(u.value).then(r, a);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let cl = [], yi = !1;
function Z_(l) {
  return P_(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (cl.push(e), !yi) yi = !0;
      else return;
      yield A_(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < cl.length; i++) {
          const s = cl[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), yi = !1, cl = [];
      });
    }
  });
}
function K_(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = D_();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: p = null } = e, { variant: w = "default" } = e, { loading_text: b = "Loading..." } = e, { absolute: g = !0 } = e, { translucent: k = !1 } = e, { border: C = !1 } = e, { autoscroll: v } = e, z, y = !1, A = 0, S = 0, R = null, L = null, N = 0, J = null, x, V = null, U = !0;
  const T = () => {
    t(0, a = t(27, R = t(19, O = null))), t(25, A = performance.now()), t(26, S = 0), y = !0, K();
  };
  function K() {
    requestAnimationFrame(() => {
      t(26, S = (performance.now() - A) / 1e3), y && K();
    });
  }
  function D() {
    t(26, S = 0), t(0, a = t(27, R = t(19, O = null))), y && (y = !1);
  }
  L_(() => {
    y && D();
  });
  let O = null;
  function le(I) {
    Oo[I ? "unshift" : "push"](() => {
      V = I, t(16, V), t(7, p), t(14, J), t(15, x);
    });
  }
  const ae = () => {
    s("clear_status");
  };
  function ue(I) {
    Oo[I ? "unshift" : "push"](() => {
      z = I, t(13, z);
    });
  }
  return l.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, f = I.queue_position), "queue_size" in I && t(3, u = I.queue_size), "status" in I && t(4, c = I.status), "scroll_to_output" in I && t(22, _ = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, m = I.show_progress), "message" in I && t(23, h = I.message), "progress" in I && t(7, p = I.progress), "variant" in I && t(8, w = I.variant), "loading_text" in I && t(9, b = I.loading_text), "absolute" in I && t(10, g = I.absolute), "translucent" in I && t(11, k = I.translucent), "border" in I && t(12, C = I.border), "autoscroll" in I && t(24, v = I.autoscroll), "$$scope" in I && t(29, o = I.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = R), a != null && R !== a && (t(28, L = (performance.now() - A) / 1e3 + a), t(19, O = L.toFixed(1)), t(27, R = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, N = L === null || L <= 0 || !S ? null : Math.min(S / L, 1)), l.$$.dirty[0] & /*progress*/
    128 && p != null && t(18, U = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? t(14, J = p.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, J = null), J ? (t(15, x = J[J.length - 1]), V && (x === 0 ? t(16, V.style.transition = "0", V) : t(16, V.style.transition = "150ms", V))) : t(15, x = void 0)), l.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? T() : D()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && _ && (c === "pending" || c === "complete") && Z_(z, v), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = S.toFixed(1));
  }, [
    a,
    r,
    f,
    u,
    c,
    d,
    m,
    p,
    w,
    b,
    g,
    k,
    C,
    z,
    J,
    x,
    V,
    N,
    U,
    O,
    n,
    s,
    _,
    h,
    v,
    A,
    S,
    R,
    L,
    o,
    i,
    le,
    ae,
    ue
  ];
}
class G_ extends B_ {
  constructor(e) {
    super(), E_(
      this,
      e,
      K_,
      V_,
      M_,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const { setContext: Vm, getContext: J_ } = window.__gradio__svelte__internal, Q_ = "WORKER_PROXY_CONTEXT_KEY";
function Ba() {
  return J_(Q_);
}
function x_(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function Ea(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Ma(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!x_(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function $_(l) {
  if (l == null || !Ma(l))
    return l;
  const e = Ba();
  if (e == null)
    return l;
  const n = new URL(l, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const o = new Blob([i.body], {
      type: Ea(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: ed,
  assign: Rl,
  check_outros: Aa,
  compute_rest_props: os,
  create_slot: no,
  detach: Kl,
  element: La,
  empty: Da,
  exclude_internal_props: td,
  get_all_dirty_from_scope: lo,
  get_slot_changes: io,
  get_spread_update: Ra,
  group_outros: Ta,
  init: nd,
  insert: Gl,
  listen: Ia,
  prevent_default: ld,
  safe_not_equal: id,
  set_attributes: Tl,
  transition_in: Gt,
  transition_out: Jt,
  update_slot_base: oo
} = window.__gradio__svelte__internal, { createEventDispatcher: od } = window.__gradio__svelte__internal;
function sd(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = no(
    s,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      l[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      l[1]
    ) },
    /*$$restProps*/
    l[6]
  ], f = {};
  for (let u = 0; u < a.length; u += 1)
    f = Rl(f, a[u]);
  return {
    c() {
      e = La("a"), r && r.c(), Tl(e, f);
    },
    m(u, c) {
      Gl(u, e, c), r && r.m(e, null), n = !0, i || (o = Ia(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(u, c) {
      r && r.p && (!n || c & /*$$scope*/
      128) && oo(
        r,
        s,
        u,
        /*$$scope*/
        u[7],
        n ? io(
          s,
          /*$$scope*/
          u[7],
          c,
          null
        ) : lo(
          /*$$scope*/
          u[7]
        ),
        null
      ), Tl(e, f = Ra(a, [
        (!n || c & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || c & /*download*/
        2) && { download: (
          /*download*/
          u[1]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        u[6]
      ]));
    },
    i(u) {
      n || (Gt(r, u), n = !0);
    },
    o(u) {
      Jt(r, u), n = !1;
    },
    d(u) {
      u && Kl(e), r && r.d(u), i = !1, o();
    }
  };
}
function ad(l) {
  let e, t, n, i;
  const o = [fd, rd], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Da();
    },
    m(a, f) {
      s[e].m(a, f), Gl(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Ta(), Jt(s[u], 1, 1, () => {
        s[u] = null;
      }), Aa(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Gt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Gt(t), i = !0);
    },
    o(a) {
      Jt(t), i = !1;
    },
    d(a) {
      a && Kl(n), s[e].d(a);
    }
  };
}
function rd(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = no(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let r = [
    /*$$restProps*/
    l[6],
    { href: (
      /*href*/
      l[0]
    ) }
  ], a = {};
  for (let f = 0; f < r.length; f += 1)
    a = Rl(a, r[f]);
  return {
    c() {
      e = La("a"), s && s.c(), Tl(e, a);
    },
    m(f, u) {
      Gl(f, e, u), s && s.m(e, null), t = !0, n || (i = Ia(e, "click", ld(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, u) {
      s && s.p && (!t || u & /*$$scope*/
      128) && oo(
        s,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? io(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : lo(
          /*$$scope*/
          f[7]
        ),
        null
      ), Tl(e, a = Ra(r, [
        u & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!t || u & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      t || (Gt(s, f), t = !0);
    },
    o(f) {
      Jt(s, f), t = !1;
    },
    d(f) {
      f && Kl(e), s && s.d(f), n = !1, i();
    }
  };
}
function fd(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = no(
    t,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && oo(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? io(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : lo(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (Gt(n, i), e = !0);
    },
    o(i) {
      Jt(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function ud(l) {
  let e, t, n, i, o;
  const s = [ad, sd], r = [];
  function a(f, u) {
    return u & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Ma(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = Da();
    },
    m(f, u) {
      r[t].m(f, u), Gl(f, i, u), o = !0;
    },
    p(f, [u]) {
      let c = t;
      t = a(f, u), t === c ? r[t].p(f, u) : (Ta(), Jt(r[c], 1, 1, () => {
        r[c] = null;
      }), Aa(), n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), Gt(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (Gt(n), o = !0);
    },
    o(f) {
      Jt(n), o = !1;
    },
    d(f) {
      f && Kl(i), r[t].d(f);
    }
  };
}
function cd(l, e, t) {
  const n = ["href", "download"];
  let i = os(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, p, w) {
    function b(g) {
      return g instanceof p ? g : new p(function(k) {
        k(g);
      });
    }
    return new (p || (p = Promise))(function(g, k) {
      function C(y) {
        try {
          z(w.next(y));
        } catch (A) {
          k(A);
        }
      }
      function v(y) {
        try {
          z(w.throw(y));
        } catch (A) {
          k(A);
        }
      }
      function z(y) {
        y.done ? g(y.value) : b(y.value).then(C, v);
      }
      z((w = w.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const u = od();
  let c = !1;
  const _ = Ba();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (c)
        return;
      if (u("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, c = !0), _.httpRequest({
        method: "GET",
        path: h,
        headers: {},
        query_string: ""
      }).then((p) => {
        if (p.status !== 200)
          throw new Error(`Failed to get file ${h} from the Wasm worker.`);
        const w = new Blob(
          [p.body],
          {
            type: Ea(p.headers, "content-type")
          }
        ), b = URL.createObjectURL(w), g = document.createElement("a");
        g.href = b, g.download = f, g.click(), URL.revokeObjectURL(b);
      }).finally(() => {
        t(2, c = !1);
      });
    });
  }
  return l.$$set = (m) => {
    e = Rl(Rl({}, e), td(m)), t(6, i = os(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, s = m.$$scope);
  }, [
    a,
    f,
    c,
    u,
    _,
    d,
    i,
    s,
    o
  ];
}
class _d extends ed {
  constructor(e) {
    super(), nd(this, e, cd, ud, id, { href: 0, download: 1 });
  }
}
var dd = Object.defineProperty, hd = (l, e, t) => e in l ? dd(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, rt = (l, e, t) => (hd(l, typeof e != "symbol" ? e + "" : e, t), t), ja = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, qn = (l, e, t) => (ja(l, e, "read from private field"), t ? t.call(l) : e.get(l)), md = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, gd = (l, e, t, n) => (ja(l, e, "write to private field"), e.set(l, t), t), zt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Ha(l, e) {
  return l.map(
    (t) => new bd({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class bd {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    rt(this, "path"), rt(this, "url"), rt(this, "orig_name"), rt(this, "size"), rt(this, "blob"), rt(this, "is_stream"), rt(this, "mime_type"), rt(this, "alt_text"), rt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Pm extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = qn(this, zt) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, s)), t = t.slice(i + 1);
        }
        gd(this, zt, t);
      },
      flush: (t) => {
        if (qn(this, zt) === "")
          return;
        const n = e.allowCR && qn(this, zt).endsWith("\r") ? qn(this, zt).slice(0, -1) : qn(this, zt);
        t.enqueue(n);
      }
    }), md(this, zt, "");
  }
}
zt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: wd,
  append: qe,
  attr: Nt,
  detach: Fa,
  element: Ut,
  init: pd,
  insert: Xa,
  noop: ss,
  safe_not_equal: vd,
  set_data: Il,
  set_style: Ci,
  space: Pi,
  text: hn,
  toggle_class: as
} = window.__gradio__svelte__internal, { onMount: kd, createEventDispatcher: yd, onDestroy: Cd } = window.__gradio__svelte__internal;
function rs(l) {
  let e, t, n, i, o = Rn(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, u = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), c;
  return {
    c() {
      e = Ut("div"), t = Ut("span"), n = Ut("div"), i = Ut("progress"), s = hn(o), a = Pi(), f = Ut("span"), c = hn(u), Ci(i, "visibility", "hidden"), Ci(i, "height", "0"), Ci(i, "width", "0"), i.value = r = Rn(
        /*file_to_display*/
        l[2]
      ), Nt(i, "max", "100"), Nt(i, "class", "svelte-cr2edf"), Nt(n, "class", "progress-bar svelte-cr2edf"), Nt(f, "class", "file-name svelte-cr2edf"), Nt(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Xa(_, e, d), qe(e, t), qe(t, n), qe(n, i), qe(i, s), qe(e, a), qe(e, f), qe(f, c);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = Rn(
        /*file_to_display*/
        _[2]
      ) + "") && Il(s, o), d & /*file_to_display*/
      4 && r !== (r = Rn(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && u !== (u = /*file_to_display*/
      _[2].orig_name + "") && Il(c, u);
    },
    d(_) {
      _ && Fa(e);
    }
  };
}
function Sd(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, u, c = (
    /*file_to_display*/
    l[2] && rs(l)
  );
  return {
    c() {
      e = Ut("div"), t = Ut("span"), n = hn("Uploading "), o = hn(i), s = Pi(), a = hn(r), f = hn("..."), u = Pi(), c && c.c(), Nt(t, "class", "uploading svelte-cr2edf"), Nt(e, "class", "wrap svelte-cr2edf"), as(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Xa(_, e, d), qe(e, t), qe(t, n), qe(t, o), qe(t, s), qe(t, a), qe(t, f), qe(e, u), c && c.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && Il(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && Il(a, r), /*file_to_display*/
      _[2] ? c ? c.p(_, d) : (c = rs(_), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d & /*progress*/
      2 && as(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: ss,
    o: ss,
    d(_) {
      _ && Fa(e), c && c.d();
    }
  };
}
function Rn(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function zd(l) {
  let e = 0;
  return l.forEach((t) => {
    e += Rn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function qd(l, e, t) {
  var n = this && this.__awaiter || function(h, p, w, b) {
    function g(k) {
      return k instanceof w ? k : new w(function(C) {
        C(k);
      });
    }
    return new (w || (w = Promise))(function(k, C) {
      function v(A) {
        try {
          y(b.next(A));
        } catch (S) {
          C(S);
        }
      }
      function z(A) {
        try {
          y(b.throw(A));
        } catch (S) {
          C(S);
        }
      }
      function y(A) {
        A.done ? k(A.value) : g(A.value).then(v, z);
      }
      y((b = b.apply(h, p || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, u, c, _ = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = yd();
  function m(h, p) {
    t(0, _ = _.map((w) => (w.orig_name === h && (w.progress += p), w)));
  }
  return kd(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const p = JSON.parse(h.data);
        f || t(1, f = !0), p.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, u = p), m(p.orig_name, p.chunk_size));
      });
    };
  })), Cd(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (h) => {
    "upload_id" in h && t(3, i = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && zd(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, c = u || _[0]);
  }, [
    _,
    f,
    c,
    i,
    o,
    s,
    r,
    u
  ];
}
class Bd extends wd {
  constructor(e) {
    super(), pd(this, e, qd, Sd, vd, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Ed,
  append: fs,
  attr: pe,
  binding_callbacks: Md,
  bubble: Dt,
  check_outros: Ya,
  create_component: Ad,
  create_slot: Na,
  destroy_component: Ld,
  detach: Jl,
  element: Zi,
  empty: Ua,
  get_all_dirty_from_scope: Oa,
  get_slot_changes: Wa,
  group_outros: Va,
  init: Dd,
  insert: Ql,
  listen: Re,
  mount_component: Rd,
  prevent_default: Rt,
  run_all: Td,
  safe_not_equal: Id,
  set_style: Pa,
  space: jd,
  stop_propagation: Tt,
  toggle_class: de,
  transition_in: Mt,
  transition_out: Qt,
  update_slot_base: Za
} = window.__gradio__svelte__internal, { createEventDispatcher: Hd, tick: Fd } = window.__gradio__svelte__internal;
function Xd(l) {
  let e, t, n, i, o, s, r, a, f, u, c;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Na(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = Zi("button"), d && d.c(), t = jd(), n = Zi("input"), pe(n, "aria-label", "file upload"), pe(n, "data-testid", "file-upload"), pe(n, "type", "file"), pe(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, pe(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), pe(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), pe(n, "class", "svelte-1s26xmt"), pe(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), pe(e, "class", "svelte-1s26xmt"), de(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), de(
        e,
        "center",
        /*center*/
        l[4]
      ), de(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), de(
        e,
        "flex",
        /*flex*/
        l[5]
      ), de(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Pa(e, "height", "100%");
    },
    m(m, h) {
      Ql(m, e, h), d && d.m(e, null), fs(e, t), fs(e, n), l[34](n), f = !0, u || (c = [
        Re(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Re(e, "drag", Tt(Rt(
          /*drag_handler*/
          l[27]
        ))),
        Re(e, "dragstart", Tt(Rt(
          /*dragstart_handler*/
          l[28]
        ))),
        Re(e, "dragend", Tt(Rt(
          /*dragend_handler*/
          l[29]
        ))),
        Re(e, "dragover", Tt(Rt(
          /*dragover_handler*/
          l[30]
        ))),
        Re(e, "dragenter", Tt(Rt(
          /*dragenter_handler*/
          l[31]
        ))),
        Re(e, "dragleave", Tt(Rt(
          /*dragleave_handler*/
          l[32]
        ))),
        Re(e, "drop", Tt(Rt(
          /*drop_handler*/
          l[33]
        ))),
        Re(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        Re(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        Re(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        Re(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], u = !0);
    },
    p(m, h) {
      d && d.p && (!f || h[0] & /*$$scope*/
      33554432) && Za(
        d,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Wa(
          _,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Oa(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || h[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      m[16] || void 0)) && pe(n, "accept", i), (!f || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = o), (!f || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "directory" || void 0)) && pe(n, "webkitdirectory", s), (!f || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && pe(n, "mozdirectory", r), (!f || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && pe(e, "tabindex", a), (!f || h[0] & /*hidden*/
      512) && de(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || h[0] & /*center*/
      16) && de(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || h[0] & /*boundedheight*/
      8) && de(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || h[0] & /*flex*/
      32) && de(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || h[0] & /*disable_click*/
      128) && de(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Mt(d, m), f = !0);
    },
    o(m) {
      Qt(d, m), f = !1;
    },
    d(m) {
      m && Jl(e), d && d.d(m), l[34](null), u = !1, Td(c);
    }
  };
}
function Yd(l) {
  let e, t, n = !/*hidden*/
  l[9] && us(l);
  return {
    c() {
      n && n.c(), e = Ua();
    },
    m(i, o) {
      n && n.m(i, o), Ql(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Va(), Qt(n, 1, 1, () => {
        n = null;
      }), Ya()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && Mt(n, 1)) : (n = us(i), n.c(), Mt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Mt(n), t = !0);
    },
    o(i) {
      Qt(n), t = !1;
    },
    d(i) {
      i && Jl(e), n && n.d(i);
    }
  };
}
function Nd(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = Na(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = Zi("button"), r && r.c(), pe(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), pe(e, "class", "svelte-1s26xmt"), de(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), de(
        e,
        "center",
        /*center*/
        l[4]
      ), de(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), de(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Pa(e, "height", "100%");
    },
    m(a, f) {
      Ql(a, e, f), r && r.m(e, null), n = !0, i || (o = Re(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Za(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? Wa(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Oa(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && pe(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && de(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && de(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && de(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && de(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Mt(r, a), n = !0);
    },
    o(a) {
      Qt(r, a), n = !1;
    },
    d(a) {
      a && Jl(e), r && r.d(a), i = !1, o();
    }
  };
}
function us(l) {
  let e, t;
  return e = new Bd({
    props: {
      root: (
        /*root*/
        l[8]
      ),
      upload_id: (
        /*upload_id*/
        l[14]
      ),
      files: (
        /*file_data*/
        l[15]
      ),
      stream_handler: (
        /*stream_handler*/
        l[11]
      )
    }
  }), {
    c() {
      Ad(e.$$.fragment);
    },
    m(n, i) {
      Rd(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), i[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), i[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), i[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (Mt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ld(e, n);
    }
  };
}
function Ud(l) {
  let e, t, n, i;
  const o = [Nd, Yd, Xd], s = [];
  function r(a, f) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Ua();
    },
    m(a, f) {
      s[e].m(a, f), Ql(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Va(), Qt(s[u], 1, 1, () => {
        s[u] = null;
      }), Ya(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Mt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Mt(t), i = !0);
    },
    o(a) {
      Qt(t), i = !1;
    },
    d(a) {
      a && Jl(n), s[e].d(a);
    }
  };
}
function Od(l, e, t) {
  if (!l || l === "*" || l === "file/*" || Array.isArray(l) && l.some((i) => i === "*" || i === "file/*"))
    return !0;
  let n;
  if (typeof l == "string")
    n = l.split(",").map((i) => i.trim());
  else if (Array.isArray(l))
    n = l;
  else
    return !1;
  return n.includes(e) || n.some((i) => {
    const [o] = i.split("/").map((s) => s.trim());
    return i.endsWith("/*") && t.startsWith(o + "/");
  });
}
function Wd(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(M, F, G, q) {
    function ce(ge) {
      return ge instanceof G ? ge : new G(function(Ae) {
        Ae(ge);
      });
    }
    return new (G || (G = Promise))(function(ge, Ae) {
      function ot(Ue) {
        try {
          Fe(q.next(Ue));
        } catch (Lt) {
          Ae(Lt);
        }
      }
      function Le(Ue) {
        try {
          Fe(q.throw(Ue));
        } catch (Lt) {
          Ae(Lt);
        }
      }
      function Fe(Ue) {
        Ue.done ? ge(Ue.value) : ce(Ue.value).then(ot, Le);
      }
      Fe((q = q.apply(M, F || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: p = !1 } = e, { hidden_upload: w = null } = e, { show_progress: b = !0 } = e, { max_file_size: g = null } = e, { upload: k } = e, { stream_handler: C } = e, v, z, y;
  const A = Hd(), S = ["image", "video", "audio", "text", "file"], R = (M) => M.startsWith(".") || M.endsWith("/*") ? M : S.includes(M) ? M + "/*" : "." + M;
  function L() {
    t(20, r = !r);
  }
  function N() {
    navigator.clipboard.read().then((M) => o(this, void 0, void 0, function* () {
      for (let F = 0; F < M.length; F++) {
        const G = M[F].types.find((q) => q.startsWith("image/"));
        if (G) {
          M[F].getType(G).then((q) => o(this, void 0, void 0, function* () {
            const ce = new File([q], `clipboard.${G.replace("image/", "")}`);
            yield V([ce]);
          }));
          break;
        }
      }
    }));
  }
  function J() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function x(M) {
    return o(this, void 0, void 0, function* () {
      yield Fd(), t(14, v = Math.random().toString(36).substring(2, 15)), t(1, p = !0);
      try {
        const F = yield k(M, d, v, g ?? 1 / 0);
        return A("load", c === "single" ? F == null ? void 0 : F[0] : F), t(1, p = !1), F || [];
      } catch (F) {
        return A("error", F.message), t(1, p = !1), [];
      }
    });
  }
  function V(M) {
    return o(this, void 0, void 0, function* () {
      if (!M.length)
        return;
      let F = M.map((G) => new File([G], G instanceof File ? G.name : "file", { type: G.type }));
      return t(15, z = yield Ha(F)), yield x(z);
    });
  }
  function U(M) {
    return o(this, void 0, void 0, function* () {
      const F = M.target;
      if (F.files)
        if (h != "blob")
          yield V(Array.from(F.files));
        else {
          if (c === "single") {
            A("load", F.files[0]);
            return;
          }
          A("load", F.files);
        }
    });
  }
  function T(M) {
    return o(this, void 0, void 0, function* () {
      var F;
      if (t(20, r = !1), !(!((F = M.dataTransfer) === null || F === void 0) && F.files)) return;
      const G = Array.from(M.dataTransfer.files).filter((q) => {
        const ce = "." + q.name.split(".").pop();
        return ce && Od(y, ce, q.type) || (ce && Array.isArray(s) ? s.includes(ce) : ce === s) ? !0 : (A("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield V(G);
    });
  }
  function K(M) {
    Dt.call(this, l, M);
  }
  function D(M) {
    Dt.call(this, l, M);
  }
  function O(M) {
    Dt.call(this, l, M);
  }
  function le(M) {
    Dt.call(this, l, M);
  }
  function ae(M) {
    Dt.call(this, l, M);
  }
  function ue(M) {
    Dt.call(this, l, M);
  }
  function I(M) {
    Dt.call(this, l, M);
  }
  function Me(M) {
    Md[M ? "unshift" : "push"](() => {
      w = M, t(2, w);
    });
  }
  return l.$$set = (M) => {
    "filetype" in M && t(0, s = M.filetype), "dragging" in M && t(20, r = M.dragging), "boundedheight" in M && t(3, a = M.boundedheight), "center" in M && t(4, f = M.center), "flex" in M && t(5, u = M.flex), "file_count" in M && t(6, c = M.file_count), "disable_click" in M && t(7, _ = M.disable_click), "root" in M && t(8, d = M.root), "hidden" in M && t(9, m = M.hidden), "format" in M && t(21, h = M.format), "uploading" in M && t(1, p = M.uploading), "hidden_upload" in M && t(2, w = M.hidden_upload), "show_progress" in M && t(10, b = M.show_progress), "max_file_size" in M && t(22, g = M.max_file_size), "upload" in M && t(23, k = M.upload), "stream_handler" in M && t(11, C = M.stream_handler), "$$scope" in M && t(25, i = M.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, y = null) : typeof s == "string" ? t(16, y = R(s)) : (t(0, s = s.map(R)), t(16, y = s.join(", "))));
  }, [
    s,
    p,
    w,
    a,
    f,
    u,
    c,
    _,
    d,
    m,
    b,
    C,
    N,
    J,
    v,
    z,
    y,
    L,
    U,
    T,
    r,
    h,
    g,
    k,
    V,
    i,
    n,
    K,
    D,
    O,
    le,
    ae,
    ue,
    I,
    Me
  ];
}
class Vd extends Ed {
  constructor(e) {
    super(), Dd(
      this,
      e,
      Wd,
      Ud,
      Id,
      {
        filetype: 0,
        dragging: 20,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 21,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 22,
        upload: 23,
        stream_handler: 11,
        paste_clipboard: 12,
        open_file_upload: 13,
        load_files: 24
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[12];
  }
  get open_file_upload() {
    return this.$$.ctx[13];
  }
  get load_files() {
    return this.$$.ctx[24];
  }
}
const {
  SvelteComponent: Pd,
  append: _l,
  attr: Si,
  create_component: Zd,
  destroy_component: Kd,
  detach: Gd,
  element: zi,
  init: Jd,
  insert: Qd,
  listen: xd,
  mount_component: $d,
  noop: e1,
  safe_not_equal: t1,
  set_style: n1,
  space: l1,
  text: i1,
  transition_in: o1,
  transition_out: s1
} = window.__gradio__svelte__internal, { createEventDispatcher: a1 } = window.__gradio__svelte__internal;
function r1(l) {
  let e, t, n, i, o, s = "Click to Access Webcam", r, a, f, u;
  return i = new ca({}), {
    c() {
      e = zi("button"), t = zi("div"), n = zi("span"), Zd(i.$$.fragment), o = l1(), r = i1(s), Si(n, "class", "icon-wrap svelte-fjcd9c"), Si(t, "class", "wrap svelte-fjcd9c"), Si(e, "class", "svelte-fjcd9c"), n1(e, "height", "100%");
    },
    m(c, _) {
      Qd(c, e, _), _l(e, t), _l(t, n), $d(i, n, null), _l(t, o), _l(t, r), a = !0, f || (u = xd(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: e1,
    i(c) {
      a || (o1(i.$$.fragment, c), a = !0);
    },
    o(c) {
      s1(i.$$.fragment, c), a = !1;
    },
    d(c) {
      c && Gd(e), Kd(i), f = !1, u();
    }
  };
}
function f1(l) {
  const e = a1();
  return [e, () => e("click")];
}
class u1 extends Pd {
  constructor(e) {
    super(), Jd(this, e, f1, r1, t1, {});
  }
}
function c1() {
  return navigator.mediaDevices.enumerateDevices();
}
function _1(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function cs(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((o) => (_1(o, e), o));
}
function d1(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: h1,
  action_destroyer: m1,
  add_render_callback: g1,
  append: _t,
  attr: se,
  binding_callbacks: b1,
  check_outros: Nn,
  create_component: kn,
  create_in_transition: w1,
  destroy_component: yn,
  destroy_each: p1,
  detach: Be,
  element: He,
  empty: so,
  ensure_array_like: _s,
  group_outros: Un,
  init: v1,
  insert: Ee,
  listen: jl,
  mount_component: Cn,
  noop: ao,
  run_all: k1,
  safe_not_equal: y1,
  set_data: Ka,
  set_input_value: Ki,
  space: Zn,
  stop_propagation: C1,
  text: Ga,
  toggle_class: dl,
  transition_in: he,
  transition_out: ve
} = window.__gradio__svelte__internal, { createEventDispatcher: S1, onMount: z1 } = window.__gradio__svelte__internal;
function ds(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function q1(l) {
  let e, t, n, i, o, s, r, a, f, u, c;
  const _ = [M1, E1], d = [];
  function m(w, b) {
    return (
      /*mode*/
      w[1] === "video" || /*streaming*/
      w[0] ? 0 : 1
    );
  }
  n = m(l), i = d[n] = _[n](l);
  let h = !/*recording*/
  l[8] && hs(l), p = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && ms(l)
  );
  return {
    c() {
      e = He("div"), t = He("button"), i.c(), s = Zn(), h && h.c(), r = Zn(), p && p.c(), a = so(), se(t, "aria-label", o = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), se(t, "class", "svelte-8hqvb6"), se(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(w, b) {
      Ee(w, e, b), _t(e, t), d[n].m(t, null), _t(e, s), h && h.m(e, null), Ee(w, r, b), p && p.m(w, b), Ee(w, a, b), f = !0, u || (c = jl(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), u = !0);
    },
    p(w, b) {
      let g = n;
      n = m(w), n === g ? d[n].p(w, b) : (Un(), ve(d[g], 1, 1, () => {
        d[g] = null;
      }), Nn(), i = d[n], i ? i.p(w, b) : (i = d[n] = _[n](w), i.c()), he(i, 1), i.m(t, null)), (!f || b[0] & /*mode*/
      2 && o !== (o = /*mode*/
      w[1] === "image" ? "capture photo" : "start recording")) && se(t, "aria-label", o), /*recording*/
      w[8] ? h && (Un(), ve(h, 1, 1, () => {
        h = null;
      }), Nn()) : h ? (h.p(w, b), b[0] & /*recording*/
      256 && he(h, 1)) : (h = hs(w), h.c(), he(h, 1), h.m(e, null)), /*options_open*/
      w[10] && /*selected_device*/
      w[7] ? p ? (p.p(w, b), b[0] & /*options_open, selected_device*/
      1152 && he(p, 1)) : (p = ms(w), p.c(), he(p, 1), p.m(a.parentNode, a)) : p && (Un(), ve(p, 1, 1, () => {
        p = null;
      }), Nn());
    },
    i(w) {
      f || (he(i), he(h), he(p), f = !0);
    },
    o(w) {
      ve(i), ve(h), ve(p), f = !1;
    },
    d(w) {
      w && (Be(e), Be(r), Be(a)), d[n].d(), h && h.d(), p && p.d(w), u = !1, c();
    }
  };
}
function B1(l) {
  let e, t, n, i;
  return t = new u1({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = He("div"), kn(t.$$.fragment), se(e, "title", "grant webcam access");
    },
    m(o, s) {
      Ee(o, e, s), Cn(t, e, null), i = !0;
    },
    p: ao,
    i(o) {
      i || (he(t.$$.fragment, o), o && (n || g1(() => {
        n = w1(e, m_, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(o) {
      ve(t.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Be(e), yn(t);
    }
  };
}
function E1(l) {
  let e, t, n;
  return t = new uu({}), {
    c() {
      e = He("div"), kn(t.$$.fragment), se(e, "class", "icon svelte-8hqvb6"), se(e, "title", "capture photo");
    },
    m(i, o) {
      Ee(i, e, o), Cn(t, e, null), n = !0;
    },
    p: ao,
    i(i) {
      n || (he(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ve(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Be(e), yn(t);
    }
  };
}
function M1(l) {
  let e, t, n, i;
  const o = [L1, A1], s = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = so();
    },
    m(a, f) {
      s[e].m(a, f), Ee(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e !== u && (Un(), ve(s[u], 1, 1, () => {
        s[u] = null;
      }), Nn(), t = s[e], t || (t = s[e] = o[e](a), t.c()), he(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (he(t), i = !0);
    },
    o(a) {
      ve(t), i = !1;
    },
    d(a) {
      a && Be(n), s[e].d(a);
    }
  };
}
function A1(l) {
  let e, t, n;
  return t = new wu({}), {
    c() {
      e = He("div"), kn(t.$$.fragment), se(e, "class", "icon red svelte-8hqvb6"), se(e, "title", "start recording");
    },
    m(i, o) {
      Ee(i, e, o), Cn(t, e, null), n = !0;
    },
    i(i) {
      n || (he(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ve(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Be(e), yn(t);
    }
  };
}
function L1(l) {
  let e, t, n;
  return t = new kc({}), {
    c() {
      e = He("div"), kn(t.$$.fragment), se(e, "class", "icon red svelte-8hqvb6"), se(e, "title", "stop recording");
    },
    m(i, o) {
      Ee(i, e, o), Cn(t, e, null), n = !0;
    },
    i(i) {
      n || (he(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ve(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Be(e), yn(t);
    }
  };
}
function hs(l) {
  let e, t, n, i, o;
  return t = new to({}), {
    c() {
      e = He("button"), kn(t.$$.fragment), se(e, "class", "icon svelte-8hqvb6"), se(e, "aria-label", "select input source");
    },
    m(s, r) {
      Ee(s, e, r), Cn(t, e, null), n = !0, i || (o = jl(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: ao,
    i(s) {
      n || (he(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ve(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Be(e), yn(t), i = !1, o();
    }
  };
}
function ms(l) {
  let e, t, n, i, o, s, r;
  n = new to({});
  function a(c, _) {
    return (
      /*available_video_devices*/
      c[6].length === 0 ? R1 : D1
    );
  }
  let f = a(l), u = f(l);
  return {
    c() {
      e = He("select"), t = He("button"), kn(n.$$.fragment), i = Zn(), u.c(), se(t, "class", "inset-icon svelte-8hqvb6"), se(e, "class", "select-wrap svelte-8hqvb6"), se(e, "aria-label", "select source");
    },
    m(c, _) {
      Ee(c, e, _), _t(e, t), Cn(n, t, null), _t(t, i), u.m(e, null), o = !0, s || (r = [
        jl(t, "click", C1(
          /*click_handler_2*/
          l[22]
        )),
        m1(ro.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        jl(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], s = !0);
    },
    p(c, _) {
      f === (f = a(c)) && u ? u.p(c, _) : (u.d(1), u = f(c), u && (u.c(), u.m(e, null)));
    },
    i(c) {
      o || (he(n.$$.fragment, c), o = !0);
    },
    o(c) {
      ve(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && Be(e), yn(n), u.d(), s = !1, k1(r);
    }
  };
}
function D1(l) {
  let e, t = _s(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = gs(ds(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = so();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Ee(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = _s(
          /*available_video_devices*/
          i[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ds(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = gs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Be(e), p1(n, i);
    }
  };
}
function R1(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = He("option"), n = Ga(t), e.__value = "", Ki(e, e.__value), se(e, "class", "svelte-8hqvb6");
    },
    m(i, o) {
      Ee(i, e, o), _t(e, n);
    },
    p(i, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Ka(n, t);
    },
    d(i) {
      i && Be(e);
    }
  };
}
function gs(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, o, s;
  return {
    c() {
      e = He("option"), n = Ga(t), i = Zn(), e.__value = o = /*device*/
      l[32].deviceId, Ki(e, e.__value), e.selected = s = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, se(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ee(r, e, a), _t(e, n), _t(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Ka(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Ki(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Be(e);
    }
  };
}
function T1(l) {
  let e, t, n, i, o, s;
  const r = [B1, q1], a = [];
  function f(u, c) {
    return (
      /*webcam_accessed*/
      u[9] ? 1 : 0
    );
  }
  return i = f(l), o = a[i] = r[i](l), {
    c() {
      e = He("div"), t = He("video"), n = Zn(), o.c(), se(t, "class", "svelte-8hqvb6"), dl(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), dl(t, "hide", !/*webcam_accessed*/
      l[9]), se(e, "class", "wrap svelte-8hqvb6");
    },
    m(u, c) {
      Ee(u, e, c), _t(e, t), l[19](t), _t(e, n), a[i].m(e, null), s = !0;
    },
    p(u, c) {
      (!s || c[0] & /*mirror_webcam*/
      4) && dl(
        t,
        "flip",
        /*mirror_webcam*/
        u[2]
      ), (!s || c[0] & /*webcam_accessed*/
      512) && dl(t, "hide", !/*webcam_accessed*/
      u[9]);
      let _ = i;
      i = f(u), i === _ ? a[i].p(u, c) : (Un(), ve(a[_], 1, 1, () => {
        a[_] = null;
      }), Nn(), o = a[i], o ? o.p(u, c) : (o = a[i] = r[i](u), o.c()), he(o, 1), o.m(e, null));
    },
    i(u) {
      s || (he(o), s = !0);
    },
    o(u) {
      ve(o), s = !1;
    },
    d(u) {
      u && Be(e), l[19](null), a[i].d();
    }
  };
}
function ro(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function I1(l, e, t) {
  var n = this && this.__awaiter || function(T, K, D, O) {
    function le(ae) {
      return ae instanceof D ? ae : new D(function(ue) {
        ue(ae);
      });
    }
    return new (D || (D = Promise))(function(ae, ue) {
      function I(F) {
        try {
          M(O.next(F));
        } catch (G) {
          ue(G);
        }
      }
      function Me(F) {
        try {
          M(O.throw(F));
        } catch (G) {
          ue(G);
        }
      }
      function M(F) {
        F.done ? ae(F.value) : le(F.value).then(I, Me);
      }
      M((O = O.apply(T, K || [])).next());
    });
  };
  let i, o = [], s = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: u = "" } = e, { mode: c = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const p = S1();
  z1(() => r = document.createElement("canvas"));
  const w = (T) => n(void 0, void 0, void 0, function* () {
    const D = T.target.value;
    yield cs(d, i, D).then((O) => n(void 0, void 0, void 0, function* () {
      v = O, t(7, s = o.find((le) => le.deviceId === D) || null), t(10, L = !1);
    }));
  });
  function b() {
    return n(this, void 0, void 0, function* () {
      try {
        cs(d, i).then((T) => n(this, void 0, void 0, function* () {
          t(9, S = !0), t(6, o = yield c1()), v = T;
        })).then(() => d1(o)).then((T) => {
          t(6, o = T);
          const K = v.getTracks().map((D) => {
            var O;
            return (O = D.getSettings()) === null || O === void 0 ? void 0 : O.deviceId;
          })[0];
          t(7, s = K && T.find((D) => D.deviceId === K) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && p("error", m("image.no_webcam_support"));
      } catch (T) {
        if (T instanceof DOMException && T.name == "NotAllowedError")
          p("error", m("image.allow_webcam_access"));
        else
          throw T;
      }
    });
  }
  function g() {
    var T = r.getContext("2d");
    (!a || a && k) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, T.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (T.scale(-1, 1), T.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (K) => {
        p(a ? "stream" : "capture", K);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, C = [], v, z, y;
  function A() {
    if (k) {
      y.stop();
      let T = new Blob(C, { type: z }), K = new FileReader();
      K.onload = function(D) {
        return n(this, void 0, void 0, function* () {
          var O;
          if (D.target) {
            let le = new File([T], "sample." + z.substring(6));
            const ae = yield Ha([le]);
            let ue = ((O = yield h(ae, u)) === null || O === void 0 ? void 0 : O.filter(Boolean))[0];
            p("capture", ue), p("stop_recording");
          }
        });
      }, K.readAsDataURL(T);
    } else {
      p("start_recording"), C = [];
      let T = ["video/webm", "video/mp4"];
      for (let K of T)
        if (MediaRecorder.isTypeSupported(K)) {
          z = K;
          break;
        }
      if (z === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      y = new MediaRecorder(v, { mimeType: z }), y.addEventListener("dataavailable", function(K) {
        C.push(K.data);
      }), y.start(200);
    }
    t(8, k = !k);
  }
  let S = !1;
  function R() {
    c === "image" && a && t(8, k = !k), c === "image" ? g() : A(), !k && v && (v.getTracks().forEach((T) => T.stop()), t(5, i.srcObject = null, i), t(9, S = !1));
  }
  a && c === "image" && window.setInterval(
    () => {
      i && !f && g();
    },
    500
  );
  let L = !1;
  function N(T) {
    T.preventDefault(), T.stopPropagation(), t(10, L = !1);
  }
  function J(T) {
    b1[T ? "unshift" : "push"](() => {
      i = T, t(5, i);
    });
  }
  const x = async () => b(), V = () => t(10, L = !0), U = () => t(10, L = !1);
  return l.$$set = (T) => {
    "streaming" in T && t(0, a = T.streaming), "pending" in T && t(15, f = T.pending), "root" in T && t(16, u = T.root), "mode" in T && t(1, c = T.mode), "mirror_webcam" in T && t(2, _ = T.mirror_webcam), "include_audio" in T && t(17, d = T.include_audio), "i18n" in T && t(3, m = T.i18n), "upload" in T && t(18, h = T.upload);
  }, [
    a,
    c,
    _,
    m,
    ro,
    i,
    o,
    s,
    k,
    S,
    L,
    w,
    b,
    R,
    N,
    f,
    u,
    d,
    h,
    J,
    x,
    V,
    U
  ];
}
class j1 extends h1 {
  constructor(e) {
    super(), v1(
      this,
      e,
      I1,
      T1,
      y1,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        upload: 18,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return ro;
  }
}
const {
  SvelteComponent: H1,
  append: yt,
  attr: j,
  detach: F1,
  init: X1,
  insert: Y1,
  noop: qi,
  safe_not_equal: N1,
  set_style: Ct,
  svg_element: ft
} = window.__gradio__svelte__internal;
function U1(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = ft("svg"), t = ft("rect"), n = ft("rect"), i = ft("rect"), o = ft("rect"), s = ft("line"), r = ft("line"), a = ft("line"), f = ft("line"), j(t, "x", "2"), j(t, "y", "2"), j(t, "width", "5"), j(t, "height", "5"), j(t, "rx", "1"), j(t, "ry", "1"), j(t, "stroke-width", "2"), j(t, "fill", "none"), j(n, "x", "17"), j(n, "y", "2"), j(n, "width", "5"), j(n, "height", "5"), j(n, "rx", "1"), j(n, "ry", "1"), j(n, "stroke-width", "2"), j(n, "fill", "none"), j(i, "x", "2"), j(i, "y", "17"), j(i, "width", "5"), j(i, "height", "5"), j(i, "rx", "1"), j(i, "ry", "1"), j(i, "stroke-width", "2"), j(i, "fill", "none"), j(o, "x", "17"), j(o, "y", "17"), j(o, "width", "5"), j(o, "height", "5"), j(o, "rx", "1"), j(o, "ry", "1"), j(o, "stroke-width", "2"), j(o, "fill", "none"), j(s, "x1", "7.5"), j(s, "y1", "4.5"), j(s, "x2", "16"), j(s, "y2", "4.5"), Ct(s, "stroke-width", "2px"), j(r, "x1", "7.5"), j(r, "y1", "19.5"), j(r, "x2", "16"), j(r, "y2", "19.5"), Ct(r, "stroke-width", "2px"), j(a, "x1", "4.5"), j(a, "y1", "8"), j(a, "x2", "4.5"), j(a, "y2", "16"), Ct(a, "stroke-width", "2px"), j(f, "x1", "19.5"), j(f, "y1", "8"), j(f, "x2", "19.5"), j(f, "y2", "16"), Ct(f, "stroke-width", "2px"), j(e, "width", "100%"), j(e, "height", "100%"), j(e, "viewBox", "0 0 24 24"), j(e, "version", "1.1"), j(e, "xmlns", "http://www.w3.org/2000/svg"), j(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), j(e, "xml:space", "preserve"), j(e, "stroke", "currentColor"), Ct(e, "fill-rule", "evenodd"), Ct(e, "clip-rule", "evenodd"), Ct(e, "stroke-linecap", "round"), Ct(e, "stroke-linejoin", "round");
    },
    m(u, c) {
      Y1(u, e, c), yt(e, t), yt(e, n), yt(e, i), yt(e, o), yt(e, s), yt(e, r), yt(e, a), yt(e, f);
    },
    p: qi,
    i: qi,
    o: qi,
    d(u) {
      u && F1(e);
    }
  };
}
class O1 extends H1 {
  constructor(e) {
    super(), X1(this, e, null, U1, N1, {});
  }
}
const {
  SvelteComponent: W1,
  append: V1,
  attr: Ze,
  detach: P1,
  init: Z1,
  insert: K1,
  noop: Bi,
  safe_not_equal: G1,
  set_style: hl,
  svg_element: bs
} = window.__gradio__svelte__internal;
function J1(l) {
  let e, t;
  return {
    c() {
      e = bs("svg"), t = bs("path"), Ze(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Ze(t, "fill", "none"), Ze(t, "stroke-width", "2"), Ze(e, "width", "100%"), Ze(e, "height", "100%"), Ze(e, "viewBox", "0 0 24 24"), Ze(e, "version", "1.1"), Ze(e, "xmlns", "http://www.w3.org/2000/svg"), Ze(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ze(e, "xml:space", "preserve"), Ze(e, "stroke", "currentColor"), hl(e, "fill-rule", "evenodd"), hl(e, "clip-rule", "evenodd"), hl(e, "stroke-linecap", "round"), hl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      K1(n, e, i), V1(e, t);
    },
    p: Bi,
    i: Bi,
    o: Bi,
    d(n) {
      n && P1(e);
    }
  };
}
class Q1 extends W1 {
  constructor(e) {
    super(), Z1(this, e, null, J1, G1, {});
  }
}
const {
  SvelteComponent: x1,
  append: $1,
  attr: Ke,
  detach: e0,
  init: t0,
  insert: n0,
  noop: Ei,
  safe_not_equal: l0,
  set_style: ml,
  svg_element: ws
} = window.__gradio__svelte__internal;
function i0(l) {
  let e, t;
  return {
    c() {
      e = ws("svg"), t = ws("path"), Ke(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Ke(t, "fill", "none"), Ke(t, "stroke-width", "2"), Ke(e, "width", "100%"), Ke(e, "height", "100%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "version", "1.1"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ke(e, "xml:space", "preserve"), Ke(e, "stroke", "currentColor"), ml(e, "fill-rule", "evenodd"), ml(e, "clip-rule", "evenodd"), ml(e, "stroke-linecap", "round"), ml(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      n0(n, e, i), $1(e, t);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(n) {
      n && e0(e);
    }
  };
}
class o0 extends x1 {
  constructor(e) {
    super(), t0(this, e, null, i0, l0, {});
  }
}
const {
  SvelteComponent: s0,
  append: ps,
  attr: Mi,
  bubble: vs,
  create_component: a0,
  destroy_component: r0,
  detach: Ja,
  element: ks,
  init: f0,
  insert: Qa,
  listen: Ai,
  mount_component: u0,
  run_all: c0,
  safe_not_equal: _0,
  set_data: d0,
  set_input_value: ys,
  space: h0,
  text: m0,
  transition_in: g0,
  transition_out: b0
} = window.__gradio__svelte__internal, { createEventDispatcher: w0, afterUpdate: p0 } = window.__gradio__svelte__internal;
function v0(l) {
  let e;
  return {
    c() {
      e = m0(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Qa(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && d0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Ja(e);
    }
  };
}
function k0(l) {
  let e, t, n, i, o, s, r;
  return t = new ia({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [v0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = ks("label"), a0(t.$$.fragment), n = h0(), i = ks("input"), Mi(i, "type", "color"), i.disabled = /*disabled*/
      l[3], Mi(i, "class", "svelte-16l8u73"), Mi(e, "class", "block");
    },
    m(a, f) {
      Qa(a, e, f), u0(t, e, null), ps(e, n), ps(e, i), ys(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        Ai(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        Ai(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        Ai(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], s = !0);
    },
    p(a, [f]) {
      const u = {};
      f & /*show_label*/
      16 && (u.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (u.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (u.$$scope = { dirty: f, ctx: a }), t.$set(u), (!o || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && ys(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (g0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      b0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Ja(e), r0(t), s = !1, c0(r);
    }
  };
}
function y0(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = w0();
  function u() {
    f("change", n), i || f("input");
  }
  p0(() => {
    t(5, i = !1);
  });
  function c(m) {
    vs.call(this, l, m);
  }
  function _(m) {
    vs.call(this, l, m);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, i = m.value_is_output), "label" in m && t(1, o = m.label), "info" in m && t(2, s = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && u();
  }, [
    n,
    o,
    s,
    r,
    a,
    i,
    c,
    _,
    d
  ];
}
class C0 extends s0 {
  constructor(e) {
    super(), f0(this, e, y0, k0, _0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
const {
  SvelteComponent: S0,
  append: xa,
  attr: te,
  bubble: z0,
  check_outros: q0,
  create_slot: $a,
  detach: el,
  element: xl,
  empty: B0,
  get_all_dirty_from_scope: er,
  get_slot_changes: tr,
  group_outros: E0,
  init: M0,
  insert: tl,
  listen: A0,
  safe_not_equal: L0,
  set_style: ze,
  space: nr,
  src_url_equal: Hl,
  toggle_class: mn,
  transition_in: Fl,
  transition_out: Xl,
  update_slot_base: lr
} = window.__gradio__svelte__internal;
function D0(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && Cs(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = $a(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = xl("button"), r && r.c(), t = nr(), f && f.c(), te(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), te(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], mn(e, "hidden", !/*visible*/
      l[2]), ze(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), ze(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), ze(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(u, c) {
      tl(u, e, c), r && r.m(e, null), xa(e, t), f && f.m(e, null), i = !0, o || (s = A0(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? r ? r.p(u, c) : (r = Cs(u), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || c & /*$$scope*/
      2048) && lr(
        f,
        a,
        u,
        /*$$scope*/
        u[11],
        i ? tr(
          a,
          /*$$scope*/
          u[11],
          c,
          null
        ) : er(
          /*$$scope*/
          u[11]
        ),
        null
      ), (!i || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      u[4] + " " + /*variant*/
      u[3] + " " + /*elem_classes*/
      u[1].join(" ") + " svelte-8huxfn")) && te(e, "class", n), (!i || c & /*elem_id*/
      1) && te(
        e,
        "id",
        /*elem_id*/
        u[0]
      ), (!i || c & /*disabled*/
      256) && (e.disabled = /*disabled*/
      u[8]), (!i || c & /*size, variant, elem_classes, visible*/
      30) && mn(e, "hidden", !/*visible*/
      u[2]), c & /*scale*/
      512 && ze(
        e,
        "flex-grow",
        /*scale*/
        u[9]
      ), c & /*scale*/
      512 && ze(
        e,
        "width",
        /*scale*/
        u[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && ze(e, "min-width", typeof /*min_width*/
      u[10] == "number" ? `calc(min(${/*min_width*/
      u[10]}px, 100%))` : null);
    },
    i(u) {
      i || (Fl(f, u), i = !0);
    },
    o(u) {
      Xl(f, u), i = !1;
    },
    d(u) {
      u && el(e), r && r.d(), f && f.d(u), o = !1, s();
    }
  };
}
function R0(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && Ss(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = $a(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = xl("a"), o && o.c(), t = nr(), r && r.c(), te(
        e,
        "href",
        /*link*/
        l[6]
      ), te(e, "rel", "noopener noreferrer"), te(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), te(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), te(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), mn(e, "hidden", !/*visible*/
      l[2]), mn(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), ze(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), ze(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), ze(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), ze(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      tl(a, e, f), o && o.m(e, null), xa(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = Ss(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && lr(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? tr(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : er(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && te(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && te(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && te(e, "class", n), (!i || f & /*elem_id*/
      1) && te(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && mn(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && mn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && ze(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && ze(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && ze(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && ze(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (Fl(r, a), i = !0);
    },
    o(a) {
      Xl(r, a), i = !1;
    },
    d(a) {
      a && el(e), o && o.d(), r && r.d(a);
    }
  };
}
function Cs(l) {
  let e, t, n;
  return {
    c() {
      e = xl("img"), te(e, "class", "button-icon svelte-8huxfn"), Hl(e.src, t = /*icon*/
      l[7].url) || te(e, "src", t), te(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      tl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !Hl(e.src, t = /*icon*/
      i[7].url) && te(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && te(e, "alt", n);
    },
    d(i) {
      i && el(e);
    }
  };
}
function Ss(l) {
  let e, t, n;
  return {
    c() {
      e = xl("img"), te(e, "class", "button-icon svelte-8huxfn"), Hl(e.src, t = /*icon*/
      l[7].url) || te(e, "src", t), te(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      tl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !Hl(e.src, t = /*icon*/
      i[7].url) && te(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && te(e, "alt", n);
    },
    d(i) {
      i && el(e);
    }
  };
}
function T0(l) {
  let e, t, n, i;
  const o = [R0, D0], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = B0();
    },
    m(a, f) {
      s[e].m(a, f), tl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (E0(), Xl(s[u], 1, 1, () => {
        s[u] = null;
      }), q0(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Fl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Fl(t), i = !0);
    },
    o(a) {
      Xl(t), i = !1;
    },
    d(a) {
      a && el(n), s[e].d(a);
    }
  };
}
function I0(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: u = null } = e, { link: c = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function p(w) {
    z0.call(this, l, w);
  }
  return l.$$set = (w) => {
    "elem_id" in w && t(0, o = w.elem_id), "elem_classes" in w && t(1, s = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, a = w.variant), "size" in w && t(4, f = w.size), "value" in w && t(5, u = w.value), "link" in w && t(6, c = w.link), "icon" in w && t(7, _ = w.icon), "disabled" in w && t(8, d = w.disabled), "scale" in w && t(9, m = w.scale), "min_width" in w && t(10, h = w.min_width), "$$scope" in w && t(11, i = w.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    m,
    h,
    i,
    n,
    p
  ];
}
class Gi extends S0 {
  constructor(e) {
    super(), M0(this, e, I0, T0, L0, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10
    });
  }
}
const {
  SvelteComponent: j0,
  add_render_callback: ir,
  append: gl,
  attr: Ie,
  binding_callbacks: zs,
  check_outros: H0,
  create_bidirectional_transition: qs,
  destroy_each: F0,
  detach: On,
  element: Yl,
  empty: X0,
  ensure_array_like: Bs,
  group_outros: Y0,
  init: N0,
  insert: Wn,
  listen: Ji,
  prevent_default: U0,
  run_all: O0,
  safe_not_equal: W0,
  set_data: V0,
  set_style: rn,
  space: Qi,
  text: P0,
  toggle_class: $e,
  transition_in: Li,
  transition_out: Es
} = window.__gradio__svelte__internal, { createEventDispatcher: Z0 } = window.__gradio__svelte__internal;
function Ms(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function As(l) {
  let e, t, n, i, o, s = Bs(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Ls(Ms(l, s, a));
  return {
    c() {
      e = Yl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ie(e, "class", "options svelte-yuohum"), Ie(e, "role", "listbox"), rn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), rn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), rn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      Wn(a, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      l[22](e), n = !0, i || (o = Ji(e, "mousedown", U0(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Bs(
          /*filtered_indices*/
          a[1]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const c = Ms(a, s, u);
          r[u] ? r[u].p(c, f) : (r[u] = Ls(c), r[u].c(), r[u].m(e, null));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = s.length;
      }
      f & /*bottom*/
      512 && rn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && rn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && rn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && ir(() => {
        n && (t || (t = qs(e, Ho, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = qs(e, Ho, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && On(e), F0(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function Ls(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, f;
  return {
    c() {
      e = Yl("li"), t = Yl("span"), t.textContent = "✓", n = Qi(), o = P0(i), s = Qi(), Ie(t, "class", "inner-item svelte-yuohum"), $e(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ie(e, "class", "item svelte-yuohum"), Ie(e, "data-index", r = /*index*/
      l[26]), Ie(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Ie(e, "data-testid", "dropdown-option"), Ie(e, "role", "option"), Ie(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), $e(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), $e(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), $e(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), $e(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(u, c) {
      Wn(u, e, c), gl(e, t), gl(e, n), gl(e, o), gl(e, s);
    },
    p(u, c) {
      c & /*selected_indices, filtered_indices*/
      18 && $e(t, "hide", !/*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )), c & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0] + "") && V0(o, i), c & /*filtered_indices*/
      2 && r !== (r = /*index*/
      u[26]) && Ie(e, "data-index", r), c & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0]) && Ie(e, "aria-label", a), c & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )) && Ie(e, "aria-selected", f), c & /*selected_indices, filtered_indices*/
      18 && $e(
        e,
        "selected",
        /*selected_indices*/
        u[4].includes(
          /*index*/
          u[26]
        )
      ), c & /*filtered_indices, active_index*/
      34 && $e(
        e,
        "active",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && $e(
        e,
        "bg-gray-100",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && $e(
        e,
        "dark:bg-gray-600",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      );
    },
    d(u) {
      u && On(e);
    }
  };
}
function K0(l) {
  let e, t, n, i, o;
  ir(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && As(l)
  );
  return {
    c() {
      e = Yl("div"), t = Qi(), s && s.c(), n = X0(), Ie(e, "class", "reference");
    },
    m(r, a) {
      Wn(r, e, a), l[20](e), Wn(r, t, a), s && s.m(r, a), Wn(r, n, a), i || (o = [
        Ji(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        Ji(
          window,
          "resize",
          /*onwindowresize*/
          l[19]
        )
      ], i = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && Li(s, 1)) : (s = As(r), s.c(), Li(s, 1), s.m(n.parentNode, n)) : s && (Y0(), Es(s, 1, 1, () => {
        s = null;
      }), H0());
    },
    i(r) {
      Li(s);
    },
    o(r) {
      Es(s);
    },
    d(r) {
      r && (On(e), On(t), On(n)), l[20](null), s && s.d(r), i = !1, O0(o);
    }
  };
}
function G0(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: u = null } = e, c, _, d, m, h, p, w, b, g;
  function k() {
    const { top: L, bottom: N } = h.getBoundingClientRect();
    t(16, c = L), t(17, _ = g - N);
  }
  let C = null;
  function v() {
    r && (C !== null && clearTimeout(C), C = setTimeout(
      () => {
        k(), C = null;
      },
      10
    ));
  }
  const z = Z0();
  function y() {
    t(11, g = window.innerHeight);
  }
  function A(L) {
    zs[L ? "unshift" : "push"](() => {
      h = L, t(6, h);
    });
  }
  const S = (L) => z("change", L);
  function R(L) {
    zs[L ? "unshift" : "push"](() => {
      p = L, t(7, p);
    });
  }
  return l.$$set = (L) => {
    "choices" in L && t(0, o = L.choices), "filtered_indices" in L && t(1, s = L.filtered_indices), "show_options" in L && t(2, r = L.show_options), "disabled" in L && t(3, a = L.disabled), "selected_indices" in L && t(4, f = L.selected_indices), "active_index" in L && t(5, u = L.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (p && f.length > 0) {
          let N = p.querySelectorAll("li");
          for (const J of Array.from(N))
            if (J.getAttribute("data-index") === f[0].toString()) {
              t(14, n = p == null ? void 0 : p.scrollTo) === null || n === void 0 || n.call(p, 0, J.offsetTop);
              break;
            }
        }
        k();
        const L = t(15, i = h.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (L == null ? void 0 : L.height) || 0), t(8, m = (L == null ? void 0 : L.width) || 0);
      }
      _ > c ? (t(10, b = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, b = c - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    h,
    p,
    m,
    w,
    b,
    g,
    v,
    z,
    n,
    i,
    c,
    _,
    d,
    y,
    A,
    S,
    R
  ];
}
class J0 extends j0 {
  constructor(e) {
    super(), N0(this, e, G0, K0, W0, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Q0(l, e) {
  return (l % e + e) % e;
}
function Ds(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function x0(l, e, t) {
  l("change", e), t || l("input");
}
function $0(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Q0(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: eh,
  append: It,
  attr: Te,
  binding_callbacks: th,
  check_outros: nh,
  create_component: xi,
  destroy_component: $i,
  detach: fo,
  element: cn,
  group_outros: lh,
  init: ih,
  insert: uo,
  listen: Bn,
  mount_component: eo,
  run_all: oh,
  safe_not_equal: sh,
  set_data: ah,
  set_input_value: Rs,
  space: Di,
  text: rh,
  toggle_class: fn,
  transition_in: _n,
  transition_out: Tn
} = window.__gradio__svelte__internal, { onMount: fh } = window.__gradio__svelte__internal, { createEventDispatcher: uh, afterUpdate: ch } = window.__gradio__svelte__internal;
function _h(l) {
  let e;
  return {
    c() {
      e = rh(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      uo(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && ah(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && fo(e);
    }
  };
}
function Ts(l) {
  let e, t, n;
  return t = new to({}), {
    c() {
      e = cn("div"), xi(t.$$.fragment), Te(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      uo(i, e, o), eo(t, e, null), n = !0;
    },
    i(i) {
      n || (_n(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Tn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && fo(e), $i(t);
    }
  };
}
function dh(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, m;
  t = new ia({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [_h] },
      $$scope: { ctx: l }
    }
  });
  let h = !/*disabled*/
  l[3] && Ts();
  return c = new J0({
    props: {
      show_options: (
        /*show_options*/
        l[12]
      ),
      choices: (
        /*choices*/
        l[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        l[10]
      ),
      disabled: (
        /*disabled*/
        l[3]
      ),
      selected_indices: (
        /*selected_index*/
        l[11] === null ? [] : [
          /*selected_index*/
          l[11]
        ]
      ),
      active_index: (
        /*active_index*/
        l[14]
      )
    }
  }), c.$on(
    "change",
    /*handle_option_selected*/
    l[16]
  ), {
    c() {
      e = cn("div"), xi(t.$$.fragment), n = Di(), i = cn("div"), o = cn("div"), s = cn("div"), r = cn("input"), f = Di(), h && h.c(), u = Di(), xi(c.$$.fragment), Te(r, "role", "listbox"), Te(r, "aria-controls", "dropdown-options"), Te(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), Te(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), Te(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], Te(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], fn(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), Te(s, "class", "secondary-wrap svelte-1m1zvyj"), Te(o, "class", "wrap-inner svelte-1m1zvyj"), fn(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), Te(i, "class", "wrap svelte-1m1zvyj"), Te(e, "class", "svelte-1m1zvyj"), fn(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(p, w) {
      uo(p, e, w), eo(t, e, null), It(e, n), It(e, i), It(i, o), It(o, s), It(s, r), Rs(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), It(s, f), h && h.m(s, null), It(i, u), eo(c, i, null), _ = !0, d || (m = [
        Bn(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        Bn(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        Bn(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        Bn(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        Bn(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(p, w) {
      const b = {};
      w[0] & /*show_label*/
      16 && (b.show_label = /*show_label*/
      p[4]), w[0] & /*info*/
      2 && (b.info = /*info*/
      p[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      4 && (b.$$scope = { dirty: w, ctx: p }), t.$set(b), (!_ || w[0] & /*show_options*/
      4096) && Te(
        r,
        "aria-expanded",
        /*show_options*/
        p[12]
      ), (!_ || w[0] & /*label*/
      1) && Te(
        r,
        "aria-label",
        /*label*/
        p[0]
      ), (!_ || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      p[3]), (!_ || w[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      p[7])) && (r.readOnly = a), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      p[9] && Rs(
        r,
        /*input_text*/
        p[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && fn(r, "subdued", !/*choices_names*/
      p[13].includes(
        /*input_text*/
        p[9]
      ) && !/*allow_custom_value*/
      p[6]), /*disabled*/
      p[3] ? h && (lh(), Tn(h, 1, 1, () => {
        h = null;
      }), nh()) : h ? w[0] & /*disabled*/
      8 && _n(h, 1) : (h = Ts(), h.c(), _n(h, 1), h.m(s, null)), (!_ || w[0] & /*show_options*/
      4096) && fn(
        o,
        "show_options",
        /*show_options*/
        p[12]
      );
      const g = {};
      w[0] & /*show_options*/
      4096 && (g.show_options = /*show_options*/
      p[12]), w[0] & /*choices*/
      4 && (g.choices = /*choices*/
      p[2]), w[0] & /*filtered_indices*/
      1024 && (g.filtered_indices = /*filtered_indices*/
      p[10]), w[0] & /*disabled*/
      8 && (g.disabled = /*disabled*/
      p[3]), w[0] & /*selected_index*/
      2048 && (g.selected_indices = /*selected_index*/
      p[11] === null ? [] : [
        /*selected_index*/
        p[11]
      ]), w[0] & /*active_index*/
      16384 && (g.active_index = /*active_index*/
      p[14]), c.$set(g), (!_ || w[0] & /*container*/
      32) && fn(
        e,
        "container",
        /*container*/
        p[5]
      );
    },
    i(p) {
      _ || (_n(t.$$.fragment, p), _n(h), _n(c.$$.fragment, p), _ = !0);
    },
    o(p) {
      Tn(t.$$.fragment, p), Tn(h), Tn(c.$$.fragment, p), _ = !1;
    },
    d(p) {
      p && fo(e), $i(t), l[29](null), h && h.d(), $i(c), d = !1, oh(m);
    }
  };
}
function hh(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: u = !1 } = e, { show_label: c } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, p = !1, w, b, g = "", k = "", C = !1, v = [], z = null, y = null, A;
  const S = uh();
  o ? (A = a.map((D) => D[1]).indexOf(o), y = A, y === -1 ? (s = o, y = null) : ([g, s] = a[y], k = g), L()) : a.length > 0 && (A = 0, y = 0, [g, o] = a[y], s = o, k = g);
  function R() {
    t(13, w = a.map((D) => D[0])), t(24, b = a.map((D) => D[1]));
  }
  function L() {
    R(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, g = ""), t(11, y = null)) : b.includes(o) ? (t(9, g = w[b.indexOf(o)]), t(11, y = b.indexOf(o))) : d ? (t(9, g = o), t(11, y = null)) : (t(9, g = ""), t(11, y = null)), t(27, A = y);
  }
  function N(D) {
    if (t(11, y = parseInt(D.detail.target.dataset.index)), isNaN(y)) {
      t(11, y = null);
      return;
    }
    t(12, p = !1), t(14, z = null), h.blur();
  }
  function J(D) {
    t(10, v = a.map((O, le) => le)), t(12, p = !0), S("focus");
  }
  function x() {
    d ? t(20, o = g) : t(9, g = w[b.indexOf(o)]), t(12, p = !1), t(14, z = null), S("blur");
  }
  function V(D) {
    t(12, [p, z] = $0(D, z, v), p, (t(14, z), t(2, a), t(23, f), t(6, d), t(9, g), t(10, v), t(8, h), t(25, k), t(11, y), t(27, A), t(26, C), t(24, b))), D.key === "Enter" && (z !== null ? (t(11, y = z), t(12, p = !1), h.blur(), t(14, z = null)) : w.includes(g) ? (t(11, y = w.indexOf(g)), t(12, p = !1), t(14, z = null), h.blur()) : d && (t(20, o = g), t(11, y = null), t(12, p = !1), t(14, z = null), h.blur()), S("enter", o));
  }
  ch(() => {
    t(21, r = !1), t(26, C = !0);
  }), fh(() => {
    h.focus();
  });
  function U() {
    g = this.value, t(9, g), t(11, y), t(27, A), t(26, C), t(2, a), t(24, b);
  }
  function T(D) {
    th[D ? "unshift" : "push"](() => {
      h = D, t(8, h);
    });
  }
  const K = (D) => S("key_up", { key: D.key, input_value: g });
  return l.$$set = (D) => {
    "label" in D && t(0, n = D.label), "info" in D && t(1, i = D.info), "value" in D && t(20, o = D.value), "value_is_output" in D && t(21, r = D.value_is_output), "choices" in D && t(2, a = D.choices), "disabled" in D && t(3, u = D.disabled), "show_label" in D && t(4, c = D.show_label), "container" in D && t(5, _ = D.container), "allow_custom_value" in D && t(6, d = D.allow_custom_value), "filterable" in D && t(7, m = D.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && y !== A && y !== null && C && (t(9, [g, o] = a[y], g, (t(20, o), t(11, y), t(27, A), t(26, C), t(2, a), t(24, b))), t(27, A = y), S("select", {
      index: y,
      value: b[y],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (L(), x0(S, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && R(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || L(), t(23, f = a), t(10, v = Ds(a, g)), !d && v.length > 0 && t(14, z = v[0]), h == document.activeElement && t(12, p = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && g !== k && (t(10, v = Ds(a, g)), t(25, k = g), !d && v.length > 0 && t(14, z = v[0]));
  }, [
    n,
    i,
    a,
    u,
    c,
    _,
    d,
    m,
    h,
    g,
    v,
    y,
    p,
    w,
    z,
    S,
    N,
    J,
    x,
    V,
    o,
    r,
    s,
    f,
    b,
    k,
    C,
    A,
    U,
    T,
    K
  ];
}
class mh extends eh {
  constructor(e) {
    super(), ih(
      this,
      e,
      hh,
      dh,
      sh,
      {
        label: 0,
        info: 1,
        value: 20,
        value_is_output: 21,
        choices: 2,
        disabled: 3,
        show_label: 4,
        container: 5,
        allow_custom_value: 6,
        filterable: 7
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: gh,
  append: et,
  attr: bl,
  check_outros: bh,
  create_component: In,
  destroy_component: jn,
  detach: nl,
  element: qt,
  group_outros: wh,
  init: ph,
  insert: ll,
  mount_component: Hn,
  safe_not_equal: vh,
  set_style: Fn,
  space: wl,
  text: co,
  transition_in: Bt,
  transition_out: Ft
} = window.__gradio__svelte__internal, { createEventDispatcher: kh } = window.__gradio__svelte__internal, { onMount: yh, onDestroy: Ch } = window.__gradio__svelte__internal;
function Sh(l) {
  let e;
  return {
    c() {
      e = co("Cancel");
    },
    m(t, n) {
      ll(t, e, n);
    },
    d(t) {
      t && nl(e);
    }
  };
}
function Is(l) {
  let e, t, n;
  return t = new Gi({
    props: {
      variant: "stop",
      $$slots: { default: [zh] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[12]
  ), {
    c() {
      e = qt("div"), In(t.$$.fragment), Fn(e, "margin-right", "8px");
    },
    m(i, o) {
      ll(i, e, o), Hn(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      65536 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Bt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ft(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && nl(e), jn(t);
    }
  };
}
function zh(l) {
  let e;
  return {
    c() {
      e = co("Remove");
    },
    m(t, n) {
      ll(t, e, n);
    },
    d(t) {
      t && nl(e);
    }
  };
}
function qh(l) {
  let e;
  return {
    c() {
      e = co("OK");
    },
    m(t, n) {
      ll(t, e, n);
    },
    d(t) {
      t && nl(e);
    }
  };
}
function Bh(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, m, h, p;
  o = new mh({
    props: {
      value: (
        /*currentLabel*/
        l[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        l[2]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), o.$on(
    "change",
    /*onDropDownChange*/
    l[5]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    l[7]
  ), a = new C0({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), a.$on(
    "change",
    /*onColorChange*/
    l[6]
  ), c = new Gi({
    props: {
      $$slots: { default: [Sh] },
      $$scope: { ctx: l }
    }
  }), c.$on(
    "click",
    /*click_handler*/
    l[11]
  );
  let w = (
    /*showRemove*/
    l[3] && Is(l)
  );
  return h = new Gi({
    props: {
      variant: "primary",
      $$slots: { default: [qh] },
      $$scope: { ctx: l }
    }
  }), h.$on(
    "click",
    /*click_handler_2*/
    l[13]
  ), {
    c() {
      e = qt("div"), t = qt("div"), n = qt("span"), i = qt("div"), In(o.$$.fragment), s = wl(), r = qt("div"), In(a.$$.fragment), f = wl(), u = qt("div"), In(c.$$.fragment), _ = wl(), w && w.c(), d = wl(), m = qt("div"), In(h.$$.fragment), Fn(i, "margin-right", "10px"), Fn(r, "margin-right", "40px"), Fn(r, "margin-bottom", "8px"), Fn(u, "margin-right", "8px"), bl(n, "class", "model-content svelte-hkn2q1"), bl(t, "class", "modal-container svelte-hkn2q1"), bl(e, "class", "modal svelte-hkn2q1"), bl(e, "id", "model-box-edit");
    },
    m(b, g) {
      ll(b, e, g), et(e, t), et(t, n), et(n, i), Hn(o, i, null), et(n, s), et(n, r), Hn(a, r, null), et(n, f), et(n, u), Hn(c, u, null), et(n, _), w && w.m(n, null), et(n, d), et(n, m), Hn(h, m, null), p = !0;
    },
    p(b, [g]) {
      const k = {};
      g & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      b[0]), g & /*choices*/
      4 && (k.choices = /*choices*/
      b[2]), o.$set(k);
      const C = {};
      g & /*currentColor*/
      2 && (C.value = /*currentColor*/
      b[1]), a.$set(C);
      const v = {};
      g & /*$$scope*/
      65536 && (v.$$scope = { dirty: g, ctx: b }), c.$set(v), /*showRemove*/
      b[3] ? w ? (w.p(b, g), g & /*showRemove*/
      8 && Bt(w, 1)) : (w = Is(b), w.c(), Bt(w, 1), w.m(n, d)) : w && (wh(), Ft(w, 1, 1, () => {
        w = null;
      }), bh());
      const z = {};
      g & /*$$scope*/
      65536 && (z.$$scope = { dirty: g, ctx: b }), h.$set(z);
    },
    i(b) {
      p || (Bt(o.$$.fragment, b), Bt(a.$$.fragment, b), Bt(c.$$.fragment, b), Bt(w), Bt(h.$$.fragment, b), p = !0);
    },
    o(b) {
      Ft(o.$$.fragment, b), Ft(a.$$.fragment, b), Ft(c.$$.fragment, b), Ft(w), Ft(h.$$.fragment, b), p = !1;
    },
    d(b) {
      b && nl(e), jn(o), jn(a), jn(c), w && w.d(), jn(h);
    }
  };
}
function Eh(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e;
  const u = kh();
  function c(g) {
    u("change", {
      label: i,
      color: a,
      ret: g
      // -1: remove, 0: cancel, 1: change
    });
  }
  function _(g) {
    const { detail: k } = g;
    let C = k;
    Number.isInteger(C) ? (Array.isArray(s) && C < s.length && t(1, a = s[C]), Array.isArray(o) && C < o.length && t(0, i = o[C][0])) : t(0, i = C);
  }
  function d(g) {
    const { detail: k } = g;
    t(1, a = k);
  }
  function m(g) {
    _(g), c(1);
  }
  function h(g) {
    switch (g.key) {
      case "Enter":
        c(1);
        break;
    }
  }
  yh(() => {
    document.addEventListener("keydown", h), t(0, i = n), t(1, a = r);
  }), Ch(() => {
    document.removeEventListener("keydown", h);
  });
  const p = () => c(0), w = () => c(-1), b = () => c(1);
  return l.$$set = (g) => {
    "label" in g && t(8, n = g.label), "currentLabel" in g && t(0, i = g.currentLabel), "choices" in g && t(2, o = g.choices), "choicesColors" in g && t(9, s = g.choicesColors), "color" in g && t(10, r = g.color), "currentColor" in g && t(1, a = g.currentColor), "showRemove" in g && t(3, f = g.showRemove);
  }, [
    i,
    a,
    o,
    f,
    c,
    _,
    d,
    m,
    n,
    s,
    r,
    p,
    w,
    b
  ];
}
class or extends gh {
  constructor(e) {
    super(), ph(this, e, Eh, Bh, vh, {
      label: 8,
      currentLabel: 0,
      choices: 2,
      choicesColors: 9,
      color: 10,
      currentColor: 1,
      showRemove: 3
    });
  }
}
const _e = (l, e, t) => Math.min(Math.max(l, e), t);
function Ri(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class Ti {
  constructor(e, t, n, i, o, s, r, a, f, u, c, _ = "rgb(255, 255, 255)", d = 0.5, m = 25, h = 8, p = 2, w = 4, b = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (g) => {
      if (this.isDragging) {
        let k = g.clientX - this.offsetMouseX - this.xmin, C = g.clientY - this.offsetMouseY - this.ymin;
        const v = this.canvasXmax - this.canvasXmin, z = this.canvasYmax - this.canvasYmin;
        k = _e(k, -this.xmin, v - this.xmax), C = _e(C, -this.ymin, z - this.ymax), this.xmin += k, this.ymin += C, this.xmax += k, this.ymax += C, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleCreating = (g) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(g.clientX, g.clientY);
        k -= this.offsetMouseX, C -= this.offsetMouseY, k > this.xmax ? (this.creatingAnchorX == "xmax" && (this.xmin = this.xmax), this.xmax = k, this.creatingAnchorX = "xmin") : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmin" ? this.xmax = k : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmax" ? this.xmin = k : k < this.xmin && (this.creatingAnchorX == "xmin" && (this.xmax = this.xmin), this.xmin = k, this.creatingAnchorX = "xmax"), C > this.ymax ? (this.creatingAnchorY == "ymax" && (this.ymin = this.ymax), this.ymax = C, this.creatingAnchorY = "ymin") : C > this.ymin && C < this.ymax && this.creatingAnchorY == "ymin" ? this.ymax = C : C > this.ymin && C < this.ymax && this.creatingAnchorY == "ymax" ? this.ymin = C : C < this.ymin && (this.creatingAnchorY == "ymin" && (this.ymax = this.ymin), this.ymin = C, this.creatingAnchorY = "ymax"), this.updateHandles(), this.renderCallBack();
      }
    }, this.stopCreating = (g) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = this.canvasXmax - this.canvasXmin, C = this.canvasYmax - this.canvasYmin;
        this.xmin = _e(this.xmin, 0, k - this.minSize), this.ymin = _e(this.ymin, 0, C - this.minSize), this.xmax = _e(this.xmax, this.minSize, k), this.ymax = _e(this.ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() < this.minSize && (this.creatingAnchorX == "xmin" ? this.xmax = this.xmin + this.minSize : this.xmin = this.xmax - this.minSize), this.getHeight() < this.minSize && (this.creatingAnchorY == "ymin" ? this.ymax = this.ymin + this.minSize : this.ymin = this.ymax - this.minSize), this.xmax > k ? (this.xmin -= this.xmax - k, this.xmax = k) : this.xmin < 0 && (this.xmax -= this.xmin, this.xmin = 0), this.ymax > C ? (this.ymin -= this.ymax - C, this.ymax = C) : this.ymin < 0 && (this.ymax -= this.ymin, this.ymin = 0)), this.updateHandles(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (g) => {
      if (this.isResizing) {
        const k = g.clientX, C = g.clientY, v = k - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, z = C - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, y = this.canvasXmax - this.canvasXmin, A = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += v, this.ymin += z, this.xmin = _e(this.xmin, 0, this.xmax - this.minSize), this.ymin = _e(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += v, this.ymin += z, this.xmax = _e(this.xmax, this.xmin + this.minSize, y), this.ymin = _e(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += v, this.ymax += z, this.xmax = _e(this.xmax, this.xmin + this.minSize, y), this.ymax = _e(this.ymax, this.ymin + this.minSize, A);
            break;
          case 3:
            this.xmin += v, this.ymax += z, this.xmin = _e(this.xmin, 0, this.xmax - this.minSize), this.ymax = _e(this.ymax, this.ymin + this.minSize, A);
            break;
          case 4:
            this.ymin += z, this.ymin = _e(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += v, this.xmax = _e(this.xmax, this.xmin + this.minSize, y);
            break;
          case 6:
            this.ymax += z, this.ymax = _e(this.ymax, this.ymin + this.minSize, A);
            break;
          case 7:
            this.xmin += v, this.xmin = _e(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = o, this.canvasYmax = s, this.scaleFactor = b, this.label = r, this.isDragging = !1, this.isCreating = !1, this.xmin = a, this.ymin = f, this.xmax = u, this.ymax = c, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = p, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = _, this.alpha = d, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this.xmin,
      ymin: this.ymin,
      xmax: this.xmax,
      ymax: this.ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this.xmin = Math.round(this.xmin * t), this.ymin = Math.round(this.ymin * t), this.xmax = Math.round(this.xmax * t), this.ymax = Math.round(this.ymax * t), this.updateHandles(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this.getWidth() * this.getHeight();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  render(e) {
    let t, n;
    if (e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Ri(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Ri(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Ri(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this.xmin, this.offsetMouseY = e.clientY - this.ymin, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const i = this.resizeHandles[n];
      if (e >= i.xmin && e <= i.xmax && t >= i.ymin && t <= i.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
}
const jt = [
  "rgb(255, 168, 77)",
  "rgb(92, 172, 238)",
  "rgb(255, 99, 71)",
  "rgb(118, 238, 118)",
  "rgb(255, 145, 164)",
  "rgb(0, 191, 255)",
  "rgb(255, 218, 185)",
  "rgb(255, 69, 0)",
  "rgb(34, 139, 34)",
  "rgb(255, 240, 245)",
  "rgb(255, 193, 37)",
  "rgb(255, 193, 7)",
  "rgb(255, 250, 138)"
], {
  SvelteComponent: Mh,
  append: Xn,
  attr: tt,
  binding_callbacks: Ah,
  bubble: js,
  check_outros: Bl,
  create_component: Kn,
  destroy_component: Gn,
  detach: Ot,
  element: bn,
  empty: Lh,
  group_outros: El,
  init: Dh,
  insert: Wt,
  is_function: Rh,
  listen: ct,
  mount_component: Jn,
  noop: Th,
  run_all: sr,
  safe_not_equal: Ih,
  space: Vn,
  toggle_class: pl,
  transition_in: me,
  transition_out: je
} = window.__gradio__svelte__internal, { onMount: jh, onDestroy: Hh, createEventDispatcher: Fh } = window.__gradio__svelte__internal;
function Hs(l) {
  let e, t, n, i, o, s, r, a, f, u;
  n = new O1({}), s = new Q1({});
  let c = (
    /*showRemoveButton*/
    l[1] && Fs(l)
  );
  return {
    c() {
      e = bn("span"), t = bn("button"), Kn(n.$$.fragment), i = Vn(), o = bn("button"), Kn(s.$$.fragment), r = Vn(), c && c.c(), tt(t, "class", "icon svelte-3rql59"), tt(t, "aria-label", "Create box"), pl(
        t,
        "selected",
        /*mode*/
        l[9] === /*Mode*/
        l[6].creation
      ), tt(o, "class", "icon svelte-3rql59"), tt(o, "aria-label", "Edit boxes"), pl(
        o,
        "selected",
        /*mode*/
        l[9] === /*Mode*/
        l[6].drag
      ), tt(e, "class", "canvas-control svelte-3rql59");
    },
    m(_, d) {
      Wt(_, e, d), Xn(e, t), Jn(n, t, null), Xn(e, i), Xn(e, o), Jn(s, o, null), Xn(e, r), c && c.m(e, null), a = !0, f || (u = [
        ct(
          t,
          "click",
          /*click_handler*/
          l[32]
        ),
        ct(
          o,
          "click",
          /*click_handler_1*/
          l[33]
        )
      ], f = !0);
    },
    p(_, d) {
      (!a || d[0] & /*mode, Mode*/
      576) && pl(
        t,
        "selected",
        /*mode*/
        _[9] === /*Mode*/
        _[6].creation
      ), (!a || d[0] & /*mode, Mode*/
      576) && pl(
        o,
        "selected",
        /*mode*/
        _[9] === /*Mode*/
        _[6].drag
      ), /*showRemoveButton*/
      _[1] ? c ? (c.p(_, d), d[0] & /*showRemoveButton*/
      2 && me(c, 1)) : (c = Fs(_), c.c(), me(c, 1), c.m(e, null)) : c && (El(), je(c, 1, 1, () => {
        c = null;
      }), Bl());
    },
    i(_) {
      a || (me(n.$$.fragment, _), me(s.$$.fragment, _), me(c), a = !0);
    },
    o(_) {
      je(n.$$.fragment, _), je(s.$$.fragment, _), je(c), a = !1;
    },
    d(_) {
      _ && Ot(e), Gn(n), Gn(s), c && c.d(), f = !1, sr(u);
    }
  };
}
function Fs(l) {
  let e, t, n, i, o;
  return t = new o0({}), {
    c() {
      e = bn("button"), Kn(t.$$.fragment), tt(e, "class", "icon svelte-3rql59"), tt(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      Wt(s, e, r), Jn(t, e, null), n = !0, i || (o = ct(
        e,
        "click",
        /*click_handler_2*/
        l[34]
      ), i = !0);
    },
    p: Th,
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      je(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ot(e), Gn(t), i = !1, o();
    }
  };
}
function Xs(l) {
  let e, t;
  return e = new or({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? Qn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[18]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[35]
  ), {
    c() {
      Kn(e.$$.fragment);
    },
    m(n, i) {
      Jn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      257 && (o.label = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      257 && (o.color = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? Qn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Gn(e, n);
    }
  };
}
function Ys(l) {
  let e, t;
  return e = new or({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? Qn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[19]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[36]
  ), {
    c() {
      Kn(e.$$.fragment);
    },
    m(n, i) {
      Jn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      257 && (o.label = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      257 && (o.color = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? Qn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Gn(e, n);
    }
  };
}
function Xh(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*interactive*/
    l[2] && Hs(l)
  ), c = (
    /*editModalVisible*/
    l[10] && Xs(l)
  ), _ = (
    /*newModalVisible*/
    l[11] && Ys(l)
  );
  return {
    c() {
      e = bn("div"), t = bn("canvas"), n = Vn(), u && u.c(), i = Vn(), c && c.c(), o = Vn(), _ && _.c(), s = Lh(), tt(t, "class", "canvas-annotator svelte-3rql59"), tt(e, "class", "canvas-container svelte-3rql59"), tt(e, "tabindex", "-1");
    },
    m(d, m) {
      Wt(d, e, m), Xn(e, t), l[31](t), Wt(d, n, m), u && u.m(d, m), Wt(d, i, m), c && c.m(d, m), Wt(d, o, m), _ && _.m(d, m), Wt(d, s, m), r = !0, a || (f = [
        ct(
          t,
          "pointerdown",
          /*handlePointerDown*/
          l[12]
        ),
        ct(
          t,
          "pointerup",
          /*handlePointerUp*/
          l[13]
        ),
        ct(t, "pointermove", function() {
          Rh(
            /*handlesCursor*/
            l[5] ? (
              /*handlePointerMove*/
              l[14]
            ) : null
          ) && /*handlesCursor*/
          (l[5] ? (
            /*handlePointerMove*/
            l[14]
          ) : null).apply(this, arguments);
        }),
        ct(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[17]
        ),
        ct(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[21]
        ),
        ct(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[22]
        )
      ], a = !0);
    },
    p(d, m) {
      l = d, /*interactive*/
      l[2] ? u ? (u.p(l, m), m[0] & /*interactive*/
      4 && me(u, 1)) : (u = Hs(l), u.c(), me(u, 1), u.m(i.parentNode, i)) : u && (El(), je(u, 1, 1, () => {
        u = null;
      }), Bl()), /*editModalVisible*/
      l[10] ? c ? (c.p(l, m), m[0] & /*editModalVisible*/
      1024 && me(c, 1)) : (c = Xs(l), c.c(), me(c, 1), c.m(o.parentNode, o)) : c && (El(), je(c, 1, 1, () => {
        c = null;
      }), Bl()), /*newModalVisible*/
      l[11] ? _ ? (_.p(l, m), m[0] & /*newModalVisible*/
      2048 && me(_, 1)) : (_ = Ys(l), _.c(), me(_, 1), _.m(s.parentNode, s)) : _ && (El(), je(_, 1, 1, () => {
        _ = null;
      }), Bl());
    },
    i(d) {
      r || (me(u), me(c), me(_), r = !0);
    },
    o(d) {
      je(u), je(c), je(_), r = !1;
    },
    d(d) {
      d && (Ot(e), Ot(n), Ot(i), Ot(o), Ot(s)), l[31](null), u && u.d(d), c && c.d(d), _ && _.d(d), a = !1, sr(f);
    }
  };
}
function Ii(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Qn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function Yh(l, e, t) {
  var n;
  (function(E) {
    E[E.creation = 0] = "creation", E[E.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 25 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: u } = e, { value: c } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { singleBox: h = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: w = !0 } = e;
  p === null && (p = m);
  let b, g, k = null, C = -1, v = n.drag;
  c !== null && c.boxes.length == 0 && (v = n.creation);
  let z = 0, y = 0, A = 0, S = 0, R = 1, L = 0, N = 0, J = !1, x = !1;
  const V = Fh();
  function U() {
    if (g) {
      g.clearRect(0, 0, b.width, b.height), k !== null && g.drawImage(k, z, y, L, N);
      for (const E of c.boxes.slice().reverse())
        E.render(g);
    }
  }
  function T(E) {
    t(8, C = E), c.boxes.forEach((H) => {
      H.setSelected(!1);
    }), E >= 0 && E < c.boxes.length && c.boxes[E].setSelected(!0), U();
  }
  function K(E) {
    o && (E.target instanceof Element && E.target.hasPointerCapture(E.pointerId) && E.target.releasePointerCapture(E.pointerId), v === n.creation ? ue(E) : v === n.drag && D(E));
  }
  function D(E) {
    const H = b.getBoundingClientRect(), ee = E.clientX - H.left, be = E.clientY - H.top;
    for (const [re, Q] of c.boxes.entries()) {
      const at = Q.indexOfPointInsideHandle(ee, be);
      if (at >= 0) {
        T(re), Q.startResize(at, E);
        return;
      }
    }
    for (const [re, Q] of c.boxes.entries())
      if (Q.isPointInsideBox(ee, be)) {
        T(re), Q.startDrag(E);
        return;
      }
    h || T(-1);
  }
  function O(E) {
    V("change");
  }
  function le(E) {
    if (c === null || v !== n.drag)
      return;
    const H = b.getBoundingClientRect(), ee = E.clientX - H.left, be = E.clientY - H.top;
    for (const [re, Q] of c.boxes.entries()) {
      const at = Q.indexOfPointInsideHandle(ee, be);
      if (at >= 0) {
        t(7, b.style.cursor = Q.resizeHandles[at].cursor, b);
        return;
      }
    }
    t(7, b.style.cursor = "default", b);
  }
  function ae(E) {
    if (o)
      switch (E.key) {
        case "Delete":
          ge();
          break;
      }
  }
  function ue(E) {
    const H = b.getBoundingClientRect(), ee = (E.clientX - H.left - z) / R, be = (E.clientY - H.top - y) / R;
    let re;
    d.length > 0 ? re = Ii(d[0]) : h ? c.boxes.length > 0 ? re = c.boxes[0].color : re = jt[0] : re = jt[c.boxes.length % jt.length];
    let Q = new Ti(U, M, z, y, A, S, "", ee, be, ee, be, re, s, r, a, f, u);
    Q.startCreating(E, H.left, H.top), h ? (t(0, c.boxes = [Q], c), Me()) : t(0, c.boxes = [Q, ...c.boxes], c), T(0), U(), V("change");
  }
  function I() {
    t(9, v = n.creation), t(7, b.style.cursor = "crosshair", b);
  }
  function Me() {
    t(9, v = n.drag), t(7, b.style.cursor = "default", b);
  }
  function M() {
    C >= 0 && C < c.boxes.length && (c.boxes[C].getArea() < 1 ? ge() : m || t(11, x = !0));
  }
  function F() {
    C >= 0 && C < c.boxes.length && !m && t(10, J = !0);
  }
  function G(E) {
    o && F();
  }
  function q(E) {
    t(10, J = !1);
    const { detail: H } = E;
    let ee = H.label, be = H.color, re = H.ret;
    if (C >= 0 && C < c.boxes.length) {
      let Q = c.boxes[C];
      re == 1 ? (Q.label = ee, Q.color = Ii(be), U(), V("change")) : re == -1 && ge();
    }
  }
  function ce(E) {
    t(11, x = !1);
    const { detail: H } = E;
    let ee = H.label, be = H.color, re = H.ret;
    if (C >= 0 && C < c.boxes.length) {
      let Q = c.boxes[C];
      re == 1 ? (Q.label = ee, Q.color = Ii(be), U(), V("change")) : ge();
    }
  }
  function ge() {
    C >= 0 && C < c.boxes.length && (c.boxes.splice(C, 1), T(-1), h && I(), V("change"));
  }
  function Ae() {
    if (b) {
      if (R = 1, t(7, b.width = b.clientWidth, b), k !== null)
        if (k.width > b.width)
          R = b.width / k.width, L = k.width * R, N = k.height * R, z = 0, y = 0, A = L, S = N, t(7, b.height = N, b);
        else {
          L = k.width, N = k.height;
          var E = (b.width - L) / 2;
          z = E, y = 0, A = E + L, S = k.height, t(7, b.height = N, b);
        }
      else
        z = 0, y = 0, A = b.width, S = b.height, t(7, b.height = b.clientHeight, b);
      if (A > 0 && S > 0)
        for (const H of c.boxes)
          H.canvasXmin = z, H.canvasYmin = y, H.canvasXmax = A, H.canvasYmax = S, H.setScaleFactor(R);
      U(), V("change");
    }
  }
  const ot = new ResizeObserver(Ae);
  function Le() {
    for (let E = 0; E < c.boxes.length; E++) {
      let H = c.boxes[E];
      if (!(H instanceof Ti)) {
        let ee = "", be = "";
        H.hasOwnProperty("color") ? (ee = H.color, Array.isArray(ee) && ee.length === 3 && (ee = `rgb(${ee[0]}, ${ee[1]}, ${ee[2]})`)) : ee = jt[E % jt.length], H.hasOwnProperty("label") && (be = H.label), H = new Ti(U, M, z, y, A, S, be, H.xmin, H.ymin, H.xmax, H.ymax, ee, s, r, a, f, u), t(0, c.boxes[E] = H, c);
      }
    }
  }
  function Fe() {
    i !== null && (k === null || k.src != i) && (k = new Image(), k.src = i, k.onload = function() {
      Ae(), U();
    });
  }
  jh(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let E = 0; E < _.length; E++) {
        let H = jt[E % jt.length];
        d.push(Qn(H));
      }
    g = b.getContext("2d"), ot.observe(b), C < 0 && c !== null && c.boxes.length > 0 && T(0), Fe(), Ae(), U();
  });
  function Ue() {
    document.addEventListener("keydown", ae);
  }
  function Lt() {
    document.removeEventListener("keydown", ae);
  }
  Hh(() => {
    document.removeEventListener("keydown", ae);
  });
  function $l(E) {
    Ah[E ? "unshift" : "push"](() => {
      b = E, t(7, b);
    });
  }
  const B = () => I(), wt = () => Me(), st = () => ge();
  function tn(E) {
    js.call(this, l, E);
  }
  function ei(E) {
    js.call(this, l, E);
  }
  return l.$$set = (E) => {
    "imageUrl" in E && t(23, i = E.imageUrl), "interactive" in E && t(2, o = E.interactive), "boxAlpha" in E && t(24, s = E.boxAlpha), "boxMinSize" in E && t(25, r = E.boxMinSize), "handleSize" in E && t(26, a = E.handleSize), "boxThickness" in E && t(27, f = E.boxThickness), "boxSelectedThickness" in E && t(28, u = E.boxSelectedThickness), "value" in E && t(0, c = E.value), "choices" in E && t(3, _ = E.choices), "choicesColors" in E && t(4, d = E.choicesColors), "disableEditBoxes" in E && t(29, m = E.disableEditBoxes), "singleBox" in E && t(30, h = E.singleBox), "showRemoveButton" in E && t(1, p = E.showRemoveButton), "handlesCursor" in E && t(5, w = E.handlesCursor);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Fe(), Le(), Ae(), U());
  }, [
    c,
    p,
    o,
    _,
    d,
    w,
    n,
    b,
    C,
    v,
    J,
    x,
    K,
    O,
    le,
    I,
    Me,
    G,
    q,
    ce,
    ge,
    Ue,
    Lt,
    i,
    s,
    r,
    a,
    f,
    u,
    m,
    h,
    $l,
    B,
    wt,
    st,
    tn,
    ei
  ];
}
class Nh extends Mh {
  constructor(e) {
    super(), Dh(
      this,
      e,
      Yh,
      Xh,
      Ih,
      {
        imageUrl: 23,
        interactive: 2,
        boxAlpha: 24,
        boxMinSize: 25,
        handleSize: 26,
        boxThickness: 27,
        boxSelectedThickness: 28,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 29,
        singleBox: 30,
        showRemoveButton: 1,
        handlesCursor: 5
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Uh,
  add_flush_callback: Oh,
  bind: Wh,
  binding_callbacks: Vh,
  create_component: Ph,
  destroy_component: Zh,
  init: Kh,
  mount_component: Gh,
  safe_not_equal: Jh,
  transition_in: Qh,
  transition_out: xh
} = window.__gradio__svelte__internal, { createEventDispatcher: $h } = window.__gradio__svelte__internal;
function em(l) {
  let e, t, n;
  function i(s) {
    l[17](s);
  }
  let o = {
    interactive: (
      /*interactive*/
      l[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      l[2]
    ),
    choices: (
      /*labelList*/
      l[3]
    ),
    choicesColors: (
      /*labelColors*/
      l[4]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[5]
    ),
    handleSize: (
      /*handleSize*/
      l[6]
    ),
    boxThickness: (
      /*boxThickness*/
      l[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[8]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[9]
    ),
    singleBox: (
      /*singleBox*/
      l[10]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[11]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[12]
    ),
    imageUrl: (
      /*resolved_src*/
      l[13]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new Nh({ props: o }), Vh.push(() => Wh(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[18]
    ), {
      c() {
        Ph(e.$$.fragment);
      },
      m(s, r) {
        Gh(e, s, r), n = !0;
      },
      p(s, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        s[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        s[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        s[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        s[4]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        s[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        s[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        s[7]), r & /*boxSelectedThickness*/
        256 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        s[8]), r & /*disableEditBoxes*/
        512 && (a.disableEditBoxes = /*disableEditBoxes*/
        s[9]), r & /*singleBox*/
        1024 && (a.singleBox = /*singleBox*/
        s[10]), r & /*showRemoveButton*/
        2048 && (a.showRemoveButton = /*showRemoveButton*/
        s[11]), r & /*handlesCursor*/
        4096 && (a.handlesCursor = /*handlesCursor*/
        s[12]), r & /*resolved_src*/
        8192 && (a.imageUrl = /*resolved_src*/
        s[13]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], Oh(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Qh(e.$$.fragment, s), n = !0);
      },
      o(s) {
        xh(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Zh(e, s);
      }
    }
  );
}
function tm(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: m } = e, { showRemoveButton: h } = e, { handlesCursor: p } = e, w, b;
  const g = $h();
  function k(v) {
    _ = v, t(0, _);
  }
  const C = () => g("change");
  return l.$$set = (v) => {
    "src" in v && t(15, n = v.src), "interactive" in v && t(1, i = v.interactive), "boxesAlpha" in v && t(2, o = v.boxesAlpha), "labelList" in v && t(3, s = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, f = v.handleSize), "boxThickness" in v && t(7, u = v.boxThickness), "boxSelectedThickness" in v && t(8, c = v.boxSelectedThickness), "value" in v && t(0, _ = v.value), "disableEditBoxes" in v && t(9, d = v.disableEditBoxes), "singleBox" in v && t(10, m = v.singleBox), "showRemoveButton" in v && t(11, h = v.showRemoveButton), "handlesCursor" in v && t(12, p = v.handlesCursor);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    98304) {
      t(13, w = n), t(16, b = n);
      const v = n;
      $_(v).then((z) => {
        b === v && t(13, w = z);
      });
    }
  }, [
    _,
    i,
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    p,
    w,
    g,
    n,
    b,
    k,
    C
  ];
}
class nm extends Uh {
  constructor(e) {
    super(), Kh(this, e, tm, em, Jh, {
      src: 15,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      boxSelectedThickness: 8,
      value: 0,
      disableEditBoxes: 9,
      singleBox: 10,
      showRemoveButton: 11,
      handlesCursor: 12
    });
  }
}
class Ns {
  constructor() {
    this.boxes = [];
  }
}
const {
  SvelteComponent: lm,
  add_flush_callback: Nl,
  append: un,
  attr: Yn,
  bind: Ul,
  binding_callbacks: xn,
  bubble: En,
  check_outros: Xt,
  create_component: dt,
  create_slot: im,
  destroy_component: ht,
  detach: Zt,
  element: Pn,
  empty: om,
  get_all_dirty_from_scope: sm,
  get_slot_changes: am,
  group_outros: Yt,
  init: rm,
  insert: Kt,
  mount_component: mt,
  noop: fm,
  safe_not_equal: um,
  space: Ht,
  toggle_class: Us,
  transition_in: Z,
  transition_out: $,
  update_slot_base: cm
} = window.__gradio__svelte__internal, { createEventDispatcher: _m, tick: dm } = window.__gradio__svelte__internal;
function Os(l) {
  let e, t;
  return e = new _d({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [hm] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      dt(e.$$.fragment);
    },
    m(n, i) {
      mt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      1048576 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ht(e, n);
    }
  };
}
function hm(l) {
  let e, t;
  return e = new Ol({
    props: {
      Icon: Yu,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      dt(e.$$.fragment);
    },
    m(n, i) {
      mt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ht(e, n);
    }
  };
}
function Ws(l) {
  let e, t;
  return e = new Kc({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[36]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[37]
  ), e.$on(
    "error",
    /*error_handler*/
    l[38]
  ), {
    c() {
      dt(e.$$.fragment);
    },
    m(n, i) {
      mt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ht(e, n);
    }
  };
}
function Vs(l) {
  let e, t, n;
  return t = new Ol({
    props: { Icon: aa, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[34]
  ), {
    c() {
      e = Pn("div"), dt(t.$$.fragment);
    },
    m(i, o) {
      Kt(i, e, o), mt(t, e, null), n = !0;
    },
    p: fm,
    i(i) {
      n || (Z(t.$$.fragment, i), n = !0);
    },
    o(i) {
      $(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Zt(e), ht(t);
    }
  };
}
function Ps(l) {
  let e;
  const t = (
    /*#slots*/
    l[35].default
  ), n = im(
    t,
    l,
    /*$$scope*/
    l[51],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      1048576) && cm(
        n,
        t,
        i,
        /*$$scope*/
        i[51],
        e ? am(
          t,
          /*$$scope*/
          i[51],
          o,
          null
        ) : sm(
          /*$$scope*/
          i[51]
        ),
        null
      );
    },
    i(i) {
      e || (Z(n, i), e = !0);
    },
    o(i) {
      $(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function mm(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Ps(l)
  );
  return {
    c() {
      n && n.c(), e = om();
    },
    m(i, o) {
      n && n.m(i, o), Kt(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && Z(n, 1)) : (n = Ps(i), n.c(), Z(n, 1), n.m(e.parentNode, e)) : n && (Yt(), $(n, 1, 1, () => {
        n = null;
      }), Xt());
    },
    i(i) {
      t || (Z(n), t = !0);
    },
    o(i) {
      $(n), t = !1;
    },
    d(i) {
      i && Zt(e), n && n.d(i);
    }
  };
}
function Zs(l) {
  let e, t;
  return e = new j1({
    props: {
      root: (
        /*root*/
        l[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        l[8]
      ),
      upload: (
        /*upload*/
        l[28]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    l[43]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    l[44]
  ), e.$on(
    "error",
    /*error_handler_2*/
    l[45]
  ), e.$on(
    "drag",
    /*drag_handler*/
    l[46]
  ), e.$on(
    "upload",
    /*upload_handler*/
    l[47]
  ), {
    c() {
      dt(e.$$.fragment);
    },
    m(n, i) {
      mt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*upload*/
      268435456 && (o.upload = /*upload*/
      n[28]), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ht(e, n);
    }
  };
}
function Ks(l) {
  let e, t, n, i;
  function o(r) {
    l[48](r);
  }
  let s = {
    boxesAlpha: (
      /*boxesAlpha*/
      l[12]
    ),
    labelList: (
      /*labelList*/
      l[13]
    ),
    labelColors: (
      /*labelColors*/
      l[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[15]
    ),
    interactive: (
      /*interactive*/
      l[7]
    ),
    handleSize: (
      /*handleSize*/
      l[16]
    ),
    boxThickness: (
      /*boxThickness*/
      l[17]
    ),
    singleBox: (
      /*singleBox*/
      l[19]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[18]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[20]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[21]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[22]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new nm({ props: s }), xn.push(() => Ul(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[49]
    ), {
      c() {
        e = Pn("div"), dt(t.$$.fragment), Yn(e, "class", "image-frame svelte-1gjdske"), Us(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        Kt(r, e, a), mt(t, e, null), i = !0;
      },
      p(r, a) {
        const f = {};
        a[0] & /*boxesAlpha*/
        4096 && (f.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (f.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (f.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (f.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (f.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (f.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        131072 && (f.boxThickness = /*boxThickness*/
        r[17]), a[0] & /*singleBox*/
        524288 && (f.singleBox = /*singleBox*/
        r[19]), a[0] & /*disableEditBoxes*/
        262144 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[18]), a[0] & /*showRemoveButton*/
        1048576 && (f.showRemoveButton = /*showRemoveButton*/
        r[20]), a[0] & /*handlesCursor*/
        2097152 && (f.handlesCursor = /*handlesCursor*/
        r[21]), a[0] & /*boxSelectedThickness*/
        4194304 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[22]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], Nl(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && Us(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (Z(t.$$.fragment, r), i = !0);
      },
      o(r) {
        $(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && Zt(e), ht(t);
      }
    }
  );
}
function Gs(l) {
  let e, t, n;
  function i(s) {
    l[50](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*handle_clear*/
      l[30]
    ),
    handle_select: (
      /*handle_select_source*/
      l[33]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new u_({ props: o }), xn.push(() => Ul(e, "active_source", i)), {
      c() {
        dt(e.$$.fragment);
      },
      m(s, r) {
        mt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], Nl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Z(e.$$.fragment, s), n = !0);
      },
      o(s) {
        $(e.$$.fragment, s), n = !1;
      },
      d(s) {
        ht(e, s);
      }
    }
  );
}
function gm(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, m, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), p;
  e = new qf({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: ra,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Os(l)
  ), b = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Ws(l)
  ), g = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Vs(l)
  );
  function k(S) {
    l[40](S);
  }
  function C(S) {
    l[41](S);
  }
  let v = {
    hidden: (
      /*value*/
      l[1] !== null || /*active_source*/
      l[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      l[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      l[6]
    ),
    max_file_size: (
      /*max_file_size*/
      l[23]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[24]
    ),
    stream_handler: (
      /*stream_handler*/
      l[25]
    ),
    $$slots: { default: [mm] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[26] !== void 0 && (v.uploading = /*uploading*/
  l[26]), /*dragging*/
  l[27] !== void 0 && (v.dragging = /*dragging*/
  l[27]), f = new Vd({ props: v }), l[39](f), xn.push(() => Ul(f, "uploading", k)), xn.push(() => Ul(f, "dragging", C)), f.$on(
    "load",
    /*handle_upload*/
    l[29]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[42]
  );
  let z = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && Zs(l)
  ), y = (
    /*value*/
    l[1] !== null && Ks(l)
  ), A = h && Gs(l);
  return {
    c() {
      dt(e.$$.fragment), t = Ht(), n = Pn("div"), w && w.c(), i = Ht(), b && b.c(), o = Ht(), g && g.c(), s = Ht(), r = Pn("div"), a = Pn("div"), dt(f.$$.fragment), _ = Ht(), z && z.c(), d = Ht(), y && y.c(), m = Ht(), A && A.c(), Yn(n, "class", "icon-buttons svelte-1gjdske"), Yn(a, "class", "upload-container svelte-1gjdske"), Yn(r, "data-testid", "image"), Yn(r, "class", "image-container svelte-1gjdske");
    },
    m(S, R) {
      mt(e, S, R), Kt(S, t, R), Kt(S, n, R), w && w.m(n, null), un(n, i), b && b.m(n, null), un(n, o), g && g.m(n, null), Kt(S, s, R), Kt(S, r, R), un(r, a), mt(f, a, null), un(a, _), z && z.m(a, null), un(a, d), y && y.m(a, null), un(r, m), A && A.m(r, null), p = !0;
    },
    p(S, R) {
      const L = {};
      R[0] & /*show_label*/
      8 && (L.show_label = /*show_label*/
      S[3]), R[0] & /*label*/
      4 && (L.label = /*label*/
      S[2] || "Image Annotator"), e.$set(L), /*showDownloadButton*/
      S[10] && /*value*/
      S[1] !== null ? w ? (w.p(S, R), R[0] & /*showDownloadButton, value*/
      1026 && Z(w, 1)) : (w = Os(S), w.c(), Z(w, 1), w.m(n, i)) : w && (Yt(), $(w, 1, 1, () => {
        w = null;
      }), Xt()), /*showShareButton*/
      S[9] && /*value*/
      S[1] !== null ? b ? (b.p(S, R), R[0] & /*showShareButton, value*/
      514 && Z(b, 1)) : (b = Ws(S), b.c(), Z(b, 1), b.m(n, o)) : b && (Yt(), $(b, 1, 1, () => {
        b = null;
      }), Xt()), /*showClearButton*/
      S[11] && /*value*/
      S[1] !== null && /*interactive*/
      S[7] ? g ? (g.p(S, R), R[0] & /*showClearButton, value, interactive*/
      2178 && Z(g, 1)) : (g = Vs(S), g.c(), Z(g, 1), g.m(n, null)) : g && (Yt(), $(g, 1, 1, () => {
        g = null;
      }), Xt());
      const N = {};
      R[0] & /*value, active_source*/
      3 && (N.hidden = /*value*/
      S[1] !== null || /*active_source*/
      S[0] === "webcam"), R[0] & /*active_source*/
      1 && (N.filetype = /*active_source*/
      S[0] === "clipboard" ? "clipboard" : "image/*"), R[0] & /*root*/
      64 && (N.root = /*root*/
      S[6]), R[0] & /*max_file_size*/
      8388608 && (N.max_file_size = /*max_file_size*/
      S[23]), R[0] & /*sources*/
      16 && (N.disable_click = !/*sources*/
      S[4].includes("upload")), R[0] & /*cli_upload*/
      16777216 && (N.upload = /*cli_upload*/
      S[24]), R[0] & /*stream_handler*/
      33554432 && (N.stream_handler = /*stream_handler*/
      S[25]), R[0] & /*value*/
      2 | R[1] & /*$$scope*/
      1048576 && (N.$$scope = { dirty: R, ctx: S }), !u && R[0] & /*uploading*/
      67108864 && (u = !0, N.uploading = /*uploading*/
      S[26], Nl(() => u = !1)), !c && R[0] & /*dragging*/
      134217728 && (c = !0, N.dragging = /*dragging*/
      S[27], Nl(() => c = !1)), f.$set(N), /*value*/
      S[1] === null && /*active_source*/
      S[0] === "webcam" ? z ? (z.p(S, R), R[0] & /*value, active_source*/
      3 && Z(z, 1)) : (z = Zs(S), z.c(), Z(z, 1), z.m(a, d)) : z && (Yt(), $(z, 1, 1, () => {
        z = null;
      }), Xt()), /*value*/
      S[1] !== null ? y ? (y.p(S, R), R[0] & /*value*/
      2 && Z(y, 1)) : (y = Ks(S), y.c(), Z(y, 1), y.m(a, null)) : y && (Yt(), $(y, 1, 1, () => {
        y = null;
      }), Xt()), R[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (S[4].length > 1 || /*sources*/
      S[4].includes("clipboard")) && /*value*/
      S[1] === null && /*interactive*/
      S[7]), h ? A ? (A.p(S, R), R[0] & /*sources, value, interactive*/
      146 && Z(A, 1)) : (A = Gs(S), A.c(), Z(A, 1), A.m(r, null)) : A && (Yt(), $(A, 1, 1, () => {
        A = null;
      }), Xt());
    },
    i(S) {
      p || (Z(e.$$.fragment, S), Z(w), Z(b), Z(g), Z(f.$$.fragment, S), Z(z), Z(y), Z(A), p = !0);
    },
    o(S) {
      $(e.$$.fragment, S), $(w), $(b), $(g), $(f.$$.fragment, S), $(z), $(y), $(A), p = !1;
    },
    d(S) {
      S && (Zt(t), Zt(n), Zt(s), Zt(r)), ht(e, S), w && w.d(), b && b.d(), g && g.d(), l[39](null), ht(f), z && z.d(), y && y.d(), A && A.d();
    }
  };
}
function bm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(B, wt, st, tn) {
    function ei(E) {
      return E instanceof st ? E : new st(function(H) {
        H(E);
      });
    }
    return new (st || (st = Promise))(function(E, H) {
      function ee(Q) {
        try {
          re(tn.next(Q));
        } catch (at) {
          H(at);
        }
      }
      function be(Q) {
        try {
          re(tn.throw(Q));
        } catch (at) {
          H(at);
        }
      }
      function re(Q) {
        Q.done ? E(Q.value) : ei(Q.value).then(ee, be);
      }
      re((tn = tn.apply(B, wt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: u = !1 } = e, { root: c } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: p } = e, { boxesAlpha: w } = e, { labelList: b } = e, { labelColors: g } = e, { boxMinSize: k } = e, { handleSize: C } = e, { boxThickness: v } = e, { disableEditBoxes: z } = e, { singleBox: y } = e, { showRemoveButton: A } = e, { handlesCursor: S } = e, { boxSelectedThickness: R } = e, { max_file_size: L = null } = e, { cli_upload: N } = e, { stream_handler: J } = e, x, V = !1, { active_source: U = null } = e;
  function T({ detail: B }) {
    t(1, s = new Ns()), t(1, s.image = B, s), O("upload");
  }
  function K() {
    ue(), O("clear"), O("change");
  }
  function D(B) {
    return o(this, void 0, void 0, function* () {
      const wt = yield x.load_files([new File([B], "webcam.png")]), st = (wt == null ? void 0 : wt[0]) || null;
      st ? (t(1, s = new Ns()), t(1, s.image = st, s)) : t(1, s = null), yield dm(), O("change");
    });
  }
  const O = _m();
  let le = !1;
  function ae(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          x.paste_clipboard();
          break;
      }
    });
  }
  function ue() {
    t(1, s = null);
  }
  const I = async (B) => B === null ? "" : `<img src="${await Ic(B.image)}" />`;
  function Me(B) {
    En.call(this, l, B);
  }
  function M(B) {
    En.call(this, l, B);
  }
  function F(B) {
    xn[B ? "unshift" : "push"](() => {
      x = B, t(28, x);
    });
  }
  function G(B) {
    V = B, t(26, V);
  }
  function q(B) {
    le = B, t(27, le);
  }
  function ce(B) {
    En.call(this, l, B);
  }
  const ge = (B) => D(B.detail), Ae = (B) => D(B.detail);
  function ot(B) {
    En.call(this, l, B);
  }
  function Le(B) {
    En.call(this, l, B);
  }
  const Fe = (B) => D(B.detail);
  function Ue(B) {
    s = B, t(1, s);
  }
  const Lt = () => O("change");
  function $l(B) {
    U = B, t(0, U), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, u = B.selectable), "root" in B && t(6, c = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, m = B.showShareButton), "showDownloadButton" in B && t(10, h = B.showDownloadButton), "showClearButton" in B && t(11, p = B.showClearButton), "boxesAlpha" in B && t(12, w = B.boxesAlpha), "labelList" in B && t(13, b = B.labelList), "labelColors" in B && t(14, g = B.labelColors), "boxMinSize" in B && t(15, k = B.boxMinSize), "handleSize" in B && t(16, C = B.handleSize), "boxThickness" in B && t(17, v = B.boxThickness), "disableEditBoxes" in B && t(18, z = B.disableEditBoxes), "singleBox" in B && t(19, y = B.singleBox), "showRemoveButton" in B && t(20, A = B.showRemoveButton), "handlesCursor" in B && t(21, S = B.handlesCursor), "boxSelectedThickness" in B && t(22, R = B.boxSelectedThickness), "max_file_size" in B && t(23, L = B.max_file_size), "cli_upload" in B && t(24, N = B.cli_upload), "stream_handler" in B && t(25, J = B.stream_handler), "active_source" in B && t(0, U = B.active_source), "$$scope" in B && t(51, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    67108864 && V && ue(), l.$$.dirty[0] & /*dragging*/
    134217728 && O("drag", le), l.$$.dirty[0] & /*active_source, sources*/
    17 && !U && f && t(0, U = f[0]);
  }, [
    U,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    m,
    h,
    p,
    w,
    b,
    g,
    k,
    C,
    v,
    z,
    y,
    A,
    S,
    R,
    L,
    N,
    J,
    V,
    le,
    x,
    T,
    K,
    D,
    O,
    ae,
    ue,
    n,
    I,
    Me,
    M,
    F,
    G,
    q,
    ce,
    ge,
    Ae,
    ot,
    Le,
    Fe,
    Ue,
    Lt,
    $l,
    i
  ];
}
class wm extends lm {
  constructor(e) {
    super(), rm(
      this,
      e,
      bm,
      gm,
      um,
      {
        value: 1,
        label: 2,
        show_label: 3,
        sources: 4,
        selectable: 5,
        root: 6,
        interactive: 7,
        i18n: 8,
        showShareButton: 9,
        showDownloadButton: 10,
        showClearButton: 11,
        boxesAlpha: 12,
        labelList: 13,
        labelColors: 14,
        boxMinSize: 15,
        handleSize: 16,
        boxThickness: 17,
        disableEditBoxes: 18,
        singleBox: 19,
        showRemoveButton: 20,
        handlesCursor: 21,
        boxSelectedThickness: 22,
        max_file_size: 23,
        cli_upload: 24,
        stream_handler: 25,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: pm,
  attr: Ml,
  detach: ar,
  element: rr,
  init: vm,
  insert: fr,
  noop: Js,
  safe_not_equal: km,
  src_url_equal: Qs,
  toggle_class: St
} = window.__gradio__svelte__internal;
function xs(l) {
  let e, t;
  return {
    c() {
      e = rr("img"), Qs(e.src, t = /*value*/
      l[0].url) || Ml(e, "src", t), Ml(e, "alt", "");
    },
    m(n, i) {
      fr(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Qs(e.src, t = /*value*/
      n[0].url) && Ml(e, "src", t);
    },
    d(n) {
      n && ar(e);
    }
  };
}
function ym(l) {
  let e, t = (
    /*value*/
    l[0] && xs(l)
  );
  return {
    c() {
      e = rr("div"), t && t.c(), Ml(e, "class", "container svelte-1sgcyba"), St(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), St(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), St(
        e,
        "selected",
        /*selected*/
        l[2]
      ), St(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      fr(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = xs(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && St(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && St(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && St(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && St(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Js,
    o: Js,
    d(n) {
      n && ar(e), t && t.d();
    }
  };
}
function Cm(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class Zm extends pm {
  constructor(e) {
    super(), vm(this, e, Cm, ym, km, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Sm,
  add_flush_callback: $s,
  assign: zm,
  bind: ea,
  binding_callbacks: ta,
  check_outros: qm,
  create_component: xt,
  destroy_component: $t,
  detach: ur,
  empty: Bm,
  flush: P,
  get_spread_object: Em,
  get_spread_update: Mm,
  group_outros: Am,
  init: Lm,
  insert: cr,
  mount_component: en,
  safe_not_equal: Dm,
  space: Rm,
  transition_in: gt,
  transition_out: bt
} = window.__gradio__svelte__internal;
function Tm(l) {
  let e, t;
  return e = new lu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Hm] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      xt(e.$$.fragment);
    },
    m(n, i) {
      en(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function Im(l) {
  let e, t;
  return e = new ma({
    props: {
      i18n: (
        /*gradio*/
        l[30].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      xt(e.$$.fragment);
    },
    m(n, i) {
      en(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      1073741824 && (o.i18n = /*gradio*/
      n[30].i18n), e.$set(o);
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function jm(l) {
  let e, t;
  return e = new ma({
    props: {
      i18n: (
        /*gradio*/
        l[30].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      xt(e.$$.fragment);
    },
    m(n, i) {
      en(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      1073741824 && (o.i18n = /*gradio*/
      n[30].i18n), e.$set(o);
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function Hm(l) {
  let e, t;
  return e = new ra({}), {
    c() {
      xt(e.$$.fragment);
    },
    m(n, i) {
      en(e, n, i), t = !0;
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function Fm(l) {
  let e, t, n, i;
  const o = [jm, Im, Tm], s = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[32] === "upload" ? 0 : (
        /*active_source*/
        a[32] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Bm();
    },
    m(a, f) {
      s[e].m(a, f), cr(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Am(), bt(s[u], 1, 1, () => {
        s[u] = null;
      }), qm(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), gt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (gt(t), i = !0);
    },
    o(a) {
      bt(t), i = !1;
    },
    d(a) {
      a && ur(n), s[e].d(a);
    }
  };
}
function Xm(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[30].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[30].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = zm(a, r[_]);
  e = new G_({ props: a });
  function f(_) {
    l[33](_);
  }
  function u(_) {
    l[34](_);
  }
  let c = {
    selectable: (
      /*_selectable*/
      l[10]
    ),
    root: (
      /*root*/
      l[7]
    ),
    sources: (
      /*sources*/
      l[14]
    ),
    interactive: (
      /*interactive*/
      l[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      l[15]
    ),
    showShareButton: (
      /*show_share_button*/
      l[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      l[17]
    ),
    i18n: (
      /*gradio*/
      l[30].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      l[19]
    ),
    labelList: (
      /*label_list*/
      l[20]
    ),
    labelColors: (
      /*label_colors*/
      l[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      l[22]
    ),
    label: (
      /*label*/
      l[5]
    ),
    show_label: (
      /*show_label*/
      l[6]
    ),
    max_file_size: (
      /*gradio*/
      l[30].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[30].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[30].client.stream
    ),
    handleSize: (
      /*handle_size*/
      l[23]
    ),
    boxThickness: (
      /*box_thickness*/
      l[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      l[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      l[26]
    ),
    singleBox: (
      /*single_box*/
      l[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      l[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      l[29]
    ),
    $$slots: { default: [Fm] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[32] !== void 0 && (c.active_source = /*active_source*/
    l[32]), /*value*/
    l[0] !== void 0 && (c.value = /*value*/
    l[0]), n = new wm({ props: c }), ta.push(() => ea(n, "active_source", f)), ta.push(() => ea(n, "value", u)), n.$on(
      "change",
      /*change_handler*/
      l[35]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[36]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[37]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[38]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[39]
    ), n.$on(
      "select",
      /*select_handler*/
      l[40]
    ), n.$on(
      "share",
      /*share_handler*/
      l[41]
    ), n.$on(
      "error",
      /*error_handler*/
      l[42]
    ), {
      c() {
        xt(e.$$.fragment), t = Rm(), xt(n.$$.fragment);
      },
      m(_, d) {
        en(e, _, d), cr(_, t, d), en(n, _, d), s = !0;
      },
      p(_, d) {
        const m = d[0] & /*gradio, loading_status*/
        1073741826 ? Mm(r, [
          d[0] & /*gradio*/
          1073741824 && {
            autoscroll: (
              /*gradio*/
              _[30].autoscroll
            )
          },
          d[0] & /*gradio*/
          1073741824 && { i18n: (
            /*gradio*/
            _[30].i18n
          ) },
          d[0] & /*loading_status*/
          2 && Em(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(m);
        const h = {};
        d[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (h.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        _[17]), d[0] & /*gradio*/
        1073741824 && (h.i18n = /*gradio*/
        _[30].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        _[6]), d[0] & /*gradio*/
        1073741824 && (h.max_file_size = /*gradio*/
        _[30].max_file_size), d[0] & /*gradio*/
        1073741824 && (h.cli_upload = /*gradio*/
        _[30].client.upload), d[0] & /*gradio*/
        1073741824 && (h.stream_handler = /*gradio*/
        _[30].client.stream), d[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*gradio*/
        1073741824 | d[1] & /*$$scope, active_source*/
        4098 && (h.$$scope = { dirty: d, ctx: _ }), !i && d[1] & /*active_source*/
        2 && (i = !0, h.active_source = /*active_source*/
        _[32], $s(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        _[0], $s(() => o = !1)), n.$set(h);
      },
      i(_) {
        s || (gt(e.$$.fragment, _), gt(n.$$.fragment, _), s = !0);
      },
      o(_) {
        bt(e.$$.fragment, _), bt(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && ur(t), $t(e, _), $t(n, _);
      }
    }
  );
}
function Ym(l) {
  let e, t;
  return e = new Br({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[31] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        l[2]
      ),
      elem_classes: (
        /*elem_classes*/
        l[3]
      ),
      height: (
        /*height*/
        l[8] || void 0
      ),
      width: (
        /*width*/
        l[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        l[11]
      ),
      scale: (
        /*scale*/
        l[12]
      ),
      min_width: (
        /*min_width*/
        l[13]
      ),
      $$slots: { default: [Xm] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      xt(e.$$.fragment);
    },
    m(n, i) {
      en(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      1 && (o.border_mode = /*dragging*/
      n[31] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), i[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), i[0] & /*height*/
      256 && (o.height = /*height*/
      n[8] || void 0), i[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), i[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), i[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), i[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, value, loading_status*/
      2147468515 | i[1] & /*$$scope, active_source, dragging*/
      4099 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function Nm(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: u } = e, { width: c } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: p } = e, { sources: w = ["upload", "webcam", "clipboard"] } = e, { show_download_button: b } = e, { show_share_button: g } = e, { show_clear_button: k } = e, { interactive: C } = e, { boxes_alpha: v } = e, { label_list: z } = e, { label_colors: y } = e, { box_min_size: A } = e, { handle_size: S } = e, { box_thickness: R } = e, { box_selected_thickness: L } = e, { disable_edit_boxes: N } = e, { single_box: J } = e, { show_remove_button: x } = e, { handles_cursor: V } = e, { gradio: U } = e, T, K = null;
  function D(q) {
    K = q, t(32, K);
  }
  function O(q) {
    s = q, t(0, s);
  }
  const le = () => U.dispatch("change"), ae = () => U.dispatch("edit"), ue = () => {
    U.dispatch("clear");
  }, I = ({ detail: q }) => t(31, T = q), Me = () => U.dispatch("upload"), M = ({ detail: q }) => U.dispatch("select", q), F = ({ detail: q }) => U.dispatch("share", q), G = ({ detail: q }) => {
    t(1, p = p || {}), t(1, p.status = "error", p), U.dispatch("error", q);
  };
  return l.$$set = (q) => {
    "elem_id" in q && t(2, n = q.elem_id), "elem_classes" in q && t(3, i = q.elem_classes), "visible" in q && t(4, o = q.visible), "value" in q && t(0, s = q.value), "label" in q && t(5, r = q.label), "show_label" in q && t(6, a = q.show_label), "root" in q && t(7, f = q.root), "height" in q && t(8, u = q.height), "width" in q && t(9, c = q.width), "_selectable" in q && t(10, _ = q._selectable), "container" in q && t(11, d = q.container), "scale" in q && t(12, m = q.scale), "min_width" in q && t(13, h = q.min_width), "loading_status" in q && t(1, p = q.loading_status), "sources" in q && t(14, w = q.sources), "show_download_button" in q && t(15, b = q.show_download_button), "show_share_button" in q && t(16, g = q.show_share_button), "show_clear_button" in q && t(17, k = q.show_clear_button), "interactive" in q && t(18, C = q.interactive), "boxes_alpha" in q && t(19, v = q.boxes_alpha), "label_list" in q && t(20, z = q.label_list), "label_colors" in q && t(21, y = q.label_colors), "box_min_size" in q && t(22, A = q.box_min_size), "handle_size" in q && t(23, S = q.handle_size), "box_thickness" in q && t(24, R = q.box_thickness), "box_selected_thickness" in q && t(25, L = q.box_selected_thickness), "disable_edit_boxes" in q && t(26, N = q.disable_edit_boxes), "single_box" in q && t(27, J = q.single_box), "show_remove_button" in q && t(28, x = q.show_remove_button), "handles_cursor" in q && t(29, V = q.handles_cursor), "gradio" in q && t(30, U = q.gradio);
  }, [
    s,
    p,
    n,
    i,
    o,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    m,
    h,
    w,
    b,
    g,
    k,
    C,
    v,
    z,
    y,
    A,
    S,
    R,
    L,
    N,
    J,
    x,
    V,
    U,
    T,
    K,
    D,
    O,
    le,
    ae,
    ue,
    I,
    Me,
    M,
    F,
    G
  ];
}
class Km extends Sm {
  constructor(e) {
    super(), Lm(
      this,
      e,
      Nm,
      Ym,
      Dm,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        root: 7,
        height: 8,
        width: 9,
        _selectable: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        loading_status: 1,
        sources: 14,
        show_download_button: 15,
        show_share_button: 16,
        show_clear_button: 17,
        interactive: 18,
        boxes_alpha: 19,
        label_list: 20,
        label_colors: 21,
        box_min_size: 22,
        handle_size: 23,
        box_thickness: 24,
        box_selected_thickness: 25,
        disable_edit_boxes: 26,
        single_box: 27,
        show_remove_button: 28,
        handles_cursor: 29,
        gradio: 30
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), P();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), P();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), P();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), P();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), P();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), P();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), P();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), P();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), P();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), P();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), P();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), P();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), P();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), P();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), P();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), P();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), P();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), P();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), P();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), P();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), P();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), P();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), P();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), P();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), P();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), P();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), P();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), P();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), P();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), P();
  }
  get gradio() {
    return this.$$.ctx[30];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), P();
  }
}
export {
  Zm as BaseExample,
  Km as default
};
