const {
  SvelteComponent: y_,
  assign: S_,
  create_slot: q_,
  detach: z_,
  element: D_,
  get_all_dirty_from_scope: B_,
  get_slot_changes: E_,
  get_spread_update: M_,
  init: L_,
  insert: R_,
  safe_not_equal: A_,
  set_dynamic_element_data: Qo,
  set_style: Ie,
  toggle_class: st,
  transition_in: Ja,
  transition_out: Qa,
  update_slot_base: W_
} = window.__gradio__svelte__internal;
function X_(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = q_(
    l,
    i,
    /*$$scope*/
    i[17],
    null
  );
  let s = [
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
  for (let a = 0; a < s.length; a += 1)
    r = S_(r, s[a]);
  return {
    c() {
      e = D_(
        /*tag*/
        i[14]
      ), o && o.c(), Qo(
        /*tag*/
        i[14]
      )(e, r), st(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), st(
        e,
        "padded",
        /*padding*/
        i[6]
      ), st(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), st(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), st(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ie(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ie(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ie(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ie(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ie(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ie(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ie(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      R_(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && W_(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? E_(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : B_(
          /*$$scope*/
          a[17]
        ),
        null
      ), Qo(
        /*tag*/
        a[14]
      )(e, r = M_(s, [
        (!n || _ & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || _ & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || _ & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), st(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), st(
        e,
        "padded",
        /*padding*/
        a[6]
      ), st(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), st(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), st(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Ie(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Ie(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Ie(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Ie(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Ie(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Ie(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ja(o, a), n = !0);
    },
    o(a) {
      Qa(o, a), n = !1;
    },
    d(a) {
      a && z_(e), o && o.d(a);
    }
  };
}
function I_(i) {
  let e, t = (
    /*tag*/
    i[14] && X_(i)
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
      e || (Ja(t, n), e = !0);
    },
    o(n) {
      Qa(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Y_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: f = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: w = null } = e, { min_width: p = 0 } = e, C = f === "fieldset" ? "fieldset" : "div";
  const z = (v) => {
    if (v !== void 0) {
      if (typeof v == "number")
        return v + "px";
      if (typeof v == "string")
        return v;
    }
  };
  return i.$$set = (v) => {
    "height" in v && t(0, o = v.height), "width" in v && t(1, s = v.width), "elem_id" in v && t(2, r = v.elem_id), "elem_classes" in v && t(3, a = v.elem_classes), "variant" in v && t(4, _ = v.variant), "border_mode" in v && t(5, c = v.border_mode), "padding" in v && t(6, u = v.padding), "type" in v && t(16, f = v.type), "test_id" in v && t(7, d = v.test_id), "explicit_call" in v && t(8, m = v.explicit_call), "container" in v && t(9, h = v.container), "visible" in v && t(10, g = v.visible), "allow_overflow" in v && t(11, b = v.allow_overflow), "scale" in v && t(12, w = v.scale), "min_width" in v && t(13, p = v.min_width), "$$scope" in v && t(17, l = v.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    m,
    h,
    g,
    b,
    w,
    p,
    C,
    z,
    f,
    l,
    n
  ];
}
class H_ extends y_ {
  constructor(e) {
    super(), L_(this, e, Y_, I_, A_, {
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
  SvelteComponent: T_,
  attr: j_,
  create_slot: $_,
  detach: F_,
  element: U_,
  get_all_dirty_from_scope: V_,
  get_slot_changes: O_,
  init: N_,
  insert: P_,
  safe_not_equal: K_,
  transition_in: Z_,
  transition_out: G_,
  update_slot_base: J_
} = window.__gradio__svelte__internal;
function Q_(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = $_(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = U_("div"), l && l.c(), j_(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      P_(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && J_(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? O_(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : V_(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Z_(l, o), t = !0);
    },
    o(o) {
      G_(l, o), t = !1;
    },
    d(o) {
      o && F_(e), l && l.d(o);
    }
  };
}
function x_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class ec extends T_ {
  constructor(e) {
    super(), N_(this, e, x_, Q_, K_, {});
  }
}
const {
  SvelteComponent: tc,
  attr: xo,
  check_outros: nc,
  create_component: ic,
  create_slot: lc,
  destroy_component: oc,
  detach: Ni,
  element: sc,
  empty: ac,
  get_all_dirty_from_scope: rc,
  get_slot_changes: _c,
  group_outros: cc,
  init: uc,
  insert: Pi,
  mount_component: fc,
  safe_not_equal: dc,
  set_data: hc,
  space: mc,
  text: gc,
  toggle_class: Bn,
  transition_in: _i,
  transition_out: Ki,
  update_slot_base: bc
} = window.__gradio__svelte__internal;
function es(i) {
  let e, t;
  return e = new ec({
    props: {
      $$slots: { default: [pc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      ic(e.$$.fragment);
    },
    m(n, l) {
      fc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (_i(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ki(e.$$.fragment, n), t = !1;
    },
    d(n) {
      oc(e, n);
    }
  };
}
function pc(i) {
  let e;
  return {
    c() {
      e = gc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Pi(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && hc(
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
function wc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = lc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && es(i)
  );
  return {
    c() {
      e = sc("span"), s && s.c(), t = mc(), r && r.c(), n = ac(), xo(e, "data-testid", "block-info"), xo(e, "class", "svelte-22c38v"), Bn(e, "sr-only", !/*show_label*/
      i[0]), Bn(e, "hide", !/*show_label*/
      i[0]), Bn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      Pi(a, e, _), s && s.m(e, null), Pi(a, t, _), r && r.m(a, _), Pi(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && bc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? _c(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : rc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && Bn(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && Bn(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && Bn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && _i(r, 1)) : (r = es(a), r.c(), _i(r, 1), r.m(n.parentNode, n)) : r && (cc(), Ki(r, 1, 1, () => {
        r = null;
      }), nc());
    },
    i(a) {
      l || (_i(s, a), _i(r), l = !0);
    },
    o(a) {
      Ki(s, a), Ki(r), l = !1;
    },
    d(a) {
      a && (Ni(e), Ni(t), Ni(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function vc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class xa extends tc {
  constructor(e) {
    super(), uc(this, e, vc, wc, dc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: kc,
  append: zl,
  attr: zi,
  create_component: Cc,
  destroy_component: yc,
  detach: Sc,
  element: ts,
  init: qc,
  insert: zc,
  mount_component: Dc,
  safe_not_equal: Bc,
  set_data: Ec,
  space: Mc,
  text: Lc,
  toggle_class: Yt,
  transition_in: Rc,
  transition_out: Ac
} = window.__gradio__svelte__internal;
function Wc(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ts("label"), t = ts("span"), Cc(n.$$.fragment), l = Mc(), o = Lc(
        /*label*/
        i[0]
      ), zi(t, "class", "svelte-9gxdi0"), zi(e, "for", ""), zi(e, "data-testid", "block-label"), zi(e, "class", "svelte-9gxdi0"), Yt(e, "hide", !/*show_label*/
      i[2]), Yt(e, "sr-only", !/*show_label*/
      i[2]), Yt(
        e,
        "float",
        /*float*/
        i[4]
      ), Yt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      zc(r, e, a), zl(e, t), Dc(n, t, null), zl(e, l), zl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Ec(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Yt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Yt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Yt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Yt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Rc(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Ac(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Sc(e), yc(n);
    }
  };
}
function Xc(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class Ic extends kc {
  constructor(e) {
    super(), qc(this, e, Xc, Wc, Bc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Yc,
  append: go,
  attr: St,
  bubble: Hc,
  create_component: Tc,
  destroy_component: jc,
  detach: er,
  element: bo,
  init: $c,
  insert: tr,
  listen: Fc,
  mount_component: Uc,
  safe_not_equal: Vc,
  set_data: Oc,
  set_style: En,
  space: Nc,
  text: Pc,
  toggle_class: ze,
  transition_in: Kc,
  transition_out: Zc
} = window.__gradio__svelte__internal;
function ns(i) {
  let e, t;
  return {
    c() {
      e = bo("span"), t = Pc(
        /*label*/
        i[1]
      ), St(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      tr(n, e, l), go(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Oc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && er(e);
    }
  };
}
function Gc(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && ns(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = bo("button"), a && a.c(), t = Nc(), n = bo("div"), Tc(l.$$.fragment), St(n, "class", "svelte-1lrphxw"), ze(
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
      ), St(e, "class", "svelte-1lrphxw"), ze(
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
      ), En(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), En(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), En(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      tr(_, e, c), a && a.m(e, null), go(e, t), go(e, n), Uc(l, n, null), o = !0, s || (r = Fc(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = ns(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && ze(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && ze(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && ze(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && St(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && St(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && St(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && ze(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && ze(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && ze(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && ze(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && En(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && En(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && En(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (Kc(l.$$.fragment, _), o = !0);
    },
    o(_) {
      Zc(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && er(e), a && a.d(), jc(l), s = !1, r();
    }
  };
}
function Jc(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: f = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(w) {
    Hc.call(this, i, w);
  }
  return i.$$set = (w) => {
    "Icon" in w && t(0, l = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, _ = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, f = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, m = w.transparent), "background" in w && t(10, h = w.background), "offset" in w && t(11, g = w.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    l,
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    m,
    h,
    g,
    n,
    d,
    b
  ];
}
class dl extends Yc {
  constructor(e) {
    super(), $c(this, e, Jc, Gc, Vc, {
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
  SvelteComponent: Qc,
  append: xc,
  attr: Dl,
  binding_callbacks: eu,
  create_slot: tu,
  detach: nu,
  element: is,
  get_all_dirty_from_scope: iu,
  get_slot_changes: lu,
  init: ou,
  insert: su,
  safe_not_equal: au,
  toggle_class: Ht,
  transition_in: ru,
  transition_out: _u,
  update_slot_base: cu
} = window.__gradio__svelte__internal;
function uu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = tu(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = is("div"), t = is("div"), o && o.c(), Dl(t, "class", "icon svelte-3w3rth"), Dl(e, "class", "empty svelte-3w3rth"), Dl(e, "aria-label", "Empty value"), Ht(
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
    m(s, r) {
      su(s, e, r), xc(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && cu(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? lu(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : iu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ht(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Ht(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ht(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Ht(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (ru(o, s), n = !0);
    },
    o(s) {
      _u(o, s), n = !1;
    },
    d(s) {
      s && nu(e), o && o.d(s), i[6](null);
    }
  };
}
function fu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(u) {
    var f;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((f = u.parentElement) === null || f === void 0 ? void 0 : f.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    eu[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, s = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, o = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = _(a));
  }, [s, r, a, n, o, l, c];
}
class du extends Qc {
  constructor(e) {
    super(), ou(this, e, fu, uu, au, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Xb,
  append: Ib,
  attr: Yb,
  detach: Hb,
  init: Tb,
  insert: jb,
  noop: $b,
  safe_not_equal: Fb,
  svg_element: Ub
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vb,
  append: Ob,
  attr: Nb,
  detach: Pb,
  init: Kb,
  insert: Zb,
  noop: Gb,
  safe_not_equal: Jb,
  svg_element: Qb
} = window.__gradio__svelte__internal, {
  SvelteComponent: xb,
  append: e2,
  attr: t2,
  detach: n2,
  init: i2,
  insert: l2,
  noop: o2,
  safe_not_equal: s2,
  svg_element: a2
} = window.__gradio__svelte__internal, {
  SvelteComponent: hu,
  append: ls,
  attr: De,
  detach: mu,
  init: gu,
  insert: bu,
  noop: Bl,
  safe_not_equal: pu,
  svg_element: El
} = window.__gradio__svelte__internal;
function wu(i) {
  let e, t, n;
  return {
    c() {
      e = El("svg"), t = El("path"), n = El("circle"), De(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), De(n, "cx", "12"), De(n, "cy", "13"), De(n, "r", "4"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-camera");
    },
    m(l, o) {
      bu(l, e, o), ls(e, t), ls(e, n);
    },
    p: Bl,
    i: Bl,
    o: Bl,
    d(l) {
      l && mu(e);
    }
  };
}
class vu extends hu {
  constructor(e) {
    super(), gu(this, e, null, wu, pu, {});
  }
}
const {
  SvelteComponent: r2,
  append: _2,
  attr: c2,
  detach: u2,
  init: f2,
  insert: d2,
  noop: h2,
  safe_not_equal: m2,
  svg_element: g2
} = window.__gradio__svelte__internal, {
  SvelteComponent: b2,
  append: p2,
  attr: w2,
  detach: v2,
  init: k2,
  insert: C2,
  noop: y2,
  safe_not_equal: S2,
  svg_element: q2
} = window.__gradio__svelte__internal, {
  SvelteComponent: z2,
  append: D2,
  attr: B2,
  detach: E2,
  init: M2,
  insert: L2,
  noop: R2,
  safe_not_equal: A2,
  svg_element: W2
} = window.__gradio__svelte__internal, {
  SvelteComponent: ku,
  append: Cu,
  attr: Je,
  detach: yu,
  init: Su,
  insert: qu,
  noop: Ml,
  safe_not_equal: zu,
  svg_element: os
} = window.__gradio__svelte__internal;
function Du(i) {
  let e, t;
  return {
    c() {
      e = os("svg"), t = os("circle"), Je(t, "cx", "12"), Je(t, "cy", "12"), Je(t, "r", "10"), Je(e, "xmlns", "http://www.w3.org/2000/svg"), Je(e, "width", "100%"), Je(e, "height", "100%"), Je(e, "viewBox", "0 0 24 24"), Je(e, "stroke-width", "1.5"), Je(e, "stroke-linecap", "round"), Je(e, "stroke-linejoin", "round"), Je(e, "class", "feather feather-circle");
    },
    m(n, l) {
      qu(n, e, l), Cu(e, t);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(n) {
      n && yu(e);
    }
  };
}
class Bu extends ku {
  constructor(e) {
    super(), Su(this, e, null, Du, zu, {});
  }
}
const {
  SvelteComponent: Eu,
  append: Ll,
  attr: Qe,
  detach: Mu,
  init: Lu,
  insert: Ru,
  noop: Rl,
  safe_not_equal: Au,
  set_style: at,
  svg_element: Di
} = window.__gradio__svelte__internal;
function Wu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Di("svg"), t = Di("g"), n = Di("path"), l = Di("path"), Qe(n, "d", "M18,6L6.087,17.913"), at(n, "fill", "none"), at(n, "fill-rule", "nonzero"), at(n, "stroke-width", "2px"), Qe(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Qe(l, "d", "M4.364,4.364L19.636,19.636"), at(l, "fill", "none"), at(l, "fill-rule", "nonzero"), at(l, "stroke-width", "2px"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "version", "1.1"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Qe(e, "xml:space", "preserve"), Qe(e, "stroke", "currentColor"), at(e, "fill-rule", "evenodd"), at(e, "clip-rule", "evenodd"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Ru(o, e, s), Ll(e, t), Ll(t, n), Ll(e, l);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(o) {
      o && Mu(e);
    }
  };
}
class nr extends Eu {
  constructor(e) {
    super(), Lu(this, e, null, Wu, Au, {});
  }
}
const {
  SvelteComponent: X2,
  append: I2,
  attr: Y2,
  detach: H2,
  init: T2,
  insert: j2,
  noop: $2,
  safe_not_equal: F2,
  svg_element: U2
} = window.__gradio__svelte__internal, {
  SvelteComponent: V2,
  append: O2,
  attr: N2,
  detach: P2,
  init: K2,
  insert: Z2,
  noop: G2,
  safe_not_equal: J2,
  svg_element: Q2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xu,
  append: Iu,
  attr: ni,
  detach: Yu,
  init: Hu,
  insert: Tu,
  noop: Al,
  safe_not_equal: ju,
  svg_element: ss
} = window.__gradio__svelte__internal;
function $u(i) {
  let e, t;
  return {
    c() {
      e = ss("svg"), t = ss("path"), ni(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ni(t, "fill", "currentColor"), ni(e, "id", "icon"), ni(e, "xmlns", "http://www.w3.org/2000/svg"), ni(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Tu(n, e, l), Iu(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(n) {
      n && Yu(e);
    }
  };
}
class Fu extends Xu {
  constructor(e) {
    super(), Hu(this, e, null, $u, ju, {});
  }
}
const {
  SvelteComponent: x2,
  append: ep,
  attr: tp,
  detach: np,
  init: ip,
  insert: lp,
  noop: op,
  safe_not_equal: sp,
  svg_element: ap
} = window.__gradio__svelte__internal, {
  SvelteComponent: rp,
  append: _p,
  attr: cp,
  detach: up,
  init: fp,
  insert: dp,
  noop: hp,
  safe_not_equal: mp,
  svg_element: gp
} = window.__gradio__svelte__internal, {
  SvelteComponent: bp,
  append: pp,
  attr: wp,
  detach: vp,
  init: kp,
  insert: Cp,
  noop: yp,
  safe_not_equal: Sp,
  svg_element: qp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Uu,
  append: Vu,
  attr: Mn,
  detach: Ou,
  init: Nu,
  insert: Pu,
  noop: Wl,
  safe_not_equal: Ku,
  svg_element: as
} = window.__gradio__svelte__internal;
function Zu(i) {
  let e, t;
  return {
    c() {
      e = as("svg"), t = as("path"), Mn(t, "fill", "currentColor"), Mn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Mn(e, "xmlns", "http://www.w3.org/2000/svg"), Mn(e, "width", "100%"), Mn(e, "height", "100%"), Mn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Pu(n, e, l), Vu(e, t);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(n) {
      n && Ou(e);
    }
  };
}
class Gu extends Uu {
  constructor(e) {
    super(), Nu(this, e, null, Zu, Ku, {});
  }
}
const {
  SvelteComponent: Ju,
  append: Qu,
  attr: Ln,
  detach: xu,
  init: ef,
  insert: tf,
  noop: Xl,
  safe_not_equal: nf,
  svg_element: rs
} = window.__gradio__svelte__internal;
function lf(i) {
  let e, t;
  return {
    c() {
      e = rs("svg"), t = rs("path"), Ln(t, "d", "M5 8l4 4 4-4z"), Ln(e, "class", "dropdown-arrow svelte-145leq6"), Ln(e, "xmlns", "http://www.w3.org/2000/svg"), Ln(e, "width", "100%"), Ln(e, "height", "100%"), Ln(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      tf(n, e, l), Qu(e, t);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(n) {
      n && xu(e);
    }
  };
}
class Yo extends Ju {
  constructor(e) {
    super(), ef(this, e, null, lf, nf, {});
  }
}
const {
  SvelteComponent: zp,
  append: Dp,
  attr: Bp,
  detach: Ep,
  init: Mp,
  insert: Lp,
  noop: Rp,
  safe_not_equal: Ap,
  svg_element: Wp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xp,
  append: Ip,
  attr: Yp,
  detach: Hp,
  init: Tp,
  insert: jp,
  noop: $p,
  safe_not_equal: Fp,
  svg_element: Up
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vp,
  append: Op,
  attr: Np,
  detach: Pp,
  init: Kp,
  insert: Zp,
  noop: Gp,
  safe_not_equal: Jp,
  svg_element: Qp
} = window.__gradio__svelte__internal, {
  SvelteComponent: xp,
  append: ew,
  attr: tw,
  detach: nw,
  init: iw,
  insert: lw,
  noop: ow,
  safe_not_equal: sw,
  svg_element: aw
} = window.__gradio__svelte__internal, {
  SvelteComponent: rw,
  append: _w,
  attr: cw,
  detach: uw,
  init: fw,
  insert: dw,
  noop: hw,
  safe_not_equal: mw,
  svg_element: gw
} = window.__gradio__svelte__internal, {
  SvelteComponent: bw,
  append: pw,
  attr: ww,
  detach: vw,
  init: kw,
  insert: Cw,
  noop: yw,
  safe_not_equal: Sw,
  svg_element: qw
} = window.__gradio__svelte__internal, {
  SvelteComponent: zw,
  append: Dw,
  attr: Bw,
  detach: Ew,
  init: Mw,
  insert: Lw,
  noop: Rw,
  safe_not_equal: Aw,
  svg_element: Ww
} = window.__gradio__svelte__internal, {
  SvelteComponent: of,
  append: Il,
  attr: de,
  detach: sf,
  init: af,
  insert: rf,
  noop: Yl,
  safe_not_equal: _f,
  svg_element: Bi
} = window.__gradio__svelte__internal;
function cf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Bi("svg"), t = Bi("rect"), n = Bi("circle"), l = Bi("polyline"), de(t, "x", "3"), de(t, "y", "3"), de(t, "width", "18"), de(t, "height", "18"), de(t, "rx", "2"), de(t, "ry", "2"), de(n, "cx", "8.5"), de(n, "cy", "8.5"), de(n, "r", "1.5"), de(l, "points", "21 15 16 10 5 21"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "1.5"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-image");
    },
    m(o, s) {
      rf(o, e, s), Il(e, t), Il(e, n), Il(e, l);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(o) {
      o && sf(e);
    }
  };
}
let ir = class extends of {
  constructor(e) {
    super(), af(this, e, null, cf, _f, {});
  }
};
const {
  SvelteComponent: uf,
  append: ff,
  attr: Ei,
  detach: df,
  init: hf,
  insert: mf,
  noop: Hl,
  safe_not_equal: gf,
  svg_element: _s
} = window.__gradio__svelte__internal;
function bf(i) {
  let e, t;
  return {
    c() {
      e = _s("svg"), t = _s("path"), Ei(t, "fill", "currentColor"), Ei(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ei(e, "xmlns", "http://www.w3.org/2000/svg"), Ei(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      mf(n, e, l), ff(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(n) {
      n && df(e);
    }
  };
}
class lr extends uf {
  constructor(e) {
    super(), hf(this, e, null, bf, gf, {});
  }
}
const {
  SvelteComponent: Iw,
  append: Yw,
  attr: Hw,
  detach: Tw,
  init: jw,
  insert: $w,
  noop: Fw,
  safe_not_equal: Uw,
  svg_element: Vw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ow,
  append: Nw,
  attr: Pw,
  detach: Kw,
  init: Zw,
  insert: Gw,
  noop: Jw,
  safe_not_equal: Qw,
  svg_element: xw
} = window.__gradio__svelte__internal, {
  SvelteComponent: ev,
  append: tv,
  attr: nv,
  detach: iv,
  init: lv,
  insert: ov,
  noop: sv,
  safe_not_equal: av,
  svg_element: rv
} = window.__gradio__svelte__internal, {
  SvelteComponent: _v,
  append: cv,
  attr: uv,
  detach: fv,
  init: dv,
  insert: hv,
  noop: mv,
  safe_not_equal: gv,
  svg_element: bv
} = window.__gradio__svelte__internal, {
  SvelteComponent: pv,
  append: wv,
  attr: vv,
  detach: kv,
  init: Cv,
  insert: yv,
  noop: Sv,
  safe_not_equal: qv,
  svg_element: zv
} = window.__gradio__svelte__internal, {
  SvelteComponent: pf,
  append: Mi,
  attr: he,
  detach: wf,
  init: vf,
  insert: kf,
  noop: Tl,
  safe_not_equal: Cf,
  svg_element: ii
} = window.__gradio__svelte__internal;
function yf(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = ii("svg"), t = ii("path"), n = ii("path"), l = ii("line"), o = ii("line"), he(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), he(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), he(l, "x1", "12"), he(l, "y1", "19"), he(l, "x2", "12"), he(l, "y2", "23"), he(o, "x1", "8"), he(o, "y1", "23"), he(o, "x2", "16"), he(o, "y2", "23"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "fill", "none"), he(e, "stroke", "currentColor"), he(e, "stroke-width", "2"), he(e, "stroke-linecap", "round"), he(e, "stroke-linejoin", "round"), he(e, "class", "feather feather-mic");
    },
    m(s, r) {
      kf(s, e, r), Mi(e, t), Mi(e, n), Mi(e, l), Mi(e, o);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(s) {
      s && wf(e);
    }
  };
}
class Sf extends pf {
  constructor(e) {
    super(), vf(this, e, null, yf, Cf, {});
  }
}
const {
  SvelteComponent: Dv,
  append: Bv,
  attr: Ev,
  detach: Mv,
  init: Lv,
  insert: Rv,
  noop: Av,
  safe_not_equal: Wv,
  svg_element: Xv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Iv,
  append: Yv,
  attr: Hv,
  detach: Tv,
  init: jv,
  insert: $v,
  noop: Fv,
  safe_not_equal: Uv,
  svg_element: Vv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ov,
  append: Nv,
  attr: Pv,
  detach: Kv,
  init: Zv,
  insert: Gv,
  noop: Jv,
  safe_not_equal: Qv,
  svg_element: xv
} = window.__gradio__svelte__internal, {
  SvelteComponent: e3,
  append: t3,
  attr: n3,
  detach: i3,
  init: l3,
  insert: o3,
  noop: s3,
  safe_not_equal: a3,
  svg_element: r3
} = window.__gradio__svelte__internal, {
  SvelteComponent: _3,
  append: c3,
  attr: u3,
  detach: f3,
  init: d3,
  insert: h3,
  noop: m3,
  safe_not_equal: g3,
  svg_element: b3
} = window.__gradio__svelte__internal, {
  SvelteComponent: p3,
  append: w3,
  attr: v3,
  detach: k3,
  init: C3,
  insert: y3,
  noop: S3,
  safe_not_equal: q3,
  svg_element: z3
} = window.__gradio__svelte__internal, {
  SvelteComponent: qf,
  append: cs,
  attr: Fe,
  detach: zf,
  init: Df,
  insert: Bf,
  noop: jl,
  safe_not_equal: Ef,
  set_style: Mf,
  svg_element: $l
} = window.__gradio__svelte__internal;
function Lf(i) {
  let e, t, n;
  return {
    c() {
      e = $l("svg"), t = $l("polyline"), n = $l("path"), Fe(t, "points", "1 4 1 10 7 10"), Fe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Fe(e, "xmlns", "http://www.w3.org/2000/svg"), Fe(e, "width", "100%"), Fe(e, "height", "100%"), Fe(e, "viewBox", "0 0 24 24"), Fe(e, "fill", "none"), Fe(e, "stroke", "currentColor"), Fe(e, "stroke-width", "2"), Fe(e, "stroke-linecap", "round"), Fe(e, "stroke-linejoin", "round"), Fe(e, "class", "feather feather-rotate-ccw"), Mf(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      Bf(l, e, o), cs(e, t), cs(e, n);
    },
    p: jl,
    i: jl,
    o: jl,
    d(l) {
      l && zf(e);
    }
  };
}
class Rf extends qf {
  constructor(e) {
    super(), Df(this, e, null, Lf, Ef, {});
  }
}
const {
  SvelteComponent: D3,
  append: B3,
  attr: E3,
  detach: M3,
  init: L3,
  insert: R3,
  noop: A3,
  safe_not_equal: W3,
  svg_element: X3
} = window.__gradio__svelte__internal, {
  SvelteComponent: I3,
  append: Y3,
  attr: H3,
  detach: T3,
  init: j3,
  insert: $3,
  noop: F3,
  safe_not_equal: U3,
  svg_element: V3
} = window.__gradio__svelte__internal, {
  SvelteComponent: O3,
  append: N3,
  attr: P3,
  detach: K3,
  init: Z3,
  insert: G3,
  noop: J3,
  safe_not_equal: Q3,
  svg_element: x3
} = window.__gradio__svelte__internal, {
  SvelteComponent: e4,
  append: t4,
  attr: n4,
  detach: i4,
  init: l4,
  insert: o4,
  noop: s4,
  safe_not_equal: a4,
  svg_element: r4
} = window.__gradio__svelte__internal, {
  SvelteComponent: _4,
  append: c4,
  attr: u4,
  detach: f4,
  init: d4,
  insert: h4,
  noop: m4,
  safe_not_equal: g4,
  svg_element: b4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Af,
  append: Wf,
  attr: Be,
  detach: Xf,
  init: If,
  insert: Yf,
  noop: Fl,
  safe_not_equal: Hf,
  svg_element: us
} = window.__gradio__svelte__internal;
function Tf(i) {
  let e, t;
  return {
    c() {
      e = us("svg"), t = us("rect"), Be(t, "x", "3"), Be(t, "y", "3"), Be(t, "width", "18"), Be(t, "height", "18"), Be(t, "rx", "2"), Be(t, "ry", "2"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "100%"), Be(e, "height", "100%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "stroke-width", "1.5"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-square");
    },
    m(n, l) {
      Yf(n, e, l), Wf(e, t);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(n) {
      n && Xf(e);
    }
  };
}
class jf extends Af {
  constructor(e) {
    super(), If(this, e, null, Tf, Hf, {});
  }
}
const {
  SvelteComponent: p4,
  append: w4,
  attr: v4,
  detach: k4,
  init: C4,
  insert: y4,
  noop: S4,
  safe_not_equal: q4,
  svg_element: z4
} = window.__gradio__svelte__internal, {
  SvelteComponent: D4,
  append: B4,
  attr: E4,
  detach: M4,
  init: L4,
  insert: R4,
  noop: A4,
  safe_not_equal: W4,
  svg_element: X4
} = window.__gradio__svelte__internal, {
  SvelteComponent: I4,
  append: Y4,
  attr: H4,
  detach: T4,
  init: j4,
  insert: $4,
  noop: F4,
  safe_not_equal: U4,
  svg_element: V4,
  text: O4
} = window.__gradio__svelte__internal, {
  SvelteComponent: N4,
  append: P4,
  attr: K4,
  detach: Z4,
  init: G4,
  insert: J4,
  noop: Q4,
  safe_not_equal: x4,
  svg_element: e5
} = window.__gradio__svelte__internal, {
  SvelteComponent: t5,
  append: n5,
  attr: i5,
  detach: l5,
  init: o5,
  insert: s5,
  noop: a5,
  safe_not_equal: r5,
  svg_element: _5
} = window.__gradio__svelte__internal, {
  SvelteComponent: $f,
  append: fs,
  attr: Ue,
  detach: Ff,
  init: Uf,
  insert: Vf,
  noop: Ul,
  safe_not_equal: Of,
  svg_element: Vl
} = window.__gradio__svelte__internal;
function Nf(i) {
  let e, t, n;
  return {
    c() {
      e = Vl("svg"), t = Vl("polyline"), n = Vl("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      Vf(l, e, o), fs(e, t), fs(e, n);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(l) {
      l && Ff(e);
    }
  };
}
class Pf extends $f {
  constructor(e) {
    super(), Uf(this, e, null, Nf, Of, {});
  }
}
const {
  SvelteComponent: Kf,
  append: Ol,
  attr: Ce,
  detach: Zf,
  init: Gf,
  insert: Jf,
  noop: Nl,
  safe_not_equal: Qf,
  svg_element: Li
} = window.__gradio__svelte__internal;
function xf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Li("svg"), t = Li("path"), n = Li("polyline"), l = Li("line"), Ce(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ce(n, "points", "17 8 12 3 7 8"), Ce(l, "x1", "12"), Ce(l, "y1", "3"), Ce(l, "x2", "12"), Ce(l, "y2", "15"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "width", "90%"), Ce(e, "height", "90%"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "2"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round"), Ce(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Jf(o, e, s), Ol(e, t), Ol(e, n), Ol(e, l);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(o) {
      o && Zf(e);
    }
  };
}
let or = class extends Kf {
  constructor(e) {
    super(), Gf(this, e, null, xf, Qf, {});
  }
};
const {
  SvelteComponent: u5,
  append: f5,
  attr: d5,
  detach: h5,
  init: m5,
  insert: g5,
  noop: b5,
  safe_not_equal: p5,
  svg_element: w5
} = window.__gradio__svelte__internal, {
  SvelteComponent: v5,
  append: k5,
  attr: C5,
  detach: y5,
  init: S5,
  insert: q5,
  noop: z5,
  safe_not_equal: D5,
  svg_element: B5,
  text: E5
} = window.__gradio__svelte__internal, {
  SvelteComponent: M5,
  append: L5,
  attr: R5,
  detach: A5,
  init: W5,
  insert: X5,
  noop: I5,
  safe_not_equal: Y5,
  svg_element: H5,
  text: T5
} = window.__gradio__svelte__internal, {
  SvelteComponent: j5,
  append: $5,
  attr: F5,
  detach: U5,
  init: V5,
  insert: O5,
  noop: N5,
  safe_not_equal: P5,
  svg_element: K5,
  text: Z5
} = window.__gradio__svelte__internal, {
  SvelteComponent: G5,
  append: J5,
  attr: Q5,
  detach: x5,
  init: ek,
  insert: tk,
  noop: nk,
  safe_not_equal: ik,
  svg_element: lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ed,
  append: ds,
  attr: Tt,
  detach: td,
  init: nd,
  insert: id,
  noop: Pl,
  safe_not_equal: ld,
  svg_element: Kl
} = window.__gradio__svelte__internal;
function od(i) {
  let e, t, n;
  return {
    c() {
      e = Kl("svg"), t = Kl("path"), n = Kl("path"), Tt(t, "fill", "currentColor"), Tt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Tt(n, "fill", "currentColor"), Tt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      id(l, e, o), ds(e, t), ds(e, n);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(l) {
      l && td(e);
    }
  };
}
let sr = class extends ed {
  constructor(e) {
    super(), nd(this, e, null, od, ld, {});
  }
};
const sd = [
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
], hs = {
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
sd.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: hs[e][t],
    secondary: hs[e][n]
  }
}), {});
class Zi extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function ad(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Zi("Must be on Spaces to share.");
  let t, n, l;
  t = rd(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
  const o = new File([t], l, { type: n }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if ((a = s.headers.get("content-type")) != null && a.includes("application/json")) {
      const _ = await s.json();
      throw new Zi(`Upload failed: ${_.error}`);
    }
    throw new Zi("Upload failed.");
  }
  return await s.text();
}
function rd(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: _d,
  create_component: cd,
  destroy_component: ud,
  init: fd,
  mount_component: dd,
  safe_not_equal: hd,
  transition_in: md,
  transition_out: gd
} = window.__gradio__svelte__internal, { createEventDispatcher: bd } = window.__gradio__svelte__internal;
function pd(i) {
  let e, t;
  return e = new dl({
    props: {
      Icon: Fu,
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
      cd(e.$$.fragment);
    },
    m(n, l) {
      dd(e, n, l), t = !0;
    },
    p(n, [l]) {
      const o = {};
      l & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), l & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (md(e.$$.fragment, n), t = !0);
    },
    o(n) {
      gd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ud(e, n);
    }
  };
}
function wd(i, e, t) {
  const n = bd();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof Zi ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class vd extends _d {
  constructor(e) {
    super(), fd(this, e, wd, pd, hd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: kd,
  append: cn,
  attr: po,
  check_outros: Cd,
  create_component: ar,
  destroy_component: rr,
  detach: Gi,
  element: wo,
  group_outros: yd,
  init: Sd,
  insert: Ji,
  mount_component: _r,
  safe_not_equal: qd,
  set_data: vo,
  space: ko,
  text: ci,
  toggle_class: ms,
  transition_in: el,
  transition_out: tl
} = window.__gradio__svelte__internal;
function zd(i) {
  let e, t;
  return e = new or({}), {
    c() {
      ar(e.$$.fragment);
    },
    m(n, l) {
      _r(e, n, l), t = !0;
    },
    i(n) {
      t || (el(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rr(e, n);
    }
  };
}
function Dd(i) {
  let e, t;
  return e = new lr({}), {
    c() {
      ar(e.$$.fragment);
    },
    m(n, l) {
      _r(e, n, l), t = !0;
    },
    i(n) {
      t || (el(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rr(e, n);
    }
  };
}
function gs(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), l, o, s, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = wo("span"), t = ci("- "), l = ci(n), o = ci(" -"), s = ko(), a = ci(r), po(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      Ji(_, e, c), cn(e, t), cn(e, l), cn(e, o), Ji(_, s, c), Ji(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && vo(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && vo(a, r);
    },
    d(_) {
      _ && (Gi(e), Gi(s), Gi(a));
    }
  };
}
function Bd(i) {
  let e, t, n, l, o, s = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, _;
  const c = [Dd, zd], u = [];
  function f(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = f(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && gs(i)
  );
  return {
    c() {
      e = wo("div"), t = wo("span"), l.c(), o = ko(), r = ci(s), a = ko(), d && d.c(), po(t, "class", "icon-wrap svelte-kzcjhc"), ms(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), po(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Ji(m, e, h), cn(e, t), u[n].m(t, null), cn(e, o), cn(e, r), cn(e, a), d && d.m(e, null), _ = !0;
    },
    p(m, [h]) {
      let g = n;
      n = f(m), n !== g && (yd(), tl(u[g], 1, 1, () => {
        u[g] = null;
      }), Cd(), l = u[n], l || (l = u[n] = c[n](m), l.c()), el(l, 1), l.m(t, null)), (!_ || h & /*hovered*/
      16) && ms(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!_ || h & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && vo(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = gs(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      _ || (el(l), _ = !0);
    },
    o(m) {
      tl(l), _ = !1;
    },
    d(m) {
      m && Gi(e), u[n].d(), d && d.d();
    }
  };
}
function Ed(i, e, t) {
  let { type: n = "file" } = e, { i18n: l } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (_) => {
    "type" in _ && t(0, n = _.type), "i18n" in _ && t(1, l = _.i18n), "message" in _ && t(2, o = _.message), "mode" in _ && t(3, s = _.mode), "hovered" in _ && t(4, r = _.hovered);
  }, [n, l, o, s, r, a];
}
class cr extends kd {
  constructor(e) {
    super(), Sd(this, e, Ed, Bd, qd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: sk,
  attr: ak,
  create_slot: rk,
  detach: _k,
  element: ck,
  get_all_dirty_from_scope: uk,
  get_slot_changes: fk,
  init: dk,
  insert: hk,
  safe_not_equal: mk,
  toggle_class: gk,
  transition_in: bk,
  transition_out: pk,
  update_slot_base: wk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Md,
  append: Zl,
  attr: dt,
  check_outros: ui,
  create_component: hl,
  destroy_component: ml,
  detach: Nn,
  element: yi,
  empty: Ld,
  group_outros: fi,
  init: Rd,
  insert: Pn,
  listen: gl,
  mount_component: bl,
  safe_not_equal: Ad,
  space: Gl,
  toggle_class: Jt,
  transition_in: pe,
  transition_out: Ee
} = window.__gradio__svelte__internal;
function bs(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, l = (
    /*sources*/
    i[1].includes("microphone")
  ), o, s = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), _, c = t && ps(i), u = l && ws(i), f = s && vs(i), d = a && ks(i);
  return {
    c() {
      e = yi("span"), c && c.c(), n = Gl(), u && u.c(), o = Gl(), f && f.c(), r = Gl(), d && d.c(), dt(e, "class", "source-selection svelte-1jp3vgd"), dt(e, "data-testid", "source-select");
    },
    m(m, h) {
      Pn(m, e, h), c && c.m(e, null), Zl(e, n), u && u.m(e, null), Zl(e, o), f && f.m(e, null), Zl(e, r), d && d.m(e, null), _ = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && pe(c, 1)) : (c = ps(m), c.c(), pe(c, 1), c.m(e, n)) : c && (fi(), Ee(c, 1, 1, () => {
        c = null;
      }), ui()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? u ? (u.p(m, h), h & /*sources*/
      2 && pe(u, 1)) : (u = ws(m), u.c(), pe(u, 1), u.m(e, o)) : u && (fi(), Ee(u, 1, 1, () => {
        u = null;
      }), ui()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? f ? (f.p(m, h), h & /*sources*/
      2 && pe(f, 1)) : (f = vs(m), f.c(), pe(f, 1), f.m(e, r)) : f && (fi(), Ee(f, 1, 1, () => {
        f = null;
      }), ui()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && pe(d, 1)) : (d = ks(m), d.c(), pe(d, 1), d.m(e, null)) : d && (fi(), Ee(d, 1, 1, () => {
        d = null;
      }), ui());
    },
    i(m) {
      _ || (pe(c), pe(u), pe(f), pe(d), _ = !0);
    },
    o(m) {
      Ee(c), Ee(u), Ee(f), Ee(d), _ = !1;
    },
    d(m) {
      m && Nn(e), c && c.d(), u && u.d(), f && f.d(), d && d.d();
    }
  };
}
function ps(i) {
  let e, t, n, l, o;
  return t = new or({}), {
    c() {
      e = yi("button"), hl(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Upload file"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      Pn(s, e, r), bl(t, e, null), n = !0, l || (o = gl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ee(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Nn(e), ml(t), l = !1, o();
    }
  };
}
function ws(i) {
  let e, t, n, l, o;
  return t = new Sf({}), {
    c() {
      e = yi("button"), hl(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Record audio"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      Pn(s, e, r), bl(t, e, null), n = !0, l || (o = gl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ee(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Nn(e), ml(t), l = !1, o();
    }
  };
}
function vs(i) {
  let e, t, n, l, o;
  return t = new sr({}), {
    c() {
      e = yi("button"), hl(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Capture from camera"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      Pn(s, e, r), bl(t, e, null), n = !0, l || (o = gl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ee(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Nn(e), ml(t), l = !1, o();
    }
  };
}
function ks(i) {
  let e, t, n, l, o;
  return t = new lr({}), {
    c() {
      e = yi("button"), hl(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Paste from clipboard"), Jt(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      Pn(s, e, r), bl(t, e, null), n = !0, l || (o = gl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Jt(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ee(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Nn(e), ml(t), l = !1, o();
    }
  };
}
function Wd(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && bs(i)
  );
  return {
    c() {
      n && n.c(), e = Ld();
    },
    m(l, o) {
      n && n.m(l, o), Pn(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && pe(n, 1)) : (n = bs(l), n.c(), pe(n, 1), n.m(e.parentNode, e)) : n && (fi(), Ee(n, 1, 1, () => {
        n = null;
      }), ui());
    },
    i(l) {
      t || (pe(n), t = !0);
    },
    o(l) {
      Ee(n), t = !1;
    },
    d(l) {
      l && Nn(e), n && n.d(l);
    }
  };
}
function Xd(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, b) {
    function w(p) {
      return p instanceof g ? p : new g(function(C) {
        C(p);
      });
    }
    return new (g || (g = Promise))(function(p, C) {
      function z(S) {
        try {
          q(b.next(S));
        } catch (E) {
          C(E);
        }
      }
      function v(S) {
        try {
          q(b.throw(S));
        } catch (E) {
          C(E);
        }
      }
      function q(S) {
        S.done ? p(S.value) : w(S.value).then(z, v);
      }
      q((b = b.apply(m, h || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function _(m) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = m), a(m);
    });
  }
  const c = () => _("upload"), u = () => _("microphone"), f = () => _("webcam"), d = () => _("clipboard");
  return i.$$set = (m) => {
    "sources" in m && t(1, o = m.sources), "active_source" in m && t(0, s = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    _,
    r,
    a,
    c,
    u,
    f,
    d
  ];
}
class Id extends Md {
  constructor(e) {
    super(), Rd(this, e, Xd, Wd, Ad, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Hn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Qi() {
}
const Yd = (i) => i;
function Cs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const ur = typeof window < "u";
let ys = ur ? () => window.performance.now() : () => Date.now(), fr = ur ? (i) => requestAnimationFrame(i) : Qi;
const On = /* @__PURE__ */ new Set();
function dr(i) {
  On.forEach((e) => {
    e.c(i) || (On.delete(e), e.f());
  }), On.size !== 0 && fr(dr);
}
function Hd(i) {
  let e;
  return On.size === 0 && fr(dr), { promise: new Promise((t) => {
    On.add(e = { c: i, f: t });
  }), abort() {
    On.delete(e);
  } };
}
function Td(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function jd(i, { delay: e = 0, duration: t = 400, easing: n = Yd } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Ss(i, { delay: e = 0, duration: t = 400, easing: n = Td, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, f] = Cs(l), [d, m] = Cs(o);
  return { delay: e, duration: t, easing: n, css: (h, g) => `
			transform: ${_} translate(${(1 - h) * u}${f}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}` };
}
const Rn = [];
function $d(i, e = Qi) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Rn.length;
      for (const c of n) c[1](), Rn.push(c, i);
      if (_) {
        for (let c = 0; c < Rn.length; c += 2) Rn[c][0](Rn[c + 1]);
        Rn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = Qi) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || Qi), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function qs(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Co(i, e, t, n) {
  if (typeof t == "number" || qs(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, qs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Co(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Co(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function zs(i, e = {}) {
  const t = $d(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, u = 1, f = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const w = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = ys(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (f = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), u = 0), r || (s = ys(), d = !1, r = Hd((p) => {
      if (d) return d = !1, r = null, !1;
      u = Math.min(u + f, 1);
      const C = { inv_mass: u, opts: h, settled: !0, dt: 60 * (p - s) / 1e3 }, z = Co(C, _, i, c);
      return s = p, _ = i, t.set(i = z), C.settled && (r = null), !C.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        w === a && p();
      });
    }));
  }
  const h = { set: m, update: (g, b) => m(g(c, i), b), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return h;
}
const {
  SvelteComponent: Fd,
  append: xe,
  attr: O,
  component_subscribe: Ds,
  detach: Ud,
  element: Vd,
  init: Od,
  insert: Nd,
  noop: Bs,
  safe_not_equal: Pd,
  set_style: Ri,
  svg_element: et,
  toggle_class: Es
} = window.__gradio__svelte__internal, { onMount: Kd } = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f;
  return {
    c() {
      e = Vd("div"), t = et("svg"), n = et("g"), l = et("path"), o = et("path"), s = et("path"), r = et("path"), a = et("g"), _ = et("path"), c = et("path"), u = et("path"), f = et("path"), O(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), O(l, "fill", "#FF7C00"), O(l, "fill-opacity", "0.4"), O(l, "class", "svelte-43sxxs"), O(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), O(o, "fill", "#FF7C00"), O(o, "class", "svelte-43sxxs"), O(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), O(s, "fill", "#FF7C00"), O(s, "fill-opacity", "0.4"), O(s, "class", "svelte-43sxxs"), O(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), O(r, "fill", "#FF7C00"), O(r, "class", "svelte-43sxxs"), Ri(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), O(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), O(_, "fill", "#FF7C00"), O(_, "fill-opacity", "0.4"), O(_, "class", "svelte-43sxxs"), O(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), O(c, "fill", "#FF7C00"), O(c, "class", "svelte-43sxxs"), O(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), O(u, "fill", "#FF7C00"), O(u, "fill-opacity", "0.4"), O(u, "class", "svelte-43sxxs"), O(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), O(f, "fill", "#FF7C00"), O(f, "class", "svelte-43sxxs"), Ri(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), O(t, "viewBox", "-1200 -1200 3000 3000"), O(t, "fill", "none"), O(t, "xmlns", "http://www.w3.org/2000/svg"), O(t, "class", "svelte-43sxxs"), O(e, "class", "svelte-43sxxs"), Es(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      Nd(d, e, m), xe(e, t), xe(t, n), xe(n, l), xe(n, o), xe(n, s), xe(n, r), xe(t, a), xe(a, _), xe(a, c), xe(a, u), xe(a, f);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && Ri(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && Ri(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Es(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Bs,
    o: Bs,
    d(d) {
      d && Ud(e);
    }
  };
}
function Gd(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(d, m, h, g) {
    function b(w) {
      return w instanceof h ? w : new h(function(p) {
        p(w);
      });
    }
    return new (h || (h = Promise))(function(w, p) {
      function C(q) {
        try {
          v(g.next(q));
        } catch (S) {
          p(S);
        }
      }
      function z(q) {
        try {
          v(g.throw(q));
        } catch (S) {
          p(S);
        }
      }
      function v(q) {
        q.done ? w(q.value) : b(q.value).then(C, z);
      }
      v((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = zs([0, 0]);
  Ds(i, r, (d) => t(1, n = d));
  const a = zs([0, 0]);
  Ds(i, a, (d) => t(2, l = d));
  let _;
  function c() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return o(this, void 0, void 0, function* () {
      yield c(), _ || u();
    });
  }
  function f() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Kd(() => (f(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class Jd extends Fd {
  constructor(e) {
    super(), Od(this, e, Gd, Zd, Pd, { margin: 0 });
  }
}
const {
  SvelteComponent: Qd,
  append: un,
  attr: lt,
  binding_callbacks: Ms,
  check_outros: yo,
  create_component: hr,
  create_slot: mr,
  destroy_component: gr,
  destroy_each: br,
  detach: $,
  element: ut,
  empty: Kn,
  ensure_array_like: nl,
  get_all_dirty_from_scope: pr,
  get_slot_changes: wr,
  group_outros: So,
  init: xd,
  insert: F,
  mount_component: vr,
  noop: qo,
  safe_not_equal: e1,
  set_data: Ke,
  set_style: Zt,
  space: Pe,
  text: re,
  toggle_class: Ne,
  transition_in: it,
  transition_out: ft,
  update_slot_base: kr
} = window.__gradio__svelte__internal, { tick: t1 } = window.__gradio__svelte__internal, { onDestroy: n1 } = window.__gradio__svelte__internal, { createEventDispatcher: i1 } = window.__gradio__svelte__internal, l1 = (i) => ({}), Ls = (i) => ({}), o1 = (i) => ({}), Rs = (i) => ({});
function As(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ws(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function s1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new dl({
    props: {
      Icon: nr,
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
  const _ = (
    /*#slots*/
    i[30].error
  ), c = mr(
    _,
    i,
    /*$$scope*/
    i[29],
    Ls
  );
  return {
    c() {
      e = ut("div"), hr(t.$$.fragment), n = Pe(), l = ut("span"), s = re(o), r = Pe(), c && c.c(), lt(e, "class", "clear-status svelte-16nch4a"), lt(l, "class", "error svelte-16nch4a");
    },
    m(u, f) {
      F(u, e, f), vr(t, e, null), F(u, n, f), F(u, l, f), un(l, s), F(u, r, f), c && c.m(u, f), a = !0;
    },
    p(u, f) {
      const d = {};
      f[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || f[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && Ke(s, o), c && c.p && (!a || f[0] & /*$$scope*/
      536870912) && kr(
        c,
        _,
        u,
        /*$$scope*/
        u[29],
        a ? wr(
          _,
          /*$$scope*/
          u[29],
          f,
          l1
        ) : pr(
          /*$$scope*/
          u[29]
        ),
        Ls
      );
    },
    i(u) {
      a || (it(t.$$.fragment, u), it(c, u), a = !0);
    },
    o(u) {
      ft(t.$$.fragment, u), ft(c, u), a = !1;
    },
    d(u) {
      u && ($(e), $(n), $(l), $(r)), gr(t), c && c.d(u);
    }
  };
}
function a1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Xs(i)
  );
  function u(p, C) {
    if (
      /*progress*/
      p[7]
    ) return c1;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return _1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return r1;
  }
  let f = u(i), d = f && f(i), m = (
    /*timer*/
    i[5] && Hs(i)
  );
  const h = [h1, d1], g = [];
  function b(p, C) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = b(i)) && (s = g[o] = h[o](i));
  let w = !/*timer*/
  i[5] && Os(i);
  return {
    c() {
      c && c.c(), e = Pe(), t = ut("div"), d && d.c(), n = Pe(), m && m.c(), l = Pe(), s && s.c(), r = Pe(), w && w.c(), a = Kn(), lt(t, "class", "progress-text svelte-16nch4a"), Ne(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Ne(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, C) {
      c && c.m(p, C), F(p, e, C), F(p, t, C), d && d.m(t, null), un(t, n), m && m.m(t, null), F(p, l, C), ~o && g[o].m(p, C), F(p, r, C), w && w.m(p, C), F(p, a, C), _ = !0;
    },
    p(p, C) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, C) : (c = Xs(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), f === (f = u(p)) && d ? d.p(p, C) : (d && d.d(1), d = f && f(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? m ? m.p(p, C) : (m = Hs(p), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!_ || C[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || C[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let z = o;
      o = b(p), o === z ? ~o && g[o].p(p, C) : (s && (So(), ft(g[z], 1, 1, () => {
        g[z] = null;
      }), yo()), ~o ? (s = g[o], s ? s.p(p, C) : (s = g[o] = h[o](p), s.c()), it(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? w && (So(), ft(w, 1, 1, () => {
        w = null;
      }), yo()) : w ? (w.p(p, C), C[0] & /*timer*/
      32 && it(w, 1)) : (w = Os(p), w.c(), it(w, 1), w.m(a.parentNode, a));
    },
    i(p) {
      _ || (it(s), it(w), _ = !0);
    },
    o(p) {
      ft(s), ft(w), _ = !1;
    },
    d(p) {
      p && ($(e), $(t), $(l), $(r), $(a)), c && c.d(p), d && d.d(), m && m.d(), ~o && g[o].d(p), w && w.d(p);
    }
  };
}
function Xs(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = ut("div"), lt(e, "class", "eta-bar svelte-16nch4a"), Zt(e, "transform", t);
    },
    m(n, l) {
      F(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Zt(e, "transform", t);
    },
    d(n) {
      n && $(e);
    }
  };
}
function r1(i) {
  let e;
  return {
    c() {
      e = re("processing |");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: qo,
    d(t) {
      t && $(e);
    }
  };
}
function _1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = re("queue: "), n = re(t), l = re("/"), o = re(
        /*queue_size*/
        i[3]
      ), s = re(" |");
    },
    m(r, a) {
      F(r, e, a), F(r, n, a), F(r, l, a), F(r, o, a), F(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ke(n, t), a[0] & /*queue_size*/
      8 && Ke(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && ($(e), $(n), $(l), $(o), $(s));
    }
  };
}
function c1(i) {
  let e, t = nl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ys(Ws(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Kn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      F(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = nl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ws(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ys(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && $(e), br(n, l);
    }
  };
}
function Is(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? f1 : u1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = Pe(), n = re(t), l = re(" | "), s = re(o);
    },
    m(c, u) {
      _.m(c, u), F(c, e, u), F(c, n, u), F(c, l, u), F(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && _ ? _.p(c, u) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ke(n, t);
    },
    d(c) {
      c && ($(e), $(n), $(l), $(s)), _.d(c);
    }
  };
}
function u1(i) {
  let e = Hn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = re(e);
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Hn(
        /*p*/
        n[41].index || 0
      ) + "") && Ke(t, e);
    },
    d(n) {
      n && $(t);
    }
  };
}
function f1(i) {
  let e = Hn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Hn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = re(e), n = re("/"), o = re(l);
    },
    m(s, r) {
      F(s, t, r), F(s, n, r), F(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Hn(
        /*p*/
        s[41].index || 0
      ) + "") && Ke(t, e), r[0] & /*progress*/
      128 && l !== (l = Hn(
        /*p*/
        s[41].length
      ) + "") && Ke(o, l);
    },
    d(s) {
      s && ($(t), $(n), $(o));
    }
  };
}
function Ys(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Is(i)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, l) {
      t && t.m(n, l), F(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Is(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && $(e), t && t.d(n);
    }
  };
}
function Hs(i) {
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
    m(o, s) {
      F(o, e, s), F(o, n, s), F(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ke(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ke(n, t);
    },
    d(o) {
      o && ($(e), $(n), $(l));
    }
  };
}
function d1(i) {
  let e, t;
  return e = new Jd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      hr(e.$$.fragment);
    },
    m(n, l) {
      vr(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (it(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ft(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gr(e, n);
    }
  };
}
function h1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Ts(i)
  );
  return {
    c() {
      e = ut("div"), t = ut("div"), r && r.c(), n = Pe(), l = ut("div"), o = ut("div"), lt(t, "class", "progress-level-inner svelte-16nch4a"), lt(o, "class", "progress-bar svelte-16nch4a"), Zt(o, "width", s), lt(l, "class", "progress-bar-wrap svelte-16nch4a"), lt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      F(a, e, _), un(e, t), r && r.m(t, null), un(e, n), un(e, l), un(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = Ts(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Zt(o, "width", s);
    },
    i: qo,
    o: qo,
    d(a) {
      a && $(e), r && r.d(), i[31](null);
    }
  };
}
function Ts(i) {
  let e, t = nl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Vs(As(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Kn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      F(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = nl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = As(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Vs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && $(e), br(n, l);
    }
  };
}
function js(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && m1()
  ), s = (
    /*p*/
    i[41].desc != null && $s(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Fs()
  ), a = (
    /*progress_level*/
    i[14] != null && Us(i)
  );
  return {
    c() {
      o && o.c(), e = Pe(), s && s.c(), t = Pe(), r && r.c(), n = Pe(), a && a.c(), l = Kn();
    },
    m(_, c) {
      o && o.m(_, c), F(_, e, c), s && s.m(_, c), F(_, t, c), r && r.m(_, c), F(_, n, c), a && a.m(_, c), F(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = $s(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = Fs(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = Us(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && ($(e), $(t), $(n), $(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function m1(i) {
  let e;
  return {
    c() {
      e = re(" /");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && $(e);
    }
  };
}
function $s(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = re(e);
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ke(t, e);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Fs(i) {
  let e;
  return {
    c() {
      e = re("-");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Us(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = re(e), n = re("%");
    },
    m(l, o) {
      F(l, t, o), F(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && Ke(t, e);
    },
    d(l) {
      l && ($(t), $(n));
    }
  };
}
function Vs(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && js(i)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, l) {
      t && t.m(n, l), F(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = js(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && $(e), t && t.d(n);
    }
  };
}
function Os(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = mr(
    o,
    i,
    /*$$scope*/
    i[29],
    Rs
  );
  return {
    c() {
      e = ut("p"), t = re(
        /*loading_text*/
        i[9]
      ), n = Pe(), s && s.c(), lt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      F(r, e, a), un(e, t), F(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Ke(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && kr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? wr(
          o,
          /*$$scope*/
          r[29],
          a,
          o1
        ) : pr(
          /*$$scope*/
          r[29]
        ),
        Rs
      );
    },
    i(r) {
      l || (it(s, r), l = !0);
    },
    o(r) {
      ft(s, r), l = !1;
    },
    d(r) {
      r && ($(e), $(n)), s && s.d(r);
    }
  };
}
function g1(i) {
  let e, t, n, l, o;
  const s = [a1, s1], r = [];
  function a(_, c) {
    return (
      /*status*/
      _[4] === "pending" ? 0 : (
        /*status*/
        _[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = s[t](i)), {
    c() {
      e = ut("div"), n && n.c(), lt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Ne(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Ne(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Ne(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Ne(
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
    m(_, c) {
      F(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let u = t;
      t = a(_), t === u ? ~t && r[t].p(_, c) : (n && (So(), ft(r[u], 1, 1, () => {
        r[u] = null;
      }), yo()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), it(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && lt(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Ne(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ne(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && Ne(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && Ne(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && Zt(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Zt(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (it(n), o = !0);
    },
    o(_) {
      ft(n), o = !1;
    },
    d(_) {
      _ && $(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var b1 = function(i, e, t, n) {
  function l(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(c) {
      try {
        _(n.next(c));
      } catch (u) {
        s(u);
      }
    }
    function a(c) {
      try {
        _(n.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function _(c) {
      c.done ? o(c.value) : l(c.value).then(r, a);
    }
    _((n = n.apply(i, e || [])).next());
  });
};
let Ai = [], Jl = !1;
function p1(i) {
  return b1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ai.push(e), !Jl) Jl = !0;
      else return;
      yield t1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Ai.length; l++) {
          const s = Ai[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Jl = !1, Ai = [];
      });
    }
  });
}
function w1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = i1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: f = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: C = !1 } = e, { border: z = !1 } = e, { autoscroll: v } = e, q, S = !1, E = 0, k = 0, W = null, A = null, R = 0, G = null, ee, K = null, _e = !0;
  const I = () => {
    t(0, a = t(27, W = t(19, V = null))), t(25, E = performance.now()), t(26, k = 0), S = !0, j();
  };
  function j() {
    requestAnimationFrame(() => {
      t(26, k = (performance.now() - E) / 1e3), S && j();
    });
  }
  function L() {
    t(26, k = 0), t(0, a = t(27, W = t(19, V = null))), S && (S = !1);
  }
  n1(() => {
    S && L();
  });
  let V = null;
  function ge(X) {
    Ms[X ? "unshift" : "push"](() => {
      K = X, t(16, K), t(7, g), t(14, G), t(15, ee);
    });
  }
  const ce = () => {
    s("clear_status");
  };
  function te(X) {
    Ms[X ? "unshift" : "push"](() => {
      q = X, t(13, q);
    });
  }
  return i.$$set = (X) => {
    "i18n" in X && t(1, r = X.i18n), "eta" in X && t(0, a = X.eta), "queue_position" in X && t(2, _ = X.queue_position), "queue_size" in X && t(3, c = X.queue_size), "status" in X && t(4, u = X.status), "scroll_to_output" in X && t(22, f = X.scroll_to_output), "timer" in X && t(5, d = X.timer), "show_progress" in X && t(6, m = X.show_progress), "message" in X && t(23, h = X.message), "progress" in X && t(7, g = X.progress), "variant" in X && t(8, b = X.variant), "loading_text" in X && t(9, w = X.loading_text), "absolute" in X && t(10, p = X.absolute), "translucent" in X && t(11, C = X.translucent), "border" in X && t(12, z = X.border), "autoscroll" in X && t(24, v = X.autoscroll), "$$scope" in X && t(29, o = X.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - E) / 1e3 + a), t(19, V = A.toFixed(1)), t(27, W = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, R = A === null || A <= 0 || !k ? null : Math.min(k / A, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, _e = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, G = g.map((X) => {
      if (X.index != null && X.length != null)
        return X.index / X.length;
      if (X.progress != null)
        return X.progress;
    })) : t(14, G = null), G ? (t(15, ee = G[G.length - 1]), K && (ee === 0 ? t(16, K.style.transition = "0", K) : t(16, K.style.transition = "150ms", K))) : t(15, ee = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? I() : L()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && q && f && (u === "pending" || u === "complete") && p1(q, v), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = k.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    u,
    d,
    m,
    g,
    b,
    w,
    p,
    C,
    z,
    q,
    G,
    ee,
    K,
    R,
    _e,
    V,
    n,
    s,
    f,
    h,
    v,
    E,
    k,
    W,
    A,
    o,
    l,
    ge,
    ce,
    te
  ];
}
class v1 extends Qd {
  constructor(e) {
    super(), xd(
      this,
      e,
      w1,
      g1,
      e1,
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
const {
  SvelteComponent: vk,
  add_render_callback: kk,
  append: Ck,
  attr: yk,
  bubble: Sk,
  check_outros: qk,
  create_component: zk,
  create_in_transition: Dk,
  create_out_transition: Bk,
  destroy_component: Ek,
  detach: Mk,
  element: Lk,
  group_outros: Rk,
  init: Ak,
  insert: Wk,
  listen: Xk,
  mount_component: Ik,
  run_all: Yk,
  safe_not_equal: Hk,
  set_data: Tk,
  space: jk,
  stop_propagation: $k,
  text: Fk,
  transition_in: Uk,
  transition_out: Vk
} = window.__gradio__svelte__internal, { createEventDispatcher: Ok, onMount: Nk } = window.__gradio__svelte__internal, {
  SvelteComponent: Pk,
  append: Kk,
  attr: Zk,
  bubble: Gk,
  check_outros: Jk,
  create_animation: Qk,
  create_component: xk,
  destroy_component: e8,
  detach: t8,
  element: n8,
  ensure_array_like: i8,
  fix_and_outro_and_destroy_block: l8,
  fix_position: o8,
  group_outros: s8,
  init: a8,
  insert: r8,
  mount_component: _8,
  noop: c8,
  safe_not_equal: u8,
  set_style: f8,
  space: d8,
  transition_in: h8,
  transition_out: m8,
  update_keyed_each: g8
} = window.__gradio__svelte__internal, { setContext: b8, getContext: k1 } = window.__gradio__svelte__internal, C1 = "WORKER_PROXY_CONTEXT_KEY";
function Cr() {
  return k1(C1);
}
function y1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function yr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Sr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!y1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function S1(i) {
  if (i == null || !Sr(i))
    return i;
  const e = Cr();
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
    const o = new Blob([l.body], {
      type: yr(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: q1,
  assign: il,
  check_outros: qr,
  compute_rest_props: Ns,
  create_slot: Ho,
  detach: pl,
  element: zr,
  empty: Dr,
  exclude_internal_props: z1,
  get_all_dirty_from_scope: To,
  get_slot_changes: jo,
  get_spread_update: Br,
  group_outros: Er,
  init: D1,
  insert: wl,
  listen: Mr,
  prevent_default: B1,
  safe_not_equal: E1,
  set_attributes: ll,
  transition_in: bn,
  transition_out: pn,
  update_slot_base: $o
} = window.__gradio__svelte__internal, { createEventDispatcher: M1 } = window.__gradio__svelte__internal;
function L1(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = Ho(
    s,
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
  ], _ = {};
  for (let c = 0; c < a.length; c += 1)
    _ = il(_, a[c]);
  return {
    c() {
      e = zr("a"), r && r.c(), ll(e, _);
    },
    m(c, u) {
      wl(c, e, u), r && r.m(e, null), n = !0, l || (o = Mr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && $o(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? jo(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : To(
          /*$$scope*/
          c[7]
        ),
        null
      ), ll(e, _ = Br(a, [
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
      n || (bn(r, c), n = !0);
    },
    o(c) {
      pn(r, c), n = !1;
    },
    d(c) {
      c && pl(e), r && r.d(c), l = !1, o();
    }
  };
}
function R1(i) {
  let e, t, n, l;
  const o = [W1, A1], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Dr();
    },
    m(a, _) {
      s[e].m(a, _), wl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Er(), pn(s[c], 1, 1, () => {
        s[c] = null;
      }), qr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (bn(t), l = !0);
    },
    o(a) {
      pn(t), l = !1;
    },
    d(a) {
      a && pl(n), s[e].d(a);
    }
  };
}
function A1(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = Ho(
    o,
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
  for (let _ = 0; _ < r.length; _ += 1)
    a = il(a, r[_]);
  return {
    c() {
      e = zr("a"), s && s.c(), ll(e, a);
    },
    m(_, c) {
      wl(_, e, c), s && s.m(e, null), t = !0, n || (l = Mr(e, "click", B1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && $o(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? jo(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : To(
          /*$$scope*/
          _[7]
        ),
        null
      ), ll(e, a = Br(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        _[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          _[0]
        ) }
      ]));
    },
    i(_) {
      t || (bn(s, _), t = !0);
    },
    o(_) {
      pn(s, _), t = !1;
    },
    d(_) {
      _ && pl(e), s && s.d(_), n = !1, l();
    }
  };
}
function W1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Ho(
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
    m(l, o) {
      n && n.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && $o(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? jo(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : To(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (bn(n, l), e = !0);
    },
    o(l) {
      pn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function X1(i) {
  let e, t, n, l, o;
  const s = [R1, L1], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && Sr(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = Dr();
    },
    m(_, c) {
      r[t].m(_, c), wl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let u = t;
      t = a(_, c), t === u ? r[t].p(_, c) : (Er(), pn(r[u], 1, 1, () => {
        r[u] = null;
      }), qr(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), bn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (bn(n), o = !0);
    },
    o(_) {
      pn(n), o = !1;
    },
    d(_) {
      _ && pl(l), r[t].d(_);
    }
  };
}
function I1(i, e, t) {
  const n = ["href", "download"];
  let l = Ns(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function w(p) {
      return p instanceof g ? p : new g(function(C) {
        C(p);
      });
    }
    return new (g || (g = Promise))(function(p, C) {
      function z(S) {
        try {
          q(b.next(S));
        } catch (E) {
          C(E);
        }
      }
      function v(S) {
        try {
          q(b.throw(S));
        } catch (E) {
          C(E);
        }
      }
      function q(S) {
        S.done ? p(S.value) : w(S.value).then(z, v);
      }
      q((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = M1();
  let u = !1;
  const f = Cr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (f == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, u = !0), f.httpRequest({
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
            type: yr(g.headers, "content-type")
          }
        ), w = URL.createObjectURL(b), p = document.createElement("a");
        p.href = w, p.download = _, p.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = il(il({}, e), z1(m)), t(6, l = Ns(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, _ = m.download), "$$scope" in m && t(7, s = m.$$scope);
  }, [
    a,
    _,
    u,
    c,
    f,
    d,
    l,
    s,
    o
  ];
}
class Y1 extends q1 {
  constructor(e) {
    super(), D1(this, e, I1, X1, E1, { href: 0, download: 1 });
  }
}
var H1 = Object.defineProperty, T1 = (i, e, t) => e in i ? H1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, kt = (i, e, t) => (T1(i, typeof e != "symbol" ? e + "" : e, t), t), Lr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, li = (i, e, t) => (Lr(i, e, "read from private field"), e.get(i)), j1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, $1 = (i, e, t, n) => (Lr(i, e, "write to private field"), e.set(i, t), t), Ot;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Rr(i, e) {
  return i.map(
    (t) => new F1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class F1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: l,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    kt(this, "path"), kt(this, "url"), kt(this, "orig_name"), kt(this, "size"), kt(this, "blob"), kt(this, "is_stream"), kt(this, "mime_type"), kt(this, "alt_text"), kt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class p8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = li(this, Ot) + t; ; ) {
          const l = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (l === -1 || l - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (l === -1)
            break;
          const s = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, s)), t = t.slice(l + 1);
        }
        $1(this, Ot, t);
      },
      flush: (t) => {
        if (li(this, Ot) === "")
          return;
        const n = e.allowCR && li(this, Ot).endsWith("\r") ? li(this, Ot).slice(0, -1) : li(this, Ot);
        t.enqueue(n);
      }
    }), j1(this, Ot, "");
  }
}
Ot = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: U1,
  append: Re,
  attr: rn,
  detach: Ar,
  element: _n,
  init: V1,
  insert: Wr,
  noop: Ps,
  safe_not_equal: O1,
  set_data: ol,
  set_style: Ql,
  space: zo,
  text: Tn,
  toggle_class: Ks
} = window.__gradio__svelte__internal, { onMount: N1, createEventDispatcher: P1, onDestroy: K1 } = window.__gradio__svelte__internal;
function Zs(i) {
  let e, t, n, l, o = di(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = _n("div"), t = _n("span"), n = _n("div"), l = _n("progress"), s = Tn(o), a = zo(), _ = _n("span"), u = Tn(c), Ql(l, "visibility", "hidden"), Ql(l, "height", "0"), Ql(l, "width", "0"), l.value = r = di(
        /*file_to_display*/
        i[2]
      ), rn(l, "max", "100"), rn(l, "class", "svelte-cr2edf"), rn(n, "class", "progress-bar svelte-cr2edf"), rn(_, "class", "file-name svelte-cr2edf"), rn(e, "class", "file svelte-cr2edf");
    },
    m(f, d) {
      Wr(f, e, d), Re(e, t), Re(t, n), Re(n, l), Re(l, s), Re(e, a), Re(e, _), Re(_, u);
    },
    p(f, d) {
      d & /*file_to_display*/
      4 && o !== (o = di(
        /*file_to_display*/
        f[2]
      ) + "") && ol(s, o), d & /*file_to_display*/
      4 && r !== (r = di(
        /*file_to_display*/
        f[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      f[2].orig_name + "") && ol(u, c);
    },
    d(f) {
      f && Ar(e);
    }
  };
}
function Z1(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, u = (
    /*file_to_display*/
    i[2] && Zs(i)
  );
  return {
    c() {
      e = _n("div"), t = _n("span"), n = Tn("Uploading "), o = Tn(l), s = zo(), a = Tn(r), _ = Tn("..."), c = zo(), u && u.c(), rn(t, "class", "uploading svelte-cr2edf"), rn(e, "class", "wrap svelte-cr2edf"), Ks(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(f, d) {
      Wr(f, e, d), Re(e, t), Re(t, n), Re(t, o), Re(t, s), Re(t, a), Re(t, _), Re(e, c), u && u.m(e, null);
    },
    p(f, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      f[0].length + "") && ol(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      f[0].length > 1 ? "files" : "file") && ol(a, r), /*file_to_display*/
      f[2] ? u ? u.p(f, d) : (u = Zs(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Ks(
        e,
        "progress",
        /*progress*/
        f[1]
      );
    },
    i: Ps,
    o: Ps,
    d(f) {
      f && Ar(e), u && u.d();
    }
  };
}
function di(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function G1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += di(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function J1(i, e, t) {
  var n = this && this.__awaiter || function(h, g, b, w) {
    function p(C) {
      return C instanceof b ? C : new b(function(z) {
        z(C);
      });
    }
    return new (b || (b = Promise))(function(C, z) {
      function v(E) {
        try {
          S(w.next(E));
        } catch (k) {
          z(k);
        }
      }
      function q(E) {
        try {
          S(w.throw(E));
        } catch (k) {
          z(k);
        }
      }
      function S(E) {
        E.done ? C(E.value) : p(E.value).then(v, q);
      }
      S((w = w.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, u, f = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = P1();
  function m(h, g) {
    t(0, f = f.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return N1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), K1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && G1(f), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || f[0]);
  }, [
    f,
    _,
    u,
    l,
    o,
    s,
    r,
    c
  ];
}
class Q1 extends U1 {
  constructor(e) {
    super(), V1(this, e, J1, Z1, O1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: x1,
  append: Gs,
  attr: ye,
  binding_callbacks: eh,
  bubble: xt,
  check_outros: Xr,
  create_component: th,
  create_slot: Ir,
  destroy_component: nh,
  detach: vl,
  element: Do,
  empty: Yr,
  get_all_dirty_from_scope: Hr,
  get_slot_changes: Tr,
  group_outros: jr,
  init: ih,
  insert: kl,
  listen: Ye,
  mount_component: lh,
  prevent_default: en,
  run_all: oh,
  safe_not_equal: sh,
  set_style: $r,
  space: ah,
  stop_propagation: tn,
  toggle_class: ve,
  transition_in: Gt,
  transition_out: wn,
  update_slot_base: Fr
} = window.__gradio__svelte__internal, { createEventDispatcher: rh, tick: _h } = window.__gradio__svelte__internal;
function ch(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const f = (
    /*#slots*/
    i[26].default
  ), d = Ir(
    f,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Do("button"), d && d.c(), t = ah(), n = Do("input"), ye(n, "aria-label", "file upload"), ye(n, "data-testid", "file-upload"), ye(n, "type", "file"), ye(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, ye(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), ye(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ye(n, "class", "svelte-1s26xmt"), ye(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ye(e, "class", "svelte-1s26xmt"), ve(
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
      ), $r(e, "height", "100%");
    },
    m(m, h) {
      kl(m, e, h), d && d.m(e, null), Gs(e, t), Gs(e, n), i[34](n), _ = !0, c || (u = [
        Ye(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Ye(e, "drag", tn(en(
          /*drag_handler*/
          i[27]
        ))),
        Ye(e, "dragstart", tn(en(
          /*dragstart_handler*/
          i[28]
        ))),
        Ye(e, "dragend", tn(en(
          /*dragend_handler*/
          i[29]
        ))),
        Ye(e, "dragover", tn(en(
          /*dragover_handler*/
          i[30]
        ))),
        Ye(e, "dragenter", tn(en(
          /*dragenter_handler*/
          i[31]
        ))),
        Ye(e, "dragleave", tn(en(
          /*dragleave_handler*/
          i[32]
        ))),
        Ye(e, "drop", tn(en(
          /*drop_handler*/
          i[33]
        ))),
        Ye(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Ye(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Ye(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Ye(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!_ || h[0] & /*$$scope*/
      33554432) && Fr(
        d,
        f,
        m,
        /*$$scope*/
        m[25],
        _ ? Tr(
          f,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Hr(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!_ || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && ye(n, "accept", l), (!_ || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "directory" || void 0)) && ye(n, "webkitdirectory", s), (!_ || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && ye(n, "mozdirectory", r), (!_ || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && ye(e, "tabindex", a), (!_ || h[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!_ || h[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        m[4]
      ), (!_ || h[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!_ || h[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!_ || h[0] & /*disable_click*/
      128) && ve(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      _ || (Gt(d, m), _ = !0);
    },
    o(m) {
      wn(d, m), _ = !1;
    },
    d(m) {
      m && vl(e), d && d.d(m), i[34](null), c = !1, oh(u);
    }
  };
}
function uh(i) {
  let e, t, n = !/*hidden*/
  i[9] && Js(i);
  return {
    c() {
      n && n.c(), e = Yr();
    },
    m(l, o) {
      n && n.m(l, o), kl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (jr(), wn(n, 1, 1, () => {
        n = null;
      }), Xr()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && Gt(n, 1)) : (n = Js(l), n.c(), Gt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Gt(n), t = !0);
    },
    o(l) {
      wn(n), t = !1;
    },
    d(l) {
      l && vl(e), n && n.d(l);
    }
  };
}
function fh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = Ir(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Do("button"), r && r.c(), ye(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ye(e, "class", "svelte-1s26xmt"), ve(
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
      ), $r(e, "height", "100%");
    },
    m(a, _) {
      kl(a, e, _), r && r.m(e, null), n = !0, l || (o = Ye(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && Fr(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? Tr(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : Hr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ye(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
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
      a && vl(e), r && r.d(a), l = !1, o();
    }
  };
}
function Js(i) {
  let e, t;
  return e = new Q1({
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
      th(e.$$.fragment);
    },
    m(n, l) {
      lh(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), l[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), l[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), l[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      nh(e, n);
    }
  };
}
function dh(i) {
  let e, t, n, l;
  const o = [fh, uh, ch], s = [];
  function r(a, _) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Yr();
    },
    m(a, _) {
      s[e].m(a, _), kl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (jr(), wn(s[c], 1, 1, () => {
        s[c] = null;
      }), Xr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Gt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Gt(t), l = !0);
    },
    o(a) {
      wn(t), l = !1;
    },
    d(a) {
      a && vl(n), s[e].d(a);
    }
  };
}
function hh(i, e, t) {
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
    const [o] = l.split("/").map((s) => s.trim());
    return l.endsWith("/*") && t.startsWith(o + "/");
  });
}
function mh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(B, H, P, ie) {
    function fe(M) {
      return M instanceof P ? M : new P(function(ot) {
        ot(M);
      });
    }
    return new (P || (P = Promise))(function(M, ot) {
      function ht(Ge) {
        try {
          Ze(ie.next(Ge));
        } catch (mt) {
          ot(mt);
        }
      }
      function Xe(Ge) {
        try {
          Ze(ie.throw(Ge));
        } catch (mt) {
          ot(mt);
        }
      }
      function Ze(Ge) {
        Ge.done ? M(Ge.value) : fe(Ge.value).then(ht, Xe);
      }
      Ze((ie = ie.apply(B, H || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: f = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: w = !0 } = e, { max_file_size: p = null } = e, { upload: C } = e, { stream_handler: z } = e, v, q, S;
  const E = rh(), k = ["image", "video", "audio", "text", "file"], W = (B) => B.startsWith(".") || B.endsWith("/*") ? B : k.includes(B) ? B + "/*" : "." + B;
  function A() {
    t(20, r = !r);
  }
  function R() {
    navigator.clipboard.read().then((B) => o(this, void 0, void 0, function* () {
      for (let H = 0; H < B.length; H++) {
        const P = B[H].types.find((ie) => ie.startsWith("image/"));
        if (P) {
          B[H].getType(P).then((ie) => o(this, void 0, void 0, function* () {
            const fe = new File([ie], `clipboard.${P.replace("image/", "")}`);
            yield K([fe]);
          }));
          break;
        }
      }
    }));
  }
  function G() {
    f || b && (t(2, b.value = "", b), b.click());
  }
  function ee(B) {
    return o(this, void 0, void 0, function* () {
      yield _h(), t(14, v = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const H = yield C(B, d, v, p ?? 1 / 0);
        return E("load", u === "single" ? H == null ? void 0 : H[0] : H), t(1, g = !1), H || [];
      } catch (H) {
        return E("error", H.message), t(1, g = !1), [];
      }
    });
  }
  function K(B) {
    return o(this, void 0, void 0, function* () {
      if (!B.length)
        return;
      let H = B.map((P) => new File([P], P instanceof File ? P.name : "file", { type: P.type }));
      return t(15, q = yield Rr(H)), yield ee(q);
    });
  }
  function _e(B) {
    return o(this, void 0, void 0, function* () {
      const H = B.target;
      if (H.files)
        if (h != "blob")
          yield K(Array.from(H.files));
        else {
          if (u === "single") {
            E("load", H.files[0]);
            return;
          }
          E("load", H.files);
        }
    });
  }
  function I(B) {
    return o(this, void 0, void 0, function* () {
      var H;
      if (t(20, r = !1), !(!((H = B.dataTransfer) === null || H === void 0) && H.files)) return;
      const P = Array.from(B.dataTransfer.files).filter((ie) => {
        const fe = "." + ie.name.split(".").pop();
        return fe && hh(S, fe, ie.type) || (fe && Array.isArray(s) ? s.includes(fe) : fe === s) ? !0 : (E("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield K(P);
    });
  }
  function j(B) {
    xt.call(this, i, B);
  }
  function L(B) {
    xt.call(this, i, B);
  }
  function V(B) {
    xt.call(this, i, B);
  }
  function ge(B) {
    xt.call(this, i, B);
  }
  function ce(B) {
    xt.call(this, i, B);
  }
  function te(B) {
    xt.call(this, i, B);
  }
  function X(B) {
    xt.call(this, i, B);
  }
  function oe(B) {
    eh[B ? "unshift" : "push"](() => {
      b = B, t(2, b);
    });
  }
  return i.$$set = (B) => {
    "filetype" in B && t(0, s = B.filetype), "dragging" in B && t(20, r = B.dragging), "boundedheight" in B && t(3, a = B.boundedheight), "center" in B && t(4, _ = B.center), "flex" in B && t(5, c = B.flex), "file_count" in B && t(6, u = B.file_count), "disable_click" in B && t(7, f = B.disable_click), "root" in B && t(8, d = B.root), "hidden" in B && t(9, m = B.hidden), "format" in B && t(21, h = B.format), "uploading" in B && t(1, g = B.uploading), "hidden_upload" in B && t(2, b = B.hidden_upload), "show_progress" in B && t(10, w = B.show_progress), "max_file_size" in B && t(22, p = B.max_file_size), "upload" in B && t(23, C = B.upload), "stream_handler" in B && t(11, z = B.stream_handler), "$$scope" in B && t(25, l = B.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, S = null) : typeof s == "string" ? t(16, S = W(s)) : (t(0, s = s.map(W)), t(16, S = s.join(", "))));
  }, [
    s,
    g,
    b,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    w,
    z,
    R,
    G,
    v,
    q,
    S,
    A,
    _e,
    I,
    r,
    h,
    p,
    C,
    K,
    l,
    n,
    j,
    L,
    V,
    ge,
    ce,
    te,
    X,
    oe
  ];
}
class gh extends x1 {
  constructor(e) {
    super(), ih(
      this,
      e,
      mh,
      dh,
      sh,
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
  SvelteComponent: w8,
  append: v8,
  attr: k8,
  check_outros: C8,
  create_component: y8,
  destroy_component: S8,
  detach: q8,
  element: z8,
  group_outros: D8,
  init: B8,
  insert: E8,
  mount_component: M8,
  safe_not_equal: L8,
  set_style: R8,
  space: A8,
  toggle_class: W8,
  transition_in: X8,
  transition_out: I8
} = window.__gradio__svelte__internal, { createEventDispatcher: Y8 } = window.__gradio__svelte__internal, {
  SvelteComponent: H8,
  assign: T8,
  compute_rest_props: j8,
  detach: $8,
  element: F8,
  exclude_internal_props: U8,
  get_spread_update: V8,
  init: O8,
  insert: N8,
  noop: P8,
  safe_not_equal: K8,
  set_attributes: Z8,
  src_url_equal: G8,
  toggle_class: J8
} = window.__gradio__svelte__internal, {
  SvelteComponent: Q8,
  append: x8,
  attr: e6,
  bubble: t6,
  check_outros: n6,
  create_component: i6,
  destroy_component: l6,
  detach: o6,
  element: s6,
  empty: a6,
  group_outros: r6,
  init: _6,
  insert: c6,
  listen: u6,
  mount_component: f6,
  safe_not_equal: d6,
  space: h6,
  toggle_class: m6,
  transition_in: g6,
  transition_out: b6
} = window.__gradio__svelte__internal, { createEventDispatcher: p6 } = window.__gradio__svelte__internal, {
  SvelteComponent: bh,
  append: Wi,
  attr: xl,
  create_component: ph,
  destroy_component: wh,
  detach: vh,
  element: eo,
  init: kh,
  insert: Ch,
  listen: yh,
  mount_component: Sh,
  noop: qh,
  safe_not_equal: zh,
  set_style: Dh,
  space: Bh,
  text: Eh,
  transition_in: Mh,
  transition_out: Lh
} = window.__gradio__svelte__internal, { createEventDispatcher: Rh } = window.__gradio__svelte__internal;
function Ah(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new sr({}), {
    c() {
      e = eo("button"), t = eo("div"), n = eo("span"), ph(l.$$.fragment), o = Bh(), r = Eh(s), xl(n, "class", "icon-wrap svelte-fjcd9c"), xl(t, "class", "wrap svelte-fjcd9c"), xl(e, "class", "svelte-fjcd9c"), Dh(e, "height", "100%");
    },
    m(u, f) {
      Ch(u, e, f), Wi(e, t), Wi(t, n), Sh(l, n, null), Wi(t, o), Wi(t, r), a = !0, _ || (c = yh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: qh,
    i(u) {
      a || (Mh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      Lh(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && vh(e), wh(l), _ = !1, c();
    }
  };
}
function Wh(i) {
  const e = Rh();
  return [e, () => e("click")];
}
class Xh extends bh {
  constructor(e) {
    super(), kh(this, e, Wh, Ah, zh, {});
  }
}
function Ih() {
  return navigator.mediaDevices.enumerateDevices();
}
function Yh(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Qs(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (Yh(o, e), o));
}
function Hh(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Th,
  action_destroyer: jh,
  add_render_callback: $h,
  append: Et,
  attr: me,
  binding_callbacks: Fh,
  check_outros: gi,
  create_component: Zn,
  create_in_transition: Uh,
  destroy_component: Gn,
  destroy_each: Vh,
  detach: Ae,
  element: $e,
  empty: Fo,
  ensure_array_like: xs,
  group_outros: bi,
  init: Oh,
  insert: We,
  listen: sl,
  mount_component: Jn,
  noop: Uo,
  run_all: Nh,
  safe_not_equal: Ph,
  set_data: Ur,
  set_input_value: Bo,
  space: ki,
  stop_propagation: Kh,
  text: Vr,
  toggle_class: Xi,
  transition_in: ke,
  transition_out: Se
} = window.__gradio__svelte__internal, { createEventDispatcher: Zh, onMount: Gh } = window.__gradio__svelte__internal;
function ea(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Jh(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const f = [em, xh], d = [];
  function m(b, w) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = f[n](i);
  let h = !/*recording*/
  i[8] && ta(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && na(i)
  );
  return {
    c() {
      e = $e("div"), t = $e("button"), l.c(), s = ki(), h && h.c(), r = ki(), g && g.c(), a = Fo(), me(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), me(t, "class", "svelte-8hqvb6"), me(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, w) {
      We(b, e, w), Et(e, t), d[n].m(t, null), Et(e, s), h && h.m(e, null), We(b, r, w), g && g.m(b, w), We(b, a, w), _ = !0, c || (u = sl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, w) {
      let p = n;
      n = m(b), n === p ? d[n].p(b, w) : (bi(), Se(d[p], 1, 1, () => {
        d[p] = null;
      }), gi(), l = d[n], l ? l.p(b, w) : (l = d[n] = f[n](b), l.c()), ke(l, 1), l.m(t, null)), (!_ || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && me(t, "aria-label", o), /*recording*/
      b[8] ? h && (bi(), Se(h, 1, 1, () => {
        h = null;
      }), gi()) : h ? (h.p(b, w), w[0] & /*recording*/
      256 && ke(h, 1)) : (h = ta(b), h.c(), ke(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, w), w[0] & /*options_open, selected_device*/
      1152 && ke(g, 1)) : (g = na(b), g.c(), ke(g, 1), g.m(a.parentNode, a)) : g && (bi(), Se(g, 1, 1, () => {
        g = null;
      }), gi());
    },
    i(b) {
      _ || (ke(l), ke(h), ke(g), _ = !0);
    },
    o(b) {
      Se(l), Se(h), Se(g), _ = !1;
    },
    d(b) {
      b && (Ae(e), Ae(r), Ae(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, u();
    }
  };
}
function Qh(i) {
  let e, t, n, l;
  return t = new Xh({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = $e("div"), Zn(t.$$.fragment), me(e, "title", "grant webcam access");
    },
    m(o, s) {
      We(o, e, s), Jn(t, e, null), l = !0;
    },
    p: Uo,
    i(o) {
      l || (ke(t.$$.fragment, o), o && (n || $h(() => {
        n = Uh(e, jd, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Se(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Ae(e), Gn(t);
    }
  };
}
function xh(i) {
  let e, t, n;
  return t = new vu({}), {
    c() {
      e = $e("div"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "title", "capture photo");
    },
    m(l, o) {
      We(l, e, o), Jn(t, e, null), n = !0;
    },
    p: Uo,
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
function em(i) {
  let e, t, n, l;
  const o = [nm, tm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Fo();
    },
    m(a, _) {
      s[e].m(a, _), We(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (bi(), Se(s[c], 1, 1, () => {
        s[c] = null;
      }), gi(), t = s[e], t || (t = s[e] = o[e](a), t.c()), ke(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ke(t), l = !0);
    },
    o(a) {
      Se(t), l = !1;
    },
    d(a) {
      a && Ae(n), s[e].d(a);
    }
  };
}
function tm(i) {
  let e, t, n;
  return t = new Bu({}), {
    c() {
      e = $e("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "start recording");
    },
    m(l, o) {
      We(l, e, o), Jn(t, e, null), n = !0;
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
function nm(i) {
  let e, t, n;
  return t = new jf({}), {
    c() {
      e = $e("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "stop recording");
    },
    m(l, o) {
      We(l, e, o), Jn(t, e, null), n = !0;
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
function ta(i) {
  let e, t, n, l, o;
  return t = new Yo({}), {
    c() {
      e = $e("button"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "aria-label", "select input source");
    },
    m(s, r) {
      We(s, e, r), Jn(t, e, null), n = !0, l || (o = sl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: Uo,
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), Gn(t), l = !1, o();
    }
  };
}
function na(i) {
  let e, t, n, l, o, s, r;
  n = new Yo({});
  function a(u, f) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? lm : im
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = $e("select"), t = $e("button"), Zn(n.$$.fragment), l = ki(), c.c(), me(t, "class", "inset-icon svelte-8hqvb6"), me(e, "class", "select-wrap svelte-8hqvb6"), me(e, "aria-label", "select source");
    },
    m(u, f) {
      We(u, e, f), Et(e, t), Jn(n, t, null), Et(t, l), c.m(e, null), o = !0, s || (r = [
        sl(t, "click", Kh(
          /*click_handler_2*/
          i[22]
        )),
        jh(Vo.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        sl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], s = !0);
    },
    p(u, f) {
      _ === (_ = a(u)) && c ? c.p(u, f) : (c.d(1), c = _(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      o || (ke(n.$$.fragment, u), o = !0);
    },
    o(u) {
      Se(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Ae(e), Gn(n), c.d(), s = !1, Nh(r);
    }
  };
}
function im(i) {
  let e, t = xs(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ia(ea(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Fo();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      We(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = xs(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ea(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ia(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Ae(e), Vh(n, l);
    }
  };
}
function lm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = $e("option"), n = Vr(t), e.__value = "", Bo(e, e.__value), me(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      We(l, e, o), Et(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && Ur(n, t);
    },
    d(l) {
      l && Ae(e);
    }
  };
}
function ia(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = $e("option"), n = Vr(t), l = ki(), e.__value = o = /*device*/
      i[32].deviceId, Bo(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, me(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      We(r, e, a), Et(e, n), Et(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Ur(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Bo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ae(e);
    }
  };
}
function om(i) {
  let e, t, n, l, o, s;
  const r = [Qh, Jh], a = [];
  function _(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = $e("div"), t = $e("video"), n = ki(), o.c(), me(t, "class", "svelte-8hqvb6"), Xi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Xi(t, "hide", !/*webcam_accessed*/
      i[9]), me(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      We(c, e, u), Et(e, t), i[19](t), Et(e, n), a[l].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Xi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Xi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let f = l;
      l = _(c), l === f ? a[l].p(c, u) : (bi(), Se(a[f], 1, 1, () => {
        a[f] = null;
      }), gi(), o = a[l], o ? o.p(c, u) : (o = a[l] = r[l](c), o.c()), ke(o, 1), o.m(e, null));
    },
    i(c) {
      s || (ke(o), s = !0);
    },
    o(c) {
      Se(o), s = !1;
    },
    d(c) {
      c && Ae(e), i[19](null), a[l].d();
    }
  };
}
function Vo(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function sm(i, e, t) {
  var n = this && this.__awaiter || function(I, j, L, V) {
    function ge(ce) {
      return ce instanceof L ? ce : new L(function(te) {
        te(ce);
      });
    }
    return new (L || (L = Promise))(function(ce, te) {
      function X(H) {
        try {
          B(V.next(H));
        } catch (P) {
          te(P);
        }
      }
      function oe(H) {
        try {
          B(V.throw(H));
        } catch (P) {
          te(P);
        }
      }
      function B(H) {
        H.done ? ce(H.value) : ge(H.value).then(X, oe);
      }
      B((V = V.apply(I, j || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: f } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Zh();
  Gh(() => r = document.createElement("canvas"));
  const b = (I) => n(void 0, void 0, void 0, function* () {
    const L = I.target.value;
    yield Qs(d, l, L).then((V) => n(void 0, void 0, void 0, function* () {
      v = V, t(7, s = o.find((ge) => ge.deviceId === L) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Qs(d, l).then((I) => n(this, void 0, void 0, function* () {
          t(9, k = !0), t(6, o = yield Ih()), v = I;
        })).then(() => Hh(o)).then((I) => {
          t(6, o = I);
          const j = v.getTracks().map((L) => {
            var V;
            return (V = L.getSettings()) === null || V === void 0 ? void 0 : V.deviceId;
          })[0];
          t(7, s = j && I.find((L) => L.deviceId === j) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (I) {
        if (I instanceof DOMException && I.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw I;
      }
    });
  }
  function p() {
    var I = r.getContext("2d");
    (!a || a && C) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, I.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), f && (I.scale(-1, 1), I.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (j) => {
        g(a ? "stream" : "capture", j);
      },
      "image/png",
      0.8
    ));
  }
  let C = !1, z = [], v, q, S;
  function E() {
    if (C) {
      S.stop();
      let I = new Blob(z, { type: q }), j = new FileReader();
      j.onload = function(L) {
        return n(this, void 0, void 0, function* () {
          var V;
          if (L.target) {
            let ge = new File([I], "sample." + q.substring(6));
            const ce = yield Rr([ge]);
            let te = ((V = yield h(ce, c)) === null || V === void 0 ? void 0 : V.filter(Boolean))[0];
            g("capture", te), g("stop_recording");
          }
        });
      }, j.readAsDataURL(I);
    } else {
      g("start_recording"), z = [];
      let I = ["video/webm", "video/mp4"];
      for (let j of I)
        if (MediaRecorder.isTypeSupported(j)) {
          q = j;
          break;
        }
      if (q === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      S = new MediaRecorder(v, { mimeType: q }), S.addEventListener("dataavailable", function(j) {
        z.push(j.data);
      }), S.start(200);
    }
    t(8, C = !C);
  }
  let k = !1;
  function W() {
    u === "image" && a && t(8, C = !C), u === "image" ? p() : E(), !C && v && (v.getTracks().forEach((I) => I.stop()), t(5, l.srcObject = null, l), t(9, k = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !_ && p();
    },
    500
  );
  let A = !1;
  function R(I) {
    I.preventDefault(), I.stopPropagation(), t(10, A = !1);
  }
  function G(I) {
    Fh[I ? "unshift" : "push"](() => {
      l = I, t(5, l);
    });
  }
  const ee = async () => w(), K = () => t(10, A = !0), _e = () => t(10, A = !1);
  return i.$$set = (I) => {
    "streaming" in I && t(0, a = I.streaming), "pending" in I && t(15, _ = I.pending), "root" in I && t(16, c = I.root), "mode" in I && t(1, u = I.mode), "mirror_webcam" in I && t(2, f = I.mirror_webcam), "include_audio" in I && t(17, d = I.include_audio), "i18n" in I && t(3, m = I.i18n), "upload" in I && t(18, h = I.upload);
  }, [
    a,
    u,
    f,
    m,
    Vo,
    l,
    o,
    s,
    C,
    k,
    A,
    b,
    w,
    W,
    R,
    _,
    c,
    d,
    h,
    G,
    ee,
    K,
    _e
  ];
}
class am extends Th {
  constructor(e) {
    super(), Oh(
      this,
      e,
      sm,
      om,
      Ph,
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
    return Vo;
  }
}
const {
  SvelteComponent: w6,
  attr: v6,
  create_component: k6,
  destroy_component: C6,
  detach: y6,
  element: S6,
  init: q6,
  insert: z6,
  mount_component: D6,
  noop: B6,
  safe_not_equal: E6,
  transition_in: M6,
  transition_out: L6
} = window.__gradio__svelte__internal, { createEventDispatcher: R6 } = window.__gradio__svelte__internal, {
  SvelteComponent: A6,
  add_flush_callback: W6,
  append: X6,
  attr: I6,
  bind: Y6,
  binding_callbacks: H6,
  bubble: T6,
  check_outros: j6,
  create_component: $6,
  create_slot: F6,
  destroy_component: U6,
  detach: V6,
  element: O6,
  empty: N6,
  get_all_dirty_from_scope: P6,
  get_slot_changes: K6,
  group_outros: Z6,
  init: G6,
  insert: J6,
  listen: Q6,
  mount_component: x6,
  noop: e7,
  safe_not_equal: t7,
  space: n7,
  toggle_class: i7,
  transition_in: l7,
  transition_out: o7,
  update_slot_base: s7
} = window.__gradio__svelte__internal, { createEventDispatcher: a7, tick: r7 } = window.__gradio__svelte__internal, {
  SvelteComponent: _7,
  attr: c7,
  check_outros: u7,
  create_component: f7,
  destroy_component: d7,
  detach: h7,
  element: m7,
  group_outros: g7,
  init: b7,
  insert: p7,
  mount_component: w7,
  safe_not_equal: v7,
  toggle_class: k7,
  transition_in: C7,
  transition_out: y7
} = window.__gradio__svelte__internal, {
  SvelteComponent: S7,
  add_flush_callback: q7,
  assign: z7,
  bind: D7,
  binding_callbacks: B7,
  check_outros: E7,
  create_component: M7,
  destroy_component: L7,
  detach: R7,
  empty: A7,
  flush: W7,
  get_spread_object: X7,
  get_spread_update: I7,
  group_outros: Y7,
  init: H7,
  insert: T7,
  mount_component: j7,
  safe_not_equal: $7,
  space: F7,
  transition_in: U7,
  transition_out: V7
} = window.__gradio__svelte__internal, {
  SvelteComponent: O7,
  append: N7,
  attr: P7,
  detach: K7,
  init: Z7,
  insert: G7,
  noop: J7,
  safe_not_equal: Q7,
  set_style: x7,
  svg_element: e9
} = window.__gradio__svelte__internal, {
  SvelteComponent: rm,
  append: jt,
  attr: T,
  detach: _m,
  init: cm,
  insert: um,
  noop: to,
  safe_not_equal: fm,
  set_style: $t,
  svg_element: Ct
} = window.__gradio__svelte__internal;
function dm(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Ct("svg"), t = Ct("rect"), n = Ct("rect"), l = Ct("rect"), o = Ct("rect"), s = Ct("line"), r = Ct("line"), a = Ct("line"), _ = Ct("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), $t(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), $t(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), $t(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), $t(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), $t(e, "fill-rule", "evenodd"), $t(e, "clip-rule", "evenodd"), $t(e, "stroke-linecap", "round"), $t(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      um(c, e, u), jt(e, t), jt(e, n), jt(e, l), jt(e, o), jt(e, s), jt(e, r), jt(e, a), jt(e, _);
    },
    p: to,
    i: to,
    o: to,
    d(c) {
      c && _m(e);
    }
  };
}
class hm extends rm {
  constructor(e) {
    super(), cm(this, e, null, dm, fm, {});
  }
}
const {
  SvelteComponent: mm,
  append: gm,
  attr: tt,
  detach: bm,
  init: pm,
  insert: wm,
  noop: no,
  safe_not_equal: vm,
  set_style: Ii,
  svg_element: la
} = window.__gradio__svelte__internal;
function km(i) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("path"), tt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), tt(t, "fill", "none"), tt(t, "stroke-width", "2"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "version", "1.1"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), tt(e, "xml:space", "preserve"), tt(e, "stroke", "currentColor"), Ii(e, "fill-rule", "evenodd"), Ii(e, "clip-rule", "evenodd"), Ii(e, "stroke-linecap", "round"), Ii(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      wm(n, e, l), gm(e, t);
    },
    p: no,
    i: no,
    o: no,
    d(n) {
      n && bm(e);
    }
  };
}
class Cm extends mm {
  constructor(e) {
    super(), pm(this, e, null, km, vm, {});
  }
}
const {
  SvelteComponent: ym,
  append: Sm,
  attr: nt,
  detach: qm,
  init: zm,
  insert: Dm,
  noop: io,
  safe_not_equal: Bm,
  set_style: Yi,
  svg_element: oa
} = window.__gradio__svelte__internal;
function Em(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), nt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Yi(e, "fill-rule", "evenodd"), Yi(e, "clip-rule", "evenodd"), Yi(e, "stroke-linecap", "round"), Yi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Dm(n, e, l), Sm(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && qm(e);
    }
  };
}
class Mm extends ym {
  constructor(e) {
    super(), zm(this, e, null, Em, Bm, {});
  }
}
const {
  SvelteComponent: Lm,
  append: sa,
  attr: yt,
  detach: Rm,
  init: Am,
  insert: Wm,
  noop: lo,
  safe_not_equal: Xm,
  set_style: Hi,
  svg_element: oo
} = window.__gradio__svelte__internal;
function Im(i) {
  let e, t, n;
  return {
    c() {
      e = oo("svg"), t = oo("path"), n = oo("path"), yt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), yt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "fill", "none"), yt(e, "stroke", "currentColor"), yt(e, "stroke-width", "2"), Hi(e, "fill-rule", "evenodd"), Hi(e, "clip-rule", "evenodd"), Hi(e, "stroke-linecap", "round"), Hi(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Wm(l, e, o), sa(e, t), sa(e, n);
    },
    p: lo,
    i: lo,
    o: lo,
    d(l) {
      l && Rm(e);
    }
  };
}
class Ym extends Lm {
  constructor(e) {
    super(), Am(this, e, null, Im, Xm, {});
  }
}
const {
  SvelteComponent: Hm,
  append: Tm,
  attr: Ft,
  detach: jm,
  init: $m,
  insert: Fm,
  noop: so,
  safe_not_equal: Um,
  set_style: Ti,
  svg_element: aa
} = window.__gradio__svelte__internal;
function Vm(i) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), Ft(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Ti(e, "fill-rule", "evenodd"), Ti(e, "clip-rule", "evenodd"), Ti(e, "stroke-linecap", "round"), Ti(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Fm(n, e, l), Tm(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && jm(e);
    }
  };
}
class Om extends Hm {
  constructor(e) {
    super(), $m(this, e, null, Vm, Um, {});
  }
}
const {
  SvelteComponent: Nm,
  append: Pm,
  attr: Ut,
  detach: Km,
  init: Zm,
  insert: Gm,
  noop: ao,
  safe_not_equal: Jm,
  set_style: ji,
  svg_element: ra
} = window.__gradio__svelte__internal;
function Qm(i) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), Ut(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), ji(e, "fill-rule", "evenodd"), ji(e, "clip-rule", "evenodd"), ji(e, "stroke-linecap", "round"), ji(e, "stroke-linejoin", "round"), Ut(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Gm(n, e, l), Pm(e, t);
    },
    p: ao,
    i: ao,
    o: ao,
    d(n) {
      n && Km(e);
    }
  };
}
class xm extends Nm {
  constructor(e) {
    super(), Zm(this, e, null, Qm, Jm, {});
  }
}
const {
  SvelteComponent: e0,
  append: _a,
  attr: ro,
  bubble: ca,
  create_component: t0,
  destroy_component: n0,
  detach: Or,
  element: ua,
  init: i0,
  insert: Nr,
  listen: _o,
  mount_component: l0,
  run_all: o0,
  safe_not_equal: s0,
  set_data: a0,
  set_input_value: fa,
  space: r0,
  text: _0,
  transition_in: c0,
  transition_out: u0
} = window.__gradio__svelte__internal, { createEventDispatcher: f0, afterUpdate: d0 } = window.__gradio__svelte__internal;
function h0(i) {
  let e;
  return {
    c() {
      e = _0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Nr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && a0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Or(e);
    }
  };
}
function m0(i) {
  let e, t, n, l, o, s, r;
  return t = new xa({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [h0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = ua("label"), t0(t.$$.fragment), n = r0(), l = ua("input"), ro(l, "type", "color"), l.disabled = /*disabled*/
      i[3], ro(l, "class", "svelte-16l8u73"), ro(e, "class", "block");
    },
    m(a, _) {
      Nr(a, e, _), l0(t, e, null), _a(e, n), _a(e, l), fa(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        _o(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        _o(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        _o(
          l,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], s = !0);
    },
    p(a, [_]) {
      const c = {};
      _ & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), _ & /*info*/
      4 && (c.info = /*info*/
      a[2]), _ & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: _, ctx: a }), t.$set(c), (!o || _ & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), _ & /*value*/
      1 && fa(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (c0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      u0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Or(e), n0(t), s = !1, o0(r);
    }
  };
}
function g0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = f0();
  function c() {
    _("change", n), l || _("input");
  }
  d0(() => {
    t(5, l = !1);
  });
  function u(m) {
    ca.call(this, i, m);
  }
  function f(m) {
    ca.call(this, i, m);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, l = m.value_is_output), "label" in m && t(1, o = m.label), "info" in m && t(2, s = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    o,
    s,
    r,
    a,
    l,
    u,
    f,
    d
  ];
}
class b0 extends e0 {
  constructor(e) {
    super(), i0(this, e, g0, m0, s0, {
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
  SvelteComponent: t9,
  append: n9,
  attr: i9,
  component_subscribe: l9,
  detach: o9,
  element: s9,
  init: a9,
  insert: r9,
  noop: _9,
  safe_not_equal: c9,
  set_style: u9,
  svg_element: f9,
  toggle_class: d9
} = window.__gradio__svelte__internal, { onMount: h9 } = window.__gradio__svelte__internal, {
  SvelteComponent: m9,
  append: g9,
  attr: b9,
  binding_callbacks: p9,
  check_outros: w9,
  create_component: v9,
  create_slot: k9,
  destroy_component: C9,
  destroy_each: y9,
  detach: S9,
  element: q9,
  empty: z9,
  ensure_array_like: D9,
  get_all_dirty_from_scope: B9,
  get_slot_changes: E9,
  group_outros: M9,
  init: L9,
  insert: R9,
  mount_component: A9,
  noop: W9,
  safe_not_equal: X9,
  set_data: I9,
  set_style: Y9,
  space: H9,
  text: T9,
  toggle_class: j9,
  transition_in: $9,
  transition_out: F9,
  update_slot_base: U9
} = window.__gradio__svelte__internal, { tick: V9 } = window.__gradio__svelte__internal, { onDestroy: O9 } = window.__gradio__svelte__internal, {
  SvelteComponent: N9,
  add_render_callback: P9,
  append: K9,
  attr: Z9,
  bubble: G9,
  check_outros: J9,
  create_component: Q9,
  create_in_transition: x9,
  create_out_transition: eC,
  destroy_component: tC,
  detach: nC,
  element: iC,
  group_outros: lC,
  init: oC,
  insert: sC,
  listen: aC,
  mount_component: rC,
  run_all: _C,
  safe_not_equal: cC,
  set_data: uC,
  space: fC,
  stop_propagation: dC,
  text: hC,
  transition_in: mC,
  transition_out: gC
} = window.__gradio__svelte__internal, { createEventDispatcher: bC, onMount: pC } = window.__gradio__svelte__internal, {
  SvelteComponent: wC,
  append: vC,
  attr: kC,
  bubble: CC,
  check_outros: yC,
  create_animation: SC,
  create_component: qC,
  destroy_component: zC,
  detach: DC,
  element: BC,
  ensure_array_like: EC,
  fix_and_outro_and_destroy_block: MC,
  fix_position: LC,
  group_outros: RC,
  init: AC,
  insert: WC,
  mount_component: XC,
  noop: IC,
  safe_not_equal: YC,
  set_style: HC,
  space: TC,
  transition_in: jC,
  transition_out: $C,
  update_keyed_each: FC
} = window.__gradio__svelte__internal, {
  SvelteComponent: UC,
  attr: VC,
  detach: OC,
  element: NC,
  init: PC,
  insert: KC,
  noop: ZC,
  safe_not_equal: GC,
  set_style: JC,
  toggle_class: QC
} = window.__gradio__svelte__internal, {
  SvelteComponent: xC,
  add_flush_callback: ey,
  assign: ty,
  bind: ny,
  binding_callbacks: iy,
  create_component: ly,
  destroy_component: oy,
  detach: sy,
  flush: ay,
  get_spread_object: ry,
  get_spread_update: _y,
  init: cy,
  insert: uy,
  mount_component: fy,
  safe_not_equal: dy,
  space: hy,
  transition_in: my,
  transition_out: gy
} = window.__gradio__svelte__internal;
var Pr = (i) => {
  throw TypeError(i);
}, Kr = (i, e, t) => e.has(i) || Pr("Cannot " + t), oi = (i, e, t) => (Kr(i, e, "read from private field"), e.get(i)), p0 = (i, e, t) => e.has(i) ? Pr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), w0 = (i, e, t, n) => (Kr(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var Nt;
class by extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = oi(this, Nt) + t; ; ) {
          const l = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (l === -1 || l - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (l === -1)
            break;
          const s = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, s)), t = t.slice(l + 1);
        }
        w0(this, Nt, t);
      },
      flush: (t) => {
        if (oi(this, Nt) === "")
          return;
        const n = e.allowCR && oi(this, Nt).endsWith("\r") ? oi(this, Nt).slice(0, -1) : oi(this, Nt);
        t.enqueue(n);
      }
    }), p0(this, Nt, "");
  }
}
Nt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: v0,
  append: Zr,
  attr: ae,
  bubble: k0,
  check_outros: C0,
  create_slot: Gr,
  detach: Si,
  element: Cl,
  empty: y0,
  get_all_dirty_from_scope: Jr,
  get_slot_changes: Qr,
  group_outros: S0,
  init: q0,
  insert: qi,
  listen: z0,
  safe_not_equal: D0,
  set_style: Me,
  space: xr,
  src_url_equal: al,
  toggle_class: jn,
  transition_in: rl,
  transition_out: _l,
  update_slot_base: e_
} = window.__gradio__svelte__internal;
function B0(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && da(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = Gr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Cl("button"), r && r.c(), t = xr(), _ && _.c(), ae(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], jn(e, "hidden", !/*visible*/
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
      qi(c, e, u), r && r.m(e, null), Zr(e, t), _ && _.m(e, null), l = !0, o || (s = z0(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = da(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || u & /*$$scope*/
      2048) && e_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? Qr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Jr(
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
      30) && jn(e, "hidden", !/*visible*/
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
      l || (rl(_, c), l = !0);
    },
    o(c) {
      _l(_, c), l = !1;
    },
    d(c) {
      c && Si(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function E0(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && ha(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = Gr(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Cl("a"), o && o.c(), t = xr(), r && r.c(), ae(
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
      ), jn(e, "hidden", !/*visible*/
      i[2]), jn(
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
    m(a, _) {
      qi(a, e, _), o && o.m(e, null), Zr(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = ha(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && e_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? Qr(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : Jr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && ae(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && ae(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!l || _ & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && jn(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && jn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Me(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (rl(r, a), l = !0);
    },
    o(a) {
      _l(r, a), l = !1;
    },
    d(a) {
      a && Si(e), o && o.d(), r && r.d(a);
    }
  };
}
function da(i) {
  let e, t, n;
  return {
    c() {
      e = Cl("img"), ae(e, "class", "button-icon svelte-8huxfn"), al(e.src, t = /*icon*/
      i[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      qi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !al(e.src, t = /*icon*/
      l[7].url) && ae(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ae(e, "alt", n);
    },
    d(l) {
      l && Si(e);
    }
  };
}
function ha(i) {
  let e, t, n;
  return {
    c() {
      e = Cl("img"), ae(e, "class", "button-icon svelte-8huxfn"), al(e.src, t = /*icon*/
      i[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      qi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !al(e.src, t = /*icon*/
      l[7].url) && ae(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ae(e, "alt", n);
    },
    d(l) {
      l && Si(e);
    }
  };
}
function M0(i) {
  let e, t, n, l;
  const o = [E0, B0], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = y0();
    },
    m(a, _) {
      s[e].m(a, _), qi(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (S0(), _l(s[c], 1, 1, () => {
        s[c] = null;
      }), C0(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), rl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (rl(t), l = !0);
    },
    o(a) {
      _l(t), l = !1;
    },
    d(a) {
      a && Si(n), s[e].d(a);
    }
  };
}
function L0(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: f = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    k0.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, o = b.elem_id), "elem_classes" in b && t(1, s = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, _ = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, f = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, m = b.scale), "min_width" in b && t(10, h = b.min_width), "$$scope" in b && t(11, l = b.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    h,
    l,
    n,
    g
  ];
}
class Eo extends v0 {
  constructor(e) {
    super(), q0(this, e, L0, M0, D0, {
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
  SvelteComponent: py,
  create_component: wy,
  destroy_component: vy,
  detach: ky,
  init: Cy,
  insert: yy,
  mount_component: Sy,
  safe_not_equal: qy,
  set_data: zy,
  text: Dy,
  transition_in: By,
  transition_out: Ey
} = window.__gradio__svelte__internal, {
  SvelteComponent: R0,
  add_render_callback: t_,
  append: $i,
  attr: Te,
  binding_callbacks: ma,
  check_outros: A0,
  create_bidirectional_transition: ga,
  destroy_each: W0,
  detach: pi,
  element: cl,
  empty: X0,
  ensure_array_like: ba,
  group_outros: I0,
  init: Y0,
  insert: wi,
  listen: Mo,
  prevent_default: H0,
  run_all: T0,
  safe_not_equal: j0,
  set_data: $0,
  set_style: An,
  space: Lo,
  text: F0,
  toggle_class: rt,
  transition_in: co,
  transition_out: pa
} = window.__gradio__svelte__internal, { createEventDispatcher: U0 } = window.__gradio__svelte__internal;
function wa(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function va(i) {
  let e, t, n, l, o, s = ba(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = ka(wa(i, s, a));
  return {
    c() {
      e = cl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Te(e, "class", "options svelte-yuohum"), Te(e, "role", "listbox"), An(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), An(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), An(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      wi(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = Mo(e, "mousedown", H0(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = ba(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = wa(a, s, c);
          r[c] ? r[c].p(u, _) : (r[c] = ka(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && An(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && An(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && An(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && t_(() => {
        n && (t || (t = ga(e, Ss, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ga(e, Ss, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && pi(e), W0(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function ka(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = cl("li"), t = cl("span"), t.textContent = "✓", n = Lo(), o = F0(l), s = Lo(), Te(t, "class", "inner-item svelte-yuohum"), rt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Te(e, "class", "item svelte-yuohum"), Te(e, "data-index", r = /*index*/
      i[26]), Te(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Te(e, "data-testid", "dropdown-option"), Te(e, "role", "option"), Te(e, "aria-selected", _ = /*selected_indices*/
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
      wi(c, e, u), $i(e, t), $i(e, n), $i(e, o), $i(e, s);
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
      ][0] + "") && $0(o, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Te(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Te(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Te(e, "aria-selected", _), u & /*selected_indices, filtered_indices*/
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
      c && pi(e);
    }
  };
}
function V0(i) {
  let e, t, n, l, o;
  t_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && va(i)
  );
  return {
    c() {
      e = cl("div"), t = Lo(), s && s.c(), n = X0(), Te(e, "class", "reference");
    },
    m(r, a) {
      wi(r, e, a), i[20](e), wi(r, t, a), s && s.m(r, a), wi(r, n, a), l || (o = [
        Mo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Mo(
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
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && co(s, 1)) : (s = va(r), s.c(), co(s, 1), s.m(n.parentNode, n)) : s && (I0(), pa(s, 1, 1, () => {
        s = null;
      }), A0());
    },
    i(r) {
      co(s);
    },
    o(r) {
      pa(s);
    },
    d(r) {
      r && (pi(e), pi(t), pi(n)), i[20](null), s && s.d(r), l = !1, T0(o);
    }
  };
}
function O0(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, u, f, d, m, h, g, b, w, p;
  function C() {
    const { top: A, bottom: R } = h.getBoundingClientRect();
    t(16, u = A), t(17, f = p - R);
  }
  let z = null;
  function v() {
    r && (z !== null && clearTimeout(z), z = setTimeout(
      () => {
        C(), z = null;
      },
      10
    ));
  }
  const q = U0();
  function S() {
    t(11, p = window.innerHeight);
  }
  function E(A) {
    ma[A ? "unshift" : "push"](() => {
      h = A, t(6, h);
    });
  }
  const k = (A) => q("change", A);
  function W(A) {
    ma[A ? "unshift" : "push"](() => {
      g = A, t(7, g);
    });
  }
  return i.$$set = (A) => {
    "choices" in A && t(0, o = A.choices), "filtered_indices" in A && t(1, s = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, _ = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && _.length > 0) {
          let R = g.querySelectorAll("li");
          for (const G of Array.from(R))
            if (G.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, G.offsetTop);
              break;
            }
        }
        C();
        const A = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, m = (A == null ? void 0 : A.width) || 0);
      }
      f > u ? (t(10, w = f), t(9, b = null)) : (t(9, b = `${f + d}px`), t(10, w = u - d));
    }
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    h,
    g,
    m,
    b,
    w,
    p,
    v,
    q,
    n,
    l,
    u,
    f,
    d,
    S,
    E,
    k,
    W
  ];
}
class N0 extends R0 {
  constructor(e) {
    super(), Y0(this, e, O0, V0, j0, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function P0(i, e) {
  return (i % e + e) % e;
}
function Ca(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function K0(i, e, t) {
  i("change", e), t || i("input");
}
function Z0(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[P0(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: My,
  append: Ly,
  attr: Ry,
  binding_callbacks: Ay,
  check_outros: Wy,
  create_component: Xy,
  destroy_component: Iy,
  destroy_each: Yy,
  detach: Hy,
  element: Ty,
  ensure_array_like: jy,
  group_outros: $y,
  init: Fy,
  insert: Uy,
  listen: Vy,
  mount_component: Oy,
  prevent_default: Ny,
  run_all: Py,
  safe_not_equal: Ky,
  set_data: Zy,
  set_input_value: Gy,
  space: Jy,
  text: Qy,
  toggle_class: xy,
  transition_in: eS,
  transition_out: tS
} = window.__gradio__svelte__internal, { afterUpdate: nS, createEventDispatcher: iS } = window.__gradio__svelte__internal, {
  SvelteComponent: G0,
  append: nn,
  attr: He,
  binding_callbacks: J0,
  check_outros: Q0,
  create_component: Ro,
  destroy_component: Ao,
  detach: Oo,
  element: In,
  group_outros: x0,
  init: eg,
  insert: No,
  listen: si,
  mount_component: Wo,
  run_all: tg,
  safe_not_equal: ng,
  set_data: ig,
  set_input_value: ya,
  space: uo,
  text: lg,
  toggle_class: Wn,
  transition_in: Yn,
  transition_out: hi
} = window.__gradio__svelte__internal, { onMount: og } = window.__gradio__svelte__internal, { createEventDispatcher: sg, afterUpdate: ag } = window.__gradio__svelte__internal;
function rg(i) {
  let e;
  return {
    c() {
      e = lg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      No(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && ig(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Oo(e);
    }
  };
}
function Sa(i) {
  let e, t, n;
  return t = new Yo({}), {
    c() {
      e = In("div"), Ro(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      No(l, e, o), Wo(t, e, null), n = !0;
    },
    i(l) {
      n || (Yn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      hi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Oo(e), Ao(t);
    }
  };
}
function _g(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m;
  t = new xa({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [rg] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && Sa();
  return u = new N0({
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
      e = In("div"), Ro(t.$$.fragment), n = uo(), l = In("div"), o = In("div"), s = In("div"), r = In("input"), _ = uo(), h && h.c(), c = uo(), Ro(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
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
      i[7], Wn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), He(s, "class", "secondary-wrap svelte-1m1zvyj"), He(o, "class", "wrap-inner svelte-1m1zvyj"), Wn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), He(l, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), Wn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      No(g, e, b), Wo(t, e, null), nn(e, n), nn(e, l), nn(l, o), nn(o, s), nn(s, r), ya(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), nn(s, _), h && h.m(s, null), nn(l, c), Wo(u, l, null), f = !0, d || (m = [
        si(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        si(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        si(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        si(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        si(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], d = !0);
    },
    p(g, b) {
      const w = {};
      b[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      g[4]), b[0] & /*info*/
      2 && (w.info = /*info*/
      g[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: b, ctx: g }), t.$set(w), (!f || b[0] & /*show_options*/
      4096) && He(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!f || b[0] & /*label*/
      1) && He(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!f || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!f || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && ya(
        r,
        /*input_text*/
        g[9]
      ), (!f || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Wn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (x0(), hi(h, 1, 1, () => {
        h = null;
      }), Q0()) : h ? b[0] & /*disabled*/
      8 && Yn(h, 1) : (h = Sa(), h.c(), Yn(h, 1), h.m(s, null)), (!f || b[0] & /*show_options*/
      4096) && Wn(
        o,
        "show_options",
        /*show_options*/
        g[12]
      );
      const p = {};
      b[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      g[12]), b[0] & /*choices*/
      4 && (p.choices = /*choices*/
      g[2]), b[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      g[10]), b[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      g[3]), b[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), b[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      g[14]), u.$set(p), (!f || b[0] & /*container*/
      32) && Wn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      f || (Yn(t.$$.fragment, g), Yn(h), Yn(u.$$.fragment, g), f = !0);
    },
    o(g) {
      hi(t.$$.fragment, g), hi(h), hi(u.$$.fragment, g), f = !1;
    },
    d(g) {
      g && Oo(e), Ao(t), i[29](null), h && h.d(), Ao(u), d = !1, tg(m);
    }
  };
}
function cg(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: u } = e, { container: f = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, w, p = "", C = "", z = !1, v = [], q = null, S = null, E;
  const k = sg();
  o ? (E = a.map((L) => L[1]).indexOf(o), S = E, S === -1 ? (s = o, S = null) : ([p, s] = a[S], C = p), A()) : a.length > 0 && (E = 0, S = 0, [p, o] = a[S], s = o, C = p);
  function W() {
    t(13, b = a.map((L) => L[0])), t(24, w = a.map((L) => L[1]));
  }
  function A() {
    W(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, S = null)) : w.includes(o) ? (t(9, p = b[w.indexOf(o)]), t(11, S = w.indexOf(o))) : d ? (t(9, p = o), t(11, S = null)) : (t(9, p = ""), t(11, S = null)), t(27, E = S);
  }
  function R(L) {
    if (t(11, S = parseInt(L.detail.target.dataset.index)), isNaN(S)) {
      t(11, S = null);
      return;
    }
    t(12, g = !1), t(14, q = null), h.blur();
  }
  function G(L) {
    t(10, v = a.map((V, ge) => ge)), t(12, g = !0), k("focus");
  }
  function ee() {
    d ? t(20, o = p) : t(9, p = b[w.indexOf(o)]), t(12, g = !1), t(14, q = null), k("blur");
  }
  function K(L) {
    t(12, [g, q] = Z0(L, q, v), g, (t(14, q), t(2, a), t(23, _), t(6, d), t(9, p), t(10, v), t(8, h), t(25, C), t(11, S), t(27, E), t(26, z), t(24, w))), L.key === "Enter" && (q !== null ? (t(11, S = q), t(12, g = !1), h.blur(), t(14, q = null)) : b.includes(p) ? (t(11, S = b.indexOf(p)), t(12, g = !1), t(14, q = null), h.blur()) : d && (t(20, o = p), t(11, S = null), t(12, g = !1), t(14, q = null), h.blur()), k("enter", o));
  }
  ag(() => {
    t(21, r = !1), t(26, z = !0);
  }), og(() => {
    h.focus();
  });
  function _e() {
    p = this.value, t(9, p), t(11, S), t(27, E), t(26, z), t(2, a), t(24, w);
  }
  function I(L) {
    J0[L ? "unshift" : "push"](() => {
      h = L, t(8, h);
    });
  }
  const j = (L) => k("key_up", { key: L.key, input_value: p });
  return i.$$set = (L) => {
    "label" in L && t(0, n = L.label), "info" in L && t(1, l = L.info), "value" in L && t(20, o = L.value), "value_is_output" in L && t(21, r = L.value_is_output), "choices" in L && t(2, a = L.choices), "disabled" in L && t(3, c = L.disabled), "show_label" in L && t(4, u = L.show_label), "container" in L && t(5, f = L.container), "allow_custom_value" in L && t(6, d = L.allow_custom_value), "filterable" in L && t(7, m = L.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && S !== E && S !== null && z && (t(9, [p, o] = a[S], p, (t(20, o), t(11, S), t(27, E), t(26, z), t(2, a), t(24, w))), t(27, E = S), k("select", {
      index: S,
      value: w[S],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (A(), K0(k, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && W(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || A(), t(23, _ = a), t(10, v = Ca(a, p)), !d && v.length > 0 && t(14, q = v[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== C && (t(10, v = Ca(a, p)), t(25, C = p), !d && v.length > 0 && t(14, q = v[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    f,
    d,
    m,
    h,
    p,
    v,
    S,
    g,
    b,
    q,
    k,
    R,
    G,
    ee,
    K,
    o,
    r,
    s,
    _,
    w,
    C,
    z,
    E,
    _e,
    I,
    j
  ];
}
class ug extends G0 {
  constructor(e) {
    super(), eg(
      this,
      e,
      cg,
      _g,
      ng,
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
  SvelteComponent: lS,
  attr: oS,
  detach: sS,
  element: aS,
  init: rS,
  insert: _S,
  noop: cS,
  safe_not_equal: uS,
  toggle_class: fS
} = window.__gradio__svelte__internal, {
  SvelteComponent: dS,
  add_flush_callback: hS,
  assign: mS,
  bind: gS,
  binding_callbacks: bS,
  check_outros: pS,
  create_component: wS,
  destroy_component: vS,
  detach: kS,
  empty: CS,
  get_spread_object: yS,
  get_spread_update: SS,
  group_outros: qS,
  init: zS,
  insert: DS,
  mount_component: BS,
  safe_not_equal: ES,
  space: MS,
  transition_in: LS,
  transition_out: RS
} = window.__gradio__svelte__internal, {
  SvelteComponent: fg,
  append: Ve,
  attr: $n,
  check_outros: Xo,
  create_component: fn,
  destroy_component: dn,
  detach: Qn,
  element: _t,
  group_outros: Io,
  init: dg,
  insert: xn,
  listen: hg,
  mount_component: hn,
  safe_not_equal: mg,
  set_style: Fn,
  space: ai,
  text: Po,
  toggle_class: qa,
  transition_in: qe,
  transition_out: je
} = window.__gradio__svelte__internal, { createEventDispatcher: gg } = window.__gradio__svelte__internal, { onMount: bg } = window.__gradio__svelte__internal;
function za(i) {
  let e, t, n, l, o, s, r;
  const a = [wg, pg], _ = [];
  function c(u, f) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = _t("div"), t = _t("button"), l.c(), $n(t, "class", "icon svelte-d9x7u0"), $n(t, "aria-label", "Lock label detail"), qa(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Fn(e, "margin-right", "8px");
    },
    m(u, f) {
      xn(u, e, f), Ve(e, t), _[n].m(t, null), o = !0, s || (r = hg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(u, f) {
      let d = n;
      n = c(u), n !== d && (Io(), je(_[d], 1, 1, () => {
        _[d] = null;
      }), Xo(), l = _[n], l || (l = _[n] = a[n](u), l.c()), qe(l, 1), l.m(t, null)), (!o || f & /*labelDetailLock*/
      4) && qa(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (qe(l), o = !0);
    },
    o(u) {
      je(l), o = !1;
    },
    d(u) {
      u && Qn(e), _[n].d(), s = !1, r();
    }
  };
}
function pg(i) {
  let e, t;
  return e = new xm({}), {
    c() {
      fn(e.$$.fragment);
    },
    m(n, l) {
      hn(e, n, l), t = !0;
    },
    i(n) {
      t || (qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dn(e, n);
    }
  };
}
function wg(i) {
  let e, t;
  return e = new Om({}), {
    c() {
      fn(e.$$.fragment);
    },
    m(n, l) {
      hn(e, n, l), t = !0;
    },
    i(n) {
      t || (qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dn(e, n);
    }
  };
}
function vg(i) {
  let e;
  return {
    c() {
      e = Po("Cancel");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function Da(i) {
  let e, t, n;
  return t = new Eo({
    props: {
      variant: "stop",
      $$slots: { default: [kg] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = _t("div"), fn(t.$$.fragment), Fn(e, "margin-right", "8px");
    },
    m(l, o) {
      xn(l, e, o), hn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (qe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      je(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Qn(e), dn(t);
    }
  };
}
function kg(i) {
  let e;
  return {
    c() {
      e = Po("Remove");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function Cg(i) {
  let e;
  return {
    c() {
      e = Po("OK");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function yg(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m, h, g, b, w = !/*showRemove*/
  i[4] && za(i);
  s = new ug({
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
  }), s.$on(
    "change",
    /*onDropDownChange*/
    i[6]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    i[8]
  ), _ = new b0({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), _.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), f = new Eo({
    props: {
      $$slots: { default: [vg] },
      $$scope: { ctx: i }
    }
  }), f.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && Da(i)
  );
  return g = new Eo({
    props: {
      variant: "primary",
      $$slots: { default: [Cg] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = _t("div"), t = _t("div"), n = _t("span"), w && w.c(), l = ai(), o = _t("div"), fn(s.$$.fragment), r = ai(), a = _t("div"), fn(_.$$.fragment), c = ai(), u = _t("div"), fn(f.$$.fragment), d = ai(), p && p.c(), m = ai(), h = _t("div"), fn(g.$$.fragment), Fn(o, "margin-right", "10px"), Fn(a, "margin-right", "40px"), Fn(a, "margin-bottom", "8px"), Fn(u, "margin-right", "8px"), $n(n, "class", "model-content svelte-d9x7u0"), $n(t, "class", "modal-container svelte-d9x7u0"), $n(e, "class", "modal svelte-d9x7u0"), $n(e, "id", "model-box-edit");
    },
    m(C, z) {
      xn(C, e, z), Ve(e, t), Ve(t, n), w && w.m(n, null), Ve(n, l), Ve(n, o), hn(s, o, null), Ve(n, r), Ve(n, a), hn(_, a, null), Ve(n, c), Ve(n, u), hn(f, u, null), Ve(n, d), p && p.m(n, null), Ve(n, m), Ve(n, h), hn(g, h, null), b = !0;
    },
    p(C, [z]) {
      /*showRemove*/
      C[4] ? w && (Io(), je(w, 1, 1, () => {
        w = null;
      }), Xo()) : w ? (w.p(C, z), z & /*showRemove*/
      16 && qe(w, 1)) : (w = za(C), w.c(), qe(w, 1), w.m(n, l));
      const v = {};
      z & /*currentLabel*/
      1 && (v.value = /*currentLabel*/
      C[0]), z & /*choices*/
      8 && (v.choices = /*choices*/
      C[3]), s.$set(v);
      const q = {};
      z & /*currentColor*/
      2 && (q.value = /*currentColor*/
      C[1]), _.$set(q);
      const S = {};
      z & /*$$scope*/
      262144 && (S.$$scope = { dirty: z, ctx: C }), f.$set(S), /*showRemove*/
      C[4] ? p ? (p.p(C, z), z & /*showRemove*/
      16 && qe(p, 1)) : (p = Da(C), p.c(), qe(p, 1), p.m(n, m)) : p && (Io(), je(p, 1, 1, () => {
        p = null;
      }), Xo());
      const E = {};
      z & /*$$scope*/
      262144 && (E.$$scope = { dirty: z, ctx: C }), g.$set(E);
    },
    i(C) {
      b || (qe(w), qe(s.$$.fragment, C), qe(_.$$.fragment, C), qe(f.$$.fragment, C), qe(p), qe(g.$$.fragment, C), b = !0);
    },
    o(C) {
      je(w), je(s.$$.fragment, C), je(_.$$.fragment, C), je(f.$$.fragment, C), je(p), je(g.$$.fragment, C), b = !1;
    },
    d(C) {
      C && Qn(e), w && w.d(), dn(s), dn(_), dn(f), p && p.d(), dn(g);
    }
  };
}
function Sg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = gg();
  function f(z) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: z
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(z) {
    const { detail: v } = z;
    let q = v;
    Number.isInteger(q) ? (Array.isArray(s) && q < s.length && t(1, a = s[q]), Array.isArray(o) && q < o.length && t(0, l = o[q][0])) : t(0, l = q);
  }
  function m(z) {
    const { detail: v } = z;
    t(1, a = v);
  }
  function h(z) {
    d(z), f(1);
  }
  function g(z) {
    t(2, c = !c);
  }
  function b(z) {
    switch (z.key.toLowerCase()) {
      case "enter":
        f(1);
        break;
      case "escape":
        f(0);
        break;
    }
  }
  bg(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const w = () => f(0), p = () => f(-1), C = () => f(1);
  return i.$$set = (z) => {
    "label" in z && t(10, n = z.label), "currentLabel" in z && t(0, l = z.currentLabel), "choices" in z && t(3, o = z.choices), "choicesColors" in z && t(11, s = z.choicesColors), "color" in z && t(12, r = z.color), "currentColor" in z && t(1, a = z.currentColor), "showRemove" in z && t(4, _ = z.showRemove), "labelDetailLock" in z && t(2, c = z.labelDetailLock);
  }, [
    l,
    a,
    c,
    o,
    _,
    f,
    d,
    m,
    h,
    g,
    n,
    s,
    r,
    w,
    p,
    C
  ];
}
class Ko extends fg {
  constructor(e) {
    super(), dg(this, e, Sg, yg, mg, {
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
const we = (i, e, t) => Math.min(Math.max(i, e), t);
function fo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class ho {
  constructor(e, t, n, l, o, s, r, a, _, c, u, f, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, w = 2, p = 4, C = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (z) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let v = (z.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, q = (z.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        v = we(v, -this._xmin, S - this._xmax), q = we(q, -this._ymin, E - this._ymax), this._xmin += v, this._ymin += q, this._xmax += v, this._ymax += q, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (z) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [v, q] = this.toBoxCoordinates(z.clientX, z.clientY);
        v = (v - this.offsetMouseX) / this.canvasWindow.scale, q = (q - this.offsetMouseY) / this.canvasWindow.scale, v > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = v, this.creatingAnchorX = "xmin") : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = v : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = v : v < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = v, this.creatingAnchorX = "xmax"), q > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = q, this.creatingAnchorY = "ymin") : q > this._ymin && q < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = q : q > this._ymin && q < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = q : q < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = q, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (z) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, q = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = we(this._xmin, 0, v - this.minSize), this._ymin = we(this._ymin, 0, q - this.minSize), this._xmax = we(this._xmax, this.minSize, v), this._ymax = we(this._ymax, this.minSize, q), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > v ? (this._xmin -= this._xmax - v, this._xmax = v) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > q ? (this._ymin -= this._ymax - q, this._ymax = q) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (z) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const v = z.clientX, q = z.clientY, S = (v - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, E = (q - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, W = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += S, this._ymin += E, this._xmin = we(this._xmin, 0, this._xmax - this.minSize), this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += S, this._ymin += E, this._xmax = we(this._xmax, this._xmin + this.minSize, k), this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += S, this._ymax += E, this._xmax = we(this._xmax, this._xmin + this.minSize, k), this._ymax = we(this._ymax, this._ymin + this.minSize, W);
            break;
          case 3:
            this._xmin += S, this._ymax += E, this._xmin = we(this._xmin, 0, this._xmax - this.minSize), this._ymax = we(this._ymax, this._ymin + this.minSize, W);
            break;
          case 4:
            this._ymin += E, this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += S, this._xmax = we(this._xmax, this._xmin + this.minSize, k);
            break;
          case 6:
            this._ymax += E, this._ymax = we(this._ymax, this._ymin + this.minSize, W);
            break;
          case 7:
            this._xmin += S, this._xmin = we(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = C, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = f, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = w, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = fo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = fo(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = fo(this.color, 1);
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
    const [t, n, l, o] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - o, this._xmax = this.canvasWindow.imageWidth - l, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = l, this._xmax = o, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const ln = [
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
], Fi = (i, e, t) => Math.min(Math.max(i, e), t);
class qg {
  constructor(e, t) {
    this.stopDrag = () => {
      this.pointersCache.size === 0 ? (this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag)) : this.pointersCache.size === 1 && (this.isDragging = !0, this.startDragX = this.pointersCache.values().next().value.clientX, this.startDragY = this.pointersCache.values().next().value.clientY);
    }, this.handleDrag = (n) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        if (this.scale == 1) {
          this.offsetX = (this.canvasWidth - this.imageWidth) / 2, this.offsetY = 0, this.renderCallBack();
          return;
        }
        let l = n.clientX - this.startDragX, o = n.clientY - this.startDragY;
        this.imageWidth * this.scale > this.canvasWidth ? l = Fi(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = Fi(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = Fi(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = Fi(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: zg,
  append: Oe,
  attr: se,
  binding_callbacks: Ba,
  bubble: mo,
  check_outros: Un,
  create_component: zt,
  destroy_component: Dt,
  detach: Pt,
  element: ct,
  empty: Dg,
  group_outros: Vn,
  init: Bg,
  insert: Kt,
  listen: Le,
  mount_component: Bt,
  noop: n_,
  run_all: i_,
  safe_not_equal: Eg,
  set_style: Ui,
  space: qt,
  toggle_class: Vi,
  transition_in: Q,
  transition_out: ue
} = window.__gradio__svelte__internal, { onMount: Mg, createEventDispatcher: Lg } = window.__gradio__svelte__internal;
function Ea(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m, h, g, b;
  n = new hm({}), s = new Cm({});
  let w = (
    /*showRemoveButton*/
    i[1] && Ma(i)
  ), p = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && La(i);
  return u = new Pf({}), m = new Rf({}), {
    c() {
      e = ct("span"), t = ct("button"), zt(n.$$.fragment), l = qt(), o = ct("button"), zt(s.$$.fragment), r = qt(), w && w.c(), a = qt(), p && p.c(), _ = qt(), c = ct("button"), zt(u.$$.fragment), f = qt(), d = ct("button"), zt(m.$$.fragment), se(t, "class", "icon svelte-1m8vz1h"), se(t, "aria-label", "Create box"), se(t, "title", "Create box (C)"), Vi(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), se(o, "class", "icon svelte-1m8vz1h"), se(o, "aria-label", "Drag boxes"), se(o, "title", "Drag boxes (D)"), Vi(
        o,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), se(c, "class", "icon svelte-1m8vz1h"), se(c, "aria-label", "Rotate counterclockwise"), se(c, "title", "Rotate counterclockwise"), se(d, "class", "icon svelte-1m8vz1h"), se(d, "aria-label", "Rotate clockwise"), se(d, "title", "Rotate clockwise"), se(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(C, z) {
      Kt(C, e, z), Oe(e, t), Bt(n, t, null), Oe(e, l), Oe(e, o), Bt(s, o, null), Oe(e, r), w && w.m(e, null), Oe(e, a), p && p.m(e, null), Oe(e, _), Oe(e, c), Bt(u, c, null), Oe(e, f), Oe(e, d), Bt(m, d, null), h = !0, g || (b = [
        Le(
          t,
          "click",
          /*click_handler*/
          i[42]
        ),
        Le(
          o,
          "click",
          /*click_handler_1*/
          i[43]
        ),
        Le(
          c,
          "click",
          /*click_handler_4*/
          i[46]
        ),
        Le(
          d,
          "click",
          /*click_handler_5*/
          i[47]
        )
      ], g = !0);
    },
    p(C, z) {
      (!h || z[0] & /*mode, Mode*/
      4352) && Vi(
        t,
        "selected",
        /*mode*/
        C[12] === /*Mode*/
        C[8].creation
      ), (!h || z[0] & /*mode, Mode*/
      4352) && Vi(
        o,
        "selected",
        /*mode*/
        C[12] === /*Mode*/
        C[8].drag
      ), /*showRemoveButton*/
      C[1] ? w ? (w.p(C, z), z[0] & /*showRemoveButton*/
      2 && Q(w, 1)) : (w = Ma(C), w.c(), Q(w, 1), w.m(e, a)) : w && (Vn(), ue(w, 1, 1, () => {
        w = null;
      }), Un()), !/*disableEditBoxes*/
      C[5] && /*labelDetailLock*/
      C[16] ? p ? (p.p(C, z), z[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && Q(p, 1)) : (p = La(C), p.c(), Q(p, 1), p.m(e, _)) : p && (Vn(), ue(p, 1, 1, () => {
        p = null;
      }), Un());
    },
    i(C) {
      h || (Q(n.$$.fragment, C), Q(s.$$.fragment, C), Q(w), Q(p), Q(u.$$.fragment, C), Q(m.$$.fragment, C), h = !0);
    },
    o(C) {
      ue(n.$$.fragment, C), ue(s.$$.fragment, C), ue(w), ue(p), ue(u.$$.fragment, C), ue(m.$$.fragment, C), h = !1;
    },
    d(C) {
      C && Pt(e), Dt(n), Dt(s), w && w.d(), p && p.d(), Dt(u), Dt(m), g = !1, i_(b);
    }
  };
}
function Ma(i) {
  let e, t, n, l, o;
  return t = new Mm({}), {
    c() {
      e = ct("button"), zt(t.$$.fragment), se(e, "class", "icon svelte-1m8vz1h"), se(e, "aria-label", "Remove box"), se(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      Kt(s, e, r), Bt(t, e, null), n = !0, l || (o = Le(
        e,
        "click",
        /*click_handler_2*/
        i[44]
      ), l = !0);
    },
    p: n_,
    i(s) {
      n || (Q(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ue(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Pt(e), Dt(t), l = !1, o();
    }
  };
}
function La(i) {
  let e, t, n, l, o;
  return t = new Ym({}), {
    c() {
      e = ct("button"), zt(t.$$.fragment), se(e, "class", "icon svelte-1m8vz1h"), se(e, "aria-label", "Edit label"), se(e, "title", "Edit label");
    },
    m(s, r) {
      Kt(s, e, r), Bt(t, e, null), n = !0, l || (o = Le(
        e,
        "click",
        /*click_handler_3*/
        i[45]
      ), l = !0);
    },
    p: n_,
    i(s) {
      n || (Q(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ue(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Pt(e), Dt(t), l = !1, o();
    }
  };
}
function Ra(i) {
  let e, t;
  return e = new Ko({
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
        i[0].boxes.length ? vn(
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
      zt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Aa(i) {
  let e, t;
  return e = new Ko({
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
        i[0].boxes.length ? vn(
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
      zt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (o.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(o);
    },
    i(n) {
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Wa(i) {
  let e, t;
  return e = new Ko({
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
        i[0].boxes.length ? vn(
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
      zt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (o.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(o);
    },
    i(n) {
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Rg(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f = (
    /*interactive*/
    i[2] && Ea(i)
  ), d = (
    /*editModalVisible*/
    i[13] && Ra(i)
  ), m = (
    /*newModalVisible*/
    i[14] && Aa(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[15] && Wa(i)
  );
  return {
    c() {
      e = ct("div"), t = ct("div"), n = ct("canvas"), l = qt(), f && f.c(), o = qt(), d && d.c(), s = qt(), m && m.c(), r = qt(), h && h.c(), a = Dg(), Ui(
        n,
        "height",
        /*height*/
        i[6]
      ), Ui(
        n,
        "width",
        /*width*/
        i[7]
      ), se(n, "class", "canvas-annotator svelte-1m8vz1h"), se(t, "class", "canvas-container svelte-1m8vz1h"), se(e, "class", "annotator-container"), se(e, "tabindex", "0");
    },
    m(g, b) {
      Kt(g, e, b), Oe(e, t), Oe(t, n), i[41](n), Oe(e, l), f && f.m(e, null), i[48](e), Kt(g, o, b), d && d.m(g, b), Kt(g, s, b), m && m.m(g, b), Kt(g, r, b), h && h.m(g, b), Kt(g, a, b), _ = !0, c || (u = [
        Le(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[17]
        ),
        Le(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[18]
        ),
        Le(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[20]
        ),
        Le(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[19]
        ),
        Le(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[25]
        ),
        Le(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[22]
        ),
        Le(
          e,
          "keydown",
          /*handleKeyPress*/
          i[21]
        ),
        Le(
          e,
          "click",
          /*click_handler_6*/
          i[49]
        )
      ], c = !0);
    },
    p(g, b) {
      (!_ || b[0] & /*height*/
      64) && Ui(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && Ui(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? f ? (f.p(g, b), b[0] & /*interactive*/
      4 && Q(f, 1)) : (f = Ea(g), f.c(), Q(f, 1), f.m(e, null)) : f && (Vn(), ue(f, 1, 1, () => {
        f = null;
      }), Un()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && Q(d, 1)) : (d = Ra(g), d.c(), Q(d, 1), d.m(s.parentNode, s)) : d && (Vn(), ue(d, 1, 1, () => {
        d = null;
      }), Un()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && Q(m, 1)) : (m = Aa(g), m.c(), Q(m, 1), m.m(r.parentNode, r)) : m && (Vn(), ue(m, 1, 1, () => {
        m = null;
      }), Un()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && Q(h, 1)) : (h = Wa(g), h.c(), Q(h, 1), h.m(a.parentNode, a)) : h && (Vn(), ue(h, 1, 1, () => {
        h = null;
      }), Un());
    },
    i(g) {
      _ || (Q(f), Q(d), Q(m), Q(h), _ = !0);
    },
    o(g) {
      ue(f), ue(d), ue(m), ue(h), _ = !1;
    },
    d(g) {
      g && (Pt(e), Pt(o), Pt(s), Pt(r), Pt(a)), i[41](null), f && f.d(), i[48](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, i_(u);
    }
  };
}
const Xa = 100;
function Oi(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function vn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Ag(i, e, t) {
  var n;
  (function(y) {
    y[y.creation = 0] = "creation", y[y.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: _ } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: f = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: b = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: p = !0 } = e, { useDefaultLabel: C = !1 } = e, { enableKeyboardShortcuts: z = !0 } = e;
  w === null && (w = m);
  let v, q, S, E = null, k = -1, W = n.drag, A = /* @__PURE__ */ new Map(), R = new qg(H, A);
  u !== null && u.boxes.length == 0 && (W = n.creation);
  let G = 0, ee = 0, K = 0, _e = 0, I = 1, j = 0, L = 0, V = !1, ge = !1, ce = !1, te = C, X = { label: "", color: "" }, oe = { x: 0, y: 0, distance: 0 };
  const B = Lg();
  function H() {
    if (S) {
      if (S.clearRect(0, 0, v.width, v.height), S.save(), S.translate(R.offsetX, R.offsetY), S.scale(R.scale, R.scale), E !== null) {
        switch (u.orientation) {
          case 0:
            S.drawImage(E, 0, 0, j, L);
            break;
          case 1:
            S.translate(j, 0), S.rotate(Math.PI / 2), S.drawImage(E, 0, 0, L, j);
            break;
          case 2:
            S.translate(j, L), S.rotate(Math.PI), S.drawImage(E, 0, 0, j, L);
            break;
          case 3:
            S.translate(0, L), S.rotate(-Math.PI / 2), S.drawImage(E, 0, 0, L, j);
            break;
        }
        S.restore();
      }
      for (const y of u.boxes.slice().reverse())
        y.render(S);
    }
  }
  function P(y) {
    t(11, k = y), u.boxes.forEach((Y) => {
      Y.setSelected(!1);
    }), y >= 0 && y < u.boxes.length && u.boxes[y].setSelected(!0), H();
  }
  const ie = (y, Y) => {
    const U = Math.sqrt(Math.pow(y.clientX - Y.clientX, 2) + Math.pow(y.clientY - Y.clientY, 2));
    return U < Xa ? Xa : U;
  };
  function fe(y) {
    if (o) {
      if (y.preventDefault(), v.setPointerCapture(y.pointerId), A.set(y.pointerId, y), A.size == 1)
        W === n.creation ? Sl(y) : W === n.drag && M(y);
      else if (A.size == 2) {
        R.isDragging = !1, u.boxes.forEach((It) => {
          It.isCreating = !1, It.isDragging = !1, It.isResizing = !1;
        });
        const Y = Array.from(A.values()), U = Y[0], J = Y[1], ne = ie(U, J), x = v.getBoundingClientRect(), be = (U.clientX + J.clientX) / 2 - x.left, vt = (U.clientY + J.clientY) / 2 - x.top;
        oe.distance = ne, oe.x = be, oe.y = vt;
      }
    }
  }
  function M(y) {
    const Y = v.getBoundingClientRect(), U = y.clientX - Y.left, J = y.clientY - Y.top;
    let ne = !1;
    for (const [x, be] of u.boxes.entries()) {
      const vt = be.indexOfPointInsideHandle(U, J);
      if (vt >= 0) {
        ne = !0, P(x), be.startResize(vt, y);
        return;
      }
    }
    for (const [x, be] of u.boxes.entries())
      if (be.isPointInsideBox(U, J)) {
        ne = !0, P(x), be.startDrag(y);
        return;
      }
    b || P(-1), ne || R.startDrag(y);
  }
  function ot(y) {
    o && (A.delete(y.pointerId), v.releasePointerCapture(y.pointerId), B("change"));
  }
  function ht(y) {
    o && (A.delete(y.pointerId), v.releasePointerCapture(y.pointerId), B("change"));
  }
  function Xe(y) {
    if (o)
      if (y.preventDefault(), y.pointerType === "mouse") {
        if (!p || u === null || W !== n.drag)
          return;
        const Y = v.getBoundingClientRect(), U = y.clientX - Y.left, J = y.clientY - Y.top;
        for (const [ne, x] of u.boxes.entries()) {
          const be = x.indexOfPointInsideHandle(U, J);
          if (be >= 0) {
            t(9, v.style.cursor = x.resizeHandles[be].cursor, v);
            return;
          }
        }
        t(9, v.style.cursor = "default", v);
      } else {
        if (!A.has(y.pointerId))
          return;
        if (A.set(y.pointerId, y), A.size === 2) {
          const Y = Array.from(A.values()), U = Y[0], J = Y[1], ne = ie(U, J), x = v.getBoundingClientRect(), be = (U.clientX + J.clientX) / 2 - x.left, vt = (U.clientY + J.clientY) / 2 - x.top, It = parseFloat((R.scale * (ne / oe.distance)).toFixed(2)), Go = It < 1 ? 1 : It, Jo = Go / R.scale;
          R.offsetX = oe.x - (oe.x - R.offsetX) * Jo, R.offsetY = oe.y - (oe.y - R.offsetY) * Jo;
          const k_ = be - oe.x, C_ = vt - oe.y;
          R.offsetX += k_, R.offsetY += C_, R.scale = Go, oe.x = be, oe.y = vt, oe.distance = ne, H();
        }
      }
  }
  function Ze() {
    const y = v.width / j, Y = v.height / L, U = Math.min(y, Y);
    R.scale = U, R.offsetX = (v.width - j * U) / 2, R.offsetY = (v.height - L * U) / 2, H();
  }
  function Ge(y) {
    if (!z || y.target !== q || !o)
      return;
    const Y = y.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(Y) && (y.preventDefault(), y.stopPropagation()), Y) {
      case "delete":
        Xt();
        break;
      case "c":
        Sn();
        break;
      case "d":
        qn();
        break;
      case "e":
        gt();
        break;
      case " ":
        Ze();
        break;
    }
  }
  function mt() {
    setTimeout(
      () => {
        q == null || q.focus();
      },
      0
    );
  }
  function yl(y) {
    if (!o)
      return;
    y.preventDefault();
    const Y = 1 / (1 + y.deltaY / 1e3 * 0.5), U = parseFloat((R.scale * Y).toFixed(2)), J = U < 1 ? 1 : U, ne = v.getBoundingClientRect(), x = y.clientX - ne.left, be = y.clientY - ne.top, vt = (x - R.offsetX) / R.scale, It = (be - R.offsetY) / R.scale;
    R.offsetX = x - vt * J, R.offsetY = be - It * J, R.scale = J, H();
  }
  function Sl(y) {
    const Y = v.getBoundingClientRect(), U = (y.clientX - Y.left - R.offsetX) / I / R.scale, J = (y.clientY - Y.top - R.offsetY) / I / R.scale;
    let ne;
    d.length > 0 ? ne = Oi(d[0]) : b ? u.boxes.length > 0 ? ne = u.boxes[0].color : ne = ln[0] : ne = ln[u.boxes.length % ln.length];
    let x = new ho(H, D, R, A, G, ee, K, _e, "", U, J, U, J, ne, s, r, a, _, c);
    x.startCreating(y, Y.left, Y.top), b ? t(0, u.boxes = [x], u) : t(0, u.boxes = [x, ...u.boxes], u), P(0), H(), B("change");
  }
  function Sn() {
    t(12, W = n.creation), t(9, v.style.cursor = "crosshair", v);
  }
  function qn() {
    t(12, W = n.drag), t(9, v.style.cursor = "default", v);
  }
  function D() {
    k >= 0 && k < u.boxes.length && (u.boxes[k].getArea() < 1 ? Xt() : (m || (te ? Dn() : t(14, ge = !0)), b && qn()));
  }
  function gt() {
    k >= 0 && k < u.boxes.length && !m && t(13, V = !0);
  }
  function bt(y) {
    o && gt();
  }
  function zn(y) {
    t(13, V = !1), mt();
    const { detail: Y } = y;
    let U = Y.label, J = Y.color, ne = Y.ret;
    if (k >= 0 && k < u.boxes.length) {
      let x = u.boxes[k];
      ne == 1 ? (x.label = U, x.color = Oi(J), H(), B("change")) : ne == -1 && Xt();
    }
  }
  function ql(y) {
    t(14, ge = !1), mt();
    const { detail: Y } = y;
    let U = Y.label, J = Y.color, ne = Y.ret, x = Y.lock;
    if (k >= 0 && k < u.boxes.length) {
      let be = u.boxes[k];
      ne == 1 ? (t(16, te = x), X.label = U, X.color = J, be.label = U, be.color = Oi(J), H(), B("change")) : Xt();
    }
  }
  function Qt(y) {
    t(15, ce = !1), mt();
    const { detail: Y } = y;
    let U = Y.label, J = Y.color, ne = Y.ret, x = Y.lock;
    ne == 1 && (t(16, te = x), X.label = U, X.color = J);
  }
  function Dn() {
    if (k >= 0 && k < u.boxes.length) {
      let y = u.boxes[k];
      y.label = X.label, X.color !== "" && (y.color = Oi(X.color)), H(), B("change");
    }
  }
  function Xt() {
    k >= 0 && k < u.boxes.length && (u.boxes.splice(k, 1), P(-1), b && Sn(), B("change"));
  }
  function ei(y) {
    t(0, u.orientation = ((u.orientation + y) % 4 + 4) % 4, u), R.orientation = u.orientation, pt();
    for (const Y of u.boxes)
      Y.onRotate(y);
    H();
  }
  function pt() {
    if (v) {
      if (I = 1, t(9, v.width = v.clientWidth, v), R.setRotatedImage(E), E !== null) {
        if (R.imageRotatedWidth > v.width)
          I = v.width / R.imageRotatedWidth, j = Math.round(R.imageRotatedWidth * I), L = Math.round(R.imageRotatedHeight * I), G = 0, ee = 0, K = j, _e = L, t(9, v.height = L, v);
        else {
          j = R.imageRotatedWidth, L = R.imageRotatedHeight;
          var y = (v.width - j) / 2;
          G = y, ee = 0, K = y + j, _e = L, t(9, v.height = L, v);
        }
        R.imageWidth = j, R.imageHeight = L;
      } else
        G = 0, ee = 0, K = v.width, _e = v.height, t(9, v.height = v.clientHeight, v);
      if (R.resize(v.width, v.height, G, ee), K > 0 && _e > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = G, Y.canvasYmin = ee, Y.canvasXmax = K, Y.canvasYmax = _e, Y.setScaleFactor(I);
      H(), B("change");
    }
  }
  const wt = new ResizeObserver(pt);
  function ti() {
    for (let y = 0; y < u.boxes.length; y++) {
      let Y = u.boxes[y];
      if (!(Y instanceof ho)) {
        let U = "", J = "";
        Y.hasOwnProperty("color") ? (U = Y.color, Array.isArray(U) && U.length === 3 && (U = `rgb(${U[0]}, ${U[1]}, ${U[2]})`)) : U = ln[y % ln.length], Y.hasOwnProperty("label") && (J = Y.label), Y = new ho(H, D, R, A, G, ee, K, _e, J, Y.xmin, Y.ymin, Y.xmax, Y.ymax, U, s, r, a, _, c), t(0, u.boxes[y] = Y, u);
      }
    }
  }
  function Zo() {
    l !== null && (E === null || E.src != l) && (E = new Image(), E.src = l, E.onload = function() {
      pt(), H();
    });
  }
  Mg(() => {
    if (Array.isArray(f) && f.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let y = 0; y < f.length; y++) {
          let Y = ln[y % ln.length];
          d.push(vn(Y));
        }
      X.label = f[0][0], X.color = d[0];
    }
    S = v.getContext("2d"), wt.observe(v), k < 0 && u !== null && u.boxes.length > 0 && P(0), Zo(), pt(), H();
  });
  function __(y) {
    Ba[y ? "unshift" : "push"](() => {
      v = y, t(9, v);
    });
  }
  const c_ = () => Sn(), u_ = () => qn(), f_ = () => Xt(), d_ = () => t(15, ce = !0), h_ = () => ei(-1), m_ = () => ei(1);
  function g_(y) {
    Ba[y ? "unshift" : "push"](() => {
      q = y, t(10, q);
    });
  }
  const b_ = () => q.focus();
  function p_(y) {
    mo.call(this, i, y);
  }
  function w_(y) {
    mo.call(this, i, y);
  }
  function v_(y) {
    mo.call(this, i, y);
  }
  return i.$$set = (y) => {
    "imageUrl" in y && t(31, l = y.imageUrl), "interactive" in y && t(2, o = y.interactive), "boxAlpha" in y && t(32, s = y.boxAlpha), "boxMinSize" in y && t(33, r = y.boxMinSize), "handleSize" in y && t(34, a = y.handleSize), "boxThickness" in y && t(35, _ = y.boxThickness), "boxSelectedThickness" in y && t(36, c = y.boxSelectedThickness), "value" in y && t(0, u = y.value), "choices" in y && t(3, f = y.choices), "choicesColors" in y && t(4, d = y.choicesColors), "disableEditBoxes" in y && t(5, m = y.disableEditBoxes), "height" in y && t(6, h = y.height), "width" in y && t(7, g = y.width), "singleBox" in y && t(37, b = y.singleBox), "showRemoveButton" in y && t(1, w = y.showRemoveButton), "handlesCursor" in y && t(38, p = y.handlesCursor), "useDefaultLabel" in y && t(39, C = y.useDefaultLabel), "enableKeyboardShortcuts" in y && t(40, z = y.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (R.orientation = u.orientation, Zo(), ti(), pt(), H());
  }, [
    u,
    w,
    o,
    f,
    d,
    m,
    h,
    g,
    n,
    v,
    q,
    k,
    W,
    V,
    ge,
    ce,
    te,
    fe,
    ot,
    ht,
    Xe,
    Ge,
    yl,
    Sn,
    qn,
    bt,
    zn,
    ql,
    Qt,
    Xt,
    ei,
    l,
    s,
    r,
    a,
    _,
    c,
    b,
    p,
    C,
    z,
    __,
    c_,
    u_,
    f_,
    d_,
    h_,
    m_,
    g_,
    b_,
    p_,
    w_,
    v_
  ];
}
class Wg extends zg {
  constructor(e) {
    super(), Bg(
      this,
      e,
      Ag,
      Rg,
      Eg,
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
  SvelteComponent: Xg,
  add_flush_callback: Ig,
  bind: Yg,
  binding_callbacks: Hg,
  create_component: Tg,
  destroy_component: jg,
  init: $g,
  mount_component: Fg,
  safe_not_equal: Ug,
  transition_in: Vg,
  transition_out: Og
} = window.__gradio__svelte__internal, { createEventDispatcher: Ng } = window.__gradio__svelte__internal;
function Pg(i) {
  let e, t, n;
  function l(s) {
    i[21](s);
  }
  let o = {
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
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      i[16]
    ),
    imageUrl: (
      /*resolved_src*/
      i[17]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (o.value = /*value*/
    i[0]), e = new Wg({ props: o }), Hg.push(() => Yg(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[22]
    ), {
      c() {
        Tg(e.$$.fragment);
      },
      m(s, r) {
        Fg(e, s, r), n = !0;
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
        s[4]), r & /*height*/
        256 && (a.height = /*height*/
        s[8]), r & /*width*/
        512 && (a.width = /*width*/
        s[9]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        s[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        s[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        s[7]), r & /*boxSelectedThickness*/
        1024 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        s[10]), r & /*disableEditBoxes*/
        2048 && (a.disableEditBoxes = /*disableEditBoxes*/
        s[11]), r & /*singleBox*/
        4096 && (a.singleBox = /*singleBox*/
        s[12]), r & /*showRemoveButton*/
        8192 && (a.showRemoveButton = /*showRemoveButton*/
        s[13]), r & /*handlesCursor*/
        16384 && (a.handlesCursor = /*handlesCursor*/
        s[14]), r & /*useDefaultLabel*/
        32768 && (a.useDefaultLabel = /*useDefaultLabel*/
        s[15]), r & /*enableKeyboardShortcuts*/
        65536 && (a.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        s[16]), r & /*resolved_src*/
        131072 && (a.imageUrl = /*resolved_src*/
        s[17]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], Ig(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Vg(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Og(e.$$.fragment, s), n = !1;
      },
      d(s) {
        jg(e, s);
      }
    }
  );
}
function Kg(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: u } = e, { width: f } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: w } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: C } = e, z, v;
  const q = Ng();
  function S(k) {
    m = k, t(0, m);
  }
  const E = () => q("change");
  return i.$$set = (k) => {
    "src" in k && t(19, n = k.src), "interactive" in k && t(1, l = k.interactive), "boxesAlpha" in k && t(2, o = k.boxesAlpha), "labelList" in k && t(3, s = k.labelList), "labelColors" in k && t(4, r = k.labelColors), "boxMinSize" in k && t(5, a = k.boxMinSize), "handleSize" in k && t(6, _ = k.handleSize), "boxThickness" in k && t(7, c = k.boxThickness), "height" in k && t(8, u = k.height), "width" in k && t(9, f = k.width), "boxSelectedThickness" in k && t(10, d = k.boxSelectedThickness), "value" in k && t(0, m = k.value), "disableEditBoxes" in k && t(11, h = k.disableEditBoxes), "singleBox" in k && t(12, g = k.singleBox), "showRemoveButton" in k && t(13, b = k.showRemoveButton), "handlesCursor" in k && t(14, w = k.handlesCursor), "useDefaultLabel" in k && t(15, p = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(16, C = k.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    1572864) {
      t(17, z = n), t(20, v = n);
      const k = n;
      S1(k).then((W) => {
        v === k && t(17, z = W);
      });
    }
  }, [
    m,
    l,
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    h,
    g,
    b,
    w,
    p,
    C,
    z,
    q,
    n,
    v,
    S,
    E
  ];
}
class Zg extends Xg {
  constructor(e) {
    super(), $g(this, e, Kg, Pg, Ug, {
      src: 19,
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
      useDefaultLabel: 15,
      enableKeyboardShortcuts: 16
    });
  }
}
class Ia {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Gg,
  add_flush_callback: ul,
  append: Xn,
  attr: mi,
  bind: fl,
  binding_callbacks: Ci,
  bubble: ri,
  check_outros: sn,
  create_component: Mt,
  create_slot: Jg,
  destroy_component: Lt,
  detach: mn,
  element: vi,
  empty: Qg,
  get_all_dirty_from_scope: xg,
  get_slot_changes: eb,
  group_outros: an,
  init: tb,
  insert: gn,
  mount_component: Rt,
  noop: nb,
  safe_not_equal: ib,
  space: on,
  toggle_class: Ya,
  transition_in: Z,
  transition_out: le,
  update_slot_base: lb
} = window.__gradio__svelte__internal, { createEventDispatcher: ob, tick: sb } = window.__gradio__svelte__internal;
function Ha(i) {
  let e, t;
  return e = new Y1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [ab] },
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
      const o = {};
      l[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      8388608 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function ab(i) {
  let e, t;
  return e = new dl({
    props: {
      Icon: Gu,
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
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function Ta(i) {
  let e, t;
  return e = new vd({
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
      const o = {};
      l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function ja(i) {
  let e, t, n;
  return t = new dl({
    props: { Icon: nr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[37]
  ), {
    c() {
      e = vi("div"), Mt(t.$$.fragment);
    },
    m(l, o) {
      gn(l, e, o), Rt(t, e, null), n = !0;
    },
    p: nb,
    i(l) {
      n || (Z(t.$$.fragment, l), n = !0);
    },
    o(l) {
      le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && mn(e), Lt(t);
    }
  };
}
function $a(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Jg(
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
    m(l, o) {
      n && n.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      8388608) && lb(
        n,
        t,
        l,
        /*$$scope*/
        l[54],
        e ? eb(
          t,
          /*$$scope*/
          l[54],
          o,
          null
        ) : xg(
          /*$$scope*/
          l[54]
        ),
        null
      );
    },
    i(l) {
      e || (Z(n, l), e = !0);
    },
    o(l) {
      le(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function rb(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && $a(i)
  );
  return {
    c() {
      n && n.c(), e = Qg();
    },
    m(l, o) {
      n && n.m(l, o), gn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && Z(n, 1)) : (n = $a(l), n.c(), Z(n, 1), n.m(e.parentNode, e)) : n && (an(), le(n, 1, 1, () => {
        n = null;
      }), sn());
    },
    i(l) {
      t || (Z(n), t = !0);
    },
    o(l) {
      le(n), t = !1;
    },
    d(l) {
      l && mn(e), n && n.d(l);
    }
  };
}
function Fa(i) {
  let e, t;
  return e = new am({
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
      const o = {};
      l[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      2 && (o.upload = /*upload*/
      n[32]), e.$set(o);
    },
    i(n) {
      t || (Z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lt(e, n);
    }
  };
}
function Ua(i) {
  let e, t, n, l;
  function o(r) {
    i[51](r);
  }
  let s = {
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
    i[1] !== void 0 && (s.value = /*value*/
    i[1]), t = new Zg({ props: s }), Ci.push(() => fl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), {
      c() {
        e = vi("div"), Mt(t.$$.fragment), mi(e, "class", "image-frame svelte-1gjdske"), Ya(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        gn(r, e, a), Rt(t, e, null), l = !0;
      },
      p(r, a) {
        const _ = {};
        a[0] & /*height*/
        131072 && (_.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (_.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
        4096 && (_.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (_.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (_.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (_.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (_.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (_.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        524288 && (_.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (_.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (_.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (_.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (_.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (_.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (_.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*enableKeyboardShortcuts*/
        536870912 && (_.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        r[29]), a[0] & /*value*/
        2 && (_.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, _.value = /*value*/
        r[1], ul(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && Ya(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (Z(t.$$.fragment, r), l = !0);
      },
      o(r) {
        le(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && mn(e), Lt(t);
      }
    }
  );
}
function Va(i) {
  let e, t, n;
  function l(s) {
    i[53](s);
  }
  let o = {
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
    i[0] !== void 0 && (o.active_source = /*active_source*/
    i[0]), e = new Id({ props: o }), Ci.push(() => fl(e, "active_source", l)), {
      c() {
        Mt(e.$$.fragment);
      },
      m(s, r) {
        Rt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], ul(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Z(e.$$.fragment, s), n = !0);
      },
      o(s) {
        le(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Lt(e, s);
      }
    }
  );
}
function _b(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new Ic({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: ir,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Ha(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Ta(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && ja(i)
  );
  function C(k) {
    i[43](k);
  }
  function z(k) {
    i[44](k);
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
    $$slots: { default: [rb] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (v.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (v.dragging = /*dragging*/
  i[31]), _ = new gh({ props: v }), i[42](_), Ci.push(() => fl(_, "uploading", C)), Ci.push(() => fl(_, "dragging", z)), _.$on(
    "load",
    /*handle_upload*/
    i[33]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let q = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Fa(i)
  ), S = (
    /*value*/
    i[1] !== null && Ua(i)
  ), E = h && Va(i);
  return {
    c() {
      Mt(e.$$.fragment), t = on(), n = vi("div"), b && b.c(), l = on(), w && w.c(), o = on(), p && p.c(), s = on(), r = vi("div"), a = vi("div"), Mt(_.$$.fragment), f = on(), q && q.c(), d = on(), S && S.c(), m = on(), E && E.c(), mi(n, "class", "icon-buttons svelte-1gjdske"), mi(a, "class", "upload-container svelte-1gjdske"), mi(r, "data-testid", "image"), mi(r, "class", "image-container svelte-1gjdske");
    },
    m(k, W) {
      Rt(e, k, W), gn(k, t, W), gn(k, n, W), b && b.m(n, null), Xn(n, l), w && w.m(n, null), Xn(n, o), p && p.m(n, null), gn(k, s, W), gn(k, r, W), Xn(r, a), Rt(_, a, null), Xn(a, f), q && q.m(a, null), Xn(a, d), S && S.m(a, null), Xn(r, m), E && E.m(r, null), g = !0;
    },
    p(k, W) {
      const A = {};
      W[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      k[3]), W[0] & /*label*/
      4 && (A.label = /*label*/
      k[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      k[10] && /*value*/
      k[1] !== null ? b ? (b.p(k, W), W[0] & /*showDownloadButton, value*/
      1026 && Z(b, 1)) : (b = Ha(k), b.c(), Z(b, 1), b.m(n, l)) : b && (an(), le(b, 1, 1, () => {
        b = null;
      }), sn()), /*showShareButton*/
      k[9] && /*value*/
      k[1] !== null ? w ? (w.p(k, W), W[0] & /*showShareButton, value*/
      514 && Z(w, 1)) : (w = Ta(k), w.c(), Z(w, 1), w.m(n, o)) : w && (an(), le(w, 1, 1, () => {
        w = null;
      }), sn()), /*showClearButton*/
      k[11] && /*value*/
      k[1] !== null && /*interactive*/
      k[7] ? p ? (p.p(k, W), W[0] & /*showClearButton, value, interactive*/
      2178 && Z(p, 1)) : (p = ja(k), p.c(), Z(p, 1), p.m(n, null)) : p && (an(), le(p, 1, 1, () => {
        p = null;
      }), sn());
      const R = {};
      W[0] & /*value, active_source*/
      3 && (R.hidden = /*value*/
      k[1] !== null || /*active_source*/
      k[0] === "webcam"), W[0] & /*active_source*/
      1 && (R.filetype = /*active_source*/
      k[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (R.root = /*root*/
      k[6]), W[0] & /*max_file_size*/
      33554432 && (R.max_file_size = /*max_file_size*/
      k[25]), W[0] & /*sources*/
      16 && (R.disable_click = !/*sources*/
      k[4].includes("upload")), W[0] & /*cli_upload*/
      67108864 && (R.upload = /*cli_upload*/
      k[26]), W[0] & /*stream_handler*/
      134217728 && (R.stream_handler = /*stream_handler*/
      k[27]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      8388608 && (R.$$scope = { dirty: W, ctx: k }), !c && W[0] & /*uploading*/
      1073741824 && (c = !0, R.uploading = /*uploading*/
      k[30], ul(() => c = !1)), !u && W[1] & /*dragging*/
      1 && (u = !0, R.dragging = /*dragging*/
      k[31], ul(() => u = !1)), _.$set(R), /*value*/
      k[1] === null && /*active_source*/
      k[0] === "webcam" ? q ? (q.p(k, W), W[0] & /*value, active_source*/
      3 && Z(q, 1)) : (q = Fa(k), q.c(), Z(q, 1), q.m(a, d)) : q && (an(), le(q, 1, 1, () => {
        q = null;
      }), sn()), /*value*/
      k[1] !== null ? S ? (S.p(k, W), W[0] & /*value*/
      2 && Z(S, 1)) : (S = Ua(k), S.c(), Z(S, 1), S.m(a, null)) : S && (an(), le(S, 1, 1, () => {
        S = null;
      }), sn()), W[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (k[4].length > 1 || /*sources*/
      k[4].includes("clipboard")) && /*value*/
      k[1] === null && /*interactive*/
      k[7]), h ? E ? (E.p(k, W), W[0] & /*sources, value, interactive*/
      146 && Z(E, 1)) : (E = Va(k), E.c(), Z(E, 1), E.m(r, null)) : E && (an(), le(E, 1, 1, () => {
        E = null;
      }), sn());
    },
    i(k) {
      g || (Z(e.$$.fragment, k), Z(b), Z(w), Z(p), Z(_.$$.fragment, k), Z(q), Z(S), Z(E), g = !0);
    },
    o(k) {
      le(e.$$.fragment, k), le(b), le(w), le(p), le(_.$$.fragment, k), le(q), le(S), le(E), g = !1;
    },
    d(k) {
      k && (mn(t), mn(n), mn(s), mn(r)), Lt(e, k), b && b.d(), w && w.d(), p && p.d(), i[42](null), Lt(_), q && q.d(), S && S.d(), E && E.d();
    }
  };
}
function cb(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(D, gt, bt, zn) {
    function ql(Qt) {
      return Qt instanceof bt ? Qt : new bt(function(Dn) {
        Dn(Qt);
      });
    }
    return new (bt || (bt = Promise))(function(Qt, Dn) {
      function Xt(wt) {
        try {
          pt(zn.next(wt));
        } catch (ti) {
          Dn(ti);
        }
      }
      function ei(wt) {
        try {
          pt(zn.throw(wt));
        } catch (ti) {
          Dn(ti);
        }
      }
      function pt(wt) {
        wt.done ? Qt(wt.value) : ql(wt.value).then(Xt, ei);
      }
      pt((zn = zn.apply(D, gt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: f } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: w } = e, { labelColors: p } = e, { boxMinSize: C } = e, { handleSize: z } = e, { height: v } = e, { width: q } = e, { boxThickness: S } = e, { disableEditBoxes: E } = e, { singleBox: k } = e, { showRemoveButton: W } = e, { handlesCursor: A } = e, { boxSelectedThickness: R } = e, { max_file_size: G = null } = e, { cli_upload: ee } = e, { stream_handler: K } = e, { useDefaultLabel: _e } = e, { enableKeyboardShortcuts: I } = e, j, L = !1, { active_source: V = null } = e;
  function ge({ detail: D }) {
    t(1, s = new Ia()), t(1, s.image = D, s), te("upload");
  }
  function ce(D) {
    return o(this, void 0, void 0, function* () {
      const gt = yield j.load_files([new File([D], "webcam.png")]), bt = (gt == null ? void 0 : gt[0]) || null;
      bt ? (t(1, s = new Ia()), t(1, s.image = bt, s)) : t(1, s = null), yield sb(), te("change");
    });
  }
  const te = ob();
  let X = !1;
  function oe(D) {
    return o(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          j.paste_clipboard();
          break;
      }
    });
  }
  function B() {
    t(1, s = null), te("clear"), te("change");
  }
  const H = async (D) => D === null ? "" : `<img src="${await ad(D.image)}" />`;
  function P(D) {
    ri.call(this, i, D);
  }
  function ie(D) {
    ri.call(this, i, D);
  }
  function fe(D) {
    Ci[D ? "unshift" : "push"](() => {
      j = D, t(32, j);
    });
  }
  function M(D) {
    L = D, t(30, L);
  }
  function ot(D) {
    X = D, t(31, X);
  }
  function ht(D) {
    ri.call(this, i, D);
  }
  const Xe = (D) => ce(D.detail), Ze = (D) => ce(D.detail);
  function Ge(D) {
    ri.call(this, i, D);
  }
  function mt(D) {
    ri.call(this, i, D);
  }
  const yl = (D) => ce(D.detail);
  function Sl(D) {
    s = D, t(1, s);
  }
  const Sn = () => te("change");
  function qn(D) {
    V = D, t(0, V), t(4, _);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, s = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, _ = D.sources), "selectable" in D && t(5, c = D.selectable), "root" in D && t(6, u = D.root), "interactive" in D && t(7, f = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, m = D.showShareButton), "showDownloadButton" in D && t(10, h = D.showDownloadButton), "showClearButton" in D && t(11, g = D.showClearButton), "boxesAlpha" in D && t(12, b = D.boxesAlpha), "labelList" in D && t(13, w = D.labelList), "labelColors" in D && t(14, p = D.labelColors), "boxMinSize" in D && t(15, C = D.boxMinSize), "handleSize" in D && t(16, z = D.handleSize), "height" in D && t(17, v = D.height), "width" in D && t(18, q = D.width), "boxThickness" in D && t(19, S = D.boxThickness), "disableEditBoxes" in D && t(20, E = D.disableEditBoxes), "singleBox" in D && t(21, k = D.singleBox), "showRemoveButton" in D && t(22, W = D.showRemoveButton), "handlesCursor" in D && t(23, A = D.handlesCursor), "boxSelectedThickness" in D && t(24, R = D.boxSelectedThickness), "max_file_size" in D && t(25, G = D.max_file_size), "cli_upload" in D && t(26, ee = D.cli_upload), "stream_handler" in D && t(27, K = D.stream_handler), "useDefaultLabel" in D && t(28, _e = D.useDefaultLabel), "enableKeyboardShortcuts" in D && t(29, I = D.enableKeyboardShortcuts), "active_source" in D && t(0, V = D.active_source), "$$scope" in D && t(54, l = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    1073741824 && L && B(), i.$$.dirty[1] & /*dragging*/
    1 && te("drag", X), i.$$.dirty[0] & /*active_source, sources*/
    17 && !V && _ && t(0, V = _[0]);
  }, [
    V,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    h,
    g,
    b,
    w,
    p,
    C,
    z,
    v,
    q,
    S,
    E,
    k,
    W,
    A,
    R,
    G,
    ee,
    K,
    _e,
    I,
    L,
    X,
    j,
    ge,
    ce,
    te,
    oe,
    B,
    n,
    H,
    P,
    ie,
    fe,
    M,
    ot,
    ht,
    Xe,
    Ze,
    Ge,
    mt,
    yl,
    Sl,
    Sn,
    qn,
    l
  ];
}
class ub extends Gg {
  constructor(e) {
    super(), tb(
      this,
      e,
      cb,
      _b,
      ib,
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
  SvelteComponent: fb,
  attr: xi,
  detach: l_,
  element: o_,
  init: db,
  insert: s_,
  noop: Oa,
  safe_not_equal: hb,
  src_url_equal: Na,
  toggle_class: Vt
} = window.__gradio__svelte__internal;
function Pa(i) {
  let e, t;
  return {
    c() {
      e = o_("img"), Na(e.src, t = /*value*/
      i[0].url) || xi(e, "src", t), xi(e, "alt", "");
    },
    m(n, l) {
      s_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Na(e.src, t = /*value*/
      n[0].url) && xi(e, "src", t);
    },
    d(n) {
      n && l_(e);
    }
  };
}
function mb(i) {
  let e, t = (
    /*value*/
    i[0] && Pa(i)
  );
  return {
    c() {
      e = o_("div"), t && t.c(), xi(e, "class", "container svelte-1sgcyba"), Vt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Vt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Vt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Vt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      s_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Pa(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Vt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Vt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Vt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Vt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Oa,
    o: Oa,
    d(n) {
      n && l_(e), t && t.d();
    }
  };
}
function gb(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class AS extends fb {
  constructor(e) {
    super(), db(this, e, gb, mb, hb, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: bb,
  add_flush_callback: Ka,
  assign: pb,
  bind: Za,
  binding_callbacks: Ga,
  check_outros: wb,
  create_component: kn,
  destroy_component: Cn,
  detach: a_,
  empty: vb,
  flush: N,
  get_spread_object: kb,
  get_spread_update: Cb,
  group_outros: yb,
  init: Sb,
  insert: r_,
  mount_component: yn,
  safe_not_equal: qb,
  space: zb,
  transition_in: At,
  transition_out: Wt
} = window.__gradio__svelte__internal;
function Db(i) {
  let e, t;
  return e = new du({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Mb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      16384 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Bb(i) {
  let e, t;
  return e = new cr({
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
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Eb(i) {
  let e, t;
  return e = new cr({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Mb(i) {
  let e, t;
  return e = new ir({}), {
    c() {
      kn(e.$$.fragment);
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
      Cn(e, n);
    }
  };
}
function Lb(i) {
  let e, t, n, l;
  const o = [Eb, Bb, Db], s = [];
  function r(a, _) {
    return (
      /*active_source*/
      a[34] === "upload" ? 0 : (
        /*active_source*/
        a[34] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = vb();
    },
    m(a, _) {
      s[e].m(a, _), r_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (yb(), Wt(s[c], 1, 1, () => {
        s[c] = null;
      }), wb(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), At(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (At(t), l = !0);
    },
    o(a) {
      Wt(t), l = !1;
    },
    d(a) {
      a && a_(n), s[e].d(a);
    }
  };
}
function Rb(i) {
  let e, t, n, l, o, s;
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
  for (let f = 0; f < r.length; f += 1)
    a = pb(a, r[f]);
  e = new v1({ props: a });
  function _(f) {
    i[35](f);
  }
  function c(f) {
    i[36](f);
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
    $$slots: { default: [Lb] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new ub({ props: u }), Ga.push(() => Za(n, "active_source", _)), Ga.push(() => Za(n, "value", c)), n.$on(
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
        kn(e.$$.fragment), t = zb(), kn(n.$$.fragment);
      },
      m(f, d) {
        yn(e, f, d), r_(f, t, d), yn(n, f, d), s = !0;
      },
      p(f, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        2 ? Cb(r, [
          d[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              f[32].autoscroll
            )
          },
          d[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            f[32].i18n
          ) },
          d[0] & /*loading_status*/
          2 && kb(
            /*loading_status*/
            f[1]
          )
        ]) : {};
        e.$set(m);
        const h = {};
        d[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        f[10]), d[0] & /*root*/
        128 && (h.root = /*root*/
        f[7]), d[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        f[14]), d[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        f[18]), d[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        f[15]), d[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        f[16]), d[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        f[17]), d[1] & /*gradio*/
        2 && (h.i18n = /*gradio*/
        f[32].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        f[19]), d[0] & /*height*/
        256 && (h.height = /*height*/
        f[8]), d[0] & /*width*/
        512 && (h.width = /*width*/
        f[9]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        f[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        f[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        f[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        f[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        f[6]), d[1] & /*gradio*/
        2 && (h.max_file_size = /*gradio*/
        f[32].max_file_size), d[1] & /*gradio*/
        2 && (h.cli_upload = /*gradio*/
        f[32].client.upload), d[1] & /*gradio*/
        2 && (h.stream_handler = /*gradio*/
        f[32].client.stream), d[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        f[23]), d[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        f[24]), d[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        f[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        f[26]), d[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        f[27]), d[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        f[28]), d[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        f[29]), d[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        f[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (h.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        f[31]), d[1] & /*$$scope, gradio, active_source*/
        16394 && (h.$$scope = { dirty: d, ctx: f }), !l && d[1] & /*active_source*/
        8 && (l = !0, h.active_source = /*active_source*/
        f[34], Ka(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        f[0], Ka(() => o = !1)), n.$set(h);
      },
      i(f) {
        s || (At(e.$$.fragment, f), At(n.$$.fragment, f), s = !0);
      },
      o(f) {
        Wt(e.$$.fragment, f), Wt(n.$$.fragment, f), s = !1;
      },
      d(f) {
        f && a_(t), Cn(e, f), Cn(n, f);
      }
    }
  );
}
function Ab(i) {
  let e, t;
  return e = new H_({
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
      $$slots: { default: [Rb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      4 && (o.border_mode = /*dragging*/
      n[33] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), l[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), l[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), l[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), l[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), l[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | l[1] & /*$$scope, gradio, enable_keyboard_shortcuts, active_source, dragging*/
      16399 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (At(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Wb(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: u } = e, { _selectable: f = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: p } = e, { show_clear_button: C } = e, { interactive: z } = e, { boxes_alpha: v } = e, { label_list: q } = e, { label_colors: S } = e, { box_min_size: E } = e, { handle_size: k } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: R } = e, { single_box: G } = e, { show_remove_button: ee } = e, { handles_cursor: K } = e, { use_default_label: _e } = e, { enable_keyboard_shortcuts: I } = e, { gradio: j } = e, L, V = null;
  function ge(M) {
    V = M, t(34, V);
  }
  function ce(M) {
    s = M, t(0, s);
  }
  const te = () => j.dispatch("change"), X = () => j.dispatch("edit"), oe = () => {
    j.dispatch("clear");
  }, B = ({ detail: M }) => t(33, L = M), H = () => j.dispatch("upload"), P = ({ detail: M }) => j.dispatch("select", M), ie = ({ detail: M }) => j.dispatch("share", M), fe = ({ detail: M }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), j.dispatch("error", M);
  };
  return i.$$set = (M) => {
    "elem_id" in M && t(2, n = M.elem_id), "elem_classes" in M && t(3, l = M.elem_classes), "visible" in M && t(4, o = M.visible), "value" in M && t(0, s = M.value), "label" in M && t(5, r = M.label), "show_label" in M && t(6, a = M.show_label), "root" in M && t(7, _ = M.root), "height" in M && t(8, c = M.height), "width" in M && t(9, u = M.width), "_selectable" in M && t(10, f = M._selectable), "container" in M && t(11, d = M.container), "scale" in M && t(12, m = M.scale), "min_width" in M && t(13, h = M.min_width), "loading_status" in M && t(1, g = M.loading_status), "sources" in M && t(14, b = M.sources), "show_download_button" in M && t(15, w = M.show_download_button), "show_share_button" in M && t(16, p = M.show_share_button), "show_clear_button" in M && t(17, C = M.show_clear_button), "interactive" in M && t(18, z = M.interactive), "boxes_alpha" in M && t(19, v = M.boxes_alpha), "label_list" in M && t(20, q = M.label_list), "label_colors" in M && t(21, S = M.label_colors), "box_min_size" in M && t(22, E = M.box_min_size), "handle_size" in M && t(23, k = M.handle_size), "box_thickness" in M && t(24, W = M.box_thickness), "box_selected_thickness" in M && t(25, A = M.box_selected_thickness), "disable_edit_boxes" in M && t(26, R = M.disable_edit_boxes), "single_box" in M && t(27, G = M.single_box), "show_remove_button" in M && t(28, ee = M.show_remove_button), "handles_cursor" in M && t(29, K = M.handles_cursor), "use_default_label" in M && t(30, _e = M.use_default_label), "enable_keyboard_shortcuts" in M && t(31, I = M.enable_keyboard_shortcuts), "gradio" in M && t(32, j = M.gradio);
  }, [
    s,
    g,
    n,
    l,
    o,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    h,
    b,
    w,
    p,
    C,
    z,
    v,
    q,
    S,
    E,
    k,
    W,
    A,
    R,
    G,
    ee,
    K,
    _e,
    I,
    j,
    L,
    V,
    ge,
    ce,
    te,
    X,
    oe,
    B,
    H,
    P,
    ie,
    fe
  ];
}
class WS extends bb {
  constructor(e) {
    super(), Sb(
      this,
      e,
      Wb,
      Ab,
      qb,
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
    this.$$set({ elem_id: e }), N();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), N();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), N();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), N();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), N();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), N();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), N();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), N();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), N();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), N();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), N();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), N();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), N();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), N();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), N();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), N();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), N();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), N();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), N();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), N();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), N();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), N();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), N();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), N();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), N();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), N();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), N();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), N();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), N();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), N();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), N();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), N();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), N();
  }
}
export {
  AS as BaseExample,
  WS as default
};
