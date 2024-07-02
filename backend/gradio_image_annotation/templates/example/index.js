const { setContext: io, getContext: At } = window.__gradio__svelte__internal, Dt = "WORKER_PROXY_CONTEXT_KEY";
function Ht() {
  return At(Dt);
}
function Tt(t) {
  return t.host === window.location.host || t.host === "localhost:7860" || t.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  t.host === "lite.local";
}
function qt(t, e) {
  const n = e.toLowerCase();
  for (const [i, l] of Object.entries(t))
    if (i.toLowerCase() === n)
      return l;
}
function Lt(t) {
  if (t == null)
    return !1;
  const e = new URL(t, window.location.href);
  return !(!Tt(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Rt(t) {
  if (t == null || !Lt(t))
    return t;
  const e = Ht();
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
    const o = new Blob([l.body], {
      type: qt(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Xt,
  append: $e,
  attr: j,
  detach: Yt,
  init: Bt,
  insert: Ot,
  noop: en,
  safe_not_equal: It,
  set_style: F,
  svg_element: qe
} = window.__gradio__svelte__internal;
function jt(t) {
  let e, n, i, l;
  return {
    c() {
      e = qe("svg"), n = qe("g"), i = qe("path"), l = qe("path"), j(i, "d", "M18,6L6.087,17.913"), F(i, "fill", "none"), F(i, "fill-rule", "nonzero"), F(i, "stroke-width", "2px"), j(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), j(l, "d", "M4.364,4.364L19.636,19.636"), F(l, "fill", "none"), F(l, "fill-rule", "nonzero"), F(l, "stroke-width", "2px"), j(e, "width", "100%"), j(e, "height", "100%"), j(e, "viewBox", "0 0 24 24"), j(e, "version", "1.1"), j(e, "xmlns", "http://www.w3.org/2000/svg"), j(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), j(e, "xml:space", "preserve"), j(e, "stroke", "currentColor"), F(e, "fill-rule", "evenodd"), F(e, "clip-rule", "evenodd"), F(e, "stroke-linecap", "round"), F(e, "stroke-linejoin", "round");
    },
    m(o, r) {
      Ot(o, e, r), $e(e, n), $e(n, i), $e(e, l);
    },
    p: en,
    i: en,
    o: en,
    d(o) {
      o && Yt(e);
    }
  };
}
class Ut extends Xt {
  constructor(e) {
    super(), Bt(this, e, null, jt, It, {});
  }
}
const {
  SvelteComponent: Wt,
  append: Nt,
  attr: le,
  detach: Ft,
  init: Pt,
  insert: Kt,
  noop: nn,
  safe_not_equal: Vt,
  svg_element: xn
} = window.__gradio__svelte__internal;
function Gt(t) {
  let e, n;
  return {
    c() {
      e = xn("svg"), n = xn("path"), le(n, "d", "M5 8l4 4 4-4z"), le(e, "class", "dropdown-arrow svelte-145leq6"), le(e, "xmlns", "http://www.w3.org/2000/svg"), le(e, "width", "100%"), le(e, "height", "100%"), le(e, "viewBox", "0 0 18 18");
    },
    m(i, l) {
      Kt(i, e, l), Nt(e, n);
    },
    p: nn,
    i: nn,
    o: nn,
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
  attr: U,
  detach: $t,
  init: ei,
  insert: ni,
  noop: tn,
  safe_not_equal: ti,
  svg_element: Mn
} = window.__gradio__svelte__internal;
function ii(t) {
  let e, n;
  return {
    c() {
      e = Mn("svg"), n = Mn("path"), U(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "width", "100%"), U(e, "height", "100%"), U(e, "viewBox", "0 0 24 24"), U(e, "fill", "none"), U(e, "stroke", "currentColor"), U(e, "stroke-width", "1.5"), U(e, "stroke-linecap", "round"), U(e, "stroke-linejoin", "round"), U(e, "class", "feather feather-edit-2");
    },
    m(i, l) {
      ni(i, e, l), Zt(e, n);
    },
    p: tn,
    i: tn,
    o: tn,
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
  append: En,
  attr: T,
  detach: oi,
  init: ai,
  insert: ri,
  noop: ln,
  safe_not_equal: fi,
  set_style: G,
  svg_element: sn
} = window.__gradio__svelte__internal;
function ci(t) {
  let e, n, i;
  return {
    c() {
      e = sn("svg"), n = sn("line"), i = sn("line"), T(n, "x1", "4"), T(n, "y1", "12"), T(n, "x2", "20"), T(n, "y2", "12"), G(n, "fill", "none"), G(n, "stroke-width", "2px"), T(i, "x1", "12"), T(i, "y1", "4"), T(i, "x2", "12"), T(i, "y2", "20"), G(i, "fill", "none"), G(i, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), G(e, "fill-rule", "evenodd"), G(e, "clip-rule", "evenodd"), G(e, "stroke-linecap", "round"), G(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      ri(l, e, o), En(e, n), En(e, i);
    },
    p: ln,
    i: ln,
    o: ln,
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
  init: pi,
  insert: ki,
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
    m(o, r) {
      ki(o, e, r), l && l.m(e, null), n = !0;
    },
    p(o, [r]) {
      l && l.p && (!n || r & /*$$scope*/
      1) && Si(
        l,
        i,
        o,
        /*$$scope*/
        o[0],
        n ? wi(
          i,
          /*$$scope*/
          o[0],
          r,
          null
        ) : gi(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      n || (yi(l, o), n = !0);
    },
    o(o) {
      Ci(l, o), n = !1;
    },
    d(o) {
      o && mi(e), l && l.d(o);
    }
  };
}
function xi(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e;
  return t.$$set = (o) => {
    "$$scope" in o && n(0, l = o.$$scope);
  }, [l, i];
}
class Mi extends hi {
  constructor(e) {
    super(), pi(this, e, xi, zi, vi, {});
  }
}
const {
  SvelteComponent: Ei,
  attr: An,
  check_outros: Ai,
  create_component: Di,
  create_slot: Hi,
  destroy_component: Ti,
  detach: Ue,
  element: qi,
  empty: Li,
  get_all_dirty_from_scope: Ri,
  get_slot_changes: Xi,
  group_outros: Yi,
  init: Bi,
  insert: We,
  mount_component: Oi,
  safe_not_equal: Ii,
  set_data: ji,
  space: Ui,
  text: Wi,
  toggle_class: se,
  transition_in: pe,
  transition_out: Ne,
  update_slot_base: Ni
} = window.__gradio__svelte__internal;
function Dn(t) {
  let e, n;
  return e = new Mi({
    props: {
      $$slots: { default: [Fi] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Di(e.$$.fragment);
    },
    m(i, l) {
      Oi(e, i, l), n = !0;
    },
    p(i, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: i }), e.$set(o);
    },
    i(i) {
      n || (pe(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Ne(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Ti(e, i);
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
      We(n, e, i);
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
      n && Ue(e);
    }
  };
}
function Pi(t) {
  let e, n, i, l;
  const o = (
    /*#slots*/
    t[2].default
  ), r = Hi(
    o,
    t,
    /*$$scope*/
    t[3],
    null
  );
  let a = (
    /*info*/
    t[1] && Dn(t)
  );
  return {
    c() {
      e = qi("span"), r && r.c(), n = Ui(), a && a.c(), i = Li(), An(e, "data-testid", "block-info"), An(e, "class", "svelte-22c38v"), se(e, "sr-only", !/*show_label*/
      t[0]), se(e, "hide", !/*show_label*/
      t[0]), se(
        e,
        "has-info",
        /*info*/
        t[1] != null
      );
    },
    m(s, c) {
      We(s, e, c), r && r.m(e, null), We(s, n, c), a && a.m(s, c), We(s, i, c), l = !0;
    },
    p(s, [c]) {
      r && r.p && (!l || c & /*$$scope*/
      8) && Ni(
        r,
        o,
        s,
        /*$$scope*/
        s[3],
        l ? Xi(
          o,
          /*$$scope*/
          s[3],
          c,
          null
        ) : Ri(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!l || c & /*show_label*/
      1) && se(e, "sr-only", !/*show_label*/
      s[0]), (!l || c & /*show_label*/
      1) && se(e, "hide", !/*show_label*/
      s[0]), (!l || c & /*info*/
      2) && se(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? a ? (a.p(s, c), c & /*info*/
      2 && pe(a, 1)) : (a = Dn(s), a.c(), pe(a, 1), a.m(i.parentNode, i)) : a && (Yi(), Ne(a, 1, 1, () => {
        a = null;
      }), Ai());
    },
    i(s) {
      l || (pe(r, s), pe(a), l = !0);
    },
    o(s) {
      Ne(r, s), Ne(a), l = !1;
    },
    d(s) {
      s && (Ue(e), Ue(n), Ue(i)), r && r.d(s), a && a.d(s);
    }
  };
}
function Ki(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: r = void 0 } = e;
  return t.$$set = (a) => {
    "show_label" in a && n(0, o = a.show_label), "info" in a && n(1, r = a.info), "$$scope" in a && n(3, l = a.$$scope);
  }, [o, r, i, l];
}
class it extends Ei {
  constructor(e) {
    super(), Bi(this, e, Ki, Pi, Ii, { show_label: 0, info: 1 });
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
], Hn = {
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
      primary: Hn[e][n],
      secondary: Hn[e][i]
    }
  }),
  {}
);
const {
  SvelteComponent: Gi,
  append: Tn,
  attr: on,
  bubble: qn,
  create_component: Ji,
  destroy_component: Qi,
  detach: lt,
  element: Ln,
  init: Zi,
  insert: st,
  listen: an,
  mount_component: $i,
  run_all: el,
  safe_not_equal: nl,
  set_data: tl,
  set_input_value: Rn,
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
      st(n, e, i);
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
      n && lt(e);
    }
  };
}
function cl(t) {
  let e, n, i, l, o, r, a;
  return n = new it({
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
      e = Ln("label"), Ji(n.$$.fragment), i = il(), l = Ln("input"), on(l, "type", "color"), l.disabled = /*disabled*/
      t[3], on(l, "class", "svelte-16l8u73"), on(e, "class", "block");
    },
    m(s, c) {
      st(s, e, c), $i(n, e, null), Tn(e, i), Tn(e, l), Rn(
        l,
        /*value*/
        t[0]
      ), o = !0, r || (a = [
        an(
          l,
          "input",
          /*input_input_handler*/
          t[8]
        ),
        an(
          l,
          "focus",
          /*focus_handler*/
          t[6]
        ),
        an(
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
      2050 && (f.$$scope = { dirty: c, ctx: s }), n.$set(f), (!o || c & /*disabled*/
      8) && (l.disabled = /*disabled*/
      s[3]), c & /*value*/
      1 && Rn(
        l,
        /*value*/
        s[0]
      );
    },
    i(s) {
      o || (sl(n.$$.fragment, s), o = !0);
    },
    o(s) {
      ol(n.$$.fragment, s), o = !1;
    },
    d(s) {
      s && lt(e), Qi(n), r = !1, el(a);
    }
  };
}
function ul(t, e, n) {
  let { value: i = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: r = void 0 } = e, { disabled: a = !1 } = e, { show_label: s = !0 } = e;
  const c = al();
  function f() {
    c("change", i), l || c("input");
  }
  rl(() => {
    n(5, l = !1);
  });
  function _(m) {
    qn.call(this, t, m);
  }
  function g(m) {
    qn.call(this, t, m);
  }
  function h() {
    i = this.value, n(0, i);
  }
  return t.$$set = (m) => {
    "value" in m && n(0, i = m.value), "value_is_output" in m && n(5, l = m.value_is_output), "label" in m && n(1, o = m.label), "info" in m && n(2, r = m.info), "disabled" in m && n(3, a = m.disabled), "show_label" in m && n(4, s = m.show_label);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    1 && f();
  }, [
    i,
    o,
    r,
    a,
    s,
    l,
    _,
    g,
    h
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
function Xn(t) {
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
function Yn(t, { delay: e = 0, duration: n = 400, easing: i = _l, x: l = 0, y: o = 0, opacity: r = 0 } = {}) {
  const a = getComputedStyle(t), s = +a.opacity, c = a.transform === "none" ? "" : a.transform, f = s * (1 - r), [_, g] = Xn(l), [h, m] = Xn(o);
  return {
    delay: e,
    duration: n,
    easing: i,
    css: (b, d) => `
			transform: ${c} translate(${(1 - b) * _}${g}, ${(1 - b) * h}${m});
			opacity: ${s - f * d}`
  };
}
const {
  SvelteComponent: dl,
  append: ot,
  attr: A,
  bubble: ml,
  check_outros: bl,
  create_slot: at,
  detach: Ee,
  element: Je,
  empty: gl,
  get_all_dirty_from_scope: rt,
  get_slot_changes: ft,
  group_outros: wl,
  init: pl,
  insert: Ae,
  listen: kl,
  safe_not_equal: vl,
  set_style: B,
  space: ct,
  src_url_equal: Pe,
  toggle_class: _e,
  transition_in: Ke,
  transition_out: Ve,
  update_slot_base: ut
} = window.__gradio__svelte__internal;
function yl(t) {
  let e, n, i, l, o, r, a = (
    /*icon*/
    t[7] && Bn(t)
  );
  const s = (
    /*#slots*/
    t[12].default
  ), c = at(
    s,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      e = Je("button"), a && a.c(), n = ct(), c && c.c(), A(e, "class", i = /*size*/
      t[4] + " " + /*variant*/
      t[3] + " " + /*elem_classes*/
      t[1].join(" ") + " svelte-8huxfn"), A(
        e,
        "id",
        /*elem_id*/
        t[0]
      ), e.disabled = /*disabled*/
      t[8], _e(e, "hidden", !/*visible*/
      t[2]), B(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), B(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), B(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(f, _) {
      Ae(f, e, _), a && a.m(e, null), ot(e, n), c && c.m(e, null), l = !0, o || (r = kl(
        e,
        "click",
        /*click_handler*/
        t[13]
      ), o = !0);
    },
    p(f, _) {
      /*icon*/
      f[7] ? a ? a.p(f, _) : (a = Bn(f), a.c(), a.m(e, n)) : a && (a.d(1), a = null), c && c.p && (!l || _ & /*$$scope*/
      2048) && ut(
        c,
        s,
        f,
        /*$$scope*/
        f[11],
        l ? ft(
          s,
          /*$$scope*/
          f[11],
          _,
          null
        ) : rt(
          /*$$scope*/
          f[11]
        ),
        null
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      f[4] + " " + /*variant*/
      f[3] + " " + /*elem_classes*/
      f[1].join(" ") + " svelte-8huxfn")) && A(e, "class", i), (!l || _ & /*elem_id*/
      1) && A(
        e,
        "id",
        /*elem_id*/
        f[0]
      ), (!l || _ & /*disabled*/
      256) && (e.disabled = /*disabled*/
      f[8]), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && _e(e, "hidden", !/*visible*/
      f[2]), _ & /*scale*/
      512 && B(
        e,
        "flex-grow",
        /*scale*/
        f[9]
      ), _ & /*scale*/
      512 && B(
        e,
        "width",
        /*scale*/
        f[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && B(e, "min-width", typeof /*min_width*/
      f[10] == "number" ? `calc(min(${/*min_width*/
      f[10]}px, 100%))` : null);
    },
    i(f) {
      l || (Ke(c, f), l = !0);
    },
    o(f) {
      Ve(c, f), l = !1;
    },
    d(f) {
      f && Ee(e), a && a.d(), c && c.d(f), o = !1, r();
    }
  };
}
function Cl(t) {
  let e, n, i, l, o = (
    /*icon*/
    t[7] && On(t)
  );
  const r = (
    /*#slots*/
    t[12].default
  ), a = at(
    r,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      e = Je("a"), o && o.c(), n = ct(), a && a.c(), A(
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
      ), _e(e, "hidden", !/*visible*/
      t[2]), _e(
        e,
        "disabled",
        /*disabled*/
        t[8]
      ), B(
        e,
        "flex-grow",
        /*scale*/
        t[9]
      ), B(
        e,
        "pointer-events",
        /*disabled*/
        t[8] ? "none" : null
      ), B(
        e,
        "width",
        /*scale*/
        t[9] === 0 ? "fit-content" : null
      ), B(e, "min-width", typeof /*min_width*/
      t[10] == "number" ? `calc(min(${/*min_width*/
      t[10]}px, 100%))` : null);
    },
    m(s, c) {
      Ae(s, e, c), o && o.m(e, null), ot(e, n), a && a.m(e, null), l = !0;
    },
    p(s, c) {
      /*icon*/
      s[7] ? o ? o.p(s, c) : (o = On(s), o.c(), o.m(e, n)) : o && (o.d(1), o = null), a && a.p && (!l || c & /*$$scope*/
      2048) && ut(
        a,
        r,
        s,
        /*$$scope*/
        s[11],
        l ? ft(
          r,
          /*$$scope*/
          s[11],
          c,
          null
        ) : rt(
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
      30) && _e(e, "hidden", !/*visible*/
      s[2]), (!l || c & /*size, variant, elem_classes, disabled*/
      282) && _e(
        e,
        "disabled",
        /*disabled*/
        s[8]
      ), c & /*scale*/
      512 && B(
        e,
        "flex-grow",
        /*scale*/
        s[9]
      ), c & /*disabled*/
      256 && B(
        e,
        "pointer-events",
        /*disabled*/
        s[8] ? "none" : null
      ), c & /*scale*/
      512 && B(
        e,
        "width",
        /*scale*/
        s[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && B(e, "min-width", typeof /*min_width*/
      s[10] == "number" ? `calc(min(${/*min_width*/
      s[10]}px, 100%))` : null);
    },
    i(s) {
      l || (Ke(a, s), l = !0);
    },
    o(s) {
      Ve(a, s), l = !1;
    },
    d(s) {
      s && Ee(e), o && o.d(), a && a.d(s);
    }
  };
}
function Bn(t) {
  let e, n, i;
  return {
    c() {
      e = Je("img"), A(e, "class", "button-icon svelte-8huxfn"), Pe(e.src, n = /*icon*/
      t[7].url) || A(e, "src", n), A(e, "alt", i = `${/*value*/
      t[5]} icon`);
    },
    m(l, o) {
      Ae(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Pe(e.src, n = /*icon*/
      l[7].url) && A(e, "src", n), o & /*value*/
      32 && i !== (i = `${/*value*/
      l[5]} icon`) && A(e, "alt", i);
    },
    d(l) {
      l && Ee(e);
    }
  };
}
function On(t) {
  let e, n, i;
  return {
    c() {
      e = Je("img"), A(e, "class", "button-icon svelte-8huxfn"), Pe(e.src, n = /*icon*/
      t[7].url) || A(e, "src", n), A(e, "alt", i = `${/*value*/
      t[5]} icon`);
    },
    m(l, o) {
      Ae(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Pe(e.src, n = /*icon*/
      l[7].url) && A(e, "src", n), o & /*value*/
      32 && i !== (i = `${/*value*/
      l[5]} icon`) && A(e, "alt", i);
    },
    d(l) {
      l && Ee(e);
    }
  };
}
function Sl(t) {
  let e, n, i, l;
  const o = [Cl, yl], r = [];
  function a(s, c) {
    return (
      /*link*/
      s[6] && /*link*/
      s[6].length > 0 ? 0 : 1
    );
  }
  return e = a(t), n = r[e] = o[e](t), {
    c() {
      n.c(), i = gl();
    },
    m(s, c) {
      r[e].m(s, c), Ae(s, i, c), l = !0;
    },
    p(s, [c]) {
      let f = e;
      e = a(s), e === f ? r[e].p(s, c) : (wl(), Ve(r[f], 1, 1, () => {
        r[f] = null;
      }), bl(), n = r[e], n ? n.p(s, c) : (n = r[e] = o[e](s), n.c()), Ke(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      l || (Ke(n), l = !0);
    },
    o(s) {
      Ve(n), l = !1;
    },
    d(s) {
      s && Ee(i), r[e].d(s);
    }
  };
}
function zl(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: r = [] } = e, { visible: a = !0 } = e, { variant: s = "secondary" } = e, { size: c = "lg" } = e, { value: f = null } = e, { link: _ = null } = e, { icon: g = null } = e, { disabled: h = !1 } = e, { scale: m = null } = e, { min_width: b = void 0 } = e;
  function d(u) {
    ml.call(this, t, u);
  }
  return t.$$set = (u) => {
    "elem_id" in u && n(0, o = u.elem_id), "elem_classes" in u && n(1, r = u.elem_classes), "visible" in u && n(2, a = u.visible), "variant" in u && n(3, s = u.variant), "size" in u && n(4, c = u.size), "value" in u && n(5, f = u.value), "link" in u && n(6, _ = u.link), "icon" in u && n(7, g = u.icon), "disabled" in u && n(8, h = u.disabled), "scale" in u && n(9, m = u.scale), "min_width" in u && n(10, b = u.min_width), "$$scope" in u && n(11, l = u.$$scope);
  }, [
    o,
    r,
    a,
    s,
    c,
    f,
    _,
    g,
    h,
    m,
    b,
    l,
    i,
    d
  ];
}
class In extends dl {
  constructor(e) {
    super(), pl(this, e, zl, Sl, vl, {
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
  add_render_callback: ht,
  append: Le,
  attr: I,
  binding_callbacks: jn,
  check_outros: Ml,
  create_bidirectional_transition: Un,
  destroy_each: El,
  detach: ve,
  element: Ge,
  empty: Al,
  ensure_array_like: Wn,
  group_outros: Dl,
  init: Hl,
  insert: ye,
  listen: mn,
  prevent_default: Tl,
  run_all: ql,
  safe_not_equal: Ll,
  set_data: Rl,
  set_style: oe,
  space: bn,
  text: Xl,
  toggle_class: P,
  transition_in: rn,
  transition_out: Nn
} = window.__gradio__svelte__internal, { createEventDispatcher: Yl } = window.__gradio__svelte__internal;
function Fn(t, e, n) {
  const i = t.slice();
  return i[26] = e[n], i;
}
function Pn(t) {
  let e, n, i, l, o, r = Wn(
    /*filtered_indices*/
    t[1]
  ), a = [];
  for (let s = 0; s < r.length; s += 1)
    a[s] = Kn(Fn(t, r, s));
  return {
    c() {
      e = Ge("ul");
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      I(e, "class", "options svelte-yuohum"), I(e, "role", "listbox"), oe(
        e,
        "bottom",
        /*bottom*/
        t[9]
      ), oe(e, "max-height", `calc(${/*max_height*/
      t[10]}px - var(--window-padding))`), oe(
        e,
        "width",
        /*input_width*/
        t[8] + "px"
      );
    },
    m(s, c) {
      ye(s, e, c);
      for (let f = 0; f < a.length; f += 1)
        a[f] && a[f].m(e, null);
      t[22](e), i = !0, l || (o = mn(e, "mousedown", Tl(
        /*mousedown_handler*/
        t[21]
      )), l = !0);
    },
    p(s, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        r = Wn(
          /*filtered_indices*/
          s[1]
        );
        let f;
        for (f = 0; f < r.length; f += 1) {
          const _ = Fn(s, r, f);
          a[f] ? a[f].p(_, c) : (a[f] = Kn(_), a[f].c(), a[f].m(e, null));
        }
        for (; f < a.length; f += 1)
          a[f].d(1);
        a.length = r.length;
      }
      c & /*bottom*/
      512 && oe(
        e,
        "bottom",
        /*bottom*/
        s[9]
      ), c & /*max_height*/
      1024 && oe(e, "max-height", `calc(${/*max_height*/
      s[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && oe(
        e,
        "width",
        /*input_width*/
        s[8] + "px"
      );
    },
    i(s) {
      i || (s && ht(() => {
        i && (n || (n = Un(e, Yn, { duration: 200, y: 5 }, !0)), n.run(1));
      }), i = !0);
    },
    o(s) {
      s && (n || (n = Un(e, Yn, { duration: 200, y: 5 }, !1)), n.run(0)), i = !1;
    },
    d(s) {
      s && ve(e), El(a, s), t[22](null), s && n && n.end(), l = !1, o();
    }
  };
}
function Kn(t) {
  let e, n, i, l = (
    /*choices*/
    t[0][
      /*index*/
      t[26]
    ][0] + ""
  ), o, r, a, s, c;
  return {
    c() {
      e = Ge("li"), n = Ge("span"), n.textContent = "✓", i = bn(), o = Xl(l), r = bn(), I(n, "class", "inner-item svelte-yuohum"), P(n, "hide", !/*selected_indices*/
      t[4].includes(
        /*index*/
        t[26]
      )), I(e, "class", "item svelte-yuohum"), I(e, "data-index", a = /*index*/
      t[26]), I(e, "aria-label", s = /*choices*/
      t[0][
        /*index*/
        t[26]
      ][0]), I(e, "data-testid", "dropdown-option"), I(e, "role", "option"), I(e, "aria-selected", c = /*selected_indices*/
      t[4].includes(
        /*index*/
        t[26]
      )), P(
        e,
        "selected",
        /*selected_indices*/
        t[4].includes(
          /*index*/
          t[26]
        )
      ), P(
        e,
        "active",
        /*index*/
        t[26] === /*active_index*/
        t[5]
      ), P(
        e,
        "bg-gray-100",
        /*index*/
        t[26] === /*active_index*/
        t[5]
      ), P(
        e,
        "dark:bg-gray-600",
        /*index*/
        t[26] === /*active_index*/
        t[5]
      );
    },
    m(f, _) {
      ye(f, e, _), Le(e, n), Le(e, i), Le(e, o), Le(e, r);
    },
    p(f, _) {
      _ & /*selected_indices, filtered_indices*/
      18 && P(n, "hide", !/*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )), _ & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0] + "") && Rl(o, l), _ & /*filtered_indices*/
      2 && a !== (a = /*index*/
      f[26]) && I(e, "data-index", a), _ & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      f[0][
        /*index*/
        f[26]
      ][0]) && I(e, "aria-label", s), _ & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      f[4].includes(
        /*index*/
        f[26]
      )) && I(e, "aria-selected", c), _ & /*selected_indices, filtered_indices*/
      18 && P(
        e,
        "selected",
        /*selected_indices*/
        f[4].includes(
          /*index*/
          f[26]
        )
      ), _ & /*filtered_indices, active_index*/
      34 && P(
        e,
        "active",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), _ & /*filtered_indices, active_index*/
      34 && P(
        e,
        "bg-gray-100",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      ), _ & /*filtered_indices, active_index*/
      34 && P(
        e,
        "dark:bg-gray-600",
        /*index*/
        f[26] === /*active_index*/
        f[5]
      );
    },
    d(f) {
      f && ve(e);
    }
  };
}
function Bl(t) {
  let e, n, i, l, o;
  ht(
    /*onwindowresize*/
    t[19]
  );
  let r = (
    /*show_options*/
    t[2] && !/*disabled*/
    t[3] && Pn(t)
  );
  return {
    c() {
      e = Ge("div"), n = bn(), r && r.c(), i = Al(), I(e, "class", "reference");
    },
    m(a, s) {
      ye(a, e, s), t[20](e), ye(a, n, s), r && r.m(a, s), ye(a, i, s), l || (o = [
        mn(
          window,
          "scroll",
          /*scroll_listener*/
          t[12]
        ),
        mn(
          window,
          "resize",
          /*onwindowresize*/
          t[19]
        )
      ], l = !0);
    },
    p(a, [s]) {
      /*show_options*/
      a[2] && !/*disabled*/
      a[3] ? r ? (r.p(a, s), s & /*show_options, disabled*/
      12 && rn(r, 1)) : (r = Pn(a), r.c(), rn(r, 1), r.m(i.parentNode, i)) : r && (Dl(), Nn(r, 1, 1, () => {
        r = null;
      }), Ml());
    },
    i(a) {
      rn(r);
    },
    o(a) {
      Nn(r);
    },
    d(a) {
      a && (ve(e), ve(n), ve(i)), t[20](null), r && r.d(a), l = !1, ql(o);
    }
  };
}
function Ol(t, e, n) {
  var i, l;
  let { choices: o } = e, { filtered_indices: r } = e, { show_options: a = !1 } = e, { disabled: s = !1 } = e, { selected_indices: c = [] } = e, { active_index: f = null } = e, _, g, h, m, b, d, u, w, p;
  function E() {
    const { top: y, bottom: Z } = b.getBoundingClientRect();
    n(16, _ = y), n(17, g = p - Z);
  }
  let S = null;
  function x() {
    a && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        E(), S = null;
      },
      10
    ));
  }
  const M = Yl();
  function C() {
    n(11, p = window.innerHeight);
  }
  function D(y) {
    jn[y ? "unshift" : "push"](() => {
      b = y, n(6, b);
    });
  }
  const q = (y) => M("change", y);
  function L(y) {
    jn[y ? "unshift" : "push"](() => {
      d = y, n(7, d);
    });
  }
  return t.$$set = (y) => {
    "choices" in y && n(0, o = y.choices), "filtered_indices" in y && n(1, r = y.filtered_indices), "show_options" in y && n(2, a = y.show_options), "disabled" in y && n(3, s = y.disabled), "selected_indices" in y && n(4, c = y.selected_indices), "active_index" in y && n(5, f = y.active_index);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (a && b) {
        if (d && c.length > 0) {
          let Z = d.querySelectorAll("li");
          for (const te of Array.from(Z))
            if (te.getAttribute("data-index") === c[0].toString()) {
              n(14, i = d == null ? void 0 : d.scrollTo) === null || i === void 0 || i.call(d, 0, te.offsetTop);
              break;
            }
        }
        E();
        const y = n(15, l = b.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        n(18, h = (y == null ? void 0 : y.height) || 0), n(8, m = (y == null ? void 0 : y.width) || 0);
      }
      g > _ ? (n(10, w = g), n(9, u = null)) : (n(9, u = `${g + h}px`), n(10, w = _ - h));
    }
  }, [
    o,
    r,
    a,
    s,
    c,
    f,
    b,
    d,
    m,
    u,
    w,
    p,
    x,
    M,
    i,
    l,
    _,
    g,
    h,
    C,
    D,
    q,
    L
  ];
}
class Il extends xl {
  constructor(e) {
    super(), Hl(this, e, Ol, Bl, Ll, {
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
function Vn(t, e) {
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
  append: $,
  attr: O,
  binding_callbacks: Fl,
  check_outros: Pl,
  create_component: gn,
  destroy_component: wn,
  detach: vn,
  element: re,
  group_outros: Kl,
  init: Vl,
  insert: yn,
  listen: we,
  mount_component: pn,
  run_all: Gl,
  safe_not_equal: Jl,
  set_data: Ql,
  set_input_value: Gn,
  space: fn,
  text: Zl,
  toggle_class: ae,
  transition_in: fe,
  transition_out: ke
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
      yn(n, e, i);
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
      n && vn(e);
    }
  };
}
function Jn(t) {
  let e, n, i;
  return n = new Jt({}), {
    c() {
      e = re("div"), gn(n.$$.fragment), O(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      yn(l, e, o), pn(n, e, null), i = !0;
    },
    i(l) {
      i || (fe(n.$$.fragment, l), i = !0);
    },
    o(l) {
      ke(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && vn(e), wn(n);
    }
  };
}
function is(t) {
  let e, n, i, l, o, r, a, s, c, f, _, g, h, m;
  n = new it({
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
  let b = !/*disabled*/
  t[3] && Jn();
  return _ = new Il({
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
      e = re("div"), gn(n.$$.fragment), i = fn(), l = re("div"), o = re("div"), r = re("div"), a = re("input"), c = fn(), b && b.c(), f = fn(), gn(_.$$.fragment), O(a, "role", "listbox"), O(a, "aria-controls", "dropdown-options"), O(
        a,
        "aria-expanded",
        /*show_options*/
        t[12]
      ), O(
        a,
        "aria-label",
        /*label*/
        t[0]
      ), O(a, "class", "border-none svelte-1m1zvyj"), a.disabled = /*disabled*/
      t[3], O(a, "autocomplete", "off"), a.readOnly = s = !/*filterable*/
      t[7], ae(a, "subdued", !/*choices_names*/
      t[13].includes(
        /*input_text*/
        t[9]
      ) && !/*allow_custom_value*/
      t[6]), O(r, "class", "secondary-wrap svelte-1m1zvyj"), O(o, "class", "wrap-inner svelte-1m1zvyj"), ae(
        o,
        "show_options",
        /*show_options*/
        t[12]
      ), O(l, "class", "wrap svelte-1m1zvyj"), O(e, "class", "svelte-1m1zvyj"), ae(
        e,
        "container",
        /*container*/
        t[5]
      );
    },
    m(d, u) {
      yn(d, e, u), pn(n, e, null), $(e, i), $(e, l), $(l, o), $(o, r), $(r, a), Gn(
        a,
        /*input_text*/
        t[9]
      ), t[29](a), $(r, c), b && b.m(r, null), $(l, f), pn(_, l, null), g = !0, h || (m = [
        we(
          a,
          "input",
          /*input_input_handler*/
          t[28]
        ),
        we(
          a,
          "keydown",
          /*handle_key_down*/
          t[19]
        ),
        we(
          a,
          "keyup",
          /*keyup_handler*/
          t[30]
        ),
        we(
          a,
          "blur",
          /*handle_blur*/
          t[18]
        ),
        we(
          a,
          "focus",
          /*handle_focus*/
          t[17]
        )
      ], h = !0);
    },
    p(d, u) {
      const w = {};
      u[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      d[4]), u[0] & /*info*/
      2 && (w.info = /*info*/
      d[1]), u[0] & /*label*/
      1 | u[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: u, ctx: d }), n.$set(w), (!g || u[0] & /*show_options*/
      4096) && O(
        a,
        "aria-expanded",
        /*show_options*/
        d[12]
      ), (!g || u[0] & /*label*/
      1) && O(
        a,
        "aria-label",
        /*label*/
        d[0]
      ), (!g || u[0] & /*disabled*/
      8) && (a.disabled = /*disabled*/
      d[3]), (!g || u[0] & /*filterable*/
      128 && s !== (s = !/*filterable*/
      d[7])) && (a.readOnly = s), u[0] & /*input_text*/
      512 && a.value !== /*input_text*/
      d[9] && Gn(
        a,
        /*input_text*/
        d[9]
      ), (!g || u[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && ae(a, "subdued", !/*choices_names*/
      d[13].includes(
        /*input_text*/
        d[9]
      ) && !/*allow_custom_value*/
      d[6]), /*disabled*/
      d[3] ? b && (Kl(), ke(b, 1, 1, () => {
        b = null;
      }), Pl()) : b ? u[0] & /*disabled*/
      8 && fe(b, 1) : (b = Jn(), b.c(), fe(b, 1), b.m(r, null)), (!g || u[0] & /*show_options*/
      4096) && ae(
        o,
        "show_options",
        /*show_options*/
        d[12]
      );
      const p = {};
      u[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      d[12]), u[0] & /*choices*/
      4 && (p.choices = /*choices*/
      d[2]), u[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      d[10]), u[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      d[3]), u[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      d[11] === null ? [] : [
        /*selected_index*/
        d[11]
      ]), u[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      d[14]), _.$set(p), (!g || u[0] & /*container*/
      32) && ae(
        e,
        "container",
        /*container*/
        d[5]
      );
    },
    i(d) {
      g || (fe(n.$$.fragment, d), fe(b), fe(_.$$.fragment, d), g = !0);
    },
    o(d) {
      ke(n.$$.fragment, d), ke(b), ke(_.$$.fragment, d), g = !1;
    },
    d(d) {
      d && vn(e), wn(n), t[29](null), b && b.d(), wn(_), h = !1, Gl(m);
    }
  };
}
function ls(t, e, n) {
  let { label: i } = e, { info: l = void 0 } = e, { value: o = [] } = e, r = [], { value_is_output: a = !1 } = e, { choices: s } = e, c, { disabled: f = !1 } = e, { show_label: _ } = e, { container: g = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: m = !0 } = e, b, d = !1, u, w, p = "", E = "", S = !1, x = [], M = null, C = null, D;
  const q = es();
  o ? (D = s.map((v) => v[1]).indexOf(o), C = D, C === -1 ? (r = o, C = null) : ([p, r] = s[C], E = p), y()) : s.length > 0 && (D = 0, C = 0, [p, o] = s[C], r = o, E = p);
  function L() {
    n(13, u = s.map((v) => v[0])), n(24, w = s.map((v) => v[1]));
  }
  function y() {
    L(), o === void 0 || Array.isArray(o) && o.length === 0 ? (n(9, p = ""), n(11, C = null)) : w.includes(o) ? (n(9, p = u[w.indexOf(o)]), n(11, C = w.indexOf(o))) : h ? (n(9, p = o), n(11, C = null)) : (n(9, p = ""), n(11, C = null)), n(27, D = C);
  }
  function Z(v) {
    if (n(11, C = parseInt(v.detail.target.dataset.index)), isNaN(C)) {
      n(11, C = null);
      return;
    }
    n(12, d = !1), n(14, M = null), b.blur();
  }
  function te(v) {
    n(10, x = s.map((He, ie) => ie)), n(12, d = !0), q("focus");
  }
  function me() {
    h ? n(20, o = p) : n(9, p = u[w.indexOf(o)]), n(12, d = !1), n(14, M = null), q("blur");
  }
  function De(v) {
    n(12, [d, M] = Wl(v, M, x), d, (n(14, M), n(2, s), n(23, c), n(6, h), n(9, p), n(10, x), n(8, b), n(25, E), n(11, C), n(27, D), n(26, S), n(24, w))), v.key === "Enter" && (M !== null ? (n(11, C = M), n(12, d = !1), b.blur(), n(14, M = null)) : u.includes(p) ? (n(11, C = u.indexOf(p)), n(12, d = !1), n(14, M = null), b.blur()) : h && (n(20, o = p), n(11, C = null), n(12, d = !1), n(14, M = null), b.blur()), q("enter", o));
  }
  ns(() => {
    n(21, a = !1), n(26, S = !0);
  }), $l(() => {
    b.focus();
  });
  function Qe() {
    p = this.value, n(9, p), n(11, C), n(27, D), n(26, S), n(2, s), n(24, w);
  }
  function be(v) {
    Fl[v ? "unshift" : "push"](() => {
      b = v, n(8, b);
    });
  }
  const Ze = (v) => q("key_up", { key: v.key, input_value: p });
  return t.$$set = (v) => {
    "label" in v && n(0, i = v.label), "info" in v && n(1, l = v.info), "value" in v && n(20, o = v.value), "value_is_output" in v && n(21, a = v.value_is_output), "choices" in v && n(2, s = v.choices), "disabled" in v && n(3, f = v.disabled), "show_label" in v && n(4, _ = v.show_label), "container" in v && n(5, g = v.container), "allow_custom_value" in v && n(6, h = v.allow_custom_value), "filterable" in v && n(7, m = v.filterable);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== D && C !== null && S && (n(9, [p, o] = s[C], p, (n(20, o), n(11, C), n(27, D), n(26, S), n(2, s), n(24, w))), n(27, D = C), q("select", {
      index: C,
      value: w[C],
      selected: !0
    })), t.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != r && (y(), Ul(q, o, a), n(22, r = o)), t.$$.dirty[0] & /*choices*/
    4 && L(), t.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && s !== c && (h || y(), n(23, c = s), n(10, x = Vn(s, p)), !h && x.length > 0 && n(14, M = x[0]), b == document.activeElement && n(12, d = !0)), t.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== E && (n(10, x = Vn(s, p)), n(25, E = p), !h && x.length > 0 && n(14, M = x[0]));
  }, [
    i,
    l,
    s,
    f,
    _,
    g,
    h,
    m,
    b,
    p,
    x,
    C,
    d,
    u,
    M,
    q,
    Z,
    te,
    me,
    De,
    o,
    a,
    r,
    c,
    w,
    E,
    S,
    D,
    Qe,
    be,
    Ze
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
  append: V,
  attr: Re,
  create_component: Xe,
  destroy_component: Ye,
  detach: Cn,
  element: ee,
  init: as,
  insert: Sn,
  mount_component: Be,
  safe_not_equal: rs,
  set_style: Oe,
  space: cn,
  text: _t,
  transition_in: Ie,
  transition_out: je
} = window.__gradio__svelte__internal, { createEventDispatcher: fs } = window.__gradio__svelte__internal, { onMount: cs, onDestroy: us } = window.__gradio__svelte__internal;
function hs(t) {
  let e;
  return {
    c() {
      e = _t("Cancel");
    },
    m(n, i) {
      Sn(n, e, i);
    },
    d(n) {
      n && Cn(e);
    }
  };
}
function _s(t) {
  let e;
  return {
    c() {
      e = _t("OK");
    },
    m(n, i) {
      Sn(n, e, i);
    },
    d(n) {
      n && Cn(e);
    }
  };
}
function ds(t) {
  let e, n, i, l, o, r, a, s, c, f, _, g, h, m, b;
  return o = new ss({
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
  }), o.$on(
    "change",
    /*onDropDownChange*/
    t[4]
  ), o.$on(
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
  ), _ = new In({
    props: {
      $$slots: { default: [hs] },
      $$scope: { ctx: t }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    t[10]
  ), m = new In({
    props: {
      variant: "primary",
      $$slots: { default: [_s] },
      $$scope: { ctx: t }
    }
  }), m.$on(
    "click",
    /*click_handler_1*/
    t[11]
  ), {
    c() {
      e = ee("div"), n = ee("div"), i = ee("span"), l = ee("div"), Xe(o.$$.fragment), r = cn(), a = ee("div"), Xe(s.$$.fragment), c = cn(), f = ee("div"), Xe(_.$$.fragment), g = cn(), h = ee("div"), Xe(m.$$.fragment), Oe(l, "margin-right", "10px"), Oe(a, "margin-right", "40px"), Oe(a, "margin-bottom", "8px"), Oe(f, "margin-right", "8px"), Re(i, "class", "model-content svelte-hkn2q1"), Re(n, "class", "modal-container svelte-hkn2q1"), Re(e, "class", "modal svelte-hkn2q1"), Re(e, "id", "model-box-edit");
    },
    m(d, u) {
      Sn(d, e, u), V(e, n), V(n, i), V(i, l), Be(o, l, null), V(i, r), V(i, a), Be(s, a, null), V(i, c), V(i, f), Be(_, f, null), V(i, g), V(i, h), Be(m, h, null), b = !0;
    },
    p(d, [u]) {
      const w = {};
      u & /*currentLabel*/
      1 && (w.value = /*currentLabel*/
      d[0]), u & /*choices*/
      4 && (w.choices = /*choices*/
      d[2]), o.$set(w);
      const p = {};
      u & /*currentColor*/
      2 && (p.value = /*currentColor*/
      d[1]), s.$set(p);
      const E = {};
      u & /*$$scope*/
      16384 && (E.$$scope = { dirty: u, ctx: d }), _.$set(E);
      const S = {};
      u & /*$$scope*/
      16384 && (S.$$scope = { dirty: u, ctx: d }), m.$set(S);
    },
    i(d) {
      b || (Ie(o.$$.fragment, d), Ie(s.$$.fragment, d), Ie(_.$$.fragment, d), Ie(m.$$.fragment, d), b = !0);
    },
    o(d) {
      je(o.$$.fragment, d), je(s.$$.fragment, d), je(_.$$.fragment, d), je(m.$$.fragment, d), b = !1;
    },
    d(d) {
      d && Cn(e), Ye(o), Ye(s), Ye(_), Ye(m);
    }
  };
}
function ms(t, e, n) {
  let { label: i = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: r = [] } = e, { color: a = "" } = e, { currentColor: s = "" } = e;
  const c = fs();
  function f(u) {
    c("change", {
      label: l,
      color: s,
      ok: u
    });
  }
  function _(u) {
    const { detail: w } = u;
    let p = w;
    Number.isInteger(p) ? (Array.isArray(r) && p < r.length && n(1, s = r[p]), Array.isArray(o) && p < o.length && n(0, l = o[p][0])) : n(0, l = p);
  }
  function g(u) {
    const { detail: w } = u;
    n(1, s = w);
  }
  function h(u) {
    _(u), f(!0);
  }
  function m(u) {
    switch (u.key) {
      case "Enter":
        f(!0);
        break;
    }
  }
  cs(() => {
    document.addEventListener("keydown", m), n(0, l = i), n(1, s = a);
  }), us(() => {
    document.removeEventListener("keydown", m);
  });
  const b = () => f(!1), d = () => f(!0);
  return t.$$set = (u) => {
    "label" in u && n(7, i = u.label), "currentLabel" in u && n(0, l = u.currentLabel), "choices" in u && n(2, o = u.choices), "choicesColors" in u && n(8, r = u.choicesColors), "color" in u && n(9, a = u.color), "currentColor" in u && n(1, s = u.currentColor);
  }, [
    l,
    s,
    o,
    f,
    _,
    g,
    h,
    i,
    r,
    a,
    b,
    d
  ];
}
class dt extends os {
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
const X = (t, e, n) => Math.min(Math.max(t, e), n);
function un(t, e) {
  if (t.startsWith("rgba"))
    return t.replace(/[\d.]+$/, e.toString());
  const n = t.match(/\d+/g);
  if (!n || n.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [i, l, o] = n;
  return `rgba(${i}, ${l}, ${o}, ${e})`;
}
class hn {
  constructor(e, n, i, l, o, r, a, s, c, f, _ = "rgb(255, 255, 255)", g = 0.5, h = 25, m = 8, b = 2, d = 4, u = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (w) => {
      if (this.isDragging) {
        let p = w.clientX - this.offsetMouseX - this.xmin, E = w.clientY - this.offsetMouseY - this.ymin;
        const S = this.canvasXmax - this.canvasXmin, x = this.canvasYmax - this.canvasYmin;
        p = X(p, -this.xmin, S - this.xmax), E = X(E, -this.ymin, x - this.ymax), this.xmin += p, this.ymin += E, this.xmax += p, this.ymax += E, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (w) => {
      if (this.isResizing) {
        const p = w.clientX, E = w.clientY, S = p - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, x = E - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, M = this.canvasXmax - this.canvasXmin, C = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += S, this.ymin += x, this.xmin = X(this.xmin, 0, this.xmax - this.minSize), this.ymin = X(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += S, this.ymin += x, this.xmax = X(this.xmax, this.xmin + this.minSize, M), this.ymin = X(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += S, this.ymax += x, this.xmax = X(this.xmax, this.xmin + this.minSize, M), this.ymax = X(this.ymax, this.ymin + this.minSize, C);
            break;
          case 3:
            this.xmin += S, this.ymax += x, this.xmin = X(this.xmin, 0, this.xmax - this.minSize), this.ymax = X(this.ymax, this.ymin + this.minSize, C);
            break;
          case 4:
            this.ymin += x, this.ymin = X(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += S, this.xmax = X(this.xmax, this.xmin + this.minSize, M);
            break;
          case 6:
            this.ymax += x, this.ymax = X(this.ymax, this.ymin + this.minSize, C);
            break;
          case 7:
            this.xmin += S, this.xmin = X(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = l, this.canvasYmax = o, this.scaleFactor = u, this.label = r, this.isDragging = !1, this.xmin = a, this.ymin = s, this.xmax = c, this.ymax = f, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = m, this.thickness = b, this.selectedThickness = d, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = h, this.color = _, this.alpha = g;
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
    if (e.beginPath(), [n, i] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, i, this.getWidth(), this.getHeight()), e.fillStyle = un(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = un(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let r = this.xmin, a = this.ymin - o;
      e.fillStyle = "white", [r, a] = this.toCanvasCoordinates(r, a), e.fillRect(r, a, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, l, o), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
    e.fillStyle = un(this.color, 1);
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
const K = [
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
  append: ce,
  attr: ne,
  binding_callbacks: gs,
  bubble: Qn,
  check_outros: _n,
  create_component: Ce,
  destroy_component: Se,
  detach: ue,
  element: de,
  empty: ws,
  group_outros: dn,
  init: ps,
  insert: he,
  listen: Q,
  mount_component: ze,
  noop: ks,
  run_all: mt,
  safe_not_equal: vs,
  space: xe,
  transition_in: Y,
  transition_out: W
} = window.__gradio__svelte__internal, { onMount: ys, onDestroy: Cs, createEventDispatcher: Ss } = window.__gradio__svelte__internal;
function Zn(t) {
  let e, n, i, l, o, r, a, s, c, f, _, g;
  return i = new ui({}), r = new li({}), c = new Ut({}), {
    c() {
      e = de("span"), n = de("button"), Ce(i.$$.fragment), l = xe(), o = de("button"), Ce(r.$$.fragment), a = xe(), s = de("button"), Ce(c.$$.fragment), ne(n, "class", "icon svelte-182gnnj"), ne(o, "class", "icon svelte-182gnnj"), ne(s, "class", "icon svelte-182gnnj"), ne(e, "class", "canvas-control svelte-182gnnj");
    },
    m(h, m) {
      he(h, e, m), ce(e, n), ze(i, n, null), ce(e, l), ce(e, o), ze(r, o, null), ce(e, a), ce(e, s), ze(c, s, null), f = !0, _ || (g = [
        Q(
          n,
          "click",
          /*click_handler*/
          t[25]
        ),
        Q(
          o,
          "click",
          /*click_handler_1*/
          t[26]
        ),
        Q(
          s,
          "click",
          /*click_handler_2*/
          t[27]
        )
      ], _ = !0);
    },
    p: ks,
    i(h) {
      f || (Y(i.$$.fragment, h), Y(r.$$.fragment, h), Y(c.$$.fragment, h), f = !0);
    },
    o(h) {
      W(i.$$.fragment, h), W(r.$$.fragment, h), W(c.$$.fragment, h), f = !1;
    },
    d(h) {
      h && ue(e), Se(i), Se(r), Se(c), _ = !1, mt(g);
    }
  };
}
function $n(t) {
  let e, n;
  return e = new dt({
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
        t[0].boxes.length ? Me(
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
    t[28]
  ), {
    c() {
      Ce(e.$$.fragment);
    },
    m(i, l) {
      ze(e, i, l), n = !0;
    },
    p(i, l) {
      const o = {};
      l[0] & /*choices*/
      4 && (o.choices = /*choices*/
      i[2]), l[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      i[3]), l[0] & /*selectedBox, value*/
      33 && (o.label = /*selectedBox*/
      i[5] >= 0 && /*selectedBox*/
      i[5] < /*value*/
      i[0].boxes.length ? (
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[5]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      33 && (o.color = /*selectedBox*/
      i[5] >= 0 && /*selectedBox*/
      i[5] < /*value*/
      i[0].boxes.length ? Me(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[5]
        ].color
      ) : ""), e.$set(o);
    },
    i(i) {
      n || (Y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      W(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Se(e, i);
    }
  };
}
function et(t) {
  let e, n;
  return e = new dt({
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
      ) : Me(K[
        /*value*/
        t[0].boxes.length % K.length
      ])
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    t[11]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    t[29]
  ), {
    c() {
      Ce(e.$$.fragment);
    },
    m(i, l) {
      ze(e, i, l), n = !0;
    },
    p(i, l) {
      const o = {};
      l[0] & /*choices*/
      4 && (o.choices = /*choices*/
      i[2]), l[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      i[3]), l[0] & /*choicesColors, value*/
      9 && (o.color = Array.isArray(
        /*choicesColors*/
        i[3]
      ) && /*choicesColors*/
      i[3].length > 0 ? (
        /*choicesColors*/
        i[3][0]
      ) : Me(K[
        /*value*/
        i[0].boxes.length % K.length
      ])), e.$set(o);
    },
    i(i) {
      n || (Y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      W(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Se(e, i);
    }
  };
}
function zs(t) {
  let e, n, i, l, o, r, a, s, c, f = (
    /*interactive*/
    t[1] && Zn(t)
  ), _ = (
    /*editModalVisible*/
    t[6] && $n(t)
  ), g = (
    /*newModalVisible*/
    t[7] && et(t)
  );
  return {
    c() {
      e = de("div"), n = de("canvas"), i = xe(), f && f.c(), l = xe(), _ && _.c(), o = xe(), g && g.c(), r = ws(), ne(n, "class", "canvas-annotator svelte-182gnnj"), ne(e, "class", "canvas-container svelte-182gnnj"), ne(e, "tabindex", "-1");
    },
    m(h, m) {
      he(h, e, m), ce(e, n), t[24](n), he(h, i, m), f && f.m(h, m), he(h, l, m), _ && _.m(h, m), he(h, o, m), g && g.m(h, m), he(h, r, m), a = !0, s || (c = [
        Q(
          n,
          "mousedown",
          /*handleMouseDown*/
          t[8]
        ),
        Q(
          n,
          "mouseup",
          /*handleMouseUp*/
          t[9]
        ),
        Q(
          n,
          "dblclick",
          /*handleDoubleClick*/
          t[13]
        ),
        Q(
          e,
          "focusin",
          /*handleCanvasFocus*/
          t[16]
        ),
        Q(
          e,
          "focusout",
          /*handleCanvasBlur*/
          t[17]
        )
      ], s = !0);
    },
    p(h, m) {
      /*interactive*/
      h[1] ? f ? (f.p(h, m), m[0] & /*interactive*/
      2 && Y(f, 1)) : (f = Zn(h), f.c(), Y(f, 1), f.m(l.parentNode, l)) : f && (dn(), W(f, 1, 1, () => {
        f = null;
      }), _n()), /*editModalVisible*/
      h[6] ? _ ? (_.p(h, m), m[0] & /*editModalVisible*/
      64 && Y(_, 1)) : (_ = $n(h), _.c(), Y(_, 1), _.m(o.parentNode, o)) : _ && (dn(), W(_, 1, 1, () => {
        _ = null;
      }), _n()), /*newModalVisible*/
      h[7] ? g ? (g.p(h, m), m[0] & /*newModalVisible*/
      128 && Y(g, 1)) : (g = et(h), g.c(), Y(g, 1), g.m(r.parentNode, r)) : g && (dn(), W(g, 1, 1, () => {
        g = null;
      }), _n());
    },
    i(h) {
      a || (Y(f), Y(_), Y(g), a = !0);
    },
    o(h) {
      W(f), W(_), W(g), a = !1;
    },
    d(h) {
      h && (ue(e), ue(i), ue(l), ue(o), ue(r)), t[24](null), f && f.d(h), _ && _.d(h), g && g.d(h), s = !1, mt(c);
    }
  };
}
function nt(t) {
  var e = parseInt(t.slice(1, 3), 16), n = parseInt(t.slice(3, 5), 16), i = parseInt(t.slice(5, 7), 16);
  return "rgb(" + e + ", " + n + ", " + i + ")";
}
function Me(t) {
  const e = t.match(/(\d+(\.\d+)?)/g), n = parseInt(e[0]), i = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | n << 16 | i << 8 | l).toString(16).slice(1);
}
function xs(t, e, n) {
  let { imageUrl: i = null } = e, { interactive: l } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 25 } = e, { handleSize: a } = e, { boxThickness: s } = e, { boxSelectedThickness: c } = e, { value: f } = e, { choices: _ = [] } = e, { choicesColors: g = [] } = e, h, m, b = null, d = -1, u = 0, w = 0, p = 0, E = 0, S = 1, x = 0, M = 0, C = !1, D = !1;
  const q = Ss();
  function L() {
    if (m) {
      m.clearRect(0, 0, h.width, h.height), b !== null && m.drawImage(b, u, w, x, M);
      for (const k of f.boxes.slice().reverse())
        k.render(m);
    }
  }
  function y(k) {
    n(5, d = k), f.boxes.forEach((z) => {
      z.setSelected(!1);
    }), k >= 0 && k < f.boxes.length && f.boxes[k].setSelected(!0), L();
  }
  function Z(k) {
    if (!l)
      return;
    const z = h.getBoundingClientRect(), H = k.clientX - z.left, R = k.clientY - z.top;
    for (const [ge, N] of f.boxes.entries()) {
      const Te = N.indexOfPointInsideHandle(H, R);
      if (Te >= 0) {
        y(ge), N.startResize(Te, k);
        return;
      }
    }
    for (const [ge, N] of f.boxes.entries())
      if (N.isPointInsideBox(H, R)) {
        y(ge), N.startDrag(k);
        return;
      }
    y(-1);
  }
  function te(k) {
    q("change");
  }
  function me(k) {
    if (l)
      switch (k.key) {
        case "Delete":
          He();
          break;
      }
  }
  function De() {
    n(7, D = !0);
  }
  function Qe(k) {
    n(7, D = !1);
    const { detail: z } = k;
    let H = z.label, R = z.color;
    if (z.ok) {
      R === null || R === "" ? R = K[f.boxes.length % K.length] : R = nt(R);
      let N = x / 3 / S, Te = x / 3 * 2 / S, xt = M / 3 / S, Mt = M / 3 * 2 / S, Et = new hn(L, u, w, p, E, H, Math.round(N), Math.round(xt), Math.round(Te), Math.round(Mt), R, o, r, a, s, c);
      n(0, f.boxes = [Et, ...f.boxes], f), L(), q("change");
    }
  }
  function be() {
    d >= 0 && d < f.boxes.length && n(6, C = !0);
  }
  function Ze(k) {
    l && be();
  }
  function v(k) {
    n(6, C = !1);
    const { detail: z } = k;
    let H = z.label, R = z.color;
    if (z.ok && d >= 0 && d < f.boxes.length) {
      let N = f.boxes[d];
      N.label = H, N.color = nt(R), L(), q("change");
    }
  }
  function He() {
    d >= 0 && d < f.boxes.length && (f.boxes.splice(d, 1), y(-1), q("change"));
  }
  function ie() {
    if (h) {
      if (S = 1, n(4, h.width = h.clientWidth, h), b !== null)
        if (b.width > h.width)
          S = h.width / b.width, x = b.width * S, M = b.height * S, u = 0, w = 0, p = x, E = M, n(4, h.height = M, h);
        else {
          x = b.width, M = b.height;
          var k = (h.width - x) / 2;
          u = k, w = 0, p = k + x, E = b.height, n(4, h.height = M, h);
        }
      else
        u = 0, w = 0, p = h.width, E = h.height, n(4, h.height = h.clientHeight, h);
      if (p > 0 && E > 0)
        for (const z of f.boxes)
          z.canvasXmin = u, z.canvasYmin = w, z.canvasXmax = p, z.canvasYmax = E, z.setScaleFactor(S);
      L(), q("change");
    }
  }
  const bt = new ResizeObserver(ie);
  function gt() {
    for (let k = 0; k < f.boxes.length; k++) {
      let z = f.boxes[k];
      if (!(z instanceof hn)) {
        let H = "", R = "";
        z.hasOwnProperty("color") ? (H = z.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = K[k % K.length], z.hasOwnProperty("label") && (R = z.label), z = new hn(L, u, w, p, E, R, z.xmin, z.ymin, z.xmax, z.ymax, H, o, r, a, s, c), n(0, f.boxes[k] = z, f);
      }
    }
  }
  function zn() {
    i !== null && (b === null || b.src != i) && (b = new Image(), b.src = i, b.onload = function() {
      ie(), L();
    });
  }
  ys(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(g) || g.length == 0))
      for (let k = 0; k < _.length; k++) {
        let z = K[k % K.length];
        g.push(Me(z));
      }
    m = h.getContext("2d"), bt.observe(h), zn(), ie(), L();
  });
  function wt() {
    document.addEventListener("keydown", me);
  }
  function pt() {
    document.removeEventListener("keydown", me);
  }
  Cs(() => {
    document.removeEventListener("keydown", me);
  });
  function kt(k) {
    gs[k ? "unshift" : "push"](() => {
      h = k, n(4, h);
    });
  }
  const vt = () => De(), yt = () => be(), Ct = () => He();
  function St(k) {
    Qn.call(this, t, k);
  }
  function zt(k) {
    Qn.call(this, t, k);
  }
  return t.$$set = (k) => {
    "imageUrl" in k && n(18, i = k.imageUrl), "interactive" in k && n(1, l = k.interactive), "boxAlpha" in k && n(19, o = k.boxAlpha), "boxMinSize" in k && n(20, r = k.boxMinSize), "handleSize" in k && n(21, a = k.handleSize), "boxThickness" in k && n(22, s = k.boxThickness), "boxSelectedThickness" in k && n(23, c = k.boxSelectedThickness), "value" in k && n(0, f = k.value), "choices" in k && n(2, _ = k.choices), "choicesColors" in k && n(3, g = k.choicesColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*value*/
    1 && (zn(), gt(), ie(), L());
  }, [
    f,
    l,
    _,
    g,
    h,
    d,
    C,
    D,
    Z,
    te,
    De,
    Qe,
    be,
    Ze,
    v,
    He,
    wt,
    pt,
    i,
    o,
    r,
    a,
    s,
    c,
    kt,
    vt,
    yt,
    Ct,
    St,
    zt
  ];
}
class Ms extends bs {
  constructor(e) {
    super(), ps(
      this,
      e,
      xs,
      zs,
      vs,
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
  SvelteComponent: Es,
  add_flush_callback: As,
  bind: Ds,
  binding_callbacks: Hs,
  create_component: Ts,
  destroy_component: qs,
  init: Ls,
  mount_component: Rs,
  safe_not_equal: Xs,
  transition_in: Ys,
  transition_out: Bs
} = window.__gradio__svelte__internal, { createEventDispatcher: Os } = window.__gradio__svelte__internal;
function Is(t) {
  let e, n, i;
  function l(r) {
    t[13](r);
  }
  let o = {
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
    imageUrl: (
      /*resolved_src*/
      t[9]
    )
  };
  return (
    /*value*/
    t[0] !== void 0 && (o.value = /*value*/
    t[0]), e = new Ms({ props: o }), Hs.push(() => Ds(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      t[14]
    ), {
      c() {
        Ts(e.$$.fragment);
      },
      m(r, a) {
        Rs(e, r, a), i = !0;
      },
      p(r, [a]) {
        const s = {};
        a & /*interactive*/
        2 && (s.interactive = /*interactive*/
        r[1]), a & /*boxesAlpha*/
        4 && (s.boxAlpha = /*boxesAlpha*/
        r[2]), a & /*labelList*/
        8 && (s.choices = /*labelList*/
        r[3]), a & /*labelColors*/
        16 && (s.choicesColors = /*labelColors*/
        r[4]), a & /*boxMinSize*/
        32 && (s.boxMinSize = /*boxMinSize*/
        r[5]), a & /*handleSize*/
        64 && (s.handleSize = /*handleSize*/
        r[6]), a & /*boxThickness*/
        128 && (s.boxThickness = /*boxThickness*/
        r[7]), a & /*boxSelectedThickness*/
        256 && (s.boxSelectedThickness = /*boxSelectedThickness*/
        r[8]), a & /*resolved_src*/
        512 && (s.imageUrl = /*resolved_src*/
        r[9]), !n && a & /*value*/
        1 && (n = !0, s.value = /*value*/
        r[0], As(() => n = !1)), e.$set(s);
      },
      i(r) {
        i || (Ys(e.$$.fragment, r), i = !0);
      },
      o(r) {
        Bs(e.$$.fragment, r), i = !1;
      },
      d(r) {
        qs(e, r);
      }
    }
  );
}
function js(t, e, n) {
  let { src: i = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: r } = e, { labelColors: a } = e, { boxMinSize: s } = e, { handleSize: c } = e, { boxThickness: f } = e, { boxSelectedThickness: _ } = e, { value: g } = e, h, m;
  const b = Os();
  function d(w) {
    g = w, n(0, g);
  }
  const u = () => b("change");
  return t.$$set = (w) => {
    "src" in w && n(11, i = w.src), "interactive" in w && n(1, l = w.interactive), "boxesAlpha" in w && n(2, o = w.boxesAlpha), "labelList" in w && n(3, r = w.labelList), "labelColors" in w && n(4, a = w.labelColors), "boxMinSize" in w && n(5, s = w.boxMinSize), "handleSize" in w && n(6, c = w.handleSize), "boxThickness" in w && n(7, f = w.boxThickness), "boxSelectedThickness" in w && n(8, _ = w.boxSelectedThickness), "value" in w && n(0, g = w.value);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*src, latest_src*/
    6144) {
      n(9, h = i), n(12, m = i);
      const w = i;
      Rt(w).then((p) => {
        m === w && n(9, h = p);
      });
    }
  }, [
    g,
    l,
    o,
    r,
    a,
    s,
    c,
    f,
    _,
    h,
    b,
    i,
    m,
    d,
    u
  ];
}
class Us extends Es {
  constructor(e) {
    super(), Ls(this, e, js, Is, Xs, {
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
  toggle_class: J,
  transition_in: Fe,
  transition_out: kn
} = window.__gradio__svelte__internal;
function tt(t) {
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
      const o = {};
      l & /*samples_dir, value*/
      3 && (o.src = /*samples_dir*/
      i[1] + /*value*/
      i[0].path), e.$set(o);
    },
    i(i) {
      n || (Fe(e.$$.fragment, i), n = !0);
    },
    o(i) {
      kn(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Ks(e, i);
    }
  };
}
function no(t) {
  let e, n, i = (
    /*value*/
    t[0] && tt(t)
  );
  return {
    c() {
      e = Gs("div"), i && i.c(), Ns(e, "class", "container svelte-1sgcyba"), J(
        e,
        "table",
        /*type*/
        t[2] === "table"
      ), J(
        e,
        "gallery",
        /*type*/
        t[2] === "gallery"
      ), J(
        e,
        "selected",
        /*selected*/
        t[3]
      ), J(
        e,
        "border",
        /*value*/
        t[0]
      );
    },
    m(l, o) {
      Zs(l, e, o), i && i.m(e, null), n = !0;
    },
    p(l, [o]) {
      /*value*/
      l[0] ? i ? (i.p(l, o), o & /*value*/
      1 && Fe(i, 1)) : (i = tt(l), i.c(), Fe(i, 1), i.m(e, null)) : i && (Js(), kn(i, 1, 1, () => {
        i = null;
      }), Fs()), (!n || o & /*type*/
      4) && J(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), (!n || o & /*type*/
      4) && J(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), (!n || o & /*selected*/
      8) && J(
        e,
        "selected",
        /*selected*/
        l[3]
      ), (!n || o & /*value*/
      1) && J(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    i(l) {
      n || (Fe(i), n = !0);
    },
    o(l) {
      kn(i), n = !1;
    },
    d(l) {
      l && Vs(e), i && i.d();
    }
  };
}
function to(t, e, n) {
  let { value: i } = e, { samples_dir: l } = e, { type: o } = e, { selected: r = !1 } = e;
  return t.$$set = (a) => {
    "value" in a && n(0, i = a.value), "samples_dir" in a && n(1, l = a.samples_dir), "type" in a && n(2, o = a.type), "selected" in a && n(3, r = a.selected);
  }, [i, l, o, r];
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
