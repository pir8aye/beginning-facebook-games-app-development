var h = void 0, j = !0, k = null, m = !1;
function aa(a) {
  return function() {
    return this[a]
  }
}
var o, p = this;
function ba() {
}
function ca(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function q(a) {
  return a !== h
}
function r(a) {
  return"array" == ca(a)
}
function da(a) {
  var b = ca(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function t(a) {
  return"string" == typeof a
}
function ea(a) {
  return"number" == typeof a
}
function u(a) {
  return"function" == ca(a)
}
function fa(a) {
  a = ca(a);
  return"object" == a || "array" == a || "function" == a
}
function v(a) {
  return a[ga] || (a[ga] = ++ha)
}
var ga = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ha = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ja(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function ka(a, b, c) {
  ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
  return ka.apply(k, arguments)
}
var la = Date.now || function() {
  return+new Date
};
function w(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Aa = b.prototype;
  a.prototype = new c
}
;var ma = {}, na, oa, pa;
function x(a, b) {
  this.x = q(a) ? a : 0;
  this.y = q(b) ? b : 0
}
x.prototype.c = function() {
  return new x(this.x, this.y)
};
x.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function z(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
z.prototype.c = function() {
  return new z(this.top, this.right, this.bottom, this.left)
};
z.prototype.toString = function() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
z.prototype.contains = function(a) {
  return!this || !a ? m : a instanceof z ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
z.prototype.expand = function(a, b, c, d) {
  fa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this
};
function A(a, b) {
  this.width = a;
  this.height = b
}
o = A.prototype;
o.c = function() {
  return new A(this.width, this.height)
};
o.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
function qa(a) {
  return a.width * a.height
}
o.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
o.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
o.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
o.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
z.prototype.size = function() {
  return new A(this.right - this.left, this.bottom - this.top)
};
function ra() {
}
ra.prototype.G = ba;
function B(a) {
  return a.gc ? a.gc : a
}
function sa(a, b) {
  ta(b, a);
  b.gc = B(a);
  return b
}
;var C = new ra;
C.ra = function() {
};
C.$c = function() {
  var a = this.ib, b = this.hb(), c = this.U || 1, d = c / a, e;
  if(this.a) {
    this.Ta && this.Ta.contains(b) && (e = qa(this.Ta.size()) / qa(b.size())) && 1.6 > e && 0.5 < e ? b = this.Ta : 1 != this.Td && 0 != this.b.length && (this instanceof D || b.expand(12, 12, 12, 12));
    this.Ta = b;
    var f = b.size();
    e = f.c().scale(c).ceil();
    if(this.a.width != e.width || this.a.height != e.height) {
      this.a.width = e.width, this.a.height = e.height, this.kb = 1
    }
    var g = this.m.c();
    this.h[E] && (g = this.h[E]);
    0 != e.width ? g.scale(f.width * d / e.width) : g.scale(1 / a);
    a = G(this);
    this.vb = (a.left - b.left) * c;
    this.wb = (a.top - b.top) * c;
    b = this.l().c();
    a = this.O;
    b.width *= a.x;
    b.height *= a.y;
    b = b.scale(c);
    c = this.g.c();
    this.h[H] && (c = this.h[H]);
    c.x *= d;
    c.y *= d;
    c.x -= b.width + this.vb;
    c.y -= b.height + this.wb;
    ua(this.a, 100 * ((this.vb + b.width) / e.width), 100 * ((this.wb + b.height) / e.height), j);
    !this.M[H] && !this.M[E] && !this.M[I] && (d = -(this.w %= 360), q(this.h[I]) && (d = -this.h[I]), va(this.a, wa(new xa, 0.1).translate(c.x, c.y).scale(g.x, g.y).rotate(d)));
    if(this.kb) {
      d = this.a.getContext("2d"), c = this.U || 1, d.clearRect(0, 0, e.width, e.height), d.save(), d.translate(this.vb, this.wb), d.scale(c, c), e = this.l(), g = this.O, d.translate(e.width * g.x, e.height * g.y), this.j.sc.call(this, d), d.restore(), this.kb = 0
    }
  }
};
C.update = function() {
};
C.sc = function(a) {
  if(this.q && (this.e != this.aa && (this.aa && J.Lc.call(this), this.e && J.cc.call(this)), !this.na && !this.$a && !(0 == this.r || 1 == this.Jb))) {
    1 != this.r && (a.globalAlpha *= this.r);
    if(this.e) {
      J.ic.call(this.e);
      var b = this.aa, c = this.m;
      a.save();
      a.save();
      a.translate(b.Ec.x, b.Ec.y);
      a.rotate(-b.Fc);
      this.Na && a.rotate((this.w %= 360) * Math.PI / 180);
      a.beginPath();
      a.moveTo(0, 0);
      a.lineTo(b.Nb / c.x, 0);
      a.lineTo(b.Nb / c.x, b.Mb / c.y);
      a.lineTo(0, b.Mb / c.y);
      a.closePath();
      a.restore();
      a.clip()
    }
    b = new x(0, 0);
    this.j.G.call(this, a);
    for(var d = 0, e;e = this.b[d];d++) {
      var f = ya(e, b).c(), g = e.w %= 360, c = e.m;
      a.save();
      a.translate(f.x, f.y);
      a.scale(c.x, c.y);
      0 != g && a.rotate(-g * Math.PI / 180);
      this.j.sc.call(e, a);
      a.restore()
    }
    1 != this.r && (a.globalAlpha /= this.r);
    this.aa && a.restore()
  }
};
function za(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function Aa(a) {
  if(!Ba.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Da, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
  return a
}
var Ca = /&/g, Da = /</g, Ea = />/g, Fa = /\"/g, Ba = /[&<>\"]/;
var K = Array.prototype, Ga = K.indexOf ? function(a, b, c) {
  return K.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    return!t(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ha = K.forEach ? function(a, b, c) {
  K.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = t(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Ia = K.filter ? function(a, b, c) {
  return K.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, g = t(a) ? a.split("") : a, i = 0;i < d;i++) {
    if(i in g) {
      var l = g[i];
      b.call(c, l, i, a) && (e[f++] = l)
    }
  }
  return e
}, Ja = K.map ? function(a, b, c) {
  return K.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a))
  }
  return e
};
function Ka(a, b) {
  0 <= Ga(a, b) || a.push(b)
}
function La(a, b) {
  var c = Ga(a, b);
  0 <= c && K.splice.call(a, c, 1)
}
function Ma(a) {
  return K.concat.apply(K, arguments)
}
function Na(a) {
  if(r(a)) {
    return Ma(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function Oa(a) {
  return r(a) ? Ma(a) : Na(a)
}
function Pa(a, b, c, d) {
  K.splice.apply(a, Qa(arguments, 1))
}
function Qa(a, b, c) {
  return 2 >= arguments.length ? K.slice.call(a, b) : K.slice.call(a, b, c)
}
;function L(a, b) {
  this.x = a;
  this.y = b
}
w(L, x);
L.prototype.c = function() {
  return new L(this.x, this.y)
};
L.prototype.scale = function(a) {
  this.x *= a;
  this.y *= a;
  return this
};
L.prototype.rotate = function(a) {
  var b = Math.cos(a), a = Math.sin(a), c = this.y * b + this.x * a;
  this.x = this.x * b - this.y * a;
  this.y = c;
  return this
};
var Ra, Sa, Ta, Ua, Va, Wa;
function Xa() {
  return p.navigator ? p.navigator.userAgent : k
}
Va = Ua = Ta = Sa = Ra = m;
var Ya;
if(Ya = Xa()) {
  var Za = p.navigator;
  Ra = 0 == Ya.indexOf("Opera");
  Sa = !Ra && -1 != Ya.indexOf("MSIE");
  Ua = (Ta = !Ra && -1 != Ya.indexOf("WebKit")) && -1 != Ya.indexOf("Mobile");
  Va = !Ra && !Ta && "Gecko" == Za.product
}
var $a = Ra, M = Sa, N = Va, O = Ta, ab = Ua, bb, cb = p.navigator;
bb = cb && cb.platform || "";
Wa = -1 != bb.indexOf("Mac");
var db = -1 != bb.indexOf("Win"), eb;
a: {
  var fb = "", gb;
  if($a && p.opera) {
    var hb = p.opera.version, fb = "function" == typeof hb ? hb() : hb
  }else {
    if(N ? gb = /rv\:([^\);]+)(\)|;)/ : M ? gb = /MSIE\s+([^\);]+)(\)|;)/ : O && (gb = /WebKit\/(\S+)/), gb) {
      var ib = gb.exec(Xa()), fb = ib ? ib[1] : ""
    }
  }
  if(M) {
    var jb, kb = p.document;
    jb = kb ? kb.documentMode : h;
    if(jb > parseFloat(fb)) {
      eb = "" + jb;
      break a
    }
  }
  eb = fb
}
var lb = {};
function P(a) {
  var b;
  if(!(b = lb[a])) {
    b = 0;
    for(var c = za("" + eb).split("."), d = za("" + a).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", i = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var y = l.exec(g) || ["", "", ""], n = s.exec(i) || ["", "", ""];
        if(0 == y[0].length && 0 == n[0].length) {
          break
        }
        b = ((0 == y[1].length ? 0 : parseInt(y[1], 10)) < (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? -1 : (0 == y[1].length ? 0 : parseInt(y[1], 10)) > (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? 1 : 0) || ((0 == y[2].length) < (0 == n[2].length) ? -1 : (0 == y[2].length) > (0 == n[2].length) ? 1 : 0) || (y[2] < n[2] ? -1 : y[2] > n[2] ? 1 : 0)
      }while(0 == b)
    }
    b = lb[a] = 0 <= b
  }
  return b
}
var mb = {};
function nb(a) {
  return mb[a] || (mb[a] = M && document.documentMode && document.documentMode >= a)
}
;function ob() {
}
var pb = 0;
o = ob.prototype;
o.key = 0;
o.xa = m;
o.jc = m;
o.ab = function(a, b, c, d, e, f) {
  if(u(a)) {
    this.Bc = j
  }else {
    if(a && a.handleEvent && u(a.handleEvent)) {
      this.Bc = m
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ma = a;
  this.Kc = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Hb = f;
  this.jc = m;
  this.key = ++pb;
  this.xa = m
};
o.handleEvent = function(a) {
  return this.Bc ? this.Ma.call(this.Hb || this.src, a) : this.Ma.handleEvent.call(this.Ma, a)
};
function qb(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
var rb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function ta(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < rb.length;f++) {
      c = rb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;!M || nb(9);
var sb = !M || nb(9), tb = M && !P("8");
!O || P("528");
N && P("1.9b") || M && P("8") || $a && P("9.5") || O && P("528");
!N || P("8");
function ub() {
}
ub.prototype.rc = m;
ub.prototype.Ia = function() {
  if(!this.rc) {
    this.rc = j, this.T()
  }
};
ub.prototype.T = function() {
  this.Zc && vb.apply(k, this.Zc)
};
function vb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    da(d) ? vb.apply(k, d) : d && "function" == typeof d.Ia && d.Ia()
  }
}
;function Q(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
w(Q, ub);
o = Q.prototype;
o.T = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
o.Y = m;
o.Oa = j;
o.stopPropagation = function() {
  this.Y = j
};
o.preventDefault = function() {
  this.Oa = m
};
function wb(a) {
  wb[" "](a);
  return a
}
wb[" "] = ba;
function xb(a, b) {
  a && this.ab(a, b)
}
w(xb, Q);
o = xb.prototype;
o.target = k;
o.relatedTarget = k;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = m;
o.altKey = m;
o.shiftKey = m;
o.metaKey = m;
o.td = m;
o.X = k;
o.ab = function(a, b) {
  var c = this.type = a.type;
  Q.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(N) {
      var e;
      a: {
        try {
          wb(d.nodeName);
          e = j;
          break a
        }catch(f) {
        }
        e = m
      }
      e || (d = k)
    }
  }else {
    if("mouseover" == c) {
      d = a.fromElement
    }else {
      if("mouseout" == c) {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = O || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = O || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.td = Wa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.X = a;
  delete this.Oa;
  delete this.Y
};
o.stopPropagation = function() {
  xb.Aa.stopPropagation.call(this);
  this.X.stopPropagation ? this.X.stopPropagation() : this.X.cancelBubble = j
};
o.preventDefault = function() {
  xb.Aa.preventDefault.call(this);
  var a = this.X;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, tb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
o.T = function() {
  xb.Aa.T.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.X = k
};
var yb = {}, R = {}, S = {}, zb = {};
function U(a, b, c, d, e) {
  if(b) {
    if(r(b)) {
      for(var f = 0;f < b.length;f++) {
        U(a, b[f], c, d, e)
      }
      return k
    }
    var d = !!d, g = R;
    b in g || (g[b] = {P:0, I:0});
    g = g[b];
    d in g || (g[d] = {P:0, I:0}, g.P++);
    var g = g[d], i = v(a), l;
    g.I++;
    if(g[i]) {
      l = g[i];
      for(f = 0;f < l.length;f++) {
        if(g = l[f], g.Ma == c && g.Hb == e) {
          if(g.xa) {
            break
          }
          return l[f].key
        }
      }
    }else {
      l = g[i] = [], g.P++
    }
    f = Ab();
    f.src = a;
    g = new ob;
    g.ab(c, f, a, b, d, e);
    c = g.key;
    f.key = c;
    l.push(g);
    yb[c] = g;
    S[i] || (S[i] = []);
    S[i].push(g);
    a.addEventListener ? (a == p || !a.yb) && a.addEventListener(b, f, d) : a.attachEvent(b in zb ? zb[b] : zb[b] = "on" + b, f);
    return c
  }
  throw Error("Invalid event type");
}
function Ab() {
  var a = Bb, b = sb ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Cb(a, b, c, d, e) {
  if(r(b)) {
    for(var f = 0;f < b.length;f++) {
      Cb(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = R;
      if(b in f && (f = f[b], d in f && (f = f[d], a = v(a), f[a]))) {
        a = f[a];
        break a
      }
      a = k
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ma == c && a[f].capture == d && a[f].Hb == e) {
          Db(a[f].key);
          break
        }
      }
    }
  }
}
function Db(a) {
  if(yb[a]) {
    var b = yb[a];
    if(!b.xa) {
      var c = b.src, d = b.type, e = b.Kc, f = b.capture;
      c.removeEventListener ? (c == p || !c.yb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in zb ? zb[d] : zb[d] = "on" + d, e);
      c = v(c);
      e = R[d][f][c];
      if(S[c]) {
        var g = S[c];
        La(g, b);
        0 == g.length && delete S[c]
      }
      b.xa = j;
      e.Hc = j;
      Eb(d, f, c, e);
      delete yb[a]
    }
  }
}
function Eb(a, b, c, d) {
  if(!d.fb && d.Hc) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].xa ? d[e].Kc.src = k : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Hc = m;
    0 == f && (delete R[a][b][c], R[a][b].P--, 0 == R[a][b].P && (delete R[a][b], R[a].P--), 0 == R[a].P && delete R[a])
  }
}
function Fb(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    qb(S, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Db(f.key), c++
        }
      }
    })
  }else {
    if(a = v(a), S[a]) {
      for(var a = S[a], e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Db(f.key), c++
        }
      }
    }
  }
}
function Gb(a, b, c, d, e) {
  var f = 1, b = v(b);
  if(a[b]) {
    a.I--;
    a = a[b];
    a.fb ? a.fb++ : a.fb = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var l = a[i];
        l && !l.xa && (f &= Hb(l, e) !== m)
      }
    }finally {
      a.fb--, Eb(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Hb(a, b) {
  var c = a.handleEvent(b);
  a.jc && Db(a.key);
  return c
}
function Bb(a, b) {
  if(!yb[a]) {
    return j
  }
  var c = yb[a], d = c.type, e = R;
  if(!(d in e)) {
    return j
  }
  var e = e[d], f, g;
  if(!sb) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var l = p;f = i.shift();) {
          if(l[f] != k) {
            l = l[f]
          }else {
            i = k;
            break a
          }
        }
        i = l
      }
    }
    f = i;
    i = j in e;
    l = m in e;
    if(i) {
      if(0 > f.keyCode || f.returnValue != h) {
        return j
      }
      a: {
        var s = m;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(y) {
            s = j
          }
        }
        if(s || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    s = new xb;
    s.ab(f, this);
    f = j;
    try {
      if(i) {
        for(var n = [], T = s.currentTarget;T;T = T.parentNode) {
          n.push(T)
        }
        g = e[j];
        g.I = g.P;
        for(var F = n.length - 1;!s.Y && 0 <= F && g.I;F--) {
          s.currentTarget = n[F], f &= Gb(g, n[F], d, j, s)
        }
        if(l) {
          g = e[m];
          g.I = g.P;
          for(F = 0;!s.Y && F < n.length && g.I;F++) {
            s.currentTarget = n[F], f &= Gb(g, n[F], d, m, s)
          }
        }
      }else {
        f = Hb(c, s)
      }
    }finally {
      if(n) {
        n.length = 0
      }
      s.Ia()
    }
    return f
  }
  d = new xb(b, this);
  try {
    f = Hb(c, d)
  }finally {
    d.Ia()
  }
  return f
}
;function V() {
}
w(V, ub);
o = V.prototype;
o.yb = j;
o.Pb = k;
o.addEventListener = function(a, b, c, d) {
  U(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Cb(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = R;
  if(b in c) {
    if(t(a)) {
      a = new Q(a, this)
    }else {
      if(a instanceof Q) {
        a.target = a.target || this
      }else {
        var d = a, a = new Q(b, this);
        ta(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.Pb) {
        e.push(f)
      }
      f = c[j];
      f.I = f.P;
      for(var g = e.length - 1;!a.Y && 0 <= g && f.I;g--) {
        a.currentTarget = e[g], d &= Gb(f, e[g], a.type, j, a) && a.Oa != m
      }
    }
    if(m in c) {
      if(f = c[m], f.I = f.P, b) {
        for(g = 0;!a.Y && g < e.length && f.I;g++) {
          a.currentTarget = e[g], d &= Gb(f, e[g], a.type, m, a) && a.Oa != m
        }
      }else {
        for(e = this;!a.Y && e && f.I;e = e.Pb) {
          a.currentTarget = e, d &= Gb(f, e, a.type, m, a) && a.Oa != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
o.T = function() {
  V.Aa.T.call(this);
  Fb(this);
  this.Pb = k
};
var Ib, Jb, Kb, Lb, Mb, Nb = Xa();
Jb = (Ib = O && ab && /(ipod|iphone|ipad)/i.test(Nb)) && u(Object.freeze);
Kb = O && ab && /(android)/i.test(Nb);
Lb = O && /playbook/i.test(Nb);
Mb = q(document.ontouchmove);
function Ob(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Ob.prototype.c = function() {
  return new Ob(this.left, this.top, this.width, this.height)
};
function Pb(a) {
  return new Ob(a.left, a.top, a.right - a.left, a.bottom - a.top)
}
Ob.prototype.toString = function() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
function Qb(a, b) {
  var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
  if(c <= d) {
    var e = Math.max(a.top, b.top), f = Math.min(a.top + a.height, b.top + b.height);
    if(e <= f) {
      return new Ob(c, e, d - c, f - e)
    }
  }
  return k
}
Ob.prototype.contains = function(a) {
  return a instanceof Ob ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
Ob.prototype.l = function() {
  return new A(this.width, this.height)
};
var Rb;
function Sb(a, b) {
  var c;
  c = (c = a.className) && "function" == typeof c.split ? c.split(/\s+/) : [];
  var d = Qa(arguments, 1), e;
  e = c;
  for(var f = 0, g = 0;g < d.length;g++) {
    0 <= Ga(e, d[g]) || (e.push(d[g]), f++)
  }
  e = f == d.length;
  a.className = c.join(" ");
  return e
}
;var Tb = !M || nb(9);
!N && !M || M && nb(9) || N && P("1.9.1");
M && P("9");
function Ub(a) {
  return a ? new Vb(Wb(a)) : Rb || (Rb = new Vb)
}
function Xb(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && (!O || Yb(document) || P("528")) && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*")
}
function Zb(a, b) {
  qb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in $b ? a.setAttribute($b[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var $b = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function ac(a) {
  var b = a.document;
  if(O && !P("500") && !ab) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new A(a.innerWidth, b)
  }
  a = Yb(b) ? b.documentElement : b.body;
  return new A(a.clientWidth, a.clientHeight)
}
function bc(a, b, c) {
  return cc(document, arguments)
}
function cc(a, b) {
  var c = b[0], d = b[1];
  if(!Tb && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Aa(d.name), '"');
    if(d.type) {
      c.push(' type="', Aa(d.type), '"');
      var e = {};
      ta(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    t(d) ? c.className = d : r(d) ? Sb.apply(k, [c].concat(d)) : Zb(c, d)
  }
  2 < b.length && dc(a, c, b, 2);
  return c
}
function dc(a, b, c, d) {
  function e(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    da(f) && !(fa(f) && 0 < f.nodeType) ? Ha(ec(f) ? Na(f) : f, e) : e(f)
  }
}
function Yb(a) {
  return"CSS1Compat" == a.compatMode
}
function fc(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}
function gc(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function hc(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function ic(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function Wb(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function jc(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      for(var c;c = a.firstChild;) {
        a.removeChild(c)
      }
      a.appendChild(Wb(a).createTextNode(b))
    }
  }
}
function ec(a) {
  if(a && "number" == typeof a.length) {
    if(fa(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(u(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function Vb(a) {
  this.ca = a || p.document || document
}
o = Vb.prototype;
o.oc = function(a, b, c) {
  return cc(this.ca, arguments)
};
o.createElement = function(a) {
  return this.ca.createElement(a)
};
o.createTextNode = function(a) {
  return this.ca.createTextNode(a)
};
o.appendChild = function(a, b) {
  a.appendChild(b)
};
o.append = function(a, b) {
  dc(Wb(a), a, arguments, 1)
};
o.contains = ic;
function kc(a, b) {
  var c;
  a: {
    c = Wb(a);
    if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
      c = c[b] || c.getPropertyValue(b);
      break a
    }
    c = ""
  }
  return c || (a.currentStyle ? a.currentStyle[b] : k) || a.style && a.style[b]
}
function lc(a) {
  var b = a.getBoundingClientRect();
  if(M) {
    a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
  }
  return b
}
function mc(a) {
  if(M && !nb(8)) {
    return a.offsetParent
  }
  for(var b = Wb(a), c = kc(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = kc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return k
}
function nc(a, b, c) {
  if(b instanceof A) {
    c = b.height, b = b.width
  }else {
    if(c == h) {
      throw Error("missing height argument");
    }
  }
  a.style.width = oc(b);
  a.style.height = oc(c)
}
function oc(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function pc(a) {
  if("none" != kc(a, "display")) {
    return qc(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = qc(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function qc(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = O && !b && !c;
  return(!q(b) || d) && a.getBoundingClientRect ? (a = lc(a), new A(a.right - a.left, a.bottom - a.top)) : new A(b, c)
}
function rc(a) {
  var b = Ub(h), c = k;
  if(M) {
    c = b.ca.createStyleSheet(), sc(c, a)
  }else {
    var d = Xb(b.ca, "head")[0];
    d || (c = Xb(b.ca, "body")[0], d = b.oc("head"), c.parentNode.insertBefore(d, c));
    c = b.oc("style");
    sc(c, a);
    b.appendChild(d, c)
  }
  return c
}
function sc(a, b) {
  M ? a.cssText = b : a[O ? "innerText" : "innerHTML"] = b
}
;var tc, uc, vc, wc, xc, yc, zc;
(function() {
  var a = O ? "Webkit" : N ? "Moz" : $a ? "O" : M ? "ms" : "", b = bc("div").style;
  tc = "-" + a.toLowerCase() + "-transform";
  uc = function(a) {
    return b[a] !== h ? a : m
  };
  vc = function(b) {
    var d = b.charAt(0).toLowerCase() + b.substr(1), e = a + b;
    return uc(b) ? b : uc(d) ? d : uc(e) ? e : h
  }
})();
var Ac = function() {
  var a = vc("BorderRadius");
  return function(b, c, d, e) {
    e = e ? "%" : "px";
    d = q(d) ? d : c;
    c = (r(c) ? c.join(e + " ") : c) + e + "/" + ((r(d) ? d.join(e + " ") : d) + e);
    if(c != b.Uc) {
      b.style[a] = b.Uc = c
    }
  }
}();
function xa(a) {
  this.rb = [];
  this.wa = 1;
  this.Od && wa(this, a)
}
xa.prototype.scale = function(a, b) {
  this.rb.push("scale(" + a + "," + b + ")");
  return this
};
xa.prototype.rotate = function(a, b) {
  0 != a && this.rb.push("rotate(" + a + (b ? b : "deg") + ")");
  return this
};
xa.prototype.translate = function(a, b, c) {
  var d = 1 / this.wa, e = "translate";
  if(Ib || Lb) {
    e += "3d"
  }
  e += "(" + a * d + "px," + b * d + "px";
  if(Ib || Lb) {
    e += "," + (c ? c : 0) * d + "px"
  }
  this.rb.push(e + ")");
  return this
};
function wa(a, b) {
  if(1 != a.wa) {
    var c = 1 / a.wa;
    a.scale(c, c);
    a.wa = 1
  }
  if(1 != b) {
    a.scale(b, b), a.wa = b
  }
  return a
}
xa.prototype.toString = function() {
  1 != this.wa && wa(this, 1);
  return this.rb.join(" ")
};
var va = function() {
  var a = vc("Transform");
  return function(b, c) {
    var d = c.toString();
    if(d != b.Fd) {
      b.style[a] = b.Fd = d
    }
    na = 1
  }
}(), ua = function() {
  var a = vc("TransformOrigin");
  return function(b, c, d, e) {
    e = e ? "%" : "px";
    c = c + e + " " + d + e;
    if(c != b.Gd) {
      b.style[a] = b.Gd = c
    }
  }
}();
(function() {
  function a(a, b) {
    if(!a.length) {
      return a
    }
    for(var e = a.split("),"), f = 0;f < e.length - 1;f++) {
      e[f] += ")"
    }
    e = Ia(e, function(a) {
      return-1 == a.indexOf(b)
    });
    return e.join(",")
  }
  var b = vc("Transition");
  wc = !!b && !$a;
  xc = function(c, d, e, f) {
    if(b) {
      var g = a(c.style[b], d);
      g.length && (g += ", ");
      g += d + " " + e + "s cubic-bezier(" + f[1] + "," + f[2] + "," + f[3] + "," + f[4] + ")";
      c.style[b] = g
    }
  };
  yc = function(c, d) {
    b && c && (c.style[b] = a(c.style[b], d))
  };
  zc = function(a, b, e) {
    if(a.Hd != b || a.fd != e) {
      a.Hd = b, a.fd = e, nc(a, b, e)
    }
  }
})();
var J = new ra;
J.ra = function() {
  for(var a = 0, b, c = 0;b = this.b[c];c++) {
    b = b instanceof W ? b.s : b, b == this.a.childNodes[a] ? a++ : (ic(this.F, b) && hc(b), J.Sc(this.F, b, a++))
  }
};
J.ad = function() {
  var a = this.l(), b = this.ib, c = this.g, d = this.U || 1;
  this.h[H] && (c = this.h[H]);
  var e = Math.round(a.width * d), f = Math.round(a.height * d), g = this.m.c();
  this.h[E] && (g = this.h[E].c());
  0 != e ? g.scale(a.width / (e * b / d)) : g.scale(1 / b);
  zc(this.a, e, f);
  ua(this.a, 100 * this.O.x, 100 * this.O.y, j);
  e = this.O.x * a.width * d;
  f = this.O.y * a.height * d;
  a = c.x * d / b - e;
  b = c.y * d / b - f;
  c = this.K ? this.K.sb : 0;
  (0 != e - c || 0 != f - c) && this.a == this.F && this.b.length && J.od.call(this);
  this.a != this.F && !this.M[H] && !this.M[E] && !this.M[I] && va(this.F, (new xa).translate(e - c, f - c));
  this.e != this.aa && (this.aa && J.Lc.call(this), this.e && J.cc.call(this));
  c = wa(new xa, 0.1);
  this.e && (J.ic.call(this.e), wa(wa(c, 0.1).translate(-this.e.md - e, -this.e.nd - f).rotate(this.e.Fc, "rad").translate(e, f), 1));
  e = -(this.w %= 360);
  q(this.h[I]) && (e = -this.h[I]);
  c.translate(a, b).scale(g.x, g.y).rotate(e);
  !this.M[H] && !this.M[E] && !this.M[I] && va(this.a, c)
};
J.update = function() {
  if(this.a) {
    J.ad.call(this);
    if(!this.M[Bc]) {
      var a = this.r;
      q(this.h[Bc]) && (a = this.h[Bc]);
      if(this.k & Cc) {
        var b = this.a.style;
        if("opacity" in b) {
          b.opacity = a
        }else {
          if("MozOpacity" in b) {
            b.MozOpacity = a
          }else {
            if("filter" in b) {
              b.filter = "" === a ? "" : "alpha(opacity=" + 100 * a + ")"
            }
          }
        }
      }
    }
    this.k & Dc && (this.a.style.display = this.$a ? "none" : "block");
    this.na || this.j.G.call(this, this.a)
  }
};
J.ic = function() {
  if(q(this.Yb) && this.Yb.q) {
    var a = this.Yb, b = G(this), c = new x(b.left, b.top), d = new x(b.right, b.top), e = new x(b.right, b.bottom), b = a.getParent(), c = Ec(this, c, b), d = Ec(this, d, b), e = Ec(this, e, b), b = Math.atan2(c.y - d.y, d.x - c.x), f = d.x - c.x, g = c.y - d.y, i = e.x - d.x, l = e.y - d.y, d = Math.cos(b), e = Math.sin(b);
    this.Nb = Math.round(Math.sqrt(f * f + g * g));
    this.Mb = Math.round(Math.sqrt(i * i + l * l));
    if(B(a.j) == J) {
      f = a.s, nc(f, this.Nb, this.Mb), va(f, wa(new xa, 0.1).translate(c.x, c.y).rotate(-b, "rad"))
    }
    B(this.j) == J && (this.a.style.display = "none");
    this.Ec = Fc(a, c.c());
    this.ld = j;
    this.md = d * c.x - e * c.y;
    this.nd = d * c.y + e * c.x;
    this.Fc = b
  }
};
J.Sc = function(a, b, c) {
  c == h || a.childNodes.length <= c ? a.appendChild(b) : a.insertBefore(b, a.childNodes[c])
};
J.od = function() {
  this.F = bc("div");
  for(var a = document.createDocumentFragment(), b;b = this.a.firstChild;) {
    this.a.removeChild(b), a.appendChild(b)
  }
  this.F.appendChild(a);
  this.a.appendChild(this.F)
};
J.Lc = function() {
  if(this.a != this.s) {
    if(B(this.j) == J) {
      hc(this.a);
      var a = this.s, b = a.parentNode;
      b && b.replaceChild(this.a, a);
      this.s = this.a
    }
    this.aa.Jb = 0;
    this.aa = k
  }
};
J.cc = function() {
  if(B(this.j) == J) {
    this.s = bc("div");
    this.s.style.cssText = "position:absolute;overflow:hidden;";
    ua(this.s, 0, 0);
    var a = this.a, b = a.parentNode;
    b && b.replaceChild(this.s, a);
    this.s.appendChild(this.a)
  }
  this.e.Jb = 1;
  this.e.Yb = this;
  this.aa = this.e;
  X(this.e, Gc)
};
var Hc;
(Hc = "ScriptEngine" in p && "JScript" == p.ScriptEngine()) && (p.ScriptEngineMajorVersion(), p.ScriptEngineMinorVersion(), p.ScriptEngineBuildVersion());
function Ic(a, b) {
  this.D = Hc ? [] : "";
  a != k && this.append.apply(this, arguments)
}
Hc ? (Ic.prototype.xb = 0, Ic.prototype.append = function(a, b, c) {
  b == k ? this.D[this.xb++] = a : (this.D.push.apply(this.D, arguments), this.xb = this.D.length);
  return this
}) : Ic.prototype.append = function(a, b, c) {
  this.D += a;
  if(b != k) {
    for(var d = 1;d < arguments.length;d++) {
      this.D += arguments[d]
    }
  }
  return this
};
Ic.prototype.clear = function() {
  Hc ? this.xb = this.D.length = 0 : this.D = ""
};
Ic.prototype.toString = function() {
  if(Hc) {
    var a = this.D.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.D
};
M && P(8);
(function() {
  var a = [[], []], b = [[], []];
  oa = function(c, d, e) {
    Ka((e ? b : a)[d || 0], c)
  };
  pa = function() {
    for(var c, d = 0;2 > d;d++) {
      for(;a[d].length;) {
        c = a[d][0], c.update(d), c.k = 0, c == a[d][0] && a[d].shift()
      }
      a[d] = []
    }
    b = [[], []]
  }
})();
var Gc = 1, Cc = 16, Dc = 32, H = 1, E = 2, I = 4, Bc = 5, Jc;
var Kc = new Ic;
Kc.append(".", "lime-director", " {position:absolute; -webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; image-rendering:  optimizeSpeed; overflow: hidden;}.", "lime-director", " div, .", "lime-director", " img, .", "lime-director", " canvas {-webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; position: absolute; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -moz-user-select: none; -webkit-user-select: none; -webkit-user-drag: none;}.", 
"lime-scene", " {position:absolute; width:100%; height:100%; left: 0px; top: 0px; overflow: hidden; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}.", "lime-fps", " {float: left; background: #333; color: #fff; position: absolute; top:0px; left: 0px; padding:2px 4px;}div.", "lime-layer", " {position: absolute; left: 0px; top: 0px; width:0px; height:0px; border: none !important;}.", "lime-cover", " {position: absolute; left: 0px; top: 0px;}.", "lime-button", " {cursor: pointer;}");
Jc = Kc.toString();
rc(Jc);
function W() {
  this.b = [];
  this.f = k;
  this.ha = {};
  this.h = {};
  this.M = {};
  this.Zb = {};
  this.q = m;
  this.Sb = this.Bb = k;
  this.t = {};
  this.Wb(1);
  this.$(0, 0);
  this.R(0, 0);
  this.ib = 1;
  this.Ub(0.5, 0.5);
  this.w = 0;
  this.h[I] || X(this, Gc);
  this.fc = 0;
  X(this, 7);
  this.r = 1;
  Lc(this);
  Mc(this, B(this.oa[0]));
  X(this, 64)
}
w(W, V);
o = W.prototype;
o.oa = [J, C];
function Mc(a, b) {
  if(!a.j || B(a.j) != b) {
    for(var c = -1, d = 0;d < a.oa.length;d++) {
      if(B(a.oa[d]) == b) {
        c = d;
        break
      }
    }
    if(-1 != c) {
      a.j = a.oa[d];
      X(a, 64);
      for(d = 0;c = a.b[d];d++) {
        Mc(c, b)
      }
    }
  }
}
o.Na = function() {
  return!(this.f && B(this.f.j) == C)
};
function Nc(a) {
  return a.Na() ? (a.Na() ? Oc(a) : Pc(a), a) : a.f ? Nc(a.f) : k
}
function Qc(a) {
  if(!a.f || a instanceof D) {
    return[]
  }
  var b = a.f.b.indexOf(a), a = Qc(a.f);
  a.push(b);
  return a
}
function Rc(a, b) {
  if(a == b) {
    return 0
  }
  for(var c = Qc(a), d = Qc(b), e = 0;;) {
    if(c.length <= e) {
      return 1
    }
    if(d.length <= e) {
      return-1
    }
    if(c[e] == d[e]) {
      e++
    }else {
      return c[e] > d[e] ? -1 : 1
    }
  }
}
o.yb = m;
function X(a, b, c, d) {
  b && !a.k && oa(a, c, d);
  a.k |= b;
  if(64 == b) {
    for(c = 0;d = a.b[c];c++) {
      d instanceof W && X(d, 64)
    }
  }
  if(!q(a.k) || !b) {
    a.k = 0
  }
  if(b && a.na) {
    a.ld = m, X(a.na, -1)
  }
  return a
}
o.Wb = function(a, b) {
  this.m = 1 == arguments.length && ea(a) ? new L(a, a) : 2 == arguments.length ? new L(arguments[0], arguments[1]) : a;
  this.h[E] || X(this, 2)
};
o.$ = function(a, b) {
  this.g = 2 == arguments.length ? new x(arguments[0], arguments[1]) : a;
  return this.h[H] ? this : X(this, Gc)
};
function Lc(a) {
  if(k != a.e) {
    if(a.e) {
      var b = a.e;
      delete b.Ab;
      Sc(b, b.getParent());
      delete a.e.na
    }
    a.e = k;
    if(a.e) {
      Tc(a.e), a.e.na = a
    }
    X(a, 4)
  }
}
o.Ub = function(a, b) {
  this.O = 2 == arguments.length ? new L(arguments[0], arguments[1]) : a;
  X(this, Gc)
};
function Uc(a, b) {
  a.$a = b;
  X(a, Dc);
  a.ec = 0
}
o.l = aa("n");
o.R = function(a, b) {
  var c = this.n, d, e;
  d = 2 == arguments.length ? new A(arguments[0], arguments[1]) : a;
  var f = this.O;
  if(c && this.b.length) {
    for(var g = 0;g < this.b.length;g++) {
      var i = this.b[g];
      if(i.dd) {
        var l = i.fc;
        if(0 != l) {
          var s = Vc(i);
          e = c.width;
          var y = s.left + f.x * c.width, n = s.right - s.left, T = e - s.right - f.x * c.width;
          l & 1 && (e -= y);
          l & 2 && (e -= n);
          l & 4 && (e -= T);
          e != c.width && (e = (d.width - e) / (c.width - e), l & 1 && (y *= e), l & 2 && (n *= e));
          e = c.height;
          var T = s.top + f.y * c.height, F = s.bottom - s.top, s = e - s.bottom - f.y * c.height;
          l & 8 && (e -= T);
          l & 16 && (e -= F);
          l & 32 && (e -= s);
          e != c.height && (e = (d.height - e) / (c.height - e), l & 8 && (T *= e), l & 16 && (F *= e));
          l = i.O;
          i.R(n, F);
          i.$(y + l.x * n - f.x * d.width, T + l.y * F - f.y * d.height)
        }
      }
    }
  }
  this.n = d;
  return X(this, 2)
};
function Wc(a) {
  a.U || Xc(a);
  return a.U
}
function Xc(a) {
  var b = q(a.U) ? a.U : a.ib;
  a.f && a.f.U && (b = a.ib * a.f.U);
  if(b != a.U) {
    a.U = b;
    for(var b = 0, c;c = a.b[b];b++) {
      c instanceof W && Xc(c)
    }
    X(a, 2)
  }
}
o.dd = aa("fc");
o.Z = function(a) {
  return!this.q ? a : Fc(this, this.getParent().Z(a))
};
function Fc(a, b) {
  if(!a.getParent()) {
    return k
  }
  b.x -= a.g.x;
  b.y -= a.g.y;
  b.x /= a.m.x;
  b.y /= a.m.y;
  if(0 != a.w) {
    var c = b.c(), d = a.w * Math.PI / 180, e = Math.cos(d), d = Math.sin(d);
    b.x = e * c.x - d * c.y;
    b.y = e * c.y + d * c.x
  }
  return b
}
o.eb = function(a) {
  return!this.q ? a : this.getParent().eb(ya(this, a))
};
function ya(a, b) {
  if(!a.getParent()) {
    return b
  }
  var c = b.c();
  if(0 != a.w) {
    var d = -a.w * Math.PI / 180, e = Math.cos(d), d = Math.sin(d);
    c.x = e * b.x - d * b.y;
    c.y = e * b.y + d * b.x
  }
  c.x *= a.m.x;
  c.y *= a.m.y;
  c.x += a.g.x;
  c.y += a.g.y;
  return c
}
function Ec(a, b, c) {
  return!a.q ? b : c.Z(a.eb(b))
}
function Yc(a, b) {
  a.r = b;
  var c = a.$a;
  0 == a.r && !c ? (Uc(a, j), a.ec = 1) : 0 != a.r && c && a.ec && Uc(a, m);
  if(q(a.h[Bc])) {
    return a
  }
  X(a, Cc);
  return a
}
function Oc(a) {
  function b() {
    this.a = this.s = this.F = bc(c);
    this.Va && Sb(this.a, this.Va);
    this.k |= -1
  }
  var c = B(a.j) == C ? "canvas" : "div";
  if(a.a) {
    if(a.a.tagName.toLowerCase() != c) {
      var d = a.s;
      b.call(a);
      d.parentNode && d.parentNode.replaceChild(a.s, d)
    }
  }else {
    b.call(a)
  }
}
function Pc(a) {
  a.s && (hc(a.s), delete a.a, delete a.s, delete a.F)
}
o.ra = function() {
  this.k &= -65;
  this.Na() ? Oc(this) : Pc(this);
  if(this.f && this.f.k & 64) {
    this.f.ra()
  }else {
    if(this.Na()) {
      for(var a = 0, b;b = this.b[a];a++) {
        b instanceof W && b.ra()
      }
      this.j.ra.call(this)
    }
  }
};
o.update = function(a) {
  var b, c, a = a || 0;
  v(this);
  this.k & 64 && this.ra();
  var d = B(this.j) == J || a;
  if(d) {
    for(var e in this.Zb) {
      delete this.h[e], delete this.M[e], b = parseInt(e, 10) == Bc ? "opacity" : tc, yc(this.a, b), this.a != this.F && yc(this.Jd, b)
    }
    b = 0;
    for(e in this.ha) {
      c = this.ha[e], c[3] || (c[3] = 1, e == H && this.ud != this.g && (X(this, Gc, 0, j), b = 1), e == E && this.xd != this.m && (X(this, 2, 0, j), b = 1), e == Bc && this.rd != this.r && (X(this, Cc, 0, j), b = 1), e == I && this.wd != this.w && (X(this, 128, 0, j), b = 1))
    }
    if(!b) {
      for(e in this.ha) {
        c = this.ha[e];
        b = parseInt(e, 10) == Bc ? "opacity" : tc;
        if(B(this.j) == J || "opacity" != b) {
          this.h[e] = c[0], xc(this.a, b, c[1], c[2]), this.a != this.F && b == tc && xc(this.F, b, c[1], c[2])
        }
        delete this.ha[e]
      }
    }
    this.ud = this.g;
    this.xd = this.m;
    this.rd = this.r;
    this.wd = this.w;
    this.Zb = {}
  }
  if(a) {
    this.j.$c.call(this)
  }else {
    if(B(this.j) == C) {
      c = Nc(this);
      c.kb = 1;
      if(c == this && this.k == Gc && !this.e) {
        c.kb = 0
      }
      oa(Nc(this), 1)
    }
    this.j.update.call(this)
  }
  if(d) {
    for(e in this.h) {
      this.h[e] && (this.M[e] = j)
    }
  }
  if(this.ja) {
    for(e = 0;e < this.ja.length;e++) {
      X(this.ja[e], 7)
    }
  }
  X(this, 0, a)
};
o.getParent = function() {
  return this.f ? this.f : k
};
o.appendChild = function(a, b) {
  a instanceof W && a.getParent() ? a.getParent().removeChild(a) : a.parentNode && hc(a);
  a.f = this;
  b == h ? this.b.push(a) : Pa(this.b, b, 0, a);
  B(this.j) != J && Mc(a, B(this.j));
  a instanceof W && (Xc(a), this.q && Zc(a));
  return X(this, 64)
};
o.removeChild = function(a) {
  a = this.b.indexOf(a);
  if(0 <= a && this.b.length > a) {
    var b = 0 <= a && this.b.length > a ? this.b[a] : k;
    b.na && Lc(b.na);
    b instanceof W ? (this.q && $c(b), Pc(b), b.f = k) : hc(b);
    this.b.splice(a, 1);
    a = X(this, 64)
  }else {
    a = this
  }
  return a
};
o.addEventListener = function(a) {
  Mb && "mouse" == a.substring(0, 5) || (q(this.t[a]) || (this.t[a] = [0, 0]), this.q && 0 == this.t[a][0] && (this.t[a][0] = 1, this.A().ua.lb(this, a)), this.t[a][1]++)
};
o.removeEventListener = function(a) {
  Mb && "mouse" == a.substring(0, 5) || (this.q && 1 == this.t[a][1] && (this.t[a][0] = 0, this.A().ua.mb(this, a)), this.t[a][1]--, this.t[a][1] || delete this.t[a])
};
o.A = function() {
  return!this.q ? k : this.Bb
};
o.Za = function() {
  return!this.q ? k : this.Sb
};
function $c(a) {
  var b;
  a.Ab || Sc(a, a.getParent());
  for(var c = 0;b = a.b[c];c++) {
    b instanceof W && $c(b)
  }
  for(var d in a.t) {
    a.t[d][0] = 0;
    if(!a.A()) {
      debugger
    }
    a.A().ua.mb(a, d)
  }
  ad(a.A().ua, a);
  a.q = m;
  a.Bb = k;
  a.Sb = k
}
function Zc(a) {
  a.q = j;
  a.Bb = a.f.A();
  a.Sb = a.f.Za();
  for(var b = 0, c;c = a.b[b];b++) {
    c instanceof W && Zc(c)
  }
  for(var d in a.t) {
    a.t[d][0] = 1, a.A().ua.lb(a, d)
  }
  a.Ab && Tc(a);
  ad(a.A().ua, a)
}
function Tc(a) {
  a.Ab = j;
  a.q && bd(a, a.getParent())
}
function bd(a, b) {
  if(!b.ja) {
    b.ja = []
  }
  Ka(b.ja, a);
  !b && !(b.getParent() instanceof D) && bd(a, b.getParent())
}
function Sc(a, b) {
  b && b.ja && (La(b.ja, a), Sc(a, b.getParent()))
}
function G(a) {
  var b = a.l(), a = a.O;
  return new z(-b.height * a.y, b.width * (1 - a.x), b.height * (1 - a.y), -b.width * a.x)
}
function Vc(a, b) {
  var c = b || G(a), d = new x(c.left, c.top), e = new x(c.right, c.top), f = new x(c.left, c.bottom), c = new x(c.right, c.bottom), d = ya(a, d), e = ya(a, e), f = ya(a, f), c = ya(a, c);
  return new z(Math.floor(Math.min(d.y, e.y, f.y, c.y)), Math.ceil(Math.max(d.x, e.x, f.x, c.x)), Math.ceil(Math.max(d.y, e.y, f.y, c.y)), Math.floor(Math.min(d.x, e.x, f.x, c.x)))
}
o.hb = function() {
  var a = G(this);
  a.left == a.right && this.b.length && (a = Vc(this.b[0], this.b[0].hb()));
  for(var b = 0, c;c = this.b[b];b++) {
    if(1 != c.Jb) {
      var d = a;
      c = Vc(c, c.hb());
      d.left = Math.min(d.left, c.left);
      d.top = Math.min(d.top, c.top);
      d.right = Math.max(d.right, c.right);
      d.bottom = Math.max(d.bottom, c.bottom)
    }
  }
  return a
};
o.ba = function(a) {
  this.Zb[a] = 1
};
o.Ka = function(a) {
  var b = this.Z(a.V);
  return G(this).contains(b) ? (a.position = b, j) : m
};
function cd(a, b) {
  Ka(b.pa, a);
  b.play()
}
;function dd() {
  W.call(this);
  this.Va = "lime-layer"
}
w(dd, W);
dd.prototype.Ka = function(a) {
  for(var b = 0, c;c = this.b[b];b++) {
    if(c.Ka(a)) {
      return a.position = this.Z(a.V), j
    }
  }
  return m
};
var Y = new function() {
  this.L = [];
  this.ta = m;
  this.Ac = 0;
  this.Db = 1E3 / 30;
  this.ma = 0
};
function ed(a, b) {
  this.o = this.Gc = a;
  this.Kb = q(b) ? b : -1;
  this.da = []
}
ed.prototype.za = function(a) {
  if(this.da.length) {
    if(this.o > a) {
      this.o -= a
    }else {
      var b = this.Gc + a - this.o;
      this.o = this.Gc - (a - this.o);
      if(0 > this.o) {
        this.o = 0
      }
      for(var c, a = this.da.length;0 <= --a;) {
        (c = this.da[a]) && c[0] && u(c[1]) && c[1].call(c[2], b)
      }
      -1 != this.Kb && (this.Kb--, 0 == this.Kb && Y.Qc(c[1], c[2]))
    }
  }
};
Y.L.push(new ed(0));
Y.ac = p.mozRequestAnimationFrame || p.webkitRequestAnimationFrame;
Y.Ld = aa("Db");
Y.Sd = function(a) {
  this.Db = a;
  this.ta && (Y.pc(), Y.bc())
};
Y.Tb = function(a, b, c) {
  c = q(c) ? c : this.L[0];
  Ka(c.da, [1, a, b]);
  Ka(this.L, c);
  this.ta || Y.bc()
};
Y.Qc = function(a, b) {
  for(var c = this.L.length;0 <= --c;) {
    for(var d = this.L[c], e = d.da, f, g = e.length;0 <= --g;) {
      f = e[g], f[1] == a && f[2] == b && La(e, f)
    }
    0 == e.length && 0 != c && La(this.L, d)
  }
  1 == this.L.length && 0 == this.L[0].da.length && Y.pc()
};
Y.bc = function() {
  if(!this.ta) {
    this.ma = la(), Y.ac ? p.mozRequestAnimationFrame ? (p.mozRequestAnimationFrame(), this.hc = ka(Y.Tc, this), p.addEventListener("MozBeforePaint", this.hc, m)) : (this.ub = ka(Y.Rc, this), p.webkitRequestAnimationFrame(this.ub)) : this.Ac = setInterval(ka(Y.Ed, this), Y.Db), this.ta = j
  }
};
Y.pc = function() {
  if(this.ta) {
    Y.ac ? p.mozRequestAnimationFrame ? p.removeEventListener("MozBeforePaint", this.hc, m) : p.webkitCancelRequestAnimationFrame(this.ub) : clearInterval(this.Ac), this.ta = m
  }
};
Y.Rc = function(a) {
  a || (a = la());
  Y.Cb(a - this.ma);
  this.ma = a;
  p.webkitRequestAnimationFrame(this.ub)
};
Y.Tc = function(a) {
  Y.Cb(a.timeStamp - this.ma);
  this.ma = a.timeStamp;
  p.mozRequestAnimationFrame()
};
Y.Ed = function() {
  var a = la(), b = a - this.ma;
  0 > b && (b = 1);
  Y.Cb(b);
  this.ma = a
};
Y.Cb = function(a) {
  for(var b = this.L.length;0 <= --b;) {
    this.L[b].za(a)
  }
  if(1 == na && /Firefox\/4./.test(Xa()) && !ma.Id) {
    Y.Ic ? (document.body.style.MozTransform = "", Y.Ic = 0) : (document.body.style.MozTransform = "scale(1,1)", Y.Ic = 1), na = 0
  }
};
Y.Xc = function(a) {
  for(var b, c, d, e, f = this.L.length;0 <= --f;) {
    b = this.L[f];
    for(e = b.da.length;0 <= --e;) {
      d = b.da[e], c = d[2], u(c.A) && (c = c.A(), c == a && (d[0] = j))
    }
  }
};
Y.Wc = function(a, b) {
  Y.yd(a, b)
};
Y.yd = function(a, b) {
  Y.Tb(a, b, new ed(100, 1))
};
var fd;
function Z() {
  this.pa = [];
  this.Ib = [];
  this.qb = {};
  this.Md = m;
  this.p = 1;
  this.Xa = gd;
  this.C = 0
}
w(Z, V);
o = Z.prototype;
o.scope = "";
o.Q = function(a) {
  this.p = a;
  return this
};
o.play = function() {
  this.Rb = 0;
  this.tc = this.C = 1;
  Y.Tb(this.za, this);
  this.dispatchEvent({type:"start"})
};
o.stop = function() {
  if(0 != this.C) {
    var a = this.Ib;
    if(hd(this) && this.ba) {
      for(var b = a.length;0 <= --b;) {
        this.ba(a[b])
      }
    }
    this.Ib = [];
    this.qb = {};
    this.C = 0;
    Y.Qc(this.za, this);
    this.dispatchEvent({type:"stop"})
  }
};
o.gb = function() {
  return{}
};
function id(a, b) {
  var c = v(b);
  q(a.qb[c]) || (a.La(b), a.qb[c] = a.gb(b));
  return a.qb[c]
}
o.La = function(a) {
  jd.lb(this, a);
  this.C = 1;
  Ka(this.Ib, a);
  this.Xb && !this.Nc && this.Ua && this.Ua()
};
o.A = function() {
  return this.pa[0] ? this.pa[0].A() : k
};
o.za = function(a) {
  this.Xb && !this.Nc && this.Ua && this.Ua();
  this.tc && (delete this.tc, a = 1);
  this.Rb += a;
  this.Kd = a;
  a = this.Rb / (1E3 * this.p);
  if(isNaN(a) || 1 <= a) {
    a = 1
  }
  a = this.ia(a, this.pa);
  1 == a && this.stop()
};
o.ia = function(a, b) {
  a = this.Xa[0](a);
  isNaN(a) && (a = 1);
  for(var c = b.length;0 <= --c;) {
    this.update(a, b[c])
  }
  return a
};
function hd(a) {
  return 0 < a.p && wc && a.sd && !Kb && !N
}
var jd = new function() {
  this.d = {}
};
jd.lb = function(a, b) {
  if(a.scope.length) {
    var c = v(b);
    q(this.d[c]) || (this.d[c] = {});
    q(this.d[c][a.scope]) && this.d[c][a.scope].stop();
    this.d[c][a.scope] = a
  }
};
jd.Ud = function(a) {
  a = v(a);
  if(q(this.d[a])) {
    for(var b in this.d[a]) {
      this.d[a][b].stop(), delete this.d[a][b]
    }
  }
};
(function() {
  function a(a) {
    var e, f, g, n;
    for(g = a, f = 0;8 > f;f++) {
      n = ((b * g + c) * g + d) * g - a;
      if(5.0E-5 > (0 <= n ? n : 0 - n)) {
        return g
      }
      e = (3 * b * g + 2 * c) * g + d;
      if(1.0E-6 > (0 <= e ? e : 0 - e)) {
        break
      }
      g -= n / e
    }
    e = 0;
    f = 1;
    g = a;
    if(g < e) {
      return e
    }
    if(g > f) {
      return f
    }
    for(;e < f;) {
      n = ((b * g + c) * g + d) * g;
      if(5.0E-5 > (0 <= n - a ? n - a : 0 - (n - a))) {
        break
      }
      a > n ? e = g : f = g;
      g = 0.5 * (f - e) + e
    }
    return g
  }
  var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
  fd = function(i, l, s, y) {
    return[function(n) {
      d = 3 * i;
      c = 3 * (s - i) - d;
      b = 1 - d - c;
      g = 3 * l;
      f = 3 * (y - l) - g;
      e = 1 - g - f;
      return((e * a(n) + f) * a(n) + g) * a(n)
    }, i, l, s, y]
  }
})();
var gd = fd(0.42, 0, 0.58, 1);
function kd() {
}
w(kd, V);
kd.prototype.zc = ba;
function ld(a) {
  if(a[0] instanceof kd) {
    return a[0]
  }
  r(a) || (a = Oa(arguments));
  return 2 < a.length ? new md(a) : t(a[0]) && ("rgb(" == a[0].substring(0, 4) || "rgba(" == a[0].substring(0, 5) || "#" == a[0].substring(0, 1)) ? new md(a[0]) : new nd(a[0])
}
kd.prototype.ob = ba;
kd.prototype.nb = ba;
function md(a) {
  this.Ea = 1;
  this.zd(a)
}
w(md, kd);
o = md.prototype;
o.id = "color";
o.zd = function(a) {
  var b = a;
  if(t(a)) {
    this.Qa = a
  }else {
    2 < arguments.length && (b = arguments);
    if(3 <= b.length) {
      this.jb = b[0], this.Ya = b[1], this.Sa = b[2]
    }
    if(4 == b.length) {
      this.Ea = b[3]
    }
    this.Qa = 1 == this.Ea ? "rgb(" + this.jb + "," + this.Ya + "," + this.Sa + ")" : "rgba(" + this.jb + "," + this.Ya + "," + this.Sa + "," + this.Ea + ")"
  }
};
o.ob = function(a) {
  a.style.background = this.Qa
};
o.nb = function(a) {
  a.fillStyle = this.Qa
};
o.c = function() {
  var a = new md("");
  a.jb = this.jb;
  a.Ya = this.Ya;
  a.Sa = this.Sa;
  a.Ea = this.Ea;
  a.Qa = this.Qa;
  return a
};
function nd(a) {
  a && u(a.data) && (a = a.data());
  if(t(a)) {
    this.N = a;
    if(50 < this.N.length) {
      this.N = this.N.substr(-50)
    }
    od[this.N] ? this.u = od[this.N] : (this.u = new Image, this.u.src = a)
  }else {
    this.N = a.src;
    if(50 < this.N.length) {
      this.N = this.N.substr(-50)
    }
    this.u = od[this.N] ? od[this.N] : a
  }
  pd(this) || U(this.u, "load", this.gd, m, this);
  od[this.N] = this.u
}
w(nd, kd);
var od = {};
o = nd.prototype;
o.id = "image";
o.zc = function(a) {
  var b = a.l(), c = this;
  !b.width && !b.height && (pd(this) ? a.R(this.u.width, this.u.height) : U(this, "load", function() {
    var a = this.l();
    !a.width && !a.height && this.R(c.u.width, c.u.height)
  }, m, a));
  pd(this) || U(this, "load", function() {
    X(a, 4)
  }, m, this)
};
o.gd = function(a) {
  this.dispatchEvent(a)
};
function pd(a) {
  return a.u && a.u.width && a.u.height
}
o.R = function(a, b, c) {
  ea(a) && (a = new A(a, b), b = c || m);
  this.n = a;
  this.Bd = b;
  return this
};
function qd(a, b) {
  var c = b.l().c();
  if(a.n) {
    a.Bd ? (c.width *= a.n.width, c.height *= a.n.height) : c = a.n
  }
  var d = new x(0, 0);
  if(a.Ob) {
    a.Nd ? (d.x = c.width * a.Ob.x, d.y = c.height * a.Ob.y) : d = a.Ob
  }
  return[c, d]
}
o.ob = function(a, b) {
  a.style.background = "url(" + this.u.src + ")";
  var c = qd(this, b), d = c[0], c = c[1], e = Wc(b);
  a.style[vc("BackgroundSize")] = d.width * e + "px " + d.height * e + "px";
  d = b.K ? b.K.sb : 0;
  a.style.backgroundPosition = c.x * e - d + "px " + (c.y * e - d) + "px";
  this.Rd && (a.style.imageRendering = "optimizeQuality")
};
o.nb = function(a, b) {
  var c = b.l(), d = G(b);
  if(c.width && c.height) {
    try {
      var e = this.u, f = qd(this, b), g = f[0], i = f[1], l = a.createPattern(e, "repeat"), s = g.width / e.width, y = g.height / e.height;
      a.save();
      a.translate(d.left + i.x, d.top + i.y);
      a.scale(s, y);
      a.fillStyle = l;
      a.fillRect(-i.x / s, -i.y / y, c.width / s, c.height / y);
      a.restore()
    }catch(n) {
    }
  }
};
C.z = {};
J.z = {};
function rd() {
  W.call(this);
  this.K = this.Ja = k
}
w(rd, W);
rd.prototype.id = "sprite";
rd.prototype.oa = [sa(J, J.z), sa(C, C.z)];
rd.prototype.Vb = function(a, b, c, d) {
  this.Ja = ld(Oa(arguments));
  this.Ja.zc(this);
  X(this, 4);
  return this
};
J.z.G = function(a) {
  this.Ja === k || this.Ja.ob(a, this);
  this.K === k ? a.style.border = "none" : this.K.ob(a, this)
};
C.z.G = function(a) {
  var b = this.l(), c = this.Ja, d = this.K;
  if(c || d) {
    var e = G(this);
    c && (c.nb(a, this), "image" != c.id && "frame" != c.id && a.fillRect(e.left, e.top, b.width, b.height));
    if(d && (d.nb(a, this), "sprite" == this.id || "label" == this.id)) {
      c = d.sb / 2, a.strokeRect(e.left + c, e.top + c, b.width - 2 * c, b.height - 2 * c)
    }
  }
};
function sd() {
  Z.call(this)
}
w(sd, Z);
sd.prototype.update = ba;
function td(a) {
  Z.call(this);
  var b = Oa(arguments);
  r(a) && (b = a);
  this.d = 2 < b.length ? [b.shift(), new td(b)] : b;
  this.Q(this.d[0].p + this.d[1].p)
}
w(td, Z);
td.prototype.La = function(a) {
  Z.prototype.La.call(this, a);
  this.Q(this.d[0].p + this.d[1].p);
  this.ya = this.d[0].p / this.p;
  this.ea = -1
};
td.prototype.stop = function() {
  -1 != this.ea && this.d[this.ea].stop(this.pa);
  Z.prototype.stop.apply(this, arguments)
};
td.prototype.ia = function(a, b) {
  if(0 == this.C) {
    return a
  }
  for(var c = b.length;0 <= --c;) {
    id(this, b[c])
  }
  var d = c = 0;
  a >= this.ya ? (c = 1, d = 1 == this.ya ? 1 : (a - this.ya) / (1 - this.ya)) : (c = 0, d = 0 != this.ya ? a / this.ya : 1);
  if(-1 == this.ea && 1 == c) {
    this.d[0].C = 1, this.d[0].ia(1, b), this.d[0].stop()
  }
  if(this.ea != c) {
    -1 != this.ea && (this.d[this.ea].ia(1, b), this.d[this.ea].stop()), this.d[c].C = 1
  }
  this.d[c].ia(d, b);
  this.ea = c;
  return a
};
function ud(a) {
  Z.call(this);
  var b = Oa(arguments);
  r(a) && (b = a);
  2 < b.length ? (this.va = b.shift(), this.Ba = new ud(b)) : (this.va = b[0], this.Ba = b[1]);
  var b = this.va.p, c = this.Ba.p;
  this.Q(Math.max(b, c));
  var d = new sd;
  if(b > c) {
    this.Ba = new td(this.Ba, d.Q(b - c))
  }else {
    if(b < c) {
      this.va = new td(this.va, d.Q(c - b))
    }
  }
}
w(ud, Z);
ud.prototype.La = function(a) {
  Z.prototype.La.call(this, a);
  this.va.C = 1;
  this.Ba.C = 1
};
ud.prototype.ia = function(a, b) {
  if(0 != this.C) {
    for(var c = b.length;0 <= --c;) {
      id(this, b[c])
    }
    this.va.ia(a, b);
    this.Ba.ia(a, b);
    return a
  }
};
function vd(a, b) {
  Z.call(this);
  this.m = 1 == arguments.length && ea(a) ? new L(a, a) : 2 == arguments.length ? new L(arguments[0], arguments[1]) : a
}
w(vd, Z);
vd.prototype.scope = "scale";
vd.prototype.gb = function(a) {
  var b = a.m, c = new L(this.m.x - b.x, this.m.y - b.y);
  hd(this) && (a.ha[E] = [new L(b.x + c.x, b.y + c.y), this.p, this.Xa, 0], X(a, 2));
  return{Oc:b, o:c}
};
vd.prototype.update = function(a, b) {
  if(0 != this.C) {
    var c = id(this, b);
    b.Wb(c.Oc.x + c.o.x * a, c.Oc.y + c.o.y * a)
  }
};
vd.prototype.ba = function(a) {
  hd(this) && (a.ba(E), X(a, 2))
};
function wd(a) {
  Z.call(this);
  this.r = a
}
w(wd, Z);
wd.prototype.scope = "fade";
wd.prototype.gb = function(a) {
  var b = a.r;
  hd(this) && (a.ha[Bc] = [this.r, this.p, this.Xa, 0], X(a, Cc));
  return{Dd:b, o:this.r - b}
};
wd.prototype.update = function(a, b) {
  if(0 != this.C) {
    var c = id(this, b);
    Yc(b, c.Dd + c.o * a)
  }
};
wd.prototype.ba = function(a) {
  hd(this) && (a.ba(Bc), X(a, Cc))
};
C.Da = {};
J.Da = {};
function $(a) {
  rd.call(this);
  xd(this, a);
  this.Eb = yd;
  X(this, 8);
  zd(this, 14);
  Ad(this, "#000");
  this.dc = "center";
  X(this, 8);
  this.vc = "400";
  X(this, 8);
  a = [0, 0, 0, 0];
  q(h) && (a[1] = a[3] = h);
  q(h) && (a[2] = h);
  q(h) && (a[3] = h);
  this.v = a;
  X(this, 8);
  this.kd = m;
  this.Dc = 1.15;
  this.Ad(k);
  this.Vb(255, 255, 255, 0)
}
w($, rd);
$.prototype.id = "label";
var yd = "Arial";
$.prototype.oa = [sa(J.z, J.Da), sa(C.z, C.Da)];
(function() {
  var a;
  $.prototype.measureText = function() {
    q(a) || (a = document.createElement("canvas").getContext("2d"));
    var b = Bd(this) * this.la;
    a.font = this.la + "px " + this.Eb;
    var c = a.measureText(this.qa), c = O ? c.width : c.width + 1;
    Jb && (c += 1);
    var d = this.K ? this.K.sb : 0;
    return new A(this.v[1] + this.v[3] + c + 2 * d, this.v[0] + this.v[2] + b + 2 * d)
  }
})();
$.prototype.l = function() {
  var a = W.prototype.l.call(this);
  return!a || !a.width && !a.height ? this.measureText() : a
};
function xd(a, b) {
  a.qa = b + "";
  X(a, 4);
  delete a.$b;
  return a
}
function zd(a, b) {
  a.la = b;
  X(a, 8);
  return a
}
function Ad(a, b) {
  a.uc = b;
  X(a, 8);
  return a
}
function Bd(a) {
  var b = Math.abs(a.J.y) + 2 * a.S;
  return a.kd ? (a.Dc + b) / a.la : a.Dc + b / a.la
}
$.prototype.Ad = function(a, b, c, d) {
  1 == arguments.length && a === k ? (this.Pa = "#ccc", this.S = 0, this.pb(0, 0)) : 2 == arguments.length ? (this.Pa = a, this.S = b, this.pb(new L(0, 0))) : 3 == arguments.length ? (this.Pa = a, this.S = b, this.pb(c)) : (this.Pa = a, this.S = b, this.pb(c, d));
  X(this, 8)
};
$.prototype.pb = function(a, b) {
  this.J = 2 == arguments.length ? new L(arguments[0], arguments[1]) : a;
  X(this, 8)
};
$.prototype.update = function() {
  this.k & 4 && delete this.Cc;
  W.prototype.update.apply(this, arguments)
};
J.Da.G = function(a) {
  J.z.G.call(this, a);
  var b = a.style;
  this.k & 4 && jc(a, this.qa);
  if(this.k & 8) {
    b.lineHeight = Bd(this), b.padding = Ja(this.v, function(a) {
      return a * Wc(this)
    }, this).join("px ") + "px", b.color = this.uc, b.fontFamily = this.Eb, b.fontSize = this.la * Wc(this) + "px", b.fontWeight = this.vc, b.textAlign = this.dc, b.textShadow = this.S || this.J.x || this.J.y ? this.Pa + " " + this.J.x + "px " + this.J.y + "px " + this.S + "px" : ""
  }
};
C.Da.G = function(a) {
  C.z.G.call(this, a);
  var b = G(this), c = -b.left - this.v[3] + b.right - this.v[1] + Math.abs(this.J.x) + Math.abs(2 * this.S), d = 0;
  if(!this.$b) {
    var d = [], e = this.qa.length, f = this.qa.match(N ? /[\s\.]+/g : /[\s-\.]+/g), g = 0;
    if(f) {
      for(var i = 0;i < f.length;i++) {
        var l = f[i], l = this.qa.indexOf(l, g) + l.length;
        d.push(this.qa.substring(g, l));
        g = l
      }
    }
    g != e && d.push(this.qa.substring(g, e));
    this.$b = d;
    d = 1
  }
  f = this.K ? this.K.sb : 0;
  a.save();
  e = this.dc;
  "left" == e ? a.translate(b.left + this.v[3] + f, b.top + this.v[0] + f) : "right" == e ? a.translate(b.right - this.v[1] - f, b.top + this.v[0] + f) : "center" == e && a.translate(0.5 * (b.left + this.v[3] + b.right - this.v[1]), b.top + this.v[0] + f);
  b = Bd(this);
  a.fillStyle = this.uc;
  a.font = this.vc + " " + this.la + "px/" + b + " " + this.Eb;
  a.textAlign = e;
  a.textBaseline = "top";
  if(this.S || this.J.x || this.J.y) {
    a.shadowColor = this.Pa, a.shadowOffsetX = this.J.x, a.shadowOffsetY = this.J.y, a.shadowBlur = this.S
  }
  if(d || c != this.Cc) {
    d = [];
    e = "";
    f = this.$b;
    for(i = 0;i < f.length;i++) {
      "" == e ? e = f[i] : (g = a.measureText(za(e + f[i])), g.width > c ? (d.push(za(e)), e = f[i]) : e += f[i])
    }
    d.push(e);
    this.Lb = d;
    this.Cc = c
  }
  if(this.Lb) {
    c = b * this.la;
    b = (q(this.S) ? Math.abs(this.S) : 0) + (q(this.J) ? Math.abs(this.J.y) / 2 : 0);
    c = O ? Math.floor(c) : Math.round(c);
    for(d = 0;d < this.Lb.length;d++) {
      a.fillText(this.Lb[d], 0, c * d + b - 0.5)
    }
  }
  a.restore()
};
C.Ca = {};
J.Ca = {};
function Cd() {
  rd.call(this)
}
w(Cd, rd);
Cd.prototype.id = "circle";
Cd.prototype.oa = [sa(J.z, J.Ca), sa(C.z, C.Ca)];
Cd.prototype.Ka = function(a) {
  var b = this.Z(a.V), c = this.n, d = this.O, e = 0.5 * c.width, f = 0.5 * c.height, g = b.x - c.width * (0.5 - d.x), c = b.y - c.height * (0.5 - d.y);
  return 1 > g * g / (e * e) + c * c / (f * f) ? (a.position = b, j) : m
};
J.Ca.G = function(a) {
  var b = this.l();
  J.z.G.call(this, a);
  Ac(a, 0.5 * b.width, 0.5 * b.height)
};
C.Ca.G = function(a) {
  this.l();
  var b = this.O, c = G(this), d = 0.5 * (c.right - c.left), c = 0.5 * (c.bottom - c.top);
  a.save();
  a.save();
  a.scale(d, c);
  a.translate(1 - 2 * b.x, 1 - 2 * b.y);
  a.beginPath();
  a.arc(0, 0, 1, 0, 2 * Math.PI, m);
  a.closePath();
  a.restore();
  a.clip();
  C.z.G.call(this, a);
  this.K && (a.lineWidth *= 2, a.stroke());
  a.restore()
};
function D() {
  W.call(this);
  this.Ub(0, 0);
  this.Va = "lime-scene";
  Oc(this)
}
w(D, W);
D.prototype.Za = function() {
  return this
};
D.prototype.hb = function() {
  return G(this)
};
function Dd(a, b) {
  Z.call(this);
  this.g = 2 == arguments.length ? new x(arguments[0], arguments[1]) : a
}
w(Dd, Z);
o = Dd.prototype;
o.scope = "move";
o.gb = function(a) {
  var b = a.g, c = new x(this.g.x - b.x, this.g.y - b.y);
  hd(this) && (a.ha[H] = [this.g, this.p, this.Xa, 0], X(a, Gc));
  return{Pc:b, o:c}
};
o.Ua = function() {
  if(this.Xb && this.pa.length) {
    var a = this.pa[0].g, b = new x(this.g.x - a.x, this.g.y - a.y), c = new x(0, 0), a = b.x - c.x, b = b.y - c.y;
    this.Q(this.Xb * Math.sqrt(a * a + b * b) / 100);
    this.Nc = 1
  }
};
o.update = function(a, b) {
  if(0 != this.C) {
    var c = id(this, b);
    b.$(c.Pc.x + c.o.x * a, c.Pc.y + c.o.y * a)
  }
};
o.ba = function(a) {
  hd(this) && (a.ba(H), X(a, Gc))
};
function Ed() {
  D.call(this);
  this.a.style.cssText = "background:rgba(255,255,255,.8)"
}
w(Ed, D);
function Fd(a, b, c, d) {
  this.target = d || a.ga;
  this.W = [];
  this.H = -1;
  this.y = this.x = 0;
  if(!b) {
    b = this.target.eb(new x(0, 0)), this.x = a.V.x - b.x, this.y = a.V.y - b.y
  }
  a.Ra(["touchmove", "mousemove"], ka(this.qd, this));
  a.Ra(["touchend", "touchcancel", "mouseup"], ka(this.vd, this));
  this.Vc = c || k;
  this.dispatchEvent(new Q(Gd))
}
w(Fd, V);
var Gd = "start";
Fd.prototype.T = function() {
  Fd.Aa.T.call(this);
  this.W = this.target = this.X = k
};
Fd.prototype.wc = aa("Vc");
Fd.prototype.qd = function(a) {
  a = a.V.c();
  a.x -= this.x;
  a.y -= this.y;
  var a = this.target.getParent().Z(a), b = this.wc();
  if(b != k) {
    if(a.x < b.left) {
      a.x = b.left
    }else {
      if(a.x > b.right) {
        a.x = b.right
      }
    }
    if(a.y < b.top) {
      a.y = b.top
    }else {
      if(a.y > b.bottom) {
        a.y = b.bottom
      }
    }
  }
  this.target.$(a);
  this.dispatchEvent(new Q("move"));
  for(var a = -1, b = Pb(G(this.target)), c = [], d = 0;d < this.W.length;d++) {
    var e = this.W[d];
    if(!u(e.Yc) || e.Yc(this.target)) {
      var f = G(e), g = Ec(e, new x(f.left, f.top), this.target), e = Ec(e, new x(f.right, f.bottom), this.target), g = Pb(new z(Math.min(g.y, e.y), Math.max(g.x, e.x), Math.max(g.y, e.y), Math.min(e.x, g.x)));
      (e = Qb(b, g)) && c.push([e.width * e.height / (g.width * g.height), d])
    }
  }
  c.length && (c = c.sort(function(a, b) {
    return b[0] - a[0]
  }), a = c[0][1]);
  if(a != this.H) {
    -1 != this.H && u(this.W[this.H].xc) && this.W[this.H].xc(), this.H = a, -1 != this.H && u(this.W[this.H].Mc) && this.W[this.H].Mc(), a = new Q("change"), a.Ga = -1 != this.H ? this.W[this.H] : k, this.dispatchEvent(a)
  }
};
Fd.prototype.vd = function() {
  if(-1 != this.H) {
    var a = new Q("drop");
    a.Ga = this.W[this.H];
    u(a.Ga.Mc) && a.Ga.xc();
    this.dispatchEvent(a);
    if(!a.Y) {
      var b = Ec(a.Ga.getParent(), a.Ga.g, this.target.getParent()), b = (new Dd(b)).Q(0.5);
      b.sd = q(h) ? h : j;
      cd(this.target, b);
      u(a.pd) && U(b, "stop", a.pd, m, this.target)
    }
  }else {
    this.dispatchEvent(new Q("cancel"))
  }
  this.dispatchEvent(new Q("end"));
  Y.Wc(this.Ia, this)
};
function Hd(a) {
  this.Ha = a;
  this.identifier = 0
}
Hd.prototype.Ra = function(a, b, c) {
  for(var a = r(a) ? a : [a], d = 0;d < a.length;d++) {
    this.Ha.Ra(this, a[d], b)
  }
  c && this.event.stopPropagation()
};
Hd.prototype.mb = function(a) {
  var b = q(a), c = r(a) ? a : [a];
  if(a = this.Ha.fa[this.identifier]) {
    var d = this, a = Ia(a, function(a) {
      return!q(d.ga) || a[0] == d.ga && (!b || 0 <= Ga(c, a[1])) ? (Cb(a[0], a[1], a[2]), m) : j
    });
    a.length ? this.Ha.fa[this.identifier] = a : delete this.Ha.fa[this.identifier]
  }
};
Hd.prototype.c = function() {
  var a = new Hd(this.Ha);
  ta(a, this);
  return a
};
function Id(a) {
  this.ka = a;
  this.B = {};
  this.fa = {}
}
Id.prototype.lb = function(a, b) {
  q(this.B[b]) ? 0 <= Ga(this.B[b], a) || (this.B[b].push(a), this.B[b].sort(Rc)) : (this.B[b] = [a], U("touch" == b.substring(0, 5) && a != this.ka ? document : "key" == b.substring(0, 3) ? window : this.ka.a.parentNode, b, this, m, this))
};
Id.prototype.mb = function(a, b) {
  q(this.B[b]) && (La(this.B[b], a), this.B[b].length || (Cb(this.ka.a.parentNode, b, this, m, this), delete this.B[b]))
};
function ad(a, b) {
  for(var c in a.B) {
    var d = a.B[c];
    0 <= Ga(d, b) && d.sort(Rc)
  }
}
Id.prototype.Ra = function(a, b, c) {
  var d = a.identifier;
  q(this.fa[d]) || (this.fa[d] = []);
  this.fa[d].push([a.ga, b, c]);
  U(a.ga, b, ba)
};
Id.prototype.handleEvent = function(a) {
  if(q(this.B[a.type])) {
    for(var b = this.B[a.type].slice(), c = m, d = 0, e = 0;!e;) {
      var f = new Hd(this);
      f.type = a.type;
      f.event = a;
      if("touch" == a.type.substring(0, 5)) {
        var g = a.X.changedTouches[d];
        f.V = new x(g.pageX, g.pageY);
        f.identifier = g.identifier;
        d++;
        d >= a.X.changedTouches.length && (e = 1)
      }else {
        f.V = new x(a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, a.clientY + document.body.scrollTop + document.documentElement.scrollTop), e = 1
      }
      if(q(this.fa[f.identifier])) {
        for(var g = this.fa[f.identifier], i = 0;i < g.length;i++) {
          if(g[i][1] == a.type || r(g[i][1]) && 0 <= Ga(g[i][1], a.type)) {
            var l = g[i][0];
            f.ga = l;
            f.position = l.Z(f.V);
            g[i][2].call(l, f);
            c = j
          }
        }
        if("touchend" == a.type || "touchcancel" == a.type || "mouseup" == a.type || "keyup" == a.type) {
          delete f.ga, f.mb()
        }
      }else {
        for(i = 0;i < b.length;i++) {
          if(l = b[i], !((this.ka.i.length ? this.ka.i[this.ka.i.length - 1] : k) != l.Za() && l != this.ka) && !l.$a && l.q) {
            if(f.ga = l, l.Ka(f) || "key" == a.type.substring(0, 3)) {
              if(f.ga = l, l.dispatchEvent(f), c = j, f.event.Y) {
                break
              }
            }
          }
        }
      }
    }
    c && a.preventDefault()
  }
};
function Jd(a) {
  this.sa = a || window;
  this.cb = U(this.sa, "resize", this.ed, m, this);
  this.n = ac(this.sa || window);
  if(O && db || $a && this.sa.self != this.sa.top) {
    this.tb = window.setInterval(ka(this.kc, this), Kd)
  }
}
w(Jd, V);
var Kd = 500;
o = Jd.prototype;
o.cb = k;
o.sa = k;
o.n = k;
o.tb = k;
o.l = function() {
  return this.n ? this.n.c() : k
};
o.T = function() {
  Jd.Aa.T.call(this);
  if(this.cb) {
    Db(this.cb), this.cb = k
  }
  if(this.tb) {
    window.clearInterval(this.tb), this.tb = k
  }
  this.n = this.sa = k
};
o.ed = function() {
  this.kc()
};
o.kc = function() {
  var a = ac(this.sa || window);
  if(!(a == this.n || (!a || !this.n ? 0 : a.width == this.n.width && a.height == this.n.height))) {
    this.n = a, this.dispatchEvent("resize")
  }
};
function Ld(a, b) {
  this.p = 1;
  this.Pd = a;
  this.yc = b;
  this.bd = m
}
w(Ld, V);
Ld.prototype.Q = function(a) {
  this.p = a;
  return this
};
Ld.prototype.start = function() {
  this.yc.$(new x(0, 0));
  Uc(this.yc, m);
  this.finish()
};
Ld.prototype.finish = function() {
  this.dispatchEvent(new Q("end"));
  this.bd = j
};
function Md(a, b, c) {
  W.call(this);
  this.q = j;
  this.Ub(0, 0);
  this.i = [];
  this.nc = [];
  this.Va = "lime-director";
  Oc(this);
  a.appendChild(this.a);
  if(O && ab) {
    this.mc = document.createElement("div"), Sb(this.mc, "lime-cover-below"), fc(this.mc, this.a), this.lc = document.createElement("div"), Sb(this.lc, "lime-cover-above"), gc(this.lc, this.a)
  }
  "absolute" != a.style.position && (a.style.position = "relative");
  a.style.overflow = "hidden";
  if(a == document.body) {
    rc("html,body{margin:0;padding:0;height:100%;}");
    var d = document.createElement("meta");
    d.name = "viewport";
    var e = "width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1.0,user-scalable=no";
    /android/i.test(navigator.userAgent) && (e += ",target-densityDpi=device-dpi");
    d.content = e;
    document.getElementsByTagName("head").item(0).appendChild(d);
    if(ab && !p.navigator.Cd) {
      var f = this;
      setTimeout(function() {
        window.scrollTo(0, 0);
        f.bb()
      }, 100)
    }
  }
  var g, a = pc(a);
  this.R(new A(g = b || a.width || 400, c || a.height * g / a.width || 400));
  if(!this.qc) {
    this.Fa = this.Gb = 0, this.Fb = bc("div"), Sb(this.Fb, "lime-fps"), this.a.parentNode.appendChild(this.Fb)
  }
  this.qc = j;
  this.hd = m;
  Y.Xc(this);
  if(this.hd) {
    this.Qb = new (this.Qd || Ed), Nd(this, this.Qb)
  }else {
    if(this.Qb) {
      if(this.i.length) {
        $c(this.i[this.i.length - 1]), this.i[this.i.length - 1].f = k, hc(this.i[this.i.length - 1].a), this.i.pop()
      }
      delete this.Qb
    }
  }
  b = new Jd;
  U(b, "resize", this.bb, m, this);
  U(p, "orientationchange", this.bb, m, this);
  Y.Tb(this.za, this);
  this.ua = new Id(this);
  U(this, ["touchmove", "touchstart"], function(a) {
    a.event.preventDefault()
  }, m, this);
  U(this, ["mouseup", "touchend", "mouseout", "touchcancel"], function() {
  }, m);
  this.bb();
  U(p, "keyup", this.jd, m, this)
}
w(Md, W);
o = Md.prototype;
o.A = function() {
  return this
};
o.Za = function() {
  return k
};
o.za = function(a) {
  if(this.qc && (this.Gb++, this.Fa += a, 100 < this.Fa)) {
    this.cd = 1E3 * this.Gb / this.Fa, jc(this.Fb, this.cd.toFixed(2)), this.Fa = this.Gb = 0
  }
  pa()
};
function Od(a, b) {
  b.R(a.l().c());
  var c = k;
  a.i.length && (c = a.i[a.i.length - 1]);
  for(var d = [], e = a.i.length;0 <= --e;) {
    $c(a.i[e]), d.push(a.i[e].a), a.i[e].f = k
  }
  a.i.length = 0;
  a.i.push(b);
  b.a.style.display = "none";
  a.a.appendChild(b.a);
  b.f = a;
  Zc(b);
  c = new Ld(c, b);
  U(c, "end", function() {
    for(var a = d.length;0 <= --a;) {
      hc(d[a])
    }
  }, m, a);
  q(h) && c.Q(h);
  c.start()
}
o.ra = function() {
  this.k &= -65
};
function Nd(a, b) {
  b.R(a.l().c());
  a.i.push(b);
  a.a.appendChild(b.a);
  b.f = a;
  Zc(b)
}
o.wc = function(a) {
  var b = this.g, c = this.m;
  return new z(a.top - b.y / c.y, a.right - b.x / c.x, a.bottom - b.y / c.y, a.left - b.x / c.x)
};
o.Z = function(a) {
  a = a.c();
  a.x -= this.Wa.x + this.g.x;
  a.y -= this.Wa.y + this.g.y;
  a.x /= this.m.x;
  a.y /= this.m.y;
  return a
};
o.eb = function(a) {
  a = a.c();
  a.x *= this.m.x;
  a.y *= this.m.y;
  a.x += this.Wa.x + this.g.x;
  a.y += this.Wa.y + this.g.y;
  return a
};
o.update = function() {
  W.prototype.update.call(this);
  for(var a = this.nc.length;0 <= --a;) {
    this.nc[a].update()
  }
};
o.bb = function() {
  var a = pc(this.a.parentNode);
  if(this.a.parentNode == document.body && (window.scrollTo(0, 0), ea(window.innerHeight))) {
    a.height = window.innerHeight
  }
  var b;
  b = this.l().c();
  b = b.scale(b.width / b.height > a.width / a.height ? a.width / b.width : a.height / b.height);
  this.Wb(b.width / this.l().width);
  a.width / a.height < b.width / b.height ? this.$(0, (a.height - b.height) / 2) : this.$((a.width - b.width) / 2, 0);
  var c = this.a.parentNode, d, e = Wb(c), f = kc(c, "position"), g = N && e.getBoxObjectFor && !c.getBoundingClientRect && "absolute" == f && (d = e.getBoxObjectFor(c)) && (0 > d.screenX || 0 > d.screenY);
  b = new x(0, 0);
  var i;
  d = e ? 9 == e.nodeType ? e : Wb(e) : document;
  if(i = M) {
    if(i = !nb(9)) {
      i = Ub(d), i = !Yb(i.ca)
    }
  }
  i = i ? d.body : d.documentElement;
  if(c != i) {
    if(c.getBoundingClientRect) {
      d = lc(c), e = Ub(e).ca, c = !O && Yb(e) ? e.documentElement : e.body, e = e.parentWindow || e.defaultView, c = new x(e.pageXOffset || c.scrollLeft, e.pageYOffset || c.scrollTop), b.x = d.left + c.x, b.y = d.top + c.y
    }else {
      if(e.getBoxObjectFor && !g) {
        d = e.getBoxObjectFor(c), c = e.getBoxObjectFor(i), b.x = d.screenX - c.screenX, b.y = d.screenY - c.screenY
      }else {
        d = c;
        do {
          b.x += d.offsetLeft;
          b.y += d.offsetTop;
          d != c && (b.x += d.clientLeft || 0, b.y += d.clientTop || 0);
          if(O && "fixed" == kc(d, "position")) {
            b.x += e.body.scrollLeft;
            b.y += e.body.scrollTop;
            break
          }
          d = d.offsetParent
        }while(d && d != c);
        if($a || O && "absolute" == f) {
          b.y -= e.body.offsetTop
        }
        for(d = c;(d = mc(d)) && d != e.body && d != i;) {
          if(b.x -= d.scrollLeft, !$a || "TR" != d.tagName) {
            b.y -= d.scrollTop
          }
        }
      }
    }
  }
  this.Wa = b;
  if(ab && this.a.parentNode == document.body) {
    if(this.Jc) {
      b = this.Jc, hc(b.ownerNode || b.owningElement || b)
    }
    this.Jc = rc("html{height:" + (a.height + 120) + "px;overflow:hidden;}")
  }
};
function Pd(a) {
  var b = document.createElement("meta");
  b.name = "apple-mobile-web-app-capable";
  b.content = "yes";
  document.getElementsByTagName("head").item(0).appendChild(b);
  b = document.createElement("meta");
  b.name = "apple-mobile-web-app-status-bar-style";
  b.content = "black";
  document.getElementsByTagName("head").item(0).appendChild(b);
  b = m;
  q(localStorage) && (b = localStorage.getItem("_lime_visited"));
  /(ipod|iphone|ipad)/i.test(navigator.userAgent) && !window.navigator.Cd && !b && a.a.parentNode == document.body && (alert("Please install this page as a web app by clicking Share + Add to home screen."), q(localStorage) && localStorage.setItem("_lime_visited", j))
}
o.jd = function(a) {
  if(a.altKey && "d" == String.fromCharCode(a.keyCode).toLowerCase()) {
    if(this.zb) {
      var b = this.zb;
      hc(b.ownerNode || b.owningElement || b);
      this.zb = k
    }else {
      this.zb = rc(".lime-scene div,.lime-scene img,.lime-scene canvas{border: 1px solid #c00;}")
    }
    a.stopPropagation();
    a.preventDefault()
  }
};
o.Ka = function(a) {
  if(a && a.V) {
    a.position = this.Z(a.V)
  }
  return j
};
function Qd() {
  var a = new Md(document.body, 1024, 768), b = new D, c = (new dd).$(512, 384), d = (new Cd).R(150, 150).Vb(255, 150, 0), e = xd(zd((new $).R(160, 50), 30), "TOUCH ME!"), f = Ad(Yc(xd(zd((new $).R(800, 70), 60), "Now move me around!"), 0).$(512, 80), "#999").Vb(200, 100, 0, 0.1);
  c.appendChild(d);
  c.appendChild(e);
  b.appendChild(c);
  b.appendChild(f);
  Pd(a);
  U(c, ["mousedown", "touchstart"], function(a) {
    cd(c, new ud((new wd(0.5)).Q(0.2), (new vd(1.5)).Q(0.8)));
    cd(f, new wd(1));
    new Fd(a, h, h, h);
    a.Ra(["mouseup", "touchend"], function() {
      cd(c, new ud(new wd(1), new vd(1), new Dd(512, 384)));
      cd(f, new wd(0))
    })
  });
  Od(a, b)
}
var Rd = "gametime.start".split("."), Sd = p;
!(Rd[0] in Sd) && Sd.execScript && Sd.execScript("var " + Rd[0]);
for(var Td;Rd.length && (Td = Rd.shift());) {
  !Rd.length && q(Qd) ? Sd[Td] = Qd : Sd = Sd[Td] ? Sd[Td] : Sd[Td] = {}
}
;
