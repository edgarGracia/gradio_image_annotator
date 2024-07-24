const {
  SvelteComponent: ma,
  assign: ga,
  create_slot: ba,
  detach: wa,
  element: pa,
  get_all_dirty_from_scope: va,
  get_slot_changes: ka,
  get_spread_update: ya,
  init: Ca,
  insert: Sa,
  safe_not_equal: za,
  set_dynamic_element_data: Ti,
  set_style: we,
  toggle_class: Ve,
  transition_in: cs,
  transition_out: _s,
  update_slot_base: qa
} = window.__gradio__svelte__internal;
function Ba(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = ba(
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
    r = ga(r, s[a]);
  return {
    c() {
      e = pa(
        /*tag*/
        l[14]
      ), o && o.c(), Ti(
        /*tag*/
        l[14]
      )(e, r), Ve(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), Ve(
        e,
        "padded",
        /*padding*/
        l[6]
      ), Ve(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), Ve(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), Ve(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), we(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), we(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), we(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), we(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), we(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), we(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), we(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Sa(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && qa(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? ka(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : va(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ti(
        /*tag*/
        a[14]
      )(e, r = ya(s, [
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
      ])), Ve(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Ve(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Ve(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Ve(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Ve(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && we(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && we(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && we(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && we(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && we(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && we(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (cs(o, a), n = !0);
    },
    o(a) {
      _s(o, a), n = !1;
    },
    d(a) {
      a && wa(e), o && o.d(a);
    }
  };
}
function Ea(l) {
  let e, t = (
    /*tag*/
    l[14] && Ba(l)
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
      e || (cs(t, n), e = !0);
    },
    o(n) {
      _s(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Ma(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: b = !0 } = e, { visible: g = !0 } = e, { allow_overflow: w = !0 } = e, { scale: p = null } = e, { min_width: m = 0 } = e, v = _ === "fieldset" ? "fieldset" : "div";
  const S = (y) => {
    if (y !== void 0) {
      if (typeof y == "number")
        return y + "px";
      if (typeof y == "string")
        return y;
    }
  };
  return l.$$set = (y) => {
    "height" in y && t(0, o = y.height), "width" in y && t(1, s = y.width), "elem_id" in y && t(2, r = y.elem_id), "elem_classes" in y && t(3, a = y.elem_classes), "variant" in y && t(4, f = y.variant), "border_mode" in y && t(5, u = y.border_mode), "padding" in y && t(6, c = y.padding), "type" in y && t(16, _ = y.type), "test_id" in y && t(7, d = y.test_id), "explicit_call" in y && t(8, h = y.explicit_call), "container" in y && t(9, b = y.container), "visible" in y && t(10, g = y.visible), "allow_overflow" in y && t(11, w = y.allow_overflow), "scale" in y && t(12, p = y.scale), "min_width" in y && t(13, m = y.min_width), "$$scope" in y && t(17, i = y.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    d,
    h,
    b,
    g,
    w,
    p,
    m,
    v,
    S,
    _,
    i,
    n
  ];
}
class Aa extends ma {
  constructor(e) {
    super(), Ca(this, e, Ma, Ea, za, {
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
  SvelteComponent: La,
  attr: Ra,
  create_slot: Da,
  detach: Ta,
  element: ja,
  get_all_dirty_from_scope: Ha,
  get_slot_changes: Ia,
  init: Fa,
  insert: Xa,
  safe_not_equal: Ya,
  transition_in: Ua,
  transition_out: Va,
  update_slot_base: Na
} = window.__gradio__svelte__internal;
function Oa(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Da(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = ja("div"), i && i.c(), Ra(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Xa(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && Na(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Ia(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Ha(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Ua(i, o), t = !0);
    },
    o(o) {
      Va(i, o), t = !1;
    },
    d(o) {
      o && Ta(e), i && i.d(o);
    }
  };
}
function Wa(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Pa extends La {
  constructor(e) {
    super(), Fa(this, e, Wa, Oa, Ya, {});
  }
}
const {
  SvelteComponent: Za,
  attr: ji,
  check_outros: Ka,
  create_component: Ga,
  create_slot: Ja,
  destroy_component: Qa,
  detach: Qn,
  element: xa,
  empty: $a,
  get_all_dirty_from_scope: er,
  get_slot_changes: tr,
  group_outros: nr,
  init: lr,
  insert: xn,
  mount_component: ir,
  safe_not_equal: or,
  set_data: sr,
  space: ar,
  text: rr,
  toggle_class: It,
  transition_in: cn,
  transition_out: $n,
  update_slot_base: fr
} = window.__gradio__svelte__internal;
function Hi(l) {
  let e, t;
  return e = new Pa({
    props: {
      $$slots: { default: [ur] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Ga(e.$$.fragment);
    },
    m(n, i) {
      ir(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (cn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $n(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Qa(e, n);
    }
  };
}
function ur(l) {
  let e;
  return {
    c() {
      e = rr(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      xn(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && sr(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function cr(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = Ja(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && Hi(l)
  );
  return {
    c() {
      e = xa("span"), s && s.c(), t = ar(), r && r.c(), n = $a(), ji(e, "data-testid", "block-info"), ji(e, "class", "svelte-22c38v"), It(e, "sr-only", !/*show_label*/
      l[0]), It(e, "hide", !/*show_label*/
      l[0]), It(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      xn(a, e, f), s && s.m(e, null), xn(a, t, f), r && r.m(a, f), xn(a, n, f), i = !0;
    },
    p(a, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      8) && fr(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? tr(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : er(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && It(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && It(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && It(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && cn(r, 1)) : (r = Hi(a), r.c(), cn(r, 1), r.m(n.parentNode, n)) : r && (nr(), $n(r, 1, 1, () => {
        r = null;
      }), Ka());
    },
    i(a) {
      i || (cn(s, a), cn(r), i = !0);
    },
    o(a) {
      $n(s, a), $n(r), i = !1;
    },
    d(a) {
      a && (Qn(e), Qn(t), Qn(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function _r(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class ds extends Za {
  constructor(e) {
    super(), lr(this, e, _r, cr, or, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: dr,
  append: Ll,
  attr: In,
  create_component: hr,
  destroy_component: mr,
  detach: gr,
  element: Ii,
  init: br,
  insert: wr,
  mount_component: pr,
  safe_not_equal: vr,
  set_data: kr,
  space: yr,
  text: Cr,
  toggle_class: nt,
  transition_in: Sr,
  transition_out: zr
} = window.__gradio__svelte__internal;
function qr(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Ii("label"), t = Ii("span"), hr(n.$$.fragment), i = yr(), o = Cr(
        /*label*/
        l[0]
      ), In(t, "class", "svelte-9gxdi0"), In(e, "for", ""), In(e, "data-testid", "block-label"), In(e, "class", "svelte-9gxdi0"), nt(e, "hide", !/*show_label*/
      l[2]), nt(e, "sr-only", !/*show_label*/
      l[2]), nt(
        e,
        "float",
        /*float*/
        l[4]
      ), nt(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      wr(r, e, a), Ll(e, t), pr(n, t, null), Ll(e, i), Ll(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && kr(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && nt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && nt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && nt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && nt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Sr(n.$$.fragment, r), s = !0);
    },
    o(r) {
      zr(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && gr(e), mr(n);
    }
  };
}
function Br(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class Er extends dr {
  constructor(e) {
    super(), br(this, e, Br, qr, vr, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Mr,
  append: ai,
  attr: $e,
  bubble: Ar,
  create_component: Lr,
  destroy_component: Rr,
  detach: hs,
  element: ri,
  init: Dr,
  insert: ms,
  listen: Tr,
  mount_component: jr,
  safe_not_equal: Hr,
  set_data: Ir,
  set_style: Ft,
  space: Fr,
  text: Xr,
  toggle_class: he,
  transition_in: Yr,
  transition_out: Ur
} = window.__gradio__svelte__internal;
function Fi(l) {
  let e, t;
  return {
    c() {
      e = ri("span"), t = Xr(
        /*label*/
        l[1]
      ), $e(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      ms(n, e, i), ai(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Ir(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && hs(e);
    }
  };
}
function Vr(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && Fi(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = ri("button"), a && a.c(), t = Fr(), n = ri("div"), Lr(i.$$.fragment), $e(n, "class", "svelte-1lrphxw"), he(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), he(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), he(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], $e(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), $e(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), $e(
        e,
        "title",
        /*label*/
        l[1]
      ), $e(e, "class", "svelte-1lrphxw"), he(
        e,
        "pending",
        /*pending*/
        l[3]
      ), he(
        e,
        "padded",
        /*padded*/
        l[5]
      ), he(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), he(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), Ft(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Ft(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Ft(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, u) {
      ms(f, e, u), a && a.m(e, null), ai(e, t), ai(e, n), jr(i, n, null), o = !0, s || (r = Tr(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(f, [u]) {
      /*show_label*/
      f[2] ? a ? a.p(f, u) : (a = Fi(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || u & /*size*/
      16) && he(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || u & /*size*/
      16) && he(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || u & /*size*/
      16) && he(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || u & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || u & /*label*/
      2) && $e(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || u & /*hasPopup*/
      256) && $e(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || u & /*label*/
      2) && $e(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || u & /*pending*/
      8) && he(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || u & /*padded*/
      32) && he(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || u & /*highlight*/
      64) && he(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || u & /*transparent*/
      512) && he(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), u & /*disabled, _color*/
      4224 && Ft(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && Ft(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), u & /*offset*/
      2048 && Ft(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Yr(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Ur(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && hs(e), a && a.d(), Rr(i), s = !1, r();
    }
  };
}
function Nr(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: u = !1 } = e, { disabled: c = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: b = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function w(p) {
    Ar.call(this, l, p);
  }
  return l.$$set = (p) => {
    "Icon" in p && t(0, i = p.Icon), "label" in p && t(1, o = p.label), "show_label" in p && t(2, s = p.show_label), "pending" in p && t(3, r = p.pending), "size" in p && t(4, a = p.size), "padded" in p && t(5, f = p.padded), "highlight" in p && t(6, u = p.highlight), "disabled" in p && t(7, c = p.disabled), "hasPopup" in p && t(8, _ = p.hasPopup), "color" in p && t(13, d = p.color), "transparent" in p && t(9, h = p.transparent), "background" in p && t(10, b = p.background), "offset" in p && t(11, g = p.offset);
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
    h,
    b,
    g,
    n,
    d,
    w
  ];
}
class pl extends Mr {
  constructor(e) {
    super(), Dr(this, e, Nr, Vr, Hr, {
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
  SvelteComponent: Or,
  append: Wr,
  attr: Rl,
  binding_callbacks: Pr,
  create_slot: Zr,
  detach: Kr,
  element: Xi,
  get_all_dirty_from_scope: Gr,
  get_slot_changes: Jr,
  init: Qr,
  insert: xr,
  safe_not_equal: $r,
  toggle_class: lt,
  transition_in: ef,
  transition_out: tf,
  update_slot_base: nf
} = window.__gradio__svelte__internal;
function lf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = Zr(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = Xi("div"), t = Xi("div"), o && o.c(), Rl(t, "class", "icon svelte-3w3rth"), Rl(e, "class", "empty svelte-3w3rth"), Rl(e, "aria-label", "Empty value"), lt(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), lt(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), lt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), lt(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      xr(s, e, r), Wr(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && nf(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? Jr(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Gr(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && lt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && lt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && lt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && lt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (ef(o, s), n = !0);
    },
    o(s) {
      tf(o, s), n = !1;
    },
    d(s) {
      s && Kr(e), o && o.d(s), l[6](null);
    }
  };
}
function of(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(c) {
    var _;
    if (!c) return !1;
    const { height: d } = c.getBoundingClientRect(), { height: h } = ((_ = c.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function u(c) {
    Pr[c ? "unshift" : "push"](() => {
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
class sf extends Or {
  constructor(e) {
    super(), Qr(this, e, of, lf, $r, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: af,
  append: Dl,
  attr: Re,
  detach: rf,
  init: ff,
  insert: uf,
  noop: Tl,
  safe_not_equal: cf,
  set_style: Ne,
  svg_element: Fn
} = window.__gradio__svelte__internal;
function _f(l) {
  let e, t, n, i;
  return {
    c() {
      e = Fn("svg"), t = Fn("g"), n = Fn("path"), i = Fn("path"), Re(n, "d", "M18,6L6.087,17.913"), Ne(n, "fill", "none"), Ne(n, "fill-rule", "nonzero"), Ne(n, "stroke-width", "2px"), Re(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Re(i, "d", "M4.364,4.364L19.636,19.636"), Ne(i, "fill", "none"), Ne(i, "fill-rule", "nonzero"), Ne(i, "stroke-width", "2px"), Re(e, "width", "100%"), Re(e, "height", "100%"), Re(e, "viewBox", "0 0 24 24"), Re(e, "version", "1.1"), Re(e, "xmlns", "http://www.w3.org/2000/svg"), Re(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Re(e, "xml:space", "preserve"), Re(e, "stroke", "currentColor"), Ne(e, "fill-rule", "evenodd"), Ne(e, "clip-rule", "evenodd"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      uf(o, e, s), Dl(e, t), Dl(t, n), Dl(e, i);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(o) {
      o && rf(e);
    }
  };
}
class gs extends af {
  constructor(e) {
    super(), ff(this, e, null, _f, cf, {});
  }
}
const {
  SvelteComponent: df,
  append: hf,
  attr: sn,
  detach: mf,
  init: gf,
  insert: bf,
  noop: jl,
  safe_not_equal: wf,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function pf(l) {
  let e, t;
  return {
    c() {
      e = Yi("svg"), t = Yi("path"), sn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), sn(t, "fill", "currentColor"), sn(e, "id", "icon"), sn(e, "xmlns", "http://www.w3.org/2000/svg"), sn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      bf(n, e, i), hf(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && mf(e);
    }
  };
}
class vf extends df {
  constructor(e) {
    super(), gf(this, e, null, pf, wf, {});
  }
}
const {
  SvelteComponent: kf,
  append: yf,
  attr: Xt,
  detach: Cf,
  init: Sf,
  insert: zf,
  noop: Hl,
  safe_not_equal: qf,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function Bf(l) {
  let e, t;
  return {
    c() {
      e = Ui("svg"), t = Ui("path"), Xt(t, "fill", "currentColor"), Xt(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      zf(n, e, i), yf(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(n) {
      n && Cf(e);
    }
  };
}
class Ef extends kf {
  constructor(e) {
    super(), Sf(this, e, null, Bf, qf, {});
  }
}
const {
  SvelteComponent: Mf,
  append: Af,
  attr: Yt,
  detach: Lf,
  init: Rf,
  insert: Df,
  noop: Il,
  safe_not_equal: Tf,
  svg_element: Vi
} = window.__gradio__svelte__internal;
function jf(l) {
  let e, t;
  return {
    c() {
      e = Vi("svg"), t = Vi("path"), Yt(t, "d", "M5 8l4 4 4-4z"), Yt(e, "class", "dropdown-arrow svelte-145leq6"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      Df(n, e, i), Af(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && Lf(e);
    }
  };
}
class Hf extends Mf {
  constructor(e) {
    super(), Rf(this, e, null, jf, Tf, {});
  }
}
const {
  SvelteComponent: If,
  append: Fl,
  attr: Q,
  detach: Ff,
  init: Xf,
  insert: Yf,
  noop: Xl,
  safe_not_equal: Uf,
  svg_element: Xn
} = window.__gradio__svelte__internal;
function Vf(l) {
  let e, t, n, i;
  return {
    c() {
      e = Xn("svg"), t = Xn("rect"), n = Xn("circle"), i = Xn("polyline"), Q(t, "x", "3"), Q(t, "y", "3"), Q(t, "width", "18"), Q(t, "height", "18"), Q(t, "rx", "2"), Q(t, "ry", "2"), Q(n, "cx", "8.5"), Q(n, "cy", "8.5"), Q(n, "r", "1.5"), Q(i, "points", "21 15 16 10 5 21"), Q(e, "xmlns", "http://www.w3.org/2000/svg"), Q(e, "width", "100%"), Q(e, "height", "100%"), Q(e, "viewBox", "0 0 24 24"), Q(e, "fill", "none"), Q(e, "stroke", "currentColor"), Q(e, "stroke-width", "1.5"), Q(e, "stroke-linecap", "round"), Q(e, "stroke-linejoin", "round"), Q(e, "class", "feather feather-image");
    },
    m(o, s) {
      Yf(o, e, s), Fl(e, t), Fl(e, n), Fl(e, i);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(o) {
      o && Ff(e);
    }
  };
}
let bs = class extends If {
  constructor(e) {
    super(), Xf(this, e, null, Vf, Uf, {});
  }
};
const {
  SvelteComponent: Nf,
  append: Of,
  attr: Yn,
  detach: Wf,
  init: Pf,
  insert: Zf,
  noop: Yl,
  safe_not_equal: Kf,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function Gf(l) {
  let e, t;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), Yn(t, "fill", "currentColor"), Yn(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Yn(e, "xmlns", "http://www.w3.org/2000/svg"), Yn(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Zf(n, e, i), Of(e, t);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(n) {
      n && Wf(e);
    }
  };
}
class ws extends Nf {
  constructor(e) {
    super(), Pf(this, e, null, Gf, Kf, {});
  }
}
const {
  SvelteComponent: Jf,
  append: Un,
  attr: x,
  detach: Qf,
  init: xf,
  insert: $f,
  noop: Ul,
  safe_not_equal: eu,
  svg_element: an
} = window.__gradio__svelte__internal;
function tu(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = an("svg"), t = an("path"), n = an("path"), i = an("line"), o = an("line"), x(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), x(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), x(i, "x1", "12"), x(i, "y1", "19"), x(i, "x2", "12"), x(i, "y2", "23"), x(o, "x1", "8"), x(o, "y1", "23"), x(o, "x2", "16"), x(o, "y2", "23"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "100%"), x(e, "height", "100%"), x(e, "viewBox", "0 0 24 24"), x(e, "fill", "none"), x(e, "stroke", "currentColor"), x(e, "stroke-width", "2"), x(e, "stroke-linecap", "round"), x(e, "stroke-linejoin", "round"), x(e, "class", "feather feather-mic");
    },
    m(s, r) {
      $f(s, e, r), Un(e, t), Un(e, n), Un(e, i), Un(e, o);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(s) {
      s && Qf(e);
    }
  };
}
class nu extends Jf {
  constructor(e) {
    super(), xf(this, e, null, tu, eu, {});
  }
}
const {
  SvelteComponent: lu,
  append: Vl,
  attr: ae,
  detach: iu,
  init: ou,
  insert: su,
  noop: Nl,
  safe_not_equal: au,
  svg_element: Vn
} = window.__gradio__svelte__internal;
function ru(l) {
  let e, t, n, i;
  return {
    c() {
      e = Vn("svg"), t = Vn("path"), n = Vn("polyline"), i = Vn("line"), ae(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ae(n, "points", "17 8 12 3 7 8"), ae(i, "x1", "12"), ae(i, "y1", "3"), ae(i, "x2", "12"), ae(i, "y2", "15"), ae(e, "xmlns", "http://www.w3.org/2000/svg"), ae(e, "width", "90%"), ae(e, "height", "90%"), ae(e, "viewBox", "0 0 24 24"), ae(e, "fill", "none"), ae(e, "stroke", "currentColor"), ae(e, "stroke-width", "2"), ae(e, "stroke-linecap", "round"), ae(e, "stroke-linejoin", "round"), ae(e, "class", "feather feather-upload");
    },
    m(o, s) {
      su(o, e, s), Vl(e, t), Vl(e, n), Vl(e, i);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(o) {
      o && iu(e);
    }
  };
}
let ps = class extends lu {
  constructor(e) {
    super(), ou(this, e, null, ru, au, {});
  }
};
const {
  SvelteComponent: fu,
  append: Oi,
  attr: it,
  detach: uu,
  init: cu,
  insert: _u,
  noop: Ol,
  safe_not_equal: du,
  svg_element: Wl
} = window.__gradio__svelte__internal;
function hu(l) {
  let e, t, n;
  return {
    c() {
      e = Wl("svg"), t = Wl("path"), n = Wl("path"), it(t, "fill", "currentColor"), it(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), it(n, "fill", "currentColor"), it(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      _u(i, e, o), Oi(e, t), Oi(e, n);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(i) {
      i && uu(e);
    }
  };
}
class mu extends fu {
  constructor(e) {
    super(), cu(this, e, null, hu, du, {});
  }
}
const gu = [
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
], Wi = {
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
gu.reduce(
  (l, { color: e, primary: t, secondary: n }) => ({
    ...l,
    [e]: {
      primary: Wi[e][t],
      secondary: Wi[e][n]
    }
  }),
  {}
);
class el extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function bu(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new el("Must be on Spaces to share.");
  let t, n, i;
  t = wu(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
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
      throw new el(`Upload failed: ${f.error}`);
    }
    throw new el("Upload failed.");
  }
  return await s.text();
}
function wu(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: pu,
  create_component: vu,
  destroy_component: ku,
  init: yu,
  mount_component: Cu,
  safe_not_equal: Su,
  transition_in: zu,
  transition_out: qu
} = window.__gradio__svelte__internal, { createEventDispatcher: Bu } = window.__gradio__svelte__internal;
function Eu(l) {
  let e, t;
  return e = new pl({
    props: {
      Icon: vf,
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
      vu(e.$$.fragment);
    },
    m(n, i) {
      Cu(e, n, i), t = !0;
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
      t || (zu(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qu(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ku(e, n);
    }
  };
}
function Mu(l, e, t) {
  const n = Bu();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let u = f instanceof el ? f.message : "Share failed.";
      n("error", u);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, s = f.i18n);
  }, [i, o, s, r, n, a];
}
class Au extends pu {
  constructor(e) {
    super(), yu(this, e, Mu, Eu, Su, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Lu,
  append: Bt,
  attr: fi,
  check_outros: Ru,
  create_component: vs,
  destroy_component: ks,
  detach: tl,
  element: ui,
  group_outros: Du,
  init: Tu,
  insert: nl,
  mount_component: ys,
  safe_not_equal: ju,
  set_data: ci,
  space: _i,
  text: _n,
  toggle_class: Pi,
  transition_in: al,
  transition_out: rl
} = window.__gradio__svelte__internal;
function Hu(l) {
  let e, t;
  return e = new ps({}), {
    c() {
      vs(e.$$.fragment);
    },
    m(n, i) {
      ys(e, n, i), t = !0;
    },
    i(n) {
      t || (al(e.$$.fragment, n), t = !0);
    },
    o(n) {
      rl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ks(e, n);
    }
  };
}
function Iu(l) {
  let e, t;
  return e = new ws({}), {
    c() {
      vs(e.$$.fragment);
    },
    m(n, i) {
      ys(e, n, i), t = !0;
    },
    i(n) {
      t || (al(e.$$.fragment, n), t = !0);
    },
    o(n) {
      rl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ks(e, n);
    }
  };
}
function Zi(l) {
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
      e = ui("span"), t = _n("- "), i = _n(n), o = _n(" -"), s = _i(), a = _n(r), fi(e, "class", "or svelte-kzcjhc");
    },
    m(f, u) {
      nl(f, e, u), Bt(e, t), Bt(e, i), Bt(e, o), nl(f, s, u), nl(f, a, u);
    },
    p(f, u) {
      u & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && ci(i, n), u & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && ci(a, r);
    },
    d(f) {
      f && (tl(e), tl(s), tl(a));
    }
  };
}
function Fu(l) {
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
  const u = [Iu, Hu], c = [];
  function _(h, b) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = c[n] = u[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && Zi(l)
  );
  return {
    c() {
      e = ui("div"), t = ui("span"), i.c(), o = _i(), r = _n(s), a = _i(), d && d.c(), fi(t, "class", "icon-wrap svelte-kzcjhc"), Pi(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), fi(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, b) {
      nl(h, e, b), Bt(e, t), c[n].m(t, null), Bt(e, o), Bt(e, r), Bt(e, a), d && d.m(e, null), f = !0;
    },
    p(h, [b]) {
      let g = n;
      n = _(h), n !== g && (Du(), rl(c[g], 1, 1, () => {
        c[g] = null;
      }), Ru(), i = c[n], i || (i = c[n] = u[n](h), i.c()), al(i, 1), i.m(t, null)), (!f || b & /*hovered*/
      16) && Pi(
        t,
        "hovered",
        /*hovered*/
        h[4]
      ), (!f || b & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      h[1](
        /*defs*/
        h[5][
          /*type*/
          h[0]
        ] || /*defs*/
        h[5].file
      ) + "") && ci(r, s), /*mode*/
      h[3] !== "short" ? d ? d.p(h, b) : (d = Zi(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      f || (al(i), f = !0);
    },
    o(h) {
      rl(i), f = !1;
    },
    d(h) {
      h && tl(e), c[n].d(), d && d.d();
    }
  };
}
function Xu(l, e, t) {
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
class Cs extends Lu {
  constructor(e) {
    super(), Tu(this, e, Xu, Fu, ju, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Yu,
  append: Pl,
  attr: Ge,
  check_outros: dn,
  create_component: vl,
  destroy_component: kl,
  detach: tn,
  element: Rn,
  empty: Uu,
  group_outros: hn,
  init: Vu,
  insert: nn,
  listen: yl,
  mount_component: Cl,
  safe_not_equal: Nu,
  space: Zl,
  toggle_class: ht,
  transition_in: ee,
  transition_out: me
} = window.__gradio__svelte__internal;
function Ki(l) {
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
  ), f, u = t && Gi(l), c = i && Ji(l), _ = s && Qi(l), d = a && xi(l);
  return {
    c() {
      e = Rn("span"), u && u.c(), n = Zl(), c && c.c(), o = Zl(), _ && _.c(), r = Zl(), d && d.c(), Ge(e, "class", "source-selection svelte-1jp3vgd"), Ge(e, "data-testid", "source-select");
    },
    m(h, b) {
      nn(h, e, b), u && u.m(e, null), Pl(e, n), c && c.m(e, null), Pl(e, o), _ && _.m(e, null), Pl(e, r), d && d.m(e, null), f = !0;
    },
    p(h, b) {
      b & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? u ? (u.p(h, b), b & /*sources*/
      2 && ee(u, 1)) : (u = Gi(h), u.c(), ee(u, 1), u.m(e, n)) : u && (hn(), me(u, 1, 1, () => {
        u = null;
      }), dn()), b & /*sources*/
      2 && (i = /*sources*/
      h[1].includes("microphone")), i ? c ? (c.p(h, b), b & /*sources*/
      2 && ee(c, 1)) : (c = Ji(h), c.c(), ee(c, 1), c.m(e, o)) : c && (hn(), me(c, 1, 1, () => {
        c = null;
      }), dn()), b & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("webcam")), s ? _ ? (_.p(h, b), b & /*sources*/
      2 && ee(_, 1)) : (_ = Qi(h), _.c(), ee(_, 1), _.m(e, r)) : _ && (hn(), me(_, 1, 1, () => {
        _ = null;
      }), dn()), b & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? d ? (d.p(h, b), b & /*sources*/
      2 && ee(d, 1)) : (d = xi(h), d.c(), ee(d, 1), d.m(e, null)) : d && (hn(), me(d, 1, 1, () => {
        d = null;
      }), dn());
    },
    i(h) {
      f || (ee(u), ee(c), ee(_), ee(d), f = !0);
    },
    o(h) {
      me(u), me(c), me(_), me(d), f = !1;
    },
    d(h) {
      h && tn(e), u && u.d(), c && c.d(), _ && _.d(), d && d.d();
    }
  };
}
function Gi(l) {
  let e, t, n, i, o;
  return t = new ps({}), {
    c() {
      e = Rn("button"), vl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Upload file"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      nn(s, e, r), Cl(t, e, null), n = !0, i || (o = yl(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (ee(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && tn(e), kl(t), i = !1, o();
    }
  };
}
function Ji(l) {
  let e, t, n, i, o;
  return t = new nu({}), {
    c() {
      e = Rn("button"), vl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Record audio"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      nn(s, e, r), Cl(t, e, null), n = !0, i || (o = yl(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (ee(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && tn(e), kl(t), i = !1, o();
    }
  };
}
function Qi(l) {
  let e, t, n, i, o;
  return t = new mu({}), {
    c() {
      e = Rn("button"), vl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Capture from camera"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      nn(s, e, r), Cl(t, e, null), n = !0, i || (o = yl(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (ee(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && tn(e), kl(t), i = !1, o();
    }
  };
}
function xi(l) {
  let e, t, n, i, o;
  return t = new ws({}), {
    c() {
      e = Rn("button"), vl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Paste from clipboard"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      nn(s, e, r), Cl(t, e, null), n = !0, i || (o = yl(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (ee(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && tn(e), kl(t), i = !1, o();
    }
  };
}
function Ou(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && Ki(l)
  );
  return {
    c() {
      n && n.c(), e = Uu();
    },
    m(i, o) {
      n && n.m(i, o), nn(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && ee(n, 1)) : (n = Ki(i), n.c(), ee(n, 1), n.m(e.parentNode, e)) : n && (hn(), me(n, 1, 1, () => {
        n = null;
      }), dn());
    },
    i(i) {
      t || (ee(n), t = !0);
    },
    o(i) {
      me(n), t = !1;
    },
    d(i) {
      i && tn(e), n && n.d(i);
    }
  };
}
function Wu(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(h, b, g, w) {
    function p(m) {
      return m instanceof g ? m : new g(function(v) {
        v(m);
      });
    }
    return new (g || (g = Promise))(function(m, v) {
      function S(k) {
        try {
          z(w.next(k));
        } catch (q) {
          v(q);
        }
      }
      function y(k) {
        try {
          z(w.throw(k));
        } catch (q) {
          v(q);
        }
      }
      function z(k) {
        k.done ? m(k.value) : p(k.value).then(S, y);
      }
      z((w = w.apply(h, b || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(h) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, s = h), a(h);
    });
  }
  const u = () => f("upload"), c = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (h) => {
    "sources" in h && t(1, o = h.sources), "active_source" in h && t(0, s = h.active_source), "handle_clear" in h && t(4, r = h.handle_clear), "handle_select" in h && t(5, a = h.handle_select);
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
class Pu extends Yu {
  constructor(e) {
    super(), Vu(this, e, Wu, Ou, Nu, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Jt(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function ll() {
}
function Zu(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function $i(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const Ss = typeof window < "u";
let eo = Ss ? () => window.performance.now() : () => Date.now(), zs = Ss ? (l) => requestAnimationFrame(l) : ll;
const $t = /* @__PURE__ */ new Set();
function qs(l) {
  $t.forEach((e) => {
    e.c(l) || ($t.delete(e), e.f());
  }), $t.size !== 0 && zs(qs);
}
function Ku(l) {
  let e;
  return $t.size === 0 && zs(qs), {
    promise: new Promise((t) => {
      $t.add(e = { c: l, f: t });
    }),
    abort() {
      $t.delete(e);
    }
  };
}
function Gu(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function to(l, { delay: e = 0, duration: t = 400, easing: n = Gu, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, u = a * (1 - s), [c, _] = $i(i), [d, h] = $i(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (b, g) => `
			transform: ${f} translate(${(1 - b) * c}${_}, ${(1 - b) * d}${h});
			opacity: ${a - u * g}`
  };
}
const Ut = [];
function Ju(l, e = ll) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Zu(l, r) && (l = r, t)) {
      const a = !Ut.length;
      for (const f of n)
        f[1](), Ut.push(f, l);
      if (a) {
        for (let f = 0; f < Ut.length; f += 2)
          Ut[f][0](Ut[f + 1]);
        Ut.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = ll) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || ll), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function no(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function di(l, e, t, n) {
  if (typeof t == "number" || no(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = l.opts.stiffness * i, r = l.opts.damping * o, a = (s - r) * l.inv_mass, f = (o + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, no(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => di(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = di(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function lo(l, e = {}) {
  const t = Ju(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, u = l, c = 1, _ = 0, d = !1;
  function h(g, w = {}) {
    u = g;
    const p = a = {};
    return l == null || w.hard || b.stiffness >= 1 && b.damping >= 1 ? (d = !0, s = eo(), f = g, t.set(l = u), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), c = 0), r || (s = eo(), d = !1, r = Ku((m) => {
      if (d)
        return d = !1, r = null, !1;
      c = Math.min(c + _, 1);
      const v = {
        inv_mass: c,
        opts: b,
        settled: !0,
        dt: (m - s) * 60 / 1e3
      }, S = di(v, f, l, u);
      return s = m, f = l, t.set(l = S), v.settled && (r = null), !v.settled;
    })), new Promise((m) => {
      r.promise.then(() => {
        p === a && m();
      });
    }));
  }
  const b = {
    set: h,
    update: (g, w) => h(g(u, l), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return b;
}
const {
  SvelteComponent: Qu,
  append: De,
  attr: Y,
  component_subscribe: io,
  detach: xu,
  element: $u,
  init: ec,
  insert: tc,
  noop: oo,
  safe_not_equal: nc,
  set_style: Nn,
  svg_element: Te,
  toggle_class: so
} = window.__gradio__svelte__internal, { onMount: lc } = window.__gradio__svelte__internal;
function ic(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _;
  return {
    c() {
      e = $u("div"), t = Te("svg"), n = Te("g"), i = Te("path"), o = Te("path"), s = Te("path"), r = Te("path"), a = Te("g"), f = Te("path"), u = Te("path"), c = Te("path"), _ = Te("path"), Y(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Y(i, "fill", "#FF7C00"), Y(i, "fill-opacity", "0.4"), Y(i, "class", "svelte-43sxxs"), Y(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Y(o, "fill", "#FF7C00"), Y(o, "class", "svelte-43sxxs"), Y(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Y(s, "fill", "#FF7C00"), Y(s, "fill-opacity", "0.4"), Y(s, "class", "svelte-43sxxs"), Y(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Y(r, "fill", "#FF7C00"), Y(r, "class", "svelte-43sxxs"), Nn(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), Y(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Y(f, "fill", "#FF7C00"), Y(f, "fill-opacity", "0.4"), Y(f, "class", "svelte-43sxxs"), Y(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Y(u, "fill", "#FF7C00"), Y(u, "class", "svelte-43sxxs"), Y(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Y(c, "fill", "#FF7C00"), Y(c, "fill-opacity", "0.4"), Y(c, "class", "svelte-43sxxs"), Y(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Y(_, "fill", "#FF7C00"), Y(_, "class", "svelte-43sxxs"), Nn(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), Y(t, "viewBox", "-1200 -1200 3000 3000"), Y(t, "fill", "none"), Y(t, "xmlns", "http://www.w3.org/2000/svg"), Y(t, "class", "svelte-43sxxs"), Y(e, "class", "svelte-43sxxs"), so(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, h) {
      tc(d, e, h), De(e, t), De(t, n), De(n, i), De(n, o), De(n, s), De(n, r), De(t, a), De(a, f), De(a, u), De(a, c), De(a, _);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && Nn(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && Nn(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), h & /*margin*/
      1 && so(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: oo,
    o: oo,
    d(d) {
      d && xu(e);
    }
  };
}
function oc(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, h, b, g) {
    function w(p) {
      return p instanceof b ? p : new b(function(m) {
        m(p);
      });
    }
    return new (b || (b = Promise))(function(p, m) {
      function v(z) {
        try {
          y(g.next(z));
        } catch (k) {
          m(k);
        }
      }
      function S(z) {
        try {
          y(g.throw(z));
        } catch (k) {
          m(k);
        }
      }
      function y(z) {
        z.done ? p(z.value) : w(z.value).then(v, S);
      }
      y((g = g.apply(d, h || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = lo([0, 0]);
  io(l, r, (d) => t(1, n = d));
  const a = lo([0, 0]);
  io(l, a, (d) => t(2, i = d));
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
  return lc(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class sc extends Qu {
  constructor(e) {
    super(), ec(this, e, oc, ic, nc, { margin: 0 });
  }
}
const {
  SvelteComponent: ac,
  append: Et,
  attr: Fe,
  binding_callbacks: ao,
  check_outros: hi,
  create_component: Bs,
  create_slot: Es,
  destroy_component: Ms,
  destroy_each: As,
  detach: T,
  element: Ze,
  empty: ln,
  ensure_array_like: fl,
  get_all_dirty_from_scope: Ls,
  get_slot_changes: Rs,
  group_outros: mi,
  init: rc,
  insert: j,
  mount_component: Ds,
  noop: gi,
  safe_not_equal: fc,
  set_data: Ae,
  set_style: _t,
  space: Me,
  text: K,
  toggle_class: Ee,
  transition_in: Ie,
  transition_out: Ke,
  update_slot_base: Ts
} = window.__gradio__svelte__internal, { tick: uc } = window.__gradio__svelte__internal, { onDestroy: cc } = window.__gradio__svelte__internal, { createEventDispatcher: _c } = window.__gradio__svelte__internal, dc = (l) => ({}), ro = (l) => ({}), hc = (l) => ({}), fo = (l) => ({});
function uo(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function co(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function mc(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new pl({
    props: {
      Icon: gs,
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
  ), u = Es(
    f,
    l,
    /*$$scope*/
    l[29],
    ro
  );
  return {
    c() {
      e = Ze("div"), Bs(t.$$.fragment), n = Me(), i = Ze("span"), s = K(o), r = Me(), u && u.c(), Fe(e, "class", "clear-status svelte-16nch4a"), Fe(i, "class", "error svelte-16nch4a");
    },
    m(c, _) {
      j(c, e, _), Ds(t, e, null), j(c, n, _), j(c, i, _), Et(i, s), j(c, r, _), u && u.m(c, _), a = !0;
    },
    p(c, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      c[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      c[1]("common.error") + "") && Ae(s, o), u && u.p && (!a || _[0] & /*$$scope*/
      536870912) && Ts(
        u,
        f,
        c,
        /*$$scope*/
        c[29],
        a ? Rs(
          f,
          /*$$scope*/
          c[29],
          _,
          dc
        ) : Ls(
          /*$$scope*/
          c[29]
        ),
        ro
      );
    },
    i(c) {
      a || (Ie(t.$$.fragment, c), Ie(u, c), a = !0);
    },
    o(c) {
      Ke(t.$$.fragment, c), Ke(u, c), a = !1;
    },
    d(c) {
      c && (T(e), T(n), T(i), T(r)), Ms(t), u && u.d(c);
    }
  };
}
function gc(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && _o(l)
  );
  function c(m, v) {
    if (
      /*progress*/
      m[7]
    ) return pc;
    if (
      /*queue_position*/
      m[2] !== null && /*queue_size*/
      m[3] !== void 0 && /*queue_position*/
      m[2] >= 0
    ) return wc;
    if (
      /*queue_position*/
      m[2] === 0
    ) return bc;
  }
  let _ = c(l), d = _ && _(l), h = (
    /*timer*/
    l[5] && go(l)
  );
  const b = [Cc, yc], g = [];
  function w(m, v) {
    return (
      /*last_progress_level*/
      m[15] != null ? 0 : (
        /*show_progress*/
        m[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = w(l)) && (s = g[o] = b[o](l));
  let p = !/*timer*/
  l[5] && Co(l);
  return {
    c() {
      u && u.c(), e = Me(), t = Ze("div"), d && d.c(), n = Me(), h && h.c(), i = Me(), s && s.c(), r = Me(), p && p.c(), a = ln(), Fe(t, "class", "progress-text svelte-16nch4a"), Ee(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Ee(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(m, v) {
      u && u.m(m, v), j(m, e, v), j(m, t, v), d && d.m(t, null), Et(t, n), h && h.m(t, null), j(m, i, v), ~o && g[o].m(m, v), j(m, r, v), p && p.m(m, v), j(m, a, v), f = !0;
    },
    p(m, v) {
      /*variant*/
      m[8] === "default" && /*show_eta_bar*/
      m[18] && /*show_progress*/
      m[6] === "full" ? u ? u.p(m, v) : (u = _o(m), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), _ === (_ = c(m)) && d ? d.p(m, v) : (d && d.d(1), d = _ && _(m), d && (d.c(), d.m(t, n))), /*timer*/
      m[5] ? h ? h.p(m, v) : (h = go(m), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!f || v[0] & /*variant*/
      256) && Ee(
        t,
        "meta-text-center",
        /*variant*/
        m[8] === "center"
      ), (!f || v[0] & /*variant*/
      256) && Ee(
        t,
        "meta-text",
        /*variant*/
        m[8] === "default"
      );
      let S = o;
      o = w(m), o === S ? ~o && g[o].p(m, v) : (s && (mi(), Ke(g[S], 1, 1, () => {
        g[S] = null;
      }), hi()), ~o ? (s = g[o], s ? s.p(m, v) : (s = g[o] = b[o](m), s.c()), Ie(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      m[5] ? p && (mi(), Ke(p, 1, 1, () => {
        p = null;
      }), hi()) : p ? (p.p(m, v), v[0] & /*timer*/
      32 && Ie(p, 1)) : (p = Co(m), p.c(), Ie(p, 1), p.m(a.parentNode, a));
    },
    i(m) {
      f || (Ie(s), Ie(p), f = !0);
    },
    o(m) {
      Ke(s), Ke(p), f = !1;
    },
    d(m) {
      m && (T(e), T(t), T(i), T(r), T(a)), u && u.d(m), d && d.d(), h && h.d(), ~o && g[o].d(m), p && p.d(m);
    }
  };
}
function _o(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Ze("div"), Fe(e, "class", "eta-bar svelte-16nch4a"), _t(e, "transform", t);
    },
    m(n, i) {
      j(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && _t(e, "transform", t);
    },
    d(n) {
      n && T(e);
    }
  };
}
function bc(l) {
  let e;
  return {
    c() {
      e = K("processing |");
    },
    m(t, n) {
      j(t, e, n);
    },
    p: gi,
    d(t) {
      t && T(e);
    }
  };
}
function wc(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = K("queue: "), n = K(t), i = K("/"), o = K(
        /*queue_size*/
        l[3]
      ), s = K(" |");
    },
    m(r, a) {
      j(r, e, a), j(r, n, a), j(r, i, a), j(r, o, a), j(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ae(n, t), a[0] & /*queue_size*/
      8 && Ae(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (T(e), T(n), T(i), T(o), T(s));
    }
  };
}
function pc(l) {
  let e, t = fl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = mo(co(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = ln();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = fl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = co(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = mo(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && T(e), As(n, i);
    }
  };
}
function ho(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(u, c) {
    return (
      /*p*/
      u[41].length != null ? kc : vc
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Me(), n = K(t), i = K(" | "), s = K(o);
    },
    m(u, c) {
      f.m(u, c), j(u, e, c), j(u, n, c), j(u, i, c), j(u, s, c);
    },
    p(u, c) {
      a === (a = r(u)) && f ? f.p(u, c) : (f.d(1), f = a(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && Ae(n, t);
    },
    d(u) {
      u && (T(e), T(n), T(i), T(s)), f.d(u);
    }
  };
}
function vc(l) {
  let e = Jt(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = K(e);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Jt(
        /*p*/
        n[41].index || 0
      ) + "") && Ae(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function kc(l) {
  let e = Jt(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Jt(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = K(e), n = K("/"), o = K(i);
    },
    m(s, r) {
      j(s, t, r), j(s, n, r), j(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Jt(
        /*p*/
        s[41].index || 0
      ) + "") && Ae(t, e), r[0] & /*progress*/
      128 && i !== (i = Jt(
        /*p*/
        s[41].length
      ) + "") && Ae(o, i);
    },
    d(s) {
      s && (T(t), T(n), T(o));
    }
  };
}
function mo(l) {
  let e, t = (
    /*p*/
    l[41].index != null && ho(l)
  );
  return {
    c() {
      t && t.c(), e = ln();
    },
    m(n, i) {
      t && t.m(n, i), j(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = ho(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function go(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = K(
        /*formatted_timer*/
        l[20]
      ), n = K(t), i = K("s");
    },
    m(o, s) {
      j(o, e, s), j(o, n, s), j(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ae(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ae(n, t);
    },
    d(o) {
      o && (T(e), T(n), T(i));
    }
  };
}
function yc(l) {
  let e, t;
  return e = new sc({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      Bs(e.$$.fragment);
    },
    m(n, i) {
      Ds(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ke(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ms(e, n);
    }
  };
}
function Cc(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && bo(l)
  );
  return {
    c() {
      e = Ze("div"), t = Ze("div"), r && r.c(), n = Me(), i = Ze("div"), o = Ze("div"), Fe(t, "class", "progress-level-inner svelte-16nch4a"), Fe(o, "class", "progress-bar svelte-16nch4a"), _t(o, "width", s), Fe(i, "class", "progress-bar-wrap svelte-16nch4a"), Fe(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      j(a, e, f), Et(e, t), r && r.m(t, null), Et(e, n), Et(e, i), Et(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = bo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && _t(o, "width", s);
    },
    i: gi,
    o: gi,
    d(a) {
      a && T(e), r && r.d(), l[31](null);
    }
  };
}
function bo(l) {
  let e, t = fl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = yo(uo(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = ln();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = fl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = uo(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = yo(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && T(e), As(n, i);
    }
  };
}
function wo(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && Sc()
  ), s = (
    /*p*/
    l[41].desc != null && po(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && vo()
  ), a = (
    /*progress_level*/
    l[14] != null && ko(l)
  );
  return {
    c() {
      o && o.c(), e = Me(), s && s.c(), t = Me(), r && r.c(), n = Me(), a && a.c(), i = ln();
    },
    m(f, u) {
      o && o.m(f, u), j(f, e, u), s && s.m(f, u), j(f, t, u), r && r.m(f, u), j(f, n, u), a && a.m(f, u), j(f, i, u);
    },
    p(f, u) {
      /*p*/
      f[41].desc != null ? s ? s.p(f, u) : (s = po(f), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = vo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, u) : (a = ko(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (T(e), T(t), T(n), T(i)), o && o.d(f), s && s.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function Sc(l) {
  let e;
  return {
    c() {
      e = K(" /");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function po(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = K(e);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ae(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function vo(l) {
  let e;
  return {
    c() {
      e = K("-");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function ko(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = K(e), n = K("%");
    },
    m(i, o) {
      j(i, t, o), j(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Ae(t, e);
    },
    d(i) {
      i && (T(t), T(n));
    }
  };
}
function yo(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && wo(l)
  );
  return {
    c() {
      t && t.c(), e = ln();
    },
    m(n, i) {
      t && t.m(n, i), j(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = wo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function Co(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = Es(
    o,
    l,
    /*$$scope*/
    l[29],
    fo
  );
  return {
    c() {
      e = Ze("p"), t = K(
        /*loading_text*/
        l[9]
      ), n = Me(), s && s.c(), Fe(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      j(r, e, a), Et(e, t), j(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ae(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && Ts(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? Rs(
          o,
          /*$$scope*/
          r[29],
          a,
          hc
        ) : Ls(
          /*$$scope*/
          r[29]
        ),
        fo
      );
    },
    i(r) {
      i || (Ie(s, r), i = !0);
    },
    o(r) {
      Ke(s, r), i = !1;
    },
    d(r) {
      r && (T(e), T(n)), s && s.d(r);
    }
  };
}
function zc(l) {
  let e, t, n, i, o;
  const s = [gc, mc], r = [];
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
      e = Ze("div"), n && n.c(), Fe(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Ee(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Ee(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Ee(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Ee(
        e,
        "border",
        /*border*/
        l[12]
      ), _t(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), _t(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, u) {
      j(f, e, u), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, u) {
      let c = t;
      t = a(f), t === c ? ~t && r[t].p(f, u) : (n && (mi(), Ke(r[c], 1, 1, () => {
        r[c] = null;
      }), hi()), ~t ? (n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), Ie(n, 1), n.m(e, null)) : n = null), (!o || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && Fe(e, "class", i), (!o || u[0] & /*variant, show_progress, status, show_progress*/
      336) && Ee(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ee(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || u[0] & /*variant, show_progress, status*/
      336) && Ee(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || u[0] & /*variant, show_progress, border*/
      4416) && Ee(
        e,
        "border",
        /*border*/
        f[12]
      ), u[0] & /*absolute*/
      1024 && _t(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && _t(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (Ie(n), o = !0);
    },
    o(f) {
      Ke(n), o = !1;
    },
    d(f) {
      f && T(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var qc = function(l, e, t, n) {
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
let On = [], Kl = !1;
function Bc(l) {
  return qc(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (On.push(e), !Kl) Kl = !0;
      else return;
      yield uc(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < On.length; i++) {
          const s = On[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Kl = !1, On = [];
      });
    }
  });
}
function Ec(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = _c();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: b = null } = e, { progress: g = null } = e, { variant: w = "default" } = e, { loading_text: p = "Loading..." } = e, { absolute: m = !0 } = e, { translucent: v = !1 } = e, { border: S = !1 } = e, { autoscroll: y } = e, z, k = !1, q = 0, I = 0, F = null, R = null, G = 0, U = null, X, O = null, _e = !0;
  const oe = () => {
    t(0, a = t(27, F = t(19, ue = null))), t(25, q = performance.now()), t(26, I = 0), k = !0, fe();
  };
  function fe() {
    requestAnimationFrame(() => {
      t(26, I = (performance.now() - q) / 1e3), k && fe();
    });
  }
  function D() {
    t(26, I = 0), t(0, a = t(27, F = t(19, ue = null))), k && (k = !1);
  }
  cc(() => {
    k && D();
  });
  let ue = null;
  function Ce(A) {
    ao[A ? "unshift" : "push"](() => {
      O = A, t(16, O), t(7, g), t(14, U), t(15, X);
    });
  }
  const Xe = () => {
    s("clear_status");
  };
  function Ye(A) {
    ao[A ? "unshift" : "push"](() => {
      z = A, t(13, z);
    });
  }
  return l.$$set = (A) => {
    "i18n" in A && t(1, r = A.i18n), "eta" in A && t(0, a = A.eta), "queue_position" in A && t(2, f = A.queue_position), "queue_size" in A && t(3, u = A.queue_size), "status" in A && t(4, c = A.status), "scroll_to_output" in A && t(22, _ = A.scroll_to_output), "timer" in A && t(5, d = A.timer), "show_progress" in A && t(6, h = A.show_progress), "message" in A && t(23, b = A.message), "progress" in A && t(7, g = A.progress), "variant" in A && t(8, w = A.variant), "loading_text" in A && t(9, p = A.loading_text), "absolute" in A && t(10, m = A.absolute), "translucent" in A && t(11, v = A.translucent), "border" in A && t(12, S = A.border), "autoscroll" in A && t(24, y = A.autoscroll), "$$scope" in A && t(29, o = A.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = F), a != null && F !== a && (t(28, R = (performance.now() - q) / 1e3 + a), t(19, ue = R.toFixed(1)), t(27, F = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, G = R === null || R <= 0 || !I ? null : Math.min(I / R, 1)), l.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, _e = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, U = g.map((A) => {
      if (A.index != null && A.length != null)
        return A.index / A.length;
      if (A.progress != null)
        return A.progress;
    })) : t(14, U = null), U ? (t(15, X = U[U.length - 1]), O && (X === 0 ? t(16, O.style.transition = "0", O) : t(16, O.style.transition = "150ms", O))) : t(15, X = void 0)), l.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? oe() : D()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && _ && (c === "pending" || c === "complete") && Bc(z, y), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = I.toFixed(1));
  }, [
    a,
    r,
    f,
    u,
    c,
    d,
    h,
    g,
    w,
    p,
    m,
    v,
    S,
    z,
    U,
    X,
    O,
    G,
    _e,
    ue,
    n,
    s,
    _,
    b,
    y,
    q,
    I,
    F,
    R,
    o,
    i,
    Ce,
    Xe,
    Ye
  ];
}
class Mc extends ac {
  constructor(e) {
    super(), rc(
      this,
      e,
      Ec,
      zc,
      fc,
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
const { setContext: U0, getContext: Ac } = window.__gradio__svelte__internal, Lc = "WORKER_PROXY_CONTEXT_KEY";
function js() {
  return Ac(Lc);
}
function Rc(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function Hs(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Is(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!Rc(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Dc(l) {
  if (l == null || !Is(l))
    return l;
  const e = js();
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
      type: Hs(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Tc,
  assign: ul,
  check_outros: Fs,
  compute_rest_props: So,
  create_slot: qi,
  detach: Sl,
  element: Xs,
  empty: Ys,
  exclude_internal_props: jc,
  get_all_dirty_from_scope: Bi,
  get_slot_changes: Ei,
  get_spread_update: Us,
  group_outros: Vs,
  init: Hc,
  insert: zl,
  listen: Ns,
  prevent_default: Ic,
  safe_not_equal: Fc,
  set_attributes: cl,
  transition_in: Lt,
  transition_out: Rt,
  update_slot_base: Mi
} = window.__gradio__svelte__internal, { createEventDispatcher: Xc } = window.__gradio__svelte__internal;
function Yc(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = qi(
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
    f = ul(f, a[u]);
  return {
    c() {
      e = Xs("a"), r && r.c(), cl(e, f);
    },
    m(u, c) {
      zl(u, e, c), r && r.m(e, null), n = !0, i || (o = Ns(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(u, c) {
      r && r.p && (!n || c & /*$$scope*/
      128) && Mi(
        r,
        s,
        u,
        /*$$scope*/
        u[7],
        n ? Ei(
          s,
          /*$$scope*/
          u[7],
          c,
          null
        ) : Bi(
          /*$$scope*/
          u[7]
        ),
        null
      ), cl(e, f = Us(a, [
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
      n || (Lt(r, u), n = !0);
    },
    o(u) {
      Rt(r, u), n = !1;
    },
    d(u) {
      u && Sl(e), r && r.d(u), i = !1, o();
    }
  };
}
function Uc(l) {
  let e, t, n, i;
  const o = [Nc, Vc], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Ys();
    },
    m(a, f) {
      s[e].m(a, f), zl(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Vs(), Rt(s[u], 1, 1, () => {
        s[u] = null;
      }), Fs(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Lt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Lt(t), i = !0);
    },
    o(a) {
      Rt(t), i = !1;
    },
    d(a) {
      a && Sl(n), s[e].d(a);
    }
  };
}
function Vc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = qi(
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
    a = ul(a, r[f]);
  return {
    c() {
      e = Xs("a"), s && s.c(), cl(e, a);
    },
    m(f, u) {
      zl(f, e, u), s && s.m(e, null), t = !0, n || (i = Ns(e, "click", Ic(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, u) {
      s && s.p && (!t || u & /*$$scope*/
      128) && Mi(
        s,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? Ei(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : Bi(
          /*$$scope*/
          f[7]
        ),
        null
      ), cl(e, a = Us(r, [
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
      t || (Lt(s, f), t = !0);
    },
    o(f) {
      Rt(s, f), t = !1;
    },
    d(f) {
      f && Sl(e), s && s.d(f), n = !1, i();
    }
  };
}
function Nc(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = qi(
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
      128) && Mi(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Ei(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Bi(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (Lt(n, i), e = !0);
    },
    o(i) {
      Rt(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Oc(l) {
  let e, t, n, i, o;
  const s = [Uc, Yc], r = [];
  function a(f, u) {
    return u & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Is(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = Ys();
    },
    m(f, u) {
      r[t].m(f, u), zl(f, i, u), o = !0;
    },
    p(f, [u]) {
      let c = t;
      t = a(f, u), t === c ? r[t].p(f, u) : (Vs(), Rt(r[c], 1, 1, () => {
        r[c] = null;
      }), Fs(), n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), Lt(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (Lt(n), o = !0);
    },
    o(f) {
      Rt(n), o = !1;
    },
    d(f) {
      f && Sl(i), r[t].d(f);
    }
  };
}
function Wc(l, e, t) {
  const n = ["href", "download"];
  let i = So(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(h, b, g, w) {
    function p(m) {
      return m instanceof g ? m : new g(function(v) {
        v(m);
      });
    }
    return new (g || (g = Promise))(function(m, v) {
      function S(k) {
        try {
          z(w.next(k));
        } catch (q) {
          v(q);
        }
      }
      function y(k) {
        try {
          z(w.throw(k));
        } catch (q) {
          v(q);
        }
      }
      function z(k) {
        k.done ? m(k.value) : p(k.value).then(S, y);
      }
      z((w = w.apply(h, b || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const u = Xc();
  let c = !1;
  const _ = js();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (c)
        return;
      if (u("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const b = new URL(a, window.location.href).pathname;
      t(2, c = !0), _.httpRequest({
        method: "GET",
        path: b,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${b} from the Wasm worker.`);
        const w = new Blob(
          [g.body],
          {
            type: Hs(g.headers, "content-type")
          }
        ), p = URL.createObjectURL(w), m = document.createElement("a");
        m.href = p, m.download = f, m.click(), URL.revokeObjectURL(p);
      }).finally(() => {
        t(2, c = !1);
      });
    });
  }
  return l.$$set = (h) => {
    e = ul(ul({}, e), jc(h)), t(6, i = So(e, n)), "href" in h && t(0, a = h.href), "download" in h && t(1, f = h.download), "$$scope" in h && t(7, s = h.$$scope);
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
class Pc extends Tc {
  constructor(e) {
    super(), Hc(this, e, Wc, Oc, Fc, { href: 0, download: 1 });
  }
}
var Zc = Object.defineProperty, Kc = (l, e, t) => e in l ? Zc(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Qe = (l, e, t) => (Kc(l, typeof e != "symbol" ? e + "" : e, t), t), Os = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, rn = (l, e, t) => (Os(l, e, "read from private field"), t ? t.call(l) : e.get(l)), Gc = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, Jc = (l, e, t, n) => (Os(l, e, "write to private field"), e.set(l, t), t), rt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Qc(l, e) {
  return l.map(
    (t) => new xc({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class xc {
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
    Qe(this, "path"), Qe(this, "url"), Qe(this, "orig_name"), Qe(this, "size"), Qe(this, "blob"), Qe(this, "is_stream"), Qe(this, "mime_type"), Qe(this, "alt_text"), Qe(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class V0 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = rn(this, rt) + t; ; ) {
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
        Jc(this, rt, t);
      },
      flush: (t) => {
        if (rn(this, rt) === "")
          return;
        const n = e.allowCR && rn(this, rt).endsWith("\r") ? rn(this, rt).slice(0, -1) : rn(this, rt);
        t.enqueue(n);
      }
    }), Gc(this, rt, "");
  }
}
rt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: $c,
  append: be,
  attr: Ct,
  detach: Ws,
  element: St,
  init: e_,
  insert: Ps,
  noop: zo,
  safe_not_equal: t_,
  set_data: _l,
  set_style: Gl,
  space: bi,
  text: Qt,
  toggle_class: qo
} = window.__gradio__svelte__internal, { onMount: n_, createEventDispatcher: l_, onDestroy: i_ } = window.__gradio__svelte__internal;
function Bo(l) {
  let e, t, n, i, o = mn(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, u = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), c;
  return {
    c() {
      e = St("div"), t = St("span"), n = St("div"), i = St("progress"), s = Qt(o), a = bi(), f = St("span"), c = Qt(u), Gl(i, "visibility", "hidden"), Gl(i, "height", "0"), Gl(i, "width", "0"), i.value = r = mn(
        /*file_to_display*/
        l[2]
      ), Ct(i, "max", "100"), Ct(i, "class", "svelte-cr2edf"), Ct(n, "class", "progress-bar svelte-cr2edf"), Ct(f, "class", "file-name svelte-cr2edf"), Ct(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Ps(_, e, d), be(e, t), be(t, n), be(n, i), be(i, s), be(e, a), be(e, f), be(f, c);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = mn(
        /*file_to_display*/
        _[2]
      ) + "") && _l(s, o), d & /*file_to_display*/
      4 && r !== (r = mn(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && u !== (u = /*file_to_display*/
      _[2].orig_name + "") && _l(c, u);
    },
    d(_) {
      _ && Ws(e);
    }
  };
}
function o_(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, u, c = (
    /*file_to_display*/
    l[2] && Bo(l)
  );
  return {
    c() {
      e = St("div"), t = St("span"), n = Qt("Uploading "), o = Qt(i), s = bi(), a = Qt(r), f = Qt("..."), u = bi(), c && c.c(), Ct(t, "class", "uploading svelte-cr2edf"), Ct(e, "class", "wrap svelte-cr2edf"), qo(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Ps(_, e, d), be(e, t), be(t, n), be(t, o), be(t, s), be(t, a), be(t, f), be(e, u), c && c.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && _l(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && _l(a, r), /*file_to_display*/
      _[2] ? c ? c.p(_, d) : (c = Bo(_), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d & /*progress*/
      2 && qo(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: zo,
    o: zo,
    d(_) {
      _ && Ws(e), c && c.d();
    }
  };
}
function mn(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function s_(l) {
  let e = 0;
  return l.forEach((t) => {
    e += mn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function a_(l, e, t) {
  var n = this && this.__awaiter || function(b, g, w, p) {
    function m(v) {
      return v instanceof w ? v : new w(function(S) {
        S(v);
      });
    }
    return new (w || (w = Promise))(function(v, S) {
      function y(q) {
        try {
          k(p.next(q));
        } catch (I) {
          S(I);
        }
      }
      function z(q) {
        try {
          k(p.throw(q));
        } catch (I) {
          S(I);
        }
      }
      function k(q) {
        q.done ? v(q.value) : m(q.value).then(y, z);
      }
      k((p = p.apply(b, g || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, u, c, _ = s.map((b) => Object.assign(Object.assign({}, b), { progress: 0 }));
  const d = l_();
  function h(b, g) {
    t(0, _ = _.map((w) => (w.orig_name === b && (w.progress += g), w)));
  }
  return n_(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(b) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(b.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, u = g), h(g.orig_name, g.chunk_size));
      });
    };
  })), i_(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (b) => {
    "upload_id" in b && t(3, i = b.upload_id), "root" in b && t(4, o = b.root), "files" in b && t(5, s = b.files), "stream_handler" in b && t(6, r = b.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && s_(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
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
class r_ extends $c {
  constructor(e) {
    super(), e_(this, e, a_, o_, t_, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: f_,
  append: Eo,
  attr: re,
  binding_callbacks: u_,
  bubble: wt,
  check_outros: Zs,
  create_component: c_,
  create_slot: Ks,
  destroy_component: __,
  detach: ql,
  element: wi,
  empty: Gs,
  get_all_dirty_from_scope: Js,
  get_slot_changes: Qs,
  group_outros: xs,
  init: d_,
  insert: Bl,
  listen: pe,
  mount_component: h_,
  prevent_default: pt,
  run_all: m_,
  safe_not_equal: g_,
  set_style: $s,
  space: b_,
  stop_propagation: vt,
  toggle_class: le,
  transition_in: dt,
  transition_out: Dt,
  update_slot_base: ea
} = window.__gradio__svelte__internal, { createEventDispatcher: w_, tick: p_ } = window.__gradio__svelte__internal;
function v_(l) {
  let e, t, n, i, o, s, r, a, f, u, c;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Ks(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = wi("button"), d && d.c(), t = b_(), n = wi("input"), re(n, "aria-label", "file upload"), re(n, "data-testid", "file-upload"), re(n, "type", "file"), re(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, re(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), re(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), re(n, "class", "svelte-1s26xmt"), re(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), re(e, "class", "svelte-1s26xmt"), le(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), le(
        e,
        "center",
        /*center*/
        l[4]
      ), le(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), le(
        e,
        "flex",
        /*flex*/
        l[5]
      ), le(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), $s(e, "height", "100%");
    },
    m(h, b) {
      Bl(h, e, b), d && d.m(e, null), Eo(e, t), Eo(e, n), l[34](n), f = !0, u || (c = [
        pe(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        pe(e, "drag", vt(pt(
          /*drag_handler*/
          l[27]
        ))),
        pe(e, "dragstart", vt(pt(
          /*dragstart_handler*/
          l[28]
        ))),
        pe(e, "dragend", vt(pt(
          /*dragend_handler*/
          l[29]
        ))),
        pe(e, "dragover", vt(pt(
          /*dragover_handler*/
          l[30]
        ))),
        pe(e, "dragenter", vt(pt(
          /*dragenter_handler*/
          l[31]
        ))),
        pe(e, "dragleave", vt(pt(
          /*dragleave_handler*/
          l[32]
        ))),
        pe(e, "drop", vt(pt(
          /*drop_handler*/
          l[33]
        ))),
        pe(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        pe(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        pe(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        pe(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], u = !0);
    },
    p(h, b) {
      d && d.p && (!f || b[0] & /*$$scope*/
      33554432) && ea(
        d,
        _,
        h,
        /*$$scope*/
        h[25],
        f ? Qs(
          _,
          /*$$scope*/
          h[25],
          b,
          null
        ) : Js(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!f || b[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      h[16] || void 0)) && re(n, "accept", i), (!f || b[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = o), (!f || b[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      h[6] === "directory" || void 0)) && re(n, "webkitdirectory", s), (!f || b[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && re(n, "mozdirectory", r), (!f || b[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      h[9] ? -1 : 0)) && re(e, "tabindex", a), (!f || b[0] & /*hidden*/
      512) && le(
        e,
        "hidden",
        /*hidden*/
        h[9]
      ), (!f || b[0] & /*center*/
      16) && le(
        e,
        "center",
        /*center*/
        h[4]
      ), (!f || b[0] & /*boundedheight*/
      8) && le(
        e,
        "boundedheight",
        /*boundedheight*/
        h[3]
      ), (!f || b[0] & /*flex*/
      32) && le(
        e,
        "flex",
        /*flex*/
        h[5]
      ), (!f || b[0] & /*disable_click*/
      128) && le(
        e,
        "disable_click",
        /*disable_click*/
        h[7]
      );
    },
    i(h) {
      f || (dt(d, h), f = !0);
    },
    o(h) {
      Dt(d, h), f = !1;
    },
    d(h) {
      h && ql(e), d && d.d(h), l[34](null), u = !1, m_(c);
    }
  };
}
function k_(l) {
  let e, t, n = !/*hidden*/
  l[9] && Mo(l);
  return {
    c() {
      n && n.c(), e = Gs();
    },
    m(i, o) {
      n && n.m(i, o), Bl(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (xs(), Dt(n, 1, 1, () => {
        n = null;
      }), Zs()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && dt(n, 1)) : (n = Mo(i), n.c(), dt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (dt(n), t = !0);
    },
    o(i) {
      Dt(n), t = !1;
    },
    d(i) {
      i && ql(e), n && n.d(i);
    }
  };
}
function y_(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = Ks(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = wi("button"), r && r.c(), re(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), re(e, "class", "svelte-1s26xmt"), le(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), le(
        e,
        "center",
        /*center*/
        l[4]
      ), le(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), le(
        e,
        "flex",
        /*flex*/
        l[5]
      ), $s(e, "height", "100%");
    },
    m(a, f) {
      Bl(a, e, f), r && r.m(e, null), n = !0, i || (o = pe(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && ea(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? Qs(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Js(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && re(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && le(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && le(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && le(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && le(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (dt(r, a), n = !0);
    },
    o(a) {
      Dt(r, a), n = !1;
    },
    d(a) {
      a && ql(e), r && r.d(a), i = !1, o();
    }
  };
}
function Mo(l) {
  let e, t;
  return e = new r_({
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
      c_(e.$$.fragment);
    },
    m(n, i) {
      h_(e, n, i), t = !0;
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
      t || (dt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Dt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      __(e, n);
    }
  };
}
function C_(l) {
  let e, t, n, i;
  const o = [y_, k_, v_], s = [];
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
      t.c(), n = Gs();
    },
    m(a, f) {
      s[e].m(a, f), Bl(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (xs(), Dt(s[u], 1, 1, () => {
        s[u] = null;
      }), Zs(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), dt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (dt(t), i = !0);
    },
    o(a) {
      Dt(t), i = !1;
    },
    d(a) {
      a && ql(n), s[e].d(a);
    }
  };
}
function S_(l, e, t) {
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
function z_(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(E, C, W, P) {
    function te(B) {
      return B instanceof W ? B : new W(function(Se) {
        Se(B);
      });
    }
    return new (W || (W = Promise))(function(B, Se) {
      function ze(ce) {
        try {
          Le(P.next(ce));
        } catch (Ue) {
          Se(Ue);
        }
      }
      function se(ce) {
        try {
          Le(P.throw(ce));
        } catch (Ue) {
          Se(Ue);
        }
      }
      function Le(ce) {
        ce.done ? B(ce.value) : te(ce.value).then(ze, se);
      }
      Le((P = P.apply(E, C || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: b = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: w = null } = e, { show_progress: p = !0 } = e, { max_file_size: m = null } = e, { upload: v } = e, { stream_handler: S } = e, y, z, k;
  const q = w_(), I = ["image", "video", "audio", "text", "file"], F = (E) => E.startsWith(".") || E.endsWith("/*") ? E : I.includes(E) ? E + "/*" : "." + E;
  function R() {
    t(20, r = !r);
  }
  function G() {
    navigator.clipboard.read().then((E) => o(this, void 0, void 0, function* () {
      for (let C = 0; C < E.length; C++) {
        const W = E[C].types.find((P) => P.startsWith("image/"));
        if (W) {
          E[C].getType(W).then((P) => o(this, void 0, void 0, function* () {
            const te = new File([P], `clipboard.${W.replace("image/", "")}`);
            yield O([te]);
          }));
          break;
        }
      }
    }));
  }
  function U() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function X(E) {
    return o(this, void 0, void 0, function* () {
      yield p_(), t(14, y = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const C = yield v(E, d, y, m ?? 1 / 0);
        return q("load", c === "single" ? C == null ? void 0 : C[0] : C), t(1, g = !1), C || [];
      } catch (C) {
        return q("error", C.message), t(1, g = !1), [];
      }
    });
  }
  function O(E) {
    return o(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let C = E.map((W) => new File([W], W instanceof File ? W.name : "file", { type: W.type }));
      return t(15, z = yield Qc(C)), yield X(z);
    });
  }
  function _e(E) {
    return o(this, void 0, void 0, function* () {
      const C = E.target;
      if (C.files)
        if (b != "blob")
          yield O(Array.from(C.files));
        else {
          if (c === "single") {
            q("load", C.files[0]);
            return;
          }
          q("load", C.files);
        }
    });
  }
  function oe(E) {
    return o(this, void 0, void 0, function* () {
      var C;
      if (t(20, r = !1), !(!((C = E.dataTransfer) === null || C === void 0) && C.files)) return;
      const W = Array.from(E.dataTransfer.files).filter((P) => {
        const te = "." + P.name.split(".").pop();
        return te && S_(k, te, P.type) || (te && Array.isArray(s) ? s.includes(te) : te === s) ? !0 : (q("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield O(W);
    });
  }
  function fe(E) {
    wt.call(this, l, E);
  }
  function D(E) {
    wt.call(this, l, E);
  }
  function ue(E) {
    wt.call(this, l, E);
  }
  function Ce(E) {
    wt.call(this, l, E);
  }
  function Xe(E) {
    wt.call(this, l, E);
  }
  function Ye(E) {
    wt.call(this, l, E);
  }
  function A(E) {
    wt.call(this, l, E);
  }
  function Je(E) {
    u_[E ? "unshift" : "push"](() => {
      w = E, t(2, w);
    });
  }
  return l.$$set = (E) => {
    "filetype" in E && t(0, s = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, f = E.center), "flex" in E && t(5, u = E.flex), "file_count" in E && t(6, c = E.file_count), "disable_click" in E && t(7, _ = E.disable_click), "root" in E && t(8, d = E.root), "hidden" in E && t(9, h = E.hidden), "format" in E && t(21, b = E.format), "uploading" in E && t(1, g = E.uploading), "hidden_upload" in E && t(2, w = E.hidden_upload), "show_progress" in E && t(10, p = E.show_progress), "max_file_size" in E && t(22, m = E.max_file_size), "upload" in E && t(23, v = E.upload), "stream_handler" in E && t(11, S = E.stream_handler), "$$scope" in E && t(25, i = E.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, k = null) : typeof s == "string" ? t(16, k = F(s)) : (t(0, s = s.map(F)), t(16, k = s.join(", "))));
  }, [
    s,
    g,
    w,
    a,
    f,
    u,
    c,
    _,
    d,
    h,
    p,
    S,
    G,
    U,
    y,
    z,
    k,
    R,
    _e,
    oe,
    r,
    b,
    m,
    v,
    O,
    i,
    n,
    fe,
    D,
    ue,
    Ce,
    Xe,
    Ye,
    A,
    Je
  ];
}
class q_ extends f_ {
  constructor(e) {
    super(), d_(
      this,
      e,
      z_,
      C_,
      g_,
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
  SvelteComponent: B_,
  append: ot,
  attr: L,
  detach: E_,
  init: M_,
  insert: A_,
  noop: Jl,
  safe_not_equal: L_,
  set_style: st,
  svg_element: xe
} = window.__gradio__svelte__internal;
function R_(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = xe("svg"), t = xe("rect"), n = xe("rect"), i = xe("rect"), o = xe("rect"), s = xe("line"), r = xe("line"), a = xe("line"), f = xe("line"), L(t, "x", "2"), L(t, "y", "2"), L(t, "width", "5"), L(t, "height", "5"), L(t, "rx", "1"), L(t, "ry", "1"), L(t, "stroke-width", "2"), L(t, "fill", "none"), L(n, "x", "17"), L(n, "y", "2"), L(n, "width", "5"), L(n, "height", "5"), L(n, "rx", "1"), L(n, "ry", "1"), L(n, "stroke-width", "2"), L(n, "fill", "none"), L(i, "x", "2"), L(i, "y", "17"), L(i, "width", "5"), L(i, "height", "5"), L(i, "rx", "1"), L(i, "ry", "1"), L(i, "stroke-width", "2"), L(i, "fill", "none"), L(o, "x", "17"), L(o, "y", "17"), L(o, "width", "5"), L(o, "height", "5"), L(o, "rx", "1"), L(o, "ry", "1"), L(o, "stroke-width", "2"), L(o, "fill", "none"), L(s, "x1", "7.5"), L(s, "y1", "4.5"), L(s, "x2", "16"), L(s, "y2", "4.5"), st(s, "stroke-width", "2px"), L(r, "x1", "7.5"), L(r, "y1", "19.5"), L(r, "x2", "16"), L(r, "y2", "19.5"), st(r, "stroke-width", "2px"), L(a, "x1", "4.5"), L(a, "y1", "8"), L(a, "x2", "4.5"), L(a, "y2", "16"), st(a, "stroke-width", "2px"), L(f, "x1", "19.5"), L(f, "y1", "8"), L(f, "x2", "19.5"), L(f, "y2", "16"), st(f, "stroke-width", "2px"), L(e, "width", "100%"), L(e, "height", "100%"), L(e, "viewBox", "0 0 24 24"), L(e, "version", "1.1"), L(e, "xmlns", "http://www.w3.org/2000/svg"), L(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), L(e, "xml:space", "preserve"), L(e, "stroke", "currentColor"), st(e, "fill-rule", "evenodd"), st(e, "clip-rule", "evenodd"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round");
    },
    m(u, c) {
      A_(u, e, c), ot(e, t), ot(e, n), ot(e, i), ot(e, o), ot(e, s), ot(e, r), ot(e, a), ot(e, f);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(u) {
      u && E_(e);
    }
  };
}
class D_ extends B_ {
  constructor(e) {
    super(), M_(this, e, null, R_, L_, {});
  }
}
const {
  SvelteComponent: T_,
  append: j_,
  attr: je,
  detach: H_,
  init: I_,
  insert: F_,
  noop: Ql,
  safe_not_equal: X_,
  set_style: Wn,
  svg_element: Ao
} = window.__gradio__svelte__internal;
function Y_(l) {
  let e, t;
  return {
    c() {
      e = Ao("svg"), t = Ao("path"), je(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), je(t, "fill", "none"), je(t, "stroke-width", "2"), je(e, "width", "100%"), je(e, "height", "100%"), je(e, "viewBox", "0 0 24 24"), je(e, "version", "1.1"), je(e, "xmlns", "http://www.w3.org/2000/svg"), je(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), je(e, "xml:space", "preserve"), je(e, "stroke", "currentColor"), Wn(e, "fill-rule", "evenodd"), Wn(e, "clip-rule", "evenodd"), Wn(e, "stroke-linecap", "round"), Wn(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      F_(n, e, i), j_(e, t);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(n) {
      n && H_(e);
    }
  };
}
class U_ extends T_ {
  constructor(e) {
    super(), I_(this, e, null, Y_, X_, {});
  }
}
const {
  SvelteComponent: V_,
  append: N_,
  attr: He,
  detach: O_,
  init: W_,
  insert: P_,
  noop: xl,
  safe_not_equal: Z_,
  set_style: Pn,
  svg_element: Lo
} = window.__gradio__svelte__internal;
function K_(l) {
  let e, t;
  return {
    c() {
      e = Lo("svg"), t = Lo("path"), He(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), He(t, "fill", "none"), He(t, "stroke-width", "2"), He(e, "width", "100%"), He(e, "height", "100%"), He(e, "viewBox", "0 0 24 24"), He(e, "version", "1.1"), He(e, "xmlns", "http://www.w3.org/2000/svg"), He(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), He(e, "xml:space", "preserve"), He(e, "stroke", "currentColor"), Pn(e, "fill-rule", "evenodd"), Pn(e, "clip-rule", "evenodd"), Pn(e, "stroke-linecap", "round"), Pn(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      P_(n, e, i), N_(e, t);
    },
    p: xl,
    i: xl,
    o: xl,
    d(n) {
      n && O_(e);
    }
  };
}
class G_ extends V_ {
  constructor(e) {
    super(), W_(this, e, null, K_, Z_, {});
  }
}
const {
  SvelteComponent: J_,
  append: Ro,
  attr: $l,
  bubble: Do,
  create_component: Q_,
  destroy_component: x_,
  detach: ta,
  element: To,
  init: $_,
  insert: na,
  listen: ei,
  mount_component: ed,
  run_all: td,
  safe_not_equal: nd,
  set_data: ld,
  set_input_value: jo,
  space: id,
  text: od,
  transition_in: sd,
  transition_out: ad
} = window.__gradio__svelte__internal, { createEventDispatcher: rd, afterUpdate: fd } = window.__gradio__svelte__internal;
function ud(l) {
  let e;
  return {
    c() {
      e = od(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      na(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && ld(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && ta(e);
    }
  };
}
function cd(l) {
  let e, t, n, i, o, s, r;
  return t = new ds({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [ud] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = To("label"), Q_(t.$$.fragment), n = id(), i = To("input"), $l(i, "type", "color"), i.disabled = /*disabled*/
      l[3], $l(i, "class", "svelte-16l8u73"), $l(e, "class", "block");
    },
    m(a, f) {
      na(a, e, f), ed(t, e, null), Ro(e, n), Ro(e, i), jo(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        ei(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        ei(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        ei(
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
      1 && jo(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (sd(t.$$.fragment, a), o = !0);
    },
    o(a) {
      ad(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && ta(e), x_(t), s = !1, td(r);
    }
  };
}
function _d(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = rd();
  function u() {
    f("change", n), i || f("input");
  }
  fd(() => {
    t(5, i = !1);
  });
  function c(h) {
    Do.call(this, l, h);
  }
  function _(h) {
    Do.call(this, l, h);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (h) => {
    "value" in h && t(0, n = h.value), "value_is_output" in h && t(5, i = h.value_is_output), "label" in h && t(1, o = h.label), "info" in h && t(2, s = h.info), "disabled" in h && t(3, r = h.disabled), "show_label" in h && t(4, a = h.show_label);
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
class dd extends J_ {
  constructor(e) {
    super(), $_(this, e, _d, cd, nd, {
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
  SvelteComponent: hd,
  append: la,
  attr: Z,
  bubble: md,
  check_outros: gd,
  create_slot: ia,
  detach: Dn,
  element: El,
  empty: bd,
  get_all_dirty_from_scope: oa,
  get_slot_changes: sa,
  group_outros: wd,
  init: pd,
  insert: Tn,
  listen: vd,
  safe_not_equal: kd,
  set_style: ge,
  space: aa,
  src_url_equal: dl,
  toggle_class: xt,
  transition_in: hl,
  transition_out: ml,
  update_slot_base: ra
} = window.__gradio__svelte__internal;
function yd(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && Ho(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = ia(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = El("button"), r && r.c(), t = aa(), f && f.c(), Z(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), Z(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], xt(e, "hidden", !/*visible*/
      l[2]), ge(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), ge(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), ge(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(u, c) {
      Tn(u, e, c), r && r.m(e, null), la(e, t), f && f.m(e, null), i = !0, o || (s = vd(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? r ? r.p(u, c) : (r = Ho(u), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || c & /*$$scope*/
      2048) && ra(
        f,
        a,
        u,
        /*$$scope*/
        u[11],
        i ? sa(
          a,
          /*$$scope*/
          u[11],
          c,
          null
        ) : oa(
          /*$$scope*/
          u[11]
        ),
        null
      ), (!i || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      u[4] + " " + /*variant*/
      u[3] + " " + /*elem_classes*/
      u[1].join(" ") + " svelte-8huxfn")) && Z(e, "class", n), (!i || c & /*elem_id*/
      1) && Z(
        e,
        "id",
        /*elem_id*/
        u[0]
      ), (!i || c & /*disabled*/
      256) && (e.disabled = /*disabled*/
      u[8]), (!i || c & /*size, variant, elem_classes, visible*/
      30) && xt(e, "hidden", !/*visible*/
      u[2]), c & /*scale*/
      512 && ge(
        e,
        "flex-grow",
        /*scale*/
        u[9]
      ), c & /*scale*/
      512 && ge(
        e,
        "width",
        /*scale*/
        u[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && ge(e, "min-width", typeof /*min_width*/
      u[10] == "number" ? `calc(min(${/*min_width*/
      u[10]}px, 100%))` : null);
    },
    i(u) {
      i || (hl(f, u), i = !0);
    },
    o(u) {
      ml(f, u), i = !1;
    },
    d(u) {
      u && Dn(e), r && r.d(), f && f.d(u), o = !1, s();
    }
  };
}
function Cd(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && Io(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = ia(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = El("a"), o && o.c(), t = aa(), r && r.c(), Z(
        e,
        "href",
        /*link*/
        l[6]
      ), Z(e, "rel", "noopener noreferrer"), Z(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), Z(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), Z(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), xt(e, "hidden", !/*visible*/
      l[2]), xt(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), ge(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), ge(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), ge(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), ge(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      Tn(a, e, f), o && o.m(e, null), la(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = Io(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && ra(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? sa(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : oa(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && Z(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && Z(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && Z(e, "class", n), (!i || f & /*elem_id*/
      1) && Z(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && xt(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && xt(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && ge(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && ge(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && ge(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && ge(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (hl(r, a), i = !0);
    },
    o(a) {
      ml(r, a), i = !1;
    },
    d(a) {
      a && Dn(e), o && o.d(), r && r.d(a);
    }
  };
}
function Ho(l) {
  let e, t, n;
  return {
    c() {
      e = El("img"), Z(e, "class", "button-icon svelte-8huxfn"), dl(e.src, t = /*icon*/
      l[7].url) || Z(e, "src", t), Z(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      Tn(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !dl(e.src, t = /*icon*/
      i[7].url) && Z(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && Z(e, "alt", n);
    },
    d(i) {
      i && Dn(e);
    }
  };
}
function Io(l) {
  let e, t, n;
  return {
    c() {
      e = El("img"), Z(e, "class", "button-icon svelte-8huxfn"), dl(e.src, t = /*icon*/
      l[7].url) || Z(e, "src", t), Z(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      Tn(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !dl(e.src, t = /*icon*/
      i[7].url) && Z(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && Z(e, "alt", n);
    },
    d(i) {
      i && Dn(e);
    }
  };
}
function Sd(l) {
  let e, t, n, i;
  const o = [Cd, yd], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = bd();
    },
    m(a, f) {
      s[e].m(a, f), Tn(a, n, f), i = !0;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (wd(), ml(s[u], 1, 1, () => {
        s[u] = null;
      }), gd(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), hl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (hl(t), i = !0);
    },
    o(a) {
      ml(t), i = !1;
    },
    d(a) {
      a && Dn(n), s[e].d(a);
    }
  };
}
function zd(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: u = null } = e, { link: c = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e;
  function g(w) {
    md.call(this, l, w);
  }
  return l.$$set = (w) => {
    "elem_id" in w && t(0, o = w.elem_id), "elem_classes" in w && t(1, s = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, a = w.variant), "size" in w && t(4, f = w.size), "value" in w && t(5, u = w.value), "link" in w && t(6, c = w.link), "icon" in w && t(7, _ = w.icon), "disabled" in w && t(8, d = w.disabled), "scale" in w && t(9, h = w.scale), "min_width" in w && t(10, b = w.min_width), "$$scope" in w && t(11, i = w.$$scope);
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
    h,
    b,
    i,
    n,
    g
  ];
}
class pi extends hd {
  constructor(e) {
    super(), pd(this, e, zd, Sd, kd, {
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
  SvelteComponent: qd,
  add_render_callback: fa,
  append: Zn,
  attr: ke,
  binding_callbacks: Fo,
  check_outros: Bd,
  create_bidirectional_transition: Xo,
  destroy_each: Ed,
  detach: Cn,
  element: gl,
  empty: Md,
  ensure_array_like: Yo,
  group_outros: Ad,
  init: Ld,
  insert: Sn,
  listen: vi,
  prevent_default: Rd,
  run_all: Dd,
  safe_not_equal: Td,
  set_data: jd,
  set_style: Vt,
  space: ki,
  text: Hd,
  toggle_class: Oe,
  transition_in: ti,
  transition_out: Uo
} = window.__gradio__svelte__internal, { createEventDispatcher: Id } = window.__gradio__svelte__internal;
function Vo(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function No(l) {
  let e, t, n, i, o, s = Yo(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Oo(Vo(l, s, a));
  return {
    c() {
      e = gl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      ke(e, "class", "options svelte-yuohum"), ke(e, "role", "listbox"), Vt(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Vt(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Vt(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      Sn(a, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      l[22](e), n = !0, i || (o = vi(e, "mousedown", Rd(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Yo(
          /*filtered_indices*/
          a[1]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const c = Vo(a, s, u);
          r[u] ? r[u].p(c, f) : (r[u] = Oo(c), r[u].c(), r[u].m(e, null));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = s.length;
      }
      f & /*bottom*/
      512 && Vt(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Vt(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Vt(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && fa(() => {
        n && (t || (t = Xo(e, to, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Xo(e, to, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Cn(e), Ed(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function Oo(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, f;
  return {
    c() {
      e = gl("li"), t = gl("span"), t.textContent = "✓", n = ki(), o = Hd(i), s = ki(), ke(t, "class", "inner-item svelte-yuohum"), Oe(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), ke(e, "class", "item svelte-yuohum"), ke(e, "data-index", r = /*index*/
      l[26]), ke(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), ke(e, "data-testid", "dropdown-option"), ke(e, "role", "option"), ke(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Oe(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), Oe(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), Oe(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), Oe(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(u, c) {
      Sn(u, e, c), Zn(e, t), Zn(e, n), Zn(e, o), Zn(e, s);
    },
    p(u, c) {
      c & /*selected_indices, filtered_indices*/
      18 && Oe(t, "hide", !/*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )), c & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0] + "") && jd(o, i), c & /*filtered_indices*/
      2 && r !== (r = /*index*/
      u[26]) && ke(e, "data-index", r), c & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0]) && ke(e, "aria-label", a), c & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )) && ke(e, "aria-selected", f), c & /*selected_indices, filtered_indices*/
      18 && Oe(
        e,
        "selected",
        /*selected_indices*/
        u[4].includes(
          /*index*/
          u[26]
        )
      ), c & /*filtered_indices, active_index*/
      34 && Oe(
        e,
        "active",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && Oe(
        e,
        "bg-gray-100",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && Oe(
        e,
        "dark:bg-gray-600",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      );
    },
    d(u) {
      u && Cn(e);
    }
  };
}
function Fd(l) {
  let e, t, n, i, o;
  fa(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && No(l)
  );
  return {
    c() {
      e = gl("div"), t = ki(), s && s.c(), n = Md(), ke(e, "class", "reference");
    },
    m(r, a) {
      Sn(r, e, a), l[20](e), Sn(r, t, a), s && s.m(r, a), Sn(r, n, a), i || (o = [
        vi(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        vi(
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
      12 && ti(s, 1)) : (s = No(r), s.c(), ti(s, 1), s.m(n.parentNode, n)) : s && (Ad(), Uo(s, 1, 1, () => {
        s = null;
      }), Bd());
    },
    i(r) {
      ti(s);
    },
    o(r) {
      Uo(s);
    },
    d(r) {
      r && (Cn(e), Cn(t), Cn(n)), l[20](null), s && s.d(r), i = !1, Dd(o);
    }
  };
}
function Xd(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: u = null } = e, c, _, d, h, b, g, w, p, m;
  function v() {
    const { top: R, bottom: G } = b.getBoundingClientRect();
    t(16, c = R), t(17, _ = m - G);
  }
  let S = null;
  function y() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        v(), S = null;
      },
      10
    ));
  }
  const z = Id();
  function k() {
    t(11, m = window.innerHeight);
  }
  function q(R) {
    Fo[R ? "unshift" : "push"](() => {
      b = R, t(6, b);
    });
  }
  const I = (R) => z("change", R);
  function F(R) {
    Fo[R ? "unshift" : "push"](() => {
      g = R, t(7, g);
    });
  }
  return l.$$set = (R) => {
    "choices" in R && t(0, o = R.choices), "filtered_indices" in R && t(1, s = R.filtered_indices), "show_options" in R && t(2, r = R.show_options), "disabled" in R && t(3, a = R.disabled), "selected_indices" in R && t(4, f = R.selected_indices), "active_index" in R && t(5, u = R.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && b) {
        if (g && f.length > 0) {
          let G = g.querySelectorAll("li");
          for (const U of Array.from(G))
            if (U.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, U.offsetTop);
              break;
            }
        }
        v();
        const R = t(15, i = b.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (R == null ? void 0 : R.height) || 0), t(8, h = (R == null ? void 0 : R.width) || 0);
      }
      _ > c ? (t(10, p = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, p = c - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    b,
    g,
    h,
    w,
    p,
    m,
    y,
    z,
    n,
    i,
    c,
    _,
    d,
    k,
    q,
    I,
    F
  ];
}
class Yd extends qd {
  constructor(e) {
    super(), Ld(this, e, Xd, Fd, Td, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Ud(l, e) {
  return (l % e + e) % e;
}
function Wo(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Vd(l, e, t) {
  l("change", e), t || l("input");
}
function Nd(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Ud(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Od,
  append: kt,
  attr: ve,
  binding_callbacks: Wd,
  check_outros: Pd,
  create_component: yi,
  destroy_component: Ci,
  detach: Ai,
  element: Pt,
  group_outros: Zd,
  init: Kd,
  insert: Li,
  listen: fn,
  mount_component: Si,
  run_all: Gd,
  safe_not_equal: Jd,
  set_data: Qd,
  set_input_value: Po,
  space: ni,
  text: xd,
  toggle_class: Nt,
  transition_in: Zt,
  transition_out: gn
} = window.__gradio__svelte__internal, { onMount: $d } = window.__gradio__svelte__internal, { createEventDispatcher: e1, afterUpdate: t1 } = window.__gradio__svelte__internal;
function n1(l) {
  let e;
  return {
    c() {
      e = xd(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      Li(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Qd(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ai(e);
    }
  };
}
function Zo(l) {
  let e, t, n;
  return t = new Hf({}), {
    c() {
      e = Pt("div"), yi(t.$$.fragment), ve(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      Li(i, e, o), Si(t, e, null), n = !0;
    },
    i(i) {
      n || (Zt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      gn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ai(e), Ci(t);
    }
  };
}
function l1(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, h;
  t = new ds({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [n1] },
      $$scope: { ctx: l }
    }
  });
  let b = !/*disabled*/
  l[3] && Zo();
  return c = new Yd({
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
      e = Pt("div"), yi(t.$$.fragment), n = ni(), i = Pt("div"), o = Pt("div"), s = Pt("div"), r = Pt("input"), f = ni(), b && b.c(), u = ni(), yi(c.$$.fragment), ve(r, "role", "listbox"), ve(r, "aria-controls", "dropdown-options"), ve(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), ve(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), ve(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], ve(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], Nt(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), ve(s, "class", "secondary-wrap svelte-1m1zvyj"), ve(o, "class", "wrap-inner svelte-1m1zvyj"), Nt(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), ve(i, "class", "wrap svelte-1m1zvyj"), ve(e, "class", "svelte-1m1zvyj"), Nt(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(g, w) {
      Li(g, e, w), Si(t, e, null), kt(e, n), kt(e, i), kt(i, o), kt(o, s), kt(s, r), Po(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), kt(s, f), b && b.m(s, null), kt(i, u), Si(c, i, null), _ = !0, d || (h = [
        fn(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        fn(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        fn(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        fn(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        fn(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(g, w) {
      const p = {};
      w[0] & /*show_label*/
      16 && (p.show_label = /*show_label*/
      g[4]), w[0] & /*info*/
      2 && (p.info = /*info*/
      g[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      4 && (p.$$scope = { dirty: w, ctx: g }), t.$set(p), (!_ || w[0] & /*show_options*/
      4096) && ve(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || w[0] & /*label*/
      1) && ve(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || w[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && Po(
        r,
        /*input_text*/
        g[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Nt(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? b && (Zd(), gn(b, 1, 1, () => {
        b = null;
      }), Pd()) : b ? w[0] & /*disabled*/
      8 && Zt(b, 1) : (b = Zo(), b.c(), Zt(b, 1), b.m(s, null)), (!_ || w[0] & /*show_options*/
      4096) && Nt(
        o,
        "show_options",
        /*show_options*/
        g[12]
      );
      const m = {};
      w[0] & /*show_options*/
      4096 && (m.show_options = /*show_options*/
      g[12]), w[0] & /*choices*/
      4 && (m.choices = /*choices*/
      g[2]), w[0] & /*filtered_indices*/
      1024 && (m.filtered_indices = /*filtered_indices*/
      g[10]), w[0] & /*disabled*/
      8 && (m.disabled = /*disabled*/
      g[3]), w[0] & /*selected_index*/
      2048 && (m.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), w[0] & /*active_index*/
      16384 && (m.active_index = /*active_index*/
      g[14]), c.$set(m), (!_ || w[0] & /*container*/
      32) && Nt(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (Zt(t.$$.fragment, g), Zt(b), Zt(c.$$.fragment, g), _ = !0);
    },
    o(g) {
      gn(t.$$.fragment, g), gn(b), gn(c.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && Ai(e), Ci(t), l[29](null), b && b.d(), Ci(c), d = !1, Gd(h);
    }
  };
}
function i1(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: u = !1 } = e, { show_label: c } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, b, g = !1, w, p, m = "", v = "", S = !1, y = [], z = null, k = null, q;
  const I = e1();
  o ? (q = a.map((D) => D[1]).indexOf(o), k = q, k === -1 ? (s = o, k = null) : ([m, s] = a[k], v = m), R()) : a.length > 0 && (q = 0, k = 0, [m, o] = a[k], s = o, v = m);
  function F() {
    t(13, w = a.map((D) => D[0])), t(24, p = a.map((D) => D[1]));
  }
  function R() {
    F(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, m = ""), t(11, k = null)) : p.includes(o) ? (t(9, m = w[p.indexOf(o)]), t(11, k = p.indexOf(o))) : d ? (t(9, m = o), t(11, k = null)) : (t(9, m = ""), t(11, k = null)), t(27, q = k);
  }
  function G(D) {
    if (t(11, k = parseInt(D.detail.target.dataset.index)), isNaN(k)) {
      t(11, k = null);
      return;
    }
    t(12, g = !1), t(14, z = null), b.blur();
  }
  function U(D) {
    t(10, y = a.map((ue, Ce) => Ce)), t(12, g = !0), I("focus");
  }
  function X() {
    d ? t(20, o = m) : t(9, m = w[p.indexOf(o)]), t(12, g = !1), t(14, z = null), I("blur");
  }
  function O(D) {
    t(12, [g, z] = Nd(D, z, y), g, (t(14, z), t(2, a), t(23, f), t(6, d), t(9, m), t(10, y), t(8, b), t(25, v), t(11, k), t(27, q), t(26, S), t(24, p))), D.key === "Enter" && (z !== null ? (t(11, k = z), t(12, g = !1), b.blur(), t(14, z = null)) : w.includes(m) ? (t(11, k = w.indexOf(m)), t(12, g = !1), t(14, z = null), b.blur()) : d && (t(20, o = m), t(11, k = null), t(12, g = !1), t(14, z = null), b.blur()), I("enter", o));
  }
  t1(() => {
    t(21, r = !1), t(26, S = !0);
  }), $d(() => {
    b.focus();
  });
  function _e() {
    m = this.value, t(9, m), t(11, k), t(27, q), t(26, S), t(2, a), t(24, p);
  }
  function oe(D) {
    Wd[D ? "unshift" : "push"](() => {
      b = D, t(8, b);
    });
  }
  const fe = (D) => I("key_up", { key: D.key, input_value: m });
  return l.$$set = (D) => {
    "label" in D && t(0, n = D.label), "info" in D && t(1, i = D.info), "value" in D && t(20, o = D.value), "value_is_output" in D && t(21, r = D.value_is_output), "choices" in D && t(2, a = D.choices), "disabled" in D && t(3, u = D.disabled), "show_label" in D && t(4, c = D.show_label), "container" in D && t(5, _ = D.container), "allow_custom_value" in D && t(6, d = D.allow_custom_value), "filterable" in D && t(7, h = D.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && k !== q && k !== null && S && (t(9, [m, o] = a[k], m, (t(20, o), t(11, k), t(27, q), t(26, S), t(2, a), t(24, p))), t(27, q = k), I("select", {
      index: k,
      value: p[k],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (R(), Vd(I, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && F(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || R(), t(23, f = a), t(10, y = Wo(a, m)), !d && y.length > 0 && t(14, z = y[0]), b == document.activeElement && t(12, g = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && m !== v && (t(10, y = Wo(a, m)), t(25, v = m), !d && y.length > 0 && t(14, z = y[0]));
  }, [
    n,
    i,
    a,
    u,
    c,
    _,
    d,
    h,
    b,
    m,
    y,
    k,
    g,
    w,
    z,
    I,
    G,
    U,
    X,
    O,
    o,
    r,
    s,
    f,
    p,
    v,
    S,
    q,
    _e,
    oe,
    fe
  ];
}
class o1 extends Od {
  constructor(e) {
    super(), Kd(
      this,
      e,
      i1,
      l1,
      Jd,
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
  SvelteComponent: s1,
  append: We,
  attr: Kn,
  check_outros: a1,
  create_component: bn,
  destroy_component: wn,
  detach: jn,
  element: ft,
  group_outros: r1,
  init: f1,
  insert: Hn,
  mount_component: pn,
  safe_not_equal: u1,
  set_style: vn,
  space: Gn,
  text: Ri,
  transition_in: ut,
  transition_out: yt
} = window.__gradio__svelte__internal, { createEventDispatcher: c1 } = window.__gradio__svelte__internal, { onMount: _1, onDestroy: d1 } = window.__gradio__svelte__internal;
function h1(l) {
  let e;
  return {
    c() {
      e = Ri("Cancel");
    },
    m(t, n) {
      Hn(t, e, n);
    },
    d(t) {
      t && jn(e);
    }
  };
}
function Ko(l) {
  let e, t, n;
  return t = new pi({
    props: {
      variant: "stop",
      $$slots: { default: [m1] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[12]
  ), {
    c() {
      e = ft("div"), bn(t.$$.fragment), vn(e, "margin-right", "8px");
    },
    m(i, o) {
      Hn(i, e, o), pn(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      65536 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (ut(t.$$.fragment, i), n = !0);
    },
    o(i) {
      yt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && jn(e), wn(t);
    }
  };
}
function m1(l) {
  let e;
  return {
    c() {
      e = Ri("Remove");
    },
    m(t, n) {
      Hn(t, e, n);
    },
    d(t) {
      t && jn(e);
    }
  };
}
function g1(l) {
  let e;
  return {
    c() {
      e = Ri("OK");
    },
    m(t, n) {
      Hn(t, e, n);
    },
    d(t) {
      t && jn(e);
    }
  };
}
function b1(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, h, b, g;
  o = new o1({
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
  ), a = new dd({
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
  ), c = new pi({
    props: {
      $$slots: { default: [h1] },
      $$scope: { ctx: l }
    }
  }), c.$on(
    "click",
    /*click_handler*/
    l[11]
  );
  let w = (
    /*showRemove*/
    l[3] && Ko(l)
  );
  return b = new pi({
    props: {
      variant: "primary",
      $$slots: { default: [g1] },
      $$scope: { ctx: l }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    l[13]
  ), {
    c() {
      e = ft("div"), t = ft("div"), n = ft("span"), i = ft("div"), bn(o.$$.fragment), s = Gn(), r = ft("div"), bn(a.$$.fragment), f = Gn(), u = ft("div"), bn(c.$$.fragment), _ = Gn(), w && w.c(), d = Gn(), h = ft("div"), bn(b.$$.fragment), vn(i, "margin-right", "10px"), vn(r, "margin-right", "40px"), vn(r, "margin-bottom", "8px"), vn(u, "margin-right", "8px"), Kn(n, "class", "model-content svelte-hkn2q1"), Kn(t, "class", "modal-container svelte-hkn2q1"), Kn(e, "class", "modal svelte-hkn2q1"), Kn(e, "id", "model-box-edit");
    },
    m(p, m) {
      Hn(p, e, m), We(e, t), We(t, n), We(n, i), pn(o, i, null), We(n, s), We(n, r), pn(a, r, null), We(n, f), We(n, u), pn(c, u, null), We(n, _), w && w.m(n, null), We(n, d), We(n, h), pn(b, h, null), g = !0;
    },
    p(p, [m]) {
      const v = {};
      m & /*currentLabel*/
      1 && (v.value = /*currentLabel*/
      p[0]), m & /*choices*/
      4 && (v.choices = /*choices*/
      p[2]), o.$set(v);
      const S = {};
      m & /*currentColor*/
      2 && (S.value = /*currentColor*/
      p[1]), a.$set(S);
      const y = {};
      m & /*$$scope*/
      65536 && (y.$$scope = { dirty: m, ctx: p }), c.$set(y), /*showRemove*/
      p[3] ? w ? (w.p(p, m), m & /*showRemove*/
      8 && ut(w, 1)) : (w = Ko(p), w.c(), ut(w, 1), w.m(n, d)) : w && (r1(), yt(w, 1, 1, () => {
        w = null;
      }), a1());
      const z = {};
      m & /*$$scope*/
      65536 && (z.$$scope = { dirty: m, ctx: p }), b.$set(z);
    },
    i(p) {
      g || (ut(o.$$.fragment, p), ut(a.$$.fragment, p), ut(c.$$.fragment, p), ut(w), ut(b.$$.fragment, p), g = !0);
    },
    o(p) {
      yt(o.$$.fragment, p), yt(a.$$.fragment, p), yt(c.$$.fragment, p), yt(w), yt(b.$$.fragment, p), g = !1;
    },
    d(p) {
      p && jn(e), wn(o), wn(a), wn(c), w && w.d(), wn(b);
    }
  };
}
function w1(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e;
  const u = c1();
  function c(m) {
    u("change", {
      label: i,
      color: a,
      ret: m
      // -1: remove, 0: cancel, 1: change
    });
  }
  function _(m) {
    const { detail: v } = m;
    let S = v;
    Number.isInteger(S) ? (Array.isArray(s) && S < s.length && t(1, a = s[S]), Array.isArray(o) && S < o.length && t(0, i = o[S][0])) : t(0, i = S);
  }
  function d(m) {
    const { detail: v } = m;
    t(1, a = v);
  }
  function h(m) {
    _(m), c(1);
  }
  function b(m) {
    switch (m.key) {
      case "Enter":
        c(1);
        break;
    }
  }
  _1(() => {
    document.addEventListener("keydown", b), t(0, i = n), t(1, a = r);
  }), d1(() => {
    document.removeEventListener("keydown", b);
  });
  const g = () => c(0), w = () => c(-1), p = () => c(1);
  return l.$$set = (m) => {
    "label" in m && t(8, n = m.label), "currentLabel" in m && t(0, i = m.currentLabel), "choices" in m && t(2, o = m.choices), "choicesColors" in m && t(9, s = m.choicesColors), "color" in m && t(10, r = m.color), "currentColor" in m && t(1, a = m.currentColor), "showRemove" in m && t(3, f = m.showRemove);
  }, [
    i,
    a,
    o,
    f,
    c,
    _,
    d,
    h,
    n,
    s,
    r,
    g,
    w,
    p
  ];
}
class ua extends s1 {
  constructor(e) {
    super(), f1(this, e, w1, b1, u1, {
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
const ne = (l, e, t) => Math.min(Math.max(l, e), t);
function li(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class ii {
  constructor(e, t, n, i, o, s, r, a, f, u, c, _ = "rgb(255, 255, 255)", d = 0.5, h = 25, b = 8, g = 2, w = 4, p = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging) {
        let v = m.clientX - this.offsetMouseX - this.xmin, S = m.clientY - this.offsetMouseY - this.ymin;
        const y = this.canvasXmax - this.canvasXmin, z = this.canvasYmax - this.canvasYmin;
        v = ne(v, -this.xmin, y - this.xmax), S = ne(S, -this.ymin, z - this.ymax), this.xmin += v, this.ymin += S, this.xmax += v, this.ymax += S, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleCreating = (m) => {
      if (this.isCreating) {
        let [v, S] = this.toBoxCoordinates(m.clientX, m.clientY);
        v -= this.offsetMouseX, S -= this.offsetMouseY, v > this.xmax ? (this.creatingAnchorX == "xmax" && (this.xmin = this.xmax), this.xmax = v, this.creatingAnchorX = "xmin") : v > this.xmin && v < this.xmax && this.creatingAnchorX == "xmin" ? this.xmax = v : v > this.xmin && v < this.xmax && this.creatingAnchorX == "xmax" ? this.xmin = v : v < this.xmin && (this.creatingAnchorX == "xmin" && (this.xmax = this.xmin), this.xmin = v, this.creatingAnchorX = "xmax"), S > this.ymax ? (this.creatingAnchorY == "ymax" && (this.ymin = this.ymax), this.ymax = S, this.creatingAnchorY = "ymin") : S > this.ymin && S < this.ymax && this.creatingAnchorY == "ymin" ? this.ymax = S : S > this.ymin && S < this.ymax && this.creatingAnchorY == "ymax" ? this.ymin = S : S < this.ymin && (this.creatingAnchorY == "ymin" && (this.ymax = this.ymin), this.ymin = S, this.creatingAnchorY = "ymax"), this.updateHandles(), this.renderCallBack();
      }
    }, this.stopCreating = (m) => {
      if (this.isCreating = !1, document.removeEventListener("mousemove", this.handleCreating), document.removeEventListener("mouseup", this.stopCreating), this.getArea() > 0) {
        const v = this.canvasXmax - this.canvasXmin, S = this.canvasYmax - this.canvasYmin;
        this.xmin = ne(this.xmin, 0, v - this.minSize), this.ymin = ne(this.ymin, 0, S - this.minSize), this.xmax = ne(this.xmax, this.minSize, v), this.ymax = ne(this.ymax, this.minSize, S), this.minSize > 0 && (this.getWidth() < this.minSize && (this.creatingAnchorX == "xmin" ? this.xmax = this.xmin + this.minSize : this.xmin = this.xmax - this.minSize), this.getHeight() < this.minSize && (this.creatingAnchorY == "ymin" ? this.ymax = this.ymin + this.minSize : this.ymin = this.ymax - this.minSize), this.xmax > v ? (this.xmin -= this.xmax - v, this.xmax = v) : this.xmin < 0 && (this.xmax -= this.xmin, this.xmin = 0), this.ymax > S ? (this.ymin -= this.ymax - S, this.ymax = S) : this.ymin < 0 && (this.ymax -= this.ymin, this.ymin = 0)), this.updateHandles(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (m) => {
      if (this.isResizing) {
        const v = m.clientX, S = m.clientY, y = v - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, z = S - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, k = this.canvasXmax - this.canvasXmin, q = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += y, this.ymin += z, this.xmin = ne(this.xmin, 0, this.xmax - this.minSize), this.ymin = ne(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += y, this.ymin += z, this.xmax = ne(this.xmax, this.xmin + this.minSize, k), this.ymin = ne(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += y, this.ymax += z, this.xmax = ne(this.xmax, this.xmin + this.minSize, k), this.ymax = ne(this.ymax, this.ymin + this.minSize, q);
            break;
          case 3:
            this.xmin += y, this.ymax += z, this.xmin = ne(this.xmin, 0, this.xmax - this.minSize), this.ymax = ne(this.ymax, this.ymin + this.minSize, q);
            break;
          case 4:
            this.ymin += z, this.ymin = ne(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += y, this.xmax = ne(this.xmax, this.xmin + this.minSize, k);
            break;
          case 6:
            this.ymax += z, this.ymax = ne(this.ymax, this.ymin + this.minSize, q);
            break;
          case 7:
            this.xmin += y, this.xmin = ne(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = o, this.canvasYmax = s, this.scaleFactor = p, this.label = r, this.isDragging = !1, this.isCreating = !1, this.xmin = a, this.ymin = f, this.xmax = u, this.ymax = c, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = g, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = _, this.alpha = d, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
        ymax: this.ymin + e
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e
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
    if (e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = li(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = li(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = li(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this.xmin, this.offsetMouseY = e.clientY - this.ymin, document.addEventListener("mousemove", this.handleDrag), document.addEventListener("mouseup", this.stopDrag);
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
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("mousemove", this.handleCreating), document.addEventListener("mouseup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("mousemove", this.handleResize), document.addEventListener("mouseup", this.stopResize);
  }
}
const Ot = [
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
  SvelteComponent: p1,
  append: kn,
  attr: Pe,
  binding_callbacks: v1,
  bubble: Go,
  check_outros: il,
  create_component: Bn,
  destroy_component: En,
  detach: zt,
  element: en,
  empty: k1,
  group_outros: ol,
  init: y1,
  insert: qt,
  listen: ct,
  mount_component: Mn,
  noop: C1,
  run_all: ca,
  safe_not_equal: S1,
  space: zn,
  toggle_class: Jn,
  transition_in: ie,
  transition_out: ye
} = window.__gradio__svelte__internal, { onMount: z1, onDestroy: q1, createEventDispatcher: B1 } = window.__gradio__svelte__internal;
function Jo(l) {
  let e, t, n, i, o, s, r, a, f, u;
  n = new D_({}), s = new U_({});
  let c = (
    /*showRemoveButton*/
    l[1] && Qo(l)
  );
  return {
    c() {
      e = en("span"), t = en("button"), Bn(n.$$.fragment), i = zn(), o = en("button"), Bn(s.$$.fragment), r = zn(), c && c.c(), Pe(t, "class", "icon svelte-10jprmi"), Pe(t, "aria-label", "Create box"), Jn(
        t,
        "selected",
        /*mode*/
        l[8] === /*Mode*/
        l[5].creation
      ), Pe(o, "class", "icon svelte-10jprmi"), Pe(o, "aria-label", "Edit boxes"), Jn(
        o,
        "selected",
        /*mode*/
        l[8] === /*Mode*/
        l[5].drag
      ), Pe(e, "class", "canvas-control svelte-10jprmi");
    },
    m(_, d) {
      qt(_, e, d), kn(e, t), Mn(n, t, null), kn(e, i), kn(e, o), Mn(s, o, null), kn(e, r), c && c.m(e, null), a = !0, f || (u = [
        ct(
          t,
          "click",
          /*click_handler*/
          l[29]
        ),
        ct(
          o,
          "click",
          /*click_handler_1*/
          l[30]
        )
      ], f = !0);
    },
    p(_, d) {
      (!a || d[0] & /*mode, Mode*/
      288) && Jn(
        t,
        "selected",
        /*mode*/
        _[8] === /*Mode*/
        _[5].creation
      ), (!a || d[0] & /*mode, Mode*/
      288) && Jn(
        o,
        "selected",
        /*mode*/
        _[8] === /*Mode*/
        _[5].drag
      ), /*showRemoveButton*/
      _[1] ? c ? (c.p(_, d), d[0] & /*showRemoveButton*/
      2 && ie(c, 1)) : (c = Qo(_), c.c(), ie(c, 1), c.m(e, null)) : c && (ol(), ye(c, 1, 1, () => {
        c = null;
      }), il());
    },
    i(_) {
      a || (ie(n.$$.fragment, _), ie(s.$$.fragment, _), ie(c), a = !0);
    },
    o(_) {
      ye(n.$$.fragment, _), ye(s.$$.fragment, _), ye(c), a = !1;
    },
    d(_) {
      _ && zt(e), En(n), En(s), c && c.d(), f = !1, ca(u);
    }
  };
}
function Qo(l) {
  let e, t, n, i, o;
  return t = new G_({}), {
    c() {
      e = en("button"), Bn(t.$$.fragment), Pe(e, "class", "icon svelte-10jprmi"), Pe(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      qt(s, e, r), Mn(t, e, null), n = !0, i || (o = ct(
        e,
        "click",
        /*click_handler_2*/
        l[31]
      ), i = !0);
    },
    p: C1,
    i(s) {
      n || (ie(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && zt(e), En(t), i = !1, o();
    }
  };
}
function xo(l) {
  let e, t;
  return e = new ua({
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
        l[7] >= 0 && /*selectedBox*/
        l[7] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[7]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[7] >= 0 && /*selectedBox*/
        l[7] < /*value*/
        l[0].boxes.length ? An(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[7]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[16]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[32]
  ), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, i) {
      Mn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      129 && (o.label = /*selectedBox*/
      n[7] >= 0 && /*selectedBox*/
      n[7] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[7]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      129 && (o.color = /*selectedBox*/
      n[7] >= 0 && /*selectedBox*/
      n[7] < /*value*/
      n[0].boxes.length ? An(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      En(e, n);
    }
  };
}
function $o(l) {
  let e, t;
  return e = new ua({
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
        l[7] >= 0 && /*selectedBox*/
        l[7] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[7]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[7] >= 0 && /*selectedBox*/
        l[7] < /*value*/
        l[0].boxes.length ? An(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[7]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[17]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[33]
  ), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, i) {
      Mn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      129 && (o.label = /*selectedBox*/
      n[7] >= 0 && /*selectedBox*/
      n[7] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[7]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      129 && (o.color = /*selectedBox*/
      n[7] >= 0 && /*selectedBox*/
      n[7] < /*value*/
      n[0].boxes.length ? An(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      En(e, n);
    }
  };
}
function E1(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*interactive*/
    l[2] && Jo(l)
  ), c = (
    /*editModalVisible*/
    l[9] && xo(l)
  ), _ = (
    /*newModalVisible*/
    l[10] && $o(l)
  );
  return {
    c() {
      e = en("div"), t = en("canvas"), n = zn(), u && u.c(), i = zn(), c && c.c(), o = zn(), _ && _.c(), s = k1(), Pe(t, "class", "canvas-annotator svelte-10jprmi"), Pe(e, "class", "canvas-container svelte-10jprmi"), Pe(e, "tabindex", "-1");
    },
    m(d, h) {
      qt(d, e, h), kn(e, t), l[28](t), qt(d, n, h), u && u.m(d, h), qt(d, i, h), c && c.m(d, h), qt(d, o, h), _ && _.m(d, h), qt(d, s, h), r = !0, a || (f = [
        ct(
          t,
          "mousedown",
          /*handleMouseDown*/
          l[11]
        ),
        ct(
          t,
          "mouseup",
          /*handleMouseUp*/
          l[12]
        ),
        ct(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[15]
        ),
        ct(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[19]
        ),
        ct(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[20]
        )
      ], a = !0);
    },
    p(d, h) {
      /*interactive*/
      d[2] ? u ? (u.p(d, h), h[0] & /*interactive*/
      4 && ie(u, 1)) : (u = Jo(d), u.c(), ie(u, 1), u.m(i.parentNode, i)) : u && (ol(), ye(u, 1, 1, () => {
        u = null;
      }), il()), /*editModalVisible*/
      d[9] ? c ? (c.p(d, h), h[0] & /*editModalVisible*/
      512 && ie(c, 1)) : (c = xo(d), c.c(), ie(c, 1), c.m(o.parentNode, o)) : c && (ol(), ye(c, 1, 1, () => {
        c = null;
      }), il()), /*newModalVisible*/
      d[10] ? _ ? (_.p(d, h), h[0] & /*newModalVisible*/
      1024 && ie(_, 1)) : (_ = $o(d), _.c(), ie(_, 1), _.m(s.parentNode, s)) : _ && (ol(), ye(_, 1, 1, () => {
        _ = null;
      }), il());
    },
    i(d) {
      r || (ie(u), ie(c), ie(_), r = !0);
    },
    o(d) {
      ye(u), ye(c), ye(_), r = !1;
    },
    d(d) {
      d && (zt(e), zt(n), zt(i), zt(o), zt(s)), l[28](null), u && u.d(d), c && c.d(d), _ && _.d(d), a = !1, ca(f);
    }
  };
}
function oi(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function An(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function M1(l, e, t) {
  var n;
  (function(M) {
    M[M.creation = 0] = "creation", M[M.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 25 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: u } = e, { value: c } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: h = !1 } = e, { showRemoveButton: b = null } = e;
  b === null && (b = h);
  let g, w, p = null, m = -1, v = n.drag;
  c !== null && c.boxes.length == 0 && (v = n.creation);
  let S = 0, y = 0, z = 0, k = 0, q = 1, I = 0, F = 0, R = !1, G = !1;
  const U = B1();
  function X() {
    if (w) {
      w.clearRect(0, 0, g.width, g.height), p !== null && w.drawImage(p, S, y, I, F);
      for (const M of c.boxes.slice().reverse())
        M.render(w);
    }
  }
  function O(M) {
    t(7, m = M), c.boxes.forEach((H) => {
      H.setSelected(!1);
    }), M >= 0 && M < c.boxes.length && c.boxes[M].setSelected(!0), X();
  }
  function _e(M) {
    o && (v === n.creation ? ue(M) : v === n.drag && oe(M));
  }
  function oe(M) {
    const H = g.getBoundingClientRect(), $ = M.clientX - H.left, qe = M.clientY - H.top;
    for (const [Be, de] of c.boxes.entries()) {
      const Di = de.indexOfPointInsideHandle($, qe);
      if (Di >= 0) {
        O(Be), de.startResize(Di, M);
        return;
      }
    }
    for (const [Be, de] of c.boxes.entries())
      if (de.isPointInsideBox($, qe)) {
        O(Be), de.startDrag(M);
        return;
      }
    O(-1);
  }
  function fe(M) {
    U("change");
  }
  function D(M) {
    if (o)
      switch (M.key) {
        case "Delete":
          W();
          break;
      }
  }
  function ue(M) {
    const H = g.getBoundingClientRect(), $ = (M.clientX - H.left - S) / q, qe = (M.clientY - H.top - y) / q;
    let Be;
    d.length > 0 ? Be = oi(d[0]) : Be = Ot[c.boxes.length % Ot.length];
    let de = new ii(X, Ye, S, y, z, k, "", $, qe, $, qe, Be, s, r, a, f, u);
    de.startCreating(M, H.left, H.top), t(0, c.boxes = [de, ...c.boxes], c), O(0), X(), U("change");
  }
  function Ce() {
    t(8, v = n.creation), t(6, g.style.cursor = "crosshair", g);
  }
  function Xe() {
    t(8, v = n.drag), t(6, g.style.cursor = "default", g);
  }
  function Ye() {
    m >= 0 && m < c.boxes.length && (c.boxes[m].getArea() < 1 ? W() : h || t(10, G = !0));
  }
  function A() {
    m >= 0 && m < c.boxes.length && !h && t(9, R = !0);
  }
  function Je(M) {
    o && A();
  }
  function E(M) {
    t(9, R = !1);
    const { detail: H } = M;
    let $ = H.label, qe = H.color, Be = H.ret;
    if (m >= 0 && m < c.boxes.length) {
      let de = c.boxes[m];
      Be == 1 ? (de.label = $, de.color = oi(qe), X(), U("change")) : Be == -1 && W();
    }
  }
  function C(M) {
    t(10, G = !1);
    const { detail: H } = M;
    let $ = H.label, qe = H.color, Be = H.ret;
    if (m >= 0 && m < c.boxes.length) {
      let de = c.boxes[m];
      Be == 1 ? (de.label = $, de.color = oi(qe), X(), U("change")) : W();
    }
  }
  function W() {
    m >= 0 && m < c.boxes.length && (c.boxes.splice(m, 1), O(-1), U("change"));
  }
  function P() {
    if (g) {
      if (q = 1, t(6, g.width = g.clientWidth, g), p !== null)
        if (p.width > g.width)
          q = g.width / p.width, I = p.width * q, F = p.height * q, S = 0, y = 0, z = I, k = F, t(6, g.height = F, g);
        else {
          I = p.width, F = p.height;
          var M = (g.width - I) / 2;
          S = M, y = 0, z = M + I, k = p.height, t(6, g.height = F, g);
        }
      else
        S = 0, y = 0, z = g.width, k = g.height, t(6, g.height = g.clientHeight, g);
      if (z > 0 && k > 0)
        for (const H of c.boxes)
          H.canvasXmin = S, H.canvasYmin = y, H.canvasXmax = z, H.canvasYmax = k, H.setScaleFactor(q);
      X(), U("change");
    }
  }
  const te = new ResizeObserver(P);
  function B() {
    for (let M = 0; M < c.boxes.length; M++) {
      let H = c.boxes[M];
      if (!(H instanceof ii)) {
        let $ = "", qe = "";
        H.hasOwnProperty("color") ? ($ = H.color, Array.isArray($) && $.length === 3 && ($ = `rgb(${$[0]}, ${$[1]}, ${$[2]})`)) : $ = Ot[M % Ot.length], H.hasOwnProperty("label") && (qe = H.label), H = new ii(X, Ye, S, y, z, k, qe, H.xmin, H.ymin, H.xmax, H.ymax, $, s, r, a, f, u), t(0, c.boxes[M] = H, c);
      }
    }
  }
  function Se() {
    i !== null && (p === null || p.src != i) && (p = new Image(), p.src = i, p.onload = function() {
      P(), X();
    });
  }
  z1(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let M = 0; M < _.length; M++) {
        let H = Ot[M % Ot.length];
        d.push(An(H));
      }
    w = g.getContext("2d"), te.observe(g), Se(), P(), X();
  });
  function ze() {
    document.addEventListener("keydown", D);
  }
  function se() {
    document.removeEventListener("keydown", D);
  }
  q1(() => {
    document.removeEventListener("keydown", D);
  });
  function Le(M) {
    v1[M ? "unshift" : "push"](() => {
      g = M, t(6, g);
    });
  }
  const ce = () => Ce(), Ue = () => Xe(), Ml = () => W();
  function Al(M) {
    Go.call(this, l, M);
  }
  function on(M) {
    Go.call(this, l, M);
  }
  return l.$$set = (M) => {
    "imageUrl" in M && t(21, i = M.imageUrl), "interactive" in M && t(2, o = M.interactive), "boxAlpha" in M && t(22, s = M.boxAlpha), "boxMinSize" in M && t(23, r = M.boxMinSize), "handleSize" in M && t(24, a = M.handleSize), "boxThickness" in M && t(25, f = M.boxThickness), "boxSelectedThickness" in M && t(26, u = M.boxSelectedThickness), "value" in M && t(0, c = M.value), "choices" in M && t(3, _ = M.choices), "choicesColors" in M && t(4, d = M.choicesColors), "disableEditBoxes" in M && t(27, h = M.disableEditBoxes), "showRemoveButton" in M && t(1, b = M.showRemoveButton);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Se(), B(), P(), X());
  }, [
    c,
    b,
    o,
    _,
    d,
    n,
    g,
    m,
    v,
    R,
    G,
    _e,
    fe,
    Ce,
    Xe,
    Je,
    E,
    C,
    W,
    ze,
    se,
    i,
    s,
    r,
    a,
    f,
    u,
    h,
    Le,
    ce,
    Ue,
    Ml,
    Al,
    on
  ];
}
class A1 extends p1 {
  constructor(e) {
    super(), y1(
      this,
      e,
      M1,
      E1,
      S1,
      {
        imageUrl: 21,
        interactive: 2,
        boxAlpha: 22,
        boxMinSize: 23,
        handleSize: 24,
        boxThickness: 25,
        boxSelectedThickness: 26,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 27,
        showRemoveButton: 1
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: L1,
  add_flush_callback: R1,
  bind: D1,
  binding_callbacks: T1,
  create_component: j1,
  destroy_component: H1,
  init: I1,
  mount_component: F1,
  safe_not_equal: X1,
  transition_in: Y1,
  transition_out: U1
} = window.__gradio__svelte__internal, { createEventDispatcher: V1 } = window.__gradio__svelte__internal;
function N1(l) {
  let e, t, n;
  function i(s) {
    l[15](s);
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
    showRemoveButton: (
      /*showRemoveButton*/
      l[10]
    ),
    imageUrl: (
      /*resolved_src*/
      l[11]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new A1({ props: o }), T1.push(() => D1(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[16]
    ), {
      c() {
        j1(e.$$.fragment);
      },
      m(s, r) {
        F1(e, s, r), n = !0;
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
        s[9]), r & /*showRemoveButton*/
        1024 && (a.showRemoveButton = /*showRemoveButton*/
        s[10]), r & /*resolved_src*/
        2048 && (a.imageUrl = /*resolved_src*/
        s[11]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], R1(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Y1(e.$$.fragment, s), n = !0);
      },
      o(s) {
        U1(e.$$.fragment, s), n = !1;
      },
      d(s) {
        H1(e, s);
      }
    }
  );
}
function O1(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: _ } = e, { disableEditBoxes: d } = e, { showRemoveButton: h } = e, b, g;
  const w = V1();
  function p(v) {
    _ = v, t(0, _);
  }
  const m = () => w("change");
  return l.$$set = (v) => {
    "src" in v && t(13, n = v.src), "interactive" in v && t(1, i = v.interactive), "boxesAlpha" in v && t(2, o = v.boxesAlpha), "labelList" in v && t(3, s = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, f = v.handleSize), "boxThickness" in v && t(7, u = v.boxThickness), "boxSelectedThickness" in v && t(8, c = v.boxSelectedThickness), "value" in v && t(0, _ = v.value), "disableEditBoxes" in v && t(9, d = v.disableEditBoxes), "showRemoveButton" in v && t(10, h = v.showRemoveButton);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    24576) {
      t(11, b = n), t(14, g = n);
      const v = n;
      Dc(v).then((S) => {
        g === v && t(11, b = S);
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
    h,
    b,
    w,
    n,
    g,
    p,
    m
  ];
}
class _a extends L1 {
  constructor(e) {
    super(), I1(this, e, O1, N1, X1, {
      src: 13,
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
      showRemoveButton: 10
    });
  }
}
class W1 {
  constructor() {
    this.boxes = [];
  }
}
const {
  SvelteComponent: P1,
  add_flush_callback: bl,
  append: un,
  attr: yn,
  bind: wl,
  binding_callbacks: Ln,
  bubble: si,
  check_outros: Kt,
  create_component: mt,
  create_slot: Z1,
  destroy_component: gt,
  detach: Mt,
  element: qn,
  empty: K1,
  get_all_dirty_from_scope: G1,
  get_slot_changes: J1,
  group_outros: Gt,
  init: Q1,
  insert: At,
  mount_component: bt,
  noop: x1,
  safe_not_equal: $1,
  space: Wt,
  toggle_class: es,
  transition_in: N,
  transition_out: J,
  update_slot_base: e0
} = window.__gradio__svelte__internal, { createEventDispatcher: t0 } = window.__gradio__svelte__internal;
function ts(l) {
  let e, t;
  return e = new Pc({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [n0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, i) {
      bt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (N(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gt(e, n);
    }
  };
}
function n0(l) {
  let e, t;
  return e = new pl({
    props: {
      Icon: Ef,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, i) {
      bt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (N(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gt(e, n);
    }
  };
}
function ns(l) {
  let e, t;
  return e = new Au({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[33]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[34]
  ), e.$on(
    "error",
    /*error_handler*/
    l[35]
  ), {
    c() {
      mt(e.$$.fragment);
    },
    m(n, i) {
      bt(e, n, i), t = !0;
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
      t || (N(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gt(e, n);
    }
  };
}
function ls(l) {
  let e, t, n;
  return t = new pl({
    props: { Icon: gs, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[31]
  ), {
    c() {
      e = qn("div"), mt(t.$$.fragment);
    },
    m(i, o) {
      At(i, e, o), bt(t, e, null), n = !0;
    },
    p: x1,
    i(i) {
      n || (N(t.$$.fragment, i), n = !0);
    },
    o(i) {
      J(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Mt(e), gt(t);
    }
  };
}
function is(l) {
  let e;
  const t = (
    /*#slots*/
    l[32].default
  ), n = Z1(
    t,
    l,
    /*$$scope*/
    l[43],
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
      4096) && e0(
        n,
        t,
        i,
        /*$$scope*/
        i[43],
        e ? J1(
          t,
          /*$$scope*/
          i[43],
          o,
          null
        ) : G1(
          /*$$scope*/
          i[43]
        ),
        null
      );
    },
    i(i) {
      e || (N(n, i), e = !0);
    },
    o(i) {
      J(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function l0(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && is(l)
  );
  return {
    c() {
      n && n.c(), e = K1();
    },
    m(i, o) {
      n && n.m(i, o), At(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && N(n, 1)) : (n = is(i), n.c(), N(n, 1), n.m(e.parentNode, e)) : n && (Gt(), J(n, 1, 1, () => {
        n = null;
      }), Kt());
    },
    i(i) {
      t || (N(n), t = !0);
    },
    o(i) {
      J(n), t = !1;
    },
    d(i) {
      i && Mt(e), n && n.d(i);
    }
  };
}
function os(l) {
  let e, t, n, i;
  function o(r) {
    l[40](r);
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
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[18]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[19]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[20]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new _a({ props: s }), Ln.push(() => wl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[41]
    ), {
      c() {
        e = qn("div"), mt(t.$$.fragment), yn(e, "class", "image-frame svelte-1gjdske"), es(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        At(r, e, a), bt(t, e, null), i = !0;
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
        r[17]), a[0] & /*disableEditBoxes*/
        262144 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[18]), a[0] & /*showRemoveButton*/
        524288 && (f.showRemoveButton = /*showRemoveButton*/
        r[19]), a[0] & /*boxSelectedThickness*/
        1048576 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[20]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], bl(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && es(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (N(t.$$.fragment, r), i = !0);
      },
      o(r) {
        J(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && Mt(e), gt(t);
      }
    }
  );
}
function ss(l) {
  let e, t, n;
  function i(s) {
    l[42](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*handle_clear*/
      l[28]
    ),
    handle_select: (
      /*handle_select_source*/
      l[30]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new Pu({ props: o }), Ln.push(() => wl(e, "active_source", i)), {
      c() {
        mt(e.$$.fragment);
      },
      m(s, r) {
        bt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], bl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (N(e.$$.fragment, s), n = !0);
      },
      o(s) {
        J(e.$$.fragment, s), n = !1;
      },
      d(s) {
        gt(e, s);
      }
    }
  );
}
function i0(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new Er({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: bs,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && ts(l)
  ), w = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && ns(l)
  ), p = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && ls(l)
  );
  function m(k) {
    l[37](k);
  }
  function v(k) {
    l[38](k);
  }
  let S = {
    hidden: (
      /*value*/
      l[1] !== null
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
      l[21]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[22]
    ),
    stream_handler: (
      /*stream_handler*/
      l[23]
    ),
    $$slots: { default: [l0] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[24] !== void 0 && (S.uploading = /*uploading*/
  l[24]), /*dragging*/
  l[25] !== void 0 && (S.dragging = /*dragging*/
  l[25]), f = new q_({ props: S }), l[36](f), Ln.push(() => wl(f, "uploading", m)), Ln.push(() => wl(f, "dragging", v)), f.$on(
    "load",
    /*handle_upload*/
    l[27]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[39]
  );
  let y = (
    /*value*/
    l[1] !== null && os(l)
  ), z = h && ss(l);
  return {
    c() {
      mt(e.$$.fragment), t = Wt(), n = qn("div"), g && g.c(), i = Wt(), w && w.c(), o = Wt(), p && p.c(), s = Wt(), r = qn("div"), a = qn("div"), mt(f.$$.fragment), _ = Wt(), y && y.c(), d = Wt(), z && z.c(), yn(n, "class", "icon-buttons svelte-1gjdske"), yn(a, "class", "upload-container svelte-1gjdske"), yn(r, "data-testid", "image"), yn(r, "class", "image-container svelte-1gjdske");
    },
    m(k, q) {
      bt(e, k, q), At(k, t, q), At(k, n, q), g && g.m(n, null), un(n, i), w && w.m(n, null), un(n, o), p && p.m(n, null), At(k, s, q), At(k, r, q), un(r, a), bt(f, a, null), un(a, _), y && y.m(a, null), un(r, d), z && z.m(r, null), b = !0;
    },
    p(k, q) {
      const I = {};
      q[0] & /*show_label*/
      8 && (I.show_label = /*show_label*/
      k[3]), q[0] & /*label*/
      4 && (I.label = /*label*/
      k[2] || "Image Annotator"), e.$set(I), /*showDownloadButton*/
      k[10] && /*value*/
      k[1] !== null ? g ? (g.p(k, q), q[0] & /*showDownloadButton, value*/
      1026 && N(g, 1)) : (g = ts(k), g.c(), N(g, 1), g.m(n, i)) : g && (Gt(), J(g, 1, 1, () => {
        g = null;
      }), Kt()), /*showShareButton*/
      k[9] && /*value*/
      k[1] !== null ? w ? (w.p(k, q), q[0] & /*showShareButton, value*/
      514 && N(w, 1)) : (w = ns(k), w.c(), N(w, 1), w.m(n, o)) : w && (Gt(), J(w, 1, 1, () => {
        w = null;
      }), Kt()), /*showClearButton*/
      k[11] && /*value*/
      k[1] !== null && /*interactive*/
      k[7] ? p ? (p.p(k, q), q[0] & /*showClearButton, value, interactive*/
      2178 && N(p, 1)) : (p = ls(k), p.c(), N(p, 1), p.m(n, null)) : p && (Gt(), J(p, 1, 1, () => {
        p = null;
      }), Kt());
      const F = {};
      q[0] & /*value*/
      2 && (F.hidden = /*value*/
      k[1] !== null), q[0] & /*active_source*/
      1 && (F.filetype = /*active_source*/
      k[0] === "clipboard" ? "clipboard" : "image/*"), q[0] & /*root*/
      64 && (F.root = /*root*/
      k[6]), q[0] & /*max_file_size*/
      2097152 && (F.max_file_size = /*max_file_size*/
      k[21]), q[0] & /*sources*/
      16 && (F.disable_click = !/*sources*/
      k[4].includes("upload")), q[0] & /*cli_upload*/
      4194304 && (F.upload = /*cli_upload*/
      k[22]), q[0] & /*stream_handler*/
      8388608 && (F.stream_handler = /*stream_handler*/
      k[23]), q[0] & /*value*/
      2 | q[1] & /*$$scope*/
      4096 && (F.$$scope = { dirty: q, ctx: k }), !u && q[0] & /*uploading*/
      16777216 && (u = !0, F.uploading = /*uploading*/
      k[24], bl(() => u = !1)), !c && q[0] & /*dragging*/
      33554432 && (c = !0, F.dragging = /*dragging*/
      k[25], bl(() => c = !1)), f.$set(F), /*value*/
      k[1] !== null ? y ? (y.p(k, q), q[0] & /*value*/
      2 && N(y, 1)) : (y = os(k), y.c(), N(y, 1), y.m(a, null)) : y && (Gt(), J(y, 1, 1, () => {
        y = null;
      }), Kt()), q[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (k[4].length > 1 || /*sources*/
      k[4].includes("clipboard")) && /*value*/
      k[1] === null && /*interactive*/
      k[7]), h ? z ? (z.p(k, q), q[0] & /*sources, value, interactive*/
      146 && N(z, 1)) : (z = ss(k), z.c(), N(z, 1), z.m(r, null)) : z && (Gt(), J(z, 1, 1, () => {
        z = null;
      }), Kt());
    },
    i(k) {
      b || (N(e.$$.fragment, k), N(g), N(w), N(p), N(f.$$.fragment, k), N(y), N(z), b = !0);
    },
    o(k) {
      J(e.$$.fragment, k), J(g), J(w), J(p), J(f.$$.fragment, k), J(y), J(z), b = !1;
    },
    d(k) {
      k && (Mt(t), Mt(n), Mt(s), Mt(r)), gt(e, k), g && g.d(), w && w.d(), p && p.d(), l[36](null), gt(f), y && y.d(), z && z.d();
    }
  };
}
function o0(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(B, Se, ze, se) {
    function Le(ce) {
      return ce instanceof ze ? ce : new ze(function(Ue) {
        Ue(ce);
      });
    }
    return new (ze || (ze = Promise))(function(ce, Ue) {
      function Ml(M) {
        try {
          on(se.next(M));
        } catch (H) {
          Ue(H);
        }
      }
      function Al(M) {
        try {
          on(se.throw(M));
        } catch (H) {
          Ue(H);
        }
      }
      function on(M) {
        M.done ? ce(M.value) : Le(M.value).then(Ml, Al);
      }
      on((se = se.apply(B, Se || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "clipboard"] } = e, { selectable: u = !1 } = e, { root: c } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: b } = e, { showClearButton: g } = e, { boxesAlpha: w } = e, { labelList: p } = e, { labelColors: m } = e, { boxMinSize: v } = e, { handleSize: S } = e, { boxThickness: y } = e, { disableEditBoxes: z } = e, { showRemoveButton: k } = e, { boxSelectedThickness: q } = e, { max_file_size: I = null } = e, { cli_upload: F } = e, { stream_handler: R } = e, G, U = !1, { active_source: X = null } = e;
  function O({ detail: B }) {
    t(1, s = new W1()), t(1, s.image = B, s), oe("upload");
  }
  function _e() {
    ue(), oe("clear"), oe("change");
  }
  const oe = t0();
  let fe = !1;
  function D(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          G.paste_clipboard();
          break;
      }
    });
  }
  function ue() {
    t(1, s = null);
  }
  const Ce = async (B) => B === null ? "" : `<img src="${await bu(B.image)}" />`;
  function Xe(B) {
    si.call(this, l, B);
  }
  function Ye(B) {
    si.call(this, l, B);
  }
  function A(B) {
    Ln[B ? "unshift" : "push"](() => {
      G = B, t(26, G);
    });
  }
  function Je(B) {
    U = B, t(24, U);
  }
  function E(B) {
    fe = B, t(25, fe);
  }
  function C(B) {
    si.call(this, l, B);
  }
  function W(B) {
    s = B, t(1, s);
  }
  const P = () => oe("change");
  function te(B) {
    X = B, t(0, X), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, u = B.selectable), "root" in B && t(6, c = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, h = B.showShareButton), "showDownloadButton" in B && t(10, b = B.showDownloadButton), "showClearButton" in B && t(11, g = B.showClearButton), "boxesAlpha" in B && t(12, w = B.boxesAlpha), "labelList" in B && t(13, p = B.labelList), "labelColors" in B && t(14, m = B.labelColors), "boxMinSize" in B && t(15, v = B.boxMinSize), "handleSize" in B && t(16, S = B.handleSize), "boxThickness" in B && t(17, y = B.boxThickness), "disableEditBoxes" in B && t(18, z = B.disableEditBoxes), "showRemoveButton" in B && t(19, k = B.showRemoveButton), "boxSelectedThickness" in B && t(20, q = B.boxSelectedThickness), "max_file_size" in B && t(21, I = B.max_file_size), "cli_upload" in B && t(22, F = B.cli_upload), "stream_handler" in B && t(23, R = B.stream_handler), "active_source" in B && t(0, X = B.active_source), "$$scope" in B && t(43, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    16777216 && U && ue(), l.$$.dirty[0] & /*dragging*/
    33554432 && oe("drag", fe), l.$$.dirty[0] & /*active_source, sources*/
    17 && !X && f && t(0, X = f[0]);
  }, [
    X,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    h,
    b,
    g,
    w,
    p,
    m,
    v,
    S,
    y,
    z,
    k,
    q,
    I,
    F,
    R,
    U,
    fe,
    G,
    O,
    _e,
    oe,
    D,
    ue,
    n,
    Ce,
    Xe,
    Ye,
    A,
    Je,
    E,
    C,
    W,
    P,
    te,
    i
  ];
}
class s0 extends P1 {
  constructor(e) {
    super(), Q1(
      this,
      e,
      o0,
      i0,
      $1,
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
        showRemoveButton: 19,
        boxSelectedThickness: 20,
        max_file_size: 21,
        cli_upload: 22,
        stream_handler: 23,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: a0,
  attr: r0,
  check_outros: f0,
  create_component: u0,
  destroy_component: c0,
  detach: _0,
  element: d0,
  group_outros: h0,
  init: m0,
  insert: g0,
  mount_component: b0,
  safe_not_equal: w0,
  toggle_class: at,
  transition_in: sl,
  transition_out: zi
} = window.__gradio__svelte__internal;
function as(l) {
  let e, t;
  return e = new _a({
    props: {
      src: (
        /*samples_dir*/
        l[1] + /*value*/
        l[0].path
      ),
      alt: ""
    }
  }), {
    c() {
      u0(e.$$.fragment);
    },
    m(n, i) {
      b0(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*samples_dir, value*/
      3 && (o.src = /*samples_dir*/
      n[1] + /*value*/
      n[0].path), e.$set(o);
    },
    i(n) {
      t || (sl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      c0(e, n);
    }
  };
}
function p0(l) {
  let e, t, n = (
    /*value*/
    l[0] && as(l)
  );
  return {
    c() {
      e = d0("div"), n && n.c(), r0(e, "class", "container svelte-1sgcyba"), at(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), at(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), at(
        e,
        "selected",
        /*selected*/
        l[3]
      ), at(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(i, o) {
      g0(i, e, o), n && n.m(e, null), t = !0;
    },
    p(i, [o]) {
      /*value*/
      i[0] ? n ? (n.p(i, o), o & /*value*/
      1 && sl(n, 1)) : (n = as(i), n.c(), sl(n, 1), n.m(e, null)) : n && (h0(), zi(n, 1, 1, () => {
        n = null;
      }), f0()), (!t || o & /*type*/
      4) && at(
        e,
        "table",
        /*type*/
        i[2] === "table"
      ), (!t || o & /*type*/
      4) && at(
        e,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), (!t || o & /*selected*/
      8) && at(
        e,
        "selected",
        /*selected*/
        i[3]
      ), (!t || o & /*value*/
      1) && at(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    i(i) {
      t || (sl(n), t = !0);
    },
    o(i) {
      zi(n), t = !1;
    },
    d(i) {
      i && _0(e), n && n.d();
    }
  };
}
function v0(l, e, t) {
  let { value: n } = e, { samples_dir: i } = e, { type: o } = e, { selected: s = !1 } = e;
  return l.$$set = (r) => {
    "value" in r && t(0, n = r.value), "samples_dir" in r && t(1, i = r.samples_dir), "type" in r && t(2, o = r.type), "selected" in r && t(3, s = r.selected);
  }, [n, i, o, s];
}
class N0 extends a0 {
  constructor(e) {
    super(), m0(this, e, v0, p0, w0, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: k0,
  add_flush_callback: rs,
  assign: y0,
  bind: fs,
  binding_callbacks: us,
  check_outros: C0,
  create_component: Tt,
  destroy_component: jt,
  detach: da,
  empty: S0,
  flush: V,
  get_spread_object: z0,
  get_spread_update: q0,
  group_outros: B0,
  init: E0,
  insert: ha,
  mount_component: Ht,
  safe_not_equal: M0,
  space: A0,
  transition_in: et,
  transition_out: tt
} = window.__gradio__svelte__internal;
function L0(l) {
  let e, t;
  return e = new sf({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [T0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, i) {
      Ht(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      1024 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jt(e, n);
    }
  };
}
function R0(l) {
  let e, t;
  return e = new Cs({
    props: {
      i18n: (
        /*gradio*/
        l[28].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, i) {
      Ht(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      268435456 && (o.i18n = /*gradio*/
      n[28].i18n), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jt(e, n);
    }
  };
}
function D0(l) {
  let e, t;
  return e = new Cs({
    props: {
      i18n: (
        /*gradio*/
        l[28].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, i) {
      Ht(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      268435456 && (o.i18n = /*gradio*/
      n[28].i18n), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jt(e, n);
    }
  };
}
function T0(l) {
  let e, t;
  return e = new bs({}), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, i) {
      Ht(e, n, i), t = !0;
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jt(e, n);
    }
  };
}
function j0(l) {
  let e, t, n, i;
  const o = [D0, R0, L0], s = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[30] === "upload" ? 0 : (
        /*active_source*/
        a[30] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = S0();
    },
    m(a, f) {
      s[e].m(a, f), ha(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (B0(), tt(s[u], 1, 1, () => {
        s[u] = null;
      }), C0(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), et(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (et(t), i = !0);
    },
    o(a) {
      tt(t), i = !1;
    },
    d(a) {
      a && da(n), s[e].d(a);
    }
  };
}
function H0(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[28].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[28].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = y0(a, r[_]);
  e = new Mc({ props: a });
  function f(_) {
    l[31](_);
  }
  function u(_) {
    l[32](_);
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
      l[28].i18n
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
      l[28].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[28].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[28].client.stream
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
    showRemoveButton: (
      /*show_remove_button*/
      l[27]
    ),
    $$slots: { default: [j0] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[30] !== void 0 && (c.active_source = /*active_source*/
    l[30]), /*value*/
    l[0] !== void 0 && (c.value = /*value*/
    l[0]), n = new s0({ props: c }), us.push(() => fs(n, "active_source", f)), us.push(() => fs(n, "value", u)), n.$on(
      "change",
      /*change_handler*/
      l[33]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[34]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[35]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[36]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[37]
    ), n.$on(
      "select",
      /*select_handler*/
      l[38]
    ), n.$on(
      "share",
      /*share_handler*/
      l[39]
    ), n.$on(
      "error",
      /*error_handler*/
      l[40]
    ), {
      c() {
        Tt(e.$$.fragment), t = A0(), Tt(n.$$.fragment);
      },
      m(_, d) {
        Ht(e, _, d), ha(_, t, d), Ht(n, _, d), s = !0;
      },
      p(_, d) {
        const h = d[0] & /*gradio, loading_status*/
        268435458 ? q0(r, [
          d[0] & /*gradio*/
          268435456 && {
            autoscroll: (
              /*gradio*/
              _[28].autoscroll
            )
          },
          d[0] & /*gradio*/
          268435456 && { i18n: (
            /*gradio*/
            _[28].i18n
          ) },
          d[0] & /*loading_status*/
          2 && z0(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(h);
        const b = {};
        d[0] & /*_selectable*/
        1024 && (b.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (b.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (b.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (b.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (b.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (b.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (b.showClearButton = /*show_clear_button*/
        _[17]), d[0] & /*gradio*/
        268435456 && (b.i18n = /*gradio*/
        _[28].i18n), d[0] & /*boxes_alpha*/
        524288 && (b.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*label_list*/
        1048576 && (b.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (b.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (b.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (b.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (b.show_label = /*show_label*/
        _[6]), d[0] & /*gradio*/
        268435456 && (b.max_file_size = /*gradio*/
        _[28].max_file_size), d[0] & /*gradio*/
        268435456 && (b.cli_upload = /*gradio*/
        _[28].client.upload), d[0] & /*gradio*/
        268435456 && (b.stream_handler = /*gradio*/
        _[28].client.stream), d[0] & /*handle_size*/
        8388608 && (b.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (b.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (b.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (b.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*show_remove_button*/
        134217728 && (b.showRemoveButton = /*show_remove_button*/
        _[27]), d[0] & /*gradio, active_source*/
        1342177280 | d[1] & /*$$scope*/
        1024 && (b.$$scope = { dirty: d, ctx: _ }), !i && d[0] & /*active_source*/
        1073741824 && (i = !0, b.active_source = /*active_source*/
        _[30], rs(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, b.value = /*value*/
        _[0], rs(() => o = !1)), n.$set(b);
      },
      i(_) {
        s || (et(e.$$.fragment, _), et(n.$$.fragment, _), s = !0);
      },
      o(_) {
        tt(e.$$.fragment, _), tt(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && da(t), jt(e, _), jt(n, _);
      }
    }
  );
}
function I0(l) {
  let e, t;
  return e = new Aa({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[29] ? "focus" : "base"
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
      $$slots: { default: [H0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Tt(e.$$.fragment);
    },
    m(n, i) {
      Ht(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[0] & /*dragging*/
      536870912 && (o.border_mode = /*dragging*/
      n[29] ? "focus" : "base"), i[0] & /*elem_id*/
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
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, show_remove_button, active_source, value, dragging, loading_status*/
      2147468515 | i[1] & /*$$scope*/
      1024 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jt(e, n);
    }
  };
}
function F0(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: u } = e, { width: c } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e, { loading_status: g } = e, { sources: w = ["upload", "clipboard"] } = e, { show_download_button: p } = e, { show_share_button: m } = e, { show_clear_button: v } = e, { interactive: S } = e, { boxes_alpha: y } = e, { label_list: z } = e, { label_colors: k } = e, { box_min_size: q } = e, { handle_size: I } = e, { box_thickness: F } = e, { box_selected_thickness: R } = e, { disable_edit_boxes: G } = e, { show_remove_button: U } = e, { gradio: X } = e, O, _e = null;
  function oe(C) {
    _e = C, t(30, _e);
  }
  function fe(C) {
    s = C, t(0, s);
  }
  const D = () => X.dispatch("change"), ue = () => X.dispatch("edit"), Ce = () => {
    X.dispatch("clear");
  }, Xe = ({ detail: C }) => t(29, O = C), Ye = () => X.dispatch("upload"), A = ({ detail: C }) => X.dispatch("select", C), Je = ({ detail: C }) => X.dispatch("share", C), E = ({ detail: C }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), X.dispatch("error", C);
  };
  return l.$$set = (C) => {
    "elem_id" in C && t(2, n = C.elem_id), "elem_classes" in C && t(3, i = C.elem_classes), "visible" in C && t(4, o = C.visible), "value" in C && t(0, s = C.value), "label" in C && t(5, r = C.label), "show_label" in C && t(6, a = C.show_label), "root" in C && t(7, f = C.root), "height" in C && t(8, u = C.height), "width" in C && t(9, c = C.width), "_selectable" in C && t(10, _ = C._selectable), "container" in C && t(11, d = C.container), "scale" in C && t(12, h = C.scale), "min_width" in C && t(13, b = C.min_width), "loading_status" in C && t(1, g = C.loading_status), "sources" in C && t(14, w = C.sources), "show_download_button" in C && t(15, p = C.show_download_button), "show_share_button" in C && t(16, m = C.show_share_button), "show_clear_button" in C && t(17, v = C.show_clear_button), "interactive" in C && t(18, S = C.interactive), "boxes_alpha" in C && t(19, y = C.boxes_alpha), "label_list" in C && t(20, z = C.label_list), "label_colors" in C && t(21, k = C.label_colors), "box_min_size" in C && t(22, q = C.box_min_size), "handle_size" in C && t(23, I = C.handle_size), "box_thickness" in C && t(24, F = C.box_thickness), "box_selected_thickness" in C && t(25, R = C.box_selected_thickness), "disable_edit_boxes" in C && t(26, G = C.disable_edit_boxes), "show_remove_button" in C && t(27, U = C.show_remove_button), "gradio" in C && t(28, X = C.gradio);
  }, [
    s,
    g,
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
    h,
    b,
    w,
    p,
    m,
    v,
    S,
    y,
    z,
    k,
    q,
    I,
    F,
    R,
    G,
    U,
    X,
    O,
    _e,
    oe,
    fe,
    D,
    ue,
    Ce,
    Xe,
    Ye,
    A,
    Je,
    E
  ];
}
class O0 extends k0 {
  constructor(e) {
    super(), E0(
      this,
      e,
      F0,
      I0,
      M0,
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
        show_remove_button: 27,
        gradio: 28
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), V();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), V();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), V();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), V();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), V();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), V();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), V();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), V();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), V();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), V();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), V();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), V();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), V();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), V();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), V();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), V();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), V();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), V();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), V();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), V();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), V();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), V();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), V();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), V();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), V();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), V();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), V();
  }
  get show_remove_button() {
    return this.$$.ctx[27];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), V();
  }
  get gradio() {
    return this.$$.ctx[28];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), V();
  }
}
export {
  N0 as BaseExample,
  O0 as default
};
