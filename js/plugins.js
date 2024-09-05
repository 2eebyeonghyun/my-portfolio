/* Locomotive Scroll */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).LocomotiveScroll = e()
}(this, function() {
    "use strict";
    function s(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s)
        }
    }
    function o(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
    function e(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t && (s = s.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            i.push.apply(i, s)
        }
        return i
    }
    function i(n) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(o), !0).forEach(function(t) {
                var e, i, s;
                e = n,
                s = o[i = t],
                i in e ? Object.defineProperty(e, i, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = s
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t))
            })
        }
        return n
    }
    function l(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && a(t, e)
    }
    function r(t) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function c(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function h(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? c(t) : e
    }
    function u(t, e, i) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var s = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)); )
                    ;
                return t
            }(t, e);
            if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function p(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++)
                    i[e] = t[e];
                return i
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var f = {
        el: document,
        elMobile: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        smoothMobile: !1,
        direction: "vertical",
        inertia: 1,
        class: "is-inview",
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        firefoxMultiplier: 50,
        touchMultiplier: 2
    }
      , d = function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            s(this, e),
            window.scrollTo(0, 0),
            Object.assign(this, f, t),
            this.namespace = "locomotive",
            this.html = document.documentElement,
            this.windowHeight = window.innerHeight,
            this.windowMiddle = this.windowHeight / 2,
            this.els = [],
            this.listeners = {},
            this.hasScrollTicking = !1,
            this.hasCallEventSet = !1,
            this.checkScroll = this.checkScroll.bind(this),
            this.checkResize = this.checkResize.bind(this),
            this.checkEvent = this.checkEvent.bind(this),
            this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: this.html.offsetHeight
            },
            this.getDirection && (this.instance.direction = null),
            this.getDirection && (this.instance.speed = 0),
            this.html.classList.add(this.initClass),
            window.addEventListener("resize", this.checkResize, !1)
        }
        return o(e, [{
            key: "init",
            value: function() {
                this.initEvents()
            }
        }, {
            key: "checkScroll",
            value: function() {
                this.dispatchScroll()
            }
        }, {
            key: "checkResize",
            value: function() {
                var t = this;
                this.resizeTick || (this.resizeTick = !0,
                requestAnimationFrame(function() {
                    t.resize(),
                    t.resizeTick = !1
                }))
            }
        }, {
            key: "resize",
            value: function() {}
        }, {
            key: "initEvents",
            value: function() {
                var e = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                this.setScrollTo = this.setScrollTo.bind(this),
                this.scrollToEls.forEach(function(t) {
                    t.addEventListener("click", e.setScrollTo, !1)
                })
            }
        }, {
            key: "setScrollTo",
            value: function(t) {
                t.preventDefault(),
                this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), t.currentTarget.getAttribute("data-".concat(this.name, "-offset")))
            }
        }, {
            key: "addElements",
            value: function() {}
        }, {
            key: "detectElements",
            value: function(i) {
                var s = this
                  , n = this.instance.scroll.y
                  , o = n + this.windowHeight;
                this.els.forEach(function(t, e) {
                    !t || t.inView && !i || o >= t.top && n < t.bottom && s.setInView(t, e),
                    t && t.inView && (o < t.top || n > t.bottom) && s.setOutOfView(t, e)
                }),
                this.els = this.els.filter(function(t, e) {
                    return null !== t
                }),
                this.hasScrollTicking = !1
            }
        }, {
            key: "setInView",
            value: function(t, e) {
                this.els[e].inView = !0,
                t.el.classList.add(t.class),
                t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                t.repeat || (this.els[e].call = !1)),
                t.repeat || t.speed || t.sticky || (!t.call || t.call && this.hasCallEventSet) && (this.els[e] = null)
            }
        }, {
            key: "setOutOfView",
            value: function(t, e) {
                (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class)
            }
        }, {
            key: "dispatchCall",
            value: function(t, e) {
                this.callWay = e,
                this.callValue = t.call.split(",").map(function(t) {
                    return t.trim()
                }),
                this.callObj = t,
                1 == this.callValue.length && (this.callValue = this.callValue[0]);
                var i = new Event(this.namespace + "call");
                this.el.dispatchEvent(i)
            }
        }, {
            key: "dispatchScroll",
            value: function() {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t)
            }
        }, {
            key: "setEvents",
            value: function(t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var i = this.listeners[t];
                i.push(e),
                1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                "call" === t && (this.hasCallEventSet = !0,
                this.detectElements(!0))
            }
        }, {
            key: "unsetEvents",
            value: function(t, e) {
                if (this.listeners[t]) {
                    var i = this.listeners[t]
                      , s = i.indexOf(e);
                    s < 0 || (i.splice(s, 1),
                    0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                }
            }
        }, {
            key: "checkEvent",
            value: function(t) {
                var e = this
                  , i = t.type.replace(this.namespace, "")
                  , s = this.listeners[i];
                s && 0 !== s.length && s.forEach(function(t) {
                    switch (i) {
                    case "scroll":
                        return t(e.instance);
                    case "call":
                        return t(e.callValue, e.callWay, e.callObj);
                    default:
                        return t()
                    }
                })
            }
        }, {
            key: "startScroll",
            value: function() {}
        }, {
            key: "stopScroll",
            value: function() {}
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function(t) {
                    e.el.removeEventListener(e.namespace + t, e.checkEvent, !1)
                }),
                this.listeners = {},
                this.scrollToEls.forEach(function(t) {
                    t.removeEventListener("click", e.setScrollTo, !1)
                })
            }
        }]),
        e
    }()
      , y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var v = t(function(t, e) {
        t.exports = {
            polyfill: function() {
                var a = window
                  , c = document;
                if (!("scrollBehavior"in c.documentElement.style && !0 !== a.__forceSmoothScrollPolyfill__)) {
                    var t, e = a.HTMLElement || a.Element, l = 468, h = {
                        scroll: a.scroll || a.scrollTo,
                        scrollBy: a.scrollBy,
                        elementScroll: e.prototype.scroll || f,
                        scrollIntoView: e.prototype.scrollIntoView
                    }, u = a.performance && a.performance.now ? a.performance.now.bind(a.performance) : Date.now, i = (t = a.navigator.userAgent,
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0);
                    a.scroll = a.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? r.call(a, c.body, void 0 !== arguments[0].left ? ~~arguments[0].left : a.scrollX || a.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : a.scrollY || a.pageYOffset) : h.scroll.call(a, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : a.scrollX || a.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : a.scrollY || a.pageYOffset))
                    }
                    ,
                    a.scrollBy = function() {
                        void 0 !== arguments[0] && (s(arguments[0]) ? h.scrollBy.call(a, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : r.call(a, c.body, ~~arguments[0].left + (a.scrollX || a.pageXOffset), ~~arguments[0].top + (a.scrollY || a.pageYOffset)))
                    }
                    ,
                    e.prototype.scroll = e.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== s(arguments[0])) {
                                var t = arguments[0].left
                                  , e = arguments[0].top;
                                r.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                    throw new SyntaxError("Value could not be converted");
                                h.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }
                    ,
                    e.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : h.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }
                    ,
                    e.prototype.scrollIntoView = function() {
                        if (!0 !== s(arguments[0])) {
                            var t = function(t) {
                                for (; t !== c.body && !1 === (i = n(e = t, "Y") && o(e, "Y"),
                                s = n(e, "X") && o(e, "X"),
                                i || s); )
                                    t = t.parentNode || t.host;
                                var e, i, s;
                                return t
                            }(this)
                              , e = t.getBoundingClientRect()
                              , i = this.getBoundingClientRect();
                            t !== c.body ? (r.call(this, t, t.scrollLeft + i.left - e.left, t.scrollTop + i.top - e.top),
                            "fixed" !== a.getComputedStyle(t).position && a.scrollBy({
                                left: e.left,
                                top: e.top,
                                behavior: "smooth"
                            })) : a.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })
                        } else
                            h.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }
                function f(t, e) {
                    this.scrollLeft = t,
                    this.scrollTop = e
                }
                function s(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                        return !0;
                    if ("object" == typeof t && "smooth" === t.behavior)
                        return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }
                function n(t, e) {
                    return "Y" === e ? t.clientHeight + i < t.scrollHeight : "X" === e ? t.clientWidth + i < t.scrollWidth : void 0
                }
                function o(t, e) {
                    var i = a.getComputedStyle(t, null)["overflow" + e];
                    return "auto" === i || "scroll" === i
                }
                function d(t) {
                    var e, i, s, n, o = (u() - t.startTime) / l;
                    n = o = 1 < o ? 1 : o,
                    e = .5 * (1 - Math.cos(Math.PI * n)),
                    i = t.startX + (t.x - t.startX) * e,
                    s = t.startY + (t.y - t.startY) * e,
                    t.method.call(t.scrollable, i, s),
                    i === t.x && s === t.y || a.requestAnimationFrame(d.bind(a, t))
                }
                function r(t, e, i) {
                    var s, n, o, l, r = u();
                    l = t === c.body ? (n = (s = a).scrollX || a.pageXOffset,
                    o = a.scrollY || a.pageYOffset,
                    h.scroll) : (n = (s = t).scrollLeft,
                    o = t.scrollTop,
                    f),
                    d({
                        scrollable: s,
                        method: l,
                        startTime: r,
                        startX: n,
                        startY: o,
                        x: e,
                        y: i
                    })
                }
            }
        }
    })
      , m = (v.polyfill,
    function(t) {
        function i() {
            var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return s(this, i),
            t = h(this, r(i).call(this, e)),
            window.addEventListener("scroll", t.checkScroll, !1),
            v.polyfill(),
            t
        }
        return l(i, d),
        o(i, [{
            key: "init",
            value: function() {
                this.instance.scroll.y = window.pageYOffset,
                this.addElements(),
                this.detectElements(),
                u(r(i.prototype), "init", this).call(this)
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this;
                u(r(i.prototype), "checkScroll", this).call(this),
                this.getDirection && this.addDirection(),
                this.getSpeed && (this.addSpeed(),
                this.timestamp = Date.now()),
                this.instance.scroll.y = window.pageYOffset,
                this.els.length && (this.hasScrollTicking || (requestAnimationFrame(function() {
                    t.detectElements()
                }),
                this.hasScrollTicking = !0))
            }
        }, {
            key: "addDirection",
            value: function() {
                window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
        }, {
            key: "addSpeed",
            value: function() {
                window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0
            }
        }, {
            key: "resize",
            value: function() {
                this.els.length && (this.windowHeight = window.innerHeight,
                this.updateElements())
            }
        }, {
            key: "addElements",
            value: function() {
                var h = this;
                this.els = [],
                this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(t, e) {
                    var i = t.dataset[h.name + "Class"] || h.class
                      , s = t.getBoundingClientRect().top + h.instance.scroll.y
                      , n = s + t.offsetHeight
                      , o = "string" == typeof t.dataset[h.name + "Offset"] ? t.dataset[h.name + "Offset"].split(",") : h.offset
                      , l = t.dataset[h.name + "Repeat"]
                      , r = t.dataset[h.name + "Call"];
                    l = "false" != l && (null != l || h.repeat);
                    var a = h.getRelativeOffset(o)
                      , c = {
                        el: t,
                        id: e,
                        class: i,
                        top: s + a[0],
                        bottom: n - a[1],
                        offset: o,
                        repeat: l,
                        inView: !1,
                        call: r
                    };
                    h.els.push(c)
                })
            }
        }, {
            key: "updateElements",
            value: function() {
                var o = this;
                this.els.forEach(function(t, e) {
                    var i = t.el.getBoundingClientRect().top + o.instance.scroll.y
                      , s = i + t.el.offsetHeight
                      , n = o.getRelativeOffset(t.offset);
                    o.els[e].top = i + n[0],
                    o.els[e].bottom = s - n[1]
                }),
                this.hasScrollTicking = !1
            }
        }, {
            key: "getRelativeOffset",
            value: function(t) {
                var e = [0, 0];
                if (t)
                    for (var i = 0; i < t.length; i++)
                        "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                return e
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                var i, s = e ? parseInt(e) : 0;
                if ("string" == typeof t) {
                    if ("top" === t)
                        i = this.html;
                    else if ("bottom" === t)
                        i = this.html.offsetHeight - window.innerHeight;
                    else if (!(i = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    i = parseInt(t);
                else {
                    if (!t || !t.tagName)
                        return void console.warn("`targetOption` parameter is not valid");
                    i = t
                }
                s = "number" != typeof i ? i.getBoundingClientRect().top + s + this.instance.scroll.y : i + s,
                window.scrollTo({
                    top: s,
                    behavior: "smooth"
                })
            }
        }, {
            key: "update",
            value: function() {
                this.addElements(),
                this.detectElements()
            }
        }, {
            key: "destroy",
            value: function() {
                u(r(i.prototype), "destroy", this).call(this),
                window.removeEventListener("scroll", this.checkScroll, !1)
            }
        }]),
        i
    }())
      , g = Object.getOwnPropertySymbols
      , w = Object.prototype.hasOwnProperty
      , b = Object.prototype.propertyIsEnumerable;
    var S = function() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, i = 0; i < 10; i++)
                e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            }).join(""))
                return !1;
            var s = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                s[t] = t
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, s, n = function(t) {
            if (null == t)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }(t), o = 1; o < arguments.length; o++) {
            for (var l in i = Object(arguments[o]))
                w.call(i, l) && (n[l] = i[l]);
            if (g) {
                s = g(i);
                for (var r = 0; r < s.length; r++)
                    b.call(i, s[r]) && (n[s[r]] = i[s[r]])
            }
        }
        return n
    }
    ;
    function k() {}
    k.prototype = {
        on: function(t, e, i) {
            var s = this.e || (this.e = {});
            return (s[t] || (s[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            var s = this;
            function n() {
                s.off(t, n),
                e.apply(i, arguments)
            }
            return n._ = e,
            this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++)
                i[s].fn.apply(i[s].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , s = i[t]
              , n = [];
            if (s && e)
                for (var o = 0, l = s.length; o < l; o++)
                    s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
            return n.length ? i[t] = n : delete i[t],
            this
        }
    };
    var T = k
      , E = t(function(t, e) {
        (function() {
            (null !== e ? e : this).Lethargy = function() {
                function t(t, e, i, s) {
                    this.stability = null != t ? Math.abs(t) : 8,
                    this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                    this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
                    this.delay = null != s ? s : 150,
                    this.lastUpDeltas = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this),
                    this.lastDownDeltas = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this),
                    this.deltasTimestamp = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this)
                }
                return t.prototype.check = function(t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    0 < e ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1)) : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
                }
                ,
                t.prototype.isInertia = function(t) {
                    var e, i, s, n, o, l, r;
                    return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability),
                    i = e.slice(this.stability, 2 * this.stability),
                    r = s.reduce(function(t, e) {
                        return t + e
                    }),
                    o = i.reduce(function(t, e) {
                        return t + e
                    }),
                    l = r / s.length,
                    n = o / i.length,
                    Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                }
                ,
                t.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas
                }
                ,
                t.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas
                }
                ,
                t
            }()
        }
        ).call(y)
    })
      , O = {
        hasWheelEvent: "onwheel"in document,
        hasMouseWheelEvent: "onmousewheel"in document,
        hasTouch: "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown"in document,
        isFirefox: -1 < navigator.userAgent.indexOf("Firefox")
    }
      , D = Object.prototype.toString
      , L = Object.prototype.hasOwnProperty;
    function _(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var M = E.Lethargy
      , x = "virtualscroll"
      , C = P
      , j = 37
      , H = 38
      , B = 39
      , Y = 40
      , A = 32;
    function P(t) {
        !function(t) {
            if (!t)
                return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var i in t)
                    L.call(t, i) && "function" == typeof t[i] && "[object Function]" == D.call(t[i]) && e.push(i);
            for (var s = 0; s < e.length; s++) {
                var n = e[s];
                t[n] = _(t[n], t)
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
        this.el = window,
        t && t.el && (this.el = t.el,
        delete t.el),
        this.options = S({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, t),
        this.options.limitInertia && (this._lethargy = new M),
        this._emitter = new T,
        this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        },
        this.touchStartX = null,
        this.touchStartY = null,
        this.bodyTouchAction = null,
        void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        })
    }
    function X(t, e, i) {
        return (1 - i) * t + i * e
    }
    function R(t) {
        var e = {};
        if (window.getComputedStyle) {
            var i = getComputedStyle(t)
              , s = i.transform || i.webkitTransform || i.mozTransform
              , n = s.match(/^matrix3d\((.+)\)$/);
            return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0,
            e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/),
            e.x = n ? parseFloat(n[1].split(", ")[4]) : 0,
            e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
            e
        }
    }
    function I(t) {
        for (var e = []; t && t !== document; t = t.parentNode)
            e.push(t);
        return e
    }
    P.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX,
        e.y += e.deltaY,
        this._emitter.emit(x, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }
    ,
    P.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX,
            i.deltaY = t.wheelDeltaY || -1 * t.deltaY,
            O.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier,
            i.deltaY *= e.firefoxMultiplier),
            i.deltaX *= e.mouseMultiplier,
            i.deltaY *= e.mouseMultiplier,
            this._notify(t)
        }
    }
    ,
    P.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
            e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
            this._notify(t)
        }
    }
    ,
    P.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX,
        this.touchStartY = e.pageY
    }
    ,
    P.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event
          , s = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier,
        i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier,
        this.touchStartX = s.pageX,
        this.touchStartY = s.pageY,
        this._notify(t)
    }
    ,
    P.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
        case j:
        case H:
            e.deltaY = this.options.keyStep;
            break;
        case B:
        case Y:
            e.deltaY = -this.options.keyStep;
            break;
        case t.shiftKey:
            e.deltaY = i;
            break;
        case A:
            e.deltaY = -i;
            break;
        default:
            return
        }
        this._notify(t)
    }
    ,
    P.prototype._bind = function() {
        O.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        O.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
        O.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
        this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
        O.hasPointer && O.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
        document.body.style.msTouchAction = "none",
        this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        O.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }
    ,
    P.prototype._unbind = function() {
        O.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        O.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
        O.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
        this.el.removeEventListener("touchmove", this._onTouchMove)),
        O.hasPointer && O.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
        this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        O.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }
    ,
    P.prototype.on = function(t, e) {
        this._emitter.on(x, t, e);
        var i = this._emitter.e;
        i && i[x] && 1 === i[x].length && this._bind()
    }
    ,
    P.prototype.off = function(t, e) {
        this._emitter.off(x, t, e);
        var i = this._emitter.e;
        (!i[x] || i[x].length <= 0) && this._unbind()
    }
    ,
    P.prototype.reset = function() {
        var t = this._event;
        t.x = 0,
        t.y = 0
    }
    ,
    P.prototype.destroy = function() {
        this._emitter.off(),
        this._unbind()
    }
    ;
    var V = 4
      , F = 1e-7
      , W = 10
      , q = "function" == typeof Float32Array;
    function K(t, e) {
        return 1 - 3 * e + 3 * t
    }
    function z(t, e) {
        return 3 * e - 6 * t
    }
    function N(t) {
        return 3 * t
    }
    function U(t, e, i) {
        return ((K(e, i) * t + z(e, i)) * t + N(e)) * t
    }
    function $(t, e, i) {
        return 3 * K(e, i) * t * t + 2 * z(e, i) * t + N(e)
    }
    function G(t) {
        return t
    }
    var J = function(o, e, l, i) {
        if (!(0 <= o && o <= 1 && 0 <= l && l <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (o === e && l === i)
            return G;
        for (var r = q ? new Float32Array(11) : new Array(11), t = 0; t < 11; ++t)
            r[t] = U(.1 * t, o, l);
        function s(t) {
            for (var e = 0, i = 1; 10 !== i && r[i] <= t; ++i)
                e += .1;
            var s = e + .1 * ((t - r[--i]) / (r[i + 1] - r[i]))
              , n = $(s, o, l);
            return .001 <= n ? function(t, e, i, s) {
                for (var n = 0; n < V; ++n) {
                    var o = $(e, i, s);
                    if (0 === o)
                        return e;
                    e -= (U(e, i, s) - t) / o
                }
                return e
            }(t, s, o, l) : 0 === n ? s : function(t, e, i, s, n) {
                for (var o, l, r = 0; 0 < (o = U(l = e + (i - e) / 2, s, n) - t) ? i = l : e = l,
                Math.abs(o) > F && ++r < W; )
                    ;
                return l
            }(t, e, e + .1, o, l)
        }
        return function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : U(s(t), e, i)
        }
    }
      , Q = 38
      , Z = 40
      , tt = 32
      , et = 9
      , it = 33
      , st = 34
      , nt = 36
      , ot = 35
      , lt = function(t) {
        function n() {
            var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return s(this, n),
            (t = h(this, r(n).call(this, e))).inertia = .1 * t.inertia,
            t.isScrolling = !1,
            t.isDraggingScrollbar = !1,
            t.isTicking = !1,
            t.hasScrollTicking = !1,
            t.parallaxElements = [],
            t.stop = !1,
            t.checkKey = t.checkKey.bind(c(t)),
            window.addEventListener("keydown", t.checkKey, !1),
            t
        }
        return l(n, d),
        o(n, [{
            key: "init",
            value: function() {
                var e = this;
                this.html.classList.add(this.smoothClass),
                this.instance = i({
                    delta: {
                        x: 0,
                        y: 0
                    }
                }, this.instance),
                this.vs = new C({
                    el: this.el,
                    mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0
                }),
                this.vs.on(function(t) {
                    e.stop || (e.isTicking || e.isDraggingScrollbar || (requestAnimationFrame(function() {
                        e.isScrolling || e.startScrolling(),
                        e.updateDelta(t)
                    }),
                    e.isTicking = !0),
                    e.isTicking = !1)
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.transformElements(!0),
                this.checkScroll(!0),
                u(r(n.prototype), "init", this).call(this)
            }
        }, {
            key: "setScrollLimit",
            value: function() {
                this.instance.limit = this.el.offsetHeight - this.windowHeight
            }
        }, {
            key: "startScrolling",
            value: function() {
                this.isScrolling = !0,
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass)
            }
        }, {
            key: "stopScrolling",
            value: function() {
                this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                this.scrollToRaf = null),
                this.isScrolling = !1,
                this.instance.scroll.y = Math.round(this.instance.scroll.y),
                this.html.classList.remove(this.scrollingClass)
            }
        }, {
            key: "checkKey",
            value: function(t) {
                var e = this;
                if (this.stop)
                    t.keyCode == et && requestAnimationFrame(function() {
                        e.html.scrollTop = 0,
                        document.body.scrollTop = 0
                    });
                else {
                    switch (t.keyCode) {
                    case et:
                        requestAnimationFrame(function() {
                            e.html.scrollTop = 0,
                            document.body.scrollTop = 0,
                            e.scrollTo(document.activeElement, -window.innerHeight / 2)
                        });
                        break;
                    case Q:
                        this.instance.delta.y -= 240;
                        break;
                    case Z:
                        this.instance.delta.y += 240;
                        break;
                    case it:
                        this.instance.delta.y -= window.innerHeight;
                        break;
                    case st:
                        this.instance.delta.y += window.innerHeight;
                        break;
                    case nt:
                        this.instance.delta.y -= this.instance.limit;
                        break;
                    case ot:
                        this.instance.delta.y += this.instance.limit;
                        break;
                    case tt:
                        document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta.y -= window.innerHeight : this.instance.delta.y += window.innerHeight);
                        break;
                    default:
                        return
                    }
                    this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                    this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit),
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this;
                if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking || (requestAnimationFrame(function() {
                        return t.checkScroll()
                    }),
                    this.hasScrollTicking = !0);
                    var e = Math.abs(this.instance.delta.y - this.instance.scroll.y);
                    !this.animatingScroll && (e < .5 && 0 != this.instance.delta.y || e < .5 && 0 == this.instance.delta.y) && this.stopScrolling(),
                    this.updateScroll();
                    for (var i = this.sections.length - 1; 0 <= i; i--)
                        this.sections[i].persistent || this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit ? (this.transform(this.sections[i].el, 0, -this.instance.scroll.y),
                        this.sections[i].inView || (this.sections[i].inView = !0,
                        this.sections[i].el.style.opacity = 1,
                        this.sections[i].el.style.pointerEvents = "all",
                        this.sections[i].el.setAttribute("data-".concat(this.name, "-section-inview"), ""))) : (this.sections[i].inView && (this.sections[i].inView = !1,
                        this.sections[i].el.style.opacity = 0,
                        this.sections[i].el.style.pointerEvents = "none",
                        this.sections[i].el.removeAttribute("data-".concat(this.name, "-section-inview"))),
                        this.transform(this.sections[i].el, 0, 0));
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.timestamp = Date.now()),
                    this.detectElements(),
                    this.transformElements();
                    var s = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                    this.transform(this.scrollbarThumb, 0, s),
                    u(r(n.prototype), "checkScroll", this).call(this),
                    this.hasScrollTicking = !1
                }
            }
        }, {
            key: "resize",
            value: function() {
                this.windowHeight = window.innerHeight,
                this.windowMiddle = this.windowHeight / 2,
                this.update()
            }
        }, {
            key: "updateDelta",
            value: function(t) {
                this.instance.delta.y -= t.deltaY,
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit)
            }
        }, {
            key: "updateScroll",
            value: function(t) {
                this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll.y = X(this.instance.scroll.y, this.instance.delta.y, this.inertia) : this.instance.scroll.y > this.instance.limit ? this.setScroll(this.instance.scroll.x, this.instance.limit) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll.x, 0) : this.setScroll(this.instance.scroll.x, this.instance.delta.y)
            }
        }, {
            key: "addDirection",
            value: function() {
                this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
        }, {
            key: "addSpeed",
            value: function() {
                this.instance.delta.y != this.instance.scroll.y ? this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0
            }
        }, {
            key: "initScrollBar",
            value: function() {
                this.scrollbar = document.createElement("span"),
                this.scrollbarThumb = document.createElement("span"),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                this.scrollbar.append(this.scrollbarThumb),
                document.body.append(this.scrollbar),
                this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height,
                this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"),
                this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height,
                this.getScrollBar = this.getScrollBar.bind(this),
                this.releaseScrollBar = this.releaseScrollBar.bind(this),
                this.moveScrollBar = this.moveScrollBar.bind(this),
                this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar)
            }
        }, {
            key: "reinitScrollBar",
            value: function() {
                this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height,
                this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"),
                this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height
            }
        }, {
            key: "destroyScrollBar",
            value: function() {
                this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove()
            }
        }, {
            key: "getScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !0,
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass)
            }
        }, {
            key: "releaseScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !1,
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass)
            }
        }, {
            key: "moveScrollBar",
            value: function(e) {
                var i = this;
                !this.isTicking && this.isDraggingScrollbar && (requestAnimationFrame(function() {
                    var t = 100 * e.clientY / i.scrollbarHeight * i.instance.limit / 100;
                    0 < t && t < i.instance.limit && (i.instance.delta.y = t)
                }),
                this.isTicking = !0),
                this.isTicking = !1
            }
        }, {
            key: "addElements",
            value: function() {
                var k = this;
                this.els = [],
                this.parallaxElements = [],
                this.sections.forEach(function(t, S) {
                    k.sections[S].el.querySelectorAll("[data-".concat(k.name, "]")).forEach(function(t, e) {
                        var i, s, n = t.dataset[k.name + "Class"] || k.class, o = t.dataset[k.name + "Repeat"], l = t.dataset[k.name + "Call"], r = t.dataset[k.name + "Position"], a = t.dataset[k.name + "Delay"], c = t.dataset[k.name + "Direction"], h = "string" == typeof t.dataset[k.name + "Sticky"], u = !!t.dataset[k.name + "Speed"] && parseFloat(t.dataset[k.name + "Speed"]) / 10, f = "string" == typeof t.dataset[k.name + "Offset"] ? t.dataset[k.name + "Offset"].split(",") : k.offset, d = t.dataset[k.name + "Target"];
                        s = void 0 !== d ? document.querySelector("".concat(d)) : t;
                        var p = (i = k.sections[S].inView ? s.getBoundingClientRect().top + k.instance.scroll.y - R(s).y : s.getBoundingClientRect().top - R(k.sections[S].el).y - R(s).y) + s.offsetHeight
                          , y = (p - i) / 2 + i;
                        if (h) {
                            var v = t.getBoundingClientRect().top
                              , m = v - i;
                            i += window.innerHeight,
                            y = ((p = v + s.offsetHeight - t.offsetHeight - m) - i) / 2 + i
                        }
                        o = "false" != o && (null != o || k.repeat);
                        var g = [0, 0];
                        if (f)
                            for (var w = 0; w < f.length; w++)
                                "string" == typeof f[w] ? f[w].includes("%") ? g[w] = parseInt(f[w].replace("%", "") * k.windowHeight / 100) : g[w] = parseInt(f[w]) : g[w] = f[w];
                        var b = {
                            el: t,
                            id: e,
                            class: n,
                            top: i + g[0],
                            middle: y,
                            bottom: p - g[1],
                            offset: f,
                            repeat: o,
                            inView: !1,
                            call: l,
                            speed: u,
                            delay: a,
                            position: r,
                            target: s,
                            direction: c,
                            sticky: h
                        };
                        k.els.push(b),
                        (!1 !== u || h) && k.parallaxElements.push(b)
                    })
                })
            }
        }, {
            key: "addSections",
            value: function() {
                var o = this;
                this.sections = [];
                var t = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                0 === t.length && (t = [this.el]),
                t.forEach(function(t, e) {
                    var i = t.getBoundingClientRect().top - 1.5 * window.innerHeight - R(t).y
                      , s = i + t.getBoundingClientRect().height + 2 * window.innerHeight
                      , n = {
                        el: t,
                        offset: i,
                        limit: s,
                        inView: !1,
                        persistent: "string" == typeof t.dataset[o.name + "Persistent"]
                    };
                    o.sections[e] = n
                })
            }
        }, {
            key: "transform",
            value: function(t, e, i, s) {
                var n;
                if (s) {
                    var o = R(t)
                      , l = X(o.x, e, s)
                      , r = X(o.y, i, s);
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)")
                } else
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                t.style.webkitTransform = n,
                t.style.msTransform = n,
                t.style.transform = n
            }
        }, {
            key: "transformElements",
            value: function(s) {
                var n = this
                  , o = this.instance.scroll.y + this.windowHeight
                  , l = this.instance.scroll.y + this.windowMiddle;
                this.parallaxElements.forEach(function(t, e) {
                    var i = !1;
                    if (s && (i = 0),
                    t.inView)
                        switch (t.position) {
                        case "top":
                            i = n.instance.scroll.y * -t.speed;
                            break;
                        case "elementTop":
                            i = (o - t.top) * -t.speed;
                            break;
                        case "bottom":
                            i = (n.instance.limit - o + n.windowHeight) * t.speed;
                            break;
                        default:
                            i = (l - t.middle) * -t.speed
                        }
                    t.sticky && (i = t.inView ? n.instance.scroll.y - t.top + window.innerHeight : n.instance.scroll.y < t.top - window.innerHeight && n.instance.scroll.y < t.top - window.innerHeight / 2 ? 0 : n.instance.scroll.y > t.bottom && n.instance.scroll.y > t.bottom + 100 && t.bottom - t.top + window.innerHeight),
                    !1 !== i && ("horizontal" === t.direction ? n.transform(t.el, i, 0, !s && t.delay) : n.transform(t.el, 0, i, !s && t.delay))
                })
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                var i, s = this, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1e3, o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [.25, 0, .35, 1], l = e ? parseInt(e) : 0;
                if (o = J.apply(void 0, p(o)),
                "string" == typeof t) {
                    if ("top" === t)
                        i = 0;
                    else if ("bottom" === t)
                        i = this.instance.limit;
                    else if (!(i = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    i = parseInt(t);
                else {
                    if (!t || !t.tagName)
                        return void console.warn("`targetOption` parameter is not valid");
                    i = t
                }
                if ("number" != typeof i) {
                    if (!I(i).includes(this.el))
                        return;
                    var r = i.getBoundingClientRect().top
                      , a = I(i).find(function(e) {
                        return s.sections.find(function(t) {
                            return t.el == e
                        })
                    })
                      , c = 0;
                    a && (c = R(a).y),
                    l = r + l - c
                } else
                    l = i + l;
                var h = parseFloat(this.instance.delta.y)
                  , u = Math.max(0, Math.min(l, this.instance.limit)) - h
                  , f = function(t) {
                    s.instance.delta.y = h + u * t
                };
                this.animatingScroll = !0,
                this.stopScrolling(),
                this.startScrolling();
                var d = Date.now();
                !function t() {
                    var e = (Date.now() - d) / n;
                    1 < e ? (f(1),
                    s.animatingScroll = !1) : (s.scrollToRaf = requestAnimationFrame(t),
                    f(o(e)))
                }()
            }
        }, {
            key: "update",
            value: function() {
                this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0)
            }
        }, {
            key: "startScroll",
            value: function() {
                this.stop = !1
            }
        }, {
            key: "stopScroll",
            value: function() {
                this.stop = !0
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance = i({}, this.instance, {
                    scroll: {
                        x: t,
                        y: e
                    },
                    delta: {
                        x: t,
                        y: e
                    },
                    speed: 0
                })
            }
        }, {
            key: "destroy",
            value: function() {
                u(r(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1)
            }
        }]),
        n
    }();
    return function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            s(this, e),
            this.options = t,
            Object.assign(this, f, t),
            this.init()
        }
        return o(e, [{
            key: "init",
            value: function() {
                if (this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints),
                !0 !== this.smooth || this.isMobile ? this.scroll = new m(this.options) : this.scroll = new lt(this.options),
                this.scroll.init(),
                window.location.hash) {
                    var t = window.location.hash.slice(1, window.location.hash.length)
                      , e = document.getElementById(t);
                    e && this.scroll.scrollTo(e)
                }
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e, i, s) {
                this.scroll.scrollTo(t, e, i, s)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]),
        e
    }()
});

/* Smooth Scrollbar */

!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Scrollbar = n() : t.Scrollbar = n()
}(window, (function() {
    return function(t) {
        var n = {};
        function e(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e),
            o.l = !0,
            o.exports
        }
        return e.m = t,
        e.c = n,
        e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }
        ,
        e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        e.t = function(t, n) {
            if (1 & n && (t = e(t)),
            8 & n)
                return t;
            if (4 & n && "object" == typeof t && t && t.__esModule)
                return t;
            var r = Object.create(null);
            if (e.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }),
            2 & n && "string" != typeof t)
                for (var o in t)
                    e.d(r, o, function(n) {
                        return t[n]
                    }
                    .bind(null, o));
            return r
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }
        ,
        e.p = "",
        e(e.s = 58)
    }([function(t, n, e) {
        var r = e(25)("wks")
          , o = e(16)
          , i = e(2).Symbol
          , u = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }
        ).store = r
    }
    , function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }
    , function(t, n) {
        var e = t.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = e)
    }
    , function(t, n, e) {
        t.exports = !e(13)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(t, n, e) {
        var r = e(2)
          , o = e(3)
          , i = e(11)
          , u = e(6)
          , c = e(10)
          , s = function(t, n, e) {
            var a, f, l, p, h = t & s.F, d = t & s.G, v = t & s.S, y = t & s.P, m = t & s.B, g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, b = d ? o : o[n] || (o[n] = {}), x = b.prototype || (b.prototype = {});
            for (a in d && (e = n),
            e)
                l = ((f = !h && g && void 0 !== g[a]) ? g : e)[a],
                p = m && f ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l,
                g && u(g, a, l, t & s.U),
                b[a] != l && i(b, a, p),
                y && x[a] != l && (x[a] = l)
        };
        r.core = o,
        s.F = 1,
        s.G = 2,
        s.S = 4,
        s.P = 8,
        s.B = 16,
        s.W = 32,
        s.U = 64,
        s.R = 128,
        t.exports = s
    }
    , function(t, n, e) {
        var r = e(2)
          , o = e(11)
          , i = e(9)
          , u = e(16)("src")
          , c = e(60)
          , s = ("" + c).split("toString");
        e(3).inspectSource = function(t) {
            return c.call(t)
        }
        ,
        (t.exports = function(t, n, e, c) {
            var a = "function" == typeof e;
            a && (i(e, "name") || o(e, "name", n)),
            t[n] !== e && (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))),
            t === r ? t[n] = e : c ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n],
            o(t, n, e)))
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && this[u] || c.call(this)
        }
        ))
    }
    , function(t, n, e) {
        var r = e(8)
          , o = e(41)
          , i = e(43)
          , u = Object.defineProperty;
        n.f = e(4) ? Object.defineProperty : function(t, n, e) {
            if (r(t),
            n = i(n, !0),
            r(e),
            o)
                try {
                    return u(t, n, e)
                } catch (t) {}
            if ("get"in e || "set"in e)
                throw TypeError("Accessors not supported!");
            return "value"in e && (t[n] = e.value),
            t
        }
    }
    , function(t, n, e) {
        var r = e(1);
        t.exports = function(t) {
            if (!r(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    }
    , function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n)
        }
    }
    , function(t, n, e) {
        var r = e(44);
        t.exports = function(t, n, e) {
            if (r(t),
            void 0 === n)
                return t;
            switch (e) {
            case 1:
                return function(e) {
                    return t.call(n, e)
                }
                ;
            case 2:
                return function(e, r) {
                    return t.call(n, e, r)
                }
                ;
            case 3:
                return function(e, r, o) {
                    return t.call(n, e, r, o)
                }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    }
    , function(t, n, e) {
        var r = e(7)
          , o = e(17);
        t.exports = e(4) ? function(t, n, e) {
            return r.f(t, n, o(1, e))
        }
        : function(t, n, e) {
            return t[n] = e,
            t
        }
    }
    , function(t, n, e) {
        var r = e(1);
        t.exports = function(t, n) {
            if (!r(t) || t._t !== n)
                throw TypeError("Incompatible receiver, " + n + " required!");
            return t
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }
    , function(t, n) {
        t.exports = {}
    }
    , function(t, n, e) {
        var r = e(10)
          , o = e(49)
          , i = e(50)
          , u = e(8)
          , c = e(19)
          , s = e(51)
          , a = {}
          , f = {};
        (n = t.exports = function(t, n, e, l, p) {
            var h, d, v, y, m = p ? function() {
                return t
            }
            : s(t), g = r(e, l, n ? 2 : 1), b = 0;
            if ("function" != typeof m)
                throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (h = c(t.length); h > b; b++)
                    if ((y = n ? g(u(d = t[b])[0], d[1]) : g(t[b])) === a || y === f)
                        return y
            } else
                for (v = m.call(t); !(d = v.next()).done; )
                    if ((y = o(v, g, d.value, n)) === a || y === f)
                        return y
        }
        ).BREAK = a,
        n.RETURN = f
    }
    , function(t, n) {
        var e = 0
          , r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    }
    , function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }
    , function(t, n, e) {
        var r = e(31)
          , o = e(28);
        t.exports = function(t) {
            return r(o(t))
        }
    }
    , function(t, n, e) {
        var r = e(27)
          , o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }
    , function(t, n, e) {
        var r = e(28);
        t.exports = function(t) {
            return Object(r(t))
        }
    }
    , function(t, n, e) {
        var r = e(16)("meta")
          , o = e(1)
          , i = e(9)
          , u = e(7).f
          , c = 0
          , s = Object.isExtensible || function() {
            return !0
        }
          , a = !e(13)((function() {
            return s(Object.preventExtensions({}))
        }
        ))
          , f = function(t) {
            u(t, r, {
                value: {
                    i: "O" + ++c,
                    w: {}
                }
            })
        }
          , l = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, n) {
                if (!o(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!s(t))
                        return "F";
                    if (!n)
                        return "E";
                    f(t)
                }
                return t[r].i
            },
            getWeak: function(t, n) {
                if (!i(t, r)) {
                    if (!s(t))
                        return !0;
                    if (!n)
                        return !1;
                    f(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return a && l.NEED && s(t) && !i(t, r) && f(t),
                t
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(23)
          , o = {};
        o[e(0)("toStringTag")] = "z",
        o + "" != "[object z]" && e(6)(Object.prototype, "toString", (function() {
            return "[object " + r(this) + "]"
        }
        ), !0)
    }
    , function(t, n, e) {
        var r = e(24)
          , o = e(0)("toStringTag")
          , i = "Arguments" == r(function() {
            return arguments
        }());
        t.exports = function(t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    }
    , function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1)
        }
    }
    , function(t, n, e) {
        var r = e(3)
          , o = e(2)
          , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function(t, n) {
            return i[t] || (i[t] = void 0 !== n ? n : {})
        }
        )("versions", []).push({
            version: r.version,
            mode: e(40) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(t, n, e) {
        "use strict";
        var r = e(61)(!0);
        e(29)(String, "String", (function(t) {
            this._t = String(t),
            this._i = 0
        }
        ), (function() {
            var t, n = this._t, e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        }
        ))
    }
    , function(t, n) {
        var e = Math.ceil
          , r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            if (null == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(40)
          , o = e(5)
          , i = e(6)
          , u = e(11)
          , c = e(14)
          , s = e(62)
          , a = e(33)
          , f = e(68)
          , l = e(0)("iterator")
          , p = !([].keys && "next"in [].keys())
          , h = function() {
            return this
        };
        t.exports = function(t, n, e, d, v, y, m) {
            s(e, n, d);
            var g, b, x, _ = function(t) {
                if (!p && t in O)
                    return O[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new e(this,t)
                    }
                }
                return function() {
                    return new e(this,t)
                }
            }, w = n + " Iterator", S = "values" == v, E = !1, O = t.prototype, T = O[l] || O["@@iterator"] || v && O[v], A = T || _(v), M = v ? S ? _("entries") : A : void 0, P = "Array" == n && O.entries || T;
            if (P && (x = f(P.call(new t))) !== Object.prototype && x.next && (a(x, w, !0),
            r || "function" == typeof x[l] || u(x, l, h)),
            S && T && "values" !== T.name && (E = !0,
            A = function() {
                return T.call(this)
            }
            ),
            r && !m || !p && !E && O[l] || u(O, l, A),
            c[n] = A,
            c[w] = h,
            v)
                if (g = {
                    values: S ? A : _("values"),
                    keys: y ? A : _("keys"),
                    entries: M
                },
                m)
                    for (b in g)
                        b in O || i(O, b, g[b]);
                else
                    o(o.P + o.F * (p || E), n, g);
            return g
        }
    }
    , function(t, n, e) {
        var r = e(64)
          , o = e(46);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }
    , function(t, n, e) {
        var r = e(24);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }
    , function(t, n, e) {
        var r = e(25)("keys")
          , o = e(16);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    }
    , function(t, n, e) {
        var r = e(7).f
          , o = e(9)
          , i = e(0)("toStringTag");
        t.exports = function(t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            })
        }
    }
    , function(t, n, e) {
        for (var r = e(69), o = e(30), i = e(6), u = e(2), c = e(11), s = e(14), a = e(0), f = a("iterator"), l = a("toStringTag"), p = s.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = o(h), v = 0; v < d.length; v++) {
            var y, m = d[v], g = h[m], b = u[m], x = b && b.prototype;
            if (x && (x[f] || c(x, f, p),
            x[l] || c(x, l, m),
            s[m] = p,
            g))
                for (y in r)
                    x[y] || i(x, y, r[y], !0)
        }
    }
    , function(t, n, e) {
        var r = e(6);
        t.exports = function(t, n, e) {
            for (var o in n)
                r(t, o, n[o], e);
            return t
        }
    }
    , function(t, n) {
        t.exports = function(t, n, e, r) {
            if (!(t instanceof n) || void 0 !== r && r in t)
                throw TypeError(e + ": incorrect invocation!");
            return t
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(2)
          , o = e(5)
          , i = e(6)
          , u = e(35)
          , c = e(21)
          , s = e(15)
          , a = e(36)
          , f = e(1)
          , l = e(13)
          , p = e(52)
          , h = e(33)
          , d = e(73);
        t.exports = function(t, n, e, v, y, m) {
            var g = r[t]
              , b = g
              , x = y ? "set" : "add"
              , _ = b && b.prototype
              , w = {}
              , S = function(t) {
                var n = _[t];
                i(_, t, "delete" == t ? function(t) {
                    return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t)
                }
                : "has" == t ? function(t) {
                    return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t)
                }
                : "get" == t ? function(t) {
                    return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                }
                : "add" == t ? function(t) {
                    return n.call(this, 0 === t ? 0 : t),
                    this
                }
                : function(t, e) {
                    return n.call(this, 0 === t ? 0 : t, e),
                    this
                }
                )
            };
            if ("function" == typeof b && (m || _.forEach && !l((function() {
                (new b).entries().next()
            }
            )))) {
                var E = new b
                  , O = E[x](m ? {} : -0, 1) != E
                  , T = l((function() {
                    E.has(1)
                }
                ))
                  , A = p((function(t) {
                    new b(t)
                }
                ))
                  , M = !m && l((function() {
                    for (var t = new b, n = 5; n--; )
                        t[x](n, n);
                    return !t.has(-0)
                }
                ));
                A || ((b = n((function(n, e) {
                    a(n, b, t);
                    var r = d(new g, n, b);
                    return null != e && s(e, y, r[x], r),
                    r
                }
                ))).prototype = _,
                _.constructor = b),
                (T || M) && (S("delete"),
                S("has"),
                y && S("get")),
                (M || O) && S(x),
                m && _.clear && delete _.clear
            } else
                b = v.getConstructor(n, t, y, x),
                u(b.prototype, e),
                c.NEED = !0;
            return h(b, t),
            w[t] = b,
            o(o.G + o.W + o.F * (b != g), w),
            m || v.setStrong(b, t, y),
            b
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(5);
        t.exports = function(t) {
            r(r.S, t, {
                of: function() {
                    for (var t = arguments.length, n = new Array(t); t--; )
                        n[t] = arguments[t];
                    return new this(n)
                }
            })
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(5)
          , o = e(44)
          , i = e(10)
          , u = e(15);
        t.exports = function(t) {
            r(r.S, t, {
                from: function(t) {
                    var n, e, r, c, s = arguments[1];
                    return o(this),
                    (n = void 0 !== s) && o(s),
                    null == t ? new this : (e = [],
                    n ? (r = 0,
                    c = i(s, arguments[2], 2),
                    u(t, !1, (function(t) {
                        e.push(c(t, r++))
                    }
                    ))) : u(t, !1, e.push, e),
                    new this(e))
                }
            })
        }
    }
    , function(t, n) {
        t.exports = !1
    }
    , function(t, n, e) {
        t.exports = !e(4) && !e(13)((function() {
            return 7 != Object.defineProperty(e(42)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(t, n, e) {
        var r = e(1)
          , o = e(2).document
          , i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }
    , function(t, n, e) {
        var r = e(1);
        t.exports = function(t, n) {
            if (!r(t))
                return t;
            var e, o;
            if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t)))
                return o;
            if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t)))
                return o;
            if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }
    , function(t, n, e) {
        var r = e(8)
          , o = e(63)
          , i = e(46)
          , u = e(32)("IE_PROTO")
          , c = function() {}
          , s = function() {
            var t, n = e(42)("iframe"), r = i.length;
            for (n.style.display = "none",
            e(67).appendChild(n),
            n.src = "javascript:",
            (t = n.contentWindow.document).open(),
            t.write("<script>document.F=Object<\/script>"),
            t.close(),
            s = t.F; r--; )
                delete s.prototype[i[r]];
            return s()
        };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (c.prototype = r(t),
            e = new c,
            c.prototype = null,
            e[u] = t) : e = s(),
            void 0 === n ? e : o(e, n)
        }
    }
    , function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(7).f
          , o = e(45)
          , i = e(35)
          , u = e(10)
          , c = e(36)
          , s = e(15)
          , a = e(29)
          , f = e(47)
          , l = e(72)
          , p = e(4)
          , h = e(21).fastKey
          , d = e(12)
          , v = p ? "_s" : "size"
          , y = function(t, n) {
            var e, r = h(n);
            if ("F" !== r)
                return t._i[r];
            for (e = t._f; e; e = e.n)
                if (e.k == n)
                    return e
        };
        t.exports = {
            getConstructor: function(t, n, e, a) {
                var f = t((function(t, r) {
                    c(t, f, n, "_i"),
                    t._t = n,
                    t._i = o(null),
                    t._f = void 0,
                    t._l = void 0,
                    t[v] = 0,
                    null != r && s(r, e, t[a], t)
                }
                ));
                return i(f.prototype, {
                    clear: function() {
                        for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n)
                            r.r = !0,
                            r.p && (r.p = r.p.n = void 0),
                            delete e[r.i];
                        t._f = t._l = void 0,
                        t[v] = 0
                    },
                    delete: function(t) {
                        var e = d(this, n)
                          , r = y(e, t);
                        if (r) {
                            var o = r.n
                              , i = r.p;
                            delete e._i[r.i],
                            r.r = !0,
                            i && (i.n = o),
                            o && (o.p = i),
                            e._f == r && (e._f = o),
                            e._l == r && (e._l = i),
                            e[v]--
                        }
                        return !!r
                    },
                    forEach: function(t) {
                        d(this, n);
                        for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f; )
                            for (r(e.v, e.k, this); e && e.r; )
                                e = e.p
                    },
                    has: function(t) {
                        return !!y(d(this, n), t)
                    }
                }),
                p && r(f.prototype, "size", {
                    get: function() {
                        return d(this, n)[v]
                    }
                }),
                f
            },
            def: function(t, n, e) {
                var r, o, i = y(t, n);
                return i ? i.v = e : (t._l = i = {
                    i: o = h(n, !0),
                    k: n,
                    v: e,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                },
                t._f || (t._f = i),
                r && (r.n = i),
                t[v]++,
                "F" !== o && (t._i[o] = i)),
                t
            },
            getEntry: y,
            setStrong: function(t, n, e) {
                a(t, n, (function(t, e) {
                    this._t = d(t, n),
                    this._k = e,
                    this._l = void 0
                }
                ), (function() {
                    for (var t = this._k, n = this._l; n && n.r; )
                        n = n.p;
                    return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0,
                    f(1))
                }
                ), e ? "entries" : "values", !e, !0),
                l(n)
            }
        }
    }
    , function(t, n, e) {
        var r = e(8);
        t.exports = function(t, n, e, o) {
            try {
                return o ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)),
                n
            }
        }
    }
    , function(t, n, e) {
        var r = e(14)
          , o = e(0)("iterator")
          , i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }
    , function(t, n, e) {
        var r = e(23)
          , o = e(0)("iterator")
          , i = e(14);
        t.exports = e(3).getIteratorMethod = function(t) {
            if (null != t)
                return t[o] || t["@@iterator"] || i[r(t)]
        }
    }
    , function(t, n, e) {
        var r = e(0)("iterator")
          , o = !1;
        try {
            var i = [7][r]();
            i.return = function() {
                o = !0
            }
            ,
            Array.from(i, (function() {
                throw 2
            }
            ))
        } catch (t) {}
        t.exports = function(t, n) {
            if (!n && !o)
                return !1;
            var e = !1;
            try {
                var i = [7]
                  , u = i[r]();
                u.next = function() {
                    return {
                        done: e = !0
                    }
                }
                ,
                i[r] = function() {
                    return u
                }
                ,
                t(i)
            } catch (t) {}
            return e
        }
    }
    , function(t, n) {
        n.f = {}.propertyIsEnumerable
    }
    , function(t, n, e) {
        var r = e(23)
          , o = e(77);
        t.exports = function(t) {
            return function() {
                if (r(this) != t)
                    throw TypeError(t + "#toJSON isn't generic");
                return o(this)
            }
        }
    }
    , function(t, n, e) {
        var r = e(10)
          , o = e(31)
          , i = e(20)
          , u = e(19)
          , c = e(87);
        t.exports = function(t, n) {
            var e = 1 == t
              , s = 2 == t
              , a = 3 == t
              , f = 4 == t
              , l = 6 == t
              , p = 5 == t || l
              , h = n || c;
            return function(n, c, d) {
                for (var v, y, m = i(n), g = o(m), b = r(c, d, 3), x = u(g.length), _ = 0, w = e ? h(n, x) : s ? h(n, 0) : void 0; x > _; _++)
                    if ((p || _ in g) && (y = b(v = g[_], _, m),
                    t))
                        if (e)
                            w[_] = y;
                        else if (y)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return _;
                            case 2:
                                w.push(v)
                            }
                        else if (f)
                            return !1;
                return l ? -1 : a || f ? f : w
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(4)
          , o = e(30)
          , i = e(90)
          , u = e(53)
          , c = e(20)
          , s = e(31)
          , a = Object.assign;
        t.exports = !a || e(13)((function() {
            var t = {}
              , n = {}
              , e = Symbol()
              , r = "abcdefghijklmnopqrst";
            return t[e] = 7,
            r.split("").forEach((function(t) {
                n[t] = t
            }
            )),
            7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r
        }
        )) ? function(t, n) {
            for (var e = c(t), a = arguments.length, f = 1, l = i.f, p = u.f; a > f; )
                for (var h, d = s(arguments[f++]), v = l ? o(d).concat(l(d)) : o(d), y = v.length, m = 0; y > m; )
                    h = v[m++],
                    r && !p.call(d, h) || (e[h] = d[h]);
            return e
        }
        : a
    }
    , function(t, n, e) {
        "use strict";
        (function(t) {
            var e = "object" == typeof t && t && t.Object === Object && t;
            n.a = e
        }
        ).call(this, e(99))
    }
    , function(t, n, e) {
        t.exports = e(100)
    }
    , function(t, n, e) {
        e(22),
        e(26),
        e(34),
        e(71),
        e(76),
        e(78),
        e(79),
        t.exports = e(3).Map
    }
    , function(t, n, e) {
        t.exports = e(25)("native-function-to-string", Function.toString)
    }
    , function(t, n, e) {
        var r = e(27)
          , o = e(28);
        t.exports = function(t) {
            return function(n, e) {
                var i, u, c = String(o(n)), s = r(e), a = c.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(45)
          , o = e(17)
          , i = e(33)
          , u = {};
        e(11)(u, e(0)("iterator"), (function() {
            return this
        }
        )),
        t.exports = function(t, n, e) {
            t.prototype = r(u, {
                next: o(1, e)
            }),
            i(t, n + " Iterator")
        }
    }
    , function(t, n, e) {
        var r = e(7)
          , o = e(8)
          , i = e(30);
        t.exports = e(4) ? Object.defineProperties : function(t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, s = 0; c > s; )
                r.f(t, e = u[s++], n[e]);
            return t
        }
    }
    , function(t, n, e) {
        var r = e(9)
          , o = e(18)
          , i = e(65)(!1)
          , u = e(32)("IE_PROTO");
        t.exports = function(t, n) {
            var e, c = o(t), s = 0, a = [];
            for (e in c)
                e != u && r(c, e) && a.push(e);
            for (; n.length > s; )
                r(c, e = n[s++]) && (~i(a, e) || a.push(e));
            return a
        }
    }
    , function(t, n, e) {
        var r = e(18)
          , o = e(19)
          , i = e(66);
        t.exports = function(t) {
            return function(n, e, u) {
                var c, s = r(n), a = o(s.length), f = i(u, a);
                if (t && e != e) {
                    for (; a > f; )
                        if ((c = s[f++]) != c)
                            return !0
                } else
                    for (; a > f; f++)
                        if ((t || f in s) && s[f] === e)
                            return t || f || 0;
                return !t && -1
            }
        }
    }
    , function(t, n, e) {
        var r = e(27)
          , o = Math.max
          , i = Math.min;
        t.exports = function(t, n) {
            return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
        }
    }
    , function(t, n, e) {
        var r = e(2).document;
        t.exports = r && r.documentElement
    }
    , function(t, n, e) {
        var r = e(9)
          , o = e(20)
          , i = e(32)("IE_PROTO")
          , u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t),
            r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(70)
          , o = e(47)
          , i = e(14)
          , u = e(18);
        t.exports = e(29)(Array, "Array", (function(t, n) {
            this._t = u(t),
            this._i = 0,
            this._k = n
        }
        ), (function() {
            var t = this._t
              , n = this._k
              , e = this._i++;
            return !t || e >= t.length ? (this._t = void 0,
            o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
        }
        ), "values"),
        i.Arguments = i.Array,
        r("keys"),
        r("values"),
        r("entries")
    }
    , function(t, n, e) {
        var r = e(0)("unscopables")
          , o = Array.prototype;
        null == o[r] && e(11)(o, r, {}),
        t.exports = function(t) {
            o[r][t] = !0
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(48)
          , o = e(12);
        t.exports = e(37)("Map", (function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }
        ), {
            get: function(t) {
                var n = r.getEntry(o(this, "Map"), t);
                return n && n.v
            },
            set: function(t, n) {
                return r.def(o(this, "Map"), 0 === t ? 0 : t, n)
            }
        }, r, !0)
    }
    , function(t, n, e) {
        "use strict";
        var r = e(2)
          , o = e(7)
          , i = e(4)
          , u = e(0)("species");
        t.exports = function(t) {
            var n = r[t];
            i && n && !n[u] && o.f(n, u, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , function(t, n, e) {
        var r = e(1)
          , o = e(74).set;
        t.exports = function(t, n, e) {
            var i, u = n.constructor;
            return u !== e && "function" == typeof u && (i = u.prototype) !== e.prototype && r(i) && o && o(t, i),
            t
        }
    }
    , function(t, n, e) {
        var r = e(1)
          , o = e(8)
          , i = function(t, n) {
            if (o(t),
            !r(n) && null !== n)
                throw TypeError(n + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, n, r) {
                try {
                    (r = e(10)(Function.call, e(75).f(Object.prototype, "__proto__").set, 2))(t, []),
                    n = !(t instanceof Array)
                } catch (t) {
                    n = !0
                }
                return function(t, e) {
                    return i(t, e),
                    n ? t.__proto__ = e : r(t, e),
                    t
                }
            }({}, !1) : void 0),
            check: i
        }
    }
    , function(t, n, e) {
        var r = e(53)
          , o = e(17)
          , i = e(18)
          , u = e(43)
          , c = e(9)
          , s = e(41)
          , a = Object.getOwnPropertyDescriptor;
        n.f = e(4) ? a : function(t, n) {
            if (t = i(t),
            n = u(n, !0),
            s)
                try {
                    return a(t, n)
                } catch (t) {}
            if (c(t, n))
                return o(!r.f.call(t, n), t[n])
        }
    }
    , function(t, n, e) {
        var r = e(5);
        r(r.P + r.R, "Map", {
            toJSON: e(54)("Map")
        })
    }
    , function(t, n, e) {
        var r = e(15);
        t.exports = function(t, n) {
            var e = [];
            return r(t, !1, e.push, e, n),
            e
        }
    }
    , function(t, n, e) {
        e(38)("Map")
    }
    , function(t, n, e) {
        e(39)("Map")
    }
    , function(t, n, e) {
        e(22),
        e(26),
        e(34),
        e(81),
        e(82),
        e(83),
        e(84),
        t.exports = e(3).Set
    }
    , function(t, n, e) {
        "use strict";
        var r = e(48)
          , o = e(12);
        t.exports = e(37)("Set", (function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }
        ), {
            add: function(t) {
                return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, r)
    }
    , function(t, n, e) {
        var r = e(5);
        r(r.P + r.R, "Set", {
            toJSON: e(54)("Set")
        })
    }
    , function(t, n, e) {
        e(38)("Set")
    }
    , function(t, n, e) {
        e(39)("Set")
    }
    , function(t, n, e) {
        e(22),
        e(34),
        e(86),
        e(92),
        e(93),
        t.exports = e(3).WeakMap
    }
    , function(t, n, e) {
        "use strict";
        var r, o = e(2), i = e(55)(0), u = e(6), c = e(21), s = e(56), a = e(91), f = e(1), l = e(12), p = e(12), h = !o.ActiveXObject && "ActiveXObject"in o, d = c.getWeak, v = Object.isExtensible, y = a.ufstore, m = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, g = {
            get: function(t) {
                if (f(t)) {
                    var n = d(t);
                    return !0 === n ? y(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
                }
            },
            set: function(t, n) {
                return a.def(l(this, "WeakMap"), t, n)
            }
        }, b = t.exports = e(37)("WeakMap", m, g, a, !0, !0);
        p && h && (s((r = a.getConstructor(m, "WeakMap")).prototype, g),
        c.NEED = !0,
        i(["delete", "has", "get", "set"], (function(t) {
            var n = b.prototype
              , e = n[t];
            u(n, t, (function(n, o) {
                if (f(n) && !v(n)) {
                    this._f || (this._f = new r);
                    var i = this._f[t](n, o);
                    return "set" == t ? this : i
                }
                return e.call(this, n, o)
            }
            ))
        }
        )))
    }
    , function(t, n, e) {
        var r = e(88);
        t.exports = function(t, n) {
            return new (r(t))(n)
        }
    }
    , function(t, n, e) {
        var r = e(1)
          , o = e(89)
          , i = e(0)("species");
        t.exports = function(t) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) || (n = void 0),
            r(n) && null === (n = n[i]) && (n = void 0)),
            void 0 === n ? Array : n
        }
    }
    , function(t, n, e) {
        var r = e(24);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }
    , function(t, n) {
        n.f = Object.getOwnPropertySymbols
    }
    , function(t, n, e) {
        "use strict";
        var r = e(35)
          , o = e(21).getWeak
          , i = e(8)
          , u = e(1)
          , c = e(36)
          , s = e(15)
          , a = e(55)
          , f = e(9)
          , l = e(12)
          , p = a(5)
          , h = a(6)
          , d = 0
          , v = function(t) {
            return t._l || (t._l = new y)
        }
          , y = function() {
            this.a = []
        }
          , m = function(t, n) {
            return p(t.a, (function(t) {
                return t[0] === n
            }
            ))
        };
        y.prototype = {
            get: function(t) {
                var n = m(this, t);
                if (n)
                    return n[1]
            },
            has: function(t) {
                return !!m(this, t)
            },
            set: function(t, n) {
                var e = m(this, t);
                e ? e[1] = n : this.a.push([t, n])
            },
            delete: function(t) {
                var n = h(this.a, (function(n) {
                    return n[0] === t
                }
                ));
                return ~n && this.a.splice(n, 1),
                !!~n
            }
        },
        t.exports = {
            getConstructor: function(t, n, e, i) {
                var a = t((function(t, r) {
                    c(t, a, n, "_i"),
                    t._t = n,
                    t._i = d++,
                    t._l = void 0,
                    null != r && s(r, e, t[i], t)
                }
                ));
                return r(a.prototype, {
                    delete: function(t) {
                        if (!u(t))
                            return !1;
                        var e = o(t);
                        return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i]
                    },
                    has: function(t) {
                        if (!u(t))
                            return !1;
                        var e = o(t);
                        return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i)
                    }
                }),
                a
            },
            def: function(t, n, e) {
                var r = o(i(n), !0);
                return !0 === r ? v(t).set(n, e) : r[t._i] = e,
                t
            },
            ufstore: v
        }
    }
    , function(t, n, e) {
        e(38)("WeakMap")
    }
    , function(t, n, e) {
        e(39)("WeakMap")
    }
    , function(t, n, e) {
        e(26),
        e(95),
        t.exports = e(3).Array.from
    }
    , function(t, n, e) {
        "use strict";
        var r = e(10)
          , o = e(5)
          , i = e(20)
          , u = e(49)
          , c = e(50)
          , s = e(19)
          , a = e(96)
          , f = e(51);
        o(o.S + o.F * !e(52)((function(t) {
            Array.from(t)
        }
        )), "Array", {
            from: function(t) {
                var n, e, o, l, p = i(t), h = "function" == typeof this ? this : Array, d = arguments.length, v = d > 1 ? arguments[1] : void 0, y = void 0 !== v, m = 0, g = f(p);
                if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)),
                null == g || h == Array && c(g))
                    for (e = new h(n = s(p.length)); n > m; m++)
                        a(e, m, y ? v(p[m], m) : p[m]);
                else
                    for (l = g.call(p),
                    e = new h; !(o = l.next()).done; m++)
                        a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
                return e.length = m,
                e
            }
        })
    }
    , function(t, n, e) {
        "use strict";
        var r = e(7)
          , o = e(17);
        t.exports = function(t, n, e) {
            n in t ? r.f(t, n, o(0, e)) : t[n] = e
        }
    }
    , function(t, n, e) {
        e(98),
        t.exports = e(3).Object.assign
    }
    , function(t, n, e) {
        var r = e(5);
        r(r.S + r.F, "Object", {
            assign: e(56)
        })
    }
    , function(t, n) {
        var e;
        e = function() {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }
    , function(t, n, e) {
        "use strict";
        e.r(n);
        var r = {};
        e.r(r),
        e.d(r, "keyboardHandler", (function() {
            return et
        }
        )),
        e.d(r, "mouseHandler", (function() {
            return rt
        }
        )),
        e.d(r, "resizeHandler", (function() {
            return ot
        }
        )),
        e.d(r, "selectHandler", (function() {
            return it
        }
        )),
        e.d(r, "touchHandler", (function() {
            return ut
        }
        )),
        e.d(r, "wheelHandler", (function() {
            return ct
        }
        ));
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var o = function(t, n) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            )(t, n)
        }
          , i = function() {
            return (i = Object.assign || function(t) {
                for (var n, e = 1, r = arguments.length; e < r; e++)
                    for (var o in n = arguments[e])
                        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function u(t, n, e, r) {
            var o, i = arguments.length, u = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, e) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                u = Reflect.decorate(t, n, e, r);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
            return i > 3 && u && Object.defineProperty(n, e, u),
            u
        }
        e(59),
        e(80),
        e(85),
        e(94),
        e(97);
        var c = function(t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n)
        }
          , s = e(57)
          , a = "object" == typeof self && self && self.Object === Object && self
          , f = s.a || a || Function("return this")()
          , l = f.Symbol
          , p = Object.prototype
          , h = p.hasOwnProperty
          , d = p.toString
          , v = l ? l.toStringTag : void 0
          , y = Object.prototype.toString
          , m = l ? l.toStringTag : void 0
          , g = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : m && m in Object(t) ? function(t) {
                var n = h.call(t, v)
                  , e = t[v];
                try {
                    t[v] = void 0;
                    var r = !0
                } catch (t) {}
                var o = d.call(t);
                return r && (n ? t[v] = e : delete t[v]),
                o
            }(t) : function(t) {
                return y.call(t)
            }(t)
        }
          , b = /^\s+|\s+$/g
          , x = /^[-+]0x[0-9a-f]+$/i
          , _ = /^0b[01]+$/i
          , w = /^0o[0-7]+$/i
          , S = parseInt
          , E = function(t) {
            if ("number" == typeof t)
                return t;
            if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return null != t && "object" == typeof t
                }(t) && "[object Symbol]" == g(t)
            }(t))
                return NaN;
            if (c(t)) {
                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = c(n) ? n + "" : n
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(b, "");
            var e = _.test(t);
            return e || w.test(t) ? S(t.slice(2), e ? 2 : 8) : x.test(t) ? NaN : +t
        }
          , O = function(t, n, e) {
            return void 0 === e && (e = n,
            n = void 0),
            void 0 !== e && (e = (e = E(e)) == e ? e : 0),
            void 0 !== n && (n = (n = E(n)) == n ? n : 0),
            function(t, n, e) {
                return t == t && (void 0 !== e && (t = t <= e ? t : e),
                void 0 !== n && (t = t >= n ? t : n)),
                t
            }(E(t), n, e)
        };
        function T(t, n) {
            return void 0 === t && (t = -1 / 0),
            void 0 === n && (n = 1 / 0),
            function(e, r) {
                var o = "_" + r;
                Object.defineProperty(e, r, {
                    get: function() {
                        return this[o]
                    },
                    set: function(e) {
                        Object.defineProperty(this, o, {
                            value: O(e, t, n),
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
        }
        function A(t, n) {
            var e = "_" + n;
            Object.defineProperty(t, n, {
                get: function() {
                    return this[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        value: !!t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    })
                },
                enumerable: !0,
                configurable: !0
            })
        }
        var M = function() {
            return f.Date.now()
        }
          , P = Math.max
          , j = Math.min
          , k = function(t, n, e) {
            var r, o, i, u, s, a, f = 0, l = !1, p = !1, h = !0;
            if ("function" != typeof t)
                throw new TypeError("Expected a function");
            function d(n) {
                var e = r
                  , i = o;
                return r = o = void 0,
                f = n,
                u = t.apply(i, e)
            }
            function v(t) {
                var e = t - a;
                return void 0 === a || e >= n || e < 0 || p && t - f >= i
            }
            function y() {
                var t = M();
                if (v(t))
                    return m(t);
                s = setTimeout(y, function(t) {
                    var e = n - (t - a);
                    return p ? j(e, i - (t - f)) : e
                }(t))
            }
            function m(t) {
                return s = void 0,
                h && r ? d(t) : (r = o = void 0,
                u)
            }
            function g() {
                var t = M()
                  , e = v(t);
                if (r = arguments,
                o = this,
                a = t,
                e) {
                    if (void 0 === s)
                        return function(t) {
                            return f = t,
                            s = setTimeout(y, n),
                            l ? d(t) : u
                        }(a);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(y, n),
                        d(a)
                }
                return void 0 === s && (s = setTimeout(y, n)),
                u
            }
            return n = E(n) || 0,
            c(e) && (l = !!e.leading,
            i = (p = "maxWait"in e) ? P(E(e.maxWait) || 0, n) : i,
            h = "trailing"in e ? !!e.trailing : h),
            g.cancel = function() {
                void 0 !== s && clearTimeout(s),
                f = 0,
                r = a = o = s = void 0
            }
            ,
            g.flush = function() {
                return void 0 === s ? u : m(M())
            }
            ,
            g
        };
        function D() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            return function(n, e, r) {
                var o = r.value;
                return {
                    get: function() {
                        return this.hasOwnProperty(e) || Object.defineProperty(this, e, {
                            value: k.apply(void 0, function() {
                                for (var t = 0, n = 0, e = arguments.length; n < e; n++)
                                    t += arguments[n].length;
                                var r = Array(t)
                                  , o = 0;
                                for (n = 0; n < e; n++)
                                    for (var i = arguments[n], u = 0, c = i.length; u < c; u++,
                                    o++)
                                        r[o] = i[u];
                                return r
                            }([o], t))
                        }),
                        this[e]
                    }
                }
            }
        }
        var L, N = function() {
            function t(t) {
                var n = this;
                void 0 === t && (t = {}),
                this.damping = .1,
                this.thumbMinSize = 20,
                this.renderByPixels = !0,
                this.alwaysShowTracks = !1,
                this.continuousScrolling = !0,
                this.delegateTo = null,
                this.plugins = {},
                Object.keys(t).forEach((function(e) {
                    n[e] = t[e]
                }
                ))
            }
            return Object.defineProperty(t.prototype, "wheelEventTarget", {
                get: function() {
                    return this.delegateTo
                },
                set: function(t) {
                    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),
                    this.delegateTo = t
                },
                enumerable: !0,
                configurable: !0
            }),
            u([T(0, 1)], t.prototype, "damping", void 0),
            u([T(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
            u([A], t.prototype, "renderByPixels", void 0),
            u([A], t.prototype, "alwaysShowTracks", void 0),
            u([A], t.prototype, "continuousScrolling", void 0),
            t
        }(), z = new WeakMap;
        function C() {
            if (void 0 !== L)
                return L;
            var t = !1;
            try {
                var n = function() {}
                  , e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                window.addEventListener("testPassive", n, e),
                window.removeEventListener("testPassive", n, e)
            } catch (t) {}
            return L = !!t && {
                passive: !1
            }
        }
        function R(t) {
            var n = z.get(t) || [];
            return z.set(t, n),
            function(t, e, r) {
                function o(t) {
                    t.defaultPrevented || r(t)
                }
                e.split(/\s+/g).forEach((function(e) {
                    n.push({
                        elem: t,
                        eventName: e,
                        handler: o
                    }),
                    t.addEventListener(e, o, C())
                }
                ))
            }
        }
        function F(t) {
            var n = function(t) {
                return t.touches ? t.touches[t.touches.length - 1] : t
            }(t);
            return {
                x: n.clientX,
                y: n.clientY
            }
        }
        function I(t, n) {
            return void 0 === n && (n = []),
            n.some((function(n) {
                return t === n
            }
            ))
        }
        var W = ["webkit", "moz", "ms", "o"]
          , H = new RegExp("^-(?!(?:" + W.join("|") + ")-)");
        function B(t, n) {
            n = function(t) {
                var n = {};
                return Object.keys(t).forEach((function(e) {
                    if (H.test(e)) {
                        var r = t[e];
                        e = e.replace(/^-/, ""),
                        n[e] = r,
                        W.forEach((function(t) {
                            n["-" + t + "-" + e] = r
                        }
                        ))
                    } else
                        n[e] = t[e]
                }
                )),
                n
            }(n),
            Object.keys(n).forEach((function(e) {
                var r = e.replace(/^-/, "").replace(/-([a-z])/g, (function(t, n) {
                    return n.toUpperCase()
                }
                ));
                t.style[r] = n[e]
            }
            ))
        }
        var G, X = function() {
            function t(t) {
                this.updateTime = Date.now(),
                this.delta = {
                    x: 0,
                    y: 0
                },
                this.velocity = {
                    x: 0,
                    y: 0
                },
                this.lastPosition = {
                    x: 0,
                    y: 0
                },
                this.lastPosition = F(t)
            }
            return t.prototype.update = function(t) {
                var n = this.velocity
                  , e = this.updateTime
                  , r = this.lastPosition
                  , o = Date.now()
                  , i = F(t)
                  , u = {
                    x: -(i.x - r.x),
                    y: -(i.y - r.y)
                }
                  , c = o - e || 16
                  , s = u.x / c * 16
                  , a = u.y / c * 16;
                n.x = .9 * s + .1 * n.x,
                n.y = .9 * a + .1 * n.y,
                this.delta = u,
                this.updateTime = o,
                this.lastPosition = i
            }
            ,
            t
        }(), V = function() {
            function t() {
                this._touchList = {}
            }
            return Object.defineProperty(t.prototype, "_primitiveValue", {
                get: function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.isActive = function() {
                return void 0 !== this._activeTouchID
            }
            ,
            t.prototype.getDelta = function() {
                var t = this._getActiveTracker();
                return t ? i({}, t.delta) : this._primitiveValue
            }
            ,
            t.prototype.getVelocity = function() {
                var t = this._getActiveTracker();
                return t ? i({}, t.velocity) : this._primitiveValue
            }
            ,
            t.prototype.track = function(t) {
                var n = this
                  , e = t.targetTouches;
                return Array.from(e).forEach((function(t) {
                    n._add(t)
                }
                )),
                this._touchList
            }
            ,
            t.prototype.update = function(t) {
                var n = this
                  , e = t.touches
                  , r = t.changedTouches;
                return Array.from(e).forEach((function(t) {
                    n._renew(t)
                }
                )),
                this._setActiveID(r),
                this._touchList
            }
            ,
            t.prototype.release = function(t) {
                var n = this;
                delete this._activeTouchID,
                Array.from(t.changedTouches).forEach((function(t) {
                    n._delete(t)
                }
                ))
            }
            ,
            t.prototype._add = function(t) {
                if (!this._has(t)) {
                    var n = new X(t);
                    this._touchList[t.identifier] = n
                }
            }
            ,
            t.prototype._renew = function(t) {
                this._has(t) && this._touchList[t.identifier].update(t)
            }
            ,
            t.prototype._delete = function(t) {
                delete this._touchList[t.identifier]
            }
            ,
            t.prototype._has = function(t) {
                return this._touchList.hasOwnProperty(t.identifier)
            }
            ,
            t.prototype._setActiveID = function(t) {
                this._activeTouchID = t[t.length - 1].identifier
            }
            ,
            t.prototype._getActiveTracker = function() {
                return this._touchList[this._activeTouchID]
            }
            ,
            t
        }();
        !function(t) {
            t.X = "x",
            t.Y = "y"
        }(G || (G = {}));
        var U = function() {
            function t(t, n) {
                void 0 === n && (n = 0),
                this._direction = t,
                this._minSize = n,
                this.element = document.createElement("div"),
                this.displaySize = 0,
                this.realSize = 0,
                this.offset = 0,
                this.element.className = "scrollbar-thumb scrollbar-thumb-" + t
            }
            return t.prototype.attachTo = function(t) {
                t.appendChild(this.element)
            }
            ,
            t.prototype.update = function(t, n, e) {
                this.realSize = Math.min(n / e, 1) * n,
                this.displaySize = Math.max(this.realSize, this._minSize),
                this.offset = t / e * (n + (this.realSize - this.displaySize)),
                B(this.element, this._getStyle())
            }
            ,
            t.prototype._getStyle = function() {
                switch (this._direction) {
                case G.X:
                    return {
                        width: this.displaySize + "px",
                        "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                    };
                case G.Y:
                    return {
                        height: this.displaySize + "px",
                        "-transform": "translate3d(0, " + this.offset + "px, 0)"
                    };
                default:
                    return null
                }
            }
            ,
            t
        }()
          , Y = function() {
            function t(t, n) {
                void 0 === n && (n = 0),
                this.element = document.createElement("div"),
                this._isShown = !1,
                this.element.className = "scrollbar-track scrollbar-track-" + t,
                this.thumb = new U(t,n),
                this.thumb.attachTo(this.element)
            }
            return t.prototype.attachTo = function(t) {
                t.appendChild(this.element)
            }
            ,
            t.prototype.show = function() {
                this._isShown || (this._isShown = !0,
                this.element.classList.add("show"))
            }
            ,
            t.prototype.hide = function() {
                this._isShown && (this._isShown = !1,
                this.element.classList.remove("show"))
            }
            ,
            t.prototype.update = function(t, n, e) {
                B(this.element, {
                    display: e <= n ? "none" : "block"
                }),
                this.thumb.update(t, n, e)
            }
            ,
            t
        }()
          , q = function() {
            function t(t) {
                this._scrollbar = t;
                var n = t.options.thumbMinSize;
                this.xAxis = new Y(G.X,n),
                this.yAxis = new Y(G.Y,n),
                this.xAxis.attachTo(t.containerEl),
                this.yAxis.attachTo(t.containerEl),
                t.options.alwaysShowTracks && (this.xAxis.show(),
                this.yAxis.show())
            }
            return t.prototype.update = function() {
                var t = this._scrollbar
                  , n = t.size
                  , e = t.offset;
                this.xAxis.update(e.x, n.container.width, n.content.width),
                this.yAxis.update(e.y, n.container.height, n.content.height)
            }
            ,
            t.prototype.autoHideOnIdle = function() {
                this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(),
                this.yAxis.hide())
            }
            ,
            u([D(300)], t.prototype, "autoHideOnIdle", null),
            t
        }()
          , K = new WeakMap;
        function $(t) {
            return Math.pow(t - 1, 3) + 1
        }
        var J, Q, Z, tt = function() {
            function t(t, n) {
                var e = this.constructor;
                this.scrollbar = t,
                this.name = e.pluginName,
                this.options = i(i({}, e.defaultOptions), n)
            }
            return t.prototype.onInit = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t.prototype.onUpdate = function() {}
            ,
            t.prototype.onRender = function(t) {}
            ,
            t.prototype.transformDelta = function(t, n) {
                return i({}, t)
            }
            ,
            t.pluginName = "",
            t.defaultOptions = {},
            t
        }(), nt = {
            order: new Set,
            constructors: {}
        };
        function et(t) {
            var n = R(t)
              , e = t.containerEl;
            n(e, "keydown", (function(n) {
                var r = document.activeElement;
                if ((r === e || e.contains(r)) && !function(t) {
                    return !("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable) && !t.disabled
                }(r)) {
                    var o = function(t, n) {
                        var e = t.size
                          , r = t.limit
                          , o = t.offset;
                        switch (n) {
                        case J.TAB:
                            return function(t) {
                                requestAnimationFrame((function() {
                                    t.scrollIntoView(document.activeElement, {
                                        offsetTop: t.size.container.height / 2,
                                        onlyScrollIfNeeded: !0
                                    })
                                }
                                ))
                            }(t);
                        case J.SPACE:
                            return [0, 200];
                        case J.PAGE_UP:
                            return [0, 40 - e.container.height];
                        case J.PAGE_DOWN:
                            return [0, e.container.height - 40];
                        case J.END:
                            return [0, r.y - o.y];
                        case J.HOME:
                            return [0, -o.y];
                        case J.LEFT:
                            return [-40, 0];
                        case J.UP:
                            return [0, -40];
                        case J.RIGHT:
                            return [40, 0];
                        case J.DOWN:
                            return [0, 40];
                        default:
                            return null
                        }
                    }(t, n.keyCode || n.which);
                    if (o) {
                        var i = o[0]
                          , u = o[1];
                        t.addTransformableMomentum(i, u, n, (function(e) {
                            e ? n.preventDefault() : (t.containerEl.blur(),
                            t.parent && t.parent.containerEl.focus())
                        }
                        ))
                    }
                }
            }
            ))
        }
        function rt(t) {
            var n, e, r, o, i, u = R(t), c = t.containerEl, s = t.track, a = s.xAxis, f = s.yAxis;
            function l(n, e) {
                var r = t.size;
                return n === Q.X ? e / (r.container.width + (a.thumb.realSize - a.thumb.displaySize)) * r.content.width : n === Q.Y ? e / (r.container.height + (f.thumb.realSize - f.thumb.displaySize)) * r.content.height : 0
            }
            function p(t) {
                return I(t, [a.element, a.thumb.element]) ? Q.X : I(t, [f.element, f.thumb.element]) ? Q.Y : void 0
            }
            u(c, "click", (function(n) {
                if (!e && I(n.target, [a.element, f.element])) {
                    var r = n.target
                      , o = p(r)
                      , i = r.getBoundingClientRect()
                      , u = F(n)
                      , c = t.offset
                      , s = t.limit;
                    if (o === Q.X) {
                        var h = u.x - i.left - a.thumb.displaySize / 2;
                        t.setMomentum(O(l(o, h) - c.x, -c.x, s.x - c.x), 0)
                    }
                    o === Q.Y && (h = u.y - i.top - f.thumb.displaySize / 2,
                    t.setMomentum(0, O(l(o, h) - c.y, -c.y, s.y - c.y)))
                }
            }
            )),
            u(c, "mousedown", (function(e) {
                if (I(e.target, [a.thumb.element, f.thumb.element])) {
                    n = !0;
                    var u = e.target
                      , s = F(e)
                      , l = u.getBoundingClientRect();
                    o = p(u),
                    r = {
                        x: s.x - l.left,
                        y: s.y - l.top
                    },
                    i = c.getBoundingClientRect(),
                    B(t.containerEl, {
                        "-user-select": "none"
                    })
                }
            }
            )),
            u(window, "mousemove", (function(u) {
                if (n) {
                    e = !0;
                    var c = t.offset
                      , s = F(u);
                    if (o === Q.X) {
                        var a = s.x - r.x - i.left;
                        t.setPosition(l(o, a), c.y)
                    }
                    o === Q.Y && (a = s.y - r.y - i.top,
                    t.setPosition(c.x, l(o, a)))
                }
            }
            )),
            u(window, "mouseup blur", (function() {
                n = e = !1,
                B(t.containerEl, {
                    "-user-select": ""
                })
            }
            ))
        }
        function ot(t) {
            R(t)(window, "resize", k(t.update.bind(t), 300))
        }
        function it(t) {
            var n, e = R(t), r = t.containerEl, o = t.contentEl, i = t.offset, u = t.limit, c = !1;
            e(window, "mousemove", (function(e) {
                c && (cancelAnimationFrame(n),
                function e(r) {
                    var o = r.x
                      , c = r.y;
                    (o || c) && (t.setMomentum(O(i.x + o, 0, u.x) - i.x, O(i.y + c, 0, u.y) - i.y),
                    n = requestAnimationFrame((function() {
                        e({
                            x: o,
                            y: c
                        })
                    }
                    )))
                }(function(t, n) {
                    var e = t.bounding
                      , r = e.top
                      , o = e.right
                      , i = e.bottom
                      , u = e.left
                      , c = F(n)
                      , s = c.x
                      , a = c.y
                      , f = {
                        x: 0,
                        y: 0
                    };
                    return 0 === s && 0 === a ? f : (s > o - 20 ? f.x = s - o + 20 : s < u + 20 && (f.x = s - u - 20),
                    a > i - 20 ? f.y = a - i + 20 : a < r + 20 && (f.y = a - r - 20),
                    f.x *= 2,
                    f.y *= 2,
                    f)
                }(t, e)))
            }
            )),
            e(o, "selectstart", (function(t) {
                t.stopPropagation(),
                cancelAnimationFrame(n),
                c = !0
            }
            )),
            e(window, "mouseup blur", (function() {
                cancelAnimationFrame(n),
                c = !1
            }
            )),
            e(r, "scroll", (function(t) {
                t.preventDefault(),
                r.scrollTop = r.scrollLeft = 0
            }
            ))
        }
        function ut(t) {
            var n, e = /Android/.test(navigator.userAgent) ? 3 : 2, r = t.options.delegateTo || t.containerEl, o = new V, i = R(t), u = 0;
            i(r, "touchstart", (function(e) {
                o.track(e),
                t.setMomentum(0, 0),
                0 === u && (n = t.options.damping,
                t.options.damping = Math.max(n, .5)),
                u++
            }
            )),
            i(r, "touchmove", (function(n) {
                if (!Z || Z === t) {
                    o.update(n);
                    var e = o.getDelta()
                      , r = e.x
                      , i = e.y;
                    t.addTransformableMomentum(r, i, n, (function(e) {
                        e && (n.preventDefault(),
                        Z = t)
                    }
                    ))
                }
            }
            )),
            i(r, "touchcancel touchend", (function(r) {
                var i = o.getVelocity()
                  , c = {
                    x: 0,
                    y: 0
                };
                Object.keys(i).forEach((function(t) {
                    var r = i[t] / n;
                    c[t] = Math.abs(r) < 50 ? 0 : r * e
                }
                )),
                t.addTransformableMomentum(c.x, c.y, r),
                0 == --u && (t.options.damping = n),
                o.release(r),
                Z = null
            }
            ))
        }
        function ct(t) {
            R(t)(t.options.delegateTo || t.containerEl, "onwheel"in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", (function(n) {
                var e = function(t) {
                    if ("deltaX"in t) {
                        var n = ft(t.deltaMode);
                        return {
                            x: t.deltaX / st.STANDARD * n,
                            y: t.deltaY / st.STANDARD * n
                        }
                    }
                    return "wheelDeltaX"in t ? {
                        x: t.wheelDeltaX / st.OTHERS,
                        y: t.wheelDeltaY / st.OTHERS
                    } : {
                        x: 0,
                        y: t.wheelDelta / st.OTHERS
                    }
                }(n)
                  , r = e.x
                  , o = e.y;
                t.addTransformableMomentum(r, o, n, (function(t) {
                    t && n.preventDefault()
                }
                ))
            }
            ))
        }
        !function(t) {
            t[t.TAB = 9] = "TAB",
            t[t.SPACE = 32] = "SPACE",
            t[t.PAGE_UP = 33] = "PAGE_UP",
            t[t.PAGE_DOWN = 34] = "PAGE_DOWN",
            t[t.END = 35] = "END",
            t[t.HOME = 36] = "HOME",
            t[t.LEFT = 37] = "LEFT",
            t[t.UP = 38] = "UP",
            t[t.RIGHT = 39] = "RIGHT",
            t[t.DOWN = 40] = "DOWN"
        }(J || (J = {})),
        function(t) {
            t[t.X = 0] = "X",
            t[t.Y = 1] = "Y"
        }(Q || (Q = {}));
        var st = {
            STANDARD: 1,
            OTHERS: -3
        }
          , at = [1, 28, 500]
          , ft = function(t) {
            return at[t] || at[0]
        }
          , lt = new Map
          , pt = function() {
            function t(t, n) {
                var e = this;
                this.offset = {
                    x: 0,
                    y: 0
                },
                this.limit = {
                    x: 1 / 0,
                    y: 1 / 0
                },
                this.bounding = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                this._plugins = [],
                this._momentum = {
                    x: 0,
                    y: 0
                },
                this._listeners = new Set,
                this.containerEl = t;
                var r = this.contentEl = document.createElement("div");
                this.options = new N(n),
                t.setAttribute("data-scrollbar", "true"),
                t.setAttribute("tabindex", "-1"),
                B(t, {
                    overflow: "hidden",
                    outline: "none"
                }),
                window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"),
                r.className = "scroll-content",
                Array.from(t.childNodes).forEach((function(t) {
                    r.appendChild(t)
                }
                )),
                t.appendChild(r),
                this.track = new q(this),
                this.size = this.getSize(),
                this._plugins = function(t, n) {
                    return Array.from(nt.order).filter((function(t) {
                        return !1 !== n[t]
                    }
                    )).map((function(e) {
                        var r = new (0,
                        nt.constructors[e])(t,n[e]);
                        return n[e] = r.options,
                        r
                    }
                    ))
                }(this, this.options.plugins);
                var o = t.scrollLeft
                  , i = t.scrollTop;
                t.scrollLeft = t.scrollTop = 0,
                this.setPosition(o, i, {
                    withoutCallbacks: !0
                });
                var u = window
                  , c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver;
                "function" == typeof c && (this._observer = new c((function() {
                    e.update()
                }
                )),
                this._observer.observe(r, {
                    subtree: !0,
                    childList: !0
                })),
                lt.set(t, this),
                requestAnimationFrame((function() {
                    e._init()
                }
                ))
            }
            return Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    for (var t = this.containerEl.parentElement; t; ) {
                        var n = lt.get(t);
                        if (n)
                            return n;
                        t = t.parentElement
                    }
                    return null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "scrollTop", {
                get: function() {
                    return this.offset.y
                },
                set: function(t) {
                    this.setPosition(this.scrollLeft, t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "scrollLeft", {
                get: function() {
                    return this.offset.x
                },
                set: function(t) {
                    this.setPosition(t, this.scrollTop)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.getSize = function() {
                return function(t) {
                    var n = t.containerEl
                      , e = t.contentEl;
                    return {
                        container: {
                            width: n.clientWidth,
                            height: n.clientHeight
                        },
                        content: {
                            width: e.offsetWidth - e.clientWidth + e.scrollWidth,
                            height: e.offsetHeight - e.clientHeight + e.scrollHeight
                        }
                    }
                }(this)
            }
            ,
            t.prototype.update = function() {
                !function(t) {
                    var n = t.getSize()
                      , e = {
                        x: Math.max(n.content.width - n.container.width, 0),
                        y: Math.max(n.content.height - n.container.height, 0)
                    }
                      , r = t.containerEl.getBoundingClientRect()
                      , o = {
                        top: Math.max(r.top, 0),
                        right: Math.min(r.right, window.innerWidth),
                        bottom: Math.min(r.bottom, window.innerHeight),
                        left: Math.max(r.left, 0)
                    };
                    t.size = n,
                    t.limit = e,
                    t.bounding = o,
                    t.track.update(),
                    t.setPosition()
                }(this),
                this._plugins.forEach((function(t) {
                    t.onUpdate()
                }
                ))
            }
            ,
            t.prototype.isVisible = function(t) {
                return function(t, n) {
                    var e = t.bounding
                      , r = n.getBoundingClientRect()
                      , o = Math.max(e.top, r.top)
                      , i = Math.max(e.left, r.left)
                      , u = Math.min(e.right, r.right);
                    return o < Math.min(e.bottom, r.bottom) && i < u
                }(this, t)
            }
            ,
            t.prototype.setPosition = function(t, n, e) {
                var r = this;
                void 0 === t && (t = this.offset.x),
                void 0 === n && (n = this.offset.y),
                void 0 === e && (e = {});
                var o = function(t, n, e) {
                    var r = t.options
                      , o = t.offset
                      , u = t.limit
                      , c = t.track
                      , s = t.contentEl;
                    return r.renderByPixels && (n = Math.round(n),
                    e = Math.round(e)),
                    n = O(n, 0, u.x),
                    e = O(e, 0, u.y),
                    n !== o.x && c.xAxis.show(),
                    e !== o.y && c.yAxis.show(),
                    r.alwaysShowTracks || c.autoHideOnIdle(),
                    n === o.x && e === o.y ? null : (o.x = n,
                    o.y = e,
                    B(s, {
                        "-transform": "translate3d(" + -n + "px, " + -e + "px, 0)"
                    }),
                    c.update(),
                    {
                        offset: i({}, o),
                        limit: i({}, u)
                    })
                }(this, t, n);
                o && !e.withoutCallbacks && this._listeners.forEach((function(t) {
                    t.call(r, o)
                }
                ))
            }
            ,
            t.prototype.scrollTo = function(t, n, e, r) {
                void 0 === t && (t = this.offset.x),
                void 0 === n && (n = this.offset.y),
                void 0 === e && (e = 0),
                void 0 === r && (r = {}),
                function(t, n, e, r, o) {
                    void 0 === r && (r = 0);
                    var i = void 0 === o ? {} : o
                      , u = i.easing
                      , c = void 0 === u ? $ : u
                      , s = i.callback
                      , a = t.options
                      , f = t.offset
                      , l = t.limit;
                    a.renderByPixels && (n = Math.round(n),
                    e = Math.round(e));
                    var p = f.x
                      , h = f.y
                      , d = O(n, 0, l.x) - p
                      , v = O(e, 0, l.y) - h
                      , y = Date.now();
                    cancelAnimationFrame(K.get(t)),
                    function n() {
                        var e = Date.now() - y
                          , o = r ? c(Math.min(e / r, 1)) : 1;
                        if (t.setPosition(p + d * o, h + v * o),
                        e >= r)
                            "function" == typeof s && s.call(t);
                        else {
                            var i = requestAnimationFrame(n);
                            K.set(t, i)
                        }
                    }()
                }(this, t, n, e, r)
            }
            ,
            t.prototype.scrollIntoView = function(t, n) {
                void 0 === n && (n = {}),
                function(t, n, e) {
                    var r = void 0 === e ? {} : e
                      , o = r.alignToTop
                      , i = void 0 === o || o
                      , u = r.onlyScrollIfNeeded
                      , c = void 0 !== u && u
                      , s = r.offsetTop
                      , a = void 0 === s ? 0 : s
                      , f = r.offsetLeft
                      , l = void 0 === f ? 0 : f
                      , p = r.offsetBottom
                      , h = void 0 === p ? 0 : p
                      , d = t.containerEl
                      , v = t.bounding
                      , y = t.offset
                      , m = t.limit;
                    if (n && d.contains(n)) {
                        var g = n.getBoundingClientRect();
                        if (!c || !t.isVisible(n)) {
                            var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
                            t.setMomentum(g.left - v.left - l, O(b, -y.y, m.y - y.y))
                        }
                    }
                }(this, t, n)
            }
            ,
            t.prototype.addListener = function(t) {
                if ("function" != typeof t)
                    throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                this._listeners.add(t)
            }
            ,
            t.prototype.removeListener = function(t) {
                this._listeners.delete(t)
            }
            ,
            t.prototype.addTransformableMomentum = function(t, n, e, r) {
                this._updateDebounced();
                var o = this._plugins.reduce((function(t, n) {
                    return n.transformDelta(t, e) || t
                }
                ), {
                    x: t,
                    y: n
                })
                  , i = !this._shouldPropagateMomentum(o.x, o.y);
                i && this.addMomentum(o.x, o.y),
                r && r.call(this, i)
            }
            ,
            t.prototype.addMomentum = function(t, n) {
                this.setMomentum(this._momentum.x + t, this._momentum.y + n)
            }
            ,
            t.prototype.setMomentum = function(t, n) {
                0 === this.limit.x && (t = 0),
                0 === this.limit.y && (n = 0),
                this.options.renderByPixels && (t = Math.round(t),
                n = Math.round(n)),
                this._momentum.x = t,
                this._momentum.y = n
            }
            ,
            t.prototype.updatePluginOptions = function(t, n) {
                this._plugins.forEach((function(e) {
                    e.name === t && Object.assign(e.options, n)
                }
                ))
            }
            ,
            t.prototype.destroy = function() {
                var t = this.containerEl
                  , n = this.contentEl;
                !function(t) {
                    var n = z.get(t);
                    n && (n.forEach((function(t) {
                        var n = t.elem
                          , e = t.eventName
                          , r = t.handler;
                        n.removeEventListener(e, r, C())
                    }
                    )),
                    z.delete(t))
                }(this),
                this._listeners.clear(),
                this.setMomentum(0, 0),
                cancelAnimationFrame(this._renderID),
                this._observer && this._observer.disconnect(),
                lt.delete(this.containerEl);
                for (var e = Array.from(n.childNodes); t.firstChild; )
                    t.removeChild(t.firstChild);
                e.forEach((function(n) {
                    t.appendChild(n)
                }
                )),
                B(t, {
                    overflow: ""
                }),
                t.scrollTop = this.scrollTop,
                t.scrollLeft = this.scrollLeft,
                this._plugins.forEach((function(t) {
                    t.onDestroy()
                }
                )),
                this._plugins.length = 0
            }
            ,
            t.prototype._init = function() {
                var t = this;
                this.update(),
                Object.keys(r).forEach((function(n) {
                    r[n](t)
                }
                )),
                this._plugins.forEach((function(t) {
                    t.onInit()
                }
                )),
                this._render()
            }
            ,
            t.prototype._updateDebounced = function() {
                this.update()
            }
            ,
            t.prototype._shouldPropagateMomentum = function(t, n) {
                void 0 === t && (t = 0),
                void 0 === n && (n = 0);
                var e = this.options
                  , r = this.offset
                  , o = this.limit;
                if (!e.continuousScrolling)
                    return !1;
                0 === o.x && 0 === o.y && this._updateDebounced();
                var i = O(t + r.x, 0, o.x)
                  , u = O(n + r.y, 0, o.y)
                  , c = !0;
                return (c = (c = c && i === r.x) && u === r.y) && (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
            }
            ,
            t.prototype._render = function() {
                var t = this._momentum;
                if (t.x || t.y) {
                    var n = this._nextTick("x")
                      , e = this._nextTick("y");
                    t.x = n.momentum,
                    t.y = e.momentum,
                    this.setPosition(n.position, e.position)
                }
                var r = i({}, this._momentum);
                this._plugins.forEach((function(t) {
                    t.onRender(r)
                }
                )),
                this._renderID = requestAnimationFrame(this._render.bind(this))
            }
            ,
            t.prototype._nextTick = function(t) {
                var n = this.options
                  , e = this.offset
                  , r = this._momentum
                  , o = e[t]
                  , i = r[t];
                if (Math.abs(i) <= .1)
                    return {
                        momentum: 0,
                        position: o + i
                    };
                var u = i * (1 - n.damping);
                return n.renderByPixels && (u |= 0),
                {
                    momentum: u,
                    position: o + i - u
                }
            }
            ,
            u([D(100, {
                leading: !0
            })], t.prototype, "_updateDebounced", null),
            t
        }()
          , ht = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n"
          , dt = "smooth-scrollbar-style"
          , vt = !1;
        function yt() {
            if (!vt && "undefined" != typeof window) {
                var t = document.createElement("style");
                t.id = dt,
                t.textContent = ht,
                document.head && document.head.appendChild(t),
                vt = !0
            }
        }
        e.d(n, "ScrollbarPlugin", (function() {
            return tt
        }
        ));
        /*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
        var mt = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return function(t, n) {
                function e() {
                    this.constructor = t
                }
                o(t, n),
                t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
                new e)
            }(n, t),
            n.init = function(t, n) {
                if (!t || 1 !== t.nodeType)
                    throw new TypeError("expect element to be DOM Element, but got " + t);
                return yt(),
                lt.has(t) ? lt.get(t) : new pt(t,n)
            }
            ,
            n.initAll = function(t) {
                return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(e) {
                    return n.init(e, t)
                }
                ))
            }
            ,
            n.has = function(t) {
                return lt.has(t)
            }
            ,
            n.get = function(t) {
                return lt.get(t)
            }
            ,
            n.getAll = function() {
                return Array.from(lt.values())
            }
            ,
            n.destroy = function(t) {
                var n = lt.get(t);
                n && n.destroy()
            }
            ,
            n.destroyAll = function() {
                lt.forEach((function(t) {
                    t.destroy()
                }
                ))
            }
            ,
            n.use = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    t.forEach((function(t) {
                        var n = t.pluginName;
                        if (!n)
                            throw new TypeError("plugin name is required");
                        nt.order.add(n),
                        nt.constructors[n] = t
                    }
                    ))
                }
                .apply(void 0, t)
            }
            ,
            n.attachStyle = function() {
                return yt()
            }
            ,
            n.detachStyle = function() {
                return function() {
                    if (vt && "undefined" != typeof window) {
                        var t = document.getElementById(dt);
                        t && t.parentNode && (t.parentNode.removeChild(t),
                        vt = !1)
                    }
                }()
            }
            ,
            n.version = "8.5.0",
            n.ScrollbarPlugin = tt,
            n
        }(pt);
        n.default = mt
    }
    ]).default
}
));

/* Swiper Slider */

/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , ee = "undefined" == typeof window ? {
        document: f,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , l = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function I(e, t) {
        var a = []
          , i = 0;
        if (e && !t && e instanceof l)
            return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"),
                    0 === n.indexOf("<tr") && (o = "tbody"),
                    0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"),
                    0 === n.indexOf("<tbody") && (o = "table"),
                    0 === n.indexOf("<option") && (o = "select"),
                    (r = f.createElement(o)).innerHTML = n,
                    i = 0; i < r.childNodes.length; i += 1)
                        a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])],
                    i = 0; i < s.length; i += 1)
                        s[i] && a.push(s[i])
            } else if (e.nodeType || e === ee || e === f)
                a.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    a.push(e[i]);
        return new l(a)
    }
    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    I.fn = l.prototype,
    I.Class = l,
    I.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length)
                    this[i].setAttribute(e, t);
                else
                    for (var s in e)
                        this[i][s] = e[s],
                        this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)
                    (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                    a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                    return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e,
                a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e,
                a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
              , r = t[1]
              , n = t[2]
              , s = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e),
                    I(t).is(r))
                        n.apply(t, a);
                    else
                        for (var i = I(t).parents(), s = 0; s < i.length; s += 1)
                            I(i[s]).is(r) && n.apply(i[s], a)
                }
            }
            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0],
            n = e[1],
            s = e[2],
            r = void 0),
            s = s || !1;
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
                        u.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: o
                        }),
                        u.addEventListener(h, o, s)
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var v = p[d];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                        u.dom7Listeners[v].push({
                            listener: n,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, s)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
              , s = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0],
            r = e[1],
            n = e[2],
            s = void 0),
            n = n || !1;
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p]
                      , u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
                    u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n),
                            u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n),
                            u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n),
                            u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n]
                      , l = void 0;
                    try {
                        l = new ee.CustomEvent(r,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0),
                        l.detail = i
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }),
                    o.dispatchEvent(l),
                    o.dom7EventData = [],
                    delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function r(e) {
                if (e.target === this)
                    for (t.call(this, e),
                    a = 0; a < i.length; a += 1)
                        s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1)
                    s.on(i[a], r);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , a = f.body
                  , i = e.clientTop || a.clientTop || 0
                  , s = e.clientLeft || a.clientLeft || 0
                  , r = e === ee ? ee.scrollY : e.scrollTop
                  , n = e === ee ? ee.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e)
                            this[a].style[i] = e[i];
                    return this
                }
                if (this[0])
                    return ee.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e)
                return this;
            for (a = 0; a < this.length; a += 1)
                this[a].style[e] = t;
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (t = I(e),
                a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            if (e === f)
                return i === f;
            if (e === ee)
                return i === ee;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e,
                a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild; )
                            this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                        for (var n = 0; n < e.length; n += 1)
                            this[s].appendChild(e[n]);
                    else
                        this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e,
                    a = i.childNodes.length - 1; 0 <= a; a -= 1)
                        this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof l)
                    for (a = 0; a < e.length; a += 1)
                        this[t].insertBefore(e[a], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && I(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new l([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                e ? I(i).is(e) && t.push(i) : t.push(i),
                a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && I(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new l([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                e ? I(i).is(e) && t.push(i) : t.push(i),
                a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                null !== this[a].parentNode && (e ? I(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return I(r(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i; )
                    e ? I(i).is(e) && t.push(i) : t.push(i),
                    i = i.parentNode;
            return I(r(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
                    t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
                    e ? 1 === i[s].nodeType && I(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = I(e[a]);
                for (i = 0; i < s.length; i += 1)
                    this[this.length] = s[i],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? ee.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        I.fn[e] = I.fn[e] || t[e]
    });
    function e(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }
    var a, i, s, n, te = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            var r = ee.getComputedStyle(e, null);
            return ee.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            s = new ee.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = ee.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = ee.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, s, r = {}, n = e || ee.location.href;
            if ("string" == typeof n && n.length)
                for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                t = 0; t < s; t += 1)
                    i = a[t].replace(/#\S+/g, "").split("="),
                    r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s)
                    for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                          , d = Object.getOwnPropertyDescriptor(s, l);
                        void 0 !== d && d.enumerable && (te.isObject(a[l]) && te.isObject(s[l]) ? te.extend(a[l], s[l]) : !te.isObject(a[l]) && te.isObject(s[l]) ? (a[l] = {},
                        te.extend(a[l], s[l])) : a[l] = s[l])
                    }
            }
            return a
        }
    }, ae = (s = f.createElement("div"),
    {
        touch: ee.Modernizr && !0 === ee.Modernizr.touch || !!(0 < ee.navigator.maxTouchPoints || "ontouchstart"in ee || ee.DocumentTouch && f instanceof ee.DocumentTouch),
        pointerEvents: !!(ee.navigator.pointerEnabled || ee.PointerEvent || "maxTouchPoints"in ee.navigator && 0 < ee.navigator.maxTouchPoints),
        prefixedPointerEvents: !!ee.navigator.msPointerEnabled,
        transition: (i = s.style,
        "transition"in i || "webkitTransition"in i || "MozTransition"in i),
        transforms3d: ee.Modernizr && !0 === ee.Modernizr.csstransforms3d || (a = s.style,
        "webkitPerspective"in a || "MozPerspective"in a || "OPerspective"in a || "MsPerspective"in a || "perspective"in a),
        flexbox: function() {
            for (var e = s.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                if (t[a]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in ee || "WebkitMutationObserver"in ee,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                ee.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in ee
    }), ie = {
        isIE: !!ee.navigator.userAgent.match(/Trident/g) || !!ee.navigator.userAgent.match(/MSIE/g),
        isEdge: !!ee.navigator.userAgent.match(/Edge/g),
        isSafari: (n = ee.navigator.userAgent.toLowerCase(),
        0 <= n.indexOf("safari") && n.indexOf("chrome") < 0 && n.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ee.navigator.userAgent)
    }, o = {
        components: {
            configurable: !0
        }
    };
    e.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t)
            return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][s](t)
        }),
        i
    }
    ,
    e.prototype.once = function(a, i, e) {
        var s = this;
        if ("function" != typeof i)
            return s;
        function r() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            i.apply(s, e),
            s.off(a, r),
            r.f7proxy && delete r.f7proxy
        }
        return r.f7proxy = i,
        s.on(a, r, e)
    }
    ,
    e.prototype.off = function(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
                (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1)
            })
        }),
        s
    }
    ,
    e.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && (s = "string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0],
        i = e.slice(1, e.length),
        r) : (a = e[0].events,
        i = e[0].data,
        e[0].context || r),
        (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(s, i)
                })
            }
        })),
        r
    }
    ,
    e.prototype.useModulesParams = function(a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && te.extend(a, t.params)
        })
    }
    ,
    e.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function(e) {
            var a = s.modules[e]
              , t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function(e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }),
            a.on && s.on && Object.keys(a.on).forEach(function(e) {
                s.on(e, a.on[e])
            }),
            a.create && a.create.bind(s)(t)
        })
    }
    ,
    o.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    e.installModule = function(t) {
        for (var e = [], a = arguments.length - 1; 0 < a--; )
            e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + te.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }),
        t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }),
        t.install && t.install.apply(i, e),
        i
    }
    ,
    e.use = function(e) {
        for (var t = [], a = arguments.length - 1; 0 < a--; )
            t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }),
        i) : i.installModule.apply(i, [e].concat(t))
    }
    ,
    Object.defineProperties(e, o);
    var d = {
        updateSize: function() {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth,
            t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight,
            0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            te.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this
              , t = e.params
              , a = e.$wrapperEl
              , i = e.size
              , s = e.rtlTranslate
              , r = e.wrongRTL
              , n = e.virtual && t.virtual.enabled
              , o = n ? e.virtual.slides.length : e.slides.length
              , l = a.children("." + e.params.slideClass)
              , d = n ? e.virtual.slides.length : l.length
              , p = []
              , c = []
              , u = []
              , h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length
              , m = e.snapGrid.length
              , g = t.spaceBetween
              , b = -h
              , w = 0
              , y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i),
                e.virtualSize = -g,
                s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), P = 0; P < d; P += 1) {
                    T = 0;
                    var k = l.eq(P);
                    if (1 < t.slidesPerColumn) {
                        var z = void 0
                          , $ = void 0
                          , I = void 0;
                        if ("column" === t.slidesPerColumnFill || "row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup) {
                            if ("column" === t.slidesPerColumnFill)
                                I = P - ($ = Math.floor(P / S)) * S,
                                (M < $ || $ === M && I === S - 1) && S <= (I += 1) && (I = 0,
                                $ += 1);
                            else {
                                var L = Math.floor(P / t.slidesPerGroup);
                                $ = P - (I = Math.floor(P / t.slidesPerView) - L * t.slidesPerColumn) * t.slidesPerView - L * t.slidesPerView
                            }
                            z = $ + I * x / S,
                            k.css({
                                "-webkit-box-ordinal-group": z,
                                "-moz-box-ordinal-group": z,
                                "-ms-flex-order": z,
                                "-webkit-order": z,
                                order: z
                            })
                        } else
                            $ = P - (I = Math.floor(P / C)) * C;
                        k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", I)
                    }
                    if ("none" !== k.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var D = ee.getComputedStyle(k[0], null)
                              , O = k[0].style.transform
                              , A = k[0].style.webkitTransform;
                            if (O && (k[0].style.transform = "none"),
                            A && (k[0].style.webkitTransform = "none"),
                            t.roundLengths)
                                T = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var H = parseFloat(D.getPropertyValue("width"))
                                  , G = parseFloat(D.getPropertyValue("padding-left"))
                                  , N = parseFloat(D.getPropertyValue("padding-right"))
                                  , B = parseFloat(D.getPropertyValue("margin-left"))
                                  , X = parseFloat(D.getPropertyValue("margin-right"))
                                  , V = D.getPropertyValue("box-sizing");
                                T = V && "border-box" === V && !ie.isIE ? H + B + X : H + G + N + B + X
                            } else {
                                var Y = parseFloat(D.getPropertyValue("height"))
                                  , F = parseFloat(D.getPropertyValue("padding-top"))
                                  , R = parseFloat(D.getPropertyValue("padding-bottom"))
                                  , q = parseFloat(D.getPropertyValue("margin-top"))
                                  , W = parseFloat(D.getPropertyValue("margin-bottom"))
                                  , j = D.getPropertyValue("box-sizing");
                                T = j && "border-box" === j && !ie.isIE ? Y + q + W : Y + F + R + q + W
                            }
                            O && (k[0].style.transform = O),
                            A && (k[0].style.webkitTransform = A),
                            t.roundLengths && (T = Math.floor(T))
                        } else
                            T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                            t.roundLengths && (T = Math.floor(T)),
                            l[P] && (e.isHorizontal() ? l[P].style.width = T + "px" : l[P].style.height = T + "px");
                        l[P] && (l[P].swiperSlideSize = T),
                        u.push(T),
                        t.centeredSlides ? (b = b + T / 2 + w / 2 + g,
                        0 === w && 0 !== P && (b = b - i / 2 - g),
                        0 === P && (b = b - i / 2 - g),
                        Math.abs(b) < .001 && (b = 0),
                        t.roundLengths && (b = Math.floor(b)),
                        y % t.slidesPerGroup == 0 && p.push(b),
                        c.push(b)) : (t.roundLengths && (b = Math.floor(b)),
                        y % t.slidesPerGroup == 0 && p.push(b),
                        c.push(b),
                        b = b + T + g),
                        e.virtualSize += T + g,
                        w = T,
                        y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v,
                s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                ae.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    E = [];
                    for (var U = 0; U < p.length; U += 1) {
                        var K = p[U];
                        t.roundLengths && (K = Math.floor(K)),
                        p[U] < e.virtualSize + p[0] && E.push(K)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var _ = 0; _ < p.length; _ += 1) {
                        var Z = p[_];
                        t.roundLengths && (Z = Math.floor(Z)),
                        p[_] <= e.virtualSize - i && E.push(Z)
                    }
                    p = E,
                    1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                    marginLeft: g + "px"
                }) : l.css({
                    marginRight: g + "px"
                }) : l.css({
                    marginBottom: g + "px"
                })),
                t.centerInsufficientSlides) {
                    var Q = 0;
                    if (u.forEach(function(e) {
                        Q += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }),
                    (Q -= t.spaceBetween) < i) {
                        var J = (i - Q) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - J
                        }),
                        c.forEach(function(e, t) {
                            c[t] = e + J
                        })
                    }
                }
                te.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                d !== o && e.emit("slidesLengthChange"),
                p.length !== f && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                c.length !== m && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, a = this, i = [], s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed),
            "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length)
                        break;
                    i.push(a.slides.eq(r)[0])
                }
            else
                i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                }
            s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , a = t.params
              , i = t.slides
              , s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e),
                i.removeClass(a.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n]
                      , l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset)
                          , p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size - 1 || 1 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(n),
                        i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = I(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , a = t.params
              , i = t.maxTranslate() - t.minTranslate()
              , s = t.progress
              , r = t.isBeginning
              , n = t.isEnd
              , o = r
              , l = n;
            n = 0 == i ? r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0,
            1 <= s),
            te.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }),
            (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            n && !l && t.emit("reachEnd toEdge"),
            (o && !r || l && !n) && t.emit("fromEdge"),
            t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1)
                    void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1),
            p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                te.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }),
                a.emit("activeIndexChange"),
                a.emit("snapIndexChange"),
                l !== u && a.emit("realIndexChange"),
                (a.initialized || a.runCallbacksOnInit) && a.emit("slideChange")
            } else
                t !== d && (a.snapIndex = t,
                a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this
              , a = t.params
              , i = I(e.target).closest("." + a.slideClass)[0]
              , s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1)
                    t.slides[r] === i && (s = !0);
            if (!i || !s)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = i,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(I(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = I(i).index(),
            a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , a = this.rtlTranslate
              , i = this.translate
              , s = this.$wrapperEl;
            if (t.virtualTranslate)
                return a ? -i : i;
            var r = te.getTranslate(s[0], e);
            return a && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var a = this
              , i = a.rtlTranslate
              , s = a.params
              , r = a.$wrapperEl
              , n = a.progress
              , o = 0
              , l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.virtualTranslate || (ae.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
            a.previousTranslate = a.translate,
            a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 == d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
            a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this
              , i = a.activeIndex
              , s = a.params
              , r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n = n || (r < i ? "next" : i < r ? "prev" : "reset"),
            a.emit("transitionStart"),
            e && i !== r) {
                if ("reset" === n)
                    return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),
                "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this
              , i = a.activeIndex
              , s = a.previousIndex;
            a.animating = !1,
            a.setTransition(0);
            var r = t;
            if (r = r || (s < i ? "next" : i < s ? "prev" : "reset"),
            a.emit("transitionEnd"),
            e && i !== s) {
                if ("reset" === r)
                    return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),
                "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var u = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = this
              , r = e;
            r < 0 && (r = 0);
            var n = s.params
              , o = s.snapGrid
              , l = s.slidesGrid
              , d = s.previousIndex
              , p = s.activeIndex
              , c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition)
                return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1),
            (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v),
            n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1)
                    -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
                    return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r)
                    return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset",
            c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r),
            n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== n.effect && s.setTranslate(v),
            "reset" !== h && (s.transitionStart(a, h),
            s.transitionEnd(a, h)),
            !1) : (0 !== t && ae.transition ? (s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a, h),
            s.animating || (s.animating = !0,
            s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                s.onSlideToWrapperTransitionEnd = null,
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(a, h))
            }
            ),
            s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
            s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0),
            s.setTranslate(v),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a, h),
            s.transitionEnd(a, h)),
            !0)
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides),
            this.slideTo(s, t, a, i)
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , r = i.animating;
            return s.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , r = i.animating
              , n = i.snapGrid
              , o = i.slidesGrid
              , l = i.rtlTranslate;
            if (s.loop) {
                if (r)
                    return !1;
                i.loopFix(),
                i._clientLeft = i.$wrapperEl[0].clientLeft
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate), u = n.map(function(e) {
                return d(e)
            }), h = (o.map(function(e) {
                return d(e)
            }),
            n[u.indexOf(c)],
            n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
            i.slideTo(p, e, t, a)
        },
        slideReset: function(e, t, a) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.activeIndex
              , r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate
                  , o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
            if (a.loop) {
                if (t.animating)
                    return;
                e = parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(),
                r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                te.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(),
                r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                te.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else
                t.slideTo(r)
        }
    };
    var h = {
        loopCreate: function() {
            var i = this
              , e = i.params
              , t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = I(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length),
            i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
            i.loopedSlides += e.loopAdditionalSlides,
            i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = []
              , l = [];
            s.each(function(e, t) {
                var a = I(t);
                e < i.loopedSlides && l.push(t),
                e < s.length && e >= s.length - i.loopedSlides && o.push(t),
                a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1)
                t.append(I(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1)
                t.prepend(I(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0,
            t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            if (i < r)
                e = s.length - 3 * r + i,
                e += r,
                t.slideTo(e, 0, !1, !0) && 0 != p && t.setTranslate((d ? -t.translate : t.translate) - p);
            else if ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) {
                e = -s.length + i + r,
                e += r,
                t.slideTo(e, 0, !1, !0) && 0 != p && t.setTranslate((d ? -t.translate : t.translate) - p)
            }
            t.allowSlidePrev = n,
            t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            a.removeAttr("data-swiper-slide-index")
        }
    };
    var v = {
        setGrabCursor: function(e) {
            if (!(ae.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            ae.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var m = {
        appendSlide: function(e) {
            var t = this
              , a = t.$wrapperEl
              , i = t.params;
            if (i.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && a.append(e[s]);
            else
                a.append(e);
            i.loop && t.loopCreate(),
            i.observer && ae.observer || t.update()
        },
        prependSlide: function(e) {
            var t = this
              , a = t.params
              , i = t.$wrapperEl
              , s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    e[n] && i.prepend(e[n]);
                r = s + e.length
            } else
                i.prepend(e);
            a.loop && t.loopCreate(),
            a.observer && ae.observer || t.update(),
            t.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            var a = this
              , i = a.$wrapperEl
              , s = a.params
              , r = a.activeIndex;
            s.loop && (r -= a.loopedSlides,
            a.loopDestroy(),
            a.slides = i.children("." + s.slideClass));
            var n = a.slides.length;
            if (e <= 0)
                a.prependSlide(t);
            else if (n <= e)
                a.appendSlide(t);
            else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(),
                    l.unshift(p)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var c = 0; c < t.length; c += 1)
                        t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r
                } else
                    i.append(t);
                for (var u = 0; u < l.length; u += 1)
                    i.append(l[u]);
                s.loop && a.loopCreate(),
                s.observer && ae.observer || a.update(),
                s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this
              , a = t.params
              , i = t.$wrapperEl
              , s = t.activeIndex;
            a.loop && (s -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    r = e[o],
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < n && (n -= 1);
                n = Math.max(n, 0)
            } else
                r = e,
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1),
                n = Math.max(n, 0);
            a.loop && t.loopCreate(),
            a.observer && ae.observer || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
      , g = function() {
        var e = ee.navigator.userAgent
          , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: ee.cordova || ee.phonegap,
            phonegap: ee.cordova || ee.phonegap
        }
          , a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , s = e.match(/(iPad).*OS\s([\d_]+)/)
          , r = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows",
        t.osVersion = a[2],
        t.windows = !0),
        i && !a && (t.os = "android",
        t.osVersion = i[2],
        t.android = !0,
        t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")),
        (s || n || r) && (t.os = "ios",
        t.ios = !0),
        n && !r && (t.osVersion = n[2].replace(/_/g, "."),
        t.iphone = !0),
        s && (t.osVersion = s[2].replace(/_/g, "."),
        t.ipad = !0),
        r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null,
        t.iphone = !0),
        t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        t.desktop = !(t.os || t.android || t.webView),
        t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var o = t.osVersion.split(".")
              , l = f.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = ee.devicePixelRatio || 1,
        t
    }();
    function b() {
        var e = this
          , t = e.params
          , a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext
              , s = e.allowSlidePrev
              , r = e.snapGrid;
            if (e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            e.allowSlidePrev = s,
            e.allowSlideNext = i,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , y = {
        update: d,
        translate: p,
        transition: c,
        slide: u,
        loop: h,
        grabCursor: v,
        manipulation: m,
        events: {
            attachEvents: function() {
                var e = this
                  , t = e.params
                  , a = e.touchEvents
                  , i = e.el
                  , s = e.wrapperEl;
                e.onTouchStart = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches;
                    if (!t.animating || !i.preventInteractionOnTransition) {
                        var r = e;
                        if (r.originalEvent && (r = r.originalEvent),
                        a.isTouchEvent = "touchstart" === r.type,
                        (a.isTouchEvent || !("which"in r) || 3 !== r.which) && !(!a.isTouchEvent && "button"in r && 0 < r.button || a.isTouched && a.isMoved))
                            if (i.noSwiping && I(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0])
                                t.allowClick = !0;
                            else if (!i.swipeHandler || I(r).closest(i.swipeHandler)[0]) {
                                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX,
                                s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                                var n = s.currentX
                                  , o = s.currentY
                                  , l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
                                  , d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(n <= d || n >= ee.screen.width - d)) {
                                    if (te.extend(a, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }),
                                    s.startX = n,
                                    s.startY = o,
                                    a.touchStartTime = te.now(),
                                    t.allowClick = !0,
                                    t.updateSize(),
                                    t.swipeDirection = void 0,
                                    0 < i.threshold && (a.allowThresholdMove = !1),
                                    "touchstart" !== r.type) {
                                        var p = !0;
                                        I(r.target).is(a.formElements) && (p = !1),
                                        f.activeElement && I(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                        var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && r.preventDefault()
                                    }
                                    t.emit("touchStart", r)
                                }
                            }
                    }
                }
                .bind(e),
                e.onTouchMove = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches
                      , r = t.rtlTranslate
                      , n = e;
                    if (n.originalEvent && (n = n.originalEvent),
                    a.isTouched) {
                        if (!a.isTouchEvent || "mousemove" !== n.type) {
                            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX
                              , l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                            if (n.preventedByNestedSwiper)
                                return s.startX = o,
                                void (s.startY = l);
                            if (!t.allowTouchMove)
                                return t.allowClick = !1,
                                void (a.isTouched && (te.extend(s, {
                                    startX: o,
                                    startY: l,
                                    currentX: o,
                                    currentY: l
                                }),
                                a.touchStartTime = te.now()));
                            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (t.isVertical()) {
                                    if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate())
                                        return a.isTouched = !1,
                                        void (a.isMoved = !1)
                                } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate())
                                    return;
                            if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && I(n.target).is(a.formElements))
                                return a.isMoved = !0,
                                void (t.allowClick = !1);
                            if (a.allowTouchCallbacks && t.emit("touchMove", n),
                            !(n.targetTouches && 1 < n.targetTouches.length)) {
                                s.currentX = o,
                                s.currentY = l;
                                var d = s.currentX - s.startX
                                  , p = s.currentY - s.startY;
                                if (!(t.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(p, 2)) < t.params.threshold)) {
                                    var c;
                                    if (void 0 === a.isScrolling)
                                        t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= d * d + p * p && (c = 180 * Math.atan2(Math.abs(p), Math.abs(d)) / Math.PI,
                                        a.isScrolling = t.isHorizontal() ? c > i.touchAngle : 90 - c > i.touchAngle);
                                    if (a.isScrolling && t.emit("touchMoveOpposite", n),
                                    void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)),
                                    a.isScrolling)
                                        a.isTouched = !1;
                                    else if (a.startMoving) {
                                        t.allowClick = !1,
                                        n.preventDefault(),
                                        i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                                        a.isMoved || (i.loop && t.loopFix(),
                                        a.startTranslate = t.getTranslate(),
                                        t.setTransition(0),
                                        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        a.allowMomentumBounce = !1,
                                        !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                                        t.emit("sliderFirstMove", n)),
                                        t.emit("sliderMove", n),
                                        a.isMoved = !0;
                                        var u = t.isHorizontal() ? d : p;
                                        s.diff = u,
                                        u *= i.touchRatio,
                                        r && (u = -u),
                                        t.swipeDirection = 0 < u ? "prev" : "next",
                                        a.currentTranslate = u + a.startTranslate;
                                        var h = !0
                                          , v = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (v = 0),
                                        0 < u && a.currentTranslate > t.minTranslate() ? (h = !1,
                                        i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1,
                                        i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))),
                                        h && (n.preventedByNestedSwiper = !0),
                                        !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                                        !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                                        0 < i.threshold) {
                                            if (!(Math.abs(u) > i.threshold || a.allowThresholdMove))
                                                return void (a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove)
                                                return a.allowThresholdMove = !0,
                                                s.startX = s.currentX,
                                                s.startY = s.currentY,
                                                a.currentTranslate = a.startTranslate,
                                                void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                        }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(),
                                        t.updateSlidesClasses()),
                                        i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                            position: s[t.isHorizontal() ? "startX" : "startY"],
                                            time: a.touchStartTime
                                        }),
                                        a.velocities.push({
                                            position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                            time: te.now()
                                        })),
                                        t.updateProgress(a.currentTranslate),
                                        t.setTranslate(a.currentTranslate))
                                    }
                                }
                            }
                        }
                    } else
                        a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
                }
                .bind(e),
                e.onTouchEnd = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches
                      , r = t.rtlTranslate
                      , n = t.$wrapperEl
                      , o = t.slidesGrid
                      , l = t.snapGrid
                      , d = e;
                    if (d.originalEvent && (d = d.originalEvent),
                    a.allowTouchCallbacks && t.emit("touchEnd", d),
                    a.allowTouchCallbacks = !1,
                    !a.isTouched)
                        return a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                        a.isMoved = !1,
                        void (a.startMoving = !1);
                    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p, c = te.now(), u = c - a.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(d),
                    t.emit("tap", d),
                    u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout),
                    a.clickTimeout = te.nextTick(function() {
                        t && !t.destroyed && t.emit("click", d)
                    }, 300)),
                    u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
                    t.emit("doubleTap", d))),
                    a.lastClickTime = te.now(),
                    te.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }),
                    !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                        return a.isTouched = !1,
                        a.isMoved = !1,
                        void (a.startMoving = !1);
                    if (a.isTouched = !1,
                    a.isMoved = !1,
                    a.startMoving = !1,
                    p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate,
                    i.freeMode) {
                        if (p < -t.minTranslate())
                            return void t.slideTo(t.activeIndex);
                        if (p > -t.maxTranslate())
                            return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (1 < a.velocities.length) {
                                var h = a.velocities.pop()
                                  , v = a.velocities.pop()
                                  , f = h.position - v.position
                                  , m = h.time - v.time;
                                t.velocity = f / m,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                (150 < m || 300 < te.now() - h.time) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= i.freeModeMomentumVelocityRatio,
                            a.velocities.length = 0;
                            var g = 1e3 * i.freeModeMomentumRatio
                              , b = t.velocity * g
                              , w = t.translate + b;
                            r && (w = -w);
                            var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (w < t.maxTranslate())
                                i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E),
                                y = t.maxTranslate(),
                                T = !0,
                                a.allowMomentumBounce = !0) : w = t.maxTranslate(),
                                i.loop && i.centeredSlides && (x = !0);
                            else if (w > t.minTranslate())
                                i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E),
                                y = t.minTranslate(),
                                T = !0,
                                a.allowMomentumBounce = !0) : w = t.minTranslate(),
                                i.loop && i.centeredSlides && (x = !0);
                            else if (i.freeModeSticky) {
                                for (var S, C = 0; C < l.length; C += 1)
                                    if (l[C] > -w) {
                                        S = C;
                                        break
                                    }
                                w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                            }
                            if (x && t.once("transitionEnd", function() {
                                t.loopFix()
                            }),
                            0 !== t.velocity)
                                g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                            else if (i.freeModeSticky)
                                return void t.slideToClosest();
                            i.freeModeMomentumBounce && T ? (t.updateProgress(y),
                            t.setTransition(g),
                            t.setTranslate(w),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            n.transitionEnd(function() {
                                t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                t.setTransition(i.speed),
                                t.setTranslate(y),
                                n.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(w),
                            t.setTransition(g),
                            t.setTranslate(w),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(w),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else if (i.freeModeSticky)
                            return void t.slideToClosest();
                        (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    } else {
                        for (var M = 0, P = t.slidesSizesGrid[0], k = 0; k < o.length; k += i.slidesPerGroup)
                            void 0 !== o[k + i.slidesPerGroup] ? p >= o[k] && p < o[k + i.slidesPerGroup] && (P = o[(M = k) + i.slidesPerGroup] - o[k]) : p >= o[k] && (M = k,
                            P = o[o.length - 1] - o[o.length - 2]);
                        var z = (p - o[M]) / P;
                        if (u > i.longSwipesMs) {
                            if (!i.longSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                            "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                        } else {
                            if (!i.shortSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup),
                            "prev" === t.swipeDirection && t.slideTo(M)
                        }
                    }
                }
                .bind(e),
                e.onClick = function(e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                .bind(e);
                var r = "container" === t.touchEventsTarget ? i : s
                  , n = !!t.nested;
                if (ae.touch || !ae.pointerEvents && !ae.prefixedPointerEvents) {
                    if (ae.touch) {
                        var o = !("touchstart" !== a.start || !ae.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(a.start, e.onTouchStart, o),
                        r.addEventListener(a.move, e.onTouchMove, ae.passiveListener ? {
                            passive: !1,
                            capture: n
                        } : n),
                        r.addEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !ae.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                    f.addEventListener("mousemove", e.onTouchMove, n),
                    f.addEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    r.addEventListener(a.start, e.onTouchStart, !1),
                    f.addEventListener(a.move, e.onTouchMove, n),
                    f.addEventListener(a.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
            },
            detachEvents: function() {
                var e = this
                  , t = e.params
                  , a = e.touchEvents
                  , i = e.el
                  , s = e.wrapperEl
                  , r = "container" === t.touchEventsTarget ? i : s
                  , n = !!t.nested;
                if (ae.touch || !ae.pointerEvents && !ae.prefixedPointerEvents) {
                    if (ae.touch) {
                        var o = !("onTouchStart" !== a.start || !ae.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(a.start, e.onTouchStart, o),
                        r.removeEventListener(a.move, e.onTouchMove, n),
                        r.removeEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !ae.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                    f.removeEventListener("mousemove", e.onTouchMove, n),
                    f.removeEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    r.removeEventListener(a.start, e.onTouchStart, !1),
                    f.removeEventListener(a.move, e.onTouchMove, n),
                    f.removeEventListener(a.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
                e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this
                  , t = e.activeIndex
                  , a = e.initialized
                  , i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params
                  , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = o || e.originalParams
                          , d = l.direction && l.direction !== s.direction
                          , p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
                        d && a && e.changeDirection(),
                        te.extend(e.params, l),
                        te.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }),
                        e.currentBreakpoint = n,
                        p && a && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - i + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                      , a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }),
                    a.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= ee.innerWidth && (t = s) : s >= ee.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                  , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var t = this.classNames
                  , a = this.params
                  , e = this.rtl
                  , i = this.$el
                  , s = [];
                s.push("initialized"),
                s.push(a.direction),
                a.freeMode && s.push("free-mode"),
                ae.flexbox || s.push("no-flexbox"),
                a.autoHeight && s.push("autoheight"),
                e && s.push("rtl"),
                1 < a.slidesPerColumn && s.push("multirow"),
                g.android && s.push("android"),
                g.ios && s.push("ios"),
                (ie.isIE || ie.isEdge) && (ae.pointerEvents || ae.prefixedPointerEvents) && s.push("wp8-" + a.direction),
                s.forEach(function(e) {
                    t.push(a.containerModifierClass + e)
                }),
                i.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, a, i, s, r) {
                var n;
                function o() {
                    r && r()
                }
                e.complete && s ? o() : t ? ((n = new ee.Image).onload = o,
                n.onerror = o,
                i && (n.sizes = i),
                a && (n.srcset = a),
                t && (n.src = t)) : o()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                    var i = e.imagesToLoad[a];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , x = {}
      , T = function(u) {
        function h() {
            for (var e, t, s, a = [], i = arguments.length; i--; )
                a[i] = arguments[i];
            s = (s = 1 === a.length && a[0].constructor && a[0].constructor === Object ? a[0] : (t = (e = a)[0],
            e[1])) || {},
            s = te.extend({}, s),
            t && !s.el && (s.el = t),
            u.call(this, s),
            Object.keys(y).forEach(function(t) {
                Object.keys(y[t]).forEach(function(e) {
                    h.prototype[e] || (h.prototype[e] = y[t][e])
                })
            });
            var r = this;
            void 0 === r.modules && (r.modules = {}),
            Object.keys(r.modules).forEach(function(e) {
                var t = r.modules[e];
                if (t.params) {
                    var a = Object.keys(t.params)[0]
                      , i = t.params[a];
                    if ("object" != typeof i || null === i)
                        return;
                    if (!(a in s && "enabled"in i))
                        return;
                    !0 === s[a] && (s[a] = {
                        enabled: !0
                    }),
                    "object" != typeof s[a] || "enabled"in s[a] || (s[a].enabled = !0),
                    s[a] || (s[a] = {
                        enabled: !1
                    })
                }
            });
            var n = te.extend({}, w);
            r.useModulesParams(n),
            r.params = te.extend({}, n, x, s),
            r.originalParams = te.extend({}, r.params),
            r.passedParams = te.extend({}, s);
            var o = (r.$ = I)(r.params.el);
            if (t = o[0]) {
                if (1 < o.length) {
                    var l = [];
                    return o.each(function(e, t) {
                        var a = te.extend({}, s, {
                            el: t
                        });
                        l.push(new h(a))
                    }),
                    l
                }
                t.swiper = r,
                o.data("swiper", r);
                var d, p, c = o.children("." + r.params.wrapperClass);
                return te.extend(r, {
                    $el: o,
                    el: t,
                    $wrapperEl: c,
                    wrapperEl: c[0],
                    classNames: [],
                    slides: I(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === r.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === r.params.direction
                    },
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                    rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                    wrongRTL: "-webkit-box" === c.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: (d = ["touchstart", "touchmove", "touchend"],
                    p = ["mousedown", "mousemove", "mouseup"],
                    ae.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : ae.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    r.touchEventsTouch = {
                        start: d[0],
                        move: d[1],
                        end: d[2]
                    },
                    r.touchEventsDesktop = {
                        start: p[0],
                        move: p[1],
                        end: p[2]
                    },
                    ae.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: te.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                r.useModules(),
                r.params.init && r.init(),
                r
            }
        }
        u && (h.__proto__ = u);
        var e = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
            var e = this
              , t = e.params
              , a = e.slides
              , i = e.slidesGrid
              , s = e.size
              , r = e.activeIndex
              , n = 1;
            if (t.centeredSlides) {
                for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
                    a[d] && !o && (n += 1,
                    s < (l += a[d].swiperSlideSize) && (o = !0));
                for (var p = r - 1; 0 <= p; p -= 1)
                    a[p] && !o && (n += 1,
                    s < (l += a[p].swiperSlideSize) && (o = !0))
            } else
                for (var c = r + 1; c < a.length; c += 1)
                    i[c] - i[r] < s && (n += 1);
            return n
        }
        ,
        h.prototype.update = function() {
            var a = this;
            if (a && !a.destroyed) {
                var e = a.snapGrid
                  , t = a.params;
                t.breakpoints && a.setBreakpoint(),
                a.updateSize(),
                a.updateSlides(),
                a.updateProgress(),
                a.updateSlidesClasses(),
                a.params.freeMode ? (i(),
                a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
                t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
                a.emit("update")
            }
            function i() {
                var e = a.rtlTranslate ? -1 * a.translate : a.translate
                  , t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                a.setTranslate(t),
                a.updateActiveIndex(),
                a.updateSlidesClasses()
            }
        }
        ,
        h.prototype.changeDirection = function(a, e) {
            void 0 === e && (e = !0);
            var t = this
              , i = t.params.direction;
            return (a = a || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== a && "vertical" !== a || (t.$el.removeClass("" + t.params.containerModifierClass + i + " wp8-" + i).addClass("" + t.params.containerModifierClass + a),
            (ie.isIE || ie.isEdge) && (ae.pointerEvents || ae.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a),
            t.params.direction = a,
            t.slides.each(function(e, t) {
                "vertical" === a ? t.style.width = "" : t.style.height = ""
            }),
            t.emit("changeDirection"),
            e && t.update()),
            t
        }
        ,
        h.prototype.init = function() {
            var e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        ,
        h.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var a = this
              , i = a.params
              , s = a.$el
              , r = a.$wrapperEl
              , n = a.slides;
            return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"),
            a.initialized = !1,
            a.detachEvents(),
            i.loop && a.loopDestroy(),
            t && (a.removeClasses(),
            s.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            a.emit("destroy"),
            Object.keys(a.eventsListeners).forEach(function(e) {
                a.off(e)
            }),
            !1 !== e && (a.$el[0].swiper = null,
            a.$el.data("swiper", null),
            te.deleteProps(a)),
            a.destroyed = !0),
            null
        }
        ,
        h.extendDefaults = function(e) {
            te.extend(x, e)
        }
        ,
        e.extendedDefaults.get = function() {
            return x
        }
        ,
        e.defaults.get = function() {
            return w
        }
        ,
        e.Class.get = function() {
            return u
        }
        ,
        e.$.get = function() {
            return I
        }
        ,
        Object.defineProperties(h, e),
        h
    }(e)
      , E = {
        name: "device",
        proto: {
            device: g
        },
        static: {
            device: g
        }
    }
      , S = {
        name: "support",
        proto: {
            support: ae
        },
        static: {
            support: ae
        }
    }
      , C = {
        name: "browser",
        proto: {
            browser: ie
        },
        static: {
            browser: ie
        }
    }
      , M = {
        name: "resize",
        create: function() {
            var e = this;
            te.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                ee.addEventListener("resize", this.resize.resizeHandler),
                ee.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                ee.removeEventListener("resize", this.resize.resizeHandler),
                ee.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , P = {
        func: ee.MutationObserver || ee.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = this
              , i = new P.func(function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        a.emit("observerUpdate", e[0])
                    };
                    ee.requestAnimationFrame ? ee.requestAnimationFrame(t) : ee.setTimeout(t, 0)
                } else
                    a.emit("observerUpdate", e[0])
            }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            a.observer.observers.push(i)
        },
        init: function() {
            var e = this;
            if (ae.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , k = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            te.extend(this, {
                observer: {
                    init: P.init.bind(this),
                    attach: P.attach.bind(this),
                    destroy: P.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , z = {
        update: function(e) {
            var t = this
              , a = t.params
              , i = a.slidesPerView
              , s = a.slidesPerGroup
              , r = a.centeredSlides
              , n = t.params.virtual
              , o = n.addSlidesBefore
              , l = n.addSlidesAfter
              , d = t.virtual
              , p = d.from
              , c = d.to
              , u = d.slides
              , h = d.slidesGrid
              , v = d.renderSlide
              , f = d.offset;
            t.updateActiveIndex();
            var m, g, b, w = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            b = r ? (g = Math.floor(i / 2) + s + o,
            Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o,
            s + l);
            var y = Math.max((w || 0) - b, 0)
              , x = Math.min((w || 0) + g, u.length - 1)
              , T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
            function E() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (te.extend(t.virtual, {
                from: y,
                to: x,
                offset: T,
                slidesGrid: t.slidesGrid
            }),
            p === y && c === x && !e)
                return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function() {
                        for (var e = [], t = y; t <= x; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void E();
            var S = []
              , C = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var M = p; M <= c; M += 1)
                    (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
            for (var P = 0; P < u.length; P += 1)
                y <= P && P <= x && (void 0 === c || e ? C.push(P) : (c < P && C.push(P),
                P < p && S.push(P)));
            C.forEach(function(e) {
                t.$wrapperEl.append(v(u[e], e))
            }),
            S.sort(function(e, t) {
                return t - e
            }).forEach(function(e) {
                t.$wrapperEl.prepend(v(u[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
            E()
        },
        renderSlide: function(e, t) {
            var a = this
              , i = a.params.virtual;
            if (i.cache && a.virtual.cache[t])
                return a.virtual.cache[t];
            var s = i.renderSlide ? I(i.renderSlide.call(a, e, t)) : I('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (a.virtual.cache[t] = s),
            s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this
              , a = t.activeIndex
              , i = a + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && t.virtual.slides.unshift(e[r]);
                i = a + e.length,
                s = e.length
            } else
                t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                var n = t.virtual.cache
                  , o = {};
                Object.keys(n).forEach(function(e) {
                    o[parseInt(e, 10) + s] = n[e]
                }),
                t.virtual.cache = o
            }
            t.virtual.update(!0),
            t.slideTo(i, 0)
        },
        removeSlide: function(e) {
            var t = this;
            if (null != e) {
                var a = t.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; 0 <= i; i -= 1)
                        t.virtual.slides.splice(e[i], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[i]],
                        e[i] < a && (a -= 1),
                        a = Math.max(a, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < a && (a -= 1),
                    a = Math.max(a, 0);
                t.virtual.update(!0),
                t.slideTo(a, 0)
            }
        },
        removeAllSlides: function() {
            var e = this;
            e.virtual.slides = [],
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0)
        }
    }
      , $ = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                virtual: {
                    update: z.update.bind(e),
                    appendSlide: z.appendSlide.bind(e),
                    prependSlide: z.prependSlide.bind(e),
                    removeSlide: z.removeSlide.bind(e),
                    removeAllSlides: z.removeAllSlides.bind(e),
                    renderSlide: z.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    te.extend(e.params, t),
                    te.extend(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , L = {
        handle: function(e) {
            var t = this
              , a = t.rtlTranslate
              , i = e;
            i.originalEvent && (i = i.originalEvent);
            var s = i.keyCode || i.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s || 34 === s))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s || 33 === s))
                return !1;
            if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                    var r = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var n = ee.innerWidth
                      , o = ee.innerHeight
                      , l = t.$el.offset();
                    a && (l.left -= t.$el[0].scrollLeft);
                    for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                        var c = d[p];
                        0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                    }
                    if (!r)
                        return
                }
                t.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                (34 !== s && 39 !== s || a) && (33 !== s && 37 !== s || !a) || t.slideNext(),
                (33 !== s && 37 !== s || a) && (34 !== s && 39 !== s || !a) || t.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                34 !== s && 40 !== s || t.slideNext(),
                33 !== s && 38 !== s || t.slidePrev()),
                t.emit("keyPress", s)
            }
        },
        enable: function() {
            this.keyboard.enabled || (I(f).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (I(f).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , D = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            te.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: L.enable.bind(this),
                    disable: L.disable.bind(this),
                    handle: L.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var O = {
        lastScrollTime: te.now(),
        event: -1 < ee.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
            var e = "onwheel"
              , t = e in f;
            if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"),
                t = "function" == typeof a[e]
            }
            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , a = 0
              , i = 0
              , s = 0;
            return "detail"in e && (a = e.detail),
            "wheelDelta"in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = a,
            a = 0),
            i = 10 * t,
            s = 10 * a,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (i = e.deltaX),
            (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
            s *= 40) : (i *= 800,
            s *= 800)),
            i && !t && (t = i < 1 ? -1 : 1),
            s && !a && (a = s < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , a = this
              , i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0
              , r = a.rtlTranslate ? -1 : 1
              , n = O.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                        return !0;
                    s = n.pixelX * r
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                        return !0;
                    s = n.pixelY
                }
            else
                s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s)
                return !0;
            if (i.invert && (s = -s),
            a.params.freeMode) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity
                  , l = a.isBeginning
                  , d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()),
                o <= a.maxTranslate() && (o = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(o),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                a.mousewheel.timeout = te.nextTick(function() {
                    a.slideToClosest()
                }, 300)),
                a.emit("scroll", t),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                o === a.minTranslate() || o === a.maxTranslate())
                    return !0
            } else {
                if (60 < te.now() - a.mousewheel.lastScrollTime)
                    if (s < 0)
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                            a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                        a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new ee.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        enable: function() {
            var e = this;
            if (!O.event)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = I(e.params.mousewheel.eventsTarged)),
            t.on("mouseenter", e.mousewheel.handleMouseEnter),
            t.on("mouseleave", e.mousewheel.handleMouseLeave),
            t.on(O.event, e.mousewheel.handle),
            e.mousewheel.enabled = !0
        },
        disable: function() {
            var e = this;
            if (!O.event)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = I(e.params.mousewheel.eventsTarged)),
            t.off(O.event, e.mousewheel.handle),
            !(e.mousewheel.enabled = !1)
        }
    }
      , A = {
        update: function() {
            var e = this
              , t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation
                  , i = a.$nextEl
                  , s = a.$prevEl;
                s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = I(i.nextEl),
            a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
            i.prevEl && (t = I(i.prevEl),
            a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", a.navigation.onNextClick),
            t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
            te.extend(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this
              , t = e.navigation
              , a = t.$nextEl
              , i = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)),
            i && i.length && (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass))
        }
    }
      , H = {
        update: function() {
            var e = this
              , t = e.rtl
              , s = e.params.pagination;
            if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                n - 1 < r && (r -= n),
                r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, p = e.pagination.bullets;
                    if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                    1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex,
                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    o = r - e.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2),
                    p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"),
                    1 < i.length)
                        p.each(function(e, t) {
                            var a = I(t)
                              , i = a.index();
                            i === r && a.addClass(s.bulletActiveClass),
                            s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"),
                            i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                            i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                    else if (p.eq(r).addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)
                            p.eq(h).addClass(s.bulletActiveClass + "-main");
                        c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                        u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var v = Math.min(p.length, s.dynamicMainBullets + 4)
                          , f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                          , m = t ? "right" : "left";
                        p.css(e.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)),
                i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
                "progressbar" === s.type) {
                    var g;
                    g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var b = (r + 1) / n
                      , w = 1
                      , y = 1;
                    "horizontal" === g ? w = b : y = b,
                    i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)),
                e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , i = e.pagination.$el
                  , s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                    e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var a = this
              , e = a.params.pagination;
            if (e.el) {
                var t = I(e.el);
                0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)),
                "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                t.addClass(e.modifierClass + e.type),
                "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
                a.pagination.dynamicBulletIndex = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                    e.preventDefault();
                    var t = I(this).index() * a.params.slidesPerGroup;
                    a.params.loop && (t += a.loopedSlides),
                    a.slideTo(t)
                }),
                te.extend(a.pagination, {
                    $el: t,
                    el: t[0]
                }))
            }
        },
        destroy: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass),
                a.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }
      , G = {
        setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.rtlTranslate
                  , i = e.progress
                  , s = t.dragSize
                  , r = t.trackSize
                  , n = t.$dragEl
                  , o = t.$el
                  , l = e.params.scrollbar
                  , d = s
                  , p = (r - s) * i;
                a ? 0 < (p = -p) ? (d = s - p,
                p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p,
                p = 0) : r < p + s && (d = r - p),
                e.isHorizontal() ? (ae.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"),
                n[0].style.width = d + "px") : (ae.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"),
                n[0].style.height = d + "px"),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                o[0].style.opacity = 1,
                e.scrollbar.timeout = setTimeout(function() {
                    o[0].style.opacity = 0,
                    o.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , a = t.$dragEl
                  , i = t.$el;
                a[0].style.width = "",
                a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px",
                i[0].style.display = 1 <= n ? "none" : "",
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                te.extend(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                }),
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
        },
        setDragPosition: function(e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize, l = i.dragStartPos;
            t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== l ? l : n / 2)) / (o - n),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(d),
            a.setTranslate(d),
            a.updateActiveIndex(),
            a.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar
              , s = t.$wrapperEl
              , r = i.$el
              , n = i.$dragEl;
            t.scrollbar.isTouched = !0,
            t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            n.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            r.transition(0),
            a.hide && r.css("opacity", 1),
            t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , a = this.$wrapperEl
              , i = t.$el
              , s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            a.transition(0),
            i.transition(0),
            s.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
            t.scrollbar.dragTimeout = te.nextTick(function() {
                i.css("opacity", 0),
                i.transition(400)
            }, 1e3)),
            t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideToClosest())
        },
        enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.touchEventsTouch
                  , i = e.touchEventsDesktop
                  , s = e.params
                  , r = t.$el[0]
                  , n = !(!ae.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!ae.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                ae.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n),
                r.addEventListener(a.move, e.scrollbar.onDragMove, n),
                r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n),
                f.addEventListener(i.move, e.scrollbar.onDragMove, n),
                f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.touchEventsTouch
                  , i = e.touchEventsDesktop
                  , s = e.params
                  , r = t.$el[0]
                  , n = !(!ae.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!ae.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                ae.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n),
                r.removeEventListener(a.move, e.scrollbar.onDragMove, n),
                r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n),
                f.removeEventListener(i.move, e.scrollbar.onDragMove, n),
                f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.$el
                  , i = e.params.scrollbar
                  , s = I(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = I('<div class="' + e.params.scrollbar.dragClass + '"></div>'),
                s.append(r)),
                te.extend(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && t.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , N = {
        setTransform: function(e, t) {
            var a = this.rtl
              , i = I(e)
              , s = a ? -1 : 1
              , r = i.attr("data-swiper-parallax") || "0"
              , n = i.attr("data-swiper-parallax-x")
              , o = i.attr("data-swiper-parallax-y")
              , l = i.attr("data-swiper-parallax-scale")
              , d = i.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0",
            o = o || "0") : this.isHorizontal() ? (n = r,
            o = "0") : (o = r,
            n = "0"),
            n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px",
            o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p
            }
            if (null == l)
                i.transform("translate3d(" + n + ", " + o + ", 0px)");
            else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var i = this
              , e = i.$el
              , t = i.slides
              , s = i.progress
              , r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, t) {
                i.parallax.setTransform(t, s)
            }),
            t.each(function(e, t) {
                var a = t.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)),
                a = Math.min(Math.max(a, -1), 1),
                I(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, t) {
                    i.parallax.setTransform(t, a)
                })
            })
        },
        setTransition: function(s) {
            void 0 === s && (s = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, t) {
                var a = I(t)
                  , i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                0 === s && (i = 0),
                a.transition(i)
            })
        }
    }
      , B = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , a = e.targetTouches[0].pageY
              , i = e.targetTouches[1].pageX
              , s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        },
        onGestureStart: function(e) {
            var t = this
              , a = t.params.zoom
              , i = t.zoom
              , s = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !ae.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                s.scaleStart = B.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = I(e.target).closest(".swiper-slide"),
            0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
            s.$imageEl = s.$slideEl.find("img, svg, canvas"),
            s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass),
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0),
            t.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , a = this.zoom
              , i = a.gesture;
            if (!ae.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                a.fakeGestureMoved = !0,
                i.scaleMove = B.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = ae.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale,
            a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)),
            a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)),
            i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , a = this.zoom
              , i = a.gesture;
            if (!ae.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android)
                    return;
                a.fakeGestureTouched = !1,
                a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio),
            i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
            a.currentScale = a.scale,
            a.isScaling = !1,
            1 === a.scale && (i.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , a = t.gesture
              , i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(),
            i.isTouched = !0,
            i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this
              , a = t.zoom
              , i = a.gesture
              , s = a.image
              , r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = te.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = te.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var n = s.width * a.scale
                  , o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = s.touchesCurrent.x,
                    r.prevPositionY = s.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , a = e.image
              , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved)
                    return a.isTouched = !1,
                    void (a.isMoved = !1);
                a.isTouched = !1,
                a.isMoved = !1;
                var s = 300
                  , r = 300
                  , n = i.x * s
                  , o = a.currentX + n
                  , l = i.y * r
                  , d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o,
                a.currentY = d;
                var c = a.width * e.scale
                  , u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                a.maxX = -a.minX,
                a.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
                a.maxY = -a.minY,
                a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture, x = b.image;
            y.$slideEl || (y.$slideEl = g.clickedSlide ? I(g.clickedSlide) : g.slides.eq(g.activeIndex),
            y.$imageEl = y.$slideEl.find("img, svg, canvas"),
            y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)),
            y.$imageEl && 0 !== y.$imageEl.length && (y.$slideEl.addClass("" + w.zoomedSlideClass),
            a = void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x,
            x.touchesStart.y),
            b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            e ? (f = y.$slideEl[0].offsetWidth,
            m = y.$slideEl[0].offsetHeight,
            i = y.$slideEl.offset().left + f / 2 - t,
            s = y.$slideEl.offset().top + m / 2 - a,
            o = y.$imageEl[0].offsetWidth,
            l = y.$imageEl[0].offsetHeight,
            d = o * b.scale,
            p = l * b.scale,
            h = -(c = Math.min(f / 2 - d / 2, 0)),
            v = -(u = Math.min(m / 2 - p / 2, 0)),
            (r = i * b.scale) < c && (r = c),
            h < r && (r = h),
            (n = s * b.scale) < u && (n = u),
            v < n && (n = v)) : n = r = 0,
            y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        },
        out: function() {
            var e = this
              , t = e.zoom
              , a = e.params.zoom
              , i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? I(e.clickedSlide) : e.slides.eq(e.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
            t.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this
              , t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var a = !("touchstart" !== e.touchEvents.start || !ae.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                ae.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        },
        disable: function() {
            var e = this
              , t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var a = !("touchstart" !== e.touchEvents.start || !ae.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                ae.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }
      , X = {
        loadInSlide: function(e, l) {
            void 0 === l && (l = !0);
            var d = this
              , p = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e)
                  , t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])),
                0 !== t.length && t.each(function(e, t) {
                    var i = I(t);
                    i.addClass(p.loadingClass);
                    var s = i.attr("data-background")
                      , r = i.attr("data-src")
                      , n = i.attr("data-srcset")
                      , o = i.attr("data-sizes");
                    d.loadImage(i[0], r || s, n, o, !1, function() {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (s ? (i.css("background-image", 'url("' + s + '")'),
                            i.removeAttr("data-background")) : (n && (i.attr("srcset", n),
                            i.removeAttr("data-srcset")),
                            o && (i.attr("sizes", o),
                            i.removeAttr("data-sizes")),
                            r && (i.attr("src", r),
                            i.removeAttr("data-src"))),
                            i.addClass(p.loadedClass).removeClass(p.loadingClass),
                            c.find("." + p.preloaderClass).remove(),
                            d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(a.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], i[0])
                        }
                    }),
                    d.emit("lazyImageLoad", c[0], i[0])
                })
            }
        },
        load: function() {
            var i = this
              , t = i.$wrapperEl
              , a = i.params
              , s = i.slides
              , e = i.activeIndex
              , r = i.virtual && a.virtual.enabled
              , n = a.lazy
              , o = a.slidesPerView;
            function l(e) {
                if (r) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function d(e) {
                return r ? I(e).attr("data-swiper-slide-index") : I(e).index()
            }
            if ("auto" === o && (o = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
            i.params.watchSlidesVisibility)
                t.children("." + a.slideVisibleClass).each(function(e, t) {
                    var a = r ? I(t).attr("data-swiper-slide-index") : I(t).index();
                    i.lazy.loadInSlide(a)
                });
            else if (1 < o)
                for (var p = e; p < e + o; p += 1)
                    l(p) && i.lazy.loadInSlide(p);
            else
                i.lazy.loadInSlide(e);
            if (n.loadPrevNext)
                if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                    for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1)
                        l(f) && i.lazy.loadInSlide(f);
                    for (var m = v; m < e; m += 1)
                        l(m) && i.lazy.loadInSlide(m)
                } else {
                    var g = t.children("." + a.slideNextClass);
                    0 < g.length && i.lazy.loadInSlide(d(g));
                    var b = t.children("." + a.slidePrevClass);
                    0 < b.length && i.lazy.loadInSlide(d(b))
                }
        }
    }
      , V = {
        LinearSpline: function(e, t) {
            var a, i, s, r, n, o = function(e, t) {
                for (i = -1,
                a = e.length; 1 < a - i; )
                    e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid,e.slidesGrid) : new V.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var a, i, s = this, r = s.controller.control;
            function n(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                i = -s.controller.spline.interpolate(-t)),
                i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                i = (t - s.minTranslate()) * a + e.minTranslate()),
                s.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof T && n(r[o]);
            else
                r instanceof T && t !== r && n(r)
        },
        setTransition: function(t, e) {
            var a, i = this, s = i.controller.control;
            function r(e) {
                e.setTransition(t, i),
                0 !== t && (e.transitionStart(),
                e.params.autoHeight && te.nextTick(function() {
                    e.updateAutoHeight()
                }),
                e.$wrapperEl.transitionEnd(function() {
                    s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(),
                    e.transitionEnd())
                }))
            }
            if (Array.isArray(s))
                for (a = 0; a < s.length; a += 1)
                    s[a] !== e && s[a]instanceof T && r(s[a]);
            else
                s instanceof T && e !== s && r(s)
        }
    }
      , Y = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this
              , a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = I(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
                t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation
                  , a = t.$nextEl
                  , i = t.$prevEl;
                i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        },
        updatePagination: function() {
            var i = this
              , s = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                var a = I(t);
                i.a11y.makeElFocusable(a),
                i.a11y.addElRole(a, "button"),
                i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
            a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
            a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
            e && e.off("keydown", a.a11y.onEnterKey),
            t && t.off("keydown", a.a11y.onEnterKey),
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }
      , F = {
        init: function() {
            var e = this;
            if (e.params.history) {
                if (!ee.history || !ee.history.pushState)
                    return e.params.history.enabled = !1,
                    void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0,
                t.paths = F.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || ee.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || ee.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = F.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = ee.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(t)
                  , i = F.slugify(a.attr("data-history"));
                ee.location.pathname.includes(e) || (i = e + "/" + i);
                var s = ee.history.state;
                s && s.value === i || (this.params.history.replaceState ? ee.history.replaceState({
                    value: i
                }, null, i) : ee.history.pushState({
                    value: i
                }, null, i))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, r = i.slides.length; s < r; s += 1) {
                    var n = i.slides.eq(s);
                    if (F.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                        var o = n.index();
                        i.slideTo(o, e, a)
                    }
                }
            else
                i.slideTo(0, e, a)
        }
    }
      , R = {
        onHashCange: function() {
            var e = this
              , t = f.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === a)
                    return;
                e.slideTo(a)
            }
        },
        setHash: function() {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && ee.history && ee.history.replaceState)
                    ee.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                else {
                    var t = e.slides.eq(e.activeIndex)
                      , a = t.attr("data-hash") || t.attr("data-history");
                    f.location.hash = a || ""
                }
        },
        init: function() {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = f.location.hash.replace("#", "");
                if (t)
                    for (var a = 0, i = e.slides.length; a < i; a += 1) {
                        var s = e.slides.eq(a);
                        if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                            var r = s.index();
                            e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                        }
                    }
                e.params.hashNavigation.watchState && I(ee).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && I(ee).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , q = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = te.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, a)
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
            e.emit("autoplayStart"),
            e.autoplay.run(),
            !0))
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = void 0),
            e.autoplay.running = !1,
            e.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    }
      , W = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                  , s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s,
                s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: n
                }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var a = this
              , t = a.slides
              , i = a.$wrapperEl;
            if (t.transition(e),
            a.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.transitionEnd(function() {
                    if (!s && a && !a.destroyed) {
                        s = !0,
                        a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            i.trigger(e[t])
                    }
                })
            }
        }
    }
      , j = {
        setTranslate: function() {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = I('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: r + "px"
            })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = I('<div class="swiper-cube-shadow"></div>'),
            a.append(e)));
            for (var h = 0; h < s.length; h += 1) {
                var v = s.eq(h)
                  , f = h;
                c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                p || (y = w,
                w = 0);
                var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && -1 < b && (u = 90 * f + 90 * b,
                o && (u = 90 * -f - 90 * b)),
                v.transform(T),
                d.slideShadows) {
                    var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = I('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'),
                    v.append(E)),
                    0 === S.length && (S = I('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    E.length && (E[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (p)
                    e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                      , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , k = d.shadowScale / M
                      , z = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / k + "px) rotateX(-90deg)")
                }
            var $ = ie.isSafari || ie.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , U = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s = t.eq(i)
                  , r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r
                  , o = 0
                  , l = -s[0].swiperSlideOffset
                  , d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = l,
                o = -n,
                n = l = 0),
                s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = I('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(p)),
                    0 === c.length && (c = I('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(c)),
                    p.length && (p[0].style.opacity = Math.max(-r, 0)),
                    c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var a = this
              , t = a.slides
              , i = a.activeIndex
              , s = a.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            a.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(i).transitionEnd(function() {
                    if (!r && a && !a.destroyed) {
                        r = !0,
                        a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            s.trigger(e[t])
                    }
                })
            }
        }
    }
      , K = {
        setTranslate: function() {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                var v = i.eq(u)
                  , f = r[u]
                  , m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier
                  , g = o ? p * m : 0
                  , b = o ? 0 : p * m
                  , w = -c * Math.abs(m)
                  , y = o ? 0 : n.stretch * m
                  , x = o ? n.stretch * m : 0;
                Math.abs(x) < .001 && (x = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(b) < .001 && (b = 0);
                var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                if (v.transform(T),
                v[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                n.slideShadows) {
                    var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = I('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    v.append(E)),
                    0 === S.length && (S = I('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    E.length && (E[0].style.opacity = 0 < m ? m : 0),
                    S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (ae.pointerEvents || ae.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , _ = {
        init: function() {
            var e = this
              , t = e.params.thumbs
              , a = e.constructor;
            t.swiper instanceof a ? (e.thumbs.swiper = t.swiper,
            te.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            te.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : te.isObject(t.swiper) && (e.thumbs.swiper = new a(te.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this
              , t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex
                  , i = t.clickedSlide;
                if (!(i && I(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                    var s;
                    if (s = t.params.loop ? parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a,
                    e.params.loop) {
                        var r = e.activeIndex;
                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                        e._clientLeft = e.$wrapperEl[0].clientLeft,
                        r = e.activeIndex);
                        var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                          , o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    e.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this
              , a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                if (t.realIndex !== a.realIndex) {
                    var s, r = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(),
                        a._clientLeft = a.$wrapperEl[0].clientLeft,
                        r = a.activeIndex);
                        var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index()
                          , o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                    } else
                        s = t.realIndex;
                    a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1),
                    a.slideTo(s, e ? 0 : void 0))
                }
                var l = 1
                  , d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView),
                a.slides.removeClass(d),
                a.params.loop || a.params.virtual)
                    for (var p = 0; p < l; p += 1)
                        a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                else
                    for (var c = 0; c < l; c += 1)
                        a.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }
      , Z = [E, S, C, M, k, $, D, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: O.enable.bind(e),
                    disable: O.disable.bind(e),
                    handle: O.handle.bind(e),
                    handleMouseEnter: O.handleMouseEnter.bind(e),
                    handleMouseLeave: O.handleMouseLeave.bind(e),
                    lastScrollTime: te.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                navigation: {
                    init: A.init.bind(e),
                    update: A.update.bind(e),
                    destroy: A.destroy.bind(e),
                    onNextClick: A.onNextClick.bind(e),
                    onPrevClick: A.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, a = this, i = a.navigation, s = i.$nextEl, r = i.$prevEl;
                !a.params.navigation.hideOnClick || I(e.target).is(r) || I(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)),
                !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a),
                s && s.toggleClass(a.params.navigation.hiddenClass),
                r && r.toggleClass(a.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                pagination: {
                    init: H.init.bind(e),
                    render: H.render.bind(e),
                    update: H.update.bind(e),
                    destroy: H.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !I(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                scrollbar: {
                    init: G.init.bind(e),
                    destroy: G.destroy.bind(e),
                    updateSize: G.updateSize.bind(e),
                    setTranslate: G.setTranslate.bind(e),
                    setTransition: G.setTransition.bind(e),
                    enableDraggable: G.enableDraggable.bind(e),
                    disableDraggable: G.disableDraggable.bind(e),
                    setDragPosition: G.setDragPosition.bind(e),
                    getPointerPosition: G.getPointerPosition.bind(e),
                    onDragStart: G.onDragStart.bind(e),
                    onDragMove: G.onDragMove.bind(e),
                    onDragEnd: G.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            te.extend(this, {
                parallax: {
                    setTransform: N.setTransform.bind(this),
                    setTranslate: N.setTranslate.bind(this),
                    setTransition: N.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var i = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                t[e] = B[e].bind(i)
            }),
            te.extend(i, {
                zoom: t
            });
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function() {
                    return s
                },
                set: function(e) {
                    if (s !== e) {
                        var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0
                          , a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                        i.emit("zoomChange", e, t, a)
                    }
                    s = e
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            te.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: X.load.bind(this),
                    loadInSlide: X.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                var e = this;
                e.params.lazy.enabled && (!e.params.lazy.loadOnTransitionStart && (e.params.lazy.loadOnTransitionStart || e.lazy.initialImageLoaded) || e.lazy.load())
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: V.getInterpolateFunction.bind(e),
                    setTranslate: V.setTranslate.bind(e),
                    setTransition: V.setTransition.bind(e)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            te.extend(t, {
                a11y: {
                    liveRegion: I('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(Y).forEach(function(e) {
                t.a11y[e] = Y[e].bind(t)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                history: {
                    init: F.init.bind(e),
                    setHistory: F.setHistory.bind(e),
                    setHistoryPopState: F.setHistoryPopState.bind(e),
                    scrollToSlide: F.scrollToSlide.bind(e),
                    destroy: F.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            var e = this;
            te.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: R.init.bind(e),
                    destroy: R.destroy.bind(e),
                    setHash: R.setHash.bind(e),
                    onHashCange: R.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var t = this;
            te.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: q.run.bind(t),
                    start: q.start.bind(t),
                    stop: q.stop.bind(t),
                    pause: q.pause.bind(t),
                    onTransitionEnd: function(e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                        t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            te.extend(this, {
                fadeEffect: {
                    setTranslate: W.setTranslate.bind(this),
                    setTransition: W.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    te.extend(e.params, t),
                    te.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            te.extend(this, {
                cubeEffect: {
                    setTranslate: j.setTranslate.bind(this),
                    setTransition: j.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    te.extend(e.params, t),
                    te.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            te.extend(this, {
                flipEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    te.extend(e.params, t),
                    te.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            te.extend(this, {
                coverflowEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            te.extend(this, {
                thumbs: {
                    swiper: null,
                    init: _.init.bind(this),
                    update: _.update.bind(this),
                    onThumbClick: _.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === T.use && (T.use = T.Class.use,
    T.installModule = T.Class.installModule),
    T.use(Z),
    T
});

/* Plyr */


/* Magnific Popup */

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(c, d) {
                if (void 0 === d || d === !1)
                    return !0;
                if (e = c.split("_"),
                e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery";
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }),
                        f.click(function() {
                            b.next()
                        }),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    A()
});

/* Jquery Marquee */

/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function(f) {
    f.fn.marquee = function(x) {
        return this.each(function() {
            var a = f.extend({}, f.fn.marquee.defaults, x), b = f(this), c, t, e = 3, y = "animation-play-state", p = !1, E = function(a, b, c) {
                for (var e = ["webkit", "moz", "MS", "o", ""], d = 0; d < e.length; d++)
                    e[d] || (b = b.toLowerCase()),
                    a.addEventListener(e[d] + b, c, !1)
            }, F = function(a) {
                var b = [], c;
                for (c in a)
                    a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                b.push();
                return "{" + b.join(",") + "}"
            }, l = {
                pause: function() {
                    p && a.allowCss3Support ? c.css(y, "paused") : f.fn.pause && c.pause();
                    b.data("runningStatus", "paused");
                    b.trigger("paused")
                },
                resume: function() {
                    p && a.allowCss3Support ? c.css(y, "running") : f.fn.resume && c.resume();
                    b.data("runningStatus", "resumed");
                    b.trigger("resumed")
                },
                toggle: function() {
                    l["resumed" == b.data("runningStatus") ? "pause" : "resume"]()
                },
                destroy: function() {
                    clearTimeout(b.timer);
                    b.find("*").addBack().unbind();
                    b.html(b.find(".js-marquee:first").html())
                }
            };
            if ("string" === typeof x)
                f.isFunction(l[x]) && (c || (c = b.find(".js-marquee-wrapper")),
                !0 === b.data("css3AnimationIsSupported") && (p = !0),
                l[x]());
            else {
                var u;
                f.each(a, function(c, d) {
                    u = b.attr("data-" + c);
                    if ("undefined" !== typeof u) {
                        switch (u) {
                        case "true":
                            u = !0;
                            break;
                        case "false":
                            u = !1
                        }
                        a[c] = u
                    }
                });
                a.speed && (a.duration = parseInt(b.width(), 10) / a.speed * 1E3);
                var v = "up" == a.direction || "down" == a.direction;
                a.gap = a.duplicated ? parseInt(a.gap) : 0;
                b.wrapInner('<div class="js-marquee"></div>');
                var h = b.find(".js-marquee").css({
                    "margin-right": a.gap,
                    "float": "left"
                });
                a.duplicated && h.clone(!0).appendTo(b);
                b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
                c = b.find(".js-marquee-wrapper");
                if (v) {
                    var k = b.height();
                    c.removeAttr("style");
                    b.height(k);
                    b.find(".js-marquee").css({
                        "float": "none",
                        "margin-bottom": a.gap,
                        "margin-right": 0
                    });
                    a.duplicated && b.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    });
                    var q = b.find(".js-marquee:first").height() + a.gap;
                    a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10) * a.duration,
                    a.duration *= parseInt(q, 10) / parseInt(k, 10)) : a.duration *= (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10)
                } else {
                    var m = b.find(".js-marquee:first").width() + a.gap;
                    var n = b.width();
                    a.startVisible && !a.duplicated ? (a._completeDuration = (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10) * a.duration,
                    a.duration *= parseInt(m, 10) / parseInt(n, 10)) : a.duration *= (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10)
                }
                a.duplicated && (a.duration /= 2);
                if (a.allowCss3Support) {
                    h = document.body || document.createElement("div");
                    var g = "marqueeAnimation-" + Math.floor(1E7 * Math.random())
                      , A = ["Webkit", "Moz", "O", "ms", "Khtml"]
                      , B = "animation"
                      , d = ""
                      , r = "";
                    h.style.animation && (r = "@keyframes " + g + " ",
                    p = !0);
                    if (!1 === p)
                        for (var z = 0; z < A.length; z++)
                            if (void 0 !== h.style[A[z] + "AnimationName"]) {
                                h = "-" + A[z].toLowerCase() + "-";
                                B = h + B;
                                y = h + y;
                                r = "@" + h + "keyframes " + g + " ";
                                p = !0;
                                break
                            }
                    p && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s infinite " + a.css3easing,
                    b.data("css3AnimationIsSupported", !0))
                }
                var C = function() {
                    c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + q + "px") + ")")
                }
                  , D = function() {
                    c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + m + "px") + ")")
                };
                a.duplicated ? (v ? a.startVisible ? c.css("transform", "translateY(0)") : c.css("transform", "translateY(" + ("up" == a.direction ? k + "px" : "-" + (2 * q - a.gap) + "px") + ")") : a.startVisible ? c.css("transform", "translateX(0)") : c.css("transform", "translateX(" + ("left" == a.direction ? n + "px" : "-" + (2 * m - a.gap) + "px") + ")"),
                a.startVisible || (e = 1)) : a.startVisible ? e = 2 : v ? C() : D();
                var w = function() {
                    a.duplicated && (1 === e ? (a._originalDuration = a.duration,
                    a.duration = v ? "up" == a.direction ? a.duration + k / (q / a.duration) : 2 * a.duration : "left" == a.direction ? a.duration + n / (m / a.duration) : 2 * a.duration,
                    d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing),
                    e++) : 2 === e && (a.duration = a._originalDuration,
                    d && (g += "0",
                    r = f.trim(r) + "0 ",
                    d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing),
                    e++));
                    v ? a.duplicated ? (2 < e && c.css("transform", "translateY(" + ("up" == a.direction ? 0 : "-" + q + "px") + ")"),
                    t = {
                        transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : 0) + ")"
                    }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing),
                    t = {
                        transform: "translateY(" + ("up" == a.direction ? "-" + q + "px" : k + "px") + ")"
                    },
                    e++) : 3 === e && (a.duration = a._completeDuration,
                    d && (g += "0",
                    r = f.trim(r) + "0 ",
                    d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing),
                    C()) : (C(),
                    t = {
                        transform: "translateY(" + ("up" == a.direction ? "-" + c.height() + "px" : k + "px") + ")"
                    }) : a.duplicated ? (2 < e && c.css("transform", "translateX(" + ("left" == a.direction ? 0 : "-" + m + "px") + ")"),
                    t = {
                        transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : 0) + ")"
                    }) : a.startVisible ? 2 === e ? (d && (d = g + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing),
                    t = {
                        transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
                    },
                    e++) : 3 === e && (a.duration = a._completeDuration,
                    d && (g += "0",
                    r = f.trim(r) + "0 ",
                    d = g + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing),
                    D()) : (D(),
                    t = {
                        transform: "translateX(" + ("left" == a.direction ? "-" + m + "px" : n + "px") + ")"
                    });
                    b.trigger("beforeStarting");
                    if (p) {
                        c.css(B, d);
                        var h = r + " { 100%  " + F(t) + "}"
                          , l = c.find("style");
                        0 !== l.length ? l.filter(":last").html(h) : f("head").append("<style>" + h + "</style>");
                        E(c[0], "AnimationIteration", function() {
                            b.trigger("finished")
                        });
                        E(c[0], "AnimationEnd", function() {
                            w();
                            b.trigger("finished")
                        })
                    } else
                        c.animate(t, a.duration, a.easing, function() {
                            b.trigger("finished");
                            a.pauseOnCycle ? b.timer = setTimeout(w, a.delayBeforeStart) : w()
                        });
                    b.data("runningStatus", "resumed")
                };
                b.bind("pause", l.pause);
                b.bind("resume", l.resume);
                a.pauseOnHover && (b.bind("mouseenter", l.pause),
                b.bind("mouseleave", l.resume));
                p && a.allowCss3Support ? w() : b.timer = setTimeout(w, a.delayBeforeStart)
            }
        })
    }
    ;
    f.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1E3,
        direction: "left",
        duplicated: !1,
        duration: 5E3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1,
        startVisible: !1
    }
}
)(jQuery);

/* Masonry JS */

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var u = a.data(h, i);
                if (!u)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }),
            void 0 !== o ? o : t
        }
        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e),
                o._init()) : (o = new r(n,e),
                a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery,
        a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t),
            this
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice
      , r = t.console
      , s = "undefined" == typeof r ? function() {}
    : function(t) {
        r.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(t, r),
                delete n[r]),
                r.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)),
            r.isBoxSizeOuter = s,
            i.removeChild(e)
        }
    }
    function r(e) {
        if (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l]
                  , f = r[c]
                  , m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , g = a.paddingTop + a.paddingBottom
              , y = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , E = d && s
              , b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (g + z),
            a.outerWidth = a.width + y,
            a.outerHeight = a.height + v,
            a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = h.length, d = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i]
              , o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r])
            }
        }),
        o
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments
              , r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n)
              , s = "data-" + r
              , a = document.querySelectorAll("[" + s + "]")
              , h = document.querySelectorAll(".js-" + r)
              , u = i.makeArray(a).concat(i.makeArray(h))
              , d = s + "-options"
              , l = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t,i);
                l && l.data(t, n, h)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function n(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style
      , s = "string" == typeof r.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof r.transform ? "transform" : "WebkitTransform"
      , h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[s]
      , u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
    }
      , d = n.prototype = Object.create(t.prototype);
    d.constructor = n,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = t[e ? "left" : "right"]
          , o = t[i ? "top" : "bottom"]
          , r = parseFloat(n)
          , s = parseFloat(o)
          , a = this.layout.size;
        -1 != n.indexOf("%") && (r = r / 100 * a.width),
        -1 != o.indexOf("%") && (s = s / 100 * a.height),
        r = isNaN(r) ? 0 : r,
        s = isNaN(s) ? 0 : s,
        r -= e ? a.paddingLeft : a.paddingRight,
        s -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = r,
        this.position.y = s
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , o = i ? "paddingLeft" : "paddingRight"
          , r = i ? "left" : "right"
          , s = i ? "right" : "left"
          , a = this.position.x + t[o];
        e[r] = this.getXValue(a),
        e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom"
          , u = n ? "top" : "bottom"
          , d = n ? "bottom" : "top"
          , l = this.position.y + t[h];
        e[u] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        o && !this.isTransitioning)
            return void this.layoutPosition();
        var r = t - i
          , s = e - n
          , a = {};
        a.transform = this.getTranslate(r, s),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = n ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(h, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var c = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[n]),
            n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this),
                delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(h, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(f)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        u && (this.$element = u(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o,
        c[o] = this,
        this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }
    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , n = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var h = t.console
      , u = t.jQuery
      , d = function() {}
      , l = 0
      , c = {};
    r.namespace = "outlayer",
    r.Item = o,
    r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype),
    f.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    f._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o]
              , s = new i(r,this);
            n.push(s)
        }
        return n
    }
    ,
    f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }
    ,
    f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    f.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    f._init = f.layout,
    f._resetLayout = function() {
        this.getSize()
    }
    ,
    f.getSize = function() {
        this.size = i(this.element)
    }
    ,
    f._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o),
        this[t] = n ? i(n)[e] : o) : this[t] = 0
    }
    ,
    f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    f._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
        t.moveTo(e, i))
    }
    ,
    f._postLayout = function() {
        this.resizeContainer()
    }
    ,
    f.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    f._getContainerSize = d,
    f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            s++,
            s == r && i()
        }
        var o = this
          , r = e.length;
        if (!e || !r)
            return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }
    ,
    f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        u)
            if (this.$element = this.$element || u(this.element),
            e) {
                var o = u.Event(e);
                o.type = t,
                this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    f.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    f.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    f._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
        t = n.makeArray(t)) : void 0
    }
    ,
    f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    f._manageStamp = d,
    f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , n = this._boundingRect
          , o = i(t)
          , r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        };
        return r
    }
    ,
    f.handleEvent = n.handleEvent,
    f.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    f.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    f.onresize = function() {
        this.resize()
    }
    ,
    n.debounceMethod(r, "onresize", 100),
    f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    f.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }, this)
    }
    ,
    f.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
        delete this.element.outlayerGUID,
        u && u.removeData(this.element, this.constructor.namespace)
    }
    ,
    r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }
    ,
    r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, r.compatOptions),
        i.namespace = t,
        i.data = r.data,
        i.Item = s(o),
        n.htmlInit(i, t),
        u && u.bridget && u.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o,
    r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    n.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter
          , o = this.containerWidth + this.gutter
          , r = o / n
          , s = n - o % n
          , a = s && 1 > s ? "round" : "floor";
        r = Math[a](r),
        this.cols = Math.max(r, 1)
    }
    ,
    n.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , n = e(i);
        this.containerWidth = n && n.innerWidth
    }
    ,
    n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && 1 > e ? "round" : "ceil"
          , n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
            x: this.columnWidth * r.col,
            y: r.y
        }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++)
            this.colYs[u] = a;
        return s
    }
    ,
    n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    n._getTopColGroup = function(t) {
        if (2 > t)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
            e[n] = this._getColGroupY(n, t);
        return e
    }
    ,
    n._getColGroupY = function(t, e) {
        if (2 > e)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    n._manageStamp = function(t) {
        var i = e(t)
          , n = this._getElementOffset(t)
          , o = this._getOption("originLeft")
          , r = o ? n.left : n.right
          , s = r + i.outerWidth
          , a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1,
        h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
});

/* Anime JS */
/*
 * anime.js v3.2.0
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.anime = e()
}(this, function() {
    "use strict";
    var n = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    }
      , e = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    }
      , r = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"]
      , t = {
        CSS: {},
        springs: {}
    };
    function a(n, e, r) {
        return Math.min(Math.max(n, e), r)
    }
    function o(n, e) {
        return n.indexOf(e) > -1
    }
    function u(n, e) {
        return n.apply(null, e)
    }
    var i = {
        arr: function(n) {
            return Array.isArray(n)
        },
        obj: function(n) {
            return o(Object.prototype.toString.call(n), "Object")
        },
        pth: function(n) {
            return i.obj(n) && n.hasOwnProperty("totalLength")
        },
        svg: function(n) {
            return n instanceof SVGElement
        },
        inp: function(n) {
            return n instanceof HTMLInputElement
        },
        dom: function(n) {
            return n.nodeType || i.svg(n)
        },
        str: function(n) {
            return "string" == typeof n
        },
        fnc: function(n) {
            return "function" == typeof n
        },
        und: function(n) {
            return void 0 === n
        },
        hex: function(n) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
        },
        rgb: function(n) {
            return /^rgb/.test(n)
        },
        hsl: function(n) {
            return /^hsl/.test(n)
        },
        col: function(n) {
            return i.hex(n) || i.rgb(n) || i.hsl(n)
        },
        key: function(r) {
            return !n.hasOwnProperty(r) && !e.hasOwnProperty(r) && "targets" !== r && "keyframes" !== r
        }
    };
    function c(n) {
        var e = /\(([^)]+)\)/.exec(n);
        return e ? e[1].split(",").map(function(n) {
            return parseFloat(n)
        }) : []
    }
    function s(n, e) {
        var r = c(n)
          , o = a(i.und(r[0]) ? 1 : r[0], .1, 100)
          , u = a(i.und(r[1]) ? 100 : r[1], .1, 100)
          , s = a(i.und(r[2]) ? 10 : r[2], .1, 100)
          , f = a(i.und(r[3]) ? 0 : r[3], .1, 100)
          , l = Math.sqrt(u / o)
          , d = s / (2 * Math.sqrt(u * o))
          , p = d < 1 ? l * Math.sqrt(1 - d * d) : 0
          , h = 1
          , v = d < 1 ? (d * l - f) / p : -f + l;
        function g(n) {
            var r = e ? e * n / 1e3 : n;
            return r = d < 1 ? Math.exp(-r * d * l) * (h * Math.cos(p * r) + v * Math.sin(p * r)) : (h + v * r) * Math.exp(-r * l),
            0 === n || 1 === n ? n : 1 - r
        }
        return e ? g : function() {
            var e = t.springs[n];
            if (e)
                return e;
            for (var r = 0, a = 0; ; )
                if (1 === g(r += 1 / 6)) {
                    if (++a >= 16)
                        break
                } else
                    a = 0;
            var o = r * (1 / 6) * 1e3;
            return t.springs[n] = o,
            o
        }
    }
    function f(n) {
        return void 0 === n && (n = 10),
        function(e) {
            return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n)
        }
    }
    var l, d, p = function() {
        var n = 11
          , e = 1 / (n - 1);
        function r(n, e) {
            return 1 - 3 * e + 3 * n
        }
        function t(n, e) {
            return 3 * e - 6 * n
        }
        function a(n) {
            return 3 * n
        }
        function o(n, e, o) {
            return ((r(e, o) * n + t(e, o)) * n + a(e)) * n
        }
        function u(n, e, o) {
            return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e)
        }
        return function(r, t, a, i) {
            if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
                var c = new Float32Array(n);
                if (r !== t || a !== i)
                    for (var s = 0; s < n; ++s)
                        c[s] = o(s * e, r, a);
                return function(n) {
                    return r === t && a === i ? n : 0 === n || 1 === n ? n : o(f(n), t, i)
                }
            }
            function f(t) {
                for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= t; ++s)
                    i += e;
                var l = i + (t - c[--s]) / (c[s + 1] - c[s]) * e
                  , d = u(l, r, a);
                return d >= .001 ? function(n, e, r, t) {
                    for (var a = 0; a < 4; ++a) {
                        var i = u(e, r, t);
                        if (0 === i)
                            return e;
                        e -= (o(e, r, t) - n) / i
                    }
                    return e
                }(t, l, r, a) : 0 === d ? l : function(n, e, r, t, a) {
                    for (var u, i, c = 0; (u = o(i = e + (r - e) / 2, t, a) - n) > 0 ? r = i : e = i,
                    Math.abs(u) > 1e-7 && ++c < 10; )
                        ;
                    return i
                }(t, i, i + e, r, a)
            }
        }
    }(), h = (l = {
        linear: function() {
            return function(n) {
                return n
            }
        }
    },
    d = {
        Sine: function() {
            return function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            }
        },
        Circ: function() {
            return function(n) {
                return 1 - Math.sqrt(1 - n * n)
            }
        },
        Back: function() {
            return function(n) {
                return n * n * (3 * n - 2)
            }
        },
        Bounce: function() {
            return function(n) {
                for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11; )
                    ;
                return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
            }
        },
        Elastic: function(n, e) {
            void 0 === n && (n = 1),
            void 0 === e && (e = .5);
            var r = a(n, 1, 10)
              , t = a(e, .1, 2);
            return function(n) {
                return 0 === n || 1 === n ? n : -r * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - t / (2 * Math.PI) * Math.asin(1 / r)) * (2 * Math.PI) / t)
            }
        }
    },
    ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function(n, e) {
        d[n] = function() {
            return function(n) {
                return Math.pow(n, e + 2)
            }
        }
    }),
    Object.keys(d).forEach(function(n) {
        var e = d[n];
        l["easeIn" + n] = e,
        l["easeOut" + n] = function(n, r) {
            return function(t) {
                return 1 - e(n, r)(1 - t)
            }
        }
        ,
        l["easeInOut" + n] = function(n, r) {
            return function(t) {
                return t < .5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2
            }
        }
    }),
    l);
    function v(n, e) {
        if (i.fnc(n))
            return n;
        var r = n.split("(")[0]
          , t = h[r]
          , a = c(n);
        switch (r) {
        case "spring":
            return s(n, e);
        case "cubicBezier":
            return u(p, a);
        case "steps":
            return u(f, a);
        default:
            return u(t, a)
        }
    }
    function g(n) {
        try {
            return document.querySelectorAll(n)
        } catch (n) {
            return
        }
    }
    function m(n, e) {
        for (var r = n.length, t = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < r; o++)
            if (o in n) {
                var u = n[o];
                e.call(t, u, o, n) && a.push(u)
            }
        return a
    }
    function y(n) {
        return n.reduce(function(n, e) {
            return n.concat(i.arr(e) ? y(e) : e)
        }, [])
    }
    function b(n) {
        return i.arr(n) ? n : (i.str(n) && (n = g(n) || n),
        n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n])
    }
    function x(n, e) {
        return n.some(function(n) {
            return n === e
        })
    }
    function M(n) {
        var e = {};
        for (var r in n)
            e[r] = n[r];
        return e
    }
    function w(n, e) {
        var r = M(n);
        for (var t in n)
            r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
        return r
    }
    function k(n, e) {
        var r = M(n);
        for (var t in e)
            r[t] = i.und(n[t]) ? e[t] : n[t];
        return r
    }
    function O(n) {
        return i.rgb(n) ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + r[1] + ",1)" : e : i.hex(n) ? (t = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, e, r, t) {
            return e + e + r + r + t + t
        }),
        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
        "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : i.hsl(n) ? function(n) {
            var e, r, t, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n), o = parseInt(a[1], 10) / 360, u = parseInt(a[2], 10) / 100, i = parseInt(a[3], 10) / 100, c = a[4] || 1;
            function s(n, e, r) {
                return r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6 ? n + 6 * (e - n) * r : r < .5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n
            }
            if (0 == u)
                e = r = t = i;
            else {
                var f = i < .5 ? i * (1 + u) : i + u - i * u
                  , l = 2 * i - f;
                e = s(l, f, o + 1 / 3),
                r = s(l, f, o),
                t = s(l, f, o - 1 / 3)
            }
            return "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + c + ")"
        }(n) : void 0;
        var e, r, t, a
    }
    function C(n) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
        if (e)
            return e[1]
    }
    function B(n, e) {
        return i.fnc(n) ? n(e.target, e.id, e.total) : n
    }
    function P(n, e) {
        return n.getAttribute(e)
    }
    function I(n, e, r) {
        if (x([r, "deg", "rad", "turn"], C(e)))
            return e;
        var a = t.CSS[e + r];
        if (!i.und(a))
            return a;
        var o = document.createElement(n.tagName)
          , u = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
        u.appendChild(o),
        o.style.position = "absolute",
        o.style.width = 100 + r;
        var c = 100 / o.offsetWidth;
        u.removeChild(o);
        var s = c * parseFloat(e);
        return t.CSS[e + r] = s,
        s
    }
    function T(n, e, r) {
        if (e in n.style) {
            var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
              , a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0";
            return r ? I(n, a, r) : a
        }
    }
    function D(n, e) {
        return i.dom(n) && !i.inp(n) && (P(n, e) || i.svg(n) && n[e]) ? "attribute" : i.dom(n) && x(r, e) ? "transform" : i.dom(n) && "transform" !== e && T(n, e) ? "css" : null != n[e] ? "object" : void 0
    }
    function E(n) {
        if (i.dom(n)) {
            for (var e, r = n.style.transform || "", t = /(\w+)\(([^)]*)\)/g, a = new Map; e = t.exec(r); )
                a.set(e[1], e[2]);
            return a
        }
    }
    function F(n, e, r, t) {
        var a, u = o(e, "scale") ? 1 : 0 + (o(a = e, "translate") || "perspective" === a ? "px" : o(a, "rotate") || o(a, "skew") ? "deg" : void 0), i = E(n).get(e) || u;
        return r && (r.transforms.list.set(e, i),
        r.transforms.last = e),
        t ? I(n, i, t) : i
    }
    function N(n, e, r, t) {
        switch (D(n, e)) {
        case "transform":
            return F(n, e, t, r);
        case "css":
            return T(n, e, r);
        case "attribute":
            return P(n, e);
        default:
            return n[e] || 0
        }
    }
    function A(n, e) {
        var r = /^(\*=|\+=|-=)/.exec(n);
        if (!r)
            return n;
        var t = C(n) || 0
          , a = parseFloat(e)
          , o = parseFloat(n.replace(r[0], ""));
        switch (r[0][0]) {
        case "+":
            return a + o + t;
        case "-":
            return a - o + t;
        case "*":
            return a * o + t
        }
    }
    function L(n, e) {
        if (i.col(n))
            return O(n);
        if (/\s/g.test(n))
            return n;
        var r = C(n)
          , t = r ? n.substr(0, n.length - r.length) : n;
        return e ? t + e : t
    }
    function j(n, e) {
        return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
    }
    function S(n) {
        for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
            var o = r.getItem(a);
            a > 0 && (t += j(e, o)),
            e = o
        }
        return t
    }
    function q(n) {
        if (n.getTotalLength)
            return n.getTotalLength();
        switch (n.tagName.toLowerCase()) {
        case "circle":
            return o = n,
            2 * Math.PI * P(o, "r");
        case "rect":
            return 2 * P(a = n, "width") + 2 * P(a, "height");
        case "line":
            return j({
                x: P(t = n, "x1"),
                y: P(t, "y1")
            }, {
                x: P(t, "x2"),
                y: P(t, "y2")
            });
        case "polyline":
            return S(n);
        case "polygon":
            return r = (e = n).points,
            S(e) + j(r.getItem(r.numberOfItems - 1), r.getItem(0))
        }
        var e, r, t, a, o
    }
    function $(n, e) {
        var r = e || {}
          , t = r.el || function(n) {
            for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); )
                e = e.parentNode;
            return e
        }(n)
          , a = t.getBoundingClientRect()
          , o = P(t, "viewBox")
          , u = a.width
          , c = a.height
          , s = r.viewBox || (o ? o.split(" ") : [0, 0, u, c]);
        return {
            el: t,
            viewBox: s,
            x: s[0] / 1,
            y: s[1] / 1,
            w: u / s[2],
            h: c / s[3]
        }
    }
    function X(n, e) {
        function r(r) {
            void 0 === r && (r = 0);
            var t = e + r >= 1 ? e + r : 0;
            return n.el.getPointAtLength(t)
        }
        var t = $(n.el, n.svg)
          , a = r()
          , o = r(-1)
          , u = r(1);
        switch (n.property) {
        case "x":
            return (a.x - t.x) * t.w;
        case "y":
            return (a.y - t.y) * t.h;
        case "angle":
            return 180 * Math.atan2(u.y - o.y, u.x - o.x) / Math.PI
        }
    }
    function Y(n, e) {
        var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
          , t = L(i.pth(n) ? n.totalLength : n, e) + "";
        return {
            original: t,
            numbers: t.match(r) ? t.match(r).map(Number) : [0],
            strings: i.str(n) || e ? t.split(r) : []
        }
    }
    function Z(n) {
        return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function(n, e, r) {
            return r.indexOf(n) === e
        })
    }
    function Q(n) {
        var e = Z(n);
        return e.map(function(n, r) {
            return {
                target: n,
                id: r,
                total: e.length,
                transforms: {
                    list: E(n)
                }
            }
        })
    }
    function V(n, e) {
        var r = M(e);
        if (/^spring/.test(r.easing) && (r.duration = s(r.easing)),
        i.arr(n)) {
            var t = n.length;
            2 === t && !i.obj(n[0]) ? n = {
                value: n
            } : i.fnc(e.duration) || (r.duration = e.duration / t)
        }
        var a = i.arr(n) ? n : [n];
        return a.map(function(n, r) {
            var t = i.obj(n) && !i.pth(n) ? n : {
                value: n
            };
            return i.und(t.delay) && (t.delay = r ? 0 : e.delay),
            i.und(t.endDelay) && (t.endDelay = r === a.length - 1 ? e.endDelay : 0),
            t
        }).map(function(n) {
            return k(n, r)
        })
    }
    function z(n, e) {
        var r = []
          , t = e.keyframes;
        for (var a in t && (e = k(function(n) {
            for (var e = m(y(n.map(function(n) {
                return Object.keys(n)
            })), function(n) {
                return i.key(n)
            }).reduce(function(n, e) {
                return n.indexOf(e) < 0 && n.push(e),
                n
            }, []), r = {}, t = function(t) {
                var a = e[t];
                r[a] = n.map(function(n) {
                    var e = {};
                    for (var r in n)
                        i.key(r) ? r == a && (e.value = n[r]) : e[r] = n[r];
                    return e
                })
            }, a = 0; a < e.length; a++)
                t(a);
            return r
        }(t), e)),
        e)
            i.key(a) && r.push({
                name: a,
                tweens: V(e[a], n)
            });
        return r
    }
    function H(n, e) {
        var r;
        return n.tweens.map(function(t) {
            var a = function(n, e) {
                var r = {};
                for (var t in n) {
                    var a = B(n[t], e);
                    i.arr(a) && 1 === (a = a.map(function(n) {
                        return B(n, e)
                    })).length && (a = a[0]),
                    r[t] = a
                }
                return r.duration = parseFloat(r.duration),
                r.delay = parseFloat(r.delay),
                r
            }(t, e)
              , o = a.value
              , u = i.arr(o) ? o[1] : o
              , c = C(u)
              , s = N(e.target, n.name, c, e)
              , f = r ? r.to.original : s
              , l = i.arr(o) ? o[0] : f
              , d = C(l) || C(s)
              , p = c || d;
            return i.und(u) && (u = f),
            a.from = Y(l, p),
            a.to = Y(A(u, l), p),
            a.start = r ? r.end : 0,
            a.end = a.start + a.delay + a.duration + a.endDelay,
            a.easing = v(a.easing, a.duration),
            a.isPath = i.pth(o),
            a.isColor = i.col(a.from.original),
            a.isColor && (a.round = 1),
            r = a,
            a
        })
    }
    var G = {
        css: function(n, e, r) {
            return n.style[e] = r
        },
        attribute: function(n, e, r) {
            return n.setAttribute(e, r)
        },
        object: function(n, e, r) {
            return n[e] = r
        },
        transform: function(n, e, r, t, a) {
            if (t.list.set(e, r),
            e === t.last || a) {
                var o = "";
                t.list.forEach(function(n, e) {
                    o += e + "(" + n + ") "
                }),
                n.style.transform = o
            }
        }
    };
    function R(n, e) {
        Q(n).forEach(function(n) {
            for (var r in e) {
                var t = B(e[r], n)
                  , a = n.target
                  , o = C(t)
                  , u = N(a, r, o, n)
                  , i = A(L(t, o || C(u)), u)
                  , c = D(a, r);
                G[c](a, r, i, n.transforms, !0)
            }
        })
    }
    function W(n, e) {
        return m(y(n.map(function(n) {
            return e.map(function(e) {
                return function(n, e) {
                    var r = D(n.target, e.name);
                    if (r) {
                        var t = H(e, n)
                          , a = t[t.length - 1];
                        return {
                            type: r,
                            property: e.name,
                            animatable: n,
                            tweens: t,
                            duration: a.end,
                            delay: t[0].delay,
                            endDelay: a.endDelay
                        }
                    }
                }(n, e)
            })
        })), function(n) {
            return !i.und(n)
        })
    }
    function J(n, e) {
        var r = n.length
          , t = function(n) {
            return n.timelineOffset ? n.timelineOffset : 0
        }
          , a = {};
        return a.duration = r ? Math.max.apply(Math, n.map(function(n) {
            return t(n) + n.duration
        })) : e.duration,
        a.delay = r ? Math.min.apply(Math, n.map(function(n) {
            return t(n) + n.delay
        })) : e.delay,
        a.endDelay = r ? a.duration - Math.max.apply(Math, n.map(function(n) {
            return t(n) + n.duration - n.endDelay
        })) : e.endDelay,
        a
    }
    var K = 0;
    var U, _ = [], nn = [], en = function() {
        function n() {
            U = requestAnimationFrame(e)
        }
        function e(e) {
            var r = _.length;
            if (r) {
                for (var t = 0; t < r; ) {
                    var a = _[t];
                    if (a.paused) {
                        var o = _.indexOf(a);
                        o > -1 && (_.splice(o, 1),
                        r = _.length)
                    } else
                        a.tick(e);
                    t++
                }
                n()
            } else
                U = cancelAnimationFrame(U)
        }
        return n
    }();
    function rn(r) {
        void 0 === r && (r = {});
        var t, o = 0, u = 0, i = 0, c = 0, s = null;
        function f(n) {
            var e = window.Promise && new Promise(function(n) {
                return s = n
            }
            );
            return n.finished = e,
            e
        }
        var l, d, p, h, v, g, y, b, x = (d = w(n, l = r),
        p = w(e, l),
        h = z(p, l),
        v = Q(l.targets),
        g = W(v, h),
        y = J(g, p),
        b = K,
        K++,
        k(d, {
            id: b,
            children: [],
            animatables: v,
            animations: g,
            duration: y.duration,
            delay: y.delay,
            endDelay: y.endDelay
        }));
        f(x);
        function M() {
            var n = x.direction;
            "alternate" !== n && (x.direction = "normal" !== n ? "normal" : "reverse"),
            x.reversed = !x.reversed,
            t.forEach(function(n) {
                return n.reversed = x.reversed
            })
        }
        function O(n) {
            return x.reversed ? x.duration - n : n
        }
        function C() {
            o = 0,
            u = O(x.currentTime) * (1 / rn.speed)
        }
        function B(n, e) {
            e && e.seek(n - e.timelineOffset)
        }
        function P(n) {
            for (var e = 0, r = x.animations, t = r.length; e < t; ) {
                var o = r[e]
                  , u = o.animatable
                  , i = o.tweens
                  , c = i.length - 1
                  , s = i[c];
                c && (s = m(i, function(e) {
                    return n < e.end
                })[0] || s);
                for (var f = a(n - s.start - s.delay, 0, s.duration) / s.duration, l = isNaN(f) ? 1 : s.easing(f), d = s.to.strings, p = s.round, h = [], v = s.to.numbers.length, g = void 0, y = 0; y < v; y++) {
                    var b = void 0
                      , M = s.to.numbers[y]
                      , w = s.from.numbers[y] || 0;
                    b = s.isPath ? X(s.value, l * M) : w + l * (M - w),
                    p && (s.isColor && y > 2 || (b = Math.round(b * p) / p)),
                    h.push(b)
                }
                var k = d.length;
                if (k) {
                    g = d[0];
                    for (var O = 0; O < k; O++) {
                        d[O];
                        var C = d[O + 1]
                          , B = h[O];
                        isNaN(B) || (g += C ? B + C : B + " ")
                    }
                } else
                    g = h[0];
                G[o.type](u.target, o.property, g, u.transforms),
                o.currentValue = g,
                e++
            }
        }
        function I(n) {
            x[n] && !x.passThrough && x[n](x)
        }
        function T(n) {
            var e = x.duration
              , r = x.delay
              , l = e - x.endDelay
              , d = O(n);
            x.progress = a(d / e * 100, 0, 100),
            x.reversePlayback = d < x.currentTime,
            t && function(n) {
                if (x.reversePlayback)
                    for (var e = c; e--; )
                        B(n, t[e]);
                else
                    for (var r = 0; r < c; r++)
                        B(n, t[r])
            }(d),
            !x.began && x.currentTime > 0 && (x.began = !0,
            I("begin")),
            !x.loopBegan && x.currentTime > 0 && (x.loopBegan = !0,
            I("loopBegin")),
            d <= r && 0 !== x.currentTime && P(0),
            (d >= l && x.currentTime !== e || !e) && P(e),
            d > r && d < l ? (x.changeBegan || (x.changeBegan = !0,
            x.changeCompleted = !1,
            I("changeBegin")),
            I("change"),
            P(d)) : x.changeBegan && (x.changeCompleted = !0,
            x.changeBegan = !1,
            I("changeComplete")),
            x.currentTime = a(d, 0, e),
            x.began && I("update"),
            n >= e && (u = 0,
            x.remaining && !0 !== x.remaining && x.remaining--,
            x.remaining ? (o = i,
            I("loopComplete"),
            x.loopBegan = !1,
            "alternate" === x.direction && M()) : (x.paused = !0,
            x.completed || (x.completed = !0,
            I("loopComplete"),
            I("complete"),
            !x.passThrough && "Promise"in window && (s(),
            f(x)))))
        }
        return x.reset = function() {
            var n = x.direction;
            x.passThrough = !1,
            x.currentTime = 0,
            x.progress = 0,
            x.paused = !0,
            x.began = !1,
            x.loopBegan = !1,
            x.changeBegan = !1,
            x.completed = !1,
            x.changeCompleted = !1,
            x.reversePlayback = !1,
            x.reversed = "reverse" === n,
            x.remaining = x.loop,
            t = x.children;
            for (var e = c = t.length; e--; )
                x.children[e].reset();
            (x.reversed && !0 !== x.loop || "alternate" === n && 1 === x.loop) && x.remaining++,
            P(x.reversed ? x.duration : 0)
        }
        ,
        x.set = function(n, e) {
            return R(n, e),
            x
        }
        ,
        x.tick = function(n) {
            i = n,
            o || (o = i),
            T((i + (u - o)) * rn.speed)
        }
        ,
        x.seek = function(n) {
            T(O(n))
        }
        ,
        x.pause = function() {
            x.paused = !0,
            C()
        }
        ,
        x.play = function() {
            x.paused && (x.completed && x.reset(),
            x.paused = !1,
            _.push(x),
            C(),
            U || en())
        }
        ,
        x.reverse = function() {
            M(),
            x.completed = !x.reversed,
            C()
        }
        ,
        x.restart = function() {
            x.reset(),
            x.play()
        }
        ,
        x.reset(),
        x.autoplay && x.play(),
        x
    }
    function tn(n, e) {
        for (var r = e.length; r--; )
            x(n, e[r].animatable.target) && e.splice(r, 1)
    }
    return "undefined" != typeof document && document.addEventListener("visibilitychange", function() {
        document.hidden ? (_.forEach(function(n) {
            return n.pause()
        }),
        nn = _.slice(0),
        rn.running = _ = []) : nn.forEach(function(n) {
            return n.play()
        })
    }),
    rn.version = "3.2.0",
    rn.speed = 1,
    rn.running = _,
    rn.remove = function(n) {
        for (var e = Z(n), r = _.length; r--; ) {
            var t = _[r]
              , a = t.animations
              , o = t.children;
            tn(e, a);
            for (var u = o.length; u--; ) {
                var i = o[u]
                  , c = i.animations;
                tn(e, c),
                c.length || i.children.length || o.splice(u, 1)
            }
            a.length || o.length || t.pause()
        }
    }
    ,
    rn.get = N,
    rn.set = R,
    rn.convertPx = I,
    rn.path = function(n, e) {
        var r = i.str(n) ? g(n)[0] : n
          , t = e || 100;
        return function(n) {
            return {
                property: n,
                el: r,
                svg: $(r),
                totalLength: q(r) * (t / 100)
            }
        }
    }
    ,
    rn.setDashoffset = function(n) {
        var e = q(n);
        return n.setAttribute("stroke-dasharray", e),
        e
    }
    ,
    rn.stagger = function(n, e) {
        void 0 === e && (e = {});
        var r = e.direction || "normal"
          , t = e.easing ? v(e.easing) : null
          , a = e.grid
          , o = e.axis
          , u = e.from || 0
          , c = "first" === u
          , s = "center" === u
          , f = "last" === u
          , l = i.arr(n)
          , d = l ? parseFloat(n[0]) : parseFloat(n)
          , p = l ? parseFloat(n[1]) : 0
          , h = C(l ? n[1] : n) || 0
          , g = e.start || 0 + (l ? d : 0)
          , m = []
          , y = 0;
        return function(n, e, i) {
            if (c && (u = 0),
            s && (u = (i - 1) / 2),
            f && (u = i - 1),
            !m.length) {
                for (var v = 0; v < i; v++) {
                    if (a) {
                        var b = s ? (a[0] - 1) / 2 : u % a[0]
                          , x = s ? (a[1] - 1) / 2 : Math.floor(u / a[0])
                          , M = b - v % a[0]
                          , w = x - Math.floor(v / a[0])
                          , k = Math.sqrt(M * M + w * w);
                        "x" === o && (k = -M),
                        "y" === o && (k = -w),
                        m.push(k)
                    } else
                        m.push(Math.abs(u - v));
                    y = Math.max.apply(Math, m)
                }
                t && (m = m.map(function(n) {
                    return t(n / y) * y
                })),
                "reverse" === r && (m = m.map(function(n) {
                    return o ? n < 0 ? -1 * n : -n : Math.abs(y - n)
                }))
            }
            return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h
        }
    }
    ,
    rn.timeline = function(n) {
        void 0 === n && (n = {});
        var r = rn(n);
        return r.duration = 0,
        r.add = function(t, a) {
            var o = _.indexOf(r)
              , u = r.children;
            function c(n) {
                n.passThrough = !0
            }
            o > -1 && _.splice(o, 1);
            for (var s = 0; s < u.length; s++)
                c(u[s]);
            var f = k(t, w(e, n));
            f.targets = f.targets || n.targets;
            var l = r.duration;
            f.autoplay = !1,
            f.direction = r.direction,
            f.timelineOffset = i.und(a) ? l : A(a, l),
            c(r),
            r.seek(f.timelineOffset);
            var d = rn(f);
            c(d),
            u.push(d);
            var p = J(u, n);
            return r.delay = p.delay,
            r.endDelay = p.endDelay,
            r.duration = p.duration,
            r.seek(0),
            r.reset(),
            r.autoplay && r.play(),
            r
        }
        ,
        r
    }
    ,
    rn.easing = v,
    rn.penner = h,
    rn.random = function(n, e) {
        return Math.floor(Math.random() * (e - n + 1)) + n
    }
    ,
    rn
});

/* Jquery Splitlines */

/**
 * Splits new lines of text into separate divs
 *
 * ### Options:
 * - `width` string The width of the box. By default, it tries to use the
 *	 element's width. If you don't define a width, there's no way to split it
 *	 by lines!
 *	- `tag` string The tag to wrap the lines in
 *	- `keepHtml` boolean Whether or not to try and preserve the html within
 *	 the element. Default is true
 *
 *	@param options object The options object
 *	@license MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {

    /**
 * Creates a temporary clone
 *
 * @param element element The element to clone
 */
    function _createTemp(element) {
        return element.clone().css({
            position: 'absolute'
        });
    }
    ;
    /**
 * Splits contents into words, keeping their original Html tag. Note that this
 * tags *each* word with the tag it was found in, so when the wrapping begins
 * the tags stay intact. This may have an effect on your styles (say, if you have
 * margin, each word will inherit those styles).
 *
 * @param node contents The contents
 */
    function _splitHtmlWords(contents) {
        var words = [];
        var splitContent;
        for (var c = 0; c < contents.length; c++) {
            if (contents[c].nodeName === 'BR') {
                words.push('<br>');
                continue;
            }
            if (contents[c].nodeType == 3) {
                splitContent = _splitWords(contents[c].textContent || contents[c].toString());
            } else {
                var tag = $(contents[c]).clone();
                splitContent = _splitHtmlWords(tag.contents());
                for (var t = 0; t < splitContent.length; t++) {
                    tag.empty();
                    splitContent[t] = tag.html(splitContent[t]).wrap('<p></p>').parent().html();
                }
            }
            for (var w = 0; w < splitContent.length; w++) {
                if (splitContent[w] === '') {
                    continue;
                }
                words.push(splitContent[w]);
            }
        }
        return words;
    }
    ;
    /**
 * Splits words by spaces
 *
 * @param string text The text to split
 */
    function _splitWords(text) {
        return text.split(/\s+/);
    }

    /**
 * Formats html with tags and wrappers.
 *
 * @param tag
 * @param html content wrapped by the tag
 * @param index Current line index
 */
    function _markupContent(tag, html, index) {
        // wrap in a temp div so .html() gives us the tags we specify
        tag = '<div class="stop">' + tag;
        // find the deepest child, add html, then find the parent
        var $outer = $(tag).find('*:not(:has("*"))').html(html).closest('.stop').slice(-1);

        // jQuery does not support setting CSS vars until 3.2, so manually set them
        $outer.children().each(function(i, element) {
            element.style.setProperty('--line-index', index);
        });

        return $outer.html();
    }

    /**
 * The jQuery plugin function. See the top of this file for information on the
 * options
 */
    $.fn.splitLines = function(options) {
        var settings = {
            width: 'auto',
            tag: '<div>',
            wrap: '',
            keepHtml: true
        };
        if (options) {
            $.extend(settings, options);
        }
        var newHtml = _createTemp(this);
        var contents = this.contents();
        var text = this.text();
        this.append(newHtml);
        newHtml.text('42');
        var maxHeight = newHtml.height() + 2;
        newHtml.empty();

        var tempLine = _createTemp(newHtml);
        var width = settings.width;
        if (settings.width === 'auto') {
            width = this[0].offsetWidth;
        }
        tempLine.width(width);
        this.append(tempLine);
        var words = settings.keepHtml ? _splitHtmlWords(contents) : _splitWords(text);
        var prev;
        var lineCount = 0;
        for (var w = 0; w < words.length; w++) {
            var html = tempLine.html();
            tempLine.html(html + words[w] + ' ');
            if (tempLine.html() == prev) {
                // repeating word, it will never fit so just use it instead of failing
                prev = '';
                newHtml.append(_markupContent(settings.tag, tempLine.html(), lineCount));
                tempLine.html('');
                continue;
            }
            if (tempLine.height() > maxHeight) {
                prev = tempLine.html();
                tempLine.html(html);
                newHtml.append(_markupContent(settings.tag, tempLine.html(), lineCount));
                tempLine.html('');
                w--;
                lineCount++;
            }
        }
        newHtml.append(_markupContent(settings.tag, tempLine.html(), lineCount));

        this.html(newHtml.html());

    }
    ;
}
)(jQuery);

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
              , n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[e] = i[e] || {};
            return n[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0),
            t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(e, r),
                delete n[r]),
                r.apply(this, t)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function n(e) {
        if (Array.isArray(e))
            return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }
    function o(e, t, r) {
        if (!(this instanceof o))
            return new o(e,t,r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)),
        s ? (this.elements = n(s),
        this.options = i({}, this.options),
        "function" == typeof t ? r = t : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }
    function r(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var h = e.jQuery
      , a = e.console
      , d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, e),
                n = i.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var i = new s(e,t);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (h = t,
        h.fn.imagesLoaded = function(e, t) {
            var i = new o(this,e,t);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});
