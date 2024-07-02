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
  set_dynamic_element_data: pi,
  set_style: ke,
  toggle_class: Re,
  transition_in: Jo,
  transition_out: Qo,
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
      ), o && o.c(), pi(
        /*tag*/
        l[14]
      )(e, r), Re(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), Re(
        e,
        "padded",
        /*padding*/
        l[6]
      ), Re(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), Re(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), Re(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), ke(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), ke(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), ke(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), ke(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), ke(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), ke(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), ke(e, "border-width", "var(--block-border-width)");
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
      ), pi(
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
      ])), Re(
        e,
        "hidden",
        /*visible*/
        s[10] === !1
      ), Re(
        e,
        "padded",
        /*padding*/
        s[6]
      ), Re(
        e,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), Re(
        e,
        "border_contrast",
        /*border_mode*/
        s[5] === "contrast"
      ), Re(e, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), f & /*height*/
      1 && ke(
        e,
        "height",
        /*get_dimension*/
        s[15](
          /*height*/
          s[0]
        )
      ), f & /*width*/
      2 && ke(e, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : (
        /*get_dimension*/
        s[15](
          /*width*/
          s[1]
        )
      )), f & /*variant*/
      16 && ke(
        e,
        "border-style",
        /*variant*/
        s[4]
      ), f & /*allow_overflow*/
      2048 && ke(
        e,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && ke(
        e,
        "flex-grow",
        /*scale*/
        s[12]
      ), f & /*min_width*/
      8192 && ke(e, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      n || (Jo(o, s), n = !0);
    },
    o(s) {
      Qo(o, s), n = !1;
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
      e || (Jo(t, n), e = !0);
    },
    o(n) {
      Qo(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function ba(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: a = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: s = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: d = "normal" } = e, { test_id: _ = void 0 } = e, { explicit_call: h = !1 } = e, { container: m = !0 } = e, { visible: b = !0 } = e, { allow_overflow: g = !0 } = e, { scale: w = null } = e, { min_width: p = 0 } = e, C = d === "fieldset" ? "fieldset" : "div";
  const E = (v) => {
    if (v !== void 0) {
      if (typeof v == "number")
        return v + "px";
      if (typeof v == "string")
        return v;
    }
  };
  return l.$$set = (v) => {
    "height" in v && t(0, o = v.height), "width" in v && t(1, a = v.width), "elem_id" in v && t(2, r = v.elem_id), "elem_classes" in v && t(3, s = v.elem_classes), "variant" in v && t(4, f = v.variant), "border_mode" in v && t(5, u = v.border_mode), "padding" in v && t(6, c = v.padding), "type" in v && t(16, d = v.type), "test_id" in v && t(7, _ = v.test_id), "explicit_call" in v && t(8, h = v.explicit_call), "container" in v && t(9, m = v.container), "visible" in v && t(10, b = v.visible), "allow_overflow" in v && t(11, g = v.allow_overflow), "scale" in v && t(12, w = v.scale), "min_width" in v && t(13, p = v.min_width), "$$scope" in v && t(17, i = v.$$scope);
  }, [
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    _,
    h,
    m,
    b,
    g,
    w,
    p,
    C,
    E,
    d,
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
  safe_not_equal: Ma,
  transition_in: Ea,
  transition_out: Aa,
  update_slot_base: La
} = window.__gradio__svelte__internal;
function Da(l) {
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
      1) && La(
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
      t || (Ea(i, o), t = !0);
    },
    o(o) {
      Aa(i, o), t = !1;
    },
    d(o) {
      o && va(e), i && i.d(o);
    }
  };
}
function Ta(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Ba extends wa {
  constructor(e) {
    super(), za(this, e, Ta, Da, Ma, {});
  }
}
const {
  SvelteComponent: ja,
  attr: ki,
  check_outros: Ia,
  create_component: Ra,
  create_slot: Fa,
  destroy_component: Ha,
  detach: Hn,
  element: Ua,
  empty: Na,
  get_all_dirty_from_scope: Oa,
  get_slot_changes: Xa,
  group_outros: Ya,
  init: Wa,
  insert: Un,
  mount_component: Va,
  safe_not_equal: Pa,
  set_data: Za,
  space: Ka,
  text: Ga,
  toggle_class: Mt,
  transition_in: nn,
  transition_out: Nn,
  update_slot_base: Ja
} = window.__gradio__svelte__internal;
function vi(l) {
  let e, t;
  return e = new Ba({
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
      Nn(e.$$.fragment, n), t = !1;
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
      Un(t, e, n);
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
      t && Hn(e);
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
    l[1] && vi(l)
  );
  return {
    c() {
      e = Ua("span"), a && a.c(), t = Ka(), r && r.c(), n = Na(), ki(e, "data-testid", "block-info"), ki(e, "class", "svelte-22c38v"), Mt(e, "sr-only", !/*show_label*/
      l[0]), Mt(e, "hide", !/*show_label*/
      l[0]), Mt(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(s, f) {
      Un(s, e, f), a && a.m(e, null), Un(s, t, f), r && r.m(s, f), Un(s, n, f), i = !0;
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
      1) && Mt(e, "sr-only", !/*show_label*/
      s[0]), (!i || f & /*show_label*/
      1) && Mt(e, "hide", !/*show_label*/
      s[0]), (!i || f & /*info*/
      2) && Mt(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? r ? (r.p(s, f), f & /*info*/
      2 && nn(r, 1)) : (r = vi(s), r.c(), nn(r, 1), r.m(n.parentNode, n)) : r && (Ya(), Nn(r, 1, 1, () => {
        r = null;
      }), Ia());
    },
    i(s) {
      i || (nn(a, s), nn(r), i = !0);
    },
    o(s) {
      Nn(a, s), Nn(r), i = !1;
    },
    d(s) {
      s && (Hn(e), Hn(t), Hn(n)), a && a.d(s), r && r.d(s);
    }
  };
}
function $a(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: a = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, a = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, a, n, i];
}
class xo extends ja {
  constructor(e) {
    super(), Wa(this, e, $a, xa, Pa, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: er,
  append: hl,
  attr: yn,
  create_component: tr,
  destroy_component: nr,
  detach: lr,
  element: yi,
  init: ir,
  insert: or,
  mount_component: sr,
  safe_not_equal: ar,
  set_data: rr,
  space: fr,
  text: ur,
  toggle_class: Je,
  transition_in: cr,
  transition_out: _r
} = window.__gradio__svelte__internal;
function dr(l) {
  let e, t, n, i, o, a;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = yi("label"), t = yi("span"), tr(n.$$.fragment), i = fr(), o = ur(
        /*label*/
        l[0]
      ), yn(t, "class", "svelte-9gxdi0"), yn(e, "for", ""), yn(e, "data-testid", "block-label"), yn(e, "class", "svelte-9gxdi0"), Je(e, "hide", !/*show_label*/
      l[2]), Je(e, "sr-only", !/*show_label*/
      l[2]), Je(
        e,
        "float",
        /*float*/
        l[4]
      ), Je(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, s) {
      or(r, e, s), hl(e, t), sr(n, t, null), hl(e, i), hl(e, o), a = !0;
    },
    p(r, [s]) {
      (!a || s & /*label*/
      1) && rr(
        o,
        /*label*/
        r[0]
      ), (!a || s & /*show_label*/
      4) && Je(e, "hide", !/*show_label*/
      r[2]), (!a || s & /*show_label*/
      4) && Je(e, "sr-only", !/*show_label*/
      r[2]), (!a || s & /*float*/
      16) && Je(
        e,
        "float",
        /*float*/
        r[4]
      ), (!a || s & /*disable*/
      8) && Je(
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
  append: Pl,
  attr: Ze,
  bubble: gr,
  create_component: wr,
  destroy_component: pr,
  detach: $o,
  element: Zl,
  init: kr,
  insert: es,
  listen: vr,
  mount_component: yr,
  safe_not_equal: Cr,
  set_data: Sr,
  set_style: Et,
  space: zr,
  text: qr,
  toggle_class: _e,
  transition_in: Mr,
  transition_out: Er
} = window.__gradio__svelte__internal;
function Ci(l) {
  let e, t;
  return {
    c() {
      e = Zl("span"), t = qr(
        /*label*/
        l[1]
      ), Ze(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      es(n, e, i), Pl(e, t);
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
      n && $o(e);
    }
  };
}
function Ar(l) {
  let e, t, n, i, o, a, r, s = (
    /*show_label*/
    l[2] && Ci(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = Zl("button"), s && s.c(), t = zr(), n = Zl("div"), wr(i.$$.fragment), Ze(n, "class", "svelte-1lrphxw"), _e(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), _e(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), _e(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], Ze(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), Ze(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), Ze(
        e,
        "title",
        /*label*/
        l[1]
      ), Ze(e, "class", "svelte-1lrphxw"), _e(
        e,
        "pending",
        /*pending*/
        l[3]
      ), _e(
        e,
        "padded",
        /*padded*/
        l[5]
      ), _e(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), _e(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), Et(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Et(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Et(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, u) {
      es(f, e, u), s && s.m(e, null), Pl(e, t), Pl(e, n), yr(i, n, null), o = !0, a || (r = vr(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), a = !0);
    },
    p(f, [u]) {
      /*show_label*/
      f[2] ? s ? s.p(f, u) : (s = Ci(f), s.c(), s.m(e, t)) : s && (s.d(1), s = null), (!o || u & /*size*/
      16) && _e(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || u & /*size*/
      16) && _e(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || u & /*size*/
      16) && _e(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || u & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || u & /*label*/
      2) && Ze(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || u & /*hasPopup*/
      256) && Ze(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || u & /*label*/
      2) && Ze(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || u & /*pending*/
      8) && _e(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || u & /*padded*/
      32) && _e(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || u & /*highlight*/
      64) && _e(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || u & /*transparent*/
      512) && _e(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), u & /*disabled, _color*/
      4224 && Et(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && Et(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), u & /*offset*/
      2048 && Et(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Mr(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Er(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && $o(e), s && s.d(), pr(i), a = !1, r();
    }
  };
}
function Lr(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: a = !1 } = e, { pending: r = !1 } = e, { size: s = "small" } = e, { padded: f = !0 } = e, { highlight: u = !1 } = e, { disabled: c = !1 } = e, { hasPopup: d = !1 } = e, { color: _ = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function g(w) {
    gr.call(this, l, w);
  }
  return l.$$set = (w) => {
    "Icon" in w && t(0, i = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, a = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, s = w.size), "padded" in w && t(5, f = w.padded), "highlight" in w && t(6, u = w.highlight), "disabled" in w && t(7, c = w.disabled), "hasPopup" in w && t(8, d = w.hasPopup), "color" in w && t(13, _ = w.color), "transparent" in w && t(9, h = w.transparent), "background" in w && t(10, m = w.background), "offset" in w && t(11, b = w.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = u ? "var(--color-accent)" : _);
  }, [
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
    b,
    n,
    _,
    g
  ];
}
class il extends br {
  constructor(e) {
    super(), kr(this, e, Lr, Ar, Cr, {
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
  SvelteComponent: Dr,
  append: Tr,
  attr: ml,
  binding_callbacks: Br,
  create_slot: jr,
  detach: Ir,
  element: Si,
  get_all_dirty_from_scope: Rr,
  get_slot_changes: Fr,
  init: Hr,
  insert: Ur,
  safe_not_equal: Nr,
  toggle_class: Qe,
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
      e = Si("div"), t = Si("div"), o && o.c(), ml(t, "class", "icon svelte-3w3rth"), ml(e, "class", "empty svelte-3w3rth"), ml(e, "aria-label", "Empty value"), Qe(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), Qe(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), Qe(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), Qe(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(a, r) {
      Ur(a, e, r), Tr(e, t), o && o.m(t, null), l[6](e), n = !0;
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
      1) && Qe(
        e,
        "small",
        /*size*/
        a[0] === "small"
      ), (!n || r & /*size*/
      1) && Qe(
        e,
        "large",
        /*size*/
        a[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Qe(
        e,
        "unpadded_box",
        /*unpadded_box*/
        a[1]
      ), (!n || r & /*parent_height*/
      8) && Qe(
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
    var d;
    if (!c) return !1;
    const { height: _ } = c.getBoundingClientRect(), { height: h } = ((d = c.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: _ };
    return _ > h + 2;
  }
  function u(c) {
    Br[c ? "unshift" : "push"](() => {
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
class Pr extends Dr {
  constructor(e) {
    super(), Hr(this, e, Vr, Wr, Nr, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Zr,
  append: bl,
  attr: Ae,
  detach: Kr,
  init: Gr,
  insert: Jr,
  noop: gl,
  safe_not_equal: Qr,
  set_style: Fe,
  svg_element: Cn
} = window.__gradio__svelte__internal;
function xr(l) {
  let e, t, n, i;
  return {
    c() {
      e = Cn("svg"), t = Cn("g"), n = Cn("path"), i = Cn("path"), Ae(n, "d", "M18,6L6.087,17.913"), Fe(n, "fill", "none"), Fe(n, "fill-rule", "nonzero"), Fe(n, "stroke-width", "2px"), Ae(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ae(i, "d", "M4.364,4.364L19.636,19.636"), Fe(i, "fill", "none"), Fe(i, "fill-rule", "nonzero"), Fe(i, "stroke-width", "2px"), Ae(e, "width", "100%"), Ae(e, "height", "100%"), Ae(e, "viewBox", "0 0 24 24"), Ae(e, "version", "1.1"), Ae(e, "xmlns", "http://www.w3.org/2000/svg"), Ae(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ae(e, "xml:space", "preserve"), Ae(e, "stroke", "currentColor"), Fe(e, "fill-rule", "evenodd"), Fe(e, "clip-rule", "evenodd"), Fe(e, "stroke-linecap", "round"), Fe(e, "stroke-linejoin", "round");
    },
    m(o, a) {
      Jr(o, e, a), bl(e, t), bl(t, n), bl(e, i);
    },
    p: gl,
    i: gl,
    o: gl,
    d(o) {
      o && Kr(e);
    }
  };
}
class ui extends Zr {
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
  noop: wl,
  safe_not_equal: of,
  svg_element: zi
} = window.__gradio__svelte__internal;
function sf(l) {
  let e, t;
  return {
    c() {
      e = zi("svg"), t = zi("path"), Qt(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Qt(t, "fill", "currentColor"), Qt(e, "id", "icon"), Qt(e, "xmlns", "http://www.w3.org/2000/svg"), Qt(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      lf(n, e, i), ef(e, t);
    },
    p: wl,
    i: wl,
    o: wl,
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
  attr: At,
  detach: uf,
  init: cf,
  insert: _f,
  noop: pl,
  safe_not_equal: df,
  svg_element: qi
} = window.__gradio__svelte__internal;
function hf(l) {
  let e, t;
  return {
    c() {
      e = qi("svg"), t = qi("path"), At(t, "fill", "currentColor"), At(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), At(e, "xmlns", "http://www.w3.org/2000/svg"), At(e, "width", "100%"), At(e, "height", "100%"), At(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      _f(n, e, i), ff(e, t);
    },
    p: pl,
    i: pl,
    o: pl,
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
  attr: Lt,
  detach: wf,
  init: pf,
  insert: kf,
  noop: kl,
  safe_not_equal: vf,
  svg_element: Mi
} = window.__gradio__svelte__internal;
function yf(l) {
  let e, t;
  return {
    c() {
      e = Mi("svg"), t = Mi("path"), Lt(t, "d", "M5 8l4 4 4-4z"), Lt(e, "class", "dropdown-arrow svelte-145leq6"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      kf(n, e, i), gf(e, t);
    },
    p: kl,
    i: kl,
    o: kl,
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
  attr: Le,
  detach: qf,
  init: Mf,
  insert: Ef,
  noop: vl,
  safe_not_equal: Af,
  svg_element: Ei
} = window.__gradio__svelte__internal;
function Lf(l) {
  let e, t;
  return {
    c() {
      e = Ei("svg"), t = Ei("path"), Le(t, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Le(e, "xmlns", "http://www.w3.org/2000/svg"), Le(e, "width", "100%"), Le(e, "height", "100%"), Le(e, "viewBox", "0 0 24 24"), Le(e, "fill", "none"), Le(e, "stroke", "currentColor"), Le(e, "stroke-width", "1.5"), Le(e, "stroke-linecap", "round"), Le(e, "stroke-linejoin", "round"), Le(e, "class", "feather feather-edit-2");
    },
    m(n, i) {
      Ef(n, e, i), zf(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && qf(e);
    }
  };
}
class Df extends Sf {
  constructor(e) {
    super(), Mf(this, e, null, Lf, Af, {});
  }
}
const {
  SvelteComponent: Tf,
  append: yl,
  attr: Q,
  detach: Bf,
  init: jf,
  insert: If,
  noop: Cl,
  safe_not_equal: Rf,
  svg_element: Sn
} = window.__gradio__svelte__internal;
function Ff(l) {
  let e, t, n, i;
  return {
    c() {
      e = Sn("svg"), t = Sn("rect"), n = Sn("circle"), i = Sn("polyline"), Q(t, "x", "3"), Q(t, "y", "3"), Q(t, "width", "18"), Q(t, "height", "18"), Q(t, "rx", "2"), Q(t, "ry", "2"), Q(n, "cx", "8.5"), Q(n, "cy", "8.5"), Q(n, "r", "1.5"), Q(i, "points", "21 15 16 10 5 21"), Q(e, "xmlns", "http://www.w3.org/2000/svg"), Q(e, "width", "100%"), Q(e, "height", "100%"), Q(e, "viewBox", "0 0 24 24"), Q(e, "fill", "none"), Q(e, "stroke", "currentColor"), Q(e, "stroke-width", "1.5"), Q(e, "stroke-linecap", "round"), Q(e, "stroke-linejoin", "round"), Q(e, "class", "feather feather-image");
    },
    m(o, a) {
      If(o, e, a), yl(e, t), yl(e, n), yl(e, i);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(o) {
      o && Bf(e);
    }
  };
}
let ts = class extends Tf {
  constructor(e) {
    super(), jf(this, e, null, Ff, Rf, {});
  }
};
const {
  SvelteComponent: Hf,
  append: Uf,
  attr: zn,
  detach: Nf,
  init: Of,
  insert: Xf,
  noop: Sl,
  safe_not_equal: Yf,
  svg_element: Ai
} = window.__gradio__svelte__internal;
function Wf(l) {
  let e, t;
  return {
    c() {
      e = Ai("svg"), t = Ai("path"), zn(t, "fill", "currentColor"), zn(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), zn(e, "xmlns", "http://www.w3.org/2000/svg"), zn(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Xf(n, e, i), Uf(e, t);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(n) {
      n && Nf(e);
    }
  };
}
class ns extends Hf {
  constructor(e) {
    super(), Of(this, e, null, Wf, Yf, {});
  }
}
const {
  SvelteComponent: Vf,
  append: qn,
  attr: x,
  detach: Pf,
  init: Zf,
  insert: Kf,
  noop: zl,
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
      Kf(a, e, r), qn(e, t), qn(e, n), qn(e, i), qn(e, o);
    },
    p: zl,
    i: zl,
    o: zl,
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
  append: ql,
  attr: le,
  detach: $f,
  init: eu,
  insert: tu,
  noop: Ml,
  safe_not_equal: nu,
  svg_element: Mn
} = window.__gradio__svelte__internal;
function lu(l) {
  let e, t, n, i;
  return {
    c() {
      e = Mn("svg"), t = Mn("path"), n = Mn("polyline"), i = Mn("line"), le(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), le(n, "points", "17 8 12 3 7 8"), le(i, "x1", "12"), le(i, "y1", "3"), le(i, "x2", "12"), le(i, "y2", "15"), le(e, "xmlns", "http://www.w3.org/2000/svg"), le(e, "width", "90%"), le(e, "height", "90%"), le(e, "viewBox", "0 0 24 24"), le(e, "fill", "none"), le(e, "stroke", "currentColor"), le(e, "stroke-width", "2"), le(e, "stroke-linecap", "round"), le(e, "stroke-linejoin", "round"), le(e, "class", "feather feather-upload");
    },
    m(o, a) {
      tu(o, e, a), ql(e, t), ql(e, n), ql(e, i);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(o) {
      o && $f(e);
    }
  };
}
let ls = class extends xf {
  constructor(e) {
    super(), eu(this, e, null, lu, nu, {});
  }
};
const {
  SvelteComponent: iu,
  append: Li,
  attr: xe,
  detach: ou,
  init: su,
  insert: au,
  noop: El,
  safe_not_equal: ru,
  svg_element: Al
} = window.__gradio__svelte__internal;
function fu(l) {
  let e, t, n;
  return {
    c() {
      e = Al("svg"), t = Al("path"), n = Al("path"), xe(t, "fill", "currentColor"), xe(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), xe(n, "fill", "currentColor"), xe(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      au(i, e, o), Li(e, t), Li(e, n);
    },
    p: El,
    i: El,
    o: El,
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
class On extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function _u(l, e) {
  var s;
  if (window.__gradio_space__ == null)
    throw new On("Must be on Spaces to share.");
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
      throw new On(`Upload failed: ${f.error}`);
    }
    throw new On("Upload failed.");
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
  return e = new il({
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
      let u = f instanceof On ? f.message : "Share failed.";
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
  append: bt,
  attr: Kl,
  check_outros: Mu,
  create_component: is,
  destroy_component: os,
  detach: Xn,
  element: Gl,
  group_outros: Eu,
  init: Au,
  insert: Yn,
  mount_component: ss,
  safe_not_equal: Lu,
  set_data: Jl,
  space: Ql,
  text: ln,
  toggle_class: Ti,
  transition_in: Pn,
  transition_out: Zn
} = window.__gradio__svelte__internal;
function Du(l) {
  let e, t;
  return e = new ls({}), {
    c() {
      is(e.$$.fragment);
    },
    m(n, i) {
      ss(e, n, i), t = !0;
    },
    i(n) {
      t || (Pn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      os(e, n);
    }
  };
}
function Tu(l) {
  let e, t;
  return e = new ns({}), {
    c() {
      is(e.$$.fragment);
    },
    m(n, i) {
      ss(e, n, i), t = !0;
    },
    i(n) {
      t || (Pn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      os(e, n);
    }
  };
}
function Bi(l) {
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
      e = Gl("span"), t = ln("- "), i = ln(n), o = ln(" -"), a = Ql(), s = ln(r), Kl(e, "class", "or svelte-kzcjhc");
    },
    m(f, u) {
      Yn(f, e, u), bt(e, t), bt(e, i), bt(e, o), Yn(f, a, u), Yn(f, s, u);
    },
    p(f, u) {
      u & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && Jl(i, n), u & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && Jl(s, r);
    },
    d(f) {
      f && (Xn(e), Xn(a), Xn(s));
    }
  };
}
function Bu(l) {
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
  const u = [Tu, Du], c = [];
  function d(h, m) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(l), i = c[n] = u[n](l);
  let _ = (
    /*mode*/
    l[3] !== "short" && Bi(l)
  );
  return {
    c() {
      e = Gl("div"), t = Gl("span"), i.c(), o = Ql(), r = ln(a), s = Ql(), _ && _.c(), Kl(t, "class", "icon-wrap svelte-kzcjhc"), Ti(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), Kl(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, m) {
      Yn(h, e, m), bt(e, t), c[n].m(t, null), bt(e, o), bt(e, r), bt(e, s), _ && _.m(e, null), f = !0;
    },
    p(h, [m]) {
      let b = n;
      n = d(h), n !== b && (Eu(), Zn(c[b], 1, 1, () => {
        c[b] = null;
      }), Mu(), i = c[n], i || (i = c[n] = u[n](h), i.c()), Pn(i, 1), i.m(t, null)), (!f || m & /*hovered*/
      16) && Ti(
        t,
        "hovered",
        /*hovered*/
        h[4]
      ), (!f || m & /*i18n, type*/
      3) && a !== (a = /*i18n*/
      h[1](
        /*defs*/
        h[5][
          /*type*/
          h[0]
        ] || /*defs*/
        h[5].file
      ) + "") && Jl(r, a), /*mode*/
      h[3] !== "short" ? _ ? _.p(h, m) : (_ = Bi(h), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null);
    },
    i(h) {
      f || (Pn(i), f = !0);
    },
    o(h) {
      Zn(i), f = !1;
    },
    d(h) {
      h && Xn(e), c[n].d(), _ && _.d();
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
class as extends qu {
  constructor(e) {
    super(), Au(this, e, ju, Bu, Lu, {
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
  append: Ll,
  attr: Xe,
  check_outros: on,
  create_component: ol,
  destroy_component: sl,
  detach: Zt,
  element: pn,
  empty: Ru,
  group_outros: sn,
  init: Fu,
  insert: Kt,
  listen: al,
  mount_component: rl,
  safe_not_equal: Hu,
  space: Dl,
  toggle_class: ot,
  transition_in: te,
  transition_out: me
} = window.__gradio__svelte__internal;
function ji(l) {
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
  ), f, u = t && Ii(l), c = i && Ri(l), d = a && Fi(l), _ = s && Hi(l);
  return {
    c() {
      e = pn("span"), u && u.c(), n = Dl(), c && c.c(), o = Dl(), d && d.c(), r = Dl(), _ && _.c(), Xe(e, "class", "source-selection svelte-1jp3vgd"), Xe(e, "data-testid", "source-select");
    },
    m(h, m) {
      Kt(h, e, m), u && u.m(e, null), Ll(e, n), c && c.m(e, null), Ll(e, o), d && d.m(e, null), Ll(e, r), _ && _.m(e, null), f = !0;
    },
    p(h, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? u ? (u.p(h, m), m & /*sources*/
      2 && te(u, 1)) : (u = Ii(h), u.c(), te(u, 1), u.m(e, n)) : u && (sn(), me(u, 1, 1, () => {
        u = null;
      }), on()), m & /*sources*/
      2 && (i = /*sources*/
      h[1].includes("microphone")), i ? c ? (c.p(h, m), m & /*sources*/
      2 && te(c, 1)) : (c = Ri(h), c.c(), te(c, 1), c.m(e, o)) : c && (sn(), me(c, 1, 1, () => {
        c = null;
      }), on()), m & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("webcam")), a ? d ? (d.p(h, m), m & /*sources*/
      2 && te(d, 1)) : (d = Fi(h), d.c(), te(d, 1), d.m(e, r)) : d && (sn(), me(d, 1, 1, () => {
        d = null;
      }), on()), m & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("clipboard")), s ? _ ? (_.p(h, m), m & /*sources*/
      2 && te(_, 1)) : (_ = Hi(h), _.c(), te(_, 1), _.m(e, null)) : _ && (sn(), me(_, 1, 1, () => {
        _ = null;
      }), on());
    },
    i(h) {
      f || (te(u), te(c), te(d), te(_), f = !0);
    },
    o(h) {
      me(u), me(c), me(d), me(_), f = !1;
    },
    d(h) {
      h && Zt(e), u && u.d(), c && c.d(), d && d.d(), _ && _.d();
    }
  };
}
function Ii(l) {
  let e, t, n, i, o;
  return t = new ls({}), {
    c() {
      e = pn("button"), ol(t.$$.fragment), Xe(e, "class", "icon svelte-1jp3vgd"), Xe(e, "aria-label", "Upload file"), ot(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(a, r) {
      Kt(a, e, r), rl(t, e, null), n = !0, i || (o = al(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && ot(
        e,
        "selected",
        /*active_source*/
        a[0] === "upload" || !/*active_source*/
        a[0]
      );
    },
    i(a) {
      n || (te(t.$$.fragment, a), n = !0);
    },
    o(a) {
      me(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Zt(e), sl(t), i = !1, o();
    }
  };
}
function Ri(l) {
  let e, t, n, i, o;
  return t = new Qf({}), {
    c() {
      e = pn("button"), ol(t.$$.fragment), Xe(e, "class", "icon svelte-1jp3vgd"), Xe(e, "aria-label", "Record audio"), ot(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(a, r) {
      Kt(a, e, r), rl(t, e, null), n = !0, i || (o = al(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && ot(
        e,
        "selected",
        /*active_source*/
        a[0] === "microphone"
      );
    },
    i(a) {
      n || (te(t.$$.fragment, a), n = !0);
    },
    o(a) {
      me(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Zt(e), sl(t), i = !1, o();
    }
  };
}
function Fi(l) {
  let e, t, n, i, o;
  return t = new uu({}), {
    c() {
      e = pn("button"), ol(t.$$.fragment), Xe(e, "class", "icon svelte-1jp3vgd"), Xe(e, "aria-label", "Capture from camera"), ot(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(a, r) {
      Kt(a, e, r), rl(t, e, null), n = !0, i || (o = al(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && ot(
        e,
        "selected",
        /*active_source*/
        a[0] === "webcam"
      );
    },
    i(a) {
      n || (te(t.$$.fragment, a), n = !0);
    },
    o(a) {
      me(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Zt(e), sl(t), i = !1, o();
    }
  };
}
function Hi(l) {
  let e, t, n, i, o;
  return t = new ns({}), {
    c() {
      e = pn("button"), ol(t.$$.fragment), Xe(e, "class", "icon svelte-1jp3vgd"), Xe(e, "aria-label", "Paste from clipboard"), ot(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(a, r) {
      Kt(a, e, r), rl(t, e, null), n = !0, i || (o = al(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(a, r) {
      (!n || r & /*active_source*/
      1) && ot(
        e,
        "selected",
        /*active_source*/
        a[0] === "clipboard"
      );
    },
    i(a) {
      n || (te(t.$$.fragment, a), n = !0);
    },
    o(a) {
      me(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && Zt(e), sl(t), i = !1, o();
    }
  };
}
function Uu(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && ji(l)
  );
  return {
    c() {
      n && n.c(), e = Ru();
    },
    m(i, o) {
      n && n.m(i, o), Kt(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && te(n, 1)) : (n = ji(i), n.c(), te(n, 1), n.m(e.parentNode, e)) : n && (sn(), me(n, 1, 1, () => {
        n = null;
      }), on());
    },
    i(i) {
      t || (te(n), t = !0);
    },
    o(i) {
      me(n), t = !1;
    },
    d(i) {
      i && Zt(e), n && n.d(i);
    }
  };
}
function Nu(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(h, m, b, g) {
    function w(p) {
      return p instanceof b ? p : new b(function(C) {
        C(p);
      });
    }
    return new (b || (b = Promise))(function(p, C) {
      function E(k) {
        try {
          z(g.next(k));
        } catch (q) {
          C(q);
        }
      }
      function v(k) {
        try {
          z(g.throw(k));
        } catch (q) {
          C(q);
        }
      }
      function z(k) {
        k.done ? p(k.value) : w(k.value).then(E, v);
      }
      z((g = g.apply(h, m || [])).next());
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
  const u = () => f("upload"), c = () => f("microphone"), d = () => f("webcam"), _ = () => f("clipboard");
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
    d,
    _
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
function Xt(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Wn() {
}
function Xu(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function Ui(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const rs = typeof window < "u";
let Ni = rs ? () => window.performance.now() : () => Date.now(), fs = rs ? (l) => requestAnimationFrame(l) : Wn;
const Pt = /* @__PURE__ */ new Set();
function us(l) {
  Pt.forEach((e) => {
    e.c(l) || (Pt.delete(e), e.f());
  }), Pt.size !== 0 && fs(us);
}
function Yu(l) {
  let e;
  return Pt.size === 0 && fs(us), {
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
function Oi(l, { delay: e = 0, duration: t = 400, easing: n = Wu, x: i = 0, y: o = 0, opacity: a = 0 } = {}) {
  const r = getComputedStyle(l), s = +r.opacity, f = r.transform === "none" ? "" : r.transform, u = s * (1 - a), [c, d] = Ui(i), [_, h] = Ui(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (m, b) => `
			transform: ${f} translate(${(1 - m) * c}${d}, ${(1 - m) * _}${h});
			opacity: ${s - u * b}`
  };
}
const Dt = [];
function Vu(l, e = Wn) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Xu(l, r) && (l = r, t)) {
      const s = !Dt.length;
      for (const f of n)
        f[1](), Dt.push(f, l);
      if (s) {
        for (let f = 0; f < Dt.length; f += 2)
          Dt[f][0](Dt[f + 1]);
        Dt.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function a(r, s = Wn) {
    const f = [r, s];
    return n.add(f), n.size === 1 && (t = e(i, o) || Wn), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: a };
}
function Xi(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function xl(l, e, t, n) {
  if (typeof t == "number" || Xi(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), a = l.opts.stiffness * i, r = l.opts.damping * o, s = (a - r) * l.inv_mass, f = (o + s) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, Xi(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => xl(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = xl(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Yi(l, e = {}) {
  const t = Vu(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let a, r, s, f = l, u = l, c = 1, d = 0, _ = !1;
  function h(b, g = {}) {
    u = b;
    const w = s = {};
    return l == null || g.hard || m.stiffness >= 1 && m.damping >= 1 ? (_ = !0, a = Ni(), f = b, t.set(l = u), Promise.resolve()) : (g.soft && (d = 1 / ((g.soft === !0 ? 0.5 : +g.soft) * 60), c = 0), r || (a = Ni(), _ = !1, r = Yu((p) => {
      if (_)
        return _ = !1, r = null, !1;
      c = Math.min(c + d, 1);
      const C = {
        inv_mass: c,
        opts: m,
        settled: !0,
        dt: (p - a) * 60 / 1e3
      }, E = xl(C, f, l, u);
      return a = p, f = l, t.set(l = E), C.settled && (r = null), !C.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        w === s && p();
      });
    }));
  }
  const m = {
    set: h,
    update: (b, g) => h(b(u, l), g),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return m;
}
const {
  SvelteComponent: Pu,
  append: De,
  attr: U,
  component_subscribe: Wi,
  detach: Zu,
  element: Ku,
  init: Gu,
  insert: Ju,
  noop: Vi,
  safe_not_equal: Qu,
  set_style: En,
  svg_element: Te,
  toggle_class: Pi
} = window.__gradio__svelte__internal, { onMount: xu } = window.__gradio__svelte__internal;
function $u(l) {
  let e, t, n, i, o, a, r, s, f, u, c, d;
  return {
    c() {
      e = Ku("div"), t = Te("svg"), n = Te("g"), i = Te("path"), o = Te("path"), a = Te("path"), r = Te("path"), s = Te("g"), f = Te("path"), u = Te("path"), c = Te("path"), d = Te("path"), U(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), U(i, "fill", "#FF7C00"), U(i, "fill-opacity", "0.4"), U(i, "class", "svelte-43sxxs"), U(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), U(o, "fill", "#FF7C00"), U(o, "class", "svelte-43sxxs"), U(a, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), U(a, "fill", "#FF7C00"), U(a, "fill-opacity", "0.4"), U(a, "class", "svelte-43sxxs"), U(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), U(r, "fill", "#FF7C00"), U(r, "class", "svelte-43sxxs"), En(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), U(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), U(f, "fill", "#FF7C00"), U(f, "fill-opacity", "0.4"), U(f, "class", "svelte-43sxxs"), U(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), U(u, "fill", "#FF7C00"), U(u, "class", "svelte-43sxxs"), U(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), U(c, "fill", "#FF7C00"), U(c, "fill-opacity", "0.4"), U(c, "class", "svelte-43sxxs"), U(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), U(d, "fill", "#FF7C00"), U(d, "class", "svelte-43sxxs"), En(s, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), U(t, "viewBox", "-1200 -1200 3000 3000"), U(t, "fill", "none"), U(t, "xmlns", "http://www.w3.org/2000/svg"), U(t, "class", "svelte-43sxxs"), U(e, "class", "svelte-43sxxs"), Pi(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(_, h) {
      Ju(_, e, h), De(e, t), De(t, n), De(n, i), De(n, o), De(n, a), De(n, r), De(t, s), De(s, f), De(s, u), De(s, c), De(s, d);
    },
    p(_, [h]) {
      h & /*$top*/
      2 && En(n, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), h & /*$bottom*/
      4 && En(s, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), h & /*margin*/
      1 && Pi(
        e,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: Vi,
    o: Vi,
    d(_) {
      _ && Zu(e);
    }
  };
}
function ec(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(_, h, m, b) {
    function g(w) {
      return w instanceof m ? w : new m(function(p) {
        p(w);
      });
    }
    return new (m || (m = Promise))(function(w, p) {
      function C(z) {
        try {
          v(b.next(z));
        } catch (k) {
          p(k);
        }
      }
      function E(z) {
        try {
          v(b.throw(z));
        } catch (k) {
          p(k);
        }
      }
      function v(z) {
        z.done ? w(z.value) : g(z.value).then(C, E);
      }
      v((b = b.apply(_, h || [])).next());
    });
  };
  let { margin: a = !0 } = e;
  const r = Yi([0, 0]);
  Wi(l, r, (_) => t(1, n = _));
  const s = Yi([0, 0]);
  Wi(l, s, (_) => t(2, i = _));
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
  function d() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), s.set([-125, 0])]), c();
    });
  }
  return xu(() => (d(), () => f = !0)), l.$$set = (_) => {
    "margin" in _ && t(0, a = _.margin);
  }, [a, n, i, r, s];
}
class tc extends Pu {
  constructor(e) {
    super(), Gu(this, e, ec, $u, Qu, { margin: 0 });
  }
}
const {
  SvelteComponent: nc,
  append: gt,
  attr: Ie,
  binding_callbacks: Zi,
  check_outros: $l,
  create_component: cs,
  create_slot: _s,
  destroy_component: ds,
  destroy_each: hs,
  detach: I,
  element: Ne,
  empty: Gt,
  ensure_array_like: Kn,
  get_all_dirty_from_scope: ms,
  get_slot_changes: bs,
  group_outros: ei,
  init: lc,
  insert: R,
  mount_component: gs,
  noop: ti,
  safe_not_equal: ic,
  set_data: Me,
  set_style: lt,
  space: qe,
  text: Z,
  toggle_class: ze,
  transition_in: je,
  transition_out: Oe,
  update_slot_base: ws
} = window.__gradio__svelte__internal, { tick: oc } = window.__gradio__svelte__internal, { onDestroy: sc } = window.__gradio__svelte__internal, { createEventDispatcher: ac } = window.__gradio__svelte__internal, rc = (l) => ({}), Ki = (l) => ({}), fc = (l) => ({}), Gi = (l) => ({});
function Ji(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Qi(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function uc(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), a, r, s;
  t = new il({
    props: {
      Icon: ui,
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
  ), u = _s(
    f,
    l,
    /*$$scope*/
    l[29],
    Ki
  );
  return {
    c() {
      e = Ne("div"), cs(t.$$.fragment), n = qe(), i = Ne("span"), a = Z(o), r = qe(), u && u.c(), Ie(e, "class", "clear-status svelte-16nch4a"), Ie(i, "class", "error svelte-16nch4a");
    },
    m(c, d) {
      R(c, e, d), gs(t, e, null), R(c, n, d), R(c, i, d), gt(i, a), R(c, r, d), u && u.m(c, d), s = !0;
    },
    p(c, d) {
      const _ = {};
      d[0] & /*i18n*/
      2 && (_.label = /*i18n*/
      c[1]("common.clear")), t.$set(_), (!s || d[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      c[1]("common.error") + "") && Me(a, o), u && u.p && (!s || d[0] & /*$$scope*/
      536870912) && ws(
        u,
        f,
        c,
        /*$$scope*/
        c[29],
        s ? bs(
          f,
          /*$$scope*/
          c[29],
          d,
          rc
        ) : ms(
          /*$$scope*/
          c[29]
        ),
        Ki
      );
    },
    i(c) {
      s || (je(t.$$.fragment, c), je(u, c), s = !0);
    },
    o(c) {
      Oe(t.$$.fragment, c), Oe(u, c), s = !1;
    },
    d(c) {
      c && (I(e), I(n), I(i), I(r)), ds(t), u && u.d(c);
    }
  };
}
function cc(l) {
  let e, t, n, i, o, a, r, s, f, u = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && xi(l)
  );
  function c(p, C) {
    if (
      /*progress*/
      p[7]
    ) return hc;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return dc;
    if (
      /*queue_position*/
      p[2] === 0
    ) return _c;
  }
  let d = c(l), _ = d && d(l), h = (
    /*timer*/
    l[5] && to(l)
  );
  const m = [wc, gc], b = [];
  function g(p, C) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = g(l)) && (a = b[o] = m[o](l));
  let w = !/*timer*/
  l[5] && ro(l);
  return {
    c() {
      u && u.c(), e = qe(), t = Ne("div"), _ && _.c(), n = qe(), h && h.c(), i = qe(), a && a.c(), r = qe(), w && w.c(), s = Gt(), Ie(t, "class", "progress-text svelte-16nch4a"), ze(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), ze(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(p, C) {
      u && u.m(p, C), R(p, e, C), R(p, t, C), _ && _.m(t, null), gt(t, n), h && h.m(t, null), R(p, i, C), ~o && b[o].m(p, C), R(p, r, C), w && w.m(p, C), R(p, s, C), f = !0;
    },
    p(p, C) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? u ? u.p(p, C) : (u = xi(p), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), d === (d = c(p)) && _ ? _.p(p, C) : (_ && _.d(1), _ = d && d(p), _ && (_.c(), _.m(t, n))), /*timer*/
      p[5] ? h ? h.p(p, C) : (h = to(p), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!f || C[0] & /*variant*/
      256) && ze(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!f || C[0] & /*variant*/
      256) && ze(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let E = o;
      o = g(p), o === E ? ~o && b[o].p(p, C) : (a && (ei(), Oe(b[E], 1, 1, () => {
        b[E] = null;
      }), $l()), ~o ? (a = b[o], a ? a.p(p, C) : (a = b[o] = m[o](p), a.c()), je(a, 1), a.m(r.parentNode, r)) : a = null), /*timer*/
      p[5] ? w && (ei(), Oe(w, 1, 1, () => {
        w = null;
      }), $l()) : w ? (w.p(p, C), C[0] & /*timer*/
      32 && je(w, 1)) : (w = ro(p), w.c(), je(w, 1), w.m(s.parentNode, s));
    },
    i(p) {
      f || (je(a), je(w), f = !0);
    },
    o(p) {
      Oe(a), Oe(w), f = !1;
    },
    d(p) {
      p && (I(e), I(t), I(i), I(r), I(s)), u && u.d(p), _ && _.d(), h && h.d(), ~o && b[o].d(p), w && w.d(p);
    }
  };
}
function xi(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Ne("div"), Ie(e, "class", "eta-bar svelte-16nch4a"), lt(e, "transform", t);
    },
    m(n, i) {
      R(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && lt(e, "transform", t);
    },
    d(n) {
      n && I(e);
    }
  };
}
function _c(l) {
  let e;
  return {
    c() {
      e = Z("processing |");
    },
    m(t, n) {
      R(t, e, n);
    },
    p: ti,
    d(t) {
      t && I(e);
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
      e = Z("queue: "), n = Z(t), i = Z("/"), o = Z(
        /*queue_size*/
        l[3]
      ), a = Z(" |");
    },
    m(r, s) {
      R(r, e, s), R(r, n, s), R(r, i, s), R(r, o, s), R(r, a, s);
    },
    p(r, s) {
      s[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Me(n, t), s[0] & /*queue_size*/
      8 && Me(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (I(e), I(n), I(i), I(o), I(a));
    }
  };
}
function hc(l) {
  let e, t = Kn(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = eo(Qi(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Gt();
    },
    m(i, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(i, o);
      R(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = Kn(
          /*progress*/
          i[7]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const r = Qi(i, t, a);
          n[a] ? n[a].p(r, o) : (n[a] = eo(r), n[a].c(), n[a].m(e.parentNode, e));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && I(e), hs(n, i);
    }
  };
}
function $i(l) {
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
      f.c(), e = qe(), n = Z(t), i = Z(" | "), a = Z(o);
    },
    m(u, c) {
      f.m(u, c), R(u, e, c), R(u, n, c), R(u, i, c), R(u, a, c);
    },
    p(u, c) {
      s === (s = r(u)) && f ? f.p(u, c) : (f.d(1), f = s(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && Me(n, t);
    },
    d(u) {
      u && (I(e), I(n), I(i), I(a)), f.d(u);
    }
  };
}
function mc(l) {
  let e = Xt(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Z(e);
    },
    m(n, i) {
      R(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Xt(
        /*p*/
        n[41].index || 0
      ) + "") && Me(t, e);
    },
    d(n) {
      n && I(t);
    }
  };
}
function bc(l) {
  let e = Xt(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Xt(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = Z(e), n = Z("/"), o = Z(i);
    },
    m(a, r) {
      R(a, t, r), R(a, n, r), R(a, o, r);
    },
    p(a, r) {
      r[0] & /*progress*/
      128 && e !== (e = Xt(
        /*p*/
        a[41].index || 0
      ) + "") && Me(t, e), r[0] & /*progress*/
      128 && i !== (i = Xt(
        /*p*/
        a[41].length
      ) + "") && Me(o, i);
    },
    d(a) {
      a && (I(t), I(n), I(o));
    }
  };
}
function eo(l) {
  let e, t = (
    /*p*/
    l[41].index != null && $i(l)
  );
  return {
    c() {
      t && t.c(), e = Gt();
    },
    m(n, i) {
      t && t.m(n, i), R(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = $i(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && I(e), t && t.d(n);
    }
  };
}
function to(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = Z(
        /*formatted_timer*/
        l[20]
      ), n = Z(t), i = Z("s");
    },
    m(o, a) {
      R(o, e, a), R(o, n, a), R(o, i, a);
    },
    p(o, a) {
      a[0] & /*formatted_timer*/
      1048576 && Me(
        e,
        /*formatted_timer*/
        o[20]
      ), a[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Me(n, t);
    },
    d(o) {
      o && (I(e), I(n), I(i));
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
      cs(e.$$.fragment);
    },
    m(n, i) {
      gs(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (je(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ds(e, n);
    }
  };
}
function wc(l) {
  let e, t, n, i, o, a = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && no(l)
  );
  return {
    c() {
      e = Ne("div"), t = Ne("div"), r && r.c(), n = qe(), i = Ne("div"), o = Ne("div"), Ie(t, "class", "progress-level-inner svelte-16nch4a"), Ie(o, "class", "progress-bar svelte-16nch4a"), lt(o, "width", a), Ie(i, "class", "progress-bar-wrap svelte-16nch4a"), Ie(e, "class", "progress-level svelte-16nch4a");
    },
    m(s, f) {
      R(s, e, f), gt(e, t), r && r.m(t, null), gt(e, n), gt(e, i), gt(i, o), l[31](o);
    },
    p(s, f) {
      /*progress*/
      s[7] != null ? r ? r.p(s, f) : (r = no(s), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && a !== (a = `${/*last_progress_level*/
      s[15] * 100}%`) && lt(o, "width", a);
    },
    i: ti,
    o: ti,
    d(s) {
      s && I(e), r && r.d(), l[31](null);
    }
  };
}
function no(l) {
  let e, t = Kn(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = ao(Ji(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Gt();
    },
    m(i, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(i, o);
      R(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Kn(
          /*progress*/
          i[7]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const r = Ji(i, t, a);
          n[a] ? n[a].p(r, o) : (n[a] = ao(r), n[a].c(), n[a].m(e.parentNode, e));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && I(e), hs(n, i);
    }
  };
}
function lo(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && pc()
  ), a = (
    /*p*/
    l[41].desc != null && io(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && oo()
  ), s = (
    /*progress_level*/
    l[14] != null && so(l)
  );
  return {
    c() {
      o && o.c(), e = qe(), a && a.c(), t = qe(), r && r.c(), n = qe(), s && s.c(), i = Gt();
    },
    m(f, u) {
      o && o.m(f, u), R(f, e, u), a && a.m(f, u), R(f, t, u), r && r.m(f, u), R(f, n, u), s && s.m(f, u), R(f, i, u);
    },
    p(f, u) {
      /*p*/
      f[41].desc != null ? a ? a.p(f, u) : (a = io(f), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = oo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? s ? s.p(f, u) : (s = so(f), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(f) {
      f && (I(e), I(t), I(n), I(i)), o && o.d(f), a && a.d(f), r && r.d(f), s && s.d(f);
    }
  };
}
function pc(l) {
  let e;
  return {
    c() {
      e = Z(" /");
    },
    m(t, n) {
      R(t, e, n);
    },
    d(t) {
      t && I(e);
    }
  };
}
function io(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = Z(e);
    },
    m(n, i) {
      R(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Me(t, e);
    },
    d(n) {
      n && I(t);
    }
  };
}
function oo(l) {
  let e;
  return {
    c() {
      e = Z("-");
    },
    m(t, n) {
      R(t, e, n);
    },
    d(t) {
      t && I(e);
    }
  };
}
function so(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = Z(e), n = Z("%");
    },
    m(i, o) {
      R(i, t, o), R(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Me(t, e);
    },
    d(i) {
      i && (I(t), I(n));
    }
  };
}
function ao(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && lo(l)
  );
  return {
    c() {
      t && t.c(), e = Gt();
    },
    m(n, i) {
      t && t.m(n, i), R(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = lo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && I(e), t && t.d(n);
    }
  };
}
function ro(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), a = _s(
    o,
    l,
    /*$$scope*/
    l[29],
    Gi
  );
  return {
    c() {
      e = Ne("p"), t = Z(
        /*loading_text*/
        l[9]
      ), n = qe(), a && a.c(), Ie(e, "class", "loading svelte-16nch4a");
    },
    m(r, s) {
      R(r, e, s), gt(e, t), R(r, n, s), a && a.m(r, s), i = !0;
    },
    p(r, s) {
      (!i || s[0] & /*loading_text*/
      512) && Me(
        t,
        /*loading_text*/
        r[9]
      ), a && a.p && (!i || s[0] & /*$$scope*/
      536870912) && ws(
        a,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? bs(
          o,
          /*$$scope*/
          r[29],
          s,
          fc
        ) : ms(
          /*$$scope*/
          r[29]
        ),
        Gi
      );
    },
    i(r) {
      i || (je(a, r), i = !0);
    },
    o(r) {
      Oe(a, r), i = !1;
    },
    d(r) {
      r && (I(e), I(n)), a && a.d(r);
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
      e = Ne("div"), n && n.c(), Ie(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), ze(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), ze(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), ze(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), ze(
        e,
        "border",
        /*border*/
        l[12]
      ), lt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), lt(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, u) {
      R(f, e, u), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, u) {
      let c = t;
      t = s(f), t === c ? ~t && r[t].p(f, u) : (n && (ei(), Oe(r[c], 1, 1, () => {
        r[c] = null;
      }), $l()), ~t ? (n = r[t], n ? n.p(f, u) : (n = r[t] = a[t](f), n.c()), je(n, 1), n.m(e, null)) : n = null), (!o || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && Ie(e, "class", i), (!o || u[0] & /*variant, show_progress, status, show_progress*/
      336) && ze(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ze(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || u[0] & /*variant, show_progress, status*/
      336) && ze(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || u[0] & /*variant, show_progress, border*/
      4416) && ze(
        e,
        "border",
        /*border*/
        f[12]
      ), u[0] & /*absolute*/
      1024 && lt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && lt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (je(n), o = !0);
    },
    o(f) {
      Oe(n), o = !1;
    },
    d(f) {
      f && I(e), ~t && r[t].d(), l[33](null);
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
let An = [], Tl = !1;
function yc(l) {
  return vc(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (An.push(e), !Tl) Tl = !0;
      else return;
      yield oc(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < An.length; i++) {
          const a = An[i].getBoundingClientRect();
          (i === 0 || a.top + window.scrollY <= n[0]) && (n[0] = a.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Tl = !1, An = [];
      });
    }
  });
}
function Cc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const a = ac();
  let { i18n: r } = e, { eta: s = null } = e, { queue_position: f } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: d = !1 } = e, { timer: _ = !0 } = e, { show_progress: h = "full" } = e, { message: m = null } = e, { progress: b = null } = e, { variant: g = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: C = !1 } = e, { border: E = !1 } = e, { autoscroll: v } = e, z, k = !1, q = 0, F = 0, j = null, D = null, N = 0, K = null, $, X = null, se = !0;
  const we = () => {
    t(0, s = t(27, j = t(19, ae = null))), t(25, q = performance.now()), t(26, F = 0), k = !0, re();
  };
  function re() {
    requestAnimationFrame(() => {
      t(26, F = (performance.now() - q) / 1e3), k && re();
    });
  }
  function T() {
    t(26, F = 0), t(0, s = t(27, j = t(19, ae = null))), k && (k = !1);
  }
  sc(() => {
    k && T();
  });
  let ae = null;
  function fe(L) {
    Zi[L ? "unshift" : "push"](() => {
      X = L, t(16, X), t(7, b), t(14, K), t(15, $);
    });
  }
  const Ye = () => {
    a("clear_status");
  };
  function We(L) {
    Zi[L ? "unshift" : "push"](() => {
      z = L, t(13, z);
    });
  }
  return l.$$set = (L) => {
    "i18n" in L && t(1, r = L.i18n), "eta" in L && t(0, s = L.eta), "queue_position" in L && t(2, f = L.queue_position), "queue_size" in L && t(3, u = L.queue_size), "status" in L && t(4, c = L.status), "scroll_to_output" in L && t(22, d = L.scroll_to_output), "timer" in L && t(5, _ = L.timer), "show_progress" in L && t(6, h = L.show_progress), "message" in L && t(23, m = L.message), "progress" in L && t(7, b = L.progress), "variant" in L && t(8, g = L.variant), "loading_text" in L && t(9, w = L.loading_text), "absolute" in L && t(10, p = L.absolute), "translucent" in L && t(11, C = L.translucent), "border" in L && t(12, E = L.border), "autoscroll" in L && t(24, v = L.autoscroll), "$$scope" in L && t(29, o = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (s === null && t(0, s = j), s != null && j !== s && (t(28, D = (performance.now() - q) / 1e3 + s), t(19, ae = D.toFixed(1)), t(27, j = s))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, N = D === null || D <= 0 || !F ? null : Math.min(F / D, 1)), l.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, se = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, K = b.map((L) => {
      if (L.index != null && L.length != null)
        return L.index / L.length;
      if (L.progress != null)
        return L.progress;
    })) : t(14, K = null), K ? (t(15, $ = K[K.length - 1]), X && ($ === 0 ? t(16, X.style.transition = "0", X) : t(16, X.style.transition = "150ms", X))) : t(15, $ = void 0)), l.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? we() : T()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && d && (c === "pending" || c === "complete") && yc(z, v), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = F.toFixed(1));
  }, [
    s,
    r,
    f,
    u,
    c,
    _,
    h,
    b,
    g,
    w,
    p,
    C,
    E,
    z,
    K,
    $,
    X,
    N,
    se,
    ae,
    n,
    a,
    d,
    m,
    v,
    q,
    F,
    j,
    D,
    o,
    i,
    fe,
    Ye,
    We
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
function ps() {
  return zc(qc);
}
function Mc(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function ks(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function vs(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!Mc(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Ec(l) {
  if (l == null || !vs(l))
    return l;
  const e = ps();
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
      type: ks(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Ac,
  assign: Gn,
  check_outros: ys,
  compute_rest_props: fo,
  create_slot: ci,
  detach: fl,
  element: Cs,
  empty: Ss,
  exclude_internal_props: Lc,
  get_all_dirty_from_scope: _i,
  get_slot_changes: di,
  get_spread_update: zs,
  group_outros: qs,
  init: Dc,
  insert: ul,
  listen: Ms,
  prevent_default: Tc,
  safe_not_equal: Bc,
  set_attributes: Jn,
  transition_in: vt,
  transition_out: yt,
  update_slot_base: hi
} = window.__gradio__svelte__internal, { createEventDispatcher: jc } = window.__gradio__svelte__internal;
function Ic(l) {
  let e, t, n, i, o;
  const a = (
    /*#slots*/
    l[8].default
  ), r = ci(
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
    f = Gn(f, s[u]);
  return {
    c() {
      e = Cs("a"), r && r.c(), Jn(e, f);
    },
    m(u, c) {
      ul(u, e, c), r && r.m(e, null), n = !0, i || (o = Ms(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(u, c) {
      r && r.p && (!n || c & /*$$scope*/
      128) && hi(
        r,
        a,
        u,
        /*$$scope*/
        u[7],
        n ? di(
          a,
          /*$$scope*/
          u[7],
          c,
          null
        ) : _i(
          /*$$scope*/
          u[7]
        ),
        null
      ), Jn(e, f = zs(s, [
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
      n || (vt(r, u), n = !0);
    },
    o(u) {
      yt(r, u), n = !1;
    },
    d(u) {
      u && fl(e), r && r.d(u), i = !1, o();
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
      t.c(), n = Ss();
    },
    m(s, f) {
      a[e].m(s, f), ul(s, n, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (qs(), yt(a[u], 1, 1, () => {
        a[u] = null;
      }), ys(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), vt(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (vt(t), i = !0);
    },
    o(s) {
      yt(t), i = !1;
    },
    d(s) {
      s && fl(n), a[e].d(s);
    }
  };
}
function Fc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), a = ci(
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
    s = Gn(s, r[f]);
  return {
    c() {
      e = Cs("a"), a && a.c(), Jn(e, s);
    },
    m(f, u) {
      ul(f, e, u), a && a.m(e, null), t = !0, n || (i = Ms(e, "click", Tc(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, u) {
      a && a.p && (!t || u & /*$$scope*/
      128) && hi(
        a,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? di(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : _i(
          /*$$scope*/
          f[7]
        ),
        null
      ), Jn(e, s = zs(r, [
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
      t || (vt(a, f), t = !0);
    },
    o(f) {
      yt(a, f), t = !1;
    },
    d(f) {
      f && fl(e), a && a.d(f), n = !1, i();
    }
  };
}
function Hc(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = ci(
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
      128) && hi(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? di(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : _i(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (vt(n, i), e = !0);
    },
    o(i) {
      yt(n, i), e = !1;
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
    (f[4] && vs(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = s(l, -1), n = r[t] = a[t](l), {
    c() {
      n.c(), i = Ss();
    },
    m(f, u) {
      r[t].m(f, u), ul(f, i, u), o = !0;
    },
    p(f, [u]) {
      let c = t;
      t = s(f, u), t === c ? r[t].p(f, u) : (qs(), yt(r[c], 1, 1, () => {
        r[c] = null;
      }), ys(), n = r[t], n ? n.p(f, u) : (n = r[t] = a[t](f), n.c()), vt(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (vt(n), o = !0);
    },
    o(f) {
      yt(n), o = !1;
    },
    d(f) {
      f && fl(i), r[t].d(f);
    }
  };
}
function Nc(l, e, t) {
  const n = ["href", "download"];
  let i = fo(e, n), { $$slots: o = {}, $$scope: a } = e;
  var r = this && this.__awaiter || function(h, m, b, g) {
    function w(p) {
      return p instanceof b ? p : new b(function(C) {
        C(p);
      });
    }
    return new (b || (b = Promise))(function(p, C) {
      function E(k) {
        try {
          z(g.next(k));
        } catch (q) {
          C(q);
        }
      }
      function v(k) {
        try {
          z(g.throw(k));
        } catch (q) {
          C(q);
        }
      }
      function z(k) {
        k.done ? p(k.value) : w(k.value).then(E, v);
      }
      z((g = g.apply(h, m || [])).next());
    });
  };
  let { href: s = void 0 } = e, { download: f } = e;
  const u = jc();
  let c = !1;
  const d = ps();
  function _() {
    return r(this, void 0, void 0, function* () {
      if (c)
        return;
      if (u("click"), s == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const m = new URL(s, window.location.href).pathname;
      t(2, c = !0), d.httpRequest({
        method: "GET",
        path: m,
        headers: {},
        query_string: ""
      }).then((b) => {
        if (b.status !== 200)
          throw new Error(`Failed to get file ${m} from the Wasm worker.`);
        const g = new Blob(
          [b.body],
          {
            type: ks(b.headers, "content-type")
          }
        ), w = URL.createObjectURL(g), p = document.createElement("a");
        p.href = w, p.download = f, p.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, c = !1);
      });
    });
  }
  return l.$$set = (h) => {
    e = Gn(Gn({}, e), Lc(h)), t(6, i = fo(e, n)), "href" in h && t(0, s = h.href), "download" in h && t(1, f = h.download), "$$scope" in h && t(7, a = h.$$scope);
  }, [
    s,
    f,
    c,
    u,
    d,
    _,
    i,
    a,
    o
  ];
}
class Oc extends Ac {
  constructor(e) {
    super(), Dc(this, e, Nc, Uc, Bc, { href: 0, download: 1 });
  }
}
var Xc = Object.defineProperty, Yc = (l, e, t) => e in l ? Xc(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, Ve = (l, e, t) => (Yc(l, typeof e != "symbol" ? e + "" : e, t), t), Es = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, $t = (l, e, t) => (Es(l, e, "read from private field"), t ? t.call(l) : e.get(l)), Wc = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, Vc = (l, e, t, n) => (Es(l, e, "write to private field"), e.set(l, t), t), tt;
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
    Ve(this, "path"), Ve(this, "url"), Ve(this, "orig_name"), Ve(this, "size"), Ve(this, "blob"), Ve(this, "is_stream"), Ve(this, "mime_type"), Ve(this, "alt_text"), Ve(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = a, this.mime_type = r, this.alt_text = s;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class w1 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = $t(this, tt) + t; ; ) {
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
        Vc(this, tt, t);
      },
      flush: (t) => {
        if ($t(this, tt) === "")
          return;
        const n = e.allowCR && $t(this, tt).endsWith("\r") ? $t(this, tt).slice(0, -1) : $t(this, tt);
        t.enqueue(n);
      }
    }), Wc(this, tt, "");
  }
}
tt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Kc,
  append: ge,
  attr: ht,
  detach: As,
  element: mt,
  init: Gc,
  insert: Ls,
  noop: uo,
  safe_not_equal: Jc,
  set_data: Qn,
  set_style: Bl,
  space: ni,
  text: Yt,
  toggle_class: co
} = window.__gradio__svelte__internal, { onMount: Qc, createEventDispatcher: xc, onDestroy: $c } = window.__gradio__svelte__internal;
function _o(l) {
  let e, t, n, i, o = an(
    /*file_to_display*/
    l[2]
  ) + "", a, r, s, f, u = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), c;
  return {
    c() {
      e = mt("div"), t = mt("span"), n = mt("div"), i = mt("progress"), a = Yt(o), s = ni(), f = mt("span"), c = Yt(u), Bl(i, "visibility", "hidden"), Bl(i, "height", "0"), Bl(i, "width", "0"), i.value = r = an(
        /*file_to_display*/
        l[2]
      ), ht(i, "max", "100"), ht(i, "class", "svelte-cr2edf"), ht(n, "class", "progress-bar svelte-cr2edf"), ht(f, "class", "file-name svelte-cr2edf"), ht(e, "class", "file svelte-cr2edf");
    },
    m(d, _) {
      Ls(d, e, _), ge(e, t), ge(t, n), ge(n, i), ge(i, a), ge(e, s), ge(e, f), ge(f, c);
    },
    p(d, _) {
      _ & /*file_to_display*/
      4 && o !== (o = an(
        /*file_to_display*/
        d[2]
      ) + "") && Qn(a, o), _ & /*file_to_display*/
      4 && r !== (r = an(
        /*file_to_display*/
        d[2]
      )) && (i.value = r), _ & /*file_to_display*/
      4 && u !== (u = /*file_to_display*/
      d[2].orig_name + "") && Qn(c, u);
    },
    d(d) {
      d && As(e);
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
    l[2] && _o(l)
  );
  return {
    c() {
      e = mt("div"), t = mt("span"), n = Yt("Uploading "), o = Yt(i), a = ni(), s = Yt(r), f = Yt("..."), u = ni(), c && c.c(), ht(t, "class", "uploading svelte-cr2edf"), ht(e, "class", "wrap svelte-cr2edf"), co(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(d, _) {
      Ls(d, e, _), ge(e, t), ge(t, n), ge(t, o), ge(t, a), ge(t, s), ge(t, f), ge(e, u), c && c.m(e, null);
    },
    p(d, [_]) {
      _ & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      d[0].length + "") && Qn(o, i), _ & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && Qn(s, r), /*file_to_display*/
      d[2] ? c ? c.p(d, _) : (c = _o(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), _ & /*progress*/
      2 && co(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: uo,
    o: uo,
    d(d) {
      d && As(e), c && c.d();
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
  var n = this && this.__awaiter || function(m, b, g, w) {
    function p(C) {
      return C instanceof g ? C : new g(function(E) {
        E(C);
      });
    }
    return new (g || (g = Promise))(function(C, E) {
      function v(q) {
        try {
          k(w.next(q));
        } catch (F) {
          E(F);
        }
      }
      function z(q) {
        try {
          k(w.throw(q));
        } catch (F) {
          E(F);
        }
      }
      function k(q) {
        q.done ? C(q.value) : p(q.value).then(v, z);
      }
      k((w = w.apply(m, b || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: a } = e, { stream_handler: r } = e, s, f = !1, u, c, d = a.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const _ = xc();
  function h(m, b) {
    t(0, d = d.map((g) => (g.orig_name === m && (g.progress += b), g)));
  }
  return Qc(() => n(void 0, void 0, void 0, function* () {
    if (s = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), s == null)
      throw new Error("Event source is not defined");
    s.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(m.data);
        f || t(1, f = !0), b.msg === "done" ? (s == null || s.close(), _("done")) : (t(7, u = b), h(b.orig_name, b.chunk_size));
      });
    };
  })), $c(() => {
    (s != null || s != null) && s.close();
  }), l.$$set = (m) => {
    "upload_id" in m && t(3, i = m.upload_id), "root" in m && t(4, o = m.root), "files" in m && t(5, a = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && t_(d), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, c = u || d[0]);
  }, [
    d,
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
  append: ho,
  attr: oe,
  binding_callbacks: o_,
  bubble: ft,
  check_outros: Ds,
  create_component: s_,
  create_slot: Ts,
  destroy_component: a_,
  detach: cl,
  element: li,
  empty: Bs,
  get_all_dirty_from_scope: js,
  get_slot_changes: Is,
  group_outros: Rs,
  init: r_,
  insert: _l,
  listen: ve,
  mount_component: f_,
  prevent_default: ut,
  run_all: u_,
  safe_not_equal: c_,
  set_style: Fs,
  space: __,
  stop_propagation: ct,
  toggle_class: ne,
  transition_in: it,
  transition_out: Ct,
  update_slot_base: Hs
} = window.__gradio__svelte__internal, { createEventDispatcher: d_, tick: h_ } = window.__gradio__svelte__internal;
function m_(l) {
  let e, t, n, i, o, a, r, s, f, u, c;
  const d = (
    /*#slots*/
    l[26].default
  ), _ = Ts(
    d,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = li("button"), _ && _.c(), t = __(), n = li("input"), oe(n, "aria-label", "file upload"), oe(n, "data-testid", "file-upload"), oe(n, "type", "file"), oe(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, oe(n, "webkitdirectory", a = /*file_count*/
      l[6] === "directory" || void 0), oe(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), oe(n, "class", "svelte-1s26xmt"), oe(e, "tabindex", s = /*hidden*/
      l[9] ? -1 : 0), oe(e, "class", "svelte-1s26xmt"), ne(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), ne(
        e,
        "center",
        /*center*/
        l[4]
      ), ne(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), ne(
        e,
        "flex",
        /*flex*/
        l[5]
      ), ne(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Fs(e, "height", "100%");
    },
    m(h, m) {
      _l(h, e, m), _ && _.m(e, null), ho(e, t), ho(e, n), l[34](n), f = !0, u || (c = [
        ve(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        ve(e, "drag", ct(ut(
          /*drag_handler*/
          l[27]
        ))),
        ve(e, "dragstart", ct(ut(
          /*dragstart_handler*/
          l[28]
        ))),
        ve(e, "dragend", ct(ut(
          /*dragend_handler*/
          l[29]
        ))),
        ve(e, "dragover", ct(ut(
          /*dragover_handler*/
          l[30]
        ))),
        ve(e, "dragenter", ct(ut(
          /*dragenter_handler*/
          l[31]
        ))),
        ve(e, "dragleave", ct(ut(
          /*dragleave_handler*/
          l[32]
        ))),
        ve(e, "drop", ct(ut(
          /*drop_handler*/
          l[33]
        ))),
        ve(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        ve(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        ve(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        ve(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], u = !0);
    },
    p(h, m) {
      _ && _.p && (!f || m[0] & /*$$scope*/
      33554432) && Hs(
        _,
        d,
        h,
        /*$$scope*/
        h[25],
        f ? Is(
          d,
          /*$$scope*/
          h[25],
          m,
          null
        ) : js(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!f || m[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      h[16] || void 0)) && oe(n, "accept", i), (!f || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = o), (!f || m[0] & /*file_count*/
      64 && a !== (a = /*file_count*/
      h[6] === "directory" || void 0)) && oe(n, "webkitdirectory", a), (!f || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && oe(n, "mozdirectory", r), (!f || m[0] & /*hidden*/
      512 && s !== (s = /*hidden*/
      h[9] ? -1 : 0)) && oe(e, "tabindex", s), (!f || m[0] & /*hidden*/
      512) && ne(
        e,
        "hidden",
        /*hidden*/
        h[9]
      ), (!f || m[0] & /*center*/
      16) && ne(
        e,
        "center",
        /*center*/
        h[4]
      ), (!f || m[0] & /*boundedheight*/
      8) && ne(
        e,
        "boundedheight",
        /*boundedheight*/
        h[3]
      ), (!f || m[0] & /*flex*/
      32) && ne(
        e,
        "flex",
        /*flex*/
        h[5]
      ), (!f || m[0] & /*disable_click*/
      128) && ne(
        e,
        "disable_click",
        /*disable_click*/
        h[7]
      );
    },
    i(h) {
      f || (it(_, h), f = !0);
    },
    o(h) {
      Ct(_, h), f = !1;
    },
    d(h) {
      h && cl(e), _ && _.d(h), l[34](null), u = !1, u_(c);
    }
  };
}
function b_(l) {
  let e, t, n = !/*hidden*/
  l[9] && mo(l);
  return {
    c() {
      n && n.c(), e = Bs();
    },
    m(i, o) {
      n && n.m(i, o), _l(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Rs(), Ct(n, 1, 1, () => {
        n = null;
      }), Ds()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && it(n, 1)) : (n = mo(i), n.c(), it(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (it(n), t = !0);
    },
    o(i) {
      Ct(n), t = !1;
    },
    d(i) {
      i && cl(e), n && n.d(i);
    }
  };
}
function g_(l) {
  let e, t, n, i, o;
  const a = (
    /*#slots*/
    l[26].default
  ), r = Ts(
    a,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = li("button"), r && r.c(), oe(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), oe(e, "class", "svelte-1s26xmt"), ne(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), ne(
        e,
        "center",
        /*center*/
        l[4]
      ), ne(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), ne(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Fs(e, "height", "100%");
    },
    m(s, f) {
      _l(s, e, f), r && r.m(e, null), n = !0, i || (o = ve(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(s, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Hs(
        r,
        a,
        s,
        /*$$scope*/
        s[25],
        n ? Is(
          a,
          /*$$scope*/
          s[25],
          f,
          null
        ) : js(
          /*$$scope*/
          s[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      s[9] ? -1 : 0)) && oe(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && ne(
        e,
        "hidden",
        /*hidden*/
        s[9]
      ), (!n || f[0] & /*center*/
      16) && ne(
        e,
        "center",
        /*center*/
        s[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && ne(
        e,
        "boundedheight",
        /*boundedheight*/
        s[3]
      ), (!n || f[0] & /*flex*/
      32) && ne(
        e,
        "flex",
        /*flex*/
        s[5]
      );
    },
    i(s) {
      n || (it(r, s), n = !0);
    },
    o(s) {
      Ct(r, s), n = !1;
    },
    d(s) {
      s && cl(e), r && r.d(s), i = !1, o();
    }
  };
}
function mo(l) {
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
      t || (it(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ct(e.$$.fragment, n), t = !1;
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
      t.c(), n = Bs();
    },
    m(s, f) {
      a[e].m(s, f), _l(s, n, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (Rs(), Ct(a[u], 1, 1, () => {
        a[u] = null;
      }), Ds(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), it(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (it(t), i = !0);
    },
    o(s) {
      Ct(t), i = !1;
    },
    d(s) {
      s && cl(n), a[e].d(s);
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
  var o = this && this.__awaiter || function(S, H, G, y) {
    function ee(ue) {
      return ue instanceof G ? ue : new G(function(pe) {
        pe(ue);
      });
    }
    return new (G || (G = Promise))(function(ue, pe) {
      function A(V) {
        try {
          O(y.next(V));
        } catch (Ee) {
          pe(Ee);
        }
      }
      function B(V) {
        try {
          O(y.throw(V));
        } catch (Ee) {
          pe(Ee);
        }
      }
      function O(V) {
        V.done ? ue(V.value) : ee(V.value).then(A, B);
      }
      O((y = y.apply(S, H || [])).next());
    });
  };
  let { filetype: a = null } = e, { dragging: r = !1 } = e, { boundedheight: s = !0 } = e, { center: f = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: d = !1 } = e, { root: _ } = e, { hidden: h = !1 } = e, { format: m = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: g = null } = e, { show_progress: w = !0 } = e, { max_file_size: p = null } = e, { upload: C } = e, { stream_handler: E } = e, v, z, k;
  const q = d_(), F = ["image", "video", "audio", "text", "file"], j = (S) => S.startsWith(".") || S.endsWith("/*") ? S : F.includes(S) ? S + "/*" : "." + S;
  function D() {
    t(20, r = !r);
  }
  function N() {
    navigator.clipboard.read().then((S) => o(this, void 0, void 0, function* () {
      for (let H = 0; H < S.length; H++) {
        const G = S[H].types.find((y) => y.startsWith("image/"));
        if (G) {
          S[H].getType(G).then((y) => o(this, void 0, void 0, function* () {
            const ee = new File([y], `clipboard.${G.replace("image/", "")}`);
            yield X([ee]);
          }));
          break;
        }
      }
    }));
  }
  function K() {
    d || g && (t(2, g.value = "", g), g.click());
  }
  function $(S) {
    return o(this, void 0, void 0, function* () {
      yield h_(), t(14, v = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const H = yield C(S, _, v, p ?? 1 / 0);
        return q("load", c === "single" ? H == null ? void 0 : H[0] : H), t(1, b = !1), H || [];
      } catch (H) {
        return q("error", H.message), t(1, b = !1), [];
      }
    });
  }
  function X(S) {
    return o(this, void 0, void 0, function* () {
      if (!S.length)
        return;
      let H = S.map((G) => new File([G], G instanceof File ? G.name : "file", { type: G.type }));
      return t(15, z = yield Pc(H)), yield $(z);
    });
  }
  function se(S) {
    return o(this, void 0, void 0, function* () {
      const H = S.target;
      if (H.files)
        if (m != "blob")
          yield X(Array.from(H.files));
        else {
          if (c === "single") {
            q("load", H.files[0]);
            return;
          }
          q("load", H.files);
        }
    });
  }
  function we(S) {
    return o(this, void 0, void 0, function* () {
      var H;
      if (t(20, r = !1), !(!((H = S.dataTransfer) === null || H === void 0) && H.files)) return;
      const G = Array.from(S.dataTransfer.files).filter((y) => {
        const ee = "." + y.name.split(".").pop();
        return ee && p_(k, ee, y.type) || (ee && Array.isArray(a) ? a.includes(ee) : ee === a) ? !0 : (q("error", `Invalid file type only ${a} allowed.`), !1);
      });
      yield X(G);
    });
  }
  function re(S) {
    ft.call(this, l, S);
  }
  function T(S) {
    ft.call(this, l, S);
  }
  function ae(S) {
    ft.call(this, l, S);
  }
  function fe(S) {
    ft.call(this, l, S);
  }
  function Ye(S) {
    ft.call(this, l, S);
  }
  function We(S) {
    ft.call(this, l, S);
  }
  function L(S) {
    ft.call(this, l, S);
  }
  function M(S) {
    o_[S ? "unshift" : "push"](() => {
      g = S, t(2, g);
    });
  }
  return l.$$set = (S) => {
    "filetype" in S && t(0, a = S.filetype), "dragging" in S && t(20, r = S.dragging), "boundedheight" in S && t(3, s = S.boundedheight), "center" in S && t(4, f = S.center), "flex" in S && t(5, u = S.flex), "file_count" in S && t(6, c = S.file_count), "disable_click" in S && t(7, d = S.disable_click), "root" in S && t(8, _ = S.root), "hidden" in S && t(9, h = S.hidden), "format" in S && t(21, m = S.format), "uploading" in S && t(1, b = S.uploading), "hidden_upload" in S && t(2, g = S.hidden_upload), "show_progress" in S && t(10, w = S.show_progress), "max_file_size" in S && t(22, p = S.max_file_size), "upload" in S && t(23, C = S.upload), "stream_handler" in S && t(11, E = S.stream_handler), "$$scope" in S && t(25, i = S.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (a == null ? t(16, k = null) : typeof a == "string" ? t(16, k = j(a)) : (t(0, a = a.map(j)), t(16, k = a.join(", "))));
  }, [
    a,
    b,
    g,
    s,
    f,
    u,
    c,
    d,
    _,
    h,
    w,
    E,
    N,
    K,
    v,
    z,
    k,
    D,
    se,
    we,
    r,
    m,
    p,
    C,
    X,
    i,
    n,
    re,
    T,
    ae,
    fe,
    Ye,
    We,
    L,
    M
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
  append: bo,
  attr: ie,
  detach: C_,
  init: S_,
  insert: z_,
  noop: jl,
  safe_not_equal: q_,
  set_style: $e,
  svg_element: Il
} = window.__gradio__svelte__internal;
function M_(l) {
  let e, t, n;
  return {
    c() {
      e = Il("svg"), t = Il("line"), n = Il("line"), ie(t, "x1", "4"), ie(t, "y1", "12"), ie(t, "x2", "20"), ie(t, "y2", "12"), $e(t, "fill", "none"), $e(t, "stroke-width", "2px"), ie(n, "x1", "12"), ie(n, "y1", "4"), ie(n, "x2", "12"), ie(n, "y2", "20"), $e(n, "fill", "none"), $e(n, "stroke-width", "2px"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "viewBox", "0 0 24 24"), ie(e, "version", "1.1"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ie(e, "xml:space", "preserve"), ie(e, "stroke", "currentColor"), $e(e, "fill-rule", "evenodd"), $e(e, "clip-rule", "evenodd"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      z_(i, e, o), bo(e, t), bo(e, n);
    },
    p: jl,
    i: jl,
    o: jl,
    d(i) {
      i && C_(e);
    }
  };
}
class E_ extends y_ {
  constructor(e) {
    super(), S_(this, e, null, M_, q_, {});
  }
}
const {
  SvelteComponent: A_,
  append: go,
  attr: Rl,
  bubble: wo,
  create_component: L_,
  destroy_component: D_,
  detach: Us,
  element: po,
  init: T_,
  insert: Ns,
  listen: Fl,
  mount_component: B_,
  run_all: j_,
  safe_not_equal: I_,
  set_data: R_,
  set_input_value: ko,
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
      Ns(t, e, n);
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
      t && Us(e);
    }
  };
}
function W_(l) {
  let e, t, n, i, o, a, r;
  return t = new xo({
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
      e = po("label"), L_(t.$$.fragment), n = F_(), i = po("input"), Rl(i, "type", "color"), i.disabled = /*disabled*/
      l[3], Rl(i, "class", "svelte-16l8u73"), Rl(e, "class", "block");
    },
    m(s, f) {
      Ns(s, e, f), B_(t, e, null), go(e, n), go(e, i), ko(
        i,
        /*value*/
        l[0]
      ), o = !0, a || (r = [
        Fl(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        Fl(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        Fl(
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
      1 && ko(
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
      s && Us(e), D_(t), a = !1, j_(r);
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
    wo.call(this, l, h);
  }
  function d(h) {
    wo.call(this, l, h);
  }
  function _() {
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
    d,
    _
  ];
}
class P_ extends A_ {
  constructor(e) {
    super(), T_(this, e, V_, W_, I_, {
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
  append: Os,
  attr: P,
  bubble: K_,
  check_outros: G_,
  create_slot: Xs,
  detach: kn,
  element: dl,
  empty: J_,
  get_all_dirty_from_scope: Ys,
  get_slot_changes: Ws,
  group_outros: Q_,
  init: x_,
  insert: vn,
  listen: $_,
  safe_not_equal: ed,
  set_style: be,
  space: Vs,
  src_url_equal: xn,
  toggle_class: Wt,
  transition_in: $n,
  transition_out: el,
  update_slot_base: Ps
} = window.__gradio__svelte__internal;
function td(l) {
  let e, t, n, i, o, a, r = (
    /*icon*/
    l[7] && vo(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), f = Xs(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = dl("button"), r && r.c(), t = Vs(), f && f.c(), P(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), P(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], Wt(e, "hidden", !/*visible*/
      l[2]), be(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), be(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), be(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(u, c) {
      vn(u, e, c), r && r.m(e, null), Os(e, t), f && f.m(e, null), i = !0, o || (a = $_(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? r ? r.p(u, c) : (r = vo(u), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || c & /*$$scope*/
      2048) && Ps(
        f,
        s,
        u,
        /*$$scope*/
        u[11],
        i ? Ws(
          s,
          /*$$scope*/
          u[11],
          c,
          null
        ) : Ys(
          /*$$scope*/
          u[11]
        ),
        null
      ), (!i || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      u[4] + " " + /*variant*/
      u[3] + " " + /*elem_classes*/
      u[1].join(" ") + " svelte-8huxfn")) && P(e, "class", n), (!i || c & /*elem_id*/
      1) && P(
        e,
        "id",
        /*elem_id*/
        u[0]
      ), (!i || c & /*disabled*/
      256) && (e.disabled = /*disabled*/
      u[8]), (!i || c & /*size, variant, elem_classes, visible*/
      30) && Wt(e, "hidden", !/*visible*/
      u[2]), c & /*scale*/
      512 && be(
        e,
        "flex-grow",
        /*scale*/
        u[9]
      ), c & /*scale*/
      512 && be(
        e,
        "width",
        /*scale*/
        u[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && be(e, "min-width", typeof /*min_width*/
      u[10] == "number" ? `calc(min(${/*min_width*/
      u[10]}px, 100%))` : null);
    },
    i(u) {
      i || ($n(f, u), i = !0);
    },
    o(u) {
      el(f, u), i = !1;
    },
    d(u) {
      u && kn(e), r && r.d(), f && f.d(u), o = !1, a();
    }
  };
}
function nd(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && yo(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), r = Xs(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = dl("a"), o && o.c(), t = Vs(), r && r.c(), P(
        e,
        "href",
        /*link*/
        l[6]
      ), P(e, "rel", "noopener noreferrer"), P(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), P(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), P(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), Wt(e, "hidden", !/*visible*/
      l[2]), Wt(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), be(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), be(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), be(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), be(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(s, f) {
      vn(s, e, f), o && o.m(e, null), Os(e, t), r && r.m(e, null), i = !0;
    },
    p(s, f) {
      /*icon*/
      s[7] ? o ? o.p(s, f) : (o = yo(s), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Ps(
        r,
        a,
        s,
        /*$$scope*/
        s[11],
        i ? Ws(
          a,
          /*$$scope*/
          s[11],
          f,
          null
        ) : Ys(
          /*$$scope*/
          s[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && P(
        e,
        "href",
        /*link*/
        s[6]
      ), (!i || f & /*disabled*/
      256) && P(
        e,
        "aria-disabled",
        /*disabled*/
        s[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      s[4] + " " + /*variant*/
      s[3] + " " + /*elem_classes*/
      s[1].join(" ") + " svelte-8huxfn")) && P(e, "class", n), (!i || f & /*elem_id*/
      1) && P(
        e,
        "id",
        /*elem_id*/
        s[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Wt(e, "hidden", !/*visible*/
      s[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Wt(
        e,
        "disabled",
        /*disabled*/
        s[8]
      ), f & /*scale*/
      512 && be(
        e,
        "flex-grow",
        /*scale*/
        s[9]
      ), f & /*disabled*/
      256 && be(
        e,
        "pointer-events",
        /*disabled*/
        s[8] ? "none" : null
      ), f & /*scale*/
      512 && be(
        e,
        "width",
        /*scale*/
        s[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && be(e, "min-width", typeof /*min_width*/
      s[10] == "number" ? `calc(min(${/*min_width*/
      s[10]}px, 100%))` : null);
    },
    i(s) {
      i || ($n(r, s), i = !0);
    },
    o(s) {
      el(r, s), i = !1;
    },
    d(s) {
      s && kn(e), o && o.d(), r && r.d(s);
    }
  };
}
function vo(l) {
  let e, t, n;
  return {
    c() {
      e = dl("img"), P(e, "class", "button-icon svelte-8huxfn"), xn(e.src, t = /*icon*/
      l[7].url) || P(e, "src", t), P(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      vn(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !xn(e.src, t = /*icon*/
      i[7].url) && P(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && P(e, "alt", n);
    },
    d(i) {
      i && kn(e);
    }
  };
}
function yo(l) {
  let e, t, n;
  return {
    c() {
      e = dl("img"), P(e, "class", "button-icon svelte-8huxfn"), xn(e.src, t = /*icon*/
      l[7].url) || P(e, "src", t), P(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      vn(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !xn(e.src, t = /*icon*/
      i[7].url) && P(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && P(e, "alt", n);
    },
    d(i) {
      i && kn(e);
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
      a[e].m(s, f), vn(s, n, f), i = !0;
    },
    p(s, [f]) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (Q_(), el(a[u], 1, 1, () => {
        a[u] = null;
      }), G_(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), $n(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || ($n(t), i = !0);
    },
    o(s) {
      el(t), i = !1;
    },
    d(s) {
      s && kn(n), a[e].d(s);
    }
  };
}
function id(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: a = [] } = e, { visible: r = !0 } = e, { variant: s = "secondary" } = e, { size: f = "lg" } = e, { value: u = null } = e, { link: c = null } = e, { icon: d = null } = e, { disabled: _ = !1 } = e, { scale: h = null } = e, { min_width: m = void 0 } = e;
  function b(g) {
    K_.call(this, l, g);
  }
  return l.$$set = (g) => {
    "elem_id" in g && t(0, o = g.elem_id), "elem_classes" in g && t(1, a = g.elem_classes), "visible" in g && t(2, r = g.visible), "variant" in g && t(3, s = g.variant), "size" in g && t(4, f = g.size), "value" in g && t(5, u = g.value), "link" in g && t(6, c = g.link), "icon" in g && t(7, d = g.icon), "disabled" in g && t(8, _ = g.disabled), "scale" in g && t(9, h = g.scale), "min_width" in g && t(10, m = g.min_width), "$$scope" in g && t(11, i = g.$$scope);
  }, [
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    d,
    _,
    h,
    m,
    i,
    n,
    b
  ];
}
class Co extends Z_ {
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
  add_render_callback: Zs,
  append: Ln,
  attr: Ce,
  binding_callbacks: So,
  check_outros: sd,
  create_bidirectional_transition: zo,
  destroy_each: ad,
  detach: un,
  element: tl,
  empty: rd,
  ensure_array_like: qo,
  group_outros: fd,
  init: ud,
  insert: cn,
  listen: ii,
  prevent_default: cd,
  run_all: _d,
  safe_not_equal: dd,
  set_data: hd,
  set_style: Tt,
  space: oi,
  text: md,
  toggle_class: He,
  transition_in: Hl,
  transition_out: Mo
} = window.__gradio__svelte__internal, { createEventDispatcher: bd } = window.__gradio__svelte__internal;
function Eo(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function Ao(l) {
  let e, t, n, i, o, a = qo(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let s = 0; s < a.length; s += 1)
    r[s] = Lo(Eo(l, a, s));
  return {
    c() {
      e = tl("ul");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      Ce(e, "class", "options svelte-yuohum"), Ce(e, "role", "listbox"), Tt(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Tt(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Tt(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(s, f) {
      cn(s, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      l[22](e), n = !0, i || (o = ii(e, "mousedown", cd(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(s, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        a = qo(
          /*filtered_indices*/
          s[1]
        );
        let u;
        for (u = 0; u < a.length; u += 1) {
          const c = Eo(s, a, u);
          r[u] ? r[u].p(c, f) : (r[u] = Lo(c), r[u].c(), r[u].m(e, null));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = a.length;
      }
      f & /*bottom*/
      512 && Tt(
        e,
        "bottom",
        /*bottom*/
        s[9]
      ), f & /*max_height*/
      1024 && Tt(e, "max-height", `calc(${/*max_height*/
      s[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Tt(
        e,
        "width",
        /*input_width*/
        s[8] + "px"
      );
    },
    i(s) {
      n || (s && Zs(() => {
        n && (t || (t = zo(e, Oi, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(s) {
      s && (t || (t = zo(e, Oi, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(s) {
      s && un(e), ad(r, s), l[22](null), s && t && t.end(), i = !1, o();
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
      e = tl("li"), t = tl("span"), t.textContent = "✓", n = oi(), o = md(i), a = oi(), Ce(t, "class", "inner-item svelte-yuohum"), He(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ce(e, "class", "item svelte-yuohum"), Ce(e, "data-index", r = /*index*/
      l[26]), Ce(e, "aria-label", s = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Ce(e, "data-testid", "dropdown-option"), Ce(e, "role", "option"), Ce(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), He(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), He(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), He(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), He(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(u, c) {
      cn(u, e, c), Ln(e, t), Ln(e, n), Ln(e, o), Ln(e, a);
    },
    p(u, c) {
      c & /*selected_indices, filtered_indices*/
      18 && He(t, "hide", !/*selected_indices*/
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
      u[26]) && Ce(e, "data-index", r), c & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0]) && Ce(e, "aria-label", s), c & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )) && Ce(e, "aria-selected", f), c & /*selected_indices, filtered_indices*/
      18 && He(
        e,
        "selected",
        /*selected_indices*/
        u[4].includes(
          /*index*/
          u[26]
        )
      ), c & /*filtered_indices, active_index*/
      34 && He(
        e,
        "active",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && He(
        e,
        "bg-gray-100",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && He(
        e,
        "dark:bg-gray-600",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      );
    },
    d(u) {
      u && un(e);
    }
  };
}
function gd(l) {
  let e, t, n, i, o;
  Zs(
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
      e = tl("div"), t = oi(), a && a.c(), n = rd(), Ce(e, "class", "reference");
    },
    m(r, s) {
      cn(r, e, s), l[20](e), cn(r, t, s), a && a.m(r, s), cn(r, n, s), i || (o = [
        ii(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        ii(
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
      12 && Hl(a, 1)) : (a = Ao(r), a.c(), Hl(a, 1), a.m(n.parentNode, n)) : a && (fd(), Mo(a, 1, 1, () => {
        a = null;
      }), sd());
    },
    i(r) {
      Hl(a);
    },
    o(r) {
      Mo(a);
    },
    d(r) {
      r && (un(e), un(t), un(n)), l[20](null), a && a.d(r), i = !1, _d(o);
    }
  };
}
function wd(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: a } = e, { show_options: r = !1 } = e, { disabled: s = !1 } = e, { selected_indices: f = [] } = e, { active_index: u = null } = e, c, d, _, h, m, b, g, w, p;
  function C() {
    const { top: D, bottom: N } = m.getBoundingClientRect();
    t(16, c = D), t(17, d = p - N);
  }
  let E = null;
  function v() {
    r && (E !== null && clearTimeout(E), E = setTimeout(
      () => {
        C(), E = null;
      },
      10
    ));
  }
  const z = bd();
  function k() {
    t(11, p = window.innerHeight);
  }
  function q(D) {
    So[D ? "unshift" : "push"](() => {
      m = D, t(6, m);
    });
  }
  const F = (D) => z("change", D);
  function j(D) {
    So[D ? "unshift" : "push"](() => {
      b = D, t(7, b);
    });
  }
  return l.$$set = (D) => {
    "choices" in D && t(0, o = D.choices), "filtered_indices" in D && t(1, a = D.filtered_indices), "show_options" in D && t(2, r = D.show_options), "disabled" in D && t(3, s = D.disabled), "selected_indices" in D && t(4, f = D.selected_indices), "active_index" in D && t(5, u = D.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && m) {
        if (b && f.length > 0) {
          let N = b.querySelectorAll("li");
          for (const K of Array.from(N))
            if (K.getAttribute("data-index") === f[0].toString()) {
              t(14, n = b == null ? void 0 : b.scrollTo) === null || n === void 0 || n.call(b, 0, K.offsetTop);
              break;
            }
        }
        C();
        const D = t(15, i = m.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, _ = (D == null ? void 0 : D.height) || 0), t(8, h = (D == null ? void 0 : D.width) || 0);
      }
      d > c ? (t(10, w = d), t(9, g = null)) : (t(9, g = `${d + _}px`), t(10, w = c - _));
    }
  }, [
    o,
    a,
    r,
    s,
    f,
    u,
    m,
    b,
    h,
    g,
    w,
    p,
    v,
    z,
    n,
    i,
    c,
    d,
    _,
    k,
    q,
    F,
    j
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
  append: _t,
  attr: ye,
  binding_callbacks: Sd,
  check_outros: zd,
  create_component: si,
  destroy_component: ai,
  detach: mi,
  element: It,
  group_outros: qd,
  init: Md,
  insert: bi,
  listen: en,
  mount_component: ri,
  run_all: Ed,
  safe_not_equal: Ad,
  set_data: Ld,
  set_input_value: To,
  space: Ul,
  text: Dd,
  toggle_class: Bt,
  transition_in: Rt,
  transition_out: rn
} = window.__gradio__svelte__internal, { onMount: Td } = window.__gradio__svelte__internal, { createEventDispatcher: Bd, afterUpdate: jd } = window.__gradio__svelte__internal;
function Id(l) {
  let e;
  return {
    c() {
      e = Dd(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      bi(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Ld(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && mi(e);
    }
  };
}
function Bo(l) {
  let e, t, n;
  return t = new Cf({}), {
    c() {
      e = It("div"), si(t.$$.fragment), ye(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      bi(i, e, o), ri(t, e, null), n = !0;
    },
    i(i) {
      n || (Rt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      rn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && mi(e), ai(t);
    }
  };
}
function Rd(l) {
  let e, t, n, i, o, a, r, s, f, u, c, d, _, h;
  t = new xo({
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
  let m = !/*disabled*/
  l[3] && Bo();
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
      e = It("div"), si(t.$$.fragment), n = Ul(), i = It("div"), o = It("div"), a = It("div"), r = It("input"), f = Ul(), m && m.c(), u = Ul(), si(c.$$.fragment), ye(r, "role", "listbox"), ye(r, "aria-controls", "dropdown-options"), ye(
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
      l[3], ye(r, "autocomplete", "off"), r.readOnly = s = !/*filterable*/
      l[7], Bt(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), ye(a, "class", "secondary-wrap svelte-1m1zvyj"), ye(o, "class", "wrap-inner svelte-1m1zvyj"), Bt(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), ye(i, "class", "wrap svelte-1m1zvyj"), ye(e, "class", "svelte-1m1zvyj"), Bt(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(b, g) {
      bi(b, e, g), ri(t, e, null), _t(e, n), _t(e, i), _t(i, o), _t(o, a), _t(a, r), To(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), _t(a, f), m && m.m(a, null), _t(i, u), ri(c, i, null), d = !0, _ || (h = [
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
      ], _ = !0);
    },
    p(b, g) {
      const w = {};
      g[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      b[4]), g[0] & /*info*/
      2 && (w.info = /*info*/
      b[1]), g[0] & /*label*/
      1 | g[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: g, ctx: b }), t.$set(w), (!d || g[0] & /*show_options*/
      4096) && ye(
        r,
        "aria-expanded",
        /*show_options*/
        b[12]
      ), (!d || g[0] & /*label*/
      1) && ye(
        r,
        "aria-label",
        /*label*/
        b[0]
      ), (!d || g[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      b[3]), (!d || g[0] & /*filterable*/
      128 && s !== (s = !/*filterable*/
      b[7])) && (r.readOnly = s), g[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      b[9] && To(
        r,
        /*input_text*/
        b[9]
      ), (!d || g[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Bt(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? m && (qd(), rn(m, 1, 1, () => {
        m = null;
      }), zd()) : m ? g[0] & /*disabled*/
      8 && Rt(m, 1) : (m = Bo(), m.c(), Rt(m, 1), m.m(a, null)), (!d || g[0] & /*show_options*/
      4096) && Bt(
        o,
        "show_options",
        /*show_options*/
        b[12]
      );
      const p = {};
      g[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      b[12]), g[0] & /*choices*/
      4 && (p.choices = /*choices*/
      b[2]), g[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      b[10]), g[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      b[3]), g[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      b[11] === null ? [] : [
        /*selected_index*/
        b[11]
      ]), g[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      b[14]), c.$set(p), (!d || g[0] & /*container*/
      32) && Bt(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      d || (Rt(t.$$.fragment, b), Rt(m), Rt(c.$$.fragment, b), d = !0);
    },
    o(b) {
      rn(t.$$.fragment, b), rn(m), rn(c.$$.fragment, b), d = !1;
    },
    d(b) {
      b && mi(e), ai(t), l[29](null), m && m.d(), ai(c), _ = !1, Ed(h);
    }
  };
}
function Fd(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, a = [], { value_is_output: r = !1 } = e, { choices: s } = e, f, { disabled: u = !1 } = e, { show_label: c } = e, { container: d = !0 } = e, { allow_custom_value: _ = !1 } = e, { filterable: h = !0 } = e, m, b = !1, g, w, p = "", C = "", E = !1, v = [], z = null, k = null, q;
  const F = Bd();
  o ? (q = s.map((T) => T[1]).indexOf(o), k = q, k === -1 ? (a = o, k = null) : ([p, a] = s[k], C = p), D()) : s.length > 0 && (q = 0, k = 0, [p, o] = s[k], a = o, C = p);
  function j() {
    t(13, g = s.map((T) => T[0])), t(24, w = s.map((T) => T[1]));
  }
  function D() {
    j(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, k = null)) : w.includes(o) ? (t(9, p = g[w.indexOf(o)]), t(11, k = w.indexOf(o))) : _ ? (t(9, p = o), t(11, k = null)) : (t(9, p = ""), t(11, k = null)), t(27, q = k);
  }
  function N(T) {
    if (t(11, k = parseInt(T.detail.target.dataset.index)), isNaN(k)) {
      t(11, k = null);
      return;
    }
    t(12, b = !1), t(14, z = null), m.blur();
  }
  function K(T) {
    t(10, v = s.map((ae, fe) => fe)), t(12, b = !0), F("focus");
  }
  function $() {
    _ ? t(20, o = p) : t(9, p = g[w.indexOf(o)]), t(12, b = !1), t(14, z = null), F("blur");
  }
  function X(T) {
    t(12, [b, z] = yd(T, z, v), b, (t(14, z), t(2, s), t(23, f), t(6, _), t(9, p), t(10, v), t(8, m), t(25, C), t(11, k), t(27, q), t(26, E), t(24, w))), T.key === "Enter" && (z !== null ? (t(11, k = z), t(12, b = !1), m.blur(), t(14, z = null)) : g.includes(p) ? (t(11, k = g.indexOf(p)), t(12, b = !1), t(14, z = null), m.blur()) : _ && (t(20, o = p), t(11, k = null), t(12, b = !1), t(14, z = null), m.blur()), F("enter", o));
  }
  jd(() => {
    t(21, r = !1), t(26, E = !0);
  }), Td(() => {
    m.focus();
  });
  function se() {
    p = this.value, t(9, p), t(11, k), t(27, q), t(26, E), t(2, s), t(24, w);
  }
  function we(T) {
    Sd[T ? "unshift" : "push"](() => {
      m = T, t(8, m);
    });
  }
  const re = (T) => F("key_up", { key: T.key, input_value: p });
  return l.$$set = (T) => {
    "label" in T && t(0, n = T.label), "info" in T && t(1, i = T.info), "value" in T && t(20, o = T.value), "value_is_output" in T && t(21, r = T.value_is_output), "choices" in T && t(2, s = T.choices), "disabled" in T && t(3, u = T.disabled), "show_label" in T && t(4, c = T.show_label), "container" in T && t(5, d = T.container), "allow_custom_value" in T && t(6, _ = T.allow_custom_value), "filterable" in T && t(7, h = T.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && k !== q && k !== null && E && (t(9, [p, o] = s[k], p, (t(20, o), t(11, k), t(27, q), t(26, E), t(2, s), t(24, w))), t(27, q = k), F("select", {
      index: k,
      value: w[k],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != a && (D(), vd(F, o, r), t(22, a = o)), l.$$.dirty[0] & /*choices*/
    4 && j(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && s !== f && (_ || D(), t(23, f = s), t(10, v = Do(s, p)), !_ && v.length > 0 && t(14, z = v[0]), m == document.activeElement && t(12, b = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== C && (t(10, v = Do(s, p)), t(25, C = p), !_ && v.length > 0 && t(14, z = v[0]));
  }, [
    n,
    i,
    s,
    u,
    c,
    d,
    _,
    h,
    m,
    p,
    v,
    k,
    b,
    g,
    z,
    F,
    N,
    K,
    $,
    X,
    o,
    r,
    a,
    f,
    w,
    C,
    E,
    q,
    se,
    we,
    re
  ];
}
class Hd extends Cd {
  constructor(e) {
    super(), Md(
      this,
      e,
      Fd,
      Rd,
      Ad,
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
  append: Pe,
  attr: Dn,
  create_component: Tn,
  destroy_component: Bn,
  detach: gi,
  element: dt,
  init: Nd,
  insert: wi,
  mount_component: jn,
  safe_not_equal: Od,
  set_style: In,
  space: Nl,
  text: Ks,
  transition_in: Rn,
  transition_out: Fn
} = window.__gradio__svelte__internal, { createEventDispatcher: Xd } = window.__gradio__svelte__internal, { onMount: Yd, onDestroy: Wd } = window.__gradio__svelte__internal;
function Vd(l) {
  let e;
  return {
    c() {
      e = Ks("Cancel");
    },
    m(t, n) {
      wi(t, e, n);
    },
    d(t) {
      t && gi(e);
    }
  };
}
function Pd(l) {
  let e;
  return {
    c() {
      e = Ks("OK");
    },
    m(t, n) {
      wi(t, e, n);
    },
    d(t) {
      t && gi(e);
    }
  };
}
function Zd(l) {
  let e, t, n, i, o, a, r, s, f, u, c, d, _, h, m;
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
  ), c = new Co({
    props: {
      $$slots: { default: [Vd] },
      $$scope: { ctx: l }
    }
  }), c.$on(
    "click",
    /*click_handler*/
    l[10]
  ), h = new Co({
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
      e = dt("div"), t = dt("div"), n = dt("span"), i = dt("div"), Tn(o.$$.fragment), a = Nl(), r = dt("div"), Tn(s.$$.fragment), f = Nl(), u = dt("div"), Tn(c.$$.fragment), d = Nl(), _ = dt("div"), Tn(h.$$.fragment), In(i, "margin-right", "10px"), In(r, "margin-right", "40px"), In(r, "margin-bottom", "8px"), In(u, "margin-right", "8px"), Dn(n, "class", "model-content svelte-hkn2q1"), Dn(t, "class", "modal-container svelte-hkn2q1"), Dn(e, "class", "modal svelte-hkn2q1"), Dn(e, "id", "model-box-edit");
    },
    m(b, g) {
      wi(b, e, g), Pe(e, t), Pe(t, n), Pe(n, i), jn(o, i, null), Pe(n, a), Pe(n, r), jn(s, r, null), Pe(n, f), Pe(n, u), jn(c, u, null), Pe(n, d), Pe(n, _), jn(h, _, null), m = !0;
    },
    p(b, [g]) {
      const w = {};
      g & /*currentLabel*/
      1 && (w.value = /*currentLabel*/
      b[0]), g & /*choices*/
      4 && (w.choices = /*choices*/
      b[2]), o.$set(w);
      const p = {};
      g & /*currentColor*/
      2 && (p.value = /*currentColor*/
      b[1]), s.$set(p);
      const C = {};
      g & /*$$scope*/
      16384 && (C.$$scope = { dirty: g, ctx: b }), c.$set(C);
      const E = {};
      g & /*$$scope*/
      16384 && (E.$$scope = { dirty: g, ctx: b }), h.$set(E);
    },
    i(b) {
      m || (Rn(o.$$.fragment, b), Rn(s.$$.fragment, b), Rn(c.$$.fragment, b), Rn(h.$$.fragment, b), m = !0);
    },
    o(b) {
      Fn(o.$$.fragment, b), Fn(s.$$.fragment, b), Fn(c.$$.fragment, b), Fn(h.$$.fragment, b), m = !1;
    },
    d(b) {
      b && gi(e), Bn(o), Bn(s), Bn(c), Bn(h);
    }
  };
}
function Kd(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: a = [] } = e, { color: r = "" } = e, { currentColor: s = "" } = e;
  const f = Xd();
  function u(g) {
    f("change", {
      label: i,
      color: s,
      ok: g
    });
  }
  function c(g) {
    const { detail: w } = g;
    let p = w;
    Number.isInteger(p) ? (Array.isArray(a) && p < a.length && t(1, s = a[p]), Array.isArray(o) && p < o.length && t(0, i = o[p][0])) : t(0, i = p);
  }
  function d(g) {
    const { detail: w } = g;
    t(1, s = w);
  }
  function _(g) {
    c(g), u(!0);
  }
  function h(g) {
    switch (g.key) {
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
  const m = () => u(!1), b = () => u(!0);
  return l.$$set = (g) => {
    "label" in g && t(7, n = g.label), "currentLabel" in g && t(0, i = g.currentLabel), "choices" in g && t(2, o = g.choices), "choicesColors" in g && t(8, a = g.choicesColors), "color" in g && t(9, r = g.color), "currentColor" in g && t(1, s = g.currentColor);
  }, [
    i,
    s,
    o,
    u,
    c,
    d,
    _,
    n,
    a,
    r,
    m,
    b
  ];
}
class Gs extends Ud {
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
const de = (l, e, t) => Math.min(Math.max(l, e), t);
function Ol(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class Xl {
  constructor(e, t, n, i, o, a, r, s, f, u, c = "rgb(255, 255, 255)", d = 0.5, _ = 25, h = 8, m = 2, b = 4, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (w) => {
      if (this.isDragging) {
        let p = w.clientX - this.offsetMouseX - this.xmin, C = w.clientY - this.offsetMouseY - this.ymin;
        const E = this.canvasXmax - this.canvasXmin, v = this.canvasYmax - this.canvasYmin;
        p = de(p, -this.xmin, E - this.xmax), C = de(C, -this.ymin, v - this.ymax), this.xmin += p, this.ymin += C, this.xmax += p, this.ymax += C, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (w) => {
      if (this.isResizing) {
        const p = w.clientX, C = w.clientY, E = p - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, v = C - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, z = this.canvasXmax - this.canvasXmin, k = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += E, this.ymin += v, this.xmin = de(this.xmin, 0, this.xmax - this.minSize), this.ymin = de(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += E, this.ymin += v, this.xmax = de(this.xmax, this.xmin + this.minSize, z), this.ymin = de(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += E, this.ymax += v, this.xmax = de(this.xmax, this.xmin + this.minSize, z), this.ymax = de(this.ymax, this.ymin + this.minSize, k);
            break;
          case 3:
            this.xmin += E, this.ymax += v, this.xmin = de(this.xmin, 0, this.xmax - this.minSize), this.ymax = de(this.ymax, this.ymin + this.minSize, k);
            break;
          case 4:
            this.ymin += v, this.ymin = de(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += E, this.xmax = de(this.xmax, this.xmin + this.minSize, z);
            break;
          case 6:
            this.ymax += v, this.ymax = de(this.ymax, this.ymin + this.minSize, k);
            break;
          case 7:
            this.xmin += E, this.xmin = de(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.canvasXmin = t, this.canvasYmin = n, this.canvasXmax = i, this.canvasYmax = o, this.scaleFactor = g, this.label = a, this.isDragging = !1, this.xmin = r, this.ymin = s, this.xmax = f, this.ymax = u, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = m, this.selectedThickness = b, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = _, this.color = c, this.alpha = d;
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
    if (e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Ol(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Ol(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let a = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [a, r] = this.toCanvasCoordinates(a, r), e.fillRect(a, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(a, r, i, o), e.fillStyle = "black", e.fillText(this.label, a + 5, r + 15);
    }
    e.fillStyle = Ol(this.color, 1);
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
const Ue = [
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
  append: Ft,
  attr: wt,
  binding_callbacks: Jd,
  bubble: jo,
  check_outros: Yl,
  create_component: _n,
  destroy_component: dn,
  detach: Ht,
  element: Vt,
  empty: Qd,
  group_outros: Wl,
  init: xd,
  insert: Ut,
  listen: nt,
  mount_component: hn,
  noop: $d,
  run_all: Js,
  safe_not_equal: e0,
  space: mn,
  transition_in: he,
  transition_out: Be
} = window.__gradio__svelte__internal, { onMount: t0, onDestroy: n0, createEventDispatcher: l0 } = window.__gradio__svelte__internal;
function Io(l) {
  let e, t, n, i, o, a, r, s, f, u, c, d;
  return n = new E_({}), a = new Df({}), f = new ui({}), {
    c() {
      e = Vt("span"), t = Vt("button"), _n(n.$$.fragment), i = mn(), o = Vt("button"), _n(a.$$.fragment), r = mn(), s = Vt("button"), _n(f.$$.fragment), wt(t, "class", "icon svelte-182gnnj"), wt(o, "class", "icon svelte-182gnnj"), wt(s, "class", "icon svelte-182gnnj"), wt(e, "class", "canvas-control svelte-182gnnj");
    },
    m(_, h) {
      Ut(_, e, h), Ft(e, t), hn(n, t, null), Ft(e, i), Ft(e, o), hn(a, o, null), Ft(e, r), Ft(e, s), hn(f, s, null), u = !0, c || (d = [
        nt(
          t,
          "click",
          /*click_handler*/
          l[25]
        ),
        nt(
          o,
          "click",
          /*click_handler_1*/
          l[26]
        ),
        nt(
          s,
          "click",
          /*click_handler_2*/
          l[27]
        )
      ], c = !0);
    },
    p: $d,
    i(_) {
      u || (he(n.$$.fragment, _), he(a.$$.fragment, _), he(f.$$.fragment, _), u = !0);
    },
    o(_) {
      Be(n.$$.fragment, _), Be(a.$$.fragment, _), Be(f.$$.fragment, _), u = !1;
    },
    d(_) {
      _ && Ht(e), dn(n), dn(a), dn(f), c = !1, Js(d);
    }
  };
}
function Ro(l) {
  let e, t;
  return e = new Gs({
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
        l[5] >= 0 && /*selectedBox*/
        l[5] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[5]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[5] >= 0 && /*selectedBox*/
        l[5] < /*value*/
        l[0].boxes.length ? gn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[5]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[14]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[28]
  ), {
    c() {
      _n(e.$$.fragment);
    },
    m(n, i) {
      hn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      4 && (o.choices = /*choices*/
      n[2]), i[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      n[3]), i[0] & /*selectedBox, value*/
      33 && (o.label = /*selectedBox*/
      n[5] >= 0 && /*selectedBox*/
      n[5] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[5]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      33 && (o.color = /*selectedBox*/
      n[5] >= 0 && /*selectedBox*/
      n[5] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[5]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dn(e, n);
    }
  };
}
function Fo(l) {
  let e, t;
  return e = new Gs({
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
      ) : gn(Ue[
        /*value*/
        l[0].boxes.length % Ue.length
      ])
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[11]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[29]
  ), {
    c() {
      _n(e.$$.fragment);
    },
    m(n, i) {
      hn(e, n, i), t = !0;
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
      ) : gn(Ue[
        /*value*/
        n[0].boxes.length % Ue.length
      ])), e.$set(o);
    },
    i(n) {
      t || (he(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dn(e, n);
    }
  };
}
function i0(l) {
  let e, t, n, i, o, a, r, s, f, u = (
    /*interactive*/
    l[1] && Io(l)
  ), c = (
    /*editModalVisible*/
    l[6] && Ro(l)
  ), d = (
    /*newModalVisible*/
    l[7] && Fo(l)
  );
  return {
    c() {
      e = Vt("div"), t = Vt("canvas"), n = mn(), u && u.c(), i = mn(), c && c.c(), o = mn(), d && d.c(), a = Qd(), wt(t, "class", "canvas-annotator svelte-182gnnj"), wt(e, "class", "canvas-container svelte-182gnnj"), wt(e, "tabindex", "-1");
    },
    m(_, h) {
      Ut(_, e, h), Ft(e, t), l[24](t), Ut(_, n, h), u && u.m(_, h), Ut(_, i, h), c && c.m(_, h), Ut(_, o, h), d && d.m(_, h), Ut(_, a, h), r = !0, s || (f = [
        nt(
          t,
          "mousedown",
          /*handleMouseDown*/
          l[8]
        ),
        nt(
          t,
          "mouseup",
          /*handleMouseUp*/
          l[9]
        ),
        nt(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[13]
        ),
        nt(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[16]
        ),
        nt(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[17]
        )
      ], s = !0);
    },
    p(_, h) {
      /*interactive*/
      _[1] ? u ? (u.p(_, h), h[0] & /*interactive*/
      2 && he(u, 1)) : (u = Io(_), u.c(), he(u, 1), u.m(i.parentNode, i)) : u && (Wl(), Be(u, 1, 1, () => {
        u = null;
      }), Yl()), /*editModalVisible*/
      _[6] ? c ? (c.p(_, h), h[0] & /*editModalVisible*/
      64 && he(c, 1)) : (c = Ro(_), c.c(), he(c, 1), c.m(o.parentNode, o)) : c && (Wl(), Be(c, 1, 1, () => {
        c = null;
      }), Yl()), /*newModalVisible*/
      _[7] ? d ? (d.p(_, h), h[0] & /*newModalVisible*/
      128 && he(d, 1)) : (d = Fo(_), d.c(), he(d, 1), d.m(a.parentNode, a)) : d && (Wl(), Be(d, 1, 1, () => {
        d = null;
      }), Yl());
    },
    i(_) {
      r || (he(u), he(c), he(d), r = !0);
    },
    o(_) {
      Be(u), Be(c), Be(d), r = !1;
    },
    d(_) {
      _ && (Ht(e), Ht(n), Ht(i), Ht(o), Ht(a)), l[24](null), u && u.d(_), c && c.d(_), d && d.d(_), s = !1, Js(f);
    }
  };
}
function Ho(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function gn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function o0(l, e, t) {
  let { imageUrl: n = null } = e, { interactive: i } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: a = 25 } = e, { handleSize: r } = e, { boxThickness: s } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: c = [] } = e, { choicesColors: d = [] } = e, _, h, m = null, b = -1, g = 0, w = 0, p = 0, C = 0, E = 1, v = 0, z = 0, k = !1, q = !1;
  const F = l0();
  function j() {
    if (h) {
      h.clearRect(0, 0, _.width, _.height), m !== null && h.drawImage(m, g, w, v, z);
      for (const A of u.boxes.slice().reverse())
        A.render(h);
    }
  }
  function D(A) {
    t(5, b = A), u.boxes.forEach((B) => {
      B.setSelected(!1);
    }), A >= 0 && A < u.boxes.length && u.boxes[A].setSelected(!0), j();
  }
  function N(A) {
    if (!i)
      return;
    const B = _.getBoundingClientRect(), O = A.clientX - B.left, V = A.clientY - B.top;
    for (const [Ee, ce] of u.boxes.entries()) {
      const Se = ce.indexOfPointInsideHandle(O, V);
      if (Se >= 0) {
        D(Ee), ce.startResize(Se, A);
        return;
      }
    }
    for (const [Ee, ce] of u.boxes.entries())
      if (ce.isPointInsideBox(O, V)) {
        D(Ee), ce.startDrag(A);
        return;
      }
    D(-1);
  }
  function K(A) {
    F("change");
  }
  function $(A) {
    if (i)
      switch (A.key) {
        case "Delete":
          ae();
          break;
      }
  }
  function X() {
    t(7, q = !0);
  }
  function se(A) {
    t(7, q = !1);
    const { detail: B } = A;
    let O = B.label, V = B.color;
    if (B.ok) {
      V === null || V === "" ? V = Ue[u.boxes.length % Ue.length] : V = Ho(V);
      let ce = v / 3 / E, Se = v / 3 * 2 / E, Jt = z / 3 / E, ea = z / 3 * 2 / E, ta = new Xl(j, g, w, p, C, O, Math.round(ce), Math.round(Jt), Math.round(Se), Math.round(ea), V, o, a, r, s, f);
      t(0, u.boxes = [ta, ...u.boxes], u), j(), F("change");
    }
  }
  function we() {
    b >= 0 && b < u.boxes.length && t(6, k = !0);
  }
  function re(A) {
    i && we();
  }
  function T(A) {
    t(6, k = !1);
    const { detail: B } = A;
    let O = B.label, V = B.color;
    if (B.ok && b >= 0 && b < u.boxes.length) {
      let ce = u.boxes[b];
      ce.label = O, ce.color = Ho(V), j(), F("change");
    }
  }
  function ae() {
    b >= 0 && b < u.boxes.length && (u.boxes.splice(b, 1), D(-1), F("change"));
  }
  function fe() {
    if (_) {
      if (E = 1, t(4, _.width = _.clientWidth, _), m !== null)
        if (m.width > _.width)
          E = _.width / m.width, v = m.width * E, z = m.height * E, g = 0, w = 0, p = v, C = z, t(4, _.height = z, _);
        else {
          v = m.width, z = m.height;
          var A = (_.width - v) / 2;
          g = A, w = 0, p = A + v, C = m.height, t(4, _.height = z, _);
        }
      else
        g = 0, w = 0, p = _.width, C = _.height, t(4, _.height = _.clientHeight, _);
      if (p > 0 && C > 0)
        for (const B of u.boxes)
          B.canvasXmin = g, B.canvasYmin = w, B.canvasXmax = p, B.canvasYmax = C, B.setScaleFactor(E);
      j(), F("change");
    }
  }
  const Ye = new ResizeObserver(fe);
  function We() {
    for (let A = 0; A < u.boxes.length; A++) {
      let B = u.boxes[A];
      if (!(B instanceof Xl)) {
        let O = "", V = "";
        B.hasOwnProperty("color") ? (O = B.color, Array.isArray(O) && O.length === 3 && (O = `rgb(${O[0]}, ${O[1]}, ${O[2]})`)) : O = Ue[A % Ue.length], B.hasOwnProperty("label") && (V = B.label), B = new Xl(j, g, w, p, C, V, B.xmin, B.ymin, B.xmax, B.ymax, O, o, a, r, s, f), t(0, u.boxes[A] = B, u);
      }
    }
  }
  function L() {
    n !== null && (m === null || m.src != n) && (m = new Image(), m.src = n, m.onload = function() {
      fe(), j();
    });
  }
  t0(() => {
    if (Array.isArray(c) && c.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let A = 0; A < c.length; A++) {
        let B = Ue[A % Ue.length];
        d.push(gn(B));
      }
    h = _.getContext("2d"), Ye.observe(_), L(), fe(), j();
  });
  function M() {
    document.addEventListener("keydown", $);
  }
  function S() {
    document.removeEventListener("keydown", $);
  }
  n0(() => {
    document.removeEventListener("keydown", $);
  });
  function H(A) {
    Jd[A ? "unshift" : "push"](() => {
      _ = A, t(4, _);
    });
  }
  const G = () => X(), y = () => we(), ee = () => ae();
  function ue(A) {
    jo.call(this, l, A);
  }
  function pe(A) {
    jo.call(this, l, A);
  }
  return l.$$set = (A) => {
    "imageUrl" in A && t(18, n = A.imageUrl), "interactive" in A && t(1, i = A.interactive), "boxAlpha" in A && t(19, o = A.boxAlpha), "boxMinSize" in A && t(20, a = A.boxMinSize), "handleSize" in A && t(21, r = A.handleSize), "boxThickness" in A && t(22, s = A.boxThickness), "boxSelectedThickness" in A && t(23, f = A.boxSelectedThickness), "value" in A && t(0, u = A.value), "choices" in A && t(2, c = A.choices), "choicesColors" in A && t(3, d = A.choicesColors);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (L(), We(), fe(), j());
  }, [
    u,
    i,
    c,
    d,
    _,
    b,
    k,
    q,
    N,
    K,
    X,
    se,
    we,
    re,
    T,
    ae,
    M,
    S,
    n,
    o,
    a,
    r,
    s,
    f,
    H,
    G,
    y,
    ee,
    ue,
    pe
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
        imageUrl: 18,
        interactive: 1,
        boxAlpha: 19,
        boxMinSize: 20,
        handleSize: 21,
        boxThickness: 22,
        boxSelectedThickness: 23,
        value: 0,
        choices: 2,
        choicesColors: 3
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
    l[13](a);
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
    imageUrl: (
      /*resolved_src*/
      l[9]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new s0({ props: o }), u0.push(() => f0(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[14]
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
        a[8]), r & /*resolved_src*/
        512 && (s.imageUrl = /*resolved_src*/
        a[9]), !t && r & /*value*/
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
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: a } = e, { labelColors: r } = e, { boxMinSize: s } = e, { handleSize: f } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: d } = e, _, h;
  const m = w0();
  function b(w) {
    d = w, t(0, d);
  }
  const g = () => m("change");
  return l.$$set = (w) => {
    "src" in w && t(11, n = w.src), "interactive" in w && t(1, i = w.interactive), "boxesAlpha" in w && t(2, o = w.boxesAlpha), "labelList" in w && t(3, a = w.labelList), "labelColors" in w && t(4, r = w.labelColors), "boxMinSize" in w && t(5, s = w.boxMinSize), "handleSize" in w && t(6, f = w.handleSize), "boxThickness" in w && t(7, u = w.boxThickness), "boxSelectedThickness" in w && t(8, c = w.boxSelectedThickness), "value" in w && t(0, d = w.value);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    6144) {
      t(9, _ = n), t(12, h = n);
      const w = n;
      Ec(w).then((p) => {
        h === w && t(9, _ = p);
      });
    }
  }, [
    d,
    i,
    o,
    a,
    r,
    s,
    f,
    u,
    c,
    _,
    m,
    n,
    h,
    b,
    g
  ];
}
class Qs extends a0 {
  constructor(e) {
    super(), d0(this, e, k0, p0, m0, {
      src: 11,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      boxSelectedThickness: 8,
      value: 0
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
  add_flush_callback: nl,
  append: tn,
  attr: fn,
  bind: ll,
  binding_callbacks: wn,
  bubble: Vl,
  check_outros: Nt,
  create_component: st,
  create_slot: C0,
  destroy_component: at,
  detach: pt,
  element: bn,
  empty: S0,
  get_all_dirty_from_scope: z0,
  get_slot_changes: q0,
  group_outros: Ot,
  init: M0,
  insert: kt,
  mount_component: rt,
  noop: E0,
  safe_not_equal: A0,
  space: jt,
  toggle_class: Uo,
  transition_in: W,
  transition_out: J,
  update_slot_base: L0
} = window.__gradio__svelte__internal, { createEventDispatcher: D0 } = window.__gradio__svelte__internal;
function No(l) {
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
      $$slots: { default: [T0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      st(e.$$.fragment);
    },
    m(n, i) {
      rt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      1024 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (W(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      at(e, n);
    }
  };
}
function T0(l) {
  let e, t;
  return e = new il({
    props: {
      Icon: mf,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      st(e.$$.fragment);
    },
    m(n, i) {
      rt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (W(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      at(e, n);
    }
  };
}
function Oo(l) {
  let e, t;
  return e = new zu({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[31]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[32]
  ), e.$on(
    "error",
    /*error_handler*/
    l[33]
  ), {
    c() {
      st(e.$$.fragment);
    },
    m(n, i) {
      rt(e, n, i), t = !0;
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
      t || (W(e.$$.fragment, n), t = !0);
    },
    o(n) {
      J(e.$$.fragment, n), t = !1;
    },
    d(n) {
      at(e, n);
    }
  };
}
function Xo(l) {
  let e, t, n;
  return t = new il({
    props: { Icon: ui, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[29]
  ), {
    c() {
      e = bn("div"), st(t.$$.fragment);
    },
    m(i, o) {
      kt(i, e, o), rt(t, e, null), n = !0;
    },
    p: E0,
    i(i) {
      n || (W(t.$$.fragment, i), n = !0);
    },
    o(i) {
      J(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && pt(e), at(t);
    }
  };
}
function Yo(l) {
  let e;
  const t = (
    /*#slots*/
    l[30].default
  ), n = C0(
    t,
    l,
    /*$$scope*/
    l[41],
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
      1024) && L0(
        n,
        t,
        i,
        /*$$scope*/
        i[41],
        e ? q0(
          t,
          /*$$scope*/
          i[41],
          o,
          null
        ) : z0(
          /*$$scope*/
          i[41]
        ),
        null
      );
    },
    i(i) {
      e || (W(n, i), e = !0);
    },
    o(i) {
      J(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function B0(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Yo(l)
  );
  return {
    c() {
      n && n.c(), e = S0();
    },
    m(i, o) {
      n && n.m(i, o), kt(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && W(n, 1)) : (n = Yo(i), n.c(), W(n, 1), n.m(e.parentNode, e)) : n && (Ot(), J(n, 1, 1, () => {
        n = null;
      }), Nt());
    },
    i(i) {
      t || (W(n), t = !0);
    },
    o(i) {
      J(n), t = !1;
    },
    d(i) {
      i && pt(e), n && n.d(i);
    }
  };
}
function Wo(l) {
  let e, t, n, i;
  function o(r) {
    l[38](r);
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
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[18]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (a.value = /*value*/
    l[1]), t = new Qs({ props: a }), wn.push(() => ll(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[39]
    ), {
      c() {
        e = bn("div"), st(t.$$.fragment), fn(e, "class", "image-frame svelte-1gjdske"), Uo(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, s) {
        kt(r, e, s), rt(t, e, null), i = !0;
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
        r[17]), s[0] & /*boxSelectedThickness*/
        262144 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[18]), s[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && s[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], nl(() => n = !1)), t.$set(f), (!i || s[0] & /*selectable*/
        32) && Uo(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (W(t.$$.fragment, r), i = !0);
      },
      o(r) {
        J(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && pt(e), at(t);
      }
    }
  );
}
function Vo(l) {
  let e, t, n;
  function i(a) {
    l[40](a);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*handle_clear*/
      l[26]
    ),
    handle_select: (
      /*handle_select_source*/
      l[28]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new Ou({ props: o }), wn.push(() => ll(e, "active_source", i)), {
      c() {
        st(e.$$.fragment);
      },
      m(a, r) {
        rt(e, a, r), n = !0;
      },
      p(a, r) {
        const s = {};
        r[0] & /*sources*/
        16 && (s.sources = /*sources*/
        a[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, s.active_source = /*active_source*/
        a[0], nl(() => t = !1)), e.$set(s);
      },
      i(a) {
        n || (W(e.$$.fragment, a), n = !0);
      },
      o(a) {
        J(e.$$.fragment, a), n = !1;
      },
      d(a) {
        at(e, a);
      }
    }
  );
}
function j0(l) {
  let e, t, n, i, o, a, r, s, f, u, c, d, _, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), m;
  e = new mr({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: ts,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && No(l)
  ), g = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Oo(l)
  ), w = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Xo(l)
  );
  function p(k) {
    l[35](k);
  }
  function C(k) {
    l[36](k);
  }
  let E = {
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
      l[19]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[20]
    ),
    stream_handler: (
      /*stream_handler*/
      l[21]
    ),
    $$slots: { default: [B0] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[22] !== void 0 && (E.uploading = /*uploading*/
  l[22]), /*dragging*/
  l[23] !== void 0 && (E.dragging = /*dragging*/
  l[23]), f = new v_({ props: E }), l[34](f), wn.push(() => ll(f, "uploading", p)), wn.push(() => ll(f, "dragging", C)), f.$on(
    "load",
    /*handle_upload*/
    l[25]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[37]
  );
  let v = (
    /*value*/
    l[1] !== null && Wo(l)
  ), z = h && Vo(l);
  return {
    c() {
      st(e.$$.fragment), t = jt(), n = bn("div"), b && b.c(), i = jt(), g && g.c(), o = jt(), w && w.c(), a = jt(), r = bn("div"), s = bn("div"), st(f.$$.fragment), d = jt(), v && v.c(), _ = jt(), z && z.c(), fn(n, "class", "icon-buttons svelte-1gjdske"), fn(s, "class", "upload-container svelte-1gjdske"), fn(r, "data-testid", "image"), fn(r, "class", "image-container svelte-1gjdske");
    },
    m(k, q) {
      rt(e, k, q), kt(k, t, q), kt(k, n, q), b && b.m(n, null), tn(n, i), g && g.m(n, null), tn(n, o), w && w.m(n, null), kt(k, a, q), kt(k, r, q), tn(r, s), rt(f, s, null), tn(s, d), v && v.m(s, null), tn(r, _), z && z.m(r, null), m = !0;
    },
    p(k, q) {
      const F = {};
      q[0] & /*show_label*/
      8 && (F.show_label = /*show_label*/
      k[3]), q[0] & /*label*/
      4 && (F.label = /*label*/
      k[2] || "Image Annotator"), e.$set(F), /*showDownloadButton*/
      k[10] && /*value*/
      k[1] !== null ? b ? (b.p(k, q), q[0] & /*showDownloadButton, value*/
      1026 && W(b, 1)) : (b = No(k), b.c(), W(b, 1), b.m(n, i)) : b && (Ot(), J(b, 1, 1, () => {
        b = null;
      }), Nt()), /*showShareButton*/
      k[9] && /*value*/
      k[1] !== null ? g ? (g.p(k, q), q[0] & /*showShareButton, value*/
      514 && W(g, 1)) : (g = Oo(k), g.c(), W(g, 1), g.m(n, o)) : g && (Ot(), J(g, 1, 1, () => {
        g = null;
      }), Nt()), /*showClearButton*/
      k[11] && /*value*/
      k[1] !== null && /*interactive*/
      k[7] ? w ? (w.p(k, q), q[0] & /*showClearButton, value, interactive*/
      2178 && W(w, 1)) : (w = Xo(k), w.c(), W(w, 1), w.m(n, null)) : w && (Ot(), J(w, 1, 1, () => {
        w = null;
      }), Nt());
      const j = {};
      q[0] & /*value*/
      2 && (j.hidden = /*value*/
      k[1] !== null), q[0] & /*active_source*/
      1 && (j.filetype = /*active_source*/
      k[0] === "clipboard" ? "clipboard" : "image/*"), q[0] & /*root*/
      64 && (j.root = /*root*/
      k[6]), q[0] & /*max_file_size*/
      524288 && (j.max_file_size = /*max_file_size*/
      k[19]), q[0] & /*sources*/
      16 && (j.disable_click = !/*sources*/
      k[4].includes("upload")), q[0] & /*cli_upload*/
      1048576 && (j.upload = /*cli_upload*/
      k[20]), q[0] & /*stream_handler*/
      2097152 && (j.stream_handler = /*stream_handler*/
      k[21]), q[0] & /*value*/
      2 | q[1] & /*$$scope*/
      1024 && (j.$$scope = { dirty: q, ctx: k }), !u && q[0] & /*uploading*/
      4194304 && (u = !0, j.uploading = /*uploading*/
      k[22], nl(() => u = !1)), !c && q[0] & /*dragging*/
      8388608 && (c = !0, j.dragging = /*dragging*/
      k[23], nl(() => c = !1)), f.$set(j), /*value*/
      k[1] !== null ? v ? (v.p(k, q), q[0] & /*value*/
      2 && W(v, 1)) : (v = Wo(k), v.c(), W(v, 1), v.m(s, null)) : v && (Ot(), J(v, 1, 1, () => {
        v = null;
      }), Nt()), q[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (k[4].length > 1 || /*sources*/
      k[4].includes("clipboard")) && /*value*/
      k[1] === null && /*interactive*/
      k[7]), h ? z ? (z.p(k, q), q[0] & /*sources, value, interactive*/
      146 && W(z, 1)) : (z = Vo(k), z.c(), W(z, 1), z.m(r, null)) : z && (Ot(), J(z, 1, 1, () => {
        z = null;
      }), Nt());
    },
    i(k) {
      m || (W(e.$$.fragment, k), W(b), W(g), W(w), W(f.$$.fragment, k), W(v), W(z), m = !0);
    },
    o(k) {
      J(e.$$.fragment, k), J(b), J(g), J(w), J(f.$$.fragment, k), J(v), J(z), m = !1;
    },
    d(k) {
      k && (pt(t), pt(n), pt(a), pt(r)), at(e, k), b && b.d(), g && g.d(), w && w.d(), l[34](null), at(f), v && v.d(), z && z.d();
    }
  };
}
function I0(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(y, ee, ue, pe) {
    function A(B) {
      return B instanceof ue ? B : new ue(function(O) {
        O(B);
      });
    }
    return new (ue || (ue = Promise))(function(B, O) {
      function V(Se) {
        try {
          ce(pe.next(Se));
        } catch (Jt) {
          O(Jt);
        }
      }
      function Ee(Se) {
        try {
          ce(pe.throw(Se));
        } catch (Jt) {
          O(Jt);
        }
      }
      function ce(Se) {
        Se.done ? B(Se.value) : A(Se.value).then(V, Ee);
      }
      ce((pe = pe.apply(y, ee || [])).next());
    });
  };
  let { value: a } = e, { label: r = void 0 } = e, { show_label: s } = e, { sources: f = ["upload", "clipboard"] } = e, { selectable: u = !1 } = e, { root: c } = e, { interactive: d } = e, { i18n: _ } = e, { showShareButton: h } = e, { showDownloadButton: m } = e, { showClearButton: b } = e, { boxesAlpha: g } = e, { labelList: w } = e, { labelColors: p } = e, { boxMinSize: C } = e, { handleSize: E } = e, { boxThickness: v } = e, { boxSelectedThickness: z } = e, { max_file_size: k = null } = e, { cli_upload: q } = e, { stream_handler: F } = e, j, D = !1, { active_source: N = null } = e;
  function K({ detail: y }) {
    t(1, a = new v0()), t(1, a.image = y, a), X("upload");
  }
  function $() {
    re(), X("clear"), X("change");
  }
  const X = D0();
  let se = !1;
  function we(y) {
    return o(this, void 0, void 0, function* () {
      switch (y) {
        case "clipboard":
          j.paste_clipboard();
          break;
      }
    });
  }
  function re() {
    t(1, a = null);
  }
  const T = async (y) => y === null ? "" : `<img src="${await _u(y.image)}" />`;
  function ae(y) {
    Vl.call(this, l, y);
  }
  function fe(y) {
    Vl.call(this, l, y);
  }
  function Ye(y) {
    wn[y ? "unshift" : "push"](() => {
      j = y, t(24, j);
    });
  }
  function We(y) {
    D = y, t(22, D);
  }
  function L(y) {
    se = y, t(23, se);
  }
  function M(y) {
    Vl.call(this, l, y);
  }
  function S(y) {
    a = y, t(1, a);
  }
  const H = () => X("change");
  function G(y) {
    N = y, t(0, N), t(4, f);
  }
  return l.$$set = (y) => {
    "value" in y && t(1, a = y.value), "label" in y && t(2, r = y.label), "show_label" in y && t(3, s = y.show_label), "sources" in y && t(4, f = y.sources), "selectable" in y && t(5, u = y.selectable), "root" in y && t(6, c = y.root), "interactive" in y && t(7, d = y.interactive), "i18n" in y && t(8, _ = y.i18n), "showShareButton" in y && t(9, h = y.showShareButton), "showDownloadButton" in y && t(10, m = y.showDownloadButton), "showClearButton" in y && t(11, b = y.showClearButton), "boxesAlpha" in y && t(12, g = y.boxesAlpha), "labelList" in y && t(13, w = y.labelList), "labelColors" in y && t(14, p = y.labelColors), "boxMinSize" in y && t(15, C = y.boxMinSize), "handleSize" in y && t(16, E = y.handleSize), "boxThickness" in y && t(17, v = y.boxThickness), "boxSelectedThickness" in y && t(18, z = y.boxSelectedThickness), "max_file_size" in y && t(19, k = y.max_file_size), "cli_upload" in y && t(20, q = y.cli_upload), "stream_handler" in y && t(21, F = y.stream_handler), "active_source" in y && t(0, N = y.active_source), "$$scope" in y && t(41, i = y.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    4194304 && D && re(), l.$$.dirty[0] & /*dragging*/
    8388608 && X("drag", se), l.$$.dirty[0] & /*active_source, sources*/
    17 && !N && f && t(0, N = f[0]);
  }, [
    N,
    a,
    r,
    s,
    f,
    u,
    c,
    d,
    _,
    h,
    m,
    b,
    g,
    w,
    p,
    C,
    E,
    v,
    z,
    k,
    q,
    F,
    D,
    se,
    j,
    K,
    $,
    X,
    we,
    re,
    n,
    T,
    ae,
    fe,
    Ye,
    We,
    L,
    M,
    S,
    H,
    G,
    i
  ];
}
class R0 extends y0 {
  constructor(e) {
    super(), M0(
      this,
      e,
      I0,
      j0,
      A0,
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
        boxSelectedThickness: 18,
        max_file_size: 19,
        cli_upload: 20,
        stream_handler: 21,
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
  toggle_class: et,
  transition_in: Vn,
  transition_out: fi
} = window.__gradio__svelte__internal;
function Po(l) {
  let e, t;
  return e = new Qs({
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
      t || (Vn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      O0(e, n);
    }
  };
}
function G0(l) {
  let e, t, n = (
    /*value*/
    l[0] && Po(l)
  );
  return {
    c() {
      e = Y0("div"), n && n.c(), H0(e, "class", "container svelte-1sgcyba"), et(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), et(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), et(
        e,
        "selected",
        /*selected*/
        l[3]
      ), et(
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
      1 && Vn(n, 1)) : (n = Po(i), n.c(), Vn(n, 1), n.m(e, null)) : n && (W0(), fi(n, 1, 1, () => {
        n = null;
      }), U0()), (!t || o & /*type*/
      4) && et(
        e,
        "table",
        /*type*/
        i[2] === "table"
      ), (!t || o & /*type*/
      4) && et(
        e,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), (!t || o & /*selected*/
      8) && et(
        e,
        "selected",
        /*selected*/
        i[3]
      ), (!t || o & /*value*/
      1) && et(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    i(i) {
      t || (Vn(n), t = !0);
    },
    o(i) {
      fi(n), t = !1;
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
  add_flush_callback: Zo,
  assign: x0,
  bind: Ko,
  binding_callbacks: Go,
  check_outros: $0,
  create_component: St,
  destroy_component: zt,
  detach: xs,
  empty: e1,
  flush: Y,
  get_spread_object: t1,
  get_spread_update: n1,
  group_outros: l1,
  init: i1,
  insert: $s,
  mount_component: qt,
  safe_not_equal: o1,
  space: s1,
  transition_in: Ke,
  transition_out: Ge
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
      St(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      256 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ke(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function r1(l) {
  let e, t;
  return e = new as({
    props: {
      i18n: (
        /*gradio*/
        l[26].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      St(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      67108864 && (o.i18n = /*gradio*/
      n[26].i18n), e.$set(o);
    },
    i(n) {
      t || (Ke(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function f1(l) {
  let e, t;
  return e = new as({
    props: {
      i18n: (
        /*gradio*/
        l[26].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      St(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      67108864 && (o.i18n = /*gradio*/
      n[26].i18n), e.$set(o);
    },
    i(n) {
      t || (Ke(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function u1(l) {
  let e, t;
  return e = new ts({}), {
    c() {
      St(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    i(n) {
      t || (Ke(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function c1(l) {
  let e, t, n, i;
  const o = [f1, r1, a1], a = [];
  function r(s, f) {
    return (
      /*active_source*/
      s[28] === "upload" ? 0 : (
        /*active_source*/
        s[28] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = a[e] = o[e](l), {
    c() {
      t.c(), n = e1();
    },
    m(s, f) {
      a[e].m(s, f), $s(s, n, f), i = !0;
    },
    p(s, f) {
      let u = e;
      e = r(s), e === u ? a[e].p(s, f) : (l1(), Ge(a[u], 1, 1, () => {
        a[u] = null;
      }), $0(), t = a[e], t ? t.p(s, f) : (t = a[e] = o[e](s), t.c()), Ke(t, 1), t.m(n.parentNode, n));
    },
    i(s) {
      i || (Ke(t), i = !0);
    },
    o(s) {
      Ge(t), i = !1;
    },
    d(s) {
      s && xs(n), a[e].d(s);
    }
  };
}
function _1(l) {
  let e, t, n, i, o, a;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[26].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[26].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let s = {};
  for (let d = 0; d < r.length; d += 1)
    s = x0(s, r[d]);
  e = new Sc({ props: s });
  function f(d) {
    l[29](d);
  }
  function u(d) {
    l[30](d);
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
      l[26].i18n
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
      l[26].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[26].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[26].client.stream
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
    $$slots: { default: [c1] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[28] !== void 0 && (c.active_source = /*active_source*/
    l[28]), /*value*/
    l[0] !== void 0 && (c.value = /*value*/
    l[0]), n = new R0({ props: c }), Go.push(() => Ko(n, "active_source", f)), Go.push(() => Ko(n, "value", u)), n.$on(
      "change",
      /*change_handler*/
      l[31]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[32]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[33]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[34]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[35]
    ), n.$on(
      "select",
      /*select_handler*/
      l[36]
    ), n.$on(
      "share",
      /*share_handler*/
      l[37]
    ), n.$on(
      "error",
      /*error_handler*/
      l[38]
    ), {
      c() {
        St(e.$$.fragment), t = s1(), St(n.$$.fragment);
      },
      m(d, _) {
        qt(e, d, _), $s(d, t, _), qt(n, d, _), a = !0;
      },
      p(d, _) {
        const h = _[0] & /*gradio, loading_status*/
        67108866 ? n1(r, [
          _[0] & /*gradio*/
          67108864 && {
            autoscroll: (
              /*gradio*/
              d[26].autoscroll
            )
          },
          _[0] & /*gradio*/
          67108864 && { i18n: (
            /*gradio*/
            d[26].i18n
          ) },
          _[0] & /*loading_status*/
          2 && t1(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(h);
        const m = {};
        _[0] & /*_selectable*/
        1024 && (m.selectable = /*_selectable*/
        d[10]), _[0] & /*root*/
        128 && (m.root = /*root*/
        d[7]), _[0] & /*sources*/
        16384 && (m.sources = /*sources*/
        d[14]), _[0] & /*interactive*/
        262144 && (m.interactive = /*interactive*/
        d[18]), _[0] & /*show_download_button*/
        32768 && (m.showDownloadButton = /*show_download_button*/
        d[15]), _[0] & /*show_share_button*/
        65536 && (m.showShareButton = /*show_share_button*/
        d[16]), _[0] & /*show_clear_button*/
        131072 && (m.showClearButton = /*show_clear_button*/
        d[17]), _[0] & /*gradio*/
        67108864 && (m.i18n = /*gradio*/
        d[26].i18n), _[0] & /*boxes_alpha*/
        524288 && (m.boxesAlpha = /*boxes_alpha*/
        d[19]), _[0] & /*label_list*/
        1048576 && (m.labelList = /*label_list*/
        d[20]), _[0] & /*label_colors*/
        2097152 && (m.labelColors = /*label_colors*/
        d[21]), _[0] & /*box_min_size*/
        4194304 && (m.boxMinSize = /*box_min_size*/
        d[22]), _[0] & /*label*/
        32 && (m.label = /*label*/
        d[5]), _[0] & /*show_label*/
        64 && (m.show_label = /*show_label*/
        d[6]), _[0] & /*gradio*/
        67108864 && (m.max_file_size = /*gradio*/
        d[26].max_file_size), _[0] & /*gradio*/
        67108864 && (m.cli_upload = /*gradio*/
        d[26].client.upload), _[0] & /*gradio*/
        67108864 && (m.stream_handler = /*gradio*/
        d[26].client.stream), _[0] & /*handle_size*/
        8388608 && (m.handleSize = /*handle_size*/
        d[23]), _[0] & /*box_thickness*/
        16777216 && (m.boxThickness = /*box_thickness*/
        d[24]), _[0] & /*box_selected_thickness*/
        33554432 && (m.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), _[0] & /*gradio, active_source*/
        335544320 | _[1] & /*$$scope*/
        256 && (m.$$scope = { dirty: _, ctx: d }), !i && _[0] & /*active_source*/
        268435456 && (i = !0, m.active_source = /*active_source*/
        d[28], Zo(() => i = !1)), !o && _[0] & /*value*/
        1 && (o = !0, m.value = /*value*/
        d[0], Zo(() => o = !1)), n.$set(m);
      },
      i(d) {
        a || (Ke(e.$$.fragment, d), Ke(n.$$.fragment, d), a = !0);
      },
      o(d) {
        Ge(e.$$.fragment, d), Ge(n.$$.fragment, d), a = !1;
      },
      d(d) {
        d && xs(t), zt(e, d), zt(n, d);
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
        l[27] ? "focus" : "base"
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
      St(e.$$.fragment);
    },
    m(n, i) {
      qt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[0] & /*dragging*/
      134217728 && (o.border_mode = /*dragging*/
      n[27] ? "focus" : "base"), i[0] & /*elem_id*/
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
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, active_source, value, dragging, loading_status*/
      536855779 | i[1] & /*$$scope*/
      256 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ke(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ge(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function h1(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: a = null } = e, { label: r } = e, { show_label: s } = e, { root: f } = e, { height: u } = e, { width: c } = e, { _selectable: d = !1 } = e, { container: _ = !0 } = e, { scale: h = null } = e, { min_width: m = void 0 } = e, { loading_status: b } = e, { sources: g = ["upload", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: p } = e, { show_clear_button: C } = e, { interactive: E } = e, { boxes_alpha: v } = e, { label_list: z } = e, { label_colors: k } = e, { box_min_size: q } = e, { handle_size: F } = e, { box_thickness: j } = e, { box_selected_thickness: D } = e, { gradio: N } = e, K, $ = null;
  function X(M) {
    $ = M, t(28, $);
  }
  function se(M) {
    a = M, t(0, a);
  }
  const we = () => N.dispatch("change"), re = () => N.dispatch("edit"), T = () => {
    N.dispatch("clear");
  }, ae = ({ detail: M }) => t(27, K = M), fe = () => N.dispatch("upload"), Ye = ({ detail: M }) => N.dispatch("select", M), We = ({ detail: M }) => N.dispatch("share", M), L = ({ detail: M }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), N.dispatch("error", M);
  };
  return l.$$set = (M) => {
    "elem_id" in M && t(2, n = M.elem_id), "elem_classes" in M && t(3, i = M.elem_classes), "visible" in M && t(4, o = M.visible), "value" in M && t(0, a = M.value), "label" in M && t(5, r = M.label), "show_label" in M && t(6, s = M.show_label), "root" in M && t(7, f = M.root), "height" in M && t(8, u = M.height), "width" in M && t(9, c = M.width), "_selectable" in M && t(10, d = M._selectable), "container" in M && t(11, _ = M.container), "scale" in M && t(12, h = M.scale), "min_width" in M && t(13, m = M.min_width), "loading_status" in M && t(1, b = M.loading_status), "sources" in M && t(14, g = M.sources), "show_download_button" in M && t(15, w = M.show_download_button), "show_share_button" in M && t(16, p = M.show_share_button), "show_clear_button" in M && t(17, C = M.show_clear_button), "interactive" in M && t(18, E = M.interactive), "boxes_alpha" in M && t(19, v = M.boxes_alpha), "label_list" in M && t(20, z = M.label_list), "label_colors" in M && t(21, k = M.label_colors), "box_min_size" in M && t(22, q = M.box_min_size), "handle_size" in M && t(23, F = M.handle_size), "box_thickness" in M && t(24, j = M.box_thickness), "box_selected_thickness" in M && t(25, D = M.box_selected_thickness), "gradio" in M && t(26, N = M.gradio);
  }, [
    a,
    b,
    n,
    i,
    o,
    r,
    s,
    f,
    u,
    c,
    d,
    _,
    h,
    m,
    g,
    w,
    p,
    C,
    E,
    v,
    z,
    k,
    q,
    F,
    j,
    D,
    N,
    K,
    $,
    X,
    se,
    we,
    re,
    T,
    ae,
    fe,
    Ye,
    We,
    L
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
        gradio: 26
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Y();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Y();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Y();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Y();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Y();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Y();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Y();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Y();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Y();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Y();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Y();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Y();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Y();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Y();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Y();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Y();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Y();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Y();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Y();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Y();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Y();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Y();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Y();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Y();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Y();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Y();
  }
  get gradio() {
    return this.$$.ctx[26];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Y();
  }
}
export {
  p1 as BaseExample,
  k1 as default
};
