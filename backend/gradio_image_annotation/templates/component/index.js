const {
  SvelteComponent: ha,
  assign: ma,
  create_slot: ga,
  detach: ba,
  element: pa,
  get_all_dirty_from_scope: wa,
  get_slot_changes: va,
  get_spread_update: ka,
  init: ya,
  insert: Sa,
  safe_not_equal: Ca,
  set_dynamic_element_data: Di,
  set_style: Me,
  toggle_class: et,
  transition_in: uo,
  transition_out: fo,
  update_slot_base: za
} = window.__gradio__svelte__internal;
function qa(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[18].default
  ), s = ga(
    i,
    n,
    /*$$scope*/
    n[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      n[7]
    ) },
    { id: (
      /*elem_id*/
      n[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[3].join(" ") + " svelte-1t38q2d"
    }
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = ma(r, o[a]);
  return {
    c() {
      e = pa(
        /*tag*/
        n[14]
      ), s && s.c(), Di(
        /*tag*/
        n[14]
      )(e, r), et(
        e,
        "hidden",
        /*visible*/
        n[10] === !1
      ), et(
        e,
        "padded",
        /*padding*/
        n[6]
      ), et(
        e,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), et(e, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), Me(
        e,
        "height",
        /*get_dimension*/
        n[15](
          /*height*/
          n[0]
        )
      ), Me(e, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : (
        /*get_dimension*/
        n[15](
          /*width*/
          n[1]
        )
      )), Me(
        e,
        "border-style",
        /*variant*/
        n[4]
      ), Me(
        e,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), Me(
        e,
        "flex-grow",
        /*scale*/
        n[12]
      ), Me(e, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), Me(e, "border-width", "var(--block-border-width)");
    },
    m(a, u) {
      Sa(a, e, u), s && s.m(e, null), l = !0;
    },
    p(a, u) {
      s && s.p && (!l || u & /*$$scope*/
      131072) && za(
        s,
        i,
        a,
        /*$$scope*/
        a[17],
        l ? va(
          i,
          /*$$scope*/
          a[17],
          u,
          null
        ) : wa(
          /*$$scope*/
          a[17]
        ),
        null
      ), Di(
        /*tag*/
        a[14]
      )(e, r = ka(o, [
        (!l || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!l || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!l || u & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-1t38q2d")) && { class: t }
      ])), et(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), et(
        e,
        "padded",
        /*padding*/
        a[6]
      ), et(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), et(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), u & /*height*/
      1 && Me(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), u & /*width*/
      2 && Me(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), u & /*variant*/
      16 && Me(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), u & /*allow_overflow*/
      2048 && Me(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && Me(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), u & /*min_width*/
      8192 && Me(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      l || (uo(s, a), l = !0);
    },
    o(a) {
      fo(s, a), l = !1;
    },
    d(a) {
      a && ba(e), s && s.d(a);
    }
  };
}
function Ea(n) {
  let e, t = (
    /*tag*/
    n[14] && qa(n)
  );
  return {
    c() {
      t && t.c();
    },
    m(l, i) {
      t && t.m(l, i), e = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && t.p(l, i);
    },
    i(l) {
      e || (uo(t, l), e = !0);
    },
    o(l) {
      fo(t, l), e = !1;
    },
    d(l) {
      t && t.d(l);
    }
  };
}
function Da(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: u = "solid" } = e, { border_mode: f = "base" } = e, { padding: _ = !0 } = e, { type: d = "normal" } = e, { test_id: c = void 0 } = e, { explicit_call: h = !1 } = e, { container: b = !0 } = e, { visible: g = !0 } = e, { allow_overflow: m = !0 } = e, { scale: v = null } = e, { min_width: p = 0 } = e, C = d === "fieldset" ? "fieldset" : "div";
  const M = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return n.$$set = (k) => {
    "height" in k && t(0, s = k.height), "width" in k && t(1, o = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, u = k.variant), "border_mode" in k && t(5, f = k.border_mode), "padding" in k && t(6, _ = k.padding), "type" in k && t(16, d = k.type), "test_id" in k && t(7, c = k.test_id), "explicit_call" in k && t(8, h = k.explicit_call), "container" in k && t(9, b = k.container), "visible" in k && t(10, g = k.visible), "allow_overflow" in k && t(11, m = k.allow_overflow), "scale" in k && t(12, v = k.scale), "min_width" in k && t(13, p = k.min_width), "$$scope" in k && t(17, i = k.$$scope);
  }, [
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    c,
    h,
    b,
    g,
    m,
    v,
    p,
    C,
    M,
    d,
    i,
    l
  ];
}
class Aa extends ha {
  constructor(e) {
    super(), ya(this, e, Da, Ea, Ca, {
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
  SvelteComponent: Ma,
  attr: ja,
  create_slot: La,
  detach: Ba,
  element: Ta,
  get_all_dirty_from_scope: Na,
  get_slot_changes: Oa,
  init: Ua,
  insert: Ia,
  safe_not_equal: Ra,
  transition_in: Fa,
  transition_out: Ha,
  update_slot_base: Pa
} = window.__gradio__svelte__internal;
function Wa(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = La(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = Ta("div"), i && i.c(), ja(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Ia(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      i && i.p && (!t || o & /*$$scope*/
      1) && Pa(
        i,
        l,
        s,
        /*$$scope*/
        s[0],
        t ? Oa(
          l,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Na(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Fa(i, s), t = !0);
    },
    o(s) {
      Ha(i, s), t = !1;
    },
    d(s) {
      s && Ba(e), i && i.d(s);
    }
  };
}
function Xa(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, l];
}
class Ya extends Ma {
  constructor(e) {
    super(), Ua(this, e, Xa, Wa, Ra, {});
  }
}
const {
  SvelteComponent: Va,
  attr: Ai,
  check_outros: Za,
  create_component: Ga,
  create_slot: Ja,
  destroy_component: Ka,
  detach: Xn,
  element: Qa,
  empty: xa,
  get_all_dirty_from_scope: $a,
  get_slot_changes: er,
  group_outros: tr,
  init: nr,
  insert: Yn,
  mount_component: lr,
  safe_not_equal: ir,
  set_data: sr,
  space: or,
  text: ar,
  toggle_class: Bt,
  transition_in: un,
  transition_out: Vn,
  update_slot_base: rr
} = window.__gradio__svelte__internal;
function Mi(n) {
  let e, t;
  return e = new Ya({
    props: {
      $$slots: { default: [ur] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ga(e.$$.fragment);
    },
    m(l, i) {
      lr(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (un(e.$$.fragment, l), t = !0);
    },
    o(l) {
      Vn(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Ka(e, l);
    }
  };
}
function ur(n) {
  let e;
  return {
    c() {
      e = ar(
        /*info*/
        n[1]
      );
    },
    m(t, l) {
      Yn(t, e, l);
    },
    p(t, l) {
      l & /*info*/
      2 && sr(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Xn(e);
    }
  };
}
function fr(n) {
  let e, t, l, i;
  const s = (
    /*#slots*/
    n[2].default
  ), o = Ja(
    s,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let r = (
    /*info*/
    n[1] && Mi(n)
  );
  return {
    c() {
      e = Qa("span"), o && o.c(), t = or(), r && r.c(), l = xa(), Ai(e, "data-testid", "block-info"), Ai(e, "class", "svelte-22c38v"), Bt(e, "sr-only", !/*show_label*/
      n[0]), Bt(e, "hide", !/*show_label*/
      n[0]), Bt(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(a, u) {
      Yn(a, e, u), o && o.m(e, null), Yn(a, t, u), r && r.m(a, u), Yn(a, l, u), i = !0;
    },
    p(a, [u]) {
      o && o.p && (!i || u & /*$$scope*/
      8) && rr(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        i ? er(
          s,
          /*$$scope*/
          a[3],
          u,
          null
        ) : $a(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || u & /*show_label*/
      1) && Bt(e, "sr-only", !/*show_label*/
      a[0]), (!i || u & /*show_label*/
      1) && Bt(e, "hide", !/*show_label*/
      a[0]), (!i || u & /*info*/
      2) && Bt(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, u), u & /*info*/
      2 && un(r, 1)) : (r = Mi(a), r.c(), un(r, 1), r.m(l.parentNode, l)) : r && (tr(), Vn(r, 1, 1, () => {
        r = null;
      }), Za());
    },
    i(a) {
      i || (un(o, a), un(r), i = !0);
    },
    o(a) {
      Vn(o, a), Vn(r), i = !1;
    },
    d(a) {
      a && (Xn(e), Xn(t), Xn(l)), o && o.d(a), r && r.d(a);
    }
  };
}
function cr(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return n.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [s, o, l, i];
}
class co extends Va {
  constructor(e) {
    super(), nr(this, e, cr, fr, ir, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: _r,
  append: wl,
  attr: Dn,
  create_component: dr,
  destroy_component: hr,
  detach: mr,
  element: ji,
  init: gr,
  insert: br,
  mount_component: pr,
  safe_not_equal: wr,
  set_data: vr,
  space: kr,
  text: yr,
  toggle_class: tt,
  transition_in: Sr,
  transition_out: Cr
} = window.__gradio__svelte__internal;
function zr(n) {
  let e, t, l, i, s, o;
  return l = new /*Icon*/
  n[1]({}), {
    c() {
      e = ji("label"), t = ji("span"), dr(l.$$.fragment), i = kr(), s = yr(
        /*label*/
        n[0]
      ), Dn(t, "class", "svelte-9gxdi0"), Dn(e, "for", ""), Dn(e, "data-testid", "block-label"), Dn(e, "class", "svelte-9gxdi0"), tt(e, "hide", !/*show_label*/
      n[2]), tt(e, "sr-only", !/*show_label*/
      n[2]), tt(
        e,
        "float",
        /*float*/
        n[4]
      ), tt(
        e,
        "hide-label",
        /*disable*/
        n[3]
      );
    },
    m(r, a) {
      br(r, e, a), wl(e, t), pr(l, t, null), wl(e, i), wl(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && vr(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && tt(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && tt(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && tt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && tt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Sr(l.$$.fragment, r), o = !0);
    },
    o(r) {
      Cr(l.$$.fragment, r), o = !1;
    },
    d(r) {
      r && mr(e), hr(l);
    }
  };
}
function qr(n, e, t) {
  let { label: l = null } = e, { Icon: i } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return n.$$set = (a) => {
    "label" in a && t(0, l = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [l, i, s, o, r];
}
class Er extends _r {
  constructor(e) {
    super(), gr(this, e, qr, zr, wr, {
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
  append: ei,
  attr: Je,
  bubble: Ar,
  create_component: Mr,
  destroy_component: jr,
  detach: _o,
  element: ti,
  init: Lr,
  insert: ho,
  listen: Br,
  mount_component: Tr,
  safe_not_equal: Nr,
  set_data: Or,
  set_style: An,
  space: Ur,
  text: Ir,
  toggle_class: Te,
  transition_in: Rr,
  transition_out: Fr
} = window.__gradio__svelte__internal;
function Li(n) {
  let e, t;
  return {
    c() {
      e = ti("span"), t = Ir(
        /*label*/
        n[1]
      ), Je(e, "class", "svelte-lpi64a");
    },
    m(l, i) {
      ho(l, e, i), ei(e, t);
    },
    p(l, i) {
      i & /*label*/
      2 && Or(
        t,
        /*label*/
        l[1]
      );
    },
    d(l) {
      l && _o(e);
    }
  };
}
function Hr(n) {
  let e, t, l, i, s, o, r, a = (
    /*show_label*/
    n[2] && Li(n)
  );
  return i = new /*Icon*/
  n[0]({}), {
    c() {
      e = ti("button"), a && a.c(), t = Ur(), l = ti("div"), Mr(i.$$.fragment), Je(l, "class", "svelte-lpi64a"), Te(
        l,
        "small",
        /*size*/
        n[4] === "small"
      ), Te(
        l,
        "large",
        /*size*/
        n[4] === "large"
      ), e.disabled = /*disabled*/
      n[7], Je(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), Je(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), Je(
        e,
        "title",
        /*label*/
        n[1]
      ), Je(e, "class", "svelte-lpi64a"), Te(
        e,
        "pending",
        /*pending*/
        n[3]
      ), Te(
        e,
        "padded",
        /*padded*/
        n[5]
      ), Te(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), Te(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), An(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), An(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(u, f) {
      ho(u, e, f), a && a.m(e, null), ei(e, t), ei(e, l), Tr(i, l, null), s = !0, o || (r = Br(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), o = !0);
    },
    p(u, [f]) {
      /*show_label*/
      u[2] ? a ? a.p(u, f) : (a = Li(u), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || f & /*size*/
      16) && Te(
        l,
        "small",
        /*size*/
        u[4] === "small"
      ), (!s || f & /*size*/
      16) && Te(
        l,
        "large",
        /*size*/
        u[4] === "large"
      ), (!s || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      u[7]), (!s || f & /*label*/
      2) && Je(
        e,
        "aria-label",
        /*label*/
        u[1]
      ), (!s || f & /*hasPopup*/
      256) && Je(
        e,
        "aria-haspopup",
        /*hasPopup*/
        u[8]
      ), (!s || f & /*label*/
      2) && Je(
        e,
        "title",
        /*label*/
        u[1]
      ), (!s || f & /*pending*/
      8) && Te(
        e,
        "pending",
        /*pending*/
        u[3]
      ), (!s || f & /*padded*/
      32) && Te(
        e,
        "padded",
        /*padded*/
        u[5]
      ), (!s || f & /*highlight*/
      64) && Te(
        e,
        "highlight",
        /*highlight*/
        u[6]
      ), (!s || f & /*transparent*/
      512) && Te(
        e,
        "transparent",
        /*transparent*/
        u[9]
      ), f & /*disabled, _color*/
      2176 && An(e, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && An(e, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      s || (Rr(i.$$.fragment, u), s = !0);
    },
    o(u) {
      Fr(i.$$.fragment, u), s = !1;
    },
    d(u) {
      u && _o(e), a && a.d(), jr(i), o = !1, r();
    }
  };
}
function Pr(n, e, t) {
  let l, { Icon: i } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: u = !0 } = e, { highlight: f = !1 } = e, { disabled: _ = !1 } = e, { hasPopup: d = !1 } = e, { color: c = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: b = "var(--background-fill-primary)" } = e;
  function g(m) {
    Ar.call(this, n, m);
  }
  return n.$$set = (m) => {
    "Icon" in m && t(0, i = m.Icon), "label" in m && t(1, s = m.label), "show_label" in m && t(2, o = m.show_label), "pending" in m && t(3, r = m.pending), "size" in m && t(4, a = m.size), "padded" in m && t(5, u = m.padded), "highlight" in m && t(6, f = m.highlight), "disabled" in m && t(7, _ = m.disabled), "hasPopup" in m && t(8, d = m.hasPopup), "color" in m && t(12, c = m.color), "transparent" in m && t(9, h = m.transparent), "background" in m && t(10, b = m.background);
  }, n.$$.update = () => {
    n.$$.dirty & /*highlight, color*/
    4160 && t(11, l = f ? "var(--color-accent)" : c);
  }, [
    i,
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    d,
    h,
    b,
    l,
    c,
    g
  ];
}
class pi extends Dr {
  constructor(e) {
    super(), Lr(this, e, Pr, Hr, Nr, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: Wr,
  append: Xr,
  attr: vl,
  binding_callbacks: Yr,
  create_slot: Vr,
  detach: Zr,
  element: Bi,
  get_all_dirty_from_scope: Gr,
  get_slot_changes: Jr,
  init: Kr,
  insert: Qr,
  safe_not_equal: xr,
  toggle_class: nt,
  transition_in: $r,
  transition_out: eu,
  update_slot_base: tu
} = window.__gradio__svelte__internal;
function nu(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[5].default
  ), s = Vr(
    i,
    n,
    /*$$scope*/
    n[4],
    null
  );
  return {
    c() {
      e = Bi("div"), t = Bi("div"), s && s.c(), vl(t, "class", "icon svelte-3w3rth"), vl(e, "class", "empty svelte-3w3rth"), vl(e, "aria-label", "Empty value"), nt(
        e,
        "small",
        /*size*/
        n[0] === "small"
      ), nt(
        e,
        "large",
        /*size*/
        n[0] === "large"
      ), nt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        n[1]
      ), nt(
        e,
        "small_parent",
        /*parent_height*/
        n[3]
      );
    },
    m(o, r) {
      Qr(o, e, r), Xr(e, t), s && s.m(t, null), n[6](e), l = !0;
    },
    p(o, [r]) {
      s && s.p && (!l || r & /*$$scope*/
      16) && tu(
        s,
        i,
        o,
        /*$$scope*/
        o[4],
        l ? Jr(
          i,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Gr(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!l || r & /*size*/
      1) && nt(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!l || r & /*size*/
      1) && nt(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!l || r & /*unpadded_box*/
      2) && nt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!l || r & /*parent_height*/
      8) && nt(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      l || ($r(s, o), l = !0);
    },
    o(o) {
      eu(s, o), l = !1;
    },
    d(o) {
      o && Zr(e), s && s.d(o), n[6](null);
    }
  };
}
function lu(n, e, t) {
  let l, { $$slots: i = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function u(_) {
    var d;
    if (!_)
      return !1;
    const { height: c } = _.getBoundingClientRect(), { height: h } = ((d = _.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: c };
    return c > h + 2;
  }
  function f(_) {
    Yr[_ ? "unshift" : "push"](() => {
      a = _, t(2, a);
    });
  }
  return n.$$set = (_) => {
    "size" in _ && t(0, o = _.size), "unpadded_box" in _ && t(1, r = _.unpadded_box), "$$scope" in _ && t(4, s = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*el*/
    4 && t(3, l = u(a));
  }, [o, r, a, l, s, i, f];
}
class iu extends Wr {
  constructor(e) {
    super(), Kr(this, e, lu, nu, xr, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: su,
  append: kl,
  attr: Ue,
  detach: ou,
  init: au,
  insert: ru,
  noop: yl,
  safe_not_equal: uu,
  set_style: Pe,
  svg_element: Mn
} = window.__gradio__svelte__internal;
function fu(n) {
  let e, t, l, i;
  return {
    c() {
      e = Mn("svg"), t = Mn("g"), l = Mn("path"), i = Mn("path"), Ue(l, "d", "M18,6L6.087,17.913"), Pe(l, "fill", "none"), Pe(l, "fill-rule", "nonzero"), Pe(l, "stroke-width", "2px"), Ue(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ue(i, "d", "M4.364,4.364L19.636,19.636"), Pe(i, "fill", "none"), Pe(i, "fill-rule", "nonzero"), Pe(i, "stroke-width", "2px"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "version", "1.1"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ue(e, "xml:space", "preserve"), Ue(e, "stroke", "currentColor"), Pe(e, "fill-rule", "evenodd"), Pe(e, "clip-rule", "evenodd"), Pe(e, "stroke-linecap", "round"), Pe(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      ru(s, e, o), kl(e, t), kl(t, l), kl(e, i);
    },
    p: yl,
    i: yl,
    o: yl,
    d(s) {
      s && ou(e);
    }
  };
}
class mo extends su {
  constructor(e) {
    super(), au(this, e, null, fu, uu, {});
  }
}
const {
  SvelteComponent: cu,
  append: _u,
  attr: sn,
  detach: du,
  init: hu,
  insert: mu,
  noop: Sl,
  safe_not_equal: gu,
  svg_element: Ti
} = window.__gradio__svelte__internal;
function bu(n) {
  let e, t;
  return {
    c() {
      e = Ti("svg"), t = Ti("path"), sn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), sn(t, "fill", "currentColor"), sn(e, "id", "icon"), sn(e, "xmlns", "http://www.w3.org/2000/svg"), sn(e, "viewBox", "0 0 32 32");
    },
    m(l, i) {
      mu(l, e, i), _u(e, t);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(l) {
      l && du(e);
    }
  };
}
class pu extends cu {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: wu,
  append: vu,
  attr: Tt,
  detach: ku,
  init: yu,
  insert: Su,
  noop: Cl,
  safe_not_equal: Cu,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function zu(n) {
  let e, t;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), Tt(t, "fill", "currentColor"), Tt(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 32 32");
    },
    m(l, i) {
      Su(l, e, i), vu(e, t);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(l) {
      l && ku(e);
    }
  };
}
class qu extends wu {
  constructor(e) {
    super(), yu(this, e, null, zu, Cu, {});
  }
}
const {
  SvelteComponent: Eu,
  append: Du,
  attr: Nt,
  detach: Au,
  init: Mu,
  insert: ju,
  noop: zl,
  safe_not_equal: Lu,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function Bu(n) {
  let e, t;
  return {
    c() {
      e = Oi("svg"), t = Oi("path"), Nt(t, "d", "M5 8l4 4 4-4z"), Nt(e, "class", "dropdown-arrow svelte-145leq6"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "width", "100%"), Nt(e, "height", "100%"), Nt(e, "viewBox", "0 0 18 18");
    },
    m(l, i) {
      ju(l, e, i), Du(e, t);
    },
    p: zl,
    i: zl,
    o: zl,
    d(l) {
      l && Au(e);
    }
  };
}
class Tu extends Eu {
  constructor(e) {
    super(), Mu(this, e, null, Bu, Lu, {});
  }
}
const {
  SvelteComponent: Nu,
  append: Ou,
  attr: Ie,
  detach: Uu,
  init: Iu,
  insert: Ru,
  noop: ql,
  safe_not_equal: Fu,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function Hu(n) {
  let e, t;
  return {
    c() {
      e = Ui("svg"), t = Ui("path"), Ie(t, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Ie(e, "xmlns", "http://www.w3.org/2000/svg"), Ie(e, "width", "100%"), Ie(e, "height", "100%"), Ie(e, "viewBox", "0 0 24 24"), Ie(e, "fill", "none"), Ie(e, "stroke", "currentColor"), Ie(e, "stroke-width", "1.5"), Ie(e, "stroke-linecap", "round"), Ie(e, "stroke-linejoin", "round"), Ie(e, "class", "feather feather-edit-2");
    },
    m(l, i) {
      Ru(l, e, i), Ou(e, t);
    },
    p: ql,
    i: ql,
    o: ql,
    d(l) {
      l && Uu(e);
    }
  };
}
class Pu extends Nu {
  constructor(e) {
    super(), Iu(this, e, null, Hu, Fu, {});
  }
}
const {
  SvelteComponent: Wu,
  append: El,
  attr: ue,
  detach: Xu,
  init: Yu,
  insert: Vu,
  noop: Dl,
  safe_not_equal: Zu,
  svg_element: jn
} = window.__gradio__svelte__internal;
function Gu(n) {
  let e, t, l, i;
  return {
    c() {
      e = jn("svg"), t = jn("rect"), l = jn("circle"), i = jn("polyline"), ue(t, "x", "3"), ue(t, "y", "3"), ue(t, "width", "18"), ue(t, "height", "18"), ue(t, "rx", "2"), ue(t, "ry", "2"), ue(l, "cx", "8.5"), ue(l, "cy", "8.5"), ue(l, "r", "1.5"), ue(i, "points", "21 15 16 10 5 21"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "fill", "none"), ue(e, "stroke", "currentColor"), ue(e, "stroke-width", "1.5"), ue(e, "stroke-linecap", "round"), ue(e, "stroke-linejoin", "round"), ue(e, "class", "feather feather-image");
    },
    m(s, o) {
      Vu(s, e, o), El(e, t), El(e, l), El(e, i);
    },
    p: Dl,
    i: Dl,
    o: Dl,
    d(s) {
      s && Xu(e);
    }
  };
}
let go = class extends Wu {
  constructor(e) {
    super(), Yu(this, e, null, Gu, Zu, {});
  }
};
const {
  SvelteComponent: Ju,
  append: Ku,
  attr: Ot,
  detach: Qu,
  init: xu,
  insert: $u,
  noop: Al,
  safe_not_equal: ef,
  svg_element: Ii
} = window.__gradio__svelte__internal;
function tf(n) {
  let e, t;
  return {
    c() {
      e = Ii("svg"), t = Ii("path"), Ot(t, "fill", "currentColor"), Ot(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24");
    },
    m(l, i) {
      $u(l, e, i), Ku(e, t);
    },
    p: Al,
    i: Al,
    o: Al,
    d(l) {
      l && Qu(e);
    }
  };
}
class bo extends Ju {
  constructor(e) {
    super(), xu(this, e, null, tf, ef, {});
  }
}
const {
  SvelteComponent: nf,
  append: Ln,
  attr: fe,
  detach: lf,
  init: sf,
  insert: of,
  noop: Ml,
  safe_not_equal: af,
  svg_element: on
} = window.__gradio__svelte__internal;
function rf(n) {
  let e, t, l, i, s;
  return {
    c() {
      e = on("svg"), t = on("path"), l = on("path"), i = on("line"), s = on("line"), fe(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), fe(l, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), fe(i, "x1", "12"), fe(i, "y1", "19"), fe(i, "x2", "12"), fe(i, "y2", "23"), fe(s, "x1", "8"), fe(s, "y1", "23"), fe(s, "x2", "16"), fe(s, "y2", "23"), fe(e, "xmlns", "http://www.w3.org/2000/svg"), fe(e, "width", "100%"), fe(e, "height", "100%"), fe(e, "viewBox", "0 0 24 24"), fe(e, "fill", "none"), fe(e, "stroke", "currentColor"), fe(e, "stroke-width", "2"), fe(e, "stroke-linecap", "round"), fe(e, "stroke-linejoin", "round"), fe(e, "class", "feather feather-mic");
    },
    m(o, r) {
      of(o, e, r), Ln(e, t), Ln(e, l), Ln(e, i), Ln(e, s);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(o) {
      o && lf(e);
    }
  };
}
class uf extends nf {
  constructor(e) {
    super(), sf(this, e, null, rf, af, {});
  }
}
const {
  SvelteComponent: ff,
  append: jl,
  attr: be,
  detach: cf,
  init: _f,
  insert: df,
  noop: Ll,
  safe_not_equal: hf,
  svg_element: Bn
} = window.__gradio__svelte__internal;
function mf(n) {
  let e, t, l, i;
  return {
    c() {
      e = Bn("svg"), t = Bn("path"), l = Bn("polyline"), i = Bn("line"), be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), be(l, "points", "17 8 12 3 7 8"), be(i, "x1", "12"), be(i, "y1", "3"), be(i, "x2", "12"), be(i, "y2", "15"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "90%"), be(e, "height", "90%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "2"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-upload");
    },
    m(s, o) {
      df(s, e, o), jl(e, t), jl(e, l), jl(e, i);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(s) {
      s && cf(e);
    }
  };
}
let po = class extends ff {
  constructor(e) {
    super(), _f(this, e, null, mf, hf, {});
  }
};
const {
  SvelteComponent: gf,
  append: Ri,
  attr: lt,
  detach: bf,
  init: pf,
  insert: wf,
  noop: Bl,
  safe_not_equal: vf,
  svg_element: Tl
} = window.__gradio__svelte__internal;
function kf(n) {
  let e, t, l;
  return {
    c() {
      e = Tl("svg"), t = Tl("path"), l = Tl("path"), lt(t, "fill", "currentColor"), lt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), lt(l, "fill", "currentColor"), lt(l, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24");
    },
    m(i, s) {
      wf(i, e, s), Ri(e, t), Ri(e, l);
    },
    p: Bl,
    i: Bl,
    o: Bl,
    d(i) {
      i && bf(e);
    }
  };
}
class yf extends gf {
  constructor(e) {
    super(), pf(this, e, null, kf, vf, {});
  }
}
const Sf = [
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
], Fi = {
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
Sf.reduce(
  (n, { color: e, primary: t, secondary: l }) => ({
    ...n,
    [e]: {
      primary: Fi[e][t],
      secondary: Fi[e][l]
    }
  }),
  {}
);
class Zn extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Cf(n, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Zn("Must be on Spaces to share.");
  let t, l, i;
  t = zf(n), l = n.split(";")[0].split(":")[1], i = "file" + l.split("/")[1];
  const s = new File([t], i, { type: l }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if ((a = o.headers.get("content-type")) != null && a.includes("application/json")) {
      const u = await o.json();
      throw new Zn(`Upload failed: ${u.error}`);
    }
    throw new Zn("Upload failed.");
  }
  return await o.text();
}
function zf(n) {
  for (var e = n.split(","), t = e[0].match(/:(.*?);/)[1], l = atob(e[1]), i = l.length, s = new Uint8Array(i); i--; )
    s[i] = l.charCodeAt(i);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: qf,
  create_component: Ef,
  destroy_component: Df,
  init: Af,
  mount_component: Mf,
  safe_not_equal: jf,
  transition_in: Lf,
  transition_out: Bf
} = window.__gradio__svelte__internal, { createEventDispatcher: Tf } = window.__gradio__svelte__internal;
function Nf(n) {
  let e, t;
  return e = new pi({
    props: {
      Icon: pu,
      label: (
        /*i18n*/
        n[2]("common.share")
      ),
      pending: (
        /*pending*/
        n[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    n[5]
  ), {
    c() {
      Ef(e.$$.fragment);
    },
    m(l, i) {
      Mf(e, l, i), t = !0;
    },
    p(l, [i]) {
      const s = {};
      i & /*i18n*/
      4 && (s.label = /*i18n*/
      l[2]("common.share")), i & /*pending*/
      8 && (s.pending = /*pending*/
      l[3]), e.$set(s);
    },
    i(l) {
      t || (Lf(e.$$.fragment, l), t = !0);
    },
    o(l) {
      Bf(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Df(e, l);
    }
  };
}
function Of(n, e, t) {
  const l = Tf();
  let { formatter: i } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const u = await i(s);
      l("share", { description: u });
    } catch (u) {
      console.error(u);
      let f = u instanceof Zn ? u.message : "Share failed.";
      l("error", f);
    } finally {
      t(3, r = !1);
    }
  };
  return n.$$set = (u) => {
    "formatter" in u && t(0, i = u.formatter), "value" in u && t(1, s = u.value), "i18n" in u && t(2, o = u.i18n);
  }, [i, s, o, r, l, a];
}
class Uf extends qf {
  constructor(e) {
    super(), Af(this, e, Of, Nf, jf, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: If,
  append: yt,
  attr: ni,
  check_outros: Rf,
  create_component: wo,
  destroy_component: vo,
  detach: Gn,
  element: li,
  group_outros: Ff,
  init: Hf,
  insert: Jn,
  mount_component: ko,
  safe_not_equal: Pf,
  set_data: ii,
  space: si,
  text: fn,
  toggle_class: Hi,
  transition_in: xn,
  transition_out: $n
} = window.__gradio__svelte__internal;
function Wf(n) {
  let e, t;
  return e = new po({}), {
    c() {
      wo(e.$$.fragment);
    },
    m(l, i) {
      ko(e, l, i), t = !0;
    },
    i(l) {
      t || (xn(e.$$.fragment, l), t = !0);
    },
    o(l) {
      $n(e.$$.fragment, l), t = !1;
    },
    d(l) {
      vo(e, l);
    }
  };
}
function Xf(n) {
  let e, t;
  return e = new bo({}), {
    c() {
      wo(e.$$.fragment);
    },
    m(l, i) {
      ko(e, l, i), t = !0;
    },
    i(l) {
      t || (xn(e.$$.fragment, l), t = !0);
    },
    o(l) {
      $n(e.$$.fragment, l), t = !1;
    },
    d(l) {
      vo(e, l);
    }
  };
}
function Pi(n) {
  let e, t, l = (
    /*i18n*/
    n[1]("common.or") + ""
  ), i, s, o, r = (
    /*message*/
    (n[2] || /*i18n*/
    n[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = li("span"), t = fn("- "), i = fn(l), s = fn(" -"), o = si(), a = fn(r), ni(e, "class", "or svelte-kzcjhc");
    },
    m(u, f) {
      Jn(u, e, f), yt(e, t), yt(e, i), yt(e, s), Jn(u, o, f), Jn(u, a, f);
    },
    p(u, f) {
      f & /*i18n*/
      2 && l !== (l = /*i18n*/
      u[1]("common.or") + "") && ii(i, l), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && ii(a, r);
    },
    d(u) {
      u && (Gn(e), Gn(o), Gn(a));
    }
  };
}
function Yf(n) {
  let e, t, l, i, s, o = (
    /*i18n*/
    n[1](
      /*defs*/
      n[5][
        /*type*/
        n[0]
      ] || /*defs*/
      n[5].file
    ) + ""
  ), r, a, u;
  const f = [Xf, Wf], _ = [];
  function d(h, b) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  l = d(n), i = _[l] = f[l](n);
  let c = (
    /*mode*/
    n[3] !== "short" && Pi(n)
  );
  return {
    c() {
      e = li("div"), t = li("span"), i.c(), s = si(), r = fn(o), a = si(), c && c.c(), ni(t, "class", "icon-wrap svelte-kzcjhc"), Hi(
        t,
        "hovered",
        /*hovered*/
        n[4]
      ), ni(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, b) {
      Jn(h, e, b), yt(e, t), _[l].m(t, null), yt(e, s), yt(e, r), yt(e, a), c && c.m(e, null), u = !0;
    },
    p(h, [b]) {
      let g = l;
      l = d(h), l !== g && (Ff(), $n(_[g], 1, 1, () => {
        _[g] = null;
      }), Rf(), i = _[l], i || (i = _[l] = f[l](h), i.c()), xn(i, 1), i.m(t, null)), (!u || b & /*hovered*/
      16) && Hi(
        t,
        "hovered",
        /*hovered*/
        h[4]
      ), (!u || b & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      h[1](
        /*defs*/
        h[5][
          /*type*/
          h[0]
        ] || /*defs*/
        h[5].file
      ) + "") && ii(r, o), /*mode*/
      h[3] !== "short" ? c ? c.p(h, b) : (c = Pi(h), c.c(), c.m(e, null)) : c && (c.d(1), c = null);
    },
    i(h) {
      u || (xn(i), u = !0);
    },
    o(h) {
      $n(i), u = !1;
    },
    d(h) {
      h && Gn(e), _[l].d(), c && c.d();
    }
  };
}
function Vf(n, e, t) {
  let { type: l = "file" } = e, { i18n: i } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return n.$$set = (u) => {
    "type" in u && t(0, l = u.type), "i18n" in u && t(1, i = u.i18n), "message" in u && t(2, s = u.message), "mode" in u && t(3, o = u.mode), "hovered" in u && t(4, r = u.hovered);
  }, [l, i, s, o, r, a];
}
class yo extends If {
  constructor(e) {
    super(), Hf(this, e, Vf, Yf, Pf, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Zf,
  append: Nl,
  attr: Ze,
  check_outros: cn,
  create_component: fl,
  destroy_component: cl,
  detach: tn,
  element: zn,
  empty: Gf,
  group_outros: _n,
  init: Jf,
  insert: nn,
  listen: _l,
  mount_component: dl,
  safe_not_equal: Kf,
  space: Ol,
  toggle_class: ut,
  transition_in: _e,
  transition_out: Ee
} = window.__gradio__svelte__internal;
function Wi(n) {
  let e, t = (
    /*sources*/
    n[1].includes("upload")
  ), l, i = (
    /*sources*/
    n[1].includes("microphone")
  ), s, o = (
    /*sources*/
    n[1].includes("webcam")
  ), r, a = (
    /*sources*/
    n[1].includes("clipboard")
  ), u, f = t && Xi(n), _ = i && Yi(n), d = o && Vi(n), c = a && Zi(n);
  return {
    c() {
      e = zn("span"), f && f.c(), l = Ol(), _ && _.c(), s = Ol(), d && d.c(), r = Ol(), c && c.c(), Ze(e, "class", "source-selection svelte-1jp3vgd"), Ze(e, "data-testid", "source-select");
    },
    m(h, b) {
      nn(h, e, b), f && f.m(e, null), Nl(e, l), _ && _.m(e, null), Nl(e, s), d && d.m(e, null), Nl(e, r), c && c.m(e, null), u = !0;
    },
    p(h, b) {
      b & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? f ? (f.p(h, b), b & /*sources*/
      2 && _e(f, 1)) : (f = Xi(h), f.c(), _e(f, 1), f.m(e, l)) : f && (_n(), Ee(f, 1, 1, () => {
        f = null;
      }), cn()), b & /*sources*/
      2 && (i = /*sources*/
      h[1].includes("microphone")), i ? _ ? (_.p(h, b), b & /*sources*/
      2 && _e(_, 1)) : (_ = Yi(h), _.c(), _e(_, 1), _.m(e, s)) : _ && (_n(), Ee(_, 1, 1, () => {
        _ = null;
      }), cn()), b & /*sources*/
      2 && (o = /*sources*/
      h[1].includes("webcam")), o ? d ? (d.p(h, b), b & /*sources*/
      2 && _e(d, 1)) : (d = Vi(h), d.c(), _e(d, 1), d.m(e, r)) : d && (_n(), Ee(d, 1, 1, () => {
        d = null;
      }), cn()), b & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? c ? (c.p(h, b), b & /*sources*/
      2 && _e(c, 1)) : (c = Zi(h), c.c(), _e(c, 1), c.m(e, null)) : c && (_n(), Ee(c, 1, 1, () => {
        c = null;
      }), cn());
    },
    i(h) {
      u || (_e(f), _e(_), _e(d), _e(c), u = !0);
    },
    o(h) {
      Ee(f), Ee(_), Ee(d), Ee(c), u = !1;
    },
    d(h) {
      h && tn(e), f && f.d(), _ && _.d(), d && d.d(), c && c.d();
    }
  };
}
function Xi(n) {
  let e, t, l, i, s;
  return t = new po({}), {
    c() {
      e = zn("button"), fl(t.$$.fragment), Ze(e, "class", "icon svelte-1jp3vgd"), Ze(e, "aria-label", "Upload file"), ut(
        e,
        "selected",
        /*active_source*/
        n[0] === "upload" || !/*active_source*/
        n[0]
      );
    },
    m(o, r) {
      nn(o, e, r), dl(t, e, null), l = !0, i || (s = _l(
        e,
        "click",
        /*click_handler*/
        n[6]
      ), i = !0);
    },
    p(o, r) {
      (!l || r & /*active_source*/
      1) && ut(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      l || (_e(t.$$.fragment, o), l = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && tn(e), cl(t), i = !1, s();
    }
  };
}
function Yi(n) {
  let e, t, l, i, s;
  return t = new uf({}), {
    c() {
      e = zn("button"), fl(t.$$.fragment), Ze(e, "class", "icon svelte-1jp3vgd"), Ze(e, "aria-label", "Record audio"), ut(
        e,
        "selected",
        /*active_source*/
        n[0] === "microphone"
      );
    },
    m(o, r) {
      nn(o, e, r), dl(t, e, null), l = !0, i || (s = _l(
        e,
        "click",
        /*click_handler_1*/
        n[7]
      ), i = !0);
    },
    p(o, r) {
      (!l || r & /*active_source*/
      1) && ut(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      l || (_e(t.$$.fragment, o), l = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && tn(e), cl(t), i = !1, s();
    }
  };
}
function Vi(n) {
  let e, t, l, i, s;
  return t = new yf({}), {
    c() {
      e = zn("button"), fl(t.$$.fragment), Ze(e, "class", "icon svelte-1jp3vgd"), Ze(e, "aria-label", "Capture from camera"), ut(
        e,
        "selected",
        /*active_source*/
        n[0] === "webcam"
      );
    },
    m(o, r) {
      nn(o, e, r), dl(t, e, null), l = !0, i || (s = _l(
        e,
        "click",
        /*click_handler_2*/
        n[8]
      ), i = !0);
    },
    p(o, r) {
      (!l || r & /*active_source*/
      1) && ut(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      l || (_e(t.$$.fragment, o), l = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && tn(e), cl(t), i = !1, s();
    }
  };
}
function Zi(n) {
  let e, t, l, i, s;
  return t = new bo({}), {
    c() {
      e = zn("button"), fl(t.$$.fragment), Ze(e, "class", "icon svelte-1jp3vgd"), Ze(e, "aria-label", "Paste from clipboard"), ut(
        e,
        "selected",
        /*active_source*/
        n[0] === "clipboard"
      );
    },
    m(o, r) {
      nn(o, e, r), dl(t, e, null), l = !0, i || (s = _l(
        e,
        "click",
        /*click_handler_3*/
        n[9]
      ), i = !0);
    },
    p(o, r) {
      (!l || r & /*active_source*/
      1) && ut(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      l || (_e(t.$$.fragment, o), l = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && tn(e), cl(t), i = !1, s();
    }
  };
}
function Qf(n) {
  let e, t, l = (
    /*unique_sources*/
    n[2].length > 1 && Wi(n)
  );
  return {
    c() {
      l && l.c(), e = Gf();
    },
    m(i, s) {
      l && l.m(i, s), nn(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*unique_sources*/
      i[2].length > 1 ? l ? (l.p(i, s), s & /*unique_sources*/
      4 && _e(l, 1)) : (l = Wi(i), l.c(), _e(l, 1), l.m(e.parentNode, e)) : l && (_n(), Ee(l, 1, 1, () => {
        l = null;
      }), cn());
    },
    i(i) {
      t || (_e(l), t = !0);
    },
    o(i) {
      Ee(l), t = !1;
    },
    d(i) {
      i && tn(e), l && l.d(i);
    }
  };
}
function xf(n, e, t) {
  let l;
  var i = this && this.__awaiter || function(h, b, g, m) {
    function v(p) {
      return p instanceof g ? p : new g(function(C) {
        C(p);
      });
    }
    return new (g || (g = Promise))(function(p, C) {
      function M(w) {
        try {
          D(m.next(w));
        } catch (A) {
          C(A);
        }
      }
      function k(w) {
        try {
          D(m.throw(w));
        } catch (A) {
          C(A);
        }
      }
      function D(w) {
        w.done ? p(w.value) : v(w.value).then(M, k);
      }
      D((m = m.apply(h, b || [])).next());
    });
  };
  let { sources: s } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function u(h) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, o = h), a(h);
    });
  }
  const f = () => u("upload"), _ = () => u("microphone"), d = () => u("webcam"), c = () => u("clipboard");
  return n.$$set = (h) => {
    "sources" in h && t(1, s = h.sources), "active_source" in h && t(0, o = h.active_source), "handle_clear" in h && t(4, r = h.handle_clear), "handle_select" in h && t(5, a = h.handle_select);
  }, n.$$.update = () => {
    n.$$.dirty & /*sources*/
    2 && t(2, l = [...new Set(s)]);
  }, [
    o,
    s,
    l,
    u,
    r,
    a,
    f,
    _,
    d,
    c
  ];
}
class $f extends Zf {
  constructor(e) {
    super(), Jf(this, e, xf, Qf, Kf, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Gt(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let l = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function Kn() {
}
function ec(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Gi(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
const So = typeof window < "u";
let Ji = So ? () => window.performance.now() : () => Date.now(), Co = So ? (n) => requestAnimationFrame(n) : Kn;
const xt = /* @__PURE__ */ new Set();
function zo(n) {
  xt.forEach((e) => {
    e.c(n) || (xt.delete(e), e.f());
  }), xt.size !== 0 && Co(zo);
}
function tc(n) {
  let e;
  return xt.size === 0 && Co(zo), {
    promise: new Promise((t) => {
      xt.add(e = { c: n, f: t });
    }),
    abort() {
      xt.delete(e);
    }
  };
}
function nc(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ki(n, { delay: e = 0, duration: t = 400, easing: l = nc, x: i = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(n), a = +r.opacity, u = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [_, d] = Gi(i), [c, h] = Gi(s);
  return {
    delay: e,
    duration: t,
    easing: l,
    css: (b, g) => `
			transform: ${u} translate(${(1 - b) * _}${d}, ${(1 - b) * c}${h});
			opacity: ${a - f * g}`
  };
}
const Ut = [];
function lc(n, e = Kn) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(r) {
    if (ec(n, r) && (n = r, t)) {
      const a = !Ut.length;
      for (const u of l)
        u[1](), Ut.push(u, n);
      if (a) {
        for (let u = 0; u < Ut.length; u += 2)
          Ut[u][0](Ut[u + 1]);
        Ut.length = 0;
      }
    }
  }
  function s(r) {
    i(r(n));
  }
  function o(r, a = Kn) {
    const u = [r, a];
    return l.add(u), l.size === 1 && (t = e(i, s) || Kn), r(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function Qi(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function oi(n, e, t, l) {
  if (typeof t == "number" || Qi(t)) {
    const i = l - t, s = (t - e) / (n.dt || 1 / 60), o = n.opts.stiffness * i, r = n.opts.damping * s, a = (o - r) * n.inv_mass, u = (s + a) * n.dt;
    return Math.abs(u) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, Qi(t) ? new Date(t.getTime() + u) : t + u);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, s) => oi(n, e[s], t[s], l[s])
      );
    if (typeof t == "object") {
      const i = {};
      for (const s in t)
        i[s] = oi(n, e[s], t[s], l[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function xi(n, e = {}) {
  const t = lc(n), { stiffness: l = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let o, r, a, u = n, f = n, _ = 1, d = 0, c = !1;
  function h(g, m = {}) {
    f = g;
    const v = a = {};
    return n == null || m.hard || b.stiffness >= 1 && b.damping >= 1 ? (c = !0, o = Ji(), u = g, t.set(n = f), Promise.resolve()) : (m.soft && (d = 1 / ((m.soft === !0 ? 0.5 : +m.soft) * 60), _ = 0), r || (o = Ji(), c = !1, r = tc((p) => {
      if (c)
        return c = !1, r = null, !1;
      _ = Math.min(_ + d, 1);
      const C = {
        inv_mass: _,
        opts: b,
        settled: !0,
        dt: (p - o) * 60 / 1e3
      }, M = oi(C, u, n, f);
      return o = p, u = n, t.set(n = M), C.settled && (r = null), !C.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        v === a && p();
      });
    }));
  }
  const b = {
    set: h,
    update: (g, m) => h(g(f, n), m),
    subscribe: t.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return b;
}
const {
  SvelteComponent: ic,
  append: Re,
  attr: X,
  component_subscribe: $i,
  detach: sc,
  element: oc,
  init: ac,
  insert: rc,
  noop: es,
  safe_not_equal: uc,
  set_style: Tn,
  svg_element: Fe,
  toggle_class: ts
} = window.__gradio__svelte__internal, { onMount: fc } = window.__gradio__svelte__internal;
function cc(n) {
  let e, t, l, i, s, o, r, a, u, f, _, d;
  return {
    c() {
      e = oc("div"), t = Fe("svg"), l = Fe("g"), i = Fe("path"), s = Fe("path"), o = Fe("path"), r = Fe("path"), a = Fe("g"), u = Fe("path"), f = Fe("path"), _ = Fe("path"), d = Fe("path"), X(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), X(i, "fill", "#FF7C00"), X(i, "fill-opacity", "0.4"), X(i, "class", "svelte-43sxxs"), X(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), X(s, "fill", "#FF7C00"), X(s, "class", "svelte-43sxxs"), X(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), X(o, "fill", "#FF7C00"), X(o, "fill-opacity", "0.4"), X(o, "class", "svelte-43sxxs"), X(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), X(r, "fill", "#FF7C00"), X(r, "class", "svelte-43sxxs"), Tn(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), X(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), X(u, "fill", "#FF7C00"), X(u, "fill-opacity", "0.4"), X(u, "class", "svelte-43sxxs"), X(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), X(f, "fill", "#FF7C00"), X(f, "class", "svelte-43sxxs"), X(_, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), X(_, "fill", "#FF7C00"), X(_, "fill-opacity", "0.4"), X(_, "class", "svelte-43sxxs"), X(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), X(d, "fill", "#FF7C00"), X(d, "class", "svelte-43sxxs"), Tn(a, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), X(t, "viewBox", "-1200 -1200 3000 3000"), X(t, "fill", "none"), X(t, "xmlns", "http://www.w3.org/2000/svg"), X(t, "class", "svelte-43sxxs"), X(e, "class", "svelte-43sxxs"), ts(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(c, h) {
      rc(c, e, h), Re(e, t), Re(t, l), Re(l, i), Re(l, s), Re(l, o), Re(l, r), Re(t, a), Re(a, u), Re(a, f), Re(a, _), Re(a, d);
    },
    p(c, [h]) {
      h & /*$top*/
      2 && Tn(l, "transform", "translate(" + /*$top*/
      c[1][0] + "px, " + /*$top*/
      c[1][1] + "px)"), h & /*$bottom*/
      4 && Tn(a, "transform", "translate(" + /*$bottom*/
      c[2][0] + "px, " + /*$bottom*/
      c[2][1] + "px)"), h & /*margin*/
      1 && ts(
        e,
        "margin",
        /*margin*/
        c[0]
      );
    },
    i: es,
    o: es,
    d(c) {
      c && sc(e);
    }
  };
}
function _c(n, e, t) {
  let l, i;
  var s = this && this.__awaiter || function(c, h, b, g) {
    function m(v) {
      return v instanceof b ? v : new b(function(p) {
        p(v);
      });
    }
    return new (b || (b = Promise))(function(v, p) {
      function C(D) {
        try {
          k(g.next(D));
        } catch (w) {
          p(w);
        }
      }
      function M(D) {
        try {
          k(g.throw(D));
        } catch (w) {
          p(w);
        }
      }
      function k(D) {
        D.done ? v(D.value) : m(D.value).then(C, M);
      }
      k((g = g.apply(c, h || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = xi([0, 0]);
  $i(n, r, (c) => t(1, l = c));
  const a = xi([0, 0]);
  $i(n, a, (c) => t(2, i = c));
  let u;
  function f() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function _() {
    return s(this, void 0, void 0, function* () {
      yield f(), u || _();
    });
  }
  function d() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), _();
    });
  }
  return fc(() => (d(), () => u = !0)), n.$$set = (c) => {
    "margin" in c && t(0, o = c.margin);
  }, [o, l, i, r, a];
}
class dc extends ic {
  constructor(e) {
    super(), ac(this, e, _c, cc, uc, { margin: 0 });
  }
}
const {
  SvelteComponent: hc,
  append: St,
  attr: Ye,
  binding_callbacks: ns,
  check_outros: qo,
  create_component: mc,
  create_slot: gc,
  destroy_component: bc,
  destroy_each: Eo,
  detach: I,
  element: Ke,
  empty: ln,
  ensure_array_like: el,
  get_all_dirty_from_scope: pc,
  get_slot_changes: wc,
  group_outros: Do,
  init: vc,
  insert: R,
  mount_component: kc,
  noop: ai,
  safe_not_equal: yc,
  set_data: Oe,
  set_style: at,
  space: Ve,
  text: ae,
  toggle_class: Ne,
  transition_in: $t,
  transition_out: en,
  update_slot_base: Sc
} = window.__gradio__svelte__internal, { tick: Cc } = window.__gradio__svelte__internal, { onDestroy: zc } = window.__gradio__svelte__internal, qc = (n) => ({}), ls = (n) => ({});
function is(n, e, t) {
  const l = n.slice();
  return l[39] = e[t], l[41] = t, l;
}
function ss(n, e, t) {
  const l = n.slice();
  return l[39] = e[t], l;
}
function Ec(n) {
  let e, t = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, i, s;
  const o = (
    /*#slots*/
    n[29].error
  ), r = gc(
    o,
    n,
    /*$$scope*/
    n[28],
    ls
  );
  return {
    c() {
      e = Ke("span"), l = ae(t), i = Ve(), r && r.c(), Ye(e, "class", "error svelte-1yserjw");
    },
    m(a, u) {
      R(a, e, u), St(e, l), R(a, i, u), r && r.m(a, u), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*i18n*/
      2) && t !== (t = /*i18n*/
      a[1]("common.error") + "") && Oe(l, t), r && r.p && (!s || u[0] & /*$$scope*/
      268435456) && Sc(
        r,
        o,
        a,
        /*$$scope*/
        a[28],
        s ? wc(
          o,
          /*$$scope*/
          a[28],
          u,
          qc
        ) : pc(
          /*$$scope*/
          a[28]
        ),
        ls
      );
    },
    i(a) {
      s || ($t(r, a), s = !0);
    },
    o(a) {
      en(r, a), s = !1;
    },
    d(a) {
      a && (I(e), I(i)), r && r.d(a);
    }
  };
}
function Dc(n) {
  let e, t, l, i, s, o, r, a, u, f = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && os(n)
  );
  function _(p, C) {
    if (
      /*progress*/
      p[7]
    )
      return jc;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    )
      return Mc;
    if (
      /*queue_position*/
      p[2] === 0
    )
      return Ac;
  }
  let d = _(n), c = d && d(n), h = (
    /*timer*/
    n[5] && us(n)
  );
  const b = [Nc, Tc], g = [];
  function m(p, C) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = m(n)) && (o = g[s] = b[s](n));
  let v = !/*timer*/
  n[5] && gs(n);
  return {
    c() {
      f && f.c(), e = Ve(), t = Ke("div"), c && c.c(), l = Ve(), h && h.c(), i = Ve(), o && o.c(), r = Ve(), v && v.c(), a = ln(), Ye(t, "class", "progress-text svelte-1yserjw"), Ne(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), Ne(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(p, C) {
      f && f.m(p, C), R(p, e, C), R(p, t, C), c && c.m(t, null), St(t, l), h && h.m(t, null), R(p, i, C), ~s && g[s].m(p, C), R(p, r, C), v && v.m(p, C), R(p, a, C), u = !0;
    },
    p(p, C) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? f ? f.p(p, C) : (f = os(p), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), d === (d = _(p)) && c ? c.p(p, C) : (c && c.d(1), c = d && d(p), c && (c.c(), c.m(t, l))), /*timer*/
      p[5] ? h ? h.p(p, C) : (h = us(p), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!u || C[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!u || C[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let M = s;
      s = m(p), s === M ? ~s && g[s].p(p, C) : (o && (Do(), en(g[M], 1, 1, () => {
        g[M] = null;
      }), qo()), ~s ? (o = g[s], o ? o.p(p, C) : (o = g[s] = b[s](p), o.c()), $t(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      p[5] ? v && (v.d(1), v = null) : v ? v.p(p, C) : (v = gs(p), v.c(), v.m(a.parentNode, a));
    },
    i(p) {
      u || ($t(o), u = !0);
    },
    o(p) {
      en(o), u = !1;
    },
    d(p) {
      p && (I(e), I(t), I(i), I(r), I(a)), f && f.d(p), c && c.d(), h && h.d(), ~s && g[s].d(p), v && v.d(p);
    }
  };
}
function os(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Ke("div"), Ye(e, "class", "eta-bar svelte-1yserjw"), at(e, "transform", t);
    },
    m(l, i) {
      R(l, e, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && at(e, "transform", t);
    },
    d(l) {
      l && I(e);
    }
  };
}
function Ac(n) {
  let e;
  return {
    c() {
      e = ae("processing |");
    },
    m(t, l) {
      R(t, e, l);
    },
    p: ai,
    d(t) {
      t && I(e);
    }
  };
}
function Mc(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, i, s, o;
  return {
    c() {
      e = ae("queue: "), l = ae(t), i = ae("/"), s = ae(
        /*queue_size*/
        n[3]
      ), o = ae(" |");
    },
    m(r, a) {
      R(r, e, a), R(r, l, a), R(r, i, a), R(r, s, a), R(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Oe(l, t), a[0] & /*queue_size*/
      8 && Oe(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (I(e), I(l), I(i), I(s), I(o));
    }
  };
}
function jc(n) {
  let e, t = el(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = rs(ss(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = ln();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      R(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        t = el(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = ss(i, t, o);
          l[o] ? l[o].p(r, s) : (l[o] = rs(r), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && I(e), Eo(l, i);
    }
  };
}
function as(n) {
  let e, t = (
    /*p*/
    n[39].unit + ""
  ), l, i, s = " ", o;
  function r(f, _) {
    return (
      /*p*/
      f[39].length != null ? Bc : Lc
    );
  }
  let a = r(n), u = a(n);
  return {
    c() {
      u.c(), e = Ve(), l = ae(t), i = ae(" | "), o = ae(s);
    },
    m(f, _) {
      u.m(f, _), R(f, e, _), R(f, l, _), R(f, i, _), R(f, o, _);
    },
    p(f, _) {
      a === (a = r(f)) && u ? u.p(f, _) : (u.d(1), u = a(f), u && (u.c(), u.m(e.parentNode, e))), _[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[39].unit + "") && Oe(l, t);
    },
    d(f) {
      f && (I(e), I(l), I(i), I(o)), u.d(f);
    }
  };
}
function Lc(n) {
  let e = Gt(
    /*p*/
    n[39].index || 0
  ) + "", t;
  return {
    c() {
      t = ae(e);
    },
    m(l, i) {
      R(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = Gt(
        /*p*/
        l[39].index || 0
      ) + "") && Oe(t, e);
    },
    d(l) {
      l && I(t);
    }
  };
}
function Bc(n) {
  let e = Gt(
    /*p*/
    n[39].index || 0
  ) + "", t, l, i = Gt(
    /*p*/
    n[39].length
  ) + "", s;
  return {
    c() {
      t = ae(e), l = ae("/"), s = ae(i);
    },
    m(o, r) {
      R(o, t, r), R(o, l, r), R(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Gt(
        /*p*/
        o[39].index || 0
      ) + "") && Oe(t, e), r[0] & /*progress*/
      128 && i !== (i = Gt(
        /*p*/
        o[39].length
      ) + "") && Oe(s, i);
    },
    d(o) {
      o && (I(t), I(l), I(s));
    }
  };
}
function rs(n) {
  let e, t = (
    /*p*/
    n[39].index != null && as(n)
  );
  return {
    c() {
      t && t.c(), e = ln();
    },
    m(l, i) {
      t && t.m(l, i), R(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[39].index != null ? t ? t.p(l, i) : (t = as(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && I(e), t && t.d(l);
    }
  };
}
function us(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), l, i;
  return {
    c() {
      e = ae(
        /*formatted_timer*/
        n[20]
      ), l = ae(t), i = ae("s");
    },
    m(s, o) {
      R(s, e, o), R(s, l, o), R(s, i, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Oe(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Oe(l, t);
    },
    d(s) {
      s && (I(e), I(l), I(i));
    }
  };
}
function Tc(n) {
  let e, t;
  return e = new dc({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      mc(e.$$.fragment);
    },
    m(l, i) {
      kc(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      l[8] === "default"), e.$set(s);
    },
    i(l) {
      t || ($t(e.$$.fragment, l), t = !0);
    },
    o(l) {
      en(e.$$.fragment, l), t = !1;
    },
    d(l) {
      bc(e, l);
    }
  };
}
function Nc(n) {
  let e, t, l, i, s, o = `${/*last_progress_level*/
  n[15] * 100}%`, r = (
    /*progress*/
    n[7] != null && fs(n)
  );
  return {
    c() {
      e = Ke("div"), t = Ke("div"), r && r.c(), l = Ve(), i = Ke("div"), s = Ke("div"), Ye(t, "class", "progress-level-inner svelte-1yserjw"), Ye(s, "class", "progress-bar svelte-1yserjw"), at(s, "width", o), Ye(i, "class", "progress-bar-wrap svelte-1yserjw"), Ye(e, "class", "progress-level svelte-1yserjw");
    },
    m(a, u) {
      R(a, e, u), St(e, t), r && r.m(t, null), St(e, l), St(e, i), St(i, s), n[30](s);
    },
    p(a, u) {
      /*progress*/
      a[7] != null ? r ? r.p(a, u) : (r = fs(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), u[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && at(s, "width", o);
    },
    i: ai,
    o: ai,
    d(a) {
      a && I(e), r && r.d(), n[30](null);
    }
  };
}
function fs(n) {
  let e, t = el(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = ms(is(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = ln();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      R(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = el(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = is(i, t, o);
          l[o] ? l[o].p(r, s) : (l[o] = ms(r), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && I(e), Eo(l, i);
    }
  };
}
function cs(n) {
  let e, t, l, i, s = (
    /*i*/
    n[41] !== 0 && Oc()
  ), o = (
    /*p*/
    n[39].desc != null && _s(n)
  ), r = (
    /*p*/
    n[39].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[41]
    ] != null && ds()
  ), a = (
    /*progress_level*/
    n[14] != null && hs(n)
  );
  return {
    c() {
      s && s.c(), e = Ve(), o && o.c(), t = Ve(), r && r.c(), l = Ve(), a && a.c(), i = ln();
    },
    m(u, f) {
      s && s.m(u, f), R(u, e, f), o && o.m(u, f), R(u, t, f), r && r.m(u, f), R(u, l, f), a && a.m(u, f), R(u, i, f);
    },
    p(u, f) {
      /*p*/
      u[39].desc != null ? o ? o.p(u, f) : (o = _s(u), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      u[39].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[41]
      ] != null ? r || (r = ds(), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null), /*progress_level*/
      u[14] != null ? a ? a.p(u, f) : (a = hs(u), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(u) {
      u && (I(e), I(t), I(l), I(i)), s && s.d(u), o && o.d(u), r && r.d(u), a && a.d(u);
    }
  };
}
function Oc(n) {
  let e;
  return {
    c() {
      e = ae(" /");
    },
    m(t, l) {
      R(t, e, l);
    },
    d(t) {
      t && I(e);
    }
  };
}
function _s(n) {
  let e = (
    /*p*/
    n[39].desc + ""
  ), t;
  return {
    c() {
      t = ae(e);
    },
    m(l, i) {
      R(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      l[39].desc + "") && Oe(t, e);
    },
    d(l) {
      l && I(t);
    }
  };
}
function ds(n) {
  let e;
  return {
    c() {
      e = ae("-");
    },
    m(t, l) {
      R(t, e, l);
    },
    d(t) {
      t && I(e);
    }
  };
}
function hs(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[41]
  ] || 0)).toFixed(1) + "", t, l;
  return {
    c() {
      t = ae(e), l = ae("%");
    },
    m(i, s) {
      R(i, t, s), R(i, l, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[41]
      ] || 0)).toFixed(1) + "") && Oe(t, e);
    },
    d(i) {
      i && (I(t), I(l));
    }
  };
}
function ms(n) {
  let e, t = (
    /*p*/
    (n[39].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[41]
    ] != null) && cs(n)
  );
  return {
    c() {
      t && t.c(), e = ln();
    },
    m(l, i) {
      t && t.m(l, i), R(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[39].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[41]
      ] != null ? t ? t.p(l, i) : (t = cs(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && I(e), t && t.d(l);
    }
  };
}
function gs(n) {
  let e, t;
  return {
    c() {
      e = Ke("p"), t = ae(
        /*loading_text*/
        n[9]
      ), Ye(e, "class", "loading svelte-1yserjw");
    },
    m(l, i) {
      R(l, e, i), St(e, t);
    },
    p(l, i) {
      i[0] & /*loading_text*/
      512 && Oe(
        t,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && I(e);
    }
  };
}
function Uc(n) {
  let e, t, l, i, s;
  const o = [Dc, Ec], r = [];
  function a(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(n)) && (l = r[t] = o[t](n)), {
    c() {
      e = Ke("div"), l && l.c(), Ye(e, "class", i = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-1yserjw"), Ne(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), Ne(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), Ne(
        e,
        "generating",
        /*status*/
        n[4] === "generating"
      ), Ne(
        e,
        "border",
        /*border*/
        n[12]
      ), at(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), at(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      R(u, e, f), ~t && r[t].m(e, null), n[31](e), s = !0;
    },
    p(u, f) {
      let _ = t;
      t = a(u), t === _ ? ~t && r[t].p(u, f) : (l && (Do(), en(r[_], 1, 1, () => {
        r[_] = null;
      }), qo()), ~t ? (l = r[t], l ? l.p(u, f) : (l = r[t] = o[t](u), l.c()), $t(l, 1), l.m(e, null)) : l = null), (!s || f[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1yserjw")) && Ye(e, "class", i), (!s || f[0] & /*variant, show_progress, status, show_progress*/
      336) && Ne(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!s || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ne(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!s || f[0] & /*variant, show_progress, status*/
      336) && Ne(
        e,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!s || f[0] & /*variant, show_progress, border*/
      4416) && Ne(
        e,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && at(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && at(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      s || ($t(l), s = !0);
    },
    o(u) {
      en(l), s = !1;
    },
    d(u) {
      u && I(e), ~t && r[t].d(), n[31](null);
    }
  };
}
var Ic = function(n, e, t, l) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function r(f) {
      try {
        u(l.next(f));
      } catch (_) {
        o(_);
      }
    }
    function a(f) {
      try {
        u(l.throw(f));
      } catch (_) {
        o(_);
      }
    }
    function u(f) {
      f.done ? s(f.value) : i(f.value).then(r, a);
    }
    u((l = l.apply(n, e || [])).next());
  });
};
let Nn = [], Ul = !1;
function Rc(n) {
  return Ic(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Nn.push(e), !Ul)
        Ul = !0;
      else
        return;
      yield Cc(), requestAnimationFrame(() => {
        let l = [0, 0];
        for (let i = 0; i < Nn.length; i++) {
          const o = Nn[i].getBoundingClientRect();
          (i === 0 || o.top + window.scrollY <= l[0]) && (l[0] = o.top + window.scrollY, l[1] = i);
        }
        window.scrollTo({ top: l[0] - 20, behavior: "smooth" }), Ul = !1, Nn = [];
      });
    }
  });
}
function Fc(n, e, t) {
  let l, { $$slots: i = {}, $$scope: s } = e;
  this && this.__awaiter;
  let { i18n: o } = e, { eta: r = null } = e, { queue_position: a } = e, { queue_size: u } = e, { status: f } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: c = "full" } = e, { message: h = null } = e, { progress: b = null } = e, { variant: g = "default" } = e, { loading_text: m = "Loading..." } = e, { absolute: v = !0 } = e, { translucent: p = !1 } = e, { border: C = !1 } = e, { autoscroll: M } = e, k, D = !1, w = 0, A = 0, O = null, U = null, B = 0, H = null, ne, $ = null, he = !0;
  const ke = () => {
    t(0, r = t(26, O = t(19, E = null))), t(24, w = performance.now()), t(25, A = 0), D = !0, ge();
  };
  function ge() {
    requestAnimationFrame(() => {
      t(25, A = (performance.now() - w) / 1e3), D && ge();
    });
  }
  function ye() {
    t(25, A = 0), t(0, r = t(26, O = t(19, E = null))), D && (D = !1);
  }
  zc(() => {
    D && ye();
  });
  let E = null;
  function Y(S) {
    ns[S ? "unshift" : "push"](() => {
      $ = S, t(16, $), t(7, b), t(14, H), t(15, ne);
    });
  }
  function q(S) {
    ns[S ? "unshift" : "push"](() => {
      k = S, t(13, k);
    });
  }
  return n.$$set = (S) => {
    "i18n" in S && t(1, o = S.i18n), "eta" in S && t(0, r = S.eta), "queue_position" in S && t(2, a = S.queue_position), "queue_size" in S && t(3, u = S.queue_size), "status" in S && t(4, f = S.status), "scroll_to_output" in S && t(21, _ = S.scroll_to_output), "timer" in S && t(5, d = S.timer), "show_progress" in S && t(6, c = S.show_progress), "message" in S && t(22, h = S.message), "progress" in S && t(7, b = S.progress), "variant" in S && t(8, g = S.variant), "loading_text" in S && t(9, m = S.loading_text), "absolute" in S && t(10, v = S.absolute), "translucent" in S && t(11, p = S.translucent), "border" in S && t(12, C = S.border), "autoscroll" in S && t(23, M = S.autoscroll), "$$scope" in S && t(28, s = S.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (r === null && t(0, r = O), r != null && O !== r && (t(27, U = (performance.now() - w) / 1e3 + r), t(19, E = U.toFixed(1)), t(26, O = r))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && t(17, B = U === null || U <= 0 || !A ? null : Math.min(A / U, 1)), n.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, he = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, H = b.map((S) => {
      if (S.index != null && S.length != null)
        return S.index / S.length;
      if (S.progress != null)
        return S.progress;
    })) : t(14, H = null), H ? (t(15, ne = H[H.length - 1]), $ && (ne === 0 ? t(16, $.style.transition = "0", $) : t(16, $.style.transition = "150ms", $))) : t(15, ne = void 0)), n.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? ke() : ye()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && k && _ && (f === "pending" || f === "complete") && Rc(k, M), n.$$.dirty[0] & /*status, message*/
    4194320, n.$$.dirty[0] & /*timer_diff*/
    33554432 && t(20, l = A.toFixed(1));
  }, [
    r,
    o,
    a,
    u,
    f,
    d,
    c,
    b,
    g,
    m,
    v,
    p,
    C,
    k,
    H,
    ne,
    $,
    B,
    he,
    E,
    l,
    _,
    h,
    M,
    w,
    A,
    O,
    U,
    s,
    i,
    Y,
    q
  ];
}
class Hc extends hc {
  constructor(e) {
    super(), vc(
      this,
      e,
      Fc,
      Uc,
      yc,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
const { setContext: Ph, getContext: Pc } = window.__gradio__svelte__internal, Wc = "WORKER_PROXY_CONTEXT_KEY";
function Ao() {
  return Pc(Wc);
}
function Xc(n) {
  return n.host === window.location.host || n.host === "localhost:7860" || n.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  n.host === "lite.local";
}
function Mo(n, e) {
  const t = e.toLowerCase();
  for (const [l, i] of Object.entries(n))
    if (l.toLowerCase() === t)
      return i;
}
function jo(n) {
  if (n == null)
    return !1;
  const e = new URL(n);
  return !(!Xc(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Yc(n) {
  if (n == null || !jo(n))
    return n;
  const e = Ao();
  if (e == null)
    return n;
  const l = new URL(n).pathname;
  return e.httpRequest({
    method: "GET",
    path: l,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${l} from the Wasm worker.`);
    const s = new Blob([i.body], {
      type: Mo(i.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: Vc,
  assign: tl,
  check_outros: Lo,
  compute_rest_props: bs,
  create_slot: wi,
  detach: hl,
  element: Bo,
  empty: To,
  exclude_internal_props: Zc,
  get_all_dirty_from_scope: vi,
  get_slot_changes: ki,
  get_spread_update: No,
  group_outros: Oo,
  init: Gc,
  insert: ml,
  listen: Uo,
  prevent_default: Jc,
  safe_not_equal: Kc,
  set_attributes: nl,
  transition_in: Et,
  transition_out: Dt,
  update_slot_base: yi
} = window.__gradio__svelte__internal, { createEventDispatcher: Qc } = window.__gradio__svelte__internal;
function xc(n) {
  let e, t, l, i, s;
  const o = (
    /*#slots*/
    n[8].default
  ), r = wi(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      n[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      n[1]
    ) },
    /*$$restProps*/
    n[6]
  ], u = {};
  for (let f = 0; f < a.length; f += 1)
    u = tl(u, a[f]);
  return {
    c() {
      e = Bo("a"), r && r.c(), nl(e, u);
    },
    m(f, _) {
      ml(f, e, _), r && r.m(e, null), l = !0, i || (s = Uo(
        e,
        "click",
        /*dispatch*/
        n[3].bind(null, "click")
      ), i = !0);
    },
    p(f, _) {
      r && r.p && (!l || _ & /*$$scope*/
      128) && yi(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        l ? ki(
          o,
          /*$$scope*/
          f[7],
          _,
          null
        ) : vi(
          /*$$scope*/
          f[7]
        ),
        null
      ), nl(e, u = No(a, [
        (!l || _ & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!l || _ & /*download*/
        2) && { download: (
          /*download*/
          f[1]
        ) },
        _ & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ]));
    },
    i(f) {
      l || (Et(r, f), l = !0);
    },
    o(f) {
      Dt(r, f), l = !1;
    },
    d(f) {
      f && hl(e), r && r.d(f), i = !1, s();
    }
  };
}
function $c(n) {
  let e, t, l, i;
  const s = [t_, e_], o = [];
  function r(a, u) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(n), t = o[e] = s[e](n), {
    c() {
      t.c(), l = To();
    },
    m(a, u) {
      o[e].m(a, u), ml(a, l, u), i = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (Oo(), Dt(o[f], 1, 1, () => {
        o[f] = null;
      }), Lo(), t = o[e], t ? t.p(a, u) : (t = o[e] = s[e](a), t.c()), Et(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (Et(t), i = !0);
    },
    o(a) {
      Dt(t), i = !1;
    },
    d(a) {
      a && hl(l), o[e].d(a);
    }
  };
}
function e_(n) {
  let e, t, l, i;
  const s = (
    /*#slots*/
    n[8].default
  ), o = wi(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let r = [
    /*$$restProps*/
    n[6],
    { href: (
      /*href*/
      n[0]
    ) }
  ], a = {};
  for (let u = 0; u < r.length; u += 1)
    a = tl(a, r[u]);
  return {
    c() {
      e = Bo("a"), o && o.c(), nl(e, a);
    },
    m(u, f) {
      ml(u, e, f), o && o.m(e, null), t = !0, l || (i = Uo(e, "click", Jc(
        /*wasm_click_handler*/
        n[5]
      )), l = !0);
    },
    p(u, f) {
      o && o.p && (!t || f & /*$$scope*/
      128) && yi(
        o,
        s,
        u,
        /*$$scope*/
        u[7],
        t ? ki(
          s,
          /*$$scope*/
          u[7],
          f,
          null
        ) : vi(
          /*$$scope*/
          u[7]
        ),
        null
      ), nl(e, a = No(r, [
        f & /*$$restProps*/
        64 && /*$$restProps*/
        u[6],
        (!t || f & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) }
      ]));
    },
    i(u) {
      t || (Et(o, u), t = !0);
    },
    o(u) {
      Dt(o, u), t = !1;
    },
    d(u) {
      u && hl(e), o && o.d(u), l = !1, i();
    }
  };
}
function t_(n) {
  let e;
  const t = (
    /*#slots*/
    n[8].default
  ), l = wi(
    t,
    n,
    /*$$scope*/
    n[7],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, s) {
      l && l.m(i, s), e = !0;
    },
    p(i, s) {
      l && l.p && (!e || s & /*$$scope*/
      128) && yi(
        l,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? ki(
          t,
          /*$$scope*/
          i[7],
          s,
          null
        ) : vi(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (Et(l, i), e = !0);
    },
    o(i) {
      Dt(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function n_(n) {
  let e, t, l, i, s;
  const o = [$c, xc], r = [];
  function a(u, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (u[4] && jo(
      /*href*/
      u[0]
    ))), e ? 0 : 1;
  }
  return t = a(n, -1), l = r[t] = o[t](n), {
    c() {
      l.c(), i = To();
    },
    m(u, f) {
      r[t].m(u, f), ml(u, i, f), s = !0;
    },
    p(u, [f]) {
      let _ = t;
      t = a(u, f), t === _ ? r[t].p(u, f) : (Oo(), Dt(r[_], 1, 1, () => {
        r[_] = null;
      }), Lo(), l = r[t], l ? l.p(u, f) : (l = r[t] = o[t](u), l.c()), Et(l, 1), l.m(i.parentNode, i));
    },
    i(u) {
      s || (Et(l), s = !0);
    },
    o(u) {
      Dt(l), s = !1;
    },
    d(u) {
      u && hl(i), r[t].d(u);
    }
  };
}
function l_(n, e, t) {
  const l = ["href", "download"];
  let i = bs(e, l), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(h, b, g, m) {
    function v(p) {
      return p instanceof g ? p : new g(function(C) {
        C(p);
      });
    }
    return new (g || (g = Promise))(function(p, C) {
      function M(w) {
        try {
          D(m.next(w));
        } catch (A) {
          C(A);
        }
      }
      function k(w) {
        try {
          D(m.throw(w));
        } catch (A) {
          C(A);
        }
      }
      function D(w) {
        w.done ? p(w.value) : v(w.value).then(M, k);
      }
      D((m = m.apply(h, b || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: u } = e;
  const f = Qc();
  let _ = !1;
  const d = Ao();
  function c() {
    return r(this, void 0, void 0, function* () {
      if (_)
        return;
      if (f("click"), a == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const b = new URL(a).pathname;
      t(2, _ = !0), d.httpRequest({
        method: "GET",
        path: b,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${b} from the Wasm worker.`);
        const m = new Blob(
          [g.body],
          {
            type: Mo(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(m), p = document.createElement("a");
        p.href = v, p.download = u, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, _ = !1);
      });
    });
  }
  return n.$$set = (h) => {
    e = tl(tl({}, e), Zc(h)), t(6, i = bs(e, l)), "href" in h && t(0, a = h.href), "download" in h && t(1, u = h.download), "$$scope" in h && t(7, o = h.$$scope);
  }, [
    a,
    u,
    _,
    f,
    d,
    c,
    i,
    o,
    s
  ];
}
class i_ extends Vc {
  constructor(e) {
    super(), Gc(this, e, l_, n_, Kc, { href: 0, download: 1 });
  }
}
var Il = new Intl.Collator(0, { numeric: 1 }).compare;
function ps(n, e, t) {
  return n = n.split("."), e = e.split("."), Il(n[0], e[0]) || Il(n[1], e[1]) || (e[2] = e.slice(2).join("."), t = /[.-]/.test(n[2] = n.slice(2).join(".")), t == /[.-]/.test(e[2]) ? Il(n[2], e[2]) : t ? -1 : 1);
}
function Io(n, e, t) {
  return e.startsWith("http://") || e.startsWith("https://") ? t ? n : e : n + e;
}
function Rl(n) {
  if (n.startsWith("http")) {
    const { protocol: e, host: t } = new URL(n);
    return t.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: t,
      http_protocol: e
    } : {
      ws_protocol: e === "https:" ? "wss" : "ws",
      http_protocol: e,
      host: t
    };
  } else if (n.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: n
  };
}
const Ro = /^[^\/]*\/[^\/]*$/, s_ = /.*hf\.space\/{0,1}$/;
async function o_(n, e) {
  const t = {};
  e && (t.Authorization = `Bearer ${e}`);
  const l = n.trim();
  if (Ro.test(l))
    try {
      const i = await fetch(
        `https://huggingface.co/api/spaces/${l}/host`,
        { headers: t }
      );
      if (i.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const s = (await i.json()).host;
      return {
        space_id: n,
        ...Rl(s)
      };
    } catch (i) {
      throw new Error("Space metadata could not be loaded." + i.message);
    }
  if (s_.test(l)) {
    const { ws_protocol: i, http_protocol: s, host: o } = Rl(l);
    return {
      space_id: o.replace(".hf.space", ""),
      ws_protocol: i,
      http_protocol: s,
      host: o
    };
  }
  return {
    space_id: !1,
    ...Rl(l)
  };
}
function a_(n) {
  let e = {};
  return n.forEach(({ api_name: t }, l) => {
    t && (e[t] = l);
  }), e;
}
const r_ = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function ws(n) {
  try {
    const t = (await fetch(
      `https://huggingface.co/api/spaces/${n}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(t && r_.test(t));
  } catch {
    return !1;
  }
}
function u_(n, e, t, l) {
  if (e.length === 0) {
    if (t === "replace")
      return l;
    if (t === "append")
      return n + l;
    throw new Error(`Unsupported action: ${t}`);
  }
  let i = n;
  for (let o = 0; o < e.length - 1; o++)
    i = i[e[o]];
  const s = e[e.length - 1];
  switch (t) {
    case "replace":
      i[s] = l;
      break;
    case "append":
      i[s] += l;
      break;
    case "add":
      Array.isArray(i) ? i.splice(Number(s), 0, l) : i[s] = l;
      break;
    case "delete":
      Array.isArray(i) ? i.splice(Number(s), 1) : delete i[s];
      break;
    default:
      throw new Error(`Unknown action: ${t}`);
  }
  return n;
}
function f_(n, e) {
  return e.forEach(([t, l, i]) => {
    n = u_(n, l, t, i);
  }), n;
}
async function c_(n, e, t, l = h_) {
  let i = (Array.isArray(n) ? n : [n]).map(
    (s) => s.blob
  );
  return await Promise.all(
    await l(e, i, void 0, t).then(
      async (s) => {
        if (s.error)
          throw new Error(s.error);
        return s.files ? s.files.map((o, r) => new Si({
          ...n[r],
          path: o,
          url: e + "/file=" + o
        })) : [];
      }
    )
  );
}
async function __(n, e) {
  return n.map(
    (t, l) => new Si({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Si {
  constructor({
    path: e,
    url: t,
    orig_name: l,
    size: i,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    this.path = e, this.url = t, this.orig_name = l, this.size = i, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
const Fo = "This application is too busy. Keep trying!", ht = "Connection errored out.";
let Ho;
function d_(n, e) {
  return { post_data: t, upload_files: l, client: i, handle_blob: s };
  async function t(o, r, a) {
    const u = { "Content-Type": "application/json" };
    a && (u.Authorization = `Bearer ${a}`);
    try {
      var f = await n(o, {
        method: "POST",
        body: JSON.stringify(r),
        headers: u
      });
    } catch {
      return [{ error: ht }, 500];
    }
    let _, d;
    try {
      _ = await f.json(), d = f.status;
    } catch (c) {
      _ = { error: `Could not parse server response: ${c}` }, d = 500;
    }
    return [_, d];
  }
  async function l(o, r, a, u) {
    const f = {};
    a && (f.Authorization = `Bearer ${a}`);
    const _ = 1e3, d = [];
    for (let h = 0; h < r.length; h += _) {
      const b = r.slice(h, h + _), g = new FormData();
      b.forEach((v) => {
        g.append("files", v);
      });
      try {
        const v = u ? `${o}/upload?upload_id=${u}` : `${o}/upload`;
        var c = await n(v, {
          method: "POST",
          body: g,
          headers: f
        });
      } catch {
        return { error: ht };
      }
      const m = await c.json();
      d.push(...m);
    }
    return { files: d };
  }
  async function i(o, r = {}) {
    return new Promise(async (a) => {
      const { status_callback: u, hf_token: f } = r, _ = {
        predict: ne,
        submit: $,
        view_api: ye,
        component_server: ge
      };
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const E = await import("./wrapper-6f348d45-DjpFDl6n.js");
        Ho = (await import("./__vite-browser-external-DYxpcVy9.js")).Blob, global.WebSocket = E.WebSocket;
      }
      const { ws_protocol: d, http_protocol: c, host: h, space_id: b } = await o_(o, f), g = Math.random().toString(36).substring(2), m = {};
      let v = !1, p = {}, C = {}, M = null;
      const k = {}, D = /* @__PURE__ */ new Set();
      let w, A = {}, O = !1;
      f && b && (O = await g_(b, f));
      async function U(E) {
        if (w = E, window.location.protocol === "https:" && (w.root = w.root.replace("http://", "https://")), A = a_((E == null ? void 0 : E.dependencies) || []), w.auth_required)
          return {
            config: w,
            ..._
          };
        try {
          B = await ye(w);
        } catch (Y) {
          console.error(`Could not get api details: ${Y.message}`);
        }
        return {
          config: w,
          ..._
        };
      }
      let B;
      async function H(E) {
        if (u && u(E), E.status === "running")
          try {
            w = await Ss(
              n,
              `${c}//${h}`,
              f
            );
            const Y = await U(w);
            a(Y);
          } catch (Y) {
            console.error(Y), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        w = await Ss(
          n,
          `${c}//${h}`,
          f
        );
        const E = await U(w);
        a(E);
      } catch (E) {
        console.error(E), b ? ui(
          b,
          Ro.test(b) ? "space_name" : "subdomain",
          H
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function ne(E, Y, q) {
        let S = !1, j = !1, F;
        if (typeof E == "number")
          F = w.dependencies[E];
        else {
          const y = E.replace(/^\//, "");
          F = w.dependencies[A[y]];
        }
        if (F.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((y, z) => {
          const Z = $(E, Y, q);
          let T;
          Z.on("data", (se) => {
            j && (Z.destroy(), y(se)), S = !0, T = se;
          }).on("status", (se) => {
            se.stage === "error" && z(se), se.stage === "complete" && (j = !0, S && (Z.destroy(), y(T)));
          });
        });
      }
      function $(E, Y, q, S = null) {
        let j, F;
        if (typeof E == "number")
          j = E, F = B.unnamed_endpoints[j];
        else {
          const Q = E.replace(/^\//, "");
          j = A[Q], F = B.named_endpoints[E.trim()];
        }
        if (typeof j != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let y, z, Z = w.protocol ?? "ws";
        const T = typeof E == "number" ? "/predict" : E;
        let se, le = null, W = !1;
        const ie = {};
        let L = "";
        typeof window < "u" && (L = new URLSearchParams(window.location.search).toString()), s(`${w.root}`, Y, F, f).then(
          (Q) => {
            if (se = {
              data: Q || [],
              event_data: q,
              fn_index: j,
              trigger_id: S
            }, b_(j, w))
              N({
                type: "status",
                endpoint: T,
                stage: "pending",
                queue: !1,
                fn_index: j,
                time: /* @__PURE__ */ new Date()
              }), t(
                `${w.root}/run${T.startsWith("/") ? T : `/${T}`}${L ? "?" + L : ""}`,
                {
                  ...se,
                  session_hash: g
                },
                f
              ).then(([ee, te]) => {
                const me = ee.data;
                te == 200 ? (N({
                  type: "data",
                  endpoint: T,
                  fn_index: j,
                  data: me,
                  time: /* @__PURE__ */ new Date()
                }), N({
                  type: "status",
                  endpoint: T,
                  fn_index: j,
                  stage: "complete",
                  eta: ee.average_duration,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                })) : N({
                  type: "status",
                  stage: "error",
                  endpoint: T,
                  fn_index: j,
                  message: ee.error,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              }).catch((ee) => {
                N({
                  type: "status",
                  stage: "error",
                  message: ee.message,
                  endpoint: T,
                  fn_index: j,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              });
            else if (Z == "ws") {
              N({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: T,
                fn_index: j,
                time: /* @__PURE__ */ new Date()
              });
              let ee = new URL(`${d}://${Io(
                h,
                w.path,
                !0
              )}
							/queue/join${L ? "?" + L : ""}`);
              O && ee.searchParams.set("__sign", O), y = new WebSocket(ee), y.onclose = (te) => {
                te.wasClean || N({
                  type: "status",
                  stage: "error",
                  broken: !0,
                  message: ht,
                  queue: !0,
                  endpoint: T,
                  fn_index: j,
                  time: /* @__PURE__ */ new Date()
                });
              }, y.onmessage = function(te) {
                const me = JSON.parse(te.data), { type: ce, status: V, data: x } = Fl(
                  me,
                  m[j]
                );
                if (ce === "update" && V && !W)
                  N({
                    type: "status",
                    endpoint: T,
                    fn_index: j,
                    time: /* @__PURE__ */ new Date(),
                    ...V
                  }), V.stage === "error" && y.close();
                else if (ce === "hash") {
                  y.send(JSON.stringify({ fn_index: j, session_hash: g }));
                  return;
                } else
                  ce === "data" ? y.send(JSON.stringify({ ...se, session_hash: g })) : ce === "complete" ? W = V : ce === "log" ? N({
                    type: "log",
                    log: x.log,
                    level: x.level,
                    endpoint: T,
                    fn_index: j
                  }) : ce === "generating" && N({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...V,
                    stage: V == null ? void 0 : V.stage,
                    queue: !0,
                    endpoint: T,
                    fn_index: j
                  });
                x && (N({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: x.data,
                  endpoint: T,
                  fn_index: j
                }), W && (N({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...W,
                  stage: V == null ? void 0 : V.stage,
                  queue: !0,
                  endpoint: T,
                  fn_index: j
                }), y.close()));
              }, ps(w.version || "2.0.0", "3.6") < 0 && addEventListener(
                "open",
                () => y.send(JSON.stringify({ hash: g }))
              );
            } else if (Z == "sse") {
              N({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: T,
                fn_index: j,
                time: /* @__PURE__ */ new Date()
              });
              var de = new URLSearchParams({
                fn_index: j.toString(),
                session_hash: g
              }).toString();
              let ee = new URL(
                `${w.root}/queue/join?${L ? L + "&" : ""}${de}`
              );
              z = e(ee), z.onmessage = async function(te) {
                const me = JSON.parse(te.data), { type: ce, status: V, data: x } = Fl(
                  me,
                  m[j]
                );
                if (ce === "update" && V && !W)
                  N({
                    type: "status",
                    endpoint: T,
                    fn_index: j,
                    time: /* @__PURE__ */ new Date(),
                    ...V
                  }), V.stage === "error" && z.close();
                else if (ce === "data") {
                  le = me.event_id;
                  let [dt, da] = await t(
                    `${w.root}/queue/data`,
                    {
                      ...se,
                      session_hash: g,
                      event_id: le
                    },
                    f
                  );
                  da !== 200 && (N({
                    type: "status",
                    stage: "error",
                    message: ht,
                    queue: !0,
                    endpoint: T,
                    fn_index: j,
                    time: /* @__PURE__ */ new Date()
                  }), z.close());
                } else
                  ce === "complete" ? W = V : ce === "log" ? N({
                    type: "log",
                    log: x.log,
                    level: x.level,
                    endpoint: T,
                    fn_index: j
                  }) : ce === "generating" && N({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...V,
                    stage: V == null ? void 0 : V.stage,
                    queue: !0,
                    endpoint: T,
                    fn_index: j
                  });
                x && (N({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: x.data,
                  endpoint: T,
                  fn_index: j
                }), W && (N({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...W,
                  stage: V == null ? void 0 : V.stage,
                  queue: !0,
                  endpoint: T,
                  fn_index: j
                }), z.close()));
              };
            } else
              (Z == "sse_v1" || Z == "sse_v2") && (N({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: T,
                fn_index: j,
                time: /* @__PURE__ */ new Date()
              }), t(
                `${w.root}/queue/join?${L}`,
                {
                  ...se,
                  session_hash: g
                },
                f
              ).then(([ee, te]) => {
                if (te === 503)
                  N({
                    type: "status",
                    stage: "error",
                    message: Fo,
                    queue: !0,
                    endpoint: T,
                    fn_index: j,
                    time: /* @__PURE__ */ new Date()
                  });
                else if (te !== 200)
                  N({
                    type: "status",
                    stage: "error",
                    message: ht,
                    queue: !0,
                    endpoint: T,
                    fn_index: j,
                    time: /* @__PURE__ */ new Date()
                  });
                else {
                  le = ee.event_id;
                  let me = async function(ce) {
                    try {
                      const { type: V, status: x, data: dt } = Fl(
                        ce,
                        m[j]
                      );
                      if (V == "heartbeat")
                        return;
                      if (V === "update" && x && !W)
                        N({
                          type: "status",
                          endpoint: T,
                          fn_index: j,
                          time: /* @__PURE__ */ new Date(),
                          ...x
                        });
                      else if (V === "complete")
                        W = x;
                      else if (V == "unexpected_error")
                        console.error("Unexpected error", x == null ? void 0 : x.message), N({
                          type: "status",
                          stage: "error",
                          message: (x == null ? void 0 : x.message) || "An Unexpected Error Occurred!",
                          queue: !0,
                          endpoint: T,
                          fn_index: j,
                          time: /* @__PURE__ */ new Date()
                        });
                      else if (V === "log") {
                        N({
                          type: "log",
                          log: dt.log,
                          level: dt.level,
                          endpoint: T,
                          fn_index: j
                        });
                        return;
                      } else
                        V === "generating" && (N({
                          type: "status",
                          time: /* @__PURE__ */ new Date(),
                          ...x,
                          stage: x == null ? void 0 : x.stage,
                          queue: !0,
                          endpoint: T,
                          fn_index: j
                        }), dt && Z === "sse_v2" && P(le, dt));
                      dt && (N({
                        type: "data",
                        time: /* @__PURE__ */ new Date(),
                        data: dt.data,
                        endpoint: T,
                        fn_index: j
                      }), W && N({
                        type: "status",
                        time: /* @__PURE__ */ new Date(),
                        ...W,
                        stage: x == null ? void 0 : x.stage,
                        queue: !0,
                        endpoint: T,
                        fn_index: j
                      })), ((x == null ? void 0 : x.stage) === "complete" || (x == null ? void 0 : x.stage) === "error") && (k[le] && delete k[le], le in C && delete C[le]);
                    } catch (V) {
                      console.error("Unexpected client exception", V), N({
                        type: "status",
                        stage: "error",
                        message: "An Unexpected Error Occurred!",
                        queue: !0,
                        endpoint: T,
                        fn_index: j,
                        time: /* @__PURE__ */ new Date()
                      }), ke();
                    }
                  };
                  le in p && (p[le].forEach(
                    (ce) => me(ce)
                  ), delete p[le]), k[le] = me, D.add(le), v || he();
                }
              }));
          }
        );
        function P(Q, de) {
          !C[Q] ? (C[Q] = [], de.data.forEach((te, me) => {
            C[Q][me] = te;
          })) : de.data.forEach((te, me) => {
            let ce = f_(
              C[Q][me],
              te
            );
            C[Q][me] = ce, de.data[me] = ce;
          });
        }
        function N(Q) {
          const ee = ie[Q.type] || [];
          ee == null || ee.forEach((te) => te(Q));
        }
        function K(Q, de) {
          const ee = ie, te = ee[Q] || [];
          return ee[Q] = te, te == null || te.push(de), { on: K, off: Se, cancel: Ce, destroy: $e };
        }
        function Se(Q, de) {
          const ee = ie;
          let te = ee[Q] || [];
          return te = te == null ? void 0 : te.filter((me) => me !== de), ee[Q] = te, { on: K, off: Se, cancel: Ce, destroy: $e };
        }
        async function Ce() {
          const Q = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          W = Q, N({
            ...Q,
            type: "status",
            endpoint: T,
            fn_index: j
          });
          let de = {};
          Z === "ws" ? (y && y.readyState === 0 ? y.addEventListener("open", () => {
            y.close();
          }) : y.close(), de = { fn_index: j, session_hash: g }) : (z.close(), de = { event_id: le });
          try {
            await n(`${w.root}/reset`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(de)
            });
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function $e() {
          for (const Q in ie)
            ie[Q].forEach((de) => {
              Se(Q, de);
            });
        }
        return {
          on: K,
          off: Se,
          cancel: Ce,
          destroy: $e
        };
      }
      function he() {
        v = !0;
        let E = new URLSearchParams({
          session_hash: g
        }).toString(), Y = new URL(`${w.root}/queue/data?${E}`);
        M = e(Y), M.onmessage = async function(q) {
          let S = JSON.parse(q.data);
          const j = S.event_id;
          if (!j)
            await Promise.all(
              Object.keys(k).map(
                (F) => k[F](S)
              )
            );
          else if (k[j]) {
            S.msg === "process_completed" && (D.delete(j), D.size === 0 && ke());
            let F = k[j];
            window.setTimeout(F, 0, S);
          } else
            p[j] || (p[j] = []), p[j].push(S);
        }, M.onerror = async function(q) {
          await Promise.all(
            Object.keys(k).map(
              (S) => k[S]({
                msg: "unexpected_error",
                message: ht
              })
            )
          ), ke();
        };
      }
      function ke() {
        v = !1, M == null || M.close();
      }
      async function ge(E, Y, q) {
        var S;
        const j = { "Content-Type": "application/json" };
        f && (j.Authorization = `Bearer ${f}`);
        let F, y = w.components.find(
          (T) => T.id === E
        );
        (S = y == null ? void 0 : y.props) != null && S.root_url ? F = y.props.root_url : F = w.root;
        const z = await n(
          `${F}/component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: q,
              component_id: E,
              fn_name: Y,
              session_hash: g
            }),
            headers: j
          }
        );
        if (!z.ok)
          throw new Error(
            "Could not connect to component server: " + z.statusText
          );
        return await z.json();
      }
      async function ye(E) {
        if (B)
          return B;
        const Y = { "Content-Type": "application/json" };
        f && (Y.Authorization = `Bearer ${f}`);
        let q;
        if (ps(E.version || "2.0.0", "3.30") < 0 ? q = await n(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(E)
            }),
            headers: Y
          }
        ) : q = await n(`${E.root}/info`, {
          headers: Y
        }), !q.ok)
          throw new Error(ht);
        let S = await q.json();
        return "api" in S && (S = S.api), S.named_endpoints["/predict"] && !S.unnamed_endpoints[0] && (S.unnamed_endpoints[0] = S.named_endpoints["/predict"]), m_(S, E, A);
      }
    });
  }
  async function s(o, r, a, u) {
    const f = await ri(
      r,
      void 0,
      [],
      !0,
      a
    );
    return Promise.all(
      f.map(async ({ path: _, blob: d, type: c }) => {
        if (d) {
          const h = (await l(o, [d], u)).files[0];
          return { path: _, file_url: h, type: c, name: d == null ? void 0 : d.name };
        }
        return { path: _, type: c };
      })
    ).then((_) => (_.forEach(({ path: d, file_url: c, type: h, name: b }) => {
      if (h === "Gallery")
        ys(r, c, d);
      else if (c) {
        const g = new Si({ path: c, orig_name: b });
        ys(r, g, d);
      }
    }), r));
  }
}
const { post_data: Wh, upload_files: h_, client: Xh, handle_blob: Yh } = d_(
  fetch,
  (...n) => new EventSource(...n)
);
function vs(n, e, t, l) {
  switch (n.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (t === "JSONSerializable" || t === "StringSerializable")
    return "any";
  if (t === "ListStringSerializable")
    return "string[]";
  if (e === "Image")
    return l === "parameter" ? "Blob | File | Buffer" : "string";
  if (t === "FileSerializable")
    return (n == null ? void 0 : n.type) === "array" ? l === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : l === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (t === "GallerySerializable")
    return l === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function ks(n, e) {
  return e === "GallerySerializable" ? "array of [file, label] tuples" : e === "ListStringSerializable" ? "array of strings" : e === "FileSerializable" ? "array of files or single file" : n.description;
}
function m_(n, e, t) {
  const l = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const i in n) {
    const s = n[i];
    for (const o in s) {
      const r = e.dependencies[o] ? o : t[o.replace("/", "")], a = s[o];
      l[i][o] = {}, l[i][o].parameters = {}, l[i][o].returns = {}, l[i][o].type = e.dependencies[r].types, l[i][o].parameters = a.parameters.map(
        ({ label: u, component: f, type: _, serializer: d }) => ({
          label: u,
          component: f,
          type: vs(_, f, d, "parameter"),
          description: ks(_, d)
        })
      ), l[i][o].returns = a.returns.map(
        ({ label: u, component: f, type: _, serializer: d }) => ({
          label: u,
          component: f,
          type: vs(_, f, d, "return"),
          description: ks(_, d)
        })
      );
    }
  }
  return l;
}
async function g_(n, e) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${n}/jwt`, {
      headers: {
        Authorization: `Bearer ${e}`
      }
    })).json()).token || !1;
  } catch (t) {
    return console.error(t), !1;
  }
}
function ys(n, e, t) {
  for (; t.length > 1; )
    n = n[t.shift()];
  n[t.shift()] = e;
}
async function ri(n, e = void 0, t = [], l = !1, i = void 0) {
  if (Array.isArray(n)) {
    let s = [];
    return await Promise.all(
      n.map(async (o, r) => {
        var a;
        let u = t.slice();
        u.push(r);
        const f = await ri(
          n[r],
          l ? ((a = i == null ? void 0 : i.parameters[r]) == null ? void 0 : a.component) || void 0 : e,
          u,
          !1,
          i
        );
        s = s.concat(f);
      })
    ), s;
  } else {
    if (globalThis.Buffer && n instanceof globalThis.Buffer)
      return [
        {
          path: t,
          blob: e === "Image" ? !1 : new Ho([n]),
          type: e
        }
      ];
    if (typeof n == "object") {
      let s = [];
      for (let o in n)
        if (n.hasOwnProperty(o)) {
          let r = t.slice();
          r.push(o), s = s.concat(
            await ri(
              n[o],
              void 0,
              r,
              !1,
              i
            )
          );
        }
      return s;
    }
  }
  return [];
}
function b_(n, e) {
  var t, l, i, s;
  return !(((l = (t = e == null ? void 0 : e.dependencies) == null ? void 0 : t[n]) == null ? void 0 : l.queue) === null ? e.enable_queue : (s = (i = e == null ? void 0 : e.dependencies) == null ? void 0 : i[n]) != null && s.queue) || !1;
}
async function Ss(n, e, t) {
  const l = {};
  if (t && (l.Authorization = `Bearer ${t}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const i = window.gradio_config.root, s = window.gradio_config;
    return s.root = Io(e, s.root, !1), { ...s, path: i };
  } else if (e) {
    let i = await n(`${e}/config`, {
      headers: l
    });
    if (i.status === 200) {
      const s = await i.json();
      return s.path = s.path ?? "", s.root = e, s;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function ui(n, e, t) {
  let l = e === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${n}` : `https://huggingface.co/api/spaces/${n}`, i, s;
  try {
    if (i = await fetch(l), s = i.status, s !== 200)
      throw new Error();
    i = await i.json();
  } catch {
    t({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!i || s !== 200)
    return;
  const {
    runtime: { stage: o },
    id: r
  } = i;
  switch (o) {
    case "STOPPED":
    case "SLEEPING":
      t({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: o
      }), setTimeout(() => {
        ui(n, e, t);
      }, 1e3);
      break;
    case "PAUSED":
      t({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: o,
        discussions_enabled: await ws(r)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      t({
        status: "running",
        load_status: "complete",
        message: "",
        detail: o
      });
      break;
    case "BUILDING":
      t({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: o
      }), setTimeout(() => {
        ui(n, e, t);
      }, 1e3);
      break;
    default:
      t({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: o,
        discussions_enabled: await ws(r)
      });
      break;
  }
}
function Fl(n, e) {
  switch (n.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: Fo,
          stage: "error",
          code: n.code,
          success: n.success
        }
      };
    case "heartbeat":
      return {
        type: "heartbeat"
      };
    case "unexpected_error":
      return {
        type: "unexpected_error",
        status: {
          queue: !0,
          message: n.message,
          stage: "error",
          success: !1
        }
      };
    case "estimation":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: e || "pending",
          code: n.code,
          size: n.queue_size,
          position: n.rank,
          eta: n.rank_eta,
          success: n.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: n.code,
          progress_data: n.progress_data,
          success: n.success
        }
      };
    case "log":
      return { type: "log", data: n };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: n.success ? null : n.output.error,
          stage: n.success ? "generating" : "error",
          code: n.code,
          progress_data: n.progress_data,
          eta: n.average_duration
        },
        data: n.success ? n.output : null
      };
    case "process_completed":
      return "error" in n.output ? {
        type: "update",
        status: {
          queue: !0,
          message: n.output.error,
          stage: "error",
          code: n.code,
          success: n.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: n.success ? void 0 : n.output.error,
          stage: n.success ? "complete" : "error",
          code: n.code,
          progress_data: n.progress_data
        },
        data: n.success ? n.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: n.code,
          size: n.rank,
          position: 0,
          success: n.success,
          eta: n.eta
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
const {
  SvelteComponent: p_,
  append: Ae,
  attr: vt,
  detach: Po,
  element: kt,
  init: w_,
  insert: Wo,
  noop: Cs,
  safe_not_equal: v_,
  set_data: ll,
  set_style: Hl,
  space: fi,
  text: Jt,
  toggle_class: zs
} = window.__gradio__svelte__internal, { onMount: k_, createEventDispatcher: y_, getContext: S_ } = window.__gradio__svelte__internal;
function qs(n) {
  let e, t, l, i, s = dn(
    /*file_to_display*/
    n[2]
  ) + "", o, r, a, u, f = (
    /*file_to_display*/
    n[2].orig_name + ""
  ), _;
  return {
    c() {
      e = kt("div"), t = kt("span"), l = kt("div"), i = kt("progress"), o = Jt(s), a = fi(), u = kt("span"), _ = Jt(f), Hl(i, "visibility", "hidden"), Hl(i, "height", "0"), Hl(i, "width", "0"), i.value = r = dn(
        /*file_to_display*/
        n[2]
      ), vt(i, "max", "100"), vt(i, "class", "svelte-cr2edf"), vt(l, "class", "progress-bar svelte-cr2edf"), vt(u, "class", "file-name svelte-cr2edf"), vt(e, "class", "file svelte-cr2edf");
    },
    m(d, c) {
      Wo(d, e, c), Ae(e, t), Ae(t, l), Ae(l, i), Ae(i, o), Ae(e, a), Ae(e, u), Ae(u, _);
    },
    p(d, c) {
      c & /*file_to_display*/
      4 && s !== (s = dn(
        /*file_to_display*/
        d[2]
      ) + "") && ll(o, s), c & /*file_to_display*/
      4 && r !== (r = dn(
        /*file_to_display*/
        d[2]
      )) && (i.value = r), c & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      d[2].orig_name + "") && ll(_, f);
    },
    d(d) {
      d && Po(e);
    }
  };
}
function C_(n) {
  let e, t, l, i = (
    /*files_with_progress*/
    n[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    n[0].length > 1 ? "files" : "file"
  ), a, u, f, _ = (
    /*file_to_display*/
    n[2] && qs(n)
  );
  return {
    c() {
      e = kt("div"), t = kt("span"), l = Jt("Uploading "), s = Jt(i), o = fi(), a = Jt(r), u = Jt("..."), f = fi(), _ && _.c(), vt(t, "class", "uploading svelte-cr2edf"), vt(e, "class", "wrap svelte-cr2edf"), zs(
        e,
        "progress",
        /*progress*/
        n[1]
      );
    },
    m(d, c) {
      Wo(d, e, c), Ae(e, t), Ae(t, l), Ae(t, s), Ae(t, o), Ae(t, a), Ae(t, u), Ae(e, f), _ && _.m(e, null);
    },
    p(d, [c]) {
      c & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      d[0].length + "") && ll(s, i), c & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && ll(a, r), /*file_to_display*/
      d[2] ? _ ? _.p(d, c) : (_ = qs(d), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null), c & /*progress*/
      2 && zs(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: Cs,
    o: Cs,
    d(d) {
      d && Po(e), _ && _.d();
    }
  };
}
function dn(n) {
  return n.progress * 100 / (n.size || 0) || 0;
}
function z_(n) {
  let e = 0;
  return n.forEach((t) => {
    e += dn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / n.length).toFixed(2) + "%"), e / n.length;
}
function q_(n, e, t) {
  var l = this && this.__awaiter || function(b, g, m, v) {
    function p(C) {
      return C instanceof m ? C : new m(function(M) {
        M(C);
      });
    }
    return new (m || (m = Promise))(function(C, M) {
      function k(A) {
        try {
          w(v.next(A));
        } catch (O) {
          M(O);
        }
      }
      function D(A) {
        try {
          w(v.throw(A));
        } catch (O) {
          M(O);
        }
      }
      function w(A) {
        A.done ? C(A.value) : p(A.value).then(k, D);
      }
      w((v = v.apply(b, g || [])).next());
    });
  };
  let { upload_id: i } = e, { root: s } = e, { files: o } = e, r, a = !1, u, f, _ = o.map((b) => Object.assign(Object.assign({}, b), { progress: 0 }));
  const d = y_();
  function c(b, g) {
    t(0, _ = _.map((m) => (m.orig_name === b && (m.progress += g), m)));
  }
  const h = S_("EventSource_factory");
  return k_(() => {
    r = h(new URL(`${s}/upload_progress?upload_id=${i}`)), r.onmessage = function(b) {
      return l(this, void 0, void 0, function* () {
        const g = JSON.parse(b.data);
        a || t(1, a = !0), g.msg === "done" ? (r.close(), d("done")) : (t(6, u = g), c(g.orig_name, g.chunk_size));
      });
    };
  }), n.$$set = (b) => {
    "upload_id" in b && t(3, i = b.upload_id), "root" in b && t(4, s = b.root), "files" in b && t(5, o = b.files);
  }, n.$$.update = () => {
    n.$$.dirty & /*files_with_progress*/
    1 && z_(_), n.$$.dirty & /*current_file_upload, files_with_progress*/
    65 && t(2, f = u || _[0]);
  }, [
    _,
    a,
    f,
    i,
    s,
    o,
    u
  ];
}
class E_ extends p_ {
  constructor(e) {
    super(), w_(this, e, q_, C_, v_, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: D_,
  append: Es,
  attr: we,
  binding_callbacks: A_,
  bubble: mt,
  check_outros: Xo,
  create_component: M_,
  create_slot: Yo,
  destroy_component: j_,
  detach: gl,
  element: ci,
  empty: Vo,
  get_all_dirty_from_scope: Zo,
  get_slot_changes: Go,
  group_outros: Jo,
  init: L_,
  insert: bl,
  listen: je,
  mount_component: B_,
  prevent_default: gt,
  run_all: T_,
  safe_not_equal: N_,
  set_style: Ko,
  space: O_,
  stop_propagation: bt,
  toggle_class: ve,
  transition_in: rt,
  transition_out: At,
  update_slot_base: Qo
} = window.__gradio__svelte__internal, { createEventDispatcher: U_, tick: I_, getContext: R_ } = window.__gradio__svelte__internal;
function F_(n) {
  let e, t, l, i, s, o, r, a, u, f;
  const _ = (
    /*#slots*/
    n[22].default
  ), d = Yo(
    _,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ci("button"), d && d.c(), t = O_(), l = ci("input"), we(l, "aria-label", "file upload"), we(l, "data-testid", "file-upload"), we(l, "type", "file"), we(
        l,
        "accept",
        /*accept_file_types*/
        n[12]
      ), l.multiple = i = /*file_count*/
      n[5] === "multiple" || void 0, we(l, "webkitdirectory", s = /*file_count*/
      n[5] === "directory" || void 0), we(l, "mozdirectory", o = /*file_count*/
      n[5] === "directory" || void 0), we(l, "class", "svelte-1aq8tno"), we(e, "tabindex", r = /*hidden*/
      n[7] ? -1 : 0), we(e, "class", "svelte-1aq8tno"), ve(
        e,
        "hidden",
        /*hidden*/
        n[7]
      ), ve(
        e,
        "center",
        /*center*/
        n[3]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        n[2]
      ), ve(
        e,
        "flex",
        /*flex*/
        n[4]
      ), Ko(e, "height", "100%");
    },
    m(c, h) {
      bl(c, e, h), d && d.m(e, null), Es(e, t), Es(e, l), n[30](l), a = !0, u || (f = [
        je(
          l,
          "change",
          /*load_files_from_upload*/
          n[15]
        ),
        je(e, "drag", bt(gt(
          /*drag_handler*/
          n[23]
        ))),
        je(e, "dragstart", bt(gt(
          /*dragstart_handler*/
          n[24]
        ))),
        je(e, "dragend", bt(gt(
          /*dragend_handler*/
          n[25]
        ))),
        je(e, "dragover", bt(gt(
          /*dragover_handler*/
          n[26]
        ))),
        je(e, "dragenter", bt(gt(
          /*dragenter_handler*/
          n[27]
        ))),
        je(e, "dragleave", bt(gt(
          /*dragleave_handler*/
          n[28]
        ))),
        je(e, "drop", bt(gt(
          /*drop_handler*/
          n[29]
        ))),
        je(
          e,
          "click",
          /*open_file_upload*/
          n[9]
        ),
        je(
          e,
          "drop",
          /*loadFilesFromDrop*/
          n[16]
        ),
        je(
          e,
          "dragenter",
          /*updateDragging*/
          n[14]
        ),
        je(
          e,
          "dragleave",
          /*updateDragging*/
          n[14]
        )
      ], u = !0);
    },
    p(c, h) {
      d && d.p && (!a || h[0] & /*$$scope*/
      2097152) && Qo(
        d,
        _,
        c,
        /*$$scope*/
        c[21],
        a ? Go(
          _,
          /*$$scope*/
          c[21],
          h,
          null
        ) : Zo(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!a || h[0] & /*accept_file_types*/
      4096) && we(
        l,
        "accept",
        /*accept_file_types*/
        c[12]
      ), (!a || h[0] & /*file_count*/
      32 && i !== (i = /*file_count*/
      c[5] === "multiple" || void 0)) && (l.multiple = i), (!a || h[0] & /*file_count*/
      32 && s !== (s = /*file_count*/
      c[5] === "directory" || void 0)) && we(l, "webkitdirectory", s), (!a || h[0] & /*file_count*/
      32 && o !== (o = /*file_count*/
      c[5] === "directory" || void 0)) && we(l, "mozdirectory", o), (!a || h[0] & /*hidden*/
      128 && r !== (r = /*hidden*/
      c[7] ? -1 : 0)) && we(e, "tabindex", r), (!a || h[0] & /*hidden*/
      128) && ve(
        e,
        "hidden",
        /*hidden*/
        c[7]
      ), (!a || h[0] & /*center*/
      8) && ve(
        e,
        "center",
        /*center*/
        c[3]
      ), (!a || h[0] & /*boundedheight*/
      4) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        c[2]
      ), (!a || h[0] & /*flex*/
      16) && ve(
        e,
        "flex",
        /*flex*/
        c[4]
      );
    },
    i(c) {
      a || (rt(d, c), a = !0);
    },
    o(c) {
      At(d, c), a = !1;
    },
    d(c) {
      c && gl(e), d && d.d(c), n[30](null), u = !1, T_(f);
    }
  };
}
function H_(n) {
  let e, t, l = !/*hidden*/
  n[7] && Ds(n);
  return {
    c() {
      l && l.c(), e = Vo();
    },
    m(i, s) {
      l && l.m(i, s), bl(i, e, s), t = !0;
    },
    p(i, s) {
      /*hidden*/
      i[7] ? l && (Jo(), At(l, 1, 1, () => {
        l = null;
      }), Xo()) : l ? (l.p(i, s), s[0] & /*hidden*/
      128 && rt(l, 1)) : (l = Ds(i), l.c(), rt(l, 1), l.m(e.parentNode, e));
    },
    i(i) {
      t || (rt(l), t = !0);
    },
    o(i) {
      At(l), t = !1;
    },
    d(i) {
      i && gl(e), l && l.d(i);
    }
  };
}
function P_(n) {
  let e, t, l, i, s;
  const o = (
    /*#slots*/
    n[22].default
  ), r = Yo(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ci("button"), r && r.c(), we(e, "tabindex", t = /*hidden*/
      n[7] ? -1 : 0), we(e, "class", "svelte-1aq8tno"), ve(
        e,
        "hidden",
        /*hidden*/
        n[7]
      ), ve(
        e,
        "center",
        /*center*/
        n[3]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        n[2]
      ), ve(
        e,
        "flex",
        /*flex*/
        n[4]
      ), Ko(e, "height", "100%");
    },
    m(a, u) {
      bl(a, e, u), r && r.m(e, null), l = !0, i || (s = je(
        e,
        "click",
        /*paste_clipboard*/
        n[8]
      ), i = !0);
    },
    p(a, u) {
      r && r.p && (!l || u[0] & /*$$scope*/
      2097152) && Qo(
        r,
        o,
        a,
        /*$$scope*/
        a[21],
        l ? Go(
          o,
          /*$$scope*/
          a[21],
          u,
          null
        ) : Zo(
          /*$$scope*/
          a[21]
        ),
        null
      ), (!l || u[0] & /*hidden*/
      128 && t !== (t = /*hidden*/
      a[7] ? -1 : 0)) && we(e, "tabindex", t), (!l || u[0] & /*hidden*/
      128) && ve(
        e,
        "hidden",
        /*hidden*/
        a[7]
      ), (!l || u[0] & /*center*/
      8) && ve(
        e,
        "center",
        /*center*/
        a[3]
      ), (!l || u[0] & /*boundedheight*/
      4) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        a[2]
      ), (!l || u[0] & /*flex*/
      16) && ve(
        e,
        "flex",
        /*flex*/
        a[4]
      );
    },
    i(a) {
      l || (rt(r, a), l = !0);
    },
    o(a) {
      At(r, a), l = !1;
    },
    d(a) {
      a && gl(e), r && r.d(a), i = !1, s();
    }
  };
}
function Ds(n) {
  let e, t;
  return e = new E_({
    props: {
      root: (
        /*root*/
        n[6]
      ),
      upload_id: (
        /*upload_id*/
        n[10]
      ),
      files: (
        /*file_data*/
        n[11]
      )
    }
  }), {
    c() {
      M_(e.$$.fragment);
    },
    m(l, i) {
      B_(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*root*/
      64 && (s.root = /*root*/
      l[6]), i[0] & /*upload_id*/
      1024 && (s.upload_id = /*upload_id*/
      l[10]), i[0] & /*file_data*/
      2048 && (s.files = /*file_data*/
      l[11]), e.$set(s);
    },
    i(l) {
      t || (rt(e.$$.fragment, l), t = !0);
    },
    o(l) {
      At(e.$$.fragment, l), t = !1;
    },
    d(l) {
      j_(e, l);
    }
  };
}
function W_(n) {
  let e, t, l, i;
  const s = [P_, H_, F_], o = [];
  function r(a, u) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = s[e](n), {
    c() {
      t.c(), l = Vo();
    },
    m(a, u) {
      o[e].m(a, u), bl(a, l, u), i = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (Jo(), At(o[f], 1, 1, () => {
        o[f] = null;
      }), Xo(), t = o[e], t ? t.p(a, u) : (t = o[e] = s[e](a), t.c()), rt(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (rt(t), i = !0);
    },
    o(a) {
      At(t), i = !1;
    },
    d(a) {
      a && gl(l), o[e].d(a);
    }
  };
}
function X_(n, e, t) {
  if (!n || n === "*" || n === "file/*")
    return !0;
  let l;
  if (typeof n == "string")
    l = n.split(",").map((i) => i.trim());
  else if (Array.isArray(n))
    l = n;
  else
    return !1;
  return l.includes(e) || l.some((i) => {
    const [s] = i.split("/").map((o) => o.trim());
    return i.endsWith("/*") && t.startsWith(s + "/");
  });
}
function Y_(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(q, S, j, F) {
    function y(z) {
      return z instanceof j ? z : new j(function(Z) {
        Z(z);
      });
    }
    return new (j || (j = Promise))(function(z, Z) {
      function T(W) {
        try {
          le(F.next(W));
        } catch (ie) {
          Z(ie);
        }
      }
      function se(W) {
        try {
          le(F.throw(W));
        } catch (ie) {
          Z(ie);
        }
      }
      function le(W) {
        W.done ? z(W.value) : y(W.value).then(T, se);
      }
      le((F = F.apply(q, S || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: u = !0 } = e, { flex: f = !0 } = e, { file_count: _ = "single" } = e, { disable_click: d = !1 } = e, { root: c } = e, { hidden: h = !1 } = e, { format: b = "file" } = e, { uploading: g = !1 } = e, m, v, p;
  const C = R_("upload_files");
  let M;
  const k = U_();
  function D() {
    t(17, r = !r);
  }
  function w() {
    navigator.clipboard.read().then((q) => s(this, void 0, void 0, function* () {
      for (let S = 0; S < q.length; S++) {
        const j = q[S].types.find((F) => F.startsWith("image/"));
        if (j) {
          q[S].getType(j).then((F) => s(this, void 0, void 0, function* () {
            const y = new File([F], `clipboard.${j.replace("image/", "")}`);
            yield U([y]);
          }));
          break;
        }
      }
    }));
  }
  function A() {
    d || (t(13, M.value = "", M), M.click());
  }
  function O(q) {
    return s(this, void 0, void 0, function* () {
      yield I_(), t(10, m = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      const S = yield c_(q, c, m, C);
      return k("load", _ === "single" ? S == null ? void 0 : S[0] : S), t(1, g = !1), S || [];
    });
  }
  function U(q) {
    return s(this, void 0, void 0, function* () {
      if (!q.length)
        return;
      let S = q.map((j) => new File([j], j.name));
      return t(11, v = yield __(S)), yield O(v);
    });
  }
  function B(q) {
    return s(this, void 0, void 0, function* () {
      const S = q.target;
      if (S.files)
        if (b != "blob")
          yield U(Array.from(S.files));
        else {
          if (_ === "single") {
            k("load", S.files[0]);
            return;
          }
          k("load", S.files);
        }
    });
  }
  function H(q) {
    return s(this, void 0, void 0, function* () {
      var S;
      if (t(17, r = !1), !(!((S = q.dataTransfer) === null || S === void 0) && S.files))
        return;
      const j = Array.from(q.dataTransfer.files).filter((F) => {
        const y = "." + F.name.split(".").pop();
        return y && X_(o, y, F.type) || (y && Array.isArray(o) ? o.includes(y) : y === o) ? !0 : (k("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield U(j);
    });
  }
  function ne(q) {
    mt.call(this, n, q);
  }
  function $(q) {
    mt.call(this, n, q);
  }
  function he(q) {
    mt.call(this, n, q);
  }
  function ke(q) {
    mt.call(this, n, q);
  }
  function ge(q) {
    mt.call(this, n, q);
  }
  function ye(q) {
    mt.call(this, n, q);
  }
  function E(q) {
    mt.call(this, n, q);
  }
  function Y(q) {
    A_[q ? "unshift" : "push"](() => {
      M = q, t(13, M);
    });
  }
  return n.$$set = (q) => {
    "filetype" in q && t(0, o = q.filetype), "dragging" in q && t(17, r = q.dragging), "boundedheight" in q && t(2, a = q.boundedheight), "center" in q && t(3, u = q.center), "flex" in q && t(4, f = q.flex), "file_count" in q && t(5, _ = q.file_count), "disable_click" in q && t(18, d = q.disable_click), "root" in q && t(6, c = q.root), "hidden" in q && t(7, h = q.hidden), "format" in q && t(19, b = q.format), "uploading" in q && t(1, g = q.uploading), "$$scope" in q && t(21, i = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*filetype*/
    1 && (o == null || typeof o == "string" ? t(12, p = o) : (t(0, o = o.map((q) => q.startsWith(".") ? q : q + "/*")), t(12, p = o.join(", "))));
  }, [
    o,
    g,
    a,
    u,
    f,
    _,
    c,
    h,
    w,
    A,
    m,
    v,
    p,
    M,
    D,
    B,
    H,
    r,
    d,
    b,
    U,
    i,
    l,
    ne,
    $,
    he,
    ke,
    ge,
    ye,
    E,
    Y
  ];
}
class V_ extends D_ {
  constructor(e) {
    super(), L_(
      this,
      e,
      Y_,
      W_,
      N_,
      {
        filetype: 0,
        dragging: 17,
        boundedheight: 2,
        center: 3,
        flex: 4,
        file_count: 5,
        disable_click: 18,
        root: 6,
        hidden: 7,
        format: 19,
        uploading: 1,
        paste_clipboard: 8,
        open_file_upload: 9,
        load_files: 20
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[8];
  }
  get open_file_upload() {
    return this.$$.ctx[9];
  }
  get load_files() {
    return this.$$.ctx[20];
  }
}
const {
  SvelteComponent: Z_,
  append: As,
  attr: pe,
  detach: G_,
  init: J_,
  insert: K_,
  noop: Pl,
  safe_not_equal: Q_,
  set_style: it,
  svg_element: Wl
} = window.__gradio__svelte__internal;
function x_(n) {
  let e, t, l;
  return {
    c() {
      e = Wl("svg"), t = Wl("line"), l = Wl("line"), pe(t, "x1", "4"), pe(t, "y1", "12"), pe(t, "x2", "20"), pe(t, "y2", "12"), it(t, "fill", "none"), it(t, "stroke-width", "2px"), pe(l, "x1", "12"), pe(l, "y1", "4"), pe(l, "x2", "12"), pe(l, "y2", "20"), it(l, "fill", "none"), it(l, "stroke-width", "2px"), pe(e, "width", "100%"), pe(e, "height", "100%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "version", "1.1"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), pe(e, "xml:space", "preserve"), pe(e, "stroke", "currentColor"), it(e, "fill-rule", "evenodd"), it(e, "clip-rule", "evenodd"), it(e, "stroke-linecap", "round"), it(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      K_(i, e, s), As(e, t), As(e, l);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(i) {
      i && G_(e);
    }
  };
}
class $_ extends Z_ {
  constructor(e) {
    super(), J_(this, e, null, x_, Q_, {});
  }
}
const {
  SvelteComponent: ed,
  append: Ms,
  attr: Xl,
  bubble: js,
  create_component: td,
  destroy_component: nd,
  detach: xo,
  element: Ls,
  init: ld,
  insert: $o,
  listen: Yl,
  mount_component: id,
  run_all: sd,
  safe_not_equal: od,
  set_data: ad,
  set_input_value: Bs,
  space: rd,
  text: ud,
  transition_in: fd,
  transition_out: cd
} = window.__gradio__svelte__internal, { createEventDispatcher: _d, afterUpdate: dd } = window.__gradio__svelte__internal;
function hd(n) {
  let e;
  return {
    c() {
      e = ud(
        /*label*/
        n[1]
      );
    },
    m(t, l) {
      $o(t, e, l);
    },
    p(t, l) {
      l & /*label*/
      2 && ad(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && xo(e);
    }
  };
}
function md(n) {
  let e, t, l, i, s, o, r;
  return t = new co({
    props: {
      show_label: (
        /*show_label*/
        n[4]
      ),
      info: (
        /*info*/
        n[2]
      ),
      $$slots: { default: [hd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = Ls("label"), td(t.$$.fragment), l = rd(), i = Ls("input"), Xl(i, "type", "color"), i.disabled = /*disabled*/
      n[3], Xl(i, "class", "svelte-16l8u73"), Xl(e, "class", "block");
    },
    m(a, u) {
      $o(a, e, u), id(t, e, null), Ms(e, l), Ms(e, i), Bs(
        i,
        /*value*/
        n[0]
      ), s = !0, o || (r = [
        Yl(
          i,
          "input",
          /*input_input_handler*/
          n[8]
        ),
        Yl(
          i,
          "focus",
          /*focus_handler*/
          n[6]
        ),
        Yl(
          i,
          "blur",
          /*blur_handler*/
          n[7]
        )
      ], o = !0);
    },
    p(a, [u]) {
      const f = {};
      u & /*show_label*/
      16 && (f.show_label = /*show_label*/
      a[4]), u & /*info*/
      4 && (f.info = /*info*/
      a[2]), u & /*$$scope, label*/
      2050 && (f.$$scope = { dirty: u, ctx: a }), t.$set(f), (!s || u & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), u & /*value*/
      1 && Bs(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (fd(t.$$.fragment, a), s = !0);
    },
    o(a) {
      cd(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && xo(e), nd(t), o = !1, sd(r);
    }
  };
}
function gd(n, e, t) {
  let { value: l = "#000000" } = e, { value_is_output: i = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const u = _d();
  function f() {
    u("change", l), i || u("input");
  }
  dd(() => {
    t(5, i = !1);
  });
  function _(h) {
    js.call(this, n, h);
  }
  function d(h) {
    js.call(this, n, h);
  }
  function c() {
    l = this.value, t(0, l);
  }
  return n.$$set = (h) => {
    "value" in h && t(0, l = h.value), "value_is_output" in h && t(5, i = h.value_is_output), "label" in h && t(1, s = h.label), "info" in h && t(2, o = h.info), "disabled" in h && t(3, r = h.disabled), "show_label" in h && t(4, a = h.show_label);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && f();
  }, [
    l,
    s,
    o,
    r,
    a,
    i,
    _,
    d,
    c
  ];
}
class bd extends ed {
  constructor(e) {
    super(), ld(this, e, gd, md, od, {
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
  SvelteComponent: pd,
  append: ea,
  attr: oe,
  bubble: wd,
  check_outros: vd,
  create_slot: ta,
  detach: qn,
  element: pl,
  empty: kd,
  get_all_dirty_from_scope: na,
  get_slot_changes: la,
  group_outros: yd,
  init: Sd,
  insert: En,
  listen: Cd,
  safe_not_equal: zd,
  set_style: De,
  space: ia,
  src_url_equal: il,
  toggle_class: Kt,
  transition_in: sl,
  transition_out: ol,
  update_slot_base: sa
} = window.__gradio__svelte__internal;
function qd(n) {
  let e, t, l, i, s, o, r = (
    /*icon*/
    n[7] && Ts(n)
  );
  const a = (
    /*#slots*/
    n[12].default
  ), u = ta(
    a,
    n,
    /*$$scope*/
    n[11],
    null
  );
  return {
    c() {
      e = pl("button"), r && r.c(), t = ia(), u && u.c(), oe(e, "class", l = /*size*/
      n[4] + " " + /*variant*/
      n[3] + " " + /*elem_classes*/
      n[1].join(" ") + " svelte-8huxfn"), oe(
        e,
        "id",
        /*elem_id*/
        n[0]
      ), e.disabled = /*disabled*/
      n[8], Kt(e, "hidden", !/*visible*/
      n[2]), De(
        e,
        "flex-grow",
        /*scale*/
        n[9]
      ), De(
        e,
        "width",
        /*scale*/
        n[9] === 0 ? "fit-content" : null
      ), De(e, "min-width", typeof /*min_width*/
      n[10] == "number" ? `calc(min(${/*min_width*/
      n[10]}px, 100%))` : null);
    },
    m(f, _) {
      En(f, e, _), r && r.m(e, null), ea(e, t), u && u.m(e, null), i = !0, s || (o = Cd(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), s = !0);
    },
    p(f, _) {
      /*icon*/
      f[7] ? r ? r.p(f, _) : (r = Ts(f), r.c(), r.m(e, t)) : r && (r.d(1), r = null), u && u.p && (!i || _ & /*$$scope*/
      2048) && sa(
        u,
        a,
        f,
        /*$$scope*/
        f[11],
        i ? la(
          a,
          /*$$scope*/
          f[11],
          _,
          null
        ) : na(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!i || _ & /*size, variant, elem_classes*/
      26 && l !== (l = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && oe(e, "class", l), (!i || _ & /*elem_id*/
      1) && oe(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!i || _ & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!i || _ & /*size, variant, elem_classes, visible*/
      30) && Kt(e, "hidden", !/*visible*/
      f[2]), _ & /*scale*/
      512 && De(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), _ & /*scale*/
      512 && De(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && De(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      i || (sl(u, f), i = !0);
    },
    o(f) {
      ol(u, f), i = !1;
    },
    d(f) {
      f && qn(e), r && r.d(), u && u.d(f), s = !1, o();
    }
  };
}
function Ed(n) {
  let e, t, l, i, s = (
    /*icon*/
    n[7] && Ns(n)
  );
  const o = (
    /*#slots*/
    n[12].default
  ), r = ta(
    o,
    n,
    /*$$scope*/
    n[11],
    null
  );
  return {
    c() {
      e = pl("a"), s && s.c(), t = ia(), r && r.c(), oe(
        e,
        "href",
        /*link*/
        n[6]
      ), oe(e, "rel", "noopener noreferrer"), oe(
        e,
        "aria-disabled",
        /*disabled*/
        n[8]
      ), oe(e, "class", l = /*size*/
      n[4] + " " + /*variant*/
      n[3] + " " + /*elem_classes*/
      n[1].join(" ") + " svelte-8huxfn"), oe(
        e,
        "id",
        /*elem_id*/
        n[0]
      ), Kt(e, "hidden", !/*visible*/
      n[2]), Kt(
        e,
        "disabled",
        /*disabled*/
        n[8]
      ), De(
        e,
        "flex-grow",
        /*scale*/
        n[9]
      ), De(
        e,
        "pointer-events",
        /*disabled*/
        n[8] ? "none" : null
      ), De(
        e,
        "width",
        /*scale*/
        n[9] === 0 ? "fit-content" : null
      ), De(e, "min-width", typeof /*min_width*/
      n[10] == "number" ? `calc(min(${/*min_width*/
      n[10]}px, 100%))` : null);
    },
    m(a, u) {
      En(a, e, u), s && s.m(e, null), ea(e, t), r && r.m(e, null), i = !0;
    },
    p(a, u) {
      /*icon*/
      a[7] ? s ? s.p(a, u) : (s = Ns(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!i || u & /*$$scope*/
      2048) && sa(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        i ? la(
          o,
          /*$$scope*/
          a[11],
          u,
          null
        ) : na(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || u & /*link*/
      64) && oe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || u & /*disabled*/
      256) && oe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || u & /*size, variant, elem_classes*/
      26 && l !== (l = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && oe(e, "class", l), (!i || u & /*elem_id*/
      1) && oe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || u & /*size, variant, elem_classes, visible*/
      30) && Kt(e, "hidden", !/*visible*/
      a[2]), (!i || u & /*size, variant, elem_classes, disabled*/
      282) && Kt(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), u & /*scale*/
      512 && De(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), u & /*disabled*/
      256 && De(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), u & /*scale*/
      512 && De(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && De(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (sl(r, a), i = !0);
    },
    o(a) {
      ol(r, a), i = !1;
    },
    d(a) {
      a && qn(e), s && s.d(), r && r.d(a);
    }
  };
}
function Ts(n) {
  let e, t, l;
  return {
    c() {
      e = pl("img"), oe(e, "class", "button-icon svelte-8huxfn"), il(e.src, t = /*icon*/
      n[7].url) || oe(e, "src", t), oe(e, "alt", l = `${/*value*/
      n[5]} icon`);
    },
    m(i, s) {
      En(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !il(e.src, t = /*icon*/
      i[7].url) && oe(e, "src", t), s & /*value*/
      32 && l !== (l = `${/*value*/
      i[5]} icon`) && oe(e, "alt", l);
    },
    d(i) {
      i && qn(e);
    }
  };
}
function Ns(n) {
  let e, t, l;
  return {
    c() {
      e = pl("img"), oe(e, "class", "button-icon svelte-8huxfn"), il(e.src, t = /*icon*/
      n[7].url) || oe(e, "src", t), oe(e, "alt", l = `${/*value*/
      n[5]} icon`);
    },
    m(i, s) {
      En(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !il(e.src, t = /*icon*/
      i[7].url) && oe(e, "src", t), s & /*value*/
      32 && l !== (l = `${/*value*/
      i[5]} icon`) && oe(e, "alt", l);
    },
    d(i) {
      i && qn(e);
    }
  };
}
function Dd(n) {
  let e, t, l, i;
  const s = [Ed, qd], o = [];
  function r(a, u) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(n), t = o[e] = s[e](n), {
    c() {
      t.c(), l = kd();
    },
    m(a, u) {
      o[e].m(a, u), En(a, l, u), i = !0;
    },
    p(a, [u]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (yd(), ol(o[f], 1, 1, () => {
        o[f] = null;
      }), vd(), t = o[e], t ? t.p(a, u) : (t = o[e] = s[e](a), t.c()), sl(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (sl(t), i = !0);
    },
    o(a) {
      ol(t), i = !1;
    },
    d(a) {
      a && qn(l), o[e].d(a);
    }
  };
}
function Ad(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: u = "lg" } = e, { value: f = null } = e, { link: _ = null } = e, { icon: d = null } = e, { disabled: c = !1 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e;
  function g(m) {
    wd.call(this, n, m);
  }
  return n.$$set = (m) => {
    "elem_id" in m && t(0, s = m.elem_id), "elem_classes" in m && t(1, o = m.elem_classes), "visible" in m && t(2, r = m.visible), "variant" in m && t(3, a = m.variant), "size" in m && t(4, u = m.size), "value" in m && t(5, f = m.value), "link" in m && t(6, _ = m.link), "icon" in m && t(7, d = m.icon), "disabled" in m && t(8, c = m.disabled), "scale" in m && t(9, h = m.scale), "min_width" in m && t(10, b = m.min_width), "$$scope" in m && t(11, i = m.$$scope);
  }, [
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    d,
    c,
    h,
    b,
    i,
    l,
    g
  ];
}
class Os extends pd {
  constructor(e) {
    super(), Sd(this, e, Ad, Dd, zd, {
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
  SvelteComponent: Md,
  add_render_callback: oa,
  append: On,
  attr: Be,
  binding_callbacks: Us,
  check_outros: jd,
  create_bidirectional_transition: Is,
  destroy_each: Ld,
  detach: gn,
  element: al,
  empty: Bd,
  ensure_array_like: Rs,
  group_outros: Td,
  init: Nd,
  insert: bn,
  listen: _i,
  prevent_default: Od,
  run_all: Ud,
  safe_not_equal: Id,
  set_data: Rd,
  set_style: It,
  space: di,
  text: Fd,
  toggle_class: We,
  transition_in: Vl,
  transition_out: Fs
} = window.__gradio__svelte__internal, { createEventDispatcher: Hd } = window.__gradio__svelte__internal;
function Hs(n, e, t) {
  const l = n.slice();
  return l[26] = e[t], l;
}
function Ps(n) {
  let e, t, l, i, s, o = Rs(
    /*filtered_indices*/
    n[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Ws(Hs(n, o, a));
  return {
    c() {
      e = al("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Be(e, "class", "options svelte-yuohum"), Be(e, "role", "listbox"), It(
        e,
        "bottom",
        /*bottom*/
        n[9]
      ), It(e, "max-height", `calc(${/*max_height*/
      n[10]}px - var(--window-padding))`), It(
        e,
        "width",
        /*input_width*/
        n[8] + "px"
      );
    },
    m(a, u) {
      bn(a, e, u);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      n[22](e), l = !0, i || (s = _i(e, "mousedown", Od(
        /*mousedown_handler*/
        n[21]
      )), i = !0);
    },
    p(a, u) {
      if (u & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = Rs(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Hs(a, o, f);
          r[f] ? r[f].p(_, u) : (r[f] = Ws(_), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      u & /*bottom*/
      512 && It(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), u & /*max_height*/
      1024 && It(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), u & /*input_width*/
      256 && It(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      l || (a && oa(() => {
        l && (t || (t = Is(e, Ki, { duration: 200, y: 5 }, !0)), t.run(1));
      }), l = !0);
    },
    o(a) {
      a && (t || (t = Is(e, Ki, { duration: 200, y: 5 }, !1)), t.run(0)), l = !1;
    },
    d(a) {
      a && gn(e), Ld(r, a), n[22](null), a && t && t.end(), i = !1, s();
    }
  };
}
function Ws(n) {
  let e, t, l, i = (
    /*choices*/
    n[0][
      /*index*/
      n[26]
    ][0] + ""
  ), s, o, r, a, u;
  return {
    c() {
      e = al("li"), t = al("span"), t.textContent = "✓", l = di(), s = Fd(i), o = di(), Be(t, "class", "inner-item svelte-yuohum"), We(t, "hide", !/*selected_indices*/
      n[4].includes(
        /*index*/
        n[26]
      )), Be(e, "class", "item svelte-yuohum"), Be(e, "data-index", r = /*index*/
      n[26]), Be(e, "aria-label", a = /*choices*/
      n[0][
        /*index*/
        n[26]
      ][0]), Be(e, "data-testid", "dropdown-option"), Be(e, "role", "option"), Be(e, "aria-selected", u = /*selected_indices*/
      n[4].includes(
        /*index*/
        n[26]
      )), We(
        e,
        "selected",
        /*selected_indices*/
        n[4].includes(
          /*index*/
          n[26]
        )
      ), We(
        e,
        "active",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      ), We(
        e,
        "bg-gray-100",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      ), We(
        e,
        "dark:bg-gray-600",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      );
    },
    m(f, _) {
      bn(f, e, _), On(e, t), On(e, l), On(e, s), On(e, o);
    },
    p(f, _) {
      _ & /*selected_indices, filtered_indices*/
      18 && We(t, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), _ & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && Rd(s, i), _ & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[26]) && Be(e, "data-index", r), _ & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && Be(e, "aria-label", a), _ & /*selected_indices, filtered_indices*/
      18 && u !== (u = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && Be(e, "aria-selected", u), _ & /*selected_indices, filtered_indices*/
      18 && We(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), _ & /*filtered_indices, active_index*/
      34 && We(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), _ & /*filtered_indices, active_index*/
      34 && We(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), _ & /*filtered_indices, active_index*/
      34 && We(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && gn(e);
    }
  };
}
function Pd(n) {
  let e, t, l, i, s;
  oa(
    /*onwindowresize*/
    n[19]
  );
  let o = (
    /*show_options*/
    n[2] && !/*disabled*/
    n[3] && Ps(n)
  );
  return {
    c() {
      e = al("div"), t = di(), o && o.c(), l = Bd(), Be(e, "class", "reference");
    },
    m(r, a) {
      bn(r, e, a), n[20](e), bn(r, t, a), o && o.m(r, a), bn(r, l, a), i || (s = [
        _i(
          window,
          "scroll",
          /*scroll_listener*/
          n[12]
        ),
        _i(
          window,
          "resize",
          /*onwindowresize*/
          n[19]
        )
      ], i = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && Vl(o, 1)) : (o = Ps(r), o.c(), Vl(o, 1), o.m(l.parentNode, l)) : o && (Td(), Fs(o, 1, 1, () => {
        o = null;
      }), jd());
    },
    i(r) {
      Vl(o);
    },
    o(r) {
      Fs(o);
    },
    d(r) {
      r && (gn(e), gn(t), gn(l)), n[20](null), o && o.d(r), i = !1, Ud(s);
    }
  };
}
function Wd(n, e, t) {
  var l, i;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: u = [] } = e, { active_index: f = null } = e, _, d, c, h, b, g, m, v, p;
  function C() {
    const { top: B, bottom: H } = b.getBoundingClientRect();
    t(16, _ = B), t(17, d = p - H);
  }
  let M = null;
  function k() {
    r && (M !== null && clearTimeout(M), M = setTimeout(
      () => {
        C(), M = null;
      },
      10
    ));
  }
  const D = Hd();
  function w() {
    t(11, p = window.innerHeight);
  }
  function A(B) {
    Us[B ? "unshift" : "push"](() => {
      b = B, t(6, b);
    });
  }
  const O = (B) => D("change", B);
  function U(B) {
    Us[B ? "unshift" : "push"](() => {
      g = B, t(7, g);
    });
  }
  return n.$$set = (B) => {
    "choices" in B && t(0, s = B.choices), "filtered_indices" in B && t(1, o = B.filtered_indices), "show_options" in B && t(2, r = B.show_options), "disabled" in B && t(3, a = B.disabled), "selected_indices" in B && t(4, u = B.selected_indices), "active_index" in B && t(5, f = B.active_index);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && b) {
        if (g && u.length > 0) {
          let H = g.querySelectorAll("li");
          for (const ne of Array.from(H))
            if (ne.getAttribute("data-index") === u[0].toString()) {
              t(14, l = g == null ? void 0 : g.scrollTo) === null || l === void 0 || l.call(g, 0, ne.offsetTop);
              break;
            }
        }
        C();
        const B = t(15, i = b.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, c = (B == null ? void 0 : B.height) || 0), t(8, h = (B == null ? void 0 : B.width) || 0);
      }
      d > _ ? (t(10, v = d), t(9, m = null)) : (t(9, m = `${d + c}px`), t(10, v = _ - c));
    }
  }, [
    s,
    o,
    r,
    a,
    u,
    f,
    b,
    g,
    h,
    m,
    v,
    p,
    k,
    D,
    l,
    i,
    _,
    d,
    c,
    w,
    A,
    O,
    U
  ];
}
class Xd extends Md {
  constructor(e) {
    super(), Nd(this, e, Wd, Pd, Id, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Yd(n, e) {
  return (n % e + e) % e;
}
function Xs(n, e) {
  return n.reduce((t, l, i) => ((!e || l[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Vd(n, e, t) {
  n("change", e), t || n("input");
}
function Zd(n, e, t) {
  if (n.key === "Escape")
    return [!1, e];
  if ((n.key === "ArrowDown" || n.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = n.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const l = t.indexOf(e), i = n.key === "ArrowUp" ? -1 : 1;
      e = t[Yd(l + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Gd,
  append: pt,
  attr: Le,
  binding_callbacks: Jd,
  check_outros: Kd,
  create_component: hi,
  destroy_component: mi,
  detach: Ci,
  element: Ht,
  group_outros: Qd,
  init: xd,
  insert: zi,
  listen: an,
  mount_component: gi,
  run_all: $d,
  safe_not_equal: e0,
  set_data: t0,
  set_input_value: Ys,
  space: Zl,
  text: n0,
  toggle_class: Rt,
  transition_in: Pt,
  transition_out: hn
} = window.__gradio__svelte__internal, { onMount: l0 } = window.__gradio__svelte__internal, { createEventDispatcher: i0, afterUpdate: s0 } = window.__gradio__svelte__internal;
function o0(n) {
  let e;
  return {
    c() {
      e = n0(
        /*label*/
        n[0]
      );
    },
    m(t, l) {
      zi(t, e, l);
    },
    p(t, l) {
      l[0] & /*label*/
      1 && t0(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ci(e);
    }
  };
}
function Vs(n) {
  let e, t, l;
  return t = new Tu({}), {
    c() {
      e = Ht("div"), hi(t.$$.fragment), Le(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, s) {
      zi(i, e, s), gi(t, e, null), l = !0;
    },
    i(i) {
      l || (Pt(t.$$.fragment, i), l = !0);
    },
    o(i) {
      hn(t.$$.fragment, i), l = !1;
    },
    d(i) {
      i && Ci(e), mi(t);
    }
  };
}
function a0(n) {
  let e, t, l, i, s, o, r, a, u, f, _, d, c, h;
  t = new co({
    props: {
      show_label: (
        /*show_label*/
        n[4]
      ),
      info: (
        /*info*/
        n[1]
      ),
      $$slots: { default: [o0] },
      $$scope: { ctx: n }
    }
  });
  let b = !/*disabled*/
  n[3] && Vs();
  return _ = new Xd({
    props: {
      show_options: (
        /*show_options*/
        n[12]
      ),
      choices: (
        /*choices*/
        n[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        n[10]
      ),
      disabled: (
        /*disabled*/
        n[3]
      ),
      selected_indices: (
        /*selected_index*/
        n[11] === null ? [] : [
          /*selected_index*/
          n[11]
        ]
      ),
      active_index: (
        /*active_index*/
        n[14]
      )
    }
  }), _.$on(
    "change",
    /*handle_option_selected*/
    n[16]
  ), {
    c() {
      e = Ht("div"), hi(t.$$.fragment), l = Zl(), i = Ht("div"), s = Ht("div"), o = Ht("div"), r = Ht("input"), u = Zl(), b && b.c(), f = Zl(), hi(_.$$.fragment), Le(r, "role", "listbox"), Le(r, "aria-controls", "dropdown-options"), Le(
        r,
        "aria-expanded",
        /*show_options*/
        n[12]
      ), Le(
        r,
        "aria-label",
        /*label*/
        n[0]
      ), Le(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      n[3], Le(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      n[7], Rt(r, "subdued", !/*choices_names*/
      n[13].includes(
        /*input_text*/
        n[9]
      ) && !/*allow_custom_value*/
      n[6]), Le(o, "class", "secondary-wrap svelte-1m1zvyj"), Le(s, "class", "wrap-inner svelte-1m1zvyj"), Rt(
        s,
        "show_options",
        /*show_options*/
        n[12]
      ), Le(i, "class", "wrap svelte-1m1zvyj"), Le(e, "class", "svelte-1m1zvyj"), Rt(
        e,
        "container",
        /*container*/
        n[5]
      );
    },
    m(g, m) {
      zi(g, e, m), gi(t, e, null), pt(e, l), pt(e, i), pt(i, s), pt(s, o), pt(o, r), Ys(
        r,
        /*input_text*/
        n[9]
      ), n[29](r), pt(o, u), b && b.m(o, null), pt(i, f), gi(_, i, null), d = !0, c || (h = [
        an(
          r,
          "input",
          /*input_input_handler*/
          n[28]
        ),
        an(
          r,
          "keydown",
          /*handle_key_down*/
          n[19]
        ),
        an(
          r,
          "keyup",
          /*keyup_handler*/
          n[30]
        ),
        an(
          r,
          "blur",
          /*handle_blur*/
          n[18]
        ),
        an(
          r,
          "focus",
          /*handle_focus*/
          n[17]
        )
      ], c = !0);
    },
    p(g, m) {
      const v = {};
      m[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      g[4]), m[0] & /*info*/
      2 && (v.info = /*info*/
      g[1]), m[0] & /*label*/
      1 | m[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: m, ctx: g }), t.$set(v), (!d || m[0] & /*show_options*/
      4096) && Le(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!d || m[0] & /*label*/
      1) && Le(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!d || m[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!d || m[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), m[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && Ys(
        r,
        /*input_text*/
        g[9]
      ), (!d || m[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Rt(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? b && (Qd(), hn(b, 1, 1, () => {
        b = null;
      }), Kd()) : b ? m[0] & /*disabled*/
      8 && Pt(b, 1) : (b = Vs(), b.c(), Pt(b, 1), b.m(o, null)), (!d || m[0] & /*show_options*/
      4096) && Rt(
        s,
        "show_options",
        /*show_options*/
        g[12]
      );
      const p = {};
      m[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      g[12]), m[0] & /*choices*/
      4 && (p.choices = /*choices*/
      g[2]), m[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      g[10]), m[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      g[3]), m[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), m[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      g[14]), _.$set(p), (!d || m[0] & /*container*/
      32) && Rt(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      d || (Pt(t.$$.fragment, g), Pt(b), Pt(_.$$.fragment, g), d = !0);
    },
    o(g) {
      hn(t.$$.fragment, g), hn(b), hn(_.$$.fragment, g), d = !1;
    },
    d(g) {
      g && Ci(e), mi(t), n[29](null), b && b.d(), mi(_), c = !1, $d(h);
    }
  };
}
function r0(n, e, t) {
  let { label: l } = e, { info: i = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, u, { disabled: f = !1 } = e, { show_label: _ } = e, { container: d = !0 } = e, { allow_custom_value: c = !1 } = e, { filterable: h = !0 } = e, b, g = !1, m, v, p = "", C = "", M = !1, k = [], D = null, w = null, A;
  const O = i0();
  s ? (A = a.map((E) => E[1]).indexOf(s), w = A, w === -1 ? (o = s, w = null) : ([p, o] = a[w], C = p), B()) : a.length > 0 && (A = 0, w = 0, [p, s] = a[w], o = s, C = p);
  function U() {
    t(13, m = a.map((E) => E[0])), t(24, v = a.map((E) => E[1]));
  }
  function B() {
    U(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, p = ""), t(11, w = null)) : v.includes(s) ? (t(9, p = m[v.indexOf(s)]), t(11, w = v.indexOf(s))) : c ? (t(9, p = s), t(11, w = null)) : (t(9, p = ""), t(11, w = null)), t(27, A = w);
  }
  function H(E) {
    if (t(11, w = parseInt(E.detail.target.dataset.index)), isNaN(w)) {
      t(11, w = null);
      return;
    }
    t(12, g = !1), t(14, D = null), b.blur();
  }
  function ne(E) {
    t(10, k = a.map((Y, q) => q)), t(12, g = !0), O("focus");
  }
  function $() {
    c ? t(20, s = p) : t(9, p = m[v.indexOf(s)]), t(12, g = !1), t(14, D = null), O("blur");
  }
  function he(E) {
    t(12, [g, D] = Zd(E, D, k), g, (t(14, D), t(2, a), t(23, u), t(6, c), t(9, p), t(10, k), t(8, b), t(25, C), t(11, w), t(27, A), t(26, M), t(24, v))), E.key === "Enter" && (D !== null ? (t(11, w = D), t(12, g = !1), b.blur(), t(14, D = null)) : m.includes(p) ? (t(11, w = m.indexOf(p)), t(12, g = !1), t(14, D = null), b.blur()) : c && (t(20, s = p), t(11, w = null), t(12, g = !1), t(14, D = null), b.blur()), O("enter", s));
  }
  s0(() => {
    t(21, r = !1), t(26, M = !0);
  }), l0(() => {
    b.focus();
  });
  function ke() {
    p = this.value, t(9, p), t(11, w), t(27, A), t(26, M), t(2, a), t(24, v);
  }
  function ge(E) {
    Jd[E ? "unshift" : "push"](() => {
      b = E, t(8, b);
    });
  }
  const ye = (E) => O("key_up", { key: E.key, input_value: p });
  return n.$$set = (E) => {
    "label" in E && t(0, l = E.label), "info" in E && t(1, i = E.info), "value" in E && t(20, s = E.value), "value_is_output" in E && t(21, r = E.value_is_output), "choices" in E && t(2, a = E.choices), "disabled" in E && t(3, f = E.disabled), "show_label" in E && t(4, _ = E.show_label), "container" in E && t(5, d = E.container), "allow_custom_value" in E && t(6, c = E.allow_custom_value), "filterable" in E && t(7, h = E.filterable);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && w !== A && w !== null && M && (t(9, [p, s] = a[w], p, (t(20, s), t(11, w), t(27, A), t(26, M), t(2, a), t(24, v))), t(27, A = w), O("select", {
      index: w,
      value: v[w],
      selected: !0
    })), n.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (B(), Vd(O, s, r), t(22, o = s)), n.$$.dirty[0] & /*choices*/
    4 && U(), n.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== u && (c || B(), t(23, u = a), t(10, k = Xs(a, p)), !c && k.length > 0 && t(14, D = k[0]), b == document.activeElement && t(12, g = !0)), n.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== C && (t(10, k = Xs(a, p)), t(25, C = p), !c && k.length > 0 && t(14, D = k[0]));
  }, [
    l,
    i,
    a,
    f,
    _,
    d,
    c,
    h,
    b,
    p,
    k,
    w,
    g,
    m,
    D,
    O,
    H,
    ne,
    $,
    he,
    s,
    r,
    o,
    u,
    v,
    C,
    M,
    A,
    ke,
    ge,
    ye
  ];
}
class u0 extends Gd {
  constructor(e) {
    super(), xd(
      this,
      e,
      r0,
      a0,
      e0,
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
  SvelteComponent: f0,
  append: Ge,
  attr: Un,
  create_component: In,
  destroy_component: Rn,
  detach: qi,
  element: wt,
  init: c0,
  insert: Ei,
  mount_component: Fn,
  safe_not_equal: _0,
  set_style: Hn,
  space: Gl,
  text: aa,
  transition_in: Pn,
  transition_out: Wn
} = window.__gradio__svelte__internal, { createEventDispatcher: d0 } = window.__gradio__svelte__internal, { onMount: h0, onDestroy: m0 } = window.__gradio__svelte__internal;
function g0(n) {
  let e;
  return {
    c() {
      e = aa("Cancel");
    },
    m(t, l) {
      Ei(t, e, l);
    },
    d(t) {
      t && qi(e);
    }
  };
}
function b0(n) {
  let e;
  return {
    c() {
      e = aa("OK");
    },
    m(t, l) {
      Ei(t, e, l);
    },
    d(t) {
      t && qi(e);
    }
  };
}
function p0(n) {
  let e, t, l, i, s, o, r, a, u, f, _, d, c, h, b;
  return s = new u0({
    props: {
      value: (
        /*currentLabel*/
        n[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        n[2]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    n[4]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    n[6]
  ), a = new bd({
    props: {
      value: (
        /*currentColor*/
        n[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), a.$on(
    "change",
    /*onColorChange*/
    n[5]
  ), _ = new Os({
    props: {
      $$slots: { default: [g0] },
      $$scope: { ctx: n }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    n[10]
  ), h = new Os({
    props: {
      variant: "primary",
      $$slots: { default: [b0] },
      $$scope: { ctx: n }
    }
  }), h.$on(
    "click",
    /*click_handler_1*/
    n[11]
  ), {
    c() {
      e = wt("div"), t = wt("div"), l = wt("span"), i = wt("div"), In(s.$$.fragment), o = Gl(), r = wt("div"), In(a.$$.fragment), u = Gl(), f = wt("div"), In(_.$$.fragment), d = Gl(), c = wt("div"), In(h.$$.fragment), Hn(i, "margin-right", "10px"), Hn(r, "margin-right", "40px"), Hn(r, "margin-bottom", "8px"), Hn(f, "margin-right", "8px"), Un(l, "class", "model-content svelte-hkn2q1"), Un(t, "class", "modal-container svelte-hkn2q1"), Un(e, "class", "modal svelte-hkn2q1"), Un(e, "id", "model-box-edit");
    },
    m(g, m) {
      Ei(g, e, m), Ge(e, t), Ge(t, l), Ge(l, i), Fn(s, i, null), Ge(l, o), Ge(l, r), Fn(a, r, null), Ge(l, u), Ge(l, f), Fn(_, f, null), Ge(l, d), Ge(l, c), Fn(h, c, null), b = !0;
    },
    p(g, [m]) {
      const v = {};
      m & /*currentLabel*/
      1 && (v.value = /*currentLabel*/
      g[0]), m & /*choices*/
      4 && (v.choices = /*choices*/
      g[2]), s.$set(v);
      const p = {};
      m & /*currentColor*/
      2 && (p.value = /*currentColor*/
      g[1]), a.$set(p);
      const C = {};
      m & /*$$scope*/
      16384 && (C.$$scope = { dirty: m, ctx: g }), _.$set(C);
      const M = {};
      m & /*$$scope*/
      16384 && (M.$$scope = { dirty: m, ctx: g }), h.$set(M);
    },
    i(g) {
      b || (Pn(s.$$.fragment, g), Pn(a.$$.fragment, g), Pn(_.$$.fragment, g), Pn(h.$$.fragment, g), b = !0);
    },
    o(g) {
      Wn(s.$$.fragment, g), Wn(a.$$.fragment, g), Wn(_.$$.fragment, g), Wn(h.$$.fragment, g), b = !1;
    },
    d(g) {
      g && qi(e), Rn(s), Rn(a), Rn(_), Rn(h);
    }
  };
}
function w0(n, e, t) {
  let { label: l = "" } = e, { currentLabel: i = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e;
  const u = d0();
  function f(m) {
    u("change", {
      label: i,
      color: a,
      ok: m
    });
  }
  function _(m) {
    const { detail: v } = m;
    let p = v;
    Number.isInteger(p) ? (Array.isArray(o) && p < o.length && t(1, a = o[p]), Array.isArray(s) && p < s.length && t(0, i = s[p][0])) : t(0, i = p);
  }
  function d(m) {
    const { detail: v } = m;
    t(1, a = v);
  }
  function c(m) {
    _(m), f(!0);
  }
  function h(m) {
    switch (m.key) {
      case "Enter":
        f(!0);
        break;
    }
  }
  h0(() => {
    document.addEventListener("keydown", h), t(0, i = l), t(1, a = r);
  }), m0(() => {
    document.removeEventListener("keydown", h);
  });
  const b = () => f(!1), g = () => f(!0);
  return n.$$set = (m) => {
    "label" in m && t(7, l = m.label), "currentLabel" in m && t(0, i = m.currentLabel), "choices" in m && t(2, s = m.choices), "choicesColors" in m && t(8, o = m.choicesColors), "color" in m && t(9, r = m.color), "currentColor" in m && t(1, a = m.currentColor);
  }, [
    i,
    a,
    s,
    f,
    _,
    d,
    c,
    l,
    o,
    r,
    b,
    g
  ];
}
class ra extends f0 {
  constructor(e) {
    super(), c0(this, e, w0, p0, _0, {
      label: 7,
      currentLabel: 0,
      choices: 2,
      choicesColors: 8,
      color: 9,
      currentColor: 1
    });
  }
}
const ze = (n, e, t) => Math.min(Math.max(n, e), t);
function Jl(n, e) {
  if (n.startsWith("rgba"))
    return n.replace(/[\d.]+$/, e.toString());
  const t = n.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [l, i, s] = t;
  return `rgba(${l}, ${i}, ${s}, ${e})`;
}
class Kl {
  constructor(e, t, l, i, s, o, r, a, u, f, _ = "rgb(255, 255, 255)", d = 0.5, c = 25, h = 8, b = 2, g = 4, m = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (v) => {
      if (this.isDragging) {
        let p = v.clientX - this.offsetMouseX - this.xmin, C = v.clientY - this.offsetMouseY - this.ymin;
        const M = this.canvasXmax - this.canvasXmin, k = this.canvasYmax - this.canvasYmin;
        p = ze(p, -this.xmin, M - this.xmax), C = ze(C, -this.ymin, k - this.ymax), this.xmin += p, this.ymin += C, this.xmax += p, this.ymax += C, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (v) => {
      if (this.isResizing) {
        const p = v.clientX, C = v.clientY, M = p - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, k = C - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, D = this.canvasXmax - this.canvasXmin, w = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += M, this.ymin += k, this.xmin = ze(this.xmin, 0, this.xmax - this.minSize), this.ymin = ze(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += M, this.ymin += k, this.xmax = ze(this.xmax, this.xmin + this.minSize, D), this.ymin = ze(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += M, this.ymax += k, this.xmax = ze(this.xmax, this.xmin + this.minSize, D), this.ymax = ze(this.ymax, this.ymin + this.minSize, w);
            break;
          case 3:
            this.xmin += M, this.ymax += k, this.xmin = ze(this.xmin, 0, this.xmax - this.minSize), this.ymax = ze(this.ymax, this.ymin + this.minSize, w);
            break;
          case 4:
            this.ymin += k, this.ymin = ze(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += M, this.xmax = ze(this.xmax, this.xmin + this.minSize, D);
            break;
          case 6:
            this.ymax += k, this.ymax = ze(this.ymax, this.ymin + this.minSize, w);
            break;
          case 7:
            this.xmin += M, this.xmin = ze(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.canvasXmin = t, this.canvasYmin = l, this.canvasXmax = i, this.canvasYmax = s, this.scaleFactor = m, this.label = o, this.isDragging = !1, this.xmin = r, this.ymin = a, this.xmax = u, this.ymax = f, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h, this.thickness = b, this.selectedThickness = g, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = c, this.color = _, this.alpha = d;
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
    const e = this.resizeHandleSize / 2, t = this.getWidth(), l = this.getHeight();
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
        ymin: this.ymin + l / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + l / 2 + e
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
        ymin: this.ymin + l / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + l / 2 + e
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
    let t, l;
    if (e.beginPath(), [t, l] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, l, this.getWidth(), this.getHeight()), e.fillStyle = Jl(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Jl(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, i, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, i, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = Jl(this.color, 1);
    for (const i of this.resizeHandles)
      [t, l] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        l,
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
    for (let l = 0; l < this.resizeHandles.length; l++) {
      const i = this.resizeHandles[l];
      if (e >= i.xmin && e <= i.xmax && t >= i.ymin && t <= i.ymax)
        return this.resizingHandleIndex = l, l;
    }
    return -1;
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("mousemove", this.handleResize), document.addEventListener("mouseup", this.stopResize);
  }
}
const Xe = [
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
  SvelteComponent: v0,
  append: Wt,
  attr: Ct,
  binding_callbacks: k0,
  bubble: Zs,
  check_outros: Ql,
  create_component: pn,
  destroy_component: wn,
  detach: Xt,
  element: Qt,
  empty: y0,
  group_outros: xl,
  init: S0,
  insert: Yt,
  listen: ot,
  mount_component: vn,
  noop: C0,
  run_all: ua,
  safe_not_equal: z0,
  space: kn,
  transition_in: qe,
  transition_out: He
} = window.__gradio__svelte__internal, { onMount: q0, onDestroy: E0, createEventDispatcher: D0 } = window.__gradio__svelte__internal;
function Gs(n) {
  let e, t, l, i, s, o, r, a, u, f, _, d;
  return l = new $_({}), o = new Pu({}), u = new mo({}), {
    c() {
      e = Qt("span"), t = Qt("button"), pn(l.$$.fragment), i = kn(), s = Qt("button"), pn(o.$$.fragment), r = kn(), a = Qt("button"), pn(u.$$.fragment), Ct(t, "class", "icon svelte-182gnnj"), Ct(s, "class", "icon svelte-182gnnj"), Ct(a, "class", "icon svelte-182gnnj"), Ct(e, "class", "canvas-control svelte-182gnnj");
    },
    m(c, h) {
      Yt(c, e, h), Wt(e, t), vn(l, t, null), Wt(e, i), Wt(e, s), vn(o, s, null), Wt(e, r), Wt(e, a), vn(u, a, null), f = !0, _ || (d = [
        ot(
          t,
          "click",
          /*click_handler*/
          n[25]
        ),
        ot(
          s,
          "click",
          /*click_handler_1*/
          n[26]
        ),
        ot(
          a,
          "click",
          /*click_handler_2*/
          n[27]
        )
      ], _ = !0);
    },
    p: C0,
    i(c) {
      f || (qe(l.$$.fragment, c), qe(o.$$.fragment, c), qe(u.$$.fragment, c), f = !0);
    },
    o(c) {
      He(l.$$.fragment, c), He(o.$$.fragment, c), He(u.$$.fragment, c), f = !1;
    },
    d(c) {
      c && Xt(e), wn(l), wn(o), wn(u), _ = !1, ua(d);
    }
  };
}
function Js(n) {
  let e, t;
  return e = new ra({
    props: {
      choices: (
        /*choices*/
        n[2]
      ),
      choicesColors: (
        /*choicesColors*/
        n[3]
      ),
      label: (
        /*selectedBox*/
        n[5] >= 0 && /*selectedBox*/
        n[5] < /*value*/
        n[0].boxes.length ? (
          /*value*/
          n[0].boxes[
            /*selectedBox*/
            n[5]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        n[5] >= 0 && /*selectedBox*/
        n[5] < /*value*/
        n[0].boxes.length ? Sn(
          /*value*/
          n[0].boxes[
            /*selectedBox*/
            n[5]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    n[14]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    n[28]
  ), {
    c() {
      pn(e.$$.fragment);
    },
    m(l, i) {
      vn(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*choices*/
      4 && (s.choices = /*choices*/
      l[2]), i[0] & /*choicesColors*/
      8 && (s.choicesColors = /*choicesColors*/
      l[3]), i[0] & /*selectedBox, value*/
      33 && (s.label = /*selectedBox*/
      l[5] >= 0 && /*selectedBox*/
      l[5] < /*value*/
      l[0].boxes.length ? (
        /*value*/
        l[0].boxes[
          /*selectedBox*/
          l[5]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      33 && (s.color = /*selectedBox*/
      l[5] >= 0 && /*selectedBox*/
      l[5] < /*value*/
      l[0].boxes.length ? Sn(
        /*value*/
        l[0].boxes[
          /*selectedBox*/
          l[5]
        ].color
      ) : ""), e.$set(s);
    },
    i(l) {
      t || (qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      He(e.$$.fragment, l), t = !1;
    },
    d(l) {
      wn(e, l);
    }
  };
}
function Ks(n) {
  let e, t;
  return e = new ra({
    props: {
      choices: (
        /*choices*/
        n[2]
      ),
      choicesColors: (
        /*choicesColors*/
        n[3]
      ),
      color: Array.isArray(
        /*choicesColors*/
        n[3]
      ) && /*choicesColors*/
      n[3].length > 0 ? (
        /*choicesColors*/
        n[3][0]
      ) : Sn(Xe[
        /*value*/
        n[0].boxes.length % Xe.length
      ])
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    n[11]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    n[29]
  ), {
    c() {
      pn(e.$$.fragment);
    },
    m(l, i) {
      vn(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*choices*/
      4 && (s.choices = /*choices*/
      l[2]), i[0] & /*choicesColors*/
      8 && (s.choicesColors = /*choicesColors*/
      l[3]), i[0] & /*choicesColors, value*/
      9 && (s.color = Array.isArray(
        /*choicesColors*/
        l[3]
      ) && /*choicesColors*/
      l[3].length > 0 ? (
        /*choicesColors*/
        l[3][0]
      ) : Sn(Xe[
        /*value*/
        l[0].boxes.length % Xe.length
      ])), e.$set(s);
    },
    i(l) {
      t || (qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      He(e.$$.fragment, l), t = !1;
    },
    d(l) {
      wn(e, l);
    }
  };
}
function A0(n) {
  let e, t, l, i, s, o, r, a, u, f = (
    /*interactive*/
    n[1] && Gs(n)
  ), _ = (
    /*editModalVisible*/
    n[6] && Js(n)
  ), d = (
    /*newModalVisible*/
    n[7] && Ks(n)
  );
  return {
    c() {
      e = Qt("div"), t = Qt("canvas"), l = kn(), f && f.c(), i = kn(), _ && _.c(), s = kn(), d && d.c(), o = y0(), Ct(t, "class", "canvas-annotator svelte-182gnnj"), Ct(e, "class", "canvas-container svelte-182gnnj"), Ct(e, "tabindex", "-1");
    },
    m(c, h) {
      Yt(c, e, h), Wt(e, t), n[24](t), Yt(c, l, h), f && f.m(c, h), Yt(c, i, h), _ && _.m(c, h), Yt(c, s, h), d && d.m(c, h), Yt(c, o, h), r = !0, a || (u = [
        ot(
          t,
          "mousedown",
          /*handleMouseDown*/
          n[8]
        ),
        ot(
          t,
          "mouseup",
          /*handleMouseUp*/
          n[9]
        ),
        ot(
          t,
          "dblclick",
          /*handleDoubleClick*/
          n[13]
        ),
        ot(
          e,
          "focusin",
          /*handleCanvasFocus*/
          n[16]
        ),
        ot(
          e,
          "focusout",
          /*handleCanvasBlur*/
          n[17]
        )
      ], a = !0);
    },
    p(c, h) {
      /*interactive*/
      c[1] ? f ? (f.p(c, h), h[0] & /*interactive*/
      2 && qe(f, 1)) : (f = Gs(c), f.c(), qe(f, 1), f.m(i.parentNode, i)) : f && (xl(), He(f, 1, 1, () => {
        f = null;
      }), Ql()), /*editModalVisible*/
      c[6] ? _ ? (_.p(c, h), h[0] & /*editModalVisible*/
      64 && qe(_, 1)) : (_ = Js(c), _.c(), qe(_, 1), _.m(s.parentNode, s)) : _ && (xl(), He(_, 1, 1, () => {
        _ = null;
      }), Ql()), /*newModalVisible*/
      c[7] ? d ? (d.p(c, h), h[0] & /*newModalVisible*/
      128 && qe(d, 1)) : (d = Ks(c), d.c(), qe(d, 1), d.m(o.parentNode, o)) : d && (xl(), He(d, 1, 1, () => {
        d = null;
      }), Ql());
    },
    i(c) {
      r || (qe(f), qe(_), qe(d), r = !0);
    },
    o(c) {
      He(f), He(_), He(d), r = !1;
    },
    d(c) {
      c && (Xt(e), Xt(l), Xt(i), Xt(s), Xt(o)), n[24](null), f && f.d(c), _ && _.d(c), d && d.d(c), a = !1, ua(u);
    }
  };
}
function Qs(n) {
  var e = parseInt(n.slice(1, 3), 16), t = parseInt(n.slice(3, 5), 16), l = parseInt(n.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + l + ")";
}
function Sn(n) {
  const e = n.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), l = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | l << 8 | i).toString(16).slice(1);
}
function M0(n, e, t) {
  let { imageUrl: l = null } = e, { interactive: i } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: o = 25 } = e, { handleSize: r } = e, { boxThickness: a } = e, { boxSelectedThickness: u } = e, { value: f } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, c, h, b = null, g = -1, m = 0, v = 0, p = 0, C = 0, M = 1, k = 0, D = 0, w = !1, A = !1;
  const O = D0();
  function U() {
    if (h) {
      h.clearRect(0, 0, c.width, c.height), b !== null && h.drawImage(b, m, v, k, D);
      for (const L of f.boxes.slice().reverse())
        L.render(h);
    }
  }
  function B(L) {
    t(5, g = L), f.boxes.forEach((P) => {
      P.setSelected(!1);
    }), L >= 0 && L < f.boxes.length && f.boxes[L].setSelected(!0), U();
  }
  function H(L) {
    if (!i)
      return;
    const P = c.getBoundingClientRect(), N = L.clientX - P.left, K = L.clientY - P.top;
    for (const [Se, Ce] of f.boxes.entries()) {
      const $e = Ce.indexOfPointInsideHandle(N, K);
      if ($e >= 0) {
        B(Se), Ce.startResize($e, L);
        return;
      }
    }
    for (const [Se, Ce] of f.boxes.entries())
      if (Ce.isPointInsideBox(N, K)) {
        B(Se), Ce.startDrag(L);
        return;
      }
    B(-1);
  }
  function ne(L) {
    O("change");
  }
  function $(L) {
    if (i)
      switch (L.key) {
        case "Delete":
          Y();
          break;
      }
  }
  function he() {
    t(7, A = !0);
  }
  function ke(L) {
    t(7, A = !1);
    const { detail: P } = L;
    let N = P.label, K = P.color;
    if (P.ok) {
      K === null || K === "" ? K = Xe[f.boxes.length % Xe.length] : K = Qs(K);
      let Ce = k / 3 / M, $e = k / 3 * 2 / M, Q = D / 3 / M, de = D / 3 * 2 / M, ee = new Kl(U, m, v, p, C, N, Math.round(Ce), Math.round(Q), Math.round($e), Math.round(de), K, s, o, r, a, u);
      t(0, f.boxes = [ee, ...f.boxes], f), U(), O("change");
    }
  }
  function ge() {
    g >= 0 && g < f.boxes.length && t(6, w = !0);
  }
  function ye(L) {
    i && ge();
  }
  function E(L) {
    t(6, w = !1);
    const { detail: P } = L;
    let N = P.label, K = P.color;
    if (P.ok && g >= 0 && g < f.boxes.length) {
      let Ce = f.boxes[g];
      Ce.label = N, Ce.color = Qs(K), U(), O("change");
    }
  }
  function Y() {
    g >= 0 && g < f.boxes.length && (f.boxes.splice(g, 1), B(-1), O("change"));
  }
  function q() {
    if (c) {
      if (M = 1, t(4, c.width = c.clientWidth, c), b !== null)
        if (b.width > c.width)
          M = c.width / b.width, k = b.width * M, D = b.height * M, m = 0, v = 0, p = k, C = D, t(4, c.height = D, c);
        else {
          k = b.width, D = b.height;
          var L = (c.width - k) / 2;
          m = L, v = 0, p = L + k, C = b.height, t(4, c.height = D, c);
        }
      else
        m = 0, v = 0, p = c.width, C = c.height, t(4, c.height = c.clientHeight, c);
      if (p > 0 && C > 0)
        for (const P of f.boxes)
          P.canvasXmin = m, P.canvasYmin = v, P.canvasXmax = p, P.canvasYmax = C, P.setScaleFactor(M);
      U(), O("change");
    }
  }
  const S = new ResizeObserver(q);
  function j() {
    for (let L = 0; L < f.boxes.length; L++) {
      let P = f.boxes[L];
      if (!(P instanceof Kl)) {
        let N = "", K = "";
        P.hasOwnProperty("color") ? (N = P.color, Array.isArray(N) && N.length === 3 && (N = `rgb(${N[0]}, ${N[1]}, ${N[2]})`)) : N = Xe[L % Xe.length], P.hasOwnProperty("label") && (K = P.label), P = new Kl(U, m, v, p, C, K, P.xmin, P.ymin, P.xmax, P.ymax, N, s, o, r, a, u), t(0, f.boxes[L] = P, f);
      }
    }
  }
  function F() {
    l !== null && (b === null || b.src != l) && (b = new Image(), b.src = l, b.onload = function() {
      q(), U();
    });
  }
  q0(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let L = 0; L < _.length; L++) {
        let P = Xe[L % Xe.length];
        d.push(Sn(P));
      }
    h = c.getContext("2d"), S.observe(c), F(), q(), U();
  });
  function y() {
    document.addEventListener("keydown", $);
  }
  function z() {
    document.removeEventListener("keydown", $);
  }
  E0(() => {
    document.removeEventListener("keydown", $);
  });
  function Z(L) {
    k0[L ? "unshift" : "push"](() => {
      c = L, t(4, c);
    });
  }
  const T = () => he(), se = () => ge(), le = () => Y();
  function W(L) {
    Zs.call(this, n, L);
  }
  function ie(L) {
    Zs.call(this, n, L);
  }
  return n.$$set = (L) => {
    "imageUrl" in L && t(18, l = L.imageUrl), "interactive" in L && t(1, i = L.interactive), "boxAlpha" in L && t(19, s = L.boxAlpha), "boxMinSize" in L && t(20, o = L.boxMinSize), "handleSize" in L && t(21, r = L.handleSize), "boxThickness" in L && t(22, a = L.boxThickness), "boxSelectedThickness" in L && t(23, u = L.boxSelectedThickness), "value" in L && t(0, f = L.value), "choices" in L && t(2, _ = L.choices), "choicesColors" in L && t(3, d = L.choicesColors);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*value*/
    1 && (F(), j(), q(), U());
  }, [
    f,
    i,
    _,
    d,
    c,
    g,
    w,
    A,
    H,
    ne,
    he,
    ke,
    ge,
    ye,
    E,
    Y,
    y,
    z,
    l,
    s,
    o,
    r,
    a,
    u,
    Z,
    T,
    se,
    le,
    W,
    ie
  ];
}
class j0 extends v0 {
  constructor(e) {
    super(), S0(
      this,
      e,
      M0,
      A0,
      z0,
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
  SvelteComponent: L0,
  add_flush_callback: B0,
  bind: T0,
  binding_callbacks: N0,
  create_component: O0,
  destroy_component: U0,
  init: I0,
  mount_component: R0,
  safe_not_equal: F0,
  transition_in: H0,
  transition_out: P0
} = window.__gradio__svelte__internal, { createEventDispatcher: W0 } = window.__gradio__svelte__internal;
function X0(n) {
  let e, t, l;
  function i(o) {
    n[13](o);
  }
  let s = {
    interactive: (
      /*interactive*/
      n[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      n[2]
    ),
    choices: (
      /*labelList*/
      n[3]
    ),
    choicesColors: (
      /*labelColors*/
      n[4]
    ),
    boxMinSize: (
      /*boxMinSize*/
      n[5]
    ),
    handleSize: (
      /*handleSize*/
      n[6]
    ),
    boxThickness: (
      /*boxThickness*/
      n[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      n[8]
    ),
    imageUrl: (
      /*resolved_src*/
      n[9]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (s.value = /*value*/
    n[0]), e = new j0({ props: s }), N0.push(() => T0(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      n[14]
    ), {
      c() {
        O0(e.$$.fragment);
      },
      m(o, r) {
        R0(e, o, r), l = !0;
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
        o[4]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        o[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        o[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        o[7]), r & /*boxSelectedThickness*/
        256 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        o[8]), r & /*resolved_src*/
        512 && (a.imageUrl = /*resolved_src*/
        o[9]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        o[0], B0(() => t = !1)), e.$set(a);
      },
      i(o) {
        l || (H0(e.$$.fragment, o), l = !0);
      },
      o(o) {
        P0(e.$$.fragment, o), l = !1;
      },
      d(o) {
        U0(e, o);
      }
    }
  );
}
function Y0(n, e, t) {
  let { src: l = void 0 } = e, { interactive: i } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: u } = e, { boxThickness: f } = e, { boxSelectedThickness: _ } = e, { value: d } = e, c, h;
  const b = W0();
  function g(v) {
    d = v, t(0, d);
  }
  const m = () => b("change");
  return n.$$set = (v) => {
    "src" in v && t(11, l = v.src), "interactive" in v && t(1, i = v.interactive), "boxesAlpha" in v && t(2, s = v.boxesAlpha), "labelList" in v && t(3, o = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, u = v.handleSize), "boxThickness" in v && t(7, f = v.boxThickness), "boxSelectedThickness" in v && t(8, _ = v.boxSelectedThickness), "value" in v && t(0, d = v.value);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*src, latest_src*/
    6144) {
      t(9, c = l), t(12, h = l);
      const v = l;
      Yc(v).then((p) => {
        h === v && t(9, c = p);
      });
    }
  }, [
    d,
    i,
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    c,
    b,
    l,
    h,
    g,
    m
  ];
}
class fa extends L0 {
  constructor(e) {
    super(), I0(this, e, Y0, X0, F0, {
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
class V0 {
  constructor() {
    this.boxes = [];
  }
}
const {
  SvelteComponent: Z0,
  add_flush_callback: rl,
  append: rn,
  attr: mn,
  bind: ul,
  binding_callbacks: Cn,
  bubble: $l,
  check_outros: Vt,
  create_component: ft,
  create_slot: G0,
  destroy_component: ct,
  detach: zt,
  element: yn,
  empty: J0,
  get_all_dirty_from_scope: K0,
  get_slot_changes: Q0,
  group_outros: Zt,
  init: x0,
  insert: qt,
  mount_component: _t,
  noop: $0,
  safe_not_equal: eh,
  space: Ft,
  toggle_class: xs,
  transition_in: J,
  transition_out: re,
  update_slot_base: th
} = window.__gradio__svelte__internal, { createEventDispatcher: nh } = window.__gradio__svelte__internal;
function $s(n) {
  let e, t;
  return e = new i_({
    props: {
      href: (
        /*value*/
        n[1].image.url
      ),
      download: (
        /*value*/
        n[1].image.orig_name || "image"
      ),
      $$slots: { default: [lh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ft(e.$$.fragment);
    },
    m(l, i) {
      _t(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*value*/
      2 && (s.href = /*value*/
      l[1].image.url), i[0] & /*value*/
      2 && (s.download = /*value*/
      l[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      128 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (J(e.$$.fragment, l), t = !0);
    },
    o(l) {
      re(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ct(e, l);
    }
  };
}
function lh(n) {
  let e, t;
  return e = new pi({
    props: {
      Icon: qu,
      label: (
        /*i18n*/
        n[8]("common.download")
      )
    }
  }), {
    c() {
      ft(e.$$.fragment);
    },
    m(l, i) {
      _t(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      l[8]("common.download")), e.$set(s);
    },
    i(l) {
      t || (J(e.$$.fragment, l), t = !0);
    },
    o(l) {
      re(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ct(e, l);
    }
  };
}
function eo(n) {
  let e, t;
  return e = new Uf({
    props: {
      i18n: (
        /*i18n*/
        n[8]
      ),
      formatter: (
        /*func*/
        n[28]
      ),
      value: (
        /*value*/
        n[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    n[29]
  ), e.$on(
    "error",
    /*error_handler*/
    n[30]
  ), {
    c() {
      ft(e.$$.fragment);
    },
    m(l, i) {
      _t(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      l[8]), i[0] & /*value*/
      2 && (s.value = /*value*/
      l[1]), e.$set(s);
    },
    i(l) {
      t || (J(e.$$.fragment, l), t = !0);
    },
    o(l) {
      re(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ct(e, l);
    }
  };
}
function to(n) {
  let e, t, l;
  return t = new pi({
    props: { Icon: mo, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    n[26]
  ), {
    c() {
      e = yn("div"), ft(t.$$.fragment);
    },
    m(i, s) {
      qt(i, e, s), _t(t, e, null), l = !0;
    },
    p: $0,
    i(i) {
      l || (J(t.$$.fragment, i), l = !0);
    },
    o(i) {
      re(t.$$.fragment, i), l = !1;
    },
    d(i) {
      i && zt(e), ct(t);
    }
  };
}
function no(n) {
  let e;
  const t = (
    /*#slots*/
    n[27].default
  ), l = G0(
    t,
    n,
    /*$$scope*/
    n[38],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, s) {
      l && l.m(i, s), e = !0;
    },
    p(i, s) {
      l && l.p && (!e || s[1] & /*$$scope*/
      128) && th(
        l,
        t,
        i,
        /*$$scope*/
        i[38],
        e ? Q0(
          t,
          /*$$scope*/
          i[38],
          s,
          null
        ) : K0(
          /*$$scope*/
          i[38]
        ),
        null
      );
    },
    i(i) {
      e || (J(l, i), e = !0);
    },
    o(i) {
      re(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ih(n) {
  let e, t, l = (
    /*value*/
    n[1] === null && no(n)
  );
  return {
    c() {
      l && l.c(), e = J0();
    },
    m(i, s) {
      l && l.m(i, s), qt(i, e, s), t = !0;
    },
    p(i, s) {
      /*value*/
      i[1] === null ? l ? (l.p(i, s), s[0] & /*value*/
      2 && J(l, 1)) : (l = no(i), l.c(), J(l, 1), l.m(e.parentNode, e)) : l && (Zt(), re(l, 1, 1, () => {
        l = null;
      }), Vt());
    },
    i(i) {
      t || (J(l), t = !0);
    },
    o(i) {
      re(l), t = !1;
    },
    d(i) {
      i && zt(e), l && l.d(i);
    }
  };
}
function lo(n) {
  let e, t, l, i;
  function s(r) {
    n[35](r);
  }
  let o = {
    boxesAlpha: (
      /*boxesAlpha*/
      n[12]
    ),
    labelList: (
      /*labelList*/
      n[13]
    ),
    labelColors: (
      /*labelColors*/
      n[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      n[15]
    ),
    interactive: (
      /*interactive*/
      n[7]
    ),
    handleSize: (
      /*handleSize*/
      n[16]
    ),
    boxThickness: (
      /*boxThickness*/
      n[17]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      n[18]
    ),
    src: (
      /*value*/
      n[1].image.url
    )
  };
  return (
    /*value*/
    n[1] !== void 0 && (o.value = /*value*/
    n[1]), t = new fa({ props: o }), Cn.push(() => ul(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      n[36]
    ), {
      c() {
        e = yn("div"), ft(t.$$.fragment), mn(e, "class", "image-frame svelte-1gjdske"), xs(
          e,
          "selectable",
          /*selectable*/
          n[5]
        );
      },
      m(r, a) {
        qt(r, e, a), _t(t, e, null), i = !0;
      },
      p(r, a) {
        const u = {};
        a[0] & /*boxesAlpha*/
        4096 && (u.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (u.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (u.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (u.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (u.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (u.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        131072 && (u.boxThickness = /*boxThickness*/
        r[17]), a[0] & /*boxSelectedThickness*/
        262144 && (u.boxSelectedThickness = /*boxSelectedThickness*/
        r[18]), a[0] & /*value*/
        2 && (u.src = /*value*/
        r[1].image.url), !l && a[0] & /*value*/
        2 && (l = !0, u.value = /*value*/
        r[1], rl(() => l = !1)), t.$set(u), (!i || a[0] & /*selectable*/
        32) && xs(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (J(t.$$.fragment, r), i = !0);
      },
      o(r) {
        re(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && zt(e), ct(t);
      }
    }
  );
}
function io(n) {
  let e, t, l;
  function i(o) {
    n[37](o);
  }
  let s = {
    sources: (
      /*sources*/
      n[4]
    ),
    handle_clear: (
      /*handle_clear*/
      n[23]
    ),
    handle_select: (
      /*handle_select_source*/
      n[25]
    )
  };
  return (
    /*active_source*/
    n[0] !== void 0 && (s.active_source = /*active_source*/
    n[0]), e = new $f({ props: s }), Cn.push(() => ul(e, "active_source", i)), {
      c() {
        ft(e.$$.fragment);
      },
      m(o, r) {
        _t(e, o, r), l = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], rl(() => t = !1)), e.$set(a);
      },
      i(o) {
        l || (J(e.$$.fragment, o), l = !0);
      },
      o(o) {
        re(e.$$.fragment, o), l = !1;
      },
      d(o) {
        ct(e, o);
      }
    }
  );
}
function sh(n) {
  let e, t, l, i, s, o, r, a, u, f, _, d, c, h = (
    /*sources*/
    (n[4].length > 1 || /*sources*/
    n[4].includes("clipboard")) && /*value*/
    n[1] === null && /*interactive*/
    n[7]
  ), b;
  e = new Er({
    props: {
      show_label: (
        /*show_label*/
        n[3]
      ),
      Icon: go,
      label: (
        /*label*/
        n[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    n[10] && /*value*/
    n[1] !== null && $s(n)
  ), m = (
    /*showShareButton*/
    n[9] && /*value*/
    n[1] !== null && eo(n)
  ), v = (
    /*showClearButton*/
    n[11] && /*value*/
    n[1] !== null && /*interactive*/
    n[7] && to(n)
  );
  function p(w) {
    n[32](w);
  }
  function C(w) {
    n[33](w);
  }
  let M = {
    hidden: (
      /*value*/
      n[1] !== null
    ),
    filetype: (
      /*active_source*/
      n[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      n[6]
    ),
    disable_click: !/*sources*/
    n[4].includes("upload"),
    $$slots: { default: [ih] },
    $$scope: { ctx: n }
  };
  /*uploading*/
  n[19] !== void 0 && (M.uploading = /*uploading*/
  n[19]), /*dragging*/
  n[20] !== void 0 && (M.dragging = /*dragging*/
  n[20]), u = new V_({ props: M }), n[31](u), Cn.push(() => ul(u, "uploading", p)), Cn.push(() => ul(u, "dragging", C)), u.$on(
    "load",
    /*handle_upload*/
    n[22]
  ), u.$on(
    "error",
    /*error_handler_1*/
    n[34]
  );
  let k = (
    /*value*/
    n[1] !== null && lo(n)
  ), D = h && io(n);
  return {
    c() {
      ft(e.$$.fragment), t = Ft(), l = yn("div"), g && g.c(), i = Ft(), m && m.c(), s = Ft(), v && v.c(), o = Ft(), r = yn("div"), a = yn("div"), ft(u.$$.fragment), d = Ft(), k && k.c(), c = Ft(), D && D.c(), mn(l, "class", "icon-buttons svelte-1gjdske"), mn(a, "class", "upload-container svelte-1gjdske"), mn(r, "data-testid", "image"), mn(r, "class", "image-container svelte-1gjdske");
    },
    m(w, A) {
      _t(e, w, A), qt(w, t, A), qt(w, l, A), g && g.m(l, null), rn(l, i), m && m.m(l, null), rn(l, s), v && v.m(l, null), qt(w, o, A), qt(w, r, A), rn(r, a), _t(u, a, null), rn(a, d), k && k.m(a, null), rn(r, c), D && D.m(r, null), b = !0;
    },
    p(w, A) {
      const O = {};
      A[0] & /*show_label*/
      8 && (O.show_label = /*show_label*/
      w[3]), A[0] & /*label*/
      4 && (O.label = /*label*/
      w[2] || "Image Annotator"), e.$set(O), /*showDownloadButton*/
      w[10] && /*value*/
      w[1] !== null ? g ? (g.p(w, A), A[0] & /*showDownloadButton, value*/
      1026 && J(g, 1)) : (g = $s(w), g.c(), J(g, 1), g.m(l, i)) : g && (Zt(), re(g, 1, 1, () => {
        g = null;
      }), Vt()), /*showShareButton*/
      w[9] && /*value*/
      w[1] !== null ? m ? (m.p(w, A), A[0] & /*showShareButton, value*/
      514 && J(m, 1)) : (m = eo(w), m.c(), J(m, 1), m.m(l, s)) : m && (Zt(), re(m, 1, 1, () => {
        m = null;
      }), Vt()), /*showClearButton*/
      w[11] && /*value*/
      w[1] !== null && /*interactive*/
      w[7] ? v ? (v.p(w, A), A[0] & /*showClearButton, value, interactive*/
      2178 && J(v, 1)) : (v = to(w), v.c(), J(v, 1), v.m(l, null)) : v && (Zt(), re(v, 1, 1, () => {
        v = null;
      }), Vt());
      const U = {};
      A[0] & /*value*/
      2 && (U.hidden = /*value*/
      w[1] !== null), A[0] & /*active_source*/
      1 && (U.filetype = /*active_source*/
      w[0] === "clipboard" ? "clipboard" : "image/*"), A[0] & /*root*/
      64 && (U.root = /*root*/
      w[6]), A[0] & /*sources*/
      16 && (U.disable_click = !/*sources*/
      w[4].includes("upload")), A[0] & /*value*/
      2 | A[1] & /*$$scope*/
      128 && (U.$$scope = { dirty: A, ctx: w }), !f && A[0] & /*uploading*/
      524288 && (f = !0, U.uploading = /*uploading*/
      w[19], rl(() => f = !1)), !_ && A[0] & /*dragging*/
      1048576 && (_ = !0, U.dragging = /*dragging*/
      w[20], rl(() => _ = !1)), u.$set(U), /*value*/
      w[1] !== null ? k ? (k.p(w, A), A[0] & /*value*/
      2 && J(k, 1)) : (k = lo(w), k.c(), J(k, 1), k.m(a, null)) : k && (Zt(), re(k, 1, 1, () => {
        k = null;
      }), Vt()), A[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (w[4].length > 1 || /*sources*/
      w[4].includes("clipboard")) && /*value*/
      w[1] === null && /*interactive*/
      w[7]), h ? D ? (D.p(w, A), A[0] & /*sources, value, interactive*/
      146 && J(D, 1)) : (D = io(w), D.c(), J(D, 1), D.m(r, null)) : D && (Zt(), re(D, 1, 1, () => {
        D = null;
      }), Vt());
    },
    i(w) {
      b || (J(e.$$.fragment, w), J(g), J(m), J(v), J(u.$$.fragment, w), J(k), J(D), b = !0);
    },
    o(w) {
      re(e.$$.fragment, w), re(g), re(m), re(v), re(u.$$.fragment, w), re(k), re(D), b = !1;
    },
    d(w) {
      w && (zt(t), zt(l), zt(o), zt(r)), ct(e, w), g && g.d(), m && m.d(), v && v.d(), n[31](null), ct(u), k && k.d(), D && D.d();
    }
  };
}
function oh(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(z, Z, T, se) {
    function le(W) {
      return W instanceof T ? W : new T(function(ie) {
        ie(W);
      });
    }
    return new (T || (T = Promise))(function(W, ie) {
      function L(K) {
        try {
          N(se.next(K));
        } catch (Se) {
          ie(Se);
        }
      }
      function P(K) {
        try {
          N(se.throw(K));
        } catch (Se) {
          ie(Se);
        }
      }
      function N(K) {
        K.done ? W(K.value) : le(K.value).then(L, P);
      }
      N((se = se.apply(z, Z || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: u = ["upload", "clipboard"] } = e, { selectable: f = !1 } = e, { root: _ } = e, { interactive: d } = e, { i18n: c } = e, { showShareButton: h } = e, { showDownloadButton: b } = e, { showClearButton: g } = e, { boxesAlpha: m } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: C } = e, { handleSize: M } = e, { boxThickness: k } = e, { boxSelectedThickness: D } = e, w, A = !1, { active_source: O = null } = e;
  function U({ detail: z }) {
    t(1, o = new V0()), t(1, o.image = z, o), H("upload");
  }
  function B() {
    he(), H("clear"), H("change");
  }
  const H = nh();
  let ne = !1;
  function $(z) {
    return s(this, void 0, void 0, function* () {
      switch (z) {
        case "clipboard":
          w.paste_clipboard();
          break;
      }
    });
  }
  function he() {
    t(1, o = null);
  }
  const ke = async (z) => z === null ? "" : `<img src="${await Cf(z.image)}" />`;
  function ge(z) {
    $l.call(this, n, z);
  }
  function ye(z) {
    $l.call(this, n, z);
  }
  function E(z) {
    Cn[z ? "unshift" : "push"](() => {
      w = z, t(21, w);
    });
  }
  function Y(z) {
    A = z, t(19, A);
  }
  function q(z) {
    ne = z, t(20, ne);
  }
  function S(z) {
    $l.call(this, n, z);
  }
  function j(z) {
    o = z, t(1, o);
  }
  const F = () => H("change");
  function y(z) {
    O = z, t(0, O), t(4, u);
  }
  return n.$$set = (z) => {
    "value" in z && t(1, o = z.value), "label" in z && t(2, r = z.label), "show_label" in z && t(3, a = z.show_label), "sources" in z && t(4, u = z.sources), "selectable" in z && t(5, f = z.selectable), "root" in z && t(6, _ = z.root), "interactive" in z && t(7, d = z.interactive), "i18n" in z && t(8, c = z.i18n), "showShareButton" in z && t(9, h = z.showShareButton), "showDownloadButton" in z && t(10, b = z.showDownloadButton), "showClearButton" in z && t(11, g = z.showClearButton), "boxesAlpha" in z && t(12, m = z.boxesAlpha), "labelList" in z && t(13, v = z.labelList), "labelColors" in z && t(14, p = z.labelColors), "boxMinSize" in z && t(15, C = z.boxMinSize), "handleSize" in z && t(16, M = z.handleSize), "boxThickness" in z && t(17, k = z.boxThickness), "boxSelectedThickness" in z && t(18, D = z.boxSelectedThickness), "active_source" in z && t(0, O = z.active_source), "$$scope" in z && t(38, i = z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*uploading*/
    524288 && A && he(), n.$$.dirty[0] & /*dragging*/
    1048576 && H("drag", ne), n.$$.dirty[0] & /*active_source, sources*/
    17 && !O && u && t(0, O = u[0]);
  }, [
    O,
    o,
    r,
    a,
    u,
    f,
    _,
    d,
    c,
    h,
    b,
    g,
    m,
    v,
    p,
    C,
    M,
    k,
    D,
    A,
    ne,
    w,
    U,
    B,
    H,
    $,
    he,
    l,
    ke,
    ge,
    ye,
    E,
    Y,
    q,
    S,
    j,
    F,
    y,
    i
  ];
}
class ah extends Z0 {
  constructor(e) {
    super(), x0(
      this,
      e,
      oh,
      sh,
      eh,
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
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: rh,
  attr: uh,
  check_outros: fh,
  create_component: ch,
  destroy_component: _h,
  detach: dh,
  element: hh,
  group_outros: mh,
  init: gh,
  insert: bh,
  mount_component: ph,
  safe_not_equal: wh,
  toggle_class: st,
  transition_in: Qn,
  transition_out: bi
} = window.__gradio__svelte__internal;
function so(n) {
  let e, t;
  return e = new fa({
    props: {
      src: (
        /*samples_dir*/
        n[1] + /*value*/
        n[0].path
      ),
      alt: ""
    }
  }), {
    c() {
      ch(e.$$.fragment);
    },
    m(l, i) {
      ph(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i & /*samples_dir, value*/
      3 && (s.src = /*samples_dir*/
      l[1] + /*value*/
      l[0].path), e.$set(s);
    },
    i(l) {
      t || (Qn(e.$$.fragment, l), t = !0);
    },
    o(l) {
      bi(e.$$.fragment, l), t = !1;
    },
    d(l) {
      _h(e, l);
    }
  };
}
function vh(n) {
  let e, t, l = (
    /*value*/
    n[0] && so(n)
  );
  return {
    c() {
      e = hh("div"), l && l.c(), uh(e, "class", "container svelte-1sgcyba"), st(
        e,
        "table",
        /*type*/
        n[2] === "table"
      ), st(
        e,
        "gallery",
        /*type*/
        n[2] === "gallery"
      ), st(
        e,
        "selected",
        /*selected*/
        n[3]
      ), st(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    m(i, s) {
      bh(i, e, s), l && l.m(e, null), t = !0;
    },
    p(i, [s]) {
      /*value*/
      i[0] ? l ? (l.p(i, s), s & /*value*/
      1 && Qn(l, 1)) : (l = so(i), l.c(), Qn(l, 1), l.m(e, null)) : l && (mh(), bi(l, 1, 1, () => {
        l = null;
      }), fh()), (!t || s & /*type*/
      4) && st(
        e,
        "table",
        /*type*/
        i[2] === "table"
      ), (!t || s & /*type*/
      4) && st(
        e,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), (!t || s & /*selected*/
      8) && st(
        e,
        "selected",
        /*selected*/
        i[3]
      ), (!t || s & /*value*/
      1) && st(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    i(i) {
      t || (Qn(l), t = !0);
    },
    o(i) {
      bi(l), t = !1;
    },
    d(i) {
      i && dh(e), l && l.d();
    }
  };
}
function kh(n, e, t) {
  let { value: l } = e, { samples_dir: i } = e, { type: s } = e, { selected: o = !1 } = e;
  return n.$$set = (r) => {
    "value" in r && t(0, l = r.value), "samples_dir" in r && t(1, i = r.samples_dir), "type" in r && t(2, s = r.type), "selected" in r && t(3, o = r.selected);
  }, [l, i, s, o];
}
class Vh extends rh {
  constructor(e) {
    super(), gh(this, e, kh, vh, wh, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: yh,
  add_flush_callback: oo,
  assign: Sh,
  bind: ao,
  binding_callbacks: ro,
  check_outros: Ch,
  create_component: Mt,
  destroy_component: jt,
  detach: ca,
  empty: zh,
  flush: G,
  get_spread_object: qh,
  get_spread_update: Eh,
  group_outros: Dh,
  init: Ah,
  insert: _a,
  mount_component: Lt,
  safe_not_equal: Mh,
  space: jh,
  transition_in: Qe,
  transition_out: xe
} = window.__gradio__svelte__internal;
function Lh(n) {
  let e, t;
  return e = new iu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Nh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(l, i) {
      Lt(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[1] & /*$$scope*/
      256 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (Qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      xe(e.$$.fragment, l), t = !1;
    },
    d(l) {
      jt(e, l);
    }
  };
}
function Bh(n) {
  let e, t;
  return e = new yo({
    props: {
      i18n: (
        /*gradio*/
        n[26].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(l, i) {
      Lt(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*gradio*/
      67108864 && (s.i18n = /*gradio*/
      l[26].i18n), e.$set(s);
    },
    i(l) {
      t || (Qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      xe(e.$$.fragment, l), t = !1;
    },
    d(l) {
      jt(e, l);
    }
  };
}
function Th(n) {
  let e, t;
  return e = new yo({
    props: {
      i18n: (
        /*gradio*/
        n[26].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(l, i) {
      Lt(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*gradio*/
      67108864 && (s.i18n = /*gradio*/
      l[26].i18n), e.$set(s);
    },
    i(l) {
      t || (Qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      xe(e.$$.fragment, l), t = !1;
    },
    d(l) {
      jt(e, l);
    }
  };
}
function Nh(n) {
  let e, t;
  return e = new go({}), {
    c() {
      Mt(e.$$.fragment);
    },
    m(l, i) {
      Lt(e, l, i), t = !0;
    },
    i(l) {
      t || (Qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      xe(e.$$.fragment, l), t = !1;
    },
    d(l) {
      jt(e, l);
    }
  };
}
function Oh(n) {
  let e, t, l, i;
  const s = [Th, Bh, Lh], o = [];
  function r(a, u) {
    return (
      /*active_source*/
      a[28] === "upload" ? 0 : (
        /*active_source*/
        a[28] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = s[e](n), {
    c() {
      t.c(), l = zh();
    },
    m(a, u) {
      o[e].m(a, u), _a(a, l, u), i = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (Dh(), xe(o[f], 1, 1, () => {
        o[f] = null;
      }), Ch(), t = o[e], t ? t.p(a, u) : (t = o[e] = s[e](a), t.c()), Qe(t, 1), t.m(l.parentNode, l));
    },
    i(a) {
      i || (Qe(t), i = !0);
    },
    o(a) {
      xe(t), i = !1;
    },
    d(a) {
      a && ca(l), o[e].d(a);
    }
  };
}
function Uh(n) {
  let e, t, l, i, s, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        n[26].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      n[26].i18n
    ) },
    /*loading_status*/
    n[1]
  ];
  let a = {};
  for (let d = 0; d < r.length; d += 1)
    a = Sh(a, r[d]);
  e = new Hc({ props: a });
  function u(d) {
    n[29](d);
  }
  function f(d) {
    n[30](d);
  }
  let _ = {
    selectable: (
      /*_selectable*/
      n[10]
    ),
    root: (
      /*root*/
      n[7]
    ),
    sources: (
      /*sources*/
      n[14]
    ),
    interactive: (
      /*interactive*/
      n[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      n[15]
    ),
    showShareButton: (
      /*show_share_button*/
      n[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      n[17]
    ),
    i18n: (
      /*gradio*/
      n[26].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      n[19]
    ),
    labelList: (
      /*label_list*/
      n[20]
    ),
    labelColors: (
      /*label_colors*/
      n[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      n[22]
    ),
    handleSize: (
      /*handle_size*/
      n[23]
    ),
    boxThickness: (
      /*box_thickness*/
      n[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      n[25]
    ),
    label: (
      /*label*/
      n[5]
    ),
    show_label: (
      /*show_label*/
      n[6]
    ),
    $$slots: { default: [Oh] },
    $$scope: { ctx: n }
  };
  return (
    /*active_source*/
    n[28] !== void 0 && (_.active_source = /*active_source*/
    n[28]), /*value*/
    n[0] !== void 0 && (_.value = /*value*/
    n[0]), l = new ah({ props: _ }), ro.push(() => ao(l, "active_source", u)), ro.push(() => ao(l, "value", f)), l.$on(
      "change",
      /*change_handler*/
      n[31]
    ), l.$on(
      "edit",
      /*edit_handler*/
      n[32]
    ), l.$on(
      "clear",
      /*clear_handler*/
      n[33]
    ), l.$on(
      "drag",
      /*drag_handler*/
      n[34]
    ), l.$on(
      "upload",
      /*upload_handler*/
      n[35]
    ), l.$on(
      "select",
      /*select_handler*/
      n[36]
    ), l.$on(
      "share",
      /*share_handler*/
      n[37]
    ), l.$on(
      "error",
      /*error_handler*/
      n[38]
    ), {
      c() {
        Mt(e.$$.fragment), t = jh(), Mt(l.$$.fragment);
      },
      m(d, c) {
        Lt(e, d, c), _a(d, t, c), Lt(l, d, c), o = !0;
      },
      p(d, c) {
        const h = c[0] & /*gradio, loading_status*/
        67108866 ? Eh(r, [
          c[0] & /*gradio*/
          67108864 && {
            autoscroll: (
              /*gradio*/
              d[26].autoscroll
            )
          },
          c[0] & /*gradio*/
          67108864 && { i18n: (
            /*gradio*/
            d[26].i18n
          ) },
          c[0] & /*loading_status*/
          2 && qh(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(h);
        const b = {};
        c[0] & /*_selectable*/
        1024 && (b.selectable = /*_selectable*/
        d[10]), c[0] & /*root*/
        128 && (b.root = /*root*/
        d[7]), c[0] & /*sources*/
        16384 && (b.sources = /*sources*/
        d[14]), c[0] & /*interactive*/
        262144 && (b.interactive = /*interactive*/
        d[18]), c[0] & /*show_download_button*/
        32768 && (b.showDownloadButton = /*show_download_button*/
        d[15]), c[0] & /*show_share_button*/
        65536 && (b.showShareButton = /*show_share_button*/
        d[16]), c[0] & /*show_clear_button*/
        131072 && (b.showClearButton = /*show_clear_button*/
        d[17]), c[0] & /*gradio*/
        67108864 && (b.i18n = /*gradio*/
        d[26].i18n), c[0] & /*boxes_alpha*/
        524288 && (b.boxesAlpha = /*boxes_alpha*/
        d[19]), c[0] & /*label_list*/
        1048576 && (b.labelList = /*label_list*/
        d[20]), c[0] & /*label_colors*/
        2097152 && (b.labelColors = /*label_colors*/
        d[21]), c[0] & /*box_min_size*/
        4194304 && (b.boxMinSize = /*box_min_size*/
        d[22]), c[0] & /*handle_size*/
        8388608 && (b.handleSize = /*handle_size*/
        d[23]), c[0] & /*box_thickness*/
        16777216 && (b.boxThickness = /*box_thickness*/
        d[24]), c[0] & /*box_selected_thickness*/
        33554432 && (b.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), c[0] & /*label*/
        32 && (b.label = /*label*/
        d[5]), c[0] & /*show_label*/
        64 && (b.show_label = /*show_label*/
        d[6]), c[0] & /*gradio, active_source*/
        335544320 | c[1] & /*$$scope*/
        256 && (b.$$scope = { dirty: c, ctx: d }), !i && c[0] & /*active_source*/
        268435456 && (i = !0, b.active_source = /*active_source*/
        d[28], oo(() => i = !1)), !s && c[0] & /*value*/
        1 && (s = !0, b.value = /*value*/
        d[0], oo(() => s = !1)), l.$set(b);
      },
      i(d) {
        o || (Qe(e.$$.fragment, d), Qe(l.$$.fragment, d), o = !0);
      },
      o(d) {
        xe(e.$$.fragment, d), xe(l.$$.fragment, d), o = !1;
      },
      d(d) {
        d && ca(t), jt(e, d), jt(l, d);
      }
    }
  );
}
function Ih(n) {
  let e, t;
  return e = new Aa({
    props: {
      visible: (
        /*visible*/
        n[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        n[27] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        n[2]
      ),
      elem_classes: (
        /*elem_classes*/
        n[3]
      ),
      height: (
        /*height*/
        n[8] || void 0
      ),
      width: (
        /*width*/
        n[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        n[11]
      ),
      scale: (
        /*scale*/
        n[12]
      ),
      min_width: (
        /*min_width*/
        n[13]
      ),
      $$slots: { default: [Uh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(l, i) {
      Lt(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*visible*/
      16 && (s.visible = /*visible*/
      l[4]), i[0] & /*dragging*/
      134217728 && (s.border_mode = /*dragging*/
      l[27] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      l[2]), i[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      l[3]), i[0] & /*height*/
      256 && (s.height = /*height*/
      l[8] || void 0), i[0] & /*width*/
      512 && (s.width = /*width*/
      l[9]), i[0] & /*container*/
      2048 && (s.container = /*container*/
      l[11]), i[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      l[12]), i[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      l[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, handle_size, box_thickness, box_selected_thickness, label, show_label, active_source, value, dragging, loading_status*/
      536855779 | i[1] & /*$$scope*/
      256 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (Qe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      xe(e.$$.fragment, l), t = !1;
    },
    d(l) {
      jt(e, l);
    }
  };
}
function Rh(n, e, t) {
  let { elem_id: l = "" } = e, { elem_classes: i = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: u } = e, { height: f } = e, { width: _ } = e, { _selectable: d = !1 } = e, { container: c = !0 } = e, { scale: h = null } = e, { min_width: b = void 0 } = e, { loading_status: g } = e, { sources: m = ["upload", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: C } = e, { interactive: M } = e, { boxes_alpha: k } = e, { label_list: D } = e, { label_colors: w } = e, { box_min_size: A } = e, { handle_size: O } = e, { box_thickness: U } = e, { box_selected_thickness: B } = e, { gradio: H } = e, ne, $ = null;
  function he(y) {
    $ = y, t(28, $);
  }
  function ke(y) {
    o = y, t(0, o);
  }
  const ge = () => H.dispatch("change"), ye = () => H.dispatch("edit"), E = () => {
    H.dispatch("clear");
  }, Y = ({ detail: y }) => t(27, ne = y), q = () => H.dispatch("upload"), S = ({ detail: y }) => H.dispatch("select", y), j = ({ detail: y }) => H.dispatch("share", y), F = ({ detail: y }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), H.dispatch("error", y);
  };
  return n.$$set = (y) => {
    "elem_id" in y && t(2, l = y.elem_id), "elem_classes" in y && t(3, i = y.elem_classes), "visible" in y && t(4, s = y.visible), "value" in y && t(0, o = y.value), "label" in y && t(5, r = y.label), "show_label" in y && t(6, a = y.show_label), "root" in y && t(7, u = y.root), "height" in y && t(8, f = y.height), "width" in y && t(9, _ = y.width), "_selectable" in y && t(10, d = y._selectable), "container" in y && t(11, c = y.container), "scale" in y && t(12, h = y.scale), "min_width" in y && t(13, b = y.min_width), "loading_status" in y && t(1, g = y.loading_status), "sources" in y && t(14, m = y.sources), "show_download_button" in y && t(15, v = y.show_download_button), "show_share_button" in y && t(16, p = y.show_share_button), "show_clear_button" in y && t(17, C = y.show_clear_button), "interactive" in y && t(18, M = y.interactive), "boxes_alpha" in y && t(19, k = y.boxes_alpha), "label_list" in y && t(20, D = y.label_list), "label_colors" in y && t(21, w = y.label_colors), "box_min_size" in y && t(22, A = y.box_min_size), "handle_size" in y && t(23, O = y.handle_size), "box_thickness" in y && t(24, U = y.box_thickness), "box_selected_thickness" in y && t(25, B = y.box_selected_thickness), "gradio" in y && t(26, H = y.gradio);
  }, [
    o,
    g,
    l,
    i,
    s,
    r,
    a,
    u,
    f,
    _,
    d,
    c,
    h,
    b,
    m,
    v,
    p,
    C,
    M,
    k,
    D,
    w,
    A,
    O,
    U,
    B,
    H,
    ne,
    $,
    he,
    ke,
    ge,
    ye,
    E,
    Y,
    q,
    S,
    j,
    F
  ];
}
class Zh extends yh {
  constructor(e) {
    super(), Ah(
      this,
      e,
      Rh,
      Ih,
      Mh,
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
    this.$$set({ elem_id: e }), G();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), G();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), G();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), G();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), G();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), G();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), G();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), G();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), G();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), G();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), G();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), G();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), G();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), G();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), G();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), G();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), G();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), G();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), G();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), G();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), G();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), G();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), G();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), G();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), G();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), G();
  }
  get gradio() {
    return this.$$.ctx[26];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), G();
  }
}
export {
  Vh as BaseExample,
  Zh as default
};
