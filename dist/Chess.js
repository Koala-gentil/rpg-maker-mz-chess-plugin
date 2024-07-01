/*:
 * @target MZ
 * @plugindesc Chess game
 * @author Koala-Gentil
 *
 * @command StartChessGame
 * @text Start Chess Game
 * @desc Display a dialog to play a chess game.
 *
 * @arg variableId
 * @type variable
 * @text ID de la variable
 * @desc ID de la variable où le résultat de la partie sera stocké (-1 si perdu, 0 si nul, 1 si gagné).
 */
(() => {
  // src/utils.js
  function loadCss() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/css/chessboard2.css";
    document.head.appendChild(link);
  }
  function createDialog() {
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "0";
    dialog.style.left = "0";
    dialog.style.width = "100%";
    dialog.style.height = "100%";
    dialog.style.display = "flex";
    dialog.style.justifyContent = "center";
    dialog.style.alignItems = "center";
    dialog.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    dialog.style.zIndex = "10";
    document.body.appendChild(dialog);
    return {
      dialog,
      removeDialog: () => document.body.removeChild(dialog)
    };
  }
  function createChessboardContainer(dialog) {
    const container = document.createElement("div");
    container.style.width = "calc(100% - 30px)";
    container.style.height = "calc(100% - 30px)";
    container.style.maxWidth = "calc(100vh - 30px)";
    container.style.maxHeight = "calc(100vh - 30px)";
    container.style.backgroundColor = "white";
    dialog.appendChild(container);
    return container;
  }

  // node_modules/@chrisoakman/chessboard2/dist/chessboard2.min.mjs
  var e;
  var r = function(a) {
    var b = typeof a;
    return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
  };
  var zd = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  };
  var ea = function(a) {
    return Object.prototype.hasOwnProperty.call(a, ba) && a[ba] || (a[ba] = ++ca);
  };
  var Wf = function(a) {
    let b = 0;
    return function(c) {
      aa.clearTimeout(b);
      const d = arguments;
      b = aa.setTimeout(function() {
        a.apply(void 0, d);
      }, 10);
    };
  };
  var da = function(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = d;
    return b;
  };
  var $f = function(a, b) {
    return null !== a && b in a ? a[b] : void 0;
  };
  var bg = function(a, b) {
    a.sort(b || ag);
  };
  var cg = function(a, b) {
    const c = Array(a.length);
    for (let f = 0; f < a.length; f++) c[f] = { index: f, value: a[f] };
    const d = b || ag;
    bg(c, function(f, g) {
      return d(f.value, g.value) || f.index - g.index;
    });
    for (b = 0; b < a.length; b++) a[b] = c[b].value;
  };
  var ag = function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  };
  var t = function(a) {
    return -1 != fa.indexOf(a);
  };
  var ha = function() {
    return t("Firefox") || t("FxiOS");
  };
  var ia = function() {
    return (t("Chrome") || t("CriOS")) && !t("Edge");
  };
  var ja = function(a, b) {
    null != a && this.append.apply(this, arguments);
  };
  var dg = function() {
    return new G(
      null,
      5,
      [ub, true, vb, true, wb, false, xb, false, yb, null],
      null
    );
  };
  var w = function(a) {
    return null != a && false !== a;
  };
  var eg = function(a) {
    return null == a;
  };
  var pa = function(a) {
    return a instanceof Array;
  };
  var fg = function(a) {
    return null == a ? true : false === a ? true : false;
  };
  var gg = function(a) {
    return null != a ? a.constructor === Object : false;
  };
  var x = function(a, b) {
    return a[r(null == b ? null : b)] ? true : a._ ? true : false;
  };
  var hg = function(a) {
    return null == a ? null : a.constructor;
  };
  var y = function(a, b) {
    var c = hg(b);
    return Error(["No protocol method ", a, " defined for type ", w(w(c) ? c.Eb : c) ? c.ub : r(b), ": ", b].join(""));
  };
  var qa = function(a) {
    var b = a.ub;
    return w(b) ? b : B.g(a);
  };
  var sa = function(a) {
    for (var b = a.length, c = Array(b), d = 0; ; ) if (d < b) c[d] = a[d], d += 1;
    else break;
    return c;
  };
  var ig = function(a) {
    function b(d, f) {
      d.push(f);
      return d;
    }
    var c = [];
    return Jc ? Jc(b, c, a) : Kc.call(null, b, c, a);
  };
  var ta = function() {
  };
  var va = function() {
  };
  var wa = function(a) {
    if (null != a && null != a.H) a = a.H(a);
    else {
      var b = wa[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = wa._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("ICounted.-count", a);
    }
    return a;
  };
  var xa = function() {
  };
  var ya = function(a) {
    if (null != a && null != a.V) a = a.V(a);
    else {
      var b = ya[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ya._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IEmptyableCollection.-empty", a);
    }
    return a;
  };
  var jg = function() {
  };
  var za = function(a, b) {
    if (null != a && null != a.U) a = a.U(a, b);
    else {
      var c = za[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = za._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("ICollection.-conj", a);
    }
    return a;
  };
  var Aa = function() {
  };
  var kg = function() {
  };
  var D = function(a) {
    if (null != a && null != a.Y) a = a.Y(a);
    else {
      var b = D[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = D._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("ISeq.-first", a);
    }
    return a;
  };
  var Ca = function(a) {
    if (null != a && null != a.da) a = a.da(a);
    else {
      var b = Ca[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Ca._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("ISeq.-rest", a);
    }
    return a;
  };
  var Da = function() {
  };
  var Ea = function() {
  };
  var Ha = function() {
  };
  var Ia = function(a, b) {
    if (null != a && null != a.Ya) a = a.Ya(a, b);
    else {
      var c = Ia[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Ia._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IAssociative.-contains-key?", a);
    }
    return a;
  };
  var Ja = function(a, b, c) {
    if (null != a && null != a.ya) a = a.ya(a, b, c);
    else {
      var d = Ja[r(null == a ? null : a)];
      if (null != d) a = d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else if (d = Ja._, null != d) a = d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else throw y("IAssociative.-assoc", a);
    }
    return a;
  };
  var Ka = function(a, b) {
    if (null != a && null != a.fb) a = a.fb(a, b);
    else {
      var c = Ka[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Ka._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IFind.-find", a);
    }
    return a;
  };
  var La = function() {
  };
  var lg = function(a, b) {
    if (null != a && null != a.rc) a = a.rc(a, b);
    else {
      var c = lg[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = lg._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IMap.-dissoc", a);
    }
    return a;
  };
  var Ma = function(a) {
    if (null != a && null != a.Ob) a = a.key;
    else {
      var b = Ma[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Ma._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IMapEntry.-key", a);
    }
    return a;
  };
  var Na = function(a) {
    if (null != a && null != a.Pb) a = a.J;
    else {
      var b = Na[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Na._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IMapEntry.-val", a);
    }
    return a;
  };
  var Oa = function() {
  };
  var mg = function(a) {
    if (null != a && null != a.nc) a = a.nc(a);
    else {
      var b = mg[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = mg._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y(
        "IStack.-peek",
        a
      );
    }
    return a;
  };
  var ng = function(a) {
    if (null != a && null != a.oc) a = a.oc(a);
    else {
      var b = ng[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ng._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IStack.-pop", a);
    }
    return a;
  };
  var Pa = function() {
  };
  var Qa = function(a) {
    if (null != a && null != a.Jb) a = a.Jb(a);
    else {
      var b = Qa[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Qa._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IDeref.-deref", a);
    }
    return a;
  };
  var Ra = function() {
  };
  var Sa = function(a) {
    if (null != a && null != a.P) a = a.P(a);
    else {
      var b = Sa[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Sa._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IMeta.-meta", a);
    }
    return a;
  };
  var Ta = function(a, b) {
    if (null != a && null != a.R) a = a.R(a, b);
    else {
      var c = Ta[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Ta._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IWithMeta.-with-meta", a);
    }
    return a;
  };
  var Ua = function() {
  };
  var Xa = function() {
  };
  var Ya = function(a, b) {
    if (null != a && null != a.sb) a = a.sb(a, b, true);
    else {
      var c = Ya[r(null == a ? null : a)];
      if (null != c) a = c.l ? c.l(a, b, true) : c.call(null, a, b, true);
      else if (c = Ya._, null != c) a = c.l ? c.l(a, b, true) : c.call(null, a, b, true);
      else throw y("IKVReduce.-kv-reduce", a);
    }
    return a;
  };
  var Za = function(a, b) {
    if (null != a && null != a.K) a = a.K(a, b);
    else {
      var c = Za[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Za._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IEquiv.-equiv", a);
    }
    return a;
  };
  var $a = function(a) {
    if (null != a && null != a.O) a = a.O(a);
    else {
      var b = $a[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = $a._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IHash.-hash", a);
    }
    return a;
  };
  var ab = function() {
  };
  var bb = function(a) {
    if (null != a && null != a.I) a = a.I(a);
    else {
      var b = bb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = bb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("ISeqable.-seq", a);
    }
    return a;
  };
  var cb = function() {
  };
  var db = function() {
  };
  var eb = function() {
  };
  var fb = function() {
  };
  var gb = function(a) {
    if (null != a && null != a.tb) a = a.tb(a);
    else {
      var b = gb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = gb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IReversible.-rseq", a);
    }
    return a;
  };
  var F = function(a, b) {
    if (null != a && null != a.Db) a = a.Db(a, b);
    else {
      var c = F[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = F._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IWriter.-write", a);
    }
    return a;
  };
  var hb = function() {
  };
  var ib = function(a, b, c) {
    if (null != a && null != a.M) a = a.M(a, b, c);
    else {
      var d = ib[r(null == a ? null : a)];
      if (null != d) a = d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else if (d = ib._, null != d) a = d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else throw y("IPrintWithWriter.-pr-writer", a);
    }
    return a;
  };
  var qg = function(a) {
    var b = og, c = pg;
    if (null != a && null != a.sc) a.sc(a, b, c);
    else {
      var d = qg[r(null == a ? null : a)];
      if (null != d) d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else if (d = qg._, null != d) d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else throw y("IWatchable.-add-watch", a);
    }
  };
  var jb = function(a) {
    if (null != a && null != a.Za) a = a.Za(a);
    else {
      var b = jb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = jb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IEditableCollection.-as-transient", a);
    }
    return a;
  };
  var kb = function(a, b) {
    if (null != a && null != a.ab) a = a.ab(a, b);
    else {
      var c = kb[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = kb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("ITransientCollection.-conj!", a);
    }
    return a;
  };
  var lb = function(a) {
    if (null != a && null != a.ib) a = a.ib(a);
    else {
      var b = lb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = lb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y(
        "ITransientCollection.-persistent!",
        a
      );
    }
    return a;
  };
  var mb = function(a, b, c) {
    if (null != a && null != a.$a) a = a.$a(a, b, c);
    else {
      var d = mb[r(null == a ? null : a)];
      if (null != d) a = d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else if (d = mb._, null != d) a = d.l ? d.l(a, b, c) : d.call(null, a, b, c);
      else throw y("ITransientAssociative.-assoc!", a);
    }
    return a;
  };
  var rg = function() {
  };
  var sg = function(a, b) {
    if (null != a && null != a.lc) a = a.lc(a, b);
    else {
      var c = sg[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = sg._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y(
        "IComparable.-compare",
        a
      );
    }
    return a;
  };
  var nb = function(a) {
    if (null != a && null != a.yb) a = a.yb(a);
    else {
      var b = nb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = nb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IChunk.-drop-first", a);
    }
    return a;
  };
  var ob = function(a) {
    if (null != a && null != a.eb) a = a.eb(a);
    else {
      var b = ob[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ob._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IChunkedSeq.-chunked-first", a);
    }
    return a;
  };
  var pb = function(a) {
    if (null != a && null != a.za) a = a.za(a);
    else {
      var b = pb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = pb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IChunkedSeq.-chunked-rest", a);
    }
    return a;
  };
  var tg = function(a, b) {
    if (null != a && null != a.wc) a = a.wc(a, b);
    else {
      var c = tg[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = tg._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IReset.-reset!", a);
    }
    return a;
  };
  var qb = function() {
  };
  var rb = function(a) {
    if (null != a && null != a.na) a = a.na(a);
    else {
      var b = rb[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = rb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IIterable.-iterator", a);
    }
    return a;
  };
  var sb = function(a) {
    this.Wb = a;
    this.j = 1073741824;
    this.A = 0;
  };
  var tb = function(a) {
    var b = new ja();
    a.M(null, new sb(b), dg());
    return B.g(b);
  };
  var Ab = function(a) {
    a = zb(a | 0, -862048943);
    return zb(a << 15 | a >>> -15, 461845907);
  };
  var Bb = function(a, b) {
    a = (a | 0) ^ (b | 0);
    return zb(a << 13 | a >>> -13, 5) + -430675100 | 0;
  };
  var Cb = function(a, b) {
    a = (a | 0) ^ b;
    a = zb(a ^ a >>> 16, -2048144789);
    a = zb(a ^ a >>> 13, -1028477387);
    return a ^ a >>> 16;
  };
  var Db = function(a) {
    a: {
      var b = 1;
      for (var c = 0; ; ) if (b < a.length) c = Bb(c, Ab(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16)), b += 2;
      else {
        b = c;
        break a;
      }
    }
    return Cb(1 === (a.length & 1) ? b ^ Ab(a.charCodeAt(a.length - 1)) : b, zb(2, a.length));
  };
  var Gb = function(a) {
    255 < Fb && (Eb = {}, Fb = 0);
    if (null == a) return 0;
    var b = Eb[a];
    if ("number" === typeof b) a = b;
    else {
      a: if (null != a) if (b = a.length, 0 < b) for (var c = 0, d = 0; ; ) if (c < b) d = zb(31, d) + a.charCodeAt(c), c += 1;
      else {
        b = d;
        break a;
      }
      else b = 0;
      else b = 0;
      Eb[a] = b;
      Fb += 1;
      a = b;
    }
    return a;
  };
  var Hb = function(a) {
    if (null != a && (a.j & 4194304 || v === a.Zb)) return a.O(null) ^ 0;
    if ("number" === typeof a) {
      if (isFinite(a)) return Math.floor(a) % 2147483647;
      switch (a) {
        case Infinity:
          return 2146435072;
        case -Infinity:
          return -1048576;
        default:
          return 2146959360;
      }
    } else return true === a ? a = 1231 : false === a ? a = 1237 : "string" === typeof a ? (a = Gb(a), a = 0 === a ? a : Cb(Bb(0, Ab(a)), 4)) : a = a instanceof Date ? a.valueOf() ^ 0 : null == a ? 0 : $a(a) ^ 0, a;
  };
  var Ib = function(a, b) {
    return a ^ b + 2654435769 + (a << 6) + (a >> 2);
  };
  var ug = function(a, b) {
    if (a.Da === b.Da) return 0;
    var c = fg(a.pb);
    if (w(c ? b.pb : c)) return -1;
    if (w(a.pb)) {
      if (fg(b.pb)) return 1;
      c = ag(
        a.pb,
        b.pb
      );
      return 0 === c ? ag(a.name, b.name) : c;
    }
    return ag(a.name, b.name);
  };
  var Jb = function(a, b, c, d, f) {
    this.pb = a;
    this.name = b;
    this.Da = c;
    this.Xa = d;
    this.ta = f;
    this.j = 2154168321;
    this.A = 4096;
  };
  var Mb = function(a) {
    return null != a ? a.A & 131072 || v === a.$b ? true : a.A ? false : x(qb, a) : x(qb, a);
  };
  var J = function(a) {
    if (null == a) return null;
    if (null != a && (a.j & 8388608 || v === a.Tb)) return a.I(null);
    if (pa(a) || "string" === typeof a) return 0 === a.length ? null : new K(a, 0, null);
    if (null != a && null != a[ra]) return a = $f(a, ra).call(a), Nb.g ? Nb.g(a) : Nb.call(null, a);
    if (x(ab, a)) return bb(a);
    throw Error([B.g(a), " is not ISeqable"].join(""));
  };
  var M = function(a) {
    if (null == a) return null;
    if (null != a && (a.j & 64 || v === a.hb)) return a.Y(null);
    a = J(a);
    return null == a ? null : D(a);
  };
  var Ob = function(a) {
    return null != a ? null != a && (a.j & 64 || v === a.hb) ? a.da(null) : (a = J(a)) ? a.da(null) : N : N;
  };
  var O = function(a) {
    return null == a ? null : null != a && (a.j & 128 || v === a.gb) ? a.W() : J(Ob(a));
  };
  var Pb = function(a) {
    this.B = a;
  };
  var R = function(a) {
    return new Pb(J(a));
  };
  var Qb = function(a, b) {
    this.value = a;
    this.cb = b;
    this.vb = null;
    this.j = 8388672;
    this.A = 0;
  };
  var Nb = function(a) {
    var b = a.next();
    return w(b.done) ? null : new Qb(b.value, a);
  };
  var Rb = function(a) {
    var b = 0, c = 1;
    for (a = J(a); ; ) if (null != a) b += 1, c = zb(31, c) + Hb(M(a)) | 0, a = O(a);
    else return Cb(Bb(0, Ab(c)), b);
  };
  var Tb = function(a) {
    var b = 0, c = 0;
    for (a = J(a); ; ) if (null != a) b += 1, c = c + Hb(M(a)) | 0, a = O(a);
    else return Cb(Bb(0, Ab(c)), b);
  };
  var Vb = function(a) {
    this.J = a;
    this.j = 32768;
    this.A = 0;
  };
  var Wb = function(a) {
    return a instanceof Vb;
  };
  var Xb = function(a) {
    return Qa(a);
  };
  var Yb = function(a, b) {
    var c = a.H(null);
    if (0 === c) return b.F ? b.F() : b.call(null);
    for (var d = a.ca(null, 0), f = 1; ; ) if (f < c) {
      var g = a.ca(null, f);
      d = b.h ? b.h(d, g) : b.call(null, d, g);
      if (Wb(d)) return Qa(d);
      f += 1;
    } else return d;
  };
  var Zb = function(a, b) {
    var c = a.length;
    if (0 === a.length) return b.F ? b.F() : b.call(null);
    for (var d = a[0], f = 1; ; ) if (f < c) {
      var g = a[f];
      d = b.h ? b.h(d, g) : b.call(null, d, g);
      if (Wb(d)) return Qa(d);
      f += 1;
    } else return d;
  };
  var $b = function(a, b, c) {
    var d = a.length, f = c;
    for (c = 0; ; ) if (c < d) {
      var g = a[c];
      f = b.h ? b.h(f, g) : b.call(null, f, g);
      if (Wb(f)) return Qa(f);
      c += 1;
    } else return f;
  };
  var ac = function(a, b, c, d) {
    for (var f = a.length; ; ) if (d < f) {
      var g = a[d];
      c = b.h ? b.h(c, g) : b.call(
        null,
        c,
        g
      );
      if (Wb(c)) return Qa(c);
      d += 1;
    } else return c;
  };
  var bc = function(a) {
    return null != a ? a.j & 2 || v === a.Ib ? true : a.j ? false : x(va, a) : x(va, a);
  };
  var cc = function(a) {
    return null != a ? a.j & 16 || v === a.Bb ? true : a.j ? false : x(Aa, a) : x(Aa, a);
  };
  var S = function(a, b, c) {
    var d = T.g ? T.g(a) : T.call(null, a);
    if (c >= d) return -1;
    !(0 < c) && 0 > c && (c += d, c = 0 > c ? 0 : c);
    for (; ; ) if (c < d) {
      if (Q.h(dc ? dc(a, c) : ec.call(null, a, c), b)) return c;
      c += 1;
    } else return -1;
  };
  var U = function(a, b, c) {
    var d = T.g ? T.g(a) : T.call(null, a);
    if (0 === d) return -1;
    0 < c ? (--d, c = d < c ? d : c) : c = 0 > c ? d + c : c;
    for (; ; ) if (0 <= c) {
      if (Q.h(dc ? dc(
        a,
        c
      ) : ec.call(null, a, c), b)) return c;
      --c;
    } else return -1;
  };
  var fc = function(a, b) {
    this.i = a;
    this.m = b;
  };
  var K = function(a, b, c) {
    this.i = a;
    this.m = b;
    this.s = c;
    this.j = 166592766;
    this.A = 139264;
  };
  var ic = function(a) {
    return 0 < a.length ? new K(a, 0, null) : null;
  };
  var gc = function(a, b, c) {
    this.qb = a;
    this.m = b;
    this.s = c;
    this.j = 32374990;
    this.A = 8192;
  };
  var vg = function(a) {
    for (; ; ) {
      var b = O(a);
      if (null != b) a = b;
      else return M(a);
    }
  };
  var wg = function(a) {
    return null == a ? null : null != a && (a.j & 4 || v === a.Lb) ? a.V(null) : (null != a ? a.j & 4 || v === a.Lb || (a.j ? 0 : x(xa, a)) : x(xa, a)) ? ya(a) : null;
  };
  var T = function(a) {
    if (null != a) if (null != a && (a.j & 2 || v === a.Ib)) a = a.H(null);
    else if (pa(a)) a = a.length;
    else if ("string" === typeof a) a = a.length;
    else if (null != a && (a.j & 8388608 || v === a.Tb)) a: {
      a = J(a);
      for (var b = 0; ; ) {
        if (bc(a)) {
          a = b + wa(a);
          break a;
        }
        a = O(a);
        b += 1;
      }
    }
    else a = wa(a);
    else a = 0;
    return a;
  };
  var pc = function(a, b, c) {
    for (; ; ) {
      if (null == a) return c;
      if (0 === b) return J(a) ? M(a) : c;
      if (cc(a)) return C(a, b, c);
      if (J(a)) a = O(a), --b;
      else return c;
    }
  };
  var ec = function(a) {
    switch (arguments.length) {
      case 2:
        return dc(arguments[0], arguments[1]);
      case 3:
        return X(
          arguments[0],
          arguments[1],
          arguments[2]
        );
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var dc = function(a, b) {
    if ("number" !== typeof b) throw Error("Index argument to nth must be a number");
    if (null == a) return a;
    if (null != a && (a.j & 16 || v === a.Bb)) return a.ca(null, b);
    if (pa(a)) {
      if (-1 < b && b < a.length) return a[b | 0];
      throw Error("Index out of bounds");
    }
    if ("string" === typeof a) {
      if (-1 < b && b < a.length) return a.charAt(b | 0);
      throw Error("Index out of bounds");
    }
    if (null != a && (a.j & 64 || v === a.hb) || null != a && (a.j & 16777216 || v === a.Cb)) {
      if (0 > b) throw Error("Index out of bounds");
      a: for (; ; ) {
        if (null == a) throw Error("Index out of bounds");
        if (0 === b) {
          if (J(a)) {
            a = M(a);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (cc(a)) {
          a = C(a, b);
          break a;
        }
        if (J(a)) a = O(a), --b;
        else throw Error("Index out of bounds");
      }
      return a;
    }
    if (x(Aa, a)) return C(a, b);
    throw Error(["nth not supported on this type ", B.g(qa(hg(a)))].join(""));
  };
  var X = function(a, b, c) {
    if ("number" !== typeof b) throw Error("Index argument to nth must be a number.");
    if (null == a) return c;
    if (null != a && (a.j & 16 || v === a.Bb)) return a.la(null, b, c);
    if (pa(a)) return -1 < b && b < a.length ? a[b | 0] : c;
    if ("string" === typeof a) return -1 < b && b < a.length ? a.charAt(b | 0) : c;
    if (null != a && (a.j & 64 || v === a.hb) || null != a && (a.j & 16777216 || v === a.Cb)) return 0 > b ? c : pc(a, b, c);
    if (x(Aa, a)) return C(a, b, c);
    throw Error(["nth not supported on this type ", B.g(qa(hg(a)))].join(""));
  };
  var sc = function(a) {
    var b = "function" === typeof a;
    return b ? b : null != a ? v === a.Gb ? true : a.jc ? false : x(ta, a) : x(ta, a);
  };
  var tc = function(a, b) {
    this.u = a;
    this.s = b;
    this.j = 393217;
    this.A = 0;
  };
  var vc = function(a, b) {
    return "function" === typeof a ? new tc(a, b) : null == a ? null : Ta(a, b);
  };
  var wc = function(a) {
    var b = null != a;
    return (b ? null != a ? a.j & 131072 || v === a.Qb || (a.j ? 0 : x(Ra, a)) : x(Ra, a) : b) ? Sa(a) : null;
  };
  var xg = function(a) {
    return null == a ? false : null != a ? a.j & 8 || v === a.Cc ? true : a.j ? false : x(jg, a) : x(jg, a);
  };
  var xc = function(a) {
    return null == a ? false : null != a ? a.j & 4096 || v === a.hc ? true : a.j ? false : x(Oa, a) : x(Oa, a);
  };
  var yc = function(a) {
    return null != a ? a.j & 16777216 || v === a.Cb ? true : a.j ? false : x(cb, a) : x(cb, a);
  };
  var zc = function(a) {
    return null == a ? false : null != a ? a.j & 1024 || v === a.cc ? true : a.j ? false : x(La, a) : x(La, a);
  };
  var Ac = function(a) {
    return null != a ? a.j & 67108864 || v === a.ec ? true : a.j ? false : x(eb, a) : x(eb, a);
  };
  var Bc = function(a) {
    return null != a ? a.j & 16384 || v === a.ic ? true : a.j ? false : x(Pa, a) : x(Pa, a);
  };
  var Cc = function(a) {
    return null != a ? a.A & 512 || v === a.Yb ? true : false : false;
  };
  var Dc = function(a, b, c, d, f) {
    for (; ; ) {
      if (0 === f) return c;
      c[d] = a[b];
      d += 1;
      --f;
      b += 1;
    }
  };
  var yg = function(a) {
    return false === a;
  };
  var Fc = function(a) {
    return true === a || false === a;
  };
  var Gc = function(a) {
    return null == a ? false : false === a ? false : true;
  };
  var Hc = function(a) {
    return "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(
      a,
      10
    );
  };
  var Ic = function(a, b) {
    return null != a && (a.j & 512 || v === a.Hb) ? a.Ya(null, b) : x(Ha, a) ? Ia(a, b) : Kb.l(a, b, Ec) === Ec ? false : true;
  };
  var zg = function(a, b) {
    if (a === b) return 0;
    if (null == a) return -1;
    if (null == b) return 1;
    if ("number" === typeof a) {
      if ("number" === typeof b) return ag(a, b);
      throw Error(["Cannot compare ", B.g(a), " to ", B.g(b)].join(""));
    }
    if (null != a ? a.A & 2048 || v === a.mc || (a.A ? 0 : x(rg, a)) : x(rg, a)) return sg(a, b);
    if ("string" !== typeof a && !pa(a) && true !== a && false !== a || hg(a) !== hg(b)) throw Error(["Cannot compare ", B.g(a), " to ", B.g(b)].join(""));
    return ag(a, b);
  };
  var Ag = function(a, b) {
    var c = T(a), d = T(b);
    if (c < d) a = -1;
    else if (c > d) a = 1;
    else if (0 === c) a = 0;
    else a: for (d = 0; ; ) {
      var f = zg(dc(a, d), dc(b, d));
      if (0 === f && d + 1 < c) d += 1;
      else {
        a = f;
        break a;
      }
    }
    return a;
  };
  var Bg = function(a) {
    return Q.h(a, zg) ? zg : function(b, c) {
      var d = a.h ? a.h(b, c) : a.call(null, b, c);
      return "number" === typeof d ? d : w(d) ? -1 : w(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
    };
  };
  var Dg = function(a, b) {
    if (J(b)) {
      var c = Cg.g ? Cg.g(b) : Cg.call(null, b);
      cg(c, Bg(a));
      return vc(J(c), wc(b));
    }
    return N;
  };
  var Fg = function(a) {
    var b = Eg;
    return Dg(function(c, d) {
      c = b.g ? b.g(c) : b.call(null, c);
      d = b.g ? b.g(d) : b.call(null, d);
      var f = Bg(zg);
      return f.h ? f.h(c, d) : f.call(null, c, d);
    }, a);
  };
  var kc = function(a) {
    switch (arguments.length) {
      case 2:
        return jc(arguments[0], arguments[1]);
      case 3:
        return lc(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var jc = function(a, b) {
    var c = J(b);
    return c ? (b = M(c), c = O(c), Jc ? Jc(a, b, c) : Kc.call(null, a, b, c)) : a.F ? a.F() : a.call(null);
  };
  var lc = function(a, b, c) {
    for (c = J(c); ; ) if (c) {
      var d = M(c);
      b = a.h ? a.h(b, d) : a.call(
        null,
        b,
        d
      );
      if (Wb(b)) return Qa(b);
      c = O(c);
    } else return b;
  };
  var Lc = function(a, b) {
    a = rb(a);
    if (w(a.fa())) for (var c = a.next(); ; ) if (a.fa()) {
      var d = a.next();
      c = b.h ? b.h(c, d) : b.call(null, c, d);
      if (Wb(c)) return Qa(c);
    } else return c;
    else return b.F ? b.F() : b.call(null);
  };
  var Mc = function(a, b, c) {
    for (a = rb(a); ; ) if (a.fa()) {
      var d = a.next();
      c = b.h ? b.h(c, d) : b.call(null, c, d);
      if (Wb(c)) return Qa(c);
    } else return c;
  };
  var Kc = function(a) {
    switch (arguments.length) {
      case 2:
        return Gg(arguments[0], arguments[1]);
      case 3:
        return Jc(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var Gg = function(a, b) {
    return null != b && (b.j & 524288 || v === b.Sb) ? b.Z(null, a) : pa(b) ? Zb(b, a) : "string" === typeof b ? Zb(b, a) : x(Ua, b) ? Va(b, a) : Mb(b) ? Lc(b, a) : jc(a, b);
  };
  var Jc = function(a, b, c) {
    return null != c && (c.j & 524288 || v === c.Sb) ? c.kc(null, a, b) : pa(c) ? $b(c, a, b) : "string" === typeof c ? $b(c, a, b) : x(Ua, c) ? Va(c, a, b) : Mb(c) ? Mc(c, a, b) : lc(a, b, c);
  };
  var Nc = function(a, b) {
    return null != b ? Ya(b, a) : true;
  };
  var Oc = function(a) {
    return a;
  };
  var Pc = function(a, b, c, d) {
    a = a.g ? a.g(b) : a.call(
      null,
      b
    );
    c = Jc(a, c, d);
    return a.g ? a.g(c) : a.call(null, c);
  };
  var Qc = function(a) {
    a = (a - a % 2) / 2;
    return 0 <= a ? Math.floor(a) : Math.ceil(a);
  };
  var Rc = function(a) {
    a -= a >> 1 & 1431655765;
    a = (a & 858993459) + (a >> 2 & 858993459);
    return 16843009 * (a + (a >> 4) & 252645135) >> 24;
  };
  var hc = function(a, b) {
    if (yc(b)) if (bc(a) && bc(b) && T(a) !== T(b)) a = false;
    else a: for (a = J(a), b = J(b); ; ) {
      if (null == a) {
        a = null == b;
        break a;
      }
      if (null != b && Q.h(M(a), M(b))) a = O(a), b = O(b);
      else {
        a = false;
        break a;
      }
    }
    else a = null;
    return Gc(a);
  };
  var oc = function(a, b, c, d, f) {
    this.s = a;
    this.first = b;
    this.xa = c;
    this.count = d;
    this.v = f;
    this.j = 65937646;
    this.A = 8192;
  };
  var Sc = function(a) {
    this.s = a;
    this.j = 65937614;
    this.A = 8192;
  };
  var Tc = function(a) {
    return (null != a ? a.j & 134217728 || v === a.fc || (a.j ? 0 : x(fb, a)) : x(fb, a)) ? (a = gb(a)) ? a : N : Jc(mc, N, a);
  };
  var Uc = function(a, b, c, d) {
    this.s = a;
    this.first = b;
    this.xa = c;
    this.v = d;
    this.j = 65929452;
    this.A = 8192;
  };
  var W = function(a, b) {
    return null == b ? new oc(null, a, null, 1, null) : null != b && (b.j & 64 || v === b.hb) ? new Uc(null, a, b, null) : new Uc(null, a, J(b), null);
  };
  var Hg = function(a, b) {
    if (a.wa === b.wa) return 0;
    var c = fg(a.pb);
    if (w(c ? b.pb : c)) return -1;
    if (w(a.pb)) {
      if (fg(b.pb)) return 1;
      c = ag(a.pb, b.pb);
      return 0 === c ? ag(a.name, b.name) : c;
    }
    return ag(a.name, b.name);
  };
  var H = function(a, b, c, d) {
    this.pb = a;
    this.name = b;
    this.wa = c;
    this.Xa = d;
    this.j = 2153775105;
    this.A = 4096;
  };
  var Vc = function(a) {
    if (null != a && (a.A & 4096 || v === a.Rb)) return a.pb;
    throw Error(["Doesn't support namespace: ", B.g(a)].join(""));
  };
  var Yc = function(a, b, c) {
    this.s = a;
    this.jb = b;
    this.B = null;
    this.v = c;
    this.j = 32374988;
    this.A = 1;
  };
  var Zc = function(a) {
    null != a.jb && (a.B = a.jb.F ? a.jb.F() : a.jb.call(null), a.jb = null);
    return a.B;
  };
  var $c = function(a) {
    this.xb = a;
    this.end = 0;
    this.j = 2;
    this.A = 0;
  };
  var Ig = function(a) {
    return new $c(Array(a));
  };
  var ad = function(a, b, c) {
    this.i = a;
    this.ba = b;
    this.end = c;
    this.j = 524306;
    this.A = 0;
  };
  var bd = function(a, b, c, d) {
    this.N = a;
    this.qa = b;
    this.s = c;
    this.v = d;
    this.j = 31850732;
    this.A = 1536;
  };
  var cd = function(a, b) {
    return 0 === wa(a) ? b : new bd(a, b, null, null);
  };
  var dd = function(a, b) {
    a.add(b);
  };
  var Cg = function(a) {
    var b = [];
    for (a = J(a); ; ) if (null != a) b.push(M(a)), a = O(a);
    else return b;
  };
  var ed = function(a, b) {
    if (bc(b)) return T(b);
    var c = 0;
    for (b = J(b); ; ) if (null != b && c < a) c += 1, b = O(b);
    else return c;
  };
  var hd = function(a, b, c) {
    var d = J(c);
    if (0 === b) return a.F ? a.F() : a.call(null);
    c = D(d);
    var f = Ca(d);
    if (1 === b) return a.g ? a.g(c) : a.call(null, c);
    d = D(f);
    var g = Ca(f);
    if (2 === b) return a.h ? a.h(c, d) : a.call(null, c, d);
    f = D(g);
    var h = Ca(g);
    if (3 === b) return a.l ? a.l(c, d, f) : a.call(null, c, d, f);
    g = D(h);
    var k = Ca(h);
    if (4 === b) return a.ja ? a.ja(c, d, f, g) : a.call(null, c, d, f, g);
    h = D(k);
    var l = Ca(k);
    if (5 === b) return a.va ? a.va(c, d, f, g, h) : a.call(null, c, d, f, g, h);
    k = D(l);
    var m = Ca(l);
    if (6 === b) return a.Qa ? a.Qa(c, d, f, g, h, k) : a.call(null, c, d, f, g, h, k);
    l = D(m);
    var n = Ca(m);
    if (7 === b) return a.Ra ? a.Ra(c, d, f, g, h, k, l) : a.call(null, c, d, f, g, h, k, l);
    m = D(n);
    var p = Ca(n);
    if (8 === b) return a.Sa ? a.Sa(c, d, f, g, h, k, l, m) : a.call(null, c, d, f, g, h, k, l, m);
    n = D(p);
    var q = Ca(p);
    if (9 === b) return a.Ta ? a.Ta(c, d, f, g, h, k, l, m, n) : a.call(null, c, d, f, g, h, k, l, m, n);
    p = D(q);
    var u = Ca(q);
    if (10 === b) return a.Fa ? a.Fa(c, d, f, g, h, k, l, m, n, p) : a.call(null, c, d, f, g, h, k, l, m, n, p);
    q = D(u);
    var z = Ca(u);
    if (11 === b) return a.Ga ? a.Ga(c, d, f, g, h, k, l, m, n, p, q) : a.call(null, c, d, f, g, h, k, l, m, n, p, q);
    u = D(z);
    var A = Ca(z);
    if (12 === b) return a.Ha ? a.Ha(
      c,
      d,
      f,
      g,
      h,
      k,
      l,
      m,
      n,
      p,
      q,
      u
    ) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u);
    z = D(A);
    var E = Ca(A);
    if (13 === b) return a.Ia ? a.Ia(c, d, f, g, h, k, l, m, n, p, q, u, z) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z);
    A = D(E);
    var I = Ca(E);
    if (14 === b) return a.Ja ? a.Ja(c, d, f, g, h, k, l, m, n, p, q, u, z, A) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z, A);
    E = D(I);
    var P = Ca(I);
    if (15 === b) return a.Ka ? a.Ka(c, d, f, g, h, k, l, m, n, p, q, u, z, A, E) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E);
    I = D(P);
    var V = Ca(P);
    if (16 === b) return a.La ? a.La(c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I) : a.call(
      null,
      c,
      d,
      f,
      g,
      h,
      k,
      l,
      m,
      n,
      p,
      q,
      u,
      z,
      A,
      E,
      I
    );
    P = D(V);
    var la = Ca(V);
    if (17 === b) return a.Ma ? a.Ma(c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P);
    V = D(la);
    var ua = Ca(la);
    if (18 === b) return a.Na ? a.Na(c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V);
    la = D(ua);
    ua = Ca(ua);
    if (19 === b) return a.Oa ? a.Oa(c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V, la) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V, la);
    var xe = D(ua);
    Ca(ua);
    if (20 === b) return a.Pa ? a.Pa(
      c,
      d,
      f,
      g,
      h,
      k,
      l,
      m,
      n,
      p,
      q,
      u,
      z,
      A,
      E,
      I,
      P,
      V,
      la,
      xe
    ) : a.call(null, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V, la, xe);
    throw Error("Only up to 20 arguments supported on functions");
  };
  var id = function(a) {
    return null != a && (a.j & 128 || v === a.gb) ? a.W() : J(Ob(a));
  };
  var jd = function(a, b, c) {
    return null == c ? a.g ? a.g(b) : a.call(a, b) : kd(a, b, D(c), id(c));
  };
  var kd = function(a, b, c, d) {
    return null == d ? a.h ? a.h(b, c) : a.call(a, b, c) : ld(a, b, c, D(d), id(d));
  };
  var ld = function(a, b, c, d, f) {
    return null == f ? a.l ? a.l(b, c, d) : a.call(a, b, c, d) : md(a, b, c, d, D(f), id(f));
  };
  var md = function(a, b, c, d, f, g) {
    if (null == g) return a.ja ? a.ja(b, c, d, f) : a.call(a, b, c, d, f);
    var h = D(g), k = O(g);
    if (null == k) return a.va ? a.va(b, c, d, f, h) : a.call(a, b, c, d, f, h);
    g = D(k);
    var l = O(k);
    if (null == l) return a.Qa ? a.Qa(b, c, d, f, h, g) : a.call(a, b, c, d, f, h, g);
    k = D(l);
    var m = O(l);
    if (null == m) return a.Ra ? a.Ra(b, c, d, f, h, g, k) : a.call(a, b, c, d, f, h, g, k);
    l = D(m);
    var n = O(m);
    if (null == n) return a.Sa ? a.Sa(b, c, d, f, h, g, k, l) : a.call(a, b, c, d, f, h, g, k, l);
    m = D(n);
    var p = O(n);
    if (null == p) return a.Ta ? a.Ta(b, c, d, f, h, g, k, l, m) : a.call(a, b, c, d, f, h, g, k, l, m);
    n = D(p);
    var q = O(p);
    if (null == q) return a.Fa ? a.Fa(
      b,
      c,
      d,
      f,
      h,
      g,
      k,
      l,
      m,
      n
    ) : a.call(a, b, c, d, f, h, g, k, l, m, n);
    p = D(q);
    var u = O(q);
    if (null == u) return a.Ga ? a.Ga(b, c, d, f, h, g, k, l, m, n, p) : a.call(a, b, c, d, f, h, g, k, l, m, n, p);
    q = D(u);
    var z = O(u);
    if (null == z) return a.Ha ? a.Ha(b, c, d, f, h, g, k, l, m, n, p, q) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q);
    u = D(z);
    var A = O(z);
    if (null == A) return a.Ia ? a.Ia(b, c, d, f, h, g, k, l, m, n, p, q, u) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u);
    z = D(A);
    var E = O(A);
    if (null == E) return a.Ja ? a.Ja(b, c, d, f, h, g, k, l, m, n, p, q, u, z) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z);
    A = D(E);
    var I = O(E);
    if (null == I) return a.Ka ? a.Ka(b, c, d, f, h, g, k, l, m, n, p, q, u, z, A) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z, A);
    E = D(I);
    var P = O(I);
    if (null == P) return a.La ? a.La(b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E);
    I = D(P);
    var V = O(P);
    if (null == V) return a.Ma ? a.Ma(b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I);
    P = D(V);
    var la = O(V);
    if (null == la) return a.Na ? a.Na(b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P);
    V = D(la);
    var ua = O(la);
    if (null == ua) return a.Oa ? a.Oa(b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P, V) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P, V);
    la = D(ua);
    ua = O(ua);
    if (null == ua) return a.Pa ? a.Pa(b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P, V, la) : a.call(a, b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P, V, la);
    b = [b, c, d, f, h, g, k, l, m, n, p, q, u, z, A, E, I, P, V, la];
    for (c = ua; ; ) if (c) b.push(D(c)), c = O(c);
    else break;
    return a.apply(a, b);
  };
  var uc = function(a) {
    switch (arguments.length) {
      case 2:
        return nd(arguments[0], arguments[1]);
      case 3:
        return od(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Jg(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3]
        );
      case 5:
        return Kg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      default:
        for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
        else break;
        return Lg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new K(b.slice(5), 0, null));
    }
  };
  var nd = function(a, b) {
    if (a.ea) {
      var c = a.aa, d = ed(c + 1, b);
      return d <= c ? hd(a, d, b) : a.ea(b);
    }
    b = J(b);
    return null == b ? a.F ? a.F() : a.call(a) : jd(a, D(b), id(b));
  };
  var od = function(a, b, c) {
    if (a.ea) {
      b = W(b, c);
      var d = a.aa;
      c = ed(d, c) + 1;
      return c <= d ? hd(a, c, b) : a.ea(b);
    }
    return jd(a, b, J(c));
  };
  var Jg = function(a, b, c, d) {
    return a.ea ? (b = W(b, W(c, d)), c = a.aa, d = 2 + ed(c - 1, d), d <= c ? hd(a, d, b) : a.ea(b)) : kd(a, b, c, J(d));
  };
  var Kg = function(a, b, c, d, f) {
    return a.ea ? (b = W(b, W(c, W(d, f))), c = a.aa, f = 3 + ed(c - 2, f), f <= c ? hd(a, f, b) : a.ea(b)) : ld(a, b, c, d, J(f));
  };
  var Lg = function(a, b, c, d, f, g) {
    return a.ea ? (g = fd(g), b = W(b, W(c, W(d, W(f, g)))), c = a.aa, g = 4 + ed(c - 3, g), g <= c ? hd(a, g, b) : a.ea(b)) : md(a, b, c, d, f, fd(g));
  };
  var pd = function(a) {
    return null != a && (a.j & 64 || v === a.hb) ? O(a) ? rc(Cg(a)) : J(a) ? M(a) : qd : a;
  };
  var Mg = function(a, b) {
    return !Q.h(a, b);
  };
  var rd = function() {
    if ("undefined" === typeof ka || "undefined" === typeof ma || "undefined" === typeof na) na = function(a) {
      this.Vb = a;
      this.j = 393216;
      this.A = 0;
    }, na.prototype.R = function(a, b) {
      return new na(b);
    }, na.prototype.P = function() {
      return this.Vb;
    }, na.prototype.fa = function() {
      return false;
    }, na.prototype.next = function() {
      return Error("No such element");
    }, na.prototype.remove = function() {
      return Error("Unsupported operation");
    }, na.Eb = true, na.ub = "cljs.core/t_cljs$core10220", na.Ub = function(a) {
      return F(
        a,
        "cljs.core/t_cljs$core10220"
      );
    };
    return new na(qd);
  };
  var sd = function(a, b) {
    for (; ; ) {
      if (null == J(b)) return true;
      var c = M(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (w(c)) b = O(b);
      else return false;
    }
  };
  var Ng = function(a, b) {
    for (; ; ) if (b = J(b)) {
      var c = M(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (w(c)) return c;
      b = O(b);
    } else return null;
  };
  var Og = function(a) {
    return function() {
      function b(h, k) {
        return fg(a.h ? a.h(h, k) : a.call(null, h, k));
      }
      function c(h) {
        return fg(a.g ? a.g(h) : a.call(null, h));
      }
      function d() {
        return fg(a.F ? a.F() : a.call(null));
      }
      var f = null, g = function() {
        function h(l, m, n) {
          var p = null;
          if (2 < arguments.length) {
            p = 0;
            for (var q = Array(arguments.length - 2); p < q.length; ) q[p] = arguments[p + 2], ++p;
            p = new K(q, 0, null);
          }
          return k.call(this, l, m, p);
        }
        function k(l, m, n) {
          return fg(Jg(a, l, m, n));
        }
        h.aa = 2;
        h.ea = function(l) {
          var m = M(l);
          l = O(l);
          var n = M(l);
          l = Ob(l);
          return k(m, n, l);
        };
        h.S = k;
        return h;
      }();
      f = function(h, k, l) {
        switch (arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return c.call(this, h);
          case 2:
            return b.call(this, h, k);
          default:
            var m = null;
            if (2 < arguments.length) {
              m = 0;
              for (var n = Array(arguments.length - 2); m < n.length; ) n[m] = arguments[m + 2], ++m;
              m = new K(n, 0, null);
            }
            return g.S(h, k, m);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.aa = 2;
      f.ea = g.ea;
      f.F = d;
      f.g = c;
      f.h = b;
      f.S = g.S;
      return f;
    }();
  };
  var Pg = function(a, b) {
    return function() {
      function c(l, m, n) {
        return a.ja ? a.ja(b, l, m, n) : a.call(null, b, l, m, n);
      }
      function d(l, m) {
        return a.l ? a.l(b, l, m) : a.call(null, b, l, m);
      }
      function f(l) {
        return a.h ? a.h(b, l) : a.call(null, b, l);
      }
      function g() {
        return a.g ? a.g(b) : a.call(null, b);
      }
      var h = null, k = function() {
        function l(n, p, q, u) {
          var z = null;
          if (3 < arguments.length) {
            z = 0;
            for (var A = Array(arguments.length - 3); z < A.length; ) A[z] = arguments[z + 3], ++z;
            z = new K(A, 0, null);
          }
          return m.call(this, n, p, q, z);
        }
        function m(n, p, q, u) {
          return Lg(a, b, n, p, q, ic([u]));
        }
        l.aa = 3;
        l.ea = function(n) {
          var p = M(n);
          n = O(n);
          var q = M(n);
          n = O(n);
          var u = M(n);
          n = Ob(n);
          return m(p, q, u, n);
        };
        l.S = m;
        return l;
      }();
      h = function(l, m, n, p) {
        switch (arguments.length) {
          case 0:
            return g.call(this);
          case 1:
            return f.call(this, l);
          case 2:
            return d.call(this, l, m);
          case 3:
            return c.call(this, l, m, n);
          default:
            var q = null;
            if (3 < arguments.length) {
              q = 0;
              for (var u = Array(arguments.length - 3); q < u.length; ) u[q] = arguments[q + 3], ++q;
              q = new K(u, 0, null);
            }
            return k.S(l, m, n, q);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      h.aa = 3;
      h.ea = k.ea;
      h.F = g;
      h.g = f;
      h.h = d;
      h.l = c;
      h.S = k.S;
      return h;
    }();
  };
  var Rg = function(a) {
    var b = Qg;
    return function() {
      function c(l, m, n) {
        return b.va ? b.va(a, null, l, m, n) : b.call(null, a, null, l, m, n);
      }
      function d(l, m) {
        return b.ja ? b.ja(a, null, l, m) : b.call(null, a, null, l, m);
      }
      function f(l) {
        return b.l ? b.l(a, null, l) : b.call(null, a, null, l);
      }
      function g() {
        return b.h ? b.h(a, null) : b.call(
          null,
          a,
          null
        );
      }
      var h = null, k = function() {
        function l(n, p, q, u) {
          var z = null;
          if (3 < arguments.length) {
            z = 0;
            for (var A = Array(arguments.length - 3); z < A.length; ) A[z] = arguments[z + 3], ++z;
            z = new K(A, 0, null);
          }
          return m.call(this, n, p, q, z);
        }
        function m(n, p, q, u) {
          return Lg(b, a, null, n, p, ic([q, u]));
        }
        l.aa = 3;
        l.ea = function(n) {
          var p = M(n);
          n = O(n);
          var q = M(n);
          n = O(n);
          var u = M(n);
          n = Ob(n);
          return m(p, q, u, n);
        };
        l.S = m;
        return l;
      }();
      h = function(l, m, n, p) {
        switch (arguments.length) {
          case 0:
            return g.call(this);
          case 1:
            return f.call(this, l);
          case 2:
            return d.call(
              this,
              l,
              m
            );
          case 3:
            return c.call(this, l, m, n);
          default:
            var q = null;
            if (3 < arguments.length) {
              q = 0;
              for (var u = Array(arguments.length - 3); q < u.length; ) u[q] = arguments[q + 3], ++q;
              q = new K(u, 0, null);
            }
            return k.S(l, m, n, q);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      h.aa = 3;
      h.ea = k.ea;
      h.F = g;
      h.g = f;
      h.h = d;
      h.l = c;
      h.S = k.S;
      return h;
    }();
  };
  var td = function(a, b) {
    return function g(d, f) {
      return new Yc(null, function() {
        var h = J(f);
        if (h) {
          if (Cc(h)) {
            for (var k = ob(h), l = T(k), m = Ig(l), n = 0; ; ) if (n < l) dd(m, function() {
              var p = d + n, q = C(k, n);
              return a.h ? a.h(p, q) : a.call(null, p, q);
            }()), n += 1;
            else break;
            return cd(m.N(), g(d + l, pb(h)));
          }
          return W(function() {
            var p = M(h);
            return a.h ? a.h(d, p) : a.call(null, d, p);
          }(), g(d + 1, Ob(h)));
        }
        return null;
      }, null);
    }(0, b);
  };
  var Sg = function(a) {
    this.state = a;
    this.qc = this.Bc = this.s = null;
    this.A = 16386;
    this.j = 6455296;
  };
  var Tg = function(a, b) {
    if (a instanceof Sg) {
      var c = a.Bc;
      if (null != c && !w(c.g ? c.g(b) : c.call(null, b))) throw Error("Validator rejected reference state");
      c = a.state;
      a.state = b;
      if (null != a.qc) a: for (var d = J(a.qc), f = null, g = 0, h = 0; ; ) if (h < g) {
        var k = f.ca(null, h), l = X(k, 0, null);
        k = X(k, 1, null);
        k.ja ? k.ja(l, a, c, b) : k.call(null, l, a, c, b);
        h += 1;
      } else if (d = J(d)) Cc(d) ? (f = ob(d), d = pb(d), l = f, g = T(f), f = l) : (f = M(d), l = X(f, 0, null), k = X(f, 1, null), k.ja ? k.ja(l, a, c, b) : k.call(null, l, a, c, b), d = O(d), f = null, g = 0), h = 0;
      else break a;
      return b;
    }
    return tg(a, b);
  };
  var Ug = function(a, b) {
    return new Yc(null, function() {
      if (0 < a) {
        var c = J(b);
        return c ? W(M(c), Ug(a - 1, Ob(c))) : null;
      }
      return null;
    }, null);
  };
  var ud = function(a) {
    return new Yc(
      null,
      function() {
        a: for (var b = 2, c = a; ; ) if (c = J(c), 0 < b && c) --b, c = Ob(c);
        else break a;
        return c;
      },
      null
    );
  };
  var vd = function(a) {
    return Y.l(function(b) {
      return b;
    }, a, ud(a));
  };
  var Vg = function(a) {
    return new Yc(null, function() {
      return W(a.F ? a.F() : a.call(null), Vg(a));
    }, null);
  };
  var wd = function(a, b) {
    return new Yc(null, function() {
      var c = J(b);
      if (c) {
        if (Cc(c)) {
          for (var d = ob(c), f = T(d), g = Ig(f), h = 0; ; ) if (h < f) {
            var k = C(d, h);
            k = a.g ? a.g(k) : a.call(null, k);
            w(k) && (k = C(d, h), g.add(k));
            h += 1;
          } else break;
          return cd(g.N(), wd(a, pb(c)));
        }
        d = M(c);
        c = Ob(c);
        return w(a.g ? a.g(d) : a.call(null, d)) ? W(d, wd(a, c)) : wd(a, c);
      }
      return null;
    }, null);
  };
  var Wg = function(a, b) {
    return wd(
      Og(a),
      b
    );
  };
  var xd = function(a) {
    return function d(c) {
      return new Yc(null, function() {
        if (w(yc.g ? yc.g(c) : yc.call(null, c))) {
          var f = ic([J.g ? J.g(c) : J.call(null, c)]);
          f = nd(gd, od(Y, d, f));
        } else f = null;
        return W(c, f);
      }, null);
    }(a);
  };
  var yd = function(a) {
    return wd(function(b) {
      return !yc(b);
    }, Ob(xd(a)));
  };
  var xi = function(a, b) {
    return null != a ? null != a && (a.A & 4 || v === a.Kb) ? Ta(lb(Jc(kb, jb(a), b)), wc(a)) : Jc(za, a, b) : Jc(mc, a, b);
  };
  var yk = function(a, b, c) {
    if (null != a && (a.A & 4 || v === a.Kb)) {
      var d = wc(a);
      return Pc(b, function() {
        function f(h) {
          return Ta(lb(h), d);
        }
        var g = null;
        g = function(h, k) {
          switch (arguments.length) {
            case 1:
              return f.call(this, h);
            case 2:
              return kb(h, k);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        g.g = f;
        g.h = function(h, k) {
          return kb(h, k);
        };
        return g;
      }(), jb(a), c);
    }
    return Pc(b, mc, a, c);
  };
  var Xg = function(a, b) {
    return Jc(Kb, a, b);
  };
  var Ad = function(a, b) {
    this.D = a;
    this.i = b;
  };
  var Bd = function(a) {
    return new Ad(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
  };
  var Yg = function(a) {
    return new Ad(
      a.D,
      sa(a.i)
    );
  };
  var Cd = function(a) {
    a = a.o;
    return 32 > a ? 0 : a - 1 >>> 5 << 5;
  };
  var Dd = function(a, b, c) {
    for (; ; ) {
      if (0 === b) return c;
      var d = Bd(a);
      d.i[0] = c;
      c = d;
      b -= 5;
    }
  };
  var Fd = function(a, b) {
    if (b >= Cd(a)) return a.ia;
    var c = a.root;
    for (a = a.shift; ; ) if (0 < a) {
      var d = a - 5;
      c = c.i[b >>> a & 31];
      a = d;
    } else return c.i;
  };
  var Gd = function(a, b) {
    if (0 <= b && b < a.o) b = Fd(a, b);
    else throw a = a.o, Error(["No item ", B.g(b), " in vector of length ", B.g(a)].join(""));
    return b;
  };
  var Id = function(a, b, c) {
    this.wb = this.m = 0;
    this.i = a;
    this.Xb = b;
    this.start = 0;
    this.end = c;
  };
  var Jd = function(a, b, c, d) {
    return c < d ? Kd(a, b, dc(a, c), c + 1, d) : b.F ? b.F() : b.call(null);
  };
  var Kd = function(a, b, c, d, f) {
    var g = c;
    c = d;
    for (d = Fd(a, d); ; ) if (c < f) {
      var h = c & 31;
      d = 0 === h ? Fd(a, c) : d;
      h = d[h];
      g = b.h ? b.h(g, h) : b.call(null, g, h);
      if (Wb(g)) return Qa(g);
      c += 1;
    } else return g;
  };
  var Ld = function(a, b, c, d, f, g) {
    this.s = a;
    this.o = b;
    this.shift = c;
    this.root = d;
    this.ia = f;
    this.v = g;
    this.j = 167666463;
    this.A = 139268;
  };
  var Td = function(a) {
    if (w(Ud.g ? Ud.g(a) : Ud.call(null, a))) a = new Ld(null, 2, 5, Sd, [Vd.g ? Vd.g(a) : Vd.call(null, a), Wd.g ? Wd.g(a) : Wd.call(null, a)], null);
    else if (Bc(a)) a = vc(a, null);
    else if (pa(a)) a: {
      var b = a.length;
      if (32 > b) a = new Ld(null, b, 5, Sd, a, null);
      else for (var c = 32, d = new Ld(null, 32, 5, Sd, a.slice(0, 32), null).Za(null); ; ) if (c < b) {
        var f = c + 1;
        d = kb(d, a[c]);
        c = f;
      } else {
        a = lb(d);
        break a;
      }
    }
    else a = lb(Jc(kb, jb(nc), a));
    return a;
  };
  var Xd = function(a, b, c, d, f) {
    this.ma = a;
    this.node = b;
    this.m = c;
    this.ba = d;
    this.s = f;
    this.v = null;
    this.j = 32375020;
    this.A = 1536;
  };
  var Rd = function(a) {
    switch (arguments.length) {
      case 3:
        var b = arguments[0], c = arguments[1], d = arguments[2];
        return new Xd(b, Gd(b, c), c, d, null);
      case 4:
        return Qd(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3]
        );
      case 5:
        return Yd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var Qd = function(a, b, c, d) {
    return new Xd(a, b, c, d, null);
  };
  var Yd = function(a, b, c, d, f) {
    return new Xd(a, b, c, d, f);
  };
  var Zd = function(a, b) {
    return a === b.D ? b : new Ad(a, sa(b.i));
  };
  var Od = function(a) {
    return new Ad({}, sa(a.i));
  };
  var Pd = function(a) {
    var b = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ];
    Dc(a, 0, b, 0, a.length);
    return b;
  };
  var Nd = function(a, b, c, d) {
    this.o = a;
    this.shift = b;
    this.root = c;
    this.ia = d;
    this.A = 88;
    this.j = 275;
  };
  var ae = function(a, b, c) {
    if (a.root.D) {
      if (0 <= b && b < a.o) {
        if (Cd(a) <= b) a.ia[b & 31] = c;
        else {
          var d = function k(g, h) {
            h = Zd(a.root.D, h);
            if (0 === g) h.i[b & 31] = c;
            else {
              var l = b >>> g & 31;
              g = k(g - 5, h.i[l]);
              h.i[l] = g;
            }
            return h;
          }(a.shift, a.root);
          a.root = d;
        }
        return a;
      }
      if (b === a.o) return a.ab(null, c);
      throw Error(["Index ", B.g(b), " out of bounds for TransientVector of length", B.g(a.o)].join(""));
    }
    throw Error("assoc! after persistent!");
  };
  var be = function() {
    this.j = 2097152;
    this.A = 0;
  };
  var de = function(a, b) {
    return Gc(zc(b) && !Ac(b) ? T(a) === T(b) ? (null != a ? a.j & 1048576 || v === a.ac || (a.j ? 0 : x(Xa, a)) : x(Xa, a)) ? Nc(function(c, d, f) {
      return Q.h(Kb.l(b, d, ce), f) ? true : new Vb(false);
    }, a) : sd(function(c) {
      return Q.h(Kb.l(b, M(c), ce), M(O(c)));
    }, a) : null : null);
  };
  var ee = function(a) {
    this.B = a;
  };
  var fe = function(a) {
    this.B = a;
  };
  var ge = function(a, b) {
    if (b instanceof H) a: {
      var c = a.length;
      b = b.wa;
      for (var d = 0; ; ) {
        if (c <= d) {
          a = -1;
          break a;
        }
        if (a[d] instanceof H && b === a[d].wa) {
          a = d;
          break a;
        }
        d += 2;
      }
    }
    else if ("string" === typeof b || "number" === typeof b) a: for (c = a.length, d = 0; ; ) {
      if (c <= d) {
        a = -1;
        break a;
      }
      if (b === a[d]) {
        a = d;
        break a;
      }
      d += 2;
    }
    else if (b instanceof Jb) a: for (c = a.length, b = b.Da, d = 0; ; ) {
      if (c <= d) {
        a = -1;
        break a;
      }
      if (a[d] instanceof Jb && b === a[d].Da) {
        a = d;
        break a;
      }
      d += 2;
    }
    else if (null == b) a: for (b = a.length, c = 0; ; ) {
      if (b <= c) {
        a = -1;
        break a;
      }
      if (null == a[c]) {
        a = c;
        break a;
      }
      c += 2;
    }
    else a: for (c = a.length, d = 0; ; ) {
      if (c <= d) {
        a = -1;
        break a;
      }
      if (Q.h(b, a[d])) {
        a = d;
        break a;
      }
      d += 2;
    }
    return a;
  };
  var Md = function(a, b) {
    this.key = a;
    this.J = b;
    this.v = null;
    this.j = 166619935;
    this.A = 0;
  };
  var Ud = function(a) {
    return null != a ? a.j & 2048 || v === a.dc ? true : false : false;
  };
  var he = function(a, b, c) {
    this.i = a;
    this.m = b;
    this.ta = c;
    this.j = 32374990;
    this.A = 0;
  };
  var ie = function(a, b) {
    this.i = a;
    this.m = 0;
    this.o = b;
  };
  var G = function(a, b, c, d) {
    this.s = a;
    this.o = b;
    this.i = c;
    this.v = d;
    this.j = 16647951;
    this.A = 139268;
  };
  var oe = function(a, b) {
    return a === b ? true : a === b || a instanceof H && b instanceof H && a.wa === b.wa ? true : Q.h(a, b);
  };
  var pe = function(a) {
    for (var b = 0, c = 0; ; ) if (b < a.length) {
      var d;
      a: for (d = 0; ; ) if (d < b) {
        var f = oe(a[b], a[d]);
        if (f) {
          d = f;
          break a;
        }
        d = 2 + d;
      } else {
        d = false;
        break a;
      }
      c = d ? c : c + 2;
      b = 2 + b;
    } else return c;
  };
  var qe = function(a, b) {
    var c = a.length - 1, d = J(b);
    b = Array(c + 2 * T(d));
    a = Dc(a, 0, b, 0, c);
    for (b = c; ; ) if (d) {
      var f = M(d);
      a[b] = Ma(f);
      a[b + 1] = Na(f);
      b = 2 + c;
      d = O(d);
    } else return a;
  };
  var rc = function(a) {
    var b = a.length, c = 1 === (b & 1), d;
    if (!(d = c)) a: for (d = 0; ; ) if (d < a.length) {
      var f;
      b: for (f = 0; ; ) if (f < d) {
        var g = oe(a[d], a[f]);
        if (g) {
          f = g;
          break b;
        }
        f = 2 + f;
      } else {
        f = false;
        break b;
      }
      if (f) {
        d = f;
        break a;
      }
      d = 2 + d;
    } else {
      d = false;
      break a;
    }
    return d ? re(a, c) : new G(null, b / 2, a, null);
  };
  var re = function(a, b) {
    var c = b ? qe(a, xi(qd, a[a.length - 1])) : a;
    a = pe(c);
    var d = c.length;
    if (a < d) {
      a = Array(a);
      for (var f = 0, g = 0; ; ) if (f < d) (function() {
        for (var h = 0; ; ) if (h < g) {
          var k = oe(c[f], c[h]);
          if (k) return k;
          h = 2 + h;
        } else return false;
      })() ? (b = g, f = 2 + f, g = b) : (b = function() {
        for (var h = d - 2; ; ) if (h >= f) {
          if (oe(c[f], c[h])) return h;
          h -= 2;
        } else return h;
      }(), a[g] = c[f], a[g + 1] = c[b + 1], b = 2 + g, f = 2 + f, g = b);
      else break;
      return new G(null, a.length / 2, a, null);
    }
    return new G(null, c.length / 2, c, null);
  };
  var le = function(a, b) {
    this.bb = {};
    this.Va = a;
    this.i = b;
    this.j = 259;
    this.A = 56;
  };
  var se = function(a, b) {
    for (var c = jb(ne), d = 0; ; ) if (d < a) c = mb(c, b[d], b[d + 1]), d += 2;
    else return c;
  };
  var te = function() {
    this.J = false;
  };
  var ue = function(a, b, c) {
    a = sa(a);
    a[b] = c;
    return a;
  };
  var Zg = function(a, b) {
    var c = Array(a.length - 2);
    Dc(a, 0, c, 0, 2 * b);
    Dc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
    return c;
  };
  var ve = function(a, b, c, d) {
    a = a.Ua(b);
    a.i[c] = d;
    return a;
  };
  var we = function(a, b, c) {
    for (var d = a.length, f = 0, g = c; ; ) if (f < d) {
      c = a[f];
      if (null != c) {
        var h = a[f + 1];
        c = b.l ? b.l(g, c, h) : b.call(null, g, c, h);
      } else c = a[f + 1], c = null != c ? c.nb(b, g) : g;
      if (Wb(c)) return c;
      f += 2;
      g = c;
    } else return g;
  };
  var ye = function(a) {
    this.i = a;
    this.m = 0;
    this.ra = this.ob = null;
  };
  var ze = function(a, b, c) {
    this.D = a;
    this.T = b;
    this.i = c;
    this.A = 131072;
    this.j = 0;
  };
  var He = function(a) {
    this.i = a;
    this.m = 0;
    this.ra = null;
  };
  var De = function(a, b, c) {
    this.D = a;
    this.o = b;
    this.i = c;
    this.A = 131072;
    this.j = 0;
  };
  var Ke = function(a, b, c) {
    b *= 2;
    for (var d = 0; ; ) if (d < b) {
      if (oe(c, a[d])) return d;
      d += 2;
    } else return -1;
  };
  var Le = function(a, b, c, d) {
    this.D = a;
    this.Aa = b;
    this.o = c;
    this.i = d;
    this.A = 131072;
    this.j = 0;
  };
  var Fe = function(a) {
    switch (arguments.length) {
      case 6:
        return Ge(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5]
        );
      case 7:
        return Ee(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var Ge = function(a, b, c, d, f, g) {
    var h = Hb(b);
    if (h === d) return new Le(null, h, 2, [b, c, f, g]);
    var k = new te();
    return Ce.oa(a, h, b, c, k).oa(a, d, f, g, k);
  };
  var Ee = function(a, b, c, d, f, g, h) {
    var k = Hb(c);
    if (k === f) return new Le(null, k, 2, [c, d, g, h]);
    var l = new te();
    return Ce.pa(a, b, k, c, d, l).pa(a, b, f, g, h, l);
  };
  var Me = function(a, b, c, d, f) {
    this.s = a;
    this.sa = b;
    this.m = c;
    this.B = d;
    this.v = f;
    this.j = 32374988;
    this.A = 0;
  };
  var Be = function(a) {
    switch (arguments.length) {
      case 1:
        return Ae(arguments[0]);
      case 3:
        return Ne(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var Ae = function(a) {
    return Ne(a, 0, null);
  };
  var Ne = function(a, b, c) {
    if (null == c) for (c = a.length; ; ) if (b < c) {
      if (null != a[b]) return new Me(null, a, b, null, null);
      var d = a[b + 1];
      if (w(d) && (d = d.mb(), w(d))) return new Me(null, a, b + 2, d, null);
      b += 2;
    } else return null;
    else return new Me(
      null,
      a,
      b,
      c,
      null
    );
  };
  var Oe = function(a, b, c, d, f) {
    this.s = a;
    this.sa = b;
    this.m = c;
    this.B = d;
    this.v = f;
    this.j = 32374988;
    this.A = 0;
  };
  var Je = function(a) {
    switch (arguments.length) {
      case 1:
        return Ie(arguments[0]);
      case 3:
        return Pe(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var Ie = function(a) {
    return Pe(a, 0, null);
  };
  var Pe = function(a, b, c) {
    if (null == c) for (c = a.length; ; ) if (b < c) {
      var d = a[b];
      if (w(d) && (d = d.mb(), w(d))) return new Oe(null, a, b + 1, d, null);
      b += 1;
    } else return null;
    else return new Oe(
      null,
      a,
      b,
      c,
      null
    );
  };
  var Qe = function(a, b) {
    this.ga = a;
    this.Fb = b;
    this.Ab = false;
  };
  var Re = function(a, b, c, d, f, g) {
    this.s = a;
    this.o = b;
    this.root = c;
    this.ha = d;
    this.ga = f;
    this.v = g;
    this.j = 16123663;
    this.A = 139268;
  };
  var Te = function(a, b) {
    for (var c = a.length, d = 0, f = jb(ne); ; ) if (d < c) {
      if (b.length <= d) throw Error(["No value supplied for key: ", B.g(a[d])].join(""));
      var g = d + 1;
      f = mb(f, a[d], b[d]);
      d = g;
    } else return lb(f);
  };
  var Se = function(a, b, c, d) {
    this.D = {};
    this.root = a;
    this.count = b;
    this.ha = c;
    this.ga = d;
    this.j = 259;
    this.A = 56;
  };
  var Ue = function(a, b, c) {
    if (a.D) {
      if (null == b) a.ga !== c && (a.ga = c), a.ha || (a.count += 1, a.ha = true);
      else {
        var d = new te();
        b = (null == a.root ? Ce : a.root).pa(a.D, 0, Hb(b), b, c, d);
        b !== a.root && (a.root = b);
        d.J && (a.count += 1);
      }
      return a;
    }
    throw Error("assoc! after persistent!");
  };
  var Ve = function(a, b) {
    this.C = a;
    this.ta = b;
    this.j = 32374988;
    this.A = 0;
  };
  var je = function(a) {
    return (a = J(a)) ? new Ve(a, null) : null;
  };
  var Vd = function(a) {
    return Ma(a);
  };
  var We = function(a, b) {
    this.C = a;
    this.ta = b;
    this.j = 32374988;
    this.A = 0;
  };
  var ke = function(a) {
    return (a = J(a)) ? new We(a, null) : null;
  };
  var Wd = function(a) {
    return Na(a);
  };
  var ah = function(a, b) {
    var c = qd;
    for (b = J(b); ; ) if (b) {
      var d = M(b), f = Kb.l(a, d, $g);
      c = Mg(f, $g) ? qc.l(c, d, f) : c;
      b = O(b);
    } else return Ta(c, wc(a));
  };
  var Xe = function(a) {
    this.cb = a;
  };
  var Ye = function(a, b, c) {
    this.s = a;
    this.Ba = b;
    this.v = c;
    this.j = 15077647;
    this.A = 139268;
  };
  var Ze = function(a) {
    this.Wa = a;
    this.A = 136;
    this.j = 259;
  };
  var af = function(a) {
    if (xc(a)) return vc(a, null);
    a = J(a);
    if (null == a) return $e;
    if (a instanceof K && 0 === a.m) {
      a = a.i;
      for (var b = a.length, c = jb($e), d = 0; ; ) if (d < b) kb(c, a[d]), d += 1;
      else break;
      return lb(c);
    }
    for (c = jb($e); ; ) if (null != a) b = O(a), c = kb(c, D(a)), a = b;
    else return lb(c);
  };
  var Xc = function(a) {
    if (null != a && (a.A & 4096 || v === a.Rb)) return a.name;
    if ("string" === typeof a) return a;
    throw Error(["Doesn't support name: ", B.g(a)].join(""));
  };
  var bf = function(a, b) {
    var c = jb(qd);
    a = J(a);
    for (b = J(b); ; ) if (a && b) {
      var d = M(a), f = M(b);
      c = mb(c, d, f);
      a = O(a);
      b = O(b);
    } else return lb(c);
  };
  var ff = function(a, b, c) {
    this.start = a;
    this.step = b;
    this.count = c;
    this.j = 82;
    this.A = 0;
  };
  var gf = function(a, b, c) {
    this.m = a;
    this.end = b;
    this.step = c;
  };
  var df = function(a, b, c, d, f, g, h) {
    this.s = a;
    this.start = b;
    this.end = c;
    this.step = d;
    this.N = f;
    this.ua = g;
    this.v = h;
    this.j = 32375006;
    this.A = 140800;
  };
  var ef = function(a, b, c, d, f, g, h) {
    this.s = a;
    this.start = b;
    this.end = c;
    this.step = d;
    this.N = f;
    this.ua = g;
    this.v = h;
    this.A = 140800;
    this.j = 32374988;
  };
  var ch = function() {
    var a = T(cf);
    return bh(0, a);
  };
  var bh = function(a, b) {
    return b <= a ? N : Hc(a) && Hc(b) && Hc(1) ? new df(null, a, b, 1, null, null, null) : new ef(null, a, b, 1, null, null, null);
  };
  var dh = function(a) {
    a: for (var b = a; ; ) if (b = J(b)) b = O(b);
    else break a;
    return a;
  };
  var hf = function(a, b, c, d, f, g, h) {
    var k = oa;
    oa = null == oa ? null : oa - 1;
    try {
      if (null != oa && 0 > oa) return F(a, "#");
      F(a, c);
      if (0 === yb.g(g)) J(h) && F(a, function() {
        var u = jf.g(g);
        return w(u) ? u : "...";
      }());
      else {
        if (J(h)) {
          var l = M(h);
          b.l ? b.l(l, a, g) : b.call(null, l, a, g);
        }
        for (var m = O(h), n = yb.g(g) - 1; ; ) if (!m || null != n && 0 === n) {
          J(m) && 0 === n && (F(a, d), F(a, function() {
            var u = jf.g(g);
            return w(u) ? u : "...";
          }()));
          break;
        } else {
          F(a, d);
          var p = M(m);
          c = a;
          h = g;
          b.l ? b.l(p, c, h) : b.call(null, p, c, h);
          var q = O(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
      return F(a, f);
    } finally {
      oa = k;
    }
  };
  var kf = function(a, b) {
    b = J(b);
    for (var c = null, d = 0, f = 0; ; ) if (f < d) {
      var g = c.ca(null, f);
      F(a, g);
      f += 1;
    } else if (b = J(b)) c = b, Cc(c) ? (b = ob(c), d = pb(c), c = b, g = T(b), b = d, d = g) : (g = M(c), F(a, g), b = O(c), c = null, d = 0), f = 0;
    else return null;
  };
  var mf = function(a) {
    return ['"', B.g(a.replace(RegExp('[\\\\"\b\f\n\r	]', "g"), function(b) {
      return lf[b];
    })), '"'].join("");
  };
  var nf = function(a, b) {
    return (a = Gc(Kb.h(a, wb))) ? (a = null != b ? b.j & 131072 || v === b.Qb ? true : false : false) ? null != wc(b) : a : a;
  };
  var of = function(a, b, c) {
    if (null == a) return F(b, "nil");
    if (nf(c, a)) {
      F(b, "^");
      var d = wc(a);
      Z.l ? Z.l(d, b, c) : Z.call(null, d, b, c);
      F(b, " ");
    }
    if (a.Eb) return a.Ub(b);
    if (null != a ? a.j & 2147483648 || v === a.X || (a.j ? 0 : x(hb, a)) : x(
      hb,
      a
    )) return ib(a, b, c);
    if (true === a || false === a) return F(b, B.g(a));
    if ("number" === typeof a) return F(b, isNaN(a) ? "##NaN" : a === Number.POSITIVE_INFINITY ? "##Inf" : a === Number.NEGATIVE_INFINITY ? "##-Inf" : B.g(a));
    if (gg(a)) return F(b, "#js "), d = Y.h(function(g) {
      var h = /[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/;
      if ("string" === typeof g) h = h.exec(g), h = null != h && Q.h(h[0], g) ? 1 === h.length ? h[0] : Td(h) : null;
      else throw new TypeError("re-matches must match against a string.");
      return new Md(null != h ? Wc.g(g) : g, a[g]);
    }, da(a)), pf.ja ? pf.ja(d, Z, b, c) : pf.call(null, d, Z, b, c);
    if (pa(a)) return hf(b, Z, "#js [", " ", "]", c, a);
    if ("string" === typeof a) return w(vb.g(c)) ? F(b, mf(a)) : F(b, a);
    if ("function" === typeof a) {
      var f = a.name;
      c = w(function() {
        var g = null == f;
        return g ? g : /^[\s\xa0]*$/.test(f);
      }()) ? "Function" : f;
      return kf(b, ic(["#object[", c, w(false) ? [' "', B.g(a), '"'].join("") : "", "]"]));
    }
    if (a instanceof Date) return c = function(g, h) {
      for (g = B.g(g); ; ) if (g.length < h) g = ["0", g].join("");
      else return g;
    }, kf(b, ic(['#inst "', c(a.getUTCFullYear(), 4), "-", c(a.getUTCMonth() + 1, 2), "-", c(
      a.getUTCDate(),
      2
    ), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"']));
    if (a instanceof RegExp) return kf(b, ic(['#"', a.source, '"']));
    if ("symbol" === r(a) || "undefined" !== typeof Symbol && a instanceof Symbol) return kf(b, ic(["#object[", a.toString(), "]"]));
    if (w(function() {
      var g = null == a ? null : a.constructor;
      return null == g ? null : g.ub;
    }())) return kf(b, ic(["#object[", a.constructor.ub.replace(RegExp("/", "g"), "."), "]"]));
    f = function() {
      var g = null == a ? null : a.constructor;
      return null == g ? null : g.name;
    }();
    c = w(function() {
      var g = null == f;
      return g ? g : /^[\s\xa0]*$/.test(f);
    }()) ? "Object" : f;
    return null == a.constructor ? kf(b, ic(["#object[", c, "]"])) : kf(b, ic(["#object[", c, " ", B.g(a), "]"]));
  };
  var Z = function(a, b, c) {
    var d = qf.g(c);
    return w(d) ? (c = qc.l(c, rf, of), d.l ? d.l(a, b, c) : d.call(null, a, b, c)) : of(a, b, c);
  };
  var eh = function(a) {
    var b = dg();
    if (null == a || fg(J(a))) b = "";
    else {
      var c = B, d = c.g, f = new ja(), g = new sb(f);
      Z(M(a), g, b);
      a = J(O(a));
      for (var h = null, k = 0, l = 0; ; ) if (l < k) {
        var m = h.ca(null, l);
        F(g, " ");
        Z(m, g, b);
        l += 1;
      } else if (a = J(a)) h = a, Cc(h) ? (a = ob(h), k = pb(h), h = a, m = T(a), a = k, k = m) : (m = M(h), F(g, " "), Z(m, g, b), a = O(h), h = null, k = 0), l = 0;
      else break;
      b = d.call(c, f);
    }
    return b;
  };
  var sf = function(a) {
    return a instanceof Jb ? Lb.h(null, Xc(a)) : Wc.h(null, Xc(a));
  };
  var tf = function(a) {
    if (w(false)) {
      var b = J(a), c = J(b), d = M(c);
      O(c);
      X(d, 0, null);
      X(d, 1, null);
      c = wg(a);
      for (a = null; ; ) {
        d = a;
        b = J(b);
        a = M(b);
        var f = O(b), g = a;
        a = X(g, 0, null);
        b = X(g, 1, null);
        if (w(g)) if (a instanceof H || a instanceof Jb) if (w(d)) if (Q.h(d, Vc(a))) c = qc.l(c, sf(a), b), a = d, b = f;
        else return null;
        else if (d = Vc(a), w(d)) c = qc.l(c, sf(a), b), a = d, b = f;
        else return null;
        else return null;
        else return new Ld(null, 2, 5, Sd, [d, c], null);
      }
    } else return null;
  };
  var uf = function(a, b, c, d, f) {
    return hf(d, function(g, h, k) {
      var l = Ma(g);
      c.l ? c.l(l, h, k) : c.call(null, l, h, k);
      F(h, " ");
      g = Na(g);
      return c.l ? c.l(g, h, k) : c.call(null, g, h, k);
    }, [B.g(a), "{"].join(""), ", ", "}", f, J(b));
  };
  var pf = function(a, b, c, d) {
    var f = zc(a) ? tf(a) : null, g = X(f, 0, null);
    f = X(f, 1, null);
    return w(g) ? uf(["#:", B.g(g)].join(""), f, b, c, d) : uf(null, a, b, c, d);
  };
  var fh = function() {
  };
  var gh = function(a) {
    if (null != a && null != a.vc) a = a.vc(a);
    else {
      var b = gh[r(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = gh._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw y("IEncodeJS.-clj->js", a);
    }
    return a;
  };
  var hh = function(a, b) {
    return (null != a ? v === a.uc || (a.jc ? 0 : x(fh, a)) : x(fh, a)) ? gh(a) : "string" === typeof a || "number" === typeof a || a instanceof H || a instanceof Jb ? b.g ? b.g(a) : b.call(null, a) : eh(ic([a]));
  };
  var ih = function() {
  };
  var jh = function(a, b) {
    if (null != a && null != a.tc) a = a.tc(a, b);
    else {
      var c = jh[r(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = jh._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw y("IEncodeClojure.-js->clj", a);
    }
    return a;
  };
  var mh = function(a) {
    return kh(a, ic([lh, false]));
  };
  var kh = function(a, b) {
    var c = pd(b);
    c = Kb.h(c, lh);
    var d = w(c) ? Wc : B;
    return function h(g) {
      return (null != g ? v === g.Dc || (g.jc ? 0 : x(ih, g)) : x(ih, g)) ? jh(g, nd(nh, b)) : (null == g ? 0 : null != g ? g.j & 64 || v === g.hb || (g.j ? 0 : x(kg, g)) : x(kg, g)) ? dh(Y.h(h, g)) : Ud(g) ? new Md(h(Ma(g)), h(Na(g))) : xg(g) ? yk(wg(g), Y.g(h), g) : pa(g) ? lb(Jc(
        function(k, l) {
          l = h(l);
          return kb(k, l);
        },
        jb(nc),
        g
      )) : hg(g) === Object ? lb(Jc(function(k, l) {
        var m = d.g ? d.g(l) : d.call(null, l);
        l = h($f(g, l));
        return mb(k, m, l);
      }, jb(qd), da(g))) : g;
    }(a);
  };
  var Nf = function(a, b, c) {
    var d = w(b.ignoreCase) ? "gi" : "g";
    d = w(b.multiline) ? [d, "m"].join("") : d;
    return a.replace(new RegExp(b.source, w(b.unicode) ? [d, "u"].join("") : d), c);
  };
  var Of = function(a) {
    return function() {
      function b(d) {
        var f = null;
        if (0 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 0); f < g.length; ) g[f] = arguments[f + 0], ++f;
          f = new K(g, 0, null);
        }
        return c.call(this, f);
      }
      function c(d) {
        d = vd(d);
        if (Q.h(T(d), 1)) return d = M(d), a.g ? a.g(d) : a.call(null, d);
        d = Td(d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      b.aa = 0;
      b.ea = function(d) {
        d = J(d);
        return c(d);
      };
      b.S = c;
      return b;
    }();
  };
  var Pf = function(a, b, c) {
    if ("string" === typeof b) return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
    if (b instanceof RegExp) return "string" === typeof c ? Nf(a, b, c) : Nf(a, b, Of(c));
    throw ["Invalid match arg: ", B.g(b)].join("");
  };
  var oh = function(a) {
    var b = new ja();
    for (a = J(a); ; ) if (null != a) b.append(B.g(M(a))), a = O(a), null != a && b.append(", ");
    else return b.toString();
  };
  var ph = function() {
    return nd(B, Ug(12, Vg(function() {
      var a = T("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      return dc("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Math.floor(Math.random() * a));
    })));
  };
  var Sf = function(a) {
    return Pf(Pf(Pf(Pf(Pf(Pf(Pf(a, "8", "11111111"), "7", "1111111"), "6", "111111"), "5", "11111"), "4", "1111"), "3", "111"), "2", "11");
  };
  var Tf = function(a) {
    a = Sf(Pf(a, / .+$/, ""));
    a = Tc(a.split("/"));
    a = yd(td(function(b, c) {
      return td(function(d, f) {
        return new G(null, 3, [vf, b, Ef, d, Jf, f], null);
      }, c);
    }, a));
    return Jc(function(b, c) {
      c = pd(c);
      var d = Kb.h(c, Ef), f = Kb.h(c, vf);
      c = Kb.h(c, Jf);
      return Ic(Qf, c) ? (d = [B.g(dc(Rf, d)), B.g(f + 1)].join(""), f = qc.l, c = Q.h(c, c.toLowerCase()) ? ["b", c.toUpperCase()].join("") : ["w", c.toUpperCase()].join(""), f.call(qc, b, d, c)) : b;
    }, qd, a);
  };
  var qh = function(a) {
    var b = bh(0, 8), c = bh(1, 9), d = function() {
      return function h(g) {
        return new Yc(null, function() {
          for (var k = g; ; ) {
            var l = J(k);
            if (l) {
              var m = l, n = M(m);
              if (l = J((/* @__PURE__ */ function(p, q, u, z, A, E) {
                return function V(P) {
                  return new Yc(
                    null,
                    /* @__PURE__ */ function(la, ua) {
                      return function() {
                        for (; ; ) {
                          var xe = J(P);
                          if (xe) {
                            if (Cc(xe)) {
                              var Qh = ob(xe), rj = T(Qh), uh = Ig(rj);
                              a: for (var ri = 0; ; ) if (ri < rj) {
                                var si = C(Qh, ri);
                                si = [B.g(si), B.g(ua)].join("");
                                uh.add(si);
                                ri += 1;
                              } else {
                                Qh = true;
                                break a;
                              }
                              return Qh ? cd(uh.N(), V(pb(xe))) : cd(uh.N(), null);
                            }
                            uh = M(xe);
                            return W([B.g(uh), B.g(ua)].join(""), V(Ob(xe)));
                          }
                          return null;
                        }
                      };
                    }(p, q, u, z, A, E),
                    null
                  );
                };
              }(k, n, m, l, b, c))(Y.h(Rf, b)))) return gd.h(l, h(Ob(k)));
              k = Ob(k);
            } else return null;
          }
        }, null);
      }(Tc(c));
    }();
    d = Jc(function(f, g) {
      f = B.g(f);
      var h = Kb.h(a, g);
      if (w(h)) {
        h = "/(?:)/" === B.g("") ? mc.h(Td(W("", Y.h(B, J(h)))), "") : Td(B.g(h).split(""));
        if (1 < T(h)) a: for (; ; ) if ("" === (null == h ? null : mg(h))) h = null == h ? null : ng(h);
        else break a;
        h = Q.h(M(h), "w") ? M(O(h)).toUpperCase() : M(O(h)).toLowerCase();
      } else h = "1";
      return [f, h, -1 != g.indexOf("h") && Mg(g, "h1") ? "/" : null].join("");
    }, "", d);
    return Pf(Pf(Pf(Pf(Pf(Pf(Pf(d, "11111111", "8"), "1111111", "7"), "111111", "6"), "11111", "5"), "1111", "4"), "111", "3"), "11", "2");
  };
  var rh = function(a) {
    return Q.h(8, T(a)) && Q.h(-1, a.search(/[^kqrnbpKQRNBP1]/));
  };
  var sh = function(a) {
    if ("string" !== typeof a) return false;
    a = Sf(Pf(a, / .+$/, "")).split("/");
    return Q.h(8, T(a)) && sd(rh, a);
  };
  var th = function() {
    return function c(b) {
      return new Yc(null, function() {
        for (var d = b; ; ) {
          var f = J(d);
          if (f) {
            var g = f, h = M(g);
            if (f = J((/* @__PURE__ */ function(k, l, m, n) {
              return function u(q) {
                return new Yc(null, /* @__PURE__ */ function(z, A) {
                  return function() {
                    for (; ; ) {
                      var E = J(q);
                      if (E) {
                        if (Cc(E)) {
                          var I = ob(E), P = T(I), V = Ig(P);
                          a: for (var la = 0; ; ) if (la < P) {
                            var ua = C(I, la);
                            ua = [B.g(dc(cf, A)), B.g(ua + 1)].join("");
                            V.add(ua);
                            la += 1;
                          } else {
                            I = true;
                            break a;
                          }
                          return I ? cd(V.N(), u(pb(E))) : cd(
                            V.N(),
                            null
                          );
                        }
                        V = M(E);
                        return W([B.g(dc(cf, A)), B.g(V + 1)].join(""), u(Ob(E)));
                      }
                      return null;
                    }
                  };
                }(k, l, m, n), null);
              };
            }(d, h, g, f))(bh(0, 8)))) return gd.h(f, c(Ob(d)));
            d = Ob(d);
          } else return null;
        }
      }, null);
    }(bh(0, 8));
  };
  var vh = function() {
    return Jc(function(a, b) {
      return qc.l(a, b, ["square-", B.g(ph())].join(""));
    }, qd, th());
  };
  var Ch = function(a, b) {
    var c = a.split("");
    a = c[0];
    c = c[1];
    return Q.h(b, "white") ? new G(null, 2, [wh, Kb.h(xh, a), yh, Kb.h(zh, c)], null) : new G(null, 2, [wh, Kb.h(Ah, a), yh, Kb.h(Bh, c)], null);
  };
  var Lh = function(a, b, c) {
    a = Ch(a, c);
    a = pd(a);
    c = Kb.h(a, wh);
    var d = Kb.h(a, yh);
    a = b / 8;
    c *= a;
    d *= a;
    var f = c + a / 2;
    a = d + a / 2;
    return new G(null, 8, [Dh, f, Eh, a, Fh, c, Gh, d, Hh, f / b * 100, Ih, a / b * 100, Jh, c / b * 100, Kh, d / b * 100], null);
  };
  var Nh = function(a, b) {
    return Jc(function(c, d) {
      var f = X(d, 0, null);
      d = X(d, 1, null);
      f = ["{", Xc(f), "}"].join("");
      return Pf(c, f, B.g(d));
    }, a, b);
  };
  var Uf = function() {
    return t("iPhone") && !t("iPod") && !t("iPad");
  };
  var Vf = function() {
    Uf() || t("iPad") || t("iPod");
  };
  var Oh = function() {
    return nd(B, Y.h(function(a) {
      return ["<div class='file-44ae4'>", B.g(dc(cf, a)), "</div>"].join("");
    }, bh(
      0,
      8
    )));
  };
  var Ph = function() {
    return nd(B, Y.h(function(a) {
      return ["<div class='rank-3d54c'>", B.g(a), "</div>"].join("");
    }, bh(0, 8)));
  };
  var Zh = function(a) {
    var b = pd(a), c = Kb.h(b, Rh);
    a = Kb.h(b, Sh);
    var d = Kb.h(b, Th), f = Kb.h(b, Uh), g = Kb.h(b, Kf), h = Kb.h(b, Vh);
    b = Kb.h(b, Wh);
    g = Lh(b, c, g);
    var k = c / 8 * h;
    h = k / c * 100;
    b = (Dh.g(g) - k / 2) / c * 100;
    c = (Eh.g(g) - k / 2) / c * 100;
    return Nh(
      "<div class='item-18a5b circle-a0266' id='{id}'style='background-color:{color};height:{height}%;left:{left}%;opacity:{opacity};top:{top}%;width:{width}%;'></div>",
      new G(null, 7, [Sh, a, Xh, h, Th, d, Fh, b, Uh, f, Gh, c, Yh, h], null)
    );
  };
  var ki = function(a) {
    var b = pd(a);
    a = Kb.h(b, Sh);
    var c = Kb.h(b, Th), d = Kb.h(b, Uh);
    b = pd(b);
    var f = Kb.h(b, Rh), g = Kb.h(b, $h), h = Kb.h(b, Kf), k = Kb.h(b, Vh);
    b = Kb.h(b, ai);
    b = Lh(b, f, h);
    var l = pd(b);
    b = Kb.h(l, Hh);
    l = Kb.h(l, Ih);
    f = Lh(g, f, h);
    g = pd(f);
    f = Kb.h(g, Hh);
    g = Kb.h(g, Ih);
    f -= b;
    g -= l;
    k *= 12.5;
    h = k / 6;
    var m = Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2)) + h + k / 6, n = 80 * k / m;
    return Nh(
      "<div class='item-18a5b arrow-bc3c7' id='{id}'style='top:{start-y}%;left:{start-x}%;opacity:{opacity};transform:translateY(-50%)rotate({angle}rad);width:{arrow-width}%;height:{arrow-height}%;'><div class='arrow-line-a8dce' style='background-color:{color};width:{line-width}%;margin-left:{base-offset}%;'></div><div class='arrow-head-38dfa' style='background-color:{color};width:{head-width}%;'></div></div>",
      bi.S(ic([new G(null, 8, [ci, Math.atan(g / f) + (0 > f ? Math.PI : 0), di, k, ei, m, fi, 100 * -h / m, gi, n, hi, 100 - n, ii, b, ji, l], null), new G(null, 3, [Sh, a, Th, c, Uh, d], null)]))
    );
  };
  var pi = function(a) {
    var b = Kb.h(li, Xc(a));
    if (mi) a = aa.btoa(b);
    else {
      a = [];
      for (var c = 0, d = 0; d < b.length; d++) {
        var f = b.charCodeAt(d);
        255 < f && (a[c++] = f & 255, f >>= 8);
        a[c++] = f;
      }
      b = void 0;
      void 0 === b && (b = 0);
      if (!ni) for (ni = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], f = 0; 5 > f; f++) {
        var g = c.concat(d[f].split(""));
        oi[f] = g;
        for (var h = 0; h < g.length; h++) {
          var k = g[h];
          void 0 === ni[k] && (ni[k] = h);
        }
      }
      b = oi[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (f = g = 0; g < a.length - 2; g += 3) {
        var l = a[g], m = a[g + 1];
        k = a[g + 2];
        h = b[l >> 2];
        l = b[(l & 3) << 4 | m >> 4];
        m = b[(m & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + h + l + m + k;
      }
      h = 0;
      k = d;
      switch (a.length - g) {
        case 2:
          h = a[g + 1], k = b[(h & 15) << 2] || d;
        case 1:
          a = a[g], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | h >> 4] + k + d;
      }
      a = c.join("");
    }
    return a;
  };
  var yi = function(a) {
    var b = pd(a), c = Kb.h(b, qi), d = Kb.h(b, Rh);
    Kb.h(b, ti);
    a = Kb.h(b, Th);
    var f = Kb.h(b, ui), g = Kb.h(b, vi), h = Kb.h(b, wi);
    b = Kb.h(b, Wh);
    c = Lh(b, d, c);
    b = pd(c);
    c = Kb.h(b, Jh);
    b = Kb.h(b, Kh);
    h *= 100;
    d = d / 8 / d * 100;
    return ["<div class='piece-349f8' id='", B.g(a), "' style='left:", B.g(c), "%;top:", B.g(b), "%;height:", B.g(d), "%;width:", B.g(d), "%;", w(f) ? "opacity:0;" : null, "'><img src='data:image/svg+xml;base64,", B.g(pi(g)), "' alt='' style='height:", B.g(h), "%;width:", B.g(h), "%;' /></div>"].join("");
  };
  var Ai = function(a) {
    var b = pd(a);
    a = Kb.h(b, Sh);
    var c = Kb.h(b, zi);
    b = Kb.h(b, Th);
    return [
      "<div class='",
      ["square-4b72b ", Q.h(a, "white") ? "white-3b784" : "black-b7cb6"].join(""),
      "' id='",
      B.g(b),
      "' data-square-coord='",
      B.g(c),
      "'></div>"
    ].join("");
  };
  var Bi = function(a) {
    setTimeout(function() {
      return a.F ? a.F() : a.call(null);
    }, 1);
  };
  var Ci = function(a) {
    sc($f(a, "preventDefault")) && a.preventDefault();
  };
  var Di = function(a) {
    var b = document;
    b = "string" === typeof a ? b.getElementById(a) : a;
    if (w(b)) return b;
    a = document.querySelector(a);
    return w(a) ? a : null;
  };
  var Ei = function(a, b, c) {
    $f(Di(a), "style")[b] = c;
  };
  var Fi = function(a, b) {
    Di(a).insertAdjacentHTML(
      "beforeend",
      b
    );
  };
  var Gi = function(a, b) {
    $f(Di(a), "classList").add(b);
  };
  var Hi = function(a, b) {
    $f(Di(a), "classList").remove(b);
  };
  var Ii = function(a) {
    (a = Di(a)) && a.parentNode && a.parentNode.removeChild(a);
  };
  var Ji = function(a, b) {
    var c = Di(a);
    w(c) && (Ei(c, "transition", ""), c.addEventListener("transitionend", function() {
      Ii(c);
      return sc(null) ? null.F ? null.F() : null.call(null) : null;
    }), Bi(function() {
      Ei(c, "transition", ["all ", B.g(b), "ms"].join(""));
      return Ei(c, "opacity", "0");
    }));
  };
  var Ki = function() {
    return ["piece-", B.g(ph())].join("");
  };
  var Vi = function(a, b) {
    var c = pd(a);
    a = Kb.h(c, Li);
    var d = Kb.h(c, Mi), f = Kb.h(c, Ni), g = Kb.h(c, vi);
    c = Kb.h(c, Wh);
    var h = Qa(b), k = pd(h);
    h = Kb.h(k, Oi);
    var l = Kb.h(k, Rh), m = Kb.h(k, Kf);
    k = Kb.h(k, wi);
    var n = Ki();
    g = yi(new G(null, 8, [Rh, l, qi, m, Th, n, ui, true, vi, g, wi, k, Wh, c, Yh, l / 8], null));
    var p = true === d ? 0 : w(a) ? a : h;
    return new G(null, 3, [Pi, g, Qi, function() {
      Ei(n, "transition", ["all ", B.g(p), "ms"].join(""));
      Ei(n, "opacity", "100%");
      return sc(f) ? Ri.ja(b, Si, new Ld(null, 2, 5, Sd, [Ti, n], null), function() {
        return f.F ? f.F() : f.call(null);
      }) : null;
    }, Ui, Te([c], [n])], null);
  };
  var cj = function(a, b) {
    var c = pd(a);
    a = Kb.h(c, Wi);
    var d = Kb.h(c, Xi), f = Kb.h(c, Li), g = Kb.h(c, Mi), h = Kb.h(c, Ni), k = Kb.h(c, vi);
    c = Kb.h(c, Yi);
    var l = Qa(b), m = pd(l);
    l = Kb.h(m, Oi);
    var n = Kb.h(m, Rh), p = Kb.h(m, Kf), q = Kb.h(m, wi);
    m = Kb.h(m, Zi);
    var u = Kb.h(m, c), z = Ki();
    k = yi(new G(null, 8, [Rh, n, qi, p, Th, z, ui, false, vi, k, wi, q, Wh, c, Yh, n / 8], null));
    var A = Lh(d, n, p), E = true === g ? 0 : w(f) ? f : l;
    return bi.S(ic([new G(null, 6, [Pi, k, Qi, function() {
      Ei(z, "transition", ["all ", B.g(E), "ms"].join(""));
      Ei(z, "left", [B.g(Jh.g(A)), "%"].join(""));
      Ei(z, "top", [B.g(Kh.g(A)), "%"].join(""));
      return sc(h) ? Ri.ja(b, Si, new Ld(null, 2, 5, Sd, [Ti, z], null), function() {
        return h.F ? h.F() : h.call(null);
      }) : null;
    }, Li, E, $i, u, Ui, Te([d], [z]), aj, c], null), w(a) ? new G(null, 1, [bj, Kb.h(m, d)], null) : null]));
  };
  var ej = function(a, b) {
    var c = pd(a);
    a = Kb.h(c, Li);
    var d = Kb.h(c, Mi), f = Kb.h(c, Ni);
    c = Kb.h(c, Wh);
    var g = Qa(b), h = pd(g);
    g = Kb.h(h, Oi);
    h = Kb.h(h, Zi);
    var k = Kb.h(h, c);
    return bi.S(ic([new G(null, 3, [aj, c, Li, true === d ? 0 : w(a) ? a : g, dj, k], null), sc(f) ? new G(null, 1, [Qi, function() {
      return Ri.ja(b, Si, new Ld(null, 2, 5, Sd, [Ti, k], null), function() {
        return f.F ? f.F() : f.call(null);
      });
    }], null) : null]));
  };
  var gj = function(a, b) {
    switch (fj.g(a)) {
      case "ANIMATION_ADD":
        return Vi(a, b);
      case "ANIMATION_MOVE":
        return cj(a, b);
      case "ANIMATION_CLEAR":
        return ej(a, b);
      default:
        return console.warn("Unknown animation type:", fj.g(a));
    }
  };
  var ij = function(a, b, c) {
    c = hj(c);
    return M(wd(function(d) {
      return Q.h(b, Kb.h(a, d));
    }, c));
  };
  var kj = function(a, b) {
    var c = Jc(function(l, m) {
      return Q.h(Kb.h(a, m), Kb.h(b, m)) ? mc.h(l, m) : l;
    }, $e, je(b)), d = new Sg(od(jj, a, c)), f = new Sg(od(jj, b, c));
    c = Jc(function(l, m) {
      var n = X(m, 0, null), p = X(m, 1, null);
      m = ij(Qa(d), p, n);
      return w(m) ? (p = new G(null, 4, [fj, "ANIMATION_MOVE", Yi, m, Xi, n, vi, p], null), Ri.l(d, jj, m), Ri.l(f, jj, n), mc.h(l, p)) : l;
    }, nc, Dg(zg, Td(Qa(f))));
    var g = af(Y.h(Xi, c));
    c = Y.h(function(l) {
      l = pd(l);
      var m = Kb.h(l, Xi);
      return qc.l(l, Wi, Ic(Qa(d), m));
    }, c);
    var h = Jc(function(l, m) {
      var n = X(m, 0, null);
      m = X(m, 1, null);
      return mc.h(l, new G(null, 3, [fj, "ANIMATION_ADD", Wh, n, vi, m], null));
    }, nc, Dg(zg, Td(Qa(f)))), k = Jc(function(l, m) {
      var n = X(m, 0, null);
      m = X(m, 1, null);
      return Ic(g, n) ? l : mc.h(l, new G(null, 3, [
        fj,
        "ANIMATION_CLEAR",
        Wh,
        n,
        vi,
        m
      ], null));
    }, nc, Dg(zg, Td(Qa(d))));
    return Td(gd.S(c, h, ic([k])));
  };
  var vj = function(a) {
    var b = { z: jb(qd) };
    a.forEach(function(c, d) {
      c = mb($f(b, "z"), d, c);
      b.z = c;
    });
    return lb($f(b, "z"));
  };
  var xj = function(a) {
    var b = /* @__PURE__ */ new Map();
    a = J(a);
    for (var c = null, d = 0, f = 0; ; ) if (f < d) {
      var g = c.ca(null, f), h = X(g, 0, null);
      g = X(g, 1, null);
      b.set(wj(h), wj(g));
      f += 1;
    } else if (a = J(a)) Cc(a) ? (d = ob(a), a = pb(a), c = d, d = T(d)) : (d = M(a), c = X(d, 0, null), d = X(d, 1, null), b.set(wj(c), wj(d)), a = O(a), c = null, d = 0), f = 0;
    else break;
    return b;
  };
  var yj = function(a, b) {
    switch (b) {
      case "object":
        return wj(a);
      case "map":
        return xj(a);
      default:
        return wj(Td(ke(a)));
    }
  };
  var zj = function(a) {
    return "string" === typeof a && Q.h("map", a.toLowerCase());
  };
  var Aj = function(a) {
    return "string" === typeof a && Q.h("fen", a.toLowerCase());
  };
  var Bj = function(a) {
    return "string" === typeof a && Q.h("start", a.toLowerCase());
  };
  var Xf = function(a) {
    return "string" === typeof a && Mg(-1, a.search(/^[bw][KQRNBP]$/));
  };
  var Yf = function(a) {
    return "string" === typeof a && Mg(-1, a.search(/^[a-h][1-8]$/));
  };
  var Cj = function(a) {
    return zc(a) && sd(Yf, je(a)) && sd(Xf, ke(a));
  };
  var Dj = function(a) {
    var b = gg(a);
    return b ? (a = mh(a), sd(Yf, je(a)) && sd(Xf, ke(a))) : b;
  };
  var Ej = function(a) {
    var b = a instanceof Map;
    return b ? (a = vj(a), sd(Yf, je(a)) && sd(Xf, ke(a))) : b;
  };
  var Fj = function(a) {
    var b = "string" === typeof a;
    return b ? (a = a.split("-"), Q.h(T(a), 2) && Mg(a[0], a[1]) && Yf(a[0]) && Yf(a[1])) : b;
  };
  var Gj = function(a) {
    return Q.h("CHESSBOARD_ARROW", fj.g(a));
  };
  var Hj = function(a) {
    return Q.h("CHESSBOARD_CIRCLE", fj.g(a));
  };
  var Zj = function(a) {
    return "string" === typeof a ? a.toLowerCase() : null;
  };
  var ak = function(a) {
    return "string" === typeof a ? a.toLowerCase() : a;
  };
  var bk = function(a) {
    return Jc(function(b, c) {
      var d = X(c, 0, null);
      c = X(c, 1, null);
      var f = pd(c);
      c = Kb.h(f, zf);
      var g = Kb.h(f, wf);
      f = Kb.h(a, d);
      g = g.g ? g.g(f) : g.call(null, f);
      return w(g) ? qc.l(b, d, f) : qc.l(b, d, c);
    }, qd, Zf);
  };
  var nj = function(a, b) {
    var c = Qa(a);
    c = pd(c);
    c = Kb.h(c, lj);
    var d = Y.h($i, b);
    d = J(d);
    for (var f = null, g = 0, h = 0; ; ) if (h < g) {
      var k = f.ca(null, h);
      w(k) && Ii(k);
      h += 1;
    } else if (d = J(d)) f = d, Cc(f) ? (d = ob(f), h = pb(f), f = d, g = T(d), d = h) : (d = M(f), w(d) && Ii(d), d = O(f), f = null, g = 0), h = 0;
    else break;
    d = nd(B, Y.h(Pi, b));
    Fi(c, d);
    Bi(function() {
      for (var p = J(b), q = null, u = 0, z = 0; ; ) if (z < u) {
        var A = q.ca(null, z);
        A = pd(A);
        A = Kb.h(A, Qi);
        sc(A) && (A.F ? A.F() : A.call(null));
        z += 1;
      } else if (p = J(p)) Cc(p) ? (u = ob(p), p = pb(p), q = u, u = T(u)) : (q = M(p), q = pd(q), A = Kb.h(q, Qi), sc(A) && (A.F ? A.F() : A.call(null)), p = O(p), q = null, u = 0), z = 0;
      else return null;
    });
    c = J(b);
    d = null;
    for (g = f = 0; ; ) if (g < f) {
      h = d.ca(null, g);
      var l = pd(h);
      h = Kb.h(l, Li);
      k = Kb.h(l, bj);
      l = Kb.h(l, dj);
      w(l) && Ji(l, h);
      w(k) && Ji(k, h);
      g += 1;
    } else if (c = J(c)) Cc(c) ? (f = ob(c), c = pb(c), d = f, f = T(f)) : (d = M(c), g = pd(d), d = Kb.h(g, Li), f = Kb.h(g, bj), g = Kb.h(g, dj), w(g) && Ji(g, d), w(f) && Ji(f, d), c = O(c), d = null, f = 0), g = 0;
    else break;
    var m = Y.h(aj, b), n = Y.h(Ui, b);
    Ri.ja(a, mj, Zi, function(p) {
      p = od(jj, p, m);
      return od(bi, p, n);
    });
  };
  var Mh = function(a) {
    return [B.g(a), "-", B.g(ph())].join("");
  };
  var oj = function(a) {
    return nd(console.error, mc.h(a, "[Chessboard2]"));
  };
  var pj = function(a) {
    return nd(console.warn, mc.h(a, "[Chessboard2]"));
  };
  var tj = function(a, b) {
    a = a.split("-");
    switch (b) {
      case "ARROW_FORMAT":
        return new G(null, 2, [ai, a[0], $h, a[1]], null);
      case "MOVE_FORMAT":
        return new G(null, 2, [qj, a[0], sj, a[1]], null);
      default:
        return null;
    }
  };
  var uj = function(a, b) {
    var c = pd(b);
    b = Kb.h(c, qj);
    c = Kb.h(c, sj);
    if (w(Kb.h(a, b))) {
      var d = Kb.h(a, b);
      return qc.l(jj.h(a, b), c, d);
    }
    return a;
  };
  var Jj = function(a, b) {
    a = wd(function(c) {
      return Q.h(b, fj.g(c));
    }, ke(Ij.g(Qa(a))));
    return bf(Y.h(Th, a), a);
  };
  var Lj = function(a) {
    var b = Y.h(Th, wd(Gj, ke(Ij.g(Qa(a))))), c = Y.h(function(d) {
      return new G(null, 1, [$i, d], null);
    }, b);
    nj(a, c);
    Ri.ja(a, Kj, new Ld(null, 1, 5, Sd, [Ij], null), function(d) {
      return od(jj, d, b);
    });
    return null;
  };
  var Qj = function(a, b) {
    var c = Qa(a), d = If.g(c), f = Oi.g(c);
    c = Jc(uj, d, b);
    var g = wj(d), h = wj(c);
    d = kj(d, c);
    var k = bf(Y.h(
      qj,
      b
    ), b);
    d = Y.h(function(m) {
      m = pd(m);
      var n = Kb.h(m, Yi);
      n = Kb.h(k, n);
      var p = pd(n);
      n = Kb.h(p, Mj);
      var q = qc.l, u = pd(p);
      p = Kb.h(u, Mj);
      u = Kb.h(u, Nj);
      p = false === p ? 0 : "number" === typeof u ? u : w(Kb.h(Oj, u)) ? Kb.h(Oj, u) : f;
      m = q.call(qc, m, Li, p);
      return false === n ? qc.l(m, Mi, true) : m;
    }, d);
    var l = Jc(function(m, n) {
      n = pd(n);
      n = Kb.h(n, Yi);
      m[n] = null;
      return m;
    }, {}, d);
    b = Jc(function(m, n) {
      n = pd(n);
      var p = Kb.h(n, Yi);
      return mc.h(m, new Promise(function(q) {
        l[p] = q;
      }));
    }, nc, d);
    d = Y.h(function(m) {
      m = pd(m);
      var n = Kb.h(m, Li), p = Kb.h(m, Yi), q = Kb.h(m, Xi), u = Kb.h(m, vi);
      return qc.l(
        m,
        Ni,
        function() {
          var z = { afterPosition: h, beforePosition: g, duration: n, from: p, to: q, piece: u }, A = Xg(k, new Ld(null, 2, 5, Sd, [p, Pj], null));
          w(A) && sc(A) && (A.g ? A.g(z) : A.call(null, z));
          A = $f(l, p);
          return w(A) ? sc(A) ? A.g ? A.g(z) : A.call(null, z) : null : null;
        }
      );
    }, d);
    d = Y.h(function(m) {
      return gj(m, a);
    }, d);
    nj(a, d);
    Ri.ja(a, qc, If, c);
    return b;
  };
  var Rj = function(a, b, c) {
    var d = Qa(a), f = pd(d);
    d = Kb.h(f, Oi);
    f = Kb.h(f, lj);
    f = Di(f);
    if (w(f)) {
      f = Kb.h(Qa(a), If);
      var g = kj(f, b), h = Nj.g(c), k = false === Mj.g(c) ? 0 : "number" === typeof h ? h : w(Kb.h(Oj, h)) ? Kb.h(Oj, h) : d;
      d = Y.h(function(p) {
        p = qc.l(p, Li, k);
        return false === Mj.g(c) ? qc.l(p, Mi, true) : p;
      }, g);
      var l = {};
      g = new Promise(function(p) {
        l.$ = p;
      });
      f = wj(f);
      var m = { afterPosition: wj(b), beforePosition: f, duration: k }, n = function() {
        var p = Pj.g(c);
        w(p) && sc(p) && (p.g ? p.g(m) : p.call(null, m));
        p = $f(l, "$");
        return w(p) ? p.g ? p.g(m) : p.call(null, m) : null;
      };
      nj(a, td(function(p, q) {
        return 0 === p ? gj(qc.l(q, Ni, n), a) : gj(q, a);
      }, d));
      Ri.ja(a, qc, If, b);
      return g;
    }
    return null;
  };
  var Sj = function(a, b) {
    var c = Qa(a), d = Rh.g(c), f = Kf.g(c), g = Jc(
      function(h, k) {
        k = pd(k);
        k = Kb.h(k, Th);
        h[k] = null;
        return h;
      },
      {},
      b
    );
    c = Jc(function(h, k) {
      k = pd(k);
      var l = Kb.h(k, Th);
      return mc.h(h, new Promise(function(m) {
        g[l] = m;
      }));
    }, nc, b);
    b = Y.h(function(h) {
      h = pd(h);
      var k = Kb.h(h, Th), l = Kb.h(h, sj);
      return qc.l(h, Ni, function() {
        var m = { to: l, id: k }, n = $f(g, k);
        return w(n) ? sc(n) ? n.g ? n.g(m) : n.call(null, m) : null : null;
      });
    }, b);
    b = Y.h(function(h) {
      h = pd(h);
      var k = Kb.h(h, Th), l = Kb.h(h, Ni);
      h = Kb.h(h, sj);
      var m = Lh(h, d, f);
      return new G(null, 2, [Qi, function() {
        Ei(k, "transition", ["all ", B.g(800), "ms"].join(""));
        Ei(k, "left", [B.g(Fh.g(m)), "px"].join(""));
        Ei(k, "top", [
          B.g(Gh.g(m)),
          "px"
        ].join(""));
        return sc(l) ? Ri.ja(a, Si, new Ld(null, 2, 5, Sd, [Ti, k], null), function() {
          return l.F ? l.F() : l.call(null);
        }) : null;
      }, Li, 800], null);
    }, b);
    nj(a, b);
    return c;
  };
  var Wj = function(a) {
    var b = Qa(a);
    b = pd(b);
    var c = Kb.h(b, Tj), d = Kb.h(b, lj);
    b = Kb.h(b, Uj);
    c = Di(c);
    var f = Di(d);
    w(w(c) ? f : c) && (Ei(c, "width", ""), d = $f(c.getBoundingClientRect(), "width"), f = $f(f.getBoundingClientRect(), "width"), Ri.S(a, qc, Rh, f, ic([Vj, f])), Ei(b, "height", [B.g(f), "px"].join("")), Ei(c, "width", [B.g(d), "px"].join("")));
    return null;
  };
  var Yj = function(a) {
    var b = Qa(a);
    b = pd(b);
    b = Kb.h(b, Xj);
    w(b) && (Di(b).innerHTML = "");
    Tg(a, null);
    return null;
  };
  var Ek = function(a, b) {
    b = jj.h(b, If);
    b = Jc(function(c, d) {
      var f = X(d, 0, null);
      d = X(d, 1, null);
      if (Ic(dk, f)) {
        var g = Xg(Zf, new Ld(null, 2, 5, Sd, [f, wf], null));
        g = g.g ? g.g(d) : g.call(null, d);
        return fg(g) ? (pj(ic([['Invalid value for config property "', Xc(f), '": ', B.g(d)].join("")])), c) : qc.l(c, f, d);
      }
      0 == Xc(f).lastIndexOf("closure_uid", 0) || pj(ic(["Invalid config property:", Xc(f)]));
      return c;
    }, qd, b);
    Ri.l(a, bi, b);
  };
  var ek = function(a) {
    var b = mh(a), c = kh(a, ic([
      lh,
      true
    ]));
    return Bj(a) ? new G(null, 1, [If, ck], null) : sh(a) ? new G(null, 1, [If, Tf(a)], null) : Cj(b) ? new G(null, 1, [If, b], null) : zc(b) ? (a = ah(c, dk), b = Kb.h(b, "position"), a = Bj(b) ? qc.l(a, If, ck) : a, a = sh(b) ? qc.l(a, If, Tf(b)) : a, Cj(b) ? qc.l(a, If, b) : a) : qd;
  };
  var gk = function(a) {
    return (Hc(a) || false) && 0 < a || Ic(fk, a);
  };
  var hk = function(a) {
    return Fj(a) ? tj(a, "MOVE_FORMAT") : gg(a) && Yf($f(a, "from")) && Yf($f(a, "to")) ? kh(a, ic([lh, true])) : null;
  };
  var jk = function(a) {
    return ah(a, ik);
  };
  var kk = function(a) {
    var b = Ng(yg, a), c = vg(wd(sc, a)), d = Y.h(ak, a), f = vg(wd(gk, d));
    return Y.h(function(g) {
      var h = bi.S, k = qd, l = w(b) ? new G(null, 1, [Mj, false], null) : null;
      if (w(f)) {
        var m = Kb.h(Oj, Zj(f));
        w(m) || (m = (m = (Hc(f) || false) && 0 < f) ? f : m);
        m = new G(null, 1, [Nj, m], null);
      } else m = null;
      return h.call(bi, ic([k, l, m, w(c) ? new G(null, 1, [Pj, c], null) : null, g]));
    }, Y.h(jk, Wg(eg, Y.h(hk, a))));
  };
  var mk = function(a) {
    return ah(a, lk);
  };
  var nk = function(a) {
    return false === a ? new G(null, 1, [Mj, false], null) : sc(a) ? new G(null, 1, [Pj, a], null) : gk(a) ? new G(null, 1, [Nj, a], null) : gg(a) ? kh(a, ic([lh, true])) : qd;
  };
  var ok = function(a) {
    a = nd(bi, Y.h(mk, Y.h(nk, a)));
    return w(a) ? a : qd;
  };
  var pk = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    b = kk(b);
    b = Qj(a, b);
    return Q.h(1, T(b)) ? wj(M(b)) : wj(b);
  };
  var qk = function(a, b) {
    a = Kb.h(Qa(a), If);
    return zj(b) ? xj(a) : Aj(b) ? qh(a) : wj(a);
  };
  var rk = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    c = b[0];
    b = ok(b);
    return Bj(c) ? Rj(a, ck, b) : sh(c) ? Rj(a, Tf(c), b) : Dj(c) ? Rj(a, mh(c), b) : Ej(c) ? Rj(a, vj(c), b) : pj(ic(["Invalid position passed to setPosition():", c]));
  };
  var sk = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    c = b[0];
    d = b.length;
    b = ok(b);
    return 0 === d ? qk(a, null) : Aj(c) ? qk(a, c) : zj(c) ? qk(a, c) : Bj(c) ? Rj(a, ck, b) : sh(c) ? Rj(a, Tf(c), b) : Dj(c) ? Rj(a, mh(c), b) : Ej(c) ? Rj(a, vj(c), b) : pj(ic(["Invalid value passed to position():", c]));
  };
  var tk = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    b = ok(b);
    return Rj(a, qd, b);
  };
  var uk = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    b = ok(b);
    return Rj(a, ck, b);
  };
  var vk = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    c = b[0];
    b = ok(b);
    return sh(c) ? Rj(a, Tf(c), b) : qk(a, "fen");
  };
  var Bk = function(a, b) {
    var c = kh(b, ic([lh, true]));
    b = pd(c);
    var d = Kb.h(b, wk), f = Kb.h(b, xk), g = Kb.h(b, zk), h = Kb.h(b, Wh), k = Kb.h(b, fj);
    b = Mh(k);
    f = new G(null, 3, [Th, b, fj, k, xk, f], null);
    "string" !== typeof g && (sc(g) ? (c = wj(f), g = g.g ? g.g(c) : g.call(null, c)) : (pj(ic(["Invalid html property of custom Item:", eh(ic([c]))])), g = ""));
    c = pd(new G(
      null,
      4,
      [wk, d, Ak, g, Th, b, Wh, h],
      null
    ));
    d = Kb.h(c, wk);
    h = Kb.h(c, Ak);
    g = Kb.h(c, Th);
    k = Kb.h(c, Wh);
    c = Qa(a);
    c = pd(c);
    var l = Kb.h(c, Rh), m = Kb.h(c, Kf);
    c = Kb.h(c, wi);
    k = Lh(k, l, m);
    m = l / 8;
    l = c * m;
    c *= m;
    d = Nh(["<div class='item-18a5b {className}' id='{id}'style='height:{height}px;left:{left}px;top:{top}px;width:{width}px;'>", B.g(h), "</div>"].join(""), new G(null, 6, [wk, d, Xh, l, Th, g, Fh, Dh.g(k) - c / 2, Gh, Eh.g(k) - l / 2, Yh, c], null));
    nj(a, new Ld(null, 1, 5, Sd, [new G(null, 1, [Pi, d], null)], null));
    Ri.ja(a, Si, new Ld(
      null,
      2,
      5,
      Sd,
      [Ij, b],
      null
    ), f);
    return b;
  };
  var Ck = function(a, b) {
    nj(a, new Ld(null, 1, 5, Sd, [new G(null, 1, [$i, b], null)], null));
    Ri.S(a, Kj, new Ld(null, 1, 5, Sd, [Ij], null), jj, ic([b]));
    return null;
  };
  var Dk = function(a, b) {
    a = Sj(a, new Ld(null, 1, 5, Sd, [kh(b, ic([lh, true]))], null));
    return Q.h(1, T(a)) ? wj(M(a)) : wj(a);
  };
  var Nk = function(a) {
    return wj(ah(Qa(a), dk));
  };
  var nl = function(a, b, c) {
    return Ic(Ok, b) ? (Ek(a, rc([Wc.g(b), c])), Nk(a)) : w(zd(b)) ? (Ek(a, kh(b, ic([lh, true]))), Nk(a)) : pj(ic(["Invalid args passed to setConfig():", b, c]));
  };
  var ol = function(a) {
    for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
    else break;
    b.shift();
    c = b[0];
    b = b[1];
    return fg(c) ? Nk(a) : "string" === typeof c ? nl(a, c, b) : w(zd(c)) ? nl(a, c, null) : pj(ic(["Invalid args passed to config():", c, b]));
  };
  var Fk = function(a, b, c) {
    c = oh(Y.h(function(d) {
      return ["#", B.g(d)].join("");
    }, ke(c)));
    return Jc(function(d, f) {
      var g = f.getBoundingClientRect();
      d = $f(g, "left");
      var h = $f(g, "width"), k = $f(g, "height");
      g = $f(g, "top");
      return a >= d && a < d + h && b >= g && b < g + k ? new Vb($f($f(f, "dataset"), "squareCoord")) : null;
    }, null, document.querySelectorAll(c));
  };
  var Lk = function(a, b, c, d, f) {
    var g = Qa(a), h = pd(g);
    g = Kb.h(h, Gk);
    var k = Kb.h(h, Bf), l = Kb.h(h, Kf), m = Kb.h(h, wi), n = Kb.h(h, If);
    h = Kb.h(h, Zi);
    if (sc(k)) {
      n = wj(n);
      try {
        l = { orientation: l, piece: c, position: n, square: b };
        var p = k.g ? k.g(l) : k.call(null, l);
      } catch (q) {
        if (q instanceof Error) oj(ic(["Runtime error with provided onDragStart function:", q])), p = null;
        else throw q;
      }
    } else p = null;
    false !== p && (p = Kb.h(h, b), p = Di(p), k = $f(p.getBoundingClientRect(), "height"), l = $f(p.getBoundingClientRect(), "width"), w(Di(g)) || (p = window.document.body, n = pd(new G(
      null,
      7,
      [Xh, k, Th, g, vi, c, wi, m, Yh, l, wh, d, yh, f],
      null
    )), d = Kb.h(n, Xh), f = Kb.h(n, Th), m = Kb.h(n, vi), h = Kb.h(n, wi), k = Kb.h(n, Yh), l = Kb.h(n, wh), n = Kb.h(n, yh), h *= 100, d = Nh(["<div id='{id}' class='dragging-4a6c1' style='left:{left}px;top:{top}px;height:{height}px;width:{width}px;'><img src='data:image/svg+xml;base64,", B.g(pi.g ? pi.g(m) : pi.call(null, m)), "' alt='' style='height:", B.g(h), "%;width:", B.g(h), "%;' /></div>"].join(""), new G(null, 5, [Xh, d, Th, f, Fh, l, Gh, n, Yh, k], null)), Fi(p, d)), Ri.S(
      a,
      qc,
      Hk,
      true,
      ic([Ik, Di(g), Jk, b, Kk, c])
    ));
  };
  var Pk = function(a, b, c) {
    return window.requestAnimationFrame(function() {
      Ei(a, "left", [B.g(b), "px"].join(""));
      return Ei(a, "top", [B.g(c), "px"].join(""));
    });
  };
  var Qk = function(a, b, c) {
    var d = Qa(a), f = pd(d);
    d = Kb.h(f, Ik);
    var g = Kb.h(f, Kk), h = Kb.h(f, Jk), k = Kb.h(f, Mf), l = Kb.h(f, yf), m = Kb.h(f, Kf), n = Kb.h(f, If);
    f = Kb.h(f, Mk);
    f = Fk(b, c, f);
    var p = w(f) ? f : "offboard";
    if (sc(l)) try {
      b = { orientation: m, piece: g, source: h, target: p, x: b, y: c };
      var q = l.g ? l.g(b) : l.call(null, b);
    } catch (u) {
      if (u instanceof Error) oj(ic([
        "Runtime error with provided onDrop function:",
        u
      ])), q = null;
      else throw u;
    }
    else q = null;
    return Q.h(q, "snapback") ? (Ii(d), Ri.S(a, jj, Hk, Ik, ic([Kk, Jk]))) : Q.h(q, "remove") ? (h = jj.h(n, h), Ii(d), Rj(a, h, new G(null, 1, [Mj, false], null)), Ri.S(a, jj, Hk, Ik, ic([Kk, Jk]))) : w(f) ? (Ii(d), Qj(a, new Ld(null, 1, 5, Sd, [new G(null, 3, [Mj, false, qj, h, sj, f], null)], null)), Ri.S(a, jj, Hk, Ik, ic([Kk, Jk]))) : Q.h(p, "offboard") && Q.h(k, "snapback") ? (Ii(d), Ri.S(a, jj, Hk, Ik, ic([Kk, Jk]))) : Q.h(p, "offboard") && Q.h(k, "remove") ? (h = jj.h(n, h), Ii(d), Rj(a, h, new G(null, 1, [Mj, false], null)), Ri.S(a, jj, Hk, Ik, ic([Kk, Jk]))) : null;
  };
  var Rk = function(a, b) {
    window.addEventListener("mousemove", function(c) {
      var d = Qa(b), f = pd(d);
      d = Kb.h(f, Hk);
      f = Kb.h(f, Ik);
      return w(d) ? Pk(f, $f(c, "clientX"), $f(c, "clientY")) : null;
    });
    window.addEventListener("mouseup", function(c) {
      var d = Qa(b);
      d = pd(d);
      d = Kb.h(d, Hk);
      return w(d) ? Qk(b, $f(c, "clientX"), $f(c, "clientY")) : null;
    });
    window.addEventListener("touchend", function(c) {
      var d = Qa(b);
      d = pd(d);
      d = Kb.h(d, Hk);
      c = $f(c, "changedTouches");
      c = null == c ? null : c[0];
      return w(w(d) ? c : d) ? Qk(b, $f(c, "clientX"), $f(c, "clientY")) : null;
    });
    window.addEventListener(
      "touchmove",
      function(c) {
        var d = Qa(b), f = pd(d);
        d = Kb.h(f, Hk);
        f = Kb.h(f, Ik);
        c = $f(c, "touches");
        c = null == c ? null : c[0];
        return w(w(d) ? c : d) ? Pk(f, $f(c, "clientX"), $f(c, "clientY")) : null;
      }
    );
    window.addEventListener("resize", Wf(function() {
      return Wj(b);
    }));
    a.addEventListener("mouseleave", function() {
      return Ri.ja(b, qc, Rl, null);
    });
    a.addEventListener("mousemove", function(c) {
      var d = $f(c, "clientX"), f = $f(c, "clientY"), g = Qa(b), h = pd(g), k = Kb.h(h, Kf);
      g = Kb.h(h, Sl);
      var l = Kb.h(h, Tl), m = Kb.h(h, If), n = Kb.h(h, Mk);
      h = Kb.h(h, Rl);
      d = Fk(d, f, n);
      Q.h(d, h) ? c = null : (Ri.ja(b, qc, Rl, d), w(w(h) ? sc(l) : h) && (f = Kb.h(m, h), f = { orientation: k, piece: f, position: wj(m), square: h, toSquare: w(d) ? d : "off-board" }, l.h ? l.h(f, c) : l.call(null, f, c)), w(w(d) ? sc(g) : d) ? (l = Kb.h(m, d), k = { orientation: k, piece: l, position: wj(m), square: d, fromSquare: w(h) ? h : "off-board" }, c = g.h ? g.h(k, c) : g.call(null, k, c)) : c = null);
      return c;
    });
    a.addEventListener("mousedown", function(c) {
      Ci(c);
      var d = Qa(b), f = pd(d);
      d = Kb.h(f, Lf);
      var g = Kb.h(f, xf), h = Kb.h(f, Ul), k = Kb.h(f, Kf), l = Kb.h(f, If), m = Kb.h(f, Mk);
      Kb.h(f, Af);
      f = $f(c, "clientX");
      var n = $f(c, "clientY");
      m = Fk(f, n, m);
      var p = Kb.h(l, m);
      sc(h) && (k = { orientation: k, piece: p, position: wj(l), square: m }, h.h ? h.h(k, c) : h.call(null, k, c));
      w(w(p) ? true === d || true === g : p) && Lk(b, m, p, f, n);
      return null;
    });
    a.addEventListener("mouseup", function(c) {
      var d = Qa(b), f = pd(d);
      d = Kb.h(f, Vl);
      var g = Kb.h(f, Kf), h = Kb.h(f, If);
      f = Kb.h(f, Mk);
      f = Fk($f(c, "clientX"), $f(c, "clientY"), f);
      var k = Kb.h(h, f);
      sc(d) ? (g = { orientation: g, piece: k, position: wj(h), square: f }, c = d.h ? d.h(g, c) : d.call(null, g, c)) : c = null;
      return c;
    });
    a.addEventListener("touchstart", function(c) {
      Ci(c);
      var d = Qa(b), f = pd(d);
      d = Kb.h(f, Lf);
      var g = Kb.h(f, Df), h = Kb.h(f, Kf), k = Kb.h(f, If), l = Kb.h(f, Mk), m = Kb.h(f, Cf);
      Kb.h(f, Af);
      f = $f(c, "touches")[0];
      c = $f(f, "clientX");
      f = $f(f, "clientY");
      l = Fk(c, f, l);
      var n = Kb.h(k, l);
      sc(g) && (h = { orientation: h, position: wj(k) }, g.l ? g.l(l, n, h) : g.call(null, l, n, h));
      w(w(n) ? true === d || true === m : n) && Lk(b, l, n, c, f);
      return null;
    });
    a.addEventListener("transitionend", function(c) {
      c = $f($f(c, "target"), "id");
      var d = Xg(Qa(b), new Ld(null, 2, 5, Sd, [Ti, c], null));
      w(d) ? (d.F ? d.F() : d.call(null), c = Ri.S(b, Kj, new Ld(
        null,
        1,
        5,
        Sd,
        [Ti],
        null
      ), jj, ic([c]))) : c = null;
      return c;
    });
  };
  var Sk = function(a) {
    return Q.h(a, "white") ? "black" : "white";
  };
  var Tk = function(a) {
    var b = Qa(a), c = pd(b);
    b = Kb.h(c, Rh);
    var d = Kb.h(c, Ij), f = Kb.h(c, lj), g = Kb.h(c, Kf), h = Kb.h(c, wi), k = Kb.h(c, If), l = Kb.h(c, Zi);
    c = new Sg("");
    for (var m = J(je(d)), n = null, p = 0, q = 0; ; ) if (q < p) {
      var u = n.ca(null, q);
      Ii(u);
      q += 1;
    } else if (m = J(m)) n = m, Cc(n) ? (m = ob(n), q = pb(n), n = m, p = T(m), m = q) : (m = M(n), Ii(m), m = O(n), n = null, p = 0), q = 0;
    else break;
    l = J(ke(l));
    m = null;
    for (p = n = 0; ; ) if (p < n) q = m.ca(null, p), Ii(q), p += 1;
    else if (l = J(l)) m = l, Cc(m) ? (l = ob(m), p = pb(m), m = l, n = T(l), l = p) : (l = M(m), Ii(l), l = O(m), m = null, n = 0), p = 0;
    else break;
    Ri.ja(a, qc, Zi, qd);
    k = J(k);
    l = null;
    for (n = m = 0; ; ) if (n < m) q = l.ca(null, n), p = X(q, 0, null), q = X(q, 1, null), u = Ki(), Ri.l(c, B, yi(new G(null, 8, [qi, g, Rh, b, Th, u, ui, false, vi, q, wi, h, Wh, p, Yh, b / 8], null))), Ri.ja(a, Si, new Ld(null, 2, 5, Sd, [Zi, p], null), u), n += 1;
    else if (k = J(k)) Cc(k) ? (m = ob(k), k = pb(k), l = m, m = T(m)) : (m = M(k), l = X(m, 0, null), m = X(m, 1, null), n = Ki(), Ri.l(c, B, yi(new G(null, 8, [qi, g, Rh, b, Th, n, ui, false, vi, m, wi, h, Wh, l, Yh, b / 8], null))), Ri.ja(
      a,
      Si,
      new Ld(null, 2, 5, Sd, [Zi, l], null),
      n
    ), k = O(k), l = null, m = 0), n = 0;
    else break;
    a = J(ke(d));
    d = null;
    for (k = h = 0; ; ) if (k < h) l = d.ca(null, k), Gj(l) ? Ri.l(c, B, ki(bi.S(ic([l, new G(null, 2, [Rh, b, Kf, g], null)])))) : Hj(l) ? Ri.l(c, B, Zh(bi.S(ic([l, new G(null, 2, [Rh, b, Kf, g], null)])))) : console.warn("draw-items-instant! Unrecognized Item type:", eh(ic([l]))), k += 1;
    else if (a = J(a)) d = a, Cc(d) ? (a = ob(d), k = pb(d), d = a, h = T(a), a = k) : (a = M(d), Gj(a) ? Ri.l(c, B, ki(bi.S(ic([a, new G(null, 2, [Rh, b, Kf, g], null)])))) : Hj(a) ? Ri.l(c, B, Zh(bi.S(ic([a, new G(
      null,
      2,
      [Rh, b, Kf, g],
      null
    )])))) : console.warn("draw-items-instant! Unrecognized Item type:", eh(ic([a]))), a = O(d), d = null, h = 0), k = 0;
    else break;
    Fi(f, Qa(c));
  };
  var Uk = function(a) {
    a = wd(Hj, ke(Ij.g(Qa(a))));
    return bf(Y.h(Wh, a), a);
  };
  var Vk = function(a, b) {
    return yj(Jj(a, "CHESSBOARD_CIRCLE"), Zj(b));
  };
  var Wk = function(a, b) {
    nj(a, new Ld(null, 1, 5, Sd, [new G(null, 1, [$i, b], null)], null));
    return Ri.S(a, Kj, new Ld(null, 1, 5, Sd, [Ij], null), jj, ic([b]));
  };
  var Xk = function(a, b) {
    if (Yf(b)) {
      var c = Uk(a);
      b = Kb.h(c, b);
      a = w(b) ? Wk(a, Th.g(b)) : null;
    } else a = Wk(a, b);
    return a;
  };
  var Yk = function(a) {
    var b = Y.h(Th, wd(Hj, ke(Ij.g(Qa(a))))), c = Y.h(function(d) {
      return new G(null, 1, [$i, d], null);
    }, b);
    nj(a, c);
    Ri.ja(a, Kj, new Ld(null, 1, 5, Sd, [Ij], null), function(d) {
      return od(jj, d, b);
    });
    return null;
  };
  var $k = function(a, b) {
    var c = pd(b);
    b = Kb.h(c, Sh);
    var d = Kb.h(c, Th), f = Kb.h(c, Uh), g = Kb.h(c, Vh);
    c = Kb.h(c, Wh);
    var h = Qa(a), k = pd(h);
    h = Kb.h(k, Rh);
    k = Kb.h(k, Kf);
    d = w(d) ? d : Mh("item");
    var l = Zk.g ? Zk.g(g) : Zk.call(null, g);
    g = new G(null, 6, [Sh, b, Th, d, Uh, f, Vh, l, Wh, c, fj, "CHESSBOARD_CIRCLE"], null);
    b = Zh(new G(null, 7, [
      Rh,
      h,
      Sh,
      b,
      Th,
      d,
      Uh,
      f,
      Kf,
      k,
      Vh,
      l,
      Wh,
      c
    ], null));
    nj(a, new Ld(null, 1, 5, Sd, [new G(null, 1, [Pi, b], null)], null));
    Ri.ja(a, Si, new Ld(null, 2, 5, Sd, [Ij, d], null), g);
    return d;
  };
  var cl = function(a) {
    var b = Ic(al, a);
    return b ? b : bl.g ? bl.g(a) : bl.call(null, a);
  };
  var el = function(a, b, c, d) {
    var f = Yf(b) ? bi.S(ic([dl, new G(null, 1, [Wh, b], null)])) : dl;
    f = "string" === typeof c && fg(cl(c)) ? bi.S(ic([f, new G(null, 1, [Sh, c], null)])) : f;
    c = w(cl(c)) ? bi.S(ic([f, new G(null, 1, [Vh, c], null)])) : f;
    d = w(cl(d)) ? bi.S(ic([c, new G(null, 1, [Vh, d], null)])) : c;
    b = gg(b) && Yf($f(b, "square")) ? bi.S(ic([d, kh(b, ic([lh, true]))])) : d;
    Yf(Wh.g(b)) ? (b = pd(b), d = Kb.h(b, Wh), c = Uk(a), d = Kb.h(c, d), w(d) ? (Wk(a, Th.g(d)), a = $k(a, qc.l(b, Th, Th.g(d)))) : a = $k(a, b)) : a = pj(ic(["Invalid square passed to .addCircle() method:", Wh.g(b)]));
    return a;
  };
  var bl = function(a) {
    return "number" === typeof a && 0 <= a;
  };
  var fl = function(a) {
    return Ic(al, a) || bl(a);
  };
  var Zk = function(a) {
    var b = Zj(a);
    return Q.h(b, "small") ? 0.4 : Q.h(b, "medium") ? 0.7 : Q.h(b, "large") ? 0.9 : "number" === typeof a ? a : 0.9;
  };
  var gl = function(a, b) {
    nj(a, new Ld(null, 1, 5, Sd, [new G(null, 1, [$i, b], null)], null));
    return Ri.S(a, Kj, new Ld(null, 1, 5, Sd, [Ij], null), jj, ic([b]));
  };
  var hl = function(a, b) {
    b = pd(b);
    var c = Kb.h(b, ai), d = Kb.h(b, $h);
    return Jc(function(f, g) {
      var h = X(g, 0, null);
      g = X(g, 1, null);
      return Q.h(fj.g(g), "CHESSBOARD_ARROW") && Q.h(ai.g(g), c) && Q.h($h.g(g), d) ? qc.l(f, h, g) : f;
    }, qd, Ij.g(Qa(a)));
  };
  var il = function(a, b) {
    if (Fj(b)) {
      b = hl(a, tj(b, "ARROW_FORMAT"));
      b = J(je(b));
      for (var c = null, d = 0, f = 0; ; ) if (f < d) {
        var g = c.ca(null, f);
        gl(a, g);
        f += 1;
      } else if (b = J(b)) c = b, Cc(c) ? (b = ob(c), d = pb(c), c = b, g = T(b), b = d, d = g) : (g = M(c), gl(a, g), b = O(c), c = null, d = 0), f = 0;
      else return null;
    } else return c = Xg(Qa(a), new Ld(null, 2, 5, Sd, [Ij, b], null)), w(c) ? gl(a, b) : pj(ic(["Invalid argument passed to removeArrow():", b]));
  };
  var kl = function(a, b, c, d) {
    var f = Fj(b) ? bi.S(ic([jl, tj(b, "ARROW_FORMAT")])) : jl;
    f = "string" !== typeof c || fl(c) ? f : bi.S(ic([f, new G(null, 1, [Sh, c], null)]));
    c = fl(c) ? bi.S(ic([f, new G(null, 1, [Vh, c], null)])) : f;
    d = fl(d) ? bi.S(ic([c, new G(null, 1, [Vh, d], null)])) : c;
    b = gg(b) && Yf($f(b, "start")) && Yf($f(b, "end")) ? bi.S(ic([d, kh(b, ic([lh, true]))])) : d;
    f = pd(b);
    b = Kb.h(f, Sh);
    d = Kb.h(f, $h);
    c = Kb.h(f, Uh);
    var g = Kb.h(f, Vh);
    f = Kb.h(f, ai);
    var h = Qa(a), k = pd(h);
    h = Kb.h(k, Rh);
    var l = Kb.h(k, Kf);
    k = Mh("item");
    var m = Zk(g);
    g = new G(null, 7, [Th, k, Sh, b, $h, d, Uh, c, Vh, m, ai, f, fj, "CHESSBOARD_ARROW"], null);
    b = ki(new G(null, 8, [Rh, h, Sh, b, $h, d, Th, k, Uh, c, Kf, l, Vh, m, ai, f], null));
    nj(a, new Ld(null, 1, 5, Sd, [new G(null, 1, [Pi, b], null)], null));
    Ri.ja(a, Si, new Ld(null, 2, 5, Sd, [Ij, k], null), g);
    return k;
  };
  var ll = function(a, b) {
    return yj(Jj(a, "CHESSBOARD_ARROW"), Zj(b));
  };
  var ml = function(a, b) {
    return yj(Ij.g(Qa(a)), Zj(b));
  };
  var pl = function(a, b) {
    return yj(Jj(
      a,
      "CHESSBOARD_PIECE"
    ), Zj(b));
  };
  var rl = function(a) {
    return Ri.ja(a, qc, ql, false);
  };
  var sl = function(a) {
    return Ri.ja(a, qc, ql, true);
  };
  var tl = function(a) {
    return Ri.ja(a, mj, ql, fg);
  };
  var Bl = function(a) {
    var b = Qa(a), c = pd(b);
    b = Kb.h(c, Xj);
    var d = pd(c);
    c = Kb.h(d, Tj);
    var f = Kb.h(d, Kf), g = Kb.h(d, ul), h = Kb.h(d, lj), k = Kb.h(d, Uj);
    f = [
      "<div class='chessboard-21da3{show-notation}' id='{container-id}'><div class=board-container-41a68><div id='{items-container-id}' class='items-container-c9182'></div><div id='{squares-container-id}' class='squares-2dea6 ",
      Q.h(f, "white") ? "orientation-white-4de03" : "orientation-black-a8276",
      "' style='height:0'>{Squares}</div><div class='notation-files-c3c0a'>{NotationFiles}</div><div class='notation-ranks-d3f97'>{NotationRanks}</div></div></div>"
    ].join("");
    var l = Oh(), m = Ph();
    g = w(g) ? "" : " hide-notation-cbe71";
    var n = pd(d), p = Kb.h(n, vl);
    d = Kb.h(n, wl);
    n = Kb.h(n, Mk);
    var q = new Sg(""), u = new Sg(true);
    p = J(Tc(bh(0, p)));
    for (var z = null, A = 0, E = 0; ; ) if (E < A) {
      var I = z.ca(null, E);
      Ri.l(q, B, [
        "<div class='rank-98fa8' data-rank-idx='",
        B.g(I + 1),
        "'>"
      ].join(""));
      for (var P = J(bh(0, d)), V = null, la = 0, ua = 0; ; ) if (ua < la) {
        var xe = V.ca(null, ua);
        xe = [B.g(dc(cf, xe)), B.g(I + 1)].join("");
        Ri.l(q, B, Ai(new G(null, 3, [zi, xe, Sh, w(Qa(u)) ? "white" : "black", Th, Kb.h(n, xe)], null)));
        Ri.h(u, fg);
        ua += 1;
      } else if (P = J(P)) Cc(P) ? (la = ob(P), P = pb(P), V = la, la = T(la)) : (V = M(P), V = [B.g(dc(cf, V)), B.g(I + 1)].join(""), Ri.l(q, B, Ai(new G(null, 3, [zi, V, Sh, w(Qa(u)) ? "white" : "black", Th, Kb.h(n, V)], null))), Ri.h(u, fg), P = O(P), V = null, la = 0), ua = 0;
      else break;
      Ri.l(q, B, "</div>");
      Ri.h(u, fg);
      E += 1;
    } else if (p = J(p)) {
      if (Cc(p)) A = ob(p), p = pb(p), z = A, A = T(A);
      else {
        z = M(p);
        Ri.l(q, B, ["<div class='rank-98fa8' data-rank-idx='", B.g(z + 1), "'>"].join(""));
        A = J(bh(0, d));
        E = null;
        for (P = I = 0; ; ) if (P < I) V = E.ca(null, P), V = [B.g(dc(cf, V)), B.g(z + 1)].join(""), Ri.l(q, B, Ai(new G(null, 3, [zi, V, Sh, w(Qa(u)) ? "white" : "black", Th, Kb.h(n, V)], null))), Ri.h(u, fg), P += 1;
        else if (A = J(A)) Cc(A) ? (I = ob(A), A = pb(A), E = I, I = T(I)) : (E = M(A), E = [B.g(dc(cf, E)), B.g(z + 1)].join(""), Ri.l(q, B, Ai(new G(null, 3, [zi, E, Sh, w(Qa(u)) ? "white" : "black", Th, Kb.h(
          n,
          E
        )], null))), Ri.h(u, fg), A = O(A), E = null, I = 0), P = 0;
        else break;
        Ri.l(q, B, "</div>");
        Ri.h(u, fg);
        p = O(p);
        z = null;
        A = 0;
      }
      E = 0;
    } else break;
    d = Qa(q);
    c = Nh(f, new G(null, 7, [Tj, c, lj, h, xl, l, yl, m, zl, g, Al, d, Uj, k], null));
    Di(b).innerHTML = c;
    Wj(a);
  };
  var pg = function(a, b, c, d) {
    return w(d) && (Q.h(Kf.g(c), Kf.g(d)) || (Q.h("white", Kf.g(d)) ? (a = ["#", B.g(Tj.g(Qa(b))), " .squares-2dea6"].join(""), a = Di(a), Hi(a, "orientation-black-a8276"), Gi(a, "orientation-white-4de03")) : (a = ["#", B.g(Tj.g(Qa(b))), " .squares-2dea6"].join(""), a = Di(a), Hi(a, "orientation-white-4de03"), Gi(a, "orientation-black-a8276")), Tk(b)), Q.h(ql.g(c), ql.g(d)) || (w(ql.g(d)) ? Hi(Di(Tj.g(d)), "hide-notation-cbe71") : Gi(Di(Tj.g(d)), "hide-notation-cbe71")), b = Hf.g(d), c = If.g(c), d = If.g(d), sc(b) && Mg(c, d)) ? (c = wj(c), d = wj(d), b.h ? b.h(c, d) : b.call(null, c, d)) : null;
  };
  var El = function(a, b) {
    var c = Mh("container"), d = Mh("items-container"), f = Mh("squares-container"), g = Mh("dragging-piece");
    b = ek(b);
    b = bk(b);
    var h = vh();
    c = qc.S(b, Oi, 80, ic([Ti, qd, Tj, c, Cl, Dl, Gk, g, Ij, qd, lj, d, wl, 8, vl, 8, wi, 0.95, Xj, a, ql, true, Zi, qd, Mk, h, Uj, f]));
    var k = new Sg(c);
    qg(k);
    Bl(k);
    Rk(a, k);
    Tk(k);
    return {
      getCircles: Pg(Vk, k),
      setConfig: Pg(nl, k),
      getOrientation: Rg(k),
      clearPieces: Pg(tk, k),
      pieces: Pg(pl, k),
      addItem: Pg(Bk, k),
      removeItem: Pg(Ck, k),
      config: Pg(ol, k),
      setPosition: Pg(rk, k),
      clearArrows: Pg(Lj, k),
      showCoordinates: Pg(sl, k),
      getPosition: Pg(qk, k),
      toggleCoordinates: Pg(tl, k),
      clearCircles: Pg(Yk, k),
      hideCoordinates: Pg(rl, k),
      flip: function() {
        return Qg.h(k, "flip");
      },
      coordinates: function() {
        return N;
      },
      arrows: Pg(ll, k),
      getArrows: Pg(ll, k),
      position: Pg(sk, k),
      setCoordinates: function() {
        return N;
      },
      items: Pg(ml, k),
      destroy: Pg(Yj, k),
      getItems: Pg(ml, k),
      start: Pg(uk, k),
      clearItems: function() {
        return N;
      },
      move: Pg(pk, k),
      getPieces: Pg(pl, k),
      setOrientation: Pg(Qg, k),
      getCoordinates: function() {
        return N;
      },
      fen: Pg(vk, k),
      resize: Pg(Wj, k),
      clear: Pg(tk, k),
      removeArrow: Pg(il, k),
      getConfig: Pg(Nk, k),
      circles: Pg(Vk, k),
      addCircle: Pg(el, k),
      orientation: Pg(Qg, k),
      addArrow: Pg(kl, k),
      removeCircle: Pg(Xk, k),
      moveItem: Pg(Dk, k)
    };
  };
  var Fl = function(a) {
    switch (arguments.length) {
      case 0:
        return Fl.F();
      case 1:
        return Fl.g(arguments[0]);
      case 2:
        return Fl.h(
          arguments[0],
          arguments[1]
        );
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  var aa = globalThis;
  var ba = "closure_uid_" + (1e9 * Math.random() >>> 0);
  var ca = 0;
  var Gl;
  a: {
    const a = aa.navigator;
    if (a) {
      const b = a.userAgent;
      if (b) {
        Gl = b;
        break a;
      }
    }
    Gl = "";
  }
  var fa = Gl;
  e = ja.prototype;
  e.Ea = "";
  e.set = function(a) {
    this.Ea = "" + a;
  };
  e.append = function(a, b, c) {
    this.Ea += String(a);
    if (null != b) for (let d = 1; d < arguments.length; d++) this.Ea += arguments[d];
    return this;
  };
  e.clear = function() {
    this.Ea = "";
  };
  e.toString = function() {
    return this.Ea;
  };
  var ka = {};
  var ma = {};
  var na;
  var v = {};
  var oa = null;
  var ra = "undefined" !== typeof Symbol && "function" === r(Symbol) ? Symbol.iterator : "@@iterator";
  var Ba = function() {
    function a(d, f, g) {
      var h = C[r(null == d ? null : d)];
      if (null != h) return h.l ? h.l(d, f, g) : h.call(null, d, f, g);
      h = C._;
      if (null != h) return h.l ? h.l(d, f, g) : h.call(null, d, f, g);
      throw y("IIndexed.-nth", d);
    }
    function b(d, f) {
      var g = C[r(null == d ? null : d)];
      if (null != g) return g.h ? g.h(d, f) : g.call(null, d, f);
      g = C._;
      if (null != g) return g.h ? g.h(d, f) : g.call(null, d, f);
      throw y("IIndexed.-nth", d);
    }
    var c = null;
    c = function(d, f, g) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, f);
        case 3:
          return a.call(this, d, f, g);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.h = b;
    c.l = a;
    return c;
  }();
  var C = function C2(a) {
    switch (arguments.length) {
      case 2:
        return C2.h(arguments[0], arguments[1]);
      case 3:
        return C2.l(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  C.h = function(a, b) {
    return null != a && null != a.ca ? a.ca(a, b) : Ba(a, b);
  };
  C.l = function(a, b, c) {
    return null != a && null != a.la ? a.la(a, b, c) : Ba(a, b, c);
  };
  C.aa = 3;
  var Ga = function() {
    function a(d, f, g) {
      var h = Fa[r(null == d ? null : d)];
      if (null != h) return h.l ? h.l(d, f, g) : h.call(null, d, f, g);
      h = Fa._;
      if (null != h) return h.l ? h.l(d, f, g) : h.call(null, d, f, g);
      throw y("ILookup.-lookup", d);
    }
    function b(d, f) {
      var g = Fa[r(null == d ? null : d)];
      if (null != g) return g.h ? g.h(d, f) : g.call(null, d, f);
      g = Fa._;
      if (null != g) return g.h ? g.h(d, f) : g.call(null, d, f);
      throw y("ILookup.-lookup", d);
    }
    var c = null;
    c = function(d, f, g) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, f);
        case 3:
          return a.call(this, d, f, g);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.h = b;
    c.l = a;
    return c;
  }();
  var Fa = function Fa2(a) {
    switch (arguments.length) {
      case 2:
        return Fa2.h(arguments[0], arguments[1]);
      case 3:
        return Fa2.l(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Fa.h = function(a, b) {
    return null != a && null != a.ka ? a.ka(a, b) : Ga(a, b);
  };
  Fa.l = function(a, b, c) {
    return null != a && null != a.G ? a.G(a, b, c) : Ga(a, b, c);
  };
  Fa.aa = 3;
  var Wa = function() {
    function a(d, f, g) {
      var h = Va[r(null == d ? null : d)];
      if (null != h) return h.l ? h.l(d, f, g) : h.call(null, d, f, g);
      h = Va._;
      if (null != h) return h.l ? h.l(d, f, g) : h.call(null, d, f, g);
      throw y("IReduce.-reduce", d);
    }
    function b(d, f) {
      var g = Va[r(null == d ? null : d)];
      if (null != g) return g.h ? g.h(d, f) : g.call(null, d, f);
      g = Va._;
      if (null != g) return g.h ? g.h(d, f) : g.call(null, d, f);
      throw y("IReduce.-reduce", d);
    }
    var c = null;
    c = function(d, f, g) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, f);
        case 3:
          return a.call(this, d, f, g);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.h = b;
    c.l = a;
    return c;
  }();
  var Va = function Va2(a) {
    switch (arguments.length) {
      case 2:
        return Va2.h(arguments[0], arguments[1]);
      case 3:
        return Va2.l(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Va.h = function(a, b) {
    return null != a && null != a.Z ? a.Z(a, b) : Wa(a, b);
  };
  Va.l = function(a, b, c) {
    return null != a && null != a.kc ? a.kc(a, b, c) : Wa(a, b, c);
  };
  Va.aa = 3;
  var Il = function() {
    function a(g, h, k, l, m) {
      var n = Hl[r(null == g ? null : g)];
      if (null != n) return n.va ? n.va(g, h, k, l, m) : n.call(null, g, h, k, l, m);
      n = Hl._;
      if (null != n) return n.va ? n.va(g, h, k, l, m) : n.call(null, g, h, k, l, m);
      throw y("ISwap.-swap!", g);
    }
    function b(g, h, k, l) {
      var m = Hl[r(null == g ? null : g)];
      if (null != m) return m.ja ? m.ja(g, h, k, l) : m.call(null, g, h, k, l);
      m = Hl._;
      if (null != m) return m.ja ? m.ja(g, h, k, l) : m.call(null, g, h, k, l);
      throw y("ISwap.-swap!", g);
    }
    function c(g, h, k) {
      var l = Hl[r(null == g ? null : g)];
      if (null != l) return l.l ? l.l(g, h, k) : l.call(null, g, h, k);
      l = Hl._;
      if (null != l) return l.l ? l.l(g, h, k) : l.call(null, g, h, k);
      throw y("ISwap.-swap!", g);
    }
    function d(g, h) {
      var k = Hl[r(null == g ? null : g)];
      if (null != k) return k.h ? k.h(g, h) : k.call(null, g, h);
      k = Hl._;
      if (null != k) return k.h ? k.h(g, h) : k.call(null, g, h);
      throw y("ISwap.-swap!", g);
    }
    var f = null;
    f = function(g, h, k, l, m) {
      switch (arguments.length) {
        case 2:
          return d.call(this, g, h);
        case 3:
          return c.call(this, g, h, k);
        case 4:
          return b.call(this, g, h, k, l);
        case 5:
          return a.call(this, g, h, k, l, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    f.h = d;
    f.l = c;
    f.ja = b;
    f.va = a;
    return f;
  }();
  var Hl = function Hl2(a) {
    switch (arguments.length) {
      case 2:
        return Hl2.h(arguments[0], arguments[1]);
      case 3:
        return Hl2.l(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Hl2.ja(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return Hl2.va(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Hl.h = function(a, b) {
    return null != a && null != a.xc ? a.xc(a, b) : Il(a, b);
  };
  Hl.l = function(a, b, c) {
    return null != a && null != a.yc ? a.yc(a, b, c) : Il(a, b, c);
  };
  Hl.ja = function(a, b, c, d) {
    return null != a && null != a.zc ? a.zc(a, b, c, d) : Il(a, b, c, d);
  };
  Hl.va = function(a, b, c, d, f) {
    return null != a && null != a.Ac ? a.Ac(a, b, c, d, f) : Il(a, b, c, d, f);
  };
  Hl.aa = 5;
  sb.prototype.Db = function(a, b) {
    return this.Wb.append(b);
  };
  var zb = "undefined" !== typeof Math && "undefined" !== typeof Math.imul ? function(a, b) {
    return Math.imul(a, b);
  } : function(a, b) {
    var c = a & 65535, d = b & 65535;
    return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
  };
  var Eb = {};
  var Fb = 0;
  e = Jb.prototype;
  e.toString = function() {
    return this.Da;
  };
  e.K = function(a, b) {
    return b instanceof Jb ? this.Da === b.Da : false;
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return Kb.h ? Kb.h(a, this) : Kb.call(null, a, this);
  };
  e.h = function(a, b) {
    return Kb.l ? Kb.l(a, this, b) : Kb.call(null, a, this, b);
  };
  e.P = function() {
    return this.ta;
  };
  e.R = function(a, b) {
    return new Jb(this.pb, this.name, this.Da, this.Xa, b);
  };
  e.O = function() {
    var a = this.Xa;
    return null != a ? a : this.Xa = a = Ib(Db(this.name), Gb(this.pb));
  };
  e.M = function(a, b) {
    return F(b, this.Da);
  };
  var Lb = function Lb2(a) {
    switch (arguments.length) {
      case 1:
        return Lb2.g(arguments[0]);
      case 2:
        return Lb2.h(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Lb.g = function(a) {
    for (; ; ) {
      if (a instanceof Jb) return a;
      if ("string" === typeof a) {
        var b = a.indexOf("/");
        return 1 > b ? Lb.h(null, a) : Lb.h(a.substring(0, b), a.substring(b + 1, a.length));
      }
      if (a instanceof H) a = a.wa;
      else throw Error("no conversion to symbol");
    }
  };
  Lb.h = function(a, b) {
    var c = null != a ? [B.g(a), "/", B.g(b)].join("") : b;
    return new Jb(a, b, c, null, null);
  };
  Lb.aa = 2;
  var Q = function Q2(a) {
    switch (arguments.length) {
      case 1:
        return Q2.g(arguments[0]);
      case 2:
        return Q2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return Q2.S(arguments[0], arguments[1], new K(c.slice(2), 0, null));
    }
  };
  Q.g = function() {
    return true;
  };
  Q.h = function(a, b) {
    return null == a ? null == b : a === b || Za(a, b);
  };
  Q.S = function(a, b, c) {
    for (; ; ) if (Q.h(a, b)) if (O(c)) a = b, b = M(c), c = O(c);
    else return Q.h(b, M(c));
    else return false;
  };
  Q.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    c = O(c);
    return this.S(b, a, c);
  };
  Q.aa = 2;
  Pb.prototype.next = function() {
    if (null != this.B) {
      var a = M(this.B);
      this.B = O(this.B);
      return { value: a, done: false };
    }
    return { value: null, done: true };
  };
  Qb.prototype.I = function() {
    return this;
  };
  Qb.prototype.Y = function() {
    return this.value;
  };
  Qb.prototype.da = function() {
    null == this.vb && (this.vb = Nb.g ? Nb.g(this.cb) : Nb.call(null, this.cb));
    return this.vb;
  };
  var Sb = Cb(Bb(0, Ab(1)), 0);
  var Ub = Cb(Bb(0, Ab(0)), 0);
  va["null"] = true;
  wa["null"] = function() {
    return 0;
  };
  Date.prototype.K = function(a, b) {
    return b instanceof Date && this.valueOf() === b.valueOf();
  };
  Date.prototype.mc = v;
  Date.prototype.lc = function(a, b) {
    if (b instanceof Date) return ag(this.valueOf(), b.valueOf());
    throw Error(["Cannot compare ", B.g(this), " to ", B.g(b)].join(""));
  };
  Za.number = function(a, b) {
    return a === b;
  };
  ta["function"] = true;
  Ra["function"] = true;
  Sa["function"] = function() {
    return null;
  };
  $a._ = function(a) {
    return ea(a);
  };
  Vb.prototype.Jb = function() {
    return this.J;
  };
  fc.prototype.fa = function() {
    return this.m < this.i.length;
  };
  fc.prototype.next = function() {
    var a = this.i[this.m];
    this.m += 1;
    return a;
  };
  e = K.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T.g ? T.g(this) : T.call(null, this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.ca = function(a, b) {
    a = b + this.m;
    if (0 <= a && a < this.i.length) return this.i[a];
    throw Error("Index out of bounds");
  };
  e.la = function(a, b, c) {
    a = b + this.m;
    return 0 <= a && a < this.i.length ? this.i[a] : c;
  };
  e.na = function() {
    return new fc(this.i, this.m);
  };
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return this.m + 1 < this.i.length ? new K(this.i, this.m + 1, null) : null;
  };
  e.H = function() {
    var a = this.i.length - this.m;
    return 0 > a ? 0 : a;
  };
  e.tb = function() {
    var a = this.H(null);
    return 0 < a ? new gc(this, a - 1, null) : null;
  };
  e.O = function() {
    return Rb(this);
  };
  e.K = function(a, b) {
    return hc.h ? hc.h(this, b) : hc.call(null, this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return ac(this.i, b, this.i[this.m], this.m + 1);
  };
  e.kc = function(a, b, c) {
    return ac(this.i, b, c, this.m);
  };
  e.Y = function() {
    return this.i[this.m];
  };
  e.da = function() {
    return this.m + 1 < this.i.length ? new K(this.i, this.m + 1, null) : N;
  };
  e.I = function() {
    return this.m < this.i.length ? this : null;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new K(this.i, this.m, b);
  };
  e.U = function(a, b) {
    return W.h ? W.h(b, this) : W.call(null, b, this);
  };
  K.prototype[ra] = function() {
    return R(this);
  };
  e = gc.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T.g ? T.g(this) : T.call(null, this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return 0 < this.m ? new gc(this.qb, this.m - 1, null) : null;
  };
  e.H = function() {
    return this.m + 1;
  };
  e.O = function() {
    return Rb(this);
  };
  e.K = function(a, b) {
    return hc.h ? hc.h(this, b) : hc.call(null, this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc ? jc(b, this) : kc.call(null, b, this);
  };
  e.kc = function(a, b, c) {
    return lc ? lc(b, c, this) : kc.call(null, b, c, this);
  };
  e.Y = function() {
    return C(this.qb, this.m);
  };
  e.da = function() {
    return 0 < this.m ? new gc(this.qb, this.m - 1, null) : N;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new gc(this.qb, this.m, b);
  };
  e.U = function(a, b) {
    return W.h ? W.h(b, this) : W.call(null, b, this);
  };
  gc.prototype[ra] = function() {
    return R(this);
  };
  Za._ = function(a, b) {
    return a === b;
  };
  var mc = function mc2(a) {
    switch (arguments.length) {
      case 0:
        return mc2.F();
      case 1:
        return mc2.g(arguments[0]);
      case 2:
        return mc2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return mc2.S(arguments[0], arguments[1], new K(c.slice(2), 0, null));
    }
  };
  mc.F = function() {
    return nc;
  };
  mc.g = function(a) {
    return a;
  };
  mc.h = function(a, b) {
    return null != a ? za(a, b) : new oc(null, b, null, 1, null);
  };
  mc.S = function(a, b, c) {
    for (; ; ) if (w(c)) a = mc.h(a, b), b = M(c), c = O(c);
    else return mc.h(a, b);
  };
  mc.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    c = O(c);
    return this.S(b, a, c);
  };
  mc.aa = 2;
  var Kb = function Kb2(a) {
    switch (arguments.length) {
      case 2:
        return Kb2.h(arguments[0], arguments[1]);
      case 3:
        return Kb2.l(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Kb.h = function(a, b) {
    return null == a ? null : null != a && (a.j & 256 || v === a.Nb) ? a.ka(null, b) : pa(a) ? null != b && b < a.length ? a[b | 0] : null : "string" === typeof a ? null != b && -1 < b && b < a.length ? a.charAt(b | 0) : null : x(Ea, a) ? Fa(a, b) : null;
  };
  Kb.l = function(a, b, c) {
    return null != a ? null != a && (a.j & 256 || v === a.Nb) ? a.G(null, b, c) : pa(a) ? null != b && -1 < b && b < a.length ? a[b | 0] : c : "string" === typeof a ? null != b && -1 < b && b < a.length ? a.charAt(b | 0) : c : x(Ea, a) ? Fa(a, b, c) : c : c;
  };
  Kb.aa = 3;
  var qc = function qc2(a) {
    switch (arguments.length) {
      case 3:
        return qc2.l(arguments[0], arguments[1], arguments[2]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return qc2.S(arguments[0], arguments[1], arguments[2], new K(c.slice(3), 0, null));
    }
  };
  qc.l = function(a, b, c) {
    return null != a && (a.j & 512 || v === a.Hb) ? a.ya(null, b, c) : null != a ? Ja(a, b, c) : rc([b, c]);
  };
  qc.S = function(a, b, c, d) {
    for (; ; ) if (a = qc.l(a, b, c), w(d)) b = M(d), c = M(O(d)), d = O(O(d));
    else return a;
  };
  qc.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    var d = O(c);
    c = M(d);
    d = O(d);
    return this.S(b, a, c, d);
  };
  qc.aa = 3;
  var jj = function jj2(a) {
    switch (arguments.length) {
      case 1:
        return jj2.g(arguments[0]);
      case 2:
        return jj2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return jj2.S(arguments[0], arguments[1], new K(c.slice(2), 0, null));
    }
  };
  jj.g = function(a) {
    return a;
  };
  jj.h = function(a, b) {
    return null == a ? null : lg(a, b);
  };
  jj.S = function(a, b, c) {
    for (; ; ) {
      if (null == a) return null;
      a = jj.h(a, b);
      if (w(c)) b = M(c), c = O(c);
      else return a;
    }
  };
  jj.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    c = O(c);
    return this.S(b, a, c);
  };
  jj.aa = 2;
  e = tc.prototype;
  e.P = function() {
    return this.s;
  };
  e.R = function(a, b) {
    return new tc(this.u, b);
  };
  e.Gb = v;
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 0:
        return this.F();
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      case 3:
        return this.l(arguments[1], arguments[2], arguments[3]);
      case 4:
        return this.ja(arguments[1], arguments[2], arguments[3], arguments[4]);
      case 5:
        return this.va(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      case 6:
        return this.Qa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
      case 7:
        return this.Ra(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7]
        );
      case 8:
        return this.Sa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
      case 9:
        return this.Ta(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
      case 10:
        return this.Fa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
      case 11:
        return this.Ga(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
      case 12:
        return this.Ha(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
      case 13:
        return this.Ia(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13]
        );
      case 14:
        return this.Ja(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
      case 15:
        return this.Ka(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
      case 16:
        return this.La(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16]
        );
      case 17:
        return this.Ma(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
      case 18:
        return this.Na(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18]
        );
      case 19:
        return this.Oa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
      case 20:
        return this.Pa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19],
          arguments[20]
        );
      case 21:
        var b = arguments[1], c = arguments[2], d = arguments[3], f = arguments[4], g = arguments[5], h = arguments[6], k = arguments[7], l = arguments[8], m = arguments[9], n = arguments[10], p = arguments[11], q = arguments[12], u = arguments[13], z = arguments[14], A = arguments[15], E = arguments[16], I = arguments[17], P = arguments[18], V = arguments[19], la = arguments[20], ua = arguments[21];
        return uc.Mb ? uc.Mb(this.u, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V, la, ua) : uc.call(null, this.u, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V, la, ua);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.F = function() {
    return this.u.F ? this.u.F() : this.u.call(null);
  };
  e.g = function(a) {
    return this.u.g ? this.u.g(a) : this.u.call(null, a);
  };
  e.h = function(a, b) {
    return this.u.h ? this.u.h(a, b) : this.u.call(null, a, b);
  };
  e.l = function(a, b, c) {
    return this.u.l ? this.u.l(a, b, c) : this.u.call(null, a, b, c);
  };
  e.ja = function(a, b, c, d) {
    return this.u.ja ? this.u.ja(a, b, c, d) : this.u.call(null, a, b, c, d);
  };
  e.va = function(a, b, c, d, f) {
    return this.u.va ? this.u.va(a, b, c, d, f) : this.u.call(null, a, b, c, d, f);
  };
  e.Qa = function(a, b, c, d, f, g) {
    return this.u.Qa ? this.u.Qa(a, b, c, d, f, g) : this.u.call(null, a, b, c, d, f, g);
  };
  e.Ra = function(a, b, c, d, f, g, h) {
    return this.u.Ra ? this.u.Ra(a, b, c, d, f, g, h) : this.u.call(null, a, b, c, d, f, g, h);
  };
  e.Sa = function(a, b, c, d, f, g, h, k) {
    return this.u.Sa ? this.u.Sa(a, b, c, d, f, g, h, k) : this.u.call(null, a, b, c, d, f, g, h, k);
  };
  e.Ta = function(a, b, c, d, f, g, h, k, l) {
    return this.u.Ta ? this.u.Ta(a, b, c, d, f, g, h, k, l) : this.u.call(null, a, b, c, d, f, g, h, k, l);
  };
  e.Fa = function(a, b, c, d, f, g, h, k, l, m) {
    return this.u.Fa ? this.u.Fa(a, b, c, d, f, g, h, k, l, m) : this.u.call(null, a, b, c, d, f, g, h, k, l, m);
  };
  e.Ga = function(a, b, c, d, f, g, h, k, l, m, n) {
    return this.u.Ga ? this.u.Ga(a, b, c, d, f, g, h, k, l, m, n) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n);
  };
  e.Ha = function(a, b, c, d, f, g, h, k, l, m, n, p) {
    return this.u.Ha ? this.u.Ha(a, b, c, d, f, g, h, k, l, m, n, p) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p);
  };
  e.Ia = function(a, b, c, d, f, g, h, k, l, m, n, p, q) {
    return this.u.Ia ? this.u.Ia(a, b, c, d, f, g, h, k, l, m, n, p, q) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q);
  };
  e.Ja = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u) {
    return this.u.Ja ? this.u.Ja(a, b, c, d, f, g, h, k, l, m, n, p, q, u) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u);
  };
  e.Ka = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z) {
    return this.u.Ka ? this.u.Ka(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u, z);
  };
  e.La = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A) {
    return this.u.La ? this.u.La(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A);
  };
  e.Ma = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E) {
    return this.u.Ma ? this.u.Ma(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E);
  };
  e.Na = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I) {
    return this.u.Na ? this.u.Na(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I);
  };
  e.Oa = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P) {
    return this.u.Oa ? this.u.Oa(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P);
  };
  e.Pa = function(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V) {
    return this.u.Pa ? this.u.Pa(a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V) : this.u.call(null, a, b, c, d, f, g, h, k, l, m, n, p, q, u, z, A, E, I, P, V);
  };
  var Ec = {};
  var B = function B2(a) {
    switch (arguments.length) {
      case 0:
        return B2.F();
      case 1:
        return B2.g(arguments[0]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return B2.S(arguments[0], new K(c.slice(1), 0, null));
    }
  };
  B.F = function() {
    return "";
  };
  B.g = function(a) {
    return null == a ? "" : [a].join("");
  };
  B.S = function(a, b) {
    for (a = new ja(B.g(a)); ; ) if (w(b)) a = a.append(B.g(M(b))), b = O(b);
    else return a.toString();
  };
  B.ea = function(a) {
    var b = M(a);
    a = O(a);
    return this.S(b, a);
  };
  B.aa = 1;
  e = oc.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, this.count);
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return 1 === this.count ? null : this.xa;
  };
  e.H = function() {
    return this.count;
  };
  e.nc = function() {
    return this.first;
  };
  e.oc = function() {
    return this.da(null);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return Ta(N, this.s);
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return this.first;
  };
  e.da = function() {
    return 1 === this.count ? N : this.xa;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new oc(b, this.first, this.xa, this.count, this.v);
  };
  e.U = function(a, b) {
    return new oc(this.s, b, this, this.count + 1, null);
  };
  oc.prototype[ra] = function() {
    return R(this);
  };
  e = Sc.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return null;
  };
  e.H = function() {
    return 0;
  };
  e.nc = function() {
    return null;
  };
  e.oc = function() {
    throw Error("Can't pop empty list");
  };
  e.O = function() {
    return Sb;
  };
  e.K = function(a, b) {
    return (null != b ? b.j & 33554432 || v === b.bc || (b.j ? 0 : x(db, b)) : x(db, b)) || yc(b) ? null == J(b) : false;
  };
  e.V = function() {
    return this;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return null;
  };
  e.da = function() {
    return N;
  };
  e.I = function() {
    return null;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Sc(b);
  };
  e.U = function(a, b) {
    return new oc(this.s, b, null, 1, null);
  };
  var N = new Sc(null);
  Sc.prototype[ra] = function() {
    return R(this);
  };
  e = Uc.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return null == this.xa ? null : J(this.xa);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return this.first;
  };
  e.da = function() {
    return null == this.xa ? N : this.xa;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Uc(b, this.first, this.xa, this.v);
  };
  e.U = function(a, b) {
    return new Uc(null, b, this, null);
  };
  Uc.prototype[ra] = function() {
    return R(this);
  };
  e = H.prototype;
  e.toString = function() {
    return [":", B.g(this.wa)].join("");
  };
  e.K = function(a, b) {
    return b instanceof H ? this.wa === b.wa : false;
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return Kb.h(a, this);
  };
  e.h = function(a, b) {
    return Kb.l(a, this, b);
  };
  e.O = function() {
    var a = this.Xa;
    return null != a ? a : this.Xa = a = Ib(Db(this.name), Gb(this.pb)) + 2654435769 | 0;
  };
  e.M = function(a, b) {
    return F(b, [":", B.g(this.wa)].join(""));
  };
  var Wc = function Wc2(a) {
    switch (arguments.length) {
      case 1:
        return Wc2.g(arguments[0]);
      case 2:
        return Wc2.h(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Wc.g = function(a) {
    if (a instanceof H) return a;
    if (a instanceof Jb) return new H(Vc(a), Xc.g ? Xc.g(a) : Xc.call(null, a), a.Da, null);
    if (Q.h("/", a)) return new H(null, a, a, null);
    if ("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length ? new H(b[0], b[1], a, null) : new H(null, b[0], a, null);
    }
    return null;
  };
  Wc.h = function(a, b) {
    a = a instanceof H ? Xc.g ? Xc.g(a) : Xc.call(null, a) : a instanceof Jb ? Xc.g ? Xc.g(a) : Xc.call(null, a) : a;
    b = b instanceof H ? Xc.g ? Xc.g(b) : Xc.call(null, b) : b instanceof Jb ? Xc.g ? Xc.g(b) : Xc.call(null, b) : b;
    return new H(a, b, [w(a) ? [B.g(a), "/"].join("") : null, B.g(b)].join(""), null);
  };
  Wc.aa = 2;
  e = Yc.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    this.I(null);
    return null == this.B ? null : O(this.B);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return Ta(N, this.s);
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    this.I(null);
    return null == this.B ? null : M(this.B);
  };
  e.da = function() {
    this.I(null);
    return null != this.B ? Ob(this.B) : N;
  };
  e.I = function() {
    Zc(this);
    if (null == this.B) return null;
    for (var a = this.B; ; ) if (a instanceof Yc) a = Zc(a);
    else return this.B = a, J(this.B);
  };
  e.R = function(a, b) {
    var c = this;
    return b === this.s ? c : new Yc(b, function() {
      return c.I(null);
    }, this.v);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  Yc.prototype[ra] = function() {
    return R(this);
  };
  $c.prototype.add = function(a) {
    this.xb[this.end] = a;
    return this.end += 1;
  };
  $c.prototype.N = function() {
    var a = new ad(this.xb, 0, this.end);
    this.xb = null;
    return a;
  };
  $c.prototype.H = function() {
    return this.end;
  };
  e = ad.prototype;
  e.H = function() {
    return this.end - this.ba;
  };
  e.ca = function(a, b) {
    return this.i[this.ba + b];
  };
  e.la = function(a, b, c) {
    return 0 <= b && b < this.end - this.ba ? this.i[this.ba + b] : c;
  };
  e.yb = function() {
    if (this.ba === this.end) throw Error("-drop-first of empty chunk");
    return new ad(this.i, this.ba + 1, this.end);
  };
  e.Z = function(a, b) {
    return ac(this.i, b, this.i[this.ba], this.ba + 1);
  };
  e.kc = function(a, b, c) {
    return ac(this.i, b, c, this.ba);
  };
  e = bd.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return 1 < wa(this.N) ? new bd(nb(this.N), this.qa, null, null) : null == this.qa ? null : bb(this.qa);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Y = function() {
    return C(this.N, 0);
  };
  e.da = function() {
    return 1 < wa(this.N) ? new bd(nb(this.N), this.qa, null, null) : null == this.qa ? N : this.qa;
  };
  e.I = function() {
    return this;
  };
  e.eb = function() {
    return this.N;
  };
  e.za = function() {
    return null == this.qa ? N : this.qa;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new bd(this.N, this.qa, b, this.v);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  e.rb = function() {
    return null == this.qa ? null : this.qa;
  };
  bd.prototype[ra] = function() {
    return R(this);
  };
  var fd = function fd2(a) {
    if (null == a) return null;
    var c = O(a);
    return null == c ? J(M(a)) : W(M(a), fd2.g ? fd2.g(c) : fd2.call(null, c));
  };
  var gd = function gd2(a) {
    switch (arguments.length) {
      case 0:
        return gd2.F();
      case 1:
        return gd2.g(arguments[0]);
      case 2:
        return gd2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return gd2.S(arguments[0], arguments[1], new K(c.slice(2), 0, null));
    }
  };
  gd.F = function() {
    return new Yc(null, function() {
      return null;
    }, null);
  };
  gd.g = function(a) {
    return new Yc(null, function() {
      return a;
    }, null);
  };
  gd.h = function(a, b) {
    return new Yc(null, function() {
      var c = J(a);
      return c ? Cc(c) ? cd(ob(c), gd.h(pb(c), b)) : W(M(c), gd.h(Ob(c), b)) : b;
    }, null);
  };
  gd.S = function(a, b, c) {
    return function h(f, g) {
      return new Yc(null, function() {
        var k = J(f);
        return k ? Cc(k) ? cd(ob(k), h(pb(k), g)) : W(M(k), h(Ob(k), g)) : w(g) ? h(M(g), O(g)) : null;
      }, null);
    }(gd.h(a, b), c);
  };
  gd.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    c = O(c);
    return this.S(b, a, c);
  };
  gd.aa = 2;
  e = Sg.prototype;
  e.K = function(a, b) {
    return this === b;
  };
  e.Jb = function() {
    return this.state;
  };
  e.P = function() {
    return this.s;
  };
  e.sc = function(a, b, c) {
    this.qc = qc.l(this.qc, b, c);
    return this;
  };
  e.O = function() {
    return ea(this);
  };
  var Ri = function Ri2(a) {
    switch (arguments.length) {
      case 2:
        return Ri2.h(arguments[0], arguments[1]);
      case 3:
        return Ri2.l(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Ri2.ja(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return Ri2.S(arguments[0], arguments[1], arguments[2], arguments[3], new K(c.slice(4), 0, null));
    }
  };
  Ri.h = function(a, b) {
    if (a instanceof Sg) {
      var c = a.state;
      b = b.g ? b.g(c) : b.call(null, c);
      a = Tg(a, b);
    } else a = Hl(a, b);
    return a;
  };
  Ri.l = function(a, b, c) {
    if (a instanceof Sg) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = Tg(a, b);
    } else a = Hl(a, b, c);
    return a;
  };
  Ri.ja = function(a, b, c, d) {
    if (a instanceof Sg) {
      var f = a.state;
      b = b.l ? b.l(f, c, d) : b.call(null, f, c, d);
      a = Tg(a, b);
    } else a = Hl(a, b, c, d);
    return a;
  };
  Ri.S = function(a, b, c, d, f) {
    return a instanceof Sg ? Tg(a, Kg(b, a.state, c, d, f)) : Hl(a, b, c, d, f);
  };
  Ri.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    var d = O(c);
    c = M(d);
    var f = O(d);
    d = M(f);
    f = O(f);
    return this.S(b, a, c, d, f);
  };
  Ri.aa = 4;
  var Y = function Y2(a) {
    switch (arguments.length) {
      case 1:
        return Y2.g(arguments[0]);
      case 2:
        return Y2.h(arguments[0], arguments[1]);
      case 3:
        return Y2.l(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Y2.ja(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return Y2.S(arguments[0], arguments[1], arguments[2], arguments[3], new K(c.slice(4), 0, null));
    }
  };
  Y.g = function(a) {
    return function(b) {
      return function() {
        function c(k, l) {
          l = a.g ? a.g(l) : a.call(null, l);
          return b.h ? b.h(k, l) : b.call(null, k, l);
        }
        function d(k) {
          return b.g ? b.g(k) : b.call(null, k);
        }
        function f() {
          return b.F ? b.F() : b.call(null);
        }
        var g = null, h = function() {
          function k(m, n, p) {
            var q = null;
            if (2 < arguments.length) {
              q = 0;
              for (var u = Array(arguments.length - 2); q < u.length; ) u[q] = arguments[q + 2], ++q;
              q = new K(u, 0, null);
            }
            return l.call(this, m, n, q);
          }
          function l(m, n, p) {
            n = od(a, n, p);
            return b.h ? b.h(m, n) : b.call(null, m, n);
          }
          k.aa = 2;
          k.ea = function(m) {
            var n = M(m);
            m = O(m);
            var p = M(m);
            m = Ob(m);
            return l(n, p, m);
          };
          k.S = l;
          return k;
        }();
        g = function(k, l, m) {
          switch (arguments.length) {
            case 0:
              return f.call(this);
            case 1:
              return d.call(this, k);
            case 2:
              return c.call(this, k, l);
            default:
              var n = null;
              if (2 < arguments.length) {
                n = 0;
                for (var p = Array(arguments.length - 2); n < p.length; ) p[n] = arguments[n + 2], ++n;
                n = new K(p, 0, null);
              }
              return h.S(k, l, n);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        g.aa = 2;
        g.ea = h.ea;
        g.F = f;
        g.g = d;
        g.h = c;
        g.S = h.S;
        return g;
      }();
    };
  };
  Y.h = function(a, b) {
    return new Yc(null, function() {
      var c = J(b);
      if (c) {
        if (Cc(c)) {
          for (var d = ob(c), f = T(d), g = Ig(f), h = 0; ; ) if (h < f) dd(g, function() {
            var k = C(d, h);
            return a.g ? a.g(k) : a.call(null, k);
          }()), h += 1;
          else break;
          return cd(g.N(), Y.h(a, pb(c)));
        }
        return W(function() {
          var k = M(c);
          return a.g ? a.g(k) : a.call(null, k);
        }(), Y.h(a, Ob(c)));
      }
      return null;
    }, null);
  };
  Y.l = function(a, b, c) {
    return new Yc(null, function() {
      var d = J(b), f = J(c);
      if (d && f) {
        var g = M(d);
        var h = M(f);
        g = a.h ? a.h(g, h) : a.call(null, g, h);
        d = W(g, Y.l(a, Ob(d), Ob(f)));
      } else d = null;
      return d;
    }, null);
  };
  Y.ja = function(a, b, c, d) {
    return new Yc(null, function() {
      var f = J(b), g = J(c), h = J(d);
      if (f && g && h) {
        var k = M(f);
        var l = M(g), m = M(h);
        k = a.l ? a.l(k, l, m) : a.call(null, k, l, m);
        f = W(k, Y.ja(a, Ob(f), Ob(g), Ob(h)));
      } else f = null;
      return f;
    }, null);
  };
  Y.S = function(a, b, c, d, f) {
    return Y.h(function(g) {
      return nd(a, g);
    }, function k(h) {
      return new Yc(null, function() {
        var l = Y.h(J, h);
        return sd(Oc, l) ? W(Y.h(M, l), k(Y.h(Ob, l))) : null;
      }, null);
    }(mc.S(f, d, ic([c, b]))));
  };
  Y.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    var d = O(c);
    c = M(d);
    var f = O(d);
    d = M(f);
    f = O(f);
    return this.S(b, a, c, d, f);
  };
  Y.aa = 4;
  var Si = function Si2(a, b, c) {
    var f = J(b);
    b = M(f);
    var g = O(f);
    if (g) {
      f = qc.l;
      var h = Kb.h(a, b);
      c = Si2.l ? Si2.l(h, g, c) : Si2.call(null, h, g, c);
      a = f.call(qc, a, b, c);
    } else a = qc.l(a, b, c);
    return a;
  };
  var Kj = function Kj2(a) {
    switch (arguments.length) {
      case 3:
        return Kj2.l(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Kj2.ja(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return Kj2.va(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      case 6:
        return Kj2.Qa(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5]
        );
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return Kj2.S(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new K(c.slice(6), 0, null));
    }
  };
  Kj.l = function(a, b, c) {
    var d = J(b);
    b = M(d);
    if (d = O(d)) a = qc.l(a, b, Kj.l(Kb.h(a, b), d, c));
    else {
      d = qc.l;
      var f = Kb.h(a, b);
      c = c.g ? c.g(f) : c.call(null, f);
      a = d.call(qc, a, b, c);
    }
    return a;
  };
  Kj.ja = function(a, b, c, d) {
    var f = J(b);
    b = M(f);
    if (f = O(f)) a = qc.l(a, b, Kj.ja(Kb.h(a, b), f, c, d));
    else {
      f = qc.l;
      var g = Kb.h(a, b);
      c = c.h ? c.h(g, d) : c.call(null, g, d);
      a = f.call(qc, a, b, c);
    }
    return a;
  };
  Kj.va = function(a, b, c, d, f) {
    var g = J(b);
    b = M(g);
    if (g = O(g)) a = qc.l(a, b, Kj.va(Kb.h(a, b), g, c, d, f));
    else {
      g = qc.l;
      var h = Kb.h(a, b);
      c = c.l ? c.l(h, d, f) : c.call(null, h, d, f);
      a = g.call(qc, a, b, c);
    }
    return a;
  };
  Kj.Qa = function(a, b, c, d, f, g) {
    var h = J(b);
    b = M(h);
    if (h = O(h)) a = qc.l(a, b, Kj.Qa(Kb.h(a, b), h, c, d, f, g));
    else {
      h = qc.l;
      var k = Kb.h(a, b);
      c = c.ja ? c.ja(k, d, f, g) : c.call(null, k, d, f, g);
      a = h.call(qc, a, b, c);
    }
    return a;
  };
  Kj.S = function(a, b, c, d, f, g, h) {
    var k = J(b);
    b = M(k);
    return (k = O(k)) ? qc.l(a, b, Lg(Kj, Kb.h(a, b), k, c, d, ic([f, g, h]))) : qc.l(a, b, Lg(c, Kb.h(a, b), d, f, g, ic([h])));
  };
  Kj.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    var d = O(c);
    c = M(d);
    var f = O(d);
    d = M(f);
    var g = O(f);
    f = M(g);
    var h = O(g);
    g = M(h);
    h = O(h);
    return this.S(b, a, c, d, f, g, h);
  };
  Kj.aa = 6;
  var mj = function mj2(a) {
    switch (arguments.length) {
      case 3:
        return mj2.l(arguments[0], arguments[1], arguments[2]);
      case 4:
        return mj2.ja(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return mj2.va(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      case 6:
        return mj2.Qa(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      default:
        for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
        else break;
        return mj2.S(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          new K(c.slice(6), 0, null)
        );
    }
  };
  mj.l = function(a, b, c) {
    var d = qc.l, f = Kb.h(a, b);
    c = c.g ? c.g(f) : c.call(null, f);
    return d.call(qc, a, b, c);
  };
  mj.ja = function(a, b, c, d) {
    var f = qc.l, g = Kb.h(a, b);
    c = c.h ? c.h(g, d) : c.call(null, g, d);
    return f.call(qc, a, b, c);
  };
  mj.va = function(a, b, c, d, f) {
    var g = qc.l, h = Kb.h(a, b);
    c = c.l ? c.l(h, d, f) : c.call(null, h, d, f);
    return g.call(qc, a, b, c);
  };
  mj.Qa = function(a, b, c, d, f, g) {
    var h = qc.l, k = Kb.h(a, b);
    c = c.ja ? c.ja(k, d, f, g) : c.call(null, k, d, f, g);
    return h.call(qc, a, b, c);
  };
  mj.S = function(a, b, c, d, f, g, h) {
    return qc.l(a, b, Lg(c, Kb.h(a, b), d, f, g, ic([h])));
  };
  mj.ea = function(a) {
    var b = M(a), c = O(a);
    a = M(c);
    var d = O(c);
    c = M(d);
    var f = O(d);
    d = M(f);
    var g = O(f);
    f = M(g);
    var h = O(g);
    g = M(h);
    h = O(h);
    return this.S(b, a, c, d, f, g, h);
  };
  mj.aa = 6;
  var Ed = function Ed2(a, b, c, d) {
    var g = Yg(c), h = a.o - 1 >>> b & 31;
    5 === b ? g.i[h] = d : (c = c.i[h], null != c ? (b -= 5, a = Ed2.ja ? Ed2.ja(a, b, c, d) : Ed2.call(null, a, b, c, d)) : a = Dd(null, b - 5, d), g.i[h] = a);
    return g;
  };
  var Hd = function Hd2(a, b, c, d, f) {
    var h = Yg(c);
    if (0 === b) h.i[d & 31] = f;
    else {
      var k = d >>> b & 31;
      b -= 5;
      c = c.i[k];
      a = Hd2.va ? Hd2.va(a, b, c, d, f) : Hd2.call(null, a, b, c, d, f);
      h.i[k] = a;
    }
    return h;
  };
  var Jl = function Jl2(a, b, c) {
    var f = a.o - 2 >>> b & 31;
    if (5 < b) {
      b -= 5;
      var g = c.i[f];
      a = Jl2.l ? Jl2.l(a, b, g) : Jl2.call(null, a, b, g);
      if (null == a && 0 === f) return null;
      c = Yg(c);
      c.i[f] = a;
      return c;
    }
    if (0 === f) return null;
    c = Yg(c);
    c.i[f] = null;
    return c;
  };
  Id.prototype.fa = function() {
    return this.m < this.end;
  };
  Id.prototype.next = function() {
    32 === this.m - this.wb && (this.i = Fd(this.Xb, this.m), this.wb += 32);
    var a = this.i[this.m & 31];
    this.m += 1;
    return a;
  };
  e = Ld.prototype;
  e.fb = function(a, b) {
    return 0 <= b && b < this.o ? new Md(b, Fd(this, b)[b & 31]) : null;
  };
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    return "number" === typeof b ? this.la(null, b, c) : c;
  };
  e.sb = function(a, b, c) {
    a = 0;
    for (var d = c; ; ) if (a < this.o) {
      var f = Fd(this, a);
      c = f.length;
      a: for (var g = 0; ; ) if (g < c) {
        var h = g + a, k = f[g];
        d = b.l ? b.l(d, h, k) : b.call(null, d, h, k);
        if (Wb(d)) {
          f = d;
          break a;
        }
        g += 1;
      } else {
        f = d;
        break a;
      }
      if (Wb(f)) return Qa(f);
      a += c;
      d = f;
    } else return d;
  };
  e.ca = function(a, b) {
    return Gd(this, b)[b & 31];
  };
  e.la = function(a, b, c) {
    return 0 <= b && b < this.o ? Fd(this, b)[b & 31] : c;
  };
  e.zb = function(a, b) {
    if (0 <= a && a < this.o) {
      if (Cd(this) <= a) {
        var c = sa(this.ia);
        c[a & 31] = b;
        return new Ld(this.s, this.o, this.shift, this.root, c, null);
      }
      return new Ld(this.s, this.o, this.shift, Hd(this, this.shift, this.root, a, b), this.ia, null);
    }
    if (a === this.o) return this.U(null, b);
    throw Error(["Index ", B.g(a), " out of bounds  [0,", B.g(this.o), "]"].join(""));
  };
  e.na = function() {
    var a = this.o;
    return new Id(0 < T(this) ? Fd(this, 0) : null, this, a);
  };
  e.P = function() {
    return this.s;
  };
  e.H = function() {
    return this.o;
  };
  e.nc = function() {
    return 0 < this.o ? this.ca(null, this.o - 1) : null;
  };
  e.oc = function() {
    if (0 === this.o) throw Error("Can't pop empty vector");
    if (1 === this.o) return Ta(nc, this.s);
    if (1 < this.o - Cd(this)) return new Ld(this.s, this.o - 1, this.shift, this.root, this.ia.slice(0, -1), null);
    var a = Fd(this, this.o - 2), b = Jl(this, this.shift, this.root);
    b = null == b ? Sd : b;
    var c = this.o - 1;
    return 5 < this.shift && null == b.i[1] ? new Ld(this.s, c, this.shift - 5, b.i[0], a, null) : new Ld(this.s, c, this.shift, b, a, null);
  };
  e.tb = function() {
    return 0 < this.o ? new gc(this, this.o - 1, null) : null;
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    if (b instanceof Ld) if (this.o === T(b)) for (a = this.na(null), b = b.na(null); ; ) if (a.fa()) {
      var c = a.next(), d = b.next();
      if (!Q.h(c, d)) return false;
    } else return true;
    else return false;
    else return hc(this, b);
  };
  e.Za = function() {
    return new Nd(this.o, this.shift, Od.g ? Od.g(this.root) : Od.call(null, this.root), Pd.g ? Pd.g(this.ia) : Pd.call(null, this.ia));
  };
  e.V = function() {
    return Ta(nc, this.s);
  };
  e.Z = function(a, b) {
    return Jd(this, b, 0, this.o);
  };
  e.kc = function(a, b, c) {
    a = 0;
    for (var d = c; ; ) if (a < this.o) {
      var f = Fd(this, a);
      c = f.length;
      a: for (var g = 0; ; ) if (g < c) {
        var h = f[g];
        d = b.h ? b.h(d, h) : b.call(null, d, h);
        if (Wb(d)) {
          f = d;
          break a;
        }
        g += 1;
      } else {
        f = d;
        break a;
      }
      if (Wb(f)) return Qa(f);
      a += c;
      d = f;
    } else return d;
  };
  e.ya = function(a, b, c) {
    if ("number" === typeof b) return this.zb(b, c);
    throw Error("Vector's key for assoc must be a number.");
  };
  e.Ya = function(a, b) {
    return Hc(b) ? 0 <= b && b < this.o : false;
  };
  e.I = function() {
    if (0 === this.o) return null;
    if (32 >= this.o) return new K(this.ia, 0, null);
    a: {
      var a = this.root;
      for (var b = this.shift; ; ) if (0 < b) b -= 5, a = a.i[0];
      else {
        a = a.i;
        break a;
      }
    }
    return Qd ? Qd(this, a, 0, 0) : Rd.call(null, this, a, 0, 0);
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Ld(b, this.o, this.shift, this.root, this.ia, this.v);
  };
  e.U = function(a, b) {
    if (32 > this.o - Cd(this)) {
      a = this.ia.length;
      for (var c = Array(a + 1), d = 0; ; ) if (d < a) c[d] = this.ia[d], d += 1;
      else break;
      c[a] = b;
      return new Ld(this.s, this.o + 1, this.shift, this.root, c, null);
    }
    a = (c = this.o >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
    c ? (c = Bd(null), c.i[0] = this.root, d = Dd(null, this.shift, new Ad(null, this.ia)), c.i[1] = d) : c = Ed(this, this.shift, this.root, new Ad(null, this.ia));
    return new Ld(this.s, this.o + 1, a, c, [b], null);
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    if ("number" === typeof a) return this.ca(null, a);
    throw Error("Key must be integer");
  };
  var Sd = new Ad(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
  var nc = new Ld(null, 0, 5, Sd, [], Sb);
  Ld.prototype[ra] = function() {
    return R(this);
  };
  e = Xd.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    if (this.ba + 1 < this.node.length) {
      var a = this.ma;
      var b = this.node, c = this.m, d = this.ba + 1;
      a = Qd ? Qd(a, b, c, d) : Rd.call(null, a, b, c, d);
      return null == a ? null : a;
    }
    return this.rb();
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return Jd(this.ma, b, this.m + this.ba, T(this.ma));
  };
  e.kc = function(a, b, c) {
    return Kd(this.ma, b, c, this.m + this.ba, T(this.ma));
  };
  e.Y = function() {
    return this.node[this.ba];
  };
  e.da = function() {
    if (this.ba + 1 < this.node.length) {
      var a = this.ma;
      var b = this.node, c = this.m, d = this.ba + 1;
      a = Qd ? Qd(a, b, c, d) : Rd.call(null, a, b, c, d);
      return null == a ? N : a;
    }
    return this.za(null);
  };
  e.I = function() {
    return this;
  };
  e.eb = function() {
    var a = this.node;
    return new ad(a, this.ba, a.length);
  };
  e.za = function() {
    var a = this.m + this.node.length;
    if (a < wa(this.ma)) {
      var b = this.ma, c = Fd(this.ma, a);
      return Qd ? Qd(b, c, a, 0) : Rd.call(null, b, c, a, 0);
    }
    return N;
  };
  e.R = function(a, b) {
    return b === this.s ? this : Yd ? Yd(this.ma, this.node, this.m, this.ba, b) : Rd.call(null, this.ma, this.node, this.m, this.ba, b);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  e.rb = function() {
    var a = this.m + this.node.length;
    if (a < wa(this.ma)) {
      var b = this.ma, c = Fd(this.ma, a);
      return Qd ? Qd(b, c, a, 0) : Rd.call(null, b, c, a, 0);
    }
    return null;
  };
  Xd.prototype[ra] = function() {
    return R(this);
  };
  var $d = function $d2(a, b, c, d) {
    c = Zd(a.root.D, c);
    var g = a.o - 1 >>> b & 31;
    if (5 === b) a = d;
    else {
      var h = c.i[g];
      null != h ? (b -= 5, a = $d2.ja ? $d2.ja(a, b, h, d) : $d2.call(null, a, b, h, d)) : a = Dd(a.root.D, b - 5, d);
    }
    c.i[g] = a;
    return c;
  };
  e = Nd.prototype;
  e.ab = function(a, b) {
    if (this.root.D) {
      if (32 > this.o - Cd(this)) this.ia[this.o & 31] = b;
      else {
        a = new Ad(this.root.D, this.ia);
        var c = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        c[0] = b;
        this.ia = c;
        this.o >>> 5 > 1 << this.shift ? (b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], c = this.shift + 5, b[0] = this.root, b[1] = Dd(this.root.D, this.shift, a), this.root = new Ad(this.root.D, b), this.shift = c) : this.root = $d(this, this.shift, this.root, a);
      }
      this.o += 1;
      return this;
    }
    throw Error("conj! after persistent!");
  };
  e.ib = function() {
    if (this.root.D) {
      this.root.D = null;
      var a = this.o - Cd(this), b = Array(a);
      Dc(this.ia, 0, b, 0, a);
      return new Ld(null, this.o, this.shift, this.root, b, null);
    }
    throw Error("persistent! called twice");
  };
  e.$a = function(a, b, c) {
    if ("number" === typeof b) return ae(this, b, c);
    throw Error("TransientVector's key for assoc! must be a number.");
  };
  e.H = function() {
    if (this.root.D) return this.o;
    throw Error("count after persistent!");
  };
  e.ca = function(a, b) {
    if (this.root.D) return Gd(this, b)[b & 31];
    throw Error("nth after persistent!");
  };
  e.la = function(a, b, c) {
    return 0 <= b && b < this.o ? this.ca(null, b) : c;
  };
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    if (this.root.D) return "number" === typeof b ? this.la(null, b, c) : c;
    throw Error("lookup after persistent!");
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.ka(null, a);
  };
  e.h = function(a, b) {
    return this.G(null, a, b);
  };
  be.prototype.K = function() {
    return false;
  };
  var ce = new be();
  ee.prototype.next = function() {
    if (null != this.B) {
      var a = M(this.B), b = X(a, 0, null);
      a = X(a, 1, null);
      this.B = O(this.B);
      return { value: [b, a], done: false };
    }
    return { value: null, done: true };
  };
  fe.prototype.next = function() {
    if (null != this.B) {
      var a = M(this.B);
      this.B = O(this.B);
      return { value: [a, a], done: false };
    }
    return { value: null, done: true };
  };
  e = Md.prototype;
  e.fb = function(a, b) {
    switch (b) {
      case 0:
        return new Md(0, this.key);
      case 1:
        return new Md(1, this.J);
      default:
        return null;
    }
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.ka = function(a, b) {
    return this.la(null, b, null);
  };
  e.G = function(a, b, c) {
    return this.la(null, b, c);
  };
  e.ca = function(a, b) {
    if (0 === b) return this.key;
    if (1 === b) return this.J;
    throw Error("Index out of bounds");
  };
  e.la = function(a, b, c) {
    return 0 === b ? this.key : 1 === b ? this.J : c;
  };
  e.zb = function(a, b) {
    return new Ld(null, 2, 5, Sd, [this.key, this.J], null).zb(a, b);
  };
  e.P = function() {
    return null;
  };
  e.H = function() {
    return 2;
  };
  e.Ob = function() {
    return this.key;
  };
  e.Pb = function() {
    return this.J;
  };
  e.nc = function() {
    return this.J;
  };
  e.oc = function() {
    return new Ld(null, 1, 5, Sd, [this.key], null);
  };
  e.tb = function() {
    return new K([this.J, this.key], 0, null);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return null;
  };
  e.Z = function(a, b) {
    return Yb(this, b);
  };
  e.kc = function(a, b, c) {
    a: {
      a = this.H(null);
      var d = c;
      for (c = 0; ; ) if (c < a) {
        var f = this.ca(null, c);
        d = b.h ? b.h(d, f) : b.call(null, d, f);
        if (Wb(d)) {
          b = Qa(d);
          break a;
        }
        c += 1;
      } else {
        b = d;
        break a;
      }
    }
    return b;
  };
  e.ya = function(a, b, c) {
    return qc.l(new Ld(null, 2, 5, Sd, [this.key, this.J], null), b, c);
  };
  e.Ya = function(a, b) {
    return 0 === b || 1 === b;
  };
  e.I = function() {
    return new K([this.key, this.J], 0, null);
  };
  e.R = function(a, b) {
    return vc(new Ld(null, 2, 5, Sd, [this.key, this.J], null), b);
  };
  e.U = function(a, b) {
    return new Ld(null, 3, 5, Sd, [this.key, this.J, b], null);
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.ca(null, a);
  };
  e.h = function(a, b) {
    return this.la(null, a, b);
  };
  e = he.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.ta;
  };
  e.W = function() {
    return this.m < this.i.length - 2 ? new he(this.i, this.m + 2, null) : null;
  };
  e.H = function() {
    return (this.i.length - this.m) / 2;
  };
  e.O = function() {
    return Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return new Md(this.i[this.m], this.i[this.m + 1]);
  };
  e.da = function() {
    return this.m < this.i.length - 2 ? new he(this.i, this.m + 2, null) : N;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.ta ? this : new he(this.i, this.m, b);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  he.prototype[ra] = function() {
    return R(this);
  };
  ie.prototype.fa = function() {
    return this.m < this.o;
  };
  ie.prototype.next = function() {
    var a = new Md(this.i[this.m], this.i[this.m + 1]);
    this.m += 2;
    return a;
  };
  e = G.prototype;
  e.fb = function(a, b) {
    a = ge(this.i, b);
    return -1 === a ? null : new Md(this.i[a], this.i[a + 1]);
  };
  e.toString = function() {
    return tb(this);
  };
  e.keys = function() {
    return R(je.g ? je.g(this) : je.call(null, this));
  };
  e.entries = function() {
    return new ee(J(J(this)));
  };
  e.values = function() {
    return R(ke.g ? ke.g(this) : ke.call(null, this));
  };
  e.has = function(a) {
    return Ic(this, a);
  };
  e.get = function(a, b) {
    return this.G(null, a, b);
  };
  e.forEach = function(a) {
    for (var b = J(this), c = null, d = 0, f = 0; ; ) if (f < d) {
      var g = c.ca(null, f), h = X(g, 0, null);
      g = X(g, 1, null);
      a.h ? a.h(g, h) : a.call(null, g, h);
      f += 1;
    } else if (b = J(b)) Cc(b) ? (c = ob(b), b = pb(b), h = c, d = T(c), c = h) : (c = M(b), h = X(c, 0, null), g = X(c, 1, null), a.h ? a.h(g, h) : a.call(null, g, h), b = O(b), c = null, d = 0), f = 0;
    else return null;
  };
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    a = ge(this.i, b);
    return -1 === a ? c : this.i[a + 1];
  };
  e.sb = function(a, b, c) {
    a = this.i.length;
    for (var d = 0; ; ) if (d < a) {
      var f = this.i[d], g = this.i[d + 1];
      c = b.l ? b.l(c, f, g) : b.call(null, c, f, g);
      if (Wb(c)) return Qa(c);
      d += 2;
    } else return c;
  };
  e.na = function() {
    return new ie(this.i, 2 * this.o);
  };
  e.P = function() {
    return this.s;
  };
  e.H = function() {
    return this.o;
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Tb(this);
  };
  e.K = function(a, b) {
    if (zc(b) && !Ac(b)) if (a = this.i.length, this.o === b.H(null)) for (var c = 0; ; ) if (c < a) {
      var d = b.G(null, this.i[c], Ec);
      if (d !== Ec) if (Q.h(this.i[c + 1], d)) c += 2;
      else return false;
      else return false;
    } else return true;
    else return false;
    else return false;
  };
  e.Za = function() {
    return new le(this.i.length, sa(this.i));
  };
  e.V = function() {
    return Ta(qd, this.s);
  };
  e.Z = function(a, b) {
    return Lc(this, b);
  };
  e.kc = function(a, b, c) {
    return Mc(this, b, c);
  };
  e.rc = function(a, b) {
    if (0 <= ge(this.i, b)) {
      a = this.i.length;
      var c = a - 2;
      if (0 === c) return this.V(null);
      c = Array(c);
      for (var d = 0, f = 0; ; ) {
        if (d >= a) return new G(this.s, this.o - 1, c, null);
        Q.h(b, this.i[d]) ? d += 2 : (c[f] = this.i[d], c[f + 1] = this.i[d + 1], f += 2, d += 2);
      }
    } else return this;
  };
  e.ya = function(a, b, c) {
    a = ge(this.i, b);
    if (-1 === a) {
      if (this.o < me) {
        a = this.i;
        for (var d = a.length, f = Array(d + 2), g = 0; ; ) if (g < d) f[g] = a[g], g += 1;
        else break;
        f[d] = b;
        f[d + 1] = c;
        return new G(this.s, this.o + 1, f, null);
      }
      return Ta(Ja(xi(ne, this), b, c), this.s);
    }
    if (c === this.i[a + 1]) return this;
    b = sa(this.i);
    b[a + 1] = c;
    return new G(this.s, this.o, b, null);
  };
  e.Ya = function(a, b) {
    return -1 !== ge(this.i, b);
  };
  e.I = function() {
    var a = this.i;
    return 0 <= a.length - 2 ? new he(a, 0, null) : null;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new G(b, this.o, this.i, this.v);
  };
  e.U = function(a, b) {
    if (Bc(b)) return this.ya(null, C(b, 0), C(b, 1));
    a = this;
    for (b = J(b); ; ) {
      if (null == b) return a;
      var c = M(b);
      if (Bc(c)) a = Ja(a, C(c, 0), C(c, 1)), b = O(b);
      else throw Error("conj on a map takes map entries or seqables of map entries");
    }
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.ka(null, a);
  };
  e.h = function(a, b) {
    return this.G(null, a, b);
  };
  var qd = new G(null, 0, [], Ub);
  var me = 8;
  G.prototype[ra] = function() {
    return R(this);
  };
  e = le.prototype;
  e.H = function() {
    if (this.bb) return Qc(this.Va);
    throw Error("count after persistent!");
  };
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    if (this.bb) return a = ge(this.i, b), -1 === a ? c : this.i[a + 1];
    throw Error("lookup after persistent!");
  };
  e.ab = function(a, b) {
    if (this.bb) {
      if (Ud(b)) return this.$a(null, Vd.g ? Vd.g(b) : Vd.call(null, b), Wd.g ? Wd.g(b) : Wd.call(null, b));
      if (Bc(b)) return this.$a(null, b.g ? b.g(0) : b.call(null, 0), b.g ? b.g(1) : b.call(null, 1));
      a = J(b);
      for (b = this; ; ) {
        var c = M(a);
        if (w(c)) a = O(a), b = mb(b, Vd.g ? Vd.g(c) : Vd.call(null, c), Wd.g ? Wd.g(c) : Wd.call(null, c));
        else return b;
      }
    } else throw Error("conj! after persistent!");
  };
  e.ib = function() {
    if (this.bb) return this.bb = false, new G(null, Qc(this.Va), this.i, null);
    throw Error("persistent! called twice");
  };
  e.$a = function(a, b, c) {
    if (this.bb) {
      a = ge(this.i, b);
      if (-1 === a) {
        if (this.Va + 2 <= 2 * me) return this.Va += 2, this.i.push(b), this.i.push(c), this;
        a = se.h ? se.h(this.Va, this.i) : se.call(null, this.Va, this.i);
        return mb(a, b, c);
      }
      c !== this.i[a + 1] && (this.i[a + 1] = c);
      return this;
    }
    throw Error("assoc! after persistent!");
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.G(null, a, null);
  };
  e.h = function(a, b) {
    return this.G(null, a, b);
  };
  ye.prototype.advance = function() {
    for (var a = this.i.length; ; ) if (this.m < a) {
      var b = this.i[this.m], c = this.i[this.m + 1];
      null != b ? b = this.ob = new Md(b, c) : null != c ? (b = rb(c), b = b.fa() ? this.ra = b : false) : b = false;
      this.m += 2;
      if (b) return true;
    } else return false;
  };
  ye.prototype.fa = function() {
    var a = null != this.ob;
    return a ? a : (a = null != this.ra) ? a : this.advance();
  };
  ye.prototype.next = function() {
    if (null != this.ob) {
      var a = this.ob;
      this.ob = null;
      return a;
    }
    if (null != this.ra) return a = this.ra.next(), this.ra.fa() || (this.ra = null), a;
    if (this.advance()) return this.next();
    throw Error("No such element");
  };
  ye.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  e = ze.prototype;
  e.Ua = function(a) {
    if (a === this.D) return this;
    var b = Rc(this.T), c = Array(0 > b ? 4 : 2 * (b + 1));
    Dc(this.i, 0, c, 0, 2 * b);
    return new ze(a, this.T, c);
  };
  e.mb = function() {
    return Ae ? Ae(this.i) : Be.call(null, this.i);
  };
  e.nb = function(a, b) {
    return we(this.i, a, b);
  };
  e.Ca = function(a, b, c, d) {
    var f = 1 << (b >>> a & 31);
    if (0 === (this.T & f)) return d;
    var g = Rc(this.T & f - 1);
    f = this.i[2 * g];
    g = this.i[2 * g + 1];
    return null == f ? g.Ca(a + 5, b, c, d) : oe(c, f) ? g : d;
  };
  e.pa = function(a, b, c, d, f, g) {
    var h = 1 << (c >>> b & 31), k = Rc(this.T & h - 1);
    if (0 === (this.T & h)) {
      var l = Rc(this.T);
      if (2 * l < this.i.length) {
        a = this.Ua(a);
        b = a.i;
        g.J = true;
        c = 2 * (l - k);
        g = 2 * k + (c - 1);
        for (l = 2 * (k + 1) + (c - 1); 0 !== c; ) b[l] = b[g], --l, --c, --g;
        b[2 * k] = d;
        b[2 * k + 1] = f;
        a.T |= h;
        return a;
      }
      if (16 <= l) {
        k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        k[c >>> b & 31] = Ce.pa(a, b + 5, c, d, f, g);
        for (f = d = 0; ; ) if (32 > d) 0 === (this.T >>> d & 1) ? d += 1 : (k[d] = null != this.i[f] ? Ce.pa(a, b + 5, Hb(this.i[f]), this.i[f], this.i[f + 1], g) : this.i[f + 1], f += 2, d += 1);
        else break;
        return new De(a, l + 1, k);
      }
      b = Array(2 * (l + 4));
      Dc(this.i, 0, b, 0, 2 * k);
      b[2 * k] = d;
      b[2 * k + 1] = f;
      Dc(this.i, 2 * k, b, 2 * (k + 1), 2 * (l - k));
      g.J = true;
      a = this.Ua(a);
      a.i = b;
      a.T |= h;
      return a;
    }
    l = this.i[2 * k];
    h = this.i[2 * k + 1];
    if (null == l) return l = h.pa(a, b + 5, c, d, f, g), l === h ? this : ve(this, a, 2 * k + 1, l);
    if (oe(d, l)) return f === h ? this : ve(this, a, 2 * k + 1, f);
    g.J = true;
    g = b + 5;
    d = Ee ? Ee(a, g, l, h, c, d, f) : Fe.call(null, a, g, l, h, c, d, f);
    f = 2 * k;
    k = 2 * k + 1;
    a = this.Ua(a);
    a.i[f] = null;
    a.i[k] = d;
    return a;
  };
  e.oa = function(a, b, c, d, f) {
    var g = 1 << (b >>> a & 31), h = Rc(this.T & g - 1);
    if (0 === (this.T & g)) {
      var k = Rc(this.T);
      if (16 <= k) {
        h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        h[b >>> a & 31] = Ce.oa(a + 5, b, c, d, f);
        for (d = c = 0; ; ) if (32 > c) 0 === (this.T >>> c & 1) ? c += 1 : (h[c] = null != this.i[d] ? Ce.oa(a + 5, Hb(this.i[d]), this.i[d], this.i[d + 1], f) : this.i[d + 1], d += 2, c += 1);
        else break;
        return new De(null, k + 1, h);
      }
      a = Array(2 * (k + 1));
      Dc(
        this.i,
        0,
        a,
        0,
        2 * h
      );
      a[2 * h] = c;
      a[2 * h + 1] = d;
      Dc(this.i, 2 * h, a, 2 * (h + 1), 2 * (k - h));
      f.J = true;
      return new ze(null, this.T | g, a);
    }
    var l = this.i[2 * h];
    g = this.i[2 * h + 1];
    if (null == l) return k = g.oa(a + 5, b, c, d, f), k === g ? this : new ze(null, this.T, ue(this.i, 2 * h + 1, k));
    if (oe(c, l)) return d === g ? this : new ze(null, this.T, ue(this.i, 2 * h + 1, d));
    f.J = true;
    f = this.T;
    k = this.i;
    a += 5;
    a = Ge ? Ge(a, l, g, b, c, d) : Fe.call(null, a, l, g, b, c, d);
    c = 2 * h;
    h = 2 * h + 1;
    d = sa(k);
    d[c] = null;
    d[h] = a;
    return new ze(null, f, d);
  };
  e.lb = function(a, b, c, d) {
    var f = 1 << (b >>> a & 31);
    if (0 === (this.T & f)) return d;
    var g = Rc(this.T & f - 1);
    f = this.i[2 * g];
    g = this.i[2 * g + 1];
    return null == f ? g.lb(a + 5, b, c, d) : oe(c, f) ? new Md(f, g) : d;
  };
  e.pc = function(a, b, c) {
    var d = 1 << (b >>> a & 31);
    if (0 === (this.T & d)) return this;
    var f = Rc(this.T & d - 1), g = this.i[2 * f], h = this.i[2 * f + 1];
    return null == g ? (a = h.pc(a + 5, b, c), a === h ? this : null != a ? new ze(null, this.T, ue(this.i, 2 * f + 1, a)) : this.T === d ? null : new ze(null, this.T ^ d, Zg(this.i, f))) : oe(c, g) ? this.T === d ? null : new ze(null, this.T ^ d, Zg(this.i, f)) : this;
  };
  e.na = function() {
    return new ye(this.i);
  };
  var Ce = new ze(null, 0, []);
  He.prototype.fa = function() {
    for (var a = this.i.length; ; ) {
      if (null != this.ra && this.ra.fa()) return true;
      if (this.m < a) {
        var b = this.i[this.m];
        this.m += 1;
        null != b && (this.ra = rb(b));
      } else return false;
    }
  };
  He.prototype.next = function() {
    if (this.fa()) return this.ra.next();
    throw Error("No such element");
  };
  He.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  e = De.prototype;
  e.Ua = function(a) {
    return a === this.D ? this : new De(a, this.o, sa(this.i));
  };
  e.mb = function() {
    return Ie ? Ie(this.i) : Je.call(null, this.i);
  };
  e.nb = function(a, b) {
    for (var c = this.i.length, d = 0; ; ) if (d < c) {
      var f = this.i[d];
      if (null != f) {
        b = f.nb(a, b);
        if (Wb(b)) return b;
        d += 1;
      } else d += 1;
    } else return b;
  };
  e.Ca = function(a, b, c, d) {
    var f = this.i[b >>> a & 31];
    return null != f ? f.Ca(a + 5, b, c, d) : d;
  };
  e.pa = function(a, b, c, d, f, g) {
    var h = c >>> b & 31, k = this.i[h];
    if (null == k) return a = ve(this, a, h, Ce.pa(a, b + 5, c, d, f, g)), a.o += 1, a;
    b = k.pa(a, b + 5, c, d, f, g);
    return b === k ? this : ve(this, a, h, b);
  };
  e.oa = function(a, b, c, d, f) {
    var g = b >>> a & 31, h = this.i[g];
    if (null == h) return new De(null, this.o + 1, ue(this.i, g, Ce.oa(a + 5, b, c, d, f)));
    a = h.oa(a + 5, b, c, d, f);
    return a === h ? this : new De(null, this.o, ue(this.i, g, a));
  };
  e.lb = function(a, b, c, d) {
    var f = this.i[b >>> a & 31];
    return null != f ? f.lb(a + 5, b, c, d) : d;
  };
  e.pc = function(a, b, c) {
    var d = b >>> a & 31, f = this.i[d];
    if (null != f) {
      a = f.pc(a + 5, b, c);
      if (a === f) d = this;
      else if (null == a) if (8 >= this.o) a: {
        f = this.i;
        a = f.length;
        b = Array(2 * (this.o - 1));
        c = 0;
        for (var g = 1, h = 0; ; ) if (c < a) c !== d && null != f[c] ? (b[g] = f[c], g += 2, h |= 1 << c, c += 1) : c += 1;
        else {
          d = new ze(null, h, b);
          break a;
        }
      }
      else d = new De(null, this.o - 1, ue(this.i, d, a));
      else d = new De(null, this.o, ue(this.i, d, a));
      return d;
    }
    return this;
  };
  e.na = function() {
    return new He(this.i);
  };
  e = Le.prototype;
  e.Ua = function(a) {
    if (a === this.D) return this;
    var b = Array(2 * (this.o + 1));
    Dc(this.i, 0, b, 0, 2 * this.o);
    return new Le(a, this.Aa, this.o, b);
  };
  e.mb = function() {
    return Ae ? Ae(this.i) : Be.call(null, this.i);
  };
  e.nb = function(a, b) {
    return we(this.i, a, b);
  };
  e.Ca = function(a, b, c, d) {
    a = Ke(this.i, this.o, c);
    return 0 > a ? d : oe(c, this.i[a]) ? this.i[a + 1] : d;
  };
  e.pa = function(a, b, c, d, f, g) {
    if (c === this.Aa) {
      b = Ke(this.i, this.o, d);
      if (-1 === b) {
        if (this.i.length > 2 * this.o) return b = 2 * this.o, c = 2 * this.o + 1, a = this.Ua(a), a.i[b] = d, a.i[c] = f, g.J = true, a.o += 1, a;
        c = this.i.length;
        b = Array(c + 2);
        Dc(this.i, 0, b, 0, c);
        b[c] = d;
        b[c + 1] = f;
        g.J = true;
        d = this.o + 1;
        a === this.D ? (this.i = b, this.o = d, a = this) : a = new Le(this.D, this.Aa, d, b);
        return a;
      }
      return this.i[b + 1] === f ? this : ve(this, a, b + 1, f);
    }
    return new ze(a, 1 << (this.Aa >>> b & 31), [null, this, null, null]).pa(a, b, c, d, f, g);
  };
  e.oa = function(a, b, c, d, f) {
    return b === this.Aa ? (a = Ke(this.i, this.o, c), -1 === a ? (a = 2 * this.o, b = Array(a + 2), Dc(this.i, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.J = true, new Le(null, this.Aa, this.o + 1, b)) : Q.h(this.i[a + 1], d) ? this : new Le(null, this.Aa, this.o, ue(this.i, a + 1, d))) : new ze(null, 1 << (this.Aa >>> a & 31), [null, this]).oa(a, b, c, d, f);
  };
  e.lb = function(a, b, c, d) {
    a = Ke(this.i, this.o, c);
    return 0 > a ? d : oe(c, this.i[a]) ? new Md(this.i[a], this.i[a + 1]) : d;
  };
  e.pc = function(a, b, c) {
    a = Ke(this.i, this.o, c);
    return -1 === a ? this : 1 === this.o ? null : new Le(null, this.Aa, this.o - 1, Zg(this.i, Qc(a)));
  };
  e.na = function() {
    return new ye(this.i);
  };
  e = Me.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    if (null == this.B) {
      var a = this.sa, b = this.m + 2;
      return Ne ? Ne(a, b, null) : Be.call(null, a, b, null);
    }
    a = this.sa;
    b = this.m;
    var c = O(this.B);
    return Ne ? Ne(a, b, c) : Be.call(null, a, b, c);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return null == this.B ? new Md(this.sa[this.m], this.sa[this.m + 1]) : M(this.B);
  };
  e.da = function() {
    var a = this, b = null == a.B ? function() {
      var c = a.sa, d = a.m + 2;
      return Ne ? Ne(c, d, null) : Be.call(null, c, d, null);
    }() : function() {
      var c = a.sa, d = a.m, f = O(a.B);
      return Ne ? Ne(c, d, f) : Be.call(null, c, d, f);
    }();
    return null != b ? b : N;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Me(b, this.sa, this.m, this.B, this.v);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  Me.prototype[ra] = function() {
    return R(this);
  };
  e = Oe.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    var a = this.sa, b = this.m, c = O(this.B);
    return Pe ? Pe(a, b, c) : Je.call(null, a, b, c);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return M(this.B);
  };
  e.da = function() {
    var a = this.sa;
    var b = this.m, c = O(this.B);
    a = Pe ? Pe(a, b, c) : Je.call(null, a, b, c);
    return null != a ? a : N;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Oe(b, this.sa, this.m, this.B, this.v);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  Oe.prototype[ra] = function() {
    return R(this);
  };
  Qe.prototype.fa = function() {
    return !this.Ab || this.Fb.fa();
  };
  Qe.prototype.next = function() {
    if (this.Ab) return this.Fb.next();
    this.Ab = true;
    return new Md(null, this.ga);
  };
  Qe.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  e = Re.prototype;
  e.fb = function(a, b) {
    return null == b ? this.ha ? new Md(null, this.ga) : null : null == this.root ? null : this.root.lb(0, Hb(b), b, null);
  };
  e.toString = function() {
    return tb(this);
  };
  e.keys = function() {
    return R(je.g ? je.g(this) : je.call(null, this));
  };
  e.entries = function() {
    return new ee(J(J(this)));
  };
  e.values = function() {
    return R(ke.g ? ke.g(this) : ke.call(null, this));
  };
  e.has = function(a) {
    return Ic(this, a);
  };
  e.get = function(a, b) {
    return this.G(null, a, b);
  };
  e.forEach = function(a) {
    for (var b = J(this), c = null, d = 0, f = 0; ; ) if (f < d) {
      var g = c.ca(null, f), h = X(g, 0, null);
      g = X(g, 1, null);
      a.h ? a.h(g, h) : a.call(null, g, h);
      f += 1;
    } else if (b = J(b)) Cc(b) ? (c = ob(b), b = pb(b), h = c, d = T(c), c = h) : (c = M(b), h = X(c, 0, null), g = X(c, 1, null), a.h ? a.h(g, h) : a.call(null, g, h), b = O(b), c = null, d = 0), f = 0;
    else return null;
  };
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    return null == b ? this.ha ? this.ga : c : null == this.root ? c : this.root.Ca(0, Hb(b), b, c);
  };
  e.sb = function(a, b, c) {
    a = this.ha ? b.l ? b.l(c, null, this.ga) : b.call(null, c, null, this.ga) : c;
    Wb(a) ? b = Qa(a) : null != this.root ? (b = this.root.nb(b, a), b = Wb(b) ? Xb.g ? Xb.g(b) : Xb.call(null, b) : b) : b = a;
    return b;
  };
  e.na = function() {
    var a = this.root ? rb(this.root) : rd();
    return this.ha ? new Qe(this.ga, a) : a;
  };
  e.P = function() {
    return this.s;
  };
  e.H = function() {
    return this.o;
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Tb(this);
  };
  e.K = function(a, b) {
    return de(this, b);
  };
  e.Za = function() {
    return new Se(this.root, this.o, this.ha, this.ga);
  };
  e.V = function() {
    return Ta(ne, this.s);
  };
  e.rc = function(a, b) {
    if (null == b) return this.ha ? new Re(this.s, this.o - 1, this.root, false, null, null) : this;
    if (null == this.root) return this;
    a = this.root.pc(0, Hb(b), b);
    return a === this.root ? this : new Re(this.s, this.o - 1, a, this.ha, this.ga, null);
  };
  e.ya = function(a, b, c) {
    if (null == b) return this.ha && c === this.ga ? this : new Re(this.s, this.ha ? this.o : this.o + 1, this.root, true, c, null);
    a = new te();
    b = (null == this.root ? Ce : this.root).oa(0, Hb(b), b, c, a);
    return b === this.root ? this : new Re(this.s, a.J ? this.o + 1 : this.o, b, this.ha, this.ga, null);
  };
  e.Ya = function(a, b) {
    return null == b ? this.ha : null == this.root ? false : this.root.Ca(0, Hb(b), b, Ec) !== Ec;
  };
  e.I = function() {
    if (0 < this.o) {
      var a = null != this.root ? this.root.mb() : null;
      return this.ha ? W(new Md(null, this.ga), a) : a;
    }
    return null;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Re(b, this.o, this.root, this.ha, this.ga, this.v);
  };
  e.U = function(a, b) {
    if (Bc(b)) return this.ya(null, C(b, 0), C(b, 1));
    a = this;
    for (b = J(b); ; ) {
      if (null == b) return a;
      var c = M(b);
      if (Bc(c)) a = Ja(a, C(c, 0), C(c, 1)), b = O(b);
      else throw Error("conj on a map takes map entries or seqables of map entries");
    }
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.ka(null, a);
  };
  e.h = function(a, b) {
    return this.G(null, a, b);
  };
  var ne = new Re(null, 0, null, false, null, Ub);
  Re.prototype[ra] = function() {
    return R(this);
  };
  e = Se.prototype;
  e.H = function() {
    if (this.D) return this.count;
    throw Error("count after persistent!");
  };
  e.ka = function(a, b) {
    return null == b ? this.ha ? this.ga : null : null == this.root ? null : this.root.Ca(0, Hb(b), b);
  };
  e.G = function(a, b, c) {
    return null == b ? this.ha ? this.ga : c : null == this.root ? c : this.root.Ca(0, Hb(b), b, c);
  };
  e.ab = function(a, b) {
    a: if (this.D) if (Ud(b)) a = Ue(this, Vd.g ? Vd.g(b) : Vd.call(null, b), Wd.g ? Wd.g(b) : Wd.call(null, b));
    else if (Bc(b)) a = Ue(this, b.g ? b.g(0) : b.call(null, 0), b.g ? b.g(1) : b.call(null, 1));
    else for (a = J(b), b = this; ; ) {
      var c = M(a);
      if (w(c)) a = O(a), b = Ue(b, Vd.g ? Vd.g(c) : Vd.call(null, c), Wd.g ? Wd.g(c) : Wd.call(null, c));
      else {
        a = b;
        break a;
      }
    }
    else throw Error("conj! after persistent");
    return a;
  };
  e.ib = function() {
    if (this.D) {
      this.D = null;
      var a = new Re(null, this.count, this.root, this.ha, this.ga, null);
    } else throw Error("persistent! called twice");
    return a;
  };
  e.$a = function(a, b, c) {
    return Ue(this, b, c);
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.ka(null, a);
  };
  e.h = function(a, b) {
    return this.G(null, a, b);
  };
  var nh = function nh2(a) {
    for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
    else break;
    return nh2.S(0 < c.length ? new K(c.slice(0), 0, null) : null);
  };
  nh.S = function(a) {
    a = a instanceof K && 0 === a.m ? a.i : ig(a);
    var b = a.length;
    if (!Hc(b)) throw Error(["Argument must be an integer: ", B.g(b)].join(""));
    if (0 !== (b & 1)) throw Error(["No value supplied for key: ", B.g(vg(a))].join(""));
    return rc(a);
  };
  nh.aa = 0;
  nh.ea = function(a) {
    return this.S(J(a));
  };
  e = Ve.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.ta;
  };
  e.W = function() {
    var a = (null != this.C ? this.C.j & 128 || v === this.C.gb || (this.C.j ? 0 : x(Da, this.C)) : x(Da, this.C)) ? this.C.W() : O(this.C);
    return null == a ? null : new Ve(a, null);
  };
  e.O = function() {
    return Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return this.C.Y(null).key;
  };
  e.da = function() {
    var a = (null != this.C ? this.C.j & 128 || v === this.C.gb || (this.C.j ? 0 : x(Da, this.C)) : x(Da, this.C)) ? this.C.W() : O(this.C);
    return null != a ? new Ve(a, null) : N;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.ta ? this : new Ve(this.C, b);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  Ve.prototype[ra] = function() {
    return R(this);
  };
  e = We.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.P = function() {
    return this.ta;
  };
  e.W = function() {
    var a = (null != this.C ? this.C.j & 128 || v === this.C.gb || (this.C.j ? 0 : x(Da, this.C)) : x(Da, this.C)) ? this.C.W() : O(this.C);
    return null == a ? null : new We(a, null);
  };
  e.O = function() {
    return Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    return lc(b, c, this);
  };
  e.Y = function() {
    return this.C.Y(null).J;
  };
  e.da = function() {
    var a = (null != this.C ? this.C.j & 128 || v === this.C.gb || (this.C.j ? 0 : x(Da, this.C)) : x(Da, this.C)) ? this.C.W() : O(this.C);
    return null != a ? new We(a, null) : N;
  };
  e.I = function() {
    return this;
  };
  e.R = function(a, b) {
    return b === this.ta ? this : new We(this.C, b);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  We.prototype[ra] = function() {
    return R(this);
  };
  var bi = function bi2(a) {
    for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
    else break;
    return bi2.S(0 < c.length ? new K(c.slice(0), 0, null) : null);
  };
  bi.S = function(a) {
    return w(Ng(Oc, a)) ? Gg(function(b, c) {
      return mc.h(w(b) ? b : qd, c);
    }, a) : null;
  };
  bi.aa = 0;
  bi.ea = function(a) {
    return this.S(J(a));
  };
  Xe.prototype.fa = function() {
    return this.cb.fa();
  };
  Xe.prototype.next = function() {
    if (this.cb.fa()) return this.cb.next().key;
    throw Error("No such element");
  };
  Xe.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  e = Ye.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.keys = function() {
    return R(J(this));
  };
  e.entries = function() {
    return new fe(J(J(this)));
  };
  e.values = function() {
    return R(J(this));
  };
  e.has = function(a) {
    return Ic(this, a);
  };
  e.forEach = function(a) {
    for (var b = J(this), c = null, d = 0, f = 0; ; ) if (f < d) {
      var g = c.ca(null, f), h = X(g, 0, null);
      g = X(g, 1, null);
      a.h ? a.h(g, h) : a.call(null, g, h);
      f += 1;
    } else if (b = J(b)) Cc(b) ? (c = ob(b), b = pb(b), h = c, d = T(c), c = h) : (c = M(b), h = X(c, 0, null), g = X(c, 1, null), a.h ? a.h(g, h) : a.call(null, g, h), b = O(b), c = null, d = 0), f = 0;
    else return null;
  };
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    a = Ka(this.Ba, b);
    return w(a) ? Ma(a) : c;
  };
  e.na = function() {
    return new Xe(rb(this.Ba));
  };
  e.P = function() {
    return this.s;
  };
  e.H = function() {
    return wa(this.Ba);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Tb(this);
  };
  e.K = function(a, b) {
    if (a = xc(b)) if (a = T(this) === T(b)) try {
      return Nc(function(c, d) {
        return (c = Ic(b, d)) ? c : new Vb(false);
      }, this.Ba);
    } catch (c) {
      if (c instanceof Error) return false;
      throw c;
    }
    else return a;
    else return a;
  };
  e.Za = function() {
    return new Ze(jb(this.Ba));
  };
  e.V = function() {
    return Ta($e, this.s);
  };
  e.I = function() {
    return je(this.Ba);
  };
  e.R = function(a, b) {
    return b === this.s ? this : new Ye(b, this.Ba, this.v);
  };
  e.U = function(a, b) {
    return new Ye(this.s, qc.l(this.Ba, b, null), null);
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return this.ka(null, a);
  };
  e.h = function(a, b) {
    return this.G(null, a, b);
  };
  var $e = new Ye(null, qd, Ub);
  Ye.prototype[ra] = function() {
    return R(this);
  };
  e = Ze.prototype;
  e.ab = function(a, b) {
    this.Wa = mb(this.Wa, b, null);
    return this;
  };
  e.ib = function() {
    return new Ye(null, lb(this.Wa), null);
  };
  e.H = function() {
    return T(this.Wa);
  };
  e.ka = function(a, b) {
    return this.G(null, b, null);
  };
  e.G = function(a, b, c) {
    return Fa(this.Wa, b, Ec) === Ec ? c : b;
  };
  e.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length - 1)].join(""));
    }
  };
  e.apply = function(a, b) {
    return this.call.apply(this, [this].concat(sa(b)));
  };
  e.g = function(a) {
    return Fa(this.Wa, a, Ec) === Ec ? null : a;
  };
  e.h = function(a, b) {
    return Fa(this.Wa, a, Ec) === Ec ? b : a;
  };
  e = ff.prototype;
  e.H = function() {
    return this.count;
  };
  e.Y = function() {
    return this.start;
  };
  e.ca = function(a, b) {
    return this.start + b * this.step;
  };
  e.la = function(a, b, c) {
    return 0 <= b && b < this.count ? this.start + b * this.step : c;
  };
  e.yb = function() {
    if (1 >= this.count) throw Error("-drop-first of empty chunk");
    return new ff(this.start + this.step, this.step, this.count - 1);
  };
  gf.prototype.fa = function() {
    return 0 < this.step ? this.m < this.end : this.m > this.end;
  };
  gf.prototype.next = function() {
    var a = this.m;
    this.m += this.step;
    return a;
  };
  e = df.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.kb = function() {
    if (null == this.N) {
      var a = this.H(null);
      32 < a ? (this.ua = new df(null, this.start + 32 * this.step, this.end, this.step, null, null, null), this.N = new ff(this.start, this.step, 32)) : this.N = new ff(this.start, this.step, a);
    }
  };
  e.ca = function(a, b) {
    if (0 <= b && b < this.H(null)) return this.start + b * this.step;
    if (0 <= b && this.start > this.end && 0 === this.step) return this.start;
    throw Error("Index out of bounds");
  };
  e.la = function(a, b, c) {
    return 0 <= b && b < this.H(null) ? this.start + b * this.step : 0 <= b && this.start > this.end && 0 === this.step ? this.start : c;
  };
  e.na = function() {
    return new gf(this.start, this.end, this.step);
  };
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return 0 < this.step ? this.start + this.step < this.end ? new df(null, this.start + this.step, this.end, this.step, null, null, null) : null : this.start + this.step > this.end ? new df(null, this.start + this.step, this.end, this.step, null, null, null) : null;
  };
  e.H = function() {
    return Math.ceil((this.end - this.start) / this.step);
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return Yb(this, b);
  };
  e.kc = function(a, b, c) {
    for (a = this.start; ; ) if (0 < this.step ? a < this.end : a > this.end) {
      c = b.h ? b.h(c, a) : b.call(null, c, a);
      if (Wb(c)) return Qa(c);
      a += this.step;
    } else return c;
  };
  e.Y = function() {
    return this.start;
  };
  e.da = function() {
    var a = this.W();
    return null == a ? N : a;
  };
  e.I = function() {
    return this;
  };
  e.eb = function() {
    this.kb();
    return this.N;
  };
  e.za = function() {
    this.kb();
    return null == this.ua ? N : this.ua;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new df(b, this.start, this.end, this.step, this.N, this.ua, this.v);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  e.rb = function() {
    return J(this.za(null));
  };
  df.prototype[ra] = function() {
    return R(this);
  };
  e = ef.prototype;
  e.toString = function() {
    return tb(this);
  };
  e.indexOf = function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return S(this, b, 0);
        case 2:
          return S(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return S(this, b, 0);
    };
    a.h = function(b, c) {
      return S(this, b, c);
    };
    return a;
  }();
  e.lastIndexOf = function() {
    function a(c) {
      return U(this, c, T(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return U(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return U(this, c, d);
    };
    return b;
  }();
  e.kb = function() {
    if (null == this.N) {
      var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      a: {
        var b = 0;
        for (var c = this.start; ; ) if (32 > b) {
          if (a[b] = c, b += 1, c += this.step, !(0 < this.step ? c < this.end : c > this.end)) {
            b = this.N = new ad(a, 0, b);
            break a;
          }
        } else {
          b = c;
          break a;
        }
      }
      null == this.N && (this.N = new ad(a, 0, 32), (0 < this.step ? b < this.end : b > this.end) && (this.ua = new ef(null, b, this.end, this.step, null, null, null)));
    }
  };
  e.na = function() {
    return new gf(this.start, this.end, this.step);
  };
  e.P = function() {
    return this.s;
  };
  e.W = function() {
    return 0 < this.step ? this.start + this.step < this.end ? new ef(null, this.start + this.step, this.end, this.step, null, null, null) : null : this.start + this.step > this.end ? new ef(null, this.start + this.step, this.end, this.step, null, null, null) : null;
  };
  e.O = function() {
    var a = this.v;
    return null != a ? a : this.v = a = Rb(this);
  };
  e.K = function(a, b) {
    return hc(this, b);
  };
  e.V = function() {
    return N;
  };
  e.Z = function(a, b) {
    return jc(b, this);
  };
  e.kc = function(a, b, c) {
    for (a = this.start; ; ) if (0 < this.step ? a < this.end : a > this.end) {
      c = b.h ? b.h(c, a) : b.call(null, c, a);
      if (Wb(c)) return Qa(c);
      a += this.step;
    } else return c;
  };
  e.Y = function() {
    return this.start;
  };
  e.da = function() {
    var a = this.W();
    return null == a ? N : a;
  };
  e.I = function() {
    return this;
  };
  e.eb = function() {
    this.kb();
    return this.N;
  };
  e.za = function() {
    this.kb();
    return null == this.ua ? N : this.ua;
  };
  e.R = function(a, b) {
    return b === this.s ? this : new ef(b, this.start, this.end, this.step, this.N, this.ua, this.v);
  };
  e.U = function(a, b) {
    return W(b, this);
  };
  e.rb = function() {
    return J(this.za(null));
  };
  ef.prototype[ra] = function() {
    return R(this);
  };
  var lf = { '"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
  K.prototype.X = v;
  K.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Yc.prototype.X = v;
  Yc.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Md.prototype.X = v;
  Md.prototype.M = function(a, b, c) {
    return hf(b, Z, "[", " ", "]", c, this);
  };
  Me.prototype.X = v;
  Me.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  he.prototype.X = v;
  he.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Qb.prototype.X = v;
  Qb.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Xd.prototype.X = v;
  Xd.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Uc.prototype.X = v;
  Uc.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  gc.prototype.X = v;
  gc.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  df.prototype.X = v;
  df.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Re.prototype.X = v;
  Re.prototype.M = function(a, b, c) {
    return pf(this, Z, b, c);
  };
  Oe.prototype.X = v;
  Oe.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Ye.prototype.X = v;
  Ye.prototype.M = function(a, b, c) {
    return hf(b, Z, "#{", " ", "}", c, this);
  };
  bd.prototype.X = v;
  bd.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Sg.prototype.X = v;
  Sg.prototype.M = function(a, b, c) {
    F(b, "#object[cljs.core.Atom ");
    Z(new G(null, 1, [Kl, this.state], null), b, c);
    return F(b, "]");
  };
  We.prototype.X = v;
  We.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Ld.prototype.X = v;
  Ld.prototype.M = function(a, b, c) {
    return hf(b, Z, "[", " ", "]", c, this);
  };
  Sc.prototype.X = v;
  Sc.prototype.M = function(a, b) {
    return F(b, "()");
  };
  G.prototype.X = v;
  G.prototype.M = function(a, b, c) {
    return pf(this, Z, b, c);
  };
  ef.prototype.X = v;
  ef.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Ve.prototype.X = v;
  Ve.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  oc.prototype.X = v;
  oc.prototype.M = function(a, b, c) {
    return hf(b, Z, "(", " ", ")", c, this);
  };
  Jb.prototype.mc = v;
  Jb.prototype.lc = function(a, b) {
    if (b instanceof Jb) return ug(this, b);
    throw Error(["Cannot compare ", B.g(this), " to ", B.g(b)].join(""));
  };
  H.prototype.mc = v;
  H.prototype.lc = function(a, b) {
    if (b instanceof H) return Hg(this, b);
    throw Error(["Cannot compare ", B.g(this), " to ", B.g(b)].join(""));
  };
  Ld.prototype.mc = v;
  Ld.prototype.lc = function(a, b) {
    if (Bc(b)) return Ag(this, b);
    throw Error(["Cannot compare ", B.g(this), " to ", B.g(b)].join(""));
  };
  Md.prototype.mc = v;
  Md.prototype.lc = function(a, b) {
    if (Bc(b)) return Ag(this, b);
    throw Error(["Cannot compare ", B.g(this), " to ", B.g(b)].join(""));
  };
  var wj = function wj2(a) {
    for (var c = [], d = arguments.length, f = 0; ; ) if (f < d) c.push(arguments[f]), f += 1;
    else break;
    return wj2.S(arguments[0], 1 < c.length ? new K(c.slice(1), 0, null) : null);
  };
  wj.S = function(a, b) {
    b = pd(b);
    var c = Kb.l(b, Ll, Xc), d = function h(g) {
      if (null == g) return null;
      if (null != g ? v === g.uc || (g.jc ? 0 : x(fh, g)) : x(fh, g)) return gh(g);
      if (g instanceof H) return c.g ? c.g(g) : c.call(null, g);
      if (g instanceof Jb) return B.g(g);
      if (zc(g)) {
        var k = {};
        g = J(g);
        for (var l = null, m = 0, n = 0; ; ) if (n < m) {
          var p = l.ca(null, n), q = X(p, 0, null);
          p = X(p, 1, null);
          q = hh(q, d);
          p = h(p);
          k[q] = p;
          n += 1;
        } else if (g = J(g)) Cc(g) ? (m = ob(g), g = pb(g), l = m, m = T(m)) : (m = M(g), l = X(m, 0, null), m = X(m, 1, null), l = hh(l, d), m = h(m), k[l] = m, g = O(g), l = null, m = 0), n = 0;
        else break;
        return k;
      }
      if (xg(g)) {
        k = [];
        g = J(Y.h(h, g));
        l = null;
        for (n = m = 0; ; ) if (n < m) q = l.ca(null, n), k.push(q), n += 1;
        else if (g = J(g)) l = g, Cc(l) ? (g = ob(l), n = pb(l), l = g, m = T(g), g = n) : (g = M(l), k.push(g), g = O(l), l = null, m = 0), n = 0;
        else break;
        return k;
      }
      return g;
    };
    return d(a);
  };
  wj.aa = 1;
  wj.ea = function(a) {
    var b = M(a);
    a = O(a);
    return this.S(b, a);
  };
  var zl = new H(null, "show-notation", "show-notation", -1070729314);
  var Pi = new H(null, "new-html", "new-html", 1747475686);
  var Hh = new H(null, "center-left-pct", "center-left-pct", -1698591085);
  var xl = new H(null, "NotationFiles", "NotationFiles", 1523281785);
  var ci = new H(null, "angle", "angle", 1622094254);
  var zi = new H(null, "coord", "coord", -1453656639);
  var Dh = new H(null, "center-left", "center-left", 49172678);
  var Ul = new H(null, "onMousedownSquare", "onMousedownSquare", -262263630);
  var lj = new H(null, "items-container-id", "items-container-id", 1710847349);
  var Kl = new H(null, "val", "val", 128701612);
  var og = new H(null, "on-change", "on-change", -732046149);
  var Vh = new H(null, "size", "size", 1098693007);
  var ii = new H(null, "start-x", "start-x", -193941684);
  var ji = new H(null, "start-y", "start-y", -771244577);
  var vf = new H(null, "rank-idx", "rank-idx", 1726637510);
  var wf = new H(null, "valid-fn", "valid-fn", -1326082256);
  var $i = new H(null, "remove-el", "remove-el", 1434219205);
  var Fh = new H(null, "left", "left", -399115937);
  var Wi = new H(null, "capture?", "capture?", -741966441);
  var wb = new H(null, "meta", "meta", 1499536964);
  var Zi = new H(
    null,
    "square->piece-id",
    "square->piece-id",
    -1820965360
  );
  var Gh = new H(null, "top", "top", -1856271961);
  var Jk = new H(null, "dragging-starting-square", "dragging-starting-square", -13619411);
  var Ml = new H(null, "right", "right", -452581833);
  var xf = new H(null, "mouseDraggable", "mouseDraggable", 2079819797);
  var qj = new H(null, "from", "from", 1815293044);
  var xk = new H(null, "data", "data", -232669377);
  var zk = new H(null, "html", "html", -998796897);
  var Oi = new H(null, "animate-speed-ms", "animate-speed-ms", -110361176);
  var Ik = new H(
    null,
    "dragging-el",
    "dragging-el",
    -211205166
  );
  var Yi = new H(null, "source", "source", -433931539);
  var Ij = new H(null, "items", "items", 1031954938);
  var Mj = new H(null, "animate", "animate", 1850194573);
  var Gk = new H(null, "dragging-piece-id", "dragging-piece-id", 1842910239);
  var Qi = new H(null, "defer-fn", "defer-fn", 2016113287);
  var ai = new H(null, "start", "start", -355208981);
  var wl = new H(null, "num-cols", "num-cols", -911042386);
  var Vl = new H(null, "onMouseupSquare", "onMouseupSquare", -1366293260);
  var bj = new H(null, "capture-piece-id", "capture-piece-id", 789635268);
  var Mi = new H(
    null,
    "instant?",
    "instant?",
    -2019232077
  );
  var Cl = new H(null, "coords", "coords", -599429112);
  var Jh = new H(null, "left-pct", "left-pct", 1200460558);
  var wi = new H(null, "piece-square-pct", "piece-square-pct", 514902445);
  var Sh = new H(null, "color", "color", 1011675173);
  var Rl = new H(null, "square-mouse-is-currently-hovering-over", "square-mouse-is-currently-hovering-over", -326215771);
  var yl = new H(null, "NotationRanks", "NotationRanks", -1316137666);
  var yf = new H(null, "onDrop", "onDrop", 41220475);
  var qf = new H(null, "alt-impl", "alt-impl", 670969595);
  var Uh = new H(
    null,
    "opacity",
    "opacity",
    397153780
  );
  var vi = new H(null, "piece", "piece", 1396691784);
  var Li = new H(null, "duration-ms", "duration-ms", 1993555055);
  var Xj = new H(null, "root-el", "root-el", 1068654895);
  var ei = new H(null, "arrow-width", "arrow-width", 1926673833);
  var Eg = new H(null, "distance", "distance", -1671893894);
  var Hk = new H(null, "dragging?", "dragging?", -995941410);
  var ui = new H(null, "hidden?", "hidden?", 1339691380);
  var $g = new H("cljs.core", "not-found", "cljs.core/not-found", -1572889185);
  var Nl = new H(null, "show?", "show?", 1543842127);
  var Kk = new H(
    null,
    "dragging-starting-piece",
    "dragging-starting-piece",
    1374747404
  );
  var aj = new H(null, "delete-square->piece", "delete-square->piece", -1933366978);
  var Ti = new H(null, "animation-end-callbacks", "animation-end-callbacks", -1844258358);
  var Xi = new H(null, "destination", "destination", -253872483);
  var xb = new H(null, "dup", "dup", 556298533);
  var zf = new H(null, "default-val", "default-val", 1110970409);
  var Wh = new H(null, "square", "square", 812434677);
  var yb = new H(null, "print-length", "print-length", 1931866356);
  var Al = new H(null, "Squares", "Squares", 946930677);
  var ub = new H(
    null,
    "flush-on-newline",
    "flush-on-newline",
    -151457939
  );
  var Nj = new H(null, "animateSpeed", "animateSpeed", -261442538);
  var Pj = new H(null, "onComplete", "onComplete", -661010670);
  var Af = new H(null, "touchMove", "touchMove", -1767817390);
  var Uj = new H(null, "squares-container-id", "squares-container-id", 2018754960);
  var Bf = new H(null, "onDragStart", "onDragStart", -2108300997);
  var ul = new H(null, "show-notation?", "show-notation?", -192510961);
  var dj = new H(null, "fade-out-piece", "fade-out-piece", -367103352);
  var lh = new H(null, "keywordize-keys", "keywordize-keys", 1310784252);
  var ql = new H(null, "show-coords?", "show-coords?", -351670346);
  var Cf = new H(null, "touchDraggable", "touchDraggable", -2032933022);
  var Df = new H(null, "onTouchSquare", "onTouchSquare", 1002083556);
  var sj = new H(null, "to", "to", 192099007);
  var di = new H(null, "arrow-height", "arrow-height", 110204050);
  var yh = new H(null, "y", "y", -1757859776);
  var Ef = new H(null, "file-idx", "file-idx", 2008975387);
  var wh = new H(null, "x", "x", 2099068185);
  var gi = new H(null, "head-width", "head-width", -652130664);
  var Ol = new H(null, "bottom", "bottom", -1550509018);
  var Ff = new H(
    null,
    "onSnapEnd",
    "onSnapEnd",
    -1317688335
  );
  var Tj = new H(null, "container-id", "container-id", 1274665684);
  var Sl = new H(null, "onMouseenterSquare", "onMouseenterSquare", 1147925211);
  var Gf = new H(null, "onDragMove", "onDragMove", 810982990);
  var Hf = new H(null, "onChange", "onChange", -312891301);
  var If = new H(null, "position", "position", -2011731912);
  var rf = new H(null, "fallback-impl", "fallback-impl", -1501286995);
  var vl = new H(null, "num-rows", "num-rows", 406644986);
  var Ak = new H(null, "html-str", "html-str", 494765866);
  var Mk = new H(
    null,
    "square->square-ids",
    "square->square-ids",
    768519898
  );
  var Xh = new H(null, "height", "height", 1025178622);
  var Jf = new H(null, "fen-code", "fen-code", -498385731);
  var Kf = new H(null, "orientation", "orientation", 623557579);
  var vb = new H(null, "readably", "readably", 1129599760);
  var Ll = new H(null, "keyword-fn", "keyword-fn", -64566675);
  var Ni = new H(null, "on-finish", "on-finish", 743031869);
  var Rh = new H(null, "board-width", "board-width", -1036611769);
  var Th = new H(null, "id", "id", -1388402092);
  var Eh = new H(null, "center-top", "center-top", 1455140316);
  var Yh = new H(null, "width", "width", -384071477);
  var Vj = new H(
    null,
    "board-height",
    "board-height",
    -2028928684
  );
  var Lf = new H(null, "draggable", "draggable", 1676206163);
  var $h = new H(null, "end", "end", -268185958);
  var wk = new H(null, "className", "className", -1983287057);
  var Mf = new H(null, "dropOffBoard", "dropOffBoard", 673565619);
  var hi = new H(null, "line-width", "line-width", -906934988);
  var ti = new H(null, "_color", "_color", -343016222);
  var Ui = new H(null, "new-square->piece", "new-square->piece", -2093972477);
  var Tl = new H(null, "onMouseleaveSquare", "onMouseleaveSquare", 1699519615);
  var Ih = new H(
    null,
    "center-top-pct",
    "center-top-pct",
    978561977
  );
  var Kh = new H(null, "top-pct", "top-pct", 48769222);
  var fi = new H(null, "base-offset", "base-offset", 643283679);
  var fj = new H(null, "type", "type", 1174270348);
  var jf = new H(null, "more-marker", "more-marker", -14717935);
  var qi = new H(null, "board-orientation", "board-orientation", 1715600461);
  var li = Te("bB wP wK wR bN bQ bK bR wQ wB wN bP".split(" "), '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g fill="#000" stroke-linejoin="round" stroke-width="1.5"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff" stroke-linecap="round" stroke-width="1.5"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" xmlns:v="https://vecta.io/nano"><path d="M22.5 9a4 4 0 0 0-4 4c0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38a4 4 0 0 0-4-4z" fill="#fff" stroke="#000" stroke-width="1.5"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g stroke-linecap="round" stroke-width="1.5"><path d="M22.5 11.63V6"/><path d="M20 8h5"/></g><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-width="1.5" fill="#fff"/><g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill="#fff"/><path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#fff" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g stroke-linejoin="round" stroke-width="1.5"><path d="M9 39h27v-3H9v3z"/><path d="M12 36v-4h21v4H12z"/><path d="M11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/><path d="M34 14l-3 3H14l-3-3" stroke-linecap="round"/></g><path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="1.5"/><g stroke-linecap="round"><path d="M31 29.5l1.5 2.5h-20l1.5-2.5" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter" stroke-width="1.5"/></g></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g fill="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/></g><g fill="#fff"><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75c-.414.717-.944 1.187-1.183 1.049s-.097-.832.317-1.549.944-1.187 1.183-1.049.097.832-.317 1.549z" stroke-linejoin="round" stroke-width="1.5" stroke="#fff"/><path d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16l-.51-.1z" stroke="none"/></g></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" stroke="#000" xmlns:v="https://vecta.io/nano"><g stroke-linejoin="round" stroke-width="1.5"><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" stroke-linecap="round"/><circle cx="6" cy="12" r="2"/><circle cx="14" cy="9" r="2"/><circle cx="22.5" cy="8" r="2"/><circle cx="31" cy="9" r="2"/><circle cx="39" cy="12" r="2"/><path d="M11 38.5a35 35 1 0 0 23 0" stroke-linecap="butt" fill="none"/></g><path d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g stroke-linejoin="miter" stroke-width="1.5"><path d="M22.5 11.63V6" stroke-linecap="round"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt" fill="#000"/></g><g stroke-linecap="round"><path d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill="#000" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 8h5" stroke-linejoin="miter" stroke-width="1.5"/><path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5v2.1-2.1C20 18 10.85 14 6.97 19.85 4.5 25.5 13 29.5 13 29.5m-.5.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" stroke-width="1.5" stroke-linejoin="round" stroke="#fff"/></g></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g stroke-linejoin="round" stroke-width="1.5"><path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20z"/><path d="M12 36v-4h21v4H12z"/></g><path d="M14 29.5v-13h17v13H14z" stroke-linejoin="miter" stroke-width="1.5"/><g stroke-linejoin="round"><path d="M14 16.5L11 14h23l-3 2.5H14z" stroke-width="1.5"/><path d="M11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-width="1.5"/></g><path d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" stroke-linejoin="miter" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#fff" stroke="#000" stroke-linejoin="round" stroke-width="1.5" xmlns:v="https://vecta.io/nano"><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/><circle cx="6" cy="12" r="2"/><circle cx="14" cy="9" r="2"/><circle cx="22.5" cy="8" r="2"/><circle cx="31" cy="9" r="2"/><circle cx="39" cy="12" r="2"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g fill="#fff" stroke-linejoin="round" stroke-width="1.5"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linecap="round" stroke-width="1.5"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill-rule="evenodd" stroke="#000" xmlns:v="https://vecta.io/nano"><g fill="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/></g><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75c-.414.717-.944 1.187-1.183 1.049s-.097-.832.317-1.549.944-1.187 1.183-1.049.097.832-.317 1.549z" stroke-linejoin="round" stroke-width="1.5"/></svg>;<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" xmlns:v="https://vecta.io/nano"><path d="M22.5 9a4 4 0 0 0-4 4c0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38a4 4 0 0 0-4-4z" stroke="#000" stroke-width="1.5"/></svg>'.split(";"));
  var Qf = af("rnbqkpRNBQKP".split(""));
  var Rf = Td("abcdefgh".split(""));
  var zh = new G(null, 8, ["8", 0, "7", 1, "6", 2, "5", 3, "4", 4, "3", 5, "2", 6, "1", 7], null);
  Tf("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  var Bh = new G(null, 8, ["1", 0, "2", 1, "3", 2, "4", 3, "5", 4, "6", 5, "7", 6, "8", 7], null);
  var Ah = new G(null, 8, ["a", 7, "b", 6, "c", 5, "d", 4, "e", 3, "f", 2, "g", 1, "h", 0], null);
  var cf = Td("abcdefghijklmnopqrstuvwxyz".split(""));
  var xh = bf(cf, ch());
  bf(Tc(cf), ch());
  t("Opera");
  t("Trident") || t("MSIE");
  t("Edge");
  var Pl = t("Gecko") && !(-1 != fa.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge");
  var Ql = -1 != fa.toLowerCase().indexOf("webkit") && !t("Edge");
  Ql && t("Mobile");
  t("Macintosh");
  t("Windows");
  t("Linux") || t("CrOS");
  var Wl = aa.navigator || null;
  Wl && (Wl.appVersion || "").indexOf("X11");
  t("Android");
  Uf();
  t("iPad");
  t("iPod");
  Vf();
  fa.toLowerCase().indexOf("kaios");
  ha();
  Uf() || t("iPod");
  t("iPad");
  !t("Android") || ia() || ha() || t("Opera") || t("Silk");
  ia();
  !t("Safari") || ia() || t("Coast") || t("Opera") || t("Edge") || t("Edg/") || t("OPR") || ha() || t("Silk") || t("Android") || Vf();
  var oi = {};
  var ni = null;
  var mi = Pl || Ql || "function" == typeof aa.btoa;
  var hj = function(a) {
    var b = new Sg(qd);
    return function() {
      function c(f) {
        var g = null;
        if (0 < arguments.length) {
          g = 0;
          for (var h = Array(arguments.length - 0); g < h.length; ) h[g] = arguments[g + 0], ++g;
          g = new K(h, 0, null);
        }
        return d.call(this, g);
      }
      function d(f) {
        var g = Kb.l(Qa(b), f, Ec);
        return g === Ec ? (g = nd(a, f), Ri.ja(b, qc, f, g), g) : g;
      }
      c.aa = 0;
      c.ea = function(f) {
        f = J(f);
        return d(f);
      };
      c.S = d;
      return c;
    }();
  }(function(a) {
    var b = Y.h(function(c) {
      if (Q.h(c, a)) var d = 0;
      else {
        var f = Ch(c, "white"), g = Ch(a, "white");
        d = Math.abs(wh.g(f) - wh.g(g));
        f = Math.abs(yh.g(f) - yh.g(g));
        d = d >= f ? d : f;
      }
      return new G(null, 2, [Eg, d, Wh, c], null);
    }, th());
    b = Fg(b);
    b = Y.h(Wh, b);
    return Ob(b);
  });
  var Zf = Te([Cf, Df, Kf, Gf, Ff, Ul, Af, Lf, Mf, Vl, xf, If, Hf, Bf, yf, Sl, Tl], [new G(null, 2, [zf, false, wf, Fc], null), new G(null, 1, [wf, sc], null), new G(null, 2, [zf, "white", wf, function(a) {
    return Q.h(a, "white") || Q.h(a, "black");
  }], null), new G(null, 1, [wf, sc], null), new G(null, 1, [wf, sc], null), new G(null, 1, [wf, sc], null), new G(null, 2, [zf, false, wf, Fc], null), new G(null, 2, [zf, false, wf, Fc], null), new G(null, 2, [zf, "snapback", wf, function(a) {
    return Ic(new Ye(null, new G(null, 2, ["remove", null, "snapback", null], null), null), a);
  }], null), new G(
    null,
    1,
    [wf, sc],
    null
  ), new G(null, 2, [zf, false, wf, Fc], null), new G(null, 2, [zf, qd, wf, Cj], null), new G(null, 1, [wf, sc], null), new G(null, 1, [wf, sc], null), new G(null, 1, [wf, sc], null), new G(null, 1, [wf, sc], null), new G(null, 1, [wf, sc], null)]);
  Jc(function(a, b) {
    var c = X(b, 0, null);
    b = X(b, 1, null);
    b = pd(b);
    b = Kb.h(b, zf);
    return qc.l(a, c, b);
  }, qd, Zf);
  var dk = af(je(Zf));
  var Ok = af(Y.h(Xc, dk));
  var ck = Tf("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  var Oj = new G(null, 6, ["superfast", 40, "super fast", 40, "fast", 80, "slow", 300, "superslow", 800, "super slow", 800], null);
  var fk = af(je(Oj));
  var ik = new Ye(null, new G(null, 5, [Mj, null, Pj, null, qj, null, Nj, null, sj, null], null), null);
  var lk = new Ye(null, new G(null, 3, [Mj, null, Pj, null, Nj, null], null), null);
  var dl = new G(null, 3, [Sh, "#777", Uh, 0.8, Vh, "small"], null);
  var jl = new G(null, 3, [Sh, "#777", Uh, 0.8, Vh, "large"], null);
  var al = new Ye(null, new G(null, 3, ["small", null, "medium", null, "large", null], null), null);
  var Qg = function Qg2(a) {
    switch (arguments.length) {
      case 1:
        return Qg2.g(arguments[0]);
      case 2:
        return Qg2.h(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", B.g(arguments.length)].join(""));
    }
  };
  Qg.g = function(a) {
    return Qg.h(a, null);
  };
  Qg.h = function(a, b) {
    b = Zj(b);
    return Q.h(b, "white") ? (Ri.ja(a, qc, Kf, "white"), "white") : Q.h(b, "black") ? (Ri.ja(a, qc, Kf, "black"), "black") : Q.h(b, "flip") ? (Ri.ja(a, mj, Kf, Sk), b = Kf.g(Qa(a)), Q.h(b, "white") ? Ri.ja(a, qc, Kf, "white") : Ri.ja(a, qc, Kf, "black"), b) : Kf.g(Qa(a));
  };
  Qg.aa = 2;
  var Dl = new G(null, 4, [Ol, new G(null, 3, [If, "outside", Nl, false, fj, "letters"], null), Fh, new G(null, 3, [If, "outside", Nl, false, fj, "numbers"], null), Ml, new G(null, 3, [If, "outside", Nl, false, fj, "numbers"], null), Gh, new G(null, 3, [If, "outside", Nl, false, fj, "letters"], null)], null);
  Fl.F = function() {
    return oj(ic(["Please pass a DOM element, element ID, or query selector as the first argument to the Chessboard2() function."]));
  };
  Fl.g = function(a) {
    return Fl.h(a, qd);
  };
  Fl.h = function(a, b) {
    var c = Di(a);
    return fg(c) ? oj(ic(["Unable to find DOM element:", a])) : El(c, b);
  };
  Fl.aa = 2;
  var Chessboard2 = Fl;

  // node_modules/chess.js/dist/esm/chess.js
  var WHITE = "w";
  var BLACK = "b";
  var PAWN = "p";
  var KNIGHT = "n";
  var BISHOP = "b";
  var ROOK = "r";
  var QUEEN = "q";
  var KING = "k";
  var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  var EMPTY = -1;
  var FLAGS = {
    NORMAL: "n",
    CAPTURE: "c",
    BIG_PAWN: "b",
    EP_CAPTURE: "e",
    PROMOTION: "p",
    KSIDE_CASTLE: "k",
    QSIDE_CASTLE: "q"
  };
  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };
  var Ox88 = {
    a8: 0,
    b8: 1,
    c8: 2,
    d8: 3,
    e8: 4,
    f8: 5,
    g8: 6,
    h8: 7,
    a7: 16,
    b7: 17,
    c7: 18,
    d7: 19,
    e7: 20,
    f7: 21,
    g7: 22,
    h7: 23,
    a6: 32,
    b6: 33,
    c6: 34,
    d6: 35,
    e6: 36,
    f6: 37,
    g6: 38,
    h6: 39,
    a5: 48,
    b5: 49,
    c5: 50,
    d5: 51,
    e5: 52,
    f5: 53,
    g5: 54,
    h5: 55,
    a4: 64,
    b4: 65,
    c4: 66,
    d4: 67,
    e4: 68,
    f4: 69,
    g4: 70,
    h4: 71,
    a3: 80,
    b3: 81,
    c3: 82,
    d3: 83,
    e3: 84,
    f3: 85,
    g3: 86,
    h3: 87,
    a2: 96,
    b2: 97,
    c2: 98,
    d2: 99,
    e2: 100,
    f2: 101,
    g2: 102,
    h2: 103,
    a1: 112,
    b1: 113,
    c1: 114,
    d1: 115,
    e1: 116,
    f1: 117,
    g1: 118,
    h1: 119
  };
  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };
  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14, 18, 33, 31, 14],
    b: [-17, -15, 17, 15],
    r: [-16, 1, 16, -1],
    q: [-17, -16, -15, 1, 17, 16, 15, -1],
    k: [-17, -16, -15, 1, 17, 16, 15, -1]
  };
  var ATTACKS = [
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    24,
    24,
    24,
    56,
    0,
    56,
    24,
    24,
    24,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20
  ];
  var RAYS = [
    17,
    0,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    16,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    16,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    16,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    -16,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    -16,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    -16,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    0,
    -17
  ];
  var PIECE_MASKS = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 };
  var SYMBOLS = "pnbrqkPNBRQK";
  var PROMOTIONS = [KNIGHT, BISHOP, ROOK, QUEEN];
  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_7 = 1;
  var RANK_8 = 0;
  var SIDES = {
    [KING]: BITS.KSIDE_CASTLE,
    [QUEEN]: BITS.QSIDE_CASTLE
  };
  var ROOKS = {
    w: [
      { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
      { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
    ],
    b: [
      { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
      { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
    ]
  };
  var SECOND_RANK = { b: RANK_7, w: RANK_2 };
  var TERMINATION_MARKERS = ["1-0", "0-1", "1/2-1/2", "*"];
  function rank(square) {
    return square >> 4;
  }
  function file(square) {
    return square & 15;
  }
  function isDigit(c) {
    return "0123456789".indexOf(c) !== -1;
  }
  function algebraic(square) {
    const f = file(square);
    const r2 = rank(square);
    return "abcdefgh".substring(f, f + 1) + "87654321".substring(r2, r2 + 1);
  }
  function swapColor(color) {
    return color === WHITE ? BLACK : WHITE;
  }
  function validateFen(fen) {
    const tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return {
        ok: false,
        error: "Invalid FEN: must contain six space-delimited fields"
      };
    }
    const moveNumber = parseInt(tokens[5], 10);
    if (isNaN(moveNumber) || moveNumber <= 0) {
      return {
        ok: false,
        error: "Invalid FEN: move number must be a positive integer"
      };
    }
    const halfMoves = parseInt(tokens[4], 10);
    if (isNaN(halfMoves) || halfMoves < 0) {
      return {
        ok: false,
        error: "Invalid FEN: half move counter number must be a non-negative integer"
      };
    }
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return { ok: false, error: "Invalid FEN: en-passant square is invalid" };
    }
    if (/[^kKqQ-]/.test(tokens[2])) {
      return { ok: false, error: "Invalid FEN: castling availability is invalid" };
    }
    if (!/^(w|b)$/.test(tokens[1])) {
      return { ok: false, error: "Invalid FEN: side-to-move is invalid" };
    }
    const rows = tokens[0].split("/");
    if (rows.length !== 8) {
      return {
        ok: false,
        error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
      };
    }
    for (let i = 0; i < rows.length; i++) {
      let sumFields = 0;
      let previousWasNumber = false;
      for (let k = 0; k < rows[i].length; k++) {
        if (isDigit(rows[i][k])) {
          if (previousWasNumber) {
            return {
              ok: false,
              error: "Invalid FEN: piece data is invalid (consecutive number)"
            };
          }
          sumFields += parseInt(rows[i][k], 10);
          previousWasNumber = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return {
              ok: false,
              error: "Invalid FEN: piece data is invalid (invalid piece)"
            };
          }
          sumFields += 1;
          previousWasNumber = false;
        }
      }
      if (sumFields !== 8) {
        return {
          ok: false,
          error: "Invalid FEN: piece data is invalid (too many squares in rank)"
        };
      }
    }
    if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
      return { ok: false, error: "Invalid FEN: illegal en-passant square" };
    }
    const kings = [
      { color: "white", regex: /K/g },
      { color: "black", regex: /k/g }
    ];
    for (const { color, regex } of kings) {
      if (!regex.test(tokens[0])) {
        return { ok: false, error: `Invalid FEN: missing ${color} king` };
      }
      if ((tokens[0].match(regex) || []).length > 1) {
        return { ok: false, error: `Invalid FEN: too many ${color} kings` };
      }
    }
    if (Array.from(rows[0] + rows[7]).some((char) => char.toUpperCase() === "P")) {
      return {
        ok: false,
        error: "Invalid FEN: some pawns are on the edge rows"
      };
    }
    return { ok: true };
  }
  function getDisambiguator(move, moves) {
    const from = move.from;
    const to = move.to;
    const piece = move.piece;
    let ambiguities = 0;
    let sameRank = 0;
    let sameFile = 0;
    for (let i = 0, len = moves.length; i < len; i++) {
      const ambigFrom = moves[i].from;
      const ambigTo = moves[i].to;
      const ambigPiece = moves[i].piece;
      if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
        ambiguities++;
        if (rank(from) === rank(ambigFrom)) {
          sameRank++;
        }
        if (file(from) === file(ambigFrom)) {
          sameFile++;
        }
      }
    }
    if (ambiguities > 0) {
      if (sameRank > 0 && sameFile > 0) {
        return algebraic(from);
      } else if (sameFile > 0) {
        return algebraic(from).charAt(1);
      } else {
        return algebraic(from).charAt(0);
      }
    }
    return "";
  }
  function addMove(moves, color, from, to, piece, captured = void 0, flags = BITS.NORMAL) {
    const r2 = rank(to);
    if (piece === PAWN && (r2 === RANK_1 || r2 === RANK_8)) {
      for (let i = 0; i < PROMOTIONS.length; i++) {
        const promotion = PROMOTIONS[i];
        moves.push({
          color,
          from,
          to,
          piece,
          captured,
          promotion,
          flags: flags | BITS.PROMOTION
        });
      }
    } else {
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        flags
      });
    }
  }
  function inferPieceType(san) {
    let pieceType = san.charAt(0);
    if (pieceType >= "a" && pieceType <= "h") {
      const matches = san.match(/[a-h]\d.*[a-h]\d/);
      if (matches) {
        return void 0;
      }
      return PAWN;
    }
    pieceType = pieceType.toLowerCase();
    if (pieceType === "o") {
      return KING;
    }
    return pieceType;
  }
  function strippedSan(move) {
    return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
  }
  function trimFen(fen) {
    return fen.split(" ").slice(0, 4).join(" ");
  }
  var Chess = class {
    _board = new Array(128);
    _turn = WHITE;
    _header = {};
    _kings = { w: EMPTY, b: EMPTY };
    _epSquare = -1;
    _halfMoves = 0;
    _moveNumber = 0;
    _history = [];
    _comments = {};
    _castling = { w: 0, b: 0 };
    // tracks number of times a position has been seen for repetition checking
    _positionCount = {};
    constructor(fen = DEFAULT_POSITION) {
      this.load(fen);
    }
    clear({ preserveHeaders = false } = {}) {
      this._board = new Array(128);
      this._kings = { w: EMPTY, b: EMPTY };
      this._turn = WHITE;
      this._castling = { w: 0, b: 0 };
      this._epSquare = EMPTY;
      this._halfMoves = 0;
      this._moveNumber = 1;
      this._history = [];
      this._comments = {};
      this._header = preserveHeaders ? this._header : {};
      this._positionCount = {};
      delete this._header["SetUp"];
      delete this._header["FEN"];
    }
    removeHeader(key) {
      if (key in this._header) {
        delete this._header[key];
      }
    }
    load(fen, { skipValidation = false, preserveHeaders = false } = {}) {
      let tokens = fen.split(/\s+/);
      if (tokens.length >= 2 && tokens.length < 6) {
        const adjustments = ["-", "-", "0", "1"];
        fen = tokens.concat(adjustments.slice(-(6 - tokens.length))).join(" ");
      }
      tokens = fen.split(/\s+/);
      if (!skipValidation) {
        const { ok: ok2, error } = validateFen(fen);
        if (!ok2) {
          throw new Error(error);
        }
      }
      const position = tokens[0];
      let square = 0;
      this.clear({ preserveHeaders });
      for (let i = 0; i < position.length; i++) {
        const piece = position.charAt(i);
        if (piece === "/") {
          square += 8;
        } else if (isDigit(piece)) {
          square += parseInt(piece, 10);
        } else {
          const color = piece < "a" ? WHITE : BLACK;
          this._put({ type: piece.toLowerCase(), color }, algebraic(square));
          square++;
        }
      }
      this._turn = tokens[1];
      if (tokens[2].indexOf("K") > -1) {
        this._castling.w |= BITS.KSIDE_CASTLE;
      }
      if (tokens[2].indexOf("Q") > -1) {
        this._castling.w |= BITS.QSIDE_CASTLE;
      }
      if (tokens[2].indexOf("k") > -1) {
        this._castling.b |= BITS.KSIDE_CASTLE;
      }
      if (tokens[2].indexOf("q") > -1) {
        this._castling.b |= BITS.QSIDE_CASTLE;
      }
      this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
      this._halfMoves = parseInt(tokens[4], 10);
      this._moveNumber = parseInt(tokens[5], 10);
      this._updateSetup(fen);
      this._incPositionCount(fen);
    }
    fen() {
      let empty = 0;
      let fen = "";
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (this._board[i]) {
          if (empty > 0) {
            fen += empty;
            empty = 0;
          }
          const { color, type: piece } = this._board[i];
          fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        } else {
          empty++;
        }
        if (i + 1 & 136) {
          if (empty > 0) {
            fen += empty;
          }
          if (i !== Ox88.h1) {
            fen += "/";
          }
          empty = 0;
          i += 8;
        }
      }
      let castling = "";
      if (this._castling[WHITE] & BITS.KSIDE_CASTLE) {
        castling += "K";
      }
      if (this._castling[WHITE] & BITS.QSIDE_CASTLE) {
        castling += "Q";
      }
      if (this._castling[BLACK] & BITS.KSIDE_CASTLE) {
        castling += "k";
      }
      if (this._castling[BLACK] & BITS.QSIDE_CASTLE) {
        castling += "q";
      }
      castling = castling || "-";
      let epSquare = "-";
      if (this._epSquare !== EMPTY) {
        const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
        const squares = [bigPawnSquare + 1, bigPawnSquare - 1];
        for (const square of squares) {
          if (square & 136) {
            continue;
          }
          const color = this._turn;
          if (this._board[square]?.color === color && this._board[square]?.type === PAWN) {
            this._makeMove({
              color,
              from: square,
              to: this._epSquare,
              piece: PAWN,
              captured: PAWN,
              flags: BITS.EP_CAPTURE
            });
            const isLegal = !this._isKingAttacked(color);
            this._undoMove();
            if (isLegal) {
              epSquare = algebraic(this._epSquare);
              break;
            }
          }
        }
      }
      return [
        fen,
        this._turn,
        castling,
        epSquare,
        this._halfMoves,
        this._moveNumber
      ].join(" ");
    }
    /*
     * Called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object. If the FEN
     * is equal to the default position, the SetUp and FEN are deleted the setup
     * is only updated if history.length is zero, ie moves haven't been made.
     */
    _updateSetup(fen) {
      if (this._history.length > 0)
        return;
      if (fen !== DEFAULT_POSITION) {
        this._header["SetUp"] = "1";
        this._header["FEN"] = fen;
      } else {
        delete this._header["SetUp"];
        delete this._header["FEN"];
      }
    }
    reset() {
      this.load(DEFAULT_POSITION);
    }
    get(square) {
      return this._board[Ox88[square]] || false;
    }
    put({ type, color }, square) {
      if (this._put({ type, color }, square)) {
        this._updateCastlingRights();
        this._updateEnPassantSquare();
        this._updateSetup(this.fen());
        return true;
      }
      return false;
    }
    _put({ type, color }, square) {
      if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
        return false;
      }
      if (!(square in Ox88)) {
        return false;
      }
      const sq = Ox88[square];
      if (type == KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) {
        return false;
      }
      const currentPieceOnSquare = this._board[sq];
      if (currentPieceOnSquare && currentPieceOnSquare.type === KING) {
        this._kings[currentPieceOnSquare.color] = EMPTY;
      }
      this._board[sq] = { type, color };
      if (type === KING) {
        this._kings[color] = sq;
      }
      return true;
    }
    remove(square) {
      const piece = this.get(square);
      delete this._board[Ox88[square]];
      if (piece && piece.type === KING) {
        this._kings[piece.color] = EMPTY;
      }
      this._updateCastlingRights();
      this._updateEnPassantSquare();
      this._updateSetup(this.fen());
      return piece;
    }
    _updateCastlingRights() {
      const whiteKingInPlace = this._board[Ox88.e1]?.type === KING && this._board[Ox88.e1]?.color === WHITE;
      const blackKingInPlace = this._board[Ox88.e8]?.type === KING && this._board[Ox88.e8]?.color === BLACK;
      if (!whiteKingInPlace || this._board[Ox88.a1]?.type !== ROOK || this._board[Ox88.a1]?.color !== WHITE) {
        this._castling.w &= ~BITS.QSIDE_CASTLE;
      }
      if (!whiteKingInPlace || this._board[Ox88.h1]?.type !== ROOK || this._board[Ox88.h1]?.color !== WHITE) {
        this._castling.w &= ~BITS.KSIDE_CASTLE;
      }
      if (!blackKingInPlace || this._board[Ox88.a8]?.type !== ROOK || this._board[Ox88.a8]?.color !== BLACK) {
        this._castling.b &= ~BITS.QSIDE_CASTLE;
      }
      if (!blackKingInPlace || this._board[Ox88.h8]?.type !== ROOK || this._board[Ox88.h8]?.color !== BLACK) {
        this._castling.b &= ~BITS.KSIDE_CASTLE;
      }
    }
    _updateEnPassantSquare() {
      if (this._epSquare === EMPTY) {
        return;
      }
      const startSquare = this._epSquare + (this._turn === WHITE ? -16 : 16);
      const currentSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
      const attackers = [currentSquare + 1, currentSquare - 1];
      if (this._board[startSquare] !== null || this._board[this._epSquare] !== null || this._board[currentSquare]?.color !== swapColor(this._turn) || this._board[currentSquare]?.type !== PAWN) {
        this._epSquare = EMPTY;
        return;
      }
      const canCapture = (square) => !(square & 136) && this._board[square]?.color === this._turn && this._board[square]?.type === PAWN;
      if (!attackers.some(canCapture)) {
        this._epSquare = EMPTY;
      }
    }
    _attacked(color, square) {
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (i & 136) {
          i += 7;
          continue;
        }
        if (this._board[i] === void 0 || this._board[i].color !== color) {
          continue;
        }
        const piece = this._board[i];
        const difference = i - square;
        if (difference === 0) {
          continue;
        }
        const index = difference + 119;
        if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
          if (piece.type === PAWN) {
            if (difference > 0) {
              if (piece.color === WHITE)
                return true;
            } else {
              if (piece.color === BLACK)
                return true;
            }
            continue;
          }
          if (piece.type === "n" || piece.type === "k")
            return true;
          const offset = RAYS[index];
          let j = i + offset;
          let blocked = false;
          while (j !== square) {
            if (this._board[j] != null) {
              blocked = true;
              break;
            }
            j += offset;
          }
          if (!blocked)
            return true;
        }
      }
      return false;
    }
    _isKingAttacked(color) {
      const square = this._kings[color];
      return square === -1 ? false : this._attacked(swapColor(color), square);
    }
    isAttacked(square, attackedBy) {
      return this._attacked(attackedBy, Ox88[square]);
    }
    isCheck() {
      return this._isKingAttacked(this._turn);
    }
    inCheck() {
      return this.isCheck();
    }
    isCheckmate() {
      return this.isCheck() && this._moves().length === 0;
    }
    isStalemate() {
      return !this.isCheck() && this._moves().length === 0;
    }
    isInsufficientMaterial() {
      const pieces = {
        b: 0,
        n: 0,
        r: 0,
        q: 0,
        k: 0,
        p: 0
      };
      const bishops = [];
      let numPieces = 0;
      let squareColor = 0;
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        squareColor = (squareColor + 1) % 2;
        if (i & 136) {
          i += 7;
          continue;
        }
        const piece = this._board[i];
        if (piece) {
          pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
          if (piece.type === BISHOP) {
            bishops.push(squareColor);
          }
          numPieces++;
        }
      }
      if (numPieces === 2) {
        return true;
      } else if (
        // k vs. kn .... or .... k vs. kb
        numPieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)
      ) {
        return true;
      } else if (numPieces === pieces[BISHOP] + 2) {
        let sum = 0;
        const len = bishops.length;
        for (let i = 0; i < len; i++) {
          sum += bishops[i];
        }
        if (sum === 0 || sum === len) {
          return true;
        }
      }
      return false;
    }
    isThreefoldRepetition() {
      return this._getPositionCount(this.fen()) >= 3;
    }
    isDraw() {
      return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
      this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
    }
    isGameOver() {
      return this.isCheckmate() || this.isStalemate() || this.isDraw();
    }
    moves({ verbose = false, square = void 0, piece = void 0 } = {}) {
      const moves = this._moves({ square, piece });
      if (verbose) {
        return moves.map((move) => this._makePretty(move));
      } else {
        return moves.map((move) => this._moveToSan(move, moves));
      }
    }
    _moves({ legal = true, piece = void 0, square = void 0 } = {}) {
      const forSquare = square ? square.toLowerCase() : void 0;
      const forPiece = piece?.toLowerCase();
      const moves = [];
      const us = this._turn;
      const them = swapColor(us);
      let firstSquare = Ox88.a8;
      let lastSquare = Ox88.h1;
      let singleSquare = false;
      if (forSquare) {
        if (!(forSquare in Ox88)) {
          return [];
        } else {
          firstSquare = lastSquare = Ox88[forSquare];
          singleSquare = true;
        }
      }
      for (let from = firstSquare; from <= lastSquare; from++) {
        if (from & 136) {
          from += 7;
          continue;
        }
        if (!this._board[from] || this._board[from].color === them) {
          continue;
        }
        const { type } = this._board[from];
        let to;
        if (type === PAWN) {
          if (forPiece && forPiece !== type)
            continue;
          to = from + PAWN_OFFSETS[us][0];
          if (!this._board[to]) {
            addMove(moves, us, from, to, PAWN);
            to = from + PAWN_OFFSETS[us][1];
            if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
              addMove(moves, us, from, to, PAWN, void 0, BITS.BIG_PAWN);
            }
          }
          for (let j = 2; j < 4; j++) {
            to = from + PAWN_OFFSETS[us][j];
            if (to & 136)
              continue;
            if (this._board[to]?.color === them) {
              addMove(moves, us, from, to, PAWN, this._board[to].type, BITS.CAPTURE);
            } else if (to === this._epSquare) {
              addMove(moves, us, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
            }
          }
        } else {
          if (forPiece && forPiece !== type)
            continue;
          for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
            const offset = PIECE_OFFSETS[type][j];
            to = from;
            while (true) {
              to += offset;
              if (to & 136)
                break;
              if (!this._board[to]) {
                addMove(moves, us, from, to, type);
              } else {
                if (this._board[to].color === us)
                  break;
                addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
                break;
              }
              if (type === KNIGHT || type === KING)
                break;
            }
          }
        }
      }
      if (forPiece === void 0 || forPiece === KING) {
        if (!singleSquare || lastSquare === this._kings[us]) {
          if (this._castling[us] & BITS.KSIDE_CASTLE) {
            const castlingFrom = this._kings[us];
            const castlingTo = castlingFrom + 2;
            if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) {
              addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.KSIDE_CASTLE);
            }
          }
          if (this._castling[us] & BITS.QSIDE_CASTLE) {
            const castlingFrom = this._kings[us];
            const castlingTo = castlingFrom - 2;
            if (!this._board[castlingFrom - 1] && !this._board[castlingFrom - 2] && !this._board[castlingFrom - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom - 1) && !this._attacked(them, castlingTo)) {
              addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.QSIDE_CASTLE);
            }
          }
        }
      }
      if (!legal || this._kings[us] === -1) {
        return moves;
      }
      const legalMoves = [];
      for (let i = 0, len = moves.length; i < len; i++) {
        this._makeMove(moves[i]);
        if (!this._isKingAttacked(us)) {
          legalMoves.push(moves[i]);
        }
        this._undoMove();
      }
      return legalMoves;
    }
    move(move, { strict = false } = {}) {
      let moveObj = null;
      if (typeof move === "string") {
        moveObj = this._moveFromSan(move, strict);
      } else if (typeof move === "object") {
        const moves = this._moves();
        for (let i = 0, len = moves.length; i < len; i++) {
          if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
            moveObj = moves[i];
            break;
          }
        }
      }
      if (!moveObj) {
        if (typeof move === "string") {
          throw new Error(`Invalid move: ${move}`);
        } else {
          throw new Error(`Invalid move: ${JSON.stringify(move)}`);
        }
      }
      const prettyMove = this._makePretty(moveObj);
      this._makeMove(moveObj);
      this._incPositionCount(prettyMove.after);
      return prettyMove;
    }
    _push(move) {
      this._history.push({
        move,
        kings: { b: this._kings.b, w: this._kings.w },
        turn: this._turn,
        castling: { b: this._castling.b, w: this._castling.w },
        epSquare: this._epSquare,
        halfMoves: this._halfMoves,
        moveNumber: this._moveNumber
      });
    }
    _makeMove(move) {
      const us = this._turn;
      const them = swapColor(us);
      this._push(move);
      this._board[move.to] = this._board[move.from];
      delete this._board[move.from];
      if (move.flags & BITS.EP_CAPTURE) {
        if (this._turn === BLACK) {
          delete this._board[move.to - 16];
        } else {
          delete this._board[move.to + 16];
        }
      }
      if (move.promotion) {
        this._board[move.to] = { type: move.promotion, color: us };
      }
      if (this._board[move.to].type === KING) {
        this._kings[us] = move.to;
        if (move.flags & BITS.KSIDE_CASTLE) {
          const castlingTo = move.to - 1;
          const castlingFrom = move.to + 1;
          this._board[castlingTo] = this._board[castlingFrom];
          delete this._board[castlingFrom];
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          const castlingTo = move.to + 1;
          const castlingFrom = move.to - 2;
          this._board[castlingTo] = this._board[castlingFrom];
          delete this._board[castlingFrom];
        }
        this._castling[us] = 0;
      }
      if (this._castling[us]) {
        for (let i = 0, len = ROOKS[us].length; i < len; i++) {
          if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
            this._castling[us] ^= ROOKS[us][i].flag;
            break;
          }
        }
      }
      if (this._castling[them]) {
        for (let i = 0, len = ROOKS[them].length; i < len; i++) {
          if (move.to === ROOKS[them][i].square && this._castling[them] & ROOKS[them][i].flag) {
            this._castling[them] ^= ROOKS[them][i].flag;
            break;
          }
        }
      }
      if (move.flags & BITS.BIG_PAWN) {
        if (us === BLACK) {
          this._epSquare = move.to - 16;
        } else {
          this._epSquare = move.to + 16;
        }
      } else {
        this._epSquare = EMPTY;
      }
      if (move.piece === PAWN) {
        this._halfMoves = 0;
      } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        this._halfMoves = 0;
      } else {
        this._halfMoves++;
      }
      if (us === BLACK) {
        this._moveNumber++;
      }
      this._turn = them;
    }
    undo() {
      const move = this._undoMove();
      if (move) {
        const prettyMove = this._makePretty(move);
        this._decPositionCount(prettyMove.after);
        return prettyMove;
      }
      return null;
    }
    _undoMove() {
      const old = this._history.pop();
      if (old === void 0) {
        return null;
      }
      const move = old.move;
      this._kings = old.kings;
      this._turn = old.turn;
      this._castling = old.castling;
      this._epSquare = old.epSquare;
      this._halfMoves = old.halfMoves;
      this._moveNumber = old.moveNumber;
      const us = this._turn;
      const them = swapColor(us);
      this._board[move.from] = this._board[move.to];
      this._board[move.from].type = move.piece;
      delete this._board[move.to];
      if (move.captured) {
        if (move.flags & BITS.EP_CAPTURE) {
          let index;
          if (us === BLACK) {
            index = move.to - 16;
          } else {
            index = move.to + 16;
          }
          this._board[index] = { type: PAWN, color: them };
        } else {
          this._board[move.to] = { type: move.captured, color: them };
        }
      }
      if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
        let castlingTo, castlingFrom;
        if (move.flags & BITS.KSIDE_CASTLE) {
          castlingTo = move.to + 1;
          castlingFrom = move.to - 1;
        } else {
          castlingTo = move.to - 2;
          castlingFrom = move.to + 1;
        }
        this._board[castlingTo] = this._board[castlingFrom];
        delete this._board[castlingFrom];
      }
      return move;
    }
    pgn({ newline = "\n", maxWidth = 0 } = {}) {
      const result = [];
      let headerExists = false;
      for (const i in this._header) {
        result.push("[" + i + ' "' + this._header[i] + '"]' + newline);
        headerExists = true;
      }
      if (headerExists && this._history.length) {
        result.push(newline);
      }
      const appendComment = (moveString2) => {
        const comment = this._comments[this.fen()];
        if (typeof comment !== "undefined") {
          const delimiter = moveString2.length > 0 ? " " : "";
          moveString2 = `${moveString2}${delimiter}{${comment}}`;
        }
        return moveString2;
      };
      const reversedHistory = [];
      while (this._history.length > 0) {
        reversedHistory.push(this._undoMove());
      }
      const moves = [];
      let moveString = "";
      if (reversedHistory.length === 0) {
        moves.push(appendComment(""));
      }
      while (reversedHistory.length > 0) {
        moveString = appendComment(moveString);
        const move = reversedHistory.pop();
        if (!move) {
          break;
        }
        if (!this._history.length && move.color === "b") {
          const prefix = `${this._moveNumber}. ...`;
          moveString = moveString ? `${moveString} ${prefix}` : prefix;
        } else if (move.color === "w") {
          if (moveString.length) {
            moves.push(moveString);
          }
          moveString = this._moveNumber + ".";
        }
        moveString = moveString + " " + this._moveToSan(move, this._moves({ legal: true }));
        this._makeMove(move);
      }
      if (moveString.length) {
        moves.push(appendComment(moveString));
      }
      if (typeof this._header.Result !== "undefined") {
        moves.push(this._header.Result);
      }
      if (maxWidth === 0) {
        return result.join("") + moves.join(" ");
      }
      const strip = function() {
        if (result.length > 0 && result[result.length - 1] === " ") {
          result.pop();
          return true;
        }
        return false;
      };
      const wrapComment = function(width, move) {
        for (const token of move.split(" ")) {
          if (!token) {
            continue;
          }
          if (width + token.length > maxWidth) {
            while (strip()) {
              width--;
            }
            result.push(newline);
            width = 0;
          }
          result.push(token);
          width += token.length;
          result.push(" ");
          width++;
        }
        if (strip()) {
          width--;
        }
        return width;
      };
      let currentWidth = 0;
      for (let i = 0; i < moves.length; i++) {
        if (currentWidth + moves[i].length > maxWidth) {
          if (moves[i].includes("{")) {
            currentWidth = wrapComment(currentWidth, moves[i]);
            continue;
          }
        }
        if (currentWidth + moves[i].length > maxWidth && i !== 0) {
          if (result[result.length - 1] === " ") {
            result.pop();
          }
          result.push(newline);
          currentWidth = 0;
        } else if (i !== 0) {
          result.push(" ");
          currentWidth++;
        }
        result.push(moves[i]);
        currentWidth += moves[i].length;
      }
      return result.join("");
    }
    header(...args) {
      for (let i = 0; i < args.length; i += 2) {
        if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
          this._header[args[i]] = args[i + 1];
        }
      }
      return this._header;
    }
    loadPgn(pgn, { strict = false, newlineChar = "\r?\n" } = {}) {
      function mask(str) {
        return str.replace(/\\/g, "\\");
      }
      function parsePgnHeader(header) {
        const headerObj = {};
        const headers2 = header.split(new RegExp(mask(newlineChar)));
        let key = "";
        let value = "";
        for (let i = 0; i < headers2.length; i++) {
          const regex = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
          key = headers2[i].replace(regex, "$1");
          value = headers2[i].replace(regex, "$2");
          if (key.trim().length > 0) {
            headerObj[key] = value;
          }
        }
        return headerObj;
      }
      pgn = pgn.trim();
      const headerRegex = new RegExp("^(\\[((?:" + mask(newlineChar) + ")|.)*\\])((?:\\s*" + mask(newlineChar) + "){2}|(?:\\s*" + mask(newlineChar) + ")*$)");
      const headerRegexResults = headerRegex.exec(pgn);
      const headerString = headerRegexResults ? headerRegexResults.length >= 2 ? headerRegexResults[1] : "" : "";
      this.reset();
      const headers = parsePgnHeader(headerString);
      let fen = "";
      for (const key in headers) {
        if (key.toLowerCase() === "fen") {
          fen = headers[key];
        }
        this.header(key, headers[key]);
      }
      if (!strict) {
        if (fen) {
          this.load(fen, { preserveHeaders: true });
        }
      } else {
        if (headers["SetUp"] === "1") {
          if (!("FEN" in headers)) {
            throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
          }
          this.load(headers["FEN"], { preserveHeaders: true });
        }
      }
      function toHex(s) {
        return Array.from(s).map(function(c) {
          return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/%/g, "").toLowerCase();
        }).join("");
      }
      function fromHex(s) {
        return s.length == 0 ? "" : decodeURIComponent("%" + (s.match(/.{1,2}/g) || []).join("%"));
      }
      const encodeComment = function(s) {
        s = s.replace(new RegExp(mask(newlineChar), "g"), " ");
        return `{${toHex(s.slice(1, s.length - 1))}}`;
      };
      const decodeComment = function(s) {
        if (s.startsWith("{") && s.endsWith("}")) {
          return fromHex(s.slice(1, s.length - 1));
        }
      };
      let ms = pgn.replace(headerString, "").replace(
        // encode comments so they don't get deleted below
        new RegExp(`({[^}]*})+?|;([^${mask(newlineChar)}]*)`, "g"),
        function(_match, bracket, semicolon) {
          return bracket !== void 0 ? encodeComment(bracket) : " " + encodeComment(`{${semicolon.slice(1)}}`);
        }
      ).replace(new RegExp(mask(newlineChar), "g"), " ");
      const ravRegex = /(\([^()]+\))+?/g;
      while (ravRegex.test(ms)) {
        ms = ms.replace(ravRegex, "");
      }
      ms = ms.replace(/\d+\.(\.\.)?/g, "");
      ms = ms.replace(/\.\.\./g, "");
      ms = ms.replace(/\$\d+/g, "");
      let moves = ms.trim().split(new RegExp(/\s+/));
      moves = moves.filter((move) => move !== "");
      let result = "";
      for (let halfMove = 0; halfMove < moves.length; halfMove++) {
        const comment = decodeComment(moves[halfMove]);
        if (comment !== void 0) {
          this._comments[this.fen()] = comment;
          continue;
        }
        const move = this._moveFromSan(moves[halfMove], strict);
        if (move == null) {
          if (TERMINATION_MARKERS.indexOf(moves[halfMove]) > -1) {
            result = moves[halfMove];
          } else {
            throw new Error(`Invalid move in PGN: ${moves[halfMove]}`);
          }
        } else {
          result = "";
          this._makeMove(move);
          this._incPositionCount(this.fen());
        }
      }
      if (result && Object.keys(this._header).length && !this._header["Result"]) {
        this.header("Result", result);
      }
    }
    /*
     * Convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} strict Use the strict SAN parser. It will throw errors
     * on overly disambiguated moves (see below):
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */
    _moveToSan(move, moves) {
      let output = "";
      if (move.flags & BITS.KSIDE_CASTLE) {
        output = "O-O";
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        output = "O-O-O";
      } else {
        if (move.piece !== PAWN) {
          const disambiguator = getDisambiguator(move, moves);
          output += move.piece.toUpperCase() + disambiguator;
        }
        if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
          if (move.piece === PAWN) {
            output += algebraic(move.from)[0];
          }
          output += "x";
        }
        output += algebraic(move.to);
        if (move.promotion) {
          output += "=" + move.promotion.toUpperCase();
        }
      }
      this._makeMove(move);
      if (this.isCheck()) {
        if (this.isCheckmate()) {
          output += "#";
        } else {
          output += "+";
        }
      }
      this._undoMove();
      return output;
    }
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    _moveFromSan(move, strict = false) {
      const cleanMove = strippedSan(move);
      let pieceType = inferPieceType(cleanMove);
      let moves = this._moves({ legal: true, piece: pieceType });
      for (let i = 0, len = moves.length; i < len; i++) {
        if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
          return moves[i];
        }
      }
      if (strict) {
        return null;
      }
      let piece = void 0;
      let matches = void 0;
      let from = void 0;
      let to = void 0;
      let promotion = void 0;
      let overlyDisambiguated = false;
      matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        piece = matches[1];
        from = matches[2];
        to = matches[3];
        promotion = matches[4];
        if (from.length == 1) {
          overlyDisambiguated = true;
        }
      } else {
        matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
        if (matches) {
          piece = matches[1];
          from = matches[2];
          to = matches[3];
          promotion = matches[4];
          if (from.length == 1) {
            overlyDisambiguated = true;
          }
        }
      }
      pieceType = inferPieceType(cleanMove);
      moves = this._moves({
        legal: true,
        piece: piece ? piece : pieceType
      });
      if (!to) {
        return null;
      }
      for (let i = 0, len = moves.length; i < len; i++) {
        if (!from) {
          if (cleanMove === strippedSan(this._moveToSan(moves[i], moves)).replace("x", "")) {
            return moves[i];
          }
        } else if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[from] == moves[i].from && Ox88[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        } else if (overlyDisambiguated) {
          const square = algebraic(moves[i].from);
          if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
            return moves[i];
          }
        }
      }
      return null;
    }
    ascii() {
      let s = "   +------------------------+\n";
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (file(i) === 0) {
          s += " " + "87654321"[rank(i)] + " |";
        }
        if (this._board[i]) {
          const piece = this._board[i].type;
          const color = this._board[i].color;
          const symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
          s += " " + symbol + " ";
        } else {
          s += " . ";
        }
        if (i + 1 & 136) {
          s += "|\n";
          i += 8;
        }
      }
      s += "   +------------------------+\n";
      s += "     a  b  c  d  e  f  g  h";
      return s;
    }
    perft(depth) {
      const moves = this._moves({ legal: false });
      let nodes = 0;
      const color = this._turn;
      for (let i = 0, len = moves.length; i < len; i++) {
        this._makeMove(moves[i]);
        if (!this._isKingAttacked(color)) {
          if (depth - 1 > 0) {
            nodes += this.perft(depth - 1);
          } else {
            nodes++;
          }
        }
        this._undoMove();
      }
      return nodes;
    }
    // pretty = external move object
    _makePretty(uglyMove) {
      const { color, piece, from, to, flags, captured, promotion } = uglyMove;
      let prettyFlags = "";
      for (const flag in BITS) {
        if (BITS[flag] & flags) {
          prettyFlags += FLAGS[flag];
        }
      }
      const fromAlgebraic = algebraic(from);
      const toAlgebraic = algebraic(to);
      const move = {
        color,
        piece,
        from: fromAlgebraic,
        to: toAlgebraic,
        san: this._moveToSan(uglyMove, this._moves({ legal: true })),
        flags: prettyFlags,
        lan: fromAlgebraic + toAlgebraic,
        before: this.fen(),
        after: ""
      };
      this._makeMove(uglyMove);
      move.after = this.fen();
      this._undoMove();
      if (captured) {
        move.captured = captured;
      }
      if (promotion) {
        move.promotion = promotion;
        move.lan += promotion;
      }
      return move;
    }
    turn() {
      return this._turn;
    }
    board() {
      const output = [];
      let row = [];
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (this._board[i] == null) {
          row.push(null);
        } else {
          row.push({
            square: algebraic(i),
            type: this._board[i].type,
            color: this._board[i].color
          });
        }
        if (i + 1 & 136) {
          output.push(row);
          row = [];
          i += 8;
        }
      }
      return output;
    }
    squareColor(square) {
      if (square in Ox88) {
        const sq = Ox88[square];
        return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
      }
      return null;
    }
    history({ verbose = false } = {}) {
      const reversedHistory = [];
      const moveHistory = [];
      while (this._history.length > 0) {
        reversedHistory.push(this._undoMove());
      }
      while (true) {
        const move = reversedHistory.pop();
        if (!move) {
          break;
        }
        if (verbose) {
          moveHistory.push(this._makePretty(move));
        } else {
          moveHistory.push(this._moveToSan(move, this._moves()));
        }
        this._makeMove(move);
      }
      return moveHistory;
    }
    /*
     * Keeps track of position occurrence counts for the purpose of repetition
     * checking. All three methods (`_inc`, `_dec`, and `_get`) trim the
     * irrelevent information from the fen, initialising new positions, and
     * removing old positions from the record if their counts are reduced to 0.
     */
    _getPositionCount(fen) {
      const trimmedFen = trimFen(fen);
      return this._positionCount[trimmedFen] || 0;
    }
    _incPositionCount(fen) {
      const trimmedFen = trimFen(fen);
      if (this._positionCount[trimmedFen] === void 0) {
        this._positionCount[trimmedFen] = 0;
      }
      this._positionCount[trimmedFen] += 1;
    }
    _decPositionCount(fen) {
      const trimmedFen = trimFen(fen);
      if (this._positionCount[trimmedFen] === 1) {
        delete this._positionCount[trimmedFen];
      } else {
        this._positionCount[trimmedFen] -= 1;
      }
    }
    _pruneComments() {
      const reversedHistory = [];
      const currentComments = {};
      const copyComment = (fen) => {
        if (fen in this._comments) {
          currentComments[fen] = this._comments[fen];
        }
      };
      while (this._history.length > 0) {
        reversedHistory.push(this._undoMove());
      }
      copyComment(this.fen());
      while (true) {
        const move = reversedHistory.pop();
        if (!move) {
          break;
        }
        this._makeMove(move);
        copyComment(this.fen());
      }
      this._comments = currentComments;
    }
    getComment() {
      return this._comments[this.fen()];
    }
    setComment(comment) {
      this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
    }
    deleteComment() {
      const comment = this._comments[this.fen()];
      delete this._comments[this.fen()];
      return comment;
    }
    getComments() {
      this._pruneComments();
      return Object.keys(this._comments).map((fen) => {
        return { fen, comment: this._comments[fen] };
      });
    }
    deleteComments() {
      this._pruneComments();
      return Object.keys(this._comments).map((fen) => {
        const comment = this._comments[fen];
        delete this._comments[fen];
        return { fen, comment };
      });
    }
    setCastlingRights(color, rights) {
      for (const side of [KING, QUEEN]) {
        if (rights[side] !== void 0) {
          if (rights[side]) {
            this._castling[color] |= SIDES[side];
          } else {
            this._castling[color] &= ~SIDES[side];
          }
        }
      }
      this._updateCastlingRights();
      const result = this.getCastlingRights(color);
      return (rights[KING] === void 0 || rights[KING] === result[KING]) && (rights[QUEEN] === void 0 || rights[QUEEN] === result[QUEEN]);
    }
    getCastlingRights(color) {
      return {
        [KING]: (this._castling[color] & SIDES[KING]) !== 0,
        [QUEEN]: (this._castling[color] & SIDES[QUEEN]) !== 0
      };
    }
    moveNumber() {
      return this._moveNumber;
    }
  };

  // src/game.js
  function startGame(color, element) {
    return new Promise((resolve) => {
      const game = new Chess();
      const boardConfig = {
        draggable: true,
        onDragStart,
        onTouchSquare,
        onDrop,
        onSnapEnd,
        position: game.fen(),
        touchMove: true,
        orientation: color === "white" ? "white" : "black"
      };
      const board = Chessboard2(element, boardConfig);
      checkGameOver();
      let pendingMove = null;
      function onTouchSquare(square, piece, boardInfo) {
        const legalMoves = game.moves({ square, verbose: true });
        if (!pendingMove && legalMoves.length > 0) {
          pendingMove = square;
          legalMoves.forEach((move) => {
            board.addCircle(move.to);
          });
        } else if (pendingMove && pendingMove === square) {
          pendingMove = null;
          board.clearCircles();
        } else if (pendingMove) {
          const moveResult = tryMove({
            from: pendingMove,
            to: square,
            promotion: "q"
            // always promote to a Queen for example simplicity
          });
          if (moveResult) {
            board.clearCircles();
            board.position(game.fen()).then(() => {
              updatePGN();
              checkGameOver();
              window.setTimeout(makeRandomMove, 250);
            });
          } else if (piece) {
            pendingMove = square;
            board.clearCircles();
            legalMoves.forEach((m) => {
              board.addCircle(m.to);
            });
          } else {
            pendingMove = null;
            board.clearCircles();
          }
        }
      }
      function checkGameOver() {
        if (!game.isGameOver()) return;
        if (game.isDraw()) resolve(0);
        if (game.turn() === color) resolve(-1);
        resolve(1);
      }
      function onDragStart(dragStartEvt) {
        if (game.isGameOver()) return false;
        if (!isWhitePiece(dragStartEvt.piece)) return false;
        const legalMoves = game.moves({
          square: dragStartEvt.square,
          verbose: true
        });
        if (legalMoves.length === 0) return false;
        legalMoves.forEach((move) => {
          board.addCircle(move.to);
        });
      }
      function isWhitePiece(piece) {
        return /^w/.test(piece);
      }
      function makeRandomMove() {
        const possibleMoves = game.moves();
        if (possibleMoves.length === 0) return;
        const randomIdx = Math.floor(Math.random() * possibleMoves.length);
        game.move(possibleMoves[randomIdx]);
        board.position(game.fen(), (_positionInfo) => {
          checkGameOver();
        });
      }
      function tryMove(move) {
        try {
          return game.move(move);
        } catch (error) {
          return null;
        }
      }
      function onDrop(dropEvt) {
        const move = tryMove({
          from: dropEvt.source,
          to: dropEvt.target,
          promotion: "q"
          // NOTE: always promote to a queen for example simplicity
        });
        board.clearCircles();
        if (move) {
          pendingMove = null;
          board.fen(game.fen(), () => {
            checkGameOver();
            window.setTimeout(makeRandomMove, 250);
          });
        } else {
          pendingMove = null;
          return "snapback";
        }
      }
      function onSnapEnd() {
        board.position(game.fen());
      }
    });
  }

  // src/index.js
  (() => {
    const pluginName = "Chess";
    PluginManager.registerCommand(pluginName, "StartChessGame", (args) => {
      const variableId = Number(args.variableId);
      const { dialog, removeDialog } = createDialog();
      const chessboardContainer = createChessboardContainer(dialog);
      startGame("w", chessboardContainer).then((result) => {
        console.log(result);
        $gameVariables.setValue(variableId, result);
      });
    });
    loadCss();
  })();
})();
/*! Bundled license information:

@chrisoakman/chessboard2/dist/chessboard2.min.mjs:
  (*! chessboard2 v0.5.0 | (c) 2021 Chris Oakman | ISC License | https://chessboardjs.com/v2 *)

chess.js/dist/esm/chess.js:
  (**
   * @license
   * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   *    this list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)
*/
