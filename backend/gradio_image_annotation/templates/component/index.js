const {
  SvelteComponent: na,
  assign: la,
  create_slot: ia,
  detach: oa,
  element: sa,
  get_all_dirty_from_scope: aa,
  get_slot_changes: ra,
  get_spread_update: fa,
  init: ua,
  insert: ca,
  safe_not_equal: _a,
  set_dynamic_element_data: ki,
  set_style: ge,
  toggle_class: He,
  transition_in: xo,
  transition_out: $o,
  update_slot_base: da
} = window.__gradio__svelte__internal;
function ha(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = ia(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let a = [
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
  for (let s = 0; s < a.length; s += 1)
    r = la(r, a[s]);
  return {
    c() {
      e = sa(
        /*tag*/
        l[14]
      ), o && o.c(), ki(
        /*tag*/
        l[14]
      )(e, r), He(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), He(
        e,
        "padded",
        /*padding*/
        l[6]
      ), He(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), He(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), He(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), ge(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), ge(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), ge(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), ge(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), ge(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), ge(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), ge(e, "border-width", "var(--block-border-width)");
    },
    m(s, f) {
      ca(s, e, f), o && o.m(e, null), n = !0;
    },
    p(s, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && da(
        o,
        i,
        s,
        /*$$scope*/
        s[17],
        n ? ra(
          i,
          /*$$scope*/
          s[17],
          f,
          null
        ) : aa(
          /*$$scope*/
          s[17]
        ),
        null
      ), ki(
        /*tag*/
        s[14]
      )(e, r = fa(a, [
        (!n || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!n || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!n || f & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), He(
        e,
        "hidden",
        /*visible*/
        s[10] === !1
      ), He(
        e,
        "padded",
        /*padding*/
        s[6]
      ), He(
        e,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), He(
        e,
        "border_contrast",
        /*border_mode*/
        s[5] === "contrast"
      ), He(e, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), f & /*height*/
      1 && ge(
        e,
        "height",
        /*get_dimension*/
        s[15](
          /*height*/
          s[0]
        )
      ), f & /*width*/
      2 && ge(e, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : (
        /*get_dimension*/
        s[15](
          /*width*/
          s[1]
        )
      )), f & /*variant*/
      16 && ge(
        e,
        "border-style",
        /*variant*/
        s[4]
      ), f & /*allow_overflow*/
      2048 && ge(
        e,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && ge(
        e,
        "flex-grow",
        /*scale*/
        s[12]
      ), f & /*min_width*/
      8192 && ge(e, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      n || (xo(o, s), n = !0);
    },
    o(s) {
      $o(o, s), n = !1;
    },
    d(s) {
      s && oa(e), o && o.d(s);
    }
  };
}
function ma(l) {
  let e, t = (
    /*tag*/
    l[14] && ha(l)
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
      e || (xo(t, n), e = !0);
    },
    o(n) {
      $o(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function ba(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: a = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: s = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: b = !0 } = e, { visible: m = !0 } = e, { allow_overflow: w = !0 } = e, { scale: k = null } = e, { min_width: g = 0 } = e, S = _ === "fieldset" ? "fieldset" : "div";
  const M = (y) => {
    if (y !== void 0) {
      if (typeof y == "number")
        return y + "px";
      if (typeof y == "string")
        return y;
    }
  };
  return l.$$set = (y) => {
    "height" in y && t(0, o = y.height), "width" in y && t(1, a = y.width), "elem_id" in y && t(2, r = y.elem_id), "elem_classes" in y && t(3, s = y.elem_classes), "variant" in y && t(4, f = y.variant), "border_mode" in y && t(5, u = y.border_mode), "padding" in y && t(6, c = y.padding), "type" in y && t(16, _ = y.type), "test_id" in y && t(7, d = y.test_id), "explicit_call" in y && t(8, h = y.explicit_call), "container" in y && t(9, b = y.container), "visible" in y && t(10, m = y.visible), "allow_overflow" in y && t(11, w = y.allow_overflow), "scale" in y && t(12, k = y.scale), "min_width" in y && t(13, g = y.min_width), "$$scope" in y && t(17, i = y.$$scope);
  }, [
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    d,
    h,
    b,
    m,
    w,
    k,
    g,
    S,
    M,
    _,
    i,
    n
  ];
}
class ga extends na {
  constructor(e) {
    super(), ua(this, e, ba, ma, _a, {
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
  SvelteComponent: wa,
  attr: pa,
  create_slot: ka,
  detach: va,
  element: ya,
  get_all_dirty_from_scope: Ca,
  get_slot_changes: Sa,
  init: za,
  insert: qa,
  safe_not_equal: Ea,
  transition_in: Ma,
  transition_out: Ba,
  update_slot_base: Aa
} = window.__gradio__svelte__internal;
function La(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = ka(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = ya("div"), i && i.c(), pa(e, "class", "svelte-1hnfib2");
    },
    m(o, a) {
      qa(o, e, a), i && i.m(e, null), t = !0;
    },
    p(o, [a]) {
      i && i.p && (!t || a & /*$$scope*/
      1) && Aa(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Sa(
          n,
          /*$$scope*/
          o[0],
          a,
          null
        ) : Ca(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Ma(i, o), t = !0);
    },
    o(o) {
      Ba(i, o), t = !1;
    },
    d(o) {
      o && va(e), i && i.d(o);
    }
  };
}
function Da(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Ta extends wa {
  constructor(e) {
    super(), za(this, e, Da, La, Ea, {});
  }
}
const {
  SvelteComponent: ja,
  attr: vi,
  check_outros: Ia,
  create_component: Ra,
  create_slot: Fa,
  destroy_component: Ha,
  detach: Un,
  element: Ua,
  empty: Na,
  get_all_dirty_from_scope: Oa,
  get_slot_changes: Xa,
  group_outros: Ya,
  init: Wa,
  insert: Nn,
  mount_component: Va,
  safe_not_equal: Pa,
  set_data: Za,
  space: Ka,
  text: Ga,
  toggle_class: Lt,
  transition_in: nn,
  transition_out: On,
  update_slot_base: Ja
} = window.__gradio__svelte__internal;
function yi(l) {
  let e, t;
  return e = new Ta({
    props: {
      $$slots: { default: [Qa] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Ra(e.$$.fragment);
    },
    m(n, i) {
      Va(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (nn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      On(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ha(e, n);
    }
  };
}
function Qa(l) {
  let e;
  return {
    c() {
      e = Ga(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Nn(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Za(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Un(e);
    }
  };
}
function xa(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), a = Fa(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && yi(l)
  );
  return {
    c() {
      e = Ua("span"), a && a.c(), t = Ka(), r && r.c(), n = Na(), vi(e, "data-testid", "block-info"), vi(e, "class", "svelte-22c38v"), Lt(e, "sr-only", !/*show_label*/
      l[0]), Lt(e, "hide", !/*show_label*/
      l[0]), Lt(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(s, f) {
      Nn(s, e, f), a && a.m(e, null), Nn(s, t, f), r && r.m(s, f), Nn(s, n, f), i = !0;
    },
    p(s, [f]) {
      a && a.p && (!i || f & /*$$scope*/
      8) && Ja(
        a,
        o,
        s,
        /*$$scope*/
        s[3],
        i ? Xa(
          o,
          /*$$scope*/
          s[3],
          f,
          null
        ) : Oa(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && Lt(e, "sr-only", !/*show_label*/
      s[0]), (!i || f & /*show_label*/
      1) && Lt(e, "hide", !/*show_label*/
      s[0]), (!i || f & /*info*/
      2) && Lt(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? r ? (r.p(s, f), f & /*info*/
      2 && nn(r, 1)) : (r = yi(s), r.c(), nn(r, 1), r.m(n.parentNode, n)) : r && (Ya(), On(r, 1, 1, () => {
        r = null;
      }), Ia());
    },
    i(s) {
      i || (nn(a, s), nn(r), i = !0);
    },
    o(s) {
      On(a, s), On(r), i = !1;
    },
    d(s) {
      s && (Un(e), Un(t), Un(n)), a && a.d(s), r && r.d(s);
    }
  };
}
function $a(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: a = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, a = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, a, n, i];
}
class es extends ja {
  constructor(e) {
    super(), Wa(this, e, $a, xa, Pa, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: er,
  append: gl,
  attr: Cn,
  create_component: tr,
  destroy_component: nr,
  detach: lr,
  element: Ci,
  init: ir,
  insert: or,
  mount_component: sr,
  safe_not_equal: ar,
  set_data: rr,
  space: fr,
  text: ur,
  toggle_class: xe,
  transition_in: cr,
  transition_out: _r
} = window.__gradio__svelte__internal;
function dr(l) {
  let e, t, n, i, o, a;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Ci("label"), t = Ci("span"), tr(n.$$.fragment), i = fr(), o = ur(
        /*label*/
        l[0]
      ), Cn(t, "class", "svelte-9gxdi0"), Cn(e, "for", ""), Cn(e, "data-testid", "block-label"), Cn(e, "class", "svelte-9gxdi0"), xe(e, "hide", !/*show_label*/
      l[2]), xe(e, "sr-only", !/*show_label*/
      l[2]), xe(
        e,
        "float",
        /*float*/
        l[4]
      ), xe(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, s) {
      or(r, e, s), gl(e, t), sr(n, t, null), gl(e, i), gl(e, o), a = !0;
    },
    p(r, [s]) {
      (!a || s & /*label*/
      1) && rr(
        o,
        /*label*/
        r[0]
      ), (!a || s & /*show_label*/
      4) && xe(e, "hide", !/*show_label*/
      r[2]), (!a || s & /*show_label*/
      4) && xe(e, "sr-only", !/*show_label*/
      r[2]), (!a || s & /*float*/
      16) && xe(
        e,
        "float",
        /*float*/
        r[4]
      ), (!a || s & /*disable*/
      8) && xe(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      a || (cr(n.$$.fragment, r), a = !0);
    },
    o(r) {
      _r(n.$$.fragment, r), a = !1;
    },
    d(r) {
      r && lr(e), nr(n);
    }
  };
}
function hr(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: a = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (s) => {
    "label" in s && t(0, n = s.label), "Icon" in s && t(1, i = s.Icon), "show_label" in s && t(2, o = s.show_label), "disable" in s && t(3, a = s.disable), "float" in s && t(4, r = s.float);
  }, [n, i, o, a, r];
}
class mr extends er {
  constructor(e) {
    super(), ir(this, e, hr, dr, ar, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: br,
  append: Zl,
  attr: Ke,
  bubble: gr,
  create_component: wr,
  destroy_component: pr,
  detach: ts,
  element: Kl,
  init: kr,
  insert: ns,
  listen: vr,
  mount_component: yr,
  safe_not_equal: Cr,
  set_data: Sr,
  set_style: Dt,
  space: zr,
  text: qr,
  toggle_class: re,
  transition_in: Er,
  transition_out: Mr
} = window.__gradio__svelte__internal;
function Si(l) {
  let e, t;
  return {
    c() {
      e = Kl("span"), t = qr(
        /*label*/
        l[1]
      ), Ke(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      ns(n, e, i), Zl(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Sr(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && ts(e);
    }
  };
}
function Br(l) {
  let e, t, n, i, o, a, r, s = (
    /*show_label*/
    l[2] && Si(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = Kl("button"), s && s.c(), t = zr(), n = Kl("div"), wr(i.$$.fragment), Ke(n, "class", "svelte-1lrphxw"), re(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), re(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), re(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], Ke(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), Ke(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), Ke(
        e,
        "title",
        /*label*/
        l[1]
      ), Ke(e, "class", "svelte-1lrphxw"), re(
        e,
        "pending",
        /*pending*/
        l[3]
      ), re(
        e,
        "padded",
        /*padded*/
        l[5]
      ), re(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), re(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), Dt(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Dt(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Dt(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, u) {
      ns(f, e, u), s && s.m(e, null), Zl(e, t), Zl(e, n), yr(i, n, null), o = !0, a || (r = vr(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), a = !0);
    },
    p(f, [u]) {
      /*show_label*/
      f[2] ? s ? s.p(f, u) : (s = Si(f), s.c(), s.m(e, t)) : s && (s.d(1), s = null), (!o || u & /*size*/
      16) && re(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || u & /*size*/
      16) && re(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || u & /*size*/
      16) && re(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || u & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || u & /*label*/
      2) && Ke(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || u & /*hasPopup*/
      256) && Ke(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || u & /*label*/
      2) && Ke(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || u & /*pending*/
      8) && re(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || u & /*padded*/
      32) && re(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || u & /*highlight*/
      64) && re(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || u & /*transparent*/
      512) && re(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), u & /*disabled, _color*/
      4224 && Dt(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && Dt(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), u & /*offset*/
      2048 && Dt(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Er(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Mr(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && ts(e), s && s.d(), pr(i), a = !1, r();
    }
  };
}
function Ar(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: a = !1 } = e, { pending: r = !1 } = e, { size: s = "small" } = e, { padded: f = !0 } = e, { highlight: u = !1 } = e, { disabled: c = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: b = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function w(k) {
    gr.call(this, l, k);
  }
  return l.$$set = (k) => {
    "Icon" in k && t(0, i = k.Icon), "label" in k && t(1, o = k.label), "show_label" in k && t(2, a = k.show_label), "pending" in k && t(3, r = k.pending), "size" in k && t(4, s = k.size), "padded" in k && t(5, f = k.padded), "highlight" in k && t(6, u = k.highlight), "disabled" in k && t(7, c = k.disabled), "hasPopup" in k && t(8, _ = k.hasPopup), "color" in k && t(13, d = k.color), "transparent" in k && t(9, h = k.transparent), "background" in k && t(10, b = k.background), "offset" in k && t(11, m = k.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = u ? "var(--color-accent)" : d);
  }, [
    i,
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    _,
    h,
    b,
    m,
    n,
    d,
    w
  ];
}
class al extends br {
  constructor(e) {
    super(), kr(this, e, Ar, Br, Cr, {
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
  SvelteComponent: Lr,
  append: Dr,
  attr: wl,
  binding_callbacks: Tr,
  create_slot: jr,
  detach: Ir,
  element: zi,
  get_all_dirty_from_scope: Rr,
  get_slot_changes: Fr,
  init: Hr,
  insert: Ur,
  safe_not_equal: Nr,
  toggle_class: $e,
  transition_in: Or,
  transition_out: Xr,
  update_slot_base: Yr
} = window.__gradio__svelte__internal;
function Wr(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = jr(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = zi("div"), t = zi("div"), o && o.c(), wl(t, "class", "icon svelte-3w3rth"), wl(e, "class", "empty svelte-3w3rth"), wl(e, "aria-label", "Empty value"), $e(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), $e(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), $e(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), $e(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(a, r) {
      Ur(a, e, r), Dr(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(a, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Yr(
        o,
        i,
        a,
        /*$$scope*/
        a[4],
        n ? Fr(
          i,
          /*$$scope*/
          a[4],
          r,
          null
        ) : Rr(
          /*$$scope*/
          a[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && $e(
        e,
        "small",
        /*size*/
        a[0] === "small"
      ), (!n || r & /*size*/
      1) && $e(
        e,
        "large",
        /*size*/
        a[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && $e(
        e,
        "unpadded_box",
        /*unpadded_box*/
        a[1]
      ), (!n || r & /*parent_height*/
      8) && $e(
        e,
        "small_parent",
        /*parent_height*/
        a[3]
      );
    },
    i(a) {
      n || (Or(o, a), n = !0);
    },
    o(a) {
      Xr(o, a), n = !1;
    },
    d(a) {
      a && Ir(e), o && o.d(a), l[6](null);
    }
  };
}
function Vr(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: a = "small" } = e, { unpadded_box: r = !1 } = e, s;
  function f(c) {
    var _;
    if (!c) return !1;
    const { height: d } = c.getBoundingClientRect(), { height: h } = ((_ = c.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function u(c) {
    Tr[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return l.$$set = (c) => {
    "size" in c && t(0, a = c.size), "unpadded_box" in c && t(1, r = c.unpadded_box), "$$scope" in c && t(4, o = c.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(s));
  }, [a, r, s, n, o, i, u];
}
class Pr extends Lr {
  constructor(e) {
    super(), Hr(this, e, Vr, Wr, Nr, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Zr,
  append: pl,
  attr: De,
  detach: Kr,
  init: Gr,
  insert: Jr,
  noop: kl,
  safe_not_equal: Qr,
  set_style: Ue,
  svg_element: Sn
} = window.__gradio__svelte__internal;
function xr(l) {
  let e, t, n, i;
  return {
    c() {
      e = Sn("svg"), t = Sn("g"), n = Sn("path"), i = Sn("path"), De(n, "d", "M18,6L6.087,17.913"), Ue(n, "fill", "none"), Ue(n, "fill-rule", "nonzero"), Ue(n, "stroke-width", "2px"), De(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), De(i, "d", "M4.364,4.364L19.636,19.636"), Ue(i, "fill", "none"), Ue(i, "fill-rule", "nonzero"), Ue(i, "stroke-width", "2px"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "version", "1.1"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), De(e, "xml:space", "preserve"), De(e, "stroke", "currentColor"), Ue(e, "fill-rule", "evenodd"), Ue(e, "clip-rule", "evenodd"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round");
    },
    m(o, a) {
      Jr(o, e, a), pl(e, t), pl(t, n), pl(e, i);
    },
    p: kl,
    i: kl,
    o: kl,
    d(o) {
      o && Kr(e);
    }
  };
}
class ci extends Zr {
  constructor(e) {
    super(), Gr(this, e, null, xr, Qr, {});
  }
}
const {
  SvelteComponent: $r,
  append: ef,
  attr: Qt,
  detach: tf,
  init: nf,
  insert: lf,
  noop: vl,
  safe_not_equal: of,
  svg_element: qi
} = window.__gradio__svelte__internal;
function sf(l) {
  let e, t;
  return {
    c() {
      e = qi("svg"), t = qi("path"), Qt(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Qt(t, "fill", "currentColor"), Qt(e, "id", "icon"), Qt(e, "xmlns", "http://www.w3.org/2000/svg"), Qt(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      lf(n, e, i), ef(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && tf(e);
    }
  };
}
class af extends $r {
  constructor(e) {
    super(), nf(this, e, null, sf, of, {});
  }
}
const {
  SvelteComponent: rf,
  append: ff,
  attr: Tt,
  detach: uf,
  init: cf,
  insert: _f,
  noop: yl,
  safe_not_equal: df,
  svg_element: Ei
} = window.__gradio__svelte__internal;
function hf(l) {
  let e, t;
  return {
    c() {
      e = Ei("svg"), t = Ei("path"), Tt(t, "fill", "currentColor"), Tt(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      _f(n, e, i), ff(e, t);
    },
    p: yl,
    i: yl,
    o: yl,
    d(n) {
      n && uf(e);
    }
  };
}
class mf extends rf {
  constructor(e) {
    super(), cf(this, e, null, hf, df, {});
  }
}
const {
  SvelteComponent: bf,
  append: gf,
  attr: jt,
  detach: wf,
  init: pf,
  insert: kf,
  noop: Cl,
  safe_not_equal: vf,
  svg_element: Mi
} = window.__gradio__svelte__internal;
function yf(l) {
  let e, t;
  return {
    c() {
      e = Mi("svg"), t = Mi("path"), jt(t, "d", "M5 8l4 4 4-4z"), jt(e, "class", "dropdown-arrow svelte-145leq6"), jt(e, "xmlns", "http://www.w3.org/2000/svg"), jt(e, "width", "100%"), jt(e, "height", "100%"), jt(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      kf(n, e, i), gf(e, t);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(n) {
      n && wf(e);
    }
  };
}
class Cf extends bf {
  constructor(e) {
    super(), pf(this, e, null, yf, vf, {});
  }
}
const {
  SvelteComponent: Sf,
  append: zf,
  attr: Te,
  detach: qf,
  init: Ef,
  insert: Mf,
  noop: Sl,
  safe_not_equal: Bf,
  svg_element: Bi
} = window.__gradio__svelte__internal;
function Af(l) {
  let e, t;
  return {
    c() {
      e = Bi("svg"), t = Bi("path"), Te(t, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Te(e, "xmlns", "http://www.w3.org/2000/svg"), Te(e, "width", "100%"), Te(e, "height", "100%"), Te(e, "viewBox", "0 0 24 24"), Te(e, "fill", "none"), Te(e, "stroke", "currentColor"), Te(e, "stroke-width", "1.5"), Te(e, "stroke-linecap", "round"), Te(e, "stroke-linejoin", "round"), Te(e, "class", "feather feather-edit-2");
    },
    m(n, i) {
      Mf(n, e, i), zf(e, t);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(n) {
      n && qf(e);
    }
  };
}
class Lf extends Sf {
  constructor(e) {
    super(), Ef(this, e, null, Af, Bf, {});
  }
}
const {
  SvelteComponent: Df,
  append: zl,
  attr: Q,
  detach: Tf,
  init: jf,
  insert: If,
  noop: ql,
  safe_not_equal: Rf,
  svg_element: zn
} = window.__gradio__svelte__internal;
function Ff(l) {
  let e, t, n, i;
  return {
    c() {
      e = zn("svg"), t = zn("rect"), n = zn("circle"), i = zn("polyline"), Q(t, "x", "3"), Q(t, "y", "3"), Q(t, "width", "18"), Q(t, "height", "18"), Q(t, "rx", "2"), Q(t, "ry", "2"), Q(n, "cx", "8.5"), Q(n, "cy", "8.5"), Q(n, "r", "1.5"), Q(i, "points", "21 15 16 10 5 21"), Q(e, "xmlns", "http://www.w3.org/2000/svg"), Q(e, "width", "100%"), Q(e, "height", "100%"), Q(e, "viewBox", "0 0 24 24"), Q(e, "fill", "none"), Q(e, "stroke", "currentColor"), Q(e, "stroke-width", "1.5"), Q(e, "stroke-linecap", "round"), Q(e, "stroke-linejoin", "round"), Q(e, "class", "feather feather-image");
    },
    m(o, a) {
      If(o, e, a), zl(e, t), zl(e, n), zl(e, i);
    },
    p: ql,
    i: ql,
    o: ql,
    d(o) {
      o && Tf(e);
    }
  };
}
let ls = class extends Df {
  constructor(e) {
    super(), jf(this, e, null, Ff, Rf, {});
  }
};
const {
  SvelteComponent: Hf,
  append: Uf,
  attr: qn,
  detach: Nf,
  init: Of,
  insert: Xf,
  noop: El,
  safe_not_equal: Yf,
  svg_element: Ai
} = window.__gradio__svelte__internal;
function Wf(l) {
  let e, t;
  return {
    c() {
      e = Ai("svg"), t = Ai("path"), qn(t, "fill", "currentColor"), qn(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), qn(e, "xmlns", "http://www.w3.org/2000/svg"), qn(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Xf(n, e, i), Uf(e, t);
    },
    p: El,
    i: El,
    o: El,
    d(n) {
      n && Nf(e);
    }
  };
}
class is extends Hf {
  constructor(e) {
    super(), Of(this, e, null, Wf, Yf, {});
  }
}
const {
  SvelteComponent: Vf,
  append: En,
  attr: x,
  detach: Pf,
  init: Zf,
  insert: Kf,
  noop: Ml,
  safe_not_equal: Gf,
  svg_element: xt
} = window.__gradio__svelte__internal;
function Jf(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = xt("svg"), t = xt("path"), n = xt("path"), i = xt("line"), o = xt("line"), x(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), x(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), x(i, "x1", "12"), x(i, "y1", "19"), x(i, "x2", "12"), x(i, "y2", "23"), x(o, "x1", "8"), x(o, "y1", "23"), x(o, "x2", "16"), x(o, "y2", "23"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "100%"), x(e, "height", "100%"), x(e, "viewBox", "0 0 24 24"), x(e, "fill", "none"), x(e, "stroke", "currentColor"), x(e, "stroke-width", "2"), x(e, "stroke-linecap", "round"), x(e, "stroke-linejoin", "round"), x(e, "class", "feather feather-mic");
    },
    m(a, r) {
      Kf(a, e, r), En(e, t), En(e, n), En(e, i), En(e, o);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(a) {
      a && Pf(e);
    }
  };
}
class Qf extends Vf {
  constructor(e) {
    super(), Zf(this, e, null, Jf, Gf, {});
  }
}
const {
  SvelteComponent: xf,
  append: Bl,
  attr: ie,
  detach: $f,
  init: eu,
  insert: tu,
  noop: Al,
  safe_not_equal: nu,
  svg_element: Mn
} = window.__gradio__svelte__internal;
function lu(l) {
  let e, t, n, i;
  return {
    c() {
      e = Mn("svg"), t = Mn("path"), n = Mn("polyline"), i = Mn("line"), ie(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ie(n, "points", "17 8 12 3 7 8"), ie(i, "x1", "12"), ie(i, "y1", "3"), ie(i, "x2", "12"), ie(i, "y2", "15"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "width", "90%"), ie(e, "height", "90%"), ie(e, "viewBox", "0 0 24 24"), ie(e, "fill", "none"), ie(e, "stroke", "currentColor"), ie(e, "stroke-width", "2"), ie(e, "stroke-linecap", "round"), ie(e, "stroke-linejoin", "round"), ie(e, "class", "feather feather-upload");
    },
    m(o, a) {
      tu(o, e, a), Bl(e, t), Bl(e, n), Bl(e, i);
    },
    p: Al,
    i: Al,
    o: Al,
    d(o) {
      o && $f(e);
    }
  };
}
let os = class extends xf {
  constructor(e) {
    super(), eu(this, e, null, lu, nu, {});
  }
};
const {
  SvelteComponent: iu,
  append: Li,
  attr: et,
  detach: ou,
  init: su,
  insert: au,
  noop: Ll,
  safe_not_equal: ru,
  svg_element: Dl
} = window.__gradio__svelte__internal;
function fu(l) {
  let e, t, n;
  return {
    c() {
      e = Dl("svg"), t = Dl("path"), n = Dl("path"), et(t, "fill", "currentColor"), et(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), et(n, "fill", "currentColor"), et(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), et(e, "xmlns", "http://www.w3.org/2000/svg"), et(e, "width", "100%"), et(e, "height", "100%"), et(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      au(i, e, o), Li(e, t), Li(e, n);
    },
    p: Ll,
    i: Ll,
    o: Ll,
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
const cu = [
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
], Di = {
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
cu.reduce(
  (l, { color: e, primary: t, secondary: n }) => ({
    ...l,
    [e]: {
      primary: Di[e][t],
      secondary: Di[e][n]
    }
  }),
  {}
);
class Xn extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function _u(l, e) {
  var s;
  if (window.__gradio_space__ == null)
    throw new Xn("Must be on Spaces to share.");
  let t, n, i;
  t = du(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const o = new File([t], i, { type: n }), a = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!a.ok) {
    if ((s = a.headers.get("content-type")) != null && s.includes("application/json")) {
      const f = await a.json();
      throw new Xn(`Upload failed: ${f.error}`);
    }
    throw new Xn("Upload failed.");
  }
  return await a.text();
}
function du(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: hu,
  create_component: mu,
  destroy_component: bu,
  init: gu,
  mount_component: wu,
  safe_not_equal: pu,
  transition_in: ku,
  transition_out: vu
} = window.__gradio__svelte__internal, { createEventDispatcher: yu } = window.__gradio__svelte__internal;
function Cu(l) {
  let e, t;
  return e = new al({
    props: {
      Icon: af,
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
      mu(e.$$.fragment);
    },
    m(n, i) {
      wu(e, n, i), t = !0;
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
      t || (ku(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vu(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bu(e, n);
    }
  };
}
function Su(l, e, t) {
  const n = yu();
  let { formatter: i } = e, { value: o } = e, { i18n: a } = e, r = !1;
  const s = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let u = f instanceof Xn ? f.message : "Share failed.";
      n("error", u);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, a = f.i18n);
  }, [i, o, a, r, n, s];
}
class zu extends hu {
  constructor(e) {
    super(), gu(this, e, Su, Cu, pu, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: qu,
  append: kt,
  attr: Gl,
  check_outros: Eu,
  create_component: ss,
  destroy_component: as,
  detach: Yn,
  element: Jl,
  group_outros: Mu,
  init: Bu,
  insert: Wn,
  mount_component: rs,
  safe_not_equal: Au,
  set_data: Ql,
  space: xl,
  text: ln,
  toggle_class: Ti,
  transition_in: Gn,
  transition_out: Jn
} = window.__gradio__svelte__internal;
function Lu(l) {
  let e, t;
  return e = new os({}), {
    c() {
      ss(e.$$.fragment);
    },
    m(n, i) {
      rs(e, n, i), t = !0;
    },
    i(n) {
      t || (Gn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      as(e, n);
    }
  };
}
function Du(l) {
  let e, t;
  return e = new is({}), {
    c() {
      ss(e.$$.fragment);
    },
    m(n, i) {
      rs(e, n, i), t = !0;
    },
    i(n) {
      t || (Gn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      as(e, n);
    }
  };
}
function ji(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, o, a, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), s;
  return {
    c() {
      e = Jl("span"), t = ln("- "), i = ln(n), o = ln(" -"), a = xl(), s = ln(r), Gl(e, "class", "or svelte-kzcjhc");
    },
    m(f, u) {
      Wn(f, e, u), kt(e, t), kt(e, i), kt(e, o), Wn(f, a, u), Wn(f, s, u);
    },
    p(f, u) {
      u & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && Ql(i, n), u & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && Ql(s, r);
    },
    d(f) {
      f && (Yn(e), Yn(a), Yn(s));
    }
  };
}
function Tu(l) {
  let e, t, n, i, o, a = (
    /*i18n*/
    l[1](
      /*defs*/
      l[5][
        /*type*/
        l[0]
      ] || /*defs*/
      l[5].file
    ) + ""
  ), r, s, f;
  const u = [Du, Lu], c = [];
  function _(h, b) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = c[n] = u[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && ji(l)
  );
  return {
    c() {
      e = Jl("div"), t = Jl("span"), i.c(), o = xl(), r = ln(a), s = xl(), d && d.c(), Gl(t, "class", "icon-wrap svelte-kzcjhc"), Ti(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), Gl(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, b) {
      Wn(h, e, b), kt(e, t), c[n].m(t, null), kt(e, o), kt(e, r), kt(e, s), d && d.m(e, null), f = !0;
    },
    p(h, [b]) {
      let m = n;
      n = _(h), n !== m && (Mu(), Jn(c[m], 1, 1, () => {
        c[m] = null;
      }), Eu(), i = c[n], i || (i = c[n] = u[n](h), i.c()), Gn(i, 1), i.m(t, null)), (!f || b & /*hovered*/
      16) && Ti(
        t,
        "hovered",
        /*hovered*/
        h[4]
      ), (!f || b & /*i18n, type*/
      3) && a !== (a = /*i18n*/
      h[1](
        /*defs*/
        h[5][
          /*type*/
          h[0]
        ] || /*defs*/
        h[5].file
      ) + "") && Ql(r, a), /*mode*/
      h[3] !== "short" ? d ? d.p(h, b) : (d = ji(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      f || (Gn(i), f = !0);
    },
    o(h) {
      Jn(i), f = !1;
    },
    d(h) {
      h && Yn(e), c[n].d(), d && d.d();
    }
  };
}
function ju(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: o = void 0 } = e, { mode: a = "full" } = e, { hovered: r = !1 } = e;
  const s = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return l.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, i = f.i18n), "message" in f && t(2, o = f.message), "mode" in f && t(3, a = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, i, o, a, r, s];
}
class fs extends qu {
  constructor(e) {
    super(), Bu(this, e, ju, Tu, Au, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Iu,
  append: Tl,
  attr: We,
  check_outros: on,
  create_component: rl,
  destroy_component: fl,
  detach: Kt,
  element: kn,
  empty: Ru,
  group_outros: sn,
  init: Fu,
  insert: Gt,
  listen: ul,
  mount_component: cl,
  safe_not_equal: Hu,
  space: jl,
  toggle_class: at,
  transition_in: $,
  transition_out: ue
} = window.__gradio__svelte__internal;
function Ii(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), o, a = (
    /*sources*/
    l[1].includes("webcam")
  ), r, s = (
    /*sources*/
    l[1].includes("clipboard")
  ), f, u = t && Ri(l), c = i && Fi(l), _ = a && Hi(l), d = s && Ui(l);
  return {
    c() {
      e = kn("span"), u && u.c(), n = jl(), c && c.c(), o = jl(), _ && _.c(), r = jl(), d && d.c(), We(e, "class", "source-selection svelte-1jp3vgd"), We(e, "data-testid", "source-select");
    },
    m(h, b) {
      Gt(h, e, b), u && u.m(e, null), Tl(e, n), c && c.m(e, null), Tl(e, o), _ && _.m(e, null), Tl(e, r), d && d.m(e, null), f = !0;
    },
    p(h, b) {
      b & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? u ? (u.p(h, b), b & /*sources*/
      2 && $(u, 1)) : (u = Ri(h), u.c(), $(u, 1), u.m(e, n)) : u && (sn(), ue(u, 1, 1, () => {
        u = null;
      }), on()), b & /*sources*/
      2 && (i = /*sources*/
      h[1].includes("microphone")), i ? c ? (c.p(h, b), b & /*sources*/
      2 && $(c, 1)) : (c = Fi(h), c.c(), $(c, 1), c.m(e, o)) : c && (sn(), ue(c, 1, 1, () => {
        c = null;
      }), on()), b & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("webcam")), a ? _ ? (_.p(h, b), b & /*sources*/
      2 && $(_, 1)) : (_ = Hi(h), _.c(), $(_, 1), _.m(e, r)) : _ && (sn(), ue(_, 1, 1, () => {
        _ = null;
      }), on()), b & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("clipboard")), s ? d ? (d.p(h, b), b & /*sources*/
      2 && $(d, 1)) : (d = Ui(h), d.c(), $(d, 1), d.m(e, null)) : d && (sn(), ue(d, 1, 1, () => {
        d = null;
      }), on());
    },
    i(h) {
      f || ($(u), $(c), $(_), $(d), f = !0);
    },
    o(h) {
      ue(u), ue(c), ue(_), ue(d), f = !1;
    },
    d(h) {
      h && Kt(e), u && u.d(), c && c.d(), _ && _.d(), d && d.d();
    }
  };
}
function Ri(l) {
  let e, t, n, i, o;
  return t = new os({}), {
    c() {
      e = kn("button"), rl(t.$$.fragment), We(e, "class", "icon svelte-1jp3vgd"), We(e, "aria-label", "Upload file"), at(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(a, r) {
      Gt(a, e, r), cl(t, e, null), n = !0, i || (o = ul(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && at(
        e,
        "selected",
        /*active_source*/
        a[0] === "upload" || !/*active_source*/
        a[0]
      );
    },
    i(a) {
      n || ($(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ue(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Kt(e), fl(t), i = !1, o();
    }
  };
}
function Fi(l) {
  let e, t, n, i, o;
  return t = new Qf({}), {
    c() {
      e = kn("button"), rl(t.$$.fragment), We(e, "class", "icon svelte-1jp3vgd"), We(e, "aria-label", "Record audio"), at(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(a, r) {
      Gt(a, e, r), cl(t, e, null), n = !0, i || (o = ul(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && at(
        e,
        "selected",
        /*active_source*/
        a[0] === "microphone"
      );
    },
    i(a) {
      n || ($(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ue(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Kt(e), fl(t), i = !1, o();
    }
  };
}
function Hi(l) {
  let e, t, n, i, o;
  return t = new uu({}), {
    c() {
      e = kn("button"), rl(t.$$.fragment), We(e, "class", "icon svelte-1jp3vgd"), We(e, "aria-label", "Capture from camera"), at(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(a, r) {
      Gt(a, e, r), cl(t, e, null), n = !0, i || (o = ul(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && at(
        e,
        "selected",
        /*active_source*/
        a[0] === "webcam"
      );
    },
    i(a) {
      n || ($(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ue(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Kt(e), fl(t), i = !1, o();
    }
  };
}
function Ui(l) {
  let e, t, n, i, o;
  return t = new is({}), {
    c() {
      e = kn("button"), rl(t.$$.fragment), We(e, "class", "icon svelte-1jp3vgd"), We(e, "aria-label", "Paste from clipboard"), at(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(a, r) {
      Gt(a, e, r), cl(t, e, null), n = !0, i || (o = ul(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && at(
        e,
        "selected",
        /*active_source*/
        a[0] === "clipboard"
      );
    },
    i(a) {
      n || ($(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ue(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Kt(e), fl(t), i = !1, o();
    }
  };
}
function Uu(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && Ii(l)
  );
  return {
    c() {
      n && n.c(), e = Ru();
    },
    m(i, o) {
      n && n.m(i, o), Gt(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && $(n, 1)) : (n = Ii(i), n.c(), $(n, 1), n.m(e.parentNode, e)) : n && (sn(), ue(n, 1, 1, () => {
        n = null;
      }), on());
    },
    i(i) {
      t || ($(n), t = !0);
    },
    o(i) {
      ue(n), t = !1;
    },
    d(i) {
      i && Kt(e), n && n.d(i);
    }
  };
}
function Nu(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(h, b, m, w) {
    function k(g) {
      return g instanceof m ? g : new m(function(S) {
        S(g);
      });
    }
    return new (m || (m = Promise))(function(g, S) {
      function M(v) {
        try {
          z(w.next(v));
        } catch (q) {
          S(q);
        }
      }
      function y(v) {
        try {
          z(w.throw(v));
        } catch (q) {
          S(q);
        }
      }
      function z(v) {
        v.done ? g(v.value) : k(v.value).then(M, y);
      }
      z((w = w.apply(h, b || [])).next());
    });
  };
  let { sources: o } = e, { active_source: a } = e, { handle_clear: r = () => {
  } } = e, { handle_select: s = () => {
  } } = e;
  function f(h) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, a = h), s(h);
    });
  }
  const u = () => f("upload"), c = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (h) => {
    "sources" in h && t(1, o = h.sources), "active_source" in h && t(0, a = h.active_source), "handle_clear" in h && t(4, r = h.handle_clear), "handle_select" in h && t(5, s = h.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    a,
    o,
    n,
    f,
    r,
    s,
    u,
    c,
    _,
    d
  ];
}
class Ou extends Iu {
  constructor(e) {
    super(), Fu(this, e, Nu, Uu, Hu, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Yt(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Vn() {
}
function Xu(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function Ni(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const us = typeof window < "u";
let Oi = us ? () => window.performance.now() : () => Date.now(), cs = us ? (l) => requestAnimationFrame(l) : Vn;
const Pt = /* @__PURE__ */ new Set();
function _s(l) {
  Pt.forEach((e) => {
    e.c(l) || (Pt.delete(e), e.f());
  }), Pt.size !== 0 && cs(_s);
}
function Yu(l) {
  let e;
  return Pt.size === 0 && cs(_s), {
    promise: new Promise((t) => {
      Pt.add(e = { c: l, f: t });
    }),
    abort() {
      Pt.delete(e);
    }
  };
}
function Wu(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Xi(l, { delay: e = 0, duration: t = 400, easing: n = Wu, x: i = 0, y: o = 0, opacity: a = 0 } = {}) {
  const r = getComputedStyle(l), s = +r.opacity, f = r.transform === "none" ? "" : r.transform, u = s * (1 - a), [c, _] = Ni(i), [d, h] = Ni(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (b, m) => `
			transform: ${f} translate(${(1 - b) * c}${_}, ${(1 - b) * d}${h});
			opacity: ${s - u * m}`
  };
}
const It = [];
function Vu(l, e = Vn) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Xu(l, r) && (l = r, t)) {
      const s = !It.length;
      for (const f of n)
        f[1](), It.push(f, l);
      if (s) {
        for (let f = 0; f < It.length; f += 2)
          It[f][0](It[f + 1]);
        It.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function a(r, s = Vn) {
    const f = [r, s];
    return n.add(f), n.size === 1 && (t = e(i, o) || Vn), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: a };
}
function Yi(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function $l(l, e, t, n) {
  if (typeof t == "number" || Yi(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), a = l.opts.stiffness * i, r = l.opts.damping * o, s = (a - r) * l.inv_mass, f = (o + s) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, Yi(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => $l(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = $l(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Wi(l, e = {}) {
  const t = Vu(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let a, r, s, f = l, u = l, c = 1, _ = 0, d = !1;
  function h(m, w = {}) {
    u = m;
    const k = s = {};
    return l == null || w.hard || b.stiffness >= 1 && b.damping >= 1 ? (d = !0, a = Oi(), f = m, t.set(l = u), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), c = 0), r || (a = Oi(), d = !1, r = Yu((g) => {
      if (d)
        return d = !1, r = null, !1;
      c = Math.min(c + _, 1);
      const S = {
        inv_mass: c,
        opts: b,
        settled: !0,
        dt: (g - a) * 60 / 1e3
      }, M = $l(S, f, l, u);
      return a = g, f = l, t.set(l = M), S.settled && (r = null), !S.settled;
    })), new Promise((g) => {
      r.promise.then(() => {
        k === s && g();
      });
    }));
  }
  const b = {
    set: h,
    update: (m, w) => h(m(u, l), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return b;
}
const {
  SvelteComponent: Pu,
  append: je,
  attr: U,
  component_subscribe: Vi,
  detach: Zu,
  element: Ku,
  init: Gu,
  insert: Ju,
  noop: Pi,
  safe_not_equal: Qu,
  set_style: Bn,
  svg_element: Ie,
  toggle_class: Zi
} = window.__gradio__svelte__internal, { onMount: xu } = window.__gradio__svelte__internal;
function $u(l) {
  let e, t, n, i, o, a, r, s, f, u, c, _;
  return {
    c() {
      e = Ku("div"), t = Ie("svg"), n = Ie("g"), i = Ie("path"), o = Ie("path"), a = Ie("path"), r = Ie("path"), s = Ie("g"), f = Ie("path"), u = Ie("path"), c = Ie("path"), _ = Ie("path"), U(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), U(i, "fill", "#FF7C00"), U(i, "fill-opacity", "0.4"), U(i, "class", "svelte-43sxxs"), U(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), U(o, "fill", "#FF7C00"), U(o, "class", "svelte-43sxxs"), U(a, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), U(a, "fill", "#FF7C00"), U(a, "fill-opacity", "0.4"), U(a, "class", "svelte-43sxxs"), U(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), U(r, "fill", "#FF7C00"), U(r, "class", "svelte-43sxxs"), Bn(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), U(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), U(f, "fill", "#FF7C00"), U(f, "fill-opacity", "0.4"), U(f, "class", "svelte-43sxxs"), U(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), U(u, "fill", "#FF7C00"), U(u, "class", "svelte-43sxxs"), U(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), U(c, "fill", "#FF7C00"), U(c, "fill-opacity", "0.4"), U(c, "class", "svelte-43sxxs"), U(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), U(_, "fill", "#FF7C00"), U(_, "class", "svelte-43sxxs"), Bn(s, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), U(t, "viewBox", "-1200 -1200 3000 3000"), U(t, "fill", "none"), U(t, "xmlns", "http://www.w3.org/2000/svg"), U(t, "class", "svelte-43sxxs"), U(e, "class", "svelte-43sxxs"), Zi(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, h) {
      Ju(d, e, h), je(e, t), je(t, n), je(n, i), je(n, o), je(n, a), je(n, r), je(t, s), je(s, f), je(s, u), je(s, c), je(s, _);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && Bn(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && Bn(s, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), h & /*margin*/
      1 && Zi(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Pi,
    o: Pi,
    d(d) {
      d && Zu(e);
    }
  };
}
function ec(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, h, b, m) {
    function w(k) {
      return k instanceof b ? k : new b(function(g) {
        g(k);
      });
    }
    return new (b || (b = Promise))(function(k, g) {
      function S(z) {
        try {
          y(m.next(z));
        } catch (v) {
          g(v);
        }
      }
      function M(z) {
        try {
          y(m.throw(z));
        } catch (v) {
          g(v);
        }
      }
      function y(z) {
        z.done ? k(z.value) : w(z.value).then(S, M);
      }
      y((m = m.apply(d, h || [])).next());
    });
  };
  let { margin: a = !0 } = e;
  const r = Wi([0, 0]);
  Vi(l, r, (d) => t(1, n = d));
  const s = Wi([0, 0]);
  Vi(l, s, (d) => t(2, i = d));
  let f;
  function u() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), s.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), s.set([125, -140])]), yield Promise.all([r.set([-125, 0]), s.set([125, -0])]), yield Promise.all([r.set([125, 0]), s.set([-125, 0])]);
    });
  }
  function c() {
    return o(this, void 0, void 0, function* () {
      yield u(), f || c();
    });
  }
  function _() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), s.set([-125, 0])]), c();
    });
  }
  return xu(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, a = d.margin);
  }, [a, n, i, r, s];
}
class tc extends Pu {
  constructor(e) {
    super(), Gu(this, e, ec, $u, Qu, { margin: 0 });
  }
}
const {
  SvelteComponent: nc,
  append: vt,
  attr: Fe,
  binding_callbacks: Ki,
  check_outros: ei,
  create_component: ds,
  create_slot: hs,
  destroy_component: ms,
  destroy_each: bs,
  detach: T,
  element: Xe,
  empty: Jt,
  ensure_array_like: Qn,
  get_all_dirty_from_scope: gs,
  get_slot_changes: ws,
  group_outros: ti,
  init: lc,
  insert: j,
  mount_component: ps,
  noop: ni,
  safe_not_equal: ic,
  set_data: Be,
  set_style: ot,
  space: Me,
  text: P,
  toggle_class: Ee,
  transition_in: Re,
  transition_out: Ye,
  update_slot_base: ks
} = window.__gradio__svelte__internal, { tick: oc } = window.__gradio__svelte__internal, { onDestroy: sc } = window.__gradio__svelte__internal, { createEventDispatcher: ac } = window.__gradio__svelte__internal, rc = (l) => ({}), Gi = (l) => ({}), fc = (l) => ({}), Ji = (l) => ({});
function Qi(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function xi(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function uc(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), a, r, s;
  t = new al({
    props: {
      Icon: ci,
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
  ), u = hs(
    f,
    l,
    /*$$scope*/
    l[29],
    Gi
  );
  return {
    c() {
      e = Xe("div"), ds(t.$$.fragment), n = Me(), i = Xe("span"), a = P(o), r = Me(), u && u.c(), Fe(e, "class", "clear-status svelte-16nch4a"), Fe(i, "class", "error svelte-16nch4a");
    },
    m(c, _) {
      j(c, e, _), ps(t, e, null), j(c, n, _), j(c, i, _), vt(i, a), j(c, r, _), u && u.m(c, _), s = !0;
    },
    p(c, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      c[1]("common.clear")), t.$set(d), (!s || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      c[1]("common.error") + "") && Be(a, o), u && u.p && (!s || _[0] & /*$$scope*/
      536870912) && ks(
        u,
        f,
        c,
        /*$$scope*/
        c[29],
        s ? ws(
          f,
          /*$$scope*/
          c[29],
          _,
          rc
        ) : gs(
          /*$$scope*/
          c[29]
        ),
        Gi
      );
    },
    i(c) {
      s || (Re(t.$$.fragment, c), Re(u, c), s = !0);
    },
    o(c) {
      Ye(t.$$.fragment, c), Ye(u, c), s = !1;
    },
    d(c) {
      c && (T(e), T(n), T(i), T(r)), ms(t), u && u.d(c);
    }
  };
}
function cc(l) {
  let e, t, n, i, o, a, r, s, f, u = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && $i(l)
  );
  function c(g, S) {
    if (
      /*progress*/
      g[7]
    ) return hc;
    if (
      /*queue_position*/
      g[2] !== null && /*queue_size*/
      g[3] !== void 0 && /*queue_position*/
      g[2] >= 0
    ) return dc;
    if (
      /*queue_position*/
      g[2] === 0
    ) return _c;
  }
  let _ = c(l), d = _ && _(l), h = (
    /*timer*/
    l[5] && no(l)
  );
  const b = [wc, gc], m = [];
  function w(g, S) {
    return (
      /*last_progress_level*/
      g[15] != null ? 0 : (
        /*show_progress*/
        g[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = w(l)) && (a = m[o] = b[o](l));
  let k = !/*timer*/
  l[5] && fo(l);
  return {
    c() {
      u && u.c(), e = Me(), t = Xe("div"), d && d.c(), n = Me(), h && h.c(), i = Me(), a && a.c(), r = Me(), k && k.c(), s = Jt(), Fe(t, "class", "progress-text svelte-16nch4a"), Ee(
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
    m(g, S) {
      u && u.m(g, S), j(g, e, S), j(g, t, S), d && d.m(t, null), vt(t, n), h && h.m(t, null), j(g, i, S), ~o && m[o].m(g, S), j(g, r, S), k && k.m(g, S), j(g, s, S), f = !0;
    },
    p(g, S) {
      /*variant*/
      g[8] === "default" && /*show_eta_bar*/
      g[18] && /*show_progress*/
      g[6] === "full" ? u ? u.p(g, S) : (u = $i(g), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), _ === (_ = c(g)) && d ? d.p(g, S) : (d && d.d(1), d = _ && _(g), d && (d.c(), d.m(t, n))), /*timer*/
      g[5] ? h ? h.p(g, S) : (h = no(g), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!f || S[0] & /*variant*/
      256) && Ee(
        t,
        "meta-text-center",
        /*variant*/
        g[8] === "center"
      ), (!f || S[0] & /*variant*/
      256) && Ee(
        t,
        "meta-text",
        /*variant*/
        g[8] === "default"
      );
      let M = o;
      o = w(g), o === M ? ~o && m[o].p(g, S) : (a && (ti(), Ye(m[M], 1, 1, () => {
        m[M] = null;
      }), ei()), ~o ? (a = m[o], a ? a.p(g, S) : (a = m[o] = b[o](g), a.c()), Re(a, 1), a.m(r.parentNode, r)) : a = null), /*timer*/
      g[5] ? k && (ti(), Ye(k, 1, 1, () => {
        k = null;
      }), ei()) : k ? (k.p(g, S), S[0] & /*timer*/
      32 && Re(k, 1)) : (k = fo(g), k.c(), Re(k, 1), k.m(s.parentNode, s));
    },
    i(g) {
      f || (Re(a), Re(k), f = !0);
    },
    o(g) {
      Ye(a), Ye(k), f = !1;
    },
    d(g) {
      g && (T(e), T(t), T(i), T(r), T(s)), u && u.d(g), d && d.d(), h && h.d(), ~o && m[o].d(g), k && k.d(g);
    }
  };
}
function $i(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Xe("div"), Fe(e, "class", "eta-bar svelte-16nch4a"), ot(e, "transform", t);
    },
    m(n, i) {
      j(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && ot(e, "transform", t);
    },
    d(n) {
      n && T(e);
    }
  };
}
function _c(l) {
  let e;
  return {
    c() {
      e = P("processing |");
    },
    m(t, n) {
      j(t, e, n);
    },
    p: ni,
    d(t) {
      t && T(e);
    }
  };
}
function dc(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, a;
  return {
    c() {
      e = P("queue: "), n = P(t), i = P("/"), o = P(
        /*queue_size*/
        l[3]
      ), a = P(" |");
    },
    m(r, s) {
      j(r, e, s), j(r, n, s), j(r, i, s), j(r, o, s), j(r, a, s);
    },
    p(r, s) {
      s[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Be(n, t), s[0] & /*queue_size*/
      8 && Be(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (T(e), T(n), T(i), T(o), T(a));
    }
  };
}
function hc(l) {
  let e, t = Qn(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = to(xi(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Jt();
    },
    m(i, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = Qn(
          /*progress*/
          i[7]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const r = xi(i, t, a);
          n[a] ? n[a].p(r, o) : (n[a] = to(r), n[a].c(), n[a].m(e.parentNode, e));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && T(e), bs(n, i);
    }
  };
}
function eo(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", a;
  function r(u, c) {
    return (
      /*p*/
      u[41].length != null ? bc : mc
    );
  }
  let s = r(l), f = s(l);
  return {
    c() {
      f.c(), e = Me(), n = P(t), i = P(" | "), a = P(o);
    },
    m(u, c) {
      f.m(u, c), j(u, e, c), j(u, n, c), j(u, i, c), j(u, a, c);
    },
    p(u, c) {
      s === (s = r(u)) && f ? f.p(u, c) : (f.d(1), f = s(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && Be(n, t);
    },
    d(u) {
      u && (T(e), T(n), T(i), T(a)), f.d(u);
    }
  };
}
function mc(l) {
  let e = Yt(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = P(e);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Yt(
        /*p*/
        n[41].index || 0
      ) + "") && Be(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function bc(l) {
  let e = Yt(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Yt(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = P(e), n = P("/"), o = P(i);
    },
    m(a, r) {
      j(a, t, r), j(a, n, r), j(a, o, r);
    },
    p(a, r) {
      r[0] & /*progress*/
      128 && e !== (e = Yt(
        /*p*/
        a[41].index || 0
      ) + "") && Be(t, e), r[0] & /*progress*/
      128 && i !== (i = Yt(
        /*p*/
        a[41].length
      ) + "") && Be(o, i);
    },
    d(a) {
      a && (T(t), T(n), T(o));
    }
  };
}
function to(l) {
  let e, t = (
    /*p*/
    l[41].index != null && eo(l)
  );
  return {
    c() {
      t && t.c(), e = Jt();
    },
    m(n, i) {
      t && t.m(n, i), j(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = eo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function no(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = P(
        /*formatted_timer*/
        l[20]
      ), n = P(t), i = P("s");
    },
    m(o, a) {
      j(o, e, a), j(o, n, a), j(o, i, a);
    },
    p(o, a) {
      a[0] & /*formatted_timer*/
      1048576 && Be(
        e,
        /*formatted_timer*/
        o[20]
      ), a[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Be(n, t);
    },
    d(o) {
      o && (T(e), T(n), T(i));
    }
  };
}
function gc(l) {
  let e, t;
  return e = new tc({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      ds(e.$$.fragment);
    },
    m(n, i) {
      ps(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Re(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ms(e, n);
    }
  };
}
function wc(l) {
  let e, t, n, i, o, a = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && lo(l)
  );
  return {
    c() {
      e = Xe("div"), t = Xe("div"), r && r.c(), n = Me(), i = Xe("div"), o = Xe("div"), Fe(t, "class", "progress-level-inner svelte-16nch4a"), Fe(o, "class", "progress-bar svelte-16nch4a"), ot(o, "width", a), Fe(i, "class", "progress-bar-wrap svelte-16nch4a"), Fe(e, "class", "progress-level svelte-16nch4a");
    },
    m(s, f) {
      j(s, e, f), vt(e, t), r && r.m(t, null), vt(e, n), vt(e, i), vt(i, o), l[31](o);
    },
    p(s, f) {
      /*progress*/
      s[7] != null ? r ? r.p(s, f) : (r = lo(s), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && a !== (a = `${/*last_progress_level*/
      s[15] * 100}%`) && ot(o, "width", a);
    },
    i: ni,
    o: ni,
    d(s) {
      s && T(e), r && r.d(), l[31](null);
    }
  };
}
function lo(l) {
  let e, t = Qn(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = ro(Qi(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Jt();
    },
    m(i, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(i, o);
      j(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Qn(
          /*progress*/
          i[7]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const r = Qi(i, t, a);
          n[a] ? n[a].p(r, o) : (n[a] = ro(r), n[a].c(), n[a].m(e.parentNode, e));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && T(e), bs(n, i);
    }
  };
}
function io(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && pc()
  ), a = (
    /*p*/
    l[41].desc != null && oo(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && so()
  ), s = (
    /*progress_level*/
    l[14] != null && ao(l)
  );
  return {
    c() {
      o && o.c(), e = Me(), a && a.c(), t = Me(), r && r.c(), n = Me(), s && s.c(), i = Jt();
    },
    m(f, u) {
      o && o.m(f, u), j(f, e, u), a && a.m(f, u), j(f, t, u), r && r.m(f, u), j(f, n, u), s && s.m(f, u), j(f, i, u);
    },
    p(f, u) {
      /*p*/
      f[41].desc != null ? a ? a.p(f, u) : (a = oo(f), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = so(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? s ? s.p(f, u) : (s = ao(f), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(f) {
      f && (T(e), T(t), T(n), T(i)), o && o.d(f), a && a.d(f), r && r.d(f), s && s.d(f);
    }
  };
}
function pc(l) {
  let e;
  return {
    c() {
      e = P(" /");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function oo(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = P(e);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Be(t, e);
    },
    d(n) {
      n && T(t);
    }
  };
}
function so(l) {
  let e;
  return {
    c() {
      e = P("-");
    },
    m(t, n) {
      j(t, e, n);
    },
    d(t) {
      t && T(e);
    }
  };
}
function ao(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = P(e), n = P("%");
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
      ] || 0)).toFixed(1) + "") && Be(t, e);
    },
    d(i) {
      i && (T(t), T(n));
    }
  };
}
function ro(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && io(l)
  );
  return {
    c() {
      t && t.c(), e = Jt();
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
      ] != null ? t ? t.p(n, i) : (t = io(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && T(e), t && t.d(n);
    }
  };
}
function fo(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), a = hs(
    o,
    l,
    /*$$scope*/
    l[29],
    Ji
  );
  return {
    c() {
      e = Xe("p"), t = P(
        /*loading_text*/
        l[9]
      ), n = Me(), a && a.c(), Fe(e, "class", "loading svelte-16nch4a");
    },
    m(r, s) {
      j(r, e, s), vt(e, t), j(r, n, s), a && a.m(r, s), i = !0;
    },
    p(r, s) {
      (!i || s[0] & /*loading_text*/
      512) && Be(
        t,
        /*loading_text*/
        r[9]
      ), a && a.p && (!i || s[0] & /*$$scope*/
      536870912) && ks(
        a,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? ws(
          o,
          /*$$scope*/
          r[29],
          s,
          fc
        ) : gs(
          /*$$scope*/
          r[29]
        ),
        Ji
      );
    },
    i(r) {
      i || (Re(a, r), i = !0);
    },
    o(r) {
      Ye(a, r), i = !1;
    },
    d(r) {
      r && (T(e), T(n)), a && a.d(r);
    }
  };
}
function kc(l) {
  let e, t, n, i, o;
  const a = [cc, uc], r = [];
  function s(f, u) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = s(l)) && (n = r[t] = a[t](l)), {
    c() {
      e = Xe("div"), n && n.c(), Fe(e, "class", i = "wrap " + /*variant*/
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
      ), ot(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), ot(
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
      t = s(f), t === c ? ~t && r[t].p(f, u) : (n && (ti(), Ye(r[c], 1, 1, () => {
        r[c] = null;
      }), ei()), ~t ? (n = r[t], n ? n.p(f, u) : (n = r[t] = a[t](f), n.c()), Re(n, 1), n.m(e, null)) : n = null), (!o || u[0] & /*variant, show_progress*/
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
      1024 && ot(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && ot(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (Re(n), o = !0);
    },
    o(f) {
      Ye(n), o = !1;
    },
    d(f) {
      f && T(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var vc = function(l, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function r(u) {
      try {
        f(n.next(u));
      } catch (c) {
        a(c);
      }
    }
    function s(u) {
      try {
        f(n.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function f(u) {
      u.done ? o(u.value) : i(u.value).then(r, s);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let An = [], Il = !1;
function yc(l) {
  return vc(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (An.push(e), !Il) Il = !0;
      else return;
      yield oc(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < An.length; i++) {
          const a = An[i].getBoundingClientRect();
          (i === 0 || a.top + window.scrollY <= n[0]) && (n[0] = a.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Il = !1, An = [];
      });
    }
  });
}
function Cc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const a = ac();
  let { i18n: r } = e, { eta: s = null } = e, { queue_position: f } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: b = null } = e, { progress: m = null } = e, { variant: w = "default" } = e, { loading_text: k = "Loading..." } = e, { absolute: g = !0 } = e, { translucent: S = !1 } = e, { border: M = !1 } = e, { autoscroll: y } = e, z, v = !1, q = 0, R = 0, I = null, B = null, W = 0, H = null, le, X = null, ee = !0;
  const ae = () => {
    t(0, s = t(27, I = t(19, de = null))), t(25, q = performance.now()), t(26, R = 0), v = !0, ye();
  };
  function ye() {
    requestAnimationFrame(() => {
      t(26, R = (performance.now() - q) / 1e3), v && ye();
    });
  }
  function L() {
    t(26, R = 0), t(0, s = t(27, I = t(19, de = null))), v && (v = !1);
  }
  sc(() => {
    v && L();
  });
  let de = null;
  function Ae(A) {
    Ki[A ? "unshift" : "push"](() => {
      X = A, t(16, X), t(7, m), t(14, H), t(15, le);
    });
  }
  const Le = () => {
    a("clear_status");
  };
  function Ce(A) {
    Ki[A ? "unshift" : "push"](() => {
      z = A, t(13, z);
    });
  }
  return l.$$set = (A) => {
    "i18n" in A && t(1, r = A.i18n), "eta" in A && t(0, s = A.eta), "queue_position" in A && t(2, f = A.queue_position), "queue_size" in A && t(3, u = A.queue_size), "status" in A && t(4, c = A.status), "scroll_to_output" in A && t(22, _ = A.scroll_to_output), "timer" in A && t(5, d = A.timer), "show_progress" in A && t(6, h = A.show_progress), "message" in A && t(23, b = A.message), "progress" in A && t(7, m = A.progress), "variant" in A && t(8, w = A.variant), "loading_text" in A && t(9, k = A.loading_text), "absolute" in A && t(10, g = A.absolute), "translucent" in A && t(11, S = A.translucent), "border" in A && t(12, M = A.border), "autoscroll" in A && t(24, y = A.autoscroll), "$$scope" in A && t(29, o = A.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (s === null && t(0, s = I), s != null && I !== s && (t(28, B = (performance.now() - q) / 1e3 + s), t(19, de = B.toFixed(1)), t(27, I = s))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, W = B === null || B <= 0 || !R ? null : Math.min(R / B, 1)), l.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, ee = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, H = m.map((A) => {
      if (A.index != null && A.length != null)
        return A.index / A.length;
      if (A.progress != null)
        return A.progress;
    })) : t(14, H = null), H ? (t(15, le = H[H.length - 1]), X && (le === 0 ? t(16, X.style.transition = "0", X) : t(16, X.style.transition = "150ms", X))) : t(15, le = void 0)), l.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? ae() : L()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && _ && (c === "pending" || c === "complete") && yc(z, y), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = R.toFixed(1));
  }, [
    s,
    r,
    f,
    u,
    c,
    d,
    h,
    m,
    w,
    k,
    g,
    S,
    M,
    z,
    H,
    le,
    X,
    W,
    ee,
    de,
    n,
    a,
    _,
    b,
    y,
    q,
    R,
    I,
    B,
    o,
    i,
    Ae,
    Le,
    Ce
  ];
}
class Sc extends nc {
  constructor(e) {
    super(), lc(
      this,
      e,
      Cc,
      kc,
      ic,
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
const { setContext: g1, getContext: zc } = window.__gradio__svelte__internal, qc = "WORKER_PROXY_CONTEXT_KEY";
function vs() {
  return zc(qc);
}
function Ec(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function ys(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Cs(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!Ec(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Mc(l) {
  if (l == null || !Cs(l))
    return l;
  const e = vs();
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
      type: ys(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Bc,
  assign: xn,
  check_outros: Ss,
  compute_rest_props: uo,
  create_slot: _i,
  detach: _l,
  element: zs,
  empty: qs,
  exclude_internal_props: Ac,
  get_all_dirty_from_scope: di,
  get_slot_changes: hi,
  get_spread_update: Es,
  group_outros: Ms,
  init: Lc,
  insert: dl,
  listen: Bs,
  prevent_default: Dc,
  safe_not_equal: Tc,
  set_attributes: $n,
  transition_in: zt,
  transition_out: qt,
  update_slot_base: mi
} = window.__gradio__svelte__internal, { createEventDispatcher: jc } = window.__gradio__svelte__internal;
function Ic(l) {
  let e, t, n, i, o;
  const a = (
    /*#slots*/
    l[8].default
  ), r = _i(
    a,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let s = [
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
  for (let u = 0; u < s.length; u += 1)
    f = xn(f, s[u]);
  return {
    c() {
      e = zs("a"), r && r.c(), $n(e, f);
    },
    m(u, c) {
      dl(u, e, c), r && r.m(e, null), n = !0, i || (o = Bs(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(u, c) {
      r && r.p && (!n || c & /*$$scope*/
      128) && mi(
        r,
        a,
        u,
        /*$$scope*/
        u[7],
        n ? hi(
          a,
          /*$$scope*/
          u[7],
          c,
          null
        ) : di(
          /*$$scope*/
          u[7]
        ),
        null
      ), $n(e, f = Es(s, [
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
      n || (zt(r, u), n = !0);
    },
    o(u) {
      qt(r, u), n = !1;
    },
    d(u) {
      u && _l(e), r && r.d(u), i = !1, o();
    }
  };
}
function Rc(l) {
  let e, t, n, i;
  const o = [Hc, Fc], a = [];
  function r(s, f) {
    return (
      /*is_downloading*/
      s[2] ? 0 : 1
    );
  }
  return e = r(l), t = a[e] = o[e](l), {
    c() {
      t.c(), n = qs();
    },
    m(s, f) {
      a[e].m(s, f), dl(s, n, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (Ms(), qt(a[u], 1, 1, () => {
        a[u] = null;
      }), Ss(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), zt(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (zt(t), i = !0);
    },
    o(s) {
      qt(t), i = !1;
    },
    d(s) {
      s && _l(n), a[e].d(s);
    }
  };
}
function Fc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), a = _i(
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
  ], s = {};
  for (let f = 0; f < r.length; f += 1)
    s = xn(s, r[f]);
  return {
    c() {
      e = zs("a"), a && a.c(), $n(e, s);
    },
    m(f, u) {
      dl(f, e, u), a && a.m(e, null), t = !0, n || (i = Bs(e, "click", Dc(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, u) {
      a && a.p && (!t || u & /*$$scope*/
      128) && mi(
        a,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? hi(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : di(
          /*$$scope*/
          f[7]
        ),
        null
      ), $n(e, s = Es(r, [
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
      t || (zt(a, f), t = !0);
    },
    o(f) {
      qt(a, f), t = !1;
    },
    d(f) {
      f && _l(e), a && a.d(f), n = !1, i();
    }
  };
}
function Hc(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = _i(
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
      128) && mi(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? hi(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : di(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (zt(n, i), e = !0);
    },
    o(i) {
      qt(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Uc(l) {
  let e, t, n, i, o;
  const a = [Rc, Ic], r = [];
  function s(f, u) {
    return u & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Cs(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = s(l, -1), n = r[t] = a[t](l), {
    c() {
      n.c(), i = qs();
    },
    m(f, u) {
      r[t].m(f, u), dl(f, i, u), o = !0;
    },
    p(f, [u]) {
      let c = t;
      t = s(f, u), t === c ? r[t].p(f, u) : (Ms(), qt(r[c], 1, 1, () => {
        r[c] = null;
      }), Ss(), n = r[t], n ? n.p(f, u) : (n = r[t] = a[t](f), n.c()), zt(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (zt(n), o = !0);
    },
    o(f) {
      qt(n), o = !1;
    },
    d(f) {
      f && _l(i), r[t].d(f);
    }
  };
}
function Nc(l, e, t) {
  const n = ["href", "download"];
  let i = uo(e, n), { $$slots: o = {}, $$scope: a } = e;
  var r = this && this.__awaiter || function(h, b, m, w) {
    function k(g) {
      return g instanceof m ? g : new m(function(S) {
        S(g);
      });
    }
    return new (m || (m = Promise))(function(g, S) {
      function M(v) {
        try {
          z(w.next(v));
        } catch (q) {
          S(q);
        }
      }
      function y(v) {
        try {
          z(w.throw(v));
        } catch (q) {
          S(q);
        }
      }
      function z(v) {
        v.done ? g(v.value) : k(v.value).then(M, y);
      }
      z((w = w.apply(h, b || [])).next());
    });
  };
  let { href: s = void 0 } = e, { download: f } = e;
  const u = jc();
  let c = !1;
  const _ = vs();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (c)
        return;
      if (u("click"), s == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const b = new URL(s, window.location.href).pathname;
      t(2, c = !0), _.httpRequest({
        method: "GET",
        path: b,
        headers: {},
        query_string: ""
      }).then((m) => {
        if (m.status !== 200)
          throw new Error(`Failed to get file ${b} from the Wasm worker.`);
        const w = new Blob(
          [m.body],
          {
            type: ys(m.headers, "content-type")
          }
        ), k = URL.createObjectURL(w), g = document.createElement("a");
        g.href = k, g.download = f, g.click(), URL.revokeObjectURL(k);
      }).finally(() => {
        t(2, c = !1);
      });
    });
  }
  return l.$$set = (h) => {
    e = xn(xn({}, e), Ac(h)), t(6, i = uo(e, n)), "href" in h && t(0, s = h.href), "download" in h && t(1, f = h.download), "$$scope" in h && t(7, a = h.$$scope);
  }, [
    s,
    f,
    c,
    u,
    _,
    d,
    i,
    a,
    o
  ];
}
class Oc extends Bc {
  constructor(e) {
    super(), Lc(this, e, Nc, Uc, Tc, { href: 0, download: 1 });
  }
}
var Xc = Object.defineProperty, Yc = (l, e, t) => e in l ? Xc(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Pe = (l, e, t) => (Yc(l, typeof e != "symbol" ? e + "" : e, t), t), As = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, $t = (l, e, t) => (As(l, e, "read from private field"), t ? t.call(l) : e.get(l)), Wc = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, Vc = (l, e, t, n) => (As(l, e, "write to private field"), e.set(l, t), t), lt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Pc(l, e) {
  return l.map(
    (t) => new Zc({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Zc {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: o,
    is_stream: a,
    mime_type: r,
    alt_text: s
  }) {
    Pe(this, "path"), Pe(this, "url"), Pe(this, "orig_name"), Pe(this, "size"), Pe(this, "blob"), Pe(this, "is_stream"), Pe(this, "mime_type"), Pe(this, "alt_text"), Pe(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = a, this.mime_type = r, this.alt_text = s;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class w1 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = $t(this, lt) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const a = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, a)), t = t.slice(i + 1);
        }
        Vc(this, lt, t);
      },
      flush: (t) => {
        if ($t(this, lt) === "")
          return;
        const n = e.allowCR && $t(this, lt).endsWith("\r") ? $t(this, lt).slice(0, -1) : $t(this, lt);
        t.enqueue(n);
      }
    }), Wc(this, lt, "");
  }
}
lt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Kc,
  append: _e,
  attr: bt,
  detach: Ls,
  element: gt,
  init: Gc,
  insert: Ds,
  noop: co,
  safe_not_equal: Jc,
  set_data: el,
  set_style: Rl,
  space: li,
  text: Wt,
  toggle_class: _o
} = window.__gradio__svelte__internal, { onMount: Qc, createEventDispatcher: xc, onDestroy: $c } = window.__gradio__svelte__internal;
function ho(l) {
  let e, t, n, i, o = an(
    /*file_to_display*/
    l[2]
  ) + "", a, r, s, f, u = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), c;
  return {
    c() {
      e = gt("div"), t = gt("span"), n = gt("div"), i = gt("progress"), a = Wt(o), s = li(), f = gt("span"), c = Wt(u), Rl(i, "visibility", "hidden"), Rl(i, "height", "0"), Rl(i, "width", "0"), i.value = r = an(
        /*file_to_display*/
        l[2]
      ), bt(i, "max", "100"), bt(i, "class", "svelte-cr2edf"), bt(n, "class", "progress-bar svelte-cr2edf"), bt(f, "class", "file-name svelte-cr2edf"), bt(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Ds(_, e, d), _e(e, t), _e(t, n), _e(n, i), _e(i, a), _e(e, s), _e(e, f), _e(f, c);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = an(
        /*file_to_display*/
        _[2]
      ) + "") && el(a, o), d & /*file_to_display*/
      4 && r !== (r = an(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && u !== (u = /*file_to_display*/
      _[2].orig_name + "") && el(c, u);
    },
    d(_) {
      _ && Ls(e);
    }
  };
}
function e_(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, a, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), s, f, u, c = (
    /*file_to_display*/
    l[2] && ho(l)
  );
  return {
    c() {
      e = gt("div"), t = gt("span"), n = Wt("Uploading "), o = Wt(i), a = li(), s = Wt(r), f = Wt("..."), u = li(), c && c.c(), bt(t, "class", "uploading svelte-cr2edf"), bt(e, "class", "wrap svelte-cr2edf"), _o(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Ds(_, e, d), _e(e, t), _e(t, n), _e(t, o), _e(t, a), _e(t, s), _e(t, f), _e(e, u), c && c.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && el(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && el(s, r), /*file_to_display*/
      _[2] ? c ? c.p(_, d) : (c = ho(_), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d & /*progress*/
      2 && _o(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: co,
    o: co,
    d(_) {
      _ && Ls(e), c && c.d();
    }
  };
}
function an(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function t_(l) {
  let e = 0;
  return l.forEach((t) => {
    e += an(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function n_(l, e, t) {
  var n = this && this.__awaiter || function(b, m, w, k) {
    function g(S) {
      return S instanceof w ? S : new w(function(M) {
        M(S);
      });
    }
    return new (w || (w = Promise))(function(S, M) {
      function y(q) {
        try {
          v(k.next(q));
        } catch (R) {
          M(R);
        }
      }
      function z(q) {
        try {
          v(k.throw(q));
        } catch (R) {
          M(R);
        }
      }
      function v(q) {
        q.done ? S(q.value) : g(q.value).then(y, z);
      }
      v((k = k.apply(b, m || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: a } = e, { stream_handler: r } = e, s, f = !1, u, c, _ = a.map((b) => Object.assign(Object.assign({}, b), { progress: 0 }));
  const d = xc();
  function h(b, m) {
    t(0, _ = _.map((w) => (w.orig_name === b && (w.progress += m), w)));
  }
  return Qc(() => n(void 0, void 0, void 0, function* () {
    if (s = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), s == null)
      throw new Error("Event source is not defined");
    s.onmessage = function(b) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(b.data);
        f || t(1, f = !0), m.msg === "done" ? (s == null || s.close(), d("done")) : (t(7, u = m), h(m.orig_name, m.chunk_size));
      });
    };
  })), $c(() => {
    (s != null || s != null) && s.close();
  }), l.$$set = (b) => {
    "upload_id" in b && t(3, i = b.upload_id), "root" in b && t(4, o = b.root), "files" in b && t(5, a = b.files), "stream_handler" in b && t(6, r = b.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && t_(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, c = u || _[0]);
  }, [
    _,
    f,
    c,
    i,
    o,
    a,
    r,
    u
  ];
}
class l_ extends Kc {
  constructor(e) {
    super(), Gc(this, e, n_, e_, Jc, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: i_,
  append: mo,
  attr: se,
  binding_callbacks: o_,
  bubble: ct,
  check_outros: Ts,
  create_component: s_,
  create_slot: js,
  destroy_component: a_,
  detach: hl,
  element: ii,
  empty: Is,
  get_all_dirty_from_scope: Rs,
  get_slot_changes: Fs,
  group_outros: Hs,
  init: r_,
  insert: ml,
  listen: we,
  mount_component: f_,
  prevent_default: _t,
  run_all: u_,
  safe_not_equal: c_,
  set_style: Us,
  space: __,
  stop_propagation: dt,
  toggle_class: te,
  transition_in: st,
  transition_out: Et,
  update_slot_base: Ns
} = window.__gradio__svelte__internal, { createEventDispatcher: d_, tick: h_ } = window.__gradio__svelte__internal;
function m_(l) {
  let e, t, n, i, o, a, r, s, f, u, c;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = js(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ii("button"), d && d.c(), t = __(), n = ii("input"), se(n, "aria-label", "file upload"), se(n, "data-testid", "file-upload"), se(n, "type", "file"), se(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, se(n, "webkitdirectory", a = /*file_count*/
      l[6] === "directory" || void 0), se(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), se(n, "class", "svelte-1s26xmt"), se(e, "tabindex", s = /*hidden*/
      l[9] ? -1 : 0), se(e, "class", "svelte-1s26xmt"), te(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), te(
        e,
        "center",
        /*center*/
        l[4]
      ), te(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), te(
        e,
        "flex",
        /*flex*/
        l[5]
      ), te(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Us(e, "height", "100%");
    },
    m(h, b) {
      ml(h, e, b), d && d.m(e, null), mo(e, t), mo(e, n), l[34](n), f = !0, u || (c = [
        we(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        we(e, "drag", dt(_t(
          /*drag_handler*/
          l[27]
        ))),
        we(e, "dragstart", dt(_t(
          /*dragstart_handler*/
          l[28]
        ))),
        we(e, "dragend", dt(_t(
          /*dragend_handler*/
          l[29]
        ))),
        we(e, "dragover", dt(_t(
          /*dragover_handler*/
          l[30]
        ))),
        we(e, "dragenter", dt(_t(
          /*dragenter_handler*/
          l[31]
        ))),
        we(e, "dragleave", dt(_t(
          /*dragleave_handler*/
          l[32]
        ))),
        we(e, "drop", dt(_t(
          /*drop_handler*/
          l[33]
        ))),
        we(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        we(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        we(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        we(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], u = !0);
    },
    p(h, b) {
      d && d.p && (!f || b[0] & /*$$scope*/
      33554432) && Ns(
        d,
        _,
        h,
        /*$$scope*/
        h[25],
        f ? Fs(
          _,
          /*$$scope*/
          h[25],
          b,
          null
        ) : Rs(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!f || b[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      h[16] || void 0)) && se(n, "accept", i), (!f || b[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = o), (!f || b[0] & /*file_count*/
      64 && a !== (a = /*file_count*/
      h[6] === "directory" || void 0)) && se(n, "webkitdirectory", a), (!f || b[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && se(n, "mozdirectory", r), (!f || b[0] & /*hidden*/
      512 && s !== (s = /*hidden*/
      h[9] ? -1 : 0)) && se(e, "tabindex", s), (!f || b[0] & /*hidden*/
      512) && te(
        e,
        "hidden",
        /*hidden*/
        h[9]
      ), (!f || b[0] & /*center*/
      16) && te(
        e,
        "center",
        /*center*/
        h[4]
      ), (!f || b[0] & /*boundedheight*/
      8) && te(
        e,
        "boundedheight",
        /*boundedheight*/
        h[3]
      ), (!f || b[0] & /*flex*/
      32) && te(
        e,
        "flex",
        /*flex*/
        h[5]
      ), (!f || b[0] & /*disable_click*/
      128) && te(
        e,
        "disable_click",
        /*disable_click*/
        h[7]
      );
    },
    i(h) {
      f || (st(d, h), f = !0);
    },
    o(h) {
      Et(d, h), f = !1;
    },
    d(h) {
      h && hl(e), d && d.d(h), l[34](null), u = !1, u_(c);
    }
  };
}
function b_(l) {
  let e, t, n = !/*hidden*/
  l[9] && bo(l);
  return {
    c() {
      n && n.c(), e = Is();
    },
    m(i, o) {
      n && n.m(i, o), ml(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Hs(), Et(n, 1, 1, () => {
        n = null;
      }), Ts()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && st(n, 1)) : (n = bo(i), n.c(), st(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (st(n), t = !0);
    },
    o(i) {
      Et(n), t = !1;
    },
    d(i) {
      i && hl(e), n && n.d(i);
    }
  };
}
function g_(l) {
  let e, t, n, i, o;
  const a = (
    /*#slots*/
    l[26].default
  ), r = js(
    a,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ii("button"), r && r.c(), se(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), se(e, "class", "svelte-1s26xmt"), te(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), te(
        e,
        "center",
        /*center*/
        l[4]
      ), te(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), te(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Us(e, "height", "100%");
    },
    m(s, f) {
      ml(s, e, f), r && r.m(e, null), n = !0, i || (o = we(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(s, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Ns(
        r,
        a,
        s,
        /*$$scope*/
        s[25],
        n ? Fs(
          a,
          /*$$scope*/
          s[25],
          f,
          null
        ) : Rs(
          /*$$scope*/
          s[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      s[9] ? -1 : 0)) && se(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && te(
        e,
        "hidden",
        /*hidden*/
        s[9]
      ), (!n || f[0] & /*center*/
      16) && te(
        e,
        "center",
        /*center*/
        s[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && te(
        e,
        "boundedheight",
        /*boundedheight*/
        s[3]
      ), (!n || f[0] & /*flex*/
      32) && te(
        e,
        "flex",
        /*flex*/
        s[5]
      );
    },
    i(s) {
      n || (st(r, s), n = !0);
    },
    o(s) {
      Et(r, s), n = !1;
    },
    d(s) {
      s && hl(e), r && r.d(s), i = !1, o();
    }
  };
}
function bo(l) {
  let e, t;
  return e = new l_({
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
      s_(e.$$.fragment);
    },
    m(n, i) {
      f_(e, n, i), t = !0;
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
      t || (st(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Et(e.$$.fragment, n), t = !1;
    },
    d(n) {
      a_(e, n);
    }
  };
}
function w_(l) {
  let e, t, n, i;
  const o = [g_, b_, m_], a = [];
  function r(s, f) {
    return (
      /*filetype*/
      s[0] === "clipboard" ? 0 : (
        /*uploading*/
        s[1] && /*show_progress*/
        s[10] ? 1 : 2
      )
    );
  }
  return e = r(l), t = a[e] = o[e](l), {
    c() {
      t.c(), n = Is();
    },
    m(s, f) {
      a[e].m(s, f), ml(s, n, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (Hs(), Et(a[u], 1, 1, () => {
        a[u] = null;
      }), Ts(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), st(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (st(t), i = !0);
    },
    o(s) {
      Et(t), i = !1;
    },
    d(s) {
      s && hl(n), a[e].d(s);
    }
  };
}
function p_(l, e, t) {
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
    const [o] = i.split("/").map((a) => a.trim());
    return i.endsWith("/*") && t.startsWith(o + "/");
  });
}
function k_(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(p, F, Z, K) {
    function C(Se) {
      return Se instanceof Z ? Se : new Z(function(he) {
        he(Se);
      });
    }
    return new (Z || (Z = Promise))(function(Se, he) {
      function ze(D) {
        try {
          E(K.next(D));
        } catch (Y) {
          he(Y);
        }
      }
      function me(D) {
        try {
          E(K.throw(D));
        } catch (Y) {
          he(Y);
        }
      }
      function E(D) {
        D.done ? Se(D.value) : C(D.value).then(ze, me);
      }
      E((K = K.apply(p, F || [])).next());
    });
  };
  let { filetype: a = null } = e, { dragging: r = !1 } = e, { boundedheight: s = !0 } = e, { center: f = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: b = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: w = null } = e, { show_progress: k = !0 } = e, { max_file_size: g = null } = e, { upload: S } = e, { stream_handler: M } = e, y, z, v;
  const q = d_(), R = ["image", "video", "audio", "text", "file"], I = (p) => p.startsWith(".") || p.endsWith("/*") ? p : R.includes(p) ? p + "/*" : "." + p;
  function B() {
    t(20, r = !r);
  }
  function W() {
    navigator.clipboard.read().then((p) => o(this, void 0, void 0, function* () {
      for (let F = 0; F < p.length; F++) {
        const Z = p[F].types.find((K) => K.startsWith("image/"));
        if (Z) {
          p[F].getType(Z).then((K) => o(this, void 0, void 0, function* () {
            const C = new File([K], `clipboard.${Z.replace("image/", "")}`);
            yield X([C]);
          }));
          break;
        }
      }
    }));
  }
  function H() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function le(p) {
    return o(this, void 0, void 0, function* () {
      yield h_(), t(14, y = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
      try {
        const F = yield S(p, d, y, g ?? 1 / 0);
        return q("load", c === "single" ? F == null ? void 0 : F[0] : F), t(1, m = !1), F || [];
      } catch (F) {
        return q("error", F.message), t(1, m = !1), [];
      }
    });
  }
  function X(p) {
    return o(this, void 0, void 0, function* () {
      if (!p.length)
        return;
      let F = p.map((Z) => new File([Z], Z instanceof File ? Z.name : "file", { type: Z.type }));
      return t(15, z = yield Pc(F)), yield le(z);
    });
  }
  function ee(p) {
    return o(this, void 0, void 0, function* () {
      const F = p.target;
      if (F.files)
        if (b != "blob")
          yield X(Array.from(F.files));
        else {
          if (c === "single") {
            q("load", F.files[0]);
            return;
          }
          q("load", F.files);
        }
    });
  }
  function ae(p) {
    return o(this, void 0, void 0, function* () {
      var F;
      if (t(20, r = !1), !(!((F = p.dataTransfer) === null || F === void 0) && F.files)) return;
      const Z = Array.from(p.dataTransfer.files).filter((K) => {
        const C = "." + K.name.split(".").pop();
        return C && p_(v, C, K.type) || (C && Array.isArray(a) ? a.includes(C) : C === a) ? !0 : (q("error", `Invalid file type only ${a} allowed.`), !1);
      });
      yield X(Z);
    });
  }
  function ye(p) {
    ct.call(this, l, p);
  }
  function L(p) {
    ct.call(this, l, p);
  }
  function de(p) {
    ct.call(this, l, p);
  }
  function Ae(p) {
    ct.call(this, l, p);
  }
  function Le(p) {
    ct.call(this, l, p);
  }
  function Ce(p) {
    ct.call(this, l, p);
  }
  function A(p) {
    ct.call(this, l, p);
  }
  function Ve(p) {
    o_[p ? "unshift" : "push"](() => {
      w = p, t(2, w);
    });
  }
  return l.$$set = (p) => {
    "filetype" in p && t(0, a = p.filetype), "dragging" in p && t(20, r = p.dragging), "boundedheight" in p && t(3, s = p.boundedheight), "center" in p && t(4, f = p.center), "flex" in p && t(5, u = p.flex), "file_count" in p && t(6, c = p.file_count), "disable_click" in p && t(7, _ = p.disable_click), "root" in p && t(8, d = p.root), "hidden" in p && t(9, h = p.hidden), "format" in p && t(21, b = p.format), "uploading" in p && t(1, m = p.uploading), "hidden_upload" in p && t(2, w = p.hidden_upload), "show_progress" in p && t(10, k = p.show_progress), "max_file_size" in p && t(22, g = p.max_file_size), "upload" in p && t(23, S = p.upload), "stream_handler" in p && t(11, M = p.stream_handler), "$$scope" in p && t(25, i = p.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (a == null ? t(16, v = null) : typeof a == "string" ? t(16, v = I(a)) : (t(0, a = a.map(I)), t(16, v = a.join(", "))));
  }, [
    a,
    m,
    w,
    s,
    f,
    u,
    c,
    _,
    d,
    h,
    k,
    M,
    W,
    H,
    y,
    z,
    v,
    B,
    ee,
    ae,
    r,
    b,
    g,
    S,
    X,
    i,
    n,
    ye,
    L,
    de,
    Ae,
    Le,
    Ce,
    A,
    Ve
  ];
}
class v_ extends i_ {
  constructor(e) {
    super(), r_(
      this,
      e,
      k_,
      w_,
      c_,
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
  SvelteComponent: y_,
  append: go,
  attr: oe,
  detach: C_,
  init: S_,
  insert: z_,
  noop: Fl,
  safe_not_equal: q_,
  set_style: tt,
  svg_element: Hl
} = window.__gradio__svelte__internal;
function E_(l) {
  let e, t, n;
  return {
    c() {
      e = Hl("svg"), t = Hl("line"), n = Hl("line"), oe(t, "x1", "4"), oe(t, "y1", "12"), oe(t, "x2", "20"), oe(t, "y2", "12"), tt(t, "fill", "none"), tt(t, "stroke-width", "2px"), oe(n, "x1", "12"), oe(n, "y1", "4"), oe(n, "x2", "12"), oe(n, "y2", "20"), tt(n, "fill", "none"), tt(n, "stroke-width", "2px"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "viewBox", "0 0 24 24"), oe(e, "version", "1.1"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), oe(e, "xml:space", "preserve"), oe(e, "stroke", "currentColor"), tt(e, "fill-rule", "evenodd"), tt(e, "clip-rule", "evenodd"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      z_(i, e, o), go(e, t), go(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(i) {
      i && C_(e);
    }
  };
}
class M_ extends y_ {
  constructor(e) {
    super(), S_(this, e, null, E_, q_, {});
  }
}
const {
  SvelteComponent: B_,
  append: wo,
  attr: Ul,
  bubble: po,
  create_component: A_,
  destroy_component: L_,
  detach: Os,
  element: ko,
  init: D_,
  insert: Xs,
  listen: Nl,
  mount_component: T_,
  run_all: j_,
  safe_not_equal: I_,
  set_data: R_,
  set_input_value: vo,
  space: F_,
  text: H_,
  transition_in: U_,
  transition_out: N_
} = window.__gradio__svelte__internal, { createEventDispatcher: O_, afterUpdate: X_ } = window.__gradio__svelte__internal;
function Y_(l) {
  let e;
  return {
    c() {
      e = H_(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Xs(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && R_(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Os(e);
    }
  };
}
function W_(l) {
  let e, t, n, i, o, a, r;
  return t = new es({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [Y_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = ko("label"), A_(t.$$.fragment), n = F_(), i = ko("input"), Ul(i, "type", "color"), i.disabled = /*disabled*/
      l[3], Ul(i, "class", "svelte-16l8u73"), Ul(e, "class", "block");
    },
    m(s, f) {
      Xs(s, e, f), T_(t, e, null), wo(e, n), wo(e, i), vo(
        i,
        /*value*/
        l[0]
      ), o = !0, a || (r = [
        Nl(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        Nl(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        Nl(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], a = !0);
    },
    p(s, [f]) {
      const u = {};
      f & /*show_label*/
      16 && (u.show_label = /*show_label*/
      s[4]), f & /*info*/
      4 && (u.info = /*info*/
      s[2]), f & /*$$scope, label*/
      2050 && (u.$$scope = { dirty: f, ctx: s }), t.$set(u), (!o || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      s[3]), f & /*value*/
      1 && vo(
        i,
        /*value*/
        s[0]
      );
    },
    i(s) {
      o || (U_(t.$$.fragment, s), o = !0);
    },
    o(s) {
      N_(t.$$.fragment, s), o = !1;
    },
    d(s) {
      s && Os(e), L_(t), a = !1, j_(r);
    }
  };
}
function V_(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: a = void 0 } = e, { disabled: r = !1 } = e, { show_label: s = !0 } = e;
  const f = O_();
  function u() {
    f("change", n), i || f("input");
  }
  X_(() => {
    t(5, i = !1);
  });
  function c(h) {
    po.call(this, l, h);
  }
  function _(h) {
    po.call(this, l, h);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (h) => {
    "value" in h && t(0, n = h.value), "value_is_output" in h && t(5, i = h.value_is_output), "label" in h && t(1, o = h.label), "info" in h && t(2, a = h.info), "disabled" in h && t(3, r = h.disabled), "show_label" in h && t(4, s = h.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && u();
  }, [
    n,
    o,
    a,
    r,
    s,
    i,
    c,
    _,
    d
  ];
}
class P_ extends B_ {
  constructor(e) {
    super(), D_(this, e, V_, W_, I_, {
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
  SvelteComponent: Z_,
  append: Ys,
  attr: V,
  bubble: K_,
  check_outros: G_,
  create_slot: Ws,
  detach: vn,
  element: bl,
  empty: J_,
  get_all_dirty_from_scope: Vs,
  get_slot_changes: Ps,
  group_outros: Q_,
  init: x_,
  insert: yn,
  listen: $_,
  safe_not_equal: ed,
  set_style: ce,
  space: Zs,
  src_url_equal: tl,
  toggle_class: Vt,
  transition_in: nl,
  transition_out: ll,
  update_slot_base: Ks
} = window.__gradio__svelte__internal;
function td(l) {
  let e, t, n, i, o, a, r = (
    /*icon*/
    l[7] && yo(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), f = Ws(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = bl("button"), r && r.c(), t = Zs(), f && f.c(), V(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), V(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], Vt(e, "hidden", !/*visible*/
      l[2]), ce(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), ce(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), ce(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(u, c) {
      yn(u, e, c), r && r.m(e, null), Ys(e, t), f && f.m(e, null), i = !0, o || (a = $_(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? r ? r.p(u, c) : (r = yo(u), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || c & /*$$scope*/
      2048) && Ks(
        f,
        s,
        u,
        /*$$scope*/
        u[11],
        i ? Ps(
          s,
          /*$$scope*/
          u[11],
          c,
          null
        ) : Vs(
          /*$$scope*/
          u[11]
        ),
        null
      ), (!i || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      u[4] + " " + /*variant*/
      u[3] + " " + /*elem_classes*/
      u[1].join(" ") + " svelte-8huxfn")) && V(e, "class", n), (!i || c & /*elem_id*/
      1) && V(
        e,
        "id",
        /*elem_id*/
        u[0]
      ), (!i || c & /*disabled*/
      256) && (e.disabled = /*disabled*/
      u[8]), (!i || c & /*size, variant, elem_classes, visible*/
      30) && Vt(e, "hidden", !/*visible*/
      u[2]), c & /*scale*/
      512 && ce(
        e,
        "flex-grow",
        /*scale*/
        u[9]
      ), c & /*scale*/
      512 && ce(
        e,
        "width",
        /*scale*/
        u[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && ce(e, "min-width", typeof /*min_width*/
      u[10] == "number" ? `calc(min(${/*min_width*/
      u[10]}px, 100%))` : null);
    },
    i(u) {
      i || (nl(f, u), i = !0);
    },
    o(u) {
      ll(f, u), i = !1;
    },
    d(u) {
      u && vn(e), r && r.d(), f && f.d(u), o = !1, a();
    }
  };
}
function nd(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && Co(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), r = Ws(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = bl("a"), o && o.c(), t = Zs(), r && r.c(), V(
        e,
        "href",
        /*link*/
        l[6]
      ), V(e, "rel", "noopener noreferrer"), V(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), V(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), V(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), Vt(e, "hidden", !/*visible*/
      l[2]), Vt(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), ce(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), ce(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), ce(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), ce(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(s, f) {
      yn(s, e, f), o && o.m(e, null), Ys(e, t), r && r.m(e, null), i = !0;
    },
    p(s, f) {
      /*icon*/
      s[7] ? o ? o.p(s, f) : (o = Co(s), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Ks(
        r,
        a,
        s,
        /*$$scope*/
        s[11],
        i ? Ps(
          a,
          /*$$scope*/
          s[11],
          f,
          null
        ) : Vs(
          /*$$scope*/
          s[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && V(
        e,
        "href",
        /*link*/
        s[6]
      ), (!i || f & /*disabled*/
      256) && V(
        e,
        "aria-disabled",
        /*disabled*/
        s[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      s[4] + " " + /*variant*/
      s[3] + " " + /*elem_classes*/
      s[1].join(" ") + " svelte-8huxfn")) && V(e, "class", n), (!i || f & /*elem_id*/
      1) && V(
        e,
        "id",
        /*elem_id*/
        s[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Vt(e, "hidden", !/*visible*/
      s[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Vt(
        e,
        "disabled",
        /*disabled*/
        s[8]
      ), f & /*scale*/
      512 && ce(
        e,
        "flex-grow",
        /*scale*/
        s[9]
      ), f & /*disabled*/
      256 && ce(
        e,
        "pointer-events",
        /*disabled*/
        s[8] ? "none" : null
      ), f & /*scale*/
      512 && ce(
        e,
        "width",
        /*scale*/
        s[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && ce(e, "min-width", typeof /*min_width*/
      s[10] == "number" ? `calc(min(${/*min_width*/
      s[10]}px, 100%))` : null);
    },
    i(s) {
      i || (nl(r, s), i = !0);
    },
    o(s) {
      ll(r, s), i = !1;
    },
    d(s) {
      s && vn(e), o && o.d(), r && r.d(s);
    }
  };
}
function yo(l) {
  let e, t, n;
  return {
    c() {
      e = bl("img"), V(e, "class", "button-icon svelte-8huxfn"), tl(e.src, t = /*icon*/
      l[7].url) || V(e, "src", t), V(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      yn(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !tl(e.src, t = /*icon*/
      i[7].url) && V(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && V(e, "alt", n);
    },
    d(i) {
      i && vn(e);
    }
  };
}
function Co(l) {
  let e, t, n;
  return {
    c() {
      e = bl("img"), V(e, "class", "button-icon svelte-8huxfn"), tl(e.src, t = /*icon*/
      l[7].url) || V(e, "src", t), V(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      yn(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !tl(e.src, t = /*icon*/
      i[7].url) && V(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && V(e, "alt", n);
    },
    d(i) {
      i && vn(e);
    }
  };
}
function ld(l) {
  let e, t, n, i;
  const o = [nd, td], a = [];
  function r(s, f) {
    return (
      /*link*/
      s[6] && /*link*/
      s[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = a[e] = o[e](l), {
    c() {
      t.c(), n = J_();
    },
    m(s, f) {
      a[e].m(s, f), yn(s, n, f), i = !0;
    },
    p(s, [f]) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (Q_(), ll(a[u], 1, 1, () => {
        a[u] = null;
      }), G_(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), nl(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (nl(t), i = !0);
    },
    o(s) {
      ll(t), i = !1;
    },
    d(s) {
      s && vn(n), a[e].d(s);
    }
  };
}
function id(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: a = [] } = e, { visible: r = !0 } = e, { variant: s = "secondary" } = e, { size: f = "lg" } = e, { value: u = null } = e, { link: c = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e;
  function m(w) {
    K_.call(this, l, w);
  }
  return l.$$set = (w) => {
    "elem_id" in w && t(0, o = w.elem_id), "elem_classes" in w && t(1, a = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, s = w.variant), "size" in w && t(4, f = w.size), "value" in w && t(5, u = w.value), "link" in w && t(6, c = w.link), "icon" in w && t(7, _ = w.icon), "disabled" in w && t(8, d = w.disabled), "scale" in w && t(9, h = w.scale), "min_width" in w && t(10, b = w.min_width), "$$scope" in w && t(11, i = w.$$scope);
  }, [
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    _,
    d,
    h,
    b,
    i,
    n,
    m
  ];
}
class So extends Z_ {
  constructor(e) {
    super(), x_(this, e, id, ld, ed, {
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
  SvelteComponent: od,
  add_render_callback: Gs,
  append: Ln,
  attr: ke,
  binding_callbacks: zo,
  check_outros: sd,
  create_bidirectional_transition: qo,
  destroy_each: ad,
  detach: cn,
  element: il,
  empty: rd,
  ensure_array_like: Eo,
  group_outros: fd,
  init: ud,
  insert: _n,
  listen: oi,
  prevent_default: cd,
  run_all: _d,
  safe_not_equal: dd,
  set_data: hd,
  set_style: Rt,
  space: si,
  text: md,
  toggle_class: Ne,
  transition_in: Ol,
  transition_out: Mo
} = window.__gradio__svelte__internal, { createEventDispatcher: bd } = window.__gradio__svelte__internal;
function Bo(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function Ao(l) {
  let e, t, n, i, o, a = Eo(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let s = 0; s < a.length; s += 1)
    r[s] = Lo(Bo(l, a, s));
  return {
    c() {
      e = il("ul");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      ke(e, "class", "options svelte-yuohum"), ke(e, "role", "listbox"), Rt(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Rt(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Rt(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(s, f) {
      _n(s, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      l[22](e), n = !0, i || (o = oi(e, "mousedown", cd(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(s, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        a = Eo(
          /*filtered_indices*/
          s[1]
        );
        let u;
        for (u = 0; u < a.length; u += 1) {
          const c = Bo(s, a, u);
          r[u] ? r[u].p(c, f) : (r[u] = Lo(c), r[u].c(), r[u].m(e, null));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = a.length;
      }
      f & /*bottom*/
      512 && Rt(
        e,
        "bottom",
        /*bottom*/
        s[9]
      ), f & /*max_height*/
      1024 && Rt(e, "max-height", `calc(${/*max_height*/
      s[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Rt(
        e,
        "width",
        /*input_width*/
        s[8] + "px"
      );
    },
    i(s) {
      n || (s && Gs(() => {
        n && (t || (t = qo(e, Xi, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(s) {
      s && (t || (t = qo(e, Xi, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(s) {
      s && cn(e), ad(r, s), l[22](null), s && t && t.end(), i = !1, o();
    }
  };
}
function Lo(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, a, r, s, f;
  return {
    c() {
      e = il("li"), t = il("span"), t.textContent = "✓", n = si(), o = md(i), a = si(), ke(t, "class", "inner-item svelte-yuohum"), Ne(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), ke(e, "class", "item svelte-yuohum"), ke(e, "data-index", r = /*index*/
      l[26]), ke(e, "aria-label", s = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), ke(e, "data-testid", "dropdown-option"), ke(e, "role", "option"), ke(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ne(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), Ne(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), Ne(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), Ne(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(u, c) {
      _n(u, e, c), Ln(e, t), Ln(e, n), Ln(e, o), Ln(e, a);
    },
    p(u, c) {
      c & /*selected_indices, filtered_indices*/
      18 && Ne(t, "hide", !/*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )), c & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0] + "") && hd(o, i), c & /*filtered_indices*/
      2 && r !== (r = /*index*/
      u[26]) && ke(e, "data-index", r), c & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0]) && ke(e, "aria-label", s), c & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )) && ke(e, "aria-selected", f), c & /*selected_indices, filtered_indices*/
      18 && Ne(
        e,
        "selected",
        /*selected_indices*/
        u[4].includes(
          /*index*/
          u[26]
        )
      ), c & /*filtered_indices, active_index*/
      34 && Ne(
        e,
        "active",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && Ne(
        e,
        "bg-gray-100",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && Ne(
        e,
        "dark:bg-gray-600",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      );
    },
    d(u) {
      u && cn(e);
    }
  };
}
function gd(l) {
  let e, t, n, i, o;
  Gs(
    /*onwindowresize*/
    l[19]
  );
  let a = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && Ao(l)
  );
  return {
    c() {
      e = il("div"), t = si(), a && a.c(), n = rd(), ke(e, "class", "reference");
    },
    m(r, s) {
      _n(r, e, s), l[20](e), _n(r, t, s), a && a.m(r, s), _n(r, n, s), i || (o = [
        oi(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        oi(
          window,
          "resize",
          /*onwindowresize*/
          l[19]
        )
      ], i = !0);
    },
    p(r, [s]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? a ? (a.p(r, s), s & /*show_options, disabled*/
      12 && Ol(a, 1)) : (a = Ao(r), a.c(), Ol(a, 1), a.m(n.parentNode, n)) : a && (fd(), Mo(a, 1, 1, () => {
        a = null;
      }), sd());
    },
    i(r) {
      Ol(a);
    },
    o(r) {
      Mo(a);
    },
    d(r) {
      r && (cn(e), cn(t), cn(n)), l[20](null), a && a.d(r), i = !1, _d(o);
    }
  };
}
function wd(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: a } = e, { show_options: r = !1 } = e, { disabled: s = !1 } = e, { selected_indices: f = [] } = e, { active_index: u = null } = e, c, _, d, h, b, m, w, k, g;
  function S() {
    const { top: B, bottom: W } = b.getBoundingClientRect();
    t(16, c = B), t(17, _ = g - W);
  }
  let M = null;
  function y() {
    r && (M !== null && clearTimeout(M), M = setTimeout(
      () => {
        S(), M = null;
      },
      10
    ));
  }
  const z = bd();
  function v() {
    t(11, g = window.innerHeight);
  }
  function q(B) {
    zo[B ? "unshift" : "push"](() => {
      b = B, t(6, b);
    });
  }
  const R = (B) => z("change", B);
  function I(B) {
    zo[B ? "unshift" : "push"](() => {
      m = B, t(7, m);
    });
  }
  return l.$$set = (B) => {
    "choices" in B && t(0, o = B.choices), "filtered_indices" in B && t(1, a = B.filtered_indices), "show_options" in B && t(2, r = B.show_options), "disabled" in B && t(3, s = B.disabled), "selected_indices" in B && t(4, f = B.selected_indices), "active_index" in B && t(5, u = B.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && b) {
        if (m && f.length > 0) {
          let W = m.querySelectorAll("li");
          for (const H of Array.from(W))
            if (H.getAttribute("data-index") === f[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, H.offsetTop);
              break;
            }
        }
        S();
        const B = t(15, i = b.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (B == null ? void 0 : B.height) || 0), t(8, h = (B == null ? void 0 : B.width) || 0);
      }
      _ > c ? (t(10, k = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, k = c - d));
    }
  }, [
    o,
    a,
    r,
    s,
    f,
    u,
    b,
    m,
    h,
    w,
    k,
    g,
    y,
    z,
    n,
    i,
    c,
    _,
    d,
    v,
    q,
    R,
    I
  ];
}
class pd extends od {
  constructor(e) {
    super(), ud(this, e, wd, gd, dd, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function kd(l, e) {
  return (l % e + e) % e;
}
function Do(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function vd(l, e, t) {
  l("change", e), t || l("input");
}
function yd(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[kd(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Cd,
  append: ht,
  attr: pe,
  binding_callbacks: Sd,
  check_outros: zd,
  create_component: ai,
  destroy_component: ri,
  detach: bi,
  element: Ut,
  group_outros: qd,
  init: Ed,
  insert: gi,
  listen: en,
  mount_component: fi,
  run_all: Md,
  safe_not_equal: Bd,
  set_data: Ad,
  set_input_value: To,
  space: Xl,
  text: Ld,
  toggle_class: Ft,
  transition_in: Nt,
  transition_out: rn
} = window.__gradio__svelte__internal, { onMount: Dd } = window.__gradio__svelte__internal, { createEventDispatcher: Td, afterUpdate: jd } = window.__gradio__svelte__internal;
function Id(l) {
  let e;
  return {
    c() {
      e = Ld(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      gi(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Ad(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && bi(e);
    }
  };
}
function jo(l) {
  let e, t, n;
  return t = new Cf({}), {
    c() {
      e = Ut("div"), ai(t.$$.fragment), pe(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      gi(i, e, o), fi(t, e, null), n = !0;
    },
    i(i) {
      n || (Nt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      rn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && bi(e), ri(t);
    }
  };
}
function Rd(l) {
  let e, t, n, i, o, a, r, s, f, u, c, _, d, h;
  t = new es({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [Id] },
      $$scope: { ctx: l }
    }
  });
  let b = !/*disabled*/
  l[3] && jo();
  return c = new pd({
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
      e = Ut("div"), ai(t.$$.fragment), n = Xl(), i = Ut("div"), o = Ut("div"), a = Ut("div"), r = Ut("input"), f = Xl(), b && b.c(), u = Xl(), ai(c.$$.fragment), pe(r, "role", "listbox"), pe(r, "aria-controls", "dropdown-options"), pe(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), pe(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), pe(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], pe(r, "autocomplete", "off"), r.readOnly = s = !/*filterable*/
      l[7], Ft(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), pe(a, "class", "secondary-wrap svelte-1m1zvyj"), pe(o, "class", "wrap-inner svelte-1m1zvyj"), Ft(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), pe(i, "class", "wrap svelte-1m1zvyj"), pe(e, "class", "svelte-1m1zvyj"), Ft(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(m, w) {
      gi(m, e, w), fi(t, e, null), ht(e, n), ht(e, i), ht(i, o), ht(o, a), ht(a, r), To(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), ht(a, f), b && b.m(a, null), ht(i, u), fi(c, i, null), _ = !0, d || (h = [
        en(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        en(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        en(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        en(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        en(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(m, w) {
      const k = {};
      w[0] & /*show_label*/
      16 && (k.show_label = /*show_label*/
      m[4]), w[0] & /*info*/
      2 && (k.info = /*info*/
      m[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      4 && (k.$$scope = { dirty: w, ctx: m }), t.$set(k), (!_ || w[0] & /*show_options*/
      4096) && pe(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!_ || w[0] & /*label*/
      1) && pe(
        r,
        "aria-label",
        /*label*/
        m[0]
      ), (!_ || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      m[3]), (!_ || w[0] & /*filterable*/
      128 && s !== (s = !/*filterable*/
      m[7])) && (r.readOnly = s), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      m[9] && To(
        r,
        /*input_text*/
        m[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Ft(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? b && (qd(), rn(b, 1, 1, () => {
        b = null;
      }), zd()) : b ? w[0] & /*disabled*/
      8 && Nt(b, 1) : (b = jo(), b.c(), Nt(b, 1), b.m(a, null)), (!_ || w[0] & /*show_options*/
      4096) && Ft(
        o,
        "show_options",
        /*show_options*/
        m[12]
      );
      const g = {};
      w[0] & /*show_options*/
      4096 && (g.show_options = /*show_options*/
      m[12]), w[0] & /*choices*/
      4 && (g.choices = /*choices*/
      m[2]), w[0] & /*filtered_indices*/
      1024 && (g.filtered_indices = /*filtered_indices*/
      m[10]), w[0] & /*disabled*/
      8 && (g.disabled = /*disabled*/
      m[3]), w[0] & /*selected_index*/
      2048 && (g.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), w[0] & /*active_index*/
      16384 && (g.active_index = /*active_index*/
      m[14]), c.$set(g), (!_ || w[0] & /*container*/
      32) && Ft(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      _ || (Nt(t.$$.fragment, m), Nt(b), Nt(c.$$.fragment, m), _ = !0);
    },
    o(m) {
      rn(t.$$.fragment, m), rn(b), rn(c.$$.fragment, m), _ = !1;
    },
    d(m) {
      m && bi(e), ri(t), l[29](null), b && b.d(), ri(c), d = !1, Md(h);
    }
  };
}
function Fd(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, a = [], { value_is_output: r = !1 } = e, { choices: s } = e, f, { disabled: u = !1 } = e, { show_label: c } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, b, m = !1, w, k, g = "", S = "", M = !1, y = [], z = null, v = null, q;
  const R = Td();
  o ? (q = s.map((L) => L[1]).indexOf(o), v = q, v === -1 ? (a = o, v = null) : ([g, a] = s[v], S = g), B()) : s.length > 0 && (q = 0, v = 0, [g, o] = s[v], a = o, S = g);
  function I() {
    t(13, w = s.map((L) => L[0])), t(24, k = s.map((L) => L[1]));
  }
  function B() {
    I(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, g = ""), t(11, v = null)) : k.includes(o) ? (t(9, g = w[k.indexOf(o)]), t(11, v = k.indexOf(o))) : d ? (t(9, g = o), t(11, v = null)) : (t(9, g = ""), t(11, v = null)), t(27, q = v);
  }
  function W(L) {
    if (t(11, v = parseInt(L.detail.target.dataset.index)), isNaN(v)) {
      t(11, v = null);
      return;
    }
    t(12, m = !1), t(14, z = null), b.blur();
  }
  function H(L) {
    t(10, y = s.map((de, Ae) => Ae)), t(12, m = !0), R("focus");
  }
  function le() {
    d ? t(20, o = g) : t(9, g = w[k.indexOf(o)]), t(12, m = !1), t(14, z = null), R("blur");
  }
  function X(L) {
    t(12, [m, z] = yd(L, z, y), m, (t(14, z), t(2, s), t(23, f), t(6, d), t(9, g), t(10, y), t(8, b), t(25, S), t(11, v), t(27, q), t(26, M), t(24, k))), L.key === "Enter" && (z !== null ? (t(11, v = z), t(12, m = !1), b.blur(), t(14, z = null)) : w.includes(g) ? (t(11, v = w.indexOf(g)), t(12, m = !1), t(14, z = null), b.blur()) : d && (t(20, o = g), t(11, v = null), t(12, m = !1), t(14, z = null), b.blur()), R("enter", o));
  }
  jd(() => {
    t(21, r = !1), t(26, M = !0);
  }), Dd(() => {
    b.focus();
  });
  function ee() {
    g = this.value, t(9, g), t(11, v), t(27, q), t(26, M), t(2, s), t(24, k);
  }
  function ae(L) {
    Sd[L ? "unshift" : "push"](() => {
      b = L, t(8, b);
    });
  }
  const ye = (L) => R("key_up", { key: L.key, input_value: g });
  return l.$$set = (L) => {
    "label" in L && t(0, n = L.label), "info" in L && t(1, i = L.info), "value" in L && t(20, o = L.value), "value_is_output" in L && t(21, r = L.value_is_output), "choices" in L && t(2, s = L.choices), "disabled" in L && t(3, u = L.disabled), "show_label" in L && t(4, c = L.show_label), "container" in L && t(5, _ = L.container), "allow_custom_value" in L && t(6, d = L.allow_custom_value), "filterable" in L && t(7, h = L.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && v !== q && v !== null && M && (t(9, [g, o] = s[v], g, (t(20, o), t(11, v), t(27, q), t(26, M), t(2, s), t(24, k))), t(27, q = v), R("select", {
      index: v,
      value: k[v],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != a && (B(), vd(R, o, r), t(22, a = o)), l.$$.dirty[0] & /*choices*/
    4 && I(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && s !== f && (d || B(), t(23, f = s), t(10, y = Do(s, g)), !d && y.length > 0 && t(14, z = y[0]), b == document.activeElement && t(12, m = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && g !== S && (t(10, y = Do(s, g)), t(25, S = g), !d && y.length > 0 && t(14, z = y[0]));
  }, [
    n,
    i,
    s,
    u,
    c,
    _,
    d,
    h,
    b,
    g,
    y,
    v,
    m,
    w,
    z,
    R,
    W,
    H,
    le,
    X,
    o,
    r,
    a,
    f,
    k,
    S,
    M,
    q,
    ee,
    ae,
    ye
  ];
}
class Hd extends Cd {
  constructor(e) {
    super(), Ed(
      this,
      e,
      Fd,
      Rd,
      Bd,
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
  SvelteComponent: Ud,
  append: Ze,
  attr: Dn,
  create_component: Tn,
  destroy_component: jn,
  detach: wi,
  element: mt,
  init: Nd,
  insert: pi,
  mount_component: In,
  safe_not_equal: Od,
  set_style: Rn,
  space: Yl,
  text: Js,
  transition_in: Fn,
  transition_out: Hn
} = window.__gradio__svelte__internal, { createEventDispatcher: Xd } = window.__gradio__svelte__internal, { onMount: Yd, onDestroy: Wd } = window.__gradio__svelte__internal;
function Vd(l) {
  let e;
  return {
    c() {
      e = Js("Cancel");
    },
    m(t, n) {
      pi(t, e, n);
    },
    d(t) {
      t && wi(e);
    }
  };
}
function Pd(l) {
  let e;
  return {
    c() {
      e = Js("OK");
    },
    m(t, n) {
      pi(t, e, n);
    },
    d(t) {
      t && wi(e);
    }
  };
}
function Zd(l) {
  let e, t, n, i, o, a, r, s, f, u, c, _, d, h, b;
  return o = new Hd({
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
    l[4]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    l[6]
  ), s = new P_({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), s.$on(
    "change",
    /*onColorChange*/
    l[5]
  ), c = new So({
    props: {
      $$slots: { default: [Vd] },
      $$scope: { ctx: l }
    }
  }), c.$on(
    "click",
    /*click_handler*/
    l[10]
  ), h = new So({
    props: {
      variant: "primary",
      $$slots: { default: [Pd] },
      $$scope: { ctx: l }
    }
  }), h.$on(
    "click",
    /*click_handler_1*/
    l[11]
  ), {
    c() {
      e = mt("div"), t = mt("div"), n = mt("span"), i = mt("div"), Tn(o.$$.fragment), a = Yl(), r = mt("div"), Tn(s.$$.fragment), f = Yl(), u = mt("div"), Tn(c.$$.fragment), _ = Yl(), d = mt("div"), Tn(h.$$.fragment), Rn(i, "margin-right", "10px"), Rn(r, "margin-right", "40px"), Rn(r, "margin-bottom", "8px"), Rn(u, "margin-right", "8px"), Dn(n, "class", "model-content svelte-hkn2q1"), Dn(t, "class", "modal-container svelte-hkn2q1"), Dn(e, "class", "modal svelte-hkn2q1"), Dn(e, "id", "model-box-edit");
    },
    m(m, w) {
      pi(m, e, w), Ze(e, t), Ze(t, n), Ze(n, i), In(o, i, null), Ze(n, a), Ze(n, r), In(s, r, null), Ze(n, f), Ze(n, u), In(c, u, null), Ze(n, _), Ze(n, d), In(h, d, null), b = !0;
    },
    p(m, [w]) {
      const k = {};
      w & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      m[0]), w & /*choices*/
      4 && (k.choices = /*choices*/
      m[2]), o.$set(k);
      const g = {};
      w & /*currentColor*/
      2 && (g.value = /*currentColor*/
      m[1]), s.$set(g);
      const S = {};
      w & /*$$scope*/
      16384 && (S.$$scope = { dirty: w, ctx: m }), c.$set(S);
      const M = {};
      w & /*$$scope*/
      16384 && (M.$$scope = { dirty: w, ctx: m }), h.$set(M);
    },
    i(m) {
      b || (Fn(o.$$.fragment, m), Fn(s.$$.fragment, m), Fn(c.$$.fragment, m), Fn(h.$$.fragment, m), b = !0);
    },
    o(m) {
      Hn(o.$$.fragment, m), Hn(s.$$.fragment, m), Hn(c.$$.fragment, m), Hn(h.$$.fragment, m), b = !1;
    },
    d(m) {
      m && wi(e), jn(o), jn(s), jn(c), jn(h);
    }
  };
}
function Kd(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: a = [] } = e, { color: r = "" } = e, { currentColor: s = "" } = e;
  const f = Xd();
  function u(w) {
    f("change", {
      label: i,
      color: s,
      ok: w
    });
  }
  function c(w) {
    const { detail: k } = w;
    let g = k;
    Number.isInteger(g) ? (Array.isArray(a) && g < a.length && t(1, s = a[g]), Array.isArray(o) && g < o.length && t(0, i = o[g][0])) : t(0, i = g);
  }
  function _(w) {
    const { detail: k } = w;
    t(1, s = k);
  }
  function d(w) {
    c(w), u(!0);
  }
  function h(w) {
    switch (w.key) {
      case "Enter":
        u(!0);
        break;
    }
  }
  Yd(() => {
    document.addEventListener("keydown", h), t(0, i = n), t(1, s = r);
  }), Wd(() => {
    document.removeEventListener("keydown", h);
  });
  const b = () => u(!1), m = () => u(!0);
  return l.$$set = (w) => {
    "label" in w && t(7, n = w.label), "currentLabel" in w && t(0, i = w.currentLabel), "choices" in w && t(2, o = w.choices), "choicesColors" in w && t(8, a = w.choicesColors), "color" in w && t(9, r = w.color), "currentColor" in w && t(1, s = w.currentColor);
  }, [
    i,
    s,
    o,
    u,
    c,
    _,
    d,
    n,
    a,
    r,
    b,
    m
  ];
}
class Qs extends Ud {
  constructor(e) {
    super(), Nd(this, e, Kd, Zd, Od, {
      label: 7,
      currentLabel: 0,
      choices: 2,
      choicesColors: 8,
      color: 9,
      currentColor: 1
    });
  }
}
const fe = (l, e, t) => Math.min(Math.max(l, e), t);
function Wl(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class Vl {
  constructor(e, t, n, i, o, a, r, s, f, u, c = "rgb(255, 255, 255)", _ = 0.5, d = 25, h = 8, b = 2, m = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (k) => {
      if (this.isDragging) {
        let g = k.clientX - this.offsetMouseX - this.xmin, S = k.clientY - this.offsetMouseY - this.ymin;
        const M = this.canvasXmax - this.canvasXmin, y = this.canvasYmax - this.canvasYmin;
        g = fe(g, -this.xmin, M - this.xmax), S = fe(S, -this.ymin, y - this.ymax), this.xmin += g, this.ymin += S, this.xmax += g, this.ymax += S, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (k) => {
      if (this.isResizing) {
        const g = k.clientX, S = k.clientY, M = g - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, y = S - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, z = this.canvasXmax - this.canvasXmin, v = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += M, this.ymin += y, this.xmin = fe(this.xmin, 0, this.xmax - this.minSize), this.ymin = fe(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += M, this.ymin += y, this.xmax = fe(this.xmax, this.xmin + this.minSize, z), this.ymin = fe(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += M, this.ymax += y, this.xmax = fe(this.xmax, this.xmin + this.minSize, z), this.ymax = fe(this.ymax, this.ymin + this.minSize, v);
            break;
          case 3:
            this.xmin += M, this.ymax += y, this.xmin = fe(this.xmin, 0, this.xmax - this.minSize), this.ymax = fe(this.ymax, this.ymin + this.minSize, v);
            break;
          case 4:
            this.ymin += y, this.ymin = fe(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += M, this.xmax = fe(this.xmax, this.xmin + this.minSize, z);
            break;
          case 6:
            this.ymax += y, this.ymax = fe(this.ymax, this.ymin + this.minSize, v);
            break;
          case 7:
            this.xmin += M, this.xmin = fe(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.canvasXmin = t, this.canvasYmin = n, this.canvasXmax = i, this.canvasYmax = o, this.scaleFactor = w, this.label = a, this.isDragging = !1, this.xmin = r, this.ymin = s, this.xmax = f, this.ymax = u, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = b, this.selectedThickness = m, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = d, this.color = c, this.alpha = _;
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
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  render(e) {
    let t, n;
    if (e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Wl(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Wl(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let a = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [a, r] = this.toCanvasCoordinates(a, r), e.fillRect(a, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(a, r, i, o), e.fillStyle = "black", e.fillText(this.label, a + 5, r + 15);
    }
    e.fillStyle = Wl(this.color, 1);
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
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("mousemove", this.handleResize), document.addEventListener("mouseup", this.stopResize);
  }
}
const Oe = [
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
  SvelteComponent: Gd,
  append: fn,
  attr: St,
  binding_callbacks: Jd,
  bubble: Io,
  check_outros: Pn,
  create_component: mn,
  destroy_component: bn,
  detach: wt,
  element: Zt,
  empty: Qd,
  group_outros: Zn,
  init: xd,
  insert: pt,
  listen: it,
  mount_component: gn,
  noop: $d,
  run_all: xs,
  safe_not_equal: e0,
  space: dn,
  transition_in: ne,
  transition_out: ve
} = window.__gradio__svelte__internal, { onMount: t0, onDestroy: n0, createEventDispatcher: l0 } = window.__gradio__svelte__internal;
function Ro(l) {
  let e, t, n, i, o, a, r, s, f, u;
  n = new M_({});
  let c = !/*disableEditBoxes*/
  l[4] && Fo(l);
  return r = new ci({}), {
    c() {
      e = Zt("span"), t = Zt("button"), mn(n.$$.fragment), i = dn(), c && c.c(), o = dn(), a = Zt("button"), mn(r.$$.fragment), St(t, "class", "icon svelte-182gnnj"), St(a, "class", "icon svelte-182gnnj"), St(e, "class", "canvas-control svelte-182gnnj");
    },
    m(_, d) {
      pt(_, e, d), fn(e, t), gn(n, t, null), fn(e, i), c && c.m(e, null), fn(e, o), fn(e, a), gn(r, a, null), s = !0, f || (u = [
        it(
          t,
          "click",
          /*click_handler*/
          l[26]
        ),
        it(
          a,
          "click",
          /*click_handler_2*/
          l[28]
        )
      ], f = !0);
    },
    p(_, d) {
      /*disableEditBoxes*/
      _[4] ? c && (Zn(), ve(c, 1, 1, () => {
        c = null;
      }), Pn()) : c ? (c.p(_, d), d[0] & /*disableEditBoxes*/
      16 && ne(c, 1)) : (c = Fo(_), c.c(), ne(c, 1), c.m(e, o));
    },
    i(_) {
      s || (ne(n.$$.fragment, _), ne(c), ne(r.$$.fragment, _), s = !0);
    },
    o(_) {
      ve(n.$$.fragment, _), ve(c), ve(r.$$.fragment, _), s = !1;
    },
    d(_) {
      _ && wt(e), bn(n), c && c.d(), bn(r), f = !1, xs(u);
    }
  };
}
function Fo(l) {
  let e, t, n, i, o;
  return t = new Lf({}), {
    c() {
      e = Zt("button"), mn(t.$$.fragment), St(e, "class", "icon svelte-182gnnj");
    },
    m(a, r) {
      pt(a, e, r), gn(t, e, null), n = !0, i || (o = it(
        e,
        "click",
        /*click_handler_1*/
        l[27]
      ), i = !0);
    },
    p: $d,
    i(a) {
      n || (ne(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ve(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && wt(e), bn(t), i = !1, o();
    }
  };
}
function Ho(l) {
  let e, t;
  return e = new Qs({
    props: {
      choices: (
        /*choices*/
        l[2]
      ),
      choicesColors: (
        /*choicesColors*/
        l[3]
      ),
      label: (
        /*selectedBox*/
        l[6] >= 0 && /*selectedBox*/
        l[6] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[6]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[6] >= 0 && /*selectedBox*/
        l[6] < /*value*/
        l[0].boxes.length ? wn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[6]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[15]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[29]
  ), {
    c() {
      mn(e.$$.fragment);
    },
    m(n, i) {
      gn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      4 && (o.choices = /*choices*/
      n[2]), i[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      n[3]), i[0] & /*selectedBox, value*/
      65 && (o.label = /*selectedBox*/
      n[6] >= 0 && /*selectedBox*/
      n[6] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[6]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      65 && (o.color = /*selectedBox*/
      n[6] >= 0 && /*selectedBox*/
      n[6] < /*value*/
      n[0].boxes.length ? wn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[6]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function Uo(l) {
  let e, t;
  return e = new Qs({
    props: {
      choices: (
        /*choices*/
        l[2]
      ),
      choicesColors: (
        /*choicesColors*/
        l[3]
      ),
      color: Array.isArray(
        /*choicesColors*/
        l[3]
      ) && /*choicesColors*/
      l[3].length > 0 ? (
        /*choicesColors*/
        l[3][0]
      ) : wn(Oe[
        /*value*/
        l[0].boxes.length % Oe.length
      ])
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[12]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[30]
  ), {
    c() {
      mn(e.$$.fragment);
    },
    m(n, i) {
      gn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      4 && (o.choices = /*choices*/
      n[2]), i[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      n[3]), i[0] & /*choicesColors, value*/
      9 && (o.color = Array.isArray(
        /*choicesColors*/
        n[3]
      ) && /*choicesColors*/
      n[3].length > 0 ? (
        /*choicesColors*/
        n[3][0]
      ) : wn(Oe[
        /*value*/
        n[0].boxes.length % Oe.length
      ])), e.$set(o);
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bn(e, n);
    }
  };
}
function i0(l) {
  let e, t, n, i, o, a, r, s, f, u = (
    /*interactive*/
    l[1] && Ro(l)
  ), c = (
    /*editModalVisible*/
    l[7] && Ho(l)
  ), _ = (
    /*newModalVisible*/
    l[8] && Uo(l)
  );
  return {
    c() {
      e = Zt("div"), t = Zt("canvas"), n = dn(), u && u.c(), i = dn(), c && c.c(), o = dn(), _ && _.c(), a = Qd(), St(t, "class", "canvas-annotator svelte-182gnnj"), St(e, "class", "canvas-container svelte-182gnnj"), St(e, "tabindex", "-1");
    },
    m(d, h) {
      pt(d, e, h), fn(e, t), l[25](t), pt(d, n, h), u && u.m(d, h), pt(d, i, h), c && c.m(d, h), pt(d, o, h), _ && _.m(d, h), pt(d, a, h), r = !0, s || (f = [
        it(
          t,
          "mousedown",
          /*handleMouseDown*/
          l[9]
        ),
        it(
          t,
          "mouseup",
          /*handleMouseUp*/
          l[10]
        ),
        it(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[14]
        ),
        it(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[17]
        ),
        it(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[18]
        )
      ], s = !0);
    },
    p(d, h) {
      /*interactive*/
      d[1] ? u ? (u.p(d, h), h[0] & /*interactive*/
      2 && ne(u, 1)) : (u = Ro(d), u.c(), ne(u, 1), u.m(i.parentNode, i)) : u && (Zn(), ve(u, 1, 1, () => {
        u = null;
      }), Pn()), /*editModalVisible*/
      d[7] ? c ? (c.p(d, h), h[0] & /*editModalVisible*/
      128 && ne(c, 1)) : (c = Ho(d), c.c(), ne(c, 1), c.m(o.parentNode, o)) : c && (Zn(), ve(c, 1, 1, () => {
        c = null;
      }), Pn()), /*newModalVisible*/
      d[8] ? _ ? (_.p(d, h), h[0] & /*newModalVisible*/
      256 && ne(_, 1)) : (_ = Uo(d), _.c(), ne(_, 1), _.m(a.parentNode, a)) : _ && (Zn(), ve(_, 1, 1, () => {
        _ = null;
      }), Pn());
    },
    i(d) {
      r || (ne(u), ne(c), ne(_), r = !0);
    },
    o(d) {
      ve(u), ve(c), ve(_), r = !1;
    },
    d(d) {
      d && (wt(e), wt(n), wt(i), wt(o), wt(a)), l[25](null), u && u.d(d), c && c.d(d), _ && _.d(d), s = !1, xs(f);
    }
  };
}
function No(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function wn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function o0(l, e, t) {
  let { imageUrl: n = null } = e, { interactive: i } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: a = 25 } = e, { handleSize: r } = e, { boxThickness: s } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: c = [] } = e, { choicesColors: _ = [] } = e, { disableEditBoxes: d = !1 } = e, h, b, m = null, w = -1, k = 0, g = 0, S = 0, M = 0, y = 1, z = 0, v = 0, q = !1, R = !1;
  const I = l0();
  function B() {
    if (b) {
      b.clearRect(0, 0, h.width, h.height), m !== null && b.drawImage(m, k, g, z, v);
      for (const E of u.boxes.slice().reverse())
        E.render(b);
    }
  }
  function W(E) {
    t(6, w = E), u.boxes.forEach((D) => {
      D.setSelected(!1);
    }), E >= 0 && E < u.boxes.length && u.boxes[E].setSelected(!0), B();
  }
  function H(E) {
    if (!i)
      return;
    const D = h.getBoundingClientRect(), Y = E.clientX - D.left, be = E.clientY - D.top;
    for (const [qe, J] of u.boxes.entries()) {
      const Qe = J.indexOfPointInsideHandle(Y, be);
      if (Qe >= 0) {
        W(qe), J.startResize(Qe, E);
        return;
      }
    }
    for (const [qe, J] of u.boxes.entries())
      if (J.isPointInsideBox(Y, be)) {
        W(qe), J.startDrag(E);
        return;
      }
    W(-1);
  }
  function le(E) {
    I("change");
  }
  function X(E) {
    if (i)
      switch (E.key) {
        case "Delete":
          Le();
          break;
      }
  }
  function ee() {
    d ? ae() : t(8, R = !0);
  }
  function ae(E = null, D = null, Y = null, be = null, qe = null, J = null) {
    D === null || D === "" ? D = Oe[u.boxes.length % Oe.length] : D = No(D), E === null && (E = ""), Y === null && (Y = z / 3 / y), qe === null && (qe = z / 3 * 2 / y), be === null && (be = v / 3 / y), J === null && (J = v / 3 * 2 / y);
    let Qe = new Vl(B, k, g, S, M, E, Math.round(Y), Math.round(be), Math.round(qe), Math.round(J), D, o, a, r, s, f);
    t(0, u.boxes = [Qe, ...u.boxes], u), B(), I("change");
  }
  function ye(E) {
    t(8, R = !1);
    const { detail: D } = E;
    D.ok && ae(D.label, D.color);
  }
  function L() {
    w >= 0 && w < u.boxes.length && !d && t(7, q = !0);
  }
  function de(E) {
    i && L();
  }
  function Ae(E) {
    t(7, q = !1);
    const { detail: D } = E;
    let Y = D.label, be = D.color;
    if (D.ok && w >= 0 && w < u.boxes.length) {
      let J = u.boxes[w];
      J.label = Y, J.color = No(be), B(), I("change");
    }
  }
  function Le() {
    w >= 0 && w < u.boxes.length && (u.boxes.splice(w, 1), W(-1), I("change"));
  }
  function Ce() {
    if (h) {
      if (y = 1, t(5, h.width = h.clientWidth, h), m !== null)
        if (m.width > h.width)
          y = h.width / m.width, z = m.width * y, v = m.height * y, k = 0, g = 0, S = z, M = v, t(5, h.height = v, h);
        else {
          z = m.width, v = m.height;
          var E = (h.width - z) / 2;
          k = E, g = 0, S = E + z, M = m.height, t(5, h.height = v, h);
        }
      else
        k = 0, g = 0, S = h.width, M = h.height, t(5, h.height = h.clientHeight, h);
      if (S > 0 && M > 0)
        for (const D of u.boxes)
          D.canvasXmin = k, D.canvasYmin = g, D.canvasXmax = S, D.canvasYmax = M, D.setScaleFactor(y);
      B(), I("change");
    }
  }
  const A = new ResizeObserver(Ce);
  function Ve() {
    for (let E = 0; E < u.boxes.length; E++) {
      let D = u.boxes[E];
      if (!(D instanceof Vl)) {
        let Y = "", be = "";
        D.hasOwnProperty("color") ? (Y = D.color, Array.isArray(Y) && Y.length === 3 && (Y = `rgb(${Y[0]}, ${Y[1]}, ${Y[2]})`)) : Y = Oe[E % Oe.length], D.hasOwnProperty("label") && (be = D.label), D = new Vl(B, k, g, S, M, be, D.xmin, D.ymin, D.xmax, D.ymax, Y, o, a, r, s, f), t(0, u.boxes[E] = D, u);
      }
    }
  }
  function p() {
    n !== null && (m === null || m.src != n) && (m = new Image(), m.src = n, m.onload = function() {
      Ce(), B();
    });
  }
  t0(() => {
    if (Array.isArray(c) && c.length > 0 && (!Array.isArray(_) || _.length == 0))
      for (let E = 0; E < c.length; E++) {
        let D = Oe[E % Oe.length];
        _.push(wn(D));
      }
    b = h.getContext("2d"), A.observe(h), p(), Ce(), B();
  });
  function F() {
    document.addEventListener("keydown", X);
  }
  function Z() {
    document.removeEventListener("keydown", X);
  }
  n0(() => {
    document.removeEventListener("keydown", X);
  });
  function K(E) {
    Jd[E ? "unshift" : "push"](() => {
      h = E, t(5, h);
    });
  }
  const C = () => ee(), Se = () => L(), he = () => Le();
  function ze(E) {
    Io.call(this, l, E);
  }
  function me(E) {
    Io.call(this, l, E);
  }
  return l.$$set = (E) => {
    "imageUrl" in E && t(19, n = E.imageUrl), "interactive" in E && t(1, i = E.interactive), "boxAlpha" in E && t(20, o = E.boxAlpha), "boxMinSize" in E && t(21, a = E.boxMinSize), "handleSize" in E && t(22, r = E.handleSize), "boxThickness" in E && t(23, s = E.boxThickness), "boxSelectedThickness" in E && t(24, f = E.boxSelectedThickness), "value" in E && t(0, u = E.value), "choices" in E && t(2, c = E.choices), "choicesColors" in E && t(3, _ = E.choicesColors), "disableEditBoxes" in E && t(4, d = E.disableEditBoxes);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (p(), Ve(), Ce(), B());
  }, [
    u,
    i,
    c,
    _,
    d,
    h,
    w,
    q,
    R,
    H,
    le,
    ee,
    ye,
    L,
    de,
    Ae,
    Le,
    F,
    Z,
    n,
    o,
    a,
    r,
    s,
    f,
    K,
    C,
    Se,
    he,
    ze,
    me
  ];
}
class s0 extends Gd {
  constructor(e) {
    super(), xd(
      this,
      e,
      o0,
      i0,
      e0,
      {
        imageUrl: 19,
        interactive: 1,
        boxAlpha: 20,
        boxMinSize: 21,
        handleSize: 22,
        boxThickness: 23,
        boxSelectedThickness: 24,
        value: 0,
        choices: 2,
        choicesColors: 3,
        disableEditBoxes: 4
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: a0,
  add_flush_callback: r0,
  bind: f0,
  binding_callbacks: u0,
  create_component: c0,
  destroy_component: _0,
  init: d0,
  mount_component: h0,
  safe_not_equal: m0,
  transition_in: b0,
  transition_out: g0
} = window.__gradio__svelte__internal, { createEventDispatcher: w0 } = window.__gradio__svelte__internal;
function p0(l) {
  let e, t, n;
  function i(a) {
    l[14](a);
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
    imageUrl: (
      /*resolved_src*/
      l[10]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new s0({ props: o }), u0.push(() => f0(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[15]
    ), {
      c() {
        c0(e.$$.fragment);
      },
      m(a, r) {
        h0(e, a, r), n = !0;
      },
      p(a, [r]) {
        const s = {};
        r & /*interactive*/
        2 && (s.interactive = /*interactive*/
        a[1]), r & /*boxesAlpha*/
        4 && (s.boxAlpha = /*boxesAlpha*/
        a[2]), r & /*labelList*/
        8 && (s.choices = /*labelList*/
        a[3]), r & /*labelColors*/
        16 && (s.choicesColors = /*labelColors*/
        a[4]), r & /*boxMinSize*/
        32 && (s.boxMinSize = /*boxMinSize*/
        a[5]), r & /*handleSize*/
        64 && (s.handleSize = /*handleSize*/
        a[6]), r & /*boxThickness*/
        128 && (s.boxThickness = /*boxThickness*/
        a[7]), r & /*boxSelectedThickness*/
        256 && (s.boxSelectedThickness = /*boxSelectedThickness*/
        a[8]), r & /*disableEditBoxes*/
        512 && (s.disableEditBoxes = /*disableEditBoxes*/
        a[9]), r & /*resolved_src*/
        1024 && (s.imageUrl = /*resolved_src*/
        a[10]), !t && r & /*value*/
        1 && (t = !0, s.value = /*value*/
        a[0], r0(() => t = !1)), e.$set(s);
      },
      i(a) {
        n || (b0(e.$$.fragment, a), n = !0);
      },
      o(a) {
        g0(e.$$.fragment, a), n = !1;
      },
      d(a) {
        _0(e, a);
      }
    }
  );
}
function k0(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: a } = e, { labelColors: r } = e, { boxMinSize: s } = e, { handleSize: f } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: _ } = e, { disableEditBoxes: d } = e, h, b;
  const m = w0();
  function w(g) {
    _ = g, t(0, _);
  }
  const k = () => m("change");
  return l.$$set = (g) => {
    "src" in g && t(12, n = g.src), "interactive" in g && t(1, i = g.interactive), "boxesAlpha" in g && t(2, o = g.boxesAlpha), "labelList" in g && t(3, a = g.labelList), "labelColors" in g && t(4, r = g.labelColors), "boxMinSize" in g && t(5, s = g.boxMinSize), "handleSize" in g && t(6, f = g.handleSize), "boxThickness" in g && t(7, u = g.boxThickness), "boxSelectedThickness" in g && t(8, c = g.boxSelectedThickness), "value" in g && t(0, _ = g.value), "disableEditBoxes" in g && t(9, d = g.disableEditBoxes);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    12288) {
      t(10, h = n), t(13, b = n);
      const g = n;
      Mc(g).then((S) => {
        b === g && t(10, h = S);
      });
    }
  }, [
    _,
    i,
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    d,
    h,
    m,
    n,
    b,
    w,
    k
  ];
}
class $s extends a0 {
  constructor(e) {
    super(), d0(this, e, k0, p0, m0, {
      src: 12,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      boxSelectedThickness: 8,
      value: 0,
      disableEditBoxes: 9
    });
  }
}
class v0 {
  constructor() {
    this.boxes = [];
  }
}
const {
  SvelteComponent: y0,
  add_flush_callback: ol,
  append: tn,
  attr: un,
  bind: sl,
  binding_callbacks: pn,
  bubble: Pl,
  check_outros: Ot,
  create_component: rt,
  create_slot: C0,
  destroy_component: ft,
  detach: yt,
  element: hn,
  empty: S0,
  get_all_dirty_from_scope: z0,
  get_slot_changes: q0,
  group_outros: Xt,
  init: E0,
  insert: Ct,
  mount_component: ut,
  noop: M0,
  safe_not_equal: B0,
  space: Ht,
  toggle_class: Oo,
  transition_in: O,
  transition_out: G,
  update_slot_base: A0
} = window.__gradio__svelte__internal, { createEventDispatcher: L0 } = window.__gradio__svelte__internal;
function Xo(l) {
  let e, t;
  return e = new Oc({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [D0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      rt(e.$$.fragment);
    },
    m(n, i) {
      ut(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      2048 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (O(e.$$.fragment, n), t = !0);
    },
    o(n) {
      G(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ft(e, n);
    }
  };
}
function D0(l) {
  let e, t;
  return e = new al({
    props: {
      Icon: mf,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      rt(e.$$.fragment);
    },
    m(n, i) {
      ut(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (O(e.$$.fragment, n), t = !0);
    },
    o(n) {
      G(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ft(e, n);
    }
  };
}
function Yo(l) {
  let e, t;
  return e = new zu({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[32]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[33]
  ), e.$on(
    "error",
    /*error_handler*/
    l[34]
  ), {
    c() {
      rt(e.$$.fragment);
    },
    m(n, i) {
      ut(e, n, i), t = !0;
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
      t || (O(e.$$.fragment, n), t = !0);
    },
    o(n) {
      G(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ft(e, n);
    }
  };
}
function Wo(l) {
  let e, t, n;
  return t = new al({
    props: { Icon: ci, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[30]
  ), {
    c() {
      e = hn("div"), rt(t.$$.fragment);
    },
    m(i, o) {
      Ct(i, e, o), ut(t, e, null), n = !0;
    },
    p: M0,
    i(i) {
      n || (O(t.$$.fragment, i), n = !0);
    },
    o(i) {
      G(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && yt(e), ft(t);
    }
  };
}
function Vo(l) {
  let e;
  const t = (
    /*#slots*/
    l[31].default
  ), n = C0(
    t,
    l,
    /*$$scope*/
    l[42],
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
      2048) && A0(
        n,
        t,
        i,
        /*$$scope*/
        i[42],
        e ? q0(
          t,
          /*$$scope*/
          i[42],
          o,
          null
        ) : z0(
          /*$$scope*/
          i[42]
        ),
        null
      );
    },
    i(i) {
      e || (O(n, i), e = !0);
    },
    o(i) {
      G(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function T0(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Vo(l)
  );
  return {
    c() {
      n && n.c(), e = S0();
    },
    m(i, o) {
      n && n.m(i, o), Ct(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && O(n, 1)) : (n = Vo(i), n.c(), O(n, 1), n.m(e.parentNode, e)) : n && (Xt(), G(n, 1, 1, () => {
        n = null;
      }), Ot());
    },
    i(i) {
      t || (O(n), t = !0);
    },
    o(i) {
      G(n), t = !1;
    },
    d(i) {
      i && yt(e), n && n.d(i);
    }
  };
}
function Po(l) {
  let e, t, n, i;
  function o(r) {
    l[39](r);
  }
  let a = {
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
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[19]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (a.value = /*value*/
    l[1]), t = new $s({ props: a }), pn.push(() => sl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[40]
    ), {
      c() {
        e = hn("div"), rt(t.$$.fragment), un(e, "class", "image-frame svelte-1gjdske"), Oo(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, s) {
        Ct(r, e, s), ut(t, e, null), i = !0;
      },
      p(r, s) {
        const f = {};
        s[0] & /*boxesAlpha*/
        4096 && (f.boxesAlpha = /*boxesAlpha*/
        r[12]), s[0] & /*labelList*/
        8192 && (f.labelList = /*labelList*/
        r[13]), s[0] & /*labelColors*/
        16384 && (f.labelColors = /*labelColors*/
        r[14]), s[0] & /*boxMinSize*/
        32768 && (f.boxMinSize = /*boxMinSize*/
        r[15]), s[0] & /*interactive*/
        128 && (f.interactive = /*interactive*/
        r[7]), s[0] & /*handleSize*/
        65536 && (f.handleSize = /*handleSize*/
        r[16]), s[0] & /*boxThickness*/
        131072 && (f.boxThickness = /*boxThickness*/
        r[17]), s[0] & /*disableEditBoxes*/
        262144 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[18]), s[0] & /*boxSelectedThickness*/
        524288 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[19]), s[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && s[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], ol(() => n = !1)), t.$set(f), (!i || s[0] & /*selectable*/
        32) && Oo(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (O(t.$$.fragment, r), i = !0);
      },
      o(r) {
        G(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && yt(e), ft(t);
      }
    }
  );
}
function Zo(l) {
  let e, t, n;
  function i(a) {
    l[41](a);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*handle_clear*/
      l[27]
    ),
    handle_select: (
      /*handle_select_source*/
      l[29]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new Ou({ props: o }), pn.push(() => sl(e, "active_source", i)), {
      c() {
        rt(e.$$.fragment);
      },
      m(a, r) {
        ut(e, a, r), n = !0;
      },
      p(a, r) {
        const s = {};
        r[0] & /*sources*/
        16 && (s.sources = /*sources*/
        a[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, s.active_source = /*active_source*/
        a[0], ol(() => t = !1)), e.$set(s);
      },
      i(a) {
        n || (O(e.$$.fragment, a), n = !0);
      },
      o(a) {
        G(e.$$.fragment, a), n = !1;
      },
      d(a) {
        ft(e, a);
      }
    }
  );
}
function j0(l) {
  let e, t, n, i, o, a, r, s, f, u, c, _, d, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new mr({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: ls,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let m = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Xo(l)
  ), w = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Yo(l)
  ), k = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Wo(l)
  );
  function g(v) {
    l[36](v);
  }
  function S(v) {
    l[37](v);
  }
  let M = {
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
      l[20]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[21]
    ),
    stream_handler: (
      /*stream_handler*/
      l[22]
    ),
    $$slots: { default: [T0] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[23] !== void 0 && (M.uploading = /*uploading*/
  l[23]), /*dragging*/
  l[24] !== void 0 && (M.dragging = /*dragging*/
  l[24]), f = new v_({ props: M }), l[35](f), pn.push(() => sl(f, "uploading", g)), pn.push(() => sl(f, "dragging", S)), f.$on(
    "load",
    /*handle_upload*/
    l[26]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[38]
  );
  let y = (
    /*value*/
    l[1] !== null && Po(l)
  ), z = h && Zo(l);
  return {
    c() {
      rt(e.$$.fragment), t = Ht(), n = hn("div"), m && m.c(), i = Ht(), w && w.c(), o = Ht(), k && k.c(), a = Ht(), r = hn("div"), s = hn("div"), rt(f.$$.fragment), _ = Ht(), y && y.c(), d = Ht(), z && z.c(), un(n, "class", "icon-buttons svelte-1gjdske"), un(s, "class", "upload-container svelte-1gjdske"), un(r, "data-testid", "image"), un(r, "class", "image-container svelte-1gjdske");
    },
    m(v, q) {
      ut(e, v, q), Ct(v, t, q), Ct(v, n, q), m && m.m(n, null), tn(n, i), w && w.m(n, null), tn(n, o), k && k.m(n, null), Ct(v, a, q), Ct(v, r, q), tn(r, s), ut(f, s, null), tn(s, _), y && y.m(s, null), tn(r, d), z && z.m(r, null), b = !0;
    },
    p(v, q) {
      const R = {};
      q[0] & /*show_label*/
      8 && (R.show_label = /*show_label*/
      v[3]), q[0] & /*label*/
      4 && (R.label = /*label*/
      v[2] || "Image Annotator"), e.$set(R), /*showDownloadButton*/
      v[10] && /*value*/
      v[1] !== null ? m ? (m.p(v, q), q[0] & /*showDownloadButton, value*/
      1026 && O(m, 1)) : (m = Xo(v), m.c(), O(m, 1), m.m(n, i)) : m && (Xt(), G(m, 1, 1, () => {
        m = null;
      }), Ot()), /*showShareButton*/
      v[9] && /*value*/
      v[1] !== null ? w ? (w.p(v, q), q[0] & /*showShareButton, value*/
      514 && O(w, 1)) : (w = Yo(v), w.c(), O(w, 1), w.m(n, o)) : w && (Xt(), G(w, 1, 1, () => {
        w = null;
      }), Ot()), /*showClearButton*/
      v[11] && /*value*/
      v[1] !== null && /*interactive*/
      v[7] ? k ? (k.p(v, q), q[0] & /*showClearButton, value, interactive*/
      2178 && O(k, 1)) : (k = Wo(v), k.c(), O(k, 1), k.m(n, null)) : k && (Xt(), G(k, 1, 1, () => {
        k = null;
      }), Ot());
      const I = {};
      q[0] & /*value*/
      2 && (I.hidden = /*value*/
      v[1] !== null), q[0] & /*active_source*/
      1 && (I.filetype = /*active_source*/
      v[0] === "clipboard" ? "clipboard" : "image/*"), q[0] & /*root*/
      64 && (I.root = /*root*/
      v[6]), q[0] & /*max_file_size*/
      1048576 && (I.max_file_size = /*max_file_size*/
      v[20]), q[0] & /*sources*/
      16 && (I.disable_click = !/*sources*/
      v[4].includes("upload")), q[0] & /*cli_upload*/
      2097152 && (I.upload = /*cli_upload*/
      v[21]), q[0] & /*stream_handler*/
      4194304 && (I.stream_handler = /*stream_handler*/
      v[22]), q[0] & /*value*/
      2 | q[1] & /*$$scope*/
      2048 && (I.$$scope = { dirty: q, ctx: v }), !u && q[0] & /*uploading*/
      8388608 && (u = !0, I.uploading = /*uploading*/
      v[23], ol(() => u = !1)), !c && q[0] & /*dragging*/
      16777216 && (c = !0, I.dragging = /*dragging*/
      v[24], ol(() => c = !1)), f.$set(I), /*value*/
      v[1] !== null ? y ? (y.p(v, q), q[0] & /*value*/
      2 && O(y, 1)) : (y = Po(v), y.c(), O(y, 1), y.m(s, null)) : y && (Xt(), G(y, 1, 1, () => {
        y = null;
      }), Ot()), q[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (v[4].length > 1 || /*sources*/
      v[4].includes("clipboard")) && /*value*/
      v[1] === null && /*interactive*/
      v[7]), h ? z ? (z.p(v, q), q[0] & /*sources, value, interactive*/
      146 && O(z, 1)) : (z = Zo(v), z.c(), O(z, 1), z.m(r, null)) : z && (Xt(), G(z, 1, 1, () => {
        z = null;
      }), Ot());
    },
    i(v) {
      b || (O(e.$$.fragment, v), O(m), O(w), O(k), O(f.$$.fragment, v), O(y), O(z), b = !0);
    },
    o(v) {
      G(e.$$.fragment, v), G(m), G(w), G(k), G(f.$$.fragment, v), G(y), G(z), b = !1;
    },
    d(v) {
      v && (yt(t), yt(n), yt(a), yt(r)), ft(e, v), m && m.d(), w && w.d(), k && k.d(), l[35](null), ft(f), y && y.d(), z && z.d();
    }
  };
}
function I0(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(C, Se, he, ze) {
    function me(E) {
      return E instanceof he ? E : new he(function(D) {
        D(E);
      });
    }
    return new (he || (he = Promise))(function(E, D) {
      function Y(J) {
        try {
          qe(ze.next(J));
        } catch (Qe) {
          D(Qe);
        }
      }
      function be(J) {
        try {
          qe(ze.throw(J));
        } catch (Qe) {
          D(Qe);
        }
      }
      function qe(J) {
        J.done ? E(J.value) : me(J.value).then(Y, be);
      }
      qe((ze = ze.apply(C, Se || [])).next());
    });
  };
  let { value: a } = e, { label: r = void 0 } = e, { show_label: s } = e, { sources: f = ["upload", "clipboard"] } = e, { selectable: u = !1 } = e, { root: c } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: b } = e, { showClearButton: m } = e, { boxesAlpha: w } = e, { labelList: k } = e, { labelColors: g } = e, { boxMinSize: S } = e, { handleSize: M } = e, { boxThickness: y } = e, { disableEditBoxes: z } = e, { boxSelectedThickness: v } = e, { max_file_size: q = null } = e, { cli_upload: R } = e, { stream_handler: I } = e, B, W = !1, { active_source: H = null } = e;
  function le({ detail: C }) {
    t(1, a = new v0()), t(1, a.image = C, a), ee("upload");
  }
  function X() {
    L(), ee("clear"), ee("change");
  }
  const ee = L0();
  let ae = !1;
  function ye(C) {
    return o(this, void 0, void 0, function* () {
      switch (C) {
        case "clipboard":
          B.paste_clipboard();
          break;
      }
    });
  }
  function L() {
    t(1, a = null);
  }
  const de = async (C) => C === null ? "" : `<img src="${await _u(C.image)}" />`;
  function Ae(C) {
    Pl.call(this, l, C);
  }
  function Le(C) {
    Pl.call(this, l, C);
  }
  function Ce(C) {
    pn[C ? "unshift" : "push"](() => {
      B = C, t(25, B);
    });
  }
  function A(C) {
    W = C, t(23, W);
  }
  function Ve(C) {
    ae = C, t(24, ae);
  }
  function p(C) {
    Pl.call(this, l, C);
  }
  function F(C) {
    a = C, t(1, a);
  }
  const Z = () => ee("change");
  function K(C) {
    H = C, t(0, H), t(4, f);
  }
  return l.$$set = (C) => {
    "value" in C && t(1, a = C.value), "label" in C && t(2, r = C.label), "show_label" in C && t(3, s = C.show_label), "sources" in C && t(4, f = C.sources), "selectable" in C && t(5, u = C.selectable), "root" in C && t(6, c = C.root), "interactive" in C && t(7, _ = C.interactive), "i18n" in C && t(8, d = C.i18n), "showShareButton" in C && t(9, h = C.showShareButton), "showDownloadButton" in C && t(10, b = C.showDownloadButton), "showClearButton" in C && t(11, m = C.showClearButton), "boxesAlpha" in C && t(12, w = C.boxesAlpha), "labelList" in C && t(13, k = C.labelList), "labelColors" in C && t(14, g = C.labelColors), "boxMinSize" in C && t(15, S = C.boxMinSize), "handleSize" in C && t(16, M = C.handleSize), "boxThickness" in C && t(17, y = C.boxThickness), "disableEditBoxes" in C && t(18, z = C.disableEditBoxes), "boxSelectedThickness" in C && t(19, v = C.boxSelectedThickness), "max_file_size" in C && t(20, q = C.max_file_size), "cli_upload" in C && t(21, R = C.cli_upload), "stream_handler" in C && t(22, I = C.stream_handler), "active_source" in C && t(0, H = C.active_source), "$$scope" in C && t(42, i = C.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    8388608 && W && L(), l.$$.dirty[0] & /*dragging*/
    16777216 && ee("drag", ae), l.$$.dirty[0] & /*active_source, sources*/
    17 && !H && f && t(0, H = f[0]);
  }, [
    H,
    a,
    r,
    s,
    f,
    u,
    c,
    _,
    d,
    h,
    b,
    m,
    w,
    k,
    g,
    S,
    M,
    y,
    z,
    v,
    q,
    R,
    I,
    W,
    ae,
    B,
    le,
    X,
    ee,
    ye,
    L,
    n,
    de,
    Ae,
    Le,
    Ce,
    A,
    Ve,
    p,
    F,
    Z,
    K,
    i
  ];
}
class R0 extends y0 {
  constructor(e) {
    super(), E0(
      this,
      e,
      I0,
      j0,
      B0,
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
        boxSelectedThickness: 19,
        max_file_size: 20,
        cli_upload: 21,
        stream_handler: 22,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: F0,
  attr: H0,
  check_outros: U0,
  create_component: N0,
  destroy_component: O0,
  detach: X0,
  element: Y0,
  group_outros: W0,
  init: V0,
  insert: P0,
  mount_component: Z0,
  safe_not_equal: K0,
  toggle_class: nt,
  transition_in: Kn,
  transition_out: ui
} = window.__gradio__svelte__internal;
function Ko(l) {
  let e, t;
  return e = new $s({
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
      N0(e.$$.fragment);
    },
    m(n, i) {
      Z0(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*samples_dir, value*/
      3 && (o.src = /*samples_dir*/
      n[1] + /*value*/
      n[0].path), e.$set(o);
    },
    i(n) {
      t || (Kn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ui(e.$$.fragment, n), t = !1;
    },
    d(n) {
      O0(e, n);
    }
  };
}
function G0(l) {
  let e, t, n = (
    /*value*/
    l[0] && Ko(l)
  );
  return {
    c() {
      e = Y0("div"), n && n.c(), H0(e, "class", "container svelte-1sgcyba"), nt(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), nt(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), nt(
        e,
        "selected",
        /*selected*/
        l[3]
      ), nt(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(i, o) {
      P0(i, e, o), n && n.m(e, null), t = !0;
    },
    p(i, [o]) {
      /*value*/
      i[0] ? n ? (n.p(i, o), o & /*value*/
      1 && Kn(n, 1)) : (n = Ko(i), n.c(), Kn(n, 1), n.m(e, null)) : n && (W0(), ui(n, 1, 1, () => {
        n = null;
      }), U0()), (!t || o & /*type*/
      4) && nt(
        e,
        "table",
        /*type*/
        i[2] === "table"
      ), (!t || o & /*type*/
      4) && nt(
        e,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), (!t || o & /*selected*/
      8) && nt(
        e,
        "selected",
        /*selected*/
        i[3]
      ), (!t || o & /*value*/
      1) && nt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    i(i) {
      t || (Kn(n), t = !0);
    },
    o(i) {
      ui(n), t = !1;
    },
    d(i) {
      i && X0(e), n && n.d();
    }
  };
}
function J0(l, e, t) {
  let { value: n } = e, { samples_dir: i } = e, { type: o } = e, { selected: a = !1 } = e;
  return l.$$set = (r) => {
    "value" in r && t(0, n = r.value), "samples_dir" in r && t(1, i = r.samples_dir), "type" in r && t(2, o = r.type), "selected" in r && t(3, a = r.selected);
  }, [n, i, o, a];
}
class p1 extends F0 {
  constructor(e) {
    super(), V0(this, e, J0, G0, K0, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: Q0,
  add_flush_callback: Go,
  assign: x0,
  bind: Jo,
  binding_callbacks: Qo,
  check_outros: $0,
  create_component: Mt,
  destroy_component: Bt,
  detach: ea,
  empty: e1,
  flush: N,
  get_spread_object: t1,
  get_spread_update: n1,
  group_outros: l1,
  init: i1,
  insert: ta,
  mount_component: At,
  safe_not_equal: o1,
  space: s1,
  transition_in: Ge,
  transition_out: Je
} = window.__gradio__svelte__internal;
function a1(l) {
  let e, t;
  return e = new Pr({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [u1] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      512 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function r1(l) {
  let e, t;
  return e = new fs({
    props: {
      i18n: (
        /*gradio*/
        l[27].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      134217728 && (o.i18n = /*gradio*/
      n[27].i18n), e.$set(o);
    },
    i(n) {
      t || (Ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function f1(l) {
  let e, t;
  return e = new fs({
    props: {
      i18n: (
        /*gradio*/
        l[27].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      134217728 && (o.i18n = /*gradio*/
      n[27].i18n), e.$set(o);
    },
    i(n) {
      t || (Ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function u1(l) {
  let e, t;
  return e = new ls({}), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    i(n) {
      t || (Ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function c1(l) {
  let e, t, n, i;
  const o = [f1, r1, a1], a = [];
  function r(s, f) {
    return (
      /*active_source*/
      s[29] === "upload" ? 0 : (
        /*active_source*/
        s[29] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = a[e] = o[e](l), {
    c() {
      t.c(), n = e1();
    },
    m(s, f) {
      a[e].m(s, f), ta(s, n, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (l1(), Je(a[u], 1, 1, () => {
        a[u] = null;
      }), $0(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), Ge(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (Ge(t), i = !0);
    },
    o(s) {
      Je(t), i = !1;
    },
    d(s) {
      s && ea(n), a[e].d(s);
    }
  };
}
function _1(l) {
  let e, t, n, i, o, a;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[27].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[27].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let s = {};
  for (let _ = 0; _ < r.length; _ += 1)
    s = x0(s, r[_]);
  e = new Sc({ props: s });
  function f(_) {
    l[30](_);
  }
  function u(_) {
    l[31](_);
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
      l[27].i18n
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
      l[27].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[27].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[27].client.stream
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
    $$slots: { default: [c1] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[29] !== void 0 && (c.active_source = /*active_source*/
    l[29]), /*value*/
    l[0] !== void 0 && (c.value = /*value*/
    l[0]), n = new R0({ props: c }), Qo.push(() => Jo(n, "active_source", f)), Qo.push(() => Jo(n, "value", u)), n.$on(
      "change",
      /*change_handler*/
      l[32]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[33]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[34]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[35]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[36]
    ), n.$on(
      "select",
      /*select_handler*/
      l[37]
    ), n.$on(
      "share",
      /*share_handler*/
      l[38]
    ), n.$on(
      "error",
      /*error_handler*/
      l[39]
    ), {
      c() {
        Mt(e.$$.fragment), t = s1(), Mt(n.$$.fragment);
      },
      m(_, d) {
        At(e, _, d), ta(_, t, d), At(n, _, d), a = !0;
      },
      p(_, d) {
        const h = d[0] & /*gradio, loading_status*/
        134217730 ? n1(r, [
          d[0] & /*gradio*/
          134217728 && {
            autoscroll: (
              /*gradio*/
              _[27].autoscroll
            )
          },
          d[0] & /*gradio*/
          134217728 && { i18n: (
            /*gradio*/
            _[27].i18n
          ) },
          d[0] & /*loading_status*/
          2 && t1(
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
        134217728 && (b.i18n = /*gradio*/
        _[27].i18n), d[0] & /*boxes_alpha*/
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
        134217728 && (b.max_file_size = /*gradio*/
        _[27].max_file_size), d[0] & /*gradio*/
        134217728 && (b.cli_upload = /*gradio*/
        _[27].client.upload), d[0] & /*gradio*/
        134217728 && (b.stream_handler = /*gradio*/
        _[27].client.stream), d[0] & /*handle_size*/
        8388608 && (b.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (b.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (b.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (b.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*gradio, active_source*/
        671088640 | d[1] & /*$$scope*/
        512 && (b.$$scope = { dirty: d, ctx: _ }), !i && d[0] & /*active_source*/
        536870912 && (i = !0, b.active_source = /*active_source*/
        _[29], Go(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, b.value = /*value*/
        _[0], Go(() => o = !1)), n.$set(b);
      },
      i(_) {
        a || (Ge(e.$$.fragment, _), Ge(n.$$.fragment, _), a = !0);
      },
      o(_) {
        Je(e.$$.fragment, _), Je(n.$$.fragment, _), a = !1;
      },
      d(_) {
        _ && ea(t), Bt(e, _), Bt(n, _);
      }
    }
  );
}
function d1(l) {
  let e, t;
  return e = new ga({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[28] ? "focus" : "base"
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
      $$slots: { default: [_1] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[0] & /*dragging*/
      268435456 && (o.border_mode = /*dragging*/
      n[28] ? "focus" : "base"), i[0] & /*elem_id*/
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
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, active_source, value, dragging, loading_status*/
      1073726691 | i[1] & /*$$scope*/
      512 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ge(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function h1(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: a = null } = e, { label: r } = e, { show_label: s } = e, { root: f } = e, { height: u } = e, { width: c } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e, { loading_status: m } = e, { sources: w = ["upload", "clipboard"] } = e, { show_download_button: k } = e, { show_share_button: g } = e, { show_clear_button: S } = e, { interactive: M } = e, { boxes_alpha: y } = e, { label_list: z } = e, { label_colors: v } = e, { box_min_size: q } = e, { handle_size: R } = e, { box_thickness: I } = e, { box_selected_thickness: B } = e, { disable_edit_boxes: W } = e, { gradio: H } = e, le, X = null;
  function ee(p) {
    X = p, t(29, X);
  }
  function ae(p) {
    a = p, t(0, a);
  }
  const ye = () => H.dispatch("change"), L = () => H.dispatch("edit"), de = () => {
    H.dispatch("clear");
  }, Ae = ({ detail: p }) => t(28, le = p), Le = () => H.dispatch("upload"), Ce = ({ detail: p }) => H.dispatch("select", p), A = ({ detail: p }) => H.dispatch("share", p), Ve = ({ detail: p }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), H.dispatch("error", p);
  };
  return l.$$set = (p) => {
    "elem_id" in p && t(2, n = p.elem_id), "elem_classes" in p && t(3, i = p.elem_classes), "visible" in p && t(4, o = p.visible), "value" in p && t(0, a = p.value), "label" in p && t(5, r = p.label), "show_label" in p && t(6, s = p.show_label), "root" in p && t(7, f = p.root), "height" in p && t(8, u = p.height), "width" in p && t(9, c = p.width), "_selectable" in p && t(10, _ = p._selectable), "container" in p && t(11, d = p.container), "scale" in p && t(12, h = p.scale), "min_width" in p && t(13, b = p.min_width), "loading_status" in p && t(1, m = p.loading_status), "sources" in p && t(14, w = p.sources), "show_download_button" in p && t(15, k = p.show_download_button), "show_share_button" in p && t(16, g = p.show_share_button), "show_clear_button" in p && t(17, S = p.show_clear_button), "interactive" in p && t(18, M = p.interactive), "boxes_alpha" in p && t(19, y = p.boxes_alpha), "label_list" in p && t(20, z = p.label_list), "label_colors" in p && t(21, v = p.label_colors), "box_min_size" in p && t(22, q = p.box_min_size), "handle_size" in p && t(23, R = p.handle_size), "box_thickness" in p && t(24, I = p.box_thickness), "box_selected_thickness" in p && t(25, B = p.box_selected_thickness), "disable_edit_boxes" in p && t(26, W = p.disable_edit_boxes), "gradio" in p && t(27, H = p.gradio);
  }, [
    a,
    m,
    n,
    i,
    o,
    r,
    s,
    f,
    u,
    c,
    _,
    d,
    h,
    b,
    w,
    k,
    g,
    S,
    M,
    y,
    z,
    v,
    q,
    R,
    I,
    B,
    W,
    H,
    le,
    X,
    ee,
    ae,
    ye,
    L,
    de,
    Ae,
    Le,
    Ce,
    A,
    Ve
  ];
}
class k1 extends Q0 {
  constructor(e) {
    super(), i1(
      this,
      e,
      h1,
      d1,
      o1,
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
        gradio: 27
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
  get gradio() {
    return this.$$.ctx[27];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), N();
  }
}
export {
  p1 as BaseExample,
  k1 as default
};
