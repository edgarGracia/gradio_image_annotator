const {
  SvelteComponent: Va,
  assign: Xa,
  create_slot: Wa,
  detach: Za,
  element: Ya,
  get_all_dirty_from_scope: Ja,
  get_slot_changes: Qa,
  get_spread_update: Ka,
  init: $a,
  insert: eu,
  safe_not_equal: tu,
  set_dynamic_element_data: Es,
  set_style: Pe,
  toggle_class: tt,
  transition_in: pr,
  transition_out: wr,
  update_slot_base: nu
} = window.__gradio__svelte__internal;
function iu(t) {
  let e, n, i;
  const l = (
    /*#slots*/
    t[18].default
  ), s = Wa(
    l,
    t,
    /*$$scope*/
    t[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      t[7]
    ) },
    { id: (
      /*elem_id*/
      t[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      t[3].join(" ") + " svelte-1t38q2d"
    }
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = Xa(r, o[a]);
  return {
    c() {
      e = Ya(
        /*tag*/
        t[14]
      ), s && s.c(), Es(
        /*tag*/
        t[14]
      )(e, r), tt(
        e,
        "hidden",
        /*visible*/
        t[10] === !1
      ), tt(
        e,
        "padded",
        /*padding*/
        t[6]
      ), tt(
        e,
        "border_focus",
        /*border_mode*/
        t[5] === "focus"
      ), tt(e, "hide-container", !/*explicit_call*/
      t[8] && !/*container*/
      t[9]), Pe(
        e,
        "height",
        /*get_dimension*/
        t[15](
          /*height*/
          t[0]
        )
      ), Pe(e, "width", typeof /*width*/
      t[1] == "number" ? `calc(min(${/*width*/
      t[1]}px, 100%))` : (
        /*get_dimension*/
        t[15](
          /*width*/
          t[1]
        )
      )), Pe(
        e,
        "border-style",
        /*variant*/
        t[4]
      ), Pe(
        e,
        "overflow",
        /*allow_overflow*/
        t[11] ? "visible" : "hidden"
      ), Pe(
        e,
        "flex-grow",
        /*scale*/
        t[12]
      ), Pe(e, "min-width", `calc(min(${/*min_width*/
      t[13]}px, 100%))`), Pe(e, "border-width", "var(--block-border-width)");
    },
    m(a, u) {
      eu(a, e, u), s && s.m(e, null), i = !0;
    },
    p(a, u) {
      s && s.p && (!i || u & /*$$scope*/
      131072) && nu(
        s,
        l,
        a,
        /*$$scope*/
        a[17],
        i ? Qa(
          l,
          /*$$scope*/
          a[17],
          u,
          null
        ) : Ja(
          /*$$scope*/
          a[17]
        ),
        null
      ), Es(
        /*tag*/
        a[14]
      )(e, r = Ka(o, [
        (!i || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!i || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!i || u & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), tt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), tt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), tt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), tt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), u & /*height*/
      1 && Pe(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), u & /*width*/
      2 && Pe(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), u & /*variant*/
      16 && Pe(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), u & /*allow_overflow*/
      2048 && Pe(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && Pe(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), u & /*min_width*/
      8192 && Pe(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      i || (pr(s, a), i = !0);
    },
    o(a) {
      wr(s, a), i = !1;
    },
    d(a) {
      a && Za(e), s && s.d(a);
    }
  };
}
function lu(t) {
  let e, n = (
    /*tag*/
    t[14] && iu(t)
  );
  return {
    c() {
      n && n.c();
    },
    m(i, l) {
      n && n.m(i, l), e = !0;
    },
    p(i, [l]) {
      /*tag*/
      i[14] && n.p(i, l);
    },
    i(i) {
      e || (pr(n, i), e = !0);
    },
    o(i) {
      wr(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function su(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: u = "solid" } = e, { border_mode: f = "base" } = e, { padding: _ = !0 } = e, { type: h = "normal" } = e, { test_id: c = void 0 } = e, { explicit_call: d = !1 } = e, { container: m = !0 } = e, { visible: b = !0 } = e, { allow_overflow: p = !0 } = e, { scale: y = null } = e, { min_width: w = 0 } = e, C = h === "fieldset" ? "fieldset" : "div";
  const P = (E) => {
    if (E !== void 0) {
      if (typeof E == "number")
        return E + "px";
      if (typeof E == "string")
        return E;
    }
  };
  return t.$$set = (E) => {
    "height" in E && n(0, s = E.height), "width" in E && n(1, o = E.width), "elem_id" in E && n(2, r = E.elem_id), "elem_classes" in E && n(3, a = E.elem_classes), "variant" in E && n(4, u = E.variant), "border_mode" in E && n(5, f = E.border_mode), "padding" in E && n(6, _ = E.padding), "type" in E && n(16, h = E.type), "test_id" in E && n(7, c = E.test_id), "explicit_call" in E && n(8, d = E.explicit_call), "container" in E && n(9, m = E.container), "visible" in E && n(10, b = E.visible), "allow_overflow" in E && n(11, p = E.allow_overflow), "scale" in E && n(12, y = E.scale), "min_width" in E && n(13, w = E.min_width), "$$scope" in E && n(17, l = E.$$scope);
  }, [
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    c,
    d,
    m,
    b,
    p,
    y,
    w,
    C,
    P,
    h,
    l,
    i
  ];
}
class ou extends Va {
  constructor(e) {
    super(), $a(this, e, su, lu, tu, {
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
  SvelteComponent: ru,
  attr: au,
  create_slot: uu,
  detach: fu,
  element: cu,
  get_all_dirty_from_scope: _u,
  get_slot_changes: hu,
  init: du,
  insert: mu,
  safe_not_equal: gu,
  transition_in: bu,
  transition_out: pu,
  update_slot_base: wu
} = window.__gradio__svelte__internal;
function vu(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), l = uu(
    i,
    t,
    /*$$scope*/
    t[0],
    null
  );
  return {
    c() {
      e = cu("div"), l && l.c(), au(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      mu(s, e, o), l && l.m(e, null), n = !0;
    },
    p(s, [o]) {
      l && l.p && (!n || o & /*$$scope*/
      1) && wu(
        l,
        i,
        s,
        /*$$scope*/
        s[0],
        n ? hu(
          i,
          /*$$scope*/
          s[0],
          o,
          null
        ) : _u(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (bu(l, s), n = !0);
    },
    o(s) {
      pu(l, s), n = !1;
    },
    d(s) {
      s && fu(e), l && l.d(s);
    }
  };
}
function yu(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e;
  return t.$$set = (s) => {
    "$$scope" in s && n(0, l = s.$$scope);
  }, [l, i];
}
class Eu extends ru {
  constructor(e) {
    super(), du(this, e, yu, vu, gu, {});
  }
}
const {
  SvelteComponent: ku,
  attr: ks,
  check_outros: Su,
  create_component: Cu,
  create_slot: Au,
  destroy_component: Bu,
  detach: ui,
  element: Tu,
  empty: Hu,
  get_all_dirty_from_scope: Pu,
  get_slot_changes: Nu,
  group_outros: Lu,
  init: Iu,
  insert: fi,
  mount_component: Mu,
  safe_not_equal: Ou,
  set_data: Du,
  space: Ru,
  text: Uu,
  toggle_class: Rt,
  transition_in: vn,
  transition_out: ci,
  update_slot_base: Fu
} = window.__gradio__svelte__internal;
function Ss(t) {
  let e, n;
  return e = new Eu({
    props: {
      $$slots: { default: [qu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Cu(e.$$.fragment);
    },
    m(i, l) {
      Mu(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope, info*/
      10 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (vn(e.$$.fragment, i), n = !0);
    },
    o(i) {
      ci(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Bu(e, i);
    }
  };
}
function qu(t) {
  let e;
  return {
    c() {
      e = Uu(
        /*info*/
        t[1]
      );
    },
    m(n, i) {
      fi(n, e, i);
    },
    p(n, i) {
      i & /*info*/
      2 && Du(
        e,
        /*info*/
        n[1]
      );
    },
    d(n) {
      n && ui(e);
    }
  };
}
function zu(t) {
  let e, n, i, l;
  const s = (
    /*#slots*/
    t[2].default
  ), o = Au(
    s,
    t,
    /*$$scope*/
    t[3],
    null
  );
  let r = (
    /*info*/
    t[1] && Ss(t)
  );
  return {
    c() {
      e = Tu("span"), o && o.c(), n = Ru(), r && r.c(), i = Hu(), ks(e, "data-testid", "block-info"), ks(e, "class", "svelte-22c38v"), Rt(e, "sr-only", !/*show_label*/
      t[0]), Rt(e, "hide", !/*show_label*/
      t[0]), Rt(
        e,
        "has-info",
        /*info*/
        t[1] != null
      );
    },
    m(a, u) {
      fi(a, e, u), o && o.m(e, null), fi(a, n, u), r && r.m(a, u), fi(a, i, u), l = !0;
    },
    p(a, [u]) {
      o && o.p && (!l || u & /*$$scope*/
      8) && Fu(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        l ? Nu(
          s,
          /*$$scope*/
          a[3],
          u,
          null
        ) : Pu(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || u & /*show_label*/
      1) && Rt(e, "sr-only", !/*show_label*/
      a[0]), (!l || u & /*show_label*/
      1) && Rt(e, "hide", !/*show_label*/
      a[0]), (!l || u & /*info*/
      2) && Rt(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, u), u & /*info*/
      2 && vn(r, 1)) : (r = Ss(a), r.c(), vn(r, 1), r.m(i.parentNode, i)) : r && (Lu(), ci(r, 1, 1, () => {
        r = null;
      }), Su());
    },
    i(a) {
      l || (vn(o, a), vn(r), l = !0);
    },
    o(a) {
      ci(o, a), ci(r), l = !1;
    },
    d(a) {
      a && (ui(e), ui(n), ui(i)), o && o.d(a), r && r.d(a);
    }
  };
}
function ju(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return t.$$set = (r) => {
    "show_label" in r && n(0, s = r.show_label), "info" in r && n(1, o = r.info), "$$scope" in r && n(3, l = r.$$scope);
  }, [s, o, i, l];
}
class vr extends ku {
  constructor(e) {
    super(), Iu(this, e, ju, zu, Ou, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Gu,
  append: Zi,
  attr: Vn,
  create_component: xu,
  destroy_component: Vu,
  detach: Xu,
  element: Cs,
  init: Wu,
  insert: Zu,
  mount_component: Yu,
  safe_not_equal: Ju,
  set_data: Qu,
  space: Ku,
  text: $u,
  toggle_class: nt,
  transition_in: ef,
  transition_out: tf
} = window.__gradio__svelte__internal;
function nf(t) {
  let e, n, i, l, s, o;
  return i = new /*Icon*/
  t[1]({}), {
    c() {
      e = Cs("label"), n = Cs("span"), xu(i.$$.fragment), l = Ku(), s = $u(
        /*label*/
        t[0]
      ), Vn(n, "class", "svelte-9gxdi0"), Vn(e, "for", ""), Vn(e, "data-testid", "block-label"), Vn(e, "class", "svelte-9gxdi0"), nt(e, "hide", !/*show_label*/
      t[2]), nt(e, "sr-only", !/*show_label*/
      t[2]), nt(
        e,
        "float",
        /*float*/
        t[4]
      ), nt(
        e,
        "hide-label",
        /*disable*/
        t[3]
      );
    },
    m(r, a) {
      Zu(r, e, a), Zi(e, n), Yu(i, n, null), Zi(e, l), Zi(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Qu(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && nt(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && nt(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && nt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && nt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (ef(i.$$.fragment, r), o = !0);
    },
    o(r) {
      tf(i.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Xu(e), Vu(i);
    }
  };
}
function lf(t, e, n) {
  let { label: i = null } = e, { Icon: l } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return t.$$set = (a) => {
    "label" in a && n(0, i = a.label), "Icon" in a && n(1, l = a.Icon), "show_label" in a && n(2, s = a.show_label), "disable" in a && n(3, o = a.disable), "float" in a && n(4, r = a.float);
  }, [i, l, s, o, r];
}
class sf extends Gu {
  constructor(e) {
    super(), Wu(this, e, lf, nf, Ju, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: of,
  append: Ol,
  attr: Qe,
  bubble: rf,
  create_component: af,
  destroy_component: uf,
  detach: yr,
  element: Dl,
  init: ff,
  insert: Er,
  listen: cf,
  mount_component: _f,
  safe_not_equal: hf,
  set_data: df,
  set_style: Xn,
  space: mf,
  text: gf,
  toggle_class: Oe,
  transition_in: bf,
  transition_out: pf
} = window.__gradio__svelte__internal;
function As(t) {
  let e, n;
  return {
    c() {
      e = Dl("span"), n = gf(
        /*label*/
        t[1]
      ), Qe(e, "class", "svelte-lpi64a");
    },
    m(i, l) {
      Er(i, e, l), Ol(e, n);
    },
    p(i, l) {
      l & /*label*/
      2 && df(
        n,
        /*label*/
        i[1]
      );
    },
    d(i) {
      i && yr(e);
    }
  };
}
function wf(t) {
  let e, n, i, l, s, o, r, a = (
    /*show_label*/
    t[2] && As(t)
  );
  return l = new /*Icon*/
  t[0]({}), {
    c() {
      e = Dl("button"), a && a.c(), n = mf(), i = Dl("div"), af(l.$$.fragment), Qe(i, "class", "svelte-lpi64a"), Oe(
        i,
        "small",
        /*size*/
        t[4] === "small"
      ), Oe(
        i,
        "large",
        /*size*/
        t[4] === "large"
      ), e.disabled = /*disabled*/
      t[7], Qe(
        e,
        "aria-label",
        /*label*/
        t[1]
      ), Qe(
        e,
        "aria-haspopup",
        /*hasPopup*/
        t[8]
      ), Qe(
        e,
        "title",
        /*label*/
        t[1]
      ), Qe(e, "class", "svelte-lpi64a"), Oe(
        e,
        "pending",
        /*pending*/
        t[3]
      ), Oe(
        e,
        "padded",
        /*padded*/
        t[5]
      ), Oe(
        e,
        "highlight",
        /*highlight*/
        t[6]
      ), Oe(
        e,
        "transparent",
        /*transparent*/
        t[9]
      ), Xn(e, "color", !/*disabled*/
      t[7] && /*_color*/
      t[11] ? (
        /*_color*/
        t[11]
      ) : "var(--block-label-text-color)"), Xn(e, "--bg-color", /*disabled*/
      t[7] ? "auto" : (
        /*background*/
        t[10]
      ));
    },
    m(u, f) {
      Er(u, e, f), a && a.m(e, null), Ol(e, n), Ol(e, i), _f(l, i, null), s = !0, o || (r = cf(
        e,
        "click",
        /*click_handler*/
        t[13]
      ), o = !0);
    },
    p(u, [f]) {
      /*show_label*/
      u[2] ? a ? a.p(u, f) : (a = As(u), a.c(), a.m(e, n)) : a && (a.d(1), a = null), (!s || f & /*size*/
      16) && Oe(
        i,
        "small",
        /*size*/
        u[4] === "small"
      ), (!s || f & /*size*/
      16) && Oe(
        i,
        "large",
        /*size*/
        u[4] === "large"
      ), (!s || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      u[7]), (!s || f & /*label*/
      2) && Qe(
        e,
        "aria-label",
        /*label*/
        u[1]
      ), (!s || f & /*hasPopup*/
      256) && Qe(
        e,
        "aria-haspopup",
        /*hasPopup*/
        u[8]
      ), (!s || f & /*label*/
      2) && Qe(
        e,
        "title",
        /*label*/
        u[1]
      ), (!s || f & /*pending*/
      8) && Oe(
        e,
        "pending",
        /*pending*/
        u[3]
      ), (!s || f & /*padded*/
      32) && Oe(
        e,
        "padded",
        /*padded*/
        u[5]
      ), (!s || f & /*highlight*/
      64) && Oe(
        e,
        "highlight",
        /*highlight*/
        u[6]
      ), (!s || f & /*transparent*/
      512) && Oe(
        e,
        "transparent",
        /*transparent*/
        u[9]
      ), f & /*disabled, _color*/
      2176 && Xn(e, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && Xn(e, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      s || (bf(l.$$.fragment, u), s = !0);
    },
    o(u) {
      pf(l.$$.fragment, u), s = !1;
    },
    d(u) {
      u && yr(e), a && a.d(), uf(l), o = !1, r();
    }
  };
}
function vf(t, e, n) {
  let i, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: u = !0 } = e, { highlight: f = !1 } = e, { disabled: _ = !1 } = e, { hasPopup: h = !1 } = e, { color: c = "var(--block-label-text-color)" } = e, { transparent: d = !1 } = e, { background: m = "var(--background-fill-primary)" } = e;
  function b(p) {
    rf.call(this, t, p);
  }
  return t.$$set = (p) => {
    "Icon" in p && n(0, l = p.Icon), "label" in p && n(1, s = p.label), "show_label" in p && n(2, o = p.show_label), "pending" in p && n(3, r = p.pending), "size" in p && n(4, a = p.size), "padded" in p && n(5, u = p.padded), "highlight" in p && n(6, f = p.highlight), "disabled" in p && n(7, _ = p.disabled), "hasPopup" in p && n(8, h = p.hasPopup), "color" in p && n(12, c = p.color), "transparent" in p && n(9, d = p.transparent), "background" in p && n(10, m = p.background);
  }, t.$$.update = () => {
    t.$$.dirty & /*highlight, color*/
    4160 && n(11, i = f ? "var(--color-accent)" : c);
  }, [
    l,
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    h,
    d,
    m,
    i,
    c,
    b
  ];
}
class as extends of {
  constructor(e) {
    super(), ff(this, e, vf, wf, hf, {
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
  SvelteComponent: yf,
  append: Ef,
  attr: Yi,
  binding_callbacks: kf,
  create_slot: Sf,
  detach: Cf,
  element: Bs,
  get_all_dirty_from_scope: Af,
  get_slot_changes: Bf,
  init: Tf,
  insert: Hf,
  safe_not_equal: Pf,
  toggle_class: it,
  transition_in: Nf,
  transition_out: Lf,
  update_slot_base: If
} = window.__gradio__svelte__internal;
function Mf(t) {
  let e, n, i;
  const l = (
    /*#slots*/
    t[5].default
  ), s = Sf(
    l,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      e = Bs("div"), n = Bs("div"), s && s.c(), Yi(n, "class", "icon svelte-3w3rth"), Yi(e, "class", "empty svelte-3w3rth"), Yi(e, "aria-label", "Empty value"), it(
        e,
        "small",
        /*size*/
        t[0] === "small"
      ), it(
        e,
        "large",
        /*size*/
        t[0] === "large"
      ), it(
        e,
        "unpadded_box",
        /*unpadded_box*/
        t[1]
      ), it(
        e,
        "small_parent",
        /*parent_height*/
        t[3]
      );
    },
    m(o, r) {
      Hf(o, e, r), Ef(e, n), s && s.m(n, null), t[6](e), i = !0;
    },
    p(o, [r]) {
      s && s.p && (!i || r & /*$$scope*/
      16) && If(
        s,
        l,
        o,
        /*$$scope*/
        o[4],
        i ? Bf(
          l,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Af(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!i || r & /*size*/
      1) && it(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!i || r & /*size*/
      1) && it(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!i || r & /*unpadded_box*/
      2) && it(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!i || r & /*parent_height*/
      8) && it(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      i || (Nf(s, o), i = !0);
    },
    o(o) {
      Lf(s, o), i = !1;
    },
    d(o) {
      o && Cf(e), s && s.d(o), t[6](null);
    }
  };
}
function Of(t) {
  let e, n = t[0], i = 1;
  for (; i < t.length; ) {
    const l = t[i], s = t[i + 1];
    if (i += 2, (l === "optionalAccess" || l === "optionalCall") && n == null)
      return;
    l === "access" || l === "optionalAccess" ? (e = n, n = s(n)) : (l === "call" || l === "optionalCall") && (n = s((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function Df(t, e, n) {
  let i, { $$slots: l = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function u(_) {
    if (!_)
      return !1;
    const { height: h } = _.getBoundingClientRect(), { height: c } = Of([
      _,
      "access",
      (d) => d.parentElement,
      "optionalAccess",
      (d) => d.getBoundingClientRect,
      "call",
      (d) => d()
    ]) || { height: h };
    return h > c + 2;
  }
  function f(_) {
    kf[_ ? "unshift" : "push"](() => {
      a = _, n(2, a);
    });
  }
  return t.$$set = (_) => {
    "size" in _ && n(0, o = _.size), "unpadded_box" in _ && n(1, r = _.unpadded_box), "$$scope" in _ && n(4, s = _.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*el*/
    4 && n(3, i = u(a));
  }, [o, r, a, i, s, l, f];
}
class Rf extends yf {
  constructor(e) {
    super(), Tf(this, e, Df, Mf, Pf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Uf,
  append: Ji,
  attr: Ue,
  detach: Ff,
  init: qf,
  insert: zf,
  noop: Qi,
  safe_not_equal: jf,
  set_style: Ge,
  svg_element: Wn
} = window.__gradio__svelte__internal;
function Gf(t) {
  let e, n, i, l;
  return {
    c() {
      e = Wn("svg"), n = Wn("g"), i = Wn("path"), l = Wn("path"), Ue(i, "d", "M18,6L6.087,17.913"), Ge(i, "fill", "none"), Ge(i, "fill-rule", "nonzero"), Ge(i, "stroke-width", "2px"), Ue(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ue(l, "d", "M4.364,4.364L19.636,19.636"), Ge(l, "fill", "none"), Ge(l, "fill-rule", "nonzero"), Ge(l, "stroke-width", "2px"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "version", "1.1"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ue(e, "xml:space", "preserve"), Ue(e, "stroke", "currentColor"), Ge(e, "fill-rule", "evenodd"), Ge(e, "clip-rule", "evenodd"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      zf(s, e, o), Ji(e, n), Ji(n, i), Ji(e, l);
    },
    p: Qi,
    i: Qi,
    o: Qi,
    d(s) {
      s && Ff(e);
    }
  };
}
class kr extends Uf {
  constructor(e) {
    super(), qf(this, e, null, Gf, jf, {});
  }
}
const {
  SvelteComponent: xf,
  append: Vf,
  attr: mn,
  detach: Xf,
  init: Wf,
  insert: Zf,
  noop: Ki,
  safe_not_equal: Yf,
  svg_element: Ts
} = window.__gradio__svelte__internal;
function Jf(t) {
  let e, n;
  return {
    c() {
      e = Ts("svg"), n = Ts("path"), mn(n, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), mn(n, "fill", "currentColor"), mn(e, "id", "icon"), mn(e, "xmlns", "http://www.w3.org/2000/svg"), mn(e, "viewBox", "0 0 32 32");
    },
    m(i, l) {
      Zf(i, e, l), Vf(e, n);
    },
    p: Ki,
    i: Ki,
    o: Ki,
    d(i) {
      i && Xf(e);
    }
  };
}
class Qf extends xf {
  constructor(e) {
    super(), Wf(this, e, null, Jf, Yf, {});
  }
}
const {
  SvelteComponent: Kf,
  append: $f,
  attr: Ut,
  detach: ec,
  init: tc,
  insert: nc,
  noop: $i,
  safe_not_equal: ic,
  svg_element: Hs
} = window.__gradio__svelte__internal;
function lc(t) {
  let e, n;
  return {
    c() {
      e = Hs("svg"), n = Hs("path"), Ut(n, "fill", "currentColor"), Ut(n, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Ut(e, "xmlns", "http://www.w3.org/2000/svg"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 32 32");
    },
    m(i, l) {
      nc(i, e, l), $f(e, n);
    },
    p: $i,
    i: $i,
    o: $i,
    d(i) {
      i && ec(e);
    }
  };
}
class sc extends Kf {
  constructor(e) {
    super(), tc(this, e, null, lc, ic, {});
  }
}
const {
  SvelteComponent: oc,
  append: rc,
  attr: Ft,
  detach: ac,
  init: uc,
  insert: fc,
  noop: el,
  safe_not_equal: cc,
  svg_element: Ps
} = window.__gradio__svelte__internal;
function _c(t) {
  let e, n;
  return {
    c() {
      e = Ps("svg"), n = Ps("path"), Ft(n, "d", "M5 8l4 4 4-4z"), Ft(e, "class", "dropdown-arrow svelte-145leq6"), Ft(e, "xmlns", "http://www.w3.org/2000/svg"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 18 18");
    },
    m(i, l) {
      fc(i, e, l), rc(e, n);
    },
    p: el,
    i: el,
    o: el,
    d(i) {
      i && ac(e);
    }
  };
}
class hc extends oc {
  constructor(e) {
    super(), uc(this, e, null, _c, cc, {});
  }
}
const {
  SvelteComponent: dc,
  append: mc,
  attr: Fe,
  detach: gc,
  init: bc,
  insert: pc,
  noop: tl,
  safe_not_equal: wc,
  svg_element: Ns
} = window.__gradio__svelte__internal;
function vc(t) {
  let e, n;
  return {
    c() {
      e = Ns("svg"), n = Ns("path"), Fe(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Fe(e, "xmlns", "http://www.w3.org/2000/svg"), Fe(e, "width", "100%"), Fe(e, "height", "100%"), Fe(e, "viewBox", "0 0 24 24"), Fe(e, "fill", "none"), Fe(e, "stroke", "currentColor"), Fe(e, "stroke-width", "1.5"), Fe(e, "stroke-linecap", "round"), Fe(e, "stroke-linejoin", "round"), Fe(e, "class", "feather feather-edit-2");
    },
    m(i, l) {
      pc(i, e, l), mc(e, n);
    },
    p: tl,
    i: tl,
    o: tl,
    d(i) {
      i && gc(e);
    }
  };
}
class yc extends dc {
  constructor(e) {
    super(), bc(this, e, null, vc, wc, {});
  }
}
const {
  SvelteComponent: Ec,
  append: nl,
  attr: oe,
  detach: kc,
  init: Sc,
  insert: Cc,
  noop: il,
  safe_not_equal: Ac,
  svg_element: Zn
} = window.__gradio__svelte__internal;
function Bc(t) {
  let e, n, i, l;
  return {
    c() {
      e = Zn("svg"), n = Zn("rect"), i = Zn("circle"), l = Zn("polyline"), oe(n, "x", "3"), oe(n, "y", "3"), oe(n, "width", "18"), oe(n, "height", "18"), oe(n, "rx", "2"), oe(n, "ry", "2"), oe(i, "cx", "8.5"), oe(i, "cy", "8.5"), oe(i, "r", "1.5"), oe(l, "points", "21 15 16 10 5 21"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "viewBox", "0 0 24 24"), oe(e, "fill", "none"), oe(e, "stroke", "currentColor"), oe(e, "stroke-width", "1.5"), oe(e, "stroke-linecap", "round"), oe(e, "stroke-linejoin", "round"), oe(e, "class", "feather feather-image");
    },
    m(s, o) {
      Cc(s, e, o), nl(e, n), nl(e, i), nl(e, l);
    },
    p: il,
    i: il,
    o: il,
    d(s) {
      s && kc(e);
    }
  };
}
let Sr = class extends Ec {
  constructor(e) {
    super(), Sc(this, e, null, Bc, Ac, {});
  }
};
const {
  SvelteComponent: Tc,
  append: Hc,
  attr: qt,
  detach: Pc,
  init: Nc,
  insert: Lc,
  noop: ll,
  safe_not_equal: Ic,
  svg_element: Ls
} = window.__gradio__svelte__internal;
function Mc(t) {
  let e, n;
  return {
    c() {
      e = Ls("svg"), n = Ls("path"), qt(n, "fill", "currentColor"), qt(n, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), qt(e, "xmlns", "http://www.w3.org/2000/svg"), qt(e, "width", "100%"), qt(e, "height", "100%"), qt(e, "viewBox", "0 0 24 24");
    },
    m(i, l) {
      Lc(i, e, l), Hc(e, n);
    },
    p: ll,
    i: ll,
    o: ll,
    d(i) {
      i && Pc(e);
    }
  };
}
class Cr extends Tc {
  constructor(e) {
    super(), Nc(this, e, null, Mc, Ic, {});
  }
}
const {
  SvelteComponent: Oc,
  append: Yn,
  attr: re,
  detach: Dc,
  init: Rc,
  insert: Uc,
  noop: sl,
  safe_not_equal: Fc,
  svg_element: gn
} = window.__gradio__svelte__internal;
function qc(t) {
  let e, n, i, l, s;
  return {
    c() {
      e = gn("svg"), n = gn("path"), i = gn("path"), l = gn("line"), s = gn("line"), re(n, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), re(i, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), re(l, "x1", "12"), re(l, "y1", "19"), re(l, "x2", "12"), re(l, "y2", "23"), re(s, "x1", "8"), re(s, "y1", "23"), re(s, "x2", "16"), re(s, "y2", "23"), re(e, "xmlns", "http://www.w3.org/2000/svg"), re(e, "width", "100%"), re(e, "height", "100%"), re(e, "viewBox", "0 0 24 24"), re(e, "fill", "none"), re(e, "stroke", "currentColor"), re(e, "stroke-width", "2"), re(e, "stroke-linecap", "round"), re(e, "stroke-linejoin", "round"), re(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Uc(o, e, r), Yn(e, n), Yn(e, i), Yn(e, l), Yn(e, s);
    },
    p: sl,
    i: sl,
    o: sl,
    d(o) {
      o && Dc(e);
    }
  };
}
class zc extends Oc {
  constructor(e) {
    super(), Rc(this, e, null, qc, Fc, {});
  }
}
const {
  SvelteComponent: jc,
  append: ol,
  attr: be,
  detach: Gc,
  init: xc,
  insert: Vc,
  noop: rl,
  safe_not_equal: Xc,
  svg_element: Jn
} = window.__gradio__svelte__internal;
function Wc(t) {
  let e, n, i, l;
  return {
    c() {
      e = Jn("svg"), n = Jn("path"), i = Jn("polyline"), l = Jn("line"), be(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), be(i, "points", "17 8 12 3 7 8"), be(l, "x1", "12"), be(l, "y1", "3"), be(l, "x2", "12"), be(l, "y2", "15"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "90%"), be(e, "height", "90%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "2"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-upload");
    },
    m(s, o) {
      Vc(s, e, o), ol(e, n), ol(e, i), ol(e, l);
    },
    p: rl,
    i: rl,
    o: rl,
    d(s) {
      s && Gc(e);
    }
  };
}
let Ar = class extends jc {
  constructor(e) {
    super(), xc(this, e, null, Wc, Xc, {});
  }
};
const {
  SvelteComponent: Zc,
  append: Is,
  attr: lt,
  detach: Yc,
  init: Jc,
  insert: Qc,
  noop: al,
  safe_not_equal: Kc,
  svg_element: ul
} = window.__gradio__svelte__internal;
function $c(t) {
  let e, n, i;
  return {
    c() {
      e = ul("svg"), n = ul("path"), i = ul("path"), lt(n, "fill", "currentColor"), lt(n, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), lt(i, "fill", "currentColor"), lt(i, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24");
    },
    m(l, s) {
      Qc(l, e, s), Is(e, n), Is(e, i);
    },
    p: al,
    i: al,
    o: al,
    d(l) {
      l && Yc(e);
    }
  };
}
class e_ extends Zc {
  constructor(e) {
    super(), Jc(this, e, null, $c, Kc, {});
  }
}
const t_ = [
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
], Ms = {
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
t_.reduce(
  (t, { color: e, primary: n, secondary: i }) => ({
    ...t,
    [e]: {
      primary: Ms[e][n],
      secondary: Ms[e][i]
    }
  }),
  {}
);
function n_(t) {
  let e, n = t[0], i = 1;
  for (; i < t.length; ) {
    const l = t[i], s = t[i + 1];
    if (i += 2, (l === "optionalAccess" || l === "optionalCall") && n == null)
      return;
    l === "access" || l === "optionalAccess" ? (e = n, n = s(n)) : (l === "call" || l === "optionalCall") && (n = s((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
class _i extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function i_(t, e) {
  if (window.__gradio_space__ == null)
    throw new _i("Must be on Spaces to share.");
  let n, i, l;
  if (e === "url") {
    const a = await fetch(t);
    n = await a.blob(), i = a.headers.get("content-type") || "", l = a.headers.get("content-disposition") || "";
  } else
    n = l_(t), i = t.split(";")[0].split(":")[1], l = "file" + i.split("/")[1];
  const s = new File([n], l, { type: i }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if (n_([o, "access", (a) => a.headers, "access", (a) => a.get, "call", (a) => a("content-type"), "optionalAccess", (a) => a.includes, "call", (a) => a("application/json")])) {
      const a = await o.json();
      throw new _i(`Upload failed: ${a.error}`);
    }
    throw new _i("Upload failed.");
  }
  return await o.text();
}
function l_(t) {
  for (var e = t.split(","), n = e[0].match(/:(.*?);/)[1], i = atob(e[1]), l = i.length, s = new Uint8Array(l); l--; )
    s[l] = i.charCodeAt(l);
  return new Blob([s], { type: n });
}
const {
  SvelteComponent: s_,
  create_component: o_,
  destroy_component: r_,
  init: a_,
  mount_component: u_,
  safe_not_equal: f_,
  transition_in: c_,
  transition_out: __
} = window.__gradio__svelte__internal, { createEventDispatcher: h_ } = window.__gradio__svelte__internal;
function d_(t) {
  let e, n;
  return e = new as({
    props: {
      Icon: Qf,
      label: (
        /*i18n*/
        t[2]("common.share")
      ),
      pending: (
        /*pending*/
        t[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[5]
  ), {
    c() {
      o_(e.$$.fragment);
    },
    m(i, l) {
      u_(e, i, l), n = !0;
    },
    p(i, [l]) {
      const s = {};
      l & /*i18n*/
      4 && (s.label = /*i18n*/
      i[2]("common.share")), l & /*pending*/
      8 && (s.pending = /*pending*/
      i[3]), e.$set(s);
    },
    i(i) {
      n || (c_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      __(e.$$.fragment, i), n = !1;
    },
    d(i) {
      r_(e, i);
    }
  };
}
function m_(t, e, n) {
  const i = h_();
  let { formatter: l } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      n(3, r = !0);
      const u = await l(s);
      i("share", { description: u });
    } catch (u) {
      console.error(u);
      let f = u instanceof _i ? u.message : "Share failed.";
      i("error", f);
    } finally {
      n(3, r = !1);
    }
  };
  return t.$$set = (u) => {
    "formatter" in u && n(0, l = u.formatter), "value" in u && n(1, s = u.value), "i18n" in u && n(2, o = u.i18n);
  }, [l, s, o, r, i, a];
}
class g_ extends s_ {
  constructor(e) {
    super(), a_(this, e, m_, d_, f_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: b_,
  append: St,
  attr: Rl,
  check_outros: p_,
  create_component: Br,
  destroy_component: Tr,
  detach: hi,
  element: Ul,
  group_outros: w_,
  init: v_,
  insert: di,
  mount_component: Hr,
  safe_not_equal: y_,
  set_data: Fl,
  space: ql,
  text: yn,
  toggle_class: Os,
  transition_in: pi,
  transition_out: wi
} = window.__gradio__svelte__internal;
function E_(t) {
  let e, n;
  return e = new Ar({}), {
    c() {
      Br(e.$$.fragment);
    },
    m(i, l) {
      Hr(e, i, l), n = !0;
    },
    i(i) {
      n || (pi(e.$$.fragment, i), n = !0);
    },
    o(i) {
      wi(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Tr(e, i);
    }
  };
}
function k_(t) {
  let e, n;
  return e = new Cr({}), {
    c() {
      Br(e.$$.fragment);
    },
    m(i, l) {
      Hr(e, i, l), n = !0;
    },
    i(i) {
      n || (pi(e.$$.fragment, i), n = !0);
    },
    o(i) {
      wi(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Tr(e, i);
    }
  };
}
function Ds(t) {
  let e, n, i = (
    /*i18n*/
    t[1]("common.or") + ""
  ), l, s, o, r = (
    /*message*/
    (t[2] || /*i18n*/
    t[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = Ul("span"), n = yn("- "), l = yn(i), s = yn(" -"), o = ql(), a = yn(r), Rl(e, "class", "or svelte-kzcjhc");
    },
    m(u, f) {
      di(u, e, f), St(e, n), St(e, l), St(e, s), di(u, o, f), di(u, a, f);
    },
    p(u, f) {
      f & /*i18n*/
      2 && i !== (i = /*i18n*/
      u[1]("common.or") + "") && Fl(l, i), f & /*message, i18n*/
      6 && r !== (r = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && Fl(a, r);
    },
    d(u) {
      u && (hi(e), hi(o), hi(a));
    }
  };
}
function S_(t) {
  let e, n, i, l, s, o = (
    /*i18n*/
    t[1](
      /*defs*/
      t[5][
        /*type*/
        t[0]
      ] || /*defs*/
      t[5].file
    ) + ""
  ), r, a, u;
  const f = [k_, E_], _ = [];
  function h(d, m) {
    return (
      /*type*/
      d[0] === "clipboard" ? 0 : 1
    );
  }
  i = h(t), l = _[i] = f[i](t);
  let c = (
    /*mode*/
    t[3] !== "short" && Ds(t)
  );
  return {
    c() {
      e = Ul("div"), n = Ul("span"), l.c(), s = ql(), r = yn(o), a = ql(), c && c.c(), Rl(n, "class", "icon-wrap svelte-kzcjhc"), Os(
        n,
        "hovered",
        /*hovered*/
        t[4]
      ), Rl(e, "class", "wrap svelte-kzcjhc");
    },
    m(d, m) {
      di(d, e, m), St(e, n), _[i].m(n, null), St(e, s), St(e, r), St(e, a), c && c.m(e, null), u = !0;
    },
    p(d, [m]) {
      let b = i;
      i = h(d), i !== b && (w_(), wi(_[b], 1, 1, () => {
        _[b] = null;
      }), p_(), l = _[i], l || (l = _[i] = f[i](d), l.c()), pi(l, 1), l.m(n, null)), (!u || m & /*hovered*/
      16) && Os(
        n,
        "hovered",
        /*hovered*/
        d[4]
      ), (!u || m & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      d[1](
        /*defs*/
        d[5][
          /*type*/
          d[0]
        ] || /*defs*/
        d[5].file
      ) + "") && Fl(r, o), /*mode*/
      d[3] !== "short" ? c ? c.p(d, m) : (c = Ds(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null);
    },
    i(d) {
      u || (pi(l), u = !0);
    },
    o(d) {
      wi(l), u = !1;
    },
    d(d) {
      d && hi(e), _[i].d(), c && c.d();
    }
  };
}
function C_(t, e, n) {
  let { type: i = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return t.$$set = (u) => {
    "type" in u && n(0, i = u.type), "i18n" in u && n(1, l = u.i18n), "message" in u && n(2, s = u.message), "mode" in u && n(3, o = u.mode), "hovered" in u && n(4, r = u.hovered);
  }, [i, l, s, o, r, a];
}
class Pr extends b_ {
  constructor(e) {
    super(), v_(this, e, C_, S_, y_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: A_,
  append: fl,
  attr: Ye,
  check_outros: En,
  create_component: Li,
  destroy_component: Ii,
  detach: fn,
  element: Un,
  empty: B_,
  group_outros: kn,
  init: T_,
  insert: cn,
  listen: Mi,
  mount_component: Oi,
  safe_not_equal: H_,
  space: cl,
  toggle_class: ct,
  transition_in: fe,
  transition_out: Ae
} = window.__gradio__svelte__internal;
function Rs(t) {
  let e, n = (
    /*sources*/
    t[1].includes("upload")
  ), i, l = (
    /*sources*/
    t[1].includes("microphone")
  ), s, o = (
    /*sources*/
    t[1].includes("webcam")
  ), r, a = (
    /*sources*/
    t[1].includes("clipboard")
  ), u, f = n && Us(t), _ = l && Fs(t), h = o && qs(t), c = a && zs(t);
  return {
    c() {
      e = Un("span"), f && f.c(), i = cl(), _ && _.c(), s = cl(), h && h.c(), r = cl(), c && c.c(), Ye(e, "class", "source-selection svelte-1jp3vgd"), Ye(e, "data-testid", "source-select");
    },
    m(d, m) {
      cn(d, e, m), f && f.m(e, null), fl(e, i), _ && _.m(e, null), fl(e, s), h && h.m(e, null), fl(e, r), c && c.m(e, null), u = !0;
    },
    p(d, m) {
      m & /*sources*/
      2 && (n = /*sources*/
      d[1].includes("upload")), n ? f ? (f.p(d, m), m & /*sources*/
      2 && fe(f, 1)) : (f = Us(d), f.c(), fe(f, 1), f.m(e, i)) : f && (kn(), Ae(f, 1, 1, () => {
        f = null;
      }), En()), m & /*sources*/
      2 && (l = /*sources*/
      d[1].includes("microphone")), l ? _ ? (_.p(d, m), m & /*sources*/
      2 && fe(_, 1)) : (_ = Fs(d), _.c(), fe(_, 1), _.m(e, s)) : _ && (kn(), Ae(_, 1, 1, () => {
        _ = null;
      }), En()), m & /*sources*/
      2 && (o = /*sources*/
      d[1].includes("webcam")), o ? h ? (h.p(d, m), m & /*sources*/
      2 && fe(h, 1)) : (h = qs(d), h.c(), fe(h, 1), h.m(e, r)) : h && (kn(), Ae(h, 1, 1, () => {
        h = null;
      }), En()), m & /*sources*/
      2 && (a = /*sources*/
      d[1].includes("clipboard")), a ? c ? (c.p(d, m), m & /*sources*/
      2 && fe(c, 1)) : (c = zs(d), c.c(), fe(c, 1), c.m(e, null)) : c && (kn(), Ae(c, 1, 1, () => {
        c = null;
      }), En());
    },
    i(d) {
      u || (fe(f), fe(_), fe(h), fe(c), u = !0);
    },
    o(d) {
      Ae(f), Ae(_), Ae(h), Ae(c), u = !1;
    },
    d(d) {
      d && fn(e), f && f.d(), _ && _.d(), h && h.d(), c && c.d();
    }
  };
}
function Us(t) {
  let e, n, i, l, s;
  return n = new Ar({}), {
    c() {
      e = Un("button"), Li(n.$$.fragment), Ye(e, "class", "icon svelte-1jp3vgd"), Ye(e, "aria-label", "Upload file"), ct(
        e,
        "selected",
        /*active_source*/
        t[0] === "upload" || !/*active_source*/
        t[0]
      );
    },
    m(o, r) {
      cn(o, e, r), Oi(n, e, null), i = !0, l || (s = Mi(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), l = !0);
    },
    p(o, r) {
      (!i || r & /*active_source*/
      1) && ct(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      i || (fe(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && fn(e), Ii(n), l = !1, s();
    }
  };
}
function Fs(t) {
  let e, n, i, l, s;
  return n = new zc({}), {
    c() {
      e = Un("button"), Li(n.$$.fragment), Ye(e, "class", "icon svelte-1jp3vgd"), Ye(e, "aria-label", "Record audio"), ct(
        e,
        "selected",
        /*active_source*/
        t[0] === "microphone"
      );
    },
    m(o, r) {
      cn(o, e, r), Oi(n, e, null), i = !0, l || (s = Mi(
        e,
        "click",
        /*click_handler_1*/
        t[7]
      ), l = !0);
    },
    p(o, r) {
      (!i || r & /*active_source*/
      1) && ct(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      i || (fe(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && fn(e), Ii(n), l = !1, s();
    }
  };
}
function qs(t) {
  let e, n, i, l, s;
  return n = new e_({}), {
    c() {
      e = Un("button"), Li(n.$$.fragment), Ye(e, "class", "icon svelte-1jp3vgd"), Ye(e, "aria-label", "Capture from camera"), ct(
        e,
        "selected",
        /*active_source*/
        t[0] === "webcam"
      );
    },
    m(o, r) {
      cn(o, e, r), Oi(n, e, null), i = !0, l || (s = Mi(
        e,
        "click",
        /*click_handler_2*/
        t[8]
      ), l = !0);
    },
    p(o, r) {
      (!i || r & /*active_source*/
      1) && ct(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      i || (fe(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && fn(e), Ii(n), l = !1, s();
    }
  };
}
function zs(t) {
  let e, n, i, l, s;
  return n = new Cr({}), {
    c() {
      e = Un("button"), Li(n.$$.fragment), Ye(e, "class", "icon svelte-1jp3vgd"), Ye(e, "aria-label", "Paste from clipboard"), ct(
        e,
        "selected",
        /*active_source*/
        t[0] === "clipboard"
      );
    },
    m(o, r) {
      cn(o, e, r), Oi(n, e, null), i = !0, l || (s = Mi(
        e,
        "click",
        /*click_handler_3*/
        t[9]
      ), l = !0);
    },
    p(o, r) {
      (!i || r & /*active_source*/
      1) && ct(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      i || (fe(n.$$.fragment, o), i = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && fn(e), Ii(n), l = !1, s();
    }
  };
}
function P_(t) {
  let e, n, i = (
    /*unique_sources*/
    t[2].length > 1 && Rs(t)
  );
  return {
    c() {
      i && i.c(), e = B_();
    },
    m(l, s) {
      i && i.m(l, s), cn(l, e, s), n = !0;
    },
    p(l, [s]) {
      /*unique_sources*/
      l[2].length > 1 ? i ? (i.p(l, s), s & /*unique_sources*/
      4 && fe(i, 1)) : (i = Rs(l), i.c(), fe(i, 1), i.m(e.parentNode, e)) : i && (kn(), Ae(i, 1, 1, () => {
        i = null;
      }), En());
    },
    i(l) {
      n || (fe(i), n = !0);
    },
    o(l) {
      Ae(i), n = !1;
    },
    d(l) {
      l && fn(e), i && i.d(l);
    }
  };
}
function N_(t, e, n) {
  let i, { sources: l } = e, { active_source: s } = e, { handle_clear: o = () => {
  } } = e, { handle_select: r = () => {
  } } = e;
  async function a(c) {
    o(), n(0, s = c), r(c);
  }
  const u = () => a("upload"), f = () => a("microphone"), _ = () => a("webcam"), h = () => a("clipboard");
  return t.$$set = (c) => {
    "sources" in c && n(1, l = c.sources), "active_source" in c && n(0, s = c.active_source), "handle_clear" in c && n(4, o = c.handle_clear), "handle_select" in c && n(5, r = c.handle_select);
  }, t.$$.update = () => {
    t.$$.dirty & /*sources*/
    2 && n(2, i = [...new Set(l)]);
  }, [
    s,
    l,
    i,
    a,
    o,
    r,
    u,
    f,
    _,
    h
  ];
}
class L_ extends A_ {
  constructor(e) {
    super(), T_(this, e, N_, P_, H_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Kt(t) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; t > 1e3 && n < e.length - 1; )
    t /= 1e3, n++;
  let i = e[n];
  return (Number.isInteger(t) ? t : t.toFixed(1)) + i;
}
function Ht() {
}
function I_(t) {
  return t();
}
function M_(t) {
  t.forEach(I_);
}
function O_(t) {
  return typeof t == "function";
}
function D_(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function R_(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return Ht;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function js(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const Nr = typeof window < "u";
let Gs = Nr ? () => window.performance.now() : () => Date.now(), Lr = Nr ? (t) => requestAnimationFrame(t) : Ht;
const nn = /* @__PURE__ */ new Set();
function Ir(t) {
  nn.forEach((e) => {
    e.c(t) || (nn.delete(e), e.f());
  }), nn.size !== 0 && Lr(Ir);
}
function U_(t) {
  let e;
  return nn.size === 0 && Lr(Ir), {
    promise: new Promise((n) => {
      nn.add(e = { c: t, f: n });
    }),
    abort() {
      nn.delete(e);
    }
  };
}
function F_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function xs(t, { delay: e = 0, duration: n = 400, easing: i = F_, x: l = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(t), a = +r.opacity, u = r.transform === "none" ? "" : r.transform, f = a * (1 - o), [_, h] = js(l), [c, d] = js(s);
  return {
    delay: e,
    duration: n,
    easing: i,
    css: (m, b) => `
			transform: ${u} translate(${(1 - m) * _}${h}, ${(1 - m) * c}${d});
			opacity: ${a - f * b}`
  };
}
const zt = [];
function q_(t, e) {
  return {
    subscribe: Fn(t, e).subscribe
  };
}
function Fn(t, e = Ht) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(r) {
    if (D_(t, r) && (t = r, n)) {
      const a = !zt.length;
      for (const u of i)
        u[1](), zt.push(u, t);
      if (a) {
        for (let u = 0; u < zt.length; u += 2)
          zt[u][0](zt[u + 1]);
        zt.length = 0;
      }
    }
  }
  function s(r) {
    l(r(t));
  }
  function o(r, a = Ht) {
    const u = [r, a];
    return i.add(u), i.size === 1 && (n = e(l, s) || Ht), r(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function _n(t, e, n) {
  const i = !Array.isArray(t), l = i ? [t] : t;
  if (!l.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return q_(n, (o, r) => {
    let a = !1;
    const u = [];
    let f = 0, _ = Ht;
    const h = () => {
      if (f)
        return;
      _();
      const d = e(i ? u[0] : u, o, r);
      s ? o(d) : _ = O_(d) ? d : Ht;
    }, c = l.map(
      (d, m) => R_(
        d,
        (b) => {
          u[m] = b, f &= ~(1 << m), a && h();
        },
        () => {
          f |= 1 << m;
        }
      )
    );
    return a = !0, h(), function() {
      M_(c), _(), a = !1;
    };
  });
}
function Vs(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function zl(t, e, n, i) {
  if (typeof n == "number" || Vs(n)) {
    const l = i - n, s = (n - e) / (t.dt || 1 / 60), o = t.opts.stiffness * l, r = t.opts.damping * s, a = (o - r) * t.inv_mass, u = (s + a) * t.dt;
    return Math.abs(u) < t.opts.precision && Math.abs(l) < t.opts.precision ? i : (t.settled = !1, Vs(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (l, s) => zl(t, e[s], n[s], i[s])
      );
    if (typeof n == "object") {
      const l = {};
      for (const s in n)
        l[s] = zl(t, e[s], n[s], i[s]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Xs(t, e = {}) {
  const n = Fn(t), { stiffness: i = 0.15, damping: l = 0.8, precision: s = 0.01 } = e;
  let o, r, a, u = t, f = t, _ = 1, h = 0, c = !1;
  function d(b, p = {}) {
    f = b;
    const y = a = {};
    return t == null || p.hard || m.stiffness >= 1 && m.damping >= 1 ? (c = !0, o = Gs(), u = b, n.set(t = f), Promise.resolve()) : (p.soft && (h = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), _ = 0), r || (o = Gs(), c = !1, r = U_((w) => {
      if (c)
        return c = !1, r = null, !1;
      _ = Math.min(_ + h, 1);
      const C = {
        inv_mass: _,
        opts: m,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, P = zl(C, u, t, f);
      return o = w, u = t, n.set(t = P), C.settled && (r = null), !C.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        y === a && w();
      });
    }));
  }
  const m = {
    set: d,
    update: (b, p) => d(b(f, t), p),
    subscribe: n.subscribe,
    stiffness: i,
    damping: l,
    precision: s
  };
  return m;
}
const {
  SvelteComponent: z_,
  append: qe,
  attr: z,
  component_subscribe: Ws,
  detach: j_,
  element: G_,
  init: x_,
  insert: V_,
  noop: Zs,
  safe_not_equal: X_,
  set_style: Qn,
  svg_element: ze,
  toggle_class: Ys
} = window.__gradio__svelte__internal, { onMount: W_ } = window.__gradio__svelte__internal;
function Z_(t) {
  let e, n, i, l, s, o, r, a, u, f, _, h;
  return {
    c() {
      e = G_("div"), n = ze("svg"), i = ze("g"), l = ze("path"), s = ze("path"), o = ze("path"), r = ze("path"), a = ze("g"), u = ze("path"), f = ze("path"), _ = ze("path"), h = ze("path"), z(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), z(l, "fill", "#FF7C00"), z(l, "fill-opacity", "0.4"), z(l, "class", "svelte-43sxxs"), z(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), z(s, "fill", "#FF7C00"), z(s, "class", "svelte-43sxxs"), z(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), z(o, "fill", "#FF7C00"), z(o, "fill-opacity", "0.4"), z(o, "class", "svelte-43sxxs"), z(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), z(r, "fill", "#FF7C00"), z(r, "class", "svelte-43sxxs"), Qn(i, "transform", "translate(" + /*$top*/
      t[1][0] + "px, " + /*$top*/
      t[1][1] + "px)"), z(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), z(u, "fill", "#FF7C00"), z(u, "fill-opacity", "0.4"), z(u, "class", "svelte-43sxxs"), z(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), z(f, "fill", "#FF7C00"), z(f, "class", "svelte-43sxxs"), z(_, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), z(_, "fill", "#FF7C00"), z(_, "fill-opacity", "0.4"), z(_, "class", "svelte-43sxxs"), z(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), z(h, "fill", "#FF7C00"), z(h, "class", "svelte-43sxxs"), Qn(a, "transform", "translate(" + /*$bottom*/
      t[2][0] + "px, " + /*$bottom*/
      t[2][1] + "px)"), z(n, "viewBox", "-1200 -1200 3000 3000"), z(n, "fill", "none"), z(n, "xmlns", "http://www.w3.org/2000/svg"), z(n, "class", "svelte-43sxxs"), z(e, "class", "svelte-43sxxs"), Ys(
        e,
        "margin",
        /*margin*/
        t[0]
      );
    },
    m(c, d) {
      V_(c, e, d), qe(e, n), qe(n, i), qe(i, l), qe(i, s), qe(i, o), qe(i, r), qe(n, a), qe(a, u), qe(a, f), qe(a, _), qe(a, h);
    },
    p(c, [d]) {
      d & /*$top*/
      2 && Qn(i, "transform", "translate(" + /*$top*/
      c[1][0] + "px, " + /*$top*/
      c[1][1] + "px)"), d & /*$bottom*/
      4 && Qn(a, "transform", "translate(" + /*$bottom*/
      c[2][0] + "px, " + /*$bottom*/
      c[2][1] + "px)"), d & /*margin*/
      1 && Ys(
        e,
        "margin",
        /*margin*/
        c[0]
      );
    },
    i: Zs,
    o: Zs,
    d(c) {
      c && j_(e);
    }
  };
}
function Y_(t, e, n) {
  let i, l, { margin: s = !0 } = e;
  const o = Xs([0, 0]);
  Ws(t, o, (h) => n(1, i = h));
  const r = Xs([0, 0]);
  Ws(t, r, (h) => n(2, l = h));
  let a;
  async function u() {
    await Promise.all([o.set([125, 140]), r.set([-125, -140])]), await Promise.all([o.set([-125, 140]), r.set([125, -140])]), await Promise.all([o.set([-125, 0]), r.set([125, -0])]), await Promise.all([o.set([125, 0]), r.set([-125, 0])]);
  }
  async function f() {
    await u(), a || f();
  }
  async function _() {
    await Promise.all([o.set([125, 0]), r.set([-125, 0])]), f();
  }
  return W_(() => (_(), () => a = !0)), t.$$set = (h) => {
    "margin" in h && n(0, s = h.margin);
  }, [s, i, l, o, r];
}
class J_ extends z_ {
  constructor(e) {
    super(), x_(this, e, Y_, Z_, X_, { margin: 0 });
  }
}
const {
  SvelteComponent: Q_,
  append: Ct,
  attr: We,
  binding_callbacks: Js,
  check_outros: Mr,
  create_component: K_,
  create_slot: $_,
  destroy_component: eh,
  destroy_each: Or,
  detach: M,
  element: Ke,
  empty: hn,
  ensure_array_like: vi,
  get_all_dirty_from_scope: th,
  get_slot_changes: nh,
  group_outros: Dr,
  init: ih,
  insert: O,
  mount_component: lh,
  noop: jl,
  safe_not_equal: sh,
  set_data: Re,
  set_style: at,
  space: Ze,
  text: le,
  toggle_class: De,
  transition_in: ln,
  transition_out: sn,
  update_slot_base: oh
} = window.__gradio__svelte__internal, { tick: rh } = window.__gradio__svelte__internal, { onDestroy: ah } = window.__gradio__svelte__internal, uh = (t) => ({}), Qs = (t) => ({});
function Ks(t, e, n) {
  const i = t.slice();
  return i[38] = e[n], i[40] = n, i;
}
function $s(t, e, n) {
  const i = t.slice();
  return i[38] = e[n], i;
}
function fh(t) {
  let e, n = (
    /*i18n*/
    t[1]("common.error") + ""
  ), i, l, s;
  const o = (
    /*#slots*/
    t[29].error
  ), r = $_(
    o,
    t,
    /*$$scope*/
    t[28],
    Qs
  );
  return {
    c() {
      e = Ke("span"), i = le(n), l = Ze(), r && r.c(), We(e, "class", "error svelte-1yserjw");
    },
    m(a, u) {
      O(a, e, u), Ct(e, i), O(a, l, u), r && r.m(a, u), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      a[1]("common.error") + "") && Re(i, n), r && r.p && (!s || u[0] & /*$$scope*/
      268435456) && oh(
        r,
        o,
        a,
        /*$$scope*/
        a[28],
        s ? nh(
          o,
          /*$$scope*/
          a[28],
          u,
          uh
        ) : th(
          /*$$scope*/
          a[28]
        ),
        Qs
      );
    },
    i(a) {
      s || (ln(r, a), s = !0);
    },
    o(a) {
      sn(r, a), s = !1;
    },
    d(a) {
      a && (M(e), M(l)), r && r.d(a);
    }
  };
}
function ch(t) {
  let e, n, i, l, s, o, r, a, u, f = (
    /*variant*/
    t[8] === "default" && /*show_eta_bar*/
    t[18] && /*show_progress*/
    t[6] === "full" && eo(t)
  );
  function _(w, C) {
    if (
      /*progress*/
      w[7]
    )
      return dh;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    )
      return hh;
    if (
      /*queue_position*/
      w[2] === 0
    )
      return _h;
  }
  let h = _(t), c = h && h(t), d = (
    /*timer*/
    t[5] && io(t)
  );
  const m = [ph, bh], b = [];
  function p(w, C) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = p(t)) && (o = b[s] = m[s](t));
  let y = !/*timer*/
  t[5] && fo(t);
  return {
    c() {
      f && f.c(), e = Ze(), n = Ke("div"), c && c.c(), i = Ze(), d && d.c(), l = Ze(), o && o.c(), r = Ze(), y && y.c(), a = hn(), We(n, "class", "progress-text svelte-1yserjw"), De(
        n,
        "meta-text-center",
        /*variant*/
        t[8] === "center"
      ), De(
        n,
        "meta-text",
        /*variant*/
        t[8] === "default"
      );
    },
    m(w, C) {
      f && f.m(w, C), O(w, e, C), O(w, n, C), c && c.m(n, null), Ct(n, i), d && d.m(n, null), O(w, l, C), ~s && b[s].m(w, C), O(w, r, C), y && y.m(w, C), O(w, a, C), u = !0;
    },
    p(w, C) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? f ? f.p(w, C) : (f = eo(w), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), h === (h = _(w)) && c ? c.p(w, C) : (c && c.d(1), c = h && h(w), c && (c.c(), c.m(n, i))), /*timer*/
      w[5] ? d ? d.p(w, C) : (d = io(w), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!u || C[0] & /*variant*/
      256) && De(
        n,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!u || C[0] & /*variant*/
      256) && De(
        n,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let P = s;
      s = p(w), s === P ? ~s && b[s].p(w, C) : (o && (Dr(), sn(b[P], 1, 1, () => {
        b[P] = null;
      }), Mr()), ~s ? (o = b[s], o ? o.p(w, C) : (o = b[s] = m[s](w), o.c()), ln(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? y && (y.d(1), y = null) : y ? y.p(w, C) : (y = fo(w), y.c(), y.m(a.parentNode, a));
    },
    i(w) {
      u || (ln(o), u = !0);
    },
    o(w) {
      sn(o), u = !1;
    },
    d(w) {
      w && (M(e), M(n), M(l), M(r), M(a)), f && f.d(w), c && c.d(), d && d.d(), ~s && b[s].d(w), y && y.d(w);
    }
  };
}
function eo(t) {
  let e, n = `translateX(${/*eta_level*/
  (t[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Ke("div"), We(e, "class", "eta-bar svelte-1yserjw"), at(e, "transform", n);
    },
    m(i, l) {
      O(i, e, l);
    },
    p(i, l) {
      l[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && at(e, "transform", n);
    },
    d(i) {
      i && M(e);
    }
  };
}
function _h(t) {
  let e;
  return {
    c() {
      e = le("processing |");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: jl,
    d(n) {
      n && M(e);
    }
  };
}
function hh(t) {
  let e, n = (
    /*queue_position*/
    t[2] + 1 + ""
  ), i, l, s, o;
  return {
    c() {
      e = le("queue: "), i = le(n), l = le("/"), s = le(
        /*queue_size*/
        t[3]
      ), o = le(" |");
    },
    m(r, a) {
      O(r, e, a), O(r, i, a), O(r, l, a), O(r, s, a), O(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      r[2] + 1 + "") && Re(i, n), a[0] & /*queue_size*/
      8 && Re(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (M(e), M(i), M(l), M(s), M(o));
    }
  };
}
function dh(t) {
  let e, n = vi(
    /*progress*/
    t[7]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = no($s(t, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      e = hn();
    },
    m(l, s) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(l, s);
      O(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress*/
      128) {
        n = vi(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const r = $s(l, n, o);
          i[o] ? i[o].p(r, s) : (i[o] = no(r), i[o].c(), i[o].m(e.parentNode, e));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      l && M(e), Or(i, l);
    }
  };
}
function to(t) {
  let e, n = (
    /*p*/
    t[38].unit + ""
  ), i, l, s = " ", o;
  function r(f, _) {
    return (
      /*p*/
      f[38].length != null ? gh : mh
    );
  }
  let a = r(t), u = a(t);
  return {
    c() {
      u.c(), e = Ze(), i = le(n), l = le(" | "), o = le(s);
    },
    m(f, _) {
      u.m(f, _), O(f, e, _), O(f, i, _), O(f, l, _), O(f, o, _);
    },
    p(f, _) {
      a === (a = r(f)) && u ? u.p(f, _) : (u.d(1), u = a(f), u && (u.c(), u.m(e.parentNode, e))), _[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && Re(i, n);
    },
    d(f) {
      f && (M(e), M(i), M(l), M(o)), u.d(f);
    }
  };
}
function mh(t) {
  let e = Kt(
    /*p*/
    t[38].index || 0
  ) + "", n;
  return {
    c() {
      n = le(e);
    },
    m(i, l) {
      O(i, n, l);
    },
    p(i, l) {
      l[0] & /*progress*/
      128 && e !== (e = Kt(
        /*p*/
        i[38].index || 0
      ) + "") && Re(n, e);
    },
    d(i) {
      i && M(n);
    }
  };
}
function gh(t) {
  let e = Kt(
    /*p*/
    t[38].index || 0
  ) + "", n, i, l = Kt(
    /*p*/
    t[38].length
  ) + "", s;
  return {
    c() {
      n = le(e), i = le("/"), s = le(l);
    },
    m(o, r) {
      O(o, n, r), O(o, i, r), O(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Kt(
        /*p*/
        o[38].index || 0
      ) + "") && Re(n, e), r[0] & /*progress*/
      128 && l !== (l = Kt(
        /*p*/
        o[38].length
      ) + "") && Re(s, l);
    },
    d(o) {
      o && (M(n), M(i), M(s));
    }
  };
}
function no(t) {
  let e, n = (
    /*p*/
    t[38].index != null && to(t)
  );
  return {
    c() {
      n && n.c(), e = hn();
    },
    m(i, l) {
      n && n.m(i, l), O(i, e, l);
    },
    p(i, l) {
      /*p*/
      i[38].index != null ? n ? n.p(i, l) : (n = to(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && M(e), n && n.d(i);
    }
  };
}
function io(t) {
  let e, n = (
    /*eta*/
    t[0] ? `/${/*formatted_eta*/
    t[19]}` : ""
  ), i, l;
  return {
    c() {
      e = le(
        /*formatted_timer*/
        t[20]
      ), i = le(n), l = le("s");
    },
    m(s, o) {
      O(s, e, o), O(s, i, o), O(s, l, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Re(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Re(i, n);
    },
    d(s) {
      s && (M(e), M(i), M(l));
    }
  };
}
function bh(t) {
  let e, n;
  return e = new J_({
    props: { margin: (
      /*variant*/
      t[8] === "default"
    ) }
  }), {
    c() {
      K_(e.$$.fragment);
    },
    m(i, l) {
      lh(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*variant*/
      256 && (s.margin = /*variant*/
      i[8] === "default"), e.$set(s);
    },
    i(i) {
      n || (ln(e.$$.fragment, i), n = !0);
    },
    o(i) {
      sn(e.$$.fragment, i), n = !1;
    },
    d(i) {
      eh(e, i);
    }
  };
}
function ph(t) {
  let e, n, i, l, s, o = `${/*last_progress_level*/
  t[15] * 100}%`, r = (
    /*progress*/
    t[7] != null && lo(t)
  );
  return {
    c() {
      e = Ke("div"), n = Ke("div"), r && r.c(), i = Ze(), l = Ke("div"), s = Ke("div"), We(n, "class", "progress-level-inner svelte-1yserjw"), We(s, "class", "progress-bar svelte-1yserjw"), at(s, "width", o), We(l, "class", "progress-bar-wrap svelte-1yserjw"), We(e, "class", "progress-level svelte-1yserjw");
    },
    m(a, u) {
      O(a, e, u), Ct(e, n), r && r.m(n, null), Ct(e, i), Ct(e, l), Ct(l, s), t[30](s);
    },
    p(a, u) {
      /*progress*/
      a[7] != null ? r ? r.p(a, u) : (r = lo(a), r.c(), r.m(n, null)) : r && (r.d(1), r = null), u[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && at(s, "width", o);
    },
    i: jl,
    o: jl,
    d(a) {
      a && M(e), r && r.d(), t[30](null);
    }
  };
}
function lo(t) {
  let e, n = vi(
    /*progress*/
    t[7]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = uo(Ks(t, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      e = hn();
    },
    m(l, s) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(l, s);
      O(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = vi(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const r = Ks(l, n, o);
          i[o] ? i[o].p(r, s) : (i[o] = uo(r), i[o].c(), i[o].m(e.parentNode, e));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      l && M(e), Or(i, l);
    }
  };
}
function so(t) {
  let e, n, i, l, s = (
    /*i*/
    t[40] !== 0 && wh()
  ), o = (
    /*p*/
    t[38].desc != null && oo(t)
  ), r = (
    /*p*/
    t[38].desc != null && /*progress_level*/
    t[14] && /*progress_level*/
    t[14][
      /*i*/
      t[40]
    ] != null && ro()
  ), a = (
    /*progress_level*/
    t[14] != null && ao(t)
  );
  return {
    c() {
      s && s.c(), e = Ze(), o && o.c(), n = Ze(), r && r.c(), i = Ze(), a && a.c(), l = hn();
    },
    m(u, f) {
      s && s.m(u, f), O(u, e, f), o && o.m(u, f), O(u, n, f), r && r.m(u, f), O(u, i, f), a && a.m(u, f), O(u, l, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? o ? o.p(u, f) : (o = oo(u), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? r || (r = ro(), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null), /*progress_level*/
      u[14] != null ? a ? a.p(u, f) : (a = ao(u), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(u) {
      u && (M(e), M(n), M(i), M(l)), s && s.d(u), o && o.d(u), r && r.d(u), a && a.d(u);
    }
  };
}
function wh(t) {
  let e;
  return {
    c() {
      e = le(" /");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && M(e);
    }
  };
}
function oo(t) {
  let e = (
    /*p*/
    t[38].desc + ""
  ), n;
  return {
    c() {
      n = le(e);
    },
    m(i, l) {
      O(i, n, l);
    },
    p(i, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      i[38].desc + "") && Re(n, e);
    },
    d(i) {
      i && M(n);
    }
  };
}
function ro(t) {
  let e;
  return {
    c() {
      e = le("-");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && M(e);
    }
  };
}
function ao(t) {
  let e = (100 * /*progress_level*/
  (t[14][
    /*i*/
    t[40]
  ] || 0)).toFixed(1) + "", n, i;
  return {
    c() {
      n = le(e), i = le("%");
    },
    m(l, s) {
      O(l, n, s), O(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[40]
      ] || 0)).toFixed(1) + "") && Re(n, e);
    },
    d(l) {
      l && (M(n), M(i));
    }
  };
}
function uo(t) {
  let e, n = (
    /*p*/
    (t[38].desc != null || /*progress_level*/
    t[14] && /*progress_level*/
    t[14][
      /*i*/
      t[40]
    ] != null) && so(t)
  );
  return {
    c() {
      n && n.c(), e = hn();
    },
    m(i, l) {
      n && n.m(i, l), O(i, e, l);
    },
    p(i, l) {
      /*p*/
      i[38].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[40]
      ] != null ? n ? n.p(i, l) : (n = so(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && M(e), n && n.d(i);
    }
  };
}
function fo(t) {
  let e, n;
  return {
    c() {
      e = Ke("p"), n = le(
        /*loading_text*/
        t[9]
      ), We(e, "class", "loading svelte-1yserjw");
    },
    m(i, l) {
      O(i, e, l), Ct(e, n);
    },
    p(i, l) {
      l[0] & /*loading_text*/
      512 && Re(
        n,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && M(e);
    }
  };
}
function vh(t) {
  let e, n, i, l, s;
  const o = [ch, fh], r = [];
  function a(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = a(t)) && (i = r[n] = o[n](t)), {
    c() {
      e = Ke("div"), i && i.c(), We(e, "class", l = "wrap " + /*variant*/
      t[8] + " " + /*show_progress*/
      t[6] + " svelte-1yserjw"), De(e, "hide", !/*status*/
      t[4] || /*status*/
      t[4] === "complete" || /*show_progress*/
      t[6] === "hidden"), De(
        e,
        "translucent",
        /*variant*/
        t[8] === "center" && /*status*/
        (t[4] === "pending" || /*status*/
        t[4] === "error") || /*translucent*/
        t[11] || /*show_progress*/
        t[6] === "minimal"
      ), De(
        e,
        "generating",
        /*status*/
        t[4] === "generating"
      ), De(
        e,
        "border",
        /*border*/
        t[12]
      ), at(
        e,
        "position",
        /*absolute*/
        t[10] ? "absolute" : "static"
      ), at(
        e,
        "padding",
        /*absolute*/
        t[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      O(u, e, f), ~n && r[n].m(e, null), t[31](e), s = !0;
    },
    p(u, f) {
      let _ = n;
      n = a(u), n === _ ? ~n && r[n].p(u, f) : (i && (Dr(), sn(r[_], 1, 1, () => {
        r[_] = null;
      }), Mr()), ~n ? (i = r[n], i ? i.p(u, f) : (i = r[n] = o[n](u), i.c()), ln(i, 1), i.m(e, null)) : i = null), (!s || f[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1yserjw")) && We(e, "class", l), (!s || f[0] & /*variant, show_progress, status, show_progress*/
      336) && De(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!s || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && De(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!s || f[0] & /*variant, show_progress, status*/
      336) && De(
        e,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!s || f[0] & /*variant, show_progress, border*/
      4416) && De(
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
      s || (ln(i), s = !0);
    },
    o(u) {
      sn(i), s = !1;
    },
    d(u) {
      u && M(e), ~n && r[n].d(), t[31](null);
    }
  };
}
let Kn = [], _l = !1;
async function yh(t, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (Kn.push(t), !_l)
      _l = !0;
    else
      return;
    await rh(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let i = 0; i < Kn.length; i++) {
        const s = Kn[i].getBoundingClientRect();
        (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), _l = !1, Kn = [];
    });
  }
}
function Eh(t, e, n) {
  let i, { $$slots: l = {}, $$scope: s } = e, { i18n: o } = e, { eta: r = null } = e, { queue_position: a } = e, { queue_size: u } = e, { status: f } = e, { scroll_to_output: _ = !1 } = e, { timer: h = !0 } = e, { show_progress: c = "full" } = e, { message: d = null } = e, { progress: m = null } = e, { variant: b = "default" } = e, { loading_text: p = "Loading..." } = e, { absolute: y = !0 } = e, { translucent: w = !1 } = e, { border: C = !1 } = e, { autoscroll: P } = e, E, N = !1, v = 0, A = 0, B = null, L = null, x = 0, J = null, ce, te = null, ke = !0;
  const ye = () => {
    n(0, r = n(26, B = n(19, S = null))), n(24, v = performance.now()), n(25, A = 0), N = !0, me();
  };
  function me() {
    requestAnimationFrame(() => {
      n(25, A = (performance.now() - v) / 1e3), N && me();
    });
  }
  function _e() {
    n(25, A = 0), n(0, r = n(26, B = n(19, S = null))), N && (N = !1);
  }
  ah(() => {
    N && _e();
  });
  let S = null;
  function k(g) {
    Js[g ? "unshift" : "push"](() => {
      te = g, n(16, te), n(7, m), n(14, J), n(15, ce);
    });
  }
  function I(g) {
    Js[g ? "unshift" : "push"](() => {
      E = g, n(13, E);
    });
  }
  return t.$$set = (g) => {
    "i18n" in g && n(1, o = g.i18n), "eta" in g && n(0, r = g.eta), "queue_position" in g && n(2, a = g.queue_position), "queue_size" in g && n(3, u = g.queue_size), "status" in g && n(4, f = g.status), "scroll_to_output" in g && n(21, _ = g.scroll_to_output), "timer" in g && n(5, h = g.timer), "show_progress" in g && n(6, c = g.show_progress), "message" in g && n(22, d = g.message), "progress" in g && n(7, m = g.progress), "variant" in g && n(8, b = g.variant), "loading_text" in g && n(9, p = g.loading_text), "absolute" in g && n(10, y = g.absolute), "translucent" in g && n(11, w = g.translucent), "border" in g && n(12, C = g.border), "autoscroll" in g && n(23, P = g.autoscroll), "$$scope" in g && n(28, s = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (r === null && n(0, r = B), r != null && B !== r && (n(27, L = (performance.now() - v) / 1e3 + r), n(19, S = L.toFixed(1)), n(26, B = r))), t.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, x = L === null || L <= 0 || !A ? null : Math.min(A / L, 1)), t.$$.dirty[0] & /*progress*/
    128 && m != null && n(18, ke = !1), t.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? n(14, J = m.map((g) => {
      if (g.index != null && g.length != null)
        return g.index / g.length;
      if (g.progress != null)
        return g.progress;
    })) : n(14, J = null), J ? (n(15, ce = J[J.length - 1]), te && (ce === 0 ? n(16, te.style.transition = "0", te) : n(16, te.style.transition = "150ms", te))) : n(15, ce = void 0)), t.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? ye() : _e()), t.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && E && _ && (f === "pending" || f === "complete") && yh(E, P), t.$$.dirty[0] & /*status, message*/
    4194320, t.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, i = A.toFixed(1));
  }, [
    r,
    o,
    a,
    u,
    f,
    h,
    c,
    m,
    b,
    p,
    y,
    w,
    C,
    E,
    J,
    ce,
    te,
    x,
    ke,
    S,
    i,
    _,
    d,
    P,
    v,
    A,
    B,
    L,
    s,
    l,
    k,
    I
  ];
}
class kh extends Q_ {
  constructor(e) {
    super(), ih(
      this,
      e,
      Eh,
      vh,
      sh,
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
class Sh {
  constructor() {
    this.boxes = [];
  }
}
const { setContext: ub, getContext: Ch } = window.__gradio__svelte__internal, Ah = "WORKER_PROXY_CONTEXT_KEY";
function Rr() {
  return Ch(Ah);
}
function Bh(t) {
  return t.host === window.location.host || t.host === "localhost:7860" || t.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  t.host === "lite.local";
}
function Ur(t, e) {
  const n = e.toLowerCase();
  for (const [i, l] of Object.entries(t))
    if (i.toLowerCase() === n)
      return l;
}
function Fr(t) {
  if (t == null)
    return !1;
  const e = new URL(t);
  return !(!Bh(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Th(t) {
  if (t == null || !Fr(t))
    return t;
  const e = Rr();
  if (e == null)
    return t;
  const i = new URL(t).pathname;
  return e.httpRequest({
    method: "GET",
    path: i,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${i} from the Wasm worker.`);
    const s = new Blob([l.body], {
      type: Ur(l.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: Hh,
  assign: yi,
  check_outros: qr,
  compute_rest_props: co,
  create_slot: us,
  detach: Di,
  element: zr,
  empty: jr,
  exclude_internal_props: Ph,
  get_all_dirty_from_scope: fs,
  get_slot_changes: cs,
  get_spread_update: Gr,
  group_outros: xr,
  init: Nh,
  insert: Ri,
  listen: Vr,
  prevent_default: Lh,
  safe_not_equal: Ih,
  set_attributes: Ei,
  transition_in: Pt,
  transition_out: Nt,
  update_slot_base: _s
} = window.__gradio__svelte__internal, { createEventDispatcher: Mh } = window.__gradio__svelte__internal;
function Oh(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[8].default
  ), r = us(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      t[0]
    ) },
    {
      target: n = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      t[1]
    ) },
    /*$$restProps*/
    t[6]
  ], u = {};
  for (let f = 0; f < a.length; f += 1)
    u = yi(u, a[f]);
  return {
    c() {
      e = zr("a"), r && r.c(), Ei(e, u);
    },
    m(f, _) {
      Ri(f, e, _), r && r.m(e, null), i = !0, l || (s = Vr(
        e,
        "click",
        /*dispatch*/
        t[3].bind(null, "click")
      ), l = !0);
    },
    p(f, _) {
      r && r.p && (!i || _ & /*$$scope*/
      128) && _s(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? cs(
          o,
          /*$$scope*/
          f[7],
          _,
          null
        ) : fs(
          /*$$scope*/
          f[7]
        ),
        null
      ), Ei(e, u = Gr(a, [
        (!i || _ & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { target: n },
        { rel: "noopener noreferrer" },
        (!i || _ & /*download*/
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
      i || (Pt(r, f), i = !0);
    },
    o(f) {
      Nt(r, f), i = !1;
    },
    d(f) {
      f && Di(e), r && r.d(f), l = !1, s();
    }
  };
}
function Dh(t) {
  let e, n, i, l;
  const s = [Uh, Rh], o = [];
  function r(a, u) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = jr();
    },
    m(a, u) {
      o[e].m(a, u), Ri(a, i, u), l = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (xr(), Nt(o[f], 1, 1, () => {
        o[f] = null;
      }), qr(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), Pt(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (Pt(n), l = !0);
    },
    o(a) {
      Nt(n), l = !1;
    },
    d(a) {
      a && Di(i), o[e].d(a);
    }
  };
}
function Rh(t) {
  let e, n, i, l;
  const s = (
    /*#slots*/
    t[8].default
  ), o = us(
    s,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let r = [
    /*$$restProps*/
    t[6],
    { href: (
      /*href*/
      t[0]
    ) }
  ], a = {};
  for (let u = 0; u < r.length; u += 1)
    a = yi(a, r[u]);
  return {
    c() {
      e = zr("a"), o && o.c(), Ei(e, a);
    },
    m(u, f) {
      Ri(u, e, f), o && o.m(e, null), n = !0, i || (l = Vr(e, "click", Lh(
        /*wasm_click_handler*/
        t[5]
      )), i = !0);
    },
    p(u, f) {
      o && o.p && (!n || f & /*$$scope*/
      128) && _s(
        o,
        s,
        u,
        /*$$scope*/
        u[7],
        n ? cs(
          s,
          /*$$scope*/
          u[7],
          f,
          null
        ) : fs(
          /*$$scope*/
          u[7]
        ),
        null
      ), Ei(e, a = Gr(r, [
        f & /*$$restProps*/
        64 && /*$$restProps*/
        u[6],
        (!n || f & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) }
      ]));
    },
    i(u) {
      n || (Pt(o, u), n = !0);
    },
    o(u) {
      Nt(o, u), n = !1;
    },
    d(u) {
      u && Di(e), o && o.d(u), i = !1, l();
    }
  };
}
function Uh(t) {
  let e;
  const n = (
    /*#slots*/
    t[8].default
  ), i = us(
    n,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      128) && _s(
        i,
        n,
        l,
        /*$$scope*/
        l[7],
        e ? cs(
          n,
          /*$$scope*/
          l[7],
          s,
          null
        ) : fs(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (Pt(i, l), e = !0);
    },
    o(l) {
      Nt(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Fh(t) {
  let e, n, i, l, s;
  const o = [Dh, Oh], r = [];
  function a(u, f) {
    return f & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (u[4] && Fr(
      /*href*/
      u[0]
    ))), e ? 0 : 1;
  }
  return n = a(t, -1), i = r[n] = o[n](t), {
    c() {
      i.c(), l = jr();
    },
    m(u, f) {
      r[n].m(u, f), Ri(u, l, f), s = !0;
    },
    p(u, [f]) {
      let _ = n;
      n = a(u, f), n === _ ? r[n].p(u, f) : (xr(), Nt(r[_], 1, 1, () => {
        r[_] = null;
      }), qr(), i = r[n], i ? i.p(u, f) : (i = r[n] = o[n](u), i.c()), Pt(i, 1), i.m(l.parentNode, l));
    },
    i(u) {
      s || (Pt(i), s = !0);
    },
    o(u) {
      Nt(i), s = !1;
    },
    d(u) {
      u && Di(l), r[n].d(u);
    }
  };
}
function qh(t, e, n) {
  const i = ["href", "download"];
  let l = co(e, i), { $$slots: s = {}, $$scope: o } = e, { href: r = void 0 } = e, { download: a } = e;
  const u = Mh();
  let f = !1;
  const _ = Rr();
  async function h() {
    if (f)
      return;
    if (u("click"), r == null)
      throw new Error("href is not defined.");
    if (_ == null)
      throw new Error("Wasm worker proxy is not available.");
    const d = new URL(r).pathname;
    n(2, f = !0), _.httpRequest({
      method: "GET",
      path: d,
      headers: {},
      query_string: ""
    }).then((m) => {
      if (m.status !== 200)
        throw new Error(`Failed to get file ${d} from the Wasm worker.`);
      const b = new Blob(
        [m.body],
        {
          type: Ur(m.headers, "content-type")
        }
      ), p = URL.createObjectURL(b), y = document.createElement("a");
      y.href = p, y.download = a, y.click(), URL.revokeObjectURL(p);
    }).finally(() => {
      n(2, f = !1);
    });
  }
  return t.$$set = (c) => {
    e = yi(yi({}, e), Ph(c)), n(6, l = co(e, i)), "href" in c && n(0, r = c.href), "download" in c && n(1, a = c.download), "$$scope" in c && n(7, o = c.$$scope);
  }, [
    r,
    a,
    f,
    u,
    _,
    h,
    l,
    o,
    s
  ];
}
class zh extends Hh {
  constructor(e) {
    super(), Nh(this, e, qh, Fh, Ih, { href: 0, download: 1 });
  }
}
var hl = new Intl.Collator(0, { numeric: 1 }).compare;
function _o(t, e, n) {
  return t = t.split("."), e = e.split("."), hl(t[0], e[0]) || hl(t[1], e[1]) || (e[2] = e.slice(2).join("."), n = /[.-]/.test(t[2] = t.slice(2).join(".")), n == /[.-]/.test(e[2]) ? hl(t[2], e[2]) : n ? -1 : 1);
}
function Xr(t, e, n) {
  return e.startsWith("http://") || e.startsWith("https://") ? n ? t : e : t + e;
}
function dl(t) {
  if (t.startsWith("http")) {
    const { protocol: e, host: n } = new URL(t);
    return n.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: n,
      http_protocol: e
    } : {
      ws_protocol: e === "https:" ? "wss" : "ws",
      http_protocol: e,
      host: n
    };
  } else if (t.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: t
  };
}
const Wr = /^[^\/]*\/[^\/]*$/, jh = /.*hf\.space\/{0,1}$/;
async function Gh(t, e) {
  const n = {};
  e && (n.Authorization = `Bearer ${e}`);
  const i = t.trim();
  if (Wr.test(i))
    try {
      const l = await fetch(
        `https://huggingface.co/api/spaces/${i}/host`,
        { headers: n }
      );
      if (l.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const s = (await l.json()).host;
      return {
        space_id: t,
        ...dl(s)
      };
    } catch (l) {
      throw new Error("Space metadata could not be loaded." + l.message);
    }
  if (jh.test(i)) {
    const { ws_protocol: l, http_protocol: s, host: o } = dl(i);
    return {
      space_id: o.replace(".hf.space", ""),
      ws_protocol: l,
      http_protocol: s,
      host: o
    };
  }
  return {
    space_id: !1,
    ...dl(i)
  };
}
function xh(t) {
  let e = {};
  return t.forEach(({ api_name: n }, i) => {
    n && (e[n] = i);
  }), e;
}
const Vh = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function ho(t) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${t}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && Vh.test(n));
  } catch {
    return !1;
  }
}
function Xh(t, e, n, i) {
  if (e.length === 0) {
    if (n === "replace")
      return i;
    if (n === "append")
      return t + i;
    throw new Error(`Unsupported action: ${n}`);
  }
  let l = t;
  for (let o = 0; o < e.length - 1; o++)
    l = l[e[o]];
  const s = e[e.length - 1];
  switch (n) {
    case "replace":
      l[s] = i;
      break;
    case "append":
      l[s] += i;
      break;
    case "add":
      Array.isArray(l) ? l.splice(Number(s), 0, i) : l[s] = i;
      break;
    case "delete":
      Array.isArray(l) ? l.splice(Number(s), 1) : delete l[s];
      break;
    default:
      throw new Error(`Unknown action: ${n}`);
  }
  return t;
}
function Wh(t, e) {
  return e.forEach(([n, i, l]) => {
    t = Xh(t, i, n, l);
  }), t;
}
async function Zh(t, e, n, i = Qh) {
  let l = (Array.isArray(t) ? t : [t]).map(
    (s) => s.blob
  );
  return await Promise.all(
    await i(e, l, void 0, n).then(
      async (s) => {
        if (s.error)
          throw new Error(s.error);
        return s.files ? s.files.map((o, r) => new hs({
          ...t[r],
          path: o,
          url: e + "/file=" + o
        })) : [];
      }
    )
  );
}
async function Yh(t, e) {
  return t.map(
    (n, i) => new hs({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: e
    })
  );
}
class hs {
  constructor({
    path: e,
    url: n,
    orig_name: i,
    size: l,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    this.path = e, this.url = n, this.orig_name = i, this.size = l, this.blob = n ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
const Zr = "This application is too busy. Keep trying!", gt = "Connection errored out.";
let Yr;
function Jh(t, e) {
  return { post_data: n, upload_files: i, client: l, handle_blob: s };
  async function n(o, r, a) {
    const u = { "Content-Type": "application/json" };
    a && (u.Authorization = `Bearer ${a}`);
    try {
      var f = await t(o, {
        method: "POST",
        body: JSON.stringify(r),
        headers: u
      });
    } catch {
      return [{ error: gt }, 500];
    }
    let _, h;
    try {
      _ = await f.json(), h = f.status;
    } catch (c) {
      _ = { error: `Could not parse server response: ${c}` }, h = 500;
    }
    return [_, h];
  }
  async function i(o, r, a, u) {
    const f = {};
    a && (f.Authorization = `Bearer ${a}`);
    const _ = 1e3, h = [];
    for (let d = 0; d < r.length; d += _) {
      const m = r.slice(d, d + _), b = new FormData();
      m.forEach((y) => {
        b.append("files", y);
      });
      try {
        const y = u ? `${o}/upload?upload_id=${u}` : `${o}/upload`;
        var c = await t(y, {
          method: "POST",
          body: b,
          headers: f
        });
      } catch {
        return { error: gt };
      }
      const p = await c.json();
      h.push(...p);
    }
    return { files: h };
  }
  async function l(o, r = {}) {
    return new Promise(async (a) => {
      const { status_callback: u, hf_token: f } = r, _ = {
        predict: ce,
        submit: te,
        view_api: _e,
        component_server: me
      };
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const S = await import("./wrapper-6f348d45-f837cf34.js");
        Yr = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = S.WebSocket;
      }
      const { ws_protocol: h, http_protocol: c, host: d, space_id: m } = await Gh(o, f), b = Math.random().toString(36).substring(2), p = {};
      let y = !1, w = {}, C = {}, P = null;
      const E = {}, N = /* @__PURE__ */ new Set();
      let v, A = {}, B = !1;
      f && m && (B = await $h(m, f));
      async function L(S) {
        if (v = S, window.location.protocol === "https:" && (v.root = v.root.replace("http://", "https://")), A = xh((S == null ? void 0 : S.dependencies) || []), v.auth_required)
          return {
            config: v,
            ..._
          };
        try {
          x = await _e(v);
        } catch (k) {
          console.error(`Could not get api details: ${k.message}`);
        }
        return {
          config: v,
          ..._
        };
      }
      let x;
      async function J(S) {
        if (u && u(S), S.status === "running")
          try {
            v = await po(
              t,
              `${c}//${d}`,
              f
            );
            const k = await L(v);
            a(k);
          } catch (k) {
            console.error(k), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        v = await po(
          t,
          `${c}//${d}`,
          f
        );
        const S = await L(v);
        a(S);
      } catch (S) {
        console.error(S), m ? xl(
          m,
          Wr.test(m) ? "space_name" : "subdomain",
          J
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function ce(S, k, I) {
        let g = !1, T = !1, ae;
        if (typeof S == "number")
          ae = v.dependencies[S];
        else {
          const Q = S.replace(/^\//, "");
          ae = v.dependencies[A[Q]];
        }
        if (ae.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((Q, Se) => {
          const He = te(S, k, I);
          let D;
          He.on("data", (H) => {
            T && (He.destroy(), Q(H)), g = !0, D = H;
          }).on("status", (H) => {
            H.stage === "error" && Se(H), H.stage === "complete" && (T = !0, g && (He.destroy(), Q(D)));
          });
        });
      }
      function te(S, k, I, g = null) {
        let T, ae;
        if (typeof S == "number")
          T = S, ae = x.unnamed_endpoints[T];
        else {
          const K = S.replace(/^\//, "");
          T = A[K], ae = x.named_endpoints[S.trim()];
        }
        if (typeof T != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let Q, Se, He = v.protocol ?? "ws";
        const D = typeof S == "number" ? "/predict" : S;
        let H, R = null, j = !1;
        const X = {};
        let he = "";
        typeof window < "u" && (he = new URLSearchParams(window.location.search).toString()), s(`${v.root}`, k, ae, f).then(
          (K) => {
            if (H = {
              data: K || [],
              event_data: I,
              fn_index: T,
              trigger_id: g
            }, e0(T, v))
              q({
                type: "status",
                endpoint: D,
                stage: "pending",
                queue: !1,
                fn_index: T,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${v.root}/run${D.startsWith("/") ? D : `/${D}`}${he ? "?" + he : ""}`,
                {
                  ...H,
                  session_hash: b
                },
                f
              ).then(([ne, Y]) => {
                const de = ne.data;
                Y == 200 ? (q({
                  type: "data",
                  endpoint: D,
                  fn_index: T,
                  data: de,
                  time: /* @__PURE__ */ new Date()
                }), q({
                  type: "status",
                  endpoint: D,
                  fn_index: T,
                  stage: "complete",
                  eta: ne.average_duration,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                })) : q({
                  type: "status",
                  stage: "error",
                  endpoint: D,
                  fn_index: T,
                  message: ne.error,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              }).catch((ne) => {
                q({
                  type: "status",
                  stage: "error",
                  message: ne.message,
                  endpoint: D,
                  fn_index: T,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              });
            else if (He == "ws") {
              q({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: D,
                fn_index: T,
                time: /* @__PURE__ */ new Date()
              });
              let ne = new URL(`${h}://${Xr(
                d,
                v.path,
                !0
              )}
							/queue/join${he ? "?" + he : ""}`);
              B && ne.searchParams.set("__sign", B), Q = new WebSocket(ne), Q.onclose = (Y) => {
                Y.wasClean || q({
                  type: "status",
                  stage: "error",
                  broken: !0,
                  message: gt,
                  queue: !0,
                  endpoint: D,
                  fn_index: T,
                  time: /* @__PURE__ */ new Date()
                });
              }, Q.onmessage = function(Y) {
                const de = JSON.parse(Y.data), { type: ue, status: V, data: Z } = ml(
                  de,
                  p[T]
                );
                if (ue === "update" && V && !j)
                  q({
                    type: "status",
                    endpoint: D,
                    fn_index: T,
                    time: /* @__PURE__ */ new Date(),
                    ...V
                  }), V.stage === "error" && Q.close();
                else if (ue === "hash") {
                  Q.send(JSON.stringify({ fn_index: T, session_hash: b }));
                  return;
                } else
                  ue === "data" ? Q.send(JSON.stringify({ ...H, session_hash: b })) : ue === "complete" ? j = V : ue === "log" ? q({
                    type: "log",
                    log: Z.log,
                    level: Z.level,
                    endpoint: D,
                    fn_index: T
                  }) : ue === "generating" && q({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...V,
                    stage: V == null ? void 0 : V.stage,
                    queue: !0,
                    endpoint: D,
                    fn_index: T
                  });
                Z && (q({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: Z.data,
                  endpoint: D,
                  fn_index: T
                }), j && (q({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...j,
                  stage: V == null ? void 0 : V.stage,
                  queue: !0,
                  endpoint: D,
                  fn_index: T
                }), Q.close()));
              }, _o(v.version || "2.0.0", "3.6") < 0 && addEventListener(
                "open",
                () => Q.send(JSON.stringify({ hash: b }))
              );
            } else if (He == "sse") {
              q({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: D,
                fn_index: T,
                time: /* @__PURE__ */ new Date()
              });
              var ge = new URLSearchParams({
                fn_index: T.toString(),
                session_hash: b
              }).toString();
              let ne = new URL(
                `${v.root}/queue/join?${he ? he + "&" : ""}${ge}`
              );
              Se = e(ne), Se.onmessage = async function(Y) {
                const de = JSON.parse(Y.data), { type: ue, status: V, data: Z } = ml(
                  de,
                  p[T]
                );
                if (ue === "update" && V && !j)
                  q({
                    type: "status",
                    endpoint: D,
                    fn_index: T,
                    time: /* @__PURE__ */ new Date(),
                    ...V
                  }), V.stage === "error" && Se.close();
                else if (ue === "data") {
                  R = de.event_id;
                  let [mt, xa] = await n(
                    `${v.root}/queue/data`,
                    {
                      ...H,
                      session_hash: b,
                      event_id: R
                    },
                    f
                  );
                  xa !== 200 && (q({
                    type: "status",
                    stage: "error",
                    message: gt,
                    queue: !0,
                    endpoint: D,
                    fn_index: T,
                    time: /* @__PURE__ */ new Date()
                  }), Se.close());
                } else
                  ue === "complete" ? j = V : ue === "log" ? q({
                    type: "log",
                    log: Z.log,
                    level: Z.level,
                    endpoint: D,
                    fn_index: T
                  }) : ue === "generating" && q({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...V,
                    stage: V == null ? void 0 : V.stage,
                    queue: !0,
                    endpoint: D,
                    fn_index: T
                  });
                Z && (q({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: Z.data,
                  endpoint: D,
                  fn_index: T
                }), j && (q({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...j,
                  stage: V == null ? void 0 : V.stage,
                  queue: !0,
                  endpoint: D,
                  fn_index: T
                }), Se.close()));
              };
            } else
              (He == "sse_v1" || He == "sse_v2") && (q({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: D,
                fn_index: T,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${v.root}/queue/join?${he}`,
                {
                  ...H,
                  session_hash: b
                },
                f
              ).then(([ne, Y]) => {
                if (Y === 503)
                  q({
                    type: "status",
                    stage: "error",
                    message: Zr,
                    queue: !0,
                    endpoint: D,
                    fn_index: T,
                    time: /* @__PURE__ */ new Date()
                  });
                else if (Y !== 200)
                  q({
                    type: "status",
                    stage: "error",
                    message: gt,
                    queue: !0,
                    endpoint: D,
                    fn_index: T,
                    time: /* @__PURE__ */ new Date()
                  });
                else {
                  R = ne.event_id;
                  let de = async function(ue) {
                    try {
                      const { type: V, status: Z, data: mt } = ml(
                        ue,
                        p[T]
                      );
                      if (V == "heartbeat")
                        return;
                      if (V === "update" && Z && !j)
                        q({
                          type: "status",
                          endpoint: D,
                          fn_index: T,
                          time: /* @__PURE__ */ new Date(),
                          ...Z
                        });
                      else if (V === "complete")
                        j = Z;
                      else if (V == "unexpected_error")
                        console.error("Unexpected error", Z == null ? void 0 : Z.message), q({
                          type: "status",
                          stage: "error",
                          message: (Z == null ? void 0 : Z.message) || "An Unexpected Error Occurred!",
                          queue: !0,
                          endpoint: D,
                          fn_index: T,
                          time: /* @__PURE__ */ new Date()
                        });
                      else if (V === "log") {
                        q({
                          type: "log",
                          log: mt.log,
                          level: mt.level,
                          endpoint: D,
                          fn_index: T
                        });
                        return;
                      } else
                        V === "generating" && (q({
                          type: "status",
                          time: /* @__PURE__ */ new Date(),
                          ...Z,
                          stage: Z == null ? void 0 : Z.stage,
                          queue: !0,
                          endpoint: D,
                          fn_index: T
                        }), mt && He === "sse_v2" && Me(R, mt));
                      mt && (q({
                        type: "data",
                        time: /* @__PURE__ */ new Date(),
                        data: mt.data,
                        endpoint: D,
                        fn_index: T
                      }), j && q({
                        type: "status",
                        time: /* @__PURE__ */ new Date(),
                        ...j,
                        stage: Z == null ? void 0 : Z.stage,
                        queue: !0,
                        endpoint: D,
                        fn_index: T
                      })), ((Z == null ? void 0 : Z.stage) === "complete" || (Z == null ? void 0 : Z.stage) === "error") && (E[R] && delete E[R], R in C && delete C[R]);
                    } catch (V) {
                      console.error("Unexpected client exception", V), q({
                        type: "status",
                        stage: "error",
                        message: "An Unexpected Error Occurred!",
                        queue: !0,
                        endpoint: D,
                        fn_index: T,
                        time: /* @__PURE__ */ new Date()
                      }), ye();
                    }
                  };
                  R in w && (w[R].forEach(
                    (ue) => de(ue)
                  ), delete w[R]), E[R] = de, N.add(R), y || ke();
                }
              }));
          }
        );
        function Me(K, ge) {
          !C[K] ? (C[K] = [], ge.data.forEach((Y, de) => {
            C[K][de] = Y;
          })) : ge.data.forEach((Y, de) => {
            let ue = Wh(
              C[K][de],
              Y
            );
            C[K][de] = ue, ge.data[de] = ue;
          });
        }
        function q(K) {
          const ne = X[K.type] || [];
          ne == null || ne.forEach((Y) => Y(K));
        }
        function Vi(K, ge) {
          const ne = X, Y = ne[K] || [];
          return ne[K] = Y, Y == null || Y.push(ge), { on: Vi, off: xn, cancel: Xi, destroy: Wi };
        }
        function xn(K, ge) {
          const ne = X;
          let Y = ne[K] || [];
          return Y = Y == null ? void 0 : Y.filter((de) => de !== ge), ne[K] = Y, { on: Vi, off: xn, cancel: Xi, destroy: Wi };
        }
        async function Xi() {
          const K = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          j = K, q({
            ...K,
            type: "status",
            endpoint: D,
            fn_index: T
          });
          let ge = {};
          He === "ws" ? (Q && Q.readyState === 0 ? Q.addEventListener("open", () => {
            Q.close();
          }) : Q.close(), ge = { fn_index: T, session_hash: b }) : (Se.close(), ge = { event_id: R });
          try {
            await t(`${v.root}/reset`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(ge)
            });
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function Wi() {
          for (const K in X)
            X[K].forEach((ge) => {
              xn(K, ge);
            });
        }
        return {
          on: Vi,
          off: xn,
          cancel: Xi,
          destroy: Wi
        };
      }
      function ke() {
        y = !0;
        let S = new URLSearchParams({
          session_hash: b
        }).toString(), k = new URL(`${v.root}/queue/data?${S}`);
        P = e(k), P.onmessage = async function(I) {
          let g = JSON.parse(I.data);
          const T = g.event_id;
          if (!T)
            await Promise.all(
              Object.keys(E).map(
                (ae) => E[ae](g)
              )
            );
          else if (E[T]) {
            g.msg === "process_completed" && (N.delete(T), N.size === 0 && ye());
            let ae = E[T];
            window.setTimeout(ae, 0, g);
          } else
            w[T] || (w[T] = []), w[T].push(g);
        }, P.onerror = async function(I) {
          await Promise.all(
            Object.keys(E).map(
              (g) => E[g]({
                msg: "unexpected_error",
                message: gt
              })
            )
          ), ye();
        };
      }
      function ye() {
        y = !1, P == null || P.close();
      }
      async function me(S, k, I) {
        var g;
        const T = { "Content-Type": "application/json" };
        f && (T.Authorization = `Bearer ${f}`);
        let ae, Q = v.components.find(
          (D) => D.id === S
        );
        (g = Q == null ? void 0 : Q.props) != null && g.root_url ? ae = Q.props.root_url : ae = v.root;
        const Se = await t(
          `${ae}/component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: I,
              component_id: S,
              fn_name: k,
              session_hash: b
            }),
            headers: T
          }
        );
        if (!Se.ok)
          throw new Error(
            "Could not connect to component server: " + Se.statusText
          );
        return await Se.json();
      }
      async function _e(S) {
        if (x)
          return x;
        const k = { "Content-Type": "application/json" };
        f && (k.Authorization = `Bearer ${f}`);
        let I;
        if (_o(S.version || "2.0.0", "3.30") < 0 ? I = await t(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(S)
            }),
            headers: k
          }
        ) : I = await t(`${S.root}/info`, {
          headers: k
        }), !I.ok)
          throw new Error(gt);
        let g = await I.json();
        return "api" in g && (g = g.api), g.named_endpoints["/predict"] && !g.unnamed_endpoints[0] && (g.unnamed_endpoints[0] = g.named_endpoints["/predict"]), Kh(g, S, A);
      }
    });
  }
  async function s(o, r, a, u) {
    const f = await Gl(
      r,
      void 0,
      [],
      !0,
      a
    );
    return Promise.all(
      f.map(async ({ path: _, blob: h, type: c }) => {
        if (h) {
          const d = (await i(o, [h], u)).files[0];
          return { path: _, file_url: d, type: c, name: h == null ? void 0 : h.name };
        }
        return { path: _, type: c };
      })
    ).then((_) => (_.forEach(({ path: h, file_url: c, type: d, name: m }) => {
      if (d === "Gallery")
        bo(r, c, h);
      else if (c) {
        const b = new hs({ path: c, orig_name: m });
        bo(r, b, h);
      }
    }), r));
  }
}
const { post_data: fb, upload_files: Qh, client: cb, handle_blob: _b } = Jh(
  fetch,
  (...t) => new EventSource(...t)
);
function mo(t, e, n, i) {
  switch (t.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (n === "JSONSerializable" || n === "StringSerializable")
    return "any";
  if (n === "ListStringSerializable")
    return "string[]";
  if (e === "Image")
    return i === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (t == null ? void 0 : t.type) === "array" ? i === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : i === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return i === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function go(t, e) {
  return e === "GallerySerializable" ? "array of [file, label] tuples" : e === "ListStringSerializable" ? "array of strings" : e === "FileSerializable" ? "array of files or single file" : t.description;
}
function Kh(t, e, n) {
  const i = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const l in t) {
    const s = t[l];
    for (const o in s) {
      const r = e.dependencies[o] ? o : n[o.replace("/", "")], a = s[o];
      i[l][o] = {}, i[l][o].parameters = {}, i[l][o].returns = {}, i[l][o].type = e.dependencies[r].types, i[l][o].parameters = a.parameters.map(
        ({ label: u, component: f, type: _, serializer: h }) => ({
          label: u,
          component: f,
          type: mo(_, f, h, "parameter"),
          description: go(_, h)
        })
      ), i[l][o].returns = a.returns.map(
        ({ label: u, component: f, type: _, serializer: h }) => ({
          label: u,
          component: f,
          type: mo(_, f, h, "return"),
          description: go(_, h)
        })
      );
    }
  }
  return i;
}
async function $h(t, e) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${t}/jwt`, {
      headers: {
        Authorization: `Bearer ${e}`
      }
    })).json()).token || !1;
  } catch (n) {
    return console.error(n), !1;
  }
}
function bo(t, e, n) {
  for (; n.length > 1; )
    t = t[n.shift()];
  t[n.shift()] = e;
}
async function Gl(t, e = void 0, n = [], i = !1, l = void 0) {
  if (Array.isArray(t)) {
    let s = [];
    return await Promise.all(
      t.map(async (o, r) => {
        var a;
        let u = n.slice();
        u.push(r);
        const f = await Gl(
          t[r],
          i ? ((a = l == null ? void 0 : l.parameters[r]) == null ? void 0 : a.component) || void 0 : e,
          u,
          !1,
          l
        );
        s = s.concat(f);
      })
    ), s;
  } else {
    if (globalThis.Buffer && t instanceof globalThis.Buffer)
      return [
        {
          path: n,
          blob: e === "Image" ? !1 : new Yr([t]),
          type: e
        }
      ];
    if (typeof t == "object") {
      let s = [];
      for (let o in t)
        if (t.hasOwnProperty(o)) {
          let r = n.slice();
          r.push(o), s = s.concat(
            await Gl(
              t[o],
              void 0,
              r,
              !1,
              l
            )
          );
        }
      return s;
    }
  }
  return [];
}
function e0(t, e) {
  var n, i, l, s;
  return !(((i = (n = e == null ? void 0 : e.dependencies) == null ? void 0 : n[t]) == null ? void 0 : i.queue) === null ? e.enable_queue : (s = (l = e == null ? void 0 : e.dependencies) == null ? void 0 : l[t]) != null && s.queue) || !1;
}
async function po(t, e, n) {
  const i = {};
  if (n && (i.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const l = window.gradio_config.root, s = window.gradio_config;
    return s.root = Xr(e, s.root, !1), { ...s, path: l };
  } else if (e) {
    let l = await t(`${e}/config`, {
      headers: i
    });
    if (l.status === 200) {
      const s = await l.json();
      return s.path = s.path ?? "", s.root = e, s;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function xl(t, e, n) {
  let i = e === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${t}` : `https://huggingface.co/api/spaces/${t}`, l, s;
  try {
    if (l = await fetch(i), s = l.status, s !== 200)
      throw new Error();
    l = await l.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!l || s !== 200)
    return;
  const {
    runtime: { stage: o },
    id: r
  } = l;
  switch (o) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: o
      }), setTimeout(() => {
        xl(t, e, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: o,
        discussions_enabled: await ho(r)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: o
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: o
      }), setTimeout(() => {
        xl(t, e, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: o,
        discussions_enabled: await ho(r)
      });
      break;
  }
}
function ml(t, e) {
  switch (t.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: Zr,
          stage: "error",
          code: t.code,
          success: t.success
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
          message: t.message,
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
          code: t.code,
          size: t.queue_size,
          position: t.rank,
          eta: t.rank_eta,
          success: t.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: t.code,
          progress_data: t.progress_data,
          success: t.success
        }
      };
    case "log":
      return { type: "log", data: t };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: t.success ? null : t.output.error,
          stage: t.success ? "generating" : "error",
          code: t.code,
          progress_data: t.progress_data,
          eta: t.average_duration
        },
        data: t.success ? t.output : null
      };
    case "process_completed":
      return "error" in t.output ? {
        type: "update",
        status: {
          queue: !0,
          message: t.output.error,
          stage: "error",
          code: t.code,
          success: t.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: t.success ? void 0 : t.output.error,
          stage: t.success ? "complete" : "error",
          code: t.code,
          progress_data: t.progress_data
        },
        data: t.success ? t.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: t.code,
          size: t.rank,
          position: 0,
          success: t.success,
          eta: t.eta
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
function t0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var n0 = function(e) {
  return i0(e) && !l0(e);
};
function i0(t) {
  return !!t && typeof t == "object";
}
function l0(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || r0(t);
}
var s0 = typeof Symbol == "function" && Symbol.for, o0 = s0 ? Symbol.for("react.element") : 60103;
function r0(t) {
  return t.$$typeof === o0;
}
function a0(t) {
  return Array.isArray(t) ? [] : {};
}
function Mn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? on(a0(t), t, e) : t;
}
function u0(t, e, n) {
  return t.concat(e).map(function(i) {
    return Mn(i, n);
  });
}
function f0(t, e) {
  if (!e.customMerge)
    return on;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : on;
}
function c0(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function wo(t) {
  return Object.keys(t).concat(c0(t));
}
function Jr(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function _0(t, e) {
  return Jr(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function h0(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && wo(t).forEach(function(l) {
    i[l] = Mn(t[l], n);
  }), wo(e).forEach(function(l) {
    _0(t, l) || (Jr(t, l) && n.isMergeableObject(e[l]) ? i[l] = f0(l, n)(t[l], e[l], n) : i[l] = Mn(e[l], n));
  }), i;
}
function on(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || u0, n.isMergeableObject = n.isMergeableObject || n0, n.cloneUnlessOtherwiseSpecified = Mn;
  var i = Array.isArray(e), l = Array.isArray(t), s = i === l;
  return s ? i ? n.arrayMerge(t, e, n) : h0(t, e, n) : Mn(e, n);
}
on.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, l) {
    return on(i, l, n);
  }, {});
};
var d0 = on, m0 = d0;
const g0 = /* @__PURE__ */ t0(m0);
var Vl = function(t, e) {
  return Vl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var l in i)
      Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
  }, Vl(t, e);
};
function Ui(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Vl(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var G = function() {
  return G = Object.assign || function(e) {
    for (var n, i = 1, l = arguments.length; i < l; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, G.apply(this, arguments);
};
function gl(t, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, l = e.length, s; i < l; i++)
      (s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), s[i] = e[i]);
  return t.concat(s || Array.prototype.slice.call(e));
}
var U;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(U || (U = {}));
var ee;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ee || (ee = {}));
var rn;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(rn || (rn = {}));
function vo(t) {
  return t.type === ee.literal;
}
function b0(t) {
  return t.type === ee.argument;
}
function Qr(t) {
  return t.type === ee.number;
}
function Kr(t) {
  return t.type === ee.date;
}
function $r(t) {
  return t.type === ee.time;
}
function ea(t) {
  return t.type === ee.select;
}
function ta(t) {
  return t.type === ee.plural;
}
function p0(t) {
  return t.type === ee.pound;
}
function na(t) {
  return t.type === ee.tag;
}
function ia(t) {
  return !!(t && typeof t == "object" && t.type === rn.number);
}
function Xl(t) {
  return !!(t && typeof t == "object" && t.type === rn.dateTime);
}
var la = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, w0 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function v0(t) {
  var e = {};
  return t.replace(w0, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        e.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var y0 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function E0(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(y0).filter(function(h) {
    return h.length > 0;
  }), n = [], i = 0, l = e; i < l.length; i++) {
    var s = l[i], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var r = o[0], a = o.slice(1), u = 0, f = a; u < f.length; u++) {
      var _ = f[u];
      if (_.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: r, options: a });
  }
  return n;
}
function k0(t) {
  return t.replace(/^(.*?)-/, "");
}
var yo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, sa = /^(@+)?(\+|#+)?[rs]?$/g, S0 = /(\*)(0+)|(#+)(0+)|(0+)/g, oa = /^(0+)$/;
function Eo(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(sa, function(n, i, l) {
    return typeof l != "string" ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : l === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + (typeof l == "string" ? l.length : 0)), "";
  }), e;
}
function ra(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function C0(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !oa.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function ko(t) {
  var e = {}, n = ra(t);
  return n || e;
}
function A0(t) {
  for (var e = {}, n = 0, i = t; n < i.length; n++) {
    var l = i[n];
    switch (l.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = l.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = k0(l.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = G(G(G({}, e), { notation: "scientific" }), l.options.reduce(function(a, u) {
          return G(G({}, a), ko(u));
        }, {}));
        continue;
      case "engineering":
        e = G(G(G({}, e), { notation: "engineering" }), l.options.reduce(function(a, u) {
          return G(G({}, a), ko(u));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(l.options[0]);
        continue;
      case "integer-width":
        if (l.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        l.options[0].replace(S0, function(a, u, f, _, h, c) {
          if (u)
            e.minimumIntegerDigits = f.length;
          else {
            if (_ && h)
              throw new Error("We currently do not support maximum integer digits");
            if (c)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (oa.test(l.stem)) {
      e.minimumIntegerDigits = l.stem.length;
      continue;
    }
    if (yo.test(l.stem)) {
      if (l.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      l.stem.replace(yo, function(a, u, f, _, h, c) {
        return f === "*" ? e.minimumFractionDigits = u.length : _ && _[0] === "#" ? e.maximumFractionDigits = _.length : h && c ? (e.minimumFractionDigits = h.length, e.maximumFractionDigits = h.length + c.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var s = l.options[0];
      s === "w" ? e = G(G({}, e), { trailingZeroDisplay: "stripIfInteger" }) : s && (e = G(G({}, e), Eo(s)));
      continue;
    }
    if (sa.test(l.stem)) {
      e = G(G({}, e), Eo(l.stem));
      continue;
    }
    var o = ra(l.stem);
    o && (e = G(G({}, e), o));
    var r = C0(l.stem);
    r && (e = G(G({}, e), r));
  }
  return e;
}
var $n = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function B0(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var l = t.charAt(i);
    if (l === "j") {
      for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === l; )
        s++, i++;
      var o = 1 + (s & 1), r = s < 2 ? 1 : 3 + (s >> 1), a = "a", u = T0(e);
      for ((u == "H" || u == "k") && (r = 0); r-- > 0; )
        n += a;
      for (; o-- > 0; )
        n = u + n;
    } else
      l === "J" ? n += "H" : n += l;
  }
  return n;
}
function T0(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, i;
  n !== "root" && (i = t.maximize().region);
  var l = $n[i || ""] || $n[n || ""] || $n["".concat(n, "-001")] || $n["001"];
  return l[0];
}
var bl, H0 = new RegExp("^".concat(la.source, "*")), P0 = new RegExp("".concat(la.source, "*$"));
function F(t, e) {
  return { start: t, end: e };
}
var N0 = !!String.prototype.startsWith, L0 = !!String.fromCodePoint, I0 = !!Object.fromEntries, M0 = !!String.prototype.codePointAt, O0 = !!String.prototype.trimStart, D0 = !!String.prototype.trimEnd, R0 = !!Number.isSafeInteger, U0 = R0 ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Wl = !0;
try {
  var F0 = ua("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Wl = ((bl = F0.exec("a")) === null || bl === void 0 ? void 0 : bl[0]) === "a";
} catch {
  Wl = !1;
}
var So = N0 ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), Zl = L0 ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var i = "", l = e.length, s = 0, o; l > s; ) {
      if (o = e[s++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), Co = (
  // native
  I0 ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, l = e; i < l.length; i++) {
        var s = l[i], o = s[0], r = s[1];
        n[o] = r;
      }
      return n;
    }
  )
), aa = M0 ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var i = e.length;
    if (!(n < 0 || n >= i)) {
      var l = e.charCodeAt(n), s;
      return l < 55296 || l > 56319 || n + 1 === i || (s = e.charCodeAt(n + 1)) < 56320 || s > 57343 ? l : (l - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), q0 = O0 ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(H0, "");
  }
), z0 = D0 ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(P0, "");
  }
);
function ua(t, e) {
  return new RegExp(t, e);
}
var Yl;
if (Wl) {
  var Ao = ua("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Yl = function(e, n) {
    var i;
    Ao.lastIndex = n;
    var l = Ao.exec(e);
    return (i = l[1]) !== null && i !== void 0 ? i : "";
  };
} else
  Yl = function(e, n) {
    for (var i = []; ; ) {
      var l = aa(e, n);
      if (l === void 0 || fa(l) || V0(l))
        break;
      i.push(l), n += l >= 65536 ? 2 : 1;
    }
    return Zl.apply(void 0, i);
  };
var j0 = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, i) {
      for (var l = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var o = this.parseArgument(e, i);
          if (o.err)
            return o;
          l.push(o.val);
        } else {
          if (s === 125 && e > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var r = this.clonePosition();
            this.bump(), l.push({
              type: ee.pound,
              location: F(r, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(U.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Jl(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            l.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            l.push(o.val);
          }
        }
      }
      return { val: l, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var i = this.clonePosition();
      this.bump();
      var l = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ee.literal,
            value: "<".concat(l, "/>"),
            location: F(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(e + 1, n, !0);
        if (s.err)
          return s;
        var o = s.val, r = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Jl(this.char()))
            return this.error(U.INVALID_TAG, F(r, this.clonePosition()));
          var a = this.clonePosition(), u = this.parseTagName();
          return l !== u ? this.error(U.UNMATCHED_CLOSING_TAG, F(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ee.tag,
              value: l,
              children: o,
              location: F(i, this.clonePosition())
            },
            err: null
          } : this.error(U.INVALID_TAG, F(r, this.clonePosition())));
        } else
          return this.error(U.UNCLOSED_TAG, F(i, this.clonePosition()));
      } else
        return this.error(U.INVALID_TAG, F(i, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && x0(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var i = this.clonePosition(), l = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          l += s;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          l += o;
          continue;
        }
        var r = this.tryParseLeftAngleBracket();
        if (r) {
          l += r;
          continue;
        }
        break;
      }
      var a = F(i, this.clonePosition());
      return {
        val: { type: ee.literal, value: l, location: a },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !G0(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return Zl.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), Zl(i));
    }, t.prototype.parseArgument = function(e, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(U.EMPTY_ARGUMENT, F(i, this.clonePosition()));
      var l = this.parseIdentifierIfPossible().value;
      if (!l)
        return this.error(U.MALFORMED_ARGUMENT, F(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ee.argument,
              // value does not include the opening and closing braces.
              value: l,
              location: F(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(i, this.clonePosition())) : this.parseArgumentOptions(e, n, l, i);
        default:
          return this.error(U.MALFORMED_ARGUMENT, F(i, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), i = Yl(this.message, n), l = n + i.length;
      this.bumpTo(l);
      var s = this.clonePosition(), o = F(e, s);
      return { value: i, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, i, l) {
      var s, o = this.clonePosition(), r = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (r) {
        case "":
          return this.error(U.EXPECT_ARGUMENT_TYPE, F(o, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), _ = this.parseSimpleArgStyleIfPossible();
            if (_.err)
              return _;
            var h = z0(_.val);
            if (h.length === 0)
              return this.error(U.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
            var c = F(f, this.clonePosition());
            u = { style: h, styleLocation: c };
          }
          var d = this.tryParseArgumentClose(l);
          if (d.err)
            return d;
          var m = F(l, this.clonePosition());
          if (u && So(u == null ? void 0 : u.style, "::", 0)) {
            var b = q0(u.style.slice(2));
            if (r === "number") {
              var _ = this.parseNumberSkeletonFromString(b, u.styleLocation);
              return _.err ? _ : {
                val: { type: ee.number, value: i, location: m, style: _.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(U.EXPECT_DATE_TIME_SKELETON, m);
              var p = b;
              this.locale && (p = B0(b, this.locale));
              var h = {
                type: rn.dateTime,
                pattern: p,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? v0(p) : {}
              }, y = r === "date" ? ee.date : ee.time;
              return {
                val: { type: y, value: i, location: m, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: r === "number" ? ee.number : r === "date" ? ee.date : ee.time,
              value: i,
              location: m,
              style: (s = u == null ? void 0 : u.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var w = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(U.EXPECT_SELECT_ARGUMENT_OPTIONS, F(w, G({}, w)));
          this.bumpSpace();
          var C = this.parseIdentifierIfPossible(), P = 0;
          if (r !== "select" && C.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var _ = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (_.err)
              return _;
            this.bumpSpace(), C = this.parseIdentifierIfPossible(), P = _.val;
          }
          var E = this.tryParsePluralOrSelectOptions(e, r, n, C);
          if (E.err)
            return E;
          var d = this.tryParseArgumentClose(l);
          if (d.err)
            return d;
          var N = F(l, this.clonePosition());
          return r === "select" ? {
            val: {
              type: ee.select,
              value: i,
              options: Co(E.val),
              location: N
            },
            err: null
          } : {
            val: {
              type: ee.plural,
              value: i,
              options: Co(E.val),
              offset: P,
              pluralType: r === "plural" ? "cardinal" : "ordinal",
              location: N
            },
            err: null
          };
        }
        default:
          return this.error(U.INVALID_ARGUMENT_TYPE, F(o, a));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var l = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(U.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(l, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var i = [];
      try {
        i = E0(e);
      } catch {
        return this.error(U.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: rn.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? A0(i) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, i, l) {
      for (var s, o = !1, r = [], a = /* @__PURE__ */ new Set(), u = l.value, f = l.location; ; ) {
        if (u.length === 0) {
          var _ = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_SELECTOR, U.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            f = F(_, this.clonePosition()), u = this.message.slice(_.offset, this.offset());
          } else
            break;
        }
        if (a.has(u))
          return this.error(n === "select" ? U.DUPLICATE_SELECT_ARGUMENT_SELECTOR : U.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (o = !0), this.bumpSpace();
        var c = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : U.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(e + 1, n, i);
        if (d.err)
          return d;
        var m = this.tryParseArgumentClose(c);
        if (m.err)
          return m;
        r.push([
          u,
          {
            value: d.val,
            location: F(c, this.clonePosition())
          }
        ]), a.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, f = s.location;
      }
      return r.length === 0 ? this.error(n === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR : U.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(U.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : { val: r, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var i = 1, l = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var r = this.char();
        if (r >= 48 && r <= 57)
          s = !0, o = o * 10 + (r - 48), this.bump();
        else
          break;
      }
      var a = F(l, this.clonePosition());
      return s ? (o *= i, U0(o) ? { val: o, err: null } : this.error(n, a)) : this.error(e, a);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = aa(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (So(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), i = this.message.indexOf(e, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && fa(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return i ?? null;
    }, t;
  }()
);
function Jl(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function G0(t) {
  return Jl(t) || t === 47;
}
function x0(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function fa(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function V0(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ql(t) {
  t.forEach(function(e) {
    if (delete e.location, ea(e) || ta(e))
      for (var n in e.options)
        delete e.options[n].location, Ql(e.options[n].value);
    else
      Qr(e) && ia(e.style) || (Kr(e) || $r(e)) && Xl(e.style) ? delete e.style.location : na(e) && Ql(e.children);
  });
}
function X0(t, e) {
  e === void 0 && (e = {}), e = G({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new j0(t, e).parse();
  if (n.err) {
    var i = SyntaxError(U[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || Ql(n.val), n.val;
}
function pl(t, e) {
  var n = e && e.cache ? e.cache : K0, i = e && e.serializer ? e.serializer : Q0, l = e && e.strategy ? e.strategy : Z0;
  return l(t, {
    cache: n,
    serializer: i
  });
}
function W0(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function ca(t, e, n, i) {
  var l = W0(i) ? i : n(i), s = e.get(l);
  return typeof s > "u" && (s = t.call(this, i), e.set(l, s)), s;
}
function _a(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), l = n(i), s = e.get(l);
  return typeof s > "u" && (s = t.apply(this, i), e.set(l, s)), s;
}
function ds(t, e, n, i, l) {
  return n.bind(e, t, i, l);
}
function Z0(t, e) {
  var n = t.length === 1 ? ca : _a;
  return ds(t, this, n, e.cache.create(), e.serializer);
}
function Y0(t, e) {
  return ds(t, this, _a, e.cache.create(), e.serializer);
}
function J0(t, e) {
  return ds(t, this, ca, e.cache.create(), e.serializer);
}
var Q0 = function() {
  return JSON.stringify(arguments);
};
function ms() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ms.prototype.get = function(t) {
  return this.cache[t];
};
ms.prototype.set = function(t, e) {
  this.cache[t] = e;
};
var K0 = {
  create: function() {
    return new ms();
  }
}, wl = {
  variadic: Y0,
  monadic: J0
}, an;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(an || (an = {}));
var Fi = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e(n, i, l) {
      var s = t.call(this, n) || this;
      return s.code = i, s.originalMessage = l, s;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Bo = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e(n, i, l, s) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(l).join('", "'), '"'), an.INVALID_VALUE, s) || this;
    }
    return e;
  }(Fi)
), $0 = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e(n, i, l) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), an.INVALID_VALUE, l) || this;
    }
    return e;
  }(Fi)
), ed = (
  /** @class */
  function(t) {
    Ui(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), an.MISSING_VALUE, i) || this;
    }
    return e;
  }(Fi)
), Ee;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Ee || (Ee = {}));
function td(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== Ee.literal || n.type !== Ee.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function nd(t) {
  return typeof t == "function";
}
function mi(t, e, n, i, l, s, o) {
  if (t.length === 1 && vo(t[0]))
    return [
      {
        type: Ee.literal,
        value: t[0].value
      }
    ];
  for (var r = [], a = 0, u = t; a < u.length; a++) {
    var f = u[a];
    if (vo(f)) {
      r.push({
        type: Ee.literal,
        value: f.value
      });
      continue;
    }
    if (p0(f)) {
      typeof s == "number" && r.push({
        type: Ee.literal,
        value: n.getNumberFormat(e).format(s)
      });
      continue;
    }
    var _ = f.value;
    if (!(l && _ in l))
      throw new ed(_, o);
    var h = l[_];
    if (b0(f)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), r.push({
        type: typeof h == "string" ? Ee.literal : Ee.object,
        value: h
      });
      continue;
    }
    if (Kr(f)) {
      var c = typeof f.style == "string" ? i.date[f.style] : Xl(f.style) ? f.style.parsedOptions : void 0;
      r.push({
        type: Ee.literal,
        value: n.getDateTimeFormat(e, c).format(h)
      });
      continue;
    }
    if ($r(f)) {
      var c = typeof f.style == "string" ? i.time[f.style] : Xl(f.style) ? f.style.parsedOptions : i.time.medium;
      r.push({
        type: Ee.literal,
        value: n.getDateTimeFormat(e, c).format(h)
      });
      continue;
    }
    if (Qr(f)) {
      var c = typeof f.style == "string" ? i.number[f.style] : ia(f.style) ? f.style.parsedOptions : void 0;
      c && c.scale && (h = h * (c.scale || 1)), r.push({
        type: Ee.literal,
        value: n.getNumberFormat(e, c).format(h)
      });
      continue;
    }
    if (na(f)) {
      var d = f.children, m = f.value, b = l[m];
      if (!nd(b))
        throw new $0(m, "function", o);
      var p = mi(d, e, n, i, l, s), y = b(p.map(function(P) {
        return P.value;
      }));
      Array.isArray(y) || (y = [y]), r.push.apply(r, y.map(function(P) {
        return {
          type: typeof P == "string" ? Ee.literal : Ee.object,
          value: P
        };
      }));
    }
    if (ea(f)) {
      var w = f.options[h] || f.options.other;
      if (!w)
        throw new Bo(f.value, h, Object.keys(f.options), o);
      r.push.apply(r, mi(w.value, e, n, i, l));
      continue;
    }
    if (ta(f)) {
      var w = f.options["=".concat(h)];
      if (!w) {
        if (!Intl.PluralRules)
          throw new Fi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, an.MISSING_INTL_API, o);
        var C = n.getPluralRules(e, { type: f.pluralType }).select(h - (f.offset || 0));
        w = f.options[C] || f.options.other;
      }
      if (!w)
        throw new Bo(f.value, h, Object.keys(f.options), o);
      r.push.apply(r, mi(w.value, e, n, i, l, h - (f.offset || 0)));
      continue;
    }
  }
  return td(r);
}
function id(t, e) {
  return e ? G(G(G({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = G(G({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function ld(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = id(t[i], e[i]), n;
  }, G({}, t)) : t;
}
function vl(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function sd(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: pl(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, gl([void 0], n, !1)))();
    }, {
      cache: vl(t.number),
      strategy: wl.variadic
    }),
    getDateTimeFormat: pl(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, gl([void 0], n, !1)))();
    }, {
      cache: vl(t.dateTime),
      strategy: wl.variadic
    }),
    getPluralRules: pl(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, gl([void 0], n, !1)))();
    }, {
      cache: vl(t.pluralRules),
      strategy: wl.variadic
    })
  };
}
var od = (
  /** @class */
  function() {
    function t(e, n, i, l) {
      var s = this;
      if (n === void 0 && (n = t.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var r = s.formatToParts(o);
        if (r.length === 1)
          return r[0].value;
        var a = r.reduce(function(u, f) {
          return !u.length || f.type !== Ee.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value, u;
        }, []);
        return a.length <= 1 ? a[0] || "" : a;
      }, this.formatToParts = function(o) {
        return mi(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = t.__parse(e, {
          ignoreTag: l == null ? void 0 : l.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = ld(t.formats, i), this.formatters = l && l.formatters || sd(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      var n = Intl.NumberFormat.supportedLocalesOf(e);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
    }, t.__parse = X0, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function rd(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let i = t;
  for (let l = 0; l < n.length; l++)
    if (typeof i == "object") {
      if (l > 0) {
        const s = n.slice(l, n.length).join(".");
        if (s in i) {
          i = i[s];
          break;
        }
      }
      i = i[n[l]];
    } else
      i = void 0;
  return i;
}
const ut = {}, ad = (t, e, n) => n && (e in ut || (ut[e] = {}), t in ut[e] || (ut[e][t] = n), n), ha = (t, e) => {
  if (e == null)
    return;
  if (e in ut && t in ut[e])
    return ut[e][t];
  const n = qi(e);
  for (let i = 0; i < n.length; i++) {
    const l = n[i], s = fd(l, t);
    if (s)
      return ad(t, e, s);
  }
};
let gs;
const qn = Fn({});
function ud(t) {
  return gs[t] || null;
}
function da(t) {
  return t in gs;
}
function fd(t, e) {
  if (!da(t))
    return null;
  const n = ud(t);
  return rd(n, e);
}
function cd(t) {
  if (t == null)
    return;
  const e = qi(t);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (da(i))
      return i;
  }
}
function _d(t, ...e) {
  delete ut[t], qn.update((n) => (n[t] = g0.all([n[t] || {}, ...e]), n));
}
_n(
  [qn],
  ([t]) => Object.keys(t)
);
qn.subscribe((t) => gs = t);
const gi = {};
function hd(t, e) {
  gi[t].delete(e), gi[t].size === 0 && delete gi[t];
}
function ma(t) {
  return gi[t];
}
function dd(t) {
  return qi(t).map((e) => {
    const n = ma(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Kl(t) {
  return t == null ? !1 : qi(t).some(
    (e) => {
      var n;
      return (n = ma(e)) == null ? void 0 : n.size;
    }
  );
}
function md(t, e) {
  return Promise.all(
    e.map((i) => (hd(t, i), i().then((l) => l.default || l)))
  ).then((i) => _d(t, ...i));
}
const bn = {};
function ga(t) {
  if (!Kl(t))
    return t in bn ? bn[t] : Promise.resolve();
  const e = dd(t);
  return bn[t] = Promise.all(
    e.map(
      ([n, i]) => md(n, i)
    )
  ).then(() => {
    if (Kl(t))
      return ga(t);
    delete bn[t];
  }), bn[t];
}
const gd = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, bd = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: gd,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, pd = bd;
function un() {
  return pd;
}
const yl = Fn(!1);
var wd = Object.defineProperty, vd = Object.defineProperties, yd = Object.getOwnPropertyDescriptors, To = Object.getOwnPropertySymbols, Ed = Object.prototype.hasOwnProperty, kd = Object.prototype.propertyIsEnumerable, Ho = (t, e, n) => e in t ? wd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Sd = (t, e) => {
  for (var n in e || (e = {}))
    Ed.call(e, n) && Ho(t, n, e[n]);
  if (To)
    for (var n of To(e))
      kd.call(e, n) && Ho(t, n, e[n]);
  return t;
}, Cd = (t, e) => vd(t, yd(e));
let $l;
const ki = Fn(null);
function Po(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function qi(t, e = un().fallbackLocale) {
  const n = Po(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Po(e)])] : n;
}
function Dt() {
  return $l ?? void 0;
}
ki.subscribe((t) => {
  $l = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Ad = (t) => {
  if (t && cd(t) && Kl(t)) {
    const { loadingDelay: e } = un();
    let n;
    return typeof window < "u" && Dt() != null && e ? n = window.setTimeout(
      () => yl.set(!0),
      e
    ) : yl.set(!0), ga(t).then(() => {
      ki.set(t);
    }).finally(() => {
      clearTimeout(n), yl.set(!1);
    });
  }
  return ki.set(t);
}, zn = Cd(Sd({}, ki), {
  set: Ad
}), zi = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const l = JSON.stringify(i);
    return l in e ? e[l] : e[l] = t(i);
  };
};
var Bd = Object.defineProperty, Si = Object.getOwnPropertySymbols, ba = Object.prototype.hasOwnProperty, pa = Object.prototype.propertyIsEnumerable, No = (t, e, n) => e in t ? Bd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, bs = (t, e) => {
  for (var n in e || (e = {}))
    ba.call(e, n) && No(t, n, e[n]);
  if (Si)
    for (var n of Si(e))
      pa.call(e, n) && No(t, n, e[n]);
  return t;
}, dn = (t, e) => {
  var n = {};
  for (var i in t)
    ba.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Si)
    for (var i of Si(t))
      e.indexOf(i) < 0 && pa.call(t, i) && (n[i] = t[i]);
  return n;
};
const On = (t, e) => {
  const { formats: n } = un();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Td = zi(
  (t) => {
    var e = t, { locale: n, format: i } = e, l = dn(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (l = On("number", i)), new Intl.NumberFormat(n, l);
  }
), Hd = zi(
  (t) => {
    var e = t, { locale: n, format: i } = e, l = dn(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? l = On("date", i) : Object.keys(l).length === 0 && (l = On("date", "short")), new Intl.DateTimeFormat(n, l);
  }
), Pd = zi(
  (t) => {
    var e = t, { locale: n, format: i } = e, l = dn(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? l = On("time", i) : Object.keys(l).length === 0 && (l = On("time", "short")), new Intl.DateTimeFormat(n, l);
  }
), Nd = (t = {}) => {
  var e = t, {
    locale: n = Dt()
  } = e, i = dn(e, [
    "locale"
  ]);
  return Td(bs({ locale: n }, i));
}, Ld = (t = {}) => {
  var e = t, {
    locale: n = Dt()
  } = e, i = dn(e, [
    "locale"
  ]);
  return Hd(bs({ locale: n }, i));
}, Id = (t = {}) => {
  var e = t, {
    locale: n = Dt()
  } = e, i = dn(e, [
    "locale"
  ]);
  return Pd(bs({ locale: n }, i));
}, Md = zi(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Dt()) => new od(t, e, un().formats, {
    ignoreTag: un().ignoreTag
  })
), Od = (t, e = {}) => {
  var n, i, l, s;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: r,
    locale: a = Dt(),
    default: u
  } = o;
  if (a == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = ha(t, a);
  if (!f)
    f = (s = (l = (i = (n = un()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: a, id: t, defaultValue: u })) != null ? l : u) != null ? s : t;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!r)
    return f;
  let _ = f;
  try {
    _ = Md(f, a).format(r);
  } catch (h) {
    h instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      h.message
    );
  }
  return _;
}, Dd = (t, e) => Id(e).format(t), Rd = (t, e) => Ld(e).format(t), Ud = (t, e) => Nd(e).format(t), Fd = (t, e = Dt()) => ha(t, e);
_n([zn, qn], () => Od);
_n([zn], () => Dd);
_n([zn], () => Rd);
_n([zn], () => Ud);
_n([zn, qn], () => Fd);
const {
  SvelteComponent: qd,
  append: Te,
  attr: Et,
  detach: wa,
  element: kt,
  init: zd,
  insert: va,
  noop: Lo,
  safe_not_equal: jd,
  set_data: Ci,
  set_style: El,
  space: es,
  text: $t,
  toggle_class: Io
} = window.__gradio__svelte__internal, { onMount: Gd, createEventDispatcher: xd, getContext: Vd } = window.__gradio__svelte__internal;
function Mo(t) {
  let e, n, i, l, s = Sn(
    /*file_to_display*/
    t[2]
  ) + "", o, r, a, u, f = (
    /*file_to_display*/
    t[2].orig_name + ""
  ), _;
  return {
    c() {
      e = kt("div"), n = kt("span"), i = kt("div"), l = kt("progress"), o = $t(s), a = es(), u = kt("span"), _ = $t(f), El(l, "visibility", "hidden"), El(l, "height", "0"), El(l, "width", "0"), l.value = r = Sn(
        /*file_to_display*/
        t[2]
      ), Et(l, "max", "100"), Et(l, "class", "svelte-cr2edf"), Et(i, "class", "progress-bar svelte-cr2edf"), Et(u, "class", "file-name svelte-cr2edf"), Et(e, "class", "file svelte-cr2edf");
    },
    m(h, c) {
      va(h, e, c), Te(e, n), Te(n, i), Te(i, l), Te(l, o), Te(e, a), Te(e, u), Te(u, _);
    },
    p(h, c) {
      c & /*file_to_display*/
      4 && s !== (s = Sn(
        /*file_to_display*/
        h[2]
      ) + "") && Ci(o, s), c & /*file_to_display*/
      4 && r !== (r = Sn(
        /*file_to_display*/
        h[2]
      )) && (l.value = r), c & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      h[2].orig_name + "") && Ci(_, f);
    },
    d(h) {
      h && wa(e);
    }
  };
}
function Xd(t) {
  let e, n, i, l = (
    /*files_with_progress*/
    t[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    t[0].length > 1 ? "files" : "file"
  ), a, u, f, _ = (
    /*file_to_display*/
    t[2] && Mo(t)
  );
  return {
    c() {
      e = kt("div"), n = kt("span"), i = $t("Uploading "), s = $t(l), o = es(), a = $t(r), u = $t("..."), f = es(), _ && _.c(), Et(n, "class", "uploading svelte-cr2edf"), Et(e, "class", "wrap svelte-cr2edf"), Io(
        e,
        "progress",
        /*progress*/
        t[1]
      );
    },
    m(h, c) {
      va(h, e, c), Te(e, n), Te(n, i), Te(n, s), Te(n, o), Te(n, a), Te(n, u), Te(e, f), _ && _.m(e, null);
    },
    p(h, [c]) {
      c & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      h[0].length + "") && Ci(s, l), c & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      h[0].length > 1 ? "files" : "file") && Ci(a, r), /*file_to_display*/
      h[2] ? _ ? _.p(h, c) : (_ = Mo(h), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null), c & /*progress*/
      2 && Io(
        e,
        "progress",
        /*progress*/
        h[1]
      );
    },
    i: Lo,
    o: Lo,
    d(h) {
      h && wa(e), _ && _.d();
    }
  };
}
function Sn(t) {
  return t.progress * 100 / (t.size || 0) || 0;
}
function Wd(t) {
  let e = 0;
  return t.forEach((n) => {
    e += Sn(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / t.length).toFixed(2) + "%"), e / t.length;
}
function Zd(t, e, n) {
  let { upload_id: i } = e, { root: l } = e, { files: s } = e, o, r = !1, a, u, f = s.map((d) => ({ ...d, progress: 0 }));
  const _ = xd();
  function h(d, m) {
    n(0, f = f.map((b) => (b.orig_name === d && (b.progress += m), b)));
  }
  const c = Vd("EventSource_factory");
  return Gd(() => {
    o = c(new URL(`${l}/upload_progress?upload_id=${i}`)), o.onmessage = async function(d) {
      const m = JSON.parse(d.data);
      r || n(1, r = !0), m.msg === "done" ? (o.close(), _("done")) : (n(6, a = m), h(m.orig_name, m.chunk_size));
    };
  }), t.$$set = (d) => {
    "upload_id" in d && n(3, i = d.upload_id), "root" in d && n(4, l = d.root), "files" in d && n(5, s = d.files);
  }, t.$$.update = () => {
    t.$$.dirty & /*files_with_progress*/
    1 && Wd(f), t.$$.dirty & /*current_file_upload, files_with_progress*/
    65 && n(2, u = a || f[0]);
  }, [
    f,
    r,
    u,
    i,
    l,
    s,
    a
  ];
}
class Yd extends qd {
  constructor(e) {
    super(), zd(this, e, Zd, Xd, jd, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: Jd,
  append: Oo,
  attr: we,
  binding_callbacks: Qd,
  bubble: bt,
  check_outros: ya,
  create_component: Kd,
  create_slot: Ea,
  destroy_component: $d,
  detach: ji,
  element: ts,
  empty: ka,
  get_all_dirty_from_scope: Sa,
  get_slot_changes: Ca,
  group_outros: Aa,
  init: em,
  insert: Gi,
  listen: Ne,
  mount_component: tm,
  prevent_default: pt,
  run_all: nm,
  safe_not_equal: im,
  set_style: Ba,
  space: lm,
  stop_propagation: wt,
  toggle_class: ve,
  transition_in: ft,
  transition_out: Lt,
  update_slot_base: Ta
} = window.__gradio__svelte__internal, { createEventDispatcher: sm, tick: om, getContext: rm } = window.__gradio__svelte__internal;
function am(t) {
  let e, n, i, l, s, o, r, a, u, f;
  const _ = (
    /*#slots*/
    t[22].default
  ), h = Ea(
    _,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ts("button"), h && h.c(), n = lm(), i = ts("input"), we(i, "aria-label", "file upload"), we(i, "data-testid", "file-upload"), we(i, "type", "file"), we(
        i,
        "accept",
        /*accept_file_types*/
        t[12]
      ), i.multiple = l = /*file_count*/
      t[5] === "multiple" || void 0, we(i, "webkitdirectory", s = /*file_count*/
      t[5] === "directory" || void 0), we(i, "mozdirectory", o = /*file_count*/
      t[5] === "directory" || void 0), we(i, "class", "svelte-1aq8tno"), we(e, "tabindex", r = /*hidden*/
      t[7] ? -1 : 0), we(e, "class", "svelte-1aq8tno"), ve(
        e,
        "hidden",
        /*hidden*/
        t[7]
      ), ve(
        e,
        "center",
        /*center*/
        t[3]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        t[2]
      ), ve(
        e,
        "flex",
        /*flex*/
        t[4]
      ), Ba(e, "height", "100%");
    },
    m(c, d) {
      Gi(c, e, d), h && h.m(e, null), Oo(e, n), Oo(e, i), t[30](i), a = !0, u || (f = [
        Ne(
          i,
          "change",
          /*load_files_from_upload*/
          t[15]
        ),
        Ne(e, "drag", wt(pt(
          /*drag_handler*/
          t[23]
        ))),
        Ne(e, "dragstart", wt(pt(
          /*dragstart_handler*/
          t[24]
        ))),
        Ne(e, "dragend", wt(pt(
          /*dragend_handler*/
          t[25]
        ))),
        Ne(e, "dragover", wt(pt(
          /*dragover_handler*/
          t[26]
        ))),
        Ne(e, "dragenter", wt(pt(
          /*dragenter_handler*/
          t[27]
        ))),
        Ne(e, "dragleave", wt(pt(
          /*dragleave_handler*/
          t[28]
        ))),
        Ne(e, "drop", wt(pt(
          /*drop_handler*/
          t[29]
        ))),
        Ne(
          e,
          "click",
          /*open_file_upload*/
          t[9]
        ),
        Ne(
          e,
          "drop",
          /*loadFilesFromDrop*/
          t[16]
        ),
        Ne(
          e,
          "dragenter",
          /*updateDragging*/
          t[14]
        ),
        Ne(
          e,
          "dragleave",
          /*updateDragging*/
          t[14]
        )
      ], u = !0);
    },
    p(c, d) {
      h && h.p && (!a || d[0] & /*$$scope*/
      2097152) && Ta(
        h,
        _,
        c,
        /*$$scope*/
        c[21],
        a ? Ca(
          _,
          /*$$scope*/
          c[21],
          d,
          null
        ) : Sa(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!a || d[0] & /*accept_file_types*/
      4096) && we(
        i,
        "accept",
        /*accept_file_types*/
        c[12]
      ), (!a || d[0] & /*file_count*/
      32 && l !== (l = /*file_count*/
      c[5] === "multiple" || void 0)) && (i.multiple = l), (!a || d[0] & /*file_count*/
      32 && s !== (s = /*file_count*/
      c[5] === "directory" || void 0)) && we(i, "webkitdirectory", s), (!a || d[0] & /*file_count*/
      32 && o !== (o = /*file_count*/
      c[5] === "directory" || void 0)) && we(i, "mozdirectory", o), (!a || d[0] & /*hidden*/
      128 && r !== (r = /*hidden*/
      c[7] ? -1 : 0)) && we(e, "tabindex", r), (!a || d[0] & /*hidden*/
      128) && ve(
        e,
        "hidden",
        /*hidden*/
        c[7]
      ), (!a || d[0] & /*center*/
      8) && ve(
        e,
        "center",
        /*center*/
        c[3]
      ), (!a || d[0] & /*boundedheight*/
      4) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        c[2]
      ), (!a || d[0] & /*flex*/
      16) && ve(
        e,
        "flex",
        /*flex*/
        c[4]
      );
    },
    i(c) {
      a || (ft(h, c), a = !0);
    },
    o(c) {
      Lt(h, c), a = !1;
    },
    d(c) {
      c && ji(e), h && h.d(c), t[30](null), u = !1, nm(f);
    }
  };
}
function um(t) {
  let e, n, i = !/*hidden*/
  t[7] && Do(t);
  return {
    c() {
      i && i.c(), e = ka();
    },
    m(l, s) {
      i && i.m(l, s), Gi(l, e, s), n = !0;
    },
    p(l, s) {
      /*hidden*/
      l[7] ? i && (Aa(), Lt(i, 1, 1, () => {
        i = null;
      }), ya()) : i ? (i.p(l, s), s[0] & /*hidden*/
      128 && ft(i, 1)) : (i = Do(l), i.c(), ft(i, 1), i.m(e.parentNode, e));
    },
    i(l) {
      n || (ft(i), n = !0);
    },
    o(l) {
      Lt(i), n = !1;
    },
    d(l) {
      l && ji(e), i && i.d(l);
    }
  };
}
function fm(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[22].default
  ), r = Ea(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ts("button"), r && r.c(), we(e, "tabindex", n = /*hidden*/
      t[7] ? -1 : 0), we(e, "class", "svelte-1aq8tno"), ve(
        e,
        "hidden",
        /*hidden*/
        t[7]
      ), ve(
        e,
        "center",
        /*center*/
        t[3]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        t[2]
      ), ve(
        e,
        "flex",
        /*flex*/
        t[4]
      ), Ba(e, "height", "100%");
    },
    m(a, u) {
      Gi(a, e, u), r && r.m(e, null), i = !0, l || (s = Ne(
        e,
        "click",
        /*paste_clipboard*/
        t[8]
      ), l = !0);
    },
    p(a, u) {
      r && r.p && (!i || u[0] & /*$$scope*/
      2097152) && Ta(
        r,
        o,
        a,
        /*$$scope*/
        a[21],
        i ? Ca(
          o,
          /*$$scope*/
          a[21],
          u,
          null
        ) : Sa(
          /*$$scope*/
          a[21]
        ),
        null
      ), (!i || u[0] & /*hidden*/
      128 && n !== (n = /*hidden*/
      a[7] ? -1 : 0)) && we(e, "tabindex", n), (!i || u[0] & /*hidden*/
      128) && ve(
        e,
        "hidden",
        /*hidden*/
        a[7]
      ), (!i || u[0] & /*center*/
      8) && ve(
        e,
        "center",
        /*center*/
        a[3]
      ), (!i || u[0] & /*boundedheight*/
      4) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        a[2]
      ), (!i || u[0] & /*flex*/
      16) && ve(
        e,
        "flex",
        /*flex*/
        a[4]
      );
    },
    i(a) {
      i || (ft(r, a), i = !0);
    },
    o(a) {
      Lt(r, a), i = !1;
    },
    d(a) {
      a && ji(e), r && r.d(a), l = !1, s();
    }
  };
}
function Do(t) {
  let e, n;
  return e = new Yd({
    props: {
      root: (
        /*root*/
        t[6]
      ),
      upload_id: (
        /*upload_id*/
        t[10]
      ),
      files: (
        /*file_data*/
        t[11]
      )
    }
  }), {
    c() {
      Kd(e.$$.fragment);
    },
    m(i, l) {
      tm(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*root*/
      64 && (s.root = /*root*/
      i[6]), l[0] & /*upload_id*/
      1024 && (s.upload_id = /*upload_id*/
      i[10]), l[0] & /*file_data*/
      2048 && (s.files = /*file_data*/
      i[11]), e.$set(s);
    },
    i(i) {
      n || (ft(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      $d(e, i);
    }
  };
}
function cm(t) {
  let e, n, i, l;
  const s = [fm, um, am], o = [];
  function r(a, u) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] ? 1 : 2
      )
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = ka();
    },
    m(a, u) {
      o[e].m(a, u), Gi(a, i, u), l = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (Aa(), Lt(o[f], 1, 1, () => {
        o[f] = null;
      }), ya(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), ft(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (ft(n), l = !0);
    },
    o(a) {
      Lt(n), l = !1;
    },
    d(a) {
      a && ji(i), o[e].d(a);
    }
  };
}
function Ro(t) {
  let e, n = t[0], i = 1;
  for (; i < t.length; ) {
    const l = t[i], s = t[i + 1];
    if (i += 2, (l === "optionalAccess" || l === "optionalCall") && n == null)
      return;
    l === "access" || l === "optionalAccess" ? (e = n, n = s(n)) : (l === "call" || l === "optionalCall") && (n = s((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function _m(t, e, n) {
  if (!t || t === "*" || t === "file/*")
    return !0;
  let i;
  if (typeof t == "string")
    i = t.split(",").map((l) => l.trim());
  else if (Array.isArray(t))
    i = t;
  else
    return !1;
  return i.includes(e) || i.some((l) => {
    const [s] = l.split("/").map((o) => o.trim());
    return l.endsWith("/*") && n.startsWith(s + "/");
  });
}
function hm(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { filetype: s = null } = e, { dragging: o = !1 } = e, { boundedheight: r = !0 } = e, { center: a = !0 } = e, { flex: u = !0 } = e, { file_count: f = "single" } = e, { disable_click: _ = !1 } = e, { root: h } = e, { hidden: c = !1 } = e, { format: d = "file" } = e, { uploading: m = !1 } = e, b, p, y;
  const w = rm("upload_files");
  let C;
  const P = sm();
  function E() {
    n(17, o = !o);
  }
  function N() {
    navigator.clipboard.read().then(async (k) => {
      for (let I = 0; I < k.length; I++) {
        const g = k[I].types.find((T) => T.startsWith("image/"));
        if (g) {
          k[I].getType(g).then(async (T) => {
            const ae = new File([T], `clipboard.${g.replace("image/", "")}`);
            await B([ae]);
          });
          break;
        }
      }
    });
  }
  function v() {
    _ || (n(13, C.value = "", C), C.click());
  }
  async function A(k) {
    await om(), n(10, b = Math.random().toString(36).substring(2, 15)), n(1, m = !0);
    const I = await Zh(k, h, b, w);
    return P("load", f === "single" ? Ro([I, "optionalAccess", (g) => g[0]]) : I), n(1, m = !1), I || [];
  }
  async function B(k) {
    if (!k.length)
      return;
    let I = k.map((g) => new File([g], g.name));
    return n(11, p = await Yh(I)), await A(p);
  }
  async function L(k) {
    const I = k.target;
    if (I.files)
      if (d != "blob")
        await B(Array.from(I.files));
      else {
        if (f === "single") {
          P("load", I.files[0]);
          return;
        }
        P("load", I.files);
      }
  }
  async function x(k) {
    if (n(17, o = !1), !Ro([k, "access", (g) => g.dataTransfer, "optionalAccess", (g) => g.files]))
      return;
    const I = Array.from(k.dataTransfer.files).filter((g) => {
      const T = "." + g.name.split(".").pop();
      return T && _m(s, T, g.type) || (T && Array.isArray(s) ? s.includes(T) : T === s) ? !0 : (P("error", `Invalid file type only ${s} allowed.`), !1);
    });
    await B(I);
  }
  function J(k) {
    bt.call(this, t, k);
  }
  function ce(k) {
    bt.call(this, t, k);
  }
  function te(k) {
    bt.call(this, t, k);
  }
  function ke(k) {
    bt.call(this, t, k);
  }
  function ye(k) {
    bt.call(this, t, k);
  }
  function me(k) {
    bt.call(this, t, k);
  }
  function _e(k) {
    bt.call(this, t, k);
  }
  function S(k) {
    Qd[k ? "unshift" : "push"](() => {
      C = k, n(13, C);
    });
  }
  return t.$$set = (k) => {
    "filetype" in k && n(0, s = k.filetype), "dragging" in k && n(17, o = k.dragging), "boundedheight" in k && n(2, r = k.boundedheight), "center" in k && n(3, a = k.center), "flex" in k && n(4, u = k.flex), "file_count" in k && n(5, f = k.file_count), "disable_click" in k && n(18, _ = k.disable_click), "root" in k && n(6, h = k.root), "hidden" in k && n(7, c = k.hidden), "format" in k && n(19, d = k.format), "uploading" in k && n(1, m = k.uploading), "$$scope" in k && n(21, l = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*filetype*/
    1 && (s == null || typeof s == "string" ? n(12, y = s) : (n(0, s = s.map((k) => k.startsWith(".") ? k : k + "/*")), n(12, y = s.join(", "))));
  }, [
    s,
    m,
    r,
    a,
    u,
    f,
    h,
    c,
    N,
    v,
    b,
    p,
    y,
    C,
    E,
    L,
    x,
    o,
    _,
    d,
    B,
    l,
    i,
    J,
    ce,
    te,
    ke,
    ye,
    me,
    _e,
    S
  ];
}
class dm extends Jd {
  constructor(e) {
    super(), em(
      this,
      e,
      hm,
      cm,
      im,
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
  SvelteComponent: mm,
  append: Uo,
  attr: pe,
  detach: gm,
  init: bm,
  insert: pm,
  noop: kl,
  safe_not_equal: wm,
  set_style: st,
  svg_element: Sl
} = window.__gradio__svelte__internal;
function vm(t) {
  let e, n, i;
  return {
    c() {
      e = Sl("svg"), n = Sl("line"), i = Sl("line"), pe(n, "x1", "4"), pe(n, "y1", "12"), pe(n, "x2", "20"), pe(n, "y2", "12"), st(n, "fill", "none"), st(n, "stroke-width", "2px"), pe(i, "x1", "12"), pe(i, "y1", "4"), pe(i, "x2", "12"), pe(i, "y2", "20"), st(i, "fill", "none"), st(i, "stroke-width", "2px"), pe(e, "width", "100%"), pe(e, "height", "100%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "version", "1.1"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), pe(e, "xml:space", "preserve"), pe(e, "stroke", "currentColor"), st(e, "fill-rule", "evenodd"), st(e, "clip-rule", "evenodd"), st(e, "stroke-linecap", "round"), st(e, "stroke-linejoin", "round");
    },
    m(l, s) {
      pm(l, e, s), Uo(e, n), Uo(e, i);
    },
    p: kl,
    i: kl,
    o: kl,
    d(l) {
      l && gm(e);
    }
  };
}
class ym extends mm {
  constructor(e) {
    super(), bm(this, e, null, vm, wm, {});
  }
}
const {
  SvelteComponent: Em,
  append: Fo,
  attr: Cl,
  bubble: qo,
  create_component: km,
  destroy_component: Sm,
  detach: Ha,
  element: zo,
  init: Cm,
  insert: Pa,
  listen: Al,
  mount_component: Am,
  run_all: Bm,
  safe_not_equal: Tm,
  set_data: Hm,
  set_input_value: jo,
  space: Pm,
  text: Nm,
  transition_in: Lm,
  transition_out: Im
} = window.__gradio__svelte__internal, { createEventDispatcher: Mm, afterUpdate: Om } = window.__gradio__svelte__internal;
function Dm(t) {
  let e;
  return {
    c() {
      e = Nm(
        /*label*/
        t[1]
      );
    },
    m(n, i) {
      Pa(n, e, i);
    },
    p(n, i) {
      i & /*label*/
      2 && Hm(
        e,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Ha(e);
    }
  };
}
function Rm(t) {
  let e, n, i, l, s, o, r;
  return n = new vr({
    props: {
      show_label: (
        /*show_label*/
        t[4]
      ),
      info: (
        /*info*/
        t[2]
      ),
      $$slots: { default: [Dm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = zo("label"), km(n.$$.fragment), i = Pm(), l = zo("input"), Cl(l, "type", "color"), l.disabled = /*disabled*/
      t[3], Cl(l, "class", "svelte-16l8u73"), Cl(e, "class", "block");
    },
    m(a, u) {
      Pa(a, e, u), Am(n, e, null), Fo(e, i), Fo(e, l), jo(
        l,
        /*value*/
        t[0]
      ), s = !0, o || (r = [
        Al(
          l,
          "input",
          /*input_input_handler*/
          t[8]
        ),
        Al(
          l,
          "focus",
          /*focus_handler*/
          t[6]
        ),
        Al(
          l,
          "blur",
          /*blur_handler*/
          t[7]
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
      2050 && (f.$$scope = { dirty: u, ctx: a }), n.$set(f), (!s || u & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), u & /*value*/
      1 && jo(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (Lm(n.$$.fragment, a), s = !0);
    },
    o(a) {
      Im(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Ha(e), Sm(n), o = !1, Bm(r);
    }
  };
}
function Um(t, e, n) {
  let { value: i = "#000000" } = e, { value_is_output: l = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const u = Mm();
  function f() {
    u("change", i), l || u("input");
  }
  Om(() => {
    n(5, l = !1);
  });
  function _(d) {
    qo.call(this, t, d);
  }
  function h(d) {
    qo.call(this, t, d);
  }
  function c() {
    i = this.value, n(0, i);
  }
  return t.$$set = (d) => {
    "value" in d && n(0, i = d.value), "value_is_output" in d && n(5, l = d.value_is_output), "label" in d && n(1, s = d.label), "info" in d && n(2, o = d.info), "disabled" in d && n(3, r = d.disabled), "show_label" in d && n(4, a = d.show_label);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    1 && f();
  }, [
    i,
    s,
    o,
    r,
    a,
    l,
    _,
    h,
    c
  ];
}
class Fm extends Em {
  constructor(e) {
    super(), Cm(this, e, Um, Rm, Tm, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
const {
  SvelteComponent: qm,
  append: Na,
  attr: ie,
  bubble: zm,
  check_outros: jm,
  create_slot: La,
  detach: jn,
  element: xi,
  empty: Gm,
  get_all_dirty_from_scope: Ia,
  get_slot_changes: Ma,
  group_outros: xm,
  init: Vm,
  insert: Gn,
  listen: Xm,
  safe_not_equal: Wm,
  set_style: Be,
  space: Oa,
  src_url_equal: Ai,
  toggle_class: en,
  transition_in: Bi,
  transition_out: Ti,
  update_slot_base: Da
} = window.__gradio__svelte__internal;
function Zm(t) {
  let e, n, i, l, s, o, r = (
    /*icon*/
    t[7] && Go(t)
  );
  const a = (
    /*#slots*/
    t[12].default
  ), u = La(
    a,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      e = xi("button"), r && r.c(), n = Oa(), u && u.c(), ie(e, "class", i = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), ie(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), e.disabled = /*disabled*/
      t[8], en(e, "hidden", !/*visible*/
      t[2]), Be(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), Be(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), Be(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(f, _) {
      Gn(f, e, _), r && r.m(e, null), Na(e, n), u && u.m(e, null), l = !0, s || (o = Xm(
        e,
        "click",
        /*click_handler*/
        t[13]
      ), s = !0);
    },
    p(f, _) {
      /*icon*/
      f[7] ? r ? r.p(f, _) : (r = Go(f), r.c(), r.m(e, n)) : r && (r.d(1), r = null), u && u.p && (!l || _ & /*$$scope*/
      2048) && Da(
        u,
        a,
        f,
        /*$$scope*/
        f[11],
        l ? Ma(
          a,
          /*$$scope*/
          f[11],
          _,
          null
        ) : Ia(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && ie(e, "class", i), (!l || _ & /*elem_id*/
      1) && ie(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!l || _ & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && en(e, "hidden", !/*visible*/
      f[2]), _ & /*scale*/
      512 && Be(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), _ & /*scale*/
      512 && Be(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Be(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      l || (Bi(u, f), l = !0);
    },
    o(f) {
      Ti(u, f), l = !1;
    },
    d(f) {
      f && jn(e), r && r.d(), u && u.d(f), s = !1, o();
    }
  };
}
function Ym(t) {
  let e, n, i, l, s = (
    /*icon*/
    t[7] && xo(t)
  );
  const o = (
    /*#slots*/
    t[12].default
  ), r = La(
    o,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      e = xi("a"), s && s.c(), n = Oa(), r && r.c(), ie(
        e,
        "href",
        /*link*/
        t[6]
      ), ie(e, "rel", "noopener noreferrer"), ie(
        e,
        "aria-disabled",
        /*disabled*/
        t[8]
      ), ie(e, "class", i = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), ie(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), en(e, "hidden", !/*visible*/
      t[2]), en(
        e,
        "disabled",
        /*disabled*/
        t[8]
      ), Be(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), Be(
        e,
        "pointer-events",
        /*disabled*/
        t[8] ? "none" : null
      ), Be(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), Be(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(a, u) {
      Gn(a, e, u), s && s.m(e, null), Na(e, n), r && r.m(e, null), l = !0;
    },
    p(a, u) {
      /*icon*/
      a[7] ? s ? s.p(a, u) : (s = xo(a), s.c(), s.m(e, n)) : s && (s.d(1), s = null), r && r.p && (!l || u & /*$$scope*/
      2048) && Da(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        l ? Ma(
          o,
          /*$$scope*/
          a[11],
          u,
          null
        ) : Ia(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || u & /*link*/
      64) && ie(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || u & /*disabled*/
      256) && ie(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || u & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ie(e, "class", i), (!l || u & /*elem_id*/
      1) && ie(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || u & /*size, variant, elem_classes, visible*/
      30) && en(e, "hidden", !/*visible*/
      a[2]), (!l || u & /*size, variant, elem_classes, disabled*/
      282) && en(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), u & /*scale*/
      512 && Be(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), u & /*disabled*/
      256 && Be(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), u & /*scale*/
      512 && Be(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Be(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (Bi(r, a), l = !0);
    },
    o(a) {
      Ti(r, a), l = !1;
    },
    d(a) {
      a && jn(e), s && s.d(), r && r.d(a);
    }
  };
}
function Go(t) {
  let e, n, i;
  return {
    c() {
      e = xi("img"), ie(e, "class", "button-icon svelte-8huxfn"), Ai(e.src, n = /*icon*/
      t[7].url) || ie(e, "src", n), ie(e, "alt", i = `${/*value*/
      t[5]} icon`);
    },
    m(l, s) {
      Gn(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !Ai(e.src, n = /*icon*/
      l[7].url) && ie(e, "src", n), s & /*value*/
      32 && i !== (i = `${/*value*/
      l[5]} icon`) && ie(e, "alt", i);
    },
    d(l) {
      l && jn(e);
    }
  };
}
function xo(t) {
  let e, n, i;
  return {
    c() {
      e = xi("img"), ie(e, "class", "button-icon svelte-8huxfn"), Ai(e.src, n = /*icon*/
      t[7].url) || ie(e, "src", n), ie(e, "alt", i = `${/*value*/
      t[5]} icon`);
    },
    m(l, s) {
      Gn(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !Ai(e.src, n = /*icon*/
      l[7].url) && ie(e, "src", n), s & /*value*/
      32 && i !== (i = `${/*value*/
      l[5]} icon`) && ie(e, "alt", i);
    },
    d(l) {
      l && jn(e);
    }
  };
}
function Jm(t) {
  let e, n, i, l;
  const s = [Ym, Zm], o = [];
  function r(a, u) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Gm();
    },
    m(a, u) {
      o[e].m(a, u), Gn(a, i, u), l = !0;
    },
    p(a, [u]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (xm(), Ti(o[f], 1, 1, () => {
        o[f] = null;
      }), jm(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), Bi(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (Bi(n), l = !0);
    },
    o(a) {
      Ti(n), l = !1;
    },
    d(a) {
      a && jn(i), o[e].d(a);
    }
  };
}
function Qm(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: u = "lg" } = e, { value: f = null } = e, { link: _ = null } = e, { icon: h = null } = e, { disabled: c = !1 } = e, { scale: d = null } = e, { min_width: m = void 0 } = e;
  function b(p) {
    zm.call(this, t, p);
  }
  return t.$$set = (p) => {
    "elem_id" in p && n(0, s = p.elem_id), "elem_classes" in p && n(1, o = p.elem_classes), "visible" in p && n(2, r = p.visible), "variant" in p && n(3, a = p.variant), "size" in p && n(4, u = p.size), "value" in p && n(5, f = p.value), "link" in p && n(6, _ = p.link), "icon" in p && n(7, h = p.icon), "disabled" in p && n(8, c = p.disabled), "scale" in p && n(9, d = p.scale), "min_width" in p && n(10, m = p.min_width), "$$scope" in p && n(11, l = p.$$scope);
  }, [
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    h,
    c,
    d,
    m,
    l,
    i,
    b
  ];
}
class Vo extends qm {
  constructor(e) {
    super(), Vm(this, e, Qm, Jm, Wm, {
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
  SvelteComponent: Km,
  add_render_callback: Ra,
  append: ei,
  attr: Ie,
  binding_callbacks: Xo,
  check_outros: $m,
  create_bidirectional_transition: Wo,
  destroy_each: e1,
  detach: Bn,
  element: Hi,
  empty: t1,
  ensure_array_like: Zo,
  group_outros: n1,
  init: i1,
  insert: Tn,
  listen: ns,
  prevent_default: l1,
  run_all: s1,
  safe_not_equal: o1,
  set_data: r1,
  set_style: jt,
  space: is,
  text: a1,
  toggle_class: xe,
  transition_in: Bl,
  transition_out: Yo
} = window.__gradio__svelte__internal, { createEventDispatcher: u1 } = window.__gradio__svelte__internal;
function Jo(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i;
}
function Qo(t) {
  let e, n, i, l, s, o = Zo(
    /*filtered_indices*/
    t[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Ko(Jo(t, o, a));
  return {
    c() {
      e = Hi("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ie(e, "class", "options svelte-yuohum"), Ie(e, "role", "listbox"), jt(
        e,
        "bottom",
        /*bottom*/
        t[9]
      ), jt(e, "max-height", `calc(${/*max_height*/
      t[10]}px - var(--window-padding))`), jt(
        e,
        "width",
        /*input_width*/
        t[8] + "px"
      );
    },
    m(a, u) {
      Tn(a, e, u);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      t[20](e), i = !0, l || (s = ns(e, "mousedown", l1(
        /*mousedown_handler*/
        t[19]
      )), l = !0);
    },
    p(a, u) {
      if (u & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = Zo(
          /*filtered_indices*/
          a[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Jo(a, o, f);
          r[f] ? r[f].p(_, u) : (r[f] = Ko(_), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = o.length;
      }
      u & /*bottom*/
      512 && jt(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), u & /*max_height*/
      1024 && jt(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), u & /*input_width*/
      256 && jt(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      i || (a && Ra(() => {
        i && (n || (n = Wo(e, xs, { duration: 200, y: 5 }, !0)), n.run(1));
      }), i = !0);
    },
    o(a) {
      a && (n || (n = Wo(e, xs, { duration: 200, y: 5 }, !1)), n.run(0)), i = !1;
    },
    d(a) {
      a && Bn(e), e1(r, a), t[20](null), a && n && n.end(), l = !1, s();
    }
  };
}
function Ko(t) {
  let e, n, i, l = (
    /*choices*/
    t[0][
      /*index*/
      t[24]
    ][0] + ""
  ), s, o, r, a, u;
  return {
    c() {
      e = Hi("li"), n = Hi("span"), n.textContent = "✓", i = is(), s = a1(l), o = is(), Ie(n, "class", "inner-item svelte-yuohum"), xe(n, "hide", !/*selected_indices*/
      t[4].includes(
        /*index*/
        t[24]
      )), Ie(e, "class", "item svelte-yuohum"), Ie(e, "data-index", r = /*index*/
      t[24]), Ie(e, "aria-label", a = /*choices*/
      t[0][
        /*index*/
        t[24]
      ][0]), Ie(e, "data-testid", "dropdown-option"), Ie(e, "role", "option"), Ie(e, "aria-selected", u = /*selected_indices*/
      t[4].includes(
        /*index*/
        t[24]
      )), xe(
        e,
        "selected",
        /*selected_indices*/
        t[4].includes(
          /*index*/
          t[24]
        )
      ), xe(
        e,
        "active",
        /*index*/
        t[24] === /*active_index*/
        t[5]
      ), xe(
        e,
        "bg-gray-100",
        /*index*/
        t[24] === /*active_index*/
        t[5]
      ), xe(
        e,
        "dark:bg-gray-600",
        /*index*/
        t[24] === /*active_index*/
        t[5]
      );
    },
    m(f, _) {
      Tn(f, e, _), ei(e, n), ei(e, i), ei(e, s), ei(e, o);
    },
    p(f, _) {
      _ & /*selected_indices, filtered_indices*/
      18 && xe(n, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[24]
      )), _ & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      f[0][
        /*index*/
        f[24]
      ][0] + "") && r1(s, l), _ & /*filtered_indices*/
      2 && r !== (r = /*index*/
      f[24]) && Ie(e, "data-index", r), _ & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      f[0][
        /*index*/
        f[24]
      ][0]) && Ie(e, "aria-label", a), _ & /*selected_indices, filtered_indices*/
      18 && u !== (u = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[24]
      )) && Ie(e, "aria-selected", u), _ & /*selected_indices, filtered_indices*/
      18 && xe(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[24]
        )
      ), _ & /*filtered_indices, active_index*/
      34 && xe(
        e,
        "active",
        /*index*/
        f[24] === /*active_index*/
        f[5]
      ), _ & /*filtered_indices, active_index*/
      34 && xe(
        e,
        "bg-gray-100",
        /*index*/
        f[24] === /*active_index*/
        f[5]
      ), _ & /*filtered_indices, active_index*/
      34 && xe(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[24] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && Bn(e);
    }
  };
}
function f1(t) {
  let e, n, i, l, s;
  Ra(
    /*onwindowresize*/
    t[17]
  );
  let o = (
    /*show_options*/
    t[2] && !/*disabled*/
    t[3] && Qo(t)
  );
  return {
    c() {
      e = Hi("div"), n = is(), o && o.c(), i = t1(), Ie(e, "class", "reference");
    },
    m(r, a) {
      Tn(r, e, a), t[18](e), Tn(r, n, a), o && o.m(r, a), Tn(r, i, a), l || (s = [
        ns(
          window,
          "scroll",
          /*scroll_listener*/
          t[12]
        ),
        ns(
          window,
          "resize",
          /*onwindowresize*/
          t[17]
        )
      ], l = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && Bl(o, 1)) : (o = Qo(r), o.c(), Bl(o, 1), o.m(i.parentNode, i)) : o && (n1(), Yo(o, 1, 1, () => {
        o = null;
      }), $m());
    },
    i(r) {
      Bl(o);
    },
    o(r) {
      Yo(o);
    },
    d(r) {
      r && (Bn(e), Bn(n), Bn(i)), t[18](null), o && o.d(r), l = !1, s1(s);
    }
  };
}
function ti(t) {
  let e, n = t[0], i = 1;
  for (; i < t.length; ) {
    const l = t[i], s = t[i + 1];
    if (i += 2, (l === "optionalAccess" || l === "optionalCall") && n == null)
      return;
    l === "access" || l === "optionalAccess" ? (e = n, n = s(n)) : (l === "call" || l === "optionalCall") && (n = s((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function c1(t, e, n) {
  let { choices: i } = e, { filtered_indices: l } = e, { show_options: s = !1 } = e, { disabled: o = !1 } = e, { selected_indices: r = [] } = e, { active_index: a = null } = e, u, f, _, h, c, d, m, b, p;
  function y() {
    const { top: B, bottom: L } = c.getBoundingClientRect();
    n(14, u = B), n(15, f = p - L);
  }
  let w = null;
  function C() {
    s && (w !== null && clearTimeout(w), w = setTimeout(
      () => {
        y(), w = null;
      },
      10
    ));
  }
  const P = u1();
  function E() {
    n(11, p = window.innerHeight);
  }
  function N(B) {
    Xo[B ? "unshift" : "push"](() => {
      c = B, n(6, c);
    });
  }
  const v = (B) => P("change", B);
  function A(B) {
    Xo[B ? "unshift" : "push"](() => {
      d = B, n(7, d);
    });
  }
  return t.$$set = (B) => {
    "choices" in B && n(0, i = B.choices), "filtered_indices" in B && n(1, l = B.filtered_indices), "show_options" in B && n(2, s = B.show_options), "disabled" in B && n(3, o = B.disabled), "selected_indices" in B && n(4, r = B.selected_indices), "active_index" in B && n(5, a = B.active_index);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*show_options, refElement, listElement, selected_indices, distance_from_bottom, distance_from_top, input_height*/
    114900) {
      if (s && c) {
        if (d && r.length > 0) {
          let L = d.querySelectorAll("li");
          for (const x of Array.from(L))
            if (x.getAttribute("data-index") === r[0].toString()) {
              ti([
                d,
                "optionalAccess",
                (J) => J.scrollTo,
                "optionalCall",
                (J) => J(0, x.offsetTop)
              ]);
              break;
            }
        }
        y();
        const B = ti([
          c,
          "access",
          (L) => L.parentElement,
          "optionalAccess",
          (L) => L.getBoundingClientRect,
          "call",
          (L) => L()
        ]);
        n(16, _ = ti([B, "optionalAccess", (L) => L.height]) || 0), n(8, h = ti([B, "optionalAccess", (L) => L.width]) || 0);
      }
      f > u ? (n(10, b = f), n(9, m = null)) : (n(9, m = `${f + _}px`), n(10, b = u - _));
    }
  }, [
    i,
    l,
    s,
    o,
    r,
    a,
    c,
    d,
    h,
    m,
    b,
    p,
    C,
    P,
    u,
    f,
    _,
    E,
    N,
    v,
    A
  ];
}
class _1 extends Km {
  constructor(e) {
    super(), i1(this, e, c1, f1, o1, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function h1(t, e) {
  return (t % e + e) % e;
}
function $o(t, e) {
  return t.reduce((n, i, l) => ((!e || i[0].toLowerCase().includes(e.toLowerCase())) && n.push(l), n), []);
}
function d1(t, e, n) {
  t("change", e), n || t("input");
}
function m1(t, e, n) {
  if (t.key === "Escape")
    return [!1, e];
  if ((t.key === "ArrowDown" || t.key === "ArrowUp") && n.length >= 0)
    if (e === null)
      e = t.key === "ArrowDown" ? n[0] : n[n.length - 1];
    else {
      const i = n.indexOf(e), l = t.key === "ArrowUp" ? -1 : 1;
      e = n[h1(i + l, n.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: g1,
  append: vt,
  attr: Le,
  binding_callbacks: b1,
  check_outros: p1,
  create_component: ls,
  destroy_component: ss,
  detach: ps,
  element: Vt,
  group_outros: w1,
  init: v1,
  insert: ws,
  listen: pn,
  mount_component: os,
  run_all: y1,
  safe_not_equal: E1,
  set_data: k1,
  set_input_value: er,
  space: Tl,
  text: S1,
  toggle_class: Gt,
  transition_in: Xt,
  transition_out: Cn
} = window.__gradio__svelte__internal, { onMount: C1 } = window.__gradio__svelte__internal, { createEventDispatcher: A1, afterUpdate: B1 } = window.__gradio__svelte__internal;
function T1(t) {
  let e;
  return {
    c() {
      e = S1(
        /*label*/
        t[0]
      );
    },
    m(n, i) {
      ws(n, e, i);
    },
    p(n, i) {
      i[0] & /*label*/
      1 && k1(
        e,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && ps(e);
    }
  };
}
function tr(t) {
  let e, n, i;
  return n = new hc({}), {
    c() {
      e = Vt("div"), ls(n.$$.fragment), Le(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, s) {
      ws(l, e, s), os(n, e, null), i = !0;
    },
    i(l) {
      i || (Xt(n.$$.fragment, l), i = !0);
    },
    o(l) {
      Cn(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && ps(e), ss(n);
    }
  };
}
function H1(t) {
  let e, n, i, l, s, o, r, a, u, f, _, h, c, d;
  n = new vr({
    props: {
      show_label: (
        /*show_label*/
        t[4]
      ),
      info: (
        /*info*/
        t[1]
      ),
      $$slots: { default: [T1] },
      $$scope: { ctx: t }
    }
  });
  let m = !/*disabled*/
  t[3] && tr();
  return _ = new _1({
    props: {
      show_options: (
        /*show_options*/
        t[12]
      ),
      choices: (
        /*choices*/
        t[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        t[10]
      ),
      disabled: (
        /*disabled*/
        t[3]
      ),
      selected_indices: (
        /*selected_index*/
        t[11] === null ? [] : [
          /*selected_index*/
          t[11]
        ]
      ),
      active_index: (
        /*active_index*/
        t[14]
      )
    }
  }), _.$on(
    "change",
    /*handle_option_selected*/
    t[16]
  ), {
    c() {
      e = Vt("div"), ls(n.$$.fragment), i = Tl(), l = Vt("div"), s = Vt("div"), o = Vt("div"), r = Vt("input"), u = Tl(), m && m.c(), f = Tl(), ls(_.$$.fragment), Le(r, "role", "listbox"), Le(r, "aria-controls", "dropdown-options"), Le(
        r,
        "aria-expanded",
        /*show_options*/
        t[12]
      ), Le(
        r,
        "aria-label",
        /*label*/
        t[0]
      ), Le(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      t[3], Le(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      t[7], Gt(r, "subdued", !/*choices_names*/
      t[13].includes(
        /*input_text*/
        t[9]
      ) && !/*allow_custom_value*/
      t[6]), Le(o, "class", "secondary-wrap svelte-1m1zvyj"), Le(s, "class", "wrap-inner svelte-1m1zvyj"), Gt(
        s,
        "show_options",
        /*show_options*/
        t[12]
      ), Le(l, "class", "wrap svelte-1m1zvyj"), Le(e, "class", "svelte-1m1zvyj"), Gt(
        e,
        "container",
        /*container*/
        t[5]
      );
    },
    m(b, p) {
      ws(b, e, p), os(n, e, null), vt(e, i), vt(e, l), vt(l, s), vt(s, o), vt(o, r), er(
        r,
        /*input_text*/
        t[9]
      ), t[29](r), vt(o, u), m && m.m(o, null), vt(l, f), os(_, l, null), h = !0, c || (d = [
        pn(
          r,
          "input",
          /*input_input_handler*/
          t[28]
        ),
        pn(
          r,
          "keydown",
          /*handle_key_down*/
          t[19]
        ),
        pn(
          r,
          "keyup",
          /*keyup_handler*/
          t[30]
        ),
        pn(
          r,
          "blur",
          /*handle_blur*/
          t[18]
        ),
        pn(
          r,
          "focus",
          /*handle_focus*/
          t[17]
        )
      ], c = !0);
    },
    p(b, p) {
      const y = {};
      p[0] & /*show_label*/
      16 && (y.show_label = /*show_label*/
      b[4]), p[0] & /*info*/
      2 && (y.info = /*info*/
      b[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      4 && (y.$$scope = { dirty: p, ctx: b }), n.$set(y), (!h || p[0] & /*show_options*/
      4096) && Le(
        r,
        "aria-expanded",
        /*show_options*/
        b[12]
      ), (!h || p[0] & /*label*/
      1) && Le(
        r,
        "aria-label",
        /*label*/
        b[0]
      ), (!h || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      b[3]), (!h || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      b[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      b[9] && er(
        r,
        /*input_text*/
        b[9]
      ), (!h || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Gt(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? m && (w1(), Cn(m, 1, 1, () => {
        m = null;
      }), p1()) : m ? p[0] & /*disabled*/
      8 && Xt(m, 1) : (m = tr(), m.c(), Xt(m, 1), m.m(o, null)), (!h || p[0] & /*show_options*/
      4096) && Gt(
        s,
        "show_options",
        /*show_options*/
        b[12]
      );
      const w = {};
      p[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      b[12]), p[0] & /*choices*/
      4 && (w.choices = /*choices*/
      b[2]), p[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      b[10]), p[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      b[3]), p[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      b[11] === null ? [] : [
        /*selected_index*/
        b[11]
      ]), p[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      b[14]), _.$set(w), (!h || p[0] & /*container*/
      32) && Gt(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      h || (Xt(n.$$.fragment, b), Xt(m), Xt(_.$$.fragment, b), h = !0);
    },
    o(b) {
      Cn(n.$$.fragment, b), Cn(m), Cn(_.$$.fragment, b), h = !1;
    },
    d(b) {
      b && ps(e), ss(n), t[29](null), m && m.d(), ss(_), c = !1, y1(d);
    }
  };
}
function P1(t, e, n) {
  let { label: i } = e, { info: l = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, u, { disabled: f = !1 } = e, { show_label: _ } = e, { container: h = !0 } = e, { allow_custom_value: c = !1 } = e, { filterable: d = !0 } = e, m, b = !1, p, y, w = "", C = "", P = !1, E = [], N = null, v = null, A;
  const B = A1();
  s ? (A = a.map((S) => S[1]).indexOf(s), v = A, v === -1 ? (o = s, v = null) : ([w, o] = a[v], C = w), x()) : a.length > 0 && (A = 0, v = 0, [w, s] = a[v], o = s, C = w);
  function L() {
    n(13, p = a.map((S) => S[0])), n(24, y = a.map((S) => S[1]));
  }
  function x() {
    L(), s === void 0 || Array.isArray(s) && s.length === 0 ? (n(9, w = ""), n(11, v = null)) : y.includes(s) ? (n(9, w = p[y.indexOf(s)]), n(11, v = y.indexOf(s))) : c ? (n(9, w = s), n(11, v = null)) : (n(9, w = ""), n(11, v = null)), n(27, A = v);
  }
  function J(S) {
    if (n(11, v = parseInt(S.detail.target.dataset.index)), isNaN(v)) {
      n(11, v = null);
      return;
    }
    n(12, b = !1), n(14, N = null), m.blur();
  }
  function ce(S) {
    n(10, E = a.map((k, I) => I)), n(12, b = !0), B("focus");
  }
  function te() {
    c ? n(20, s = w) : n(9, w = p[y.indexOf(s)]), n(12, b = !1), n(14, N = null), B("blur");
  }
  function ke(S) {
    n(12, [b, N] = m1(S, N, E), b, (n(14, N), n(2, a), n(23, u), n(6, c), n(9, w), n(10, E), n(8, m), n(25, C), n(11, v), n(27, A), n(26, P), n(24, y))), S.key === "Enter" && (N !== null ? (n(11, v = N), n(12, b = !1), m.blur(), n(14, N = null)) : p.includes(w) ? (n(11, v = p.indexOf(w)), n(12, b = !1), n(14, N = null), m.blur()) : c && (n(20, s = w), n(11, v = null), n(12, b = !1), n(14, N = null), m.blur()), B("enter", s));
  }
  B1(() => {
    n(21, r = !1), n(26, P = !0);
  }), C1(() => {
    m.focus();
  });
  function ye() {
    w = this.value, n(9, w), n(11, v), n(27, A), n(26, P), n(2, a), n(24, y);
  }
  function me(S) {
    b1[S ? "unshift" : "push"](() => {
      m = S, n(8, m);
    });
  }
  const _e = (S) => B("key_up", { key: S.key, input_value: w });
  return t.$$set = (S) => {
    "label" in S && n(0, i = S.label), "info" in S && n(1, l = S.info), "value" in S && n(20, s = S.value), "value_is_output" in S && n(21, r = S.value_is_output), "choices" in S && n(2, a = S.choices), "disabled" in S && n(3, f = S.disabled), "show_label" in S && n(4, _ = S.show_label), "container" in S && n(5, h = S.container), "allow_custom_value" in S && n(6, c = S.allow_custom_value), "filterable" in S && n(7, d = S.filterable);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && v !== A && v !== null && P && (n(9, [w, s] = a[v], w, (n(20, s), n(11, v), n(27, A), n(26, P), n(2, a), n(24, y))), n(27, A = v), B("select", {
      index: v,
      value: y[v],
      selected: !0
    })), t.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (x(), d1(B, s, r), n(22, o = s)), t.$$.dirty[0] & /*choices*/
    4 && L(), t.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== u && (c || x(), n(23, u = a), n(10, E = $o(a, w)), !c && E.length > 0 && n(14, N = E[0]), m == document.activeElement && n(12, b = !0)), t.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && w !== C && (n(10, E = $o(a, w)), n(25, C = w), !c && E.length > 0 && n(14, N = E[0]));
  }, [
    i,
    l,
    a,
    f,
    _,
    h,
    c,
    d,
    m,
    w,
    E,
    v,
    b,
    p,
    N,
    B,
    J,
    ce,
    te,
    ke,
    s,
    r,
    o,
    u,
    y,
    C,
    P,
    A,
    ye,
    me,
    _e
  ];
}
class N1 extends g1 {
  constructor(e) {
    super(), v1(
      this,
      e,
      P1,
      H1,
      E1,
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
  SvelteComponent: L1,
  append: Je,
  attr: ni,
  create_component: ii,
  destroy_component: li,
  detach: vs,
  element: yt,
  init: I1,
  insert: ys,
  mount_component: si,
  safe_not_equal: M1,
  set_style: oi,
  space: Hl,
  text: Ua,
  transition_in: ri,
  transition_out: ai
} = window.__gradio__svelte__internal, { createEventDispatcher: O1 } = window.__gradio__svelte__internal, { onMount: D1, onDestroy: R1 } = window.__gradio__svelte__internal;
function U1(t) {
  let e;
  return {
    c() {
      e = Ua("Cancel");
    },
    m(n, i) {
      ys(n, e, i);
    },
    d(n) {
      n && vs(e);
    }
  };
}
function F1(t) {
  let e;
  return {
    c() {
      e = Ua("OK");
    },
    m(n, i) {
      ys(n, e, i);
    },
    d(n) {
      n && vs(e);
    }
  };
}
function q1(t) {
  let e, n, i, l, s, o, r, a, u, f, _, h, c, d, m;
  return s = new N1({
    props: {
      value: (
        /*label*/
        t[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        t[2]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    t[4]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    t[6]
  ), a = new Fm({
    props: {
      value: (
        /*color*/
        t[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), a.$on(
    "change",
    /*onColorChange*/
    t[5]
  ), _ = new Vo({
    props: {
      $$slots: { default: [U1] },
      $$scope: { ctx: t }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    t[8]
  ), d = new Vo({
    props: {
      variant: "primary",
      $$slots: { default: [F1] },
      $$scope: { ctx: t }
    }
  }), d.$on(
    "click",
    /*click_handler_1*/
    t[9]
  ), {
    c() {
      e = yt("div"), n = yt("div"), i = yt("span"), l = yt("div"), ii(s.$$.fragment), o = Hl(), r = yt("div"), ii(a.$$.fragment), u = Hl(), f = yt("div"), ii(_.$$.fragment), h = Hl(), c = yt("div"), ii(d.$$.fragment), oi(l, "margin-right", "10px"), oi(r, "margin-right", "40px"), oi(r, "margin-bottom", "8px"), oi(f, "margin-right", "8px"), ni(i, "class", "model-content svelte-hkn2q1"), ni(n, "class", "modal-container svelte-hkn2q1"), ni(e, "class", "modal svelte-hkn2q1"), ni(e, "id", "model-box-edit");
    },
    m(b, p) {
      ys(b, e, p), Je(e, n), Je(n, i), Je(i, l), si(s, l, null), Je(i, o), Je(i, r), si(a, r, null), Je(i, u), Je(i, f), si(_, f, null), Je(i, h), Je(i, c), si(d, c, null), m = !0;
    },
    p(b, [p]) {
      const y = {};
      p & /*label*/
      1 && (y.value = /*label*/
      b[0]), p & /*choices*/
      4 && (y.choices = /*choices*/
      b[2]), s.$set(y);
      const w = {};
      p & /*color*/
      2 && (w.value = /*color*/
      b[1]), a.$set(w);
      const C = {};
      p & /*$$scope*/
      4096 && (C.$$scope = { dirty: p, ctx: b }), _.$set(C);
      const P = {};
      p & /*$$scope*/
      4096 && (P.$$scope = { dirty: p, ctx: b }), d.$set(P);
    },
    i(b) {
      m || (ri(s.$$.fragment, b), ri(a.$$.fragment, b), ri(_.$$.fragment, b), ri(d.$$.fragment, b), m = !0);
    },
    o(b) {
      ai(s.$$.fragment, b), ai(a.$$.fragment, b), ai(_.$$.fragment, b), ai(d.$$.fragment, b), m = !1;
    },
    d(b) {
      b && vs(e), li(s), li(a), li(_), li(d);
    }
  };
}
function z1(t, e, n) {
  let { label: i = "" } = e, { choices: l = [] } = e, { choicesColors: s = [] } = e, { color: o = "" } = e;
  const r = O1();
  function a(m) {
    r("change", { label: i, color: o, ok: m });
  }
  function u(m) {
    const { detail: b } = m;
    let p = b;
    Number.isInteger(p) ? (Array.isArray(s) && p < s.length && n(1, o = s[p]), Array.isArray(l) && p < l.length && n(0, i = l[p][0])) : n(0, i = p);
  }
  function f(m) {
    const { detail: b } = m;
    n(1, o = b);
  }
  function _(m) {
    u(m), a(!0);
  }
  function h(m) {
    switch (m.key) {
      case "Enter":
        a(!0);
        break;
    }
  }
  D1(() => {
    document.addEventListener("keydown", h);
  }), R1(() => {
    document.removeEventListener("keydown", h);
  });
  const c = () => a(!1), d = () => a(!0);
  return t.$$set = (m) => {
    "label" in m && n(0, i = m.label), "choices" in m && n(2, l = m.choices), "choicesColors" in m && n(7, s = m.choicesColors), "color" in m && n(1, o = m.color);
  }, [
    i,
    o,
    l,
    a,
    u,
    f,
    _,
    s,
    c,
    d
  ];
}
class Fa extends L1 {
  constructor(e) {
    super(), I1(this, e, z1, q1, M1, {
      label: 0,
      choices: 2,
      choicesColors: 7,
      color: 1
    });
  }
}
const Ve = (t, e, n) => Math.min(Math.max(t, e), n);
function Pl(t, e) {
  if (t.startsWith("rgba"))
    return t.replace(/[\d.]+$/, e.toString());
  const n = t.match(/\d+/g);
  if (!n || n.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [i, l, s] = n;
  return `rgba(${i}, ${l}, ${s}, ${e})`;
}
class Nl {
  constructor(e, n, i, l, s, o, r, a, u, f, _ = "rgb(255, 255, 255)", h = 0.5, c = 25, d = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging) {
        let b = m.clientX - this.offsetMouseX - this.xmin, p = m.clientY - this.offsetMouseY - this.ymin;
        const y = this.canvasXmax - this.canvasXmin, w = this.canvasYmax - this.canvasYmin;
        b = Ve(b, -this.xmin, y - this.xmax), p = Ve(p, -this.ymin, w - this.ymax), this.xmin += b, this.ymin += p, this.xmax += b, this.ymax += p, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (m) => {
      if (this.isResizing) {
        const b = m.clientX, p = m.clientY, y = b - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, w = p - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, C = this.canvasXmax - this.canvasXmin, P = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += y, this.ymin += w, this.xmin = Ve(this.xmin, 0, this.xmax - this.minSize), this.ymin = Ve(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += y, this.ymin += w, this.xmax = Ve(this.xmax, this.xmin + this.minSize, C), this.ymin = Ve(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += y, this.ymax += w, this.xmax = Ve(this.xmax, this.xmin + this.minSize, C), this.ymax = Ve(this.ymax, this.ymin + this.minSize, P);
            break;
          case 3:
            this.xmin += y, this.ymax += w, this.xmin = Ve(this.xmin, 0, this.xmax - this.minSize), this.ymax = Ve(this.ymax, this.ymin + this.minSize, P);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = l, this.canvasYmax = s, this.scaleFactor = d, this.label = o, this.isDragging = !1, [this.xmin, this.ymin] = this.toBoxCoordinates(r, a), [this.xmax, this.ymax] = this.toBoxCoordinates(u, f), this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = 8, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = c, this.color = _, this.alpha = h;
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
    let n = e / this.scaleFactor;
    this.xmin = Math.round(this.xmin * n), this.ymin = Math.round(this.ymin * n), this.xmax = Math.round(this.xmax * n), this.ymax = Math.round(this.ymax * n), this.updateHandles(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2;
    this.resizeHandles = [
      {
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e
      },
      {
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e
      },
      {
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e
      },
      {
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  toCanvasCoordinates(e, n) {
    return e = e + this.canvasXmin, n = n + this.canvasYmin, [e, n];
  }
  toBoxCoordinates(e, n) {
    return e = e - this.canvasXmin, n = n - this.canvasYmin, [e, n];
  }
  render(e) {
    let n, i;
    if (e.beginPath(), [n, i] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, i, this.getWidth(), this.getHeight()), e.fillStyle = Pl(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = 4 : e.lineWidth = 2, e.strokeStyle = Pl(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, l, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, l, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = Pl(this.color, 1);
    for (const l of this.resizeHandles)
      [n, i] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        n,
        i,
        l.xmax - l.xmin,
        l.ymax - l.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this.xmin, this.offsetMouseY = e.clientY - this.ymin, document.addEventListener("mousemove", this.handleDrag), document.addEventListener("mouseup", this.stopDrag);
  }
  isPointInsideBox(e, n) {
    return [e, n] = this.toBoxCoordinates(e, n), e >= this.xmin && e <= this.xmax && n >= this.ymin && n <= this.ymax;
  }
  indexOfPointInsideHandle(e, n) {
    [e, n] = this.toBoxCoordinates(e, n);
    for (let i = 0; i < this.resizeHandles.length; i++) {
      const l = this.resizeHandles[i];
      if (e >= l.xmin && e <= l.xmax && n >= l.ymin && n <= l.ymax)
        return this.resizingHandleIndex = i, i;
    }
    return -1;
  }
  startResize(e, n) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = n.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = n.clientY - this.resizeHandles[e].ymin, document.addEventListener("mousemove", this.handleResize), document.addEventListener("mouseup", this.stopResize);
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
];
const {
  SvelteComponent: j1,
  append: Wt,
  attr: At,
  binding_callbacks: G1,
  bubble: nr,
  check_outros: Ll,
  create_component: Hn,
  destroy_component: Pn,
  detach: Zt,
  element: tn,
  empty: x1,
  group_outros: Il,
  init: V1,
  insert: Yt,
  listen: rt,
  mount_component: Nn,
  noop: X1,
  run_all: qa,
  safe_not_equal: W1,
  space: Ln,
  transition_in: Ce,
  transition_out: je
} = window.__gradio__svelte__internal, { onMount: Z1, onDestroy: Y1, createEventDispatcher: J1 } = window.__gradio__svelte__internal;
function ir(t) {
  let e, n, i, l, s, o, r, a, u, f, _, h;
  return i = new ym({}), o = new yc({}), u = new kr({}), {
    c() {
      e = tn("span"), n = tn("button"), Hn(i.$$.fragment), l = Ln(), s = tn("button"), Hn(o.$$.fragment), r = Ln(), a = tn("button"), Hn(u.$$.fragment), At(n, "class", "icon svelte-182gnnj"), At(s, "class", "icon svelte-182gnnj"), At(a, "class", "icon svelte-182gnnj"), At(e, "class", "canvas-control svelte-182gnnj");
    },
    m(c, d) {
      Yt(c, e, d), Wt(e, n), Nn(i, n, null), Wt(e, l), Wt(e, s), Nn(o, s, null), Wt(e, r), Wt(e, a), Nn(u, a, null), f = !0, _ || (h = [
        rt(
          n,
          "click",
          /*click_handler*/
          t[22]
        ),
        rt(
          s,
          "click",
          /*click_handler_1*/
          t[23]
        ),
        rt(
          a,
          "click",
          /*click_handler_2*/
          t[24]
        )
      ], _ = !0);
    },
    p: X1,
    i(c) {
      f || (Ce(i.$$.fragment, c), Ce(o.$$.fragment, c), Ce(u.$$.fragment, c), f = !0);
    },
    o(c) {
      je(i.$$.fragment, c), je(o.$$.fragment, c), je(u.$$.fragment, c), f = !1;
    },
    d(c) {
      c && Zt(e), Pn(i), Pn(o), Pn(u), _ = !1, qa(h);
    }
  };
}
function lr(t) {
  let e, n;
  return e = new Fa({
    props: {
      choices: (
        /*choices*/
        t[2]
      ),
      choicesColors: (
        /*choicesColors*/
        t[3]
      ),
      label: (
        /*selectedBox*/
        t[5] >= 0 && /*selectedBox*/
        t[5] < /*value*/
        t[0].boxes.length ? (
          /*value*/
          t[0].boxes[
            /*selectedBox*/
            t[5]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        t[5] >= 0 && /*selectedBox*/
        t[5] < /*value*/
        t[0].boxes.length ? Dn(
          /*value*/
          t[0].boxes[
            /*selectedBox*/
            t[5]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    t[14]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    t[25]
  ), {
    c() {
      Hn(e.$$.fragment);
    },
    m(i, l) {
      Nn(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*choices*/
      4 && (s.choices = /*choices*/
      i[2]), l[0] & /*choicesColors*/
      8 && (s.choicesColors = /*choicesColors*/
      i[3]), l[0] & /*selectedBox, value*/
      33 && (s.label = /*selectedBox*/
      i[5] >= 0 && /*selectedBox*/
      i[5] < /*value*/
      i[0].boxes.length ? (
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[5]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      33 && (s.color = /*selectedBox*/
      i[5] >= 0 && /*selectedBox*/
      i[5] < /*value*/
      i[0].boxes.length ? Dn(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[5]
        ].color
      ) : ""), e.$set(s);
    },
    i(i) {
      n || (Ce(e.$$.fragment, i), n = !0);
    },
    o(i) {
      je(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Pn(e, i);
    }
  };
}
function sr(t) {
  let e, n;
  return e = new Fa({
    props: {
      choices: (
        /*choices*/
        t[2]
      ),
      choicesColors: (
        /*choicesColors*/
        t[3]
      ),
      color: Array.isArray(
        /*choicesColors*/
        t[3]
      ) && /*choicesColors*/
      t[3].length > 0 ? (
        /*choicesColors*/
        t[3][0]
      ) : Dn(Xe[
        /*value*/
        t[0].boxes.length % Xe.length
      ])
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    t[11]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    t[26]
  ), {
    c() {
      Hn(e.$$.fragment);
    },
    m(i, l) {
      Nn(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*choices*/
      4 && (s.choices = /*choices*/
      i[2]), l[0] & /*choicesColors*/
      8 && (s.choicesColors = /*choicesColors*/
      i[3]), l[0] & /*choicesColors, value*/
      9 && (s.color = Array.isArray(
        /*choicesColors*/
        i[3]
      ) && /*choicesColors*/
      i[3].length > 0 ? (
        /*choicesColors*/
        i[3][0]
      ) : Dn(Xe[
        /*value*/
        i[0].boxes.length % Xe.length
      ])), e.$set(s);
    },
    i(i) {
      n || (Ce(e.$$.fragment, i), n = !0);
    },
    o(i) {
      je(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Pn(e, i);
    }
  };
}
function Q1(t) {
  let e, n, i, l, s, o, r, a, u, f = (
    /*interactive*/
    t[1] && ir(t)
  ), _ = (
    /*editModalVisible*/
    t[6] && lr(t)
  ), h = (
    /*newModalVisible*/
    t[7] && sr(t)
  );
  return {
    c() {
      e = tn("div"), n = tn("canvas"), i = Ln(), f && f.c(), l = Ln(), _ && _.c(), s = Ln(), h && h.c(), o = x1(), At(n, "class", "canvas-annotator svelte-182gnnj"), At(e, "class", "canvas-container svelte-182gnnj"), At(e, "tabindex", "-1");
    },
    m(c, d) {
      Yt(c, e, d), Wt(e, n), t[21](n), Yt(c, i, d), f && f.m(c, d), Yt(c, l, d), _ && _.m(c, d), Yt(c, s, d), h && h.m(c, d), Yt(c, o, d), r = !0, a || (u = [
        rt(
          n,
          "mousedown",
          /*handleMouseDown*/
          t[8]
        ),
        rt(
          n,
          "mouseup",
          /*handleMouseUp*/
          t[9]
        ),
        rt(
          n,
          "dblclick",
          /*handleDoubleClick*/
          t[13]
        ),
        rt(
          e,
          "focusin",
          /*handleCanvasFocus*/
          t[16]
        ),
        rt(
          e,
          "focusout",
          /*handleCanvasBlur*/
          t[17]
        )
      ], a = !0);
    },
    p(c, d) {
      /*interactive*/
      c[1] ? f ? (f.p(c, d), d[0] & /*interactive*/
      2 && Ce(f, 1)) : (f = ir(c), f.c(), Ce(f, 1), f.m(l.parentNode, l)) : f && (Il(), je(f, 1, 1, () => {
        f = null;
      }), Ll()), /*editModalVisible*/
      c[6] ? _ ? (_.p(c, d), d[0] & /*editModalVisible*/
      64 && Ce(_, 1)) : (_ = lr(c), _.c(), Ce(_, 1), _.m(s.parentNode, s)) : _ && (Il(), je(_, 1, 1, () => {
        _ = null;
      }), Ll()), /*newModalVisible*/
      c[7] ? h ? (h.p(c, d), d[0] & /*newModalVisible*/
      128 && Ce(h, 1)) : (h = sr(c), h.c(), Ce(h, 1), h.m(o.parentNode, o)) : h && (Il(), je(h, 1, 1, () => {
        h = null;
      }), Ll());
    },
    i(c) {
      r || (Ce(f), Ce(_), Ce(h), r = !0);
    },
    o(c) {
      je(f), je(_), je(h), r = !1;
    },
    d(c) {
      c && (Zt(e), Zt(i), Zt(l), Zt(s), Zt(o)), t[21](null), f && f.d(c), _ && _.d(c), h && h.d(c), a = !1, qa(u);
    }
  };
}
function or(t) {
  var e = parseInt(t.slice(1, 3), 16), n = parseInt(t.slice(3, 5), 16), i = parseInt(t.slice(5, 7), 16);
  return "rgb(" + e + ", " + n + ", " + i + ")";
}
function Dn(t) {
  const e = t.match(/(\d+(\.\d+)?)/g), n = parseInt(e[0]), i = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | n << 16 | i << 8 | l).toString(16).slice(1);
}
function K1(t, e, n) {
  let { imageUrl: i = null } = e, { interactive: l } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: o = 25 } = e, { value: r } = e, { choices: a = [] } = e, { choicesColors: u = [] } = e, f, _, h = null, c = -1, d = 0, m = 0, b = 0, p = 0, y = 1, w = 0, C = 0, P = !1, E = !1;
  const N = J1();
  function v() {
    if (_) {
      _.clearRect(0, 0, f.width, f.height), h !== null && _.drawImage(h, d, m, w, C);
      for (const H of r.boxes.slice().reverse())
        H.render(_);
    }
  }
  function A(H) {
    n(5, c = H), r.boxes.forEach((R) => {
      R.setSelected(!1);
    }), H >= 0 && H < r.boxes.length && r.boxes[H].setSelected(!0), v();
  }
  function B(H) {
    if (!l)
      return;
    const R = f.getBoundingClientRect(), j = H.clientX - R.left, X = H.clientY - R.top;
    for (const [he, Me] of r.boxes.entries()) {
      const q = Me.indexOfPointInsideHandle(j, X);
      if (q >= 0) {
        A(he), Me.startResize(q, H);
        return;
      }
    }
    for (const [he, Me] of r.boxes.entries())
      if (Me.isPointInsideBox(j, X)) {
        A(he), Me.startDrag(H);
        return;
      }
    A(-1);
  }
  function L(H) {
    N("change");
  }
  function x(H) {
    if (l)
      switch (H.key) {
        case "Delete":
          me();
          break;
      }
  }
  function J() {
    n(7, E = !0);
  }
  function ce(H) {
    n(7, E = !1);
    const { detail: R } = H;
    let j = R.label, X = R.color;
    if (R.ok) {
      X === null || X === "" ? X = Xe[r.boxes.length % Xe.length] : X = or(X);
      let Me = new Nl(v, d, m, b, p, j, Math.round(f.width / 3), Math.round(f.height / 3), Math.round(2 * f.width / 3), Math.round(2 * f.height / 3), X, s, o, y);
      n(0, r.boxes = [Me, ...r.boxes], r), v(), N("change");
    }
  }
  function te() {
    c >= 0 && c < r.boxes.length && n(6, P = !0);
  }
  function ke(H) {
    l && te();
  }
  function ye(H) {
    n(6, P = !1);
    const { detail: R } = H;
    let j = R.label, X = R.color;
    if (R.ok && c >= 0 && c < r.boxes.length) {
      let Me = r.boxes[c];
      Me.label = j, Me.color = or(X), v(), N("change");
    }
  }
  function me() {
    c >= 0 && c < r.boxes.length && (r.boxes.splice(c, 1), A(-1), N("change"));
  }
  function _e() {
    if (f) {
      if (y = 1, n(4, f.width = f.clientWidth, f), h !== null)
        if (h.width > f.width)
          y = f.width / h.width, w = h.width * y, C = h.height * y, d = 0, m = 0, b = w, p = C, n(4, f.height = C, f);
        else {
          w = h.width, C = h.height;
          var H = (f.width - w) / 2;
          d = H, m = 0, b = H + w, p = h.height, n(4, f.height = C, f);
        }
      else
        d = 0, m = 0, b = f.width, p = f.height, n(4, f.height = f.clientHeight, f);
      if (b > 0 && p > 0)
        for (const R of r.boxes)
          R.canvasXmin = d, R.canvasYmin = m, R.canvasXmax = b, R.canvasYmax = p, R.setScaleFactor(y);
      v(), N("change");
    }
  }
  const S = new ResizeObserver(_e);
  function k() {
    let H = [];
    for (let R = 0; R < r.boxes.length; R++) {
      let j = r.boxes[R];
      if (!(j instanceof Nl)) {
        let X = "", he = "";
        j.hasOwnProperty("color") ? (X = j.color, Array.isArray(X) && X.length === 3 && (X = `rgb(${X[0]}, ${X[1]}, ${X[2]})`)) : X = Xe[H.length % Xe.length], j.hasOwnProperty("label") && (he = j.label), j = new Nl(v, d, m, b, p, he, j.xmin, j.ymin, j.xmax, j.ymax, X, s, o, y);
      }
      H.push(j);
    }
    n(0, r.boxes = H, r);
  }
  Z1(() => {
    if (Array.isArray(a) && a.length > 0 && (!Array.isArray(u) || u.length == 0))
      for (let H = 0; H < a.length; H++) {
        let R = Xe[H % Xe.length];
        u.push(Dn(R));
      }
    _ = f.getContext("2d"), S.observe(f), i !== null && (h = new Image(), h.src = i, h.onload = function() {
      _e(), v();
    }), _e(), v();
  });
  function I() {
    document.addEventListener("keydown", x);
  }
  function g() {
    document.removeEventListener("keydown", x);
  }
  Y1(() => {
    document.removeEventListener("keydown", x);
  });
  function T(H) {
    G1[H ? "unshift" : "push"](() => {
      f = H, n(4, f);
    });
  }
  const ae = () => J(), Q = () => te(), Se = () => me();
  function He(H) {
    nr.call(this, t, H);
  }
  function D(H) {
    nr.call(this, t, H);
  }
  return t.$$set = (H) => {
    "imageUrl" in H && n(18, i = H.imageUrl), "interactive" in H && n(1, l = H.interactive), "boxAlpha" in H && n(19, s = H.boxAlpha), "boxMinSize" in H && n(20, o = H.boxMinSize), "value" in H && n(0, r = H.value), "choices" in H && n(2, a = H.choices), "choicesColors" in H && n(3, u = H.choicesColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*value*/
    1 && k();
  }, [
    r,
    l,
    a,
    u,
    f,
    c,
    P,
    E,
    B,
    L,
    J,
    ce,
    te,
    ke,
    ye,
    me,
    I,
    g,
    i,
    s,
    o,
    T,
    ae,
    Q,
    Se,
    He,
    D
  ];
}
class $1 extends j1 {
  constructor(e) {
    super(), V1(
      this,
      e,
      K1,
      Q1,
      W1,
      {
        imageUrl: 18,
        interactive: 1,
        boxAlpha: 19,
        boxMinSize: 20,
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
  SvelteComponent: eg,
  add_flush_callback: tg,
  bind: ng,
  binding_callbacks: ig,
  create_component: lg,
  destroy_component: sg,
  init: og,
  mount_component: rg,
  safe_not_equal: ag,
  transition_in: ug,
  transition_out: fg
} = window.__gradio__svelte__internal, { createEventDispatcher: cg } = window.__gradio__svelte__internal;
function _g(t) {
  let e, n, i;
  function l(o) {
    t[10](o);
  }
  let s = {
    interactive: (
      /*interactive*/
      t[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      t[2]
    ),
    choices: (
      /*labelList*/
      t[3]
    ),
    choicesColors: (
      /*labelColors*/
      t[4]
    ),
    boxMinSize: (
      /*boxMinSize*/
      t[5]
    ),
    imageUrl: (
      /*resolved_src*/
      t[6]
    )
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new $1({ props: s }), ig.push(() => ng(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      t[11]
    ), {
      c() {
        lg(e.$$.fragment);
      },
      m(o, r) {
        rg(e, o, r), i = !0;
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
        o[5]), r & /*resolved_src*/
        64 && (a.imageUrl = /*resolved_src*/
        o[6]), !n && r & /*value*/
        1 && (n = !0, a.value = /*value*/
        o[0], tg(() => n = !1)), e.$set(a);
      },
      i(o) {
        i || (ug(e.$$.fragment, o), i = !0);
      },
      o(o) {
        fg(e.$$.fragment, o), i = !1;
      },
      d(o) {
        sg(e, o);
      }
    }
  );
}
function hg(t, e, n) {
  let { src: i = void 0 } = e, { interactive: l } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { value: u } = e, f, _;
  const h = cg();
  function c(m) {
    u = m, n(0, u);
  }
  const d = () => h("change");
  return t.$$set = (m) => {
    "src" in m && n(8, i = m.src), "interactive" in m && n(1, l = m.interactive), "boxesAlpha" in m && n(2, s = m.boxesAlpha), "labelList" in m && n(3, o = m.labelList), "labelColors" in m && n(4, r = m.labelColors), "boxMinSize" in m && n(5, a = m.boxMinSize), "value" in m && n(0, u = m.value);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*src, latest_src*/
    768) {
      n(6, f = i), n(9, _ = i);
      const m = i;
      Th(m).then((b) => {
        _ === m && n(6, f = b);
      });
    }
  }, [
    u,
    l,
    s,
    o,
    r,
    a,
    f,
    h,
    i,
    _,
    c,
    d
  ];
}
class za extends eg {
  constructor(e) {
    super(), og(this, e, hg, _g, ag, {
      src: 8,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      value: 0
    });
  }
}
const {
  SvelteComponent: dg,
  add_flush_callback: Pi,
  append: wn,
  attr: An,
  bind: Ni,
  binding_callbacks: Rn,
  bubble: Ml,
  check_outros: Jt,
  create_component: _t,
  create_slot: mg,
  destroy_component: ht,
  detach: Bt,
  element: In,
  empty: gg,
  get_all_dirty_from_scope: bg,
  get_slot_changes: pg,
  group_outros: Qt,
  init: wg,
  insert: Tt,
  mount_component: dt,
  noop: vg,
  safe_not_equal: yg,
  space: xt,
  toggle_class: rr,
  transition_in: W,
  transition_out: se,
  update_slot_base: Eg
} = window.__gradio__svelte__internal, { createEventDispatcher: kg } = window.__gradio__svelte__internal;
function ar(t) {
  let e, n;
  return e = new zh({
    props: {
      href: (
        /*value*/
        t[1].image.url
      ),
      download: (
        /*value*/
        t[1].image.orig_name || "image"
      ),
      $$slots: { default: [Sg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      _t(e.$$.fragment);
    },
    m(i, l) {
      dt(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*value*/
      2 && (s.href = /*value*/
      i[1].image.url), l[0] & /*value*/
      2 && (s.download = /*value*/
      i[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (W(e.$$.fragment, i), n = !0);
    },
    o(i) {
      se(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ht(e, i);
    }
  };
}
function Sg(t) {
  let e, n;
  return e = new as({
    props: {
      Icon: sc,
      label: (
        /*i18n*/
        t[8]("common.download")
      )
    }
  }), {
    c() {
      _t(e.$$.fragment);
    },
    m(i, l) {
      dt(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      i[8]("common.download")), e.$set(s);
    },
    i(i) {
      n || (W(e.$$.fragment, i), n = !0);
    },
    o(i) {
      se(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ht(e, i);
    }
  };
}
function ur(t) {
  let e, n;
  return e = new g_({
    props: {
      i18n: (
        /*i18n*/
        t[8]
      ),
      formatter: (
        /*func*/
        t[25]
      ),
      value: (
        /*value*/
        t[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    t[26]
  ), e.$on(
    "error",
    /*error_handler*/
    t[27]
  ), {
    c() {
      _t(e.$$.fragment);
    },
    m(i, l) {
      dt(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      i[8]), l[0] & /*value*/
      2 && (s.value = /*value*/
      i[1]), e.$set(s);
    },
    i(i) {
      n || (W(e.$$.fragment, i), n = !0);
    },
    o(i) {
      se(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ht(e, i);
    }
  };
}
function fr(t) {
  let e, n, i;
  return n = new as({
    props: { Icon: kr, label: "Remove Image" }
  }), n.$on(
    "click",
    /*clear*/
    t[23]
  ), {
    c() {
      e = In("div"), _t(n.$$.fragment);
    },
    m(l, s) {
      Tt(l, e, s), dt(n, e, null), i = !0;
    },
    p: vg,
    i(l) {
      i || (W(n.$$.fragment, l), i = !0);
    },
    o(l) {
      se(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && Bt(e), ht(n);
    }
  };
}
function cr(t) {
  let e;
  const n = (
    /*#slots*/
    t[24].default
  ), i = mg(
    n,
    t,
    /*$$scope*/
    t[35],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s[1] & /*$$scope*/
      16) && Eg(
        i,
        n,
        l,
        /*$$scope*/
        l[35],
        e ? pg(
          n,
          /*$$scope*/
          l[35],
          s,
          null
        ) : bg(
          /*$$scope*/
          l[35]
        ),
        null
      );
    },
    i(l) {
      e || (W(i, l), e = !0);
    },
    o(l) {
      se(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Cg(t) {
  let e, n, i = (
    /*value*/
    t[1] === null && cr(t)
  );
  return {
    c() {
      i && i.c(), e = gg();
    },
    m(l, s) {
      i && i.m(l, s), Tt(l, e, s), n = !0;
    },
    p(l, s) {
      /*value*/
      l[1] === null ? i ? (i.p(l, s), s[0] & /*value*/
      2 && W(i, 1)) : (i = cr(l), i.c(), W(i, 1), i.m(e.parentNode, e)) : i && (Qt(), se(i, 1, 1, () => {
        i = null;
      }), Jt());
    },
    i(l) {
      n || (W(i), n = !0);
    },
    o(l) {
      se(i), n = !1;
    },
    d(l) {
      l && Bt(e), i && i.d(l);
    }
  };
}
function _r(t) {
  let e, n, i, l;
  function s(r) {
    t[32](r);
  }
  let o = {
    boxesAlpha: (
      /*boxesAlpha*/
      t[12]
    ),
    labelList: (
      /*labelList*/
      t[13]
    ),
    labelColors: (
      /*labelColors*/
      t[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      t[15]
    ),
    interactive: (
      /*interactive*/
      t[7]
    ),
    src: (
      /*value*/
      t[1].image.url
    )
  };
  return (
    /*value*/
    t[1] !== void 0 && (o.value = /*value*/
    t[1]), n = new za({ props: o }), Rn.push(() => Ni(n, "value", s)), n.$on(
      "change",
      /*change_handler*/
      t[33]
    ), {
      c() {
        e = In("div"), _t(n.$$.fragment), An(e, "class", "image-frame svelte-1gjdske"), rr(
          e,
          "selectable",
          /*selectable*/
          t[5]
        );
      },
      m(r, a) {
        Tt(r, e, a), dt(n, e, null), l = !0;
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
        r[7]), a[0] & /*value*/
        2 && (u.src = /*value*/
        r[1].image.url), !i && a[0] & /*value*/
        2 && (i = !0, u.value = /*value*/
        r[1], Pi(() => i = !1)), n.$set(u), (!l || a[0] & /*selectable*/
        32) && rr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (W(n.$$.fragment, r), l = !0);
      },
      o(r) {
        se(n.$$.fragment, r), l = !1;
      },
      d(r) {
        r && Bt(e), ht(n);
      }
    }
  );
}
function hr(t) {
  let e, n, i;
  function l(o) {
    t[34](o);
  }
  let s = {
    sources: (
      /*sources*/
      t[4]
    ),
    handle_clear: (
      /*handle_clear*/
      t[20]
    ),
    handle_select: (
      /*handle_select_source*/
      t[22]
    )
  };
  return (
    /*active_source*/
    t[0] !== void 0 && (s.active_source = /*active_source*/
    t[0]), e = new L_({ props: s }), Rn.push(() => Ni(e, "active_source", l)), {
      c() {
        _t(e.$$.fragment);
      },
      m(o, r) {
        dt(e, o, r), i = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !n && r[0] & /*active_source*/
        1 && (n = !0, a.active_source = /*active_source*/
        o[0], Pi(() => n = !1)), e.$set(a);
      },
      i(o) {
        i || (W(e.$$.fragment, o), i = !0);
      },
      o(o) {
        se(e.$$.fragment, o), i = !1;
      },
      d(o) {
        ht(e, o);
      }
    }
  );
}
function Ag(t) {
  let e, n, i, l, s, o, r, a, u, f, _, h, c, d = (
    /*sources*/
    (t[4].length > 1 || /*sources*/
    t[4].includes("clipboard")) && /*value*/
    t[1] === null && /*interactive*/
    t[7]
  ), m;
  e = new sf({
    props: {
      show_label: (
        /*show_label*/
        t[3]
      ),
      Icon: Sr,
      label: (
        /*label*/
        t[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    t[10] && /*value*/
    t[1] !== null && ar(t)
  ), p = (
    /*showShareButton*/
    t[9] && /*value*/
    t[1] !== null && ur(t)
  ), y = (
    /*showClearButton*/
    t[11] && /*value*/
    t[1] !== null && /*interactive*/
    t[7] && fr(t)
  );
  function w(v) {
    t[29](v);
  }
  function C(v) {
    t[30](v);
  }
  let P = {
    hidden: (
      /*value*/
      t[1] !== null
    ),
    filetype: (
      /*active_source*/
      t[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      t[6]
    ),
    disable_click: !/*sources*/
    t[4].includes("upload"),
    $$slots: { default: [Cg] },
    $$scope: { ctx: t }
  };
  /*uploading*/
  t[16] !== void 0 && (P.uploading = /*uploading*/
  t[16]), /*dragging*/
  t[17] !== void 0 && (P.dragging = /*dragging*/
  t[17]), u = new dm({ props: P }), t[28](u), Rn.push(() => Ni(u, "uploading", w)), Rn.push(() => Ni(u, "dragging", C)), u.$on(
    "load",
    /*handle_upload*/
    t[19]
  ), u.$on(
    "error",
    /*error_handler_1*/
    t[31]
  );
  let E = (
    /*value*/
    t[1] !== null && _r(t)
  ), N = d && hr(t);
  return {
    c() {
      _t(e.$$.fragment), n = xt(), i = In("div"), b && b.c(), l = xt(), p && p.c(), s = xt(), y && y.c(), o = xt(), r = In("div"), a = In("div"), _t(u.$$.fragment), h = xt(), E && E.c(), c = xt(), N && N.c(), An(i, "class", "icon-buttons svelte-1gjdske"), An(a, "class", "upload-container svelte-1gjdske"), An(r, "data-testid", "image"), An(r, "class", "image-container svelte-1gjdske");
    },
    m(v, A) {
      dt(e, v, A), Tt(v, n, A), Tt(v, i, A), b && b.m(i, null), wn(i, l), p && p.m(i, null), wn(i, s), y && y.m(i, null), Tt(v, o, A), Tt(v, r, A), wn(r, a), dt(u, a, null), wn(a, h), E && E.m(a, null), wn(r, c), N && N.m(r, null), m = !0;
    },
    p(v, A) {
      const B = {};
      A[0] & /*show_label*/
      8 && (B.show_label = /*show_label*/
      v[3]), A[0] & /*label*/
      4 && (B.label = /*label*/
      v[2] || "Image Annotator"), e.$set(B), /*showDownloadButton*/
      v[10] && /*value*/
      v[1] !== null ? b ? (b.p(v, A), A[0] & /*showDownloadButton, value*/
      1026 && W(b, 1)) : (b = ar(v), b.c(), W(b, 1), b.m(i, l)) : b && (Qt(), se(b, 1, 1, () => {
        b = null;
      }), Jt()), /*showShareButton*/
      v[9] && /*value*/
      v[1] !== null ? p ? (p.p(v, A), A[0] & /*showShareButton, value*/
      514 && W(p, 1)) : (p = ur(v), p.c(), W(p, 1), p.m(i, s)) : p && (Qt(), se(p, 1, 1, () => {
        p = null;
      }), Jt()), /*showClearButton*/
      v[11] && /*value*/
      v[1] !== null && /*interactive*/
      v[7] ? y ? (y.p(v, A), A[0] & /*showClearButton, value, interactive*/
      2178 && W(y, 1)) : (y = fr(v), y.c(), W(y, 1), y.m(i, null)) : y && (Qt(), se(y, 1, 1, () => {
        y = null;
      }), Jt());
      const L = {};
      A[0] & /*value*/
      2 && (L.hidden = /*value*/
      v[1] !== null), A[0] & /*active_source*/
      1 && (L.filetype = /*active_source*/
      v[0] === "clipboard" ? "clipboard" : "image/*"), A[0] & /*root*/
      64 && (L.root = /*root*/
      v[6]), A[0] & /*sources*/
      16 && (L.disable_click = !/*sources*/
      v[4].includes("upload")), A[0] & /*value*/
      2 | A[1] & /*$$scope*/
      16 && (L.$$scope = { dirty: A, ctx: v }), !f && A[0] & /*uploading*/
      65536 && (f = !0, L.uploading = /*uploading*/
      v[16], Pi(() => f = !1)), !_ && A[0] & /*dragging*/
      131072 && (_ = !0, L.dragging = /*dragging*/
      v[17], Pi(() => _ = !1)), u.$set(L), /*value*/
      v[1] !== null ? E ? (E.p(v, A), A[0] & /*value*/
      2 && W(E, 1)) : (E = _r(v), E.c(), W(E, 1), E.m(a, null)) : E && (Qt(), se(E, 1, 1, () => {
        E = null;
      }), Jt()), A[0] & /*sources, value, interactive*/
      146 && (d = /*sources*/
      (v[4].length > 1 || /*sources*/
      v[4].includes("clipboard")) && /*value*/
      v[1] === null && /*interactive*/
      v[7]), d ? N ? (N.p(v, A), A[0] & /*sources, value, interactive*/
      146 && W(N, 1)) : (N = hr(v), N.c(), W(N, 1), N.m(r, null)) : N && (Qt(), se(N, 1, 1, () => {
        N = null;
      }), Jt());
    },
    i(v) {
      m || (W(e.$$.fragment, v), W(b), W(p), W(y), W(u.$$.fragment, v), W(E), W(N), m = !0);
    },
    o(v) {
      se(e.$$.fragment, v), se(b), se(p), se(y), se(u.$$.fragment, v), se(E), se(N), m = !1;
    },
    d(v) {
      v && (Bt(n), Bt(i), Bt(o), Bt(r)), ht(e, v), b && b.d(), p && p.d(), y && y.d(), t[28](null), ht(u), E && E.d(), N && N.d();
    }
  };
}
function Bg(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { value: s } = e, { label: o = void 0 } = e, { show_label: r } = e, { sources: a = ["upload", "clipboard"] } = e, { selectable: u = !1 } = e, { root: f } = e, { interactive: _ } = e, { i18n: h } = e, { showShareButton: c } = e, { showDownloadButton: d } = e, { showClearButton: m } = e, { boxesAlpha: b } = e, { labelList: p } = e, { labelColors: y } = e, { boxMinSize: w } = e, C, P = !1, { active_source: E = null } = e;
  function N({ detail: g }) {
    n(1, s = new Sh()), n(1, s.image = g, s), A("upload");
  }
  function v() {
    x(), A("clear"), A("change");
  }
  const A = kg();
  let B = !1;
  async function L(g) {
    switch (g) {
      case "clipboard":
        C.paste_clipboard();
        break;
    }
  }
  function x() {
    n(1, s = null);
  }
  const J = async (g) => g === null ? "" : `<img src="${await i_(g.image, "base64")}" />`;
  function ce(g) {
    Ml.call(this, t, g);
  }
  function te(g) {
    Ml.call(this, t, g);
  }
  function ke(g) {
    Rn[g ? "unshift" : "push"](() => {
      C = g, n(18, C);
    });
  }
  function ye(g) {
    P = g, n(16, P);
  }
  function me(g) {
    B = g, n(17, B);
  }
  function _e(g) {
    Ml.call(this, t, g);
  }
  function S(g) {
    s = g, n(1, s);
  }
  const k = () => A("change");
  function I(g) {
    E = g, n(0, E), n(4, a);
  }
  return t.$$set = (g) => {
    "value" in g && n(1, s = g.value), "label" in g && n(2, o = g.label), "show_label" in g && n(3, r = g.show_label), "sources" in g && n(4, a = g.sources), "selectable" in g && n(5, u = g.selectable), "root" in g && n(6, f = g.root), "interactive" in g && n(7, _ = g.interactive), "i18n" in g && n(8, h = g.i18n), "showShareButton" in g && n(9, c = g.showShareButton), "showDownloadButton" in g && n(10, d = g.showDownloadButton), "showClearButton" in g && n(11, m = g.showClearButton), "boxesAlpha" in g && n(12, b = g.boxesAlpha), "labelList" in g && n(13, p = g.labelList), "labelColors" in g && n(14, y = g.labelColors), "boxMinSize" in g && n(15, w = g.boxMinSize), "active_source" in g && n(0, E = g.active_source), "$$scope" in g && n(35, l = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*uploading*/
    65536 && P && x(), t.$$.dirty[0] & /*dragging*/
    131072 && A("drag", B), t.$$.dirty[0] & /*active_source, sources*/
    17 && !E && a && n(0, E = a[0]);
  }, [
    E,
    s,
    o,
    r,
    a,
    u,
    f,
    _,
    h,
    c,
    d,
    m,
    b,
    p,
    y,
    w,
    P,
    B,
    C,
    N,
    v,
    A,
    L,
    x,
    i,
    J,
    ce,
    te,
    ke,
    ye,
    me,
    _e,
    S,
    k,
    I,
    l
  ];
}
class Tg extends dg {
  constructor(e) {
    super(), wg(
      this,
      e,
      Bg,
      Ag,
      yg,
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
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Hg,
  attr: Pg,
  check_outros: Ng,
  create_component: Lg,
  destroy_component: Ig,
  detach: Mg,
  element: Og,
  group_outros: Dg,
  init: Rg,
  insert: Ug,
  mount_component: Fg,
  safe_not_equal: qg,
  toggle_class: ot,
  transition_in: bi,
  transition_out: rs
} = window.__gradio__svelte__internal;
function dr(t) {
  let e, n;
  return e = new za({
    props: {
      src: (
        /*samples_dir*/
        t[1] + /*value*/
        t[0].path
      ),
      alt: ""
    }
  }), {
    c() {
      Lg(e.$$.fragment);
    },
    m(i, l) {
      Fg(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*samples_dir, value*/
      3 && (s.src = /*samples_dir*/
      i[1] + /*value*/
      i[0].path), e.$set(s);
    },
    i(i) {
      n || (bi(e.$$.fragment, i), n = !0);
    },
    o(i) {
      rs(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Ig(e, i);
    }
  };
}
function zg(t) {
  let e, n, i = (
    /*value*/
    t[0] && dr(t)
  );
  return {
    c() {
      e = Og("div"), i && i.c(), Pg(e, "class", "container svelte-1sgcyba"), ot(
        e,
        "table",
        /*type*/
        t[2] === "table"
      ), ot(
        e,
        "gallery",
        /*type*/
        t[2] === "gallery"
      ), ot(
        e,
        "selected",
        /*selected*/
        t[3]
      ), ot(
        e,
        "border",
        /*value*/
        t[0]
      );
    },
    m(l, s) {
      Ug(l, e, s), i && i.m(e, null), n = !0;
    },
    p(l, [s]) {
      /*value*/
      l[0] ? i ? (i.p(l, s), s & /*value*/
      1 && bi(i, 1)) : (i = dr(l), i.c(), bi(i, 1), i.m(e, null)) : i && (Dg(), rs(i, 1, 1, () => {
        i = null;
      }), Ng()), (!n || s & /*type*/
      4) && ot(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), (!n || s & /*type*/
      4) && ot(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), (!n || s & /*selected*/
      8) && ot(
        e,
        "selected",
        /*selected*/
        l[3]
      ), (!n || s & /*value*/
      1) && ot(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    i(l) {
      n || (bi(i), n = !0);
    },
    o(l) {
      rs(i), n = !1;
    },
    d(l) {
      l && Mg(e), i && i.d();
    }
  };
}
function jg(t, e, n) {
  let { value: i } = e, { samples_dir: l } = e, { type: s } = e, { selected: o = !1 } = e;
  return t.$$set = (r) => {
    "value" in r && n(0, i = r.value), "samples_dir" in r && n(1, l = r.samples_dir), "type" in r && n(2, s = r.type), "selected" in r && n(3, o = r.selected);
  }, [i, l, s, o];
}
class hb extends Hg {
  constructor(e) {
    super(), Rg(this, e, jg, zg, qg, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: Gg,
  add_flush_callback: mr,
  assign: xg,
  bind: gr,
  binding_callbacks: br,
  check_outros: Vg,
  create_component: It,
  destroy_component: Mt,
  detach: ja,
  empty: Xg,
  flush: $,
  get_spread_object: Wg,
  get_spread_update: Zg,
  group_outros: Yg,
  init: Jg,
  insert: Ga,
  mount_component: Ot,
  safe_not_equal: Qg,
  space: Kg,
  transition_in: $e,
  transition_out: et
} = window.__gradio__svelte__internal;
function $g(t) {
  let e, n;
  return e = new Rf({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [nb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(i, l) {
      Ot(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || ($e(e.$$.fragment, i), n = !0);
    },
    o(i) {
      et(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function eb(t) {
  let e, n;
  return e = new Pr({
    props: {
      i18n: (
        /*gradio*/
        t[23].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(i, l) {
      Ot(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*gradio*/
      8388608 && (s.i18n = /*gradio*/
      i[23].i18n), e.$set(s);
    },
    i(i) {
      n || ($e(e.$$.fragment, i), n = !0);
    },
    o(i) {
      et(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function tb(t) {
  let e, n;
  return e = new Pr({
    props: {
      i18n: (
        /*gradio*/
        t[23].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(i, l) {
      Ot(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*gradio*/
      8388608 && (s.i18n = /*gradio*/
      i[23].i18n), e.$set(s);
    },
    i(i) {
      n || ($e(e.$$.fragment, i), n = !0);
    },
    o(i) {
      et(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function nb(t) {
  let e, n;
  return e = new Sr({}), {
    c() {
      It(e.$$.fragment);
    },
    m(i, l) {
      Ot(e, i, l), n = !0;
    },
    i(i) {
      n || ($e(e.$$.fragment, i), n = !0);
    },
    o(i) {
      et(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function ib(t) {
  let e, n, i, l;
  const s = [tb, eb, $g], o = [];
  function r(a, u) {
    return (
      /*active_source*/
      a[25] === "upload" ? 0 : (
        /*active_source*/
        a[25] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Xg();
    },
    m(a, u) {
      o[e].m(a, u), Ga(a, i, u), l = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (Yg(), et(o[f], 1, 1, () => {
        o[f] = null;
      }), Vg(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), $e(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || ($e(n), l = !0);
    },
    o(a) {
      et(n), l = !1;
    },
    d(a) {
      a && ja(i), o[e].d(a);
    }
  };
}
function lb(t) {
  let e, n, i, l, s, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        t[23].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      t[23].i18n
    ) },
    /*loading_status*/
    t[1]
  ];
  let a = {};
  for (let h = 0; h < r.length; h += 1)
    a = xg(a, r[h]);
  e = new kh({ props: a });
  function u(h) {
    t[26](h);
  }
  function f(h) {
    t[27](h);
  }
  let _ = {
    selectable: (
      /*_selectable*/
      t[10]
    ),
    root: (
      /*root*/
      t[7]
    ),
    sources: (
      /*sources*/
      t[14]
    ),
    interactive: (
      /*interactive*/
      t[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      t[15]
    ),
    showShareButton: (
      /*show_share_button*/
      t[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      t[17]
    ),
    i18n: (
      /*gradio*/
      t[23].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      t[19]
    ),
    labelList: (
      /*label_list*/
      t[20]
    ),
    labelColors: (
      /*label_colors*/
      t[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      t[22]
    ),
    label: (
      /*label*/
      t[5]
    ),
    show_label: (
      /*show_label*/
      t[6]
    ),
    $$slots: { default: [ib] },
    $$scope: { ctx: t }
  };
  return (
    /*active_source*/
    t[25] !== void 0 && (_.active_source = /*active_source*/
    t[25]), /*value*/
    t[0] !== void 0 && (_.value = /*value*/
    t[0]), i = new Tg({ props: _ }), br.push(() => gr(i, "active_source", u)), br.push(() => gr(i, "value", f)), i.$on(
      "change",
      /*change_handler*/
      t[28]
    ), i.$on(
      "edit",
      /*edit_handler*/
      t[29]
    ), i.$on(
      "clear",
      /*clear_handler*/
      t[30]
    ), i.$on(
      "drag",
      /*drag_handler*/
      t[31]
    ), i.$on(
      "upload",
      /*upload_handler*/
      t[32]
    ), i.$on(
      "select",
      /*select_handler*/
      t[33]
    ), i.$on(
      "share",
      /*share_handler*/
      t[34]
    ), i.$on(
      "error",
      /*error_handler*/
      t[35]
    ), {
      c() {
        It(e.$$.fragment), n = Kg(), It(i.$$.fragment);
      },
      m(h, c) {
        Ot(e, h, c), Ga(h, n, c), Ot(i, h, c), o = !0;
      },
      p(h, c) {
        const d = c[0] & /*gradio, loading_status*/
        8388610 ? Zg(r, [
          c[0] & /*gradio*/
          8388608 && {
            autoscroll: (
              /*gradio*/
              h[23].autoscroll
            )
          },
          c[0] & /*gradio*/
          8388608 && { i18n: (
            /*gradio*/
            h[23].i18n
          ) },
          c[0] & /*loading_status*/
          2 && Wg(
            /*loading_status*/
            h[1]
          )
        ]) : {};
        e.$set(d);
        const m = {};
        c[0] & /*_selectable*/
        1024 && (m.selectable = /*_selectable*/
        h[10]), c[0] & /*root*/
        128 && (m.root = /*root*/
        h[7]), c[0] & /*sources*/
        16384 && (m.sources = /*sources*/
        h[14]), c[0] & /*interactive*/
        262144 && (m.interactive = /*interactive*/
        h[18]), c[0] & /*show_download_button*/
        32768 && (m.showDownloadButton = /*show_download_button*/
        h[15]), c[0] & /*show_share_button*/
        65536 && (m.showShareButton = /*show_share_button*/
        h[16]), c[0] & /*show_clear_button*/
        131072 && (m.showClearButton = /*show_clear_button*/
        h[17]), c[0] & /*gradio*/
        8388608 && (m.i18n = /*gradio*/
        h[23].i18n), c[0] & /*boxes_alpha*/
        524288 && (m.boxesAlpha = /*boxes_alpha*/
        h[19]), c[0] & /*label_list*/
        1048576 && (m.labelList = /*label_list*/
        h[20]), c[0] & /*label_colors*/
        2097152 && (m.labelColors = /*label_colors*/
        h[21]), c[0] & /*box_min_size*/
        4194304 && (m.boxMinSize = /*box_min_size*/
        h[22]), c[0] & /*label*/
        32 && (m.label = /*label*/
        h[5]), c[0] & /*show_label*/
        64 && (m.show_label = /*show_label*/
        h[6]), c[0] & /*gradio, active_source*/
        41943040 | c[1] & /*$$scope*/
        32 && (m.$$scope = { dirty: c, ctx: h }), !l && c[0] & /*active_source*/
        33554432 && (l = !0, m.active_source = /*active_source*/
        h[25], mr(() => l = !1)), !s && c[0] & /*value*/
        1 && (s = !0, m.value = /*value*/
        h[0], mr(() => s = !1)), i.$set(m);
      },
      i(h) {
        o || ($e(e.$$.fragment, h), $e(i.$$.fragment, h), o = !0);
      },
      o(h) {
        et(e.$$.fragment, h), et(i.$$.fragment, h), o = !1;
      },
      d(h) {
        h && ja(n), Mt(e, h), Mt(i, h);
      }
    }
  );
}
function sb(t) {
  let e, n;
  return e = new ou({
    props: {
      visible: (
        /*visible*/
        t[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        t[24] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        t[2]
      ),
      elem_classes: (
        /*elem_classes*/
        t[3]
      ),
      height: (
        /*height*/
        t[8] || void 0
      ),
      width: (
        /*width*/
        t[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        t[11]
      ),
      scale: (
        /*scale*/
        t[12]
      ),
      min_width: (
        /*min_width*/
        t[13]
      ),
      $$slots: { default: [lb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(i, l) {
      Ot(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*visible*/
      16 && (s.visible = /*visible*/
      i[4]), l[0] & /*dragging*/
      16777216 && (s.border_mode = /*dragging*/
      i[24] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      i[2]), l[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      i[3]), l[0] & /*height*/
      256 && (s.height = /*height*/
      i[8] || void 0), l[0] & /*width*/
      512 && (s.width = /*width*/
      i[9]), l[0] & /*container*/
      2048 && (s.container = /*container*/
      i[11]), l[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      i[12]), l[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      i[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, active_source, value, dragging, loading_status*/
      67093731 | l[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || ($e(e.$$.fragment, i), n = !0);
    },
    o(i) {
      et(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function ob(t, e, n) {
  let { elem_id: i = "" } = e, { elem_classes: l = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: u } = e, { height: f } = e, { width: _ } = e, { _selectable: h = !1 } = e, { container: c = !0 } = e, { scale: d = null } = e, { min_width: m = void 0 } = e, { loading_status: b } = e, { sources: p = ["upload", "clipboard"] } = e, { show_download_button: y } = e, { show_share_button: w } = e, { show_clear_button: C } = e, { interactive: P } = e, { boxes_alpha: E } = e, { label_list: N } = e, { label_colors: v } = e, { box_min_size: A } = e, { gradio: B } = e, L, x = null;
  function J(g) {
    x = g, n(25, x);
  }
  function ce(g) {
    o = g, n(0, o);
  }
  const te = () => B.dispatch("change"), ke = () => B.dispatch("edit"), ye = () => {
    B.dispatch("clear");
  }, me = ({ detail: g }) => n(24, L = g), _e = () => B.dispatch("upload"), S = ({ detail: g }) => B.dispatch("select", g), k = ({ detail: g }) => B.dispatch("share", g), I = ({ detail: g }) => {
    n(1, b = b || {}), n(1, b.status = "error", b), B.dispatch("error", g);
  };
  return t.$$set = (g) => {
    "elem_id" in g && n(2, i = g.elem_id), "elem_classes" in g && n(3, l = g.elem_classes), "visible" in g && n(4, s = g.visible), "value" in g && n(0, o = g.value), "label" in g && n(5, r = g.label), "show_label" in g && n(6, a = g.show_label), "root" in g && n(7, u = g.root), "height" in g && n(8, f = g.height), "width" in g && n(9, _ = g.width), "_selectable" in g && n(10, h = g._selectable), "container" in g && n(11, c = g.container), "scale" in g && n(12, d = g.scale), "min_width" in g && n(13, m = g.min_width), "loading_status" in g && n(1, b = g.loading_status), "sources" in g && n(14, p = g.sources), "show_download_button" in g && n(15, y = g.show_download_button), "show_share_button" in g && n(16, w = g.show_share_button), "show_clear_button" in g && n(17, C = g.show_clear_button), "interactive" in g && n(18, P = g.interactive), "boxes_alpha" in g && n(19, E = g.boxes_alpha), "label_list" in g && n(20, N = g.label_list), "label_colors" in g && n(21, v = g.label_colors), "box_min_size" in g && n(22, A = g.box_min_size), "gradio" in g && n(23, B = g.gradio);
  }, [
    o,
    b,
    i,
    l,
    s,
    r,
    a,
    u,
    f,
    _,
    h,
    c,
    d,
    m,
    p,
    y,
    w,
    C,
    P,
    E,
    N,
    v,
    A,
    B,
    L,
    x,
    J,
    ce,
    te,
    ke,
    ye,
    me,
    _e,
    S,
    k,
    I
  ];
}
class db extends Gg {
  constructor(e) {
    super(), Jg(
      this,
      e,
      ob,
      sb,
      Qg,
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
        gradio: 23
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), $();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), $();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), $();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), $();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), $();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), $();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), $();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), $();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), $();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), $();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), $();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), $();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), $();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), $();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), $();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), $();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), $();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), $();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), $();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), $();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), $();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), $();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), $();
  }
  get gradio() {
    return this.$$.ctx[23];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), $();
  }
}
export {
  hb as BaseExample,
  db as default
};
