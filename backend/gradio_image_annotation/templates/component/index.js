const {
  SvelteComponent: pa,
  assign: va,
  create_slot: ka,
  detach: ya,
  element: Ca,
  get_all_dirty_from_scope: Sa,
  get_slot_changes: za,
  get_spread_update: Ba,
  init: qa,
  insert: Ea,
  safe_not_equal: Ma,
  set_dynamic_element_data: Ti,
  set_style: ve,
  toggle_class: Ve,
  transition_in: ds,
  transition_out: hs,
  update_slot_base: Aa
} = window.__gradio__svelte__internal;
function La(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = ka(
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
    r = va(r, s[a]);
  return {
    c() {
      e = Ca(
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
      l[9]), ve(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), ve(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), ve(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), ve(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), ve(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), ve(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), ve(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Ea(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && Aa(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? za(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : Sa(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ti(
        /*tag*/
        a[14]
      )(e, r = Ba(s, [
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
      1 && ve(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && ve(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && ve(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && ve(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && ve(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && ve(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (ds(o, a), n = !0);
    },
    o(a) {
      hs(o, a), n = !1;
    },
    d(a) {
      a && ya(e), o && o.d(a);
    }
  };
}
function Ra(l) {
  let e, t = (
    /*tag*/
    l[14] && La(l)
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
      e || (ds(t, n), e = !0);
    },
    o(n) {
      hs(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Da(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: b = !0 } = e, { visible: w = !0 } = e, { allow_overflow: g = !0 } = e, { scale: p = null } = e, { min_width: m = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const y = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return l.$$set = (C) => {
    "height" in C && t(0, o = C.height), "width" in C && t(1, s = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, f = C.variant), "border_mode" in C && t(5, u = C.border_mode), "padding" in C && t(6, c = C.padding), "type" in C && t(16, _ = C.type), "test_id" in C && t(7, d = C.test_id), "explicit_call" in C && t(8, h = C.explicit_call), "container" in C && t(9, b = C.container), "visible" in C && t(10, w = C.visible), "allow_overflow" in C && t(11, g = C.allow_overflow), "scale" in C && t(12, p = C.scale), "min_width" in C && t(13, m = C.min_width), "$$scope" in C && t(17, i = C.$$scope);
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
    w,
    g,
    p,
    m,
    k,
    y,
    _,
    i,
    n
  ];
}
class Ta extends pa {
  constructor(e) {
    super(), qa(this, e, Da, Ra, Ma, {
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
  SvelteComponent: Ia,
  attr: Ha,
  create_slot: ja,
  detach: Fa,
  element: Xa,
  get_all_dirty_from_scope: Ya,
  get_slot_changes: Ua,
  init: Va,
  insert: Na,
  safe_not_equal: Oa,
  transition_in: Wa,
  transition_out: Pa,
  update_slot_base: Za
} = window.__gradio__svelte__internal;
function Ka(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = ja(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Xa("div"), i && i.c(), Ha(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Na(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && Za(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Ua(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Ya(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Wa(i, o), t = !0);
    },
    o(o) {
      Pa(i, o), t = !1;
    },
    d(o) {
      o && Fa(e), i && i.d(o);
    }
  };
}
function Ga(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Ja extends Ia {
  constructor(e) {
    super(), Va(this, e, Ga, Ka, Oa, {});
  }
}
const {
  SvelteComponent: Qa,
  attr: Ii,
  check_outros: xa,
  create_component: $a,
  create_slot: er,
  destroy_component: tr,
  detach: xn,
  element: nr,
  empty: lr,
  get_all_dirty_from_scope: ir,
  get_slot_changes: or,
  group_outros: sr,
  init: ar,
  insert: $n,
  mount_component: rr,
  safe_not_equal: fr,
  set_data: ur,
  space: cr,
  text: _r,
  toggle_class: Xt,
  transition_in: _n,
  transition_out: el,
  update_slot_base: dr
} = window.__gradio__svelte__internal;
function Hi(l) {
  let e, t;
  return e = new Ja({
    props: {
      $$slots: { default: [hr] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      $a(e.$$.fragment);
    },
    m(n, i) {
      rr(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (_n(e.$$.fragment, n), t = !0);
    },
    o(n) {
      el(e.$$.fragment, n), t = !1;
    },
    d(n) {
      tr(e, n);
    }
  };
}
function hr(l) {
  let e;
  return {
    c() {
      e = _r(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      $n(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && ur(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && xn(e);
    }
  };
}
function mr(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = er(
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
      e = nr("span"), s && s.c(), t = cr(), r && r.c(), n = lr(), Ii(e, "data-testid", "block-info"), Ii(e, "class", "svelte-22c38v"), Xt(e, "sr-only", !/*show_label*/
      l[0]), Xt(e, "hide", !/*show_label*/
      l[0]), Xt(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      $n(a, e, f), s && s.m(e, null), $n(a, t, f), r && r.m(a, f), $n(a, n, f), i = !0;
    },
    p(a, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      8) && dr(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? or(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : ir(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && Xt(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && Xt(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && Xt(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && _n(r, 1)) : (r = Hi(a), r.c(), _n(r, 1), r.m(n.parentNode, n)) : r && (sr(), el(r, 1, 1, () => {
        r = null;
      }), xa());
    },
    i(a) {
      i || (_n(s, a), _n(r), i = !0);
    },
    o(a) {
      el(s, a), el(r), i = !1;
    },
    d(a) {
      a && (xn(e), xn(t), xn(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function gr(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class ms extends Qa {
  constructor(e) {
    super(), ar(this, e, gr, mr, fr, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: br,
  append: Rl,
  attr: Fn,
  create_component: wr,
  destroy_component: pr,
  detach: vr,
  element: ji,
  init: kr,
  insert: yr,
  mount_component: Cr,
  safe_not_equal: Sr,
  set_data: zr,
  space: Br,
  text: qr,
  toggle_class: nt,
  transition_in: Er,
  transition_out: Mr
} = window.__gradio__svelte__internal;
function Ar(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = ji("label"), t = ji("span"), wr(n.$$.fragment), i = Br(), o = qr(
        /*label*/
        l[0]
      ), Fn(t, "class", "svelte-9gxdi0"), Fn(e, "for", ""), Fn(e, "data-testid", "block-label"), Fn(e, "class", "svelte-9gxdi0"), nt(e, "hide", !/*show_label*/
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
      yr(r, e, a), Rl(e, t), Cr(n, t, null), Rl(e, i), Rl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && zr(
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
      s || (Er(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Mr(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && vr(e), pr(n);
    }
  };
}
function Lr(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class Rr extends br {
  constructor(e) {
    super(), kr(this, e, Lr, Ar, Sr, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Dr,
  append: ri,
  attr: $e,
  bubble: Tr,
  create_component: Ir,
  destroy_component: Hr,
  detach: gs,
  element: fi,
  init: jr,
  insert: bs,
  listen: Fr,
  mount_component: Xr,
  safe_not_equal: Yr,
  set_data: Ur,
  set_style: Yt,
  space: Vr,
  text: Nr,
  toggle_class: he,
  transition_in: Or,
  transition_out: Wr
} = window.__gradio__svelte__internal;
function Fi(l) {
  let e, t;
  return {
    c() {
      e = fi("span"), t = Nr(
        /*label*/
        l[1]
      ), $e(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      bs(n, e, i), ri(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Ur(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && gs(e);
    }
  };
}
function Pr(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && Fi(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = fi("button"), a && a.c(), t = Vr(), n = fi("div"), Ir(i.$$.fragment), $e(n, "class", "svelte-1lrphxw"), he(
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
      ), Yt(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Yt(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Yt(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, u) {
      bs(f, e, u), a && a.m(e, null), ri(e, t), ri(e, n), Xr(i, n, null), o = !0, s || (r = Fr(
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
      4224 && Yt(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && Yt(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), u & /*offset*/
      2048 && Yt(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Or(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Wr(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && gs(e), a && a.d(), Hr(i), s = !1, r();
    }
  };
}
function Zr(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: u = !1 } = e, { disabled: c = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: b = "var(--background-fill-primary)" } = e, { offset: w = 0 } = e;
  function g(p) {
    Tr.call(this, l, p);
  }
  return l.$$set = (p) => {
    "Icon" in p && t(0, i = p.Icon), "label" in p && t(1, o = p.label), "show_label" in p && t(2, s = p.show_label), "pending" in p && t(3, r = p.pending), "size" in p && t(4, a = p.size), "padded" in p && t(5, f = p.padded), "highlight" in p && t(6, u = p.highlight), "disabled" in p && t(7, c = p.disabled), "hasPopup" in p && t(8, _ = p.hasPopup), "color" in p && t(13, d = p.color), "transparent" in p && t(9, h = p.transparent), "background" in p && t(10, b = p.background), "offset" in p && t(11, w = p.offset);
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
    w,
    n,
    d,
    g
  ];
}
class vl extends Dr {
  constructor(e) {
    super(), jr(this, e, Zr, Pr, Yr, {
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
  SvelteComponent: Kr,
  append: Gr,
  attr: Dl,
  binding_callbacks: Jr,
  create_slot: Qr,
  detach: xr,
  element: Xi,
  get_all_dirty_from_scope: $r,
  get_slot_changes: ef,
  init: tf,
  insert: nf,
  safe_not_equal: lf,
  toggle_class: lt,
  transition_in: of,
  transition_out: sf,
  update_slot_base: af
} = window.__gradio__svelte__internal;
function rf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = Qr(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = Xi("div"), t = Xi("div"), o && o.c(), Dl(t, "class", "icon svelte-3w3rth"), Dl(e, "class", "empty svelte-3w3rth"), Dl(e, "aria-label", "Empty value"), lt(
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
      nf(s, e, r), Gr(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && af(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? ef(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : $r(
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
      n || (of(o, s), n = !0);
    },
    o(s) {
      sf(o, s), n = !1;
    },
    d(s) {
      s && xr(e), o && o.d(s), l[6](null);
    }
  };
}
function ff(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(c) {
    var _;
    if (!c) return !1;
    const { height: d } = c.getBoundingClientRect(), { height: h } = ((_ = c.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function u(c) {
    Jr[c ? "unshift" : "push"](() => {
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
class uf extends Kr {
  constructor(e) {
    super(), tf(this, e, ff, rf, lf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: cf,
  append: Tl,
  attr: De,
  detach: _f,
  init: df,
  insert: hf,
  noop: Il,
  safe_not_equal: mf,
  set_style: Ne,
  svg_element: Xn
} = window.__gradio__svelte__internal;
function gf(l) {
  let e, t, n, i;
  return {
    c() {
      e = Xn("svg"), t = Xn("g"), n = Xn("path"), i = Xn("path"), De(n, "d", "M18,6L6.087,17.913"), Ne(n, "fill", "none"), Ne(n, "fill-rule", "nonzero"), Ne(n, "stroke-width", "2px"), De(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), De(i, "d", "M4.364,4.364L19.636,19.636"), Ne(i, "fill", "none"), Ne(i, "fill-rule", "nonzero"), Ne(i, "stroke-width", "2px"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "version", "1.1"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), De(e, "xml:space", "preserve"), De(e, "stroke", "currentColor"), Ne(e, "fill-rule", "evenodd"), Ne(e, "clip-rule", "evenodd"), Ne(e, "stroke-linecap", "round"), Ne(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      hf(o, e, s), Tl(e, t), Tl(t, n), Tl(e, i);
    },
    p: Il,
    i: Il,
    o: Il,
    d(o) {
      o && _f(e);
    }
  };
}
class ws extends cf {
  constructor(e) {
    super(), df(this, e, null, gf, mf, {});
  }
}
const {
  SvelteComponent: bf,
  append: wf,
  attr: an,
  detach: pf,
  init: vf,
  insert: kf,
  noop: Hl,
  safe_not_equal: yf,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function Cf(l) {
  let e, t;
  return {
    c() {
      e = Yi("svg"), t = Yi("path"), an(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), an(t, "fill", "currentColor"), an(e, "id", "icon"), an(e, "xmlns", "http://www.w3.org/2000/svg"), an(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      kf(n, e, i), wf(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(n) {
      n && pf(e);
    }
  };
}
class Sf extends bf {
  constructor(e) {
    super(), vf(this, e, null, Cf, yf, {});
  }
}
const {
  SvelteComponent: zf,
  append: Bf,
  attr: Ut,
  detach: qf,
  init: Ef,
  insert: Mf,
  noop: jl,
  safe_not_equal: Af,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function Lf(l) {
  let e, t;
  return {
    c() {
      e = Ui("svg"), t = Ui("path"), Ut(t, "fill", "currentColor"), Ut(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Ut(e, "xmlns", "http://www.w3.org/2000/svg"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Mf(n, e, i), Bf(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && qf(e);
    }
  };
}
class Rf extends zf {
  constructor(e) {
    super(), Ef(this, e, null, Lf, Af, {});
  }
}
const {
  SvelteComponent: Df,
  append: Tf,
  attr: Vt,
  detach: If,
  init: Hf,
  insert: jf,
  noop: Fl,
  safe_not_equal: Ff,
  svg_element: Vi
} = window.__gradio__svelte__internal;
function Xf(l) {
  let e, t;
  return {
    c() {
      e = Vi("svg"), t = Vi("path"), Vt(t, "d", "M5 8l4 4 4-4z"), Vt(e, "class", "dropdown-arrow svelte-145leq6"), Vt(e, "xmlns", "http://www.w3.org/2000/svg"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      jf(n, e, i), Tf(e, t);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(n) {
      n && If(e);
    }
  };
}
class Yf extends Df {
  constructor(e) {
    super(), Hf(this, e, null, Xf, Ff, {});
  }
}
const {
  SvelteComponent: Uf,
  append: Xl,
  attr: x,
  detach: Vf,
  init: Nf,
  insert: Of,
  noop: Yl,
  safe_not_equal: Wf,
  svg_element: Yn
} = window.__gradio__svelte__internal;
function Pf(l) {
  let e, t, n, i;
  return {
    c() {
      e = Yn("svg"), t = Yn("rect"), n = Yn("circle"), i = Yn("polyline"), x(t, "x", "3"), x(t, "y", "3"), x(t, "width", "18"), x(t, "height", "18"), x(t, "rx", "2"), x(t, "ry", "2"), x(n, "cx", "8.5"), x(n, "cy", "8.5"), x(n, "r", "1.5"), x(i, "points", "21 15 16 10 5 21"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "100%"), x(e, "height", "100%"), x(e, "viewBox", "0 0 24 24"), x(e, "fill", "none"), x(e, "stroke", "currentColor"), x(e, "stroke-width", "1.5"), x(e, "stroke-linecap", "round"), x(e, "stroke-linejoin", "round"), x(e, "class", "feather feather-image");
    },
    m(o, s) {
      Of(o, e, s), Xl(e, t), Xl(e, n), Xl(e, i);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(o) {
      o && Vf(e);
    }
  };
}
let ps = class extends Uf {
  constructor(e) {
    super(), Nf(this, e, null, Pf, Wf, {});
  }
};
const {
  SvelteComponent: Zf,
  append: Kf,
  attr: Un,
  detach: Gf,
  init: Jf,
  insert: Qf,
  noop: Ul,
  safe_not_equal: xf,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function $f(l) {
  let e, t;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), Un(t, "fill", "currentColor"), Un(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Un(e, "xmlns", "http://www.w3.org/2000/svg"), Un(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Qf(n, e, i), Kf(e, t);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(n) {
      n && Gf(e);
    }
  };
}
class vs extends Zf {
  constructor(e) {
    super(), Jf(this, e, null, $f, xf, {});
  }
}
const {
  SvelteComponent: eu,
  append: Vn,
  attr: $,
  detach: tu,
  init: nu,
  insert: lu,
  noop: Vl,
  safe_not_equal: iu,
  svg_element: rn
} = window.__gradio__svelte__internal;
function ou(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = rn("svg"), t = rn("path"), n = rn("path"), i = rn("line"), o = rn("line"), $(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), $(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), $(i, "x1", "12"), $(i, "y1", "19"), $(i, "x2", "12"), $(i, "y2", "23"), $(o, "x1", "8"), $(o, "y1", "23"), $(o, "x2", "16"), $(o, "y2", "23"), $(e, "xmlns", "http://www.w3.org/2000/svg"), $(e, "width", "100%"), $(e, "height", "100%"), $(e, "viewBox", "0 0 24 24"), $(e, "fill", "none"), $(e, "stroke", "currentColor"), $(e, "stroke-width", "2"), $(e, "stroke-linecap", "round"), $(e, "stroke-linejoin", "round"), $(e, "class", "feather feather-mic");
    },
    m(s, r) {
      lu(s, e, r), Vn(e, t), Vn(e, n), Vn(e, i), Vn(e, o);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(s) {
      s && tu(e);
    }
  };
}
class su extends eu {
  constructor(e) {
    super(), nu(this, e, null, ou, iu, {});
  }
}
const {
  SvelteComponent: au,
  append: Nl,
  attr: re,
  detach: ru,
  init: fu,
  insert: uu,
  noop: Ol,
  safe_not_equal: cu,
  svg_element: Nn
} = window.__gradio__svelte__internal;
function _u(l) {
  let e, t, n, i;
  return {
    c() {
      e = Nn("svg"), t = Nn("path"), n = Nn("polyline"), i = Nn("line"), re(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), re(n, "points", "17 8 12 3 7 8"), re(i, "x1", "12"), re(i, "y1", "3"), re(i, "x2", "12"), re(i, "y2", "15"), re(e, "xmlns", "http://www.w3.org/2000/svg"), re(e, "width", "90%"), re(e, "height", "90%"), re(e, "viewBox", "0 0 24 24"), re(e, "fill", "none"), re(e, "stroke", "currentColor"), re(e, "stroke-width", "2"), re(e, "stroke-linecap", "round"), re(e, "stroke-linejoin", "round"), re(e, "class", "feather feather-upload");
    },
    m(o, s) {
      uu(o, e, s), Nl(e, t), Nl(e, n), Nl(e, i);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(o) {
      o && ru(e);
    }
  };
}
let ks = class extends au {
  constructor(e) {
    super(), fu(this, e, null, _u, cu, {});
  }
};
const {
  SvelteComponent: du,
  append: Oi,
  attr: it,
  detach: hu,
  init: mu,
  insert: gu,
  noop: Wl,
  safe_not_equal: bu,
  svg_element: Pl
} = window.__gradio__svelte__internal;
function wu(l) {
  let e, t, n;
  return {
    c() {
      e = Pl("svg"), t = Pl("path"), n = Pl("path"), it(t, "fill", "currentColor"), it(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), it(n, "fill", "currentColor"), it(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      gu(i, e, o), Oi(e, t), Oi(e, n);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(i) {
      i && hu(e);
    }
  };
}
class pu extends du {
  constructor(e) {
    super(), mu(this, e, null, wu, bu, {});
  }
}
const vu = [
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
vu.reduce(
  (l, { color: e, primary: t, secondary: n }) => ({
    ...l,
    [e]: {
      primary: Wi[e][t],
      secondary: Wi[e][n]
    }
  }),
  {}
);
class tl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function ku(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new tl("Must be on Spaces to share.");
  let t, n, i;
  t = yu(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
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
      throw new tl(`Upload failed: ${f.error}`);
    }
    throw new tl("Upload failed.");
  }
  return await s.text();
}
function yu(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Cu,
  create_component: Su,
  destroy_component: zu,
  init: Bu,
  mount_component: qu,
  safe_not_equal: Eu,
  transition_in: Mu,
  transition_out: Au
} = window.__gradio__svelte__internal, { createEventDispatcher: Lu } = window.__gradio__svelte__internal;
function Ru(l) {
  let e, t;
  return e = new vl({
    props: {
      Icon: Sf,
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
      Su(e.$$.fragment);
    },
    m(n, i) {
      qu(e, n, i), t = !0;
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
      t || (Mu(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Au(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zu(e, n);
    }
  };
}
function Du(l, e, t) {
  const n = Lu();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let u = f instanceof tl ? f.message : "Share failed.";
      n("error", u);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, s = f.i18n);
  }, [i, o, s, r, n, a];
}
class Tu extends Cu {
  constructor(e) {
    super(), Bu(this, e, Du, Ru, Eu, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Iu,
  append: Et,
  attr: ui,
  check_outros: Hu,
  create_component: ys,
  destroy_component: Cs,
  detach: nl,
  element: ci,
  group_outros: ju,
  init: Fu,
  insert: ll,
  mount_component: Ss,
  safe_not_equal: Xu,
  set_data: _i,
  space: di,
  text: dn,
  toggle_class: Pi,
  transition_in: rl,
  transition_out: fl
} = window.__gradio__svelte__internal;
function Yu(l) {
  let e, t;
  return e = new ks({}), {
    c() {
      ys(e.$$.fragment);
    },
    m(n, i) {
      Ss(e, n, i), t = !0;
    },
    i(n) {
      t || (rl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cs(e, n);
    }
  };
}
function Uu(l) {
  let e, t;
  return e = new vs({}), {
    c() {
      ys(e.$$.fragment);
    },
    m(n, i) {
      Ss(e, n, i), t = !0;
    },
    i(n) {
      t || (rl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cs(e, n);
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
      e = ci("span"), t = dn("- "), i = dn(n), o = dn(" -"), s = di(), a = dn(r), ui(e, "class", "or svelte-kzcjhc");
    },
    m(f, u) {
      ll(f, e, u), Et(e, t), Et(e, i), Et(e, o), ll(f, s, u), ll(f, a, u);
    },
    p(f, u) {
      u & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && _i(i, n), u & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && _i(a, r);
    },
    d(f) {
      f && (nl(e), nl(s), nl(a));
    }
  };
}
function Vu(l) {
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
  const u = [Uu, Yu], c = [];
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
      e = ci("div"), t = ci("span"), i.c(), o = di(), r = dn(s), a = di(), d && d.c(), ui(t, "class", "icon-wrap svelte-kzcjhc"), Pi(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), ui(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, b) {
      ll(h, e, b), Et(e, t), c[n].m(t, null), Et(e, o), Et(e, r), Et(e, a), d && d.m(e, null), f = !0;
    },
    p(h, [b]) {
      let w = n;
      n = _(h), n !== w && (ju(), fl(c[w], 1, 1, () => {
        c[w] = null;
      }), Hu(), i = c[n], i || (i = c[n] = u[n](h), i.c()), rl(i, 1), i.m(t, null)), (!f || b & /*hovered*/
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
      ) + "") && _i(r, s), /*mode*/
      h[3] !== "short" ? d ? d.p(h, b) : (d = Zi(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      f || (rl(i), f = !0);
    },
    o(h) {
      fl(i), f = !1;
    },
    d(h) {
      h && nl(e), c[n].d(), d && d.d();
    }
  };
}
function Nu(l, e, t) {
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
class zs extends Iu {
  constructor(e) {
    super(), Fu(this, e, Nu, Vu, Xu, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Ou,
  append: Zl,
  attr: Ge,
  check_outros: hn,
  create_component: kl,
  destroy_component: yl,
  detach: nn,
  element: Dn,
  empty: Wu,
  group_outros: mn,
  init: Pu,
  insert: ln,
  listen: Cl,
  mount_component: Sl,
  safe_not_equal: Zu,
  space: Kl,
  toggle_class: ht,
  transition_in: te,
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
      e = Dn("span"), u && u.c(), n = Kl(), c && c.c(), o = Kl(), _ && _.c(), r = Kl(), d && d.c(), Ge(e, "class", "source-selection svelte-1jp3vgd"), Ge(e, "data-testid", "source-select");
    },
    m(h, b) {
      ln(h, e, b), u && u.m(e, null), Zl(e, n), c && c.m(e, null), Zl(e, o), _ && _.m(e, null), Zl(e, r), d && d.m(e, null), f = !0;
    },
    p(h, b) {
      b & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? u ? (u.p(h, b), b & /*sources*/
      2 && te(u, 1)) : (u = Gi(h), u.c(), te(u, 1), u.m(e, n)) : u && (mn(), me(u, 1, 1, () => {
        u = null;
      }), hn()), b & /*sources*/
      2 && (i = /*sources*/
      h[1].includes("microphone")), i ? c ? (c.p(h, b), b & /*sources*/
      2 && te(c, 1)) : (c = Ji(h), c.c(), te(c, 1), c.m(e, o)) : c && (mn(), me(c, 1, 1, () => {
        c = null;
      }), hn()), b & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("webcam")), s ? _ ? (_.p(h, b), b & /*sources*/
      2 && te(_, 1)) : (_ = Qi(h), _.c(), te(_, 1), _.m(e, r)) : _ && (mn(), me(_, 1, 1, () => {
        _ = null;
      }), hn()), b & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? d ? (d.p(h, b), b & /*sources*/
      2 && te(d, 1)) : (d = xi(h), d.c(), te(d, 1), d.m(e, null)) : d && (mn(), me(d, 1, 1, () => {
        d = null;
      }), hn());
    },
    i(h) {
      f || (te(u), te(c), te(_), te(d), f = !0);
    },
    o(h) {
      me(u), me(c), me(_), me(d), f = !1;
    },
    d(h) {
      h && nn(e), u && u.d(), c && c.d(), _ && _.d(), d && d.d();
    }
  };
}
function Gi(l) {
  let e, t, n, i, o;
  return t = new ks({}), {
    c() {
      e = Dn("button"), kl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Upload file"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      ln(s, e, r), Sl(t, e, null), n = !0, i || (o = Cl(
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
      n || (te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && nn(e), yl(t), i = !1, o();
    }
  };
}
function Ji(l) {
  let e, t, n, i, o;
  return t = new su({}), {
    c() {
      e = Dn("button"), kl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Record audio"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      ln(s, e, r), Sl(t, e, null), n = !0, i || (o = Cl(
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
      n || (te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && nn(e), yl(t), i = !1, o();
    }
  };
}
function Qi(l) {
  let e, t, n, i, o;
  return t = new pu({}), {
    c() {
      e = Dn("button"), kl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Capture from camera"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      ln(s, e, r), Sl(t, e, null), n = !0, i || (o = Cl(
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
      n || (te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && nn(e), yl(t), i = !1, o();
    }
  };
}
function xi(l) {
  let e, t, n, i, o;
  return t = new vs({}), {
    c() {
      e = Dn("button"), kl(t.$$.fragment), Ge(e, "class", "icon svelte-1jp3vgd"), Ge(e, "aria-label", "Paste from clipboard"), ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      ln(s, e, r), Sl(t, e, null), n = !0, i || (o = Cl(
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
      n || (te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && nn(e), yl(t), i = !1, o();
    }
  };
}
function Ku(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && Ki(l)
  );
  return {
    c() {
      n && n.c(), e = Wu();
    },
    m(i, o) {
      n && n.m(i, o), ln(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && te(n, 1)) : (n = Ki(i), n.c(), te(n, 1), n.m(e.parentNode, e)) : n && (mn(), me(n, 1, 1, () => {
        n = null;
      }), hn());
    },
    i(i) {
      t || (te(n), t = !0);
    },
    o(i) {
      me(n), t = !1;
    },
    d(i) {
      i && nn(e), n && n.d(i);
    }
  };
}
function Gu(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(h, b, w, g) {
    function p(m) {
      return m instanceof w ? m : new w(function(k) {
        k(m);
      });
    }
    return new (w || (w = Promise))(function(m, k) {
      function y(v) {
        try {
          B(g.next(v));
        } catch (q) {
          k(q);
        }
      }
      function C(v) {
        try {
          B(g.throw(v));
        } catch (q) {
          k(q);
        }
      }
      function B(v) {
        v.done ? m(v.value) : p(v.value).then(y, C);
      }
      B((g = g.apply(h, b || [])).next());
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
class Ju extends Ou {
  constructor(e) {
    super(), Pu(this, e, Gu, Ku, Zu, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Qt(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function il() {
}
function Qu(l, e) {
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
const Bs = typeof window < "u";
let eo = Bs ? () => window.performance.now() : () => Date.now(), qs = Bs ? (l) => requestAnimationFrame(l) : il;
const en = /* @__PURE__ */ new Set();
function Es(l) {
  en.forEach((e) => {
    e.c(l) || (en.delete(e), e.f());
  }), en.size !== 0 && qs(Es);
}
function xu(l) {
  let e;
  return en.size === 0 && qs(Es), {
    promise: new Promise((t) => {
      en.add(e = { c: l, f: t });
    }),
    abort() {
      en.delete(e);
    }
  };
}
function $u(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function to(l, { delay: e = 0, duration: t = 400, easing: n = $u, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, u = a * (1 - s), [c, _] = $i(i), [d, h] = $i(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (b, w) => `
			transform: ${f} translate(${(1 - b) * c}${_}, ${(1 - b) * d}${h});
			opacity: ${a - u * w}`
  };
}
const Nt = [];
function ec(l, e = il) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Qu(l, r) && (l = r, t)) {
      const a = !Nt.length;
      for (const f of n)
        f[1](), Nt.push(f, l);
      if (a) {
        for (let f = 0; f < Nt.length; f += 2)
          Nt[f][0](Nt[f + 1]);
        Nt.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = il) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || il), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function no(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function hi(l, e, t, n) {
  if (typeof t == "number" || no(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = l.opts.stiffness * i, r = l.opts.damping * o, a = (s - r) * l.inv_mass, f = (o + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, no(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => hi(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = hi(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function lo(l, e = {}) {
  const t = ec(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, u = l, c = 1, _ = 0, d = !1;
  function h(w, g = {}) {
    u = w;
    const p = a = {};
    return l == null || g.hard || b.stiffness >= 1 && b.damping >= 1 ? (d = !0, s = eo(), f = w, t.set(l = u), Promise.resolve()) : (g.soft && (_ = 1 / ((g.soft === !0 ? 0.5 : +g.soft) * 60), c = 0), r || (s = eo(), d = !1, r = xu((m) => {
      if (d)
        return d = !1, r = null, !1;
      c = Math.min(c + _, 1);
      const k = {
        inv_mass: c,
        opts: b,
        settled: !0,
        dt: (m - s) * 60 / 1e3
      }, y = hi(k, f, l, u);
      return s = m, f = l, t.set(l = y), k.settled && (r = null), !k.settled;
    })), new Promise((m) => {
      r.promise.then(() => {
        p === a && m();
      });
    }));
  }
  const b = {
    set: h,
    update: (w, g) => h(w(u, l), g),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return b;
}
const {
  SvelteComponent: tc,
  append: Te,
  attr: U,
  component_subscribe: io,
  detach: nc,
  element: lc,
  init: ic,
  insert: oc,
  noop: oo,
  safe_not_equal: sc,
  set_style: On,
  svg_element: Ie,
  toggle_class: so
} = window.__gradio__svelte__internal, { onMount: ac } = window.__gradio__svelte__internal;
function rc(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _;
  return {
    c() {
      e = lc("div"), t = Ie("svg"), n = Ie("g"), i = Ie("path"), o = Ie("path"), s = Ie("path"), r = Ie("path"), a = Ie("g"), f = Ie("path"), u = Ie("path"), c = Ie("path"), _ = Ie("path"), U(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), U(i, "fill", "#FF7C00"), U(i, "fill-opacity", "0.4"), U(i, "class", "svelte-43sxxs"), U(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), U(o, "fill", "#FF7C00"), U(o, "class", "svelte-43sxxs"), U(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), U(s, "fill", "#FF7C00"), U(s, "fill-opacity", "0.4"), U(s, "class", "svelte-43sxxs"), U(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), U(r, "fill", "#FF7C00"), U(r, "class", "svelte-43sxxs"), On(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), U(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), U(f, "fill", "#FF7C00"), U(f, "fill-opacity", "0.4"), U(f, "class", "svelte-43sxxs"), U(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), U(u, "fill", "#FF7C00"), U(u, "class", "svelte-43sxxs"), U(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), U(c, "fill", "#FF7C00"), U(c, "fill-opacity", "0.4"), U(c, "class", "svelte-43sxxs"), U(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), U(_, "fill", "#FF7C00"), U(_, "class", "svelte-43sxxs"), On(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), U(t, "viewBox", "-1200 -1200 3000 3000"), U(t, "fill", "none"), U(t, "xmlns", "http://www.w3.org/2000/svg"), U(t, "class", "svelte-43sxxs"), U(e, "class", "svelte-43sxxs"), so(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, h) {
      oc(d, e, h), Te(e, t), Te(t, n), Te(n, i), Te(n, o), Te(n, s), Te(n, r), Te(t, a), Te(a, f), Te(a, u), Te(a, c), Te(a, _);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && On(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && On(a, "transform", "translate(" + /*$bottom*/
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
      d && nc(e);
    }
  };
}
function fc(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, h, b, w) {
    function g(p) {
      return p instanceof b ? p : new b(function(m) {
        m(p);
      });
    }
    return new (b || (b = Promise))(function(p, m) {
      function k(B) {
        try {
          C(w.next(B));
        } catch (v) {
          m(v);
        }
      }
      function y(B) {
        try {
          C(w.throw(B));
        } catch (v) {
          m(v);
        }
      }
      function C(B) {
        B.done ? p(B.value) : g(B.value).then(k, y);
      }
      C((w = w.apply(d, h || [])).next());
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
  return ac(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class uc extends tc {
  constructor(e) {
    super(), ic(this, e, fc, rc, sc, { margin: 0 });
  }
}
const {
  SvelteComponent: cc,
  append: Mt,
  attr: Xe,
  binding_callbacks: ao,
  check_outros: mi,
  create_component: Ms,
  create_slot: As,
  destroy_component: Ls,
  destroy_each: Rs,
  detach: T,
  element: Ze,
  empty: on,
  ensure_array_like: ul,
  get_all_dirty_from_scope: Ds,
  get_slot_changes: Ts,
  group_outros: gi,
  init: _c,
  insert: I,
  mount_component: Is,
  noop: bi,
  safe_not_equal: dc,
  set_data: Ee,
  set_style: _t,
  space: qe,
  text: K,
  toggle_class: Be,
  transition_in: Fe,
  transition_out: Ke,
  update_slot_base: Hs
} = window.__gradio__svelte__internal, { tick: hc } = window.__gradio__svelte__internal, { onDestroy: mc } = window.__gradio__svelte__internal, { createEventDispatcher: gc } = window.__gradio__svelte__internal, bc = (l) => ({}), ro = (l) => ({}), wc = (l) => ({}), fo = (l) => ({});
function uo(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function co(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function pc(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new vl({
    props: {
      Icon: ws,
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
  ), u = As(
    f,
    l,
    /*$$scope*/
    l[29],
    ro
  );
  return {
    c() {
      e = Ze("div"), Ms(t.$$.fragment), n = qe(), i = Ze("span"), s = K(o), r = qe(), u && u.c(), Xe(e, "class", "clear-status svelte-16nch4a"), Xe(i, "class", "error svelte-16nch4a");
    },
    m(c, _) {
      I(c, e, _), Is(t, e, null), I(c, n, _), I(c, i, _), Mt(i, s), I(c, r, _), u && u.m(c, _), a = !0;
    },
    p(c, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      c[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      c[1]("common.error") + "") && Ee(s, o), u && u.p && (!a || _[0] & /*$$scope*/
      536870912) && Hs(
        u,
        f,
        c,
        /*$$scope*/
        c[29],
        a ? Ts(
          f,
          /*$$scope*/
          c[29],
          _,
          bc
        ) : Ds(
          /*$$scope*/
          c[29]
        ),
        ro
      );
    },
    i(c) {
      a || (Fe(t.$$.fragment, c), Fe(u, c), a = !0);
    },
    o(c) {
      Ke(t.$$.fragment, c), Ke(u, c), a = !1;
    },
    d(c) {
      c && (T(e), T(n), T(i), T(r)), Ls(t), u && u.d(c);
    }
  };
}
function vc(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && _o(l)
  );
  function c(m, k) {
    if (
      /*progress*/
      m[7]
    ) return Cc;
    if (
      /*queue_position*/
      m[2] !== null && /*queue_size*/
      m[3] !== void 0 && /*queue_position*/
      m[2] >= 0
    ) return yc;
    if (
      /*queue_position*/
      m[2] === 0
    ) return kc;
  }
  let _ = c(l), d = _ && _(l), h = (
    /*timer*/
    l[5] && go(l)
  );
  const b = [qc, Bc], w = [];
  function g(m, k) {
    return (
      /*last_progress_level*/
      m[15] != null ? 0 : (
        /*show_progress*/
        m[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = g(l)) && (s = w[o] = b[o](l));
  let p = !/*timer*/
  l[5] && Co(l);
  return {
    c() {
      u && u.c(), e = qe(), t = Ze("div"), d && d.c(), n = qe(), h && h.c(), i = qe(), s && s.c(), r = qe(), p && p.c(), a = on(), Xe(t, "class", "progress-text svelte-16nch4a"), Be(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Be(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(m, k) {
      u && u.m(m, k), I(m, e, k), I(m, t, k), d && d.m(t, null), Mt(t, n), h && h.m(t, null), I(m, i, k), ~o && w[o].m(m, k), I(m, r, k), p && p.m(m, k), I(m, a, k), f = !0;
    },
    p(m, k) {
      /*variant*/
      m[8] === "default" && /*show_eta_bar*/
      m[18] && /*show_progress*/
      m[6] === "full" ? u ? u.p(m, k) : (u = _o(m), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), _ === (_ = c(m)) && d ? d.p(m, k) : (d && d.d(1), d = _ && _(m), d && (d.c(), d.m(t, n))), /*timer*/
      m[5] ? h ? h.p(m, k) : (h = go(m), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!f || k[0] & /*variant*/
      256) && Be(
        t,
        "meta-text-center",
        /*variant*/
        m[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Be(
        t,
        "meta-text",
        /*variant*/
        m[8] === "default"
      );
      let y = o;
      o = g(m), o === y ? ~o && w[o].p(m, k) : (s && (gi(), Ke(w[y], 1, 1, () => {
        w[y] = null;
      }), mi()), ~o ? (s = w[o], s ? s.p(m, k) : (s = w[o] = b[o](m), s.c()), Fe(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      m[5] ? p && (gi(), Ke(p, 1, 1, () => {
        p = null;
      }), mi()) : p ? (p.p(m, k), k[0] & /*timer*/
      32 && Fe(p, 1)) : (p = Co(m), p.c(), Fe(p, 1), p.m(a.parentNode, a));
    },
    i(m) {
      f || (Fe(s), Fe(p), f = !0);
    },
    o(m) {
      Ke(s), Ke(p), f = !1;
    },
    d(m) {
      m && (T(e), T(t), T(i), T(r), T(a)), u && u.d(m), d && d.d(), h && h.d(), ~o && w[o].d(m), p && p.d(m);
    }
  };
}
function _o(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Ze("div"), Xe(e, "class", "eta-bar svelte-16nch4a"), _t(e, "transform", t);
    },
    m(n, i) {
      I(n, e, i);
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
function kc(l) {
  let e;
  return {
    c() {
      e = K("processing |");
    },
    m(t, n) {
      I(t, e, n);
    },
    p: bi,
    d(t) {
      t && T(e);
    }
  };
}
function yc(l) {
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
      I(r, e, a), I(r, n, a), I(r, i, a), I(r, o, a), I(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ee(n, t), a[0] & /*queue_size*/
      8 && Ee(
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
function Cc(l) {
  let e, t = ul(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = mo(co(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = on();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      I(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = ul(
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
      i && T(e), Rs(n, i);
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
      u[41].length != null ? zc : Sc
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = qe(), n = K(t), i = K(" | "), s = K(o);
    },
    m(u, c) {
      f.m(u, c), I(u, e, c), I(u, n, c), I(u, i, c), I(u, s, c);
    },
    p(u, c) {
      a === (a = r(u)) && f ? f.p(u, c) : (f.d(1), f = a(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && Ee(n, t);
    },
    d(u) {
      u && (T(e), T(n), T(i), T(s)), f.d(u);
    }
  };
}
function Sc(l) {
  let e = Qt(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = K(e);
    },
    m(n, i) {
      I(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Qt(
        /*p*/
        n[41].index || 0
      ) + "") && Ee(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function zc(l) {
  let e = Qt(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Qt(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = K(e), n = K("/"), o = K(i);
    },
    m(s, r) {
      I(s, t, r), I(s, n, r), I(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Qt(
        /*p*/
        s[41].index || 0
      ) + "") && Ee(t, e), r[0] & /*progress*/
      128 && i !== (i = Qt(
        /*p*/
        s[41].length
      ) + "") && Ee(o, i);
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
      t && t.c(), e = on();
    },
    m(n, i) {
      t && t.m(n, i), I(n, e, i);
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
      I(o, e, s), I(o, n, s), I(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ee(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ee(n, t);
    },
    d(o) {
      o && (T(e), T(n), T(i));
    }
  };
}
function Bc(l) {
  let e, t;
  return e = new uc({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      Ms(e.$$.fragment);
    },
    m(n, i) {
      Is(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Fe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ke(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ls(e, n);
    }
  };
}
function qc(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && bo(l)
  );
  return {
    c() {
      e = Ze("div"), t = Ze("div"), r && r.c(), n = qe(), i = Ze("div"), o = Ze("div"), Xe(t, "class", "progress-level-inner svelte-16nch4a"), Xe(o, "class", "progress-bar svelte-16nch4a"), _t(o, "width", s), Xe(i, "class", "progress-bar-wrap svelte-16nch4a"), Xe(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      I(a, e, f), Mt(e, t), r && r.m(t, null), Mt(e, n), Mt(e, i), Mt(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = bo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && _t(o, "width", s);
    },
    i: bi,
    o: bi,
    d(a) {
      a && T(e), r && r.d(), l[31](null);
    }
  };
}
function bo(l) {
  let e, t = ul(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = yo(uo(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = on();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      I(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = ul(
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
      i && T(e), Rs(n, i);
    }
  };
}
function wo(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && Ec()
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
      o && o.c(), e = qe(), s && s.c(), t = qe(), r && r.c(), n = qe(), a && a.c(), i = on();
    },
    m(f, u) {
      o && o.m(f, u), I(f, e, u), s && s.m(f, u), I(f, t, u), r && r.m(f, u), I(f, n, u), a && a.m(f, u), I(f, i, u);
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
function Ec(l) {
  let e;
  return {
    c() {
      e = K(" /");
    },
    m(t, n) {
      I(t, e, n);
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
      I(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ee(t, e);
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
      I(t, e, n);
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
      I(i, t, o), I(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Ee(t, e);
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
      t && t.c(), e = on();
    },
    m(n, i) {
      t && t.m(n, i), I(n, e, i);
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
  ), s = As(
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
      ), n = qe(), s && s.c(), Xe(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      I(r, e, a), Mt(e, t), I(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ee(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && Hs(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? Ts(
          o,
          /*$$scope*/
          r[29],
          a,
          wc
        ) : Ds(
          /*$$scope*/
          r[29]
        ),
        fo
      );
    },
    i(r) {
      i || (Fe(s, r), i = !0);
    },
    o(r) {
      Ke(s, r), i = !1;
    },
    d(r) {
      r && (T(e), T(n)), s && s.d(r);
    }
  };
}
function Mc(l) {
  let e, t, n, i, o;
  const s = [vc, pc], r = [];
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
      e = Ze("div"), n && n.c(), Xe(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Be(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Be(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Be(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Be(
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
      I(f, e, u), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, u) {
      let c = t;
      t = a(f), t === c ? ~t && r[t].p(f, u) : (n && (gi(), Ke(r[c], 1, 1, () => {
        r[c] = null;
      }), mi()), ~t ? (n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), Fe(n, 1), n.m(e, null)) : n = null), (!o || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && Xe(e, "class", i), (!o || u[0] & /*variant, show_progress, status, show_progress*/
      336) && Be(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Be(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || u[0] & /*variant, show_progress, status*/
      336) && Be(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || u[0] & /*variant, show_progress, border*/
      4416) && Be(
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
      o || (Fe(n), o = !0);
    },
    o(f) {
      Ke(n), o = !1;
    },
    d(f) {
      f && T(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var Ac = function(l, e, t, n) {
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
let Wn = [], Gl = !1;
function Lc(l) {
  return Ac(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Wn.push(e), !Gl) Gl = !0;
      else return;
      yield hc(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Wn.length; i++) {
          const s = Wn[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Gl = !1, Wn = [];
      });
    }
  });
}
function Rc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = gc();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: b = null } = e, { progress: w = null } = e, { variant: g = "default" } = e, { loading_text: p = "Loading..." } = e, { absolute: m = !0 } = e, { translucent: k = !1 } = e, { border: y = !1 } = e, { autoscroll: C } = e, B, v = !1, q = 0, j = 0, X = null, R = null, Q = 0, O = null, P, H = null, ie = !0;
  const we = () => {
    t(0, a = t(27, X = t(19, ue = null))), t(25, q = performance.now()), t(26, j = 0), v = !0, oe();
  };
  function oe() {
    requestAnimationFrame(() => {
      t(26, j = (performance.now() - q) / 1e3), v && oe();
    });
  }
  function D() {
    t(26, j = 0), t(0, a = t(27, X = t(19, ue = null))), v && (v = !1);
  }
  mc(() => {
    v && D();
  });
  let ue = null;
  function pe(A) {
    ao[A ? "unshift" : "push"](() => {
      H = A, t(16, H), t(7, w), t(14, O), t(15, P);
    });
  }
  const Ye = () => {
    s("clear_status");
  };
  function Ue(A) {
    ao[A ? "unshift" : "push"](() => {
      B = A, t(13, B);
    });
  }
  return l.$$set = (A) => {
    "i18n" in A && t(1, r = A.i18n), "eta" in A && t(0, a = A.eta), "queue_position" in A && t(2, f = A.queue_position), "queue_size" in A && t(3, u = A.queue_size), "status" in A && t(4, c = A.status), "scroll_to_output" in A && t(22, _ = A.scroll_to_output), "timer" in A && t(5, d = A.timer), "show_progress" in A && t(6, h = A.show_progress), "message" in A && t(23, b = A.message), "progress" in A && t(7, w = A.progress), "variant" in A && t(8, g = A.variant), "loading_text" in A && t(9, p = A.loading_text), "absolute" in A && t(10, m = A.absolute), "translucent" in A && t(11, k = A.translucent), "border" in A && t(12, y = A.border), "autoscroll" in A && t(24, C = A.autoscroll), "$$scope" in A && t(29, o = A.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = X), a != null && X !== a && (t(28, R = (performance.now() - q) / 1e3 + a), t(19, ue = R.toFixed(1)), t(27, X = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, Q = R === null || R <= 0 || !j ? null : Math.min(j / R, 1)), l.$$.dirty[0] & /*progress*/
    128 && w != null && t(18, ie = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (w != null ? t(14, O = w.map((A) => {
      if (A.index != null && A.length != null)
        return A.index / A.length;
      if (A.progress != null)
        return A.progress;
    })) : t(14, O = null), O ? (t(15, P = O[O.length - 1]), H && (P === 0 ? t(16, H.style.transition = "0", H) : t(16, H.style.transition = "150ms", H))) : t(15, P = void 0)), l.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? we() : D()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && B && _ && (c === "pending" || c === "complete") && Lc(B, C), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = j.toFixed(1));
  }, [
    a,
    r,
    f,
    u,
    c,
    d,
    h,
    w,
    g,
    p,
    m,
    k,
    y,
    B,
    O,
    P,
    H,
    Q,
    ie,
    ue,
    n,
    s,
    _,
    b,
    C,
    q,
    j,
    X,
    R,
    o,
    i,
    pe,
    Ye,
    Ue
  ];
}
class Dc extends cc {
  constructor(e) {
    super(), _c(
      this,
      e,
      Rc,
      Mc,
      dc,
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
const { setContext: j0, getContext: Tc } = window.__gradio__svelte__internal, Ic = "WORKER_PROXY_CONTEXT_KEY";
function js() {
  return Tc(Ic);
}
function Hc(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function Fs(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Xs(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!Hc(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function jc(l) {
  if (l == null || !Xs(l))
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
      type: Fs(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Fc,
  assign: cl,
  check_outros: Ys,
  compute_rest_props: So,
  create_slot: Bi,
  detach: zl,
  element: Us,
  empty: Vs,
  exclude_internal_props: Xc,
  get_all_dirty_from_scope: qi,
  get_slot_changes: Ei,
  get_spread_update: Ns,
  group_outros: Os,
  init: Yc,
  insert: Bl,
  listen: Ws,
  prevent_default: Uc,
  safe_not_equal: Vc,
  set_attributes: _l,
  transition_in: Rt,
  transition_out: Dt,
  update_slot_base: Mi
} = window.__gradio__svelte__internal, { createEventDispatcher: Nc } = window.__gradio__svelte__internal;
function Oc(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = Bi(
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
    f = cl(f, a[u]);
  return {
    c() {
      e = Us("a"), r && r.c(), _l(e, f);
    },
    m(u, c) {
      Bl(u, e, c), r && r.m(e, null), n = !0, i || (o = Ws(
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
        ) : qi(
          /*$$scope*/
          u[7]
        ),
        null
      ), _l(e, f = Ns(a, [
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
      n || (Rt(r, u), n = !0);
    },
    o(u) {
      Dt(r, u), n = !1;
    },
    d(u) {
      u && zl(e), r && r.d(u), i = !1, o();
    }
  };
}
function Wc(l) {
  let e, t, n, i;
  const o = [Zc, Pc], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Vs();
    },
    m(a, f) {
      s[e].m(a, f), Bl(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Os(), Dt(s[u], 1, 1, () => {
        s[u] = null;
      }), Ys(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Rt(t), i = !0);
    },
    o(a) {
      Dt(t), i = !1;
    },
    d(a) {
      a && zl(n), s[e].d(a);
    }
  };
}
function Pc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = Bi(
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
    a = cl(a, r[f]);
  return {
    c() {
      e = Us("a"), s && s.c(), _l(e, a);
    },
    m(f, u) {
      Bl(f, e, u), s && s.m(e, null), t = !0, n || (i = Ws(e, "click", Uc(
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
        ) : qi(
          /*$$scope*/
          f[7]
        ),
        null
      ), _l(e, a = Ns(r, [
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
      t || (Rt(s, f), t = !0);
    },
    o(f) {
      Dt(s, f), t = !1;
    },
    d(f) {
      f && zl(e), s && s.d(f), n = !1, i();
    }
  };
}
function Zc(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = Bi(
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
        ) : qi(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (Rt(n, i), e = !0);
    },
    o(i) {
      Dt(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Kc(l) {
  let e, t, n, i, o;
  const s = [Wc, Oc], r = [];
  function a(f, u) {
    return u & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Xs(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = Vs();
    },
    m(f, u) {
      r[t].m(f, u), Bl(f, i, u), o = !0;
    },
    p(f, [u]) {
      let c = t;
      t = a(f, u), t === c ? r[t].p(f, u) : (Os(), Dt(r[c], 1, 1, () => {
        r[c] = null;
      }), Ys(), n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), Rt(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (Rt(n), o = !0);
    },
    o(f) {
      Dt(n), o = !1;
    },
    d(f) {
      f && zl(i), r[t].d(f);
    }
  };
}
function Gc(l, e, t) {
  const n = ["href", "download"];
  let i = So(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(h, b, w, g) {
    function p(m) {
      return m instanceof w ? m : new w(function(k) {
        k(m);
      });
    }
    return new (w || (w = Promise))(function(m, k) {
      function y(v) {
        try {
          B(g.next(v));
        } catch (q) {
          k(q);
        }
      }
      function C(v) {
        try {
          B(g.throw(v));
        } catch (q) {
          k(q);
        }
      }
      function B(v) {
        v.done ? m(v.value) : p(v.value).then(y, C);
      }
      B((g = g.apply(h, b || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const u = Nc();
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
      }).then((w) => {
        if (w.status !== 200)
          throw new Error(`Failed to get file ${b} from the Wasm worker.`);
        const g = new Blob(
          [w.body],
          {
            type: Fs(w.headers, "content-type")
          }
        ), p = URL.createObjectURL(g), m = document.createElement("a");
        m.href = p, m.download = f, m.click(), URL.revokeObjectURL(p);
      }).finally(() => {
        t(2, c = !1);
      });
    });
  }
  return l.$$set = (h) => {
    e = cl(cl({}, e), Xc(h)), t(6, i = So(e, n)), "href" in h && t(0, a = h.href), "download" in h && t(1, f = h.download), "$$scope" in h && t(7, s = h.$$scope);
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
class Jc extends Fc {
  constructor(e) {
    super(), Yc(this, e, Gc, Kc, Vc, { href: 0, download: 1 });
  }
}
var Qc = Object.defineProperty, xc = (l, e, t) => e in l ? Qc(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Qe = (l, e, t) => (xc(l, typeof e != "symbol" ? e + "" : e, t), t), Ps = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, fn = (l, e, t) => (Ps(l, e, "read from private field"), t ? t.call(l) : e.get(l)), $c = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, e_ = (l, e, t, n) => (Ps(l, e, "write to private field"), e.set(l, t), t), rt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function t_(l, e) {
  return l.map(
    (t) => new n_({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class n_ {
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
class F0 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = fn(this, rt) + t; ; ) {
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
        e_(this, rt, t);
      },
      flush: (t) => {
        if (fn(this, rt) === "")
          return;
        const n = e.allowCR && fn(this, rt).endsWith("\r") ? fn(this, rt).slice(0, -1) : fn(this, rt);
        t.enqueue(n);
      }
    }), $c(this, rt, "");
  }
}
rt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: l_,
  append: be,
  attr: St,
  detach: Zs,
  element: zt,
  init: i_,
  insert: Ks,
  noop: zo,
  safe_not_equal: o_,
  set_data: dl,
  set_style: Jl,
  space: wi,
  text: xt,
  toggle_class: Bo
} = window.__gradio__svelte__internal, { onMount: s_, createEventDispatcher: a_, onDestroy: r_ } = window.__gradio__svelte__internal;
function qo(l) {
  let e, t, n, i, o = gn(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, u = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), c;
  return {
    c() {
      e = zt("div"), t = zt("span"), n = zt("div"), i = zt("progress"), s = xt(o), a = wi(), f = zt("span"), c = xt(u), Jl(i, "visibility", "hidden"), Jl(i, "height", "0"), Jl(i, "width", "0"), i.value = r = gn(
        /*file_to_display*/
        l[2]
      ), St(i, "max", "100"), St(i, "class", "svelte-cr2edf"), St(n, "class", "progress-bar svelte-cr2edf"), St(f, "class", "file-name svelte-cr2edf"), St(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Ks(_, e, d), be(e, t), be(t, n), be(n, i), be(i, s), be(e, a), be(e, f), be(f, c);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = gn(
        /*file_to_display*/
        _[2]
      ) + "") && dl(s, o), d & /*file_to_display*/
      4 && r !== (r = gn(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && u !== (u = /*file_to_display*/
      _[2].orig_name + "") && dl(c, u);
    },
    d(_) {
      _ && Zs(e);
    }
  };
}
function f_(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, u, c = (
    /*file_to_display*/
    l[2] && qo(l)
  );
  return {
    c() {
      e = zt("div"), t = zt("span"), n = xt("Uploading "), o = xt(i), s = wi(), a = xt(r), f = xt("..."), u = wi(), c && c.c(), St(t, "class", "uploading svelte-cr2edf"), St(e, "class", "wrap svelte-cr2edf"), Bo(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Ks(_, e, d), be(e, t), be(t, n), be(t, o), be(t, s), be(t, a), be(t, f), be(e, u), c && c.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && dl(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && dl(a, r), /*file_to_display*/
      _[2] ? c ? c.p(_, d) : (c = qo(_), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d & /*progress*/
      2 && Bo(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: zo,
    o: zo,
    d(_) {
      _ && Zs(e), c && c.d();
    }
  };
}
function gn(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function u_(l) {
  let e = 0;
  return l.forEach((t) => {
    e += gn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function c_(l, e, t) {
  var n = this && this.__awaiter || function(b, w, g, p) {
    function m(k) {
      return k instanceof g ? k : new g(function(y) {
        y(k);
      });
    }
    return new (g || (g = Promise))(function(k, y) {
      function C(q) {
        try {
          v(p.next(q));
        } catch (j) {
          y(j);
        }
      }
      function B(q) {
        try {
          v(p.throw(q));
        } catch (j) {
          y(j);
        }
      }
      function v(q) {
        q.done ? k(q.value) : m(q.value).then(C, B);
      }
      v((p = p.apply(b, w || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, u, c, _ = s.map((b) => Object.assign(Object.assign({}, b), { progress: 0 }));
  const d = a_();
  function h(b, w) {
    t(0, _ = _.map((g) => (g.orig_name === b && (g.progress += w), g)));
  }
  return s_(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(b) {
      return n(this, void 0, void 0, function* () {
        const w = JSON.parse(b.data);
        f || t(1, f = !0), w.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, u = w), h(w.orig_name, w.chunk_size));
      });
    };
  })), r_(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (b) => {
    "upload_id" in b && t(3, i = b.upload_id), "root" in b && t(4, o = b.root), "files" in b && t(5, s = b.files), "stream_handler" in b && t(6, r = b.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && u_(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
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
class __ extends l_ {
  constructor(e) {
    super(), i_(this, e, c_, f_, o_, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: d_,
  append: Eo,
  attr: fe,
  binding_callbacks: h_,
  bubble: wt,
  check_outros: Gs,
  create_component: m_,
  create_slot: Js,
  destroy_component: g_,
  detach: ql,
  element: pi,
  empty: Qs,
  get_all_dirty_from_scope: xs,
  get_slot_changes: $s,
  group_outros: ea,
  init: b_,
  insert: El,
  listen: ke,
  mount_component: w_,
  prevent_default: pt,
  run_all: p_,
  safe_not_equal: v_,
  set_style: ta,
  space: k_,
  stop_propagation: vt,
  toggle_class: le,
  transition_in: dt,
  transition_out: Tt,
  update_slot_base: na
} = window.__gradio__svelte__internal, { createEventDispatcher: y_, tick: C_ } = window.__gradio__svelte__internal;
function S_(l) {
  let e, t, n, i, o, s, r, a, f, u, c;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Js(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = pi("button"), d && d.c(), t = k_(), n = pi("input"), fe(n, "aria-label", "file upload"), fe(n, "data-testid", "file-upload"), fe(n, "type", "file"), fe(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, fe(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), fe(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), fe(n, "class", "svelte-1s26xmt"), fe(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), fe(e, "class", "svelte-1s26xmt"), le(
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
      ), ta(e, "height", "100%");
    },
    m(h, b) {
      El(h, e, b), d && d.m(e, null), Eo(e, t), Eo(e, n), l[34](n), f = !0, u || (c = [
        ke(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        ke(e, "drag", vt(pt(
          /*drag_handler*/
          l[27]
        ))),
        ke(e, "dragstart", vt(pt(
          /*dragstart_handler*/
          l[28]
        ))),
        ke(e, "dragend", vt(pt(
          /*dragend_handler*/
          l[29]
        ))),
        ke(e, "dragover", vt(pt(
          /*dragover_handler*/
          l[30]
        ))),
        ke(e, "dragenter", vt(pt(
          /*dragenter_handler*/
          l[31]
        ))),
        ke(e, "dragleave", vt(pt(
          /*dragleave_handler*/
          l[32]
        ))),
        ke(e, "drop", vt(pt(
          /*drop_handler*/
          l[33]
        ))),
        ke(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        ke(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        ke(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        ke(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], u = !0);
    },
    p(h, b) {
      d && d.p && (!f || b[0] & /*$$scope*/
      33554432) && na(
        d,
        _,
        h,
        /*$$scope*/
        h[25],
        f ? $s(
          _,
          /*$$scope*/
          h[25],
          b,
          null
        ) : xs(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!f || b[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      h[16] || void 0)) && fe(n, "accept", i), (!f || b[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = o), (!f || b[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      h[6] === "directory" || void 0)) && fe(n, "webkitdirectory", s), (!f || b[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && fe(n, "mozdirectory", r), (!f || b[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      h[9] ? -1 : 0)) && fe(e, "tabindex", a), (!f || b[0] & /*hidden*/
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
      Tt(d, h), f = !1;
    },
    d(h) {
      h && ql(e), d && d.d(h), l[34](null), u = !1, p_(c);
    }
  };
}
function z_(l) {
  let e, t, n = !/*hidden*/
  l[9] && Mo(l);
  return {
    c() {
      n && n.c(), e = Qs();
    },
    m(i, o) {
      n && n.m(i, o), El(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (ea(), Tt(n, 1, 1, () => {
        n = null;
      }), Gs()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && dt(n, 1)) : (n = Mo(i), n.c(), dt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (dt(n), t = !0);
    },
    o(i) {
      Tt(n), t = !1;
    },
    d(i) {
      i && ql(e), n && n.d(i);
    }
  };
}
function B_(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = Js(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = pi("button"), r && r.c(), fe(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), fe(e, "class", "svelte-1s26xmt"), le(
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
      ), ta(e, "height", "100%");
    },
    m(a, f) {
      El(a, e, f), r && r.m(e, null), n = !0, i || (o = ke(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && na(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? $s(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : xs(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && fe(e, "tabindex", t), (!n || f[0] & /*hidden*/
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
      Tt(r, a), n = !1;
    },
    d(a) {
      a && ql(e), r && r.d(a), i = !1, o();
    }
  };
}
function Mo(l) {
  let e, t;
  return e = new __({
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
      m_(e.$$.fragment);
    },
    m(n, i) {
      w_(e, n, i), t = !0;
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
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      g_(e, n);
    }
  };
}
function q_(l) {
  let e, t, n, i;
  const o = [B_, z_, S_], s = [];
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
      t.c(), n = Qs();
    },
    m(a, f) {
      s[e].m(a, f), El(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (ea(), Tt(s[u], 1, 1, () => {
        s[u] = null;
      }), Gs(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), dt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (dt(t), i = !0);
    },
    o(a) {
      Tt(t), i = !1;
    },
    d(a) {
      a && ql(n), s[e].d(a);
    }
  };
}
function E_(l, e, t) {
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
function M_(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(M, Y, S, W) {
    function G(Me) {
      return Me instanceof S ? Me : new S(function(E) {
        E(Me);
      });
    }
    return new (S || (S = Promise))(function(Me, E) {
      function Ae(Le) {
        try {
          _e(W.next(Le));
        } catch (Re) {
          E(Re);
        }
      }
      function ae(Le) {
        try {
          _e(W.throw(Le));
        } catch (Re) {
          E(Re);
        }
      }
      function _e(Le) {
        Le.done ? Me(Le.value) : G(Le.value).then(Ae, ae);
      }
      _e((W = W.apply(M, Y || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: b = "file" } = e, { uploading: w = !1 } = e, { hidden_upload: g = null } = e, { show_progress: p = !0 } = e, { max_file_size: m = null } = e, { upload: k } = e, { stream_handler: y } = e, C, B, v;
  const q = y_(), j = ["image", "video", "audio", "text", "file"], X = (M) => M.startsWith(".") || M.endsWith("/*") ? M : j.includes(M) ? M + "/*" : "." + M;
  function R() {
    t(20, r = !r);
  }
  function Q() {
    navigator.clipboard.read().then((M) => o(this, void 0, void 0, function* () {
      for (let Y = 0; Y < M.length; Y++) {
        const S = M[Y].types.find((W) => W.startsWith("image/"));
        if (S) {
          M[Y].getType(S).then((W) => o(this, void 0, void 0, function* () {
            const G = new File([W], `clipboard.${S.replace("image/", "")}`);
            yield H([G]);
          }));
          break;
        }
      }
    }));
  }
  function O() {
    _ || g && (t(2, g.value = "", g), g.click());
  }
  function P(M) {
    return o(this, void 0, void 0, function* () {
      yield C_(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, w = !0);
      try {
        const Y = yield k(M, d, C, m ?? 1 / 0);
        return q("load", c === "single" ? Y == null ? void 0 : Y[0] : Y), t(1, w = !1), Y || [];
      } catch (Y) {
        return q("error", Y.message), t(1, w = !1), [];
      }
    });
  }
  function H(M) {
    return o(this, void 0, void 0, function* () {
      if (!M.length)
        return;
      let Y = M.map((S) => new File([S], S instanceof File ? S.name : "file", { type: S.type }));
      return t(15, B = yield t_(Y)), yield P(B);
    });
  }
  function ie(M) {
    return o(this, void 0, void 0, function* () {
      const Y = M.target;
      if (Y.files)
        if (b != "blob")
          yield H(Array.from(Y.files));
        else {
          if (c === "single") {
            q("load", Y.files[0]);
            return;
          }
          q("load", Y.files);
        }
    });
  }
  function we(M) {
    return o(this, void 0, void 0, function* () {
      var Y;
      if (t(20, r = !1), !(!((Y = M.dataTransfer) === null || Y === void 0) && Y.files)) return;
      const S = Array.from(M.dataTransfer.files).filter((W) => {
        const G = "." + W.name.split(".").pop();
        return G && E_(v, G, W.type) || (G && Array.isArray(s) ? s.includes(G) : G === s) ? !0 : (q("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield H(S);
    });
  }
  function oe(M) {
    wt.call(this, l, M);
  }
  function D(M) {
    wt.call(this, l, M);
  }
  function ue(M) {
    wt.call(this, l, M);
  }
  function pe(M) {
    wt.call(this, l, M);
  }
  function Ye(M) {
    wt.call(this, l, M);
  }
  function Ue(M) {
    wt.call(this, l, M);
  }
  function A(M) {
    wt.call(this, l, M);
  }
  function Je(M) {
    h_[M ? "unshift" : "push"](() => {
      g = M, t(2, g);
    });
  }
  return l.$$set = (M) => {
    "filetype" in M && t(0, s = M.filetype), "dragging" in M && t(20, r = M.dragging), "boundedheight" in M && t(3, a = M.boundedheight), "center" in M && t(4, f = M.center), "flex" in M && t(5, u = M.flex), "file_count" in M && t(6, c = M.file_count), "disable_click" in M && t(7, _ = M.disable_click), "root" in M && t(8, d = M.root), "hidden" in M && t(9, h = M.hidden), "format" in M && t(21, b = M.format), "uploading" in M && t(1, w = M.uploading), "hidden_upload" in M && t(2, g = M.hidden_upload), "show_progress" in M && t(10, p = M.show_progress), "max_file_size" in M && t(22, m = M.max_file_size), "upload" in M && t(23, k = M.upload), "stream_handler" in M && t(11, y = M.stream_handler), "$$scope" in M && t(25, i = M.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, v = null) : typeof s == "string" ? t(16, v = X(s)) : (t(0, s = s.map(X)), t(16, v = s.join(", "))));
  }, [
    s,
    w,
    g,
    a,
    f,
    u,
    c,
    _,
    d,
    h,
    p,
    y,
    Q,
    O,
    C,
    B,
    v,
    R,
    ie,
    we,
    r,
    b,
    m,
    k,
    H,
    i,
    n,
    oe,
    D,
    ue,
    pe,
    Ye,
    Ue,
    A,
    Je
  ];
}
class A_ extends d_ {
  constructor(e) {
    super(), b_(
      this,
      e,
      M_,
      q_,
      v_,
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
  SvelteComponent: L_,
  append: ot,
  attr: L,
  detach: R_,
  init: D_,
  insert: T_,
  noop: Ql,
  safe_not_equal: I_,
  set_style: st,
  svg_element: xe
} = window.__gradio__svelte__internal;
function H_(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = xe("svg"), t = xe("rect"), n = xe("rect"), i = xe("rect"), o = xe("rect"), s = xe("line"), r = xe("line"), a = xe("line"), f = xe("line"), L(t, "x", "2"), L(t, "y", "2"), L(t, "width", "5"), L(t, "height", "5"), L(t, "rx", "1"), L(t, "ry", "1"), L(t, "stroke-width", "2"), L(t, "fill", "none"), L(n, "x", "17"), L(n, "y", "2"), L(n, "width", "5"), L(n, "height", "5"), L(n, "rx", "1"), L(n, "ry", "1"), L(n, "stroke-width", "2"), L(n, "fill", "none"), L(i, "x", "2"), L(i, "y", "17"), L(i, "width", "5"), L(i, "height", "5"), L(i, "rx", "1"), L(i, "ry", "1"), L(i, "stroke-width", "2"), L(i, "fill", "none"), L(o, "x", "17"), L(o, "y", "17"), L(o, "width", "5"), L(o, "height", "5"), L(o, "rx", "1"), L(o, "ry", "1"), L(o, "stroke-width", "2"), L(o, "fill", "none"), L(s, "x1", "7.5"), L(s, "y1", "4.5"), L(s, "x2", "16"), L(s, "y2", "4.5"), st(s, "stroke-width", "2px"), L(r, "x1", "7.5"), L(r, "y1", "19.5"), L(r, "x2", "16"), L(r, "y2", "19.5"), st(r, "stroke-width", "2px"), L(a, "x1", "4.5"), L(a, "y1", "8"), L(a, "x2", "4.5"), L(a, "y2", "16"), st(a, "stroke-width", "2px"), L(f, "x1", "19.5"), L(f, "y1", "8"), L(f, "x2", "19.5"), L(f, "y2", "16"), st(f, "stroke-width", "2px"), L(e, "width", "100%"), L(e, "height", "100%"), L(e, "viewBox", "0 0 24 24"), L(e, "version", "1.1"), L(e, "xmlns", "http://www.w3.org/2000/svg"), L(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), L(e, "xml:space", "preserve"), L(e, "stroke", "currentColor"), st(e, "fill-rule", "evenodd"), st(e, "clip-rule", "evenodd"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round");
    },
    m(u, c) {
      T_(u, e, c), ot(e, t), ot(e, n), ot(e, i), ot(e, o), ot(e, s), ot(e, r), ot(e, a), ot(e, f);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(u) {
      u && R_(e);
    }
  };
}
class j_ extends L_ {
  constructor(e) {
    super(), D_(this, e, null, H_, I_, {});
  }
}
const {
  SvelteComponent: F_,
  append: X_,
  attr: He,
  detach: Y_,
  init: U_,
  insert: V_,
  noop: xl,
  safe_not_equal: N_,
  set_style: Pn,
  svg_element: Ao
} = window.__gradio__svelte__internal;
function O_(l) {
  let e, t;
  return {
    c() {
      e = Ao("svg"), t = Ao("path"), He(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), He(t, "fill", "none"), He(t, "stroke-width", "2"), He(e, "width", "100%"), He(e, "height", "100%"), He(e, "viewBox", "0 0 24 24"), He(e, "version", "1.1"), He(e, "xmlns", "http://www.w3.org/2000/svg"), He(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), He(e, "xml:space", "preserve"), He(e, "stroke", "currentColor"), Pn(e, "fill-rule", "evenodd"), Pn(e, "clip-rule", "evenodd"), Pn(e, "stroke-linecap", "round"), Pn(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      V_(n, e, i), X_(e, t);
    },
    p: xl,
    i: xl,
    o: xl,
    d(n) {
      n && Y_(e);
    }
  };
}
class W_ extends F_ {
  constructor(e) {
    super(), U_(this, e, null, O_, N_, {});
  }
}
const {
  SvelteComponent: P_,
  append: Z_,
  attr: je,
  detach: K_,
  init: G_,
  insert: J_,
  noop: $l,
  safe_not_equal: Q_,
  set_style: Zn,
  svg_element: Lo
} = window.__gradio__svelte__internal;
function x_(l) {
  let e, t;
  return {
    c() {
      e = Lo("svg"), t = Lo("path"), je(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), je(t, "fill", "none"), je(t, "stroke-width", "2"), je(e, "width", "100%"), je(e, "height", "100%"), je(e, "viewBox", "0 0 24 24"), je(e, "version", "1.1"), je(e, "xmlns", "http://www.w3.org/2000/svg"), je(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), je(e, "xml:space", "preserve"), je(e, "stroke", "currentColor"), Zn(e, "fill-rule", "evenodd"), Zn(e, "clip-rule", "evenodd"), Zn(e, "stroke-linecap", "round"), Zn(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      J_(n, e, i), Z_(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && K_(e);
    }
  };
}
class $_ extends P_ {
  constructor(e) {
    super(), G_(this, e, null, x_, Q_, {});
  }
}
const {
  SvelteComponent: ed,
  append: Ro,
  attr: ei,
  bubble: Do,
  create_component: td,
  destroy_component: nd,
  detach: la,
  element: To,
  init: ld,
  insert: ia,
  listen: ti,
  mount_component: id,
  run_all: od,
  safe_not_equal: sd,
  set_data: ad,
  set_input_value: Io,
  space: rd,
  text: fd,
  transition_in: ud,
  transition_out: cd
} = window.__gradio__svelte__internal, { createEventDispatcher: _d, afterUpdate: dd } = window.__gradio__svelte__internal;
function hd(l) {
  let e;
  return {
    c() {
      e = fd(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      ia(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && ad(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && la(e);
    }
  };
}
function md(l) {
  let e, t, n, i, o, s, r;
  return t = new ms({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [hd] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = To("label"), td(t.$$.fragment), n = rd(), i = To("input"), ei(i, "type", "color"), i.disabled = /*disabled*/
      l[3], ei(i, "class", "svelte-16l8u73"), ei(e, "class", "block");
    },
    m(a, f) {
      ia(a, e, f), id(t, e, null), Ro(e, n), Ro(e, i), Io(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        ti(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        ti(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        ti(
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
      1 && Io(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (ud(t.$$.fragment, a), o = !0);
    },
    o(a) {
      cd(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && la(e), nd(t), s = !1, od(r);
    }
  };
}
function gd(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = _d();
  function u() {
    f("change", n), i || f("input");
  }
  dd(() => {
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
class bd extends ed {
  constructor(e) {
    super(), ld(this, e, gd, md, sd, {
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
  SvelteComponent: wd,
  append: oa,
  attr: Z,
  bubble: pd,
  check_outros: vd,
  create_slot: sa,
  detach: Tn,
  element: Ml,
  empty: kd,
  get_all_dirty_from_scope: aa,
  get_slot_changes: ra,
  group_outros: yd,
  init: Cd,
  insert: In,
  listen: Sd,
  safe_not_equal: zd,
  set_style: ge,
  space: fa,
  src_url_equal: hl,
  toggle_class: $t,
  transition_in: ml,
  transition_out: gl,
  update_slot_base: ua
} = window.__gradio__svelte__internal;
function Bd(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && Ho(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = sa(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = Ml("button"), r && r.c(), t = fa(), f && f.c(), Z(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), Z(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], $t(e, "hidden", !/*visible*/
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
      In(u, e, c), r && r.m(e, null), oa(e, t), f && f.m(e, null), i = !0, o || (s = Sd(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? r ? r.p(u, c) : (r = Ho(u), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || c & /*$$scope*/
      2048) && ua(
        f,
        a,
        u,
        /*$$scope*/
        u[11],
        i ? ra(
          a,
          /*$$scope*/
          u[11],
          c,
          null
        ) : aa(
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
      30) && $t(e, "hidden", !/*visible*/
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
      i || (ml(f, u), i = !0);
    },
    o(u) {
      gl(f, u), i = !1;
    },
    d(u) {
      u && Tn(e), r && r.d(), f && f.d(u), o = !1, s();
    }
  };
}
function qd(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && jo(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = sa(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = Ml("a"), o && o.c(), t = fa(), r && r.c(), Z(
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
      ), $t(e, "hidden", !/*visible*/
      l[2]), $t(
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
      In(a, e, f), o && o.m(e, null), oa(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = jo(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && ua(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? ra(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : aa(
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
      30) && $t(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && $t(
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
      i || (ml(r, a), i = !0);
    },
    o(a) {
      gl(r, a), i = !1;
    },
    d(a) {
      a && Tn(e), o && o.d(), r && r.d(a);
    }
  };
}
function Ho(l) {
  let e, t, n;
  return {
    c() {
      e = Ml("img"), Z(e, "class", "button-icon svelte-8huxfn"), hl(e.src, t = /*icon*/
      l[7].url) || Z(e, "src", t), Z(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      In(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !hl(e.src, t = /*icon*/
      i[7].url) && Z(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && Z(e, "alt", n);
    },
    d(i) {
      i && Tn(e);
    }
  };
}
function jo(l) {
  let e, t, n;
  return {
    c() {
      e = Ml("img"), Z(e, "class", "button-icon svelte-8huxfn"), hl(e.src, t = /*icon*/
      l[7].url) || Z(e, "src", t), Z(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      In(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !hl(e.src, t = /*icon*/
      i[7].url) && Z(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && Z(e, "alt", n);
    },
    d(i) {
      i && Tn(e);
    }
  };
}
function Ed(l) {
  let e, t, n, i;
  const o = [qd, Bd], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = kd();
    },
    m(a, f) {
      s[e].m(a, f), In(a, n, f), i = !0;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (yd(), gl(s[u], 1, 1, () => {
        s[u] = null;
      }), vd(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), ml(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ml(t), i = !0);
    },
    o(a) {
      gl(t), i = !1;
    },
    d(a) {
      a && Tn(n), s[e].d(a);
    }
  };
}
function Md(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: u = null } = e, { link: c = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e;
  function w(g) {
    pd.call(this, l, g);
  }
  return l.$$set = (g) => {
    "elem_id" in g && t(0, o = g.elem_id), "elem_classes" in g && t(1, s = g.elem_classes), "visible" in g && t(2, r = g.visible), "variant" in g && t(3, a = g.variant), "size" in g && t(4, f = g.size), "value" in g && t(5, u = g.value), "link" in g && t(6, c = g.link), "icon" in g && t(7, _ = g.icon), "disabled" in g && t(8, d = g.disabled), "scale" in g && t(9, h = g.scale), "min_width" in g && t(10, b = g.min_width), "$$scope" in g && t(11, i = g.$$scope);
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
    w
  ];
}
class vi extends wd {
  constructor(e) {
    super(), Cd(this, e, Md, Ed, zd, {
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
  SvelteComponent: Ad,
  add_render_callback: ca,
  append: Kn,
  attr: Ce,
  binding_callbacks: Fo,
  check_outros: Ld,
  create_bidirectional_transition: Xo,
  destroy_each: Rd,
  detach: Sn,
  element: bl,
  empty: Dd,
  ensure_array_like: Yo,
  group_outros: Td,
  init: Id,
  insert: zn,
  listen: ki,
  prevent_default: Hd,
  run_all: jd,
  safe_not_equal: Fd,
  set_data: Xd,
  set_style: Ot,
  space: yi,
  text: Yd,
  toggle_class: Oe,
  transition_in: ni,
  transition_out: Uo
} = window.__gradio__svelte__internal, { createEventDispatcher: Ud } = window.__gradio__svelte__internal;
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
      e = bl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ce(e, "class", "options svelte-yuohum"), Ce(e, "role", "listbox"), Ot(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Ot(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Ot(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      zn(a, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      l[22](e), n = !0, i || (o = ki(e, "mousedown", Hd(
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
      512 && Ot(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Ot(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Ot(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && ca(() => {
        n && (t || (t = Xo(e, to, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Xo(e, to, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Sn(e), Rd(r, a), l[22](null), a && t && t.end(), i = !1, o();
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
      e = bl("li"), t = bl("span"), t.textContent = "✓", n = yi(), o = Yd(i), s = yi(), Ce(t, "class", "inner-item svelte-yuohum"), Oe(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ce(e, "class", "item svelte-yuohum"), Ce(e, "data-index", r = /*index*/
      l[26]), Ce(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Ce(e, "data-testid", "dropdown-option"), Ce(e, "role", "option"), Ce(e, "aria-selected", f = /*selected_indices*/
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
      zn(u, e, c), Kn(e, t), Kn(e, n), Kn(e, o), Kn(e, s);
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
      ][0] + "") && Xd(o, i), c & /*filtered_indices*/
      2 && r !== (r = /*index*/
      u[26]) && Ce(e, "data-index", r), c & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0]) && Ce(e, "aria-label", a), c & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )) && Ce(e, "aria-selected", f), c & /*selected_indices, filtered_indices*/
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
      u && Sn(e);
    }
  };
}
function Vd(l) {
  let e, t, n, i, o;
  ca(
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
      e = bl("div"), t = yi(), s && s.c(), n = Dd(), Ce(e, "class", "reference");
    },
    m(r, a) {
      zn(r, e, a), l[20](e), zn(r, t, a), s && s.m(r, a), zn(r, n, a), i || (o = [
        ki(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        ki(
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
      12 && ni(s, 1)) : (s = No(r), s.c(), ni(s, 1), s.m(n.parentNode, n)) : s && (Td(), Uo(s, 1, 1, () => {
        s = null;
      }), Ld());
    },
    i(r) {
      ni(s);
    },
    o(r) {
      Uo(s);
    },
    d(r) {
      r && (Sn(e), Sn(t), Sn(n)), l[20](null), s && s.d(r), i = !1, jd(o);
    }
  };
}
function Nd(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: u = null } = e, c, _, d, h, b, w, g, p, m;
  function k() {
    const { top: R, bottom: Q } = b.getBoundingClientRect();
    t(16, c = R), t(17, _ = m - Q);
  }
  let y = null;
  function C() {
    r && (y !== null && clearTimeout(y), y = setTimeout(
      () => {
        k(), y = null;
      },
      10
    ));
  }
  const B = Ud();
  function v() {
    t(11, m = window.innerHeight);
  }
  function q(R) {
    Fo[R ? "unshift" : "push"](() => {
      b = R, t(6, b);
    });
  }
  const j = (R) => B("change", R);
  function X(R) {
    Fo[R ? "unshift" : "push"](() => {
      w = R, t(7, w);
    });
  }
  return l.$$set = (R) => {
    "choices" in R && t(0, o = R.choices), "filtered_indices" in R && t(1, s = R.filtered_indices), "show_options" in R && t(2, r = R.show_options), "disabled" in R && t(3, a = R.disabled), "selected_indices" in R && t(4, f = R.selected_indices), "active_index" in R && t(5, u = R.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && b) {
        if (w && f.length > 0) {
          let Q = w.querySelectorAll("li");
          for (const O of Array.from(Q))
            if (O.getAttribute("data-index") === f[0].toString()) {
              t(14, n = w == null ? void 0 : w.scrollTo) === null || n === void 0 || n.call(w, 0, O.offsetTop);
              break;
            }
        }
        k();
        const R = t(15, i = b.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (R == null ? void 0 : R.height) || 0), t(8, h = (R == null ? void 0 : R.width) || 0);
      }
      _ > c ? (t(10, p = _), t(9, g = null)) : (t(9, g = `${_ + d}px`), t(10, p = c - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    b,
    w,
    h,
    g,
    p,
    m,
    C,
    B,
    n,
    i,
    c,
    _,
    d,
    v,
    q,
    j,
    X
  ];
}
class Od extends Ad {
  constructor(e) {
    super(), Id(this, e, Nd, Vd, Fd, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Wd(l, e) {
  return (l % e + e) % e;
}
function Wo(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Pd(l, e, t) {
  l("change", e), t || l("input");
}
function Zd(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Wd(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Kd,
  append: kt,
  attr: ye,
  binding_callbacks: Gd,
  check_outros: Jd,
  create_component: Ci,
  destroy_component: Si,
  detach: Ai,
  element: Zt,
  group_outros: Qd,
  init: xd,
  insert: Li,
  listen: un,
  mount_component: zi,
  run_all: $d,
  safe_not_equal: e1,
  set_data: t1,
  set_input_value: Po,
  space: li,
  text: n1,
  toggle_class: Wt,
  transition_in: Kt,
  transition_out: bn
} = window.__gradio__svelte__internal, { onMount: l1 } = window.__gradio__svelte__internal, { createEventDispatcher: i1, afterUpdate: o1 } = window.__gradio__svelte__internal;
function s1(l) {
  let e;
  return {
    c() {
      e = n1(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      Li(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && t1(
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
  return t = new Yf({}), {
    c() {
      e = Zt("div"), Ci(t.$$.fragment), ye(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      Li(i, e, o), zi(t, e, null), n = !0;
    },
    i(i) {
      n || (Kt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      bn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ai(e), Si(t);
    }
  };
}
function a1(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, h;
  t = new ms({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [s1] },
      $$scope: { ctx: l }
    }
  });
  let b = !/*disabled*/
  l[3] && Zo();
  return c = new Od({
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
      e = Zt("div"), Ci(t.$$.fragment), n = li(), i = Zt("div"), o = Zt("div"), s = Zt("div"), r = Zt("input"), f = li(), b && b.c(), u = li(), Ci(c.$$.fragment), ye(r, "role", "listbox"), ye(r, "aria-controls", "dropdown-options"), ye(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), ye(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), ye(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], ye(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], Wt(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), ye(s, "class", "secondary-wrap svelte-1m1zvyj"), ye(o, "class", "wrap-inner svelte-1m1zvyj"), Wt(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), ye(i, "class", "wrap svelte-1m1zvyj"), ye(e, "class", "svelte-1m1zvyj"), Wt(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(w, g) {
      Li(w, e, g), zi(t, e, null), kt(e, n), kt(e, i), kt(i, o), kt(o, s), kt(s, r), Po(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), kt(s, f), b && b.m(s, null), kt(i, u), zi(c, i, null), _ = !0, d || (h = [
        un(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        un(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        un(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        un(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        un(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(w, g) {
      const p = {};
      g[0] & /*show_label*/
      16 && (p.show_label = /*show_label*/
      w[4]), g[0] & /*info*/
      2 && (p.info = /*info*/
      w[1]), g[0] & /*label*/
      1 | g[1] & /*$$scope*/
      4 && (p.$$scope = { dirty: g, ctx: w }), t.$set(p), (!_ || g[0] & /*show_options*/
      4096) && ye(
        r,
        "aria-expanded",
        /*show_options*/
        w[12]
      ), (!_ || g[0] & /*label*/
      1) && ye(
        r,
        "aria-label",
        /*label*/
        w[0]
      ), (!_ || g[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      w[3]), (!_ || g[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      w[7])) && (r.readOnly = a), g[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      w[9] && Po(
        r,
        /*input_text*/
        w[9]
      ), (!_ || g[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Wt(r, "subdued", !/*choices_names*/
      w[13].includes(
        /*input_text*/
        w[9]
      ) && !/*allow_custom_value*/
      w[6]), /*disabled*/
      w[3] ? b && (Qd(), bn(b, 1, 1, () => {
        b = null;
      }), Jd()) : b ? g[0] & /*disabled*/
      8 && Kt(b, 1) : (b = Zo(), b.c(), Kt(b, 1), b.m(s, null)), (!_ || g[0] & /*show_options*/
      4096) && Wt(
        o,
        "show_options",
        /*show_options*/
        w[12]
      );
      const m = {};
      g[0] & /*show_options*/
      4096 && (m.show_options = /*show_options*/
      w[12]), g[0] & /*choices*/
      4 && (m.choices = /*choices*/
      w[2]), g[0] & /*filtered_indices*/
      1024 && (m.filtered_indices = /*filtered_indices*/
      w[10]), g[0] & /*disabled*/
      8 && (m.disabled = /*disabled*/
      w[3]), g[0] & /*selected_index*/
      2048 && (m.selected_indices = /*selected_index*/
      w[11] === null ? [] : [
        /*selected_index*/
        w[11]
      ]), g[0] & /*active_index*/
      16384 && (m.active_index = /*active_index*/
      w[14]), c.$set(m), (!_ || g[0] & /*container*/
      32) && Wt(
        e,
        "container",
        /*container*/
        w[5]
      );
    },
    i(w) {
      _ || (Kt(t.$$.fragment, w), Kt(b), Kt(c.$$.fragment, w), _ = !0);
    },
    o(w) {
      bn(t.$$.fragment, w), bn(b), bn(c.$$.fragment, w), _ = !1;
    },
    d(w) {
      w && Ai(e), Si(t), l[29](null), b && b.d(), Si(c), d = !1, $d(h);
    }
  };
}
function r1(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: u = !1 } = e, { show_label: c } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, b, w = !1, g, p, m = "", k = "", y = !1, C = [], B = null, v = null, q;
  const j = i1();
  o ? (q = a.map((D) => D[1]).indexOf(o), v = q, v === -1 ? (s = o, v = null) : ([m, s] = a[v], k = m), R()) : a.length > 0 && (q = 0, v = 0, [m, o] = a[v], s = o, k = m);
  function X() {
    t(13, g = a.map((D) => D[0])), t(24, p = a.map((D) => D[1]));
  }
  function R() {
    X(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, m = ""), t(11, v = null)) : p.includes(o) ? (t(9, m = g[p.indexOf(o)]), t(11, v = p.indexOf(o))) : d ? (t(9, m = o), t(11, v = null)) : (t(9, m = ""), t(11, v = null)), t(27, q = v);
  }
  function Q(D) {
    if (t(11, v = parseInt(D.detail.target.dataset.index)), isNaN(v)) {
      t(11, v = null);
      return;
    }
    t(12, w = !1), t(14, B = null), b.blur();
  }
  function O(D) {
    t(10, C = a.map((ue, pe) => pe)), t(12, w = !0), j("focus");
  }
  function P() {
    d ? t(20, o = m) : t(9, m = g[p.indexOf(o)]), t(12, w = !1), t(14, B = null), j("blur");
  }
  function H(D) {
    t(12, [w, B] = Zd(D, B, C), w, (t(14, B), t(2, a), t(23, f), t(6, d), t(9, m), t(10, C), t(8, b), t(25, k), t(11, v), t(27, q), t(26, y), t(24, p))), D.key === "Enter" && (B !== null ? (t(11, v = B), t(12, w = !1), b.blur(), t(14, B = null)) : g.includes(m) ? (t(11, v = g.indexOf(m)), t(12, w = !1), t(14, B = null), b.blur()) : d && (t(20, o = m), t(11, v = null), t(12, w = !1), t(14, B = null), b.blur()), j("enter", o));
  }
  o1(() => {
    t(21, r = !1), t(26, y = !0);
  }), l1(() => {
    b.focus();
  });
  function ie() {
    m = this.value, t(9, m), t(11, v), t(27, q), t(26, y), t(2, a), t(24, p);
  }
  function we(D) {
    Gd[D ? "unshift" : "push"](() => {
      b = D, t(8, b);
    });
  }
  const oe = (D) => j("key_up", { key: D.key, input_value: m });
  return l.$$set = (D) => {
    "label" in D && t(0, n = D.label), "info" in D && t(1, i = D.info), "value" in D && t(20, o = D.value), "value_is_output" in D && t(21, r = D.value_is_output), "choices" in D && t(2, a = D.choices), "disabled" in D && t(3, u = D.disabled), "show_label" in D && t(4, c = D.show_label), "container" in D && t(5, _ = D.container), "allow_custom_value" in D && t(6, d = D.allow_custom_value), "filterable" in D && t(7, h = D.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && v !== q && v !== null && y && (t(9, [m, o] = a[v], m, (t(20, o), t(11, v), t(27, q), t(26, y), t(2, a), t(24, p))), t(27, q = v), j("select", {
      index: v,
      value: p[v],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (R(), Pd(j, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && X(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || R(), t(23, f = a), t(10, C = Wo(a, m)), !d && C.length > 0 && t(14, B = C[0]), b == document.activeElement && t(12, w = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && m !== k && (t(10, C = Wo(a, m)), t(25, k = m), !d && C.length > 0 && t(14, B = C[0]));
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
    C,
    v,
    w,
    g,
    B,
    j,
    Q,
    O,
    P,
    H,
    o,
    r,
    s,
    f,
    p,
    k,
    y,
    q,
    ie,
    we,
    oe
  ];
}
class f1 extends Kd {
  constructor(e) {
    super(), xd(
      this,
      e,
      r1,
      a1,
      e1,
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
  SvelteComponent: u1,
  append: We,
  attr: Gn,
  check_outros: c1,
  create_component: wn,
  destroy_component: pn,
  detach: Hn,
  element: ft,
  group_outros: _1,
  init: d1,
  insert: jn,
  mount_component: vn,
  safe_not_equal: h1,
  set_style: kn,
  space: Jn,
  text: Ri,
  transition_in: ut,
  transition_out: Ct
} = window.__gradio__svelte__internal, { createEventDispatcher: m1 } = window.__gradio__svelte__internal, { onMount: g1, onDestroy: b1 } = window.__gradio__svelte__internal;
function w1(l) {
  let e;
  return {
    c() {
      e = Ri("Cancel");
    },
    m(t, n) {
      jn(t, e, n);
    },
    d(t) {
      t && Hn(e);
    }
  };
}
function Ko(l) {
  let e, t, n;
  return t = new vi({
    props: {
      variant: "stop",
      $$slots: { default: [p1] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[12]
  ), {
    c() {
      e = ft("div"), wn(t.$$.fragment), kn(e, "margin-right", "8px");
    },
    m(i, o) {
      jn(i, e, o), vn(t, e, null), n = !0;
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
      Ct(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Hn(e), pn(t);
    }
  };
}
function p1(l) {
  let e;
  return {
    c() {
      e = Ri("Remove");
    },
    m(t, n) {
      jn(t, e, n);
    },
    d(t) {
      t && Hn(e);
    }
  };
}
function v1(l) {
  let e;
  return {
    c() {
      e = Ri("OK");
    },
    m(t, n) {
      jn(t, e, n);
    },
    d(t) {
      t && Hn(e);
    }
  };
}
function k1(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, h, b, w;
  o = new f1({
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
  ), a = new bd({
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
  ), c = new vi({
    props: {
      $$slots: { default: [w1] },
      $$scope: { ctx: l }
    }
  }), c.$on(
    "click",
    /*click_handler*/
    l[11]
  );
  let g = (
    /*showRemove*/
    l[3] && Ko(l)
  );
  return b = new vi({
    props: {
      variant: "primary",
      $$slots: { default: [v1] },
      $$scope: { ctx: l }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    l[13]
  ), {
    c() {
      e = ft("div"), t = ft("div"), n = ft("span"), i = ft("div"), wn(o.$$.fragment), s = Jn(), r = ft("div"), wn(a.$$.fragment), f = Jn(), u = ft("div"), wn(c.$$.fragment), _ = Jn(), g && g.c(), d = Jn(), h = ft("div"), wn(b.$$.fragment), kn(i, "margin-right", "10px"), kn(r, "margin-right", "40px"), kn(r, "margin-bottom", "8px"), kn(u, "margin-right", "8px"), Gn(n, "class", "model-content svelte-hkn2q1"), Gn(t, "class", "modal-container svelte-hkn2q1"), Gn(e, "class", "modal svelte-hkn2q1"), Gn(e, "id", "model-box-edit");
    },
    m(p, m) {
      jn(p, e, m), We(e, t), We(t, n), We(n, i), vn(o, i, null), We(n, s), We(n, r), vn(a, r, null), We(n, f), We(n, u), vn(c, u, null), We(n, _), g && g.m(n, null), We(n, d), We(n, h), vn(b, h, null), w = !0;
    },
    p(p, [m]) {
      const k = {};
      m & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      p[0]), m & /*choices*/
      4 && (k.choices = /*choices*/
      p[2]), o.$set(k);
      const y = {};
      m & /*currentColor*/
      2 && (y.value = /*currentColor*/
      p[1]), a.$set(y);
      const C = {};
      m & /*$$scope*/
      65536 && (C.$$scope = { dirty: m, ctx: p }), c.$set(C), /*showRemove*/
      p[3] ? g ? (g.p(p, m), m & /*showRemove*/
      8 && ut(g, 1)) : (g = Ko(p), g.c(), ut(g, 1), g.m(n, d)) : g && (_1(), Ct(g, 1, 1, () => {
        g = null;
      }), c1());
      const B = {};
      m & /*$$scope*/
      65536 && (B.$$scope = { dirty: m, ctx: p }), b.$set(B);
    },
    i(p) {
      w || (ut(o.$$.fragment, p), ut(a.$$.fragment, p), ut(c.$$.fragment, p), ut(g), ut(b.$$.fragment, p), w = !0);
    },
    o(p) {
      Ct(o.$$.fragment, p), Ct(a.$$.fragment, p), Ct(c.$$.fragment, p), Ct(g), Ct(b.$$.fragment, p), w = !1;
    },
    d(p) {
      p && Hn(e), pn(o), pn(a), pn(c), g && g.d(), pn(b);
    }
  };
}
function y1(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e;
  const u = m1();
  function c(m) {
    u("change", {
      label: i,
      color: a,
      ret: m
      // -1: remove, 0: cancel, 1: change
    });
  }
  function _(m) {
    const { detail: k } = m;
    let y = k;
    Number.isInteger(y) ? (Array.isArray(s) && y < s.length && t(1, a = s[y]), Array.isArray(o) && y < o.length && t(0, i = o[y][0])) : t(0, i = y);
  }
  function d(m) {
    const { detail: k } = m;
    t(1, a = k);
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
  g1(() => {
    document.addEventListener("keydown", b), t(0, i = n), t(1, a = r);
  }), b1(() => {
    document.removeEventListener("keydown", b);
  });
  const w = () => c(0), g = () => c(-1), p = () => c(1);
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
    w,
    g,
    p
  ];
}
class _a extends u1 {
  constructor(e) {
    super(), d1(this, e, y1, k1, h1, {
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
function ii(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class oi {
  constructor(e, t, n, i, o, s, r, a, f, u, c, _ = "rgb(255, 255, 255)", d = 0.5, h = 25, b = 8, w = 2, g = 4, p = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging) {
        let k = m.clientX - this.offsetMouseX - this.xmin, y = m.clientY - this.offsetMouseY - this.ymin;
        const C = this.canvasXmax - this.canvasXmin, B = this.canvasYmax - this.canvasYmin;
        k = ne(k, -this.xmin, C - this.xmax), y = ne(y, -this.ymin, B - this.ymax), this.xmin += k, this.ymin += y, this.xmax += k, this.ymax += y, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleCreating = (m) => {
      if (this.isCreating) {
        let [k, y] = this.toBoxCoordinates(m.clientX, m.clientY);
        k -= this.offsetMouseX, y -= this.offsetMouseY, k > this.xmax ? (this.creatingAnchorX == "xmax" && (this.xmin = this.xmax), this.xmax = k, this.creatingAnchorX = "xmin") : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmin" ? this.xmax = k : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmax" ? this.xmin = k : k < this.xmin && (this.creatingAnchorX == "xmin" && (this.xmax = this.xmin), this.xmin = k, this.creatingAnchorX = "xmax"), y > this.ymax ? (this.creatingAnchorY == "ymax" && (this.ymin = this.ymax), this.ymax = y, this.creatingAnchorY = "ymin") : y > this.ymin && y < this.ymax && this.creatingAnchorY == "ymin" ? this.ymax = y : y > this.ymin && y < this.ymax && this.creatingAnchorY == "ymax" ? this.ymin = y : y < this.ymin && (this.creatingAnchorY == "ymin" && (this.ymax = this.ymin), this.ymin = y, this.creatingAnchorY = "ymax"), this.updateHandles(), this.renderCallBack();
      }
    }, this.stopCreating = (m) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = this.canvasXmax - this.canvasXmin, y = this.canvasYmax - this.canvasYmin;
        this.xmin = ne(this.xmin, 0, k - this.minSize), this.ymin = ne(this.ymin, 0, y - this.minSize), this.xmax = ne(this.xmax, this.minSize, k), this.ymax = ne(this.ymax, this.minSize, y), this.minSize > 0 && (this.getWidth() < this.minSize && (this.creatingAnchorX == "xmin" ? this.xmax = this.xmin + this.minSize : this.xmin = this.xmax - this.minSize), this.getHeight() < this.minSize && (this.creatingAnchorY == "ymin" ? this.ymax = this.ymin + this.minSize : this.ymin = this.ymax - this.minSize), this.xmax > k ? (this.xmin -= this.xmax - k, this.xmax = k) : this.xmin < 0 && (this.xmax -= this.xmin, this.xmin = 0), this.ymax > y ? (this.ymin -= this.ymax - y, this.ymax = y) : this.ymin < 0 && (this.ymax -= this.ymin, this.ymin = 0)), this.updateHandles(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (m) => {
      if (this.isResizing) {
        const k = m.clientX, y = m.clientY, C = k - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, B = y - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, v = this.canvasXmax - this.canvasXmin, q = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += C, this.ymin += B, this.xmin = ne(this.xmin, 0, this.xmax - this.minSize), this.ymin = ne(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += C, this.ymin += B, this.xmax = ne(this.xmax, this.xmin + this.minSize, v), this.ymin = ne(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += C, this.ymax += B, this.xmax = ne(this.xmax, this.xmin + this.minSize, v), this.ymax = ne(this.ymax, this.ymin + this.minSize, q);
            break;
          case 3:
            this.xmin += C, this.ymax += B, this.xmin = ne(this.xmin, 0, this.xmax - this.minSize), this.ymax = ne(this.ymax, this.ymin + this.minSize, q);
            break;
          case 4:
            this.ymin += B, this.ymin = ne(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += C, this.xmax = ne(this.xmax, this.xmin + this.minSize, v);
            break;
          case 6:
            this.ymax += B, this.ymax = ne(this.ymax, this.ymin + this.minSize, q);
            break;
          case 7:
            this.xmin += C, this.xmin = ne(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = o, this.canvasYmax = s, this.scaleFactor = p, this.label = r, this.isDragging = !1, this.isCreating = !1, this.xmin = a, this.ymin = f, this.xmax = u, this.ymax = c, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = w, this.selectedThickness = g, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = _, this.alpha = d, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = ii(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = ii(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = ii(this.color, 1);
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
const yt = [
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
  SvelteComponent: C1,
  append: yn,
  attr: Pe,
  binding_callbacks: S1,
  bubble: Go,
  check_outros: ol,
  create_component: En,
  destroy_component: Mn,
  detach: Bt,
  element: tn,
  empty: z1,
  group_outros: sl,
  init: B1,
  insert: qt,
  listen: ct,
  mount_component: An,
  noop: q1,
  run_all: da,
  safe_not_equal: E1,
  space: Bn,
  toggle_class: Qn,
  transition_in: se,
  transition_out: Se
} = window.__gradio__svelte__internal, { onMount: M1, onDestroy: A1, createEventDispatcher: L1 } = window.__gradio__svelte__internal;
function Jo(l) {
  let e, t, n, i, o, s, r, a, f, u;
  n = new j_({}), s = new W_({});
  let c = (
    /*showRemoveButton*/
    l[1] && Qo(l)
  );
  return {
    c() {
      e = tn("span"), t = tn("button"), En(n.$$.fragment), i = Bn(), o = tn("button"), En(s.$$.fragment), r = Bn(), c && c.c(), Pe(t, "class", "icon svelte-3rql59"), Pe(t, "aria-label", "Create box"), Qn(
        t,
        "selected",
        /*mode*/
        l[8] === /*Mode*/
        l[5].creation
      ), Pe(o, "class", "icon svelte-3rql59"), Pe(o, "aria-label", "Edit boxes"), Qn(
        o,
        "selected",
        /*mode*/
        l[8] === /*Mode*/
        l[5].drag
      ), Pe(e, "class", "canvas-control svelte-3rql59");
    },
    m(_, d) {
      qt(_, e, d), yn(e, t), An(n, t, null), yn(e, i), yn(e, o), An(s, o, null), yn(e, r), c && c.m(e, null), a = !0, f || (u = [
        ct(
          t,
          "click",
          /*click_handler*/
          l[30]
        ),
        ct(
          o,
          "click",
          /*click_handler_1*/
          l[31]
        )
      ], f = !0);
    },
    p(_, d) {
      (!a || d[0] & /*mode, Mode*/
      288) && Qn(
        t,
        "selected",
        /*mode*/
        _[8] === /*Mode*/
        _[5].creation
      ), (!a || d[0] & /*mode, Mode*/
      288) && Qn(
        o,
        "selected",
        /*mode*/
        _[8] === /*Mode*/
        _[5].drag
      ), /*showRemoveButton*/
      _[1] ? c ? (c.p(_, d), d[0] & /*showRemoveButton*/
      2 && se(c, 1)) : (c = Qo(_), c.c(), se(c, 1), c.m(e, null)) : c && (sl(), Se(c, 1, 1, () => {
        c = null;
      }), ol());
    },
    i(_) {
      a || (se(n.$$.fragment, _), se(s.$$.fragment, _), se(c), a = !0);
    },
    o(_) {
      Se(n.$$.fragment, _), Se(s.$$.fragment, _), Se(c), a = !1;
    },
    d(_) {
      _ && Bt(e), Mn(n), Mn(s), c && c.d(), f = !1, da(u);
    }
  };
}
function Qo(l) {
  let e, t, n, i, o;
  return t = new $_({}), {
    c() {
      e = tn("button"), En(t.$$.fragment), Pe(e, "class", "icon svelte-3rql59"), Pe(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      qt(s, e, r), An(t, e, null), n = !0, i || (o = ct(
        e,
        "click",
        /*click_handler_2*/
        l[32]
      ), i = !0);
    },
    p: q1,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Bt(e), Mn(t), i = !1, o();
    }
  };
}
function xo(l) {
  let e, t;
  return e = new _a({
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
        l[0].boxes.length ? Ln(
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
    l[33]
  ), {
    c() {
      En(e.$$.fragment);
    },
    m(n, i) {
      An(e, n, i), t = !0;
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
      n[0].boxes.length ? Ln(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Se(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mn(e, n);
    }
  };
}
function $o(l) {
  let e, t;
  return e = new _a({
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
        l[0].boxes.length ? Ln(
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
    l[34]
  ), {
    c() {
      En(e.$$.fragment);
    },
    m(n, i) {
      An(e, n, i), t = !0;
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
      n[0].boxes.length ? Ln(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Se(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mn(e, n);
    }
  };
}
function R1(l) {
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
      e = tn("div"), t = tn("canvas"), n = Bn(), u && u.c(), i = Bn(), c && c.c(), o = Bn(), _ && _.c(), s = z1(), Pe(t, "class", "canvas-annotator svelte-3rql59"), Pe(e, "class", "canvas-container svelte-3rql59"), Pe(e, "tabindex", "-1");
    },
    m(d, h) {
      qt(d, e, h), yn(e, t), l[29](t), qt(d, n, h), u && u.m(d, h), qt(d, i, h), c && c.m(d, h), qt(d, o, h), _ && _.m(d, h), qt(d, s, h), r = !0, a || (f = [
        ct(
          t,
          "pointerdown",
          /*handlePointerDown*/
          l[11]
        ),
        ct(
          t,
          "pointerup",
          /*handlePointerUp*/
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
      4 && se(u, 1)) : (u = Jo(d), u.c(), se(u, 1), u.m(i.parentNode, i)) : u && (sl(), Se(u, 1, 1, () => {
        u = null;
      }), ol()), /*editModalVisible*/
      d[9] ? c ? (c.p(d, h), h[0] & /*editModalVisible*/
      512 && se(c, 1)) : (c = xo(d), c.c(), se(c, 1), c.m(o.parentNode, o)) : c && (sl(), Se(c, 1, 1, () => {
        c = null;
      }), ol()), /*newModalVisible*/
      d[10] ? _ ? (_.p(d, h), h[0] & /*newModalVisible*/
      1024 && se(_, 1)) : (_ = $o(d), _.c(), se(_, 1), _.m(s.parentNode, s)) : _ && (sl(), Se(_, 1, 1, () => {
        _ = null;
      }), ol());
    },
    i(d) {
      r || (se(u), se(c), se(_), r = !0);
    },
    o(d) {
      Se(u), Se(c), Se(_), r = !1;
    },
    d(d) {
      d && (Bt(e), Bt(n), Bt(i), Bt(o), Bt(s)), l[29](null), u && u.d(d), c && c.d(d), _ && _.d(d), a = !1, da(f);
    }
  };
}
function si(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Ln(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function D1(l, e, t) {
  var n;
  (function(z) {
    z[z.creation = 0] = "creation", z[z.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 25 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: u } = e, { value: c } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: h = !1 } = e, { singleBox: b = !1 } = e, { showRemoveButton: w = null } = e;
  w === null && (w = h);
  let g, p, m = null, k = -1, y = n.drag;
  c !== null && c.boxes.length == 0 && (y = n.creation);
  let C = 0, B = 0, v = 0, q = 0, j = 1, X = 0, R = 0, Q = !1, O = !1;
  const P = L1();
  function H() {
    if (p) {
      p.clearRect(0, 0, g.width, g.height), m !== null && p.drawImage(m, C, B, X, R);
      for (const z of c.boxes.slice().reverse())
        z.render(p);
    }
  }
  function ie(z) {
    t(7, k = z), c.boxes.forEach((F) => {
      F.setSelected(!1);
    }), z >= 0 && z < c.boxes.length && c.boxes[z].setSelected(!0), H();
  }
  function we(z) {
    o && (z.target instanceof Element && z.target.hasPointerCapture(z.pointerId) && z.target.releasePointerCapture(z.pointerId), y === n.creation ? pe(z) : y === n.drag && oe(z));
  }
  function oe(z) {
    const F = g.getBoundingClientRect(), ee = z.clientX - F.left, ze = z.clientY - F.top;
    for (const [de, ce] of c.boxes.entries()) {
      const Di = ce.indexOfPointInsideHandle(ee, ze);
      if (Di >= 0) {
        ie(de), ce.startResize(Di, z);
        return;
      }
    }
    for (const [de, ce] of c.boxes.entries())
      if (ce.isPointInsideBox(ee, ze)) {
        ie(de), ce.startDrag(z);
        return;
      }
    ie(-1);
  }
  function D(z) {
    P("change");
  }
  function ue(z) {
    if (o)
      switch (z.key) {
        case "Delete":
          W();
          break;
      }
  }
  function pe(z) {
    const F = g.getBoundingClientRect(), ee = (z.clientX - F.left - C) / j, ze = (z.clientY - F.top - B) / j;
    let de;
    d.length > 0 ? de = si(d[0]) : b ? c.boxes.length > 0 ? de = c.boxes[0].color : de = yt[0] : de = yt[c.boxes.length % yt.length];
    let ce = new oi(H, A, C, B, v, q, "", ee, ze, ee, ze, de, s, r, a, f, u);
    ce.startCreating(z, F.left, F.top), b ? t(0, c.boxes = [ce], c) : t(0, c.boxes = [ce, ...c.boxes], c), ie(0), H(), P("change");
  }
  function Ye() {
    t(8, y = n.creation), t(6, g.style.cursor = "crosshair", g);
  }
  function Ue() {
    t(8, y = n.drag), t(6, g.style.cursor = "default", g);
  }
  function A() {
    k >= 0 && k < c.boxes.length && (c.boxes[k].getArea() < 1 ? W() : h || t(10, O = !0));
  }
  function Je() {
    k >= 0 && k < c.boxes.length && !h && t(9, Q = !0);
  }
  function M(z) {
    o && Je();
  }
  function Y(z) {
    t(9, Q = !1);
    const { detail: F } = z;
    let ee = F.label, ze = F.color, de = F.ret;
    if (k >= 0 && k < c.boxes.length) {
      let ce = c.boxes[k];
      de == 1 ? (ce.label = ee, ce.color = si(ze), H(), P("change")) : de == -1 && W();
    }
  }
  function S(z) {
    t(10, O = !1);
    const { detail: F } = z;
    let ee = F.label, ze = F.color, de = F.ret;
    if (k >= 0 && k < c.boxes.length) {
      let ce = c.boxes[k];
      de == 1 ? (ce.label = ee, ce.color = si(ze), H(), P("change")) : W();
    }
  }
  function W() {
    k >= 0 && k < c.boxes.length && (c.boxes.splice(k, 1), ie(-1), P("change"));
  }
  function G() {
    if (g) {
      if (j = 1, t(6, g.width = g.clientWidth, g), m !== null)
        if (m.width > g.width)
          j = g.width / m.width, X = m.width * j, R = m.height * j, C = 0, B = 0, v = X, q = R, t(6, g.height = R, g);
        else {
          X = m.width, R = m.height;
          var z = (g.width - X) / 2;
          C = z, B = 0, v = z + X, q = m.height, t(6, g.height = R, g);
        }
      else
        C = 0, B = 0, v = g.width, q = g.height, t(6, g.height = g.clientHeight, g);
      if (v > 0 && q > 0)
        for (const F of c.boxes)
          F.canvasXmin = C, F.canvasYmin = B, F.canvasXmax = v, F.canvasYmax = q, F.setScaleFactor(j);
      H(), P("change");
    }
  }
  const Me = new ResizeObserver(G);
  function E() {
    for (let z = 0; z < c.boxes.length; z++) {
      let F = c.boxes[z];
      if (!(F instanceof oi)) {
        let ee = "", ze = "";
        F.hasOwnProperty("color") ? (ee = F.color, Array.isArray(ee) && ee.length === 3 && (ee = `rgb(${ee[0]}, ${ee[1]}, ${ee[2]})`)) : ee = yt[z % yt.length], F.hasOwnProperty("label") && (ze = F.label), F = new oi(H, A, C, B, v, q, ze, F.xmin, F.ymin, F.xmax, F.ymax, ee, s, r, a, f, u), t(0, c.boxes[z] = F, c);
      }
    }
  }
  function Ae() {
    i !== null && (m === null || m.src != i) && (m = new Image(), m.src = i, m.onload = function() {
      G(), H();
    });
  }
  M1(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let z = 0; z < _.length; z++) {
        let F = yt[z % yt.length];
        d.push(Ln(F));
      }
    p = g.getContext("2d"), Me.observe(g), Ae(), G(), H();
  });
  function ae() {
    document.addEventListener("keydown", ue);
  }
  function _e() {
    document.removeEventListener("keydown", ue);
  }
  A1(() => {
    document.removeEventListener("keydown", ue);
  });
  function Le(z) {
    S1[z ? "unshift" : "push"](() => {
      g = z, t(6, g);
    });
  }
  const Re = () => Ye(), Ft = () => Ue(), Al = () => W();
  function Ll(z) {
    Go.call(this, l, z);
  }
  function sn(z) {
    Go.call(this, l, z);
  }
  return l.$$set = (z) => {
    "imageUrl" in z && t(21, i = z.imageUrl), "interactive" in z && t(2, o = z.interactive), "boxAlpha" in z && t(22, s = z.boxAlpha), "boxMinSize" in z && t(23, r = z.boxMinSize), "handleSize" in z && t(24, a = z.handleSize), "boxThickness" in z && t(25, f = z.boxThickness), "boxSelectedThickness" in z && t(26, u = z.boxSelectedThickness), "value" in z && t(0, c = z.value), "choices" in z && t(3, _ = z.choices), "choicesColors" in z && t(4, d = z.choicesColors), "disableEditBoxes" in z && t(27, h = z.disableEditBoxes), "singleBox" in z && t(28, b = z.singleBox), "showRemoveButton" in z && t(1, w = z.showRemoveButton);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Ae(), E(), G(), H());
  }, [
    c,
    w,
    o,
    _,
    d,
    n,
    g,
    k,
    y,
    Q,
    O,
    we,
    D,
    Ye,
    Ue,
    M,
    Y,
    S,
    W,
    ae,
    _e,
    i,
    s,
    r,
    a,
    f,
    u,
    h,
    b,
    Le,
    Re,
    Ft,
    Al,
    Ll,
    sn
  ];
}
class T1 extends C1 {
  constructor(e) {
    super(), B1(
      this,
      e,
      D1,
      R1,
      E1,
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
        singleBox: 28,
        showRemoveButton: 1
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: I1,
  add_flush_callback: H1,
  bind: j1,
  binding_callbacks: F1,
  create_component: X1,
  destroy_component: Y1,
  init: U1,
  mount_component: V1,
  safe_not_equal: N1,
  transition_in: O1,
  transition_out: W1
} = window.__gradio__svelte__internal, { createEventDispatcher: P1 } = window.__gradio__svelte__internal;
function Z1(l) {
  let e, t, n;
  function i(s) {
    l[16](s);
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
    imageUrl: (
      /*resolved_src*/
      l[12]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new T1({ props: o }), F1.push(() => j1(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[17]
    ), {
      c() {
        X1(e.$$.fragment);
      },
      m(s, r) {
        V1(e, s, r), n = !0;
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
        s[11]), r & /*resolved_src*/
        4096 && (a.imageUrl = /*resolved_src*/
        s[12]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], H1(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (O1(e.$$.fragment, s), n = !0);
      },
      o(s) {
        W1(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Y1(e, s);
      }
    }
  );
}
function K1(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: h } = e, { showRemoveButton: b } = e, w, g;
  const p = P1();
  function m(y) {
    _ = y, t(0, _);
  }
  const k = () => p("change");
  return l.$$set = (y) => {
    "src" in y && t(14, n = y.src), "interactive" in y && t(1, i = y.interactive), "boxesAlpha" in y && t(2, o = y.boxesAlpha), "labelList" in y && t(3, s = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, f = y.handleSize), "boxThickness" in y && t(7, u = y.boxThickness), "boxSelectedThickness" in y && t(8, c = y.boxSelectedThickness), "value" in y && t(0, _ = y.value), "disableEditBoxes" in y && t(9, d = y.disableEditBoxes), "singleBox" in y && t(10, h = y.singleBox), "showRemoveButton" in y && t(11, b = y.showRemoveButton);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    49152) {
      t(12, w = n), t(15, g = n);
      const y = n;
      jc(y).then((C) => {
        g === y && t(12, w = C);
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
    p,
    n,
    g,
    m,
    k
  ];
}
class G1 extends I1 {
  constructor(e) {
    super(), U1(this, e, K1, Z1, N1, {
      src: 14,
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
      showRemoveButton: 11
    });
  }
}
class J1 {
  constructor() {
    this.boxes = [];
  }
}
const {
  SvelteComponent: Q1,
  add_flush_callback: wl,
  append: cn,
  attr: Cn,
  bind: pl,
  binding_callbacks: Rn,
  bubble: ai,
  check_outros: Gt,
  create_component: mt,
  create_slot: x1,
  destroy_component: gt,
  detach: At,
  element: qn,
  empty: $1,
  get_all_dirty_from_scope: e0,
  get_slot_changes: t0,
  group_outros: Jt,
  init: n0,
  insert: Lt,
  mount_component: bt,
  noop: l0,
  safe_not_equal: i0,
  space: Pt,
  toggle_class: es,
  transition_in: N,
  transition_out: J,
  update_slot_base: o0
} = window.__gradio__svelte__internal, { createEventDispatcher: s0 } = window.__gradio__svelte__internal;
function ts(l) {
  let e, t;
  return e = new Jc({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [a0] },
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
      8192 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
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
function a0(l) {
  let e, t;
  return e = new vl({
    props: {
      Icon: Rf,
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
  return e = new Tu({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[34]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[35]
  ), e.$on(
    "error",
    /*error_handler*/
    l[36]
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
  return t = new vl({
    props: { Icon: ws, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[32]
  ), {
    c() {
      e = qn("div"), mt(t.$$.fragment);
    },
    m(i, o) {
      Lt(i, e, o), bt(t, e, null), n = !0;
    },
    p: l0,
    i(i) {
      n || (N(t.$$.fragment, i), n = !0);
    },
    o(i) {
      J(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && At(e), gt(t);
    }
  };
}
function is(l) {
  let e;
  const t = (
    /*#slots*/
    l[33].default
  ), n = x1(
    t,
    l,
    /*$$scope*/
    l[44],
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
      8192) && o0(
        n,
        t,
        i,
        /*$$scope*/
        i[44],
        e ? t0(
          t,
          /*$$scope*/
          i[44],
          o,
          null
        ) : e0(
          /*$$scope*/
          i[44]
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
function r0(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && is(l)
  );
  return {
    c() {
      n && n.c(), e = $1();
    },
    m(i, o) {
      n && n.m(i, o), Lt(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && N(n, 1)) : (n = is(i), n.c(), N(n, 1), n.m(e.parentNode, e)) : n && (Jt(), J(n, 1, 1, () => {
        n = null;
      }), Gt());
    },
    i(i) {
      t || (N(n), t = !0);
    },
    o(i) {
      J(n), t = !1;
    },
    d(i) {
      i && At(e), n && n.d(i);
    }
  };
}
function os(l) {
  let e, t, n, i;
  function o(r) {
    l[41](r);
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
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[21]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new G1({ props: s }), Rn.push(() => pl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[42]
    ), {
      c() {
        e = qn("div"), mt(t.$$.fragment), Cn(e, "class", "image-frame svelte-1gjdske"), es(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        Lt(r, e, a), bt(t, e, null), i = !0;
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
        r[20]), a[0] & /*boxSelectedThickness*/
        2097152 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[21]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], wl(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
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
        r && At(e), gt(t);
      }
    }
  );
}
function ss(l) {
  let e, t, n;
  function i(s) {
    l[43](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*handle_clear*/
      l[29]
    ),
    handle_select: (
      /*handle_select_source*/
      l[31]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new Ju({ props: o }), Rn.push(() => pl(e, "active_source", i)), {
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
        s[0], wl(() => t = !1)), e.$set(a);
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
function f0(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new Rr({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: ps,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && ts(l)
  ), g = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && ns(l)
  ), p = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && ls(l)
  );
  function m(v) {
    l[38](v);
  }
  function k(v) {
    l[39](v);
  }
  let y = {
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
      l[22]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[23]
    ),
    stream_handler: (
      /*stream_handler*/
      l[24]
    ),
    $$slots: { default: [r0] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[25] !== void 0 && (y.uploading = /*uploading*/
  l[25]), /*dragging*/
  l[26] !== void 0 && (y.dragging = /*dragging*/
  l[26]), f = new A_({ props: y }), l[37](f), Rn.push(() => pl(f, "uploading", m)), Rn.push(() => pl(f, "dragging", k)), f.$on(
    "load",
    /*handle_upload*/
    l[28]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[40]
  );
  let C = (
    /*value*/
    l[1] !== null && os(l)
  ), B = h && ss(l);
  return {
    c() {
      mt(e.$$.fragment), t = Pt(), n = qn("div"), w && w.c(), i = Pt(), g && g.c(), o = Pt(), p && p.c(), s = Pt(), r = qn("div"), a = qn("div"), mt(f.$$.fragment), _ = Pt(), C && C.c(), d = Pt(), B && B.c(), Cn(n, "class", "icon-buttons svelte-1gjdske"), Cn(a, "class", "upload-container svelte-1gjdske"), Cn(r, "data-testid", "image"), Cn(r, "class", "image-container svelte-1gjdske");
    },
    m(v, q) {
      bt(e, v, q), Lt(v, t, q), Lt(v, n, q), w && w.m(n, null), cn(n, i), g && g.m(n, null), cn(n, o), p && p.m(n, null), Lt(v, s, q), Lt(v, r, q), cn(r, a), bt(f, a, null), cn(a, _), C && C.m(a, null), cn(r, d), B && B.m(r, null), b = !0;
    },
    p(v, q) {
      const j = {};
      q[0] & /*show_label*/
      8 && (j.show_label = /*show_label*/
      v[3]), q[0] & /*label*/
      4 && (j.label = /*label*/
      v[2] || "Image Annotator"), e.$set(j), /*showDownloadButton*/
      v[10] && /*value*/
      v[1] !== null ? w ? (w.p(v, q), q[0] & /*showDownloadButton, value*/
      1026 && N(w, 1)) : (w = ts(v), w.c(), N(w, 1), w.m(n, i)) : w && (Jt(), J(w, 1, 1, () => {
        w = null;
      }), Gt()), /*showShareButton*/
      v[9] && /*value*/
      v[1] !== null ? g ? (g.p(v, q), q[0] & /*showShareButton, value*/
      514 && N(g, 1)) : (g = ns(v), g.c(), N(g, 1), g.m(n, o)) : g && (Jt(), J(g, 1, 1, () => {
        g = null;
      }), Gt()), /*showClearButton*/
      v[11] && /*value*/
      v[1] !== null && /*interactive*/
      v[7] ? p ? (p.p(v, q), q[0] & /*showClearButton, value, interactive*/
      2178 && N(p, 1)) : (p = ls(v), p.c(), N(p, 1), p.m(n, null)) : p && (Jt(), J(p, 1, 1, () => {
        p = null;
      }), Gt());
      const X = {};
      q[0] & /*value*/
      2 && (X.hidden = /*value*/
      v[1] !== null), q[0] & /*active_source*/
      1 && (X.filetype = /*active_source*/
      v[0] === "clipboard" ? "clipboard" : "image/*"), q[0] & /*root*/
      64 && (X.root = /*root*/
      v[6]), q[0] & /*max_file_size*/
      4194304 && (X.max_file_size = /*max_file_size*/
      v[22]), q[0] & /*sources*/
      16 && (X.disable_click = !/*sources*/
      v[4].includes("upload")), q[0] & /*cli_upload*/
      8388608 && (X.upload = /*cli_upload*/
      v[23]), q[0] & /*stream_handler*/
      16777216 && (X.stream_handler = /*stream_handler*/
      v[24]), q[0] & /*value*/
      2 | q[1] & /*$$scope*/
      8192 && (X.$$scope = { dirty: q, ctx: v }), !u && q[0] & /*uploading*/
      33554432 && (u = !0, X.uploading = /*uploading*/
      v[25], wl(() => u = !1)), !c && q[0] & /*dragging*/
      67108864 && (c = !0, X.dragging = /*dragging*/
      v[26], wl(() => c = !1)), f.$set(X), /*value*/
      v[1] !== null ? C ? (C.p(v, q), q[0] & /*value*/
      2 && N(C, 1)) : (C = os(v), C.c(), N(C, 1), C.m(a, null)) : C && (Jt(), J(C, 1, 1, () => {
        C = null;
      }), Gt()), q[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (v[4].length > 1 || /*sources*/
      v[4].includes("clipboard")) && /*value*/
      v[1] === null && /*interactive*/
      v[7]), h ? B ? (B.p(v, q), q[0] & /*sources, value, interactive*/
      146 && N(B, 1)) : (B = ss(v), B.c(), N(B, 1), B.m(r, null)) : B && (Jt(), J(B, 1, 1, () => {
        B = null;
      }), Gt());
    },
    i(v) {
      b || (N(e.$$.fragment, v), N(w), N(g), N(p), N(f.$$.fragment, v), N(C), N(B), b = !0);
    },
    o(v) {
      J(e.$$.fragment, v), J(w), J(g), J(p), J(f.$$.fragment, v), J(C), J(B), b = !1;
    },
    d(v) {
      v && (At(t), At(n), At(s), At(r)), gt(e, v), w && w.d(), g && g.d(), p && p.d(), l[37](null), gt(f), C && C.d(), B && B.d();
    }
  };
}
function u0(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(E, Ae, ae, _e) {
    function Le(Re) {
      return Re instanceof ae ? Re : new ae(function(Ft) {
        Ft(Re);
      });
    }
    return new (ae || (ae = Promise))(function(Re, Ft) {
      function Al(z) {
        try {
          sn(_e.next(z));
        } catch (F) {
          Ft(F);
        }
      }
      function Ll(z) {
        try {
          sn(_e.throw(z));
        } catch (F) {
          Ft(F);
        }
      }
      function sn(z) {
        z.done ? Re(z.value) : Le(z.value).then(Al, Ll);
      }
      sn((_e = _e.apply(E, Ae || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "clipboard"] } = e, { selectable: u = !1 } = e, { root: c } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: b } = e, { showClearButton: w } = e, { boxesAlpha: g } = e, { labelList: p } = e, { labelColors: m } = e, { boxMinSize: k } = e, { handleSize: y } = e, { boxThickness: C } = e, { disableEditBoxes: B } = e, { singleBox: v } = e, { showRemoveButton: q } = e, { boxSelectedThickness: j } = e, { max_file_size: X = null } = e, { cli_upload: R } = e, { stream_handler: Q } = e, O, P = !1, { active_source: H = null } = e;
  function ie({ detail: E }) {
    t(1, s = new J1()), t(1, s.image = E, s), oe("upload");
  }
  function we() {
    pe(), oe("clear"), oe("change");
  }
  const oe = s0();
  let D = !1;
  function ue(E) {
    return o(this, void 0, void 0, function* () {
      switch (E) {
        case "clipboard":
          O.paste_clipboard();
          break;
      }
    });
  }
  function pe() {
    t(1, s = null);
  }
  const Ye = async (E) => E === null ? "" : `<img src="${await ku(E.image)}" />`;
  function Ue(E) {
    ai.call(this, l, E);
  }
  function A(E) {
    ai.call(this, l, E);
  }
  function Je(E) {
    Rn[E ? "unshift" : "push"](() => {
      O = E, t(27, O);
    });
  }
  function M(E) {
    P = E, t(25, P);
  }
  function Y(E) {
    D = E, t(26, D);
  }
  function S(E) {
    ai.call(this, l, E);
  }
  function W(E) {
    s = E, t(1, s);
  }
  const G = () => oe("change");
  function Me(E) {
    H = E, t(0, H), t(4, f);
  }
  return l.$$set = (E) => {
    "value" in E && t(1, s = E.value), "label" in E && t(2, r = E.label), "show_label" in E && t(3, a = E.show_label), "sources" in E && t(4, f = E.sources), "selectable" in E && t(5, u = E.selectable), "root" in E && t(6, c = E.root), "interactive" in E && t(7, _ = E.interactive), "i18n" in E && t(8, d = E.i18n), "showShareButton" in E && t(9, h = E.showShareButton), "showDownloadButton" in E && t(10, b = E.showDownloadButton), "showClearButton" in E && t(11, w = E.showClearButton), "boxesAlpha" in E && t(12, g = E.boxesAlpha), "labelList" in E && t(13, p = E.labelList), "labelColors" in E && t(14, m = E.labelColors), "boxMinSize" in E && t(15, k = E.boxMinSize), "handleSize" in E && t(16, y = E.handleSize), "boxThickness" in E && t(17, C = E.boxThickness), "disableEditBoxes" in E && t(18, B = E.disableEditBoxes), "singleBox" in E && t(19, v = E.singleBox), "showRemoveButton" in E && t(20, q = E.showRemoveButton), "boxSelectedThickness" in E && t(21, j = E.boxSelectedThickness), "max_file_size" in E && t(22, X = E.max_file_size), "cli_upload" in E && t(23, R = E.cli_upload), "stream_handler" in E && t(24, Q = E.stream_handler), "active_source" in E && t(0, H = E.active_source), "$$scope" in E && t(44, i = E.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    33554432 && P && pe(), l.$$.dirty[0] & /*dragging*/
    67108864 && oe("drag", D), l.$$.dirty[0] & /*active_source, sources*/
    17 && !H && f && t(0, H = f[0]);
  }, [
    H,
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
    w,
    g,
    p,
    m,
    k,
    y,
    C,
    B,
    v,
    q,
    j,
    X,
    R,
    Q,
    P,
    D,
    O,
    ie,
    we,
    oe,
    ue,
    pe,
    n,
    Ye,
    Ue,
    A,
    Je,
    M,
    Y,
    S,
    W,
    G,
    Me,
    i
  ];
}
class c0 extends Q1 {
  constructor(e) {
    super(), n0(
      this,
      e,
      u0,
      f0,
      i0,
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
        boxSelectedThickness: 21,
        max_file_size: 22,
        cli_upload: 23,
        stream_handler: 24,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: _0,
  attr: al,
  detach: ha,
  element: ma,
  init: d0,
  insert: ga,
  noop: as,
  safe_not_equal: h0,
  src_url_equal: rs,
  toggle_class: at
} = window.__gradio__svelte__internal;
function fs(l) {
  let e, t;
  return {
    c() {
      e = ma("img"), rs(e.src, t = /*value*/
      l[0].url) || al(e, "src", t), al(e, "alt", "");
    },
    m(n, i) {
      ga(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !rs(e.src, t = /*value*/
      n[0].url) && al(e, "src", t);
    },
    d(n) {
      n && ha(e);
    }
  };
}
function m0(l) {
  let e, t = (
    /*value*/
    l[0] && fs(l)
  );
  return {
    c() {
      e = ma("div"), t && t.c(), al(e, "class", "container svelte-1sgcyba"), at(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), at(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), at(
        e,
        "selected",
        /*selected*/
        l[2]
      ), at(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      ga(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = fs(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && at(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && at(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && at(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && at(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: as,
    o: as,
    d(n) {
      n && ha(e), t && t.d();
    }
  };
}
function g0(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class X0 extends _0 {
  constructor(e) {
    super(), d0(this, e, g0, m0, h0, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: b0,
  add_flush_callback: us,
  assign: w0,
  bind: cs,
  binding_callbacks: _s,
  check_outros: p0,
  create_component: It,
  destroy_component: Ht,
  detach: ba,
  empty: v0,
  flush: V,
  get_spread_object: k0,
  get_spread_update: y0,
  group_outros: C0,
  init: S0,
  insert: wa,
  mount_component: jt,
  safe_not_equal: z0,
  space: B0,
  transition_in: et,
  transition_out: tt
} = window.__gradio__svelte__internal;
function q0(l) {
  let e, t;
  return e = new uf({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [A0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(n, i) {
      jt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      2048 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function E0(l) {
  let e, t;
  return e = new zs({
    props: {
      i18n: (
        /*gradio*/
        l[29].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(n, i) {
      jt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      536870912 && (o.i18n = /*gradio*/
      n[29].i18n), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function M0(l) {
  let e, t;
  return e = new zs({
    props: {
      i18n: (
        /*gradio*/
        l[29].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(n, i) {
      jt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      536870912 && (o.i18n = /*gradio*/
      n[29].i18n), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function A0(l) {
  let e, t;
  return e = new ps({}), {
    c() {
      It(e.$$.fragment);
    },
    m(n, i) {
      jt(e, n, i), t = !0;
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function L0(l) {
  let e, t, n, i;
  const o = [M0, E0, q0], s = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[31] === "upload" ? 0 : (
        /*active_source*/
        a[31] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = v0();
    },
    m(a, f) {
      s[e].m(a, f), wa(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (C0(), tt(s[u], 1, 1, () => {
        s[u] = null;
      }), p0(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), et(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (et(t), i = !0);
    },
    o(a) {
      tt(t), i = !1;
    },
    d(a) {
      a && ba(n), s[e].d(a);
    }
  };
}
function R0(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[29].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[29].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = w0(a, r[_]);
  e = new Dc({ props: a });
  function f(_) {
    l[32](_);
  }
  function u(_) {
    l[33](_);
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
      l[29].i18n
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
      l[29].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[29].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[29].client.stream
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
    $$slots: { default: [L0] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[31] !== void 0 && (c.active_source = /*active_source*/
    l[31]), /*value*/
    l[0] !== void 0 && (c.value = /*value*/
    l[0]), n = new c0({ props: c }), _s.push(() => cs(n, "active_source", f)), _s.push(() => cs(n, "value", u)), n.$on(
      "change",
      /*change_handler*/
      l[34]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[35]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[36]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[37]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[38]
    ), n.$on(
      "select",
      /*select_handler*/
      l[39]
    ), n.$on(
      "share",
      /*share_handler*/
      l[40]
    ), n.$on(
      "error",
      /*error_handler*/
      l[41]
    ), {
      c() {
        It(e.$$.fragment), t = B0(), It(n.$$.fragment);
      },
      m(_, d) {
        jt(e, _, d), wa(_, t, d), jt(n, _, d), s = !0;
      },
      p(_, d) {
        const h = d[0] & /*gradio, loading_status*/
        536870914 ? y0(r, [
          d[0] & /*gradio*/
          536870912 && {
            autoscroll: (
              /*gradio*/
              _[29].autoscroll
            )
          },
          d[0] & /*gradio*/
          536870912 && { i18n: (
            /*gradio*/
            _[29].i18n
          ) },
          d[0] & /*loading_status*/
          2 && k0(
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
        536870912 && (b.i18n = /*gradio*/
        _[29].i18n), d[0] & /*boxes_alpha*/
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
        536870912 && (b.max_file_size = /*gradio*/
        _[29].max_file_size), d[0] & /*gradio*/
        536870912 && (b.cli_upload = /*gradio*/
        _[29].client.upload), d[0] & /*gradio*/
        536870912 && (b.stream_handler = /*gradio*/
        _[29].client.stream), d[0] & /*handle_size*/
        8388608 && (b.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (b.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (b.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (b.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (b.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (b.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*gradio*/
        536870912 | d[1] & /*$$scope, active_source*/
        2049 && (b.$$scope = { dirty: d, ctx: _ }), !i && d[1] & /*active_source*/
        1 && (i = !0, b.active_source = /*active_source*/
        _[31], us(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, b.value = /*value*/
        _[0], us(() => o = !1)), n.$set(b);
      },
      i(_) {
        s || (et(e.$$.fragment, _), et(n.$$.fragment, _), s = !0);
      },
      o(_) {
        tt(e.$$.fragment, _), tt(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && ba(t), Ht(e, _), Ht(n, _);
      }
    }
  );
}
function D0(l) {
  let e, t;
  return e = new Ta({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[30] ? "focus" : "base"
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
      $$slots: { default: [R0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(n, i) {
      jt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[0] & /*dragging*/
      1073741824 && (o.border_mode = /*dragging*/
      n[30] ? "focus" : "base"), i[0] & /*elem_id*/
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
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, value, dragging, loading_status*/
      2147468515 | i[1] & /*$$scope, active_source*/
      2049 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function T0(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: u } = e, { width: c } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e, { loading_status: w } = e, { sources: g = ["upload", "clipboard"] } = e, { show_download_button: p } = e, { show_share_button: m } = e, { show_clear_button: k } = e, { interactive: y } = e, { boxes_alpha: C } = e, { label_list: B } = e, { label_colors: v } = e, { box_min_size: q } = e, { handle_size: j } = e, { box_thickness: X } = e, { box_selected_thickness: R } = e, { disable_edit_boxes: Q } = e, { single_box: O } = e, { show_remove_button: P } = e, { gradio: H } = e, ie, we = null;
  function oe(S) {
    we = S, t(31, we);
  }
  function D(S) {
    s = S, t(0, s);
  }
  const ue = () => H.dispatch("change"), pe = () => H.dispatch("edit"), Ye = () => {
    H.dispatch("clear");
  }, Ue = ({ detail: S }) => t(30, ie = S), A = () => H.dispatch("upload"), Je = ({ detail: S }) => H.dispatch("select", S), M = ({ detail: S }) => H.dispatch("share", S), Y = ({ detail: S }) => {
    t(1, w = w || {}), t(1, w.status = "error", w), H.dispatch("error", S);
  };
  return l.$$set = (S) => {
    "elem_id" in S && t(2, n = S.elem_id), "elem_classes" in S && t(3, i = S.elem_classes), "visible" in S && t(4, o = S.visible), "value" in S && t(0, s = S.value), "label" in S && t(5, r = S.label), "show_label" in S && t(6, a = S.show_label), "root" in S && t(7, f = S.root), "height" in S && t(8, u = S.height), "width" in S && t(9, c = S.width), "_selectable" in S && t(10, _ = S._selectable), "container" in S && t(11, d = S.container), "scale" in S && t(12, h = S.scale), "min_width" in S && t(13, b = S.min_width), "loading_status" in S && t(1, w = S.loading_status), "sources" in S && t(14, g = S.sources), "show_download_button" in S && t(15, p = S.show_download_button), "show_share_button" in S && t(16, m = S.show_share_button), "show_clear_button" in S && t(17, k = S.show_clear_button), "interactive" in S && t(18, y = S.interactive), "boxes_alpha" in S && t(19, C = S.boxes_alpha), "label_list" in S && t(20, B = S.label_list), "label_colors" in S && t(21, v = S.label_colors), "box_min_size" in S && t(22, q = S.box_min_size), "handle_size" in S && t(23, j = S.handle_size), "box_thickness" in S && t(24, X = S.box_thickness), "box_selected_thickness" in S && t(25, R = S.box_selected_thickness), "disable_edit_boxes" in S && t(26, Q = S.disable_edit_boxes), "single_box" in S && t(27, O = S.single_box), "show_remove_button" in S && t(28, P = S.show_remove_button), "gradio" in S && t(29, H = S.gradio);
  }, [
    s,
    w,
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
    g,
    p,
    m,
    k,
    y,
    C,
    B,
    v,
    q,
    j,
    X,
    R,
    Q,
    O,
    P,
    H,
    ie,
    we,
    oe,
    D,
    ue,
    pe,
    Ye,
    Ue,
    A,
    Je,
    M,
    Y
  ];
}
class Y0 extends b0 {
  constructor(e) {
    super(), S0(
      this,
      e,
      T0,
      D0,
      z0,
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
        gradio: 29
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
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), V();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), V();
  }
  get gradio() {
    return this.$$.ctx[29];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), V();
  }
}
export {
  X0 as BaseExample,
  Y0 as default
};
