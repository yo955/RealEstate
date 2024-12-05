!(function (n) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 5));
})([
  function (t, e, n) {
    var y = n(9),
      i = {},
      r = !1;
    function p(t, e) {
      return e === b(t);
    }
    function b(t) {
      var e = typeof t;
      return "object" != e
        ? e
        : t
        ? t instanceof Error
          ? "error"
          : {}.toString
              .call(t)
              .match(/\s([a-zA-Z]+)/)[1]
              .toLowerCase()
        : "null";
    }
    function a(t) {
      return p(t, "function");
    }
    function o(t) {
      var e = Function.prototype.toString
          .call(Object.prototype.hasOwnProperty)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ),
        n = RegExp("^" + e + "$");
      return (
        (function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        })(t) && n.test(t)
      );
    }
    function u(t, e, n) {
      var r,
        o,
        i,
        a = p(t, "object"),
        s = p(t, "array"),
        u = [];
      if (a && -1 !== n.indexOf(t)) return t;
      if ((n.push(t), a))
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && u.push(r);
      else if (s) for (i = 0; i < t.length; ++i) u.push(i);
      var c = a ? {} : [],
        l = !0;
      for (i = 0; i < u.length; ++i)
        (o = t[(r = u[i])]), (c[r] = e(r, o, n)), (l = l && c[r] === t[r]);
      return 0 == u.length || l ? t : c;
    }
    function s() {
      return "********";
    }
    function w() {
      var n = x();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (t) {
          var e = (n + 16 * Math.random()) % 16 | 0;
          return (
            (n = Math.floor(n / 16)), ("x" === t ? e : (7 & e) | 8).toString(16)
          );
        }
      );
    }
    r ||
      ((r = !0),
      p(JSON, "undefined") ||
        (o(JSON.stringify) && (i.stringify = JSON.stringify),
        o(JSON.parse) && (i.parse = JSON.parse)),
      (a(i.stringify) && a(i.parse)) || n(10)(i));
    var c = {
      strictMode: !1,
      key: [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
      ],
      q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
      parser: {
        strict:
          /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:
          /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      },
    };
    function l(e, n) {
      var r, o;
      try {
        r = i.stringify(e);
      } catch (t) {
        if (n && a(n))
          try {
            r = n(e);
          } catch (t) {
            o = t;
          }
        else o = t;
      }
      return { error: o, value: r };
    }
    function _(n, r) {
      return function (t, e) {
        try {
          r(t, e);
        } catch (t) {
          n.error(t);
        }
      };
    }
    var f = ["log", "network", "dom", "navigation", "error", "manual"],
      h = ["critical", "error", "warning", "info", "debug"];
    function d(t, e) {
      for (var n = 0; n < t.length; ++n) if (t[n] === e) return !0;
      return !1;
    }
    function x() {
      return Date.now ? +Date.now() : +new Date();
    }
    t.exports = {
      addParamsAndAccessTokenToPath: function (t, e, n) {
        (n = n || {}).access_token = t;
        var r,
          o = [];
        for (r in n)
          Object.prototype.hasOwnProperty.call(n, r) &&
            o.push([r, n[r]].join("="));
        var i = "?" + o.sort().join("&");
        (e = e || {}).path = e.path || "";
        var a,
          s = e.path.indexOf("?"),
          u = e.path.indexOf("#");
        -1 !== s && (-1 === u || s < u)
          ? ((a = e.path),
            (e.path = a.substring(0, s) + i + "&" + a.substring(s + 1)))
          : -1 !== u
          ? ((a = e.path), (e.path = a.substring(0, u) + i + a.substring(u)))
          : (e.path = e.path + i);
      },
      createItem: function (t, e, n, r, o) {
        for (var i, a, s, u, c, l, p = [], f = 0, h = t.length; f < h; ++f) {
          var d = b((l = t[f]));
          switch (d) {
            case "undefined":
              break;
            case "string":
              i ? p.push(l) : (i = l);
              break;
            case "function":
              u = _(e, l);
              break;
            case "date":
              p.push(l);
              break;
            case "error":
            case "domexception":
            case "exception":
              a ? p.push(l) : (a = l);
              break;
            case "object":
            case "array":
              if (
                l instanceof Error ||
                ("undefined" != typeof DOMException &&
                  l instanceof DOMException)
              ) {
                a ? p.push(l) : (a = l);
                break;
              }
              if (r && "object" === d && !c) {
                for (var m = 0, g = r.length; m < g; ++m)
                  if (void 0 !== l[r[m]]) {
                    c = l;
                    break;
                  }
                if (c) break;
              }
              s ? p.push(l) : (s = l);
              break;
            default:
              if (
                l instanceof Error ||
                ("undefined" != typeof DOMException &&
                  l instanceof DOMException)
              ) {
                a ? p.push(l) : (a = l);
                break;
              }
              p.push(l);
          }
        }
        0 < p.length && ((s = y(s)).extraArgs = p);
        var v = {
          message: i,
          err: a,
          custom: s,
          timestamp: x(),
          callback: u,
          uuid: w(),
        };
        return (
          s && void 0 !== s.level && ((v.level = s.level), delete s.level),
          r && c && (v.request = c),
          o && (v.lambdaContext = o),
          (v._originalArgs = t),
          v
        );
      },
      createTelemetryEvent: function (t) {
        for (var e, n, r, o, i = 0, a = t.length; i < a; ++i)
          switch (b((o = t[i]))) {
            case "string":
              d(f, o) ? (e = o) : d(h, o) && (r = o);
              break;
            case "object":
              n = o;
          }
        return { type: e || "manual", metadata: n || {}, level: r };
      },
      filterIp: function (t, e) {
        if (t && t.user_ip && !0 !== e) {
          var n = t.user_ip;
          if (e)
            try {
              var r;
              if (-1 !== n.indexOf("."))
                (r = n.split(".")).pop(), r.push("0"), (n = r.join("."));
              else if (-1 !== n.indexOf(":")) {
                if (2 < (r = n.split(":")).length) {
                  var o = r.slice(0, 3),
                    i = o[2].indexOf("/");
                  -1 !== i && (o[2] = o[2].substring(0, i)),
                    (n = o.concat("0000:0000:0000:0000:0000").join(":"));
                }
              } else n = null;
            } catch (t) {
              n = null;
            }
          else n = null;
          t.user_ip = n;
        }
      },
      formatArgsAsString: function (t) {
        var e,
          n,
          r,
          o = [];
        for (e = 0, n = t.length; e < n; ++e) {
          switch (b((r = t[e]))) {
            case "object":
              500 < (r = (r = l(r)).error || r.value).length &&
                (r = r.substr(0, 497) + "...");
              break;
            case "null":
              r = "null";
              break;
            case "undefined":
              r = "undefined";
              break;
            case "symbol":
              r = r.toString();
          }
          o.push(r);
        }
        return o.join(" ");
      },
      formatUrl: function (t, e) {
        if (
          (!(e = e || t.protocol) &&
            t.port &&
            (80 === t.port ? (e = "http:") : 443 === t.port && (e = "https:")),
          (e = e || "https:"),
          !t.hostname)
        )
          return null;
        var n = e + "//" + t.hostname;
        return t.port && (n = n + ":" + t.port), t.path && (n += t.path), n;
      },
      get: function (t, e) {
        if (t) {
          var n = e.split("."),
            r = t;
          try {
            for (var o = 0, i = n.length; o < i; ++o) r = r[n[o]];
          } catch (t) {
            r = void 0;
          }
          return r;
        }
      },
      handleOptions: function (t, e, n) {
        var r = y(t, e, n);
        return (
          !e ||
            e.overwriteScrubFields ||
            (e.scrubFields &&
              (r.scrubFields = (t.scrubFields || []).concat(e.scrubFields))),
          r
        );
      },
      isError: function (t) {
        return p(t, "error") || p(t, "exception");
      },
      isFunction: a,
      isIterable: function (t) {
        var e = b(t);
        return "object" === e || "array" === e;
      },
      isNativeFunction: o,
      isType: p,
      jsonParse: function (t) {
        var e, n;
        try {
          e = i.parse(t);
        } catch (t) {
          n = t;
        }
        return { error: n, value: e };
      },
      LEVELS: { debug: 0, info: 1, warning: 2, error: 3, critical: 4 },
      makeUnhandledStackInfo: function (t, e, n, r, o, i, a, s) {
        var u = { url: e || "", line: n, column: r };
        (u.func = s.guessFunctionName(u.url, u.line)),
          (u.context = s.gatherContext(u.url, u.line));
        var c = document && document.location && document.location.href,
          l = window && window.navigator && window.navigator.userAgent;
        return {
          mode: i,
          message: o ? String(o) : t || a,
          url: c,
          stack: [u],
          useragent: l,
        };
      },
      merge: y,
      now: x,
      redact: s,
      sanitizeUrl: function (t) {
        var e = (function (t) {
          if (p(t, "string")) {
            for (
              var r = c,
                e = r.parser[r.strictMode ? "strict" : "loose"].exec(t),
                o = {},
                n = 0,
                i = r.key.length;
              n < i;
              ++n
            )
              o[r.key[n]] = e[n] || "";
            return (
              (o[r.q.name] = {}),
              o[r.key[12]].replace(r.q.parser, function (t, e, n) {
                e && (o[r.q.name][e] = n);
              }),
              o
            );
          }
        })(t);
        return e
          ? ("" === e.anchor && (e.source = e.source.replace("#", "")),
            (t = e.source.replace("?" + e.query, "")))
          : "(unknown)";
      },
      scrub: function (t, e) {
        var i = (function (t) {
            for (var e, n = [], r = 0; r < t.length; ++r)
              (e = "^\\[?(%5[bB])?" + t[r] + "\\[?(%5[bB])?\\]?(%5[dD])?$"),
                n.push(new RegExp(e, "i"));
            return n;
          })((e = e || [])),
          a = (function (t) {
            for (var e, n = [], r = 0; r < t.length; ++r)
              (e = "\\[?(%5[bB])?" + t[r] + "\\[?(%5[bB])?\\]?(%5[dD])?"),
                n.push(new RegExp("(" + e + "=)([^&\\n]+)", "igm"));
            return n;
          })(e);
        function s(t, e) {
          return e + "********";
        }
        return u(
          t,
          function t(e, n, r) {
            var o = (function (t, e) {
              var n;
              for (n = 0; n < i.length; ++n)
                if (i[n].test(t)) {
                  e = "********";
                  break;
                }
              return e;
            })(e, n);
            return o === n
              ? p(n, "object") || p(n, "array")
                ? u(n, t, r)
                : (function (t) {
                    var e;
                    if (p(t, "string"))
                      for (e = 0; e < a.length; ++e) t = t.replace(a[e], s);
                    return t;
                  })(o)
              : o;
          },
          []
        );
      },
      set: function (t, e, n) {
        if (t) {
          var r = e.split("."),
            o = r.length;
          if (!(o < 1))
            if (1 !== o)
              try {
                for (var i = t[r[0]] || {}, a = i, s = 1; s < o - 1; ++s)
                  (i[r[s]] = i[r[s]] || {}), (i = i[r[s]]);
                (i[r[o - 1]] = n), (t[r[0]] = a);
              } catch (t) {
                return;
              }
            else t[r[0]] = n;
        }
      },
      stringify: l,
      traverse: u,
      typeName: b,
      uuid4: w,
    };
  },
  function (t, e, n) {
    n(16);
    var r = n(17),
      o = n(0);
    t.exports = {
      error: function () {
        var t = Array.prototype.slice.call(arguments, 0);
        t.unshift("Rollbar:"),
          r.ieVersion() <= 8
            ? console.error(o.formatArgsAsString(t))
            : console.error.apply(console, t);
      },
      info: function () {
        var t = Array.prototype.slice.call(arguments, 0);
        t.unshift("Rollbar:"),
          r.ieVersion() <= 8
            ? console.info(o.formatArgsAsString(t))
            : console.info.apply(console, t);
      },
      log: function () {
        var t = Array.prototype.slice.call(arguments, 0);
        t.unshift("Rollbar:"),
          r.ieVersion() <= 8
            ? console.log(o.formatArgsAsString(t))
            : console.log.apply(console, t);
      },
    };
  },
  function (t, e, n) {
    var s = n(0);
    function c(t, e) {
      return [t, s.stringify(t, e)];
    }
    function u(t, e) {
      var n = t.length;
      return 2 * e < n ? t.slice(0, e).concat(t.slice(n - e)) : t;
    }
    function l(t, e, n) {
      n = void 0 === n ? 30 : n;
      var r,
        o = t.data.body;
      if (o.trace_chain)
        for (var i = o.trace_chain, a = 0; a < i.length; a++)
          (r = u((r = i[a].frames), n)), (i[a].frames = r);
      else o.trace && ((r = u((r = o.trace.frames), n)), (o.trace.frames = r));
      return [t, s.stringify(t, e)];
    }
    function i(t, e) {
      return e && e.length > t ? e.slice(0, t - 3).concat("...") : e;
    }
    function p(o, t, e) {
      return [
        (t = s.traverse(
          t,
          function t(e, n, r) {
            switch (s.typeName(n)) {
              case "string":
                return i(o, n);
              case "object":
              case "array":
                return s.traverse(n, t, r);
              default:
                return n;
            }
          },
          []
        )),
        s.stringify(t, e),
      ];
    }
    function a(t) {
      return (
        t.exception &&
          (delete t.exception.description,
          (t.exception.message = i(255, t.exception.message))),
        (t.frames = u(t.frames, 1)),
        t
      );
    }
    function f(t, e) {
      var n = t.data.body;
      if (n.trace_chain)
        for (var r = n.trace_chain, o = 0; o < r.length; o++) r[o] = a(r[o]);
      else n.trace && (n.trace = a(n.trace));
      return [t, s.stringify(t, e)];
    }
    t.exports = {
      truncate: function (t, e, n) {
        n = void 0 === n ? 524288 : n;
        for (
          var r,
            o,
            i,
            a,
            s,
            u = [
              c,
              l,
              p.bind(null, 1024),
              p.bind(null, 512),
              p.bind(null, 256),
              f,
            ];
          (r = u.shift());

        )
          if (
            ((t = (o = r(t, e))[0]),
            (i = o[1]).error || ((a = i.value), (s = n), !(a.length > s)))
          )
            return i;
        return i;
      },
      raw: c,
      truncateFrames: l,
      truncateStrings: p,
      maybeTruncateValue: i,
    };
  },
  function (t, e) {
    t.exports = {
      parse: function (t) {
        var e,
          n,
          r = {
            protocol: null,
            auth: null,
            host: null,
            path: null,
            hash: null,
            href: t,
            hostname: null,
            port: null,
            pathname: null,
            search: null,
            query: null,
          };
        if (
          ((n =
            -1 !== (e = t.indexOf("//"))
              ? ((r.protocol = t.substring(0, e)), e + 2)
              : 0),
          -1 !== (e = t.indexOf("@", n)) &&
            ((r.auth = t.substring(n, e)), (n = e + 1)),
          -1 === (e = t.indexOf("/", n)))
        ) {
          if (-1 === (e = t.indexOf("?", n)))
            return (
              -1 === (e = t.indexOf("#", n))
                ? (r.host = t.substring(n))
                : ((r.host = t.substring(n, e)), (r.hash = t.substring(e))),
              (r.hostname = r.host.split(":")[0]),
              (r.port = r.host.split(":")[1]),
              r.port && (r.port = parseInt(r.port, 10)),
              r
            );
          (r.host = t.substring(n, e)),
            (r.hostname = r.host.split(":")[0]),
            (r.port = r.host.split(":")[1]),
            r.port && (r.port = parseInt(r.port, 10)),
            (n = e);
        } else
          (r.host = t.substring(n, e)),
            (r.hostname = r.host.split(":")[0]),
            (r.port = r.host.split(":")[1]),
            r.port && (r.port = parseInt(r.port, 10)),
            (n = e);
        if (
          (-1 === (e = t.indexOf("#", n))
            ? (r.path = t.substring(n))
            : ((r.path = t.substring(n, e)), (r.hash = t.substring(e))),
          r.path)
        ) {
          var o = r.path.split("?");
          (r.pathname = o[0]),
            (r.query = o[1]),
            (r.search = r.query ? "?" + r.query : null);
        }
        return r;
      },
    };
  },
  function (t, e, n) {
    var i = n(21),
      r = new RegExp(
        "^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): "
      );
    function o() {
      return null;
    }
    function a(t) {
      var e = {};
      return (
        (e._stackFrame = t),
        (e.url = t.fileName),
        (e.line = t.lineNumber),
        (e.func = t.functionName),
        (e.column = t.columnNumber),
        (e.args = t.args),
        (e.context = null),
        e
      );
    }
    function s(o) {
      var t = o.constructor && o.constructor.name;
      return (
        (t && t.length && !(t.length < 3)) || (t = o.name),
        {
          stack: (function () {
            var e,
              n = [];
            if (o.stack) e = o;
            else
              try {
                throw o;
              } catch (t) {
                e = t;
              }
            try {
              n = i.parse(e);
            } catch (t) {
              n = [];
            }
            for (var t = [], r = 0; r < n.length; r++) t.push(new a(n[r]));
            return t;
          })(),
          message: o.message,
          name: t,
          rawStack: o.stack,
          rawException: o,
        }
      );
    }
    t.exports = {
      guessFunctionName: function () {
        return "?";
      },
      guessErrorClass: function (t) {
        if (!t || !t.match)
          return ["Unknown error. There was no error message to display.", ""];
        var e = t.match(r),
          n = "(unknown)";
        return (
          e &&
            ((n = e[e.length - 1]),
            (t = (t = t.replace((e[e.length - 2] || "") + n + ":", "")).replace(
              /(^[\s]+|[\s]+$)/g,
              ""
            ))),
          [n, t]
        );
      },
      gatherContext: o,
      parse: function (t) {
        var e = t;
        if (e.nested) {
          for (var n = []; e; ) n.push(new s(e)), (e = e.nested);
          return (n[0].traceChain = n)[0];
        }
        return new s(e);
      },
      Stack: s,
      Frame: a,
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = "undefined" != typeof window && window._rollbarConfig,
      i = (o && o.globalAlias) || "Rollbar",
      a =
        "undefined" != typeof window &&
        window[i] &&
        "function" == typeof window[i].shimId &&
        void 0 !== window[i].shimId();
    if (
      ("undefined" == typeof window ||
        window._rollbarStartTime ||
        (window._rollbarStartTime = new Date().getTime()),
      !a && o)
    ) {
      var s = new r(o);
      window[i] = s;
    } else
      "undefined" != typeof window
        ? ((window.rollbar = r), (window._rollbarDidLoad = !0))
        : "undefined" != typeof self &&
          ((self.rollbar = r), (self._rollbarDidLoad = !0));
    t.exports = r;
  },
  function (t, e, n) {
    var i = n(7),
      u = n(0),
      a = n(14),
      s = n(1),
      r = n(18),
      c = n(19),
      l = n(3),
      p = n(20),
      f = n(23),
      h = n(24),
      d = n(25),
      m = n(4),
      g = n(26);
    function o(t, e) {
      (this.options = u.handleOptions(_, t)),
        (this.options._configuredOptions = t);
      var n = new a(this.options, c, l);
      this.client = e || new i(this.options, n, s, "browser");
      var r = w(),
        o = "undefined" != typeof document && document;
      (this.isChrome = r.chrome && r.chrome.runtime),
        (this.anonymousErrorsPending = 0),
        (function (t, e) {
          t.addTransform(p.handleDomException)
            .addTransform(p.handleItemWithError)
            .addTransform(p.ensureItemHasSomethingToSay)
            .addTransform(p.addBaseInfo)
            .addTransform(p.addRequestInfo(e))
            .addTransform(p.addClientInfo(e))
            .addTransform(p.addPluginInfo(e))
            .addTransform(p.addBody)
            .addTransform(f.addMessageWithError)
            .addTransform(f.addTelemetryData)
            .addTransform(f.addConfigToPayload)
            .addTransform(p.scrubPayload)
            .addTransform(f.userTransform(s))
            .addTransform(f.addConfiguredOptions)
            .addTransform(f.addDiagnosticKeys)
            .addTransform(f.itemToPayload);
        })(this.client.notifier, r),
        (function (t) {
          t.addPredicate(d.checkLevel)
            .addPredicate(h.checkIgnore)
            .addPredicate(d.userCheckIgnore(s))
            .addPredicate(d.urlIsNotBlacklisted(s))
            .addPredicate(d.urlIsWhitelisted(s))
            .addPredicate(d.messageIsIgnored(s));
        })(this.client.queue),
        this.setupUnhandledCapture(),
        (this.instrumenter = new g(
          this.options,
          this.client.telemeter,
          this,
          r,
          o
        )),
        this.instrumenter.instrument();
    }
    var v = null;
    function y(t) {
      var e = "Rollbar is not initialized";
      s.error(e), t && t(new Error(e));
    }
    function b(t) {
      for (var e = 0, n = t.length; e < n; ++e)
        if (u.isFunction(t[e])) return t[e];
    }
    function w() {
      return (
        ("undefined" != typeof window && window) ||
        ("undefined" != typeof self && self)
      );
    }
    (o.init = function (t, e) {
      return v ? v.global(t).configure(t) : (v = new o(t, e));
    }),
      (o.prototype.global = function (t) {
        return this.client.global(t), this;
      }),
      (o.global = function (t) {
        if (v) return v.global(t);
        y();
      }),
      (o.prototype.configure = function (t, e) {
        var n = this.options,
          r = {};
        return (
          e && (r = { payload: e }),
          (this.options = u.handleOptions(n, t, r)),
          (this.options._configuredOptions = u.handleOptions(
            n._configuredOptions,
            t,
            r
          )),
          this.client.configure(this.options, e),
          this.instrumenter.configure(this.options),
          this.setupUnhandledCapture(),
          this
        );
      }),
      (o.configure = function (t, e) {
        if (v) return v.configure(t, e);
        y();
      }),
      (o.prototype.lastError = function () {
        return this.client.lastError;
      }),
      (o.lastError = function () {
        if (v) return v.lastError();
        y();
      }),
      (o.prototype.log = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.log(t), { uuid: e };
      }),
      (o.log = function () {
        if (v) return v.log.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.debug = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.debug(t), { uuid: e };
      }),
      (o.debug = function () {
        if (v) return v.debug.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.info = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.info(t), { uuid: e };
      }),
      (o.info = function () {
        if (v) return v.info.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.warn = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.warn(t), { uuid: e };
      }),
      (o.warn = function () {
        if (v) return v.warn.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.warning = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.warning(t), { uuid: e };
      }),
      (o.warning = function () {
        if (v) return v.warning.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.error = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.error(t), { uuid: e };
      }),
      (o.error = function () {
        if (v) return v.error.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.critical = function () {
        var t = this._createItem(arguments),
          e = t.uuid;
        return this.client.critical(t), { uuid: e };
      }),
      (o.critical = function () {
        if (v) return v.critical.apply(v, arguments);
        y(b(arguments));
      }),
      (o.prototype.buildJsonPayload = function (t) {
        return this.client.buildJsonPayload(t);
      }),
      (o.buildJsonPayload = function () {
        if (v) return v.buildJsonPayload.apply(v, arguments);
        y();
      }),
      (o.prototype.sendJsonPayload = function (t) {
        return this.client.sendJsonPayload(t);
      }),
      (o.sendJsonPayload = function () {
        if (v) return v.sendJsonPayload.apply(v, arguments);
        y();
      }),
      (o.prototype.setupUnhandledCapture = function () {
        var t = w();
        this.unhandledExceptionsInitialized ||
          ((this.options.captureUncaught ||
            this.options.handleUncaughtExceptions) &&
            (r.captureUncaughtExceptions(t, this),
            this.options.wrapGlobalEventHandlers && r.wrapGlobals(t, this),
            (this.unhandledExceptionsInitialized = !0))),
          this.unhandledRejectionsInitialized ||
            ((this.options.captureUnhandledRejections ||
              this.options.handleUnhandledRejections) &&
              (r.captureUnhandledRejections(t, this),
              (this.unhandledRejectionsInitialized = !0)));
      }),
      (o.prototype.handleUncaughtException = function (t, e, n, r, o, i) {
        if (
          this.options.captureUncaught ||
          this.options.handleUncaughtExceptions
        )
          if (
            this.options.inspectAnonymousErrors &&
            this.isChrome &&
            null === o
          )
            this.anonymousErrorsPending += 1;
          else {
            var a,
              s = u.makeUnhandledStackInfo(
                t,
                e,
                n,
                r,
                o,
                "onerror",
                "uncaught exception",
                m
              );
            u.isError(o)
              ? ((a = this._createItem([t, o, i]))._unhandledStackInfo = s)
              : u.isError(e)
              ? ((a = this._createItem([t, e, i]))._unhandledStackInfo = s)
              : ((a = this._createItem([t, i])).stackInfo = s),
              (a.level = this.options.uncaughtErrorLevel),
              (a._isUncaught = !0),
              this.client.log(a);
          }
      }),
      (o.prototype.handleAnonymousErrors = function () {
        if (this.options.inspectAnonymousErrors && this.isChrome) {
          var n = this;
          try {
            Error.prepareStackTrace = function (t, e) {
              if (
                n.options.inspectAnonymousErrors &&
                n.anonymousErrorsPending
              ) {
                if (((n.anonymousErrorsPending -= 1), !t)) return;
                (t._isAnonymous = !0),
                  n.handleUncaughtException(t.message, null, null, null, t);
              }
              return t.toString();
            };
          } catch (t) {
            (this.options.inspectAnonymousErrors = !1),
              this.error("anonymous error handler failed", t);
          }
        }
      }),
      (o.prototype.handleUnhandledRejection = function (t, e) {
        if (
          this.options.captureUnhandledRejections ||
          this.options.handleUnhandledRejections
        ) {
          var n = "unhandled rejection was null or undefined!";
          if (t)
            if (t.message) n = t.message;
            else {
              var r = u.stringify(t);
              r.value && (n = r.value);
            }
          var o,
            i = (t && t._rollbarContext) || (e && e._rollbarContext);
          u.isError(t)
            ? (o = this._createItem([n, t, i]))
            : ((o = this._createItem([n, t, i])).stackInfo =
                u.makeUnhandledStackInfo(
                  n,
                  "",
                  0,
                  0,
                  null,
                  "unhandledrejection",
                  "",
                  m
                )),
            (o.level = this.options.uncaughtErrorLevel),
            (o._isUncaught = !0),
            (o._originalArgs = o._originalArgs || []),
            o._originalArgs.push(e),
            this.client.log(o);
        }
      }),
      (o.prototype.wrap = function (n, t, r) {
        try {
          var o;
          if (
            ((o = u.isFunction(t)
              ? t
              : function () {
                  return t || {};
                }),
            !u.isFunction(n))
          )
            return n;
          if (n._isWrap) return n;
          if (
            !n._rollbar_wrapped &&
            ((n._rollbar_wrapped = function () {
              r && u.isFunction(r) && r.apply(this, arguments);
              try {
                return n.apply(this, arguments);
              } catch (t) {
                var e = t;
                throw (
                  (e &&
                    window._rollbarWrappedError !== e &&
                    (u.isType(e, "string") && (e = new String(e)),
                    (e._rollbarContext = o() || {}),
                    (e._rollbarContext._wrappedSource = n.toString()),
                    (window._rollbarWrappedError = e)),
                  e)
                );
              }
            }),
            (n._rollbar_wrapped._isWrap = !0),
            n.hasOwnProperty)
          )
            for (var e in n)
              n.hasOwnProperty(e) &&
                "_rollbar_wrapped" !== e &&
                (n._rollbar_wrapped[e] = n[e]);
          return n._rollbar_wrapped;
        } catch (t) {
          return n;
        }
      }),
      (o.wrap = function (t, e) {
        if (v) return v.wrap(t, e);
        y();
      }),
      (o.prototype.captureEvent = function () {
        var t = u.createTelemetryEvent(arguments);
        return this.client.captureEvent(t.type, t.metadata, t.level);
      }),
      (o.captureEvent = function () {
        if (v) return v.captureEvent.apply(v, arguments);
        y();
      }),
      (o.prototype.captureDomContentLoaded = function (t, e) {
        return e || (e = new Date()), this.client.captureDomContentLoaded(e);
      }),
      (o.prototype.captureLoad = function (t, e) {
        return e || (e = new Date()), this.client.captureLoad(e);
      });
    var _ = {
      version: "2.11.0",
      scrubFields: [
        "pw",
        "pass",
        "passwd",
        "password",
        "secret",
        "confirm_password",
        "confirmPassword",
        "password_confirmation",
        "passwordConfirmation",
        "access_token",
        "accessToken",
        "secret_key",
        "secretKey",
        "secretToken",
        "cc-number",
        "card number",
        "cardnumber",
        "cardnum",
        "ccnum",
        "ccnumber",
        "cc num",
        "creditcardnumber",
        "credit card number",
        "newcreditcardnumber",
        "new credit card",
        "creditcardno",
        "credit card no",
        "card#",
        "card #",
        "cc-csc",
        "cvc2",
        "cvv2",
        "ccv2",
        "security code",
        "card verification",
        "name on credit card",
        "name on card",
        "nameoncard",
        "cardholder",
        "card holder",
        "name des karteninhabers",
        "card type",
        "cardtype",
        "cc type",
        "cctype",
        "payment type",
        "expiration date",
        "expirationdate",
        "expdate",
        "cc-exp",
      ],
      logLevel: "debug",
      reportLevel: "debug",
      uncaughtErrorLevel: "error",
      endpoint: "api.rollbar.com/api/1/item/",
      verbose: !(o.prototype._createItem = function (t) {
        return u.createItem(t, s, this);
      }),
      enabled: !0,
      transmit: !0,
      sendConfig: !1,
      includeItemsInTelemetry: !0,
      captureIp: !0,
      inspectAnonymousErrors: !0,
      ignoreDuplicateErrors: !0,
      wrapGlobalEventHandlers: !0,
    };
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(8),
      o = n(11),
      i = n(12),
      a = n(13),
      s = n(0);
    function u(t, e, n, r) {
      (this.options = s.merge(t)),
        (this.logger = n),
        u.rateLimiter.configureGlobal(this.options),
        u.rateLimiter.setPlatformOptions(r, this.options),
        (this.api = e),
        (this.queue = new o(u.rateLimiter, e, n, this.options)),
        (this.notifier = new i(this.queue, this.options)),
        (this.telemeter = new a(this.options)),
        (this.lastError = null),
        (this.lastErrorHash = "none");
    }
    (u.rateLimiter = new r({ maxItems: 0, itemsPerMinute: 60 })),
      (u.prototype.global = function (t) {
        return u.rateLimiter.configureGlobal(t), this;
      }),
      (u.prototype.configure = function (t, e) {
        var n = this.options,
          r = {};
        return (
          e && (r = { payload: e }),
          (this.options = s.merge(n, t, r)),
          this.notifier && this.notifier.configure(this.options),
          this.telemeter && this.telemeter.configure(this.options),
          this.global(this.options),
          this
        );
      }),
      (u.prototype.log = function (t) {
        var e = this._defaultLogLevel();
        return this._log(e, t);
      }),
      (u.prototype.debug = function (t) {
        this._log("debug", t);
      }),
      (u.prototype.info = function (t) {
        this._log("info", t);
      }),
      (u.prototype.warn = function (t) {
        this._log("warning", t);
      }),
      (u.prototype.warning = function (t) {
        this._log("warning", t);
      }),
      (u.prototype.error = function (t) {
        this._log("error", t);
      }),
      (u.prototype.critical = function (t) {
        this._log("critical", t);
      }),
      (u.prototype.wait = function (t) {
        this.queue.wait(t);
      }),
      (u.prototype.captureEvent = function (t, e, n) {
        return this.telemeter.captureEvent(t, e, n);
      }),
      (u.prototype.captureDomContentLoaded = function (t) {
        return this.telemeter.captureDomContentLoaded(t);
      }),
      (u.prototype.captureLoad = function (t) {
        return this.telemeter.captureLoad(t);
      }),
      (u.prototype.buildJsonPayload = function (t) {
        return this.api.buildJsonPayload(t);
      }),
      (u.prototype.sendJsonPayload = function (t) {
        this.api.postJsonPayload(t);
      }),
      (u.prototype._log = function (t, e) {
        var n;
        if (
          (e.callback && ((n = e.callback), delete e.callback),
          this.options.ignoreDuplicateErrors && this._sameAsLastError(e))
        ) {
          if (n) {
            var r = new Error("ignored identical item");
            (r.item = e), n(r);
          }
        } else
          try {
            (e.level = e.level || t),
              this.telemeter._captureRollbarItem(e),
              (e.telemetryEvents = this.telemeter.copyEvents()),
              this.notifier.log(e, n);
          } catch (t) {
            this.logger.error(t);
          }
      }),
      (u.prototype._defaultLogLevel = function () {
        return this.options.logLevel || "debug";
      }),
      (u.prototype._sameAsLastError = function (t) {
        if (!t._isUncaught) return !1;
        var e = (function (t) {
          var e = t.message || "",
            n = (t.err || {}).stack || String(t.err);
          return e + "::" + n;
        })(t);
        return (
          this.lastErrorHash === e ||
          ((this.lastError = t.err), (this.lastErrorHash = e), !1)
        );
      }),
      (t.exports = u);
  },
  function (t, e, n) {
    var s = n(0);
    function u(t) {
      (this.startTime = s.now()),
        (this.counter = 0),
        (this.perMinCounter = 0),
        (this.platform = null),
        (this.platformOptions = {}),
        this.configureGlobal(t);
    }
    function c(t, e, n) {
      return !t.ignoreRateLimit && 1 <= e && e < n;
    }
    function l(t, e, n, r, o, i, a) {
      var s = null;
      return (
        n && (n = new Error(n)),
        n ||
          r ||
          (s = (function (t, e, n, r, o) {
            var i,
              a = e.environment || (e.payload && e.payload.environment);
            i = o
              ? "item per minute limit reached, ignoring errors until timeout"
              : "maxItems has been hit, ignoring errors until reset.";
            var s = {
              body: {
                message: { body: i, extra: { maxItems: n, itemsPerMinute: r } },
              },
              language: "javascript",
              environment: a,
              notifier: {
                version: (e.notifier && e.notifier.version) || e.version,
              },
            };
            "browser" === t
              ? ((s.platform = "browser"),
                (s.framework = "browser-js"),
                (s.notifier.name = "rollbar-browser-js"))
              : "server" === t
              ? ((s.framework = e.framework || "node-js"),
                (s.notifier.name = e.notifier.name))
              : "react-native" === t &&
                ((s.framework = e.framework || "react-native"),
                (s.notifier.name = e.notifier.name));
            return s;
          })(t, e, o, i, a)),
        { error: n, shouldSend: r, payload: s }
      );
    }
    (u.globalSettings = {
      startTime: s.now(),
      maxItems: void 0,
      itemsPerMinute: void 0,
    }),
      (u.prototype.configureGlobal = function (t) {
        void 0 !== t.startTime && (u.globalSettings.startTime = t.startTime),
          void 0 !== t.maxItems && (u.globalSettings.maxItems = t.maxItems),
          void 0 !== t.itemsPerMinute &&
            (u.globalSettings.itemsPerMinute = t.itemsPerMinute);
      }),
      (u.prototype.shouldSend = function (t, e) {
        var n = (e = e || s.now()) - this.startTime;
        (n < 0 || 6e4 <= n) && ((this.startTime = e), (this.perMinCounter = 0));
        var r = u.globalSettings.maxItems,
          o = u.globalSettings.itemsPerMinute;
        if (c(t, r, this.counter))
          return l(
            this.platform,
            this.platformOptions,
            r + " max items reached",
            !1
          );
        if (c(t, o, this.perMinCounter))
          return l(
            this.platform,
            this.platformOptions,
            o + " items per minute reached",
            !1
          );
        this.counter++, this.perMinCounter++;
        var i = !c(t, r, this.counter),
          a = i;
        return (
          (i = i && !c(t, o, this.perMinCounter)),
          l(this.platform, this.platformOptions, null, i, r, o, a)
        );
      }),
      (u.prototype.setPlatformOptions = function (t, e) {
        (this.platform = t), (this.platformOptions = e);
      }),
      (t.exports = u);
  },
  function (t, e, n) {
    "use strict";
    var o = Object.prototype.hasOwnProperty,
      i = Object.prototype.toString,
      c = function (t) {
        if (!t || "[object Object]" !== i.call(t)) return !1;
        var e,
          n = o.call(t, "constructor"),
          r =
            t.constructor &&
            t.constructor.prototype &&
            o.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        for (e in t);
        return void 0 === e || o.call(t, e);
      };
    t.exports = function t() {
      var e,
        n,
        r,
        o,
        i,
        a = {},
        s = null,
        u = arguments.length;
      for (e = 0; e < u; e++)
        if (null != (s = arguments[e]))
          for (i in s)
            (n = a[i]),
              a !== (r = s[i]) &&
                (r && c(r)
                  ? ((o = n && c(n) ? n : {}), (a[i] = t(o, r)))
                  : void 0 !== r && (a[i] = r));
      return a;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var l,
        p,
        n,
        f,
        o,
        i,
        e,
        r,
        s,
        u,
        c,
        h,
        d,
        a =
          /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      function m(t) {
        return t < 10 ? "0" + t : t;
      }
      function g() {
        return this.valueOf();
      }
      function v(t) {
        return (
          (a.lastIndex = 0),
          a.test(t)
            ? '"' +
              t.replace(a, function (t) {
                var e = n[t];
                return "string" == typeof e
                  ? e
                  : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
              }) +
              '"'
            : '"' + t + '"'
        );
      }
      "function" != typeof Date.prototype.toJSON &&
        ((Date.prototype.toJSON = function () {
          return isFinite(this.valueOf())
            ? this.getUTCFullYear() +
                "-" +
                m(this.getUTCMonth() + 1) +
                "-" +
                m(this.getUTCDate()) +
                "T" +
                m(this.getUTCHours()) +
                ":" +
                m(this.getUTCMinutes()) +
                ":" +
                m(this.getUTCSeconds()) +
                "Z"
            : null;
        }),
        (Boolean.prototype.toJSON = g),
        (Number.prototype.toJSON = g),
        (String.prototype.toJSON = g)),
        "function" != typeof t.stringify &&
          ((n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          }),
          (t.stringify = function (t, e, n) {
            var r;
            if (((p = l = ""), "number" == typeof n))
              for (r = 0; r < n; r += 1) p += " ";
            else "string" == typeof n && (p = n);
            if (
              (f = e) &&
              "function" != typeof e &&
              ("object" != typeof e || "number" != typeof e.length)
            )
              throw new Error("JSON.stringify");
            return (function t(e, n) {
              var r,
                o,
                i,
                a,
                s,
                u = l,
                c = n[e];
              switch (
                (c &&
                  "object" == typeof c &&
                  "function" == typeof c.toJSON &&
                  (c = c.toJSON(e)),
                "function" == typeof f && (c = f.call(n, e, c)),
                typeof c)
              ) {
                case "string":
                  return v(c);
                case "number":
                  return isFinite(c) ? String(c) : "null";
                case "boolean":
                case "null":
                  return String(c);
                case "object":
                  if (!c) return "null";
                  if (
                    ((l += p),
                    (s = []),
                    "[object Array]" === Object.prototype.toString.apply(c))
                  ) {
                    for (a = c.length, r = 0; r < a; r += 1)
                      s[r] = t(r, c) || "null";
                    return (
                      (i =
                        0 === s.length
                          ? "[]"
                          : l
                          ? "[\n" + l + s.join(",\n" + l) + "\n" + u + "]"
                          : "[" + s.join(",") + "]"),
                      (l = u),
                      i
                    );
                  }
                  if (f && "object" == typeof f)
                    for (a = f.length, r = 0; r < a; r += 1)
                      "string" != typeof f[r] ||
                        ((i = t((o = f[r]), c)) &&
                          s.push(v(o) + (l ? ": " : ":") + i));
                  else
                    for (o in c)
                      !Object.prototype.hasOwnProperty.call(c, o) ||
                        ((i = t(o, c)) && s.push(v(o) + (l ? ": " : ":") + i));
                  return (
                    (i =
                      0 === s.length
                        ? "{}"
                        : l
                        ? "{\n" + l + s.join(",\n" + l) + "\n" + u + "}"
                        : "{" + s.join(",") + "}"),
                    (l = u),
                    i
                  );
              }
            })("", { "": t });
          })),
        "function" != typeof t.parse &&
          (t.parse =
            ((u = {
              "\\": "\\",
              '"': '"',
              "/": "/",
              t: "\t",
              n: "\n",
              r: "\r",
              f: "\f",
              b: "\b",
            }),
            (c = {
              go: function () {
                o = "ok";
              },
              firstokey: function () {
                (r = s), (o = "colon");
              },
              okey: function () {
                (r = s), (o = "colon");
              },
              ovalue: function () {
                o = "ocomma";
              },
              firstavalue: function () {
                o = "acomma";
              },
              avalue: function () {
                o = "acomma";
              },
            }),
            (h = {
              go: function () {
                o = "ok";
              },
              ovalue: function () {
                o = "ocomma";
              },
              firstavalue: function () {
                o = "acomma";
              },
              avalue: function () {
                o = "acomma";
              },
            }),
            (d = {
              "{": {
                go: function () {
                  i.push({ state: "ok" }), (e = {}), (o = "firstokey");
                },
                ovalue: function () {
                  i.push({ container: e, state: "ocomma", key: r }),
                    (e = {}),
                    (o = "firstokey");
                },
                firstavalue: function () {
                  i.push({ container: e, state: "acomma" }),
                    (e = {}),
                    (o = "firstokey");
                },
                avalue: function () {
                  i.push({ container: e, state: "acomma" }),
                    (e = {}),
                    (o = "firstokey");
                },
              },
              "}": {
                firstokey: function () {
                  var t = i.pop();
                  (s = e), (e = t.container), (r = t.key), (o = t.state);
                },
                ocomma: function () {
                  var t = i.pop();
                  (e[r] = s),
                    (s = e),
                    (e = t.container),
                    (r = t.key),
                    (o = t.state);
                },
              },
              "[": {
                go: function () {
                  i.push({ state: "ok" }), (e = []), (o = "firstavalue");
                },
                ovalue: function () {
                  i.push({ container: e, state: "ocomma", key: r }),
                    (e = []),
                    (o = "firstavalue");
                },
                firstavalue: function () {
                  i.push({ container: e, state: "acomma" }),
                    (e = []),
                    (o = "firstavalue");
                },
                avalue: function () {
                  i.push({ container: e, state: "acomma" }),
                    (e = []),
                    (o = "firstavalue");
                },
              },
              "]": {
                firstavalue: function () {
                  var t = i.pop();
                  (s = e), (e = t.container), (r = t.key), (o = t.state);
                },
                acomma: function () {
                  var t = i.pop();
                  e.push(s),
                    (s = e),
                    (e = t.container),
                    (r = t.key),
                    (o = t.state);
                },
              },
              ":": {
                colon: function () {
                  if (Object.hasOwnProperty.call(e, r))
                    throw new SyntaxError("Duplicate key '" + r + '"');
                  o = "ovalue";
                },
              },
              ",": {
                ocomma: function () {
                  (e[r] = s), (o = "okey");
                },
                acomma: function () {
                  e.push(s), (o = "avalue");
                },
              },
              true: {
                go: function () {
                  (s = !0), (o = "ok");
                },
                ovalue: function () {
                  (s = !0), (o = "ocomma");
                },
                firstavalue: function () {
                  (s = !0), (o = "acomma");
                },
                avalue: function () {
                  (s = !0), (o = "acomma");
                },
              },
              false: {
                go: function () {
                  (s = !1), (o = "ok");
                },
                ovalue: function () {
                  (s = !1), (o = "ocomma");
                },
                firstavalue: function () {
                  (s = !1), (o = "acomma");
                },
                avalue: function () {
                  (s = !1), (o = "acomma");
                },
              },
              null: {
                go: function () {
                  (s = null), (o = "ok");
                },
                ovalue: function () {
                  (s = null), (o = "ocomma");
                },
                firstavalue: function () {
                  (s = null), (o = "acomma");
                },
                avalue: function () {
                  (s = null), (o = "acomma");
                },
              },
            }),
            function (t, a) {
              var e,
                n,
                r =
                  /^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
              (o = "go"), (i = []);
              try {
                for (; (e = r.exec(t)); )
                  e[1]
                    ? d[e[1]][o]()
                    : e[2]
                    ? ((s = +e[2]), h[o]())
                    : ((n = e[3]),
                      (s = n.replace(
                        /\\(?:u(.{4})|([^u]))/g,
                        function (t, e, n) {
                          return e
                            ? String.fromCharCode(parseInt(e, 16))
                            : u[n];
                        }
                      )),
                      c[o]()),
                    (t = t.slice(e[0].length));
              } catch (t) {
                o = t;
              }
              if ("ok" !== o || /[^\u0020\t\n\r]/.test(t))
                throw o instanceof SyntaxError ? o : new SyntaxError("JSON");
              return "function" == typeof a
                ? (function t(e, n) {
                    var r,
                      o,
                      i = e[n];
                    if (i && "object" == typeof i)
                      for (r in s)
                        Object.prototype.hasOwnProperty.call(i, r) &&
                          (void 0 !== (o = t(i, r)) ? (i[r] = o) : delete i[r]);
                    return a.call(e, n, i);
                  })({ "": s }, "")
                : s;
            }));
    };
  },
  function (t, e, n) {
    var i = n(0);
    function r(t, e, n, r) {
      (this.rateLimiter = t),
        (this.api = e),
        (this.logger = n),
        (this.options = r),
        (this.predicates = []),
        (this.pendingItems = []),
        (this.pendingRequests = []),
        (this.retryQueue = []),
        (this.retryHandle = null),
        (this.waitCallback = null),
        (this.waitIntervalID = null);
    }
    (r.prototype.configure = function (t) {
      this.api && this.api.configure(t);
      var e = this.options;
      return (this.options = i.merge(e, t)), this;
    }),
      (r.prototype.addPredicate = function (t) {
        return i.isFunction(t) && this.predicates.push(t), this;
      }),
      (r.prototype.addPendingItem = function (t) {
        this.pendingItems.push(t);
      }),
      (r.prototype.removePendingItem = function (t) {
        var e = this.pendingItems.indexOf(t);
        -1 !== e && this.pendingItems.splice(e, 1);
      }),
      (r.prototype.addItem = function (n, r, t, e) {
        (r && i.isFunction(r)) || (r = function () {});
        var o = this._applyPredicates(n);
        if (o.stop) return this.removePendingItem(e), void r(o.err);
        if (
          (this._maybeLog(n, t),
          this.removePendingItem(e),
          this.options.transmit)
        ) {
          this.pendingRequests.push(n);
          try {
            this._makeApiRequest(
              n,
              function (t, e) {
                this._dequeuePendingRequest(n), r(t, e);
              }.bind(this)
            );
          } catch (t) {
            this._dequeuePendingRequest(n), r(t);
          }
        } else r(new Error("Transmit disabled"));
      }),
      (r.prototype.wait = function (t) {
        i.isFunction(t) &&
          ((this.waitCallback = t),
          this._maybeCallWait() ||
            (this.waitIntervalID &&
              (this.waitIntervalID = clearInterval(this.waitIntervalID)),
            (this.waitIntervalID = setInterval(
              function () {
                this._maybeCallWait();
              }.bind(this),
              500
            ))));
      }),
      (r.prototype._applyPredicates = function (t) {
        for (var e = null, n = 0, r = this.predicates.length; n < r; n++)
          if (!(e = this.predicates[n](t, this.options)) || void 0 !== e.err)
            return { stop: !0, err: e.err };
        return { stop: !1, err: null };
      }),
      (r.prototype._makeApiRequest = function (n, r) {
        var t = this.rateLimiter.shouldSend(n);
        t.shouldSend
          ? this.api.postItem(
              n,
              function (t, e) {
                t ? this._maybeRetry(t, n, r) : r(t, e);
              }.bind(this)
            )
          : t.error
          ? r(t.error)
          : this.api.postItem(t.payload, r);
      });
    var a = [
      "ECONNRESET",
      "ENOTFOUND",
      "ESOCKETTIMEDOUT",
      "ETIMEDOUT",
      "ECONNREFUSED",
      "EHOSTUNREACH",
      "EPIPE",
      "EAI_AGAIN",
    ];
    (r.prototype._maybeRetry = function (t, e, n) {
      var r = !1;
      if (this.options.retryInterval)
        for (var o = 0, i = a.length; o < i; o++)
          if (t.code === a[o]) {
            r = !0;
            break;
          }
      r ? this._retryApiRequest(e, n) : n(t);
    }),
      (r.prototype._retryApiRequest = function (t, e) {
        this.retryQueue.push({ item: t, callback: e }),
          this.retryHandle ||
            (this.retryHandle = setInterval(
              function () {
                for (; this.retryQueue.length; ) {
                  var t = this.retryQueue.shift();
                  this._makeApiRequest(t.item, t.callback);
                }
              }.bind(this),
              this.options.retryInterval
            ));
      }),
      (r.prototype._dequeuePendingRequest = function (t) {
        var e = this.pendingRequests.indexOf(t);
        -1 !== e && (this.pendingRequests.splice(e, 1), this._maybeCallWait());
      }),
      (r.prototype._maybeLog = function (t, e) {
        if (this.logger && this.options.verbose) {
          var n = e;
          if (
            (n =
              (n = n || i.get(t, "body.trace.exception.message")) ||
              i.get(t, "body.trace_chain.0.exception.message"))
          )
            return void this.logger.error(n);
          (n = i.get(t, "body.message.body")) && this.logger.log(n);
        }
      }),
      (r.prototype._maybeCallWait = function () {
        return (
          !(
            !i.isFunction(this.waitCallback) ||
            0 !== this.pendingItems.length ||
            0 !== this.pendingRequests.length
          ) &&
          (this.waitIntervalID &&
            (this.waitIntervalID = clearInterval(this.waitIntervalID)),
          this.waitCallback(),
          !0)
        );
      }),
      (t.exports = r);
  },
  function (t, e, n) {
    var i = n(0);
    function r(t, e) {
      (this.queue = t), (this.options = e), (this.transforms = []);
    }
    (r.prototype.configure = function (t) {
      this.queue && this.queue.configure(t);
      var e = this.options;
      return (this.options = i.merge(e, t)), this;
    }),
      (r.prototype.addTransform = function (t) {
        return i.isFunction(t) && this.transforms.push(t), this;
      }),
      (r.prototype.log = function (n, r) {
        if (
          ((r && i.isFunction(r)) || (r = function () {}),
          !this.options.enabled)
        )
          return r(new Error("Rollbar is not enabled"));
        this.queue.addPendingItem(n);
        var o = n.err;
        this._applyTransforms(
          n,
          function (t, e) {
            if (t) return this.queue.removePendingItem(n), r(t, null);
            this.queue.addItem(e, r, o, n);
          }.bind(this)
        );
      }),
      (r.prototype._applyTransforms = function (t, n) {
        var r = -1,
          o = this.transforms.length,
          i = this.transforms,
          a = this.options,
          s = function (t, e) {
            t ? n(t, null) : ++r !== o ? i[r](e, a, s) : n(null, e);
          };
        s(null, t);
      }),
      (t.exports = r);
  },
  function (t, e, n) {
    var a = n(0);
    function r(t) {
      (this.queue = []), (this.options = a.merge(t));
      var e = this.options.maxTelemetryEvents || 100;
      this.maxQueueSize = Math.max(0, Math.min(e, 100));
    }
    (r.prototype.configure = function (t) {
      var e = this.options;
      this.options = a.merge(e, t);
      var n = this.options.maxTelemetryEvents || 100,
        r = Math.max(0, Math.min(n, 100)),
        o = 0;
      this.maxQueueSize > r && (o = this.maxQueueSize - r),
        (this.maxQueueSize = r),
        this.queue.splice(0, o);
    }),
      (r.prototype.copyEvents = function () {
        var t = Array.prototype.slice.call(this.queue, 0);
        if (a.isFunction(this.options.filterTelemetry))
          try {
            for (var e = t.length; e--; )
              this.options.filterTelemetry(t[e]) && t.splice(e, 1);
          } catch (t) {
            this.options.filterTelemetry = null;
          }
        return t;
      }),
      (r.prototype.capture = function (t, e, n, r, o) {
        var i = {
          level: (function (t, e) {
            if (e) return e;
            return { error: "error", manual: "info" }[t] || "info";
          })(t, n),
          type: t,
          timestamp_ms: o || a.now(),
          body: e,
          source: "client",
        };
        r && (i.uuid = r);
        try {
          if (
            a.isFunction(this.options.filterTelemetry) &&
            this.options.filterTelemetry(i)
          )
            return !1;
        } catch (t) {
          this.options.filterTelemetry = null;
        }
        return this.push(i), i;
      }),
      (r.prototype.captureEvent = function (t, e, n, r) {
        return this.capture(t, e, n, r);
      }),
      (r.prototype.captureError = function (t, e, n, r) {
        var o = { message: t.message || String(t) };
        return (
          t.stack && (o.stack = t.stack), this.capture("error", o, e, n, r)
        );
      }),
      (r.prototype.captureLog = function (t, e, n, r) {
        return this.capture("log", { message: t }, e, n, r);
      }),
      (r.prototype.captureNetwork = function (t, e, n, r) {
        (e = e || "xhr"), (t.subtype = t.subtype || e), r && (t.request = r);
        var o = this.levelFromStatus(t.status_code);
        return this.capture("network", t, o, n);
      }),
      (r.prototype.levelFromStatus = function (t) {
        return 200 <= t && t < 400
          ? "info"
          : 0 === t || 400 <= t
          ? "error"
          : "info";
      }),
      (r.prototype.captureDom = function (t, e, n, r, o) {
        var i = { subtype: t, element: e };
        return (
          void 0 !== n && (i.value = n),
          void 0 !== r && (i.checked = r),
          this.capture("dom", i, "info", o)
        );
      }),
      (r.prototype.captureNavigation = function (t, e, n) {
        return this.capture("navigation", { from: t, to: e }, "info", n);
      }),
      (r.prototype.captureDomContentLoaded = function (t) {
        return this.capture(
          "navigation",
          { subtype: "DOMContentLoaded" },
          "info",
          void 0,
          t && t.getTime()
        );
      }),
      (r.prototype.captureLoad = function (t) {
        return this.capture(
          "navigation",
          { subtype: "load" },
          "info",
          void 0,
          t && t.getTime()
        );
      }),
      (r.prototype.captureConnectivityChange = function (t, e) {
        return this.captureNetwork({ change: t }, "connectivity", e);
      }),
      (r.prototype._captureRollbarItem = function (t) {
        if (this.options.includeItemsInTelemetry)
          return t.err
            ? this.captureError(t.err, t.level, t.uuid, t.timestamp)
            : t.message
            ? this.captureLog(t.message, t.level, t.uuid, t.timestamp)
            : t.custom
            ? this.capture("log", t.custom, t.level, t.uuid, t.timestamp)
            : void 0;
      }),
      (r.prototype.push = function (t) {
        this.queue.push(t),
          this.queue.length > this.maxQueueSize && this.queue.shift();
      }),
      (t.exports = r);
  },
  function (t, e, n) {
    var r = n(0),
      o = n(15),
      i = n(2),
      a = {
        hostname: "api.rollbar.com",
        path: "/api/1/item/",
        search: null,
        version: "1",
        protocol: "https:",
        port: 443,
      };
    function s(t, e, n, r) {
      (this.options = t),
        (this.transport = e),
        (this.url = n),
        (this.jsonBackup = r),
        (this.accessToken = t.accessToken),
        (this.transportOptions = u(t, n));
    }
    function u(t, e) {
      return o.getTransportFromOptions(t, a, e);
    }
    (s.prototype.postItem = function (t, e) {
      var n = o.transportOptions(this.transportOptions, "POST"),
        r = o.buildPayload(this.accessToken, t, this.jsonBackup);
      this.transport.post(this.accessToken, n, r, e);
    }),
      (s.prototype.buildJsonPayload = function (t, e) {
        var n = o.buildPayload(this.accessToken, t, this.jsonBackup),
          r = i.truncate(n);
        return r.error ? (e && e(r.error), null) : r.value;
      }),
      (s.prototype.postJsonPayload = function (t, e) {
        var n = o.transportOptions(this.transportOptions, "POST");
        this.transport.postJsonPayload(this.accessToken, n, t, e);
      }),
      (s.prototype.configure = function (t) {
        var e = this.oldOptions;
        return (
          (this.options = r.merge(e, t)),
          (this.transportOptions = u(this.options, this.url)),
          void 0 !== this.options.accessToken &&
            (this.accessToken = this.options.accessToken),
          this
        );
      }),
      (t.exports = s);
  },
  function (t, e, n) {
    var o = n(0);
    t.exports = {
      buildPayload: function (t, e, n) {
        if (!o.isType(e.context, "string")) {
          var r = o.stringify(e.context, n);
          r.error
            ? (e.context = "Error: could not serialize 'context'")
            : (e.context = r.value || ""),
            255 < e.context.length && (e.context = e.context.substr(0, 255));
        }
        return { access_token: t, data: e };
      },
      getTransportFromOptions: function (t, e, n) {
        var r = e.hostname,
          o = e.protocol,
          i = e.port,
          a = e.path,
          s = e.search,
          u = t.proxy;
        if (t.endpoint) {
          var c = n.parse(t.endpoint);
          (r = c.hostname),
            (o = c.protocol),
            (i = c.port),
            (a = c.pathname),
            (s = c.search);
        }
        return {
          hostname: r,
          protocol: o,
          port: i,
          path: a,
          search: s,
          proxy: u,
        };
      },
      transportOptions: function (t, e) {
        var n = t.protocol || "https:",
          r = t.port || ("http:" === n ? 80 : "https:" === n ? 443 : void 0),
          o = t.hostname,
          i = t.path;
        return (
          t.search && (i += t.search),
          t.proxy &&
            ((i = n + "//" + o + i),
            (o = t.proxy.host || t.proxy.hostname),
            (r = t.proxy.port),
            (n = t.proxy.protocol || n)),
          { protocol: n, hostname: o, path: i, port: r, method: e }
        );
      },
      appendPathToPath: function (t, e) {
        var n = /\/$/.test(t),
          r = /^\//.test(e);
        return n && r ? (e = e.substring(1)) : n || r || (e = "/" + e), t + e;
      },
    };
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      t.console || (t.console = {});
      for (
        var e,
          n,
          r = t.console,
          o = function () {},
          i = ["memory"],
          a =
            "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(
              ","
            );
        (e = i.pop());

      )
        r[e] || (r[e] = {});
      for (; (n = a.pop()); ) r[n] || (r[n] = o);
    })("undefined" == typeof window ? this : window);
  },
  function (t, e) {
    var n = {
      ieVersion: function () {
        if ("undefined" != typeof document) {
          for (
            var t = 3,
              e = document.createElement("div"),
              n = e.getElementsByTagName("i");
            (e.innerHTML =
              "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e"),
              n[0];

          );
          return 4 < t ? t : void 0;
        }
      },
    };
    t.exports = n;
  },
  function (t, e) {
    function a(r, t, e) {
      if (t.hasOwnProperty && t.hasOwnProperty("addEventListener")) {
        for (var o = t.addEventListener; o._rollbarOldAdd && o.belongsToShim; )
          o = o._rollbarOldAdd;
        function n(t, e, n) {
          o.call(this, t, r.wrap(e), n);
        }
        (n._rollbarOldAdd = o), (n.belongsToShim = e), (t.addEventListener = n);
        for (
          var i = t.removeEventListener;
          i._rollbarOldRemove && i.belongsToShim;

        )
          i = i._rollbarOldRemove;
        function a(t, e, n) {
          i.call(this, t, (e && e._rollbar_wrapped) || e, n);
        }
        (a._rollbarOldRemove = i),
          (a.belongsToShim = e),
          (t.removeEventListener = a);
      }
    }
    t.exports = {
      captureUncaughtExceptions: function (e, n, t) {
        if (e) {
          var r;
          if ("function" == typeof n._rollbarOldOnError)
            r = n._rollbarOldOnError;
          else if (e.onerror) {
            for (r = e.onerror; r._rollbarOldOnError; )
              r = r._rollbarOldOnError;
            n._rollbarOldOnError = r;
          }
          function o() {
            var t = Array.prototype.slice.call(arguments, 0);
            !(function (t, e, n, r) {
              t._rollbarWrappedError &&
                (r[4] || (r[4] = t._rollbarWrappedError),
                r[5] || (r[5] = t._rollbarWrappedError._rollbarContext),
                (t._rollbarWrappedError = null)),
                e.handleUncaughtException.apply(e, r),
                n && n.apply(t, r);
            })(e, n, r, t);
          }
          n.handleAnonymousErrors(),
            t && (o._rollbarOldOnError = r),
            (e.onerror = o);
        }
      },
      captureUnhandledRejections: function (t, o, e) {
        if (t) {
          function n(t) {
            var e, n, r;
            try {
              e = t.reason;
            } catch (t) {
              e = void 0;
            }
            try {
              n = t.promise;
            } catch (t) {
              n = "[unhandledrejection] error getting `promise` from event";
            }
            try {
              (r = t.detail), !e && r && ((e = r.reason), (n = r.promise));
            } catch (t) {}
            e || (e = "[unhandledrejection] error getting `reason` from event"),
              o &&
                o.handleUnhandledRejection &&
                o.handleUnhandledRejection(e, n);
          }
          "function" == typeof t._rollbarURH &&
            t._rollbarURH.belongsToShim &&
            t.removeEventListener("unhandledrejection", t._rollbarURH),
            (n.belongsToShim = e),
            (t._rollbarURH = n),
            t.addEventListener("unhandledrejection", n);
        }
      },
      wrapGlobals: function (t, e, n) {
        if (t) {
          var r,
            o,
            i =
              "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
                ","
              );
          for (r = 0; r < i.length; ++r)
            t[(o = i[r])] && t[o].prototype && a(e, t[o].prototype, n);
        }
      },
    };
  },
  function (t, e, n) {
    var c = n(0),
      s = n(2),
      l = n(1);
    function u(t, e, n, r, o, i) {
      var a =
          ("undefined" != typeof window && window) ||
          ("undefined" != typeof self && self),
        s = a && a.Zone && a.Zone.current;
      s && "angular" === s._name
        ? s._parent.run(function () {
            p(t, e, n, r, o, i);
          })
        : p(t, e, n, r, o, i);
    }
    function p(t, e, n, r, o, i) {
      if ("undefined" != typeof RollbarProxy)
        return (function (t, e) {
          new RollbarProxy().sendJsonPayload(
            t,
            function (t) {},
            function (t) {
              e(new Error(t));
            }
          );
        })(r, o);
      var a;
      if (
        !(a = i
          ? i()
          : (function () {
              var t,
                e,
                n = [
                  function () {
                    return new XMLHttpRequest();
                  },
                  function () {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                  },
                  function () {
                    return new ActiveXObject("Msxml3.XMLHTTP");
                  },
                  function () {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                  },
                ],
                r = n.length;
              for (e = 0; e < r; e++)
                try {
                  t = n[e]();
                  break;
                } catch (t) {}
              return t;
            })())
      )
        return o(new Error("No way to send a request"));
      try {
        try {
          var s = function () {
            try {
              if (s && 4 === a.readyState) {
                s = void 0;
                var t = c.jsonParse(a.responseText);
                if (
                  (function (t) {
                    return t && t.status && 200 === t.status;
                  })(a)
                )
                  return void o(t.error, t.value);
                if (
                  (function (t) {
                    return (
                      t &&
                      c.isType(t.status, "number") &&
                      400 <= t.status &&
                      t.status < 600
                    );
                  })(a)
                ) {
                  if (403 === a.status) {
                    var e = t.value && t.value.message;
                    l.error(e);
                  }
                  o(new Error(String(a.status)));
                } else {
                  o(
                    f(
                      "XHR response had no status code (likely connection failure)"
                    )
                  );
                }
              }
            } catch (t) {
              var n;
              (n = t && t.stack ? t : new Error(t)), o(n);
            }
          };
          a.open(n, e, !0),
            a.setRequestHeader &&
              (a.setRequestHeader("Content-Type", "application/json"),
              a.setRequestHeader("X-Rollbar-Access-Token", t)),
            (a.onreadystatechange = s),
            a.send(r);
        } catch (t) {
          if ("undefined" != typeof XDomainRequest) {
            if (!window || !window.location)
              return o(
                new Error(
                  "No window available during request, unknown environment"
                )
              );
            "http:" === window.location.href.substring(0, 5) &&
              "https" === e.substring(0, 5) &&
              (e = "http" + e.substring(5));
            var u = new XDomainRequest();
            (u.onprogress = function () {}),
              (u.ontimeout = function () {
                o(f("Request timed out", "ETIMEDOUT"));
              }),
              (u.onerror = function () {
                o(new Error("Error during request"));
              }),
              (u.onload = function () {
                var t = c.jsonParse(u.responseText);
                o(t.error, t.value);
              }),
              u.open(n, e, !0),
              u.send(r);
          } else o(new Error("Cannot find a method to transport a request"));
        }
      } catch (t) {
        o(t);
      }
    }
    function f(t, e) {
      var n = new Error(t);
      return (n.code = e || "ENOTFOUND"), n;
    }
    t.exports = {
      get: function (t, e, n, r, o) {
        (r && c.isFunction(r)) || (r = function () {}),
          c.addParamsAndAccessTokenToPath(t, e, n),
          u(t, c.formatUrl(e), "GET", null, r, o);
      },
      post: function (t, e, n, r, o) {
        if (((r && c.isFunction(r)) || (r = function () {}), !n))
          return r(new Error("Cannot send empty request"));
        var i = s.truncate(n);
        if (i.error) return r(i.error);
        var a = i.value;
        u(t, c.formatUrl(e), "POST", a, r, o);
      },
      postJsonPayload: function (t, e, n, r, o) {
        (r && c.isFunction(r)) || (r = function () {}),
          u(t, c.formatUrl(e), "POST", n, r, o);
      },
    };
  },
  function (t, e, n) {
    var g = n(0),
      v = n(4),
      r = n(1);
    function u(t, e, n) {
      var r = t.message,
        o = t.custom;
      r || (r = "Item sent with null or missing arguments.");
      var i = { body: r };
      o && (i.extra = g.merge(o)),
        g.set(t, "data.body", { message: i }),
        n(null, t);
    }
    function y(t) {
      var e = t.stackInfo.stack;
      return (
        e &&
          0 === e.length &&
          t._unhandledStackInfo &&
          t._unhandledStackInfo.stack &&
          (e = t._unhandledStackInfo.stack),
        e
      );
    }
    function c(t, e, n) {
      var r = t && t.data.description,
        o = t && t.custom,
        i = y(t),
        a = v.guessErrorClass(e.message),
        s = { exception: { class: e.name || a[0], message: a[1] } };
      if ((r && (s.exception.description = r), i)) {
        var u, c, l, p, f, h, d, m;
        for (
          0 === i.length &&
            ((s.exception.stack = e.rawStack),
            (s.exception.raw = String(e.rawException))),
            s.frames = [],
            d = 0;
          d < i.length;
          ++d
        )
          (c = {
            filename: (u = i[d]).url ? g.sanitizeUrl(u.url) : "(unknown)",
            lineno: u.line || null,
            method: u.func && "?" !== u.func ? u.func : "[anonymous]",
            colno: u.column,
          }),
            n.sendFrameUrl && (c.url = u.url),
            (c.method &&
              c.method.endsWith &&
              c.method.endsWith("_rollbar_wrapped")) ||
              ((l = p = f = null),
              (h = u.context ? u.context.length : 0) &&
                ((m = Math.floor(h / 2)),
                (p = u.context.slice(0, m)),
                (l = u.context[m]),
                (f = u.context.slice(m))),
              l && (c.code = l),
              (p || f) &&
                ((c.context = {}),
                p && p.length && (c.context.pre = p),
                f && f.length && (c.context.post = f)),
              u.args && (c.args = u.args),
              s.frames.push(c));
        s.frames.reverse(), o && (s.extra = g.merge(o));
      }
      return s;
    }
    t.exports = {
      handleDomException: function (t, e, n) {
        if (t.err && "DOMException" === v.Stack(t.err).name) {
          var r = new Error();
          (r.name = t.err.name),
            (r.message = t.err.message),
            (r.stack = t.err.stack),
            (r.nested = t.err),
            (t.err = r);
        }
        n(null, t);
      },
      handleItemWithError: function (e, t, n) {
        if (((e.data = e.data || {}), e.err))
          try {
            e.stackInfo = e.err._savedStackTrace || v.parse(e.err);
          } catch (t) {
            r.error("Error while parsing the error object.", t);
            try {
              e.message =
                e.err.message ||
                e.err.description ||
                e.message ||
                String(e.err);
            } catch (t) {
              e.message = String(e.err) || String(t);
            }
            delete e.err;
          }
        n(null, e);
      },
      ensureItemHasSomethingToSay: function (t, e, n) {
        t.message ||
          t.stackInfo ||
          t.custom ||
          n(new Error("No message, stack info, or custom data"), null),
          n(null, t);
      },
      addBaseInfo: function (t, e, n) {
        var r = (e.payload && e.payload.environment) || e.environment;
        (t.data = g.merge(t.data, {
          environment: r,
          level: t.level,
          endpoint: e.endpoint,
          platform: "browser",
          framework: "browser-js",
          language: "javascript",
          server: {},
          uuid: t.uuid,
          notifier: { name: "rollbar-browser-js", version: e.version },
        })),
          n(null, t);
      },
      addRequestInfo: function (o) {
        return function (t, e, n) {
          if (!o || !o.location) return n(null, t);
          var r = "$remote_ip";
          e.captureIp ? !0 !== e.captureIp && (r += "_anonymize") : (r = null),
            g.set(t, "data.request", {
              url: o.location.href,
              query_string: o.location.search,
              user_ip: r,
            }),
            n(null, t);
        };
      },
      addClientInfo: function (i) {
        return function (t, e, n) {
          if (!i) return n(null, t);
          var r = i.navigator || {},
            o = i.screen || {};
          g.set(t, "data.client", {
            runtime_ms: t.timestamp - i._rollbarStartTime,
            timestamp: Math.round(t.timestamp / 1e3),
            javascript: {
              browser: r.userAgent,
              language: r.language,
              cookie_enabled: r.cookieEnabled,
              screen: { width: o.width, height: o.height },
            },
          }),
            n(null, t);
        };
      },
      addPluginInfo: function (u) {
        return function (t, e, n) {
          if (!u || !u.navigator) return n(null, t);
          for (
            var r, o = [], i = u.navigator.plugins || [], a = 0, s = i.length;
            a < s;
            ++a
          )
            (r = i[a]), o.push({ name: r.name, description: r.description });
          g.set(t, "data.client.javascript.plugins", o), n(null, t);
        };
      },
      addBody: function (t, e, n) {
        t.stackInfo
          ? t.stackInfo.traceChain
            ? (function (t, e, n) {
                for (
                  var r = t.stackInfo.traceChain, o = [], i = r.length, a = 0;
                  a < i;
                  a++
                ) {
                  var s = c(t, r[a], e);
                  o.push(s);
                }
                g.set(t, "data.body", { trace_chain: o }), n(null, t);
              })(t, e, n)
            : (function (t, e, n) {
                if (y(t)) {
                  var r = c(t, t.stackInfo, e);
                  g.set(t, "data.body", { trace: r }), n(null, t);
                } else {
                  var o = t.stackInfo,
                    i = v.guessErrorClass(o.message),
                    a = o.name || i[0],
                    s = i[1];
                  (t.message = a + ": " + s), u(t, 0, n);
                }
              })(t, e, n)
          : u(t, 0, n);
      },
      scrubPayload: function (t, e, n) {
        var r = e.scrubFields;
        (t.data = g.scrub(t.data, r)), n(null, t);
      },
    };
  },
  function (n, r, o) {
    var i, a, s;
    !(function (t, e) {
      "use strict";
      (a = [o(22)]),
        void 0 ===
          (s =
            "function" ==
            typeof (i = function (s) {
              var n = /(^|@)\S+\:\d+/,
                r = /^\s*at .*(\S+\:\d+|\(native\))/m,
                o = /^(eval@)?(\[native code\])?$/;
              function i(t, e, n) {
                if ("function" == typeof Array.prototype.map)
                  return t.map(e, n);
                for (var r = new Array(t.length), o = 0; o < t.length; o++)
                  r[o] = e.call(n, t[o]);
                return r;
              }
              function a(t, e, n) {
                if ("function" == typeof Array.prototype.filter)
                  return t.filter(e, n);
                for (var r = [], o = 0; o < t.length; o++)
                  e.call(n, t[o]) && r.push(t[o]);
                return r;
              }
              return {
                parse: function (t) {
                  if (
                    void 0 !== t.stacktrace ||
                    void 0 !== t["opera#sourceloc"]
                  )
                    return this.parseOpera(t);
                  if (t.stack && t.stack.match(r)) return this.parseV8OrIE(t);
                  if (t.stack) return this.parseFFOrSafari(t);
                  throw new Error("Cannot parse given Error object");
                },
                extractLocation: function (t) {
                  if (-1 === t.indexOf(":")) return [t];
                  var e = t.replace(/[\(\)\s]/g, "").split(":"),
                    n = e.pop(),
                    r = e[e.length - 1];
                  if (isNaN(parseFloat(r)) || !isFinite(r))
                    return [e.join(":"), n, void 0];
                  var o = e.pop();
                  return [e.join(":"), o, n];
                },
                parseV8OrIE: function (t) {
                  var e = a(
                    t.stack.split("\n"),
                    function (t) {
                      return !!t.match(r);
                    },
                    this
                  );
                  return i(
                    e,
                    function (t) {
                      -1 < t.indexOf("(eval ") &&
                        (t = t
                          .replace(/eval code/g, "eval")
                          .replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                      var e = t
                          .replace(/^\s+/, "")
                          .replace(/\(eval code/g, "(")
                          .split(/\s+/)
                          .slice(1),
                        n = this.extractLocation(e.pop()),
                        r = e.join(" ") || void 0,
                        o = "eval" === n[0] ? void 0 : n[0];
                      return new s(r, void 0, o, n[1], n[2], t);
                    },
                    this
                  );
                },
                parseFFOrSafari: function (t) {
                  var e = a(
                    t.stack.split("\n"),
                    function (t) {
                      return !t.match(o);
                    },
                    this
                  );
                  return i(
                    e,
                    function (t) {
                      if (
                        (-1 < t.indexOf(" > eval") &&
                          (t = t.replace(
                            / line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,
                            ":$1"
                          )),
                        -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                      )
                        return new s(t);
                      var e = t.split("@"),
                        n = this.extractLocation(e.pop()),
                        r = e.shift() || void 0;
                      return new s(r, void 0, n[0], n[1], n[2], t);
                    },
                    this
                  );
                },
                parseOpera: function (t) {
                  return !t.stacktrace ||
                    (-1 < t.message.indexOf("\n") &&
                      t.message.split("\n").length >
                        t.stacktrace.split("\n").length)
                    ? this.parseOpera9(t)
                    : t.stack
                    ? this.parseOpera11(t)
                    : this.parseOpera10(t);
                },
                parseOpera9: function (t) {
                  for (
                    var e = /Line (\d+).*script (?:in )?(\S+)/i,
                      n = t.message.split("\n"),
                      r = [],
                      o = 2,
                      i = n.length;
                    o < i;
                    o += 2
                  ) {
                    var a = e.exec(n[o]);
                    a &&
                      r.push(new s(void 0, void 0, a[2], a[1], void 0, n[o]));
                  }
                  return r;
                },
                parseOpera10: function (t) {
                  for (
                    var e =
                        /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                      n = t.stacktrace.split("\n"),
                      r = [],
                      o = 0,
                      i = n.length;
                    o < i;
                    o += 2
                  ) {
                    var a = e.exec(n[o]);
                    a &&
                      r.push(
                        new s(a[3] || void 0, void 0, a[2], a[1], void 0, n[o])
                      );
                  }
                  return r;
                },
                parseOpera11: function (t) {
                  var e = a(
                    t.stack.split("\n"),
                    function (t) {
                      return !!t.match(n) && !t.match(/^Error created at/);
                    },
                    this
                  );
                  return i(
                    e,
                    function (t) {
                      var e,
                        n = t.split("@"),
                        r = this.extractLocation(n.pop()),
                        o = n.shift() || "",
                        i =
                          o
                            .replace(/<anonymous function(: (\w+))?>/, "$2")
                            .replace(/\([^\)]*\)/g, "") || void 0;
                      o.match(/\(([^\)]*)\)/) &&
                        (e = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                      var a =
                        void 0 === e || "[arguments not available]" === e
                          ? void 0
                          : e.split(",");
                      return new s(i, a, r[0], r[1], r[2], t);
                    },
                    this
                  );
                },
              };
            })
              ? i.apply(r, a)
              : i) || (n.exports = s);
    })();
  },
  function (n, r, t) {
    var o, i, a;
    !(function (t, e) {
      "use strict";
      (i = []),
        void 0 ===
          (a =
            "function" ==
            typeof (o = function () {
              function e(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
              }
              function t(t, e, n, r, o, i) {
                void 0 !== t && this.setFunctionName(t),
                  void 0 !== e && this.setArgs(e),
                  void 0 !== n && this.setFileName(n),
                  void 0 !== r && this.setLineNumber(r),
                  void 0 !== o && this.setColumnNumber(o),
                  void 0 !== i && this.setSource(i);
              }
              return (
                (t.prototype = {
                  getFunctionName: function () {
                    return this.functionName;
                  },
                  setFunctionName: function (t) {
                    this.functionName = String(t);
                  },
                  getArgs: function () {
                    return this.args;
                  },
                  setArgs: function (t) {
                    if ("[object Array]" !== Object.prototype.toString.call(t))
                      throw new TypeError("Args must be an Array");
                    this.args = t;
                  },
                  getFileName: function () {
                    return this.fileName;
                  },
                  setFileName: function (t) {
                    this.fileName = String(t);
                  },
                  getLineNumber: function () {
                    return this.lineNumber;
                  },
                  setLineNumber: function (t) {
                    if (!e(t))
                      throw new TypeError("Line Number must be a Number");
                    this.lineNumber = Number(t);
                  },
                  getColumnNumber: function () {
                    return this.columnNumber;
                  },
                  setColumnNumber: function (t) {
                    if (!e(t))
                      throw new TypeError("Column Number must be a Number");
                    this.columnNumber = Number(t);
                  },
                  getSource: function () {
                    return this.source;
                  },
                  setSource: function (t) {
                    this.source = String(t);
                  },
                  toString: function () {
                    return (
                      (this.getFunctionName() || "{anonymous}") +
                      "(" +
                      (this.getArgs() || []).join(",") +
                      ")" +
                      (this.getFileName() ? "@" + this.getFileName() : "") +
                      (e(this.getLineNumber())
                        ? ":" + this.getLineNumber()
                        : "") +
                      (e(this.getColumnNumber())
                        ? ":" + this.getColumnNumber()
                        : "")
                    );
                  },
                }),
                t
              );
            })
              ? o.apply(r, i)
              : o) || (n.exports = a);
    })();
  },
  function (t, e, n) {
    var s = n(0);
    t.exports = {
      itemToPayload: function (t, e, n) {
        var r = e.payload || {};
        r.body && delete r.body;
        var o = s.merge(t.data, r);
        t._isUncaught && (o._isUncaught = !0),
          t._originalArgs && (o._originalArgs = t._originalArgs),
          n(null, o);
      },
      addTelemetryData: function (t, e, n) {
        t.telemetryEvents && s.set(t, "data.body.telemetry", t.telemetryEvents),
          n(null, t);
      },
      addMessageWithError: function (t, e, n) {
        if (t.message) {
          var r = "data.body.trace_chain.0",
            o = s.get(t, r);
          if ((o || ((r = "data.body.trace"), (o = s.get(t, r))), o)) {
            if (!o.exception || !o.exception.description)
              return (
                s.set(t, r + ".exception.description", t.message),
                void n(null, t)
              );
            var i = s.get(t, r + ".extra") || {},
              a = s.merge(i, { message: t.message });
            s.set(t, r + ".extra", a);
          }
          n(null, t);
        } else n(null, t);
      },
      userTransform: function (o) {
        return function (e, n, r) {
          var t = s.merge(e);
          try {
            s.isFunction(n.transform) && n.transform(t.data, e);
          } catch (t) {
            return (
              (n.transform = null),
              o.error(
                "Error while calling custom transform() function. Removing custom transform().",
                t
              ),
              void r(null, e)
            );
          }
          r(null, t);
        };
      },
      addConfigToPayload: function (t, e, n) {
        if (!e.sendConfig) return n(null, t);
        var r = s.get(t, "data.custom") || {};
        (r._rollbarConfig = e), (t.data.custom = r), n(null, t);
      },
      addConfiguredOptions: function (t, e, n) {
        delete e._configuredOptions.accessToken,
          (t.data.notifier.configured_options = e._configuredOptions),
          n(null, t);
      },
      addDiagnosticKeys: function (t, e, n) {
        var r = {};
        if ((s.get(t, "err._isAnonymous") && (r.is_anonymous = !0), t.err))
          try {
            r.raw_error = {
              message: t.err.message,
              name: t.err.name,
              constructor_name: t.err.constructor && t.err.constructor.name,
              filename: t.err.fileName,
              line: t.err.lineNumber,
              column: t.err.columnNumber,
              stack: t.err.stack,
            };
          } catch (t) {
            r.raw_error = { failed: String(t) };
          }
        (t.data.notifier.diagnostic = s.merge(t.data.notifier.diagnostic, r)),
          n(null, t);
      },
    };
  },
  function (t, e, n) {
    var r = n(0);
    t.exports = {
      checkIgnore: function (t, e) {
        return (
          !r.get(e, "plugins.jquery.ignoreAjaxErrors") ||
          !r.get(t, "body.message.extra.isAjax")
        );
      },
    };
  },
  function (t, e, n) {
    var d = n(0);
    function r(t, e, n, r) {
      var o,
        i,
        a,
        s,
        u,
        c,
        l,
        p,
        f = !1;
      "blacklist" === n && (f = !0);
      try {
        if (
          ((c = (o = f ? e.hostBlackList : e.hostWhiteList) && o.length),
          (i = d.get(t, "body.trace")),
          !o || 0 === c)
        )
          return !f;
        if (!i || !i.frames || 0 === i.frames.length) return !f;
        for (s = i.frames.length, l = 0; l < s; l++) {
          if (((a = i.frames[l].filename), !d.isType(a, "string"))) return !f;
          for (p = 0; p < c; p++)
            if (((u = o[p]), new RegExp(u).test(a))) return !0;
        }
      } catch (t) {
        f ? (e.hostBlackList = null) : (e.hostWhiteList = null);
        var h = f ? "hostBlackList" : "hostWhiteList";
        return (
          r.error(
            "Error while reading your configuration's " +
              h +
              " option. Removing custom " +
              h +
              ".",
            t
          ),
          !f
        );
      }
      return !1;
    }
    t.exports = {
      checkLevel: function (t, e) {
        var n = t.level,
          r = d.LEVELS[n] || 0,
          o = e.reportLevel;
        return !(r < (d.LEVELS[o] || 0));
      },
      userCheckIgnore: function (o) {
        return function (t, e) {
          var n = !!t._isUncaught;
          delete t._isUncaught;
          var r = t._originalArgs;
          delete t._originalArgs;
          try {
            d.isFunction(e.onSendCallback) && e.onSendCallback(n, r, t);
          } catch (t) {
            (e.onSendCallback = null),
              o.error("Error while calling onSendCallback, removing", t);
          }
          try {
            if (d.isFunction(e.checkIgnore) && e.checkIgnore(n, r, t))
              return !1;
          } catch (t) {
            (e.checkIgnore = null),
              o.error("Error while calling custom checkIgnore(), removing", t);
          }
          return !0;
        };
      },
      urlIsNotBlacklisted: function (n) {
        return function (t, e) {
          return !r(t, e, "blacklist", n);
        };
      },
      urlIsWhitelisted: function (n) {
        return function (t, e) {
          return r(t, e, "whitelist", n);
        };
      },
      messageIsIgnored: function (l) {
        return function (t, e) {
          var n, r, o, i, a, s, u, c;
          try {
            if (((a = !1), !(o = e.ignoredMessages) || 0 === o.length))
              return !0;
            if (
              ((s = t.body),
              (u = d.get(s, "trace.exception.message")),
              (c = d.get(s, "message.body")),
              !(n = u || c))
            )
              return !0;
            for (
              i = o.length, r = 0;
              r < i && !(a = new RegExp(o[r], "gi").test(n));
              r++
            );
          } catch (t) {
            (e.ignoredMessages = null),
              l.error(
                "Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages."
              );
          }
          return !a;
        };
      },
    };
  },
  function (t, e, n) {
    var m = n(0),
      i = n(3),
      a = n(27),
      s = {
        network: !0,
        networkResponseHeaders: !1,
        networkResponseBody: !1,
        networkRequestBody: !1,
        log: !0,
        dom: !0,
        navigation: !0,
        connectivity: !0,
      };
    function r(t, e, n, r, o) {
      var i = t[e];
      (t[e] = n(i)), r && r[o].push([t, e, i]);
    }
    function o(t, e) {
      for (var n; t[e].length; ) (n = t[e].shift())[0][n[1]] = n[2];
    }
    function u(t, e, n, r, o) {
      var i = t.autoInstrument;
      !1 === t.enabled || !1 === i
        ? (this.autoInstrument = {})
        : (m.isType(i, "object") || (i = s),
          (this.autoInstrument = m.merge(s, i))),
        (this.scrubTelemetryInputs = !!t.scrubTelemetryInputs),
        (this.telemetryScrubber = t.telemetryScrubber),
        (this.defaultValueScrubber = (function (t) {
          for (var r = [], e = 0; e < t.length; ++e)
            r.push(new RegExp(t[e], "i"));
          return function (t) {
            var e = (function (t) {
              if (!t || !t.attributes) return null;
              for (var e = t.attributes, n = 0; n < e.length; ++n)
                if ("name" === e[n].key) return e[n].value;
              return null;
            })(t);
            if (!e) return !1;
            for (var n = 0; n < r.length; ++n) if (r[n].test(e)) return !0;
            return !1;
          };
        })(t.scrubFields)),
        (this.telemeter = e),
        (this.rollbar = n),
        (this._window = r || {}),
        (this._document = o || {}),
        (this.replacements = {
          network: [],
          log: [],
          navigation: [],
          connectivity: [],
        }),
        (this.eventRemovers = { dom: [], connectivity: [] }),
        (this._location = this._window.location),
        (this._lastHref = this._location && this._location.href);
    }
    (u.prototype.configure = function (t) {
      var e = t.autoInstrument,
        n = m.merge(this.autoInstrument);
      !1 === t.enabled || !1 === e
        ? (this.autoInstrument = {})
        : (m.isType(e, "object") || (e = s),
          (this.autoInstrument = m.merge(s, e))),
        this.instrument(n),
        void 0 !== t.scrubTelemetryInputs &&
          (this.scrubTelemetryInputs = !!t.scrubTelemetryInputs),
        void 0 !== t.telemetryScrubber &&
          (this.telemetryScrubber = t.telemetryScrubber);
    }),
      (u.prototype.instrument = function (t) {
        !this.autoInstrument.network || (t && t.network)
          ? !this.autoInstrument.network &&
            t &&
            t.network &&
            this.deinstrumentNetwork()
          : this.instrumentNetwork(),
          !this.autoInstrument.log || (t && t.log)
            ? !this.autoInstrument.log &&
              t &&
              t.log &&
              this.deinstrumentConsole()
            : this.instrumentConsole(),
          !this.autoInstrument.dom || (t && t.dom)
            ? !this.autoInstrument.dom && t && t.dom && this.deinstrumentDom()
            : this.instrumentDom(),
          !this.autoInstrument.navigation || (t && t.navigation)
            ? !this.autoInstrument.navigation &&
              t &&
              t.navigation &&
              this.deinstrumentNavigation()
            : this.instrumentNavigation(),
          !this.autoInstrument.connectivity || (t && t.connectivity)
            ? !this.autoInstrument.connectivity &&
              t &&
              t.connectivity &&
              this.deinstrumentConnectivity()
            : this.instrumentConnectivity();
      }),
      (u.prototype.deinstrumentNetwork = function () {
        o(this.replacements, "network");
      }),
      (u.prototype.instrumentNetwork = function () {
        var d = this;
        function n(t, e) {
          t in e &&
            m.isFunction(e[t]) &&
            r(e, t, function (t) {
              return d.rollbar.wrap(t);
            });
        }
        if ("XMLHttpRequest" in this._window) {
          var t = this._window.XMLHttpRequest.prototype;
          r(
            t,
            "open",
            function (n) {
              return function (t, e) {
                return (
                  m.isType(e, "string") &&
                    (this.__rollbar_xhr = {
                      method: t,
                      url: e,
                      status_code: null,
                      start_time_ms: m.now(),
                      end_time_ms: null,
                    }),
                  n.apply(this, arguments)
                );
              };
            },
            this.replacements,
            "network"
          ),
            r(
              t,
              "send",
              function (t) {
                return function (f) {
                  var h = this;
                  function e() {
                    if (h.__rollbar_xhr) {
                      if (null === h.__rollbar_xhr.status_code) {
                        h.__rollbar_xhr.status_code = 0;
                        var t = null;
                        d.autoInstrument.networkRequestBody && (t = f),
                          (h.__rollbar_event = d.telemeter.captureNetwork(
                            h.__rollbar_xhr,
                            "xhr",
                            void 0,
                            t
                          ));
                      }
                      if (
                        (h.readyState < 2 &&
                          (h.__rollbar_xhr.start_time_ms = m.now()),
                        3 < h.readyState)
                      ) {
                        h.__rollbar_xhr.end_time_ms = m.now();
                        var e = null;
                        if (d.autoInstrument.networkResponseHeaders) {
                          var n = d.autoInstrument.networkResponseHeaders;
                          e = {};
                          try {
                            var r, o;
                            if (!0 === n) {
                              var i = h.getAllResponseHeaders();
                              if (i) {
                                var a,
                                  s,
                                  u = i.trim().split(/[\r\n]+/);
                                for (o = 0; o < u.length; o++)
                                  (r = (a = u[o].split(": ")).shift()),
                                    (s = a.join(": ")),
                                    (e[r] = s);
                              }
                            } else
                              for (o = 0; o < n.length; o++)
                                e[(r = n[o])] = h.getResponseHeader(r);
                          } catch (t) {}
                        }
                        var c = null;
                        if (d.autoInstrument.networkResponseBody)
                          try {
                            c = h.responseText;
                          } catch (t) {}
                        var l = null;
                        (c || e) &&
                          ((l = {}), c && (l.body = c), e && (l.headers = e)),
                          l && (h.__rollbar_xhr.response = l);
                        try {
                          var p = h.status;
                          (p = 1223 === p ? 204 : p),
                            (h.__rollbar_xhr.status_code = p),
                            (h.__rollbar_event.level =
                              d.telemeter.levelFromStatus(p));
                        } catch (t) {}
                      }
                    }
                  }
                  return (
                    n("onload", h),
                    n("onerror", h),
                    n("onprogress", h),
                    "onreadystatechange" in h &&
                    m.isFunction(h.onreadystatechange)
                      ? r(h, "onreadystatechange", function (t) {
                          return d.rollbar.wrap(t, void 0, e);
                        })
                      : (h.onreadystatechange = e),
                    t.apply(this, arguments)
                  );
                };
              },
              this.replacements,
              "network"
            );
        }
        "fetch" in this._window &&
          r(
            this._window,
            "fetch",
            function (l) {
              return function (t, e) {
                for (
                  var n = new Array(arguments.length), r = 0, o = n.length;
                  r < o;
                  r++
                )
                  n[r] = arguments[r];
                var i,
                  a = n[0],
                  s = "GET";
                m.isType(a, "string")
                  ? (i = a)
                  : a && ((i = a.url), a.method && (s = a.method)),
                  n[1] && n[1].method && (s = n[1].method);
                var u = {
                    method: s,
                    url: i,
                    status_code: null,
                    start_time_ms: m.now(),
                    end_time_ms: null,
                  },
                  c = null;
                return (
                  d.autoInstrument.networkRequestBody &&
                    (n[1] && n[1].body
                      ? (c = n[1].body)
                      : n[0] &&
                        !m.isType(n[0], "string") &&
                        n[0].body &&
                        (c = n[0].body)),
                  d.telemeter.captureNetwork(u, "fetch", void 0, c),
                  l.apply(this, n).then(function (t) {
                    (u.end_time_ms = m.now()), (u.status_code = t.status);
                    var e = null;
                    if (d.autoInstrument.networkResponseHeaders) {
                      var n = d.autoInstrument.networkResponseHeaders;
                      e = {};
                      try {
                        if (!0 === n);
                        else
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            e[o] = t.headers.get(o);
                          }
                      } catch (t) {}
                    }
                    var i = null;
                    return e && (i = { headers: e }), i && (u.response = i), t;
                  })
                );
              };
            },
            this.replacements,
            "network"
          );
      }),
      (u.prototype.deinstrumentConsole = function () {
        if ("console" in this._window && this._window.console.log)
          for (var t; this.replacements.log.length; )
            (t = this.replacements.log.shift()),
              (this._window.console[t[0]] = t[1]);
      }),
      (u.prototype.instrumentConsole = function () {
        if ("console" in this._window && this._window.console.log)
          for (
            var i = this,
              e = this._window.console,
              t = ["debug", "info", "warn", "error", "log"],
              n = 0,
              r = t.length;
            n < r;
            n++
          )
            o(t[n]);
        function o(t) {
          var n = e[t],
            r = e,
            o = "warn" === t ? "warning" : t;
          (e[t] = function () {
            var t = Array.prototype.slice.call(arguments),
              e = m.formatArgsAsString(t);
            i.telemeter.captureLog(e, o),
              n && Function.prototype.apply.call(n, r, t);
          }),
            i.replacements.log.push([t, n]);
        }
      }),
      (u.prototype.deinstrumentDom = function () {
        ("addEventListener" in this._window || "attachEvent" in this._window) &&
          this.removeListeners("dom");
      }),
      (u.prototype.instrumentDom = function () {
        if (
          "addEventListener" in this._window ||
          "attachEvent" in this._window
        ) {
          var t = this.handleClick.bind(this),
            e = this.handleBlur.bind(this);
          this.addListener("dom", this._window, "click", "onclick", t, !0),
            this.addListener("dom", this._window, "blur", "onfocusout", e, !0);
        }
      }),
      (u.prototype.handleClick = function (t) {
        try {
          var e = a.getElementFromEvent(t, this._document),
            n = e && e.tagName,
            r =
              a.isDescribedElement(e, "a") || a.isDescribedElement(e, "button");
          n && (r || a.isDescribedElement(e, "input", ["button", "submit"]))
            ? this.captureDomEvent("click", e)
            : a.isDescribedElement(e, "input", ["checkbox", "radio"]) &&
              this.captureDomEvent("input", e, e.value, e.checked);
        } catch (t) {}
      }),
      (u.prototype.handleBlur = function (t) {
        try {
          var e = a.getElementFromEvent(t, this._document);
          e &&
            e.tagName &&
            (a.isDescribedElement(e, "textarea")
              ? this.captureDomEvent("input", e, e.value)
              : a.isDescribedElement(e, "select") &&
                e.options &&
                e.options.length
              ? this.handleSelectInputChanged(e)
              : a.isDescribedElement(e, "input") &&
                !a.isDescribedElement(e, "input", [
                  "button",
                  "submit",
                  "hidden",
                  "checkbox",
                  "radio",
                ]) &&
                this.captureDomEvent("input", e, e.value));
        } catch (t) {}
      }),
      (u.prototype.handleSelectInputChanged = function (t) {
        if (t.multiple)
          for (var e = 0; e < t.options.length; e++)
            t.options[e].selected &&
              this.captureDomEvent("input", t, t.options[e].value);
        else
          0 <= t.selectedIndex &&
            t.options[t.selectedIndex] &&
            this.captureDomEvent("input", t, t.options[t.selectedIndex].value);
      }),
      (u.prototype.captureDomEvent = function (t, e, n, r) {
        if (void 0 !== n)
          if (this.scrubTelemetryInputs || "password" === a.getElementType(e))
            n = "[scrubbed]";
          else {
            var o = a.describeElement(e);
            this.telemetryScrubber
              ? this.telemetryScrubber(o) && (n = "[scrubbed]")
              : this.defaultValueScrubber(o) && (n = "[scrubbed]");
          }
        var i = a.elementArrayToString(a.treeToArray(e));
        this.telemeter.captureDom(t, i, n, r);
      }),
      (u.prototype.deinstrumentNavigation = function () {
        var t = this._window.chrome;
        (t && t.app && t.app.runtime) ||
          !this._window.history ||
          !this._window.history.pushState ||
          o(this.replacements, "navigation");
      }),
      (u.prototype.instrumentNavigation = function () {
        var t = this._window.chrome;
        if (
          !(t && t.app && t.app.runtime) &&
          this._window.history &&
          this._window.history.pushState
        ) {
          var n = this;
          r(
            this._window,
            "onpopstate",
            function (e) {
              return function () {
                var t = n._location.href;
                n.handleUrlChange(n._lastHref, t),
                  e && e.apply(this, arguments);
              };
            },
            this.replacements,
            "navigation"
          ),
            r(
              this._window.history,
              "pushState",
              function (e) {
                return function () {
                  var t = 2 < arguments.length ? arguments[2] : void 0;
                  return (
                    t && n.handleUrlChange(n._lastHref, t + ""),
                    e.apply(this, arguments)
                  );
                };
              },
              this.replacements,
              "navigation"
            );
        }
      }),
      (u.prototype.handleUrlChange = function (t, e) {
        var n = i.parse(this._location.href),
          r = i.parse(e),
          o = i.parse(t);
        (this._lastHref = e),
          n.protocol === r.protocol &&
            n.host === r.host &&
            (e = r.path + (r.hash || "")),
          n.protocol === o.protocol &&
            n.host === o.host &&
            (t = o.path + (o.hash || "")),
          this.telemeter.captureNavigation(t, e);
      }),
      (u.prototype.deinstrumentConnectivity = function () {
        ("addEventListener" in this._window || "body" in this._document) &&
          (this._window.addEventListener
            ? this.removeListeners("connectivity")
            : o(this.replacements, "connectivity"));
      }),
      (u.prototype.instrumentConnectivity = function () {
        if ("addEventListener" in this._window || "body" in this._document)
          if (this._window.addEventListener)
            this.addListener(
              "connectivity",
              this._window,
              "online",
              void 0,
              function () {
                this.telemeter.captureConnectivityChange("online");
              }.bind(this),
              !0
            ),
              this.addListener(
                "connectivity",
                this._window,
                "offline",
                void 0,
                function () {
                  this.telemeter.captureConnectivityChange("offline");
                }.bind(this),
                !0
              );
          else {
            var e = this;
            r(
              this._document.body,
              "ononline",
              function (t) {
                return function () {
                  e.telemeter.captureConnectivityChange("online"),
                    t && t.apply(this, arguments);
                };
              },
              this.replacements,
              "connectivity"
            ),
              r(
                this._document.body,
                "onoffline",
                function (t) {
                  return function () {
                    e.telemeter.captureConnectivityChange("offline"),
                      t && t.apply(this, arguments);
                  };
                },
                this.replacements,
                "connectivity"
              );
          }
      }),
      (u.prototype.addListener = function (t, e, n, r, o, i) {
        e.addEventListener
          ? (e.addEventListener(n, o, i),
            this.eventRemovers[t].push(function () {
              e.removeEventListener(n, o, i);
            }))
          : r &&
            (e.attachEvent(r, o),
            this.eventRemovers[t].push(function () {
              e.detachEvent(r, o);
            }));
      }),
      (u.prototype.removeListeners = function (t) {
        for (; this.eventRemovers[t].length; ) this.eventRemovers[t].shift()();
      }),
      (t.exports = u);
  },
  function (t, e) {
    function o(t) {
      return (t.getAttribute("type") || "").toLowerCase();
    }
    function s(t) {
      if (!t || !t.tagName) return "";
      var e = [t.tagName];
      t.id && e.push("#" + t.id),
        t.classes && e.push("." + t.classes.join("."));
      for (var n = 0; n < t.attributes.length; n++)
        e.push("[" + t.attributes[n].key + '="' + t.attributes[n].value + '"]');
      return e.join("");
    }
    function i(t) {
      if (!t || !t.tagName) return null;
      var e,
        n,
        r,
        o,
        i = {};
      (i.tagName = t.tagName.toLowerCase()),
        t.id && (i.id = t.id),
        (e = t.className) &&
          "string" == typeof e &&
          (i.classes = e.split(/\s+/));
      var a = ["type", "name", "title", "alt"];
      for (i.attributes = [], o = 0; o < a.length; o++)
        (n = a[o]),
          (r = t.getAttribute(n)) && i.attributes.push({ key: n, value: r });
      return i;
    }
    t.exports = {
      describeElement: i,
      descriptionToString: s,
      elementArrayToString: function (t) {
        for (
          var e, n, r = " > ".length, o = [], i = 0, a = t.length - 1;
          0 <= a;
          a--
        ) {
          if (
            ((e = s(t[a])),
            (n = i + o.length * r + e.length),
            a < t.length - 1 && 83 <= n)
          ) {
            o.unshift("...");
            break;
          }
          o.unshift(e), (i += e.length);
        }
        return o.join(" > ");
      },
      treeToArray: function (t) {
        for (
          var e, n = [], r = 0;
          t && r < 5 && "html" !== (e = i(t)).tagName;
          r++
        )
          n.unshift(e), (t = t.parentNode);
        return n;
      },
      getElementFromEvent: function (t, e) {
        return t.target
          ? t.target
          : e && e.elementFromPoint
          ? e.elementFromPoint(t.clientX, t.clientY)
          : void 0;
      },
      isDescribedElement: function (t, e, n) {
        if (t.tagName.toLowerCase() !== e.toLowerCase()) return !1;
        if (!n) return !0;
        t = o(t);
        for (var r = 0; r < n.length; r++) if (n[r] === t) return !0;
        return !1;
      },
      getElementType: o,
    };
  },
]);
