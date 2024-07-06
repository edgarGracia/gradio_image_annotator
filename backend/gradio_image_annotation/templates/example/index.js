const { setContext: io, getContext: At } = window.__gradio__svelte__internal, Bt = "WORKER_PROXY_CONTEXT_KEY";
function Dt() {
  return At(Bt);
}
function Ht(t) {
  return t.host === window.location.host || t.host === "localhost:7860" || t.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  t.host === "lite.local";
}
function Tt(t, e) {
  const n = e.toLowerCase();
  for (const [i, l] of Object.entries(t))
    if (i.toLowerCase() === n)
      return l;
}
function qt(t) {
  if (t == null)
    return !1;
  const e = new URL(t, window.location.href);
  return !(!Ht(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Lt(t) {
  if (t == null || !qt(t))
    return t;
  const e = Dt();
  if (e == null)
    return t;
  const i = new URL(t, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: i,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${i} from the Wasm worker.`);
    const a = new Blob([l.body], {
      type: Tt(l.headers, "content-type")
    });
    return URL.createObjectURL(a);
  });
}
const {
  SvelteComponent: Rt,
  append: tn,
  attr: U,
  detach: Xt,
  init: Yt,
  insert: Ot,
  noop: ln,
  safe_not_equal: It,
  set_style: P,
  svg_element: He
} = window.__gradio__svelte__internal;
function jt(t) {
  let e, n, i, l;
  return {
    c() {
      e = He("svg"), n = He("g"), i = He("path"), l = He("path"), U(i, "d", "M18,6L6.087,17.913"), P(i, "fill", "none"), P(i, "fill-rule", "nonzero"), P(i, "stroke-width", "2px"), U(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), U(l, "d", "M4.364,4.364L19.636,19.636"), P(l, "fill", "none"), P(l, "fill-rule", "nonzero"), P(l, "stroke-width", "2px"), U(e, "width", "100%"), U(e, "height", "100%"), U(e, "viewBox", "0 0 24 24"), U(e, "version", "1.1"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), U(e, "xml:space", "preserve"), U(e, "stroke", "currentColor"), P(e, "fill-rule", "evenodd"), P(e, "clip-rule", "evenodd"), P(e, "stroke-linecap", "round"), P(e, "stroke-linejoin", "round");
    },
    m(a, r) {
      Ot(a, e, r), tn(e, n), tn(n, i), tn(e, l);
    },
    p: ln,
    i: ln,
    o: ln,
    d(a) {
      a && Xt(e);
    }
  };
}
class Ut extends Rt {
  constructor(e) {
    super(), Yt(this, e, null, jt, It, {});
  }
}
const {
  SvelteComponent: Wt,
  append: Nt,
  attr: oe,
  detach: Ft,
  init: Pt,
  insert: Kt,
  noop: sn,
  safe_not_equal: Vt,
  svg_element: Mn
} = window.__gradio__svelte__internal;
function Gt(t) {
  let e, n;
  return {
    c() {
      e = Mn("svg"), n = Mn("path"), oe(n, "d", "M5 8l4 4 4-4z"), oe(e, "class", "dropdown-arrow svelte-145leq6"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "viewBox", "0 0 18 18");
    },
    m(i, l) {
      Kt(i, e, l), Nt(e, n);
    },
    p: sn,
    i: sn,
    o: sn,
    d(i) {
      i && Ft(e);
    }
  };
}
class Jt extends Wt {
  constructor(e) {
    super(), Pt(this, e, null, Gt, Vt, {});
  }
}
const {
  SvelteComponent: Qt,
  append: Zt,
  attr: W,
  detach: $t,
  init: ei,
  insert: ni,
  noop: on,
  safe_not_equal: ti,
  svg_element: An
} = window.__gradio__svelte__internal;
function ii(t) {
  let e, n;
  return {
    c() {
      e = An("svg"), n = An("path"), W(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), W(e, "xmlns", "http://www.w3.org/2000/svg"), W(e, "width", "100%"), W(e, "height", "100%"), W(e, "viewBox", "0 0 24 24"), W(e, "fill", "none"), W(e, "stroke", "currentColor"), W(e, "stroke-width", "1.5"), W(e, "stroke-linecap", "round"), W(e, "stroke-linejoin", "round"), W(e, "class", "feather feather-edit-2");
    },
    m(i, l) {
      ni(i, e, l), Zt(e, n);
    },
    p: on,
    i: on,
    o: on,
    d(i) {
      i && $t(e);
    }
  };
}
class li extends Qt {
  constructor(e) {
    super(), ei(this, e, null, ii, ti, {});
  }
}
const {
  SvelteComponent: si,
  append: Bn,
  attr: T,
  detach: oi,
  init: ai,
  insert: ri,
  noop: an,
  safe_not_equal: fi,
  set_style: Q,
  svg_element: rn
} = window.__gradio__svelte__internal;
function ci(t) {
  let e, n, i;
  return {
    c() {
      e = rn("svg"), n = rn("line"), i = rn("line"), T(n, "x1", "4"), T(n, "y1", "12"), T(n, "x2", "20"), T(n, "y2", "12"), Q(n, "fill", "none"), Q(n, "stroke-width", "2px"), T(i, "x1", "12"), T(i, "y1", "4"), T(i, "x2", "12"), T(i, "y2", "20"), Q(i, "fill", "none"), Q(i, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Q(e, "fill-rule", "evenodd"), Q(e, "clip-rule", "evenodd"), Q(e, "stroke-linecap", "round"), Q(e, "stroke-linejoin", "round");
    },
    m(l, a) {
      ri(l, e, a), Bn(e, n), Bn(e, i);
    },
    p: an,
    i: an,
    o: an,
    d(l) {
      l && oi(e);
    }
  };
}
class ui extends si {
  constructor(e) {
    super(), ai(this, e, null, ci, fi, {});
  }
}
const {
  SvelteComponent: hi,
  attr: _i,
  create_slot: di,
  detach: mi,
  element: bi,
  get_all_dirty_from_scope: gi,
  get_slot_changes: wi,
  init: ki,
  insert: pi,
  safe_not_equal: vi,
  transition_in: yi,
  transition_out: Ci,
  update_slot_base: Si
} = window.__gradio__svelte__internal;
function zi(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), l = di(
    i,
    t,
    /*$$scope*/
    t[0],
    null
  );
  return {
    c() {
      e = bi("div"), l && l.c(), _i(e, "class", "svelte-1hnfib2");
    },
    m(a, r) {
      pi(a, e, r), l && l.m(e, null), n = !0;
    },
    p(a, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      1) && Si(
        l,
        i,
        a,
        /*$$scope*/
        a[0],
        n ? wi(
          i,
          /*$$scope*/
          a[0],
          r,
          null
        ) : gi(
          /*$$scope*/
          a[0]
        ),
        null
      );
    },
    i(a) {
      n || (yi(l, a), n = !0);
    },
    o(a) {
      Ci(l, a), n = !1;
    },
    d(a) {
      a && mi(e), l && l.d(a);
    }
  };
}
function xi(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e;
  return t.$$set = (a) => {
    "$$scope" in a && n(0, l = a.$$scope);
  }, [l, i];
}
class Ei extends hi {
  constructor(e) {
    super(), ki(this, e, xi, zi, vi, {});
  }
}
const {
  SvelteComponent: Mi,
  attr: Dn,
  check_outros: Ai,
  create_component: Bi,
  create_slot: Di,
  destroy_component: Hi,
  detach: je,
  element: Ti,
  empty: qi,
  get_all_dirty_from_scope: Li,
  get_slot_changes: Ri,
  group_outros: Xi,
  init: Yi,
  insert: Ue,
  mount_component: Oi,
  safe_not_equal: Ii,
  set_data: ji,
  space: Ui,
  text: Wi,
  toggle_class: ae,
  transition_in: be,
  transition_out: We,
  update_slot_base: Ni
} = window.__gradio__svelte__internal;
function Hn(t) {
  let e, n;
  return e = new Ei({
    props: {
      $$slots: { default: [Fi] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bi(e.$$.fragment);
    },
    m(i, l) {
      Oi(e, i, l), n = !0;
    },
    p(i, l) {
      const a = {};
      l & /*$$scope, info*/
      10 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (be(e.$$.fragment, i), n = !0);
    },
    o(i) {
      We(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Hi(e, i);
    }
  };
}
function Fi(t) {
  let e;
  return {
    c() {
      e = Wi(
        /*info*/
        t[1]
      );
    },
    m(n, i) {
      Ue(n, e, i);
    },
    p(n, i) {
      i & /*info*/
      2 && ji(
        e,
        /*info*/
        n[1]
      );
    },
    d(n) {
      n && je(e);
    }
  };
}
function Pi(t) {
  let e, n, i, l;
  const a = (
    /*#slots*/
    t[2].default
  ), r = Di(
    a,
    t,
    /*$$scope*/
    t[3],
    null
  );
  let o = (
    /*info*/
    t[1] && Hn(t)
  );
  return {
    c() {
      e = Ti("span"), r && r.c(), n = Ui(), o && o.c(), i = qi(), Dn(e, "data-testid", "block-info"), Dn(e, "class", "svelte-22c38v"), ae(e, "sr-only", !/*show_label*/
      t[0]), ae(e, "hide", !/*show_label*/
      t[0]), ae(
        e,
        "has-info",
        /*info*/
        t[1] != null
      );
    },
    m(s, c) {
      Ue(s, e, c), r && r.m(e, null), Ue(s, n, c), o && o.m(s, c), Ue(s, i, c), l = !0;
    },
    p(s, [c]) {
      r && r.p && (!l || c & /*$$scope*/
      8) && Ni(
        r,
        a,
        s,
        /*$$scope*/
        s[3],
        l ? Ri(
          a,
          /*$$scope*/
          s[3],
          c,
          null
        ) : Li(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!l || c & /*show_label*/
      1) && ae(e, "sr-only", !/*show_label*/
      s[0]), (!l || c & /*show_label*/
      1) && ae(e, "hide", !/*show_label*/
      s[0]), (!l || c & /*info*/
      2) && ae(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? o ? (o.p(s, c), c & /*info*/
      2 && be(o, 1)) : (o = Hn(s), o.c(), be(o, 1), o.m(i.parentNode, i)) : o && (Xi(), We(o, 1, 1, () => {
        o = null;
      }), Ai());
    },
    i(s) {
      l || (be(r, s), be(o), l = !0);
    },
    o(s) {
      We(r, s), We(o), l = !1;
    },
    d(s) {
      s && (je(e), je(n), je(i)), r && r.d(s), o && o.d(s);
    }
  };
}
function Ki(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { show_label: a = !0 } = e, { info: r = void 0 } = e;
  return t.$$set = (o) => {
    "show_label" in o && n(0, a = o.show_label), "info" in o && n(1, r = o.info), "$$scope" in o && n(3, l = o.$$scope);
  }, [a, r, i, l];
}
class ot extends Mi {
  constructor(e) {
    super(), Yi(this, e, Ki, Pi, Ii, { show_label: 0, info: 1 });
  }
}
const Vi = [
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
], Tn = {
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
Vi.reduce(
  (t, { color: e, primary: n, secondary: i }) => ({
    ...t,
    [e]: {
      primary: Tn[e][n],
      secondary: Tn[e][i]
    }
  }),
  {}
);
const {
  SvelteComponent: Gi,
  append: qn,
  attr: fn,
  bubble: Ln,
  create_component: Ji,
  destroy_component: Qi,
  detach: at,
  element: Rn,
  init: Zi,
  insert: rt,
  listen: cn,
  mount_component: $i,
  run_all: el,
  safe_not_equal: nl,
  set_data: tl,
  set_input_value: Xn,
  space: il,
  text: ll,
  transition_in: sl,
  transition_out: ol
} = window.__gradio__svelte__internal, { createEventDispatcher: al, afterUpdate: rl } = window.__gradio__svelte__internal;
function fl(t) {
  let e;
  return {
    c() {
      e = ll(
        /*label*/
        t[1]
      );
    },
    m(n, i) {
      rt(n, e, i);
    },
    p(n, i) {
      i & /*label*/
      2 && tl(
        e,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && at(e);
    }
  };
}
function cl(t) {
  let e, n, i, l, a, r, o;
  return n = new ot({
    props: {
      show_label: (
        /*show_label*/
        t[4]
      ),
      info: (
        /*info*/
        t[2]
      ),
      $$slots: { default: [fl] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = Rn("label"), Ji(n.$$.fragment), i = il(), l = Rn("input"), fn(l, "type", "color"), l.disabled = /*disabled*/
      t[3], fn(l, "class", "svelte-16l8u73"), fn(e, "class", "block");
    },
    m(s, c) {
      rt(s, e, c), $i(n, e, null), qn(e, i), qn(e, l), Xn(
        l,
        /*value*/
        t[0]
      ), a = !0, r || (o = [
        cn(
          l,
          "input",
          /*input_input_handler*/
          t[8]
        ),
        cn(
          l,
          "focus",
          /*focus_handler*/
          t[6]
        ),
        cn(
          l,
          "blur",
          /*blur_handler*/
          t[7]
        )
      ], r = !0);
    },
    p(s, [c]) {
      const f = {};
      c & /*show_label*/
      16 && (f.show_label = /*show_label*/
      s[4]), c & /*info*/
      4 && (f.info = /*info*/
      s[2]), c & /*$$scope, label*/
      2050 && (f.$$scope = { dirty: c, ctx: s }), n.$set(f), (!a || c & /*disabled*/
      8) && (l.disabled = /*disabled*/
      s[3]), c & /*value*/
      1 && Xn(
        l,
        /*value*/
        s[0]
      );
    },
    i(s) {
      a || (sl(n.$$.fragment, s), a = !0);
    },
    o(s) {
      ol(n.$$.fragment, s), a = !1;
    },
    d(s) {
      s && at(e), Qi(n), r = !1, el(o);
    }
  };
}
function ul(t, e, n) {
  let { value: i = "#000000" } = e, { value_is_output: l = !1 } = e, { label: a } = e, { info: r = void 0 } = e, { disabled: o = !1 } = e, { show_label: s = !0 } = e;
  const c = al();
  function f() {
    c("change", i), l || c("input");
  }
  rl(() => {
    n(5, l = !1);
  });
  function u(d) {
    Ln.call(this, t, d);
  }
  function b(d) {
    Ln.call(this, t, d);
  }
  function g() {
    i = this.value, n(0, i);
  }
  return t.$$set = (d) => {
    "value" in d && n(0, i = d.value), "value_is_output" in d && n(5, l = d.value_is_output), "label" in d && n(1, a = d.label), "info" in d && n(2, r = d.info), "disabled" in d && n(3, o = d.disabled), "show_label" in d && n(4, s = d.show_label);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    1 && f();
  }, [
    i,
    a,
    r,
    o,
    s,
    l,
    u,
    b,
    g
  ];
}
class hl extends Gi {
  constructor(e) {
    super(), Zi(this, e, ul, cl, nl, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
function Yn(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function _l(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function On(t, { delay: e = 0, duration: n = 400, easing: i = _l, x: l = 0, y: a = 0, opacity: r = 0 } = {}) {
  const o = getComputedStyle(t), s = +o.opacity, c = o.transform === "none" ? "" : o.transform, f = s * (1 - r), [u, b] = Yn(l), [g, d] = Yn(a);
  return {
    delay: e,
    duration: n,
    easing: i,
    css: (k, _) => `
			transform: ${c} translate(${(1 - k) * u}${b}, ${(1 - k) * g}${d});
			opacity: ${s - f * _}`
  };
}
const {
  SvelteComponent: dl,
  append: ft,
  attr: A,
  bubble: ml,
  check_outros: bl,
  create_slot: ct,
  detach: xe,
  element: Qe,
  empty: gl,
  get_all_dirty_from_scope: ut,
  get_slot_changes: ht,
  group_outros: wl,
  init: kl,
  insert: Ee,
  listen: pl,
  safe_not_equal: vl,
  set_style: L,
  space: _t,
  src_url_equal: Ke,
  toggle_class: he,
  transition_in: Ve,
  transition_out: Ge,
  update_slot_base: dt
} = window.__gradio__svelte__internal;
function yl(t) {
  let e, n, i, l, a, r, o = (
    /*icon*/
    t[7] && In(t)
  );
  const s = (
    /*#slots*/
    t[12].default
  ), c = ct(
    s,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      e = Qe("button"), o && o.c(), n = _t(), c && c.c(), A(e, "class", i = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), A(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), e.disabled = /*disabled*/
      t[8], he(e, "hidden", !/*visible*/
      t[2]), L(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), L(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), L(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(f, u) {
      Ee(f, e, u), o && o.m(e, null), ft(e, n), c && c.m(e, null), l = !0, a || (r = pl(
        e,
        "click",
        /*click_handler*/
        t[13]
      ), a = !0);
    },
    p(f, u) {
      /*icon*/
      f[7] ? o ? o.p(f, u) : (o = In(f), o.c(), o.m(e, n)) : o && (o.d(1), o = null), c && c.p && (!l || u & /*$$scope*/
      2048) && dt(
        c,
        s,
        f,
        /*$$scope*/
        f[11],
        l ? ht(
          s,
          /*$$scope*/
          f[11],
          u,
          null
        ) : ut(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && A(e, "class", i), (!l || u & /*elem_id*/
      1) && A(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && he(e, "hidden", !/*visible*/
      f[2]), u & /*scale*/
      512 && L(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), u & /*scale*/
      512 && L(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && L(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      l || (Ve(c, f), l = !0);
    },
    o(f) {
      Ge(c, f), l = !1;
    },
    d(f) {
      f && xe(e), o && o.d(), c && c.d(f), a = !1, r();
    }
  };
}
function Cl(t) {
  let e, n, i, l, a = (
    /*icon*/
    t[7] && jn(t)
  );
  const r = (
    /*#slots*/
    t[12].default
  ), o = ct(
    r,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      e = Qe("a"), a && a.c(), n = _t(), o && o.c(), A(
        e,
        "href",
        /*link*/
        t[6]
      ), A(e, "rel", "noopener noreferrer"), A(
        e,
        "aria-disabled",
        /*disabled*/
        t[8]
      ), A(e, "class", i = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), A(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), he(e, "hidden", !/*visible*/
      t[2]), he(
        e,
        "disabled",
        /*disabled*/
        t[8]
      ), L(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), L(
        e,
        "pointer-events",
        /*disabled*/
        t[8] ? "none" : null
      ), L(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), L(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(s, c) {
      Ee(s, e, c), a && a.m(e, null), ft(e, n), o && o.m(e, null), l = !0;
    },
    p(s, c) {
      /*icon*/
      s[7] ? a ? a.p(s, c) : (a = jn(s), a.c(), a.m(e, n)) : a && (a.d(1), a = null), o && o.p && (!l || c & /*$$scope*/
      2048) && dt(
        o,
        r,
        s,
        /*$$scope*/
        s[11],
        l ? ht(
          r,
          /*$$scope*/
          s[11],
          c,
          null
        ) : ut(
          /*$$scope*/
          s[11]
        ),
        null
      ), (!l || c & /*link*/
      64) && A(
        e,
        "href",
        /*link*/
        s[6]
      ), (!l || c & /*disabled*/
      256) && A(
        e,
        "aria-disabled",
        /*disabled*/
        s[8]
      ), (!l || c & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      s[4] + " " + /*variant*/
      s[3] + " " + /*elem_classes*/
      s[1].join(" ") + " svelte-8huxfn")) && A(e, "class", i), (!l || c & /*elem_id*/
      1) && A(
        e,
        "id",
        /*elem_id*/
        s[0]
      ), (!l || c & /*size, variant, elem_classes, visible*/
      30) && he(e, "hidden", !/*visible*/
      s[2]), (!l || c & /*size, variant, elem_classes, disabled*/
      282) && he(
        e,
        "disabled",
        /*disabled*/
        s[8]
      ), c & /*scale*/
      512 && L(
        e,
        "flex-grow",
        /*scale*/
        s[9]
      ), c & /*disabled*/
      256 && L(
        e,
        "pointer-events",
        /*disabled*/
        s[8] ? "none" : null
      ), c & /*scale*/
      512 && L(
        e,
        "width",
        /*scale*/
        s[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && L(e, "min-width", typeof /*min_width*/
      s[10] == "number" ? `calc(min(${/*min_width*/
      s[10]}px, 100%))` : null);
    },
    i(s) {
      l || (Ve(o, s), l = !0);
    },
    o(s) {
      Ge(o, s), l = !1;
    },
    d(s) {
      s && xe(e), a && a.d(), o && o.d(s);
    }
  };
}
function In(t) {
  let e, n, i;
  return {
    c() {
      e = Qe("img"), A(e, "class", "button-icon svelte-8huxfn"), Ke(e.src, n = /*icon*/
      t[7].url) || A(e, "src", n), A(e, "alt", i = `${/*value*/
      t[5]} icon`);
    },
    m(l, a) {
      Ee(l, e, a);
    },
    p(l, a) {
      a & /*icon*/
      128 && !Ke(e.src, n = /*icon*/
      l[7].url) && A(e, "src", n), a & /*value*/
      32 && i !== (i = `${/*value*/
      l[5]} icon`) && A(e, "alt", i);
    },
    d(l) {
      l && xe(e);
    }
  };
}
function jn(t) {
  let e, n, i;
  return {
    c() {
      e = Qe("img"), A(e, "class", "button-icon svelte-8huxfn"), Ke(e.src, n = /*icon*/
      t[7].url) || A(e, "src", n), A(e, "alt", i = `${/*value*/
      t[5]} icon`);
    },
    m(l, a) {
      Ee(l, e, a);
    },
    p(l, a) {
      a & /*icon*/
      128 && !Ke(e.src, n = /*icon*/
      l[7].url) && A(e, "src", n), a & /*value*/
      32 && i !== (i = `${/*value*/
      l[5]} icon`) && A(e, "alt", i);
    },
    d(l) {
      l && xe(e);
    }
  };
}
function Sl(t) {
  let e, n, i, l;
  const a = [Cl, yl], r = [];
  function o(s, c) {
    return (
      /*link*/
      s[6] && /*link*/
      s[6].length > 0 ? 0 : 1
    );
  }
  return e = o(t), n = r[e] = a[e](t), {
    c() {
      n.c(), i = gl();
    },
    m(s, c) {
      r[e].m(s, c), Ee(s, i, c), l = !0;
    },
    p(s, [c]) {
      let f = e;
      e = o(s), e === f ? r[e].p(s, c) : (wl(), Ge(r[f], 1, 1, () => {
        r[f] = null;
      }), bl(), n = r[e], n ? n.p(s, c) : (n = r[e] = a[e](s), n.c()), Ve(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      l || (Ve(n), l = !0);
    },
    o(s) {
      Ge(n), l = !1;
    },
    d(s) {
      s && xe(i), r[e].d(s);
    }
  };
}
function zl(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { elem_id: a = "" } = e, { elem_classes: r = [] } = e, { visible: o = !0 } = e, { variant: s = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: u = null } = e, { icon: b = null } = e, { disabled: g = !1 } = e, { scale: d = null } = e, { min_width: k = void 0 } = e;
  function _(h) {
    ml.call(this, t, h);
  }
  return t.$$set = (h) => {
    "elem_id" in h && n(0, a = h.elem_id), "elem_classes" in h && n(1, r = h.elem_classes), "visible" in h && n(2, o = h.visible), "variant" in h && n(3, s = h.variant), "size" in h && n(4, c = h.size), "value" in h && n(5, f = h.value), "link" in h && n(6, u = h.link), "icon" in h && n(7, b = h.icon), "disabled" in h && n(8, g = h.disabled), "scale" in h && n(9, d = h.scale), "min_width" in h && n(10, k = h.min_width), "$$scope" in h && n(11, l = h.$$scope);
  }, [
    a,
    r,
    o,
    s,
    c,
    f,
    u,
    b,
    g,
    d,
    k,
    l,
    i,
    _
  ];
}
class Un extends dl {
  constructor(e) {
    super(), kl(this, e, zl, Sl, vl, {
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
  SvelteComponent: xl,
  add_render_callback: mt,
  append: Te,
  attr: Y,
  binding_callbacks: Wn,
  check_outros: El,
  create_bidirectional_transition: Nn,
  destroy_each: Ml,
  detach: ke,
  element: Je,
  empty: Al,
  ensure_array_like: Fn,
  group_outros: Bl,
  init: Dl,
  insert: pe,
  listen: bn,
  prevent_default: Hl,
  run_all: Tl,
  safe_not_equal: ql,
  set_data: Ll,
  set_style: re,
  space: gn,
  text: Rl,
  toggle_class: K,
  transition_in: un,
  transition_out: Pn
} = window.__gradio__svelte__internal, { createEventDispatcher: Xl } = window.__gradio__svelte__internal;
function Kn(t, e, n) {
  const i = t.slice();
  return i[26] = e[n], i;
}
function Vn(t) {
  let e, n, i, l, a, r = Fn(
    /*filtered_indices*/
    t[1]
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Gn(Kn(t, r, s));
  return {
    c() {
      e = Je("ul");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      Y(e, "class", "options svelte-yuohum"), Y(e, "role", "listbox"), re(
        e,
        "bottom",
        /*bottom*/
        t[9]
      ), re(e, "max-height", `calc(${/*max_height*/
      t[10]}px - var(--window-padding))`), re(
        e,
        "width",
        /*input_width*/
        t[8] + "px"
      );
    },
    m(s, c) {
      pe(s, e, c);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(e, null);
      t[22](e), i = !0, l || (a = bn(e, "mousedown", Hl(
        /*mousedown_handler*/
        t[21]
      )), l = !0);
    },
    p(s, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        r = Fn(
          /*filtered_indices*/
          s[1]
        );
        let f;
        for (f = 0; f < r.length; f += 1) {
          const u = Kn(s, r, f);
          o[f] ? o[f].p(u, c) : (o[f] = Gn(u), o[f].c(), o[f].m(e, null));
        }
        for (; f < o.length; f += 1)
          o[f].d(1);
        o.length = r.length;
      }
      c & /*bottom*/
      512 && re(
        e,
        "bottom",
        /*bottom*/
        s[9]
      ), c & /*max_height*/
      1024 && re(e, "max-height", `calc(${/*max_height*/
      s[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && re(
        e,
        "width",
        /*input_width*/
        s[8] + "px"
      );
    },
    i(s) {
      i || (s && mt(() => {
        i && (n || (n = Nn(e, On, { duration: 200, y: 5 }, !0)), n.run(1));
      }), i = !0);
    },
    o(s) {
      s && (n || (n = Nn(e, On, { duration: 200, y: 5 }, !1)), n.run(0)), i = !1;
    },
    d(s) {
      s && ke(e), Ml(o, s), t[22](null), s && n && n.end(), l = !1, a();
    }
  };
}
function Gn(t) {
  let e, n, i, l = (
    /*choices*/
    t[0][
      /*index*/
      t[26]
    ][0] + ""
  ), a, r, o, s, c;
  return {
    c() {
      e = Je("li"), n = Je("span"), n.textContent = "✓", i = gn(), a = Rl(l), r = gn(), Y(n, "class", "inner-item svelte-yuohum"), K(n, "hide", !/*selected_indices*/
      t[4].includes(
        /*index*/
        t[26]
      )), Y(e, "class", "item svelte-yuohum"), Y(e, "data-index", o = /*index*/
      t[26]), Y(e, "aria-label", s = /*choices*/
      t[0][
        /*index*/
        t[26]
      ][0]), Y(e, "data-testid", "dropdown-option"), Y(e, "role", "option"), Y(e, "aria-selected", c = /*selected_indices*/
      t[4].includes(
        /*index*/
        t[26]
      )), K(
        e,
        "selected",
        /*selected_indices*/
        t[4].includes(
          /*index*/
          t[26]
        )
      ), K(
        e,
        "active",
        /*index*/
        t[26] === /*active_index*/
        t[5]
      ), K(
        e,
        "bg-gray-100",
        /*index*/
        t[26] === /*active_index*/
        t[5]
      ), K(
        e,
        "dark:bg-gray-600",
        /*index*/
        t[26] === /*active_index*/
        t[5]
      );
    },
    m(f, u) {
      pe(f, e, u), Te(e, n), Te(e, i), Te(e, a), Te(e, r);
    },
    p(f, u) {
      u & /*selected_indices, filtered_indices*/
      18 && K(n, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && Ll(a, l), u & /*filtered_indices*/
      2 && o !== (o = /*index*/
      f[26]) && Y(e, "data-index", o), u & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && Y(e, "aria-label", s), u & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && Y(e, "aria-selected", c), u & /*selected_indices, filtered_indices*/
      18 && K(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && K(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && K(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), u & /*filtered_indices, active_index*/
      34 && K(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && ke(e);
    }
  };
}
function Yl(t) {
  let e, n, i, l, a;
  mt(
    /*onwindowresize*/
    t[19]
  );
  let r = (
    /*show_options*/
    t[2] && !/*disabled*/
    t[3] && Vn(t)
  );
  return {
    c() {
      e = Je("div"), n = gn(), r && r.c(), i = Al(), Y(e, "class", "reference");
    },
    m(o, s) {
      pe(o, e, s), t[20](e), pe(o, n, s), r && r.m(o, s), pe(o, i, s), l || (a = [
        bn(
          window,
          "scroll",
          /*scroll_listener*/
          t[12]
        ),
        bn(
          window,
          "resize",
          /*onwindowresize*/
          t[19]
        )
      ], l = !0);
    },
    p(o, [s]) {
      /*show_options*/
      o[2] && !/*disabled*/
      o[3] ? r ? (r.p(o, s), s & /*show_options, disabled*/
      12 && un(r, 1)) : (r = Vn(o), r.c(), un(r, 1), r.m(i.parentNode, i)) : r && (Bl(), Pn(r, 1, 1, () => {
        r = null;
      }), El());
    },
    i(o) {
      un(r);
    },
    o(o) {
      Pn(r);
    },
    d(o) {
      o && (ke(e), ke(n), ke(i)), t[20](null), r && r.d(o), l = !1, Tl(a);
    }
  };
}
function Ol(t, e, n) {
  var i, l;
  let { choices: a } = e, { filtered_indices: r } = e, { show_options: o = !1 } = e, { disabled: s = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, u, b, g, d, k, _, h, p, m;
  function E() {
    const { top: v, bottom: F } = k.getBoundingClientRect();
    n(16, u = v), n(17, b = m - F);
  }
  let z = null;
  function x() {
    o && (z !== null && clearTimeout(z), z = setTimeout(
      () => {
        E(), z = null;
      },
      10
    ));
  }
  const M = Xl();
  function y() {
    n(11, m = window.innerHeight);
  }
  function H(v) {
    Wn[v ? "unshift" : "push"](() => {
      k = v, n(6, k);
    });
  }
  const R = (v) => M("change", v);
  function N(v) {
    Wn[v ? "unshift" : "push"](() => {
      _ = v, n(7, _);
    });
  }
  return t.$$set = (v) => {
    "choices" in v && n(0, a = v.choices), "filtered_indices" in v && n(1, r = v.filtered_indices), "show_options" in v && n(2, o = v.show_options), "disabled" in v && n(3, s = v.disabled), "selected_indices" in v && n(4, c = v.selected_indices), "active_index" in v && n(5, f = v.active_index);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (o && k) {
        if (_ && c.length > 0) {
          let F = _.querySelectorAll("li");
          for (const se of Array.from(F))
            if (se.getAttribute("data-index") === c[0].toString()) {
              n(14, i = _ == null ? void 0 : _.scrollTo) === null || i === void 0 || i.call(_, 0, se.offsetTop);
              break;
            }
        }
        E();
        const v = n(15, l = k.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        n(18, g = (v == null ? void 0 : v.height) || 0), n(8, d = (v == null ? void 0 : v.width) || 0);
      }
      b > u ? (n(10, p = b), n(9, h = null)) : (n(9, h = `${b + g}px`), n(10, p = u - g));
    }
  }, [
    a,
    r,
    o,
    s,
    c,
    f,
    k,
    _,
    d,
    h,
    p,
    m,
    x,
    M,
    i,
    l,
    u,
    b,
    g,
    y,
    H,
    R,
    N
  ];
}
class Il extends xl {
  constructor(e) {
    super(), Dl(this, e, Ol, Yl, ql, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function jl(t, e) {
  return (t % e + e) % e;
}
function Jn(t, e) {
  return t.reduce((n, i, l) => ((!e || i[0].toLowerCase().includes(e.toLowerCase())) && n.push(l), n), []);
}
function Ul(t, e, n) {
  t("change", e), n || t("input");
}
function Wl(t, e, n) {
  if (t.key === "Escape")
    return [!1, e];
  if ((t.key === "ArrowDown" || t.key === "ArrowUp") && n.length >= 0)
    if (e === null)
      e = t.key === "ArrowDown" ? n[0] : n[n.length - 1];
    else {
      const i = n.indexOf(e), l = t.key === "ArrowUp" ? -1 : 1;
      e = n[jl(i + l, n.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Nl,
  append: ee,
  attr: X,
  binding_callbacks: Fl,
  check_outros: Pl,
  create_component: wn,
  destroy_component: kn,
  detach: yn,
  element: ce,
  group_outros: Kl,
  init: Vl,
  insert: Cn,
  listen: me,
  mount_component: pn,
  run_all: Gl,
  safe_not_equal: Jl,
  set_data: Ql,
  set_input_value: Qn,
  space: hn,
  text: Zl,
  toggle_class: fe,
  transition_in: ue,
  transition_out: ge
} = window.__gradio__svelte__internal, { onMount: $l } = window.__gradio__svelte__internal, { createEventDispatcher: es, afterUpdate: ns } = window.__gradio__svelte__internal;
function ts(t) {
  let e;
  return {
    c() {
      e = Zl(
        /*label*/
        t[0]
      );
    },
    m(n, i) {
      Cn(n, e, i);
    },
    p(n, i) {
      i[0] & /*label*/
      1 && Ql(
        e,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && yn(e);
    }
  };
}
function Zn(t) {
  let e, n, i;
  return n = new Jt({}), {
    c() {
      e = ce("div"), wn(n.$$.fragment), X(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, a) {
      Cn(l, e, a), pn(n, e, null), i = !0;
    },
    i(l) {
      i || (ue(n.$$.fragment, l), i = !0);
    },
    o(l) {
      ge(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && yn(e), kn(n);
    }
  };
}
function is(t) {
  let e, n, i, l, a, r, o, s, c, f, u, b, g, d;
  n = new ot({
    props: {
      show_label: (
        /*show_label*/
        t[4]
      ),
      info: (
        /*info*/
        t[1]
      ),
      $$slots: { default: [ts] },
      $$scope: { ctx: t }
    }
  });
  let k = !/*disabled*/
  t[3] && Zn();
  return u = new Il({
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
  }), u.$on(
    "change",
    /*handle_option_selected*/
    t[16]
  ), {
    c() {
      e = ce("div"), wn(n.$$.fragment), i = hn(), l = ce("div"), a = ce("div"), r = ce("div"), o = ce("input"), c = hn(), k && k.c(), f = hn(), wn(u.$$.fragment), X(o, "role", "listbox"), X(o, "aria-controls", "dropdown-options"), X(
        o,
        "aria-expanded",
        /*show_options*/
        t[12]
      ), X(
        o,
        "aria-label",
        /*label*/
        t[0]
      ), X(o, "class", "border-none svelte-1m1zvyj"), o.disabled = /*disabled*/
      t[3], X(o, "autocomplete", "off"), o.readOnly = s = !/*filterable*/
      t[7], fe(o, "subdued", !/*choices_names*/
      t[13].includes(
        /*input_text*/
        t[9]
      ) && !/*allow_custom_value*/
      t[6]), X(r, "class", "secondary-wrap svelte-1m1zvyj"), X(a, "class", "wrap-inner svelte-1m1zvyj"), fe(
        a,
        "show_options",
        /*show_options*/
        t[12]
      ), X(l, "class", "wrap svelte-1m1zvyj"), X(e, "class", "svelte-1m1zvyj"), fe(
        e,
        "container",
        /*container*/
        t[5]
      );
    },
    m(_, h) {
      Cn(_, e, h), pn(n, e, null), ee(e, i), ee(e, l), ee(l, a), ee(a, r), ee(r, o), Qn(
        o,
        /*input_text*/
        t[9]
      ), t[29](o), ee(r, c), k && k.m(r, null), ee(l, f), pn(u, l, null), b = !0, g || (d = [
        me(
          o,
          "input",
          /*input_input_handler*/
          t[28]
        ),
        me(
          o,
          "keydown",
          /*handle_key_down*/
          t[19]
        ),
        me(
          o,
          "keyup",
          /*keyup_handler*/
          t[30]
        ),
        me(
          o,
          "blur",
          /*handle_blur*/
          t[18]
        ),
        me(
          o,
          "focus",
          /*handle_focus*/
          t[17]
        )
      ], g = !0);
    },
    p(_, h) {
      const p = {};
      h[0] & /*show_label*/
      16 && (p.show_label = /*show_label*/
      _[4]), h[0] & /*info*/
      2 && (p.info = /*info*/
      _[1]), h[0] & /*label*/
      1 | h[1] & /*$$scope*/
      4 && (p.$$scope = { dirty: h, ctx: _ }), n.$set(p), (!b || h[0] & /*show_options*/
      4096) && X(
        o,
        "aria-expanded",
        /*show_options*/
        _[12]
      ), (!b || h[0] & /*label*/
      1) && X(
        o,
        "aria-label",
        /*label*/
        _[0]
      ), (!b || h[0] & /*disabled*/
      8) && (o.disabled = /*disabled*/
      _[3]), (!b || h[0] & /*filterable*/
      128 && s !== (s = !/*filterable*/
      _[7])) && (o.readOnly = s), h[0] & /*input_text*/
      512 && o.value !== /*input_text*/
      _[9] && Qn(
        o,
        /*input_text*/
        _[9]
      ), (!b || h[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && fe(o, "subdued", !/*choices_names*/
      _[13].includes(
        /*input_text*/
        _[9]
      ) && !/*allow_custom_value*/
      _[6]), /*disabled*/
      _[3] ? k && (Kl(), ge(k, 1, 1, () => {
        k = null;
      }), Pl()) : k ? h[0] & /*disabled*/
      8 && ue(k, 1) : (k = Zn(), k.c(), ue(k, 1), k.m(r, null)), (!b || h[0] & /*show_options*/
      4096) && fe(
        a,
        "show_options",
        /*show_options*/
        _[12]
      );
      const m = {};
      h[0] & /*show_options*/
      4096 && (m.show_options = /*show_options*/
      _[12]), h[0] & /*choices*/
      4 && (m.choices = /*choices*/
      _[2]), h[0] & /*filtered_indices*/
      1024 && (m.filtered_indices = /*filtered_indices*/
      _[10]), h[0] & /*disabled*/
      8 && (m.disabled = /*disabled*/
      _[3]), h[0] & /*selected_index*/
      2048 && (m.selected_indices = /*selected_index*/
      _[11] === null ? [] : [
        /*selected_index*/
        _[11]
      ]), h[0] & /*active_index*/
      16384 && (m.active_index = /*active_index*/
      _[14]), u.$set(m), (!b || h[0] & /*container*/
      32) && fe(
        e,
        "container",
        /*container*/
        _[5]
      );
    },
    i(_) {
      b || (ue(n.$$.fragment, _), ue(k), ue(u.$$.fragment, _), b = !0);
    },
    o(_) {
      ge(n.$$.fragment, _), ge(k), ge(u.$$.fragment, _), b = !1;
    },
    d(_) {
      _ && yn(e), kn(n), t[29](null), k && k.d(), kn(u), g = !1, Gl(d);
    }
  };
}
function ls(t, e, n) {
  let { label: i } = e, { info: l = void 0 } = e, { value: a = [] } = e, r = [], { value_is_output: o = !1 } = e, { choices: s } = e, c, { disabled: f = !1 } = e, { show_label: u } = e, { container: b = !0 } = e, { allow_custom_value: g = !1 } = e, { filterable: d = !0 } = e, k, _ = !1, h, p, m = "", E = "", z = !1, x = [], M = null, y = null, H;
  const R = es();
  a ? (H = s.map((C) => C[1]).indexOf(a), y = H, y === -1 ? (r = a, y = null) : ([m, r] = s[y], E = m), v()) : s.length > 0 && (H = 0, y = 0, [m, a] = s[y], r = a, E = m);
  function N() {
    n(13, h = s.map((C) => C[0])), n(24, p = s.map((C) => C[1]));
  }
  function v() {
    N(), a === void 0 || Array.isArray(a) && a.length === 0 ? (n(9, m = ""), n(11, y = null)) : p.includes(a) ? (n(9, m = h[p.indexOf(a)]), n(11, y = p.indexOf(a))) : g ? (n(9, m = a), n(11, y = null)) : (n(9, m = ""), n(11, y = null)), n(27, H = y);
  }
  function F(C) {
    if (n(11, y = parseInt(C.detail.target.dataset.index)), isNaN(y)) {
      n(11, y = null);
      return;
    }
    n(12, _ = !1), n(14, M = null), k.blur();
  }
  function se(C) {
    n(10, x = s.map((xn, en) => en)), n(12, _ = !0), R("focus");
  }
  function Ze() {
    g ? n(20, a = m) : n(9, m = h[p.indexOf(a)]), n(12, _ = !1), n(14, M = null), R("blur");
  }
  function de(C) {
    n(12, [_, M] = Wl(C, M, x), _, (n(14, M), n(2, s), n(23, c), n(6, g), n(9, m), n(10, x), n(8, k), n(25, E), n(11, y), n(27, H), n(26, z), n(24, p))), C.key === "Enter" && (M !== null ? (n(11, y = M), n(12, _ = !1), k.blur(), n(14, M = null)) : h.includes(m) ? (n(11, y = h.indexOf(m)), n(12, _ = !1), n(14, M = null), k.blur()) : g && (n(20, a = m), n(11, y = null), n(12, _ = !1), n(14, M = null), k.blur()), R("enter", a));
  }
  ns(() => {
    n(21, o = !1), n(26, z = !0);
  }), $l(() => {
    k.focus();
  });
  function Me() {
    m = this.value, n(9, m), n(11, y), n(27, H), n(26, z), n(2, s), n(24, p);
  }
  function Ae(C) {
    Fl[C ? "unshift" : "push"](() => {
      k = C, n(8, k);
    });
  }
  const $e = (C) => R("key_up", { key: C.key, input_value: m });
  return t.$$set = (C) => {
    "label" in C && n(0, i = C.label), "info" in C && n(1, l = C.info), "value" in C && n(20, a = C.value), "value_is_output" in C && n(21, o = C.value_is_output), "choices" in C && n(2, s = C.choices), "disabled" in C && n(3, f = C.disabled), "show_label" in C && n(4, u = C.show_label), "container" in C && n(5, b = C.container), "allow_custom_value" in C && n(6, g = C.allow_custom_value), "filterable" in C && n(7, d = C.filterable);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && y !== H && y !== null && z && (n(9, [m, a] = s[y], m, (n(20, a), n(11, y), n(27, H), n(26, z), n(2, s), n(24, p))), n(27, H = y), R("select", {
      index: y,
      value: p[y],
      selected: !0
    })), t.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && a != r && (v(), Ul(R, a, o), n(22, r = a)), t.$$.dirty[0] & /*choices*/
    4 && N(), t.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && s !== c && (g || v(), n(23, c = s), n(10, x = Jn(s, m)), !g && x.length > 0 && n(14, M = x[0]), k == document.activeElement && n(12, _ = !0)), t.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && m !== E && (n(10, x = Jn(s, m)), n(25, E = m), !g && x.length > 0 && n(14, M = x[0]));
  }, [
    i,
    l,
    s,
    f,
    u,
    b,
    g,
    d,
    k,
    m,
    x,
    y,
    _,
    h,
    M,
    R,
    F,
    se,
    Ze,
    de,
    a,
    o,
    r,
    c,
    p,
    E,
    z,
    H,
    Me,
    Ae,
    $e
  ];
}
class ss extends Nl {
  constructor(e) {
    super(), Vl(
      this,
      e,
      ls,
      is,
      Jl,
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
  SvelteComponent: os,
  append: G,
  attr: qe,
  create_component: Le,
  destroy_component: Re,
  detach: Sn,
  element: ne,
  init: as,
  insert: zn,
  mount_component: Xe,
  safe_not_equal: rs,
  set_style: Ye,
  space: _n,
  text: bt,
  transition_in: Oe,
  transition_out: Ie
} = window.__gradio__svelte__internal, { createEventDispatcher: fs } = window.__gradio__svelte__internal, { onMount: cs, onDestroy: us } = window.__gradio__svelte__internal;
function hs(t) {
  let e;
  return {
    c() {
      e = bt("Cancel");
    },
    m(n, i) {
      zn(n, e, i);
    },
    d(n) {
      n && Sn(e);
    }
  };
}
function _s(t) {
  let e;
  return {
    c() {
      e = bt("OK");
    },
    m(n, i) {
      zn(n, e, i);
    },
    d(n) {
      n && Sn(e);
    }
  };
}
function ds(t) {
  let e, n, i, l, a, r, o, s, c, f, u, b, g, d, k;
  return a = new ss({
    props: {
      value: (
        /*currentLabel*/
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
  }), a.$on(
    "change",
    /*onDropDownChange*/
    t[4]
  ), a.$on(
    "enter",
    /*onDropDownEnter*/
    t[6]
  ), s = new hl({
    props: {
      value: (
        /*currentColor*/
        t[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), s.$on(
    "change",
    /*onColorChange*/
    t[5]
  ), u = new Un({
    props: {
      $$slots: { default: [hs] },
      $$scope: { ctx: t }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    t[10]
  ), d = new Un({
    props: {
      variant: "primary",
      $$slots: { default: [_s] },
      $$scope: { ctx: t }
    }
  }), d.$on(
    "click",
    /*click_handler_1*/
    t[11]
  ), {
    c() {
      e = ne("div"), n = ne("div"), i = ne("span"), l = ne("div"), Le(a.$$.fragment), r = _n(), o = ne("div"), Le(s.$$.fragment), c = _n(), f = ne("div"), Le(u.$$.fragment), b = _n(), g = ne("div"), Le(d.$$.fragment), Ye(l, "margin-right", "10px"), Ye(o, "margin-right", "40px"), Ye(o, "margin-bottom", "8px"), Ye(f, "margin-right", "8px"), qe(i, "class", "model-content svelte-hkn2q1"), qe(n, "class", "modal-container svelte-hkn2q1"), qe(e, "class", "modal svelte-hkn2q1"), qe(e, "id", "model-box-edit");
    },
    m(_, h) {
      zn(_, e, h), G(e, n), G(n, i), G(i, l), Xe(a, l, null), G(i, r), G(i, o), Xe(s, o, null), G(i, c), G(i, f), Xe(u, f, null), G(i, b), G(i, g), Xe(d, g, null), k = !0;
    },
    p(_, [h]) {
      const p = {};
      h & /*currentLabel*/
      1 && (p.value = /*currentLabel*/
      _[0]), h & /*choices*/
      4 && (p.choices = /*choices*/
      _[2]), a.$set(p);
      const m = {};
      h & /*currentColor*/
      2 && (m.value = /*currentColor*/
      _[1]), s.$set(m);
      const E = {};
      h & /*$$scope*/
      16384 && (E.$$scope = { dirty: h, ctx: _ }), u.$set(E);
      const z = {};
      h & /*$$scope*/
      16384 && (z.$$scope = { dirty: h, ctx: _ }), d.$set(z);
    },
    i(_) {
      k || (Oe(a.$$.fragment, _), Oe(s.$$.fragment, _), Oe(u.$$.fragment, _), Oe(d.$$.fragment, _), k = !0);
    },
    o(_) {
      Ie(a.$$.fragment, _), Ie(s.$$.fragment, _), Ie(u.$$.fragment, _), Ie(d.$$.fragment, _), k = !1;
    },
    d(_) {
      _ && Sn(e), Re(a), Re(s), Re(u), Re(d);
    }
  };
}
function ms(t, e, n) {
  let { label: i = "" } = e, { currentLabel: l = "" } = e, { choices: a = [] } = e, { choicesColors: r = [] } = e, { color: o = "" } = e, { currentColor: s = "" } = e;
  const c = fs();
  function f(h) {
    c("change", {
      label: l,
      color: s,
      ok: h
    });
  }
  function u(h) {
    const { detail: p } = h;
    let m = p;
    Number.isInteger(m) ? (Array.isArray(r) && m < r.length && n(1, s = r[m]), Array.isArray(a) && m < a.length && n(0, l = a[m][0])) : n(0, l = m);
  }
  function b(h) {
    const { detail: p } = h;
    n(1, s = p);
  }
  function g(h) {
    u(h), f(!0);
  }
  function d(h) {
    switch (h.key) {
      case "Enter":
        f(!0);
        break;
    }
  }
  cs(() => {
    document.addEventListener("keydown", d), n(0, l = i), n(1, s = o);
  }), us(() => {
    document.removeEventListener("keydown", d);
  });
  const k = () => f(!1), _ = () => f(!0);
  return t.$$set = (h) => {
    "label" in h && n(7, i = h.label), "currentLabel" in h && n(0, l = h.currentLabel), "choices" in h && n(2, a = h.choices), "choicesColors" in h && n(8, r = h.choicesColors), "color" in h && n(9, o = h.color), "currentColor" in h && n(1, s = h.currentColor);
  }, [
    l,
    s,
    a,
    f,
    u,
    b,
    g,
    i,
    r,
    o,
    k,
    _
  ];
}
class gt extends os {
  constructor(e) {
    super(), as(this, e, ms, ds, rs, {
      label: 7,
      currentLabel: 0,
      choices: 2,
      choicesColors: 8,
      color: 9,
      currentColor: 1
    });
  }
}
const q = (t, e, n) => Math.min(Math.max(t, e), n);
function dn(t, e) {
  if (t.startsWith("rgba"))
    return t.replace(/[\d.]+$/, e.toString());
  const n = t.match(/\d+/g);
  if (!n || n.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [i, l, a] = n;
  return `rgba(${i}, ${l}, ${a}, ${e})`;
}
class mn {
  constructor(e, n, i, l, a, r, o, s, c, f, u = "rgb(255, 255, 255)", b = 0.5, g = 25, d = 8, k = 2, _ = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (p) => {
      if (this.isDragging) {
        let m = p.clientX - this.offsetMouseX - this.xmin, E = p.clientY - this.offsetMouseY - this.ymin;
        const z = this.canvasXmax - this.canvasXmin, x = this.canvasYmax - this.canvasYmin;
        m = q(m, -this.xmin, z - this.xmax), E = q(E, -this.ymin, x - this.ymax), this.xmin += m, this.ymin += E, this.xmax += m, this.ymax += E, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (p) => {
      if (this.isResizing) {
        const m = p.clientX, E = p.clientY, z = m - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, x = E - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, M = this.canvasXmax - this.canvasXmin, y = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += z, this.ymin += x, this.xmin = q(this.xmin, 0, this.xmax - this.minSize), this.ymin = q(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += z, this.ymin += x, this.xmax = q(this.xmax, this.xmin + this.minSize, M), this.ymin = q(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += z, this.ymax += x, this.xmax = q(this.xmax, this.xmin + this.minSize, M), this.ymax = q(this.ymax, this.ymin + this.minSize, y);
            break;
          case 3:
            this.xmin += z, this.ymax += x, this.xmin = q(this.xmin, 0, this.xmax - this.minSize), this.ymax = q(this.ymax, this.ymin + this.minSize, y);
            break;
          case 4:
            this.ymin += x, this.ymin = q(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += z, this.xmax = q(this.xmax, this.xmin + this.minSize, M);
            break;
          case 6:
            this.ymax += x, this.ymax = q(this.ymax, this.ymin + this.minSize, y);
            break;
          case 7:
            this.xmin += z, this.xmin = q(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = l, this.canvasYmax = a, this.scaleFactor = h, this.label = r, this.isDragging = !1, this.xmin = o, this.ymin = s, this.xmax = c, this.ymax = f, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = d, this.thickness = k, this.selectedThickness = _, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = u, this.alpha = b;
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
    const e = this.resizeHandleSize / 2, n = this.getWidth(), i = this.getHeight();
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
        xmin: this.xmin + n / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + n / 2 + e,
        ymax: this.ymin + e
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + i / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + i / 2 + e
      },
      {
        // Bottom center
        xmin: this.xmin + n / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + n / 2 + e,
        ymax: this.ymax + e
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + i / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + i / 2 + e
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
    if (e.beginPath(), [n, i] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, i, this.getWidth(), this.getHeight()), e.fillStyle = dn(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = dn(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, a = 20;
      let r = this.xmin, o = this.ymin - a;
      e.fillStyle = "white", [r, o] = this.toCanvasCoordinates(r, o), e.fillRect(r, o, l, a), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, o, l, a), e.fillStyle = "black", e.fillText(this.label, r + 5, o + 15);
    }
    e.fillStyle = dn(this.color, 1);
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
const V = [
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
  SvelteComponent: bs,
  append: we,
  attr: le,
  binding_callbacks: gs,
  bubble: $n,
  check_outros: Ne,
  create_component: ye,
  destroy_component: Ce,
  detach: te,
  element: _e,
  empty: ws,
  group_outros: Fe,
  init: ks,
  insert: ie,
  listen: $,
  mount_component: Se,
  noop: ps,
  run_all: wt,
  safe_not_equal: vs,
  space: ve,
  transition_in: D,
  transition_out: O
} = window.__gradio__svelte__internal, { onMount: ys, onDestroy: Cs, createEventDispatcher: Ss } = window.__gradio__svelte__internal;
function et(t) {
  let e, n, i, l, a, r, o, s, c, f;
  i = new ui({});
  let u = !/*disableEditBoxes*/
  t[4] && nt(t);
  return o = new Ut({}), {
    c() {
      e = _e("span"), n = _e("button"), ye(i.$$.fragment), l = ve(), u && u.c(), a = ve(), r = _e("button"), ye(o.$$.fragment), le(n, "class", "icon svelte-182gnnj"), le(r, "class", "icon svelte-182gnnj"), le(e, "class", "canvas-control svelte-182gnnj");
    },
    m(b, g) {
      ie(b, e, g), we(e, n), Se(i, n, null), we(e, l), u && u.m(e, null), we(e, a), we(e, r), Se(o, r, null), s = !0, c || (f = [
        $(
          n,
          "click",
          /*click_handler*/
          t[26]
        ),
        $(
          r,
          "click",
          /*click_handler_2*/
          t[28]
        )
      ], c = !0);
    },
    p(b, g) {
      /*disableEditBoxes*/
      b[4] ? u && (Fe(), O(u, 1, 1, () => {
        u = null;
      }), Ne()) : u ? (u.p(b, g), g[0] & /*disableEditBoxes*/
      16 && D(u, 1)) : (u = nt(b), u.c(), D(u, 1), u.m(e, a));
    },
    i(b) {
      s || (D(i.$$.fragment, b), D(u), D(o.$$.fragment, b), s = !0);
    },
    o(b) {
      O(i.$$.fragment, b), O(u), O(o.$$.fragment, b), s = !1;
    },
    d(b) {
      b && te(e), Ce(i), u && u.d(), Ce(o), c = !1, wt(f);
    }
  };
}
function nt(t) {
  let e, n, i, l, a;
  return n = new li({}), {
    c() {
      e = _e("button"), ye(n.$$.fragment), le(e, "class", "icon svelte-182gnnj");
    },
    m(r, o) {
      ie(r, e, o), Se(n, e, null), i = !0, l || (a = $(
        e,
        "click",
        /*click_handler_1*/
        t[27]
      ), l = !0);
    },
    p: ps,
    i(r) {
      i || (D(n.$$.fragment, r), i = !0);
    },
    o(r) {
      O(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && te(e), Ce(n), l = !1, a();
    }
  };
}
function tt(t) {
  let e, n;
  return e = new gt({
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
        t[6] >= 0 && /*selectedBox*/
        t[6] < /*value*/
        t[0].boxes.length ? (
          /*value*/
          t[0].boxes[
            /*selectedBox*/
            t[6]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        t[6] >= 0 && /*selectedBox*/
        t[6] < /*value*/
        t[0].boxes.length ? ze(
          /*value*/
          t[0].boxes[
            /*selectedBox*/
            t[6]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    t[15]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    t[29]
  ), {
    c() {
      ye(e.$$.fragment);
    },
    m(i, l) {
      Se(e, i, l), n = !0;
    },
    p(i, l) {
      const a = {};
      l[0] & /*choices*/
      4 && (a.choices = /*choices*/
      i[2]), l[0] & /*choicesColors*/
      8 && (a.choicesColors = /*choicesColors*/
      i[3]), l[0] & /*selectedBox, value*/
      65 && (a.label = /*selectedBox*/
      i[6] >= 0 && /*selectedBox*/
      i[6] < /*value*/
      i[0].boxes.length ? (
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[6]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      65 && (a.color = /*selectedBox*/
      i[6] >= 0 && /*selectedBox*/
      i[6] < /*value*/
      i[0].boxes.length ? ze(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[6]
        ].color
      ) : ""), e.$set(a);
    },
    i(i) {
      n || (D(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Ce(e, i);
    }
  };
}
function it(t) {
  let e, n;
  return e = new gt({
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
      ) : ze(V[
        /*value*/
        t[0].boxes.length % V.length
      ])
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    t[12]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    t[30]
  ), {
    c() {
      ye(e.$$.fragment);
    },
    m(i, l) {
      Se(e, i, l), n = !0;
    },
    p(i, l) {
      const a = {};
      l[0] & /*choices*/
      4 && (a.choices = /*choices*/
      i[2]), l[0] & /*choicesColors*/
      8 && (a.choicesColors = /*choicesColors*/
      i[3]), l[0] & /*choicesColors, value*/
      9 && (a.color = Array.isArray(
        /*choicesColors*/
        i[3]
      ) && /*choicesColors*/
      i[3].length > 0 ? (
        /*choicesColors*/
        i[3][0]
      ) : ze(V[
        /*value*/
        i[0].boxes.length % V.length
      ])), e.$set(a);
    },
    i(i) {
      n || (D(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Ce(e, i);
    }
  };
}
function zs(t) {
  let e, n, i, l, a, r, o, s, c, f = (
    /*interactive*/
    t[1] && et(t)
  ), u = (
    /*editModalVisible*/
    t[7] && tt(t)
  ), b = (
    /*newModalVisible*/
    t[8] && it(t)
  );
  return {
    c() {
      e = _e("div"), n = _e("canvas"), i = ve(), f && f.c(), l = ve(), u && u.c(), a = ve(), b && b.c(), r = ws(), le(n, "class", "canvas-annotator svelte-182gnnj"), le(e, "class", "canvas-container svelte-182gnnj"), le(e, "tabindex", "-1");
    },
    m(g, d) {
      ie(g, e, d), we(e, n), t[25](n), ie(g, i, d), f && f.m(g, d), ie(g, l, d), u && u.m(g, d), ie(g, a, d), b && b.m(g, d), ie(g, r, d), o = !0, s || (c = [
        $(
          n,
          "mousedown",
          /*handleMouseDown*/
          t[9]
        ),
        $(
          n,
          "mouseup",
          /*handleMouseUp*/
          t[10]
        ),
        $(
          n,
          "dblclick",
          /*handleDoubleClick*/
          t[14]
        ),
        $(
          e,
          "focusin",
          /*handleCanvasFocus*/
          t[17]
        ),
        $(
          e,
          "focusout",
          /*handleCanvasBlur*/
          t[18]
        )
      ], s = !0);
    },
    p(g, d) {
      /*interactive*/
      g[1] ? f ? (f.p(g, d), d[0] & /*interactive*/
      2 && D(f, 1)) : (f = et(g), f.c(), D(f, 1), f.m(l.parentNode, l)) : f && (Fe(), O(f, 1, 1, () => {
        f = null;
      }), Ne()), /*editModalVisible*/
      g[7] ? u ? (u.p(g, d), d[0] & /*editModalVisible*/
      128 && D(u, 1)) : (u = tt(g), u.c(), D(u, 1), u.m(a.parentNode, a)) : u && (Fe(), O(u, 1, 1, () => {
        u = null;
      }), Ne()), /*newModalVisible*/
      g[8] ? b ? (b.p(g, d), d[0] & /*newModalVisible*/
      256 && D(b, 1)) : (b = it(g), b.c(), D(b, 1), b.m(r.parentNode, r)) : b && (Fe(), O(b, 1, 1, () => {
        b = null;
      }), Ne());
    },
    i(g) {
      o || (D(f), D(u), D(b), o = !0);
    },
    o(g) {
      O(f), O(u), O(b), o = !1;
    },
    d(g) {
      g && (te(e), te(i), te(l), te(a), te(r)), t[25](null), f && f.d(g), u && u.d(g), b && b.d(g), s = !1, wt(c);
    }
  };
}
function lt(t) {
  var e = parseInt(t.slice(1, 3), 16), n = parseInt(t.slice(3, 5), 16), i = parseInt(t.slice(5, 7), 16);
  return "rgb(" + e + ", " + n + ", " + i + ")";
}
function ze(t) {
  const e = t.match(/(\d+(\.\d+)?)/g), n = parseInt(e[0]), i = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | n << 16 | i << 8 | l).toString(16).slice(1);
}
function xs(t, e, n) {
  let { imageUrl: i = null } = e, { interactive: l } = e, { boxAlpha: a = 0.5 } = e, { boxMinSize: r = 25 } = e, { handleSize: o } = e, { boxThickness: s } = e, { boxSelectedThickness: c } = e, { value: f } = e, { choices: u = [] } = e, { choicesColors: b = [] } = e, { disableEditBoxes: g = !1 } = e, d, k, _ = null, h = -1, p = 0, m = 0, E = 0, z = 0, x = 1, M = 0, y = 0, H = !1, R = !1;
  const N = Ss();
  function v() {
    if (k) {
      k.clearRect(0, 0, d.width, d.height), _ !== null && k.drawImage(_, p, m, M, y);
      for (const w of f.boxes.slice().reverse())
        w.render(k);
    }
  }
  function F(w) {
    n(6, h = w), f.boxes.forEach((S) => {
      S.setSelected(!1);
    }), w >= 0 && w < f.boxes.length && f.boxes[w].setSelected(!0), v();
  }
  function se(w) {
    if (!l)
      return;
    const S = d.getBoundingClientRect(), B = w.clientX - S.left, j = w.clientY - S.top;
    for (const [J, I] of f.boxes.entries()) {
      const De = I.indexOfPointInsideHandle(B, j);
      if (De >= 0) {
        F(J), I.startResize(De, w);
        return;
      }
    }
    for (const [J, I] of f.boxes.entries())
      if (I.isPointInsideBox(B, j)) {
        F(J), I.startDrag(w);
        return;
      }
    F(-1);
  }
  function Ze(w) {
    N("change");
  }
  function de(w) {
    if (l)
      switch (w.key) {
        case "Delete":
          nn();
          break;
      }
  }
  function Me() {
    g ? Ae() : n(8, R = !0);
  }
  function Ae(w = null, S = null, B = null, j = null, J = null, I = null) {
    S === null || S === "" ? S = V[f.boxes.length % V.length] : S = lt(S), w === null && (w = ""), B === null && (B = M / 3 / x), J === null && (J = M / 3 * 2 / x), j === null && (j = y / 3 / x), I === null && (I = y / 3 * 2 / x);
    let De = new mn(v, p, m, E, z, w, Math.round(B), Math.round(j), Math.round(J), Math.round(I), S, a, r, o, s, c);
    n(0, f.boxes = [De, ...f.boxes], f), v(), N("change");
  }
  function $e(w) {
    n(8, R = !1);
    const { detail: S } = w;
    S.ok && Ae(S.label, S.color);
  }
  function C() {
    h >= 0 && h < f.boxes.length && !g && n(7, H = !0);
  }
  function xn(w) {
    l && C();
  }
  function en(w) {
    n(7, H = !1);
    const { detail: S } = w;
    let B = S.label, j = S.color;
    if (S.ok && h >= 0 && h < f.boxes.length) {
      let I = f.boxes[h];
      I.label = B, I.color = lt(j), v(), N("change");
    }
  }
  function nn() {
    h >= 0 && h < f.boxes.length && (f.boxes.splice(h, 1), F(-1), N("change"));
  }
  function Be() {
    if (d) {
      if (x = 1, n(5, d.width = d.clientWidth, d), _ !== null)
        if (_.width > d.width)
          x = d.width / _.width, M = _.width * x, y = _.height * x, p = 0, m = 0, E = M, z = y, n(5, d.height = y, d);
        else {
          M = _.width, y = _.height;
          var w = (d.width - M) / 2;
          p = w, m = 0, E = w + M, z = _.height, n(5, d.height = y, d);
        }
      else
        p = 0, m = 0, E = d.width, z = d.height, n(5, d.height = d.clientHeight, d);
      if (E > 0 && z > 0)
        for (const S of f.boxes)
          S.canvasXmin = p, S.canvasYmin = m, S.canvasXmax = E, S.canvasYmax = z, S.setScaleFactor(x);
      v(), N("change");
    }
  }
  const kt = new ResizeObserver(Be);
  function pt() {
    for (let w = 0; w < f.boxes.length; w++) {
      let S = f.boxes[w];
      if (!(S instanceof mn)) {
        let B = "", j = "";
        S.hasOwnProperty("color") ? (B = S.color, Array.isArray(B) && B.length === 3 && (B = `rgb(${B[0]}, ${B[1]}, ${B[2]})`)) : B = V[w % V.length], S.hasOwnProperty("label") && (j = S.label), S = new mn(v, p, m, E, z, j, S.xmin, S.ymin, S.xmax, S.ymax, B, a, r, o, s, c), n(0, f.boxes[w] = S, f);
      }
    }
  }
  function En() {
    i !== null && (_ === null || _.src != i) && (_ = new Image(), _.src = i, _.onload = function() {
      Be(), v();
    });
  }
  ys(() => {
    if (Array.isArray(u) && u.length > 0 && (!Array.isArray(b) || b.length == 0))
      for (let w = 0; w < u.length; w++) {
        let S = V[w % V.length];
        b.push(ze(S));
      }
    k = d.getContext("2d"), kt.observe(d), En(), Be(), v();
  });
  function vt() {
    document.addEventListener("keydown", de);
  }
  function yt() {
    document.removeEventListener("keydown", de);
  }
  Cs(() => {
    document.removeEventListener("keydown", de);
  });
  function Ct(w) {
    gs[w ? "unshift" : "push"](() => {
      d = w, n(5, d);
    });
  }
  const St = () => Me(), zt = () => C(), xt = () => nn();
  function Et(w) {
    $n.call(this, t, w);
  }
  function Mt(w) {
    $n.call(this, t, w);
  }
  return t.$$set = (w) => {
    "imageUrl" in w && n(19, i = w.imageUrl), "interactive" in w && n(1, l = w.interactive), "boxAlpha" in w && n(20, a = w.boxAlpha), "boxMinSize" in w && n(21, r = w.boxMinSize), "handleSize" in w && n(22, o = w.handleSize), "boxThickness" in w && n(23, s = w.boxThickness), "boxSelectedThickness" in w && n(24, c = w.boxSelectedThickness), "value" in w && n(0, f = w.value), "choices" in w && n(2, u = w.choices), "choicesColors" in w && n(3, b = w.choicesColors), "disableEditBoxes" in w && n(4, g = w.disableEditBoxes);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*value*/
    1 && (En(), pt(), Be(), v());
  }, [
    f,
    l,
    u,
    b,
    g,
    d,
    h,
    H,
    R,
    se,
    Ze,
    Me,
    $e,
    C,
    xn,
    en,
    nn,
    vt,
    yt,
    i,
    a,
    r,
    o,
    s,
    c,
    Ct,
    St,
    zt,
    xt,
    Et,
    Mt
  ];
}
class Es extends bs {
  constructor(e) {
    super(), ks(
      this,
      e,
      xs,
      zs,
      vs,
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
  SvelteComponent: Ms,
  add_flush_callback: As,
  bind: Bs,
  binding_callbacks: Ds,
  create_component: Hs,
  destroy_component: Ts,
  init: qs,
  mount_component: Ls,
  safe_not_equal: Rs,
  transition_in: Xs,
  transition_out: Ys
} = window.__gradio__svelte__internal, { createEventDispatcher: Os } = window.__gradio__svelte__internal;
function Is(t) {
  let e, n, i;
  function l(r) {
    t[14](r);
  }
  let a = {
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
    handleSize: (
      /*handleSize*/
      t[6]
    ),
    boxThickness: (
      /*boxThickness*/
      t[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      t[8]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      t[9]
    ),
    imageUrl: (
      /*resolved_src*/
      t[10]
    )
  };
  return (
    /*value*/
    t[0] !== void 0 && (a.value = /*value*/
    t[0]), e = new Es({ props: a }), Ds.push(() => Bs(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      t[15]
    ), {
      c() {
        Hs(e.$$.fragment);
      },
      m(r, o) {
        Ls(e, r, o), i = !0;
      },
      p(r, [o]) {
        const s = {};
        o & /*interactive*/
        2 && (s.interactive = /*interactive*/
        r[1]), o & /*boxesAlpha*/
        4 && (s.boxAlpha = /*boxesAlpha*/
        r[2]), o & /*labelList*/
        8 && (s.choices = /*labelList*/
        r[3]), o & /*labelColors*/
        16 && (s.choicesColors = /*labelColors*/
        r[4]), o & /*boxMinSize*/
        32 && (s.boxMinSize = /*boxMinSize*/
        r[5]), o & /*handleSize*/
        64 && (s.handleSize = /*handleSize*/
        r[6]), o & /*boxThickness*/
        128 && (s.boxThickness = /*boxThickness*/
        r[7]), o & /*boxSelectedThickness*/
        256 && (s.boxSelectedThickness = /*boxSelectedThickness*/
        r[8]), o & /*disableEditBoxes*/
        512 && (s.disableEditBoxes = /*disableEditBoxes*/
        r[9]), o & /*resolved_src*/
        1024 && (s.imageUrl = /*resolved_src*/
        r[10]), !n && o & /*value*/
        1 && (n = !0, s.value = /*value*/
        r[0], As(() => n = !1)), e.$set(s);
      },
      i(r) {
        i || (Xs(e.$$.fragment, r), i = !0);
      },
      o(r) {
        Ys(e.$$.fragment, r), i = !1;
      },
      d(r) {
        Ts(e, r);
      }
    }
  );
}
function js(t, e, n) {
  let { src: i = void 0 } = e, { interactive: l } = e, { boxesAlpha: a } = e, { labelList: r } = e, { labelColors: o } = e, { boxMinSize: s } = e, { handleSize: c } = e, { boxThickness: f } = e, { boxSelectedThickness: u } = e, { value: b } = e, { disableEditBoxes: g } = e, d, k;
  const _ = Os();
  function h(m) {
    b = m, n(0, b);
  }
  const p = () => _("change");
  return t.$$set = (m) => {
    "src" in m && n(12, i = m.src), "interactive" in m && n(1, l = m.interactive), "boxesAlpha" in m && n(2, a = m.boxesAlpha), "labelList" in m && n(3, r = m.labelList), "labelColors" in m && n(4, o = m.labelColors), "boxMinSize" in m && n(5, s = m.boxMinSize), "handleSize" in m && n(6, c = m.handleSize), "boxThickness" in m && n(7, f = m.boxThickness), "boxSelectedThickness" in m && n(8, u = m.boxSelectedThickness), "value" in m && n(0, b = m.value), "disableEditBoxes" in m && n(9, g = m.disableEditBoxes);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*src, latest_src*/
    12288) {
      n(10, d = i), n(13, k = i);
      const m = i;
      Lt(m).then((E) => {
        k === m && n(10, d = E);
      });
    }
  }, [
    b,
    l,
    a,
    r,
    o,
    s,
    c,
    f,
    u,
    g,
    d,
    _,
    i,
    k,
    h,
    p
  ];
}
class Us extends Ms {
  constructor(e) {
    super(), qs(this, e, js, Is, Rs, {
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
const {
  SvelteComponent: Ws,
  attr: Ns,
  check_outros: Fs,
  create_component: Ps,
  destroy_component: Ks,
  detach: Vs,
  element: Gs,
  group_outros: Js,
  init: Qs,
  insert: Zs,
  mount_component: $s,
  safe_not_equal: eo,
  toggle_class: Z,
  transition_in: Pe,
  transition_out: vn
} = window.__gradio__svelte__internal;
function st(t) {
  let e, n;
  return e = new Us({
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
      Ps(e.$$.fragment);
    },
    m(i, l) {
      $s(e, i, l), n = !0;
    },
    p(i, l) {
      const a = {};
      l & /*samples_dir, value*/
      3 && (a.src = /*samples_dir*/
      i[1] + /*value*/
      i[0].path), e.$set(a);
    },
    i(i) {
      n || (Pe(e.$$.fragment, i), n = !0);
    },
    o(i) {
      vn(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Ks(e, i);
    }
  };
}
function no(t) {
  let e, n, i = (
    /*value*/
    t[0] && st(t)
  );
  return {
    c() {
      e = Gs("div"), i && i.c(), Ns(e, "class", "container svelte-1sgcyba"), Z(
        e,
        "table",
        /*type*/
        t[2] === "table"
      ), Z(
        e,
        "gallery",
        /*type*/
        t[2] === "gallery"
      ), Z(
        e,
        "selected",
        /*selected*/
        t[3]
      ), Z(
        e,
        "border",
        /*value*/
        t[0]
      );
    },
    m(l, a) {
      Zs(l, e, a), i && i.m(e, null), n = !0;
    },
    p(l, [a]) {
      /*value*/
      l[0] ? i ? (i.p(l, a), a & /*value*/
      1 && Pe(i, 1)) : (i = st(l), i.c(), Pe(i, 1), i.m(e, null)) : i && (Js(), vn(i, 1, 1, () => {
        i = null;
      }), Fs()), (!n || a & /*type*/
      4) && Z(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), (!n || a & /*type*/
      4) && Z(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), (!n || a & /*selected*/
      8) && Z(
        e,
        "selected",
        /*selected*/
        l[3]
      ), (!n || a & /*value*/
      1) && Z(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    i(l) {
      n || (Pe(i), n = !0);
    },
    o(l) {
      vn(i), n = !1;
    },
    d(l) {
      l && Vs(e), i && i.d();
    }
  };
}
function to(t, e, n) {
  let { value: i } = e, { samples_dir: l } = e, { type: a } = e, { selected: r = !1 } = e;
  return t.$$set = (o) => {
    "value" in o && n(0, i = o.value), "samples_dir" in o && n(1, l = o.samples_dir), "type" in o && n(2, a = o.type), "selected" in o && n(3, r = o.selected);
  }, [i, l, a, r];
}
class lo extends Ws {
  constructor(e) {
    super(), Qs(this, e, to, no, eo, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  lo as default
};
