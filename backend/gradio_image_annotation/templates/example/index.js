const { setContext: Su, getContext: rr } = window.__gradio__svelte__internal, sr = "WORKER_PROXY_CONTEXT_KEY";
function or() {
  return rr(sr);
}
function ar(e) {
  return e.host === window.location.host || e.host === "localhost:7860" || e.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  e.host === "lite.local";
}
function lr(e, t) {
  const n = t.toLowerCase();
  for (const [i, r] of Object.entries(e))
    if (i.toLowerCase() === n)
      return r;
}
function ur(e) {
  if (e == null)
    return !1;
  const t = new URL(e);
  return !(!ar(t) || t.protocol !== "http:" && t.protocol !== "https:");
}
async function fr(e) {
  if (e == null || !ur(e))
    return e;
  const t = or();
  if (t == null)
    return e;
  const i = new URL(e).pathname;
  return t.httpRequest({
    method: "GET",
    path: i,
    headers: {},
    query_string: ""
  }).then((r) => {
    if (r.status !== 200)
      throw new Error(`Failed to get file ${i} from the Wasm worker.`);
    const s = new Blob([r.body], {
      type: lr(r.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: hr,
  append: Ct,
  attr: X,
  detach: cr,
  init: mr,
  insert: _r,
  noop: Pt,
  safe_not_equal: dr,
  set_style: Z,
  svg_element: Je
} = window.__gradio__svelte__internal;
function br(e) {
  let t, n, i, r;
  return {
    c() {
      t = Je("svg"), n = Je("g"), i = Je("path"), r = Je("path"), X(i, "d", "M18,6L6.087,17.913"), Z(i, "fill", "none"), Z(i, "fill-rule", "nonzero"), Z(i, "stroke-width", "2px"), X(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), X(r, "d", "M4.364,4.364L19.636,19.636"), Z(r, "fill", "none"), Z(r, "fill-rule", "nonzero"), Z(r, "stroke-width", "2px"), X(t, "width", "100%"), X(t, "height", "100%"), X(t, "viewBox", "0 0 24 24"), X(t, "version", "1.1"), X(t, "xmlns", "http://www.w3.org/2000/svg"), X(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), X(t, "xml:space", "preserve"), X(t, "stroke", "currentColor"), Z(t, "fill-rule", "evenodd"), Z(t, "clip-rule", "evenodd"), Z(t, "stroke-linecap", "round"), Z(t, "stroke-linejoin", "round");
    },
    m(s, u) {
      _r(s, t, u), Ct(t, n), Ct(n, i), Ct(t, r);
    },
    p: Pt,
    i: Pt,
    o: Pt,
    d(s) {
      s && cr(t);
    }
  };
}
class gr extends hr {
  constructor(t) {
    super(), mr(this, t, null, br, dr, {});
  }
}
const {
  SvelteComponent: pr,
  append: vr,
  attr: fe,
  detach: yr,
  init: Er,
  insert: wr,
  noop: It,
  safe_not_equal: xr,
  svg_element: En
} = window.__gradio__svelte__internal;
function Sr(e) {
  let t, n;
  return {
    c() {
      t = En("svg"), n = En("path"), fe(n, "d", "M5 8l4 4 4-4z"), fe(t, "class", "dropdown-arrow svelte-145leq6"), fe(t, "xmlns", "http://www.w3.org/2000/svg"), fe(t, "width", "100%"), fe(t, "height", "100%"), fe(t, "viewBox", "0 0 18 18");
    },
    m(i, r) {
      wr(i, t, r), vr(t, n);
    },
    p: It,
    i: It,
    o: It,
    d(i) {
      i && yr(t);
    }
  };
}
class Hr extends pr {
  constructor(t) {
    super(), Er(this, t, null, Sr, xr, {});
  }
}
const {
  SvelteComponent: Ar,
  append: Br,
  attr: V,
  detach: Tr,
  init: Cr,
  insert: Pr,
  noop: Nt,
  safe_not_equal: Ir,
  svg_element: wn
} = window.__gradio__svelte__internal;
function Nr(e) {
  let t, n;
  return {
    c() {
      t = wn("svg"), n = wn("path"), V(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), V(t, "xmlns", "http://www.w3.org/2000/svg"), V(t, "width", "100%"), V(t, "height", "100%"), V(t, "viewBox", "0 0 24 24"), V(t, "fill", "none"), V(t, "stroke", "currentColor"), V(t, "stroke-width", "1.5"), V(t, "stroke-linecap", "round"), V(t, "stroke-linejoin", "round"), V(t, "class", "feather feather-edit-2");
    },
    m(i, r) {
      Pr(i, t, r), Br(t, n);
    },
    p: Nt,
    i: Nt,
    o: Nt,
    d(i) {
      i && Tr(t);
    }
  };
}
class Or extends Ar {
  constructor(t) {
    super(), Cr(this, t, null, Nr, Ir, {});
  }
}
const {
  SvelteComponent: Lr,
  append: xn,
  attr: k,
  detach: Mr,
  init: Rr,
  insert: kr,
  noop: Ot,
  safe_not_equal: Dr,
  set_style: te,
  svg_element: Lt
} = window.__gradio__svelte__internal;
function Ur(e) {
  let t, n, i;
  return {
    c() {
      t = Lt("svg"), n = Lt("line"), i = Lt("line"), k(n, "x1", "4"), k(n, "y1", "12"), k(n, "x2", "20"), k(n, "y2", "12"), te(n, "fill", "none"), te(n, "stroke-width", "2px"), k(i, "x1", "12"), k(i, "y1", "4"), k(i, "x2", "12"), k(i, "y2", "20"), te(i, "fill", "none"), te(i, "stroke-width", "2px"), k(t, "width", "100%"), k(t, "height", "100%"), k(t, "viewBox", "0 0 24 24"), k(t, "version", "1.1"), k(t, "xmlns", "http://www.w3.org/2000/svg"), k(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), k(t, "xml:space", "preserve"), k(t, "stroke", "currentColor"), te(t, "fill-rule", "evenodd"), te(t, "clip-rule", "evenodd"), te(t, "stroke-linecap", "round"), te(t, "stroke-linejoin", "round");
    },
    m(r, s) {
      kr(r, t, s), xn(t, n), xn(t, i);
    },
    p: Ot,
    i: Ot,
    o: Ot,
    d(r) {
      r && Mr(t);
    }
  };
}
class Gr extends Lr {
  constructor(t) {
    super(), Rr(this, t, null, Ur, Dr, {});
  }
}
const {
  SvelteComponent: Fr,
  attr: zr,
  create_slot: jr,
  detach: Xr,
  element: Vr,
  get_all_dirty_from_scope: qr,
  get_slot_changes: Wr,
  init: Yr,
  insert: Zr,
  safe_not_equal: Qr,
  transition_in: Jr,
  transition_out: Kr,
  update_slot_base: $r
} = window.__gradio__svelte__internal;
function es(e) {
  let t, n;
  const i = (
    /*#slots*/
    e[1].default
  ), r = jr(
    i,
    e,
    /*$$scope*/
    e[0],
    null
  );
  return {
    c() {
      t = Vr("div"), r && r.c(), zr(t, "class", "svelte-1hnfib2");
    },
    m(s, u) {
      Zr(s, t, u), r && r.m(t, null), n = !0;
    },
    p(s, [u]) {
      r && r.p && (!n || u & /*$$scope*/
      1) && $r(
        r,
        i,
        s,
        /*$$scope*/
        s[0],
        n ? Wr(
          i,
          /*$$scope*/
          s[0],
          u,
          null
        ) : qr(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (Jr(r, s), n = !0);
    },
    o(s) {
      Kr(r, s), n = !1;
    },
    d(s) {
      s && Xr(t), r && r.d(s);
    }
  };
}
function ts(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t;
  return e.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, i];
}
class ns extends Fr {
  constructor(t) {
    super(), Yr(this, t, ts, es, Qr, {});
  }
}
const {
  SvelteComponent: is,
  attr: Sn,
  check_outros: rs,
  create_component: ss,
  create_slot: os,
  destroy_component: as,
  detach: lt,
  element: ls,
  empty: us,
  get_all_dirty_from_scope: fs,
  get_slot_changes: hs,
  group_outros: cs,
  init: ms,
  insert: ut,
  mount_component: _s,
  safe_not_equal: ds,
  set_data: bs,
  space: gs,
  text: ps,
  toggle_class: he,
  transition_in: Le,
  transition_out: ft,
  update_slot_base: vs
} = window.__gradio__svelte__internal;
function Hn(e) {
  let t, n;
  return t = new ns({
    props: {
      $$slots: { default: [ys] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ss(t.$$.fragment);
    },
    m(i, r) {
      _s(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, info*/
      10 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Le(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ft(t.$$.fragment, i), n = !1;
    },
    d(i) {
      as(t, i);
    }
  };
}
function ys(e) {
  let t;
  return {
    c() {
      t = ps(
        /*info*/
        e[1]
      );
    },
    m(n, i) {
      ut(n, t, i);
    },
    p(n, i) {
      i & /*info*/
      2 && bs(
        t,
        /*info*/
        n[1]
      );
    },
    d(n) {
      n && lt(t);
    }
  };
}
function Es(e) {
  let t, n, i, r;
  const s = (
    /*#slots*/
    e[2].default
  ), u = os(
    s,
    e,
    /*$$scope*/
    e[3],
    null
  );
  let o = (
    /*info*/
    e[1] && Hn(e)
  );
  return {
    c() {
      t = ls("span"), u && u.c(), n = gs(), o && o.c(), i = us(), Sn(t, "data-testid", "block-info"), Sn(t, "class", "svelte-22c38v"), he(t, "sr-only", !/*show_label*/
      e[0]), he(t, "hide", !/*show_label*/
      e[0]), he(
        t,
        "has-info",
        /*info*/
        e[1] != null
      );
    },
    m(a, f) {
      ut(a, t, f), u && u.m(t, null), ut(a, n, f), o && o.m(a, f), ut(a, i, f), r = !0;
    },
    p(a, [f]) {
      u && u.p && (!r || f & /*$$scope*/
      8) && vs(
        u,
        s,
        a,
        /*$$scope*/
        a[3],
        r ? hs(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : fs(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!r || f & /*show_label*/
      1) && he(t, "sr-only", !/*show_label*/
      a[0]), (!r || f & /*show_label*/
      1) && he(t, "hide", !/*show_label*/
      a[0]), (!r || f & /*info*/
      2) && he(
        t,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? o ? (o.p(a, f), f & /*info*/
      2 && Le(o, 1)) : (o = Hn(a), o.c(), Le(o, 1), o.m(i.parentNode, i)) : o && (cs(), ft(o, 1, 1, () => {
        o = null;
      }), rs());
    },
    i(a) {
      r || (Le(u, a), Le(o), r = !0);
    },
    o(a) {
      ft(u, a), ft(o), r = !1;
    },
    d(a) {
      a && (lt(t), lt(n), lt(i)), u && u.d(a), o && o.d(a);
    }
  };
}
function ws(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { show_label: s = !0 } = t, { info: u = void 0 } = t;
  return e.$$set = (o) => {
    "show_label" in o && n(0, s = o.show_label), "info" in o && n(1, u = o.info), "$$scope" in o && n(3, r = o.$$scope);
  }, [s, u, i, r];
}
class hi extends is {
  constructor(t) {
    super(), ms(this, t, ws, Es, ds, { show_label: 0, info: 1 });
  }
}
const xs = [
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
], An = {
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
xs.reduce(
  (e, { color: t, primary: n, secondary: i }) => ({
    ...e,
    [t]: {
      primary: An[t][n],
      secondary: An[t][i]
    }
  }),
  {}
);
const {
  SvelteComponent: Ss,
  append: Bn,
  attr: Mt,
  bubble: Tn,
  create_component: Hs,
  destroy_component: As,
  detach: ci,
  element: Cn,
  init: Bs,
  insert: mi,
  listen: Rt,
  mount_component: Ts,
  run_all: Cs,
  safe_not_equal: Ps,
  set_data: Is,
  set_input_value: Pn,
  space: Ns,
  text: Os,
  transition_in: Ls,
  transition_out: Ms
} = window.__gradio__svelte__internal, { createEventDispatcher: Rs, afterUpdate: ks } = window.__gradio__svelte__internal;
function Ds(e) {
  let t;
  return {
    c() {
      t = Os(
        /*label*/
        e[1]
      );
    },
    m(n, i) {
      mi(n, t, i);
    },
    p(n, i) {
      i & /*label*/
      2 && Is(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && ci(t);
    }
  };
}
function Us(e) {
  let t, n, i, r, s, u, o;
  return n = new hi({
    props: {
      show_label: (
        /*show_label*/
        e[4]
      ),
      info: (
        /*info*/
        e[2]
      ),
      $$slots: { default: [Ds] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = Cn("label"), Hs(n.$$.fragment), i = Ns(), r = Cn("input"), Mt(r, "type", "color"), r.disabled = /*disabled*/
      e[3], Mt(r, "class", "svelte-16l8u73"), Mt(t, "class", "block");
    },
    m(a, f) {
      mi(a, t, f), Ts(n, t, null), Bn(t, i), Bn(t, r), Pn(
        r,
        /*value*/
        e[0]
      ), s = !0, u || (o = [
        Rt(
          r,
          "input",
          /*input_input_handler*/
          e[8]
        ),
        Rt(
          r,
          "focus",
          /*focus_handler*/
          e[6]
        ),
        Rt(
          r,
          "blur",
          /*blur_handler*/
          e[7]
        )
      ], u = !0);
    },
    p(a, [f]) {
      const l = {};
      f & /*show_label*/
      16 && (l.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (l.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (l.$$scope = { dirty: f, ctx: a }), n.$set(l), (!s || f & /*disabled*/
      8) && (r.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && Pn(
        r,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (Ls(n.$$.fragment, a), s = !0);
    },
    o(a) {
      Ms(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && ci(t), As(n), u = !1, Cs(o);
    }
  };
}
function Gs(e, t, n) {
  let { value: i = "#000000" } = t, { value_is_output: r = !1 } = t, { label: s } = t, { info: u = void 0 } = t, { disabled: o = !1 } = t, { show_label: a = !0 } = t;
  const f = Rs();
  function l() {
    f("change", i), r || f("input");
  }
  ks(() => {
    n(5, r = !1);
  });
  function h(b) {
    Tn.call(this, e, b);
  }
  function c(b) {
    Tn.call(this, e, b);
  }
  function _() {
    i = this.value, n(0, i);
  }
  return e.$$set = (b) => {
    "value" in b && n(0, i = b.value), "value_is_output" in b && n(5, r = b.value_is_output), "label" in b && n(1, s = b.label), "info" in b && n(2, u = b.info), "disabled" in b && n(3, o = b.disabled), "show_label" in b && n(4, a = b.show_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && l();
  }, [
    i,
    s,
    u,
    o,
    a,
    r,
    h,
    c,
    _
  ];
}
class Fs extends Ss {
  constructor(t) {
    super(), Bs(this, t, Gs, Us, Ps, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
function we() {
}
function zs(e) {
  return e();
}
function js(e) {
  e.forEach(zs);
}
function Xs(e) {
  return typeof e == "function";
}
function Vs(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function qs(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return we;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function In(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function Ws(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Nn(e, { delay: t = 0, duration: n = 400, easing: i = Ws, x: r = 0, y: s = 0, opacity: u = 0 } = {}) {
  const o = getComputedStyle(e), a = +o.opacity, f = o.transform === "none" ? "" : o.transform, l = a * (1 - u), [h, c] = In(r), [_, b] = In(s);
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (g, d) => `
			transform: ${f} translate(${(1 - g) * h}${c}, ${(1 - g) * _}${b});
			opacity: ${a - l * d}`
  };
}
const ce = [];
function Ys(e, t) {
  return {
    subscribe: yt(e, t).subscribe
  };
}
function yt(e, t = we) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (Vs(e, o) && (e = o, n)) {
      const a = !ce.length;
      for (const f of i)
        f[1](), ce.push(f, e);
      if (a) {
        for (let f = 0; f < ce.length; f += 2)
          ce[f][0](ce[f + 1]);
        ce.length = 0;
      }
    }
  }
  function s(o) {
    r(o(e));
  }
  function u(o, a = we) {
    const f = [o, a];
    return i.add(f), i.size === 1 && (n = t(r, s) || we), o(e), () => {
      i.delete(f), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: u };
}
function Be(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return Ys(n, (u, o) => {
    let a = !1;
    const f = [];
    let l = 0, h = we;
    const c = () => {
      if (l)
        return;
      h();
      const b = t(i ? f[0] : f, u, o);
      s ? u(b) : h = Xs(b) ? b : we;
    }, _ = r.map(
      (b, g) => qs(
        b,
        (d) => {
          f[g] = d, l &= ~(1 << g), a && c();
        },
        () => {
          l |= 1 << g;
        }
      )
    );
    return a = !0, c(), function() {
      js(_), h(), a = !1;
    };
  });
}
new Intl.Collator(0, { numeric: 1 }).compare;
const {
  SvelteComponent: Zs,
  append: _i,
  attr: N,
  bubble: Qs,
  check_outros: Js,
  create_slot: di,
  detach: Ve,
  element: Et,
  empty: Ks,
  get_all_dirty_from_scope: bi,
  get_slot_changes: gi,
  group_outros: $s,
  init: eo,
  insert: qe,
  listen: to,
  safe_not_equal: no,
  set_style: F,
  space: pi,
  src_url_equal: _t,
  toggle_class: ye,
  transition_in: dt,
  transition_out: bt,
  update_slot_base: vi
} = window.__gradio__svelte__internal;
function io(e) {
  let t, n, i, r, s, u, o = (
    /*icon*/
    e[7] && On(e)
  );
  const a = (
    /*#slots*/
    e[12].default
  ), f = di(
    a,
    e,
    /*$$scope*/
    e[11],
    null
  );
  return {
    c() {
      t = Et("button"), o && o.c(), n = pi(), f && f.c(), N(t, "class", i = /*size*/
      e[4] + " " + /*variant*/
      e[3] + " " + /*elem_classes*/
      e[1].join(" ") + " svelte-8huxfn"), N(
        t,
        "id",
        /*elem_id*/
        e[0]
      ), t.disabled = /*disabled*/
      e[8], ye(t, "hidden", !/*visible*/
      e[2]), F(
        t,
        "flex-grow",
        /*scale*/
        e[9]
      ), F(
        t,
        "width",
        /*scale*/
        e[9] === 0 ? "fit-content" : null
      ), F(t, "min-width", typeof /*min_width*/
      e[10] == "number" ? `calc(min(${/*min_width*/
      e[10]}px, 100%))` : null);
    },
    m(l, h) {
      qe(l, t, h), o && o.m(t, null), _i(t, n), f && f.m(t, null), r = !0, s || (u = to(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), s = !0);
    },
    p(l, h) {
      /*icon*/
      l[7] ? o ? o.p(l, h) : (o = On(l), o.c(), o.m(t, n)) : o && (o.d(1), o = null), f && f.p && (!r || h & /*$$scope*/
      2048) && vi(
        f,
        a,
        l,
        /*$$scope*/
        l[11],
        r ? gi(
          a,
          /*$$scope*/
          l[11],
          h,
          null
        ) : bi(
          /*$$scope*/
          l[11]
        ),
        null
      ), (!r || h & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn")) && N(t, "class", i), (!r || h & /*elem_id*/
      1) && N(
        t,
        "id",
        /*elem_id*/
        l[0]
      ), (!r || h & /*disabled*/
      256) && (t.disabled = /*disabled*/
      l[8]), (!r || h & /*size, variant, elem_classes, visible*/
      30) && ye(t, "hidden", !/*visible*/
      l[2]), h & /*scale*/
      512 && F(
        t,
        "flex-grow",
        /*scale*/
        l[9]
      ), h & /*scale*/
      512 && F(
        t,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), h & /*min_width*/
      1024 && F(t, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    i(l) {
      r || (dt(f, l), r = !0);
    },
    o(l) {
      bt(f, l), r = !1;
    },
    d(l) {
      l && Ve(t), o && o.d(), f && f.d(l), s = !1, u();
    }
  };
}
function ro(e) {
  let t, n, i, r, s = (
    /*icon*/
    e[7] && Ln(e)
  );
  const u = (
    /*#slots*/
    e[12].default
  ), o = di(
    u,
    e,
    /*$$scope*/
    e[11],
    null
  );
  return {
    c() {
      t = Et("a"), s && s.c(), n = pi(), o && o.c(), N(
        t,
        "href",
        /*link*/
        e[6]
      ), N(t, "rel", "noopener noreferrer"), N(
        t,
        "aria-disabled",
        /*disabled*/
        e[8]
      ), N(t, "class", i = /*size*/
      e[4] + " " + /*variant*/
      e[3] + " " + /*elem_classes*/
      e[1].join(" ") + " svelte-8huxfn"), N(
        t,
        "id",
        /*elem_id*/
        e[0]
      ), ye(t, "hidden", !/*visible*/
      e[2]), ye(
        t,
        "disabled",
        /*disabled*/
        e[8]
      ), F(
        t,
        "flex-grow",
        /*scale*/
        e[9]
      ), F(
        t,
        "pointer-events",
        /*disabled*/
        e[8] ? "none" : null
      ), F(
        t,
        "width",
        /*scale*/
        e[9] === 0 ? "fit-content" : null
      ), F(t, "min-width", typeof /*min_width*/
      e[10] == "number" ? `calc(min(${/*min_width*/
      e[10]}px, 100%))` : null);
    },
    m(a, f) {
      qe(a, t, f), s && s.m(t, null), _i(t, n), o && o.m(t, null), r = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = Ln(a), s.c(), s.m(t, n)) : s && (s.d(1), s = null), o && o.p && (!r || f & /*$$scope*/
      2048) && vi(
        o,
        u,
        a,
        /*$$scope*/
        a[11],
        r ? gi(
          u,
          /*$$scope*/
          a[11],
          f,
          null
        ) : bi(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!r || f & /*link*/
      64) && N(
        t,
        "href",
        /*link*/
        a[6]
      ), (!r || f & /*disabled*/
      256) && N(
        t,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!r || f & /*size, variant, elem_classes*/
      26 && i !== (i = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && N(t, "class", i), (!r || f & /*elem_id*/
      1) && N(
        t,
        "id",
        /*elem_id*/
        a[0]
      ), (!r || f & /*size, variant, elem_classes, visible*/
      30) && ye(t, "hidden", !/*visible*/
      a[2]), (!r || f & /*size, variant, elem_classes, disabled*/
      282) && ye(
        t,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && F(
        t,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && F(
        t,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && F(
        t,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && F(t, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      r || (dt(o, a), r = !0);
    },
    o(a) {
      bt(o, a), r = !1;
    },
    d(a) {
      a && Ve(t), s && s.d(), o && o.d(a);
    }
  };
}
function On(e) {
  let t, n, i;
  return {
    c() {
      t = Et("img"), N(t, "class", "button-icon svelte-8huxfn"), _t(t.src, n = /*icon*/
      e[7].url) || N(t, "src", n), N(t, "alt", i = `${/*value*/
      e[5]} icon`);
    },
    m(r, s) {
      qe(r, t, s);
    },
    p(r, s) {
      s & /*icon*/
      128 && !_t(t.src, n = /*icon*/
      r[7].url) && N(t, "src", n), s & /*value*/
      32 && i !== (i = `${/*value*/
      r[5]} icon`) && N(t, "alt", i);
    },
    d(r) {
      r && Ve(t);
    }
  };
}
function Ln(e) {
  let t, n, i;
  return {
    c() {
      t = Et("img"), N(t, "class", "button-icon svelte-8huxfn"), _t(t.src, n = /*icon*/
      e[7].url) || N(t, "src", n), N(t, "alt", i = `${/*value*/
      e[5]} icon`);
    },
    m(r, s) {
      qe(r, t, s);
    },
    p(r, s) {
      s & /*icon*/
      128 && !_t(t.src, n = /*icon*/
      r[7].url) && N(t, "src", n), s & /*value*/
      32 && i !== (i = `${/*value*/
      r[5]} icon`) && N(t, "alt", i);
    },
    d(r) {
      r && Ve(t);
    }
  };
}
function so(e) {
  let t, n, i, r;
  const s = [ro, io], u = [];
  function o(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return t = o(e), n = u[t] = s[t](e), {
    c() {
      n.c(), i = Ks();
    },
    m(a, f) {
      u[t].m(a, f), qe(a, i, f), r = !0;
    },
    p(a, [f]) {
      let l = t;
      t = o(a), t === l ? u[t].p(a, f) : ($s(), bt(u[l], 1, 1, () => {
        u[l] = null;
      }), Js(), n = u[t], n ? n.p(a, f) : (n = u[t] = s[t](a), n.c()), dt(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (dt(n), r = !0);
    },
    o(a) {
      bt(n), r = !1;
    },
    d(a) {
      a && Ve(i), u[t].d(a);
    }
  };
}
function oo(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { elem_id: s = "" } = t, { elem_classes: u = [] } = t, { visible: o = !0 } = t, { variant: a = "secondary" } = t, { size: f = "lg" } = t, { value: l = null } = t, { link: h = null } = t, { icon: c = null } = t, { disabled: _ = !1 } = t, { scale: b = null } = t, { min_width: g = void 0 } = t;
  function d(m) {
    Qs.call(this, e, m);
  }
  return e.$$set = (m) => {
    "elem_id" in m && n(0, s = m.elem_id), "elem_classes" in m && n(1, u = m.elem_classes), "visible" in m && n(2, o = m.visible), "variant" in m && n(3, a = m.variant), "size" in m && n(4, f = m.size), "value" in m && n(5, l = m.value), "link" in m && n(6, h = m.link), "icon" in m && n(7, c = m.icon), "disabled" in m && n(8, _ = m.disabled), "scale" in m && n(9, b = m.scale), "min_width" in m && n(10, g = m.min_width), "$$scope" in m && n(11, r = m.$$scope);
  }, [
    s,
    u,
    o,
    a,
    f,
    l,
    h,
    c,
    _,
    b,
    g,
    r,
    i,
    d
  ];
}
class Mn extends Zs {
  constructor(t) {
    super(), eo(this, t, oo, so, no, {
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
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lo = function(t) {
  return uo(t) && !fo(t);
};
function uo(e) {
  return !!e && typeof e == "object";
}
function fo(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || mo(e);
}
var ho = typeof Symbol == "function" && Symbol.for, co = ho ? Symbol.for("react.element") : 60103;
function mo(e) {
  return e.$$typeof === co;
}
function _o(e) {
  return Array.isArray(e) ? [] : {};
}
function ze(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? xe(_o(e), e, t) : e;
}
function bo(e, t, n) {
  return e.concat(t).map(function(i) {
    return ze(i, n);
  });
}
function go(e, t) {
  if (!t.customMerge)
    return xe;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : xe;
}
function po(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Rn(e) {
  return Object.keys(e).concat(po(e));
}
function yi(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function vo(e, t) {
  return yi(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function yo(e, t, n) {
  var i = {};
  return n.isMergeableObject(e) && Rn(e).forEach(function(r) {
    i[r] = ze(e[r], n);
  }), Rn(t).forEach(function(r) {
    vo(e, r) || (yi(e, r) && n.isMergeableObject(t[r]) ? i[r] = go(r, n)(e[r], t[r], n) : i[r] = ze(t[r], n));
  }), i;
}
function xe(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || bo, n.isMergeableObject = n.isMergeableObject || lo, n.cloneUnlessOtherwiseSpecified = ze;
  var i = Array.isArray(t), r = Array.isArray(e), s = i === r;
  return s ? i ? n.arrayMerge(e, t, n) : yo(e, t, n) : ze(t, n);
}
xe.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, r) {
    return xe(i, r, n);
  }, {});
};
var Eo = xe, wo = Eo;
const xo = /* @__PURE__ */ ao(wo);
var Qt = function(e, t) {
  return Qt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Qt(e, t);
};
function wt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Qt(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var B = function() {
  return B = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, B.apply(this, arguments);
};
function kt(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, s; i < r; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var S;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(S || (S = {}));
var I;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(I || (I = {}));
var Se;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Se || (Se = {}));
function kn(e) {
  return e.type === I.literal;
}
function So(e) {
  return e.type === I.argument;
}
function Ei(e) {
  return e.type === I.number;
}
function wi(e) {
  return e.type === I.date;
}
function xi(e) {
  return e.type === I.time;
}
function Si(e) {
  return e.type === I.select;
}
function Hi(e) {
  return e.type === I.plural;
}
function Ho(e) {
  return e.type === I.pound;
}
function Ai(e) {
  return e.type === I.tag;
}
function Bi(e) {
  return !!(e && typeof e == "object" && e.type === Se.number);
}
function Jt(e) {
  return !!(e && typeof e == "object" && e.type === Se.dateTime);
}
var Ti = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ao = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Bo(e) {
  var t = {};
  return e.replace(Ao, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
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
  }), t;
}
var To = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Co(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(To).filter(function(c) {
    return c.length > 0;
  }), n = [], i = 0, r = t; i < r.length; i++) {
    var s = r[i], u = s.split("/");
    if (u.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = u[0], a = u.slice(1), f = 0, l = a; f < l.length; f++) {
      var h = l[f];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: a });
  }
  return n;
}
function Po(e) {
  return e.replace(/^(.*?)-/, "");
}
var Dn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ci = /^(@+)?(\+|#+)?[rs]?$/g, Io = /(\*)(0+)|(#+)(0+)|(0+)/g, Pi = /^(0+)$/;
function Un(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ci, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function Ii(e) {
  switch (e) {
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
function No(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Pi.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Gn(e) {
  var t = {}, n = Ii(e);
  return n || t;
}
function Oo(e) {
  for (var t = {}, n = 0, i = e; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Po(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = B(B(B({}, t), { notation: "scientific" }), r.options.reduce(function(a, f) {
          return B(B({}, a), Gn(f));
        }, {}));
        continue;
      case "engineering":
        t = B(B(B({}, t), { notation: "engineering" }), r.options.reduce(function(a, f) {
          return B(B({}, a), Gn(f));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(r.options[0]);
        continue;
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(Io, function(a, f, l, h, c, _) {
          if (f)
            t.minimumIntegerDigits = l.length;
          else {
            if (h && c)
              throw new Error("We currently do not support maximum integer digits");
            if (_)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Pi.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (Dn.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(Dn, function(a, f, l, h, c, _) {
        return l === "*" ? t.minimumFractionDigits = f.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : c && _ ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + _.length) : (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length), "";
      });
      var s = r.options[0];
      s === "w" ? t = B(B({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = B(B({}, t), Un(s)));
      continue;
    }
    if (Ci.test(r.stem)) {
      t = B(B({}, t), Un(r.stem));
      continue;
    }
    var u = Ii(r.stem);
    u && (t = B(B({}, t), u));
    var o = No(r.stem);
    o && (t = B(B({}, t), o));
  }
  return t;
}
var Ke = {
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
function Lo(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        s++, i++;
      var u = 1 + (s & 1), o = s < 2 ? 1 : 3 + (s >> 1), a = "a", f = Mo(t);
      for ((f == "H" || f == "k") && (o = 0); o-- > 0; )
        n += a;
      for (; u-- > 0; )
        n = f + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function Mo(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
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
  var n = e.language, i;
  n !== "root" && (i = e.maximize().region);
  var r = Ke[i || ""] || Ke[n || ""] || Ke["".concat(n, "-001")] || Ke["001"];
  return r[0];
}
var Dt, Ro = new RegExp("^".concat(Ti.source, "*")), ko = new RegExp("".concat(Ti.source, "*$"));
function H(e, t) {
  return { start: e, end: t };
}
var Do = !!String.prototype.startsWith, Uo = !!String.fromCodePoint, Go = !!Object.fromEntries, Fo = !!String.prototype.codePointAt, zo = !!String.prototype.trimStart, jo = !!String.prototype.trimEnd, Xo = !!Number.isSafeInteger, Vo = Xo ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Kt = !0;
try {
  var qo = Oi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Kt = ((Dt = qo.exec("a")) === null || Dt === void 0 ? void 0 : Dt[0]) === "a";
} catch {
  Kt = !1;
}
var Fn = Do ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), $t = Uo ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", r = t.length, s = 0, u; r > s; ) {
      if (u = t[s++], u > 1114111)
        throw RangeError(u + " is not a valid code point");
      i += u < 65536 ? String.fromCharCode(u) : String.fromCharCode(((u -= 65536) >> 10) + 55296, u % 1024 + 56320);
    }
    return i;
  }
), zn = (
  // native
  Go ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var s = r[i], u = s[0], o = s[1];
        n[u] = o;
      }
      return n;
    }
  )
), Ni = Fo ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var i = t.length;
    if (!(n < 0 || n >= i)) {
      var r = t.charCodeAt(n), s;
      return r < 55296 || r > 56319 || n + 1 === i || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? r : (r - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Wo = zo ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ro, "");
  }
), Yo = jo ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ko, "");
  }
);
function Oi(e, t) {
  return new RegExp(e, t);
}
var en;
if (Kt) {
  var jn = Oi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  en = function(t, n) {
    var i;
    jn.lastIndex = n;
    var r = jn.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  en = function(t, n) {
    for (var i = []; ; ) {
      var r = Ni(t, n);
      if (r === void 0 || Li(r) || Ko(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return $t.apply(void 0, i);
  };
var Zo = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var u = this.parseArgument(t, i);
          if (u.err)
            return u;
          r.push(u.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), r.push({
              type: I.pound,
              location: H(o, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(S.UNMATCHED_CLOSING_TAG, H(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && tn(this.peek() || 0)) {
            var u = this.parseTag(t, n);
            if (u.err)
              return u;
            r.push(u.val);
          } else {
            var u = this.parseLiteral(t, n);
            if (u.err)
              return u;
            r.push(u.val);
          }
        }
      }
      return { val: r, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: I.literal,
            value: "<".concat(r, "/>"),
            location: H(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var u = s.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !tn(this.char()))
            return this.error(S.INVALID_TAG, H(o, this.clonePosition()));
          var a = this.clonePosition(), f = this.parseTagName();
          return r !== f ? this.error(S.UNMATCHED_CLOSING_TAG, H(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: I.tag,
              value: r,
              children: u,
              location: H(i, this.clonePosition())
            },
            err: null
          } : this.error(S.INVALID_TAG, H(o, this.clonePosition())));
        } else
          return this.error(S.UNCLOSED_TAG, H(i, this.clonePosition()));
      } else
        return this.error(S.INVALID_TAG, H(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Jo(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          r += s;
          continue;
        }
        var u = this.tryParseUnquoted(t, n);
        if (u) {
          r += u;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          r += o;
          continue;
        }
        break;
      }
      var a = H(i, this.clonePosition());
      return {
        val: { type: I.literal, value: r, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Qo(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
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
          if (t === "plural" || t === "selectordinal")
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
      return $t.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), $t(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, H(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(S.EMPTY_ARGUMENT, H(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(S.MALFORMED_ARGUMENT, H(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, H(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: I.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: H(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, H(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(S.MALFORMED_ARGUMENT, H(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = en(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var s = this.clonePosition(), u = H(t, s);
      return { value: i, location: u };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var s, u = this.clonePosition(), o = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (o) {
        case "":
          return this.error(S.EXPECT_ARGUMENT_TYPE, H(u, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var f = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var l = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var c = Yo(h.val);
            if (c.length === 0)
              return this.error(S.EXPECT_ARGUMENT_STYLE, H(this.clonePosition(), this.clonePosition()));
            var _ = H(l, this.clonePosition());
            f = { style: c, styleLocation: _ };
          }
          var b = this.tryParseArgumentClose(r);
          if (b.err)
            return b;
          var g = H(r, this.clonePosition());
          if (f && Fn(f == null ? void 0 : f.style, "::", 0)) {
            var d = Wo(f.style.slice(2));
            if (o === "number") {
              var h = this.parseNumberSkeletonFromString(d, f.styleLocation);
              return h.err ? h : {
                val: { type: I.number, value: i, location: g, style: h.val },
                err: null
              };
            } else {
              if (d.length === 0)
                return this.error(S.EXPECT_DATE_TIME_SKELETON, g);
              var m = d;
              this.locale && (m = Lo(d, this.locale));
              var c = {
                type: Se.dateTime,
                pattern: m,
                location: f.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Bo(m) : {}
              }, y = o === "date" ? I.date : I.time;
              return {
                val: { type: y, value: i, location: g, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? I.number : o === "date" ? I.date : I.time,
              value: i,
              location: g,
              style: (s = f == null ? void 0 : f.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(S.EXPECT_SELECT_ARGUMENT_OPTIONS, H(p, B({}, p)));
          this.bumpSpace();
          var T = this.parseIdentifierIfPossible(), C = 0;
          if (o !== "select" && T.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, H(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, S.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), T = this.parseIdentifierIfPossible(), C = h.val;
          }
          var O = this.tryParsePluralOrSelectOptions(t, o, n, T);
          if (O.err)
            return O;
          var b = this.tryParseArgumentClose(r);
          if (b.err)
            return b;
          var P = H(r, this.clonePosition());
          return o === "select" ? {
            val: {
              type: I.select,
              value: i,
              options: zn(O.val),
              location: P
            },
            err: null
          } : {
            val: {
              type: I.plural,
              value: i,
              options: zn(O.val),
              offset: C,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: P
            },
            err: null
          };
        }
        default:
          return this.error(S.INVALID_ARGUMENT_TYPE, H(u, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, H(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(S.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, H(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
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
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var i = [];
      try {
        i = Co(t);
      } catch {
        return this.error(S.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Se.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Oo(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var s, u = !1, o = [], a = /* @__PURE__ */ new Set(), f = r.value, l = r.location; ; ) {
        if (f.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_SELECTOR, S.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            l = H(h, this.clonePosition()), f = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (a.has(f))
          return this.error(n === "select" ? S.DUPLICATE_SELECT_ARGUMENT_SELECTOR : S.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
        f === "other" && (u = !0), this.bumpSpace();
        var _ = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? S.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : S.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, H(this.clonePosition(), this.clonePosition()));
        var b = this.parseMessage(t + 1, n, i);
        if (b.err)
          return b;
        var g = this.tryParseArgumentClose(_);
        if (g.err)
          return g;
        o.push([
          f,
          {
            value: b.val,
            location: H(_, this.clonePosition())
          }
        ]), a.add(f), this.bumpSpace(), s = this.parseIdentifierIfPossible(), f = s.value, l = s.location;
      }
      return o.length === 0 ? this.error(n === "select" ? S.EXPECT_SELECT_ARGUMENT_SELECTOR : S.EXPECT_PLURAL_ARGUMENT_SELECTOR, H(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !u ? this.error(S.MISSING_OTHER_CLAUSE, H(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, u = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          s = !0, u = u * 10 + (o - 48), this.bump();
        else
          break;
      }
      var a = H(r, this.clonePosition());
      return s ? (u *= i, Vo(u) ? { val: u, err: null } : this.error(n, a)) : this.error(t, a);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Ni(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Fn(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), i = this.message.indexOf(t, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Li(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function tn(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Qo(e) {
  return tn(e) || e === 47;
}
function Jo(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Li(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ko(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function nn(e) {
  e.forEach(function(t) {
    if (delete t.location, Si(t) || Hi(t))
      for (var n in t.options)
        delete t.options[n].location, nn(t.options[n].value);
    else
      Ei(t) && Bi(t.style) || (wi(t) || xi(t)) && Jt(t.style) ? delete t.style.location : Ai(t) && nn(t.children);
  });
}
function $o(e, t) {
  t === void 0 && (t = {}), t = B({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Zo(e, t).parse();
  if (n.err) {
    var i = SyntaxError(S[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || nn(n.val), n.val;
}
function Ut(e, t) {
  var n = t && t.cache ? t.cache : sa, i = t && t.serializer ? t.serializer : ra, r = t && t.strategy ? t.strategy : ta;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function ea(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Mi(e, t, n, i) {
  var r = ea(i) ? i : n(i), s = t.get(r);
  return typeof s > "u" && (s = e.call(this, i), t.set(r, s)), s;
}
function Ri(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), s = t.get(r);
  return typeof s > "u" && (s = e.apply(this, i), t.set(r, s)), s;
}
function cn(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function ta(e, t) {
  var n = e.length === 1 ? Mi : Ri;
  return cn(e, this, n, t.cache.create(), t.serializer);
}
function na(e, t) {
  return cn(e, this, Ri, t.cache.create(), t.serializer);
}
function ia(e, t) {
  return cn(e, this, Mi, t.cache.create(), t.serializer);
}
var ra = function() {
  return JSON.stringify(arguments);
};
function mn() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
mn.prototype.get = function(e) {
  return this.cache[e];
};
mn.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var sa = {
  create: function() {
    return new mn();
  }
}, Gt = {
  variadic: na,
  monadic: ia
}, He;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(He || (He = {}));
var xt = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i, r) {
      var s = e.call(this, n) || this;
      return s.code = i, s.originalMessage = r, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Xn = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i, r, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), He.INVALID_VALUE, s) || this;
    }
    return t;
  }(xt)
), oa = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), He.INVALID_VALUE, r) || this;
    }
    return t;
  }(xt)
), aa = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), He.MISSING_VALUE, i) || this;
    }
    return t;
  }(xt)
), D;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(D || (D = {}));
function la(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== D.literal || n.type !== D.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function ua(e) {
  return typeof e == "function";
}
function ht(e, t, n, i, r, s, u) {
  if (e.length === 1 && kn(e[0]))
    return [
      {
        type: D.literal,
        value: e[0].value
      }
    ];
  for (var o = [], a = 0, f = e; a < f.length; a++) {
    var l = f[a];
    if (kn(l)) {
      o.push({
        type: D.literal,
        value: l.value
      });
      continue;
    }
    if (Ho(l)) {
      typeof s == "number" && o.push({
        type: D.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var h = l.value;
    if (!(r && h in r))
      throw new aa(h, u);
    var c = r[h];
    if (So(l)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), o.push({
        type: typeof c == "string" ? D.literal : D.object,
        value: c
      });
      continue;
    }
    if (wi(l)) {
      var _ = typeof l.style == "string" ? i.date[l.style] : Jt(l.style) ? l.style.parsedOptions : void 0;
      o.push({
        type: D.literal,
        value: n.getDateTimeFormat(t, _).format(c)
      });
      continue;
    }
    if (xi(l)) {
      var _ = typeof l.style == "string" ? i.time[l.style] : Jt(l.style) ? l.style.parsedOptions : i.time.medium;
      o.push({
        type: D.literal,
        value: n.getDateTimeFormat(t, _).format(c)
      });
      continue;
    }
    if (Ei(l)) {
      var _ = typeof l.style == "string" ? i.number[l.style] : Bi(l.style) ? l.style.parsedOptions : void 0;
      _ && _.scale && (c = c * (_.scale || 1)), o.push({
        type: D.literal,
        value: n.getNumberFormat(t, _).format(c)
      });
      continue;
    }
    if (Ai(l)) {
      var b = l.children, g = l.value, d = r[g];
      if (!ua(d))
        throw new oa(g, "function", u);
      var m = ht(b, t, n, i, r, s), y = d(m.map(function(C) {
        return C.value;
      }));
      Array.isArray(y) || (y = [y]), o.push.apply(o, y.map(function(C) {
        return {
          type: typeof C == "string" ? D.literal : D.object,
          value: C
        };
      }));
    }
    if (Si(l)) {
      var p = l.options[c] || l.options.other;
      if (!p)
        throw new Xn(l.value, c, Object.keys(l.options), u);
      o.push.apply(o, ht(p.value, t, n, i, r));
      continue;
    }
    if (Hi(l)) {
      var p = l.options["=".concat(c)];
      if (!p) {
        if (!Intl.PluralRules)
          throw new xt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, He.MISSING_INTL_API, u);
        var T = n.getPluralRules(t, { type: l.pluralType }).select(c - (l.offset || 0));
        p = l.options[T] || l.options.other;
      }
      if (!p)
        throw new Xn(l.value, c, Object.keys(l.options), u);
      o.push.apply(o, ht(p.value, t, n, i, r, c - (l.offset || 0)));
      continue;
    }
  }
  return la(o);
}
function fa(e, t) {
  return t ? B(B(B({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = B(B({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function ha(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = fa(e[i], t[i]), n;
  }, B({}, e)) : e;
}
function Ft(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function ca(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ut(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, kt([void 0], n, !1)))();
    }, {
      cache: Ft(e.number),
      strategy: Gt.variadic
    }),
    getDateTimeFormat: Ut(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, kt([void 0], n, !1)))();
    }, {
      cache: Ft(e.dateTime),
      strategy: Gt.variadic
    }),
    getPluralRules: Ut(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, kt([void 0], n, !1)))();
    }, {
      cache: Ft(e.pluralRules),
      strategy: Gt.variadic
    })
  };
}
var ma = (
  /** @class */
  function() {
    function e(t, n, i, r) {
      var s = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var o = s.formatToParts(u);
        if (o.length === 1)
          return o[0].value;
        var a = o.reduce(function(f, l) {
          return !f.length || l.type !== D.literal || typeof f[f.length - 1] != "string" ? f.push(l.value) : f[f.length - 1] += l.value, f;
        }, []);
        return a.length <= 1 ? a[0] || "" : a;
      }, this.formatToParts = function(u) {
        return ht(s.ast, s.locales, s.formatters, s.formats, u, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: r == null ? void 0 : r.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = ha(e.formats, i), this.formatters = r && r.formatters || ca(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = $o, e.formats = {
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
    }, e;
  }()
);
function _a(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let i = e;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const s = n.slice(r, n.length).join(".");
        if (s in i) {
          i = i[s];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const re = {}, da = (e, t, n) => n && (t in re || (re[t] = {}), e in re[t] || (re[t][e] = n), n), ki = (e, t) => {
  if (t == null)
    return;
  if (t in re && e in re[t])
    return re[t][e];
  const n = St(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = ga(r, e);
    if (s)
      return da(e, t, s);
  }
};
let _n;
const We = yt({});
function ba(e) {
  return _n[e] || null;
}
function Di(e) {
  return e in _n;
}
function ga(e, t) {
  if (!Di(e))
    return null;
  const n = ba(e);
  return _a(n, t);
}
function pa(e) {
  if (e == null)
    return;
  const t = St(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (Di(i))
      return i;
  }
}
function va(e, ...t) {
  delete re[e], We.update((n) => (n[e] = xo.all([n[e] || {}, ...t]), n));
}
Be(
  [We],
  ([e]) => Object.keys(e)
);
We.subscribe((e) => _n = e);
const ct = {};
function ya(e, t) {
  ct[e].delete(t), ct[e].size === 0 && delete ct[e];
}
function Ui(e) {
  return ct[e];
}
function Ea(e) {
  return St(e).map((t) => {
    const n = Ui(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function rn(e) {
  return e == null ? !1 : St(e).some(
    (t) => {
      var n;
      return (n = Ui(t)) == null ? void 0 : n.size;
    }
  );
}
function wa(e, t) {
  return Promise.all(
    t.map((i) => (ya(e, i), i().then((r) => r.default || r)))
  ).then((i) => va(e, ...i));
}
const Ne = {};
function Gi(e) {
  if (!rn(e))
    return e in Ne ? Ne[e] : Promise.resolve();
  const t = Ea(e);
  return Ne[e] = Promise.all(
    t.map(
      ([n, i]) => wa(n, i)
    )
  ).then(() => {
    if (rn(e))
      return Gi(e);
    delete Ne[e];
  }), Ne[e];
}
const xa = {
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
}, Sa = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: xa,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Ha = Sa;
function Ae() {
  return Ha;
}
const zt = yt(!1);
var Aa = Object.defineProperty, Ba = Object.defineProperties, Ta = Object.getOwnPropertyDescriptors, Vn = Object.getOwnPropertySymbols, Ca = Object.prototype.hasOwnProperty, Pa = Object.prototype.propertyIsEnumerable, qn = (e, t, n) => t in e ? Aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ia = (e, t) => {
  for (var n in t || (t = {}))
    Ca.call(t, n) && qn(e, n, t[n]);
  if (Vn)
    for (var n of Vn(t))
      Pa.call(t, n) && qn(e, n, t[n]);
  return e;
}, Na = (e, t) => Ba(e, Ta(t));
let sn;
const gt = yt(null);
function Wn(e) {
  return e.split("-").map((t, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function St(e, t = Ae().fallbackLocale) {
  const n = Wn(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Wn(t)])] : n;
}
function le() {
  return sn ?? void 0;
}
gt.subscribe((e) => {
  sn = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Oa = (e) => {
  if (e && pa(e) && rn(e)) {
    const { loadingDelay: t } = Ae();
    let n;
    return typeof window < "u" && le() != null && t ? n = window.setTimeout(
      () => zt.set(!0),
      t
    ) : zt.set(!0), Gi(e).then(() => {
      gt.set(e);
    }).finally(() => {
      clearTimeout(n), zt.set(!1);
    });
  }
  return gt.set(e);
}, Ye = Na(Ia({}, gt), {
  set: Oa
}), Ht = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in t ? t[r] : t[r] = e(i);
  };
};
var La = Object.defineProperty, pt = Object.getOwnPropertySymbols, Fi = Object.prototype.hasOwnProperty, zi = Object.prototype.propertyIsEnumerable, Yn = (e, t, n) => t in e ? La(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dn = (e, t) => {
  for (var n in t || (t = {}))
    Fi.call(t, n) && Yn(e, n, t[n]);
  if (pt)
    for (var n of pt(t))
      zi.call(t, n) && Yn(e, n, t[n]);
  return e;
}, Te = (e, t) => {
  var n = {};
  for (var i in e)
    Fi.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && pt)
    for (var i of pt(e))
      t.indexOf(i) < 0 && zi.call(e, i) && (n[i] = e[i]);
  return n;
};
const je = (e, t) => {
  const { formats: n } = Ae();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Ma = Ht(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = Te(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = je("number", i)), new Intl.NumberFormat(n, r);
  }
), Ra = Ht(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = Te(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = je("date", i) : Object.keys(r).length === 0 && (r = je("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), ka = Ht(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = Te(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = je("time", i) : Object.keys(r).length === 0 && (r = je("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), Da = (e = {}) => {
  var t = e, {
    locale: n = le()
  } = t, i = Te(t, [
    "locale"
  ]);
  return Ma(dn({ locale: n }, i));
}, Ua = (e = {}) => {
  var t = e, {
    locale: n = le()
  } = t, i = Te(t, [
    "locale"
  ]);
  return Ra(dn({ locale: n }, i));
}, Ga = (e = {}) => {
  var t = e, {
    locale: n = le()
  } = t, i = Te(t, [
    "locale"
  ]);
  return ka(dn({ locale: n }, i));
}, Fa = Ht(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = le()) => new ma(e, t, Ae().formats, {
    ignoreTag: Ae().ignoreTag
  })
), za = (e, t = {}) => {
  var n, i, r, s;
  let u = t;
  typeof e == "object" && (u = e, e = u.id);
  const {
    values: o,
    locale: a = le(),
    default: f
  } = u;
  if (a == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let l = ki(e, a);
  if (!l)
    l = (s = (r = (i = (n = Ae()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: a, id: e, defaultValue: f })) != null ? r : f) != null ? s : e;
  else if (typeof l != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof l}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), l;
  if (!o)
    return l;
  let h = l;
  try {
    h = Fa(l, a).format(o);
  } catch (c) {
    c instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      c.message
    );
  }
  return h;
}, ja = (e, t) => Ga(t).format(e), Xa = (e, t) => Ua(t).format(e), Va = (e, t) => Da(t).format(e), qa = (e, t = le()) => ki(e, t);
Be([Ye, We], () => za);
Be([Ye], () => ja);
Be([Ye], () => Xa);
Be([Ye], () => Va);
Be([Ye, We], () => qa);
const {
  SvelteComponent: Wa,
  add_render_callback: ji,
  append: $e,
  attr: j,
  binding_callbacks: Zn,
  check_outros: Ya,
  create_bidirectional_transition: Qn,
  destroy_each: Za,
  detach: Re,
  element: vt,
  empty: Qa,
  ensure_array_like: Jn,
  group_outros: Ja,
  init: Ka,
  insert: ke,
  listen: on,
  prevent_default: $a,
  run_all: el,
  safe_not_equal: tl,
  set_data: nl,
  set_style: me,
  space: an,
  text: il,
  toggle_class: Q,
  transition_in: jt,
  transition_out: Kn
} = window.__gradio__svelte__internal, { createEventDispatcher: rl } = window.__gradio__svelte__internal;
function $n(e, t, n) {
  const i = e.slice();
  return i[24] = t[n], i;
}
function ei(e) {
  let t, n, i, r, s, u = Jn(
    /*filtered_indices*/
    e[1]
  ), o = [];
  for (let a = 0; a < u.length; a += 1)
    o[a] = ti($n(e, u, a));
  return {
    c() {
      t = vt("ul");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      j(t, "class", "options svelte-yuohum"), j(t, "role", "listbox"), me(
        t,
        "bottom",
        /*bottom*/
        e[9]
      ), me(t, "max-height", `calc(${/*max_height*/
      e[10]}px - var(--window-padding))`), me(
        t,
        "width",
        /*input_width*/
        e[8] + "px"
      );
    },
    m(a, f) {
      ke(a, t, f);
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(t, null);
      e[20](t), i = !0, r || (s = on(t, "mousedown", $a(
        /*mousedown_handler*/
        e[19]
      )), r = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        u = Jn(
          /*filtered_indices*/
          a[1]
        );
        let l;
        for (l = 0; l < u.length; l += 1) {
          const h = $n(a, u, l);
          o[l] ? o[l].p(h, f) : (o[l] = ti(h), o[l].c(), o[l].m(t, null));
        }
        for (; l < o.length; l += 1)
          o[l].d(1);
        o.length = u.length;
      }
      f & /*bottom*/
      512 && me(
        t,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && me(t, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && me(
        t,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      i || (a && ji(() => {
        i && (n || (n = Qn(t, Nn, { duration: 200, y: 5 }, !0)), n.run(1));
      }), i = !0);
    },
    o(a) {
      a && (n || (n = Qn(t, Nn, { duration: 200, y: 5 }, !1)), n.run(0)), i = !1;
    },
    d(a) {
      a && Re(t), Za(o, a), e[20](null), a && n && n.end(), r = !1, s();
    }
  };
}
function ti(e) {
  let t, n, i, r = (
    /*choices*/
    e[0][
      /*index*/
      e[24]
    ][0] + ""
  ), s, u, o, a, f;
  return {
    c() {
      t = vt("li"), n = vt("span"), n.textContent = "✓", i = an(), s = il(r), u = an(), j(n, "class", "inner-item svelte-yuohum"), Q(n, "hide", !/*selected_indices*/
      e[4].includes(
        /*index*/
        e[24]
      )), j(t, "class", "item svelte-yuohum"), j(t, "data-index", o = /*index*/
      e[24]), j(t, "aria-label", a = /*choices*/
      e[0][
        /*index*/
        e[24]
      ][0]), j(t, "data-testid", "dropdown-option"), j(t, "role", "option"), j(t, "aria-selected", f = /*selected_indices*/
      e[4].includes(
        /*index*/
        e[24]
      )), Q(
        t,
        "selected",
        /*selected_indices*/
        e[4].includes(
          /*index*/
          e[24]
        )
      ), Q(
        t,
        "active",
        /*index*/
        e[24] === /*active_index*/
        e[5]
      ), Q(
        t,
        "bg-gray-100",
        /*index*/
        e[24] === /*active_index*/
        e[5]
      ), Q(
        t,
        "dark:bg-gray-600",
        /*index*/
        e[24] === /*active_index*/
        e[5]
      );
    },
    m(l, h) {
      ke(l, t, h), $e(t, n), $e(t, i), $e(t, s), $e(t, u);
    },
    p(l, h) {
      h & /*selected_indices, filtered_indices*/
      18 && Q(n, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[24]
      )), h & /*choices, filtered_indices*/
      3 && r !== (r = /*choices*/
      l[0][
        /*index*/
        l[24]
      ][0] + "") && nl(s, r), h & /*filtered_indices*/
      2 && o !== (o = /*index*/
      l[24]) && j(t, "data-index", o), h & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      l[0][
        /*index*/
        l[24]
      ][0]) && j(t, "aria-label", a), h & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[24]
      )) && j(t, "aria-selected", f), h & /*selected_indices, filtered_indices*/
      18 && Q(
        t,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[24]
        )
      ), h & /*filtered_indices, active_index*/
      34 && Q(
        t,
        "active",
        /*index*/
        l[24] === /*active_index*/
        l[5]
      ), h & /*filtered_indices, active_index*/
      34 && Q(
        t,
        "bg-gray-100",
        /*index*/
        l[24] === /*active_index*/
        l[5]
      ), h & /*filtered_indices, active_index*/
      34 && Q(
        t,
        "dark:bg-gray-600",
        /*index*/
        l[24] === /*active_index*/
        l[5]
      );
    },
    d(l) {
      l && Re(t);
    }
  };
}
function sl(e) {
  let t, n, i, r, s;
  ji(
    /*onwindowresize*/
    e[17]
  );
  let u = (
    /*show_options*/
    e[2] && !/*disabled*/
    e[3] && ei(e)
  );
  return {
    c() {
      t = vt("div"), n = an(), u && u.c(), i = Qa(), j(t, "class", "reference");
    },
    m(o, a) {
      ke(o, t, a), e[18](t), ke(o, n, a), u && u.m(o, a), ke(o, i, a), r || (s = [
        on(
          window,
          "scroll",
          /*scroll_listener*/
          e[12]
        ),
        on(
          window,
          "resize",
          /*onwindowresize*/
          e[17]
        )
      ], r = !0);
    },
    p(o, [a]) {
      /*show_options*/
      o[2] && !/*disabled*/
      o[3] ? u ? (u.p(o, a), a & /*show_options, disabled*/
      12 && jt(u, 1)) : (u = ei(o), u.c(), jt(u, 1), u.m(i.parentNode, i)) : u && (Ja(), Kn(u, 1, 1, () => {
        u = null;
      }), Ya());
    },
    i(o) {
      jt(u);
    },
    o(o) {
      Kn(u);
    },
    d(o) {
      o && (Re(t), Re(n), Re(i)), e[18](null), u && u.d(o), r = !1, el(s);
    }
  };
}
function et(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], s = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = s(n)) : (r === "call" || r === "optionalCall") && (n = s((...u) => n.call(t, ...u)), t = void 0);
  }
  return n;
}
function ol(e, t, n) {
  let { choices: i } = t, { filtered_indices: r } = t, { show_options: s = !1 } = t, { disabled: u = !1 } = t, { selected_indices: o = [] } = t, { active_index: a = null } = t, f, l, h, c, _, b, g, d, m;
  function y() {
    const { top: x, bottom: L } = _.getBoundingClientRect();
    n(14, f = x), n(15, l = m - L);
  }
  let p = null;
  function T() {
    s && (p !== null && clearTimeout(p), p = setTimeout(
      () => {
        y(), p = null;
      },
      10
    ));
  }
  const C = rl();
  function O() {
    n(11, m = window.innerHeight);
  }
  function P(x) {
    Zn[x ? "unshift" : "push"](() => {
      _ = x, n(6, _);
    });
  }
  const E = (x) => C("change", x);
  function M(x) {
    Zn[x ? "unshift" : "push"](() => {
      b = x, n(7, b);
    });
  }
  return e.$$set = (x) => {
    "choices" in x && n(0, i = x.choices), "filtered_indices" in x && n(1, r = x.filtered_indices), "show_options" in x && n(2, s = x.show_options), "disabled" in x && n(3, u = x.disabled), "selected_indices" in x && n(4, o = x.selected_indices), "active_index" in x && n(5, a = x.active_index);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*show_options, refElement, listElement, selected_indices, distance_from_bottom, distance_from_top, input_height*/
    114900) {
      if (s && _) {
        if (b && o.length > 0) {
          let L = b.querySelectorAll("li");
          for (const W of Array.from(L))
            if (W.getAttribute("data-index") === o[0].toString()) {
              et([
                b,
                "optionalAccess",
                (ee) => ee.scrollTo,
                "optionalCall",
                (ee) => ee(0, W.offsetTop)
              ]);
              break;
            }
        }
        y();
        const x = et([
          _,
          "access",
          (L) => L.parentElement,
          "optionalAccess",
          (L) => L.getBoundingClientRect,
          "call",
          (L) => L()
        ]);
        n(16, h = et([x, "optionalAccess", (L) => L.height]) || 0), n(8, c = et([x, "optionalAccess", (L) => L.width]) || 0);
      }
      l > f ? (n(10, d = l), n(9, g = null)) : (n(9, g = `${l + h}px`), n(10, d = f - h));
    }
  }, [
    i,
    r,
    s,
    u,
    o,
    a,
    _,
    b,
    c,
    g,
    d,
    m,
    T,
    C,
    f,
    l,
    h,
    O,
    P,
    E,
    M
  ];
}
class al extends Wa {
  constructor(t) {
    super(), Ka(this, t, ol, sl, tl, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function ll(e, t) {
  return (e % t + t) % t;
}
function ni(e, t) {
  return e.reduce((n, i, r) => ((!t || i[0].toLowerCase().includes(t.toLowerCase())) && n.push(r), n), []);
}
function ul(e, t, n) {
  e("change", t), n || e("input");
}
function fl(e, t, n) {
  if (e.key === "Escape")
    return [!1, t];
  if ((e.key === "ArrowDown" || e.key === "ArrowUp") && n.length >= 0)
    if (t === null)
      t = e.key === "ArrowDown" ? n[0] : n[n.length - 1];
    else {
      const i = n.indexOf(t), r = e.key === "ArrowUp" ? -1 : 1;
      t = n[ll(i + r, n.length)];
    }
  return [!0, t];
}
const {
  SvelteComponent: hl,
  append: se,
  attr: z,
  binding_callbacks: cl,
  check_outros: ml,
  create_component: ln,
  destroy_component: un,
  detach: bn,
  element: de,
  group_outros: _l,
  init: dl,
  insert: gn,
  listen: Oe,
  mount_component: fn,
  run_all: bl,
  safe_not_equal: gl,
  set_data: pl,
  set_input_value: ii,
  space: Xt,
  text: vl,
  toggle_class: _e,
  transition_in: be,
  transition_out: Me
} = window.__gradio__svelte__internal, { onMount: yl } = window.__gradio__svelte__internal, { createEventDispatcher: El, afterUpdate: wl } = window.__gradio__svelte__internal;
function xl(e) {
  let t;
  return {
    c() {
      t = vl(
        /*label*/
        e[0]
      );
    },
    m(n, i) {
      gn(n, t, i);
    },
    p(n, i) {
      i[0] & /*label*/
      1 && pl(
        t,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && bn(t);
    }
  };
}
function ri(e) {
  let t, n, i;
  return n = new Hr({}), {
    c() {
      t = de("div"), ln(n.$$.fragment), z(t, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(r, s) {
      gn(r, t, s), fn(n, t, null), i = !0;
    },
    i(r) {
      i || (be(n.$$.fragment, r), i = !0);
    },
    o(r) {
      Me(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && bn(t), un(n);
    }
  };
}
function Sl(e) {
  let t, n, i, r, s, u, o, a, f, l, h, c, _, b;
  n = new hi({
    props: {
      show_label: (
        /*show_label*/
        e[4]
      ),
      info: (
        /*info*/
        e[1]
      ),
      $$slots: { default: [xl] },
      $$scope: { ctx: e }
    }
  });
  let g = !/*disabled*/
  e[3] && ri();
  return h = new al({
    props: {
      show_options: (
        /*show_options*/
        e[12]
      ),
      choices: (
        /*choices*/
        e[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        e[10]
      ),
      disabled: (
        /*disabled*/
        e[3]
      ),
      selected_indices: (
        /*selected_index*/
        e[11] === null ? [] : [
          /*selected_index*/
          e[11]
        ]
      ),
      active_index: (
        /*active_index*/
        e[14]
      )
    }
  }), h.$on(
    "change",
    /*handle_option_selected*/
    e[16]
  ), {
    c() {
      t = de("div"), ln(n.$$.fragment), i = Xt(), r = de("div"), s = de("div"), u = de("div"), o = de("input"), f = Xt(), g && g.c(), l = Xt(), ln(h.$$.fragment), z(o, "role", "listbox"), z(o, "aria-controls", "dropdown-options"), z(
        o,
        "aria-expanded",
        /*show_options*/
        e[12]
      ), z(
        o,
        "aria-label",
        /*label*/
        e[0]
      ), z(o, "class", "border-none svelte-1m1zvyj"), o.disabled = /*disabled*/
      e[3], z(o, "autocomplete", "off"), o.readOnly = a = !/*filterable*/
      e[7], _e(o, "subdued", !/*choices_names*/
      e[13].includes(
        /*input_text*/
        e[9]
      ) && !/*allow_custom_value*/
      e[6]), z(u, "class", "secondary-wrap svelte-1m1zvyj"), z(s, "class", "wrap-inner svelte-1m1zvyj"), _e(
        s,
        "show_options",
        /*show_options*/
        e[12]
      ), z(r, "class", "wrap svelte-1m1zvyj"), z(t, "class", "svelte-1m1zvyj"), _e(
        t,
        "container",
        /*container*/
        e[5]
      );
    },
    m(d, m) {
      gn(d, t, m), fn(n, t, null), se(t, i), se(t, r), se(r, s), se(s, u), se(u, o), ii(
        o,
        /*input_text*/
        e[9]
      ), e[29](o), se(u, f), g && g.m(u, null), se(r, l), fn(h, r, null), c = !0, _ || (b = [
        Oe(
          o,
          "input",
          /*input_input_handler*/
          e[28]
        ),
        Oe(
          o,
          "keydown",
          /*handle_key_down*/
          e[19]
        ),
        Oe(
          o,
          "keyup",
          /*keyup_handler*/
          e[30]
        ),
        Oe(
          o,
          "blur",
          /*handle_blur*/
          e[18]
        ),
        Oe(
          o,
          "focus",
          /*handle_focus*/
          e[17]
        )
      ], _ = !0);
    },
    p(d, m) {
      const y = {};
      m[0] & /*show_label*/
      16 && (y.show_label = /*show_label*/
      d[4]), m[0] & /*info*/
      2 && (y.info = /*info*/
      d[1]), m[0] & /*label*/
      1 | m[1] & /*$$scope*/
      4 && (y.$$scope = { dirty: m, ctx: d }), n.$set(y), (!c || m[0] & /*show_options*/
      4096) && z(
        o,
        "aria-expanded",
        /*show_options*/
        d[12]
      ), (!c || m[0] & /*label*/
      1) && z(
        o,
        "aria-label",
        /*label*/
        d[0]
      ), (!c || m[0] & /*disabled*/
      8) && (o.disabled = /*disabled*/
      d[3]), (!c || m[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      d[7])) && (o.readOnly = a), m[0] & /*input_text*/
      512 && o.value !== /*input_text*/
      d[9] && ii(
        o,
        /*input_text*/
        d[9]
      ), (!c || m[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && _e(o, "subdued", !/*choices_names*/
      d[13].includes(
        /*input_text*/
        d[9]
      ) && !/*allow_custom_value*/
      d[6]), /*disabled*/
      d[3] ? g && (_l(), Me(g, 1, 1, () => {
        g = null;
      }), ml()) : g ? m[0] & /*disabled*/
      8 && be(g, 1) : (g = ri(), g.c(), be(g, 1), g.m(u, null)), (!c || m[0] & /*show_options*/
      4096) && _e(
        s,
        "show_options",
        /*show_options*/
        d[12]
      );
      const p = {};
      m[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      d[12]), m[0] & /*choices*/
      4 && (p.choices = /*choices*/
      d[2]), m[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      d[10]), m[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      d[3]), m[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      d[11] === null ? [] : [
        /*selected_index*/
        d[11]
      ]), m[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      d[14]), h.$set(p), (!c || m[0] & /*container*/
      32) && _e(
        t,
        "container",
        /*container*/
        d[5]
      );
    },
    i(d) {
      c || (be(n.$$.fragment, d), be(g), be(h.$$.fragment, d), c = !0);
    },
    o(d) {
      Me(n.$$.fragment, d), Me(g), Me(h.$$.fragment, d), c = !1;
    },
    d(d) {
      d && bn(t), un(n), e[29](null), g && g.d(), un(h), _ = !1, bl(b);
    }
  };
}
function Hl(e, t, n) {
  let { label: i } = t, { info: r = void 0 } = t, { value: s = [] } = t, u = [], { value_is_output: o = !1 } = t, { choices: a } = t, f, { disabled: l = !1 } = t, { show_label: h } = t, { container: c = !0 } = t, { allow_custom_value: _ = !1 } = t, { filterable: b = !0 } = t, g, d = !1, m, y, p = "", T = "", C = !1, O = [], P = null, E = null, M;
  const x = El();
  s ? (M = a.map((w) => w[1]).indexOf(s), E = M, E === -1 ? (u = s, E = null) : ([p, u] = a[E], T = p), W()) : a.length > 0 && (M = 0, E = 0, [p, s] = a[E], u = s, T = p);
  function L() {
    n(13, m = a.map((w) => w[0])), n(24, y = a.map((w) => w[1]));
  }
  function W() {
    L(), s === void 0 || Array.isArray(s) && s.length === 0 ? (n(9, p = ""), n(11, E = null)) : y.includes(s) ? (n(9, p = m[y.indexOf(s)]), n(11, E = y.indexOf(s))) : _ ? (n(9, p = s), n(11, E = null)) : (n(9, p = ""), n(11, E = null)), n(27, M = E);
  }
  function ee(w) {
    if (n(11, E = parseInt(w.detail.target.dataset.index)), isNaN(E)) {
      n(11, E = null);
      return;
    }
    n(12, d = !1), n(14, P = null), g.blur();
  }
  function At(w) {
    n(10, O = a.map((yn, Ze) => Ze)), n(12, d = !0), x("focus");
  }
  function Ce() {
    _ ? n(20, s = p) : n(9, p = m[y.indexOf(s)]), n(12, d = !1), n(14, P = null), x("blur");
  }
  function Bt(w) {
    n(12, [d, P] = fl(w, P, O), d, (n(14, P), n(2, a), n(23, f), n(6, _), n(9, p), n(10, O), n(8, g), n(25, T), n(11, E), n(27, M), n(26, C), n(24, y))), w.key === "Enter" && (P !== null ? (n(11, E = P), n(12, d = !1), g.blur(), n(14, P = null)) : m.includes(p) ? (n(11, E = m.indexOf(p)), n(12, d = !1), n(14, P = null), g.blur()) : _ && (n(20, s = p), n(11, E = null), n(12, d = !1), n(14, P = null), g.blur()), x("enter", s));
  }
  wl(() => {
    n(21, o = !1), n(26, C = !0);
  }), yl(() => {
    g.focus();
  });
  function Tt() {
    p = this.value, n(9, p), n(11, E), n(27, M), n(26, C), n(2, a), n(24, y);
  }
  function Pe(w) {
    cl[w ? "unshift" : "push"](() => {
      g = w, n(8, g);
    });
  }
  const ue = (w) => x("key_up", { key: w.key, input_value: p });
  return e.$$set = (w) => {
    "label" in w && n(0, i = w.label), "info" in w && n(1, r = w.info), "value" in w && n(20, s = w.value), "value_is_output" in w && n(21, o = w.value_is_output), "choices" in w && n(2, a = w.choices), "disabled" in w && n(3, l = w.disabled), "show_label" in w && n(4, h = w.show_label), "container" in w && n(5, c = w.container), "allow_custom_value" in w && n(6, _ = w.allow_custom_value), "filterable" in w && n(7, b = w.filterable);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && E !== M && E !== null && C && (n(9, [p, s] = a[E], p, (n(20, s), n(11, E), n(27, M), n(26, C), n(2, a), n(24, y))), n(27, M = E), x("select", {
      index: E,
      value: y[E],
      selected: !0
    })), e.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != u && (W(), ul(x, s, o), n(22, u = s)), e.$$.dirty[0] & /*choices*/
    4 && L(), e.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (_ || W(), n(23, f = a), n(10, O = ni(a, p)), !_ && O.length > 0 && n(14, P = O[0]), g == document.activeElement && n(12, d = !0)), e.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== T && (n(10, O = ni(a, p)), n(25, T = p), !_ && O.length > 0 && n(14, P = O[0]));
  }, [
    i,
    r,
    a,
    l,
    h,
    c,
    _,
    b,
    g,
    p,
    O,
    E,
    d,
    m,
    P,
    x,
    ee,
    At,
    Ce,
    Bt,
    s,
    o,
    u,
    f,
    y,
    T,
    C,
    M,
    Tt,
    Pe,
    ue
  ];
}
class Al extends hl {
  constructor(t) {
    super(), dl(
      this,
      t,
      Hl,
      Sl,
      gl,
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
  SvelteComponent: Bl,
  append: $,
  attr: tt,
  create_component: nt,
  destroy_component: it,
  detach: pn,
  element: oe,
  init: Tl,
  insert: vn,
  mount_component: rt,
  safe_not_equal: Cl,
  set_style: st,
  space: Vt,
  text: Xi,
  transition_in: ot,
  transition_out: at
} = window.__gradio__svelte__internal, { createEventDispatcher: Pl } = window.__gradio__svelte__internal, { onMount: Il, onDestroy: Nl } = window.__gradio__svelte__internal;
function Ol(e) {
  let t;
  return {
    c() {
      t = Xi("Cancel");
    },
    m(n, i) {
      vn(n, t, i);
    },
    d(n) {
      n && pn(t);
    }
  };
}
function Ll(e) {
  let t;
  return {
    c() {
      t = Xi("OK");
    },
    m(n, i) {
      vn(n, t, i);
    },
    d(n) {
      n && pn(t);
    }
  };
}
function Ml(e) {
  let t, n, i, r, s, u, o, a, f, l, h, c, _, b, g;
  return s = new Al({
    props: {
      value: (
        /*currentLabel*/
        e[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        e[2]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    e[4]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    e[6]
  ), a = new Fs({
    props: {
      value: (
        /*currentColor*/
        e[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), a.$on(
    "change",
    /*onColorChange*/
    e[5]
  ), h = new Mn({
    props: {
      $$slots: { default: [Ol] },
      $$scope: { ctx: e }
    }
  }), h.$on(
    "click",
    /*click_handler*/
    e[10]
  ), b = new Mn({
    props: {
      variant: "primary",
      $$slots: { default: [Ll] },
      $$scope: { ctx: e }
    }
  }), b.$on(
    "click",
    /*click_handler_1*/
    e[11]
  ), {
    c() {
      t = oe("div"), n = oe("div"), i = oe("span"), r = oe("div"), nt(s.$$.fragment), u = Vt(), o = oe("div"), nt(a.$$.fragment), f = Vt(), l = oe("div"), nt(h.$$.fragment), c = Vt(), _ = oe("div"), nt(b.$$.fragment), st(r, "margin-right", "10px"), st(o, "margin-right", "40px"), st(o, "margin-bottom", "8px"), st(l, "margin-right", "8px"), tt(i, "class", "model-content svelte-hkn2q1"), tt(n, "class", "modal-container svelte-hkn2q1"), tt(t, "class", "modal svelte-hkn2q1"), tt(t, "id", "model-box-edit");
    },
    m(d, m) {
      vn(d, t, m), $(t, n), $(n, i), $(i, r), rt(s, r, null), $(i, u), $(i, o), rt(a, o, null), $(i, f), $(i, l), rt(h, l, null), $(i, c), $(i, _), rt(b, _, null), g = !0;
    },
    p(d, [m]) {
      const y = {};
      m & /*currentLabel*/
      1 && (y.value = /*currentLabel*/
      d[0]), m & /*choices*/
      4 && (y.choices = /*choices*/
      d[2]), s.$set(y);
      const p = {};
      m & /*currentColor*/
      2 && (p.value = /*currentColor*/
      d[1]), a.$set(p);
      const T = {};
      m & /*$$scope*/
      16384 && (T.$$scope = { dirty: m, ctx: d }), h.$set(T);
      const C = {};
      m & /*$$scope*/
      16384 && (C.$$scope = { dirty: m, ctx: d }), b.$set(C);
    },
    i(d) {
      g || (ot(s.$$.fragment, d), ot(a.$$.fragment, d), ot(h.$$.fragment, d), ot(b.$$.fragment, d), g = !0);
    },
    o(d) {
      at(s.$$.fragment, d), at(a.$$.fragment, d), at(h.$$.fragment, d), at(b.$$.fragment, d), g = !1;
    },
    d(d) {
      d && pn(t), it(s), it(a), it(h), it(b);
    }
  };
}
function Rl(e, t, n) {
  let { label: i = "" } = t, { currentLabel: r = "" } = t, { choices: s = [] } = t, { choicesColors: u = [] } = t, { color: o = "" } = t, { currentColor: a = "" } = t;
  const f = Pl();
  function l(m) {
    f("change", {
      label: r,
      color: a,
      ok: m
    });
  }
  function h(m) {
    const { detail: y } = m;
    let p = y;
    Number.isInteger(p) ? (Array.isArray(u) && p < u.length && n(1, a = u[p]), Array.isArray(s) && p < s.length && n(0, r = s[p][0])) : n(0, r = p);
  }
  function c(m) {
    const { detail: y } = m;
    n(1, a = y);
  }
  function _(m) {
    h(m), l(!0);
  }
  function b(m) {
    switch (m.key) {
      case "Enter":
        l(!0);
        break;
    }
  }
  Il(() => {
    document.addEventListener("keydown", b), n(0, r = i), n(1, a = o);
  }), Nl(() => {
    document.removeEventListener("keydown", b);
  });
  const g = () => l(!1), d = () => l(!0);
  return e.$$set = (m) => {
    "label" in m && n(7, i = m.label), "currentLabel" in m && n(0, r = m.currentLabel), "choices" in m && n(2, s = m.choices), "choicesColors" in m && n(8, u = m.choicesColors), "color" in m && n(9, o = m.color), "currentColor" in m && n(1, a = m.currentColor);
  }, [
    r,
    a,
    s,
    l,
    h,
    c,
    _,
    i,
    u,
    o,
    g,
    d
  ];
}
class Vi extends Bl {
  constructor(t) {
    super(), Tl(this, t, Rl, Ml, Cl, {
      label: 7,
      currentLabel: 0,
      choices: 2,
      choicesColors: 8,
      color: 9,
      currentColor: 1
    });
  }
}
const J = (e, t, n) => Math.min(Math.max(e, t), n);
function qt(e, t) {
  if (e.startsWith("rgba"))
    return e.replace(/[\d.]+$/, t.toString());
  const n = e.match(/\d+/g);
  if (!n || n.length !== 3)
    return `rgba(50, 50, 50, ${t})`;
  const [i, r, s] = n;
  return `rgba(${i}, ${r}, ${s}, ${t})`;
}
class Wt {
  constructor(t, n, i, r, s, u, o, a, f, l, h = "rgb(255, 255, 255)", c = 0.5, _ = 25, b = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.stopDrag);
    }, this.handleDrag = (g) => {
      if (this.isDragging) {
        let d = g.clientX - this.offsetMouseX - this.xmin, m = g.clientY - this.offsetMouseY - this.ymin;
        const y = this.canvasXmax - this.canvasXmin, p = this.canvasYmax - this.canvasYmin;
        d = J(d, -this.xmin, y - this.xmax), m = J(m, -this.ymin, p - this.ymax), this.xmin += d, this.ymin += m, this.xmax += d, this.ymax += m, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleResize = (g) => {
      if (this.isResizing) {
        const d = g.clientX, m = g.clientY, y = d - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, p = m - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, T = this.canvasXmax - this.canvasXmin, C = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += y, this.ymin += p, this.xmin = J(this.xmin, 0, this.xmax - this.minSize), this.ymin = J(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += y, this.ymin += p, this.xmax = J(this.xmax, this.xmin + this.minSize, T), this.ymin = J(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += y, this.ymax += p, this.xmax = J(this.xmax, this.xmin + this.minSize, T), this.ymax = J(this.ymax, this.ymin + this.minSize, C);
            break;
          case 3:
            this.xmin += y, this.ymax += p, this.xmin = J(this.xmin, 0, this.xmax - this.minSize), this.ymax = J(this.ymax, this.ymin + this.minSize, C);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("mousemove", this.handleResize), document.removeEventListener("mouseup", this.stopResize);
    }, this.renderCallBack = t, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = r, this.canvasYmax = s, this.scaleFactor = b, this.label = u, this.isDragging = !1, this.xmin = o, this.ymin = a, this.xmax = f, this.ymax = l, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = 8, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = _, this.color = h, this.alpha = c;
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
  setSelected(t) {
    this.isSelected = t;
  }
  setScaleFactor(t) {
    let n = t / this.scaleFactor;
    this.xmin = Math.round(this.xmin * n), this.ymin = Math.round(this.ymin * n), this.xmax = Math.round(this.xmax * n), this.ymax = Math.round(this.ymax * n), this.updateHandles(), this.scaleFactor = t;
  }
  updateHandles() {
    const t = this.resizeHandleSize / 2;
    this.resizeHandles = [
      {
        xmin: this.xmin - t,
        ymin: this.ymin - t,
        xmax: this.xmin + t,
        ymax: this.ymin + t
      },
      {
        xmin: this.xmax - t,
        ymin: this.ymin - t,
        xmax: this.xmax + t,
        ymax: this.ymin + t
      },
      {
        xmin: this.xmax - t,
        ymin: this.ymax - t,
        xmax: this.xmax + t,
        ymax: this.ymax + t
      },
      {
        xmin: this.xmin - t,
        ymin: this.ymax - t,
        xmax: this.xmin + t,
        ymax: this.ymax + t
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  toCanvasCoordinates(t, n) {
    return t = t + this.canvasXmin, n = n + this.canvasYmin, [t, n];
  }
  toBoxCoordinates(t, n) {
    return t = t - this.canvasXmin, n = n - this.canvasYmin, [t, n];
  }
  render(t) {
    let n, i;
    if (t.beginPath(), [n, i] = this.toCanvasCoordinates(this.xmin, this.ymin), t.rect(n, i, this.getWidth(), this.getHeight()), t.fillStyle = qt(this.color, this.alpha), t.fill(), this.isSelected ? t.lineWidth = 4 : t.lineWidth = 2, t.strokeStyle = qt(this.color, 1), t.stroke(), t.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? t.font = "bold 14px Arial" : t.font = "12px Arial";
      const r = t.measureText(this.label).width + 10, s = 20;
      let u = this.xmin, o = this.ymin - s;
      t.fillStyle = "white", [u, o] = this.toCanvasCoordinates(u, o), t.fillRect(u, o, r, s), t.lineWidth = 1, t.strokeStyle = "black", t.strokeRect(u, o, r, s), t.fillStyle = "black", t.fillText(this.label, u + 5, o + 15);
    }
    t.fillStyle = qt(this.color, 1);
    for (const r of this.resizeHandles)
      [n, i] = this.toCanvasCoordinates(r.xmin, r.ymin), t.fillRect(
        n,
        i,
        r.xmax - r.xmin,
        r.ymax - r.ymin
      );
  }
  startDrag(t) {
    this.isDragging = !0, this.offsetMouseX = t.clientX - this.xmin, this.offsetMouseY = t.clientY - this.ymin, document.addEventListener("mousemove", this.handleDrag), document.addEventListener("mouseup", this.stopDrag);
  }
  isPointInsideBox(t, n) {
    return [t, n] = this.toBoxCoordinates(t, n), t >= this.xmin && t <= this.xmax && n >= this.ymin && n <= this.ymax;
  }
  indexOfPointInsideHandle(t, n) {
    [t, n] = this.toBoxCoordinates(t, n);
    for (let i = 0; i < this.resizeHandles.length; i++) {
      const r = this.resizeHandles[i];
      if (t >= r.xmin && t <= r.xmax && n >= r.ymin && n <= r.ymax)
        return this.resizingHandleIndex = i, i;
    }
    return -1;
  }
  startResize(t, n) {
    this.resizingHandleIndex = t, this.isResizing = !0, this.offsetMouseX = n.clientX - this.resizeHandles[t].xmin, this.offsetMouseY = n.clientY - this.resizeHandles[t].ymin, document.addEventListener("mousemove", this.handleResize), document.addEventListener("mouseup", this.stopResize);
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
];
const {
  SvelteComponent: kl,
  append: ge,
  attr: ae,
  binding_callbacks: Dl,
  bubble: si,
  check_outros: Yt,
  create_component: De,
  destroy_component: Ue,
  detach: pe,
  element: Ee,
  empty: Ul,
  group_outros: Zt,
  init: Gl,
  insert: ve,
  listen: ie,
  mount_component: Ge,
  noop: Fl,
  run_all: qi,
  safe_not_equal: zl,
  space: Fe,
  transition_in: G,
  transition_out: q
} = window.__gradio__svelte__internal, { onMount: jl, onDestroy: Xl, createEventDispatcher: Vl } = window.__gradio__svelte__internal;
function oi(e) {
  let t, n, i, r, s, u, o, a, f, l, h, c;
  return i = new Gr({}), u = new Or({}), f = new gr({}), {
    c() {
      t = Ee("span"), n = Ee("button"), De(i.$$.fragment), r = Fe(), s = Ee("button"), De(u.$$.fragment), o = Fe(), a = Ee("button"), De(f.$$.fragment), ae(n, "class", "icon svelte-182gnnj"), ae(s, "class", "icon svelte-182gnnj"), ae(a, "class", "icon svelte-182gnnj"), ae(t, "class", "canvas-control svelte-182gnnj");
    },
    m(_, b) {
      ve(_, t, b), ge(t, n), Ge(i, n, null), ge(t, r), ge(t, s), Ge(u, s, null), ge(t, o), ge(t, a), Ge(f, a, null), l = !0, h || (c = [
        ie(
          n,
          "click",
          /*click_handler*/
          e[22]
        ),
        ie(
          s,
          "click",
          /*click_handler_1*/
          e[23]
        ),
        ie(
          a,
          "click",
          /*click_handler_2*/
          e[24]
        )
      ], h = !0);
    },
    p: Fl,
    i(_) {
      l || (G(i.$$.fragment, _), G(u.$$.fragment, _), G(f.$$.fragment, _), l = !0);
    },
    o(_) {
      q(i.$$.fragment, _), q(u.$$.fragment, _), q(f.$$.fragment, _), l = !1;
    },
    d(_) {
      _ && pe(t), Ue(i), Ue(u), Ue(f), h = !1, qi(c);
    }
  };
}
function ai(e) {
  let t, n;
  return t = new Vi({
    props: {
      choices: (
        /*choices*/
        e[2]
      ),
      choicesColors: (
        /*choicesColors*/
        e[3]
      ),
      label: (
        /*selectedBox*/
        e[5] >= 0 && /*selectedBox*/
        e[5] < /*value*/
        e[0].boxes.length ? (
          /*value*/
          e[0].boxes[
            /*selectedBox*/
            e[5]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        e[5] >= 0 && /*selectedBox*/
        e[5] < /*value*/
        e[0].boxes.length ? Xe(
          /*value*/
          e[0].boxes[
            /*selectedBox*/
            e[5]
          ].color
        ) : ""
      )
    }
  }), t.$on(
    "change",
    /*onModalEditChange*/
    e[14]
  ), t.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    e[25]
  ), {
    c() {
      De(t.$$.fragment);
    },
    m(i, r) {
      Ge(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*choices*/
      4 && (s.choices = /*choices*/
      i[2]), r[0] & /*choicesColors*/
      8 && (s.choicesColors = /*choicesColors*/
      i[3]), r[0] & /*selectedBox, value*/
      33 && (s.label = /*selectedBox*/
      i[5] >= 0 && /*selectedBox*/
      i[5] < /*value*/
      i[0].boxes.length ? (
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[5]
        ].label
      ) : ""), r[0] & /*selectedBox, value*/
      33 && (s.color = /*selectedBox*/
      i[5] >= 0 && /*selectedBox*/
      i[5] < /*value*/
      i[0].boxes.length ? Xe(
        /*value*/
        i[0].boxes[
          /*selectedBox*/
          i[5]
        ].color
      ) : ""), t.$set(s);
    },
    i(i) {
      n || (G(t.$$.fragment, i), n = !0);
    },
    o(i) {
      q(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ue(t, i);
    }
  };
}
function li(e) {
  let t, n;
  return t = new Vi({
    props: {
      choices: (
        /*choices*/
        e[2]
      ),
      choicesColors: (
        /*choicesColors*/
        e[3]
      ),
      color: Array.isArray(
        /*choicesColors*/
        e[3]
      ) && /*choicesColors*/
      e[3].length > 0 ? (
        /*choicesColors*/
        e[3][0]
      ) : Xe(K[
        /*value*/
        e[0].boxes.length % K.length
      ])
    }
  }), t.$on(
    "change",
    /*onModalNewChange*/
    e[11]
  ), t.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    e[26]
  ), {
    c() {
      De(t.$$.fragment);
    },
    m(i, r) {
      Ge(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*choices*/
      4 && (s.choices = /*choices*/
      i[2]), r[0] & /*choicesColors*/
      8 && (s.choicesColors = /*choicesColors*/
      i[3]), r[0] & /*choicesColors, value*/
      9 && (s.color = Array.isArray(
        /*choicesColors*/
        i[3]
      ) && /*choicesColors*/
      i[3].length > 0 ? (
        /*choicesColors*/
        i[3][0]
      ) : Xe(K[
        /*value*/
        i[0].boxes.length % K.length
      ])), t.$set(s);
    },
    i(i) {
      n || (G(t.$$.fragment, i), n = !0);
    },
    o(i) {
      q(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ue(t, i);
    }
  };
}
function ql(e) {
  let t, n, i, r, s, u, o, a, f, l = (
    /*interactive*/
    e[1] && oi(e)
  ), h = (
    /*editModalVisible*/
    e[6] && ai(e)
  ), c = (
    /*newModalVisible*/
    e[7] && li(e)
  );
  return {
    c() {
      t = Ee("div"), n = Ee("canvas"), i = Fe(), l && l.c(), r = Fe(), h && h.c(), s = Fe(), c && c.c(), u = Ul(), ae(n, "class", "canvas-annotator svelte-182gnnj"), ae(t, "class", "canvas-container svelte-182gnnj"), ae(t, "tabindex", "-1");
    },
    m(_, b) {
      ve(_, t, b), ge(t, n), e[21](n), ve(_, i, b), l && l.m(_, b), ve(_, r, b), h && h.m(_, b), ve(_, s, b), c && c.m(_, b), ve(_, u, b), o = !0, a || (f = [
        ie(
          n,
          "mousedown",
          /*handleMouseDown*/
          e[8]
        ),
        ie(
          n,
          "mouseup",
          /*handleMouseUp*/
          e[9]
        ),
        ie(
          n,
          "dblclick",
          /*handleDoubleClick*/
          e[13]
        ),
        ie(
          t,
          "focusin",
          /*handleCanvasFocus*/
          e[16]
        ),
        ie(
          t,
          "focusout",
          /*handleCanvasBlur*/
          e[17]
        )
      ], a = !0);
    },
    p(_, b) {
      /*interactive*/
      _[1] ? l ? (l.p(_, b), b[0] & /*interactive*/
      2 && G(l, 1)) : (l = oi(_), l.c(), G(l, 1), l.m(r.parentNode, r)) : l && (Zt(), q(l, 1, 1, () => {
        l = null;
      }), Yt()), /*editModalVisible*/
      _[6] ? h ? (h.p(_, b), b[0] & /*editModalVisible*/
      64 && G(h, 1)) : (h = ai(_), h.c(), G(h, 1), h.m(s.parentNode, s)) : h && (Zt(), q(h, 1, 1, () => {
        h = null;
      }), Yt()), /*newModalVisible*/
      _[7] ? c ? (c.p(_, b), b[0] & /*newModalVisible*/
      128 && G(c, 1)) : (c = li(_), c.c(), G(c, 1), c.m(u.parentNode, u)) : c && (Zt(), q(c, 1, 1, () => {
        c = null;
      }), Yt());
    },
    i(_) {
      o || (G(l), G(h), G(c), o = !0);
    },
    o(_) {
      q(l), q(h), q(c), o = !1;
    },
    d(_) {
      _ && (pe(t), pe(i), pe(r), pe(s), pe(u)), e[21](null), l && l.d(_), h && h.d(_), c && c.d(_), a = !1, qi(f);
    }
  };
}
function ui(e) {
  var t = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), i = parseInt(e.slice(5, 7), 16);
  return "rgb(" + t + ", " + n + ", " + i + ")";
}
function Xe(e) {
  const t = e.match(/(\d+(\.\d+)?)/g), n = parseInt(t[0]), i = parseInt(t[1]), r = parseInt(t[2]);
  return "#" + (1 << 24 | n << 16 | i << 8 | r).toString(16).slice(1);
}
function Wl(e, t, n) {
  let { imageUrl: i = null } = t, { interactive: r } = t, { boxAlpha: s = 0.5 } = t, { boxMinSize: u = 25 } = t, { value: o } = t, { choices: a = [] } = t, { choicesColors: f = [] } = t, l, h, c = null, _ = -1, b = 0, g = 0, d = 0, m = 0, y = 1, p = 0, T = 0, C = !1, O = !1;
  const P = Vl();
  function E() {
    if (h) {
      h.clearRect(0, 0, l.width, l.height), c !== null && h.drawImage(c, b, g, p, T);
      for (const v of o.boxes.slice().reverse())
        v.render(h);
    }
  }
  function M(v) {
    n(5, _ = v), o.boxes.forEach((A) => {
      A.setSelected(!1);
    }), v >= 0 && v < o.boxes.length && o.boxes[v].setSelected(!0), E();
  }
  function x(v) {
    if (!r)
      return;
    const A = l.getBoundingClientRect(), R = v.clientX - A.left, U = v.clientY - A.top;
    for (const [Ie, Y] of o.boxes.entries()) {
      const Qe = Y.indexOfPointInsideHandle(R, U);
      if (Qe >= 0) {
        M(Ie), Y.startResize(Qe, v);
        return;
      }
    }
    for (const [Ie, Y] of o.boxes.entries())
      if (Y.isPointInsideBox(R, U)) {
        M(Ie), Y.startDrag(v);
        return;
      }
    M(-1);
  }
  function L(v) {
    P("change");
  }
  function W(v) {
    if (r)
      switch (v.key) {
        case "Delete":
          Pe();
          break;
      }
  }
  function ee() {
    n(7, O = !0);
  }
  function At(v) {
    n(7, O = !1);
    const { detail: A } = v;
    let R = A.label, U = A.color;
    if (A.ok) {
      U === null || U === "" ? U = K[o.boxes.length % K.length] : U = ui(U);
      let Y = p / 3 / y, Qe = p / 3 * 2 / y, tr = T / 3 / y, nr = T / 3 * 2 / y, ir = new Wt(E, b, g, d, m, R, Math.round(Y), Math.round(tr), Math.round(Qe), Math.round(nr), U, s, u);
      n(0, o.boxes = [ir, ...o.boxes], o), E(), P("change");
    }
  }
  function Ce() {
    _ >= 0 && _ < o.boxes.length && n(6, C = !0);
  }
  function Bt(v) {
    r && Ce();
  }
  function Tt(v) {
    n(6, C = !1);
    const { detail: A } = v;
    let R = A.label, U = A.color;
    if (A.ok && _ >= 0 && _ < o.boxes.length) {
      let Y = o.boxes[_];
      Y.label = R, Y.color = ui(U), E(), P("change");
    }
  }
  function Pe() {
    _ >= 0 && _ < o.boxes.length && (o.boxes.splice(_, 1), M(-1), P("change"));
  }
  function ue() {
    if (l) {
      if (y = 1, n(4, l.width = l.clientWidth, l), c !== null)
        if (c.width > l.width)
          y = l.width / c.width, p = c.width * y, T = c.height * y, b = 0, g = 0, d = p, m = T, n(4, l.height = T, l);
        else {
          p = c.width, T = c.height;
          var v = (l.width - p) / 2;
          b = v, g = 0, d = v + p, m = c.height, n(4, l.height = T, l);
        }
      else
        b = 0, g = 0, d = l.width, m = l.height, n(4, l.height = l.clientHeight, l);
      if (d > 0 && m > 0)
        for (const A of o.boxes)
          A.canvasXmin = b, A.canvasYmin = g, A.canvasXmax = d, A.canvasYmax = m, A.setScaleFactor(y);
      E(), P("change");
    }
  }
  const w = new ResizeObserver(ue);
  function yn() {
    for (let v = 0; v < o.boxes.length; v++) {
      let A = o.boxes[v];
      if (!(A instanceof Wt)) {
        let R = "", U = "";
        A.hasOwnProperty("color") ? (R = A.color, Array.isArray(R) && R.length === 3 && (R = `rgb(${R[0]}, ${R[1]}, ${R[2]})`)) : R = K[v % K.length], A.hasOwnProperty("label") && (U = A.label), A = new Wt(E, b, g, d, m, U, A.xmin, A.ymin, A.xmax, A.ymax, R, s, u), n(0, o.boxes[v] = A, o);
      }
    }
  }
  function Ze() {
    i !== null && (c === null || c.src != i) && (c = new Image(), c.src = i, c.onload = function() {
      ue(), E();
    });
  }
  jl(() => {
    if (Array.isArray(a) && a.length > 0 && (!Array.isArray(f) || f.length == 0))
      for (let v = 0; v < a.length; v++) {
        let A = K[v % K.length];
        f.push(Xe(A));
      }
    h = l.getContext("2d"), w.observe(l), Ze(), ue(), E();
  });
  function Wi() {
    document.addEventListener("keydown", W);
  }
  function Yi() {
    document.removeEventListener("keydown", W);
  }
  Xl(() => {
    document.removeEventListener("keydown", W);
  });
  function Zi(v) {
    Dl[v ? "unshift" : "push"](() => {
      l = v, n(4, l);
    });
  }
  const Qi = () => ee(), Ji = () => Ce(), Ki = () => Pe();
  function $i(v) {
    si.call(this, e, v);
  }
  function er(v) {
    si.call(this, e, v);
  }
  return e.$$set = (v) => {
    "imageUrl" in v && n(18, i = v.imageUrl), "interactive" in v && n(1, r = v.interactive), "boxAlpha" in v && n(19, s = v.boxAlpha), "boxMinSize" in v && n(20, u = v.boxMinSize), "value" in v && n(0, o = v.value), "choices" in v && n(2, a = v.choices), "choicesColors" in v && n(3, f = v.choicesColors);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value*/
    1 && (Ze(), yn(), ue(), E());
  }, [
    o,
    r,
    a,
    f,
    l,
    _,
    C,
    O,
    x,
    L,
    ee,
    At,
    Ce,
    Bt,
    Tt,
    Pe,
    Wi,
    Yi,
    i,
    s,
    u,
    Zi,
    Qi,
    Ji,
    Ki,
    $i,
    er
  ];
}
class Yl extends kl {
  constructor(t) {
    super(), Gl(
      this,
      t,
      Wl,
      ql,
      zl,
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
  SvelteComponent: Zl,
  add_flush_callback: Ql,
  bind: Jl,
  binding_callbacks: Kl,
  create_component: $l,
  destroy_component: eu,
  init: tu,
  mount_component: nu,
  safe_not_equal: iu,
  transition_in: ru,
  transition_out: su
} = window.__gradio__svelte__internal, { createEventDispatcher: ou } = window.__gradio__svelte__internal;
function au(e) {
  let t, n, i;
  function r(u) {
    e[10](u);
  }
  let s = {
    interactive: (
      /*interactive*/
      e[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      e[2]
    ),
    choices: (
      /*labelList*/
      e[3]
    ),
    choicesColors: (
      /*labelColors*/
      e[4]
    ),
    boxMinSize: (
      /*boxMinSize*/
      e[5]
    ),
    imageUrl: (
      /*resolved_src*/
      e[6]
    )
  };
  return (
    /*value*/
    e[0] !== void 0 && (s.value = /*value*/
    e[0]), t = new Yl({ props: s }), Kl.push(() => Jl(t, "value", r)), t.$on(
      "change",
      /*change_handler*/
      e[11]
    ), {
      c() {
        $l(t.$$.fragment);
      },
      m(u, o) {
        nu(t, u, o), i = !0;
      },
      p(u, [o]) {
        const a = {};
        o & /*interactive*/
        2 && (a.interactive = /*interactive*/
        u[1]), o & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        u[2]), o & /*labelList*/
        8 && (a.choices = /*labelList*/
        u[3]), o & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        u[4]), o & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        u[5]), o & /*resolved_src*/
        64 && (a.imageUrl = /*resolved_src*/
        u[6]), !n && o & /*value*/
        1 && (n = !0, a.value = /*value*/
        u[0], Ql(() => n = !1)), t.$set(a);
      },
      i(u) {
        i || (ru(t.$$.fragment, u), i = !0);
      },
      o(u) {
        su(t.$$.fragment, u), i = !1;
      },
      d(u) {
        eu(t, u);
      }
    }
  );
}
function lu(e, t, n) {
  let { src: i = void 0 } = t, { interactive: r } = t, { boxesAlpha: s } = t, { labelList: u } = t, { labelColors: o } = t, { boxMinSize: a } = t, { value: f } = t, l, h;
  const c = ou();
  function _(g) {
    f = g, n(0, f);
  }
  const b = () => c("change");
  return e.$$set = (g) => {
    "src" in g && n(8, i = g.src), "interactive" in g && n(1, r = g.interactive), "boxesAlpha" in g && n(2, s = g.boxesAlpha), "labelList" in g && n(3, u = g.labelList), "labelColors" in g && n(4, o = g.labelColors), "boxMinSize" in g && n(5, a = g.boxMinSize), "value" in g && n(0, f = g.value);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*src, latest_src*/
    768) {
      n(6, l = i), n(9, h = i);
      const g = i;
      fr(g).then((d) => {
        h === g && n(6, l = d);
      });
    }
  }, [
    f,
    r,
    s,
    u,
    o,
    a,
    l,
    c,
    i,
    h,
    _,
    b
  ];
}
class uu extends Zl {
  constructor(t) {
    super(), tu(this, t, lu, au, iu, {
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
  SvelteComponent: fu,
  attr: hu,
  check_outros: cu,
  create_component: mu,
  destroy_component: _u,
  detach: du,
  element: bu,
  group_outros: gu,
  init: pu,
  insert: vu,
  mount_component: yu,
  safe_not_equal: Eu,
  toggle_class: ne,
  transition_in: mt,
  transition_out: hn
} = window.__gradio__svelte__internal;
function fi(e) {
  let t, n;
  return t = new uu({
    props: {
      src: (
        /*samples_dir*/
        e[1] + /*value*/
        e[0].path
      ),
      alt: ""
    }
  }), {
    c() {
      mu(t.$$.fragment);
    },
    m(i, r) {
      yu(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*samples_dir, value*/
      3 && (s.src = /*samples_dir*/
      i[1] + /*value*/
      i[0].path), t.$set(s);
    },
    i(i) {
      n || (mt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      hn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      _u(t, i);
    }
  };
}
function wu(e) {
  let t, n, i = (
    /*value*/
    e[0] && fi(e)
  );
  return {
    c() {
      t = bu("div"), i && i.c(), hu(t, "class", "container svelte-1sgcyba"), ne(
        t,
        "table",
        /*type*/
        e[2] === "table"
      ), ne(
        t,
        "gallery",
        /*type*/
        e[2] === "gallery"
      ), ne(
        t,
        "selected",
        /*selected*/
        e[3]
      ), ne(
        t,
        "border",
        /*value*/
        e[0]
      );
    },
    m(r, s) {
      vu(r, t, s), i && i.m(t, null), n = !0;
    },
    p(r, [s]) {
      /*value*/
      r[0] ? i ? (i.p(r, s), s & /*value*/
      1 && mt(i, 1)) : (i = fi(r), i.c(), mt(i, 1), i.m(t, null)) : i && (gu(), hn(i, 1, 1, () => {
        i = null;
      }), cu()), (!n || s & /*type*/
      4) && ne(
        t,
        "table",
        /*type*/
        r[2] === "table"
      ), (!n || s & /*type*/
      4) && ne(
        t,
        "gallery",
        /*type*/
        r[2] === "gallery"
      ), (!n || s & /*selected*/
      8) && ne(
        t,
        "selected",
        /*selected*/
        r[3]
      ), (!n || s & /*value*/
      1) && ne(
        t,
        "border",
        /*value*/
        r[0]
      );
    },
    i(r) {
      n || (mt(i), n = !0);
    },
    o(r) {
      hn(i), n = !1;
    },
    d(r) {
      r && du(t), i && i.d();
    }
  };
}
function xu(e, t, n) {
  let { value: i } = t, { samples_dir: r } = t, { type: s } = t, { selected: u = !1 } = t;
  return e.$$set = (o) => {
    "value" in o && n(0, i = o.value), "samples_dir" in o && n(1, r = o.samples_dir), "type" in o && n(2, s = o.type), "selected" in o && n(3, u = o.selected);
  }, [i, r, s, u];
}
class Hu extends fu {
  constructor(t) {
    super(), pu(this, t, xu, wu, Eu, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  Hu as default
};
