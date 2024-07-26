const { setContext: go, getContext: Tn } = window.__gradio__svelte__internal, In = "WORKER_PROXY_CONTEXT_KEY";
function On() {
  return Tn(In);
}
function Un(n) {
  return n.host === window.location.host || n.host === "localhost:7860" || n.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  n.host === "lite.local";
}
function Wn(n, e) {
  const t = e.toLowerCase();
  for (const [i, s] of Object.entries(n))
    if (i.toLowerCase() === t)
      return s;
}
function Vn(n) {
  if (n == null)
    return !1;
  const e = new URL(n, window.location.href);
  return !(!Un(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function jn(n) {
  if (n == null || !Vn(n))
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
      type: Wn(s.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Nn,
  append: ee,
  attr: p,
  detach: Pn,
  init: Fn,
  insert: Kn,
  noop: rt,
  safe_not_equal: Gn,
  set_style: te,
  svg_element: Z
} = window.__gradio__svelte__internal;
function Jn(n) {
  let e, t, i, s, o, r, a, l, u;
  return {
    c() {
      e = Z("svg"), t = Z("rect"), i = Z("rect"), s = Z("rect"), o = Z("rect"), r = Z("line"), a = Z("line"), l = Z("line"), u = Z("line"), p(t, "x", "2"), p(t, "y", "2"), p(t, "width", "5"), p(t, "height", "5"), p(t, "rx", "1"), p(t, "ry", "1"), p(t, "stroke-width", "2"), p(t, "fill", "none"), p(i, "x", "17"), p(i, "y", "2"), p(i, "width", "5"), p(i, "height", "5"), p(i, "rx", "1"), p(i, "ry", "1"), p(i, "stroke-width", "2"), p(i, "fill", "none"), p(s, "x", "2"), p(s, "y", "17"), p(s, "width", "5"), p(s, "height", "5"), p(s, "rx", "1"), p(s, "ry", "1"), p(s, "stroke-width", "2"), p(s, "fill", "none"), p(o, "x", "17"), p(o, "y", "17"), p(o, "width", "5"), p(o, "height", "5"), p(o, "rx", "1"), p(o, "ry", "1"), p(o, "stroke-width", "2"), p(o, "fill", "none"), p(r, "x1", "7.5"), p(r, "y1", "4.5"), p(r, "x2", "16"), p(r, "y2", "4.5"), te(r, "stroke-width", "2px"), p(a, "x1", "7.5"), p(a, "y1", "19.5"), p(a, "x2", "16"), p(a, "y2", "19.5"), te(a, "stroke-width", "2px"), p(l, "x1", "4.5"), p(l, "y1", "8"), p(l, "x2", "4.5"), p(l, "y2", "16"), te(l, "stroke-width", "2px"), p(u, "x1", "19.5"), p(u, "y1", "8"), p(u, "x2", "19.5"), p(u, "y2", "16"), te(u, "stroke-width", "2px"), p(e, "width", "100%"), p(e, "height", "100%"), p(e, "viewBox", "0 0 24 24"), p(e, "version", "1.1"), p(e, "xmlns", "http://www.w3.org/2000/svg"), p(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), p(e, "xml:space", "preserve"), p(e, "stroke", "currentColor"), te(e, "fill-rule", "evenodd"), te(e, "clip-rule", "evenodd"), te(e, "stroke-linecap", "round"), te(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      Kn(c, e, f), ee(e, t), ee(e, i), ee(e, s), ee(e, o), ee(e, r), ee(e, a), ee(e, l), ee(e, u);
    },
    p: rt,
    i: rt,
    o: rt,
    d(c) {
      c && Pn(e);
    }
  };
}
class Zn extends Nn {
  constructor(e) {
    super(), Fn(this, e, null, Jn, Gn, {});
  }
}
const {
  SvelteComponent: Qn,
  append: $n,
  attr: N,
  detach: ei,
  init: ti,
  insert: ni,
  noop: ft,
  safe_not_equal: ii,
  set_style: We,
  svg_element: Yt
} = window.__gradio__svelte__internal;
function si(n) {
  let e, t;
  return {
    c() {
      e = Yt("svg"), t = Yt("path"), N(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), N(t, "fill", "none"), N(t, "stroke-width", "2"), N(e, "width", "100%"), N(e, "height", "100%"), N(e, "viewBox", "0 0 24 24"), N(e, "version", "1.1"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), N(e, "xml:space", "preserve"), N(e, "stroke", "currentColor"), We(e, "fill-rule", "evenodd"), We(e, "clip-rule", "evenodd"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      ni(i, e, s), $n(e, t);
    },
    p: ft,
    i: ft,
    o: ft,
    d(i) {
      i && ei(e);
    }
  };
}
class li extends Qn {
  constructor(e) {
    super(), ti(this, e, null, si, ii, {});
  }
}
const {
  SvelteComponent: oi,
  append: ai,
  attr: P,
  detach: ri,
  init: fi,
  insert: ci,
  noop: ct,
  safe_not_equal: ui,
  set_style: Ve,
  svg_element: qt
} = window.__gradio__svelte__internal;
function hi(n) {
  let e, t;
  return {
    c() {
      e = qt("svg"), t = qt("path"), P(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), P(t, "fill", "none"), P(t, "stroke-width", "2"), P(e, "width", "100%"), P(e, "height", "100%"), P(e, "viewBox", "0 0 24 24"), P(e, "version", "1.1"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), P(e, "xml:space", "preserve"), P(e, "stroke", "currentColor"), Ve(e, "fill-rule", "evenodd"), Ve(e, "clip-rule", "evenodd"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      ci(i, e, s), ai(e, t);
    },
    p: ct,
    i: ct,
    o: ct,
    d(i) {
      i && ri(e);
    }
  };
}
class mi extends oi {
  constructor(e) {
    super(), fi(this, e, null, hi, ui, {});
  }
}
const {
  SvelteComponent: _i,
  attr: di,
  create_slot: bi,
  detach: gi,
  element: wi,
  get_all_dirty_from_scope: yi,
  get_slot_changes: vi,
  init: ki,
  insert: pi,
  safe_not_equal: xi,
  transition_in: Ci,
  transition_out: Si,
  update_slot_base: zi
} = window.__gradio__svelte__internal;
function Bi(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), s = bi(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = wi("div"), s && s.c(), di(e, "class", "svelte-1hnfib2");
    },
    m(o, r) {
      pi(o, e, r), s && s.m(e, null), t = !0;
    },
    p(o, [r]) {
      s && s.p && (!t || r & /*$$scope*/
      1) && zi(
        s,
        i,
        o,
        /*$$scope*/
        o[0],
        t ? vi(
          i,
          /*$$scope*/
          o[0],
          r,
          null
        ) : yi(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Ci(s, o), t = !0);
    },
    o(o) {
      Si(s, o), t = !1;
    },
    d(o) {
      o && gi(e), s && s.d(o);
    }
  };
}
function Ei(n, e, t) {
  let { $$slots: i = {}, $$scope: s } = e;
  return n.$$set = (o) => {
    "$$scope" in o && t(0, s = o.$$scope);
  }, [s, i];
}
class Ai extends _i {
  constructor(e) {
    super(), ki(this, e, Ei, Bi, xi, {});
  }
}
const {
  SvelteComponent: Mi,
  attr: Dt,
  check_outros: Ri,
  create_component: Hi,
  create_slot: Xi,
  destroy_component: Yi,
  detach: Ke,
  element: qi,
  empty: Di,
  get_all_dirty_from_scope: Li,
  get_slot_changes: Ti,
  group_outros: Ii,
  init: Oi,
  insert: Ge,
  mount_component: Ui,
  safe_not_equal: Wi,
  set_data: Vi,
  space: ji,
  text: Ni,
  toggle_class: me,
  transition_in: pe,
  transition_out: Je,
  update_slot_base: Pi
} = window.__gradio__svelte__internal;
function Lt(n) {
  let e, t;
  return e = new Ai({
    props: {
      $$slots: { default: [Fi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Hi(e.$$.fragment);
    },
    m(i, s) {
      Ui(e, i, s), t = !0;
    },
    p(i, s) {
      const o = {};
      s & /*$$scope, info*/
      10 && (o.$$scope = { dirty: s, ctx: i }), e.$set(o);
    },
    i(i) {
      t || (pe(e.$$.fragment, i), t = !0);
    },
    o(i) {
      Je(e.$$.fragment, i), t = !1;
    },
    d(i) {
      Yi(e, i);
    }
  };
}
function Fi(n) {
  let e;
  return {
    c() {
      e = Ni(
        /*info*/
        n[1]
      );
    },
    m(t, i) {
      Ge(t, e, i);
    },
    p(t, i) {
      i & /*info*/
      2 && Vi(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ke(e);
    }
  };
}
function Ki(n) {
  let e, t, i, s;
  const o = (
    /*#slots*/
    n[2].default
  ), r = Xi(
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
      e = qi("span"), r && r.c(), t = ji(), a && a.c(), i = Di(), Dt(e, "data-testid", "block-info"), Dt(e, "class", "svelte-22c38v"), me(e, "sr-only", !/*show_label*/
      n[0]), me(e, "hide", !/*show_label*/
      n[0]), me(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(l, u) {
      Ge(l, e, u), r && r.m(e, null), Ge(l, t, u), a && a.m(l, u), Ge(l, i, u), s = !0;
    },
    p(l, [u]) {
      r && r.p && (!s || u & /*$$scope*/
      8) && Pi(
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
      1) && me(e, "sr-only", !/*show_label*/
      l[0]), (!s || u & /*show_label*/
      1) && me(e, "hide", !/*show_label*/
      l[0]), (!s || u & /*info*/
      2) && me(
        e,
        "has-info",
        /*info*/
        l[1] != null
      ), /*info*/
      l[1] ? a ? (a.p(l, u), u & /*info*/
      2 && pe(a, 1)) : (a = Lt(l), a.c(), pe(a, 1), a.m(i.parentNode, i)) : a && (Ii(), Je(a, 1, 1, () => {
        a = null;
      }), Ri());
    },
    i(l) {
      s || (pe(r, l), pe(a), s = !0);
    },
    o(l) {
      Je(r, l), Je(a), s = !1;
    },
    d(l) {
      l && (Ke(e), Ke(t), Ke(i)), r && r.d(l), a && a.d(l);
    }
  };
}
function Gi(n, e, t) {
  let { $$slots: i = {}, $$scope: s } = e, { show_label: o = !0 } = e, { info: r = void 0 } = e;
  return n.$$set = (a) => {
    "show_label" in a && t(0, o = a.show_label), "info" in a && t(1, r = a.info), "$$scope" in a && t(3, s = a.$$scope);
  }, [o, r, i, s];
}
class hn extends Mi {
  constructor(e) {
    super(), Oi(this, e, Gi, Ki, Wi, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Ji,
  append: Zi,
  attr: _e,
  detach: Qi,
  init: $i,
  insert: es,
  noop: ut,
  safe_not_equal: ts,
  svg_element: Tt
} = window.__gradio__svelte__internal;
function ns(n) {
  let e, t;
  return {
    c() {
      e = Tt("svg"), t = Tt("path"), _e(t, "d", "M5 8l4 4 4-4z"), _e(e, "class", "dropdown-arrow svelte-145leq6"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 18 18");
    },
    m(i, s) {
      es(i, e, s), Zi(e, t);
    },
    p: ut,
    i: ut,
    o: ut,
    d(i) {
      i && Qi(e);
    }
  };
}
class is extends Ji {
  constructor(e) {
    super(), $i(this, e, null, ns, ts, {});
  }
}
const ss = [
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
], It = {
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
ss.reduce(
  (n, { color: e, primary: t, secondary: i }) => ({
    ...n,
    [e]: {
      primary: It[e][t],
      secondary: It[e][i]
    }
  }),
  {}
);
const {
  SvelteComponent: ls,
  append: Ot,
  attr: ht,
  bubble: Ut,
  create_component: os,
  destroy_component: as,
  detach: mn,
  element: Wt,
  init: rs,
  insert: _n,
  listen: mt,
  mount_component: fs,
  run_all: cs,
  safe_not_equal: us,
  set_data: hs,
  set_input_value: Vt,
  space: ms,
  text: _s,
  transition_in: ds,
  transition_out: bs
} = window.__gradio__svelte__internal, { createEventDispatcher: gs, afterUpdate: ws } = window.__gradio__svelte__internal;
function ys(n) {
  let e;
  return {
    c() {
      e = _s(
        /*label*/
        n[1]
      );
    },
    m(t, i) {
      _n(t, e, i);
    },
    p(t, i) {
      i & /*label*/
      2 && hs(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && mn(e);
    }
  };
}
function vs(n) {
  let e, t, i, s, o, r, a;
  return t = new hn({
    props: {
      show_label: (
        /*show_label*/
        n[4]
      ),
      info: (
        /*info*/
        n[2]
      ),
      $$slots: { default: [ys] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = Wt("label"), os(t.$$.fragment), i = ms(), s = Wt("input"), ht(s, "type", "color"), s.disabled = /*disabled*/
      n[3], ht(s, "class", "svelte-16l8u73"), ht(e, "class", "block");
    },
    m(l, u) {
      _n(l, e, u), fs(t, e, null), Ot(e, i), Ot(e, s), Vt(
        s,
        /*value*/
        n[0]
      ), o = !0, r || (a = [
        mt(
          s,
          "input",
          /*input_input_handler*/
          n[8]
        ),
        mt(
          s,
          "focus",
          /*focus_handler*/
          n[6]
        ),
        mt(
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
      1 && Vt(
        s,
        /*value*/
        l[0]
      );
    },
    i(l) {
      o || (ds(t.$$.fragment, l), o = !0);
    },
    o(l) {
      bs(t.$$.fragment, l), o = !1;
    },
    d(l) {
      l && mn(e), as(t), r = !1, cs(a);
    }
  };
}
function ks(n, e, t) {
  let { value: i = "#000000" } = e, { value_is_output: s = !1 } = e, { label: o } = e, { info: r = void 0 } = e, { disabled: a = !1 } = e, { show_label: l = !0 } = e;
  const u = gs();
  function c() {
    u("change", i), s || u("input");
  }
  ws(() => {
    t(5, s = !1);
  });
  function f(y) {
    Ut.call(this, n, y);
  }
  function d(y) {
    Ut.call(this, n, y);
  }
  function g() {
    i = this.value, t(0, i);
  }
  return n.$$set = (y) => {
    "value" in y && t(0, i = y.value), "value_is_output" in y && t(5, s = y.value_is_output), "label" in y && t(1, o = y.label), "info" in y && t(2, r = y.info), "disabled" in y && t(3, a = y.disabled), "show_label" in y && t(4, l = y.show_label);
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
class ps extends ls {
  constructor(e) {
    super(), rs(this, e, ks, vs, us, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
function jt(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function xs(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Nt(n, { delay: e = 0, duration: t = 400, easing: i = xs, x: s = 0, y: o = 0, opacity: r = 0 } = {}) {
  const a = getComputedStyle(n), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - r), [f, d] = jt(s), [g, y] = jt(o);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (v, w) => `
			transform: ${u} translate(${(1 - v) * f}${d}, ${(1 - v) * g}${y});
			opacity: ${l - c * w}`
  };
}
const {
  SvelteComponent: Cs,
  append: dn,
  attr: R,
  bubble: Ss,
  check_outros: zs,
  create_slot: bn,
  detach: De,
  element: st,
  empty: Bs,
  get_all_dirty_from_scope: gn,
  get_slot_changes: wn,
  group_outros: Es,
  init: As,
  insert: Le,
  listen: Ms,
  safe_not_equal: Rs,
  set_style: T,
  space: yn,
  src_url_equal: et,
  toggle_class: ye,
  transition_in: tt,
  transition_out: nt,
  update_slot_base: vn
} = window.__gradio__svelte__internal;
function Hs(n) {
  let e, t, i, s, o, r, a = (
    /*icon*/
    n[7] && Pt(n)
  );
  const l = (
    /*#slots*/
    n[12].default
  ), u = bn(
    l,
    n,
    /*$$scope*/
    n[11],
    null
  );
  return {
    c() {
      e = st("button"), a && a.c(), t = yn(), u && u.c(), R(e, "class", i = /*size*/
      n[4] + " " + /*variant*/
      n[3] + " " + /*elem_classes*/
      n[1].join(" ") + " svelte-8huxfn"), R(
        e,
        "id",
        /*elem_id*/
        n[0]
      ), e.disabled = /*disabled*/
      n[8], ye(e, "hidden", !/*visible*/
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
      Le(c, e, f), a && a.m(e, null), dn(e, t), u && u.m(e, null), s = !0, o || (r = Ms(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? a ? a.p(c, f) : (a = Pt(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), u && u.p && (!s || f & /*$$scope*/
      2048) && vn(
        u,
        l,
        c,
        /*$$scope*/
        c[11],
        s ? wn(
          l,
          /*$$scope*/
          c[11],
          f,
          null
        ) : gn(
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
      30) && ye(e, "hidden", !/*visible*/
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
      s || (tt(u, c), s = !0);
    },
    o(c) {
      nt(u, c), s = !1;
    },
    d(c) {
      c && De(e), a && a.d(), u && u.d(c), o = !1, r();
    }
  };
}
function Xs(n) {
  let e, t, i, s, o = (
    /*icon*/
    n[7] && Ft(n)
  );
  const r = (
    /*#slots*/
    n[12].default
  ), a = bn(
    r,
    n,
    /*$$scope*/
    n[11],
    null
  );
  return {
    c() {
      e = st("a"), o && o.c(), t = yn(), a && a.c(), R(
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
      ), ye(e, "hidden", !/*visible*/
      n[2]), ye(
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
      Le(l, e, u), o && o.m(e, null), dn(e, t), a && a.m(e, null), s = !0;
    },
    p(l, u) {
      /*icon*/
      l[7] ? o ? o.p(l, u) : (o = Ft(l), o.c(), o.m(e, t)) : o && (o.d(1), o = null), a && a.p && (!s || u & /*$$scope*/
      2048) && vn(
        a,
        r,
        l,
        /*$$scope*/
        l[11],
        s ? wn(
          r,
          /*$$scope*/
          l[11],
          u,
          null
        ) : gn(
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
      30) && ye(e, "hidden", !/*visible*/
      l[2]), (!s || u & /*size, variant, elem_classes, disabled*/
      282) && ye(
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
      s || (tt(a, l), s = !0);
    },
    o(l) {
      nt(a, l), s = !1;
    },
    d(l) {
      l && De(e), o && o.d(), a && a.d(l);
    }
  };
}
function Pt(n) {
  let e, t, i;
  return {
    c() {
      e = st("img"), R(e, "class", "button-icon svelte-8huxfn"), et(e.src, t = /*icon*/
      n[7].url) || R(e, "src", t), R(e, "alt", i = `${/*value*/
      n[5]} icon`);
    },
    m(s, o) {
      Le(s, e, o);
    },
    p(s, o) {
      o & /*icon*/
      128 && !et(e.src, t = /*icon*/
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
      e = st("img"), R(e, "class", "button-icon svelte-8huxfn"), et(e.src, t = /*icon*/
      n[7].url) || R(e, "src", t), R(e, "alt", i = `${/*value*/
      n[5]} icon`);
    },
    m(s, o) {
      Le(s, e, o);
    },
    p(s, o) {
      o & /*icon*/
      128 && !et(e.src, t = /*icon*/
      s[7].url) && R(e, "src", t), o & /*value*/
      32 && i !== (i = `${/*value*/
      s[5]} icon`) && R(e, "alt", i);
    },
    d(s) {
      s && De(e);
    }
  };
}
function Ys(n) {
  let e, t, i, s;
  const o = [Xs, Hs], r = [];
  function a(l, u) {
    return (
      /*link*/
      l[6] && /*link*/
      l[6].length > 0 ? 0 : 1
    );
  }
  return e = a(n), t = r[e] = o[e](n), {
    c() {
      t.c(), i = Bs();
    },
    m(l, u) {
      r[e].m(l, u), Le(l, i, u), s = !0;
    },
    p(l, [u]) {
      let c = e;
      e = a(l), e === c ? r[e].p(l, u) : (Es(), nt(r[c], 1, 1, () => {
        r[c] = null;
      }), zs(), t = r[e], t ? t.p(l, u) : (t = r[e] = o[e](l), t.c()), tt(t, 1), t.m(i.parentNode, i));
    },
    i(l) {
      s || (tt(t), s = !0);
    },
    o(l) {
      nt(t), s = !1;
    },
    d(l) {
      l && De(i), r[e].d(l);
    }
  };
}
function qs(n, e, t) {
  let { $$slots: i = {}, $$scope: s } = e, { elem_id: o = "" } = e, { elem_classes: r = [] } = e, { visible: a = !0 } = e, { variant: l = "secondary" } = e, { size: u = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: d = null } = e, { disabled: g = !1 } = e, { scale: y = null } = e, { min_width: v = void 0 } = e;
  function w(h) {
    Ss.call(this, n, h);
  }
  return n.$$set = (h) => {
    "elem_id" in h && t(0, o = h.elem_id), "elem_classes" in h && t(1, r = h.elem_classes), "visible" in h && t(2, a = h.visible), "variant" in h && t(3, l = h.variant), "size" in h && t(4, u = h.size), "value" in h && t(5, c = h.value), "link" in h && t(6, f = h.link), "icon" in h && t(7, d = h.icon), "disabled" in h && t(8, g = h.disabled), "scale" in h && t(9, y = h.scale), "min_width" in h && t(10, v = h.min_width), "$$scope" in h && t(11, s = h.$$scope);
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
    y,
    v,
    s,
    i,
    w
  ];
}
class yt extends Cs {
  constructor(e) {
    super(), As(this, e, qs, Ys, Rs, {
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
  add_render_callback: kn,
  append: je,
  attr: O,
  binding_callbacks: Kt,
  check_outros: Ls,
  create_bidirectional_transition: Gt,
  destroy_each: Ts,
  detach: Ae,
  element: it,
  empty: Is,
  ensure_array_like: Jt,
  group_outros: Os,
  init: Us,
  insert: Me,
  listen: vt,
  prevent_default: Ws,
  run_all: Vs,
  safe_not_equal: js,
  set_data: Ns,
  set_style: de,
  space: kt,
  text: Ps,
  toggle_class: F,
  transition_in: _t,
  transition_out: Zt
} = window.__gradio__svelte__internal, { createEventDispatcher: Fs } = window.__gradio__svelte__internal;
function Qt(n, e, t) {
  const i = n.slice();
  return i[26] = e[t], i;
}
function $t(n) {
  let e, t, i, s, o, r = Jt(
    /*filtered_indices*/
    n[1]
  ), a = [];
  for (let l = 0; l < r.length; l += 1)
    a[l] = en(Qt(n, r, l));
  return {
    c() {
      e = it("ul");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      O(e, "class", "options svelte-yuohum"), O(e, "role", "listbox"), de(
        e,
        "bottom",
        /*bottom*/
        n[9]
      ), de(e, "max-height", `calc(${/*max_height*/
      n[10]}px - var(--window-padding))`), de(
        e,
        "width",
        /*input_width*/
        n[8] + "px"
      );
    },
    m(l, u) {
      Me(l, e, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(e, null);
      n[22](e), i = !0, s || (o = vt(e, "mousedown", Ws(
        /*mousedown_handler*/
        n[21]
      )), s = !0);
    },
    p(l, u) {
      if (u & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        r = Jt(
          /*filtered_indices*/
          l[1]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = Qt(l, r, c);
          a[c] ? a[c].p(f, u) : (a[c] = en(f), a[c].c(), a[c].m(e, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = r.length;
      }
      u & /*bottom*/
      512 && de(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), u & /*max_height*/
      1024 && de(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), u & /*input_width*/
      256 && de(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    i(l) {
      i || (l && kn(() => {
        i && (t || (t = Gt(e, Nt, { duration: 200, y: 5 }, !0)), t.run(1));
      }), i = !0);
    },
    o(l) {
      l && (t || (t = Gt(e, Nt, { duration: 200, y: 5 }, !1)), t.run(0)), i = !1;
    },
    d(l) {
      l && Ae(e), Ts(a, l), n[22](null), l && t && t.end(), s = !1, o();
    }
  };
}
function en(n) {
  let e, t, i, s = (
    /*choices*/
    n[0][
      /*index*/
      n[26]
    ][0] + ""
  ), o, r, a, l, u;
  return {
    c() {
      e = it("li"), t = it("span"), t.textContent = "✓", i = kt(), o = Ps(s), r = kt(), O(t, "class", "inner-item svelte-yuohum"), F(t, "hide", !/*selected_indices*/
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
      )), F(
        e,
        "selected",
        /*selected_indices*/
        n[4].includes(
          /*index*/
          n[26]
        )
      ), F(
        e,
        "active",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      ), F(
        e,
        "bg-gray-100",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      ), F(
        e,
        "dark:bg-gray-600",
        /*index*/
        n[26] === /*active_index*/
        n[5]
      );
    },
    m(c, f) {
      Me(c, e, f), je(e, t), je(e, i), je(e, o), je(e, r);
    },
    p(c, f) {
      f & /*selected_indices, filtered_indices*/
      18 && F(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), f & /*choices, filtered_indices*/
      3 && s !== (s = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Ns(o, s), f & /*filtered_indices*/
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
      18 && F(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && F(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && F(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && F(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && Ae(e);
    }
  };
}
function Ks(n) {
  let e, t, i, s, o;
  kn(
    /*onwindowresize*/
    n[19]
  );
  let r = (
    /*show_options*/
    n[2] && !/*disabled*/
    n[3] && $t(n)
  );
  return {
    c() {
      e = it("div"), t = kt(), r && r.c(), i = Is(), O(e, "class", "reference");
    },
    m(a, l) {
      Me(a, e, l), n[20](e), Me(a, t, l), r && r.m(a, l), Me(a, i, l), s || (o = [
        vt(
          window,
          "scroll",
          /*scroll_listener*/
          n[12]
        ),
        vt(
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
      12 && _t(r, 1)) : (r = $t(a), r.c(), _t(r, 1), r.m(i.parentNode, i)) : r && (Os(), Zt(r, 1, 1, () => {
        r = null;
      }), Ls());
    },
    i(a) {
      _t(r);
    },
    o(a) {
      Zt(r);
    },
    d(a) {
      a && (Ae(e), Ae(t), Ae(i)), n[20](null), r && r.d(a), s = !1, Vs(o);
    }
  };
}
function Gs(n, e, t) {
  var i, s;
  let { choices: o } = e, { filtered_indices: r } = e, { show_options: a = !1 } = e, { disabled: l = !1 } = e, { selected_indices: u = [] } = e, { active_index: c = null } = e, f, d, g, y, v, w, h, x, m;
  function k() {
    const { top: S, bottom: J } = v.getBoundingClientRect();
    t(16, f = S), t(17, d = m - J);
  }
  let _ = null;
  function A() {
    a && (_ !== null && clearTimeout(_), _ = setTimeout(
      () => {
        k(), _ = null;
      },
      10
    ));
  }
  const B = Fs();
  function C() {
    t(11, m = window.innerHeight);
  }
  function M(S) {
    Kt[S ? "unshift" : "push"](() => {
      v = S, t(6, v);
    });
  }
  const Y = (S) => B("change", S);
  function j(S) {
    Kt[S ? "unshift" : "push"](() => {
      w = S, t(7, w);
    });
  }
  return n.$$set = (S) => {
    "choices" in S && t(0, o = S.choices), "filtered_indices" in S && t(1, r = S.filtered_indices), "show_options" in S && t(2, a = S.show_options), "disabled" in S && t(3, l = S.disabled), "selected_indices" in S && t(4, u = S.selected_indices), "active_index" in S && t(5, c = S.active_index);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (a && v) {
        if (w && u.length > 0) {
          let J = w.querySelectorAll("li");
          for (const Q of Array.from(J))
            if (Q.getAttribute("data-index") === u[0].toString()) {
              t(14, i = w == null ? void 0 : w.scrollTo) === null || i === void 0 || i.call(w, 0, Q.offsetTop);
              break;
            }
        }
        k();
        const S = t(15, s = v.parentElement) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
        t(18, g = (S == null ? void 0 : S.height) || 0), t(8, y = (S == null ? void 0 : S.width) || 0);
      }
      d > f ? (t(10, x = d), t(9, h = null)) : (t(9, h = `${d + g}px`), t(10, x = f - g));
    }
  }, [
    o,
    r,
    a,
    l,
    u,
    c,
    v,
    w,
    y,
    h,
    x,
    m,
    A,
    B,
    i,
    s,
    f,
    d,
    g,
    C,
    M,
    Y,
    j
  ];
}
class Js extends Ds {
  constructor(e) {
    super(), Us(this, e, Gs, Ks, js, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Zs(n, e) {
  return (n % e + e) % e;
}
function tn(n, e) {
  return n.reduce((t, i, s) => ((!e || i[0].toLowerCase().includes(e.toLowerCase())) && t.push(s), t), []);
}
function Qs(n, e, t) {
  n("change", e), t || n("input");
}
function $s(n, e, t) {
  if (n.key === "Escape")
    return [!1, e];
  if ((n.key === "ArrowDown" || n.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = n.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const i = t.indexOf(e), s = n.key === "ArrowUp" ? -1 : 1;
      e = t[Zs(i + s, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: el,
  append: ae,
  attr: I,
  binding_callbacks: tl,
  check_outros: nl,
  create_component: pt,
  destroy_component: xt,
  detach: zt,
  element: ge,
  group_outros: il,
  init: sl,
  insert: Bt,
  listen: ke,
  mount_component: Ct,
  run_all: ll,
  safe_not_equal: ol,
  set_data: al,
  set_input_value: nn,
  space: dt,
  text: rl,
  toggle_class: be,
  transition_in: we,
  transition_out: xe
} = window.__gradio__svelte__internal, { onMount: fl } = window.__gradio__svelte__internal, { createEventDispatcher: cl, afterUpdate: ul } = window.__gradio__svelte__internal;
function hl(n) {
  let e;
  return {
    c() {
      e = rl(
        /*label*/
        n[0]
      );
    },
    m(t, i) {
      Bt(t, e, i);
    },
    p(t, i) {
      i[0] & /*label*/
      1 && al(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && zt(e);
    }
  };
}
function sn(n) {
  let e, t, i;
  return t = new is({}), {
    c() {
      e = ge("div"), pt(t.$$.fragment), I(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(s, o) {
      Bt(s, e, o), Ct(t, e, null), i = !0;
    },
    i(s) {
      i || (we(t.$$.fragment, s), i = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && zt(e), xt(t);
    }
  };
}
function ml(n) {
  let e, t, i, s, o, r, a, l, u, c, f, d, g, y;
  t = new hn({
    props: {
      show_label: (
        /*show_label*/
        n[4]
      ),
      info: (
        /*info*/
        n[1]
      ),
      $$slots: { default: [hl] },
      $$scope: { ctx: n }
    }
  });
  let v = !/*disabled*/
  n[3] && sn();
  return f = new Js({
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
      e = ge("div"), pt(t.$$.fragment), i = dt(), s = ge("div"), o = ge("div"), r = ge("div"), a = ge("input"), u = dt(), v && v.c(), c = dt(), pt(f.$$.fragment), I(a, "role", "listbox"), I(a, "aria-controls", "dropdown-options"), I(
        a,
        "aria-expanded",
        /*show_options*/
        n[12]
      ), I(
        a,
        "aria-label",
        /*label*/
        n[0]
      ), I(a, "class", "border-none svelte-1m1zvyj"), a.disabled = /*disabled*/
      n[3], I(a, "autocomplete", "off"), a.readOnly = l = !/*filterable*/
      n[7], be(a, "subdued", !/*choices_names*/
      n[13].includes(
        /*input_text*/
        n[9]
      ) && !/*allow_custom_value*/
      n[6]), I(r, "class", "secondary-wrap svelte-1m1zvyj"), I(o, "class", "wrap-inner svelte-1m1zvyj"), be(
        o,
        "show_options",
        /*show_options*/
        n[12]
      ), I(s, "class", "wrap svelte-1m1zvyj"), I(e, "class", "svelte-1m1zvyj"), be(
        e,
        "container",
        /*container*/
        n[5]
      );
    },
    m(w, h) {
      Bt(w, e, h), Ct(t, e, null), ae(e, i), ae(e, s), ae(s, o), ae(o, r), ae(r, a), nn(
        a,
        /*input_text*/
        n[9]
      ), n[29](a), ae(r, u), v && v.m(r, null), ae(s, c), Ct(f, s, null), d = !0, g || (y = [
        ke(
          a,
          "input",
          /*input_input_handler*/
          n[28]
        ),
        ke(
          a,
          "keydown",
          /*handle_key_down*/
          n[19]
        ),
        ke(
          a,
          "keyup",
          /*keyup_handler*/
          n[30]
        ),
        ke(
          a,
          "blur",
          /*handle_blur*/
          n[18]
        ),
        ke(
          a,
          "focus",
          /*handle_focus*/
          n[17]
        )
      ], g = !0);
    },
    p(w, h) {
      const x = {};
      h[0] & /*show_label*/
      16 && (x.show_label = /*show_label*/
      w[4]), h[0] & /*info*/
      2 && (x.info = /*info*/
      w[1]), h[0] & /*label*/
      1 | h[1] & /*$$scope*/
      4 && (x.$$scope = { dirty: h, ctx: w }), t.$set(x), (!d || h[0] & /*show_options*/
      4096) && I(
        a,
        "aria-expanded",
        /*show_options*/
        w[12]
      ), (!d || h[0] & /*label*/
      1) && I(
        a,
        "aria-label",
        /*label*/
        w[0]
      ), (!d || h[0] & /*disabled*/
      8) && (a.disabled = /*disabled*/
      w[3]), (!d || h[0] & /*filterable*/
      128 && l !== (l = !/*filterable*/
      w[7])) && (a.readOnly = l), h[0] & /*input_text*/
      512 && a.value !== /*input_text*/
      w[9] && nn(
        a,
        /*input_text*/
        w[9]
      ), (!d || h[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && be(a, "subdued", !/*choices_names*/
      w[13].includes(
        /*input_text*/
        w[9]
      ) && !/*allow_custom_value*/
      w[6]), /*disabled*/
      w[3] ? v && (il(), xe(v, 1, 1, () => {
        v = null;
      }), nl()) : v ? h[0] & /*disabled*/
      8 && we(v, 1) : (v = sn(), v.c(), we(v, 1), v.m(r, null)), (!d || h[0] & /*show_options*/
      4096) && be(
        o,
        "show_options",
        /*show_options*/
        w[12]
      );
      const m = {};
      h[0] & /*show_options*/
      4096 && (m.show_options = /*show_options*/
      w[12]), h[0] & /*choices*/
      4 && (m.choices = /*choices*/
      w[2]), h[0] & /*filtered_indices*/
      1024 && (m.filtered_indices = /*filtered_indices*/
      w[10]), h[0] & /*disabled*/
      8 && (m.disabled = /*disabled*/
      w[3]), h[0] & /*selected_index*/
      2048 && (m.selected_indices = /*selected_index*/
      w[11] === null ? [] : [
        /*selected_index*/
        w[11]
      ]), h[0] & /*active_index*/
      16384 && (m.active_index = /*active_index*/
      w[14]), f.$set(m), (!d || h[0] & /*container*/
      32) && be(
        e,
        "container",
        /*container*/
        w[5]
      );
    },
    i(w) {
      d || (we(t.$$.fragment, w), we(v), we(f.$$.fragment, w), d = !0);
    },
    o(w) {
      xe(t.$$.fragment, w), xe(v), xe(f.$$.fragment, w), d = !1;
    },
    d(w) {
      w && zt(e), xt(t), n[29](null), v && v.d(), xt(f), g = !1, ll(y);
    }
  };
}
function _l(n, e, t) {
  let { label: i } = e, { info: s = void 0 } = e, { value: o = [] } = e, r = [], { value_is_output: a = !1 } = e, { choices: l } = e, u, { disabled: c = !1 } = e, { show_label: f } = e, { container: d = !0 } = e, { allow_custom_value: g = !1 } = e, { filterable: y = !0 } = e, v, w = !1, h, x, m = "", k = "", _ = !1, A = [], B = null, C = null, M;
  const Y = cl();
  o ? (M = l.map((z) => z[1]).indexOf(o), C = M, C === -1 ? (r = o, C = null) : ([m, r] = l[C], k = m), S()) : l.length > 0 && (M = 0, C = 0, [m, o] = l[C], r = o, k = m);
  function j() {
    t(13, h = l.map((z) => z[0])), t(24, x = l.map((z) => z[1]));
  }
  function S() {
    j(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, m = ""), t(11, C = null)) : x.includes(o) ? (t(9, m = h[x.indexOf(o)]), t(11, C = x.indexOf(o))) : g ? (t(9, m = o), t(11, C = null)) : (t(9, m = ""), t(11, C = null)), t(27, M = C);
  }
  function J(z) {
    if (t(11, C = parseInt(z.detail.target.dataset.index)), isNaN(C)) {
      t(11, C = null);
      return;
    }
    t(12, w = !1), t(14, B = null), v.blur();
  }
  function Q(z) {
    t(10, A = l.map((Oe, at) => at)), t(12, w = !0), Y("focus");
  }
  function $() {
    g ? t(20, o = m) : t(9, m = h[x.indexOf(o)]), t(12, w = !1), t(14, B = null), Y("blur");
  }
  function W(z) {
    t(12, [w, B] = $s(z, B, A), w, (t(14, B), t(2, l), t(23, u), t(6, g), t(9, m), t(10, A), t(8, v), t(25, k), t(11, C), t(27, M), t(26, _), t(24, x))), z.key === "Enter" && (B !== null ? (t(11, C = B), t(12, w = !1), v.blur(), t(14, B = null)) : h.includes(m) ? (t(11, C = h.indexOf(m)), t(12, w = !1), t(14, B = null), v.blur()) : g && (t(20, o = m), t(11, C = null), t(12, w = !1), t(14, B = null), v.blur()), Y("enter", o));
  }
  ul(() => {
    t(21, a = !1), t(26, _ = !0);
  }), fl(() => {
    v.focus();
  });
  function oe() {
    m = this.value, t(9, m), t(11, C), t(27, M), t(26, _), t(2, l), t(24, x);
  }
  function lt(z) {
    tl[z ? "unshift" : "push"](() => {
      v = z, t(8, v);
    });
  }
  const ot = (z) => Y("key_up", { key: z.key, input_value: m });
  return n.$$set = (z) => {
    "label" in z && t(0, i = z.label), "info" in z && t(1, s = z.info), "value" in z && t(20, o = z.value), "value_is_output" in z && t(21, a = z.value_is_output), "choices" in z && t(2, l = z.choices), "disabled" in z && t(3, c = z.disabled), "show_label" in z && t(4, f = z.show_label), "container" in z && t(5, d = z.container), "allow_custom_value" in z && t(6, g = z.allow_custom_value), "filterable" in z && t(7, y = z.filterable);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== M && C !== null && _ && (t(9, [m, o] = l[C], m, (t(20, o), t(11, C), t(27, M), t(26, _), t(2, l), t(24, x))), t(27, M = C), Y("select", {
      index: C,
      value: x[C],
      selected: !0
    })), n.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != r && (S(), Qs(Y, o, a), t(22, r = o)), n.$$.dirty[0] & /*choices*/
    4 && j(), n.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && l !== u && (g || S(), t(23, u = l), t(10, A = tn(l, m)), !g && A.length > 0 && t(14, B = A[0]), v == document.activeElement && t(12, w = !0)), n.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && m !== k && (t(10, A = tn(l, m)), t(25, k = m), !g && A.length > 0 && t(14, B = A[0]));
  }, [
    i,
    s,
    l,
    c,
    f,
    d,
    g,
    y,
    v,
    m,
    A,
    C,
    w,
    h,
    B,
    Y,
    J,
    Q,
    $,
    W,
    o,
    a,
    r,
    u,
    x,
    k,
    _,
    M,
    oe,
    lt,
    ot
  ];
}
class dl extends el {
  constructor(e) {
    super(), sl(
      this,
      e,
      _l,
      ml,
      ol,
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
  SvelteComponent: bl,
  append: K,
  attr: Ne,
  check_outros: gl,
  create_component: Ce,
  destroy_component: Se,
  detach: Te,
  element: ie,
  group_outros: wl,
  init: yl,
  insert: Ie,
  mount_component: ze,
  safe_not_equal: vl,
  set_style: Be,
  space: Pe,
  text: Et,
  transition_in: se,
  transition_out: fe
} = window.__gradio__svelte__internal, { createEventDispatcher: kl } = window.__gradio__svelte__internal, { onMount: pl, onDestroy: xl } = window.__gradio__svelte__internal;
function Cl(n) {
  let e;
  return {
    c() {
      e = Et("Cancel");
    },
    m(t, i) {
      Ie(t, e, i);
    },
    d(t) {
      t && Te(e);
    }
  };
}
function ln(n) {
  let e, t, i;
  return t = new yt({
    props: {
      variant: "stop",
      $$slots: { default: [Sl] },
      $$scope: { ctx: n }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    n[12]
  ), {
    c() {
      e = ie("div"), Ce(t.$$.fragment), Be(e, "margin-right", "8px");
    },
    m(s, o) {
      Ie(s, e, o), ze(t, e, null), i = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      65536 && (r.$$scope = { dirty: o, ctx: s }), t.$set(r);
    },
    i(s) {
      i || (se(t.$$.fragment, s), i = !0);
    },
    o(s) {
      fe(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Te(e), Se(t);
    }
  };
}
function Sl(n) {
  let e;
  return {
    c() {
      e = Et("Remove");
    },
    m(t, i) {
      Ie(t, e, i);
    },
    d(t) {
      t && Te(e);
    }
  };
}
function zl(n) {
  let e;
  return {
    c() {
      e = Et("OK");
    },
    m(t, i) {
      Ie(t, e, i);
    },
    d(t) {
      t && Te(e);
    }
  };
}
function Bl(n) {
  let e, t, i, s, o, r, a, l, u, c, f, d, g, y, v, w;
  o = new dl({
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
  ), l = new ps({
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
  ), f = new yt({
    props: {
      $$slots: { default: [Cl] },
      $$scope: { ctx: n }
    }
  }), f.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  let h = (
    /*showRemove*/
    n[3] && ln(n)
  );
  return v = new yt({
    props: {
      variant: "primary",
      $$slots: { default: [zl] },
      $$scope: { ctx: n }
    }
  }), v.$on(
    "click",
    /*click_handler_2*/
    n[13]
  ), {
    c() {
      e = ie("div"), t = ie("div"), i = ie("span"), s = ie("div"), Ce(o.$$.fragment), r = Pe(), a = ie("div"), Ce(l.$$.fragment), u = Pe(), c = ie("div"), Ce(f.$$.fragment), d = Pe(), h && h.c(), g = Pe(), y = ie("div"), Ce(v.$$.fragment), Be(s, "margin-right", "10px"), Be(a, "margin-right", "40px"), Be(a, "margin-bottom", "8px"), Be(c, "margin-right", "8px"), Ne(i, "class", "model-content svelte-hkn2q1"), Ne(t, "class", "modal-container svelte-hkn2q1"), Ne(e, "class", "modal svelte-hkn2q1"), Ne(e, "id", "model-box-edit");
    },
    m(x, m) {
      Ie(x, e, m), K(e, t), K(t, i), K(i, s), ze(o, s, null), K(i, r), K(i, a), ze(l, a, null), K(i, u), K(i, c), ze(f, c, null), K(i, d), h && h.m(i, null), K(i, g), K(i, y), ze(v, y, null), w = !0;
    },
    p(x, [m]) {
      const k = {};
      m & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      x[0]), m & /*choices*/
      4 && (k.choices = /*choices*/
      x[2]), o.$set(k);
      const _ = {};
      m & /*currentColor*/
      2 && (_.value = /*currentColor*/
      x[1]), l.$set(_);
      const A = {};
      m & /*$$scope*/
      65536 && (A.$$scope = { dirty: m, ctx: x }), f.$set(A), /*showRemove*/
      x[3] ? h ? (h.p(x, m), m & /*showRemove*/
      8 && se(h, 1)) : (h = ln(x), h.c(), se(h, 1), h.m(i, g)) : h && (wl(), fe(h, 1, 1, () => {
        h = null;
      }), gl());
      const B = {};
      m & /*$$scope*/
      65536 && (B.$$scope = { dirty: m, ctx: x }), v.$set(B);
    },
    i(x) {
      w || (se(o.$$.fragment, x), se(l.$$.fragment, x), se(f.$$.fragment, x), se(h), se(v.$$.fragment, x), w = !0);
    },
    o(x) {
      fe(o.$$.fragment, x), fe(l.$$.fragment, x), fe(f.$$.fragment, x), fe(h), fe(v.$$.fragment, x), w = !1;
    },
    d(x) {
      x && Te(e), Se(o), Se(l), Se(f), h && h.d(), Se(v);
    }
  };
}
function El(n, e, t) {
  let { label: i = "" } = e, { currentLabel: s = "" } = e, { choices: o = [] } = e, { choicesColors: r = [] } = e, { color: a = "" } = e, { currentColor: l = "" } = e, { showRemove: u = !0 } = e;
  const c = kl();
  function f(m) {
    c("change", {
      label: s,
      color: l,
      ret: m
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(m) {
    const { detail: k } = m;
    let _ = k;
    Number.isInteger(_) ? (Array.isArray(r) && _ < r.length && t(1, l = r[_]), Array.isArray(o) && _ < o.length && t(0, s = o[_][0])) : t(0, s = _);
  }
  function g(m) {
    const { detail: k } = m;
    t(1, l = k);
  }
  function y(m) {
    d(m), f(1);
  }
  function v(m) {
    switch (m.key) {
      case "Enter":
        f(1);
        break;
    }
  }
  pl(() => {
    document.addEventListener("keydown", v), t(0, s = i), t(1, l = a);
  }), xl(() => {
    document.removeEventListener("keydown", v);
  });
  const w = () => f(0), h = () => f(-1), x = () => f(1);
  return n.$$set = (m) => {
    "label" in m && t(8, i = m.label), "currentLabel" in m && t(0, s = m.currentLabel), "choices" in m && t(2, o = m.choices), "choicesColors" in m && t(9, r = m.choicesColors), "color" in m && t(10, a = m.color), "currentColor" in m && t(1, l = m.currentColor), "showRemove" in m && t(3, u = m.showRemove);
  }, [
    s,
    l,
    o,
    u,
    f,
    d,
    g,
    y,
    i,
    r,
    a,
    w,
    h,
    x
  ];
}
class pn extends bl {
  constructor(e) {
    super(), yl(this, e, El, Bl, vl, {
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
function bt(n, e) {
  if (n.startsWith("rgba"))
    return n.replace(/[\d.]+$/, e.toString());
  const t = n.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [i, s, o] = t;
  return `rgba(${i}, ${s}, ${o}, ${e})`;
}
class gt {
  constructor(e, t, i, s, o, r, a, l, u, c, f, d = "rgb(255, 255, 255)", g = 0.5, y = 25, v = 8, w = 2, h = 4, x = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging) {
        let k = m.clientX - this.offsetMouseX - this.xmin, _ = m.clientY - this.offsetMouseY - this.ymin;
        const A = this.canvasXmax - this.canvasXmin, B = this.canvasYmax - this.canvasYmin;
        k = X(k, -this.xmin, A - this.xmax), _ = X(_, -this.ymin, B - this.ymax), this.xmin += k, this.ymin += _, this.xmax += k, this.ymax += _, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleCreating = (m) => {
      if (this.isCreating) {
        let [k, _] = this.toBoxCoordinates(m.clientX, m.clientY);
        k -= this.offsetMouseX, _ -= this.offsetMouseY, k > this.xmax ? (this.creatingAnchorX == "xmax" && (this.xmin = this.xmax), this.xmax = k, this.creatingAnchorX = "xmin") : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmin" ? this.xmax = k : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmax" ? this.xmin = k : k < this.xmin && (this.creatingAnchorX == "xmin" && (this.xmax = this.xmin), this.xmin = k, this.creatingAnchorX = "xmax"), _ > this.ymax ? (this.creatingAnchorY == "ymax" && (this.ymin = this.ymax), this.ymax = _, this.creatingAnchorY = "ymin") : _ > this.ymin && _ < this.ymax && this.creatingAnchorY == "ymin" ? this.ymax = _ : _ > this.ymin && _ < this.ymax && this.creatingAnchorY == "ymax" ? this.ymin = _ : _ < this.ymin && (this.creatingAnchorY == "ymin" && (this.ymax = this.ymin), this.ymin = _, this.creatingAnchorY = "ymax"), this.updateHandles(), this.renderCallBack();
      }
    }, this.stopCreating = (m) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = this.canvasXmax - this.canvasXmin, _ = this.canvasYmax - this.canvasYmin;
        this.xmin = X(this.xmin, 0, k - this.minSize), this.ymin = X(this.ymin, 0, _ - this.minSize), this.xmax = X(this.xmax, this.minSize, k), this.ymax = X(this.ymax, this.minSize, _), this.minSize > 0 && (this.getWidth() < this.minSize && (this.creatingAnchorX == "xmin" ? this.xmax = this.xmin + this.minSize : this.xmin = this.xmax - this.minSize), this.getHeight() < this.minSize && (this.creatingAnchorY == "ymin" ? this.ymax = this.ymin + this.minSize : this.ymin = this.ymax - this.minSize), this.xmax > k ? (this.xmin -= this.xmax - k, this.xmax = k) : this.xmin < 0 && (this.xmax -= this.xmin, this.xmin = 0), this.ymax > _ ? (this.ymin -= this.ymax - _, this.ymax = _) : this.ymin < 0 && (this.ymax -= this.ymin, this.ymin = 0)), this.updateHandles(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (m) => {
      if (this.isResizing) {
        const k = m.clientX, _ = m.clientY, A = k - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, B = _ - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, C = this.canvasXmax - this.canvasXmin, M = this.canvasYmax - this.canvasYmin;
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
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasXmin = i, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = x, this.label = a, this.isDragging = !1, this.isCreating = !1, this.xmin = l, this.ymin = u, this.xmax = c, this.ymax = f, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = v, this.thickness = w, this.selectedThickness = h, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = y, this.color = d, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (e.beginPath(), [t, i] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, i, this.getWidth(), this.getHeight()), e.fillStyle = bt(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = bt(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const s = e.measureText(this.label).width + 10, o = 20;
      let r = this.xmin, a = this.ymin - o;
      e.fillStyle = "white", [r, a] = this.toCanvasCoordinates(r, a), e.fillRect(r, a, s, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, s, o), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
    e.fillStyle = bt(this.color, 1);
    for (const s of this.resizeHandles)
      [t, i] = this.toCanvasCoordinates(s.xmin, s.ymin), e.fillRect(
        t,
        i,
        s.xmax - s.xmin,
        s.ymax - s.ymin
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
    for (let i = 0; i < this.resizeHandles.length; i++) {
      const s = this.resizeHandles[i];
      if (e >= s.xmin && e <= s.xmax && t >= s.ymin && t <= s.ymax)
        return this.resizingHandleIndex = i, i;
    }
    return -1;
  }
  startCreating(e, t, i) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = i, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
}
const re = [
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
  SvelteComponent: Al,
  append: Ee,
  attr: G,
  binding_callbacks: Ml,
  bubble: on,
  check_outros: Ze,
  create_component: He,
  destroy_component: Xe,
  detach: ce,
  element: ve,
  empty: Rl,
  group_outros: Qe,
  init: Hl,
  insert: ue,
  listen: le,
  mount_component: Ye,
  noop: Xl,
  run_all: xn,
  safe_not_equal: Yl,
  space: Re,
  toggle_class: Fe,
  transition_in: q,
  transition_out: U
} = window.__gradio__svelte__internal, { onMount: ql, onDestroy: Dl, createEventDispatcher: Ll } = window.__gradio__svelte__internal;
function an(n) {
  let e, t, i, s, o, r, a, l, u, c;
  i = new Zn({}), r = new li({});
  let f = (
    /*showRemoveButton*/
    n[1] && rn(n)
  );
  return {
    c() {
      e = ve("span"), t = ve("button"), He(i.$$.fragment), s = Re(), o = ve("button"), He(r.$$.fragment), a = Re(), f && f.c(), G(t, "class", "icon svelte-3rql59"), G(t, "aria-label", "Create box"), Fe(
        t,
        "selected",
        /*mode*/
        n[8] === /*Mode*/
        n[5].creation
      ), G(o, "class", "icon svelte-3rql59"), G(o, "aria-label", "Edit boxes"), Fe(
        o,
        "selected",
        /*mode*/
        n[8] === /*Mode*/
        n[5].drag
      ), G(e, "class", "canvas-control svelte-3rql59");
    },
    m(d, g) {
      ue(d, e, g), Ee(e, t), Ye(i, t, null), Ee(e, s), Ee(e, o), Ye(r, o, null), Ee(e, a), f && f.m(e, null), l = !0, u || (c = [
        le(
          t,
          "click",
          /*click_handler*/
          n[30]
        ),
        le(
          o,
          "click",
          /*click_handler_1*/
          n[31]
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
      2 && q(f, 1)) : (f = rn(d), f.c(), q(f, 1), f.m(e, null)) : f && (Qe(), U(f, 1, 1, () => {
        f = null;
      }), Ze());
    },
    i(d) {
      l || (q(i.$$.fragment, d), q(r.$$.fragment, d), q(f), l = !0);
    },
    o(d) {
      U(i.$$.fragment, d), U(r.$$.fragment, d), U(f), l = !1;
    },
    d(d) {
      d && ce(e), Xe(i), Xe(r), f && f.d(), u = !1, xn(c);
    }
  };
}
function rn(n) {
  let e, t, i, s, o;
  return t = new mi({}), {
    c() {
      e = ve("button"), He(t.$$.fragment), G(e, "class", "icon svelte-3rql59"), G(e, "aria-label", "Remove boxes");
    },
    m(r, a) {
      ue(r, e, a), Ye(t, e, null), i = !0, s || (o = le(
        e,
        "click",
        /*click_handler_2*/
        n[32]
      ), s = !0);
    },
    p: Xl,
    i(r) {
      i || (q(t.$$.fragment, r), i = !0);
    },
    o(r) {
      U(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && ce(e), Xe(t), s = !1, o();
    }
  };
}
function fn(n) {
  let e, t;
  return e = new pn({
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
        n[0].boxes.length ? qe(
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
    n[33]
  ), {
    c() {
      He(e.$$.fragment);
    },
    m(i, s) {
      Ye(e, i, s), t = !0;
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
      i[0].boxes.length ? qe(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(i) {
      t || (q(e.$$.fragment, i), t = !0);
    },
    o(i) {
      U(e.$$.fragment, i), t = !1;
    },
    d(i) {
      Xe(e, i);
    }
  };
}
function cn(n) {
  let e, t;
  return e = new pn({
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
        n[0].boxes.length ? qe(
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
    n[34]
  ), {
    c() {
      He(e.$$.fragment);
    },
    m(i, s) {
      Ye(e, i, s), t = !0;
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
      i[0].boxes.length ? qe(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[7]
        ].color
      ) : ""), e.$set(o);
    },
    i(i) {
      t || (q(e.$$.fragment, i), t = !0);
    },
    o(i) {
      U(e.$$.fragment, i), t = !1;
    },
    d(i) {
      Xe(e, i);
    }
  };
}
function Tl(n) {
  let e, t, i, s, o, r, a, l, u, c = (
    /*interactive*/
    n[2] && an(n)
  ), f = (
    /*editModalVisible*/
    n[9] && fn(n)
  ), d = (
    /*newModalVisible*/
    n[10] && cn(n)
  );
  return {
    c() {
      e = ve("div"), t = ve("canvas"), i = Re(), c && c.c(), s = Re(), f && f.c(), o = Re(), d && d.c(), r = Rl(), G(t, "class", "canvas-annotator svelte-3rql59"), G(e, "class", "canvas-container svelte-3rql59"), G(e, "tabindex", "-1");
    },
    m(g, y) {
      ue(g, e, y), Ee(e, t), n[29](t), ue(g, i, y), c && c.m(g, y), ue(g, s, y), f && f.m(g, y), ue(g, o, y), d && d.m(g, y), ue(g, r, y), a = !0, l || (u = [
        le(
          t,
          "pointerdown",
          /*handlePointerDown*/
          n[11]
        ),
        le(
          t,
          "pointerup",
          /*handlePointerUp*/
          n[12]
        ),
        le(
          t,
          "dblclick",
          /*handleDoubleClick*/
          n[15]
        ),
        le(
          e,
          "focusin",
          /*handleCanvasFocus*/
          n[19]
        ),
        le(
          e,
          "focusout",
          /*handleCanvasBlur*/
          n[20]
        )
      ], l = !0);
    },
    p(g, y) {
      /*interactive*/
      g[2] ? c ? (c.p(g, y), y[0] & /*interactive*/
      4 && q(c, 1)) : (c = an(g), c.c(), q(c, 1), c.m(s.parentNode, s)) : c && (Qe(), U(c, 1, 1, () => {
        c = null;
      }), Ze()), /*editModalVisible*/
      g[9] ? f ? (f.p(g, y), y[0] & /*editModalVisible*/
      512 && q(f, 1)) : (f = fn(g), f.c(), q(f, 1), f.m(o.parentNode, o)) : f && (Qe(), U(f, 1, 1, () => {
        f = null;
      }), Ze()), /*newModalVisible*/
      g[10] ? d ? (d.p(g, y), y[0] & /*newModalVisible*/
      1024 && q(d, 1)) : (d = cn(g), d.c(), q(d, 1), d.m(r.parentNode, r)) : d && (Qe(), U(d, 1, 1, () => {
        d = null;
      }), Ze());
    },
    i(g) {
      a || (q(c), q(f), q(d), a = !0);
    },
    o(g) {
      U(c), U(f), U(d), a = !1;
    },
    d(g) {
      g && (ce(e), ce(i), ce(s), ce(o), ce(r)), n[29](null), c && c.d(g), f && f.d(g), d && d.d(g), l = !1, xn(u);
    }
  };
}
function wt(n) {
  var e = parseInt(n.slice(1, 3), 16), t = parseInt(n.slice(3, 5), 16), i = parseInt(n.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + i + ")";
}
function qe(n) {
  const e = n.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), i = parseInt(e[1]), s = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | i << 8 | s).toString(16).slice(1);
}
function Il(n, e, t) {
  var i;
  (function(b) {
    b[b.creation = 0] = "creation", b[b.drag = 1] = "drag";
  })(i || (i = {}));
  let { imageUrl: s = null } = e, { interactive: o } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 25 } = e, { handleSize: l } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: f } = e, { choices: d = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: y = !1 } = e, { singleBox: v = !1 } = e, { showRemoveButton: w = null } = e;
  w === null && (w = y);
  let h, x, m = null, k = -1, _ = i.drag;
  f !== null && f.boxes.length == 0 && (_ = i.creation);
  let A = 0, B = 0, C = 0, M = 0, Y = 1, j = 0, S = 0, J = !1, Q = !1;
  const $ = Ll();
  function W() {
    if (x) {
      x.clearRect(0, 0, h.width, h.height), m !== null && x.drawImage(m, A, B, j, S);
      for (const b of f.boxes.slice().reverse())
        b.render(x);
    }
  }
  function oe(b) {
    t(7, k = b), f.boxes.forEach((E) => {
      E.setSelected(!1);
    }), b >= 0 && b < f.boxes.length && f.boxes[b].setSelected(!0), W();
  }
  function lt(b) {
    o && (b.target instanceof Element && b.target.hasPointerCapture(b.pointerId) && b.target.releasePointerCapture(b.pointerId), _ === i.creation ? at(b) : _ === i.drag && ot(b));
  }
  function ot(b) {
    const E = h.getBoundingClientRect(), H = b.clientX - E.left, V = b.clientY - E.top;
    for (const [L, D] of f.boxes.entries()) {
      const Xt = D.indexOfPointInsideHandle(H, V);
      if (Xt >= 0) {
        oe(L), D.startResize(Xt, b);
        return;
      }
    }
    for (const [L, D] of f.boxes.entries())
      if (D.isPointInsideBox(H, V)) {
        oe(L), D.startDrag(b);
        return;
      }
    oe(-1);
  }
  function z(b) {
    $("change");
  }
  function Oe(b) {
    if (o)
      switch (b.key) {
        case "Delete":
          he();
          break;
      }
  }
  function at(b) {
    const E = h.getBoundingClientRect(), H = (b.clientX - E.left - A) / Y, V = (b.clientY - E.top - B) / Y;
    let L;
    g.length > 0 ? L = wt(g[0]) : v ? f.boxes.length > 0 ? L = f.boxes[0].color : L = re[0] : L = re[f.boxes.length % re.length];
    let D = new gt(W, Rt, A, B, C, M, "", H, V, H, V, L, r, a, l, u, c);
    D.startCreating(b, E.left, E.top), v ? t(0, f.boxes = [D], f) : t(0, f.boxes = [D, ...f.boxes], f), oe(0), W(), $("change");
  }
  function At() {
    t(8, _ = i.creation), t(6, h.style.cursor = "crosshair", h);
  }
  function Mt() {
    t(8, _ = i.drag), t(6, h.style.cursor = "default", h);
  }
  function Rt() {
    k >= 0 && k < f.boxes.length && (f.boxes[k].getArea() < 1 ? he() : y || t(10, Q = !0));
  }
  function Cn() {
    k >= 0 && k < f.boxes.length && !y && t(9, J = !0);
  }
  function Sn(b) {
    o && Cn();
  }
  function zn(b) {
    t(9, J = !1);
    const { detail: E } = b;
    let H = E.label, V = E.color, L = E.ret;
    if (k >= 0 && k < f.boxes.length) {
      let D = f.boxes[k];
      L == 1 ? (D.label = H, D.color = wt(V), W(), $("change")) : L == -1 && he();
    }
  }
  function Bn(b) {
    t(10, Q = !1);
    const { detail: E } = b;
    let H = E.label, V = E.color, L = E.ret;
    if (k >= 0 && k < f.boxes.length) {
      let D = f.boxes[k];
      L == 1 ? (D.label = H, D.color = wt(V), W(), $("change")) : he();
    }
  }
  function he() {
    k >= 0 && k < f.boxes.length && (f.boxes.splice(k, 1), oe(-1), $("change"));
  }
  function Ue() {
    if (h) {
      if (Y = 1, t(6, h.width = h.clientWidth, h), m !== null)
        if (m.width > h.width)
          Y = h.width / m.width, j = m.width * Y, S = m.height * Y, A = 0, B = 0, C = j, M = S, t(6, h.height = S, h);
        else {
          j = m.width, S = m.height;
          var b = (h.width - j) / 2;
          A = b, B = 0, C = b + j, M = m.height, t(6, h.height = S, h);
        }
      else
        A = 0, B = 0, C = h.width, M = h.height, t(6, h.height = h.clientHeight, h);
      if (C > 0 && M > 0)
        for (const E of f.boxes)
          E.canvasXmin = A, E.canvasYmin = B, E.canvasXmax = C, E.canvasYmax = M, E.setScaleFactor(Y);
      W(), $("change");
    }
  }
  const En = new ResizeObserver(Ue);
  function An() {
    for (let b = 0; b < f.boxes.length; b++) {
      let E = f.boxes[b];
      if (!(E instanceof gt)) {
        let H = "", V = "";
        E.hasOwnProperty("color") ? (H = E.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = re[b % re.length], E.hasOwnProperty("label") && (V = E.label), E = new gt(W, Rt, A, B, C, M, V, E.xmin, E.ymin, E.xmax, E.ymax, H, r, a, l, u, c), t(0, f.boxes[b] = E, f);
      }
    }
  }
  function Ht() {
    s !== null && (m === null || m.src != s) && (m = new Image(), m.src = s, m.onload = function() {
      Ue(), W();
    });
  }
  ql(() => {
    if (Array.isArray(d) && d.length > 0 && (!Array.isArray(g) || g.length == 0))
      for (let b = 0; b < d.length; b++) {
        let E = re[b % re.length];
        g.push(qe(E));
      }
    x = h.getContext("2d"), En.observe(h), Ht(), Ue(), W();
  });
  function Mn() {
    document.addEventListener("keydown", Oe);
  }
  function Rn() {
    document.removeEventListener("keydown", Oe);
  }
  Dl(() => {
    document.removeEventListener("keydown", Oe);
  });
  function Hn(b) {
    Ml[b ? "unshift" : "push"](() => {
      h = b, t(6, h);
    });
  }
  const Xn = () => At(), Yn = () => Mt(), qn = () => he();
  function Dn(b) {
    on.call(this, n, b);
  }
  function Ln(b) {
    on.call(this, n, b);
  }
  return n.$$set = (b) => {
    "imageUrl" in b && t(21, s = b.imageUrl), "interactive" in b && t(2, o = b.interactive), "boxAlpha" in b && t(22, r = b.boxAlpha), "boxMinSize" in b && t(23, a = b.boxMinSize), "handleSize" in b && t(24, l = b.handleSize), "boxThickness" in b && t(25, u = b.boxThickness), "boxSelectedThickness" in b && t(26, c = b.boxSelectedThickness), "value" in b && t(0, f = b.value), "choices" in b && t(3, d = b.choices), "choicesColors" in b && t(4, g = b.choicesColors), "disableEditBoxes" in b && t(27, y = b.disableEditBoxes), "singleBox" in b && t(28, v = b.singleBox), "showRemoveButton" in b && t(1, w = b.showRemoveButton);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*value*/
    1 && (Ht(), An(), Ue(), W());
  }, [
    f,
    w,
    o,
    d,
    g,
    i,
    h,
    k,
    _,
    J,
    Q,
    lt,
    z,
    At,
    Mt,
    Sn,
    zn,
    Bn,
    he,
    Mn,
    Rn,
    s,
    r,
    a,
    l,
    u,
    c,
    y,
    v,
    Hn,
    Xn,
    Yn,
    qn,
    Dn,
    Ln
  ];
}
class Ol extends Al {
  constructor(e) {
    super(), Hl(
      this,
      e,
      Il,
      Tl,
      Yl,
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
  SvelteComponent: Ul,
  add_flush_callback: Wl,
  bind: Vl,
  binding_callbacks: jl,
  create_component: Nl,
  destroy_component: Pl,
  init: Fl,
  mount_component: Kl,
  safe_not_equal: Gl,
  transition_in: Jl,
  transition_out: Zl
} = window.__gradio__svelte__internal, { createEventDispatcher: Ql } = window.__gradio__svelte__internal;
function $l(n) {
  let e, t, i;
  function s(r) {
    n[16](r);
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
    singleBox: (
      /*singleBox*/
      n[10]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      n[11]
    ),
    imageUrl: (
      /*resolved_src*/
      n[12]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (o.value = /*value*/
    n[0]), e = new Ol({ props: o }), jl.push(() => Vl(e, "value", s)), e.$on(
      "change",
      /*change_handler*/
      n[17]
    ), {
      c() {
        Nl(e.$$.fragment);
      },
      m(r, a) {
        Kl(e, r, a), i = !0;
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
        r[9]), a & /*singleBox*/
        1024 && (l.singleBox = /*singleBox*/
        r[10]), a & /*showRemoveButton*/
        2048 && (l.showRemoveButton = /*showRemoveButton*/
        r[11]), a & /*resolved_src*/
        4096 && (l.imageUrl = /*resolved_src*/
        r[12]), !t && a & /*value*/
        1 && (t = !0, l.value = /*value*/
        r[0], Wl(() => t = !1)), e.$set(l);
      },
      i(r) {
        i || (Jl(e.$$.fragment, r), i = !0);
      },
      o(r) {
        Zl(e.$$.fragment, r), i = !1;
      },
      d(r) {
        Pl(e, r);
      }
    }
  );
}
function eo(n, e, t) {
  let { src: i = void 0 } = e, { interactive: s } = e, { boxesAlpha: o } = e, { labelList: r } = e, { labelColors: a } = e, { boxMinSize: l } = e, { handleSize: u } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: d } = e, { disableEditBoxes: g } = e, { singleBox: y } = e, { showRemoveButton: v } = e, w, h;
  const x = Ql();
  function m(_) {
    d = _, t(0, d);
  }
  const k = () => x("change");
  return n.$$set = (_) => {
    "src" in _ && t(14, i = _.src), "interactive" in _ && t(1, s = _.interactive), "boxesAlpha" in _ && t(2, o = _.boxesAlpha), "labelList" in _ && t(3, r = _.labelList), "labelColors" in _ && t(4, a = _.labelColors), "boxMinSize" in _ && t(5, l = _.boxMinSize), "handleSize" in _ && t(6, u = _.handleSize), "boxThickness" in _ && t(7, c = _.boxThickness), "boxSelectedThickness" in _ && t(8, f = _.boxSelectedThickness), "value" in _ && t(0, d = _.value), "disableEditBoxes" in _ && t(9, g = _.disableEditBoxes), "singleBox" in _ && t(10, y = _.singleBox), "showRemoveButton" in _ && t(11, v = _.showRemoveButton);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*src, latest_src*/
    49152) {
      t(12, w = i), t(15, h = i);
      const _ = i;
      jn(_).then((A) => {
        h === _ && t(12, w = A);
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
    y,
    v,
    w,
    x,
    i,
    h,
    m,
    k
  ];
}
class to extends Ul {
  constructor(e) {
    super(), Fl(this, e, eo, $l, Gl, {
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
const {
  SvelteComponent: no,
  attr: io,
  check_outros: so,
  create_component: lo,
  destroy_component: oo,
  detach: ao,
  element: ro,
  group_outros: fo,
  init: co,
  insert: uo,
  mount_component: ho,
  safe_not_equal: mo,
  toggle_class: ne,
  transition_in: $e,
  transition_out: St
} = window.__gradio__svelte__internal;
function un(n) {
  let e, t;
  return e = new to({
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
      lo(e.$$.fragment);
    },
    m(i, s) {
      ho(e, i, s), t = !0;
    },
    p(i, s) {
      const o = {};
      s & /*samples_dir, value*/
      3 && (o.src = /*samples_dir*/
      i[1] + /*value*/
      i[0].path), e.$set(o);
    },
    i(i) {
      t || ($e(e.$$.fragment, i), t = !0);
    },
    o(i) {
      St(e.$$.fragment, i), t = !1;
    },
    d(i) {
      oo(e, i);
    }
  };
}
function _o(n) {
  let e, t, i = (
    /*value*/
    n[0] && un(n)
  );
  return {
    c() {
      e = ro("div"), i && i.c(), io(e, "class", "container svelte-1sgcyba"), ne(
        e,
        "table",
        /*type*/
        n[2] === "table"
      ), ne(
        e,
        "gallery",
        /*type*/
        n[2] === "gallery"
      ), ne(
        e,
        "selected",
        /*selected*/
        n[3]
      ), ne(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    m(s, o) {
      uo(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      /*value*/
      s[0] ? i ? (i.p(s, o), o & /*value*/
      1 && $e(i, 1)) : (i = un(s), i.c(), $e(i, 1), i.m(e, null)) : i && (fo(), St(i, 1, 1, () => {
        i = null;
      }), so()), (!t || o & /*type*/
      4) && ne(
        e,
        "table",
        /*type*/
        s[2] === "table"
      ), (!t || o & /*type*/
      4) && ne(
        e,
        "gallery",
        /*type*/
        s[2] === "gallery"
      ), (!t || o & /*selected*/
      8) && ne(
        e,
        "selected",
        /*selected*/
        s[3]
      ), (!t || o & /*value*/
      1) && ne(
        e,
        "border",
        /*value*/
        s[0]
      );
    },
    i(s) {
      t || ($e(i), t = !0);
    },
    o(s) {
      St(i), t = !1;
    },
    d(s) {
      s && ao(e), i && i.d();
    }
  };
}
function bo(n, e, t) {
  let { value: i } = e, { samples_dir: s } = e, { type: o } = e, { selected: r = !1 } = e;
  return n.$$set = (a) => {
    "value" in a && t(0, i = a.value), "samples_dir" in a && t(1, s = a.samples_dir), "type" in a && t(2, o = a.type), "selected" in a && t(3, r = a.selected);
  }, [i, s, o, r];
}
class wo extends no {
  constructor(e) {
    super(), co(this, e, bo, _o, mo, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  wo as default
};
