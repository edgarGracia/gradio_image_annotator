import "../../../../../assets/svelte/svelte_internal_flags_legacy.js";
import * as e from "../../../../../assets/svelte/svelte_internal_client.js";
var m = e.from_html('<img alt=""/>'), v = e.from_html("<div><!></div>");
function u(o, t) {
  e.push(t, !1);
  let a = e.prop(t, "value", 8), p = e.prop(t, "type", 8), d = e.prop(t, "selected", 8, !1);
  e.init();
  var l = v();
  let s;
  var f = e.child(l);
  {
    var c = (r) => {
      var i = m();
      e.template_effect(() => e.set_attribute(i, "src", (e.deep_read_state(a()), e.untrack(() => a().url)))), e.append(r, i);
    };
    e.if(f, (r) => {
      a() && r(c);
    });
  }
  e.reset(l), e.template_effect(() => s = e.set_class(l, 1, "container svelte-s3apn9", null, s, {
    table: p() === "table",
    gallery: p() === "gallery",
    selected: d(),
    border: a()
  })), e.append(o, l), e.pop();
}
export {
  u as default
};
