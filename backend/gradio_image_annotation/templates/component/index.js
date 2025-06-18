const {
  SvelteComponent: mf,
  assign: gf,
  create_slot: bf,
  detach: wf,
  element: pf,
  get_all_dirty_from_scope: vf,
  get_slot_changes: kf,
  get_spread_update: yf,
  init: Cf,
  insert: Sf,
  safe_not_equal: zf,
  set_dynamic_element_data: Zs,
  set_style: Ye,
  toggle_class: at,
  transition_in: Pa,
  transition_out: Za,
  update_slot_base: Bf
} = window.__gradio__svelte__internal;
function Df(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), s = bf(
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
    r = gf(r, o[a]);
  return {
    c() {
      e = pf(
        /*tag*/
        i[14]
      ), s && s.c(), Zs(
        /*tag*/
        i[14]
      )(e, r), at(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), at(
        e,
        "padded",
        /*padding*/
        i[6]
      ), at(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), at(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), at(e, "hide-container", !/*explicit_call*/
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
      Sf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && Bf(
        s,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? kf(
          l,
          /*$$scope*/
          a[17],
          f,
          null
        ) : vf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Zs(
        /*tag*/
        a[14]
      )(e, r = yf(o, [
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
      ])), at(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), at(
        e,
        "padded",
        /*padding*/
        a[6]
      ), at(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), at(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), at(e, "hide-container", !/*explicit_call*/
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
      n || (Pa(s, a), n = !0);
    },
    o(a) {
      Za(s, a), n = !1;
    },
    d(a) {
      a && wf(e), s && s.d(a);
    }
  };
}
function qf(i) {
  let e, t = (
    /*tag*/
    i[14] && Df(i)
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
      e || (Pa(t, n), e = !0);
    },
    o(n) {
      Za(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Lf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: p = !0 } = e, { scale: w = null } = e, { min_width: b = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const v = (y) => {
    if (y !== void 0) {
      if (typeof y == "number")
        return y + "px";
      if (typeof y == "string")
        return y;
    }
  };
  return i.$$set = (y) => {
    "height" in y && t(0, s = y.height), "width" in y && t(1, o = y.width), "elem_id" in y && t(2, r = y.elem_id), "elem_classes" in y && t(3, a = y.elem_classes), "variant" in y && t(4, f = y.variant), "border_mode" in y && t(5, c = y.border_mode), "padding" in y && t(6, u = y.padding), "type" in y && t(16, _ = y.type), "test_id" in y && t(7, d = y.test_id), "explicit_call" in y && t(8, m = y.explicit_call), "container" in y && t(9, h = y.container), "visible" in y && t(10, g = y.visible), "allow_overflow" in y && t(11, p = y.allow_overflow), "scale" in y && t(12, w = y.scale), "min_width" in y && t(13, b = y.min_width), "$$scope" in y && t(17, l = y.$$scope);
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
    p,
    w,
    b,
    k,
    v,
    _,
    l,
    n
  ];
}
class Mf extends mf {
  constructor(e) {
    super(), Cf(this, e, Lf, qf, zf, {
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
  SvelteComponent: Ef,
  attr: Rf,
  create_slot: Af,
  detach: Wf,
  element: Xf,
  get_all_dirty_from_scope: Yf,
  get_slot_changes: If,
  init: Hf,
  insert: Tf,
  safe_not_equal: jf,
  transition_in: Ff,
  transition_out: Uf,
  update_slot_base: Vf
} = window.__gradio__svelte__internal;
function Nf(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Af(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Xf("div"), l && l.c(), Rf(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Tf(s, e, o), l && l.m(e, null), t = !0;
    },
    p(s, [o]) {
      l && l.p && (!t || o & /*$$scope*/
      1) && Vf(
        l,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? If(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Yf(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Ff(l, s), t = !0);
    },
    o(s) {
      Uf(l, s), t = !1;
    },
    d(s) {
      s && Wf(e), l && l.d(s);
    }
  };
}
function Of(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (s) => {
    "$$scope" in s && t(0, l = s.$$scope);
  }, [l, n];
}
class Pf extends Ef {
  constructor(e) {
    super(), Hf(this, e, Of, Nf, jf, {});
  }
}
const {
  SvelteComponent: Zf,
  attr: Gs,
  check_outros: Gf,
  create_component: Kf,
  create_slot: Jf,
  destroy_component: Qf,
  detach: Ui,
  element: xf,
  empty: $f,
  get_all_dirty_from_scope: ec,
  get_slot_changes: tc,
  group_outros: nc,
  init: ic,
  insert: Vi,
  mount_component: lc,
  safe_not_equal: sc,
  set_data: oc,
  space: ac,
  text: rc,
  toggle_class: zn,
  transition_in: li,
  transition_out: Ni,
  update_slot_base: fc
} = window.__gradio__svelte__internal;
function Ks(i) {
  let e, t;
  return e = new Pf({
    props: {
      $$slots: { default: [cc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Kf(e.$$.fragment);
    },
    m(n, l) {
      lc(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l & /*$$scope, info*/
      10 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (li(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ni(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Qf(e, n);
    }
  };
}
function cc(i) {
  let e;
  return {
    c() {
      e = rc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Vi(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && oc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ui(e);
    }
  };
}
function uc(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[2].default
  ), o = Jf(
    s,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ks(i)
  );
  return {
    c() {
      e = xf("span"), o && o.c(), t = ac(), r && r.c(), n = $f(), Gs(e, "data-testid", "block-info"), Gs(e, "class", "svelte-22c38v"), zn(e, "sr-only", !/*show_label*/
      i[0]), zn(e, "hide", !/*show_label*/
      i[0]), zn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, f) {
      Vi(a, e, f), o && o.m(e, null), Vi(a, t, f), r && r.m(a, f), Vi(a, n, f), l = !0;
    },
    p(a, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      8) && fc(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        l ? tc(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : ec(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || f & /*show_label*/
      1) && zn(e, "sr-only", !/*show_label*/
      a[0]), (!l || f & /*show_label*/
      1) && zn(e, "hide", !/*show_label*/
      a[0]), (!l || f & /*info*/
      2) && zn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && li(r, 1)) : (r = Ks(a), r.c(), li(r, 1), r.m(n.parentNode, n)) : r && (nc(), Ni(r, 1, 1, () => {
        r = null;
      }), Gf());
    },
    i(a) {
      l || (li(o, a), li(r), l = !0);
    },
    o(a) {
      Ni(o, a), Ni(r), l = !1;
    },
    d(a) {
      a && (Ui(e), Ui(t), Ui(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function _c(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [s, o, n, l];
}
class Ga extends Zf {
  constructor(e) {
    super(), ic(this, e, _c, uc, sc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: dc,
  append: Cl,
  attr: yi,
  create_component: hc,
  destroy_component: mc,
  detach: gc,
  element: Js,
  init: bc,
  insert: wc,
  mount_component: pc,
  safe_not_equal: vc,
  set_data: kc,
  space: yc,
  text: Cc,
  toggle_class: jt,
  transition_in: Sc,
  transition_out: zc
} = window.__gradio__svelte__internal;
function Bc(i) {
  let e, t, n, l, s, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Js("label"), t = Js("span"), hc(n.$$.fragment), l = yc(), s = Cc(
        /*label*/
        i[0]
      ), yi(t, "class", "svelte-9gxdi0"), yi(e, "for", ""), yi(e, "data-testid", "block-label"), yi(e, "class", "svelte-9gxdi0"), jt(e, "hide", !/*show_label*/
      i[2]), jt(e, "sr-only", !/*show_label*/
      i[2]), jt(
        e,
        "float",
        /*float*/
        i[4]
      ), jt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      wc(r, e, a), Cl(e, t), pc(n, t, null), Cl(e, l), Cl(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && kc(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && jt(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && jt(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && jt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && jt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Sc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      zc(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && gc(e), mc(n);
    }
  };
}
function Dc(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, s, o, r];
}
class qc extends dc {
  constructor(e) {
    super(), bc(this, e, Dc, Bc, vc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Lc,
  append: _s,
  attr: Ct,
  bubble: Mc,
  create_component: Ec,
  destroy_component: Rc,
  detach: Ka,
  element: ds,
  init: Ac,
  insert: Ja,
  listen: Wc,
  mount_component: Xc,
  safe_not_equal: Yc,
  set_data: Ic,
  set_style: Bn,
  space: Hc,
  text: Tc,
  toggle_class: ze,
  transition_in: jc,
  transition_out: Fc
} = window.__gradio__svelte__internal;
function Qs(i) {
  let e, t;
  return {
    c() {
      e = ds("span"), t = Tc(
        /*label*/
        i[1]
      ), Ct(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Ja(n, e, l), _s(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Ic(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Ka(e);
    }
  };
}
function Uc(i) {
  let e, t, n, l, s, o, r, a = (
    /*show_label*/
    i[2] && Qs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = ds("button"), a && a.c(), t = Hc(), n = ds("div"), Ec(l.$$.fragment), Ct(n, "class", "svelte-1lrphxw"), ze(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), ze(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), ze(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Ct(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Ct(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Ct(
        e,
        "title",
        /*label*/
        i[1]
      ), Ct(e, "class", "svelte-1lrphxw"), ze(
        e,
        "pending",
        /*pending*/
        i[3]
      ), ze(
        e,
        "padded",
        /*padded*/
        i[5]
      ), ze(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), ze(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Bn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Bn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Bn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(f, c) {
      Ja(f, e, c), a && a.m(e, null), _s(e, t), _s(e, n), Xc(l, n, null), s = !0, o || (r = Wc(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = Qs(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
      16) && ze(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!s || c & /*size*/
      16) && ze(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!s || c & /*size*/
      16) && ze(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!s || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!s || c & /*label*/
      2) && Ct(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && Ct(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && Ct(
        e,
        "title",
        /*label*/
        f[1]
      ), (!s || c & /*pending*/
      8) && ze(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!s || c & /*padded*/
      32) && ze(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!s || c & /*highlight*/
      64) && ze(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!s || c & /*transparent*/
      512) && ze(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && Bn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Bn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && Bn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (jc(l.$$.fragment, f), s = !0);
    },
    o(f) {
      Fc(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Ka(e), a && a.d(), Rc(l), o = !1, r();
    }
  };
}
function Vc(i, e, t) {
  let n, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function p(w) {
    Mc.call(this, i, w);
  }
  return i.$$set = (w) => {
    "Icon" in w && t(0, l = w.Icon), "label" in w && t(1, s = w.label), "show_label" in w && t(2, o = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, f = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, _ = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, m = w.transparent), "background" in w && t(10, h = w.background), "offset" in w && t(11, g = w.offset);
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
    p
  ];
}
class fl extends Lc {
  constructor(e) {
    super(), Ac(this, e, Vc, Uc, Yc, {
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
  SvelteComponent: Nc,
  append: Oc,
  attr: Sl,
  binding_callbacks: Pc,
  create_slot: Zc,
  detach: Gc,
  element: xs,
  get_all_dirty_from_scope: Kc,
  get_slot_changes: Jc,
  init: Qc,
  insert: xc,
  safe_not_equal: $c,
  toggle_class: Ft,
  transition_in: eu,
  transition_out: tu,
  update_slot_base: nu
} = window.__gradio__svelte__internal;
function iu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), s = Zc(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = xs("div"), t = xs("div"), s && s.c(), Sl(t, "class", "icon svelte-3w3rth"), Sl(e, "class", "empty svelte-3w3rth"), Sl(e, "aria-label", "Empty value"), Ft(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Ft(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Ft(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Ft(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      xc(o, e, r), Oc(e, t), s && s.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && nu(
        s,
        l,
        o,
        /*$$scope*/
        o[4],
        n ? Jc(
          l,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Kc(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ft(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Ft(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ft(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Ft(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (eu(s, o), n = !0);
    },
    o(o) {
      tu(s, o), n = !1;
    },
    d(o) {
      o && Gc(e), s && s.d(o), i[6](null);
    }
  };
}
function lu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    Pc[u ? "unshift" : "push"](() => {
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
class su extends Nc {
  constructor(e) {
    super(), Qc(this, e, lu, iu, $c, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: ou,
  append: $s,
  attr: Be,
  detach: au,
  init: ru,
  insert: fu,
  noop: zl,
  safe_not_equal: cu,
  svg_element: Bl
} = window.__gradio__svelte__internal;
function uu(i) {
  let e, t, n;
  return {
    c() {
      e = Bl("svg"), t = Bl("path"), n = Bl("circle"), Be(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Be(n, "cx", "12"), Be(n, "cy", "13"), Be(n, "r", "4"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "100%"), Be(e, "height", "100%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "1.5"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-camera");
    },
    m(l, s) {
      fu(l, e, s), $s(e, t), $s(e, n);
    },
    p: zl,
    i: zl,
    o: zl,
    d(l) {
      l && au(e);
    }
  };
}
class _u extends ou {
  constructor(e) {
    super(), ru(this, e, null, uu, cu, {});
  }
}
const {
  SvelteComponent: du,
  append: hu,
  attr: Qe,
  detach: mu,
  init: gu,
  insert: bu,
  noop: Dl,
  safe_not_equal: wu,
  svg_element: eo
} = window.__gradio__svelte__internal;
function pu(i) {
  let e, t;
  return {
    c() {
      e = eo("svg"), t = eo("circle"), Qe(t, "cx", "12"), Qe(t, "cy", "12"), Qe(t, "r", "10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "stroke-width", "1.5"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-circle");
    },
    m(n, l) {
      bu(n, e, l), hu(e, t);
    },
    p: Dl,
    i: Dl,
    o: Dl,
    d(n) {
      n && mu(e);
    }
  };
}
class vu extends du {
  constructor(e) {
    super(), gu(this, e, null, pu, wu, {});
  }
}
const {
  SvelteComponent: ku,
  append: ql,
  attr: xe,
  detach: yu,
  init: Cu,
  insert: Su,
  noop: Ll,
  safe_not_equal: zu,
  set_style: rt,
  svg_element: Ci
} = window.__gradio__svelte__internal;
function Bu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ci("svg"), t = Ci("g"), n = Ci("path"), l = Ci("path"), xe(n, "d", "M18,6L6.087,17.913"), rt(n, "fill", "none"), rt(n, "fill-rule", "nonzero"), rt(n, "stroke-width", "2px"), xe(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), xe(l, "d", "M4.364,4.364L19.636,19.636"), rt(l, "fill", "none"), rt(l, "fill-rule", "nonzero"), rt(l, "stroke-width", "2px"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "version", "1.1"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), xe(e, "xml:space", "preserve"), xe(e, "stroke", "currentColor"), rt(e, "fill-rule", "evenodd"), rt(e, "clip-rule", "evenodd"), rt(e, "stroke-linecap", "round"), rt(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      Su(s, e, o), ql(e, t), ql(t, n), ql(e, l);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(s) {
      s && yu(e);
    }
  };
}
class Qa extends ku {
  constructor(e) {
    super(), Cu(this, e, null, Bu, zu, {});
  }
}
const {
  SvelteComponent: Du,
  append: qu,
  attr: xn,
  detach: Lu,
  init: Mu,
  insert: Eu,
  noop: Ml,
  safe_not_equal: Ru,
  svg_element: to
} = window.__gradio__svelte__internal;
function Au(i) {
  let e, t;
  return {
    c() {
      e = to("svg"), t = to("path"), xn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), xn(t, "fill", "currentColor"), xn(e, "id", "icon"), xn(e, "xmlns", "http://www.w3.org/2000/svg"), xn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Eu(n, e, l), qu(e, t);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(n) {
      n && Lu(e);
    }
  };
}
class Wu extends Du {
  constructor(e) {
    super(), Mu(this, e, null, Au, Ru, {});
  }
}
const {
  SvelteComponent: Xu,
  append: Yu,
  attr: Dn,
  detach: Iu,
  init: Hu,
  insert: Tu,
  noop: El,
  safe_not_equal: ju,
  svg_element: no
} = window.__gradio__svelte__internal;
function Fu(i) {
  let e, t;
  return {
    c() {
      e = no("svg"), t = no("path"), Dn(t, "fill", "currentColor"), Dn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Dn(e, "xmlns", "http://www.w3.org/2000/svg"), Dn(e, "width", "100%"), Dn(e, "height", "100%"), Dn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Tu(n, e, l), Yu(e, t);
    },
    p: El,
    i: El,
    o: El,
    d(n) {
      n && Iu(e);
    }
  };
}
class Uu extends Xu {
  constructor(e) {
    super(), Hu(this, e, null, Fu, ju, {});
  }
}
const {
  SvelteComponent: Vu,
  append: Nu,
  attr: qn,
  detach: Ou,
  init: Pu,
  insert: Zu,
  noop: Rl,
  safe_not_equal: Gu,
  svg_element: io
} = window.__gradio__svelte__internal;
function Ku(i) {
  let e, t;
  return {
    c() {
      e = io("svg"), t = io("path"), qn(t, "d", "M5 8l4 4 4-4z"), qn(e, "class", "dropdown-arrow svelte-145leq6"), qn(e, "xmlns", "http://www.w3.org/2000/svg"), qn(e, "width", "100%"), qn(e, "height", "100%"), qn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Zu(n, e, l), Nu(e, t);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(n) {
      n && Ou(e);
    }
  };
}
class As extends Vu {
  constructor(e) {
    super(), Pu(this, e, null, Ku, Gu, {});
  }
}
const {
  SvelteComponent: Ju,
  append: Al,
  attr: _e,
  detach: Qu,
  init: xu,
  insert: $u,
  noop: Wl,
  safe_not_equal: e_,
  svg_element: Si
} = window.__gradio__svelte__internal;
function t_(i) {
  let e, t, n, l;
  return {
    c() {
      e = Si("svg"), t = Si("rect"), n = Si("circle"), l = Si("polyline"), _e(t, "x", "3"), _e(t, "y", "3"), _e(t, "width", "18"), _e(t, "height", "18"), _e(t, "rx", "2"), _e(t, "ry", "2"), _e(n, "cx", "8.5"), _e(n, "cy", "8.5"), _e(n, "r", "1.5"), _e(l, "points", "21 15 16 10 5 21"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "1.5"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-image");
    },
    m(s, o) {
      $u(s, e, o), Al(e, t), Al(e, n), Al(e, l);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(s) {
      s && Qu(e);
    }
  };
}
let xa = class extends Ju {
  constructor(e) {
    super(), xu(this, e, null, t_, e_, {});
  }
};
const {
  SvelteComponent: n_,
  append: i_,
  attr: zi,
  detach: l_,
  init: s_,
  insert: o_,
  noop: Xl,
  safe_not_equal: a_,
  svg_element: lo
} = window.__gradio__svelte__internal;
function r_(i) {
  let e, t;
  return {
    c() {
      e = lo("svg"), t = lo("path"), zi(t, "fill", "currentColor"), zi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), zi(e, "xmlns", "http://www.w3.org/2000/svg"), zi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      o_(n, e, l), i_(e, t);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(n) {
      n && l_(e);
    }
  };
}
class $a extends n_ {
  constructor(e) {
    super(), s_(this, e, null, r_, a_, {});
  }
}
const {
  SvelteComponent: f_,
  append: Bi,
  attr: de,
  detach: c_,
  init: u_,
  insert: __,
  noop: Yl,
  safe_not_equal: d_,
  svg_element: $n
} = window.__gradio__svelte__internal;
function h_(i) {
  let e, t, n, l, s;
  return {
    c() {
      e = $n("svg"), t = $n("path"), n = $n("path"), l = $n("line"), s = $n("line"), de(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), de(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), de(l, "x1", "12"), de(l, "y1", "19"), de(l, "x2", "12"), de(l, "y2", "23"), de(s, "x1", "8"), de(s, "y1", "23"), de(s, "x2", "16"), de(s, "y2", "23"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "2"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-mic");
    },
    m(o, r) {
      __(o, e, r), Bi(e, t), Bi(e, n), Bi(e, l), Bi(e, s);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(o) {
      o && c_(e);
    }
  };
}
class m_ extends f_ {
  constructor(e) {
    super(), u_(this, e, null, h_, d_, {});
  }
}
const {
  SvelteComponent: g_,
  append: so,
  attr: Ue,
  detach: b_,
  init: w_,
  insert: p_,
  noop: Il,
  safe_not_equal: v_,
  set_style: k_,
  svg_element: Hl
} = window.__gradio__svelte__internal;
function y_(i) {
  let e, t, n;
  return {
    c() {
      e = Hl("svg"), t = Hl("polyline"), n = Hl("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw"), k_(e, "transform", "rotateY(180deg)");
    },
    m(l, s) {
      p_(l, e, s), so(e, t), so(e, n);
    },
    p: Il,
    i: Il,
    o: Il,
    d(l) {
      l && b_(e);
    }
  };
}
class C_ extends g_ {
  constructor(e) {
    super(), w_(this, e, null, y_, v_, {});
  }
}
const {
  SvelteComponent: S_,
  append: z_,
  attr: De,
  detach: B_,
  init: D_,
  insert: q_,
  noop: Tl,
  safe_not_equal: L_,
  svg_element: oo
} = window.__gradio__svelte__internal;
function M_(i) {
  let e, t;
  return {
    c() {
      e = oo("svg"), t = oo("rect"), De(t, "x", "3"), De(t, "y", "3"), De(t, "width", "18"), De(t, "height", "18"), De(t, "rx", "2"), De(t, "ry", "2"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-square");
    },
    m(n, l) {
      q_(n, e, l), z_(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && B_(e);
    }
  };
}
class E_ extends S_ {
  constructor(e) {
    super(), D_(this, e, null, M_, L_, {});
  }
}
const {
  SvelteComponent: R_,
  append: ao,
  attr: Ve,
  detach: A_,
  init: W_,
  insert: X_,
  noop: jl,
  safe_not_equal: Y_,
  svg_element: Fl
} = window.__gradio__svelte__internal;
function I_(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("svg"), t = Fl("polyline"), n = Fl("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw");
    },
    m(l, s) {
      X_(l, e, s), ao(e, t), ao(e, n);
    },
    p: jl,
    i: jl,
    o: jl,
    d(l) {
      l && A_(e);
    }
  };
}
class H_ extends R_ {
  constructor(e) {
    super(), W_(this, e, null, I_, Y_, {});
  }
}
const {
  SvelteComponent: T_,
  append: Ul,
  attr: ve,
  detach: j_,
  init: F_,
  insert: U_,
  noop: Vl,
  safe_not_equal: V_,
  svg_element: Di
} = window.__gradio__svelte__internal;
function N_(i) {
  let e, t, n, l;
  return {
    c() {
      e = Di("svg"), t = Di("path"), n = Di("polyline"), l = Di("line"), ve(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ve(n, "points", "17 8 12 3 7 8"), ve(l, "x1", "12"), ve(l, "y1", "3"), ve(l, "x2", "12"), ve(l, "y2", "15"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "90%"), ve(e, "height", "90%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "2"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-upload");
    },
    m(s, o) {
      U_(s, e, o), Ul(e, t), Ul(e, n), Ul(e, l);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(s) {
      s && j_(e);
    }
  };
}
let er = class extends T_ {
  constructor(e) {
    super(), F_(this, e, null, N_, V_, {});
  }
};
const {
  SvelteComponent: O_,
  append: ro,
  attr: Ut,
  detach: P_,
  init: Z_,
  insert: G_,
  noop: Nl,
  safe_not_equal: K_,
  svg_element: Ol
} = window.__gradio__svelte__internal;
function J_(i) {
  let e, t, n;
  return {
    c() {
      e = Ol("svg"), t = Ol("path"), n = Ol("path"), Ut(t, "fill", "currentColor"), Ut(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ut(n, "fill", "currentColor"), Ut(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ut(e, "xmlns", "http://www.w3.org/2000/svg"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24");
    },
    m(l, s) {
      G_(l, e, s), ro(e, t), ro(e, n);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(l) {
      l && P_(e);
    }
  };
}
let tr = class extends O_ {
  constructor(e) {
    super(), Z_(this, e, null, J_, K_, {});
  }
};
const Q_ = [
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
], fo = {
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
Q_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: fo[e][t],
      secondary: fo[e][n]
    }
  }),
  {}
);
class Oi extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function x_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Oi("Must be on Spaces to share.");
  let t, n, l;
  t = $_(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new Oi(`Upload failed: ${f.error}`);
    }
    throw new Oi("Upload failed.");
  }
  return await o.text();
}
function $_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, s = new Uint8Array(l); l--; )
    s[l] = n.charCodeAt(l);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: ed,
  create_component: td,
  destroy_component: nd,
  init: id,
  mount_component: ld,
  safe_not_equal: sd,
  transition_in: od,
  transition_out: ad
} = window.__gradio__svelte__internal, { createEventDispatcher: rd } = window.__gradio__svelte__internal;
function fd(i) {
  let e, t;
  return e = new fl({
    props: {
      Icon: Wu,
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
      td(e.$$.fragment);
    },
    m(n, l) {
      ld(e, n, l), t = !0;
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
      t || (od(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ad(e.$$.fragment, n), t = !1;
    },
    d(n) {
      nd(e, n);
    }
  };
}
function cd(i, e, t) {
  const n = rd();
  let { formatter: l } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await l(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Oi ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (f) => {
    "formatter" in f && t(0, l = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [l, s, o, r, n, a];
}
class ud extends ed {
  constructor(e) {
    super(), id(this, e, cd, fd, sd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: _d,
  append: fn,
  attr: hs,
  check_outros: dd,
  create_component: nr,
  destroy_component: ir,
  detach: Pi,
  element: ms,
  group_outros: hd,
  init: md,
  insert: Zi,
  mount_component: lr,
  safe_not_equal: gd,
  set_data: gs,
  space: bs,
  text: si,
  toggle_class: co,
  transition_in: Ji,
  transition_out: Qi
} = window.__gradio__svelte__internal;
function bd(i) {
  let e, t;
  return e = new er({}), {
    c() {
      nr(e.$$.fragment);
    },
    m(n, l) {
      lr(e, n, l), t = !0;
    },
    i(n) {
      t || (Ji(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ir(e, n);
    }
  };
}
function wd(i) {
  let e, t;
  return e = new $a({}), {
    c() {
      nr(e.$$.fragment);
    },
    m(n, l) {
      lr(e, n, l), t = !0;
    },
    i(n) {
      t || (Ji(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Qi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ir(e, n);
    }
  };
}
function uo(i) {
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
      e = ms("span"), t = si("- "), l = si(n), s = si(" -"), o = bs(), a = si(r), hs(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Zi(f, e, c), fn(e, t), fn(e, l), fn(e, s), Zi(f, o, c), Zi(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && gs(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && gs(a, r);
    },
    d(f) {
      f && (Pi(e), Pi(o), Pi(a));
    }
  };
}
function pd(i) {
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
  const c = [wd, bd], u = [];
  function _(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && uo(i)
  );
  return {
    c() {
      e = ms("div"), t = ms("span"), l.c(), s = bs(), r = si(o), a = bs(), d && d.c(), hs(t, "class", "icon-wrap svelte-kzcjhc"), co(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), hs(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Zi(m, e, h), fn(e, t), u[n].m(t, null), fn(e, s), fn(e, r), fn(e, a), d && d.m(e, null), f = !0;
    },
    p(m, [h]) {
      let g = n;
      n = _(m), n !== g && (hd(), Qi(u[g], 1, 1, () => {
        u[g] = null;
      }), dd(), l = u[n], l || (l = u[n] = c[n](m), l.c()), Ji(l, 1), l.m(t, null)), (!f || h & /*hovered*/
      16) && co(
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
      ) + "") && gs(r, o), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = uo(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      f || (Ji(l), f = !0);
    },
    o(m) {
      Qi(l), f = !1;
    },
    d(m) {
      m && Pi(e), u[n].d(), d && d.d();
    }
  };
}
function vd(i, e, t) {
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
class sr extends _d {
  constructor(e) {
    super(), md(this, e, vd, pd, gd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: kd,
  append: Pl,
  attr: ht,
  check_outros: oi,
  create_component: cl,
  destroy_component: ul,
  detach: Vn,
  element: wi,
  empty: yd,
  group_outros: ai,
  init: Cd,
  insert: Nn,
  listen: _l,
  mount_component: dl,
  safe_not_equal: Sd,
  space: Zl,
  toggle_class: Qt,
  transition_in: ge,
  transition_out: qe
} = window.__gradio__svelte__internal;
function _o(i) {
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
  ), f, c = t && ho(i), u = l && mo(i), _ = o && go(i), d = a && bo(i);
  return {
    c() {
      e = wi("span"), c && c.c(), n = Zl(), u && u.c(), s = Zl(), _ && _.c(), r = Zl(), d && d.c(), ht(e, "class", "source-selection svelte-1jp3vgd"), ht(e, "data-testid", "source-select");
    },
    m(m, h) {
      Nn(m, e, h), c && c.m(e, null), Pl(e, n), u && u.m(e, null), Pl(e, s), _ && _.m(e, null), Pl(e, r), d && d.m(e, null), f = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && ge(c, 1)) : (c = ho(m), c.c(), ge(c, 1), c.m(e, n)) : c && (ai(), qe(c, 1, 1, () => {
        c = null;
      }), oi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? u ? (u.p(m, h), h & /*sources*/
      2 && ge(u, 1)) : (u = mo(m), u.c(), ge(u, 1), u.m(e, s)) : u && (ai(), qe(u, 1, 1, () => {
        u = null;
      }), oi()), h & /*sources*/
      2 && (o = /*sources*/
      m[1].includes("webcam")), o ? _ ? (_.p(m, h), h & /*sources*/
      2 && ge(_, 1)) : (_ = go(m), _.c(), ge(_, 1), _.m(e, r)) : _ && (ai(), qe(_, 1, 1, () => {
        _ = null;
      }), oi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && ge(d, 1)) : (d = bo(m), d.c(), ge(d, 1), d.m(e, null)) : d && (ai(), qe(d, 1, 1, () => {
        d = null;
      }), oi());
    },
    i(m) {
      f || (ge(c), ge(u), ge(_), ge(d), f = !0);
    },
    o(m) {
      qe(c), qe(u), qe(_), qe(d), f = !1;
    },
    d(m) {
      m && Vn(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function ho(i) {
  let e, t, n, l, s;
  return t = new er({}), {
    c() {
      e = wi("button"), cl(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Upload file"), Qt(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Nn(o, e, r), dl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vn(e), ul(t), l = !1, s();
    }
  };
}
function mo(i) {
  let e, t, n, l, s;
  return t = new m_({}), {
    c() {
      e = wi("button"), cl(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Record audio"), Qt(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Nn(o, e, r), dl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vn(e), ul(t), l = !1, s();
    }
  };
}
function go(i) {
  let e, t, n, l, s;
  return t = new tr({}), {
    c() {
      e = wi("button"), cl(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Capture from camera"), Qt(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Nn(o, e, r), dl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vn(e), ul(t), l = !1, s();
    }
  };
}
function bo(i) {
  let e, t, n, l, s;
  return t = new $a({}), {
    c() {
      e = wi("button"), cl(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Paste from clipboard"), Qt(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Nn(o, e, r), dl(t, e, null), n = !0, l || (s = _l(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      qe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Vn(e), ul(t), l = !1, s();
    }
  };
}
function zd(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && _o(i)
  );
  return {
    c() {
      n && n.c(), e = yd();
    },
    m(l, s) {
      n && n.m(l, s), Nn(l, e, s), t = !0;
    },
    p(l, [s]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, s), s & /*unique_sources*/
      4 && ge(n, 1)) : (n = _o(l), n.c(), ge(n, 1), n.m(e.parentNode, e)) : n && (ai(), qe(n, 1, 1, () => {
        n = null;
      }), oi());
    },
    i(l) {
      t || (ge(n), t = !0);
    },
    o(l) {
      qe(n), t = !1;
    },
    d(l) {
      l && Vn(e), n && n.d(l);
    }
  };
}
function Bd(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, p) {
    function w(b) {
      return b instanceof g ? b : new g(function(k) {
        k(b);
      });
    }
    return new (g || (g = Promise))(function(b, k) {
      function v(C) {
        try {
          S(p.next(C));
        } catch (z) {
          k(z);
        }
      }
      function y(C) {
        try {
          S(p.throw(C));
        } catch (z) {
          k(z);
        }
      }
      function S(C) {
        C.done ? b(C.value) : w(C.value).then(v, y);
      }
      S((p = p.apply(m, h || [])).next());
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
class Dd extends kd {
  constructor(e) {
    super(), Cd(this, e, Bd, zd, Sd, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Xn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Gi() {
}
const qd = (i) => i;
function Ld(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function wo(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const or = typeof window < "u";
let po = or ? () => window.performance.now() : () => Date.now(), ar = or ? (i) => requestAnimationFrame(i) : Gi;
const Un = /* @__PURE__ */ new Set();
function rr(i) {
  Un.forEach((e) => {
    e.c(i) || (Un.delete(e), e.f());
  }), Un.size !== 0 && ar(rr);
}
function Md(i) {
  let e;
  return Un.size === 0 && ar(rr), {
    promise: new Promise((t) => {
      Un.add(e = { c: i, f: t });
    }),
    abort() {
      Un.delete(e);
    }
  };
}
function Ed(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Rd(i, { delay: e = 0, duration: t = 400, easing: n = qd } = {}) {
  const l = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * l}`
  };
}
function vo(i, { delay: e = 0, duration: t = 400, easing: n = Ed, x: l = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = wo(l), [d, m] = wo(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, g) => `
			transform: ${f} translate(${(1 - h) * u}${_}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}`
  };
}
const Ln = [];
function Ad(i, e = Gi) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(r) {
    if (Ld(i, r) && (i = r, t)) {
      const a = !Ln.length;
      for (const f of n)
        f[1](), Ln.push(f, i);
      if (a) {
        for (let f = 0; f < Ln.length; f += 2)
          Ln[f][0](Ln[f + 1]);
        Ln.length = 0;
      }
    }
  }
  function s(r) {
    l(r(i));
  }
  function o(r, a = Gi) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(l, s) || Gi), r(i), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function ko(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function ws(i, e, t, n) {
  if (typeof t == "number" || ko(t)) {
    const l = n - t, s = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * l, r = i.opts.damping * s, a = (o - r) * i.inv_mass, f = (s + a) * i.dt;
    return Math.abs(f) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, ko(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (l, s) => ws(i, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const l = {};
      for (const s in t)
        l[s] = ws(i, e[s], t[s], n[s]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function yo(i, e = {}) {
  const t = Ad(i), { stiffness: n = 0.15, damping: l = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = i, c = i, u = 1, _ = 0, d = !1;
  function m(g, p = {}) {
    c = g;
    const w = a = {};
    return i == null || p.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, o = po(), f = g, t.set(i = c), Promise.resolve()) : (p.soft && (_ = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), u = 0), r || (o = po(), d = !1, r = Md((b) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const k = {
        inv_mass: u,
        opts: h,
        settled: !0,
        dt: (b - o) * 60 / 1e3
      }, v = ws(k, f, i, c);
      return o = b, f = i, t.set(i = v), k.settled && (r = null), !k.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        w === a && b();
      });
    }));
  }
  const h = {
    set: m,
    update: (g, p) => m(g(c, i), p),
    subscribe: t.subscribe,
    stiffness: n,
    damping: l,
    precision: s
  };
  return h;
}
const {
  SvelteComponent: Wd,
  append: $e,
  attr: N,
  component_subscribe: Co,
  detach: Xd,
  element: Yd,
  init: Id,
  insert: Hd,
  noop: So,
  safe_not_equal: Td,
  set_style: qi,
  svg_element: et,
  toggle_class: zo
} = window.__gradio__svelte__internal, { onMount: jd } = window.__gradio__svelte__internal;
function Fd(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = Yd("div"), t = et("svg"), n = et("g"), l = et("path"), s = et("path"), o = et("path"), r = et("path"), a = et("g"), f = et("path"), c = et("path"), u = et("path"), _ = et("path"), N(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(l, "fill", "#FF7C00"), N(l, "fill-opacity", "0.4"), N(l, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), qi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), qi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), zo(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      Hd(d, e, m), $e(e, t), $e(t, n), $e(n, l), $e(n, s), $e(n, o), $e(n, r), $e(t, a), $e(a, f), $e(a, c), $e(a, u), $e(a, _);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && qi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && qi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && zo(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: So,
    o: So,
    d(d) {
      d && Xd(e);
    }
  };
}
function Ud(i, e, t) {
  let n, l;
  var s = this && this.__awaiter || function(d, m, h, g) {
    function p(w) {
      return w instanceof h ? w : new h(function(b) {
        b(w);
      });
    }
    return new (h || (h = Promise))(function(w, b) {
      function k(S) {
        try {
          y(g.next(S));
        } catch (C) {
          b(C);
        }
      }
      function v(S) {
        try {
          y(g.throw(S));
        } catch (C) {
          b(C);
        }
      }
      function y(S) {
        S.done ? w(S.value) : p(S.value).then(k, v);
      }
      y((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = yo([0, 0]);
  Co(i, r, (d) => t(1, n = d));
  const a = yo([0, 0]);
  Co(i, a, (d) => t(2, l = d));
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
  return jd(() => (_(), () => f = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, l, r, a];
}
class Vd extends Wd {
  constructor(e) {
    super(), Id(this, e, Ud, Fd, Td, { margin: 0 });
  }
}
const {
  SvelteComponent: Nd,
  append: cn,
  attr: lt,
  binding_callbacks: Bo,
  check_outros: ps,
  create_component: fr,
  create_slot: cr,
  destroy_component: ur,
  destroy_each: _r,
  detach: T,
  element: _t,
  empty: On,
  ensure_array_like: xi,
  get_all_dirty_from_scope: dr,
  get_slot_changes: hr,
  group_outros: vs,
  init: Od,
  insert: j,
  mount_component: mr,
  noop: ks,
  safe_not_equal: Pd,
  set_data: Ze,
  set_style: Kt,
  space: Pe,
  text: ce,
  toggle_class: Oe,
  transition_in: it,
  transition_out: dt,
  update_slot_base: gr
} = window.__gradio__svelte__internal, { tick: Zd } = window.__gradio__svelte__internal, { onDestroy: Gd } = window.__gradio__svelte__internal, { createEventDispatcher: Kd } = window.__gradio__svelte__internal, Jd = (i) => ({}), Do = (i) => ({}), Qd = (i) => ({}), qo = (i) => ({});
function Lo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Mo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function xd(i) {
  let e, t, n, l, s = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new fl({
    props: {
      Icon: Qa,
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
  ), c = cr(
    f,
    i,
    /*$$scope*/
    i[29],
    Do
  );
  return {
    c() {
      e = _t("div"), fr(t.$$.fragment), n = Pe(), l = _t("span"), o = ce(s), r = Pe(), c && c.c(), lt(e, "class", "clear-status svelte-16nch4a"), lt(l, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      j(u, e, _), mr(t, e, null), j(u, n, _), j(u, l, _), cn(l, o), j(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Ze(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && gr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? hr(
          f,
          /*$$scope*/
          u[29],
          _,
          Jd
        ) : dr(
          /*$$scope*/
          u[29]
        ),
        Do
      );
    },
    i(u) {
      a || (it(t.$$.fragment, u), it(c, u), a = !0);
    },
    o(u) {
      dt(t.$$.fragment, u), dt(c, u), a = !1;
    },
    d(u) {
      u && (T(e), T(n), T(l), T(r)), ur(t), c && c.d(u);
    }
  };
}
function $d(i) {
  let e, t, n, l, s, o, r, a, f, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Eo(i)
  );
  function u(b, k) {
    if (
      /*progress*/
      b[7]
    ) return n1;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return t1;
    if (
      /*queue_position*/
      b[2] === 0
    ) return e1;
  }
  let _ = u(i), d = _ && _(i), m = (
    /*timer*/
    i[5] && Wo(i)
  );
  const h = [o1, s1], g = [];
  function p(b, k) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = p(i)) && (o = g[s] = h[s](i));
  let w = !/*timer*/
  i[5] && Fo(i);
  return {
    c() {
      c && c.c(), e = Pe(), t = _t("div"), d && d.c(), n = Pe(), m && m.c(), l = Pe(), o && o.c(), r = Pe(), w && w.c(), a = On(), lt(t, "class", "progress-text svelte-16nch4a"), Oe(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Oe(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(b, k) {
      c && c.m(b, k), j(b, e, k), j(b, t, k), d && d.m(t, null), cn(t, n), m && m.m(t, null), j(b, l, k), ~s && g[s].m(b, k), j(b, r, k), w && w.m(b, k), j(b, a, k), f = !0;
    },
    p(b, k) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? c ? c.p(b, k) : (c = Eo(b), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(b)) && d ? d.p(b, k) : (d && d.d(1), d = _ && _(b), d && (d.c(), d.m(t, n))), /*timer*/
      b[5] ? m ? m.p(b, k) : (m = Wo(b), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || k[0] & /*variant*/
      256) && Oe(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Oe(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let v = s;
      s = p(b), s === v ? ~s && g[s].p(b, k) : (o && (vs(), dt(g[v], 1, 1, () => {
        g[v] = null;
      }), ps()), ~s ? (o = g[s], o ? o.p(b, k) : (o = g[s] = h[s](b), o.c()), it(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      b[5] ? w && (vs(), dt(w, 1, 1, () => {
        w = null;
      }), ps()) : w ? (w.p(b, k), k[0] & /*timer*/
      32 && it(w, 1)) : (w = Fo(b), w.c(), it(w, 1), w.m(a.parentNode, a));
    },
    i(b) {
      f || (it(o), it(w), f = !0);
    },
    o(b) {
      dt(o), dt(w), f = !1;
    },
    d(b) {
      b && (T(e), T(t), T(l), T(r), T(a)), c && c.d(b), d && d.d(), m && m.d(), ~s && g[s].d(b), w && w.d(b);
    }
  };
}
function Eo(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = _t("div"), lt(e, "class", "eta-bar svelte-16nch4a"), Kt(e, "transform", t);
    },
    m(n, l) {
      j(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Kt(e, "transform", t);
    },
    d(n) {
      n && T(e);
    }
  };
}
function e1(i) {
  let e;
  return {
    c() {
      e = ce("processing |");
    },
    m(t, n) {
      j(t, e, n);
    },
    p: ks,
    d(t) {
      t && T(e);
    }
  };
}
function t1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, s, o;
  return {
    c() {
      e = ce("queue: "), n = ce(t), l = ce("/"), s = ce(
        /*queue_size*/
        i[3]
      ), o = ce(" |");
    },
    m(r, a) {
      j(r, e, a), j(r, n, a), j(r, l, a), j(r, s, a), j(r, o, a);
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
      r && (T(e), T(n), T(l), T(s), T(o));
    }
  };
}
function n1(i) {
  let e, t = xi(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ao(Mo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = On();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      j(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress*/
      128) {
        t = xi(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Mo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Ao(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && T(e), _r(n, l);
    }
  };
}
function Ro(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? l1 : i1
    );
  }
  let a = r(i), f = a(i);
  return {
    c() {
      f.c(), e = Pe(), n = ce(t), l = ce(" | "), o = ce(s);
    },
    m(c, u) {
      f.m(c, u), j(c, e, u), j(c, n, u), j(c, l, u), j(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ze(n, t);
    },
    d(c) {
      c && (T(e), T(n), T(l), T(o)), f.d(c);
    }
  };
}
function i1(i) {
  let e = Xn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ce(e);
    },
    m(n, l) {
      j(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Xn(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function l1(i) {
  let e = Xn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Xn(
    /*p*/
    i[41].length
  ) + "", s;
  return {
    c() {
      t = ce(e), n = ce("/"), s = ce(l);
    },
    m(o, r) {
      j(o, t, r), j(o, n, r), j(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Xn(
        /*p*/
        o[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && l !== (l = Xn(
        /*p*/
        o[41].length
      ) + "") && Ze(s, l);
    },
    d(o) {
      o && (T(t), T(n), T(s));
    }
  };
}
function Ao(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Ro(i)
  );
  return {
    c() {
      t && t.c(), e = On();
    },
    m(n, l) {
      t && t.m(n, l), j(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Ro(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Wo(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = ce(
        /*formatted_timer*/
        i[20]
      ), n = ce(t), l = ce("s");
    },
    m(s, o) {
      j(s, e, o), j(s, n, o), j(s, l, o);
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
      s && (T(e), T(n), T(l));
    }
  };
}
function s1(i) {
  let e, t;
  return e = new Vd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      fr(e.$$.fragment);
    },
    m(n, l) {
      mr(e, n, l), t = !0;
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
      dt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ur(e, n);
    }
  };
}
function o1(i) {
  let e, t, n, l, s, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Xo(i)
  );
  return {
    c() {
      e = _t("div"), t = _t("div"), r && r.c(), n = Pe(), l = _t("div"), s = _t("div"), lt(t, "class", "progress-level-inner svelte-16nch4a"), lt(s, "class", "progress-bar svelte-16nch4a"), Kt(s, "width", o), lt(l, "class", "progress-bar-wrap svelte-16nch4a"), lt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      j(a, e, f), cn(e, t), r && r.m(t, null), cn(e, n), cn(e, l), cn(l, s), i[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Xo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Kt(s, "width", o);
    },
    i: ks,
    o: ks,
    d(a) {
      a && T(e), r && r.d(), i[31](null);
    }
  };
}
function Xo(i) {
  let e, t = xi(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = jo(Lo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = On();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      j(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = xi(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Lo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = jo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && T(e), _r(n, l);
    }
  };
}
function Yo(i) {
  let e, t, n, l, s = (
    /*i*/
    i[43] !== 0 && a1()
  ), o = (
    /*p*/
    i[41].desc != null && Io(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Ho()
  ), a = (
    /*progress_level*/
    i[14] != null && To(i)
  );
  return {
    c() {
      s && s.c(), e = Pe(), o && o.c(), t = Pe(), r && r.c(), n = Pe(), a && a.c(), l = On();
    },
    m(f, c) {
      s && s.m(f, c), j(f, e, c), o && o.m(f, c), j(f, t, c), r && r.m(f, c), j(f, n, c), a && a.m(f, c), j(f, l, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = Io(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Ho(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = To(f), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (T(e), T(t), T(n), T(l)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function a1(i) {
  let e;
  return {
    c() {
      e = ce(" /");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function Io(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ce(e);
    },
    m(n, l) {
      j(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ze(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function Ho(i) {
  let e;
  return {
    c() {
      e = ce("-");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function To(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ce(e), n = ce("%");
    },
    m(l, s) {
      j(l, t, s), j(l, n, s);
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
      l && (T(t), T(n));
    }
  };
}
function jo(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Yo(i)
  );
  return {
    c() {
      t && t.c(), e = On();
    },
    m(n, l) {
      t && t.m(n, l), j(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = Yo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Fo(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = cr(
    s,
    i,
    /*$$scope*/
    i[29],
    qo
  );
  return {
    c() {
      e = _t("p"), t = ce(
        /*loading_text*/
        i[9]
      ), n = Pe(), o && o.c(), lt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      j(r, e, a), cn(e, t), j(r, n, a), o && o.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Ze(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!l || a[0] & /*$$scope*/
      536870912) && gr(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        l ? hr(
          s,
          /*$$scope*/
          r[29],
          a,
          Qd
        ) : dr(
          /*$$scope*/
          r[29]
        ),
        qo
      );
    },
    i(r) {
      l || (it(o, r), l = !0);
    },
    o(r) {
      dt(o, r), l = !1;
    },
    d(r) {
      r && (T(e), T(n)), o && o.d(r);
    }
  };
}
function r1(i) {
  let e, t, n, l, s;
  const o = [$d, xd], r = [];
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
      e = _t("div"), n && n.c(), lt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Oe(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Oe(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Oe(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Oe(
        e,
        "border",
        /*border*/
        i[12]
      ), Kt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Kt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      j(f, e, c), ~t && r[t].m(e, null), i[33](e), s = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (vs(), dt(r[u], 1, 1, () => {
        r[u] = null;
      }), ps()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), it(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && lt(e, "class", l), (!s || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Oe(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Oe(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || c[0] & /*variant, show_progress, status*/
      336) && Oe(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || c[0] & /*variant, show_progress, border*/
      4416) && Oe(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Kt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Kt(
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
      dt(n), s = !1;
    },
    d(f) {
      f && T(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var f1 = function(i, e, t, n) {
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
let Li = [], Gl = !1;
function c1(i) {
  return f1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Li.push(e), !Gl) Gl = !0;
      else return;
      yield Zd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Li.length; l++) {
          const o = Li[l].getBoundingClientRect();
          (l === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Gl = !1, Li = [];
      });
    }
  });
}
function u1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = Kd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: p = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: k = !1 } = e, { border: v = !1 } = e, { autoscroll: y } = e, S, C = !1, z = 0, D = 0, q = null, W = null, F = 0, J = null, le, P = null, $ = !0;
  const R = () => {
    t(0, a = t(27, q = t(19, Q = null))), t(25, z = performance.now()), t(26, D = 0), C = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, D = (performance.now() - z) / 1e3), C && V();
    });
  }
  function A() {
    t(26, D = 0), t(0, a = t(27, q = t(19, Q = null))), C && (C = !1);
  }
  Gd(() => {
    C && A();
  });
  let Q = null;
  function ae(X) {
    Bo[X ? "unshift" : "push"](() => {
      P = X, t(16, P), t(7, g), t(14, J), t(15, le);
    });
  }
  const Z = () => {
    o("clear_status");
  };
  function G(X) {
    Bo[X ? "unshift" : "push"](() => {
      S = X, t(13, S);
    });
  }
  return i.$$set = (X) => {
    "i18n" in X && t(1, r = X.i18n), "eta" in X && t(0, a = X.eta), "queue_position" in X && t(2, f = X.queue_position), "queue_size" in X && t(3, c = X.queue_size), "status" in X && t(4, u = X.status), "scroll_to_output" in X && t(22, _ = X.scroll_to_output), "timer" in X && t(5, d = X.timer), "show_progress" in X && t(6, m = X.show_progress), "message" in X && t(23, h = X.message), "progress" in X && t(7, g = X.progress), "variant" in X && t(8, p = X.variant), "loading_text" in X && t(9, w = X.loading_text), "absolute" in X && t(10, b = X.absolute), "translucent" in X && t(11, k = X.translucent), "border" in X && t(12, v = X.border), "autoscroll" in X && t(24, y = X.autoscroll), "$$scope" in X && t(29, s = X.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = q), a != null && q !== a && (t(28, W = (performance.now() - z) / 1e3 + a), t(19, Q = W.toFixed(1)), t(27, q = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, F = W === null || W <= 0 || !D ? null : Math.min(D / W, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, $ = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, J = g.map((X) => {
      if (X.index != null && X.length != null)
        return X.index / X.length;
      if (X.progress != null)
        return X.progress;
    })) : t(14, J = null), J ? (t(15, le = J[J.length - 1]), P && (le === 0 ? t(16, P.style.transition = "0", P) : t(16, P.style.transition = "150ms", P))) : t(15, le = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : A()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && S && _ && (u === "pending" || u === "complete") && c1(S, y), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = D.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    m,
    g,
    p,
    w,
    b,
    k,
    v,
    S,
    J,
    le,
    P,
    F,
    $,
    Q,
    n,
    o,
    _,
    h,
    y,
    z,
    D,
    q,
    W,
    s,
    l,
    ae,
    Z,
    G
  ];
}
class _1 extends Nd {
  constructor(e) {
    super(), Od(
      this,
      e,
      u1,
      r1,
      Pd,
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
const { setContext: E2, getContext: d1 } = window.__gradio__svelte__internal, h1 = "WORKER_PROXY_CONTEXT_KEY";
function br() {
  return d1(h1);
}
function m1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function wr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function pr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!m1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function g1(i) {
  if (i == null || !pr(i))
    return i;
  const e = br();
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
      type: wr(l.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: b1,
  assign: $i,
  check_outros: vr,
  compute_rest_props: Uo,
  create_slot: Ws,
  detach: hl,
  element: kr,
  empty: yr,
  exclude_internal_props: w1,
  get_all_dirty_from_scope: Xs,
  get_slot_changes: Ys,
  get_spread_update: Cr,
  group_outros: Sr,
  init: p1,
  insert: ml,
  listen: zr,
  prevent_default: v1,
  safe_not_equal: k1,
  set_attributes: el,
  transition_in: gn,
  transition_out: bn,
  update_slot_base: Is
} = window.__gradio__svelte__internal, { createEventDispatcher: y1 } = window.__gradio__svelte__internal;
function C1(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[8].default
  ), r = Ws(
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
    f = $i(f, a[c]);
  return {
    c() {
      e = kr("a"), r && r.c(), el(e, f);
    },
    m(c, u) {
      ml(c, e, u), r && r.m(e, null), n = !0, l || (s = zr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Is(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? Ys(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Xs(
          /*$$scope*/
          c[7]
        ),
        null
      ), el(e, f = Cr(a, [
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
      c && hl(e), r && r.d(c), l = !1, s();
    }
  };
}
function S1(i) {
  let e, t, n, l;
  const s = [B1, z1], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = yr();
    },
    m(a, f) {
      o[e].m(a, f), ml(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Sr(), bn(o[c], 1, 1, () => {
        o[c] = null;
      }), vr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), gn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (gn(t), l = !0);
    },
    o(a) {
      bn(t), l = !1;
    },
    d(a) {
      a && hl(n), o[e].d(a);
    }
  };
}
function z1(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[8].default
  ), o = Ws(
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
    a = $i(a, r[f]);
  return {
    c() {
      e = kr("a"), o && o.c(), el(e, a);
    },
    m(f, c) {
      ml(f, e, c), o && o.m(e, null), t = !0, n || (l = zr(e, "click", v1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && Is(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? Ys(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Xs(
          /*$$scope*/
          f[7]
        ),
        null
      ), el(e, a = Cr(r, [
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
      f && hl(e), o && o.d(f), n = !1, l();
    }
  };
}
function B1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Ws(
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
      128) && Is(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? Ys(
          t,
          /*$$scope*/
          l[7],
          s,
          null
        ) : Xs(
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
function D1(i) {
  let e, t, n, l, s;
  const o = [S1, C1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && pr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), l = yr();
    },
    m(f, c) {
      r[t].m(f, c), ml(f, l, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (Sr(), bn(r[u], 1, 1, () => {
        r[u] = null;
      }), vr(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), gn(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      s || (gn(n), s = !0);
    },
    o(f) {
      bn(n), s = !1;
    },
    d(f) {
      f && hl(l), r[t].d(f);
    }
  };
}
function q1(i, e, t) {
  const n = ["href", "download"];
  let l = Uo(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(m, h, g, p) {
    function w(b) {
      return b instanceof g ? b : new g(function(k) {
        k(b);
      });
    }
    return new (g || (g = Promise))(function(b, k) {
      function v(C) {
        try {
          S(p.next(C));
        } catch (z) {
          k(z);
        }
      }
      function y(C) {
        try {
          S(p.throw(C));
        } catch (z) {
          k(z);
        }
      }
      function S(C) {
        C.done ? b(C.value) : w(C.value).then(v, y);
      }
      S((p = p.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = y1();
  let u = !1;
  const _ = br();
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
        const p = new Blob(
          [g.body],
          {
            type: wr(g.headers, "content-type")
          }
        ), w = URL.createObjectURL(p), b = document.createElement("a");
        b.href = w, b.download = f, b.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = $i($i({}, e), w1(m)), t(6, l = Uo(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, o = m.$$scope);
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
class L1 extends b1 {
  constructor(e) {
    super(), p1(this, e, q1, D1, k1, { href: 0, download: 1 });
  }
}
var M1 = Object.defineProperty, E1 = (i, e, t) => e in i ? M1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, vt = (i, e, t) => (E1(i, typeof e != "symbol" ? e + "" : e, t), t), Br = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ei = (i, e, t) => (Br(i, e, "read from private field"), t ? t.call(i) : e.get(i)), R1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, A1 = (i, e, t, n) => (Br(i, e, "write to private field"), e.set(i, t), t), Gt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Dr(i, e) {
  return i.map(
    (t) => new W1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class W1 {
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
    vt(this, "path"), vt(this, "url"), vt(this, "orig_name"), vt(this, "size"), vt(this, "blob"), vt(this, "is_stream"), vt(this, "mime_type"), vt(this, "alt_text"), vt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class R2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ei(this, Gt) + t; ; ) {
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
        A1(this, Gt, t);
      },
      flush: (t) => {
        if (ei(this, Gt) === "")
          return;
        const n = e.allowCR && ei(this, Gt).endsWith("\r") ? ei(this, Gt).slice(0, -1) : ei(this, Gt);
        t.enqueue(n);
      }
    }), R1(this, Gt, "");
  }
}
Gt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: X1,
  append: Ee,
  attr: an,
  detach: qr,
  element: rn,
  init: Y1,
  insert: Lr,
  noop: Vo,
  safe_not_equal: I1,
  set_data: tl,
  set_style: Kl,
  space: ys,
  text: Yn,
  toggle_class: No
} = window.__gradio__svelte__internal, { onMount: H1, createEventDispatcher: T1, onDestroy: j1 } = window.__gradio__svelte__internal;
function Oo(i) {
  let e, t, n, l, s = ri(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = rn("div"), t = rn("span"), n = rn("div"), l = rn("progress"), o = Yn(s), a = ys(), f = rn("span"), u = Yn(c), Kl(l, "visibility", "hidden"), Kl(l, "height", "0"), Kl(l, "width", "0"), l.value = r = ri(
        /*file_to_display*/
        i[2]
      ), an(l, "max", "100"), an(l, "class", "svelte-cr2edf"), an(n, "class", "progress-bar svelte-cr2edf"), an(f, "class", "file-name svelte-cr2edf"), an(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Lr(_, e, d), Ee(e, t), Ee(t, n), Ee(n, l), Ee(l, o), Ee(e, a), Ee(e, f), Ee(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = ri(
        /*file_to_display*/
        _[2]
      ) + "") && tl(o, s), d & /*file_to_display*/
      4 && r !== (r = ri(
        /*file_to_display*/
        _[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && tl(u, c);
    },
    d(_) {
      _ && qr(e);
    }
  };
}
function F1(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    i[2] && Oo(i)
  );
  return {
    c() {
      e = rn("div"), t = rn("span"), n = Yn("Uploading "), s = Yn(l), o = ys(), a = Yn(r), f = Yn("..."), c = ys(), u && u.c(), an(t, "class", "uploading svelte-cr2edf"), an(e, "class", "wrap svelte-cr2edf"), No(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      Lr(_, e, d), Ee(e, t), Ee(t, n), Ee(t, s), Ee(t, o), Ee(t, a), Ee(t, f), Ee(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      _[0].length + "") && tl(s, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && tl(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Oo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && No(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Vo,
    o: Vo,
    d(_) {
      _ && qr(e), u && u.d();
    }
  };
}
function ri(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function U1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += ri(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function V1(i, e, t) {
  var n = this && this.__awaiter || function(h, g, p, w) {
    function b(k) {
      return k instanceof p ? k : new p(function(v) {
        v(k);
      });
    }
    return new (p || (p = Promise))(function(k, v) {
      function y(z) {
        try {
          C(w.next(z));
        } catch (D) {
          v(D);
        }
      }
      function S(z) {
        try {
          C(w.throw(z));
        } catch (D) {
          v(D);
        }
      }
      function C(z) {
        z.done ? k(z.value) : b(z.value).then(y, S);
      }
      C((w = w.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = T1();
  function m(h, g) {
    t(0, _ = _.map((p) => (p.orig_name === h && (p.progress += g), p)));
  }
  return H1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), j1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, s = h.root), "files" in h && t(5, o = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && U1(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class N1 extends X1 {
  constructor(e) {
    super(), Y1(this, e, V1, F1, I1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: O1,
  append: Po,
  attr: ke,
  binding_callbacks: P1,
  bubble: xt,
  check_outros: Mr,
  create_component: Z1,
  create_slot: Er,
  destroy_component: G1,
  detach: gl,
  element: Cs,
  empty: Rr,
  get_all_dirty_from_scope: Ar,
  get_slot_changes: Wr,
  group_outros: Xr,
  init: K1,
  insert: bl,
  listen: Ie,
  mount_component: J1,
  prevent_default: $t,
  run_all: Q1,
  safe_not_equal: x1,
  set_style: Yr,
  space: $1,
  stop_propagation: en,
  toggle_class: we,
  transition_in: Jt,
  transition_out: wn,
  update_slot_base: Ir
} = window.__gradio__svelte__internal, { createEventDispatcher: eh, tick: th } = window.__gradio__svelte__internal;
function nh(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = Er(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Cs("button"), d && d.c(), t = $1(), n = Cs("input"), ke(n, "aria-label", "file upload"), ke(n, "data-testid", "file-upload"), ke(n, "type", "file"), ke(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = s = /*file_count*/
      i[6] === "multiple" || void 0, ke(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), ke(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ke(n, "class", "svelte-1s26xmt"), ke(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ke(e, "class", "svelte-1s26xmt"), we(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), we(
        e,
        "center",
        /*center*/
        i[4]
      ), we(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), we(
        e,
        "flex",
        /*flex*/
        i[5]
      ), we(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Yr(e, "height", "100%");
    },
    m(m, h) {
      bl(m, e, h), d && d.m(e, null), Po(e, t), Po(e, n), i[34](n), f = !0, c || (u = [
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
      33554432) && Ir(
        d,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Wr(
          _,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Ar(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && ke(n, "accept", l), (!f || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = s), (!f || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "directory" || void 0)) && ke(n, "webkitdirectory", o), (!f || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && ke(n, "mozdirectory", r), (!f || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && ke(e, "tabindex", a), (!f || h[0] & /*hidden*/
      512) && we(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || h[0] & /*center*/
      16) && we(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || h[0] & /*boundedheight*/
      8) && we(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || h[0] & /*flex*/
      32) && we(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || h[0] & /*disable_click*/
      128) && we(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Jt(d, m), f = !0);
    },
    o(m) {
      wn(d, m), f = !1;
    },
    d(m) {
      m && gl(e), d && d.d(m), i[34](null), c = !1, Q1(u);
    }
  };
}
function ih(i) {
  let e, t, n = !/*hidden*/
  i[9] && Zo(i);
  return {
    c() {
      n && n.c(), e = Rr();
    },
    m(l, s) {
      n && n.m(l, s), bl(l, e, s), t = !0;
    },
    p(l, s) {
      /*hidden*/
      l[9] ? n && (Xr(), wn(n, 1, 1, () => {
        n = null;
      }), Mr()) : n ? (n.p(l, s), s[0] & /*hidden*/
      512 && Jt(n, 1)) : (n = Zo(l), n.c(), Jt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Jt(n), t = !0);
    },
    o(l) {
      wn(n), t = !1;
    },
    d(l) {
      l && gl(e), n && n.d(l);
    }
  };
}
function lh(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[26].default
  ), r = Er(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Cs("button"), r && r.c(), ke(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ke(e, "class", "svelte-1s26xmt"), we(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), we(
        e,
        "center",
        /*center*/
        i[4]
      ), we(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), we(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Yr(e, "height", "100%");
    },
    m(a, f) {
      bl(a, e, f), r && r.m(e, null), n = !0, l || (s = Ie(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Ir(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Wr(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Ar(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ke(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && we(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && we(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && we(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && we(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Jt(r, a), n = !0);
    },
    o(a) {
      wn(r, a), n = !1;
    },
    d(a) {
      a && gl(e), r && r.d(a), l = !1, s();
    }
  };
}
function Zo(i) {
  let e, t;
  return e = new N1({
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
      Z1(e.$$.fragment);
    },
    m(n, l) {
      J1(e, n, l), t = !0;
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
      t || (Jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      G1(e, n);
    }
  };
}
function sh(i) {
  let e, t, n, l;
  const s = [lh, ih, nh], o = [];
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
      t.c(), n = Rr();
    },
    m(a, f) {
      o[e].m(a, f), bl(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Xr(), wn(o[c], 1, 1, () => {
        o[c] = null;
      }), Mr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Jt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Jt(t), l = !0);
    },
    o(a) {
      wn(t), l = !1;
    },
    d(a) {
      a && gl(n), o[e].d(a);
    }
  };
}
function oh(i, e, t) {
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
function ah(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(E, H, ee, re) {
    function M(Ge) {
      return Ge instanceof ee ? Ge : new ee(function(st) {
        st(Ge);
      });
    }
    return new (ee || (ee = Promise))(function(Ge, st) {
      function Ke(Xe) {
        try {
          Je(re.next(Xe));
        } catch (mt) {
          st(mt);
        }
      }
      function We(Xe) {
        try {
          Je(re.throw(Xe));
        } catch (mt) {
          st(mt);
        }
      }
      function Je(Xe) {
        Xe.done ? Ge(Xe.value) : M(Xe.value).then(Ke, We);
      }
      Je((re = re.apply(E, H || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: p = null } = e, { show_progress: w = !0 } = e, { max_file_size: b = null } = e, { upload: k } = e, { stream_handler: v } = e, y, S, C;
  const z = eh(), D = ["image", "video", "audio", "text", "file"], q = (E) => E.startsWith(".") || E.endsWith("/*") ? E : D.includes(E) ? E + "/*" : "." + E;
  function W() {
    t(20, r = !r);
  }
  function F() {
    navigator.clipboard.read().then((E) => s(this, void 0, void 0, function* () {
      for (let H = 0; H < E.length; H++) {
        const ee = E[H].types.find((re) => re.startsWith("image/"));
        if (ee) {
          E[H].getType(ee).then((re) => s(this, void 0, void 0, function* () {
            const M = new File([re], `clipboard.${ee.replace("image/", "")}`);
            yield P([M]);
          }));
          break;
        }
      }
    }));
  }
  function J() {
    _ || p && (t(2, p.value = "", p), p.click());
  }
  function le(E) {
    return s(this, void 0, void 0, function* () {
      yield th(), t(14, y = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const H = yield k(E, d, y, b ?? 1 / 0);
        return z("load", u === "single" ? H == null ? void 0 : H[0] : H), t(1, g = !1), H || [];
      } catch (H) {
        return z("error", H.message), t(1, g = !1), [];
      }
    });
  }
  function P(E) {
    return s(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let H = E.map((ee) => new File([ee], ee instanceof File ? ee.name : "file", { type: ee.type }));
      return t(15, S = yield Dr(H)), yield le(S);
    });
  }
  function $(E) {
    return s(this, void 0, void 0, function* () {
      const H = E.target;
      if (H.files)
        if (h != "blob")
          yield P(Array.from(H.files));
        else {
          if (u === "single") {
            z("load", H.files[0]);
            return;
          }
          z("load", H.files);
        }
    });
  }
  function R(E) {
    return s(this, void 0, void 0, function* () {
      var H;
      if (t(20, r = !1), !(!((H = E.dataTransfer) === null || H === void 0) && H.files)) return;
      const ee = Array.from(E.dataTransfer.files).filter((re) => {
        const M = "." + re.name.split(".").pop();
        return M && oh(C, M, re.type) || (M && Array.isArray(o) ? o.includes(M) : M === o) ? !0 : (z("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield P(ee);
    });
  }
  function V(E) {
    xt.call(this, i, E);
  }
  function A(E) {
    xt.call(this, i, E);
  }
  function Q(E) {
    xt.call(this, i, E);
  }
  function ae(E) {
    xt.call(this, i, E);
  }
  function Z(E) {
    xt.call(this, i, E);
  }
  function G(E) {
    xt.call(this, i, E);
  }
  function X(E) {
    xt.call(this, i, E);
  }
  function ne(E) {
    P1[E ? "unshift" : "push"](() => {
      p = E, t(2, p);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, o = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, f = E.center), "flex" in E && t(5, c = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, _ = E.disable_click), "root" in E && t(8, d = E.root), "hidden" in E && t(9, m = E.hidden), "format" in E && t(21, h = E.format), "uploading" in E && t(1, g = E.uploading), "hidden_upload" in E && t(2, p = E.hidden_upload), "show_progress" in E && t(10, w = E.show_progress), "max_file_size" in E && t(22, b = E.max_file_size), "upload" in E && t(23, k = E.upload), "stream_handler" in E && t(11, v = E.stream_handler), "$$scope" in E && t(25, l = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, C = null) : typeof o == "string" ? t(16, C = q(o)) : (t(0, o = o.map(q)), t(16, C = o.join(", "))));
  }, [
    o,
    g,
    p,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    w,
    v,
    F,
    J,
    y,
    S,
    C,
    W,
    $,
    R,
    r,
    h,
    b,
    k,
    P,
    l,
    n,
    V,
    A,
    Q,
    ae,
    Z,
    G,
    X,
    ne
  ];
}
class rh extends O1 {
  constructor(e) {
    super(), K1(
      this,
      e,
      ah,
      sh,
      x1,
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
  SvelteComponent: fh,
  append: Mi,
  attr: Jl,
  create_component: ch,
  destroy_component: uh,
  detach: _h,
  element: Ql,
  init: dh,
  insert: hh,
  listen: mh,
  mount_component: gh,
  noop: bh,
  safe_not_equal: wh,
  set_style: ph,
  space: vh,
  text: kh,
  transition_in: yh,
  transition_out: Ch
} = window.__gradio__svelte__internal, { createEventDispatcher: Sh } = window.__gradio__svelte__internal;
function zh(i) {
  let e, t, n, l, s, o = "Click to Access Webcam", r, a, f, c;
  return l = new tr({}), {
    c() {
      e = Ql("button"), t = Ql("div"), n = Ql("span"), ch(l.$$.fragment), s = vh(), r = kh(o), Jl(n, "class", "icon-wrap svelte-fjcd9c"), Jl(t, "class", "wrap svelte-fjcd9c"), Jl(e, "class", "svelte-fjcd9c"), ph(e, "height", "100%");
    },
    m(u, _) {
      hh(u, e, _), Mi(e, t), Mi(t, n), gh(l, n, null), Mi(t, s), Mi(t, r), a = !0, f || (c = mh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), f = !0);
    },
    p: bh,
    i(u) {
      a || (yh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      Ch(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && _h(e), uh(l), f = !1, c();
    }
  };
}
function Bh(i) {
  const e = Sh();
  return [e, () => e("click")];
}
class Dh extends fh {
  constructor(e) {
    super(), dh(this, e, Bh, zh, wh, {});
  }
}
function qh() {
  return navigator.mediaDevices.enumerateDevices();
}
function Lh(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Go(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((s) => (Lh(s, e), s));
}
function Mh(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Eh,
  action_destroyer: Rh,
  add_render_callback: Ah,
  append: Et,
  attr: he,
  binding_callbacks: Wh,
  check_outros: ui,
  create_component: Pn,
  create_in_transition: Xh,
  destroy_component: Zn,
  destroy_each: Yh,
  detach: Re,
  element: Fe,
  empty: Hs,
  ensure_array_like: Ko,
  group_outros: _i,
  init: Ih,
  insert: Ae,
  listen: nl,
  mount_component: Gn,
  noop: Ts,
  run_all: Hh,
  safe_not_equal: Th,
  set_data: Hr,
  set_input_value: Ss,
  space: gi,
  stop_propagation: jh,
  text: Tr,
  toggle_class: Ei,
  transition_in: pe,
  transition_out: Ce
} = window.__gradio__svelte__internal, { createEventDispatcher: Fh, onMount: Uh } = window.__gradio__svelte__internal;
function Jo(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Vh(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = [Ph, Oh], d = [];
  function m(p, w) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = _[n](i);
  let h = !/*recording*/
  i[8] && Qo(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && xo(i)
  );
  return {
    c() {
      e = Fe("div"), t = Fe("button"), l.c(), o = gi(), h && h.c(), r = gi(), g && g.c(), a = Hs(), he(t, "aria-label", s = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), he(t, "class", "svelte-8hqvb6"), he(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, w) {
      Ae(p, e, w), Et(e, t), d[n].m(t, null), Et(e, o), h && h.m(e, null), Ae(p, r, w), g && g.m(p, w), Ae(p, a, w), f = !0, c || (u = nl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(p, w) {
      let b = n;
      n = m(p), n === b ? d[n].p(p, w) : (_i(), Ce(d[b], 1, 1, () => {
        d[b] = null;
      }), ui(), l = d[n], l ? l.p(p, w) : (l = d[n] = _[n](p), l.c()), pe(l, 1), l.m(t, null)), (!f || w[0] & /*mode*/
      2 && s !== (s = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && he(t, "aria-label", s), /*recording*/
      p[8] ? h && (_i(), Ce(h, 1, 1, () => {
        h = null;
      }), ui()) : h ? (h.p(p, w), w[0] & /*recording*/
      256 && pe(h, 1)) : (h = Qo(p), h.c(), pe(h, 1), h.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? g ? (g.p(p, w), w[0] & /*options_open, selected_device*/
      1152 && pe(g, 1)) : (g = xo(p), g.c(), pe(g, 1), g.m(a.parentNode, a)) : g && (_i(), Ce(g, 1, 1, () => {
        g = null;
      }), ui());
    },
    i(p) {
      f || (pe(l), pe(h), pe(g), f = !0);
    },
    o(p) {
      Ce(l), Ce(h), Ce(g), f = !1;
    },
    d(p) {
      p && (Re(e), Re(r), Re(a)), d[n].d(), h && h.d(), g && g.d(p), c = !1, u();
    }
  };
}
function Nh(i) {
  let e, t, n, l;
  return t = new Dh({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Fe("div"), Pn(t.$$.fragment), he(e, "title", "grant webcam access");
    },
    m(s, o) {
      Ae(s, e, o), Gn(t, e, null), l = !0;
    },
    p: Ts,
    i(s) {
      l || (pe(t.$$.fragment, s), s && (n || Ah(() => {
        n = Xh(e, Rd, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(s) {
      Ce(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Re(e), Zn(t);
    }
  };
}
function Oh(i) {
  let e, t, n;
  return t = new _u({}), {
    c() {
      e = Fe("div"), Pn(t.$$.fragment), he(e, "class", "icon svelte-8hqvb6"), he(e, "title", "capture photo");
    },
    m(l, s) {
      Ae(l, e, s), Gn(t, e, null), n = !0;
    },
    p: Ts,
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ce(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Re(e), Zn(t);
    }
  };
}
function Ph(i) {
  let e, t, n, l;
  const s = [Gh, Zh], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = Hs();
    },
    m(a, f) {
      o[e].m(a, f), Ae(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (_i(), Ce(o[c], 1, 1, () => {
        o[c] = null;
      }), ui(), t = o[e], t || (t = o[e] = s[e](a), t.c()), pe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (pe(t), l = !0);
    },
    o(a) {
      Ce(t), l = !1;
    },
    d(a) {
      a && Re(n), o[e].d(a);
    }
  };
}
function Zh(i) {
  let e, t, n;
  return t = new vu({}), {
    c() {
      e = Fe("div"), Pn(t.$$.fragment), he(e, "class", "icon red svelte-8hqvb6"), he(e, "title", "start recording");
    },
    m(l, s) {
      Ae(l, e, s), Gn(t, e, null), n = !0;
    },
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ce(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Re(e), Zn(t);
    }
  };
}
function Gh(i) {
  let e, t, n;
  return t = new E_({}), {
    c() {
      e = Fe("div"), Pn(t.$$.fragment), he(e, "class", "icon red svelte-8hqvb6"), he(e, "title", "stop recording");
    },
    m(l, s) {
      Ae(l, e, s), Gn(t, e, null), n = !0;
    },
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ce(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Re(e), Zn(t);
    }
  };
}
function Qo(i) {
  let e, t, n, l, s;
  return t = new As({}), {
    c() {
      e = Fe("button"), Pn(t.$$.fragment), he(e, "class", "icon svelte-8hqvb6"), he(e, "aria-label", "select input source");
    },
    m(o, r) {
      Ae(o, e, r), Gn(t, e, null), n = !0, l || (s = nl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: Ts,
    i(o) {
      n || (pe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ce(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Re(e), Zn(t), l = !1, s();
    }
  };
}
function xo(i) {
  let e, t, n, l, s, o, r;
  n = new As({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Jh : Kh
    );
  }
  let f = a(i), c = f(i);
  return {
    c() {
      e = Fe("select"), t = Fe("button"), Pn(n.$$.fragment), l = gi(), c.c(), he(t, "class", "inset-icon svelte-8hqvb6"), he(e, "class", "select-wrap svelte-8hqvb6"), he(e, "aria-label", "select source");
    },
    m(u, _) {
      Ae(u, e, _), Et(e, t), Gn(n, t, null), Et(t, l), c.m(e, null), s = !0, o || (r = [
        nl(t, "click", jh(
          /*click_handler_2*/
          i[22]
        )),
        Rh(js.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        nl(
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
      s || (pe(n.$$.fragment, u), s = !0);
    },
    o(u) {
      Ce(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Re(e), Zn(n), c.d(), o = !1, Hh(r);
    }
  };
}
function Kh(i) {
  let e, t = Ko(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = $o(Jo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Hs();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      Ae(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = Ko(
          /*available_video_devices*/
          l[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Jo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = $o(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Re(e), Yh(n, l);
    }
  };
}
function Jh(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Fe("option"), n = Tr(t), e.__value = "", Ss(e, e.__value), he(e, "class", "svelte-8hqvb6");
    },
    m(l, s) {
      Ae(l, e, s), Et(e, n);
    },
    p(l, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && Hr(n, t);
    },
    d(l) {
      l && Re(e);
    }
  };
}
function $o(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, s, o;
  return {
    c() {
      e = Fe("option"), n = Tr(t), l = gi(), e.__value = s = /*device*/
      i[32].deviceId, Ss(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, he(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ae(r, e, a), Et(e, n), Et(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Hr(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, Ss(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Re(e);
    }
  };
}
function Qh(i) {
  let e, t, n, l, s, o;
  const r = [Nh, Vh], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = f(i), s = a[l] = r[l](i), {
    c() {
      e = Fe("div"), t = Fe("video"), n = gi(), s.c(), he(t, "class", "svelte-8hqvb6"), Ei(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ei(t, "hide", !/*webcam_accessed*/
      i[9]), he(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Ae(c, e, u), Et(e, t), i[19](t), Et(e, n), a[l].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Ei(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Ei(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = l;
      l = f(c), l === _ ? a[l].p(c, u) : (_i(), Ce(a[_], 1, 1, () => {
        a[_] = null;
      }), ui(), s = a[l], s ? s.p(c, u) : (s = a[l] = r[l](c), s.c()), pe(s, 1), s.m(e, null));
    },
    i(c) {
      o || (pe(s), o = !0);
    },
    o(c) {
      Ce(s), o = !1;
    },
    d(c) {
      c && Re(e), i[19](null), a[l].d();
    }
  };
}
function js(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function xh(i, e, t) {
  var n = this && this.__awaiter || function(R, V, A, Q) {
    function ae(Z) {
      return Z instanceof A ? Z : new A(function(G) {
        G(Z);
      });
    }
    return new (A || (A = Promise))(function(Z, G) {
      function X(H) {
        try {
          E(Q.next(H));
        } catch (ee) {
          G(ee);
        }
      }
      function ne(H) {
        try {
          E(Q.throw(H));
        } catch (ee) {
          G(ee);
        }
      }
      function E(H) {
        H.done ? Z(H.value) : ae(H.value).then(X, ne);
      }
      E((Q = Q.apply(R, V || [])).next());
    });
  };
  let l, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Fh();
  Uh(() => r = document.createElement("canvas"));
  const p = (R) => n(void 0, void 0, void 0, function* () {
    const A = R.target.value;
    yield Go(d, l, A).then((Q) => n(void 0, void 0, void 0, function* () {
      y = Q, t(7, o = s.find((ae) => ae.deviceId === A) || null), t(10, W = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Go(d, l).then((R) => n(this, void 0, void 0, function* () {
          t(9, D = !0), t(6, s = yield qh()), y = R;
        })).then(() => Mh(s)).then((R) => {
          t(6, s = R);
          const V = y.getTracks().map((A) => {
            var Q;
            return (Q = A.getSettings()) === null || Q === void 0 ? void 0 : Q.deviceId;
          })[0];
          t(7, o = V && R.find((A) => A.deviceId === V) || s[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function b() {
    var R = r.getContext("2d");
    (!a || a && k) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, R.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), _ && (R.scale(-1, 1), R.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (V) => {
        g(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, v = [], y, S, C;
  function z() {
    if (k) {
      C.stop();
      let R = new Blob(v, { type: S }), V = new FileReader();
      V.onload = function(A) {
        return n(this, void 0, void 0, function* () {
          var Q;
          if (A.target) {
            let ae = new File([R], "sample." + S.substring(6));
            const Z = yield Dr([ae]);
            let G = ((Q = yield h(Z, c)) === null || Q === void 0 ? void 0 : Q.filter(Boolean))[0];
            g("capture", G), g("stop_recording");
          }
        });
      }, V.readAsDataURL(R);
    } else {
      g("start_recording"), v = [];
      let R = ["video/webm", "video/mp4"];
      for (let V of R)
        if (MediaRecorder.isTypeSupported(V)) {
          S = V;
          break;
        }
      if (S === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      C = new MediaRecorder(y, { mimeType: S }), C.addEventListener("dataavailable", function(V) {
        v.push(V.data);
      }), C.start(200);
    }
    t(8, k = !k);
  }
  let D = !1;
  function q() {
    u === "image" && a && t(8, k = !k), u === "image" ? b() : z(), !k && y && (y.getTracks().forEach((R) => R.stop()), t(5, l.srcObject = null, l), t(9, D = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !f && b();
    },
    500
  );
  let W = !1;
  function F(R) {
    R.preventDefault(), R.stopPropagation(), t(10, W = !1);
  }
  function J(R) {
    Wh[R ? "unshift" : "push"](() => {
      l = R, t(5, l);
    });
  }
  const le = async () => w(), P = () => t(10, W = !0), $ = () => t(10, W = !1);
  return i.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, f = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, _ = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, m = R.i18n), "upload" in R && t(18, h = R.upload);
  }, [
    a,
    u,
    _,
    m,
    js,
    l,
    s,
    o,
    k,
    D,
    W,
    p,
    w,
    q,
    F,
    f,
    c,
    d,
    h,
    J,
    le,
    P,
    $
  ];
}
class $h extends Eh {
  constructor(e) {
    super(), Ih(
      this,
      e,
      xh,
      Qh,
      Th,
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
    return js;
  }
}
const {
  SvelteComponent: e0,
  append: Vt,
  attr: I,
  detach: t0,
  init: n0,
  insert: i0,
  noop: xl,
  safe_not_equal: l0,
  set_style: Nt,
  svg_element: kt
} = window.__gradio__svelte__internal;
function s0(i) {
  let e, t, n, l, s, o, r, a, f;
  return {
    c() {
      e = kt("svg"), t = kt("rect"), n = kt("rect"), l = kt("rect"), s = kt("rect"), o = kt("line"), r = kt("line"), a = kt("line"), f = kt("line"), I(t, "x", "2"), I(t, "y", "2"), I(t, "width", "5"), I(t, "height", "5"), I(t, "rx", "1"), I(t, "ry", "1"), I(t, "stroke-width", "2"), I(t, "fill", "none"), I(n, "x", "17"), I(n, "y", "2"), I(n, "width", "5"), I(n, "height", "5"), I(n, "rx", "1"), I(n, "ry", "1"), I(n, "stroke-width", "2"), I(n, "fill", "none"), I(l, "x", "2"), I(l, "y", "17"), I(l, "width", "5"), I(l, "height", "5"), I(l, "rx", "1"), I(l, "ry", "1"), I(l, "stroke-width", "2"), I(l, "fill", "none"), I(s, "x", "17"), I(s, "y", "17"), I(s, "width", "5"), I(s, "height", "5"), I(s, "rx", "1"), I(s, "ry", "1"), I(s, "stroke-width", "2"), I(s, "fill", "none"), I(o, "x1", "7.5"), I(o, "y1", "4.5"), I(o, "x2", "16"), I(o, "y2", "4.5"), Nt(o, "stroke-width", "2px"), I(r, "x1", "7.5"), I(r, "y1", "19.5"), I(r, "x2", "16"), I(r, "y2", "19.5"), Nt(r, "stroke-width", "2px"), I(a, "x1", "4.5"), I(a, "y1", "8"), I(a, "x2", "4.5"), I(a, "y2", "16"), Nt(a, "stroke-width", "2px"), I(f, "x1", "19.5"), I(f, "y1", "8"), I(f, "x2", "19.5"), I(f, "y2", "16"), Nt(f, "stroke-width", "2px"), I(e, "width", "100%"), I(e, "height", "100%"), I(e, "viewBox", "0 0 24 24"), I(e, "version", "1.1"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), I(e, "xml:space", "preserve"), I(e, "stroke", "currentColor"), Nt(e, "fill-rule", "evenodd"), Nt(e, "clip-rule", "evenodd"), Nt(e, "stroke-linecap", "round"), Nt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      i0(c, e, u), Vt(e, t), Vt(e, n), Vt(e, l), Vt(e, s), Vt(e, o), Vt(e, r), Vt(e, a), Vt(e, f);
    },
    p: xl,
    i: xl,
    o: xl,
    d(c) {
      c && t0(e);
    }
  };
}
class o0 extends e0 {
  constructor(e) {
    super(), n0(this, e, null, s0, l0, {});
  }
}
const {
  SvelteComponent: a0,
  append: r0,
  attr: tt,
  detach: f0,
  init: c0,
  insert: u0,
  noop: $l,
  safe_not_equal: _0,
  set_style: Ri,
  svg_element: ea
} = window.__gradio__svelte__internal;
function d0(i) {
  let e, t;
  return {
    c() {
      e = ea("svg"), t = ea("path"), tt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), tt(t, "fill", "none"), tt(t, "stroke-width", "2"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "version", "1.1"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), tt(e, "xml:space", "preserve"), tt(e, "stroke", "currentColor"), Ri(e, "fill-rule", "evenodd"), Ri(e, "clip-rule", "evenodd"), Ri(e, "stroke-linecap", "round"), Ri(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      u0(n, e, l), r0(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && f0(e);
    }
  };
}
class h0 extends a0 {
  constructor(e) {
    super(), c0(this, e, null, d0, _0, {});
  }
}
const {
  SvelteComponent: m0,
  append: g0,
  attr: nt,
  detach: b0,
  init: w0,
  insert: p0,
  noop: es,
  safe_not_equal: v0,
  set_style: Ai,
  svg_element: ta
} = window.__gradio__svelte__internal;
function k0(i) {
  let e, t;
  return {
    c() {
      e = ta("svg"), t = ta("path"), nt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Ai(e, "fill-rule", "evenodd"), Ai(e, "clip-rule", "evenodd"), Ai(e, "stroke-linecap", "round"), Ai(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      p0(n, e, l), g0(e, t);
    },
    p: es,
    i: es,
    o: es,
    d(n) {
      n && b0(e);
    }
  };
}
class y0 extends m0 {
  constructor(e) {
    super(), w0(this, e, null, k0, v0, {});
  }
}
const {
  SvelteComponent: C0,
  append: na,
  attr: yt,
  detach: S0,
  init: z0,
  insert: B0,
  noop: ts,
  safe_not_equal: D0,
  set_style: Wi,
  svg_element: ns
} = window.__gradio__svelte__internal;
function q0(i) {
  let e, t, n;
  return {
    c() {
      e = ns("svg"), t = ns("path"), n = ns("path"), yt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), yt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "fill", "none"), yt(e, "stroke", "currentColor"), yt(e, "stroke-width", "2"), Wi(e, "fill-rule", "evenodd"), Wi(e, "clip-rule", "evenodd"), Wi(e, "stroke-linecap", "round"), Wi(e, "stroke-linejoin", "round");
    },
    m(l, s) {
      B0(l, e, s), na(e, t), na(e, n);
    },
    p: ts,
    i: ts,
    o: ts,
    d(l) {
      l && S0(e);
    }
  };
}
class L0 extends C0 {
  constructor(e) {
    super(), z0(this, e, null, q0, D0, {});
  }
}
const {
  SvelteComponent: M0,
  append: E0,
  attr: Ot,
  detach: R0,
  init: A0,
  insert: W0,
  noop: is,
  safe_not_equal: X0,
  set_style: Xi,
  svg_element: ia
} = window.__gradio__svelte__internal;
function Y0(i) {
  let e, t;
  return {
    c() {
      e = ia("svg"), t = ia("path"), Ot(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Xi(e, "fill-rule", "evenodd"), Xi(e, "clip-rule", "evenodd"), Xi(e, "stroke-linecap", "round"), Xi(e, "stroke-linejoin", "round"), Ot(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      W0(n, e, l), E0(e, t);
    },
    p: is,
    i: is,
    o: is,
    d(n) {
      n && R0(e);
    }
  };
}
class I0 extends M0 {
  constructor(e) {
    super(), A0(this, e, null, Y0, X0, {});
  }
}
const {
  SvelteComponent: H0,
  append: T0,
  attr: Pt,
  detach: j0,
  init: F0,
  insert: U0,
  noop: ls,
  safe_not_equal: V0,
  set_style: Yi,
  svg_element: la
} = window.__gradio__svelte__internal;
function N0(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("path"), Pt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Pt(e, "width", "100%"), Pt(e, "height", "100%"), Pt(e, "viewBox", "0 0 24 24"), Pt(e, "fill", "none"), Pt(e, "stroke", "currentColor"), Pt(e, "stroke-width", "2"), Yi(e, "fill-rule", "evenodd"), Yi(e, "clip-rule", "evenodd"), Yi(e, "stroke-linecap", "round"), Yi(e, "stroke-linejoin", "round"), Pt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      U0(n, e, l), T0(e, t);
    },
    p: ls,
    i: ls,
    o: ls,
    d(n) {
      n && j0(e);
    }
  };
}
class O0 extends H0 {
  constructor(e) {
    super(), F0(this, e, null, N0, V0, {});
  }
}
const {
  SvelteComponent: P0,
  append: sa,
  attr: ss,
  bubble: oa,
  create_component: Z0,
  destroy_component: G0,
  detach: jr,
  element: aa,
  init: K0,
  insert: Fr,
  listen: os,
  mount_component: J0,
  run_all: Q0,
  safe_not_equal: x0,
  set_data: $0,
  set_input_value: ra,
  space: em,
  text: tm,
  transition_in: nm,
  transition_out: im
} = window.__gradio__svelte__internal, { createEventDispatcher: lm, afterUpdate: sm } = window.__gradio__svelte__internal;
function om(i) {
  let e;
  return {
    c() {
      e = tm(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Fr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && $0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && jr(e);
    }
  };
}
function am(i) {
  let e, t, n, l, s, o, r;
  return t = new Ga({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [om] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = aa("label"), Z0(t.$$.fragment), n = em(), l = aa("input"), ss(l, "type", "color"), l.disabled = /*disabled*/
      i[3], ss(l, "class", "svelte-16l8u73"), ss(e, "class", "block");
    },
    m(a, f) {
      Fr(a, e, f), J0(t, e, null), sa(e, n), sa(e, l), ra(
        l,
        /*value*/
        i[0]
      ), s = !0, o || (r = [
        os(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        os(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        os(
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
      1 && ra(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (nm(t.$$.fragment, a), s = !0);
    },
    o(a) {
      im(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && jr(e), G0(t), o = !1, Q0(r);
    }
  };
}
function rm(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = lm();
  function c() {
    f("change", n), l || f("input");
  }
  sm(() => {
    t(5, l = !1);
  });
  function u(m) {
    oa.call(this, i, m);
  }
  function _(m) {
    oa.call(this, i, m);
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
class fm extends P0 {
  constructor(e) {
    super(), K0(this, e, rm, am, x0, {
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
  SvelteComponent: cm,
  append: Ur,
  attr: fe,
  bubble: um,
  check_outros: _m,
  create_slot: Vr,
  detach: pi,
  element: wl,
  empty: dm,
  get_all_dirty_from_scope: Nr,
  get_slot_changes: Or,
  group_outros: hm,
  init: mm,
  insert: vi,
  listen: gm,
  safe_not_equal: bm,
  set_style: Le,
  space: Pr,
  src_url_equal: il,
  toggle_class: In,
  transition_in: ll,
  transition_out: sl,
  update_slot_base: Zr
} = window.__gradio__svelte__internal;
function wm(i) {
  let e, t, n, l, s, o, r = (
    /*icon*/
    i[7] && fa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), f = Vr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = wl("button"), r && r.c(), t = Pr(), f && f.c(), fe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), fe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], In(e, "hidden", !/*visible*/
      i[2]), Le(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Le(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Le(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      vi(c, e, u), r && r.m(e, null), Ur(e, t), f && f.m(e, null), l = !0, s || (o = gm(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = fa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!l || u & /*$$scope*/
      2048) && Zr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? Or(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Nr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && fe(e, "class", n), (!l || u & /*elem_id*/
      1) && fe(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && In(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Le(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Le(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Le(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (ll(f, c), l = !0);
    },
    o(c) {
      sl(f, c), l = !1;
    },
    d(c) {
      c && pi(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function pm(i) {
  let e, t, n, l, s = (
    /*icon*/
    i[7] && ca(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Vr(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = wl("a"), s && s.c(), t = Pr(), r && r.c(), fe(
        e,
        "href",
        /*link*/
        i[6]
      ), fe(e, "rel", "noopener noreferrer"), fe(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), fe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), fe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), In(e, "hidden", !/*visible*/
      i[2]), In(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Le(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Le(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Le(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Le(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, f) {
      vi(a, e, f), s && s.m(e, null), Ur(e, t), r && r.m(e, null), l = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = ca(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!l || f & /*$$scope*/
      2048) && Zr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        l ? Or(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Nr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || f & /*link*/
      64) && fe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || f & /*disabled*/
      256) && fe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && fe(e, "class", n), (!l || f & /*elem_id*/
      1) && fe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || f & /*size, variant, elem_classes, visible*/
      30) && In(e, "hidden", !/*visible*/
      a[2]), (!l || f & /*size, variant, elem_classes, disabled*/
      282) && In(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Le(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Le(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Le(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Le(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (ll(r, a), l = !0);
    },
    o(a) {
      sl(r, a), l = !1;
    },
    d(a) {
      a && pi(e), s && s.d(), r && r.d(a);
    }
  };
}
function fa(i) {
  let e, t, n;
  return {
    c() {
      e = wl("img"), fe(e, "class", "button-icon svelte-8huxfn"), il(e.src, t = /*icon*/
      i[7].url) || fe(e, "src", t), fe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      vi(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !il(e.src, t = /*icon*/
      l[7].url) && fe(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && fe(e, "alt", n);
    },
    d(l) {
      l && pi(e);
    }
  };
}
function ca(i) {
  let e, t, n;
  return {
    c() {
      e = wl("img"), fe(e, "class", "button-icon svelte-8huxfn"), il(e.src, t = /*icon*/
      i[7].url) || fe(e, "src", t), fe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      vi(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !il(e.src, t = /*icon*/
      l[7].url) && fe(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && fe(e, "alt", n);
    },
    d(l) {
      l && pi(e);
    }
  };
}
function vm(i) {
  let e, t, n, l;
  const s = [pm, wm], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = dm();
    },
    m(a, f) {
      o[e].m(a, f), vi(a, n, f), l = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (hm(), sl(o[c], 1, 1, () => {
        o[c] = null;
      }), _m(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), ll(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ll(t), l = !0);
    },
    o(a) {
      sl(t), l = !1;
    },
    d(a) {
      a && pi(n), o[e].d(a);
    }
  };
}
function km(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(p) {
    um.call(this, i, p);
  }
  return i.$$set = (p) => {
    "elem_id" in p && t(0, s = p.elem_id), "elem_classes" in p && t(1, o = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, f = p.size), "value" in p && t(5, c = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, _ = p.icon), "disabled" in p && t(8, d = p.disabled), "scale" in p && t(9, m = p.scale), "min_width" in p && t(10, h = p.min_width), "$$scope" in p && t(11, l = p.$$scope);
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
class zs extends cm {
  constructor(e) {
    super(), mm(this, e, km, vm, bm, {
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
  SvelteComponent: ym,
  add_render_callback: Gr,
  append: Ii,
  attr: Te,
  binding_callbacks: ua,
  check_outros: Cm,
  create_bidirectional_transition: _a,
  destroy_each: Sm,
  detach: di,
  element: ol,
  empty: zm,
  ensure_array_like: da,
  group_outros: Bm,
  init: Dm,
  insert: hi,
  listen: Bs,
  prevent_default: qm,
  run_all: Lm,
  safe_not_equal: Mm,
  set_data: Em,
  set_style: Mn,
  space: Ds,
  text: Rm,
  toggle_class: ft,
  transition_in: as,
  transition_out: ha
} = window.__gradio__svelte__internal, { createEventDispatcher: Am } = window.__gradio__svelte__internal;
function ma(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function ga(i) {
  let e, t, n, l, s, o = da(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = ba(ma(i, o, a));
  return {
    c() {
      e = ol("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Te(e, "class", "options svelte-yuohum"), Te(e, "role", "listbox"), Mn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Mn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Mn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, f) {
      hi(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (s = Bs(e, "mousedown", qm(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = da(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = ma(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = ba(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Mn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Mn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Mn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Gr(() => {
        n && (t || (t = _a(e, vo, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = _a(e, vo, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && di(e), Sm(r, a), i[22](null), a && t && t.end(), l = !1, s();
    }
  };
}
function ba(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = ol("li"), t = ol("span"), t.textContent = "✓", n = Ds(), s = Rm(l), o = Ds(), Te(t, "class", "inner-item svelte-yuohum"), ft(t, "hide", !/*selected_indices*/
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
      )), ft(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), ft(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ft(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ft(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      hi(c, e, u), Ii(e, t), Ii(e, n), Ii(e, s), Ii(e, o);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && ft(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Em(s, l), u & /*filtered_indices*/
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
      18 && ft(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && di(e);
    }
  };
}
function Wm(i) {
  let e, t, n, l, s;
  Gr(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && ga(i)
  );
  return {
    c() {
      e = ol("div"), t = Ds(), o && o.c(), n = zm(), Te(e, "class", "reference");
    },
    m(r, a) {
      hi(r, e, a), i[20](e), hi(r, t, a), o && o.m(r, a), hi(r, n, a), l || (s = [
        Bs(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Bs(
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
      12 && as(o, 1)) : (o = ga(r), o.c(), as(o, 1), o.m(n.parentNode, n)) : o && (Bm(), ha(o, 1, 1, () => {
        o = null;
      }), Cm());
    },
    i(r) {
      as(o);
    },
    o(r) {
      ha(o);
    },
    d(r) {
      r && (di(e), di(t), di(n)), i[20](null), o && o.d(r), l = !1, Lm(s);
    }
  };
}
function Xm(i, e, t) {
  var n, l;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, m, h, g, p, w, b;
  function k() {
    const { top: W, bottom: F } = h.getBoundingClientRect();
    t(16, u = W), t(17, _ = b - F);
  }
  let v = null;
  function y() {
    r && (v !== null && clearTimeout(v), v = setTimeout(
      () => {
        k(), v = null;
      },
      10
    ));
  }
  const S = Am();
  function C() {
    t(11, b = window.innerHeight);
  }
  function z(W) {
    ua[W ? "unshift" : "push"](() => {
      h = W, t(6, h);
    });
  }
  const D = (W) => S("change", W);
  function q(W) {
    ua[W ? "unshift" : "push"](() => {
      g = W, t(7, g);
    });
  }
  return i.$$set = (W) => {
    "choices" in W && t(0, s = W.choices), "filtered_indices" in W && t(1, o = W.filtered_indices), "show_options" in W && t(2, r = W.show_options), "disabled" in W && t(3, a = W.disabled), "selected_indices" in W && t(4, f = W.selected_indices), "active_index" in W && t(5, c = W.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && f.length > 0) {
          let F = g.querySelectorAll("li");
          for (const J of Array.from(F))
            if (J.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, J.offsetTop);
              break;
            }
        }
        k();
        const W = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (W == null ? void 0 : W.height) || 0), t(8, m = (W == null ? void 0 : W.width) || 0);
      }
      _ > u ? (t(10, w = _), t(9, p = null)) : (t(9, p = `${_ + d}px`), t(10, w = u - d));
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
    p,
    w,
    b,
    y,
    S,
    n,
    l,
    u,
    _,
    d,
    C,
    z,
    D,
    q
  ];
}
class Ym extends ym {
  constructor(e) {
    super(), Dm(this, e, Xm, Wm, Mm, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Im(i, e) {
  return (i % e + e) % e;
}
function wa(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function Hm(i, e, t) {
  i("change", e), t || i("input");
}
function Tm(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Im(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: jm,
  append: tn,
  attr: He,
  binding_callbacks: Fm,
  check_outros: Um,
  create_component: qs,
  destroy_component: Ls,
  detach: Fs,
  element: An,
  group_outros: Vm,
  init: Nm,
  insert: Us,
  listen: ti,
  mount_component: Ms,
  run_all: Om,
  safe_not_equal: Pm,
  set_data: Zm,
  set_input_value: pa,
  space: rs,
  text: Gm,
  toggle_class: En,
  transition_in: Wn,
  transition_out: fi
} = window.__gradio__svelte__internal, { onMount: Km } = window.__gradio__svelte__internal, { createEventDispatcher: Jm, afterUpdate: Qm } = window.__gradio__svelte__internal;
function xm(i) {
  let e;
  return {
    c() {
      e = Gm(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Us(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Zm(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Fs(e);
    }
  };
}
function va(i) {
  let e, t, n;
  return t = new As({}), {
    c() {
      e = An("div"), qs(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, s) {
      Us(l, e, s), Ms(t, e, null), n = !0;
    },
    i(l) {
      n || (Wn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      fi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Fs(e), Ls(t);
    }
  };
}
function $m(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m;
  t = new Ga({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [xm] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && va();
  return u = new Ym({
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
      e = An("div"), qs(t.$$.fragment), n = rs(), l = An("div"), s = An("div"), o = An("div"), r = An("input"), f = rs(), h && h.c(), c = rs(), qs(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
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
      i[7], En(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), He(o, "class", "secondary-wrap svelte-1m1zvyj"), He(s, "class", "wrap-inner svelte-1m1zvyj"), En(
        s,
        "show_options",
        /*show_options*/
        i[12]
      ), He(l, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), En(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, p) {
      Us(g, e, p), Ms(t, e, null), tn(e, n), tn(e, l), tn(l, s), tn(s, o), tn(o, r), pa(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), tn(o, f), h && h.m(o, null), tn(l, c), Ms(u, l, null), _ = !0, d || (m = [
        ti(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ti(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ti(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ti(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ti(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], d = !0);
    },
    p(g, p) {
      const w = {};
      p[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      g[4]), p[0] & /*info*/
      2 && (w.info = /*info*/
      g[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: p, ctx: g }), t.$set(w), (!_ || p[0] & /*show_options*/
      4096) && He(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || p[0] & /*label*/
      1) && He(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && pa(
        r,
        /*input_text*/
        g[9]
      ), (!_ || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && En(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Vm(), fi(h, 1, 1, () => {
        h = null;
      }), Um()) : h ? p[0] & /*disabled*/
      8 && Wn(h, 1) : (h = va(), h.c(), Wn(h, 1), h.m(o, null)), (!_ || p[0] & /*show_options*/
      4096) && En(
        s,
        "show_options",
        /*show_options*/
        g[12]
      );
      const b = {};
      p[0] & /*show_options*/
      4096 && (b.show_options = /*show_options*/
      g[12]), p[0] & /*choices*/
      4 && (b.choices = /*choices*/
      g[2]), p[0] & /*filtered_indices*/
      1024 && (b.filtered_indices = /*filtered_indices*/
      g[10]), p[0] & /*disabled*/
      8 && (b.disabled = /*disabled*/
      g[3]), p[0] & /*selected_index*/
      2048 && (b.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), p[0] & /*active_index*/
      16384 && (b.active_index = /*active_index*/
      g[14]), u.$set(b), (!_ || p[0] & /*container*/
      32) && En(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (Wn(t.$$.fragment, g), Wn(h), Wn(u.$$.fragment, g), _ = !0);
    },
    o(g) {
      fi(t.$$.fragment, g), fi(h), fi(u.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && Fs(e), Ls(t), i[29](null), h && h.d(), Ls(u), d = !1, Om(m);
    }
  };
}
function eg(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, p, w, b = "", k = "", v = !1, y = [], S = null, C = null, z;
  const D = Jm();
  s ? (z = a.map((A) => A[1]).indexOf(s), C = z, C === -1 ? (o = s, C = null) : ([b, o] = a[C], k = b), W()) : a.length > 0 && (z = 0, C = 0, [b, s] = a[C], o = s, k = b);
  function q() {
    t(13, p = a.map((A) => A[0])), t(24, w = a.map((A) => A[1]));
  }
  function W() {
    q(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, b = ""), t(11, C = null)) : w.includes(s) ? (t(9, b = p[w.indexOf(s)]), t(11, C = w.indexOf(s))) : d ? (t(9, b = s), t(11, C = null)) : (t(9, b = ""), t(11, C = null)), t(27, z = C);
  }
  function F(A) {
    if (t(11, C = parseInt(A.detail.target.dataset.index)), isNaN(C)) {
      t(11, C = null);
      return;
    }
    t(12, g = !1), t(14, S = null), h.blur();
  }
  function J(A) {
    t(10, y = a.map((Q, ae) => ae)), t(12, g = !0), D("focus");
  }
  function le() {
    d ? t(20, s = b) : t(9, b = p[w.indexOf(s)]), t(12, g = !1), t(14, S = null), D("blur");
  }
  function P(A) {
    t(12, [g, S] = Tm(A, S, y), g, (t(14, S), t(2, a), t(23, f), t(6, d), t(9, b), t(10, y), t(8, h), t(25, k), t(11, C), t(27, z), t(26, v), t(24, w))), A.key === "Enter" && (S !== null ? (t(11, C = S), t(12, g = !1), h.blur(), t(14, S = null)) : p.includes(b) ? (t(11, C = p.indexOf(b)), t(12, g = !1), t(14, S = null), h.blur()) : d && (t(20, s = b), t(11, C = null), t(12, g = !1), t(14, S = null), h.blur()), D("enter", s));
  }
  Qm(() => {
    t(21, r = !1), t(26, v = !0);
  }), Km(() => {
    h.focus();
  });
  function $() {
    b = this.value, t(9, b), t(11, C), t(27, z), t(26, v), t(2, a), t(24, w);
  }
  function R(A) {
    Fm[A ? "unshift" : "push"](() => {
      h = A, t(8, h);
    });
  }
  const V = (A) => D("key_up", { key: A.key, input_value: b });
  return i.$$set = (A) => {
    "label" in A && t(0, n = A.label), "info" in A && t(1, l = A.info), "value" in A && t(20, s = A.value), "value_is_output" in A && t(21, r = A.value_is_output), "choices" in A && t(2, a = A.choices), "disabled" in A && t(3, c = A.disabled), "show_label" in A && t(4, u = A.show_label), "container" in A && t(5, _ = A.container), "allow_custom_value" in A && t(6, d = A.allow_custom_value), "filterable" in A && t(7, m = A.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== z && C !== null && v && (t(9, [b, s] = a[C], b, (t(20, s), t(11, C), t(27, z), t(26, v), t(2, a), t(24, w))), t(27, z = C), D("select", {
      index: C,
      value: w[C],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (W(), Hm(D, s, r), t(22, o = s)), i.$$.dirty[0] & /*choices*/
    4 && q(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || W(), t(23, f = a), t(10, y = wa(a, b)), !d && y.length > 0 && t(14, S = y[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && b !== k && (t(10, y = wa(a, b)), t(25, k = b), !d && y.length > 0 && t(14, S = y[0]));
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
    b,
    y,
    C,
    g,
    p,
    S,
    D,
    F,
    J,
    le,
    P,
    s,
    r,
    o,
    f,
    w,
    k,
    v,
    z,
    $,
    R,
    V
  ];
}
class tg extends jm {
  constructor(e) {
    super(), Nm(
      this,
      e,
      eg,
      $m,
      Pm,
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
  SvelteComponent: ng,
  append: Ne,
  attr: Hn,
  check_outros: Es,
  create_component: un,
  destroy_component: _n,
  detach: Kn,
  element: ut,
  group_outros: Rs,
  init: ig,
  insert: Jn,
  listen: lg,
  mount_component: dn,
  safe_not_equal: sg,
  set_style: Tn,
  space: ni,
  text: Vs,
  toggle_class: ka,
  transition_in: Se,
  transition_out: je
} = window.__gradio__svelte__internal, { createEventDispatcher: og } = window.__gradio__svelte__internal, { onMount: ag, onDestroy: rg } = window.__gradio__svelte__internal;
function ya(i) {
  let e, t, n, l, s, o, r;
  const a = [cg, fg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = f[n] = a[n](i), {
    c() {
      e = ut("div"), t = ut("button"), l.c(), Hn(t, "class", "icon svelte-d9x7u0"), Hn(t, "aria-label", "Lock label detail"), ka(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Tn(e, "margin-right", "8px");
    },
    m(u, _) {
      Jn(u, e, _), Ne(e, t), f[n].m(t, null), s = !0, o || (r = lg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Rs(), je(f[d], 1, 1, () => {
        f[d] = null;
      }), Es(), l = f[n], l || (l = f[n] = a[n](u), l.c()), Se(l, 1), l.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && ka(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (Se(l), s = !0);
    },
    o(u) {
      je(l), s = !1;
    },
    d(u) {
      u && Kn(e), f[n].d(), o = !1, r();
    }
  };
}
function fg(i) {
  let e, t;
  return e = new O0({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, l) {
      dn(e, n, l), t = !0;
    },
    i(n) {
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _n(e, n);
    }
  };
}
function cg(i) {
  let e, t;
  return e = new I0({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, l) {
      dn(e, n, l), t = !0;
    },
    i(n) {
      t || (Se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _n(e, n);
    }
  };
}
function ug(i) {
  let e;
  return {
    c() {
      e = Vs("Cancel");
    },
    m(t, n) {
      Jn(t, e, n);
    },
    d(t) {
      t && Kn(e);
    }
  };
}
function Ca(i) {
  let e, t, n;
  return t = new zs({
    props: {
      variant: "stop",
      $$slots: { default: [_g] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = ut("div"), un(t.$$.fragment), Tn(e, "margin-right", "8px");
    },
    m(l, s) {
      Jn(l, e, s), dn(t, e, null), n = !0;
    },
    p(l, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: l }), t.$set(o);
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      je(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Kn(e), _n(t);
    }
  };
}
function _g(i) {
  let e;
  return {
    c() {
      e = Vs("Remove");
    },
    m(t, n) {
      Jn(t, e, n);
    },
    d(t) {
      t && Kn(e);
    }
  };
}
function dg(i) {
  let e;
  return {
    c() {
      e = Vs("OK");
    },
    m(t, n) {
      Jn(t, e, n);
    },
    d(t) {
      t && Kn(e);
    }
  };
}
function hg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h, g, p, w = !/*showRemove*/
  i[4] && ya(i);
  o = new tg({
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
  ), f = new fm({
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
  ), _ = new zs({
    props: {
      $$slots: { default: [ug] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let b = (
    /*showRemove*/
    i[4] && Ca(i)
  );
  return g = new zs({
    props: {
      variant: "primary",
      $$slots: { default: [dg] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = ut("div"), t = ut("div"), n = ut("span"), w && w.c(), l = ni(), s = ut("div"), un(o.$$.fragment), r = ni(), a = ut("div"), un(f.$$.fragment), c = ni(), u = ut("div"), un(_.$$.fragment), d = ni(), b && b.c(), m = ni(), h = ut("div"), un(g.$$.fragment), Tn(s, "margin-right", "10px"), Tn(a, "margin-right", "40px"), Tn(a, "margin-bottom", "8px"), Tn(u, "margin-right", "8px"), Hn(n, "class", "model-content svelte-d9x7u0"), Hn(t, "class", "modal-container svelte-d9x7u0"), Hn(e, "class", "modal svelte-d9x7u0"), Hn(e, "id", "model-box-edit");
    },
    m(k, v) {
      Jn(k, e, v), Ne(e, t), Ne(t, n), w && w.m(n, null), Ne(n, l), Ne(n, s), dn(o, s, null), Ne(n, r), Ne(n, a), dn(f, a, null), Ne(n, c), Ne(n, u), dn(_, u, null), Ne(n, d), b && b.m(n, null), Ne(n, m), Ne(n, h), dn(g, h, null), p = !0;
    },
    p(k, [v]) {
      /*showRemove*/
      k[4] ? w && (Rs(), je(w, 1, 1, () => {
        w = null;
      }), Es()) : w ? (w.p(k, v), v & /*showRemove*/
      16 && Se(w, 1)) : (w = ya(k), w.c(), Se(w, 1), w.m(n, l));
      const y = {};
      v & /*currentLabel*/
      1 && (y.value = /*currentLabel*/
      k[0]), v & /*choices*/
      8 && (y.choices = /*choices*/
      k[3]), o.$set(y);
      const S = {};
      v & /*currentColor*/
      2 && (S.value = /*currentColor*/
      k[1]), f.$set(S);
      const C = {};
      v & /*$$scope*/
      262144 && (C.$$scope = { dirty: v, ctx: k }), _.$set(C), /*showRemove*/
      k[4] ? b ? (b.p(k, v), v & /*showRemove*/
      16 && Se(b, 1)) : (b = Ca(k), b.c(), Se(b, 1), b.m(n, m)) : b && (Rs(), je(b, 1, 1, () => {
        b = null;
      }), Es());
      const z = {};
      v & /*$$scope*/
      262144 && (z.$$scope = { dirty: v, ctx: k }), g.$set(z);
    },
    i(k) {
      p || (Se(w), Se(o.$$.fragment, k), Se(f.$$.fragment, k), Se(_.$$.fragment, k), Se(b), Se(g.$$.fragment, k), p = !0);
    },
    o(k) {
      je(w), je(o.$$.fragment, k), je(f.$$.fragment, k), je(_.$$.fragment, k), je(b), je(g.$$.fragment, k), p = !1;
    },
    d(k) {
      k && Kn(e), w && w.d(), _n(o), _n(f), _n(_), b && b.d(), _n(g);
    }
  };
}
function mg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = og();
  function _(v) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: v
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(v) {
    const { detail: y } = v;
    let S = y;
    Number.isInteger(S) ? (Array.isArray(o) && S < o.length && t(1, a = o[S]), Array.isArray(s) && S < s.length && t(0, l = s[S][0])) : t(0, l = S);
  }
  function m(v) {
    const { detail: y } = v;
    t(1, a = y);
  }
  function h(v) {
    d(v), _(1);
  }
  function g(v) {
    t(2, c = !c);
  }
  function p(v) {
    switch (v.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  ag(() => {
    document.addEventListener("keydown", p), t(0, l = n), t(1, a = r);
  }), rg(() => {
    document.removeEventListener("keydown", p);
  });
  const w = () => _(0), b = () => _(-1), k = () => _(1);
  return i.$$set = (v) => {
    "label" in v && t(10, n = v.label), "currentLabel" in v && t(0, l = v.currentLabel), "choices" in v && t(3, s = v.choices), "choicesColors" in v && t(11, o = v.choicesColors), "color" in v && t(12, r = v.color), "currentColor" in v && t(1, a = v.currentColor), "showRemove" in v && t(4, f = v.showRemove), "labelDetailLock" in v && t(2, c = v.labelDetailLock);
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
    w,
    b,
    k
  ];
}
class Ns extends ng {
  constructor(e) {
    super(), ig(this, e, mg, hg, sg, {
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
const be = (i, e, t) => Math.min(Math.max(i, e), t);
function fs(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, s] = t;
  return `rgba(${n}, ${l}, ${s}, ${e})`;
}
class cs {
  constructor(e, t, n, l, s, o, r, a, f, c, u, _, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, p = 8, w = 2, b = 4, k = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (v) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let y = (v.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, S = (v.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = be(y, -this._xmin, C - this._xmax), S = be(S, -this._ymin, z - this._ymax), this._xmin += y, this._ymin += S, this._xmax += y, this._ymax += S, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (v) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [y, S] = this.toBoxCoordinates(v.clientX, v.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, S = (S - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), S > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = S, this.creatingAnchorY = "ymin") : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = S : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = S : S < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = S, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (v) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = be(this._xmin, 0, y - this.minSize), this._ymin = be(this._ymin, 0, S - this.minSize), this._xmax = be(this._xmax, this.minSize, y), this._ymax = be(this._ymax, this.minSize, S), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > S ? (this._ymin -= this._ymax - S, this._ymax = S) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (v) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const y = v.clientX, S = v.clientY, C = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (S - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, q = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += C, this._ymin += z, this._xmin = be(this._xmin, 0, this._xmax - this.minSize), this._ymin = be(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += C, this._ymin += z, this._xmax = be(this._xmax, this._xmin + this.minSize, D), this._ymin = be(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += C, this._ymax += z, this._xmax = be(this._xmax, this._xmin + this.minSize, D), this._ymax = be(this._ymax, this._ymin + this.minSize, q);
            break;
          case 3:
            this._xmin += C, this._ymax += z, this._xmin = be(this._xmin, 0, this._xmax - this.minSize), this._ymax = be(this._ymax, this._ymin + this.minSize, q);
            break;
          case 4:
            this._ymin += z, this._ymin = be(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += C, this._xmax = be(this._xmax, this._xmin + this.minSize, D);
            break;
          case 6:
            this._ymax += z, this._ymax = be(this._ymax, this._ymin + this.minSize, q);
            break;
          case 7:
            this._xmin += C, this._xmin = be(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = s, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = k, this.label = f, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = _, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = p, this.thickness = w, this.selectedThickness = b, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = fs(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = fs(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, l, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, l, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = fs(this.color, 1);
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
], Hi = (i, e, t) => Math.min(Math.max(i, e), t);
class gg {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = Hi(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = Hi(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Hi(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Hi(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += s, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: bg,
  append: ct,
  attr: ye,
  binding_callbacks: wg,
  bubble: us,
  check_outros: jn,
  create_component: qt,
  destroy_component: Lt,
  detach: St,
  element: Bt,
  empty: pg,
  group_outros: Fn,
  init: vg,
  insert: zt,
  listen: Me,
  mount_component: Mt,
  noop: Kr,
  run_all: Jr,
  safe_not_equal: kg,
  set_style: Ti,
  space: Dt,
  toggle_class: ji,
  transition_in: te,
  transition_out: ue
} = window.__gradio__svelte__internal, { onMount: yg, onDestroy: Cg, createEventDispatcher: Sg } = window.__gradio__svelte__internal;
function Sa(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h, g, p;
  n = new o0({}), o = new h0({});
  let w = (
    /*showRemoveButton*/
    i[1] && za(i)
  ), b = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[15] && Ba(i);
  return u = new H_({}), m = new C_({}), {
    c() {
      e = Bt("span"), t = Bt("button"), qt(n.$$.fragment), l = Dt(), s = Bt("button"), qt(o.$$.fragment), r = Dt(), w && w.c(), a = Dt(), b && b.c(), f = Dt(), c = Bt("button"), qt(u.$$.fragment), _ = Dt(), d = Bt("button"), qt(m.$$.fragment), ye(t, "class", "icon svelte-1m8vz1h"), ye(t, "aria-label", "Create box"), ji(
        t,
        "selected",
        /*mode*/
        i[11] === /*Mode*/
        i[8].creation
      ), ye(s, "class", "icon svelte-1m8vz1h"), ye(s, "aria-label", "Edit boxes"), ji(
        s,
        "selected",
        /*mode*/
        i[11] === /*Mode*/
        i[8].drag
      ), ye(c, "class", "icon svelte-1m8vz1h"), ye(c, "aria-label", "Rotate counterclockwise"), ye(d, "class", "icon svelte-1m8vz1h"), ye(d, "aria-label", "Rotate clockwise"), ye(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(k, v) {
      zt(k, e, v), ct(e, t), Mt(n, t, null), ct(e, l), ct(e, s), Mt(o, s, null), ct(e, r), w && w.m(e, null), ct(e, a), b && b.m(e, null), ct(e, f), ct(e, c), Mt(u, c, null), ct(e, _), ct(e, d), Mt(m, d, null), h = !0, g || (p = [
        Me(
          t,
          "click",
          /*click_handler*/
          i[41]
        ),
        Me(
          s,
          "click",
          /*click_handler_1*/
          i[42]
        ),
        Me(
          c,
          "click",
          /*click_handler_4*/
          i[45]
        ),
        Me(
          d,
          "click",
          /*click_handler_5*/
          i[46]
        )
      ], g = !0);
    },
    p(k, v) {
      (!h || v[0] & /*mode, Mode*/
      2304) && ji(
        t,
        "selected",
        /*mode*/
        k[11] === /*Mode*/
        k[8].creation
      ), (!h || v[0] & /*mode, Mode*/
      2304) && ji(
        s,
        "selected",
        /*mode*/
        k[11] === /*Mode*/
        k[8].drag
      ), /*showRemoveButton*/
      k[1] ? w ? (w.p(k, v), v[0] & /*showRemoveButton*/
      2 && te(w, 1)) : (w = za(k), w.c(), te(w, 1), w.m(e, a)) : w && (Fn(), ue(w, 1, 1, () => {
        w = null;
      }), jn()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[15] ? b ? (b.p(k, v), v[0] & /*disableEditBoxes, labelDetailLock*/
      32800 && te(b, 1)) : (b = Ba(k), b.c(), te(b, 1), b.m(e, f)) : b && (Fn(), ue(b, 1, 1, () => {
        b = null;
      }), jn());
    },
    i(k) {
      h || (te(n.$$.fragment, k), te(o.$$.fragment, k), te(w), te(b), te(u.$$.fragment, k), te(m.$$.fragment, k), h = !0);
    },
    o(k) {
      ue(n.$$.fragment, k), ue(o.$$.fragment, k), ue(w), ue(b), ue(u.$$.fragment, k), ue(m.$$.fragment, k), h = !1;
    },
    d(k) {
      k && St(e), Lt(n), Lt(o), w && w.d(), b && b.d(), Lt(u), Lt(m), g = !1, Jr(p);
    }
  };
}
function za(i) {
  let e, t, n, l, s;
  return t = new y0({}), {
    c() {
      e = Bt("button"), qt(t.$$.fragment), ye(e, "class", "icon svelte-1m8vz1h"), ye(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      zt(o, e, r), Mt(t, e, null), n = !0, l || (s = Me(
        e,
        "click",
        /*click_handler_2*/
        i[43]
      ), l = !0);
    },
    p: Kr,
    i(o) {
      n || (te(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ue(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && St(e), Lt(t), l = !1, s();
    }
  };
}
function Ba(i) {
  let e, t, n, l, s;
  return t = new L0({}), {
    c() {
      e = Bt("button"), qt(t.$$.fragment), ye(e, "class", "icon svelte-1m8vz1h"), ye(e, "aria-label", "Edit label");
    },
    m(o, r) {
      zt(o, e, r), Mt(t, e, null), n = !0, l || (s = Me(
        e,
        "click",
        /*click_handler_3*/
        i[44]
      ), l = !0);
    },
    p: Kr,
    i(o) {
      n || (te(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ue(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && St(e), Lt(t), l = !1, s();
    }
  };
}
function Da(i) {
  let e, t;
  return e = new Ns({
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
        i[10] >= 0 && /*selectedBox*/
        i[10] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[10]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[10] >= 0 && /*selectedBox*/
        i[10] < /*value*/
        i[0].boxes.length ? pn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[10]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[24]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[47]
  ), {
    c() {
      qt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      1025 && (s.label = /*selectedBox*/
      n[10] >= 0 && /*selectedBox*/
      n[10] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[10]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      1025 && (s.color = /*selectedBox*/
      n[10] >= 0 && /*selectedBox*/
      n[10] < /*value*/
      n[0].boxes.length ? pn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[10]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || (te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function qa(i) {
  let e, t;
  return e = new Ns({
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
        i[10] >= 0 && /*selectedBox*/
        i[10] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[10]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[10] >= 0 && /*selectedBox*/
        i[10] < /*value*/
        i[0].boxes.length ? pn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[10]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[15]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[25]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[48]
  ), {
    c() {
      qt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      1025 && (s.label = /*selectedBox*/
      n[10] >= 0 && /*selectedBox*/
      n[10] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[10]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      1025 && (s.color = /*selectedBox*/
      n[10] >= 0 && /*selectedBox*/
      n[10] < /*value*/
      n[0].boxes.length ? pn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[10]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      32768 && (s.labelDetailLock = /*labelDetailLock*/
      n[15]), e.$set(s);
    },
    i(n) {
      t || (te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function La(i) {
  let e, t;
  return e = new Ns({
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
        i[10] >= 0 && /*selectedBox*/
        i[10] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[10]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[10] >= 0 && /*selectedBox*/
        i[10] < /*value*/
        i[0].boxes.length ? pn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[10]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[15]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[26]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[49]
  ), {
    c() {
      qt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      1025 && (s.label = /*selectedBox*/
      n[10] >= 0 && /*selectedBox*/
      n[10] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[10]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      1025 && (s.color = /*selectedBox*/
      n[10] >= 0 && /*selectedBox*/
      n[10] < /*value*/
      n[0].boxes.length ? pn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[10]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      32768 && (s.labelDetailLock = /*labelDetailLock*/
      n[15]), e.$set(s);
    },
    i(n) {
      t || (te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function zg(i) {
  let e, t, n, l, s, o, r, a, f, c, u = (
    /*interactive*/
    i[2] && Sa(i)
  ), _ = (
    /*editModalVisible*/
    i[12] && Da(i)
  ), d = (
    /*newModalVisible*/
    i[13] && qa(i)
  ), m = (
    /*editDefaultLabelVisible*/
    i[14] && La(i)
  );
  return {
    c() {
      e = Bt("div"), t = Bt("canvas"), n = Dt(), u && u.c(), l = Dt(), _ && _.c(), s = Dt(), d && d.c(), o = Dt(), m && m.c(), r = pg(), Ti(
        t,
        "height",
        /*height*/
        i[6]
      ), Ti(
        t,
        "width",
        /*width*/
        i[7]
      ), ye(t, "class", "canvas-annotator svelte-1m8vz1h"), ye(e, "class", "canvas-container svelte-1m8vz1h"), ye(e, "tabindex", "-1");
    },
    m(h, g) {
      zt(h, e, g), ct(e, t), i[40](t), zt(h, n, g), u && u.m(h, g), zt(h, l, g), _ && _.m(h, g), zt(h, s, g), d && d.m(h, g), zt(h, o, g), m && m.m(h, g), zt(h, r, g), a = !0, f || (c = [
        Me(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[16]
        ),
        Me(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[17]
        ),
        Me(
          t,
          "pointermove",
          /*handlePointerMove*/
          i[19]
        ),
        Me(
          t,
          "pointercancel",
          /*handlePointerCancel*/
          i[18]
        ),
        Me(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[23]
        ),
        Me(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[20]
        ),
        Me(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[29]
        ),
        Me(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[30]
        )
      ], f = !0);
    },
    p(h, g) {
      (!a || g[0] & /*height*/
      64) && Ti(
        t,
        "height",
        /*height*/
        h[6]
      ), (!a || g[0] & /*width*/
      128) && Ti(
        t,
        "width",
        /*width*/
        h[7]
      ), /*interactive*/
      h[2] ? u ? (u.p(h, g), g[0] & /*interactive*/
      4 && te(u, 1)) : (u = Sa(h), u.c(), te(u, 1), u.m(l.parentNode, l)) : u && (Fn(), ue(u, 1, 1, () => {
        u = null;
      }), jn()), /*editModalVisible*/
      h[12] ? _ ? (_.p(h, g), g[0] & /*editModalVisible*/
      4096 && te(_, 1)) : (_ = Da(h), _.c(), te(_, 1), _.m(s.parentNode, s)) : _ && (Fn(), ue(_, 1, 1, () => {
        _ = null;
      }), jn()), /*newModalVisible*/
      h[13] ? d ? (d.p(h, g), g[0] & /*newModalVisible*/
      8192 && te(d, 1)) : (d = qa(h), d.c(), te(d, 1), d.m(o.parentNode, o)) : d && (Fn(), ue(d, 1, 1, () => {
        d = null;
      }), jn()), /*editDefaultLabelVisible*/
      h[14] ? m ? (m.p(h, g), g[0] & /*editDefaultLabelVisible*/
      16384 && te(m, 1)) : (m = La(h), m.c(), te(m, 1), m.m(r.parentNode, r)) : m && (Fn(), ue(m, 1, 1, () => {
        m = null;
      }), jn());
    },
    i(h) {
      a || (te(u), te(_), te(d), te(m), a = !0);
    },
    o(h) {
      ue(u), ue(_), ue(d), ue(m), a = !1;
    },
    d(h) {
      h && (St(e), St(n), St(l), St(s), St(o), St(r)), i[40](null), u && u.d(h), _ && _.d(h), d && d.d(h), m && m.d(h), f = !1, Jr(c);
    }
  };
}
const Ma = 100;
function Fi(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function pn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Bg(i, e, t) {
  var n;
  (function(B) {
    B[B.creation = 0] = "creation", B[B.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: p = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: b = !0 } = e, { useDefaultLabel: k = !1 } = e;
  w === null && (w = m);
  let v, y, S = null, C = -1, z = n.drag, D = /* @__PURE__ */ new Map(), q = new gg(ne, D);
  u !== null && u.boxes.length == 0 && (z = n.creation);
  let W = 0, F = 0, J = 0, le = 0, P = 1, $ = 0, R = 0, V = !1, A = !1, Q = !1, ae = k, Z = { label: "", color: "" }, G = { x: 0, y: 0, distance: 0 };
  const X = Sg();
  function ne() {
    if (y) {
      if (y.clearRect(0, 0, v.width, v.height), y.save(), y.translate(q.offsetX, q.offsetY), y.scale(q.scale, q.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            y.drawImage(S, 0, 0, $, R);
            break;
          case 1:
            y.translate($, 0), y.rotate(Math.PI / 2), y.drawImage(S, 0, 0, R, $);
            break;
          case 2:
            y.translate($, R), y.rotate(Math.PI), y.drawImage(S, 0, 0, $, R);
            break;
          case 3:
            y.translate(0, R), y.rotate(-Math.PI / 2), y.drawImage(S, 0, 0, R, $);
            break;
        }
        y.restore();
      }
      for (const B of u.boxes.slice().reverse())
        B.render(y);
    }
  }
  function E(B) {
    t(10, C = B), u.boxes.forEach((Y) => {
      Y.setSelected(!1);
    }), B >= 0 && B < u.boxes.length && u.boxes[B].setSelected(!0), ne();
  }
  const H = (B, Y) => {
    const U = Math.sqrt(Math.pow(B.clientX - Y.clientX, 2) + Math.pow(B.clientY - Y.clientY, 2));
    return U < Ma ? Ma : U;
  };
  function ee(B) {
    if (s) {
      if (B.preventDefault(), v.setPointerCapture(B.pointerId), D.set(B.pointerId, B), D.size == 1)
        z === n.creation ? Je(B) : z === n.drag && re(B);
      else if (D.size == 2) {
        q.isDragging = !1, u.boxes.forEach((Tt) => {
          Tt.isCreating = !1, Tt.isDragging = !1, Tt.isResizing = !1;
        });
        const Y = Array.from(D.values()), U = Y[0], x = Y[1], se = H(U, x), ie = v.getBoundingClientRect(), me = (U.clientX + x.clientX) / 2 - ie.left, pt = (U.clientY + x.clientY) / 2 - ie.top;
        G.distance = se, G.x = me, G.y = pt;
      }
    }
  }
  function re(B) {
    const Y = v.getBoundingClientRect(), U = B.clientX - Y.left, x = B.clientY - Y.top;
    let se = !1;
    for (const [ie, me] of u.boxes.entries()) {
      const pt = me.indexOfPointInsideHandle(U, x);
      if (pt >= 0) {
        se = !0, E(ie), me.startResize(pt, B);
        return;
      }
    }
    for (const [ie, me] of u.boxes.entries())
      if (me.isPointInsideBox(U, x)) {
        se = !0, E(ie), me.startDrag(B);
        return;
      }
    p || E(-1), se || q.startDrag(B);
  }
  function M(B) {
    s && (D.delete(B.pointerId), v.releasePointerCapture(B.pointerId), X("change"));
  }
  function Ge(B) {
    s && (D.delete(B.pointerId), v.releasePointerCapture(B.pointerId), X("change"));
  }
  function st(B) {
    if (s)
      if (B.preventDefault(), B.pointerType === "mouse") {
        if (!b || u === null || z !== n.drag)
          return;
        const Y = v.getBoundingClientRect(), U = B.clientX - Y.left, x = B.clientY - Y.top;
        for (const [se, ie] of u.boxes.entries()) {
          const me = ie.indexOfPointInsideHandle(U, x);
          if (me >= 0) {
            t(9, v.style.cursor = ie.resizeHandles[me].cursor, v);
            return;
          }
        }
        t(9, v.style.cursor = "default", v);
      } else {
        if (!D.has(B.pointerId))
          return;
        if (D.set(B.pointerId, B), D.size === 2) {
          const Y = Array.from(D.values()), U = Y[0], x = Y[1], se = H(U, x), ie = v.getBoundingClientRect(), me = (U.clientX + x.clientX) / 2 - ie.left, pt = (U.clientY + x.clientY) / 2 - ie.top, Tt = parseFloat((q.scale * (se / G.distance)).toFixed(2)), Os = Tt < 1 ? 1 : Tt, Ps = Os / q.scale;
          q.offsetX = G.x - (G.x - q.offsetX) * Ps, q.offsetY = G.y - (G.y - q.offsetY) * Ps;
          const df = me - G.x, hf = pt - G.y;
          q.offsetX += df, q.offsetY += hf, q.scale = Os, G.x = me, G.y = pt, G.distance = se, ne();
        }
      }
  }
  function Ke(B) {
    if (s)
      switch (B.key) {
        case "Delete":
          Ht();
          break;
      }
  }
  function We(B) {
    if (!s)
      return;
    B.preventDefault();
    const Y = 1 / (1 + B.deltaY / 1e3 * 0.5), U = parseFloat((q.scale * Y).toFixed(2)), x = U < 1 ? 1 : U, se = v.getBoundingClientRect(), ie = B.clientX - se.left, me = B.clientY - se.top, pt = (ie - q.offsetX) / q.scale, Tt = (me - q.offsetY) / q.scale;
    q.offsetX = ie - pt * x, q.offsetY = me - Tt * x, q.scale = x, ne();
  }
  function Je(B) {
    const Y = v.getBoundingClientRect(), U = (B.clientX - Y.left - q.offsetX) / P / q.scale, x = (B.clientY - Y.top - q.offsetY) / P / q.scale;
    let se;
    d.length > 0 ? se = Fi(d[0]) : p ? u.boxes.length > 0 ? se = u.boxes[0].color : se = nn[0] : se = nn[u.boxes.length % nn.length];
    let ie = new cs(ne, ki, q, D, W, F, J, le, "", U, x, U, x, se, o, r, a, f, c);
    ie.startCreating(B, Y.left, Y.top), p ? t(0, u.boxes = [ie], u) : t(0, u.boxes = [ie, ...u.boxes], u), E(0), ne(), X("change");
  }
  function Xe() {
    t(11, z = n.creation), t(9, v.style.cursor = "crosshair", v);
  }
  function mt() {
    t(11, z = n.drag), t(9, v.style.cursor = "default", v);
  }
  function ki() {
    C >= 0 && C < u.boxes.length && (u.boxes[C].getArea() < 1 ? Ht() : (m || (ae ? Cn() : t(13, A = !0)), p && mt()));
  }
  function pl() {
    C >= 0 && C < u.boxes.length && !m && t(12, V = !0);
  }
  function vl(B) {
    s && pl();
  }
  function L(B) {
    t(12, V = !1);
    const { detail: Y } = B;
    let U = Y.label, x = Y.color, se = Y.ret;
    if (C >= 0 && C < u.boxes.length) {
      let ie = u.boxes[C];
      se == 1 ? (ie.label = U, ie.color = Fi(x), ne(), X("change")) : se == -1 && Ht();
    }
  }
  function It(B) {
    t(13, A = !1);
    const { detail: Y } = B;
    let U = Y.label, x = Y.color, se = Y.ret, ie = Y.lock;
    if (C >= 0 && C < u.boxes.length) {
      let me = u.boxes[C];
      se == 1 ? (t(15, ae = ie), Z.label = U, Z.color = x, me.label = U, me.color = Fi(x), ne(), X("change")) : Ht();
    }
  }
  function gt(B) {
    t(14, Q = !1);
    const { detail: Y } = B;
    let U = Y.label, x = Y.color, se = Y.ret, ie = Y.lock;
    se == 1 && (t(15, ae = ie), Z.label = U, Z.color = x);
  }
  function Cn() {
    if (C >= 0 && C < u.boxes.length) {
      let B = u.boxes[C];
      B.label = Z.label, Z.color !== "" && (B.color = Fi(Z.color)), ne(), X("change");
    }
  }
  function Ht() {
    C >= 0 && C < u.boxes.length && (u.boxes.splice(C, 1), E(-1), p && Xe(), X("change"));
  }
  function bt(B) {
    t(0, u.orientation = ((u.orientation + B) % 4 + 4) % 4, u), q.orientation = u.orientation, ot();
    for (const Y of u.boxes)
      Y.onRotate(B);
    ne();
  }
  function ot() {
    if (v) {
      if (P = 1, t(9, v.width = v.clientWidth, v), q.setRotatedImage(S), S !== null) {
        if (q.imageRotatedWidth > v.width)
          P = v.width / q.imageRotatedWidth, $ = Math.round(q.imageRotatedWidth * P), R = Math.round(q.imageRotatedHeight * P), W = 0, F = 0, J = $, le = R, t(9, v.height = R, v);
        else {
          $ = q.imageRotatedWidth, R = q.imageRotatedHeight;
          var B = (v.width - $) / 2;
          W = B, F = 0, J = B + $, le = R, t(9, v.height = R, v);
        }
        q.imageWidth = $, q.imageHeight = R;
      } else
        W = 0, F = 0, J = v.width, le = v.height, t(9, v.height = v.clientHeight, v);
      if (q.resize(v.width, v.height, W, F), J > 0 && le > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = W, Y.canvasYmin = F, Y.canvasXmax = J, Y.canvasYmax = le, Y.setScaleFactor(P);
      ne(), X("change");
    }
  }
  const kl = new ResizeObserver(ot);
  function yl() {
    for (let B = 0; B < u.boxes.length; B++) {
      let Y = u.boxes[B];
      if (!(Y instanceof cs)) {
        let U = "", x = "";
        Y.hasOwnProperty("color") ? (U = Y.color, Array.isArray(U) && U.length === 3 && (U = `rgb(${U[0]}, ${U[1]}, ${U[2]})`)) : U = nn[B % nn.length], Y.hasOwnProperty("label") && (x = Y.label), Y = new cs(ne, ki, q, D, W, F, J, le, x, Y.xmin, Y.ymin, Y.xmax, Y.ymax, U, o, r, a, f, c), t(0, u.boxes[B] = Y, u);
      }
    }
  }
  function Sn() {
    l !== null && (S === null || S.src != l) && (S = new Image(), S.src = l, S.onload = function() {
      ot(), ne();
    });
  }
  yg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let B = 0; B < _.length; B++) {
          let Y = nn[B % nn.length];
          d.push(pn(Y));
        }
      Z.label = _[0][0], Z.color = d[0];
    }
    y = v.getContext("2d"), kl.observe(v), C < 0 && u !== null && u.boxes.length > 0 && E(0), Sn(), ot(), ne();
  });
  function wt() {
    document.addEventListener("keydown", Ke);
  }
  function Qn() {
    document.removeEventListener("keydown", Ke);
  }
  Cg(() => {
    document.removeEventListener("keydown", Ke);
  });
  function nf(B) {
    wg[B ? "unshift" : "push"](() => {
      v = B, t(9, v);
    });
  }
  const lf = () => Xe(), sf = () => mt(), of = () => Ht(), af = () => t(14, Q = !0), rf = () => bt(-1), ff = () => bt(1);
  function cf(B) {
    us.call(this, i, B);
  }
  function uf(B) {
    us.call(this, i, B);
  }
  function _f(B) {
    us.call(this, i, B);
  }
  return i.$$set = (B) => {
    "imageUrl" in B && t(31, l = B.imageUrl), "interactive" in B && t(2, s = B.interactive), "boxAlpha" in B && t(32, o = B.boxAlpha), "boxMinSize" in B && t(33, r = B.boxMinSize), "handleSize" in B && t(34, a = B.handleSize), "boxThickness" in B && t(35, f = B.boxThickness), "boxSelectedThickness" in B && t(36, c = B.boxSelectedThickness), "value" in B && t(0, u = B.value), "choices" in B && t(3, _ = B.choices), "choicesColors" in B && t(4, d = B.choicesColors), "disableEditBoxes" in B && t(5, m = B.disableEditBoxes), "height" in B && t(6, h = B.height), "width" in B && t(7, g = B.width), "singleBox" in B && t(37, p = B.singleBox), "showRemoveButton" in B && t(1, w = B.showRemoveButton), "handlesCursor" in B && t(38, b = B.handlesCursor), "useDefaultLabel" in B && t(39, k = B.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (q.orientation = u.orientation, Sn(), yl(), ot(), ne());
  }, [
    u,
    w,
    s,
    _,
    d,
    m,
    h,
    g,
    n,
    v,
    C,
    z,
    V,
    A,
    Q,
    ae,
    ee,
    M,
    Ge,
    st,
    We,
    Xe,
    mt,
    vl,
    L,
    It,
    gt,
    Ht,
    bt,
    wt,
    Qn,
    l,
    o,
    r,
    a,
    f,
    c,
    p,
    b,
    k,
    nf,
    lf,
    sf,
    of,
    af,
    rf,
    ff,
    cf,
    uf,
    _f
  ];
}
class Dg extends bg {
  constructor(e) {
    super(), vg(
      this,
      e,
      Bg,
      zg,
      kg,
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
        useDefaultLabel: 39
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: qg,
  add_flush_callback: Lg,
  bind: Mg,
  binding_callbacks: Eg,
  create_component: Rg,
  destroy_component: Ag,
  init: Wg,
  mount_component: Xg,
  safe_not_equal: Yg,
  transition_in: Ig,
  transition_out: Hg
} = window.__gradio__svelte__internal, { createEventDispatcher: Tg } = window.__gradio__svelte__internal;
function jg(i) {
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
    i[0]), e = new Dg({ props: s }), Eg.push(() => Mg(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), {
      c() {
        Rg(e.$$.fragment);
      },
      m(o, r) {
        Xg(e, o, r), n = !0;
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
        o[0], Lg(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Ig(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Hg(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Ag(e, o);
      }
    }
  );
}
function Fg(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: p } = e, { handlesCursor: w } = e, { useDefaultLabel: b } = e, k, v;
  const y = Tg();
  function S(z) {
    m = z, t(0, m);
  }
  const C = () => y("change");
  return i.$$set = (z) => {
    "src" in z && t(18, n = z.src), "interactive" in z && t(1, l = z.interactive), "boxesAlpha" in z && t(2, s = z.boxesAlpha), "labelList" in z && t(3, o = z.labelList), "labelColors" in z && t(4, r = z.labelColors), "boxMinSize" in z && t(5, a = z.boxMinSize), "handleSize" in z && t(6, f = z.handleSize), "boxThickness" in z && t(7, c = z.boxThickness), "height" in z && t(8, u = z.height), "width" in z && t(9, _ = z.width), "boxSelectedThickness" in z && t(10, d = z.boxSelectedThickness), "value" in z && t(0, m = z.value), "disableEditBoxes" in z && t(11, h = z.disableEditBoxes), "singleBox" in z && t(12, g = z.singleBox), "showRemoveButton" in z && t(13, p = z.showRemoveButton), "handlesCursor" in z && t(14, w = z.handlesCursor), "useDefaultLabel" in z && t(15, b = z.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, k = n), t(19, v = n);
      const z = n;
      g1(z).then((D) => {
        v === z && t(16, k = D);
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
    p,
    w,
    b,
    k,
    y,
    n,
    v,
    S,
    C
  ];
}
class Ug extends qg {
  constructor(e) {
    super(), Wg(this, e, Fg, jg, Yg, {
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
class Ea {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Vg,
  add_flush_callback: al,
  append: Rn,
  attr: ci,
  bind: rl,
  binding_callbacks: bi,
  bubble: ii,
  check_outros: sn,
  create_component: Rt,
  create_slot: Ng,
  destroy_component: At,
  detach: hn,
  element: mi,
  empty: Og,
  get_all_dirty_from_scope: Pg,
  get_slot_changes: Zg,
  group_outros: on,
  init: Gg,
  insert: mn,
  mount_component: Wt,
  noop: Kg,
  safe_not_equal: Jg,
  space: ln,
  toggle_class: Ra,
  transition_in: K,
  transition_out: oe,
  update_slot_base: Qg
} = window.__gradio__svelte__internal, { createEventDispatcher: xg, tick: $g } = window.__gradio__svelte__internal;
function Aa(i) {
  let e, t;
  return e = new L1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [e2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Rt(e.$$.fragment);
    },
    m(n, l) {
      Wt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*value*/
      2 && (s.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (s.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      4194304 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function e2(i) {
  let e, t;
  return e = new fl({
    props: {
      Icon: Uu,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Rt(e.$$.fragment);
    },
    m(n, l) {
      Wt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      n[8]("common.download")), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function Wa(i) {
  let e, t;
  return e = new ud({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[38]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[39]
  ), e.$on(
    "error",
    /*error_handler*/
    i[40]
  ), {
    c() {
      Rt(e.$$.fragment);
    },
    m(n, l) {
      Wt(e, n, l), t = !0;
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
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function Xa(i) {
  let e, t, n;
  return t = new fl({
    props: { Icon: Qa, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = mi("div"), Rt(t.$$.fragment);
    },
    m(l, s) {
      mn(l, e, s), Wt(t, e, null), n = !0;
    },
    p: Kg,
    i(l) {
      n || (K(t.$$.fragment, l), n = !0);
    },
    o(l) {
      oe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && hn(e), At(t);
    }
  };
}
function Ya(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = Ng(
    t,
    i,
    /*$$scope*/
    i[53],
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
      4194304) && Qg(
        n,
        t,
        l,
        /*$$scope*/
        l[53],
        e ? Zg(
          t,
          /*$$scope*/
          l[53],
          s,
          null
        ) : Pg(
          /*$$scope*/
          l[53]
        ),
        null
      );
    },
    i(l) {
      e || (K(n, l), e = !0);
    },
    o(l) {
      oe(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function t2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ya(i)
  );
  return {
    c() {
      n && n.c(), e = Og();
    },
    m(l, s) {
      n && n.m(l, s), mn(l, e, s), t = !0;
    },
    p(l, s) {
      /*value*/
      l[1] === null ? n ? (n.p(l, s), s[0] & /*value*/
      2 && K(n, 1)) : (n = Ya(l), n.c(), K(n, 1), n.m(e.parentNode, e)) : n && (on(), oe(n, 1, 1, () => {
        n = null;
      }), sn());
    },
    i(l) {
      t || (K(n), t = !0);
    },
    o(l) {
      oe(n), t = !1;
    },
    d(l) {
      l && hn(e), n && n.d(l);
    }
  };
}
function Ia(i) {
  let e, t;
  return e = new $h({
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
        i[31]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[45]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[46]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[47]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[48]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[49]
  ), {
    c() {
      Rt(e.$$.fragment);
    },
    m(n, l) {
      Wt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      64 && (s.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      1 && (s.upload = /*upload*/
      n[31]), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function Ha(i) {
  let e, t, n, l;
  function s(r) {
    i[50](r);
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
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (o.value = /*value*/
    i[1]), t = new Ug({ props: o }), bi.push(() => rl(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), {
      c() {
        e = mi("div"), Rt(t.$$.fragment), ci(e, "class", "image-frame svelte-1gjdske"), Ra(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        mn(r, e, a), Wt(t, e, null), l = !0;
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
        r[28]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], al(() => n = !1)), t.$set(f), (!l || a[0] & /*selectable*/
        32) && Ra(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (K(t.$$.fragment, r), l = !0);
      },
      o(r) {
        oe(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && hn(e), At(t);
      }
    }
  );
}
function Ta(i) {
  let e, t, n;
  function l(o) {
    i[52](o);
  }
  let s = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[36]
    ),
    handle_select: (
      /*handle_select_source*/
      i[35]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (s.active_source = /*active_source*/
    i[0]), e = new Dd({ props: s }), bi.push(() => rl(e, "active_source", l)), {
      c() {
        Rt(e.$$.fragment);
      },
      m(o, r) {
        Wt(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], al(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (K(e.$$.fragment, o), n = !0);
      },
      o(o) {
        oe(e.$$.fragment, o), n = !1;
      },
      d(o) {
        At(e, o);
      }
    }
  );
}
function n2(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new qc({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: xa,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Aa(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Wa(i)
  ), b = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Xa(i)
  );
  function k(D) {
    i[42](D);
  }
  function v(D) {
    i[43](D);
  }
  let y = {
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
    $$slots: { default: [t2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (y.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (y.dragging = /*dragging*/
  i[30]), f = new rh({ props: y }), i[41](f), bi.push(() => rl(f, "uploading", k)), bi.push(() => rl(f, "dragging", v)), f.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), f.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let S = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Ia(i)
  ), C = (
    /*value*/
    i[1] !== null && Ha(i)
  ), z = h && Ta(i);
  return {
    c() {
      Rt(e.$$.fragment), t = ln(), n = mi("div"), p && p.c(), l = ln(), w && w.c(), s = ln(), b && b.c(), o = ln(), r = mi("div"), a = mi("div"), Rt(f.$$.fragment), _ = ln(), S && S.c(), d = ln(), C && C.c(), m = ln(), z && z.c(), ci(n, "class", "icon-buttons svelte-1gjdske"), ci(a, "class", "upload-container svelte-1gjdske"), ci(r, "data-testid", "image"), ci(r, "class", "image-container svelte-1gjdske");
    },
    m(D, q) {
      Wt(e, D, q), mn(D, t, q), mn(D, n, q), p && p.m(n, null), Rn(n, l), w && w.m(n, null), Rn(n, s), b && b.m(n, null), mn(D, o, q), mn(D, r, q), Rn(r, a), Wt(f, a, null), Rn(a, _), S && S.m(a, null), Rn(a, d), C && C.m(a, null), Rn(r, m), z && z.m(r, null), g = !0;
    },
    p(D, q) {
      const W = {};
      q[0] & /*show_label*/
      8 && (W.show_label = /*show_label*/
      D[3]), q[0] & /*label*/
      4 && (W.label = /*label*/
      D[2] || "Image Annotator"), e.$set(W), /*showDownloadButton*/
      D[10] && /*value*/
      D[1] !== null ? p ? (p.p(D, q), q[0] & /*showDownloadButton, value*/
      1026 && K(p, 1)) : (p = Aa(D), p.c(), K(p, 1), p.m(n, l)) : p && (on(), oe(p, 1, 1, () => {
        p = null;
      }), sn()), /*showShareButton*/
      D[9] && /*value*/
      D[1] !== null ? w ? (w.p(D, q), q[0] & /*showShareButton, value*/
      514 && K(w, 1)) : (w = Wa(D), w.c(), K(w, 1), w.m(n, s)) : w && (on(), oe(w, 1, 1, () => {
        w = null;
      }), sn()), /*showClearButton*/
      D[11] && /*value*/
      D[1] !== null && /*interactive*/
      D[7] ? b ? (b.p(D, q), q[0] & /*showClearButton, value, interactive*/
      2178 && K(b, 1)) : (b = Xa(D), b.c(), K(b, 1), b.m(n, null)) : b && (on(), oe(b, 1, 1, () => {
        b = null;
      }), sn());
      const F = {};
      q[0] & /*value, active_source*/
      3 && (F.hidden = /*value*/
      D[1] !== null || /*active_source*/
      D[0] === "webcam"), q[0] & /*active_source*/
      1 && (F.filetype = /*active_source*/
      D[0] === "clipboard" ? "clipboard" : "image/*"), q[0] & /*root*/
      64 && (F.root = /*root*/
      D[6]), q[0] & /*max_file_size*/
      33554432 && (F.max_file_size = /*max_file_size*/
      D[25]), q[0] & /*sources*/
      16 && (F.disable_click = !/*sources*/
      D[4].includes("upload")), q[0] & /*cli_upload*/
      67108864 && (F.upload = /*cli_upload*/
      D[26]), q[0] & /*stream_handler*/
      134217728 && (F.stream_handler = /*stream_handler*/
      D[27]), q[0] & /*value*/
      2 | q[1] & /*$$scope*/
      4194304 && (F.$$scope = { dirty: q, ctx: D }), !c && q[0] & /*uploading*/
      536870912 && (c = !0, F.uploading = /*uploading*/
      D[29], al(() => c = !1)), !u && q[0] & /*dragging*/
      1073741824 && (u = !0, F.dragging = /*dragging*/
      D[30], al(() => u = !1)), f.$set(F), /*value*/
      D[1] === null && /*active_source*/
      D[0] === "webcam" ? S ? (S.p(D, q), q[0] & /*value, active_source*/
      3 && K(S, 1)) : (S = Ia(D), S.c(), K(S, 1), S.m(a, d)) : S && (on(), oe(S, 1, 1, () => {
        S = null;
      }), sn()), /*value*/
      D[1] !== null ? C ? (C.p(D, q), q[0] & /*value*/
      2 && K(C, 1)) : (C = Ha(D), C.c(), K(C, 1), C.m(a, null)) : C && (on(), oe(C, 1, 1, () => {
        C = null;
      }), sn()), q[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (D[4].length > 1 || /*sources*/
      D[4].includes("clipboard")) && /*value*/
      D[1] === null && /*interactive*/
      D[7]), h ? z ? (z.p(D, q), q[0] & /*sources, value, interactive*/
      146 && K(z, 1)) : (z = Ta(D), z.c(), K(z, 1), z.m(r, null)) : z && (on(), oe(z, 1, 1, () => {
        z = null;
      }), sn());
    },
    i(D) {
      g || (K(e.$$.fragment, D), K(p), K(w), K(b), K(f.$$.fragment, D), K(S), K(C), K(z), g = !0);
    },
    o(D) {
      oe(e.$$.fragment, D), oe(p), oe(w), oe(b), oe(f.$$.fragment, D), oe(S), oe(C), oe(z), g = !1;
    },
    d(D) {
      D && (hn(t), hn(n), hn(o), hn(r)), At(e, D), p && p.d(), w && w.d(), b && b.d(), i[41](null), At(f), S && S.d(), C && C.d(), z && z.d();
    }
  };
}
function i2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(L, It, gt, Cn) {
    function Ht(bt) {
      return bt instanceof gt ? bt : new gt(function(ot) {
        ot(bt);
      });
    }
    return new (gt || (gt = Promise))(function(bt, ot) {
      function kl(wt) {
        try {
          Sn(Cn.next(wt));
        } catch (Qn) {
          ot(Qn);
        }
      }
      function yl(wt) {
        try {
          Sn(Cn.throw(wt));
        } catch (Qn) {
          ot(Qn);
        }
      }
      function Sn(wt) {
        wt.done ? bt(wt.value) : Ht(wt.value).then(kl, yl);
      }
      Sn((Cn = Cn.apply(L, It || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: p } = e, { labelList: w } = e, { labelColors: b } = e, { boxMinSize: k } = e, { handleSize: v } = e, { height: y } = e, { width: S } = e, { boxThickness: C } = e, { disableEditBoxes: z } = e, { singleBox: D } = e, { showRemoveButton: q } = e, { handlesCursor: W } = e, { boxSelectedThickness: F } = e, { max_file_size: J = null } = e, { cli_upload: le } = e, { stream_handler: P } = e, { useDefaultLabel: $ } = e, R, V = !1, { active_source: A = null } = e;
  function Q({ detail: L }) {
    t(1, o = new Ea()), t(1, o.image = L, o), Z("upload");
  }
  function ae(L) {
    return s(this, void 0, void 0, function* () {
      const It = yield R.load_files([new File([L], "webcam.png")]), gt = (It == null ? void 0 : It[0]) || null;
      gt ? (t(1, o = new Ea()), t(1, o.image = gt, o)) : t(1, o = null), yield $g(), Z("change");
    });
  }
  const Z = xg();
  let G = !1;
  function X(L) {
    return s(this, void 0, void 0, function* () {
      switch (L) {
        case "clipboard":
          R.paste_clipboard();
          break;
      }
    });
  }
  function ne() {
    t(1, o = null), Z("clear"), Z("change");
  }
  const E = async (L) => L === null ? "" : `<img src="${await x_(L.image)}" />`;
  function H(L) {
    ii.call(this, i, L);
  }
  function ee(L) {
    ii.call(this, i, L);
  }
  function re(L) {
    bi[L ? "unshift" : "push"](() => {
      R = L, t(31, R);
    });
  }
  function M(L) {
    V = L, t(29, V);
  }
  function Ge(L) {
    G = L, t(30, G);
  }
  function st(L) {
    ii.call(this, i, L);
  }
  const Ke = (L) => ae(L.detail), We = (L) => ae(L.detail);
  function Je(L) {
    ii.call(this, i, L);
  }
  function Xe(L) {
    ii.call(this, i, L);
  }
  const mt = (L) => ae(L.detail);
  function ki(L) {
    o = L, t(1, o);
  }
  const pl = () => Z("change");
  function vl(L) {
    A = L, t(0, A), t(4, f);
  }
  return i.$$set = (L) => {
    "value" in L && t(1, o = L.value), "label" in L && t(2, r = L.label), "show_label" in L && t(3, a = L.show_label), "sources" in L && t(4, f = L.sources), "selectable" in L && t(5, c = L.selectable), "root" in L && t(6, u = L.root), "interactive" in L && t(7, _ = L.interactive), "i18n" in L && t(8, d = L.i18n), "showShareButton" in L && t(9, m = L.showShareButton), "showDownloadButton" in L && t(10, h = L.showDownloadButton), "showClearButton" in L && t(11, g = L.showClearButton), "boxesAlpha" in L && t(12, p = L.boxesAlpha), "labelList" in L && t(13, w = L.labelList), "labelColors" in L && t(14, b = L.labelColors), "boxMinSize" in L && t(15, k = L.boxMinSize), "handleSize" in L && t(16, v = L.handleSize), "height" in L && t(17, y = L.height), "width" in L && t(18, S = L.width), "boxThickness" in L && t(19, C = L.boxThickness), "disableEditBoxes" in L && t(20, z = L.disableEditBoxes), "singleBox" in L && t(21, D = L.singleBox), "showRemoveButton" in L && t(22, q = L.showRemoveButton), "handlesCursor" in L && t(23, W = L.handlesCursor), "boxSelectedThickness" in L && t(24, F = L.boxSelectedThickness), "max_file_size" in L && t(25, J = L.max_file_size), "cli_upload" in L && t(26, le = L.cli_upload), "stream_handler" in L && t(27, P = L.stream_handler), "useDefaultLabel" in L && t(28, $ = L.useDefaultLabel), "active_source" in L && t(0, A = L.active_source), "$$scope" in L && t(53, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && V && ne(), i.$$.dirty[0] & /*dragging*/
    1073741824 && Z("drag", G), i.$$.dirty[0] & /*active_source, sources*/
    17 && !A && f && t(0, A = f[0]);
  }, [
    A,
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
    p,
    w,
    b,
    k,
    v,
    y,
    S,
    C,
    z,
    D,
    q,
    W,
    F,
    J,
    le,
    P,
    $,
    V,
    G,
    R,
    Q,
    ae,
    Z,
    X,
    ne,
    n,
    E,
    H,
    ee,
    re,
    M,
    Ge,
    st,
    Ke,
    We,
    Je,
    Xe,
    mt,
    ki,
    pl,
    vl,
    l
  ];
}
class l2 extends Vg {
  constructor(e) {
    super(), Gg(
      this,
      e,
      i2,
      n2,
      Jg,
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
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: s2,
  attr: Ki,
  detach: Qr,
  element: xr,
  init: o2,
  insert: $r,
  noop: ja,
  safe_not_equal: a2,
  src_url_equal: Fa,
  toggle_class: Zt
} = window.__gradio__svelte__internal;
function Ua(i) {
  let e, t;
  return {
    c() {
      e = xr("img"), Fa(e.src, t = /*value*/
      i[0].url) || Ki(e, "src", t), Ki(e, "alt", "");
    },
    m(n, l) {
      $r(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Fa(e.src, t = /*value*/
      n[0].url) && Ki(e, "src", t);
    },
    d(n) {
      n && Qr(e);
    }
  };
}
function r2(i) {
  let e, t = (
    /*value*/
    i[0] && Ua(i)
  );
  return {
    c() {
      e = xr("div"), t && t.c(), Ki(e, "class", "container svelte-1sgcyba"), Zt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Zt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Zt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Zt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      $r(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Ua(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Zt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Zt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Zt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Zt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: ja,
    o: ja,
    d(n) {
      n && Qr(e), t && t.d();
    }
  };
}
function f2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: s = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, l = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, l, s];
}
class A2 extends s2 {
  constructor(e) {
    super(), o2(this, e, f2, r2, a2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: c2,
  add_flush_callback: Va,
  assign: u2,
  bind: Na,
  binding_callbacks: Oa,
  check_outros: _2,
  create_component: vn,
  destroy_component: kn,
  detach: ef,
  empty: d2,
  flush: O,
  get_spread_object: h2,
  get_spread_update: m2,
  group_outros: g2,
  init: b2,
  insert: tf,
  mount_component: yn,
  safe_not_equal: w2,
  space: p2,
  transition_in: Xt,
  transition_out: Yt
} = window.__gradio__svelte__internal;
function v2(i) {
  let e, t;
  return e = new su({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [C2] },
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
      8192 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function k2(i) {
  let e, t;
  return e = new sr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
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
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function y2(i) {
  let e, t;
  return e = new sr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
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
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function C2(i) {
  let e, t;
  return e = new xa({}), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function S2(i) {
  let e, t, n, l;
  const s = [y2, k2, v2], o = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[33] === "upload" ? 0 : (
        /*active_source*/
        a[33] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = d2();
    },
    m(a, f) {
      o[e].m(a, f), tf(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (g2(), Yt(o[c], 1, 1, () => {
        o[c] = null;
      }), _2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Xt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Xt(t), l = !0);
    },
    o(a) {
      Yt(t), l = !1;
    },
    d(a) {
      a && ef(n), o[e].d(a);
    }
  };
}
function z2(i) {
  let e, t, n, l, s, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[31].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[31].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = u2(a, r[_]);
  e = new _1({ props: a });
  function f(_) {
    i[34](_);
  }
  function c(_) {
    i[35](_);
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
      i[31].i18n
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
      i[31].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[31].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[31].client.stream
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
    $$slots: { default: [S2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new l2({ props: u }), Oa.push(() => Na(n, "active_source", f)), Oa.push(() => Na(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      i[36]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[37]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[38]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[39]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[40]
    ), n.$on(
      "select",
      /*select_handler*/
      i[41]
    ), n.$on(
      "share",
      /*share_handler*/
      i[42]
    ), n.$on(
      "error",
      /*error_handler*/
      i[43]
    ), {
      c() {
        vn(e.$$.fragment), t = p2(), vn(n.$$.fragment);
      },
      m(_, d) {
        yn(e, _, d), tf(_, t, d), yn(n, _, d), o = !0;
      },
      p(_, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? m2(r, [
          d[1] & /*gradio*/
          1 && {
            autoscroll: (
              /*gradio*/
              _[31].autoscroll
            )
          },
          d[1] & /*gradio*/
          1 && { i18n: (
            /*gradio*/
            _[31].i18n
          ) },
          d[0] & /*loading_status*/
          2 && h2(
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
        1 && (h.i18n = /*gradio*/
        _[31].i18n), d[0] & /*boxes_alpha*/
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
        1 && (h.max_file_size = /*gradio*/
        _[31].max_file_size), d[1] & /*gradio*/
        1 && (h.cli_upload = /*gradio*/
        _[31].client.upload), d[1] & /*gradio*/
        1 && (h.stream_handler = /*gradio*/
        _[31].client.stream), d[0] & /*handle_size*/
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
        _[30]), d[1] & /*$$scope, gradio, active_source*/
        8197 && (h.$$scope = { dirty: d, ctx: _ }), !l && d[1] & /*active_source*/
        4 && (l = !0, h.active_source = /*active_source*/
        _[33], Va(() => l = !1)), !s && d[0] & /*value*/
        1 && (s = !0, h.value = /*value*/
        _[0], Va(() => s = !1)), n.$set(h);
      },
      i(_) {
        o || (Xt(e.$$.fragment, _), Xt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        Yt(e.$$.fragment, _), Yt(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && ef(t), kn(e, _), kn(n, _);
      }
    }
  );
}
function B2(i) {
  let e, t;
  return e = new Mf({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[32] ? "focus" : "base"
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
      l[0] & /*visible*/
      16 && (s.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      2 && (s.border_mode = /*dragging*/
      n[32] ? "focus" : "base"), l[0] & /*elem_id*/
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
      2147469283 | l[1] & /*$$scope, gradio, active_source, dragging*/
      8199 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function D2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: b } = e, { show_clear_button: k } = e, { interactive: v } = e, { boxes_alpha: y } = e, { label_list: S } = e, { label_colors: C } = e, { box_min_size: z } = e, { handle_size: D } = e, { box_thickness: q } = e, { box_selected_thickness: W } = e, { disable_edit_boxes: F } = e, { single_box: J } = e, { show_remove_button: le } = e, { handles_cursor: P } = e, { use_default_label: $ } = e, { gradio: R } = e, V, A = null;
  function Q(M) {
    A = M, t(33, A);
  }
  function ae(M) {
    o = M, t(0, o);
  }
  const Z = () => R.dispatch("change"), G = () => R.dispatch("edit"), X = () => {
    R.dispatch("clear");
  }, ne = ({ detail: M }) => t(32, V = M), E = () => R.dispatch("upload"), H = ({ detail: M }) => R.dispatch("select", M), ee = ({ detail: M }) => R.dispatch("share", M), re = ({ detail: M }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), R.dispatch("error", M);
  };
  return i.$$set = (M) => {
    "elem_id" in M && t(2, n = M.elem_id), "elem_classes" in M && t(3, l = M.elem_classes), "visible" in M && t(4, s = M.visible), "value" in M && t(0, o = M.value), "label" in M && t(5, r = M.label), "show_label" in M && t(6, a = M.show_label), "root" in M && t(7, f = M.root), "height" in M && t(8, c = M.height), "width" in M && t(9, u = M.width), "_selectable" in M && t(10, _ = M._selectable), "container" in M && t(11, d = M.container), "scale" in M && t(12, m = M.scale), "min_width" in M && t(13, h = M.min_width), "loading_status" in M && t(1, g = M.loading_status), "sources" in M && t(14, p = M.sources), "show_download_button" in M && t(15, w = M.show_download_button), "show_share_button" in M && t(16, b = M.show_share_button), "show_clear_button" in M && t(17, k = M.show_clear_button), "interactive" in M && t(18, v = M.interactive), "boxes_alpha" in M && t(19, y = M.boxes_alpha), "label_list" in M && t(20, S = M.label_list), "label_colors" in M && t(21, C = M.label_colors), "box_min_size" in M && t(22, z = M.box_min_size), "handle_size" in M && t(23, D = M.handle_size), "box_thickness" in M && t(24, q = M.box_thickness), "box_selected_thickness" in M && t(25, W = M.box_selected_thickness), "disable_edit_boxes" in M && t(26, F = M.disable_edit_boxes), "single_box" in M && t(27, J = M.single_box), "show_remove_button" in M && t(28, le = M.show_remove_button), "handles_cursor" in M && t(29, P = M.handles_cursor), "use_default_label" in M && t(30, $ = M.use_default_label), "gradio" in M && t(31, R = M.gradio);
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
    p,
    w,
    b,
    k,
    v,
    y,
    S,
    C,
    z,
    D,
    q,
    W,
    F,
    J,
    le,
    P,
    $,
    R,
    V,
    A,
    Q,
    ae,
    Z,
    G,
    X,
    ne,
    E,
    H,
    ee,
    re
  ];
}
class W2 extends c2 {
  constructor(e) {
    super(), b2(
      this,
      e,
      D2,
      B2,
      w2,
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
        gradio: 31
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), O();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), O();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), O();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), O();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), O();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), O();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), O();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), O();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), O();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), O();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), O();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), O();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), O();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), O();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), O();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), O();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), O();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), O();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), O();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), O();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), O();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), O();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), O();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), O();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), O();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), O();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), O();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), O();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), O();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), O();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), O();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), O();
  }
}
export {
  A2 as BaseExample,
  W2 as default
};
