const { setContext: bo, getContext: Tn } = window.__gradio__svelte__internal, qn = "WORKER_PROXY_CONTEXT_KEY";
function On() {
  return Tn(qn);
}
function In(n) {
  return n.host === window.location.host || n.host === "localhost:7860" || n.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  n.host === "lite.local";
}
function jn(n, e) {
  const t = e.toLowerCase();
  for (const [i, s] of Object.entries(n))
    if (i.toLowerCase() === t)
      return s;
}
function Un(n) {
  if (n == null)
    return !1;
  const e = new URL(n, window.location.href);
  return !(!In(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Wn(n) {
  if (n == null || !Un(n))
    return n;
  const e = On();
  if (e == null)
    return n;
  const i = new URL(n, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: i,
    headers: {},
    query_string: ""
  }).then((s) => {
    if (s.status !== 200)
      throw new Error(`Failed to get file ${i} from the Wasm worker.`);
    const o = new Blob([s.body], {
      type: jn(s.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Vn,
  append: $,
  attr: x,
  detach: Nn,
  init: Fn,
  insert: Pn,
  noop: at,
  safe_not_equal: Kn,
  set_style: ee,
  svg_element: Q
} = window.__gradio__svelte__internal;
function Gn(n) {
  let e, t, i, s, o, r, a, l, u;
  return {
    c() {
      e = Q("svg"), t = Q("rect"), i = Q("rect"), s = Q("rect"), o = Q("rect"), r = Q("line"), a = Q("line"), l = Q("line"), u = Q("line"), x(t, "x", "2"), x(t, "y", "2"), x(t, "width", "5"), x(t, "height", "5"), x(t, "rx", "1"), x(t, "ry", "1"), x(t, "stroke-width", "2"), x(t, "fill", "none"), x(i, "x", "17"), x(i, "y", "2"), x(i, "width", "5"), x(i, "height", "5"), x(i, "rx", "1"), x(i, "ry", "1"), x(i, "stroke-width", "2"), x(i, "fill", "none"), x(s, "x", "2"), x(s, "y", "17"), x(s, "width", "5"), x(s, "height", "5"), x(s, "rx", "1"), x(s, "ry", "1"), x(s, "stroke-width", "2"), x(s, "fill", "none"), x(o, "x", "17"), x(o, "y", "17"), x(o, "width", "5"), x(o, "height", "5"), x(o, "rx", "1"), x(o, "ry", "1"), x(o, "stroke-width", "2"), x(o, "fill", "none"), x(r, "x1", "7.5"), x(r, "y1", "4.5"), x(r, "x2", "16"), x(r, "y2", "4.5"), ee(r, "stroke-width", "2px"), x(a, "x1", "7.5"), x(a, "y1", "19.5"), x(a, "x2", "16"), x(a, "y2", "19.5"), ee(a, "stroke-width", "2px"), x(l, "x1", "4.5"), x(l, "y1", "8"), x(l, "x2", "4.5"), x(l, "y2", "16"), ee(l, "stroke-width", "2px"), x(u, "x1", "19.5"), x(u, "y1", "8"), x(u, "x2", "19.5"), x(u, "y2", "16"), ee(u, "stroke-width", "2px"), x(e, "width", "100%"), x(e, "height", "100%"), x(e, "viewBox", "0 0 24 24"), x(e, "version", "1.1"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), x(e, "xml:space", "preserve"), x(e, "stroke", "currentColor"), ee(e, "fill-rule", "evenodd"), ee(e, "clip-rule", "evenodd"), ee(e, "stroke-linecap", "round"), ee(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      Pn(c, e, f), $(e, t), $(e, i), $(e, s), $(e, o), $(e, r), $(e, a), $(e, l), $(e, u);
    },
    p: at,
    i: at,
    o: at,
    d(c) {
      c && Nn(e);
    }
  };
}
class Jn extends Vn {
  constructor(e) {
    super(), Fn(this, e, null, Gn, Kn, {});
  }
}
const {
  SvelteComponent: Zn,
  append: Qn,
  attr: F,
  detach: $n,
  init: ei,
  insert: ti,
  noop: rt,
  safe_not_equal: ni,
  set_style: je,
  svg_element: Xt
} = window.__gradio__svelte__internal;
function ii(n) {
  let e, t;
  return {
    c() {
      e = Xt("svg"), t = Xt("path"), F(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), F(t, "fill", "none"), F(t, "stroke-width", "2"), F(e, "width", "100%"), F(e, "height", "100%"), F(e, "viewBox", "0 0 24 24"), F(e, "version", "1.1"), F(e, "xmlns", "http://www.w3.org/2000/svg"), F(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), F(e, "xml:space", "preserve"), F(e, "stroke", "currentColor"), je(e, "fill-rule", "evenodd"), je(e, "clip-rule", "evenodd"), je(e, "stroke-linecap", "round"), je(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      ti(i, e, s), Qn(e, t);
    },
    p: rt,
    i: rt,
    o: rt,
    d(i) {
      i && $n(e);
    }
  };
}
class si extends Zn {
  constructor(e) {
    super(), ei(this, e, null, ii, ni, {});
  }
}
const {
  SvelteComponent: li,
  append: oi,
  attr: P,
  detach: ai,
  init: ri,
  insert: fi,
  noop: ft,
  safe_not_equal: ci,
  set_style: Ue,
  svg_element: Yt
} = window.__gradio__svelte__internal;
function ui(n) {
  let e, t;
  return {
    c() {
      e = Yt("svg"), t = Yt("path"), P(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), P(t, "fill", "none"), P(t, "stroke-width", "2"), P(e, "width", "100%"), P(e, "height", "100%"), P(e, "viewBox", "0 0 24 24"), P(e, "version", "1.1"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), P(e, "xml:space", "preserve"), P(e, "stroke", "currentColor"), Ue(e, "fill-rule", "evenodd"), Ue(e, "clip-rule", "evenodd"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      fi(i, e, s), oi(e, t);
    },
    p: ft,
    i: ft,
    o: ft,
    d(i) {
      i && ai(e);
    }
  };
}
class hi extends li {
  constructor(e) {
    super(), ri(this, e, null, ui, ci, {});
  }
}
const {
  SvelteComponent: mi,
  attr: _i,
  create_slot: di,
  detach: bi,
  element: gi,
  get_all_dirty_from_scope: wi,
  get_slot_changes: yi,
  init: vi,
  insert: ki,
  safe_not_equal: pi,
  transition_in: xi,
  transition_out: Ci,
  update_slot_base: Si
} = window.__gradio__svelte__internal;
function zi(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), s = di(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = gi("div"), s && s.c(), _i(e, "class", "svelte-1hnfib2");
    },
    m(o, r) {
      ki(o, e, r), s && s.m(e, null), t = !0;
    },
    p(o, [r]) {
      s && s.p && (!t || r & /*$$scope*/
      1) && Si(
        s,
        i,
        o,
        /*$$scope*/
        o[0],
        t ? yi(
          i,
          /*$$scope*/
          o[0],
          r,
          null
        ) : wi(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (xi(s, o), t = !0);
    },
    o(o) {
      Ci(s, o), t = !1;
    },
    d(o) {
      o && bi(e), s && s.d(o);
    }
  };
}
function Ei(n, e, t) {
  let { $$slots: i = {}, $$scope: s } = e;
  return n.$$set = (o) => {
    "$$scope" in o && t(0, s = o.$$scope);
  }, [s, i];
}
class Bi extends mi {
  constructor(e) {
    super(), vi(this, e, Ei, zi, pi, {});
  }
}
const {
  SvelteComponent: Ai,
  attr: Dt,
  check_outros: Mi,
  create_component: Ri,
  create_slot: Hi,
  destroy_component: Xi,
  detach: Pe,
  element: Yi,
  empty: Di,
  get_all_dirty_from_scope: Li,
  get_slot_changes: Ti,
  group_outros: qi,
  init: Oi,
  insert: Ke,
  mount_component: Ii,
  safe_not_equal: ji,
  set_data: Ui,
  space: Wi,
  text: Vi,
  toggle_class: ue,
  transition_in: ke,
  transition_out: Ge,
  update_slot_base: Ni
} = window.__gradio__svelte__internal;
function Lt(n) {
  let e, t;
  return e = new Bi({
    props: {
      $$slots: { default: [Fi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ri(e.$$.fragment);
    },
    m(i, s) {
      Ii(e, i, s), t = !0;
    },
    p(i, s) {
      const o = {};
      s & /*$$scope, info*/
      10 && (o.$$scope = { dirty: s, ctx: i }), e.$set(o);
    },
    i(i) {
      t || (ke(e.$$.fragment, i), t = !0);
    },
    o(i) {
      Ge(e.$$.fragment, i), t = !1;
    },
    d(i) {
      Xi(e, i);
    }
  };
}
function Fi(n) {
  let e;
  return {
    c() {
      e = Vi(
        /*info*/
        n[1]
      );
    },
    m(t, i) {
      Ke(t, e, i);
    },
    p(t, i) {
      i & /*info*/
      2 && Ui(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Pe(e);
    }
  };
}
function Pi(n) {
  let e, t, i, s;
  const o = (
    /*#slots*/
    n[2].default
  ), r = Hi(
    o,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let a = (
    /*info*/
    n[1] && Lt(n)
  );
  return {
    c() {
      e = Yi("span"), r && r.c(), t = Wi(), a && a.c(), i = Di(), Dt(e, "data-testid", "block-info"), Dt(e, "class", "svelte-22c38v"), ue(e, "sr-only", !/*show_label*/
      n[0]), ue(e, "hide", !/*show_label*/
      n[0]), ue(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(l, u) {
      Ke(l, e, u), r && r.m(e, null), Ke(l, t, u), a && a.m(l, u), Ke(l, i, u), s = !0;
    },
    p(l, [u]) {
      r && r.p && (!s || u & /*$$scope*/
      8) && Ni(
        r,
        o,
        l,
        /*$$scope*/
        l[3],
        s ? Ti(
          o,
          /*$$scope*/
          l[3],
          u,
          null
        ) : Li(
          /*$$scope*/
          l[3]
        ),
        null
      ), (!s || u & /*show_label*/
      1) && ue(e, "sr-only", !/*show_label*/
      l[0]), (!s || u & /*show_label*/
      1) && ue(e, "hide", !/*show_label*/
      l[0]), (!s || u & /*info*/
      2) && ue(
        e,
        "has-info",
        /*info*/
        l[1] != null
      ), /*info*/
      l[1] ? a ? (a.p(l, u), u & /*info*/
      2 && ke(a, 1)) : (a = Lt(l), a.c(), ke(a, 1), a.m(i.parentNode, i)) : a && (qi(), Ge(a, 1, 1, () => {
        a = null;
      }), Mi());
    },
    i(l) {
      s || (ke(r, l), ke(a), s = !0);
    },
    o(l) {
      Ge(r, l), Ge(a), s = !1;
    },
    d(l) {
      l && (Pe(e), Pe(t), Pe(i)), r && r.d(l), a && a.d(l);
    }
  };
}
function Ki(n, e, t) {
  let { $$slots: i = {}, $$scope: s } = e, { show_label: o = !0 } = e, { info: r = void 0 } = e;
  return n.$$set = (a) => {
    "show_label" in a && t(0, o = a.show_label), "info" in a && t(1, r = a.info), "$$scope" in a && t(3, s = a.$$scope);
  }, [o, r, i, s];
}
class un extends Ai {
  constructor(e) {
    super(), Oi(this, e, Ki, Pi, ji, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Gi,
  append: Ji,
  attr: he,
  detach: Zi,
  init: Qi,
  insert: $i,
  noop: ct,
  safe_not_equal: es,
  svg_element: Tt
} = window.__gradio__svelte__internal;
function ts(n) {
  let e, t;
  return {
    c() {
      e = Tt("svg"), t = Tt("path"), he(t, "d", "M5 8l4 4 4-4z"), he(e, "class", "dropdown-arrow svelte-145leq6"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 18 18");
    },
    m(i, s) {
      $i(i, e, s), Ji(e, t);
    },
    p: ct,
    i: ct,
    o: ct,
    d(i) {
      i && Zi(e);
    }
  };
}
class ns extends Gi {
  constructor(e) {
    super(), Qi(this, e, null, ts, es, {});
  }
}
const is = [
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
], qt = {
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
is.reduce(
  (n, { color: e, primary: t, secondary: i }) => ({
    ...n,
    [e]: {
      primary: qt[e][t],
      secondary: qt[e][i]
    }
  }),
  {}
);
const {
  SvelteComponent: ss,
  append: Ot,
  attr: ut,
  bubble: It,
  create_component: ls,
  destroy_component: os,
  detach: hn,
  element: jt,
  init: as,
  insert: mn,
  listen: ht,
  mount_component: rs,
  run_all: fs,
  safe_not_equal: cs,
  set_data: us,
  set_input_value: Ut,
  space: hs,
  text: ms,
  transition_in: _s,
  transition_out: ds
} = window.__gradio__svelte__internal, { createEventDispatcher: bs, afterUpdate: gs } = window.__gradio__svelte__internal;
function ws(n) {
  let e;
  return {
    c() {
      e = ms(
        /*label*/
        n[1]
      );
    },
    m(t, i) {
      mn(t, e, i);
    },
    p(t, i) {
      i & /*label*/
      2 && us(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && hn(e);
    }
  };
}
function ys(n) {
  let e, t, i, s, o, r, a;
  return t = new un({
    props: {
      show_label: (
        /*show_label*/
        n[4]
      ),
      info: (
        /*info*/
        n[2]
      ),
      $$slots: { default: [ws] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = jt("label"), ls(t.$$.fragment), i = hs(), s = jt("input"), ut(s, "type", "color"), s.disabled = /*disabled*/
      n[3], ut(s, "class", "svelte-16l8u73"), ut(e, "class", "block");
    },
    m(l, u) {
      mn(l, e, u), rs(t, e, null), Ot(e, i), Ot(e, s), Ut(
        s,
        /*value*/
        n[0]
      ), o = !0, r || (a = [
        ht(
          s,
          "input",
          /*input_input_handler*/
          n[8]
        ),
        ht(
          s,
          "focus",
          /*focus_handler*/
          n[6]
        ),
        ht(
          s,
          "blur",
          /*blur_handler*/
          n[7]
        )
      ], r = !0);
    },
    p(l, [u]) {
      const c = {};
      u & /*show_label*/
      16 && (c.show_label = /*show_label*/
      l[4]), u & /*info*/
      4 && (c.info = /*info*/
      l[2]), u & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: u, ctx: l }), t.$set(c), (!o || u & /*disabled*/
      8) && (s.disabled = /*disabled*/
      l[3]), u & /*value*/
      1 && Ut(
        s,
        /*value*/
        l[0]
      );
    },
    i(l) {
      o || (_s(t.$$.fragment, l), o = !0);
    },
    o(l) {
      ds(t.$$.fragment, l), o = !1;
    },
    d(l) {
      l && hn(e), os(t), r = !1, fs(a);
    }
  };
}
function vs(n, e, t) {
  let { value: i = "#000000" } = e, { value_is_output: s = !1 } = e, { label: o } = e, { info: r = void 0 } = e, { disabled: a = !1 } = e, { show_label: l = !0 } = e;
  const u = bs();
  function c() {
    u("change", i), s || u("input");
  }
  gs(() => {
    t(5, s = !1);
  });
  function f(k) {
    It.call(this, n, k);
  }
  function d(k) {
    It.call(this, n, k);
  }
  function g() {
    i = this.value, t(0, i);
  }
  return n.$$set = (k) => {
    "value" in k && t(0, i = k.value), "value_is_output" in k && t(5, s = k.value_is_output), "label" in k && t(1, o = k.label), "info" in k && t(2, r = k.info), "disabled" in k && t(3, a = k.disabled), "show_label" in k && t(4, l = k.show_label);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && c();
  }, [
    i,
    o,
    r,
    a,
    l,
    s,
    f,
    d,
    g
  ];
}
class ks extends ss {
  constructor(e) {
    super(), as(this, e, vs, ys, cs, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
function Wt(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function ps(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Vt(n, { delay: e = 0, duration: t = 400, easing: i = ps, x: s = 0, y: o = 0, opacity: r = 0 } = {}) {
  const a = getComputedStyle(n), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - r), [f, d] = Wt(s), [g, k] = Wt(o);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (y, m) => `
			transform: ${u} translate(${(1 - y) * f}${d}, ${(1 - y) * g}${k});
			opacity: ${l - c * m}`
  };
}
const {
  SvelteComponent: xs,
  append: _n,
  attr: R,
  bubble: Cs,
  check_outros: Ss,
  create_slot: dn,
  detach: De,
  element: it,
  empty: zs,
  get_all_dirty_from_scope: bn,
  get_slot_changes: gn,
  group_outros: Es,
  init: Bs,
  insert: Le,
  listen: As,
  safe_not_equal: Ms,
  set_style: T,
  space: wn,
  src_url_equal: $e,
  toggle_class: we,
  transition_in: et,
  transition_out: tt,
  update_slot_base: yn
} = window.__gradio__svelte__internal;
function Rs(n) {
  let e, t, i, s, o, r, a = (
    /*icon*/
    n[7] && Nt(n)
  );
  const l = (
    /*#slots*/
    n[12].default
  ), u = dn(
    l,
    n,
    /*$$scope*/
    n[11],
    null
  );
  return {
    c() {
      e = it("button"), a && a.c(), t = wn(), u && u.c(), R(e, "class", i = /*size*/
      n[4] + " " + /*variant*/
      n[3] + " " + /*elem_classes*/
      n[1].join(" ") + " svelte-8huxfn"), R(
        e,
        "id",
        /*elem_id*/
        n[0]
      ), e.disabled = /*disabled*/
      n[8], we(e, "hidden", !/*visible*/
      n[2]), T(
        e,
        "flex-grow",
        /*scale*/
        n[9]
      ), T(
        e,
        "width",
        /*scale*/
        n[9] === 0 ? "fit-content" : null
      ), T(e, "min-width", typeof /*min_width*/
      n[10] == "number" ? `calc(min(${/*min_width*/
      n[10]}px, 100%))` : null);
    },
    m(c, f) {
      Le(c, e, f), a && a.m(e, null), _n(e, t), u && u.m(e, null), s = !0, o || (r = As(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? a ? a.p(c, f) : (a = Nt(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), u && u.p && (!s || f & /*$$scope*/
      2048) && yn(
        u,
        l,
        c,
        /*$$scope*/
        c[11],
        s ? gn(
          l,
          /*$$scope*/
          c[11],
          f,
          null
        ) : bn(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!s || f & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && R(e, "class", i), (!s || f & /*elem_id*/
      1) && R(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!s || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!s || f & /*size, variant, elem_classes, visible*/
      30) && we(e, "hidden", !/*visible*/
      c[2]), f & /*scale*/
      512 && T(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), f & /*scale*/
      512 && T(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && T(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      s || (et(u, c), s = !0);
    },
    o(c) {
      tt(u, c), s = !1;
    },
    d(c) {
      c && De(e), a && a.d(), u && u.d(c), o = !1, r();
    }
  };
}
function Hs(n) {
  let e, t, i, s, o = (
    /*icon*/
    n[7] && Ft(n)
  );
  const r = (
    /*#slots*/
    n[12].default
  ), a = dn(
    r,
    n,
    /*$$scope*/
    n[11],
    null
  );
  return {
    c() {
      e = it("a"), o && o.c(), t = wn(), a && a.c(), R(
        e,
        "href",
        /*link*/
        n[6]
      ), R(e, "rel", "noopener noreferrer"), R(
        e,
        "aria-disabled",
        /*disabled*/
        n[8]
      ), R(e, "class", i = /*size*/
      n[4] + " " + /*variant*/
      n[3] + " " + /*elem_classes*/
      n[1].join(" ") + " svelte-8huxfn"), R(
        e,
        "id",
        /*elem_id*/
        n[0]
      ), we(e, "hidden", !/*visible*/
      n[2]), we(
        e,
        "disabled",
        /*disabled*/
        n[8]
      ), T(
        e,
        "flex-grow",
        /*scale*/
        n[9]
      ), T(
        e,
        "pointer-events",
        /*disabled*/
        n[8] ? "none" : null
      ), T(
        e,
        "width",
        /*scale*/
        n[9] === 0 ? "fit-content" : null
      ), T(e, "min-width", typeof /*min_width*/
      n[10] == "number" ? `calc(min(${/*min_width*/
      n[10]}px, 100%))` : null);
    },
    m(l, u) {
      Le(l, e, u), o && o.m(e, null), _n(e, t), a && a.m(e, null), s = !0;
    },
    p(l, u) {
      /*icon*/
      l[7] ? o ? o.p(l, u) : (o = Ft(l), o.c(), o.m(e, t)) : o && (o.d(1), o = null), a && a.p && (!s || u & /*$$scope*/
      2048) && yn(
        a,
        r,
        l,
        /*$$scope*/
        l[11],
        s ? gn(
          r,
          /*$$scope*/
          l[11],
          u,
          null
        ) : bn(
          /*$$scope*/
          l[11]
        ),
        null
      ), (!s || u & /*link*/
      64) && R(
        e,
        "href",
        /*link*/
        l[6]
      ), (!s || u & /*disabled*/
      256) && R(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), (!s || u & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn")) && R(e, "class", i), (!s || u & /*elem_id*/
      1) && R(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), (!s || u & /*size, variant, elem_classes, visible*/
      30) && we(e, "hidden", !/*visible*/
      l[2]), (!s || u & /*size, variant, elem_classes, disabled*/
      282) && we(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), u & /*scale*/
      512 && T(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), u & /*disabled*/
      256 && T(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), u & /*scale*/
      512 && T(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && T(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    i(l) {
      s || (et(a, l), s = !0);
    },
    o(l) {
      tt(a, l), s = !1;
    },
    d(l) {
      l && De(e), o && o.d(), a && a.d(l);
    }
  };
}
function Nt(n) {
  let e, t, i;
  return {
    c() {
      e = it("img"), R(e, "class", "button-icon svelte-8huxfn"), $e(e.src, t = /*icon*/
      n[7].url) || R(e, "src", t), R(e, "alt", i = `${/*value*/
      n[5]} icon`);
    },
    m(s, o) {
      Le(s, e, o);
    },
    p(s, o) {
      o & /*icon*/
      128 && !$e(e.src, t = /*icon*/
      s[7].url) && R(e, "src", t), o & /*value*/
      32 && i !== (i = `${/*value*/
      s[5]} icon`) && R(e, "alt", i);
    },
    d(s) {
      s && De(e);
    }
  };
}
function Ft(n) {
  let e, t, i;
  return {
    c() {
      e = it("img"), R(e, "class", "button-icon svelte-8huxfn"), $e(e.src, t = /*icon*/
      n[7].url) || R(e, "src", t), R(e, "alt", i = `${/*value*/
      n[5]} icon`);
    },
    m(s, o) {
      Le(s, e, o);
    },
    p(s, o) {
      o & /*icon*/
      128 && !$e(e.src, t = /*icon*/
      s[7].url) && R(e, "src", t), o & /*value*/
      32 && i !== (i = `${/*value*/
      s[5]} icon`) && R(e, "alt", i);
    },
    d(s) {
      s && De(e);
    }
  };
}
function Xs(n) {
  let e, t, i, s;
  const o = [Hs, Rs], r = [];
  function a(l, u) {
    return (
      /*link*/
      l[6] && /*link*/
      l[6].length > 0 ? 0 : 1
    );
  }
  return e = a(n), t = r[e] = o[e](n), {
    c() {
      t.c(), i = zs();
    },
    m(l, u) {
      r[e].m(l, u), Le(l, i, u), s = !0;
    },
    p(l, [u]) {
      let c = e;
      e = a(l), e === c ? r[e].p(l, u) : (Es(), tt(r[c], 1, 1, () => {
        r[c] = null;
      }), Ss(), t = r[e], t ? t.p(l, u) : (t = r[e] = o[e](l), t.c()), et(t, 1), t.m(i.parentNode, i));
    },
    i(l) {
      s || (et(t), s = !0);
    },
    o(l) {
      tt(t), s = !1;
    },
    d(l) {
      l && De(i), r[e].d(l);
    }
  };
}
function Ys(n, e, t) {
  let { $$slots: i = {}, $$scope: s } = e, { elem_id: o = "" } = e, { elem_classes: r = [] } = e, { visible: a = !0 } = e, { variant: l = "secondary" } = e, { size: u = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: d = null } = e, { disabled: g = !1 } = e, { scale: k = null } = e, { min_width: y = void 0 } = e;
  function m(_) {
    Cs.call(this, n, _);
  }
  return n.$$set = (_) => {
    "elem_id" in _ && t(0, o = _.elem_id), "elem_classes" in _ && t(1, r = _.elem_classes), "visible" in _ && t(2, a = _.visible), "variant" in _ && t(3, l = _.variant), "size" in _ && t(4, u = _.size), "value" in _ && t(5, c = _.value), "link" in _ && t(6, f = _.link), "icon" in _ && t(7, d = _.icon), "disabled" in _ && t(8, g = _.disabled), "scale" in _ && t(9, k = _.scale), "min_width" in _ && t(10, y = _.min_width), "$$scope" in _ && t(11, s = _.$$scope);
  }, [
    o,
    r,
    a,
    l,
    u,
    c,
    f,
    d,
    g,
    k,
    y,
    s,
    i,
    m
  ];
}
class wt extends xs {
  constructor(e) {
    super(), Bs(this, e, Ys, Xs, Ms, {
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
  SvelteComponent: Ds,
  add_render_callback: vn,
  append: We,
  attr: O,
  binding_callbacks: Pt,
  check_outros: Ls,
  create_bidirectional_transition: Kt,
  destroy_each: Ts,
  detach: Be,
  element: nt,
  empty: qs,
  ensure_array_like: Gt,
  group_outros: Os,
  init: Is,
  insert: Ae,
  listen: yt,
  prevent_default: js,
  run_all: Us,
  safe_not_equal: Ws,
  set_data: Vs,
  set_style: me,
  space: vt,
  text: Ns,
  toggle_class: K,
  transition_in: mt,
  transition_out: Jt
} = window.__gradio__svelte__internal, { createEventDispatcher: Fs } = window.__gradio__svelte__internal;
function Zt(n, e, t) {
  const i = n.slice();
  return i[26] = e[t], i;
}
function Qt(n) {
  let e, t, i, s, o, r = Gt(
    /*filtered_indices*/
    n[1]
  ), a = [];
  for (let l = 0; l < r.length; l += 1)
    a[l] = $t(Zt(n, r, l));
  return {
    c() {
      e = nt("ul");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      O(e, "class", "options svelte-yuohum"), O(e, "role", "listbox"), me(
        e,
        "bottom",
        /*bottom*/
        n[9]
      ), me(e, "max-height", `calc(${/*max_height*/
      n[10]}px - var(--window-padding))`), me(
        e,
        "width",
        /*input_width*/
        n[8] + "px"
      );
    },
    m(l, u) {
      Ae(l, e, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(e, null);
      n[22](e), i = !0, s || (o = yt(e, "mousedown", js(
        /*mousedown_handler*/
        n[21]
      )), s = !0);
    },
    p(l, u) {
      if (u & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        r = Gt(
          /*filtered_indices*/
          l[1]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = Zt(l, r, c);
          a[c] ? a[c].p(f, u) : (a[c] = $t(f), a[c].c(), a[c].m(e, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = r.length;
      }
      u & /*bottom*/
      512 && me(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), u & /*max_height*/
      1024 && me(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), u & /*input_width*/
      256 && me(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    i(l) {
      i || (l && vn(() => {
        i && (t || (t = Kt(e, Vt, { duration: 200, y: 5 }, !0)), t.run(1));
      }), i = !0);
    },
    o(l) {
      l && (t || (t = Kt(e, Vt, { duration: 200, y: 5 }, !1)), t.run(0)), i = !1;
    },
    d(l) {
      l && Be(e), Ts(a, l), n[22](null), l && t && t.end(), s = !1, o();
    }
  };
}
function $t(n) {
  let e, t, i, s = (
    /*choices*/
    n[0][
      /*index*/
      n[26]
    ][0] + ""
  ), o, r, a, l, u;
  return {
    c() {
      e = nt("li"), t = nt("span"), t.textContent = "✓", i = vt(), o = Ns(s), r = vt(), O(t, "class", "inner-item svelte-yuohum"), K(t, "hide", !/*selected_indices*/
      n[4].includes(
        /*index*/
        n[26]
      )), O(e, "class", "item svelte-yuohum"), O(e, "data-index", a = /*index*/
      n[26]), O(e, "aria-label", l = /*choices*/
      n[0][
        /*index*/
        n[26]
      ][0]), O(e, "data-testid", "dropdown-option"), O(e, "role", "option"), O(e, "aria-selected", u = /*selected_indices*/
      n[4].includes(
        /*index*/
        n[26]
      )), K(
        e,
        "selected",
        /*selected_indices*/
        n[4].includes(
          /*index*/
          n[26]
        )
      ), K(
        e,
        "active",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      ), K(
        e,
        "bg-gray-100",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      ), K(
        e,
        "dark:bg-gray-600",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      );
    },
    m(c, f) {
      Ae(c, e, f), We(e, t), We(e, i), We(e, o), We(e, r);
    },
    p(c, f) {
      f & /*selected_indices, filtered_indices*/
      18 && K(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), f & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Vs(o, s), f & /*filtered_indices*/
      2 && a !== (a = /*index*/
      c[26]) && O(e, "data-index", a), f & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && O(e, "aria-label", l), f & /*selected_indices, filtered_indices*/
      18 && u !== (u = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && O(e, "aria-selected", u), f & /*selected_indices, filtered_indices*/
      18 && K(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && K(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && K(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && K(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && Be(e);
    }
  };
}
function Ps(n) {
  let e, t, i, s, o;
  vn(
    /*onwindowresize*/
    n[19]
  );
  let r = (
    /*show_options*/
    n[2] && !/*disabled*/
    n[3] && Qt(n)
  );
  return {
    c() {
      e = nt("div"), t = vt(), r && r.c(), i = qs(), O(e, "class", "reference");
    },
    m(a, l) {
      Ae(a, e, l), n[20](e), Ae(a, t, l), r && r.m(a, l), Ae(a, i, l), s || (o = [
        yt(
          window,
          "scroll",
          /*scroll_listener*/
          n[12]
        ),
        yt(
          window,
          "resize",
          /*onwindowresize*/
          n[19]
        )
      ], s = !0);
    },
    p(a, [l]) {
      /*show_options*/
      a[2] && !/*disabled*/
      a[3] ? r ? (r.p(a, l), l & /*show_options, disabled*/
      12 && mt(r, 1)) : (r = Qt(a), r.c(), mt(r, 1), r.m(i.parentNode, i)) : r && (Os(), Jt(r, 1, 1, () => {
        r = null;
      }), Ls());
    },
    i(a) {
      mt(r);
    },
    o(a) {
      Jt(r);
    },
    d(a) {
      a && (Be(e), Be(t), Be(i)), n[20](null), r && r.d(a), s = !1, Us(o);
    }
  };
}
function Ks(n, e, t) {
  var i, s;
  let { choices: o } = e, { filtered_indices: r } = e, { show_options: a = !1 } = e, { disabled: l = !1 } = e, { selected_indices: u = [] } = e, { active_index: c = null } = e, f, d, g, k, y, m, _, v, h;
  function b() {
    const { top: z, bottom: Z } = y.getBoundingClientRect();
    t(16, f = z), t(17, d = h - Z);
  }
  let p = null;
  function A() {
    a && (p !== null && clearTimeout(p), p = setTimeout(
      () => {
        b(), p = null;
      },
      10
    ));
  }
  const B = Fs();
  function C() {
    t(11, h = window.innerHeight);
  }
  function M(z) {
    Pt[z ? "unshift" : "push"](() => {
      y = z, t(6, y);
    });
  }
  const D = (z) => B("change", z);
  function V(z) {
    Pt[z ? "unshift" : "push"](() => {
      m = z, t(7, m);
    });
  }
  return n.$$set = (z) => {
    "choices" in z && t(0, o = z.choices), "filtered_indices" in z && t(1, r = z.filtered_indices), "show_options" in z && t(2, a = z.show_options), "disabled" in z && t(3, l = z.disabled), "selected_indices" in z && t(4, u = z.selected_indices), "active_index" in z && t(5, c = z.active_index);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (a && y) {
        if (m && u.length > 0) {
          let Z = m.querySelectorAll("li");
          for (const N of Array.from(Z))
            if (N.getAttribute("data-index") === u[0].toString()) {
              t(14, i = m == null ? void 0 : m.scrollTo) === null || i === void 0 || i.call(m, 0, N.offsetTop);
              break;
            }
        }
        b();
        const z = t(15, s = y.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, g = (z == null ? void 0 : z.height) || 0), t(8, k = (z == null ? void 0 : z.width) || 0);
      }
      d > f ? (t(10, v = d), t(9, _ = null)) : (t(9, _ = `${d + g}px`), t(10, v = f - g));
    }
  }, [
    o,
    r,
    a,
    l,
    u,
    c,
    y,
    m,
    k,
    _,
    v,
    h,
    A,
    B,
    i,
    s,
    f,
    d,
    g,
    C,
    M,
    D,
    V
  ];
}
class Gs extends Ds {
  constructor(e) {
    super(), Is(this, e, Ks, Ps, Ws, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Js(n, e) {
  return (n % e + e) % e;
}
function en(n, e) {
  return n.reduce((t, i, s) => ((!e || i[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function Zs(n, e, t) {
  n("change", e), t || n("input");
}
function Qs(n, e, t) {
  if (n.key === "Escape")
    return [!1, e];
  if ((n.key === "ArrowDown" || n.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = n.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const i = t.indexOf(e), s = n.key === "ArrowUp" ? -1 : 1;
      e = t[Js(i + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: $s,
  append: oe,
  attr: q,
  binding_callbacks: el,
  check_outros: tl,
  create_component: kt,
  destroy_component: pt,
  detach: St,
  element: be,
  group_outros: nl,
  init: il,
  insert: zt,
  listen: ve,
  mount_component: xt,
  run_all: sl,
  safe_not_equal: ll,
  set_data: ol,
  set_input_value: tn,
  space: _t,
  text: al,
  toggle_class: _e,
  transition_in: ge,
  transition_out: pe
} = window.__gradio__svelte__internal, { onMount: rl } = window.__gradio__svelte__internal, { createEventDispatcher: fl, afterUpdate: cl } = window.__gradio__svelte__internal;
function ul(n) {
  let e;
  return {
    c() {
      e = al(
        /*label*/
        n[0]
      );
    },
    m(t, i) {
      zt(t, e, i);
    },
    p(t, i) {
      i[0] & /*label*/
      1 && ol(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && St(e);
    }
  };
}
function nn(n) {
  let e, t, i;
  return t = new ns({}), {
    c() {
      e = be("div"), kt(t.$$.fragment), q(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(s, o) {
      zt(s, e, o), xt(t, e, null), i = !0;
    },
    i(s) {
      i || (ge(t.$$.fragment, s), i = !0);
    },
    o(s) {
      pe(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && St(e), pt(t);
    }
  };
}
function hl(n) {
  let e, t, i, s, o, r, a, l, u, c, f, d, g, k;
  t = new un({
    props: {
      show_label: (
        /*show_label*/
        n[4]
      ),
      info: (
        /*info*/
        n[1]
      ),
      $$slots: { default: [ul] },
      $$scope: { ctx: n }
    }
  });
  let y = !/*disabled*/
  n[3] && nn();
  return f = new Gs({
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
  }), f.$on(
    "change",
    /*handle_option_selected*/
    n[16]
  ), {
    c() {
      e = be("div"), kt(t.$$.fragment), i = _t(), s = be("div"), o = be("div"), r = be("div"), a = be("input"), u = _t(), y && y.c(), c = _t(), kt(f.$$.fragment), q(a, "role", "listbox"), q(a, "aria-controls", "dropdown-options"), q(
        a,
        "aria-expanded",
        /*show_options*/
        n[12]
      ), q(
        a,
        "aria-label",
        /*label*/
        n[0]
      ), q(a, "class", "border-none svelte-1m1zvyj"), a.disabled = /*disabled*/
      n[3], q(a, "autocomplete", "off"), a.readOnly = l = !/*filterable*/
      n[7], _e(a, "subdued", !/*choices_names*/
      n[13].includes(
        /*input_text*/
        n[9]
      ) && !/*allow_custom_value*/
      n[6]), q(r, "class", "secondary-wrap svelte-1m1zvyj"), q(o, "class", "wrap-inner svelte-1m1zvyj"), _e(
        o,
        "show_options",
        /*show_options*/
        n[12]
      ), q(s, "class", "wrap svelte-1m1zvyj"), q(e, "class", "svelte-1m1zvyj"), _e(
        e,
        "container",
        /*container*/
        n[5]
      );
    },
    m(m, _) {
      zt(m, e, _), xt(t, e, null), oe(e, i), oe(e, s), oe(s, o), oe(o, r), oe(r, a), tn(
        a,
        /*input_text*/
        n[9]
      ), n[29](a), oe(r, u), y && y.m(r, null), oe(s, c), xt(f, s, null), d = !0, g || (k = [
        ve(
          a,
          "input",
          /*input_input_handler*/
          n[28]
        ),
        ve(
          a,
          "keydown",
          /*handle_key_down*/
          n[19]
        ),
        ve(
          a,
          "keyup",
          /*keyup_handler*/
          n[30]
        ),
        ve(
          a,
          "blur",
          /*handle_blur*/
          n[18]
        ),
        ve(
          a,
          "focus",
          /*handle_focus*/
          n[17]
        )
      ], g = !0);
    },
    p(m, _) {
      const v = {};
      _[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      m[4]), _[0] & /*info*/
      2 && (v.info = /*info*/
      m[1]), _[0] & /*label*/
      1 | _[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: _, ctx: m }), t.$set(v), (!d || _[0] & /*show_options*/
      4096) && q(
        a,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!d || _[0] & /*label*/
      1) && q(
        a,
        "aria-label",
        /*label*/
        m[0]
      ), (!d || _[0] & /*disabled*/
      8) && (a.disabled = /*disabled*/
      m[3]), (!d || _[0] & /*filterable*/
      128 && l !== (l = !/*filterable*/
      m[7])) && (a.readOnly = l), _[0] & /*input_text*/
      512 && a.value !== /*input_text*/
      m[9] && tn(
        a,
        /*input_text*/
        m[9]
      ), (!d || _[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && _e(a, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? y && (nl(), pe(y, 1, 1, () => {
        y = null;
      }), tl()) : y ? _[0] & /*disabled*/
      8 && ge(y, 1) : (y = nn(), y.c(), ge(y, 1), y.m(r, null)), (!d || _[0] & /*show_options*/
      4096) && _e(
        o,
        "show_options",
        /*show_options*/
        m[12]
      );
      const h = {};
      _[0] & /*show_options*/
      4096 && (h.show_options = /*show_options*/
      m[12]), _[0] & /*choices*/
      4 && (h.choices = /*choices*/
      m[2]), _[0] & /*filtered_indices*/
      1024 && (h.filtered_indices = /*filtered_indices*/
      m[10]), _[0] & /*disabled*/
      8 && (h.disabled = /*disabled*/
      m[3]), _[0] & /*selected_index*/
      2048 && (h.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), _[0] & /*active_index*/
      16384 && (h.active_index = /*active_index*/
      m[14]), f.$set(h), (!d || _[0] & /*container*/
      32) && _e(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      d || (ge(t.$$.fragment, m), ge(y), ge(f.$$.fragment, m), d = !0);
    },
    o(m) {
      pe(t.$$.fragment, m), pe(y), pe(f.$$.fragment, m), d = !1;
    },
    d(m) {
      m && St(e), pt(t), n[29](null), y && y.d(), pt(f), g = !1, sl(k);
    }
  };
}
function ml(n, e, t) {
  let { label: i } = e, { info: s = void 0 } = e, { value: o = [] } = e, r = [], { value_is_output: a = !1 } = e, { choices: l } = e, u, { disabled: c = !1 } = e, { show_label: f } = e, { container: d = !0 } = e, { allow_custom_value: g = !1 } = e, { filterable: k = !0 } = e, y, m = !1, _, v, h = "", b = "", p = !1, A = [], B = null, C = null, M;
  const D = fl();
  o ? (M = l.map((S) => S[1]).indexOf(o), C = M, C === -1 ? (r = o, C = null) : ([h, r] = l[C], b = h), z()) : l.length > 0 && (M = 0, C = 0, [h, o] = l[C], r = o, b = h);
  function V() {
    t(13, _ = l.map((S) => S[0])), t(24, v = l.map((S) => S[1]));
  }
  function z() {
    V(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, h = ""), t(11, C = null)) : v.includes(o) ? (t(9, h = _[v.indexOf(o)]), t(11, C = v.indexOf(o))) : g ? (t(9, h = o), t(11, C = null)) : (t(9, h = ""), t(11, C = null)), t(27, M = C);
  }
  function Z(S) {
    if (t(11, C = parseInt(S.detail.target.dataset.index)), isNaN(C)) {
      t(11, C = null);
      return;
    }
    t(12, m = !1), t(14, B = null), y.blur();
  }
  function N(S) {
    t(10, A = l.map((Bt, Oe) => Oe)), t(12, m = !0), D("focus");
  }
  function j() {
    g ? t(20, o = h) : t(9, h = _[v.indexOf(o)]), t(12, m = !1), t(14, B = null), D("blur");
  }
  function le(S) {
    t(12, [m, B] = Qs(S, B, A), m, (t(14, B), t(2, l), t(23, u), t(6, g), t(9, h), t(10, A), t(8, y), t(25, b), t(11, C), t(27, M), t(26, p), t(24, v))), S.key === "Enter" && (B !== null ? (t(11, C = B), t(12, m = !1), y.blur(), t(14, B = null)) : _.includes(h) ? (t(11, C = _.indexOf(h)), t(12, m = !1), t(14, B = null), y.blur()) : g && (t(20, o = h), t(11, C = null), t(12, m = !1), t(14, B = null), y.blur()), D("enter", o));
  }
  cl(() => {
    t(21, a = !1), t(26, p = !0);
  }), rl(() => {
    y.focus();
  });
  function st() {
    h = this.value, t(9, h), t(11, C), t(27, M), t(26, p), t(2, l), t(24, v);
  }
  function lt(S) {
    el[S ? "unshift" : "push"](() => {
      y = S, t(8, y);
    });
  }
  const ot = (S) => D("key_up", { key: S.key, input_value: h });
  return n.$$set = (S) => {
    "label" in S && t(0, i = S.label), "info" in S && t(1, s = S.info), "value" in S && t(20, o = S.value), "value_is_output" in S && t(21, a = S.value_is_output), "choices" in S && t(2, l = S.choices), "disabled" in S && t(3, c = S.disabled), "show_label" in S && t(4, f = S.show_label), "container" in S && t(5, d = S.container), "allow_custom_value" in S && t(6, g = S.allow_custom_value), "filterable" in S && t(7, k = S.filterable);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== M && C !== null && p && (t(9, [h, o] = l[C], h, (t(20, o), t(11, C), t(27, M), t(26, p), t(2, l), t(24, v))), t(27, M = C), D("select", {
      index: C,
      value: v[C],
      selected: !0
    })), n.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != r && (z(), Zs(D, o, a), t(22, r = o)), n.$$.dirty[0] & /*choices*/
    4 && V(), n.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && l !== u && (g || z(), t(23, u = l), t(10, A = en(l, h)), !g && A.length > 0 && t(14, B = A[0]), y == document.activeElement && t(12, m = !0)), n.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && h !== b && (t(10, A = en(l, h)), t(25, b = h), !g && A.length > 0 && t(14, B = A[0]));
  }, [
    i,
    s,
    l,
    c,
    f,
    d,
    g,
    k,
    y,
    h,
    A,
    C,
    m,
    _,
    B,
    D,
    Z,
    N,
    j,
    le,
    o,
    a,
    r,
    u,
    v,
    b,
    p,
    M,
    st,
    lt,
    ot
  ];
}
class _l extends $s {
  constructor(e) {
    super(), il(
      this,
      e,
      ml,
      hl,
      ll,
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
  SvelteComponent: dl,
  append: G,
  attr: Ve,
  check_outros: bl,
  create_component: xe,
  destroy_component: Ce,
  detach: Te,
  element: ne,
  group_outros: gl,
  init: wl,
  insert: qe,
  mount_component: Se,
  safe_not_equal: yl,
  set_style: ze,
  space: Ne,
  text: Et,
  transition_in: ie,
  transition_out: ae
} = window.__gradio__svelte__internal, { createEventDispatcher: vl } = window.__gradio__svelte__internal, { onMount: kl, onDestroy: pl } = window.__gradio__svelte__internal;
function xl(n) {
  let e;
  return {
    c() {
      e = Et("Cancel");
    },
    m(t, i) {
      qe(t, e, i);
    },
    d(t) {
      t && Te(e);
    }
  };
}
function sn(n) {
  let e, t, i;
  return t = new wt({
    props: {
      variant: "stop",
      $$slots: { default: [Cl] },
      $$scope: { ctx: n }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    n[12]
  ), {
    c() {
      e = ne("div"), xe(t.$$.fragment), ze(e, "margin-right", "8px");
    },
    m(s, o) {
      qe(s, e, o), Se(t, e, null), i = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      65536 && (r.$$scope = { dirty: o, ctx: s }), t.$set(r);
    },
    i(s) {
      i || (ie(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ae(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Te(e), Ce(t);
    }
  };
}
function Cl(n) {
  let e;
  return {
    c() {
      e = Et("Remove");
    },
    m(t, i) {
      qe(t, e, i);
    },
    d(t) {
      t && Te(e);
    }
  };
}
function Sl(n) {
  let e;
  return {
    c() {
      e = Et("OK");
    },
    m(t, i) {
      qe(t, e, i);
    },
    d(t) {
      t && Te(e);
    }
  };
}
function zl(n) {
  let e, t, i, s, o, r, a, l, u, c, f, d, g, k, y, m;
  o = new _l({
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
  }), o.$on(
    "change",
    /*onDropDownChange*/
    n[5]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    n[7]
  ), l = new ks({
    props: {
      value: (
        /*currentColor*/
        n[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), l.$on(
    "change",
    /*onColorChange*/
    n[6]
  ), f = new wt({
    props: {
      $$slots: { default: [xl] },
      $$scope: { ctx: n }
    }
  }), f.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  let _ = (
    /*showRemove*/
    n[3] && sn(n)
  );
  return y = new wt({
    props: {
      variant: "primary",
      $$slots: { default: [Sl] },
      $$scope: { ctx: n }
    }
  }), y.$on(
    "click",
    /*click_handler_2*/
    n[13]
  ), {
    c() {
      e = ne("div"), t = ne("div"), i = ne("span"), s = ne("div"), xe(o.$$.fragment), r = Ne(), a = ne("div"), xe(l.$$.fragment), u = Ne(), c = ne("div"), xe(f.$$.fragment), d = Ne(), _ && _.c(), g = Ne(), k = ne("div"), xe(y.$$.fragment), ze(s, "margin-right", "10px"), ze(a, "margin-right", "40px"), ze(a, "margin-bottom", "8px"), ze(c, "margin-right", "8px"), Ve(i, "class", "model-content svelte-hkn2q1"), Ve(t, "class", "modal-container svelte-hkn2q1"), Ve(e, "class", "modal svelte-hkn2q1"), Ve(e, "id", "model-box-edit");
    },
    m(v, h) {
      qe(v, e, h), G(e, t), G(t, i), G(i, s), Se(o, s, null), G(i, r), G(i, a), Se(l, a, null), G(i, u), G(i, c), Se(f, c, null), G(i, d), _ && _.m(i, null), G(i, g), G(i, k), Se(y, k, null), m = !0;
    },
    p(v, [h]) {
      const b = {};
      h & /*currentLabel*/
      1 && (b.value = /*currentLabel*/
      v[0]), h & /*choices*/
      4 && (b.choices = /*choices*/
      v[2]), o.$set(b);
      const p = {};
      h & /*currentColor*/
      2 && (p.value = /*currentColor*/
      v[1]), l.$set(p);
      const A = {};
      h & /*$$scope*/
      65536 && (A.$$scope = { dirty: h, ctx: v }), f.$set(A), /*showRemove*/
      v[3] ? _ ? (_.p(v, h), h & /*showRemove*/
      8 && ie(_, 1)) : (_ = sn(v), _.c(), ie(_, 1), _.m(i, g)) : _ && (gl(), ae(_, 1, 1, () => {
        _ = null;
      }), bl());
      const B = {};
      h & /*$$scope*/
      65536 && (B.$$scope = { dirty: h, ctx: v }), y.$set(B);
    },
    i(v) {
      m || (ie(o.$$.fragment, v), ie(l.$$.fragment, v), ie(f.$$.fragment, v), ie(_), ie(y.$$.fragment, v), m = !0);
    },
    o(v) {
      ae(o.$$.fragment, v), ae(l.$$.fragment, v), ae(f.$$.fragment, v), ae(_), ae(y.$$.fragment, v), m = !1;
    },
    d(v) {
      v && Te(e), Ce(o), Ce(l), Ce(f), _ && _.d(), Ce(y);
    }
  };
}
function El(n, e, t) {
  let { label: i = "" } = e, { currentLabel: s = "" } = e, { choices: o = [] } = e, { choicesColors: r = [] } = e, { color: a = "" } = e, { currentColor: l = "" } = e, { showRemove: u = !0 } = e;
  const c = vl();
  function f(h) {
    c("change", {
      label: s,
      color: l,
      ret: h
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(h) {
    const { detail: b } = h;
    let p = b;
    Number.isInteger(p) ? (Array.isArray(r) && p < r.length && t(1, l = r[p]), Array.isArray(o) && p < o.length && t(0, s = o[p][0])) : t(0, s = p);
  }
  function g(h) {
    const { detail: b } = h;
    t(1, l = b);
  }
  function k(h) {
    d(h), f(1);
  }
  function y(h) {
    switch (h.key) {
      case "Enter":
        f(1);
        break;
    }
  }
  kl(() => {
    document.addEventListener("keydown", y), t(0, s = i), t(1, l = a);
  }), pl(() => {
    document.removeEventListener("keydown", y);
  });
  const m = () => f(0), _ = () => f(-1), v = () => f(1);
  return n.$$set = (h) => {
    "label" in h && t(8, i = h.label), "currentLabel" in h && t(0, s = h.currentLabel), "choices" in h && t(2, o = h.choices), "choicesColors" in h && t(9, r = h.choicesColors), "color" in h && t(10, a = h.color), "currentColor" in h && t(1, l = h.currentColor), "showRemove" in h && t(3, u = h.showRemove);
  }, [
    s,
    l,
    o,
    u,
    f,
    d,
    g,
    k,
    i,
    r,
    a,
    m,
    _,
    v
  ];
}
class kn extends dl {
  constructor(e) {
    super(), wl(this, e, El, zl, yl, {
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
const X = (n, e, t) => Math.min(Math.max(n, e), t);
function dt(n, e) {
  if (n.startsWith("rgba"))
    return n.replace(/[\d.]+$/, e.toString());
  const t = n.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [i, s, o] = t;
  return `rgba(${i}, ${s}, ${o}, ${e})`;
}
class bt {
  constructor(e, t, i, s, o, r, a, l, u, c, f, d = "rgb(255, 255, 255)", g = 0.5, k = 25, y = 8, m = 2, _ = 4, v = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (h) => {
      if (this.isDragging) {
        let b = h.clientX - this.offsetMouseX - this.xmin, p = h.clientY - this.offsetMouseY - this.ymin;
        const A = this.canvasXmax - this.canvasXmin, B = this.canvasYmax - this.canvasYmin;
        b = X(b, -this.xmin, A - this.xmax), p = X(p, -this.ymin, B - this.ymax), this.xmin += b, this.ymin += p, this.xmax += b, this.ymax += p, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleCreating = (h) => {
      if (this.isCreating) {
        let [b, p] = this.toBoxCoordinates(h.clientX, h.clientY);
        b -= this.offsetMouseX, p -= this.offsetMouseY, b > this.xmax ? (this.creatingAnchorX == "xmax" && (this.xmin = this.xmax), this.xmax = b, this.creatingAnchorX = "xmin") : b > this.xmin && b < this.xmax && this.creatingAnchorX == "xmin" ? this.xmax = b : b > this.xmin && b < this.xmax && this.creatingAnchorX == "xmax" ? this.xmin = b : b < this.xmin && (this.creatingAnchorX == "xmin" && (this.xmax = this.xmin), this.xmin = b, this.creatingAnchorX = "xmax"), p > this.ymax ? (this.creatingAnchorY == "ymax" && (this.ymin = this.ymax), this.ymax = p, this.creatingAnchorY = "ymin") : p > this.ymin && p < this.ymax && this.creatingAnchorY == "ymin" ? this.ymax = p : p > this.ymin && p < this.ymax && this.creatingAnchorY == "ymax" ? this.ymin = p : p < this.ymin && (this.creatingAnchorY == "ymin" && (this.ymax = this.ymin), this.ymin = p, this.creatingAnchorY = "ymax"), this.updateHandles(), this.renderCallBack();
      }
    }, this.stopCreating = (h) => {
      if (this.isCreating = !1, document.removeEventListener("mousemove", this.handleCreating), document.removeEventListener("mouseup", this.stopCreating), this.getArea() > 0) {
        const b = this.canvasXmax - this.canvasXmin, p = this.canvasYmax - this.canvasYmin;
        this.xmin = X(this.xmin, 0, b - this.minSize), this.ymin = X(this.ymin, 0, p - this.minSize), this.xmax = X(this.xmax, this.minSize, b), this.ymax = X(this.ymax, this.minSize, p), this.minSize > 0 && (this.getWidth() < this.minSize && (this.creatingAnchorX == "xmin" ? this.xmax = this.xmin + this.minSize : this.xmin = this.xmax - this.minSize), this.getHeight() < this.minSize && (this.creatingAnchorY == "ymin" ? this.ymax = this.ymin + this.minSize : this.ymin = this.ymax - this.minSize), this.xmax > b ? (this.xmin -= this.xmax - b, this.xmax = b) : this.xmin < 0 && (this.xmax -= this.xmin, this.xmin = 0), this.ymax > p ? (this.ymin -= this.ymax - p, this.ymax = p) : this.ymin < 0 && (this.ymax -= this.ymin, this.ymin = 0)), this.updateHandles(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (h) => {
      if (this.isResizing) {
        const b = h.clientX, p = h.clientY, A = b - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, B = p - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, C = this.canvasXmax - this.canvasXmin, M = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += A, this.ymin += B, this.xmin = X(this.xmin, 0, this.xmax - this.minSize), this.ymin = X(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += A, this.ymin += B, this.xmax = X(this.xmax, this.xmin + this.minSize, C), this.ymin = X(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += A, this.ymax += B, this.xmax = X(this.xmax, this.xmin + this.minSize, C), this.ymax = X(this.ymax, this.ymin + this.minSize, M);
            break;
          case 3:
            this.xmin += A, this.ymax += B, this.xmin = X(this.xmin, 0, this.xmax - this.minSize), this.ymax = X(this.ymax, this.ymin + this.minSize, M);
            break;
          case 4:
            this.ymin += B, this.ymin = X(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += A, this.xmax = X(this.xmax, this.xmin + this.minSize, C);
            break;
          case 6:
            this.ymax += B, this.ymax = X(this.ymax, this.ymin + this.minSize, M);
            break;
          case 7:
            this.xmin += A, this.xmin = X(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasXmin = i, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = v, this.label = a, this.isDragging = !1, this.isCreating = !1, this.xmin = l, this.ymin = u, this.xmax = c, this.ymax = f, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = y, this.thickness = m, this.selectedThickness = _, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = k, this.color = d, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    const e = this.resizeHandleSize / 2, t = this.getWidth(), i = this.getHeight();
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
        ymin: this.ymin + i / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + i / 2 + e
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
    let t, i;
    if (e.beginPath(), [t, i] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, i, this.getWidth(), this.getHeight()), e.fillStyle = dt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = dt(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const s = e.measureText(this.label).width + 10, o = 20;
      let r = this.xmin, a = this.ymin - o;
      e.fillStyle = "white", [r, a] = this.toCanvasCoordinates(r, a), e.fillRect(r, a, s, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, s, o), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
    e.fillStyle = dt(this.color, 1);
    for (const s of this.resizeHandles)
      [t, i] = this.toCanvasCoordinates(s.xmin, s.ymin), e.fillRect(
        t,
        i,
        s.xmax - s.xmin,
        s.ymax - s.ymin
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
    for (let i = 0; i < this.resizeHandles.length; i++) {
      const s = this.resizeHandles[i];
      if (e >= s.xmin && e <= s.xmax && t >= s.ymin && t <= s.ymax)
        return this.resizingHandleIndex = i, i;
    }
    return -1;
  }
  startCreating(e, t, i) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = i, document.addEventListener("mousemove", this.handleCreating), document.addEventListener("mouseup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("mousemove", this.handleResize), document.addEventListener("mouseup", this.stopResize);
  }
}
const de = [
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
  SvelteComponent: Bl,
  append: Ee,
  attr: J,
  binding_callbacks: Al,
  bubble: ln,
  check_outros: Je,
  create_component: Re,
  destroy_component: He,
  detach: re,
  element: ye,
  empty: Ml,
  group_outros: Ze,
  init: Rl,
  insert: fe,
  listen: se,
  mount_component: Xe,
  noop: Hl,
  run_all: pn,
  safe_not_equal: Xl,
  space: Me,
  toggle_class: Fe,
  transition_in: Y,
  transition_out: I
} = window.__gradio__svelte__internal, { onMount: Yl, onDestroy: Dl, createEventDispatcher: Ll } = window.__gradio__svelte__internal;
function on(n) {
  let e, t, i, s, o, r, a, l, u, c;
  i = new Jn({}), r = new si({});
  let f = (
    /*showRemoveButton*/
    n[1] && an(n)
  );
  return {
    c() {
      e = ye("span"), t = ye("button"), Re(i.$$.fragment), s = Me(), o = ye("button"), Re(r.$$.fragment), a = Me(), f && f.c(), J(t, "class", "icon svelte-10jprmi"), J(t, "aria-label", "Create box"), Fe(
        t,
        "selected",
        /*mode*/
        n[8] === /*Mode*/
        n[5].creation
      ), J(o, "class", "icon svelte-10jprmi"), J(o, "aria-label", "Edit boxes"), Fe(
        o,
        "selected",
        /*mode*/
        n[8] === /*Mode*/
        n[5].drag
      ), J(e, "class", "canvas-control svelte-10jprmi");
    },
    m(d, g) {
      fe(d, e, g), Ee(e, t), Xe(i, t, null), Ee(e, s), Ee(e, o), Xe(r, o, null), Ee(e, a), f && f.m(e, null), l = !0, u || (c = [
        se(
          t,
          "click",
          /*click_handler*/
          n[29]
        ),
        se(
          o,
          "click",
          /*click_handler_1*/
          n[30]
        )
      ], u = !0);
    },
    p(d, g) {
      (!l || g[0] & /*mode, Mode*/
      288) && Fe(
        t,
        "selected",
        /*mode*/
        d[8] === /*Mode*/
        d[5].creation
      ), (!l || g[0] & /*mode, Mode*/
      288) && Fe(
        o,
        "selected",
        /*mode*/
        d[8] === /*Mode*/
        d[5].drag
      ), /*showRemoveButton*/
      d[1] ? f ? (f.p(d, g), g[0] & /*showRemoveButton*/
      2 && Y(f, 1)) : (f = an(d), f.c(), Y(f, 1), f.m(e, null)) : f && (Ze(), I(f, 1, 1, () => {
        f = null;
      }), Je());
    },
    i(d) {
      l || (Y(i.$$.fragment, d), Y(r.$$.fragment, d), Y(f), l = !0);
    },
    o(d) {
      I(i.$$.fragment, d), I(r.$$.fragment, d), I(f), l = !1;
    },
    d(d) {
      d && re(e), He(i), He(r), f && f.d(), u = !1, pn(c);
    }
  };
}
function an(n) {
  let e, t, i, s, o;
  return t = new hi({}), {
    c() {
      e = ye("button"), Re(t.$$.fragment), J(e, "class", "icon svelte-10jprmi"), J(e, "aria-label", "Remove boxes");
    },
    m(r, a) {
      fe(r, e, a), Xe(t, e, null), i = !0, s || (o = se(
        e,
        "click",
        /*click_handler_2*/
        n[31]
      ), s = !0);
    },
    p: Hl,
    i(r) {
      i || (Y(t.$$.fragment, r), i = !0);
    },
    o(r) {
      I(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && re(e), He(t), s = !1, o();
    }
  };
}
function rn(n) {
  let e, t;
  return e = new kn({
    props: {
      choices: (
        /*choices*/
        n[3]
      ),
      choicesColors: (
        /*choicesColors*/
        n[4]
      ),
      label: (
        /*selectedBox*/
        n[7] >= 0 && /*selectedBox*/
        n[7] < /*value*/
        n[0].boxes.length ? (
          /*value*/
          n[0].boxes[
            /*selectedBox*/
            n[7]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        n[7] >= 0 && /*selectedBox*/
        n[7] < /*value*/
        n[0].boxes.length ? Ye(
          /*value*/
          n[0].boxes[
            /*selectedBox*/
            n[7]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    n[16]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    n[32]
  ), {
    c() {
      Re(e.$$.fragment);
    },
    m(i, s) {
      Xe(e, i, s), t = !0;
    },
    p(i, s) {
      const o = {};
      s[0] & /*choices*/
      8 && (o.choices = /*choices*/
      i[3]), s[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      i[4]), s[0] & /*selectedBox, value*/
      129 && (o.label = /*selectedBox*/
      i[7] >= 0 && /*selectedBox*/
      i[7] < /*value*/
      i[0].boxes.length ? (
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[7]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      129 && (o.color = /*selectedBox*/
      i[7] >= 0 && /*selectedBox*/
      i[7] < /*value*/
      i[0].boxes.length ? Ye(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(i) {
      t || (Y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      I(e.$$.fragment, i), t = !1;
    },
    d(i) {
      He(e, i);
    }
  };
}
function fn(n) {
  let e, t;
  return e = new kn({
    props: {
      choices: (
        /*choices*/
        n[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        n[4]
      ),
      label: (
        /*selectedBox*/
        n[7] >= 0 && /*selectedBox*/
        n[7] < /*value*/
        n[0].boxes.length ? (
          /*value*/
          n[0].boxes[
            /*selectedBox*/
            n[7]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        n[7] >= 0 && /*selectedBox*/
        n[7] < /*value*/
        n[0].boxes.length ? Ye(
          /*value*/
          n[0].boxes[
            /*selectedBox*/
            n[7]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    n[17]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    n[33]
  ), {
    c() {
      Re(e.$$.fragment);
    },
    m(i, s) {
      Xe(e, i, s), t = !0;
    },
    p(i, s) {
      const o = {};
      s[0] & /*choices*/
      8 && (o.choices = /*choices*/
      i[3]), s[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      i[4]), s[0] & /*selectedBox, value*/
      129 && (o.label = /*selectedBox*/
      i[7] >= 0 && /*selectedBox*/
      i[7] < /*value*/
      i[0].boxes.length ? (
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[7]
        ].label
      ) : ""), s[0] & /*selectedBox, value*/
      129 && (o.color = /*selectedBox*/
      i[7] >= 0 && /*selectedBox*/
      i[7] < /*value*/
      i[0].boxes.length ? Ye(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(i) {
      t || (Y(e.$$.fragment, i), t = !0);
    },
    o(i) {
      I(e.$$.fragment, i), t = !1;
    },
    d(i) {
      He(e, i);
    }
  };
}
function Tl(n) {
  let e, t, i, s, o, r, a, l, u, c = (
    /*interactive*/
    n[2] && on(n)
  ), f = (
    /*editModalVisible*/
    n[9] && rn(n)
  ), d = (
    /*newModalVisible*/
    n[10] && fn(n)
  );
  return {
    c() {
      e = ye("div"), t = ye("canvas"), i = Me(), c && c.c(), s = Me(), f && f.c(), o = Me(), d && d.c(), r = Ml(), J(t, "class", "canvas-annotator svelte-10jprmi"), J(e, "class", "canvas-container svelte-10jprmi"), J(e, "tabindex", "-1");
    },
    m(g, k) {
      fe(g, e, k), Ee(e, t), n[28](t), fe(g, i, k), c && c.m(g, k), fe(g, s, k), f && f.m(g, k), fe(g, o, k), d && d.m(g, k), fe(g, r, k), a = !0, l || (u = [
        se(
          t,
          "mousedown",
          /*handleMouseDown*/
          n[11]
        ),
        se(
          t,
          "mouseup",
          /*handleMouseUp*/
          n[12]
        ),
        se(
          t,
          "dblclick",
          /*handleDoubleClick*/
          n[15]
        ),
        se(
          e,
          "focusin",
          /*handleCanvasFocus*/
          n[19]
        ),
        se(
          e,
          "focusout",
          /*handleCanvasBlur*/
          n[20]
        )
      ], l = !0);
    },
    p(g, k) {
      /*interactive*/
      g[2] ? c ? (c.p(g, k), k[0] & /*interactive*/
      4 && Y(c, 1)) : (c = on(g), c.c(), Y(c, 1), c.m(s.parentNode, s)) : c && (Ze(), I(c, 1, 1, () => {
        c = null;
      }), Je()), /*editModalVisible*/
      g[9] ? f ? (f.p(g, k), k[0] & /*editModalVisible*/
      512 && Y(f, 1)) : (f = rn(g), f.c(), Y(f, 1), f.m(o.parentNode, o)) : f && (Ze(), I(f, 1, 1, () => {
        f = null;
      }), Je()), /*newModalVisible*/
      g[10] ? d ? (d.p(g, k), k[0] & /*newModalVisible*/
      1024 && Y(d, 1)) : (d = fn(g), d.c(), Y(d, 1), d.m(r.parentNode, r)) : d && (Ze(), I(d, 1, 1, () => {
        d = null;
      }), Je());
    },
    i(g) {
      a || (Y(c), Y(f), Y(d), a = !0);
    },
    o(g) {
      I(c), I(f), I(d), a = !1;
    },
    d(g) {
      g && (re(e), re(i), re(s), re(o), re(r)), n[28](null), c && c.d(g), f && f.d(g), d && d.d(g), l = !1, pn(u);
    }
  };
}
function gt(n) {
  var e = parseInt(n.slice(1, 3), 16), t = parseInt(n.slice(3, 5), 16), i = parseInt(n.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + i + ")";
}
function Ye(n) {
  const e = n.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), i = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | i << 8 | s).toString(16).slice(1);
}
function ql(n, e, t) {
  var i;
  (function(w) {
    w[w.creation = 0] = "creation", w[w.drag = 1] = "drag";
  })(i || (i = {}));
  let { imageUrl: s = null } = e, { interactive: o } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 25 } = e, { handleSize: l } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: f } = e, { choices: d = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: k = !1 } = e, { showRemoveButton: y = null } = e;
  y === null && (y = k);
  let m, _, v = null, h = -1, b = i.drag;
  f !== null && f.boxes.length == 0 && (b = i.creation);
  let p = 0, A = 0, B = 0, C = 0, M = 1, D = 0, V = 0, z = !1, Z = !1;
  const N = Ll();
  function j() {
    if (_) {
      _.clearRect(0, 0, m.width, m.height), v !== null && _.drawImage(v, p, A, D, V);
      for (const w of f.boxes.slice().reverse())
        w.render(_);
    }
  }
  function le(w) {
    t(7, h = w), f.boxes.forEach((E) => {
      E.setSelected(!1);
    }), w >= 0 && w < f.boxes.length && f.boxes[w].setSelected(!0), j();
  }
  function st(w) {
    o && (b === i.creation ? Bt(w) : b === i.drag && lt(w));
  }
  function lt(w) {
    const E = m.getBoundingClientRect(), H = w.clientX - E.left, U = w.clientY - E.top;
    for (const [W, L] of f.boxes.entries()) {
      const Ht = L.indexOfPointInsideHandle(H, U);
      if (Ht >= 0) {
        le(W), L.startResize(Ht, w);
        return;
      }
    }
    for (const [W, L] of f.boxes.entries())
      if (L.isPointInsideBox(H, U)) {
        le(W), L.startDrag(w);
        return;
      }
    le(-1);
  }
  function ot(w) {
    N("change");
  }
  function S(w) {
    if (o)
      switch (w.key) {
        case "Delete":
          ce();
          break;
      }
  }
  function Bt(w) {
    const E = m.getBoundingClientRect(), H = (w.clientX - E.left - p) / M, U = (w.clientY - E.top - A) / M;
    let W;
    g.length > 0 ? W = gt(g[0]) : W = de[f.boxes.length % de.length];
    let L = new bt(j, Mt, p, A, B, C, "", H, U, H, U, W, r, a, l, u, c);
    L.startCreating(w, E.left, E.top), t(0, f.boxes = [L, ...f.boxes], f), le(0), j(), N("change");
  }
  function Oe() {
    t(8, b = i.creation), t(6, m.style.cursor = "crosshair", m);
  }
  function At() {
    t(8, b = i.drag), t(6, m.style.cursor = "default", m);
  }
  function Mt() {
    h >= 0 && h < f.boxes.length && (f.boxes[h].getArea() < 1 ? ce() : k || t(10, Z = !0));
  }
  function xn() {
    h >= 0 && h < f.boxes.length && !k && t(9, z = !0);
  }
  function Cn(w) {
    o && xn();
  }
  function Sn(w) {
    t(9, z = !1);
    const { detail: E } = w;
    let H = E.label, U = E.color, W = E.ret;
    if (h >= 0 && h < f.boxes.length) {
      let L = f.boxes[h];
      W == 1 ? (L.label = H, L.color = gt(U), j(), N("change")) : W == -1 && ce();
    }
  }
  function zn(w) {
    t(10, Z = !1);
    const { detail: E } = w;
    let H = E.label, U = E.color, W = E.ret;
    if (h >= 0 && h < f.boxes.length) {
      let L = f.boxes[h];
      W == 1 ? (L.label = H, L.color = gt(U), j(), N("change")) : ce();
    }
  }
  function ce() {
    h >= 0 && h < f.boxes.length && (f.boxes.splice(h, 1), le(-1), N("change"));
  }
  function Ie() {
    if (m) {
      if (M = 1, t(6, m.width = m.clientWidth, m), v !== null)
        if (v.width > m.width)
          M = m.width / v.width, D = v.width * M, V = v.height * M, p = 0, A = 0, B = D, C = V, t(6, m.height = V, m);
        else {
          D = v.width, V = v.height;
          var w = (m.width - D) / 2;
          p = w, A = 0, B = w + D, C = v.height, t(6, m.height = V, m);
        }
      else
        p = 0, A = 0, B = m.width, C = m.height, t(6, m.height = m.clientHeight, m);
      if (B > 0 && C > 0)
        for (const E of f.boxes)
          E.canvasXmin = p, E.canvasYmin = A, E.canvasXmax = B, E.canvasYmax = C, E.setScaleFactor(M);
      j(), N("change");
    }
  }
  const En = new ResizeObserver(Ie);
  function Bn() {
    for (let w = 0; w < f.boxes.length; w++) {
      let E = f.boxes[w];
      if (!(E instanceof bt)) {
        let H = "", U = "";
        E.hasOwnProperty("color") ? (H = E.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = de[w % de.length], E.hasOwnProperty("label") && (U = E.label), E = new bt(j, Mt, p, A, B, C, U, E.xmin, E.ymin, E.xmax, E.ymax, H, r, a, l, u, c), t(0, f.boxes[w] = E, f);
      }
    }
  }
  function Rt() {
    s !== null && (v === null || v.src != s) && (v = new Image(), v.src = s, v.onload = function() {
      Ie(), j();
    });
  }
  Yl(() => {
    if (Array.isArray(d) && d.length > 0 && (!Array.isArray(g) || g.length == 0))
      for (let w = 0; w < d.length; w++) {
        let E = de[w % de.length];
        g.push(Ye(E));
      }
    _ = m.getContext("2d"), En.observe(m), Rt(), Ie(), j();
  });
  function An() {
    document.addEventListener("keydown", S);
  }
  function Mn() {
    document.removeEventListener("keydown", S);
  }
  Dl(() => {
    document.removeEventListener("keydown", S);
  });
  function Rn(w) {
    Al[w ? "unshift" : "push"](() => {
      m = w, t(6, m);
    });
  }
  const Hn = () => Oe(), Xn = () => At(), Yn = () => ce();
  function Dn(w) {
    ln.call(this, n, w);
  }
  function Ln(w) {
    ln.call(this, n, w);
  }
  return n.$$set = (w) => {
    "imageUrl" in w && t(21, s = w.imageUrl), "interactive" in w && t(2, o = w.interactive), "boxAlpha" in w && t(22, r = w.boxAlpha), "boxMinSize" in w && t(23, a = w.boxMinSize), "handleSize" in w && t(24, l = w.handleSize), "boxThickness" in w && t(25, u = w.boxThickness), "boxSelectedThickness" in w && t(26, c = w.boxSelectedThickness), "value" in w && t(0, f = w.value), "choices" in w && t(3, d = w.choices), "choicesColors" in w && t(4, g = w.choicesColors), "disableEditBoxes" in w && t(27, k = w.disableEditBoxes), "showRemoveButton" in w && t(1, y = w.showRemoveButton);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*value*/
    1 && (Rt(), Bn(), Ie(), j());
  }, [
    f,
    y,
    o,
    d,
    g,
    i,
    m,
    h,
    b,
    z,
    Z,
    st,
    ot,
    Oe,
    At,
    Cn,
    Sn,
    zn,
    ce,
    An,
    Mn,
    s,
    r,
    a,
    l,
    u,
    c,
    k,
    Rn,
    Hn,
    Xn,
    Yn,
    Dn,
    Ln
  ];
}
class Ol extends Bl {
  constructor(e) {
    super(), Rl(
      this,
      e,
      ql,
      Tl,
      Xl,
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
  SvelteComponent: Il,
  add_flush_callback: jl,
  bind: Ul,
  binding_callbacks: Wl,
  create_component: Vl,
  destroy_component: Nl,
  init: Fl,
  mount_component: Pl,
  safe_not_equal: Kl,
  transition_in: Gl,
  transition_out: Jl
} = window.__gradio__svelte__internal, { createEventDispatcher: Zl } = window.__gradio__svelte__internal;
function Ql(n) {
  let e, t, i;
  function s(r) {
    n[15](r);
  }
  let o = {
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
    disableEditBoxes: (
      /*disableEditBoxes*/
      n[9]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      n[10]
    ),
    imageUrl: (
      /*resolved_src*/
      n[11]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (o.value = /*value*/
    n[0]), e = new Ol({ props: o }), Wl.push(() => Ul(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      n[16]
    ), {
      c() {
        Vl(e.$$.fragment);
      },
      m(r, a) {
        Pl(e, r, a), i = !0;
      },
      p(r, [a]) {
        const l = {};
        a & /*interactive*/
        2 && (l.interactive = /*interactive*/
        r[1]), a & /*boxesAlpha*/
        4 && (l.boxAlpha = /*boxesAlpha*/
        r[2]), a & /*labelList*/
        8 && (l.choices = /*labelList*/
        r[3]), a & /*labelColors*/
        16 && (l.choicesColors = /*labelColors*/
        r[4]), a & /*boxMinSize*/
        32 && (l.boxMinSize = /*boxMinSize*/
        r[5]), a & /*handleSize*/
        64 && (l.handleSize = /*handleSize*/
        r[6]), a & /*boxThickness*/
        128 && (l.boxThickness = /*boxThickness*/
        r[7]), a & /*boxSelectedThickness*/
        256 && (l.boxSelectedThickness = /*boxSelectedThickness*/
        r[8]), a & /*disableEditBoxes*/
        512 && (l.disableEditBoxes = /*disableEditBoxes*/
        r[9]), a & /*showRemoveButton*/
        1024 && (l.showRemoveButton = /*showRemoveButton*/
        r[10]), a & /*resolved_src*/
        2048 && (l.imageUrl = /*resolved_src*/
        r[11]), !t && a & /*value*/
        1 && (t = !0, l.value = /*value*/
        r[0], jl(() => t = !1)), e.$set(l);
      },
      i(r) {
        i || (Gl(e.$$.fragment, r), i = !0);
      },
      o(r) {
        Jl(e.$$.fragment, r), i = !1;
      },
      d(r) {
        Nl(e, r);
      }
    }
  );
}
function $l(n, e, t) {
  let { src: i = void 0 } = e, { interactive: s } = e, { boxesAlpha: o } = e, { labelList: r } = e, { labelColors: a } = e, { boxMinSize: l } = e, { handleSize: u } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: d } = e, { disableEditBoxes: g } = e, { showRemoveButton: k } = e, y, m;
  const _ = Zl();
  function v(b) {
    d = b, t(0, d);
  }
  const h = () => _("change");
  return n.$$set = (b) => {
    "src" in b && t(13, i = b.src), "interactive" in b && t(1, s = b.interactive), "boxesAlpha" in b && t(2, o = b.boxesAlpha), "labelList" in b && t(3, r = b.labelList), "labelColors" in b && t(4, a = b.labelColors), "boxMinSize" in b && t(5, l = b.boxMinSize), "handleSize" in b && t(6, u = b.handleSize), "boxThickness" in b && t(7, c = b.boxThickness), "boxSelectedThickness" in b && t(8, f = b.boxSelectedThickness), "value" in b && t(0, d = b.value), "disableEditBoxes" in b && t(9, g = b.disableEditBoxes), "showRemoveButton" in b && t(10, k = b.showRemoveButton);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*src, latest_src*/
    24576) {
      t(11, y = i), t(14, m = i);
      const b = i;
      Wn(b).then((p) => {
        m === b && t(11, y = p);
      });
    }
  }, [
    d,
    s,
    o,
    r,
    a,
    l,
    u,
    c,
    f,
    g,
    k,
    y,
    _,
    i,
    m,
    v,
    h
  ];
}
class eo extends Il {
  constructor(e) {
    super(), Fl(this, e, $l, Ql, Kl, {
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
const {
  SvelteComponent: to,
  attr: no,
  check_outros: io,
  create_component: so,
  destroy_component: lo,
  detach: oo,
  element: ao,
  group_outros: ro,
  init: fo,
  insert: co,
  mount_component: uo,
  safe_not_equal: ho,
  toggle_class: te,
  transition_in: Qe,
  transition_out: Ct
} = window.__gradio__svelte__internal;
function cn(n) {
  let e, t;
  return e = new eo({
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
      so(e.$$.fragment);
    },
    m(i, s) {
      uo(e, i, s), t = !0;
    },
    p(i, s) {
      const o = {};
      s & /*samples_dir, value*/
      3 && (o.src = /*samples_dir*/
      i[1] + /*value*/
      i[0].path), e.$set(o);
    },
    i(i) {
      t || (Qe(e.$$.fragment, i), t = !0);
    },
    o(i) {
      Ct(e.$$.fragment, i), t = !1;
    },
    d(i) {
      lo(e, i);
    }
  };
}
function mo(n) {
  let e, t, i = (
    /*value*/
    n[0] && cn(n)
  );
  return {
    c() {
      e = ao("div"), i && i.c(), no(e, "class", "container svelte-1sgcyba"), te(
        e,
        "table",
        /*type*/
        n[2] === "table"
      ), te(
        e,
        "gallery",
        /*type*/
        n[2] === "gallery"
      ), te(
        e,
        "selected",
        /*selected*/
        n[3]
      ), te(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    m(s, o) {
      co(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      /*value*/
      s[0] ? i ? (i.p(s, o), o & /*value*/
      1 && Qe(i, 1)) : (i = cn(s), i.c(), Qe(i, 1), i.m(e, null)) : i && (ro(), Ct(i, 1, 1, () => {
        i = null;
      }), io()), (!t || o & /*type*/
      4) && te(
        e,
        "table",
        /*type*/
        s[2] === "table"
      ), (!t || o & /*type*/
      4) && te(
        e,
        "gallery",
        /*type*/
        s[2] === "gallery"
      ), (!t || o & /*selected*/
      8) && te(
        e,
        "selected",
        /*selected*/
        s[3]
      ), (!t || o & /*value*/
      1) && te(
        e,
        "border",
        /*value*/
        s[0]
      );
    },
    i(s) {
      t || (Qe(i), t = !0);
    },
    o(s) {
      Ct(i), t = !1;
    },
    d(s) {
      s && oo(e), i && i.d();
    }
  };
}
function _o(n, e, t) {
  let { value: i } = e, { samples_dir: s } = e, { type: o } = e, { selected: r = !1 } = e;
  return n.$$set = (a) => {
    "value" in a && t(0, i = a.value), "samples_dir" in a && t(1, s = a.samples_dir), "type" in a && t(2, o = a.type), "selected" in a && t(3, r = a.selected);
  }, [i, s, o, r];
}
class go extends to {
  constructor(e) {
    super(), fo(this, e, _o, mo, ho, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  go as default
};
