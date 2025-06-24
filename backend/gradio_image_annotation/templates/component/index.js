const {
  SvelteComponent: vf,
  assign: kf,
  create_slot: yf,
  detach: Cf,
  element: Sf,
  get_all_dirty_from_scope: zf,
  get_slot_changes: Bf,
  get_spread_update: Df,
  init: qf,
  insert: Lf,
  safe_not_equal: Mf,
  set_dynamic_element_data: Gs,
  set_style: Ye,
  toggle_class: ot,
  transition_in: Ga,
  transition_out: Ja,
  update_slot_base: Ef
} = window.__gradio__svelte__internal;
function Rf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), s = yf(
    l,
    i,
    /*$$scope*/
    i[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      i[7]
    ) },
    { id: (
      /*elem_id*/
      i[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      i[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = kf(r, o[a]);
  return {
    c() {
      e = Sf(
        /*tag*/
        i[14]
      ), s && s.c(), Gs(
        /*tag*/
        i[14]
      )(e, r), ot(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), ot(
        e,
        "padded",
        /*padding*/
        i[6]
      ), ot(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), ot(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), ot(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ye(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ye(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ye(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ye(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ye(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ye(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ye(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Lf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && Ef(
        s,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? Bf(
          l,
          /*$$scope*/
          a[17],
          f,
          null
        ) : zf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Gs(
        /*tag*/
        a[14]
      )(e, r = Df(o, [
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
      ])), ot(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), ot(
        e,
        "padded",
        /*padding*/
        a[6]
      ), ot(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), ot(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), ot(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Ye(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Ye(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Ye(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Ye(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Ye(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Ye(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ga(s, a), n = !0);
    },
    o(a) {
      Ja(s, a), n = !1;
    },
    d(a) {
      a && Cf(e), s && s.d(a);
    }
  };
}
function Af(i) {
  let e, t = (
    /*tag*/
    i[14] && Rf(i)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, l) {
      t && t.m(n, l), e = !0;
    },
    p(n, [l]) {
      /*tag*/
      n[14] && t.p(n, l);
    },
    i(n) {
      e || (Ga(t, n), e = !0);
    },
    o(n) {
      Ja(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Wf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: p = null } = e, { min_width: w = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const D = (v) => {
    if (v !== void 0) {
      if (typeof v == "number")
        return v + "px";
      if (typeof v == "string")
        return v;
    }
  };
  return i.$$set = (v) => {
    "height" in v && t(0, s = v.height), "width" in v && t(1, o = v.width), "elem_id" in v && t(2, r = v.elem_id), "elem_classes" in v && t(3, a = v.elem_classes), "variant" in v && t(4, f = v.variant), "border_mode" in v && t(5, c = v.border_mode), "padding" in v && t(6, u = v.padding), "type" in v && t(16, _ = v.type), "test_id" in v && t(7, d = v.test_id), "explicit_call" in v && t(8, m = v.explicit_call), "container" in v && t(9, h = v.container), "visible" in v && t(10, g = v.visible), "allow_overflow" in v && t(11, b = v.allow_overflow), "scale" in v && t(12, p = v.scale), "min_width" in v && t(13, w = v.min_width), "$$scope" in v && t(17, l = v.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    d,
    m,
    h,
    g,
    b,
    p,
    w,
    k,
    D,
    _,
    l,
    n
  ];
}
class Xf extends vf {
  constructor(e) {
    super(), qf(this, e, Wf, Af, Mf, {
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
  SvelteComponent: Yf,
  attr: If,
  create_slot: Hf,
  detach: Tf,
  element: jf,
  get_all_dirty_from_scope: Ff,
  get_slot_changes: Uf,
  init: Vf,
  insert: Nf,
  safe_not_equal: Of,
  transition_in: Pf,
  transition_out: Kf,
  update_slot_base: Zf
} = window.__gradio__svelte__internal;
function Gf(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Hf(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = jf("div"), l && l.c(), If(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Nf(s, e, o), l && l.m(e, null), t = !0;
    },
    p(s, [o]) {
      l && l.p && (!t || o & /*$$scope*/
      1) && Zf(
        l,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? Uf(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Ff(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Pf(l, s), t = !0);
    },
    o(s) {
      Kf(l, s), t = !1;
    },
    d(s) {
      s && Tf(e), l && l.d(s);
    }
  };
}
function Jf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (s) => {
    "$$scope" in s && t(0, l = s.$$scope);
  }, [l, n];
}
class Qf extends Yf {
  constructor(e) {
    super(), Vf(this, e, Jf, Gf, Of, {});
  }
}
const {
  SvelteComponent: xf,
  attr: Js,
  check_outros: $f,
  create_component: ec,
  create_slot: tc,
  destroy_component: nc,
  detach: Ni,
  element: ic,
  empty: lc,
  get_all_dirty_from_scope: sc,
  get_slot_changes: oc,
  group_outros: ac,
  init: rc,
  insert: Oi,
  mount_component: fc,
  safe_not_equal: cc,
  set_data: uc,
  space: _c,
  text: dc,
  toggle_class: Dn,
  transition_in: ai,
  transition_out: Pi,
  update_slot_base: hc
} = window.__gradio__svelte__internal;
function Qs(i) {
  let e, t;
  return e = new Qf({
    props: {
      $$slots: { default: [mc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ec(e.$$.fragment);
    },
    m(n, l) {
      fc(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l & /*$$scope, info*/
      10 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (ai(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      nc(e, n);
    }
  };
}
function mc(i) {
  let e;
  return {
    c() {
      e = dc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Oi(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && uc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ni(e);
    }
  };
}
function gc(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[2].default
  ), o = tc(
    s,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Qs(i)
  );
  return {
    c() {
      e = ic("span"), o && o.c(), t = _c(), r && r.c(), n = lc(), Js(e, "data-testid", "block-info"), Js(e, "class", "svelte-22c38v"), Dn(e, "sr-only", !/*show_label*/
      i[0]), Dn(e, "hide", !/*show_label*/
      i[0]), Dn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, f) {
      Oi(a, e, f), o && o.m(e, null), Oi(a, t, f), r && r.m(a, f), Oi(a, n, f), l = !0;
    },
    p(a, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      8) && hc(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        l ? oc(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : sc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || f & /*show_label*/
      1) && Dn(e, "sr-only", !/*show_label*/
      a[0]), (!l || f & /*show_label*/
      1) && Dn(e, "hide", !/*show_label*/
      a[0]), (!l || f & /*info*/
      2) && Dn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && ai(r, 1)) : (r = Qs(a), r.c(), ai(r, 1), r.m(n.parentNode, n)) : r && (ac(), Pi(r, 1, 1, () => {
        r = null;
      }), $f());
    },
    i(a) {
      l || (ai(o, a), ai(r), l = !0);
    },
    o(a) {
      Pi(o, a), Pi(r), l = !1;
    },
    d(a) {
      a && (Ni(e), Ni(t), Ni(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function bc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [s, o, n, l];
}
class Qa extends xf {
  constructor(e) {
    super(), rc(this, e, bc, gc, cc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: wc,
  append: Sl,
  attr: Si,
  create_component: pc,
  destroy_component: vc,
  detach: kc,
  element: xs,
  init: yc,
  insert: Cc,
  mount_component: Sc,
  safe_not_equal: zc,
  set_data: Bc,
  space: Dc,
  text: qc,
  toggle_class: It,
  transition_in: Lc,
  transition_out: Mc
} = window.__gradio__svelte__internal;
function Ec(i) {
  let e, t, n, l, s, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = xs("label"), t = xs("span"), pc(n.$$.fragment), l = Dc(), s = qc(
        /*label*/
        i[0]
      ), Si(t, "class", "svelte-9gxdi0"), Si(e, "for", ""), Si(e, "data-testid", "block-label"), Si(e, "class", "svelte-9gxdi0"), It(e, "hide", !/*show_label*/
      i[2]), It(e, "sr-only", !/*show_label*/
      i[2]), It(
        e,
        "float",
        /*float*/
        i[4]
      ), It(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Cc(r, e, a), Sl(e, t), Sc(n, t, null), Sl(e, l), Sl(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Bc(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && It(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && It(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && It(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && It(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Lc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Mc(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && kc(e), vc(n);
    }
  };
}
function Rc(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, s, o, r];
}
class Ac extends wc {
  constructor(e) {
    super(), yc(this, e, Rc, Ec, zc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Wc,
  append: ds,
  attr: St,
  bubble: Xc,
  create_component: Yc,
  destroy_component: Ic,
  detach: xa,
  element: hs,
  init: Hc,
  insert: $a,
  listen: Tc,
  mount_component: jc,
  safe_not_equal: Fc,
  set_data: Uc,
  set_style: qn,
  space: Vc,
  text: Nc,
  toggle_class: Be,
  transition_in: Oc,
  transition_out: Pc
} = window.__gradio__svelte__internal;
function $s(i) {
  let e, t;
  return {
    c() {
      e = hs("span"), t = Nc(
        /*label*/
        i[1]
      ), St(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      $a(n, e, l), ds(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Uc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && xa(e);
    }
  };
}
function Kc(i) {
  let e, t, n, l, s, o, r, a = (
    /*show_label*/
    i[2] && $s(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = hs("button"), a && a.c(), t = Vc(), n = hs("div"), Yc(l.$$.fragment), St(n, "class", "svelte-1lrphxw"), Be(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Be(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Be(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], St(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), St(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), St(
        e,
        "title",
        /*label*/
        i[1]
      ), St(e, "class", "svelte-1lrphxw"), Be(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Be(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Be(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Be(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), qn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), qn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), qn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(f, c) {
      $a(f, e, c), a && a.m(e, null), ds(e, t), ds(e, n), jc(l, n, null), s = !0, o || (r = Tc(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = $s(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
      16) && Be(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!s || c & /*size*/
      16) && Be(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!s || c & /*size*/
      16) && Be(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!s || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!s || c & /*label*/
      2) && St(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && St(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && St(
        e,
        "title",
        /*label*/
        f[1]
      ), (!s || c & /*pending*/
      8) && Be(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!s || c & /*padded*/
      32) && Be(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!s || c & /*highlight*/
      64) && Be(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!s || c & /*transparent*/
      512) && Be(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && qn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && qn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && qn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (Oc(l.$$.fragment, f), s = !0);
    },
    o(f) {
      Pc(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && xa(e), a && a.d(), Ic(l), o = !1, r();
    }
  };
}
function Zc(i, e, t) {
  let n, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(p) {
    Xc.call(this, i, p);
  }
  return i.$$set = (p) => {
    "Icon" in p && t(0, l = p.Icon), "label" in p && t(1, s = p.label), "show_label" in p && t(2, o = p.show_label), "pending" in p && t(3, r = p.pending), "size" in p && t(4, a = p.size), "padded" in p && t(5, f = p.padded), "highlight" in p && t(6, c = p.highlight), "disabled" in p && t(7, u = p.disabled), "hasPopup" in p && t(8, _ = p.hasPopup), "color" in p && t(13, d = p.color), "transparent" in p && t(9, m = p.transparent), "background" in p && t(10, h = p.background), "offset" in p && t(11, g = p.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    l,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    m,
    h,
    g,
    n,
    d,
    b
  ];
}
class ul extends Wc {
  constructor(e) {
    super(), Hc(this, e, Zc, Kc, Fc, {
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
  SvelteComponent: Gc,
  append: Jc,
  attr: zl,
  binding_callbacks: Qc,
  create_slot: xc,
  detach: $c,
  element: eo,
  get_all_dirty_from_scope: eu,
  get_slot_changes: tu,
  init: nu,
  insert: iu,
  safe_not_equal: lu,
  toggle_class: Ht,
  transition_in: su,
  transition_out: ou,
  update_slot_base: au
} = window.__gradio__svelte__internal;
function ru(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), s = xc(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = eo("div"), t = eo("div"), s && s.c(), zl(t, "class", "icon svelte-3w3rth"), zl(e, "class", "empty svelte-3w3rth"), zl(e, "aria-label", "Empty value"), Ht(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Ht(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Ht(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Ht(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      iu(o, e, r), Jc(e, t), s && s.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && au(
        s,
        l,
        o,
        /*$$scope*/
        o[4],
        n ? tu(
          l,
          /*$$scope*/
          o[4],
          r,
          null
        ) : eu(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ht(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Ht(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ht(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Ht(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (su(s, o), n = !0);
    },
    o(o) {
      ou(s, o), n = !1;
    },
    d(o) {
      o && $c(e), s && s.d(o), i[6](null);
    }
  };
}
function fu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    Qc[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, o = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, s = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [o, r, a, n, s, l, c];
}
class cu extends Gc {
  constructor(e) {
    super(), nu(this, e, fu, ru, lu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: uu,
  append: to,
  attr: De,
  detach: _u,
  init: du,
  insert: hu,
  noop: Bl,
  safe_not_equal: mu,
  svg_element: Dl
} = window.__gradio__svelte__internal;
function gu(i) {
  let e, t, n;
  return {
    c() {
      e = Dl("svg"), t = Dl("path"), n = Dl("circle"), De(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), De(n, "cx", "12"), De(n, "cy", "13"), De(n, "r", "4"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-camera");
    },
    m(l, s) {
      hu(l, e, s), to(e, t), to(e, n);
    },
    p: Bl,
    i: Bl,
    o: Bl,
    d(l) {
      l && _u(e);
    }
  };
}
class bu extends uu {
  constructor(e) {
    super(), du(this, e, null, gu, mu, {});
  }
}
const {
  SvelteComponent: wu,
  append: pu,
  attr: Qe,
  detach: vu,
  init: ku,
  insert: yu,
  noop: ql,
  safe_not_equal: Cu,
  svg_element: no
} = window.__gradio__svelte__internal;
function Su(i) {
  let e, t;
  return {
    c() {
      e = no("svg"), t = no("circle"), Qe(t, "cx", "12"), Qe(t, "cy", "12"), Qe(t, "r", "10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "stroke-width", "1.5"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-circle");
    },
    m(n, l) {
      yu(n, e, l), pu(e, t);
    },
    p: ql,
    i: ql,
    o: ql,
    d(n) {
      n && vu(e);
    }
  };
}
class zu extends wu {
  constructor(e) {
    super(), ku(this, e, null, Su, Cu, {});
  }
}
const {
  SvelteComponent: Bu,
  append: Ll,
  attr: xe,
  detach: Du,
  init: qu,
  insert: Lu,
  noop: Ml,
  safe_not_equal: Mu,
  set_style: at,
  svg_element: zi
} = window.__gradio__svelte__internal;
function Eu(i) {
  let e, t, n, l;
  return {
    c() {
      e = zi("svg"), t = zi("g"), n = zi("path"), l = zi("path"), xe(n, "d", "M18,6L6.087,17.913"), at(n, "fill", "none"), at(n, "fill-rule", "nonzero"), at(n, "stroke-width", "2px"), xe(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), xe(l, "d", "M4.364,4.364L19.636,19.636"), at(l, "fill", "none"), at(l, "fill-rule", "nonzero"), at(l, "stroke-width", "2px"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "version", "1.1"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), xe(e, "xml:space", "preserve"), xe(e, "stroke", "currentColor"), at(e, "fill-rule", "evenodd"), at(e, "clip-rule", "evenodd"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      Lu(s, e, o), Ll(e, t), Ll(t, n), Ll(e, l);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(s) {
      s && Du(e);
    }
  };
}
class er extends Bu {
  constructor(e) {
    super(), qu(this, e, null, Eu, Mu, {});
  }
}
const {
  SvelteComponent: Ru,
  append: Au,
  attr: ti,
  detach: Wu,
  init: Xu,
  insert: Yu,
  noop: El,
  safe_not_equal: Iu,
  svg_element: io
} = window.__gradio__svelte__internal;
function Hu(i) {
  let e, t;
  return {
    c() {
      e = io("svg"), t = io("path"), ti(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ti(t, "fill", "currentColor"), ti(e, "id", "icon"), ti(e, "xmlns", "http://www.w3.org/2000/svg"), ti(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Yu(n, e, l), Au(e, t);
    },
    p: El,
    i: El,
    o: El,
    d(n) {
      n && Wu(e);
    }
  };
}
class Tu extends Ru {
  constructor(e) {
    super(), Xu(this, e, null, Hu, Iu, {});
  }
}
const {
  SvelteComponent: ju,
  append: Fu,
  attr: Ln,
  detach: Uu,
  init: Vu,
  insert: Nu,
  noop: Rl,
  safe_not_equal: Ou,
  svg_element: lo
} = window.__gradio__svelte__internal;
function Pu(i) {
  let e, t;
  return {
    c() {
      e = lo("svg"), t = lo("path"), Ln(t, "fill", "currentColor"), Ln(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Ln(e, "xmlns", "http://www.w3.org/2000/svg"), Ln(e, "width", "100%"), Ln(e, "height", "100%"), Ln(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Nu(n, e, l), Fu(e, t);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(n) {
      n && Uu(e);
    }
  };
}
class Ku extends ju {
  constructor(e) {
    super(), Vu(this, e, null, Pu, Ou, {});
  }
}
const {
  SvelteComponent: Zu,
  append: Gu,
  attr: Mn,
  detach: Ju,
  init: Qu,
  insert: xu,
  noop: Al,
  safe_not_equal: $u,
  svg_element: so
} = window.__gradio__svelte__internal;
function e_(i) {
  let e, t;
  return {
    c() {
      e = so("svg"), t = so("path"), Mn(t, "d", "M5 8l4 4 4-4z"), Mn(e, "class", "dropdown-arrow svelte-145leq6"), Mn(e, "xmlns", "http://www.w3.org/2000/svg"), Mn(e, "width", "100%"), Mn(e, "height", "100%"), Mn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      xu(n, e, l), Gu(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(n) {
      n && Ju(e);
    }
  };
}
class Ws extends Zu {
  constructor(e) {
    super(), Qu(this, e, null, e_, $u, {});
  }
}
const {
  SvelteComponent: t_,
  append: Wl,
  attr: de,
  detach: n_,
  init: i_,
  insert: l_,
  noop: Xl,
  safe_not_equal: s_,
  svg_element: Bi
} = window.__gradio__svelte__internal;
function o_(i) {
  let e, t, n, l;
  return {
    c() {
      e = Bi("svg"), t = Bi("rect"), n = Bi("circle"), l = Bi("polyline"), de(t, "x", "3"), de(t, "y", "3"), de(t, "width", "18"), de(t, "height", "18"), de(t, "rx", "2"), de(t, "ry", "2"), de(n, "cx", "8.5"), de(n, "cy", "8.5"), de(n, "r", "1.5"), de(l, "points", "21 15 16 10 5 21"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "1.5"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-image");
    },
    m(s, o) {
      l_(s, e, o), Wl(e, t), Wl(e, n), Wl(e, l);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(s) {
      s && n_(e);
    }
  };
}
let tr = class extends t_ {
  constructor(e) {
    super(), i_(this, e, null, o_, s_, {});
  }
};
const {
  SvelteComponent: a_,
  append: r_,
  attr: Di,
  detach: f_,
  init: c_,
  insert: u_,
  noop: Yl,
  safe_not_equal: __,
  svg_element: oo
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t;
  return {
    c() {
      e = oo("svg"), t = oo("path"), Di(t, "fill", "currentColor"), Di(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Di(e, "xmlns", "http://www.w3.org/2000/svg"), Di(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      u_(n, e, l), r_(e, t);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(n) {
      n && f_(e);
    }
  };
}
class nr extends a_ {
  constructor(e) {
    super(), c_(this, e, null, d_, __, {});
  }
}
const {
  SvelteComponent: h_,
  append: qi,
  attr: he,
  detach: m_,
  init: g_,
  insert: b_,
  noop: Il,
  safe_not_equal: w_,
  svg_element: ni
} = window.__gradio__svelte__internal;
function p_(i) {
  let e, t, n, l, s;
  return {
    c() {
      e = ni("svg"), t = ni("path"), n = ni("path"), l = ni("line"), s = ni("line"), he(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), he(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), he(l, "x1", "12"), he(l, "y1", "19"), he(l, "x2", "12"), he(l, "y2", "23"), he(s, "x1", "8"), he(s, "y1", "23"), he(s, "x2", "16"), he(s, "y2", "23"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "fill", "none"), he(e, "stroke", "currentColor"), he(e, "stroke-width", "2"), he(e, "stroke-linecap", "round"), he(e, "stroke-linejoin", "round"), he(e, "class", "feather feather-mic");
    },
    m(o, r) {
      b_(o, e, r), qi(e, t), qi(e, n), qi(e, l), qi(e, s);
    },
    p: Il,
    i: Il,
    o: Il,
    d(o) {
      o && m_(e);
    }
  };
}
class v_ extends h_ {
  constructor(e) {
    super(), g_(this, e, null, p_, w_, {});
  }
}
const {
  SvelteComponent: k_,
  append: ao,
  attr: Ue,
  detach: y_,
  init: C_,
  insert: S_,
  noop: Hl,
  safe_not_equal: z_,
  set_style: B_,
  svg_element: Tl
} = window.__gradio__svelte__internal;
function D_(i) {
  let e, t, n;
  return {
    c() {
      e = Tl("svg"), t = Tl("polyline"), n = Tl("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw"), B_(e, "transform", "rotateY(180deg)");
    },
    m(l, s) {
      S_(l, e, s), ao(e, t), ao(e, n);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(l) {
      l && y_(e);
    }
  };
}
class q_ extends k_ {
  constructor(e) {
    super(), C_(this, e, null, D_, z_, {});
  }
}
const {
  SvelteComponent: L_,
  append: M_,
  attr: qe,
  detach: E_,
  init: R_,
  insert: A_,
  noop: jl,
  safe_not_equal: W_,
  svg_element: ro
} = window.__gradio__svelte__internal;
function X_(i) {
  let e, t;
  return {
    c() {
      e = ro("svg"), t = ro("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, l) {
      A_(n, e, l), M_(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && E_(e);
    }
  };
}
class Y_ extends L_ {
  constructor(e) {
    super(), R_(this, e, null, X_, W_, {});
  }
}
const {
  SvelteComponent: I_,
  append: fo,
  attr: Ve,
  detach: H_,
  init: T_,
  insert: j_,
  noop: Fl,
  safe_not_equal: F_,
  svg_element: Ul
} = window.__gradio__svelte__internal;
function U_(i) {
  let e, t, n;
  return {
    c() {
      e = Ul("svg"), t = Ul("polyline"), n = Ul("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw");
    },
    m(l, s) {
      j_(l, e, s), fo(e, t), fo(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(l) {
      l && H_(e);
    }
  };
}
class V_ extends I_ {
  constructor(e) {
    super(), T_(this, e, null, U_, F_, {});
  }
}
const {
  SvelteComponent: N_,
  append: Vl,
  attr: ye,
  detach: O_,
  init: P_,
  insert: K_,
  noop: Nl,
  safe_not_equal: Z_,
  svg_element: Li
} = window.__gradio__svelte__internal;
function G_(i) {
  let e, t, n, l;
  return {
    c() {
      e = Li("svg"), t = Li("path"), n = Li("polyline"), l = Li("line"), ye(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ye(n, "points", "17 8 12 3 7 8"), ye(l, "x1", "12"), ye(l, "y1", "3"), ye(l, "x2", "12"), ye(l, "y2", "15"), ye(e, "xmlns", "http://www.w3.org/2000/svg"), ye(e, "width", "90%"), ye(e, "height", "90%"), ye(e, "viewBox", "0 0 24 24"), ye(e, "fill", "none"), ye(e, "stroke", "currentColor"), ye(e, "stroke-width", "2"), ye(e, "stroke-linecap", "round"), ye(e, "stroke-linejoin", "round"), ye(e, "class", "feather feather-upload");
    },
    m(s, o) {
      K_(s, e, o), Vl(e, t), Vl(e, n), Vl(e, l);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(s) {
      s && O_(e);
    }
  };
}
let ir = class extends N_ {
  constructor(e) {
    super(), P_(this, e, null, G_, Z_, {});
  }
};
const {
  SvelteComponent: J_,
  append: co,
  attr: Tt,
  detach: Q_,
  init: x_,
  insert: $_,
  noop: Ol,
  safe_not_equal: ed,
  svg_element: Pl
} = window.__gradio__svelte__internal;
function td(i) {
  let e, t, n;
  return {
    c() {
      e = Pl("svg"), t = Pl("path"), n = Pl("path"), Tt(t, "fill", "currentColor"), Tt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Tt(n, "fill", "currentColor"), Tt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24");
    },
    m(l, s) {
      $_(l, e, s), co(e, t), co(e, n);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(l) {
      l && Q_(e);
    }
  };
}
let lr = class extends J_ {
  constructor(e) {
    super(), x_(this, e, null, td, ed, {});
  }
};
const nd = [
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
], uo = {
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
nd.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: uo[e][t],
      secondary: uo[e][n]
    }
  }),
  {}
);
class Ki extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function id(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Ki("Must be on Spaces to share.");
  let t, n, l;
  t = ld(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
  const s = new File([t], l, { type: n }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if ((a = o.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await o.json();
      throw new Ki(`Upload failed: ${f.error}`);
    }
    throw new Ki("Upload failed.");
  }
  return await o.text();
}
function ld(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, s = new Uint8Array(l); l--; )
    s[l] = n.charCodeAt(l);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: sd,
  create_component: od,
  destroy_component: ad,
  init: rd,
  mount_component: fd,
  safe_not_equal: cd,
  transition_in: ud,
  transition_out: _d
} = window.__gradio__svelte__internal, { createEventDispatcher: dd } = window.__gradio__svelte__internal;
function hd(i) {
  let e, t;
  return e = new ul({
    props: {
      Icon: Tu,
      label: (
        /*i18n*/
        i[2]("common.share")
      ),
      pending: (
        /*pending*/
        i[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    i[5]
  ), {
    c() {
      od(e.$$.fragment);
    },
    m(n, l) {
      fd(e, n, l), t = !0;
    },
    p(n, [l]) {
      const s = {};
      l & /*i18n*/
      4 && (s.label = /*i18n*/
      n[2]("common.share")), l & /*pending*/
      8 && (s.pending = /*pending*/
      n[3]), e.$set(s);
    },
    i(n) {
      t || (ud(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _d(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ad(e, n);
    }
  };
}
function md(i, e, t) {
  const n = dd();
  let { formatter: l } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await l(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Ki ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (f) => {
    "formatter" in f && t(0, l = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [l, s, o, r, n, a];
}
class gd extends sd {
  constructor(e) {
    super(), rd(this, e, md, hd, cd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: bd,
  append: fn,
  attr: ms,
  check_outros: wd,
  create_component: sr,
  destroy_component: or,
  detach: Zi,
  element: gs,
  group_outros: pd,
  init: vd,
  insert: Gi,
  mount_component: ar,
  safe_not_equal: kd,
  set_data: bs,
  space: ws,
  text: ri,
  toggle_class: _o,
  transition_in: xi,
  transition_out: $i
} = window.__gradio__svelte__internal;
function yd(i) {
  let e, t;
  return e = new ir({}), {
    c() {
      sr(e.$$.fragment);
    },
    m(n, l) {
      ar(e, n, l), t = !0;
    },
    i(n) {
      t || (xi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $i(e.$$.fragment, n), t = !1;
    },
    d(n) {
      or(e, n);
    }
  };
}
function Cd(i) {
  let e, t;
  return e = new nr({}), {
    c() {
      sr(e.$$.fragment);
    },
    m(n, l) {
      ar(e, n, l), t = !0;
    },
    i(n) {
      t || (xi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $i(e.$$.fragment, n), t = !1;
    },
    d(n) {
      or(e, n);
    }
  };
}
function ho(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), l, s, o, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = gs("span"), t = ri("- "), l = ri(n), s = ri(" -"), o = ws(), a = ri(r), ms(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Gi(f, e, c), fn(e, t), fn(e, l), fn(e, s), Gi(f, o, c), Gi(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && bs(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && bs(a, r);
    },
    d(f) {
      f && (Zi(e), Zi(o), Zi(a));
    }
  };
}
function Sd(i) {
  let e, t, n, l, s, o = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, f;
  const c = [Cd, yd], u = [];
  function _(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && ho(i)
  );
  return {
    c() {
      e = gs("div"), t = gs("span"), l.c(), s = ws(), r = ri(o), a = ws(), d && d.c(), ms(t, "class", "icon-wrap svelte-kzcjhc"), _o(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), ms(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Gi(m, e, h), fn(e, t), u[n].m(t, null), fn(e, s), fn(e, r), fn(e, a), d && d.m(e, null), f = !0;
    },
    p(m, [h]) {
      let g = n;
      n = _(m), n !== g && (pd(), $i(u[g], 1, 1, () => {
        u[g] = null;
      }), wd(), l = u[n], l || (l = u[n] = c[n](m), l.c()), xi(l, 1), l.m(t, null)), (!f || h & /*hovered*/
      16) && _o(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!f || h & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && bs(r, o), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = ho(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      f || (xi(l), f = !0);
    },
    o(m) {
      $i(l), f = !1;
    },
    d(m) {
      m && Zi(e), u[n].d(), d && d.d();
    }
  };
}
function zd(i, e, t) {
  let { type: n = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, l = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, l, s, o, r, a];
}
class rr extends bd {
  constructor(e) {
    super(), vd(this, e, zd, Sd, kd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Bd,
  append: Kl,
  attr: dt,
  check_outros: fi,
  create_component: _l,
  destroy_component: dl,
  detach: On,
  element: ki,
  empty: Dd,
  group_outros: ci,
  init: qd,
  insert: Pn,
  listen: hl,
  mount_component: ml,
  safe_not_equal: Ld,
  space: Zl,
  toggle_class: Jt,
  transition_in: we,
  transition_out: Le
} = window.__gradio__svelte__internal;
function mo(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, l = (
    /*sources*/
    i[1].includes("microphone")
  ), s, o = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), f, c = t && go(i), u = l && bo(i), _ = o && wo(i), d = a && po(i);
  return {
    c() {
      e = ki("span"), c && c.c(), n = Zl(), u && u.c(), s = Zl(), _ && _.c(), r = Zl(), d && d.c(), dt(e, "class", "source-selection svelte-1jp3vgd"), dt(e, "data-testid", "source-select");
    },
    m(m, h) {
      Pn(m, e, h), c && c.m(e, null), Kl(e, n), u && u.m(e, null), Kl(e, s), _ && _.m(e, null), Kl(e, r), d && d.m(e, null), f = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && we(c, 1)) : (c = go(m), c.c(), we(c, 1), c.m(e, n)) : c && (ci(), Le(c, 1, 1, () => {
        c = null;
      }), fi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? u ? (u.p(m, h), h & /*sources*/
      2 && we(u, 1)) : (u = bo(m), u.c(), we(u, 1), u.m(e, s)) : u && (ci(), Le(u, 1, 1, () => {
        u = null;
      }), fi()), h & /*sources*/
      2 && (o = /*sources*/
      m[1].includes("webcam")), o ? _ ? (_.p(m, h), h & /*sources*/
      2 && we(_, 1)) : (_ = wo(m), _.c(), we(_, 1), _.m(e, r)) : _ && (ci(), Le(_, 1, 1, () => {
        _ = null;
      }), fi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && we(d, 1)) : (d = po(m), d.c(), we(d, 1), d.m(e, null)) : d && (ci(), Le(d, 1, 1, () => {
        d = null;
      }), fi());
    },
    i(m) {
      f || (we(c), we(u), we(_), we(d), f = !0);
    },
    o(m) {
      Le(c), Le(u), Le(_), Le(d), f = !1;
    },
    d(m) {
      m && On(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function go(i) {
  let e, t, n, l, s;
  return t = new ir({}), {
    c() {
      e = ki("button"), _l(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Upload file"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Pn(o, e, r), ml(t, e, null), n = !0, l || (s = hl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), dl(t), l = !1, s();
    }
  };
}
function bo(i) {
  let e, t, n, l, s;
  return t = new v_({}), {
    c() {
      e = ki("button"), _l(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Record audio"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Pn(o, e, r), ml(t, e, null), n = !0, l || (s = hl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), dl(t), l = !1, s();
    }
  };
}
function wo(i) {
  let e, t, n, l, s;
  return t = new lr({}), {
    c() {
      e = ki("button"), _l(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Capture from camera"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Pn(o, e, r), ml(t, e, null), n = !0, l || (s = hl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), dl(t), l = !1, s();
    }
  };
}
function po(i) {
  let e, t, n, l, s;
  return t = new nr({}), {
    c() {
      e = ki("button"), _l(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Paste from clipboard"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Pn(o, e, r), ml(t, e, null), n = !0, l || (s = hl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), dl(t), l = !1, s();
    }
  };
}
function Md(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && mo(i)
  );
  return {
    c() {
      n && n.c(), e = Dd();
    },
    m(l, s) {
      n && n.m(l, s), Pn(l, e, s), t = !0;
    },
    p(l, [s]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, s), s & /*unique_sources*/
      4 && we(n, 1)) : (n = mo(l), n.c(), we(n, 1), n.m(e.parentNode, e)) : n && (ci(), Le(n, 1, 1, () => {
        n = null;
      }), fi());
    },
    i(l) {
      t || (we(n), t = !0);
    },
    o(l) {
      Le(n), t = !1;
    },
    d(l) {
      l && On(e), n && n.d(l);
    }
  };
}
function Ed(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, b) {
    function p(w) {
      return w instanceof g ? w : new g(function(k) {
        k(w);
      });
    }
    return new (g || (g = Promise))(function(w, k) {
      function D(S) {
        try {
          z(b.next(S));
        } catch (C) {
          k(C);
        }
      }
      function v(S) {
        try {
          z(b.throw(S));
        } catch (C) {
          k(C);
        }
      }
      function z(S) {
        S.done ? w(S.value) : p(S.value).then(D, v);
      }
      z((b = b.apply(m, h || [])).next());
    });
  };
  let { sources: s } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(m) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, o = m), a(m);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return i.$$set = (m) => {
    "sources" in m && t(1, s = m.sources), "active_source" in m && t(0, o = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(s)]);
  }, [
    o,
    s,
    n,
    f,
    r,
    a,
    c,
    u,
    _,
    d
  ];
}
class Rd extends Bd {
  constructor(e) {
    super(), qd(this, e, Ed, Md, Ld, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function In(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Ji() {
}
const Ad = (i) => i;
function Wd(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function vo(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const fr = typeof window < "u";
let ko = fr ? () => window.performance.now() : () => Date.now(), cr = fr ? (i) => requestAnimationFrame(i) : Ji;
const Nn = /* @__PURE__ */ new Set();
function ur(i) {
  Nn.forEach((e) => {
    e.c(i) || (Nn.delete(e), e.f());
  }), Nn.size !== 0 && cr(ur);
}
function Xd(i) {
  let e;
  return Nn.size === 0 && cr(ur), {
    promise: new Promise((t) => {
      Nn.add(e = { c: i, f: t });
    }),
    abort() {
      Nn.delete(e);
    }
  };
}
function Yd(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Id(i, { delay: e = 0, duration: t = 400, easing: n = Ad } = {}) {
  const l = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * l}`
  };
}
function yo(i, { delay: e = 0, duration: t = 400, easing: n = Yd, x: l = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = vo(l), [d, m] = vo(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, g) => `
			transform: ${f} translate(${(1 - h) * u}${_}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}`
  };
}
const En = [];
function Hd(i, e = Ji) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(r) {
    if (Wd(i, r) && (i = r, t)) {
      const a = !En.length;
      for (const f of n)
        f[1](), En.push(f, i);
      if (a) {
        for (let f = 0; f < En.length; f += 2)
          En[f][0](En[f + 1]);
        En.length = 0;
      }
    }
  }
  function s(r) {
    l(r(i));
  }
  function o(r, a = Ji) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(l, s) || Ji), r(i), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function Co(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function ps(i, e, t, n) {
  if (typeof t == "number" || Co(t)) {
    const l = n - t, s = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * l, r = i.opts.damping * s, a = (o - r) * i.inv_mass, f = (s + a) * i.dt;
    return Math.abs(f) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, Co(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (l, s) => ps(i, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const l = {};
      for (const s in t)
        l[s] = ps(i, e[s], t[s], n[s]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function So(i, e = {}) {
  const t = Hd(i), { stiffness: n = 0.15, damping: l = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = i, c = i, u = 1, _ = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const p = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, o = ko(), f = g, t.set(i = c), Promise.resolve()) : (b.soft && (_ = 1 / ((b.soft === !0 ? 0.5 : +b.soft) * 60), u = 0), r || (o = ko(), d = !1, r = Xd((w) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const k = {
        inv_mass: u,
        opts: h,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, D = ps(k, f, i, c);
      return o = w, f = i, t.set(i = D), k.settled && (r = null), !k.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        p === a && w();
      });
    }));
  }
  const h = {
    set: m,
    update: (g, b) => m(g(c, i), b),
    subscribe: t.subscribe,
    stiffness: n,
    damping: l,
    precision: s
  };
  return h;
}
const {
  SvelteComponent: Td,
  append: $e,
  attr: O,
  component_subscribe: zo,
  detach: jd,
  element: Fd,
  init: Ud,
  insert: Vd,
  noop: Bo,
  safe_not_equal: Nd,
  set_style: Mi,
  svg_element: et,
  toggle_class: Do
} = window.__gradio__svelte__internal, { onMount: Od } = window.__gradio__svelte__internal;
function Pd(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = Fd("div"), t = et("svg"), n = et("g"), l = et("path"), s = et("path"), o = et("path"), r = et("path"), a = et("g"), f = et("path"), c = et("path"), u = et("path"), _ = et("path"), O(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), O(l, "fill", "#FF7C00"), O(l, "fill-opacity", "0.4"), O(l, "class", "svelte-43sxxs"), O(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), O(s, "fill", "#FF7C00"), O(s, "class", "svelte-43sxxs"), O(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), O(o, "fill", "#FF7C00"), O(o, "fill-opacity", "0.4"), O(o, "class", "svelte-43sxxs"), O(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), O(r, "fill", "#FF7C00"), O(r, "class", "svelte-43sxxs"), Mi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), O(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), O(f, "fill", "#FF7C00"), O(f, "fill-opacity", "0.4"), O(f, "class", "svelte-43sxxs"), O(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), O(c, "fill", "#FF7C00"), O(c, "class", "svelte-43sxxs"), O(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), O(u, "fill", "#FF7C00"), O(u, "fill-opacity", "0.4"), O(u, "class", "svelte-43sxxs"), O(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), O(_, "fill", "#FF7C00"), O(_, "class", "svelte-43sxxs"), Mi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), O(t, "viewBox", "-1200 -1200 3000 3000"), O(t, "fill", "none"), O(t, "xmlns", "http://www.w3.org/2000/svg"), O(t, "class", "svelte-43sxxs"), O(e, "class", "svelte-43sxxs"), Do(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      Vd(d, e, m), $e(e, t), $e(t, n), $e(n, l), $e(n, s), $e(n, o), $e(n, r), $e(t, a), $e(a, f), $e(a, c), $e(a, u), $e(a, _);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && Mi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && Mi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Do(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Bo,
    o: Bo,
    d(d) {
      d && jd(e);
    }
  };
}
function Kd(i, e, t) {
  let n, l;
  var s = this && this.__awaiter || function(d, m, h, g) {
    function b(p) {
      return p instanceof h ? p : new h(function(w) {
        w(p);
      });
    }
    return new (h || (h = Promise))(function(p, w) {
      function k(z) {
        try {
          v(g.next(z));
        } catch (S) {
          w(S);
        }
      }
      function D(z) {
        try {
          v(g.throw(z));
        } catch (S) {
          w(S);
        }
      }
      function v(z) {
        z.done ? p(z.value) : b(z.value).then(k, D);
      }
      v((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = So([0, 0]);
  zo(i, r, (d) => t(1, n = d));
  const a = So([0, 0]);
  zo(i, a, (d) => t(2, l = d));
  let f;
  function c() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return s(this, void 0, void 0, function* () {
      yield c(), f || u();
    });
  }
  function _() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Od(() => (_(), () => f = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, l, r, a];
}
class Zd extends Td {
  constructor(e) {
    super(), Ud(this, e, Kd, Pd, Nd, { margin: 0 });
  }
}
const {
  SvelteComponent: Gd,
  append: cn,
  attr: lt,
  binding_callbacks: qo,
  check_outros: vs,
  create_component: _r,
  create_slot: dr,
  destroy_component: hr,
  destroy_each: mr,
  detach: F,
  element: ut,
  empty: Kn,
  ensure_array_like: el,
  get_all_dirty_from_scope: gr,
  get_slot_changes: br,
  group_outros: ks,
  init: Jd,
  insert: U,
  mount_component: wr,
  noop: ys,
  safe_not_equal: Qd,
  set_data: Ze,
  set_style: Zt,
  space: Ke,
  text: re,
  toggle_class: Pe,
  transition_in: it,
  transition_out: _t,
  update_slot_base: pr
} = window.__gradio__svelte__internal, { tick: xd } = window.__gradio__svelte__internal, { onDestroy: $d } = window.__gradio__svelte__internal, { createEventDispatcher: e1 } = window.__gradio__svelte__internal, t1 = (i) => ({}), Lo = (i) => ({}), n1 = (i) => ({}), Mo = (i) => ({});
function Eo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ro(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function i1(i) {
  let e, t, n, l, s = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new ul({
    props: {
      Icon: er,
      label: (
        /*i18n*/
        i[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    i[32]
  );
  const f = (
    /*#slots*/
    i[30].error
  ), c = dr(
    f,
    i,
    /*$$scope*/
    i[29],
    Lo
  );
  return {
    c() {
      e = ut("div"), _r(t.$$.fragment), n = Ke(), l = ut("span"), o = re(s), r = Ke(), c && c.c(), lt(e, "class", "clear-status svelte-16nch4a"), lt(l, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      U(u, e, _), wr(t, e, null), U(u, n, _), U(u, l, _), cn(l, o), U(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Ze(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && pr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? br(
          f,
          /*$$scope*/
          u[29],
          _,
          t1
        ) : gr(
          /*$$scope*/
          u[29]
        ),
        Lo
      );
    },
    i(u) {
      a || (it(t.$$.fragment, u), it(c, u), a = !0);
    },
    o(u) {
      _t(t.$$.fragment, u), _t(c, u), a = !1;
    },
    d(u) {
      u && (F(e), F(n), F(l), F(r)), hr(t), c && c.d(u);
    }
  };
}
function l1(i) {
  let e, t, n, l, s, o, r, a, f, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ao(i)
  );
  function u(w, k) {
    if (
      /*progress*/
      w[7]
    ) return a1;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return o1;
    if (
      /*queue_position*/
      w[2] === 0
    ) return s1;
  }
  let _ = u(i), d = _ && _(i), m = (
    /*timer*/
    i[5] && Yo(i)
  );
  const h = [u1, c1], g = [];
  function b(w, k) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = b(i)) && (o = g[s] = h[s](i));
  let p = !/*timer*/
  i[5] && Vo(i);
  return {
    c() {
      c && c.c(), e = Ke(), t = ut("div"), d && d.c(), n = Ke(), m && m.c(), l = Ke(), o && o.c(), r = Ke(), p && p.c(), a = Kn(), lt(t, "class", "progress-text svelte-16nch4a"), Pe(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Pe(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(w, k) {
      c && c.m(w, k), U(w, e, k), U(w, t, k), d && d.m(t, null), cn(t, n), m && m.m(t, null), U(w, l, k), ~s && g[s].m(w, k), U(w, r, k), p && p.m(w, k), U(w, a, k), f = !0;
    },
    p(w, k) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? c ? c.p(w, k) : (c = Ao(w), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(w)) && d ? d.p(w, k) : (d && d.d(1), d = _ && _(w), d && (d.c(), d.m(t, n))), /*timer*/
      w[5] ? m ? m.p(w, k) : (m = Yo(w), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let D = s;
      s = b(w), s === D ? ~s && g[s].p(w, k) : (o && (ks(), _t(g[D], 1, 1, () => {
        g[D] = null;
      }), vs()), ~s ? (o = g[s], o ? o.p(w, k) : (o = g[s] = h[s](w), o.c()), it(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? p && (ks(), _t(p, 1, 1, () => {
        p = null;
      }), vs()) : p ? (p.p(w, k), k[0] & /*timer*/
      32 && it(p, 1)) : (p = Vo(w), p.c(), it(p, 1), p.m(a.parentNode, a));
    },
    i(w) {
      f || (it(o), it(p), f = !0);
    },
    o(w) {
      _t(o), _t(p), f = !1;
    },
    d(w) {
      w && (F(e), F(t), F(l), F(r), F(a)), c && c.d(w), d && d.d(), m && m.d(), ~s && g[s].d(w), p && p.d(w);
    }
  };
}
function Ao(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = ut("div"), lt(e, "class", "eta-bar svelte-16nch4a"), Zt(e, "transform", t);
    },
    m(n, l) {
      U(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Zt(e, "transform", t);
    },
    d(n) {
      n && F(e);
    }
  };
}
function s1(i) {
  let e;
  return {
    c() {
      e = re("processing |");
    },
    m(t, n) {
      U(t, e, n);
    },
    p: ys,
    d(t) {
      t && F(e);
    }
  };
}
function o1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, s, o;
  return {
    c() {
      e = re("queue: "), n = re(t), l = re("/"), s = re(
        /*queue_size*/
        i[3]
      ), o = re(" |");
    },
    m(r, a) {
      U(r, e, a), U(r, n, a), U(r, l, a), U(r, s, a), U(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ze(n, t), a[0] & /*queue_size*/
      8 && Ze(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (F(e), F(n), F(l), F(s), F(o));
    }
  };
}
function a1(i) {
  let e, t = el(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Xo(Ro(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Kn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      U(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress*/
      128) {
        t = el(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ro(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Xo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && F(e), mr(n, l);
    }
  };
}
function Wo(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? f1 : r1
    );
  }
  let a = r(i), f = a(i);
  return {
    c() {
      f.c(), e = Ke(), n = re(t), l = re(" | "), o = re(s);
    },
    m(c, u) {
      f.m(c, u), U(c, e, u), U(c, n, u), U(c, l, u), U(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ze(n, t);
    },
    d(c) {
      c && (F(e), F(n), F(l), F(o)), f.d(c);
    }
  };
}
function r1(i) {
  let e = In(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = re(e);
    },
    m(n, l) {
      U(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = In(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && F(t);
    }
  };
}
function f1(i) {
  let e = In(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = In(
    /*p*/
    i[41].length
  ) + "", s;
  return {
    c() {
      t = re(e), n = re("/"), s = re(l);
    },
    m(o, r) {
      U(o, t, r), U(o, n, r), U(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = In(
        /*p*/
        o[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && l !== (l = In(
        /*p*/
        o[41].length
      ) + "") && Ze(s, l);
    },
    d(o) {
      o && (F(t), F(n), F(s));
    }
  };
}
function Xo(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Wo(i)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, l) {
      t && t.m(n, l), U(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Wo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && F(e), t && t.d(n);
    }
  };
}
function Yo(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = re(
        /*formatted_timer*/
        i[20]
      ), n = re(t), l = re("s");
    },
    m(s, o) {
      U(s, e, o), U(s, n, o), U(s, l, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Ze(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Ze(n, t);
    },
    d(s) {
      s && (F(e), F(n), F(l));
    }
  };
}
function c1(i) {
  let e, t;
  return e = new Zd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      _r(e.$$.fragment);
    },
    m(n, l) {
      wr(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*variant*/
      256 && (s.margin = /*variant*/
      n[8] === "default"), e.$set(s);
    },
    i(n) {
      t || (it(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hr(e, n);
    }
  };
}
function u1(i) {
  let e, t, n, l, s, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Io(i)
  );
  return {
    c() {
      e = ut("div"), t = ut("div"), r && r.c(), n = Ke(), l = ut("div"), s = ut("div"), lt(t, "class", "progress-level-inner svelte-16nch4a"), lt(s, "class", "progress-bar svelte-16nch4a"), Zt(s, "width", o), lt(l, "class", "progress-bar-wrap svelte-16nch4a"), lt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      U(a, e, f), cn(e, t), r && r.m(t, null), cn(e, n), cn(e, l), cn(l, s), i[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Io(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Zt(s, "width", o);
    },
    i: ys,
    o: ys,
    d(a) {
      a && F(e), r && r.d(), i[31](null);
    }
  };
}
function Io(i) {
  let e, t = el(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Uo(Eo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Kn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      U(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = el(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Eo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Uo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && F(e), mr(n, l);
    }
  };
}
function Ho(i) {
  let e, t, n, l, s = (
    /*i*/
    i[43] !== 0 && _1()
  ), o = (
    /*p*/
    i[41].desc != null && To(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && jo()
  ), a = (
    /*progress_level*/
    i[14] != null && Fo(i)
  );
  return {
    c() {
      s && s.c(), e = Ke(), o && o.c(), t = Ke(), r && r.c(), n = Ke(), a && a.c(), l = Kn();
    },
    m(f, c) {
      s && s.m(f, c), U(f, e, c), o && o.m(f, c), U(f, t, c), r && r.m(f, c), U(f, n, c), a && a.m(f, c), U(f, l, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = To(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = jo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Fo(f), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (F(e), F(t), F(n), F(l)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function _1(i) {
  let e;
  return {
    c() {
      e = re(" /");
    },
    m(t, n) {
      U(t, e, n);
    },
    d(t) {
      t && F(e);
    }
  };
}
function To(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = re(e);
    },
    m(n, l) {
      U(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ze(t, e);
    },
    d(n) {
      n && F(t);
    }
  };
}
function jo(i) {
  let e;
  return {
    c() {
      e = re("-");
    },
    m(t, n) {
      U(t, e, n);
    },
    d(t) {
      t && F(e);
    }
  };
}
function Fo(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = re(e), n = re("%");
    },
    m(l, s) {
      U(l, t, s), U(l, n, s);
    },
    p(l, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && Ze(t, e);
    },
    d(l) {
      l && (F(t), F(n));
    }
  };
}
function Uo(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Ho(i)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, l) {
      t && t.m(n, l), U(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = Ho(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && F(e), t && t.d(n);
    }
  };
}
function Vo(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = dr(
    s,
    i,
    /*$$scope*/
    i[29],
    Mo
  );
  return {
    c() {
      e = ut("p"), t = re(
        /*loading_text*/
        i[9]
      ), n = Ke(), o && o.c(), lt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      U(r, e, a), cn(e, t), U(r, n, a), o && o.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Ze(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!l || a[0] & /*$$scope*/
      536870912) && pr(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        l ? br(
          s,
          /*$$scope*/
          r[29],
          a,
          n1
        ) : gr(
          /*$$scope*/
          r[29]
        ),
        Mo
      );
    },
    i(r) {
      l || (it(o, r), l = !0);
    },
    o(r) {
      _t(o, r), l = !1;
    },
    d(r) {
      r && (F(e), F(n)), o && o.d(r);
    }
  };
}
function d1(i) {
  let e, t, n, l, s;
  const o = [l1, i1], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = o[t](i)), {
    c() {
      e = ut("div"), n && n.c(), lt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Pe(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Pe(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Pe(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Pe(
        e,
        "border",
        /*border*/
        i[12]
      ), Zt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Zt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      U(f, e, c), ~t && r[t].m(e, null), i[33](e), s = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (ks(), _t(r[u], 1, 1, () => {
        r[u] = null;
      }), vs()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), it(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && lt(e, "class", l), (!s || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Pe(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Pe(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || c[0] & /*variant, show_progress, status*/
      336) && Pe(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || c[0] & /*variant, show_progress, border*/
      4416) && Pe(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Zt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Zt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (it(n), s = !0);
    },
    o(f) {
      _t(n), s = !1;
    },
    d(f) {
      f && F(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var h1 = function(i, e, t, n) {
  function l(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function r(c) {
      try {
        f(n.next(c));
      } catch (u) {
        o(u);
      }
    }
    function a(c) {
      try {
        f(n.throw(c));
      } catch (u) {
        o(u);
      }
    }
    function f(c) {
      c.done ? s(c.value) : l(c.value).then(r, a);
    }
    f((n = n.apply(i, e || [])).next());
  });
};
let Ei = [], Gl = !1;
function m1(i) {
  return h1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ei.push(e), !Gl) Gl = !0;
      else return;
      yield xd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Ei.length; l++) {
          const o = Ei[l].getBoundingClientRect();
          (l === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Gl = !1, Ei = [];
      });
    }
  });
}
function g1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = e1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: p = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: k = !1 } = e, { border: D = !1 } = e, { autoscroll: v } = e, z, S = !1, C = 0, B = 0, X = null, A = null, R = 0, J = null, ee, Z = null, fe = !0;
  const Y = () => {
    t(0, a = t(27, X = t(19, N = null))), t(25, C = performance.now()), t(26, B = 0), S = !0, j();
  };
  function j() {
    requestAnimationFrame(() => {
      t(26, B = (performance.now() - C) / 1e3), S && j();
    });
  }
  function E() {
    t(26, B = 0), t(0, a = t(27, X = t(19, N = null))), S && (S = !1);
  }
  $d(() => {
    S && E();
  });
  let N = null;
  function ge(W) {
    qo[W ? "unshift" : "push"](() => {
      Z = W, t(16, Z), t(7, g), t(14, J), t(15, ee);
    });
  }
  const ce = () => {
    o("clear_status");
  };
  function te(W) {
    qo[W ? "unshift" : "push"](() => {
      z = W, t(13, z);
    });
  }
  return i.$$set = (W) => {
    "i18n" in W && t(1, r = W.i18n), "eta" in W && t(0, a = W.eta), "queue_position" in W && t(2, f = W.queue_position), "queue_size" in W && t(3, c = W.queue_size), "status" in W && t(4, u = W.status), "scroll_to_output" in W && t(22, _ = W.scroll_to_output), "timer" in W && t(5, d = W.timer), "show_progress" in W && t(6, m = W.show_progress), "message" in W && t(23, h = W.message), "progress" in W && t(7, g = W.progress), "variant" in W && t(8, b = W.variant), "loading_text" in W && t(9, p = W.loading_text), "absolute" in W && t(10, w = W.absolute), "translucent" in W && t(11, k = W.translucent), "border" in W && t(12, D = W.border), "autoscroll" in W && t(24, v = W.autoscroll), "$$scope" in W && t(29, s = W.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = X), a != null && X !== a && (t(28, A = (performance.now() - C) / 1e3 + a), t(19, N = A.toFixed(1)), t(27, X = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, R = A === null || A <= 0 || !B ? null : Math.min(B / A, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, fe = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, J = g.map((W) => {
      if (W.index != null && W.length != null)
        return W.index / W.length;
      if (W.progress != null)
        return W.progress;
    })) : t(14, J = null), J ? (t(15, ee = J[J.length - 1]), Z && (ee === 0 ? t(16, Z.style.transition = "0", Z) : t(16, Z.style.transition = "150ms", Z))) : t(15, ee = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? Y() : E()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && _ && (u === "pending" || u === "complete") && m1(z, v), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = B.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    m,
    g,
    b,
    p,
    w,
    k,
    D,
    z,
    J,
    ee,
    Z,
    R,
    fe,
    N,
    n,
    o,
    _,
    h,
    v,
    C,
    B,
    X,
    A,
    s,
    l,
    ge,
    ce,
    te
  ];
}
class b1 extends Gd {
  constructor(e) {
    super(), Jd(
      this,
      e,
      g1,
      d1,
      Qd,
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
const { setContext: A2, getContext: w1 } = window.__gradio__svelte__internal, p1 = "WORKER_PROXY_CONTEXT_KEY";
function vr() {
  return w1(p1);
}
function v1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function kr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function yr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!v1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function k1(i) {
  if (i == null || !yr(i))
    return i;
  const e = vr();
  if (e == null)
    return i;
  const n = new URL(i, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const s = new Blob([l.body], {
      type: kr(l.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: y1,
  assign: tl,
  check_outros: Cr,
  compute_rest_props: No,
  create_slot: Xs,
  detach: gl,
  element: Sr,
  empty: zr,
  exclude_internal_props: C1,
  get_all_dirty_from_scope: Ys,
  get_slot_changes: Is,
  get_spread_update: Br,
  group_outros: Dr,
  init: S1,
  insert: bl,
  listen: qr,
  prevent_default: z1,
  safe_not_equal: B1,
  set_attributes: nl,
  transition_in: gn,
  transition_out: bn,
  update_slot_base: Hs
} = window.__gradio__svelte__internal, { createEventDispatcher: D1 } = window.__gradio__svelte__internal;
function q1(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Xs(
    o,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      i[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      i[1]
    ) },
    /*$$restProps*/
    i[6]
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = tl(f, a[c]);
  return {
    c() {
      e = Sr("a"), r && r.c(), nl(e, f);
    },
    m(c, u) {
      bl(c, e, u), r && r.m(e, null), n = !0, l || (s = qr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Hs(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? Is(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Ys(
          /*$$scope*/
          c[7]
        ),
        null
      ), nl(e, f = Br(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (gn(r, c), n = !0);
    },
    o(c) {
      bn(r, c), n = !1;
    },
    d(c) {
      c && gl(e), r && r.d(c), l = !1, s();
    }
  };
}
function L1(i) {
  let e, t, n, l;
  const s = [E1, M1], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = zr();
    },
    m(a, f) {
      o[e].m(a, f), bl(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Dr(), bn(o[c], 1, 1, () => {
        o[c] = null;
      }), Cr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), gn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (gn(t), l = !0);
    },
    o(a) {
      bn(t), l = !1;
    },
    d(a) {
      a && gl(n), o[e].d(a);
    }
  };
}
function M1(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[8].default
  ), o = Xs(
    s,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let r = [
    /*$$restProps*/
    i[6],
    { href: (
      /*href*/
      i[0]
    ) }
  ], a = {};
  for (let f = 0; f < r.length; f += 1)
    a = tl(a, r[f]);
  return {
    c() {
      e = Sr("a"), o && o.c(), nl(e, a);
    },
    m(f, c) {
      bl(f, e, c), o && o.m(e, null), t = !0, n || (l = qr(e, "click", z1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && Hs(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? Is(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Ys(
          /*$$scope*/
          f[7]
        ),
        null
      ), nl(e, a = Br(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      t || (gn(o, f), t = !0);
    },
    o(f) {
      bn(o, f), t = !1;
    },
    d(f) {
      f && gl(e), o && o.d(f), n = !1, l();
    }
  };
}
function E1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Xs(
    t,
    i,
    /*$$scope*/
    i[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, s) {
      n && n.m(l, s), e = !0;
    },
    p(l, s) {
      n && n.p && (!e || s & /*$$scope*/
      128) && Hs(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? Is(
          t,
          /*$$scope*/
          l[7],
          s,
          null
        ) : Ys(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (gn(n, l), e = !0);
    },
    o(l) {
      bn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function R1(i) {
  let e, t, n, l, s;
  const o = [L1, q1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && yr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), l = zr();
    },
    m(f, c) {
      r[t].m(f, c), bl(f, l, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (Dr(), bn(r[u], 1, 1, () => {
        r[u] = null;
      }), Cr(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), gn(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      s || (gn(n), s = !0);
    },
    o(f) {
      bn(n), s = !1;
    },
    d(f) {
      f && gl(l), r[t].d(f);
    }
  };
}
function A1(i, e, t) {
  const n = ["href", "download"];
  let l = No(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function p(w) {
      return w instanceof g ? w : new g(function(k) {
        k(w);
      });
    }
    return new (g || (g = Promise))(function(w, k) {
      function D(S) {
        try {
          z(b.next(S));
        } catch (C) {
          k(C);
        }
      }
      function v(S) {
        try {
          z(b.throw(S));
        } catch (C) {
          k(C);
        }
      }
      function z(S) {
        S.done ? w(S.value) : p(S.value).then(D, v);
      }
      z((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = D1();
  let u = !1;
  const _ = vr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: h,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${h} from the Wasm worker.`);
        const b = new Blob(
          [g.body],
          {
            type: kr(g.headers, "content-type")
          }
        ), p = URL.createObjectURL(b), w = document.createElement("a");
        w.href = p, w.download = f, w.click(), URL.revokeObjectURL(p);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = tl(tl({}, e), C1(m)), t(6, l = No(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, o = m.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    d,
    l,
    o,
    s
  ];
}
class W1 extends y1 {
  constructor(e) {
    super(), S1(this, e, A1, R1, B1, { href: 0, download: 1 });
  }
}
var X1 = Object.defineProperty, Y1 = (i, e, t) => e in i ? X1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, kt = (i, e, t) => (Y1(i, typeof e != "symbol" ? e + "" : e, t), t), Lr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ii = (i, e, t) => (Lr(i, e, "read from private field"), t ? t.call(i) : e.get(i)), I1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, H1 = (i, e, t, n) => (Lr(i, e, "write to private field"), e.set(i, t), t), Ot;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Mr(i, e) {
  return i.map(
    (t) => new T1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class T1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: l,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    kt(this, "path"), kt(this, "url"), kt(this, "orig_name"), kt(this, "size"), kt(this, "blob"), kt(this, "is_stream"), kt(this, "mime_type"), kt(this, "alt_text"), kt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class W2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ii(this, Ot) + t; ; ) {
          const l = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (l === -1 || l - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (l === -1)
            break;
          const o = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, o)), t = t.slice(l + 1);
        }
        H1(this, Ot, t);
      },
      flush: (t) => {
        if (ii(this, Ot) === "")
          return;
        const n = e.allowCR && ii(this, Ot).endsWith("\r") ? ii(this, Ot).slice(0, -1) : ii(this, Ot);
        t.enqueue(n);
      }
    }), I1(this, Ot, "");
  }
}
Ot = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: j1,
  append: Re,
  attr: an,
  detach: Er,
  element: rn,
  init: F1,
  insert: Rr,
  noop: Oo,
  safe_not_equal: U1,
  set_data: il,
  set_style: Jl,
  space: Cs,
  text: Hn,
  toggle_class: Po
} = window.__gradio__svelte__internal, { onMount: V1, createEventDispatcher: N1, onDestroy: O1 } = window.__gradio__svelte__internal;
function Ko(i) {
  let e, t, n, l, s = ui(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = rn("div"), t = rn("span"), n = rn("div"), l = rn("progress"), o = Hn(s), a = Cs(), f = rn("span"), u = Hn(c), Jl(l, "visibility", "hidden"), Jl(l, "height", "0"), Jl(l, "width", "0"), l.value = r = ui(
        /*file_to_display*/
        i[2]
      ), an(l, "max", "100"), an(l, "class", "svelte-cr2edf"), an(n, "class", "progress-bar svelte-cr2edf"), an(f, "class", "file-name svelte-cr2edf"), an(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Rr(_, e, d), Re(e, t), Re(t, n), Re(n, l), Re(l, o), Re(e, a), Re(e, f), Re(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = ui(
        /*file_to_display*/
        _[2]
      ) + "") && il(o, s), d & /*file_to_display*/
      4 && r !== (r = ui(
        /*file_to_display*/
        _[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && il(u, c);
    },
    d(_) {
      _ && Er(e);
    }
  };
}
function P1(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    i[2] && Ko(i)
  );
  return {
    c() {
      e = rn("div"), t = rn("span"), n = Hn("Uploading "), s = Hn(l), o = Cs(), a = Hn(r), f = Hn("..."), c = Cs(), u && u.c(), an(t, "class", "uploading svelte-cr2edf"), an(e, "class", "wrap svelte-cr2edf"), Po(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      Rr(_, e, d), Re(e, t), Re(t, n), Re(t, s), Re(t, o), Re(t, a), Re(t, f), Re(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      _[0].length + "") && il(s, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && il(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Ko(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Po(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Oo,
    o: Oo,
    d(_) {
      _ && Er(e), u && u.d();
    }
  };
}
function ui(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function K1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += ui(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Z1(i, e, t) {
  var n = this && this.__awaiter || function(h, g, b, p) {
    function w(k) {
      return k instanceof b ? k : new b(function(D) {
        D(k);
      });
    }
    return new (b || (b = Promise))(function(k, D) {
      function v(C) {
        try {
          S(p.next(C));
        } catch (B) {
          D(B);
        }
      }
      function z(C) {
        try {
          S(p.throw(C));
        } catch (B) {
          D(B);
        }
      }
      function S(C) {
        C.done ? k(C.value) : w(C.value).then(v, z);
      }
      S((p = p.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = N1();
  function m(h, g) {
    t(0, _ = _.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return V1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), O1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, s = h.root), "files" in h && t(5, o = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && K1(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    l,
    s,
    o,
    r,
    c
  ];
}
class G1 extends j1 {
  constructor(e) {
    super(), F1(this, e, Z1, P1, U1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: J1,
  append: Zo,
  attr: Ce,
  binding_callbacks: Q1,
  bubble: xt,
  check_outros: Ar,
  create_component: x1,
  create_slot: Wr,
  destroy_component: $1,
  detach: wl,
  element: Ss,
  empty: Xr,
  get_all_dirty_from_scope: Yr,
  get_slot_changes: Ir,
  group_outros: Hr,
  init: eh,
  insert: pl,
  listen: Ie,
  mount_component: th,
  prevent_default: $t,
  run_all: nh,
  safe_not_equal: ih,
  set_style: Tr,
  space: lh,
  stop_propagation: en,
  toggle_class: ve,
  transition_in: Gt,
  transition_out: wn,
  update_slot_base: jr
} = window.__gradio__svelte__internal, { createEventDispatcher: sh, tick: oh } = window.__gradio__svelte__internal;
function ah(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = Wr(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ss("button"), d && d.c(), t = lh(), n = Ss("input"), Ce(n, "aria-label", "file upload"), Ce(n, "data-testid", "file-upload"), Ce(n, "type", "file"), Ce(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = s = /*file_count*/
      i[6] === "multiple" || void 0, Ce(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), Ce(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Ce(n, "class", "svelte-1s26xmt"), Ce(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), ve(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ve(
        e,
        "center",
        /*center*/
        i[4]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ve(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ve(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Tr(e, "height", "100%");
    },
    m(m, h) {
      pl(m, e, h), d && d.m(e, null), Zo(e, t), Zo(e, n), i[34](n), f = !0, c || (u = [
        Ie(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Ie(e, "drag", en($t(
          /*drag_handler*/
          i[27]
        ))),
        Ie(e, "dragstart", en($t(
          /*dragstart_handler*/
          i[28]
        ))),
        Ie(e, "dragend", en($t(
          /*dragend_handler*/
          i[29]
        ))),
        Ie(e, "dragover", en($t(
          /*dragover_handler*/
          i[30]
        ))),
        Ie(e, "dragenter", en($t(
          /*dragenter_handler*/
          i[31]
        ))),
        Ie(e, "dragleave", en($t(
          /*dragleave_handler*/
          i[32]
        ))),
        Ie(e, "drop", en($t(
          /*drop_handler*/
          i[33]
        ))),
        Ie(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Ie(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Ie(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Ie(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!f || h[0] & /*$$scope*/
      33554432) && jr(
        d,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Ir(
          _,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Yr(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && Ce(n, "accept", l), (!f || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = s), (!f || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "directory" || void 0)) && Ce(n, "webkitdirectory", o), (!f || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && Ce(n, "mozdirectory", r), (!f || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && Ce(e, "tabindex", a), (!f || h[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || h[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || h[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || h[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || h[0] & /*disable_click*/
      128) && ve(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Gt(d, m), f = !0);
    },
    o(m) {
      wn(d, m), f = !1;
    },
    d(m) {
      m && wl(e), d && d.d(m), i[34](null), c = !1, nh(u);
    }
  };
}
function rh(i) {
  let e, t, n = !/*hidden*/
  i[9] && Go(i);
  return {
    c() {
      n && n.c(), e = Xr();
    },
    m(l, s) {
      n && n.m(l, s), pl(l, e, s), t = !0;
    },
    p(l, s) {
      /*hidden*/
      l[9] ? n && (Hr(), wn(n, 1, 1, () => {
        n = null;
      }), Ar()) : n ? (n.p(l, s), s[0] & /*hidden*/
      512 && Gt(n, 1)) : (n = Go(l), n.c(), Gt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Gt(n), t = !0);
    },
    o(l) {
      wn(n), t = !1;
    },
    d(l) {
      l && wl(e), n && n.d(l);
    }
  };
}
function fh(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Wr(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ss("button"), r && r.c(), Ce(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), ve(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ve(
        e,
        "center",
        /*center*/
        i[4]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ve(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Tr(e, "height", "100%");
    },
    m(a, f) {
      pl(a, e, f), r && r.m(e, null), n = !0, l || (s = Ie(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && jr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Ir(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Yr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Ce(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Gt(r, a), n = !0);
    },
    o(a) {
      wn(r, a), n = !1;
    },
    d(a) {
      a && wl(e), r && r.d(a), l = !1, s();
    }
  };
}
function Go(i) {
  let e, t;
  return e = new G1({
    props: {
      root: (
        /*root*/
        i[8]
      ),
      upload_id: (
        /*upload_id*/
        i[14]
      ),
      files: (
        /*file_data*/
        i[15]
      ),
      stream_handler: (
        /*stream_handler*/
        i[11]
      )
    }
  }), {
    c() {
      x1(e.$$.fragment);
    },
    m(n, l) {
      th(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      256 && (s.root = /*root*/
      n[8]), l[0] & /*upload_id*/
      16384 && (s.upload_id = /*upload_id*/
      n[14]), l[0] & /*file_data*/
      32768 && (s.files = /*file_data*/
      n[15]), l[0] & /*stream_handler*/
      2048 && (s.stream_handler = /*stream_handler*/
      n[11]), e.$set(s);
    },
    i(n) {
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $1(e, n);
    }
  };
}
function ch(i) {
  let e, t, n, l;
  const s = [fh, rh, ah], o = [];
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
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = Xr();
    },
    m(a, f) {
      o[e].m(a, f), pl(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Hr(), wn(o[c], 1, 1, () => {
        o[c] = null;
      }), Ar(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Gt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Gt(t), l = !0);
    },
    o(a) {
      wn(t), l = !1;
    },
    d(a) {
      a && wl(n), o[e].d(a);
    }
  };
}
function uh(i, e, t) {
  if (!i || i === "*" || i === "file/*" || Array.isArray(i) && i.some((l) => l === "*" || l === "file/*"))
    return !0;
  let n;
  if (typeof i == "string")
    n = i.split(",").map((l) => l.trim());
  else if (Array.isArray(i))
    n = i;
  else
    return !1;
  return n.includes(e) || n.some((l) => {
    const [s] = l.split("/").map((o) => o.trim());
    return l.endsWith("/*") && t.startsWith(s + "/");
  });
}
function _h(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(L, H, K, ie) {
    function _e(M) {
      return M instanceof K ? M : new K(function(st) {
        st(M);
      });
    }
    return new (K || (K = Promise))(function(M, st) {
      function ht(Je) {
        try {
          Ge(ie.next(Je));
        } catch (mt) {
          st(mt);
        }
      }
      function Xe(Je) {
        try {
          Ge(ie.throw(Je));
        } catch (mt) {
          st(mt);
        }
      }
      function Ge(Je) {
        Je.done ? M(Je.value) : _e(Je.value).then(ht, Xe);
      }
      Ge((ie = ie.apply(L, H || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: p = !0 } = e, { max_file_size: w = null } = e, { upload: k } = e, { stream_handler: D } = e, v, z, S;
  const C = sh(), B = ["image", "video", "audio", "text", "file"], X = (L) => L.startsWith(".") || L.endsWith("/*") ? L : B.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function R() {
    navigator.clipboard.read().then((L) => s(this, void 0, void 0, function* () {
      for (let H = 0; H < L.length; H++) {
        const K = L[H].types.find((ie) => ie.startsWith("image/"));
        if (K) {
          L[H].getType(K).then((ie) => s(this, void 0, void 0, function* () {
            const _e = new File([ie], `clipboard.${K.replace("image/", "")}`);
            yield Z([_e]);
          }));
          break;
        }
      }
    }));
  }
  function J() {
    _ || b && (t(2, b.value = "", b), b.click());
  }
  function ee(L) {
    return s(this, void 0, void 0, function* () {
      yield oh(), t(14, v = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const H = yield k(L, d, v, w ?? 1 / 0);
        return C("load", u === "single" ? H == null ? void 0 : H[0] : H), t(1, g = !1), H || [];
      } catch (H) {
        return C("error", H.message), t(1, g = !1), [];
      }
    });
  }
  function Z(L) {
    return s(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let H = L.map((K) => new File([K], K instanceof File ? K.name : "file", { type: K.type }));
      return t(15, z = yield Mr(H)), yield ee(z);
    });
  }
  function fe(L) {
    return s(this, void 0, void 0, function* () {
      const H = L.target;
      if (H.files)
        if (h != "blob")
          yield Z(Array.from(H.files));
        else {
          if (u === "single") {
            C("load", H.files[0]);
            return;
          }
          C("load", H.files);
        }
    });
  }
  function Y(L) {
    return s(this, void 0, void 0, function* () {
      var H;
      if (t(20, r = !1), !(!((H = L.dataTransfer) === null || H === void 0) && H.files)) return;
      const K = Array.from(L.dataTransfer.files).filter((ie) => {
        const _e = "." + ie.name.split(".").pop();
        return _e && uh(S, _e, ie.type) || (_e && Array.isArray(o) ? o.includes(_e) : _e === o) ? !0 : (C("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield Z(K);
    });
  }
  function j(L) {
    xt.call(this, i, L);
  }
  function E(L) {
    xt.call(this, i, L);
  }
  function N(L) {
    xt.call(this, i, L);
  }
  function ge(L) {
    xt.call(this, i, L);
  }
  function ce(L) {
    xt.call(this, i, L);
  }
  function te(L) {
    xt.call(this, i, L);
  }
  function W(L) {
    xt.call(this, i, L);
  }
  function se(L) {
    Q1[L ? "unshift" : "push"](() => {
      b = L, t(2, b);
    });
  }
  return i.$$set = (L) => {
    "filetype" in L && t(0, o = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, m = L.hidden), "format" in L && t(21, h = L.format), "uploading" in L && t(1, g = L.uploading), "hidden_upload" in L && t(2, b = L.hidden_upload), "show_progress" in L && t(10, p = L.show_progress), "max_file_size" in L && t(22, w = L.max_file_size), "upload" in L && t(23, k = L.upload), "stream_handler" in L && t(11, D = L.stream_handler), "$$scope" in L && t(25, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, S = null) : typeof o == "string" ? t(16, S = X(o)) : (t(0, o = o.map(X)), t(16, S = o.join(", "))));
  }, [
    o,
    g,
    b,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    p,
    D,
    R,
    J,
    v,
    z,
    S,
    A,
    fe,
    Y,
    r,
    h,
    w,
    k,
    Z,
    l,
    n,
    j,
    E,
    N,
    ge,
    ce,
    te,
    W,
    se
  ];
}
class dh extends J1 {
  constructor(e) {
    super(), eh(
      this,
      e,
      _h,
      ch,
      ih,
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
  SvelteComponent: hh,
  append: Ri,
  attr: Ql,
  create_component: mh,
  destroy_component: gh,
  detach: bh,
  element: xl,
  init: wh,
  insert: ph,
  listen: vh,
  mount_component: kh,
  noop: yh,
  safe_not_equal: Ch,
  set_style: Sh,
  space: zh,
  text: Bh,
  transition_in: Dh,
  transition_out: qh
} = window.__gradio__svelte__internal, { createEventDispatcher: Lh } = window.__gradio__svelte__internal;
function Mh(i) {
  let e, t, n, l, s, o = "Click to Access Webcam", r, a, f, c;
  return l = new lr({}), {
    c() {
      e = xl("button"), t = xl("div"), n = xl("span"), mh(l.$$.fragment), s = zh(), r = Bh(o), Ql(n, "class", "icon-wrap svelte-fjcd9c"), Ql(t, "class", "wrap svelte-fjcd9c"), Ql(e, "class", "svelte-fjcd9c"), Sh(e, "height", "100%");
    },
    m(u, _) {
      ph(u, e, _), Ri(e, t), Ri(t, n), kh(l, n, null), Ri(t, s), Ri(t, r), a = !0, f || (c = vh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), f = !0);
    },
    p: yh,
    i(u) {
      a || (Dh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      qh(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && bh(e), gh(l), f = !1, c();
    }
  };
}
function Eh(i) {
  const e = Lh();
  return [e, () => e("click")];
}
class Rh extends hh {
  constructor(e) {
    super(), wh(this, e, Eh, Mh, Ch, {});
  }
}
function Ah() {
  return navigator.mediaDevices.enumerateDevices();
}
function Wh(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Jo(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((s) => (Wh(s, e), s));
}
function Xh(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Yh,
  action_destroyer: Ih,
  add_render_callback: Hh,
  append: Lt,
  attr: me,
  binding_callbacks: Th,
  check_outros: hi,
  create_component: Zn,
  create_in_transition: jh,
  destroy_component: Gn,
  destroy_each: Fh,
  detach: Ae,
  element: Fe,
  empty: Ts,
  ensure_array_like: Qo,
  group_outros: mi,
  init: Uh,
  insert: We,
  listen: ll,
  mount_component: Jn,
  noop: js,
  run_all: Vh,
  safe_not_equal: Nh,
  set_data: Fr,
  set_input_value: zs,
  space: pi,
  stop_propagation: Oh,
  text: Ur,
  toggle_class: Ai,
  transition_in: ke,
  transition_out: Se
} = window.__gradio__svelte__internal, { createEventDispatcher: Ph, onMount: Kh } = window.__gradio__svelte__internal;
function xo(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Zh(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = [Qh, Jh], d = [];
  function m(b, p) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = _[n](i);
  let h = !/*recording*/
  i[8] && $o(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && ea(i)
  );
  return {
    c() {
      e = Fe("div"), t = Fe("button"), l.c(), o = pi(), h && h.c(), r = pi(), g && g.c(), a = Ts(), me(t, "aria-label", s = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), me(t, "class", "svelte-8hqvb6"), me(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, p) {
      We(b, e, p), Lt(e, t), d[n].m(t, null), Lt(e, o), h && h.m(e, null), We(b, r, p), g && g.m(b, p), We(b, a, p), f = !0, c || (u = ll(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, p) {
      let w = n;
      n = m(b), n === w ? d[n].p(b, p) : (mi(), Se(d[w], 1, 1, () => {
        d[w] = null;
      }), hi(), l = d[n], l ? l.p(b, p) : (l = d[n] = _[n](b), l.c()), ke(l, 1), l.m(t, null)), (!f || p[0] & /*mode*/
      2 && s !== (s = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && me(t, "aria-label", s), /*recording*/
      b[8] ? h && (mi(), Se(h, 1, 1, () => {
        h = null;
      }), hi()) : h ? (h.p(b, p), p[0] & /*recording*/
      256 && ke(h, 1)) : (h = $o(b), h.c(), ke(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, p), p[0] & /*options_open, selected_device*/
      1152 && ke(g, 1)) : (g = ea(b), g.c(), ke(g, 1), g.m(a.parentNode, a)) : g && (mi(), Se(g, 1, 1, () => {
        g = null;
      }), hi());
    },
    i(b) {
      f || (ke(l), ke(h), ke(g), f = !0);
    },
    o(b) {
      Se(l), Se(h), Se(g), f = !1;
    },
    d(b) {
      b && (Ae(e), Ae(r), Ae(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, u();
    }
  };
}
function Gh(i) {
  let e, t, n, l;
  return t = new Rh({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "title", "grant webcam access");
    },
    m(s, o) {
      We(s, e, o), Jn(t, e, null), l = !0;
    },
    p: js,
    i(s) {
      l || (ke(t.$$.fragment, s), s && (n || Hh(() => {
        n = jh(e, Id, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Ae(e), Gn(t);
    }
  };
}
function Jh(i) {
  let e, t, n;
  return t = new bu({}), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "title", "capture photo");
    },
    m(l, s) {
      We(l, e, s), Jn(t, e, null), n = !0;
    },
    p: js,
    i(l) {
      n || (ke(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Gn(t);
    }
  };
}
function Qh(i) {
  let e, t, n, l;
  const s = [$h, xh], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = Ts();
    },
    m(a, f) {
      o[e].m(a, f), We(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (mi(), Se(o[c], 1, 1, () => {
        o[c] = null;
      }), hi(), t = o[e], t || (t = o[e] = s[e](a), t.c()), ke(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ke(t), l = !0);
    },
    o(a) {
      Se(t), l = !1;
    },
    d(a) {
      a && Ae(n), o[e].d(a);
    }
  };
}
function xh(i) {
  let e, t, n;
  return t = new zu({}), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "start recording");
    },
    m(l, s) {
      We(l, e, s), Jn(t, e, null), n = !0;
    },
    i(l) {
      n || (ke(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Gn(t);
    }
  };
}
function $h(i) {
  let e, t, n;
  return t = new Y_({}), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "stop recording");
    },
    m(l, s) {
      We(l, e, s), Jn(t, e, null), n = !0;
    },
    i(l) {
      n || (ke(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Gn(t);
    }
  };
}
function $o(i) {
  let e, t, n, l, s;
  return t = new Ws({}), {
    c() {
      e = Fe("button"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "aria-label", "select input source");
    },
    m(o, r) {
      We(o, e, r), Jn(t, e, null), n = !0, l || (s = ll(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: js,
    i(o) {
      n || (ke(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Se(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ae(e), Gn(t), l = !1, s();
    }
  };
}
function ea(i) {
  let e, t, n, l, s, o, r;
  n = new Ws({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? t0 : e0
    );
  }
  let f = a(i), c = f(i);
  return {
    c() {
      e = Fe("select"), t = Fe("button"), Zn(n.$$.fragment), l = pi(), c.c(), me(t, "class", "inset-icon svelte-8hqvb6"), me(e, "class", "select-wrap svelte-8hqvb6"), me(e, "aria-label", "select source");
    },
    m(u, _) {
      We(u, e, _), Lt(e, t), Jn(n, t, null), Lt(t, l), c.m(e, null), s = !0, o || (r = [
        ll(t, "click", Oh(
          /*click_handler_2*/
          i[22]
        )),
        Ih(Fs.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        ll(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      s || (ke(n.$$.fragment, u), s = !0);
    },
    o(u) {
      Se(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Ae(e), Gn(n), c.d(), o = !1, Vh(r);
    }
  };
}
function e0(i) {
  let e, t = Qo(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ta(xo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Ts();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      We(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = Qo(
          /*available_video_devices*/
          l[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = xo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = ta(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Ae(e), Fh(n, l);
    }
  };
}
function t0(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Fe("option"), n = Ur(t), e.__value = "", zs(e, e.__value), me(e, "class", "svelte-8hqvb6");
    },
    m(l, s) {
      We(l, e, s), Lt(e, n);
    },
    p(l, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && Fr(n, t);
    },
    d(l) {
      l && Ae(e);
    }
  };
}
function ta(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, s, o;
  return {
    c() {
      e = Fe("option"), n = Ur(t), l = pi(), e.__value = s = /*device*/
      i[32].deviceId, zs(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, me(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      We(r, e, a), Lt(e, n), Lt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Fr(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, zs(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Ae(e);
    }
  };
}
function n0(i) {
  let e, t, n, l, s, o;
  const r = [Gh, Zh], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = f(i), s = a[l] = r[l](i), {
    c() {
      e = Fe("div"), t = Fe("video"), n = pi(), s.c(), me(t, "class", "svelte-8hqvb6"), Ai(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ai(t, "hide", !/*webcam_accessed*/
      i[9]), me(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      We(c, e, u), Lt(e, t), i[19](t), Lt(e, n), a[l].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Ai(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Ai(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = l;
      l = f(c), l === _ ? a[l].p(c, u) : (mi(), Se(a[_], 1, 1, () => {
        a[_] = null;
      }), hi(), s = a[l], s ? s.p(c, u) : (s = a[l] = r[l](c), s.c()), ke(s, 1), s.m(e, null));
    },
    i(c) {
      o || (ke(s), o = !0);
    },
    o(c) {
      Se(s), o = !1;
    },
    d(c) {
      c && Ae(e), i[19](null), a[l].d();
    }
  };
}
function Fs(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function i0(i, e, t) {
  var n = this && this.__awaiter || function(Y, j, E, N) {
    function ge(ce) {
      return ce instanceof E ? ce : new E(function(te) {
        te(ce);
      });
    }
    return new (E || (E = Promise))(function(ce, te) {
      function W(H) {
        try {
          L(N.next(H));
        } catch (K) {
          te(K);
        }
      }
      function se(H) {
        try {
          L(N.throw(H));
        } catch (K) {
          te(K);
        }
      }
      function L(H) {
        H.done ? ce(H.value) : ge(H.value).then(W, se);
      }
      L((N = N.apply(Y, j || [])).next());
    });
  };
  let l, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Ph();
  Kh(() => r = document.createElement("canvas"));
  const b = (Y) => n(void 0, void 0, void 0, function* () {
    const E = Y.target.value;
    yield Jo(d, l, E).then((N) => n(void 0, void 0, void 0, function* () {
      v = N, t(7, o = s.find((ge) => ge.deviceId === E) || null), t(10, A = !1);
    }));
  });
  function p() {
    return n(this, void 0, void 0, function* () {
      try {
        Jo(d, l).then((Y) => n(this, void 0, void 0, function* () {
          t(9, B = !0), t(6, s = yield Ah()), v = Y;
        })).then(() => Xh(s)).then((Y) => {
          t(6, s = Y);
          const j = v.getTracks().map((E) => {
            var N;
            return (N = E.getSettings()) === null || N === void 0 ? void 0 : N.deviceId;
          })[0];
          t(7, o = j && Y.find((E) => E.deviceId === j) || s[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (Y) {
        if (Y instanceof DOMException && Y.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw Y;
      }
    });
  }
  function w() {
    var Y = r.getContext("2d");
    (!a || a && k) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, Y.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), _ && (Y.scale(-1, 1), Y.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (j) => {
        g(a ? "stream" : "capture", j);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, D = [], v, z, S;
  function C() {
    if (k) {
      S.stop();
      let Y = new Blob(D, { type: z }), j = new FileReader();
      j.onload = function(E) {
        return n(this, void 0, void 0, function* () {
          var N;
          if (E.target) {
            let ge = new File([Y], "sample." + z.substring(6));
            const ce = yield Mr([ge]);
            let te = ((N = yield h(ce, c)) === null || N === void 0 ? void 0 : N.filter(Boolean))[0];
            g("capture", te), g("stop_recording");
          }
        });
      }, j.readAsDataURL(Y);
    } else {
      g("start_recording"), D = [];
      let Y = ["video/webm", "video/mp4"];
      for (let j of Y)
        if (MediaRecorder.isTypeSupported(j)) {
          z = j;
          break;
        }
      if (z === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      S = new MediaRecorder(v, { mimeType: z }), S.addEventListener("dataavailable", function(j) {
        D.push(j.data);
      }), S.start(200);
    }
    t(8, k = !k);
  }
  let B = !1;
  function X() {
    u === "image" && a && t(8, k = !k), u === "image" ? w() : C(), !k && v && (v.getTracks().forEach((Y) => Y.stop()), t(5, l.srcObject = null, l), t(9, B = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !f && w();
    },
    500
  );
  let A = !1;
  function R(Y) {
    Y.preventDefault(), Y.stopPropagation(), t(10, A = !1);
  }
  function J(Y) {
    Th[Y ? "unshift" : "push"](() => {
      l = Y, t(5, l);
    });
  }
  const ee = async () => p(), Z = () => t(10, A = !0), fe = () => t(10, A = !1);
  return i.$$set = (Y) => {
    "streaming" in Y && t(0, a = Y.streaming), "pending" in Y && t(15, f = Y.pending), "root" in Y && t(16, c = Y.root), "mode" in Y && t(1, u = Y.mode), "mirror_webcam" in Y && t(2, _ = Y.mirror_webcam), "include_audio" in Y && t(17, d = Y.include_audio), "i18n" in Y && t(3, m = Y.i18n), "upload" in Y && t(18, h = Y.upload);
  }, [
    a,
    u,
    _,
    m,
    Fs,
    l,
    s,
    o,
    k,
    B,
    A,
    b,
    p,
    X,
    R,
    f,
    c,
    d,
    h,
    J,
    ee,
    Z,
    fe
  ];
}
class l0 extends Yh {
  constructor(e) {
    super(), Uh(
      this,
      e,
      i0,
      n0,
      Nh,
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
    return Fs;
  }
}
const {
  SvelteComponent: s0,
  append: jt,
  attr: T,
  detach: o0,
  init: a0,
  insert: r0,
  noop: $l,
  safe_not_equal: f0,
  set_style: Ft,
  svg_element: yt
} = window.__gradio__svelte__internal;
function c0(i) {
  let e, t, n, l, s, o, r, a, f;
  return {
    c() {
      e = yt("svg"), t = yt("rect"), n = yt("rect"), l = yt("rect"), s = yt("rect"), o = yt("line"), r = yt("line"), a = yt("line"), f = yt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(s, "x", "17"), T(s, "y", "17"), T(s, "width", "5"), T(s, "height", "5"), T(s, "rx", "1"), T(s, "ry", "1"), T(s, "stroke-width", "2"), T(s, "fill", "none"), T(o, "x1", "7.5"), T(o, "y1", "4.5"), T(o, "x2", "16"), T(o, "y2", "4.5"), Ft(o, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Ft(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Ft(a, "stroke-width", "2px"), T(f, "x1", "19.5"), T(f, "y1", "8"), T(f, "x2", "19.5"), T(f, "y2", "16"), Ft(f, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Ft(e, "fill-rule", "evenodd"), Ft(e, "clip-rule", "evenodd"), Ft(e, "stroke-linecap", "round"), Ft(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      r0(c, e, u), jt(e, t), jt(e, n), jt(e, l), jt(e, s), jt(e, o), jt(e, r), jt(e, a), jt(e, f);
    },
    p: $l,
    i: $l,
    o: $l,
    d(c) {
      c && o0(e);
    }
  };
}
class u0 extends s0 {
  constructor(e) {
    super(), a0(this, e, null, c0, f0, {});
  }
}
const {
  SvelteComponent: _0,
  append: d0,
  attr: tt,
  detach: h0,
  init: m0,
  insert: g0,
  noop: es,
  safe_not_equal: b0,
  set_style: Wi,
  svg_element: na
} = window.__gradio__svelte__internal;
function w0(i) {
  let e, t;
  return {
    c() {
      e = na("svg"), t = na("path"), tt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), tt(t, "fill", "none"), tt(t, "stroke-width", "2"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "version", "1.1"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), tt(e, "xml:space", "preserve"), tt(e, "stroke", "currentColor"), Wi(e, "fill-rule", "evenodd"), Wi(e, "clip-rule", "evenodd"), Wi(e, "stroke-linecap", "round"), Wi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      g0(n, e, l), d0(e, t);
    },
    p: es,
    i: es,
    o: es,
    d(n) {
      n && h0(e);
    }
  };
}
class p0 extends _0 {
  constructor(e) {
    super(), m0(this, e, null, w0, b0, {});
  }
}
const {
  SvelteComponent: v0,
  append: k0,
  attr: nt,
  detach: y0,
  init: C0,
  insert: S0,
  noop: ts,
  safe_not_equal: z0,
  set_style: Xi,
  svg_element: ia
} = window.__gradio__svelte__internal;
function B0(i) {
  let e, t;
  return {
    c() {
      e = ia("svg"), t = ia("path"), nt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Xi(e, "fill-rule", "evenodd"), Xi(e, "clip-rule", "evenodd"), Xi(e, "stroke-linecap", "round"), Xi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      S0(n, e, l), k0(e, t);
    },
    p: ts,
    i: ts,
    o: ts,
    d(n) {
      n && y0(e);
    }
  };
}
class D0 extends v0 {
  constructor(e) {
    super(), C0(this, e, null, B0, z0, {});
  }
}
const {
  SvelteComponent: q0,
  append: la,
  attr: Ct,
  detach: L0,
  init: M0,
  insert: E0,
  noop: ns,
  safe_not_equal: R0,
  set_style: Yi,
  svg_element: is
} = window.__gradio__svelte__internal;
function A0(i) {
  let e, t, n;
  return {
    c() {
      e = is("svg"), t = is("path"), n = is("path"), Ct(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Ct(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Ct(e, "width", "100%"), Ct(e, "height", "100%"), Ct(e, "viewBox", "0 0 24 24"), Ct(e, "xmlns", "http://www.w3.org/2000/svg"), Ct(e, "fill", "none"), Ct(e, "stroke", "currentColor"), Ct(e, "stroke-width", "2"), Yi(e, "fill-rule", "evenodd"), Yi(e, "clip-rule", "evenodd"), Yi(e, "stroke-linecap", "round"), Yi(e, "stroke-linejoin", "round");
    },
    m(l, s) {
      E0(l, e, s), la(e, t), la(e, n);
    },
    p: ns,
    i: ns,
    o: ns,
    d(l) {
      l && L0(e);
    }
  };
}
class W0 extends q0 {
  constructor(e) {
    super(), M0(this, e, null, A0, R0, {});
  }
}
const {
  SvelteComponent: X0,
  append: Y0,
  attr: Ut,
  detach: I0,
  init: H0,
  insert: T0,
  noop: ls,
  safe_not_equal: j0,
  set_style: Ii,
  svg_element: sa
} = window.__gradio__svelte__internal;
function F0(i) {
  let e, t;
  return {
    c() {
      e = sa("svg"), t = sa("path"), Ut(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), Ii(e, "fill-rule", "evenodd"), Ii(e, "clip-rule", "evenodd"), Ii(e, "stroke-linecap", "round"), Ii(e, "stroke-linejoin", "round"), Ut(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      T0(n, e, l), Y0(e, t);
    },
    p: ls,
    i: ls,
    o: ls,
    d(n) {
      n && I0(e);
    }
  };
}
class U0 extends X0 {
  constructor(e) {
    super(), H0(this, e, null, F0, j0, {});
  }
}
const {
  SvelteComponent: V0,
  append: N0,
  attr: Vt,
  detach: O0,
  init: P0,
  insert: K0,
  noop: ss,
  safe_not_equal: Z0,
  set_style: Hi,
  svg_element: oa
} = window.__gradio__svelte__internal;
function G0(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), Vt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24"), Vt(e, "fill", "none"), Vt(e, "stroke", "currentColor"), Vt(e, "stroke-width", "2"), Hi(e, "fill-rule", "evenodd"), Hi(e, "clip-rule", "evenodd"), Hi(e, "stroke-linecap", "round"), Hi(e, "stroke-linejoin", "round"), Vt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      K0(n, e, l), N0(e, t);
    },
    p: ss,
    i: ss,
    o: ss,
    d(n) {
      n && O0(e);
    }
  };
}
class J0 extends V0 {
  constructor(e) {
    super(), P0(this, e, null, G0, Z0, {});
  }
}
const {
  SvelteComponent: Q0,
  append: aa,
  attr: os,
  bubble: ra,
  create_component: x0,
  destroy_component: $0,
  detach: Vr,
  element: fa,
  init: em,
  insert: Nr,
  listen: as,
  mount_component: tm,
  run_all: nm,
  safe_not_equal: im,
  set_data: lm,
  set_input_value: ca,
  space: sm,
  text: om,
  transition_in: am,
  transition_out: rm
} = window.__gradio__svelte__internal, { createEventDispatcher: fm, afterUpdate: cm } = window.__gradio__svelte__internal;
function um(i) {
  let e;
  return {
    c() {
      e = om(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Nr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && lm(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Vr(e);
    }
  };
}
function _m(i) {
  let e, t, n, l, s, o, r;
  return t = new Qa({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [um] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = fa("label"), x0(t.$$.fragment), n = sm(), l = fa("input"), os(l, "type", "color"), l.disabled = /*disabled*/
      i[3], os(l, "class", "svelte-16l8u73"), os(e, "class", "block");
    },
    m(a, f) {
      Nr(a, e, f), tm(t, e, null), aa(e, n), aa(e, l), ca(
        l,
        /*value*/
        i[0]
      ), s = !0, o || (r = [
        as(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        as(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        as(
          l,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], o = !0);
    },
    p(a, [f]) {
      const c = {};
      f & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (c.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: f, ctx: a }), t.$set(c), (!s || f & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && ca(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (am(t.$$.fragment, a), s = !0);
    },
    o(a) {
      rm(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Vr(e), $0(t), o = !1, nm(r);
    }
  };
}
function dm(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = fm();
  function c() {
    f("change", n), l || f("input");
  }
  cm(() => {
    t(5, l = !1);
  });
  function u(m) {
    ra.call(this, i, m);
  }
  function _(m) {
    ra.call(this, i, m);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, l = m.value_is_output), "label" in m && t(1, s = m.label), "info" in m && t(2, o = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    s,
    o,
    r,
    a,
    l,
    u,
    _,
    d
  ];
}
class hm extends Q0 {
  constructor(e) {
    super(), em(this, e, dm, _m, im, {
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
  SvelteComponent: mm,
  append: Or,
  attr: ae,
  bubble: gm,
  check_outros: bm,
  create_slot: Pr,
  detach: yi,
  element: vl,
  empty: wm,
  get_all_dirty_from_scope: Kr,
  get_slot_changes: Zr,
  group_outros: pm,
  init: vm,
  insert: Ci,
  listen: km,
  safe_not_equal: ym,
  set_style: Me,
  space: Gr,
  src_url_equal: sl,
  toggle_class: Tn,
  transition_in: ol,
  transition_out: al,
  update_slot_base: Jr
} = window.__gradio__svelte__internal;
function Cm(i) {
  let e, t, n, l, s, o, r = (
    /*icon*/
    i[7] && ua(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), f = Pr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = vl("button"), r && r.c(), t = Gr(), f && f.c(), ae(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Tn(e, "hidden", !/*visible*/
      i[2]), Me(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Me(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Me(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      Ci(c, e, u), r && r.m(e, null), Or(e, t), f && f.m(e, null), l = !0, s || (o = km(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = ua(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!l || u & /*$$scope*/
      2048) && Jr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? Zr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Kr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!l || u & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && Tn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (ol(f, c), l = !0);
    },
    o(c) {
      al(f, c), l = !1;
    },
    d(c) {
      c && yi(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function Sm(i) {
  let e, t, n, l, s = (
    /*icon*/
    i[7] && _a(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Pr(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = vl("a"), s && s.c(), t = Gr(), r && r.c(), ae(
        e,
        "href",
        /*link*/
        i[6]
      ), ae(e, "rel", "noopener noreferrer"), ae(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ae(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Tn(e, "hidden", !/*visible*/
      i[2]), Tn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Me(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Me(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Me(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Me(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, f) {
      Ci(a, e, f), s && s.m(e, null), Or(e, t), r && r.m(e, null), l = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = _a(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!l || f & /*$$scope*/
      2048) && Jr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        l ? Zr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Kr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || f & /*link*/
      64) && ae(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || f & /*disabled*/
      256) && ae(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!l || f & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || f & /*size, variant, elem_classes, visible*/
      30) && Tn(e, "hidden", !/*visible*/
      a[2]), (!l || f & /*size, variant, elem_classes, disabled*/
      282) && Tn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Me(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (ol(r, a), l = !0);
    },
    o(a) {
      al(r, a), l = !1;
    },
    d(a) {
      a && yi(e), s && s.d(), r && r.d(a);
    }
  };
}
function ua(i) {
  let e, t, n;
  return {
    c() {
      e = vl("img"), ae(e, "class", "button-icon svelte-8huxfn"), sl(e.src, t = /*icon*/
      i[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      Ci(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !sl(e.src, t = /*icon*/
      l[7].url) && ae(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ae(e, "alt", n);
    },
    d(l) {
      l && yi(e);
    }
  };
}
function _a(i) {
  let e, t, n;
  return {
    c() {
      e = vl("img"), ae(e, "class", "button-icon svelte-8huxfn"), sl(e.src, t = /*icon*/
      i[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      Ci(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !sl(e.src, t = /*icon*/
      l[7].url) && ae(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ae(e, "alt", n);
    },
    d(l) {
      l && yi(e);
    }
  };
}
function zm(i) {
  let e, t, n, l;
  const s = [Sm, Cm], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = wm();
    },
    m(a, f) {
      o[e].m(a, f), Ci(a, n, f), l = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (pm(), al(o[c], 1, 1, () => {
        o[c] = null;
      }), bm(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), ol(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ol(t), l = !0);
    },
    o(a) {
      al(t), l = !1;
    },
    d(a) {
      a && yi(n), o[e].d(a);
    }
  };
}
function Bm(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    gm.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, s = b.elem_id), "elem_classes" in b && t(1, o = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, f = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, _ = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, m = b.scale), "min_width" in b && t(10, h = b.min_width), "$$scope" in b && t(11, l = b.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    l,
    n,
    g
  ];
}
class Bs extends mm {
  constructor(e) {
    super(), vm(this, e, Bm, zm, ym, {
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
  SvelteComponent: Dm,
  add_render_callback: Qr,
  append: Ti,
  attr: Te,
  binding_callbacks: da,
  check_outros: qm,
  create_bidirectional_transition: ha,
  destroy_each: Lm,
  detach: gi,
  element: rl,
  empty: Mm,
  ensure_array_like: ma,
  group_outros: Em,
  init: Rm,
  insert: bi,
  listen: Ds,
  prevent_default: Am,
  run_all: Wm,
  safe_not_equal: Xm,
  set_data: Ym,
  set_style: Rn,
  space: qs,
  text: Im,
  toggle_class: rt,
  transition_in: rs,
  transition_out: ga
} = window.__gradio__svelte__internal, { createEventDispatcher: Hm } = window.__gradio__svelte__internal;
function ba(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function wa(i) {
  let e, t, n, l, s, o = ma(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = pa(ba(i, o, a));
  return {
    c() {
      e = rl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Te(e, "class", "options svelte-yuohum"), Te(e, "role", "listbox"), Rn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Rn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Rn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, f) {
      bi(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (s = Ds(e, "mousedown", Am(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = ma(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = ba(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = pa(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Rn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Rn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Rn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Qr(() => {
        n && (t || (t = ha(e, yo, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ha(e, yo, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && gi(e), Lm(r, a), i[22](null), a && t && t.end(), l = !1, s();
    }
  };
}
function pa(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = rl("li"), t = rl("span"), t.textContent = "✓", n = qs(), s = Im(l), o = qs(), Te(t, "class", "inner-item svelte-yuohum"), rt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Te(e, "class", "item svelte-yuohum"), Te(e, "data-index", r = /*index*/
      i[26]), Te(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Te(e, "data-testid", "dropdown-option"), Te(e, "role", "option"), Te(e, "aria-selected", f = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), rt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), rt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), rt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), rt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      bi(c, e, u), Ti(e, t), Ti(e, n), Ti(e, s), Ti(e, o);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && rt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Ym(s, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Te(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Te(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Te(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && rt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && gi(e);
    }
  };
}
function Tm(i) {
  let e, t, n, l, s;
  Qr(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && wa(i)
  );
  return {
    c() {
      e = rl("div"), t = qs(), o && o.c(), n = Mm(), Te(e, "class", "reference");
    },
    m(r, a) {
      bi(r, e, a), i[20](e), bi(r, t, a), o && o.m(r, a), bi(r, n, a), l || (s = [
        Ds(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Ds(
          window,
          "resize",
          /*onwindowresize*/
          i[19]
        )
      ], l = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && rs(o, 1)) : (o = wa(r), o.c(), rs(o, 1), o.m(n.parentNode, n)) : o && (Em(), ga(o, 1, 1, () => {
        o = null;
      }), qm());
    },
    i(r) {
      rs(o);
    },
    o(r) {
      ga(o);
    },
    d(r) {
      r && (gi(e), gi(t), gi(n)), i[20](null), o && o.d(r), l = !1, Wm(s);
    }
  };
}
function jm(i, e, t) {
  var n, l;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, m, h, g, b, p, w;
  function k() {
    const { top: A, bottom: R } = h.getBoundingClientRect();
    t(16, u = A), t(17, _ = w - R);
  }
  let D = null;
  function v() {
    r && (D !== null && clearTimeout(D), D = setTimeout(
      () => {
        k(), D = null;
      },
      10
    ));
  }
  const z = Hm();
  function S() {
    t(11, w = window.innerHeight);
  }
  function C(A) {
    da[A ? "unshift" : "push"](() => {
      h = A, t(6, h);
    });
  }
  const B = (A) => z("change", A);
  function X(A) {
    da[A ? "unshift" : "push"](() => {
      g = A, t(7, g);
    });
  }
  return i.$$set = (A) => {
    "choices" in A && t(0, s = A.choices), "filtered_indices" in A && t(1, o = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && f.length > 0) {
          let R = g.querySelectorAll("li");
          for (const J of Array.from(R))
            if (J.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, J.offsetTop);
              break;
            }
        }
        k();
        const A = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, m = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, p = _), t(9, b = null)) : (t(9, b = `${_ + d}px`), t(10, p = u - d));
    }
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    h,
    g,
    m,
    b,
    p,
    w,
    v,
    z,
    n,
    l,
    u,
    _,
    d,
    S,
    C,
    B,
    X
  ];
}
class Fm extends Dm {
  constructor(e) {
    super(), Rm(this, e, jm, Tm, Xm, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Um(i, e) {
  return (i % e + e) % e;
}
function va(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function Vm(i, e, t) {
  i("change", e), t || i("input");
}
function Nm(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Um(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Om,
  append: tn,
  attr: He,
  binding_callbacks: Pm,
  check_outros: Km,
  create_component: Ls,
  destroy_component: Ms,
  detach: Us,
  element: Xn,
  group_outros: Zm,
  init: Gm,
  insert: Vs,
  listen: li,
  mount_component: Es,
  run_all: Jm,
  safe_not_equal: Qm,
  set_data: xm,
  set_input_value: ka,
  space: fs,
  text: $m,
  toggle_class: An,
  transition_in: Yn,
  transition_out: _i
} = window.__gradio__svelte__internal, { onMount: eg } = window.__gradio__svelte__internal, { createEventDispatcher: tg, afterUpdate: ng } = window.__gradio__svelte__internal;
function ig(i) {
  let e;
  return {
    c() {
      e = $m(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Vs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && xm(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Us(e);
    }
  };
}
function ya(i) {
  let e, t, n;
  return t = new Ws({}), {
    c() {
      e = Xn("div"), Ls(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, s) {
      Vs(l, e, s), Es(t, e, null), n = !0;
    },
    i(l) {
      n || (Yn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      _i(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Us(e), Ms(t);
    }
  };
}
function lg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m;
  t = new Qa({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [ig] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && ya();
  return u = new Fm({
    props: {
      show_options: (
        /*show_options*/
        i[12]
      ),
      choices: (
        /*choices*/
        i[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        i[10]
      ),
      disabled: (
        /*disabled*/
        i[3]
      ),
      selected_indices: (
        /*selected_index*/
        i[11] === null ? [] : [
          /*selected_index*/
          i[11]
        ]
      ),
      active_index: (
        /*active_index*/
        i[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = Xn("div"), Ls(t.$$.fragment), n = fs(), l = Xn("div"), s = Xn("div"), o = Xn("div"), r = Xn("input"), f = fs(), h && h.c(), c = fs(), Ls(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), He(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), He(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], He(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], An(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), He(o, "class", "secondary-wrap svelte-1m1zvyj"), He(s, "class", "wrap-inner svelte-1m1zvyj"), An(
        s,
        "show_options",
        /*show_options*/
        i[12]
      ), He(l, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), An(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      Vs(g, e, b), Es(t, e, null), tn(e, n), tn(e, l), tn(l, s), tn(s, o), tn(o, r), ka(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), tn(o, f), h && h.m(o, null), tn(l, c), Es(u, l, null), _ = !0, d || (m = [
        li(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        li(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        li(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        li(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        li(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], d = !0);
    },
    p(g, b) {
      const p = {};
      b[0] & /*show_label*/
      16 && (p.show_label = /*show_label*/
      g[4]), b[0] & /*info*/
      2 && (p.info = /*info*/
      g[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      4 && (p.$$scope = { dirty: b, ctx: g }), t.$set(p), (!_ || b[0] & /*show_options*/
      4096) && He(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || b[0] & /*label*/
      1) && He(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && ka(
        r,
        /*input_text*/
        g[9]
      ), (!_ || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && An(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Zm(), _i(h, 1, 1, () => {
        h = null;
      }), Km()) : h ? b[0] & /*disabled*/
      8 && Yn(h, 1) : (h = ya(), h.c(), Yn(h, 1), h.m(o, null)), (!_ || b[0] & /*show_options*/
      4096) && An(
        s,
        "show_options",
        /*show_options*/
        g[12]
      );
      const w = {};
      b[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      g[12]), b[0] & /*choices*/
      4 && (w.choices = /*choices*/
      g[2]), b[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      g[10]), b[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      g[3]), b[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), b[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      g[14]), u.$set(w), (!_ || b[0] & /*container*/
      32) && An(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (Yn(t.$$.fragment, g), Yn(h), Yn(u.$$.fragment, g), _ = !0);
    },
    o(g) {
      _i(t.$$.fragment, g), _i(h), _i(u.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && Us(e), Ms(t), i[29](null), h && h.d(), Ms(u), d = !1, Jm(m);
    }
  };
}
function sg(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, p, w = "", k = "", D = !1, v = [], z = null, S = null, C;
  const B = tg();
  s ? (C = a.map((E) => E[1]).indexOf(s), S = C, S === -1 ? (o = s, S = null) : ([w, o] = a[S], k = w), A()) : a.length > 0 && (C = 0, S = 0, [w, s] = a[S], o = s, k = w);
  function X() {
    t(13, b = a.map((E) => E[0])), t(24, p = a.map((E) => E[1]));
  }
  function A() {
    X(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, w = ""), t(11, S = null)) : p.includes(s) ? (t(9, w = b[p.indexOf(s)]), t(11, S = p.indexOf(s))) : d ? (t(9, w = s), t(11, S = null)) : (t(9, w = ""), t(11, S = null)), t(27, C = S);
  }
  function R(E) {
    if (t(11, S = parseInt(E.detail.target.dataset.index)), isNaN(S)) {
      t(11, S = null);
      return;
    }
    t(12, g = !1), t(14, z = null), h.blur();
  }
  function J(E) {
    t(10, v = a.map((N, ge) => ge)), t(12, g = !0), B("focus");
  }
  function ee() {
    d ? t(20, s = w) : t(9, w = b[p.indexOf(s)]), t(12, g = !1), t(14, z = null), B("blur");
  }
  function Z(E) {
    t(12, [g, z] = Nm(E, z, v), g, (t(14, z), t(2, a), t(23, f), t(6, d), t(9, w), t(10, v), t(8, h), t(25, k), t(11, S), t(27, C), t(26, D), t(24, p))), E.key === "Enter" && (z !== null ? (t(11, S = z), t(12, g = !1), h.blur(), t(14, z = null)) : b.includes(w) ? (t(11, S = b.indexOf(w)), t(12, g = !1), t(14, z = null), h.blur()) : d && (t(20, s = w), t(11, S = null), t(12, g = !1), t(14, z = null), h.blur()), B("enter", s));
  }
  ng(() => {
    t(21, r = !1), t(26, D = !0);
  }), eg(() => {
    h.focus();
  });
  function fe() {
    w = this.value, t(9, w), t(11, S), t(27, C), t(26, D), t(2, a), t(24, p);
  }
  function Y(E) {
    Pm[E ? "unshift" : "push"](() => {
      h = E, t(8, h);
    });
  }
  const j = (E) => B("key_up", { key: E.key, input_value: w });
  return i.$$set = (E) => {
    "label" in E && t(0, n = E.label), "info" in E && t(1, l = E.info), "value" in E && t(20, s = E.value), "value_is_output" in E && t(21, r = E.value_is_output), "choices" in E && t(2, a = E.choices), "disabled" in E && t(3, c = E.disabled), "show_label" in E && t(4, u = E.show_label), "container" in E && t(5, _ = E.container), "allow_custom_value" in E && t(6, d = E.allow_custom_value), "filterable" in E && t(7, m = E.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && S !== C && S !== null && D && (t(9, [w, s] = a[S], w, (t(20, s), t(11, S), t(27, C), t(26, D), t(2, a), t(24, p))), t(27, C = S), B("select", {
      index: S,
      value: p[S],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (A(), Vm(B, s, r), t(22, o = s)), i.$$.dirty[0] & /*choices*/
    4 && X(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, v = va(a, w)), !d && v.length > 0 && t(14, z = v[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && w !== k && (t(10, v = va(a, w)), t(25, k = w), !d && v.length > 0 && t(14, z = v[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    _,
    d,
    m,
    h,
    w,
    v,
    S,
    g,
    b,
    z,
    B,
    R,
    J,
    ee,
    Z,
    s,
    r,
    o,
    f,
    p,
    k,
    D,
    C,
    fe,
    Y,
    j
  ];
}
class og extends Om {
  constructor(e) {
    super(), Gm(
      this,
      e,
      sg,
      lg,
      Qm,
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
  SvelteComponent: ag,
  append: Ne,
  attr: jn,
  check_outros: Rs,
  create_component: un,
  destroy_component: _n,
  detach: Qn,
  element: ft,
  group_outros: As,
  init: rg,
  insert: xn,
  listen: fg,
  mount_component: dn,
  safe_not_equal: cg,
  set_style: Fn,
  space: si,
  text: Ns,
  toggle_class: Ca,
  transition_in: ze,
  transition_out: je
} = window.__gradio__svelte__internal, { createEventDispatcher: ug } = window.__gradio__svelte__internal, { onMount: _g } = window.__gradio__svelte__internal;
function Sa(i) {
  let e, t, n, l, s, o, r;
  const a = [hg, dg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = f[n] = a[n](i), {
    c() {
      e = ft("div"), t = ft("button"), l.c(), jn(t, "class", "icon svelte-d9x7u0"), jn(t, "aria-label", "Lock label detail"), Ca(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Fn(e, "margin-right", "8px");
    },
    m(u, _) {
      xn(u, e, _), Ne(e, t), f[n].m(t, null), s = !0, o || (r = fg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (As(), je(f[d], 1, 1, () => {
        f[d] = null;
      }), Rs(), l = f[n], l || (l = f[n] = a[n](u), l.c()), ze(l, 1), l.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && Ca(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (ze(l), s = !0);
    },
    o(u) {
      je(l), s = !1;
    },
    d(u) {
      u && Qn(e), f[n].d(), o = !1, r();
    }
  };
}
function dg(i) {
  let e, t;
  return e = new J0({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, l) {
      dn(e, n, l), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _n(e, n);
    }
  };
}
function hg(i) {
  let e, t;
  return e = new U0({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, l) {
      dn(e, n, l), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _n(e, n);
    }
  };
}
function mg(i) {
  let e;
  return {
    c() {
      e = Ns("Cancel");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function za(i) {
  let e, t, n;
  return t = new Bs({
    props: {
      variant: "stop",
      $$slots: { default: [gg] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = ft("div"), un(t.$$.fragment), Fn(e, "margin-right", "8px");
    },
    m(l, s) {
      xn(l, e, s), dn(t, e, null), n = !0;
    },
    p(l, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: l }), t.$set(o);
    },
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      je(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Qn(e), _n(t);
    }
  };
}
function gg(i) {
  let e;
  return {
    c() {
      e = Ns("Remove");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function bg(i) {
  let e;
  return {
    c() {
      e = Ns("OK");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function wg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h, g, b, p = !/*showRemove*/
  i[4] && Sa(i);
  o = new og({
    props: {
      value: (
        /*currentLabel*/
        i[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        i[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), o.$on(
    "change",
    /*onDropDownChange*/
    i[6]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    i[8]
  ), f = new hm({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), f.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), _ = new Bs({
    props: {
      $$slots: { default: [mg] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let w = (
    /*showRemove*/
    i[4] && za(i)
  );
  return g = new Bs({
    props: {
      variant: "primary",
      $$slots: { default: [bg] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = ft("div"), t = ft("div"), n = ft("span"), p && p.c(), l = si(), s = ft("div"), un(o.$$.fragment), r = si(), a = ft("div"), un(f.$$.fragment), c = si(), u = ft("div"), un(_.$$.fragment), d = si(), w && w.c(), m = si(), h = ft("div"), un(g.$$.fragment), Fn(s, "margin-right", "10px"), Fn(a, "margin-right", "40px"), Fn(a, "margin-bottom", "8px"), Fn(u, "margin-right", "8px"), jn(n, "class", "model-content svelte-d9x7u0"), jn(t, "class", "modal-container svelte-d9x7u0"), jn(e, "class", "modal svelte-d9x7u0"), jn(e, "id", "model-box-edit");
    },
    m(k, D) {
      xn(k, e, D), Ne(e, t), Ne(t, n), p && p.m(n, null), Ne(n, l), Ne(n, s), dn(o, s, null), Ne(n, r), Ne(n, a), dn(f, a, null), Ne(n, c), Ne(n, u), dn(_, u, null), Ne(n, d), w && w.m(n, null), Ne(n, m), Ne(n, h), dn(g, h, null), b = !0;
    },
    p(k, [D]) {
      /*showRemove*/
      k[4] ? p && (As(), je(p, 1, 1, () => {
        p = null;
      }), Rs()) : p ? (p.p(k, D), D & /*showRemove*/
      16 && ze(p, 1)) : (p = Sa(k), p.c(), ze(p, 1), p.m(n, l));
      const v = {};
      D & /*currentLabel*/
      1 && (v.value = /*currentLabel*/
      k[0]), D & /*choices*/
      8 && (v.choices = /*choices*/
      k[3]), o.$set(v);
      const z = {};
      D & /*currentColor*/
      2 && (z.value = /*currentColor*/
      k[1]), f.$set(z);
      const S = {};
      D & /*$$scope*/
      262144 && (S.$$scope = { dirty: D, ctx: k }), _.$set(S), /*showRemove*/
      k[4] ? w ? (w.p(k, D), D & /*showRemove*/
      16 && ze(w, 1)) : (w = za(k), w.c(), ze(w, 1), w.m(n, m)) : w && (As(), je(w, 1, 1, () => {
        w = null;
      }), Rs());
      const C = {};
      D & /*$$scope*/
      262144 && (C.$$scope = { dirty: D, ctx: k }), g.$set(C);
    },
    i(k) {
      b || (ze(p), ze(o.$$.fragment, k), ze(f.$$.fragment, k), ze(_.$$.fragment, k), ze(w), ze(g.$$.fragment, k), b = !0);
    },
    o(k) {
      je(p), je(o.$$.fragment, k), je(f.$$.fragment, k), je(_.$$.fragment, k), je(w), je(g.$$.fragment, k), b = !1;
    },
    d(k) {
      k && Qn(e), p && p.d(), _n(o), _n(f), _n(_), w && w.d(), _n(g);
    }
  };
}
function pg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = ug();
  function _(D) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: D
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(D) {
    const { detail: v } = D;
    let z = v;
    Number.isInteger(z) ? (Array.isArray(o) && z < o.length && t(1, a = o[z]), Array.isArray(s) && z < s.length && t(0, l = s[z][0])) : t(0, l = z);
  }
  function m(D) {
    const { detail: v } = D;
    t(1, a = v);
  }
  function h(D) {
    d(D), _(1);
  }
  function g(D) {
    t(2, c = !c);
  }
  function b(D) {
    switch (D.key.toLowerCase()) {
      case "enter":
        _(1);
        break;
      case "escape":
        _(0);
        break;
    }
  }
  _g(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const p = () => _(0), w = () => _(-1), k = () => _(1);
  return i.$$set = (D) => {
    "label" in D && t(10, n = D.label), "currentLabel" in D && t(0, l = D.currentLabel), "choices" in D && t(3, s = D.choices), "choicesColors" in D && t(11, o = D.choicesColors), "color" in D && t(12, r = D.color), "currentColor" in D && t(1, a = D.currentColor), "showRemove" in D && t(4, f = D.showRemove), "labelDetailLock" in D && t(2, c = D.labelDetailLock);
  }, [
    l,
    a,
    c,
    s,
    f,
    _,
    d,
    m,
    h,
    g,
    n,
    o,
    r,
    p,
    w,
    k
  ];
}
class Os extends ag {
  constructor(e) {
    super(), rg(this, e, pg, wg, cg, {
      label: 10,
      currentLabel: 0,
      choices: 3,
      choicesColors: 11,
      color: 12,
      currentColor: 1,
      showRemove: 4,
      labelDetailLock: 2
    });
  }
}
const pe = (i, e, t) => Math.min(Math.max(i, e), t);
function cs(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, s] = t;
  return `rgba(${n}, ${l}, ${s}, ${e})`;
}
class us {
  constructor(e, t, n, l, s, o, r, a, f, c, u, _, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, p = 2, w = 4, k = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (D) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let v = (D.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, z = (D.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        v = pe(v, -this._xmin, S - this._xmax), z = pe(z, -this._ymin, C - this._ymax), this._xmin += v, this._ymin += z, this._xmax += v, this._ymax += z, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (D) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [v, z] = this.toBoxCoordinates(D.clientX, D.clientY);
        v = (v - this.offsetMouseX) / this.canvasWindow.scale, z = (z - this.offsetMouseY) / this.canvasWindow.scale, v > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = v, this.creatingAnchorX = "xmin") : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = v : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = v : v < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = v, this.creatingAnchorX = "xmax"), z > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = z, this.creatingAnchorY = "ymin") : z > this._ymin && z < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = z : z > this._ymin && z < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = z : z < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = z, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (D) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = pe(this._xmin, 0, v - this.minSize), this._ymin = pe(this._ymin, 0, z - this.minSize), this._xmax = pe(this._xmax, this.minSize, v), this._ymax = pe(this._ymax, this.minSize, z), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > v ? (this._xmin -= this._xmax - v, this._xmax = v) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > z ? (this._ymin -= this._ymax - z, this._ymax = z) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (D) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const v = D.clientX, z = D.clientY, S = (v - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (z - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, B = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, X = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += S, this._ymin += C, this._xmin = pe(this._xmin, 0, this._xmax - this.minSize), this._ymin = pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += S, this._ymin += C, this._xmax = pe(this._xmax, this._xmin + this.minSize, B), this._ymin = pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += S, this._ymax += C, this._xmax = pe(this._xmax, this._xmin + this.minSize, B), this._ymax = pe(this._ymax, this._ymin + this.minSize, X);
            break;
          case 3:
            this._xmin += S, this._ymax += C, this._xmin = pe(this._xmin, 0, this._xmax - this.minSize), this._ymax = pe(this._ymax, this._ymin + this.minSize, X);
            break;
          case 4:
            this._ymin += C, this._ymin = pe(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += S, this._xmax = pe(this._xmax, this._xmin + this.minSize, B);
            break;
          case 6:
            this._ymax += C, this._ymax = pe(this._ymax, this._ymin + this.minSize, X);
            break;
          case 7:
            this._xmin += S, this._xmin = pe(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = s, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = k, this.label = f, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = _, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = p, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * t), this._ymin = Math.round(this._ymin * t), this._xmax = Math.round(this._xmax * t), this._ymax = Math.round(this._ymax * t), this.applyUserScale(), this.scaleFactor = e;
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
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let t, n;
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = cs(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = cs(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, l, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, l, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = cs(this.color, 1);
    for (const l of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        t,
        n,
        l.xmax - l.xmin,
        l.ymax - l.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const l = this.resizeHandles[n];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
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
  onRotate(e) {
    const [t, n, l, s] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - s, this._xmax = this.canvasWindow.imageWidth - l, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = l, this._xmax = s, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const nn = [
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
], ji = (i, e, t) => Math.min(Math.max(i, e), t);
class vg {
  constructor(e, t) {
    this.stopDrag = () => {
      this.pointersCache.size === 0 ? (this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag)) : this.pointersCache.size === 1 && (this.isDragging = !0, this.startDragX = this.pointersCache.values().next().value.clientX, this.startDragY = this.pointersCache.values().next().value.clientY);
    }, this.handleDrag = (n) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        if (this.scale == 1) {
          this.offsetX = (this.canvasWidth - this.imageWidth) / 2, this.offsetY = 0, this.renderCallBack();
          return;
        }
        let l = n.clientX - this.startDragX, s = n.clientY - this.startDragY;
        this.imageWidth * this.scale > this.canvasWidth ? l = ji(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = ji(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = ji(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = ji(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += s, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.pointersCache = t, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX, this.startDragY = e.clientY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, l = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = l);
  }
}
const {
  SvelteComponent: kg,
  append: Oe,
  attr: oe,
  binding_callbacks: Ba,
  bubble: _s,
  check_outros: Un,
  create_component: Bt,
  destroy_component: Dt,
  detach: Pt,
  element: ct,
  empty: yg,
  group_outros: Vn,
  init: Cg,
  insert: Kt,
  listen: Ee,
  mount_component: qt,
  noop: xr,
  run_all: $r,
  safe_not_equal: Sg,
  set_style: Fi,
  space: zt,
  toggle_class: Ui,
  transition_in: x,
  transition_out: ue
} = window.__gradio__svelte__internal, { onMount: zg, createEventDispatcher: Bg } = window.__gradio__svelte__internal;
function Da(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h, g, b;
  n = new u0({}), o = new p0({});
  let p = (
    /*showRemoveButton*/
    i[1] && qa(i)
  ), w = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && La(i);
  return u = new V_({}), m = new q_({}), {
    c() {
      e = ct("span"), t = ct("button"), Bt(n.$$.fragment), l = zt(), s = ct("button"), Bt(o.$$.fragment), r = zt(), p && p.c(), a = zt(), w && w.c(), f = zt(), c = ct("button"), Bt(u.$$.fragment), _ = zt(), d = ct("button"), Bt(m.$$.fragment), oe(t, "class", "icon svelte-1m8vz1h"), oe(t, "aria-label", "Create box"), oe(t, "title", "Create box (C)"), Ui(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), oe(s, "class", "icon svelte-1m8vz1h"), oe(s, "aria-label", "Drag boxes"), oe(s, "title", "Drag boxes (D)"), Ui(
        s,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), oe(c, "class", "icon svelte-1m8vz1h"), oe(c, "aria-label", "Rotate counterclockwise"), oe(c, "title", "Rotate counterclockwise"), oe(d, "class", "icon svelte-1m8vz1h"), oe(d, "aria-label", "Rotate clockwise"), oe(d, "title", "Rotate clockwise"), oe(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(k, D) {
      Kt(k, e, D), Oe(e, t), qt(n, t, null), Oe(e, l), Oe(e, s), qt(o, s, null), Oe(e, r), p && p.m(e, null), Oe(e, a), w && w.m(e, null), Oe(e, f), Oe(e, c), qt(u, c, null), Oe(e, _), Oe(e, d), qt(m, d, null), h = !0, g || (b = [
        Ee(
          t,
          "click",
          /*click_handler*/
          i[42]
        ),
        Ee(
          s,
          "click",
          /*click_handler_1*/
          i[43]
        ),
        Ee(
          c,
          "click",
          /*click_handler_4*/
          i[46]
        ),
        Ee(
          d,
          "click",
          /*click_handler_5*/
          i[47]
        )
      ], g = !0);
    },
    p(k, D) {
      (!h || D[0] & /*mode, Mode*/
      4352) && Ui(
        t,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[8].creation
      ), (!h || D[0] & /*mode, Mode*/
      4352) && Ui(
        s,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[8].drag
      ), /*showRemoveButton*/
      k[1] ? p ? (p.p(k, D), D[0] & /*showRemoveButton*/
      2 && x(p, 1)) : (p = qa(k), p.c(), x(p, 1), p.m(e, a)) : p && (Vn(), ue(p, 1, 1, () => {
        p = null;
      }), Un()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[16] ? w ? (w.p(k, D), D[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && x(w, 1)) : (w = La(k), w.c(), x(w, 1), w.m(e, f)) : w && (Vn(), ue(w, 1, 1, () => {
        w = null;
      }), Un());
    },
    i(k) {
      h || (x(n.$$.fragment, k), x(o.$$.fragment, k), x(p), x(w), x(u.$$.fragment, k), x(m.$$.fragment, k), h = !0);
    },
    o(k) {
      ue(n.$$.fragment, k), ue(o.$$.fragment, k), ue(p), ue(w), ue(u.$$.fragment, k), ue(m.$$.fragment, k), h = !1;
    },
    d(k) {
      k && Pt(e), Dt(n), Dt(o), p && p.d(), w && w.d(), Dt(u), Dt(m), g = !1, $r(b);
    }
  };
}
function qa(i) {
  let e, t, n, l, s;
  return t = new D0({}), {
    c() {
      e = ct("button"), Bt(t.$$.fragment), oe(e, "class", "icon svelte-1m8vz1h"), oe(e, "aria-label", "Remove box"), oe(e, "title", "Remove box (Del)");
    },
    m(o, r) {
      Kt(o, e, r), qt(t, e, null), n = !0, l || (s = Ee(
        e,
        "click",
        /*click_handler_2*/
        i[44]
      ), l = !0);
    },
    p: xr,
    i(o) {
      n || (x(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ue(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Pt(e), Dt(t), l = !1, s();
    }
  };
}
function La(i) {
  let e, t, n, l, s;
  return t = new W0({}), {
    c() {
      e = ct("button"), Bt(t.$$.fragment), oe(e, "class", "icon svelte-1m8vz1h"), oe(e, "aria-label", "Edit label"), oe(e, "title", "Edit label");
    },
    m(o, r) {
      Kt(o, e, r), qt(t, e, null), n = !0, l || (s = Ee(
        e,
        "click",
        /*click_handler_3*/
        i[45]
      ), l = !0);
    },
    p: xr,
    i(o) {
      n || (x(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ue(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Pt(e), Dt(t), l = !1, s();
    }
  };
}
function Ma(i) {
  let e, t;
  return e = new Os({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? pn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[26]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[50]
  ), {
    c() {
      Bt(e.$$.fragment);
    },
    m(n, l) {
      qt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? pn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || (x(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Ea(i) {
  let e, t;
  return e = new Os({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? pn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[16]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[27]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[51]
  ), {
    c() {
      Bt(e.$$.fragment);
    },
    m(n, l) {
      qt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? pn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (s.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(s);
    },
    i(n) {
      t || (x(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Ra(i) {
  let e, t;
  return e = new Os({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? pn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[16]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[28]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[52]
  ), {
    c() {
      Bt(e.$$.fragment);
    },
    m(n, l) {
      qt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? pn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (s.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(s);
    },
    i(n) {
      t || (x(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Dg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _ = (
    /*interactive*/
    i[2] && Da(i)
  ), d = (
    /*editModalVisible*/
    i[13] && Ma(i)
  ), m = (
    /*newModalVisible*/
    i[14] && Ea(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[15] && Ra(i)
  );
  return {
    c() {
      e = ct("div"), t = ct("div"), n = ct("canvas"), l = zt(), _ && _.c(), s = zt(), d && d.c(), o = zt(), m && m.c(), r = zt(), h && h.c(), a = yg(), Fi(
        n,
        "height",
        /*height*/
        i[6]
      ), Fi(
        n,
        "width",
        /*width*/
        i[7]
      ), oe(n, "class", "canvas-annotator svelte-1m8vz1h"), oe(t, "class", "canvas-container svelte-1m8vz1h"), oe(e, "class", "annotator-container"), oe(e, "tabindex", "0");
    },
    m(g, b) {
      Kt(g, e, b), Oe(e, t), Oe(t, n), i[41](n), Oe(e, l), _ && _.m(e, null), i[48](e), Kt(g, s, b), d && d.m(g, b), Kt(g, o, b), m && m.m(g, b), Kt(g, r, b), h && h.m(g, b), Kt(g, a, b), f = !0, c || (u = [
        Ee(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[17]
        ),
        Ee(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[18]
        ),
        Ee(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[20]
        ),
        Ee(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[19]
        ),
        Ee(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[25]
        ),
        Ee(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[22]
        ),
        Ee(
          e,
          "keydown",
          /*handleKeyPress*/
          i[21]
        ),
        Ee(
          e,
          "click",
          /*click_handler_6*/
          i[49]
        )
      ], c = !0);
    },
    p(g, b) {
      (!f || b[0] & /*height*/
      64) && Fi(
        n,
        "height",
        /*height*/
        g[6]
      ), (!f || b[0] & /*width*/
      128) && Fi(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? _ ? (_.p(g, b), b[0] & /*interactive*/
      4 && x(_, 1)) : (_ = Da(g), _.c(), x(_, 1), _.m(e, null)) : _ && (Vn(), ue(_, 1, 1, () => {
        _ = null;
      }), Un()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && x(d, 1)) : (d = Ma(g), d.c(), x(d, 1), d.m(o.parentNode, o)) : d && (Vn(), ue(d, 1, 1, () => {
        d = null;
      }), Un()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && x(m, 1)) : (m = Ea(g), m.c(), x(m, 1), m.m(r.parentNode, r)) : m && (Vn(), ue(m, 1, 1, () => {
        m = null;
      }), Un()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && x(h, 1)) : (h = Ra(g), h.c(), x(h, 1), h.m(a.parentNode, a)) : h && (Vn(), ue(h, 1, 1, () => {
        h = null;
      }), Un());
    },
    i(g) {
      f || (x(_), x(d), x(m), x(h), f = !0);
    },
    o(g) {
      ue(_), ue(d), ue(m), ue(h), f = !1;
    },
    d(g) {
      g && (Pt(e), Pt(s), Pt(o), Pt(r), Pt(a)), i[41](null), _ && _.d(), i[48](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, $r(u);
    }
  };
}
const Aa = 100;
function Vi(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function pn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function qg(i, e, t) {
  var n;
  (function(y) {
    y[y.creation = 0] = "creation", y[y.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: b = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: w = !0 } = e, { useDefaultLabel: k = !1 } = e, { enableKeyboardShortcuts: D = !0 } = e;
  p === null && (p = m);
  let v, z, S, C = null, B = -1, X = n.drag, A = /* @__PURE__ */ new Map(), R = new vg(H, A);
  u !== null && u.boxes.length == 0 && (X = n.creation);
  let J = 0, ee = 0, Z = 0, fe = 0, Y = 1, j = 0, E = 0, N = !1, ge = !1, ce = !1, te = k, W = { label: "", color: "" }, se = { x: 0, y: 0, distance: 0 };
  const L = Bg();
  function H() {
    if (S) {
      if (S.clearRect(0, 0, v.width, v.height), S.save(), S.translate(R.offsetX, R.offsetY), S.scale(R.scale, R.scale), C !== null) {
        switch (u.orientation) {
          case 0:
            S.drawImage(C, 0, 0, j, E);
            break;
          case 1:
            S.translate(j, 0), S.rotate(Math.PI / 2), S.drawImage(C, 0, 0, E, j);
            break;
          case 2:
            S.translate(j, E), S.rotate(Math.PI), S.drawImage(C, 0, 0, j, E);
            break;
          case 3:
            S.translate(0, E), S.rotate(-Math.PI / 2), S.drawImage(C, 0, 0, E, j);
            break;
        }
        S.restore();
      }
      for (const y of u.boxes.slice().reverse())
        y.render(S);
    }
  }
  function K(y) {
    t(11, B = y), u.boxes.forEach((I) => {
      I.setSelected(!1);
    }), y >= 0 && y < u.boxes.length && u.boxes[y].setSelected(!0), H();
  }
  const ie = (y, I) => {
    const V = Math.sqrt(Math.pow(y.clientX - I.clientX, 2) + Math.pow(y.clientY - I.clientY, 2));
    return V < Aa ? Aa : V;
  };
  function _e(y) {
    if (s) {
      if (y.preventDefault(), v.setPointerCapture(y.pointerId), A.set(y.pointerId, y), A.size == 1)
        X === n.creation ? yl(y) : X === n.drag && M(y);
      else if (A.size == 2) {
        R.isDragging = !1, u.boxes.forEach((Yt) => {
          Yt.isCreating = !1, Yt.isDragging = !1, Yt.isResizing = !1;
        });
        const I = Array.from(A.values()), V = I[0], Q = I[1], ne = ie(V, Q), $ = v.getBoundingClientRect(), be = (V.clientX + Q.clientX) / 2 - $.left, vt = (V.clientY + Q.clientY) / 2 - $.top;
        se.distance = ne, se.x = be, se.y = vt;
      }
    }
  }
  function M(y) {
    const I = v.getBoundingClientRect(), V = y.clientX - I.left, Q = y.clientY - I.top;
    let ne = !1;
    for (const [$, be] of u.boxes.entries()) {
      const vt = be.indexOfPointInsideHandle(V, Q);
      if (vt >= 0) {
        ne = !0, K($), be.startResize(vt, y);
        return;
      }
    }
    for (const [$, be] of u.boxes.entries())
      if (be.isPointInsideBox(V, Q)) {
        ne = !0, K($), be.startDrag(y);
        return;
      }
    b || K(-1), ne || R.startDrag(y);
  }
  function st(y) {
    s && (A.delete(y.pointerId), v.releasePointerCapture(y.pointerId), L("change"));
  }
  function ht(y) {
    s && (A.delete(y.pointerId), v.releasePointerCapture(y.pointerId), L("change"));
  }
  function Xe(y) {
    if (s)
      if (y.preventDefault(), y.pointerType === "mouse") {
        if (!w || u === null || X !== n.drag)
          return;
        const I = v.getBoundingClientRect(), V = y.clientX - I.left, Q = y.clientY - I.top;
        for (const [ne, $] of u.boxes.entries()) {
          const be = $.indexOfPointInsideHandle(V, Q);
          if (be >= 0) {
            t(9, v.style.cursor = $.resizeHandles[be].cursor, v);
            return;
          }
        }
        t(9, v.style.cursor = "default", v);
      } else {
        if (!A.has(y.pointerId))
          return;
        if (A.set(y.pointerId, y), A.size === 2) {
          const I = Array.from(A.values()), V = I[0], Q = I[1], ne = ie(V, Q), $ = v.getBoundingClientRect(), be = (V.clientX + Q.clientX) / 2 - $.left, vt = (V.clientY + Q.clientY) / 2 - $.top, Yt = parseFloat((R.scale * (ne / se.distance)).toFixed(2)), Ks = Yt < 1 ? 1 : Yt, Zs = Ks / R.scale;
          R.offsetX = se.x - (se.x - R.offsetX) * Zs, R.offsetY = se.y - (se.y - R.offsetY) * Zs;
          const wf = be - se.x, pf = vt - se.y;
          R.offsetX += wf, R.offsetY += pf, R.scale = Ks, se.x = be, se.y = vt, se.distance = ne, H();
        }
      }
  }
  function Ge() {
    const y = v.width / j, I = v.height / E, V = Math.min(y, I);
    R.scale = V, R.offsetX = (v.width - j * V) / 2, R.offsetY = (v.height - E * V) / 2, H();
  }
  function Je(y) {
    if (!D || y.target !== z || !s)
      return;
    const I = y.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(I) && (y.preventDefault(), y.stopPropagation()), I) {
      case "delete":
        Xt();
        break;
      case "c":
        Cn();
        break;
      case "d":
        Sn();
        break;
      case "e":
        gt();
        break;
      case " ":
        Ge();
        break;
    }
  }
  function mt() {
    setTimeout(
      () => {
        z == null || z.focus();
      },
      0
    );
  }
  function kl(y) {
    if (!s)
      return;
    y.preventDefault();
    const I = 1 / (1 + y.deltaY / 1e3 * 0.5), V = parseFloat((R.scale * I).toFixed(2)), Q = V < 1 ? 1 : V, ne = v.getBoundingClientRect(), $ = y.clientX - ne.left, be = y.clientY - ne.top, vt = ($ - R.offsetX) / R.scale, Yt = (be - R.offsetY) / R.scale;
    R.offsetX = $ - vt * Q, R.offsetY = be - Yt * Q, R.scale = Q, H();
  }
  function yl(y) {
    const I = v.getBoundingClientRect(), V = (y.clientX - I.left - R.offsetX) / Y / R.scale, Q = (y.clientY - I.top - R.offsetY) / Y / R.scale;
    let ne;
    d.length > 0 ? ne = Vi(d[0]) : b ? u.boxes.length > 0 ? ne = u.boxes[0].color : ne = nn[0] : ne = nn[u.boxes.length % nn.length];
    let $ = new us(H, q, R, A, J, ee, Z, fe, "", V, Q, V, Q, ne, o, r, a, f, c);
    $.startCreating(y, I.left, I.top), b ? t(0, u.boxes = [$], u) : t(0, u.boxes = [$, ...u.boxes], u), K(0), H(), L("change");
  }
  function Cn() {
    t(12, X = n.creation), t(9, v.style.cursor = "crosshair", v);
  }
  function Sn() {
    t(12, X = n.drag), t(9, v.style.cursor = "default", v);
  }
  function q() {
    B >= 0 && B < u.boxes.length && (u.boxes[B].getArea() < 1 ? Xt() : (m || (te ? Bn() : t(14, ge = !0)), b && Sn()));
  }
  function gt() {
    B >= 0 && B < u.boxes.length && !m && t(13, N = !0);
  }
  function bt(y) {
    s && gt();
  }
  function zn(y) {
    t(13, N = !1), mt();
    const { detail: I } = y;
    let V = I.label, Q = I.color, ne = I.ret;
    if (B >= 0 && B < u.boxes.length) {
      let $ = u.boxes[B];
      ne == 1 ? ($.label = V, $.color = Vi(Q), H(), L("change")) : ne == -1 && Xt();
    }
  }
  function Cl(y) {
    t(14, ge = !1), mt();
    const { detail: I } = y;
    let V = I.label, Q = I.color, ne = I.ret, $ = I.lock;
    if (B >= 0 && B < u.boxes.length) {
      let be = u.boxes[B];
      ne == 1 ? (t(16, te = $), W.label = V, W.color = Q, be.label = V, be.color = Vi(Q), H(), L("change")) : Xt();
    }
  }
  function Qt(y) {
    t(15, ce = !1), mt();
    const { detail: I } = y;
    let V = I.label, Q = I.color, ne = I.ret, $ = I.lock;
    ne == 1 && (t(16, te = $), W.label = V, W.color = Q);
  }
  function Bn() {
    if (B >= 0 && B < u.boxes.length) {
      let y = u.boxes[B];
      y.label = W.label, W.color !== "" && (y.color = Vi(W.color)), H(), L("change");
    }
  }
  function Xt() {
    B >= 0 && B < u.boxes.length && (u.boxes.splice(B, 1), K(-1), b && Cn(), L("change"));
  }
  function $n(y) {
    t(0, u.orientation = ((u.orientation + y) % 4 + 4) % 4, u), R.orientation = u.orientation, wt();
    for (const I of u.boxes)
      I.onRotate(y);
    H();
  }
  function wt() {
    if (v) {
      if (Y = 1, t(9, v.width = v.clientWidth, v), R.setRotatedImage(C), C !== null) {
        if (R.imageRotatedWidth > v.width)
          Y = v.width / R.imageRotatedWidth, j = Math.round(R.imageRotatedWidth * Y), E = Math.round(R.imageRotatedHeight * Y), J = 0, ee = 0, Z = j, fe = E, t(9, v.height = E, v);
        else {
          j = R.imageRotatedWidth, E = R.imageRotatedHeight;
          var y = (v.width - j) / 2;
          J = y, ee = 0, Z = y + j, fe = E, t(9, v.height = E, v);
        }
        R.imageWidth = j, R.imageHeight = E;
      } else
        J = 0, ee = 0, Z = v.width, fe = v.height, t(9, v.height = v.clientHeight, v);
      if (R.resize(v.width, v.height, J, ee), Z > 0 && fe > 0)
        for (const I of u.boxes)
          I.canvasXmin = J, I.canvasYmin = ee, I.canvasXmax = Z, I.canvasYmax = fe, I.setScaleFactor(Y);
      H(), L("change");
    }
  }
  const pt = new ResizeObserver(wt);
  function ei() {
    for (let y = 0; y < u.boxes.length; y++) {
      let I = u.boxes[y];
      if (!(I instanceof us)) {
        let V = "", Q = "";
        I.hasOwnProperty("color") ? (V = I.color, Array.isArray(V) && V.length === 3 && (V = `rgb(${V[0]}, ${V[1]}, ${V[2]})`)) : V = nn[y % nn.length], I.hasOwnProperty("label") && (Q = I.label), I = new us(H, q, R, A, J, ee, Z, fe, Q, I.xmin, I.ymin, I.xmax, I.ymax, V, o, r, a, f, c), t(0, u.boxes[y] = I, u);
      }
    }
  }
  function Ps() {
    l !== null && (C === null || C.src != l) && (C = new Image(), C.src = l, C.onload = function() {
      wt(), H();
    });
  }
  zg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let y = 0; y < _.length; y++) {
          let I = nn[y % nn.length];
          d.push(pn(I));
        }
      W.label = _[0][0], W.color = d[0];
    }
    S = v.getContext("2d"), pt.observe(v), B < 0 && u !== null && u.boxes.length > 0 && K(0), Ps(), wt(), H();
  });
  function of(y) {
    Ba[y ? "unshift" : "push"](() => {
      v = y, t(9, v);
    });
  }
  const af = () => Cn(), rf = () => Sn(), ff = () => Xt(), cf = () => t(15, ce = !0), uf = () => $n(-1), _f = () => $n(1);
  function df(y) {
    Ba[y ? "unshift" : "push"](() => {
      z = y, t(10, z);
    });
  }
  const hf = () => z.focus();
  function mf(y) {
    _s.call(this, i, y);
  }
  function gf(y) {
    _s.call(this, i, y);
  }
  function bf(y) {
    _s.call(this, i, y);
  }
  return i.$$set = (y) => {
    "imageUrl" in y && t(31, l = y.imageUrl), "interactive" in y && t(2, s = y.interactive), "boxAlpha" in y && t(32, o = y.boxAlpha), "boxMinSize" in y && t(33, r = y.boxMinSize), "handleSize" in y && t(34, a = y.handleSize), "boxThickness" in y && t(35, f = y.boxThickness), "boxSelectedThickness" in y && t(36, c = y.boxSelectedThickness), "value" in y && t(0, u = y.value), "choices" in y && t(3, _ = y.choices), "choicesColors" in y && t(4, d = y.choicesColors), "disableEditBoxes" in y && t(5, m = y.disableEditBoxes), "height" in y && t(6, h = y.height), "width" in y && t(7, g = y.width), "singleBox" in y && t(37, b = y.singleBox), "showRemoveButton" in y && t(1, p = y.showRemoveButton), "handlesCursor" in y && t(38, w = y.handlesCursor), "useDefaultLabel" in y && t(39, k = y.useDefaultLabel), "enableKeyboardShortcuts" in y && t(40, D = y.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (R.orientation = u.orientation, Ps(), ei(), wt(), H());
  }, [
    u,
    p,
    s,
    _,
    d,
    m,
    h,
    g,
    n,
    v,
    z,
    B,
    X,
    N,
    ge,
    ce,
    te,
    _e,
    st,
    ht,
    Xe,
    Je,
    kl,
    Cn,
    Sn,
    bt,
    zn,
    Cl,
    Qt,
    Xt,
    $n,
    l,
    o,
    r,
    a,
    f,
    c,
    b,
    w,
    k,
    D,
    of,
    af,
    rf,
    ff,
    cf,
    uf,
    _f,
    df,
    hf,
    mf,
    gf,
    bf
  ];
}
class Lg extends kg {
  constructor(e) {
    super(), Cg(
      this,
      e,
      qg,
      Dg,
      Sg,
      {
        imageUrl: 31,
        interactive: 2,
        boxAlpha: 32,
        boxMinSize: 33,
        handleSize: 34,
        boxThickness: 35,
        boxSelectedThickness: 36,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 37,
        showRemoveButton: 1,
        handlesCursor: 38,
        useDefaultLabel: 39,
        enableKeyboardShortcuts: 40
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Mg,
  add_flush_callback: Eg,
  bind: Rg,
  binding_callbacks: Ag,
  create_component: Wg,
  destroy_component: Xg,
  init: Yg,
  mount_component: Ig,
  safe_not_equal: Hg,
  transition_in: Tg,
  transition_out: jg
} = window.__gradio__svelte__internal, { createEventDispatcher: Fg } = window.__gradio__svelte__internal;
function Ug(i) {
  let e, t, n;
  function l(o) {
    i[20](o);
  }
  let s = {
    interactive: (
      /*interactive*/
      i[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      i[2]
    ),
    choices: (
      /*labelList*/
      i[3]
    ),
    choicesColors: (
      /*labelColors*/
      i[4]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[5]
    ),
    handleSize: (
      /*handleSize*/
      i[6]
    ),
    boxThickness: (
      /*boxThickness*/
      i[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[11]
    ),
    singleBox: (
      /*singleBox*/
      i[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[15]
    ),
    imageUrl: (
      /*resolved_src*/
      i[16]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (s.value = /*value*/
    i[0]), e = new Lg({ props: s }), Ag.push(() => Rg(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), {
      c() {
        Wg(e.$$.fragment);
      },
      m(o, r) {
        Ig(e, o, r), n = !0;
      },
      p(o, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        o[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        o[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        o[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        o[4]), r & /*height*/
        256 && (a.height = /*height*/
        o[8]), r & /*width*/
        512 && (a.width = /*width*/
        o[9]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        o[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        o[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        o[7]), r & /*boxSelectedThickness*/
        1024 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        o[10]), r & /*disableEditBoxes*/
        2048 && (a.disableEditBoxes = /*disableEditBoxes*/
        o[11]), r & /*singleBox*/
        4096 && (a.singleBox = /*singleBox*/
        o[12]), r & /*showRemoveButton*/
        8192 && (a.showRemoveButton = /*showRemoveButton*/
        o[13]), r & /*handlesCursor*/
        16384 && (a.handlesCursor = /*handlesCursor*/
        o[14]), r & /*useDefaultLabel*/
        32768 && (a.useDefaultLabel = /*useDefaultLabel*/
        o[15]), r & /*resolved_src*/
        65536 && (a.imageUrl = /*resolved_src*/
        o[16]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        o[0], Eg(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Tg(e.$$.fragment, o), n = !0);
      },
      o(o) {
        jg(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Xg(e, o);
      }
    }
  );
}
function Vg(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: p } = e, { useDefaultLabel: w } = e, k, D;
  const v = Fg();
  function z(C) {
    m = C, t(0, m);
  }
  const S = () => v("change");
  return i.$$set = (C) => {
    "src" in C && t(18, n = C.src), "interactive" in C && t(1, l = C.interactive), "boxesAlpha" in C && t(2, s = C.boxesAlpha), "labelList" in C && t(3, o = C.labelList), "labelColors" in C && t(4, r = C.labelColors), "boxMinSize" in C && t(5, a = C.boxMinSize), "handleSize" in C && t(6, f = C.handleSize), "boxThickness" in C && t(7, c = C.boxThickness), "height" in C && t(8, u = C.height), "width" in C && t(9, _ = C.width), "boxSelectedThickness" in C && t(10, d = C.boxSelectedThickness), "value" in C && t(0, m = C.value), "disableEditBoxes" in C && t(11, h = C.disableEditBoxes), "singleBox" in C && t(12, g = C.singleBox), "showRemoveButton" in C && t(13, b = C.showRemoveButton), "handlesCursor" in C && t(14, p = C.handlesCursor), "useDefaultLabel" in C && t(15, w = C.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, k = n), t(19, D = n);
      const C = n;
      k1(C).then((B) => {
        D === C && t(16, k = B);
      });
    }
  }, [
    m,
    l,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    h,
    g,
    b,
    p,
    w,
    k,
    v,
    n,
    D,
    z,
    S
  ];
}
class Ng extends Mg {
  constructor(e) {
    super(), Yg(this, e, Vg, Ug, Hg, {
      src: 18,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      height: 8,
      width: 9,
      boxSelectedThickness: 10,
      value: 0,
      disableEditBoxes: 11,
      singleBox: 12,
      showRemoveButton: 13,
      handlesCursor: 14,
      useDefaultLabel: 15
    });
  }
}
class Wa {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Og,
  add_flush_callback: fl,
  append: Wn,
  attr: di,
  bind: cl,
  binding_callbacks: vi,
  bubble: oi,
  check_outros: sn,
  create_component: Mt,
  create_slot: Pg,
  destroy_component: Et,
  detach: hn,
  element: wi,
  empty: Kg,
  get_all_dirty_from_scope: Zg,
  get_slot_changes: Gg,
  group_outros: on,
  init: Jg,
  insert: mn,
  mount_component: Rt,
  noop: Qg,
  safe_not_equal: xg,
  space: ln,
  toggle_class: Xa,
  transition_in: G,
  transition_out: le,
  update_slot_base: $g
} = window.__gradio__svelte__internal, { createEventDispatcher: e2, tick: t2 } = window.__gradio__svelte__internal;
function Ya(i) {
  let e, t;
  return e = new W1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [n2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, l) {
      Rt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*value*/
      2 && (s.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (s.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      8388608 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function n2(i) {
  let e, t;
  return e = new ul({
    props: {
      Icon: Ku,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, l) {
      Rt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      n[8]("common.download")), e.$set(s);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Ia(i) {
  let e, t;
  return e = new gd({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[39]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[40]
  ), e.$on(
    "error",
    /*error_handler*/
    i[41]
  ), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, l) {
      Rt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      2 && (s.value = /*value*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Ha(i) {
  let e, t, n;
  return t = new ul({
    props: { Icon: er, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[37]
  ), {
    c() {
      e = wi("div"), Mt(t.$$.fragment);
    },
    m(l, s) {
      mn(l, e, s), Rt(t, e, null), n = !0;
    },
    p: Qg,
    i(l) {
      n || (G(t.$$.fragment, l), n = !0);
    },
    o(l) {
      le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && hn(e), Et(t);
    }
  };
}
function Ta(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Pg(
    t,
    i,
    /*$$scope*/
    i[54],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, s) {
      n && n.m(l, s), e = !0;
    },
    p(l, s) {
      n && n.p && (!e || s[1] & /*$$scope*/
      8388608) && $g(
        n,
        t,
        l,
        /*$$scope*/
        l[54],
        e ? Gg(
          t,
          /*$$scope*/
          l[54],
          s,
          null
        ) : Zg(
          /*$$scope*/
          l[54]
        ),
        null
      );
    },
    i(l) {
      e || (G(n, l), e = !0);
    },
    o(l) {
      le(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function i2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ta(i)
  );
  return {
    c() {
      n && n.c(), e = Kg();
    },
    m(l, s) {
      n && n.m(l, s), mn(l, e, s), t = !0;
    },
    p(l, s) {
      /*value*/
      l[1] === null ? n ? (n.p(l, s), s[0] & /*value*/
      2 && G(n, 1)) : (n = Ta(l), n.c(), G(n, 1), n.m(e.parentNode, e)) : n && (on(), le(n, 1, 1, () => {
        n = null;
      }), sn());
    },
    i(l) {
      t || (G(n), t = !0);
    },
    o(l) {
      le(n), t = !1;
    },
    d(l) {
      l && hn(e), n && n.d(l);
    }
  };
}
function ja(i) {
  let e, t;
  return e = new l0({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[32]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[46]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[47]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[48]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[49]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[50]
  ), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, l) {
      Rt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      64 && (s.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      2 && (s.upload = /*upload*/
      n[32]), e.$set(s);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Fa(i) {
  let e, t, n, l;
  function s(r) {
    i[51](r);
  }
  let o = {
    height: (
      /*height*/
      i[17]
    ),
    width: (
      /*width*/
      i[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      i[12]
    ),
    labelList: (
      /*labelList*/
      i[13]
    ),
    labelColors: (
      /*labelColors*/
      i[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[15]
    ),
    interactive: (
      /*interactive*/
      i[7]
    ),
    handleSize: (
      /*handleSize*/
      i[16]
    ),
    boxThickness: (
      /*boxThickness*/
      i[19]
    ),
    singleBox: (
      /*singleBox*/
      i[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[28]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      i[29]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (o.value = /*value*/
    i[1]), t = new Ng({ props: o }), vi.push(() => cl(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), {
      c() {
        e = wi("div"), Mt(t.$$.fragment), di(e, "class", "image-frame svelte-1gjdske"), Xa(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        mn(r, e, a), Rt(t, e, null), l = !0;
      },
      p(r, a) {
        const f = {};
        a[0] & /*height*/
        131072 && (f.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (f.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
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
        524288 && (f.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (f.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (f.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (f.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (f.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*enableKeyboardShortcuts*/
        536870912 && (f.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        r[29]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], fl(() => n = !1)), t.$set(f), (!l || a[0] & /*selectable*/
        32) && Xa(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (G(t.$$.fragment, r), l = !0);
      },
      o(r) {
        le(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && hn(e), Et(t);
      }
    }
  );
}
function Ua(i) {
  let e, t, n;
  function l(o) {
    i[53](o);
  }
  let s = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[37]
    ),
    handle_select: (
      /*handle_select_source*/
      i[36]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (s.active_source = /*active_source*/
    i[0]), e = new Rd({ props: s }), vi.push(() => cl(e, "active_source", l)), {
      c() {
        Mt(e.$$.fragment);
      },
      m(o, r) {
        Rt(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], fl(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (G(e.$$.fragment, o), n = !0);
      },
      o(o) {
        le(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Et(e, o);
      }
    }
  );
}
function l2(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new Ac({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: tr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Ya(i)
  ), p = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Ia(i)
  ), w = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Ha(i)
  );
  function k(B) {
    i[43](B);
  }
  function D(B) {
    i[44](B);
  }
  let v = {
    hidden: (
      /*value*/
      i[1] !== null || /*active_source*/
      i[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      i[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      i[6]
    ),
    max_file_size: (
      /*max_file_size*/
      i[25]
    ),
    disable_click: !/*sources*/
    i[4].includes("upload"),
    upload: (
      /*cli_upload*/
      i[26]
    ),
    stream_handler: (
      /*stream_handler*/
      i[27]
    ),
    $$slots: { default: [i2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (v.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (v.dragging = /*dragging*/
  i[31]), f = new dh({ props: v }), i[42](f), vi.push(() => cl(f, "uploading", k)), vi.push(() => cl(f, "dragging", D)), f.$on(
    "load",
    /*handle_upload*/
    i[33]
  ), f.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let z = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && ja(i)
  ), S = (
    /*value*/
    i[1] !== null && Fa(i)
  ), C = h && Ua(i);
  return {
    c() {
      Mt(e.$$.fragment), t = ln(), n = wi("div"), b && b.c(), l = ln(), p && p.c(), s = ln(), w && w.c(), o = ln(), r = wi("div"), a = wi("div"), Mt(f.$$.fragment), _ = ln(), z && z.c(), d = ln(), S && S.c(), m = ln(), C && C.c(), di(n, "class", "icon-buttons svelte-1gjdske"), di(a, "class", "upload-container svelte-1gjdske"), di(r, "data-testid", "image"), di(r, "class", "image-container svelte-1gjdske");
    },
    m(B, X) {
      Rt(e, B, X), mn(B, t, X), mn(B, n, X), b && b.m(n, null), Wn(n, l), p && p.m(n, null), Wn(n, s), w && w.m(n, null), mn(B, o, X), mn(B, r, X), Wn(r, a), Rt(f, a, null), Wn(a, _), z && z.m(a, null), Wn(a, d), S && S.m(a, null), Wn(r, m), C && C.m(r, null), g = !0;
    },
    p(B, X) {
      const A = {};
      X[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      B[3]), X[0] & /*label*/
      4 && (A.label = /*label*/
      B[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      B[10] && /*value*/
      B[1] !== null ? b ? (b.p(B, X), X[0] & /*showDownloadButton, value*/
      1026 && G(b, 1)) : (b = Ya(B), b.c(), G(b, 1), b.m(n, l)) : b && (on(), le(b, 1, 1, () => {
        b = null;
      }), sn()), /*showShareButton*/
      B[9] && /*value*/
      B[1] !== null ? p ? (p.p(B, X), X[0] & /*showShareButton, value*/
      514 && G(p, 1)) : (p = Ia(B), p.c(), G(p, 1), p.m(n, s)) : p && (on(), le(p, 1, 1, () => {
        p = null;
      }), sn()), /*showClearButton*/
      B[11] && /*value*/
      B[1] !== null && /*interactive*/
      B[7] ? w ? (w.p(B, X), X[0] & /*showClearButton, value, interactive*/
      2178 && G(w, 1)) : (w = Ha(B), w.c(), G(w, 1), w.m(n, null)) : w && (on(), le(w, 1, 1, () => {
        w = null;
      }), sn());
      const R = {};
      X[0] & /*value, active_source*/
      3 && (R.hidden = /*value*/
      B[1] !== null || /*active_source*/
      B[0] === "webcam"), X[0] & /*active_source*/
      1 && (R.filetype = /*active_source*/
      B[0] === "clipboard" ? "clipboard" : "image/*"), X[0] & /*root*/
      64 && (R.root = /*root*/
      B[6]), X[0] & /*max_file_size*/
      33554432 && (R.max_file_size = /*max_file_size*/
      B[25]), X[0] & /*sources*/
      16 && (R.disable_click = !/*sources*/
      B[4].includes("upload")), X[0] & /*cli_upload*/
      67108864 && (R.upload = /*cli_upload*/
      B[26]), X[0] & /*stream_handler*/
      134217728 && (R.stream_handler = /*stream_handler*/
      B[27]), X[0] & /*value*/
      2 | X[1] & /*$$scope*/
      8388608 && (R.$$scope = { dirty: X, ctx: B }), !c && X[0] & /*uploading*/
      1073741824 && (c = !0, R.uploading = /*uploading*/
      B[30], fl(() => c = !1)), !u && X[1] & /*dragging*/
      1 && (u = !0, R.dragging = /*dragging*/
      B[31], fl(() => u = !1)), f.$set(R), /*value*/
      B[1] === null && /*active_source*/
      B[0] === "webcam" ? z ? (z.p(B, X), X[0] & /*value, active_source*/
      3 && G(z, 1)) : (z = ja(B), z.c(), G(z, 1), z.m(a, d)) : z && (on(), le(z, 1, 1, () => {
        z = null;
      }), sn()), /*value*/
      B[1] !== null ? S ? (S.p(B, X), X[0] & /*value*/
      2 && G(S, 1)) : (S = Fa(B), S.c(), G(S, 1), S.m(a, null)) : S && (on(), le(S, 1, 1, () => {
        S = null;
      }), sn()), X[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (B[4].length > 1 || /*sources*/
      B[4].includes("clipboard")) && /*value*/
      B[1] === null && /*interactive*/
      B[7]), h ? C ? (C.p(B, X), X[0] & /*sources, value, interactive*/
      146 && G(C, 1)) : (C = Ua(B), C.c(), G(C, 1), C.m(r, null)) : C && (on(), le(C, 1, 1, () => {
        C = null;
      }), sn());
    },
    i(B) {
      g || (G(e.$$.fragment, B), G(b), G(p), G(w), G(f.$$.fragment, B), G(z), G(S), G(C), g = !0);
    },
    o(B) {
      le(e.$$.fragment, B), le(b), le(p), le(w), le(f.$$.fragment, B), le(z), le(S), le(C), g = !1;
    },
    d(B) {
      B && (hn(t), hn(n), hn(o), hn(r)), Et(e, B), b && b.d(), p && p.d(), w && w.d(), i[42](null), Et(f), z && z.d(), S && S.d(), C && C.d();
    }
  };
}
function s2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(q, gt, bt, zn) {
    function Cl(Qt) {
      return Qt instanceof bt ? Qt : new bt(function(Bn) {
        Bn(Qt);
      });
    }
    return new (bt || (bt = Promise))(function(Qt, Bn) {
      function Xt(pt) {
        try {
          wt(zn.next(pt));
        } catch (ei) {
          Bn(ei);
        }
      }
      function $n(pt) {
        try {
          wt(zn.throw(pt));
        } catch (ei) {
          Bn(ei);
        }
      }
      function wt(pt) {
        pt.done ? Qt(pt.value) : Cl(pt.value).then(Xt, $n);
      }
      wt((zn = zn.apply(q, gt || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: p } = e, { labelColors: w } = e, { boxMinSize: k } = e, { handleSize: D } = e, { height: v } = e, { width: z } = e, { boxThickness: S } = e, { disableEditBoxes: C } = e, { singleBox: B } = e, { showRemoveButton: X } = e, { handlesCursor: A } = e, { boxSelectedThickness: R } = e, { max_file_size: J = null } = e, { cli_upload: ee } = e, { stream_handler: Z } = e, { useDefaultLabel: fe } = e, { enableKeyboardShortcuts: Y } = e, j, E = !1, { active_source: N = null } = e;
  function ge({ detail: q }) {
    t(1, o = new Wa()), t(1, o.image = q, o), te("upload");
  }
  function ce(q) {
    return s(this, void 0, void 0, function* () {
      const gt = yield j.load_files([new File([q], "webcam.png")]), bt = (gt == null ? void 0 : gt[0]) || null;
      bt ? (t(1, o = new Wa()), t(1, o.image = bt, o)) : t(1, o = null), yield t2(), te("change");
    });
  }
  const te = e2();
  let W = !1;
  function se(q) {
    return s(this, void 0, void 0, function* () {
      switch (q) {
        case "clipboard":
          j.paste_clipboard();
          break;
      }
    });
  }
  function L() {
    t(1, o = null), te("clear"), te("change");
  }
  const H = async (q) => q === null ? "" : `<img src="${await id(q.image)}" />`;
  function K(q) {
    oi.call(this, i, q);
  }
  function ie(q) {
    oi.call(this, i, q);
  }
  function _e(q) {
    vi[q ? "unshift" : "push"](() => {
      j = q, t(32, j);
    });
  }
  function M(q) {
    E = q, t(30, E);
  }
  function st(q) {
    W = q, t(31, W);
  }
  function ht(q) {
    oi.call(this, i, q);
  }
  const Xe = (q) => ce(q.detail), Ge = (q) => ce(q.detail);
  function Je(q) {
    oi.call(this, i, q);
  }
  function mt(q) {
    oi.call(this, i, q);
  }
  const kl = (q) => ce(q.detail);
  function yl(q) {
    o = q, t(1, o);
  }
  const Cn = () => te("change");
  function Sn(q) {
    N = q, t(0, N), t(4, f);
  }
  return i.$$set = (q) => {
    "value" in q && t(1, o = q.value), "label" in q && t(2, r = q.label), "show_label" in q && t(3, a = q.show_label), "sources" in q && t(4, f = q.sources), "selectable" in q && t(5, c = q.selectable), "root" in q && t(6, u = q.root), "interactive" in q && t(7, _ = q.interactive), "i18n" in q && t(8, d = q.i18n), "showShareButton" in q && t(9, m = q.showShareButton), "showDownloadButton" in q && t(10, h = q.showDownloadButton), "showClearButton" in q && t(11, g = q.showClearButton), "boxesAlpha" in q && t(12, b = q.boxesAlpha), "labelList" in q && t(13, p = q.labelList), "labelColors" in q && t(14, w = q.labelColors), "boxMinSize" in q && t(15, k = q.boxMinSize), "handleSize" in q && t(16, D = q.handleSize), "height" in q && t(17, v = q.height), "width" in q && t(18, z = q.width), "boxThickness" in q && t(19, S = q.boxThickness), "disableEditBoxes" in q && t(20, C = q.disableEditBoxes), "singleBox" in q && t(21, B = q.singleBox), "showRemoveButton" in q && t(22, X = q.showRemoveButton), "handlesCursor" in q && t(23, A = q.handlesCursor), "boxSelectedThickness" in q && t(24, R = q.boxSelectedThickness), "max_file_size" in q && t(25, J = q.max_file_size), "cli_upload" in q && t(26, ee = q.cli_upload), "stream_handler" in q && t(27, Z = q.stream_handler), "useDefaultLabel" in q && t(28, fe = q.useDefaultLabel), "enableKeyboardShortcuts" in q && t(29, Y = q.enableKeyboardShortcuts), "active_source" in q && t(0, N = q.active_source), "$$scope" in q && t(54, l = q.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    1073741824 && E && L(), i.$$.dirty[1] & /*dragging*/
    1 && te("drag", W), i.$$.dirty[0] & /*active_source, sources*/
    17 && !N && f && t(0, N = f[0]);
  }, [
    N,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    g,
    b,
    p,
    w,
    k,
    D,
    v,
    z,
    S,
    C,
    B,
    X,
    A,
    R,
    J,
    ee,
    Z,
    fe,
    Y,
    E,
    W,
    j,
    ge,
    ce,
    te,
    se,
    L,
    n,
    H,
    K,
    ie,
    _e,
    M,
    st,
    ht,
    Xe,
    Ge,
    Je,
    mt,
    kl,
    yl,
    Cn,
    Sn,
    l
  ];
}
class o2 extends Og {
  constructor(e) {
    super(), Jg(
      this,
      e,
      s2,
      l2,
      xg,
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
        height: 17,
        width: 18,
        boxThickness: 19,
        disableEditBoxes: 20,
        singleBox: 21,
        showRemoveButton: 22,
        handlesCursor: 23,
        boxSelectedThickness: 24,
        max_file_size: 25,
        cli_upload: 26,
        stream_handler: 27,
        useDefaultLabel: 28,
        enableKeyboardShortcuts: 29,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: a2,
  attr: Qi,
  detach: ef,
  element: tf,
  init: r2,
  insert: nf,
  noop: Va,
  safe_not_equal: f2,
  src_url_equal: Na,
  toggle_class: Nt
} = window.__gradio__svelte__internal;
function Oa(i) {
  let e, t;
  return {
    c() {
      e = tf("img"), Na(e.src, t = /*value*/
      i[0].url) || Qi(e, "src", t), Qi(e, "alt", "");
    },
    m(n, l) {
      nf(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Na(e.src, t = /*value*/
      n[0].url) && Qi(e, "src", t);
    },
    d(n) {
      n && ef(e);
    }
  };
}
function c2(i) {
  let e, t = (
    /*value*/
    i[0] && Oa(i)
  );
  return {
    c() {
      e = tf("div"), t && t.c(), Qi(e, "class", "container svelte-1sgcyba"), Nt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Nt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Nt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Nt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      nf(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Oa(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Nt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Nt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Nt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Nt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Va,
    o: Va,
    d(n) {
      n && ef(e), t && t.d();
    }
  };
}
function u2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: s = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, l = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, l, s];
}
class X2 extends a2 {
  constructor(e) {
    super(), r2(this, e, u2, c2, f2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: _2,
  add_flush_callback: Pa,
  assign: d2,
  bind: Ka,
  binding_callbacks: Za,
  check_outros: h2,
  create_component: vn,
  destroy_component: kn,
  detach: lf,
  empty: m2,
  flush: P,
  get_spread_object: g2,
  get_spread_update: b2,
  group_outros: w2,
  init: p2,
  insert: sf,
  mount_component: yn,
  safe_not_equal: v2,
  space: k2,
  transition_in: At,
  transition_out: Wt
} = window.__gradio__svelte__internal;
function y2(i) {
  let e, t;
  return e = new cu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [z2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*$$scope*/
      16384 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function C2(i) {
  let e, t;
  return e = new rr({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*gradio*/
      2 && (s.i18n = /*gradio*/
      n[32].i18n), e.$set(s);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function S2(i) {
  let e, t;
  return e = new rr({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*gradio*/
      2 && (s.i18n = /*gradio*/
      n[32].i18n), e.$set(s);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function z2(i) {
  let e, t;
  return e = new tr({}), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function B2(i) {
  let e, t, n, l;
  const s = [S2, C2, y2], o = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[34] === "upload" ? 0 : (
        /*active_source*/
        a[34] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = m2();
    },
    m(a, f) {
      o[e].m(a, f), sf(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (w2(), Wt(o[c], 1, 1, () => {
        o[c] = null;
      }), h2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), At(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (At(t), l = !0);
    },
    o(a) {
      Wt(t), l = !1;
    },
    d(a) {
      a && lf(n), o[e].d(a);
    }
  };
}
function D2(i) {
  let e, t, n, l, s, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[32].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[32].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = d2(a, r[_]);
  e = new b1({ props: a });
  function f(_) {
    i[35](_);
  }
  function c(_) {
    i[36](_);
  }
  let u = {
    selectable: (
      /*_selectable*/
      i[10]
    ),
    root: (
      /*root*/
      i[7]
    ),
    sources: (
      /*sources*/
      i[14]
    ),
    interactive: (
      /*interactive*/
      i[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      i[15]
    ),
    showShareButton: (
      /*show_share_button*/
      i[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      i[17]
    ),
    i18n: (
      /*gradio*/
      i[32].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      i[19]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    labelList: (
      /*label_list*/
      i[20]
    ),
    labelColors: (
      /*label_colors*/
      i[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      i[22]
    ),
    label: (
      /*label*/
      i[5]
    ),
    show_label: (
      /*show_label*/
      i[6]
    ),
    max_file_size: (
      /*gradio*/
      i[32].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[32].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[32].client.stream
    ),
    handleSize: (
      /*handle_size*/
      i[23]
    ),
    boxThickness: (
      /*box_thickness*/
      i[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      i[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      i[26]
    ),
    singleBox: (
      /*single_box*/
      i[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      i[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      i[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      i[30]
    ),
    enableKeyboardShortcuts: (
      /*enable_keyboard_shortcuts*/
      i[31]
    ),
    $$slots: { default: [B2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new o2({ props: u }), Za.push(() => Ka(n, "active_source", f)), Za.push(() => Ka(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      i[37]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[38]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[39]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[40]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[41]
    ), n.$on(
      "select",
      /*select_handler*/
      i[42]
    ), n.$on(
      "share",
      /*share_handler*/
      i[43]
    ), n.$on(
      "error",
      /*error_handler*/
      i[44]
    ), {
      c() {
        vn(e.$$.fragment), t = k2(), vn(n.$$.fragment);
      },
      m(_, d) {
        yn(e, _, d), sf(_, t, d), yn(n, _, d), o = !0;
      },
      p(_, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        2 ? b2(r, [
          d[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              _[32].autoscroll
            )
          },
          d[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            _[32].i18n
          ) },
          d[0] & /*loading_status*/
          2 && g2(
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
        _[17]), d[1] & /*gradio*/
        2 && (h.i18n = /*gradio*/
        _[32].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*height*/
        256 && (h.height = /*height*/
        _[8]), d[0] & /*width*/
        512 && (h.width = /*width*/
        _[9]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        _[6]), d[1] & /*gradio*/
        2 && (h.max_file_size = /*gradio*/
        _[32].max_file_size), d[1] & /*gradio*/
        2 && (h.cli_upload = /*gradio*/
        _[32].client.upload), d[1] & /*gradio*/
        2 && (h.stream_handler = /*gradio*/
        _[32].client.stream), d[0] & /*handle_size*/
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
        _[29]), d[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        _[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (h.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        _[31]), d[1] & /*$$scope, gradio, active_source*/
        16394 && (h.$$scope = { dirty: d, ctx: _ }), !l && d[1] & /*active_source*/
        8 && (l = !0, h.active_source = /*active_source*/
        _[34], Pa(() => l = !1)), !s && d[0] & /*value*/
        1 && (s = !0, h.value = /*value*/
        _[0], Pa(() => s = !1)), n.$set(h);
      },
      i(_) {
        o || (At(e.$$.fragment, _), At(n.$$.fragment, _), o = !0);
      },
      o(_) {
        Wt(e.$$.fragment, _), Wt(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && lf(t), kn(e, _), kn(n, _);
      }
    }
  );
}
function q2(i) {
  let e, t;
  return e = new Xf({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[33] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        i[2]
      ),
      elem_classes: (
        /*elem_classes*/
        i[3]
      ),
      width: (
        /*width*/
        i[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        i[11]
      ),
      scale: (
        /*scale*/
        i[12]
      ),
      min_width: (
        /*min_width*/
        i[13]
      ),
      $$slots: { default: [D2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*visible*/
      16 && (s.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      4 && (s.border_mode = /*dragging*/
      n[33] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      n[2]), l[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      n[3]), l[0] & /*width*/
      512 && (s.width = /*width*/
      n[9]), l[0] & /*container*/
      2048 && (s.container = /*container*/
      n[11]), l[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      n[12]), l[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      n[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | l[1] & /*$$scope, gradio, enable_keyboard_shortcuts, active_source, dragging*/
      16399 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function L2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: p } = e, { show_share_button: w } = e, { show_clear_button: k } = e, { interactive: D } = e, { boxes_alpha: v } = e, { label_list: z } = e, { label_colors: S } = e, { box_min_size: C } = e, { handle_size: B } = e, { box_thickness: X } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: R } = e, { single_box: J } = e, { show_remove_button: ee } = e, { handles_cursor: Z } = e, { use_default_label: fe } = e, { enable_keyboard_shortcuts: Y } = e, { gradio: j } = e, E, N = null;
  function ge(M) {
    N = M, t(34, N);
  }
  function ce(M) {
    o = M, t(0, o);
  }
  const te = () => j.dispatch("change"), W = () => j.dispatch("edit"), se = () => {
    j.dispatch("clear");
  }, L = ({ detail: M }) => t(33, E = M), H = () => j.dispatch("upload"), K = ({ detail: M }) => j.dispatch("select", M), ie = ({ detail: M }) => j.dispatch("share", M), _e = ({ detail: M }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), j.dispatch("error", M);
  };
  return i.$$set = (M) => {
    "elem_id" in M && t(2, n = M.elem_id), "elem_classes" in M && t(3, l = M.elem_classes), "visible" in M && t(4, s = M.visible), "value" in M && t(0, o = M.value), "label" in M && t(5, r = M.label), "show_label" in M && t(6, a = M.show_label), "root" in M && t(7, f = M.root), "height" in M && t(8, c = M.height), "width" in M && t(9, u = M.width), "_selectable" in M && t(10, _ = M._selectable), "container" in M && t(11, d = M.container), "scale" in M && t(12, m = M.scale), "min_width" in M && t(13, h = M.min_width), "loading_status" in M && t(1, g = M.loading_status), "sources" in M && t(14, b = M.sources), "show_download_button" in M && t(15, p = M.show_download_button), "show_share_button" in M && t(16, w = M.show_share_button), "show_clear_button" in M && t(17, k = M.show_clear_button), "interactive" in M && t(18, D = M.interactive), "boxes_alpha" in M && t(19, v = M.boxes_alpha), "label_list" in M && t(20, z = M.label_list), "label_colors" in M && t(21, S = M.label_colors), "box_min_size" in M && t(22, C = M.box_min_size), "handle_size" in M && t(23, B = M.handle_size), "box_thickness" in M && t(24, X = M.box_thickness), "box_selected_thickness" in M && t(25, A = M.box_selected_thickness), "disable_edit_boxes" in M && t(26, R = M.disable_edit_boxes), "single_box" in M && t(27, J = M.single_box), "show_remove_button" in M && t(28, ee = M.show_remove_button), "handles_cursor" in M && t(29, Z = M.handles_cursor), "use_default_label" in M && t(30, fe = M.use_default_label), "enable_keyboard_shortcuts" in M && t(31, Y = M.enable_keyboard_shortcuts), "gradio" in M && t(32, j = M.gradio);
  }, [
    o,
    g,
    n,
    l,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    b,
    p,
    w,
    k,
    D,
    v,
    z,
    S,
    C,
    B,
    X,
    A,
    R,
    J,
    ee,
    Z,
    fe,
    Y,
    j,
    E,
    N,
    ge,
    ce,
    te,
    W,
    se,
    L,
    H,
    K,
    ie,
    _e
  ];
}
class Y2 extends _2 {
  constructor(e) {
    super(), p2(
      this,
      e,
      L2,
      q2,
      v2,
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
        use_default_label: 30,
        enable_keyboard_shortcuts: 31,
        gradio: 32
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
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), P();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), P();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), P();
  }
}
export {
  X2 as BaseExample,
  Y2 as default
};
