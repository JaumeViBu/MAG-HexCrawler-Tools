function rando(a, b, e) {
  var g = function (f) { return "undefined" === typeof f }, k = function (f) { return "number" === typeof f && !isNaN(f) }, d = function (f) { return !g(f) && null !== f && f.constructor === Array }, c = function () { try { for (var f, q = [], r; 30 > (r = "." + q.join("")).length;) { f = (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(5)); for (var p = 0; p < f.length; p++) { var t = 4E9 > f[p] ? f[p].toString().slice(1) : ""; 0 < t.length && (q[q.length] = t) } } return Number(r) } catch (v) { return Math.random() } }; try {
    if (null !== a && null !== b && null !==
      e) {
        if (g(a)) return c(); if (window.jQuery && a instanceof jQuery && g(b)) { if (0 == a.length) return !1; var n = rando(0, a.length - 1); return { index: n, value: a.eq(n) } } if (k(a) && k(b) && "string" === typeof e && "float" == e.toLowerCase().trim()) { if (a > b) { var m = b; b = a; a = m } return c() * (b - a) + a } if (d(a) && 0 < a.length && g(b)) { var l = c() * a.length << 0; return { index: l, value: a[l] } } if ("object" === typeof a && g(b)) { l = a; var h = Object.keys(l); if (0 < h.length) { var u = h[h.length * c() << 0]; return { key: u, value: l[u] } } } if ((!0 === a && !1 === b || !1 === a && !0 === b) && g(e)) return .5 >
          rando(); if (k(a) && g(b)) return 0 <= a ? rando(0, a) : rando(a, 0); if (k(a) && "string" === typeof b && "float" == b.toLowerCase().trim() && g(e)) return 0 <= a ? rando(0, a, "float") : rando(a, 0, "float"); if (k(a) && k(b) && g(e)) return a > b && (m = b, b = a, a = m), a = Math.floor(a), b = Math.floor(b), Math.floor(c() * (b - a + 1) + a); if ("string" === typeof a && 0 < a.length && g(b)) return a.charAt(rando(0, a.length - 1))
    } return !1
  } catch (f) { return !1 }
}
function randoSequence(a, b) {
  var e = function (h) { return "undefined" === typeof h }, g = function (h) { return "number" === typeof h && !isNaN(h) }, k = function (h) { return !e(h) && null !== h && h.constructor === Array }; try {
    if (e(a) || null === a || null === b) return !1; var d = []; if (window.jQuery && a instanceof jQuery && e(b)) { if (0 < a.length) { d = randoSequence(0, a.length - 1); for (var c = 0; c < d.length; c++)d[c] = { index: d[c], value: a.eq(d[c]) } } return d } if (e(b)) if (k(a) && e(b)) for (c = 0; c < a.length; c++)d[d.length] = { index: c, value: a[c] }; else if ("object" === typeof a &&
      e(b)) for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d[d.length] = { key: n, value: a[n] }); else if ("string" === typeof a && e(b)) for (c = 0; c < a.length; c++)d[d.length] = a.charAt(c); else return g(a) && e(b) ? 0 <= a ? randoSequence(0, a) : randoSequence(a, 0) : !1; else { if (!g(a) || !g(b) || 0 < a % 1 || 0 < b % 1) return !1; if (a > b) { var m = b; b = a; a = m } for (c = a; c <= b; c++)d[d.length] = c } for (c = d.length - 1; 0 < c; c--) { var l = rando(c); m = d[c]; d[c] = d[l]; d[l] = m } return d
  } catch (h) { return !1 }
};
