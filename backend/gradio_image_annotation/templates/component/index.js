const {
  SvelteComponent: of,
  assign: af,
  create_slot: rf,
  detach: ff,
  element: cf,
  get_all_dirty_from_scope: uf,
  get_slot_changes: _f,
  get_spread_update: df,
  init: hf,
  insert: mf,
  safe_not_equal: gf,
  set_dynamic_element_data: Ns,
  set_style: We,
  toggle_class: rt,
  transition_in: Ua,
  transition_out: Va,
  update_slot_base: bf
} = window.__gradio__svelte__internal;
function wf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), s = rf(
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
    r = af(r, o[a]);
  return {
    c() {
      e = cf(
        /*tag*/
        i[14]
      ), s && s.c(), Ns(
        /*tag*/
        i[14]
      )(e, r), rt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), rt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), rt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), rt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), rt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), We(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), We(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), We(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), We(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), We(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), We(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), We(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      mf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && bf(
        s,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? _f(
          l,
          /*$$scope*/
          a[17],
          f,
          null
        ) : uf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ns(
        /*tag*/
        a[14]
      )(e, r = df(o, [
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
      ])), rt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), rt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), rt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), rt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), rt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && We(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && We(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && We(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && We(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && We(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && We(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ua(s, a), n = !0);
    },
    o(a) {
      Va(s, a), n = !1;
    },
    d(a) {
      a && ff(e), s && s.d(a);
    }
  };
}
function vf(i) {
  let e, t = (
    /*tag*/
    i[14] && wf(i)
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
      e || (Ua(t, n), e = !0);
    },
    o(n) {
      Va(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function pf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: v = !0 } = e, { scale: w = null } = e, { min_width: b = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const p = (y) => {
    if (y !== void 0) {
      if (typeof y == "number")
        return y + "px";
      if (typeof y == "string")
        return y;
    }
  };
  return i.$$set = (y) => {
    "height" in y && t(0, s = y.height), "width" in y && t(1, o = y.width), "elem_id" in y && t(2, r = y.elem_id), "elem_classes" in y && t(3, a = y.elem_classes), "variant" in y && t(4, f = y.variant), "border_mode" in y && t(5, c = y.border_mode), "padding" in y && t(6, u = y.padding), "type" in y && t(16, _ = y.type), "test_id" in y && t(7, d = y.test_id), "explicit_call" in y && t(8, m = y.explicit_call), "container" in y && t(9, h = y.container), "visible" in y && t(10, g = y.visible), "allow_overflow" in y && t(11, v = y.allow_overflow), "scale" in y && t(12, w = y.scale), "min_width" in y && t(13, b = y.min_width), "$$scope" in y && t(17, l = y.$$scope);
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
    v,
    w,
    b,
    k,
    p,
    _,
    l,
    n
  ];
}
class kf extends of {
  constructor(e) {
    super(), hf(this, e, pf, vf, gf, {
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
  SvelteComponent: yf,
  attr: Cf,
  create_slot: Sf,
  detach: zf,
  element: Bf,
  get_all_dirty_from_scope: qf,
  get_slot_changes: Df,
  init: Lf,
  insert: Ef,
  safe_not_equal: Mf,
  transition_in: Rf,
  transition_out: Af,
  update_slot_base: Wf
} = window.__gradio__svelte__internal;
function Hf(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Sf(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Bf("div"), l && l.c(), Cf(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Ef(s, e, o), l && l.m(e, null), t = !0;
    },
    p(s, [o]) {
      l && l.p && (!t || o & /*$$scope*/
      1) && Wf(
        l,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? Df(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : qf(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Rf(l, s), t = !0);
    },
    o(s) {
      Af(l, s), t = !1;
    },
    d(s) {
      s && zf(e), l && l.d(s);
    }
  };
}
function If(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (s) => {
    "$$scope" in s && t(0, l = s.$$scope);
  }, [l, n];
}
class Tf extends yf {
  constructor(e) {
    super(), Lf(this, e, If, Hf, Mf, {});
  }
}
const {
  SvelteComponent: Xf,
  attr: Os,
  check_outros: Yf,
  create_component: jf,
  create_slot: Ff,
  destroy_component: Uf,
  detach: Yi,
  element: Vf,
  empty: Nf,
  get_all_dirty_from_scope: Of,
  get_slot_changes: Pf,
  group_outros: Zf,
  init: Gf,
  insert: ji,
  mount_component: Kf,
  safe_not_equal: Jf,
  set_data: Qf,
  space: xf,
  text: $f,
  toggle_class: kn,
  transition_in: ti,
  transition_out: Fi,
  update_slot_base: ec
} = window.__gradio__svelte__internal;
function Ps(i) {
  let e, t;
  return e = new Tf({
    props: {
      $$slots: { default: [tc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      jf(e.$$.fragment);
    },
    m(n, l) {
      Kf(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l & /*$$scope, info*/
      10 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (ti(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Fi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Uf(e, n);
    }
  };
}
function tc(i) {
  let e;
  return {
    c() {
      e = $f(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      ji(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Qf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Yi(e);
    }
  };
}
function nc(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[2].default
  ), o = Ff(
    s,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ps(i)
  );
  return {
    c() {
      e = Vf("span"), o && o.c(), t = xf(), r && r.c(), n = Nf(), Os(e, "data-testid", "block-info"), Os(e, "class", "svelte-22c38v"), kn(e, "sr-only", !/*show_label*/
      i[0]), kn(e, "hide", !/*show_label*/
      i[0]), kn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, f) {
      ji(a, e, f), o && o.m(e, null), ji(a, t, f), r && r.m(a, f), ji(a, n, f), l = !0;
    },
    p(a, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      8) && ec(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        l ? Pf(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : Of(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || f & /*show_label*/
      1) && kn(e, "sr-only", !/*show_label*/
      a[0]), (!l || f & /*show_label*/
      1) && kn(e, "hide", !/*show_label*/
      a[0]), (!l || f & /*info*/
      2) && kn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && ti(r, 1)) : (r = Ps(a), r.c(), ti(r, 1), r.m(n.parentNode, n)) : r && (Zf(), Fi(r, 1, 1, () => {
        r = null;
      }), Yf());
    },
    i(a) {
      l || (ti(o, a), ti(r), l = !0);
    },
    o(a) {
      Fi(o, a), Fi(r), l = !1;
    },
    d(a) {
      a && (Yi(e), Yi(t), Yi(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function ic(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [s, o, n, l];
}
class Na extends Xf {
  constructor(e) {
    super(), Gf(this, e, ic, nc, Jf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: lc,
  append: yl,
  attr: vi,
  create_component: sc,
  destroy_component: oc,
  detach: ac,
  element: Zs,
  init: rc,
  insert: fc,
  mount_component: cc,
  safe_not_equal: uc,
  set_data: _c,
  space: dc,
  text: hc,
  toggle_class: Ht,
  transition_in: mc,
  transition_out: gc
} = window.__gradio__svelte__internal;
function bc(i) {
  let e, t, n, l, s, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Zs("label"), t = Zs("span"), sc(n.$$.fragment), l = dc(), s = hc(
        /*label*/
        i[0]
      ), vi(t, "class", "svelte-9gxdi0"), vi(e, "for", ""), vi(e, "data-testid", "block-label"), vi(e, "class", "svelte-9gxdi0"), Ht(e, "hide", !/*show_label*/
      i[2]), Ht(e, "sr-only", !/*show_label*/
      i[2]), Ht(
        e,
        "float",
        /*float*/
        i[4]
      ), Ht(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      fc(r, e, a), yl(e, t), cc(n, t, null), yl(e, l), yl(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && _c(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Ht(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Ht(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Ht(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Ht(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (mc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      gc(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && ac(e), oc(n);
    }
  };
}
function wc(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, s, o, r];
}
class vc extends lc {
  constructor(e) {
    super(), rc(this, e, wc, bc, uc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: pc,
  append: us,
  attr: pt,
  bubble: kc,
  create_component: yc,
  destroy_component: Cc,
  detach: Oa,
  element: _s,
  init: Sc,
  insert: Pa,
  listen: zc,
  mount_component: Bc,
  safe_not_equal: qc,
  set_data: Dc,
  set_style: yn,
  space: Lc,
  text: Ec,
  toggle_class: ze,
  transition_in: Mc,
  transition_out: Rc
} = window.__gradio__svelte__internal;
function Gs(i) {
  let e, t;
  return {
    c() {
      e = _s("span"), t = Ec(
        /*label*/
        i[1]
      ), pt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Pa(n, e, l), us(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Dc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Oa(e);
    }
  };
}
function Ac(i) {
  let e, t, n, l, s, o, r, a = (
    /*show_label*/
    i[2] && Gs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = _s("button"), a && a.c(), t = Lc(), n = _s("div"), yc(l.$$.fragment), pt(n, "class", "svelte-1lrphxw"), ze(
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
      i[7], pt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), pt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), pt(
        e,
        "title",
        /*label*/
        i[1]
      ), pt(e, "class", "svelte-1lrphxw"), ze(
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
      ), yn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), yn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), yn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(f, c) {
      Pa(f, e, c), a && a.m(e, null), us(e, t), us(e, n), Bc(l, n, null), s = !0, o || (r = zc(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = Gs(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
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
      2) && pt(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && pt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && pt(
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
      4224 && yn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && yn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && yn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (Mc(l.$$.fragment, f), s = !0);
    },
    o(f) {
      Rc(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Oa(e), a && a.d(), Cc(l), o = !1, r();
    }
  };
}
function Wc(i, e, t) {
  let n, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function v(w) {
    kc.call(this, i, w);
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
    v
  ];
}
class ol extends pc {
  constructor(e) {
    super(), Sc(this, e, Wc, Ac, qc, {
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
  SvelteComponent: Hc,
  append: Ic,
  attr: Cl,
  binding_callbacks: Tc,
  create_slot: Xc,
  detach: Yc,
  element: Ks,
  get_all_dirty_from_scope: jc,
  get_slot_changes: Fc,
  init: Uc,
  insert: Vc,
  safe_not_equal: Nc,
  toggle_class: It,
  transition_in: Oc,
  transition_out: Pc,
  update_slot_base: Zc
} = window.__gradio__svelte__internal;
function Gc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), s = Xc(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Ks("div"), t = Ks("div"), s && s.c(), Cl(t, "class", "icon svelte-3w3rth"), Cl(e, "class", "empty svelte-3w3rth"), Cl(e, "aria-label", "Empty value"), It(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), It(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), It(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      Vc(o, e, r), Ic(e, t), s && s.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && Zc(
        s,
        l,
        o,
        /*$$scope*/
        o[4],
        n ? Fc(
          l,
          /*$$scope*/
          o[4],
          r,
          null
        ) : jc(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && It(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && It(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && It(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (Oc(s, o), n = !0);
    },
    o(o) {
      Pc(s, o), n = !1;
    },
    d(o) {
      o && Yc(e), s && s.d(o), i[6](null);
    }
  };
}
function Kc(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    Tc[u ? "unshift" : "push"](() => {
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
class Jc extends Hc {
  constructor(e) {
    super(), Uc(this, e, Kc, Gc, Nc, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Qc,
  append: Js,
  attr: Be,
  detach: xc,
  init: $c,
  insert: eu,
  noop: Sl,
  safe_not_equal: tu,
  svg_element: zl
} = window.__gradio__svelte__internal;
function nu(i) {
  let e, t, n;
  return {
    c() {
      e = zl("svg"), t = zl("path"), n = zl("circle"), Be(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Be(n, "cx", "12"), Be(n, "cy", "13"), Be(n, "r", "4"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "100%"), Be(e, "height", "100%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "1.5"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-camera");
    },
    m(l, s) {
      eu(l, e, s), Js(e, t), Js(e, n);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(l) {
      l && xc(e);
    }
  };
}
class iu extends Qc {
  constructor(e) {
    super(), $c(this, e, null, nu, tu, {});
  }
}
const {
  SvelteComponent: lu,
  append: su,
  attr: $e,
  detach: ou,
  init: au,
  insert: ru,
  noop: Bl,
  safe_not_equal: fu,
  svg_element: Qs
} = window.__gradio__svelte__internal;
function cu(i) {
  let e, t;
  return {
    c() {
      e = Qs("svg"), t = Qs("circle"), $e(t, "cx", "12"), $e(t, "cy", "12"), $e(t, "r", "10"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "stroke-width", "1.5"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round"), $e(e, "class", "feather feather-circle");
    },
    m(n, l) {
      ru(n, e, l), su(e, t);
    },
    p: Bl,
    i: Bl,
    o: Bl,
    d(n) {
      n && ou(e);
    }
  };
}
class uu extends lu {
  constructor(e) {
    super(), au(this, e, null, cu, fu, {});
  }
}
const {
  SvelteComponent: _u,
  append: ql,
  attr: et,
  detach: du,
  init: hu,
  insert: mu,
  noop: Dl,
  safe_not_equal: gu,
  set_style: ft,
  svg_element: pi
} = window.__gradio__svelte__internal;
function bu(i) {
  let e, t, n, l;
  return {
    c() {
      e = pi("svg"), t = pi("g"), n = pi("path"), l = pi("path"), et(n, "d", "M18,6L6.087,17.913"), ft(n, "fill", "none"), ft(n, "fill-rule", "nonzero"), ft(n, "stroke-width", "2px"), et(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), et(l, "d", "M4.364,4.364L19.636,19.636"), ft(l, "fill", "none"), ft(l, "fill-rule", "nonzero"), ft(l, "stroke-width", "2px"), et(e, "width", "100%"), et(e, "height", "100%"), et(e, "viewBox", "0 0 24 24"), et(e, "version", "1.1"), et(e, "xmlns", "http://www.w3.org/2000/svg"), et(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), et(e, "xml:space", "preserve"), et(e, "stroke", "currentColor"), ft(e, "fill-rule", "evenodd"), ft(e, "clip-rule", "evenodd"), ft(e, "stroke-linecap", "round"), ft(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      mu(s, e, o), ql(e, t), ql(t, n), ql(e, l);
    },
    p: Dl,
    i: Dl,
    o: Dl,
    d(s) {
      s && du(e);
    }
  };
}
class Za extends _u {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: wu,
  append: vu,
  attr: Kn,
  detach: pu,
  init: ku,
  insert: yu,
  noop: Ll,
  safe_not_equal: Cu,
  svg_element: xs
} = window.__gradio__svelte__internal;
function Su(i) {
  let e, t;
  return {
    c() {
      e = xs("svg"), t = xs("path"), Kn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Kn(t, "fill", "currentColor"), Kn(e, "id", "icon"), Kn(e, "xmlns", "http://www.w3.org/2000/svg"), Kn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      yu(n, e, l), vu(e, t);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(n) {
      n && pu(e);
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
  append: qu,
  attr: Cn,
  detach: Du,
  init: Lu,
  insert: Eu,
  noop: El,
  safe_not_equal: Mu,
  svg_element: $s
} = window.__gradio__svelte__internal;
function Ru(i) {
  let e, t;
  return {
    c() {
      e = $s("svg"), t = $s("path"), Cn(t, "fill", "currentColor"), Cn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Cn(e, "xmlns", "http://www.w3.org/2000/svg"), Cn(e, "width", "100%"), Cn(e, "height", "100%"), Cn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Eu(n, e, l), qu(e, t);
    },
    p: El,
    i: El,
    o: El,
    d(n) {
      n && Du(e);
    }
  };
}
class Au extends Bu {
  constructor(e) {
    super(), Lu(this, e, null, Ru, Mu, {});
  }
}
const {
  SvelteComponent: Wu,
  append: Hu,
  attr: Sn,
  detach: Iu,
  init: Tu,
  insert: Xu,
  noop: Ml,
  safe_not_equal: Yu,
  svg_element: eo
} = window.__gradio__svelte__internal;
function ju(i) {
  let e, t;
  return {
    c() {
      e = eo("svg"), t = eo("path"), Sn(t, "d", "M5 8l4 4 4-4z"), Sn(e, "class", "dropdown-arrow svelte-145leq6"), Sn(e, "xmlns", "http://www.w3.org/2000/svg"), Sn(e, "width", "100%"), Sn(e, "height", "100%"), Sn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Xu(n, e, l), Hu(e, t);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(n) {
      n && Iu(e);
    }
  };
}
class Rs extends Wu {
  constructor(e) {
    super(), Tu(this, e, null, ju, Yu, {});
  }
}
const {
  SvelteComponent: Fu,
  append: Rl,
  attr: ue,
  detach: Uu,
  init: Vu,
  insert: Nu,
  noop: Al,
  safe_not_equal: Ou,
  svg_element: ki
} = window.__gradio__svelte__internal;
function Pu(i) {
  let e, t, n, l;
  return {
    c() {
      e = ki("svg"), t = ki("rect"), n = ki("circle"), l = ki("polyline"), ue(t, "x", "3"), ue(t, "y", "3"), ue(t, "width", "18"), ue(t, "height", "18"), ue(t, "rx", "2"), ue(t, "ry", "2"), ue(n, "cx", "8.5"), ue(n, "cy", "8.5"), ue(n, "r", "1.5"), ue(l, "points", "21 15 16 10 5 21"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "fill", "none"), ue(e, "stroke", "currentColor"), ue(e, "stroke-width", "1.5"), ue(e, "stroke-linecap", "round"), ue(e, "stroke-linejoin", "round"), ue(e, "class", "feather feather-image");
    },
    m(s, o) {
      Nu(s, e, o), Rl(e, t), Rl(e, n), Rl(e, l);
    },
    p: Al,
    i: Al,
    o: Al,
    d(s) {
      s && Uu(e);
    }
  };
}
let Ga = class extends Fu {
  constructor(e) {
    super(), Vu(this, e, null, Pu, Ou, {});
  }
};
const {
  SvelteComponent: Zu,
  append: Gu,
  attr: yi,
  detach: Ku,
  init: Ju,
  insert: Qu,
  noop: Wl,
  safe_not_equal: xu,
  svg_element: to
} = window.__gradio__svelte__internal;
function $u(i) {
  let e, t;
  return {
    c() {
      e = to("svg"), t = to("path"), yi(t, "fill", "currentColor"), yi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), yi(e, "xmlns", "http://www.w3.org/2000/svg"), yi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      Qu(n, e, l), Gu(e, t);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(n) {
      n && Ku(e);
    }
  };
}
class Ka extends Zu {
  constructor(e) {
    super(), Ju(this, e, null, $u, xu, {});
  }
}
const {
  SvelteComponent: e_,
  append: Ci,
  attr: _e,
  detach: t_,
  init: n_,
  insert: i_,
  noop: Hl,
  safe_not_equal: l_,
  svg_element: Jn
} = window.__gradio__svelte__internal;
function s_(i) {
  let e, t, n, l, s;
  return {
    c() {
      e = Jn("svg"), t = Jn("path"), n = Jn("path"), l = Jn("line"), s = Jn("line"), _e(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), _e(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), _e(l, "x1", "12"), _e(l, "y1", "19"), _e(l, "x2", "12"), _e(l, "y2", "23"), _e(s, "x1", "8"), _e(s, "y1", "23"), _e(s, "x2", "16"), _e(s, "y2", "23"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "2"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-mic");
    },
    m(o, r) {
      i_(o, e, r), Ci(e, t), Ci(e, n), Ci(e, l), Ci(e, s);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(o) {
      o && t_(e);
    }
  };
}
class o_ extends e_ {
  constructor(e) {
    super(), n_(this, e, null, s_, l_, {});
  }
}
const {
  SvelteComponent: a_,
  append: no,
  attr: Ve,
  detach: r_,
  init: f_,
  insert: c_,
  noop: Il,
  safe_not_equal: u_,
  set_style: __,
  svg_element: Tl
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t, n;
  return {
    c() {
      e = Tl("svg"), t = Tl("polyline"), n = Tl("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw"), __(e, "transform", "rotateY(180deg)");
    },
    m(l, s) {
      c_(l, e, s), no(e, t), no(e, n);
    },
    p: Il,
    i: Il,
    o: Il,
    d(l) {
      l && r_(e);
    }
  };
}
class h_ extends a_ {
  constructor(e) {
    super(), f_(this, e, null, d_, u_, {});
  }
}
const {
  SvelteComponent: m_,
  append: g_,
  attr: qe,
  detach: b_,
  init: w_,
  insert: v_,
  noop: Xl,
  safe_not_equal: p_,
  svg_element: io
} = window.__gradio__svelte__internal;
function k_(i) {
  let e, t;
  return {
    c() {
      e = io("svg"), t = io("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, l) {
      v_(n, e, l), g_(e, t);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(n) {
      n && b_(e);
    }
  };
}
class y_ extends m_ {
  constructor(e) {
    super(), w_(this, e, null, k_, p_, {});
  }
}
const {
  SvelteComponent: C_,
  append: lo,
  attr: Ne,
  detach: S_,
  init: z_,
  insert: B_,
  noop: Yl,
  safe_not_equal: q_,
  svg_element: jl
} = window.__gradio__svelte__internal;
function D_(i) {
  let e, t, n;
  return {
    c() {
      e = jl("svg"), t = jl("polyline"), n = jl("path"), Ne(t, "points", "1 4 1 10 7 10"), Ne(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "fill", "none"), Ne(e, "stroke", "currentColor"), Ne(e, "stroke-width", "2"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round"), Ne(e, "class", "feather feather-rotate-ccw");
    },
    m(l, s) {
      B_(l, e, s), lo(e, t), lo(e, n);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(l) {
      l && S_(e);
    }
  };
}
class L_ extends C_ {
  constructor(e) {
    super(), z_(this, e, null, D_, q_, {});
  }
}
const {
  SvelteComponent: E_,
  append: Fl,
  attr: we,
  detach: M_,
  init: R_,
  insert: A_,
  noop: Ul,
  safe_not_equal: W_,
  svg_element: Si
} = window.__gradio__svelte__internal;
function H_(i) {
  let e, t, n, l;
  return {
    c() {
      e = Si("svg"), t = Si("path"), n = Si("polyline"), l = Si("line"), we(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), we(n, "points", "17 8 12 3 7 8"), we(l, "x1", "12"), we(l, "y1", "3"), we(l, "x2", "12"), we(l, "y2", "15"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "90%"), we(e, "height", "90%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "2"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-upload");
    },
    m(s, o) {
      A_(s, e, o), Fl(e, t), Fl(e, n), Fl(e, l);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(s) {
      s && M_(e);
    }
  };
}
let Ja = class extends E_ {
  constructor(e) {
    super(), R_(this, e, null, H_, W_, {});
  }
};
const {
  SvelteComponent: I_,
  append: so,
  attr: Tt,
  detach: T_,
  init: X_,
  insert: Y_,
  noop: Vl,
  safe_not_equal: j_,
  svg_element: Nl
} = window.__gradio__svelte__internal;
function F_(i) {
  let e, t, n;
  return {
    c() {
      e = Nl("svg"), t = Nl("path"), n = Nl("path"), Tt(t, "fill", "currentColor"), Tt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Tt(n, "fill", "currentColor"), Tt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24");
    },
    m(l, s) {
      Y_(l, e, s), so(e, t), so(e, n);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(l) {
      l && T_(e);
    }
  };
}
let Qa = class extends I_ {
  constructor(e) {
    super(), X_(this, e, null, F_, j_, {});
  }
};
const U_ = [
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
], oo = {
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
U_.reduce(
  (i, { color: e, primary: t, secondary: n }) => ({
    ...i,
    [e]: {
      primary: oo[e][t],
      secondary: oo[e][n]
    }
  }),
  {}
);
class Ui extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function V_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Ui("Must be on Spaces to share.");
  let t, n, l;
  t = N_(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new Ui(`Upload failed: ${f.error}`);
    }
    throw new Ui("Upload failed.");
  }
  return await o.text();
}
function N_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, s = new Uint8Array(l); l--; )
    s[l] = n.charCodeAt(l);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: O_,
  create_component: P_,
  destroy_component: Z_,
  init: G_,
  mount_component: K_,
  safe_not_equal: J_,
  transition_in: Q_,
  transition_out: x_
} = window.__gradio__svelte__internal, { createEventDispatcher: $_ } = window.__gradio__svelte__internal;
function ed(i) {
  let e, t;
  return e = new ol({
    props: {
      Icon: zu,
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
      P_(e.$$.fragment);
    },
    m(n, l) {
      K_(e, n, l), t = !0;
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
      t || (Q_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      x_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Z_(e, n);
    }
  };
}
function td(i, e, t) {
  const n = $_();
  let { formatter: l } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await l(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Ui ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (f) => {
    "formatter" in f && t(0, l = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [l, s, o, r, n, a];
}
class nd extends O_ {
  constructor(e) {
    super(), G_(this, e, td, ed, J_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: id,
  append: sn,
  attr: ds,
  check_outros: ld,
  create_component: xa,
  destroy_component: $a,
  detach: Vi,
  element: hs,
  group_outros: sd,
  init: od,
  insert: Ni,
  mount_component: er,
  safe_not_equal: ad,
  set_data: ms,
  space: gs,
  text: ni,
  toggle_class: ao,
  transition_in: Zi,
  transition_out: Gi
} = window.__gradio__svelte__internal;
function rd(i) {
  let e, t;
  return e = new Ja({}), {
    c() {
      xa(e.$$.fragment);
    },
    m(n, l) {
      er(e, n, l), t = !0;
    },
    i(n) {
      t || (Zi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Gi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $a(e, n);
    }
  };
}
function fd(i) {
  let e, t;
  return e = new Ka({}), {
    c() {
      xa(e.$$.fragment);
    },
    m(n, l) {
      er(e, n, l), t = !0;
    },
    i(n) {
      t || (Zi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Gi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $a(e, n);
    }
  };
}
function ro(i) {
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
      e = hs("span"), t = ni("- "), l = ni(n), s = ni(" -"), o = gs(), a = ni(r), ds(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Ni(f, e, c), sn(e, t), sn(e, l), sn(e, s), Ni(f, o, c), Ni(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && ms(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && ms(a, r);
    },
    d(f) {
      f && (Vi(e), Vi(o), Vi(a));
    }
  };
}
function cd(i) {
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
  const c = [fd, rd], u = [];
  function _(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && ro(i)
  );
  return {
    c() {
      e = hs("div"), t = hs("span"), l.c(), s = gs(), r = ni(o), a = gs(), d && d.c(), ds(t, "class", "icon-wrap svelte-kzcjhc"), ao(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), ds(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Ni(m, e, h), sn(e, t), u[n].m(t, null), sn(e, s), sn(e, r), sn(e, a), d && d.m(e, null), f = !0;
    },
    p(m, [h]) {
      let g = n;
      n = _(m), n !== g && (sd(), Gi(u[g], 1, 1, () => {
        u[g] = null;
      }), ld(), l = u[n], l || (l = u[n] = c[n](m), l.c()), Zi(l, 1), l.m(t, null)), (!f || h & /*hovered*/
      16) && ao(
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
      ) + "") && ms(r, o), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = ro(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      f || (Zi(l), f = !0);
    },
    o(m) {
      Gi(l), f = !1;
    },
    d(m) {
      m && Vi(e), u[n].d(), d && d.d();
    }
  };
}
function ud(i, e, t) {
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
class tr extends id {
  constructor(e) {
    super(), od(this, e, ud, cd, ad, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: _d,
  append: Ol,
  attr: mt,
  check_outros: ii,
  create_component: al,
  destroy_component: rl,
  detach: Yn,
  element: mi,
  empty: dd,
  group_outros: li,
  init: hd,
  insert: jn,
  listen: fl,
  mount_component: cl,
  safe_not_equal: md,
  space: Pl,
  toggle_class: Pt,
  transition_in: he,
  transition_out: De
} = window.__gradio__svelte__internal;
function fo(i) {
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
  ), f, c = t && co(i), u = l && uo(i), _ = o && _o(i), d = a && ho(i);
  return {
    c() {
      e = mi("span"), c && c.c(), n = Pl(), u && u.c(), s = Pl(), _ && _.c(), r = Pl(), d && d.c(), mt(e, "class", "source-selection svelte-1jp3vgd"), mt(e, "data-testid", "source-select");
    },
    m(m, h) {
      jn(m, e, h), c && c.m(e, null), Ol(e, n), u && u.m(e, null), Ol(e, s), _ && _.m(e, null), Ol(e, r), d && d.m(e, null), f = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && he(c, 1)) : (c = co(m), c.c(), he(c, 1), c.m(e, n)) : c && (li(), De(c, 1, 1, () => {
        c = null;
      }), ii()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? u ? (u.p(m, h), h & /*sources*/
      2 && he(u, 1)) : (u = uo(m), u.c(), he(u, 1), u.m(e, s)) : u && (li(), De(u, 1, 1, () => {
        u = null;
      }), ii()), h & /*sources*/
      2 && (o = /*sources*/
      m[1].includes("webcam")), o ? _ ? (_.p(m, h), h & /*sources*/
      2 && he(_, 1)) : (_ = _o(m), _.c(), he(_, 1), _.m(e, r)) : _ && (li(), De(_, 1, 1, () => {
        _ = null;
      }), ii()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && he(d, 1)) : (d = ho(m), d.c(), he(d, 1), d.m(e, null)) : d && (li(), De(d, 1, 1, () => {
        d = null;
      }), ii());
    },
    i(m) {
      f || (he(c), he(u), he(_), he(d), f = !0);
    },
    o(m) {
      De(c), De(u), De(_), De(d), f = !1;
    },
    d(m) {
      m && Yn(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function co(i) {
  let e, t, n, l, s;
  return t = new Ja({}), {
    c() {
      e = mi("button"), al(t.$$.fragment), mt(e, "class", "icon svelte-1jp3vgd"), mt(e, "aria-label", "Upload file"), Pt(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      jn(o, e, r), cl(t, e, null), n = !0, l || (s = fl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (he(t.$$.fragment, o), n = !0);
    },
    o(o) {
      De(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Yn(e), rl(t), l = !1, s();
    }
  };
}
function uo(i) {
  let e, t, n, l, s;
  return t = new o_({}), {
    c() {
      e = mi("button"), al(t.$$.fragment), mt(e, "class", "icon svelte-1jp3vgd"), mt(e, "aria-label", "Record audio"), Pt(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      jn(o, e, r), cl(t, e, null), n = !0, l || (s = fl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (he(t.$$.fragment, o), n = !0);
    },
    o(o) {
      De(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Yn(e), rl(t), l = !1, s();
    }
  };
}
function _o(i) {
  let e, t, n, l, s;
  return t = new Qa({}), {
    c() {
      e = mi("button"), al(t.$$.fragment), mt(e, "class", "icon svelte-1jp3vgd"), mt(e, "aria-label", "Capture from camera"), Pt(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      jn(o, e, r), cl(t, e, null), n = !0, l || (s = fl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (he(t.$$.fragment, o), n = !0);
    },
    o(o) {
      De(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Yn(e), rl(t), l = !1, s();
    }
  };
}
function ho(i) {
  let e, t, n, l, s;
  return t = new Ka({}), {
    c() {
      e = mi("button"), al(t.$$.fragment), mt(e, "class", "icon svelte-1jp3vgd"), mt(e, "aria-label", "Paste from clipboard"), Pt(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      jn(o, e, r), cl(t, e, null), n = !0, l || (s = fl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Pt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (he(t.$$.fragment, o), n = !0);
    },
    o(o) {
      De(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Yn(e), rl(t), l = !1, s();
    }
  };
}
function gd(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && fo(i)
  );
  return {
    c() {
      n && n.c(), e = dd();
    },
    m(l, s) {
      n && n.m(l, s), jn(l, e, s), t = !0;
    },
    p(l, [s]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, s), s & /*unique_sources*/
      4 && he(n, 1)) : (n = fo(l), n.c(), he(n, 1), n.m(e.parentNode, e)) : n && (li(), De(n, 1, 1, () => {
        n = null;
      }), ii());
    },
    i(l) {
      t || (he(n), t = !0);
    },
    o(l) {
      De(n), t = !1;
    },
    d(l) {
      l && Yn(e), n && n.d(l);
    }
  };
}
function bd(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, v) {
    function w(b) {
      return b instanceof g ? b : new g(function(k) {
        k(b);
      });
    }
    return new (g || (g = Promise))(function(b, k) {
      function p(C) {
        try {
          q(v.next(C));
        } catch (z) {
          k(z);
        }
      }
      function y(C) {
        try {
          q(v.throw(C));
        } catch (z) {
          k(z);
        }
      }
      function q(C) {
        C.done ? b(C.value) : w(C.value).then(p, y);
      }
      q((v = v.apply(m, h || [])).next());
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
class wd extends _d {
  constructor(e) {
    super(), hd(this, e, bd, gd, md, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Mn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Oi() {
}
const vd = (i) => i;
function pd(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function mo(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const nr = typeof window < "u";
let go = nr ? () => window.performance.now() : () => Date.now(), ir = nr ? (i) => requestAnimationFrame(i) : Oi;
const Xn = /* @__PURE__ */ new Set();
function lr(i) {
  Xn.forEach((e) => {
    e.c(i) || (Xn.delete(e), e.f());
  }), Xn.size !== 0 && ir(lr);
}
function kd(i) {
  let e;
  return Xn.size === 0 && ir(lr), {
    promise: new Promise((t) => {
      Xn.add(e = { c: i, f: t });
    }),
    abort() {
      Xn.delete(e);
    }
  };
}
function yd(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Cd(i, { delay: e = 0, duration: t = 400, easing: n = vd } = {}) {
  const l = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * l}`
  };
}
function bo(i, { delay: e = 0, duration: t = 400, easing: n = yd, x: l = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = mo(l), [d, m] = mo(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, g) => `
			transform: ${f} translate(${(1 - h) * u}${_}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}`
  };
}
const zn = [];
function Sd(i, e = Oi) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(r) {
    if (pd(i, r) && (i = r, t)) {
      const a = !zn.length;
      for (const f of n)
        f[1](), zn.push(f, i);
      if (a) {
        for (let f = 0; f < zn.length; f += 2)
          zn[f][0](zn[f + 1]);
        zn.length = 0;
      }
    }
  }
  function s(r) {
    l(r(i));
  }
  function o(r, a = Oi) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(l, s) || Oi), r(i), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function wo(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function bs(i, e, t, n) {
  if (typeof t == "number" || wo(t)) {
    const l = n - t, s = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * l, r = i.opts.damping * s, a = (o - r) * i.inv_mass, f = (s + a) * i.dt;
    return Math.abs(f) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, wo(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (l, s) => bs(i, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const l = {};
      for (const s in t)
        l[s] = bs(i, e[s], t[s], n[s]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function vo(i, e = {}) {
  const t = Sd(i), { stiffness: n = 0.15, damping: l = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = i, c = i, u = 1, _ = 0, d = !1;
  function m(g, v = {}) {
    c = g;
    const w = a = {};
    return i == null || v.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, o = go(), f = g, t.set(i = c), Promise.resolve()) : (v.soft && (_ = 1 / ((v.soft === !0 ? 0.5 : +v.soft) * 60), u = 0), r || (o = go(), d = !1, r = kd((b) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const k = {
        inv_mass: u,
        opts: h,
        settled: !0,
        dt: (b - o) * 60 / 1e3
      }, p = bs(k, f, i, c);
      return o = b, f = i, t.set(i = p), k.settled && (r = null), !k.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        w === a && b();
      });
    }));
  }
  const h = {
    set: m,
    update: (g, v) => m(g(c, i), v),
    subscribe: t.subscribe,
    stiffness: n,
    damping: l,
    precision: s
  };
  return h;
}
const {
  SvelteComponent: zd,
  append: tt,
  attr: N,
  component_subscribe: po,
  detach: Bd,
  element: qd,
  init: Dd,
  insert: Ld,
  noop: ko,
  safe_not_equal: Ed,
  set_style: zi,
  svg_element: nt,
  toggle_class: yo
} = window.__gradio__svelte__internal, { onMount: Md } = window.__gradio__svelte__internal;
function Rd(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = qd("div"), t = nt("svg"), n = nt("g"), l = nt("path"), s = nt("path"), o = nt("path"), r = nt("path"), a = nt("g"), f = nt("path"), c = nt("path"), u = nt("path"), _ = nt("path"), N(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(l, "fill", "#FF7C00"), N(l, "fill-opacity", "0.4"), N(l, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), zi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), zi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), yo(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      Ld(d, e, m), tt(e, t), tt(t, n), tt(n, l), tt(n, s), tt(n, o), tt(n, r), tt(t, a), tt(a, f), tt(a, c), tt(a, u), tt(a, _);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && zi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && zi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && yo(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: ko,
    o: ko,
    d(d) {
      d && Bd(e);
    }
  };
}
function Ad(i, e, t) {
  let n, l;
  var s = this && this.__awaiter || function(d, m, h, g) {
    function v(w) {
      return w instanceof h ? w : new h(function(b) {
        b(w);
      });
    }
    return new (h || (h = Promise))(function(w, b) {
      function k(q) {
        try {
          y(g.next(q));
        } catch (C) {
          b(C);
        }
      }
      function p(q) {
        try {
          y(g.throw(q));
        } catch (C) {
          b(C);
        }
      }
      function y(q) {
        q.done ? w(q.value) : v(q.value).then(k, p);
      }
      y((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = vo([0, 0]);
  po(i, r, (d) => t(1, n = d));
  const a = vo([0, 0]);
  po(i, a, (d) => t(2, l = d));
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
  return Md(() => (_(), () => f = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, l, r, a];
}
class Wd extends zd {
  constructor(e) {
    super(), Dd(this, e, Ad, Rd, Ed, { margin: 0 });
  }
}
const {
  SvelteComponent: Hd,
  append: on,
  attr: ot,
  binding_callbacks: Co,
  check_outros: ws,
  create_component: sr,
  create_slot: or,
  destroy_component: ar,
  destroy_each: rr,
  detach: Y,
  element: dt,
  empty: Fn,
  ensure_array_like: Ki,
  get_all_dirty_from_scope: fr,
  get_slot_changes: cr,
  group_outros: vs,
  init: Id,
  insert: j,
  mount_component: ur,
  noop: ps,
  safe_not_equal: Td,
  set_data: Ge,
  set_style: Nt,
  space: Ze,
  text: oe,
  toggle_class: Pe,
  transition_in: st,
  transition_out: ht,
  update_slot_base: _r
} = window.__gradio__svelte__internal, { tick: Xd } = window.__gradio__svelte__internal, { onDestroy: Yd } = window.__gradio__svelte__internal, { createEventDispatcher: jd } = window.__gradio__svelte__internal, Fd = (i) => ({}), So = (i) => ({}), Ud = (i) => ({}), zo = (i) => ({});
function Bo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function qo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Vd(i) {
  let e, t, n, l, s = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new ol({
    props: {
      Icon: Za,
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
  ), c = or(
    f,
    i,
    /*$$scope*/
    i[29],
    So
  );
  return {
    c() {
      e = dt("div"), sr(t.$$.fragment), n = Ze(), l = dt("span"), o = oe(s), r = Ze(), c && c.c(), ot(e, "class", "clear-status svelte-16nch4a"), ot(l, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      j(u, e, _), ur(t, e, null), j(u, n, _), j(u, l, _), on(l, o), j(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Ge(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && _r(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? cr(
          f,
          /*$$scope*/
          u[29],
          _,
          Fd
        ) : fr(
          /*$$scope*/
          u[29]
        ),
        So
      );
    },
    i(u) {
      a || (st(t.$$.fragment, u), st(c, u), a = !0);
    },
    o(u) {
      ht(t.$$.fragment, u), ht(c, u), a = !1;
    },
    d(u) {
      u && (Y(e), Y(n), Y(l), Y(r)), ar(t), c && c.d(u);
    }
  };
}
function Nd(i) {
  let e, t, n, l, s, o, r, a, f, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Do(i)
  );
  function u(b, k) {
    if (
      /*progress*/
      b[7]
    ) return Zd;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return Pd;
    if (
      /*queue_position*/
      b[2] === 0
    ) return Od;
  }
  let _ = u(i), d = _ && _(i), m = (
    /*timer*/
    i[5] && Mo(i)
  );
  const h = [Qd, Jd], g = [];
  function v(b, k) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = v(i)) && (o = g[s] = h[s](i));
  let w = !/*timer*/
  i[5] && Xo(i);
  return {
    c() {
      c && c.c(), e = Ze(), t = dt("div"), d && d.c(), n = Ze(), m && m.c(), l = Ze(), o && o.c(), r = Ze(), w && w.c(), a = Fn(), ot(t, "class", "progress-text svelte-16nch4a"), Pe(
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
    m(b, k) {
      c && c.m(b, k), j(b, e, k), j(b, t, k), d && d.m(t, null), on(t, n), m && m.m(t, null), j(b, l, k), ~s && g[s].m(b, k), j(b, r, k), w && w.m(b, k), j(b, a, k), f = !0;
    },
    p(b, k) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? c ? c.p(b, k) : (c = Do(b), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(b)) && d ? d.p(b, k) : (d && d.d(1), d = _ && _(b), d && (d.c(), d.m(t, n))), /*timer*/
      b[5] ? m ? m.p(b, k) : (m = Mo(b), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let p = s;
      s = v(b), s === p ? ~s && g[s].p(b, k) : (o && (vs(), ht(g[p], 1, 1, () => {
        g[p] = null;
      }), ws()), ~s ? (o = g[s], o ? o.p(b, k) : (o = g[s] = h[s](b), o.c()), st(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      b[5] ? w && (vs(), ht(w, 1, 1, () => {
        w = null;
      }), ws()) : w ? (w.p(b, k), k[0] & /*timer*/
      32 && st(w, 1)) : (w = Xo(b), w.c(), st(w, 1), w.m(a.parentNode, a));
    },
    i(b) {
      f || (st(o), st(w), f = !0);
    },
    o(b) {
      ht(o), ht(w), f = !1;
    },
    d(b) {
      b && (Y(e), Y(t), Y(l), Y(r), Y(a)), c && c.d(b), d && d.d(), m && m.d(), ~s && g[s].d(b), w && w.d(b);
    }
  };
}
function Do(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = dt("div"), ot(e, "class", "eta-bar svelte-16nch4a"), Nt(e, "transform", t);
    },
    m(n, l) {
      j(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Nt(e, "transform", t);
    },
    d(n) {
      n && Y(e);
    }
  };
}
function Od(i) {
  let e;
  return {
    c() {
      e = oe("processing |");
    },
    m(t, n) {
      j(t, e, n);
    },
    p: ps,
    d(t) {
      t && Y(e);
    }
  };
}
function Pd(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, s, o;
  return {
    c() {
      e = oe("queue: "), n = oe(t), l = oe("/"), s = oe(
        /*queue_size*/
        i[3]
      ), o = oe(" |");
    },
    m(r, a) {
      j(r, e, a), j(r, n, a), j(r, l, a), j(r, s, a), j(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ge(n, t), a[0] & /*queue_size*/
      8 && Ge(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (Y(e), Y(n), Y(l), Y(s), Y(o));
    }
  };
}
function Zd(i) {
  let e, t = Ki(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Eo(qo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Fn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      j(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress*/
      128) {
        t = Ki(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = qo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Eo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Y(e), rr(n, l);
    }
  };
}
function Lo(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? Kd : Gd
    );
  }
  let a = r(i), f = a(i);
  return {
    c() {
      f.c(), e = Ze(), n = oe(t), l = oe(" | "), o = oe(s);
    },
    m(c, u) {
      f.m(c, u), j(c, e, u), j(c, n, u), j(c, l, u), j(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ge(n, t);
    },
    d(c) {
      c && (Y(e), Y(n), Y(l), Y(o)), f.d(c);
    }
  };
}
function Gd(i) {
  let e = Mn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = oe(e);
    },
    m(n, l) {
      j(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Mn(
        /*p*/
        n[41].index || 0
      ) + "") && Ge(t, e);
    },
    d(n) {
      n && Y(t);
    }
  };
}
function Kd(i) {
  let e = Mn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Mn(
    /*p*/
    i[41].length
  ) + "", s;
  return {
    c() {
      t = oe(e), n = oe("/"), s = oe(l);
    },
    m(o, r) {
      j(o, t, r), j(o, n, r), j(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Mn(
        /*p*/
        o[41].index || 0
      ) + "") && Ge(t, e), r[0] & /*progress*/
      128 && l !== (l = Mn(
        /*p*/
        o[41].length
      ) + "") && Ge(s, l);
    },
    d(o) {
      o && (Y(t), Y(n), Y(s));
    }
  };
}
function Eo(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Lo(i)
  );
  return {
    c() {
      t && t.c(), e = Fn();
    },
    m(n, l) {
      t && t.m(n, l), j(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Lo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Y(e), t && t.d(n);
    }
  };
}
function Mo(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = oe(
        /*formatted_timer*/
        i[20]
      ), n = oe(t), l = oe("s");
    },
    m(s, o) {
      j(s, e, o), j(s, n, o), j(s, l, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Ge(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Ge(n, t);
    },
    d(s) {
      s && (Y(e), Y(n), Y(l));
    }
  };
}
function Jd(i) {
  let e, t;
  return e = new Wd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      sr(e.$$.fragment);
    },
    m(n, l) {
      ur(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*variant*/
      256 && (s.margin = /*variant*/
      n[8] === "default"), e.$set(s);
    },
    i(n) {
      t || (st(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ht(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ar(e, n);
    }
  };
}
function Qd(i) {
  let e, t, n, l, s, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Ro(i)
  );
  return {
    c() {
      e = dt("div"), t = dt("div"), r && r.c(), n = Ze(), l = dt("div"), s = dt("div"), ot(t, "class", "progress-level-inner svelte-16nch4a"), ot(s, "class", "progress-bar svelte-16nch4a"), Nt(s, "width", o), ot(l, "class", "progress-bar-wrap svelte-16nch4a"), ot(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      j(a, e, f), on(e, t), r && r.m(t, null), on(e, n), on(e, l), on(l, s), i[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Ro(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Nt(s, "width", o);
    },
    i: ps,
    o: ps,
    d(a) {
      a && Y(e), r && r.d(), i[31](null);
    }
  };
}
function Ro(i) {
  let e, t = Ki(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = To(Bo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Fn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      j(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = Ki(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Bo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = To(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Y(e), rr(n, l);
    }
  };
}
function Ao(i) {
  let e, t, n, l, s = (
    /*i*/
    i[43] !== 0 && xd()
  ), o = (
    /*p*/
    i[41].desc != null && Wo(i)
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
    i[14] != null && Io(i)
  );
  return {
    c() {
      s && s.c(), e = Ze(), o && o.c(), t = Ze(), r && r.c(), n = Ze(), a && a.c(), l = Fn();
    },
    m(f, c) {
      s && s.m(f, c), j(f, e, c), o && o.m(f, c), j(f, t, c), r && r.m(f, c), j(f, n, c), a && a.m(f, c), j(f, l, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = Wo(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Ho(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Io(f), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (Y(e), Y(t), Y(n), Y(l)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function xd(i) {
  let e;
  return {
    c() {
      e = oe(" /");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && Y(e);
    }
  };
}
function Wo(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = oe(e);
    },
    m(n, l) {
      j(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ge(t, e);
    },
    d(n) {
      n && Y(t);
    }
  };
}
function Ho(i) {
  let e;
  return {
    c() {
      e = oe("-");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && Y(e);
    }
  };
}
function Io(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = oe(e), n = oe("%");
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
      ] || 0)).toFixed(1) + "") && Ge(t, e);
    },
    d(l) {
      l && (Y(t), Y(n));
    }
  };
}
function To(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Ao(i)
  );
  return {
    c() {
      t && t.c(), e = Fn();
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
      ] != null ? t ? t.p(n, l) : (t = Ao(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Y(e), t && t.d(n);
    }
  };
}
function Xo(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = or(
    s,
    i,
    /*$$scope*/
    i[29],
    zo
  );
  return {
    c() {
      e = dt("p"), t = oe(
        /*loading_text*/
        i[9]
      ), n = Ze(), o && o.c(), ot(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      j(r, e, a), on(e, t), j(r, n, a), o && o.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Ge(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!l || a[0] & /*$$scope*/
      536870912) && _r(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        l ? cr(
          s,
          /*$$scope*/
          r[29],
          a,
          Ud
        ) : fr(
          /*$$scope*/
          r[29]
        ),
        zo
      );
    },
    i(r) {
      l || (st(o, r), l = !0);
    },
    o(r) {
      ht(o, r), l = !1;
    },
    d(r) {
      r && (Y(e), Y(n)), o && o.d(r);
    }
  };
}
function $d(i) {
  let e, t, n, l, s;
  const o = [Nd, Vd], r = [];
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
      e = dt("div"), n && n.c(), ot(e, "class", l = "wrap " + /*variant*/
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
      ), Nt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Nt(
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
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (vs(), ht(r[u], 1, 1, () => {
        r[u] = null;
      }), ws()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), st(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && ot(e, "class", l), (!s || c[0] & /*variant, show_progress, status, show_progress*/
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
      1024 && Nt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Nt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (st(n), s = !0);
    },
    o(f) {
      ht(n), s = !1;
    },
    d(f) {
      f && Y(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var e1 = function(i, e, t, n) {
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
let Bi = [], Zl = !1;
function t1(i) {
  return e1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Bi.push(e), !Zl) Zl = !0;
      else return;
      yield Xd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Bi.length; l++) {
          const o = Bi[l].getBoundingClientRect();
          (l === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Zl = !1, Bi = [];
      });
    }
  });
}
function n1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = jd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: v = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: k = !1 } = e, { border: p = !1 } = e, { autoscroll: y } = e, q, C = !1, z = 0, S = 0, W = null, A = null, F = 0, K = null, ne, U = null, Q = !0;
  const M = () => {
    t(0, a = t(27, W = t(19, Z = null))), t(25, z = performance.now()), t(26, S = 0), C = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, S = (performance.now() - z) / 1e3), C && V();
    });
  }
  function R() {
    t(26, S = 0), t(0, a = t(27, W = t(19, Z = null))), C && (C = !1);
  }
  Yd(() => {
    C && R();
  });
  let Z = null;
  function x(H) {
    Co[H ? "unshift" : "push"](() => {
      U = H, t(16, U), t(7, g), t(14, K), t(15, ne);
    });
  }
  const J = () => {
    o("clear_status");
  };
  function O(H) {
    Co[H ? "unshift" : "push"](() => {
      q = H, t(13, q);
    });
  }
  return i.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, f = H.queue_position), "queue_size" in H && t(3, c = H.queue_size), "status" in H && t(4, u = H.status), "scroll_to_output" in H && t(22, _ = H.scroll_to_output), "timer" in H && t(5, d = H.timer), "show_progress" in H && t(6, m = H.show_progress), "message" in H && t(23, h = H.message), "progress" in H && t(7, g = H.progress), "variant" in H && t(8, v = H.variant), "loading_text" in H && t(9, w = H.loading_text), "absolute" in H && t(10, b = H.absolute), "translucent" in H && t(11, k = H.translucent), "border" in H && t(12, p = H.border), "autoscroll" in H && t(24, y = H.autoscroll), "$$scope" in H && t(29, s = H.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - z) / 1e3 + a), t(19, Z = A.toFixed(1)), t(27, W = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, F = A === null || A <= 0 || !S ? null : Math.min(S / A, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, Q = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, K = g.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, K = null), K ? (t(15, ne = K[K.length - 1]), U && (ne === 0 ? t(16, U.style.transition = "0", U) : t(16, U.style.transition = "150ms", U))) : t(15, ne = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? M() : R()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && q && _ && (u === "pending" || u === "complete") && t1(q, y), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = S.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    m,
    g,
    v,
    w,
    b,
    k,
    p,
    q,
    K,
    ne,
    U,
    F,
    Q,
    Z,
    n,
    o,
    _,
    h,
    y,
    z,
    S,
    W,
    A,
    s,
    l,
    x,
    J,
    O
  ];
}
class i1 extends Hd {
  constructor(e) {
    super(), Id(
      this,
      e,
      n1,
      $d,
      Td,
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
const { setContext: C2, getContext: l1 } = window.__gradio__svelte__internal, s1 = "WORKER_PROXY_CONTEXT_KEY";
function dr() {
  return l1(s1);
}
function o1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function hr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function mr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!o1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function a1(i) {
  if (i == null || !mr(i))
    return i;
  const e = dr();
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
      type: hr(l.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: r1,
  assign: Ji,
  check_outros: gr,
  compute_rest_props: Yo,
  create_slot: As,
  detach: ul,
  element: br,
  empty: wr,
  exclude_internal_props: f1,
  get_all_dirty_from_scope: Ws,
  get_slot_changes: Hs,
  get_spread_update: vr,
  group_outros: pr,
  init: c1,
  insert: _l,
  listen: kr,
  prevent_default: u1,
  safe_not_equal: _1,
  set_attributes: Qi,
  transition_in: _n,
  transition_out: dn,
  update_slot_base: Is
} = window.__gradio__svelte__internal, { createEventDispatcher: d1 } = window.__gradio__svelte__internal;
function h1(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[8].default
  ), r = As(
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
    f = Ji(f, a[c]);
  return {
    c() {
      e = br("a"), r && r.c(), Qi(e, f);
    },
    m(c, u) {
      _l(c, e, u), r && r.m(e, null), n = !0, l || (s = kr(
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
        n ? Hs(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Ws(
          /*$$scope*/
          c[7]
        ),
        null
      ), Qi(e, f = vr(a, [
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
      n || (_n(r, c), n = !0);
    },
    o(c) {
      dn(r, c), n = !1;
    },
    d(c) {
      c && ul(e), r && r.d(c), l = !1, s();
    }
  };
}
function m1(i) {
  let e, t, n, l;
  const s = [b1, g1], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = wr();
    },
    m(a, f) {
      o[e].m(a, f), _l(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (pr(), dn(o[c], 1, 1, () => {
        o[c] = null;
      }), gr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), _n(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (_n(t), l = !0);
    },
    o(a) {
      dn(t), l = !1;
    },
    d(a) {
      a && ul(n), o[e].d(a);
    }
  };
}
function g1(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[8].default
  ), o = As(
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
    a = Ji(a, r[f]);
  return {
    c() {
      e = br("a"), o && o.c(), Qi(e, a);
    },
    m(f, c) {
      _l(f, e, c), o && o.m(e, null), t = !0, n || (l = kr(e, "click", u1(
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
        t ? Hs(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Ws(
          /*$$scope*/
          f[7]
        ),
        null
      ), Qi(e, a = vr(r, [
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
      t || (_n(o, f), t = !0);
    },
    o(f) {
      dn(o, f), t = !1;
    },
    d(f) {
      f && ul(e), o && o.d(f), n = !1, l();
    }
  };
}
function b1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = As(
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
        e ? Hs(
          t,
          /*$$scope*/
          l[7],
          s,
          null
        ) : Ws(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (_n(n, l), e = !0);
    },
    o(l) {
      dn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function w1(i) {
  let e, t, n, l, s;
  const o = [m1, h1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && mr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), l = wr();
    },
    m(f, c) {
      r[t].m(f, c), _l(f, l, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (pr(), dn(r[u], 1, 1, () => {
        r[u] = null;
      }), gr(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), _n(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      s || (_n(n), s = !0);
    },
    o(f) {
      dn(n), s = !1;
    },
    d(f) {
      f && ul(l), r[t].d(f);
    }
  };
}
function v1(i, e, t) {
  const n = ["href", "download"];
  let l = Yo(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(m, h, g, v) {
    function w(b) {
      return b instanceof g ? b : new g(function(k) {
        k(b);
      });
    }
    return new (g || (g = Promise))(function(b, k) {
      function p(C) {
        try {
          q(v.next(C));
        } catch (z) {
          k(z);
        }
      }
      function y(C) {
        try {
          q(v.throw(C));
        } catch (z) {
          k(z);
        }
      }
      function q(C) {
        C.done ? b(C.value) : w(C.value).then(p, y);
      }
      q((v = v.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = d1();
  let u = !1;
  const _ = dr();
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
        const v = new Blob(
          [g.body],
          {
            type: hr(g.headers, "content-type")
          }
        ), w = URL.createObjectURL(v), b = document.createElement("a");
        b.href = w, b.download = f, b.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = Ji(Ji({}, e), f1(m)), t(6, l = Yo(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, o = m.$$scope);
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
class p1 extends r1 {
  constructor(e) {
    super(), c1(this, e, v1, w1, _1, { href: 0, download: 1 });
  }
}
var k1 = Object.defineProperty, y1 = (i, e, t) => e in i ? k1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, bt = (i, e, t) => (y1(i, typeof e != "symbol" ? e + "" : e, t), t), yr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Qn = (i, e, t) => (yr(i, e, "read from private field"), t ? t.call(i) : e.get(i)), C1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, S1 = (i, e, t, n) => (yr(i, e, "write to private field"), e.set(i, t), t), Vt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Cr(i, e) {
  return i.map(
    (t) => new z1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class z1 {
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
    bt(this, "path"), bt(this, "url"), bt(this, "orig_name"), bt(this, "size"), bt(this, "blob"), bt(this, "is_stream"), bt(this, "mime_type"), bt(this, "alt_text"), bt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class S2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Qn(this, Vt) + t; ; ) {
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
        S1(this, Vt, t);
      },
      flush: (t) => {
        if (Qn(this, Vt) === "")
          return;
        const n = e.allowCR && Qn(this, Vt).endsWith("\r") ? Qn(this, Vt).slice(0, -1) : Qn(this, Vt);
        t.enqueue(n);
      }
    }), C1(this, Vt, "");
  }
}
Vt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: B1,
  append: Ee,
  attr: nn,
  detach: Sr,
  element: ln,
  init: q1,
  insert: zr,
  noop: jo,
  safe_not_equal: D1,
  set_data: xi,
  set_style: Gl,
  space: ks,
  text: Rn,
  toggle_class: Fo
} = window.__gradio__svelte__internal, { onMount: L1, createEventDispatcher: E1, onDestroy: M1 } = window.__gradio__svelte__internal;
function Uo(i) {
  let e, t, n, l, s = si(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = ln("div"), t = ln("span"), n = ln("div"), l = ln("progress"), o = Rn(s), a = ks(), f = ln("span"), u = Rn(c), Gl(l, "visibility", "hidden"), Gl(l, "height", "0"), Gl(l, "width", "0"), l.value = r = si(
        /*file_to_display*/
        i[2]
      ), nn(l, "max", "100"), nn(l, "class", "svelte-cr2edf"), nn(n, "class", "progress-bar svelte-cr2edf"), nn(f, "class", "file-name svelte-cr2edf"), nn(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      zr(_, e, d), Ee(e, t), Ee(t, n), Ee(n, l), Ee(l, o), Ee(e, a), Ee(e, f), Ee(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = si(
        /*file_to_display*/
        _[2]
      ) + "") && xi(o, s), d & /*file_to_display*/
      4 && r !== (r = si(
        /*file_to_display*/
        _[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && xi(u, c);
    },
    d(_) {
      _ && Sr(e);
    }
  };
}
function R1(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    i[2] && Uo(i)
  );
  return {
    c() {
      e = ln("div"), t = ln("span"), n = Rn("Uploading "), s = Rn(l), o = ks(), a = Rn(r), f = Rn("..."), c = ks(), u && u.c(), nn(t, "class", "uploading svelte-cr2edf"), nn(e, "class", "wrap svelte-cr2edf"), Fo(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      zr(_, e, d), Ee(e, t), Ee(t, n), Ee(t, s), Ee(t, o), Ee(t, a), Ee(t, f), Ee(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      _[0].length + "") && xi(s, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && xi(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Uo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Fo(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: jo,
    o: jo,
    d(_) {
      _ && Sr(e), u && u.d();
    }
  };
}
function si(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function A1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += si(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function W1(i, e, t) {
  var n = this && this.__awaiter || function(h, g, v, w) {
    function b(k) {
      return k instanceof v ? k : new v(function(p) {
        p(k);
      });
    }
    return new (v || (v = Promise))(function(k, p) {
      function y(z) {
        try {
          C(w.next(z));
        } catch (S) {
          p(S);
        }
      }
      function q(z) {
        try {
          C(w.throw(z));
        } catch (S) {
          p(S);
        }
      }
      function C(z) {
        z.done ? k(z.value) : b(z.value).then(y, q);
      }
      C((w = w.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = E1();
  function m(h, g) {
    t(0, _ = _.map((v) => (v.orig_name === h && (v.progress += g), v)));
  }
  return L1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), M1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, s = h.root), "files" in h && t(5, o = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && A1(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class H1 extends B1 {
  constructor(e) {
    super(), q1(this, e, W1, R1, D1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: I1,
  append: Vo,
  attr: ve,
  binding_callbacks: T1,
  bubble: Gt,
  check_outros: Br,
  create_component: X1,
  create_slot: qr,
  destroy_component: Y1,
  detach: dl,
  element: ys,
  empty: Dr,
  get_all_dirty_from_scope: Lr,
  get_slot_changes: Er,
  group_outros: Mr,
  init: j1,
  insert: hl,
  listen: He,
  mount_component: F1,
  prevent_default: Kt,
  run_all: U1,
  safe_not_equal: V1,
  set_style: Rr,
  space: N1,
  stop_propagation: Jt,
  toggle_class: ge,
  transition_in: Ot,
  transition_out: hn,
  update_slot_base: Ar
} = window.__gradio__svelte__internal, { createEventDispatcher: O1, tick: P1 } = window.__gradio__svelte__internal;
function Z1(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = qr(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ys("button"), d && d.c(), t = N1(), n = ys("input"), ve(n, "aria-label", "file upload"), ve(n, "data-testid", "file-upload"), ve(n, "type", "file"), ve(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = s = /*file_count*/
      i[6] === "multiple" || void 0, ve(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), ve(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ve(n, "class", "svelte-1s26xmt"), ve(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ve(e, "class", "svelte-1s26xmt"), ge(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ge(
        e,
        "center",
        /*center*/
        i[4]
      ), ge(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ge(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ge(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Rr(e, "height", "100%");
    },
    m(m, h) {
      hl(m, e, h), d && d.m(e, null), Vo(e, t), Vo(e, n), i[34](n), f = !0, c || (u = [
        He(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        He(e, "drag", Jt(Kt(
          /*drag_handler*/
          i[27]
        ))),
        He(e, "dragstart", Jt(Kt(
          /*dragstart_handler*/
          i[28]
        ))),
        He(e, "dragend", Jt(Kt(
          /*dragend_handler*/
          i[29]
        ))),
        He(e, "dragover", Jt(Kt(
          /*dragover_handler*/
          i[30]
        ))),
        He(e, "dragenter", Jt(Kt(
          /*dragenter_handler*/
          i[31]
        ))),
        He(e, "dragleave", Jt(Kt(
          /*dragleave_handler*/
          i[32]
        ))),
        He(e, "drop", Jt(Kt(
          /*drop_handler*/
          i[33]
        ))),
        He(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        He(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        He(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        He(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!f || h[0] & /*$$scope*/
      33554432) && Ar(
        d,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Er(
          _,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Lr(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && ve(n, "accept", l), (!f || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = s), (!f || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "directory" || void 0)) && ve(n, "webkitdirectory", o), (!f || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && ve(n, "mozdirectory", r), (!f || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && ve(e, "tabindex", a), (!f || h[0] & /*hidden*/
      512) && ge(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || h[0] & /*center*/
      16) && ge(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || h[0] & /*boundedheight*/
      8) && ge(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || h[0] & /*flex*/
      32) && ge(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || h[0] & /*disable_click*/
      128) && ge(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Ot(d, m), f = !0);
    },
    o(m) {
      hn(d, m), f = !1;
    },
    d(m) {
      m && dl(e), d && d.d(m), i[34](null), c = !1, U1(u);
    }
  };
}
function G1(i) {
  let e, t, n = !/*hidden*/
  i[9] && No(i);
  return {
    c() {
      n && n.c(), e = Dr();
    },
    m(l, s) {
      n && n.m(l, s), hl(l, e, s), t = !0;
    },
    p(l, s) {
      /*hidden*/
      l[9] ? n && (Mr(), hn(n, 1, 1, () => {
        n = null;
      }), Br()) : n ? (n.p(l, s), s[0] & /*hidden*/
      512 && Ot(n, 1)) : (n = No(l), n.c(), Ot(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Ot(n), t = !0);
    },
    o(l) {
      hn(n), t = !1;
    },
    d(l) {
      l && dl(e), n && n.d(l);
    }
  };
}
function K1(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[26].default
  ), r = qr(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ys("button"), r && r.c(), ve(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ve(e, "class", "svelte-1s26xmt"), ge(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ge(
        e,
        "center",
        /*center*/
        i[4]
      ), ge(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ge(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Rr(e, "height", "100%");
    },
    m(a, f) {
      hl(a, e, f), r && r.m(e, null), n = !0, l || (s = He(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Ar(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Er(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Lr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ve(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && ge(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && ge(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && ge(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && ge(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Ot(r, a), n = !0);
    },
    o(a) {
      hn(r, a), n = !1;
    },
    d(a) {
      a && dl(e), r && r.d(a), l = !1, s();
    }
  };
}
function No(i) {
  let e, t;
  return e = new H1({
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
      X1(e.$$.fragment);
    },
    m(n, l) {
      F1(e, n, l), t = !0;
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
      t || (Ot(e.$$.fragment, n), t = !0);
    },
    o(n) {
      hn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Y1(e, n);
    }
  };
}
function J1(i) {
  let e, t, n, l;
  const s = [K1, G1, Z1], o = [];
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
      t.c(), n = Dr();
    },
    m(a, f) {
      o[e].m(a, f), hl(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Mr(), hn(o[c], 1, 1, () => {
        o[c] = null;
      }), Br(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Ot(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Ot(t), l = !0);
    },
    o(a) {
      hn(t), l = !1;
    },
    d(a) {
      a && dl(n), o[e].d(a);
    }
  };
}
function Q1(i, e, t) {
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
function x1(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(E, X, $, ie) {
    function L(Ke) {
      return Ke instanceof $ ? Ke : new $(function(Ue) {
        Ue(Ke);
      });
    }
    return new ($ || ($ = Promise))(function(Ke, Ue) {
      function Je(xe) {
        try {
          Qe(ie.next(xe));
        } catch (Zt) {
          Ue(Zt);
        }
      }
      function Ce(xe) {
        try {
          Qe(ie.throw(xe));
        } catch (Zt) {
          Ue(Zt);
        }
      }
      function Qe(xe) {
        xe.done ? Ke(xe.value) : L(xe.value).then(Je, Ce);
      }
      Qe((ie = ie.apply(E, X || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: v = null } = e, { show_progress: w = !0 } = e, { max_file_size: b = null } = e, { upload: k } = e, { stream_handler: p } = e, y, q, C;
  const z = O1(), S = ["image", "video", "audio", "text", "file"], W = (E) => E.startsWith(".") || E.endsWith("/*") ? E : S.includes(E) ? E + "/*" : "." + E;
  function A() {
    t(20, r = !r);
  }
  function F() {
    navigator.clipboard.read().then((E) => s(this, void 0, void 0, function* () {
      for (let X = 0; X < E.length; X++) {
        const $ = E[X].types.find((ie) => ie.startsWith("image/"));
        if ($) {
          E[X].getType($).then((ie) => s(this, void 0, void 0, function* () {
            const L = new File([ie], `clipboard.${$.replace("image/", "")}`);
            yield U([L]);
          }));
          break;
        }
      }
    }));
  }
  function K() {
    _ || v && (t(2, v.value = "", v), v.click());
  }
  function ne(E) {
    return s(this, void 0, void 0, function* () {
      yield P1(), t(14, y = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const X = yield k(E, d, y, b ?? 1 / 0);
        return z("load", u === "single" ? X == null ? void 0 : X[0] : X), t(1, g = !1), X || [];
      } catch (X) {
        return z("error", X.message), t(1, g = !1), [];
      }
    });
  }
  function U(E) {
    return s(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let X = E.map(($) => new File([$], $ instanceof File ? $.name : "file", { type: $.type }));
      return t(15, q = yield Cr(X)), yield ne(q);
    });
  }
  function Q(E) {
    return s(this, void 0, void 0, function* () {
      const X = E.target;
      if (X.files)
        if (h != "blob")
          yield U(Array.from(X.files));
        else {
          if (u === "single") {
            z("load", X.files[0]);
            return;
          }
          z("load", X.files);
        }
    });
  }
  function M(E) {
    return s(this, void 0, void 0, function* () {
      var X;
      if (t(20, r = !1), !(!((X = E.dataTransfer) === null || X === void 0) && X.files)) return;
      const $ = Array.from(E.dataTransfer.files).filter((ie) => {
        const L = "." + ie.name.split(".").pop();
        return L && Q1(C, L, ie.type) || (L && Array.isArray(o) ? o.includes(L) : L === o) ? !0 : (z("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield U($);
    });
  }
  function V(E) {
    Gt.call(this, i, E);
  }
  function R(E) {
    Gt.call(this, i, E);
  }
  function Z(E) {
    Gt.call(this, i, E);
  }
  function x(E) {
    Gt.call(this, i, E);
  }
  function J(E) {
    Gt.call(this, i, E);
  }
  function O(E) {
    Gt.call(this, i, E);
  }
  function H(E) {
    Gt.call(this, i, E);
  }
  function Fe(E) {
    T1[E ? "unshift" : "push"](() => {
      v = E, t(2, v);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, o = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, f = E.center), "flex" in E && t(5, c = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, _ = E.disable_click), "root" in E && t(8, d = E.root), "hidden" in E && t(9, m = E.hidden), "format" in E && t(21, h = E.format), "uploading" in E && t(1, g = E.uploading), "hidden_upload" in E && t(2, v = E.hidden_upload), "show_progress" in E && t(10, w = E.show_progress), "max_file_size" in E && t(22, b = E.max_file_size), "upload" in E && t(23, k = E.upload), "stream_handler" in E && t(11, p = E.stream_handler), "$$scope" in E && t(25, l = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, C = null) : typeof o == "string" ? t(16, C = W(o)) : (t(0, o = o.map(W)), t(16, C = o.join(", "))));
  }, [
    o,
    g,
    v,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    w,
    p,
    F,
    K,
    y,
    q,
    C,
    A,
    Q,
    M,
    r,
    h,
    b,
    k,
    U,
    l,
    n,
    V,
    R,
    Z,
    x,
    J,
    O,
    H,
    Fe
  ];
}
class $1 extends I1 {
  constructor(e) {
    super(), j1(
      this,
      e,
      x1,
      J1,
      V1,
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
  SvelteComponent: eh,
  append: qi,
  attr: Kl,
  create_component: th,
  destroy_component: nh,
  detach: ih,
  element: Jl,
  init: lh,
  insert: sh,
  listen: oh,
  mount_component: ah,
  noop: rh,
  safe_not_equal: fh,
  set_style: ch,
  space: uh,
  text: _h,
  transition_in: dh,
  transition_out: hh
} = window.__gradio__svelte__internal, { createEventDispatcher: mh } = window.__gradio__svelte__internal;
function gh(i) {
  let e, t, n, l, s, o = "Click to Access Webcam", r, a, f, c;
  return l = new Qa({}), {
    c() {
      e = Jl("button"), t = Jl("div"), n = Jl("span"), th(l.$$.fragment), s = uh(), r = _h(o), Kl(n, "class", "icon-wrap svelte-fjcd9c"), Kl(t, "class", "wrap svelte-fjcd9c"), Kl(e, "class", "svelte-fjcd9c"), ch(e, "height", "100%");
    },
    m(u, _) {
      sh(u, e, _), qi(e, t), qi(t, n), ah(l, n, null), qi(t, s), qi(t, r), a = !0, f || (c = oh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), f = !0);
    },
    p: rh,
    i(u) {
      a || (dh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      hh(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && ih(e), nh(l), f = !1, c();
    }
  };
}
function bh(i) {
  const e = mh();
  return [e, () => e("click")];
}
class wh extends eh {
  constructor(e) {
    super(), lh(this, e, bh, gh, fh, {});
  }
}
function vh() {
  return navigator.mediaDevices.enumerateDevices();
}
function ph(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Oo(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((s) => (ph(s, e), s));
}
function kh(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: yh,
  action_destroyer: Ch,
  add_render_callback: Sh,
  append: Dt,
  attr: de,
  binding_callbacks: zh,
  check_outros: ri,
  create_component: Un,
  create_in_transition: Bh,
  destroy_component: Vn,
  destroy_each: qh,
  detach: Me,
  element: je,
  empty: Ts,
  ensure_array_like: Po,
  group_outros: fi,
  init: Dh,
  insert: Re,
  listen: $i,
  mount_component: Nn,
  noop: Xs,
  run_all: Lh,
  safe_not_equal: Eh,
  set_data: Wr,
  set_input_value: Cs,
  space: di,
  stop_propagation: Mh,
  text: Hr,
  toggle_class: Di,
  transition_in: be,
  transition_out: ke
} = window.__gradio__svelte__internal, { createEventDispatcher: Rh, onMount: Ah } = window.__gradio__svelte__internal;
function Zo(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Wh(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = [Th, Ih], d = [];
  function m(v, w) {
    return (
      /*mode*/
      v[1] === "video" || /*streaming*/
      v[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = _[n](i);
  let h = !/*recording*/
  i[8] && Go(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Ko(i)
  );
  return {
    c() {
      e = je("div"), t = je("button"), l.c(), o = di(), h && h.c(), r = di(), g && g.c(), a = Ts(), de(t, "aria-label", s = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), de(t, "class", "svelte-8hqvb6"), de(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(v, w) {
      Re(v, e, w), Dt(e, t), d[n].m(t, null), Dt(e, o), h && h.m(e, null), Re(v, r, w), g && g.m(v, w), Re(v, a, w), f = !0, c || (u = $i(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(v, w) {
      let b = n;
      n = m(v), n === b ? d[n].p(v, w) : (fi(), ke(d[b], 1, 1, () => {
        d[b] = null;
      }), ri(), l = d[n], l ? l.p(v, w) : (l = d[n] = _[n](v), l.c()), be(l, 1), l.m(t, null)), (!f || w[0] & /*mode*/
      2 && s !== (s = /*mode*/
      v[1] === "image" ? "capture photo" : "start recording")) && de(t, "aria-label", s), /*recording*/
      v[8] ? h && (fi(), ke(h, 1, 1, () => {
        h = null;
      }), ri()) : h ? (h.p(v, w), w[0] & /*recording*/
      256 && be(h, 1)) : (h = Go(v), h.c(), be(h, 1), h.m(e, null)), /*options_open*/
      v[10] && /*selected_device*/
      v[7] ? g ? (g.p(v, w), w[0] & /*options_open, selected_device*/
      1152 && be(g, 1)) : (g = Ko(v), g.c(), be(g, 1), g.m(a.parentNode, a)) : g && (fi(), ke(g, 1, 1, () => {
        g = null;
      }), ri());
    },
    i(v) {
      f || (be(l), be(h), be(g), f = !0);
    },
    o(v) {
      ke(l), ke(h), ke(g), f = !1;
    },
    d(v) {
      v && (Me(e), Me(r), Me(a)), d[n].d(), h && h.d(), g && g.d(v), c = !1, u();
    }
  };
}
function Hh(i) {
  let e, t, n, l;
  return t = new wh({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = je("div"), Un(t.$$.fragment), de(e, "title", "grant webcam access");
    },
    m(s, o) {
      Re(s, e, o), Nn(t, e, null), l = !0;
    },
    p: Xs,
    i(s) {
      l || (be(t.$$.fragment, s), s && (n || Sh(() => {
        n = Bh(e, Cd, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(s) {
      ke(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Me(e), Vn(t);
    }
  };
}
function Ih(i) {
  let e, t, n;
  return t = new iu({}), {
    c() {
      e = je("div"), Un(t.$$.fragment), de(e, "class", "icon svelte-8hqvb6"), de(e, "title", "capture photo");
    },
    m(l, s) {
      Re(l, e, s), Nn(t, e, null), n = !0;
    },
    p: Xs,
    i(l) {
      n || (be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ke(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Me(e), Vn(t);
    }
  };
}
function Th(i) {
  let e, t, n, l;
  const s = [Yh, Xh], o = [];
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
      o[e].m(a, f), Re(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (fi(), ke(o[c], 1, 1, () => {
        o[c] = null;
      }), ri(), t = o[e], t || (t = o[e] = s[e](a), t.c()), be(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (be(t), l = !0);
    },
    o(a) {
      ke(t), l = !1;
    },
    d(a) {
      a && Me(n), o[e].d(a);
    }
  };
}
function Xh(i) {
  let e, t, n;
  return t = new uu({}), {
    c() {
      e = je("div"), Un(t.$$.fragment), de(e, "class", "icon red svelte-8hqvb6"), de(e, "title", "start recording");
    },
    m(l, s) {
      Re(l, e, s), Nn(t, e, null), n = !0;
    },
    i(l) {
      n || (be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ke(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Me(e), Vn(t);
    }
  };
}
function Yh(i) {
  let e, t, n;
  return t = new y_({}), {
    c() {
      e = je("div"), Un(t.$$.fragment), de(e, "class", "icon red svelte-8hqvb6"), de(e, "title", "stop recording");
    },
    m(l, s) {
      Re(l, e, s), Nn(t, e, null), n = !0;
    },
    i(l) {
      n || (be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ke(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Me(e), Vn(t);
    }
  };
}
function Go(i) {
  let e, t, n, l, s;
  return t = new Rs({}), {
    c() {
      e = je("button"), Un(t.$$.fragment), de(e, "class", "icon svelte-8hqvb6"), de(e, "aria-label", "select input source");
    },
    m(o, r) {
      Re(o, e, r), Nn(t, e, null), n = !0, l || (s = $i(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: Xs,
    i(o) {
      n || (be(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ke(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Me(e), Vn(t), l = !1, s();
    }
  };
}
function Ko(i) {
  let e, t, n, l, s, o, r;
  n = new Rs({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Fh : jh
    );
  }
  let f = a(i), c = f(i);
  return {
    c() {
      e = je("select"), t = je("button"), Un(n.$$.fragment), l = di(), c.c(), de(t, "class", "inset-icon svelte-8hqvb6"), de(e, "class", "select-wrap svelte-8hqvb6"), de(e, "aria-label", "select source");
    },
    m(u, _) {
      Re(u, e, _), Dt(e, t), Nn(n, t, null), Dt(t, l), c.m(e, null), s = !0, o || (r = [
        $i(t, "click", Mh(
          /*click_handler_2*/
          i[22]
        )),
        Ch(Ys.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        $i(
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
      s || (be(n.$$.fragment, u), s = !0);
    },
    o(u) {
      ke(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Me(e), Vn(n), c.d(), o = !1, Lh(r);
    }
  };
}
function jh(i) {
  let e, t = Po(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Jo(Zo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Ts();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      Re(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = Po(
          /*available_video_devices*/
          l[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Zo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Jo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Me(e), qh(n, l);
    }
  };
}
function Fh(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = je("option"), n = Hr(t), e.__value = "", Cs(e, e.__value), de(e, "class", "svelte-8hqvb6");
    },
    m(l, s) {
      Re(l, e, s), Dt(e, n);
    },
    p(l, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && Wr(n, t);
    },
    d(l) {
      l && Me(e);
    }
  };
}
function Jo(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, s, o;
  return {
    c() {
      e = je("option"), n = Hr(t), l = di(), e.__value = s = /*device*/
      i[32].deviceId, Cs(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, de(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Re(r, e, a), Dt(e, n), Dt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Wr(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, Cs(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Me(e);
    }
  };
}
function Uh(i) {
  let e, t, n, l, s, o;
  const r = [Hh, Wh], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = f(i), s = a[l] = r[l](i), {
    c() {
      e = je("div"), t = je("video"), n = di(), s.c(), de(t, "class", "svelte-8hqvb6"), Di(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Di(t, "hide", !/*webcam_accessed*/
      i[9]), de(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Re(c, e, u), Dt(e, t), i[19](t), Dt(e, n), a[l].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Di(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Di(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = l;
      l = f(c), l === _ ? a[l].p(c, u) : (fi(), ke(a[_], 1, 1, () => {
        a[_] = null;
      }), ri(), s = a[l], s ? s.p(c, u) : (s = a[l] = r[l](c), s.c()), be(s, 1), s.m(e, null));
    },
    i(c) {
      o || (be(s), o = !0);
    },
    o(c) {
      ke(s), o = !1;
    },
    d(c) {
      c && Me(e), i[19](null), a[l].d();
    }
  };
}
function Ys(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Vh(i, e, t) {
  var n = this && this.__awaiter || function(M, V, R, Z) {
    function x(J) {
      return J instanceof R ? J : new R(function(O) {
        O(J);
      });
    }
    return new (R || (R = Promise))(function(J, O) {
      function H(X) {
        try {
          E(Z.next(X));
        } catch ($) {
          O($);
        }
      }
      function Fe(X) {
        try {
          E(Z.throw(X));
        } catch ($) {
          O($);
        }
      }
      function E(X) {
        X.done ? J(X.value) : x(X.value).then(H, Fe);
      }
      E((Z = Z.apply(M, V || [])).next());
    });
  };
  let l, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Rh();
  Ah(() => r = document.createElement("canvas"));
  const v = (M) => n(void 0, void 0, void 0, function* () {
    const R = M.target.value;
    yield Oo(d, l, R).then((Z) => n(void 0, void 0, void 0, function* () {
      y = Z, t(7, o = s.find((x) => x.deviceId === R) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Oo(d, l).then((M) => n(this, void 0, void 0, function* () {
          t(9, S = !0), t(6, s = yield vh()), y = M;
        })).then(() => kh(s)).then((M) => {
          t(6, s = M);
          const V = y.getTracks().map((R) => {
            var Z;
            return (Z = R.getSettings()) === null || Z === void 0 ? void 0 : Z.deviceId;
          })[0];
          t(7, o = V && M.find((R) => R.deviceId === V) || s[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (M) {
        if (M instanceof DOMException && M.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw M;
      }
    });
  }
  function b() {
    var M = r.getContext("2d");
    (!a || a && k) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, M.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), _ && (M.scale(-1, 1), M.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (V) => {
        g(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, p = [], y, q, C;
  function z() {
    if (k) {
      C.stop();
      let M = new Blob(p, { type: q }), V = new FileReader();
      V.onload = function(R) {
        return n(this, void 0, void 0, function* () {
          var Z;
          if (R.target) {
            let x = new File([M], "sample." + q.substring(6));
            const J = yield Cr([x]);
            let O = ((Z = yield h(J, c)) === null || Z === void 0 ? void 0 : Z.filter(Boolean))[0];
            g("capture", O), g("stop_recording");
          }
        });
      }, V.readAsDataURL(M);
    } else {
      g("start_recording"), p = [];
      let M = ["video/webm", "video/mp4"];
      for (let V of M)
        if (MediaRecorder.isTypeSupported(V)) {
          q = V;
          break;
        }
      if (q === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      C = new MediaRecorder(y, { mimeType: q }), C.addEventListener("dataavailable", function(V) {
        p.push(V.data);
      }), C.start(200);
    }
    t(8, k = !k);
  }
  let S = !1;
  function W() {
    u === "image" && a && t(8, k = !k), u === "image" ? b() : z(), !k && y && (y.getTracks().forEach((M) => M.stop()), t(5, l.srcObject = null, l), t(9, S = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !f && b();
    },
    500
  );
  let A = !1;
  function F(M) {
    M.preventDefault(), M.stopPropagation(), t(10, A = !1);
  }
  function K(M) {
    zh[M ? "unshift" : "push"](() => {
      l = M, t(5, l);
    });
  }
  const ne = async () => w(), U = () => t(10, A = !0), Q = () => t(10, A = !1);
  return i.$$set = (M) => {
    "streaming" in M && t(0, a = M.streaming), "pending" in M && t(15, f = M.pending), "root" in M && t(16, c = M.root), "mode" in M && t(1, u = M.mode), "mirror_webcam" in M && t(2, _ = M.mirror_webcam), "include_audio" in M && t(17, d = M.include_audio), "i18n" in M && t(3, m = M.i18n), "upload" in M && t(18, h = M.upload);
  }, [
    a,
    u,
    _,
    m,
    Ys,
    l,
    s,
    o,
    k,
    S,
    A,
    v,
    w,
    W,
    F,
    f,
    c,
    d,
    h,
    K,
    ne,
    U,
    Q
  ];
}
class Nh extends yh {
  constructor(e) {
    super(), Dh(
      this,
      e,
      Vh,
      Uh,
      Eh,
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
    return Ys;
  }
}
const {
  SvelteComponent: Oh,
  append: Xt,
  attr: I,
  detach: Ph,
  init: Zh,
  insert: Gh,
  noop: Ql,
  safe_not_equal: Kh,
  set_style: Yt,
  svg_element: wt
} = window.__gradio__svelte__internal;
function Jh(i) {
  let e, t, n, l, s, o, r, a, f;
  return {
    c() {
      e = wt("svg"), t = wt("rect"), n = wt("rect"), l = wt("rect"), s = wt("rect"), o = wt("line"), r = wt("line"), a = wt("line"), f = wt("line"), I(t, "x", "2"), I(t, "y", "2"), I(t, "width", "5"), I(t, "height", "5"), I(t, "rx", "1"), I(t, "ry", "1"), I(t, "stroke-width", "2"), I(t, "fill", "none"), I(n, "x", "17"), I(n, "y", "2"), I(n, "width", "5"), I(n, "height", "5"), I(n, "rx", "1"), I(n, "ry", "1"), I(n, "stroke-width", "2"), I(n, "fill", "none"), I(l, "x", "2"), I(l, "y", "17"), I(l, "width", "5"), I(l, "height", "5"), I(l, "rx", "1"), I(l, "ry", "1"), I(l, "stroke-width", "2"), I(l, "fill", "none"), I(s, "x", "17"), I(s, "y", "17"), I(s, "width", "5"), I(s, "height", "5"), I(s, "rx", "1"), I(s, "ry", "1"), I(s, "stroke-width", "2"), I(s, "fill", "none"), I(o, "x1", "7.5"), I(o, "y1", "4.5"), I(o, "x2", "16"), I(o, "y2", "4.5"), Yt(o, "stroke-width", "2px"), I(r, "x1", "7.5"), I(r, "y1", "19.5"), I(r, "x2", "16"), I(r, "y2", "19.5"), Yt(r, "stroke-width", "2px"), I(a, "x1", "4.5"), I(a, "y1", "8"), I(a, "x2", "4.5"), I(a, "y2", "16"), Yt(a, "stroke-width", "2px"), I(f, "x1", "19.5"), I(f, "y1", "8"), I(f, "x2", "19.5"), I(f, "y2", "16"), Yt(f, "stroke-width", "2px"), I(e, "width", "100%"), I(e, "height", "100%"), I(e, "viewBox", "0 0 24 24"), I(e, "version", "1.1"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), I(e, "xml:space", "preserve"), I(e, "stroke", "currentColor"), Yt(e, "fill-rule", "evenodd"), Yt(e, "clip-rule", "evenodd"), Yt(e, "stroke-linecap", "round"), Yt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Gh(c, e, u), Xt(e, t), Xt(e, n), Xt(e, l), Xt(e, s), Xt(e, o), Xt(e, r), Xt(e, a), Xt(e, f);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(c) {
      c && Ph(e);
    }
  };
}
class Qh extends Oh {
  constructor(e) {
    super(), Zh(this, e, null, Jh, Kh, {});
  }
}
const {
  SvelteComponent: xh,
  append: $h,
  attr: it,
  detach: e0,
  init: t0,
  insert: n0,
  noop: xl,
  safe_not_equal: i0,
  set_style: Li,
  svg_element: Qo
} = window.__gradio__svelte__internal;
function l0(i) {
  let e, t;
  return {
    c() {
      e = Qo("svg"), t = Qo("path"), it(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), it(t, "fill", "none"), it(t, "stroke-width", "2"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24"), it(e, "version", "1.1"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), it(e, "xml:space", "preserve"), it(e, "stroke", "currentColor"), Li(e, "fill-rule", "evenodd"), Li(e, "clip-rule", "evenodd"), Li(e, "stroke-linecap", "round"), Li(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      n0(n, e, l), $h(e, t);
    },
    p: xl,
    i: xl,
    o: xl,
    d(n) {
      n && e0(e);
    }
  };
}
class s0 extends xh {
  constructor(e) {
    super(), t0(this, e, null, l0, i0, {});
  }
}
const {
  SvelteComponent: o0,
  append: a0,
  attr: lt,
  detach: r0,
  init: f0,
  insert: c0,
  noop: $l,
  safe_not_equal: u0,
  set_style: Ei,
  svg_element: xo
} = window.__gradio__svelte__internal;
function _0(i) {
  let e, t;
  return {
    c() {
      e = xo("svg"), t = xo("path"), lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), Ei(e, "fill-rule", "evenodd"), Ei(e, "clip-rule", "evenodd"), Ei(e, "stroke-linecap", "round"), Ei(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      c0(n, e, l), a0(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && r0(e);
    }
  };
}
class d0 extends o0 {
  constructor(e) {
    super(), f0(this, e, null, _0, u0, {});
  }
}
const {
  SvelteComponent: h0,
  append: $o,
  attr: vt,
  detach: m0,
  init: g0,
  insert: b0,
  noop: es,
  safe_not_equal: w0,
  set_style: Mi,
  svg_element: ts
} = window.__gradio__svelte__internal;
function v0(i) {
  let e, t, n;
  return {
    c() {
      e = ts("svg"), t = ts("path"), n = ts("path"), vt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), vt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "fill", "none"), vt(e, "stroke", "currentColor"), vt(e, "stroke-width", "2"), Mi(e, "fill-rule", "evenodd"), Mi(e, "clip-rule", "evenodd"), Mi(e, "stroke-linecap", "round"), Mi(e, "stroke-linejoin", "round");
    },
    m(l, s) {
      b0(l, e, s), $o(e, t), $o(e, n);
    },
    p: es,
    i: es,
    o: es,
    d(l) {
      l && m0(e);
    }
  };
}
class p0 extends h0 {
  constructor(e) {
    super(), g0(this, e, null, v0, w0, {});
  }
}
const {
  SvelteComponent: k0,
  append: y0,
  attr: jt,
  detach: C0,
  init: S0,
  insert: z0,
  noop: ns,
  safe_not_equal: B0,
  set_style: Ri,
  svg_element: ea
} = window.__gradio__svelte__internal;
function q0(i) {
  let e, t;
  return {
    c() {
      e = ea("svg"), t = ea("path"), jt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), jt(e, "width", "100%"), jt(e, "height", "100%"), jt(e, "viewBox", "0 0 24 24"), jt(e, "fill", "none"), jt(e, "stroke", "currentColor"), jt(e, "stroke-width", "2"), Ri(e, "fill-rule", "evenodd"), Ri(e, "clip-rule", "evenodd"), Ri(e, "stroke-linecap", "round"), Ri(e, "stroke-linejoin", "round"), jt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      z0(n, e, l), y0(e, t);
    },
    p: ns,
    i: ns,
    o: ns,
    d(n) {
      n && C0(e);
    }
  };
}
class D0 extends k0 {
  constructor(e) {
    super(), S0(this, e, null, q0, B0, {});
  }
}
const {
  SvelteComponent: L0,
  append: E0,
  attr: Ft,
  detach: M0,
  init: R0,
  insert: A0,
  noop: is,
  safe_not_equal: W0,
  set_style: Ai,
  svg_element: ta
} = window.__gradio__svelte__internal;
function H0(i) {
  let e, t;
  return {
    c() {
      e = ta("svg"), t = ta("path"), Ft(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Ai(e, "fill-rule", "evenodd"), Ai(e, "clip-rule", "evenodd"), Ai(e, "stroke-linecap", "round"), Ai(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      A0(n, e, l), E0(e, t);
    },
    p: is,
    i: is,
    o: is,
    d(n) {
      n && M0(e);
    }
  };
}
class I0 extends L0 {
  constructor(e) {
    super(), R0(this, e, null, H0, W0, {});
  }
}
const {
  SvelteComponent: T0,
  append: na,
  attr: ls,
  bubble: ia,
  create_component: X0,
  destroy_component: Y0,
  detach: Ir,
  element: la,
  init: j0,
  insert: Tr,
  listen: ss,
  mount_component: F0,
  run_all: U0,
  safe_not_equal: V0,
  set_data: N0,
  set_input_value: sa,
  space: O0,
  text: P0,
  transition_in: Z0,
  transition_out: G0
} = window.__gradio__svelte__internal, { createEventDispatcher: K0, afterUpdate: J0 } = window.__gradio__svelte__internal;
function Q0(i) {
  let e;
  return {
    c() {
      e = P0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Tr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && N0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Ir(e);
    }
  };
}
function x0(i) {
  let e, t, n, l, s, o, r;
  return t = new Na({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [Q0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = la("label"), X0(t.$$.fragment), n = O0(), l = la("input"), ls(l, "type", "color"), l.disabled = /*disabled*/
      i[3], ls(l, "class", "svelte-16l8u73"), ls(e, "class", "block");
    },
    m(a, f) {
      Tr(a, e, f), F0(t, e, null), na(e, n), na(e, l), sa(
        l,
        /*value*/
        i[0]
      ), s = !0, o || (r = [
        ss(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        ss(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        ss(
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
      1 && sa(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (Z0(t.$$.fragment, a), s = !0);
    },
    o(a) {
      G0(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Ir(e), Y0(t), o = !1, U0(r);
    }
  };
}
function $0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = K0();
  function c() {
    f("change", n), l || f("input");
  }
  J0(() => {
    t(5, l = !1);
  });
  function u(m) {
    ia.call(this, i, m);
  }
  function _(m) {
    ia.call(this, i, m);
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
class em extends T0 {
  constructor(e) {
    super(), j0(this, e, $0, x0, V0, {
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
  SvelteComponent: tm,
  append: Xr,
  attr: se,
  bubble: nm,
  check_outros: im,
  create_slot: Yr,
  detach: gi,
  element: ml,
  empty: lm,
  get_all_dirty_from_scope: jr,
  get_slot_changes: Fr,
  group_outros: sm,
  init: om,
  insert: bi,
  listen: am,
  safe_not_equal: rm,
  set_style: Le,
  space: Ur,
  src_url_equal: el,
  toggle_class: An,
  transition_in: tl,
  transition_out: nl,
  update_slot_base: Vr
} = window.__gradio__svelte__internal;
function fm(i) {
  let e, t, n, l, s, o, r = (
    /*icon*/
    i[7] && oa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), f = Yr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = ml("button"), r && r.c(), t = Ur(), f && f.c(), se(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), se(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], An(e, "hidden", !/*visible*/
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
      bi(c, e, u), r && r.m(e, null), Xr(e, t), f && f.m(e, null), l = !0, s || (o = am(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = oa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!l || u & /*$$scope*/
      2048) && Vr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? Fr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : jr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && se(e, "class", n), (!l || u & /*elem_id*/
      1) && se(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && An(e, "hidden", !/*visible*/
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
      l || (tl(f, c), l = !0);
    },
    o(c) {
      nl(f, c), l = !1;
    },
    d(c) {
      c && gi(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function cm(i) {
  let e, t, n, l, s = (
    /*icon*/
    i[7] && aa(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = Yr(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = ml("a"), s && s.c(), t = Ur(), r && r.c(), se(
        e,
        "href",
        /*link*/
        i[6]
      ), se(e, "rel", "noopener noreferrer"), se(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), se(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), se(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), An(e, "hidden", !/*visible*/
      i[2]), An(
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
      bi(a, e, f), s && s.m(e, null), Xr(e, t), r && r.m(e, null), l = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = aa(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!l || f & /*$$scope*/
      2048) && Vr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        l ? Fr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : jr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || f & /*link*/
      64) && se(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || f & /*disabled*/
      256) && se(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && se(e, "class", n), (!l || f & /*elem_id*/
      1) && se(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || f & /*size, variant, elem_classes, visible*/
      30) && An(e, "hidden", !/*visible*/
      a[2]), (!l || f & /*size, variant, elem_classes, disabled*/
      282) && An(
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
      l || (tl(r, a), l = !0);
    },
    o(a) {
      nl(r, a), l = !1;
    },
    d(a) {
      a && gi(e), s && s.d(), r && r.d(a);
    }
  };
}
function oa(i) {
  let e, t, n;
  return {
    c() {
      e = ml("img"), se(e, "class", "button-icon svelte-8huxfn"), el(e.src, t = /*icon*/
      i[7].url) || se(e, "src", t), se(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      bi(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !el(e.src, t = /*icon*/
      l[7].url) && se(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && se(e, "alt", n);
    },
    d(l) {
      l && gi(e);
    }
  };
}
function aa(i) {
  let e, t, n;
  return {
    c() {
      e = ml("img"), se(e, "class", "button-icon svelte-8huxfn"), el(e.src, t = /*icon*/
      i[7].url) || se(e, "src", t), se(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      bi(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !el(e.src, t = /*icon*/
      l[7].url) && se(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && se(e, "alt", n);
    },
    d(l) {
      l && gi(e);
    }
  };
}
function um(i) {
  let e, t, n, l;
  const s = [cm, fm], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = lm();
    },
    m(a, f) {
      o[e].m(a, f), bi(a, n, f), l = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (sm(), nl(o[c], 1, 1, () => {
        o[c] = null;
      }), im(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), tl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (tl(t), l = !0);
    },
    o(a) {
      nl(t), l = !1;
    },
    d(a) {
      a && gi(n), o[e].d(a);
    }
  };
}
function _m(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(v) {
    nm.call(this, i, v);
  }
  return i.$$set = (v) => {
    "elem_id" in v && t(0, s = v.elem_id), "elem_classes" in v && t(1, o = v.elem_classes), "visible" in v && t(2, r = v.visible), "variant" in v && t(3, a = v.variant), "size" in v && t(4, f = v.size), "value" in v && t(5, c = v.value), "link" in v && t(6, u = v.link), "icon" in v && t(7, _ = v.icon), "disabled" in v && t(8, d = v.disabled), "scale" in v && t(9, m = v.scale), "min_width" in v && t(10, h = v.min_width), "$$scope" in v && t(11, l = v.$$scope);
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
class Ss extends tm {
  constructor(e) {
    super(), om(this, e, _m, um, rm, {
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
  SvelteComponent: dm,
  add_render_callback: Nr,
  append: Wi,
  attr: Te,
  binding_callbacks: ra,
  check_outros: hm,
  create_bidirectional_transition: fa,
  destroy_each: mm,
  detach: ci,
  element: il,
  empty: gm,
  ensure_array_like: ca,
  group_outros: bm,
  init: wm,
  insert: ui,
  listen: zs,
  prevent_default: vm,
  run_all: pm,
  safe_not_equal: km,
  set_data: ym,
  set_style: Bn,
  space: Bs,
  text: Cm,
  toggle_class: ct,
  transition_in: os,
  transition_out: ua
} = window.__gradio__svelte__internal, { createEventDispatcher: Sm } = window.__gradio__svelte__internal;
function _a(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function da(i) {
  let e, t, n, l, s, o = ca(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = ha(_a(i, o, a));
  return {
    c() {
      e = il("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Te(e, "class", "options svelte-yuohum"), Te(e, "role", "listbox"), Bn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Bn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Bn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, f) {
      ui(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (s = zs(e, "mousedown", vm(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = ca(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = _a(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = ha(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Bn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Bn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Bn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Nr(() => {
        n && (t || (t = fa(e, bo, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = fa(e, bo, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && ci(e), mm(r, a), i[22](null), a && t && t.end(), l = !1, s();
    }
  };
}
function ha(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = il("li"), t = il("span"), t.textContent = "✓", n = Bs(), s = Cm(l), o = Bs(), Te(t, "class", "inner-item svelte-yuohum"), ct(t, "hide", !/*selected_indices*/
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
      )), ct(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), ct(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ct(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ct(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      ui(c, e, u), Wi(e, t), Wi(e, n), Wi(e, s), Wi(e, o);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && ct(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && ym(s, l), u & /*filtered_indices*/
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
      18 && ct(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && ct(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ct(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ct(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && ci(e);
    }
  };
}
function zm(i) {
  let e, t, n, l, s;
  Nr(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && da(i)
  );
  return {
    c() {
      e = il("div"), t = Bs(), o && o.c(), n = gm(), Te(e, "class", "reference");
    },
    m(r, a) {
      ui(r, e, a), i[20](e), ui(r, t, a), o && o.m(r, a), ui(r, n, a), l || (s = [
        zs(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        zs(
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
      12 && os(o, 1)) : (o = da(r), o.c(), os(o, 1), o.m(n.parentNode, n)) : o && (bm(), ua(o, 1, 1, () => {
        o = null;
      }), hm());
    },
    i(r) {
      os(o);
    },
    o(r) {
      ua(o);
    },
    d(r) {
      r && (ci(e), ci(t), ci(n)), i[20](null), o && o.d(r), l = !1, pm(s);
    }
  };
}
function Bm(i, e, t) {
  var n, l;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, m, h, g, v, w, b;
  function k() {
    const { top: A, bottom: F } = h.getBoundingClientRect();
    t(16, u = A), t(17, _ = b - F);
  }
  let p = null;
  function y() {
    r && (p !== null && clearTimeout(p), p = setTimeout(
      () => {
        k(), p = null;
      },
      10
    ));
  }
  const q = Sm();
  function C() {
    t(11, b = window.innerHeight);
  }
  function z(A) {
    ra[A ? "unshift" : "push"](() => {
      h = A, t(6, h);
    });
  }
  const S = (A) => q("change", A);
  function W(A) {
    ra[A ? "unshift" : "push"](() => {
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
          let F = g.querySelectorAll("li");
          for (const K of Array.from(F))
            if (K.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, K.offsetTop);
              break;
            }
        }
        k();
        const A = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, m = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, w = _), t(9, v = null)) : (t(9, v = `${_ + d}px`), t(10, w = u - d));
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
    v,
    w,
    b,
    y,
    q,
    n,
    l,
    u,
    _,
    d,
    C,
    z,
    S,
    W
  ];
}
class qm extends dm {
  constructor(e) {
    super(), wm(this, e, Bm, zm, km, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Dm(i, e) {
  return (i % e + e) % e;
}
function ma(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function Lm(i, e, t) {
  i("change", e), t || i("input");
}
function Em(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Dm(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Mm,
  append: Qt,
  attr: Ie,
  binding_callbacks: Rm,
  check_outros: Am,
  create_component: qs,
  destroy_component: Ds,
  detach: js,
  element: Ln,
  group_outros: Wm,
  init: Hm,
  insert: Fs,
  listen: xn,
  mount_component: Ls,
  run_all: Im,
  safe_not_equal: Tm,
  set_data: Xm,
  set_input_value: ga,
  space: as,
  text: Ym,
  toggle_class: qn,
  transition_in: En,
  transition_out: oi
} = window.__gradio__svelte__internal, { onMount: jm } = window.__gradio__svelte__internal, { createEventDispatcher: Fm, afterUpdate: Um } = window.__gradio__svelte__internal;
function Vm(i) {
  let e;
  return {
    c() {
      e = Ym(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Fs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Xm(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && js(e);
    }
  };
}
function ba(i) {
  let e, t, n;
  return t = new Rs({}), {
    c() {
      e = Ln("div"), qs(t.$$.fragment), Ie(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, s) {
      Fs(l, e, s), Ls(t, e, null), n = !0;
    },
    i(l) {
      n || (En(t.$$.fragment, l), n = !0);
    },
    o(l) {
      oi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && js(e), Ds(t);
    }
  };
}
function Nm(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m;
  t = new Na({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Vm] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && ba();
  return u = new qm({
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
      e = Ln("div"), qs(t.$$.fragment), n = as(), l = Ln("div"), s = Ln("div"), o = Ln("div"), r = Ln("input"), f = as(), h && h.c(), c = as(), qs(u.$$.fragment), Ie(r, "role", "listbox"), Ie(r, "aria-controls", "dropdown-options"), Ie(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Ie(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Ie(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Ie(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], qn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Ie(o, "class", "secondary-wrap svelte-1m1zvyj"), Ie(s, "class", "wrap-inner svelte-1m1zvyj"), qn(
        s,
        "show_options",
        /*show_options*/
        i[12]
      ), Ie(l, "class", "wrap svelte-1m1zvyj"), Ie(e, "class", "svelte-1m1zvyj"), qn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, v) {
      Fs(g, e, v), Ls(t, e, null), Qt(e, n), Qt(e, l), Qt(l, s), Qt(s, o), Qt(o, r), ga(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), Qt(o, f), h && h.m(o, null), Qt(l, c), Ls(u, l, null), _ = !0, d || (m = [
        xn(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        xn(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        xn(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        xn(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        xn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], d = !0);
    },
    p(g, v) {
      const w = {};
      v[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      g[4]), v[0] & /*info*/
      2 && (w.info = /*info*/
      g[1]), v[0] & /*label*/
      1 | v[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: v, ctx: g }), t.$set(w), (!_ || v[0] & /*show_options*/
      4096) && Ie(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || v[0] & /*label*/
      1) && Ie(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || v[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || v[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), v[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && ga(
        r,
        /*input_text*/
        g[9]
      ), (!_ || v[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && qn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Wm(), oi(h, 1, 1, () => {
        h = null;
      }), Am()) : h ? v[0] & /*disabled*/
      8 && En(h, 1) : (h = ba(), h.c(), En(h, 1), h.m(o, null)), (!_ || v[0] & /*show_options*/
      4096) && qn(
        s,
        "show_options",
        /*show_options*/
        g[12]
      );
      const b = {};
      v[0] & /*show_options*/
      4096 && (b.show_options = /*show_options*/
      g[12]), v[0] & /*choices*/
      4 && (b.choices = /*choices*/
      g[2]), v[0] & /*filtered_indices*/
      1024 && (b.filtered_indices = /*filtered_indices*/
      g[10]), v[0] & /*disabled*/
      8 && (b.disabled = /*disabled*/
      g[3]), v[0] & /*selected_index*/
      2048 && (b.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), v[0] & /*active_index*/
      16384 && (b.active_index = /*active_index*/
      g[14]), u.$set(b), (!_ || v[0] & /*container*/
      32) && qn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (En(t.$$.fragment, g), En(h), En(u.$$.fragment, g), _ = !0);
    },
    o(g) {
      oi(t.$$.fragment, g), oi(h), oi(u.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && js(e), Ds(t), i[29](null), h && h.d(), Ds(u), d = !1, Im(m);
    }
  };
}
function Om(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, v, w, b = "", k = "", p = !1, y = [], q = null, C = null, z;
  const S = Fm();
  s ? (z = a.map((R) => R[1]).indexOf(s), C = z, C === -1 ? (o = s, C = null) : ([b, o] = a[C], k = b), A()) : a.length > 0 && (z = 0, C = 0, [b, s] = a[C], o = s, k = b);
  function W() {
    t(13, v = a.map((R) => R[0])), t(24, w = a.map((R) => R[1]));
  }
  function A() {
    W(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, b = ""), t(11, C = null)) : w.includes(s) ? (t(9, b = v[w.indexOf(s)]), t(11, C = w.indexOf(s))) : d ? (t(9, b = s), t(11, C = null)) : (t(9, b = ""), t(11, C = null)), t(27, z = C);
  }
  function F(R) {
    if (t(11, C = parseInt(R.detail.target.dataset.index)), isNaN(C)) {
      t(11, C = null);
      return;
    }
    t(12, g = !1), t(14, q = null), h.blur();
  }
  function K(R) {
    t(10, y = a.map((Z, x) => x)), t(12, g = !0), S("focus");
  }
  function ne() {
    d ? t(20, s = b) : t(9, b = v[w.indexOf(s)]), t(12, g = !1), t(14, q = null), S("blur");
  }
  function U(R) {
    t(12, [g, q] = Em(R, q, y), g, (t(14, q), t(2, a), t(23, f), t(6, d), t(9, b), t(10, y), t(8, h), t(25, k), t(11, C), t(27, z), t(26, p), t(24, w))), R.key === "Enter" && (q !== null ? (t(11, C = q), t(12, g = !1), h.blur(), t(14, q = null)) : v.includes(b) ? (t(11, C = v.indexOf(b)), t(12, g = !1), t(14, q = null), h.blur()) : d && (t(20, s = b), t(11, C = null), t(12, g = !1), t(14, q = null), h.blur()), S("enter", s));
  }
  Um(() => {
    t(21, r = !1), t(26, p = !0);
  }), jm(() => {
    h.focus();
  });
  function Q() {
    b = this.value, t(9, b), t(11, C), t(27, z), t(26, p), t(2, a), t(24, w);
  }
  function M(R) {
    Rm[R ? "unshift" : "push"](() => {
      h = R, t(8, h);
    });
  }
  const V = (R) => S("key_up", { key: R.key, input_value: b });
  return i.$$set = (R) => {
    "label" in R && t(0, n = R.label), "info" in R && t(1, l = R.info), "value" in R && t(20, s = R.value), "value_is_output" in R && t(21, r = R.value_is_output), "choices" in R && t(2, a = R.choices), "disabled" in R && t(3, c = R.disabled), "show_label" in R && t(4, u = R.show_label), "container" in R && t(5, _ = R.container), "allow_custom_value" in R && t(6, d = R.allow_custom_value), "filterable" in R && t(7, m = R.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== z && C !== null && p && (t(9, [b, s] = a[C], b, (t(20, s), t(11, C), t(27, z), t(26, p), t(2, a), t(24, w))), t(27, z = C), S("select", {
      index: C,
      value: w[C],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (A(), Lm(S, s, r), t(22, o = s)), i.$$.dirty[0] & /*choices*/
    4 && W(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, y = ma(a, b)), !d && y.length > 0 && t(14, q = y[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && b !== k && (t(10, y = ma(a, b)), t(25, k = b), !d && y.length > 0 && t(14, q = y[0]));
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
    v,
    q,
    S,
    F,
    K,
    ne,
    U,
    s,
    r,
    o,
    f,
    w,
    k,
    p,
    z,
    Q,
    M,
    V
  ];
}
class Pm extends Mm {
  constructor(e) {
    super(), Hm(
      this,
      e,
      Om,
      Nm,
      Tm,
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
  SvelteComponent: Zm,
  append: Oe,
  attr: Wn,
  check_outros: Es,
  create_component: an,
  destroy_component: rn,
  detach: On,
  element: _t,
  group_outros: Ms,
  init: Gm,
  insert: Pn,
  listen: Km,
  mount_component: fn,
  safe_not_equal: Jm,
  set_style: Hn,
  space: $n,
  text: Us,
  toggle_class: wa,
  transition_in: ye,
  transition_out: Xe
} = window.__gradio__svelte__internal, { createEventDispatcher: Qm } = window.__gradio__svelte__internal, { onMount: xm, onDestroy: $m } = window.__gradio__svelte__internal;
function va(i) {
  let e, t, n, l, s, o, r;
  const a = [tg, eg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = f[n] = a[n](i), {
    c() {
      e = _t("div"), t = _t("button"), l.c(), Wn(t, "class", "icon svelte-d9x7u0"), Wn(t, "aria-label", "Lock label detail"), wa(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Hn(e, "margin-right", "8px");
    },
    m(u, _) {
      Pn(u, e, _), Oe(e, t), f[n].m(t, null), s = !0, o || (r = Km(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Ms(), Xe(f[d], 1, 1, () => {
        f[d] = null;
      }), Es(), l = f[n], l || (l = f[n] = a[n](u), l.c()), ye(l, 1), l.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && wa(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (ye(l), s = !0);
    },
    o(u) {
      Xe(l), s = !1;
    },
    d(u) {
      u && On(e), f[n].d(), o = !1, r();
    }
  };
}
function eg(i) {
  let e, t;
  return e = new I0({}), {
    c() {
      an(e.$$.fragment);
    },
    m(n, l) {
      fn(e, n, l), t = !0;
    },
    i(n) {
      t || (ye(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function tg(i) {
  let e, t;
  return e = new D0({}), {
    c() {
      an(e.$$.fragment);
    },
    m(n, l) {
      fn(e, n, l), t = !0;
    },
    i(n) {
      t || (ye(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rn(e, n);
    }
  };
}
function ng(i) {
  let e;
  return {
    c() {
      e = Us("Cancel");
    },
    m(t, n) {
      Pn(t, e, n);
    },
    d(t) {
      t && On(e);
    }
  };
}
function pa(i) {
  let e, t, n;
  return t = new Ss({
    props: {
      variant: "stop",
      $$slots: { default: [ig] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = _t("div"), an(t.$$.fragment), Hn(e, "margin-right", "8px");
    },
    m(l, s) {
      Pn(l, e, s), fn(t, e, null), n = !0;
    },
    p(l, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: l }), t.$set(o);
    },
    i(l) {
      n || (ye(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Xe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && On(e), rn(t);
    }
  };
}
function ig(i) {
  let e;
  return {
    c() {
      e = Us("Remove");
    },
    m(t, n) {
      Pn(t, e, n);
    },
    d(t) {
      t && On(e);
    }
  };
}
function lg(i) {
  let e;
  return {
    c() {
      e = Us("OK");
    },
    m(t, n) {
      Pn(t, e, n);
    },
    d(t) {
      t && On(e);
    }
  };
}
function sg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h, g, v, w = !/*showRemove*/
  i[4] && va(i);
  o = new Pm({
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
  ), f = new em({
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
  ), _ = new Ss({
    props: {
      $$slots: { default: [ng] },
      $$scope: { ctx: i }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let b = (
    /*showRemove*/
    i[4] && pa(i)
  );
  return g = new Ss({
    props: {
      variant: "primary",
      $$slots: { default: [lg] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = _t("div"), t = _t("div"), n = _t("span"), w && w.c(), l = $n(), s = _t("div"), an(o.$$.fragment), r = $n(), a = _t("div"), an(f.$$.fragment), c = $n(), u = _t("div"), an(_.$$.fragment), d = $n(), b && b.c(), m = $n(), h = _t("div"), an(g.$$.fragment), Hn(s, "margin-right", "10px"), Hn(a, "margin-right", "40px"), Hn(a, "margin-bottom", "8px"), Hn(u, "margin-right", "8px"), Wn(n, "class", "model-content svelte-d9x7u0"), Wn(t, "class", "modal-container svelte-d9x7u0"), Wn(e, "class", "modal svelte-d9x7u0"), Wn(e, "id", "model-box-edit");
    },
    m(k, p) {
      Pn(k, e, p), Oe(e, t), Oe(t, n), w && w.m(n, null), Oe(n, l), Oe(n, s), fn(o, s, null), Oe(n, r), Oe(n, a), fn(f, a, null), Oe(n, c), Oe(n, u), fn(_, u, null), Oe(n, d), b && b.m(n, null), Oe(n, m), Oe(n, h), fn(g, h, null), v = !0;
    },
    p(k, [p]) {
      /*showRemove*/
      k[4] ? w && (Ms(), Xe(w, 1, 1, () => {
        w = null;
      }), Es()) : w ? (w.p(k, p), p & /*showRemove*/
      16 && ye(w, 1)) : (w = va(k), w.c(), ye(w, 1), w.m(n, l));
      const y = {};
      p & /*currentLabel*/
      1 && (y.value = /*currentLabel*/
      k[0]), p & /*choices*/
      8 && (y.choices = /*choices*/
      k[3]), o.$set(y);
      const q = {};
      p & /*currentColor*/
      2 && (q.value = /*currentColor*/
      k[1]), f.$set(q);
      const C = {};
      p & /*$$scope*/
      262144 && (C.$$scope = { dirty: p, ctx: k }), _.$set(C), /*showRemove*/
      k[4] ? b ? (b.p(k, p), p & /*showRemove*/
      16 && ye(b, 1)) : (b = pa(k), b.c(), ye(b, 1), b.m(n, m)) : b && (Ms(), Xe(b, 1, 1, () => {
        b = null;
      }), Es());
      const z = {};
      p & /*$$scope*/
      262144 && (z.$$scope = { dirty: p, ctx: k }), g.$set(z);
    },
    i(k) {
      v || (ye(w), ye(o.$$.fragment, k), ye(f.$$.fragment, k), ye(_.$$.fragment, k), ye(b), ye(g.$$.fragment, k), v = !0);
    },
    o(k) {
      Xe(w), Xe(o.$$.fragment, k), Xe(f.$$.fragment, k), Xe(_.$$.fragment, k), Xe(b), Xe(g.$$.fragment, k), v = !1;
    },
    d(k) {
      k && On(e), w && w.d(), rn(o), rn(f), rn(_), b && b.d(), rn(g);
    }
  };
}
function og(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = Qm();
  function _(p) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: p
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(p) {
    const { detail: y } = p;
    let q = y;
    Number.isInteger(q) ? (Array.isArray(o) && q < o.length && t(1, a = o[q]), Array.isArray(s) && q < s.length && t(0, l = s[q][0])) : t(0, l = q);
  }
  function m(p) {
    const { detail: y } = p;
    t(1, a = y);
  }
  function h(p) {
    d(p), _(1);
  }
  function g(p) {
    t(2, c = !c);
  }
  function v(p) {
    switch (p.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  xm(() => {
    document.addEventListener("keydown", v), t(0, l = n), t(1, a = r);
  }), $m(() => {
    document.removeEventListener("keydown", v);
  });
  const w = () => _(0), b = () => _(-1), k = () => _(1);
  return i.$$set = (p) => {
    "label" in p && t(10, n = p.label), "currentLabel" in p && t(0, l = p.currentLabel), "choices" in p && t(3, s = p.choices), "choicesColors" in p && t(11, o = p.choicesColors), "color" in p && t(12, r = p.color), "currentColor" in p && t(1, a = p.currentColor), "showRemove" in p && t(4, f = p.showRemove), "labelDetailLock" in p && t(2, c = p.labelDetailLock);
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
class Vs extends Zm {
  constructor(e) {
    super(), Gm(this, e, og, sg, Jm, {
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
const me = (i, e, t) => Math.min(Math.max(i, e), t);
function rs(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, s] = t;
  return `rgba(${n}, ${l}, ${s}, ${e})`;
}
class fs {
  constructor(e, t, n, l, s, o, r, a, f, c, u, _, d = "rgb(255, 255, 255)", m = 0.5, h = 25, g = 8, v = 2, w = 4, b = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (k) => {
      if (this.isDragging) {
        let p = (k.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (k.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const q = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        p = me(p, -this._xmin, q - this._xmax), y = me(y, -this._ymin, C - this._ymax), this._xmin += p, this._ymin += y, this._xmax += p, this._ymax += y, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (k) => {
      if (this.isCreating) {
        let [p, y] = this.toBoxCoordinates(k.clientX, k.clientY);
        p = (p - this.offsetMouseX) / this.canvasWindow.scale, y = (y - this.offsetMouseY) / this.canvasWindow.scale, p > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = p, this.creatingAnchorX = "xmin") : p > this._xmin && p < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = p : p > this._xmin && p < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = p : p < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = p, this.creatingAnchorX = "xmax"), y > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = y, this.creatingAnchorY = "ymin") : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = y : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = y : y < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = y, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (k) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const p = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = me(this._xmin, 0, p - this.minSize), this._ymin = me(this._ymin, 0, y - this.minSize), this._xmax = me(this._xmax, this.minSize, p), this._ymax = me(this._ymax, this.minSize, y), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > p ? (this._xmin -= this._xmax - p, this._xmax = p) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > y ? (this._ymin -= this._ymax - y, this._ymax = y) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (k) => {
      if (this.isResizing) {
        const p = k.clientX, y = k.clientY, q = (p - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (y - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += q, this._ymin += C, this._xmin = me(this._xmin, 0, this._xmax - this.minSize), this._ymin = me(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += q, this._ymin += C, this._xmax = me(this._xmax, this._xmin + this.minSize, z), this._ymin = me(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += q, this._ymax += C, this._xmax = me(this._xmax, this._xmin + this.minSize, z), this._ymax = me(this._ymax, this._ymin + this.minSize, S);
            break;
          case 3:
            this._xmin += q, this._ymax += C, this._xmin = me(this._xmin, 0, this._xmax - this.minSize), this._ymax = me(this._ymax, this._ymin + this.minSize, S);
            break;
          case 4:
            this._ymin += C, this._ymin = me(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += q, this._xmax = me(this._xmax, this._xmin + this.minSize, z);
            break;
          case 6:
            this._ymax += C, this._ymax = me(this._ymax, this._ymin + this.minSize, S);
            break;
          case 7:
            this._xmin += q, this._xmin = me(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = l, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = b, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = v, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = d, this.alpha = m, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = rs(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = rs(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, l, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, l, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = rs(this.color, 1);
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
const xt = [
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
class ag {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, l = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Hi(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Hi(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? l = Hi(l, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : l = Hi(l, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += l, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, l = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = l);
  }
}
const {
  SvelteComponent: rg,
  append: ut,
  attr: pe,
  binding_callbacks: fg,
  bubble: cs,
  check_outros: In,
  create_component: zt,
  destroy_component: Bt,
  detach: kt,
  element: Ct,
  empty: cg,
  group_outros: Tn,
  init: ug,
  insert: yt,
  is_function: _g,
  listen: Ye,
  mount_component: qt,
  noop: Or,
  run_all: Pr,
  safe_not_equal: dg,
  set_style: Ii,
  space: St,
  toggle_class: Ti,
  transition_in: te,
  transition_out: re
} = window.__gradio__svelte__internal, { onMount: hg, onDestroy: mg, createEventDispatcher: gg } = window.__gradio__svelte__internal;
function ka(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h, g, v;
  n = new Qh({}), o = new s0({});
  let w = (
    /*showRemoveButton*/
    i[1] && ya(i)
  ), b = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && Ca(i);
  return u = new L_({}), m = new h_({}), {
    c() {
      e = Ct("span"), t = Ct("button"), zt(n.$$.fragment), l = St(), s = Ct("button"), zt(o.$$.fragment), r = St(), w && w.c(), a = St(), b && b.c(), f = St(), c = Ct("button"), zt(u.$$.fragment), _ = St(), d = Ct("button"), zt(m.$$.fragment), pe(t, "class", "icon svelte-1m8vz1h"), pe(t, "aria-label", "Create box"), Ti(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].creation
      ), pe(s, "class", "icon svelte-1m8vz1h"), pe(s, "aria-label", "Edit boxes"), Ti(
        s,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[9].drag
      ), pe(c, "class", "icon svelte-1m8vz1h"), pe(c, "aria-label", "Rotate counterclockwise"), pe(d, "class", "icon svelte-1m8vz1h"), pe(d, "aria-label", "Rotate clockwise"), pe(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(k, p) {
      yt(k, e, p), ut(e, t), qt(n, t, null), ut(e, l), ut(e, s), qt(o, s, null), ut(e, r), w && w.m(e, null), ut(e, a), b && b.m(e, null), ut(e, f), ut(e, c), qt(u, c, null), ut(e, _), ut(e, d), qt(m, d, null), h = !0, g || (v = [
        Ye(
          t,
          "click",
          /*click_handler*/
          i[40]
        ),
        Ye(
          s,
          "click",
          /*click_handler_1*/
          i[41]
        ),
        Ye(
          c,
          "click",
          /*click_handler_4*/
          i[44]
        ),
        Ye(
          d,
          "click",
          /*click_handler_5*/
          i[45]
        )
      ], g = !0);
    },
    p(k, p) {
      (!h || p[0] & /*mode, Mode*/
      4608) && Ti(
        t,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[9].creation
      ), (!h || p[0] & /*mode, Mode*/
      4608) && Ti(
        s,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[9].drag
      ), /*showRemoveButton*/
      k[1] ? w ? (w.p(k, p), p[0] & /*showRemoveButton*/
      2 && te(w, 1)) : (w = ya(k), w.c(), te(w, 1), w.m(e, a)) : w && (Tn(), re(w, 1, 1, () => {
        w = null;
      }), In()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[16] ? b ? (b.p(k, p), p[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && te(b, 1)) : (b = Ca(k), b.c(), te(b, 1), b.m(e, f)) : b && (Tn(), re(b, 1, 1, () => {
        b = null;
      }), In());
    },
    i(k) {
      h || (te(n.$$.fragment, k), te(o.$$.fragment, k), te(w), te(b), te(u.$$.fragment, k), te(m.$$.fragment, k), h = !0);
    },
    o(k) {
      re(n.$$.fragment, k), re(o.$$.fragment, k), re(w), re(b), re(u.$$.fragment, k), re(m.$$.fragment, k), h = !1;
    },
    d(k) {
      k && kt(e), Bt(n), Bt(o), w && w.d(), b && b.d(), Bt(u), Bt(m), g = !1, Pr(v);
    }
  };
}
function ya(i) {
  let e, t, n, l, s;
  return t = new d0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), pe(e, "class", "icon svelte-1m8vz1h"), pe(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      yt(o, e, r), qt(t, e, null), n = !0, l || (s = Ye(
        e,
        "click",
        /*click_handler_2*/
        i[42]
      ), l = !0);
    },
    p: Or,
    i(o) {
      n || (te(t.$$.fragment, o), n = !0);
    },
    o(o) {
      re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && kt(e), Bt(t), l = !1, s();
    }
  };
}
function Ca(i) {
  let e, t, n, l, s;
  return t = new p0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), pe(e, "class", "icon svelte-1m8vz1h"), pe(e, "aria-label", "Edit label");
    },
    m(o, r) {
      yt(o, e, r), qt(t, e, null), n = !0, l || (s = Ye(
        e,
        "click",
        /*click_handler_3*/
        i[43]
      ), l = !0);
    },
    p: Or,
    i(o) {
      n || (te(t.$$.fragment, o), n = !0);
    },
    o(o) {
      re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && kt(e), Bt(t), l = !1, s();
    }
  };
}
function Sa(i) {
  let e, t;
  return e = new Vs({
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
        i[0].boxes.length ? mn(
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
    i[24]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[46]
  ), {
    c() {
      zt(e.$$.fragment);
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
      n[0].boxes.length ? mn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || (te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function za(i) {
  let e, t;
  return e = new Vs({
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
        i[0].boxes.length ? mn(
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
    i[25]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[47]
  ), {
    c() {
      zt(e.$$.fragment);
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
      n[0].boxes.length ? mn(
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
      t || (te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function Ba(i) {
  let e, t;
  return e = new Vs({
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
        i[0].boxes.length ? mn(
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
    i[26]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[48]
  ), {
    c() {
      zt(e.$$.fragment);
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
      n[0].boxes.length ? mn(
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
      t || (te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function bg(i) {
  let e, t, n, l, s, o, r, a, f, c, u = (
    /*interactive*/
    i[2] && ka(i)
  ), _ = (
    /*editModalVisible*/
    i[13] && Sa(i)
  ), d = (
    /*newModalVisible*/
    i[14] && za(i)
  ), m = (
    /*editDefaultLabelVisible*/
    i[15] && Ba(i)
  );
  return {
    c() {
      e = Ct("div"), t = Ct("canvas"), n = St(), u && u.c(), l = St(), _ && _.c(), s = St(), d && d.c(), o = St(), m && m.c(), r = cg(), Ii(
        t,
        "height",
        /*height*/
        i[6]
      ), Ii(
        t,
        "width",
        /*width*/
        i[7]
      ), pe(t, "class", "canvas-annotator svelte-1m8vz1h"), pe(e, "class", "canvas-container svelte-1m8vz1h"), pe(e, "tabindex", "-1");
    },
    m(h, g) {
      yt(h, e, g), ut(e, t), i[39](t), yt(h, n, g), u && u.m(h, g), yt(h, l, g), _ && _.m(h, g), yt(h, s, g), d && d.m(h, g), yt(h, o, g), m && m.m(h, g), yt(h, r, g), a = !0, f || (c = [
        Ye(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[17]
        ),
        Ye(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[18]
        ),
        Ye(t, "pointermove", function() {
          _g(
            /*handlesCursor*/
            i[8] ? (
              /*handlePointerMove*/
              i[19]
            ) : null
          ) && /*handlesCursor*/
          (i[8] ? (
            /*handlePointerMove*/
            i[19]
          ) : null).apply(this, arguments);
        }),
        Ye(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[23]
        ),
        Ye(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[20]
        ),
        Ye(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[29]
        ),
        Ye(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[30]
        )
      ], f = !0);
    },
    p(h, g) {
      i = h, (!a || g[0] & /*height*/
      64) && Ii(
        t,
        "height",
        /*height*/
        i[6]
      ), (!a || g[0] & /*width*/
      128) && Ii(
        t,
        "width",
        /*width*/
        i[7]
      ), /*interactive*/
      i[2] ? u ? (u.p(i, g), g[0] & /*interactive*/
      4 && te(u, 1)) : (u = ka(i), u.c(), te(u, 1), u.m(l.parentNode, l)) : u && (Tn(), re(u, 1, 1, () => {
        u = null;
      }), In()), /*editModalVisible*/
      i[13] ? _ ? (_.p(i, g), g[0] & /*editModalVisible*/
      8192 && te(_, 1)) : (_ = Sa(i), _.c(), te(_, 1), _.m(s.parentNode, s)) : _ && (Tn(), re(_, 1, 1, () => {
        _ = null;
      }), In()), /*newModalVisible*/
      i[14] ? d ? (d.p(i, g), g[0] & /*newModalVisible*/
      16384 && te(d, 1)) : (d = za(i), d.c(), te(d, 1), d.m(o.parentNode, o)) : d && (Tn(), re(d, 1, 1, () => {
        d = null;
      }), In()), /*editDefaultLabelVisible*/
      i[15] ? m ? (m.p(i, g), g[0] & /*editDefaultLabelVisible*/
      32768 && te(m, 1)) : (m = Ba(i), m.c(), te(m, 1), m.m(r.parentNode, r)) : m && (Tn(), re(m, 1, 1, () => {
        m = null;
      }), In());
    },
    i(h) {
      a || (te(u), te(_), te(d), te(m), a = !0);
    },
    o(h) {
      re(u), re(_), re(d), re(m), a = !1;
    },
    d(h) {
      h && (kt(e), kt(n), kt(l), kt(s), kt(o), kt(r)), i[39](null), u && u.d(h), _ && _.d(h), d && d.d(h), m && m.d(h), f = !1, Pr(c);
    }
  };
}
function Xi(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function mn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function wg(i, e, t) {
  var n;
  (function(B) {
    B[B.creation = 0] = "creation", B[B.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: b = !0 } = e, { useDefaultLabel: k = !1 } = e;
  w === null && (w = m);
  let p, y, q = null, C = -1, z = n.drag, S = new ag(O);
  u !== null && u.boxes.length == 0 && (z = n.creation);
  let W = 0, A = 0, F = 0, K = 0, ne = 1, U = 0, Q = 0, M = !1, V = !1, R = !1, Z = k, x = { label: "", color: "" };
  const J = gg();
  function O() {
    if (y) {
      if (y.clearRect(0, 0, p.width, p.height), y.save(), y.translate(S.offsetX, S.offsetY), y.scale(S.scale, S.scale), q !== null) {
        switch (u.orientation) {
          case 0:
            y.drawImage(q, 0, 0, U, Q);
            break;
          case 1:
            y.translate(U, 0), y.rotate(Math.PI / 2), y.drawImage(q, 0, 0, Q, U);
            break;
          case 2:
            y.translate(U, Q), y.rotate(Math.PI), y.drawImage(q, 0, 0, U, Q);
            break;
          case 3:
            y.translate(0, Q), y.rotate(-Math.PI / 2), y.drawImage(q, 0, 0, Q, U);
            break;
        }
        y.restore();
      }
      for (const B of u.boxes.slice().reverse())
        B.render(y);
    }
  }
  function H(B) {
    t(11, C = B), u.boxes.forEach((T) => {
      T.setSelected(!1);
    }), B >= 0 && B < u.boxes.length && u.boxes[B].setSelected(!0), O();
  }
  function Fe(B) {
    s && (B.target instanceof Element && B.target.hasPointerCapture(B.pointerId) && B.target.releasePointerCapture(B.pointerId), z === n.creation ? Ke(B) : z === n.drag && E(B));
  }
  function E(B) {
    const T = p.getBoundingClientRect(), ee = B.clientX - T.left, ae = B.clientY - T.top;
    let fe = !1;
    for (const [ce, Se] of u.boxes.entries()) {
      const wi = Se.indexOfPointInsideHandle(ee, ae);
      if (wi >= 0) {
        fe = !0, H(ce), Se.startResize(wi, B);
        return;
      }
    }
    for (const [ce, Se] of u.boxes.entries())
      if (Se.isPointInsideBox(ee, ae)) {
        fe = !0, H(ce), Se.startDrag(B);
        return;
      }
    v || H(-1), fe || S.startDrag(B);
  }
  function X(B) {
    J("change");
  }
  function $(B) {
    if (u === null || z !== n.drag)
      return;
    const T = p.getBoundingClientRect(), ee = B.clientX - T.left, ae = B.clientY - T.top;
    for (const [fe, ce] of u.boxes.entries()) {
      const Se = ce.indexOfPointInsideHandle(ee, ae);
      if (Se >= 0) {
        t(10, p.style.cursor = ce.resizeHandles[Se].cursor, p);
        return;
      }
    }
    t(10, p.style.cursor = "default", p);
  }
  function ie(B) {
    if (s)
      switch (B.key) {
        case "Delete":
          D();
          break;
      }
  }
  function L(B) {
    B.preventDefault();
    const T = 1 / (1 + B.deltaY / 1e3 * 0.5), ee = parseFloat((S.scale * T).toFixed(2)), ae = ee < 1 ? 1 : ee, fe = p.getBoundingClientRect(), ce = B.clientX - fe.left, Se = B.clientY - fe.top, wi = (ce - S.offsetX) / S.scale, sf = (Se - S.offsetY) / S.scale;
    S.offsetX = ce - wi * ae, S.offsetY = Se - sf * ae, S.scale = ae, O();
  }
  function Ke(B) {
    const T = p.getBoundingClientRect(), ee = (B.clientX - T.left - S.offsetX) / ne / S.scale, ae = (B.clientY - T.top - S.offsetY) / ne / S.scale;
    let fe;
    d.length > 0 ? fe = Xi(d[0]) : v ? u.boxes.length > 0 ? fe = u.boxes[0].color : fe = xt[0] : fe = xt[u.boxes.length % xt.length];
    let ce = new fs(O, Ce, S, W, A, F, K, "", ee, ae, ee, ae, fe, o, r, a, f, c);
    ce.startCreating(B, T.left, T.top), v ? t(0, u.boxes = [ce], u) : t(0, u.boxes = [ce, ...u.boxes], u), H(0), O(), J("change");
  }
  function Ue() {
    t(12, z = n.creation), t(10, p.style.cursor = "crosshair", p);
  }
  function Je() {
    t(12, z = n.drag), t(10, p.style.cursor = "default", p);
  }
  function Ce() {
    C >= 0 && C < u.boxes.length && (u.boxes[C].getArea() < 1 ? D() : (m || (Z ? wl() : t(14, V = !0)), v && Je()));
  }
  function Qe() {
    C >= 0 && C < u.boxes.length && !m && t(13, M = !0);
  }
  function xe(B) {
    s && Qe();
  }
  function Zt(B) {
    t(13, M = !1);
    const { detail: T } = B;
    let ee = T.label, ae = T.color, fe = T.ret;
    if (C >= 0 && C < u.boxes.length) {
      let ce = u.boxes[C];
      fe == 1 ? (ce.label = ee, ce.color = Xi(ae), O(), J("change")) : fe == -1 && D();
    }
  }
  function gl(B) {
    t(14, V = !1);
    const { detail: T } = B;
    let ee = T.label, ae = T.color, fe = T.ret, ce = T.lock;
    if (C >= 0 && C < u.boxes.length) {
      let Se = u.boxes[C];
      fe == 1 ? (t(16, Z = ce), x.label = ee, x.color = ae, Se.label = ee, Se.color = Xi(ae), O(), J("change")) : D();
    }
  }
  function bl(B) {
    t(15, R = !1);
    const { detail: T } = B;
    let ee = T.label, ae = T.color, fe = T.ret, ce = T.lock;
    fe == 1 && (t(16, Z = ce), x.label = ee, x.color = ae);
  }
  function wl() {
    if (C >= 0 && C < u.boxes.length) {
      let B = u.boxes[C];
      B.label = x.label, x.color !== "" && (B.color = Xi(x.color)), O(), J("change");
    }
  }
  function D() {
    C >= 0 && C < u.boxes.length && (u.boxes.splice(C, 1), H(-1), v && Ue(), J("change"));
  }
  function at(B) {
    t(0, u.orientation = ((u.orientation + B) % 4 + 4) % 4, u), S.orientation = u.orientation, Ae();
    for (const T of u.boxes)
      T.onRotate(B);
    O();
  }
  function Ae() {
    if (p) {
      if (ne = 1, t(10, p.width = p.clientWidth, p), S.setRotatedImage(q), q !== null) {
        if (S.imageRotatedWidth > p.width)
          ne = p.width / S.imageRotatedWidth, U = Math.round(S.imageRotatedWidth * ne), Q = Math.round(S.imageRotatedHeight * ne), W = 0, A = 0, F = U, K = Q, t(10, p.height = Q, p);
        else {
          U = S.imageRotatedWidth, Q = S.imageRotatedHeight;
          var B = (p.width - U) / 2;
          W = B, A = 0, F = B + U, K = Q, t(10, p.height = Q, p);
        }
        S.imageWidth = U, S.imageHeight = Q;
      } else
        W = 0, A = 0, F = p.width, K = p.height, t(10, p.height = p.clientHeight, p);
      if (S.resize(p.width, p.height, W, A), F > 0 && K > 0)
        for (const T of u.boxes)
          T.canvasXmin = W, T.canvasYmin = A, T.canvasXmax = F, T.canvasYmax = K, T.setScaleFactor(ne);
      O(), J("change");
    }
  }
  const vn = new ResizeObserver(Ae);
  function vl() {
    for (let B = 0; B < u.boxes.length; B++) {
      let T = u.boxes[B];
      if (!(T instanceof fs)) {
        let ee = "", ae = "";
        T.hasOwnProperty("color") ? (ee = T.color, Array.isArray(ee) && ee.length === 3 && (ee = `rgb(${ee[0]}, ${ee[1]}, ${ee[2]})`)) : ee = xt[B % xt.length], T.hasOwnProperty("label") && (ae = T.label), T = new fs(O, Ce, S, W, A, F, K, ae, T.xmin, T.ymin, T.xmax, T.ymax, ee, o, r, a, f, c), t(0, u.boxes[B] = T, u);
      }
    }
  }
  function Wt() {
    l !== null && (q === null || q.src != l) && (q = new Image(), q.src = l, q.onload = function() {
      Ae(), O();
    });
  }
  hg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let B = 0; B < _.length; B++) {
          let T = xt[B % xt.length];
          d.push(mn(T));
        }
      x.label = _[0][0], x.color = d[0];
    }
    y = p.getContext("2d"), vn.observe(p), C < 0 && u !== null && u.boxes.length > 0 && H(0), Wt(), Ae(), O();
  });
  function pn() {
    document.addEventListener("keydown", ie);
  }
  function pl() {
    document.removeEventListener("keydown", ie);
  }
  mg(() => {
    document.removeEventListener("keydown", ie);
  });
  function kl(B) {
    fg[B ? "unshift" : "push"](() => {
      p = B, t(10, p);
    });
  }
  const Zn = () => Ue(), gt = () => Je(), Gn = () => D(), xr = () => t(15, R = !0), $r = () => at(-1), ef = () => at(1);
  function tf(B) {
    cs.call(this, i, B);
  }
  function nf(B) {
    cs.call(this, i, B);
  }
  function lf(B) {
    cs.call(this, i, B);
  }
  return i.$$set = (B) => {
    "imageUrl" in B && t(31, l = B.imageUrl), "interactive" in B && t(2, s = B.interactive), "boxAlpha" in B && t(32, o = B.boxAlpha), "boxMinSize" in B && t(33, r = B.boxMinSize), "handleSize" in B && t(34, a = B.handleSize), "boxThickness" in B && t(35, f = B.boxThickness), "boxSelectedThickness" in B && t(36, c = B.boxSelectedThickness), "value" in B && t(0, u = B.value), "choices" in B && t(3, _ = B.choices), "choicesColors" in B && t(4, d = B.choicesColors), "disableEditBoxes" in B && t(5, m = B.disableEditBoxes), "height" in B && t(6, h = B.height), "width" in B && t(7, g = B.width), "singleBox" in B && t(37, v = B.singleBox), "showRemoveButton" in B && t(1, w = B.showRemoveButton), "handlesCursor" in B && t(8, b = B.handlesCursor), "useDefaultLabel" in B && t(38, k = B.useDefaultLabel);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (S.orientation = u.orientation, Wt(), vl(), Ae(), O());
  }, [
    u,
    w,
    s,
    _,
    d,
    m,
    h,
    g,
    b,
    n,
    p,
    C,
    z,
    M,
    V,
    R,
    Z,
    Fe,
    X,
    $,
    L,
    Ue,
    Je,
    xe,
    Zt,
    gl,
    bl,
    D,
    at,
    pn,
    pl,
    l,
    o,
    r,
    a,
    f,
    c,
    v,
    k,
    kl,
    Zn,
    gt,
    Gn,
    xr,
    $r,
    ef,
    tf,
    nf,
    lf
  ];
}
class vg extends rg {
  constructor(e) {
    super(), ug(
      this,
      e,
      wg,
      bg,
      dg,
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
        handlesCursor: 8,
        useDefaultLabel: 38
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: pg,
  add_flush_callback: kg,
  bind: yg,
  binding_callbacks: Cg,
  create_component: Sg,
  destroy_component: zg,
  init: Bg,
  mount_component: qg,
  safe_not_equal: Dg,
  transition_in: Lg,
  transition_out: Eg
} = window.__gradio__svelte__internal, { createEventDispatcher: Mg } = window.__gradio__svelte__internal;
function Rg(i) {
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
    i[0]), e = new vg({ props: s }), Cg.push(() => yg(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[21]
    ), {
      c() {
        Sg(e.$$.fragment);
      },
      m(o, r) {
        qg(e, o, r), n = !0;
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
        o[0], kg(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Lg(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Eg(e.$$.fragment, o), n = !1;
      },
      d(o) {
        zg(e, o);
      }
    }
  );
}
function Ag(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: v } = e, { handlesCursor: w } = e, { useDefaultLabel: b } = e, k, p;
  const y = Mg();
  function q(z) {
    m = z, t(0, m);
  }
  const C = () => y("change");
  return i.$$set = (z) => {
    "src" in z && t(18, n = z.src), "interactive" in z && t(1, l = z.interactive), "boxesAlpha" in z && t(2, s = z.boxesAlpha), "labelList" in z && t(3, o = z.labelList), "labelColors" in z && t(4, r = z.labelColors), "boxMinSize" in z && t(5, a = z.boxMinSize), "handleSize" in z && t(6, f = z.handleSize), "boxThickness" in z && t(7, c = z.boxThickness), "height" in z && t(8, u = z.height), "width" in z && t(9, _ = z.width), "boxSelectedThickness" in z && t(10, d = z.boxSelectedThickness), "value" in z && t(0, m = z.value), "disableEditBoxes" in z && t(11, h = z.disableEditBoxes), "singleBox" in z && t(12, g = z.singleBox), "showRemoveButton" in z && t(13, v = z.showRemoveButton), "handlesCursor" in z && t(14, w = z.handlesCursor), "useDefaultLabel" in z && t(15, b = z.useDefaultLabel);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    786432) {
      t(16, k = n), t(19, p = n);
      const z = n;
      a1(z).then((S) => {
        p === z && t(16, k = S);
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
    v,
    w,
    b,
    k,
    y,
    n,
    p,
    q,
    C
  ];
}
class Wg extends pg {
  constructor(e) {
    super(), Bg(this, e, Ag, Rg, Dg, {
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
class qa {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Hg,
  add_flush_callback: ll,
  append: Dn,
  attr: ai,
  bind: sl,
  binding_callbacks: hi,
  bubble: ei,
  check_outros: en,
  create_component: Lt,
  create_slot: Ig,
  destroy_component: Et,
  detach: cn,
  element: _i,
  empty: Tg,
  get_all_dirty_from_scope: Xg,
  get_slot_changes: Yg,
  group_outros: tn,
  init: jg,
  insert: un,
  mount_component: Mt,
  noop: Fg,
  safe_not_equal: Ug,
  space: $t,
  toggle_class: Da,
  transition_in: G,
  transition_out: le,
  update_slot_base: Vg
} = window.__gradio__svelte__internal, { createEventDispatcher: Ng, tick: Og } = window.__gradio__svelte__internal;
function La(i) {
  let e, t;
  return e = new p1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Pg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
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
function Pg(i) {
  let e, t;
  return e = new ol({
    props: {
      Icon: Au,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
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
function Ea(i) {
  let e, t;
  return e = new nd({
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
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
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
function Ma(i) {
  let e, t, n;
  return t = new ol({
    props: { Icon: Za, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[36]
  ), {
    c() {
      e = _i("div"), Lt(t.$$.fragment);
    },
    m(l, s) {
      un(l, e, s), Mt(t, e, null), n = !0;
    },
    p: Fg,
    i(l) {
      n || (G(t.$$.fragment, l), n = !0);
    },
    o(l) {
      le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && cn(e), Et(t);
    }
  };
}
function Ra(i) {
  let e;
  const t = (
    /*#slots*/
    i[37].default
  ), n = Ig(
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
      4194304) && Vg(
        n,
        t,
        l,
        /*$$scope*/
        l[53],
        e ? Yg(
          t,
          /*$$scope*/
          l[53],
          s,
          null
        ) : Xg(
          /*$$scope*/
          l[53]
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
function Zg(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ra(i)
  );
  return {
    c() {
      n && n.c(), e = Tg();
    },
    m(l, s) {
      n && n.m(l, s), un(l, e, s), t = !0;
    },
    p(l, s) {
      /*value*/
      l[1] === null ? n ? (n.p(l, s), s[0] & /*value*/
      2 && G(n, 1)) : (n = Ra(l), n.c(), G(n, 1), n.m(e.parentNode, e)) : n && (tn(), le(n, 1, 1, () => {
        n = null;
      }), en());
    },
    i(l) {
      t || (G(n), t = !0);
    },
    o(l) {
      le(n), t = !1;
    },
    d(l) {
      l && cn(e), n && n.d(l);
    }
  };
}
function Aa(i) {
  let e, t;
  return e = new Nh({
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
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
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
function Wa(i) {
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
    i[1]), t = new Wg({ props: o }), hi.push(() => sl(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      i[51]
    ), {
      c() {
        e = _i("div"), Lt(t.$$.fragment), ai(e, "class", "image-frame svelte-1gjdske"), Da(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        un(r, e, a), Mt(t, e, null), l = !0;
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
        r[1], ll(() => n = !1)), t.$set(f), (!l || a[0] & /*selectable*/
        32) && Da(
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
        r && cn(e), Et(t);
      }
    }
  );
}
function Ha(i) {
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
    i[0]), e = new wd({ props: s }), hi.push(() => sl(e, "active_source", l)), {
      c() {
        Lt(e.$$.fragment);
      },
      m(o, r) {
        Mt(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], ll(() => t = !1)), e.$set(a);
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
function Gg(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new vc({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Ga,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let v = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && La(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && Ea(i)
  ), b = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Ma(i)
  );
  function k(S) {
    i[42](S);
  }
  function p(S) {
    i[43](S);
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
    $$slots: { default: [Zg] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[29] !== void 0 && (y.uploading = /*uploading*/
  i[29]), /*dragging*/
  i[30] !== void 0 && (y.dragging = /*dragging*/
  i[30]), f = new $1({ props: y }), i[41](f), hi.push(() => sl(f, "uploading", k)), hi.push(() => sl(f, "dragging", p)), f.$on(
    "load",
    /*handle_upload*/
    i[32]
  ), f.$on(
    "error",
    /*error_handler_1*/
    i[44]
  );
  let q = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Aa(i)
  ), C = (
    /*value*/
    i[1] !== null && Wa(i)
  ), z = h && Ha(i);
  return {
    c() {
      Lt(e.$$.fragment), t = $t(), n = _i("div"), v && v.c(), l = $t(), w && w.c(), s = $t(), b && b.c(), o = $t(), r = _i("div"), a = _i("div"), Lt(f.$$.fragment), _ = $t(), q && q.c(), d = $t(), C && C.c(), m = $t(), z && z.c(), ai(n, "class", "icon-buttons svelte-1gjdske"), ai(a, "class", "upload-container svelte-1gjdske"), ai(r, "data-testid", "image"), ai(r, "class", "image-container svelte-1gjdske");
    },
    m(S, W) {
      Mt(e, S, W), un(S, t, W), un(S, n, W), v && v.m(n, null), Dn(n, l), w && w.m(n, null), Dn(n, s), b && b.m(n, null), un(S, o, W), un(S, r, W), Dn(r, a), Mt(f, a, null), Dn(a, _), q && q.m(a, null), Dn(a, d), C && C.m(a, null), Dn(r, m), z && z.m(r, null), g = !0;
    },
    p(S, W) {
      const A = {};
      W[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      S[3]), W[0] & /*label*/
      4 && (A.label = /*label*/
      S[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      S[10] && /*value*/
      S[1] !== null ? v ? (v.p(S, W), W[0] & /*showDownloadButton, value*/
      1026 && G(v, 1)) : (v = La(S), v.c(), G(v, 1), v.m(n, l)) : v && (tn(), le(v, 1, 1, () => {
        v = null;
      }), en()), /*showShareButton*/
      S[9] && /*value*/
      S[1] !== null ? w ? (w.p(S, W), W[0] & /*showShareButton, value*/
      514 && G(w, 1)) : (w = Ea(S), w.c(), G(w, 1), w.m(n, s)) : w && (tn(), le(w, 1, 1, () => {
        w = null;
      }), en()), /*showClearButton*/
      S[11] && /*value*/
      S[1] !== null && /*interactive*/
      S[7] ? b ? (b.p(S, W), W[0] & /*showClearButton, value, interactive*/
      2178 && G(b, 1)) : (b = Ma(S), b.c(), G(b, 1), b.m(n, null)) : b && (tn(), le(b, 1, 1, () => {
        b = null;
      }), en());
      const F = {};
      W[0] & /*value, active_source*/
      3 && (F.hidden = /*value*/
      S[1] !== null || /*active_source*/
      S[0] === "webcam"), W[0] & /*active_source*/
      1 && (F.filetype = /*active_source*/
      S[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (F.root = /*root*/
      S[6]), W[0] & /*max_file_size*/
      33554432 && (F.max_file_size = /*max_file_size*/
      S[25]), W[0] & /*sources*/
      16 && (F.disable_click = !/*sources*/
      S[4].includes("upload")), W[0] & /*cli_upload*/
      67108864 && (F.upload = /*cli_upload*/
      S[26]), W[0] & /*stream_handler*/
      134217728 && (F.stream_handler = /*stream_handler*/
      S[27]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      4194304 && (F.$$scope = { dirty: W, ctx: S }), !c && W[0] & /*uploading*/
      536870912 && (c = !0, F.uploading = /*uploading*/
      S[29], ll(() => c = !1)), !u && W[0] & /*dragging*/
      1073741824 && (u = !0, F.dragging = /*dragging*/
      S[30], ll(() => u = !1)), f.$set(F), /*value*/
      S[1] === null && /*active_source*/
      S[0] === "webcam" ? q ? (q.p(S, W), W[0] & /*value, active_source*/
      3 && G(q, 1)) : (q = Aa(S), q.c(), G(q, 1), q.m(a, d)) : q && (tn(), le(q, 1, 1, () => {
        q = null;
      }), en()), /*value*/
      S[1] !== null ? C ? (C.p(S, W), W[0] & /*value*/
      2 && G(C, 1)) : (C = Wa(S), C.c(), G(C, 1), C.m(a, null)) : C && (tn(), le(C, 1, 1, () => {
        C = null;
      }), en()), W[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (S[4].length > 1 || /*sources*/
      S[4].includes("clipboard")) && /*value*/
      S[1] === null && /*interactive*/
      S[7]), h ? z ? (z.p(S, W), W[0] & /*sources, value, interactive*/
      146 && G(z, 1)) : (z = Ha(S), z.c(), G(z, 1), z.m(r, null)) : z && (tn(), le(z, 1, 1, () => {
        z = null;
      }), en());
    },
    i(S) {
      g || (G(e.$$.fragment, S), G(v), G(w), G(b), G(f.$$.fragment, S), G(q), G(C), G(z), g = !0);
    },
    o(S) {
      le(e.$$.fragment, S), le(v), le(w), le(b), le(f.$$.fragment, S), le(q), le(C), le(z), g = !1;
    },
    d(S) {
      S && (cn(t), cn(n), cn(o), cn(r)), Et(e, S), v && v.d(), w && w.d(), b && b.d(), i[41](null), Et(f), q && q.d(), C && C.d(), z && z.d();
    }
  };
}
function Kg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(D, at, Ae, vn) {
    function vl(Wt) {
      return Wt instanceof Ae ? Wt : new Ae(function(pn) {
        pn(Wt);
      });
    }
    return new (Ae || (Ae = Promise))(function(Wt, pn) {
      function pl(gt) {
        try {
          Zn(vn.next(gt));
        } catch (Gn) {
          pn(Gn);
        }
      }
      function kl(gt) {
        try {
          Zn(vn.throw(gt));
        } catch (Gn) {
          pn(Gn);
        }
      }
      function Zn(gt) {
        gt.done ? Wt(gt.value) : vl(gt.value).then(pl, kl);
      }
      Zn((vn = vn.apply(D, at || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: v } = e, { labelList: w } = e, { labelColors: b } = e, { boxMinSize: k } = e, { handleSize: p } = e, { height: y } = e, { width: q } = e, { boxThickness: C } = e, { disableEditBoxes: z } = e, { singleBox: S } = e, { showRemoveButton: W } = e, { handlesCursor: A } = e, { boxSelectedThickness: F } = e, { max_file_size: K = null } = e, { cli_upload: ne } = e, { stream_handler: U } = e, { useDefaultLabel: Q } = e, M, V = !1, { active_source: R = null } = e;
  function Z({ detail: D }) {
    t(1, o = new qa()), t(1, o.image = D, o), J("upload");
  }
  function x(D) {
    return s(this, void 0, void 0, function* () {
      const at = yield M.load_files([new File([D], "webcam.png")]), Ae = (at == null ? void 0 : at[0]) || null;
      Ae ? (t(1, o = new qa()), t(1, o.image = Ae, o)) : t(1, o = null), yield Og(), J("change");
    });
  }
  const J = Ng();
  let O = !1;
  function H(D) {
    return s(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          M.paste_clipboard();
          break;
      }
    });
  }
  function Fe() {
    t(1, o = null), J("clear"), J("change");
  }
  const E = async (D) => D === null ? "" : `<img src="${await V_(D.image)}" />`;
  function X(D) {
    ei.call(this, i, D);
  }
  function $(D) {
    ei.call(this, i, D);
  }
  function ie(D) {
    hi[D ? "unshift" : "push"](() => {
      M = D, t(31, M);
    });
  }
  function L(D) {
    V = D, t(29, V);
  }
  function Ke(D) {
    O = D, t(30, O);
  }
  function Ue(D) {
    ei.call(this, i, D);
  }
  const Je = (D) => x(D.detail), Ce = (D) => x(D.detail);
  function Qe(D) {
    ei.call(this, i, D);
  }
  function xe(D) {
    ei.call(this, i, D);
  }
  const Zt = (D) => x(D.detail);
  function gl(D) {
    o = D, t(1, o);
  }
  const bl = () => J("change");
  function wl(D) {
    R = D, t(0, R), t(4, f);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, o = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, f = D.sources), "selectable" in D && t(5, c = D.selectable), "root" in D && t(6, u = D.root), "interactive" in D && t(7, _ = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, m = D.showShareButton), "showDownloadButton" in D && t(10, h = D.showDownloadButton), "showClearButton" in D && t(11, g = D.showClearButton), "boxesAlpha" in D && t(12, v = D.boxesAlpha), "labelList" in D && t(13, w = D.labelList), "labelColors" in D && t(14, b = D.labelColors), "boxMinSize" in D && t(15, k = D.boxMinSize), "handleSize" in D && t(16, p = D.handleSize), "height" in D && t(17, y = D.height), "width" in D && t(18, q = D.width), "boxThickness" in D && t(19, C = D.boxThickness), "disableEditBoxes" in D && t(20, z = D.disableEditBoxes), "singleBox" in D && t(21, S = D.singleBox), "showRemoveButton" in D && t(22, W = D.showRemoveButton), "handlesCursor" in D && t(23, A = D.handlesCursor), "boxSelectedThickness" in D && t(24, F = D.boxSelectedThickness), "max_file_size" in D && t(25, K = D.max_file_size), "cli_upload" in D && t(26, ne = D.cli_upload), "stream_handler" in D && t(27, U = D.stream_handler), "useDefaultLabel" in D && t(28, Q = D.useDefaultLabel), "active_source" in D && t(0, R = D.active_source), "$$scope" in D && t(53, l = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    536870912 && V && Fe(), i.$$.dirty[0] & /*dragging*/
    1073741824 && J("drag", O), i.$$.dirty[0] & /*active_source, sources*/
    17 && !R && f && t(0, R = f[0]);
  }, [
    R,
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
    v,
    w,
    b,
    k,
    p,
    y,
    q,
    C,
    z,
    S,
    W,
    A,
    F,
    K,
    ne,
    U,
    Q,
    V,
    O,
    M,
    Z,
    x,
    J,
    H,
    Fe,
    n,
    E,
    X,
    $,
    ie,
    L,
    Ke,
    Ue,
    Je,
    Ce,
    Qe,
    xe,
    Zt,
    gl,
    bl,
    wl,
    l
  ];
}
class Jg extends Hg {
  constructor(e) {
    super(), jg(
      this,
      e,
      Kg,
      Gg,
      Ug,
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
  SvelteComponent: Qg,
  attr: Pi,
  detach: Zr,
  element: Gr,
  init: xg,
  insert: Kr,
  noop: Ia,
  safe_not_equal: $g,
  src_url_equal: Ta,
  toggle_class: Ut
} = window.__gradio__svelte__internal;
function Xa(i) {
  let e, t;
  return {
    c() {
      e = Gr("img"), Ta(e.src, t = /*value*/
      i[0].url) || Pi(e, "src", t), Pi(e, "alt", "");
    },
    m(n, l) {
      Kr(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Ta(e.src, t = /*value*/
      n[0].url) && Pi(e, "src", t);
    },
    d(n) {
      n && Zr(e);
    }
  };
}
function e2(i) {
  let e, t = (
    /*value*/
    i[0] && Xa(i)
  );
  return {
    c() {
      e = Gr("div"), t && t.c(), Pi(e, "class", "container svelte-1sgcyba"), Ut(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Ut(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Ut(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Ut(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      Kr(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Xa(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Ut(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Ut(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Ut(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Ut(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Ia,
    o: Ia,
    d(n) {
      n && Zr(e), t && t.d();
    }
  };
}
function t2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: s = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, l = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, l, s];
}
class z2 extends Qg {
  constructor(e) {
    super(), xg(this, e, t2, e2, $g, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: n2,
  add_flush_callback: Ya,
  assign: i2,
  bind: ja,
  binding_callbacks: Fa,
  check_outros: l2,
  create_component: gn,
  destroy_component: bn,
  detach: Jr,
  empty: s2,
  flush: P,
  get_spread_object: o2,
  get_spread_update: a2,
  group_outros: r2,
  init: f2,
  insert: Qr,
  mount_component: wn,
  safe_not_equal: c2,
  space: u2,
  transition_in: Rt,
  transition_out: At
} = window.__gradio__svelte__internal;
function _2(i) {
  let e, t;
  return e = new Jc({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [m2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      gn(e.$$.fragment);
    },
    m(n, l) {
      wn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*$$scope*/
      8192 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function d2(i) {
  let e, t;
  return e = new tr({
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
      gn(e.$$.fragment);
    },
    m(n, l) {
      wn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*gradio*/
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function h2(i) {
  let e, t;
  return e = new tr({
    props: {
      i18n: (
        /*gradio*/
        i[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      gn(e.$$.fragment);
    },
    m(n, l) {
      wn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*gradio*/
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function m2(i) {
  let e, t;
  return e = new Ga({}), {
    c() {
      gn(e.$$.fragment);
    },
    m(n, l) {
      wn(e, n, l), t = !0;
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function g2(i) {
  let e, t, n, l;
  const s = [h2, d2, _2], o = [];
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
      t.c(), n = s2();
    },
    m(a, f) {
      o[e].m(a, f), Qr(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (r2(), At(o[c], 1, 1, () => {
        o[c] = null;
      }), l2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Rt(t), l = !0);
    },
    o(a) {
      At(t), l = !1;
    },
    d(a) {
      a && Jr(n), o[e].d(a);
    }
  };
}
function b2(i) {
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
    a = i2(a, r[_]);
  e = new i1({ props: a });
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
    $$slots: { default: [g2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[33] !== void 0 && (u.active_source = /*active_source*/
    i[33]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Jg({ props: u }), Fa.push(() => ja(n, "active_source", f)), Fa.push(() => ja(n, "value", c)), n.$on(
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
        gn(e.$$.fragment), t = u2(), gn(n.$$.fragment);
      },
      m(_, d) {
        wn(e, _, d), Qr(_, t, d), wn(n, _, d), o = !0;
      },
      p(_, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? a2(r, [
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
          2 && o2(
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
        _[33], Ya(() => l = !1)), !s && d[0] & /*value*/
        1 && (s = !0, h.value = /*value*/
        _[0], Ya(() => s = !1)), n.$set(h);
      },
      i(_) {
        o || (Rt(e.$$.fragment, _), Rt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        At(e.$$.fragment, _), At(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && Jr(t), bn(e, _), bn(n, _);
      }
    }
  );
}
function w2(i) {
  let e, t;
  return e = new kf({
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
      $$slots: { default: [b2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      gn(e.$$.fragment);
    },
    m(n, l) {
      wn(e, n, l), t = !0;
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
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function v2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: v = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: b } = e, { show_clear_button: k } = e, { interactive: p } = e, { boxes_alpha: y } = e, { label_list: q } = e, { label_colors: C } = e, { box_min_size: z } = e, { handle_size: S } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: F } = e, { single_box: K } = e, { show_remove_button: ne } = e, { handles_cursor: U } = e, { use_default_label: Q } = e, { gradio: M } = e, V, R = null;
  function Z(L) {
    R = L, t(33, R);
  }
  function x(L) {
    o = L, t(0, o);
  }
  const J = () => M.dispatch("change"), O = () => M.dispatch("edit"), H = () => {
    M.dispatch("clear");
  }, Fe = ({ detail: L }) => t(32, V = L), E = () => M.dispatch("upload"), X = ({ detail: L }) => M.dispatch("select", L), $ = ({ detail: L }) => M.dispatch("share", L), ie = ({ detail: L }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), M.dispatch("error", L);
  };
  return i.$$set = (L) => {
    "elem_id" in L && t(2, n = L.elem_id), "elem_classes" in L && t(3, l = L.elem_classes), "visible" in L && t(4, s = L.visible), "value" in L && t(0, o = L.value), "label" in L && t(5, r = L.label), "show_label" in L && t(6, a = L.show_label), "root" in L && t(7, f = L.root), "height" in L && t(8, c = L.height), "width" in L && t(9, u = L.width), "_selectable" in L && t(10, _ = L._selectable), "container" in L && t(11, d = L.container), "scale" in L && t(12, m = L.scale), "min_width" in L && t(13, h = L.min_width), "loading_status" in L && t(1, g = L.loading_status), "sources" in L && t(14, v = L.sources), "show_download_button" in L && t(15, w = L.show_download_button), "show_share_button" in L && t(16, b = L.show_share_button), "show_clear_button" in L && t(17, k = L.show_clear_button), "interactive" in L && t(18, p = L.interactive), "boxes_alpha" in L && t(19, y = L.boxes_alpha), "label_list" in L && t(20, q = L.label_list), "label_colors" in L && t(21, C = L.label_colors), "box_min_size" in L && t(22, z = L.box_min_size), "handle_size" in L && t(23, S = L.handle_size), "box_thickness" in L && t(24, W = L.box_thickness), "box_selected_thickness" in L && t(25, A = L.box_selected_thickness), "disable_edit_boxes" in L && t(26, F = L.disable_edit_boxes), "single_box" in L && t(27, K = L.single_box), "show_remove_button" in L && t(28, ne = L.show_remove_button), "handles_cursor" in L && t(29, U = L.handles_cursor), "use_default_label" in L && t(30, Q = L.use_default_label), "gradio" in L && t(31, M = L.gradio);
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
    v,
    w,
    b,
    k,
    p,
    y,
    q,
    C,
    z,
    S,
    W,
    A,
    F,
    K,
    ne,
    U,
    Q,
    M,
    V,
    R,
    Z,
    x,
    J,
    O,
    H,
    Fe,
    E,
    X,
    $,
    ie
  ];
}
class B2 extends n2 {
  constructor(e) {
    super(), f2(
      this,
      e,
      v2,
      w2,
      c2,
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
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), P();
  }
}
export {
  z2 as BaseExample,
  B2 as default
};
