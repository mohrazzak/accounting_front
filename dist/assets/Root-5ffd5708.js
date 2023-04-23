import {
  r as g,
  R as X,
  p as q,
  b as tt,
  d as U,
  s as z,
  P as ut,
  e as L,
  _ as i,
  f as et,
  h as M,
  a as l,
  i as k,
  k as ot,
  l as ft,
  m as gt,
  o as mt,
  T as yt,
  n as Ct,
  q as kt,
  t as at,
  M as At,
  v as It,
  L as Z,
  w as J,
  x as $t,
  y as Pt,
  j as w,
  z as it,
  B as Bt,
  A as Rt,
  D as Et,
  F as vt,
  E as st,
  G as lt,
  H as Dt,
  I as Lt,
  O as Ot,
} from "./index-8aa1702d.js";
import { T as Tt } from "./Toolbar-2f8e7a3d.js";
import { I as ct } from "./IconButton-2bd4868e.js";
import { A as wt } from "./x-circle-e5fd3475.js";
function rt() {
  return (
    (rt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    rt.apply(this, arguments)
  );
}
function Mt(t, e) {
  if (t == null) return {};
  var r = zt(t, e),
    o,
    n;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (n = 0; n < s.length; n++)
      (o = s[n]),
        !(e.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, o) &&
          (r[o] = t[o]);
  }
  return r;
}
function zt(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    n,
    s;
  for (s = 0; s < o.length; s++)
    (n = o[s]), !(e.indexOf(n) >= 0) && (r[n] = t[n]);
  return r;
}
var nt = g.forwardRef(function (t, e) {
  var r = t.color,
    o = r === void 0 ? "currentColor" : r,
    n = t.size,
    s = n === void 0 ? 24 : n,
    d = Mt(t, ["color", "size"]);
  return X.createElement(
    "svg",
    rt(
      {
        ref: e,
        xmlns: "http://www.w3.org/2000/svg",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: o,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      d
    ),
    X.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    X.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    X.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
  );
});
nt.propTypes = { color: q.string, size: q.oneOfType([q.string, q.number]) };
nt.displayName = "Menu";
const Nt = nt;
function St(t) {
  return tt("MuiAppBar", t);
}
U("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
]);
const jt = ["className", "color", "enableColorOnDark", "position"],
  Gt = (t) => {
    const { color: e, position: r, classes: o } = t,
      n = { root: ["root", `color${L(e)}`, `position${L(r)}`] };
    return ot(n, St, o);
  },
  K = (t, e) => (t ? `${t == null ? void 0 : t.replace(")", "")}, ${e})` : e),
  Vt = z(ut, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [e.root, e[`position${L(r.position)}`], e[`color${L(r.color)}`]];
    },
  })(({ theme: t, ownerState: e }) => {
    const r =
      t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[900];
    return i(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      e.position === "fixed" && {
        position: "fixed",
        zIndex: (t.vars || t).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      e.position === "absolute" && {
        position: "absolute",
        zIndex: (t.vars || t).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      e.position === "sticky" && {
        position: "sticky",
        zIndex: (t.vars || t).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      e.position === "static" && { position: "static" },
      e.position === "relative" && { position: "relative" },
      !t.vars &&
        i(
          {},
          e.color === "default" && {
            backgroundColor: r,
            color: t.palette.getContrastText(r),
          },
          e.color &&
            e.color !== "default" &&
            e.color !== "inherit" &&
            e.color !== "transparent" && {
              backgroundColor: t.palette[e.color].main,
              color: t.palette[e.color].contrastText,
            },
          e.color === "inherit" && { color: "inherit" },
          t.palette.mode === "dark" &&
            !e.enableColorOnDark && { backgroundColor: null, color: null },
          e.color === "transparent" &&
            i(
              { backgroundColor: "transparent", color: "inherit" },
              t.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      t.vars &&
        i(
          {},
          e.color === "default" && {
            "--AppBar-background": e.enableColorOnDark
              ? t.vars.palette.AppBar.defaultBg
              : K(
                  t.vars.palette.AppBar.darkBg,
                  t.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": e.enableColorOnDark
              ? t.vars.palette.text.primary
              : K(t.vars.palette.AppBar.darkColor, t.vars.palette.text.primary),
          },
          e.color &&
            !e.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": e.enableColorOnDark
                ? t.vars.palette[e.color].main
                : K(t.vars.palette.AppBar.darkBg, t.vars.palette[e.color].main),
              "--AppBar-color": e.enableColorOnDark
                ? t.vars.palette[e.color].contrastText
                : K(
                    t.vars.palette.AppBar.darkColor,
                    t.vars.palette[e.color].contrastText
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: e.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          e.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  _t = g.forwardRef(function (e, r) {
    const o = et({ props: e, name: "MuiAppBar" }),
      {
        className: n,
        color: s = "primary",
        enableColorOnDark: d = !1,
        position: u = "fixed",
      } = o,
      f = M(o, jt),
      c = i({}, o, { color: s, position: u, enableColorOnDark: d }),
      m = Gt(c);
    return l(
      Vt,
      i(
        {
          square: !0,
          component: "header",
          ownerState: c,
          elevation: 4,
          className: k(m.root, n, u === "fixed" && "mui-fixed"),
          ref: r,
        },
        f
      )
    );
  }),
  Ft = _t,
  Ut = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Wt(t, e, r) {
  const o = e.getBoundingClientRect(),
    n = r && r.getBoundingClientRect(),
    s = mt(e);
  let d;
  if (e.fakeTransform) d = e.fakeTransform;
  else {
    const c = s.getComputedStyle(e);
    d =
      c.getPropertyValue("-webkit-transform") ||
      c.getPropertyValue("transform");
  }
  let u = 0,
    f = 0;
  if (d && d !== "none" && typeof d == "string") {
    const c = d.split("(")[1].split(")")[0].split(",");
    (u = parseFloat(c[4], 10)), (f = parseFloat(c[5], 10));
  }
  return t === "left"
    ? n
      ? `translateX(${n.right + u - o.left}px)`
      : `translateX(${s.innerWidth + u - o.left}px)`
    : t === "right"
    ? n
      ? `translateX(-${o.right - n.left - u}px)`
      : `translateX(-${o.left + o.width - u}px)`
    : t === "up"
    ? n
      ? `translateY(${n.bottom + f - o.top}px)`
      : `translateY(${s.innerHeight + f - o.top}px)`
    : n
    ? `translateY(-${o.top - n.top + o.height - f}px)`
    : `translateY(-${o.top + o.height - f}px)`;
}
function Ht(t) {
  return typeof t == "function" ? t() : t;
}
function Q(t, e, r) {
  const o = Ht(r),
    n = Wt(t, e, o);
  n && ((e.style.webkitTransform = n), (e.style.transform = n));
}
const Yt = g.forwardRef(function (e, r) {
    const o = ft(),
      n = {
        enter: o.transitions.easing.easeOut,
        exit: o.transitions.easing.sharp,
      },
      s = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        addEndListener: d,
        appear: u = !0,
        children: f,
        container: c,
        direction: m = "down",
        easing: O = n,
        in: h,
        onEnter: N,
        onEntered: A,
        onEntering: I,
        onExit: $,
        onExited: S,
        onExiting: j,
        style: y,
        timeout: P = s,
        TransitionComponent: B = yt,
      } = e,
      G = M(e, Ut),
      v = g.useRef(null),
      W = gt(f.ref, v, r),
      b = (a) => (p) => {
        a && (p === void 0 ? a(v.current) : a(v.current, p));
      },
      x = b((a, p) => {
        Q(m, a, c), kt(a), N && N(a, p);
      }),
      R = b((a, p) => {
        const C = at({ timeout: P, style: y, easing: O }, { mode: "enter" });
        (a.style.webkitTransition = o.transitions.create(
          "-webkit-transform",
          i({}, C)
        )),
          (a.style.transition = o.transitions.create("transform", i({}, C))),
          (a.style.webkitTransform = "none"),
          (a.style.transform = "none"),
          I && I(a, p);
      }),
      E = b(A),
      D = b(j),
      H = b((a) => {
        const p = at({ timeout: P, style: y, easing: O }, { mode: "exit" });
        (a.style.webkitTransition = o.transitions.create(
          "-webkit-transform",
          p
        )),
          (a.style.transition = o.transitions.create("transform", p)),
          Q(m, a, c),
          $ && $(a);
      }),
      V = b((a) => {
        (a.style.webkitTransition = ""), (a.style.transition = ""), S && S(a);
      }),
      Y = (a) => {
        d && d(v.current, a);
      },
      F = g.useCallback(() => {
        v.current && Q(m, v.current, c);
      }, [m, c]);
    return (
      g.useEffect(() => {
        if (h || m === "down" || m === "right") return;
        const a = Ct(() => {
            v.current && Q(m, v.current, c);
          }),
          p = mt(v.current);
        return (
          p.addEventListener("resize", a),
          () => {
            a.clear(), p.removeEventListener("resize", a);
          }
        );
      }, [m, h, c]),
      g.useEffect(() => {
        h || F();
      }, [h, F]),
      l(
        B,
        i(
          {
            nodeRef: v,
            onEnter: x,
            onEntered: E,
            onEntering: R,
            onExit: H,
            onExited: V,
            onExiting: D,
            addEndListener: Y,
            appear: u,
            in: h,
            timeout: P,
          },
          G,
          {
            children: (a, p) =>
              g.cloneElement(
                f,
                i(
                  {
                    ref: W,
                    style: i(
                      { visibility: a === "exited" && !h ? "hidden" : void 0 },
                      y,
                      f.props.style
                    ),
                  },
                  p
                )
              ),
          }
        )
      )
    );
  }),
  Xt = Yt;
function qt(t) {
  return tt("MuiDrawer", t);
}
U("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const Jt = ["BackdropProps"],
  Kt = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  bt = (t, e) => {
    const { ownerState: r } = t;
    return [
      e.root,
      (r.variant === "permanent" || r.variant === "persistent") && e.docked,
      e.modal,
    ];
  },
  Qt = (t) => {
    const { classes: e, anchor: r, variant: o } = t,
      n = {
        root: ["root"],
        docked: [(o === "permanent" || o === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${L(r)}`,
          o !== "temporary" && `paperAnchorDocked${L(r)}`,
        ],
      };
    return ot(n, qt, e);
  },
  Zt = z(At, { name: "MuiDrawer", slot: "Root", overridesResolver: bt })(
    ({ theme: t }) => ({ zIndex: (t.vars || t).zIndex.drawer })
  ),
  dt = z("div", {
    shouldForwardProp: It,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: bt,
  })({ flex: "0 0 auto" }),
  te = z(ut, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        e.paper,
        e[`paperAnchor${L(r.anchor)}`],
        r.variant !== "temporary" && e[`paperAnchorDocked${L(r.anchor)}`],
      ];
    },
  })(({ theme: t, ownerState: e }) =>
    i(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (t.vars || t).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      e.anchor === "left" && { left: 0 },
      e.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      e.anchor === "right" && { right: 0 },
      e.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      e.anchor === "left" &&
        e.variant !== "temporary" && {
          borderRight: `1px solid ${(t.vars || t).palette.divider}`,
        },
      e.anchor === "top" &&
        e.variant !== "temporary" && {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
        },
      e.anchor === "right" &&
        e.variant !== "temporary" && {
          borderLeft: `1px solid ${(t.vars || t).palette.divider}`,
        },
      e.anchor === "bottom" &&
        e.variant !== "temporary" && {
          borderTop: `1px solid ${(t.vars || t).palette.divider}`,
        }
    )
  ),
  xt = { left: "right", right: "left", top: "down", bottom: "up" };
function ee(t) {
  return ["left", "right"].indexOf(t) !== -1;
}
function oe(t, e) {
  return t.direction === "rtl" && ee(e) ? xt[e] : e;
}
const re = g.forwardRef(function (e, r) {
    const o = et({ props: e, name: "MuiDrawer" }),
      n = ft(),
      s = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        anchor: d = "left",
        BackdropProps: u,
        children: f,
        className: c,
        elevation: m = 16,
        hideBackdrop: O = !1,
        ModalProps: { BackdropProps: h } = {},
        onClose: N,
        open: A = !1,
        PaperProps: I = {},
        SlideProps: $,
        TransitionComponent: S = Xt,
        transitionDuration: j = s,
        variant: y = "temporary",
      } = o,
      P = M(o.ModalProps, Jt),
      B = M(o, Kt),
      G = g.useRef(!1);
    g.useEffect(() => {
      G.current = !0;
    }, []);
    const v = oe(n, d),
      b = i({}, o, { anchor: d, elevation: m, open: A, variant: y }, B),
      x = Qt(b),
      R = l(
        te,
        i({ elevation: y === "temporary" ? m : 0, square: !0 }, I, {
          className: k(x.paper, I.className),
          ownerState: b,
          children: f,
        })
      );
    if (y === "permanent")
      return l(
        dt,
        i({ className: k(x.root, x.docked, c), ownerState: b, ref: r }, B, {
          children: R,
        })
      );
    const E = l(
      S,
      i({ in: A, direction: xt[v], timeout: j, appear: G.current }, $, {
        children: R,
      })
    );
    return y === "persistent"
      ? l(
          dt,
          i({ className: k(x.root, x.docked, c), ownerState: b, ref: r }, B, {
            children: E,
          })
        )
      : l(
          Zt,
          i(
            {
              BackdropProps: i({}, u, h, { transitionDuration: j }),
              className: k(x.root, x.modal, c),
              open: A,
              ownerState: b,
              onClose: N,
              hideBackdrop: O,
              ref: r,
            },
            B,
            P,
            { children: E }
          )
        );
  }),
  ne = re;
function ae(t) {
  return tt("MuiListItem", t);
}
const ie = U("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  _ = ie,
  se = U("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  le = se;
function ce(t) {
  return tt("MuiListItemSecondaryAction", t);
}
U("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const de = ["className"],
  pe = (t) => {
    const { disableGutters: e, classes: r } = t;
    return ot({ root: ["root", e && "disableGutters"] }, ce, r);
  },
  ue = z("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [e.root, r.disableGutters && e.disableGutters];
    },
  })(({ ownerState: t }) =>
    i(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      t.disableGutters && { right: 0 }
    )
  ),
  ht = g.forwardRef(function (e, r) {
    const o = et({ props: e, name: "MuiListItemSecondaryAction" }),
      { className: n } = o,
      s = M(o, de),
      d = g.useContext(Z),
      u = i({}, o, { disableGutters: d.disableGutters }),
      f = pe(u);
    return l(ue, i({ className: k(f.root, n), ownerState: u, ref: r }, s));
  });
ht.muiName = "ListItemSecondaryAction";
const fe = ht,
  ge = ["className"],
  me = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  ve = (t, e) => {
    const { ownerState: r } = t;
    return [
      e.root,
      r.dense && e.dense,
      r.alignItems === "flex-start" && e.alignItemsFlexStart,
      r.divider && e.divider,
      !r.disableGutters && e.gutters,
      !r.disablePadding && e.padding,
      r.button && e.button,
      r.hasSecondaryAction && e.secondaryAction,
    ];
  },
  be = (t) => {
    const {
      alignItems: e,
      button: r,
      classes: o,
      dense: n,
      disabled: s,
      disableGutters: d,
      disablePadding: u,
      divider: f,
      hasSecondaryAction: c,
      selected: m,
    } = t;
    return ot(
      {
        root: [
          "root",
          n && "dense",
          !d && "gutters",
          !u && "padding",
          f && "divider",
          s && "disabled",
          r && "button",
          e === "flex-start" && "alignItemsFlexStart",
          c && "secondaryAction",
          m && "selected",
        ],
        container: ["container"],
      },
      ae,
      o
    );
  },
  xe = z("div", { name: "MuiListItem", slot: "Root", overridesResolver: ve })(
    ({ theme: t, ownerState: e }) =>
      i(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !e.disablePadding &&
          i(
            { paddingTop: 8, paddingBottom: 8 },
            e.dense && { paddingTop: 4, paddingBottom: 4 },
            !e.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!e.secondaryAction && { paddingRight: 48 }
          ),
        !!e.secondaryAction && { [`& > .${le.root}`]: { paddingRight: 48 } },
        {
          [`&.${_.focusVisible}`]: {
            backgroundColor: (t.vars || t).palette.action.focus,
          },
          [`&.${_.selected}`]: {
            backgroundColor: t.vars
              ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
              : J(t.palette.primary.main, t.palette.action.selectedOpacity),
            [`&.${_.focusVisible}`]: {
              backgroundColor: t.vars
                ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`
                : J(
                    t.palette.primary.main,
                    t.palette.action.selectedOpacity +
                      t.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${_.disabled}`]: {
            opacity: (t.vars || t).palette.action.disabledOpacity,
          },
        },
        e.alignItems === "flex-start" && { alignItems: "flex-start" },
        e.divider && {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
          backgroundClip: "padding-box",
        },
        e.button && {
          transition: t.transitions.create("background-color", {
            duration: t.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (t.vars || t).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${_.selected}:hover`]: {
            backgroundColor: t.vars
              ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`
              : J(
                  t.palette.primary.main,
                  t.palette.action.selectedOpacity +
                    t.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: t.vars
                ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                : J(t.palette.primary.main, t.palette.action.selectedOpacity),
            },
          },
        },
        e.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  he = z("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container,
  })({ position: "relative" }),
  ye = g.forwardRef(function (e, r) {
    const o = et({ props: e, name: "MuiListItem" }),
      {
        alignItems: n = "center",
        autoFocus: s = !1,
        button: d = !1,
        children: u,
        className: f,
        component: c,
        components: m = {},
        componentsProps: O = {},
        ContainerComponent: h = "li",
        ContainerProps: { className: N } = {},
        dense: A = !1,
        disabled: I = !1,
        disableGutters: $ = !1,
        disablePadding: S = !1,
        divider: j = !1,
        focusVisibleClassName: y,
        secondaryAction: P,
        selected: B = !1,
        slotProps: G = {},
        slots: v = {},
      } = o,
      W = M(o.ContainerProps, ge),
      b = M(o, me),
      x = g.useContext(Z),
      R = g.useMemo(
        () => ({ dense: A || x.dense || !1, alignItems: n, disableGutters: $ }),
        [n, x.dense, A, $]
      ),
      E = g.useRef(null);
    $t(() => {
      s && E.current && E.current.focus();
    }, [s]);
    const D = g.Children.toArray(u),
      H = D.length && Pt(D[D.length - 1], ["ListItemSecondaryAction"]),
      V = i({}, o, {
        alignItems: n,
        autoFocus: s,
        button: d,
        dense: R.dense,
        disabled: I,
        disableGutters: $,
        disablePadding: S,
        divider: j,
        hasSecondaryAction: H,
        selected: B,
      }),
      Y = be(V),
      F = gt(E, r),
      a = v.root || m.Root || xe,
      p = G.root || O.root || {},
      C = i({ className: k(Y.root, p.className, f), disabled: I }, b);
    let T = c || "li";
    return (
      d &&
        ((C.component = c || "div"),
        (C.focusVisibleClassName = k(_.focusVisible, y)),
        (T = Bt)),
      H
        ? ((T = !C.component && !c ? "div" : T),
          h === "li" &&
            (T === "li"
              ? (T = "div")
              : C.component === "li" && (C.component = "div")),
          l(Z.Provider, {
            value: R,
            children: w(
              he,
              i(
                { as: h, className: k(Y.container, N), ref: F, ownerState: V },
                W,
                {
                  children: [
                    l(
                      a,
                      i(
                        {},
                        p,
                        !it(a) && { as: T, ownerState: i({}, V, p.ownerState) },
                        C,
                        { children: D }
                      )
                    ),
                    D.pop(),
                  ],
                }
              )
            ),
          }))
        : l(Z.Provider, {
            value: R,
            children: w(
              a,
              i(
                {},
                p,
                { as: T, ref: F },
                !it(a) && { ownerState: i({}, V, p.ownerState) },
                C,
                { children: [D, P && l(fe, { children: P })] }
              )
            ),
          })
    );
  }),
  pt = ye;
function Ce() {
  let t = Rt((n) => n.pages);
  t = t.map((n) => ({ ...n, icon: Et(n.icon) }));
  const [e, r] = g.useState(!1),
    o = () => {
      r((n) => !n);
    };
  return w(vt, {
    children: [
      l(Ft, {
        position: "sticky",
        sx: { backgroundColor: "dimgrey" },
        children: w(Tt, {
          children: [
            l(st, {
              variant: "h4",
              component: "div",
              sx: { flexGrow: 1 },
              children: "AS",
            }),
            l(ct, {
              sx: { display: { xs: "block", md: "none" }, ml: 2 },
              size: "large",
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              onClick: o,
              children: l(Nt, {}),
            }),
            l(lt, {
              sx: { display: { xs: "none", md: "flex" } },
              children: t.map((n) => l(pt, { children: n.title }, n.url)),
            }),
          ],
        }),
      }),
      l(ne, {
        anchor: "right",
        open: e,
        onClose: o,
        children: w(lt, {
          sx: {
            backgroundColor: "ghostwhite",
            height: "100%",
            fontSize: "2rem",
            width: "230px",
            maxWidth: "250px",
            padding: "4rem 1rem",
            position: "relative",
          },
          children: [
            l(ct, {
              sx: {
                position: "absolute",
                left: -5,
                top: -5,
                color: "tomato",
                fontSize: "2.5rem",
              },
              onClick: o,
              children: l(wt, { style: { padding: "0", margin: "0" } }),
            }),
            t.map((n, s) =>
              l(
                pt,
                {
                  onClick: o,
                  sx: { justifyContent: "center", mb: 2, p: 1 },
                  children: w(Dt, {
                    component: Lt,
                    to: n.url,
                    variant: "contained",
                    sx: {
                      fontSize: "1.4rem",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    },
                    children: [l(n.icon, {}), l(st, { children: n.title })],
                  }),
                },
                s
              )
            ),
          ],
        }),
      }),
    ],
  });
}
const Pe = () =>
  w(vt, { children: [l(Ce, {}), l("main", { children: l(Ot, {}) })] });
export { Pe as default };
