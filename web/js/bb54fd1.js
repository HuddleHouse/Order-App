/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (O, W, v) {
    'use strict';
    function H(a) {
        return function () {
            var b = arguments[0], d;
            d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.0/" + (a ? a + "/" : "") + b;
            for (b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var c = encodeURIComponent, e;
                e = arguments[b];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                d += c(e)
            }
            return Error(d)
        }
    }

    function Ca(a) {
        if (null == a || Za(a))return !1;
        if (L(a) || F(a) || C && a instanceof C)return !0;
        var b = "length" in Object(a) && a.length;
        return N(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function n(a, b, d) {
        var c, e;
        if (a)if (D(a))for (c in a)"prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a); else if (L(a) || Ca(a)) {
            var f = "object" !== typeof a;
            c = 0;
            for (e = a.length; c < e; c++)(f || c in a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== n)a.forEach(b, d, a); else if (qc(a))for (c in a)b.call(d, a[c], c, a); else if ("function" === typeof a.hasOwnProperty)for (c in a)a.hasOwnProperty(c) &&
        b.call(d, a[c], c, a); else for (c in a)sa.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function rc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)b.call(d, a[c[e]], c[e]);
        return c
    }

    function sc(a) {
        return function (b, d) {
            a(d, b)
        }
    }

    function Yd() {
        return ++pb
    }

    function Qb(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (E(g) || D(g))for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k], r = g[m];
                d && E(r) ? V(r) ? a[m] = new Date(r.valueOf()) : $a(r) ? a[m] = new RegExp(r) : r.nodeName ? a[m] = r.cloneNode(!0) :
                    Rb(r) ? a[m] = r.clone() : (E(a[m]) || (a[m] = L(r) ? [] : {}), Qb(a[m], [r], !0)) : a[m] = r
            }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }

    function T(a) {
        return Qb(a, wa.call(arguments, 1), !1)
    }

    function Zd(a) {
        return Qb(a, wa.call(arguments, 1), !0)
    }

    function ca(a) {
        return parseInt(a, 10)
    }

    function Sb(a, b) {
        return T(Object.create(a), b)
    }

    function B() {
    }

    function ab(a) {
        return a
    }

    function ba(a) {
        return function () {
            return a
        }
    }

    function tc(a) {
        return D(a.toString) && a.toString !== ga
    }

    function x(a) {
        return "undefined" === typeof a
    }

    function y(a) {
        return "undefined" !== typeof a
    }

    function E(a) {
        return null !== a && "object" === typeof a
    }

    function qc(a) {
        return null !== a && "object" === typeof a && !uc(a)
    }

    function F(a) {
        return "string" === typeof a
    }

    function N(a) {
        return "number" === typeof a
    }

    function V(a) {
        return "[object Date]" === ga.call(a)
    }

    function D(a) {
        return "function" === typeof a
    }

    function $a(a) {
        return "[object RegExp]" === ga.call(a)
    }

    function Za(a) {
        return a && a.window === a
    }

    function bb(a) {
        return a && a.$evalAsync && a.$watch
    }

    function Na(a) {
        return "boolean" === typeof a
    }

    function $d(a) {
        return a && N(a.length) &&
            ae.test(ga.call(a))
    }

    function Rb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function be(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++)b[a[d]] = !0;
        return b
    }

    function ra(a) {
        return G(a.nodeName || a[0] && a[0].nodeName)
    }

    function cb(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }

    function Oa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey, e;
            if (L(a)) {
                e = 0;
                for (var f = a.length; e < f; e++)b.push(c(a[e]))
            } else if (qc(a))for (e in a)b[e] = c(a[e]); else if (a && "function" === typeof a.hasOwnProperty)for (e in a)a.hasOwnProperty(e) &&
            (b[e] = c(a[e])); else for (e in a)sa.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }

        function c(a) {
            if (!E(a))return a;
            var b = f.indexOf(a);
            if (-1 !== b)return g[b];
            if (Za(a) || bb(a))throw Da("cpws");
            var b = !1, c = e(a);
            c === v && (c = L(a) ? [] : Object.create(uc(a)), b = !0);
            f.push(a);
            g.push(c);
            return b ? d(a, c) : c
        }

        function e(a) {
            switch (ga.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(c(a.buffer));
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        (new Uint8Array(b)).set(new Uint8Array(a));
                        return b
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b
            }
            if (D(a.cloneNode))return a.cloneNode(!0)
        }

        var f = [], g = [];
        if (b) {
            if ($d(b) || "[object ArrayBuffer]" === ga.call(b))throw Da("cpta");
            if (a === b)throw Da("cpi");
            L(b) ? b.length = 0 : n(b, function (a, c) {
                "$$hashKey" !== c && delete b[c]
            });
            f.push(a);
            g.push(b);
            return d(a, b)
        }
        return c(a)
    }

    function na(a, b) {
        if (L(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++)b[d] = a[d]
        } else if (E(a))for (d in b = b || {}, a)if ("$" !== d.charAt(0) || "$" !== d.charAt(1))b[d] = a[d];
        return b || a
    }

    function oa(a, b) {
        if (a === b)return !0;
        if (null === a || null === b)return !1;
        if (a !== a && b !== b)return !0;
        var d = typeof a, c;
        if (d == typeof b && "object" == d)if (L(a)) {
            if (!L(b))return !1;
            if ((d = a.length) == b.length) {
                for (c =
                         0; c < d; c++)if (!oa(a[c], b[c]))return !1;
                return !0
            }
        } else {
            if (V(a))return V(b) ? oa(a.getTime(), b.getTime()) : !1;
            if ($a(a))return $a(b) ? a.toString() == b.toString() : !1;
            if (bb(a) || bb(b) || Za(a) || Za(b) || L(b) || V(b) || $a(b))return !1;
            d = Z();
            for (c in a)if ("$" !== c.charAt(0) && !D(a[c])) {
                if (!oa(a[c], b[c]))return !1;
                d[c] = !0
            }
            for (c in b)if (!(c in d) && "$" !== c.charAt(0) && y(b[c]) && !D(b[c]))return !1;
            return !0
        }
        return !1
    }

    function db(a, b, d) {
        return a.concat(wa.call(b, d))
    }

    function vc(a, b) {
        var d = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !D(b) || b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function ce(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = v : Za(b) ? d = "$WINDOW" : b && W === b ? d = "$DOCUMENT" : bb(b) && (d = "$SCOPE");
        return d
    }

    function eb(a, b) {
        if (x(a))return v;
        N(b) || (b = b ? 2 : null);
        return JSON.stringify(a, ce, b)
    }

    function wc(a) {
        return F(a) ? JSON.parse(a) : a
    }

    function xc(a, b) {
        a = a.replace(de,
            "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
        return isNaN(d) ? b : d
    }

    function Tb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = xc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a
    }

    function ta(a) {
        a = C(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var d = C("<div>").append(a).html();
        try {
            return a[0].nodeType === Pa ? G(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + G(b)
            })
        } catch (c) {
            return G(d)
        }
    }

    function yc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function zc(a) {
        var b =
        {};
        n((a || "").split("&"), function (a) {
            var c, e, f;
            a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = yc(e), y(e) && (f = y(f) ? yc(f) : !0, sa.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
        });
        return b
    }

    function Ub(a) {
        var b = [];
        n(a, function (a, c) {
            L(a) ? n(a, function (a) {
                b.push(ha(c, !0) + (!0 === a ? "" : "=" + ha(a, !0)))
            }) : b.push(ha(c, !0) + (!0 === a ? "" : "=" + ha(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }

    function qb(a) {
        return ha(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi,
            "+")
    }

    function ha(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ee(a, b) {
        var d, c, e = Qa.length;
        for (c = 0; c < e; ++c)if (d = Qa[c] + b, F(d = a.getAttribute(d)))return d;
        return null
    }

    function fe(a, b) {
        var d, c, e = {};
        n(Qa, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        });
        n(Qa, function (b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) &&
            (d = e, c = e.getAttribute(b))
        });
        d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e))
    }

    function Ac(a, b, d) {
        E(d) || (d = {});
        d = T({strictDi: !1}, d);
        var c = function () {
            a = C(a);
            if (a.injector()) {
                var c = a[0] === W ? "document" : ta(a);
                throw Da("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift(["$provide", function (b) {
                b.value("$rootElement", a)
            }]);
            d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            b.unshift("ng");
            c = fb(b, d.strictDi);
            c.invoke(["$rootScope", "$rootElement",
                "$compile", "$injector", function (a, b, c, d) {
                    a.$apply(function () {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
            return c
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        O && e.test(O.name) && (d.debugInfoEnabled = !0, O.name = O.name.replace(e, ""));
        if (O && !f.test(O.name))return c();
        O.name = O.name.replace(f, "");
        ia.resumeBootstrap = function (a) {
            n(a, function (a) {
                b.push(a)
            });
            return c()
        };
        D(ia.resumeDeferredBootstrap) && ia.resumeDeferredBootstrap()
    }

    function ge() {
        O.name = "NG_ENABLE_DEBUG_INFO!" + O.name;
        O.location.reload()
    }

    function he(a) {
        a =
            ia.element(a).injector();
        if (!a)throw Da("test");
        return a.get("$$testability")
    }

    function Bc(a, b) {
        b = b || "_";
        return a.replace(ie, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function je() {
        var a;
        if (!Cc) {
            var b = rb();
            (ua = x(b) ? O.jQuery : b ? O[b] : v) && ua.fn.on ? (C = ua, T(ua.fn, {
                scope: Ra.scope,
                isolateScope: Ra.isolateScope,
                controller: Ra.controller,
                injector: Ra.injector,
                inheritedData: Ra.inheritedData
            }), a = ua.cleanData, ua.cleanData = function (b) {
                for (var c, e = 0, f; null != (f = b[e]); e++)(c = ua._data(f, "events")) && c.$destroy && ua(f).triggerHandler("$destroy");
                a(b)
            }) : C = U;
            ia.element = C;
            Cc = !0
        }
    }

    function sb(a, b, d) {
        if (!a)throw Da("areq", b || "?", d || "required");
        return a
    }

    function Sa(a, b, d) {
        d && L(a) && (a = a[a.length - 1]);
        sb(D(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }

    function Ta(a, b) {
        if ("hasOwnProperty" === a)throw Da("badname", b);
    }

    function Dc(a, b, d) {
        if (!b)return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++)c = b[g], a && (a = (e = a)[c]);
        return !d && D(a) ? vc(e, a) : a
    }

    function tb(a) {
        for (var b = a[0], d = a[a.length - 1], c,
                 e = 1; b !== d && (b = b.nextSibling); e++)if (c || a[e] !== b)c || (c = C(wa.call(a, 0, e))), c.push(b);
        return c || a
    }

    function Z() {
        return Object.create(null)
    }

    function ke(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var d = H("$injector"), c = H("ng");
        a = b(a, "angular", Object);
        a.$$minErr = a.$$minErr || H;
        return b(a, "module", function () {
            var a = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)throw c("badname", "module");
                g && a.hasOwnProperty(f) && (a[f] = null);
                return b(a, f, function () {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function () {
                            f[e || "push"]([b,
                                d, arguments]);
                            return K
                        }
                    }

                    function b(a, d) {
                        return function (b, e) {
                            e && D(e) && (e.$$moduleName = f);
                            c.push([a, d, arguments]);
                            return K
                        }
                    }

                    if (!g)throw d("nomod", f);
                    var c = [], e = [], s = [], I = a("$injector", "invoke", "push", e), K = {
                        _invokeQueue: c,
                        _configBlocks: e,
                        _runBlocks: s,
                        requires: g,
                        name: f,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider",
                            "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: b("$compileProvider", "component"),
                        config: I,
                        run: function (a) {
                            s.push(a);
                            return this
                        }
                    };
                    h && I(h);
                    return K
                })
            }
        })
    }

    function le(a) {
        T(a, {
            bootstrap: Ac,
            copy: Oa,
            extend: T,
            merge: Zd,
            equals: oa,
            element: C,
            forEach: n,
            injector: fb,
            noop: B,
            bind: vc,
            toJson: eb,
            fromJson: wc,
            identity: ab,
            isUndefined: x,
            isDefined: y,
            isString: F,
            isFunction: D,
            isObject: E,
            isNumber: N,
            isElement: Rb,
            isArray: L,
            version: me,
            isDate: V,
            lowercase: G,
            uppercase: ub,
            callbacks: {counter: 0},
            getTestability: he,
            $$minErr: H,
            $$csp: Ea,
            reloadWithDebugInfo: ge
        });
        Vb = ke(O);
        Vb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: ne});
            a.provider("$compile", Ec).directive({
                a: oe,
                input: Fc,
                textarea: Fc,
                form: pe,
                script: qe,
                select: re,
                style: se,
                option: te,
                ngBind: ue,
                ngBindHtml: ve,
                ngBindTemplate: we,
                ngClass: xe,
                ngClassEven: ye,
                ngClassOdd: ze,
                ngCloak: Ae,
                ngController: Be,
                ngForm: Ce,
                ngHide: De,
                ngIf: Ee,
                ngInclude: Fe,
                ngInit: Ge,
                ngNonBindable: He,
                ngPluralize: Ie,
                ngRepeat: Je,
                ngShow: Ke,
                ngStyle: Le,
                ngSwitch: Me,
                ngSwitchWhen: Ne,
                ngSwitchDefault: Oe,
                ngOptions: Pe,
                ngTransclude: Qe,
                ngModel: Re,
                ngList: Se,
                ngChange: Te,
                pattern: Gc,
                ngPattern: Gc,
                required: Hc,
                ngRequired: Hc,
                minlength: Ic,
                ngMinlength: Ic,
                maxlength: Jc,
                ngMaxlength: Jc,
                ngValue: Ue,
                ngModelOptions: Ve
            }).directive({ngInclude: We}).directive(vb).directive(Kc);
            a.provider({
                $anchorScroll: Xe,
                $animate: Ye,
                $animateCss: Ze,
                $$animateJs: $e,
                $$animateQueue: af,
                $$AnimateRunner: bf,
                $$animateAsyncRun: cf,
                $browser: df,
                $cacheFactory: ef,
                $controller: ff,
                $document: gf,
                $exceptionHandler: hf,
                $filter: Lc,
                $$forceReflow: jf,
                $interpolate: kf,
                $interval: lf,
                $http: mf,
                $httpParamSerializer: nf,
                $httpParamSerializerJQLike: of,
                $httpBackend: pf,
                $xhrFactory: qf,
                $location: rf,
                $log: sf,
                $parse: tf,
                $rootScope: uf,
                $q: vf,
                $$q: wf,
                $sce: xf,
                $sceDelegate: yf,
                $sniffer: zf,
                $templateCache: Af,
                $templateRequest: Bf,
                $$testability: Cf,
                $timeout: Df,
                $window: Ef,
                $$rAF: Ff,
                $$jqLite: Gf,
                $$HashMap: Hf,
                $$cookieReader: If
            })
        }])
    }

    function gb(a) {
        return a.replace(Jf, function (a, d, c, e) {
            return e ? c.toUpperCase() :
                c
        }).replace(Kf, "Moz$1")
    }

    function Mc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }

    function Nc(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (Wb.test(a)) {
            d = d || e.appendChild(b.createElement("div"));
            c = (Lf.exec(a) || ["", ""])[1].toLowerCase();
            c = da[c] || da._default;
            d.innerHTML = c[1] + a.replace(Mf, "<$1></$2>") + c[2];
            for (c = c[0]; c--;)d = d.lastChild;
            f = db(f, d.childNodes);
            d = e.firstChild;
            d.textContent = ""
        } else f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        n(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function Oc(a,
                b) {
        var d = a.parentNode;
        d && d.replaceChild(b, a);
        b.appendChild(a)
    }

    function U(a) {
        if (a instanceof U)return a;
        var b;
        F(a) && (a = X(a), b = !0);
        if (!(this instanceof U)) {
            if (b && "<" != a.charAt(0))throw Xb("nosel");
            return new U(a)
        }
        if (b) {
            b = W;
            var d;
            a = (d = Nf.exec(a)) ? [b.createElement(d[1])] : (d = Nc(a, b)) ? d.childNodes : []
        }
        Pc(this, a)
    }

    function Yb(a) {
        return a.cloneNode(!0)
    }

    function wb(a, b) {
        b || hb(a);
        if (a.querySelectorAll)for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++)hb(d[c])
    }

    function Qc(a, b, d, c) {
        if (y(c))throw Xb("offargs");
        var e = (c = xb(a)) && c.events, f = c && c.handle;
        if (f)if (b) {
            var g = function (b) {
                var c = e[b];
                y(d) && cb(c || [], d);
                y(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b])
            };
            n(b.split(" "), function (a) {
                g(a);
                yb[a] && g(yb[a])
            })
        } else for (b in e)"$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
    }

    function hb(a, b) {
        var d = a.ng339, c = d && ib[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Qc(a)), delete ib[d], a.ng339 = v))
    }

    function xb(a, b) {
        var d = a.ng339, d = d && ib[d];
        b && !d && (a.ng339 = d = ++Of,
            d = ib[d] = {events: {}, data: {}, handle: v});
        return d
    }

    function Zb(a, b, d) {
        if (Mc(a)) {
            var c = y(d), e = !c && b && !E(b), f = !b;
            a = (a = xb(a, !e)) && a.data;
            if (c)a[b] = d; else {
                if (f)return a;
                if (e)return a && a[b];
                T(a, b)
            }
        }
    }

    function zb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function Ab(a, b) {
        b && a.setAttribute && n(b.split(" "), function (b) {
            a.setAttribute("class", X((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + X(b) + " ", " ")))
        })
    }

    function Bb(a,
                b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            n(b.split(" "), function (a) {
                a = X(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", X(d))
        }
    }

    function Pc(a, b) {
        if (b)if (b.nodeType)a[a.length++] = b; else {
            var d = b.length;
            if ("number" === typeof d && b.window !== b) {
                if (d)for (var c = 0; c < d; c++)a[a.length++] = b[c]
            } else a[a.length++] = b
        }
    }

    function Rc(a, b) {
        return Cb(a, "$" + (b || "ngController") + "Controller")
    }

    function Cb(a, b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (b =
                 L(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++)if (y(d = C.data(a, b[c])))return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function Sc(a) {
        for (wb(a, !0); a.firstChild;)a.removeChild(a.firstChild)
    }

    function $b(a, b) {
        b || wb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function Pf(a, b) {
        b = b || O;
        if ("complete" === b.document.readyState)b.setTimeout(a); else C(b).on("load", a)
    }

    function Tc(a, b) {
        var d = Db[b.toLowerCase()];
        return d && Uc[ra(a)] && d
    }

    function Qf(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f = b[d || c.type], g = f ? f.length : 0;
            if (g) {
                if (x(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                var k = f.specialHandlerWrapper || Rf;
                1 < g && (f = na(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || k(a, c, f[l])
            }
        };
        d.elem = a;
        return d
    }

    function Rf(a, b, d) {
        d.call(a, b)
    }

    function Sf(a, b,
                d) {
        var c = b.relatedTarget;
        c && (c === a || Tf.call(a, c)) || d.call(a, b)
    }

    function Gf() {
        this.$get = function () {
            return T(U, {
                hasClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return zb(a, b)
                }, addClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Bb(a, b)
                }, removeClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Ab(a, b)
                }
            })
        }
    }

    function Fa(a, b) {
        var d = a && a.$$hashKey;
        if (d)return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a
    }

    function Ua(a, b) {
        if (b) {
            var d = 0;
            this.nextUid =
                function () {
                    return ++d
                }
        }
        n(a, this.put, this)
    }

    function Vc(a) {
        a = a.toString().replace(Uf, "");
        return a.match(Vf) || a.match(Wf)
    }

    function Xf(a) {
        return (a = Vc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function fb(a, b) {
        function d(a) {
            return function (b, c) {
                if (E(b))n(b, sc(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            Ta(a, "service");
            if (D(b) || L(b))b = s.instantiate(b);
            if (!b.$get)throw Ga("pget", a);
            return r[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = t.invoke(b, this);
                if (x(c))throw Ga("undef", a);
                return c
            }
        }

        function f(a, b, d) {
            return c(a, {$get: !1 !== d ? e(a, b) : b})
        }

        function g(a) {
            sb(x(a) || L(a), "modulesToLoad", "not an array");
            var b = [], c;
            n(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = s.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        F(a) ? (c = Vb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(s.invoke(a)) : L(a) ? b.push(s.invoke(a)) : Sa(a, "module")
                    } catch (e) {
                        throw L(a) && (a = a[a.length - 1]), e.message && e.stack &&
                        -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k)throw Ga("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e)
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift()
                }
            }

            function e(a, c, f) {
                var g = [];
                a = fb.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l)throw Ga("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] :
                        d(l, f))
                }
                return g
            }

            return {
                invoke: function (a, b, c, d) {
                    "string" === typeof c && (d = c, c = null);
                    c = e(a, c, d);
                    L(a) && (a = a[a.length - 1]);
                    d = 11 >= xa ? !1 : "function" === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));
                    return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                }, instantiate: function (a, b, c) {
                    var d = L(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new (Function.prototype.bind.apply(d, a))
                }, get: d, annotate: fb.$$annotate, has: function (b) {
                    return r.hasOwnProperty(b +
                            "Provider") || a.hasOwnProperty(b)
                }
            }
        }

        b = !0 === b;
        var k = {}, l = [], m = new Ua([], !0), r = {
            $provide: {
                provider: d(c),
                factory: d(f),
                service: d(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }),
                value: d(function (a, b) {
                    return f(a, ba(b), !1)
                }),
                constant: d(function (a, b) {
                    Ta(a, "constant");
                    r[a] = b;
                    I[a] = b
                }),
                decorator: function (a, b) {
                    var c = s.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = t.invoke(d, c);
                        return t.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, s = r.$injector = h(r, function (a, b) {
            ia.isString(b) && l.push(b);
            throw Ga("unpr", l.join(" <- "));
        }), I = {}, K = h(I, function (a, b) {
            var c = s.get(a + "Provider", b);
            return t.invoke(c.$get, c, v, a)
        }), t = K;
        r.$injectorProvider = {$get: ba(K)};
        var p = g(a), t = K.get("$injector");
        t.strictDi = b;
        n(p, function (a) {
            a && t.invoke(a)
        });
        return t
    }

    function Xe() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === ra(a))return b = a, !0
                });
                return b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    D(c) ? c = c() : Rb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : N(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = F(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = b.document;
            a && c.$watch(function () {
                return d.hash()
            }, function (a, b) {
                a === b && "" === a || Pf(function () {
                    c.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function jb(a, b) {
        if (!a && !b)return "";
        if (!a)return b;
        if (!b)return a;
        L(a) && (a = a.join(" "));
        L(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Yf(a) {
        F(a) && (a = a.split(" "));
        var b = Z();
        n(a, function (a) {
            a.length && (b[a] = !0)
        });
        return b
    }

    function Ha(a) {
        return E(a) ? a : {}
    }

    function Zf(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, wa.call(arguments, 1))
            } finally {
                if (K--, 0 === K)for (; t.length;)try {
                    t.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function f() {
            z = null;
            g();
            h()
        }

        function g() {
            a:{
                try {
                    p = m.state;
                    break a
                } catch (a) {
                }
                p = void 0
            }
            p = x(p) ? null : p;
            oa(p, $) && (p = $);
            $ = p
        }

        function h() {
            if (u !== k.url() ||
                w !== p)u = k.url(), w = p, n(A, function (a) {
                a(k.url(), p)
            })
        }

        var k = this, l = a.location, m = a.history, r = a.setTimeout, s = a.clearTimeout, I = {};
        k.isMock = !1;
        var K = 0, t = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function () {
            K++
        };
        k.notifyWhenNoOutstandingRequests = function (a) {
            0 === K ? a() : t.push(a)
        };
        var p, w, u = l.href, la = b.find("base"), z = null;
        g();
        w = p;
        k.url = function (b, d, e) {
            x(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = w === e;
                if (u === b && (!c.history || f))return k;
                var h =
                    u && Ia(u) === Ia(b);
                u = b;
                w = e;
                if (!c.history || h && f) {
                    if (!h || z)z = b;
                    d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;
                    l.href !== b && (z = b)
                } else m[d ? "replaceState" : "pushState"](e, "", b), g(), w = p;
                return k
            }
            return z || l.href.replace(/%27/g, "'")
        };
        k.state = function () {
            return p
        };
        var A = [], Q = !1, $ = null;
        k.onUrlChange = function (b) {
            if (!Q) {
                if (c.history)C(a).on("popstate", f);
                C(a).on("hashchange", f);
                Q = !0
            }
            A.push(b);
            return b
        };
        k.$$applicationDestroyed = function () {
            C(a).off("hashchange popstate", f)
        };
        k.$$checkUrlChange =
            h;
        k.baseHref = function () {
            var a = la.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        k.defer = function (a, b) {
            var c;
            K++;
            c = r(function () {
                delete I[c];
                e(a)
            }, b || 0);
            I[c] = !0;
            return c
        };
        k.defer.cancel = function (a) {
            return I[a] ? (delete I[a], s(a), e(B), !0) : !1
        }
    }

    function df() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new Zf(a, c, b, d)
        }]
    }

    function ef() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != r && (s ? s == a && (s = a.n) : s = a, f(a.n, a.p), f(a, r), r = a, r.n = null)
                }

                function f(a,
                           b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b)throw H("$cacheFactory")("iid", a);
                var g = 0, h = T({}, c, {id: a}), k = Z(), l = c && c.capacity || Number.MAX_VALUE, m = Z(), r = null, s = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!x(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {key: a});
                                e(c)
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(s.key);
                            return b
                        }
                    }, get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            e(b)
                        }
                        return k[a]
                    }, remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            b == r && (r = b.p);
                            b == s && (s = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        a in
                        k && (delete k[a], g--)
                    }, removeAll: function () {
                        k = Z();
                        g = 0;
                        m = Z();
                        r = s = null
                    }, destroy: function () {
                        m = h = k = null;
                        delete b[a]
                    }, info: function () {
                        return T({}, h, {size: g})
                    }
                }
            }

            var b = {};
            a.info = function () {
                var a = {};
                n(b, function (b, e) {
                    a[e] = b.info()
                });
                return a
            };
            a.get = function (a) {
                return b[a]
            };
            return a
        }
    }

    function Af() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Ec(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            n(a, function (a, f) {
                var g = a.match(d);
                if (!g)throw ja("iscp", b, f, a, c ?
                    "controller bindings definition" : "isolate scope definition");
                e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f}
            });
            return e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== G(b))throw ja("baddir", a);
            if (a !== a.trim())throw ja("baddir", a);
        }

        var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = be("ngSrc,ngSrcset,src,srcset"), k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function s(b, f) {
            Ta(b, "directive");
            F(b) ? (c(b), sb(f, "directiveFactory"),
            e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var f = [];
                n(e[b], function (e, g) {
                    try {
                        var h = a.invoke(e);
                        D(h) ? h = {compile: ba(h)} : !h.compile && h.link && (h.compile = ba(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        var k = h, l = h, m = h.name, s = {isolateScope: null, bindToController: null};
                        E(l.scope) && (!0 === l.bindToController ? (s.bindToController = d(l.scope, m, !0), s.isolateScope = {}) : s.isolateScope =
                            d(l.scope, m, !1));
                        E(l.bindToController) && (s.bindToController = d(l.bindToController, m, !0));
                        if (E(s.bindToController)) {
                            var P = l.controller, S = l.controllerAs;
                            if (!P)throw ja("noctrl", m);
                            if (!Wc(P, S))throw ja("noident", m);
                        }
                        var ma = k.$$bindings = s;
                        E(ma.isolateScope) && (h.$$isolateBindings = ma.isolateScope);
                        h.$$moduleName = e.$$moduleName;
                        f.push(h)
                    } catch (K) {
                        c(K)
                    }
                });
                return f
            }])), e[b].push(f)) : n(b, sc(s));
            return this
        };
        this.component = function (a, b) {
            function c(a) {
                function e(b) {
                    return D(b) || L(b) ? function (c, d) {
                        return a.invoke(b,
                            this, {$element: c, $attrs: d})
                    } : b
                }

                var f = b.template || b.templateUrl ? b.template : "";
                return {
                    controller: d,
                    controllerAs: Wc(b.controller) || b.controllerAs || "$ctrl",
                    template: e(f),
                    templateUrl: e(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                }
            }

            var d = b.controller || function () {
                };
            n(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a)
            });
            c.$inject = ["$injector"];
            return this.directive(a, c)
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return y(a) ? (b.aHrefSanitizationWhitelist(a),
                this) : b.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return y(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
        };
        var m = !0;
        this.debugInfoEnabled = function (a) {
            return y(a) ? (m = a, this) : m
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, d, p, w, u, la, z, A) {
            function Q(a, b, c) {
                ba.innerHTML = "<span " + b + ">";
                b = ba.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name);
                d.value = c;
                a.attributes.setNamedItem(d)
            }

            function $(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function M(a, b, c, d, e) {
                a instanceof C || (a = C(a));
                for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
                    var k = a[g];
                    k.nodeType === Pa && k.nodeValue.match(f) && Oc(k, a[g] = W.createElement("span"))
                }
                var l = P(a, b, a, c, d, e);
                M.$$addScopeClass(a);
                var m = null;
                return function (b, c, d) {
                    sb(b, "scope");
                    e && e.needsNewScope && (b = b.$parent.$new());
                    d = d || {};
                    var f = d.parentBoundTranscludeFn, g = d.transcludeControllers;
                    d = d.futureParentElement;
                    f && f.$$boundTransclude &&
                    (f = f.$$boundTransclude);
                    m || (m = (d = d && d[0]) ? "foreignobject" !== ra(d) && ga.call(d).match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== m ? C(U(m, C("<div>").append(a).html())) : c ? Ra.clone.call(a) : a;
                    if (g)for (var h in g)d.data("$" + h + "Controller", g[h].instance);
                    M.$$addScopeInfo(d, b);
                    c && c(d, b);
                    l && l(b, d, d, f);
                    return d
                }
            }

            function P(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, p, s, u;
                    if (A)for (u = Array(c.length), m = 0; m < h.length; m += 3)f = h[m], u[f] = c[f]; else u = c;
                    m = 0;
                    for (p = h.length; m < p;)k = u[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l =
                        a.$new(), M.$$addScopeInfo(C(k), l)) : l = a, s = c.transcludeOnThisElement ? S(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? S(a, b) : null, c(f, l, k, d, s)) : f && f(a, k.childNodes, v, e)
                }

                for (var h = [], k, l, m, p, A, s = 0; s < a.length; s++) {
                    k = new na;
                    l = ma(a[s], [], k, 0 === s ? d : v, e);
                    (f = l.length ? y(l, a[s], k, b, c, null, [], [], f) : null) && f.scope && M.$$addScopeClass(k.$$element);
                    k = f && f.terminal || !(m = a[s].childNodes) || !m.length ? null : P(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || k)h.push(s, f, k), p = !0, A =
                        A || f;
                    f = null
                }
                return p ? g : null
            }

            function S(a, b, c) {
                var d = function (d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
                }, e = d.$$slots = Z(), f;
                for (f in b.$$slots)e[f] = b.$$slots[f] ? S(a, b.$$slots[f], c) : null;
                return d
            }

            function ma(a, b, c, d, e) {
                var h = c.$attr, k;
                switch (a.nodeType) {
                    case 1:
                        H(b, va(ra(a)), "E", d, e);
                        for (var l, m, p, s = a.attributes, A = 0, u = s && s.length; A < u; A++) {
                            var t = !1, w = !1;
                            l = s[A];
                            k = l.name;
                            m = X(l.value);
                            l = va(k);
                            if (p = pa.test(l))k =
                                k.replace(Xc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                    return b.toUpperCase()
                                });
                            (l = l.match(ua)) && O(l[1]) && (t = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                            l = va(k.toLowerCase());
                            h[l] = k;
                            if (p || !c.hasOwnProperty(l))c[l] = m, Tc(a, l) && (c[l] = !0);
                            Y(a, b, m, l, p);
                            H(b, l, "A", d, e, t, w)
                        }
                        a = a.className;
                        E(a) && (a = a.animVal);
                        if (F(a) && "" !== a)for (; k = g.exec(a);)l = va(k[2]), H(b, l, "C", d, e) && (c[l] = X(k[3])), a = a.substr(k.index + k[0].length);
                        break;
                    case Pa:
                        if (11 === xa)for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType ===
                        Pa;)a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        N(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (k = f.exec(a.nodeValue))l = va(k[1]), H(b, l, "M", d, e) && (c[l] = X(k[2]))
                        } catch (M) {
                        }
                }
                b.sort(ya);
                return b
            }

            function q(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw ja("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return C(d)
            }

            function Yc(a, b, c) {
                return function (d, e, f, g, h) {
                    e = q(e[0], b,
                        c);
                    return a(d, e, f, g, h)
                }
            }

            function ac(a, b, c, d, e, f) {
                if (a)return M(b, c, d, e, f);
                var g;
                return function () {
                    g || (g = M(b, c, d, e, f), b = c = f = null);
                    return g.apply(this, arguments)
                }
            }

            function y(a, b, d, e, f, g, h, l, m) {
                function p(a, b, c, d) {
                    if (a) {
                        c && (a = Yc(a, c, d));
                        a.require = J.require;
                        a.directiveName = H;
                        if (P === J || J.$$isolateScope)a = ca(a, {isolateScope: !0});
                        h.push(a)
                    }
                    if (b) {
                        c && (b = Yc(b, c, d));
                        b.require = J.require;
                        b.directiveName = H;
                        if (P === J || J.$$isolateScope)b = ca(b, {isolateScope: !0});
                        l.push(b)
                    }
                }

                function s(a, b, c, d) {
                    var e;
                    if (F(b)) {
                        var f =
                            b.match(k);
                        b = b.substring(f[0].length);
                        var g = f[1] || f[3], f = "?" === f[2];
                        "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                        if (!e) {
                            var h = "$" + b + "Controller";
                            e = g ? c.inheritedData(h) : c.data(h)
                        }
                        if (!e && !f)throw ja("ctreq", b, a);
                    } else if (L(b))for (e = [], g = 0, f = b.length; g < f; g++)e[g] = s(a, b[g], c, d); else E(b) && (e = {}, n(b, function (b, f) {
                        e[f] = s(a, b, c, d)
                    }));
                    return e || null
                }

                function A(a, b, c, d, e, f) {
                    var g = Z(), h;
                    for (h in d) {
                        var k = d[h], l = {
                            $scope: k === P || k.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }, m = k.controller;
                        "@" == m &&
                        (m = b[k.name]);
                        l = w(m, l, !0, k.controllerAs);
                        g[k.name] = l;
                        B || a.data("$" + k.name + "Controller", l.instance)
                    }
                    return g
                }

                function u(a, c, e, f, g) {
                    function k(a, b, c, d) {
                        var e;
                        bb(a) || (d = c, c = b, b = a, a = v);
                        B && (e = ma);
                        c || (c = B ? z.parent() : z);
                        if (d) {
                            var f = g.$$slots[d];
                            if (f)return f(a, b, e, c, Eb);
                            if (x(f))throw ja("noslot", d, ta(z));
                        } else return g(a, b, e, c, Eb)
                    }

                    var m, p, t, w, ma, S, z, Ja;
                    b === e ? (f = d, z = d.$$element) : (z = C(e), f = new na(z, d));
                    t = c;
                    P ? w = c.$new(!0) : Q && (t = c.$parent);
                    g && (S = k, S.$$boundTransclude = g, S.isSlotFilled = function (a) {
                        return !!g.$$slots[a]
                    });
                    I && (ma = A(z, f, S, I, w, c));
                    P && (M.$$addScopeInfo(z, w, !0, !($ && ($ === P || $ === P.$$originalDirective))), M.$$addScopeClass(z, !0), w.$$isolateBindings = P.$$isolateBindings, (Ja = ia(c, f, w, w.$$isolateBindings, P)) && w.$on("$destroy", Ja));
                    for (p in ma) {
                        Ja = I[p];
                        var K = ma[p], la = Ja.$$bindings.bindToController;
                        K.identifier && la && (m = ia(t, f, K.instance, la, Ja));
                        var q = K();
                        q !== K.instance && (K.instance = q, z.data("$" + Ja.name + "Controller", q), m && m(), m = ia(t, f, K.instance, la, Ja))
                    }
                    n(I, function (a, b) {
                        var c = a.require;
                        a.bindToController && !L(c) &&
                        E(c) && T(ma[b].instance, s(b, c, z, ma))
                    });
                    n(ma, function (a) {
                        D(a.instance.$onInit) && a.instance.$onInit()
                    });
                    m = 0;
                    for (p = h.length; m < p; m++)t = h[m], ka(t, t.isolateScope ? w : c, z, f, t.require && s(t.directiveName, t.require, z, ma), S);
                    var Eb = c;
                    P && (P.template || null === P.templateUrl) && (Eb = w);
                    a && a(Eb, e.childNodes, v, g);
                    for (m = l.length - 1; 0 <= m; m--)t = l[m], ka(t, t.isolateScope ? w : c, z, f, t.require && s(t.directiveName, t.require, z, ma), S)
                }

                m = m || {};
                for (var t = -Number.MAX_VALUE, Q = m.newScopeDirective, I = m.controllerDirectives, P = m.newIsolateScopeDirective,
                         $ = m.templateDirective, S = m.nonTlbTranscludeDirective, z = !1, la = !1, B = m.hasElementTranscludeDirective, ea = d.$$element = C(b), J, H, G, ya = e, O, N = !1, Fb = !1, fa, R = 0, Va = a.length; R < Va; R++) {
                    J = a[R];
                    var Y = J.$$start, ba = J.$$end;
                    Y && (ea = q(b, Y, ba));
                    G = v;
                    if (t > J.priority)break;
                    if (fa = J.scope)J.templateUrl || (E(fa) ? (Wa("new/isolated scope", P || Q, J, ea), P = J) : Wa("new/isolated scope", P, J, ea)), Q = Q || J;
                    H = J.name;
                    if (!N && (J.replace && (J.templateUrl || J.template) || J.transclude && !J.$$tlb)) {
                        for (fa = R + 1; N = a[fa++];)if (N.transclude && !N.$$tlb || N.replace &&
                            (N.templateUrl || N.template)) {
                            Fb = !0;
                            break
                        }
                        N = !0
                    }
                    !J.templateUrl && J.controller && (fa = J.controller, I = I || Z(), Wa("'" + H + "' controller", I[H], J, ea), I[H] = J);
                    if (fa = J.transclude)if (z = !0, J.$$tlb || (Wa("transclusion", S, J, ea), S = J), "element" == fa)B = !0, t = J.priority, G = ea, ea = d.$$element = C(W.createComment(" " + H + ": " + d[H] + " ")), b = ea[0], aa(f, wa.call(G, 0), b), ya = ac(Fb, G, e, t, g && g.name, {nonTlbTranscludeDirective: S}); else {
                        var V = Z();
                        G = C(Yb(b)).contents();
                        if (E(fa)) {
                            G = [];
                            var ha = Z(), da = Z();
                            n(fa, function (a, b) {
                                var c = "?" === a.charAt(0);
                                a = c ? a.substring(1) : a;
                                ha[a] = b;
                                V[b] = null;
                                da[b] = c
                            });
                            n(ea.contents(), function (a) {
                                var b = ha[va(ra(a))];
                                b ? (da[b] = !0, V[b] = V[b] || [], V[b].push(a)) : G.push(a)
                            });
                            n(da, function (a, b) {
                                if (!a)throw ja("reqslot", b);
                            });
                            for (var ga in V)V[ga] && (V[ga] = ac(Fb, V[ga], e))
                        }
                        ea.empty();
                        ya = ac(Fb, G, e, v, v, {needsNewScope: J.$$isolateScope || J.$$newScope});
                        ya.$$slots = V
                    }
                    if (J.template)if (la = !0, Wa("template", $, J, ea), $ = J, fa = D(J.template) ? J.template(ea, d) : J.template, fa = qa(fa), J.replace) {
                        g = J;
                        G = Wb.test(fa) ? Zc(U(J.templateNamespace, X(fa))) : [];
                        b = G[0];
                        if (1 != G.length || 1 !== b.nodeType)throw ja("tplrt", H, "");
                        aa(f, ea, b);
                        Va = {$attr: {}};
                        fa = ma(b, [], Va);
                        var oa = a.splice(R + 1, a.length - (R + 1));
                        (P || Q) && $c(fa, P, Q);
                        a = a.concat(fa).concat(oa);
                        ad(d, Va);
                        Va = a.length
                    } else ea.html(fa);
                    if (J.templateUrl)la = !0, Wa("template", $, J, ea), $ = J, J.replace && (g = J), u = $f(a.splice(R, a.length - R), ea, d, f, z && ya, h, l, {
                        controllerDirectives: I,
                        newScopeDirective: Q !== J && Q,
                        newIsolateScopeDirective: P,
                        templateDirective: $,
                        nonTlbTranscludeDirective: S
                    }), Va = a.length; else if (J.compile)try {
                        O = J.compile(ea,
                            d, ya), D(O) ? p(null, O, Y, ba) : O && p(O.pre, O.post, Y, ba)
                    } catch (pa) {
                        c(pa, ta(ea))
                    }
                    J.terminal && (u.terminal = !0, t = Math.max(t, J.priority))
                }
                u.scope = Q && !0 === Q.scope;
                u.transcludeOnThisElement = z;
                u.templateOnThisElement = la;
                u.transclude = ya;
                m.hasElementTranscludeDirective = B;
                return u
            }

            function $c(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++)a[d] = Sb(a[d], {$$isolateScope: b, $$newScope: c})
            }

            function H(b, d, f, g, h, k, l) {
                if (d === h)return null;
                h = null;
                if (e.hasOwnProperty(d)) {
                    var m;
                    d = a.get(d + "Directive");
                    for (var p = 0, A = d.length; p < A; p++)try {
                        m =
                            d[p], (x(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Sb(m, {
                            $$start: k,
                            $$end: l
                        })), b.push(m), h = m)
                    } catch (t) {
                        c(t)
                    }
                }
                return h
            }

            function O(b) {
                if (e.hasOwnProperty(b))for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)if (b = c[d], b.multiElement)return !0;
                return !1
            }

            function ad(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                n(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                n(b, function (b, f) {
                    "class" == f ? ($(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") +
                        b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function $f(a, b, c, e, f, g, h, k) {
                var l = [], m, p, s = b[0], A = a.shift(), u = Sb(A, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: A
                }), w = D(A.templateUrl) ? A.templateUrl(b, c) : A.templateUrl, Q = A.templateNamespace;
                b.empty();
                d(w).then(function (d) {
                    var t, I;
                    d = qa(d);
                    if (A.replace) {
                        d = Wb.test(d) ? Zc(U(Q, X(d))) : [];
                        t = d[0];
                        if (1 != d.length || 1 !== t.nodeType)throw ja("tplrt",
                            A.name, w);
                        d = {$attr: {}};
                        aa(e, b, t);
                        var M = ma(t, [], d);
                        E(A.scope) && $c(M, !0);
                        a = M.concat(a);
                        ad(c, d)
                    } else t = s, b.html(d);
                    a.unshift(u);
                    m = y(a, t, c, f, b, A, g, h, k);
                    n(e, function (a, c) {
                        a == t && (e[c] = b[0])
                    });
                    for (p = P(b[0].childNodes, f); l.length;) {
                        d = l.shift();
                        I = l.shift();
                        var z = l.shift(), K = l.shift(), M = b[0];
                        if (!d.$$destroyed) {
                            if (I !== s) {
                                var la = I.className;
                                k.hasElementTranscludeDirective && A.replace || (M = Yb(t));
                                aa(z, C(I), M);
                                $(C(M), la)
                            }
                            I = m.transcludeOnThisElement ? S(d, m.transclude, K) : K;
                            m(p, d, M, e, I)
                        }
                    }
                    l = null
                });
                return function (a, b,
                                 c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = S(b, m.transclude, e)), m(p, b, c, d, a)))
                }
            }

            function ya(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Wa(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }

                if (b)throw ja("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ta(d));
            }

            function N(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && M.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || M.$$addBindingClass(e);
                            M.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function U(a, b) {
                a = G(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = W.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function R(a, b) {
                if ("srcdoc" == b)return la.HTML;
                var c = ra(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return la.RESOURCE_URL
            }

            function Y(a, c, d, e,
                       f) {
                var g = R(a, e);
                f = h[e] || f;
                var k = b(d, !0, g, f);
                if (k) {
                    if ("multiple" === e && "select" === ra(a))throw ja("selmulti", ta(a));
                    c.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, c, h) {
                                    c = h.$$observers || (h.$$observers = Z());
                                    if (l.test(e))throw ja("nodomevents");
                                    var m = h[e];
                                    m !== d && (k = m && b(m, !0, g, f), d = m);
                                    k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                                        "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function aa(a, b, c) {
                var d = b[0], e = b.length,
                    f = d.parentNode, g, h;
                if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    a.context === d && (a.context = c);
                    break
                }
                f && f.replaceChild(c, d);
                a = W.createDocumentFragment();
                for (g = 0; g < e; g++)a.appendChild(b[g]);
                C.hasData(d) && (C.data(c, C.data(d)), C(d).off("$destroy"));
                C.cleanData(a.querySelectorAll("*"));
                for (g = 1; g < e; g++)delete b[g];
                b[0] = c;
                b.length = 1
            }

            function ca(a, b) {
                return T(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function ka(a,
                        b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, ta(d))
                }
            }

            function ia(a, c, d, e, f) {
                var g = [];
                n(e, function (e, h) {
                    var k = e.attrName, l = e.optional, m, A, s, t;
                    switch (e.mode) {
                        case "@":
                            l || sa.call(c, k) || (d[h] = c[k] = void 0);
                            c.$observe(k, function (a) {
                                F(a) && (d[h] = a)
                            });
                            c.$$observers[k].$$scope = a;
                            m = c[k];
                            F(m) ? d[h] = b(m)(a) : Na(m) && (d[h] = m);
                            break;
                        case "=":
                            if (!sa.call(c, k)) {
                                if (l)break;
                                c[k] = void 0
                            }
                            if (l && !c[k])break;
                            A = p(c[k]);
                            t = A.literal ? oa : function (a, b) {
                                return a === b || a !== a && b !== b
                            };
                            s = A.assign || function () {
                                    m = d[h] = A(a);
                                    throw ja("nonassign",
                                        c[k], k, f.name);
                                };
                            m = d[h] = A(a);
                            l = function (b) {
                                t(b, d[h]) || (t(b, m) ? s(a, b = d[h]) : d[h] = b);
                                return m = b
                            };
                            l.$stateful = !0;
                            l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, A.literal);
                            g.push(l);
                            break;
                        case "<":
                            if (!sa.call(c, k)) {
                                if (l)break;
                                c[k] = void 0
                            }
                            if (l && !c[k])break;
                            A = p(c[k]);
                            d[h] = A(a);
                            l = a.$watch(A, function (a) {
                                d[h] = a
                            }, A.literal);
                            g.push(l);
                            break;
                        case "&":
                            A = c.hasOwnProperty(k) ? p(c[k]) : B;
                            if (A === B && l)break;
                            d[h] = function (b) {
                                return A(a, b)
                            }
                    }
                });
                return g.length && function () {
                        for (var a = 0, b = g.length; a < b; ++a)g[a]()
                    }
            }

            var V = /^\w/, ba = W.createElement("div"), na = function (a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            na.prototype = {
                $normalize: va, $addClass: function (a) {
                    a && 0 < a.length && z.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && 0 < a.length && z.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = bd(a, b);
                    c && c.length && z.addClass(this.$$element, c);
                    (c = bd(b, a)) && c.length && z.removeClass(this.$$element, c)
                }, $set: function (a, b, d, e) {
                    var f =
                        Tc(this.$$element[0], a), g = cd[a], h = a;
                    f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Bc(a, "-"));
                    f = ra(this.$$element);
                    if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a)this[a] = b = A(b, "src" === a); else if ("img" === f && "srcset" === a) {
                        for (var f = "", g = X(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++)var m = 2 * l, f = f + A(X(g[m]), !0), f = f + (" " + X(g[m + 1]));
                        g = X(g[2 * l]).split(/\s/);
                        f += A(X(g[0]), !0);
                        2 === g.length && (f += " " + X(g[1]));
                        this[a] = b = f
                    }
                    !1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : V.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));
                    (a = this.$$observers) && n(a[h], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = Z()), e = d[a] || (d[a] = []);
                    e.push(b);
                    u.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a])
                    });
                    return function () {
                        cb(e, b)
                    }
                }
            };
            var ha = b.startSymbol(), da = b.endSymbol(), qa = "{{" == ha && "}}" ==
            da ? ab : function (a) {
                return a.replace(/\{\{/g, ha).replace(/}}/g, da)
            }, pa = /^ngAttr[A-Z]/, ua = /^(.+)Start$/;
            M.$$addBindingInfo = m ? function (a, b) {
                var c = a.data("$binding") || [];
                L(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : B;
            M.$$addBindingClass = m ? function (a) {
                $(a, "ng-binding")
            } : B;
            M.$$addScopeInfo = m ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : B;
            M.$$addScopeClass = m ? function (a, b) {
                $(a, b ? "ng-isolate-scope" : "ng-scope")
            } : B;
            return M
        }]
    }

    function va(a) {
        return gb(a.replace(Xc,
            ""))
    }

    function bd(a, b) {
        var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a:for (; f < c.length; f++) {
            for (var g = c[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function Zc(a) {
        a = C(a);
        var b = a.length;
        if (1 >= b)return a;
        for (; b--;)8 === a[b].nodeType && ag.call(a, b, 1);
        return a
    }

    function Wc(a, b) {
        if (b && F(b))return b;
        if (F(a)) {
            var d = dd.exec(a);
            if (d)return d[3]
        }
    }

    function ff() {
        var a = {}, b = !1;
        this.register = function (b, c) {
            Ta(b, "controller");
            E(b) ? T(a, b) : a[b] = c
        };
        this.allowGlobals = function () {
            b = !0
        };
        this.$get =
            ["$injector", "$window", function (d, c) {
                function e(a, b, c, d) {
                    if (!a || !E(a.$scope))throw H("$controller")("noscp", d, b);
                    a.$scope[b] = c
                }

                return function (f, g, h, k) {
                    var l, m, r;
                    h = !0 === h;
                    k && F(k) && (r = k);
                    if (F(f)) {
                        k = f.match(dd);
                        if (!k)throw bg("ctrlfmt", f);
                        m = k[1];
                        r = r || k[3];
                        f = a.hasOwnProperty(m) ? a[m] : Dc(g.$scope, m, !0) || (b ? Dc(c, m, !0) : v);
                        Sa(f, m, !0)
                    }
                    if (h)return h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), r && e(g, r, l, m || f.name), T(function () {
                        var a = d.invoke(f, l, g, m);
                        a !== l && (E(a) || D(a)) && (l = a, r && e(g, r, l, m || f.name));
                        return l
                    }, {instance: l, identifier: r});
                    l = d.instantiate(f, g, m);
                    r && e(g, r, l, m || f.name);
                    return l
                }
            }]
    }

    function gf() {
        this.$get = ["$window", function (a) {
            return C(a.document)
        }]
    }

    function hf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function bc(a) {
        return E(a) ? V(a) ? a.toISOString() : eb(a) : a
    }

    function nf() {
        this.$get = function () {
            return function (a) {
                if (!a)return "";
                var b = [];
                rc(a, function (a, c) {
                    null === a || x(a) || (L(a) ? n(a, function (a, d) {
                        b.push(ha(c) + "=" + ha(bc(a)))
                    }) : b.push(ha(c) + "=" + ha(bc(a))))
                });
                return b.join("&")
            }
        }
    }

    function of() {
        this.$get = function () {
            return function (a) {
                function b(a, e, f) {
                    null === a || x(a) || (L(a) ? n(a, function (a, c) {
                        b(a, e + "[" + (E(a) ? c : "") + "]")
                    }) : E(a) && !V(a) ? rc(a, function (a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
                    }) : d.push(ha(e) + "=" + ha(bc(a))))
                }

                if (!a)return "";
                var d = [];
                b(a, "", !0);
                return d.join("&")
            }
        }
    }

    function cc(a, b) {
        if (F(a)) {
            var d = a.replace(cg, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(ed)) || (c = (c = d.match(dg)) && eg[c[0]].test(d));
                c && (a = wc(d))
            }
        }
        return a
    }

    function fd(a) {
        var b =
            Z(), d;
        F(a) ? n(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var e = G(X(a.substr(0, d)));
            a = X(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : E(a) && n(a, function (a, d) {
            var f = G(d), g = X(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g)
        });
        return b
    }

    function gd(a) {
        var b;
        return function (d) {
            b || (b = fd(a));
            return d ? (d = b[G(d)], void 0 === d && (d = null), d) : b
        }
    }

    function hd(a, b, d, c) {
        if (D(c))return c(a, b, d);
        n(c, function (c) {
            a = c(a, b, d)
        });
        return a
    }

    function mf() {
        var a = this.defaults = {
            transformResponse: [cc],
            transformRequest: [function (a) {
                return E(a) && "[object File]" !==
                ga.call(a) && "[object Blob]" !== ga.call(a) && "[object FormData]" !== ga.call(a) ? eb(a) : a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: na(dc), put: na(dc), patch: na(dc)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, b = !1;
        this.useApplyAsync = function (a) {
            return y(a) ? (b = !!a, this) : b
        };
        var d = !0;
        this.useLegacyPromiseExtensions = function (a) {
            return y(a) ? (d = !!a, this) : d
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory",
            "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
                function m(b) {
                    function c(a) {
                        var b = T({}, a);
                        b.data = hd(a.data, a.headers, a.status, f.transformResponse);
                        a = a.status;
                        return 200 <= a && 300 > a ? b : k.reject(b)
                    }

                    function e(a, b) {
                        var c, d = {};
                        n(a, function (a, e) {
                            D(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                        });
                        return d
                    }

                    if (!E(b))throw H("$http")("badreq", b);
                    if (!F(b.url))throw H("$http")("badreq", b.url);
                    var f = T({
                            method: "get",
                            transformRequest: a.transformRequest,
                            transformResponse: a.transformResponse,
                            paramSerializer: a.paramSerializer
                        },
                        b);
                    f.headers = function (b) {
                        var c = a.headers, d = T({}, b.headers), f, g, h, c = T({}, c.common, c[G(b.method)]);
                        a:for (f in c) {
                            g = G(f);
                            for (h in d)if (G(h) === g)continue a;
                            d[f] = c[f]
                        }
                        return e(d, na(b))
                    }(b);
                    f.method = ub(f.method);
                    f.paramSerializer = F(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
                    var g = [function (b) {
                        var d = b.headers, e = hd(b.data, gd(d), v, b.transformRequest);
                        x(e) && n(d, function (a, b) {
                            "content-type" === G(b) && delete d[b]
                        });
                        x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
                        return r(b, e).then(c, c)
                    }, v], h = k.when(f);
                    for (n(K, function (a) {
                        (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && g.push(a.response, a.responseError)
                    }); g.length;) {
                        b = g.shift();
                        var m = g.shift(), h = h.then(b, m)
                    }
                    d ? (h.success = function (a) {
                        Sa(a, "fn");
                        h.then(function (b) {
                            a(b.data, b.status, b.headers, f)
                        });
                        return h
                    }, h.error = function (a) {
                        Sa(a, "fn");
                        h.then(null, function (b) {
                            a(b.data, b.status, b.headers, f)
                        });
                        return h
                    }) : (h.success = id("success"), h.error = id("error"));
                    return h
                }

                function r(c,
                           d) {
                    function g(a, c, d, e) {
                        function f() {
                            l(c, a, d, e)
                        }

                        K && (200 <= a && 300 > a ? K.put(S, [a, c, fd(d), e]) : K.remove(S));
                        b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
                    }

                    function l(a, b, d, e) {
                        b = -1 <= b ? b : 0;
                        (200 <= b && 300 > b ? A.resolve : A.reject)({
                            data: a,
                            status: b,
                            headers: gd(d),
                            config: c,
                            statusText: e
                        })
                    }

                    function r(a) {
                        l(a.data, a.status, na(a.headers()), a.statusText)
                    }

                    function z() {
                        var a = m.pendingRequests.indexOf(c);
                        -1 !== a && m.pendingRequests.splice(a, 1)
                    }

                    var A = k.defer(), Q = A.promise, K, M, P = c.headers, S = s(c.url, c.paramSerializer(c.params));
                    m.pendingRequests.push(c);
                    Q.then(z, z);
                    !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (K = E(c.cache) ? c.cache : E(a.cache) ? a.cache : I);
                    K && (M = K.get(S), y(M) ? M && D(M.then) ? M.then(r, r) : L(M) ? l(M[1], M[0], na(M[2]), M[3]) : l(M, 200, {}, "OK") : K.put(S, Q));
                    x(M) && ((M = jd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : v) && (P[c.xsrfHeaderName || a.xsrfHeaderName] = M), e(c.method, S, d, g, P, c.timeout, c.withCredentials, c.responseType));
                    return Q
                }

                function s(a, b) {
                    0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
                    return a
                }

                var I = g("$http");
                a.paramSerializer = F(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
                var K = [];
                n(c, function (a) {
                    K.unshift(F(a) ? l.get(a) : l.invoke(a))
                });
                m.pendingRequests = [];
                (function (a) {
                    n(arguments, function (a) {
                        m[a] = function (b, c) {
                            return m(T({}, c || {}, {method: a, url: b}))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function (a) {
                    n(arguments, function (a) {
                        m[a] = function (b, c, d) {
                            return m(T({}, d || {}, {method: a, url: b, data: c}))
                        }
                    })
                })("post", "put", "patch");
                m.defaults = a;
                return m
            }]
    }

    function qf() {
        this.$get =
            function () {
                return function () {
                    return new O.XMLHttpRequest
                }
            }
    }

    function pf() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
            return fg(a, c, a.defer, b.angular.callbacks, d[0])
        }]
    }

    function fg(a, b, d, c, e) {
        function f(a, b, d) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, I = "unknown";
                a && ("load" !== a.type || c[b].called || (a = {type: "error"}),
                    I = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, I)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }

        return function (e, h, k, l, m, r, s, I) {
            function K() {
                w && w();
                u && u.abort()
            }

            function t(b, c, e, f, g) {
                y(z) && d.cancel(z);
                w = u = null;
                b(c, e, f, g);
                a.$$completeOutstandingRequest(B)
            }

            a.$$incOutstandingRequestCount();
            h = h || a.url();
            if ("jsonp" == G(e)) {
                var p = "_" + (c.counter++).toString(36);
                c[p] = function (a) {
                    c[p].data = a;
                    c[p].called = !0
                };
                var w = f(h.replace("JSON_CALLBACK", "angular.callbacks." +
                    p), p, function (a, b) {
                    t(l, a, c[p].data, "", b);
                    c[p] = B
                })
            } else {
                var u = b(e, h);
                u.open(e, h, !0);
                n(m, function (a, b) {
                    y(a) && u.setRequestHeader(b, a)
                });
                u.onload = function () {
                    var a = u.statusText || "", b = "response" in u ? u.response : u.responseText, c = 1223 === u.status ? 204 : u.status;
                    0 === c && (c = b ? 200 : "file" == za(h).protocol ? 404 : 0);
                    t(l, c, b, u.getAllResponseHeaders(), a)
                };
                e = function () {
                    t(l, -1, null, null, "")
                };
                u.onerror = e;
                u.onabort = e;
                s && (u.withCredentials = !0);
                if (I)try {
                    u.responseType = I
                } catch (la) {
                    if ("json" !== I)throw la;
                }
                u.send(x(k) ? null : k)
            }
            if (0 <
                r)var z = d(K, r); else r && D(r.then) && r.then(K)
        }
    }

    function kf() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(r, a).replace(s, b)
            }

            function h(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function k(f, k, r, p) {
                function s(a) {
                    try {
                        var b = a;
                        a = r ? e.getTrusted(r, b) : e.valueOf(b);
                        var d;
                        if (p && !y(a))d =
                            a; else if (null == a)d = ""; else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = eb(a)
                            }
                            d = a
                        }
                        return d
                    } catch (g) {
                        c(Ka.interr(f, g))
                    }
                }

                if (!f.length || -1 === f.indexOf(a)) {
                    var u;
                    k || (k = g(f), u = ba(k), u.exp = f, u.expressions = [], u.$$watchDelegate = h);
                    return u
                }
                p = !!p;
                var n, z, A = 0, Q = [], $ = [];
                u = f.length;
                for (var M = [], P = []; A < u;)if (-1 != (n = f.indexOf(a, A)) && -1 != (z = f.indexOf(b, n + l)))A !== n && M.push(g(f.substring(A, n))), A = f.substring(n + l, z), Q.push(A), $.push(d(A, s)), A = z + m, P.push(M.length), M.push(""); else {
                    A !== u &&
                    M.push(g(f.substring(A)));
                    break
                }
                r && 1 < M.length && Ka.throwNoconcat(f);
                if (!k || Q.length) {
                    var S = function (a) {
                        for (var b = 0, c = Q.length; b < c; b++) {
                            if (p && x(a[b]))return;
                            M[P[b]] = a[b]
                        }
                        return M.join("")
                    };
                    return T(function (a) {
                        var b = 0, d = Q.length, e = Array(d);
                        try {
                            for (; b < d; b++)e[b] = $[b](a);
                            return S(e)
                        } catch (g) {
                            c(Ka.interr(f, g))
                        }
                    }, {
                        exp: f, expressions: Q, $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup($, function (d, e) {
                                var f = S(d);
                                D(b) && b.call(this, f, d !== e ? c : f, a);
                                c = f
                            })
                        }
                    })
                }
            }

            var l = a.length, m = b.length, r = new RegExp(a.replace(/./g,
                f), "g"), s = new RegExp(b.replace(/./g, f), "g");
            k.startSymbol = function () {
                return a
            };
            k.endSymbol = function () {
                return b
            };
            return k
        }]
    }

    function lf() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
            function f(f, k, l, m) {
                function r() {
                    s ? f.apply(null, I) : f(p)
                }

                var s = 4 < arguments.length, I = s ? wa.call(arguments, 4) : [], K = b.setInterval, t = b.clearInterval, p = 0, w = y(m) && !m, u = (w ? c : d).defer(), n = u.promise;
                l = y(l) ? l : 0;
                n.$$intervalId = K(function () {
                    w ? e.defer(r) : a.$evalAsync(r);
                    u.notify(p++);
                    0 < l && p >= l && (u.resolve(p),
                        t(n.$$intervalId), delete g[n.$$intervalId]);
                    w || a.$apply()
                }, k);
                g[n.$$intervalId] = u;
                return n
            }

            var g = {};
            f.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
            };
            return f
        }]
    }

    function ec(a) {
        a = a.split("/");
        for (var b = a.length; b--;)a[b] = qb(a[b]);
        return a.join("/")
    }

    function kd(a, b) {
        var d = za(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = ca(d.port) || gg[d.protocol] || null
    }

    function ld(a, b) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = za(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = zc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function pa(a, b) {
        if (0 === b.indexOf(a))return b.substr(a.length)
    }

    function Ia(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function kb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function fc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        kd(a, this);
        this.$$parse = function (a) {
            var d = pa(b,
                a);
            if (!F(d))throw Gb("ipthprfx", a, b);
            ld(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Ub(this.$$search), d = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ec(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            y(f = pa(a, c)) ? (g = f, g = y(f = pa(d, f)) ? b + (pa("/", f) || f) : a + g) : y(f = pa(b, c)) ? g = b + f : b == c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }

    function gc(a, b, d) {
        kd(a, this);
        this.$$parse = function (c) {
            var e = pa(a, c) || pa(b, c), f;
            x(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", x(e) && (a = c, this.replace())) : (f = pa(d, e), x(f) && (f = e));
            ld(f, this);
            c = this.$$path;
            var e = a, g = /^\/[A-Z]:(\/.*)/;
            0 === f.indexOf(e) && (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose()
        };
        this.$$compose = function () {
            var b = Ub(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ec(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        };
        this.$$parseLinkUrl =
            function (b, d) {
                return Ia(a) == Ia(b) ? (this.$$parse(b), !0) : !1
            }
    }

    function md(a, b, d) {
        this.$$html5 = !0;
        gc.apply(this, arguments);
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            a == Ia(c) ? f = c : (g = pa(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var b = Ub(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ec(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url
        }
    }

    function Hb(a) {
        return function () {
            return this[a]
        }
    }

    function nd(a,
                b) {
        return function (d) {
            if (x(d))return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }

    function rf() {
        var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.html5Mode = function (a) {
            return Na(a) ? (b.enabled = a, this) : E(a) ? (Na(a.enabled) && (b.enabled = a.enabled), Na(a.requireBase) && (b.requireBase = a.requireBase), Na(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d,
                                                                                                c, e, f, g) {
            function h(a, b, d) {
                var e = l.url(), f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }

            var l, m;
            m = c.baseHref();
            var r = c.url(), s;
            if (b.enabled) {
                if (!m && b.requireBase)throw Gb("nobase");
                s = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");
                m = e.history ? fc : md
            } else s = Ia(r), m = gc;
            var I = s.substr(0, Ia(s).lastIndexOf("/") + 1);
            l = new m(s, I, "#" + a);
            l.$$parseLinkUrl(r, r);
            l.$$state = c.state();
            var n = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = C(a.target); "a" !== ra(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
                    E(h) && "[object SVGAnimatedString]" === h.toString() && (h = za(h.animVal).href);
                    n.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            kb(l.absUrl()) != kb(r) && c.url(l.absUrl(), !0);
            var t = !0;
            c.onUrlChange(function (a, b) {
                x(pa(I, a)) ? g.location.href = a : (d.$evalAsync(function () {
                    var c = l.absUrl(), e = l.$$state, f;
                    a = kb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (t = !1, k(c, e)))
                }), d.$$phase || d.$digest())
            });
            d.$watch(function () {
                var a = kb(c.url()), b = kb(l.absUrl()), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                if (t ||
                    m)t = !1, d.$evalAsync(function () {
                    var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
                });
                l.$$replace = !1
            });
            return l
        }]
    }

    function sf() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = ["$window", function (d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL &&
                (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = d.console || {}, e = b[a] || b.log || B;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {
                }
                return a ? function () {
                    var a = [];
                    n(arguments, function (b) {
                        a.push(c(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Xa(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" ===
            a || "__proto__" === a)throw ka("isecfld", b);
        return a
    }

    function hg(a) {
        return a + ""
    }

    function Aa(a, b) {
        if (a) {
            if (a.constructor === a)throw ka("isecfn", b);
            if (a.window === a)throw ka("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw ka("isecdom", b);
            if (a === Object)throw ka("isecobj", b);
        }
        return a
    }

    function od(a, b) {
        if (a) {
            if (a.constructor === a)throw ka("isecfn", b);
            if (a === ig || a === jg || a === kg)throw ka("isecff", b);
        }
    }

    function Ib(a, b) {
        if (a && (a === (0).constructor || a === (!1).constructor || a === "".constructor ||
            a === {}.constructor || a === [].constructor || a === Function.constructor))throw ka("isecaf", b);
    }

    function lg(a, b) {
        return "undefined" !== typeof a ? a : b
    }

    function pd(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }

    function R(a, b) {
        var d, c;
        switch (a.type) {
            case q.Program:
                d = !0;
                n(a.body, function (a) {
                    R(a.expression, b);
                    d = d && a.expression.constant
                });
                a.constant = d;
                break;
            case q.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case q.UnaryExpression:
                R(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case q.BinaryExpression:
                R(a.left, b);
                R(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case q.LogicalExpression:
                R(a.left, b);
                R(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case q.ConditionalExpression:
                R(a.test, b);
                R(a.alternate, b);
                R(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case q.Identifier:
                a.constant = !1;
                a.toWatch =
                    [a];
                break;
            case q.MemberExpression:
                R(a.object, b);
                a.computed && R(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case q.CallExpression:
                d = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                n(a.arguments, function (a) {
                    R(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
                break;
            case q.AssignmentExpression:
                R(a.left, b);
                R(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case q.ArrayExpression:
                d = !0;
                c = [];
                n(a.elements, function (a) {
                    R(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case q.ObjectExpression:
                d = !0;
                c = [];
                n(a.properties, function (a) {
                    R(a.value, b);
                    d = d && a.value.constant;
                    a.value.constant || c.push.apply(c, a.value.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case q.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case q.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function qd(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : v
        }
    }

    function rd(a) {
        return a.type === q.Identifier || a.type === q.MemberExpression
    }

    function sd(a) {
        if (1 === a.body.length && rd(a.body[0].expression))return {
            type: q.AssignmentExpression,
            left: a.body[0].expression,
            right: {type: q.NGValueParameter},
            operator: "="
        }
    }

    function td(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === q.Literal || a.body[0].expression.type === q.ArrayExpression || a.body[0].expression.type === q.ObjectExpression)
    }

    function ud(a, b) {
        this.astBuilder =
            a;
        this.$filter = b
    }

    function vd(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function Jb(a) {
        return "constructor" == a
    }

    function hc(a) {
        return D(a.valueOf) ? a.valueOf() : mg.call(a)
    }

    function tf() {
        var a = Z(), b = Z();
        this.$get = ["$filter", function (d) {
            function c(c, f, r) {
                var u, n, z;
                r = r || K;
                switch (typeof c) {
                    case "string":
                        z = c = c.trim();
                        var A = r ? b : a;
                        u = A[z];
                        if (!u) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (n = !0, c = c.substring(2));
                            u = r ? I : s;
                            var Q = new ic(u);
                            u = (new jc(Q, d, u)).parse(c);
                            u.constant ? u.$$watchDelegate = l : n ? u.$$watchDelegate = u.literal ?
                                k : h : u.inputs && (u.$$watchDelegate = g);
                            r && (u = e(u));
                            A[z] = u
                        }
                        return m(u, f);
                    case "function":
                        return m(c, f);
                    default:
                        return m(B, f)
                }
            }

            function e(a) {
                function b(c, d, e, f) {
                    var g = K;
                    K = !0;
                    try {
                        return a(c, d, e, f)
                    } finally {
                        K = g
                    }
                }

                if (!a)return a;
                b.$$watchDelegate = a.$$watchDelegate;
                b.assign = e(a.assign);
                b.constant = a.constant;
                b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c)a.inputs[c] = e(a.inputs[c]);
                b.inputs = a.inputs;
                return b
            }

            function f(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = hc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function g(a, b, c, d, e) {
                var g = d.inputs, h;
                if (1 === g.length) {
                    var k = f, g = g[0];
                    return a.$watch(function (a) {
                        var b = g(a);
                        f(b, k) || (h = d(a, v, v, [b]), k = b && hc(b));
                        return h
                    }, b, c, e)
                }
                for (var l = [], m = [], r = 0, s = g.length; r < s; r++)l[r] = f, m[r] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, e = g.length; c < e; c++) {
                        var k = g[c](a);
                        if (b || (b = !f(k, l[c])))m[c] = k, l[c] = k && hc(k)
                    }
                    b && (h = d(a, v, v, m));
                    return h
                }, b, c, e)
            }

            function h(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    D(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function () {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    n(a, function (a) {
                        y(a) || (b = !1)
                    });
                    return b
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    D(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }

            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function m(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, d = !1, c = c !== k && c !== h ? function (c, e, f, g) {
                    f = d && g ? g[0] : a(c, e, f, g);
                    return b(f,
                        c, e)
                } : function (c, d, e, f) {
                    e = a(c, d, e, f);
                    c = b(e, c, d);
                    return y(e) ? c : e
                };
                a.$$watchDelegate && a.$$watchDelegate !== g ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = g, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
                return c
            }

            var r = Ea().noUnsafeEval, s = {csp: r, expensiveChecks: !1}, I = {csp: r, expensiveChecks: !0}, K = !1;
            c.$$runningExpensiveChecks = function () {
                return K
            };
            return c
        }]
    }

    function vf() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return wd(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function wf() {
        this.$get =
            ["$browser", "$exceptionHandler", function (a, b) {
                return wd(function (b) {
                    a.defer(b)
                }, b)
            }]
    }

    function wd(a, b) {
        function d() {
            this.$$state = {status: 0}
        }

        function c(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function e(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
                var a, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = v;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    a = e[f][c.status];
                    try {
                        D(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), b(h)
                    }
                }
            }))
        }

        function f() {
            this.promise =
                new d
        }

        var g = H("$q", TypeError);
        T(d.prototype, {
            then: function (a, b, c) {
                if (x(a) && x(b) && x(c))return this;
                var d = new f;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && e(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        });
        T(f.prototype, {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle",
                    a)) : this.$$resolve(a))
            }, $$resolve: function (a) {
                function d(a) {
                    k || (k = !0, h.$$resolve(a))
                }

                function f(a) {
                    k || (k = !0, h.$$reject(a))
                }

                var g, h = this, k = !1;
                try {
                    if (E(a) || D(a))g = a && a.then;
                    D(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state))
                } catch (l) {
                    f(l), b(l)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                e(this.promise.$$state)
            },
            notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        a = d[f][3];
                        try {
                            e.notify(D(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var h = function (a, b) {
            var c = new f;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                D(c) && (d = c())
            } catch (e) {
                return h(e, !1)
            }
            return d && D(d.then) ? d.then(function () {
                return h(a, b)
            }, function (a) {
                return h(a, !1)
            }) : h(a, b)
        }, l = function (a, b, c, d) {
            var e = new f;
            e.resolve(a);
            return e.promise.then(b,
                c, d)
        }, m = function (a) {
            if (!D(a))throw g("norslvr", a);
            var b = new f;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        m.prototype = d.prototype;
        m.defer = function () {
            var a = new f;
            a.resolve = c(a, a.resolve);
            a.reject = c(a, a.reject);
            a.notify = c(a, a.notify);
            return a
        };
        m.reject = function (a) {
            var b = new f;
            b.reject(a);
            return b.promise
        };
        m.when = l;
        m.resolve = l;
        m.all = function (a) {
            var b = new f, c = 0, d = L(a) ? [] : {};
            n(a, function (a, e) {
                c++;
                l(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) ||
                    b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return m
    }

    function Ff() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
                var b = d(a);
                return function () {
                    c(b)
                }
            } : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c)
                }
            };
            f.supported = e;
            return f
        }]
    }

    function uf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead =
                    this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++pb;
                this.$$ChildScope = null
            }

            b.prototype = a;
            return b
        }

        var b = 10, d = H("$rootScope"), c = null, e = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === xa && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead =
                    a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++pb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function r(a) {
                if (w.$$phase)throw d("inprog", w.$$phase);
                w.$$phase = a
            }

            function s(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function I(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function q() {
            }

            function t() {
                for (; z.length;)try {
                    z.shift()()
                } catch (a) {
                    f(a)
                }
                e = null
            }

            function p() {
                null === e && (e = h.defer(function () {
                    w.$apply(t)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c != this) && d.$on("$destroy",
                        k);
                    return d
                }, $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate)return f.$$watchDelegate(this, b, d, f, a);
                    var h = this, k = h.$$watchers, l = {fn: b, last: q, get: f, exp: e || a, eq: !!d};
                    c = null;
                    D(b) || (l.fn = B);
                    k || (k = h.$$watchers = []);
                    k.unshift(l);
                    s(this, 1);
                    return function () {
                        0 <= cb(k, l) && s(h, -1);
                        c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function () {
                            l && b(e, e, g)
                        });
                        return function () {
                            l = !1
                        }
                    }
                    if (1 === a.length)return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    n(a, function (a, b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(k)
                    });
                    return function () {
                        for (; f.length;)f.shift()()
                    }
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!x(e)) {
                            if (E(e))if (Ca(e))for (f !== r && (f = r, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                                f !== s && (f = s = {}, u = 0, l++);
                                a = 0;
                                for (b in e)sa.call(e,
                                    b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                                if (u > a)for (b in l++, f)sa.call(e, b) || (u--, delete f[b])
                            } else f !== e && (f = e, l++);
                            return l
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), r = [], s = {}, p = !0, u = 0;
                    return this.$watch(m, function () {
                        p ? (p = !1, b(e, e, d)) : b(e, h, d);
                        if (k)if (E(e))if (Ca(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++)h[a] = e[a]
                        } else for (a in h = {}, e)sa.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var a, g, k, l, m, s, p, n, I = b, z, y = [], x, C;
                    r("$digest");
                    h.$$checkUrlChange();
                    this === w && null !== e && (h.defer.cancel(e), t());
                    c = null;
                    do {
                        n = !1;
                        for (z = this; u.length;) {
                            try {
                                C = u.shift(), C.scope.$eval(C.expression, C.locals)
                            } catch (B) {
                                f(B)
                            }
                            c = null
                        }
                        a:do {
                            if (s = z.$$watchers)for (p = s.length; p--;)try {
                                if (a = s[p])if (m = a.get, (g = m(z)) !== (k = a.last) && !(a.eq ? oa(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k)))n = !0, c = a, a.last = a.eq ? Oa(g, null) : g, l = a.fn, l(g, k === q ? g : k, z), 5 > I && (x = 4 - I, y[x] || (y[x] = []), y[x].push({
                                    msg: D(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) :
                                        a.exp, newVal: g, oldVal: k
                                })); else if (a === c) {
                                    n = !1;
                                    break a
                                }
                            } catch (E) {
                                f(E)
                            }
                            if (!(s = z.$$watchersCount && z.$$childHead || z !== this && z.$$nextSibling))for (; z !== this && !(s = z.$$nextSibling);)z = z.$parent
                        } while (z = s);
                        if ((n || u.length) && !I--)throw w.$$phase = null, d("infdig", b, y);
                    } while (n || u.length);
                    for (w.$$phase = null; v.length;)try {
                        v.shift()()
                    } catch (H) {
                        f(H)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === w && h.$$applicationDestroyed();
                        s(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount)I(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = B;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return B
                        };
                        this.$$listeners = {};
                        this.$$nextSibling =
                            null;
                        l(this)
                    }
                }, $eval: function (a, b) {
                    return g(a)(this, b)
                }, $evalAsync: function (a, b) {
                    w.$$phase || u.length || h.defer(function () {
                        u.length && w.$digest()
                    });
                    u.push({scope: this, expression: g(a), locals: b})
                }, $$postDigest: function (a) {
                    v.push(a)
                }, $apply: function (a) {
                    try {
                        r("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            w.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            w.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && z.push(b);
                    a = g(a);
                    p()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, I(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = db([h], arguments, 1), l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        l = 0;
                        for (m = d.length; l < m; l++)if (d[l])try {
                            d[l].apply(null,
                                k)
                        } catch (r) {
                            f(r)
                        } else d.splice(l, 1), l--, m--;
                        if (g)return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a])return e;
                    for (var g = db([e], arguments, 1), h, k; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)if (d[h])try {
                            d[h].apply(null, g)
                        } catch (l) {
                            f(l)
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] &&
                                c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var w = new m, u = w.$$asyncQueue = [], v = w.$$postDigestQueue = [], z = w.$$applyAsyncQueue = [];
            return w
        }]
    }

    function ne() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = function () {
            return function (d, c) {
                var e =
                    c ? b : a, f;
                f = za(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" + f
            }
        }
    }

    function ng(a) {
        if ("self" === a)return a;
        if (F(a)) {
            if (-1 < a.indexOf("***"))throw Ba("iwcard", a);
            a = xd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$")
        }
        if ($a(a))return new RegExp("^" + a.source + "$");
        throw Ba("imatcher");
    }

    function yd(a) {
        var b = [];
        y(a) && n(a, function (a) {
            b.push(ng(a))
        });
        return b
    }

    function yf() {
        this.SCE_CONTEXTS = qa;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = yd(b));
            return a
        };
        this.resourceUrlBlacklist = function (a) {
            arguments.length && (b = yd(a));
            return b
        };
        this.$get = ["$injector", function (d) {
            function c(a, b) {
                return "self" === a ? jd(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw Ba("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(), h = {};
            h[qa.HTML] = e(g);
            h[qa.CSS] = e(g);
            h[qa.URL] = e(g);
            h[qa.JS] = e(g);
            h[qa.RESOURCE_URL] = e(h[qa.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c)throw Ba("icontext", a, b);
                    if (null === b || x(b) || "" === b)return b;
                    if ("string" !== typeof b)throw Ba("itype", a);
                    return new c(b)
                }, getTrusted: function (d, e) {
                    if (null === e || x(e) || "" === e)return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g)return e.$$unwrapTrustedValue();
                    if (d === qa.RESOURCE_URL) {
                        var g = za(e.toString()), r, s, n = !1;
                        r = 0;
                        for (s = a.length; r < s; r++)if (c(a[r], g)) {
                            n = !0;
                            break
                        }
                        if (n)for (r = 0, s = b.length; r < s; r++)if (c(b[r], g)) {
                            n = !1;
                            break
                        }
                        if (n)return e;
                        throw Ba("insecurl", e.toString());
                    }
                    if (d === qa.HTML)return f(e);
                    throw Ba("unsafe");
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function xf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a
        };
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > xa)throw Ba("iequirks");
            var c = na(qa);
            c.isEnabled = function () {
                return a
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function (a, b) {
                return b
            }, c.valueOf = ab);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            };
            var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
            n(qa, function (a, b) {
                var d = G(b);
                c[gb("parse_as_" + d)] = function (b) {
                    return e(a, b)
                };
                c[gb("get_trusted_" + d)] = function (b) {
                    return f(a, b)
                };
                c[gb("trust_as_" + d)] = function (b) {
                    return g(a, b)
                }
            });
            return c
        }]
    }

    function zf() {
        this.$get = ["$window", "$document",
            function (a, b) {
                var d = {}, c = ca((/android (\d+)/.exec(G((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator || {}).userAgent), f = b[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
                if (k) {
                    for (var r in k)if (l = h.exec(r)) {
                        g = l[0];
                        g = g.substr(0, 1).toUpperCase() + g.substr(1);
                        break
                    }
                    g || (g = "WebkitOpacity" in k && "webkit");
                    l = !!("transition" in k || g + "Transition" in k);
                    m = !!("animation" in k || g + "Animation" in k);
                    !c || l && m || (l = F(k.webkitTransition), m = F(k.webkitAnimation))
                }
                return {
                    history: !(!a.history || !a.history.pushState || 4 > c || e), hasEvent: function (a) {
                        if ("input" === a && 11 >= xa)return !1;
                        if (x(d[a])) {
                            var b = f.createElement("div");
                            d[a] = "on" + a in b
                        }
                        return d[a]
                    }, csp: Ea(), vendorPrefix: g, transitions: l, animations: m, android: c
                }
            }]
    }

    function Bf() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
            function f(g, h) {
                f.totalPendingRequests++;
                F(g) && b.get(g) || (g = e.getTrustedResourceUrl(g));
                var k = d.defaults && d.defaults.transformResponse;
                L(k) ? k = k.filter(function (a) {
                    return a !==
                        cc
                }) : k === cc && (k = null);
                return d.get(g, T({cache: b, transformResponse: k}, a))["finally"](function () {
                    f.totalPendingRequests--
                }).then(function (a) {
                    b.put(g, a.data);
                    return a.data
                }, function (a) {
                    if (!h)throw ja("tpload", g, a.status, a.statusText);
                    return c.reject(a)
                })
            }

            f.totalPendingRequests = 0;
            return f
        }]
    }

    function Cf() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    n(a, function (a) {
                        var c = ia.element(a).data("$binding");
                        c && n(c, function (c) {
                            d ? (new RegExp("(^|\\s)" + xd(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length)return k
                    }
                }, getLocation: function () {
                    return d.url()
                }, setLocation: function (b) {
                    b !== d.url() && (d.url(b), a.$digest())
                }, whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Df() {
        this.$get = ["$rootScope",
            "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
                function f(f, k, l) {
                    D(f) || (l = k, k = f, f = B);
                    var m = wa.call(arguments, 3), r = y(l) && !l, s = (r ? c : d).defer(), n = s.promise, q;
                    q = b.defer(function () {
                        try {
                            s.resolve(f.apply(null, m))
                        } catch (b) {
                            s.reject(b), e(b)
                        } finally {
                            delete g[n.$$timeoutId]
                        }
                        r || a.$apply()
                    }, k);
                    n.$$timeoutId = q;
                    g[q] = s;
                    return n
                }

                var g = {};
                f.cancel = function (a) {
                    return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                };
                return f
            }]
    }

    function za(a) {
        xa &&
        (Y.setAttribute("href", a), a = Y.href);
        Y.setAttribute("href", a);
        return {
            href: Y.href,
            protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
            host: Y.host,
            search: Y.search ? Y.search.replace(/^\?/, "") : "",
            hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
            hostname: Y.hostname,
            port: Y.port,
            pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
        }
    }

    function jd(a) {
        a = F(a) ? za(a) : a;
        return a.protocol === zd.protocol && a.host === zd.host
    }

    function Ef() {
        this.$get = ba(O)
    }

    function Ad(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var d = a[0] || {}, c = {}, e = "";
        return function () {
            var a, g, h, k, l;
            a = d.cookie || "";
            if (a !== e)for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++)g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c
        }
    }

    function If() {
        this.$get = Ad
    }

    function Lc(a) {
        function b(d, c) {
            if (E(d)) {
                var e = {};
                n(d, function (a, c) {
                    e[c] = b(c, a)
                });
                return e
            }
            return a.factory(d + "Filter", c)
        }

        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        b("currency", Bd);
        b("date", Cd);
        b("filter", og);
        b("json", pg);
        b("limitTo", qg);
        b("lowercase", rg);
        b("number", Dd);
        b("orderBy", Ed);
        b("uppercase", sg)
    }

    function og() {
        return function (a, b, d) {
            if (!Ca(a)) {
                if (null == a)return a;
                throw H("filter")("notarray", a);
            }
            var c;
            switch (kc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    c = !0;
                case "object":
                    b = tg(b, d, c);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function tg(a, b, d) {
        var c = E(a) && "$" in a;
        !0 === b ? b = oa : D(b) || (b = function (a, b) {
            if (x(a))return !1;
            if (null ===
                a || null === b)return a === b;
            if (E(b) || E(a) && !tc(a))return !1;
            a = G("" + a);
            b = G("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return c && !E(e) ? La(e, a.$, b, !1) : La(e, a, b, d)
        }
    }

    function La(a, b, d, c, e) {
        var f = kc(a), g = kc(b);
        if ("string" === g && "!" === b.charAt(0))return !La(a, b.substring(1), d, c);
        if (L(a))return a.some(function (a) {
            return La(a, b, d, c)
        });
        switch (f) {
            case "object":
                var h;
                if (c) {
                    for (h in a)if ("$" !== h.charAt(0) && La(a[h], b, d, !0))return !0;
                    return e ? !1 : La(a, b, d, !1)
                }
                if ("object" === g) {
                    for (h in b)if (e = b[h], !D(e) && !x(e) &&
                        (f = "$" === h, !La(f ? a : a[h], e, d, f, f)))return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function kc(a) {
        return null === a ? "null" : typeof a
    }

    function Bd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, e) {
            x(c) && (c = b.CURRENCY_SYM);
            x(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Fd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }

    function Dd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Fd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function ug(a) {
        var b =
            0, d, c, e, f, g;
        -1 < (c = a.indexOf(Gd)) && (a = a.replace(Gd, ""));
        0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
        for (e = 0; a.charAt(e) == lc; e++);
        if (e == (g = a.length))d = [0], c = 1; else {
            for (g--; a.charAt(g) == lc;)g--;
            c -= e;
            d = [];
            for (f = 0; e <= g; e++, f++)d[f] = +a.charAt(e)
        }
        c > Hd && (d = d.splice(0, Hd - 1), b = c - 1, c = 1);
        return {d: d, e: b, i: c}
    }

    function vg(a, b, d, c) {
        var e = a.d, f = e.length - a.i;
        b = x(b) ? Math.min(Math.max(d, f), c) : +b;
        d = b + a.i;
        c = e[d];
        if (0 < d)e.splice(d); else {
            a.i = 1;
            e.length = d = b + 1;
            for (var g = 0; g < d; g++)e[g] =
                0
        }
        for (5 <= c && e[d - 1]++; f < b; f++)e.push(0);
        if (b = e.reduceRight(function (a, b, c, d) {
                b += a;
                d[c] = b % 10;
                return Math.floor(b / 10)
            }, 0))e.unshift(b), a.i++
    }

    function Fd(a, b, d, c, e) {
        if (!F(a) && !N(a) || isNaN(a))return "";
        var f = !isFinite(a), g = !1, h = Math.abs(a) + "", k = "";
        if (f)k = "\u221e"; else {
            g = ug(h);
            vg(g, e, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            e = g.e;
            f = [];
            for (g = k.reduce(function (a, b) {
                return a && !b
            }, !0); 0 > h;)k.unshift(0), h++;
            0 < h ? f = k.splice(h) : (f = k, k = [0]);
            h = [];
            for (k.length > b.lgSize && h.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize;)h.unshift(k.splice(-b.gSize).join(""));
            k.length && h.unshift(k.join(""));
            k = h.join(d);
            f.length && (k += c + f.join(""));
            e && (k += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }

    function Kb(a, b, d) {
        var c = "";
        0 > a && (c = "-", a = -a);
        for (a = "" + a; a.length < b;)a = lc + a;
        d && (a = a.substr(a.length - b));
        return c + a
    }

    function aa(a, b, d, c) {
        d = d || 0;
        return function (e) {
            e = e["get" + a]();
            if (0 < d || e > -d)e += d;
            0 === e && -12 == d && (e = 12);
            return Kb(e, b, c)
        }
    }

    function Lb(a, b) {
        return function (d, c) {
            var e = d["get" + a](), f = ub(b ? "SHORT" + a : a);
            return c[f][e]
        }
    }

    function Id(a) {
        var b = (new Date(a,
            0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Jd(a) {
        return function (b) {
            var d = Id(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Kb(b, a)
        }
    }

    function mc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function Cd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ca(b[9] + b[10]), g = ca(b[9] + b[11]));
                h.call(a, ca(b[1]), ca(b[2]) -
                    1, ca(b[3]));
                f = ca(b[4] || 0) - f;
                g = ca(b[5] || 0) - g;
                h = ca(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b)
            }
            return a
        }

        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, f) {
            var g = "", h = [], k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            F(c) && (c = wg.test(c) ? ca(c) : b(c));
            N(c) && (c = new Date(c));
            if (!V(c) || !isFinite(c.getTime()))return c;
            for (; d;)(l = xg.exec(d)) ? (h = db(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            f && (m = xc(f, m), c = Tb(c, f, !0));
            n(h, function (b) {
                k = yg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function pg() {
        return function (a, b) {
            x(b) && (b = 2);
            return eb(a, b)
        }
    }

    function qg() {
        return function (a, b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : ca(b);
            if (isNaN(b))return a;
            N(a) && (a = a.toString());
            if (!L(a) && !F(a))return a;
            d = !d || isNaN(d) ? 0 : ca(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b),
                d)
        }
    }

    function Ed(a) {
        function b(b, d) {
            d = d ? -1 : 1;
            return b.map(function (b) {
                var c = 1, h = ab;
                if (D(b))h = b; else if (F(b)) {
                    if ("+" == b.charAt(0) || "-" == b.charAt(0))c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (h = a(b), h.constant))var k = h(), h = function (a) {
                        return a[k]
                    }
                }
                return {get: h, descending: c * d}
            })
        }

        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        return function (a, e, f) {
            if (null == a)return a;
            if (!Ca(a))throw H("orderBy")("notarray", a);
            L(e) || (e = [e]);
            0 === e.length &&
            (e = ["+"]);
            var g = b(e, f);
            g.push({
                get: function () {
                    return {}
                }, descending: f ? -1 : 1
            });
            a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a, predicateValues: g.map(function (c) {
                        var e = c.get(a);
                        c = typeof e;
                        if (null === e)c = "string", e = "null"; else if ("string" === c)e = e.toLowerCase(); else if ("object" === c)a:{
                            if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e)))break a;
                            if (tc(e) && (e = e.toString(), d(e)))break a;
                            e = b
                        }
                        return {value: e, type: c}
                    })
                }
            });
            a.sort(function (a, b) {
                for (var c = 0, d = 0, e = g.length; d < e; ++d) {
                    var c = a.predicateValues[d],
                        f = b.predicateValues[d], n = 0;
                    c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ? -1 : 1;
                    if (c = n * g[d].descending)break
                }
                return c
            });
            return a = a.map(function (a) {
                return a.value
            })
        }
    }

    function Ma(a) {
        D(a) && (a = {link: a});
        a.restrict = a.restrict || "AC";
        return ba(a)
    }

    function Kd(a, b, d, c, e) {
        var f = this, g = [];
        f.$error = {};
        f.$$success = {};
        f.$pending = v;
        f.$name = e(b.name || b.ngForm || "")(d);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        f.$$parentForm = Mb;
        f.$rollbackViewValue = function () {
            n(g,
                function (a) {
                    a.$rollbackViewValue()
                })
        };
        f.$commitViewValue = function () {
            n(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            Ta(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a);
            a.$$parentForm = f
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            n(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            n(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            n(f.$$success, function (b, c) {
                f.$setValidity(c,
                    null, a)
            });
            cb(g, a);
            a.$$parentForm = Mb
        };
        Ld({
            ctrl: this, $element: a, set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (cb(d, c), 0 === d.length && delete a[b])
            }, $animate: c
        });
        f.$setDirty = function () {
            c.removeClass(a, Ya);
            c.addClass(a, Nb);
            f.$dirty = !0;
            f.$pristine = !1;
            f.$$parentForm.$setDirty()
        };
        f.$setPristine = function () {
            c.setClass(a, Ya, Nb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            n(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            n(g,
                function (a) {
                    a.$setUntouched()
                })
        };
        f.$setSubmitted = function () {
            c.addClass(a, "ng-submitted");
            f.$submitted = !0;
            f.$$parentForm.$setSubmitted()
        }
    }

    function nc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function lb(a, b, d, c, e, f) {
        var g = G(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function (a) {
                h = !0
            });
            b.on("compositionend", function () {
                h = !1;
                k()
            })
        }
        var k = function (a) {
            l && (f.defer.cancel(l), l = null);
            if (!h) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim ||
                (e = X(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input"))b.on("input", k); else {
            var l, m = function (a, b, c) {
                l || (l = f.defer(function () {
                    l = null;
                    b && b.value === c || k(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste"))b.on("paste cut", m)
        }
        b.on("change", k);
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Ob(a, b) {
        return function (d, c) {
            var e,
                f;
            if (V(d))return d;
            if (F(d)) {
                '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (zg.test(d))return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d))return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, n(e, function (a, c) {
                    c < b.length && (f[b[c]] = +a)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function mb(a, b, d, c) {
        return function (e,
                         f, g, h, k, l, m) {
            function r(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function s(a) {
                return y(a) && !V(a) ? d(a) || v : a
            }

            Md(e, f, g, h);
            lb(e, f, g, h, k, l);
            var n = h && h.$options && h.$options.timezone, q;
            h.$$parserName = a;
            h.$parsers.push(function (a) {
                return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, q), n && (a = Tb(a, n)), a) : v
            });
            h.$formatters.push(function (a) {
                if (a && !V(a))throw nb("datefmt", a);
                if (r(a))return (q = a) && n && (q = Tb(q, n, !0)), m("date")(a, c, n);
                q = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var t;
                h.$validators.min = function (a) {
                    return !r(a) ||
                        x(t) || d(a) >= t
                };
                g.$observe("min", function (a) {
                    t = s(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var p;
                h.$validators.max = function (a) {
                    return !r(a) || x(p) || d(a) <= p
                };
                g.$observe("max", function (a) {
                    p = s(a);
                    h.$validate()
                })
            }
        }
    }

    function Md(a, b, d, c) {
        (c.$$hasNativeValidators = E(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? v : a
        })
    }

    function Nd(a, b, d, c, e) {
        if (y(c)) {
            a = a(c);
            if (!a.constant)throw nb("constexpr", d, c);
            return a(b)
        }
        return e
    }

    function oc(a, b) {
        a = "ngClass" + a;
        return ["$animate", function (d) {
            function c(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++)if (e == b[m])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return L(a) ? (n(a, function (a) {
                    b = b.concat(e(a))
                }), b) : F(a) ? a.split(" ") : E(a) ? (n(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }

            return {
                restrict: "AC", link: function (f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || Z(), d = [];
                        n(a, function (a) {
                            if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts",
                            c);
                        return d.join(" ")
                    }

                    function l(a) {
                        if (!0 === b || f.$index % 2 === b) {
                            var l = e(a || []);
                            if (!m) {
                                var n = k(l, 1);
                                h.$addClass(n)
                            } else if (!oa(a, m)) {
                                var q = e(m), n = c(l, q), l = c(q, l), n = k(n, 1), l = k(l, -1);
                                n && n.length && d.addClass(g, n);
                                l && l.length && d.removeClass(g, l)
                            }
                        }
                        m = na(a)
                    }

                    var m;
                    f.$watch(h[a], l, !0);
                    h.$observe("class", function (b) {
                        l(f.$eval(h[a]))
                    });
                    "ngClass" !== a && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[a]));
                            g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function Ld(a) {
        function b(a,
                   b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + Bc(a, "-") : "";
            b(ob + a, !0 === c);
            b(Od + a, !1 === c)
        }

        var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
        f[Od] = !(f[ob] = e.hasClass(ob));
        c.$setValidity = function (a, e, f) {
            x(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = v));
            Na(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
            c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = v, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));
            e = c.$pending && c.$pending[a] ? v : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
            d(a, e);
            c.$$parentForm.$setValidity(a, e, c)
        }
    }

    function Pd(a) {
        if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
        return !0
    }

    var Ag = /^\/(.+)\/([a-z]*)$/, sa = Object.prototype.hasOwnProperty, G = function (a) {
        return F(a) ? a.toLowerCase() : a
    }, ub = function (a) {
        return F(a) ? a.toUpperCase() : a
    }, xa, C, ua, wa = [].slice, ag = [].splice, Bg =
        [].push, ga = Object.prototype.toString, uc = Object.getPrototypeOf, Da = H("ng"), ia = O.angular || (O.angular = {}), Vb, pb = 0;
    xa = W.documentMode;
    B.$inject = [];
    ab.$inject = [];
    var L = Array.isArray, ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, X = function (a) {
        return F(a) ? a.trim() : a
    }, xd = function (a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, Ea = function () {
        if (!y(Ea.rules)) {
            var a = W.querySelector("[ng-csp]") || W.querySelector("[data-ng-csp]");
            if (a) {
                var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                Ea.rules = {
                    noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                    noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                }
            } else {
                a = Ea;
                try {
                    new Function(""), b = !1
                } catch (d) {
                    b = !0
                }
                a.rules = {noUnsafeEval: b, noInlineStyle: !1}
            }
        }
        return Ea.rules
    }, rb = function () {
        if (y(rb.name_))return rb.name_;
        var a, b, d = Qa.length, c, e;
        for (b = 0; b < d; ++b)if (c = Qa[b], a = W.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(c + "jq");
            break
        }
        return rb.name_ = e
    }, de = /:/g, Qa = ["ng-",
        "data-ng-", "ng:", "x-ng-"], ie = /[A-Z]/g, Cc = !1, Pa = 3, me = {
        full: "1.5.0",
        major: 1,
        minor: 5,
        dot: 0,
        codeName: "ennoblement-facilitation"
    };
    U.expando = "ng339";
    var ib = U.cache = {}, Of = 1;
    U._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var Jf = /([\:\-\_]+(.))/g, Kf = /^moz([A-Z])/, yb = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Xb = H("jqLite"), Nf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Wb = /<|&#?\w+;/, Lf = /<([\w:-]+)/, Mf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, da = {
        option: [1, '<select multiple="multiple">',
            "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
    da.th = da.td;
    var Tf = Node.prototype.contains || function (a) {
            return !!(this.compareDocumentPosition(a) & 16)
        }, Ra = U.prototype = {
        ready: function (a) {
            function b() {
                d || (d = !0, a())
            }

            var d = !1;
            "complete" === W.readyState ? setTimeout(b) : (this.on("DOMContentLoaded",
                b), U(O).on("load", b))
        }, toString: function () {
            var a = [];
            n(this, function (b) {
                a.push("" + b)
            });
            return "[" + a.join(", ") + "]"
        }, eq: function (a) {
            return 0 <= a ? C(this[a]) : C(this[this.length + a])
        }, length: 0, push: Bg, sort: [].sort, splice: [].splice
    }, Db = {};
    n("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Db[G(a)] = a
    });
    var Uc = {};
    n("input select option textarea button form details".split(" "), function (a) {
        Uc[a] = !0
    });
    var cd = {
        ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max",
        ngPattern: "pattern"
    };
    n({
        data: Zb, removeData: hb, hasData: function (a) {
            for (var b in ib[a.ng339])return !0;
            return !1
        }, cleanData: function (a) {
            for (var b = 0, d = a.length; b < d; b++)hb(a[b])
        }
    }, function (a, b) {
        U[b] = a
    });
    n({
        data: Zb, inheritedData: Cb, scope: function (a) {
            return C.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return C.data(a, "$isolateScope") || C.data(a, "$isolateScopeNoTemplate")
        }, controller: Rc, injector: function (a) {
            return Cb(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        },
        hasClass: zb, css: function (a, b, d) {
            b = gb(b);
            if (y(d))a.style[b] = d; else return a.style[b]
        }, attr: function (a, b, d) {
            var c = a.nodeType;
            if (c !== Pa && 2 !== c && 8 !== c)if (c = G(b), Db[c])if (y(d))d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c)); else return a[b] || (a.attributes.getNamedItem(b) || B).specified ? c : v; else if (y(d))a.setAttribute(b, d); else if (a.getAttribute)return a = a.getAttribute(b, 2), null === a ? v : a
        }, prop: function (a, b, d) {
            if (y(d))a[b] = d; else return a[b]
        }, text: function () {
            function a(a, d) {
                if (x(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Pa ? a.textContent : ""
                }
                a.textContent = d
            }

            a.$dv = "";
            return a
        }(), val: function (a, b) {
            if (x(b)) {
                if (a.multiple && "select" === ra(a)) {
                    var d = [];
                    n(a.options, function (a) {
                        a.selected && d.push(a.value || a.text)
                    });
                    return 0 === d.length ? null : d
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            if (x(b))return a.innerHTML;
            wb(a, !0);
            a.innerHTML = b
        }, empty: Sc
    }, function (a, b) {
        U.prototype[b] = function (b, c) {
            var e, f, g = this.length;
            if (a !== Sc && x(2 == a.length && a !== zb && a !== Rc ? b : c)) {
                if (E(b)) {
                    for (e = 0; e < g; e++)if (a === Zb)a(this[e], b); else for (f in b)a(this[e],
                        f, b[f]);
                    return this
                }
                e = a.$dv;
                g = x(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)a(this[e], b, c);
            return this
        }
    });
    n({
        removeData: hb, on: function (a, b, d, c) {
            if (y(c))throw Xb("onargs");
            if (Mc(a)) {
                c = xb(a, !0);
                var e = c.events, f = c.handle;
                f || (f = c.handle = Qf(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function (b, c, g) {
                    var h = e[b];
                    h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));
                    h.push(d)
                }; g--;)b = c[g], yb[b] ? (h(yb[b], Sf),
                    h(b, v, !0)) : h(b)
            }
        }, off: Qc, one: function (a, b, d) {
            a = C(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b, e)
            });
            a.on(b, d)
        }, replaceWith: function (a, b) {
            var d, c = a.parentNode;
            wb(a);
            n(new U(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        }, children: function (a) {
            var b = [];
            n(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new U(b);
                for (var d = 0, c = b.length; d < c; d++)a.appendChild(b[d])
            }
        },
        prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                n(new U(b), function (b) {
                    a.insertBefore(b, d)
                })
            }
        }, wrap: function (a, b) {
            Oc(a, C(b).eq(0).clone()[0])
        }, remove: $b, detach: function (a) {
            $b(a, !0)
        }, after: function (a, b) {
            var d = a, c = a.parentNode;
            b = new U(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling);
                d = g
            }
        }, addClass: Bb, removeClass: Ab, toggleClass: function (a, b, d) {
            b && n(b.split(" "), function (b) {
                var e = d;
                x(e) && (e = !zb(a, b));
                (e ? Bb : Ab)(a, b)
            })
        }, parent: function (a) {
            return (a = a.parentNode) &&
            11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: Yb, triggerHandler: function (a, b, d) {
            var c, e, f = b.type || b, g = xb(a);
            if (g = (g = g && g.events) && g[f])c = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: B, type: f, target: a
            }, b.type && (c = T(c, b)), b = na(g), e = d ? [c].concat(d) : [c], n(b, function (b) {
                c.isImmediatePropagationStopped() || b.apply(a, e)
            })
        }
    }, function (a, b) {
        U.prototype[b] = function (b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++)x(f) ? (f = a(this[g], b, c, e), y(f) && (f = C(f))) : Pc(f, a(this[g], b, c, e));
            return y(f) ? f : this
        };
        U.prototype.bind = U.prototype.on;
        U.prototype.unbind = U.prototype.off
    });
    Ua.prototype = {
        put: function (a, b) {
            this[Fa(a, this.nextUid)] = b
        }, get: function (a) {
            return this[Fa(a, this.nextUid)]
        }, remove: function (a) {
            var b =
                this[a = Fa(a, this.nextUid)];
            delete this[a];
            return b
        }
    };
    var Hf = [function () {
        this.$get = [function () {
            return Ua
        }]
    }], Vf = /^([^\(]+?)=>/, Wf = /^[^\(]*\(\s*([^\)]*)\)/m, Cg = /,/, Dg = /^\s*(_?)(\S+?)\1\s*$/, Uf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ga = H("$injector");
    fb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b)throw F(d) && d || (d = a.name || Xf(a)), Ga("strictdi", d);
                    b = Vc(a);
                    n(b[1].split(Cg), function (a) {
                        a.replace(Dg, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else L(a) ?
            (b = a.length - 1, Sa(a[b], "fn"), c = a.slice(0, b)) : Sa(a, "fn", !0);
        return c
    };
    var Rd = H("$animate"), $e = function () {
        this.$get = function () {
        }
    }, af = function () {
        var a = new Ua, b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
            function e(a, b, c) {
                var d = !1;
                b && (b = F(b) ? b.split(" ") : L(b) ? b : [], n(b, function (b) {
                    b && (d = !0, a[b] = c)
                }));
                return d
            }

            function f() {
                n(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = Yf(b.attr("class")), e = "", f = "";
                        n(c, function (a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                        });
                        n(b, function (a) {
                            e &&
                            Bb(a, e);
                            f && Ab(a, f)
                        });
                        a.remove(b)
                    }
                });
                b.length = 0
            }

            return {
                enabled: B, on: B, off: B, pin: B, push: function (g, h, k, l) {
                    l && l();
                    k = k || {};
                    k.from && g.css(k.from);
                    k.to && g.css(k.to);
                    if (k.addClass || k.removeClass)if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
                    g = new d;
                    g.complete();
                    return g
                }
            }
        }]
    }, Ye = ["$provide", function (a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (d, c) {
            if (d && "." !== d.charAt(0))throw Rd("notcsel",
                d);
            var e = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] = e;
            a.factory(e, c)
        };
        this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls", "ng-animate");
            return this.$$classNameFilter
        };
        this.$get = ["$$animateQueue", function (a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a:{
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a
                            }
                        }
                        h = void 0
                    }
                    !h || h.parentNode || h.previousElementSibling ||
                    (d = null)
                }
                d ? d.after(a) : c.prepend(a)
            }

            return {
                on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                    a.end && a.end()
                }, enter: function (e, f, g, h) {
                    f = f && C(f);
                    g = g && C(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "enter", Ha(h))
                }, move: function (e, f, g, h) {
                    f = f && C(f);
                    g = g && C(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "move", Ha(h))
                }, leave: function (b, c) {
                    return a.push(b, "leave", Ha(c), function () {
                        b.remove()
                    })
                }, addClass: function (b, c, g) {
                    g = Ha(g);
                    g.addClass = jb(g.addclass, c);
                    return a.push(b, "addClass", g)
                }, removeClass: function (b,
                                          c, g) {
                    g = Ha(g);
                    g.removeClass = jb(g.removeClass, c);
                    return a.push(b, "removeClass", g)
                }, setClass: function (b, c, g, h) {
                    h = Ha(h);
                    h.addClass = jb(h.addClass, c);
                    h.removeClass = jb(h.removeClass, g);
                    return a.push(b, "setClass", h)
                }, animate: function (b, c, g, h, k) {
                    k = Ha(k);
                    k.from = k.from ? T(k.from, c) : c;
                    k.to = k.to ? T(k.to, g) : g;
                    k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate");
                    return a.push(b, "animate", k)
                }
            }
        }]
    }], cf = function () {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                d.push(b);
                1 < d.length || a(function () {
                    for (var a = 0; a < d.length; a++)d[a]();
                    d = []
                })
            }

            var d = [];
            return function () {
                var a = !1;
                b(function () {
                    a = !0
                });
                return function (d) {
                    a ? d() : b(d)
                }
            }
        }]
    }, bf = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
            function f(a) {
                this.setHost(a);
                var b = d();
                this._doneCallbacks = [];
                this._tick = function (a) {
                    var d = c[0];
                    d && d.hidden ? e(a, 0, !1) : b(a)
                };
                this._state = 0
            }

            f.chain = function (a, b) {
                function c() {
                    if (d === a.length)b(!0); else a[d](function (a) {
                        !1 === a ? b(!1) : (d++, c())
                    })
                }

                var d = 0;
                c()
            };
            f.all = function (a, b) {
                function c(f) {
                    e = e && f;
                    ++d ===
                    a.length && b(e)
                }

                var d = 0, e = !0;
                n(a, function (a) {
                    a.done(c)
                })
            };
            f.prototype = {
                setHost: function (a) {
                    this.host = a || {}
                }, done: function (a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a)
                }, progress: B, getPromise: function () {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                !1 === b ? c() : a()
                            })
                        })
                    }
                    return this.promise
                }, then: function (a, b) {
                    return this.getPromise().then(a, b)
                }, "catch": function (a) {
                    return this.getPromise()["catch"](a)
                }, "finally": function (a) {
                    return this.getPromise()["finally"](a)
                }, pause: function () {
                    this.host.pause &&
                    this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end();
                    this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel();
                    this._resolve(!1)
                }, complete: function (a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._tick(function () {
                        b._resolve(a)
                    }))
                }, _resolve: function (a) {
                    2 !== this._state && (n(this._doneCallbacks, function (b) {
                        b(a)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            };
            return f
        }]
    }, Ze = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner",
            function (a, b, d) {
                return function (b, e) {
                    function f() {
                        a(function () {
                            g.addClass && (b.addClass(g.addClass), g.addClass = null);
                            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                            g.to && (b.css(g.to), g.to = null);
                            h || k.complete();
                            h = !0
                        });
                        return k
                    }

                    var g = e || {};
                    g.$$prepared || (g = Oa(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (b.css(g.from), g.from = null);
                    var h, k = new d;
                    return {start: f, end: f}
                }
            }]
    }, ja = H("$compile");
    Ec.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Xc = /^((?:x|data)[\:\-_])/i, bg = H("$controller"),
        dd = /^(\S+)(\s+as\s+([\w$]+))?$/, jf = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    b ? !b.nodeType && b instanceof C && (b = b[0]) : b = a[0].body;
                    return b.offsetWidth + 1
                }
            }]
        }, ed = "application/json", dc = {"Content-Type": ed + ";charset=utf-8"}, dg = /^\[|^\{(?!\{)/, eg = {
            "[": /]$/,
            "{": /}$/
        }, cg = /^\)\]\}',?\n/, Eg = H("$http"), id = function (a) {
            return function () {
                throw Eg("legacy", a);
            }
        }, Ka = ia.$interpolateMinErr = H("$interpolate");
    Ka.throwNoconcat = function (a) {
        throw Ka("noconcat", a);
    };
    Ka.interr = function (a, b) {
        return Ka("interr",
            a, b.toString())
    };
    var Fg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, gg = {http: 80, https: 443, ftp: 21}, Gb = H("$location"), Gg = {
        $$html5: !1, $$replace: !1, absUrl: Hb("$$absUrl"), url: function (a) {
            if (x(a))return this.$$url;
            var b = Fg.exec(a);
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
            (b[2] || b[1] || "" === a) && this.search(b[3] || "");
            this.hash(b[5] || "");
            return this
        }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: nd("$$path", function (a) {
            a = null !== a ? a.toString() : "";
            return "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a,
                              b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (F(a) || N(a))a = a.toString(), this.$$search = zc(a); else if (E(a))a = Oa(a, {}), n(a, function (b, c) {
                        null == b && delete a[c]
                    }), this.$$search = a; else throw Gb("isrcharg");
                    break;
                default:
                    x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            this.$$compose();
            return this
        }, hash: nd("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            this.$$replace = !0;
            return this
        }
    };
    n([md, gc, fc], function (a) {
        a.prototype = Object.create(Gg);
        a.prototype.state =
            function (b) {
                if (!arguments.length)return this.$$state;
                if (a !== fc || !this.$$html5)throw Gb("nostate");
                this.$$state = x(b) ? null : b;
                return this
            }
    });
    var ka = H("$parse"), ig = Function.prototype.call, jg = Function.prototype.apply, kg = Function.prototype.bind, Pb = Z();
    n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Pb[a] = !0
    });
    var Hg = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, ic = function (a) {
        this.options = a
    };
    ic.prototype = {
        constructor: ic, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens =
                     []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a))this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Pb[b], e = Pb[d];
                Pb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index +=
                    a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, b) {
            return -1 !== b.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" ===
                a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, d) {
            d = d || this.index;
            b = y(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw ka("lexerr", a, b, this.text);
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = G(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var c = this.peek();
                    if ("e" == d && this.isExpOperator(c))a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) ||
                        c && this.isNumber(c) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b))break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f =
                    this.text.charAt(this.index), c = c + f;
                if (e)"u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Hg[f] || f, e = !1; else if ("\\" === f)e = !0; else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({index: b, text: c, constant: !0, value: d});
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var q = function (a, b) {
        this.lexer = a;
        this.options = b
    };
    q.Program = "Program";
    q.ExpressionStatement =
        "ExpressionStatement";
    q.AssignmentExpression = "AssignmentExpression";
    q.ConditionalExpression = "ConditionalExpression";
    q.LogicalExpression = "LogicalExpression";
    q.BinaryExpression = "BinaryExpression";
    q.UnaryExpression = "UnaryExpression";
    q.CallExpression = "CallExpression";
    q.MemberExpression = "MemberExpression";
    q.Identifier = "Identifier";
    q.Literal = "Literal";
    q.ArrayExpression = "ArrayExpression";
    q.Property = "Property";
    q.ObjectExpression = "ObjectExpression";
    q.ThisExpression = "ThisExpression";
    q.LocalsExpression = "LocalsExpression";
    q.NGValueParameter = "NGValueParameter";
    q.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        }, program: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
                type: q.Program,
                body: a
            }
        }, expressionStatement: function () {
            return {type: q.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var a =
                this.expression(); this.expect("|");)a = this.filter(a);
            return a
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary();
            this.expect("=") && (a = {type: q.AssignmentExpression, left: a, right: this.assignment(), operator: "="});
            return a
        }, ternary: function () {
            var a = this.logicalOR(), b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: q.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        }, logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)a =
            {type: q.LogicalExpression, operator: "||", left: a, right: this.logicalAND()};
            return a
        }, logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");)a = {
                type: q.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        }, equality: function () {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        }, relational: function () {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");)a = {
                type: q.BinaryExpression,
                operator: b.text, left: a, right: this.additive()
            };
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        }, unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: q.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } :
                this.primary()
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = Oa(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {
                type: q.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            },
                this.consume(")")) : "[" === b.text ? (a = {
                type: q.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: q.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        }, filter: function (a) {
            a = [a];
            for (var b = {
                type: q.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");)a.push(this.expression());
            return b
        }, parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.expression());
                while (this.expect(","))
            }
            return a
        }, identifier: function () {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {type: q.Identifier, name: a.text}
        }, constant: function () {
            return {type: q.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {type: q.ArrayExpression, elements: a}
        }, object: function () {
            var a = [], b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    b = {type: q.Property, kind: "init"};
                    this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());
                    this.consume(":");
                    b.value = this.expression();
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {type: q.ObjectExpression, properties: a}
        }, throwError: function (a, b) {
            throw ka("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        }, consume: function (a) {
            if (0 === this.tokens.length)throw ka("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b
        }, peekToken: function () {
            if (0 === this.tokens.length)throw ka("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        }, peekAhead: function (a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e))return a
            }
            return !1
        }, expect: function (a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
        }, constants: {
            "true": {type: q.Literal, value: !0},
            "false": {type: q.Literal, value: !1},
            "null": {type: q.Literal, value: null},
            undefined: {type: q.Literal, value: v},
            "this": {type: q.ThisExpression},
            $locals: {type: q.LocalsExpression}
        }
    };
    ud.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            };
            R(c, d.$filter);
            var e = "", f;
            this.stage = "assign";
            if (f = sd(c))this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e),
                e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            f = qd(c.body);
            d.stage = "inputs";
            n(f, function (a, b) {
                var c = "fn" + b;
                d.state[c] = {vars: [], body: [], own: {}};
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e);
                d.return_(e);
                d.state.inputs.push(c);
                a.watchId = b
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(c);
            e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
            e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject",
                "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e))(this.$filter, Xa, Aa, od, hg, Ib, lg, pd, a);
            this.state = this.stage = v;
            e.literal = td(c);
            e.constant = c.constant;
            return e
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], b = this.state.inputs, d = this;
            n(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"))
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("")
        }, generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) +
                "};"
        }, filterPrefix: function () {
            var a = [], b = this;
            n(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, b, d, c, e, f) {
            var g, h, k = this, l, m;
            c = c || B;
            if (!f && y(a.watchId))b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d,
                c, e, !0)); else switch (a.type) {
                case q.Program:
                    n(a.body, function (b, c) {
                        k.recurse(b.expression, v, v, function (a) {
                            h = a
                        });
                        c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                    });
                    break;
                case q.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(m);
                    break;
                case q.UnaryExpression:
                    this.recurse(a.argument, v, v, function (a) {
                        h = a
                    });
                    m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.BinaryExpression:
                    this.recurse(a.left, v, v, function (a) {
                        g = a
                    });
                    this.recurse(a.right, v, v, function (a) {
                        h = a
                    });
                    m = "+" ===
                    a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.LogicalExpression:
                    b = b || this.nextId();
                    k.recurse(a.left, b);
                    k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case q.ConditionalExpression:
                    b = b || this.nextId();
                    k.recurse(a.test, b);
                    k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case q.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === k.stage ?
                        "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    Xa(a.name);
                    k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if_("inputs" === k.stage || "s", function () {
                            e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(b, k.nonComputedMember("s", a.name))
                        })
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                    (k.state.expensiveChecks || Jb(a.name)) && k.addEnsureSafeObject(b);
                    c(b);
                    break;
                case q.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    k.recurse(a.object, g, v, function () {
                        k.if_(k.notNull(g), function () {
                            e && 1 !== e && k.addEnsureSafeAssignContext(g);
                            if (a.computed)h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h); else {
                                Xa(a.property.name);
                                e &&
                                1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                                m = k.nonComputedMember(g, a.property.name);
                                if (k.state.expensiveChecks || Jb(a.property.name))m = k.ensureSafeObject(m);
                                k.assign(b, m);
                                d && (d.computed = !1, d.name = a.property.name)
                            }
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }, !!e);
                    break;
                case q.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments, function (a) {
                        var b = k.nextId();
                        k.recurse(a, b);
                        l.push(b)
                    }), m = h + "(" +
                        l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                        k.if_(k.notNull(h), function () {
                            k.addEnsureSafeFunction(h);
                            n(a.arguments, function (a) {
                                k.recurse(a, k.nextId(), v, function (a) {
                                    l.push(k.ensureSafeObject(a))
                                })
                            });
                            g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                            m = k.ensureSafeObject(m);
                            k.assign(b, m)
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }));
                    break;
                case q.AssignmentExpression:
                    h =
                        this.nextId();
                    g = {};
                    if (!rd(a.left))throw ka("lval");
                    this.recurse(a.left, v, g, function () {
                        k.if_(k.notNull(g.context), function () {
                            k.recurse(a.right, h);
                            k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                            k.addEnsureSafeAssignContext(g.context);
                            m = k.member(g.context, g.name, g.computed) + a.operator + h;
                            k.assign(b, m);
                            c(b || m)
                        })
                    }, 1);
                    break;
                case q.ArrayExpression:
                    l = [];
                    n(a.elements, function (a) {
                        k.recurse(a, k.nextId(), v, function (a) {
                            l.push(a)
                        })
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.ObjectExpression:
                    l =
                        [];
                    n(a.properties, function (a) {
                        k.recurse(a.value, k.nextId(), v, function (b) {
                            l.push(k.escape(a.key.type === q.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    });
                    m = "{" + l.join(",") + "}";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.ThisExpression:
                    this.assign(b, "s");
                    c("s");
                    break;
                case q.LocalsExpression:
                    this.assign(b, "l");
                    c("l");
                    break;
                case q.NGValueParameter:
                    this.assign(b, "v"), c("v")
            }
        }, getHasOwnProperty: function (a, b) {
            var d = a + "." + b, c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " +
                a + ")"));
            return c[d]
        }, assign: function (a, b) {
            if (a)return this.current().body.push(a, "=", b, ";"), a
        }, filter: function (a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a]
        }, ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        }, plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        }, return_: function (a) {
            this.current().body.push("return ", a, ";")
        }, if_: function (a, b, d) {
            if (!0 === a)b(); else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a, b) {
            return a + "." + b
        }, computedMember: function (a, b) {
            return a + "[" + b + "]"
        }, member: function (a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        }, addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        }, addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        }, addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a),
                ";")
        }, addEnsureSafeAssignContext: function (a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        }, ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        }, ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        }, ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        }, getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        }, ensureSafeAssignContext: function (a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        }, lazyRecurse: function (a, b, d, c, e, f) {
            var g =
                this;
            return function () {
                g.recurse(a, b, d, c, e, f)
            }
        }, lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a, b)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (F(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (N(a))return a.toString();
            if (!0 === a)return "true";
            if (!1 === a)return "false";
            if (null === a)return "null";
            if ("undefined" === typeof a)return "undefined";
            throw ka("esc");
        }, nextId: function (a,
                             b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        }, current: function () {
            return this.state[this.state.computing]
        }
    };
    vd.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = b;
            R(c, d.$filter);
            var e, f;
            if (e = sd(c))f = this.recurse(e);
            e = qd(c.body);
            var g;
            e && (g = [], n(e, function (a, b) {
                var c = d.recurse(a);
                a.input = c;
                g.push(c);
                a.watchId = b
            }));
            var h = [];
            n(c.body, function (a) {
                h.push(d.recurse(a.expression))
            });
            e = 0 === c.body.length ? function () {
            } :
                1 === c.body.length ? h[0] : function (a, b) {
                    var c;
                    n(h, function (d) {
                        c = d(a, b)
                    });
                    return c
                };
            f && (e.assign = function (a, b, c) {
                return f(a, c, b)
            });
            g && (e.inputs = g);
            e.literal = td(c);
            e.constant = c.constant;
            return e
        }, recurse: function (a, b, d) {
            var c, e, f = this, g;
            if (a.input)return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case q.Literal:
                    return this.value(a.value, b);
                case q.UnaryExpression:
                    return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
                case q.BinaryExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right),
                        this["binary" + a.operator](c, e, b);
                case q.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case q.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case q.Identifier:
                    return Xa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Jb(a.name), b, d, f.expression);
                case q.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (Xa(a.property.name, f.expression),
                        e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
                case q.CallExpression:
                    return g = [], n(a.arguments, function (a) {
                        g.push(f.recurse(a))
                    }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
                        for (var r = [], n = 0; n < g.length; ++n)r.push(g[n](a, c, d, f));
                        a = e.apply(v, r, f);
                        return b ? {context: v, name: v, value: a} : a
                    } : function (a, c, d, m) {
                        var r =
                            e(a, c, d, m), n;
                        if (null != r.value) {
                            Aa(r.context, f.expression);
                            od(r.value, f.expression);
                            n = [];
                            for (var q = 0; q < g.length; ++q)n.push(Aa(g[q](a, c, d, m), f.expression));
                            n = Aa(r.value.apply(r.context, n), f.expression)
                        }
                        return b ? {value: n} : n
                    };
                case q.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
                        var r = c(a, d, g, m);
                        a = e(a, d, g, m);
                        Aa(r.value, f.expression);
                        Ib(r.context);
                        r.context[r.name] = a;
                        return b ? {value: a} : a
                    };
                case q.ArrayExpression:
                    return g = [], n(a.elements, function (a) {
                        g.push(f.recurse(a))
                    }),
                        function (a, c, d, e) {
                            for (var f = [], n = 0; n < g.length; ++n)f.push(g[n](a, c, d, e));
                            return b ? {value: f} : f
                        };
                case q.ObjectExpression:
                    return g = [], n(a.properties, function (a) {
                        g.push({
                            key: a.key.type === q.Identifier ? a.key.name : "" + a.key.value,
                            value: f.recurse(a.value)
                        })
                    }), function (a, c, d, e) {
                        for (var f = {}, n = 0; n < g.length; ++n)f[g[n].key] = g[n].value(a, c, d, e);
                        return b ? {value: f} : f
                    };
                case q.ThisExpression:
                    return function (a) {
                        return b ? {value: a} : a
                    };
                case q.LocalsExpression:
                    return function (a, c) {
                        return b ? {value: c} : c
                    };
                case q.NGValueParameter:
                    return function (a,
                                     c, d, e) {
                        return b ? {value: d} : d
                    }
            }
        }, "unary+": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = y(d) ? +d : 0;
                return b ? {value: d} : d
            }
        }, "unary-": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = y(d) ? -d : 0;
                return b ? {value: d} : d
            }
        }, "unary!": function (a, b) {
            return function (d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {value: d} : d
            }
        }, "binary+": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = pd(h, c);
                return d ? {value: h} : h
            }
        }, "binary-": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = (y(h) ? h : 0) - (y(c) ? c : 0);
                return d ? {value: h} : h
            }
        }, "binary*": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) * b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary/": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary%": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary===": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c,
                        e, f, g) !== b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) == b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f,
                        g) <= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) >= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary&&": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) && b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary||": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "ternary?:": function (a, b, d, c) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                return c ? {value: e} : e
            }
        }, value: function (a, b) {
            return function () {
                return b ? {
                    context: v,
                    name: v, value: a
                } : a
            }
        }, identifier: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                f = g && a in g ? g : f;
                c && 1 !== c && f && !f[a] && (f[a] = {});
                g = f ? f[a] : v;
                b && Aa(g, e);
                return d ? {context: f, name: a, value: g} : g
            }
        }, computedMember: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                var l = a(f, g, h, k), m, n;
                null != l && (m = b(f, g, h, k), m += "", Xa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], Aa(n, e));
                return d ? {context: l, name: m, value: n} : n
            }
        }, nonComputedMember: function (a, b, d, c, e, f) {
            return function (g, h, k, l) {
                g = a(g, h, k, l);
                e && 1 !== e && (Ib(g), g && !g[b] &&
                (g[b] = {}));
                h = null != g ? g[b] : v;
                (d || Jb(b)) && Aa(h, f);
                return c ? {context: g, name: b, value: h} : h
            }
        }, inputs: function (a, b) {
            return function (d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    var jc = function (a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new q(this.lexer);
        this.astCompiler = d.csp ? new vd(this.ast, b) : new ud(this.ast, b)
    };
    jc.prototype = {
        constructor: jc, parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var mg = Object.prototype.valueOf, Ba = H("$sce"), qa = {
        HTML: "html", CSS: "css", URL: "url",
        RESOURCE_URL: "resourceUrl", JS: "js"
    }, ja = H("$compile"), Y = W.createElement("a"), zd = za(O.location.href);
    Ad.$inject = ["$document"];
    Lc.$inject = ["$provide"];
    var Hd = 22, Gd = ".", lc = "0";
    Bd.$inject = ["$locale"];
    Dd.$inject = ["$locale"];
    var yg = {
        yyyy: aa("FullYear", 4),
        yy: aa("FullYear", 2, 0, !0),
        y: aa("FullYear", 1),
        MMMM: Lb("Month"),
        MMM: Lb("Month", !0),
        MM: aa("Month", 2, 1),
        M: aa("Month", 1, 1),
        dd: aa("Date", 2),
        d: aa("Date", 1),
        HH: aa("Hours", 2),
        H: aa("Hours", 1),
        hh: aa("Hours", 2, -12),
        h: aa("Hours", 1, -12),
        mm: aa("Minutes", 2),
        m: aa("Minutes",
            1),
        ss: aa("Seconds", 2),
        s: aa("Seconds", 1),
        sss: aa("Milliseconds", 3),
        EEEE: Lb("Day"),
        EEE: Lb("Day", !0),
        a: function (a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
        },
        Z: function (a, b, d) {
            a = -1 * d;
            return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2))
        },
        ww: Jd(2),
        w: Jd(1),
        G: mc,
        GG: mc,
        GGG: mc,
        GGGG: function (a, b) {
            return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
        }
    }, xg = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, wg = /^\-?\d+$/;
    Cd.$inject = ["$locale"];
    var rg = ba(G), sg = ba(ub);
    Ed.$inject = ["$parse"];
    var oe = ba({
        restrict: "E", compile: function (a, b) {
            if (!b.href && !b.xlinkHref)return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var e = "[object SVGAnimatedString]" === ga.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(e) || a.preventDefault()
                    })
                }
            }
        }
    }), vb = {};
    n(Db, function (a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function (a) {
                e.$set(b, !!a)
            })
        }

        if ("multiple" != a) {
            var c = va("ng-" + b), e = d;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[c] && d(a, b,
                    e)
            });
            vb[c] = function () {
                return {restrict: "A", priority: 100, link: e}
            }
        }
    });
    n(cd, function (a, b) {
        vb[b] = function () {
            return {
                priority: 100, link: function (a, c, e) {
                    if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Ag))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(e[b], function (a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    });
    n(["src", "srcset", "href"], function (a) {
        var b = va("ng-" + a);
        vb[b] = function () {
            return {
                priority: 99, link: function (d, c, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === ga.call(c.prop("href")) &&
                    (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
                    e.$observe(b, function (b) {
                        b ? (e.$set(g, b), xa && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Mb = {
        $addControl: B, $$renameControl: function (a, b) {
            a.$name = b
        }, $removeControl: B, $setValidity: B, $setDirty: B, $setPristine: B, $setSubmitted: B
    };
    Kd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Sd = function (a) {
        return ["$timeout", "$parse", function (b, d) {
            function c(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || B
            }

            return {
                name: "form", restrict: a ?
                    "EAC" : "E", require: ["form", "^^?form"], controller: Kd, compile: function (d, f) {
                    d.addClass(Ya).addClass(ob);
                    var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (a, d, e, f) {
                            var n = f[0];
                            if (!("action" in e)) {
                                var s = function (b) {
                                    a.$apply(function () {
                                        n.$commitViewValue();
                                        n.$setSubmitted()
                                    });
                                    b.preventDefault()
                                };
                                d[0].addEventListener("submit", s, !1);
                                d.on("$destroy", function () {
                                    b(function () {
                                        d[0].removeEventListener("submit", s, !1)
                                    }, 0, !1)
                                })
                            }
                            (f[1] || n.$$parentForm).$addControl(n);
                            var q = g ? c(n.$name) : B;
                            g && (q(a, n), e.$observe(g,
                                function (b) {
                                    n.$name !== b && (q(a, v), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n))
                                }));
                            d.on("$destroy", function () {
                                n.$$parentForm.$removeControl(n);
                                q(a, v);
                                T(n, Mb)
                            })
                        }
                    }
                }
            }
        }]
    }, pe = Sd(), Ce = Sd(!0), zg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Ig = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Jg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Kg =
        /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Td = /^(\d{4})-(\d{2})-(\d{2})$/, Ud = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, pc = /^(\d{4})-W(\d\d)$/, Vd = /^(\d{4})-(\d\d)$/, Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Xd = {
        text: function (a, b, d, c, e, f) {
            lb(a, b, d, c, e, f);
            nc(c)
        },
        date: mb("date", Td, Ob(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": mb("datetimelocal", Ud, Ob(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: mb("time", Wd, Ob(Wd, ["HH", "mm", "ss",
            "sss"]), "HH:mm:ss.sss"),
        week: mb("week", pc, function (a, b) {
            if (V(a))return a;
            if (F(a)) {
                pc.lastIndex = 0;
                var d = pc.exec(a);
                if (d) {
                    var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Id(c), e = 7 * (e - 1);
                    b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                    return new Date(c, 0, k.getDate() + e, d, f, g, h)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: mb("month", Vd, Ob(Vd, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (a, b, d, c, e, f) {
            Md(a, b, d, c);
            lb(a, b, d, c, e, f);
            c.$$parserName = "number";
            c.$parsers.push(function (a) {
                return c.$isEmpty(a) ? null :
                    Kg.test(a) ? parseFloat(a) : v
            });
            c.$formatters.push(function (a) {
                if (!c.$isEmpty(a)) {
                    if (!N(a))throw nb("numfmt", a);
                    a = a.toString()
                }
                return a
            });
            if (y(d.min) || d.ngMin) {
                var g;
                c.$validators.min = function (a) {
                    return c.$isEmpty(a) || x(g) || a >= g
                };
                d.$observe("min", function (a) {
                    y(a) && !N(a) && (a = parseFloat(a, 10));
                    g = N(a) && !isNaN(a) ? a : v;
                    c.$validate()
                })
            }
            if (y(d.max) || d.ngMax) {
                var h;
                c.$validators.max = function (a) {
                    return c.$isEmpty(a) || x(h) || a <= h
                };
                d.$observe("max", function (a) {
                    y(a) && !N(a) && (a = parseFloat(a, 10));
                    h = N(a) && !isNaN(a) ?
                        a : v;
                    c.$validate()
                })
            }
        },
        url: function (a, b, d, c, e, f) {
            lb(a, b, d, c, e, f);
            nc(c);
            c.$$parserName = "url";
            c.$validators.url = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Ig.test(d)
            }
        },
        email: function (a, b, d, c, e, f) {
            lb(a, b, d, c, e, f);
            nc(c);
            c.$$parserName = "email";
            c.$validators.email = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Jg.test(d)
            }
        },
        radio: function (a, b, d, c) {
            x(d.name) && b.attr("name", ++pb);
            b.on("click", function (a) {
                b[0].checked && c.$setViewValue(d.value, a && a.type)
            });
            c.$render = function () {
                b[0].checked = d.value == c.$viewValue
            };
            d.$observe("value", c.$render)
        },
        checkbox: function (a, b, d, c, e, f, g, h) {
            var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0), l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function (a) {
                c.$setViewValue(b[0].checked, a && a.type)
            });
            c.$render = function () {
                b[0].checked = c.$viewValue
            };
            c.$isEmpty = function (a) {
                return !1 === a
            };
            c.$formatters.push(function (a) {
                return oa(a, k)
            });
            c.$parsers.push(function (a) {
                return a ? k : l
            })
        },
        hidden: B,
        button: B,
        submit: B,
        reset: B,
        file: B
    }, Fc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d,
                                                                    c) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (e, f, g, h) {
                    h[0] && (Xd[G(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c)
                }
            }
        }
    }], Lg = /^(true|false|\d+)$/, Ue = function () {
        return {
            restrict: "A", priority: 100, compile: function (a, b) {
                return Lg.test(b.ngValue) ? function (a, b, e) {
                    e.$set("value", a.$eval(e.ngValue))
                } : function (a, b, e) {
                    a.$watch(e.ngValue, function (a) {
                        e.$set("value", a)
                    })
                }
            }
        }
    }, ue = ["$compile", function (a) {
        return {
            restrict: "AC", compile: function (b) {
                a.$$addBindingClass(b);
                return function (b, c, e) {
                    a.$$addBindingInfo(c,
                        e.ngBind);
                    c = c[0];
                    b.$watch(e.ngBind, function (a) {
                        c.textContent = x(a) ? "" : a
                    })
                }
            }
        }
    }], we = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function (d) {
                b.$$addBindingClass(d);
                return function (c, d, f) {
                    c = a(d.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, c.expressions);
                    d = d[0];
                    f.$observe("ngBindTemplate", function (a) {
                        d.textContent = x(a) ? "" : a
                    })
                }
            }
        }
    }], ve = ["$sce", "$parse", "$compile", function (a, b, d) {
        return {
            restrict: "A", compile: function (c, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (a) {
                    return (a || "").toString()
                });
                d.$$addBindingClass(c);
                return function (b, c, e) {
                    d.$$addBindingInfo(c, e.ngBindHtml);
                    b.$watch(g, function () {
                        c.html(a.getTrustedHtml(f(b)) || "")
                    })
                }
            }
        }
    }], Te = ba({
        restrict: "A", require: "ngModel", link: function (a, b, d, c) {
            c.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }
    }), xe = oc("", !0), ze = oc("Odd", 0), ye = oc("Even", 1), Ae = Ma({
        compile: function (a, b) {
            b.$set("ngCloak", v);
            a.removeClass("ng-cloak")
        }
    }), Be = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], Kc = {}, Mg = {blur: !0, focus: !0};
    n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function (a) {
            var b = va("ng-" + a);
            Kc[b] = ["$parse", "$rootScope", function (d, c) {
                return {
                    restrict: "A", compile: function (e, f) {
                        var g = d(f[b], null, !0);
                        return function (b, d) {
                            d.on(a, function (d) {
                                var e = function () {
                                    g(b, {$event: d})
                                };
                                Mg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                            })
                        }
                    }
                }
            }]
        });
    var Ee = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (b, d, c, e, f) {
                    var g, h, k;
                    b.$watch(c.ngIf, function (b) {
                        b ? h || f(function (b, e) {
                            h = e;
                            b[b.length++] = W.createComment(" end ngIf: " +
                                c.ngIf + " ");
                            g = {clone: b};
                            a.enter(b, d.parent(), d)
                        }) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k = tb(g.clone), a.leave(k).then(function () {
                            k = null
                        }), g = null))
                    })
                }
            }
        }], Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ia.noop,
                compile: function (c, e) {
                    var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                    return function (c, e, m, n, s) {
                        var q = 0, v, t, p, w = function () {
                            t && (t.remove(), t = null);
                            v && (v.$destroy(), v = null);
                            p &&
                            (d.leave(p).then(function () {
                                t = null
                            }), t = p, p = null)
                        };
                        c.$watch(f, function (f) {
                            var m = function () {
                                !y(h) || h && !c.$eval(h) || b()
                            }, z = ++q;
                            f ? (a(f, !0).then(function (a) {
                                if (!c.$$destroyed && z === q) {
                                    var b = c.$new();
                                    n.template = a;
                                    a = s(b, function (a) {
                                        w();
                                        d.enter(a, null, e).then(m)
                                    });
                                    v = b;
                                    p = a;
                                    v.$emit("$includeContentLoaded", f);
                                    c.$eval(g)
                                }
                            }, function () {
                                c.$$destroyed || z !== q || (w(), c.$emit("$includeContentError", f))
                            }), c.$emit("$includeContentRequested", f)) : (w(), n.template = null)
                        })
                    }
                }
            }
        }], We = ["$compile", function (a) {
            return {
                restrict: "ECA",
                priority: -400, require: "ngInclude", link: function (b, d, c, e) {
                    ga.call(d[0]).match(/SVG/) ? (d.empty(), a(Nc(e.template, W).childNodes)(b, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b))
                }
            }
        }], Ge = Ma({
            priority: 450, compile: function () {
                return {
                    pre: function (a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }), Se = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, c) {
                    var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? X(e) : e;
                    c.$parsers.push(function (a) {
                        if (!x(a)) {
                            var b =
                                [];
                            a && n(a.split(g), function (a) {
                                a && b.push(f ? X(a) : a)
                            });
                            return b
                        }
                    });
                    c.$formatters.push(function (a) {
                        return L(a) ? a.join(e) : v
                    });
                    c.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, ob = "ng-valid", Od = "ng-invalid", Ya = "ng-pristine", Nb = "ng-dirty", Qd = "ng-pending", nb = H("ngModel"), Ng = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = v;
            this.$validators = {};
            this.$asyncValidators =
            {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = v;
            this.$name = l(d.name || "", !1)(a);
            this.$$parentForm = Mb;
            var m = e(d.ngModel), r = m.assign, q = m, I = r, K = null, t, p = this;
            this.$$setOptions = function (a) {
                if ((p.$options = a) && a.getterSetter) {
                    var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
                    q = function (a) {
                        var c = m(a);
                        D(c) && (c = b(a));
                        return c
                    };
                    I = function (a,
                                  b) {
                        D(m(a)) ? f(a, {$$$p: p.$modelValue}) : r(a, p.$modelValue)
                    }
                } else if (!m.assign)throw nb("nonassign", d.ngModel, ta(c));
            };
            this.$render = B;
            this.$isEmpty = function (a) {
                return x(a) || "" === a || null === a || a !== a
            };
            this.$$updateEmptyClasses = function (a) {
                p.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"))
            };
            var w = 0;
            Ld({
                ctrl: this, $element: c, set: function (a, b) {
                    a[b] = !0
                }, unset: function (a, b) {
                    delete a[b]
                }, $animate: f
            });
            this.$setPristine = function () {
                p.$dirty = !1;
                p.$pristine = !0;
                f.removeClass(c, Nb);
                f.addClass(c, Ya)
            };
            this.$setDirty = function () {
                p.$dirty = !0;
                p.$pristine = !1;
                f.removeClass(c, Ya);
                f.addClass(c, Nb);
                p.$$parentForm.$setDirty()
            };
            this.$setUntouched = function () {
                p.$touched = !1;
                p.$untouched = !0;
                f.setClass(c, "ng-untouched", "ng-touched")
            };
            this.$setTouched = function () {
                p.$touched = !0;
                p.$untouched = !1;
                f.setClass(c, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function () {
                g.cancel(K);
                p.$viewValue = p.$$lastCommittedViewValue;
                p.$render()
            };
            this.$validate = function () {
                if (!N(p.$modelValue) || !isNaN(p.$modelValue)) {
                    var a = p.$$rawModelValue, b = p.$valid, c = p.$modelValue, d = p.$options && p.$options.allowInvalid;
                    p.$$runValidators(a, p.$$lastCommittedViewValue, function (e) {
                        d || b === e || (p.$modelValue = e ? a : v, p.$modelValue !== c && p.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function (a, b, c) {
                function d() {
                    var c = !0;
                    n(p.$validators, function (d, e) {
                        var g = d(a, b);
                        c = c && g;
                        f(e, g)
                    });
                    return c ? !0 : (n(p.$asyncValidators, function (a, b) {
                        f(b, null)
                    }), !1)
                }

                function e() {
                    var c = [], d = !0;
                    n(p.$asyncValidators, function (e, g) {
                        var h = e(a,
                            b);
                        if (!h || !D(h.then))throw nb("nopromise", h);
                        f(g, v);
                        c.push(h.then(function () {
                            f(g, !0)
                        }, function (a) {
                            d = !1;
                            f(g, !1)
                        }))
                    });
                    c.length ? k.all(c).then(function () {
                        g(d)
                    }, B) : g(!0)
                }

                function f(a, b) {
                    h === w && p.$setValidity(a, b)
                }

                function g(a) {
                    h === w && c(a)
                }

                w++;
                var h = w;
                (function () {
                    var a = p.$$parserName || "parse";
                    if (x(t))f(a, null); else return t || (n(p.$validators, function (a, b) {
                        f(b, null)
                    }), n(p.$asyncValidators, function (a, b) {
                        f(b, null)
                    })), f(a, t), t;
                    return !0
                })() ? d() ? e() : g(!1) : g(!1)
            };
            this.$commitViewValue = function () {
                var a = p.$viewValue;
                g.cancel(K);
                if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators)p.$$updateEmptyClasses(a), p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function () {
                var b = p.$$lastCommittedViewValue;
                if (t = x(b) ? v : !0)for (var c = 0; c < p.$parsers.length; c++)if (b = p.$parsers[c](b), x(b)) {
                    t = !1;
                    break
                }
                N(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = q(a));
                var d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                p.$$rawModelValue = b;
                e && (p.$modelValue =
                    b, p.$modelValue !== d && p.$$writeModelToScope());
                p.$$runValidators(b, p.$$lastCommittedViewValue, function (a) {
                    e || (p.$modelValue = a ? b : v, p.$modelValue !== d && p.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function () {
                I(a, p.$modelValue);
                n(p.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            };
            this.$setViewValue = function (a, b) {
                p.$viewValue = a;
                p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b)
            };
            this.$$debounceViewValueCommit = function (b) {
                var c = 0, d = p.$options;
                d && y(d.debounce) && (d = d.debounce,
                    N(d) ? c = d : N(d[b]) ? c = d[b] : N(d["default"]) && (c = d["default"]));
                g.cancel(K);
                c ? K = g(function () {
                    p.$commitViewValue()
                }, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function () {
                    p.$commitViewValue()
                })
            };
            a.$watch(function () {
                var b = q(a);
                if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
                    p.$modelValue = p.$$rawModelValue = b;
                    t = v;
                    for (var c = p.$formatters, d = c.length, e = b; d--;)e = c[d](e);
                    p.$viewValue !== e && (p.$$updateEmptyClasses(e), p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), p.$$runValidators(b, e, B))
                }
                return b
            })
        }],
        Re = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Ng,
                priority: 1,
                compile: function (b) {
                    b.addClass(Ya).addClass("ng-untouched").addClass(ob);
                    return {
                        pre: function (a, b, e, f) {
                            var g = f[0];
                            b = f[1] || g.$$parentForm;
                            g.$$setOptions(f[2] && f[2].$options);
                            b.$addControl(g);
                            e.$observe("name", function (a) {
                                g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                            });
                            a.$on("$destroy", function () {
                                g.$$parentForm.$removeControl(g)
                            })
                        }, post: function (b, c, e, f) {
                            var g = f[0];
                            if (g.$options &&
                                g.$options.updateOn)c.on(g.$options.updateOn, function (a) {
                                g.$$debounceViewValueCommit(a && a.type)
                            });
                            c.on("blur", function (c) {
                                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                            })
                        }
                    }
                }
            }
        }], Og = /(\s+|^)default(\s+|$)/, Ve = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
                    var d = this;
                    this.$options = Oa(a.$eval(b.ngModelOptions));
                    y(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = X(this.$options.updateOn.replace(Og, function () {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, He = Ma({
            terminal: !0,
            priority: 1E3
        }), Pg = H("ngOptions"), Qg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Pe = ["$compile", "$parse", function (a, b) {
            function d(a, c, d) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue = b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }

                function l(a) {
                    var b;
                    if (!q && Ca(a))b = a; else {
                        b = [];
                        for (var c in a)a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }

                var m = a.match(Qg);
                if (!m)throw Pg("iexp", a, ta(c));
                var n = m[5] || m[7], q = m[6];
                a = / as /.test(m[0]) && m[1];
                var v = m[9];
                c = b(m[2] ? m[1] : n);
                var y = a && b(a) || c, t = v && b(v), p = v ? function (a, b) {
                    return t(d, b)
                } : function (a) {
                    return Fa(a)
                }, w = function (a, b) {
                    return p(a, B(a, b))
                }, u = b(m[2] || m[1]), x = b(m[3] || ""), z = b(m[4] || ""), A = b(m[8]), C = {}, B = q ? function (a, b) {
                    C[q] = b;
                    C[n] = a;
                    return C
                } : function (a) {
                    C[n] = a;
                    return C
                };
                return {
                    trackBy: v,
                    getTrackByValue: w, getWatchables: b(A, function (a) {
                        var b = [];
                        a = a || [];
                        for (var c = l(a), e = c.length, f = 0; f < e; f++) {
                            var g = a === c ? f : c[f], k = B(a[g], g), g = p(a[g], k);
                            b.push(g);
                            if (m[2] || m[1])g = u(d, k), b.push(g);
                            m[4] && (k = z(d, k), b.push(k))
                        }
                        return b
                    }), getOptions: function () {
                        for (var a = [], b = {}, c = A(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
                            var n = c === f ? m : f[m], r = B(c[n], n), q = y(d, r), n = p(q, r), s = u(d, r), t = x(d, r), r = z(d, r), q = new e(n, q, s, t, r);
                            a.push(q);
                            b[n] = q
                        }
                        return {
                            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
                                return b[w(a)]
                            },
                            getViewValueFromOption: function (a) {
                                return v ? ia.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            var c = W.createElement("option"), e = W.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = B
                    }, post: function (b, g, h, k) {
                        function l(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                            a.value !== b.value && (b.value = a.selectValue)
                        }

                        function m(a, b, c, d) {
                            b && G(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c,
                                b) : a.appendChild(c));
                            return c
                        }

                        function r(a) {
                            for (var b; a;)b = a.nextSibling, $b(a), a = b
                        }

                        function q(a) {
                            var b = w && w[0], c = A && A[0];
                            if (b || c)for (; a && (a === b || a === c || 8 === a.nodeType || "option" === ra(a) && "" === a.value);)a = a.nextSibling;
                            return a
                        }

                        function v() {
                            var a = D && x.readValue();
                            D = E.getOptions();
                            var b = {}, d = g[0].firstChild;
                            z && g.prepend(w);
                            d = q(d);
                            D.items.forEach(function (a) {
                                var f, h;
                                y(a.group) ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = {
                                    groupElement: f,
                                    currentOptionElement: f.firstChild
                                }),
                                    h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling)
                            });
                            Object.keys(b).forEach(function (a) {
                                r(b[a].currentOptionElement)
                            });
                            r(d);
                            t.$render();
                            if (!t.$isEmpty(a)) {
                                var f = x.readValue();
                                (E.trackBy || p ? oa(a, f) : a === f) || (t.$setViewValue(f), t.$render())
                            }
                        }

                        var x = k[0], t = k[1], p = h.multiple, w;
                        k = 0;
                        for (var u = g.children(), B = u.length; k < B; k++)if ("" === u[k].value) {
                            w = u.eq(k);
                            break
                        }
                        var z = !!w, A = C(c.cloneNode(!1));
                        A.val("?");
                        var D, E = d(h.ngOptions,
                            g, b);
                        p ? (t.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }, x.writeValue = function (a) {
                            D.items.forEach(function (a) {
                                a.element.selected = !1
                            });
                            a && a.forEach(function (a) {
                                (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                            })
                        }, x.readValue = function () {
                            var a = g.val() || [], b = [];
                            n(a, function (a) {
                                (a = D.selectValueMap[a]) && !a.disabled && b.push(D.getViewValueFromOption(a))
                            });
                            return b
                        }, E.trackBy && b.$watchCollection(function () {
                                if (L(t.$viewValue))return t.$viewValue.map(function (a) {
                                    return E.getTrackByValue(a)
                                })
                            },
                            function () {
                                t.$render()
                            })) : (x.writeValue = function (a) {
                            var b = D.getOptionFromViewValue(a);
                            b && !b.disabled ? g[0].value !== b.selectValue && (A.remove(), z || w.remove(), g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || z ? (A.remove(), z || g.prepend(w), g.val(""), w.prop("selected", !0), w.attr("selected", !0)) : (z || w.remove(), g.prepend(A), g.val("?"), A.prop("selected", !0), A.attr("selected", !0))
                        }, x.readValue = function () {
                            var a = D.selectValueMap[g.val()];
                            return a && !a.disabled ?
                                (z || w.remove(), A.remove(), D.getViewValueFromOption(a)) : null
                        }, E.trackBy && b.$watch(function () {
                            return E.getTrackByValue(t.$viewValue)
                        }, function () {
                            t.$render()
                        }));
                        z ? (w.remove(), a(w)(b), w.removeClass("ng-scope")) : w = C(c.cloneNode(!1));
                        v();
                        b.$watchCollection(E.getWatchables, v)
                    }
                }
            }
        }], Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
            var c = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
                link: function (f, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }

                    var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), r = h.offset || 0, q = f.$eval(m) || {}, v =
                    {}, y = b.startSymbol(), t = b.endSymbol(), p = y + l + "-" + r + t, w = ia.noop, u;
                    n(h, function (a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + G(c[2]), q[c] = g.attr(h.$attr[b]))
                    });
                    n(q, function (a, d) {
                        v[d] = b(a.replace(c, p))
                    });
                    f.$watch(l, function (b) {
                        var c = parseFloat(b), e = isNaN(c);
                        e || c in q || (c = a.pluralCat(c - r));
                        c === u || e && N(u) && isNaN(u) || (w(), e = v[c], x(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), w = B, k()) : w = f.$watch(e, k), u = c)
                    })
                }
            }
        }], Je = ["$parse", "$animate", function (a, b) {
            var d = H("ngRepeat"), c = function (a, b,
                                                 c, d, k, l, m) {
                a[c] = d;
                k && (a[k] = l);
                a.$index = b;
                a.$first = 0 === b;
                a.$last = b === m - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (b & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (e, f) {
                    var g = f.ngRepeat, h = W.createComment(" end ngRepeat: " + g + " "), k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k)throw d("iexp", g);
                    var l = k[1], m = k[2], r = k[3], q = k[4], k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k)throw d("iidexp", l);
                    var x = k[3] || k[1], y = k[2];
                    if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident", r);
                    var t, p, w, u, B = {$id: Fa};
                    q ? t = a(q) : (w = function (a, b) {
                        return Fa(b)
                    }, u = function (a) {
                        return a
                    });
                    return function (a, e, f, k, l) {
                        t && (p = function (b, c, d) {
                            y && (B[y] = b);
                            B[x] = c;
                            B.$index = d;
                            return t(a, B)
                        });
                        var q = Z();
                        a.$watchCollection(m, function (f) {
                            var k, m, s = e[0], t, B = Z(), D, E, H, F, L, G, N;
                            r && (a[r] = f);
                            if (Ca(f))L =
                                f, m = p || w; else for (N in m = p || u, L = [], f)sa.call(f, N) && "$" !== N.charAt(0) && L.push(N);
                            D = L.length;
                            N = Array(D);
                            for (k = 0; k < D; k++)if (E = f === L ? k : L[k], H = f[E], F = m(E, H, k), q[F])G = q[F], delete q[F], B[F] = G, N[k] = G; else {
                                if (B[F])throw n(N, function (a) {
                                    a && a.scope && (q[a.id] = a)
                                }), d("dupes", g, F, H);
                                N[k] = {id: F, scope: v, clone: v};
                                B[F] = !0
                            }
                            for (t in q) {
                                G = q[t];
                                F = tb(G.clone);
                                b.leave(F);
                                if (F[0].parentNode)for (k = 0, m = F.length; k < m; k++)F[k].$$NG_REMOVED = !0;
                                G.scope.$destroy()
                            }
                            for (k = 0; k < D; k++)if (E = f === L ? k : L[k], H = f[E], G = N[k], G.scope) {
                                t = s;
                                do t =
                                    t.nextSibling; while (t && t.$$NG_REMOVED);
                                G.clone[0] != t && b.move(tb(G.clone), null, C(s));
                                s = G.clone[G.clone.length - 1];
                                c(G.scope, k, x, H, y, E, D)
                            } else l(function (a, d) {
                                G.scope = d;
                                var e = h.cloneNode(!1);
                                a[a.length++] = e;
                                b.enter(a, null, C(s));
                                s = e;
                                G.clone = a;
                                B[G.id] = G;
                                c(G.scope, k, x, H, y, E, D)
                            });
                            q = B
                        })
                    }
                }
            }
        }], Ke = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], De = ["$animate", function (a) {
            return {
                restrict: "A",
                multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], Le = Ma(function (a, b, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && n(d, function (a, c) {
                    b.css(c, "")
                });
                a && b.css(a)
            }, !0)
        }), Me = ["$animate", function (a) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (b, d, c, e) {
                    var f = [], g = [], h = [], k = [], l = function (a, b) {
                        return function () {
                            a.splice(b, 1)
                        }
                    };
                    b.$watch(c.ngSwitch || c.on, function (b) {
                        var c,
                            d;
                        c = 0;
                        for (d = h.length; c < d; ++c)a.cancel(h[c]);
                        c = h.length = 0;
                        for (d = k.length; c < d; ++c) {
                            var q = tb(g[c].clone);
                            k[c].$destroy();
                            (h[c] = a.leave(q)).then(l(h, c))
                        }
                        g.length = 0;
                        k.length = 0;
                        (f = e.cases["!" + b] || e.cases["?"]) && n(f, function (b) {
                            b.transclude(function (c, d) {
                                k.push(d);
                                var e = b.element;
                                c[c.length++] = W.createComment(" end ngSwitchWhen: ");
                                g.push({clone: c});
                                a.enter(c, e.parent(), e)
                            })
                        })
                    })
                }
            }
        }], Ne = Ma({
            transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function (a, b, d, c, e) {
                c.cases["!" + d.ngSwitchWhen] =
                    c.cases["!" + d.ngSwitchWhen] || [];
                c.cases["!" + d.ngSwitchWhen].push({transclude: e, element: b})
            }
        }), Oe = Ma({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({transclude: e, element: b})
            }
        }), Rg = H("ngTransclude"), Qe = Ma({
            restrict: "EAC", link: function (a, b, d, c, e) {
                d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");
                if (!e)throw Rg("orphan", ta(b));
                e(function (a) {
                    a.length && (b.empty(), b.append(a))
                }, null, d.ngTransclude ||
                    d.ngTranscludeSlot)
            }
        }), qe = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, d) {
                    "text/ng-template" == d.type && a.put(d.id, b[0].text)
                }
            }
        }], Sg = {$setViewValue: B, $render: B}, Tg = ["$element", "$scope", "$attrs", function (a, b, d) {
            var c = this, e = new Ua;
            c.ngModelCtrl = Sg;
            c.unknownOption = C(W.createElement("option"));
            c.renderUnknownOption = function (b) {
                b = "? " + Fa(b) + " ?";
                c.unknownOption.val(b);
                a.prepend(c.unknownOption);
                a.val(b)
            };
            b.$on("$destroy", function () {
                c.renderUnknownOption = B
            });
            c.removeUnknownOption =
                function () {
                    c.unknownOption.parent() && c.unknownOption.remove()
                };
            c.readValue = function () {
                c.removeUnknownOption();
                return a.val()
            };
            c.writeValue = function (b) {
                c.hasOption(b) ? (c.removeUnknownOption(), a.val(b), "" === b && c.emptyOption.prop("selected", !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), a.val("")) : c.renderUnknownOption(b)
            };
            c.addOption = function (a, b) {
                if (8 !== b[0].nodeType) {
                    Ta(a, '"option value"');
                    "" === a && (c.emptyOption = b);
                    var d = e.get(a) || 0;
                    e.put(a, d + 1);
                    c.ngModelCtrl.$render();
                    b[0].hasAttribute("selected") &&
                    (b[0].selected = !0)
                }
            };
            c.removeOption = function (a) {
                var b = e.get(a);
                b && (1 === b ? (e.remove(a), "" === a && (c.emptyOption = v)) : e.put(a, b - 1))
            };
            c.hasOption = function (a) {
                return !!e.get(a)
            };
            c.registerOption = function (a, b, d, e, l) {
                if (e) {
                    var m;
                    d.$observe("value", function (a) {
                        y(m) && c.removeOption(m);
                        m = a;
                        c.addOption(a, b)
                    })
                } else l ? a.$watch(l, function (a, e) {
                    d.$set("value", a);
                    e !== a && c.removeOption(e);
                    c.addOption(a, b)
                }) : c.addOption(d.value, b);
                b.on("$destroy", function () {
                    c.removeOption(d.value);
                    c.ngModelCtrl.$render()
                })
            }
        }], re = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"], controller: Tg, priority: 1, link: {
                    pre: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            f.ngModelCtrl = e;
                            b.on("change", function () {
                                a.$apply(function () {
                                    e.$setViewValue(f.readValue())
                                })
                            });
                            if (d.multiple) {
                                f.readValue = function () {
                                    var a = [];
                                    n(b.find("option"), function (b) {
                                        b.selected && a.push(b.value)
                                    });
                                    return a
                                };
                                f.writeValue = function (a) {
                                    var c = new Ua(a);
                                    n(b.find("option"), function (a) {
                                        a.selected = y(c.get(a.value))
                                    })
                                };
                                var g, h = NaN;
                                a.$watch(function () {
                                    h !== e.$viewValue || oa(g, e.$viewValue) || (g =
                                        na(e.$viewValue), e.$render());
                                    h = e.$viewValue
                                });
                                e.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    }, post: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            e.$render = function () {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        }, te = ["$interpolate", function (a) {
            return {
                restrict: "E", priority: 100, compile: function (b, d) {
                    if (y(d.value))var c = a(d.value, !0); else {
                        var e = a(b.text(), !0);
                        e || d.$set("value", b.text())
                    }
                    return function (a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a,
                            b, d, c, e)
                    }
                }
            }
        }], se = ba({restrict: "E", terminal: !1}), Hc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    c && (d.required = !0, c.$validators.required = function (a, b) {
                        return !d.required || !c.$isEmpty(b)
                    }, d.$observe("required", function () {
                        c.$validate()
                    }))
                }
            }
        }, Gc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            F(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw H("ngPattern")("noregexp",
                                f, a, ta(b));
                            e = a || v;
                            c.$validate()
                        });
                        c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || x(e) || e.test(b)
                        }
                    }
                }
            }
        }, Jc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function (a) {
                            a = ca(a);
                            e = isNaN(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function (a, b) {
                            return 0 > e || c.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        }, Ic = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function (a) {
                            e = ca(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    O.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (je(), le(ia), ia.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }

        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            }, NUMBER_FORMATS: {
                CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\u00a4",
                    negSuf: "",
                    posPre: "\u00a4",
                    posSuf: ""
                }]
            }, id: "en-us", localeID: "en_US", pluralCat: function (a, c) {
                var e = a | 0, f = c;
                v === f && (f = Math.min(b(a), 3));
                Math.pow(10, f);
                return 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]), C(W).ready(function () {
        fe(W, Ac)
    }))
})(window, document);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
Core script to handle the entire theme and core functions
**/
var App = function () {

    // IE mode
    var isRTL = false;
    var isIE8 = false;
    var isIE9 = false;
    var isIE10 = false;

    var sidebarWidth = 215;
    var sidebarCollapsedWidth = 40;

    var responsiveHandlers = [];

    // theme layout color set
    var layoutColorCodes = {
        'blue': '#4b8df8',
        'red': '#e02222',
        'green': '#35aa47',
        'purple': '#852b99',
        'grey': '#555555',
        'light-grey': '#fafafa',
        'yellow': '#ffb848'
    };

    // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
    var _getViewPort = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        }
    };

    // initializes main settings
    var handleInit = function () {

        if ($('body').css('direction') === 'rtl') {
            isRTL = true;
        }

        isIE8 = !! navigator.userAgent.match(/MSIE 8.0/);
        isIE9 = !! navigator.userAgent.match(/MSIE 9.0/);
        isIE10 = !! navigator.userAgent.match(/MSIE 10.0/);

        if (isIE10) {
            jQuery('html').addClass('ie10'); // detect IE10 version
        }
        
        if (isIE10 || isIE9 || isIE8) {
            jQuery('html').addClass('ie'); // detect IE10 version
        }
    };

    // runs callback functions set by App.addResponsiveHandler().
    var runResponsiveHandlers = function () {
        // reinitialize other subscribed elements
        for (var i in responsiveHandlers) {
            var each = responsiveHandlers[i];
            each.call();
        }
    };

    // reinitialize the laypot on window resize
    var handleResponsive = function () {
        handleSidebarAndContentHeight();
        handleFixedSidebar();
        runResponsiveHandlers();
    };

    // initialize the layout on page load
    var handleResponsiveOnInit = function () {
        handleSidebarAndContentHeight();
    };

    // handle the layout reinitialization on window resize
    var handleResponsiveOnResize = function () {
        var resize;
        if (isIE8) {
            var currheight;
            $(window).resize(function () {
                if (currheight == document.documentElement.clientHeight) {
                    return; //quite event since only body resized not window.
                }
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function () {
                    handleResponsive();
                }, 50); // wait 50ms until window resize finishes.                
                currheight = document.documentElement.clientHeight; // store last body client height
            });
        } else {
            $(window).resize(function () {
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function () {
                    handleResponsive();
                }, 50); // wait 50ms until window resize finishes.
            });
        }
    };

    //* BEGIN:CORE HANDLERS *//
    // this function handles responsive layout on screen size resize or mobile device rotate.

    // Set proper height for sidebar and content. The content and sidebar height must be synced always.

    var handleSidebarAndContentHeight = function () {
        var content = $('.page-content');
        var sidebar = $('.page-sidebar');
        var body = $('body');
        var height;

        if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
            var available_height = this.getViewPort().height - $('.footer').outerHeight() - $('.header').outerHeight();
            if (content.height() < available_height) {
                content.attr('style', 'min-height:' + available_height + 'px');
            }
        } else {
            if (body.hasClass('page-sidebar-fixed')) {
                height = _calculateFixedSidebarViewportHeight();
                if (body.hasClass('page-footer-fixed') === false) {
                    height = height - $('.footer').outerHeight();
                }
            } else {
                var headerHeight = $('.header').outerHeight();
                var footerHeight = $('.footer').outerHeight();

                if (App.getViewPort().width < 992) {
                    height = App.getViewPort().height - headerHeight - footerHeight;
                } else {
                    height = sidebar.height() + 20;
                }

                if ((height + headerHeight + footerHeight) <= App.getViewPort().height) {
                    height = App.getViewPort().height - headerHeight - footerHeight;
                }
            }
            content.attr('style', 'min-height:' + height + 'px');
        }
    };

    // Handle sidebar menu
    var handleSidebarMenu = function () {
        jQuery('.page-sidebar').on('click', 'li > a', function (e) {
            var menu = $('.page-sidebar-menu');

            if ($(this).next().hasClass('sub-menu') == false) {
                if ($('.btn-navbar').hasClass('collapsed') == false) {
                    $('.btn-navbar').click();
                }
                return;
            }

            if ($(this).next().hasClass('sub-menu.always-open')) {
                return;
            }

            var parent = $(this).parent().parent();
            var the = $(this);

            parent.children('li.open, li.active').children('a').children('.arrow').removeClass('open');
            parent.children('li.open, li.active').children('.sub-menu').slideUp(200);
            parent.children('li.open').removeClass('open');

            var sub = jQuery(this).next();
            var slideOffeset = -200;
            var slideSpeed = 200;

            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                sub.slideUp(slideSpeed, function () {
                    if ($('body').hasClass('page-sidebar-closed') == false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
                    if ($('body').hasClass('page-sidebar-closed') == false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            }
            e.preventDefault();
        });

       // handle ajax links
        jQuery('.page-sidebar').on('click', ' li > a.ajaxify', function (e) {
            e.preventDefault();
            App.scrollTop();

            var url = $(this).attr("href");
            var menuContainer = jQuery('.page-sidebar ul');
            var pageContent = $('.page-content');
            var pageContentBody = $('.page-content .page-content-body');

            menuContainer.children('li.active').removeClass('active');
            menuContainer.children('arrow.open').removeClass('open');

            $(this).parents('li').each(function () {
                $(this).addClass('active');
                $(this).children('a > span.arrow').addClass('open');
            });
            $(this).parents('li').addClass('active');

            App.blockUI({target: pageContent});

            if (App.getViewPort().width < 992 && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
                $('.header .navbar-toggle').click();
            }

            var the = $(this);
            $.ajax({
                type: "GET",
                cache: false,
                url: url,
                dataType: "html",
                success: function (res) {
                    if (the.parents('li.open').size() === 0) {
                        $('.page-sidebar-menu > li.open > a').click();
                    }
                    App.unblockUI(pageContent);
                    pageContentBody.html(res);
                    App.fixContentHeight(); // fix content height
                    App.initAjax(); // initialize core stuff
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    pageContentBody.html('<h4>Could not load the requested content.</h4>');
                    App.unblockUI(pageContent);
                },
                async: false
            });
        });
    };

    // Helper function to calculate sidebar height for fixed sidebar layout.
    var _calculateFixedSidebarViewportHeight = function () {
        var sidebarHeight = App.getViewPort().height - $('.header').outerHeight();
        if ($('body').hasClass("page-footer-fixed")) {
            sidebarHeight = sidebarHeight - $('.footer').outerHeight();
        }

        return sidebarHeight;
    };

    // Handles fixed sidebar
    var handleFixedSidebar = function () {
        var menu = $('.page-sidebar-menu');

        if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before updating the height
            menu.slimScroll({
                destroy: true
            });
            menu.removeAttr('style');
            $('.page-sidebar').removeAttr('style');
        }

        if ($('.page-sidebar-fixed').size() === 0) {
            handleSidebarAndContentHeight();
            return;
        }

        var viewport = _getViewPort();
        if (viewport.width >= 992) {
            var sidebarHeight = _calculateFixedSidebarViewportHeight();

            menu.slimScroll({
                size: '7px',
                color: '#a1b2bd',
                opacity: .3,
                position: isRTL ? 'left' : 'right',
                height: sidebarHeight,
                allowPageScroll: false,
                disableFadeOut: false
            });
            handleSidebarAndContentHeight();
        }
    };

    // Handles the sidebar menu hover effect for fixed sidebar.
    var handleFixedSidebarHoverable = function () {
        if ($('body').hasClass('page-sidebar-fixed') === false) {
            return;
        }

        $('.page-sidebar').off('mouseenter').on('mouseenter', function () {
            var body = $('body');

            if ((body.hasClass('page-sidebar-closed') === false || body.hasClass('page-sidebar-fixed') === false) || $(this).hasClass('page-sidebar-hovering')) {
                return;
            }

            body.removeClass('page-sidebar-closed').addClass('page-sidebar-hover-on');

            if (body.hasClass("page-sidebar-reversed")) {
                $(this).width(sidebarWidth);
            } else {
                $(this).addClass('page-sidebar-hovering');
                $(this).animate({
                    width: sidebarWidth
                }, 400, '', function () {
                    $(this).removeClass('page-sidebar-hovering');
                });
            }
        });

        $('.page-sidebar').off('mouseleave').on('mouseleave', function () {
            var body = $('body');

            if ((body.hasClass('page-sidebar-hover-on') === false || body.hasClass('page-sidebar-fixed') === false) || $(this).hasClass('page-sidebar-hovering')) {
                return;
            }

            if (body.hasClass("page-sidebar-reversed")) {
                $('body').addClass('page-sidebar-closed').removeClass('page-sidebar-hover-on');
                $(this).width(sidebarCollapsedWidth);
            } else {
                $(this).addClass('page-sidebar-hovering');
                $(this).animate({
                    width: sidebarCollapsedWidth
                }, 400, '', function () {
                    $('body').addClass('page-sidebar-closed').removeClass('page-sidebar-hover-on');
                    $(this).removeClass('page-sidebar-hovering');
                });
            }
        });
    };

    // Handles sidebar toggler to close/hide the sidebar.
    var handleSidebarToggler = function () {
        var viewport = _getViewPort();
        
        // handle sidebar show/hide
        $('.page-sidebar').on('click', '.sidebar-toggler', function (e) {
            var body = $('body');
            var sidebar = $('.page-sidebar');

            if ((body.hasClass("page-sidebar-hover-on") && body.hasClass('page-sidebar-fixed')) || sidebar.hasClass('page-sidebar-hovering')) {
                body.removeClass('page-sidebar-hover-on');
                sidebar.css('width', '').hide().show();
                handleSidebarAndContentHeight(); //fix content & sidebar height
                e.stopPropagation();
                runResponsiveHandlers();
                return;
            }

            if (body.hasClass("page-sidebar-closed")) {
                body.removeClass("page-sidebar-closed");
                if (body.hasClass('page-sidebar-fixed')) {
                    sidebar.css('width', '');
                }
            } else {
                body.addClass("page-sidebar-closed");
            }
            handleSidebarAndContentHeight(); //fix content & sidebar height
            runResponsiveHandlers();
        });
    };

    var handleQuickSearch = function() {

        // handle search for header search input on enter press
        $('.search-form-header').on('keypress', 'input.form-control', function (e) {
            if (e.which == 13) {
                $('.search-form-header').submit();
                return false;
            }
        });

        // handle search for header search input on icon click
        $('.search-form-header').on('click', '.icon-search', function (e) {
            $('.search-form-header').submit();
            return false;
        });

        // handle search for sidebar search input on enter press
        $('.search-form-sidebar').on('keypress', 'input.form-control', function (e) {
            if (e.which == 13) {
                $('.search-form-sidebar').submit();
                return false;
            }
        });

        // handle search for sidebar search input on icon click
        $('.search-form-sidebar').on('click', '.icon-search', function (e) {
            $('.search-form-sidebar').submit();
            return false;
        });
    };

    // Handles the go to top button at the footer
    var handleGoTop = function () {
        /* set variables locally for increased performance */
        jQuery('.footer').on('click', '.go-top', function (e) {
            App.scrollTo();
            e.preventDefault();
        });
    };

    // Handles portlet tools & actions
    var handlePortletTools = function () {
        jQuery('body').on('click', '.portlet > .portlet-title > .tools > a.remove', function (e) {
            e.preventDefault();
            jQuery(this).closest(".portlet").remove();
        });

        jQuery('body').on('click', '.portlet > .portlet-title > .tools > a.reload', function (e) {
            e.preventDefault();
            var el = jQuery(this).closest(".portlet").children(".portlet-body");
            App.blockUI({target: el});
            window.setTimeout(function () {
                App.unblockUI(el);
            }, 1000);
        });

        jQuery('body').on('click', '.portlet > .portlet-title > .tools > .collapse, .portlet .portlet-title > .tools > .expand', function (e) {
            e.preventDefault();
            var el = jQuery(this).closest(".portlet").children(".portlet-body");
            if (jQuery(this).hasClass("collapse")) {
                jQuery(this).removeClass("collapse").addClass("expand");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("expand").addClass("collapse");
                el.slideDown(200);
            }
        });
    };

    // Handles custom checkboxes & radios using jQuery Uniform plugin
    var handleUniform = function () {
        if (!jQuery().uniform) {
            return;
        }
        var test = $("input[type=checkbox]:not(.toggle, .make-switch), input[type=radio]:not(.toggle, .star, .make-switch)");
        if (test.size() > 0) {
            test.each(function () {
                if ($(this).parents(".checker").size() == 0) {
                    $(this).show();
                    $(this).uniform();
                }
            });
        }
    };

    var handleBootstrapSwitch = function () {
        if (!$().bootstrapSwitch) {
            return;
        }
        $('.make-switch').bootstrapSwitch();
    };

    // Handles Bootstrap Accordions.
    var handleAccordions = function () {
        var lastClicked;
        //add scrollable class name if you need scrollable panes
        jQuery('body').on('click', '.accordion.scrollable .accordion-toggle', function () {
            lastClicked = jQuery(this);
        }); //move to faq section

        jQuery('body').on('show.bs.collapse', '.accordion.scrollable', function () {
            jQuery('html,body').animate({
                scrollTop: lastClicked.offset().top - 150
            }, 'slow');
        });
    };

    // Handles Bootstrap Tabs.
    var handleTabs = function () {
        // fix content height on tab click
        $('body').on('shown.bs.tab', '.nav.nav-tabs', function () {
            handleSidebarAndContentHeight();
        });

        //activate tab if tab id provided in the URL
        if (location.hash) {
            var tabid = location.hash.substr(1);
            $('a[href="#' + tabid + '"]').parents('.tab-pane:hidden').each(function(){
                var tabid = $(this).attr("id");
                $('a[href="#' + tabid + '"]').click();    
            });            
            $('a[href="#' + tabid + '"]').click();
        }
    };

    // Handles Bootstrap Modals.
    var handleModals = function () {
        // fix stackable modal issue: when 2 or more modals opened, closing one of modal will remove .modal-open class. 
        $('body').on('hide.bs.modal', function () {
           if ($('.modal:visible').size() > 1 && $('html').hasClass('modal-open') == false) {
              $('html').addClass('modal-open');
           } else if ($('.modal:visible').size() <= 1) {
              $('html').removeClass('modal-open');
           }
        });
            
        $('body').on('show.bs.modal', '.modal', function () {
            if ($(this).hasClass("modal-scroll")) {
                $('body').addClass("modal-open-noscroll");
            } 
        });

        $('body').on('hide.bs.modal', '.modal', function () {
            $('body').removeClass("modal-open-noscroll");
        });
    };

    // Handles Bootstrap Tooltips.
    var handleTooltips = function () {
       jQuery('.tooltips').tooltip();
    };

    // Handles Bootstrap Dropdowns
    var handleDropdowns = function () {
        /*
          For touch supported devices disable the 
          hoverable dropdowns - data-hover="dropdown"  
        */
        if (App.isTouchDevice()) {
            $('[data-hover="dropdown"]').each(function(){
                $(this).parent().off("hover");
                $(this).off("hover");
            });
        }
        /*
          Hold dropdown on click  
        */
        $('body').on('click', '.dropdown-menu.hold-on-click', function (e) {
            e.stopPropagation();
        })
    };

    // Handle Hower Dropdowns
    var handleDropdownHover = function () {
        $('[data-hover="dropdown"]').dropdownHover();
    };

    // Handle Closable Alerts
    var handleAlerts = function () {
        $('body').on('click', '[data-close="alert"]', function(e){
            $(this).parent('.alert').hide();
            e.preventDefault();
        });
    };

    // Handles Bootstrap Popovers

    // last popep popover
    var lastPopedPopover;

    var handlePopovers = function () {
        jQuery('.popovers').popover();

        // close last poped popover

        $(document).on('click.bs.popover.data-api', function (e) {
            if (lastPopedPopover) {
                lastPopedPopover.popover('hide');
            }
        });
    };

    // Handles scrollable contents using jQuery SlimScroll plugin.
    var handleScrollers = function () {
        $('.scroller').each(function () {
            var height;
            if ($(this).attr("data-height")) {
                height = $(this).attr("data-height");
            } else {
                height = $(this).css('height');
            }
            $(this).slimScroll({
                size: '7px',
                color: ($(this).attr("data-handle-color")  ? $(this).attr("data-handle-color") : '#a1b2bd'),
                railColor: ($(this).attr("data-rail-color")  ? $(this).attr("data-rail-color") : '#333'),
                position: isRTL ? 'left' : 'right',
                height: height,
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });
        });
    };

    // Handles Image Preview using jQuery Fancybox plugin
    var handleFancybox = function () {
        if (!jQuery.fancybox) {
            return;
        }

        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
        }
    };

    // Fix input placeholder issue for IE8 and IE9
    var handleFixInputPlaceholderForIE = function () {
        //fix html5 placeholder attribute for ie7 & ie8
        if (isIE8 || isIE9) { // ie8 & ie9
            // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
            jQuery('input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)').each(function () {

                var input = jQuery(this);

                if (input.val() == '' && input.attr("placeholder") != '') {
                    input.addClass("placeholder").val(input.attr('placeholder'));
                }

                input.focus(function () {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                input.blur(function () {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    };

    // Handle Select2 Dropdowns
    var handleSelect2 = function() {
        if (jQuery().select2) {
            $('.select2me').select2({
                placeholder: "Select",
                allowClear: true
            });
        }
    };

    // Handle Theme Settings
    var handleTheme = function () {

        var panel = $('.theme-panel');

        if ($('body').hasClass('page-boxed') == false) {
            $('.layout-option', panel).val("fluid");
        }

        $('.sidebar-option', panel).val("default");
        $('.header-option', panel).val("fixed");
        $('.footer-option', panel).val("default");
        if ( $('.sidebar-pos-option').attr("disabled") === false) {
            $('.sidebar-pos-option', panel).val(App.isRTL() ? 'right' : 'left');
        }
        
        //handle theme layout
        var resetLayout = function () {
            $("body").
            removeClass("page-boxed").
            removeClass("page-footer-fixed").
            removeClass("page-sidebar-fixed").
            removeClass("page-header-fixed").
            removeClass("page-sidebar-reversed");

            $('.header > .header-inner').removeClass("container");

            if ($('.page-container').parent(".container").size() === 1) {
                $('.page-container').insertAfter('body > .clearfix');
            }

            if ($('.footer > .container').size() === 1) {
                $('.footer').html($('.footer > .container').html());
            } else if ($('.footer').parent(".container").size() === 1) {
                $('.footer').insertAfter('.page-container');
            }

            $('body > .container').remove();
        };

        var lastSelectedLayout = '';

        var setLayout = function () {

            var layoutOption = $('.layout-option', panel).val();
            var sidebarOption = $('.sidebar-option', panel).val();
            var headerOption = $('.header-option', panel).val();
            var footerOption = $('.footer-option', panel).val();
            var sidebarPosOption = $('.sidebar-pos-option', panel).val();


            if (sidebarOption == "fixed" && headerOption == "default") {
                alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
                $('.header-option', panel).val("fixed");
                $('.sidebar-option', panel).val("fixed");
                sidebarOption = 'fixed';
                headerOption = 'fixed';
            }

            resetLayout(); // reset layout to default state

            if (layoutOption === "boxed") {
                $("body").addClass("page-boxed");

                // set header
                $('.header > .header-inner').addClass("container");
                var cont = $('body > .clearfix').after('<div class="container"></div>');

                // set content
                $('.page-container').appendTo('body > .container');

                // set footer
                if (footerOption === 'fixed') {
                    $('.footer').html('<div class="container">' + $('.footer').html() + '</div>');
                } else {
                    $('.footer').appendTo('body > .container');
                }
            }

            if (lastSelectedLayout != layoutOption) {
                //layout changed, run responsive handler:
                runResponsiveHandlers();
            }
            lastSelectedLayout = layoutOption;

            //header
            if (headerOption === 'fixed') {
                $("body").addClass("page-header-fixed");
                $(".header").removeClass("navbar-static-top").addClass("navbar-fixed-top");
            } else {
                $("body").removeClass("page-header-fixed");
                $(".header").removeClass("navbar-fixed-top").addClass("navbar-static-top");
            }

            //sidebar
            if (sidebarOption === 'fixed') {
                $("body").addClass("page-sidebar-fixed");
            } else {
                $("body").removeClass("page-sidebar-fixed");
            }

            //footer 
            if (footerOption === 'fixed') {
                $("body").addClass("page-footer-fixed");
            } else {
                $("body").removeClass("page-footer-fixed");
            }

            //sidebar position
            if (App.isRTL()) {
                if (sidebarPosOption === 'left') {
                    $("body").addClass("page-sidebar-reversed");
                } else {
                    $("body").removeClass("page-sidebar-reversed");
                }
            } else {
                if (sidebarPosOption === 'right') {
                    $("body").addClass("page-sidebar-reversed");
                } else {
                    $("body").removeClass("page-sidebar-reversed");
                }
            }

            handleSidebarAndContentHeight(); // fix content height            
            handleFixedSidebar(); // reinitialize fixed sidebar
            handleFixedSidebarHoverable(); // reinitialize fixed sidebar hover effect
        };

        // handle theme colors
        var setColor = function (color) {
            var color_ = (App.isRTL() ? color + '-rtl' : color);
            $('#style_color').attr("href", "assets/css/themes/" + color_ + ".css");
        };

        $('.toggler', panel).click(function () {
            $(this).toggleClass("open");
            $('.theme-panel > .theme-options').toggle();            
        });

        $('.theme-colors > ul > li', panel).click(function () {
            var color = $(this).attr("data-style");
            setColor(color);
            $('ul > li', panel).removeClass("current");
            $(this).addClass("current");
        });

        $('.layout-option, .header-option, .sidebar-option, .footer-option, .sidebar-pos-option', panel).change(setLayout);
    };
    //* END:CORE HANDLERS *//

    return {

        //main function to initiate the theme
        init: function () {

            //IMPORTANT!!!: Do not modify the core handlers call order.

            //core handlers
            handleInit(); // initialize core variables
            handleResponsiveOnResize(); // set and handle responsive    
            handleUniform(); // hanfle custom radio & checkboxes
            handleScrollers(); // handles slim scrolling contents 
            handleResponsiveOnInit(); // handler responsive elements on page load

            //layout handlers
            handleFixedSidebar(); // handles fixed sidebar menu
            handleFixedSidebarHoverable(); // handles fixed sidebar on hover effect 
            handleSidebarMenu(); // handles main menu
            handleQuickSearch(); // handles quick search
            handleSidebarToggler(); // handles sidebar hide/show            
            handleFixInputPlaceholderForIE(); // fixes/enables html5 placeholder attribute for IE9, IE8
            handleGoTop(); //handles scroll to top functionality in the footer
            handleTheme(); // handles style customer tool

            //ui component handlers
            handleFancybox(); // handle fancy box
            handleSelect2(); // handle custom Select2 dropdowns
            handlePortletTools(); // handles portlet action bar functionality(refresh, configure, toggle, remove)
            handleDropdowns(); // handle dropdowns
            handleAlerts(); // handle alerts
            handleTabs(); // handle tabs
            handleTooltips(); // handle bootstrap tooltips
            handlePopovers(); // handles bootstrap popovers
            handleAccordions(); //handles accordions 
            handleModals(); // handle modals
            handleBootstrapSwitch(); // handles bootstrap switch plugin  
        },

        //main function to initiate core javascript after ajax complete
        initAjax: function () {
            handleSelect2(); // handle custom Select2 dropdowns
            handleDropdowns(); // handle dropdowns
            handleTooltips(); // handle bootstrap tooltips
            handlePopovers(); // handles bootstrap popovers
            handleAccordions(); //handles accordions 
            handleUniform(); // hanfle custom radio & checkboxes     
            handleDropdownHover(); // handles dropdown hover     
            handleBootstrapSwitch(); // handles bootstrap switch plugin  
        },

        //public function to fix the sidebar and content height accordingly
        fixContentHeight: function () {
            handleSidebarAndContentHeight();
        },

        //public function to remember last opened popover that needs to be closed on click
        setLastPopedPopover: function (el) {
            lastPopedPopover = el;
        },

        //public function to add callback a function which will be called on window resize
        addResponsiveHandler: function (func) {
            responsiveHandlers.push(func);
        },

        // useful function to make equal height for contacts stand side by side
        setEqualHeight: function (els) {
            var tallestEl = 0;
            els = jQuery(els);
            els.each(function () {
                var currentHeight = $(this).height();
                if (currentHeight > tallestEl) {
                    tallestColumn = currentHeight;
                }
            });
            els.height(tallestEl);
        },

        // wrapper function to scroll(focus) to an element
        scrollTo: function (el, offeset) {
            pos = (el && el.size() > 0) ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },

        // function to scroll to the top
        scrollTop: function () {
            App.scrollTo();
        },

        // wrapper function to  block element(indicate loading)
        blockUI: function (options) {
            var options = $.extend(true, {}, options);
            var html = '';
            if (options.iconOnly) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '')+'"><img src="assets/img/loading-spinner-grey.gif" align=""></div>';
            } else if (options.textOnly) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '')+'"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
            } else {    
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '')+'"><img src="assets/img/loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
            }

            if (options.target) { // element blocking
                var el = $(options.target);
                if (el.height() <= ($(window).height())) {
                    options.cenrerY = true;
                }            
                el.block({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    centerY: options.cenrerY != undefined ? options.cenrerY : false,
                    css: {
                        top: '10%',
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#000',
                        opacity: options.boxed ? 0.05 : 0.1, 
                        cursor: 'wait'
                    }
                });
            } else { // page blocking
                $.blockUI({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    css: {
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#000',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            }            
        },

        // wrapper function to  un-block element(finish loading)
        unblockUI: function (target) {
            if (target) {
                $(target).unblock({
                    onUnblock: function () {
                        $(target).css('position', '');
                        $(target).css('zoom', '');
                    }
                });
            } else {
                $.unblockUI();
            }
        },

        startPageLoading: function(message) {
            $('.page-loading').remove();
            $('body').append('<div class="page-loading"><img src="assets/img/loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (message ? message : 'Loading...') + '</span></div>');
        },

        stopPageLoading: function() {
            $('.page-loading').remove();
        },

        alert: function(options) {

            options = $.extend(true, {
                container: "", // alerts parent container(by default placed after the page breadcrumbs)
                place: "append", // append or prepent in container 
                type: 'success',  // alert's type
                message: "",  // alert's message
                close: true, // make alert closable
                reset: true, // close all previouse alerts first
                focus: true, // auto scroll to the alert after shown
                closeInSeconds: 0, // auto close after defined seconds
                icon: "" // put icon before the message
            }, options);

            var id = App.getUniqueID("app_alert");

            var html = '<div id="' + id + '" class="app-alerts alert alert-' + options.type + ' fade in">' + (options.close ? '<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' : '' ) + (options.icon != "" ? '<i class="fa-lg fa fa-' + options.icon + '"></i>  ' : '') + options.message + '</div>';

            if (options.reset) {
                0;
                $('.app-alerts').remove();
            }

            if (!options.container) {
                $('.page-bar').after(html);
            } else {
                if (options.place == "append") {
                    $(options.container).append(html);
                } else {
                    $(options.container).prepend(html);
                }
            }

            if (options.focus) {
                App.scrollTo($('#' + id));
            }

            if (options.closeInSeconds > 0) {
                setTimeout(function(){
                    $('#' + id).remove();
                }, options.closeInSeconds * 1000);
            }

            return id;
        },

        // initializes uniform elements
        initUniform: function (els) {
            if (els) {
                jQuery(els).each(function () {
                    if ($(this).parents(".checker").size() == 0) {
                        $(this).show();
                        $(this).uniform();
                    }
                });
            } else {
                handleUniform();
            }

        },

        //wrapper function to update/sync jquery uniform checkbox & radios
        updateUniform: function (els) {
            $.uniform.update(els); // update the uniform checkbox & radios UI after the actual input control state changed
        },

        //public function to initialize the fancybox plugin
        initFancybox: function () {
            handleFancybox();
        },

        //public helper function to get actual input value(used in IE9 and IE8 due to placeholder attribute not supported)
        getActualVal: function (el) {
            var el = jQuery(el);
            if (el.val() === el.attr("placeholder")) {
                return "";
            }
            return el.val();
        },

        getUniqueID: function(prefix) {
            return 'prefix_' + Math.floor(Math.random() * (new Date()).getTime());
        },

        //public function to get a paremeter by name from URL
        getURLParameter: function (paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }
            return null;
        },

        // check for device touch support
        isTouchDevice: function () {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        },

        // check IE8 mode
        isIE8: function () {
            return isIE8;
        },

        // check IE9 mode
        isIE9: function () {
            return isIE9;
        },

        //check RTL mode
        isRTL: function () {
            return isRTL;
        },

        // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
        getViewPort: function () {
            var e = window, a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            }
        },

        // get layout color code by color name
        getLayoutColorCode: function (name) {
            if (layoutColorCodes[name]) {
                return layoutColorCodes[name];
            } else {
                return '';
            }
        }

    };

}();
/**
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 *
 * A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * License: MIT
 *
 * http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */(function(b,a,c){var d=b();b.fn.dropdownHover=function(e){if("ontouchstart" in document){return this}d=d.add(this.parent());return this.each(function(){var m=b(this),l=m.parent(),k={delay:500,instantlyCloseOthers:true},i={delay:b(this).data("delay"),instantlyCloseOthers:b(this).data("close-others")},f="show.bs.dropdown",j="hide.bs.dropdown",g=b.extend(true,{},k,e,i),h;l.hover(function(n){if(!l.hasClass("open")&&!m.is(n.target)){return true}d.find(":focus").blur();if(g.instantlyCloseOthers===true){d.removeClass("open")}a.clearTimeout(h);l.addClass("open");m.trigger(f)},function(){h=a.setTimeout(function(){l.removeClass("open");m.trigger(j)},g.delay)});m.hover(function(){d.find(":focus").blur();if(g.instantlyCloseOthers===true){d.removeClass("open")}a.clearTimeout(h);l.addClass("open");m.trigger(f)});l.find(".dropdown-submenu").each(function(){var o=b(this);var n;o.hover(function(){a.clearTimeout(n);o.children(".dropdown-menu").show();o.siblings().children(".dropdown-menu").hide()},function(){var p=o.children(".dropdown-menu");n=a.setTimeout(function(){p.hide()},g.delay)})})})};b(document).ready(function(){b('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);
var FormValidation = function () {

    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#form_sample_1');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    url: {
                        required: true,
                        url: true
                    },
                    number: {
                        required: true,
                        number: true
                    },
                    digits: {
                        required: true,
                        digits: true
                    },
                    creditcard: {
                        required: true,
                        creditcard: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    category: {
                        required: true
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success1.show();
                    error1.hide();
                }
            });

    };

    var handleValidation2 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#form_sample_2');
            var error2 = $('.alert-danger', form2);
            var success2 = $('.alert-success', form2);

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    url: {
                        required: true,
                        url: true
                    },
                    number: {
                        required: true,
                        number: true
                    },
                    digits: {
                        required: true,
                        digits: true
                    },
                    creditcard: {
                        required: true,
                        creditcard: true
                    },
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    var icon = $(element).parent('.input-icon').children('i');
                    icon.removeClass('fa-check').addClass("fa-warning");  
                    icon.attr("data-original-title", error.text()).tooltip({'container': 'body'});
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group   
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    
                },

                success: function (label, element) {
                    var icon = $(element).parent('.input-icon').children('i');
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    icon.removeClass("fa-warning").addClass("fa-check");
                },

                submitHandler: function (form) {
                    success2.show();
                    error2.hide();
                }
            });


    };

    var handleValidation3 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form3 = $('#form_sample_3');
            var error3 = $('.alert-danger', form3);
            var success3 = $('.alert-success', form3);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form3.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            });

            form3.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    category: {
                        required: true
                    },
                    options1: {
                        required: true
                    },
                    options2: {
                        required: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    membership: {
                        required: true
                    },
                    service: {
                        required: true,
                        minlength: 2
                    },
                    markdown: {
                        required: true
                    },
                    editor1: {
                        required: true
                    },
                    editor2: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    membership: {
                        required: "Please select a Membership type"
                    },
                    service: {
                        required: "Please select  at least 2 types of Service",
                        minlength: $.validator.format("Please select  at least {0} types of Service")
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parent(".input-group").size() > 0) {
                        error.insertAfter(element.parent(".input-group"));
                    } else if (element.attr("data-error-container")) { 
                        error.appendTo(element.attr("data-error-container"));
                    } else if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else if (element.parents('.radio-inline').size() > 0) { 
                        error.appendTo(element.parents('.radio-inline').attr("data-error-container"));
                    } else if (element.parents('.checkbox-list').size() > 0) {
                        error.appendTo(element.parents('.checkbox-list').attr("data-error-container"));
                    } else if (element.parents('.checkbox-inline').size() > 0) { 
                        error.appendTo(element.parents('.checkbox-inline').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success3.hide();
                    error3.show();
                    App.scrollTo(error3, -200);
                },

                highlight: function (element) { // hightlight error inputs
                   $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success3.show();
                    error3.hide();
                }

            });

             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2me', form3).change(function () {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
    };

    var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {
            
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["assets/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    };

    return {
        //main function to initiate the module
        init: function () {

            handleWysihtml5();
            handleValidation1();
            handleValidation2();
            handleValidation3();

        }

    };

}();
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function (a) {
    function b() {
    }

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k)if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                            var l = k[e].apply(k, g);
                            if (void 0 !== l)return l
                        } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }

        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }

    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }

    var c = document.documentElement, d = function () {
    };
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {
    };
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d, unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window), function () {
    "use strict";
    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;)if (a[c].listener === b)return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c, once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {listener: b, once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1)this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)for (d = c.length; d--;)f.call(this, b, c[d]); else for (d in b)b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)delete d[a]; else if (a instanceof RegExp)for (b in d)d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)if (g.hasOwnProperty(e))for (d = g[e].length; d--;)c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function (a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)if (b = c[e] + a, "string" == typeof d[b])return b
        }
    }

    var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function (a, b) {
    function c(a) {
        var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }

    function d() {
    }

    function e() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
            var d = h[b];
            a[d] = 0
        }
        return a
    }

    function f(b) {
        function d() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function () {
                        var a = d ? function (a) {
                            return d(a, null)
                        } : function (a) {
                            return a.currentStyle
                        };
                        return function (b) {
                            var c = a(b);
                            return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                        }
                    }(), k = b("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                    var f = document.body || document.documentElement;
                    f.appendChild(e);
                    var h = j(e);
                    l = 200 === c(h.width), f.removeChild(e)
                }
            }
        }

        function f(a) {
            if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var b = j(a);
                if ("none" === b.display)return e();
                var f = {};
                f.width = a.offsetWidth, f.height = a.offsetHeight;
                for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                    var o = h[m], p = b[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom, t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom, v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = g && l, y = c(b.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = c(b.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
            }
        }

        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%"))return c;
            var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
            return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
        }

        var j, k, l, m = !1;
        return f
    }

    var g = "undefined" == typeof console ? d : function (a) {
        console.error(a)
    }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
}(window), function (a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }

    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }

    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }

    var f = a.document, g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function (a) {
    "use strict";
    function b(a, b) {
        return a[g](b)
    }

    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }

    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)if (d[e] === a)return !0;
        return !1
    }

    function e(a, d) {
        return c(a), b(a, d)
    }

    var f, g = function () {
        if (a.matches)return "matches";
        if (a.matchesSelector)return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c], f = e + "MatchesSelector";
            if (a[f])return f
        }
    }();
    if (g) {
        var h = document.createElement("div"), i = b(h, "div");
        f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function (a, b, c) {
    var d = {};
    d.extend = function (a, b) {
        for (var c in b)a[c] = b[c];
        return a
    }, d.modulo = function (a, b) {
        return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function (a) {
        return "[object Array]" == e.call(a)
    }, d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a))b = a; else if (a && "number" == typeof a.length)for (var c = 0, e = a.length; e > c; c++)b.push(a[c]); else b.push(a);
        return b
    }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b)
    } : function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
        return -1
    }, d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    } : function (a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function () {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
        }

        var b;
        return a
    }(), d.getParent = function (a, b) {
        for (; a != document.body;)if (a = a.parentNode, c(a, b))return a
    }, d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h))if (b) {
                c(h, b) && e.push(h);
                for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)e.push(i[j])
            } else e.push(h)
        }
        return e
    }, d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b], e = b + "Timeout";
        a.prototype[b] = function () {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments, f = this;
            this[e] = setTimeout(function () {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, d.toDashed = function (a) {
        return a.replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function (c, e) {
        b(function () {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i], m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l, k), p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function (a, b, c, d, e) {
    "use strict";
    function f(a) {
        for (var b in a)return !1;
        return b = null, !0
    }

    function g(a, b) {
        a && (this.element = a, this.layout = b, this.position = {x: 0, y: 0}, this._create())
    }

    function h(a) {
        return a.replace(/([A-Z])/g, function (a) {
            return "-" + a.toLowerCase()
        })
    }

    var i = a.getComputedStyle, j = i ? function (a) {
        return i(a, null)
    } : function (a) {
        return a.currentStyle
    }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[k], p = ["transform", "transition", "transitionDuration", "transitionProperty"], q = function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
            var e = p[b], f = d(e);
            f && f !== e && (a[e] = f)
        }
        return a
    }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.getSize = function () {
        this.size = c(this.element)
    }, g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
            var d = q[c] || c;
            b[d] = a[c]
        }
    }, g.prototype.getPosition = function () {
        var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = this.layout.size, h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10), i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
        h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
    }, g.prototype.layoutPosition = function () {
        var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight", e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d];
        c[e] = this.getXValue(g), c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom", j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h];
        c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
    }, g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning)return void this.layoutPosition();
        var h = a - c, i = b - d, j = {};
        j.transform = this.getTranslate(h, i), this.transition({
            to: j,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }, g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd)b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(o, this, !1))
    }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a)
    }, g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a)
    };
    var s = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    g.prototype.ontransitionend = function (a) {
        if (a.target === this.element) {
            var b = this._transn, c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this), delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, g.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a)b[c] = "";
        this.css(b)
    };
    var t = {transitionProperty: "", transitionDuration: ""};
    return g.prototype.removeTransitionStyles = function () {
        this.css(t)
    }, g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function () {
            a.removeElem()
        }), this.hide()
    }, g.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity)return "opacity";
        for (var c in b)return c
    }, g.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, g.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, g
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c)return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var h = a.console, i = a.jQuery, j = function () {
    }, k = 0, l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
        containerStyle: {position: "relative"},
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
        e.extend(this.options, a)
    }, g.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function (a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e], h = new c(g, this);
            d.push(h)
        }
        return d
    }, g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)a.push(this.items[b].element);
        return a
    }, g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
        this.getSize()
    }, g.prototype.getSize = function () {
        this.size = d(this.element)
    }, g.prototype._getMeasurement = function (a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function (a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }, g.prototype._layoutItems = function (a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d], g = this._getItemLayoutPosition(f);
                g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }, g.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }, g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function () {
        this.resizeContainer()
    }, g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
        }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }

        function d() {
            g++, g === f && c()
        }

        var e = this, f = b.length;
        if (!b || !f)return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }, g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d), i)if (this.$element = this.$element || i(this.element), b) {
            var e = i.Event(b);
            e.type = a, this.$element.trigger(e, c)
        } else this.$element.trigger(a, c)
    }, g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, g.prototype.stamp = function (a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }, g.prototype.unstamp = function (a) {
        if (a = this._find(a))for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d)
        }
    }, g.prototype._find = function (a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }, g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(), b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
        };
        return f
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.bindResize = function () {
        this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function () {
        function a() {
            b.resize(), delete b.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function () {
        var a = d(this.element), b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }, g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }, g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b)
    }, g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a)return d
        }
    }, g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c], g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }, g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b), b && b.length)for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f)
        }
    }, g.prototype.destroy = function () {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }, g.create = function (a, b) {
        function c() {
            g.apply(this, arguments)
        }

        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
            f.apply(this, arguments)
        }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function (a) {
    "use strict";
    function b() {
        a.Item.apply(this, arguments)
    }

    b.prototype = new a.Item, b.prototype._create = function () {
        this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
    }, b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var a = this.layout.options.getSortData, b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    };
    var c = b.prototype.destroy;
    return b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({display: ""})
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function (a, b) {
    "use strict";
    function c(a) {
        this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
    }

    return function () {
        function a(a) {
            return function () {
                return b.prototype[a].apply(this.isotope, arguments)
            }
        }

        for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            c.prototype[g] = a(g)
        }
    }(), c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element), c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight
    }, c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, c.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, c.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, c.prototype.getSegmentSize = function (a, b) {
        var c = a + b, d = "outer" + b;
        if (this._getMeasurement(c, d), !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }, c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }, c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, c.prototype.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, c.modes = {}, c.create = function (a, b) {
        function d() {
            c.apply(this, arguments)
        }

        return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
    }, c
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function (a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--;)this.colYs.push(0);
        this.maxY = 0
    }, d.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0], c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter, e = this.containerWidth + this.gutter, f = e / d, g = d - e % d, h = g && 1 > g ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a);
        this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil", e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
            x: this.columnWidth * h,
            y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)this.colYs[h + l] = j;
        return i
    }, d.prototype._getColGroup = function (a) {
        if (2 > a)return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, d.prototype._manageStamp = function (a) {
        var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {height: this.maxY};
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];)a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function (a, b) {
    "use strict";
    function c(a, b) {
        for (var c in b)a[c] = b[c];
        return a
    }

    var d = a.create("masonry"), e = d.prototype._getElementOffset, f = d.prototype.layout, g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
        this.items = this.isotope.filteredItems, h.call(this)
    };
    var i = d.prototype._manageStamp;
    return d.prototype._manageStamp = function () {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
    "use strict";
    var b = a.create("fitRows");
    return b.prototype._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter, c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
        var d = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
    }, b.prototype._getContainerSize = function () {
        return {height: this.maxY}
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
    "use strict";
    var b = a.create("vertical", {horizontalAlignment: 0});
    return b.prototype._resetLayout = function () {
        this.y = 0
    }, b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment, c = this.y;
        return this.y += a.size.outerHeight, {x: b, y: c}
    }, b.prototype._getContainerSize = function () {
        return {height: this.y}
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
        return function (c, d) {
            for (var e = 0, f = a.length; f > e; e++) {
                var g = a[e], h = c.sortData[g], i = d.sortData[g];
                if (h > i || i > h) {
                    var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1;
                    return (h > i ? 1 : -1) * k
                }
            }
            return 0
        }
    }

    var i = a.jQuery, j = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, k = document.documentElement, l = k.textContent ? function (a) {
        return a.textContent
    } : function (a) {
        return a.innerText
    }, m = b.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var a in g.modes)this._initLayoutMode(a)
    }, m.prototype.reloadItems = function () {
        this.itemGUID = 0, b.prototype.reloadItems.call(this)
    }, m.prototype._itemize = function () {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.id = this.itemGUID++
        }
        return this._updateItemsSortData(a), a
    }, m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a], c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
    }, m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, m.prototype._layout = function () {
        var a = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
    }, m.prototype.arrange = function (a) {
        function b() {
            d.reveal(c.needReveal), d.hide(c.needHide)
        }

        this.option(a), this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
    }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = a, a
    }, m.prototype._bindArrangeComplete = function () {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }

        var b, c, d, e = this;
        this.once("layoutComplete", function () {
            b = !0, a()
        }), this.once("hideComplete", function () {
            c = !0, a()
        }), this.once("revealComplete", function () {
            d = !0, a()
        })
    }, m.prototype._filter = function (a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (!i.isIgnored) {
                var j = f(i);
                j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
            }
        }
        return {matches: c, needReveal: d, needHide: e}
    }, m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering ? function (b) {
            return i(b.element).is(a)
        } : "function" == typeof a ? function (b) {
            return a(b.element)
        } : function (b) {
            return d(b.element, a)
        }
    }, m.prototype.updateSortData = function (a) {
        var b;
        a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
    }, m.prototype._getSorters = function () {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = n(c)
        }
    }, m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.updateSortData()
        }
    };
    var n = function () {
        function a(a) {
            if ("string" != typeof a)return a;
            var c = j(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/), f = e && e[1], g = b(f, d), h = m.sortDataParsers[c[1]];
            return a = h ? function (a) {
                return a && h(g(a))
            } : function (a) {
                return a && g(a)
            }
        }

        function b(a, b) {
            var c;
            return c = a ? function (b) {
                return b.getAttribute(a)
            } : function (a) {
                var c = a.querySelector(b);
                return c && l(c)
            }
        }

        return a
    }();
    m.sortDataParsers = {
        parseInt: function (a) {
            return parseInt(a, 10)
        }, parseFloat: function (a) {
            return parseFloat(a)
        }
    }, m.prototype._sort = function () {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory), c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }, m.prototype._mode = function () {
        var a = this.options.layoutMode, b = this.modes[a];
        if (!b)throw new Error("No layout mode: " + a);
        return b.options = this.options[a], b
    }, m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a)
    }, m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a)
    }, m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, m.prototype.appended = function (a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }, m.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(), this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
        }
    }, m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a);
        return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
    }, m.prototype.insert = function (a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; e > c; c++)d = b[c], this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; e > c; c++)b[c].isLayoutInstant = !0;
            for (this.arrange(), c = 0; e > c; c++)delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    };
    var o = m.prototype.remove;
    return m.prototype.remove = function (a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)for (var d = 0; c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f)
        }
    }, m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
            var c = this.items[a];
            c.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return this.options.transitionDuration = b, c
    }, m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)a.push(this.filteredItems[b].element);
        return a
    }, m
});
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=r||n.forceIframe?e('<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),I=n.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=k?e("body"):e(t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.66,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Improved by keenthemes for Conquer Theme
 * Version: 1.3.2
 *
 */
!function(e){jQuery.fn.extend({slimScroll:function(i){var o={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px",animate:!0},a=e.extend(o,i);return this.each(function(){function o(t){if(u){var t=t||window.event,i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3);var o=t.target||t.srcTarget||t.srcElement;e(o).closest("."+a.wrapperClass).is(S.parent())&&r(i,!0),t.preventDefault&&!y&&t.preventDefault(),y||(t.returnValue=!1)}}function r(e,t,i){y=!1;var o=e,r=S.outerHeight()-M.outerHeight();if(t&&(o=parseInt(M.css("top"))+e*parseInt(a.wheelStep)/100*M.outerHeight(),o=Math.min(Math.max(o,0),r),o=e>0?Math.ceil(o):Math.floor(o),M.css({top:o+"px"})),v=parseInt(M.css("top"))/(S.outerHeight()-M.outerHeight()),o=v*(S[0].scrollHeight-S.outerHeight()),i){o=e;var s=o/S[0].scrollHeight*S.outerHeight();s=Math.min(Math.max(s,0),r),M.css({top:s+"px"})}"scrollTo"in a&&a.animate?S.animate({scrollTop:o}):S.scrollTop(o),S.trigger("slimscrolling",~~o),l(),c()}function s(){window.addEventListener?(this.addEventListener("DOMMouseScroll",o,!1),this.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}function n(){f=Math.max(S.outerHeight()/S[0].scrollHeight*S.outerHeight(),m),M.css({height:f+"px"});var e=f==S.outerHeight()?"none":"block";M.css({display:e})}function l(){if(n(),clearTimeout(p),v==~~v){if(y=a.allowPageScroll,b!=v){var e=0==~~v?"top":"bottom";S.trigger("slimscroll",e)}}else y=!1;return b=v,f>=S.outerHeight()?void(y=!0):(M.stop(!0,!0).fadeIn("fast"),void(a.railVisible&&H.stop(!0,!0).fadeIn("fast")))}function c(){a.alwaysVisible||(p=setTimeout(function(){a.disableFadeOut&&u||h||d||(M.fadeOut("slow"),H.fadeOut("slow"))},1e3))}var u,h,d,p,g,f,v,b,w="<div></div>",m=30,y=!1,S=e(this);if("ontouchstart"in window&&window.navigator.msPointerEnabled&&S.css("-ms-touch-action","none"),S.parent().hasClass(a.wrapperClass)){var E=S.scrollTop();if(M=S.parent().find("."+a.barClass),H=S.parent().find("."+a.railClass),n(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){S.parent().css("height","auto"),S.css("height","auto");var x=S.parent().parent().height();S.parent().css("height",x),S.css("height",x)}if("scrollTo"in i)E=parseInt(a.scrollTo);else if("scrollBy"in i)E+=parseInt(a.scrollBy);else if("destroy"in i)return M.remove(),H.remove(),void S.unwrap();r(E,!1,!0)}}else{a.height="auto"==i.height?S.parent().height():i.height;var C=e(w).addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});S.css({overflow:"hidden",width:a.width,height:a.height});var H=e(w).addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),M=e(w).addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),D="right"==a.position?{right:a.distance}:{left:a.distance};H.css(D),M.css(D),S.wrap(C),S.parent().append(M),S.parent().append(H),a.railDraggable&&M.bind("mousedown",function(i){var o=e(document);return d=!0,t=parseFloat(M.css("top")),pageY=i.pageY,o.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,M.css("top",currTop),r(0,M.position().top,!1)}),o.bind("mouseup.slimscroll",function(){d=!1,c(),o.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),"ontouchstart"in window&&window.navigator.msPointerEnabled&&(S.bind("MSPointerDown",function(e){g=e.originalEvent.pageY}),S.bind("MSPointerMove",function(e){e.originalEvent.preventDefault();var t=(g-e.originalEvent.pageY)/a.touchScrollStep;r(t,!0),g=e.originalEvent.pageY})),H.hover(function(){l()},function(){c()}),M.hover(function(){h=!0},function(){h=!1}),S.hover(function(){u=!0,l(),c()},function(){u=!1,c()}),S.bind("touchstart",function(e){e.originalEvent.touches.length&&(g=e.originalEvent.touches[0].pageY)}),S.bind("touchmove",function(e){if(y||e.originalEvent.preventDefault(),e.originalEvent.touches.length){var t=(g-e.originalEvent.touches[0].pageY)/a.touchScrollStep;r(t,!0),g=e.originalEvent.touches[0].pageY}}),n(),"bottom"===a.start?(M.css({top:S.outerHeight()-M.outerHeight()}),r(0,!0)):"top"!==a.start&&(r(e(a.start).position().top,null,!0),a.alwaysVisible||M.hide()),s()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery);
var Portfolio = function () {


    return {
        //main function to initiate the module
        init: function () {
            $('.mix-grid').mixitup();
        }

    };

}();
var TableAdvanced = function () {

    var initTable1 = function () {
        var table = $('#sample_1');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-dropdown-on-portlet",
            "buttons": {
                "normal": "btn btn-sm btn-default",
                "disabled": "btn btn-sm btn-default disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu tabletools-dropdown-menu"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [0, 'asc']
            ],
            
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF"
                }, {
                    "sExtends": "csv",
                    "sButtonText": "CSV"
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel"
                }, {
                    "sExtends": "print",
                    "sButtonText": "Print",
                    "sInfo": 'Please press "CTR+P" to print or "ESC" to quit',
                    "sMessage": "Generated by DataTables"
                }]
            }
        });

        var tableWrapper = $('#sample_1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    };

    var initTable2 = function () {
        var table = $('#sample_2');

        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */

        /* Set tabletools buttons and button container */

        $.extend(true, $.fn.DataTable.TableTools.classes, {
            "container": "btn-group tabletools-btn-group pull-right",
            "buttons": {
                "normal": "btn btn-sm btn-default",
                "disabled": "btn btn-sm btn-default disabled"
            }
        });

        var oTable = table.dataTable({
            "order": [
                [0, 'asc']
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],

            // set the initial value
            "pageLength": 10,
            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            "tableTools": {
                "sSwfPath": "assets/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
                "aButtons": [{
                    "sExtends": "pdf",
                    "sButtonText": "PDF"
                }, {
                    "sExtends": "csv",
                    "sButtonText": "CSV"
                }, {
                    "sExtends": "xls",
                    "sButtonText": "Excel"
                }, {
                    "sExtends": "print",
                    "sButtonText": "Print",
                    "sInfo": 'Please press "CTRL+P" to print or "ESC" to quit',
                    "sMessage": "Generated by DataTables"
                }, {
                    "sExtends": "copy",
                    "sButtonText": "Copy"
                }]
            }
        });

        var tableWrapper = $('#sample_2_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    };

    var initTable3 = function () {
        var table = $('#sample_3');

        /* Formatting function for row details */
        function fnFormatDetails(oTable, nTr) {
            var aData = oTable.fnGetData(nTr);
            var sOut = '<table>';
            sOut += '<tr><td>Platform(s):</td><td>' + aData[2] + '</td></tr>';
            sOut += '<tr><td>Engine version:</td><td>' + aData[3] + '</td></tr>';
            sOut += '<tr><td>CSS grade:</td><td>' + aData[4] + '</td></tr>';
            sOut += '<tr><td>Others:</td><td>Could provide a link here</td></tr>';
            sOut += '</table>';

            return sOut;
        }

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement('th');
        nCloneTh.className = "table-checkbox";

        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

        table.find('thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        table.find('tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });

        /*
         * Initialize DataTables, with no sorting on the 'details' column
         */
        var oTable = table.dataTable({
            "columnDefs": [{
                "orderable": false,
                "targets": [0]
            }],
            "order": [
                [1, 'asc']
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
        });
        var tableWrapper = $('#sample_3_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */
        table.on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if (oTable.fnIsOpen(nTr)) {
                /* This row is already open - close it */
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose(nTr);
            } else {
                /* Open this row */
                $(this).addClass("row-details-open").removeClass("row-details-close");
                oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
            }
        });
    };

    var initTable4 = function () {
        var table = $('#sample_4');

        /* Formatting function for row expanded details */
        function fnFormatDetails(oTable, nTr) {
            var aData = oTable.fnGetData(nTr);
            var sOut = '<table>';
            sOut += '<tr><td>Platform(s):</td><td>' + aData[2] + '</td></tr>';
            sOut += '<tr><td>Engine version:</td><td>' + aData[3] + '</td></tr>';
            sOut += '<tr><td>CSS grade:</td><td>' + aData[4] + '</td></tr>';
            sOut += '<tr><td>Others:</td><td>Could provide a link here</td></tr>';
            sOut += '</table>';

            return sOut;
        }

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement('th');
        nCloneTh.className = "table-checkbox";
        
        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

        table.find('thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        table.find('tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });

        var oTable = table.dataTable({
            "columnDefs": [{
                "orderable": false,
                "targets": [0]
            }],
            "order": [
                [1, 'asc']
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
        });

        var tableWrapper = $('#sample_4_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        var tableColumnToggler = $('#sample_4_column_toggler');

        /* modify datatable control inputs */
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */
        table.on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if (oTable.fnIsOpen(nTr)) {
                /* This row is already open - close it */
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose(nTr);
            } else {
                /* Open this row */
                $(this).addClass("row-details-open").removeClass("row-details-close");
                oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
            }
        });

        /* handle show/hide columns*/
        $('input[type="checkbox"]', tableColumnToggler).change(function () {
            /* Get the DataTables object again - this is not a recreation, just a get of the object */
            var iCol = parseInt($(this).attr("data-column"));
            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
        });
    };

    var initTable5 = function () {

        var table = $('#sample_5');

        /* Fixed header extension: http://datatables.net/extensions/scroller/ */

        var oTable = table.dataTable({
            "dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // datatable layout without  horizobtal scroll
            "scrollY": "300",
            "deferRender": true,
            "order": [
                [0, 'asc']
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            "pageLength": 10 // set the initial value            
        });


        var tableWrapper = $('#sample_5_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    };

    var initTable6 = function () {

        var table = $('#sample_6');

        /* Fixed header extension: http://datatables.net/extensions/keytable/ */

        var oTable = table.dataTable({
            "order": [
                [0, 'asc']
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            "pageLength": 10, // set the initial value,
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ]           
        });

        var oTableColReorder = new $.fn.dataTable.ColReorder( oTable );

        var tableWrapper = $('#sample_6_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    };

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
            initTable2();
            initTable3();
            initTable4();
            initTable5();
            initTable6();
        }

    };

}();
var TableAjax = function () {

    var initPickers = function () {
        //init date pickers
        $('.date-picker').datepicker({
            autoclose: true
        });
    };

    var handleRecords = function () {

        var grid = new Datatable();

        grid.init({
            src: $("#datatable_ajax"),
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            loadingMessage: 'Loading...',
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
                "lengthMenu": [
                    [10, 20, 50, 100, 150, -1],
                    [10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                "pageLength": 10, // default record count per page
                "ajax": {
                    "url": "demo/table_ajax.php", // ajax source
                },
                "order": [
                    [1, "asc"]
                ] // set first column as a default sort by asc
            }
        });

        // handle group actionsubmit button click
        grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
            e.preventDefault();
            var action = $(".table-group-action-input", grid.getTableWrapper());
            if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                grid.setAjaxParam("customActionType", "group_action");
                grid.setAjaxParam("customActionName", action.val());
                grid.setAjaxParam("id", grid.getSelectedRows());
                grid.getDataTable().ajax.reload();
                grid.clearAjaxParams();
            } else if (action.val() == "") {
                App.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'Please select an action',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            } else if (grid.getSelectedRowsCount() === 0) {
                App.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'No record selected',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            }
        });
    };

    return {

        //main function to initiate the module
        init: function () {

            initPickers();
            handleRecords();
        }

    };

}();
var TableEditable = function () {

    var handleTable = function () {

        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
            jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
            jqTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
            jqTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
            jqTds[4].innerHTML = '<a class="edit" href="">Save</a>';
            jqTds[5].innerHTML = '<a class="cancel" href="">Cancel</a>';
        }

        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 4, false);
            oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 5, false);
            oTable.fnDraw();
        }

        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 4, false);
            oTable.fnDraw();
        }

        var table = $('#sample_editable_1');

        var oTable = table.dataTable({
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,

            "language": {
                "lengthMenu": " _MENU_ records"
            },
            "columnDefs": [{ // set default column settings
                'orderable': true,
                'targets': [0]
            }, {
                "searchable": true,
                "targets": [0]
            }],
            "order": [
                [0, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = $("#sample_editable_1_wrapper");

        tableWrapper.find(".dataTables_length select").select2({
            showSearchInput: false //hide search box with special css class
        }); // initialize select2 dropdown

        var nEditing = null;
        var nNew = false;

        $('#sample_editable_1_new').click(function (e) {
            e.preventDefault();

            if (nNew && nEditing) {
                if (confirm("Previose row not saved. Do you want to save it ?")) {
                    saveRow(oTable, nEditing); // save
                    $(nEditing).find("td:first").html("Untitled");
                    nEditing = null;
                    nNew = false;

                } else {
                    oTable.fnDeleteRow(nEditing); // cancel
                    nEditing = null;
                    nNew = false;
                    
                    return;
                }
            }

            var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
            nNew = true;
        });

        table.on('click', '.delete', function (e) {
            e.preventDefault();

            if (confirm("Are you sure to delete this row ?") == false) {
                return;
            }

            var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);
            alert("Deleted! Do not forget to do some ajax to sync with backend :)");
        });

        table.on('click', '.cancel', function (e) {
            e.preventDefault();

            if (nNew) {
                oTable.fnDeleteRow(nEditing);
                nNew = false;
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });

        table.on('click', '.edit', function (e) {
            e.preventDefault();

            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */
                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {
                /* Editing this row and want to save it */
                saveRow(oTable, nEditing);
                nEditing = null;
                alert("Updated! Do not forget to do some ajax to sync with backend :)");
            } else {
                /* No edit in progress - let's start one */
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    };

    return {

        //main function to initiate the module
        init: function () {
            handleTable();
        }

    };

}();
var TableManaged = function () {

    var initTable1 = function () {

        var table = $('#sample_1');

        // begin first table
        table.dataTable({
            "columns": [{
                "orderable": false
            }, {
                "orderable": true
            }, {
                "orderable": false
            }, {
                "orderable": false
            }, {
                "orderable": true
            }, {
                "orderable": false
            }],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,            
            "pagingType": "bootstrap_full_number",
            "language": {
                "lengthMenu": "  _MENU_ records",
                "paginate": {
                    "previous":"Prev",
                    "next": "Next",
                    "last": "Last",
                    "first": "First"
                }
            },
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#sample_1_wrapper');

        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).parents('tr').removeClass("active");
                }
            });
            jQuery.uniform.update(set);
        });

        table.on('change', 'tbody tr .checkboxes', function () {
            $(this).parents('tr').toggleClass("active");
        });

        tableWrapper.find('.dataTables_length select').addClass("form-control input-xsmall input-inline"); // modify table per page dropdown
    };

    var initTable2 = function () {

        var table = $('#sample_2');

        table.dataTable({
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,
            "language": {
                "lengthMenu": " _MENU_ records",
                "paging": {
                    "previous": "Prev",
                    "next": "Next"
                }
            },
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#sample_2_wrapper');

        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    };

    var initTable3 = function () {

        var table = $('#sample_3');

        // begin: third table
        table.dataTable({
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,
            "language": {
                "lengthMenu": " _MENU_ records"
            },
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#sample_3_wrapper');

        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    };

    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
            initTable2();
            initTable3();
        }

    };

}();