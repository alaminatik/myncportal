/*!
 * TinyMCE
 *
 * Copyright (c) 2023 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 5.10.9
 */
!(function () {
    "use strict";
    function r(e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        var t = typeof e;
        return "object" == t && (Array.prototype.isPrototypeOf(e) || (e.constructor && "Array" === e.constructor.name))
            ? "array"
            : "object" == t && (String.prototype.isPrototypeOf(e) || (e.constructor && "String" === e.constructor.name))
            ? "string"
            : t;
    }
    function f(o) {
        return m(function (e, t) {
            if (e.length !== t.length) return !1;
            for (var n = e.length, r = 0; r < n; r++) if (!o.eq(e[r], t[r])) return !1;
            return !0;
        });
    }
    function d(l) {
        return m(function (e, t) {
            var n,
                r,
                o,
                i = Object.keys(e),
                a = Object.keys(t);
            if (
                ((r = f(g)),
                (o = function (e) {
                    return (t = n), Array.prototype.slice.call(e).sort(t);
                    var t;
                }),
                !m(function (e, t) {
                    return r.eq(o(e), o(t));
                }).eq(i, a))
            )
                return !1;
            for (var u = i.length, s = 0; s < u; s++) {
                var c = i[s];
                if (!l.eq(e[c], t[c])) return !1;
            }
            return !0;
        });
    }
    function e(r) {
        return function (e) {
            return (
                (n = typeof (t = e)),
                (null === t
                    ? "null"
                    : "object" == n && (Array.prototype.isPrototypeOf(t) || (t.constructor && "Array" === t.constructor.name))
                    ? "array"
                    : "object" == n && (String.prototype.isPrototypeOf(t) || (t.constructor && "String" === t.constructor.name))
                    ? "string"
                    : n) === r
            );
            var t, n;
        };
    }
    function t(t) {
        return function (e) {
            return typeof e === t;
        };
    }
    function n(t) {
        return function (e) {
            return t === e;
        };
    }
    function K(e) {
        return null == e;
    }
    function V(e) {
        return !K(e);
    }
    function te() {}
    function i(n, r) {
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n(r.apply(null, e));
        };
    }
    function a(t, n) {
        return function (e) {
            return t(n(e));
        };
    }
    function J(e) {
        return function () {
            return e;
        };
    }
    function u(e) {
        return e;
    }
    function o(e, t) {
        return e === t;
    }
    var m = function (e) {
            return { eq: e };
        },
        g = m(function (e, t) {
            return e === t;
        }),
        p = m(function (e, t) {
            if (e === t) return !0;
            var n = r(e);
            return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? f(p).eq(e, t) : "object" === n && d(p).eq(e, t));
        }),
        X = e("string"),
        h = e("object"),
        S = e("array"),
        l = n(null),
        v = t("boolean"),
        b = n(void 0),
        y = t("function"),
        N = t("number");
    function R(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n);
        };
    }
    function s(t) {
        return function (e) {
            return !t(e);
        };
    }
    function C(e) {
        return e();
    }
    function x(e) {
        e();
    }
    function c() {
        return E;
    }
    var D = J(!1),
        w = J(!0),
        E = {
            fold: function (e, t) {
                return e();
            },
            isSome: D,
            isNone: w,
            getOr: u,
            getOrThunk: k,
            getOrDie: function (e) {
                throw new Error(e || "error: getOrDie called on none.");
            },
            getOrNull: J(null),
            getOrUndefined: J(void 0),
            or: u,
            orThunk: k,
            map: c,
            each: te,
            bind: c,
            exists: D,
            forall: w,
            filter: function () {
                return E;
            },
            toArray: function () {
                return [];
            },
            toString: J("none()"),
        };
    function k(e) {
        return e();
    }
    function _(e, t) {
        return ye.call(e, t);
    }
    function T(e, t) {
        return -1 < _(e, t);
    }
    function F(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return !0;
        return !1;
    }
    function A(e, t) {
        for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
            var i = e[o];
            r[o] = t(i, o);
        }
        return r;
    }
    function Y(e, t) {
        for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
    }
    function O(e, t) {
        for (var n = e.length - 1; 0 <= n; n--) t(e[n], n);
    }
    function B(e, t) {
        for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
            var a = e[o];
            (t(a, o) ? n : r).push(a);
        }
        return { pass: n, fail: r };
    }
    function U(e, t) {
        for (var n = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            t(i, r) && n.push(i);
        }
        return n;
    }
    function P(e, n, r) {
        return (
            O(e, function (e, t) {
                r = n(r, e, t);
            }),
            r
        );
    }
    function L(e, n, r) {
        return (
            Y(e, function (e, t) {
                r = n(r, e, t);
            }),
            r
        );
    }
    function I(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            if (t(i, r)) return ve.some(i);
            if (n(i, r)) break;
        }
        return ve.none();
    }
    function M(e, t) {
        return I(e, t, D);
    }
    function z(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return ve.some(n);
        return ve.none();
    }
    function H(e, t) {
        return (function (e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!S(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                Ce.apply(t, e[n]);
            }
            return t;
        })(A(e, t));
    }
    function j(e, t) {
        for (var n = 0, r = e.length; n < r; ++n) if (!0 !== t(e[n], n)) return !1;
        return !0;
    }
    function q(e) {
        var t = be.call(e, 0);
        return t.reverse(), t;
    }
    function $(e, t) {
        return U(e, function (e) {
            return !T(t, e);
        });
    }
    function W(e, t) {
        var n = be.call(e, 0);
        return n.sort(t), n;
    }
    function G(e, t) {
        return 0 <= t && t < e.length ? ve.some(e[t]) : ve.none();
    }
    function Q(e) {
        return G(e, 0);
    }
    function Z(e) {
        return G(e, e.length - 1);
    }
    function ee(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = t(e[n], n);
            if (r.isSome()) return r;
        }
        return ve.none();
    }
    function ne(e, t) {
        for (var n = we(e), r = 0, o = n.length; r < o; r++) {
            var i = n[r];
            t(e[i], i);
        }
    }
    function re(e, n) {
        return Ne(e, function (e, t) {
            return { k: t, v: n(e, t) };
        });
    }
    function oe(n) {
        return function (e, t) {
            n[t] = e;
        };
    }
    function ie(e, n, r, o) {
        return (
            ne(e, function (e, t) {
                (n(e, t) ? r : o)(e, t);
            }),
            1
        );
    }
    function ae(e, t) {
        var n = {};
        return ie(e, t, oe(n), te), n;
    }
    function ue(e, t) {
        return Ee(e, t) ? ve.from(e[t]) : ve.none();
    }
    function se(e, t) {
        return Ee(e, t) && void 0 !== e[t] && null !== e[t];
    }
    function ce(e, t, n) {
        var r, o;
        if (!e) return !1;
        if (((n = n || e), void 0 !== e.length)) {
            for (r = 0, o = e.length; r < o; r++) if (!1 === t.call(n, e[r], r, e)) return !1;
        } else for (r in e) if (Ee(e, r) && !1 === t.call(n, e[r], r, e)) return !1;
        return !0;
    }
    function le(n, r) {
        var o = [];
        return (
            ce(n, function (e, t) {
                o.push(r(e, t, n));
            }),
            o
        );
    }
    function fe(n, r) {
        var o = [];
        return (
            ce(n, function (e, t) {
                (r && !r(e, t, n)) || o.push(e);
            }),
            o
        );
    }
    function de(e, t) {
        if (e) for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
    }
    function me(e, t, n, r) {
        for (var o = b(n) ? e[0] : n, i = 0; i < e.length; i++) o = t.call(r, o, e[i], i);
        return o;
    }
    function ge(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
        return -1;
    }
    function pe(e) {
        return e[e.length - 1];
    }
    var he = function (n) {
            function e() {
                return o;
            }
            function t(e) {
                return e(n);
            }
            var r = J(n),
                o = {
                    fold: function (e, t) {
                        return t(n);
                    },
                    isSome: w,
                    isNone: D,
                    getOr: r,
                    getOrThunk: r,
                    getOrDie: r,
                    getOrNull: r,
                    getOrUndefined: r,
                    or: e,
                    orThunk: e,
                    map: function (e) {
                        return he(e(n));
                    },
                    each: function (e) {
                        e(n);
                    },
                    bind: t,
                    exists: t,
                    forall: t,
                    filter: function (e) {
                        return e(n) ? o : E;
                    },
                    toArray: function () {
                        return [n];
                    },
                    toString: function () {
                        return "some(" + n + ")";
                    },
                };
            return o;
        },
        ve = {
            some: he,
            none: c,
            from: function (e) {
                return null == e ? E : he(e);
            },
        },
        be = Array.prototype.slice,
        ye = Array.prototype.indexOf,
        Ce = Array.prototype.push,
        xe = y(Array.from)
            ? Array.from
            : function (e) {
                  return be.call(e);
              },
        we = Object.keys,
        Se = Object.hasOwnProperty,
        Ne = function (e, r) {
            var o = {};
            return (
                ne(e, function (e, t) {
                    var n = r(e, t);
                    o[n.k] = n.v;
                }),
                o
            );
        },
        Ee = function (e, t) {
            return Se.call(e, t);
        },
        ke = Array.isArray,
        _e = function () {
            return (_e =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
        };
    function Ae(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t));
    }
    function Re(n) {
        var r,
            o = !1;
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return o || ((o = !0), (r = n.apply(null, e))), r;
        };
    }
    function De(e, t) {
        var n = String(t).toLowerCase();
        return M(e, function (e) {
            return e.search(n);
        });
    }
    function Te(e, t) {
        return -1 !== e.indexOf(t);
    }
    function Oe(t) {
        return function (e) {
            return e.replace(t, "");
        };
    }
    function Be(e) {
        return 0 < e.length;
    }
    function Pe(e) {
        return !Be(e);
    }
    function Le(t) {
        return function (e) {
            return Te(e, t);
        };
    }
    function Ie(e) {
        return window.matchMedia(e).matches;
    }
    function Me(e) {
        return null == e ? "" : ("" + e).replace(wt, "");
    }
    function Fe(e, t) {
        return t ? !("array" !== t || !ke(e)) || typeof e === t : void 0 !== e;
    }
    function Ue(e, t) {
        for (
            var n = [],
                r = function (e) {
                    return n.push(e), t(e);
                },
                o = t(e);
            (o = o.bind(r)).isSome();

        );
        return n;
    }
    function ze(e, t) {
        var n = e.dom;
        if (1 !== n.nodeType) return !1;
        var r = n;
        if (void 0 !== r.matches) return r.matches(t);
        if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(t);
        if (void 0 !== r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
        if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors");
    }
    function He(e) {
        return (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) || 0 === e.childElementCount;
    }
    function je(e, t) {
        return e.dom === t.dom;
    }
    function Ve(e, t) {
        return dt().browser.isIE() ? ((n = e.dom), (r = t.dom), (o = Node.DOCUMENT_POSITION_CONTAINED_BY), 0 != (n.compareDocumentPosition(r) & o)) : (i = e.dom) !== (a = t.dom) && i.contains(a);
        var n, r, o, i, a;
    }
    function qe() {
        return Xe(0, 0);
    }
    function $e(e) {
        function t(e) {
            return function () {
                return n === e;
            };
        }
        var n = e.current,
            r = e.version;
        return { current: n, version: r, isEdge: t("Edge"), isChrome: t("Chrome"), isIE: t("IE"), isOpera: t("Opera"), isFirefox: t(nt), isSafari: t("Safari") };
    }
    function We(e) {
        function t(e) {
            return function () {
                return n === e;
            };
        }
        var n = e.current,
            r = e.version;
        return { current: n, version: r, isWindows: t(it), isiOS: t("iOS"), isAndroid: t(at), isOSX: t("OSX"), isLinux: t("Linux"), isSolaris: t(ut), isFreeBSD: t(st), isChromeOS: t(ct) };
    }
    function Ke(e) {
        if (null == e) throw new Error("Node cannot be null or undefined");
        return { dom: e };
    }
    var Xe = function (e, t) {
            return { major: e, minor: t };
        },
        Ye = {
            nu: Xe,
            detect: function (e, t) {
                var n,
                    r,
                    o = String(t).toLowerCase();
                return 0 === e.length
                    ? qe()
                    : (r = (function (e, t) {
                          for (var n = 0; n < e.length; n++) {
                              var r = e[n];
                              if (r.test(t)) return r;
                          }
                      })(e, (n = o)))
                    ? Xe(i(1), i(2))
                    : { major: 0, minor: 0 };
                function i(e) {
                    return Number(n.replace(r, "$" + e));
                }
            },
            unknown: qe,
        },
        Ge = function (e, t) {
            return "" === (n = t) || (e.length >= n.length && e.substr(0, 0 + n.length) === n);
            var n;
        },
        Je = Oe(/^\s+|\s+$/g),
        Qe = Oe(/^\s+/g),
        Ze = Oe(/\s+$/g),
        et = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        tt = {
            browsers: J([
                {
                    name: "Edge",
                    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                    search: function (e) {
                        return Te(e, "edge/") && Te(e, "chrome") && Te(e, "safari") && Te(e, "applewebkit");
                    },
                },
                {
                    name: "Chrome",
                    brand: "Chromium",
                    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, et],
                    search: function (e) {
                        return Te(e, "chrome") && !Te(e, "chromeframe");
                    },
                },
                {
                    name: "IE",
                    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
                    search: function (e) {
                        return Te(e, "msie") || Te(e, "trident");
                    },
                },
                { name: "Opera", versionRegexes: [et, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Le("opera") },
                { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: Le("firefox") },
                {
                    name: "Safari",
                    versionRegexes: [et, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                    search: function (e) {
                        return (Te(e, "safari") || Te(e, "mobile/")) && Te(e, "applewebkit");
                    },
                },
            ]),
            oses: J([
                { name: "Windows", search: Le("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] },
                {
                    name: "iOS",
                    search: function (e) {
                        return Te(e, "iphone") || Te(e, "ipad");
                    },
                    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/],
                },
                { name: "Android", search: Le("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] },
                { name: "OSX", search: Le("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] },
                { name: "Linux", search: Le("linux"), versionRegexes: [] },
                { name: "Solaris", search: Le("sunos"), versionRegexes: [] },
                { name: "FreeBSD", search: Le("freebsd"), versionRegexes: [] },
                { name: "ChromeOS", search: Le("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] },
            ]),
        },
        nt = "Firefox",
        rt = function () {
            return $e({ current: void 0, version: Ye.unknown() });
        },
        ot = $e,
        it = (J("Edge"), J("Chrome"), J("IE"), J("Opera"), J(nt), J("Safari"), "Windows"),
        at = "Android",
        ut = "Solaris",
        st = "FreeBSD",
        ct = "ChromeOS",
        lt = function () {
            return We({ current: void 0, version: Ye.unknown() });
        },
        ft = We,
        dt =
            (J(it),
            J("iOS"),
            J(at),
            J("Linux"),
            J("OSX"),
            J(ut),
            J(st),
            J(ct),
            Re(function () {
                return (
                    (e = navigator.userAgent),
                    (t = ve.from(navigator.userAgentData)),
                    (n = Ie),
                    (p = tt.browsers()),
                    (h = tt.oses()),
                    (v = t
                        .bind(function (e) {
                            return (
                                (r = p),
                                ee(e.brands, function (t) {
                                    var n = t.brand.toLowerCase();
                                    return M(r, function (e) {
                                        var t;
                                        return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
                                    }).map(function (e) {
                                        return { current: e.name, version: Ye.nu(parseInt(t.version, 10), 0) };
                                    });
                                })
                            );
                            var r;
                        })
                        .orThunk(function () {
                            return De(p, (n = e)).map(function (e) {
                                var t = Ye.detect(e.versionRegexes, n);
                                return { current: e.name, version: t };
                            });
                            var n;
                        })
                        .fold(rt, ot)),
                    (b = De(h, (r = e))
                        .map(function (e) {
                            var t = Ye.detect(e.versionRegexes, r);
                            return { current: e.name, version: t };
                        })
                        .fold(lt, ft)),
                    {
                        browser: v,
                        os: b,
                        deviceType:
                            ((i = v),
                            (a = e),
                            (u = n),
                            (s = (o = b).isiOS() && !0 === /ipad/i.test(a)),
                            (c = o.isiOS() && !s),
                            (f = (l = o.isiOS() || o.isAndroid()) || u("(pointer:coarse)")),
                            (d = s || (!c && l && u("(min-device-width:768px)"))),
                            (m = c || (l && !d)),
                            (g = i.isSafari() && o.isiOS() && !1 === /safari/i.test(a)),
                            { isiPad: J(s), isiPhone: J(c), isTablet: J(d), isPhone: J(m), isTouch: J(f), isAndroid: o.isAndroid, isiOS: o.isiOS, isWebView: J(g), isDesktop: J(!m && !d && !g) }),
                    }
                );
                var e, t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b;
            })),
        mt = navigator.userAgent,
        gt = dt(),
        pt = gt.browser,
        ht = gt.os,
        vt = gt.deviceType,
        bt = /WebKit/.test(mt) && !pt.isEdge(),
        yt = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
        Ct = -1 !== mt.indexOf("Windows Phone"),
        xt = {
            opera: pt.isOpera(),
            webkit: bt,
            ie: !(!pt.isIE() && !pt.isEdge()) && pt.version.major,
            gecko: pt.isFirefox(),
            mac: ht.isOSX() || ht.isiOS(),
            iOS: vt.isiPad() || vt.isiPhone(),
            android: ht.isAndroid(),
            contentEditable: !0,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: !0,
            range: window.getSelection && "Range" in window,
            documentMode: pt.isIE() ? document.documentMode || 7 : 10,
            fileApi: yt,
            ceFalse: !0,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !pt.isIE(),
            desktop: vt.isDesktop(),
            windowsPhone: Ct,
            browser: { current: pt.current, version: pt.version, isChrome: pt.isChrome, isEdge: pt.isEdge, isFirefox: pt.isFirefox, isIE: pt.isIE, isOpera: pt.isOpera, isSafari: pt.isSafari },
            os: {
                current: ht.current,
                version: ht.version,
                isAndroid: ht.isAndroid,
                isChromeOS: ht.isChromeOS,
                isFreeBSD: ht.isFreeBSD,
                isiOS: ht.isiOS,
                isLinux: ht.isLinux,
                isOSX: ht.isOSX,
                isSolaris: ht.isSolaris,
                isWindows: ht.isWindows,
            },
            deviceType: { isDesktop: vt.isDesktop, isiPad: vt.isiPad, isiPhone: vt.isiPhone, isPhone: vt.isPhone, isTablet: vt.isTablet, isTouch: vt.isTouch, isWebView: vt.isWebView },
        },
        wt = /^\s*|\s*$/g,
        St = function (e, n, r, o) {
            (o = o || this),
                e &&
                    ce((e = r ? e[r] : e), function (e, t) {
                        return !1 !== n.call(o, e, t, r) && void St(e, n, r, o);
                    });
        },
        Nt = {
            trim: Me,
            isArray: ke,
            is: Fe,
            toArray: function (e) {
                if (ke(e)) return e;
                for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
                return t;
            },
            makeMap: function (e, t, n) {
                var r;
                for (t = t || ",", n = n || {}, r = (e = "string" == typeof (e = e || []) ? e.split(t) : e).length; r--; ) n[e[r]] = {};
                return n;
            },
            each: ce,
            map: le,
            grep: fe,
            inArray: de,
            hasOwn: Ee,
            extend: function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = 0; r < t.length; r++) {
                    var o,
                        i,
                        a = t[r];
                    for (o in a) !Ee(a, o) || (void 0 !== (i = a[o]) && (e[o] = i));
                }
                return e;
            },
            create: function (e, t, n) {
                var r,
                    o,
                    i,
                    a = this,
                    u = 0,
                    s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
                    c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
                if (!c[s]) {
                    if ("static" === e[2]) return (c[s] = t), void (this.onCreate && this.onCreate(e[2], e[3], c[s]));
                    t[s] || ((t[s] = function () {}), (u = 1)),
                        (c[s] = t[s]),
                        a.extend(c[s].prototype, t),
                        e[5] &&
                            ((r = a.resolve(e[5]).prototype),
                            (o = e[5].match(/\.(\w+)$/i)[1]),
                            (i = c[s]),
                            (c[s] = u
                                ? function () {
                                      return r[o].apply(this, arguments);
                                  }
                                : function () {
                                      return (this.parent = r[o]), i.apply(this, arguments);
                                  }),
                            (c[s].prototype[s] = c[s]),
                            a.each(r, function (e, t) {
                                c[s].prototype[t] = r[t];
                            }),
                            a.each(t, function (e, t) {
                                r[t]
                                    ? (c[s].prototype[t] = function () {
                                          return (this.parent = r[t]), e.apply(this, arguments);
                                      })
                                    : t !== s && (c[s].prototype[t] = e);
                            })),
                        a.each(t.static, function (e, t) {
                            c[s][t] = e;
                        });
                }
            },
            walk: St,
            createNS: function (e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[(r = e[n])] || (t[r] = {}), (t = t[r]);
                return t;
            },
            resolve: function (e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t;
            },
            explode: function (e, t) {
                return !e || Fe(e, "array") ? e : le(e.split(t || ","), Me);
            },
            _addCacheSuffix: function (e) {
                var t = xt.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            },
        },
        Et = {
            fromHtml: function (e, t) {
                var n = (t || document).createElement("div");
                if (((n.innerHTML = e), !n.hasChildNodes() || 1 < n.childNodes.length)) throw (console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node"));
                return Ke(n.childNodes[0]);
            },
            fromTag: function (e, t) {
                var n = (t || document).createElement(e);
                return Ke(n);
            },
            fromText: function (e, t) {
                var n = (t || document).createTextNode(e);
                return Ke(n);
            },
            fromDom: Ke,
            fromPoint: function (e, t, n) {
                return ve.from(e.dom.elementFromPoint(t, n)).map(Ke);
            },
        };
    function kt(e) {
        return e.dom.nodeName.toLowerCase();
    }
    function _t(e) {
        return e.dom.nodeType;
    }
    function At(t) {
        return function (e) {
            return _t(e) === t;
        };
    }
    function Rt(e) {
        return Et.fromDom(e.dom.ownerDocument);
    }
    function Dt(e) {
        return Rn(e) ? e : Rt(e);
    }
    function Tt(e) {
        return Et.fromDom(Dt(e).dom.defaultView);
    }
    function Ot(e) {
        return ve.from(e.dom.parentNode).map(Et.fromDom);
    }
    function Bt(e) {
        return ve.from(e.dom.previousSibling).map(Et.fromDom);
    }
    function Pt(e) {
        return ve.from(e.dom.nextSibling).map(Et.fromDom);
    }
    function Lt(e) {
        return q(Ue(e, Bt));
    }
    function It(e) {
        return Ue(e, Pt);
    }
    function Mt(e, t) {
        var n = e.dom.childNodes;
        return ve.from(n[t]).map(Et.fromDom);
    }
    function Ft(e) {
        return Mt(e, 0);
    }
    function Ut(e) {
        return Mt(e, e.dom.childNodes.length - 1);
    }
    function zt(e) {
        return e.dom.childNodes.length;
    }
    function Ht(e) {
        return Dn(e) && V(e.dom.host);
    }
    function jt(t) {
        return Ht(t)
            ? t
            : (function () {
                  var e = Dt(t).dom.head;
                  if (null == e) throw new Error("Head is not available yet");
                  return Et.fromDom(e);
              })();
    }
    function Vt(e) {
        return Et.fromDom(e.dom.host);
    }
    function qt(t, n) {
        Ot(t).each(function (e) {
            e.dom.insertBefore(n.dom, t.dom);
        });
    }
    function $t(e, t) {
        Pt(e).fold(
            function () {
                Ot(e).each(function (e) {
                    Ln(e, t);
                });
            },
            function (e) {
                qt(e, t);
            }
        );
    }
    function Wt(t, n) {
        Ft(t).fold(
            function () {
                Ln(t, n);
            },
            function (e) {
                t.dom.insertBefore(n.dom, e.dom);
            }
        );
    }
    function Kt(t, e) {
        Y(e, function (e) {
            Ln(t, e);
        });
    }
    function Xt(e) {
        (e.dom.textContent = ""),
            Y(Tn(e), function (e) {
                In(e);
            });
    }
    function Yt(e) {
        var t,
            n = Tn(e);
        0 < n.length &&
            ((t = e),
            Y(n, function (e) {
                qt(t, e);
            })),
            In(e);
    }
    function Gt(e, t) {
        return void 0 !== e ? e : void 0 !== t ? t : 0;
    }
    function Jt(e) {
        var t = void 0 !== e ? e.dom : document,
            n = t.body.scrollLeft || t.documentElement.scrollLeft,
            r = t.body.scrollTop || t.documentElement.scrollTop;
        return Un(n, r);
    }
    function Qt(e, t, n) {
        var r = (void 0 !== n ? n.dom : document).defaultView;
        r && r.scrollTo(e, t);
    }
    function Zt(e, t) {
        dt().browser.isSafari() && y(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
    }
    function en(e, t, n, r) {
        return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r };
    }
    function tn(e) {
        var r = void 0 === e ? window : e,
            t = r.document,
            o = Jt(Et.fromDom(t)),
            n = void 0 === r ? window : r;
        return (dt().browser.isFirefox() ? ve.none() : ve.from(n.visualViewport)).fold(
            function () {
                var e = r.document.documentElement,
                    t = e.clientWidth,
                    n = e.clientHeight;
                return en(o.left, o.top, t, n);
            },
            function (e) {
                return en(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height);
            }
        );
    }
    function nn(t) {
        return function (e) {
            return !!e && e.nodeType === t;
        };
    }
    function rn(e) {
        return e && !Object.getPrototypeOf(e);
    }
    function on(e) {
        var n = e.map(function (e) {
            return e.toLowerCase();
        });
        return function (e) {
            if (e && e.nodeName) {
                var t = e.nodeName.toLowerCase();
                return T(n, t);
            }
            return !1;
        };
    }
    function an(r, e) {
        var o = e.toLowerCase().split(" ");
        return function (e) {
            if (Hn(e))
                for (var t = 0; t < o.length; t++) {
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
                }
            return !1;
        };
    }
    function un(t) {
        return function (e) {
            return Hn(e) && e.hasAttribute(t);
        };
    }
    function sn(e) {
        return Hn(e) && e.hasAttribute("data-mce-bogus");
    }
    function cn(e) {
        return Hn(e) && "TABLE" === e.tagName;
    }
    function ln(t) {
        return function (e) {
            if (Hn(e)) {
                if (e.contentEditable === t) return !0;
                if (e.getAttribute("data-mce-contenteditable") === t) return !0;
            }
            return !1;
        };
    }
    function fn(e, t, n) {
        return (
            void 0 === n && (n = o),
            e.exists(function (e) {
                return n(e, t);
            })
        );
    }
    function dn(e, t, n) {
        return e.isSome() && t.isSome() ? ve.some(n(e.getOrDie(), t.getOrDie())) : ve.none();
    }
    function mn(e) {
        return void 0 !== e.style && y(e.style.getPropertyValue);
    }
    function gn(e, t, n) {
        if (!(X(n) || v(n) || N(n))) throw (console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple"));
        e.setAttribute(t, n + "");
    }
    function pn(e, t, n) {
        gn(e.dom, t, n);
    }
    function hn(e, t) {
        var n = e.dom;
        ne(t, function (e, t) {
            gn(n, t, e);
        });
    }
    function vn(e, t) {
        var n = e.dom.getAttribute(t);
        return null === n ? void 0 : n;
    }
    function bn(e, t) {
        return ve.from(vn(e, t));
    }
    function yn(e, t) {
        var n = e.dom;
        return n && n.hasAttribute && n.hasAttribute(t);
    }
    function Cn(e, t) {
        e.dom.removeAttribute(t);
    }
    function xn(e, t) {
        var n = e.dom;
        ne(t, function (e, t) {
            !(function (e, t, n) {
                if (!X(n)) throw (console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n));
                mn(e) && e.style.setProperty(t, n);
            })(n, t, e);
        });
    }
    function wn(e, t) {
        var n = e.dom,
            r = window.getComputedStyle(n).getPropertyValue(t);
        return "" !== r || Mn(e) ? r : Zn(n, t);
    }
    function Sn(e, t) {
        var n = e.dom,
            r = Zn(n, t);
        return ve.from(r).filter(function (e) {
            return 0 < e.length;
        });
    }
    function Nn(e) {
        var t = {},
            n = e.dom;
        if (mn(n))
            for (var r = 0; r < n.style.length; r++) {
                var o = n.style.item(r);
                t[o] = n.style[o];
            }
        return t;
    }
    function En(e) {
        return M(e, _n);
    }
    function kn(e, t) {
        return e.children && T(e.children, t);
    }
    "undefined" != typeof window || Function("return this;")();
    var _n = At(1),
        An = At(3),
        Rn = At(9),
        Dn = At(11),
        Tn = function (e) {
            return A(e.dom.childNodes, Et.fromDom);
        },
        On = y(Element.prototype.attachShadow) && y(Node.prototype.getRootNode),
        Bn = J(On),
        Pn = On
            ? function (e) {
                  return Et.fromDom(e.dom.getRootNode());
              }
            : Dt,
        Ln = function (e, t) {
            e.dom.appendChild(t.dom);
        },
        In = function (e) {
            var t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t);
        },
        Mn = function (e) {
            var t = An(e) ? e.dom.parentNode : e.dom;
            if (null == t || null === t.ownerDocument) return !1;
            var n = t.ownerDocument,
                r = Et.fromDom(t),
                o = Pn(r);
            return (Ht(o) ? ve.some(o) : ve.none()).fold(function () {
                return n.body.contains(t);
            }, a(Mn, Vt));
        },
        Fn = function (n, r) {
            return {
                left: n,
                top: r,
                translate: function (e, t) {
                    return Fn(n + e, r + t);
                },
            };
        },
        Un = Fn,
        zn = function (e) {
            var t,
                n = e.dom,
                r = n.ownerDocument.body;
            return r === n ? Un(r.offsetLeft, r.offsetTop) : Mn(e) ? ((t = n.getBoundingClientRect()), Un(t.left, t.top)) : Un(0, 0);
        },
        Hn = nn(1),
        jn = on(["textarea", "input"]),
        Vn = nn(3),
        qn = nn(8),
        $n = nn(9),
        Wn = nn(11),
        Kn = on(["br"]),
        Xn = on(["img"]),
        Yn = ln("true"),
        Gn = ln("false"),
        Jn = on(["td", "th"]),
        Qn = on(["video", "audio", "object", "embed"]),
        Zn = function (e, t) {
            return mn(e) ? e.style.getPropertyValue(t) : "";
        },
        er = dt().browser,
        tr = {},
        nr = { exports: tr };
    function rr(e) {
        setTimeout(function () {
            throw e;
        }, 0);
    }
    !(function () {
        var e = this,
            t = function () {
                var e,
                    t,
                    n,
                    r = { exports: {} };
                function o() {}
                function i(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), f(e, this);
                }
                function a(n, r) {
                    for (; 3 === n._state; ) n = n._value;
                    0 !== n._state
                        ? ((n._handled = !0),
                          i._immediateFn(function () {
                              var e,
                                  t = 1 === n._state ? r.onFulfilled : r.onRejected;
                              if (null !== t) {
                                  try {
                                      e = t(n._value);
                                  } catch (e) {
                                      return void s(r.promise, e);
                                  }
                                  u(r.promise, e);
                              } else (1 === n._state ? u : s)(r.promise, n._value);
                          }))
                        : n._deferreds.push(r);
                }
                function u(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof i) return (t._state = 3), (t._value = e), void c(t);
                            if ("function" == typeof n)
                                return void f(
                                    ((r = n),
                                    (o = e),
                                    function () {
                                        r.apply(o, arguments);
                                    }),
                                    t
                                );
                        }
                        (t._state = 1), (t._value = e), c(t);
                    } catch (e) {
                        s(t, e);
                    }
                    var r, o;
                }
                function s(e, t) {
                    (e._state = 2), (e._value = t), c(e);
                }
                function c(e) {
                    2 === e._state &&
                        0 === e._deferreds.length &&
                        i._immediateFn(function () {
                            e._handled || i._unhandledRejectionFn(e._value);
                        });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
                    e._deferreds = null;
                }
                function l(e, t, n) {
                    (this.onFulfilled = "function" == typeof e ? e : null), (this.onRejected = "function" == typeof t ? t : null), (this.promise = n);
                }
                function f(e, t) {
                    var n = !1;
                    try {
                        e(
                            function (e) {
                                n || ((n = !0), u(t, e));
                            },
                            function (e) {
                                n || ((n = !0), s(t, e));
                            }
                        );
                    } catch (e) {
                        if (n) return;
                        (n = !0), s(t, e);
                    }
                }
                (e = r),
                    (t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}),
                    (n = setTimeout),
                    (i.prototype.catch = function (e) {
                        return this.then(null, e);
                    }),
                    (i.prototype.then = function (e, t) {
                        var n = new this.constructor(o);
                        return a(this, new l(e, t, n)), n;
                    }),
                    (i.all = function (e) {
                        var u = Array.prototype.slice.call(e);
                        return new i(function (o, i) {
                            if (0 === u.length) return o([]);
                            for (var a = u.length, e = 0; e < u.length; e++)
                                !(function t(n, e) {
                                    try {
                                        if (e && ("object" == typeof e || "function" == typeof e)) {
                                            var r = e.then;
                                            if ("function" == typeof r)
                                                return (
                                                    r.call(
                                                        e,
                                                        function (e) {
                                                            t(n, e);
                                                        },
                                                        i
                                                    ),
                                                    0
                                                );
                                        }
                                        (u[n] = e), 0 == --a && o(u);
                                    } catch (e) {
                                        i(e);
                                    }
                                })(e, u[e]);
                        });
                    }),
                    (i.resolve = function (t) {
                        return t && "object" == typeof t && t.constructor === i
                            ? t
                            : new i(function (e) {
                                  e(t);
                              });
                    }),
                    (i.reject = function (n) {
                        return new i(function (e, t) {
                            t(n);
                        });
                    }),
                    (i.race = function (o) {
                        return new i(function (e, t) {
                            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
                        });
                    }),
                    (i._immediateFn =
                        "function" == typeof setImmediate
                            ? function (e) {
                                  setImmediate(e);
                              }
                            : function (e) {
                                  n(e, 0);
                              }),
                    (i._unhandledRejectionFn = function (e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
                    }),
                    (i._setImmediateFn = function (e) {
                        i._immediateFn = e;
                    }),
                    (i._setUnhandledRejectionFn = function (e) {
                        i._unhandledRejectionFn = e;
                    }),
                    e.exports ? (e.exports = i) : t.Promise || (t.Promise = i);
                var d = r.exports;
                return { boltExport: ("undefined" != typeof window ? window : Function("return this;")()).Promise || d };
            };
        "object" == typeof tr && void 0 !== nr ? (nr.exports = t()) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).EphoxContactWrapper = t());
    })();
    function or(e) {
        return cr(function () {
            return new ar(e);
        });
    }
    function ir(a) {
        if (!S(a)) throw new Error("cases must be an array");
        if (0 === a.length) throw new Error("there must be at least one case");
        var u = [],
            n = {};
        return (
            Y(a, function (e, r) {
                var t = we(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (void 0 !== n[o]) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!S(i)) throw new Error("case arguments must be an array");
                u.push(o),
                    (n[o] = function () {
                        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        var t = n.length;
                        if (t !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + t);
                        return {
                            fold: function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                if (e.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + e.length);
                                return e[r].apply(null, n);
                            },
                            match: function (e) {
                                var t = we(e);
                                if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                                if (
                                    !j(u, function (e) {
                                        return T(t, e);
                                    })
                                )
                                    throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                                return e[o].apply(null, n);
                            },
                            log: function (e) {
                                console.log(e, { constructors: u, constructor: o, params: n });
                            },
                        };
                    });
            }),
            n
        );
    }
    var ar = nr.exports.boltExport,
        ur = function (e) {
            function r(e) {
                o() ? i(e) : t.push(e);
            }
            var n = ve.none(),
                t = [],
                o = function () {
                    return n.isSome();
                },
                i = function (t) {
                    n.each(function (e) {
                        setTimeout(function () {
                            t(e);
                        }, 0);
                    });
                };
            return (
                e(function (e) {
                    o() || ((n = ve.some(e)), Y(t, i), (t = []));
                }),
                {
                    get: r,
                    map: function (n) {
                        return ur(function (t) {
                            r(function (e) {
                                t(n(e));
                            });
                        });
                    },
                    isReady: o,
                }
            );
        },
        sr = {
            nu: ur,
            pure: function (t) {
                return ur(function (e) {
                    e(t);
                });
            },
        },
        cr = function (n) {
            function e(e) {
                n().then(e, rr);
            }
            return {
                map: function (e) {
                    return cr(function () {
                        return n().then(e);
                    });
                },
                bind: function (t) {
                    return cr(function () {
                        return n().then(function (e) {
                            return t(e).toPromise();
                        });
                    });
                },
                anonBind: function (e) {
                    return cr(function () {
                        return n().then(function () {
                            return e.toPromise();
                        });
                    });
                },
                toLazy: function () {
                    return sr.nu(e);
                },
                toCached: function () {
                    var e = null;
                    return cr(function () {
                        return (e = null === e ? n() : e);
                    });
                },
                toPromise: n,
                get: e,
            };
        },
        lr = function (n) {
            return {
                isValue: w,
                isError: D,
                getOr: J(n),
                getOrThunk: J(n),
                getOrDie: J(n),
                or: function (e) {
                    return lr(n);
                },
                orThunk: function (e) {
                    return lr(n);
                },
                fold: function (e, t) {
                    return t(n);
                },
                map: function (e) {
                    return lr(e(n));
                },
                mapError: function (e) {
                    return lr(n);
                },
                each: function (e) {
                    e(n);
                },
                bind: function (e) {
                    return e(n);
                },
                exists: function (e) {
                    return e(n);
                },
                forall: function (e) {
                    return e(n);
                },
                toOptional: function () {
                    return ve.some(n);
                },
            };
        },
        fr = function (n) {
            return {
                isValue: D,
                isError: w,
                getOr: u,
                getOrThunk: function (e) {
                    return e();
                },
                getOrDie: function () {
                    return (
                        (e = String(n)),
                        (function () {
                            throw new Error(e);
                        })()
                    );
                    var e;
                },
                or: u,
                orThunk: function (e) {
                    return e();
                },
                fold: function (e, t) {
                    return e(n);
                },
                map: function (e) {
                    return fr(n);
                },
                mapError: function (e) {
                    return fr(e(n));
                },
                each: te,
                bind: function (e) {
                    return fr(n);
                },
                exists: D,
                forall: w,
                toOptional: ve.none,
            };
        },
        dr = {
            value: lr,
            error: fr,
            fromOption: function (e, t) {
                return e.fold(function () {
                    return fr(t);
                }, lr);
            },
        };
    function mr(e) {
        return e.fold(u, u);
    }
    function gr(e, t, n, r, o) {
        return e(n, r) ? ve.some(n) : y(o) && o(n) ? ve.none() : t(n, r, o);
    }
    function pr(e, t, n) {
        for (var r = e.dom, o = y(n) ? n : D; r.parentNode; ) {
            var r = r.parentNode,
                i = Et.fromDom(r);
            if (t(i)) return ve.some(i);
            if (o(i)) break;
        }
        return ve.none();
    }
    function hr(e, t, n) {
        return gr(
            function (e, t) {
                return t(e);
            },
            pr,
            e,
            t,
            n
        );
    }
    function vr(e, t, n) {
        return pr(
            e,
            function (e) {
                return ze(e, t);
            },
            n
        );
    }
    function br(e, t) {
        return (n = t), He((r = void 0 === e ? document : e.dom)) ? ve.none() : ve.from(r.querySelector(n)).map(Et.fromDom);
        var n, r;
    }
    function yr(e, t, n) {
        return gr(ze, vr, e, t, n);
    }
    function Cr(e, t) {
        return "number" != typeof t && (t = 0), setTimeout(e, t);
    }
    function xr(e, t) {
        return "number" != typeof t && (t = 1), setInterval(e, t);
    }
    function wr(n, r) {
        function e() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            clearTimeout(o),
                (o = Cr(function () {
                    n.apply(this, e);
                }, r));
        }
        var o;
        return (
            (e.stop = function () {
                clearTimeout(o);
            }),
            e
        );
    }
    function Sr(m, g) {
        function n(e, t, n) {
            var r,
                o = Nt._addCacheSuffix(e),
                i = ue(h, o).getOrThunk(function () {
                    return { id: "mce-u" + p++, passed: [], failed: [], count: 0 };
                });
            function a(e, t) {
                for (var n = e.length; n--; ) e[n]();
                (i.status = t), (i.passed = []), (i.failed = []), r && ((r.onload = null), (r.onerror = null), (r = null));
            }
            function u() {
                return a(i.passed, 2), 0;
            }
            function s() {
                return a(i.failed, 3);
            }
            (h[o] = i).count++;
            var c,
                l,
                f,
                d = function () {
                    var e = d;
                    !(function () {
                        for (var e = m.styleSheets, t = e.length; t--; ) {
                            var n = e[t].ownerNode;
                            if (n && n.id === r.id) return u(), 1;
                        }
                    })() && (Date.now() - l < y ? Ar.setTimeout(e) : s());
                };
            t && i.passed.push(t),
                n && i.failed.push(n),
                1 !== i.status &&
                    (2 !== i.status
                        ? 3 !== i.status
                            ? ((i.status = 1),
                              hn((c = Et.fromTag("link", b.dom)), { rel: "stylesheet", type: "text/css", id: i.id }),
                              (l = Date.now()),
                              g.contentCssCors && pn(c, "crossOrigin", "anonymous"),
                              g.referrerPolicy && pn(c, "referrerpolicy", g.referrerPolicy),
                              ((r = c.dom).onload = d),
                              (r.onerror = s),
                              (f = c),
                              Ln(jt(v), f),
                              pn(c, "href", o))
                            : s()
                        : u());
        }
        function o(t) {
            return or(function (e) {
                n(t, i(e, J(dr.value(t))), i(e, J(dr.error(t))));
            });
        }
        function t(e) {
            var n = Nt._addCacheSuffix(e);
            ue(h, n).each(function (e) {
                var t;
                0 == --e.count && (delete h[n], (t = e.id), br(jt(v), "#" + t).each(In));
            });
        }
        void 0 === g && (g = {});
        var p = 0,
            h = {},
            v = Et.fromDom(m),
            b = Dt(v),
            y = g.maxLoadTime || 5e3;
        return {
            load: n,
            loadAll: function (e, n, r) {
                var a,
                    t = A(e, o);
                (a = t),
                    or(function (r) {
                        var o = [],
                            i = 0;
                        0 === a.length
                            ? r([])
                            : Y(a, function (e, t) {
                                  var n;
                                  e.get(
                                      ((n = t),
                                      function (e) {
                                          (o[n] = e), ++i >= a.length && r(o);
                                      })
                                  );
                              });
                    }).get(function (e) {
                        var t = B(e, function (e) {
                            return e.isValue();
                        });
                        0 < t.fail.length ? r(t.fail.map(mr)) : n(t.pass.map(mr));
                    });
            },
            unload: t,
            unloadAll: function (e) {
                Y(e, function (e) {
                    t(e);
                });
            },
            _setReferrerPolicy: function (e) {
                g.referrerPolicy = e;
            },
        };
    }
    ir([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]);
    var Nr,
        Er,
        kr = function (e, t) {
            return M(e.dom.childNodes, function (e) {
                return t(Et.fromDom(e));
            }).map(Et.fromDom);
        },
        _r = window.Promise || ar,
        Ar = {
            requestAnimationFrame: function (e, t) {
                Nr
                    ? Nr.then(e)
                    : (Nr = new _r(function (e) {
                          (function (e, t) {
                              for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) n = window[r[o] + "RequestAnimationFrame"];
                              (n =
                                  n ||
                                  function (e) {
                                      window.setTimeout(e, 0);
                                  })(e, t);
                          })(e, (t = t || document.body));
                      }).then(e));
            },
            setTimeout: Cr,
            setInterval: xr,
            setEditorTimeout: function (e, t, n) {
                return Cr(function () {
                    e.removed || t();
                }, n);
            },
            setEditorInterval: function (e, t, n) {
                var r = xr(function () {
                    e.removed ? clearInterval(r) : t();
                }, n);
                return r;
            },
            debounce: wr,
            throttle: wr,
            clearInterval: function (e) {
                return clearInterval(e);
            },
            clearTimeout: function (e) {
                return clearTimeout(e);
            },
        },
        Rr =
            ((Er = new WeakMap()),
            {
                forElement: function (e, t) {
                    var n = Pn(e).dom;
                    return ve.from(Er.get(n)).getOrThunk(function () {
                        var e = Sr(n, t);
                        return Er.set(n, e), e;
                    });
                },
            }),
        Dr =
            ((Tr.prototype.current = function () {
                return this.node;
            }),
            (Tr.prototype.next = function (e) {
                return (this.node = this.findSibling(this.node, "firstChild", "nextSibling", e)), this.node;
            }),
            (Tr.prototype.prev = function (e) {
                return (this.node = this.findSibling(this.node, "lastChild", "previousSibling", e)), this.node;
            }),
            (Tr.prototype.prev2 = function (e) {
                return (this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e)), this.node;
            }),
            (Tr.prototype.findSibling = function (e, t, n, r) {
                var o, i;
                if (e) {
                    if (!r && e[t]) return e[t];
                    if (e !== this.rootNode) {
                        if ((o = e[n])) return o;
                        for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode) if ((o = i[n])) return o;
                    }
                }
            }),
            (Tr.prototype.findPreviousNode = function (e, t, n, r) {
                var o, i, a;
                if (e && ((o = e[n]), !this.rootNode || o !== this.rootNode)) {
                    if (o) {
                        if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                        return o;
                    }
                    return (i = e.parentNode) && i !== this.rootNode ? i : void 0;
                }
            }),
            Tr);
    function Tr(e, t) {
        (this.node = e), (this.rootNode = t), (this.current = this.current.bind(this)), (this.next = this.next.bind(this)), (this.prev = this.prev.bind(this)), (this.prev2 = this.prev2.bind(this));
    }
    function Or(t) {
        var n;
        return function (e) {
            return (
                (n =
                    n ||
                    (function (e, t) {
                        for (var n = {}, r = 0, o = e.length; r < o; r++) {
                            var i = e[r];
                            n[String(i)] = t(i, r);
                        }
                        return n;
                    })(t, w)),
                Ee(n, kt(e))
            );
        };
    }
    function Br(e) {
        return _n(e) && !go(e);
    }
    function Pr(e) {
        return _n(e) && "br" === kt(e);
    }
    function Lr(e) {
        return _o(e) && (e = e.parentNode), ko(e) && e.hasAttribute("data-mce-caret");
    }
    function Ir(e) {
        return _o(e) && No(e.data);
    }
    function Mr(e) {
        return Lr(e) || Ir(e);
    }
    function Fr(e) {
        return e.firstChild !== e.lastChild || !Kn(e.firstChild);
    }
    function Ur(e) {
        var t = e.container();
        return !!Vn(t) && (t.data.charAt(e.offset()) === So || (e.isAtStart() && Ir(t.previousSibling)));
    }
    function zr(e) {
        var t = e.container();
        return !!Vn(t) && (t.data.charAt(e.offset() - 1) === So || (e.isAtEnd() && Ir(t.nextSibling)));
    }
    function Hr(e) {
        return e && e.hasAttribute("data-mce-caret")
            ? (sn((n = (t = e.getElementsByTagName("br"))[t.length - 1])) && n.parentNode.removeChild(n),
              e.removeAttribute("data-mce-caret"),
              e.removeAttribute("data-mce-bogus"),
              e.removeAttribute("style"),
              e.removeAttribute("_moz_abspos"),
              e)
            : null;
        var t, n;
    }
    function jr(e) {
        return Lr(e.startContainer);
    }
    function Vr(e) {
        return !Mo(e) && (Bo(e) ? !Po(e.parentNode) : Lo(e) || Oo(e) || Io(e) || Fo(e));
    }
    function qr(e, t) {
        return (
            Vr(e) &&
            (function (e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Fo(e)) return !1;
                    if (Do(e)) return !0;
                }
                return !0;
            })(e, t)
        );
    }
    function $r(e) {
        return Uo.test(e);
    }
    function Wr(e, t) {
        return (
            (Vr(e) && !1 === ((a = t), Vn((i = e)) && $r(i.data) && !1 === ((n = i), (r = Et.fromDom(a)), vr(Et.fromDom(n), "pre,code", R(je, r)).isSome()))) ||
            (Hn((o = e)) && "A" === o.nodeName && !o.hasAttribute("href") && (o.hasAttribute("name") || o.hasAttribute("id"))) ||
            zo(e)
        );
        var n, r, o, i, a;
    }
    function Kr(e, t) {
        return (function (e, t) {
            var n = 0;
            if (Wr(e, e)) return !1;
            var r = e.firstChild;
            if (!r) return !0;
            var o = new Dr(r, e);
            do {
                if (t) {
                    if (jo(r)) {
                        r = o.next(!0);
                        continue;
                    }
                    if (Ho(r)) {
                        r = o.next();
                        continue;
                    }
                }
                if (Kn(r)) n++, (r = o.next());
                else {
                    if (Wr(r, e)) return !1;
                    r = o.next();
                }
            } while (r);
            return n <= 1;
        })(e.dom, (t = void 0 === t || t));
    }
    function Xr(e, t) {
        return V(e) && (Wr(e, t) || Br(Et.fromDom(e)));
    }
    function Yr(e) {
        return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type");
    }
    function Gr(e, t) {
        var n,
            r,
            o,
            i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) (r = String.fromCharCode(parseInt(e[n], t))), Go[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
            return i;
        }
    }
    function Jr(e, t) {
        return e.replace(t ? $o : Wo, function (e) {
            return Go[e] || e;
        });
    }
    function Qr(e, t) {
        return e.replace(t ? $o : Wo, function (e) {
            return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Go[e] || "&#" + e.charCodeAt(0) + ";";
        });
    }
    function Zr(e, t, n) {
        return (
            (n = n || Qo),
            e.replace(t ? $o : Wo, function (e) {
                return Go[e] || n[e] || e;
            })
        );
    }
    function eo(e, t) {
        return (e = Nt.trim(e)) ? e.split(t || " ") : [];
    }
    function to(e, t) {
        var n = ni(e, " ", ni(e.toUpperCase(), " "));
        return oi(n, t);
    }
    function no(e) {
        return to("td th li dt dd figcaption caption details summary", e.getTextBlockElements());
    }
    function ro(e, n) {
        var r;
        return (
            e &&
                ((r = {}),
                ri((e = "string" == typeof e ? { "*": e } : e), function (e, t) {
                    r[t] = r[t.toUpperCase()] = ("map" === n ? ni : ii)(e, /[, ]/);
                })),
            r
        );
    }
    function oo(i) {
        function e(e, t, n) {
            var r = i[e];
            return r ? (r = ni(r, /[, ]/, ni(r.toUpperCase(), /[, ]/))) : (r = ei[e]) || ((r = to(t, n)), (ei[e] = r)), r;
        }
        var t,
            s,
            n,
            r,
            o,
            a,
            u,
            c,
            S = {},
            l = {},
            N = [],
            f = {},
            d = {},
            m =
                ((t = (i = i || {}).schema),
                (c = {}),
                ei[t] ||
                    ((s = "id accesskey class dir lang style tabindex title role"),
                    (n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                    (r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                    "html4" !== t &&
                        ((s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                        (n += " article aside details dialog figure main header footer hgroup section nav"),
                        (r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                    "html5-strict" !== t &&
                        ((s += " xml:lang"),
                        (r = [r, (u = "acronym applet basefont big font strike tt")].join(" ")),
                        ri(eo(u), function (e) {
                            g(e, "", r);
                        }),
                        (n = [n, (a = "center dir isindex noframes")].join(" ")),
                        (o = [n, r].join(" ")),
                        ri(eo(a), function (e) {
                            g(e, "", o);
                        })),
                    (o = o || [n, r].join(" ")),
                    g("html", "manifest", "head body"),
                    g("head", "", "base command link meta noscript script style title"),
                    g("title hr noscript br"),
                    g("base", "href target"),
                    g("link", "href rel media hreflang type sizes hreflang"),
                    g("meta", "name http-equiv content charset"),
                    g("style", "media type scoped"),
                    g("script", "src async defer type charset"),
                    g("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", o),
                    g("address dt dd div caption", "", o),
                    g("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r),
                    g("blockquote", "cite", o),
                    g("ol", "reversed start type", "li"),
                    g("ul", "", "li"),
                    g("li", "value", o),
                    g("dl", "", "dt dd"),
                    g("a", "href target rel media hreflang type", r),
                    g("q", "cite", r),
                    g("ins del", "cite datetime", o),
                    g("img", "src sizes srcset alt usemap ismap width height"),
                    g("iframe", "src name width height", o),
                    g("embed", "src type width height"),
                    g("object", "data type typemustmatch name usemap form width height", [o, "param"].join(" ")),
                    g("param", "name value"),
                    g("map", "name", [o, "area"].join(" ")),
                    g("area", "alt coords shape href target rel media hreflang type"),
                    g("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === t ? " col" : "")),
                    g("colgroup", "span", "col"),
                    g("col", "span"),
                    g("tbody thead tfoot", "", "tr"),
                    g("tr", "", "td th"),
                    g("td", "colspan rowspan headers", o),
                    g("th", "colspan rowspan headers scope abbr", o),
                    g("form", "accept-charset action autocomplete enctype method name novalidate target", o),
                    g("fieldset", "disabled form name", [o, "legend"].join(" ")),
                    g("label", "form for", r),
                    g(
                        "input",
                        "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                    ),
                    g("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === t ? o : r),
                    g("select", "disabled form multiple name required size", "option optgroup"),
                    g("optgroup", "disabled label", "option"),
                    g("option", "disabled label selected value"),
                    g("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"),
                    g("menu", "type label", [o, "li"].join(" ")),
                    g("noscript", "", o),
                    "html4" !== t &&
                        (g("wbr"),
                        g("ruby", "", [r, "rt rp"].join(" ")),
                        g("figcaption", "", o),
                        g("mark rt rp summary bdi", "", r),
                        g("canvas", "width height", o),
                        g("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [o, "track source"].join(" ")),
                        g("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [o, "track source"].join(" ")),
                        g("picture", "", "img source"),
                        g("source", "src srcset type media sizes"),
                        g("track", "kind src srclang label default"),
                        g("datalist", "", [r, "option"].join(" ")),
                        g("article section nav aside main header footer", "", o),
                        g("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                        g("figure", "", [o, "figcaption"].join(" ")),
                        g("time", "datetime", r),
                        g("dialog", "open", o),
                        g("command", "type label icon disabled checked radiogroup command"),
                        g("output", "for form name", r),
                        g("progress", "value max", r),
                        g("meter", "value min max low high optimum", r),
                        g("details", "open", [o, "summary"].join(" ")),
                        g("keygen", "autofocus challenge disabled form keytype name")),
                    "html5-strict" !== t &&
                        (p("script", "language xml:space"),
                        p("style", "xml:space"),
                        p("object", "declare classid code codebase codetype archive standby align border hspace vspace"),
                        p("embed", "align name hspace vspace"),
                        p("param", "valuetype type"),
                        p("a", "charset name rev shape coords"),
                        p("br", "clear"),
                        p("applet", "codebase archive code object alt name width height align hspace vspace"),
                        p("img", "name longdesc align border hspace vspace"),
                        p("iframe", "longdesc frameborder marginwidth marginheight scrolling align"),
                        p("font basefont", "size color face"),
                        p("input", "usemap align"),
                        p("select"),
                        p("textarea"),
                        p("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                        p("ul", "type compact"),
                        p("li", "type"),
                        p("ol dl menu dir", "compact"),
                        p("pre", "width xml:space"),
                        p("hr", "align noshade size width"),
                        p("isindex", "prompt"),
                        p("table", "summary width frame rules cellspacing cellpadding align bgcolor"),
                        p("col", "width align char charoff valign"),
                        p("colgroup", "width align char charoff valign"),
                        p("thead", "align char charoff valign"),
                        p("tr", "align char charoff valign bgcolor"),
                        p("th", "axis align char charoff valign nowrap bgcolor width height"),
                        p("form", "accept"),
                        p("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"),
                        p("tfoot", "align char charoff valign"),
                        p("tbody", "align char charoff valign"),
                        p("area", "nohref"),
                        p("body", "background bgcolor text link vlink alink")),
                    "html4" !== t &&
                        (p("input button select textarea", "autofocus"),
                        p("input textarea", "placeholder"),
                        p("a", "download"),
                        p("link script img", "crossorigin"),
                        p("img", "loading"),
                        p("iframe", "sandbox seamless allowfullscreen loading")),
                    ri(eo("a form meter progress dfn"), function (e) {
                        c[e] && delete c[e].children[e];
                    }),
                    delete c.caption.children.table,
                    delete c.script,
                    (ei[t] = c)));
        function g(e, t, n) {
            function r(e, t) {
                for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {};
                return n;
            }
            var o, i;
            (t = t || ""), "string" == typeof (n = n || []) && (n = eo(n));
            for (var a = eo(e), u = a.length; u--; ) (i = { attributes: r((o = eo([s, t].join(" ")))), attributesOrder: o, children: r(n, ti) }), (c[a[u]] = i);
        }
        function p(e, t) {
            for (var n, r, o, i = eo(e), a = i.length, u = eo(t); a--; ) for (n = c[i[a]], r = 0, o = u.length; r < o; r++) (n.attributes[u[r]] = {}), n.attributesOrder.push(u[r]);
        }
        !1 === i.verify_html && (i.valid_elements = "*[*]");
        var h = ro(i.valid_styles),
            v = ro(i.invalid_styles, "map"),
            b = ro(i.valid_classes, "map"),
            y = e("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
            C = e("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
            x = e("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
            w = e("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
            E = "td th iframe video audio object script code",
            k = e("non_empty_elements", E + " pre", x),
            _ = e("move_caret_before_on_enter_elements", E + " table", x),
            A = e("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
            R = e("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", A),
            D = e("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp");
        function T(e) {
            return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
        }
        function O(e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                g,
                p,
                h,
                v,
                b,
                y = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                x = /[*?+]/;
            if (e) {
                var w = eo(e, ",");
                for (S["@"] && ((h = S["@"].attributes), (v = S["@"].attributesOrder)), t = 0, n = w.length; t < n; t++)
                    if ((i = y.exec(w[t]))) {
                        if (
                            ((g = i[1]),
                            (c = i[2]),
                            (p = i[3]),
                            (s = i[5]),
                            (a = { attributes: (d = {}), attributesOrder: (m = []) }),
                            "#" === g && (a.paddEmpty = !0),
                            "-" === g && (a.removeEmpty = !0),
                            "!" === i[4] && (a.removeEmptyAttrs = !0),
                            h &&
                                (ne(h, function (e, t) {
                                    d[t] = e;
                                }),
                                m.push.apply(m, v)),
                            s)
                        )
                            for (r = 0, o = (s = eo(s, "|")).length; r < o; r++)
                                (i = C.exec(s[r])) &&
                                    ((u = {}),
                                    (f = i[1]),
                                    (l = i[2].replace(/[\\:]:/g, ":")),
                                    (g = i[3]),
                                    (b = i[4]),
                                    "!" === f && ((a.attributesRequired = a.attributesRequired || []), a.attributesRequired.push(l), (u.required = !0)),
                                    "-" !== f
                                        ? (g &&
                                              ("=" === g && ((a.attributesDefault = a.attributesDefault || []), a.attributesDefault.push({ name: l, value: b }), (u.defaultValue = b)),
                                              ":" === g && ((a.attributesForced = a.attributesForced || []), a.attributesForced.push({ name: l, value: b }), (u.forcedValue = b)),
                                              "<" === g && (u.validValues = ni(b, "?"))),
                                          x.test(l) ? ((a.attributePatterns = a.attributePatterns || []), (u.pattern = T(l)), a.attributePatterns.push(u)) : (d[l] || m.push(l), (d[l] = u)))
                                        : (delete d[l], m.splice(ai(m, l), 1)));
                        h || "@" !== c || ((h = d), (v = m)), p && ((a.outputName = c), (S[p] = a)), x.test(c) ? ((a.pattern = T(c)), N.push(a)) : (S[c] = a);
                    }
            }
        }
        function B(e) {
            (S = {}),
                (N = []),
                O(e),
                ri(m, function (e, t) {
                    l[t] = e.children;
                });
        }
        function P(e) {
            var a = /^(~)?(.+)$/;
            e &&
                ((ei.text_block_elements = ei.block_elements = null),
                ri(eo(e, ","), function (e) {
                    var t,
                        n = a.exec(e),
                        r = "~" === n[1],
                        o = r ? "span" : "div",
                        i = n[2];
                    (l[i] = l[o]),
                        (f[i] = o),
                        r || ((R[i.toUpperCase()] = {}), (R[i] = {})),
                        S[i] || ((t = S[o]), delete (t = oi({}, t)).removeEmptyAttrs, delete t.removeEmpty, (S[i] = t)),
                        ri(l, function (e, t) {
                            e[o] && ((l[t] = e = oi({}, l[t])), (e[i] = e[o]));
                        });
                }));
        }
        function L(e) {
            var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
            (ei[i.schema] = null),
                e &&
                    ri(eo(e, ","), function (e) {
                        var t,
                            n,
                            r = o.exec(e);
                        r &&
                            ((n = r[1]),
                            (t = n ? l[r[2]] : (l[r[2]] = { "#comment": {} })),
                            (t = l[r[2]]),
                            ri(eo(r[3], "|"), function (e) {
                                "-" === n ? delete t[e] : (t[e] = {});
                            }));
                    });
        }
        function I(e) {
            var t,
                n = S[e];
            if (n) return n;
            for (t = N.length; t--; ) if ((n = N[t]).pattern.test(e)) return n;
        }
        ri((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function (e) {
            d[e] = new RegExp("</" + e + "[^>]*>", "gi");
        }),
            i.valid_elements
                ? B(i.valid_elements)
                : (ri(m, function (e, t) {
                      (S[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }), (l[t] = e.children);
                  }),
                  "html5" !== i.schema &&
                      ri(eo("strong/b em/i"), function (e) {
                          var t = eo(e, "/");
                          S[t[1]].outputName = t[0];
                      }),
                  ri(D, function (e, t) {
                      S[t] && (i.padd_empty_block_inline_children && (S[t].paddInEmptyBlock = !0), (S[t].removeEmpty = !0));
                  }),
                  ri(eo("ol ul blockquote a table tbody"), function (e) {
                      S[e] && (S[e].removeEmpty = !0);
                  }),
                  ri(eo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
                      S[e].paddEmpty = !0;
                  }),
                  ri(eo("span"), function (e) {
                      S[e].removeEmptyAttrs = !0;
                  })),
            P(i.custom_elements),
            L(i.valid_children),
            O(i.extended_valid_elements),
            L("+ol[ul|ol],+ul[ul|ol]"),
            ri({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, function (e, t) {
                S[t] && (S[t].parentsRequired = eo(e));
            }),
            i.invalid_elements &&
                ri(ii(i.invalid_elements), function (e) {
                    S[e] && delete S[e];
                }),
            I("span") || O("span[!data-mce-type|*]");
        var M = J(h),
            F = J(v),
            U = J(b),
            z = J(w),
            H = J(R),
            j = J(A),
            V = J(D),
            q = J(x),
            $ = J(C),
            W = J(k),
            K = J(_),
            X = J(y),
            Y = J(d),
            G = J(f);
        return {
            children: l,
            elements: S,
            getValidStyles: M,
            getValidClasses: U,
            getBlockElements: H,
            getInvalidStyles: F,
            getShortEndedElements: q,
            getTextBlockElements: j,
            getTextInlineElements: V,
            getBoolAttrs: z,
            getElementRule: I,
            getSelfClosingElements: $,
            getNonEmptyElements: W,
            getMoveCaretBeforeOnEnterElements: K,
            getWhiteSpaceElements: X,
            getSpecialElements: Y,
            isValidChild: function (e, t) {
                var n = l[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()]);
            },
            isValid: function (e, t) {
                var n,
                    r,
                    o = I(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if ((n = o.attributePatterns)) for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
                }
                return !1;
            },
            getCustomElements: G,
            addValidElements: O,
            setValidElements: B,
            addCustomElements: P,
            addValidChildren: L,
        };
    }
    function io(e, t, n, r) {
        function o(e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
        }
        return "#" + o(t) + o(n) + o(r);
    }
    function ao(b, e) {
        var u,
            o,
            y = this,
            C = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            w = /\s*([^:]+):\s*([^;]+);?/g,
            S = /\s+$/,
            N = {},
            E = xo;
        (b = b || {}), e && ((u = e.getValidStyles()), (o = e.getInvalidStyles()));
        for (var t = ("\\\" \\' \\; \\: ; : " + E).split(" "), k = 0; k < t.length; k++) (N[t[k]] = E + k), (N[E + k] = t[k]);
        return {
            toHex: function (e) {
                return e.replace(C, io);
            },
            parse: function (e) {
                function t(e, t, n) {
                    var r = p[e + "-top" + t];
                    if (r) {
                        var o = p[e + "-right" + t];
                        if (o) {
                            var i = p[e + "-bottom" + t];
                            if (i) {
                                var a = p[e + "-left" + t];
                                if (a) {
                                    var u = [r, o, i, a];
                                    for (k = u.length - 1; k-- && u[k] === u[k + 1]; );
                                    (-1 < k && n) || ((p[e + t] = -1 === k ? u[0] : u.join(" ")), delete p[e + "-top" + t], delete p[e + "-right" + t], delete p[e + "-bottom" + t], delete p[e + "-left" + t]);
                                }
                            }
                        }
                    }
                }
                function n(e) {
                    var t,
                        n = p[e];
                    if (n) {
                        for (t = (n = n.split(" ")).length; t--; ) if (n[t] !== n[0]) return;
                        return (p[e] = n[0]), 1;
                    }
                }
                function r(e) {
                    return (f = !0), N[e];
                }
                function u(e, t) {
                    return (
                        f &&
                            (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                                return N[e];
                            })),
                        t ? e : e.replace(/\\([\'\";:])/g, "$1")
                    );
                }
                function o(e) {
                    return String.fromCharCode(parseInt(e.slice(1), 16));
                }
                function i(e) {
                    return e.replace(/\\[0-9a-f]+/gi, o);
                }
                function a(e, t, n, r, o, i) {
                    if ((o = o || i)) return "'" + (o = u(o)).replace(/\'/g, "\\'") + "'";
                    if (((t = u(t || n || r)), !b.allow_script_urls)) {
                        var a = t.replace(/[\s\r\n]+/g, "");
                        if (/(java|vb)script:/i.test(a)) return "";
                        if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return "";
                    }
                    return "url('" + (t = h ? h.call(v, t, "style") : t).replace(/\'/g, "\\'") + "')";
                }
                var s,
                    c,
                    l,
                    f,
                    d,
                    m,
                    g,
                    p = {},
                    h = b.url_converter,
                    v = b.url_converter_scope || y;
                if (e) {
                    for (
                        e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, r).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                            return e.replace(/[;:]/g, r);
                        });
                        (s = w.exec(e));

                    )
                        (w.lastIndex = s.index + s[0].length),
                            (c = s[1].replace(S, "").toLowerCase()),
                            (l = s[2].replace(S, "")),
                            c &&
                                l &&
                                ((c = i(c)),
                                (l = i(l)),
                                -1 === c.indexOf(E) &&
                                    -1 === c.indexOf('"') &&
                                    (b.allow_script_urls || ("behavior" !== c && !/expression\s*\(|\/\*|\*\//.test(l))) &&
                                    ("font-weight" === c && "700" === l ? (l = "bold") : ("color" !== c && "background-color" !== c) || (l = l.toLowerCase()), (l = (l = l.replace(C, io)).replace(x, a)), (p[c] = f ? u(l, !0) : l)));
                    t("border", "", !0),
                        t("border", "-width"),
                        t("border", "-color"),
                        t("border", "-style"),
                        t("padding", ""),
                        t("margin", ""),
                        (m = "border-style"),
                        (g = "border-color"),
                        n((d = "border-width")) && n(m) && n(g) && ((p.border = p[d] + " " + p[m] + " " + p[g]), delete p[d], delete p[m], delete p[g]),
                        "medium none" === p.border && delete p.border,
                        "none" === p["border-image"] && delete p["border-image"];
                }
                return p;
            },
            serialize: function (i, r) {
                function e(e) {
                    var t,
                        n = u[e];
                    if (n) for (var r = 0, o = n.length; r < o; r++) (e = n[r]), (t = i[e]) && (a += (0 < a.length ? " " : "") + e + ": " + t + ";");
                }
                var a = "";
                return (
                    r && u
                        ? (e("*"), e(r))
                        : ne(i, function (e, t) {
                              var n;
                              !e || (o && (((n = o["*"]) && n[t]) || ((n = o[r]) && n[t]))) || (a += (0 < a.length ? " " : "") + t + ": " + e + ";");
                          }),
                    a
                );
            },
        };
    }
    function uo(e) {
        return e instanceof Event || y(e.initEvent);
    }
    function so(e, t, n, r) {
        var o,
            i,
            a = (function (e) {
                var t,
                    n = null != r ? r : {};
                for (t in e) Ee(ui, t) || (n[t] = e[t]);
                return (
                    V(n.composedPath) &&
                        (n.composedPath = function () {
                            return e.composedPath();
                        }),
                    n
                );
            })(t);
        return (
            (a.type = e),
            K(a.target) && (a.target = null !== (o = a.srcElement) && void 0 !== o ? o : n),
            (K((i = t).preventDefault) || uo(i)) &&
                ((a.preventDefault = function () {
                    (a.defaultPrevented = !0), (a.isDefaultPrevented = w), y(t.preventDefault) ? t.preventDefault() : uo(t) && (t.returnValue = !1);
                }),
                (a.stopPropagation = function () {
                    (a.cancelBubble = !0), (a.isPropagationStopped = w), y(t.stopPropagation) ? t.stopPropagation() : uo(t) && (t.cancelBubble = !0);
                }),
                (a.stopImmediatePropagation = function () {
                    (a.isImmediatePropagationStopped = w), a.stopPropagation();
                }),
                a.isDefaultPrevented !== w && a.isDefaultPrevented !== D && ((a.isDefaultPrevented = !0 === a.defaultPrevented ? w : D), (a.isPropagationStopped = !0 === a.cancelBubble ? w : D), (a.isImmediatePropagationStopped = D))),
            a
        );
    }
    function co(e, t, n, r) {
        e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
    }
    function lo(e, t, n, r) {
        e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n);
    }
    function fo(e, t) {
        var n,
            r,
            o,
            i,
            a = so(e.type, e, document, t);
        return (
            V((i = e)) &&
                si.test(i.type) &&
                b(e.pageX) &&
                !b(e.clientX) &&
                ((r = (n = a.target.ownerDocument || document).documentElement),
                (o = n.body),
                (a.pageX = e.clientX + ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) - ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
                (a.pageY = e.clientY + ((r && r.scrollTop) || (o && o.scrollTop) || 0) - ((r && r.clientTop) || (o && o.clientTop) || 0))),
            b(a.metaKey) && (a.metaKey = !1),
            a
        );
    }
    var mo = Or(["h1", "h2", "h3", "h4", "h5", "h6"]),
        go = Or([
            "article",
            "aside",
            "details",
            "div",
            "dt",
            "figcaption",
            "footer",
            "form",
            "fieldset",
            "header",
            "hgroup",
            "html",
            "main",
            "nav",
            "section",
            "summary",
            "body",
            "p",
            "dl",
            "multicol",
            "dd",
            "figure",
            "address",
            "center",
            "blockquote",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "listing",
            "xmp",
            "pre",
            "plaintext",
            "menu",
            "dir",
            "ul",
            "ol",
            "li",
            "hr",
            "table",
            "tbody",
            "thead",
            "tfoot",
            "th",
            "tr",
            "td",
            "caption",
        ]),
        po = Or(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        ho = Or(["ul", "ol", "dl"]),
        vo = Or(["li", "dd", "dt"]),
        bo = Or(["thead", "tbody", "tfoot"]),
        yo = Or(["td", "th"]),
        Co = Or(["pre", "script", "textarea", "style"]),
        xo = "\ufeff",
        wo = "\xa0",
        So = xo,
        No = function (e) {
            return e === xo;
        },
        Eo = function (e) {
            return e.replace(/\uFEFF/g, "");
        },
        ko = Hn,
        _o = Vn,
        Ao = function (e) {
            return _o(e) && e.data[0] === So;
        },
        Ro = function (e) {
            return _o(e) && e.data[e.data.length - 1] === So;
        },
        Do = Yn,
        To = Gn,
        Oo = Kn,
        Bo = Vn,
        Po = on(["script", "style", "textarea"]),
        Lo = on(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        Io = on(["table"]),
        Mo = Mr,
        Fo = function (e) {
            return !1 === (Hn((t = e)) && "true" === t.getAttribute("unselectable")) && To(e);
            var t;
        },
        Uo = /^[ \t\r\n]*$/,
        zo = un("data-mce-bookmark"),
        Ho = un("data-mce-bogus"),
        jo = function (e) {
            return Hn(e) && "all" === e.getAttribute("data-mce-bogus");
        },
        Vo = function (e, t, n) {
            var r = n || t;
            if (Hn(t) && Yr(t)) return t;
            for (var o, i, a, u, s, c, l, f, d, m, g, p = t.childNodes, h = p.length - 1; 0 <= h; h--) Vo(e, p[h], r);
            return (
                !Hn(t) || (1 === (o = t.childNodes).length && Yr(o[0]) && t.parentNode.insertBefore(o[0], t)),
                Wn((a = t)) ||
                    $n(a) ||
                    Wr(t, r) ||
                    (Hn((i = t)) && 0 < i.childNodes.length) ||
                    ((s = r), Vn((u = t)) && 0 < u.data.length && ((f = new Dr((c = u), (l = s)).prev(!1)), (d = new Dr(c, l).next(!1)), (m = b(f) || Xr(f, l)), (g = b(d) || Xr(d, l)), m && g)) ||
                    e.remove(t),
                t
            );
        },
        qo = Nt.makeMap,
        $o = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Wo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Ko = /[<>&\"\']/g,
        Xo = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        Yo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178",
        },
        Go = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" },
        Jo = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" },
        Qo = Gr(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
        ),
        Zo = {
            encodeRaw: Jr,
            encodeAllRaw: function (e) {
                return ("" + e).replace(Ko, function (e) {
                    return Go[e] || e;
                });
            },
            encodeNumeric: Qr,
            encodeNamed: Zr,
            getEncodeFunc: function (e, t) {
                var n = Gr(t) || Qo,
                    r = qo(e.replace(/\+/g, ","));
                return r.named && r.numeric
                    ? function (e, t) {
                          return e.replace(t ? $o : Wo, function (e) {
                              return void 0 !== Go[e] ? Go[e] : void 0 !== n[e] ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";";
                          });
                      }
                    : r.named
                    ? t
                        ? function (e, t) {
                              return Zr(e, t, n);
                          }
                        : Zr
                    : r.numeric
                    ? Qr
                    : Jr;
            },
            decode: function (e) {
                return e.replace(Xo, function (e, t) {
                    return t
                        ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10))
                            ? ((t -= 65536), String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                            : Yo[t] || String.fromCharCode(t)
                        : Jo[e] || Qo[e] || ((n = e), ((r = Et.fromTag("div").dom).innerHTML = n), r.textContent || r.innerText || n);
                    var n, r;
                });
            },
        },
        ei = {},
        ti = {},
        ni = Nt.makeMap,
        ri = Nt.each,
        oi = Nt.extend,
        ii = Nt.explode,
        ai = Nt.inArray,
        ui = { keyLocation: !0, layerX: !0, layerY: !0, returnValue: !0, webkitMovementX: !0, webkitMovementY: !0, keyIdentifier: !0, mozPressure: !0 },
        si = /^(?:mouse|contextmenu)|click/,
        ci =
            ((li.prototype.bind = function (e, t, n, r) {
                function o(e) {
                    f.executeHandlers(fo(e || d.event), i);
                }
                var i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f = this,
                    d = window;
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                    e[f.expando] ? (i = e[f.expando]) : ((i = f.count++), (e[f.expando] = i), (f.events[i] = {})), (r = r || e);
                    for (var m = t.split(" "), g = m.length; g--; )
                        (c = o),
                            (s = l = !1),
                            "DOMContentLoaded" === (u = m[g]) && (u = "ready"),
                            f.domLoaded && "ready" === u && "complete" === e.readyState
                                ? n.call(r, fo({ type: u }))
                                : (f.hasMouseEnterLeave ||
                                      ((s = f.mouseEnterLeave[u]) &&
                                          (c = function (e) {
                                              var t = e.currentTarget,
                                                  n = e.relatedTarget;
                                              if (n && t.contains) n = t.contains(n);
                                              else for (; n && n !== t; ) n = n.parentNode;
                                              n || (((e = fo(e || d.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter"), (e.target = t), f.executeHandlers(e, i));
                                          })),
                                  f.hasFocusIn ||
                                      ("focusin" !== u && "focusout" !== u) ||
                                      ((l = !0),
                                      (s = "focusin" === u ? "focus" : "blur"),
                                      (c = function (e) {
                                          ((e = fo(e || d.event)).type = "focus" === e.type ? "focusin" : "focusout"), f.executeHandlers(e, i);
                                      })),
                                  (a = f.events[i][u])
                                      ? "ready" === u && f.domLoaded
                                          ? n(fo({ type: u }))
                                          : a.push({ func: n, scope: r })
                                      : ((f.events[i][u] = a = [{ func: n, scope: r }]),
                                        (a.fakeName = s),
                                        (a.capture = l),
                                        (a.nativeHandler = c),
                                        "ready" === u
                                            ? (function (e, t, n) {
                                                  var r,
                                                      o = e.document,
                                                      i = { type: "ready" };
                                                  n.domLoaded
                                                      ? t(i)
                                                      : ((r = function () {
                                                            lo(e, "DOMContentLoaded", r), lo(e, "load", r), n.domLoaded || ((n.domLoaded = !0), t(i)), (e = null);
                                                        }),
                                                        "complete" === o.readyState || ("interactive" === o.readyState && o.body) ? r() : co(e, "DOMContentLoaded", r),
                                                        n.domLoaded || co(e, "load", r));
                                              })(e, c, f)
                                            : co(e, s || u, c, l)));
                    return (e = a = null), n;
                }
            }),
            (li.prototype.unbind = function (n, e, t) {
                var r, o, i;
                if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
                var a = n[this.expando];
                if (a) {
                    if (((i = this.events[a]), e)) {
                        for (var u, s, c, l, f = e.split(" "), d = f.length; d--; )
                            if ((l = i[(o = f[d])])) {
                                if (t)
                                    for (r = l.length; r--; )
                                        l[r].func === t && ((u = l.nativeHandler), (s = l.fakeName), (c = l.capture), ((l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u), (l.fakeName = s), (l.capture = c), (i[o] = l));
                                (t && 0 !== l.length) || (delete i[o], lo(n, l.fakeName || o, l.nativeHandler, l.capture));
                            }
                    } else
                        ne(i, function (e, t) {
                            lo(n, e.fakeName || t, e.nativeHandler, e.capture);
                        }),
                            (i = {});
                    for (o in i) if (Ee(i, o)) return this;
                    delete this.events[a];
                    try {
                        delete n[this.expando];
                    } catch (e) {
                        n[this.expando] = null;
                    }
                }
                return this;
            }),
            (li.prototype.fire = function (e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                for (var o = fo({ type: t, target: e }, n); (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped(); );
                return this;
            }),
            (li.prototype.clean = function (e) {
                var t, n;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                if ((e[this.expando] && this.unbind(e), (e = e.getElementsByTagName ? e : e.document) && e.getElementsByTagName))
                    for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--; ) (e = n[t])[this.expando] && this.unbind(e);
                return this;
            }),
            (li.prototype.destroy = function () {
                this.events = {};
            }),
            (li.prototype.cancel = function (e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
            }),
            (li.prototype.executeHandlers = function (e, t) {
                var n = this.events[t],
                    r = n && n[e.type];
                if (r)
                    for (var o = 0, i = r.length; o < i; o++) {
                        var a = r[o];
                        if ((a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped())) return;
                    }
            }),
            (li.Event = new li()),
            li);
    function li() {
        (this.domLoaded = !1),
            (this.events = {}),
            (this.count = 1),
            (this.expando = "mce-data-" + (+new Date()).toString(32)),
            (this.hasMouseEnterLeave = "onmouseenter" in document.documentElement),
            (this.hasFocusIn = "onfocusin" in document.documentElement),
            (this.count = 1);
    }
    function fi(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    var di,
        mi,
        gi,
        pi,
        hi,
        vi,
        bi,
        yi,
        Ci,
        xi,
        wi,
        Si,
        Ni,
        Ei,
        ki,
        _i,
        Ai,
        Ri = "sizzle" + -new Date(),
        Di = window.document,
        Ti = 0,
        Oi = 0,
        Bi = la(),
        Pi = la(),
        Li = la(),
        Ii = function (e, t) {
            return e === t && (xi = !0), 0;
        },
        Mi = "undefined",
        Fi = {}.hasOwnProperty,
        Ui = [],
        zi = Ui.pop,
        Hi = Ui.push,
        ji = Ui.push,
        Vi = Ui.slice,
        qi =
            Ui.indexOf ||
            function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                return -1;
            },
        $i = "[\\x20\\t\\r\\n\\f]",
        Wi = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        Ki = "\\[" + $i + "*(" + Wi + ")(?:" + $i + "*([*^$|!~]?=)" + $i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Wi + "))|)" + $i + "*\\]",
        Xi = ":(" + Wi + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Ki + ")*)|.*)\\)|)",
        Yi = new RegExp("^" + $i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $i + "+$", "g"),
        Gi = new RegExp("^" + $i + "*," + $i + "*"),
        Ji = new RegExp("^" + $i + "*([>+~]|" + $i + ")" + $i + "*"),
        Qi = new RegExp("=" + $i + "*([^\\]'\"]*?)" + $i + "*\\]", "g"),
        Zi = new RegExp(Xi),
        ea = new RegExp("^" + Wi + "$"),
        ta = {
            ID: new RegExp("^#(" + Wi + ")"),
            CLASS: new RegExp("^\\.(" + Wi + ")"),
            TAG: new RegExp("^(" + Wi + "|[*])"),
            ATTR: new RegExp("^" + Ki),
            PSEUDO: new RegExp("^" + Xi),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $i + "*(even|odd|(([+-]|)(\\d*)n|)" + $i + "*(?:([+-]|)" + $i + "*(\\d+)|))" + $i + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + $i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $i + "*((?:-\\d)?\\d*)" + $i + "*\\)|)(?=[^-]|$)", "i"),
        },
        na = /^(?:input|select|textarea|button)$/i,
        ra = /^h\d$/i,
        oa = /^[^{]+\{\s*\[native \w/,
        ia = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ua = /'|\\/g,
        sa = new RegExp("\\\\([\\da-f]{1,6}" + $i + "?|(" + $i + ")|.)", "ig");
    try {
        ji.apply((Ui = Vi.call(Di.childNodes)), Di.childNodes), Ui[Di.childNodes.length].nodeType;
    } catch (e) {
        ji = {
            apply: Ui.length
                ? function (e, t) {
                      Hi.apply(e, Vi.call(t));
                  }
                : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                  },
        };
    }
    var ca = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if (((t ? t.ownerDocument || t : Di) !== Si && wi(t), (n = n || []), !e || "string" != typeof e)) return n;
        if (1 !== (u = (t = t || Si).nodeType) && 9 !== u) return [];
        if (Ei && !r) {
            if ((o = ia.exec(e)))
                if ((a = o[1])) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n;
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Ai(t, i) && i.id === a) return n.push(i), n;
                } else {
                    if (o[2]) return ji.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && di.getElementsByClassName) return ji.apply(n, t.getElementsByClassName(a)), n;
                }
            if (di.qsa && (!ki || !ki.test(e))) {
                if (((f = l = Ri), (d = t), (m = 9 === u && e), 1 === u && "object" !== t.nodeName.toLowerCase())) {
                    for (c = hi(e), (l = t.getAttribute("id")) ? (f = l.replace(ua, "\\$&")) : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--; ) c[s] = f + ha(c[s]);
                    (d = (aa.test(e) && ga(t.parentNode)) || t), (m = c.join(","));
                }
                if (m)
                    try {
                        return ji.apply(n, d.querySelectorAll(m)), n;
                    } catch (e) {
                    } finally {
                        l || t.removeAttribute("id");
                    }
            }
        }
        return bi(e.replace(Yi, "$1"), t, n, r);
    };
    function la() {
        var n = [];
        function r(e, t) {
            return n.push(e + " ") > mi.cacheLength && delete r[n.shift()], (r[e + " "] = t);
        }
        return r;
    }
    function fa(e) {
        return (e[Ri] = !0), e;
    }
    function da(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
    }
    function ma(a) {
        return fa(function (i) {
            return (
                (i = +i),
                fa(function (e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--; ) e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
                })
            );
        });
    }
    function ga(e) {
        return e && typeof e.getElementsByTagName != Mi && e;
    }
    function pa() {}
    function ha(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
    }
    function va(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Oi++;
        return e.first
            ? function (e, t, n) {
                  for (; (e = e[u]); ) if (1 === e.nodeType || s) return a(e, t, n);
              }
            : function (e, t, n) {
                  var r,
                      o,
                      i = [Ti, c];
                  if (n) {
                      for (; (e = e[u]); ) if ((1 === e.nodeType || s) && a(e, t, n)) return !0;
                  } else
                      for (; (e = e[u]); )
                          if (1 === e.nodeType || s) {
                              if ((r = (o = e[Ri] || (e[Ri] = {}))[u]) && r[0] === Ti && r[1] === c) return (i[2] = r[2]);
                              if (((o[u] = i)[2] = a(e, t, n))) return !0;
                          }
              };
    }
    function ba(o) {
        return 1 < o.length
            ? function (e, t, n) {
                  for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
                  return !0;
              }
            : o[0];
    }
    function ya(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++) (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
        return a;
    }
    function Ca(e) {
        return void 0 !== e;
    }
    function xa(e) {
        return "string" == typeof e;
    }
    function wa(e, t) {
        var n,
            r = (t = t || Ra).createElement("div"),
            o = t.createDocumentFragment();
        for (r.innerHTML = e; (n = r.firstChild); ) o.appendChild(n);
        return o;
    }
    function Sa(e, t) {
        return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
    }
    function Na(e, t, n) {
        var r, o;
        return (
            (t = Ya(t)[0]),
            e.each(function () {
                (n && r === this.parentNode) || ((r = this.parentNode), (o = t.cloneNode(!1)), this.parentNode.insertBefore(o, this)), o.appendChild(this);
            }),
            e
        );
    }
    function Ea(e, t) {
        return new Ya.fn.init(e, t);
    }
    function ka(e) {
        return null == e ? "" : ("" + e).replace(ja, "");
    }
    function _a(e, t) {
        var n, r, o, i;
        if (e)
            if (void 0 === (n = e.length)) {
                for (r in e) if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i))) break;
            } else for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
        return e;
    }
    function Aa(e, n) {
        var r = [];
        return (
            _a(e, function (e, t) {
                n(t, e) && r.push(t);
            }),
            r
        );
    }
    (di = ca.support = {}),
        (pi = ca.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (wi = ca.setDocument = function (e) {
            var t,
                s = e ? e.ownerDocument || e : Di,
                n = s.defaultView;
            return s !== Si && 9 === s.nodeType && s.documentElement
                ? ((Ni = (Si = s).documentElement),
                  (Ei = !pi(s)),
                  n &&
                      n !==
                          (function (e) {
                              try {
                                  return e.top;
                              } catch (e) {}
                              return null;
                          })(n) &&
                      (n.addEventListener
                          ? n.addEventListener(
                                "unload",
                                function () {
                                    wi();
                                },
                                !1
                            )
                          : n.attachEvent &&
                            n.attachEvent("onunload", function () {
                                wi();
                            })),
                  (di.attributes = !0),
                  (di.getElementsByTagName = !0),
                  (di.getElementsByClassName = oa.test(s.getElementsByClassName)),
                  (di.getById = !0),
                  (mi.find.ID = function (e, t) {
                      if (typeof t.getElementById != Mi && Ei) {
                          var n = t.getElementById(e);
                          return n && n.parentNode ? [n] : [];
                      }
                  }),
                  (mi.filter.ID = function (e) {
                      var t = e.replace(sa, fi);
                      return function (e) {
                          return e.getAttribute("id") === t;
                      };
                  }),
                  (mi.find.TAG = di.getElementsByTagName
                      ? function (e, t) {
                            if (typeof t.getElementsByTagName != Mi) return t.getElementsByTagName(e);
                        }
                      : function (e, t) {
                            var n,
                                r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" !== e) return i;
                            for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                            return r;
                        }),
                  (mi.find.CLASS =
                      di.getElementsByClassName &&
                      function (e, t) {
                          if (Ei) return t.getElementsByClassName(e);
                      }),
                  (_i = []),
                  (ki = []),
                  (di.disconnectedMatch = !0),
                  (ki = ki.length && new RegExp(ki.join("|"))),
                  (_i = _i.length && new RegExp(_i.join("|"))),
                  (t = oa.test(Ni.compareDocumentPosition)),
                  (Ai =
                      t || oa.test(Ni.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                            }
                          : function (e, t) {
                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                return !1;
                            }),
                  (Ii = t
                      ? function (e, t) {
                            return e === t
                                ? ((xi = !0), 0)
                                : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) ||
                                      (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!di.sortDetached && t.compareDocumentPosition(e) === n)
                                          ? e === s || (e.ownerDocument === Di && Ai(Di, e))
                                              ? -1
                                              : t === s || (t.ownerDocument === Di && Ai(Di, t))
                                              ? 1
                                              : Ci
                                              ? qi.call(Ci, e) - qi.call(Ci, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1);
                            var n;
                        }
                      : function (e, t) {
                            if (e === t) return (xi = !0), 0;
                            var n,
                                r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                u = [t];
                            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : Ci ? qi.call(Ci, e) - qi.call(Ci, t) : 0;
                            if (o === i) return da(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) u.unshift(n);
                            for (; a[r] === u[r]; ) r++;
                            return r ? da(a[r], u[r]) : a[r] === Di ? -1 : u[r] === Di ? 1 : 0;
                        }),
                  s)
                : Si;
        }),
        (ca.matches = function (e, t) {
            return ca(e, null, null, t);
        }),
        (ca.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== Si && wi(e), (t = t.replace(Qi, "='$1']")), di.matchesSelector && Ei && (!_i || !_i.test(t)) && (!ki || !ki.test(t))))
                try {
                    var n = (void 0).call(e, t);
                    if (n || di.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {}
            return 0 < ca(t, Si, null, [e]).length;
        }),
        (ca.contains = function (e, t) {
            return (e.ownerDocument || e) !== Si && wi(e), Ai(e, t);
        }),
        (ca.attr = function (e, t) {
            (e.ownerDocument || e) !== Si && wi(e);
            var n = mi.attrHandle[t.toLowerCase()],
                r = n && Fi.call(mi.attrHandle, t.toLowerCase()) ? n(e, t, !Ei) : void 0;
            return void 0 !== r ? r : di.attributes || !Ei ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (ca.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ca.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                o = 0;
            if (((xi = !di.detectDuplicates), (Ci = !di.sortStable && e.slice(0)), e.sort(Ii), xi)) {
                for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                for (; r--; ) e.splice(n[r], 1);
            }
            return (Ci = null), e;
        }),
        (gi = ca.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += gi(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += gi(t);
            return n;
        }),
        ((mi = ca.selectors = {
            cacheLength: 50,
            createPseudo: fa,
            match: ta,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(sa, fi)), (e[3] = (e[3] || e[4] || e[5] || "").replace(sa, fi)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ca.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ca.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return ta.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && Zi.test(n) && (t = hi(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(sa, fi).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = Bi[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + $i + ")" + e + "(" + $i + "|$)")) &&
                            Bi(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute != Mi && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, o) {
                    return function (e) {
                        var t = ca.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === o
                                      : "!=" === r
                                      ? t !== o
                                      : "^=" === r
                                      ? o && 0 === t.indexOf(o)
                                      : "*=" === r
                                      ? o && -1 < t.indexOf(o)
                                      : "$=" === r
                                      ? o && t.slice(-o.length) === o
                                      : "~=" === r
                                      ? -1 < (" " + t + " ").indexOf(o)
                                      : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"));
                    };
                },
                CHILD: function (m, e, t, g, p) {
                    var h = "nth" !== m.slice(0, 3),
                        v = "last" !== m.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === p
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  o,
                                  i,
                                  a,
                                  u,
                                  s,
                                  c = h != v ? "nextSibling" : "previousSibling",
                                  l = e.parentNode,
                                  f = b && e.nodeName.toLowerCase(),
                                  d = !n && !b;
                              if (l) {
                                  if (h) {
                                      for (; c; ) {
                                          for (i = e; (i = i[c]); ) if (b ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                          s = c = "only" === m && !s && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((s = [v ? l.firstChild : l.lastChild]), v && d)) {
                                      for (u = (r = (o = l[Ri] || (l[Ri] = {}))[m] || [])[0] === Ti && r[1], a = r[0] === Ti && r[2], i = u && l.childNodes[u]; (i = (++u && i && i[c]) || (a = u = 0) || s.pop()); )
                                          if (1 === i.nodeType && ++a && i === e) {
                                              o[m] = [Ti, u, a];
                                              break;
                                          }
                                  } else if (d && (r = (e[Ri] || (e[Ri] = {}))[m]) && r[0] === Ti) a = r[1];
                                  else for (; (i = (++u && i && i[c]) || (a = u = 0) || s.pop()) && ((b ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Ri] || (i[Ri] = {}))[m] = [Ti, a]), i !== e)); );
                                  return (a -= p) === g || (a % g == 0 && 0 <= a / g);
                              }
                          };
                },
                PSEUDO: function (e, i) {
                    var t,
                        a = mi.pseudos[e] || mi.setFilters[e.toLowerCase()] || ca.error("unsupported pseudo: " + e);
                    return a[Ri]
                        ? a(i)
                        : 1 < a.length
                        ? ((t = [e, e, "", i]),
                          mi.setFilters.hasOwnProperty(e.toLowerCase())
                              ? fa(function (e, t) {
                                    for (var n, r = a(e, i), o = r.length; o--; ) e[(n = qi.call(e, r[o]))] = !(t[n] = r[o]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: fa(function (e) {
                    var r = [],
                        o = [],
                        u = vi(e.replace(Yi, "$1"));
                    return u[Ri]
                        ? fa(function (e, t, n, r) {
                              for (var o, i = u(e, null, r, []), a = e.length; a--; ) (o = i[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), u(r, null, n, o), (r[0] = null), !o.pop();
                          };
                }),
                has: fa(function (t) {
                    return function (e) {
                        return 0 < ca(t, e).length;
                    };
                }),
                contains: fa(function (t) {
                    return (
                        (t = t.replace(sa, fi)),
                        function (e) {
                            return -1 < (e.textContent || e.innerText || gi(e)).indexOf(t);
                        }
                    );
                }),
                lang: fa(function (n) {
                    return (
                        ea.test(n || "") || ca.error("unsupported lang: " + n),
                        (n = n.replace(sa, fi).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = Ei ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === Ni;
                },
                focus: function (e) {
                    return e === Si.activeElement && (!Si.hasFocus || Si.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                    return !1 === e.disabled;
                },
                disabled: function (e) {
                    return !0 === e.disabled;
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !mi.pseudos.empty(e);
                },
                header: function (e) {
                    return ra.test(e.nodeName);
                },
                input: function (e) {
                    return na.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ma(function () {
                    return [0];
                }),
                last: ma(function (e, t) {
                    return [t - 1];
                }),
                eq: ma(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: ma(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ma(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ma(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: ma(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = mi.pseudos.eq),
        Y(["radio", "checkbox", "file", "password", "image"], function (e) {
            var t;
            mi.pseudos[e] =
                ((t = e),
                function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                });
        }),
        Y(["submit", "reset"], function (e) {
            var n;
            mi.pseudos[e] =
                ((n = e),
                function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                });
        }),
        (pa.prototype = mi.filters = mi.pseudos),
        (mi.setFilters = new pa()),
        (hi = ca.tokenize = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = Pi[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], s = mi.preFilter; a; ) {
                for (i in ((n && !(r = Gi.exec(a))) || (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = Ji.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(Yi, " ") }), (a = a.slice(n.length))),
                mi.filter))
                    mi.filter.hasOwnProperty(i) && (!(r = ta[i].exec(a)) || (s[i] && !(r = s[i](r))) || ((n = r.shift()), o.push({ value: n, type: i, matches: r }), (a = a.slice(n.length))));
                if (!n) break;
            }
            return t ? a.length : a ? ca.error(e) : Pi(e, u).slice(0);
        }),
        (vi = ca.compile = function (e, t) {
            var n,
                h,
                v,
                b,
                y,
                r = [],
                o = [],
                i = Li[e + " "];
            if (!i) {
                for (n = (t = t || hi(e)).length; n--; )
                    ((i = (function e(t) {
                        for (
                            var o,
                                n,
                                r,
                                i = t.length,
                                a = mi.relative[t[0].type],
                                u = a || mi.relative[" "],
                                s = a ? 1 : 0,
                                c = va(
                                    function (e) {
                                        return e === o;
                                    },
                                    u,
                                    !0
                                ),
                                l = va(
                                    function (e) {
                                        return -1 < qi.call(o, e);
                                    },
                                    u,
                                    !0
                                ),
                                f = [
                                    function (e, t, n) {
                                        var r = (!a && (n || t !== yi)) || ((o = t).nodeType ? c : l)(e, t, n);
                                        return (o = null), r;
                                    },
                                ];
                            s < i;
                            s++
                        )
                            if ((n = mi.relative[t[s].type])) f = [va(ba(f), n)];
                            else {
                                if ((n = mi.filter[t[s].type].apply(null, t[s].matches))[Ri]) {
                                    for (r = ++s; r < i && !mi.relative[t[r].type]; r++);
                                    return (function e(m, g, p, h, v, t) {
                                        return (
                                            h && !h[Ri] && (h = e(h)),
                                            v && !v[Ri] && (v = e(v, t)),
                                            fa(function (e, t, n, r) {
                                                var o,
                                                    i,
                                                    a,
                                                    u = [],
                                                    s = [],
                                                    c = t.length,
                                                    l =
                                                        e ||
                                                        (function (e, t, n) {
                                                            for (var r = 0, o = t.length; r < o; r++) ca(e, t[r], n);
                                                            return n;
                                                        })(g || "*", n.nodeType ? [n] : n, []),
                                                    f = !m || (!e && g) ? l : ya(l, u, m, n, r),
                                                    d = p ? (v || (e ? m : c || h) ? [] : t) : f;
                                                if ((p && p(f, d, n, r), h)) for (o = ya(d, s), h(o, [], n, r), i = o.length; i--; ) (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
                                                if (e) {
                                                    if (v || m) {
                                                        if (v) {
                                                            for (o = [], i = d.length; i--; ) (a = d[i]) && o.push((f[i] = a));
                                                            v(null, (d = []), o, r);
                                                        }
                                                        for (i = d.length; i--; ) (a = d[i]) && -1 < (o = v ? qi.call(e, a) : u[i]) && (e[o] = !(t[o] = a));
                                                    }
                                                } else (d = ya(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, r) : ji.apply(t, d);
                                            })
                                        );
                                    })(1 < s && ba(f), 1 < s && ha(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(Yi, "$1"), n, s < r && e(t.slice(s, r)), r < i && e((t = t.slice(r))), r < i && ha(t));
                                }
                                f.push(n);
                            }
                        return ba(f);
                    })(t[n]))[Ri]
                        ? r
                        : o
                    ).push(i);
                (i = Li(e, ((h = o), (b = 0 < (v = r).length), (y = 0 < h.length), b ? fa(a) : a))).selector = e;
            }
            function a(e, t, n, r, o) {
                var i,
                    a,
                    u,
                    s = 0,
                    c = "0",
                    l = e && [],
                    f = [],
                    d = yi,
                    m = e || (y && mi.find.TAG("*", o)),
                    g = (Ti += null == d ? 1 : Math.random() || 0.1),
                    p = m.length;
                for (o && (yi = t !== Si && t); c !== p && null != (i = m[c]); c++) {
                    if (y && i) {
                        for (a = 0; (u = h[a++]); )
                            if (u(i, t, n)) {
                                r.push(i);
                                break;
                            }
                        o && (Ti = g);
                    }
                    b && ((i = !u && i) && s--, e && l.push(i));
                }
                if (((s += c), b && c !== s)) {
                    for (a = 0; (u = v[a++]); ) u(l, f, t, n);
                    if (e) {
                        if (0 < s) for (; c--; ) l[c] || f[c] || (f[c] = zi.call(r));
                        f = ya(f);
                    }
                    ji.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && ca.uniqueSort(r);
                }
                return o && ((Ti = g), (yi = d)), l;
            }
            return i;
        }),
        (bi = ca.select = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c = "function" == typeof e && e,
                l = !r && hi((e = c.selector || e));
            if (((n = n || []), 1 === l.length)) {
                if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && di.getById && 9 === t.nodeType && Ei && mi.relative[i[1].type]) {
                    if (!(t = (mi.find.ID(a.matches[0].replace(sa, fi), t) || [])[0])) return n;
                    c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                }
                for (o = ta.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !mi.relative[(u = a.type)]); )
                    if ((s = mi.find[u]) && (r = s(a.matches[0].replace(sa, fi), (aa.test(i[0].type) && ga(t.parentNode)) || t))) {
                        if ((i.splice(o, 1), !(e = r.length && ha(i)))) return ji.apply(n, r), n;
                        break;
                    }
            }
            return (c || vi(e, l))(r, t, !Ei, n, (aa.test(e) && ga(t.parentNode)) || t), n;
        }),
        (di.sortStable = Ri.split("").sort(Ii).join("") === Ri),
        (di.detectDuplicates = !!xi),
        wi(),
        (di.sortDetached = !0);
    var Ra = document,
        Da = Array.prototype.push,
        Ta = Array.prototype.slice,
        Oa = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Ba = ci.Event,
        Pa = Nt.makeMap("children,contents,next,prev"),
        La = function (e, t, n, r) {
            var o;
            if (xa(t)) t = wa(t, Va(e[0]));
            else if (t.length && !t.nodeType) {
                if (((t = Ya.makeArray(t)), r)) for (o = t.length - 1; 0 <= o; o--) La(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) La(e, t[o], n, r);
                return e;
            }
            if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
            return e;
        },
        Ia = Nt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        Ma = Nt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        Fa = { for: "htmlFor", class: "className", readonly: "readOnly" },
        Ua = { float: "cssFloat" },
        za = {},
        Ha = {},
        ja = /^\s*|\s*$/g,
        Va = function (e) {
            return e ? (9 === e.nodeType ? e : e.ownerDocument) : Ra;
        };
    function qa(e, t, n) {
        var r = [],
            o = e[t];
        for ("string" != typeof n && n instanceof Ya && (n = n[0]); o && 9 !== o.nodeType; ) {
            if (void 0 !== n) {
                if (o === n) break;
                if ("string" == typeof n && Ya(o).is(n)) break;
            }
            1 === o.nodeType && r.push(o), (o = o[t]);
        }
        return r;
    }
    function $a(e, t, n, r) {
        var o = [];
        for (r instanceof Ya && (r = r[0]); e; e = e[t])
            if (!n || e.nodeType === n) {
                if (void 0 !== r) {
                    if (e === r) break;
                    if ("string" == typeof r && Ya(e).is(r)) break;
                }
                o.push(e);
            }
        return o;
    }
    function Wa(e, t, n) {
        for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
        return null;
    }
    function Ka(e, t) {
        var n = t.attr("style"),
            r = e.serialize(e.parse(n), t[0].nodeName) || null;
        t.attr("data-mce-style", r);
    }
    function Xa(e, t) {
        var n,
            r,
            o = 0;
        if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) (r = e.nodeType), (!t || 3 !== r || (r !== n && e.nodeValue.length)) && (o++, (n = r));
        return o;
    }
    (Ea.fn = Ea.prototype = {
        constructor: Ea,
        selector: "",
        context: null,
        length: 0,
        init: function (e, t) {
            var n,
                r,
                o = this;
            if (!e) return o;
            if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return Ya(e).attr(t);
                o.context = t = document;
            }
            if (xa(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Oa.exec(e))) return Ya(t).find(e);
                if (n[1]) for (r = wa(e, Va(t)).firstChild; r; ) Da.call(o, r), (r = r.nextSibling);
                else {
                    if (!(r = Va(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    (o.length = 1), (o[0] = r);
                }
            } else this.add(e, !1);
            return o;
        },
        toArray: function () {
            return Nt.toArray(this);
        },
        add: function (e, t) {
            var n, r;
            if (xa(e)) return this.add(Ya(e));
            if (!1 !== t) for (n = Ya.unique(this.toArray().concat(Ya.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r];
            else Da.apply(this, Ya.makeArray(e));
            return this;
        },
        attr: function (t, n) {
            var e,
                r = this;
            if ("object" == typeof t)
                _a(t, function (e, t) {
                    r.attr(e, t);
                });
            else {
                if (!Ca(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = za[t]) && e.get) return e.get(r[0], t);
                        if (Ma[t]) return r.prop(t) ? t : void 0;
                        null === (n = r[0].getAttribute(t, 2)) && (n = void 0);
                    }
                    return n;
                }
                this.each(function () {
                    var e;
                    1 === this.nodeType && ((e = za[t]) && e.set ? e.set(this, n) : null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2));
                });
            }
            return r;
        },
        removeAttr: function (e) {
            return this.attr(e, null);
        },
        prop: function (e, t) {
            var n = this;
            if ("object" == typeof (e = Fa[e] || e))
                _a(e, function (e, t) {
                    n.prop(e, t);
                });
            else {
                if (!Ca(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function () {
                    1 === this.nodeType && (this[e] = t);
                });
            }
            return n;
        },
        css: function (t, n) {
            function e(e) {
                return e.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase();
                });
            }
            function r(e) {
                return e.replace(/[A-Z]/g, function (e) {
                    return "-" + e;
                });
            }
            var o,
                i,
                a = this;
            if ("object" == typeof t)
                _a(t, function (e, t) {
                    a.css(e, t);
                });
            else if (Ca(n))
                (t = e(t)),
                    "number" != typeof n || Ia[t] || (n = n.toString() + "px"),
                    a.each(function () {
                        var e = this.style;
                        if ((i = Ha[t]) && i.set) i.set(this, n);
                        else {
                            try {
                                this.style[Ua[t] || t] = n;
                            } catch (e) {}
                            (null !== n && "" !== n) || (e.removeProperty ? e.removeProperty(r(t)) : e.removeAttribute(t));
                        }
                    });
            else {
                if (((o = a[0]), (i = Ha[t]) && i.get)) return i.get(o);
                if (!o.ownerDocument.defaultView) return o.currentStyle ? o.currentStyle[e(t)] : "";
                try {
                    return o.ownerDocument.defaultView.getComputedStyle(o, null).getPropertyValue(r(t));
                } catch (e) {
                    return;
                }
            }
            return a;
        },
        remove: function () {
            for (var e, t = this.length; t--; ) (e = this[t]), Ba.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this;
        },
        empty: function () {
            for (var e, t = this.length; t--; ) for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
            return this;
        },
        html: function (t) {
            var n;
            if (Ca(t)) {
                n = this.length;
                try {
                    for (; n--; ) this[n].innerHTML = t;
                } catch (e) {
                    Ya(this[n]).empty().append(t);
                }
                return this;
            }
            return this[0] ? this[0].innerHTML : "";
        },
        text: function (e) {
            var t;
            if (Ca(e)) {
                for (t = this.length; t--; ) "innerText" in this[t] ? (this[t].innerText = e) : (this[0].textContent = e);
                return this;
            }
            return this[0] ? this[0].innerText || this[0].textContent : "";
        },
        append: function () {
            return La(this, arguments, function (e) {
                (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) && this.appendChild(e);
            });
        },
        prepend: function () {
            return La(
                this,
                arguments,
                function (e) {
                    (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) && this.insertBefore(e, this.firstChild);
                },
                !0
            );
        },
        before: function () {
            return this[0] && this[0].parentNode
                ? La(this, arguments, function (e) {
                      this.parentNode.insertBefore(e, this);
                  })
                : this;
        },
        after: function () {
            return this[0] && this[0].parentNode
                ? La(
                      this,
                      arguments,
                      function (e) {
                          this.parentNode.insertBefore(e, this.nextSibling);
                      },
                      !0
                  )
                : this;
        },
        appendTo: function (e) {
            return Ya(e).append(this), this;
        },
        prependTo: function (e) {
            return Ya(e).prepend(this), this;
        },
        replaceWith: function (e) {
            return this.before(e).remove();
        },
        wrap: function (e) {
            return Na(this, e);
        },
        wrapAll: function (e) {
            return Na(this, e, !0);
        },
        wrapInner: function (e) {
            return (
                this.each(function () {
                    Ya(this).contents().wrapAll(e);
                }),
                this
            );
        },
        unwrap: function () {
            return this.parent().each(function () {
                Ya(this).replaceWith(this.childNodes);
            });
        },
        clone: function () {
            var e = [];
            return (
                this.each(function () {
                    e.push(this.cloneNode(!0));
                }),
                Ya(e)
            );
        },
        addClass: function (e) {
            return this.toggleClass(e, !0);
        },
        removeClass: function (e) {
            return this.toggleClass(e, !1);
        },
        toggleClass: function (o, i) {
            var e = this;
            return (
                "string" != typeof o ||
                    (-1 !== o.indexOf(" ")
                        ? _a(o.split(" "), function () {
                              e.toggleClass(this, i);
                          })
                        : e.each(function (e, t) {
                              var n,
                                  r = Sa(t, o);
                              r !== i && ((n = t.className), r ? (t.className = ka((" " + n + " ").replace(" " + o + " ", " "))) : (t.className += n ? " " + o : o));
                          })),
                e
            );
        },
        hasClass: function (e) {
            return Sa(this[0], e);
        },
        each: function (e) {
            return _a(this, e);
        },
        on: function (e, t) {
            return this.each(function () {
                Ba.bind(this, e, t);
            });
        },
        off: function (e, t) {
            return this.each(function () {
                Ba.unbind(this, e, t);
            });
        },
        trigger: function (e) {
            return this.each(function () {
                "object" == typeof e ? Ba.fire(this, e.type, e) : Ba.fire(this, e);
            });
        },
        show: function () {
            return this.css("display", "");
        },
        hide: function () {
            return this.css("display", "none");
        },
        slice: function () {
            return Ya(Ta.apply(this, arguments));
        },
        eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        find: function (e) {
            for (var t = [], n = 0, r = this.length; n < r; n++) Ya.find(e, this[n], t);
            return Ya(t);
        },
        filter: function (n) {
            return Ya(
                "function" == typeof n
                    ? Aa(this.toArray(), function (e, t) {
                          return n(t, e);
                      })
                    : Ya.filter(n, this.toArray())
            );
        },
        closest: function (n) {
            var r = [];
            return (
                n instanceof Ya && (n = n[0]),
                this.each(function (e, t) {
                    for (; t; ) {
                        if ("string" == typeof n && Ya(t).is(n)) {
                            r.push(t);
                            break;
                        }
                        if (t === n) {
                            r.push(t);
                            break;
                        }
                        t = t.parentNode;
                    }
                }),
                Ya(r)
            );
        },
        offset: function (e) {
            var t,
                n,
                r,
                o,
                i = 0,
                a = 0;
            return e
                ? this.css(e)
                : ((t = this[0]) &&
                      ((r = (n = t.ownerDocument).documentElement),
                      t.getBoundingClientRect && ((i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft), (a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
                  { left: i, top: a });
        },
        push: Da,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice,
    }),
        Nt.extend(Ea, {
            extend: Nt.extend,
            makeArray: function (e) {
                return (e && e === e.window) || e.nodeType ? [e] : Nt.toArray(e);
            },
            inArray: function (e, t) {
                var n;
                if (t.indexOf) return t.indexOf(e);
                for (n = t.length; n--; ) if (t[n] === e) return n;
                return -1;
            },
            isArray: Nt.isArray,
            each: _a,
            trim: ka,
            grep: Aa,
            find: ca,
            expr: ca.selectors,
            unique: ca.uniqueSort,
            text: ca.getText,
            contains: ca.contains,
            filter: function (e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--; ) 1 !== t[r].nodeType && t.splice(r, 1);
                return 1 === t.length ? (Ya.find.matchesSelector(t[0], e) ? [t[0]] : []) : Ya.find.matches(e, t);
            },
        }),
        _a(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return qa(e, "parentNode");
                },
                next: function (e) {
                    return Wa(e, "nextSibling", 1);
                },
                prev: function (e) {
                    return Wa(e, "previousSibling", 1);
                },
                children: function (e) {
                    return $a(e.firstChild, "nextSibling", 1);
                },
                contents: function (e) {
                    return Nt.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes);
                },
            },
            function (r, o) {
                Ea.fn[r] = function (t) {
                    var n = [];
                    this.each(function () {
                        var e = o.call(n, this, t, n);
                        e && (Ya.isArray(e) ? n.push.apply(n, e) : n.push(e));
                    }),
                        1 < this.length && (Pa[r] || (n = Ya.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
                    var e = Ya(n);
                    return t ? e.filter(t) : e;
                };
            }
        ),
        _a(
            {
                parentsUntil: function (e, t) {
                    return qa(e, "parentNode", t);
                },
                nextUntil: function (e, t) {
                    return $a(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function (e, t) {
                    return $a(e, "previousSibling", 1, t).slice(1);
                },
            },
            function (o, i) {
                Ea.fn[o] = function (t, e) {
                    var n = [];
                    this.each(function () {
                        var e = i.call(n, this, t, n);
                        e && (Ya.isArray(e) ? n.push.apply(n, e) : n.push(e));
                    }),
                        1 < this.length && ((n = Ya.unique(n)), (0 !== o.indexOf("parents") && "prevUntil" !== o) || (n = n.reverse()));
                    var r = Ya(n);
                    return e ? r.filter(e) : r;
                };
            }
        ),
        (Ea.fn.is = function (e) {
            return !!e && 0 < this.filter(e).length;
        }),
        (Ea.fn.init.prototype = Ea.fn),
        (Ea.overrideDefaults = function (n) {
            var r,
                o = function (e, t) {
                    return (r = r || n()), 0 === arguments.length && (e = r.element), (t = t || r.context), new o.fn.init(e, t);
                };
            return Ya.extend(o, this), o;
        }),
        (Ea.attrHooks = za),
        (Ea.cssHooks = Ha);
    var Ya = Ea,
        Ga = Nt.each,
        Ja = Nt.grep,
        Qa = xt.ie,
        Za = /^([a-z0-9],?)+$/i,
        eu = function (a, u) {
            function s(e) {
                return e && a && X(e) ? a.getElementById(e) : e;
            }
            function c(e) {
                return H("string" == typeof e ? s(e) : e);
            }
            function r(e, t, n) {
                var r,
                    o,
                    i = c(e);
                return void 0 === (o = i.length ? ((r = W[t]) && r.get ? r.get(i, t) : i.attr(t)) : o) ? n || "" : o;
            }
            function o(e) {
                var t = s(e);
                return t ? t.attributes : [];
            }
            function i(e, t, n) {
                "" === n && (n = null);
                var r,
                    o = c(e),
                    i = o.attr(t);
                o.length && ((r = W[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({ attrElm: o, attrName: t, attrValue: n }));
            }
            function l() {
                return u.root_element || a.body;
            }
            function f(e, t) {
                return (function (e, t, n) {
                    var r,
                        o = 0,
                        i = 0,
                        a = e.ownerDocument;
                    if (((n = n || e), t)) {
                        if (n === e && t.getBoundingClientRect && "static" === wn(Et.fromDom(e), "position")) {
                            var u = t.getBoundingClientRect();
                            return { x: (o = u.left + (a.documentElement.scrollLeft || e.scrollLeft) - a.documentElement.clientLeft), y: (i = u.top + (a.documentElement.scrollTop || e.scrollTop) - a.documentElement.clientTop) };
                        }
                        for (var s = t; s && s !== n && s.nodeType && !kn(s, n); ) {
                            var c = s;
                            (o += c.offsetLeft || 0), (i += c.offsetTop || 0), (s = c.offsetParent);
                        }
                        for (s = t.parentNode; s && s !== n && s.nodeType && !kn(s, n); ) (o -= s.scrollLeft || 0), (i -= s.scrollTop || 0), (s = s.parentNode);
                        i +=
                            ((r = Et.fromDom(t)),
                            er.isFirefox() && "table" === kt(r)
                                ? En(Tn(r))
                                      .filter(function (e) {
                                          return "caption" === kt(e);
                                      })
                                      .bind(function (o) {
                                          return En(It(o)).map(function (e) {
                                              var t = e.dom.offsetTop,
                                                  n = o.dom.offsetTop,
                                                  r = o.dom.offsetHeight;
                                              return t <= n ? -r : 0;
                                          });
                                      })
                                      .getOr(0)
                                : 0);
                    }
                    return { x: o, y: i };
                })(a.body, s(e), t);
            }
            function d(e, t, n) {
                var r = c(e);
                return n
                    ? r.css(t)
                    : ("float" ===
                          (t = t.replace(/-(\D)/g, function (e, t) {
                              return t.toUpperCase();
                          })) && (t = xt.browser.isIE() ? "styleFloat" : "cssFloat"),
                      r[0] && r[0].style ? r[0].style[t] : void 0);
            }
            function m(e) {
                var t = d((e = s(e)), "width"),
                    n = d(e, "height");
                return -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), { w: parseInt(t, 10) || e.offsetWidth || e.clientWidth, h: parseInt(n, 10) || e.offsetHeight || e.clientHeight };
            }
            function g(e, t) {
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (Za.test(t)) {
                        for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--) if (n[o] === r) return !0;
                        return !1;
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < ca(t, i[0].ownerDocument || i[0], null, i).length;
            }
            function p(e, t, n, r) {
                var o,
                    i = [],
                    a = s(e);
                for (
                    r = void 0 === r,
                        n = n || ("BODY" !== l().nodeName ? l().parentNode : null),
                        Nt.is(t, "string") &&
                            (t =
                                "*" === (o = t)
                                    ? function (e) {
                                          return 1 === e.nodeType;
                                      }
                                    : function (e) {
                                          return g(e, o);
                                      });
                    a && !(a === n || K(a.nodeType) || $n(a) || Wn(a));

                ) {
                    if (!t || ("function" == typeof t && t(a))) {
                        if (!r) return [a];
                        i.push(a);
                    }
                    a = a.parentNode;
                }
                return r ? i : null;
            }
            function n(e, t, n) {
                var r = t;
                if (e)
                    for (
                        "string" == typeof t &&
                            (r = function (e) {
                                return g(e, t);
                            }),
                            e = e[n];
                        e;
                        e = e[n]
                    )
                        if ("function" == typeof r && r(e)) return e;
                return null;
            }
            function h(e, n, r) {
                var o,
                    t = "string" == typeof e ? s(e) : e;
                return (
                    !!t &&
                    (Nt.isArray(t) && (t.length || 0 === t.length)
                        ? ((o = []),
                          Ga(t, function (e, t) {
                              e && o.push(n.call(r, "string" == typeof e ? s(e) : e, t));
                          }),
                          o)
                        : n.call(r || this, t))
                );
            }
            function v(e, t) {
                c(e).each(function (e, n) {
                    Ga(t, function (e, t) {
                        i(n, t, e);
                    });
                });
            }
            function b(e, n) {
                var t = c(e);
                Qa
                    ? t.each(function (e, t) {
                          if (!1 !== t.canHaveHTML) {
                              for (; t.firstChild; ) t.removeChild(t.firstChild);
                              try {
                                  (t.innerHTML = "<br>" + n), t.removeChild(t.firstChild);
                              } catch (e) {
                                  Ya("<div></div>")
                                      .html("<br>" + n)
                                      .contents()
                                      .slice(1)
                                      .appendTo(t);
                              }
                              return n;
                          }
                      })
                    : t.html(n);
            }
            function y(e, n, r, o, i) {
                return h(e, function (e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return v(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && b(t, o)), i ? t : e.appendChild(t);
                });
            }
            function C(e, t, n) {
                return y(a.createElement(e), e, t, n, !0);
            }
            function x(e, t) {
                var n = c(e);
                return (
                    (t
                        ? n.each(function () {
                              for (var e; (e = this.firstChild); ) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this);
                          })
                        : n
                    ).remove(),
                    1 < n.length ? n.toArray() : n[0]
                );
            }
            function w(e, t, n) {
                c(e)
                    .toggleClass(t, n)
                    .each(function () {
                        "" === this.className && Ya(this).attr("class", null);
                    });
            }
            function S(t, e, n) {
                return h(e, function (e) {
                    return (
                        Nt.is(e, "array") && (t = t.cloneNode(!0)),
                        n &&
                            Ga(Ja(e.childNodes), function (e) {
                                t.appendChild(e);
                            }),
                        e.parentNode.replaceChild(t, e)
                    );
                });
            }
            function N(e) {
                if (Hn(e)) {
                    var t = "a" === e.nodeName.toLowerCase() && !r(e, "href") && r(e, "id");
                    return r(e, "name") || r(e, "data-mce-bookmark") || t ? 1 : void 0;
                }
            }
            function E() {
                return a.createRange();
            }
            function k(e) {
                if (e && Hn(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null;
                }
                return null;
            }
            void 0 === u && (u = {});
            var _,
                A,
                R,
                D,
                e,
                t,
                T = {},
                O = window,
                B = {},
                P = 0,
                L = Rr.forElement(Et.fromDom(a), { contentCssCors: u.contentCssCors, referrerPolicy: u.referrerPolicy }),
                I = [],
                M = u.schema || oo({}),
                F = ao({ url_converter: u.url_converter, url_converter_scope: u.url_converter_scope }, u.schema),
                U = u.ownEvents ? new ci() : ci.Event,
                z = M.getBlockElements(),
                H = Ya.overrideDefaults(function () {
                    return { context: a, element: $.getRoot() };
                }),
                j = Zo.encodeAllRaw,
                V = function (e, t, n, r) {
                    if (Nt.isArray(e)) {
                        for (var o = e.length, i = []; o--; ) i[o] = V(e[o], t, n, r);
                        return i;
                    }
                    return !u.collect || (e !== a && e !== O) || I.push([e, t, n, r]), U.bind(e, t, n, r || $);
                },
                q = function (e, t, n) {
                    if (Nt.isArray(e)) {
                        for (var r = e.length, o = []; r--; ) o[r] = q(e[r], t, n);
                        return o;
                    }
                    if (0 < I.length && (e === a || e === O))
                        for (r = I.length; r--; ) {
                            var i = I[r];
                            e !== i[0] || (t && t !== i[1]) || (n && n !== i[2]) || U.unbind(i[0], i[1], i[2]);
                        }
                    return U.unbind(e, t, n);
                },
                $ = {
                    doc: a,
                    settings: u,
                    win: O,
                    files: B,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: L,
                    boundEvents: I,
                    styles: F,
                    schema: M,
                    events: U,
                    isBlock: function (e) {
                        if ("string" == typeof e) return !!z[e];
                        if (e) {
                            var t = e.nodeType;
                            if (t) return !(1 !== t || !z[e.nodeName]);
                        }
                        return !1;
                    },
                    $: H,
                    $$: c,
                    root: null,
                    clone: function (t, e) {
                        if (!Qa || 1 !== t.nodeType || e) return t.cloneNode(e);
                        var n = a.createElement(t.nodeName);
                        return (
                            Ga(o(t), function (e) {
                                i(n, e.nodeName, r(t, e.nodeName));
                            }),
                            n
                        );
                    },
                    getRoot: l,
                    getViewPort: function (e) {
                        var t = tn(e);
                        return { x: t.x, y: t.y, w: t.width, h: t.height };
                    },
                    getRect: function (e) {
                        var t = f((e = s(e))),
                            n = m(e);
                        return { x: t.x, y: t.y, w: n.w, h: n.h };
                    },
                    getSize: m,
                    getParent: function (e, t, n) {
                        var r = p(e, t, n, !1);
                        return r && 0 < r.length ? r[0] : null;
                    },
                    getParents: p,
                    get: s,
                    getNext: function (e, t) {
                        return n(e, t, "nextSibling");
                    },
                    getPrev: function (e, t) {
                        return n(e, t, "previousSibling");
                    },
                    select: function (e, t) {
                        return ca(e, s(t) || u.root_element || a, []);
                    },
                    is: g,
                    add: y,
                    create: C,
                    createHTML: function (e, t, n) {
                        var r,
                            o = "";
                        for (r in ((o += "<" + e), t)) se(t, r) && (o += " " + r + '="' + j(t[r]) + '"');
                        return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
                    },
                    createFragment: function (e) {
                        var t,
                            n = a.createElement("div"),
                            r = a.createDocumentFragment();
                        for (r.appendChild(n), e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
                        return r.removeChild(n), r;
                    },
                    remove: x,
                    setStyle: function (e, t, n) {
                        var r = X(t) ? c(e).css(t, n) : c(e).css(t);
                        u.update_styles && Ka(F, r);
                    },
                    getStyle: d,
                    setStyles: function (e, t) {
                        var n = c(e).css(t);
                        u.update_styles && Ka(F, n);
                    },
                    removeAllAttribs: function (e) {
                        return h(e, function (e) {
                            for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) e.removeAttributeNode(t.item(n));
                        });
                    },
                    setAttrib: i,
                    setAttribs: v,
                    getAttrib: r,
                    getPos: f,
                    parseStyle: function (e) {
                        return F.parse(e);
                    },
                    serializeStyle: function (e, t) {
                        return F.serialize(e, t);
                    },
                    addStyle: function (e) {
                        var t, n;
                        if ($ !== eu.DOM && a === document) {
                            if (T[e]) return;
                            T[e] = !0;
                        }
                        (n = a.getElementById("mceDefaultStyles")) ||
                            (((n = a.createElement("style")).id = "mceDefaultStyles"), (n.type = "text/css"), (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)),
                            n.styleSheet ? (n.styleSheet.cssText += e) : n.appendChild(a.createTextNode(e));
                    },
                    loadCSS: function (e) {
                        Y((e = e || "").split(","), function (e) {
                            (B[e] = !0), L.load(e, te);
                        });
                    },
                    addClass: function (e, t) {
                        c(e).addClass(t);
                    },
                    removeClass: function (e, t) {
                        w(e, t, !1);
                    },
                    hasClass: function (e, t) {
                        return c(e).hasClass(t);
                    },
                    toggleClass: w,
                    show: function (e) {
                        c(e).show();
                    },
                    hide: function (e) {
                        c(e).hide();
                    },
                    isHidden: function (e) {
                        return "none" === c(e).css("display");
                    },
                    uniqueId: function (e) {
                        return (e || "mce_") + P++;
                    },
                    setHTML: b,
                    getOuterHTML: function (e) {
                        var t = "string" == typeof e ? s(e) : e;
                        return Hn(t) ? t.outerHTML : Ya("<div></div>").append(Ya(t).clone()).html();
                    },
                    setOuterHTML: function (e, t) {
                        c(e).each(function () {
                            try {
                                if ("outerHTML" in this) return void (this.outerHTML = t);
                            } catch (e) {}
                            x(Ya(this).html(t), !0);
                        });
                    },
                    decode: Zo.decode,
                    encode: j,
                    insertAfter: function (e, t) {
                        var r = s(t);
                        return h(e, function (e) {
                            var t = r.parentNode,
                                n = r.nextSibling;
                            return n ? t.insertBefore(e, n) : t.appendChild(e), e;
                        });
                    },
                    replace: S,
                    rename: function (t, e) {
                        var n;
                        return (
                            t.nodeName !== e.toUpperCase() &&
                                ((n = C(e)),
                                Ga(o(t), function (e) {
                                    i(n, e.nodeName, r(t, e.nodeName));
                                }),
                                S(n, t, !0)),
                            n || t
                        );
                    },
                    findCommonAncestor: function (e, t) {
                        for (var n, r = e; r; ) {
                            for (n = t; n && r !== n; ) n = n.parentNode;
                            if (r === n) break;
                            r = r.parentNode;
                        }
                        return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
                    },
                    toHex: function (e) {
                        return F.toHex(Nt.trim(e));
                    },
                    run: h,
                    getAttribs: o,
                    isEmpty: function (e, t) {
                        var n,
                            r,
                            o = 0;
                        if (N(e)) return !1;
                        if ((e = e.firstChild)) {
                            var i = new Dr(e, e.parentNode),
                                a = M ? M.getWhiteSpaceElements() : {};
                            t = t || (M ? M.getNonEmptyElements() : null);
                            do {
                                if (((n = e.nodeType), Hn(e))) {
                                    var u = e.getAttribute("data-mce-bogus");
                                    if (u) {
                                        e = i.next("all" === u);
                                        continue;
                                    }
                                    if (((r = e.nodeName.toLowerCase()), t && t[r])) {
                                        if ("br" !== r) return !1;
                                        o++, (e = i.next());
                                        continue;
                                    }
                                    if (N(e)) return !1;
                                }
                                if (8 === n) return !1;
                                if (3 === n && !$r(e.nodeValue)) return !1;
                                if (3 === n && e.parentNode && a[e.parentNode.nodeName] && $r(e.nodeValue)) return !1;
                                e = i.next();
                            } while (e);
                        }
                        return o <= 1;
                    },
                    createRng: E,
                    nodeIndex: Xa,
                    split: function (e, t, n) {
                        var r,
                            o,
                            i,
                            a = E();
                        if (e && t)
                            return (
                                a.setStart(e.parentNode, Xa(e)),
                                a.setEnd(t.parentNode, Xa(t)),
                                (r = a.extractContents()),
                                (a = E()).setStart(t.parentNode, Xa(t) + 1),
                                a.setEnd(e.parentNode, Xa(e) + 1),
                                (o = a.extractContents()),
                                (i = e.parentNode).insertBefore(Vo($, r), e),
                                n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                                i.insertBefore(Vo($, o), e),
                                x(e),
                                n || t
                            );
                    },
                    bind: V,
                    unbind: q,
                    fire: function (e, t, n) {
                        return U.fire(e, t, n);
                    },
                    getContentEditable: k,
                    getContentEditableParent: function (e) {
                        for (var t = l(), n = null; e && e !== t && null === (n = k(e)); e = e.parentNode);
                        return n;
                    },
                    destroy: function () {
                        if (0 < I.length)
                            for (var e = I.length; e--; ) {
                                var t = I[e];
                                U.unbind(t[0], t[1], t[2]);
                            }
                        ne(B, function (e, t) {
                            L.unload(t), delete B[t];
                        }),
                            ca.setDocument && ca.setDocument();
                    },
                    isChildOf: function (e, t) {
                        if (Qa) {
                            for (; e; ) {
                                if (t === e) return !0;
                                e = e.parentNode;
                            }
                            return !1;
                        }
                        return e === t || t.contains(e);
                    },
                    dumpRng: function (e) {
                        return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
                    },
                },
                W =
                    ((_ = F),
                    (R = J($)),
                    (e = {
                        set: function (e, t, n) {
                            A.url_converter && null !== t && (t = A.url_converter.call(A.url_converter_scope || R(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t);
                        },
                        get: function (e, t) {
                            return e.attr("data-mce-" + t) || e.attr(t);
                        },
                    }),
                    (t = {
                        style: {
                            set: function (e, t) {
                                null === t || "object" != typeof t ? (D && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(_.parse(t))) : e.attr("style", t)) : e.css(t);
                            },
                            get: function (e) {
                                var t = e.attr("data-mce-style") || e.attr("style");
                                return _.serialize(_.parse(t), e[0].nodeName);
                            },
                        },
                    }),
                    (D = (A = u).keep_values) && (t.href = t.src = e),
                    t);
            return $;
        };
    (eu.DOM = eu(document)), (eu.nodeIndex = Xa);
    var tu = eu.DOM,
        nu = Nt.each,
        ru = Nt.grep,
        ou =
            ((iu.prototype._setReferrerPolicy = function (e) {
                this.settings.referrerPolicy = e;
            }),
            (iu.prototype.loadScript = function (e, t, n) {
                function r() {
                    o.remove(i), a && (a.onerror = a.onload = a = null);
                }
                var o = tu,
                    i = o.uniqueId(),
                    a = document.createElement("script");
                (a.id = i),
                    (a.type = "text/javascript"),
                    (a.src = Nt._addCacheSuffix(e)),
                    this.settings.referrerPolicy && o.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy),
                    (a.onload = function () {
                        r(), t();
                    }),
                    (a.onerror = function () {
                        r(), y(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e);
                    }),
                    (document.getElementsByTagName("head")[0] || document.body).appendChild(a);
            }),
            (iu.prototype.isDone = function (e) {
                return 2 === this.states[e];
            }),
            (iu.prototype.markDone = function (e) {
                this.states[e] = 2;
            }),
            (iu.prototype.add = function (e, t, n, r) {
                var o = this.states[e];
                this.queue.push(e), void 0 === o && (this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({ success: t, failure: r, scope: n || this }));
            }),
            (iu.prototype.load = function (e, t, n, r) {
                return this.add(e, t, n, r);
            }),
            (iu.prototype.remove = function (e) {
                delete this.states[e], delete this.scriptLoadedCallbacks[e];
            }),
            (iu.prototype.loadQueue = function (e, t, n) {
                this.loadScripts(this.queue, e, t, n);
            }),
            (iu.prototype.loadScripts = function (n, e, t, r) {
                function o(t, e) {
                    nu(i.scriptLoadedCallbacks[e], function (e) {
                        y(e[t]) && e[t].call(e.scope);
                    }),
                        (i.scriptLoadedCallbacks[e] = void 0);
                }
                var i = this,
                    a = [];
                i.queueLoadedCallbacks.push({ success: e, failure: r, scope: t || this });
                var u = function () {
                    var e,
                        t = ru(n);
                    (n.length = 0),
                        nu(t, function (e) {
                            2 !== i.states[e]
                                ? 3 !== i.states[e]
                                    ? 1 !== i.states[e] &&
                                      ((i.states[e] = 1),
                                      i.loading++,
                                      i.loadScript(
                                          e,
                                          function () {
                                              (i.states[e] = 2), i.loading--, o("success", e), u();
                                          },
                                          function () {
                                              (i.states[e] = 3), i.loading--, a.push(e), o("failure", e), u();
                                          }
                                      ))
                                    : o("failure", e)
                                : o("success", e);
                        }),
                        i.loading ||
                            ((e = i.queueLoadedCallbacks.slice(0)),
                            (i.queueLoadedCallbacks.length = 0),
                            nu(e, function (e) {
                                0 === a.length ? y(e.success) && e.success.call(e.scope) : y(e.failure) && e.failure.call(e.scope, a);
                            }));
                };
                u();
            }),
            (iu.ScriptLoader = new iu()),
            iu);
    function iu(e) {
        void 0 === e && (e = {}), (this.states = {}), (this.queue = []), (this.scriptLoadedCallbacks = {}), (this.queueLoadedCallbacks = []), (this.loading = 0), (this.settings = e);
    }
    function au(e) {
        var t = e;
        return {
            get: function () {
                return t;
            },
            set: function (e) {
                t = e;
            },
        };
    }
    function uu() {
        return ue(su, cu.get());
    }
    var su = {},
        cu = au("en"),
        lu = {
            getData: function () {
                return re(su, function (e) {
                    return _e({}, e);
                });
            },
            setCode: function (e) {
                e && cu.set(e);
            },
            getCode: function () {
                return cu.get();
            },
            add: function (e, t) {
                var n = su[e];
                n || (su[e] = n = {}),
                    ne(t, function (e, t) {
                        n[t.toLowerCase()] = e;
                    });
            },
            translate: function (e) {
                function n(e) {
                    return y(e) ? Object.prototype.toString.call(e) : u(e) ? "" : "" + e;
                }
                function t(e) {
                    var t = n(e);
                    return ue(a, t.toLowerCase()).map(n).getOr(t);
                }
                function r(e) {
                    return e.replace(/{context:\w+}$/, "");
                }
                var o,
                    i,
                    a = uu().getOr({}),
                    u = function (e) {
                        return "" === e || null == e;
                    };
                if (u(e)) return "";
                if (h((o = e)) && Ee(o, "raw")) return n(e.raw);
                if (S((i = e)) && 1 < i.length) {
                    var s = e.slice(1);
                    return r(
                        t(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                            return Ee(s, t) ? n(s[t]) : e;
                        })
                    );
                }
                return r(t(e));
            },
            isRtl: function () {
                return uu()
                    .bind(function (e) {
                        return ue(e, "_dir");
                    })
                    .exists(function (e) {
                        return "rtl" === e;
                    });
            },
            hasCode: function (e) {
                return Ee(su, e);
            },
        },
        fu = function () {
            function u(t, n) {
                Y(
                    U(r, function (e) {
                        return e.name === t && e.state === n;
                    }),
                    function (e) {
                        return e.callback();
                    }
                );
            }
            function s(e) {
                var t;
                return (f[e] ? f[e].dependencies : t) || [];
            }
            function c(e, t) {
                return "object" == typeof t ? t : "string" == typeof e ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix };
            }
            function e(e, t, n) {
                void 0 === n && (n = "added"), (Ee(f, e) && "added" === n) || (Ee(l, e) && "loaded" === n) ? t() : r.push({ name: e, state: n, callback: t });
            }
            var o = [],
                l = {},
                f = {},
                r = [],
                d = function (r, o, i, a, e) {
                    var t, n;
                    l[r] ||
                        (0 !== (t = "string" == typeof o ? o : o.prefix + o.resource + o.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = fu.baseURL + "/" + t),
                        (l[r] = t.substring(0, t.lastIndexOf("/"))),
                        (n = function () {
                            var n, e, t;
                            u(r, "loaded"),
                                (n = o),
                                (e = i),
                                (t = a),
                                Y(s(r), function (e) {
                                    var t = c(n, e);
                                    d(t.resource, t, void 0, void 0);
                                }),
                                e && (t ? e.call(t) : e.call(ou));
                        }),
                        f[r] ? n() : ou.ScriptLoader.add(t, n, a, e));
                };
            return {
                items: o,
                urls: l,
                lookup: f,
                _listeners: r,
                get: function (e) {
                    if (f[e]) return f[e].instance;
                },
                dependencies: s,
                requireLangPack: function (t, n) {
                    !1 !== fu.languageLoad &&
                        e(
                            t,
                            function () {
                                var e = lu.getCode();
                                !e || (n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",")) || ou.ScriptLoader.add(l[t] + "/langs/" + e + ".js");
                            },
                            "loaded"
                        );
                },
                add: function (e, t, n) {
                    var r = t;
                    return o.push(r), (f[e] = { instance: r, dependencies: n }), u(e, "added"), r;
                },
                remove: function (e) {
                    delete l[e], delete f[e];
                },
                createUrl: c,
                addComponents: function (e, t) {
                    var n = l[e];
                    Y(t, function (e) {
                        ou.ScriptLoader.add(n + "/" + e);
                    });
                },
                load: d,
                waitFor: e,
            };
        };
    function du() {
        var e,
            t,
            n =
                ((e = te),
                (t = au(ve.none())),
                {
                    clear: function () {
                        r(), t.set(ve.none());
                    },
                    isSet: function () {
                        return t.get().isSome();
                    },
                    get: function () {
                        return t.get();
                    },
                    set: function (e) {
                        r(), t.set(ve.some(e));
                    },
                });
        function r() {
            return t.get().each(e);
        }
        return _e(_e({}, n), {
            on: function (e) {
                return n.get().each(e);
            },
        });
    }
    function mu(n, r) {
        var o = null;
        return {
            cancel: function () {
                l(o) || (clearTimeout(o), (o = null));
            },
            throttle: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                l(o) &&
                    (o = setTimeout(function () {
                        (o = null), n.apply(null, e);
                    }, r));
            },
        };
    }
    function gu(n, r) {
        function o() {
            l(i) || (clearTimeout(i), (i = null));
        }
        var i = null;
        return {
            cancel: o,
            throttle: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                o(),
                    (i = setTimeout(function () {
                        (i = null), n.apply(null, e);
                    }, r));
            },
        };
    }
    function pu(e, t) {
        var n = vn(e, t);
        return void 0 === n || "" === n ? [] : n.split(" ");
    }
    function hu(e) {
        return void 0 !== e.dom.classList;
    }
    function vu(e, t) {
        var n, r, o;
        hu(e) ? e.dom.classList.add(t) : ((r = t), (o = pu((n = e), "class").concat([r])), pn(n, "class", o.join(" ")));
    }
    function bu(e, t) {
        return hu(e) && e.dom.classList.contains(t);
    }
    function yu(e, t) {
        return He((n = void 0 === e ? document : e.dom)) ? [] : A(n.querySelectorAll(t), Et.fromDom);
        var n;
    }
    function Cu(r, e) {
        function t(e, t) {
            return yn(e, t) ? ve.some(vn(e, t)) : ve.none();
        }
        var n = r.selection.getRng(),
            o = Et.fromDom(n.startContainer),
            i = Et.fromDom(r.getBody()),
            a = e.fold(
                function () {
                    return "." + $u();
                },
                function (e) {
                    return "[" + Wu() + '="' + e + '"]';
                }
            );
        return yr(Mt(o, n.startOffset).getOr(o), a, function (e) {
            return je(e, i);
        }).bind(function (e) {
            return t(e, "" + Ku()).bind(function (n) {
                return t(e, "" + Wu()).map(function (e) {
                    var t = Xu(r, n);
                    return { uid: n, name: e, elements: t };
                });
            });
        });
    }
    function xu(t) {
        function o() {
            return { listeners: [], previous: du() };
        }
        function c(e, t) {
            n(e, function (e) {
                return t(e), e;
            });
        }
        function n(e, t) {
            var n = i.get(),
                r = t(ue(n, e).getOrThunk(o));
            (n[e] = r), i.set(n);
        }
        var i = au({}),
            e = gu(function () {
                var e = i.get();
                Y(W(we(e)), function (e) {
                    n(e, function (u) {
                        var s = u.previous.get();
                        return (
                            Cu(t, ve.some(e)).fold(
                                function () {
                                    var t;
                                    s.isSome() &&
                                        (c((t = e), function (e) {
                                            Y(e.listeners, function (e) {
                                                return e(!1, t);
                                            });
                                        }),
                                        u.previous.clear());
                                },
                                function (e) {
                                    var t,
                                        n,
                                        r,
                                        o = e.uid,
                                        i = e.name,
                                        a = e.elements;
                                    fn(s, o) ||
                                        ((n = o),
                                        (r = a),
                                        c((t = i), function (e) {
                                            Y(e.listeners, function (e) {
                                                return e(!0, t, {
                                                    uid: n,
                                                    nodes: A(r, function (e) {
                                                        return e.dom;
                                                    }),
                                                });
                                            });
                                        }),
                                        u.previous.set(o));
                                }
                            ),
                            { previous: u.previous, listeners: u.listeners }
                        );
                    });
                });
            }, 30);
        return (
            t.on("remove", function () {
                e.cancel();
            }),
            t.on("NodeChange", function () {
                e.throttle();
            }),
            {
                addListener: function (e, t) {
                    n(e, function (e) {
                        return { previous: e.previous, listeners: e.listeners.concat([t]) };
                    });
                },
            }
        );
    }
    function wu(e) {
        var t = new Date().getTime();
        return e + "_" + Math.floor(1e9 * Math.random()) + ++Yu + String(t);
    }
    function Su(e, t) {
        var n,
            r,
            o = Rt(e).dom,
            i = Et.fromDom(o.createDocumentFragment());
        Kt(i, ((n = t), ((r = (o || document).createElement("div")).innerHTML = n), Tn(Et.fromDom(r)))), Xt(e), Ln(e, i);
    }
    function Nu(e, t) {
        return Et.fromDom(e.dom.cloneNode(t));
    }
    function Eu(e) {
        return Nu(e, !1);
    }
    function ku(e) {
        return Nu(e, !0);
    }
    function _u(e, t, n) {
        function r(e) {
            for (var t; (t = o[e]()) && !Vn(t) && !n(t); );
            return ve.from(t).filter(Vn);
        }
        void 0 === n && (n = D);
        var o = new Dr(e, t);
        return {
            current: function () {
                return ve.from(o.current()).filter(Vn);
            },
            next: function () {
                return r("next");
            },
            prev: function () {
                return r("prev");
            },
            prev2: function () {
                return r("prev2");
            },
        };
    }
    function Au(t, e) {
        var i =
                e ||
                function (e) {
                    return t.isBlock(e) || Kn(e) || Gn(e);
                },
            a = function (e, t, n, r) {
                if (Vn(e)) {
                    var o = r(e, t, e.data);
                    if (-1 !== o) return ve.some({ container: e, offset: o });
                }
                return n().bind(function (e) {
                    return a(e.container, e.offset, n, r);
                });
            };
        return {
            backwards: function (e, t, n, r) {
                var o = _u(e, r, i);
                return a(
                    e,
                    t,
                    function () {
                        return o.prev().map(function (e) {
                            return { container: e, offset: e.length };
                        });
                    },
                    n
                ).getOrNull();
            },
            forwards: function (e, t, n, r) {
                var o = _u(e, r, i);
                return a(
                    e,
                    t,
                    function () {
                        return o.next().map(function (e) {
                            return { container: e, offset: 0 };
                        });
                    },
                    n
                ).getOrNull();
            },
        };
    }
    function Ru(e) {
        return e ? { left: Gu(e.left), top: Gu(e.top), bottom: Gu(e.bottom), right: Gu(e.right), width: Gu(e.width), height: Gu(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
    }
    function Du(e, t) {
        return (e = Ru(e)), t || (e.left = e.left + e.width), (e.right = e.left), (e.width = 0), e;
    }
    function Tu(e, t, n) {
        return 0 <= e && e <= Math.min(t.height, n.height) / 2;
    }
    function Ou(e, t) {
        var n = Math.min(t.height / 2, e.height / 2);
        return e.bottom - n < t.top || (!(e.top > t.bottom) && Tu(t.top - e.bottom, e, t));
    }
    function Bu(e, t) {
        return e.top > t.bottom || (!(e.bottom < t.top) && Tu(t.bottom - e.top, e, t));
    }
    function Pu(e, t, n) {
        return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
    }
    function Lu(e) {
        var t = e.startContainer,
            n = e.startOffset;
        return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
    }
    function Iu(e, t) {
        if (Hn(e) && e.hasChildNodes()) {
            var n = e.childNodes;
            return n[((r = n.length - 1), Math.min(Math.max(t, 0), r))];
        }
        return e;
        var r;
    }
    function Mu(e) {
        return "string" == typeof e && 768 <= e.charCodeAt(0) && Ju.test(e);
    }
    function Fu(e) {
        return "createRange" in e ? e.createRange() : eu.DOM.createRng();
    }
    function Uu(e) {
        return e && /[\r\n\t ]/.test(e);
    }
    function zu(e) {
        return e.setStart && e.setEnd;
    }
    function Hu(e) {
        var t = e.startContainer,
            n = e.startOffset;
        if (Uu(e.toString()) && rs(t.parentNode) && Vn(t)) {
            var r = t.data;
            return Uu(r[n - 1]) || Uu(r[n + 1]) ? 1 : void 0;
        }
    }
    function ju(e) {
        return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
    }
    function Vu(e, t) {
        var n = Du(e, t);
        return (n.width = 1), (n.right = n.left + 1), n;
    }
    (fu.languageLoad = !0), (fu.baseURL = ""), (fu.PluginManager = fu()), (fu.ThemeManager = fu());
    var qu = function (e, t) {
            var n = [];
            return (
                Y(Tn(e), function (e) {
                    n = (n = t(e) ? n.concat([e]) : n).concat(qu(e, t));
                }),
                n
            );
        },
        $u = J("mce-annotation"),
        Wu = J("data-mce-annotation"),
        Ku = J("data-mce-annotation-uid"),
        Xu = function (e, t) {
            return yu(Et.fromDom(e.getBody()), "[" + Ku() + '="' + t + '"]');
        },
        Yu = 0,
        Gu = Math.round,
        Ju = new RegExp(
            "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
        ),
        Qu = Hn,
        Zu = Vr,
        es = an("display", "block table"),
        ts = an("float", "left right"),
        ns = (function () {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return function (e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
            };
        })(Qu, Zu, s(ts)),
        rs = s(an("white-space", "pre pre-line pre-wrap")),
        os = Vn,
        is = Kn,
        as = eu.nodeIndex,
        us = function (e, t) {
            if (!(t < 0 && Hn(e) && e.hasChildNodes())) return Iu(e, t);
        },
        ss = function (e) {
            var t = e.getClientRects(),
                n = 0 < t.length ? Ru(t[0]) : Ru(e.getBoundingClientRect());
            return !zu(e) && is(e) && ju(n)
                ? (function (e) {
                      var t = e.ownerDocument,
                          n = Fu(t),
                          r = t.createTextNode(wo),
                          o = e.parentNode;
                      o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                      var i = Ru(n.getBoundingClientRect());
                      return o.removeChild(r), i;
                  })(e)
                : ju(n) && zu(e)
                ? (function (e) {
                      var t = e.startContainer,
                          n = e.endContainer,
                          r = e.startOffset,
                          o = e.endOffset;
                      if (t === n && Vn(n) && 0 === r && 1 === o) {
                          var i = e.cloneRange();
                          return i.setEndAfter(n), ss(i);
                      }
                      return null;
                  })(e)
                : n;
        },
        cs = function (t, n, e) {
            function r() {
                return (e =
                    e ||
                    (function (e) {
                        function r(e) {
                            var t;
                            0 !== e.height && ((0 < o.length && ((t = o[o.length - 1]), e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right)) || o.push(e));
                        }
                        function t(e, t) {
                            var n = Fu(e.ownerDocument);
                            if (t < e.data.length) {
                                if (Mu(e.data[t])) return o;
                                if (Mu(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Hu(n))) return r(Vu(ss(n), !1)), o;
                            }
                            0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Hu(n) || r(Vu(ss(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Hu(n) || r(Vu(ss(n), !0)));
                        }
                        var o = [],
                            n = e.container(),
                            i = e.offset();
                        if (os(n)) return t(n, i), o;
                        if (Qu(n))
                            if (e.isAtEnd()) {
                                var a = us(n, i);
                                os(a) && t(a, a.data.length), ns(a) && !is(a) && r(Vu(ss(a), !1));
                            } else {
                                if (((a = us(n, i)), os(a) && t(a, 0), ns(a) && e.isAtEnd())) return r(Vu(ss(a), !1)), o;
                                var u = us(e.container(), e.offset() - 1);
                                ns(u) && !is(u) && ((!es(u) && !es(a) && ns(a)) || r(Vu(ss(u), !1))), ns(a) && r(Vu(ss(a), !0));
                            }
                        return o;
                    })(cs(t, n)));
            }
            return {
                container: J(t),
                offset: J(n),
                toRange: function () {
                    var e = Fu(t.ownerDocument);
                    return e.setStart(t, n), e.setEnd(t, n), e;
                },
                getClientRects: r,
                isVisible: function () {
                    return 0 < r().length;
                },
                isAtStart: function () {
                    return os(t), 0 === n;
                },
                isAtEnd: function () {
                    return os(t) ? n >= t.data.length : n >= t.childNodes.length;
                },
                isEqual: function (e) {
                    return e && t === e.container() && n === e.offset();
                },
                getNode: function (e) {
                    return us(t, e ? n - 1 : n);
                },
            };
        };
    function ls(e, t) {
        Vn(t) && 0 === t.data.length && e.remove(t);
    }
    function fs(e, t, n) {
        var r, o, i, a, u, s, c;
        Wn(n)
            ? ((i = e),
              (a = t),
              (s = ve.from((u = n).firstChild)),
              (c = ve.from(u.lastChild)),
              a.insertNode(u),
              s.each(function (e) {
                  return ls(i, e.previousSibling);
              }),
              c.each(function (e) {
                  return ls(i, e.nextSibling);
              }))
            : ((r = e), t.insertNode((o = n)), ls(r, o.previousSibling), ls(r, o.nextSibling));
    }
    function ds(t) {
        return function (e) {
            return t === e;
        };
    }
    function ms(e) {
        var t, r, n, o;
        return (
            (lc(e) ? "text()" : e.nodeName.toLowerCase()) +
            "[" +
            ((r = gc(mc((t = e)))),
            (n = ge(r, ds(t), t)),
            (o = me(
                (r = r.slice(0, n + 1)),
                function (e, t, n) {
                    return lc(t) && lc(r[n - 1]) && e++, e;
                },
                0
            )),
            ge((r = fe(r, on([t.nodeName]))), ds(t), t) - o) +
            "]"
        );
    }
    function gs(e, t) {
        var n,
            r,
            o,
            i = [],
            a = t.container(),
            u = t.offset();
        return (
            lc(a)
                ? (n = (function (e, t) {
                      for (; (e = e.previousSibling) && lc(e); ) t += e.data.length;
                      return t;
                  })(a, u))
                : (u >= (r = a.childNodes).length ? ((n = "after"), (u = r.length - 1)) : (n = "before"), (a = r[u])),
            i.push(ms(a)),
            (o = fe(
                (function (e, t) {
                    var n = [];
                    for (t = t.parentNode; t !== e; t = t.parentNode) n.push(t);
                    return n;
                })(e, a),
                s(sn)
            )),
            (i = i.concat(le(o, ms))).reverse().join("/") + "," + n
        );
    }
    function ps(e, t) {
        if (!t) return null;
        var n = t.split(","),
            r = n[0].split("/"),
            o = 1 < n.length ? n[1] : "before",
            i = me(
                r,
                function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                    return a
                        ? ("text()" === a[1] && (a[1] = "#text"),
                          (n = e),
                          (r = a[1]),
                          (o = parseInt(a[2], 10)),
                          (i = fe((i = gc(n)), function (e, t) {
                              return !lc(e) || !lc(i[t - 1]);
                          })),
                          (i = fe(i, on([r])))[o])
                        : null;
                },
                e
            );
        return i
            ? lc(i)
                ? (function (e, t) {
                      for (var n, r = e, o = 0; lc(r); ) {
                          if (((n = r.data.length), o <= t && t <= o + n)) {
                              (e = r), (t -= o);
                              break;
                          }
                          if (!lc(r.nextSibling)) {
                              (e = r), (t = n);
                              break;
                          }
                          (o += n), (r = r.nextSibling);
                      }
                      return lc(e) && t > e.data.length && (t = e.data.length), cs(e, t);
                  })(i, parseInt(o, 10))
                : ((o = "after" === o ? dc(i) + 1 : dc(i)), cs(i.parentNode, o))
            : null;
    }
    function hs(e, t, n, r, o) {
        var i,
            a = r[o ? "startContainer" : "endContainer"],
            u = r[o ? "startOffset" : "endOffset"],
            s = [],
            c = 0,
            l = e.getRoot();
        for (
            Vn(a)
                ? s.push(
                      n
                          ? (function (e, t, n) {
                                for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && Vn(o); o = o.previousSibling) r += e(o.data).length;
                                return r;
                            })(t, a, u)
                          : u
                  )
                : (u >= (i = a.childNodes).length && i.length && ((c = 1), (u = Math.max(0, i.length - 1))), s.push(e.nodeIndex(i[u], n) + c));
            a && a !== l;
            a = a.parentNode
        )
            s.push(e.nodeIndex(a, n));
        return s;
    }
    function vs(e, t, n) {
        var r = 0;
        return (
            Nt.each(e.select(t), function (e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++;
            }),
            r
        );
    }
    function bs(e, t) {
        var n,
            r = t ? "start" : "end",
            o = e[r + "Container"],
            i = e[r + "Offset"];
        Hn(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && ((i = t ? 0 : o.childNodes.length), e["set" + (t ? "Start" : "End")](o, i));
    }
    function ys(e) {
        return bs(e, !0), bs(e, !1), e;
    }
    function Cs(e, t) {
        var n;
        return Hn(e) && ((e = Iu(e, t)), pc(e)) ? e : Mr(e) ? ((n = (e = Vn(e) && Lr(e) ? e.parentNode : e).previousSibling), pc(n) ? n : ((n = e.nextSibling), pc(n) ? n : void 0)) : void 0;
    }
    function xs(e, t, n) {
        var r = n.getNode(),
            o = r ? r.nodeName : null,
            i = n.getRng();
        if (pc(r) || "IMG" === o) return { name: o, index: vs(n.dom, o, r) };
        var a,
            u,
            s,
            c,
            l,
            f,
            d,
            m = Cs((a = i).startContainer, a.startOffset) || Cs(a.endContainer, a.endOffset);
        return m ? { name: (o = m.tagName), index: vs(n.dom, o, m) } : ((f = (s = n).dom), ((d = {}).start = hs(f, (u = e), (c = t), (l = i), !0)), s.isCollapsed() || (d.end = hs(f, u, c, l, !1)), jr(l) && (d.isFakeCaret = !0), d);
    }
    function ws(e, t, n) {
        var r = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" };
        return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
    }
    function Ss(e, t) {
        var n = e.dom,
            r = e.getRng(),
            o = n.uniqueId(),
            i = e.isCollapsed(),
            a = e.getNode(),
            u = a.nodeName;
        if ("IMG" === u) return { name: u, index: vs(n, u, a) };
        var s = ys(r.cloneRange());
        return i || (s.collapse(!1), fs(n, s, ws(n, o + "_end", t))), (r = ys(r)).collapse(!0), fs(n, r, ws(n, o + "_start", t)), e.moveToBookmark({ id: o, keep: !0 }), { id: o };
    }
    function Ns(e, t, n) {
        var r = e.getParam(t, n);
        return -1 === r.indexOf("=") ? r : ue(e.getParam(t, "", "hash"), e.id).getOr(n);
    }
    function Es(e) {
        return e.getParam("content_security_policy", "");
    }
    function ks(e) {
        if (e.getParam("force_p_newlines", !1)) return "p";
        var t = e.getParam("forced_root_block", "p");
        return !1 === t ? "" : !0 === t ? "p" : t;
    }
    function _s(e) {
        return e.getParam("forced_root_block_attrs", {});
    }
    function As(e) {
        return e.getParam("automatic_uploads", !0, "boolean");
    }
    function Rs(e) {
        return e.getParam("icons", "", "string");
    }
    function Ds(e) {
        return e.getParam("referrer_policy", "", "string");
    }
    function Ts(e) {
        return e.getParam("language", "en", "string");
    }
    function Os(e) {
        return e.getParam("indent_use_margin", !1);
    }
    function Bs(e) {
        var t = e.getParam("font_css", []);
        return S(t) ? t : A(t.split(","), Je);
    }
    function Ps(e) {
        var t = e.getParam("object_resizing");
        return !1 !== t && !xt.iOS && (X(t) ? t : "table,img,figure.image,div,video,iframe");
    }
    function Ls(e) {
        return e.getParam("event_root");
    }
    function Is(e) {
        return e.getParam("theme");
    }
    function Ms(e) {
        return !1 !== e.getParam("inline_boundaries");
    }
    function Fs(e) {
        return e.getParam("plugins", "", "string");
    }
    function Us(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function zs(e) {
        var t = Eo(e);
        return { count: e.length - t.length, text: t };
    }
    function Hs(e) {
        for (var t; -1 !== (t = e.data.lastIndexOf(So)); ) e.deleteData(t, 1);
    }
    function js(e, t) {
        return Cc(e), t;
    }
    function Vs(e, t) {
        var n,
            r = t.container(),
            o = (-1 === (n = _(xe(r.childNodes), e)) ? ve.none() : ve.some(n))
                .map(function (e) {
                    return e < t.offset() ? cs(r, t.offset() - 1) : t;
                })
                .getOr(t);
        return Cc(e), o;
    }
    function qs(e, t) {
        return cs.isTextPosition(t)
            ? ((r = t), yc((n = e)) && r.container() === n ? ((a = zs((o = n).data.substr(0, (i = r).offset()))), (u = zs(o.data.substr(i.offset()))), 0 < (a.text + u.text).length ? (Hs(o), cs(o, i.offset() - a.count)) : i) : js(n, r))
            : ((s = e), ((c = t).container() === s.parentNode ? Vs : js)(s, c));
        var n, r, o, i, a, u, s, c;
    }
    function $s(e, t, n) {
        var r,
            o,
            i,
            a = Du(t.getBoundingClientRect(), n),
            u = "BODY" === e.tagName ? ((r = e.ownerDocument.documentElement), (o = e.scrollLeft || r.scrollLeft), e.scrollTop || r.scrollTop) : ((i = e.getBoundingClientRect()), (o = e.scrollLeft - i.left), e.scrollTop - i.top);
        (a.left += o), (a.right += o), (a.top += u), (a.bottom += u), (a.width = 1);
        var s = t.offsetWidth - t.clientWidth;
        return 0 < s && (n && (s *= -1), (a.left += s), (a.right += s)), a;
    }
    function Ws(e, i, a, u) {
        function s() {
            !(function () {
                for (var e = yu(Et.fromDom(i), "*[contentEditable=false],video,audio,embed,object"), t = 0; t < e.length; t++) {
                    var n,
                        r = e[t].dom,
                        o = r.previousSibling;
                    Ro(o) && (1 === (n = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(n.length - 1, 1)), (o = r.nextSibling), Ao(o) && (1 === (n = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(0, 1));
                }
            })(),
                l && (Cc(l), (l = null)),
                f.on(function (e) {
                    Ya(e.caret).remove(), f.clear();
                }),
                c && (Ar.clearInterval(c), (c = void 0));
        }
        var c,
            l,
            f = du(),
            t = ks(e),
            d = 0 < t.length ? t : "p";
        return {
            show: function (e, t) {
                var n;
                if ((s(), Nc(t))) return null;
                if (!a(t))
                    return (
                        (l = (function (e, t) {
                            var n = e.ownerDocument.createTextNode(So),
                                r = e.parentNode;
                            if (t) {
                                if (((o = e.previousSibling), _o(o))) {
                                    if (Mr(o)) return o;
                                    if (Ro(o)) return o.splitText(o.data.length - 1);
                                }
                                r.insertBefore(n, e);
                            } else {
                                var o = e.nextSibling;
                                if (_o(o)) {
                                    if (Mr(o)) return o;
                                    if (Ao(o)) return o.splitText(1), o;
                                }
                                e.nextSibling ? r.insertBefore(n, e.nextSibling) : r.appendChild(n);
                            }
                            return n;
                        })(t, e)),
                        (n = t.ownerDocument.createRange()),
                        Ec(l.nextSibling) ? (n.setStart(l, 0), n.setEnd(l, 0)) : (n.setStart(l, 1), n.setEnd(l, 1)),
                        n
                    );
                l = (function (e, t, n) {
                    var r,
                        o = t.ownerDocument.createElement(e);
                    o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
                    var i = t.parentNode;
                    return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o;
                })(d, t, e);
                var r = $s(i, t, e);
                Ya(l).css("top", r.top);
                var o = Ya('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(_e({}, r)).appendTo(i)[0];
                return (
                    f.set({ caret: o, element: t, before: e }),
                    e && Ya(o).addClass("mce-visual-caret-before"),
                    (c = Ar.setInterval(function () {
                        u() ? Ya("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : Ya("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden");
                    }, 500)),
                    (n = t.ownerDocument.createRange()).setStart(l, 0),
                    n.setEnd(l, 0),
                    n
                );
            },
            hide: s,
            getCss: function () {
                return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
            },
            reposition: function () {
                f.on(function (e) {
                    var t = $s(i, e.element, e.before);
                    Ya(e.caret).css(_e({}, t));
                });
            },
            destroy: function () {
                return Ar.clearInterval(c);
            },
        };
    }
    function Ks() {
        return xc.isIE() || xc.isEdge() || xc.isFirefox();
    }
    function Xs(e) {
        return Ec(e) || (cn(e) && Ks());
    }
    function Ys(e, t) {
        for (var n; (n = e(t)); ) if (!Dc(n)) return n;
        return null;
    }
    function Gs(e, t, n, r, o) {
        var i = new Dr(e, r),
            a = kc(e) || Dc(e);
        if (t < 0) {
            if (a && n((e = Ys(i.prev.bind(i), !0)))) return e;
            for (; (e = Ys(i.prev.bind(i), o)); ) if (n(e)) return e;
        }
        if (0 < t) {
            if (a && n((e = Ys(i.next.bind(i), !0)))) return e;
            for (; (e = Ys(i.next.bind(i), o)); ) if (n(e)) return e;
        }
        return null;
    }
    function Js(e, t) {
        for (; e && e !== t; ) {
            if (Ac(e)) return e;
            e = e.parentNode;
        }
        return null;
    }
    function Qs(e, t, n) {
        return Js(e.container(), n) === Js(t.container(), n);
    }
    function Zs(e, t) {
        if (!t) return null;
        var n = t.container(),
            r = t.offset();
        return Tc(n) ? n.childNodes[r + e] : null;
    }
    function ec(e, t) {
        var n = t.ownerDocument.createRange();
        return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n;
    }
    function tc(e, t, n) {
        for (var r, o, i = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
            var a = n[i];
            if ((Rc(a) && (a = a[i]), kc(a) || _c(a))) {
                if (((o = n), Js(a, (r = t)) === Js(o, r))) return a;
                break;
            }
            if (Oc(a)) break;
            n = n.parentNode;
        }
        return null;
    }
    function nc(e, t, n) {
        var r,
            o = R(tc, !0, t),
            i = R(tc, !1, t),
            a = n.startContainer,
            u = n.startOffset;
        if (Lr(a)) {
            var s = (a = Tc(a) ? a : a.parentNode).getAttribute("data-mce-caret");
            if ("before" === s && Xs((r = a.nextSibling))) return Bc(r);
            if ("after" === s && Xs((r = a.previousSibling))) return Pc(r);
        }
        if (!n.collapsed) return n;
        if (Vn(a)) {
            if (Rc(a)) {
                if (1 === e) {
                    if ((r = i(a))) return Bc(r);
                    if ((r = o(a))) return Pc(r);
                }
                if (-1 === e) {
                    if ((r = o(a))) return Pc(r);
                    if ((r = i(a))) return Bc(r);
                }
                return n;
            }
            if (Ro(a) && u >= a.data.length - 1) return 1 === e && (r = i(a)) ? Bc(r) : n;
            if (Ao(a) && u <= 1) return -1 === e && (r = o(a)) ? Pc(r) : n;
            if (u === a.data.length) return (r = i(a)) ? Bc(r) : n;
            if (0 === u) return (r = o(a)) ? Pc(r) : n;
        }
        return n;
    }
    function rc(e, t) {
        return ve.from(Zs(e ? 0 : -1, t)).filter(kc);
    }
    function oc(e, t, n) {
        var r = nc(e, t, n);
        return -1 === e ? cs.fromRangeStart(r) : cs.fromRangeEnd(r);
    }
    function ic(e) {
        return ve.from(e.getNode()).map(Et.fromDom);
    }
    function ac(e, t) {
        for (; (t = e(t)); ) if (t.isVisible()) return t;
        return t;
    }
    function uc(e, t) {
        var n = Qs(e, t);
        return !(n || !Kn(e.getNode())) || n;
    }
    (cs.fromRangeStart = function (e) {
        return cs(e.startContainer, e.startOffset);
    }),
        (cs.fromRangeEnd = function (e) {
            return cs(e.endContainer, e.endOffset);
        }),
        (cs.after = function (e) {
            return cs(e.parentNode, as(e) + 1);
        }),
        (cs.before = function (e) {
            return cs(e.parentNode, as(e));
        }),
        (cs.isAbove = function (e, t) {
            return dn(Q(t.getClientRects()), Z(e.getClientRects()), Ou).getOr(!1);
        }),
        (cs.isBelow = function (e, t) {
            return dn(Z(t.getClientRects()), Q(e.getClientRects()), Bu).getOr(!1);
        }),
        (cs.isAtStart = function (e) {
            return !!e && e.isAtStart();
        }),
        (cs.isAtEnd = function (e) {
            return !!e && e.isAtEnd();
        }),
        (cs.isTextPosition = function (e) {
            return !!e && Vn(e.container());
        }),
        (cs.isElementPosition = function (e) {
            return !1 === cs.isTextPosition(e);
        });
    var sc,
        cc,
        lc = Vn,
        fc = sn,
        dc = eu.nodeIndex,
        mc = function (e) {
            var t = e.parentNode;
            return fc(t) ? mc(t) : t;
        },
        gc = function (e) {
            return e
                ? me(
                      e.childNodes,
                      function (e, t) {
                          return fc(t) && "BR" !== t.nodeName ? (e = e.concat(gc(t))) : e.push(t), e;
                      },
                      []
                  )
                : [];
        },
        pc = Gn,
        hc = R(xs, u, !0),
        vc = eu.DOM,
        bc = Hn,
        yc = Vn,
        Cc = function (e) {
            bc(e) && Mr(e) && (Fr(e) ? e.removeAttribute("data-mce-caret") : Us(e)), yc(e) && (Hs(e), 0 === e.data.length && Us(e));
        },
        xc = dt().browser,
        wc = Gn,
        Sc = Qn,
        Nc = Jn,
        Ec = function (e) {
            return wc(e) || Sc(e);
        },
        kc = Gn,
        _c = Qn,
        Ac = an("display", "block table table-cell table-caption list-item"),
        Rc = Mr,
        Dc = Lr,
        Tc = Hn,
        Oc = Vr,
        Bc = R(ec, !0),
        Pc = R(ec, !1);
    function Lc(e, t) {
        return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null;
    }
    function Ic(e, t) {
        if (0 < e) {
            if (Gl(t.previousSibling) && !Kl(t.previousSibling)) return cs.before(t);
            if (Kl(t)) return cs(t, 0);
        }
        if (e < 0) {
            if (Gl(t.nextSibling) && !Kl(t.nextSibling)) return cs.after(t);
            if (Kl(t)) return cs(t, t.data.length);
        }
        return e < 0 && !Yl(t) ? cs.after(t) : cs.before(t);
    }
    function Mc(t) {
        return {
            next: function (e) {
                return Ql(sc.Forwards, e, t);
            },
            prev: function (e) {
                return Ql(sc.Backwards, e, t);
            },
        };
    }
    function Fc(e) {
        return cs.isTextPosition(e) ? 0 === e.offset() : Vr(e.getNode());
    }
    function Uc(e) {
        if (cs.isTextPosition(e)) {
            var t = e.container();
            return e.offset() === t.data.length;
        }
        return Vr(e.getNode(!0));
    }
    function zc(e, t) {
        return !cs.isTextPosition(e) && !cs.isTextPosition(t) && e.getNode() === t.getNode(!0);
    }
    function Hc(o, i, a) {
        return Zl(o, i, a).bind(function (e) {
            return Qs(a, e, i) && ((t = a), (n = e), o ? !zc(t, n) && (cs.isTextPosition((r = t)) || !Kn(r.getNode())) && Uc(t) && Fc(n) : !zc(n, t) && Fc(t) && Uc(n)) ? Zl(o, i, e) : ve.some(e);
            var t, n, r;
        });
    }
    function jc(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u = e ? t.firstChild : t.lastChild;
        return Vn(u) ? ve.some(cs(u, e ? 0 : u.data.length)) : u ? (Vr(u) ? ve.some(e ? cs.before(u) : Kn((a = u)) ? cs.before(a) : cs.after(a)) : ((r = t), (o = u), (i = (n = e) ? cs.before(o) : cs.after(o)), Zl(n, r, i))) : ve.none();
    }
    function Vc(e) {
        return Hn(e) && e.id === af;
    }
    function qc(e, t) {
        for (; t && t !== e; ) {
            if (t.id === af) return t;
            t = t.parentNode;
        }
        return null;
    }
    function $c(e) {
        return Nt.isArray(e.start);
    }
    function Wc(e, t) {
        return Hn(t) && e.isBlock(t) && !t.innerHTML && !xt.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t;
    }
    function Kc(e, t, n) {
        return !1 === t.hasChildNodes() && qc(e, t) && ((o = n), (i = (r = t).ownerDocument.createTextNode(So)), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 1);
        var r, o, i;
    }
    function Xc(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s = n[t ? "start" : "end"],
            c = e.getRoot();
        if (s) {
            for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                if (((u = i.childNodes), Kc(c, i, r))) return 1;
                if (s[o] > u.length - 1)
                    return (
                        Kc(c, i, r) ||
                        (function (t) {
                            return of(i).fold(D, function (e) {
                                return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0;
                            });
                        })(r)
                    );
                i = u[s[o]];
            }
            3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a);
        }
        return 1;
    }
    function Yc(e) {
        return Vn(e) && 0 < e.data.length;
    }
    function Gc(e, t, n) {
        var r,
            o,
            i,
            a,
            u,
            s,
            c = e.get(n.id + "_" + t),
            l = n.keep;
        if (c) {
            if (
                ((r = c.parentNode),
                (o =
                    "start" === t
                        ? l
                            ? c.hasChildNodes()
                                ? ((r = c.firstChild), 1)
                                : Yc(c.nextSibling)
                                ? ((r = c.nextSibling), 0)
                                : Yc(c.previousSibling)
                                ? ((r = c.previousSibling), c.previousSibling.data.length)
                                : ((r = c.parentNode), e.nodeIndex(c) + 1)
                            : e.nodeIndex(c)
                        : l
                        ? c.hasChildNodes()
                            ? ((r = c.firstChild), 1)
                            : Yc(c.previousSibling)
                            ? ((r = c.previousSibling), c.previousSibling.data.length)
                            : ((r = c.parentNode), e.nodeIndex(c))
                        : e.nodeIndex(c)),
                (u = r),
                (s = o),
                !l)
            ) {
                for (
                    a = c.previousSibling,
                        i = c.nextSibling,
                        Nt.each(Nt.grep(c.childNodes), function (e) {
                            Vn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                        });
                    (c = e.get(n.id + "_" + t));

                )
                    e.remove(c, !0);
                a && i && a.nodeType === i.nodeType && Vn(a) && !xt.opera && ((o = a.nodeValue.length), a.appendData(i.nodeValue), e.remove(i), (u = a), (s = o));
            }
            return ve.some(cs(u, s));
        }
        return ve.none();
    }
    function Jc(t, e) {
        !(function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                g = e.dom;
            if (t) {
                if ($c(t)) return (d = t), (m = (f = g).createRng()), Xc(f, !0, d, m) && Xc(f, !1, d, m) ? ve.some(m) : ve.none();
                if (X(t.start)) return ve.some(((s = t), (c = (u = g).createRng()), (l = ps(u.getRoot(), s.start)), c.setStart(l.container(), l.offset()), (l = ps(u.getRoot(), s.end)), c.setEnd(l.container(), l.offset()), c));
                if (Ee(t, "id"))
                    return dn((a = Gc((o = g), "start", (i = t))), Gc(o, "end", i).or(a), function (e, t) {
                        var n = o.createRng();
                        return n.setStart(Wc(o, e.container()), e.offset()), n.setEnd(Wc(o, t.container()), t.offset()), n;
                    });
                if (Ee(t, "name"))
                    return (
                        (n = g),
                        ve.from(n.select((r = t).name)[r.index]).map(function (e) {
                            var t = n.createRng();
                            return t.selectNode(e), t;
                        })
                    );
                if (Ee(t, "rng")) return ve.some(t.rng);
            }
            return ve.none();
        })(t, e).each(function (e) {
            t.setRng(e);
        });
    }
    function Qc(e) {
        return Hn(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type");
    }
    function Zc(e) {
        return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e);
    }
    function el(e) {
        return !Zc(e) && !sf(e);
    }
    function tl(e) {
        return e.nodeType;
    }
    function nl(e, t, n) {
        var r,
            o = n.startOffset,
            i = n.startContainer;
        if ((i !== n.endContainer || !(r = i.childNodes[o]) || !/^(IMG)$/.test(r.nodeName)) && Hn(i)) {
            var a = i.childNodes,
                u = void 0;
            o < a.length ? ((i = a[o]), (u = new Dr(i, e.getParent(i, e.isBlock)))) : ((i = a[a.length - 1]), (u = new Dr(i, e.getParent(i, e.isBlock))).next(!0));
            for (var s = u.current(); s; s = u.next()) if (Vn(s) && !cf(s)) return n.setStart(s, 0), t.setRng(n), 0;
        }
    }
    function rl(e, t, n) {
        if (e) {
            var r = t ? "nextSibling" : "previousSibling";
            for (e = n ? e : e[r]; e; e = e[r]) if (Hn(e) || !cf(e)) return e;
        }
    }
    function ol(e, t) {
        return tl(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()];
    }
    function il(e, t, n) {
        return e.schema.isValidChild(t, n);
    }
    function al(e, n) {
        return (
            y(e)
                ? (e = e(n))
                : V(n) &&
                  (e = e.replace(/%(\w+)/g, function (e, t) {
                      return n[t] || e;
                  })),
            e
        );
    }
    function ul(e, t) {
        return (e = "" + ((e = e || "").nodeName || e)), (t = "" + ((t = t || "").nodeName || t)), e.toLowerCase() === t.toLowerCase();
    }
    function sl(e, t, n) {
        return ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "" + ("fontFamily" === n ? t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",") : t);
    }
    function cl(e, t, n) {
        return sl(e, e.getStyle(t, n), n);
    }
    function ll(t, e) {
        var n;
        return (
            t.getParent(e, function (e) {
                return (n = t.getStyle(e, "text-decoration")) && "none" !== n;
            }),
            n
        );
    }
    function fl(e, t, n) {
        return e.getParents(t, n, e.getRoot());
    }
    function dl(e, t) {
        return F(e.formatter.get(t), function (t) {
            function o(e) {
                return 1 < e.length && "%" === e.charAt(0);
            }
            return F(["styles", "attributes"], function (e) {
                return ue(t, e).exists(function (e) {
                    var n, r;
                    return F(
                        S(e)
                            ? e
                            : ((n = u),
                              (r = []),
                              ne(e, function (e, t) {
                                  r.push(n(e, t));
                              }),
                              r),
                        o
                    );
                });
            });
        });
    }
    function ml(e) {
        return se(e, "block");
    }
    function gl(e) {
        return se(e, "selector");
    }
    function pl(e) {
        return se(e, "inline");
    }
    function hl(e) {
        return gl(e) && !1 !== e.expand && !pl(e);
    }
    function vl(e, t) {
        for (var n = t; n; ) {
            if (Hn(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
            n = n.parentNode;
        }
        return t;
    }
    function bl(e, t, n, r) {
        for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++) if (r(o.charAt(i))) return e ? i + 1 : i;
        return -1;
    }
    function yl(e, t, n) {
        return bl(e, t, n, function (e) {
            return sf(e) || Zc(e);
        });
    }
    function Cl(e, t, n) {
        return bl(e, t, n, el);
    }
    function xl(i, e, t, n, a, r) {
        function o(e, t, n) {
            var r = Au(i),
                o = a ? r.backwards : r.forwards;
            return ve.from(
                o(
                    e,
                    t,
                    function (e, t) {
                        return lf(e.parentNode) ? -1 : n(a, (u = e), t);
                    },
                    s
                )
            );
        }
        var u,
            s = i.getParent(t, i.isBlock) || e;
        return o(t, n, yl)
            .bind(function (e) {
                return r ? o(e.container, e.offset + (a ? -1 : 0), Cl) : ve.some(e);
            })
            .orThunk(function () {
                return u ? ve.some({ container: u, offset: a ? 0 : u.length }) : ve.none();
            });
    }
    function wl(e, t, n, r, o) {
        Vn(r) && Pe(r.data) && r[o] && (r = r[o]);
        for (var i = ff(e, r), a = 0; a < i.length; a++)
            for (var u = 0; u < t.length; u++) {
                var s = t[u];
                if ((!V(s.collapsed) || s.collapsed === n.collapsed) && gl(s) && e.is(i[a], s.selector)) return i[a];
            }
        return r;
    }
    function Sl(t, e, n, r) {
        var o,
            i = n,
            a = t.dom,
            u = a.getRoot(),
            s = e[0];
        if (
            ((i = ml(s) ? (s.wrapper ? null : a.getParent(n, s.block, u)) : i) ||
                ((o = a.getParent(n, "LI,TD,TH")),
                (i = a.getParent(
                    Vn(n) ? n.parentNode : n,
                    function (e) {
                        return e !== u && mf(t, e);
                    },
                    o
                ))),
            !(i = (i && ml(s) && s.wrapper && ff(a, i, "ul,ol").reverse()[0]) || i))
        )
            for (i = n; i[r] && !a.isBlock(i[r]) && !ul((i = i[r]), "br"); );
        return i || n;
    }
    function Nl(e, t, n, r, o) {
        var i,
            a = n,
            u = o ? "previousSibling" : "nextSibling",
            s = e.getRoot();
        if (Vn(n) && !df(n) && (o ? 0 < r : r < n.data.length)) return n;
        for (;;) {
            if (!t[0].block_expand && e.isBlock(a)) return a;
            for (var c = a[u]; c; c = c[u]) {
                var l = Vn(c) && !gf(e, s, c, u);
                if (!lf(c) && (!Kn((i = c)) || !i.getAttribute("data-mce-bogus") || i.nextSibling) && !df(c, l)) return a;
            }
            if (a === s || a.parentNode === s) {
                n = a;
                break;
            }
            a = a.parentNode;
        }
        return n;
    }
    function El(e) {
        return lf(e.parentNode) || lf(e);
    }
    function kl(e, t, n, r) {
        void 0 === r && (r = !1);
        var o = t.startContainer,
            i = t.startOffset,
            a = t.endContainer,
            u = t.endOffset,
            s = e.dom,
            c = n[0];
        return (
            Hn(o) && o.hasChildNodes() && ((o = Iu(o, i)), Vn(o) && (i = 0)),
            Hn(a) && a.hasChildNodes() && ((a = Iu(a, t.collapsed ? u : u - 1)), Vn(a) && (u = a.nodeValue.length)),
            (o = vl(s, o)),
            (a = vl(s, a)),
            El(o) && ((o = lf(o) ? o : o.parentNode), (o = t.collapsed ? o.previousSibling || o : o.nextSibling || o), Vn(o) && (i = t.collapsed ? o.length : 0)),
            El(a) && ((a = lf(a) ? a : a.parentNode), (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a), Vn(a) && (u = t.collapsed ? 0 : a.length)),
            t.collapsed &&
                (xl(s, e.getBody(), o, i, !0, r).each(function (e) {
                    var t = e.container,
                        n = e.offset;
                    (o = t), (i = n);
                }),
                xl(s, e.getBody(), a, u, !1, r).each(function (e) {
                    var t = e.container,
                        n = e.offset;
                    (a = t), (u = n);
                })),
            (pl(c) || c.block_expand) && ((pl(c) && Vn(o) && 0 !== i) || (o = Nl(s, n, o, i, !0)), (pl(c) && Vn(a) && u !== a.nodeValue.length) || (a = Nl(s, n, a, u, !1))),
            hl(c) && ((o = wl(s, n, t, o, "previousSibling")), (a = wl(s, n, t, a, "nextSibling"))),
            (ml(c) || gl(c)) && ((o = Sl(e, n, o, "previousSibling")), (a = Sl(e, n, a, "nextSibling")), ml(c) && (s.isBlock(o) || (o = Nl(s, n, o, i, !0)), s.isBlock(a) || (a = Nl(s, n, a, u, !1)))),
            Hn(o) && ((i = s.nodeIndex(o)), (o = o.parentNode)),
            Hn(a) && ((u = s.nodeIndex(a) + 1), (a = a.parentNode)),
            { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
        );
    }
    function _l(n, e, u) {
        function s(e) {
            var t = e[0];
            Vn(t) && t === i && o >= t.data.length && e.splice(0, 1);
            var n = e[e.length - 1];
            return 0 === a && 0 < e.length && n === l && Vn(n) && e.splice(e.length - 1, 1), e;
        }
        function c(e, t, n) {
            for (var r = []; e && e !== n; e = e[t]) r.push(e);
            return r;
        }
        function t(e, t) {
            return n.getParent(
                e,
                function (e) {
                    return e.parentNode === t;
                },
                t
            );
        }
        function r(e, t, n) {
            var r = n ? "nextSibling" : "previousSibling",
                o = e;
            for (o.parentNode; o && o !== t; o = i) {
                var i = o.parentNode,
                    a = c(o === e ? o : o[r], r);
                a.length && (n || a.reverse(), u(s(a)));
            }
        }
        var o = e.startOffset,
            i = Iu(e.startContainer, o),
            a = e.endOffset,
            l = Iu(e.endContainer, a - 1);
        if (i === l) return u(s([i]));
        var f = n.findCommonAncestor(i, l);
        if (n.isChildOf(i, l)) return r(i, f, !0);
        if (n.isChildOf(l, i)) return r(l, f);
        var d = t(i, f) || i,
            m = t(l, f) || l;
        r(i, d, !0);
        var g = c(d === i ? d : d.nextSibling, "nextSibling", m === l ? m.nextSibling : m);
        g.length && u(s(g)), r(l, m);
    }
    function Al(e) {
        var t = [];
        if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t;
    }
    function Rl(e, t) {
        var n = yu(t, "td[data-mce-selected],th[data-mce-selected]");
        return 0 < n.length
            ? n
            : U(
                  H(e, function (e) {
                      var t = Lu(e);
                      return t ? [Et.fromDom(t)] : [];
                  }),
                  yo
              );
    }
    function Dl(e) {
        return Rl(Al(e.selection.getSel()), Et.fromDom(e.getBody()));
    }
    function Tl(e, t) {
        return vr(e, "table", t);
    }
    function Ol(o, e) {
        return dn(
            ((r = e.startContainer), (i = e.startOffset), Vn(r) ? (0 === i ? ve.some(Et.fromDom(r)) : ve.none()) : ve.from(r.childNodes[i]).map(Et.fromDom)),
            ((t = e.endContainer), (n = e.endOffset), Vn(t) ? (n === t.data.length ? ve.some(Et.fromDom(t)) : ve.none()) : ve.from(t.childNodes[n - 1]).map(Et.fromDom)),
            function (e, t) {
                var n = M(pf(o), R(je, e)),
                    r = M(hf(o), R(je, t));
                return n.isSome() && r.isSome();
            }
        ).getOr(!1);
        var t, n, r, i;
    }
    function Bl(e, t, n, r) {
        var o = n,
            i = new Dr(n, o),
            a = ae(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
                return !T(["td", "th", "table"], t.toLowerCase());
            });
        do {
            if (Vn(n) && 0 !== Nt.trim(n.nodeValue).length) return r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length), 0;
            if (a[n.nodeName]) return r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n), 0;
        } while ((n = r ? i.next() : i.prev()));
        "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
    }
    function Pl(e) {
        var t = e.selection.getSel();
        return t && 0 < t.rangeCount;
    }
    function Ll(r, o) {
        var e = Dl(r);
        0 < e.length
            ? Y(e, function (e) {
                  var t = e.dom,
                      n = r.dom.createRng();
                  n.setStartBefore(t), n.setEndAfter(t), o(n, !0);
              })
            : o(r.selection.getRng(), !1);
    }
    function Il(e, t, n) {
        var r = Ss(e, t);
        n(r), e.moveToBookmark(r);
    }
    function Ml(e) {
        return vf.get(e);
    }
    function Fl(e, t, n, r) {
        var o = t.uid,
            i = void 0 === o ? wu("mce-annotation") : o,
            a = (function (e, t) {
                var n = {};
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                return n;
            })(t, ["uid"]),
            u = Et.fromTag("span", e);
        vu(u, $u()), pn(u, "" + Ku(), i), pn(u, "" + Wu(), n);
        var s,
            c = r(i, a),
            l = c.attributes,
            f = c.classes,
            d = void 0 === f ? [] : f;
        return (
            hn(u, void 0 === l ? {} : l),
            (s = u),
            Y(d, function (e) {
                vu(s, e);
            }),
            u
        );
    }
    function Ul(u, e, t, n, r) {
        function s() {
            d.clear();
        }
        function c(e) {
            Y(e, o);
        }
        var l = [],
            f = Fl(u.getDoc(), r, t, n),
            d = du(),
            o = function (e) {
                var t, n, r, o, i, a;
                switch (
                    ((r = u),
                    (i = "span"),
                    (a = kt((o = e))),
                    Ot(o).fold(
                        function () {
                            return "skipping";
                        },
                        function (e) {
                            return "br" === a || (An((n = o)) && Ml(n) === So) ? "valid" : _n((t = o)) && bu(t, $u()) ? "existing" : Vc(o.dom) ? "caret" : il(r, i, a) && il(r, kt(e), i) ? "valid" : "invalid-child";
                            var t, n;
                        }
                    ))
                ) {
                    case "invalid-child":
                        s(), c(Tn(e)), s();
                        break;
                    case "valid":
                        qt(
                            (t = e),
                            (n = d.get().getOrThunk(function () {
                                var e = Eu(f);
                                return l.push(e), d.set(e), e;
                            }))
                        ),
                            Ln(n, t);
                }
            };
        return (
            _l(u.dom, e, function (e) {
                s(), c(A(e, Et.fromDom));
            }),
            l
        );
    }
    function zl(o) {
        var n,
            e,
            r,
            i =
                ((n = {}),
                {
                    register: function (e, t) {
                        n[e] = { name: e, settings: t };
                    },
                    lookup: function (e) {
                        return ue(n, e).map(function (e) {
                            return e.settings;
                        });
                    },
                });
        (r = i),
            (e = o).on("init", function () {
                e.serializer.addNodeFilter("span", function (e) {
                    Y(e, function (t) {
                        ve.from(t.attr(Wu()))
                            .bind(r.lookup)
                            .each(function (e) {
                                !1 === e.persistent && t.unwrap();
                            });
                    });
                });
            });
        var a = xu(o);
        return {
            register: function (e, t) {
                i.register(e, t);
            },
            annotate: function (t, n) {
                i.lookup(t).each(function (e) {
                    var u, s, c, l;
                    (s = t),
                        (c = e),
                        (l = n),
                        (u = o).undoManager.transact(function () {
                            var e,
                                t,
                                n,
                                r,
                                o = u.selection,
                                i = o.getRng(),
                                a = 0 < Dl(u).length;
                            i.collapsed && !a && ((n = kl((e = u), (t = i), [{ inline: "span" }])), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)),
                                o.getRng().collapsed && !a
                                    ? (Su((r = Fl(u.getDoc(), l, s, c.decorate)), wo), o.getRng().insertNode(r.dom), o.select(r.dom))
                                    : Il(o, !1, function () {
                                          Ll(u, function (e) {
                                              Ul(u, e, s, c.decorate, l);
                                          });
                                      });
                        });
                });
            },
            annotationChanged: function (e, t) {
                a.addListener(e, t);
            },
            remove: function (e) {
                Cu(o, ve.some(e)).each(function (e) {
                    Y(e.elements, Yt);
                });
            },
            getAll: function (e) {
                var t, n, r;
                return re(
                    ((t = e),
                    (n = yu(Et.fromDom(o.getBody()), "[" + Wu() + '="' + t + '"]')),
                    (r = {}),
                    Y(n, function (e) {
                        var t = vn(e, Ku()),
                            n = ue(r, t).getOr([]);
                        r[t] = n.concat([e]);
                    }),
                    r),
                    function (e) {
                        return A(e, function (e) {
                            return e.dom;
                        });
                    }
                );
            },
        };
    }
    function Hl(e) {
        return { getBookmark: R(uf, e), moveToBookmark: R(Jc, e) };
    }
    ((cc = sc = sc || {})[(cc.Backwards = -1)] = "Backwards"), (cc[(cc.Forwards = 1)] = "Forwards");
    function jl(e) {
        return (
            Lo(e) ||
            (!!Fo((t = e)) &&
                !0 !==
                    L(
                        xe(t.getElementsByTagName("*")),
                        function (e, t) {
                            return e || Do(t);
                        },
                        !1
                    ))
        );
        var t;
    }
    var Vl,
        ql,
        $l,
        Wl = Gn,
        Kl = Vn,
        Xl = Hn,
        Yl = Kn,
        Gl = Vr,
        Jl = qr,
        Ql = function (e, t, n) {
            var r, o, i;
            if (!Xl(n) || !t) return null;
            if (t.isEqual(cs.after(n)) && n.lastChild) {
                if (((i = cs.after(n.lastChild)), e < 0 && Gl(n.lastChild) && Xl(n.lastChild))) return Yl(n.lastChild) ? cs.before(n.lastChild) : i;
            } else i = t;
            var a,
                u,
                s,
                c = i.container(),
                l = i.offset();
            if (Kl(c)) {
                if (e < 0 && 0 < l) return cs(c, --l);
                if (0 < e && l < c.length) return cs(c, ++l);
                r = c;
            } else {
                if (e < 0 && 0 < l && ((f = Lc(c, l - 1)), Gl(f))) return !jl(f) && (o = Gs(f, e, Jl, f)) ? (Kl(o) ? cs(o, o.data.length) : cs.after(o)) : Kl(f) ? cs(f, f.data.length) : cs.before(f);
                if (0 < e && l < c.childNodes.length && ((f = Lc(c, l)), Gl(f)))
                    return Yl(f)
                        ? ((a = n), (s = (u = f).nextSibling) && Gl(s) ? (Kl(s) ? cs(s, 0) : cs.before(s)) : Ql(sc.Forwards, cs.after(u), a))
                        : !jl(f) && (o = Gs(f, e, Jl, f))
                        ? Kl(o)
                            ? cs(o, 0)
                            : cs.before(o)
                        : Kl(f)
                        ? cs(f, 0)
                        : cs.after(f);
                r = f || i.getNode();
            }
            if (((0 < e && i.isAtEnd()) || (e < 0 && i.isAtStart())) && ((r = Gs(r, e, w, n, !0)), Jl(r, n))) return Ic(e, r);
            var f = Gs(r, e, Jl, n),
                d = pe(
                    U(
                        (function (e, t) {
                            for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
                            return n;
                        })(c, n),
                        Wl
                    )
                );
            return !d || (f && d.contains(f)) ? (f ? Ic(e, f) : null) : 0 < e ? cs.after(d) : cs.before(d);
        },
        Zl = function (e, t, n) {
            var r = Mc(t);
            return ve.from(e ? r.next(n) : r.prev(n));
        },
        ef = function (t, n, e, r) {
            return Hc(t, n, e).bind(function (e) {
                return r(e) ? ef(t, n, e, r) : ve.some(e);
            });
        },
        tf = R(Zl, !0),
        nf = R(Zl, !1),
        rf = R(jc, !0),
        of = R(jc, !1),
        af = "_mce_caret",
        uf = function (e, t, n) {
            return 2 === t ? xs(Eo, n, e) : 3 === t ? ((o = (r = e).getRng()), { start: gs(r.dom.getRoot(), cs.fromRangeStart(o)), end: gs(r.dom.getRoot(), cs.fromRangeEnd(o)) }) : t ? { rng: e.getRng() } : Ss(e, !1);
            var r, o;
        },
        sf =
            ((Vl = wo),
            function (e) {
                return Vl === e;
            }),
        cf = function (e, t) {
            return void 0 === t && (t = !1), !(!V(e) || !Vn(e)) && $r(t ? e.data.replace(/ /g, "\xa0") : e.data);
        },
        lf = Qc,
        ff = fl,
        df = cf,
        mf = ol,
        gf = function (e, t, n, r) {
            var o = n.parentNode;
            return !V(n[r]) && (!(o !== t && !K(o) && !e.isBlock(o)) || gf(e, t, o, r));
        },
        pf = function (t) {
            return Ft(t).fold(J([t]), function (e) {
                return [t].concat(pf(e));
            });
        },
        hf = function (t) {
            return Ut(t).fold(J([t]), function (e) {
                return "br" === kt(e)
                    ? Bt(e)
                          .map(function (e) {
                              return [t].concat(hf(e));
                          })
                          .getOr([])
                    : [t].concat(hf(e));
            });
        },
        vf =
            ((ql = An),
            {
                get: function (e) {
                    if (!ql(e)) throw new Error("Can only get text value of a text node");
                    return $l(e).getOr("");
                },
                getOption: ($l = function (e) {
                    return ql(e) ? ve.from(e.dom.nodeValue) : ve.none();
                }),
                set: function (e, t) {
                    if (!ql(e)) throw new Error("Can only set raw text value of a text node");
                    e.dom.nodeValue = t;
                },
            });
    function bf(e, t) {
        for (; t && t !== e; ) {
            if (Yn(t) || Gn(t)) return t;
            t = t.parentNode;
        }
        return null;
    }
    function yf(t, n, e) {
        if (!e.collapsed) {
            if (xt.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
                var r = e.startContainer.childNodes[e.startOffset];
                if (Hn(r))
                    return F(r.getClientRects(), function (e) {
                        return Pu(e, t, n);
                    });
            }
            return F(e.getClientRects(), function (e) {
                return Pu(e, t, n);
            });
        }
    }
    function Cf(e, t, n) {
        return e.fire(t, n);
    }
    function xf(e, t, n, r) {
        return e.fire("FormatApply", { format: t, node: n, vars: r });
    }
    function wf(e, t, n, r) {
        return e.fire("FormatRemove", { format: t, node: n, vars: r });
    }
    function Sf(r, l) {
        function c(e) {
            return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"));
        }
        function f(e) {
            return Qn(e) || T.hasClass(e, "mce-preview-object");
        }
        function n(e) {
            var t = e.target;
            !(function (e, t) {
                if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return c(e.target) && !yf(e.clientX, e.clientY, t);
                var n = e.touches[0];
                return c(e.target) && !yf(n.clientX, n.clientY, t);
            })(e, l.selection.getRng()) ||
                e.isDefaultPrevented() ||
                l.selection.select(t);
        }
        function d(e) {
            return T.is(e, "figure.image") ? [e.querySelector("img")] : T.hasClass(e, "mce-preview-object") && V(e.firstElementChild) ? [e, e.firstElementChild] : [e];
        }
        function i(e) {
            var t = Ps(l);
            return !!t && "false" !== e.getAttribute("data-mce-resize") && e !== l.getBody() && (T.hasClass(e, "mce-preview-object") ? ze(Et.fromDom(e.firstElementChild), t) : ze(Et.fromDom(e), t));
        }
        function a(e, t, n) {
            V(n) &&
                Y(d(e), function (e) {
                    e.style[t] || !l.schema.isValid(e.nodeName.toLowerCase(), t) ? T.setStyle(e, t, n) : T.setAttrib(e, t, "" + n);
                });
        }
        function m(e, t, n) {
            a(e, "width", t), a(e, "height", n);
        }
        function g(e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                u = e.screenX - C,
                s = e.screenY - x;
            (k = u * b[2] + w),
                (_ = s * b[3] + S),
                (k = k < 5 ? 5 : k),
                (_ = _ < 5 ? 5 : _),
                ((c(p) || f(p)) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !If.modifierPressed(e) : If.modifierPressed(e)) && (L(u) > L(s) ? ((_ = I(k * N)), (k = I(_ / N))) : ((k = I(_ / N)), (_ = I(k * N)))),
                m(h, k, _),
                (t = b.startPos.x + u),
                (n = b.startPos.y + s),
                T.setStyles(v, { left: (t = 0 < t ? t : 0), top: (n = 0 < n ? n : 0), display: "block" }),
                (v.innerHTML = k + " &times; " + _),
                b[2] < 0 && h.clientWidth <= k && T.setStyle(h, "left", void 0 + (w - k)),
                b[3] < 0 && h.clientHeight <= _ && T.setStyle(h, "top", void 0 + (S - _)),
                (u = M.scrollWidth - A) + (s = M.scrollHeight - R) != 0 && T.setStyles(v, { left: t - u, top: n - s }),
                E || ((r = p), (o = w), (i = S), (a = "corner-" + b.name), l.fire("ObjectResizeStart", { target: r, width: o, height: i, origin: a }), (E = !0));
        }
        function o(e) {
            function t(e, t) {
                if (e)
                    do {
                        if (e === t) return 1;
                    } while ((e = e.parentNode));
            }
            var n;
            E ||
                l.removed ||
                (O(T.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                    e.removeAttribute(D);
                }),
                (n = "mousedown" === e.type ? e.target : r.getNode()),
                t((n = T.$(n).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0]), M) && (s(), t(r.getStart(!0), n) && t(r.getEnd(!0), n)) ? z(n) : H());
        }
        function u(e) {
            return Mf(bf(l.getBody(), e));
        }
        function s() {
            try {
                l.getDoc().execCommand("enableObjectResizing", !1, "false");
            } catch (e) {}
        }
        var p,
            h,
            v,
            b,
            y,
            C,
            x,
            w,
            S,
            N,
            E,
            k,
            _,
            A,
            R,
            D = "data-mce-selected",
            T = l.dom,
            O = Nt.each,
            B = l.getDoc(),
            P = document,
            L = Math.abs,
            I = Math.round,
            M = l.getBody(),
            F = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] },
            U = function () {
                var e,
                    t,
                    n,
                    r,
                    o = E;
                (E = !1),
                    o && (a(p, "width", k), a(p, "height", _)),
                    T.unbind(B, "mousemove", g),
                    T.unbind(B, "mouseup", U),
                    P !== B && (T.unbind(P, "mousemove", g), T.unbind(P, "mouseup", U)),
                    T.remove(h),
                    T.remove(v),
                    T.remove(y),
                    z(p),
                    o && ((e = p), (t = k), (n = _), (r = "corner-" + b.name), l.fire("ObjectResized", { target: e, width: t, height: n, origin: r }), T.setAttrib(p, "style", T.getAttrib(p, "style"))),
                    l.nodeChanged();
            },
            z = function (e) {
                j();
                var t = T.getPos(e, M),
                    a = t.x,
                    u = t.y,
                    n = e.getBoundingClientRect(),
                    s = n.width || n.right - n.left,
                    c = n.height || n.bottom - n.top;
                p !== e && (H(), (p = e), (k = _ = 0));
                var r = l.fire("ObjectSelected", { target: e }),
                    o = T.getAttrib(p, D, "1");
                i(e) && !r.isDefaultPrevented()
                    ? O(F, function (o, i) {
                          var e = T.get("mceResizeHandle" + i);
                          e && T.remove(e),
                              (e = T.add(M, "div", { id: "mceResizeHandle" + i, "data-mce-bogus": "all", class: "mce-resizehandle", unselectable: !0, style: "cursor:" + i + "-resize; margin:0; padding:0" })),
                              11 === xt.ie && (e.contentEditable = !1),
                              T.bind(e, "mousedown", function (e) {
                                  var t, n, r;
                                  e.stopImmediatePropagation(),
                                      e.preventDefault(),
                                      (t = e),
                                      (r = d(p)[0]),
                                      (C = t.screenX),
                                      (x = t.screenY),
                                      (w = r.clientWidth),
                                      (S = r.clientHeight),
                                      (N = S / w),
                                      ((b = o).name = i),
                                      (b.startPos = { x: s * o[0] + a, y: c * o[1] + u }),
                                      (A = M.scrollWidth),
                                      (R = M.scrollHeight),
                                      (y = T.add(M, "div", { class: "mce-resize-backdrop", "data-mce-bogus": "all" })),
                                      T.setStyles(y, { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" }),
                                      (h = f((n = p)) ? T.create("img", { src: xt.transparentSrc }) : n.cloneNode(!0)),
                                      T.addClass(h, "mce-clonedresizable"),
                                      T.setAttrib(h, "data-mce-bogus", "all"),
                                      (h.contentEditable = "false"),
                                      T.setStyles(h, { left: a, top: u, margin: 0 }),
                                      m(h, s, c),
                                      h.removeAttribute(D),
                                      M.appendChild(h),
                                      T.bind(B, "mousemove", g),
                                      T.bind(B, "mouseup", U),
                                      P !== B && (T.bind(P, "mousemove", g), T.bind(P, "mouseup", U)),
                                      (v = T.add(M, "div", { class: "mce-resize-helper", "data-mce-bogus": "all" }, w + " &times; " + S));
                              }),
                              (o.elm = e),
                              T.setStyles(e, { left: s * o[0] + a - e.offsetWidth / 2, top: c * o[1] + u - e.offsetHeight / 2 });
                      })
                    : H(),
                    T.getAttrib(p, D) || p.setAttribute(D, o);
            },
            H = function () {
                j(),
                    p && p.removeAttribute(D),
                    ne(F, function (e, t) {
                        var n = T.get("mceResizeHandle" + t);
                        n && (T.unbind(n), T.remove(n));
                    });
            },
            j = function () {
                ne(F, function (e) {
                    e.elm && (T.unbind(e.elm), delete e.elm);
                });
            };
        return (
            l.on("init", function () {
                var e;
                s(),
                    (xt.browser.isIE() || xt.browser.isEdge()) &&
                        (l.on("mousedown click", function (e) {
                            var t = e.target,
                                n = t.nodeName;
                            E || !/^(TABLE|IMG|HR)$/.test(n) || u(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged());
                        }),
                        T.bind(
                            M,
                            "mscontrolselect",
                            (e = function (e) {
                                function t(e) {
                                    Ar.setEditorTimeout(l, function () {
                                        return l.selection.select(e);
                                    });
                                }
                                if (u(e.target) || Qn(e.target)) return e.preventDefault(), void t(e.target);
                                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target));
                            })
                        ),
                        l.on("remove", function () {
                            return T.unbind(M, "mscontrolselect", e);
                        }));
                var t = Ar.throttle(function (e) {
                    l.composing || o(e);
                });
                l.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", t),
                    l.on("keyup compositionend", function (e) {
                        p && "TABLE" === p.nodeName && t(e);
                    }),
                    l.on("hide blur", H),
                    l.on("contextmenu longpress", n, !0);
            }),
            l.on("remove", j),
            {
                isResizable: i,
                showResizeRect: z,
                hideResizeRect: H,
                updateResizeRect: o,
                destroy: function () {
                    p = h = y = null;
                },
            }
        );
    }
    function Nf(e) {
        return Yn(e) || Gn(e);
    }
    function Ef(t, n, r) {
        var o,
            e,
            i,
            a,
            u,
            s = r;
        if (s.caretPositionFromPoint) (e = s.caretPositionFromPoint(t, n)) && ((o = r.createRange()).setStart(e.offsetNode, e.offset), o.collapse(!0));
        else if (s.caretRangeFromPoint) o = s.caretRangeFromPoint(t, n);
        else if (s.body.createTextRange) {
            o = s.body.createTextRange();
            try {
                o.moveToPoint(t, n), o.collapse(!0);
            } catch (e) {
                o = (function (e, n, t) {
                    var r,
                        o = t.elementFromPoint(e, n),
                        i = t.body.createTextRange();
                    if (
                        ((o && "HTML" !== o.tagName) || (o = t.body),
                        i.moveToElementText(o),
                        0 <
                            (r = (r = Nt.toArray(i.getClientRects())).sort(function (e, t) {
                                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - Math.abs(Math.max(t.top - n, t.bottom - n));
                            })).length)
                    ) {
                        n = (r[0].bottom + r[0].top) / 2;
                        try {
                            return i.moveToPoint(e, n), i.collapse(!0), i;
                        } catch (e) {}
                    }
                    return null;
                })(t, n, r);
            }
            return (
                (i = o),
                (a = r.body),
                (u = i && i.parentElement ? i.parentElement() : null),
                Gn(
                    (function (e, t, n) {
                        for (; e && e !== t; ) {
                            if (n(e)) return e;
                            e = e.parentNode;
                        }
                        return null;
                    })(u, a, Nf)
                )
                    ? null
                    : i
            );
        }
        return o;
    }
    function kf(e, t) {
        return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
    }
    function _f(e, t, n) {
        return (
            null !==
            (function (e, t, n) {
                for (; e && e !== t; ) {
                    if (n(e)) return e;
                    e = e.parentNode;
                }
                return null;
            })(e, t, n)
        );
    }
    function Af(e) {
        return e && "TABLE" === e.nodeName;
    }
    function Rf(e, t, n) {
        for (var r = new Dr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); (t = r[n ? "prev" : "next"]()); ) if (Kn(t)) return 1;
    }
    function Df(e, t, n, r, o) {
        var i,
            a,
            u = e.getRoot(),
            s = e.schema.getNonEmptyElements(),
            c = e.getParent(o.parentNode, e.isBlock) || u;
        if (r && Kn(o) && t && e.isEmpty(c)) return ve.some(cs(o.parentNode, e.nodeIndex(o)));
        for (var l, f, d = new Dr(o, c); (a = d[r ? "prev" : "next"]()); ) {
            if ("false" === e.getContentEditableParent(a) || ((f = u), Mr((l = a)) && !1 === _f(l, f, Vc))) return ve.none();
            if (Vn(a) && 0 < a.nodeValue.length)
                return !1 ===
                    _f(a, u, function (e) {
                        return "A" === e.nodeName;
                    })
                    ? ve.some(cs(a, r ? a.nodeValue.length : 0))
                    : ve.none();
            if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return ve.none();
            i = a;
        }
        return n && i ? ve.some(cs(i, 0)) : ve.none();
    }
    function Tf(e, t, n, r) {
        var o,
            i = e.getRoot(),
            a = !1,
            u = r[(n ? "start" : "end") + "Container"],
            s = r[(n ? "start" : "end") + "Offset"],
            c = Hn(u) && s === u.childNodes.length,
            l = e.schema.getNonEmptyElements(),
            f = n;
        if (Mr(u)) return ve.none();
        if ((Hn(u) && s > u.childNodes.length - 1 && (f = !1), $n(u) && ((u = i), (s = 0)), u === i)) {
            if (f && (d = u.childNodes[0 < s ? s - 1 : 0])) {
                if (Mr(d)) return ve.none();
                if (l[d.nodeName] || Af(d)) return ve.none();
            }
            if (u.hasChildNodes()) {
                if (((s = Math.min(!f && 0 < s ? s - 1 : s, u.childNodes.length - 1)), (u = u.childNodes[s]), (s = Vn(u) && c ? u.data.length : 0), !t && u === i.lastChild && Af(u))) return ve.none();
                if (
                    (function (e, t) {
                        for (; t && t !== e; ) {
                            if (Gn(t)) return 1;
                            t = t.parentNode;
                        }
                    })(i, u) ||
                    Mr(u)
                )
                    return ve.none();
                if (u.hasChildNodes() && !1 === Af(u)) {
                    var d = u,
                        m = new Dr(u, i);
                    do {
                        if (Gn(d) || Mr(d)) {
                            a = !1;
                            break;
                        }
                        if (Vn(d) && 0 < d.nodeValue.length) {
                            (s = f ? 0 : d.nodeValue.length), (u = d), (a = !0);
                            break;
                        }
                        if (l[d.nodeName.toLowerCase()] && (!(o = d) || !/^(TD|TH|CAPTION)$/.test(o.nodeName))) {
                            (s = e.nodeIndex(d)), (u = d.parentNode), f || s++, (a = !0);
                            break;
                        }
                    } while ((d = f ? m.next() : m.prev()));
                }
            }
        }
        return (
            t &&
                (Vn(u) &&
                    0 === s &&
                    Df(e, c, t, !0, u).each(function (e) {
                        (u = e.container()), (s = e.offset()), (a = !0);
                    }),
                Hn(u) &&
                    (!(d = (d = u.childNodes[s]) || u.childNodes[s - 1]) ||
                        !Kn(d) ||
                        (d.previousSibling && "A" === d.previousSibling.nodeName) ||
                        Rf(e, d, !1) ||
                        Rf(e, d, !0) ||
                        Df(e, c, t, !0, d).each(function (e) {
                            (u = e.container()), (s = e.offset()), (a = !0);
                        }))),
            f &&
                !t &&
                Vn(u) &&
                s === u.nodeValue.length &&
                Df(e, c, t, !1, u).each(function (e) {
                    (u = e.container()), (s = e.offset()), (a = !0);
                }),
            a ? ve.some(cs(u, s)) : ve.none()
        );
    }
    function Of(e, t) {
        var n = t.collapsed,
            r = t.cloneRange(),
            o = cs.fromRangeStart(t);
        return (
            Tf(e, n, !0, r).each(function (e) {
                (n && cs.isAbove(o, e)) || r.setStart(e.container(), e.offset());
            }),
            n ||
                Tf(e, n, !1, r).each(function (e) {
                    r.setEnd(e.container(), e.offset());
                }),
            n && r.collapse(!0),
            kf(t, r) ? ve.none() : ve.some(r)
        );
    }
    function Bf(e, t) {
        return e.splitText(t);
    }
    function Pf(e) {
        var t = e.startContainer,
            n = e.startOffset,
            r = e.endContainer,
            o = e.endOffset;
        return (
            t === r && Vn(t)
                ? 0 < n && n < t.nodeValue.length && ((t = (r = Bf(t, n)).previousSibling), n < o ? ((t = r = Bf(r, (o -= n)).previousSibling), (o = r.nodeValue.length), (n = 0)) : (o = 0))
                : (Vn(t) && 0 < n && n < t.nodeValue.length && ((t = Bf(t, n)), (n = 0)), Vn(r) && 0 < o && o < r.nodeValue.length && (o = (r = Bf(r, o).previousSibling).nodeValue.length)),
            { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
        );
    }
    function Lf(n) {
        return {
            walk: function (e, t) {
                return _l(n, e, t);
            },
            split: Pf,
            normalize: function (t) {
                return Of(n, t).fold(D, function (e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0;
                });
            },
        };
    }
    Hl.isBookmarkNode = Qc;
    var If = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            modifierPressed: function (e) {
                return e.shiftKey || e.ctrlKey || e.altKey || If.metaKeyPressed(e);
            },
            metaKeyPressed: function (e) {
                return xt.mac ? e.metaKey : e.ctrlKey && !e.altKey;
            },
        },
        Mf = Gn;
    (Lf.compareRanges = kf), (Lf.getCaretRangeFromPoint = Ef), (Lf.getSelectedNode = Lu), (Lf.getNode = Iu);
    var Ff,
        Uf,
        zf =
            ((Ff = "height"),
            (Uf = function (e) {
                var t = e.dom;
                return Mn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
            }),
            {
                set: function (e, t) {
                    if (!N(t) && !t.match(/^[0-9]+$/)) throw new Error(Ff + ".set accepts only positive integer values. Value was " + t);
                    var n = e.dom;
                    mn(n) && (n.style[Ff] = t + "px");
                },
                get: Hf,
                getOuter: Hf,
                aggregate: jf,
                max: function (e, t, n) {
                    var r = jf(e, n);
                    return r < t ? t - r : 0;
                },
            });
    function Hf(e) {
        var t = Uf(e);
        if (t <= 0 || null === t) {
            var n = wn(e, Ff);
            return parseFloat(n) || 0;
        }
        return t;
    }
    function jf(o, e) {
        return L(
            e,
            function (e, t) {
                var n = wn(o, t),
                    r = void 0 === n ? 0 : parseInt(n, 10);
                return isNaN(r) ? e : e + r;
            },
            0
        );
    }
    function Vf(e) {
        return "textarea" === kt(e);
    }
    function qf(e, t) {
        var n = (function (e) {
                var t = e.dom.ownerDocument,
                    n = t.body,
                    r = t.defaultView,
                    o = t.documentElement;
                if (n === e.dom) return Un(n.offsetLeft, n.offsetTop);
                var i = Gt(null == r ? void 0 : r.pageYOffset, o.scrollTop),
                    a = Gt(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
                    u = Gt(o.clientTop, n.clientTop),
                    s = Gt(o.clientLeft, n.clientLeft);
                return zn(e).translate(a - s, i - u);
            })(e),
            r = zf.get(e);
        return { element: e, bottom: n.top + r, height: r, pos: n, cleanup: t };
    }
    function $f(n, r, o, i) {
        Od(
            n,
            function (e, t) {
                return Td(n, r, o, i);
            },
            o
        );
    }
    function Wf(e, t, n, r, o) {
        var i = { elm: r.element.dom, alignToTop: o };
        e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, Jt(t).top, r, o), e.fire("AfterScrollIntoView", i));
    }
    function Kf(e, t, n, r) {
        var o = Et.fromDom(e.getDoc());
        Wf(e, o, n, qf(Et.fromDom(t), te), r);
    }
    function Xf(e, t, n, r) {
        var o,
            i = e.pos;
        n ? Qt(i.left, i.top, r) : ((o = i.top - t + e.height), Qt(i.left, o, r));
    }
    function Yf(e, t, n, r, o) {
        var i = n + t,
            a = r.pos.top,
            u = r.bottom,
            s = n <= u - a;
        a < t ? Xf(r, n, !1 !== o, e) : i < a ? Xf(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && Xf(r, n, !0 === o, e);
    }
    function Gf(e, t, n, r) {
        Yf(e, t, e.dom.defaultView.innerHeight, n, r);
    }
    function Jf(e, t, n, r) {
        Yf(e, t, e.dom.defaultView.innerHeight, n, r);
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f =
                ((o = n.element),
                (u = Jt(Et.fromDom(document))),
                (a = (i = Dd).owner(o)),
                (s = Rd(i, a)),
                (c = zn(o)),
                (l = P(
                    s,
                    function (e, t) {
                        var n = zn(t);
                        return { left: e.left + n.left, top: e.top + n.top };
                    },
                    { left: 0, top: 0 }
                )),
                Un(l.left + c.left + u.left, l.top + c.top + u.top)),
            d = tn(window);
        f.top < d.y ? Zt(n.element, !1 !== r) : f.top > d.bottom && Zt(n.element, !0 === r);
    }
    function Qf(e, t, n) {
        return $f(e, Gf, t, n);
    }
    function Zf(e, t, n) {
        return Kf(e, t, Gf, n);
    }
    function ed(e, t, n) {
        return $f(e, Jf, t, n);
    }
    function td(e, t, n) {
        return Kf(e, t, Jf, n);
    }
    function nd(e, t, n) {
        (e.inline ? Qf : ed)(e, t, n);
    }
    function rd(e) {
        var t = Pn(e).dom;
        return e.dom === t.activeElement;
    }
    function od(e) {
        return void 0 === e && (e = Et.fromDom(document)), ve.from(e.dom.activeElement).map(Et.fromDom);
    }
    function id(e, t) {
        var n = An(t) ? Ml(t).length : Tn(t).length + 1;
        return n < e ? n : e < 0 ? 0 : e;
    }
    function ad(e) {
        return Id.range(e.start, id(e.soffset, e.start), e.finish, id(e.foffset, e.finish));
    }
    function ud(e, t) {
        return !rn(t.dom) && (Ve(e, t) || je(e, t));
    }
    function sd(t) {
        return function (e) {
            return ud(t, e.start) && ud(t, e.finish);
        };
    }
    function cd(e) {
        return !0 === e.inline || Md.isIE();
    }
    function ld(e) {
        return Id.range(Et.fromDom(e.startContainer), e.startOffset, Et.fromDom(e.endContainer), e.endOffset);
    }
    function fd(e) {
        var t = document.createRange();
        try {
            return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), ve.some(t);
        } catch (e) {
            return ve.none();
        }
    }
    function dd(e) {
        var t,
            n,
            r = cd(e) ? ((t = Et.fromDom(e.getBody())), ((n = Tt(t).dom.getSelection()) && 0 !== n.rangeCount ? ve.from(n.getRangeAt(0)) : ve.none()).map(ld).filter(sd(t))) : ve.none();
        e.bookmark = r.isSome() ? r : e.bookmark;
    }
    function md(n) {
        return (n.bookmark || ve.none())
            .bind(function (e) {
                return (t = Et.fromDom(n.getBody())), ve.from(e).filter(sd(t)).map(ad);
                var t;
            })
            .bind(fd);
    }
    function gd(u) {
        var s = mu(function () {
            dd(u);
        }, 0);
        u.on("init", function () {
            function e() {
                n.throttle();
            }
            var t, n, r, o, i, a;
            u.inline &&
                ((t = u),
                (n = s),
                eu.DOM.bind(document, "mouseup", e),
                t.on("remove", function () {
                    eu.DOM.unbind(document, "mouseup", e);
                })),
                (r = u),
                (o = s),
                dt().browser.isIE()
                    ? (a = r).on("focusout", function () {
                          dd(a);
                      })
                    : ((i = o),
                      r.on("mouseup touchend", function (e) {
                          i.throttle();
                      })),
                r.on("keyup NodeChange", function (e) {
                    ("nodechange" === e.type && e.selectionChange) || dd(r);
                });
        }),
            u.on("remove", function () {
                s.cancel();
            });
    }
    function pd(t, e) {
        var n = t.getParam("custom_ui_selector", "", "string");
        return (
            null !==
            Ud.getParent(e, function (e) {
                return Fd.isEditorUIElement(e) || (!!n && t.dom.is(e, n));
            })
        );
    }
    function hd(n, e) {
        var t = e.editor;
        gd(t),
            t.on("focusin", function () {
                var e = n.focusedEditor;
                e !== t && (e && e.fire("blur", { focusedEditor: t }), n.setActive(t), (n.focusedEditor = t).fire("focus", { blurredEditor: e }), t.focus(!0));
            }),
            t.on("focusout", function () {
                Ar.setEditorTimeout(t, function () {
                    var e = n.focusedEditor;
                    pd(
                        t,
                        (function (e) {
                            try {
                                return od(Pn(Et.fromDom(e.getElement()))).fold(
                                    function () {
                                        return document.body;
                                    },
                                    function (e) {
                                        return e.dom;
                                    }
                                );
                            } catch (e) {
                                return document.body;
                            }
                        })(t)
                    ) ||
                        e !== t ||
                        (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null));
                });
            }),
            Ad ||
                ((Ad = function (e) {
                    var t = n.activeEditor;
                    t &&
                        !(function (e) {
                            if (Bn() && V(e.target)) {
                                var t = Et.fromDom(e.target);
                                if (_n(t) && V(t.dom.shadowRoot) && e.composed && e.composedPath) {
                                    var n = e.composedPath();
                                    if (n) return Q(n);
                                }
                            }
                            return ve.from(e.target);
                        })(e).each(function (e) {
                            e.ownerDocument === document && (e === document.body || pd(t, e) || n.focusedEditor !== t || (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null)));
                        });
                }),
                Ud.bind(document, "focusin", Ad));
    }
    function vd(e, t) {
        e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Ud.unbind(document, "focusin", Ad), (Ad = null));
    }
    function bd(t, e) {
        var n, r;
        (n = Et.fromDom(t.getBody())),
            ((r = e).collapsed ? ve.from(Iu(r.startContainer, r.startOffset)).map(Et.fromDom) : ve.none())
                .bind(function (e) {
                    return bo(e) ? ve.some(e) : !1 === Ve(n, e) ? ve.some(n) : ve.none();
                })
                .bind(function (e) {
                    return rf(e.dom);
                })
                .fold(
                    function () {
                        t.selection.normalize();
                    },
                    function (e) {
                        return t.selection.setRng(e.toRange());
                    }
                );
    }
    function yd(t) {
        if (t.setActive)
            try {
                t.setActive();
            } catch (e) {
                t.focus();
            }
        else t.focus();
    }
    function Cd(e) {
        return e.inline
            ? (r = e.getBody()) &&
                  (rd((t = Et.fromDom(r))) ||
                      od(Pn((n = t)))
                          .filter(function (e) {
                              return n.dom.contains(e.dom);
                          })
                          .isSome())
            : e.iframeElement && rd(Et.fromDom(e.iframeElement));
        var t, n, r;
    }
    function xd(e, t, n, r, o) {
        var i = n ? t.startContainer : t.endContainer,
            a = n ? t.startOffset : t.endOffset;
        return ve
            .from(i)
            .map(Et.fromDom)
            .map(function (e) {
                return r && t.collapsed ? e : Mt(e, o(e, a)).getOr(e);
            })
            .bind(function (e) {
                return _n(e) ? ve.some(e) : Ot(e).filter(_n);
            })
            .map(function (e) {
                return e.dom;
            })
            .getOr(e);
    }
    function wd(e, t, n) {
        return xd(e, t, !0, n, function (e, t) {
            return Math.min(zt(e), t);
        });
    }
    function Sd(e, t, n) {
        return xd(e, t, !1, n, function (e, t) {
            return 0 < t ? t - 1 : t;
        });
    }
    function Nd(e, t) {
        for (var n = e; e && Vn(e) && 0 === e.length; ) e = t ? e.nextSibling : e.previousSibling;
        return e || n;
    }
    function Ed(n, e) {
        return A(e, function (e) {
            var t = n.fire("GetSelectionRange", { range: e });
            return t.range !== e ? t.range : e;
        });
    }
    function kd(e, t, n) {
        var r = n ? "lastChild" : "firstChild",
            o = n ? "prev" : "next";
        if (e[r]) return e[r];
        if (e !== t) {
            var i = e[o];
            if (i) return i;
            for (var a = e.parent; a && a !== t; a = a.parent) if ((i = a[o])) return i;
        }
    }
    function _d(e) {
        var t = "a" === e.name && !e.attr("href") && e.attr("id");
        return e.attr("name") || (e.attr("id") && !e.firstChild) || e.attr("data-mce-bookmark") || t;
    }
    var Ad,
        Rd = function (r, e) {
            return r.view(e).fold(J([]), function (e) {
                var t = r.owner(e),
                    n = Rd(r, t);
                return [e].concat(n);
            });
        },
        Dd = Object.freeze({
            __proto__: null,
            view: function (e) {
                var t;
                return (e.dom === document ? ve.none() : ve.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Et.fromDom);
            },
            owner: Dt,
        }),
        Td = function (e, t, n, r) {
            var o = Et.fromDom(e.getBody()),
                i = Et.fromDom(e.getDoc());
            o.dom.offsetWidth;
            var a,
                u,
                s,
                c,
                l =
                    ((a = Et.fromDom(n.startContainer)),
                    (u = n.startOffset),
                    (s = (function (e, t) {
                        var n = Tn(e);
                        if (0 === n.length || Vf(e)) return { element: e, offset: t };
                        if (t < n.length && !Vf(n[t])) return { element: n[t], offset: 0 };
                        var r = n[n.length - 1];
                        return Vf(r) ? { element: e, offset: t } : "img" === kt(r) ? { element: r, offset: 1 } : An(r) ? { element: r, offset: Ml(r).length } : { element: r, offset: Tn(r).length };
                    })(a, u)),
                    (c = Et.fromHtml('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>')),
                    qt(s.element, c),
                    qf(c, function () {
                        return In(c);
                    }));
            Wf(e, i, t, l, r), l.cleanup();
        },
        Od = function (e, t, n) {
            var r = n.startContainer,
                o = n.startOffset,
                i = n.endContainer,
                a = n.endOffset;
            t(Et.fromDom(r), Et.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
        },
        Bd = ir([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        Pd =
            (Bd.before,
            Bd.on,
            Bd.after,
            function (e) {
                return e.fold(u, u, u);
            }),
        Ld = ir([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        Id = {
            domRange: Ld.domRange,
            relative: Ld.relative,
            exact: Ld.exact,
            exactFromRange: function (e) {
                return Ld.exact(e.start, e.soffset, e.finish, e.foffset);
            },
            getWin: function (e) {
                return Tt(
                    e.match({
                        domRange: function (e) {
                            return Et.fromDom(e.startContainer);
                        },
                        relative: function (e, t) {
                            return Pd(e);
                        },
                        exact: function (e, t, n, r) {
                            return e;
                        },
                    })
                );
            },
            range: function (e, t, n, r) {
                return { start: e, soffset: t, finish: n, foffset: r };
            },
        },
        Md = dt().browser,
        Fd = {
            isEditorUIElement: function (e) {
                var t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
            },
        },
        Ud = eu.DOM,
        zd = function (e) {
            return e.editorManager.setActive(e);
        },
        Hd = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        jd =
            ((Vd.create = function (e, t) {
                var n = new Vd(e, Hd[e] || 1);
                return (
                    t &&
                        ne(t, function (e, t) {
                            n.attr(t, e);
                        }),
                    n
                );
            }),
            (Vd.prototype.replace = function (e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this;
            }),
            (Vd.prototype.attr = function (e, t) {
                var n,
                    r = this;
                if ("string" != typeof e)
                    return (
                        null != e &&
                            ne(e, function (e, t) {
                                r.attr(t, e);
                            }),
                        r
                    );
                if ((n = r.attributes)) {
                    if (void 0 === t) return n.map[e];
                    if (null === t) {
                        if (e in n.map) {
                            delete n.map[e];
                            for (var o = n.length; o--; ) if (n[o].name === e) return n.splice(o, 1), r;
                        }
                        return r;
                    }
                    if (e in n.map) {
                        for (o = n.length; o--; )
                            if (n[o].name === e) {
                                n[o].value = t;
                                break;
                            }
                    } else n.push({ name: e, value: t });
                    return (n.map[e] = t), r;
                }
            }),
            (Vd.prototype.clone = function () {
                var e,
                    t = new Vd(this.name, this.type);
                if ((e = this.attributes)) {
                    var n = [];
                    n.map = {};
                    for (var r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        "id" !== i.name && ((n[n.length] = { name: i.name, value: i.value }), (n.map[i.name] = i.value));
                    }
                    t.attributes = n;
                }
                return (t.value = this.value), (t.shortEnded = this.shortEnded), t;
            }),
            (Vd.prototype.wrap = function (e) {
                return this.parent.insert(e, this), e.append(this), this;
            }),
            (Vd.prototype.unwrap = function () {
                for (var e = this.firstChild; e; ) {
                    var t = e.next;
                    this.insert(e, this, !0), (e = t);
                }
                this.remove();
            }),
            (Vd.prototype.remove = function () {
                var e = this.parent,
                    t = this.next,
                    n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : (n.next = t), e.lastChild === this ? (e.lastChild = n) && (n.next = null) : (t.prev = n), (this.parent = this.next = this.prev = null)), this;
            }),
            (Vd.prototype.append = function (e) {
                e.parent && e.remove();
                var t = this.lastChild;
                return t ? (((t.next = e).prev = t), (this.lastChild = e)) : (this.lastChild = this.firstChild = e), (e.parent = this), e;
            }),
            (Vd.prototype.insert = function (e, t, n) {
                e.parent && e.remove();
                var r = t.parent || this;
                return (
                    n ? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e), (e.prev = t.prev), ((e.next = t).prev = e)) : (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e), (e.next = t.next), ((e.prev = t).next = e)),
                    (e.parent = r),
                    e
                );
            }),
            (Vd.prototype.getAll = function (e) {
                for (var t = [], n = this.firstChild; n; n = kd(n, this)) n.name === e && t.push(n);
                return t;
            }),
            (Vd.prototype.children = function () {
                for (var e = [], t = this.firstChild; t; t = t.next) e.push(t);
                return e;
            }),
            (Vd.prototype.empty = function () {
                if (this.firstChild) {
                    for (var e = [], t = this.firstChild; t; t = kd(t, this)) e.push(t);
                    for (var n = e.length; n--; ) (t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null;
                }
                return (this.firstChild = this.lastChild = null), this;
            }),
            (Vd.prototype.isEmpty = function (e, t, n) {
                void 0 === t && (t = {});
                var r = this.firstChild;
                if (_d(this)) return !1;
                if (r)
                    do {
                        if (1 === r.type) {
                            if (r.attr("data-mce-bogus")) continue;
                            if (e[r.name]) return !1;
                            if (_d(r)) return !1;
                        }
                        if (8 === r.type) return !1;
                        if (
                            3 === r.type &&
                            !(function (e) {
                                if ($r(e.value)) {
                                    var t = e.parent;
                                    return !t || ("span" === t.name && !t.attr("style")) || !/^[ ]+$/.test(e.value);
                                }
                            })(r)
                        )
                            return !1;
                        if (3 === r.type && r.parent && t[r.parent.name] && $r(r.value)) return !1;
                        if (n && n(r)) return !1;
                    } while ((r = kd(r, this)));
                return !0;
            }),
            (Vd.prototype.walk = function (e) {
                return kd(this, null, e);
            }),
            Vd);
    function Vd(e, t) {
        (this.name = e), 1 === (this.type = t) && ((this.attributes = []), (this.attributes.map = {}));
    }
    function qd(e) {
        return X(e.nodeValue) && Te(e.nodeValue, So);
    }
    function $d(e) {
        return (
            (0 === e.length
                ? ""
                : A(e, function (e) {
                      return "[" + e + "]";
                  }).join(",") + ",") + '[data-mce-bogus="all"]'
        );
    }
    function Wd(e, t, n) {
        return document.createTreeWalker(e, t, n, !1);
    }
    function Kd(e) {
        return Wd(e, NodeFilter.SHOW_COMMENT, function (e) {
            return qd(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        });
    }
    function Xd(e) {
        return Wd(e, NodeFilter.SHOW_TEXT, function (e) {
            if (qd(e)) {
                var t = e.parentNode;
                return t && Ee(om, t.nodeName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_SKIP;
        });
    }
    function Yd(e) {
        return null !== Kd(e).nextNode();
    }
    function Gd(e) {
        return null !== Xd(e).nextNode();
    }
    function Jd(e, t) {
        return null !== t.querySelector($d(e));
    }
    function Qd(n, e) {
        Y(e.querySelectorAll($d(n)), function (e) {
            var t = Et.fromDom(e);
            "all" === vn(t, "data-mce-bogus")
                ? In(t)
                : Y(n, function (e) {
                      yn(t, e) && Cn(t, e);
                  });
        });
    }
    function Zd(e) {
        for (var t = e.nextNode(); null !== t; ) (t.nodeValue = null), (t = e.nextNode());
    }
    function em(r, e) {
        var t = [
                { condition: R(Jd, e), action: R(Qd, e) },
                { condition: Yd, action: im },
                { condition: Gd, action: am },
            ],
            o = r,
            i = !1;
        return (
            Y(t, function (e) {
                var t = e.condition,
                    n = e.action;
                t(o) && (i || ((o = r.cloneNode(!0)), (i = !0)), n(o));
            }),
            o
        );
    }
    function tm(o) {
        return {
            compare: function (e, t) {
                return e.nodeName === t.nodeName && !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || Qc(e) || Qc(t));
                function n(n) {
                    var r = {};
                    return (
                        um(o.getAttribs(n), function (e) {
                            var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t));
                        }),
                        r
                    );
                }
                function r(e, t) {
                    var n, r;
                    for (r in e)
                        if (Ee(e, r)) {
                            if (void 0 === (n = t[r])) return;
                            if (e[r] !== n) return;
                            delete t[r];
                        }
                    for (r in t) if (Ee(t, r)) return;
                    return 1;
                }
            },
        };
    }
    function nm(e) {
        var u = [],
            s = (e = e || {}).indent,
            c = sm(e.indent_before || ""),
            l = sm(e.indent_after || ""),
            f = Zo.getEncodeFunc(e.entity_encoding || "raw", e.entities),
            d = "html" === e.element_format;
        return {
            start: function (e, t, n) {
                var r, o, i, a;
                if ((s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t)) for (r = 0, o = t.length; r < o; r++) (i = t[r]), u.push(" ", i.name, '="', f(i.value, !0), '"');
                (u[u.length] = !n || d ? ">" : " />"), n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n");
            },
            end: function (e) {
                var t;
                u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n");
            },
            text: function (e, t) {
                0 < e.length && (u[u.length] = t ? e : f(e));
            },
            cdata: function (e) {
                u.push("<![CDATA[", e, "]]>");
            },
            comment: function (e) {
                u.push("\x3c!--", e, "--\x3e");
            },
            pi: function (e, t) {
                t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n");
            },
            doctype: function (e) {
                u.push("<!DOCTYPE", e, ">", s ? "\n" : "");
            },
            reset: function () {
                u.length = 0;
            },
            getContent: function () {
                return u.join("").replace(/\n$/, "");
            },
        };
    }
    function rm(t, g) {
        void 0 === g && (g = oo());
        var p = nm(t);
        return (
            ((t = t || {}).validate = !("validate" in t) || t.validate),
            {
                serialize: function (e) {
                    var f = t.validate,
                        d = {
                            3: function (e) {
                                p.text(e.value, e.raw);
                            },
                            8: function (e) {
                                p.comment(e.value);
                            },
                            7: function (e) {
                                p.pi(e.name, e.value);
                            },
                            10: function (e) {
                                p.doctype(e.value);
                            },
                            4: function (e) {
                                p.cdata(e.value);
                            },
                            11: function (e) {
                                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                            },
                        };
                    p.reset();
                    var m = function (e) {
                        var t = d[e.type];
                        if (t) t(e);
                        else {
                            var n = e.name,
                                r = e.shortEnded,
                                o = e.attributes;
                            if (f && o && 1 < o.length) {
                                var i = [];
                                i.map = {};
                                var a = g.getElementRule(e.name);
                                if (a) {
                                    for (var u = 0, s = a.attributesOrder.length; u < s; u++) (c = a.attributesOrder[u]) in o.map && ((l = o.map[c]), (i.map[c] = l), i.push({ name: c, value: l }));
                                    for (var c, l, u = 0, s = o.length; u < s; u++) (c = o[u].name) in i.map || ((l = o.map[c]), (i.map[c] = l), i.push({ name: c, value: l }));
                                    o = i;
                                }
                            }
                            if ((p.start(e.name, o, r), !r)) {
                                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                                p.end(n);
                            }
                        }
                    };
                    return 1 !== e.type || t.inner ? d[11](e) : m(e), p.getContent();
                },
            }
        );
    }
    var om = Nt.makeMap("NOSCRIPT STYLE SCRIPT XMP IFRAME NOEMBED NOFRAMES PLAINTEXT", " "),
        im = i(Zd, Kd),
        am = i(Zd, Xd),
        um = Nt.each,
        sm = Nt.makeMap,
        cm = new Set();
    function lm(e, t) {
        return we(e.parseStyle(e.getAttrib(t, "style")));
    }
    function fm(n, r, o) {
        return ve
            .from(o.container())
            .filter(Vn)
            .exists(function (e) {
                var t = n ? 0 : -1;
                return r(e.data.charAt(o.offset() + t));
            });
    }
    function dm(e) {
        var t = e.container();
        return Vn(t) && (0 === t.data.length || (No(t.data) && Hl.isBookmarkNode(t.parentNode)));
    }
    function mm(t, n) {
        return function (e) {
            return ve
                .from(Zs(t ? 0 : -1, e))
                .filter(n)
                .isSome();
        };
    }
    function gm(e) {
        return Xn(e) && "block" === wn(Et.fromDom(e), "display");
    }
    function pm(e) {
        return Gn(e) && !(Hn((t = e)) && "all" === t.getAttribute("data-mce-bogus"));
        var t;
    }
    function hm(e) {
        Xt(e), Ln(e, Et.fromHtml('<br data-mce-bogus="1">'));
    }
    function vm(n) {
        Ut(n).each(function (t) {
            Bt(t).each(function (e) {
                go(n) && Pr(t) && go(e) && In(t);
            });
        });
    }
    function bm(e, t) {
        return (
            (o = D),
            Ve((r = t), (n = e))
                ? (function (e, t) {
                      for (var n = y(t) ? t : D, r = e.dom, o = []; null !== r.parentNode && void 0 !== r.parentNode; ) {
                          var i = r.parentNode,
                              a = Et.fromDom(i);
                          if ((o.push(a), !0 === n(a))) break;
                          r = i;
                      }
                      return o;
                  })(n, function (e) {
                      return o(e) || je(e, r);
                  }).slice(0, -1)
                : []
        );
        var n, r, o;
    }
    function ym(e, t) {
        return [e].concat(bm(e, t));
    }
    function Cm(e, t, n) {
        return ef(e, t, n, dm);
    }
    function xm(e, t) {
        return M(ym(Et.fromDom(t.container()), e), go);
    }
    function wm(e, n, r) {
        return Cm(e, n.dom, r).forall(function (t) {
            return xm(n, r).fold(
                function () {
                    return !1 === Qs(t, r, n.dom);
                },
                function (e) {
                    return !1 === Qs(t, r, n.dom) && Ve(e, Et.fromDom(t.container()));
                }
            );
        });
    }
    function Sm(t, n, r) {
        return xm(n, r).fold(
            function () {
                return Cm(t, n.dom, r).forall(function (e) {
                    return !1 === Qs(e, r, n.dom);
                });
            },
            function (e) {
                return Cm(t, e.dom, r).isNone();
            }
        );
    }
    function Nm(e) {
        return ic(e).exists(Pr);
    }
    function Em(e, t, n) {
        var r = Q(U(ym(Et.fromDom(n.container()), t), go)).getOr(t);
        return Zl(e, r.dom, n).filter(Nm);
    }
    function km(e, t) {
        return ic(t).exists(Pr) || Em(!0, e, t).isSome();
    }
    function _m(e, t) {
        return ve.from(t.getNode(!0)).map(Et.fromDom).exists(Pr) || Em(!1, e, t).isSome();
    }
    function Am(e) {
        return cs.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
    }
    function Rm(e, t) {
        return Q(U(ym(Et.fromDom(t.container()), e), go)).getOr(e);
    }
    function Dm(e, t) {
        return Am(t) ? Gg(t) : Gg(t) || nf(Rm(e, t).dom, t).exists(Gg);
    }
    function Tm(e, t) {
        return Am(t) ? Yg(t) : Yg(t) || tf(Rm(e, t).dom, t).exists(Yg);
    }
    function Om(e) {
        return ic(e)
            .bind(function (e) {
                return hr(e, _n);
            })
            .exists(function (e) {
                return T(["pre", "pre-wrap"], wn(e, "white-space"));
            });
    }
    function Bm(e, t) {
        return !Om(t) && (ip(e, t) || up(e, t) || _m(e, t) || Dm(e, t));
    }
    function Pm(e, t) {
        return !Om(t) && (ap(e, t) || sp(e, t) || km(e, t) || Tm(e, t));
    }
    function Lm(e, t) {
        return Bm(e, t) || Pm(e, ((r = (n = t).container()), (o = n.offset()), Vn(r) && o < r.data.length ? cs(r, o + 1) : n));
        var n, r, o;
    }
    function Im(e, t) {
        return sf(e.charAt(t));
    }
    function Mm(e) {
        var t = e.container();
        return Vn(t) && Te(t.data, wo);
    }
    function Fm(g, e) {
        return ve
            .some(e)
            .filter(Mm)
            .bind(function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l = e.container(),
                    f = g,
                    d = (i = l).data,
                    m = cs(i, 0);
                return (!Im(d, 0) || Lm(f, m)
                    ? ((s = (a = l).data),
                      (c = A((u = s.split("")), function (e, t) {
                          return sf(e) && 0 < t && t < u.length - 1 && el(u[t - 1]) && el(u[t + 1]) ? " " : e;
                      }).join("")) !== s && ((a.data = c), 1))
                    : ((i.data = " " + d.slice(1)), 1)) || ((t = g), (r = (n = l).data), (o = cs(n, r.length - 1)), Im(r, r.length - 1) && !Lm(t, o) && ((n.data = r.slice(0, -1) + " "), 1))
                    ? ve.some(e)
                    : ve.none();
            });
    }
    function Um(t) {
        var e = Et.fromDom(t.getBody());
        t.selection.isCollapsed() &&
            Fm(e, cs.fromRangeStart(t.selection.getRng())).each(function (e) {
                t.selection.setRng(e.toRange());
            });
    }
    function zm(e, t, n) {
        var r, o, i, a, u, s, c, l;
        0 !== n &&
            ((o = pr((r = Et.fromDom(e)), go).getOr(r)),
            (i = e.data.slice(t, t + n)),
            (a = t + n >= e.data.length && Pm(o, cs(e, e.data.length))),
            (u = 0 === t && Bm(o, cs(e, 0))),
            e.replaceData(
                t,
                n,
                ((c = u),
                (l = a),
                L(
                    (s = i),
                    function (e, t) {
                        return Zc(t) || sf(t)
                            ? e.previousCharIsSpace || ("" === e.str && c) || (e.str.length === s.length - 1 && l)
                                ? { previousCharIsSpace: !1, str: e.str + wo }
                                : { previousCharIsSpace: !0, str: e.str + " " }
                            : { previousCharIsSpace: !1, str: e.str + t };
                    },
                    { previousCharIsSpace: !1, str: "" }
                ).str)
            ));
    }
    function Hm(e, t) {
        var n = e.data.slice(t);
        zm(e, t, n.length - Qe(n).length);
    }
    function jm(e, t) {
        var n = e.data.slice(0, t),
            r = n.length - Ze(n).length;
        zm(e, t - r, r);
    }
    function Vm(e, t, n, r) {
        void 0 === r && (r = !0);
        var o = Ze(e.data).length,
            i = r ? e : t,
            a = r ? t : e;
        return r ? i.appendData(a.data) : i.insertData(0, a.data), In(Et.fromDom(a)), n && Hm(i, o), i;
    }
    function qm(e, t) {
        return (r = e), (o = (n = t).container()), (i = n.offset()), !1 === cs.isTextPosition(n) && o === r.parentNode && i > cs.before(r).offset() ? cs(t.container(), t.offset() - 1) : t;
        var n, r, o, i;
    }
    function $m(e) {
        return Vr(e.previousSibling) ? ve.some(((t = e.previousSibling), Vn(t) ? cs(t, t.data.length) : cs.after(t))) : e.previousSibling ? of(e.previousSibling) : ve.none();
        var t;
    }
    function Wm(e) {
        return Vr(e.nextSibling) ? ve.some(((t = e.nextSibling), Vn(t) ? cs(t, 0) : cs.before(t))) : e.nextSibling ? rf(e.nextSibling) : ve.none();
        var t;
    }
    function Km(r, o) {
        return $m(o)
            .orThunk(function () {
                return Wm(o);
            })
            .orThunk(function () {
                return (
                    (e = r),
                    (n = cs.before((t = o).previousSibling || t.parentNode)),
                    nf(e, n).fold(function () {
                        return tf(e, cs.after(t));
                    }, ve.some)
                );
                var e, t, n;
            });
    }
    function Xm(n, r) {
        return Wm(r)
            .orThunk(function () {
                return $m(r);
            })
            .orThunk(function () {
                return tf((e = n), cs.after((t = r))).fold(function () {
                    return nf(e, cs.before(t));
                }, ve.some);
                var e, t;
            });
    }
    function Ym(t, n, e) {
        e.fold(
            function () {
                t.focus();
            },
            function (e) {
                t.selection.setRng(e.toRange(), n);
            }
        );
    }
    function Gm(e, t) {
        return t && Ee(e.schema.getBlockElements(), kt(t));
    }
    function Jm(e) {
        if (Kr(e)) {
            var t = Et.fromHtml('<br data-mce-bogus="1">');
            return Xt(e), Ln(e, t), ve.some(cs.before(t.dom));
        }
        return ve.none();
    }
    function Qm(t, n, e, r) {
        void 0 === r && (r = !0);
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b = ((p = n), (h = t.getBody()), (v = e.dom), (p ? Xm : Km)(h, v).map(R(qm, v))),
            y = pr(
                e,
                R(Gm, t),
                ((o = t.getBody()),
                function (e) {
                    return e.dom === o;
                })
            ),
            C =
                ((u = b),
                (i = a = e),
                (s = Ee(t.schema.getTextInlineElements(), kt(i))),
                (m = Bt(a).filter(An)),
                (g = Pt(a).filter(An)),
                In(a),
                (l = g),
                (f = u),
                (d = function (e, t, n) {
                    var r = e.dom,
                        o = t.dom,
                        i = r.data.length;
                    return Vm(r, o, s), n.container() === o ? cs(r, i) : n;
                }),
                ((c = m).isSome() && l.isSome() && f.isSome() ? ve.some(d(c.getOrDie(), l.getOrDie(), f.getOrDie())) : ve.none()).orThunk(function () {
                    return (
                        s &&
                            (m.each(function (e) {
                                return jm(e.dom, e.dom.length);
                            }),
                            g.each(function (e) {
                                return Hm(e.dom, 0);
                            })),
                        u
                    );
                }));
        t.dom.isEmpty(t.getBody())
            ? (t.setContent(""), t.selection.setCursorLocation())
            : y.bind(Jm).fold(
                  function () {
                      r && Ym(t, n, C);
                  },
                  function (e) {
                      r && Ym(t, n, ve.some(e));
                  }
              );
    }
    function Zm(e) {
        return yu(e, "td,th");
    }
    function eg(e, t) {
        return { start: e, end: t };
    }
    function tg(e, t) {
        return yr(Et.fromDom(e), "td,th", t);
    }
    function ng(e) {
        return !je(e.start, e.end);
    }
    function rg(e, n) {
        return Tl(e.start, n).bind(function (t) {
            return Tl(e.end, n).bind(function (e) {
                return je(t, e) ? ve.some(t) : ve.none();
            });
        });
    }
    function og(e) {
        return function (t) {
            return rg(t, e).map(function (e) {
                return { rng: t, table: e, cells: Zm(e) };
            });
        };
    }
    function ig(e, t, n, r) {
        if (n.collapsed || !e.forall(ng)) return ve.none();
        if (t.isSameTable) {
            var o = e.bind(og(r));
            return ve.some({ start: o, end: o });
        }
        var i,
            a,
            u = tg(n.startContainer, r),
            s = tg(n.endContainer, r),
            c = u
                .bind(
                    ((a = r),
                    function (t) {
                        return Tl(t, a).bind(function (e) {
                            return Z(Zm(e)).map(function (e) {
                                return eg(t, e);
                            });
                        });
                    })
                )
                .bind(og(r)),
            l = s
                .bind(
                    ((i = r),
                    function (t) {
                        return Tl(t, i).bind(function (e) {
                            return Q(Zm(e)).map(function (e) {
                                return eg(e, t);
                            });
                        });
                    })
                )
                .bind(og(r));
        return ve.some({ start: c, end: l });
    }
    function ag(e, t) {
        return z(e, function (e) {
            return je(e, t);
        });
    }
    function ug(n) {
        return dn(ag(n.cells, n.rng.start), ag(n.cells, n.rng.end), function (e, t) {
            return n.cells.slice(e, t + 1);
        });
    }
    function sg(e, t) {
        var n = t.startTable,
            r = t.endTable,
            o = e.cloneRange();
        return (
            n.each(function (e) {
                return o.setStartAfter(e.dom);
            }),
            r.each(function (e) {
                return o.setEndBefore(e.dom);
            }),
            o
        );
    }
    function cg(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b =
                ((n = e),
                function (e) {
                    return je(n, e);
                }),
            y = dn(tg((r = t).startContainer, (o = b)), tg(r.endContainer, o), eg),
            C =
                ((l = b),
                (f = x((c = t).startContainer)),
                (d = x(c.endContainer)),
                (m = f.isSome()),
                (g = d.isSome()),
                (p = dn(f, d, je).getOr(!1)),
                { startTable: f, endTable: d, isStartInTable: m, isEndInTable: g, isSameTable: p, isMultiTable: !p && m && g });
        function x(e) {
            return Tl(Et.fromDom(e), l);
        }
        return (
            (h = t),
            (v = b),
            y.exists(function (e) {
                return (
                    !ng((t = e)) &&
                    rg(t, v).exists(function (e) {
                        var t = e.dom.rows;
                        return 1 === t.length && 1 === t[0].cells.length;
                    }) &&
                    Ol(e.start, h)
                );
                var t;
            })
                ? y.map(function (e) {
                      return fp.singleCellTable(t, e.start);
                  })
                : C.isMultiTable
                ? ig(y, (u = C), (s = t), b).bind(function (e) {
                      var t = e.start,
                          n = e.end,
                          r = t.bind(ug).getOr([]),
                          o = n.bind(ug).getOr([]);
                      if (0 < r.length && 0 < o.length) {
                          var i = sg(s, u);
                          return ve.some(fp.multiTable(r, o, i));
                      }
                      return ve.none();
                  })
                : ig(y, (i = C), (a = t), b)
                      .bind(function (e) {
                          var t = e.start,
                              n = e.end;
                          return t.or(n);
                      })
                      .bind(function (e) {
                          var t = i.isSameTable,
                              n = ug(e).getOr([]);
                          if (t && e.cells.length === n.length) return ve.some(fp.fullTable(e.table));
                          if (0 < n.length) {
                              if (t) return ve.some(fp.partialTable(n, ve.none()));
                              var r = sg(a, i);
                              return ve.some(fp.partialTable(n, ve.some(_e(_e({}, i), { rng: r }))));
                          }
                          return ve.none();
                      })
        );
    }
    function lg(e) {
        return (
            Y(e, function (e) {
                Cn(e, "contenteditable"), hm(e);
            }),
            0
        );
    }
    function fg(e, t, n, r) {
        var o = n.cloneRange();
        r ? (o.setStart(n.startContainer, n.startOffset), o.setEndAfter(t.dom.lastChild)) : (o.setStartBefore(t.dom.firstChild), o.setEnd(n.endContainer, n.endOffset)), mp(e, o, t, !1);
    }
    function dg(e) {
        var t = Dl(e),
            n = Et.fromDom(e.selection.getNode());
        Jn(n.dom) && Kr(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0),
            1 < t.length &&
                F(t, function (e) {
                    return je(e, n);
                }) &&
                pn(n, "data-mce-selected", "1");
    }
    function mg(s, c, e) {
        var l = s.selection.getRng();
        return (
            lg(
                e
                    .bind(function (e) {
                        var t,
                            n,
                            r,
                            o = e.rng,
                            i = e.isStartInTable,
                            a = ((t = i ? o.endContainer : o.startContainer), ve.from(s.dom.getParent(t, s.dom.isBlock)).map(Et.fromDom));
                        o.deleteContents(),
                            (n = s),
                            (r = i),
                            a.filter(Kr).each(function (e) {
                                r ? In(e) : (hm(e), n.selection.setCursorLocation(e.dom, 0));
                            });
                        var u = i ? c[0] : c[c.length - 1];
                        return fg(s, u, l, i), Kr(u) ? ve.none() : ve.some(i ? c.slice(1) : c.slice(0, -1));
                    })
                    .getOr(c)
            ),
            dg(s),
            !0
        );
    }
    function gg(e, t, n, r) {
        var o = e.selection.getRng(),
            i = t[0],
            a = n[n.length - 1];
        fg(e, i, o, !0), fg(e, a, o, !1);
        var u = Kr(i) ? t : t.slice(1),
            s = Kr(a) ? n : n.slice(0, -1);
        return lg(u.concat(s)), r.deleteContents(), dg(e), !0;
    }
    function pg(e, t) {
        return Qm(e, !1, t), !0;
    }
    function hg(e, t) {
        return M(ym(t, e), yo);
    }
    function vg(e, t) {
        return (e ? tp : np)(t);
    }
    function bg(f, d, s) {
        var m = Et.fromDom(f.getBody());
        return gp(m, s).fold(
            function () {
                return (
                    (o = f),
                    (i = d),
                    (a = m),
                    (e = s),
                    (u = cs.fromRangeStart(o.selection.getRng())),
                    hg(a, e)
                        .bind(function (e) {
                            return Kr(e)
                                ? pp(o, e)
                                : ((t = a),
                                  (n = e),
                                  (r = u),
                                  Hc(i, o.getBody(), r).bind(function (e) {
                                      return hg(t, Et.fromDom(e.getNode())).map(function (e) {
                                          return !1 === je(e, n);
                                      });
                                  }));
                            var t, n, r;
                        })
                        .getOr(!1) ||
                        ((n = d),
                        (r = cs.fromRangeStart((t = f).selection.getRng())),
                        vg(n, r) ||
                            Zl(n, t.getBody(), r).exists(function (e) {
                                return vg(n, e);
                            }))
                );
                var o, i, a, e, u, t, n, r;
            },
            function (e) {
                return (
                    (n = d),
                    (r = m),
                    (o = e),
                    (i = cs.fromRangeStart((t = f).selection.getRng())),
                    (Kr(o)
                        ? pp(t, o)
                        : ((u = r),
                          (c = o),
                          (l = i),
                          Hc((s = n), (a = t).getBody(), l)
                              .bind(function (e) {
                                  return (
                                      (r = s),
                                      (o = l),
                                      (i = e),
                                      rf((n = c).dom)
                                          .bind(function (t) {
                                              return of(n.dom).map(function (e) {
                                                  return r ? o.isEqual(t) && i.isEqual(e) : o.isEqual(e) && i.isEqual(t);
                                              });
                                          })
                                          .getOr(!0)
                                          ? pp(a, c)
                                          : ((t = c),
                                            gp(u, Et.fromDom(e.getNode())).map(function (e) {
                                                return !1 === je(e, t);
                                            }))
                                  );
                                  var t, n, r, o, i;
                              })
                              .or(ve.some(!0)))
                    ).getOr(!1)
                );
                var a, u, s, c, l, t, n, r, o, i;
            }
        );
    }
    function yg(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l = Et.fromDom(e.selection.getStart(!0)),
            f = Dl(e);
        return e.selection.isCollapsed() && 0 === f.length
            ? bg(e, t, l)
            : ((r = l),
              (o = f),
              (i = Et.fromDom((n = e).getBody())),
              (a = n.selection.getRng()),
              0 !== o.length
                  ? mg(n, o, ve.none())
                  : ((u = n),
                    (c = a),
                    gp((s = i), r)
                        .fold(
                            function () {
                                return (
                                    (t = u),
                                    cg(s, c).map(function (e) {
                                        return e.fold(R(mp, t), R(pg, t), R(mg, t), R(gg, t));
                                    })
                                );
                                var t;
                            },
                            function (e) {
                                return pp(u, e);
                            }
                        )
                        .getOr(!1)));
    }
    function Cg(e) {
        return e.collapsed
            ? e
            : ((a = e),
              (u = cs.fromRangeStart(a)),
              (s = cs.fromRangeEnd(a)),
              (c = a.commonAncestorContainer),
              Zl(!1, c, s)
                  .map(function (e) {
                      return !Qs(u, s, c) && Qs(u, e, c) ? ((t = u.container()), (n = u.offset()), (r = e.container()), (o = e.offset()), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                      var t, n, r, o, i;
                  })
                  .getOr(a));
        var a, u, s, c;
    }
    function xg(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u = t.firstChild,
            s = t.lastChild;
        return (
            u && "meta" === u.name && (u = u.next),
            (r = s = s && "mce_marker" === s.attr("id") ? s.prev : s),
            (o = (n = e).getNonEmptyElements()),
            r && (r.isEmpty(o) || ((i = r), n.getBlockElements()[i.name] && i.firstChild && i.firstChild === i.lastChild && ("br" === (a = i.firstChild).name || a.value === wo))) && (s = s.prev),
            u && u === s && ("ul" === u.name || "ol" === u.name)
        );
    }
    function wg(e) {
        return 0 < e.length && (!(r = e[e.length - 1]).firstChild || ((t = r) && t.firstChild && t.firstChild === t.lastChild && ((n = t.firstChild).data === wo || Kn(n)))) ? e.slice(0, -1) : e;
        var t, n, r;
    }
    function Sg(e, t) {
        var n = e.getParent(t, e.isBlock);
        return n && "LI" === n.nodeName ? n : null;
    }
    function Ng(e, t) {
        var n = cs.after(e),
            r = Mc(t).prev(n);
        return r ? r.toRange() : null;
    }
    function Eg(e, o, i, t) {
        function n(e) {
            var t = cs.fromRangeStart(i),
                n = Mc(o.getRoot()),
                r = 1 === e ? n.prev(t) : n.next(t);
            return !r || Sg(o, r.getNode()) !== R;
        }
        var r,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y,
            C,
            x,
            w,
            S,
            N,
            E,
            k,
            _,
            A = ((r = o), (c = e.serialize(t)), (u = (a = r.createFragment(c)).firstChild), (s = a.lastChild), u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
            R = Sg(o, i.startContainer),
            D = wg(
                U(A.firstChild.childNodes, function (e) {
                    return "LI" === e.nodeName;
                })
            ),
            T = o.getRoot();
        return n(1)
            ? ((S = T),
              (_ = (w = R).parentNode),
              Nt.each(D, function (e) {
                  _.insertBefore(e, w);
              }),
              (N = S),
              (E = cs.before(w)),
              (k = Mc(N).next(E)) ? k.toRange() : null)
            : n(2)
            ? ((l = R), (d = T), o.insertAfter((f = D).reverse(), l), Ng(f[0], d))
            : ((g = D),
              (p = T),
              (h = m = R),
              (b = (v = i).cloneRange()),
              (y = v.cloneRange()),
              b.setStartBefore(h),
              y.setEndAfter(h),
              (C = [b.cloneContents(), y.cloneContents()]),
              (x = m.parentNode).insertBefore(C[0], m),
              Nt.each(g, function (e) {
                  x.insertBefore(e, m);
              }),
              x.insertBefore(C[1], m),
              x.removeChild(m),
              Ng(g[g.length - 1], p));
    }
    function kg(e, t, n) {
        var r,
            o,
            i,
            a,
            u = e.selection,
            s = e.dom;
        /^ | $/.test(t) &&
            ((r = s),
            (o = u.getRng()),
            (i = t),
            (i = Bm((a = Et.fromDom(r.getRoot())), cs.fromRangeStart(o)) ? i.replace(/^ /, "&nbsp;") : i.replace(/^&nbsp;/, " ")),
            (t = i = Pm(a, cs.fromRangeEnd(o)) ? i.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : i.replace(/&nbsp;(<br( \/)?>)?$/, " ")));
        var c = e.parser,
            l = n.merge,
            f = rm({ validate: e.getParam("validate") }, e.schema),
            d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
            m = e.fire("BeforeSetContent", { content: t, format: "html", selection: !0, paste: n.paste });
        if (m.isDefaultPrevented()) e.fire("SetContent", { content: m.content, format: "html", selection: !0, paste: n.paste });
        else {
            (t = m.content), -1 === (t = n.preserve_zwsp ? t : Eo(t)).indexOf("{$caret}") && (t += "{$caret}"), (t = t.replace(/\{\$caret\}/, d));
            var g,
                p,
                h = (g = u.getRng()).startContainer || (g.parentElement ? g.parentElement() : null),
                v = e.getBody();
            h === v &&
                u.isCollapsed() &&
                s.isBlock(v.firstChild) &&
                (p = v.firstChild) &&
                !e.schema.getShortEndedElements()[p.nodeName] &&
                s.isEmpty(v.firstChild) &&
                ((g = s.createRng()).setStart(v.firstChild, 0), g.setEnd(v.firstChild, 0), u.setRng(g)),
                u.isCollapsed() ||
                    (function (e) {
                        var t = e.dom,
                            n = Cg(e.selection.getRng());
                        e.selection.setRng(n);
                        var r,
                            o = t.getParent(n.startContainer, hp),
                            i = n;
                        null !== (r = o) && r === t.getParent(i.endContainer, hp) && Ol(Et.fromDom(r), i) ? mp(e, n, Et.fromDom(o)) : e.getDoc().execCommand("Delete", !1, null);
                    })(e);
            var b,
                y,
                C,
                x,
                w,
                S,
                N,
                E,
                k,
                _,
                A,
                R,
                D,
                T,
                O = { context: (I = u.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0 },
                B = c.parse(t, O);
            if (!0 === n.paste && xg(e.schema, B) && Sg(s, I)) return (g = Eg(f, s, u.getRng(), B)), u.setRng(g), void e.fire("SetContent", m);
            if (
                ((function () {
                    for (var e = B; (e = e.walk()); ) 1 === e.type && e.attr("data-mce-fragment", "1");
                })(),
                "mce_marker" === (L = B.lastChild).attr("id"))
            )
                for (var P = L, L = L.prev; L; L = L.walk(!0))
                    if (3 === L.type || !s.isBlock(L.name)) {
                        e.schema.isValidChild(L.parent.name, "span") && L.parent.insert(P, L, "br" === L.name);
                        break;
                    }
            if ((e._selectionOverrides.showBlockCaretContainer(I), O.invalid)) {
                e.selection.setContent(d);
                var I = u.getNode(),
                    M = e.getBody();
                for (9 === I.nodeType ? (I = L = M) : (L = I); L !== M; ) L = (I = L).parentNode;
                (t = I === M ? M.innerHTML : s.getOuterHTML(I)),
                    (t = f.serialize(
                        c.parse(
                            t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                                return f.serialize(B);
                            })
                        )
                    )),
                    I === M ? s.setHTML(M, t) : s.setOuterHTML(I, t);
            } else
                (b = e),
                    (y = t = f.serialize(B)),
                    "all" === (C = I).getAttribute("data-mce-bogus")
                        ? C.parentNode.insertBefore(b.dom.createFragment(y), C)
                        : ((x = C.firstChild), (w = C.lastChild), !x || (x === w && "BR" === x.nodeName) ? b.dom.setHTML(C, y) : b.selection.setContent(y));
            (N = l),
                (_ = (S = e).schema.getTextInlineElements()),
                (A = S.dom),
                N &&
                    ((E = S.getBody()),
                    (k = tm(A)),
                    Nt.each(A.select("*[data-mce-fragment]"), function (e) {
                        if (
                            V(_[e.nodeName.toLowerCase()]) &&
                            j(lm(A, e), function (e) {
                                return !cm.has(e);
                            })
                        )
                            for (
                                var t = e.parentNode;
                                V(t) &&
                                t !== E &&
                                !(function (r, o, i) {
                                    function a(e) {
                                        var t = r.getStyle(o, e),
                                            n = r.getStyle(i, e);
                                        return Be(t) && Be(n) && t !== n;
                                    }
                                    var e = lm(r, o),
                                        u = lm(r, i);
                                    return F(e, function (t) {
                                        function e(e) {
                                            return F(e, function (e) {
                                                return e === t;
                                            });
                                        }
                                        if (e(u) || !e(Xg)) return a(t);
                                        var n = U(u, function (t) {
                                            return F(Xg, function (e) {
                                                return Ge(t, e);
                                            });
                                        });
                                        return F(n, a);
                                    });
                                })(A, e, t);
                                t = t.parentNode
                            )
                                if (k.compare(t, e)) {
                                    A.remove(e, !0);
                                    break;
                                }
                    })),
                (function (n, e) {
                    var t,
                        r = n.dom,
                        o = n.selection;
                    if (e) {
                        o.scrollIntoView(e);
                        var i = bf(n.getBody(), e);
                        if ("false" === r.getContentEditable(i)) return r.remove(e), o.select(i);
                        var a,
                            u = r.createRng(),
                            s = e.previousSibling;
                        Vn(s) ? (u.setStart(s, s.nodeValue.length), xt.ie || ((a = e.nextSibling), Vn(a) && (s.appendData(a.data), a.parentNode.removeChild(a)))) : (u.setStartBefore(e), u.setEndBefore(e));
                        var c = r.getParent(e, r.isBlock);
                        r.remove(e),
                            c &&
                                r.isEmpty(c) &&
                                (n.$(c).empty(),
                                u.setStart(c, 0),
                                u.setEnd(c, 0),
                                hp(c) ||
                                c.getAttribute("data-mce-fragment") ||
                                !(t = (function (e) {
                                    var t = cs.fromRangeStart(e);
                                    if ((t = Mc(n.getBody()).next(t))) return t.toRange();
                                })(u))
                                    ? r.add(c, r.create("br", { "data-mce-bogus": "1" }))
                                    : ((u = t), r.remove(c))),
                            o.setRng(u);
                    }
                })(e, s.get("mce_marker")),
                (R = e.getBody()),
                Nt.each(R.getElementsByTagName("*"), function (e) {
                    e.removeAttribute("data-mce-fragment");
                }),
                (D = s),
                (T = u.getStart()),
                ve.from(D.getParent(T, "td,th")).map(Et.fromDom).each(vm),
                e.fire("SetContent", m),
                e.addVisual();
        }
    }
    function _g(e) {
        return e instanceof jd;
    }
    function Ag(e, t, n) {
        var r;
        e.dom.setHTML(e.getBody(), t),
            !0 !== n &&
                Cd((r = e)) &&
                rf(r.getBody()).each(function (e) {
                    var t = e.getNode(),
                        n = cn(t) ? rf(t).getOr(e) : e;
                    r.selection.setRng(n.toRange());
                });
    }
    function Rg(u, s, e) {
        var t,
            n = ((t = s), _e(_e({ format: "html" }, e), { set: !0, content: _g(t) ? "" : t })),
            c = e.no_events ? n : u.fire("BeforeSetContent", n);
        return (
            _g(s) || (s = c.content),
            ve.from(u.getBody()).fold(J(s), function (e) {
                return _g(s)
                    ? (function (e, t, n, r) {
                          var o, i, u, a;
                          (o = e.parser.getNodeFilters()),
                              (i = e.parser.getAttributeFilters()),
                              (u = n),
                              (a = (function (e, n) {
                                  var t,
                                      r,
                                      o = {},
                                      i = {},
                                      a = [];
                                  for (t in (u.firstChild &&
                                      vp(u.firstChild, function (t) {
                                          Y(e, function (e) {
                                              e.name === t.name && (o[e.name] ? o[e.name].nodes.push(t) : (o[e.name] = { filter: e, nodes: [t] }));
                                          }),
                                              Y(n, function (e) {
                                                  "string" == typeof t.attr(e.name) && (i[e.name] ? i[e.name].nodes.push(t) : (i[e.name] = { filter: e, nodes: [t] }));
                                              });
                                      }),
                                  o))
                                      Ee(o, t) && a.push(o[t]);
                                  for (r in i) Ee(i, r) && a.push(i[r]);
                                  return a;
                              })(o, i)),
                              Y(a, function (t) {
                                  Y(t.filter.callbacks, function (e) {
                                      e(t.nodes, t.filter.name, {});
                                  });
                              });
                          var s = rm({ validate: e.validate }, e.schema).serialize(n);
                          return (r.content = Eo(Co(Et.fromDom(t)) ? s : Nt.trim(s))), Ag(e, r.content, r.no_selection), r.no_events || e.fire("SetContent", r), n;
                      })(u, e, s, c)
                    : ((t = u),
                      (n = e),
                      (o = c),
                      0 === (r = Eo((r = s))).length || /^\s+$/.test(r)
                          ? ((i = '<br data-mce-bogus="1">'),
                            "TABLE" === n.nodeName ? (r = "<tr><td>" + i + "</td></tr>") : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + i + "</li>"),
                            (r = (a = ks(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), a.toLowerCase()) ? ((r = i), t.dom.createHTML(a, _s(t), r)) : r || '<br data-mce-bogus="1">'),
                            Ag(t, r, o.no_selection),
                            t.fire("SetContent", o))
                          : ("raw" !== o.format && (r = rm({ validate: t.validate }, t.schema).serialize(t.parser.parse(r, { isRootContent: !0, insert: !0 }))),
                            (o.content = Co(Et.fromDom(n)) ? r : Nt.trim(r)),
                            Ag(t, o.content, o.no_selection),
                            o.no_events || t.fire("SetContent", o)),
                      o.content);
                var t, n, r, o, i, a;
            })
        );
    }
    function Dg(e) {
        return y(e) ? e : D;
    }
    function Tg(i, e, t) {
        var n = e(i),
            a = Dg(t);
        return n.orThunk(function () {
            return a(i)
                ? ve.none()
                : (function (e) {
                      for (var t = i.dom, n = Dg(a); t.parentNode; ) {
                          var t = t.parentNode,
                              r = Et.fromDom(t),
                              o = e(r);
                          if (o.isSome()) return o;
                          if (n(r)) break;
                      }
                      return ve.none();
                  })(e);
        });
    }
    function Og(e, t, n) {
        var r = e.formatter.get(n);
        if (r)
            for (var o = 0; o < r.length; o++) {
                var i = r[o];
                if (gl(i) && !1 === i.inherit && e.dom.is(t, i.selector)) return 1;
            }
    }
    function Bg(t, e, n, r, o) {
        var i = t.dom.getRoot();
        return (
            e !== i &&
            ((e = t.dom.getParent(e, function (e) {
                return !!Og(t, e, n) || e.parentNode === i || !!yp(t, e, n, r, !0);
            })),
            !!yp(t, e, n, r, o))
        );
    }
    function Pg(e, t, n) {
        return !!bp(t, n.inline) || !!bp(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0);
    }
    function Lg(e, t, n, r, o, i) {
        var a = n[r];
        if (y(n.onmatch)) return n.onmatch(t, n, r);
        if (a)
            if (b(a.length)) {
                for (var u in a)
                    if (Ee(a, u)) {
                        var s = "attributes" === r ? e.getAttrib(t, u) : cl(e, t, u),
                            c = al(a[u], i),
                            l = K(s) || Pe(s);
                        if (!l || !K(c)) {
                            if (o && l && !n.exact) return;
                            if ((!o || n.exact) && !bp(s, sl(e, c, u))) return;
                        }
                    }
            } else for (var f = 0; f < a.length; f++) if ("attributes" === r ? e.getAttrib(t, a[f]) : cl(e, t, a[f])) return 1;
        return 1;
    }
    function Ig(e, t, n, r, o) {
        if (r) return Bg(e, r, t, n, o);
        if (((r = e.selection.getNode()), Bg(e, r, t, n, o))) return !0;
        var i = e.selection.getStart();
        return !(i === r || !Bg(e, i, t, n, o));
    }
    function Mg(e) {
        return (
            0 <
            (function (e) {
                for (var t = []; e; ) {
                    if ((3 === e.nodeType && e.nodeValue !== Cp) || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), (e = e.firstChild);
                }
                return t;
            })(e).length
        );
    }
    function Fg(e) {
        if (e) {
            var t = new Dr(e, e);
            for (e = t.current(); e; e = t.next()) if (Vn(e)) return e;
        }
        return null;
    }
    function Ug(e) {
        var t = Et.fromTag("span");
        return hn(t, { id: xp, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && Ln(t, Et.fromText(Cp)), t;
    }
    function zg(e, t, n) {
        void 0 === n && (n = !0);
        var r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f = e.dom,
            d = e.selection;
        Mg(t)
            ? Qm(e, !1, Et.fromDom(t), n)
            : ((r = d.getRng()),
              (o = f.getParent(t, f.isBlock)),
              (i = r.startContainer),
              (a = r.startOffset),
              (u = r.endContainer),
              (s = r.endOffset),
              (l = Fg(t)) && l.nodeValue.charAt(0) === Cp && l.deleteData(0, 1),
              (c = l),
              f.remove(t, !0),
              i === c && 0 < a && r.setStart(c, a - 1),
              u === c && 0 < s && r.setEnd(c, s - 1),
              o && f.isEmpty(o) && hm(Et.fromDom(o)),
              d.setRng(r));
    }
    function Hg(e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
            o = e.selection;
        if (t) zg(e, t, n);
        else if (!(t = qc(e.getBody(), o.getStart()))) for (; (t = r.get(xp)); ) zg(e, t, !1);
    }
    function jg(e, t) {
        return e.appendChild(t), t;
    }
    function Vg(e, t) {
        var n = P(
            e,
            function (e, t) {
                return jg(e, t.cloneNode(!1));
            },
            t
        );
        return jg(n, n.ownerDocument.createTextNode(Cp));
    }
    function qg(o, e, t, i, n, r) {
        var a,
            u,
            s = o.formatter,
            c = o.dom,
            l = U(we(s.get()), function (e) {
                return e !== i && !Te(e, "removeformat");
            });
        if (
            0 <
            U(
                ((a = o),
                (u = t),
                L(
                    l,
                    function (e, t) {
                        var n = dl(a, t);
                        return a.formatter.matchNode(u, t, {}, n) ? e.concat([t]) : e;
                    },
                    []
                )),
                function (e) {
                    return (
                        (n = i),
                        (r = ["inline", "block", "selector", "attributes", "styles", "classes"]),
                        !F((t = o).formatter.get(e), function (e) {
                            var i = a(e);
                            return F(t.formatter.get(n), function (e) {
                                var t,
                                    n = a(e),
                                    r = i,
                                    o = n;
                                return d((t = void 0 === t ? p : t)).eq(r, o);
                            });
                        })
                    );
                    function a(e) {
                        return ae(e, function (e, t) {
                            return F(r, function (e) {
                                return e === t;
                            });
                        });
                    }
                    var t, n, r;
                }
            ).length
        ) {
            var f = t.cloneNode(!1);
            return c.add(e, f), s.remove(i, n, f, r), c.remove(f), ve.some(f);
        }
        return ve.none();
    }
    function $g(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y = e.dom,
            C = e.selection,
            x = [],
            w = C.getRng(),
            S = w.startContainer,
            N = w.startOffset,
            E = S;
        for (3 === S.nodeType && (N !== S.nodeValue.length && (o = !0), (E = E.parentNode)); E; ) {
            if (yp(e, E, t, n, r)) {
                i = E;
                break;
            }
            E.nextSibling && (o = !0), x.push(E), (E = E.parentNode);
        }
        i &&
            (o
                ? ((a = C.getBookmark()), w.collapse(!0), (u = Pf(kl(e, w, e.formatter.get(t), !0))), e.formatter.remove(t, n, u, r), C.moveToBookmark(a))
                : ((s = qc(e.getBody(), i)),
                  (d = c = Ug(!1).dom),
                  (p = (g = e.dom).getParent((m = null !== s ? s : i), R(ol, e))) && g.isEmpty(p)
                      ? m.parentNode.replaceChild(d, m)
                      : ((h = Et.fromDom(m)),
                        (v = yu(h, "br")),
                        (b = U(
                            (function () {
                                for (var e = [], t = h.dom; t; ) e.push(Et.fromDom(t)), (t = t.lastChild);
                                return e;
                            })().slice(-1),
                            Pr
                        )),
                        v.length === b.length && Y(b, In),
                        g.isEmpty(m) ? m.parentNode.replaceChild(d, m) : g.insertAfter(d, m)),
                  (l = qg(e, c, i, t, n, r)),
                  (f = Vg(x.concat(l.toArray()), c)),
                  zg(e, s, !1),
                  C.setCursorLocation(f, 1),
                  y.isEmpty(i) && y.remove(i)));
    }
    function Wg(e, t) {
        var n = e.schema.getTextInlineElements();
        return Ee(n, kt(t)) && !Vc(t.dom) && !sn(t.dom);
    }
    Y(
        [
            "margin",
            "margin-left",
            "margin-right",
            "margin-top",
            "margin-bottom",
            "padding",
            "padding-left",
            "padding-right",
            "padding-top",
            "padding-bottom",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "float",
            "position",
            "left",
            "right",
            "top",
            "bottom",
            "z-index",
            "display",
            "transform",
            "width",
            "max-width",
            "min-width",
            "height",
            "max-height",
            "min-height",
            "overflow",
            "overflow-x",
            "overflow-y",
            "text-overflow",
            "vertical-align",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
        ],
        function (e) {
            cm.add(e);
        }
    );
    var Kg,
        Xg = ["font", "text-decoration", "text-emphasis"],
        Yg = R(fm, !0, Zc),
        Gg = R(fm, !1, Zc),
        Jg = mm(!0, gm),
        Qg = mm(!1, gm),
        Zg = mm(!0, Qn),
        ep = mm(!1, Qn),
        tp = mm(!0, cn),
        np = mm(!1, cn),
        rp = mm(!0, pm),
        op = mm(!1, pm),
        ip = R(Sm, !1),
        ap = R(Sm, !0),
        up = R(wm, !1),
        sp = R(wm, !0),
        cp = R(Em, !1),
        lp = R(Em, !0),
        fp = ir([{ singleCellTable: ["rng", "cell"] }, { fullTable: ["table"] }, { partialTable: ["cells", "outsideDetails"] }, { multiTable: ["startTableCells", "endTableCells", "betweenRng"] }]),
        dp = function (e) {
            var t;
            return (8 === _t((t = e)) || "#comment" === kt(t) ? Bt : Ut)(e)
                .bind(dp)
                .orThunk(function () {
                    return ve.some(e);
                });
        },
        mp = function (e, t, n, r) {
            void 0 === r && (r = !0), t.deleteContents();
            var o,
                i = dp(n).getOr(n),
                a = Et.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
            return (
                Kr(a) && (hm(a), r && e.selection.setCursorLocation(a.dom, 0)),
                je(n, a) ||
                    Y(
                        (fn(Ot(a), n)
                            ? []
                            : Ot((o = a))
                                  .map(Tn)
                                  .map(function (e) {
                                      return U(e, function (e) {
                                          return !je(o, e);
                                      });
                                  })
                                  .getOr([])
                        ).concat(Tn(n)),
                        function (e) {
                            je(e, a) || Ve(e, a) || !Kr(e) || In(e);
                        }
                    ),
                !0
            );
        },
        gp = function (e, t) {
            return M(ym(t, e), function (e) {
                return _n(e) && "caption" === kt(e);
            });
        },
        pp = function (e, t) {
            return hm(t), e.selection.setCursorLocation(t.dom, 0), ve.some(!0);
        },
        hp = Jn,
        vp = function (e, t) {
            t(e), e.firstChild && vp(e.firstChild, t), e.next && vp(e.next, t);
        },
        bp = ul,
        yp = function (e, t, n, r, o) {
            var i = e.formatter.get(n),
                a = e.dom;
            if (i && t)
                for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    if (Pg(e.dom, t, s) && Lg(a, t, s, "attributes", o, r) && Lg(a, t, s, "styles", o, r)) {
                        var c = s.classes;
                        if (c) for (var l = 0; l < c.length; l++) if (!e.dom.hasClass(t, al(c[l], r))) return;
                        return s;
                    }
                }
        },
        Cp = So,
        xp = "_mce_caret",
        wp = {},
        Sp = fe,
        Np = ce;
    function Ep(e) {
        return Hn(e) && !Qc(e) && !Vc(e) && !sn(e);
    }
    function kp(e, t) {
        for (var n = e; n; n = n[t]) {
            if (Vn(n) && Be(n.data)) return e;
            if (Hn(n) && !Qc(n)) return n;
        }
        return e;
    }
    function _p(e, t, n) {
        var r = tm(e);
        if (t && n && ((t = kp(t, "previousSibling")), (n = kp(n, "nextSibling")), r.compare(t, n))) {
            for (var o = t.nextSibling; o && o !== n; ) {
                var i = o,
                    o = o.nextSibling;
                t.appendChild(i);
            }
            return (
                e.remove(n),
                Nt.each(Nt.grep(n.childNodes), function (e) {
                    t.appendChild(e);
                }),
                t
            );
        }
        return n;
    }
    function Ap(e, t, n, r) {
        var o;
        r && !1 !== t.merge_siblings && ((o = _p(e, rl(r), r)), _p(e, o, rl(o, !0)));
    }
    function Rp(t, n) {
        return function (e) {
            return !(!e || !cl(t, e, n));
        };
    }
    function Dp(r, o, i) {
        return function (e) {
            var t, n;
            r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), (t = r), "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0);
        };
    }
    function Tp(e, t, n) {
        return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
    }
    function Op(e, t, n) {
        var r,
            o = t[n ? "startContainer" : "endContainer"],
            i = t[n ? "startOffset" : "endOffset"];
        return (
            Hn(o) && ((r = o.childNodes.length - 1), !n && i && i--, (o = o.childNodes[r < i ? r : i])),
            Vn(o) && n && i >= o.nodeValue.length && (o = new Dr(o, e.getBody()).next() || o),
            (Vn(o) && !n && 0 === i && new Dr(o, e.getBody()).prev()) || o
        );
    }
    function Bp(e, t) {
        var n = t ? "firstChild" : "lastChild";
        if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
            var r = e[n];
            return ("TR" === e.nodeName && r[n]) || r;
        }
        return e;
    }
    function Pp(e, t, n, r) {
        var o = e.create(n, r);
        return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
    }
    function Lp(e, t, n, r, o) {
        var i = Et.fromDom(t),
            a = Et.fromDom(e.create(r, o));
        return Kt(a, (n ? It : Lt)(i)), n ? (qt(i, a), Wt(a, i)) : ($t(i, a), Ln(a, i)), a.dom;
    }
    function Ip(e, t, n, r) {
        var o = rl(t, n, r);
        return K(o) || "BR" === o.nodeName || e.isBlock(o);
    }
    function Mp(e, r, o, t, i) {
        var n,
            a,
            u = e.dom,
            s = u,
            c = t;
        if (!((pl((a = r)) && Rh(c, a.inline)) || (ml(a) && Rh(c, a.block)) || (gl(a) && Hn(c) && s.is(c, a.selector)) || (r.links && "A" === t.nodeName))) return kh.keep();
        var l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b = t;
        if (pl(r) && "all" === r.remove && S(r.preserve_attributes)) {
            var y = U(u.getAttribs(b), function (e) {
                return T(r.preserve_attributes, e.name.toLowerCase());
            });
            if (
                (u.removeAllAttribs(b),
                Y(y, function (e) {
                    return u.setAttrib(b, e.name, e.value);
                }),
                0 < y.length)
            )
                return kh.rename("span");
        }
        if ("all" !== r.remove) {
            Ah(r.styles, function (e, t) {
                (e = sl(u, al(e, o), t + "")), N(t) && ((t = e), (i = null)), (!r.remove_similar && i && !Rh(cl(u, i, t), e)) || u.setStyle(b, t, ""), (n = !0);
            }),
                n && "" === u.getAttrib(b, "style") && (b.removeAttribute("style"), b.removeAttribute("data-mce-style")),
                Ah(r.attributes, function (e, t) {
                    var n;
                    if (((e = al(e, o)), N(t) && ((t = e), (i = null)), r.remove_similar || !i || Rh(u.getAttrib(i, t), e)))
                        if (
                            "class" === t &&
                            (e = u.getAttrib(b, t)) &&
                            ((n = ""),
                            Y(e.split(/\s+/), function (e) {
                                /mce\-\w+/.test(e) && (n += (n ? " " : "") + e);
                            }),
                            n)
                        )
                            u.setAttrib(b, t, n);
                        else {
                            if ((_h.test(t) && b.removeAttribute("data-mce-" + t), "style" === t && on(["li"])(b) && "none" === u.getStyle(b, "list-style-type"))) return b.removeAttribute(t), void u.setStyle(b, "list-style-type", "none");
                            "class" === t && b.removeAttribute("className"), b.removeAttribute(t);
                        }
                }),
                Ah(r.classes, function (e) {
                    (e = al(e, o)), (i && !u.hasClass(i, e)) || u.removeClass(b, e);
                });
            for (var C = u.getAttribs(b), x = 0; x < C.length; x++) {
                var w = C[x].nodeName;
                if (0 !== w.indexOf("_") && 0 !== w.indexOf("data-")) return kh.keep();
            }
        }
        return "none" !== r.remove
            ? ((l = e),
              (d = r),
              (p = (f = b).parentNode),
              (h = l.dom),
              (v = ks(l)),
              ml(d) &&
                  (v
                      ? p === h.getRoot() &&
                        ((d.list_block && Rh(f, d.list_block)) ||
                            Y(xe(f.childNodes), function (e) {
                                il(l, v, e.nodeName.toLowerCase()) ? (m ? m.appendChild(e) : ((m = Pp(h, e, v)), h.setAttribs(m, l.settings.forced_root_block_attrs))) : (m = null);
                            }))
                      : h.isBlock(f) && !h.isBlock(p) && (Ip(h, f, !1) || Ip(h, f.firstChild, !0, !0) || f.insertBefore(h.create("br"), f.firstChild), Ip(h, f, !0) || Ip(h, f.lastChild, !1, !0) || f.appendChild(h.create("br")))),
              (gl((g = d)) && pl(g) && fn(ue(g, "mixed"), !0) && !Rh(d.inline, f)) || h.remove(f, !0),
              kh.removed())
            : kh.keep();
    }
    function Fp(t, e, n, r, o) {
        return Mp(t, e, n, r, o).fold(
            D,
            function (e) {
                return t.dom.rename(r, e), !0;
            },
            w
        );
    }
    function Up(u, s, c, e, l) {
        function a(e) {
            var n,
                r,
                o,
                i,
                a,
                t =
                    ((r = s),
                    (o = c),
                    (i = l),
                    Y(fl((n = u).dom, e.parentNode).reverse(), function (e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || ((t = yp(n, e, r, o, i)) && !1 !== t.split && (a = e));
                    }),
                    a);
            return (function (e, t, n, r, o, i, a, u) {
                var s,
                    c,
                    l = e.dom;
                if (n) {
                    for (var f = n.parentNode, d = r.parentNode; d && d !== f; d = d.parentNode) {
                        for (
                            var m = l.clone(d, !1), g = 0;
                            g < t.length &&
                            null !==
                                (m = (function (t, e, n) {
                                    return Mp(t, e, u, n, n).fold(
                                        J(n),
                                        function (e) {
                                            return t.dom.createFragment().appendChild(n), t.dom.rename(n, e);
                                        },
                                        J(null)
                                    );
                                })(e, t[g], m));
                            g++
                        );
                        m && (s && m.appendChild(s), (c = c || m), (s = m));
                    }
                    !i || (a.mixed && l.isBlock(n)) || (r = l.split(n, r)), s && (o.parentNode.insertBefore(s, o), c.appendChild(o), pl(a) && Ap(l, a, 0, s));
                }
                return r;
            })(u, m, t, e, e, !0, g, c);
        }
        function f(t) {
            return F(m, function (e) {
                return Fp(u, e, c, t, t);
            });
        }
        function d(e) {
            var t,
                n = h.get(e ? "_start" : "_end"),
                r = n[e ? "firstChild" : "lastChild"];
            return (
                Qc((t = r)) && Hn(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]),
                Vn(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling),
                h.remove(n, !0),
                r
            );
        }
        function t(e) {
            var t = kl(u, e, m, e.collapsed);
            if (g.split) {
                if (((t = Pf(t)), (r = Op(u, t, !0)) !== (o = Op(u, t)))) {
                    if (((r = Bp(r, !0)), (o = Bp(o, !1)), Tp(h, r, o))) {
                        var n = ve.from(r.firstChild).getOr(r);
                        return a(Lp(h, n, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void d(!0);
                    }
                    if (Tp(h, o, r)) return (n = ve.from(o.lastChild).getOr(o)), a(Lp(h, n, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void d(!1);
                    var r = Pp(h, r, "span", { id: "_start", "data-mce-type": "bookmark" }),
                        o = Pp(h, o, "span", { id: "_end", "data-mce-type": "bookmark" }),
                        i = h.createRng();
                    i.setStartAfter(r),
                        i.setEndBefore(o),
                        _l(h, i, function (e) {
                            Y(e, function (e) {
                                Qc(e) || Qc(e.parentNode) || a(e);
                            });
                        }),
                        a(r),
                        a(o),
                        (r = d(!0)),
                        (o = d());
                } else r = o = a(r);
                (t.startContainer = r.parentNode || r), (t.startOffset = h.nodeIndex(r)), (t.endContainer = o.parentNode || o), (t.endOffset = h.nodeIndex(o) + 1);
            }
            _l(h, t, function (e) {
                Y(e, v);
            });
        }
        var n,
            m = u.formatter.get(s),
            g = m[0],
            p = !0,
            h = u.dom,
            r = u.selection,
            v = function (t) {
                var e = !0,
                    n = !1;
                Hn(t) && h.getContentEditable(t) && ((e = p), (p = "true" === h.getContentEditable(t)), (n = !0));
                var r,
                    o,
                    i = xe(t.childNodes);
                if (
                    (p &&
                        !n &&
                        ((r =
                            f(t) ||
                            F(m, function (e) {
                                return Pg(h, t, e);
                            })),
                        (o = t.parentNode),
                        !r && V(o) && hl(g) && f(o)),
                    g.deep && i.length)
                ) {
                    for (var a = 0; a < i.length; a++) v(i[a]);
                    n && (p = e);
                }
                Y(["underline", "line-through", "overline"], function (e) {
                    Hn(t) && u.dom.getStyle(t, "text-decoration") === e && t.parentNode && ll(h, t.parentNode) === e && Fp(u, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: e } }, null, t);
                });
            };
        if (e) return tl(e) ? ((n = h.createRng()).setStartBefore(e), n.setEndAfter(e), t(n)) : t(e), void wf(u, s, e, c);
        if ("false" !== h.getContentEditable(r.getNode()))
            r.isCollapsed() && pl(g) && !Dl(u).length
                ? $g(u, s, c, l)
                : (Il(r, !0, function () {
                      Ll(u, t);
                  }),
                  pl(g) && Ig(u, s, c, r.getStart()) && nl(h, r, r.getRng()),
                  u.nodeChanged()),
                wf(u, s, e, c);
        else {
            e = r.getNode();
            for (var o = 0; o < m.length && (!m[o].ceFalseOverride || !Fp(u, m[o], c, e, e)); o++);
            wf(u, s, e, c);
        }
    }
    function zp(e) {
        return Hn(e) && !Qc(e) && !Vc(e) && !sn(e);
    }
    function Hp(e) {
        return Ee(e, "vars");
    }
    function jp(n, e, r, o, i) {
        return I(
            e,
            function (e) {
                var t = n.formatter.matchNode(e, r, null != i ? i : {}, o);
                return !b(t);
            },
            function (e) {
                return Og(n, e, r) || (!o && V(n.formatter.matchNode(e, r, i, !0)));
            }
        );
    }
    function Vp(e, t) {
        var n = null != t ? t : Bh(e);
        return U(fl(e.dom, n), function (e) {
            return Hn(e) && !sn(e);
        });
    }
    function qp(e, o, i, a, t, n) {
        var r, u, s, c, l, f, d, m, g;
        return (
            null === o.get() &&
                ((u = e),
                (r = o).set({}),
                u.on("NodeChange", function (e) {
                    Ph(u, e.element, r.get());
                }),
                u.on("FormatApply FormatRemove", function (e) {
                    var t = ve
                        .from(e.node)
                        .map(function (e) {
                            return tl(e) ? e : e.startContainer;
                        })
                        .bind(function (e) {
                            return Hn(e) ? ve.some(e) : ve.from(e.parentElement);
                        })
                        .getOrThunk(function () {
                            return Bh(u);
                        });
                    Ph(u, t, r.get());
                })),
            (s = e),
            (l = i),
            (f = a),
            (d = t),
            (m = n),
            (g = (c = o).get()),
            Y(l.split(","), function (t) {
                function e() {
                    var e = Vp(s);
                    return jp(s, e, t, d, m).isSome();
                }
                var n,
                    r = ue(g, t).getOrThunk(function () {
                        var e = { withSimilar: { state: au(!1), similar: !0, callbacks: [] }, withoutSimilar: { state: au(!1), similar: !1, callbacks: [] }, withVars: [] };
                        return (g[t] = e);
                    });
                b(m) ? ((n = d ? r.withSimilar : r.withoutSimilar).callbacks.push(f), 1 === n.callbacks.length && n.state.set(e())) : r.withVars.push({ state: au(e()), similar: d, vars: m, callback: f });
            }),
            c.set(g),
            {
                unbind: function () {
                    var e,
                        t = i,
                        n = a,
                        r = (e = o).get();
                    Y(t.split(","), function (t) {
                        return ue(r, t).each(function (e) {
                            r[t] = {
                                withSimilar: _e(_e({}, e.withSimilar), {
                                    callbacks: U(e.withSimilar.callbacks, function (e) {
                                        return e !== n;
                                    }),
                                }),
                                withoutSimilar: _e(_e({}, e.withoutSimilar), {
                                    callbacks: U(e.withoutSimilar.callbacks, function (e) {
                                        return e !== n;
                                    }),
                                }),
                                withVars: U(e.withVars, function (e) {
                                    return e.callback !== n;
                                }),
                            };
                        });
                    }),
                        e.set(r);
                },
            }
        );
    }
    function $p(e, t) {
        var n = (t || document).createDocumentFragment();
        return (
            Y(e, function (e) {
                n.appendChild(e.dom);
            }),
            Et.fromDom(n)
        );
    }
    function Wp(e, t, n) {
        return { element: e, width: t, rows: n };
    }
    function Kp(e, t) {
        return { element: e, cells: t };
    }
    function Xp(e, t) {
        var n = parseInt(vn(e, t), 10);
        return isNaN(n) ? 1 : n;
    }
    function Yp(e) {
        return L(
            e,
            function (e, t) {
                return t.cells.length > e ? t.cells.length : e;
            },
            0
        );
    }
    function Gp(e, t) {
        for (var n = e.rows, r = 0; r < n.length; r++) for (var o = n[r].cells, i = 0; i < o.length; i++) if (je(o[i], t)) return ve.some({ x: i, y: r });
        return ve.none();
    }
    function Jp(e, t, n, r, o) {
        for (var i = [], a = e.rows, u = n; u <= o; u++) {
            var s = a[u].cells,
                c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
            i.push(Kp(a[u].element, c));
        }
        return i;
    }
    function Qp(e) {
        var o = Wp(Eu(e), 0, []);
        return (
            Y(yu(e, "tr"), function (n, r) {
                Y(yu(n, "td,th"), function (e, t) {
                    !(function (e, t, n, r, o) {
                        for (var i = Xp(o, "rowspan"), a = Xp(o, "colspan"), u = e.rows, s = n; s < n + i; s++) {
                            u[s] || (u[s] = Kp(ku(r), []));
                            for (var c = t; c < t + a; c++) u[s].cells[c] = s === n && c === t ? o : Eu(o);
                        }
                    })(
                        o,
                        (function (e, t, n) {
                            for (; (r = t), ((o = e.rows)[n] ? o[n].cells : [])[r]; ) t++;
                            var r, o;
                            return t;
                        })(o, t, r),
                        r,
                        n,
                        e
                    );
                });
            }),
            Wp(o.element, Yp(o.rows), o.rows)
        );
    }
    function Zp(e, t) {
        var n,
            r,
            o,
            i = Et.fromDom(t.commonAncestorContainer),
            a = ym(i, e),
            u = U(a, function (e) {
                return Br(e) || mo(e);
            }),
            s =
                ((o = t),
                M((r = a), function (e) {
                    return "li" === kt(e) && Ol(e, o);
                }).fold(J([]), function (e) {
                    return M(r, function (e) {
                        return "ul" === kt(e) || "ol" === kt(e);
                    })
                        .map(function (e) {
                            var t = Et.fromTag(kt(e));
                            return (
                                xn(
                                    t,
                                    ae(Nn(e), function (e, t) {
                                        return Ge(t, "list-style");
                                    })
                                ),
                                [Et.fromTag("li"), t]
                            );
                        })
                        .getOr([]);
                }));
        return A(
            u.concat(
                s.length
                    ? s
                    : vo((n = i))
                    ? Ot(n)
                          .filter(ho)
                          .fold(J([]), function (e) {
                              return [n, e];
                          })
                    : ho(n)
                    ? [n]
                    : []
            ),
            Eu
        );
    }
    function eh() {
        return $p([]);
    }
    function th(e, i) {
        return vr(i[0], "table", R(je, e))
            .bind(function (e) {
                var s,
                    t,
                    n = i[0],
                    r = i[i.length - 1],
                    o = Qp(e);
                return (
                    (t = r),
                    Gp((s = o), n)
                        .bind(function (u) {
                            return Gp(s, t).map(function (e) {
                                return (t = s), (n = u.x), (r = u.y), (o = e.x), (a = r < (i = e.y) ? Jp(t, n, r, o, i) : Jp(t, n, i, o, r)), Wp(t.element, Yp(a), a);
                                var t, n, r, o, i, a;
                            });
                        })
                        .map(function (e) {
                            return $p([
                                ((n = A((t = e).rows, function (e) {
                                    var t = A(e.cells, function (e) {
                                            var t = ku(e);
                                            return Cn(t, "colspan"), Cn(t, "rowspan"), t;
                                        }),
                                        n = Eu(e.element);
                                    return Kt(n, t), n;
                                })),
                                (r = Eu(t.element)),
                                Kt((o = Et.fromTag("tbody")), n),
                                Ln(r, o),
                                r),
                            ]);
                            var t, n, r, o;
                        })
                );
            })
            .getOrThunk(eh);
    }
    function nh(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c = Rl(t, e);
        return 0 < c.length
            ? th(e, c)
            : ((n = e),
              0 < (r = t).length && r[0].collapsed
                  ? eh()
                  : ((o = n),
                    (i = r[0]),
                    (a = Et.fromDom(i.cloneContents())),
                    (s = L(
                        (u = Zp(o, i)),
                        function (e, t) {
                            return Ln(t, e), t;
                        },
                        a
                    )),
                    0 < u.length ? $p([s]) : s));
    }
    function rh(e, t) {
        return 0 <= t && t < e.length && Zc(e.charAt(t));
    }
    function oh(e, t) {
        var n = Eo(e.innerText);
        return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n;
    }
    function ih(e) {
        return Hn(e) ? e.outerHTML : Vn(e) ? Zo.encodeRaw(e.data, !1) : qn(e) ? "\x3c!--" + e.data + "--\x3e" : "";
    }
    function ah(e, c) {
        var l = 0;
        Y(e, function (e) {
            var t, n, r, o, i, a, u, s;
            0 === e[0]
                ? l++
                : 1 === e[0]
                ? ((o = c),
                  (i = e[1]),
                  (a = l),
                  (s = (function (e) {
                      var t,
                          n = document.createElement("div"),
                          r = document.createDocumentFragment();
                      for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
                      return r;
                  })(i)),
                  o.hasChildNodes() && a < o.childNodes.length ? (u = o.childNodes[a]).parentNode.insertBefore(s, u) : o.appendChild(s),
                  l++)
                : 2 === e[0] && ((n = l), (t = c).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r));
        });
    }
    function uh(e) {
        var t = e.serializer.getTempAttrs(),
            n = em(e.getBody(), t);
        return null !== n.querySelector("iframe")
            ? {
                  type: "fragmented",
                  fragments: U(A(xe(n.childNodes), i(Eo, ih)), function (e) {
                      return 0 < e.length;
                  }),
                  content: "",
                  bookmark: null,
                  beforeBookmark: null,
              }
            : { type: "complete", fragments: null, content: Eo(n.innerHTML), bookmark: null, beforeBookmark: null };
    }
    function sh(e, t, n) {
        var r,
            o,
            i,
            g,
            p,
            a,
            h,
            v,
            c,
            l,
            u,
            s = n ? t.beforeBookmark : t.bookmark;
        function b(e, t, n, r) {
            for (var o = e; o - t < r && o < n && g[o] === p[o - t]; ) ++o;
            return { start: e, end: o, diag: t };
        }
        "fragmented" === t.type
            ? ((r = t.fragments),
              (o = e.getBody()),
              (i = A(xe(o.childNodes), ih)),
              ah(
                  ((p = r),
                  (a = (g = i).length + p.length + 2),
                  (h = new Array(a)),
                  (v = new Array(a)),
                  (c = function (e, t, n, r, o) {
                      var i = l(e, t, n, r);
                      if (null === i || (i.start === t && i.diag === t - r) || (i.end === e && i.diag === e - n))
                          for (var a = e, u = n; a < t || u < r; ) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u);
                      else {
                          c(e, i.start, n, i.start - i.diag, o);
                          for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                          c(i.end, t, i.end - i.diag, r, o);
                      }
                  }),
                  (l = function (e, t, n, r) {
                      var o = t - e,
                          i = r - n;
                      if (0 == o || 0 == i) return null;
                      var a,
                          u,
                          s,
                          c,
                          l,
                          f = o - i,
                          d = i + o,
                          m = (d % 2 == 0 ? d : 1 + d) / 2;
                      for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                          for (u = -a; u <= a; u += 2) {
                              for (s = u + m, u === -a || (u !== a && h[s - 1] < h[s + 1]) ? (h[s] = h[s + 1]) : (h[s] = h[s - 1] + 1), l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l]; ) (h[s] = ++c), ++l;
                              if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return b(v[s - f], u + e - n, t, r);
                          }
                          for (u = f - a; u <= f + a; u += 2) {
                              for (s = u + m - f, u === f - a || (u !== f + a && v[s + 1] <= v[s - 1]) ? (v[s] = v[s + 1] - 1) : (v[s] = v[s - 1]), l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l]; ) (v[s] = c--), l--;
                              if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return b(v[s], u + e - n, t, r);
                          }
                      }
                  }),
                  (u = []),
                  c(0, g.length, 0, p.length, u),
                  u),
                  o
              ))
            : e.setContent(t.content, { format: "raw", no_selection: !V(s) || !$c(s) || !s.isFakeCaret }),
            e.selection.moveToBookmark(s);
    }
    function ch(e) {
        return "fragmented" === e.type ? e.fragments.join("") : e.content;
    }
    function lh(e) {
        var t = Et.fromTag("body", Lh());
        return Su(t, ch(e)), Y(yu(t, "*[data-mce-bogus]"), Yt), t.dom.innerHTML;
    }
    function fh(e, t) {
        return !(!e || !t) && ((r = t), ch(e) === ch(r) || ((n = t), lh(e) === lh(n)));
        var n, r;
    }
    function dh(e) {
        return 0 === e.get();
    }
    function mh(e, t, n) {
        dh(n) && (e.typing = t);
    }
    function gh(e, t) {
        e.typing && (mh(e, !1, t), e.add());
    }
    function ph(c) {
        return {
            undoManager: {
                beforeChange: function (e, t) {
                    var n = c,
                        r = t;
                    dh(e) && r.set(hc(n.selection));
                },
                add: function (e, t, n, r, o, i) {
                    return (function (e, t, n, r, o, i, a) {
                        var u = uh(e);
                        if (((i = Nt.extend((i = i || {}), u)), !1 === dh(r) || e.removed)) return null;
                        var s = t.data[n.get()];
                        if (e.fire("BeforeAddUndo", { level: i, lastLevel: s, originalEvent: a }).isDefaultPrevented()) return null;
                        if (s && fh(s, i)) return null;
                        t.data[n.get()] &&
                            o.get().each(function (e) {
                                t.data[n.get()].beforeBookmark = e;
                            });
                        var c = e.getParam("custom_undo_redo_levels", 0, "number");
                        if (c && t.data.length > c) {
                            for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                            t.data.length--, n.set(t.data.length);
                        }
                        (i.bookmark = hc(e.selection)), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                        var f = { level: i, lastLevel: s, originalEvent: a };
                        return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i;
                    })(c, e, t, n, r, o, i);
                },
                undo: function (e, t, n) {
                    return (r = c), (i = t), (a = n), (o = e).typing && (o.add(), (o.typing = !1), mh(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), sh(r, (u = o.data[a.get()]), !0), r.setDirty(!0), r.fire("Undo", { level: u })), u;
                    var r, o, i, a, u;
                },
                redo: function (e, t) {
                    return (n = c), (o = t), (r = e).get() < o.length - 1 && (r.set(r.get() + 1), sh(n, (i = o[r.get()]), !1), n.setDirty(!0), n.fire("Redo", { level: i })), i;
                    var n, r, o, i;
                },
                clear: function (e, t) {
                    var n,
                        r = c,
                        o = t;
                    ((n = e).data = []), o.set(0), (n.typing = !1), r.fire("ClearUndos");
                },
                reset: function (e) {
                    var t;
                    (t = e).clear(), t.add();
                },
                hasUndo: function (e, t) {
                    return (n = c), (r = e), 0 < t.get() || (r.typing && r.data[0] && !fh(uh(n), r.data[0]));
                    var n, r;
                },
                hasRedo: function (e, t) {
                    return (n = e), t.get() < n.data.length - 1 && !n.typing;
                    var n;
                },
                transact: function (e, t, n) {
                    return (o = n), gh((r = e), t), r.beforeChange(), r.ignore(o), r.add();
                    var r, o;
                },
                ignore: function (e, t) {
                    try {
                        e.set(e.get() + 1), t();
                    } finally {
                        e.set(e.get() - 1);
                    }
                },
                extra: function (e, t, n, r) {
                    var o,
                        i,
                        a = c,
                        u = t,
                        s = r;
                    (o = e).transact(n) && ((i = o.data[u.get()].bookmark), sh(a, o.data[u.get() - 1], !0), o.transact(s) && (o.data[u.get() - 1].beforeBookmark = i));
                },
            },
            formatter: {
                match: function (e, t, n, r) {
                    return Ig(c, e, t, n, r);
                },
                matchAll: function (e, t) {
                    return (
                        (o = e),
                        (i = t),
                        (a = []),
                        (u = {}),
                        (n = (r = c).selection.getStart()),
                        r.dom.getParent(
                            n,
                            function (e) {
                                for (var t = 0; t < o.length; t++) {
                                    var n = o[t];
                                    !u[n] && yp(r, e, n, i) && ((u[n] = !0), a.push(n));
                                }
                            },
                            r.dom.getRoot()
                        ),
                        a
                    );
                    var r, o, i, a, u, n;
                },
                matchNode: function (e, t, n, r) {
                    return yp(c, e, t, n, r);
                },
                canApply: function (u) {
                    return (function (e) {
                        var t = e.formatter.get(u),
                            n = e.dom;
                        if (t)
                            for (var r = fl(n, e.selection.getStart()), o = t.length - 1; 0 <= o; o--) {
                                var i = t[o];
                                if (!gl(i) || V(i.defaultBlock)) return !0;
                                for (var a = r.length - 1; 0 <= a; a--) if (n.is(r[a], i.selector)) return !0;
                            }
                        return !1;
                    })(c);
                },
                closest: function (e) {
                    return (
                        (r = c),
                        (o = e),
                        ve
                            .from(r.selection.getStart(!0))
                            .bind(function (e) {
                                return Tg(
                                    Et.fromDom(e),
                                    function (n) {
                                        return ee(o, function (e) {
                                            return yp(r, n.dom, (t = e)) ? ve.some(t) : ve.none();
                                            var t;
                                        });
                                    },
                                    t
                                );
                            })
                            .getOrNull()
                    );
                    function t(e) {
                        return je(e, Et.fromDom(r.getBody()));
                    }
                    var r, o;
                },
                apply: function (e, t, n) {
                    return Oh(c, e, t, n);
                },
                remove: function (e, t, n, r) {
                    return Up(c, e, t, n, r);
                },
                toggle: function (e, t, n) {
                    var r,
                        o = e,
                        i = t,
                        a = n,
                        u = (r = c).formatter.get(o);
                    (!Ig(r, o, i, a) || ("toggle" in u[0] && !u[0].toggle) ? Oh : Up)(r, o, i, a);
                },
                formatChanged: function (e, t, n, r, o) {
                    return qp(c, e, t, n, r, o);
                },
            },
            editor: {
                getContent: function (e, t) {
                    return (
                        (d = c),
                        (m = e),
                        (g = t),
                        ve.from(d.getBody()).fold(J("tree" === m.format ? new jd("body", 11) : ""), function (e) {
                            return (
                                (t = d),
                                (r = e),
                                (o = g),
                                (c = _e(_e({}, (n = m)), { format: o, get: !0, getInner: !0 })),
                                (l = n.no_events ? c : t.fire("BeforeGetContent", c)),
                                (f =
                                    "raw" === l.format
                                        ? Nt.trim(Eo(em(r, t.serializer.getTempAttrs()).innerHTML))
                                        : "text" === l.format
                                        ? t.dom.isEmpty(r)
                                            ? ""
                                            : Eo(r.innerText || r.textContent)
                                        : "tree" === l.format
                                        ? t.serializer.serialize(r, l)
                                        : ((a = (i = t).serializer.serialize(r, l)), (u = ks(i)), (s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$")), a.replace(s, ""))),
                                T(["text", "tree"], l.format) || Co(Et.fromDom(r)) ? (l.content = f) : (l.content = Nt.trim(f)),
                                (l.no_events ? l : t.fire("GetContent", l)).content
                            );
                            var t, n, r, o, i, a, u, s, c, l, f;
                        })
                    );
                    var d, m, g;
                },
                setContent: function (e, t) {
                    return Rg(c, e, t);
                },
                insertContent: function (e, t) {
                    return kg(c, e, t);
                },
                addVisual: function (e) {
                    var i,
                        t = e,
                        a = (i = c).dom,
                        n = V(t) ? t : i.getBody();
                    b(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")),
                        Y(a.select("table,a", n), function (e) {
                            switch (e.nodeName) {
                                case "TABLE":
                                    var t = i.getParam("visual_table_class", "mce-item-table", "string"),
                                        n = a.getAttrib(e, "border");
                                    (n && "0" !== n) || !i.hasVisual ? a.removeClass(e, t) : a.addClass(e, t);
                                    break;
                                case "A":
                                    var r, o;
                                    a.getAttrib(e, "href") || ((r = a.getAttrib(e, "name") || e.id), (o = i.getParam("visual_anchor_class", "mce-item-anchor", "string")), r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o));
                            }
                        }),
                        i.fire("VisualAid", { element: t, hasVisual: i.hasVisual });
                },
            },
            selection: {
                getContent: function (e, t) {
                    return (function (e, t, n) {
                        var r,
                            o = ((r = t), _e(_e({}, (n = void 0 === n ? {} : n)), { format: r, get: !0, selection: !0 })),
                            i = e.fire("BeforeGetContent", o);
                        if (i.isDefaultPrevented()) return e.fire("GetContent", i), i.content;
                        if ("text" === i.format)
                            return (
                                (m = e),
                                ve
                                    .from(m.selection.getRng())
                                    .map(function (e) {
                                        var t = ve.from(m.dom.getParent(e.commonAncestorContainer, m.dom.isBlock)),
                                            n = m.getBody(),
                                            r = t
                                                .map(function (e) {
                                                    return e.nodeName;
                                                })
                                                .getOr("div")
                                                .toLowerCase(),
                                            o = xt.browser.isIE() && "pre" !== r,
                                            i = m.dom.add(n, r, { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, e.cloneContents()),
                                            a = oh(i, o),
                                            u = Eo(i.textContent);
                                        if ((m.dom.remove(i), rh(u, 0) || rh(u, u.length - 1))) {
                                            var s = oh(t.getOr(n), o),
                                                c = s.indexOf(a);
                                            return -1 === c ? a : (rh(s, c - 1) ? " " : "") + a + (rh(s, c + a.length) ? " " : "");
                                        }
                                        return a;
                                    })
                                    .getOr("")
                            );
                        i.getInner = !0;
                        var a,
                            u,
                            s,
                            c,
                            l,
                            f,
                            d,
                            m,
                            g =
                                ((u = i),
                                (s = (a = e).selection.getRng()),
                                (c = a.dom.create("body")),
                                (l = a.selection.getSel()),
                                (f = Ed(a, Al(l))),
                                (d = u.contextual ? nh(Et.fromDom(a.getBody()), f).dom : s.cloneContents()) && c.appendChild(d),
                                a.selection.serializer.serialize(c, u));
                        return "tree" === i.format ? g : ((i.content = e.selection.isCollapsed() ? "" : g), e.fire("GetContent", i), i.content);
                    })(c, e, t);
                },
            },
            raw: {
                getModel: function () {
                    return ve.none();
                },
            },
        };
    }
    function hh(e) {
        return Ee(e.plugins, "rtc");
    }
    function vh(e) {
        var u = e;
        return ue(e.plugins, "rtc")
            .bind(function (e) {
                return ve.from(e.setup);
            })
            .fold(
                function () {
                    return (u.rtcInstance = ph(e)), ve.none();
                },
                function (e) {
                    var t, n;
                    return (
                        (u.rtcInstance =
                            ((t = J(null)),
                            (n = J("")),
                            {
                                undoManager: { beforeChange: te, add: t, undo: t, redo: t, clear: te, reset: te, hasUndo: D, hasRedo: D, transact: t, ignore: te, extra: te },
                                formatter: { match: D, matchAll: J([]), matchNode: J(void 0), canApply: D, closest: n, apply: te, remove: te, toggle: te, formatChanged: J({ unbind: te }) },
                                editor: { getContent: n, setContent: n, insertContent: te, addVisual: te },
                                selection: { getContent: n },
                                raw: { getModel: J(ve.none()) },
                            })),
                        ve.some(function () {
                            return e().then(function (e) {
                                return (
                                    (u.rtcInstance =
                                        ((i = e.undoManager),
                                        (a = e.formatter),
                                        (n = e.editor),
                                        (r = e.selection),
                                        (t = e.raw),
                                        {
                                            undoManager: {
                                                beforeChange: i.beforeChange,
                                                add: i.add,
                                                undo: i.undo,
                                                redo: i.redo,
                                                clear: i.clear,
                                                reset: i.reset,
                                                hasUndo: i.hasUndo,
                                                hasRedo: i.hasRedo,
                                                transact: function (e, t, n) {
                                                    return i.transact(n);
                                                },
                                                ignore: function (e, t) {
                                                    return i.ignore(t);
                                                },
                                                extra: function (e, t, n, r) {
                                                    return i.extra(n, r);
                                                },
                                            },
                                            formatter: {
                                                match: function (e, t, n, r) {
                                                    return a.match(e, o(t), r);
                                                },
                                                matchAll: a.matchAll,
                                                matchNode: a.matchNode,
                                                canApply: function (e) {
                                                    return a.canApply(e);
                                                },
                                                closest: function (e) {
                                                    return a.closest(e);
                                                },
                                                apply: function (e, t, n) {
                                                    return a.apply(e, o(t));
                                                },
                                                remove: function (e, t, n, r) {
                                                    return a.remove(e, o(t));
                                                },
                                                toggle: function (e, t, n) {
                                                    return a.toggle(e, o(t));
                                                },
                                                formatChanged: function (e, t, n, r, o) {
                                                    return a.formatChanged(t, n, r, o);
                                                },
                                            },
                                            editor: {
                                                getContent: function (e, t) {
                                                    return n.getContent(e);
                                                },
                                                setContent: function (e, t) {
                                                    return n.setContent(e, t);
                                                },
                                                insertContent: function (e, t) {
                                                    return n.insertContent(e);
                                                },
                                                addVisual: n.addVisual,
                                            },
                                            selection: {
                                                getContent: function (e, t) {
                                                    return r.getContent(t);
                                                },
                                            },
                                            raw: {
                                                getModel: function () {
                                                    return ve.some(t.getRawModel());
                                                },
                                            },
                                        })),
                                    e.rtc.isRemote
                                );
                                function o(e) {
                                    return h(e) ? e : {};
                                }
                                var i, a, n, r, t;
                            });
                        })
                    );
                }
            );
    }
    function bh(e) {
        return e.rtcInstance || ph(e);
    }
    function yh(e) {
        var t = e.rtcInstance;
        if (t) return t;
        throw new Error("Failed to get RTC instance not yet initialized.");
    }
    function Ch(e) {
        return 0 === e.dom.length ? (In(e), ve.none()) : ve.some(e);
    }
    function xh(e, t, u, s) {
        e.bind(function (a) {
            return (
                (s ? jm : Hm)(a.dom, s ? a.dom.length : 0),
                t.filter(An).map(function (e) {
                    var t = u,
                        n = s,
                        r = a.dom,
                        o = e.dom,
                        i = (n ? r : o).length;
                    n ? (Vm(r, o, !1, !n), t.setStart(o, i)) : (Vm(o, r, !1, !n), t.setEnd(o, i));
                })
            );
        }).orThunk(function () {
            var e = s;
            return t
                .filter(function (e) {
                    return Hl.isBookmarkNode(e.dom);
                })
                .bind(e ? Pt : Bt)
                .or(t)
                .filter(An)
                .map(function (e) {
                    var n,
                        r = s;
                    Ot((n = e)).each(function (e) {
                        var t = n.dom;
                        r && Bm(e, cs(t, 0)) ? Hm(t, 0) : !r && Pm(e, cs(t, t.length)) && jm(t, t.length);
                    });
                });
        });
    }
    function wh(e, t, n) {
        var r,
            o = ((r = t), _e(_e({ format: "html" }, (n = void 0 === n ? {} : n)), { set: !0, selection: !0, content: r })),
            i = o;
        if (!o.no_events) {
            var a = e.fire("BeforeSetContent", o);
            if (a.isDefaultPrevented()) return void e.fire("SetContent", a);
            i = a;
        }
        i.content = (function (e, t) {
            if ("raw" === t.format) return t.content;
            var n = e.selection.getRng(),
                r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                o = r ? { context: r.nodeName.toLowerCase() } : {},
                i = e.parser.parse(t.content, _e(_e({ isRootContent: !0, forced_root_block: !1 }, o), t));
            return rm({ validate: e.validate }, e.schema).serialize(i);
        })(e, i);
        var u = e.selection.getRng();
        !(function (e, t) {
            var n = ve.from(t.firstChild).map(Et.fromDom),
                r = ve.from(t.lastChild).map(Et.fromDom);
            e.deleteContents(), e.insertNode(t);
            var o = n.bind(Bt).filter(An).bind(Ch),
                i = r.bind(Pt).filter(An).bind(Ch);
            xh(o, n, e, !0), xh(i, r, e, !1), e.collapse(!1);
        })(u, u.createContextualFragment(i.content)),
            e.selection.setRng(u),
            nd(e, u),
            i.no_events || e.fire("SetContent", i);
    }
    function Sh(e, t, n) {
        var r;
        e &&
            Ee(e, t) &&
            (0 ===
            (r = U(e[t], function (e) {
                return e !== n;
            })).length
                ? delete e[t]
                : (e[t] = r));
    }
    (Kg = function (e) {
        var t,
            n = e.selection.getRng(),
            r = on(["pre"]);
        n.collapsed ||
            ((t = e.selection.getSelectedBlocks()),
            Np(
                Sp(Sp(t, r), function (e) {
                    return r(e.previousSibling) && -1 !== de(t, e.previousSibling);
                }),
                function (e) {
                    var t,
                        n = e.previousSibling;
                    Ya((t = e)).remove(), Ya(n).append("<br><br>").append(t.childNodes);
                }
            ));
    }),
        wp["pre"] || (wp.pre = []),
        wp.pre.push(Kg);
    var Nh = Nt.each,
        Eh = function (e, t, n) {
            Nh(e.childNodes, function (e) {
                Ep(e) && (t(e) && n(e), e.hasChildNodes() && Eh(e, t, n));
            });
        },
        kh = ir([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
        _h = /^(src|href|style)$/,
        Ah = Nt.each,
        Rh = ul,
        Dh = Nt.each,
        Th = Nt.each,
        Oh = function (S, N, E, r) {
            function k(n, e) {
                var t;
                y((e = void 0 === e ? A : e).onformat) && e.onformat(n, e, E, r),
                    Th(e.styles, function (e, t) {
                        u.setStyle(n, t, al(e, E));
                    }),
                    !e.styles || ((t = u.getAttrib(n, "style")) && u.setAttrib(n, "data-mce-style", t)),
                    Th(e.attributes, function (e, t) {
                        u.setAttrib(n, t, al(e, E));
                    }),
                    Th(e.classes, function (e) {
                        (e = al(e, E)), u.hasClass(n, e) || u.addClass(n, e);
                    });
            }
            function g(e, t) {
                var n = !1;
                return (
                    Th(e, function (e) {
                        return !!gl(e) && ((V(e.collapsed) && e.collapsed !== a) || !u.is(t, e.selector) || Vc(t) ? void 0 : (k(t, e), !(n = !0)));
                    }),
                    n
                );
            }
            function o(x, e, l) {
                var w = [],
                    f = !0,
                    d = A.inline || A.block,
                    m = (function (e) {
                        if (X(e)) {
                            var t = u.create(e);
                            return k(t), t;
                        }
                        return null;
                    })(d);
                _l(x, e, function (e) {
                    var s,
                        c = function (e) {
                            var t = !1,
                                n = f,
                                r = e.nodeName.toLowerCase(),
                                o = e.parentNode,
                                i = o.nodeName.toLowerCase();
                            if (
                                (Hn(e) && x.getContentEditable(e) && ((n = f), (f = "true" === x.getContentEditable(e)), (t = !0)),
                                Kn(e) &&
                                    !(function (e, t, n, r) {
                                        if (e.getParam("format_empty_lines", !1, "boolean") && pl(t)) {
                                            var o = no(e.schema),
                                                i =
                                                    ((a = Et.fromDom(n)),
                                                    (s = function (e) {
                                                        return Vc(e.dom);
                                                    }),
                                                    ((c = (u = a).dom).parentNode
                                                        ? kr(Et.fromDom(c.parentNode), function (e) {
                                                              return !je(u, e) && s(e);
                                                          })
                                                        : ve.none()
                                                    ).isSome());
                                            return se(o, r) && Kr(Et.fromDom(n.parentNode), !1) && !i;
                                        }
                                        var a, u, s, c;
                                    })(S, A, e, i))
                            )
                                return (s = null), void (ml(A) && x.remove(e));
                            if (ml(A) && A.wrapper && yp(S, e, N, E)) s = null;
                            else {
                                if (f && !t && ml(A) && !A.wrapper && ol(S, r) && il(S, i, d)) {
                                    var a = x.rename(e, d);
                                    return k(a), w.push(a), void (s = null);
                                }
                                if (gl(A)) {
                                    var u = g(_, e);
                                    if ((!u && V(o) && hl(A) && (u = g(_, o)), !pl(A) || u)) return void (s = null);
                                }
                                !f || t || !il(S, d, r) || !il(S, i, d) || (!l && Vn(e) && No(e.data)) || Vc(e) || (pl(A) && x.isBlock(e))
                                    ? ((s = null), Y(xe(e.childNodes), c), t && (f = n), (s = null))
                                    : (s || ((s = x.clone(m, !1)), e.parentNode.insertBefore(s, e), w.push(s)), s.appendChild(e));
                            }
                        };
                    Y(e, c);
                }),
                    !0 === A.links &&
                        Y(w, function (e) {
                            var t = function (e) {
                                "A" === e.nodeName && k(e, A), Y(xe(e.childNodes), t);
                            };
                            t(e);
                        }),
                    Y(w, function (e) {
                        var n,
                            t,
                            r,
                            o,
                            i,
                            a,
                            u,
                            s,
                            c,
                            l,
                            f,
                            d,
                            m,
                            g,
                            p,
                            h,
                            v,
                            b,
                            y =
                                ((n = 0),
                                Y(e.childNodes, function (e) {
                                    var t;
                                    (V((t = e)) && Vn(t) && 0 === t.length) || Qc(e) || n++;
                                }),
                                n);
                        function C(e) {
                            var t;
                            1 === e.nodeType &&
                                e.parentNode &&
                                1 === e.parentNode.nodeType &&
                                ((t = ll(m, e.parentNode)), m.getStyle(e, "color") && t ? m.setStyle(e, "text-decoration", t) : m.getStyle(e, "text-decoration") === t && m.setStyle(e, "text-decoration", null));
                        }
                        (!(1 < w.length) && x.isBlock(e)) || 0 !== y
                            ? (pl(A) || (ml(A) && A.wrapper)) &&
                              (A.exact ||
                                  1 !== y ||
                                  (e = M((d = e).childNodes, zp)
                                      .filter(function (e) {
                                          return Pg(x, e, A);
                                      })
                                      .map(function (e) {
                                          var t = x.clone(e, !1);
                                          return k(t), x.replace(t, d, !0), x.remove(e, !0), t;
                                      })
                                      .getOr(d)),
                              (h = S),
                              (v = E),
                              (b = e),
                              Dh(_, function (t) {
                                  var r, e, n;
                                  pl(t) &&
                                      Dh(h.dom.select(t.inline, b), function (e) {
                                          Ep(e) && Fp(h, t, v, e, t.exact ? e : null);
                                      }),
                                      (r = h.dom),
                                      (e = t).clear_child_styles &&
                                          ((n = e.links ? "*:not(a)" : "*"),
                                          Nh(r.select(n, b), function (n) {
                                              Ep(n) &&
                                                  Nh(e.styles, function (e, t) {
                                                      r.setStyle(n, t, "");
                                                  });
                                          }));
                              }),
                              (s = A),
                              (yp((u = S), (f = e).parentNode, (c = N), (l = E)) && Fp(u, s, l, f)) ||
                                  (s.merge_with_parents &&
                                      u.dom.getParent(f.parentNode, function (e) {
                                          if (yp(u, e, c, l)) return Fp(u, s, l, f), !0;
                                      })),
                              (a = e),
                              (i = A).styles && i.styles.backgroundColor && Eh(a, Rp(x, "fontSize"), Dp(x, "backgroundColor", al(i.styles.backgroundColor, E))),
                              (m = x),
                              (p = e),
                              (g = A).styles && (g.styles.color || g.styles.textDecoration) && (Nt.walk(p, C, "childNodes"), C(p)),
                              (t = x),
                              (o = e),
                              !pl((r = A)) || ("sub" !== r.inline && "sup" !== r.inline) || (Eh(o, Rp(t, "fontSize"), Dp(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)),
                              Ap(x, A, 0, e))
                            : x.remove(e, !0);
                    });
            }
            var e,
                t,
                n,
                i,
                _ = S.formatter.get(N),
                A = _[0],
                a = !r && S.selection.isCollapsed(),
                u = S.dom,
                s = S.selection;
            if ("false" !== u.getContentEditable(s.getNode()))
                A &&
                    (r
                        ? tl(r)
                            ? g(_, r) || ((e = u.createRng()).setStartBefore(r), e.setEndAfter(r), o(u, kl(S, e, _), !0))
                            : o(u, r, !0)
                        : a && pl(A) && !Dl(S).length
                        ? (function (e, t, n) {
                              var r,
                                  o = e.selection,
                                  i = o.getRng(),
                                  a = i.startOffset,
                                  u = i.startContainer.nodeValue,
                                  s = qc(e.getBody(), o.getStart());
                              s && (r = Fg(s));
                              var c,
                                  l,
                                  f,
                                  d,
                                  m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                              u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1))
                                  ? ((c = o.getBookmark()), i.collapse(!0), (l = Pf(kl(e, i, e.formatter.get(t)))), e.formatter.apply(t, n, l), o.moveToBookmark(c))
                                  : ((s && r.nodeValue === Cp) || ((f = e.getDoc()), (d = Ug(!0).dom), (r = (s = f.importNode(d, !0)).firstChild), i.insertNode(s), (a = 1)), e.formatter.apply(t, n, s), o.setCursorLocation(r, a));
                          })(S, N, E)
                        : ((t = s.getNode()),
                          (n = _[0]),
                          S.settings.forced_root_block || !n.defaultBlock || u.getParent(t, u.isBlock) || Oh(S, n.defaultBlock),
                          s.setRng(Cg(s.getRng())),
                          Il(s, !0, function () {
                              Ll(S, function (e, t) {
                                  var n = t ? e : kl(S, e, _);
                                  o(u, n, !1);
                              });
                          }),
                          nl(u, s, s.getRng()),
                          S.nodeChanged()),
                    (i = S),
                    Np(wp[N], function (e) {
                        e(i);
                    })),
                    xf(S, N, r, E);
            else {
                r = s.getNode();
                for (var c = 0, l = _.length; c < l; c++) {
                    var f = _[c];
                    if (f.ceFalseOverride && gl(f) && u.is(r, f.selector)) {
                        k(r, f);
                        break;
                    }
                }
                xf(S, N, r, E);
            }
        },
        Bh = function (e) {
            return e.selection.getStart();
        },
        Ph = function (i, a, e) {
            var u = Vp(i, a);
            ne(e, function (e, o) {
                function t(e) {
                    var t,
                        n = jp(i, u, o, e.similar, Hp(e) ? e.vars : void 0),
                        r = n.isSome();
                    e.state.get() !== r &&
                        (e.state.set(r),
                        (t = n.getOr(a)),
                        Hp(e)
                            ? e.callback(r, { node: t, format: o, parents: u })
                            : Y(e.callbacks, function (e) {
                                  return e(r, { node: t, format: o, parents: u });
                              }));
                }
                Y([e.withSimilar, e.withoutSimilar], t), Y(e.withVars, t);
            });
        },
        Lh = Re(function () {
            return document.implementation.createHTMLDocument("undo");
        });
    function Ih(e) {
        return e.select;
    }
    function Mh(e) {
        return e && e.ownerDocument && Ve(Et.fromDom(e.ownerDocument), Et.fromDom(e));
    }
    function Fh(a, u, e, s) {
        function t(e, t) {
            return wh(s, e, t);
        }
        function n() {
            var e = c(),
                t = null == e ? void 0 : e.anchorNode,
                n = null == e ? void 0 : e.focusNode;
            if (!e || !t || !n || rn(t) || rn(n)) return !0;
            var r = a.createRng();
            r.setStart(t, e.anchorOffset), r.collapse(!0);
            var o = a.createRng();
            return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0;
        }
        function r(e) {
            var t = p();
            t.collapse(!!e), h(t);
        }
        function c() {
            return u.getSelection ? u.getSelection() : u.document.selection;
        }
        var l,
            f,
            o,
            i,
            d,
            m,
            g = function (e, t) {
                return (
                    d ||
                        ((d = {}),
                        (m = {}),
                        i.on("NodeChange", function (e) {
                            var n = e.element,
                                r = x(n),
                                o = {};
                            Nt.each(d, function (e, n) {
                                C(n, r).each(function (t) {
                                    m[n] ||
                                        (Y(e, function (e) {
                                            e(!0, { node: t, selector: n, parents: r });
                                        }),
                                        (m[n] = e)),
                                        (o[n] = e);
                                });
                            }),
                                Nt.each(m, function (e, t) {
                                    o[t] ||
                                        (delete m[t],
                                        Nt.each(e, function (e) {
                                            e(!1, { node: n, selector: t, parents: r });
                                        }));
                                });
                        })),
                    d[e] || (d[e] = []),
                    d[e].push(t),
                    C(e, x(i.selection.getStart())).each(function () {
                        m[e] = d[e];
                    }),
                    {
                        unbind: function () {
                            Sh(d, e, t), Sh(m, e, t);
                        },
                    }
                );
            },
            p = function () {
                function e(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n);
                    } catch (e) {
                        return -1;
                    }
                }
                var t,
                    n,
                    r,
                    o = u.document;
                if (void 0 !== s.bookmark && !1 === Cd(s)) {
                    var i = md(s);
                    if (i.isSome())
                        return i
                            .map(function (e) {
                                return Ed(s, [e])[0];
                            })
                            .getOr(o.createRange());
                }
                try {
                    (t = c()) && !rn(t.anchorNode) && ((n = 0 < t.rangeCount ? t.getRangeAt(0) : (t.createRange ? t : o).createRange()), (n = Ed(s, [n])[0]));
                } catch (e) {}
                return (
                    (n = n || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === n.startContainer.nodeType && n.collapsed && ((r = a.getRoot()), n.setStart(r, 0), n.setEnd(r, 0)),
                    l && f && (0 === e(n.START_TO_START, n, l) && 0 === e(n.END_TO_END, n, l) ? (n = f) : (f = l = null)),
                    n
                );
            },
            h = function (e, t) {
                var n;
                if ((r = e) && (Ih(r) || (Mh(r.startContainer) && Mh(r.endContainer)))) {
                    var r,
                        o = Ih(e) ? e : null;
                    if (o) {
                        f = null;
                        try {
                            o.select();
                        } catch (e) {}
                    } else {
                        var i = c();
                        if (((e = s.fire("SetSelectionRange", { range: e, forward: t }).range), i)) {
                            f = e;
                            try {
                                i.removeAllRanges(), i.addRange(e);
                            } catch (e) {}
                            !1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), (l = 0 < i.rangeCount ? i.getRangeAt(0) : null);
                        }
                        e.collapsed ||
                            e.startContainer !== e.endContainer ||
                            !i.setBaseAndExtent ||
                            xt.ie ||
                            (e.endOffset - e.startOffset < 2 &&
                                e.startContainer.hasChildNodes() &&
                                (n = e.startContainer.childNodes[e.startOffset]) &&
                                "IMG" === n.tagName &&
                                (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), (i.anchorNode === e.startContainer && i.focusNode === e.endContainer) || i.setBaseAndExtent(n, 0, n, 1))),
                            s.fire("AfterSetSelectionRange", { range: e, forward: t });
                    }
                }
            },
            v = {
                bookmarkManager: null,
                controlSelection: null,
                dom: (o = a),
                win: u,
                serializer: e,
                editor: (i = s),
                collapse: r,
                setCursorLocation: function (e, t) {
                    var n = a.createRng();
                    V(e) && V(t) ? (n.setStart(e, t), n.setEnd(e, t), h(n), r(!1)) : (Bl(a, n, s.getBody(), !0), h(n));
                },
                getContent: function (e) {
                    return (n = (t = void 0 === (t = e) ? {} : t).format || "html"), (r = t), yh(s).selection.getContent(n, r);
                    var t, n, r;
                },
                setContent: t,
                getBookmark: function (e, t) {
                    return b.getBookmark(e, t);
                },
                moveToBookmark: function (e) {
                    return b.moveToBookmark(e);
                },
                select: function (e, t) {
                    var r = a,
                        o = t;
                    return (
                        ve
                            .from(e)
                            .map(function (e) {
                                var t = r.nodeIndex(e),
                                    n = r.createRng();
                                return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Bl(r, n, e, !0), Bl(r, n, e, !1)), n;
                            })
                            .each(h),
                        e
                    );
                },
                isCollapsed: function () {
                    var e = p(),
                        t = c();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
                },
                isForward: n,
                setNode: function (e) {
                    return t(a.getOuterHTML(e)), e;
                },
                getNode: function () {
                    return (function (e, t) {
                        if (!t) return e;
                        var n = t.startContainer,
                            r = t.endContainer,
                            o = t.startOffset,
                            i = t.endOffset,
                            a = t.commonAncestorContainer;
                        return !t.collapsed &&
                            (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]),
                            3 === n.nodeType && 3 === r.nodeType && ((n = n.length === o ? Nd(n.nextSibling, !0) : n.parentNode), (r = 0 === i ? Nd(r.previousSibling, !1) : r.parentNode), n && n === r))
                            ? n
                            : a && 3 === a.nodeType
                            ? a.parentNode
                            : a;
                    })(s.getBody(), p());
                },
                getSel: c,
                setRng: h,
                getRng: p,
                getStart: function (e) {
                    return wd(s.getBody(), p(), e);
                },
                getEnd: function (e) {
                    return Sd(s.getBody(), p(), e);
                },
                getSelectedBlocks: function (e, t) {
                    return (function (e, t, n, r) {
                        var o = [],
                            i = e.getRoot();
                        if (((n = e.getParent(n || wd(i, t, t.collapsed), e.isBlock)), (r = e.getParent(r || Sd(i, t, t.collapsed), e.isBlock)), n && n !== i && o.push(n), n && r && n !== r))
                            for (var a, u = new Dr(n, i); (a = u.next()) && a !== r; ) e.isBlock(a) && o.push(a);
                        return r && n !== r && r !== i && o.push(r), o;
                    })(a, p(), e, t);
                },
                normalize: function () {
                    var e = p();
                    if (1 < Al(c()).length || !Pl(s)) return e;
                    var t = Of(a, e);
                    return (
                        t.each(function (e) {
                            h(e, n());
                        }),
                        t.getOr(e)
                    );
                },
                selectorChanged: function (e, t) {
                    return g(e, t), v;
                },
                selectorChangedWithUnbind: g,
                getScrollContainer: function () {
                    for (var e, t = a.getRoot(); t && "BODY" !== t.nodeName; ) {
                        if (t.scrollHeight > t.clientHeight) {
                            e = t;
                            break;
                        }
                        t = t.parentNode;
                    }
                    return e;
                },
                scrollIntoView: function (e, t) {
                    V(e) ? (s.inline ? Zf : td)(s, e, t) : nd(s, p(), t);
                },
                placeCaretAt: function (e, t) {
                    return h(Ef(e, t, s.getDoc()));
                },
                getBoundingClientRect: function () {
                    var e = p();
                    return e.collapsed ? cs.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
                },
                destroy: function () {
                    (u = l = f = null), y.destroy();
                },
            },
            b = Hl(v),
            y = Sf(v, s);
        function C(t, e) {
            return M(e, function (e) {
                return o.is(e, t);
            });
        }
        function x(e) {
            return o.getParents(e, null, o.getRoot());
        }
        return (v.bookmarkManager = b), (v.controlSelection = y), v;
    }
    function Uh(e, t) {
        var n,
            r,
            a,
            u,
            o = ao();
        t.convert_fonts_to_spans &&
            ((r = e),
            (a = o),
            (u = Nt.explode(t.font_size_legacy_values)),
            r.addNodeFilter("font", function (e) {
                Y(e, function (e) {
                    var t,
                        n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r),
                        o && (n["font-family"] = o),
                        i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]),
                        (e.name = "span"),
                        e.attr("style", a.serialize(n)),
                        (t = e),
                        Y(["color", "face", "size"], function (e) {
                            t.attr(e, null);
                        });
                });
            })),
            (n = o),
            e.addNodeFilter("strike", function (e) {
                Y(e, function (e) {
                    var t = n.parse(e.attr("style"));
                    (t["text-decoration"] = "line-through"), (e.name = "span"), e.attr("style", n.serialize(t));
                });
            });
    }
    function zh(e) {
        var t,
            n = decodeURIComponent(e).split(","),
            r = /data:([^;]+)/.exec(n[0]);
        return { type: (t = r ? r[1] : t), data: n[1] };
    }
    function Hh(e, t) {
        var n;
        try {
            n = atob(t);
        } catch (e) {
            return ve.none();
        }
        for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) r[o] = n.charCodeAt(o);
        return ve.some(new Blob([r], { type: e }));
    }
    function jh(e) {
        return 0 === e.indexOf("blob:")
            ? ((o = e),
              new _r(function (e, t) {
                  function n() {
                      t("Cannot convert " + o + " to Blob. Resource might not exist or is inaccessible.");
                  }
                  try {
                      var r = new XMLHttpRequest();
                      r.open("GET", o, !0),
                          (r.responseType = "blob"),
                          (r.onload = function () {
                              200 === r.status ? e(r.response) : n();
                          }),
                          (r.onerror = n),
                          r.send();
                  } catch (e) {
                      n();
                  }
              }))
            : 0 === e.indexOf("data:")
            ? ((n = e),
              new _r(function (e) {
                  var t = zh(n);
                  Hh(t.type, t.data).fold(function () {
                      return e(new Blob([]));
                  }, e);
              }))
            : null;
        var o, n;
    }
    function Vh(e) {
        return (e || "blobid") + Yh++;
    }
    function qh(r, d) {
        var o = {};
        return {
            findAll: function (e, n) {
                n = n || w;
                var t = A(
                    U(e ? xe(e.getElementsByTagName("img")) : [], function (e) {
                        var t = e.src;
                        return (
                            xt.fileApi &&
                            !e.hasAttribute("data-mce-bogus") &&
                            !e.hasAttribute("data-mce-placeholder") &&
                            t &&
                            t !== xt.transparentSrc &&
                            (0 === t.indexOf("blob:") ? !r.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                        );
                    }),
                    function (f) {
                        if (void 0 !== o[f.src])
                            return new _r(function (t) {
                                o[f.src].then(function (e) {
                                    return "string" == typeof e ? e : void t({ image: f, blobInfo: e.blobInfo });
                                });
                            });
                        var e = new _r(function (e, t) {
                            var r, o, i, n, a, u, s, c, l;
                            (r = d),
                                (i = e),
                                (n = t),
                                0 !== (o = f).src.indexOf("blob:")
                                    ? ((u = (a = zh(o.src)).data),
                                      (s = a.type),
                                      (c = u),
                                      (l = r.getByData(c, s))
                                          ? i({ image: o, blobInfo: l })
                                          : jh(o.src).then(
                                                function (e) {
                                                    (l = r.create(Vh(), e, c)), r.add(l), i({ image: o, blobInfo: l });
                                                },
                                                function (e) {
                                                    n(e);
                                                }
                                            ))
                                    : (l = r.getByUri(o.src))
                                    ? i({ image: o, blobInfo: l })
                                    : jh(o.src).then(
                                          function (t) {
                                              var n = t;
                                              new _r(function (e) {
                                                  var t = new FileReader();
                                                  (t.onloadend = function () {
                                                      e(t.result);
                                                  }),
                                                      t.readAsDataURL(n);
                                              }).then(function (e) {
                                                  (c = zh(e).data), (l = r.create(Vh(), t, c)), r.add(l), i({ image: o, blobInfo: l });
                                              });
                                          },
                                          function (e) {
                                              n(e);
                                          }
                                      );
                        })
                            .then(function (e) {
                                return delete o[e.image.src], e;
                            })
                            .catch(function (e) {
                                return delete o[f.src], e;
                            });
                        return (o[f.src] = e);
                    }
                );
                return _r.all(t);
            },
        };
    }
    function $h(e, t) {
        return e.replace(t.re, function (e) {
            return ue(t.uris, e).getOr(e);
        });
    }
    function Wh(e, t, n, r) {
        (e.padd_empty_with_br || t.insert) && n[r.name] ? (r.empty().append(new jd("br", 1)).shortEnded = !0) : (r.empty().append(new jd("#text", 3)).value = wo);
    }
    function Kh(n, e, t, r) {
        return r.isEmpty(e, t, function (e) {
            return (t = n.getElementRule(e.name)) && t.paddEmpty;
            var t;
        });
    }
    function Xh(e, p) {
        var t,
            o,
            i,
            h = e.schema;
        function n(t) {
            var e,
                n,
                r = t.attr("src");
            (e = t).attr("src") === xt.transparentSrc ||
                V(e.attr("data-mce-placeholder")) ||
                V(t.attr("data-mce-bogus")) ||
                ((n = /data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(r)) ? ve.some({ type: n[1], data: decodeURIComponent(n[2]) }) : ve.none())
                    .filter(function () {
                        return (function (e, t) {
                            if (t.images_dataimg_filter) {
                                var n = new Image();
                                return (
                                    (n.src = e.attr("src")),
                                    ne(e.attributes.map, function (e, t) {
                                        n.setAttribute(t, e);
                                    }),
                                    t.images_dataimg_filter(n)
                                );
                            }
                            return !0;
                        })(t, o);
                    })
                    .bind(function (e) {
                        var t = e.type,
                            n = e.data;
                        return ve.from(i.getByData(n, t)).orThunk(function () {
                            return Hh(t, n).map(function (e) {
                                var t = i.create(Vh(), e, n);
                                return i.add(t), t;
                            });
                        });
                    })
                    .each(function (e) {
                        t.attr("src", e.blobUri());
                    });
        }
        p.remove_trailing_brs &&
            e.addNodeFilter("br", function (e, t, n) {
                var r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f = e.length,
                    d = Nt.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(),
                    g = h.getWhiteSpaceElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (((i = (o = e[r]).parent), d[o.parent.name] && o === i.lastChild)) {
                        for (u = o.prev; u; ) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                "br" === s && (o = null);
                                break;
                            }
                            u = u.prev;
                        }
                        o && (o.remove(), Kh(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && Wh(p, n, d, i)));
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name]; ) i = i.parent;
                        a === i && !0 !== p.padd_empty_with_br && (((l = new jd("#text", 3)).value = wo), o.replace(l));
                    }
            }),
            e.addAttributeFilter("href", function (e) {
                var t,
                    n,
                    r = e.length;
                if (!p.allow_unsafe_link_target)
                    for (; r--; ) {
                        var o = e[r];
                        "a" === o.name &&
                            "_blank" === o.attr("target") &&
                            o.attr(
                                "rel",
                                ((n = void 0),
                                (n = (t = o.attr("rel")) ? Nt.trim(t) : ""),
                                /\b(noopener)\b/g.test(n)
                                    ? n
                                    : n
                                          .split(" ")
                                          .filter(function (e) {
                                              return 0 < e.length;
                                          })
                                          .concat(["noopener"])
                                          .sort()
                                          .join(" "))
                            );
                    }
            }),
            p.allow_html_in_named_anchor ||
                e.addAttributeFilter("id,name", function (e) {
                    for (var t, n, r, o, i = e.length; i--; ) if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href")) for (r = o.parent, t = o.lastChild; (n = t.prev), r.insert(t, o), (t = n); );
                }),
            p.fix_list_elements &&
                e.addNodeFilter("ul,ol", function (e) {
                    for (var t, n, r, o = e.length; o--; )
                        ("ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name) || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new jd("li", 1)).attr("style", "list-style-type: none"), n.wrap(t)));
                }),
            p.validate &&
                h.getValidClasses() &&
                e.addAttributeFilter("class", function (e) {
                    for (var t = h.getValidClasses(), n = e.length; n--; ) {
                        for (var r = e[n], o = r.attr("class").split(" "), i = "", a = 0; a < o.length; a++) {
                            var u = o[a],
                                s = !1,
                                c = t["*"];
                            c && c[u] && (s = !0), (c = t[r.name]), (s = !(s || !c || !c[u]) || s) && (i && (i += " "), (i += u));
                        }
                        i.length || (i = null), r.attr("class", i);
                    }
                }),
            (t = e),
            (i = (o = p).blob_cache) &&
                t.addAttributeFilter("src", function (e) {
                    return Y(e, n);
                });
    }
    var Yh = 0,
        Gh = function (e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t;
        },
        Jh = Nt.each,
        Qh = Nt.trim,
        Zh = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        ev = { ftp: 21, http: 80, https: 443, mailto: 25 },
        tv = ["img", "video"],
        nv =
            ((rv.parseDataUri = function (e) {
                var t,
                    n = decodeURIComponent(e).split(","),
                    r = /data:([^;]+)/.exec(n[0]);
                return { type: (t = r ? r[1] : t), data: n[1] };
            }),
            (rv.isDomSafe = function (e, t, n) {
                if ((n = void 0 === n ? {} : n).allow_script_urls) return !0;
                var r,
                    o,
                    i,
                    a,
                    u = Zo.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
                try {
                    u = decodeURIComponent(u);
                } catch (e) {
                    u = unescape(u);
                }
                return !(
                    /((java|vb)script|mhtml):/i.test(u) ||
                    ((o = u), (i = t), !(r = n).allow_html_data_urls && (/^data:image\//i.test(o) ? (V((a = r.allow_svg_data_urls)) ? !a : !V(i) || !T(tv, i)) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)))
                );
            }),
            (rv.getDocumentBaseUrl = function (e) {
                var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname;
                return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(t) || (t += "/")), t;
            }),
            (rv.prototype.setPath = function (e) {
                var t = /^(.*?)\/?(\w+)?$/.exec(e);
                (this.path = t[0]), (this.directory = t[1]), (this.file = t[2]), (this.source = ""), this.getURI();
            }),
            (rv.prototype.toRelative = function (e) {
                var t;
                if ("./" === e) return e;
                var n = new rv(e, { base_uri: this });
                if (("mce_host" !== n.host && this.host !== n.host && n.host) || this.port !== n.port || (this.protocol !== n.protocol && "" !== n.protocol)) return n.getURI();
                var r = this.getURI(),
                    o = n.getURI();
                return r === o || ("/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o) ? r : ((t = this.toRelPath(this.path, n.path)), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t);
            }),
            (rv.prototype.toAbsolute = function (e, t) {
                var n = new rv(e, { base_uri: this });
                return n.getURI(t && this.isSameOrigin(n));
            }),
            (rv.prototype.isSameOrigin = function (e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port) return !0;
                    var t = ev[this.protocol];
                    if (t && (this.port || t) == (e.port || t)) return !0;
                }
                return !1;
            }),
            (rv.prototype.toRelPath = function (e, t) {
                var n,
                    r,
                    o = 0,
                    i = "",
                    a = e.substring(0, e.lastIndexOf("/")).split("/"),
                    u = t.split("/");
                if (a.length >= u.length)
                    for (n = 0, r = a.length; n < r; n++)
                        if (n >= u.length || a[n] !== u[n]) {
                            o = n + 1;
                            break;
                        }
                if (a.length < u.length)
                    for (n = 0, r = u.length; n < r; n++)
                        if (n >= a.length || a[n] !== u[n]) {
                            o = n + 1;
                            break;
                        }
                if (1 === o) return t;
                for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
                for (n = o - 1, r = u.length; n < r; n++) i += n !== o - 1 ? "/" + u[n] : u[n];
                return i;
            }),
            (rv.prototype.toAbsPath = function (e, t) {
                var n,
                    r,
                    o = 0,
                    i = [],
                    a = /\/$/.test(t) ? "/" : "",
                    u = e.split("/"),
                    s = t.split("/");
                for (
                    Jh(u, function (e) {
                        e && i.push(e);
                    }),
                        u = i,
                        n = s.length - 1,
                        i = [];
                    0 <= n;
                    n--
                )
                    0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? (0 < o ? o-- : i.push(s[n])) : o++);
                return 0 !== (r = (n = u.length - o) <= 0 ? q(i).join("/") : u.slice(0, n).join("/") + "/" + q(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r;
            }),
            (rv.prototype.getURI = function (e) {
                var t;
                return (
                    void 0 === e && (e = !1),
                    (this.source && !e) ||
                        ((t = ""),
                        e || (this.protocol ? (t += this.protocol + "://") : (t += "//"), this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)),
                        this.path && (t += this.path),
                        this.query && (t += "?" + this.query),
                        this.anchor && (t += "#" + this.anchor),
                        (this.source = t)),
                    this.source
                );
            }),
            rv);
    function rv(e, t) {
        (e = Qh(e)), (this.settings = t || {});
        var n,
            r,
            o,
            i,
            a = this.settings.base_uri,
            u = this;
        /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)
            ? (u.source = e)
            : ((n = 0 === e.indexOf("//")),
              0 !== e.indexOf("/") || n || (e = ((a && a.protocol) || "http") + "://mce_host" + e),
              /^[\w\-]*:?\/\//.test(e) ||
                  ((r = this.settings.base_uri ? this.settings.base_uri.path : new rv(document.location.href).directory),
                  (e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : ((o = /([^#?]*)([#?]?.*)/.exec(e)), ((a && a.protocol) || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2]))),
              (e = e.replace(/@@/g, "(mce_at)")),
              (i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                  e
              )),
              Jh(Zh, function (e, t) {
                  var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
                  u[e] = n;
              }),
              a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), (u.host && "mce_host" !== u.host) || (u.host = a.host), (u.source = "")),
              n && (u.protocol = ""));
    }
    function ov(e, t, n) {
        for (var r = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g, o = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g, i = e.getShortEndedElements(), a = 1, u = n; 0 !== a; )
            for (r.lastIndex = u; ; ) {
                var s = r.exec(t);
                if (null === s) return u;
                if ("!" === s[1]) {
                    u = Ge(s[2], "--") ? sv(t, !1, s.index + "!--".length) : sv(t, !0, s.index + 1);
                    break;
                }
                o.lastIndex = r.lastIndex;
                var c = o.exec(t);
                if (!l(c) && c.index === r.lastIndex) {
                    "/" === s[1] ? --a : Ee(i, s[2]) || (a += 1), (u = r.lastIndex + c[0].length);
                    break;
                }
            }
        return u;
    }
    function iv(q, $) {
        void 0 === $ && ($ = oo()), (q = q || {});
        var W = uv(),
            K = W.createElement("form");
        function n(s, e) {
            void 0 === e && (e = "html");
            for (
                var t,
                    i,
                    n,
                    c,
                    r,
                    o,
                    a,
                    l,
                    u,
                    f,
                    d,
                    m,
                    g,
                    p,
                    h,
                    v,
                    b,
                    y,
                    C,
                    x = s.html,
                    w = 0,
                    S = [],
                    N = 0,
                    E = Zo.decode,
                    k = Nt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),
                    _ = "html" === e ? 0 : 1,
                    A = function (e) {
                        for (var t, n = S.length; n-- && S[n].name !== e; );
                        if (0 <= n) {
                            for (t = S.length - 1; n <= t; t--) (e = S[t]).valid && Q(e.name);
                            S.length = n;
                        }
                    },
                    R = function (e, t) {
                        return G($h(e, s), t);
                    },
                    D = function (e) {
                        "" !== e && (">" === e.charAt(0) && (e = " " + e), q.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), X($h(e, s)));
                    },
                    T = function (e, t) {
                        var n = e || "",
                            r = !Ge(n, "--"),
                            o = sv(x, r, t);
                        return (e = x.substr(t, o - t)), D(r ? n + e : e), o + 1;
                    },
                    O = new RegExp(
                        "<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))",
                        "g"
                    ),
                    B = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                    P = $.getShortEndedElements(),
                    L = q.self_closing_elements || $.getSelfClosingElements(),
                    I = $.getBoolAttrs(),
                    M = q.validate,
                    F = q.remove_internals,
                    U = q.fix_self_closing,
                    z = $.getSpecialElements(),
                    H = x + ">";
                (t = O.exec(H));

            ) {
                var j = t[0];
                if ((w < t.index && R(E(x.substr(w, t.index - w))), (i = t[7]))) A((i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i));
                else if ((i = t[8])) {
                    if (t.index + j.length > x.length) {
                        R(E(x.substr(t.index))), (w = t.index + j.length);
                        continue;
                    }
                    (u = (i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i) in P), U && L[i] && 0 < S.length && S[S.length - 1].name === i && A(i);
                    var V = (function (e, t) {
                        var n = e.exec(t);
                        if (n) {
                            var r = n[1],
                                o = n[2];
                            return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null;
                        }
                        return null;
                    })(B, t[9]);
                    if (null !== V) {
                        if ("all" === V) {
                            (w = ov($, x, O.lastIndex)), (O.lastIndex = w);
                            continue;
                        }
                        d = !1;
                    }
                    if (!M || (f = $.getElementRule(i))) {
                        if (
                            ((d = !0),
                            M && ((p = f.attributes), (h = f.attributePatterns)),
                            (g = t[9])
                                ? ((l = -1 !== g.indexOf("data-mce-type")) && F && (d = !1),
                                  ((c = []).map = {}),
                                  g.replace(B, function (e, t, n, r, o) {
                                      return (
                                          (function (e, t, n, r, o) {
                                              var i;
                                              if (((n = $h((t = t.toLowerCase()) in I ? t : E(n || r || o || ""), s)), M && !l && 0 == (0 === (i = t).indexOf("data-") || 0 === i.indexOf("aria-")))) {
                                                  var a = p[t];
                                                  if (!a && h) {
                                                      for (var u = h.length; u-- && !(a = h[u]).pattern.test(t); );
                                                      -1 === u && (a = null);
                                                  }
                                                  if (!a) return;
                                                  if (a.validValues && !(n in a.validValues)) return;
                                              }
                                              (("name" === t || "id" === t) && e in av && (n in W || n in K)) ||
                                                  (k[t] && !nv.isDomSafe(n, e, q)) ||
                                                  (l && (t in k || 0 === t.indexOf("on"))) ||
                                                  ((c.map[t] = n), c.push({ name: t, value: n }));
                                          })(i, t, n, r, o),
                                          ""
                                      );
                                  }))
                                : ((c = []).map = {}),
                            M && !l)
                        ) {
                            if (((v = f.attributesRequired), (b = f.attributesDefault), (y = f.attributesForced), f.removeEmptyAttrs && !c.length && (d = !1), y))
                                for (r = y.length; r--; ) (a = (m = y[r]).name), "{$uid}" === (C = m.value) && (C = "mce_" + N++), (c.map[a] = C), c.push({ name: a, value: C });
                            if (b) for (r = b.length; r--; ) (a = (m = b[r]).name) in c.map || ("{$uid}" === (C = m.value) && (C = "mce_" + N++), (c.map[a] = C), c.push({ name: a, value: C }));
                            if (v) {
                                for (r = v.length; r-- && !(v[r] in c.map); );
                                -1 === r && (d = !1);
                            }
                            if ((m = c.map["data-mce-bogus"])) {
                                if ("all" === m) {
                                    (w = ov($, x, O.lastIndex)), (O.lastIndex = w);
                                    continue;
                                }
                                d = !1;
                            }
                        }
                        d && J(i, c, u);
                    } else d = !1;
                    if ((n = z[i])) {
                        (n.lastIndex = w = t.index + j.length), (w = (t = n.exec(x)) ? (d && (o = x.substr(w, t.index - w)), t.index + t[0].length) : ((o = x.substr(w)), x.length)), d && (0 < o.length && R(o, !0), Q(i)), (O.lastIndex = w);
                        continue;
                    }
                    u || (g && g.indexOf("/") === g.length - 1 ? d && Q(i) : S.push({ name: i, valid: d }));
                } else if ((i = t[1])) D(i);
                else if ((i = t[2])) {
                    if (!(1 == _ || q.preserve_cdata || (0 < S.length && $.isValidChild(S[S.length - 1].name, "#cdata")))) {
                        (w = T("", t.index + 2)), (O.lastIndex = w);
                        continue;
                    }
                    Y(i);
                } else if ((i = t[3])) ee(i);
                else {
                    if ((i = t[4]) || "<!" === j) {
                        (w = T(i, t.index + j.length)), (O.lastIndex = w);
                        continue;
                    }
                    if ((i = t[5])) {
                        if (1 != _) {
                            (w = T("?", t.index + 2)), (O.lastIndex = w);
                            continue;
                        }
                        Z(i, t[6]);
                    }
                }
                w = t.index + j.length;
            }
            for (w < x.length && R(E(x.substr(w))), r = S.length - 1; 0 <= r; r--) (i = S[r]).valid && Q(i.name);
        }
        !1 !== q.fix_self_closing && (q.fix_self_closing = !0);
        var X = q.comment || te,
            Y = q.cdata || te,
            G = q.text || te,
            J = q.start || te,
            Q = q.end || te,
            Z = q.pi || te,
            ee = q.doctype || te;
        return {
            parse: function (e, t) {
                void 0 === t && (t = "html"),
                    n(
                        (function (e) {
                            for (var t, n = /data:[^;<"'\s]+;base64,([a-z0-9\+\/=\s]+)/gi, r = [], o = {}, i = wu("img"), a = 0, u = 0; (t = n.exec(e)); ) {
                                var s = t[0],
                                    c = i + "_" + u++;
                                (o[c] = s), a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), (a = t.index + s.length);
                            }
                            var l = new RegExp(i + "_[0-9]+", "g");
                            return 0 === a ? { prefix: i, uris: o, html: e, re: l } : (a < e.length && r.push(e.substr(a)), { prefix: i, uris: o, html: r.join(""), re: l });
                        })(e),
                        t
                    );
            },
        };
    }
    var av = Nt.makeMap("button,fieldset,form,iframe,img,image,input,object,output,select,textarea"),
        uv = Re(function () {
            return document.implementation.createHTMLDocument("parser");
        }),
        sv = function (e, t, n) {
            void 0 === n && (n = 0);
            var r = e.toLowerCase();
            if (-1 !== r.indexOf("[if ", n) && ((u = n), /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) {
                var o = r.indexOf("[endif]", n);
                return r.indexOf(">", o);
            }
            if (t) {
                var i = r.indexOf(">", n);
                return -1 !== i ? i : r.length;
            }
            var a = /--!?>/g;
            a.lastIndex = n;
            var u,
                s = a.exec(e);
            return s ? s.index + s[0].length : r.length;
        };
    function cv(A, R) {
        void 0 === R && (R = oo());
        var D = {},
            T = [],
            O = {},
            B = {};
        ((A = A || {}).validate = !("validate" in A) || A.validate), (A.root_name = A.root_name || "body");
        function P(e) {
            var t = e.name;
            t in D && ((r = O[t]) ? r.push(e) : (O[t] = [e]));
            for (var n = T.length; n--; ) {
                var r,
                    o = T[n].name;
                o in e.attributes.map && ((r = B[o]) ? r.push(e) : (B[o] = [e]));
            }
            return e;
        }
        var e = {
            schema: R,
            addAttributeFilter: function (e, n) {
                Rv(Dv(e), function (e) {
                    for (var t = 0; t < T.length; t++) if (T[t].name === e) return void T[t].callbacks.push(n);
                    T.push({ name: e, callbacks: [n] });
                });
            },
            getAttributeFilters: function () {
                return [].concat(T);
            },
            addNodeFilter: function (e, n) {
                Rv(Dv(e), function (e) {
                    var t = D[e];
                    t || (D[e] = t = []), t.push(n);
                });
            },
            getNodeFilters: function () {
                var e,
                    t = [];
                for (e in D) Ee(D, e) && t.push({ name: e, callbacks: D[e] });
                return t;
            },
            filterNode: P,
            parse: function (e, s) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    c,
                    a,
                    l,
                    f = [];
                function d(e) {
                    for (var t = R.getBlockElements(), n = e.prev; n && 3 === n.type; ) {
                        var r = n.value.replace(w, "");
                        if (0 < r.length) return (n.value = r), 0;
                        var o = n.next;
                        if (o) {
                            if (3 === o.type && o.value.length) {
                                n = n.prev;
                                continue;
                            }
                            if (!t[o.name] && "script" !== o.name && "style" !== o.name) {
                                n = n.prev;
                                continue;
                            }
                        }
                        var i = n.prev;
                        n.remove(), (n = i);
                    }
                }
                (s = s || {}), (O = {}), (B = {});
                function m(e, t) {
                    var n,
                        r = new jd(e, t);
                    return e in D && ((n = O[e]) ? n.push(r) : (O[e] = [r])), r;
                }
                var g = Tv(Av("script,style,head,html,body,title,meta,param"), R.getBlockElements()),
                    p = no(R),
                    h = R.getNonEmptyElements(),
                    v = R.children,
                    b = A.validate,
                    u = ("forced_root_block" in s ? s : A).forced_root_block,
                    y = !1 === u ? "" : !0 === u ? "p" : u,
                    C = R.getWhiteSpaceElements(),
                    x = /^[ \t\r\n]+/,
                    w = /[ \t\r\n]+$/,
                    S = /[ \t\r\n]+/g,
                    N = /^[ \t\r\n]+$/,
                    E = Ee(C, s.context) || Ee(C, A.root_name),
                    k = iv(
                        {
                            validate: b,
                            document: A.document,
                            allow_html_data_urls: A.allow_html_data_urls,
                            allow_svg_data_urls: A.allow_svg_data_urls,
                            allow_script_urls: A.allow_script_urls,
                            allow_conditional_comments: A.allow_conditional_comments,
                            preserve_cdata: A.preserve_cdata,
                            self_closing_elements: (function (e) {
                                var t,
                                    n = {};
                                for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                                return n;
                            })(R.getSelfClosingElements()),
                            cdata: function (e) {
                                l.append(m("#cdata", 4)).value = e;
                            },
                            text: function (e, t) {
                                var n, r;
                                E || ((e = e.replace(S, " ")), (r = l.lastChild) && (Ee(g, r.name) || "br" === r.name) && (e = e.replace(x, ""))), 0 !== e.length && (((n = m("#text", 3)).raw = !!t), (l.append(n).value = e));
                            },
                            comment: function (e) {
                                l.append(m("#comment", 8)).value = e;
                            },
                            pi: function (e, t) {
                                (l.append(m(e, 7)).value = t), d(l);
                            },
                            doctype: function (e) {
                                (l.append(m("#doctype", 10)).value = e), d(l);
                            },
                            start: function (e, t, n) {
                                var r = b ? R.getElementRule(e) : {};
                                if (r) {
                                    var o = m(r.outputName || e, 1);
                                    (o.attributes = t), (o.shortEnded = n), l.append(o);
                                    var i = v[l.name];
                                    i && v[o.name] && !i[o.name] && f.push(o);
                                    for (var a = T.length; a--; ) {
                                        var u = T[a].name;
                                        u in t.map && ((c = B[u]) ? c.push(o) : (B[u] = [o]));
                                    }
                                    g[e] && d(o), n || (l = o), !E && C[e] && (E = !0);
                                }
                            },
                            end: function (e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i = b ? R.getElementRule(e) : {};
                                if (i) {
                                    if (g[e] && !E) {
                                        if ((t = l.firstChild) && 3 === t.type)
                                            if (0 < (n = t.value.replace(x, "")).length) (t.value = n), (t = t.next);
                                            else for (r = t.next, t.remove(), t = r; t && 3 === t.type; ) (n = t.value), (r = t.next), (0 !== n.length && !N.test(n)) || (t.remove(), (t = r)), (t = r);
                                        if ((t = l.lastChild) && 3 === t.type)
                                            if (0 < (n = t.value.replace(w, "")).length) (t.value = n), (t = t.prev);
                                            else for (r = t.prev, t.remove(), t = r; t && 3 === t.type; ) (n = t.value), (r = t.prev), (0 !== n.length && !N.test(n)) || (t.remove(), (t = r)), (t = r);
                                    }
                                    E && C[e] && (E = !1);
                                    var a = Kh(R, h, C, l),
                                        u = l.parent;
                                    i.paddInEmptyBlock &&
                                    a &&
                                    (function () {
                                        for (var e = l; V(e); ) {
                                            if (e.name in p) return Kh(R, h, C, e);
                                            e = e.parent;
                                        }
                                    })()
                                        ? Wh(A, s, g, l)
                                        : i.removeEmpty && a
                                        ? g[l.name]
                                            ? l.empty().remove()
                                            : l.unwrap()
                                        : i.paddEmpty && ((Gh((o = l), "#text") && o.firstChild.value === wo) || a) && Wh(A, s, g, l),
                                        (l = u);
                                }
                            },
                        },
                        R
                    ),
                    _ = (l = new jd(s.context || A.root_name, 11));
                if (
                    (k.parse(e, s.format),
                    b &&
                        f.length &&
                        (s.context
                            ? (s.invalid = !0)
                            : (function (e) {
                                  for (
                                      var t = Av("tr,td,th,tbody,thead,tfoot,table"),
                                          n = R.getNonEmptyElements(),
                                          r = R.getWhiteSpaceElements(),
                                          o = R.getTextBlockElements(),
                                          i = R.getSpecialElements(),
                                          a = function (e, t) {
                                              if ((void 0 === t && (t = e.parent), i[e.name])) e.empty().remove();
                                              else {
                                                  for (var n = 0, r = e.children(); n < r.length; n++) {
                                                      var o = r[n];
                                                      R.isValidChild(t.name, o.name) || a(o, t);
                                                  }
                                                  e.unwrap();
                                              }
                                          },
                                          u = 0;
                                      u < e.length;
                                      u++
                                  ) {
                                      var s,
                                          c = e[u],
                                          l = void 0,
                                          f = void 0;
                                      if (c.parent && !c.fixed)
                                          if (o[c.name] && "li" === c.parent.name) {
                                              for (var d = c.next; d && o[d.name]; ) (d.name = "li"), (d.fixed = !0), c.parent.insert(d, c.parent), (d = d.next);
                                              c.unwrap();
                                          } else {
                                              for (var m = [c], l = c.parent; l && !R.isValidChild(l.name, c.name) && !t[l.name]; l = l.parent) m.push(l);
                                              if (l && 1 < m.length)
                                                  if (R.isValidChild(l.name, c.name)) {
                                                      m.reverse();
                                                      for (var g = (s = P(m[0].clone())), p = 0; p < m.length - 1; p++) {
                                                          R.isValidChild(g.name, m[p].name) ? ((f = P(m[p].clone())), g.append(f)) : (f = g);
                                                          for (var h = m[p].firstChild; h && h !== m[p + 1]; ) {
                                                              var v = h.next;
                                                              f.append(h), (h = v);
                                                          }
                                                          g = f;
                                                      }
                                                      Kh(R, n, r, s) ? l.insert(c, m[0], !0) : (l.insert(s, m[0], !0), l.insert(c, s)), (l = m[0]), (Kh(R, n, r, l) || Gh(l, "br")) && l.empty().remove();
                                                  } else a(c);
                                              else
                                                  c.parent &&
                                                      ("li" !== c.name
                                                          ? R.isValidChild(c.parent.name, "div") && R.isValidChild("div", c.name)
                                                              ? c.wrap(P(new jd("div", 1)))
                                                              : a(c)
                                                          : !(d = c.prev) || ("ul" !== d.name && "ol" !== d.name)
                                                          ? !(d = c.next) || ("ul" !== d.name && "ol" !== d.name)
                                                              ? c.wrap(P(new jd("ul", 1)))
                                                              : d.insert(c, d.firstChild, !0)
                                                          : d.append(c));
                                          }
                                  }
                              })(f)),
                    y &&
                        ("body" === _.name || s.isRootContent) &&
                        (function () {
                            function e(e) {
                                e && ((t = e.firstChild) && 3 === t.type && (t.value = t.value.replace(x, "")), (t = e.lastChild) && 3 === t.type && (t.value = t.value.replace(w, "")));
                            }
                            var t = _.firstChild,
                                n = null;
                            if (R.isValidChild(_.name, y.toLowerCase())) {
                                for (; t; ) {
                                    var r = t.next;
                                    3 === t.type || (1 === t.type && "p" !== t.name && !g[t.name] && !t.attr("data-mce-type")) ? (n || ((n = m(y, 1)).attr(A.forced_root_block_attrs), _.insert(n, t)), n.append(t)) : (e(n), (n = null)),
                                        (t = r);
                                }
                                e(n);
                            }
                        })(),
                    !s.invalid)
                ) {
                    for (a in O)
                        if (Ee(O, a)) {
                            for (c = D[a], o = (t = O[a]).length; o--; ) t[o].parent || t.splice(o, 1);
                            for (n = 0, r = c.length; n < r; n++) c[n](t, a, s);
                        }
                    for (n = 0, r = T.length; n < r; n++)
                        if ((c = T[n]).name in B) {
                            for (o = (t = B[c.name]).length; o--; ) t[o].parent || t.splice(o, 1);
                            for (o = 0, i = c.callbacks.length; o < i; o++) c.callbacks[o](t, c.name, s);
                        }
                }
                return _;
            },
        };
        return Xh(e, A), A.inline_styles && Uh(e, A), e;
    }
    function lv(e, t, n) {
        -1 === Nt.inArray(t, n) &&
            (e.addAttributeFilter(n, function (e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
            }),
            t.push(n));
    }
    function fv(L, I) {
        var e = ["data-mce-selected"],
            M = I && I.dom ? I.dom : eu.DOM,
            F = I && I.schema ? I.schema : oo(L);
        (L.entity_encoding = L.entity_encoding || "named"), (L.remove_trailing_brs = !("remove_trailing_brs" in L) || L.remove_trailing_brs);
        var t,
            U = cv(L, F),
            s = L,
            c = M;
        return (
            (t = U).addAttributeFilter("data-mce-tabindex", function (e, t) {
                for (var n = e.length; n--; ) {
                    var r = e[n];
                    r.attr("tabindex", r.attr("data-mce-tabindex")), r.attr(t, null);
                }
            }),
            t.addAttributeFilter("src,href,style", function (e, t) {
                for (var n = "data-mce-" + t, r = s.url_converter, o = s.url_converter_scope, i = e.length; i--; ) {
                    var a = e[i],
                        u = a.attr(n);
                    void 0 !== u
                        ? (a.attr(t, 0 < u.length ? u : null), a.attr(n, null))
                        : ((u = a.attr(t)), "style" === t ? (u = c.serializeStyle(c.parseStyle(u), a.name)) : r && (u = r.call(o, u, t, a.name)), a.attr(t, 0 < u.length ? u : null));
                }
            }),
            t.addAttributeFilter("class", function (e) {
                for (var t = e.length; t--; ) {
                    var n,
                        r = e[t];
                    r.attr("class") && ((n = r.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")), r.attr("class", 0 < n.length ? n : null));
                }
            }),
            t.addAttributeFilter("data-mce-type", function (e, t, n) {
                for (var r = e.length; r--; ) {
                    var o = e[r];
                    "bookmark" !== o.attr("data-mce-type") ||
                        n.cleanup ||
                        (ve.from(o.firstChild).exists(function (e) {
                            return !No(e.value);
                        })
                            ? o.unwrap()
                            : o.remove());
                }
            }),
            t.addNodeFilter("noscript", function (e) {
                for (var t = e.length; t--; ) {
                    var n = e[t].firstChild;
                    n && (n.value = Zo.decode(n.value));
                }
            }),
            t.addNodeFilter("script,style", function (e, t) {
                for (
                    var n = function (e) {
                            return e
                                .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                                .replace(/^[\r\n]*|[\r\n]*$/g, "")
                                .replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "")
                                .replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                        },
                        r = e.length;
                    r--;

                ) {
                    var o,
                        i = e[r],
                        a = i.firstChild ? i.firstChild.value : "";
                    "script" === t
                        ? ((o = i.attr("type")) && i.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < a.length && (i.firstChild.value = "// <![CDATA[\n" + n(a) + "\n// ]]>"))
                        : "xhtml" === s.element_format && 0 < a.length && (i.firstChild.value = "\x3c!--\n" + n(a) + "\n--\x3e");
                }
            }),
            t.addNodeFilter("#comment", function (e) {
                for (var t = e.length; t--; ) {
                    var n = e[t];
                    s.preserve_cdata && 0 === n.value.indexOf("[CDATA[")
                        ? ((n.name = "#cdata"), (n.type = 4), (n.value = c.decode(n.value.replace(/^\[CDATA\[|\]\]$/g, ""))))
                        : 0 === n.value.indexOf("mce:protected ") && ((n.name = "#text"), (n.type = 3), (n.raw = !0), (n.value = unescape(n.value).substr(14)));
                }
            }),
            t.addNodeFilter("xml:namespace,input", function (e, t) {
                for (var n = e.length; n--; ) {
                    var r = e[n];
                    7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || r.attr("type") || r.attr("type", "text"));
                }
            }),
            t.addAttributeFilter("data-mce-type", function (e) {
                Y(e, function (e) {
                    "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap());
                });
            }),
            t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
            }),
            {
                schema: F,
                addNodeFilter: U.addNodeFilter,
                addAttributeFilter: U.addAttributeFilter,
                serialize: function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        g,
                        p,
                        h,
                        v,
                        b,
                        y,
                        C,
                        x,
                        w,
                        S,
                        N,
                        E,
                        k,
                        _,
                        A,
                        R,
                        D,
                        T = _e({ format: "html" }, (t = void 0 === t ? {} : t)),
                        O =
                            ((n =
                                ((m = e),
                                (N = g = T),
                                (d = I) && d.hasEventListeners("PreProcess") && !N.no_events
                                    ? ((h = g),
                                      (x = (p = d).dom),
                                      (w = m.cloneNode(!0)),
                                      (S = document.implementation).createHTMLDocument &&
                                          ((b = S.createHTMLDocument("")),
                                          Nt.each("BODY" === w.nodeName ? w.childNodes : [w], function (e) {
                                              b.body.appendChild(b.importNode(e, !0));
                                          }),
                                          (w = "BODY" !== w.nodeName ? b.body.firstChild : b.body),
                                          (v = x.doc),
                                          (x.doc = b)),
                                      (y = p),
                                      (C = _e(_e({}, h), { node: w })),
                                      y.fire("PreProcess", C),
                                      v && (x.doc = v),
                                      w)
                                    : m)),
                            (o = Eo((r = T).getInner ? n.innerHTML : M.getOuterHTML(n))),
                            r.selection || Co(Et.fromDom(n)) ? o : Nt.trim(o)),
                        B = ((i = U), (a = O), (s = (u = T).selection ? _e({ forced_root_block: !1 }, u) : u), (c = i.parse(a, s)), !P((f = c.lastChild)) || (P((l = f.prev)) && (f.remove(), l.remove())), c);
                    function P(e) {
                        return e && "br" === e.name;
                    }
                    return "tree" === T.format ? B : ((E = I), (k = T), (_ = B), (D = rm(L, F).serialize(_)), k.no_events || !E ? D : ((A = E), (R = _e(_e({}, k), { content: D })), A.fire("PostProcess", R).content));
                },
                addRules: F.addValidElements,
                setRules: F.setValidElements,
                addTempAttr: R(lv, U, e),
                getTempAttrs: J(e),
                getNodeFilters: U.getNodeFilters,
                getAttributeFilters: U.getAttributeFilters,
            }
        );
    }
    function dv(e, t) {
        var n = fv(e, t);
        return {
            schema: n.schema,
            addNodeFilter: n.addNodeFilter,
            addAttributeFilter: n.addAttributeFilter,
            serialize: n.serialize,
            addRules: n.addRules,
            setRules: n.setRules,
            addTempAttr: n.addTempAttr,
            getTempAttrs: n.getTempAttrs,
            getNodeFilters: n.getNodeFilters,
            getAttributeFilters: n.getAttributeFilters,
        };
    }
    function mv(e, t, n) {
        return (r = n = void 0 === n ? {} : n), bh(e).editor.setContent(t, r);
        var r;
    }
    function gv(e) {
        return ve.from(e).each(function (e) {
            return e.destroy();
        });
    }
    function pv(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c =
                ((n = e),
                (r = U(Pv, function (e) {
                    return Ee(n, e);
                })),
                (!1 !== (o = n.forced_root_block) && "" !== o) || r.push("forced_root_block (false only)"),
                W(r)),
            l =
                ((s = Nt.makeMap(t.plugins, " ")),
                W(
                    Ae(
                        Ae([], U(Lv, g), !0),
                        H(Iv, function (e) {
                            return g(e) ? [e + " (moving to premium)"] : [];
                        }),
                        !0
                    )
                )),
            f = 0 < l.length,
            d = 0 < c.length,
            m = "mobile" === t.theme;
        function g(e) {
            return Ee(s, e);
        }
        (f || d || m) &&
            ((i = m ? "\n\nThemes:\n- mobile" : ""),
            (a = f ? "\n\nPlugins:\n- " + l.join("\n- ") : ""),
            (u = d ? "\n\nSettings:\n- " + c.join("\n- ") : ""),
            console.warn("The following deprecated features are currently enabled, these will be removed in TinyMCE 6.0. See https://www.tiny.cloud/docs/release-notes/6.0-upcoming-changes/ for more information." + i + a + u));
    }
    function hv(e) {
        var t = S(e) ? e.join(" ") : e;
        return U(A(X(t) ? t.split(" ") : [], Je), function (e) {
            return 0 < e.length;
        });
    }
    function vv(e, t) {
        return Ee(e.sections(), t);
    }
    function bv(e, t) {
        return ue(e, "toolbar_mode")
            .orThunk(function () {
                return ue(e, "toolbar_drawer").map(function (e) {
                    return !1 === e ? "wrap" : e;
                });
            })
            .getOr(t);
    }
    function yv(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d = hv(n.forced_plugins),
            m = hv(r.plugins),
            g = vv((o = t), "mobile") ? o.sections().mobile : {},
            p = g.plugins ? hv(g.plugins) : m,
            h = ((i = ((u = t), (s = m), (c = p), (a = e) && (0, (f = (l = u).sections()), vv(l, "mobile") && "mobile" === f.mobile.theme) ? U(c, R(T, Hv)) : a && vv(u, "mobile") ? c : s)), [].concat(hv(d)).concat(hv(i)));
        if (xt.browser.isIE() && T(h, "rtc")) throw new Error("RTC plugin is not supported on IE 11.");
        return Nt.extend(r, { plugins: h.join(" ") });
    }
    function Cv(e, t, n, r, o) {
        var i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m = e ? { mobile: ((i = t), (a = { resize: !1, toolbar_mode: bv(o.mobile || {}, "scrolling"), toolbar_sticky: !1 }), _e(_e(_e({}, jv), a), i ? { menubar: !1 } : {})) } : {},
            g =
                ((c = ["mobile"]),
                ie(
                    Bv(m, o),
                    function (e, t) {
                        return T(c, t);
                    },
                    oe((l = {})),
                    oe((f = {}))
                ),
                { sections: J((d = { t: l, f: f }).t), settings: J(d.f) }),
            p = Nt.extend(
                n,
                r,
                g.settings(),
                e && vv(g, "mobile")
                    ? (function (e) {
                          void 0 === e && (e = {});
                          var t = ue(g.sections(), "mobile").getOr({});
                          return Nt.extend({}, e, t);
                      })()
                    : {},
                { validate: !0, external_plugins: ((u = r), (s = g.settings().external_plugins || {}), u && u.external_plugins ? Nt.extend({}, u.external_plugins, s) : s) }
            );
        return yv(e, g, r, p);
    }
    function xv(e, t, n) {
        return ve.from(t.settings[n]).filter(e);
    }
    function wv(e, t) {
        return t.dom[e];
    }
    function Sv(e, t) {
        return parseInt(wn(t, e), 10);
    }
    function Nv(e, t, n) {
        var r,
            o,
            i,
            a,
            u,
            s,
            c = Et.fromDom(e.getBody()),
            l = e.inline ? c : Et.fromDom(Dt(c).dom.documentElement),
            f = ((r = e.inline), (i = t), (a = n), (u = (o = l).dom.getBoundingClientRect()), { x: i - (r ? u.left + o.dom.clientLeft + Kv(o) : 0), y: a - (r ? u.top + o.dom.clientTop + Wv(o) : 0) }),
            d = f.x,
            m = f.y,
            g = qv((s = l)),
            p = $v(s);
        return 0 <= d && 0 <= m && d <= g && m <= p;
    }
    function Ev(o) {
        function i() {
            var e = o.theme;
            return e && e.getNotificationManagerImpl ? e.getNotificationManagerImpl() : { open: t, close: t, reposition: t, getArgs: t };
            function t() {
                throw new Error("Theme did not provide a NotificationManager implementation.");
            }
        }
        function a() {
            return ve.from(c[0]);
        }
        function u() {
            0 < c.length && i().reposition(c);
        }
        function s(t) {
            z(c, function (e) {
                return e === t;
            }).each(function (e) {
                c.splice(e, 1);
            });
        }
        function t(n, e) {
            if ((void 0 === e && (e = !0), !o.removed && ((r = (t = o).inline ? t.getBody() : t.getContentAreaContainer()), ve.from(r).map(Et.fromDom).map(Mn).getOr(!1))))
                return (
                    e && o.fire("BeforeOpenNotification", { notification: n }),
                    M(c, function (e) {
                        return !((t = i().getArgs(e)).type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                        var t;
                    }).getOrThunk(function () {
                        o.editorManager.setActive(o);
                        var e = i().open(n, function () {
                            s(e),
                                u(),
                                a().fold(
                                    function () {
                                        return o.focus();
                                    },
                                    function (e) {
                                        return Et.fromDom(e.getEl()).dom.focus();
                                    }
                                );
                        });
                        return c.push(e), u(), o.fire("OpenNotification", { notification: _e({}, e) }), e;
                    })
                );
            var t, r;
        }
        var n,
            c = [],
            e = J(c);
        return (
            (n = o).on("SkinLoaded", function () {
                var e = n.getParam("service_message");
                e && t({ text: e, type: "warning", timeout: 0 }, !1), u();
            }),
            n.on("show ResizeEditor ResizeWindow NodeChange", function () {
                Ar.requestAnimationFrame(u);
            }),
            n.on("remove", function () {
                Y(c.slice(), function (e) {
                    i().close(e);
                });
            }),
            {
                open: t,
                close: function () {
                    a().each(function (e) {
                        i().close(e), s(e), u();
                    });
                },
                getNotifications: e,
            }
        );
    }
    iv.findEndTag = ov;
    var kv,
        _v,
        Av = Nt.makeMap,
        Rv = Nt.each,
        Dv = Nt.explode,
        Tv = Nt.extend,
        Ov = eu.DOM,
        Bv =
            ((kv = function (e, t) {
                return h(e) && h(t) ? Bv(e, t) : t;
            }),
            function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (0 === e.length) throw new Error("Can't merge zero objects");
                for (var n = {}, r = 0; r < e.length; r++) {
                    var o,
                        i = e[r];
                    for (o in i) Ee(i, o) && (n[o] = kv(n[o], i[o]));
                }
                return n;
            }),
        Pv = "autoresize_on_init,content_editable_state,convert_fonts_to_spans,inline_styles,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(
            ","
        ),
        Lv = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
        Iv = "imagetools,toc".split(","),
        Mv = dt().deviceType,
        Fv = Mv.isTouch(),
        Uv = Mv.isPhone(),
        zv = Mv.isTablet(),
        Hv = ["lists", "autolink", "autosave"],
        jv = { table_grid: !1, object_resizing: !1, resize: !1 },
        Vv =
            ((_v = {}),
            {
                add: function (e, t) {
                    _v[e] = t;
                },
                get: function (e) {
                    return _v[e] || { icons: {} };
                },
                has: function (e) {
                    return Ee(_v, e);
                },
            }),
        qv = R(wv, "clientWidth"),
        $v = R(wv, "clientHeight"),
        Wv = R(Sv, "margin-top"),
        Kv = R(Sv, "margin-left"),
        Xv = fu.PluginManager,
        Yv = fu.ThemeManager;
    function Gv(r) {
        function o() {
            var e = r.theme;
            return e && e.getWindowManagerImpl ? e.getWindowManagerImpl() : { open: t, openUrl: t, alert: t, confirm: t, close: t, getParams: t, setParams: t };
            function t() {
                throw new Error("Theme did not provide a WindowManager implementation.");
            }
        }
        function i(n, r) {
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r ? r.apply(n, e) : void 0;
            };
        }
        function n(t) {
            r.fire("CloseWindow", { dialog: t }),
                0 ===
                    (u = U(u, function (e) {
                        return e !== t;
                    })).length && r.focus();
        }
        function a(e) {
            r.editorManager.setActive(r), dd(r);
            var t,
                n = e();
            return (t = n), u.push(t), r.fire("OpenWindow", { dialog: t }), n;
        }
        var u = [];
        return (
            r.on("remove", function () {
                Y(u, function (e) {
                    o().close(e);
                });
            }),
            {
                open: function (e, t) {
                    return a(function () {
                        return o().open(e, t, n);
                    });
                },
                openUrl: function (e) {
                    return a(function () {
                        return o().openUrl(e, n);
                    });
                },
                alert: function (e, t, n) {
                    var r = o();
                    r.alert(e, i(n || r, t));
                },
                confirm: function (e, t, n) {
                    var r = o();
                    r.confirm(e, i(n || r, t));
                },
                close: function () {
                    ve.from(u[u.length - 1]).each(function (e) {
                        o().close(e), n(e);
                    });
                },
            }
        );
    }
    function Jv(e, t) {
        e.notificationManager.open({ type: "error", text: t });
    }
    function Qv(e, t) {
        e._skinLoaded
            ? Jv(e, t)
            : e.on("SkinLoaded", function () {
                  Jv(e, t);
              });
    }
    function Zv(e, t, n) {
        Cf(e, t, { message: n }), console.error(n);
    }
    function eb(e, t, n) {
        return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t;
    }
    function tb(e, t, n) {
        Zv(e, "PluginLoadError", eb("plugin", t, n));
    }
    function nb(e) {
        var t, n;
        e.contentCSS = e.contentCSS.concat(Ey(e, ((n = (t = e).getParam("content_css")), X(n) ? A(n.split(","), Je) : S(n) ? n : !1 === n || t.inline ? [] : ["default"])), Ey(e, Bs(e)));
    }
    function rb() {
        function n(e, t) {
            return { status: e, resultUri: t };
        }
        function t(e) {
            return e in r;
        }
        var r = {};
        return {
            hasBlobUri: t,
            getResultUri: function (e) {
                var t = r[e];
                return t ? t.resultUri : null;
            },
            isPending: function (e) {
                return !!t(e) && 1 === r[e].status;
            },
            isUploaded: function (e) {
                return !!t(e) && 2 === r[e].status;
            },
            markPending: function (e) {
                r[e] = n(1, null);
            },
            markUploaded: function (e, t) {
                r[e] = n(2, t);
            },
            removeFailed: function (e) {
                delete r[e];
            },
            destroy: function () {
                r = {};
            },
        };
    }
    function ob(e) {
        return e + ky++ + ("s" + new Date().getTime().toString(36) + t() + t() + t());
        function t() {
            return Math.round(4294967295 * Math.random()).toString(36);
        }
    }
    function ib() {
        function e(e) {
            return M(n, e).getOrUndefined();
        }
        function i(e) {
            if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
            var t = e.id || ob("blobid"),
                n = e.name || t,
                r = e.blob;
            return {
                id: J(t),
                name: J(n),
                filename: J(
                    e.filename ||
                        n +
                            "." +
                            ({
                                "image/jpeg": "jpg",
                                "image/jpg": "jpg",
                                "image/gif": "gif",
                                "image/png": "png",
                                "image/apng": "apng",
                                "image/avif": "avif",
                                "image/svg+xml": "svg",
                                "image/webp": "webp",
                                "image/bmp": "bmp",
                                "image/tiff": "tiff",
                            }[r.type.toLowerCase()] || "dat")
                ),
                blob: J(r),
                base64: J(e.base64),
                blobUri: J(e.blobUri || URL.createObjectURL(r)),
                uri: J(e.uri),
            };
        }
        function t(t) {
            return e(function (e) {
                return e.id() === t;
            });
        }
        var n = [];
        return {
            create: function (e, t, n, r, o) {
                if (X(e)) return i({ id: e, name: r, filename: o, blob: t, base64: n });
                if (h(e)) return i(e);
                throw new Error("Unknown input type");
            },
            add: function (e) {
                t(e.id()) || n.push(e);
            },
            get: t,
            getByUri: function (t) {
                return e(function (e) {
                    return e.blobUri() === t;
                });
            },
            getByData: function (t, n) {
                return e(function (e) {
                    return e.base64() === t && e.blob().type === n;
                });
            },
            findFirst: e,
            removeByUri: function (t) {
                n = U(n, function (e) {
                    return e.blobUri() !== t || void URL.revokeObjectURL(e.blobUri());
                });
            },
            destroy: function () {
                Y(n, function (e) {
                    URL.revokeObjectURL(e.blobUri());
                }),
                    (n = []);
            },
        };
    }
    function ab(u, s) {
        function o(e, r, o, t) {
            var i = new XMLHttpRequest();
            i.open("POST", s.url),
                (i.withCredentials = s.credentials),
                (i.upload.onprogress = function (e) {
                    t((e.loaded / e.total) * 100);
                }),
                (i.onerror = function () {
                    o("Image upload failed due to a XHR Transport error. Code: " + i.status);
                }),
                (i.onload = function () {
                    var e, t, n;
                    i.status < 200 || 300 <= i.status
                        ? o("HTTP Error: " + i.status)
                        : (e = JSON.parse(i.responseText)) && "string" == typeof e.location
                        ? r(((t = s.basePath), (n = e.location), t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n))
                        : o("Invalid JSON: " + i.responseText);
                });
            var n = new FormData();
            n.append("file", e.blob(), e.filename()), i.send(n);
        }
        function c(e, t) {
            return { url: t, blobInfo: e, status: !0 };
        }
        function l(e, t, n) {
            return { url: "", blobInfo: e, status: !1, error: { message: t, options: n } };
        }
        function f(e, t) {
            Nt.each(d[e], function (e) {
                e(t);
            }),
                delete d[e];
        }
        var d = {};
        return (
            !1 === y(s.handler) && (s.handler = o),
            {
                upload: function (e, t) {
                    return s.url || s.handler !== o
                        ? ((n = e),
                          (r = t),
                          (n = Nt.grep(e, function (e) {
                              return !u.isUploaded(e.blobUri());
                          })),
                          _r.all(
                              Nt.map(n, function (e) {
                                  return u.isPending(e.blobUri())
                                      ? ((n = e.blobUri()),
                                        new _r(function (e) {
                                            (d[n] = d[n] || []), d[n].push(e);
                                        }))
                                      : ((i = e),
                                        (t = s.handler),
                                        (a = r),
                                        u.markPending(i.blobUri()),
                                        new _r(function (r) {
                                            var n;
                                            try {
                                                var o = function () {
                                                    n && n.close();
                                                };
                                                t(
                                                    i,
                                                    function (e) {
                                                        o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e));
                                                    },
                                                    function (e, t) {
                                                        var n = t || {};
                                                        o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n));
                                                    },
                                                    function (t) {
                                                        t < 0 ||
                                                            100 < t ||
                                                            ve
                                                                .from(n)
                                                                .orThunk(function () {
                                                                    return ve.from(a).map(C);
                                                                })
                                                                .each(function (e) {
                                                                    (n = e).progressBar.value(t);
                                                                });
                                                    }
                                                );
                                            } catch (e) {
                                                r(l(i, e.message, {}));
                                            }
                                        }));
                                  var i, t, a, n;
                              })
                          ))
                        : new _r(function (e) {
                              e([]);
                          });
                    var n, r;
                },
            }
        );
    }
    function ub(e) {
        return function () {
            return e.notificationManager.open({ text: e.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 });
        };
    }
    function sb(e, t) {
        return ab(t, {
            url: e.getParam("images_upload_url", "", "string"),
            basePath: e.getParam("images_upload_base_path", "", "string"),
            credentials: e.getParam("images_upload_credentials", !1, "boolean"),
            handler: e.getParam("images_upload_handler", null, "function"),
        });
    }
    function cb(l) {
        function t(t) {
            return function (e) {
                return l.selection ? t(e) : [];
            };
        }
        function r(e, t, n) {
            for (var r = 0; -1 !== (r = e.indexOf(t, r)) && ((e = e.substring(0, r) + n + e.substr(r + t.length)), (r += n.length - t.length + 1)), -1 !== r; );
            return e;
        }
        function o(e, t, n) {
            return (e = r(e, 'src="' + t + '"', 'src="' + n + '"' + (n === xt.transparentSrc ? ' data-mce-placeholder="1"' : ""))), r(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"');
        }
        function f(t, n) {
            Y(l.undoManager.data, function (e) {
                "fragmented" === e.type
                    ? (e.fragments = A(e.fragments, function (e) {
                          return o(e, t, n);
                      }))
                    : (e.content = o(e.content, t, n));
            });
        }
        function n(n) {
            return (
                (u = u || sb(l, g)),
                v().then(
                    t(function (c) {
                        var e = A(c, function (e) {
                            return e.blobInfo;
                        });
                        return u.upload(e, ub(l)).then(
                            t(function (e) {
                                var s = [],
                                    t = A(e, function (e, t) {
                                        var n,
                                            r,
                                            o,
                                            i,
                                            a = c[t].blobInfo,
                                            u = c[t].image;
                                        return (
                                            e.status && l.getParam("images_replace_blob_uris", !0, "boolean")
                                                ? (m.removeByUri(u.src),
                                                  hh(l) ||
                                                      ((r = u),
                                                      (o = e.url),
                                                      (i = l.convertURL(o, "src")),
                                                      f(r.src, o),
                                                      l.$(r).attr({ src: l.getParam("images_reuse_filename", !1, "boolean") ? o + (-1 === o.indexOf("?") ? "?" : "&") + new Date().getTime() : o, "data-mce-src": i })))
                                                : e.error && (e.error.options.remove && (f(u.getAttribute("src"), xt.transparentSrc), s.push(u)), (n = e.error.message), Qv(l, lu.translate(["Failed to upload image: {0}", n]))),
                                            { element: u, status: e.status, uploadUri: e.url, blobInfo: a }
                                        );
                                    });
                                return (
                                    0 < t.length && h.fireIfChanged(),
                                    0 < s.length &&
                                        (hh(l)
                                            ? console.error("Removing images on failed uploads is currently unsupported for RTC")
                                            : l.undoManager.transact(function () {
                                                  Y(s, function (e) {
                                                      l.dom.remove(e), m.removeByUri(e.src);
                                                  });
                                              })),
                                    n && n(t),
                                    t
                                );
                            })
                        );
                    })
                )
            );
        }
        function e(e) {
            if (As(l)) return n(e);
        }
        function i(t) {
            return (
                !1 !==
                    j(p, function (e) {
                        return e(t);
                    }) &&
                (0 !== t.getAttribute("src").indexOf("data:") || l.getParam("images_dataimg_filter", w, "function")(t))
            );
        }
        function a(e) {
            return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
                var t = g.getResultUri(n);
                if (t) return 'src="' + t + '"';
                var r =
                    (r = m.getByUri(n)) ||
                    L(
                        l.editorManager.get(),
                        function (e, t) {
                            return e || (t.editorUpload && t.editorUpload.blobCache.getByUri(n));
                        },
                        null
                    );
                return r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e;
            });
        }
        var u,
            s,
            c,
            d,
            m = ib(),
            g = rb(),
            p = [],
            h =
                ((d = au(null)),
                (c = l).on("change AddUndo", function (e) {
                    d.set(_e({}, e.level));
                }),
                {
                    fireIfChanged: function () {
                        var t = c.undoManager.data;
                        Z(t)
                            .filter(function (e) {
                                return !fh(d.get(), e);
                            })
                            .each(function (e) {
                                c.setDirty(!0), c.fire("change", { level: e, lastLevel: G(t, t.length - 2).getOrNull() });
                            });
                    },
                }),
            v = function () {
                return (s = s || qh(g, m)).findAll(l.getBody(), i).then(
                    t(function (e) {
                        return (
                            (e = U(e, function (e) {
                                return "string" != typeof e || void Qv(l, e);
                            })),
                            hh(l) ||
                                Y(e, function (e) {
                                    f(e.image.src, e.blobInfo.blobUri()), (e.image.src = e.blobInfo.blobUri()), e.image.removeAttribute("data-mce-src");
                                }),
                            e
                        );
                    })
                );
            };
        return (
            l.on("SetContent", function () {
                (As(l) ? e : v)();
            }),
            l.on("RawSaveContent", function (e) {
                e.content = a(e.content);
            }),
            l.on("GetContent", function (e) {
                e.source_view || "raw" === e.format || "tree" === e.format || (e.content = a(e.content));
            }),
            l.on("PostRender", function () {
                l.parser.addNodeFilter("img", function (e) {
                    Y(e, function (e) {
                        var t,
                            n = e.attr("src");
                        m.getByUri(n) || ((t = g.getResultUri(n)) && e.attr("src", t));
                    });
                });
            }),
            {
                blobCache: m,
                addFilter: function (e) {
                    p.push(e);
                },
                uploadImages: n,
                uploadImagesAuto: e,
                scanForImages: v,
                destroy: function () {
                    m.destroy(), g.destroy(), (s = u = null);
                },
            }
        );
    }
    function lb(e, t) {
        function m(e) {
            o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
            var t,
                n = Ay.create(o.name),
                r = n;
            return (t = o).classes.length && Ay.addClass(r, t.classes.join(" ")), Ay.setAttribs(r, t.attrs), n;
        }
        var n,
            o,
            r,
            g = (t && t.schema) || oo({}),
            p = function (n, e, t) {
                var r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l = 0 < e.length && e[0],
                    f = l && l.name,
                    d = ((a = f), (u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i), !(!(c = (s = g.getElementRule(u)) && s.parentsRequired) || !c.length) && (a && -1 !== Nt.inArray(c, a) ? a : c[0]));
                if (d) f === d ? ((o = e[0]), (e = e.slice(1))) : (o = d);
                else if (l) (o = e[0]), (e = e.slice(1));
                else if (!t) return n;
                return (
                    o && (r = m(o)).appendChild(n),
                    t &&
                        (r || (r = Ay.create("div")).appendChild(n),
                        Nt.each(t, function (e) {
                            var t = m(e);
                            r.insertBefore(t, n);
                        })),
                    p(r, e, o && o.siblings)
                );
            };
        return e && e.length ? ((n = m((o = e[0]))), (r = Ay.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : "";
    }
    function fb(e) {
        var t,
            a = { classes: [], attrs: {} };
        return (
            "*" !== (e = a.selector = Nt.trim(e)) &&
                (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
                    switch (t) {
                        case "#":
                            a.attrs.id = n;
                            break;
                        case ".":
                            a.classes.push(n);
                            break;
                        case ":":
                            -1 !== Nt.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n);
                    }
                    var i;
                    return "[" !== r || ((i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2])), "";
                })),
            (a.name = t || "div"),
            a
        );
    }
    function db(n, e) {
        var r,
            t,
            o = "",
            i = ((t = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")), X(t) ? t : "");
        if ("" === i) return "";
        function a(e) {
            return e.replace(/%(\w+)/g, "");
        }
        if ("string" == typeof e) {
            if (!(e = n.formatter.get(e))) return;
            e = e[0];
        }
        if ("preview" in e) {
            var u = ue(e, "preview");
            if (fn(u, !1)) return "";
            i = u.getOr(i);
        }
        var s,
            c = e.block || e.inline || "span",
            l =
                (s = e.selector) && "string" == typeof s
                    ? ((s = (s = s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
                      Nt.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                          var t = Nt.map(e.split(/(?:~\+|~|\+)/), fb),
                              n = t.pop();
                          return t.length && (n.siblings = t), n;
                      }).reverse())
                    : [],
            f = l.length ? (l[0].name || (l[0].name = c), (c = e.selector), lb(l, n)) : lb([c], n),
            d = Ay.select(c, f)[0] || f.firstChild;
        return (
            _y(e.styles, function (e, t) {
                var n = a(e);
                n && Ay.setStyle(d, t, n);
            }),
            _y(e.attributes, function (e, t) {
                var n = a(e);
                n && Ay.setAttrib(d, t, n);
            }),
            _y(e.classes, function (e) {
                var t = a(e);
                Ay.hasClass(d, t) || Ay.addClass(d, t);
            }),
            n.fire("PreviewFormats"),
            Ay.setStyles(f, { position: "absolute", left: -65535 }),
            n.getBody().appendChild(f),
            (r = Ay.getStyle(n.getBody(), "fontSize", !0)),
            (r = /px$/.test(r) ? parseInt(r, 10) : 0),
            _y(i.split(" "), function (e) {
                var t = Ay.getStyle(d, e, !0);
                if (
                    !(
                        ("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && ((t = Ay.getStyle(n.getBody(), e, !0)), "#ffffff" === Ay.toHex(t).toLowerCase())) ||
                        ("color" === e && "#000000" === Ay.toHex(t).toLowerCase())
                    )
                ) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === r) return;
                        t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * r + "px";
                    }
                    "border" === e && t && (o += "padding:0 2px;"), (o += e + ":" + t + ";");
                }
            }),
            n.fire("AfterPreviewFormats"),
            Ay.remove(f),
            o
        );
    }
    function mb(c) {
        var e,
            r,
            t,
            n,
            o,
            i,
            a =
                ((n = {}),
                (o = function (e, t) {
                    e &&
                        (X(e)
                            ? (Y((t = !S(t) ? [t] : t), function (e) {
                                  b(e.deep) && (e.deep = !gl(e)),
                                      b(e.split) && (e.split = !gl(e) || pl(e)),
                                      b(e.remove) && gl(e) && !pl(e) && (e.remove = "none"),
                                      gl(e) && pl(e) && ((e.mixed = !0), (e.block_expand = !0)),
                                      X(e.classes) && (e.classes = e.classes.split(/\s+/));
                              }),
                              (n[e] = t))
                            : ne(e, function (e, t) {
                                  o(t, e);
                              }));
                })(
                    ((r = (e = c).dom),
                    (t = {
                        valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }],
                        valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }],
                        valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }],
                        alignleft: [
                            { selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" },
                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "left" }, inherit: !1, preview: !1, defaultBlock: "div" },
                            { selector: "img,table,audio,video", collapsed: !1, styles: { float: "left" }, preview: "font-family font-size" },
                        ],
                        aligncenter: [
                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" },
                            { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" },
                            { selector: "img,audio,video", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 },
                            { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" },
                        ],
                        alignright: [
                            { selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" },
                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" },
                            { selector: "img,table,audio,video", collapsed: !1, styles: { float: "right" }, preview: "font-family font-size" },
                        ],
                        alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "justify" }, inherit: !1, defaultBlock: "div", preview: "font-family font-size" }],
                        bold: [
                            { inline: "strong", remove: "all", preserve_attributes: ["class", "style"] },
                            { inline: "span", styles: { fontWeight: "bold" } },
                            { inline: "b", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        italic: [
                            { inline: "em", remove: "all", preserve_attributes: ["class", "style"] },
                            { inline: "span", styles: { fontStyle: "italic" } },
                            { inline: "i", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        underline: [
                            { inline: "span", styles: { textDecoration: "underline" }, exact: !0 },
                            { inline: "u", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        strikethrough: [
                            { inline: "span", styles: { textDecoration: "line-through" }, exact: !0 },
                            { inline: "strike", remove: "all", preserve_attributes: ["class", "style"] },
                            { inline: "s", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                        hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                        fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 },
                        fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 },
                        lineheight: { selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", defaultBlock: "p", styles: { lineHeight: "%value" } },
                        fontsize_class: { inline: "span", attributes: { class: "%value" } },
                        blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                        subscript: { inline: "sub" },
                        superscript: { inline: "sup" },
                        code: { inline: "code" },
                        link: {
                            inline: "a",
                            selector: "a",
                            remove: "all",
                            split: !0,
                            deep: !0,
                            onmatch: function (e, t, n) {
                                return Hn(e) && e.hasAttribute("href");
                            },
                            onformat: function (n, e, t) {
                                Nt.each(t, function (e, t) {
                                    r.setAttrib(n, t, e);
                                });
                            },
                        },
                        lang: {
                            inline: "span",
                            clear_child_styles: !0,
                            remove_similar: !0,
                            attributes: {
                                lang: "%value",
                                "data-mce-lang": function (e) {
                                    var t;
                                    return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null;
                                },
                            },
                        },
                        removeformat: [
                            { selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 },
                            { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 },
                            { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 },
                        ],
                    }),
                    Nt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), function (e) {
                        t[e] = { block: e, remove: "all" };
                    }),
                    t)
                ),
                o(e.getParam("formats")),
                {
                    get: function (e) {
                        return V(e) ? n[e] : n;
                    },
                    has: function (e) {
                        return Ee(n, e);
                    },
                    register: o,
                    unregister: function (e) {
                        return e && n[e] && delete n[e], n;
                    },
                }),
            l = au(null);
        return (
            (function (e) {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
            })(c),
            (i = c).on("mouseup keydown", function (e) {
                var t = i,
                    n = e.keyCode,
                    r = t.selection,
                    o = t.getBody();
                Hg(t, null, !1), (8 !== n && 46 !== n) || !r.isCollapsed() || r.getStart().innerHTML !== Cp || Hg(t, qc(o, r.getStart())), (37 !== n && 39 !== n) || Hg(t, qc(o, r.getStart()));
            }),
            {
                get: a.get,
                has: a.has,
                register: a.register,
                unregister: a.unregister,
                apply: function (e, t, n) {
                    var r = e,
                        o = t,
                        i = n;
                    yh(c).formatter.apply(r, o, i);
                },
                remove: function (e, t, n, r) {
                    var o = e,
                        i = t,
                        a = n,
                        u = r;
                    yh(c).formatter.remove(o, i, a, u);
                },
                toggle: function (e, t, n) {
                    var r = e,
                        o = t,
                        i = n;
                    yh(c).formatter.toggle(r, o, i);
                },
                match: function (e, t, n, r) {
                    return (o = e), (i = t), (a = n), (u = r), yh(c).formatter.match(o, i, a, u);
                    var o, i, a, u;
                },
                closest: function (e) {
                    return (t = e), yh(c).formatter.closest(t);
                    var t;
                },
                matchAll: function (e, t) {
                    return (n = e), (r = t), yh(c).formatter.matchAll(n, r);
                    var n, r;
                },
                matchNode: function (e, t, n, r) {
                    return (o = e), (i = t), (a = n), (u = r), yh(c).formatter.matchNode(o, i, a, u);
                    var o, i, a, u;
                },
                canApply: function (e) {
                    return (t = e), yh(c).formatter.canApply(t);
                    var t;
                },
                formatChanged: function (e, t, n, r) {
                    return (o = l), (i = e), (a = t), (u = n), (s = r), yh(c).formatter.formatChanged(o, i, a, u, s);
                    var o, i, a, u, s;
                },
                getCssText: R(db, c),
            }
        );
    }
    function gb(e) {
        switch (e.toLowerCase()) {
            case "undo":
            case "redo":
            case "mcerepaint":
            case "mcefocus":
                return 1;
            default:
                return;
        }
    }
    function pb(s) {
        var e,
            n,
            r,
            o,
            i,
            c = du(),
            l = au(0),
            f = au(0),
            d = {
                data: [],
                typing: !1,
                beforeChange: function () {
                    var e = l,
                        t = c;
                    yh(s).undoManager.beforeChange(e, t);
                },
                add: function (e, t) {
                    return (n = d), (r = f), (o = l), (i = c), (a = e), (u = t), yh(s).undoManager.add(n, r, o, i, a, u);
                    var n, r, o, i, a, u;
                },
                undo: function () {
                    return (e = d), (t = l), (n = f), yh(s).undoManager.undo(e, t, n);
                    var e, t, n;
                },
                redo: function () {
                    return (e = f), (t = d.data), yh(s).undoManager.redo(e, t);
                    var e, t;
                },
                clear: function () {
                    var e = d,
                        t = f;
                    yh(s).undoManager.clear(e, t);
                },
                reset: function () {
                    var e = d;
                    yh(s).undoManager.reset(e);
                },
                hasUndo: function () {
                    return (e = d), (t = f), yh(s).undoManager.hasUndo(e, t);
                    var e, t;
                },
                hasRedo: function () {
                    return (e = d), (t = f), yh(s).undoManager.hasRedo(e, t);
                    var e, t;
                },
                transact: function (e) {
                    return (t = d), (n = l), (r = e), yh(s).undoManager.transact(t, n, r);
                    var t, n, r;
                },
                ignore: function (e) {
                    var t = l,
                        n = e;
                    yh(s).undoManager.ignore(t, n);
                },
                extra: function (e, t) {
                    var n = d,
                        r = f,
                        o = e,
                        i = t;
                    yh(s).undoManager.extra(n, r, o, i);
                },
            };
        return (
            hh(s) ||
                ((r = d),
                (o = l),
                (i = au(!1)),
                (n = s).on("init", function () {
                    r.add();
                }),
                n.on("BeforeExecCommand", function (e) {
                    gb(e.command) || (gh(r, o), r.beforeChange());
                }),
                n.on("ExecCommand", function (e) {
                    gb(e.command) || a(e);
                }),
                n.on("ObjectResizeStart cut", function () {
                    r.beforeChange();
                }),
                n.on("SaveContent ObjectResized blur", a),
                n.on("dragend", a),
                n.on("keyup", function (e) {
                    var t = e.keyCode;
                    e.isDefaultPrevented() ||
                        (((33 <= t && t <= 36) || (37 <= t && t <= 40) || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()),
                        (46 !== t && 8 !== t) || n.nodeChanged(),
                        i.get() && r.typing && !1 === fh(uh(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", { level: r.data[0], lastLevel: null })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()));
                }),
                n.on("keydown", function (e) {
                    var t,
                        n = e.keyCode;
                    e.isDefaultPrevented() ||
                        ((33 <= n && n <= 36) || (37 <= n && n <= 40) || 45 === n
                            ? r.typing && a(e)
                            : ((t = (e.ctrlKey && !e.altKey) || e.metaKey), !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), mh(r, !0, o), r.add({}, e), i.set(!0))));
                }),
                n.on("mousedown", function (e) {
                    r.typing && a(e);
                }),
                n.on("input", function (e) {
                    e.inputType && ("insertReplacementText" === e.inputType || ("insertText" === e.inputType && null === e.data) || "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType) && a(e);
                }),
                n.on("AddUndo Undo Redo ClearUndos", function (e) {
                    e.isDefaultPrevented() || n.nodeChanged();
                })),
            (e = s).addShortcut("meta+z", "", "Undo"),
            e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
            d
        );
        function a(e) {
            mh(r, !1, o), r.add({}, e);
        }
    }
    function hb(e) {
        return "keydown" === e.type || "keyup" === e.type;
    }
    function vb(e) {
        var t = e.keyCode;
        return t === If.BACKSPACE || t === If.DELETE;
    }
    function bb(e, t) {
        return ze(Et.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string"));
    }
    function yb(e, t, n) {
        var r,
            o,
            i = ((r = e), (o = t), U(eu.DOM.getParents(n.container(), "*", o), r));
        return ve.from(i[i.length - 1]);
    }
    function Cb(e, t) {
        if (!t) return t;
        var n = t.container(),
            r = t.offset();
        return e
            ? Ir(n)
                ? Vn(n.nextSibling)
                    ? cs(n.nextSibling, 0)
                    : cs.after(n)
                : Ur(t)
                ? cs(n, r + 1)
                : t
            : Ir(n)
            ? Vn(n.previousSibling)
                ? cs(n.previousSibling, n.previousSibling.data.length)
                : cs.before(n)
            : zr(t)
            ? cs(n, r - 1)
            : t;
    }
    function xb(e) {
        return po(e) || vo(e);
    }
    function wb(e, t) {
        return Ve(e, t)
            ? hr(
                  t,
                  xb,
                  ((n = e),
                  function (e) {
                      return je(n, Et.fromDom(e.dom.parentNode));
                  })
              )
            : ve.none();
        var n;
    }
    function Sb(e) {
        var t, n, r;
        e.dom.isEmpty(e.getBody()) && (e.setContent(""), (r = (n = (t = e).getBody()).firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n), t.selection.setCursorLocation(r, 0));
    }
    function Nb(e, t) {
        return { from: e, to: t };
    }
    function Eb(e, t) {
        return wb(Et.fromDom(e), Et.fromDom(t.container())).map(function (e) {
            return { block: e, position: t };
        });
    }
    function kb(e) {
        var t,
            n = z((t = Tn(e)), go).fold(J(t), function (e) {
                return t.slice(0, e);
            });
        return Y(n, In), n;
    }
    function _b(e, t) {
        return M(ym(t, e).reverse(), function (e) {
            return Kr(e);
        }).each(In);
    }
    function Ab(e, t, n, r) {
        if (Kr(n)) return hm(n), rf(n.dom);
        0 ===
            U(Lt(r), function (e) {
                return !Kr(e);
            }).length &&
            Kr(t) &&
            qt(r, Et.fromTag("br"));
        var o = nf(n.dom, cs.before(r.dom));
        return (
            Y(kb(t), function (e) {
                qt(r, e);
            }),
            _b(e, t),
            o
        );
    }
    function Rb(e, t, n) {
        if (Kr(n)) return In(n), Kr(t) && hm(t), rf(t.dom);
        var r = of(n.dom);
        return (
            Y(kb(t), function (e) {
                Ln(n, e);
            }),
            _b(e, t),
            r
        );
    }
    function Db(e, t) {
        jc(e, t.dom)
            .map(function (e) {
                return e.getNode();
            })
            .map(Et.fromDom)
            .filter(Pr)
            .each(In);
    }
    function Tb(e, t, n) {
        return Db(!0, t), Db(!1, n), (Ve((o = n), (r = t)) ? ((i = ym(r, o)), ve.from(i[i.length - 1])) : ve.none()).fold(R(Rb, e, t, n), R(Ab, e, t, n));
        var r, o, i;
    }
    function Ob(e, t, n, r) {
        return t ? Tb(e, r, n) : Tb(e, n, r);
    }
    function Bb(t, n) {
        var e,
            r,
            o,
            i,
            a,
            u,
            s,
            c = Et.fromDom(t.getBody()),
            l =
                ((e = c.dom),
                (r = n),
                ((o = t.selection.getRng()).collapsed
                    ? ((a = r),
                      (u = Eb((i = e), cs.fromRangeStart(o))),
                      (s = u.bind(function (e) {
                          return Zl(a, i, e.position).bind(function (e) {
                              return Eb(i, e).map(function (e) {
                                  return (
                                      (t = i),
                                      (n = a),
                                      Kn((r = e).position.getNode()) && !1 === Kr(r.block)
                                          ? jc(!1, r.block.dom)
                                                .bind(function (e) {
                                                    return e.isEqual(r.position)
                                                        ? Zl(n, t, e).bind(function (e) {
                                                              return Eb(t, e);
                                                          })
                                                        : ve.some(r);
                                                })
                                                .getOr(r)
                                          : r
                                  );
                                  var t, n, r;
                              });
                          });
                      })),
                      dn(u, s, Nb).filter(function (e) {
                          return (
                              !1 === je(e.from.block, e.to.block) &&
                              Ot((n = e).from.block)
                                  .bind(function (t) {
                                      return Ot(n.to.block).filter(function (e) {
                                          return je(t, e);
                                      });
                                  })
                                  .isSome() &&
                              !1 === Gn((t = e).from.block.dom) &&
                              !1 === Gn(t.to.block.dom)
                          );
                          var t, n;
                      }))
                    : ve.none()
                ).bind(function (e) {
                    return Ob(c, n, e.from.block, e.to.block);
                }));
        return (
            l.each(function (e) {
                t.selection.setRng(e.toRange());
            }),
            l.isSome()
        );
    }
    function Pb(e, t) {
        var n = Et.fromDom(t),
            r = R(je, e);
        return pr(n, yo, r).isSome();
    }
    function Lb(e) {
        var n,
            r,
            o,
            t,
            i,
            a,
            u,
            s,
            c,
            l,
            f = Et.fromDom(e.getBody()),
            d = e.selection.getRng();
        return (
            (a = d),
            (c = nf((i = f).dom, cs.fromRangeStart(a)).isNone()),
            (l = tf(i.dom, cs.fromRangeEnd(a)).isNone()),
            !Pb((u = i), (s = a).startContainer) && !Pb(u, s.endContainer) && c && l
                ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0)
                : ((n = f),
                  (r = e.selection),
                  (o = r.getRng()),
                  dn(wb(n, Et.fromDom(o.startContainer)), wb(n, Et.fromDom(o.endContainer)), function (e, t) {
                      return (
                          !1 === je(e, t) &&
                          (o.deleteContents(),
                          Ob(n, !0, e, t).each(function (e) {
                              r.setRng(e.toRange());
                          }),
                          !0)
                      );
                  }).getOr(!1))
        );
    }
    function Ib(e, t) {
        return !e.selection.isCollapsed() && Lb(e);
    }
    function Mb(e, t, n, r, o) {
        return ve.from(t._selectionOverrides.showCaret(e, n, r, o));
    }
    function Fb(e, t) {
        var n, r;
        return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? ve.none() : ve.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r));
    }
    function Ub(e, t, n) {
        var r = nc(1, e.getBody(), t),
            o = cs.fromRangeStart(r),
            i = o.getNode();
        if (Ec(i)) return Mb(1, e, i, !o.isAtEnd(), !1);
        var a = o.getNode(!0);
        if (Ec(a)) return Mb(1, e, a, !1, !1);
        var u = e.dom.getParent(o.getNode(), function (e) {
            return Ly(e) || Py(e);
        });
        return Ec(u) ? Mb(1, e, u, !1, n) : ve.none();
    }
    function zb(e, t, n) {
        return t.collapsed ? Ub(e, t, n).getOr(t) : t;
    }
    function Hb(e) {
        return rp(e) || Zg(e);
    }
    function jb(e) {
        return op(e) || ep(e);
    }
    function Vb(n, r, e, t, o, i) {
        var a, u;
        return (
            Mb(t, n, i.getNode(!o), o, !0).each(function (e) {
                var t;
                r.collapsed ? ((t = r.cloneRange()), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e);
            }),
            (a = n.dom),
            Vn((u = e)) && 0 === u.data.length && a.remove(u),
            !0
        );
    }
    function qb(e, t) {
        var n = e.selection.getRng();
        if (!Vn(n.commonAncestorContainer)) return !1;
        var r = t ? sc.Forwards : sc.Backwards,
            o = Mc(e.getBody()),
            i = R(ac, t ? o.next : o.prev),
            a = t ? Hb : jb,
            u = oc(r, e.getBody(), n),
            s = Cb(t, i(u));
        if (!s || !uc(u, s)) return !1;
        if (a(s)) return Vb(e, n, u.getNode(), r, t, s);
        var c = i(s);
        return !!(c && a(c) && uc(s, c)) && Vb(e, n, u.getNode(), r, t, c);
    }
    function $b(l, f, d) {
        return Zl(f, l, d).bind(function (e) {
            return (
                (s = e.getNode()),
                yo(Et.fromDom(s)) ||
                vo(Et.fromDom(s)) ||
                ((o = l),
                (u = e),
                rc(!(i = f), (a = d)).fold(function () {
                    return rc(i, u).fold(D, c);
                }, c))
                    ? ve.none()
                    : (f && Gn(e.getNode())) || (!1 === f && Gn(e.getNode(!0)))
                    ? ((t = l),
                      (n = d),
                      (r = e.getNode(!1 === f)),
                      wb(Et.fromDom(t), Et.fromDom(n.getNode()))
                          .map(function (e) {
                              return Kr(e) ? Iy.remove(e.dom) : Iy.moveToElement(r);
                          })
                          .orThunk(function () {
                              return ve.some(Iy.moveToElement(r));
                          }))
                    : (f && op(d)) || (!1 === f && rp(d))
                    ? ve.some(Iy.moveToPosition(e))
                    : ve.none()
            );
            var t, n, r, o, i, a, u, s;
            function c(e) {
                return Br(Et.fromDom(e)) && !Qs(a, u, o);
            }
        });
    }
    function Wb(e, t) {
        return ve.from(bf(e.getBody(), t));
    }
    function Kb(m, g) {
        var e = m.selection.getNode();
        return Wb(m, e)
            .filter(Gn)
            .fold(function () {
                return (
                    (s = m.getBody()),
                    (l = nc((c = g) ? 1 : -1, s, m.selection.getRng())),
                    (f = cs.fromRangeStart(l)),
                    (d = Et.fromDom(s)),
                    (!1 === c && op(f)
                        ? ve.some(Iy.remove(f.getNode(!0)))
                        : c && rp(f)
                        ? ve.some(Iy.remove(f.getNode()))
                        : !1 === c && rp(f) && _m(d, f)
                        ? cp(d, f).map(function (e) {
                              return Iy.remove(e.getNode());
                          })
                        : c && op(f) && km(d, f)
                        ? lp(d, f).map(function (e) {
                              return Iy.remove(e.getNode());
                          })
                        : ((r = s),
                          (e = c),
                          (a = (o = f).getNode(!1 === (i = e))),
                          (u = i ? "after" : "before"),
                          Hn(a) && a.getAttribute("data-mce-caret") === u
                              ? ((n = o.getNode(!1 === (t = e))),
                                (t && Gn(n.nextSibling) ? ve.some(Iy.moveToElement(n.nextSibling)) : !1 === t && Gn(n.previousSibling) ? ve.some(Iy.moveToElement(n.previousSibling)) : ve.none()).fold(function () {
                                    return $b(r, e, o);
                                }, ve.some))
                              : $b(r, e, o).bind(function (e) {
                                    return (
                                        (t = r),
                                        (n = o),
                                        e.fold(
                                            function (e) {
                                                return ve.some(Iy.remove(e));
                                            },
                                            function (e) {
                                                return ve.some(Iy.moveToElement(e));
                                            },
                                            function (e) {
                                                return Qs(n, e, t) ? ve.none() : ve.some(Iy.moveToPosition(e));
                                            }
                                        )
                                    );
                                    var t, n;
                                }))
                    ).exists(function (e) {
                        return e.fold(
                            function (e) {
                                return o._selectionOverrides.hideFakeCaret(), Qm(o, i, Et.fromDom(e)), !0;
                            },
                            ((r = i = g),
                            function (e) {
                                var t = r ? cs.before(e) : cs.after(e);
                                return n.selection.setRng(t.toRange()), !0;
                            }),
                            ((t = n = o = m),
                            function (e) {
                                return t.selection.setRng(e.toRange()), !0;
                            })
                        );
                        var t, n, r, o, i;
                    })
                );
                var r, e, o, t, n, i, a, u, s, c, l, f, d;
            }, w);
    }
    function Xb(e, t) {
        var n = e.selection.getNode();
        return (
            !(!Gn(n) || Jn(n)) &&
            Wb(e, n.parentNode)
                .filter(Gn)
                .fold(function () {
                    return Y(yu(Et.fromDom(e.getBody()), ".mce-offscreen-selection"), In), Qm(e, t, Et.fromDom(e.selection.getNode())), Sb(e), !0;
                }, w)
        );
    }
    function Yb(e) {
        var t,
            n = e.dom,
            r = e.selection,
            o = bf(e.getBody(), r.getNode());
        return Yn(o) && n.isBlock(o) && n.isEmpty(o) && ((t = n.create("br", { "data-mce-bogus": "1" })), n.setHTML(o, ""), o.appendChild(t), r.setRng(cs.before(t).toRange())), !0;
    }
    function Gb(e, t) {
        return (e.selection.isCollapsed() ? Kb : Xb)(e, t);
    }
    function Jb(e, t) {
        return (
            !!e.selection.isCollapsed() &&
            ((n = e),
            (r = t),
            (o = cs.fromRangeStart(n.selection.getRng())),
            Zl(r, n.getBody(), o)
                .filter(function (e) {
                    return (r ? Jg : Qg)(e);
                })
                .bind(function (e) {
                    return ve.from(Zs(r ? 0 : -1, e));
                })
                .exists(function (e) {
                    return n.selection.select(e), !0;
                }))
        );
        var n, r, o;
    }
    function Qb(e) {
        return My(e) && e.data[0] === So;
    }
    function Zb(e) {
        return My(e) && e.data[e.data.length - 1] === So;
    }
    function ey(e) {
        return e.ownerDocument.createTextNode(So);
    }
    function ty(e, t) {
        return (e
            ? function (e) {
                  if (My(e.previousSibling)) return Zb(e.previousSibling) || e.previousSibling.appendData(So), e.previousSibling;
                  if (My(e)) return Qb(e) || e.insertData(0, So), e;
                  var t = ey(e);
                  return e.parentNode.insertBefore(t, e), t;
              }
            : function (e) {
                  if (My(e.nextSibling)) return Qb(e.nextSibling) || e.nextSibling.insertData(0, So), e.nextSibling;
                  if (My(e)) return Zb(e) || e.appendData(So), e;
                  var t = ey(e);
                  return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t;
              })(t);
    }
    function ny(e, t) {
        return Vn(e.container()) ? ty(t, e.container()) : ty(t, e.getNode());
    }
    function ry(e, t) {
        var n = t.get();
        return n && e.container() === n && Ir(n);
    }
    function oy(n, e) {
        return e.fold(
            function (e) {
                Cc(n.get());
                var t = Fy(e);
                return n.set(t), ve.some(cs(t, t.length - 1));
            },
            function (e) {
                return rf(e).map(function (e) {
                    if (ry(e, n)) return cs(n.get(), 1);
                    Cc(n.get());
                    var t = ny(e, !0);
                    return n.set(t), cs(t, 1);
                });
            },
            function (e) {
                return of(e).map(function (e) {
                    if (ry(e, n)) return cs(n.get(), n.get().length - 1);
                    Cc(n.get());
                    var t = ny(e, !1);
                    return n.set(t), cs(t, t.length - 1);
                });
            },
            function (e) {
                Cc(n.get());
                var t = Uy(e);
                return n.set(t), ve.some(cs(t, 1));
            }
        );
    }
    function iy(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n].apply(null, t);
            if (r.isSome()) return r;
        }
        return ve.none();
    }
    function ay(e, t) {
        return Js(t, e) || e;
    }
    function uy(e, t, n) {
        var r = Oy(n),
            o = ay(t, r.container());
        return yb(e, o, r).fold(function () {
            return tf(o, r)
                .bind(R(yb, e, o))
                .map(function (e) {
                    return zy.before(e);
                });
        }, ve.none);
    }
    function sy(e, t) {
        return null === qc(e, t);
    }
    function cy(e, t, n) {
        return yb(e, t, n).filter(R(sy, t));
    }
    function ly(e, t, n) {
        var r = By(n);
        return cy(e, t, r).bind(function (e) {
            return nf(e, r).isNone() ? ve.some(zy.start(e)) : ve.none();
        });
    }
    function fy(e, t, n) {
        var r = Oy(n);
        return cy(e, t, r).bind(function (e) {
            return tf(e, r).isNone() ? ve.some(zy.end(e)) : ve.none();
        });
    }
    function dy(e, t, n) {
        var r = By(n),
            o = ay(t, r.container());
        return yb(e, o, r).fold(function () {
            return nf(o, r)
                .bind(R(yb, e, o))
                .map(function (e) {
                    return zy.after(e);
                });
        }, ve.none);
    }
    function my(e) {
        return !1 === ((t = Hy(e)), "rtl" === eu.DOM.getStyle(t, "direction", !0) || ((n = t.textContent), Ty.test(n)));
        var t, n;
    }
    function gy(e, t, n) {
        return iy([uy, ly, fy, dy], [e, t, n]).filter(my);
    }
    function py(e) {
        return e.fold(J("before"), J("start"), J("end"), J("after"));
    }
    function hy(e) {
        return e.fold(zy.before, zy.before, zy.after, zy.after);
    }
    function vy(e) {
        return e.fold(zy.start, zy.start, zy.end, zy.end);
    }
    function by(a, e, u, t, n, s) {
        return dn(yb(e, u, t), yb(e, u, n), function (e, t) {
            return e !== t && ((r = t), (o = Js(e, (n = u))), (i = Js(r, n)), o && o === i) ? zy.after(a ? e : t) : s;
            var n, r, o, i;
        }).getOr(s);
    }
    function yy(e, r) {
        return e.fold(w, function (e) {
            return (n = r), !(py((t = e)) === py(n) && Hy(t) === Hy(n));
            var t, n;
        });
    }
    function Cy(e, t) {
        return e ? t.fold(i(ve.some, zy.start), ve.none, i(ve.some, zy.after), ve.none) : t.fold(ve.none, i(ve.some, zy.before), ve.none, i(ve.some, zy.end));
    }
    function xy(e, a, u, s) {
        var t = Cb(e, s),
            c = gy(a, u, t);
        return gy(a, u, t)
            .bind(R(Cy, e))
            .orThunk(function () {
                return (
                    (n = a),
                    (r = u),
                    (o = c),
                    (i = Cb((t = e), s)),
                    Zl(t, r, i)
                        .map(R(Cb, t))
                        .fold(
                            function () {
                                return o.map(hy);
                            },
                            function (e) {
                                return gy(n, r, e).map(R(by, t, n, r, i, e)).filter(R(yy, o));
                            }
                        )
                        .filter(my)
                );
                var t, n, r, o, i;
            });
    }
    function wy(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = window.console;
        r && (r.error || r.log).apply(r, Ae([e], t, !1));
    }
    var Sy,
        Ny,
        Ey = function (t, e) {
            var n = t.editorManager.baseURL + "/skins/content",
                r = "content" + t.editorManager.suffix + ".css",
                o = !0 === t.inline;
            return A(e, function (e) {
                return /^[a-z0-9\-]+$/i.test(e) && !o ? n + "/" + e + "/" + r : t.documentBaseURI.toAbsolute(e);
            });
        },
        ky = 0,
        _y = Nt.each,
        Ay = eu.DOM,
        Ry = [9, 27, If.HOME, If.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, If.DOWN, If.UP, If.LEFT, If.RIGHT].concat(xt.browser.isFirefox() ? [224] : []),
        Dy = "data-mce-placeholder",
        Ty = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        Oy = R(Cb, !0),
        By = R(Cb, !1),
        Py = Yn,
        Ly = Gn,
        Iy = ir([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        My = Vn,
        Fy = R(ty, !0),
        Uy = R(ty, !1),
        zy = ir([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        Hy = function (e) {
            return e.fold(u, u, u, u);
        };
    function jy(e, t, n) {
        var r = e ? 1 : -1;
        return t.setRng(cs(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
    }
    function Vy(e, t) {
        return e === sc.Backwards ? q(t) : t;
    }
    function qy(e, t, n, r) {
        for (var o, i, a, u, s = Mc(n), c = r, l = []; c; ) {
            var f = ((a = s), (u = c), t === sc.Forwards ? a.next(u) : a.prev(u));
            if (!f) break;
            if (Kn(f.getNode(!1))) return t === sc.Forwards ? { positions: Vy(t, l).concat([f]), breakType: Sy.Br, breakAt: ve.some(f) } : { positions: Vy(t, l), breakType: Sy.Br, breakAt: ve.some(f) };
            if (f.isVisible()) {
                if (e(c, f)) {
                    var d = ((o = c), Kn((i = f).getNode(t === sc.Forwards)) ? Sy.Br : !1 === Qs(o, i) ? Sy.Block : Sy.Wrap);
                    return { positions: Vy(t, l), breakType: d, breakAt: ve.some(f) };
                }
                l.push(f), (c = f);
            } else c = f;
        }
        return { positions: Vy(t, l), breakType: Sy.Eol, breakAt: ve.none() };
    }
    function $y(n, r, o, e) {
        return r(o, e)
            .breakAt.map(function (e) {
                var t = r(o, e).positions;
                return n === sc.Backwards ? t.concat(e) : [e].concat(t);
            })
            .getOr([]);
    }
    function Wy(e, i) {
        return L(
            e,
            function (e, o) {
                return e.fold(
                    function () {
                        return ve.some(o);
                    },
                    function (r) {
                        return dn(Q(r.getClientRects()), Q(o.getClientRects()), function (e, t) {
                            var n = Math.abs(i - e.left);
                            return Math.abs(i - t.left) <= n ? o : r;
                        }).or(e);
                    }
                );
            },
            ve.none()
        );
    }
    function Ky(t, e) {
        return Q(e.getClientRects()).bind(function (e) {
            return Wy(t, e.left);
        });
    }
    function Xy(n) {
        function e(e) {
            return A(e, function (e) {
                var t = Ru(e);
                return (t.node = n), t;
            });
        }
        if (Hn(n)) return e(n.getClientRects());
        if (Vn(n)) {
            var t = n.ownerDocument.createRange();
            return t.setStart(n, 0), t.setEnd(n, n.data.length), e(t.getClientRects());
        }
    }
    function Yy(e) {
        return H(e, Xy);
    }
    R(xy, !1), R(xy, !0), ((Ny = Sy = {})[(Ny.Br = 0)] = "Br"), (Ny[(Ny.Block = 1)] = "Block"), (Ny[(Ny.Wrap = 2)] = "Wrap"), (Ny[(Ny.Eol = 3)] = "Eol");
    var Gy,
        Jy,
        Qy = R(qy, cs.isAbove, -1),
        Zy = R(qy, cs.isBelow, 1),
        e0 = R($y, -1, Qy),
        t0 = R($y, 1, Zy);
    function n0(o, i, a, e, u, t) {
        function n(e) {
            var t = Yy([e]);
            -1 === o && (t = t.reverse());
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (!a(r, l)) {
                    if ((0 < c.length && i(r, pe(c)) && s++, (r.line = s), u(r))) return !0;
                    c.push(r);
                }
            }
        }
        var s = 0,
            c = [],
            l = pe(t.getClientRects());
        if (!l) return c;
        var r = t.getNode();
        return (
            n(r),
            (function (e, t, n, r) {
                for (; (r = Gs(r, e, qr, t)); ) if (n(r)) return;
            })(o, e, n, r),
            c
        );
    }
    function r0(t) {
        return function (e) {
            return e.line > t;
        };
    }
    function o0(t) {
        return function (e) {
            return e.line === t;
        };
    }
    function i0(e, t) {
        return Math.abs(e.left - t);
    }
    function a0(e, t) {
        return Math.abs(e.right - t);
    }
    function u0(e, t) {
        return e >= t.left && e <= t.right;
    }
    function s0(e, t) {
        return e >= t.top && e <= t.bottom;
    }
    function c0(e, o, i) {
        return (
            void 0 === i && (i = w),
            me(e, function (e, t) {
                if (u0(o, t)) return i(t) ? t : e;
                if (u0(o, e)) return i(e) ? e : t;
                var n = Math.min(i0(e, o), a0(e, o)),
                    r = Math.min(i0(t, o), a0(t, o));
                return (r === n && se(t, "node") && ZC(t.node)) || r < n ? t : e;
            })
        );
    }
    function l0(e, t, n, r, o) {
        var i = e1(r, e, qr, t, !o);
        do {
            if (!i || n(i)) return;
        } while ((i = e1(i, e, qr, t)));
    }
    function f0(e, t, n) {
        function r(e) {
            return !cn(e.node) && !Qn(e.node);
        }
        var o,
            i,
            a,
            u = Yy(U(xe(e.getElementsByTagName("*")), Xs)),
            s = U(u, R(s0, n));
        if (
            (a = c0(s, t, r)) &&
            (a = c0(
                (function (e, r, t) {
                    function n(t, e) {
                        var n = U(Yy([e]), function (e) {
                            return !t(e, r);
                        });
                        return (o = o.concat(n)), 0 === n.length;
                    }
                    void 0 === t && (t = !0);
                    var o = [];
                    return o.push(r), l0(Gy.Up, e, R(n, Ou), r.node, t), l0(Gy.Down, e, R(n, Bu), r.node, t), o;
                })(e, a, r(a)),
                t,
                r
            )) &&
            Xs(a.node)
        )
            return { node: (o = a).node, before: i0(o, (i = t)) < a0(o, i) };
        return null;
    }
    function d0(e, t) {
        e.selection.setRng(t), nd(e, e.selection.getRng());
    }
    function m0(e, t, n) {
        return ve.some(zb(e, t, n));
    }
    function g0(e, t, n, r, o, i) {
        var a = t === sc.Forwards,
            u = Mc(e.getBody()),
            s = R(ac, a ? u.next : u.prev),
            c = a ? r : o;
        if (!n.collapsed) {
            var l = Lu(n);
            if (i(l)) return Mb(t, e, l, t === sc.Backwards, !1);
        }
        var f = oc(t, e.getBody(), n);
        if (c(f)) return Fb(e, f.getNode(!a));
        var d = Cb(a, s(f)),
            m = jr(n);
        if (!d) return m ? ve.some(n) : ve.none();
        if (c(d)) return Mb(t, e, d.getNode(!a), a, !1);
        var g = s(d);
        return g && c(g) && uc(d, g) ? Mb(t, e, g.getNode(!a), a, !1) : m ? m0(e, d.toRange(), !1) : ve.none();
    }
    function p0(t, e, n, r, o, i) {
        var a = oc(e, t.getBody(), n),
            u = pe(a.getClientRects()),
            s = e === Gy.Down;
        if (!u) return ve.none();
        var c,
            l = U((s ? QC : JC)(t.getBody(), r0(1), a), o0(1)),
            f = u.left,
            d = c0(l, f);
        if (d && i(d.node)) {
            var m = Math.abs(f - d.left),
                g = Math.abs(f - d.right);
            return Mb(e, t, d.node, m < g, !1);
        }
        if ((c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : Lu(n))) {
            var p = (function (e, t, n, r) {
                    function o(e) {
                        return pe(e.getClientRects());
                    }
                    var i,
                        a,
                        u,
                        s = Mc(t),
                        c = [],
                        l = 0,
                        f = 1 === e ? ((i = s.next), (a = Bu), (u = Ou), cs.after(r)) : ((i = s.prev), (a = Ou), (u = Bu), cs.before(r)),
                        d = o(f);
                    do {
                        if (f.isVisible()) {
                            var m = o(f);
                            if (!u(m, d)) {
                                0 < c.length && a(m, pe(c)) && l++;
                                var g = Ru(m);
                                if (((g.position = f), (g.line = l), n(g))) return c;
                                c.push(g);
                            }
                        }
                    } while ((f = i(f)));
                    return c;
                })(e, t.getBody(), r0(1), c),
                h = c0(U(p, o0(1)), f);
            if (h) return m0(t, h.position.toRange(), !1);
            if ((h = pe(U(p, o0(0))))) return m0(t, h.position.toRange(), !1);
        }
        return 0 === l.length
            ? t1(t, s)
                  .filter(s ? o : r)
                  .map(function (e) {
                      return zb(t, e.toRange(), !1);
                  })
            : ve.none();
    }
    function h0(t, e, n) {
        return t1(t, e)
            .filter(n)
            .exists(function (e) {
                return t.selection.setRng(e.toRange()), !0;
            });
    }
    function v0(e, t) {
        var n = e.dom.createRng();
        n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
    }
    function b0(e, t) {
        e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
    }
    function y0(t, e, n) {
        return oy(e, n).map(function (e) {
            return v0(t, e), n;
        });
    }
    function C0(e, t, n) {
        return (
            !!Ms(e) &&
            ((o = t),
            (i = n),
            (a = (r = e).getBody()),
            (u = cs.fromRangeStart(r.selection.getRng())),
            xy(i, R(bb, r), a, u)
                .bind(function (e) {
                    return y0(r, o, e);
                })
                .isSome())
        );
        var r, o, i, a, u;
    }
    function x0(e, t, n) {
        return (
            !!Ms(t) && ((r = e), (i = (o = t).selection.getRng()), (a = r ? cs.fromRangeEnd(i) : cs.fromRangeStart(i)), !!y(o.selection.getSel().modify) && (r && Ur(a) ? jy(!0, o.selection, a) : !(r || !zr(a)) && jy(!1, o.selection, a)))
        );
        var r, o, i, a;
    }
    function w0(g) {
        var p = au(null),
            h = R(bb, g);
        return (
            g.on("NodeChange", function (e) {
                var n, r, o, t, i, a, u, s, c, l, f, d, m;
                !Ms(g) ||
                    (xt.browser.isIE() && e.initial) ||
                    ((i = h),
                    (a = g.dom),
                    (u = e.parents),
                    Y(
                        $(
                            (s = U(
                                A(yu(Et.fromDom(a.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
                                    return e.dom;
                                }),
                                i
                            )),
                            (c = U(u, i))
                        ),
                        R(b0, !1)
                    ),
                    Y($(c, s), R(b0, !0)),
                    (f = p),
                    (l = g).selection.isCollapsed() && !0 !== l.composing && f.get() && ((d = cs.fromRangeStart(l.selection.getRng())), cs.isTextPosition(d) && !1 === (Ur((m = d)) || zr(m)) && (v0(l, qs(f.get(), d)), f.set(null))),
                    (n = h),
                    (r = g),
                    (o = p),
                    (t = e.parents),
                    r.selection.isCollapsed() &&
                        Y(U(t, n), function (e) {
                            var t = cs.fromRangeStart(r.selection.getRng());
                            gy(n, r.getBody(), t).bind(function (e) {
                                return y0(r, o, e);
                            });
                        }));
            }),
            p
        );
    }
    function S0(n, t, r) {
        if (Ms(n)) {
            var e = t1(n, t).getOrThunk(function () {
                var e = n.selection.getRng();
                return t ? cs.fromRangeEnd(e) : cs.fromRangeStart(e);
            });
            return gy(R(bb, n), n.getBody(), e).exists(function (e) {
                var t = hy(e);
                return oy(r, t).exists(function (e) {
                    return v0(n, e), !0;
                });
            });
        }
        return !1;
    }
    function N0(t, n) {
        return function (e) {
            return oy(n, e).exists(function (e) {
                return v0(t, e), !0;
            });
        };
    }
    function E0(r, o, i, a) {
        var u = r.getBody(),
            s = R(bb, r);
        r.undoManager.ignore(function () {
            var e, t, n;
            r.selection.setRng(((e = i), (t = a), (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)),
                r.execCommand("Delete"),
                gy(s, u, cs.fromRangeStart(r.selection.getRng())).map(vy).map(N0(r, o));
        }),
            r.nodeChanged();
    }
    function k0(e, t, n) {
        if (e.selection.isCollapsed() && Ms(e)) {
            var r = cs.fromRangeStart(e.selection.getRng());
            return (
                (o = t),
                (a = n),
                (u = r),
                (s = (i = e).getBody()),
                (c = Js(u.container(), s) || s),
                (l = R(bb, i)),
                (f = gy(l, c, u))
                    .bind(function (e) {
                        return a ? e.fold(J(ve.some(vy(e))), ve.none, J(ve.some(hy(e))), ve.none) : e.fold(ve.none, J(ve.some(hy(e))), ve.none, J(ve.some(vy(e))));
                    })
                    .map(N0(i, o))
                    .getOrThunk(function () {
                        var t = Hc(a, c, u),
                            e = t.bind(function (e) {
                                return gy(l, c, e);
                            });
                        return dn(f, e, function () {
                            return yb(l, c, u).exists(function (e) {
                                return (
                                    !!dn(rf((o = e)), of(o), function (e, t) {
                                        var n = Cb(!0, e),
                                            r = Cb(!1, t);
                                        return tf(o, n).forall(function (e) {
                                            return e.isEqual(r);
                                        });
                                    }).getOr(!0) && (Qm(i, a, Et.fromDom(e)), !0)
                                );
                                var o;
                            });
                        })
                            .orThunk(function () {
                                return e.bind(function (e) {
                                    return t.map(function (e) {
                                        return a ? E0(i, o, u, e) : E0(i, o, e, u), !0;
                                    });
                                });
                            })
                            .getOr(!1);
                    })
            );
        }
        var i, o, a, u, s, c, l, f;
        return !1;
    }
    function _0(e) {
        return 1 === zt(e);
    }
    function A0(g, p) {
        var t,
            e = Et.fromDom(g.getBody()),
            n = Et.fromDom(g.selection.getStart()),
            h = U(
                z((t = ym(n, e)), go).fold(J(t), function (e) {
                    return t.slice(0, e);
                }),
                _0
            );
        return Z(h).exists(function (e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l = cs.fromRangeStart(g.selection.getRng()),
                f = p,
                d = l,
                m = e.dom;
            return !(
                !dn(rf(m), of(m), function (e, t) {
                    var n = Cb(!0, e),
                        r = Cb(!1, t),
                        o = Cb(!1, d);
                    return f
                        ? tf(m, o).exists(function (e) {
                              return e.isEqual(r) && d.isEqual(n);
                          })
                        : nf(m, o).exists(function (e) {
                              return e.isEqual(n) && d.isEqual(r);
                          });
                }).getOr(!0) ||
                (Vc((t = e).dom) && Mg(t.dom)) ||
                ((n = p),
                (o = e),
                0 ===
                (c = A(U(h, R(Wg, (r = g))), function (e) {
                    return e.dom;
                })).length
                    ? Qm(r, n, o)
                    : ((a = o.dom), (s = Vg(c, (u = Ug(!1)).dom)), qt(Et.fromDom(a), u), In(Et.fromDom(a)), (i = cs(s, 0)), r.selection.setRng(i.toRange())),
                0)
            );
        });
    }
    function R0(e, t) {
        return !!e.selection.isCollapsed() && A0(e, t);
    }
    function D0(e, t, n) {
        return e._selectionOverrides.hideFakeCaret(), Qm(e, t, Et.fromDom(n)), !0;
    }
    function T0(e, t) {
        return e.selection.isCollapsed()
            ? ((i = e),
              (u = (a = t) ? Zg : ep),
              (s = a ? sc.Forwards : sc.Backwards),
              (c = oc(s, i.getBody(), i.selection.getRng())),
              u(c)
                  ? D0(i, a, c.getNode(!a))
                  : ve
                        .from(Cb(a, c))
                        .filter(function (e) {
                            return u(e) && uc(c, e);
                        })
                        .exists(function (e) {
                            return D0(i, a, e.getNode(!a));
                        }))
            : ((r = t), (o = (n = e).selection.getNode()), !!Qn(o) && D0(n, r, o));
        var n, r, o, i, a, u, s, c;
    }
    function O0(e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? 0 : t;
    }
    function B0(e, t) {
        return (e || "table" === kt(t) ? "margin" : "padding") + ("rtl" === wn(t, "direction") ? "-right" : "-left");
    }
    function P0(e) {
        var n,
            t = o1(e);
        return (
            !e.mode.isReadOnly() &&
            (1 < t.length ||
                ((n = e),
                j(t, function (e) {
                    var t = Sn(e, B0(Os(n), e))
                        .map(O0)
                        .getOr(0);
                    return "false" !== n.dom.getContentEditable(e.dom) && 0 < t;
                })))
        );
    }
    function L0(e) {
        return ho(e) || vo(e);
    }
    function I0(e, s) {
        var c = e.dom,
            t = e.selection,
            n = e.formatter,
            r = e.getParam("indentation", "40px", "string"),
            l = /[a-z%]+$/i.exec(r)[0],
            f = parseInt(r, 10),
            d = Os(e),
            o = ks(e);
        e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || c.getParent(t.getNode(), c.isBlock) || n.apply("div"),
            Y(o1(e), function (e) {
                var t,
                    n = c,
                    r = s,
                    o = f,
                    i = l,
                    a = e.dom,
                    u = B0(d, Et.fromDom(a));
                "outdent" === r ? ((t = Math.max(0, O0(a.style[u]) - o)), n.setStyle(a, u, t ? t + i : "")) : ((t = O0(a.style[u]) + o + i), n.setStyle(a, u, t));
            });
    }
    function M0(e, t) {
        if (e.selection.isCollapsed() && P0(e)) {
            var n = e.dom,
                r = e.selection.getRng(),
                o = cs.fromRangeStart(r),
                i = n.getParent(r.startContainer, n.isBlock);
            if (null !== i && ip(Et.fromDom(i), o)) return I0(e, "outdent"), !0;
        }
        return !1;
    }
    function F0(e, t) {
        e.getDoc().execCommand(t, !1, null);
    }
    function U0(e) {
        return void 0 === e.touches || 1 !== e.touches.length ? ve.none() : ve.some(e.touches[0]);
    }
    function z0(e, t) {
        return Ee(e, t.nodeName);
    }
    function H0(e) {
        var t,
            n,
            r,
            o = e.dom,
            i = e.selection,
            a = e.schema,
            u = a.getBlockElements(),
            s = i.getStart(),
            c = e.getBody(),
            l = ks(e);
        if (s && Hn(s) && l) {
            var f = c.nodeName.toLowerCase();
            if (
                a.isValidChild(f, l.toLowerCase()) &&
                ((d = u),
                (m = c),
                (g = s),
                !F(bm(Et.fromDom(g), Et.fromDom(m)), function (e) {
                    return z0(d, e.dom);
                }))
            ) {
                for (var d, m, g, p, h, v = i.getRng(), b = v.startContainer, y = v.startOffset, C = v.endContainer, x = v.endOffset, w = Cd(e), s = c.firstChild; s; )
                    (p = u),
                        Vn((h = s)) || (Hn(h) && !z0(p, h) && !Qc(h))
                            ? (function (e, t) {
                                  if (Vn(t)) {
                                      if (0 === t.nodeValue.length) return 1;
                                      if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || z0(e, t.nextSibling))) return 1;
                                  }
                              })(u, s)
                                ? ((s = (n = s).nextSibling), o.remove(n))
                                : (t || ((t = o.create(l, _s(e))), s.parentNode.insertBefore(t, s), (r = !0)), (s = (n = s).nextSibling), t.appendChild(n))
                            : ((t = null), (s = s.nextSibling));
                r && w && (v.setStart(b, y), v.setEnd(C, x), i.setRng(v), e.nodeChanged());
            }
        }
    }
    function j0(e, t) {
        t.hasAttribute("data-mce-caret") && (Hr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t));
    }
    function V0(e, t) {
        var n = br(Et.fromDom(e.getBody()), "*[data-mce-caret]")
            .map(function (e) {
                return e.dom;
            })
            .getOrNull();
        if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void j0(e, n)) : void (Fr(n) && (j0(e, n), e.undoManager.add()));
    }
    function q0(e, t, n) {
        var r,
            o,
            i,
            a = Mc(e.getBody()),
            u = R(ac, 1 === t ? a.next : a.prev);
        !n.collapsed ||
            "" === ks(e) ||
            ((r = e.dom.getParent(n.startContainer, "PRE")) &&
                (u(cs.fromRangeStart(n)) ||
                    ((i = e.dom.create(ks(e))), (!xt.ie || 11 <= xt.ie) && (i.innerHTML = '<br data-mce-bogus="1">'), (o = i), 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())));
    }
    function $0(t, e) {
        return (
            (n = t),
            (r = e ? sc.Forwards : sc.Backwards),
            (o = n.selection.getRng()),
            g0(n, r, o, rp, op, i1)
                .orThunk(function () {
                    return q0(n, r, o), ve.none();
                })
                .exists(function (e) {
                    return d0(t, e), !0;
                })
        );
        var n, r, o;
    }
    function W0(t, e) {
        return (
            (r = e ? 1 : -1),
            (o = (n = t).selection.getRng()),
            p0(
                n,
                r,
                o,
                function (e) {
                    return rp(e) || tp(e);
                },
                function (e) {
                    return op(e) || np(e);
                },
                i1
            )
                .orThunk(function () {
                    return q0(n, r, o), ve.none();
                })
                .exists(function (e) {
                    return d0(t, e), !0;
                })
        );
        var n, r, o;
    }
    function K0(e, t) {
        return h0(e, t, t ? op : rp);
    }
    function X0(e) {
        return T(["figcaption"], kt(e));
    }
    function Y0(e) {
        var t = document.createRange();
        return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
    }
    function G0(e, t, n) {
        (n ? Ln : Wt)(e, t);
    }
    function J0(h, v) {
        var b = Et.fromDom(h.getBody()),
            y = cs.fromRangeStart(h.selection.getRng()),
            C = ks(h),
            x = _s(h),
            e = y,
            t = R(je, b);
        return hr(Et.fromDom(e.container()), go, t)
            .filter(X0)
            .exists(function () {
                if (((d = b), (m = y), v ? ((p = d.dom), Zy(p, m).breakAt.isNone()) : ((g = d.dom), Qy(g, m).breakAt.isNone()))) {
                    var e = ((t = b), (r = x), (o = v), "" === (n = C) ? ((l = o), G0(t, (f = Et.fromTag("br")), l), Y0(f)) : ((i = t), (a = o), (u = r), (s = Et.fromTag(n)), (c = Et.fromTag("br")), hn(s, u), Ln(s, c), G0(i, s, a), Y0(c)));
                    return h.selection.setRng(e), !0;
                }
                var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p;
                return !1;
            });
    }
    function Q0(e, t) {
        return !!e.selection.isCollapsed() && J0(e, t);
    }
    function Z0(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return function () {
            return e.apply(null, t);
        };
    }
    function eC(e, t) {
        return M(
            ((n = t),
            H(
                A(e, function (e) {
                    return _e({ shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: te }, e);
                }),
                function (e) {
                    return n.keyCode === e.keyCode && n.shiftKey === e.shiftKey && n.altKey === e.altKey && n.ctrlKey === e.ctrlKey && n.metaKey === e.metaKey ? [e] : [];
                }
            )),
            function (e) {
                return e.action();
            }
        );
        var n;
    }
    function tC(t, e) {
        var n = e ? sc.Forwards : sc.Backwards,
            r = t.selection.getRng();
        return g0(t, n, r, Zg, ep, Qn).exists(function (e) {
            return d0(t, e), !0;
        });
    }
    function nC(t, e) {
        var n = e ? 1 : -1,
            r = t.selection.getRng();
        return p0(t, n, r, Zg, ep, Qn).exists(function (e) {
            return d0(t, e), !0;
        });
    }
    function rC(e, t) {
        return h0(e, t, t ? ep : Zg);
    }
    function oC(e, t, n, r, o) {
        var i,
            a = yu(Et.fromDom(n), "td,th,caption").map(function (e) {
                return e.dom;
            }),
            u = U(
                ((i = e),
                H(a, function (e) {
                    var t,
                        n = { left: (t = Ru(e.getBoundingClientRect())).left - -1, top: t.top - -1, right: t.right + -2, bottom: t.bottom + -2, width: t.width + -1, height: t.height + -1 };
                    return [
                        { x: n.left, y: i(n), cell: e },
                        { x: n.right, y: i(n), cell: e },
                    ];
                })),
                function (e) {
                    return t(e, o);
                }
            ),
            s = r,
            c = o;
        return L(
            u,
            function (e, r) {
                return e.fold(
                    function () {
                        return ve.some(r);
                    },
                    function (e) {
                        var t = Math.sqrt(Math.abs(e.x - s) + Math.abs(e.y - c)),
                            n = Math.sqrt(Math.abs(r.x - s) + Math.abs(r.y - c));
                        return ve.some(n < t ? r : e);
                    }
                );
            },
            ve.none()
        ).map(function (e) {
            return e.cell;
        });
    }
    function iC(e, t, n) {
        var r,
            o,
            i = e(t, n);
        return (i.breakType === Sy.Wrap && 0 === i.positions.length) || (!Kn(n.getNode()) && i.breakType === Sy.Br && 1 === i.positions.length)
            ? ((r = e),
              (o = t),
              !i.breakAt.exists(function (e) {
                  return r(o, e).breakAt.isSome();
              }))
            : i.breakAt.isNone();
    }
    function aC(t, e, n, r) {
        var o,
            i,
            a,
            u = t.selection.getRng(),
            s = e ? 1 : -1;
        return !(
            !Ks() ||
            ((o = e),
            (i = n),
            (a = cs.fromRangeStart(u)),
            !jc(!o, i).exists(function (e) {
                return e.isEqual(a);
            })) ||
            (Mb(s, t, n, !e, !1).each(function (e) {
                d0(t, e);
            }),
            0)
        );
    }
    function uC(u, s, c) {
        var e,
            t,
            n = ((e = !!s), (t = c.getNode(e)), Hn(t) && "TABLE" === t.nodeName ? ve.some(t) : ve.none()),
            r = !1 === s;
        n.fold(
            function () {
                return d0(u, c.toRange());
            },
            function (a) {
                return jc(r, u.getBody())
                    .filter(function (e) {
                        return e.isEqual(c);
                    })
                    .fold(
                        function () {
                            return d0(u, c.toRange());
                        },
                        function (e) {
                            var n,
                                r,
                                o = s,
                                i = a,
                                t = c;
                            (r = ks((n = u)))
                                ? n.undoManager.transact(function () {
                                      var e = Et.fromTag(r);
                                      hn(e, _s(n)), Ln(e, Et.fromTag("br")), (o ? $t : qt)(Et.fromDom(i), e);
                                      var t = n.dom.createRng();
                                      t.setStart(e.dom, 0), t.setEnd(e.dom, 0), d0(n, t);
                                  })
                                : d0(n, t.toRange());
                        }
                    );
            }
        );
    }
    function sC(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g = e.selection.getRng(),
            p = cs.fromRangeStart(g),
            h = e.getBody();
        if (t || !s1(r, p))
            return (
                !(!t || !c1(r, p)) &&
                ((o = h),
                (d = i = n),
                uC(
                    e,
                    t,
                    (v = Z((m = a = p).getClientRects())
                        .bind(function (e) {
                            return u1(d, e.left, e.top);
                        })
                        .bind(function (e) {
                            return Ky(
                                rf((t = e))
                                    .map(function (e) {
                                        return [e].concat(Zy(t, e).positions);
                                    })
                                    .getOr([]),
                                m
                            );
                            var t;
                        })
                        .orThunk(function () {
                            return Q(a.getClientRects()).bind(function (e) {
                                return Wy(t0(o, cs.after(i)), e.left);
                            });
                        })
                        .getOr(cs.after(i)))
                ),
                !0)
            );
        var v =
            ((u = h),
            (l = s = n),
            Q((f = c = p).getClientRects())
                .bind(function (e) {
                    return a1(l, e.left, e.top);
                })
                .bind(function (e) {
                    return Ky(
                        of((t = e))
                            .map(function (e) {
                                return Qy(t, e).positions.concat(e);
                            })
                            .getOr([]),
                        f
                    );
                    var t;
                })
                .orThunk(function () {
                    return Q(c.getClientRects()).bind(function (e) {
                        return Wy(e0(u, cs.before(s)), e.left);
                    });
                })
                .getOr(cs.before(s)));
        return uC(e, t, v), !0;
    }
    function cC(n, r, o) {
        return ve
            .from(n.dom.getParent(n.selection.getNode(), "td,th"))
            .bind(function (t) {
                return ve.from(n.dom.getParent(t, "table")).map(function (e) {
                    return o(n, r, e, t);
                });
            })
            .getOr(!1);
    }
    function lC(e, t) {
        return cC(e, t, aC);
    }
    function fC(e, t) {
        return cC(e, t, sC);
    }
    function dC(e, t) {
        var n,
            r,
            o = t,
            i = e.dom,
            a = e.schema.getMoveCaretBeforeOnEnterElements();
        if (t) {
            !/^(LI|DT|DD)$/.test(t.nodeName) ||
                ((r = (function (e) {
                    for (; e; ) {
                        if (1 === e.nodeType || (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))) return e;
                        e = e.nextSibling;
                    }
                })(t.firstChild)) &&
                    /^(UL|OL|DL)$/.test(r.nodeName) &&
                    t.insertBefore(i.doc.createTextNode(wo), t.firstChild));
            var u = i.createRng();
            if ((t.normalize(), t.hasChildNodes())) {
                for (var s = new Dr(t, t); (n = s.current()); ) {
                    if (Vn(n)) {
                        u.setStart(n, 0), u.setEnd(n, 0);
                        break;
                    }
                    if (a[n.nodeName.toLowerCase()]) {
                        u.setStartBefore(n), u.setEndBefore(n);
                        break;
                    }
                    (o = n), (n = s.next());
                }
                n || (u.setStart(o, 0), u.setEnd(o, 0));
            } else Kn(t) ? (t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t))) : (u.setStart(t, 0), u.setEnd(t, 0));
            e.selection.setRng(u), nd(e, u);
        }
    }
    function mC(e) {
        return ve.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
    }
    function gC(e, t) {
        return e && e.parentNode && e.parentNode.nodeName === t;
    }
    function pC(e) {
        return e && /^(OL|UL|LI)$/.test(e.nodeName);
    }
    function hC(e) {
        var t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
    }
    function vC(e, t, n) {
        for (var r = e[n ? "firstChild" : "lastChild"]; r && !Hn(r); ) r = r[n ? "nextSibling" : "previousSibling"];
        return r === t;
    }
    function bC(e) {
        e.innerHTML = '<br data-mce-bogus="1">';
    }
    function yC(e, t) {
        return e.nodeName === t || (e.previousSibling && e.previousSibling.nodeName === t);
    }
    function CC(e, t) {
        return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t);
    }
    function xC(e, t, n) {
        return !1 === Vn(t) ? n : e ? (1 === n && t.data.charAt(n - 1) === So ? 0 : n) : n === t.data.length - 1 && t.data.charAt(n) === So ? t.data.length : n;
    }
    function wC(e, t) {
        for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o); ) "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
        return o !== r ? n : r;
    }
    function SC(e, t) {
        var n = ks(e);
        n &&
            n.toLowerCase() === t.tagName.toLowerCase() &&
            (function (e, o, t) {
                var i = e.dom;
                ve
                    .from(t.style)
                    .map(i.parseStyle)
                    .each(function (e) {
                        var t = Nn(Et.fromDom(o)),
                            n = _e(_e({}, t), e);
                        i.setStyles(o, n);
                    }),
                    dn(
                        ve.from(t.class).map(function (e) {
                            return e.split(/\s+/);
                        }),
                        ve.from(o.className).map(function (e) {
                            return U(e.split(/\s+/), function (e) {
                                return "" !== e;
                            });
                        }),
                        function (t, e) {
                            var n = U(e, function (e) {
                                    return !T(t, e);
                                }),
                                r = Ae(Ae([], t, !0), n, !0);
                            i.setAttrib(o, "class", r.join(" "));
                        }
                    );
                var n = ["style", "class"],
                    r = ae(t, function (e, t) {
                        return !T(n, t);
                    });
                i.setAttribs(o, r);
            })(e, t, _s(e));
    }
    function NC(a, e) {
        function t(e) {
            var t,
                n = m,
                r = l.getTextInlineElements(),
                o = e || "TABLE" === C || "HR" === C ? c.create(e || p) : b.cloneNode(!1),
                i = o;
            if (!1 === a.getParam("keep_styles", !0)) c.setAttrib(o, "style", null), c.setAttrib(o, "class", null);
            else for (; r[n.nodeName] && (Vc(n) || Qc(n) || ((t = n.cloneNode(!1)), c.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : (i = t), o.appendChild(t))), (n = n.parentNode) && n !== F; );
            return SC(a, o), bC(i), o;
        }
        function n(e) {
            var t,
                n,
                r = xC(e, m, g);
            if (!Vn(m) || !(e ? 0 < r : r < m.nodeValue.length)) {
                if (m.parentNode === b && s && !e) return 1;
                if (e && Hn(m) && m === b.firstChild) return 1;
                if (yC(m, "TABLE") || yC(m, "HR")) return (s && !e) || (!s && e);
                var o = new Dr(m, b);
                for (Vn(m) && (e && 0 === r ? o.prev() : e || r !== m.nodeValue.length || o.next()); (t = o.current()); ) {
                    if (Hn(t)) {
                        if (!t.getAttribute("data-mce-bogus") && ((n = t.nodeName.toLowerCase()), f[n] && "br" !== n)) return;
                    } else if (Vn(t) && !$r(t.nodeValue)) return;
                    e ? o.prev() : o.next();
                }
                return 1;
            }
        }
        function r() {
            (u = /^(H[1-6]|PRE|FIGURE)$/.test(C) && "HGROUP" !== x ? t(p) : t()), a.getParam("end_container_on_empty_block", !1) && CC(c, y) && c.isEmpty(b) ? (u = c.split(y, b)) : c.insertAfter(u, b), dC(a, u);
        }
        var o,
            u,
            i,
            s,
            c = a.dom,
            l = a.schema,
            f = l.getNonEmptyElements(),
            d = a.selection.getRng();
        Of(c, d).each(function (e) {
            d.setStart(e.startContainer, e.startOffset), d.setEnd(e.endContainer, e.endOffset);
        });
        var m = d.startContainer,
            g = d.startOffset,
            p = ks(a),
            h = !(!e || !e.shiftKey),
            v = !(!e || !e.ctrlKey);
        Hn(m) && m.hasChildNodes() && ((s = g > m.childNodes.length - 1), (m = m.childNodes[Math.min(g, m.childNodes.length - 1)] || m), (g = s && Vn(m) ? m.nodeValue.length : 0));
        var b,
            y,
            C,
            x,
            w,
            S,
            p,
            N,
            E,
            k,
            _,
            A,
            R,
            D,
            T,
            O,
            B,
            P,
            L,
            I,
            M,
            F = wC(c, m);
        F &&
            (((p && !h) || (!p && h)) &&
                (m = (function (e, t, n, r) {
                    var o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l = p || "P",
                        f = e.dom,
                        d = wC(f, n),
                        m = f.getParent(n, f.isBlock);
                    if (!m || !CC(f, m)) {
                        if (((s = ((m = m || d) === e.getBody() || ((c = m) && /^(TD|TH|CAPTION)$/.test(c.nodeName)) ? m : m.parentNode).nodeName.toLowerCase()), !m.hasChildNodes()))
                            return SC(e, (o = f.create(l))), m.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0), o;
                        for (a = n; a.parentNode !== m; ) a = a.parentNode;
                        for (; a && !f.isBlock(a); ) a = (i = a).previousSibling;
                        if (i && e.schema.isValidChild(s, l.toLowerCase())) {
                            for (SC(e, (o = f.create(l))), i.parentNode.insertBefore(o, i), a = i; a && !f.isBlock(a); ) (u = a.nextSibling), o.appendChild(a), (a = u);
                            t.setStart(n, r), t.setEnd(n, r);
                        }
                    }
                    return n;
                })(a, d, m, g)),
            (y = (b = c.getParent(m, c.isBlock)) ? c.getParent(b.parentNode, c.isBlock) : null),
            (C = b ? b.nodeName.toUpperCase() : ""),
            "LI" !== (x = y ? y.nodeName.toUpperCase() : "") || v || ((y = (b = y).parentNode), (C = x)),
            /^(LI|DT|DD)$/.test(C) && c.isEmpty(b)
                ? ((E = t),
                  (k = y),
                  (_ = b),
                  (A = p),
                  (I = (N = a).dom),
                  (M = N.selection.getRng()),
                  k !== N.getBody() &&
                      ((D = (A = pC((R = k)) && pC(R.parentNode) ? "LI" : A) ? E(A) : I.create("BR")),
                      vC(k, _, !0) && vC(k, _, !1)
                          ? gC(k, "LI")
                              ? ((T = hC(k)), I.insertAfter(D, T), (null === (L = (P = k).parentNode) || void 0 === L ? void 0 : L.firstChild) === P ? I.remove(T) : I.remove(k))
                              : I.replace(D, k)
                          : (vC(k, _, !0)
                                ? gC(k, "LI")
                                    ? (I.insertAfter(D, hC(k)), D.appendChild(I.doc.createTextNode(" ")), D.appendChild(k))
                                    : k.parentNode.insertBefore(D, k)
                                : vC(k, _, !1)
                                ? I.insertAfter(D, hC(k))
                                : ((k = hC(k)),
                                  (O = M.cloneRange()).setStartAfter(_),
                                  O.setEndAfter(k),
                                  (B = O.extractContents()),
                                  "LI" === A && B.firstChild && "LI" === B.firstChild.nodeName ? ((D = B.firstChild), I.insertAfter(B, k)) : (I.insertAfter(B, k), I.insertAfter(D, k))),
                            I.remove(_)),
                      dC(N, D)))
                : (p && b === a.getBody()) ||
                  ((p = p || "P"),
                  Lr(b)
                      ? ((u = Hr(b)), c.isEmpty(b) && bC(b), SC(a, u), dC(a, u))
                      : n()
                      ? r()
                      : n(!0)
                      ? ((u = b.parentNode.insertBefore(t(), b)), dC(a, yC(b, "HR") ? u : b))
                      : ((S = (w = d).cloneRange()).setStart(w.startContainer, xC(!0, w.startContainer, w.startOffset)),
                        S.setEnd(w.endContainer, xC(!1, w.endContainer, w.endOffset)),
                        (o = S.cloneRange()).setEndAfter(b),
                        (i = o.extractContents()),
                        Y(qu(Et.fromDom(i), An), function (e) {
                            var t = e.dom;
                            t.nodeValue = Eo(t.nodeValue);
                        }),
                        (function (e) {
                            for (; Vn(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), (e = e.firstChild); );
                        })(i),
                        (u = i.firstChild),
                        c.insertAfter(i, b),
                        (function (e, t) {
                            var n,
                                r,
                                o = u,
                                i = [];
                            if (o) {
                                for (; (o = o.firstChild); ) {
                                    if (e.isBlock(o)) return;
                                    Hn(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                                }
                                for (n = i.length; n--; ) !(o = i[n]).hasChildNodes() || (o.firstChild === o.lastChild && "" === o.firstChild.nodeValue) ? e.remove(o) : (r = o) && "A" === r.nodeName && e.isEmpty(r) && e.remove(o);
                            }
                        })(c, f),
                        (function (e, t) {
                            t.normalize();
                            var n = t.lastChild;
                            (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) || e.add(t, "br");
                        })(c, b),
                        c.isEmpty(b) && bC(b),
                        u.normalize(),
                        c.isEmpty(u) ? (c.remove(u), r()) : (SC(a, u), dC(a, u))),
                  c.setAttrib(u, "id", ""),
                  a.fire("NewBlock", { newBlock: u })));
    }
    function EC(e, t, n) {
        var r = e.dom.createRng();
        n ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)), e.selection.setRng(r), nd(e, r);
    }
    function kC(e, t) {
        var n = Et.fromTag("br");
        qt(Et.fromDom(t), n), e.undoManager.add();
    }
    function _C(e, t) {
        l1(e.getBody(), t) || $t(Et.fromDom(t), Et.fromTag("br"));
        var n = Et.fromTag("br");
        $t(Et.fromDom(t), n), EC(e, n.dom, !1), e.undoManager.add();
    }
    function AC(e) {
        return e && "A" === e.nodeName && "href" in e;
    }
    function RC(e) {
        return e.fold(D, AC, AC, D);
    }
    function DC(e, t) {
        t.fold(te, R(kC, e), R(_C, e), te);
    }
    function TC(e, t) {
        var n,
            r,
            o,
            i = ((r = R(bb, (n = e))), (o = cs.fromRangeStart(n.selection.getRng())), gy(r, n.getBody(), o).filter(RC));
        i.isSome()
            ? i.each(R(DC, e))
            : (function (e, t) {
                  var n,
                      r,
                      o = e.selection,
                      i = e.dom,
                      a = o.getRng();
                  Of(i, a).each(function (e) {
                      a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset);
                  });
                  var u,
                      s = a.startOffset,
                      c = a.startContainer;
                  1 === c.nodeType && c.hasChildNodes() && ((u = s > c.childNodes.length - 1), (c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c), (s = u && 3 === c.nodeType ? c.nodeValue.length : 0));
                  var l = i.getParent(c, i.isBlock),
                      f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                      d = f ? f.nodeName.toUpperCase() : "",
                      m = !(!t || !t.ctrlKey);
                  "LI" !== d || m || (l = f),
                      c &&
                          3 === c.nodeType &&
                          s >= c.nodeValue.length &&
                          !(function (e) {
                              for (var t, n = new Dr(c, l), r = e.getNonEmptyElements(); (t = n.next()); ) if (r[t.nodeName.toLowerCase()] || 0 < t.length) return 1;
                          })(e.schema) &&
                          ((n = i.create("br")), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), (r = !0)),
                      (n = i.create("br")),
                      fs(i, a, n),
                      EC(e, n, r),
                      e.undoManager.add();
              })(e, t);
    }
    function OC(e, t) {
        return mC(e)
            .filter(function (e) {
                return 0 < t.length && ze(Et.fromDom(e), t);
            })
            .isSome();
    }
    function BC(e, t) {
        return OC(e, e.getParam("no_newline_selector", ""));
    }
    function PC(n) {
        return function (e, t) {
            return ("" === ks(e)) === n;
        };
    }
    function LC(n) {
        return function (e, t) {
            return (
                mC(e)
                    .filter(function (e) {
                        return vo(Et.fromDom(e));
                    })
                    .isSome() === n
            );
        };
    }
    function IC(n, r) {
        return function (e, t) {
            return (
                (mC(e).fold(J(""), function (e) {
                    return e.nodeName.toUpperCase();
                }) ===
                    n.toUpperCase()) ===
                r
            );
        };
    }
    function MC(e) {
        return IC("pre", e);
    }
    function FC(n) {
        return function (e, t) {
            return e.getParam("br_in_pre", !0) === n;
        };
    }
    function UC(e, t) {
        return OC(e, e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption"));
    }
    function zC(e, t) {
        return t;
    }
    function HC(e) {
        var t = ks(e),
            n = (function (e, t) {
                for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o); ) "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
                return o !== r ? n : r;
            })(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P");
    }
    function jC(e, t) {
        return function (n, r) {
            return L(
                e,
                function (e, t) {
                    return e && t(n, r);
                },
                !0
            )
                ? ve.some(t)
                : ve.none();
        };
    }
    function VC(e, t) {
        var n, r;
        (n = e),
            (r = t),
            iy(
                [
                    jC([BC], f1.none()),
                    jC([IC("summary", !0)], f1.br()),
                    jC([MC(!0), FC(!1), zC], f1.br()),
                    jC([MC(!0), FC(!1)], f1.block()),
                    jC([MC(!0), FC(!0), zC], f1.block()),
                    jC([MC(!0), FC(!0)], f1.br()),
                    jC([LC(!0), zC], f1.br()),
                    jC([LC(!0)], f1.block()),
                    jC([PC(!0), zC, HC], f1.block()),
                    jC([PC(!0)], f1.br()),
                    jC([UC], f1.br()),
                    jC([PC(!1), zC], f1.br()),
                    jC([HC], f1.block()),
                ],
                [n, !(!r || !r.shiftKey)]
            )
                .getOr(f1.none())
                .fold(
                    function () {
                        TC(e, t);
                    },
                    function () {
                        NC(e, t);
                    },
                    te
                );
    }
    function qC(e) {
        return e.stopImmediatePropagation();
    }
    function $C(e) {
        return e.keyCode === If.PAGE_UP || e.keyCode === If.PAGE_DOWN;
    }
    function WC(e, t, n) {
        n && !e.get() ? t.on("NodeChange", qC, !0) : !n && e.get() && t.off("NodeChange", qC), e.set(n);
    }
    function KC(n, r) {
        var e = r.container(),
            t = r.offset();
        return Vn(e)
            ? (e.insertData(t, n), ve.some(cs(e, t + n.length)))
            : ic(r).map(function (e) {
                  var t = Et.fromText(n);
                  return (r.isAtEnd() ? $t : qt)(e, t), cs(t.dom, n.length);
              });
    }
    function XC(i, a) {
        return function (e) {
            return (r = i), (!Om((o = e)) && ((n = o), nf((t = r).dom, n).isNone() || tf(t.dom, n).isNone() || ip(t, n) || ap(t, n) || _m(t, n) || km(t, n) || Dm(r, o) || Tm(r, o)) ? g1 : p1)(a);
            var t, n, r, o;
        };
    }
    function YC(e) {
        var t,
            n,
            r = cs.fromRangeStart(e.selection.getRng()),
            o = Et.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
            var i = R(bb, e),
                a = cs.fromRangeStart(e.selection.getRng());
            return gy(i, e.getBody(), a)
                .bind(
                    ((n = o),
                    function (e) {
                        return e.fold(
                            function (e) {
                                return nf(n.dom, cs.before(e));
                            },
                            function (e) {
                                return rf(e);
                            },
                            function (e) {
                                return of(e);
                            },
                            function (e) {
                                return tf(n.dom, cs.after(e));
                            }
                        );
                    })
                )
                .bind(XC(o, r))
                .exists(
                    ((t = e),
                    function (e) {
                        return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
                    })
                );
        }
        return !1;
    }
    function GC(e) {
        var o,
            i,
            a,
            u,
            s,
            t,
            n,
            r,
            c,
            l,
            f,
            d,
            m,
            g,
            p = w0(e);
        return (
            e.on("keyup compositionstart", R(V0, e)),
            (g = p),
            (m = e).on("keydown", function (e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() &&
                    ((t = m),
                    (n = g),
                    (r = e),
                    (o = dt().os),
                    eC(
                        [
                            { keyCode: If.RIGHT, action: Z0($0, t, !0) },
                            { keyCode: If.LEFT, action: Z0($0, t, !1) },
                            { keyCode: If.UP, action: Z0(W0, t, !1) },
                            { keyCode: If.DOWN, action: Z0(W0, t, !0) },
                            { keyCode: If.RIGHT, action: Z0(lC, t, !0) },
                            { keyCode: If.LEFT, action: Z0(lC, t, !1) },
                            { keyCode: If.UP, action: Z0(fC, t, !1) },
                            { keyCode: If.DOWN, action: Z0(fC, t, !0) },
                            { keyCode: If.RIGHT, action: Z0(tC, t, !0) },
                            { keyCode: If.LEFT, action: Z0(tC, t, !1) },
                            { keyCode: If.UP, action: Z0(nC, t, !1) },
                            { keyCode: If.DOWN, action: Z0(nC, t, !0) },
                            { keyCode: If.RIGHT, action: Z0(C0, t, n, !0) },
                            { keyCode: If.LEFT, action: Z0(C0, t, n, !1) },
                            { keyCode: If.RIGHT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: Z0(n1, t, n) },
                            { keyCode: If.LEFT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: Z0(r1, t, n) },
                            { keyCode: If.UP, action: Z0(Q0, t, !1) },
                            { keyCode: If.DOWN, action: Z0(Q0, t, !0) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
            (d = p),
            (f = e).on("keydown", function (e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() &&
                    ((n = d),
                    (r = e),
                    eC(
                        [
                            { keyCode: If.BACKSPACE, action: Z0(M0, (t = f), !1) },
                            { keyCode: If.BACKSPACE, action: Z0(Gb, t, !1) },
                            { keyCode: If.DELETE, action: Z0(Gb, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(qb, t, !1) },
                            { keyCode: If.DELETE, action: Z0(qb, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(k0, t, n, !1) },
                            { keyCode: If.DELETE, action: Z0(k0, t, n, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(yg, t, !1) },
                            { keyCode: If.DELETE, action: Z0(yg, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(Jb, t, !1) },
                            { keyCode: If.DELETE, action: Z0(Jb, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(T0, t, !1) },
                            { keyCode: If.DELETE, action: Z0(T0, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(Ib, t, !1) },
                            { keyCode: If.DELETE, action: Z0(Ib, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(Bb, t, !1) },
                            { keyCode: If.DELETE, action: Z0(Bb, t, !0) },
                            { keyCode: If.BACKSPACE, action: Z0(R0, t, !1) },
                            { keyCode: If.DELETE, action: Z0(R0, t, !0) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
            f.on("keyup", function (e) {
                var t, n;
                !1 === e.isDefaultPrevented() &&
                    ((n = e),
                    eC(
                        [
                            { keyCode: If.BACKSPACE, action: Z0(Yb, (t = f)) },
                            { keyCode: If.DELETE, action: Z0(Yb, t) },
                        ],
                        n
                    ));
            }),
            (l = e).on("keydown", function (e) {
                var t, n, r;
                e.keyCode === If.ENTER &&
                    ((t = l),
                    (n = e).isDefaultPrevented() ||
                        (n.preventDefault(),
                        (r = t.undoManager).typing && ((r.typing = !1), r.add()),
                        t.undoManager.transact(function () {
                            !1 === t.selection.isCollapsed() && t.execCommand("Delete"), VC(t, n);
                        })));
            }),
            (c = e).on("keydown", function (e) {
                var t;
                !1 === e.isDefaultPrevented() &&
                    ((t = e),
                    eC([{ keyCode: If.SPACEBAR, action: Z0(YC, c) }], t).each(function (e) {
                        t.preventDefault();
                    }));
            }),
            (n = t = e),
            (r = mu(function () {
                n.composing || Um(n);
            }, 0)),
            d1.isIE() &&
                (n.on("keypress", function (e) {
                    r.throttle();
                }),
                n.on("remove", function (e) {
                    r.cancel();
                })),
            t.on("input", function (e) {
                !1 === e.isComposing && Um(t);
            }),
            (s = p),
            (u = e).on("keydown", function (e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() &&
                    ((n = s),
                    (r = e),
                    eC(
                        [
                            { keyCode: If.END, action: Z0(K0, (t = u), !0) },
                            { keyCode: If.HOME, action: Z0(K0, t, !1) },
                            { keyCode: If.END, action: Z0(rC, t, !0) },
                            { keyCode: If.HOME, action: Z0(rC, t, !1) },
                            { keyCode: If.END, action: Z0(S0, t, !0, n) },
                            { keyCode: If.HOME, action: Z0(S0, t, !1, n) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
            (o = e),
            (i = p),
            m1.os.isOSX() ||
                ((a = au(!1)),
                o.on("keydown", function (e) {
                    $C(e) && WC(a, o, !0);
                }),
                o.on("keyup", function (e) {
                    var t, n, r;
                    !1 === e.isDefaultPrevented() &&
                        ((r = e),
                        eC(
                            [
                                { keyCode: If.PAGE_UP, action: Z0(S0, (t = o), !1, (n = i)) },
                                { keyCode: If.PAGE_DOWN, action: Z0(S0, t, !0, n) },
                            ],
                            r
                        )),
                        $C(e) && a.get() && (WC(a, o, !1), o.nodeChanged());
                })),
            p
        );
    }
    ((Jy = Gy = Gy || {})[(Jy.Up = -1)] = "Up"), (Jy[(Jy.Down = 1)] = "Down");
    var JC = R(n0, Gy.Up, Ou, Bu),
        QC = R(n0, Gy.Down, Bu, Ou),
        ZC = Gn,
        e1 = Gs,
        t1 = function (e, t) {
            var n = e.selection.getRng(),
                r = e.getBody();
            if (t) {
                var o = cs.fromRangeEnd(n),
                    i = Zy(r, o);
                return Z(i.positions);
            }
            return (o = cs.fromRangeStart(n)), Q((i = Qy(r, o)).positions);
        },
        n1 = R(x0, !0),
        r1 = R(x0, !1),
        o1 = function (e) {
            return U(A(e.selection.getSelectedBlocks(), Et.fromDom), function (e) {
                return (
                    !L0(e) &&
                    !Ot(e).exists(L0) &&
                    hr(e, function (e) {
                        return Yn(e.dom) || Gn(e.dom);
                    }).exists(function (e) {
                        return Yn(e.dom);
                    })
                );
            });
        },
        i1 = Gn,
        a1 = R(
            oC,
            function (e) {
                return e.bottom;
            },
            function (e, t) {
                return e.y < t;
            }
        ),
        u1 = R(
            oC,
            function (e) {
                return e.top;
            },
            function (e, t) {
                return e.y > t;
            }
        ),
        s1 = R(iC, Qy),
        c1 = R(iC, Zy),
        l1 = function (e, t) {
            return (
                (n = cs.after(t)),
                !!Kn(n.getNode()) ||
                    tf(e, cs.after(t))
                        .map(function (e) {
                            return Kn(e.getNode());
                        })
                        .getOr(!1)
            );
            var n;
        },
        f1 = ir([{ br: [] }, { block: [] }, { none: [] }]),
        d1 = dt().browser,
        m1 = dt(),
        g1 = R(KC, wo),
        p1 = R(KC, " "),
        h1 =
            ((v1.prototype.nodeChanged = function (e) {
                var t,
                    n,
                    r,
                    o = this.editor.selection;
                this.editor.initialized &&
                    o &&
                    !this.editor.getParam("disable_nodechange") &&
                    !this.editor.mode.isReadOnly() &&
                    ((r = this.editor.getBody()),
                    ((t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r)) || (t = r),
                    (n = []),
                    this.editor.dom.getParent(t, function (e) {
                        return e === r || void n.push(e);
                    }),
                    ((e = e || {}).element = t),
                    (e.parents = n),
                    this.editor.fire("NodeChange", e));
            }),
            (v1.prototype.isSameElementPath = function (e) {
                var t,
                    n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
                if (n.length === this.lastPath.length) {
                    for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
                    if (-1 === t) return (this.lastPath = n), !0;
                }
                return (this.lastPath = n), !1;
            }),
            v1);
    function v1(r) {
        var o;
        (this.lastPath = []), (this.editor = r);
        var t = this;
        "onselectionchange" in r.getDoc() ||
            r.on("NodeChange click mouseup keyup focus", function (e) {
                var t = r.selection.getRng(),
                    n = { startContainer: t.startContainer, startOffset: t.startOffset, endContainer: t.endContainer, endOffset: t.endOffset };
                ("nodechange" !== e.type && kf(n, o)) || r.fire("SelectionChange"), (o = n);
            }),
            r.on("contextmenu", function () {
                r.fire("SelectionChange");
            }),
            r.on("SelectionChange", function () {
                var e = r.selection.getStart(!0);
                !e || (!xt.range && r.selection.isCollapsed()) || (Pl(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({ selectionChange: !0 }));
            }),
            r.on("mouseup", function (e) {
                !e.isDefaultPrevented() &&
                    Pl(r) &&
                    ("IMG" === r.selection.getNode().nodeName
                        ? Ar.setEditorTimeout(r, function () {
                              r.nodeChanged();
                          })
                        : r.nodeChanged());
            });
    }
    function b1(e) {
        return Hn(e) && po(Et.fromDom(e));
    }
    function y1(e) {
        var t = e.getBoundingClientRect(),
            n = e.ownerDocument,
            r = n.documentElement,
            o = n.defaultView;
        return { top: t.top + o.pageYOffset - r.clientTop, left: t.left + o.pageXOffset - r.clientLeft };
    }
    function C1(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
    }
    function x1(e, S) {
        var N = Ar.throttle(function (e, t) {
            S._selectionOverrides.hideFakeCaret(), S.selection.placeCaretAt(e, t);
        }, 0);
        return (
            S.on("remove", N.stop),
            function (w) {
                return e.on(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        g,
                        p,
                        h,
                        v,
                        b,
                        y,
                        C,
                        x = Math.max(Math.abs(w.screenX - e.screenX), Math.abs(w.screenY - e.screenY));
                    if (!e.dragging && 10 < x) {
                        if (S.fire("dragstart", { target: e.element }).isDefaultPrevented()) return;
                        (e.dragging = !0), S.focus();
                    }
                    e.dragging &&
                        ((d = e),
                        (t = {
                            pageX:
                                ((p = w),
                                (h = (g = S).inline ? y1(g.getBody()) : { left: 0, top: 0 }),
                                (C = (y = g).getBody()),
                                (v = y.inline ? { left: C.scrollLeft, top: C.scrollTop } : { left: 0, top: 0 }),
                                (m = {
                                    pageX:
                                        (b = (function (e, t) {
                                            if (t.target.ownerDocument === e.getDoc()) return { left: t.pageX, top: t.pageY };
                                            var n,
                                                r,
                                                o,
                                                i,
                                                a,
                                                u = y1(e.getContentAreaContainer()),
                                                s =
                                                    ((r = (n = e).getBody()),
                                                    (o = n.getDoc().documentElement),
                                                    (i = { left: r.scrollLeft, top: r.scrollTop }),
                                                    (a = { left: r.scrollLeft || o.scrollLeft, top: r.scrollTop || o.scrollTop }),
                                                    n.inline ? i : a);
                                            return { left: t.pageX - u.left + s.left, top: t.pageY - u.top + s.top };
                                        })(g, p)).left -
                                        h.left +
                                        v.left,
                                    pageY: b.top - h.top + v.top,
                                }).pageX - d.relX),
                            pageY: m.pageY + 5,
                        }),
                        (l = e.ghost),
                        (f = S.getBody()),
                        l.parentNode !== f && f.appendChild(l),
                        (n = e.ghost),
                        (o = e.width),
                        (i = e.height),
                        (a = e.maxX),
                        (u = e.maxY),
                        (c = s = 0),
                        (n.style.left = (r = t).pageX + "px"),
                        (n.style.top = r.pageY + "px"),
                        u < r.pageY + i && (c = r.pageY + i - u),
                        (n.style.width = o - (s = a < r.pageX + o ? r.pageX + o - a : s) + "px"),
                        (n.style.height = i - c + "px"),
                        N(w.clientX, w.clientY));
                });
            }
        );
    }
    function w1(e) {
        function t(e) {
            var t, n, r, o, i, a;
            0 === e.button &&
                ((t = M(
                    c.dom.getParents(e.target),
                    (function () {
                        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        return function (e) {
                            for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                            return !1;
                        };
                    })(K1, X1)
                ).getOr(null)),
                (i = c.getBody()),
                K1((a = t)) &&
                    a !== i &&
                    ((n = c.dom.getPos(t)),
                    (r = c.getBody()),
                    (o = c.getDoc().documentElement),
                    u.set({
                        element: t,
                        dragging: !1,
                        screenX: e.screenX,
                        screenY: e.screenY,
                        maxX: (c.inline ? r.scrollWidth : o.offsetWidth) - 2,
                        maxY: (c.inline ? r.scrollHeight : o.offsetHeight) - 2,
                        relX: e.pageX - n.x,
                        relY: e.pageY - n.y,
                        width: t.offsetWidth,
                        height: t.offsetHeight,
                        ghost: (function (e, t, n) {
                            var r = c.dom,
                                o = e.cloneNode(!0);
                            r.setStyles(o, { width: t, height: n }), r.setAttrib(o, "data-mce-selected", null);
                            var i = r.create("div", { class: "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" });
                            return (
                                r.setStyles(i, { position: "absolute", opacity: 0.5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: t, height: n }), r.setStyles(o, { margin: 0, boxSizing: "border-box" }), i.appendChild(o), i
                            );
                        })(t, t.offsetWidth, t.offsetHeight),
                    })));
        }
        function n(u) {
            i.on(function (e) {
                var t, n, r, o, i, a;
                e.dragging &&
                    ((o = 3 === (a = (r = s).selection.getSel().getRangeAt(0).startContainer).nodeType ? a.parentNode : a) === (i = e.element) ||
                        r.dom.isChildOf(o, i) ||
                        K1(o) ||
                        ((n = e.element.cloneNode(!0)).removeAttribute("data-mce-selected"),
                        (t = n),
                        s.fire("drop", { clientX: u.clientX, clientY: u.clientY }).isDefaultPrevented() ||
                            s.undoManager.transact(function () {
                                C1(e.element), s.insertContent(s.dom.getOuterHTML(t)), s._selectionOverrides.hideFakeCaret();
                            })),
                    s.fire("dragend"));
            }),
                Y1(i);
        }
        var r,
            o,
            i,
            s,
            u,
            c,
            a = du(),
            l = eu.DOM,
            f = document,
            d = x1((u = a), (c = e)),
            m =
                ((r = i = a),
                function () {
                    r.on(function (e) {
                        e.dragging && o.fire("dragend");
                    }),
                        Y1(r);
                });
        (o = s = e).on("mousedown", t),
            e.on("mousemove", d),
            e.on("mouseup", n),
            l.bind(f, "mousemove", d),
            l.bind(f, "mouseup", m),
            e.on("remove", function () {
                l.unbind(f, "mousemove", d), l.unbind(f, "mouseup", m);
            }),
            e.on("keydown", function (e) {
                e.keyCode === If.ESC && m();
            });
    }
    function S1(e) {
        var n, i;
        function a(e) {
            var t;
            e.isDefaultPrevented() || ((t = e.dataTransfer) && (T(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && Qv(i, "Dropped file type is not supported")));
        }
        function u(e) {
            pd(i, e.target) && a(e);
        }
        function t() {
            var t = eu.DOM,
                n = i.dom,
                r = document,
                o = i.inline ? i.getBody() : i.getDoc(),
                e = ["drop", "dragover"];
            Y(e, function (e) {
                t.bind(r, e, u), n.bind(o, e, a);
            }),
                i.on("remove", function () {
                    Y(e, function (e) {
                        t.unbind(r, e, u), n.unbind(o, e, a);
                    });
                });
        }
        w1(e),
            (n = e).on("drop", function (e) {
                var t = void 0 !== e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                (!K1(t) && "false" !== n.dom.getContentEditableParent(t)) || e.preventDefault();
            }),
            e.getParam("block_unsupported_drop", !0, "boolean") &&
                (i = e).on("init", function () {
                    Ar.setEditorTimeout(i, t, 0);
                });
    }
    function N1(e, t) {
        return bf(e.getBody(), t);
    }
    function E1(l) {
        function f(e) {
            return e !== x && (J1(e) || Qn(e)) && y.isChildOf(e, x);
        }
        function c(e) {
            return rp(e) || op(e) || Zg(e) || ep(e);
        }
        function d(e) {
            e && b.setRng(e);
        }
        function m(e, t, n, r) {
            return void 0 === r && (r = !0), l.fire("ShowCaret", { target: t, direction: e, before: n }).isDefaultPrevented() ? null : (r && b.scrollIntoView(t, -1 === e), i.show(n, t));
        }
        function t(e) {
            return Mr(e) || Ao(e) || Ro(e);
        }
        function g(e) {
            return t(e.startContainer) || t(e.endContainer);
        }
        function p(e, t) {
            if (!e) return null;
            if (e.collapsed) {
                if (!g(e)) {
                    var n = t ? 1 : -1,
                        r = oc(n, x, e),
                        o = r.getNode(!t);
                    if (Xs(o)) return m(n, o, !!t && !r.isAtEnd(), !1);
                    var i = r.getNode(t);
                    if (Xs(i)) return m(n, i, !t && !r.isAtEnd(), !1);
                }
                return null;
            }
            var a = e.startContainer,
                u = e.startOffset,
                s = e.endOffset;
            if ((3 === a.nodeType && 0 === u && J1(a.parentNode) && ((a = a.parentNode), (u = y.nodeIndex(a)), (a = a.parentNode)), 1 !== a.nodeType)) return null;
            if (s === u + 1 && a === e.endContainer) {
                var c = a.childNodes[u];
                if (f(c))
                    return (function (e) {
                        var t = e.cloneNode(!0),
                            n = l.fire("ObjectSelected", { target: e, targetClone: t });
                        if (n.isDefaultPrevented()) return null;
                        var r = (function (e, t, n) {
                                var r = l.$,
                                    o = br(Et.fromDom(l.getBody()), "#" + w).fold(
                                        function () {
                                            return r([]);
                                        },
                                        function (e) {
                                            return r([e.dom]);
                                        }
                                    );
                                0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", w)).appendTo(l.getBody());
                                var i = y.createRng();
                                t === n && xt.ie
                                    ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t))
                                    : (o.empty().append(wo).append(t).append(wo), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)),
                                    o.css({ top: y.getPos(e, l.getBody()).y }),
                                    o[0].focus();
                                var a = b.getSel();
                                return a.removeAllRanges(), a.addRange(i), i;
                            })(e, n.targetClone, t),
                            o = Et.fromDom(e);
                        return (
                            Y(yu(Et.fromDom(l.getBody()), "*[data-mce-selected]"), function (e) {
                                je(o, e) || Cn(e, S);
                            }),
                            y.getAttrib(e, S) || e.setAttribute(S, "1"),
                            (v = e),
                            N(),
                            r
                        );
                    })(c);
            }
            return null;
        }
        function h() {
            v && v.removeAttribute(S), br(Et.fromDom(l.getBody()), "#" + w).each(In), (v = null);
        }
        var v,
            n,
            e,
            o,
            b = l.selection,
            y = l.dom,
            C = y.isBlock,
            x = l.getBody(),
            i = Ws(l, x, C, function () {
                return Cd(l);
            }),
            w = "sel-" + y.uniqueId(),
            S = "data-mce-selected",
            r = b.getRng,
            N = function () {
                i.hide();
            };
        return (
            xt.ceFalse &&
                !hh(l) &&
                (l.on("mouseup", function (e) {
                    var t = r();
                    t.collapsed && Nv(l, e.clientX, e.clientY) && Ub(l, t, !1).each(d);
                }),
                l.on("click", function (e) {
                    var t = N1(l, e.target);
                    t && (J1(t) && (e.preventDefault(), l.focus()), G1(t) && y.isChildOf(t, b.getNode()) && h());
                }),
                l.on("blur NewBlock", h),
                l.on("ResizeWindow FullscreenStateChanged", i.reposition),
                l.on(
                    "tap",
                    function (e) {
                        var t = e.target,
                            n = N1(l, t);
                        J1(n) ? (e.preventDefault(), Fb(l, n).each(p)) : f(t) && Fb(l, t).each(p);
                    },
                    !0
                ),
                l.on("mousedown", function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s = e.target;
                    (s !== x && "HTML" !== s.nodeName && !y.isChildOf(s, x)) ||
                        !1 === Nv(l, e.clientX, e.clientY) ||
                        ((t = N1(l, s))
                            ? J1(t)
                                ? (e.preventDefault(), Fb(l, t).each(p))
                                : (h(), (G1(t) && e.shiftKey) || yf(e.clientX, e.clientY, b.getRng()) || (N(), b.placeCaretAt(e.clientX, e.clientY)))
                            : f(s)
                            ? Fb(l, s).each(p)
                            : !1 === Xs(s) &&
                              (h(),
                              N(),
                              (n = f0(x, e.clientX, e.clientY)) &&
                                  ((r = s),
                                  (o = n.node),
                                  (a = y.getParent(r, C)),
                                  (u = y.getParent(o, C)),
                                  (!K(a) &&
                                      ((r !== u && y.isChildOf(a, u) && !1 === J1(N1(l, a))) ||
                                          (!y.isChildOf(u, a) &&
                                              ((i = u), y.getParent(a, C) !== y.getParent(i, C)) &&
                                              (function (e) {
                                                  var t = e.firstChild;
                                                  if (!K(t)) {
                                                      var n = cs.before(t);
                                                      if (Kn(n.getNode()) && 1 === e.childNodes.length) return !c(n);
                                                      var r = Mc(e).next(n);
                                                      return r && !c(r);
                                                  }
                                              })(a)))) ||
                                      (e.preventDefault(), d(m(1, n.node, n.before, !1)), l.getBody().focus()))));
                }),
                l.on("keypress", function (e) {
                    If.modifierPressed(e) || (J1(b.getNode()) && e.preventDefault());
                }),
                l.on("GetSelectionRange", function (e) {
                    var t = e.range;
                    v && (v.parentNode ? ((t = t.cloneRange()).selectNode(v), (e.range = t)) : (v = null));
                }),
                l.on("SetSelectionRange", function (e) {
                    var t, n, r, o, i, a, u;
                    e.range =
                        ((t = e.range),
                        (n = l.schema.getShortEndedElements()),
                        (r = y.createRng()),
                        (o = t.startContainer),
                        (i = t.startOffset),
                        (a = t.endContainer),
                        (u = t.endOffset),
                        Ee(n, o.nodeName.toLowerCase()) ? (0 === i ? r.setStartBefore(o) : r.setStartAfter(o)) : r.setStart(o, i),
                        Ee(n, a.nodeName.toLowerCase()) ? (0 === u ? r.setEndBefore(a) : r.setEndAfter(a)) : r.setEnd(a, u),
                        r);
                    var s = p(e.range, e.forward);
                    s && (e.range = s);
                }),
                l.on("AfterSetSelectionRange", function (e) {
                    var t = e.range,
                        n = t.startContainer.parentNode;
                    g(t) || "mcepastebin" === n.id || N(), y.hasClass(n, "mce-offscreen-selection") || h();
                }),
                l.on("copy", function (e) {
                    var t,
                        n,
                        r = e.clipboardData;
                    e.isDefaultPrevented() ||
                        !e.clipboardData ||
                        xt.ie ||
                        ((t = (n = y.get(w)) && n.getElementsByTagName("*")[0]) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText)));
                }),
                S1(l),
                (e = mu(function () {
                    var e, t;
                    n.removed || !n.getBody().contains(document.activeElement) || ((e = n.selection.getRng()).collapsed && ((t = zb(n, e, !1)), n.selection.setRng(t)));
                }, 0)),
                (n = l).on("focus", function () {
                    e.throttle();
                }),
                n.on("blur", function () {
                    e.cancel();
                }),
                (o = l).on("init", function () {
                    o.on("focusin", function (e) {
                        var t,
                            n,
                            r = e.target;
                        Qn(r) &&
                            ((t = bf(o.getBody(), r)),
                            (n = Gn(t) ? t : r),
                            o.selection.getNode() !== n &&
                                Fb(o, n).each(function (e) {
                                    return o.selection.setRng(e);
                                }));
                    });
                })),
            {
                showCaret: m,
                showBlockCaretContainer: function (e) {
                    e.hasAttribute("data-mce-caret") && (Hr(e), d(r()), b.scrollIntoView(e));
                },
                hideFakeCaret: N,
                destroy: function () {
                    i.destroy(), (v = null);
                },
            }
        );
    }
    function k1(a) {
        function e(e, t) {
            try {
                a.getDoc().execCommand(e, !1, t);
            } catch (e) {}
        }
        function u(e) {
            return e.isDefaultPrevented();
        }
        function t() {
            a.shortcuts.add("meta+a", null, "SelectAll");
        }
        function n() {
            a.inline ||
                b.bind(a.getDoc(), "mousedown mouseup", function (e) {
                    var t;
                    e.target === a.getDoc().documentElement && ((t = y.getRng()), a.getBody().focus(), "mousedown" === e.type ? Mr(t.startContainer) || y.placeCaretAt(e.clientX, e.clientY) : y.setRng(t));
                });
        }
        function r() {
            Range.prototype.getClientRects ||
                a.on("mousedown", function (e) {
                    var t;
                    u(e) ||
                        "HTML" !== e.target.nodeName ||
                        ((t = a.getBody()).blur(),
                        Ar.setEditorTimeout(a, function () {
                            t.focus();
                        }));
                });
        }
        function o() {
            a.on("click", function (e) {
                var t = e.target;
                /^(IMG|HR)$/.test(t.nodeName) && "false" !== b.getContentEditableParent(t) && (e.preventDefault(), a.selection.select(t), a.nodeChanged()),
                    "A" === t.nodeName && b.hasClass(t, "mce-item-anchor") && (e.preventDefault(), y.select(t));
            });
        }
        function i() {
            a.on("keydown", function (e) {
                if (!u(e) && e.keyCode === h && y.isCollapsed() && 0 === y.getRng().startOffset) {
                    var t = y.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1;
                }
            });
        }
        function s() {
            a.getParam("readonly") ||
                a.on("BeforeExecCommand mousedown", function () {
                    e("StyleWithCSS", !1), e("enableInlineTableEditing", !1), Ps(a) || e("enableObjectResizing", !1);
                });
        }
        function c() {
            a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
        }
        function l() {
            a.inline ||
                a.on("keydown", function () {
                    document.activeElement === document.body && a.getWin().focus();
                });
        }
        function f() {
            a.inline ||
                (a.contentStyles.push("body {min-height: 150px}"),
                a.on("click", function (e) {
                    var t;
                    "HTML" === e.target.nodeName && (11 < xt.ie ? a.getBody().focus() : ((t = a.selection.getRng()), a.getBody().focus(), a.selection.setRng(t), a.selection.normalize(), a.nodeChanged()));
                }));
        }
        function d() {
            xt.mac &&
                a.on("keydown", function (e) {
                    !If.metaKeyPressed(e) || e.shiftKey || (37 !== e.keyCode && 39 !== e.keyCode) || (e.preventDefault(), a.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"));
                });
        }
        function m() {
            a.on("click", function (e) {
                var t = e.target;
                do {
                    if ("A" === t.tagName) return void e.preventDefault();
                } while ((t = t.parentNode));
            }),
                a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
        }
        function g() {
            a.on("init", function () {
                a.dom.bind(a.getBody(), "submit", function (e) {
                    e.preventDefault();
                });
            });
        }
        var p = Nt.each,
            h = If.BACKSPACE,
            v = If.DELETE,
            b = a.dom,
            y = a.selection,
            C = a.parser,
            x = xt.gecko,
            w = xt.ie,
            S = xt.webkit,
            N = "data:text/mce-internal,",
            E = w ? "Text" : "URL",
            k = te;
        return (
            hh(a)
                ? (S && (n(), o(), g(), t(), xt.iOS && (l(), f(), m())), x && (r(), s(), c(), d()))
                : (a.on("keydown", function (e) {
                      if (!u(e) && e.keyCode === If.BACKSPACE) {
                          var t,
                              n = (t = y.getRng()).startContainer,
                              r = t.startOffset,
                              o = b.getRoot(),
                              i = n;
                          if (t.collapsed && 0 === r) {
                              for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o; ) i = i.parentNode;
                              "BLOCKQUOTE" === i.tagName && (a.formatter.toggle("blockquote", null, i), (t = b.createRng()).setStart(n, 0), t.setEnd(n, 0), y.setRng(t));
                          }
                      }
                  }),
                  a.on("keydown", function (e) {
                      var t,
                          n,
                          r,
                          o,
                          i = e.keyCode;
                      u(e) ||
                          (i !== v && i !== h) ||
                          ((t = a.selection.isCollapsed()),
                          (n = a.getBody()),
                          (t && !b.isEmpty(n)) ||
                              (!t && ((r = R(a.selection.getRng())), (o = b.createRng()).selectNode(a.getBody()), r !== R(o))) ||
                              (e.preventDefault(), a.setContent(""), n.firstChild && b.isBlock(n.firstChild) ? a.selection.setCursorLocation(n.firstChild, 0) : a.selection.setCursorLocation(n, 0), a.nodeChanged()));
                  }),
                  xt.windowsPhone ||
                      a.on(
                          "keyup focusin mouseup",
                          function (e) {
                              If.modifierPressed(e) || y.normalize();
                          },
                          !0
                      ),
                  S &&
                      (n(),
                      o(),
                      ks(a) &&
                          a.on("init", function () {
                              e("DefaultParagraphSeparator", ks(a));
                          }),
                      g(),
                      i(),
                      C.addNodeFilter("br", function (e) {
                          for (var t = e.length; t--; ) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
                      }),
                      xt.iOS ? (l(), f(), m()) : t()),
                  11 <= xt.ie && (f(), i()),
                  xt.ie &&
                      (t(),
                      e("AutoUrlDetect", !1),
                      a.on("dragstart", function (e) {
                          var t, n, r;
                          (t = e).dataTransfer &&
                              (a.selection.isCollapsed() && "IMG" === t.target.tagName && y.select(t.target), 0 < (n = a.selection.getContent()).length && ((r = N + escape(a.id) + "," + escape(n)), t.dataTransfer.setData(E, r)));
                      }),
                      a.on("drop", function (e) {
                          var t, n, r, o;
                          u(e) ||
                              ((t = e.dataTransfer && (o = e.dataTransfer.getData(E)) && 0 <= o.indexOf(N) ? ((o = o.substr(N.length).split(",")), { id: unescape(o[0]), html: unescape(o[1]) }) : null) &&
                                  t.id !== a.id &&
                                  (e.preventDefault(),
                                  (n = Ef(e.x, e.y, a.getDoc())),
                                  y.setRng(n),
                                  (r = t.html),
                                  a.queryCommandSupported("mceInsertClipboardContent") ? a.execCommand("mceInsertClipboardContent", !1, { content: r, internal: !0 }) : a.execCommand("mceInsertContent", !1, r)));
                      })),
                  x &&
                      (a.on("keydown", function (e) {
                          if (!u(e) && e.keyCode === h && a.getBody().getElementsByTagName("hr").length && y.isCollapsed() && 0 === y.getRng().startOffset) {
                              var t = y.getNode(),
                                  n = t.previousSibling;
                              if ("HR" === t.nodeName) return b.remove(t), void e.preventDefault();
                              n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (b.remove(n), e.preventDefault());
                          }
                      }),
                      r(),
                      a.on("keypress", function (e) {
                          var t;
                          if (!u(e) && (8 === e.keyCode || 46 === e.keyCode) && A()) return (t = _()), a.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1;
                      }),
                      b.bind(a.getDoc(), "cut", function (e) {
                          var t;
                          !u(e) &&
                              A() &&
                              ((t = _()),
                              Ar.setEditorTimeout(a, function () {
                                  t();
                              }));
                      }),
                      s(),
                      a.on("SetContent ExecCommand", function (e) {
                          ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                              p(b.select("a"), function (e) {
                                  var t = e.parentNode,
                                      n = b.getRoot();
                                  if (t.lastChild === e) {
                                      for (; t && !b.isBlock(t); ) {
                                          if (t.parentNode.lastChild !== t || t === n) return;
                                          t = t.parentNode;
                                      }
                                      b.add(t, "br", { "data-mce-bogus": 1 });
                                  }
                              });
                      }),
                      c(),
                      d(),
                      i())),
            {
                refreshContentEditable: k,
                isHidden: function () {
                    if (!x || a.removed) return !1;
                    var e = a.selection.getSel();
                    return !e || !e.rangeCount || 0 === e.rangeCount;
                },
            }
        );
        function _() {
            var e = b.getAttribs(y.getStart().cloneNode(!1));
            return function () {
                var t = y.getStart();
                t !== a.getBody() &&
                    (b.setAttrib(t, "style", null),
                    p(e, function (e) {
                        t.setAttributeNode(e.cloneNode(!0));
                    }));
            };
        }
        function A() {
            return !y.isCollapsed() && b.getParent(y.getStart(), b.isBlock) !== b.getParent(y.getEnd(), b.isBlock);
        }
        function R(e) {
            var t = b.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), y.serializer.serialize(t, { format: "html" });
        }
    }
    function _1(e) {
        return ae(e, function (e) {
            return !1 === b(e);
        });
    }
    function A1(e) {
        var t = e.settings;
        return _1({
            block_elements: t.block_elements,
            boolean_attributes: t.boolean_attributes,
            custom_elements: t.custom_elements,
            extended_valid_elements: t.extended_valid_elements,
            invalid_elements: t.invalid_elements,
            invalid_styles: t.invalid_styles,
            move_caret_before_on_enter_elements: t.move_caret_before_on_enter_elements,
            non_empty_elements: t.non_empty_elements,
            schema: t.schema,
            self_closing_elements: t.self_closing_elements,
            short_ended_elements: t.short_ended_elements,
            special: t.special,
            text_block_elements: t.text_block_elements,
            text_inline_elements: t.text_inline_elements,
            valid_children: t.valid_children,
            valid_classes: t.valid_classes,
            valid_elements: t.valid_elements,
            valid_styles: t.valid_styles,
            verify_html: t.verify_html,
            whitespace_elements: t.whitespace_elements,
            padd_empty_block_inline_children: t.format_empty_lines,
        });
    }
    function R1(e) {
        var t = e.settings,
            n = e.editorUpload.blobCache;
        return _1({
            allow_conditional_comments: t.allow_conditional_comments,
            allow_html_data_urls: t.allow_html_data_urls,
            allow_svg_data_urls: t.allow_svg_data_urls,
            allow_html_in_named_anchor: t.allow_html_in_named_anchor,
            allow_script_urls: t.allow_script_urls,
            allow_unsafe_link_target: t.allow_unsafe_link_target,
            convert_fonts_to_spans: t.convert_fonts_to_spans,
            fix_list_elements: t.fix_list_elements,
            font_size_legacy_values: t.font_size_legacy_values,
            forced_root_block: t.forced_root_block,
            forced_root_block_attrs: t.forced_root_block_attrs,
            padd_empty_with_br: t.padd_empty_with_br,
            preserve_cdata: t.preserve_cdata,
            remove_trailing_brs: t.remove_trailing_brs,
            inline_styles: t.inline_styles,
            root_name: e.inline ? e.getElement().nodeName.toLowerCase() : void 0,
            validate: !0,
            blob_cache: n,
            document: e.getDoc(),
            images_dataimg_filter: t.images_dataimg_filter,
        });
    }
    function D1(e) {
        var t, u, n;
        e.bindPendingEventDelegates(),
            (e.initialized = !0),
            e.fire("Init"),
            e.focus(!0),
            (n = (u = e).dom.getRoot()),
            u.inline ||
                (Pl(u) && u.selection.getStart(!0) !== n) ||
                rf(n).each(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i = e.getNode(),
                        a = cn(i) ? rf(i).getOr(e) : e;
                    xt.browser.isIE() ? ((t = u), (n = a.toRange()), (r = Et.fromDom(t.getBody())), (o = (cd(t) ? ve.from(n) : ve.none()).map(ld).filter(sd(r))), (t.bookmark = o.isSome() ? o : t.bookmark)) : u.selection.setRng(a.toRange());
                }),
            e.nodeChanged({ initial: !0 }),
            e.execCallback("init_instance_callback", e),
            (t = e).settings.auto_focus &&
                Ar.setEditorTimeout(
                    t,
                    function () {
                        var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
                        e.destroyed || e.focus();
                    },
                    100
                );
    }
    function T1(e) {
        return (e.inline ? e.ui : e.dom).styleSheetLoader;
    }
    function O1(e) {
        function t() {
            o.unloadAll(a), e.inline || e.ui.styleSheetLoader.unloadAll(i);
        }
        function n() {
            e.removed ? t() : e.on("remove", t);
        }
        var r,
            o = T1(e),
            i = Bs(e),
            a = e.contentCSS;
        0 < e.contentStyles.length &&
            ((r = ""),
            Nt.each(e.contentStyles, function (e) {
                r += e + "\r\n";
            }),
            e.dom.addStyle(r));
        var u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h = _r
                .all(
                    ((u = e),
                    (s = a),
                    (c = i),
                    (l = [
                        new _r(function (e, t) {
                            return T1(u).loadAll(s, e, t);
                        }),
                    ]),
                    u.inline
                        ? l
                        : l.concat([
                              new _r(function (e, t) {
                                  return u.ui.styleSheetLoader.loadAll(c, e, t);
                              }),
                          ]))
                )
                .then(n)
                .catch(n);
        return (
            e.settings.content_style &&
                ((d = (f = e).settings.content_style),
                (m = Et.fromDom(f.getBody())),
                (g = jt(Pn(m))),
                pn((p = Et.fromTag("style")), "type", "text/css"),
                Ln(p, Et.fromText(d)),
                Ln(g, p),
                f.on("remove", function () {
                    In(p);
                })),
            h
        );
    }
    function B1(e) {
        var t;
        !0 !== e.removed && (hh((t = e)) || t.load({ initial: !0, format: "html" }), (t.startContent = t.getContent({ format: "raw" })), D1(e));
    }
    function P1(t, e) {
        var n = t.settings,
            r = t.getElement(),
            o = t.getDoc();
        n.inline || (t.getElement().style.visibility = t.orgVisibility),
            e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()),
            t.inline && (Q1.addClass(r, "mce-content-body"), (t.contentDocument = o = document), (t.contentWindow = window), (t.bodyElement = r), (t.contentAreaContainer = r));
        var u,
            i,
            a,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v = t.getBody();
        (v.disabled = !0),
            (t.readonly = !!n.readonly),
            t.readonly || (t.inline && "static" === Q1.getStyle(v, "position", !0) && (v.style.position = "relative"), (v.contentEditable = t.getParam("content_editable_state", !0))),
            (v.disabled = !1),
            (t.editorUpload = cb(t)),
            (t.schema = oo(A1(t))),
            (t.dom = eu(o, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: n.force_hex_style_colors,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: function () {
                    return t.inline;
                },
                schema: t.schema,
                contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
                referrerPolicy: Ds(t),
                onSetAttrib: function (e) {
                    t.fire("SetAttrib", e);
                },
            })),
            (t.parser =
                ((i = cv(R1((u = t)), u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
                    for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--; )
                        (r = (n = e[o]).attr(t)) &&
                            !n.attr(a) &&
                            0 !== r.indexOf("data:") &&
                            0 !== r.indexOf("blob:") &&
                            ("style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name)));
                }),
                i.addNodeFilter("script", function (e) {
                    for (var t = e.length; t--; ) {
                        var n = e[t],
                            r = n.attr("type") || "no/type";
                        0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
                    }
                }),
                u.settings.preserve_cdata &&
                    i.addNodeFilter("#cdata", function (e) {
                        for (var t = e.length; t--; ) {
                            var n = e[t];
                            (n.type = 8), (n.name = "#comment"), (n.value = "[CDATA[" + u.dom.encode(n.value) + "]]");
                        }
                    }),
                i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                    for (var t = e.length, n = u.schema.getNonEmptyElements(); t--; ) {
                        var r = e[t];
                        r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new jd("br", 1)).shortEnded = !0);
                    }
                }),
                i)),
            (t.serializer = dv(
                ((s = (a = t).settings),
                _e(
                    _e(_e({}, R1(a)), A1(a)),
                    _1({
                        url_converter: s.url_converter,
                        url_converter_scope: s.url_converter_scope,
                        element_format: s.element_format,
                        entities: s.entities,
                        entity_encoding: s.entity_encoding,
                        indent: s.indent,
                        indent_after: s.indent_after,
                        indent_before: s.indent_before,
                    })
                )),
                t
            )),
            (t.selection = Fh(t.dom, t.getWin(), t.serializer, t)),
            (t.annotator = zl(t)),
            (t.formatter = mb(t)),
            (t.undoManager = pb(t)),
            (t._nodeChangeDispatcher = new h1(t)),
            (t._selectionOverrides = E1(t)),
            (m = t),
            (g = du()),
            (p = au(!1)),
            (h = gu(function (e) {
                m.fire("longpress", _e(_e({}, e), { type: "longpress" })), p.set(!0);
            }, 400)),
            m.on(
                "touchstart",
                function (n) {
                    U0(n).each(function (e) {
                        h.cancel();
                        var t = { x: e.clientX, y: e.clientY, target: n.target };
                        h.throttle(n), p.set(!1), g.set(t);
                    });
                },
                !0
            ),
            m.on(
                "touchmove",
                function (e) {
                    h.cancel(),
                        U0(e).each(function (i) {
                            g.on(function (e) {
                                var t = i,
                                    n = e,
                                    r = Math.abs(t.clientX - n.x),
                                    o = Math.abs(t.clientY - n.y);
                                (5 < r || 5 < o) && (g.clear(), p.set(!1), m.fire("longpresscancel"));
                            });
                        });
                },
                !0
            ),
            m.on(
                "touchend touchcancel",
                function (t) {
                    h.cancel(),
                        "touchcancel" !== t.type &&
                            g
                                .get()
                                .filter(function (e) {
                                    return e.target.isEqualNode(t.target);
                                })
                                .each(function () {
                                    p.get() ? t.preventDefault() : m.fire("tap", _e(_e({}, t), { type: "tap" }));
                                });
                },
                !0
            ),
            (f = l = t).on("click", function (e) {
                f.dom.getParent(e.target, "details") && e.preventDefault();
            }),
            (d = l).parser.addNodeFilter("details", function (e) {
                Y(e, function (e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
                });
            }),
            d.serializer.addNodeFilter("details", function (e) {
                Y(e, function (e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", X(t) ? t : null), e.attr("data-mce-open", null);
                });
            }),
            hh(t) ||
                (c = t).on("click", function (e) {
                    var t, n, r, o, i;
                    3 <= e.detail &&
                        ((r = (t = c).selection.getRng()),
                        (o = cs.fromRangeStart(r)),
                        (i = cs.fromRangeEnd(r)),
                        !cs.isElementPosition(o) ||
                            (b1((n = o.container())) &&
                                rf(n).each(function (e) {
                                    return r.setStart(e.container(), e.offset());
                                })),
                        !cs.isElementPosition(i) ||
                            (b1((n = o.container())) &&
                                of(n).each(function (e) {
                                    return r.setEnd(e.container(), e.offset());
                                })),
                        t.selection.setRng(Cg(r)));
                });
        var b,
            y,
            C,
            x,
            w,
            S,
            N,
            E,
            k,
            _ = hh((b = t)) ? au(null) : GC(b);
        (k = _),
            (E = t).addCommand("delete", function () {
                var e,
                    t = k;
                M0((e = E)) || Gb(e, !1) || qb(e, !1) || k0(e, t, !1) || Bb(e, !1) || yg(e) || Jb(e, !1) || T0(e, !1) || Ib(e) || R0(e, !1) || (F0(e, "Delete"), Sb(e));
            }),
            E.addCommand("forwardDelete", function () {
                var e,
                    t = k;
                Gb((e = E), !0) || qb(e, !0) || k0(e, t, !0) || Bb(e, !0) || yg(e) || Jb(e, !0) || T0(e, !0) || Ib(e) || R0(e, !0) || F0(e, "ForwardDelete");
            }),
            ks((y = t)) && y.on("NodeChange", R(H0, y)),
            (x = (C = t).dom),
            (w = ks(C)),
            (S = C.getParam("placeholder", vc.getAttrib(C.getElement(), "placeholder"), "string")),
            (N = function (e, t) {
                var n, r, o;
                !(function (e) {
                    if (hb(e)) {
                        var t = e.keyCode;
                        return !vb(e) && (If.metaKeyPressed(e) || e.altKey || (112 <= t && t <= 123) || T(Ry, t));
                    }
                })(e) &&
                    ((n = C.getBody()),
                    (r =
                        !(hb((o = e)) && !(vb(o) || ("keyup" === o.type && 229 === o.keyCode))) &&
                        (function (e, t, n) {
                            if (Kr(Et.fromDom(t), !1)) {
                                var r = "" === n,
                                    o = t.firstElementChild;
                                return !o || (!e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()));
                            }
                            return !1;
                        })(x, n, w)),
                    (("" !== x.getAttrib(n, Dy)) === r && !t) ||
                        (x.setAttrib(n, Dy, r ? S : null), x.setAttrib(n, "aria-placeholder", r ? S : null), C.fire("PlaceholderToggle", { state: r }), C.on(r ? "keydown" : "keyup", N), C.off(r ? "keyup" : "keydown", N)));
            }),
            S &&
                C.on("init", function (e) {
                    N(e, !0),
                        C.on("change SetContent ExecCommand", N),
                        C.on("paste", function (e) {
                            return Ar.setEditorTimeout(C, function () {
                                return N(e);
                            });
                        });
                });
        var A = vh(t);
        (function (t) {
            var e = t.settings,
                n = t.getDoc(),
                r = t.getBody();
            t.fire("PreInit"), e.browser_spellcheck || e.gecko_spellcheck || ((n.body.spellcheck = !1), Q1.setAttrib(r, "spellcheck", "false")), (t.quirks = k1(t)), t.fire("PostRender");
            var o = t.getParam("directionality", lu.isRtl() ? "rtl" : void 0);
            void 0 !== o && (r.dir = o),
                e.protect &&
                    t.on("BeforeSetContent", function (t) {
                        Nt.each(e.protect, function (e) {
                            t.content = t.content.replace(e, function (e) {
                                return "\x3c!--mce:protected " + escape(e) + "--\x3e";
                            });
                        });
                    }),
                t.on("SetContent", function () {
                    t.addVisual(t.getBody());
                }),
                t.on("compositionstart compositionend", function (e) {
                    t.composing = "compositionstart" === e.type;
                });
        })(t),
            A.fold(
                function () {
                    O1(t).then(function () {
                        return B1(t);
                    });
                },
                function (e) {
                    t.setProgressState(!0),
                        O1(t).then(function () {
                            e().then(
                                function (e) {
                                    t.setProgressState(!1), B1(t);
                                },
                                function (e) {
                                    t.notificationManager.open({ type: "error", text: String(e) }), B1(t);
                                }
                            );
                        });
                }
            );
    }
    function L1(e, t) {
        var n,
            r,
            o,
            i,
            a = e.translate("Rich Text Area"),
            u =
                ((n = e.id),
                (r = a),
                t.height,
                (o = e.getParam("iframe_attrs", {})),
                hn((i = Et.fromTag("iframe")), o),
                hn(i, { id: n + "_ifr", frameBorder: "0", allowTransparency: "true", title: r }),
                vu(i, "tox-edit-area__iframe"),
                i.dom);
        u.onload = function () {
            (u.onload = null), e.fire("load");
        };
        var s = (function (e, t) {
            if (document.domain !== window.location.hostname && xt.browser.isIE()) {
                var n = ob("mce");
                e[n] = function () {
                    P1(e);
                };
                var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                return Z1.setAttrib(t, "src", r), !0;
            }
            return !1;
        })(e, u);
        return (
            (e.contentAreaContainer = t.iframeContainer),
            (e.iframeElement = u),
            (e.iframeHTML = (function (e) {
                var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
                e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), (t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
                var n = Ns(e, "body_id", "tinymce"),
                    r = Ns(e, "body_class", ""),
                    o = e.translate(e.getParam("iframe_aria_text", "Rich Text Area. Press ALT-0 for help.", "string"));
                return (
                    Es(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + Es(e) + '" />'),
                    t + ('</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id) + '" aria-label="' + o + '"><br></body></html>'
                );
            })(e)),
            Z1.add(t.iframeContainer, u),
            s
        );
    }
    function I1(e) {
        return e.replace(/^\-/, "");
    }
    function M1(e) {
        return { editorContainer: e, iframeContainer: e, api: {} };
    }
    function F1(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s = e.getElement();
        return (
            (e.orgDisplay = s.style.display),
            X(Is(e))
                ? e.theme.renderUI()
                : y(Is(e))
                ? ((n = (t = e).getElement()),
                  (r = Is(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"),
                  r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"),
                  (r.height = r.iframeHeight || n.offsetHeight),
                  r)
                : ((u = (o = e).getElement()), o.inline ? M1(null) : ((i = u), (a = ex.create("div")), ex.insertAfter(a, i), M1(a)))
        );
    }
    function U1(e) {
        var n, t, r, o, i, a, u, s;
        e.fire("ScriptsLoaded"),
            (n = e),
            (t = Nt.trim(Rs(n))),
            (r = n.ui.registry.getAll().icons),
            ne(_e(_e({}, Vv.get("default").icons), Vv.get(t).icons), function (e, t) {
                Ee(r, t) || n.ui.registry.addIcon(t, e);
            }),
            (a = Is((o = e))),
            X(a) ? ((o.settings.theme = I1(a)), (i = Yv.get(a)), (o.theme = new i(o, Yv.urls[a])), o.theme.init && o.theme.init(o, Yv.urls[a] || o.documentBaseUrl.replace(/\/$/, ""), o.$)) : (o.theme = {}),
            (s = []),
            Nt.each(Fs((u = e)).split(/[ ,]/), function (e) {
                tx(u, s, I1(e));
            });
        var c = F1(e),
            l = e,
            f = ve.from(c.api).getOr({}),
            d = {
                show: ve.from(f.show).getOr(te),
                hide: ve.from(f.hide).getOr(te),
                disable: ve.from(f.disable).getOr(te),
                isDisabled: ve.from(f.isDisabled).getOr(D),
                enable: function () {
                    l.mode.isReadOnly() || ve.from(f.enable).map(x);
                },
            };
        l.ui = _e(_e({}, l.ui), d);
        var m,
            g,
            p,
            h = { editorContainer: c.editorContainer, iframeContainer: c.iframeContainer };
        return (
            (e.editorContainer = h.editorContainer || null),
            nb(e),
            e.inline
                ? P1(e)
                : ((p = L1((m = e), (g = h))),
                  g.editorContainer && ((Z1.get(g.editorContainer).style.display = m.orgDisplay), (m.hidden = Z1.isHidden(g.editorContainer))),
                  (m.getElement().style.display = "none"),
                  Z1.setAttrib(m.id, "aria-hidden", "true"),
                  void (p || P1(m)))
        );
    }
    function z1(e) {
        return "-" === e.charAt(0);
    }
    function H1(t, e, n) {
        return ve
            .from(e)
            .filter(function (e) {
                return 0 < e.length && !Vv.has(e);
            })
            .map(function (e) {
                return { url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js", name: ve.some(e) };
            });
    }
    function j1(c, l) {
        var e,
            t,
            f = ou.ScriptLoader,
            n = f,
            r = l,
            o = function () {
                var r, o, t, n, e, i, a, u, s;
                (e = f),
                    (u = Ts((i = c))),
                    (s = i.getParam("language_url", "", "string")),
                    !1 === lu.hasCode(u) &&
                        "en" !== u &&
                        ((a = "" !== s ? s : i.editorManager.baseURL + "/langs/" + u + ".js"),
                        e.add(a, te, void 0, function () {
                            Zv(i, "LanguageLoadError", eb("language", a, u));
                        })),
                    (t = f),
                    Y(
                        (function (e) {
                            for (
                                var t = [],
                                    n = function (e) {
                                        t.push(e);
                                    },
                                    r = 0;
                                r < e.length;
                                r++
                            )
                                e[r].each(n);
                            return t;
                        })([
                            H1((n = c), "default", l),
                            ve
                                .from(n.getParam("icons_url", "", "string"))
                                .filter(function (e) {
                                    return 0 < e.length;
                                })
                                .map(function (e) {
                                    return { url: e, name: ve.none() };
                                })
                                .orThunk(function () {
                                    return H1(n, Rs(n), "");
                                }),
                        ]),
                        function (e) {
                            t.add(e.url, te, void 0, function () {
                                Zv(n, "IconsLoadError", eb("icons", e.url, e.name.getOrUndefined()));
                            });
                        }
                    ),
                    (r = c),
                    (o = l),
                    Nt.each(r.getParam("external_plugins"), function (e, t) {
                        Xv.load(t, e, te, void 0, function () {
                            tb(r, e, t);
                        }),
                            (r.settings.plugins += " " + t);
                    }),
                    Nt.each(Fs(r).split(/[ ,]/), function (e) {
                        var t, n;
                        (e = Nt.trim(e)) &&
                            !Xv.urls[e] &&
                            (z1(e)
                                ? ((e = e.substr(1, e.length)),
                                  (t = Xv.dependencies(e)),
                                  Nt.each(t, function (e) {
                                      var t = Xv.createUrl({ prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }, e);
                                      Xv.load(t.resource, t, te, void 0, function () {
                                          tb(r, t.prefix + t.resource + t.suffix, t.resource);
                                      });
                                  }))
                                : ((n = { prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }),
                                  Xv.load(e, n, te, void 0, function () {
                                      tb(r, n.prefix + n.resource + n.suffix, e);
                                  })));
                    }),
                    f.loadQueue(
                        function () {
                            c.removed || U1(c);
                        },
                        c,
                        function () {
                            c.removed || U1(c);
                        }
                    );
            },
            i = Is((e = c));
        X(i)
            ? (z1(i) || Ee(Yv.urls, i) || ((t = e.getParam("theme_url")) ? Yv.load(i, e.documentBaseURI.toAbsolute(t)) : Yv.load(i, "themes/" + i + "/theme" + r + ".js")),
              n.loadQueue(function () {
                  Yv.waitFor(i, o);
              }))
            : o();
    }
    function V1(a) {
        return function (i, e) {
            return ve
                .from(e)
                .map(Et.fromDom)
                .filter(_n)
                .bind(function (e) {
                    return (
                        (n = a),
                        (t = i),
                        (r = e.dom),
                        Tg(
                            Et.fromDom(r),
                            function (e) {
                                return Sn((t = e), n).orThunk(function () {
                                    return "font" === kt(t)
                                        ? ue(rx, n).bind(function (e) {
                                              return bn(t, e);
                                          })
                                        : ve.none();
                                });
                                var t;
                            },
                            function (e) {
                                return je(Et.fromDom(t), e);
                            }
                        ).or(((o = e.dom), ve.from(eu.DOM.getStyle(o, a, !0))))
                    );
                    var n, t, r, o;
                })
                .getOr("");
        };
    }
    function q1(e) {
        return rf(e.getBody()).map(function (e) {
            var t = e.container();
            return Vn(t) ? t.parentNode : t;
        });
    }
    function $1(e, t) {
        return (
            (n = e),
            (r = a(ve.some, t)),
            (o = n),
            ve
                .from(o.selection.getRng())
                .bind(function (e) {
                    var t = o.getBody();
                    return e.startContainer === t && 0 === e.startOffset ? ve.none() : ve.from(o.selection.getStart(!0));
                })
                .orThunk(R(q1, n))
                .map(Et.fromDom)
                .filter(_n)
                .bind(r)
        );
        var n, r, o;
    }
    function W1(e, t) {
        if (/^[0-9.]+$/.test(t)) {
            var n = parseInt(t, 10);
            if (1 <= n && n <= 7) {
                var r = Nt.explode(e.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large")),
                    o = Nt.explode(e.getParam("font_size_classes", ""));
                return o ? o[n - 1] || t : r[n - 1] || t;
            }
            return t;
        }
        return t;
    }
    var K1 = Gn,
        X1 = Yn,
        Y1 = function (e) {
            e.on(function (e) {
                C1(e.ghost);
            }),
                e.clear();
        },
        G1 = Yn,
        J1 = Gn,
        Q1 = eu.DOM,
        Z1 = eu.DOM,
        ex = eu.DOM,
        tx = function (t, n, r) {
            var o,
                i,
                a,
                u,
                e = Xv.get(r),
                s = Xv.urls[r] || t.documentBaseUrl.replace(/\/$/, "");
            if (
                ((r = Nt.trim(r)),
                e &&
                    -1 === Nt.inArray(n, r) &&
                    (Nt.each(Xv.dependencies(r), function (e) {
                        tx(t, n, e);
                    }),
                    !t.plugins[r]))
            )
                try {
                    var c = new e(t, s, t.$);
                    (t.plugins[r] = c).init && (c.init(t, s), n.push(r));
                } catch (e) {
                    (i = r), (a = e), Cf((o = t), "PluginLoadError", { message: (u = lu.translate(["Failed to initialize plugin: {0}", i])) }), wy(u, a), Qv(o, u);
                }
        },
        nx = eu.DOM,
        rx = { "font-size": "size", "font-family": "face" },
        ox = V1("font-size"),
        ix = i(function (e) {
            return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
        }, V1("font-family")),
        ax = Nt.each,
        ux = Nt.map,
        sx = Nt.inArray,
        cx =
            ((lx.prototype.execCommand = function (t, n, r, e) {
                var o,
                    i,
                    a = !1,
                    u = this;
                if (!u.editor.removed) {
                    if (
                        ("mcefocus" !== t.toLowerCase() &&
                            (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || (e && e.skip_focus)
                                ? md((i = u.editor)).each(function (e) {
                                      return i.selection.setRng(e);
                                  })
                                : u.editor.focus()),
                        (e = u.editor.fire("BeforeExecCommand", { command: t, ui: n, value: r })).isDefaultPrevented())
                    )
                        return !1;
                    var s = t.toLowerCase();
                    if ((o = u.commands.exec[s])) return o(s, n, r), u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0;
                    if (
                        (ax(this.editor.plugins, function (e) {
                            if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !(a = !0);
                        }),
                        a)
                    )
                        return a;
                    if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0;
                    try {
                        a = u.editor.getDoc().execCommand(t, n, r);
                    } catch (e) {}
                    return !!a && (u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0);
                }
            }),
            (lx.prototype.queryCommandState = function (e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                    if (((e = e.toLowerCase()), (t = this.commands.state[e]))) return t(e);
                    try {
                        return this.editor.getDoc().queryCommandState(e);
                    } catch (e) {}
                    return !1;
                }
            }),
            (lx.prototype.queryCommandValue = function (e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                    if (((e = e.toLowerCase()), (t = this.commands.value[e]))) return t(e);
                    try {
                        return this.editor.getDoc().queryCommandValue(e);
                    } catch (e) {}
                }
            }),
            (lx.prototype.addCommands = function (e, n) {
                void 0 === n && (n = "exec");
                var r = this;
                ax(e, function (t, e) {
                    ax(e.toLowerCase().split(","), function (e) {
                        r.commands[n][e] = t;
                    });
                });
            }),
            (lx.prototype.addCommand = function (e, o, i) {
                var a = this;
                (e = e.toLowerCase()),
                    (this.commands.exec[e] = function (e, t, n, r) {
                        return o.call(i || a.editor, t, n, r);
                    });
            }),
            (lx.prototype.queryCommandSupported = function (e) {
                if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
                try {
                    return this.editor.getDoc().queryCommandSupported(e);
                } catch (e) {}
                return !1;
            }),
            (lx.prototype.addQueryStateHandler = function (e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                    (this.commands.state[e] = function () {
                        return t.call(n || r.editor);
                    });
            }),
            (lx.prototype.addQueryValueHandler = function (e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                    (this.commands.value[e] = function () {
                        return t.call(n || r.editor);
                    });
            }),
            (lx.prototype.hasCustomCommand = function (e) {
                return (e = e.toLowerCase()), !!this.commands.exec[e];
            }),
            (lx.prototype.execNativeCommand = function (e, t, n) {
                return void 0 === t && (t = !1), void 0 === n && (n = null), this.editor.getDoc().execCommand(e, t, n);
            }),
            (lx.prototype.isFormatMatch = function (e) {
                return this.editor.formatter.match(e);
            }),
            (lx.prototype.toggleFormat = function (e, t) {
                this.editor.formatter.toggle(e, t), this.editor.nodeChanged();
            }),
            (lx.prototype.storeSelection = function (e) {
                this.selectionBookmark = this.editor.selection.getBookmark(e);
            }),
            (lx.prototype.restoreSelection = function () {
                this.editor.selection.moveToBookmark(this.selectionBookmark);
            }),
            (lx.prototype.setupCommands = function (u) {
                var o = this;
                function e(r) {
                    return function () {
                        var e = u.selection,
                            t = e.isCollapsed() ? [u.dom.getParent(e.getNode(), u.dom.isBlock)] : e.getSelectedBlocks(),
                            n = ux(t, function (e) {
                                return !!u.formatter.matchNode(e, r);
                            });
                        return -1 !== sx(n, !0);
                    };
                }
                this.addCommands({
                    "mceResetDesignMode,mceBeginUndoLevel": te,
                    "mceEndUndoLevel,mceAddUndoLevel": function () {
                        u.undoManager.add();
                    },
                    mceFocus: function (e, t, n) {
                        var r, o;
                        (o = n),
                            (r = u).removed ||
                                (o
                                    ? zd
                                    : function (t) {
                                          var e = t.selection,
                                              n = t.getBody(),
                                              r = e.getRng();
                                          t.quirks.refreshContentEditable(),
                                              void 0 !== t.bookmark &&
                                                  !1 === Cd(t) &&
                                                  md(t).each(function (e) {
                                                      t.selection.setRng(e), (r = e);
                                                  });
                                          var o,
                                              i,
                                              a =
                                                  ((o = t),
                                                  (i = e.getNode()),
                                                  o.dom.getParent(i, function (e) {
                                                      return "true" === o.dom.getContentEditable(e);
                                                  }));
                                          if (t.$.contains(n, a)) return yd(a), bd(t, r), zd(t);
                                          t.inline || (xt.opera || yd(n), t.getWin().focus()), (xt.gecko || t.inline) && (yd(n), bd(t, r)), zd(t);
                                      })(r);
                    },
                    "Cut,Copy,Paste": function (e) {
                        var t,
                            n,
                            r = u.getDoc();
                        try {
                            o.execNativeCommand(e);
                        } catch (e) {
                            t = !0;
                        }
                        (!(t = ("paste" === e && !r.queryCommandEnabled(e)) || t) && r.queryCommandSupported(e)) ||
                            ((n = u.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")),
                            xt.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")),
                            u.notificationManager.open({ text: n, type: "error" }));
                    },
                    unlink: function () {
                        var e;
                        u.selection.isCollapsed() ? (e = u.dom.getParent(u.selection.getStart(), "a")) && u.dom.remove(e, !0) : u.formatter.remove("link");
                    },
                    "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (e) {
                        var t = e.substring(7);
                        "full" === t && (t = "justify"),
                            ax("left,center,right,justify".split(","), function (e) {
                                t !== e && u.formatter.remove("align" + e);
                            }),
                            "none" !== t && o.toggleFormat("align" + t);
                    },
                    "InsertUnorderedList,InsertOrderedList": function (e) {
                        var t;
                        o.execNativeCommand(e);
                        var n = u.dom.getParent(u.selection.getNode(), "ol,ul");
                        n && ((t = n.parentNode), /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (o.storeSelection(), u.dom.split(t, n), o.restoreSelection()));
                    },
                    "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                        o.toggleFormat(e);
                    },
                    "ForeColor,HiliteColor": function (e, t, n) {
                        o.toggleFormat(e, { value: n });
                    },
                    FontName: function (e, t, n) {
                        var r, o;
                        (o = W1((r = u), n)),
                            r.formatter.toggle("fontname", {
                                value: A(o.split(/\s*,\s*/), function (e) {
                                    return -1 === e.indexOf(" ") || Ge(e, '"') || Ge(e, "'") ? e : "'" + e + "'";
                                }).join(","),
                            }),
                            r.nodeChanged();
                    },
                    FontSize: function (e, t, n) {
                        var r;
                        (r = u).formatter.toggle("fontsize", { value: W1(r, n) }), r.nodeChanged();
                    },
                    LineHeight: function (e, t, n) {
                        var r;
                        (r = u).formatter.toggle("lineheight", { value: String(n) }), r.nodeChanged();
                    },
                    Lang: function (e, t, n) {
                        o.toggleFormat(e, { value: n.code, customValue: n.customCode });
                    },
                    RemoveFormat: function (e) {
                        u.formatter.remove(e);
                    },
                    mceBlockQuote: function () {
                        o.toggleFormat("blockquote");
                    },
                    FormatBlock: function (e, t, n) {
                        return o.toggleFormat(n || "p");
                    },
                    mceCleanup: function () {
                        var e = u.selection.getBookmark();
                        u.setContent(u.getContent()), u.selection.moveToBookmark(e);
                    },
                    mceRemoveNode: function (e, t, n) {
                        var r = n || u.selection.getNode();
                        r !== u.getBody() && (o.storeSelection(), u.dom.remove(r, !0), o.restoreSelection());
                    },
                    mceSelectNodeDepth: function (e, t, n) {
                        var r = 0;
                        u.dom.getParent(
                            u.selection.getNode(),
                            function (e) {
                                if (1 === e.nodeType && r++ === n) return u.selection.select(e), !1;
                            },
                            u.getBody()
                        );
                    },
                    mceSelectNode: function (e, t, n) {
                        u.selection.select(n);
                    },
                    mceInsertContent: function (e, t, n) {
                        var r, o, i, a;
                        (r = u),
                            (o = (function (e) {
                                if ("string" == typeof e) return { content: e, details: {} };
                                var t = Nt.extend({ paste: e.paste, data: { paste: e.paste } }, e);
                                return { content: e.content, details: t };
                            })(n)),
                            (i = o.content),
                            (a = o.details),
                            bh(r).editor.insertContent(i, a);
                    },
                    mceInsertRawHTML: function (e, t, n) {
                        u.selection.setContent("tiny_mce_marker");
                        var r = u.getContent();
                        u.setContent(
                            r.replace(/tiny_mce_marker/g, function () {
                                return n;
                            })
                        );
                    },
                    mceInsertNewLine: function (e, t, n) {
                        VC(u, n);
                    },
                    mceToggleFormat: function (e, t, n) {
                        o.toggleFormat(n);
                    },
                    mceSetContent: function (e, t, n) {
                        u.setContent(n);
                    },
                    "Indent,Outdent": function (e) {
                        I0(u, e);
                    },
                    mceRepaint: te,
                    InsertHorizontalRule: function () {
                        u.execCommand("mceInsertContent", !1, "<hr />");
                    },
                    mceToggleVisualAid: function () {
                        (u.hasVisual = !u.hasVisual), u.addVisual();
                    },
                    mceReplaceContent: function (e, t, n) {
                        u.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, u.selection.getContent({ format: "text" })));
                    },
                    mceInsertLink: function (e, t, n) {
                        "string" == typeof n && (n = { href: n });
                        var r = u.dom.getParent(u.selection.getNode(), "a");
                        (n.href = n.href.replace(/ /g, "%20")), (r && n.href) || u.formatter.remove("link"), n.href && u.formatter.apply("link", n, r);
                    },
                    selectAll: function () {
                        var e,
                            t = u.dom.getParent(u.selection.getStart(), Yn);
                        t && ((e = u.dom.createRng()).selectNodeContents(t), u.selection.setRng(e));
                    },
                    mceNewDocument: function () {
                        u.setContent("");
                    },
                    InsertLineBreak: function (e, t, n) {
                        return TC(u, n), !0;
                    },
                }),
                    o.addCommands(
                        {
                            JustifyLeft: e("alignleft"),
                            JustifyCenter: e("aligncenter"),
                            JustifyRight: e("alignright"),
                            JustifyFull: e("alignjustify"),
                            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                                return o.isFormatMatch(e);
                            },
                            mceBlockQuote: function () {
                                return o.isFormatMatch("blockquote");
                            },
                            Outdent: function () {
                                return P0(u);
                            },
                            "InsertUnorderedList,InsertOrderedList": function (e) {
                                var t = u.dom.getParent(u.selection.getNode(), "ul,ol");
                                return t && (("insertunorderedlist" === e && "UL" === t.tagName) || ("insertorderedlist" === e && "OL" === t.tagName));
                            },
                        },
                        "state"
                    ),
                    o.addCommands({
                        Undo: function () {
                            u.undoManager.undo();
                        },
                        Redo: function () {
                            u.undoManager.redo();
                        },
                    }),
                    o.addQueryValueHandler(
                        "FontName",
                        function () {
                            return $1((t = u), function (e) {
                                return ix(t.getBody(), e.dom);
                            }).getOr("");
                            var t;
                        },
                        this
                    ),
                    o.addQueryValueHandler(
                        "FontSize",
                        function () {
                            return $1((t = u), function (e) {
                                return ox(t.getBody(), e.dom);
                            }).getOr("");
                            var t;
                        },
                        this
                    ),
                    o.addQueryValueHandler(
                        "LineHeight",
                        function () {
                            return $1((t = u), function (n) {
                                var e = Et.fromDom(t.getBody());
                                return Tg(
                                    n,
                                    function (e) {
                                        return Sn(e, "line-height");
                                    },
                                    R(je, e)
                                ).getOrThunk(function () {
                                    var e = parseFloat(wn(n, "line-height")),
                                        t = parseFloat(wn(n, "font-size"));
                                    return String(e / t);
                                });
                            }).getOr("");
                            var t;
                        },
                        this
                    );
            }),
            lx);
    function lx(e) {
        (this.commands = { state: {}, exec: {}, value: {} }), (this.editor = e), this.setupCommands(e);
    }
    function fx(e, t, n) {
        var r, o, i, a, u, s;
        bu(e, t) && !1 === n
            ? ((o = t),
              hu((r = e))
                  ? r.dom.classList.remove(o)
                  : ((u = o),
                    0 <
                    (s = U(pu((a = r), "class"), function (e) {
                        return e !== u;
                    })).length
                        ? pn(a, "class", s.join(" "))
                        : Cn(a, "class")),
              0 === (hu((i = r)) ? i.dom.classList : pu(i, "class")).length && Cn(i, "class"))
            : n && vu(e, t);
    }
    function dx(e, t, n) {
        try {
            e.getDoc().execCommand(t, !1, String(n));
        } catch (e) {}
    }
    function mx(e, t) {
        e.dom.contentEditable = t ? "true" : "false";
    }
    function gx(e, t) {
        var n,
            r,
            o = Et.fromDom(e.getBody());
        fx(o, "mce-content-readonly", t),
            t
                ? (e.selection.controlSelection.hideResizeRect(),
                  e._selectionOverrides.hideFakeCaret(),
                  ve.from(e.selection.getNode()).each(function (e) {
                      e.removeAttribute("data-mce-selected");
                  }),
                  mx(o, !(e.readonly = !0)),
                  Y(yu(o, '*[contenteditable="true"]'), function (e) {
                      pn(e, vx, "true"), mx(e, !1);
                  }))
                : (mx(o, !(e.readonly = !1)),
                  Y(yu(o, "*[" + vx + '="true"]'), function (e) {
                      Cn(e, vx), mx(e, !0);
                  }),
                  dx(e, "StyleWithCSS", !1),
                  dx(e, "enableInlineTableEditing", !1),
                  dx(e, "enableObjectResizing", !1),
                  (Cd((n = e)) ||
                      ((r = n),
                      od(Pn(Et.fromDom(r.getElement())))
                          .filter(function (e) {
                              return !(void 0 !== (t = e.dom.classList) && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))) && pd(r, e.dom);
                              var t;
                          })
                          .isSome())) &&
                      e.focus(),
                  e.selection.setRng(e.selection.getRng()),
                  e.nodeChanged());
    }
    function px(e) {
        return e.readonly;
    }
    function hx(t) {
        t.parser.addAttributeFilter("contenteditable", function (e) {
            px(t) &&
                Y(e, function (e) {
                    e.attr(vx, e.attr("contenteditable")), e.attr("contenteditable", "false");
                });
        }),
            t.serializer.addAttributeFilter(vx, function (e) {
                px(t) &&
                    Y(e, function (e) {
                        e.attr("contenteditable", e.attr(vx));
                    });
            }),
            t.serializer.addTempAttr(vx);
    }
    var vx = "data-mce-contenteditable",
        bx = Nt.makeMap(
            "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
            " "
        ),
        yx =
            ((Cx.isNative = function (e) {
                return !!bx[e.toLowerCase()];
            }),
            (Cx.prototype.fire = function (e, t) {
                var n = e.toLowerCase(),
                    r = so(n, t || {}, this.scope);
                this.settings.beforeFire && this.settings.beforeFire(r);
                var o = this.bindings[n];
                if (o)
                    for (var i = 0, a = o.length; i < a; i++) {
                        var u = o[i];
                        if (!u.removed) {
                            if ((u.once && this.off(n, u.func), r.isImmediatePropagationStopped())) return r;
                            if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r;
                        }
                    }
                return r;
            }),
            (Cx.prototype.on = function (e, t, n, r) {
                if ((t = !1 === t ? D : t)) {
                    var o = { func: t, removed: !1 };
                    r && Nt.extend(o, r);
                    for (var i = e.toLowerCase().split(" "), a = i.length; a--; ) {
                        var u = i[a],
                            s = this.bindings[u];
                        s || ((s = []), this.toggleEvent(u, !0)), (s = n ? Ae([o], s, !0) : Ae(Ae([], s, !0), [o], !1)), (this.bindings[u] = s);
                    }
                }
                return this;
            }),
            (Cx.prototype.off = function (e, t) {
                var n = this;
                if (e)
                    for (var r = e.toLowerCase().split(" "), o = r.length; o--; ) {
                        var i,
                            a = r[o],
                            u = this.bindings[a];
                        if (!a)
                            return (
                                ne(this.bindings, function (e, t) {
                                    n.toggleEvent(t, !1), delete n.bindings[t];
                                }),
                                this
                            );
                        u &&
                            (t
                                ? ((u = (i = B(u, function (e) {
                                      return e.func === t;
                                  })).fail),
                                  (this.bindings[a] = u),
                                  Y(i.pass, function (e) {
                                      e.removed = !0;
                                  }))
                                : (u.length = 0),
                            u.length || (this.toggleEvent(e, !1), delete this.bindings[a]));
                    }
                else
                    ne(this.bindings, function (e, t) {
                        n.toggleEvent(t, !1);
                    }),
                        (this.bindings = {});
                return this;
            }),
            (Cx.prototype.once = function (e, t, n) {
                return this.on(e, t, n, { once: !0 });
            }),
            (Cx.prototype.has = function (e) {
                return (e = e.toLowerCase()), !(!this.bindings[e] || 0 === this.bindings[e].length);
            }),
            Cx);
    function Cx(e) {
        (this.bindings = {}), (this.settings = e || {}), (this.scope = this.settings.scope || this), (this.toggleEvent = this.settings.toggleEvent || D);
    }
    function xx(n) {
        return (
            n._eventDispatcher ||
                (n._eventDispatcher = new yx({
                    scope: n,
                    toggleEvent: function (e, t) {
                        yx.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t);
                    },
                })),
            n._eventDispatcher
        );
    }
    function wx(e, t) {
        if ("selectionchange" === t) return e.getDoc();
        if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
        var n = Ls(e);
        return n ? (e.eventRoot || (e.eventRoot = Rx.select(n)[0]), e.eventRoot) : e.getBody();
    }
    function Sx(e, t, n) {
        var r, o, i, a;
        e.hidden || px(e)
            ? px(e) &&
              ((r = e),
              "click" !== (o = n).type ||
                  If.metaKeyPressed(o) ||
                  ((i = Et.fromDom(o.target)),
                  (a = r),
                  yr(i, "a", function (e) {
                      return je(e, Et.fromDom(a.getBody()));
                  })
                      .bind(function (e) {
                          return bn(e, "href");
                      })
                      .each(function (e) {
                          var t, n;
                          o.preventDefault(),
                              /^#/.test(e)
                                  ? (t = r.dom.select(e + ',[name="' + (Ge((n = e), "#") ? n.substring("#".length) : n) + '"]')).length && r.selection.scrollIntoView(t[0], !0)
                                  : window.open(e, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
                      })))
            : e.fire(t, n);
    }
    function Nx(i, a) {
        var e, t;
        i.delegates || (i.delegates = {}),
            i.delegates[a] ||
                i.removed ||
                ((t = wx(i, a)),
                Ls(i)
                    ? (_x ||
                          ((_x = {}),
                          i.editorManager.on("removeEditor", function () {
                              i.editorManager.activeEditor ||
                                  (_x &&
                                      (ne(_x, function (e, t) {
                                          i.dom.unbind(wx(i, t));
                                      }),
                                      (_x = null)));
                          })),
                      _x[a] ||
                          ((_x[a] = e = function (e) {
                              for (var t = e.target, n = i.editorManager.get(), r = n.length; r--; ) {
                                  var o = n[r].getBody();
                                  (o !== t && !Rx.isChildOf(t, o)) || Sx(n[r], a, e);
                              }
                          }),
                          Rx.bind(t, a, e)))
                    : (Rx.bind(
                          t,
                          a,
                          (e = function (e) {
                              Sx(i, a, e);
                          })
                      ),
                      (i.delegates[a] = e)));
    }
    function Ex(e, t, n, r) {
        var o = n[t.get()],
            i = n[r];
        try {
            i.activate();
        } catch (e) {
            return void console.error("problem while activating editor mode " + r + ":", e);
        }
        o.deactivate(), o.editorReadOnly !== i.editorReadOnly && gx(e, i.editorReadOnly), t.set(r), e.fire("SwitchMode", { mode: r });
    }
    function kx(e) {
        var t,
            n = {};
        Ox(Bx(e.toLowerCase(), "+"), function (e) {
            e in Lx ? (n[e] = !0) : /^[0-9]{2,}$/.test(e) ? (n.keyCode = parseInt(e, 10)) : ((n.charCode = e.charCodeAt(0)), (n.keyCode = Px[e] || e.toUpperCase().charCodeAt(0)));
        });
        var r = [n.keyCode];
        for (t in Lx) n[t] ? r.push(t) : (n[t] = !1);
        return (n.id = r.join(",")), n.access && ((n.alt = !0), xt.mac ? (n.ctrl = !0) : (n.shift = !0)), n.meta && (xt.mac ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))), n;
    }
    var _x,
        Ax = {
            fire: function (e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                var r = xx(this).fire(e, t);
                if (!1 !== n && this.parent) for (var o = this.parent(); o && !r.isPropagationStopped(); ) o.fire(e, r, !1), (o = o.parent());
                return r;
            },
            on: function (e, t, n) {
                return xx(this).on(e, t, n);
            },
            off: function (e, t) {
                return xx(this).off(e, t);
            },
            once: function (e, t) {
                return xx(this).once(e, t);
            },
            hasEventListeners: function (e) {
                return xx(this).has(e);
            },
        },
        Rx = eu.DOM,
        Dx = _e(_e({}, Ax), {
            bindPendingEventDelegates: function () {
                var t = this;
                Nt.each(t._pendingNativeEvents, function (e) {
                    Nx(t, e);
                });
            },
            toggleNativeEvent: function (e, t) {
                var n = this;
                "focus" !== e &&
                    "blur" !== e &&
                    (n.removed ||
                        (t ? (n.initialized ? Nx(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : (n._pendingNativeEvents = [e])) : n.initialized && (n.dom.unbind(wx(n, e), e, n.delegates[e]), delete n.delegates[e])));
            },
            unbindAllNativeEvents: function () {
                var n = this,
                    e = n.getBody(),
                    t = n.dom;
                n.delegates &&
                    (ne(n.delegates, function (e, t) {
                        n.dom.unbind(wx(n, t), t, e);
                    }),
                    delete n.delegates),
                    !n.inline && e && t && ((e.onload = null), t.unbind(n.getWin()), t.unbind(n.getDoc())),
                    t && (t.unbind(e), t.unbind(n.getContainer()));
            },
        }),
        Tx = ["design", "readonly"],
        Ox = Nt.each,
        Bx = Nt.explode,
        Px = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        Lx = Nt.makeMap("alt,ctrl,shift,meta,access"),
        Ix =
            ((Mx.prototype.add = function (e, n, t, r) {
                var o = this,
                    i = o.normalizeCommandFunc(t);
                return (
                    Ox(Bx(Nt.trim(e)), function (e) {
                        var t = o.createShortcut(e, n, i, r);
                        o.shortcuts[t.id] = t;
                    }),
                    !0
                );
            }),
            (Mx.prototype.remove = function (e) {
                var t = this.createShortcut(e);
                return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
            }),
            (Mx.prototype.normalizeCommandFunc = function (e) {
                var t = this,
                    n = e;
                return "string" == typeof n
                    ? function () {
                          t.editor.execCommand(n, !1, null);
                      }
                    : Nt.isArray(n)
                    ? function () {
                          t.editor.execCommand(n[0], n[1], n[2]);
                      }
                    : n;
            }),
            (Mx.prototype.createShortcut = function (e, t, n, r) {
                var o = Nt.map(Bx(e, ">"), kx);
                return (o[o.length - 1] = Nt.extend(o[o.length - 1], { func: n, scope: r || this.editor })), Nt.extend(o[0], { desc: this.editor.translate(t), subpatterns: o.slice(1) });
            }),
            (Mx.prototype.hasModifier = function (e) {
                return e.altKey || e.ctrlKey || e.metaKey;
            }),
            (Mx.prototype.isFunctionKey = function (e) {
                return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123;
            }),
            (Mx.prototype.matchShortcut = function (e, t) {
                return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || (e.charCode && e.charCode === t.charCode)) && (e.preventDefault(), !0);
            }),
            (Mx.prototype.executeShortcutAction = function (e) {
                return e.func ? e.func.call(e.scope) : null;
            }),
            Mx);
    function Mx(e) {
        (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
        var n = this;
        e.on("keyup keypress keydown", function (t) {
            (!n.hasModifier(t) && !n.isFunctionKey(t)) ||
                t.isDefaultPrevented() ||
                (Ox(n.shortcuts, function (e) {
                    if (n.matchShortcut(t, e)) return (n.pendingPatterns = e.subpatterns.slice(0)), "keydown" === t.type && n.executeShortcutAction(e), !0;
                }),
                n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()));
        });
    }
    var Fx = eu.DOM,
        Ux = Nt.extend,
        zx = Nt.each,
        Hx = Nt.resolve,
        jx = xt.ie,
        Vx =
            ((qx.prototype.render = function () {
                !(function (t) {
                    var e = t.id;
                    lu.setCode(Ts(t));
                    var n,
                        r,
                        o,
                        i,
                        a = function () {
                            nx.unbind(window, "ready", a), t.render();
                        };
                    ci.Event.domLoaded
                        ? t.getElement() &&
                          xt.contentEditable &&
                          ((n = Et.fromDom(t.getElement())),
                          (r = L(
                              n.dom.attributes,
                              function (e, t) {
                                  return (e[t.name] = t.value), e;
                              },
                              {}
                          )),
                          t.on("remove", function () {
                              O(n.dom.attributes, function (e) {
                                  return Cn(n, e.name), 0;
                              }),
                                  hn(n, r);
                          }),
                          (t.ui.styleSheetLoader = Rr.forElement(n, { contentCssCors: (o = t).getParam("content_css_cors"), referrerPolicy: Ds(o) })),
                          t.getParam("inline") ? (t.inline = !0) : ((t.orgVisibility = t.getElement().style.visibility), (t.getElement().style.visibility = "hidden")),
                          (i = t.getElement().form || nx.getParent(e, "form")) &&
                              ((t.formElement = i),
                              t.getParam("hidden_input") && !jn(t.getElement()) && (nx.insertAfter(nx.create("input", { type: "hidden", name: e }), e), (t.hasHiddenInput = !0)),
                              (t.formEventDelegate = function (e) {
                                  t.fire(e.type, e);
                              }),
                              nx.bind(i, "submit reset", t.formEventDelegate),
                              t.on("reset", function () {
                                  t.resetContent();
                              }),
                              !t.getParam("submit_patch") ||
                                  i.submit.nodeType ||
                                  i.submit.length ||
                                  i._mceOldSubmit ||
                                  ((i._mceOldSubmit = i.submit),
                                  (i.submit = function () {
                                      return t.editorManager.triggerSave(), t.setDirty(!1), i._mceOldSubmit(i);
                                  }))),
                          (t.windowManager = Gv(t)),
                          (t.notificationManager = Ev(t)),
                          "xml" === t.getParam("encoding") &&
                              t.on("GetContent", function (e) {
                                  e.save && (e.content = nx.encode(e.content));
                              }),
                          t.getParam("add_form_submit_trigger") &&
                              t.on("submit", function () {
                                  t.initialized && t.save();
                              }),
                          t.getParam("add_unload_trigger") &&
                              ((t._beforeUnload = function () {
                                  !t.initialized || t.destroyed || t.isHidden() || t.save({ format: "raw", no_events: !0, set_dirty: !1 });
                              }),
                              t.editorManager.on("BeforeUnload", t._beforeUnload)),
                          t.editorManager.add(t),
                          j1(t, t.suffix))
                        : nx.bind(window, "ready", a);
                })(this);
            }),
            (qx.prototype.focus = function (e) {
                this.execCommand("mceFocus", !1, e);
            }),
            (qx.prototype.hasFocus = function () {
                return Cd(this);
            }),
            (qx.prototype.execCallback = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r,
                    o = this.settings[e];
                if (o)
                    return (
                        this.callbackLookup && (r = this.callbackLookup[e]) && ((o = r.func), (r = r.scope)),
                        "string" == typeof o && ((r = (r = o.replace(/\.\w+$/, "")) ? Hx(r) : 0), (o = Hx(o)), (this.callbackLookup = this.callbackLookup || {}), (this.callbackLookup[e] = { func: o, scope: r })),
                        o.apply(r || this, t)
                    );
            }),
            (qx.prototype.translate = function (e) {
                return lu.translate(e);
            }),
            (qx.prototype.getParam = function (e, t, n) {
                return (
                    (i = t),
                    (a = n),
                    (l = (o = e) in (r = this).settings ? r.settings[o] : i),
                    "hash" === a
                        ? ((c = {}),
                          "string" == typeof (s = l)
                              ? Y(0 < s.indexOf("=") ? s.split(/[;,](?![^=;,]*(?:[;,]|$))/) : s.split(","), function (e) {
                                    var t = e.split("=");
                                    1 < t.length ? (c[Nt.trim(t[0])] = Nt.trim(t[1])) : (c[Nt.trim(t[0])] = Nt.trim(t[0]));
                                })
                              : (c = s),
                          c)
                        : "string" === a
                        ? xv(X, r, o).getOr(i)
                        : "number" === a
                        ? xv(N, r, o).getOr(i)
                        : "boolean" === a
                        ? xv(v, r, o).getOr(i)
                        : "object" === a
                        ? xv(h, r, o).getOr(i)
                        : "array" === a
                        ? xv(S, r, o).getOr(i)
                        : "string[]" === a
                        ? xv(
                              ((u = X),
                              function (e) {
                                  return S(e) && j(e, u);
                              }),
                              r,
                              o
                          ).getOr(i)
                        : "function" === a
                        ? xv(y, r, o).getOr(i)
                        : l
                );
                var r, o, i, a, u, s, c, l;
            }),
            (qx.prototype.hasPlugin = function (e, t) {
                return !(!T(Fs(this).split(/[ ,]/), e) || (t && void 0 === Xv.get(e)));
            }),
            (qx.prototype.nodeChanged = function (e) {
                this._nodeChangeDispatcher.nodeChanged(e);
            }),
            (qx.prototype.addCommand = function (e, t, n) {
                this.editorCommands.addCommand(e, t, n);
            }),
            (qx.prototype.addQueryStateHandler = function (e, t, n) {
                this.editorCommands.addQueryStateHandler(e, t, n);
            }),
            (qx.prototype.addQueryValueHandler = function (e, t, n) {
                this.editorCommands.addQueryValueHandler(e, t, n);
            }),
            (qx.prototype.addShortcut = function (e, t, n, r) {
                this.shortcuts.add(e, t, n, r);
            }),
            (qx.prototype.execCommand = function (e, t, n, r) {
                return this.editorCommands.execCommand(e, t, n, r);
            }),
            (qx.prototype.queryCommandState = function (e) {
                return this.editorCommands.queryCommandState(e);
            }),
            (qx.prototype.queryCommandValue = function (e) {
                return this.editorCommands.queryCommandValue(e);
            }),
            (qx.prototype.queryCommandSupported = function (e) {
                return this.editorCommands.queryCommandSupported(e);
            }),
            (qx.prototype.show = function () {
                this.hidden && ((this.hidden = !1), this.inline ? (this.getBody().contentEditable = "true") : (Fx.show(this.getContainer()), Fx.hide(this.id)), this.load(), this.fire("show"));
            }),
            (qx.prototype.hide = function () {
                var e = this,
                    t = e.getDoc();
                e.hidden ||
                    (jx && t && !e.inline && t.execCommand("SelectAll"),
                    e.save(),
                    e.inline ? ((e.getBody().contentEditable = "false"), e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (Fx.hide(e.getContainer()), Fx.setStyle(e.id, "display", e.orgDisplay)),
                    (e.hidden = !0),
                    e.fire("hide"));
            }),
            (qx.prototype.isHidden = function () {
                return !!this.hidden;
            }),
            (qx.prototype.setProgressState = function (e, t) {
                this.fire("ProgressState", { state: e, time: t });
            }),
            (qx.prototype.load = function (e) {
                var t = this.getElement();
                if (this.removed) return "";
                if (t) {
                    (e = e || {}).load = !0;
                    var n = jn(t) ? t.value : t.innerHTML,
                        r = this.setContent(n, e);
                    return (e.element = t), e.no_events || this.fire("LoadContent", e), (e.element = t = null), r;
                }
            }),
            (qx.prototype.save = function (e) {
                var t,
                    n,
                    r = this,
                    o = r.getElement();
                if (o && r.initialized && !r.removed)
                    return (
                        ((e = e || {}).save = !0),
                        (e.element = o),
                        (e.content = r.getContent(e)),
                        e.no_events || r.fire("SaveContent", e),
                        "raw" === e.format && r.fire("RawSaveContent", e),
                        (t = e.content),
                        jn(o)
                            ? (o.value = t)
                            : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                              (n = Fx.getParent(r.id, "form")) &&
                                  zx(n.elements, function (e) {
                                      if (e.name === r.id) return (e.value = t), !1;
                                  })),
                        (e.element = o = null),
                        !1 !== e.set_dirty && r.setDirty(!1),
                        t
                    );
            }),
            (qx.prototype.setContent = function (e, t) {
                return mv(this, e, t);
            }),
            (qx.prototype.getContent = function (e) {
                return (t = this), (r = (n = void 0 === (n = e) ? {} : n).format || "html"), (o = n), bh(t).editor.getContent(o, r);
                var t, n, r, o;
            }),
            (qx.prototype.insertContent = function (e, t) {
                t && (e = Ux({ content: e }, t)), this.execCommand("mceInsertContent", !1, e);
            }),
            (qx.prototype.resetContent = function (e) {
                void 0 === e ? mv(this, this.startContent, { format: "raw" }) : mv(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
            }),
            (qx.prototype.isDirty = function () {
                return !this.isNotDirty;
            }),
            (qx.prototype.setDirty = function (e) {
                var t = !this.isNotDirty;
                (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
            }),
            (qx.prototype.getContainer = function () {
                return this.container || (this.container = Fx.get(this.editorContainer || this.id + "_parent")), this.container;
            }),
            (qx.prototype.getContentAreaContainer = function () {
                return this.contentAreaContainer;
            }),
            (qx.prototype.getElement = function () {
                return this.targetElm || (this.targetElm = Fx.get(this.id)), this.targetElm;
            }),
            (qx.prototype.getWin = function () {
                var e;
                return this.contentWindow || ((e = this.iframeElement) && (this.contentWindow = e.contentWindow)), this.contentWindow;
            }),
            (qx.prototype.getDoc = function () {
                var e;
                return this.contentDocument || ((e = this.getWin()) && (this.contentDocument = e.document)), this.contentDocument;
            }),
            (qx.prototype.getBody = function () {
                var e = this.getDoc();
                return this.bodyElement || (e ? e.body : null);
            }),
            (qx.prototype.convertURL = function (e, t, n) {
                var r = this.settings;
                return r.urlconverter_callback
                    ? this.execCallback("urlconverter_callback", e, n, !0, t)
                    : !r.convert_urls || (n && "LINK" === n.nodeName) || 0 === e.indexOf("file:") || 0 === e.length
                    ? e
                    : r.relative_urls
                    ? this.documentBaseURI.toRelative(e)
                    : this.documentBaseURI.toAbsolute(e, r.remove_script_host);
            }),
            (qx.prototype.addVisual = function (e) {
                var t;
                (t = e), yh(this).editor.addVisual(t);
            }),
            (qx.prototype.remove = function () {
                var e, t, n, r, o;
                (e = this).removed ||
                    ((t = e._selectionOverrides),
                    (n = e.editorUpload),
                    (r = e.getBody()),
                    (o = e.getElement()),
                    r && e.save({ is_removing: !0 }),
                    (e.removed = !0),
                    e.unbindAllNativeEvents(),
                    e.hasHiddenInput && o && Ov.remove(o.nextSibling),
                    e.fire("remove"),
                    e.editorManager.remove(e),
                    !e.inline && r && Ov.setStyle(e.id, "display", e.orgDisplay),
                    e.fire("detach"),
                    Ov.remove(e.getContainer()),
                    gv(t),
                    gv(n),
                    e.destroy());
            }),
            (qx.prototype.destroy = function (e) {
                var t, n, r, o, i, a, u;
                (n = e),
                    (a = (t = this).selection),
                    (u = t.dom),
                    t.destroyed ||
                        (n || t.removed
                            ? (n || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), gv(a), gv(u)),
                              (o = (r = t).formElement) && (o._mceOldSubmit && ((o.submit = o._mceOldSubmit), (o._mceOldSubmit = null)), Ov.unbind(o, "submit reset", r.formEventDelegate)),
                              ((i = t).contentAreaContainer = i.formElement = i.container = i.editorContainer = null),
                              (i.bodyElement = i.contentDocument = i.contentWindow = null),
                              (i.iframeElement = i.targetElm = null),
                              i.selection && (i.selection = i.selection.win = i.selection.dom = i.selection.dom.doc = null),
                              (t.destroyed = !0))
                            : t.remove());
            }),
            (qx.prototype.uploadImages = function (e) {
                return this.editorUpload.uploadImages(e);
            }),
            (qx.prototype._scanForImages = function () {
                return this.editorUpload.scanForImages();
            }),
            (qx.prototype.addButton = function () {
                throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead");
            }),
            (qx.prototype.addSidebar = function () {
                throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead");
            }),
            (qx.prototype.addMenuItem = function () {
                throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead");
            }),
            (qx.prototype.addContextToolbar = function () {
                throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead");
            }),
            qx);
    function qx(e, t, n) {
        var r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y,
            C,
            x = this;
        function w(n, r) {
            return function (e, t) {
                return (n[e.toLowerCase()] = _e(_e({}, t), { type: r }));
            };
        }
        (this.plugins = {}),
            (this.contentCSS = []),
            (this.contentStyles = []),
            (this.loadedCSS = {}),
            (this.isNotDirty = !1),
            (this.editorManager = n),
            (this.documentBaseUrl = n.documentBaseURL),
            Ux(this, Dx),
            (this.settings =
                ((d = (f = this).documentBaseUrl),
                (m = n.defaultSettings),
                (p = d),
                (h = Fv),
                (v = f),
                (b = {
                    id: e,
                    theme: "silver",
                    toolbar_mode: bv((g = t), "floating"),
                    plugins: "",
                    document_base_url: p,
                    add_form_submit_trigger: !0,
                    submit_patch: !0,
                    add_unload_trigger: !0,
                    convert_urls: !0,
                    relative_urls: !0,
                    remove_script_host: !0,
                    object_resizing: !0,
                    doctype: "<!DOCTYPE html>",
                    visual: !0,
                    font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                    forced_root_block: "p",
                    hidden_input: !0,
                    inline_styles: !0,
                    convert_fonts_to_spans: !0,
                    indent: !0,
                    indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    entity_encoding: "named",
                    url_converter: v.convertURL,
                    url_converter_scope: v,
                }),
                (y = _e(_e({}, b), h ? jv : {})),
                !1 !== (C = Cv(Uv || zv, Uv, y, m, g)).deprecation_warnings && pv(g, C),
                C)),
            this.settings.suffix && (n.suffix = this.settings.suffix),
            (this.suffix = n.suffix),
            this.settings.base_url && n._setBaseUrl(this.settings.base_url),
            (this.baseUri = n.baseURI),
            this.settings.referrer_policy && (ou.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), eu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),
            (fu.languageLoad = this.settings.language_load),
            (fu.baseURL = n.baseURL),
            (this.id = e),
            this.setDirty(!1),
            (this.documentBaseURI = new nv(this.settings.document_base_url, { base_uri: this.baseUri })),
            (this.baseURI = this.baseUri),
            (this.inline = !!this.settings.inline),
            (this.shortcuts = new Ix(this)),
            (this.editorCommands = new cx(this)),
            this.settings.cache_suffix && (xt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")),
            (this.ui = {
                registry: {
                    addAutocompleter:
                        ((u = {}),
                        (r = {
                            addButton: w((o = {}), "button"),
                            addGroupToolbarButton: w(o, "grouptoolbarbutton"),
                            addToggleButton: w(o, "togglebutton"),
                            addMenuButton: w(o, "menubutton"),
                            addSplitButton: w(o, "splitbutton"),
                            addMenuItem: w((i = {}), "menuitem"),
                            addNestedMenuItem: w(i, "nestedmenuitem"),
                            addToggleMenuItem: w(i, "togglemenuitem"),
                            addAutocompleter: w((a = {}), "autocompleter"),
                            addContextMenu: w((s = {}), "contextmenu"),
                            addContextToolbar: w((c = {}), "contexttoolbar"),
                            addContextForm: w(c, "contextform"),
                            addSidebar: w((l = {}), "sidebar"),
                            addIcon: function (e, t) {
                                return (u[e.toLowerCase()] = t);
                            },
                            getAll: function () {
                                return { buttons: o, menuItems: i, icons: u, popups: a, contextMenus: s, contextToolbars: c, sidebars: l };
                            },
                        }).addAutocompleter),
                    addButton: r.addButton,
                    addContextForm: r.addContextForm,
                    addContextMenu: r.addContextMenu,
                    addContextToolbar: r.addContextToolbar,
                    addIcon: r.addIcon,
                    addMenuButton: r.addMenuButton,
                    addMenuItem: r.addMenuItem,
                    addNestedMenuItem: r.addNestedMenuItem,
                    addSidebar: r.addSidebar,
                    addSplitButton: r.addSplitButton,
                    addToggleButton: r.addToggleButton,
                    addGroupToolbarButton: r.addGroupToolbarButton,
                    addToggleMenuItem: r.addToggleMenuItem,
                    getAll: r.getAll,
                },
                styleSheetLoader: void 0,
                show: te,
                hide: te,
                enable: te,
                disable: te,
                isDisabled: D,
            });
        var S,
            N,
            E,
            k,
            _,
            A =
                ((k = au("design")),
                (_ = au({ design: { activate: te, deactivate: te, editorReadOnly: !1 }, readonly: { activate: te, deactivate: te, editorReadOnly: !0 } })),
                (N = S = this).serializer
                    ? hx(N)
                    : N.on("PreInit", function () {
                          hx(N);
                      }),
                (E = S).on("ShowCaret", function (e) {
                    px(E) && e.preventDefault();
                }),
                E.on("ObjectSelected", function (e) {
                    px(E) && e.preventDefault();
                }),
                {
                    isReadOnly: function () {
                        return px(S);
                    },
                    set: function (e) {
                        return (function (e, t, n, r) {
                            if (r !== n.get()) {
                                if (!Ee(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                                e.initialized
                                    ? Ex(e, n, t, r)
                                    : e.on("init", function () {
                                          return Ex(e, n, t, r);
                                      });
                            }
                        })(S, _.get(), k, e);
                    },
                    get: function () {
                        return k.get();
                    },
                    register: function (e, t) {
                        _.set(
                            (function (e, t, n) {
                                var r;
                                if (T(Tx, t)) throw new Error("Cannot override default mode " + t);
                                return _e(
                                    _e({}, e),
                                    (((r = {})[t] = _e(_e({}, n), {
                                        deactivate: function () {
                                            try {
                                                n.deactivate();
                                            } catch (e) {
                                                console.error("problem while deactivating editor mode " + t + ":", e);
                                            }
                                        },
                                    })),
                                    r)
                                );
                            })(_.get(), e, t)
                        );
                    },
                });
        (this.mode = A),
            (this.setMode = A.set),
            n.fire("SetupEditor", { editor: this }),
            this.execCallback("setup", this),
            (this.$ = Ya.overrideDefaults(function () {
                return { context: x.inline ? x.getBody() : x.getDoc(), element: x.getBody() };
            }));
    }
    function $x(t) {
        var n = t.type;
        Jx(ow.get(), function (e) {
            switch (n) {
                case "scroll":
                    e.fire("ScrollWindow", t);
                    break;
                case "resize":
                    e.fire("ResizeWindow", t);
            }
        });
    }
    function Wx(e) {
        e !== ew && (e ? Ya(window).on("resize scroll", $x) : Ya(window).off("resize scroll", $x), (ew = e));
    }
    function Kx(t) {
        var e = nw;
        delete tw[t.id];
        for (var n = 0; n < tw.length; n++)
            if (tw[n] === t) {
                tw.splice(n, 1);
                break;
            }
        return (
            (nw = U(nw, function (e) {
                return t !== e;
            })),
            ow.activeEditor === t && (ow.activeEditor = 0 < nw.length ? nw[0] : null),
            ow.focusedEditor === t && (ow.focusedEditor = null),
            e.length !== nw.length
        );
    }
    var Xx,
        Yx = eu.DOM,
        Gx = Nt.explode,
        Jx = Nt.each,
        Qx = Nt.extend,
        Zx = 0,
        ew = !1,
        tw = [],
        nw = [],
        rw = "CSS1Compat" !== document.compatMode,
        ow = _e(_e({}, Ax), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: Ya,
            majorVersion: "5",
            minorVersion: "10.9",
            releaseDate: "2023-11-15",
            editors: tw,
            i18n: lu,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function () {
                var e,
                    t = "",
                    n = nv.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(n) || (n += "/"));
                var r = window.tinymce || window.tinyMCEPreInit;
                if (r) (e = r.base || r.baseURL), (t = r.suffix);
                else {
                    for (var o, i = document.getElementsByTagName("script"), a = 0; a < i.length; a++)
                        if ("" !== (o = i[a].src || "")) {
                            var u = o.substring(o.lastIndexOf("/"));
                            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(o)) {
                                -1 !== u.indexOf(".min") && (t = ".min"), (e = o.substring(0, o.lastIndexOf("/")));
                                break;
                            }
                        }
                    !e && document.currentScript && (-1 !== (o = document.currentScript.src).indexOf(".min") && (t = ".min"), (e = o.substring(0, o.lastIndexOf("/"))));
                }
                (this.baseURL = new nv(n).toAbsolute(e)), (this.documentBaseURL = n), (this.baseURI = new nv(this.baseURL)), (this.suffix = t), this.on("AddEditor", R(hd, this)), this.on("RemoveEditor", R(vd, this));
            },
            overrideDefaults: function (e) {
                var t = e.base_url;
                t && this._setBaseUrl(t);
                var n = e.suffix;
                e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                void 0 !== r &&
                    ne(r, function (e, t) {
                        fu.PluginManager.urls[t] = e;
                    });
            },
            init: function (r) {
                function u(e) {
                    var t = e.id;
                    return (
                        t ||
                            ((t = ue(e, "name")
                                .filter(function (e) {
                                    return !Yx.get(e);
                                })
                                .getOrThunk(Yx.uniqueId)),
                            e.setAttribute("id", t)),
                        t
                    );
                }
                function s(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : Yx.hasClass(e, t);
                }
                var n,
                    c = this,
                    l = Nt.makeMap(
                        "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                        " "
                    ),
                    f = function (e) {
                        n = e;
                    },
                    t = function () {
                        function n(e, t, n) {
                            var r = new Vx(e, t, c);
                            a.push(r),
                                r.on("init", function () {
                                    ++i === o.length && f(a);
                                }),
                                (r.targetElm = r.targetElm || n),
                                r.render();
                        }
                        var o,
                            e,
                            i = 0,
                            a = [];
                        Yx.unbind(window, "ready", t),
                            (e = r.onpageload) && e.apply(c, []),
                            (o = Ya.unique(
                                (function (t) {
                                    var n = [];
                                    if (xt.browser.isIE() && xt.browser.version.major < 11)
                                        return wy("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                                    if (rw) return wy("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                                    if (t.types)
                                        return (
                                            Jx(t.types, function (e) {
                                                n = n.concat(Yx.select(e.selector));
                                            }),
                                            n
                                        );
                                    if (t.selector) return Yx.select(t.selector);
                                    if (t.target) return [t.target];
                                    switch (t.mode) {
                                        case "exact":
                                            var e = t.elements || "";
                                            0 < e.length &&
                                                Jx(Gx(e), function (t) {
                                                    var e = Yx.get(t);
                                                    e
                                                        ? n.push(e)
                                                        : Jx(document.forms, function (e) {
                                                              Jx(e.elements, function (e) {
                                                                  e.name === t && ((t = "mce_editor_" + Zx++), Yx.setAttrib(e, "id", t), n.push(e));
                                                              });
                                                          });
                                                });
                                            break;
                                        case "textareas":
                                        case "specific_textareas":
                                            Jx(Yx.select("textarea"), function (e) {
                                                (t.editor_deselector && s(e, t.editor_deselector)) || (t.editor_selector && !s(e, t.editor_selector)) || n.push(e);
                                            });
                                    }
                                    return n;
                                })(r)
                            )),
                            r.types
                                ? Jx(r.types, function (t) {
                                      Nt.each(o, function (e) {
                                          return !Yx.is(e, t.selector) || (n(u(e), Qx({}, r, t), e), !1);
                                      });
                                  })
                                : (Nt.each(o, function (e) {
                                      var t;
                                      (t = c.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (Kx(t), t.unbindAllNativeEvents(), t.destroy(!0), (t.removed = !0));
                                  }),
                                  0 ===
                                  (o = Nt.grep(o, function (e) {
                                      return !c.get(e.id);
                                  })).length
                                      ? f([])
                                      : Jx(o, function (e) {
                                            var t = e;
                                            r.inline && t.tagName.toLowerCase() in l ? wy("Could not initialize inline editor on invalid inline target element", e) : n(u(e), r, e);
                                        }));
                    };
                return (
                    (c.settings = r),
                    Yx.bind(window, "ready", t),
                    new _r(function (t) {
                        n
                            ? t(n)
                            : (f = function (e) {
                                  t(e);
                              });
                    })
                );
            },
            get: function (t) {
                return 0 === arguments.length
                    ? nw.slice(0)
                    : X(t)
                    ? M(nw, function (e) {
                          return e.id === t;
                      }).getOr(null)
                    : (N(t) && nw[t]) || null;
            },
            add: function (e) {
                var n = this;
                return (
                    tw[e.id] === e ||
                        (null === n.get(e.id) && ("length" !== e.id && (tw[e.id] = e), tw.push(e), nw.push(e)),
                        Wx(!0),
                        (n.activeEditor = e),
                        n.fire("AddEditor", { editor: e }),
                        Xx ||
                            ((Xx = function (e) {
                                var t = n.fire("BeforeUnload");
                                if (t.returnValue) return e.preventDefault(), (e.returnValue = t.returnValue), t.returnValue;
                            }),
                            window.addEventListener("beforeunload", Xx))),
                    e
                );
            },
            createEditor: function (e, t) {
                return this.add(new Vx(e, t, this));
            },
            remove: function (e) {
                var t,
                    n,
                    r = this;
                if (e) {
                    if (!X(e)) return (n = e), l(r.get(n.id)) ? null : (Kx(n) && r.fire("RemoveEditor", { editor: n }), 0 === nw.length && window.removeEventListener("beforeunload", Xx), n.remove(), Wx(0 < nw.length), n);
                    Jx(Yx.select(e), function (e) {
                        (n = r.get(e.id)) && r.remove(n);
                    });
                } else for (t = nw.length - 1; 0 <= t; t--) r.remove(nw[t]);
            },
            execCommand: function (e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new Vx(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? (r.isHidden() ? r.show() : r.hide()) : this.execCommand("mceAddEditor", !1, n), !0;
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
            },
            triggerSave: function () {
                Jx(nw, function (e) {
                    e.save();
                });
            },
            addI18n: function (e, t) {
                lu.add(e, t);
            },
            translate: function (e) {
                return lu.translate(e);
            },
            setActive: function (e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", { relatedTarget: e }), e.fire("activate", { relatedTarget: t })), (this.activeEditor = e);
            },
            _setBaseUrl: function (e) {
                (this.baseURL = new nv(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, ""))), (this.baseURI = new nv(this.baseURL));
            },
        });
    function iw(e, t, n) {
        var r = t.x,
            o = t.y,
            i = e.w,
            a = e.h,
            u = t.w,
            s = t.h,
            c = (n || "").split("");
        return (
            "b" === c[0] && (o += s),
            "r" === c[1] && (r += u),
            "c" === c[0] && (o += gw(s / 2)),
            "c" === c[1] && (r += gw(u / 2)),
            "b" === c[3] && (o -= a),
            "r" === c[4] && (r -= i),
            "c" === c[3] && (o -= gw(a / 2)),
            "c" === c[4] && (r -= gw(i / 2)),
            uw(r, o, i, a)
        );
    }
    function aw() {}
    ow.setup();
    function uw(e, t, n, r) {
        return { x: e, y: t, w: n, h: r };
    }
    var sw,
        cw,
        lw,
        fw,
        dw = Math.min,
        mw = Math.max,
        gw = Math.round,
        pw = {
            inflate: function (e, t, n) {
                return uw(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
            },
            relativePosition: iw,
            findBestRelativePosition: function (e, t, n, r) {
                for (var o, i = 0; i < r.length; i++) if ((o = iw(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null;
            },
            intersect: function (e, t) {
                var n = mw(e.x, t.x),
                    r = mw(e.y, t.y),
                    o = dw(e.x + e.w, t.x + t.w),
                    i = dw(e.y + e.h, t.y + t.h);
                return o - n < 0 || i - r < 0 ? null : uw(n, r, o - n, i - r);
            },
            clamp: function (e, t, n) {
                var r = e.x,
                    o = e.y,
                    i = e.x + e.w,
                    a = e.y + e.h,
                    u = t.x + t.w,
                    s = t.y + t.h,
                    c = mw(0, t.x - r),
                    l = mw(0, t.y - o),
                    f = mw(0, i - u),
                    d = mw(0, a - s);
                return (r += c), (o += l), n && ((i += c), (a += l), (r -= f), (o -= d)), uw(r, o, (i -= f) - r, (a -= d) - o);
            },
            create: uw,
            fromClientRect: function (e) {
                return uw(e.left, e.top, e.width, e.height);
            },
        },
        hw =
            ((sw = {}),
            (cw = {}),
            {
                load: function (r, o) {
                    var i = 'Script at URL "' + o + '" failed to load',
                        a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                    if (void 0 !== sw[r]) return sw[r];
                    var e = new _r(function (e, t) {
                        var n = (function (e, t, n) {
                            function r(n) {
                                return function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    o || ((o = !0), null !== i && (clearTimeout(i), (i = null)), n.apply(null, e));
                                };
                            }
                            void 0 === n && (n = 1e3);
                            var o = !1,
                                i = null,
                                a = r(e),
                                u = r(t);
                            return {
                                start: function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    o ||
                                        null !== i ||
                                        (i = setTimeout(function () {
                                            return u.apply(null, e);
                                        }, n));
                                },
                                resolve: a,
                                reject: u,
                            };
                        })(e, t);
                        (cw[r] = n.resolve),
                            ou.ScriptLoader.loadScript(
                                o,
                                function () {
                                    return n.start(a);
                                },
                                function () {
                                    return n.reject(i);
                                }
                            );
                    });
                    return (sw[r] = e);
                },
                add: function (e, t) {
                    void 0 !== cw[e] && (cw[e](t), delete cw[e]), (sw[e] = _r.resolve(t));
                },
            }),
        vw = Nt.each,
        bw = Nt.extend;
    aw.extend = lw = function (n) {
        function r() {
            var e, t, n;
            if (!fw && (this.init && this.init.apply(this, arguments), (t = this.Mixins))) for (e = t.length; e--; ) (n = t[e]).init && n.init.apply(this, arguments);
        }
        function t() {
            return this;
        }
        var o = this.prototype;
        fw = !0;
        var i = new this();
        return (
            (fw = !1),
            n.Mixins &&
                (vw(n.Mixins, function (e) {
                    for (var t in e) "init" !== t && (n[t] = e[t]);
                }),
                o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))),
            n.Methods &&
                vw(n.Methods.split(","), function (e) {
                    n[e] = t;
                }),
            n.Properties &&
                vw(n.Properties.split(","), function (e) {
                    var t = "_" + e;
                    n[e] = function (e) {
                        return void 0 !== e ? ((this[t] = e), this) : this[t];
                    };
                }),
            n.Statics &&
                vw(n.Statics, function (e, t) {
                    r[t] = e;
                }),
            n.Defaults && o.Defaults && (n.Defaults = bw({}, o.Defaults, n.Defaults)),
            ne(n, function (e, t) {
                var n, r;
                "function" == typeof e && o[t]
                    ? (i[t] =
                          ((n = t),
                          (r = e),
                          function () {
                              var e = this._super;
                              this._super = o[n];
                              var t = r.apply(this, arguments);
                              return (this._super = e), t;
                          }))
                    : (i[t] = e);
            }),
            (r.prototype = i),
            ((r.constructor = r).extend = lw),
            r
        );
    };
    var yw,
        Cw,
        xw,
        ww = Math.min,
        Sw = Math.max,
        Nw = Math.round,
        Ew = {
            serialize: function (e) {
                var t = JSON.stringify(e);
                return X(t)
                    ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
                          var t = e.charCodeAt(0).toString(16);
                          return "\\u" + "0000".substring(t.length) + t;
                      })
                    : t;
            },
            parse: function (e) {
                try {
                    return JSON.parse(e);
                } catch (e) {}
            },
        },
        kw = {
            callbacks: {},
            count: 0,
            send: function (t) {
                var n = this,
                    r = eu.DOM,
                    o = (void 0 !== t.count ? t : n).count,
                    i = "tinymce_jsonp_" + o;
                (n.callbacks[o] = function (e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e);
                }),
                    r.add(r.doc.body, "script", { id: i, src: t.url, type: "text/javascript" }),
                    n.count++;
            },
        },
        _w = _e(_e({}, Ax), {
            send: function (e) {
                var t,
                    n = 0,
                    r = function () {
                        !e.async || 4 === t.readyState || 1e4 < n++
                            ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), (t = null))
                            : Ar.setTimeout(r, 10);
                    };
                if (
                    ((e.scope = e.scope || this),
                    (e.success_scope = e.success_scope || e.scope),
                    (e.error_scope = e.error_scope || e.scope),
                    (e.async = !1 !== e.async),
                    (e.data = e.data || ""),
                    _w.fire("beforeInitialize", { settings: e }),
                    (t = new XMLHttpRequest()).overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type && t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                        Nt.each(e.requestheaders, function (e) {
                            t.setRequestHeader(e.key, e.value);
                        }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = _w.fire("beforeSend", { xhr: t, settings: e }).xhr).send(e.data),
                    !e.async)
                )
                    return r();
                Ar.setTimeout(r, 10);
            },
        }),
        Aw = Nt.extend,
        Rw =
            ((Dw.sendRPC = function (e) {
                return new Dw().send(e);
            }),
            (Dw.prototype.send = function (e) {
                var n = e.error,
                    r = e.success,
                    o = Aw(this.settings, e);
                (o.success = function (e, t) {
                    (e = void 0 === (e = Ew.parse(e)) ? { error: "JSON Parse error." } : e).error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result);
                }),
                    (o.error = function (e, t) {
                        n && n.call(o.error_scope || o.scope, e, t);
                    }),
                    (o.data = Ew.serialize({ id: e.id || "c" + this.count++, method: e.method, params: e.params })),
                    (o.content_type = "application/json"),
                    _w.send(o);
            }),
            Dw);
    function Dw(e) {
        (this.settings = Aw({}, e)), (this.count = 0);
    }
    try {
        var Tw,
            Ow = "__storage_test__";
        (Tw = window.localStorage).setItem(Ow, Ow), Tw.removeItem(Ow);
    } catch (e) {
        (yw = {}),
            (Cw = []),
            (xw = {
                getItem: function (e) {
                    return yw[e] || null;
                },
                setItem: function (e, t) {
                    Cw.push(e), (yw[e] = String(t));
                },
                key: function (e) {
                    return Cw[e];
                },
                removeItem: function (t) {
                    (Cw = Cw.filter(function (e) {
                        return e === t;
                    })),
                        delete yw[t];
                },
                clear: function () {
                    (Cw = []), (yw = {});
                },
                length: 0,
            }),
            Object.defineProperty(xw, "length", {
                get: function () {
                    return Cw.length;
                },
                configurable: !1,
                enumerable: !1,
            }),
            (Tw = xw);
    }
    var Bw = {
            geom: { Rect: pw },
            util: {
                Promise: _r,
                Delay: Ar,
                Tools: Nt,
                VK: If,
                URI: nv,
                Class: aw,
                EventDispatcher: yx,
                Observable: Ax,
                I18n: lu,
                XHR: _w,
                JSON: Ew,
                JSONRequest: Rw,
                JSONP: kw,
                LocalStorage: Tw,
                Color: function (e) {
                    function t(e) {
                        var t;
                        return (
                            "object" == typeof e
                                ? "r" in e
                                    ? ((u = e.r), (s = e.g), (c = e.b))
                                    : "v" in e &&
                                      (function (e, t, n) {
                                          if (((e = (parseInt(e, 10) || 0) % 360), (t = parseInt(t, 10) / 100), (n = parseInt(n, 10) / 100), (t = Sw(0, ww(t, 1))), (n = Sw(0, ww(n, 1))), 0 !== t)) {
                                              var r = e / 60,
                                                  o = n * t,
                                                  i = o * (1 - Math.abs((r % 2) - 1)),
                                                  a = n - o;
                                              switch (Math.floor(r)) {
                                                  case 0:
                                                      (u = o), (s = i), (c = 0);
                                                      break;
                                                  case 1:
                                                      (u = i), (s = o), (c = 0);
                                                      break;
                                                  case 2:
                                                      (u = 0), (s = o), (c = i);
                                                      break;
                                                  case 3:
                                                      (u = 0), (s = i), (c = o);
                                                      break;
                                                  case 4:
                                                      (u = i), (s = 0), (c = o);
                                                      break;
                                                  case 5:
                                                      (u = o), (s = 0), (c = i);
                                                      break;
                                                  default:
                                                      u = s = c = 0;
                                              }
                                              (u = Nw(255 * (u + a))), (s = Nw(255 * (s + a))), (c = Nw(255 * (c + a)));
                                          } else u = s = c = Nw(255 * n);
                                      })(e.h, e.s, e.v)
                                : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))
                                ? ((u = parseInt(t[1], 10)), (s = parseInt(t[2], 10)), (c = parseInt(t[3], 10)))
                                : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                                ? ((u = parseInt(t[1], 16)), (s = parseInt(t[2], 16)), (c = parseInt(t[3], 16)))
                                : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && ((u = parseInt(t[1] + t[1], 16)), (s = parseInt(t[2] + t[2], 16)), (c = parseInt(t[3] + t[3], 16))),
                            (u = u < 0 ? 0 : 255 < u ? 255 : u),
                            (s = s < 0 ? 0 : 255 < s ? 255 : s),
                            (c = c < 0 ? 0 : 255 < c ? 255 : c),
                            n
                        );
                    }
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0;
                    return (
                        e && t(e),
                        (n.toRgb = function () {
                            return { r: u, g: s, b: c };
                        }),
                        (n.toHsv = function () {
                            return (
                                (e = u),
                                (t = s),
                                (n = c),
                                (o = 0),
                                (i = ww((e /= 255), ww((t /= 255), (n /= 255)))) === (a = Sw(e, Sw(t, n)))
                                    ? { h: 0, s: 0, v: 100 * (o = i) }
                                    : ((r = (a - i) / a), { h: Nw(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))), s: Nw(100 * r), v: Nw(100 * o) })
                            );
                            var e, t, n, r, o, i, a;
                        }),
                        (n.toHex = function () {
                            function e(e) {
                                return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
                            }
                            return "#" + e(u) + e(s) + e(c);
                        }),
                        (n.parse = t),
                        n
                    );
                },
                ImageUploader: function (n) {
                    var e = rb(),
                        r = sb(n, e);
                    return {
                        upload: function (e, t) {
                            return r.upload(e, (t = void 0 === t || t) ? ub(n) : void 0);
                        },
                    };
                },
            },
            dom: {
                EventUtils: ci,
                Sizzle: ca,
                DomQuery: Ya,
                TreeWalker: Dr,
                TextSeeker: Au,
                DOMUtils: eu,
                ScriptLoader: ou,
                RangeUtils: Lf,
                Serializer: dv,
                StyleSheetLoader: Sr,
                ControlSelection: Sf,
                BookmarkManager: Hl,
                Selection: Fh,
                Event: ci.Event,
            },
            html: { Styles: ao, Entities: Zo, Node: jd, Schema: oo, SaxParser: iv, DomParser: cv, Writer: nm, Serializer: rm },
            Env: xt,
            AddOnManager: fu,
            Annotator: zl,
            Formatter: mb,
            UndoManager: pb,
            EditorCommands: cx,
            WindowManager: Gv,
            NotificationManager: Ev,
            EditorObservable: Dx,
            Shortcuts: Ix,
            Editor: Vx,
            FocusManager: Fd,
            EditorManager: ow,
            DOM: eu.DOM,
            ScriptLoader: ou.ScriptLoader,
            PluginManager: Xv,
            ThemeManager: Yv,
            IconManager: Vv,
            Resource: hw,
            trim: Nt.trim,
            isArray: Nt.isArray,
            is: Nt.is,
            toArray: Nt.toArray,
            makeMap: Nt.makeMap,
            each: Nt.each,
            map: Nt.map,
            grep: Nt.grep,
            inArray: Nt.inArray,
            extend: Nt.extend,
            create: Nt.create,
            walk: Nt.walk,
            createNS: Nt.createNS,
            resolve: Nt.resolve,
            explode: Nt.explode,
            _addCacheSuffix: Nt._addCacheSuffix,
            isOpera: xt.opera,
            isWebKit: xt.webkit,
            isIE: xt.ie,
            isGecko: xt.gecko,
            isMac: xt.mac,
        },
        Pw = Nt.extend(ow, Bw),
        Lw = Pw;
    (window.tinymce = Lw),
        (window.tinyMCE = Lw),
        (function (e) {
            if ("object" == typeof module)
                try {
                    module.exports = e;
                } catch (e) {}
        })(Pw);
})();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.10.0-19
 */

!(function () {
    "use strict";
    function n(e) {
        return function (n) {
            return (
                (t = typeof (n = n)),
                (null === n
                    ? "null"
                    : "object" == t && (Array.prototype.isPrototypeOf(n) || (n.constructor && "Array" === n.constructor.name))
                    ? "array"
                    : "object" == t && (String.prototype.isPrototypeOf(n) || (n.constructor && "String" === n.constructor.name))
                    ? "string"
                    : t) === e
            );
            var t;
        };
    }
    function t(n, t) {
        return { isRequired: n, applyPatch: t };
    }
    function u(r, o) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            var e = o.apply(this, n),
                e = i(e) ? n : e;
            return r.apply(this, e);
        };
    }
    var e,
        r,
        D = n("string"),
        o = n("object"),
        c = n("array"),
        i =
            ((e = void 0),
            function (n) {
                return e === n;
            }),
        a =
            ((r = "function"),
            function (n) {
                return typeof n === r;
            }),
        U = "undefined" != typeof window ? window : Function("return this;")();
    function L(n, u, c, a) {
        return new (c = c || Promise)(function (e, t) {
            function r(n) {
                try {
                    i(a.next(n));
                } catch (n) {
                    t(n);
                }
            }
            function o(n) {
                try {
                    i(a.throw(n));
                } catch (n) {
                    t(n);
                }
            }
            function i(n) {
                var t;
                n.done
                    ? e(n.value)
                    : ((t = n.value) instanceof c
                          ? t
                          : new c(function (n) {
                                n(t);
                            })
                      ).then(r, o);
            }
            i((a = a.apply(n, u || [])).next());
        });
    }
    function q(r, o) {
        var i,
            u,
            c,
            a = {
                label: 0,
                sent: function () {
                    if (1 & c[0]) throw c[1];
                    return c[1];
                },
                trys: [],
                ops: [],
            },
            n = { next: t(0), throw: t(1), return: t(2) };
        return (
            "function" == typeof Symbol &&
                (n[Symbol.iterator] = function () {
                    return this;
                }),
            n
        );
        function t(e) {
            return function (n) {
                var t = [e, n];
                if (i) throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (((i = 1), u && (c = 2 & t[0] ? u.return : t[0] ? u.throw || ((c = u.return) && c.call(u), 0) : u.next) && !(c = c.call(u, t[1])).done)) return c;
                        switch (((u = 0), (t = c ? [2 & t[0], c.value] : t)[0])) {
                            case 0:
                            case 1:
                                c = t;
                                break;
                            case 4:
                                return a.label++, { value: t[1], done: !1 };
                            case 5:
                                a.label++, (u = t[1]), (t = [0]);
                                continue;
                            case 7:
                                (t = a.ops.pop()), a.trys.pop();
                                continue;
                            default:
                                if (!(c = 0 < (c = a.trys).length && c[c.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === t[0] && (!c || (t[1] > c[0] && t[1] < c[3]))) {
                                    a.label = t[1];
                                    break;
                                }
                                if (6 === t[0] && a.label < c[1]) {
                                    (a.label = c[1]), (c = t);
                                    break;
                                }
                                if (c && a.label < c[2]) {
                                    (a.label = c[2]), a.ops.push(t);
                                    break;
                                }
                                c[2] && a.ops.pop(), a.trys.pop();
                                continue;
                        }
                        t = o.call(r, a);
                    } catch (n) {
                        (t = [6, n]), (u = 0);
                    } finally {
                        i = c = 0;
                    }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
            };
        }
    }
    function f(n, t, e) {
        if (e || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return n.concat(r || Array.prototype.slice.call(t));
    }
    function l(n) {
        return function () {
            return n;
        };
    }
    function s(n) {
        return n;
    }
    function d() {
        return y;
    }
    var p = l(!1),
        g = l(!0),
        y = {
            fold: function (n, t) {
                return n();
            },
            isSome: p,
            isNone: g,
            getOr: s,
            getOrThunk: h,
            getOrDie: function (n) {
                throw new Error(n || "error: getOrDie called on none.");
            },
            getOrNull: l(null),
            getOrUndefined: l(void 0),
            or: s,
            orThunk: h,
            map: d,
            each: function () {},
            bind: d,
            exists: p,
            forall: g,
            filter: function () {
                return y;
            },
            toArray: function () {
                return [];
            },
            toString: l("none()"),
        };
    function h(n) {
        return n();
    }
    function v(e) {
        function n() {
            return o;
        }
        function t(n) {
            return n(e);
        }
        var r = l(e),
            o = {
                fold: function (n, t) {
                    return t(e);
                },
                isSome: g,
                isNone: p,
                getOr: r,
                getOrThunk: r,
                getOrDie: r,
                getOrNull: r,
                getOrUndefined: r,
                or: n,
                orThunk: n,
                map: function (n) {
                    return v(n(e));
                },
                each: function (n) {
                    n(e);
                },
                bind: t,
                exists: t,
                forall: t,
                filter: function (n) {
                    return n(e) ? o : y;
                },
                toArray: function () {
                    return [e];
                },
                toString: function () {
                    return "some(" + e + ")";
                },
            };
        return o;
    }
    function m() {
        return new Date().getTime();
    }
    function G(e) {
        return function () {
            n = "position";
            var n,
                t = (((t = e).currentStyle || window.getComputedStyle(t, null))[n] || "").toLowerCase();
            return "absolute" === t || "fixed" === t;
        };
    }
    function w(n) {
        n.parentNode.removeChild(n);
    }
    function b(n, t) {
        for (var e = 0, r = n.length; e < r; e++) t(n[e], e);
    }
    function E(n, t) {
        for (
            var e = (function (n, t) {
                    for (var e = n.length, r = new Array(e), o = 0; o < e; o++) {
                        var i = n[o];
                        r[o] = t(i, o);
                    }
                    return r;
                })(n, t),
                r = [],
                o = 0,
                i = e.length;
            o < i;
            ++o
        ) {
            if (!c(e[o])) throw new Error("Arr.flatten item " + o + " was not an array, input: " + e);
            Y.apply(r, e[o]);
        }
        return r;
    }
    function O(e) {
        return function (n, t) {
            e[t] = n;
        };
    }
    function x(a) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("Can't merge zero objects");
            for (var e, r, o = {}, i = 0; i < n.length; i++) {
                var u,
                    c = n[i];
                for (u in c) (e = c), (r = u), tn.call(e, r) && (o[u] = a(o[u], c[u]));
            }
            return o;
        };
    }
    function A(n, t) {
        var n = on(n, t),
            e = cn(t.plugins),
            r = n.custom_plugin_urls || {},
            r = rn(r, function (n, t) {
                return Z(e, t);
            }),
            n = n.external_plugins || {},
            o = {},
            r =
                (en(r.t, function (n, t) {
                    o[t] = n;
                }),
                un(o, n)),
            n = 0 === nn(r).length ? {} : { external_plugins: r };
        return un(t, n);
    }
    function T(n) {
        return parseInt(n, 10);
    }
    function M(n, t) {
        return 0 == (n -= t) ? 0 : 0 < n ? 1 : -1;
    }
    function S(n, t, e) {
        return { major: n, minor: t, patch: e };
    }
    function _(r, o) {
        return function (n) {
            var t = cn(n.plugins),
                e = pn(o),
                e = 0 < e.length ? t.concat(e) : t;
            return [r.util.Tools.extend({}, n, { plugins: e })];
        };
    }
    function j(n, t) {
        R(t, ".tox-notifications-container", "block"), C(n, "6.0.0") && R(t, ".tox-notification", "-ms-grid"), R(t, ".tox-notification", "grid"), R(t, ".mce-notification", "block");
    }
    function V(n) {
        var t = n,
            e = [H, yn, hn, vn, gn, an, fn, W];
        if (t) for (var r = 0; r < e.length; r++) e[r].isRequired(t) && e[r].applyPatch(t);
    }
    var z = {
            some: v,
            none: d,
            from: function (n) {
                return null == n ? y : v(n);
            },
        },
        k = function (n) {
            var t;
            return null != (t = n.defaultOptions) ? t : n.defaultSettings;
        },
        N = "readonly",
        B = !1,
        F = function () {
            return B;
        },
        H = t(g, function (e) {
            Object.defineProperty(e, "forceReadOnly", {
                value: function () {
                    (B = !0),
                        e.on("AddEditor", function (n) {
                            var t = n.editor;
                            t.options ? t.options.set("readonly", !0) : t.settings && (t.settings.readonly = !0),
                                t.on("init", function () {
                                    t.on("SwitchMode", function (n) {
                                        n.mode !== N &&
                                            (t.mode
                                                ? t.mode.set(N)
                                                : t.setMode &&
                                                  e.util.Promise.resolve().then(function () {
                                                      t.setMode(N);
                                                  }));
                                    });
                                });
                        });
                },
            });
        }),
        $ = function (n, t, e, r, o) {
            var i = m(),
                u = setInterval(function () {
                    n() && (clearInterval(u), t()), m() - i > o && (clearInterval(u), e());
                }, r);
        },
        J = function (n, t) {
            ((e = document.createElement("div")).style.display = "none"), (e.className = "mce-floatpanel");
            var e,
                r = e;
            document.body.appendChild(r),
                $(
                    G(r),
                    function () {
                        w(r), n();
                    },
                    function () {
                        w(r), t();
                    },
                    10,
                    5e3
                );
        },
        K = function (n, t) {
            n.notificationManager ? n.notificationManager.open({ text: t, type: "warning", timeout: 0, icon: "" }) : n.windowManager.alert(t);
        },
        I = function (n, t) {
            var n = k(n),
                e = F(),
                r = n.api_key,
                n = n.tiny_cloud_entry_url,
                o = window.location.origin,
                t = ""
                    .concat(t, "\n\u2193\u2193\u2193\u2193\u2193 ATTENTION ADMINS \u2193\u2193\u2193\u2193\u2193\nPlease include these details in Tiny Cloud support requests.\nResolved API key: ")
                    .concat(r, "\nEditor read-only?: ")
                    .concat(e ? "yes" : "no", "\nOrigin: ")
                    .concat(o, "\nTiny Cloud entry URL: ")
                    .concat(n, "\n\u2191\u2191\u2191\u2191\u2191 ---------------- \u2191\u2191\u2191\u2191\u2191");
            console.warn(t);
        },
        Q = l(a(window.fetch)),
        P = null,
        W = t(Q, function (c) {
            c.on("AddEditor", function (n) {
                var t,
                    e,
                    r,
                    o,
                    i = n.editor,
                    u = k(c).fluffy_account_message_url;
                D(u) &&
                    ((e = "focus"),
                    (r = function () {
                        var t, e, r, n;
                        (t = c),
                            (e = i),
                            (r = u),
                            null === P &&
                                ((n = window.fetch(r, { method: "GET", mode: "cors", headers: new window.Headers({ Accept: "application/json" }) })),
                                (P = n.then(function (r) {
                                    return L(void 0, void 0, void 0, function () {
                                        var t, e;
                                        return q(this, function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    return r.ok ? (204 !== r.status ? [3, 1] : [2, z.none()]) : [3, 4];
                                                case 1:
                                                    return (e = (t = z).some), [4, r.json()];
                                                case 2:
                                                    return [2, e.apply(t, [n.sent()])];
                                                case 3:
                                                    return [3, 5];
                                                case 4:
                                                    return [2, Promise.reject(r)];
                                                case 5:
                                                    return [2];
                                            }
                                        });
                                    });
                                })).catch(function (n) {
                                    I(t, 'Error in TinyMCE cloud startup, url "'.concat(r, '" returned ').concat(n.status, ', saying "').concat(n.statusText, '"'));
                                })),
                            P.then(function (n) {
                                n.each(function (n) {
                                    I(t, n.console_message), K(e, n.service_message);
                                });
                            });
                    }),
                    (t = i).once
                        ? t.once(e, r)
                        : t.on(
                              e,
                              (o = function () {
                                  r(), t.off(e, o);
                              })
                          ));
            });
        }),
        X = Array.prototype.indexOf,
        Y = Array.prototype.push,
        Z = function (n, t) {
            return -1 < X.call(n, t);
        },
        nn = Object.keys,
        tn = Object.hasOwnProperty,
        en = function (n, t) {
            for (var e = nn(n), r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(n[i], i);
            }
        },
        rn = function (n, t) {
            var e,
                r,
                o,
                i = {},
                u = {};
            return (
                (e = t),
                (r = O(i)),
                (o = O(u)),
                en(n, function (n, t) {
                    (e(n, t) ? r : o)(n, t);
                }),
                { t: i, f: u }
            );
        },
        on = x(function (n, t) {
            return o(n) && o(t) ? on(n, t) : t;
        }),
        un = x(function (n, t) {
            return t;
        }),
        cn = function (n) {
            if (i(n) || "" === n) return [];
            n = c(n)
                ? E(n, function (n) {
                      return n.split(/[\s+,]/);
                  })
                : n.split(/[\s+,]/);
            return E(n, function (n) {
                return 0 < n.length ? [n.trim()] : [];
            });
        },
        an = t(g, function (e) {
            var n = e.EditorManager;
            (n.init = u(n.init, function (n) {
                return [A(k(e), n)];
            })),
                (n.createEditor = u(n.createEditor, function (n, t) {
                    return [n, A(k(e), t)];
                }));
        }),
        fn = t(g, function (t) {
            Object.defineProperty(t, "forceCdnInit", {
                value: function (n) {
                    n.message && I(t, n.message);
                },
            });
        }),
        ln = function (n) {
            n = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
            return n ? S(T(n[1]), T(n[2]), T(n[3])) : S(0, 0, 0);
        },
        sn = function (n, t) {
            var e = M(n.major, t.major);
            if (0 !== e) return e;
            e = M(n.minor, t.minor);
            if (0 !== e) return e;
            e = M(n.patch, t.patch);
            return 0 !== e ? e : 0;
        },
        dn = function (n) {
            return ln([n.majorVersion, n.minorVersion].join(".").split(".").slice(0, 3).join("."));
        },
        C = function (n, t) {
            return !!n && -1 === sn(dn(n), ln(t));
        },
        pn = function (n) {
            n = k(n).forced_plugins;
            return n || [];
        },
        gn = t(
            function (n) {
                return C(n, "4.7.0");
            },
            function (n) {
                var e = n,
                    r = e.EditorManager;
                (r.init = u(r.init, _(e, r))),
                    (r.createEditor = u(r.createEditor, function (n, t) {
                        return f([n], _(e, r)(t), !0);
                    }));
            }
        ),
        R = function (r, n, o) {
            n = document.querySelectorAll(n);
            b(n, function (n) {
                var t, e;
                "none" === window.getComputedStyle(n).display &&
                    ((e = n.style.cssText),
                    (t = "display:".concat(o, " !important;")),
                    (n.style.cssText = e ? "".concat(e, ";").concat(t) : t),
                    (n = r).theme &&
                        n.notificationManager &&
                        ((e = n.notificationManager.getNotifications()),
                        a(n.theme.getNotificationManagerImpl) && a(n.theme.getNotificationManagerImpl().reposition) && n.theme.getNotificationManagerImpl().reposition(e),
                        b(e, function (n) {
                            a(n.reposition) && n.reposition();
                        })));
            });
        },
        yn = t(
            function (n) {
                return !0;
            },
            function (e) {
                C(e, "5.6.0")
                    ? e.on("AddEditor", function (n) {
                          var t = n.editor;
                          t.on("SkinLoaded", function () {
                              setTimeout(function () {
                                  t.removed || j(e, t);
                              }, 0);
                          });
                      })
                    : e.on("AddEditor", function (n) {
                          var t = n.editor;
                          t.on("OpenNotification", function () {
                              j(e, t);
                          });
                      });
            }
        ),
        hn = t(
            function (n) {
                return "function" != typeof n.overrideDefaults;
            },
            function (n) {
                var t,
                    r,
                    e = n,
                    o = e.EditorManager,
                    i =
                        (e.EditorManager.on("AddEditor", function (n) {
                            var t = n.editor,
                                e = t.settings.service_message;
                            e &&
                                J(
                                    function () {
                                        K(t, e);
                                    },
                                    function () {
                                        window.alert(e);
                                    }
                                );
                        }),
                        (t = e),
                        function (n) {
                            return [t.util.Tools.extend({}, this.defaultSettings, n)];
                        });
                (n.overrideDefaults =
                    ((r = e),
                    function (n) {
                        var t = r.util.URI,
                            e = n.base_url,
                            e = (e && ((this.baseURL = new t(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, ""))), (this.baseURI = new t(this.baseURL))), n.suffix);
                        e && (this.suffix = e), (this.defaultSettings = n);
                    })),
                    (o.init = u(o.init, i)),
                    (o.createEditor = u(o.createEditor, function (n, t) {
                        return f([n], i.call(o, t), !0);
                    }));
            }
        ),
        vn = t(
            function (n) {
                return C(n, "4.5.0");
            },
            function (n) {
                var r;
                n.overrideDefaults = u(
                    n.overrideDefaults,
                    ((r = n),
                    function (n) {
                        var t,
                            e = n.plugin_base_urls;
                        for (t in e) r.PluginManager.urls[t] = e[t];
                    })
                );
            }
        );
    V(U.tinymce);
})();

(function tcsl(cloudSettings, consoleMessage, forceReadOnly) {
    //var entryUrl = document.currentScript != null && typeof document.currentScript.src === "string" ? document.currentScript.src : null;
    //cloudSettings["tiny_cloud_entry_url"] = entryUrl;
    //tinymce.overrideDefaults(cloudSettings);
    if (forceReadOnly) {
       // tinymce.forceReadOnly();
       // console.error("All created TinyMCE editors are configured to be read-only.");
    }
    //tinymce.forceCdnInit({ message: consoleMessage });
})(
   
);
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-origin/tinymce/5.10.9-138";

/*!
 * Tiny Chiffer plugin
 *
 * Copyright (c) 2023 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 3.3.0-25
 */
!(function () {
    "use strict";
    function n(t) {
        return function (n) {
            return (
                (e = typeof (n = n)),
                (null === n
                    ? "null"
                    : "object" == e && (Array.prototype.isPrototypeOf(n) || (n.constructor && "Array" === n.constructor.name))
                    ? "array"
                    : "object" == e && (String.prototype.isPrototypeOf(n) || (n.constructor && "String" === n.constructor.name))
                    ? "string"
                    : e) === t
            );
            var e;
        };
    }
    function e(e) {
        return function (n) {
            return typeof n === e;
        };
    }
    function a(n) {
        return !(null == n);
    }
    function o() {}
    function i(n) {
        return function () {
            return n;
        };
    }
    function t(n) {
        return n;
    }
    var r,
        s = n("string"),
        l = n("object"),
        c = e("boolean"),
        u = function (n) {
            return r === n;
        },
        f = e("function"),
        V = e("number"),
        d = i(!1),
        p = i(!(r = void 0)),
        m = function () {
            return (m =
                Object.assign ||
                function (n) {
                    for (var e, t = 1, r = arguments.length; t < r; t++) for (var o in (e = arguments[t])) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                    return n;
                }).apply(this, arguments);
        };
    function g(n, e, t) {
        if (t || 2 === arguments.length) for (var r, o = 0, i = e.length; o < i; o++) (!r && o in e) || ((r = r || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
        return n.concat(r || Array.prototype.slice.call(e));
    }
    function y() {
        return v;
    }
    var N = function (n) {
            n = n.chiffer_cdp_init_service_url;
            return s(n) ? n : void 0;
        },
        v = {
            fold: function (n, e) {
                return n();
            },
            isSome: d,
            isNone: p,
            getOr: t,
            getOrThunk: h,
            getOrDie: function (n) {
                throw new Error(n || "error: getOrDie called on none.");
            },
            getOrNull: i(null),
            getOrUndefined: i(void 0),
            or: t,
            orThunk: h,
            map: y,
            each: o,
            bind: y,
            exists: d,
            forall: p,
            filter: function () {
                return v;
            },
            toArray: function () {
                return [];
            },
            toString: i("none()"),
        };
    function h(n) {
        return n();
    }
    function w(t) {
        function n() {
            return o;
        }
        function e(n) {
            return n(t);
        }
        var r = i(t),
            o = {
                fold: function (n, e) {
                    return e(t);
                },
                isSome: p,
                isNone: d,
                getOr: r,
                getOrThunk: r,
                getOrDie: r,
                getOrNull: r,
                getOrUndefined: r,
                or: n,
                orThunk: n,
                map: function (n) {
                    return w(n(t));
                },
                each: function (n) {
                    n(t);
                },
                bind: e,
                exists: e,
                forall: e,
                filter: function (n) {
                    return n(t) ? o : v;
                },
                toArray: function () {
                    return [t];
                },
                toString: function () {
                    return "some(" + t + ")";
                },
            };
        return o;
    }
    function z(n, t, r, o) {
        for (
            var e = n,
                i = function (n, e) {
                    (t(n, e) ? r : o)(n, e);
                },
                c = U(e),
                a = 0,
                u = c.length;
            a < u;
            a++
        ) {
            var s = c[a];
            i(e[s], s);
        }
    }
    function b(n, e) {
        var t,
            r = {};
        return (
            z(
                n,
                e,
                ((t = r),
                function (n, e) {
                    t[e] = n;
                }),
                o
            ),
            r
        );
    }
    function C() {
        return new Date().getTime();
    }
    function _(n) {
        return parseInt(n, 10);
    }
    function M(n, e, t) {
        return { major: n, minor: e, patch: t };
    }
    function H(n) {
        return ln(n.editorManager);
    }
    function K(n, e) {
        return -1 < dn.call(n, e);
    }
    function k(i, c) {
        return function (n) {
            var e = n.options,
                t = c.processor,
                r = c.legacyProcessor,
                o = c.defaultValue;
            return (a(e) ? (e.isSet(i) ? E.from(e.get(i)) : E.none()).bind(t) : r(n.getParam(i))).getOr(o);
        };
    }
    function W(n) {
        return yn(n, "/");
    }
    function L(e) {
        return function (n) {
            return e(n) ? E.some(n) : E.none();
        };
    }
    function S(n) {
        return R(n).filter(
            ((e = W),
            function (n) {
                return !e(n);
            })
        );
        var e;
    }
    function O(n) {
        return s(n) ? E.some(n) : c(n) || V(n) ? E.some(n.toString()) : E.none();
    }
    function J(n) {
        return (
            (n = n.plugins),
            (n = b(n, function (n, e) {
                var t = K(mn, e),
                    n = !!n.isStub;
                return !!e && !n && !("chiffer" === e) && t;
            })),
            0 < (n = U(n)).length ? n : void 0
        );
    }
    function Z(n, e) {
        var t,
            r,
            o = tinymce.Env,
            i = sn(),
            c = "unknown",
            e = (function (n) {
                n = n.tiny_cloud_entry_url;
                return s(n) ? n : void 0;
            })(e),
            o =
                (l(o.os) && (t = { name: o.os.current || c, version: null == (t = o.os.version) ? void 0 : t.major.toString() }),
                l(o.os) && (r = { name: o.browser.current || c, version: null == (c = o.browser.version) ? void 0 : c.major.toString() }),
                null == i ? void 0 : i.timeZone),
            c = null == i ? void 0 : i.locale,
            i = { width: window.innerWidth, height: window.innerHeight, density: window.devicePixelRatio },
            a = navigator.userAgent,
            u = (function () {
                var n;
                try {
                    return null == (n = navigator.userAgentData) ? void 0 : n.toJSON();
                } catch (n) {}
            })();
        return m(m({}, n), { browser: r, os: t, timezone: o, locale: c, screen: i, userAgent: a, userAgentData: u, tinyCloudEntryUrl: e });
    }
    function q(n, e) {
        var t = (function (n) {
                n = H(n);
                return "".concat(n.major, ".").concat(n.minor, ".").concat(n.patch);
            })(n),
            r = gn.getIdForEditor(n);
        return {
            apiKey: e.apiKey,
            pageId: e.pageId,
            editorId: r,
            editorVersion: t,
            editorOptions: (function (n) {
                var e, t, r, o, i, c, a, u, s, l, f;
                if (!fn(n))
                    return (
                        (e = vn(n)),
                        (t = Sn(n)),
                        (r = hn(n)),
                        (o = wn(n)),
                        (i = bn(n)),
                        (c = kn(n)),
                        (a = _n(n)),
                        (u = xn(n)),
                        (s = On(n)),
                        (l = In(n)),
                        (f = Pn(n)),
                        { plugins: J(n), icons: i, inline: e, language: t, readonly: r, resize: o, skin: c, theme: a, height: u, toolbarMode: s, toolbarLocation: l, uiMode: f }
                    );
            })(n),
        };
    }
    function B(n) {
        return "plugin_".concat(n, "_loaded");
    }
    var G,
        Q,
        I,
        X,
        P,
        Y,
        x,
        $,
        j,
        nn,
        T,
        A,
        E = {
            some: w,
            none: y,
            from: function (n) {
                return null == n ? v : w(n);
            },
        },
        D = (function () {
            for (var n = [], e = 0; e < 256; e++) n.push((e + 256).toString(16).substring(1));
            return n;
        })(),
        en = E.from(window.crypto),
        tn = function () {
            return en.bind(function (n) {
                return f(n.randomUUID) ? E.some(n.randomUUID()) : E.none();
            });
        },
        rn = function () {
            return (
                (e = new Uint8Array(16)),
                en
                    .bind(function (n) {
                        return f(n.getRandomValues) ? E.some(n.getRandomValues(e)) : E.none();
                    })
                    .map(function (n) {
                        for (var e = "", t = 0; t < 16; t++) {
                            var r = n[t];
                            (e += 6 === t ? D[(15 & r) | 64] : 8 === t ? D[(63 & r) | 128] : D[r]), (3 !== t && 5 !== t && 7 !== t && 9 !== t) || (e += "-");
                        }
                        return e;
                    })
            );
            var e;
        },
        on = "00000000-0000-0000-0000-000000000000",
        cn = function () {
            return tn().orThunk(rn);
        },
        U = Object.keys,
        an = Object.hasOwnProperty,
        un = function (n, e) {
            return an.call(n, e);
        },
        sn =
            ((I = !(G = function () {
                if (a(Intl)) return Intl.DateTimeFormat().resolvedOptions();
            })),
            function () {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                return I || ((I = !0), (Q = G.apply(null, n))), Q;
            }),
        ln = function (n) {
            n = [n.majorVersion, n.minorVersion].join(".").split(".").slice(0, 3).join(".");
            return (n = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n)) ? M(_(n[1]), _(n[2]), _(n[3])) : M(0, 0, 0);
        },
        fn =
            ((X = 4),
            function (n) {
                return H(n).major === X;
            }),
        dn = Array.prototype.indexOf,
        pn = function (n, e) {
            for (var t = 0, r = n.length; t < r; t++) e(n[t], t);
        },
        mn = g(
            g(
                [],
                [
                    "accordion",
                    "advlist",
                    "anchor",
                    "autolink",
                    "autoresize",
                    "autosave",
                    "bbcode",
                    "charmap",
                    "code",
                    "codesample",
                    "colorpicker",
                    "compat3x",
                    "contextmenu",
                    "directionality",
                    "emoticons",
                    "fullpage",
                    "fullscreen",
                    "help",
                    "hr",
                    "image",
                    "imagetools",
                    "importcss",
                    "insertdatetime",
                    "legacyoutput",
                    "link",
                    "lists",
                    "media",
                    "nonbreaking",
                    "noneditable",
                    "pagebreak",
                    "paste",
                    "preview",
                    "print",
                    "quickbars",
                    "save",
                    "searchreplace",
                    "spellchecker",
                    "tabfocus",
                    "table",
                    "textcolor",
                    "textpattern",
                    "toc",
                    "visualblocks",
                    "visualchars",
                    "wordcount",
                ],
                !0
            ),
            [
                "a11ychecker",
                "advcode",
                "advtable",
                "advtemplate",
                "ai",
                "autocorrect",
                "casechange",
                "checklist",
                "editimage",
                "export",
                "exportpdf",
                "exportword",
                "footnotes",
                "formatpainter",
                "importword",
                "inlinecss",
                "linkchecker",
                "markdown",
                "mediaembed",
                "mentions",
                "mergetags",
                "pageembed",
                "permanentpen",
                "powerpaste",
                "revisionhistory",
                "tableofcontents",
                "tinycomments",
                "tinydrive",
                "tinymcespellchecker",
                "typography",
            ],
            !0
        ),
        gn =
            ((P = new WeakMap()),
            {
                getIdForEditor: function (e) {
                    return E.from(P.get(e)).getOrThunk(function () {
                        var n = cn().getOr(on);
                        return P.set(e, n), n;
                    });
                },
            }),
        yn = function (n, e) {
            return -1 !== n.indexOf(e);
        },
        R = L(s),
        F = L(c),
        vn = k("inline", { processor: E.some, legacyProcessor: F }),
        hn = k("readonly", { processor: E.some, legacyProcessor: F }),
        wn = k("resize", { processor: O, legacyProcessor: O }),
        bn = k("icons", { processor: S, legacyProcessor: S }),
        _n = k("theme", { processor: S, legacyProcessor: S }),
        kn = k("skin", { processor: S, legacyProcessor: S }),
        Sn = k("language", { processor: S, legacyProcessor: S }),
        On = k("toolbar_mode", { processor: E.some, legacyProcessor: R }),
        In = k("toolbar_location", { processor: R, legacyProcessor: R }),
        Pn = k("ui_mode", { processor: R, legacyProcessor: E.none }),
        xn = k("height", { processor: O, legacyProcessor: O }),
        jn = function (n, e) {
            if (f(window.fetch))
                try {
                    var t = { method: "POST", mode: "cors", headers: new window.Headers({ "Content-Type": "application/json" }), body: JSON.stringify(e), keepalive: !0 };
                    window.fetch(n, t).then(o, o);
                } catch (n) {}
        },
        Tn = { direct: !1, library: { name: "chiffer", version: "3.3.0-25" } },
        An = function (n, e, t) {
            (t = Z(Tn, t)), (n = q(n, e));
            return { anonymousId: e.pageId, event: "editor_init", context: t, properties: n, userId: e.apiKey };
        },
        En = { mceInsertToc: "toc_insert", mceUpdateToc: "toc_update" },
        Dn = { mceEditImage: "imagetools_open_dialog", mceImageRotateLeft: "imagetools_rotate", mceImageRotateRight: "imagetools_rotate", mceImageFlipVertical: "imagetools_flip", mceImageFlipHorizontal: "imagetools_flip" },
        Un = [
            "a11ychecker",
            "advcode",
            "advtable",
            "advtemplate",
            "autocorrect",
            "ai",
            "casechange",
            "checklist",
            "editimage",
            "export",
            "exportpdf",
            "exportword",
            "footnotes",
            "formatpainter",
            "importword",
            "inlinecss",
            "linkchecker",
            "markdown",
            "mediaembed",
            "mentions",
            "mergetags",
            "pageembed",
            "permanentpen",
            "powerpaste",
            "revisionhistory",
            "tableofcontents",
            "tinycomments",
            "tinydrive",
            "tinymcespellchecker",
            "typography",
        ],
        Rn = function (n) {
            for (
                var n = b(n, function (n, e) {
                        n = !!n.isStub;
                        return !!e && !n && K(Un, e);
                    }),
                    e = U(n),
                    t = B,
                    r = e.length,
                    o = new Array(r),
                    i = 0;
                i < r;
                i++
            ) {
                var c = e[i];
                o[i] = t(c, i);
            }
            return o;
        },
        Fn = function (a, u) {
            return {
                send: function (n, e, t) {
                    var r,
                        o = a,
                        i = C(),
                        c = "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA",
                        o = "?aid=".concat(o, "&tna=").concat("tinymce_cloud", "&p=").concat("web", "&dtm=").concat(e, "&stm=").concat(i, "&tz=").concat(c, "&e=").concat("se", "&se_ca=").concat(n),
                        e = (function (n) {
                            n = n.chiffer_snowplow_service_url;
                            return s(n) ? n : void 0;
                        })(u);
                    s(e)
                        ? (((r = document.createElement("img")).src = e + o),
                          (r.onload = (i = function (n) {
                              return function () {
                                  (r.onload = null), (r.onerror = null), t(n);
                              };
                          })(!0)),
                          (r.onerror = i(!1)))
                        : t(!1);
                },
            };
        },
        Vn = function (e) {
            return {
                sendStat: function (n) {
                    e.send(n, C(), o);
                },
            };
        };
    (F = { load: o }),
        (A = null != (A = tinymce.defaultOptions) ? A : tinymce.defaultSettings),
        (T = (function (n) {
            n = n.api_key;
            return s(n) ? n : void 0;
        })((A = m({}, A)))),
        (A = u(T)
            ? F
            : ((j = (function (n, e) {
                  n = Fn(n, e);
                  return Vn(n);
              })((F = T), (T = A))),
              (Y = F),
              (x = T),
              ($ = cn().getOr(on)),
              (nn = {
                  sendInit: function (n) {
                      var e = N(x);
                      s(e) && ((n = An(n, { apiKey: Y, pageId: $ }, x)), jn(e, n));
                  },
              }),
              j.sendStat("script_load"),
              {
                  load: function (t) {
                      t.once("init", function () {
                          return j.sendStat("init");
                      }),
                          t.once("init", function () {
                              return nn.sendInit(t);
                          }),
                          t.once("focus", function () {
                              return j.sendStat("focus");
                          }),
                          t.on("ExportPdf", function () {
                              return j.sendStat("export_pdf");
                          }),
                          t.on("InlineCSS", function () {
                              return j.sendStat("inlinecss_get_content");
                          }),
                          t.on("PastePreProcess PowerPasteTempStats", function (n) {
                              n = n.source;
                              a(n) && j.sendStat("powerpaste_".concat(n));
                          }),
                          t.on("SpellcheckerLanguageChanged", function (n) {
                              n = n.language;
                              j.sendStat("spellcheckerpro_language_changed_".concat(n));
                          }),
                          t.on("AIResponse", function () {
                              return j.sendStat("ai_response");
                          }),
                          t.on("ExportToPdf", function () {
                              return j.sendStat("exportpdf_download");
                          }),
                          t.on("ExportToWord", function () {
                              return j.sendStat("exportword_download");
                          }),
                          t.on("ImportFromWord", function () {
                              return j.sendStat("importword_insert");
                          }),
                          t.on("MarkdownPaste", function () {
                              return j.sendStat("markdown_paste");
                          }),
                          t.on("RevisionHistoryOpen", function () {
                              return j.sendStat("revisionhistory_open");
                          }),
                          t.on("ExecCommand", function (n) {
                              n = (function (n) {
                                  n = n.command;
                                  return un(Dn, n) ? Dn[n] : un(En, n) ? En[n] : void 0;
                              })(n);
                              u(n) || j.sendStat(n);
                          }),
                          t.on("PreInit", function () {
                              var n = j,
                                  e = t.plugins;
                              (e = Rn(e)), pn(e, n.sendStat);
                          });
                  },
              })),
        tinymce.PluginManager.add("chiffer", A.load);
})();