import {
  r as h,
  R as _,
  p as j,
  b as B,
  d as L,
  s as y,
  e as S,
  _ as u,
  f as W,
  h as D,
  a as n,
  i as $,
  k as N,
  aF as Ue,
  M as Oe,
  P as de,
  l as Ie,
  aG as re,
  aH as Ee,
  E as J,
  v as Ke,
  at as Z,
  av as Ge,
  w as V,
  au as Xe,
  j as A,
  aI as Be,
  aq as E,
  aJ as Ye,
  z as Je,
  H as q,
  a9 as Ve,
  F as qe,
  I as F,
  aK as Qe,
  X as Ze,
  ao as et,
  aL as tt,
  aM as ot,
  aB as at,
} from "./index-8aa1702d.js";
import { I as X } from "./IconButton-2bd4868e.js";
import { T as nt } from "./Toolbar-2f8e7a3d.js";
function ie() {
  return (
    (ie =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var a in o)
            Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        }
        return e;
      }),
    ie.apply(this, arguments)
  );
}
function st(e, t) {
  if (e == null) return {};
  var o = rt(e, t),
    a,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (a = s[r]),
        !(t.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, a) &&
          (o[a] = e[a]);
  }
  return o;
}
function rt(e, t) {
  if (e == null) return {};
  var o = {},
    a = Object.keys(e),
    r,
    s;
  for (s = 0; s < a.length; s++)
    (r = a[s]), !(t.indexOf(r) >= 0) && (o[r] = e[r]);
  return o;
}
var pe = h.forwardRef(function (e, t) {
  var o = e.color,
    a = o === void 0 ? "currentColor" : o,
    r = e.size,
    s = r === void 0 ? 24 : r,
    c = st(e, ["color", "size"]);
  return _.createElement(
    "svg",
    ie(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      c
    ),
    _.createElement("path", {
      d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
    }),
    _.createElement("line", { x1: "18", y1: "9", x2: "12", y2: "15" }),
    _.createElement("line", { x1: "12", y1: "9", x2: "18", y2: "15" })
  );
});
pe.propTypes = { color: j.string, size: j.oneOfType([j.string, j.number]) };
pe.displayName = "Delete";
const it = pe;
function le() {
  return (
    (le =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var a in o)
            Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        }
        return e;
      }),
    le.apply(this, arguments)
  );
}
function lt(e, t) {
  if (e == null) return {};
  var o = ct(e, t),
    a,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (a = s[r]),
        !(t.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, a) &&
          (o[a] = e[a]);
  }
  return o;
}
function ct(e, t) {
  if (e == null) return {};
  var o = {},
    a = Object.keys(e),
    r,
    s;
  for (s = 0; s < a.length; s++)
    (r = a[s]), !(t.indexOf(r) >= 0) && (o[r] = e[r]);
  return o;
}
var ue = h.forwardRef(function (e, t) {
  var o = e.color,
    a = o === void 0 ? "currentColor" : o,
    r = e.size,
    s = r === void 0 ? 24 : r,
    c = lt(e, ["color", "size"]);
  return _.createElement(
    "svg",
    le(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      c
    ),
    _.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
    }),
    _.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    })
  );
});
ue.propTypes = { color: j.string, size: j.oneOfType([j.string, j.number]) };
ue.displayName = "Edit";
const dt = ue;
function pt(e) {
  return B("MuiListSubheader", e);
}
L("MuiListSubheader", [
  "root",
  "colorPrimary",
  "colorInherit",
  "gutters",
  "inset",
  "sticky",
]);
const ut = [
    "className",
    "color",
    "component",
    "disableGutters",
    "disableSticky",
    "inset",
  ],
  gt = (e) => {
    const {
        classes: t,
        color: o,
        disableGutters: a,
        inset: r,
        disableSticky: s,
      } = e,
      c = {
        root: [
          "root",
          o !== "default" && `color${S(o)}`,
          !a && "gutters",
          r && "inset",
          !s && "sticky",
        ],
      };
    return N(c, pt, t);
  },
  bt = y("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.color !== "default" && t[`color${S(o.color)}`],
        !o.disableGutters && t.gutters,
        o.inset && t.inset,
        !o.disableSticky && t.sticky,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    u(
      {
        boxSizing: "border-box",
        lineHeight: "48px",
        listStyle: "none",
        color: (e.vars || e).palette.text.secondary,
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(14),
      },
      t.color === "primary" && { color: (e.vars || e).palette.primary.main },
      t.color === "inherit" && { color: "inherit" },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.inset && { paddingLeft: 72 },
      !t.disableSticky && {
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: (e.vars || e).palette.background.paper,
      }
    )
  ),
  ht = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiListSubheader" }),
      {
        className: r,
        color: s = "default",
        component: c = "li",
        disableGutters: p = !1,
        disableSticky: d = !1,
        inset: l = !1,
      } = a,
      i = D(a, ut),
      v = u({}, a, {
        color: s,
        component: c,
        disableGutters: p,
        disableSticky: d,
        inset: l,
      }),
      b = gt(v);
    return n(
      bt,
      u({ as: c, className: $(b.root, r), ref: o, ownerState: v }, i)
    );
  }),
  ae = ht;
function ft(e) {
  return B("MuiDialog", e);
}
const mt = L("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  ne = mt,
  yt = h.createContext({}),
  Le = yt,
  vt = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  xt = y(Ue, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  Ct = (e) => {
    const {
        classes: t,
        scroll: o,
        maxWidth: a,
        fullWidth: r,
        fullScreen: s,
      } = e,
      c = {
        root: ["root"],
        container: ["container", `scroll${S(o)}`],
        paper: [
          "paper",
          `paperScroll${S(o)}`,
          `paperWidth${S(String(a))}`,
          r && "paperFullWidth",
          s && "paperFullScreen",
        ],
      };
    return N(c, ft, t);
  },
  Tt = y(Oe, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  kt = y("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.container, t[`scroll${S(o.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    u(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&:after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  Rt = y(de, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.paper,
        t[`scrollPaper${S(o.scroll)}`],
        t[`paperWidth${S(String(o.maxWidth))}`],
        o.fullWidth && t.paperFullWidth,
        o.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    u(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
        [`&.${ne.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${ne.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${ne.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  $t = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiDialog" }),
      r = Ie(),
      s = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": c,
        "aria-labelledby": p,
        BackdropComponent: d,
        BackdropProps: l,
        children: i,
        className: v,
        disableEscapeKeyDown: b = !1,
        fullScreen: C = !1,
        fullWidth: I = !1,
        maxWidth: H = "sm",
        onBackdropClick: x,
        onClose: T,
        open: k,
        PaperComponent: P = de,
        PaperProps: g = {},
        scroll: m = "paper",
        TransitionComponent: f = Ee,
        transitionDuration: w = s,
        TransitionProps: R,
      } = a,
      U = D(a, vt),
      M = u({}, a, {
        disableEscapeKeyDown: b,
        fullScreen: C,
        fullWidth: I,
        maxWidth: H,
        scroll: m,
      }),
      K = Ct(M),
      O = h.useRef(),
      te = (G) => {
        O.current = G.target === G.currentTarget;
      },
      z = (G) => {
        O.current &&
          ((O.current = null), x && x(G), T && T(G, "backdropClick"));
      },
      oe = re(p),
      je = h.useMemo(() => ({ titleId: oe }), [oe]);
    return n(
      Tt,
      u(
        {
          className: $(K.root, v),
          closeAfterTransition: !0,
          components: { Backdrop: xt },
          componentsProps: { backdrop: u({ transitionDuration: w, as: d }, l) },
          disableEscapeKeyDown: b,
          onClose: T,
          open: k,
          ref: o,
          onClick: z,
          ownerState: M,
        },
        U,
        {
          children: n(
            f,
            u({ appear: !0, in: k, timeout: w, role: "presentation" }, R, {
              children: n(kt, {
                className: $(K.container),
                onMouseDown: te,
                ownerState: M,
                children: n(
                  Rt,
                  u(
                    {
                      as: P,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": c,
                      "aria-labelledby": oe,
                    },
                    g,
                    {
                      className: $(K.paper, g.className),
                      ownerState: M,
                      children: n(Le.Provider, { value: je, children: i }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  We = $t;
function Pt(e) {
  return B("MuiDialogActions", e);
}
L("MuiDialogActions", ["root", "spacing"]);
const wt = ["className", "disableSpacing"],
  Mt = (e) => {
    const { classes: t, disableSpacing: o } = e;
    return N({ root: ["root", !o && "spacing"] }, Pt, t);
  },
  St = y("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, !o.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    u(
      {
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto",
      },
      !e.disableSpacing && { "& > :not(:first-of-type)": { marginLeft: 8 } }
    )
  ),
  Dt = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiDialogActions" }),
      { className: r, disableSpacing: s = !1 } = a,
      c = D(a, wt),
      p = u({}, a, { disableSpacing: s }),
      d = Mt(p);
    return n(St, u({ className: $(d.root, r), ownerState: p, ref: o }, c));
  }),
  Ne = Dt;
function It(e) {
  return B("MuiDialogContent", e);
}
L("MuiDialogContent", ["root", "dividers"]);
function Bt(e) {
  return B("MuiDialogTitle", e);
}
const Lt = L("MuiDialogTitle", ["root"]),
  Wt = Lt,
  Nt = ["className", "dividers"],
  At = (e) => {
    const { classes: t, dividers: o } = e;
    return N({ root: ["root", o && "dividers"] }, It, t);
  },
  zt = y("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, o.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    u(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${Wt.root} + &`]: { paddingTop: 0 } }
    )
  ),
  Ht = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiDialogContent" }),
      { className: r, dividers: s = !1 } = a,
      c = D(a, Nt),
      p = u({}, a, { dividers: s }),
      d = At(p);
    return n(zt, u({ className: $(d.root, r), ownerState: p, ref: o }, c));
  }),
  Ae = Ht;
function Ft(e) {
  return B("MuiDialogContentText", e);
}
L("MuiDialogContentText", ["root"]);
const _t = ["children", "className"],
  jt = (e) => {
    const { classes: t } = e,
      a = N({ root: ["root"] }, Ft, t);
    return u({}, t, a);
  },
  Ut = y(J, {
    shouldForwardProp: (e) => Ke(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Ot = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiDialogContentText" }),
      { className: r } = a,
      s = D(a, _t),
      c = jt(s);
    return n(
      Ut,
      u(
        {
          component: "p",
          variant: "body1",
          color: "text.secondary",
          ref: o,
          ownerState: s,
          className: $(c.root, r),
        },
        a,
        { classes: c }
      )
    );
  }),
  ze = Ot,
  Et = ["className", "id"],
  Kt = (e) => {
    const { classes: t } = e;
    return N({ root: ["root"] }, Bt, t);
  },
  Gt = y(J, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  Xt = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiDialogTitle" }),
      { className: r, id: s } = a,
      c = D(a, Et),
      p = a,
      d = Kt(p),
      { titleId: l = s } = h.useContext(Le);
    return n(
      Gt,
      u(
        {
          component: "h2",
          className: $(d.root, r),
          ownerState: p,
          ref: o,
          variant: "h6",
          id: l,
        },
        c
      )
    );
  }),
  He = Xt,
  ge = Z(
    n("path", {
      d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
    }),
    "FirstPage"
  ),
  be = Z(
    n("path", {
      d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
    }),
    "LastPage"
  ),
  Yt = h.createContext(),
  Fe = Yt;
function Jt(e) {
  return B("MuiTable", e);
}
L("MuiTable", ["root", "stickyHeader"]);
const Vt = ["className", "component", "padding", "size", "stickyHeader"],
  qt = (e) => {
    const { classes: t, stickyHeader: o } = e;
    return N({ root: ["root", o && "stickyHeader"] }, Jt, t);
  },
  Qt = y("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, o.stickyHeader && t.stickyHeader];
    },
  })(({ theme: e, ownerState: t }) =>
    u(
      {
        display: "table",
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        "& caption": u({}, e.typography.body2, {
          padding: e.spacing(2),
          color: (e.vars || e).palette.text.secondary,
          textAlign: "left",
          captionSide: "bottom",
        }),
      },
      t.stickyHeader && { borderCollapse: "separate" }
    )
  ),
  he = "table",
  Zt = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTable" }),
      {
        className: r,
        component: s = he,
        padding: c = "normal",
        size: p = "medium",
        stickyHeader: d = !1,
      } = a,
      l = D(a, Vt),
      i = u({}, a, { component: s, padding: c, size: p, stickyHeader: d }),
      v = qt(i),
      b = h.useMemo(
        () => ({ padding: c, size: p, stickyHeader: d }),
        [c, p, d]
      );
    return n(Fe.Provider, {
      value: b,
      children: n(
        Qt,
        u(
          {
            as: s,
            role: s === he ? null : "table",
            ref: o,
            className: $(v.root, r),
            ownerState: i,
          },
          l
        )
      ),
    });
  }),
  eo = Zt,
  to = h.createContext(),
  ee = to;
function oo(e) {
  return B("MuiTableBody", e);
}
L("MuiTableBody", ["root"]);
const ao = ["className", "component"],
  no = (e) => {
    const { classes: t } = e;
    return N({ root: ["root"] }, oo, t);
  },
  so = y("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-row-group" }),
  ro = { variant: "body" },
  fe = "tbody",
  io = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTableBody" }),
      { className: r, component: s = fe } = a,
      c = D(a, ao),
      p = u({}, a, { component: s }),
      d = no(p);
    return n(ee.Provider, {
      value: ro,
      children: n(
        so,
        u(
          {
            className: $(d.root, r),
            as: s,
            ref: o,
            role: s === fe ? null : "rowgroup",
            ownerState: p,
          },
          c
        )
      ),
    });
  }),
  lo = io;
function co(e) {
  return B("MuiTableCell", e);
}
const po = L("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader",
  ]),
  ce = po,
  uo = [
    "align",
    "className",
    "component",
    "padding",
    "scope",
    "size",
    "sortDirection",
    "variant",
  ],
  go = (e) => {
    const {
        classes: t,
        variant: o,
        align: a,
        padding: r,
        size: s,
        stickyHeader: c,
      } = e,
      p = {
        root: [
          "root",
          o,
          c && "stickyHeader",
          a !== "inherit" && `align${S(a)}`,
          r !== "normal" && `padding${S(r)}`,
          `size${S(s)}`,
        ],
      };
    return N(p, co, t);
  },
  bo = y("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.variant],
        t[`size${S(o.size)}`],
        o.padding !== "normal" && t[`padding${S(o.padding)}`],
        o.align !== "inherit" && t[`align${S(o.align)}`],
        o.stickyHeader && t.stickyHeader,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    u(
      {},
      e.typography.body2,
      {
        display: "table-cell",
        verticalAlign: "inherit",
        borderBottom: e.vars
          ? `1px solid ${e.vars.palette.TableCell.border}`
          : `1px solid
    ${
      e.palette.mode === "light"
        ? Ge(V(e.palette.divider, 1), 0.88)
        : Xe(V(e.palette.divider, 1), 0.68)
    }`,
        textAlign: "left",
        padding: 16,
      },
      t.variant === "head" && {
        color: (e.vars || e).palette.text.primary,
        lineHeight: e.typography.pxToRem(24),
        fontWeight: e.typography.fontWeightMedium,
      },
      t.variant === "body" && { color: (e.vars || e).palette.text.primary },
      t.variant === "footer" && {
        color: (e.vars || e).palette.text.secondary,
        lineHeight: e.typography.pxToRem(21),
        fontSize: e.typography.pxToRem(12),
      },
      t.size === "small" && {
        padding: "6px 16px",
        [`&.${ce.paddingCheckbox}`]: {
          width: 24,
          padding: "0 12px 0 16px",
          "& > *": { padding: 0 },
        },
      },
      t.padding === "checkbox" && { width: 48, padding: "0 0 0 4px" },
      t.padding === "none" && { padding: 0 },
      t.align === "left" && { textAlign: "left" },
      t.align === "center" && { textAlign: "center" },
      t.align === "right" && {
        textAlign: "right",
        flexDirection: "row-reverse",
      },
      t.align === "justify" && { textAlign: "justify" },
      t.stickyHeader && {
        position: "sticky",
        top: 0,
        zIndex: 2,
        backgroundColor: (e.vars || e).palette.background.default,
      }
    )
  ),
  ho = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTableCell" }),
      {
        align: r = "inherit",
        className: s,
        component: c,
        padding: p,
        scope: d,
        size: l,
        sortDirection: i,
        variant: v,
      } = a,
      b = D(a, uo),
      C = h.useContext(Fe),
      I = h.useContext(ee),
      H = I && I.variant === "head";
    let x;
    c ? (x = c) : (x = H ? "th" : "td");
    let T = d;
    x === "td" ? (T = void 0) : !T && H && (T = "col");
    const k = v || (I && I.variant),
      P = u({}, a, {
        align: r,
        component: x,
        padding: p || (C && C.padding ? C.padding : "normal"),
        size: l || (C && C.size ? C.size : "medium"),
        sortDirection: i,
        stickyHeader: k === "head" && C && C.stickyHeader,
        variant: k,
      }),
      g = go(P);
    let m = null;
    return (
      i && (m = i === "asc" ? "ascending" : "descending"),
      n(
        bo,
        u(
          {
            as: x,
            ref: o,
            className: $(g.root, s),
            "aria-sort": m,
            scope: T,
            ownerState: P,
          },
          b
        )
      )
    );
  }),
  Q = ho;
function fo(e) {
  return B("MuiTableContainer", e);
}
L("MuiTableContainer", ["root"]);
const mo = ["className", "component"],
  yo = (e) => {
    const { classes: t } = e;
    return N({ root: ["root"] }, fo, t);
  },
  vo = y("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ width: "100%", overflowX: "auto" }),
  xo = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTableContainer" }),
      { className: r, component: s = "div" } = a,
      c = D(a, mo),
      p = u({}, a, { component: s }),
      d = yo(p);
    return n(
      vo,
      u({ ref: o, as: s, className: $(d.root, r), ownerState: p }, c)
    );
  }),
  Co = xo;
function To(e) {
  return B("MuiTableHead", e);
}
L("MuiTableHead", ["root"]);
const ko = ["className", "component"],
  Ro = (e) => {
    const { classes: t } = e;
    return N({ root: ["root"] }, To, t);
  },
  $o = y("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-header-group" }),
  Po = { variant: "head" },
  me = "thead",
  wo = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTableHead" }),
      { className: r, component: s = me } = a,
      c = D(a, ko),
      p = u({}, a, { component: s }),
      d = Ro(p);
    return n(ee.Provider, {
      value: Po,
      children: n(
        $o,
        u(
          {
            as: s,
            className: $(d.root, r),
            ref: o,
            role: s === me ? null : "rowgroup",
            ownerState: p,
          },
          c
        )
      ),
    });
  }),
  Mo = wo,
  ye = Z(
    n("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }),
    "KeyboardArrowLeft"
  ),
  ve = Z(
    n("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }),
    "KeyboardArrowRight"
  );
var xe, Ce, Te, ke, Re, $e, Pe, we;
const So = [
    "backIconButtonProps",
    "count",
    "getItemAriaLabel",
    "nextIconButtonProps",
    "onPageChange",
    "page",
    "rowsPerPage",
    "showFirstButton",
    "showLastButton",
  ],
  Do = h.forwardRef(function (t, o) {
    const {
        backIconButtonProps: a,
        count: r,
        getItemAriaLabel: s,
        nextIconButtonProps: c,
        onPageChange: p,
        page: d,
        rowsPerPage: l,
        showFirstButton: i,
        showLastButton: v,
      } = t,
      b = D(t, So),
      C = Ie(),
      I = (k) => {
        p(k, 0);
      },
      H = (k) => {
        p(k, d - 1);
      },
      x = (k) => {
        p(k, d + 1);
      },
      T = (k) => {
        p(k, Math.max(0, Math.ceil(r / l) - 1));
      };
    return A(
      "div",
      u({ ref: o }, b, {
        children: [
          i &&
            n(X, {
              onClick: I,
              disabled: d === 0,
              "aria-label": s("first", d),
              title: s("first", d),
              children:
                C.direction === "rtl"
                  ? xe || (xe = n(be, {}))
                  : Ce || (Ce = n(ge, {})),
            }),
          n(
            X,
            u(
              {
                onClick: H,
                disabled: d === 0,
                color: "inherit",
                "aria-label": s("previous", d),
                title: s("previous", d),
              },
              a,
              {
                children:
                  C.direction === "rtl"
                    ? Te || (Te = n(ve, {}))
                    : ke || (ke = n(ye, {})),
              }
            )
          ),
          n(
            X,
            u(
              {
                onClick: x,
                disabled: r !== -1 ? d >= Math.ceil(r / l) - 1 : !1,
                color: "inherit",
                "aria-label": s("next", d),
                title: s("next", d),
              },
              c,
              {
                children:
                  C.direction === "rtl"
                    ? Re || (Re = n(ye, {}))
                    : $e || ($e = n(ve, {})),
              }
            )
          ),
          v &&
            n(X, {
              onClick: T,
              disabled: d >= Math.ceil(r / l) - 1,
              "aria-label": s("last", d),
              title: s("last", d),
              children:
                C.direction === "rtl"
                  ? Pe || (Pe = n(ge, {}))
                  : we || (we = n(be, {})),
            }),
        ],
      })
    );
  }),
  Io = Do;
function Bo(e) {
  return B("MuiTablePagination", e);
}
const Lo = L("MuiTablePagination", [
    "root",
    "toolbar",
    "spacer",
    "selectLabel",
    "selectRoot",
    "select",
    "selectIcon",
    "input",
    "menuItem",
    "displayedRows",
    "actions",
  ]),
  Y = Lo;
var Me;
const Wo = [
    "ActionsComponent",
    "backIconButtonProps",
    "className",
    "colSpan",
    "component",
    "count",
    "getItemAriaLabel",
    "labelDisplayedRows",
    "labelRowsPerPage",
    "nextIconButtonProps",
    "onPageChange",
    "onRowsPerPageChange",
    "page",
    "rowsPerPage",
    "rowsPerPageOptions",
    "SelectProps",
    "showFirstButton",
    "showLastButton",
  ],
  No = y(Q, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": { padding: 0 },
  })),
  Ao = y(nt, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) =>
      u({ [`& .${Y.actions}`]: t.actions }, t.toolbar),
  })(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52,
    },
    [e.breakpoints.up("sm")]: { minHeight: 52, paddingRight: 2 },
    [`& .${Y.actions}`]: { flexShrink: 0, marginLeft: 20 },
  })),
  zo = y("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer,
  })({ flex: "1 1 100%" }),
  Ho = y("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel,
  })(({ theme: e }) => u({}, e.typography.body2, { flexShrink: 0 })),
  Fo = y(Be, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) =>
      u(
        { [`& .${Y.selectIcon}`]: t.selectIcon, [`& .${Y.select}`]: t.select },
        t.input,
        t.selectRoot
      ),
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${Y.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right",
    },
  }),
  _o = y(E, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem,
  })({}),
  jo = y("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows,
  })(({ theme: e }) => u({}, e.typography.body2, { flexShrink: 0 }));
function Uo({ from: e, to: t, count: o }) {
  return `${e}–${t} of ${o !== -1 ? o : `more than ${t}`}`;
}
function Oo(e) {
  return `Go to ${e} page`;
}
const Eo = (e) => {
    const { classes: t } = e;
    return N(
      {
        root: ["root"],
        toolbar: ["toolbar"],
        spacer: ["spacer"],
        selectLabel: ["selectLabel"],
        select: ["select"],
        input: ["input"],
        selectIcon: ["selectIcon"],
        menuItem: ["menuItem"],
        displayedRows: ["displayedRows"],
        actions: ["actions"],
      },
      Bo,
      t
    );
  },
  Ko = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTablePagination" }),
      {
        ActionsComponent: r = Io,
        backIconButtonProps: s,
        className: c,
        colSpan: p,
        component: d = Q,
        count: l,
        getItemAriaLabel: i = Oo,
        labelDisplayedRows: v = Uo,
        labelRowsPerPage: b = "Rows per page:",
        nextIconButtonProps: C,
        onPageChange: I,
        onRowsPerPageChange: H,
        page: x,
        rowsPerPage: T,
        rowsPerPageOptions: k = [10, 25, 50, 100],
        SelectProps: P = {},
        showFirstButton: g = !1,
        showLastButton: m = !1,
      } = a,
      f = D(a, Wo),
      w = a,
      R = Eo(w),
      U = P.native ? "option" : _o;
    let M;
    (d === Q || d === "td") && (M = p || 1e3);
    const K = re(P.id),
      O = re(P.labelId),
      te = () =>
        l === -1 ? (x + 1) * T : T === -1 ? l : Math.min(l, (x + 1) * T);
    return n(
      No,
      u(
        { colSpan: M, ref: o, as: d, ownerState: w, className: $(R.root, c) },
        f,
        {
          children: A(Ao, {
            className: R.toolbar,
            children: [
              n(zo, { className: R.spacer }),
              k.length > 1 &&
                n(Ho, { className: R.selectLabel, id: O, children: b }),
              k.length > 1 &&
                n(
                  Fo,
                  u(
                    { variant: "standard" },
                    !P.variant && { input: Me || (Me = n(Ye, {})) },
                    { value: T, onChange: H, id: K, labelId: O },
                    P,
                    {
                      classes: u({}, P.classes, {
                        root: $(R.input, R.selectRoot, (P.classes || {}).root),
                        select: $(R.select, (P.classes || {}).select),
                        icon: $(R.selectIcon, (P.classes || {}).icon),
                      }),
                      children: k.map((z) =>
                        h.createElement(
                          U,
                          u({}, !Je(U) && { ownerState: w }, {
                            className: R.menuItem,
                            key: z.label ? z.label : z,
                            value: z.value ? z.value : z,
                          }),
                          z.label ? z.label : z
                        )
                      ),
                    }
                  )
                ),
              n(jo, {
                className: R.displayedRows,
                children: v({
                  from: l === 0 ? 0 : x * T + 1,
                  to: te(),
                  count: l === -1 ? -1 : l,
                  page: x,
                }),
              }),
              n(r, {
                className: R.actions,
                backIconButtonProps: s,
                count: l,
                nextIconButtonProps: C,
                onPageChange: I,
                page: x,
                rowsPerPage: T,
                showFirstButton: g,
                showLastButton: m,
                getItemAriaLabel: i,
              }),
            ],
          }),
        }
      )
    );
  }),
  Go = Ko;
function Xo(e) {
  return B("MuiTableRow", e);
}
const Yo = L("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  Se = Yo,
  Jo = ["className", "component", "hover", "selected"],
  Vo = (e) => {
    const { classes: t, selected: o, hover: a, head: r, footer: s } = e;
    return N(
      {
        root: [
          "root",
          o && "selected",
          a && "hover",
          r && "head",
          s && "footer",
        ],
      },
      Xo,
      t
    );
  },
  qo = y("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [t.root, o.head && t.head, o.footer && t.footer];
    },
  })(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${Se.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
    },
    [`&.${Se.selected}`]: {
      backgroundColor: e.vars
        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
        : V(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : V(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
      },
    },
  })),
  De = "tr",
  Qo = h.forwardRef(function (t, o) {
    const a = W({ props: t, name: "MuiTableRow" }),
      { className: r, component: s = De, hover: c = !1, selected: p = !1 } = a,
      d = D(a, Jo),
      l = h.useContext(ee),
      i = u({}, a, {
        component: s,
        hover: c,
        selected: p,
        head: l && l.variant === "head",
        footer: l && l.variant === "footer",
      }),
      v = Vo(i);
    return n(
      qo,
      u(
        {
          as: s,
          ref: o,
          className: $(v.root, r),
          role: s === De ? null : "row",
          ownerState: i,
        },
        d
      )
    );
  }),
  _e = Qo,
  Zo = ({
    openConfirm: e,
    setOpenConfirm: t,
    deletedLabel: o,
    dispatchers: a,
  }) => {
    const r = () => {
        a.delete(e.id), t({ id: null, status: !1 });
      },
      s = () => {
        t((c) => ({ id: null, status: !1 }));
      };
    return A(We, {
      open: e.status,
      onClose: () => t(() => ({ id: null, status: !1 })),
      "aria-labelledby": "confirmation-title",
      "aria-describedby": "confirmation-desc",
      children: [
        n(He, { id: "confirmation-title", children: "هل انت متاكد؟" }),
        n(Ae, {
          children: n(ze, {
            id: "confirmation-desc",
            children: `سيتم حذف ${o} من قاعدة البيانات للابد.`,
          }),
        }),
        A(Ne, {
          sx: { direction: "rtl", p: 4, pb: 2, pt: 1 },
          children: [
            n(q, {
              onClick: s,
              variant: "contained",
              color: "error",
              children: "الغاء",
            }),
            n(q, {
              onClick: r,
              autoFocus: !0,
              variant: "contained",
              color: "success",
              sx: { marginRight: "auto" },
              children: "تأكيد",
            }),
          ],
        }),
      ],
    });
  },
  se = y(Q)(({ theme: e }) => ({
    [`&.${ce.head}`]: {
      backgroundColor: e.palette.primary.dark,
      color: e.palette.common.white,
    },
    [`&.${ce.body}`]: { fontSize: 14 },
  })),
  ea = y(_e)(({ theme: e }) => ({
    "&:nth-of-type(odd)": { backgroundColor: e.palette.action.hover },
    transition: "background-color 0.3s ease",
    "&:last-child td, &:last-child th": { border: 0 },
    "&:hover": { backgroundColor: "#c7e0ff !important" },
  })),
  sa = ({
    COLUMNS: e,
    setDialog: t,
    deletedLabel: o,
    rows: a,
    dispatchers: r,
  }) => {
    Ve();
    const [s, c] = h.useState({ status: !1, id: null }),
      [p, d] = _.useState(5),
      [l, i] = _.useState(0),
      v = (g) => {
        t(() => ({ selectedRow: g, status: !0, editing: !0 }));
      },
      b = (g, m) => {
        i(m);
      },
      C = (g) => {
        d(+g.target.value), i(0);
      },
      I = l * p,
      H = I + p;
    let x = [];
    (a == null ? void 0 : a.length) > 0 && (x = a.slice(I, H));
    const T = [
        ...e,
        { id: "edit", label: "تعديل", align: "center", minWidth: "40px" },
        { id: "delete", label: "حذف", align: "center", minWidth: "40px" },
      ],
      k = [
        {
          label: "تعديل",
          id: "edit",
          icon: n(dt, {}),
          onClick: (g) => {
            v(g);
          },
        },
        {
          label: "حذف",
          id: "delete",
          icon: n(it, {}),
          onClick: (g) => {
            c({ status: !0, id: g.invoice ?? g.id });
          },
        },
      ],
      P = (g, m, f) => {
        const { accountId: w, accountType: R, billType: U, id: M } = f;
        switch ((console.log(M, f), !0)) {
          case g.isBill:
            return n(J, {
              sx: {
                color: f.billType === "ادخال" ? "green" : "tomato",
                fontWeight: "bold",
              },
              children: m,
            });
          case g.isMoney:
            return n(J, {
              sx: { color: m >= 0 ? "green" : "tomato", fontWeight: "bold" },
              children: m,
            });
          case g.isInvoice && R === "تاجر سوق":
            return n(F, {
              to: `/shops/${f.accountId}/invoices/${M}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case g.isInvoice && R === "زبون":
            return n(F, {
              to: `/customers/${f.accountId}/invoices/${M}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case f.accountType === "زبون" && g.isLink:
            return n(F, {
              to: `/customers/${w}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case f.accountType === "شريك" && g.isLink:
            return n(F, {
              to: `/shops/${w}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case R === "تاجر سوق" && g.isLink:
            return n(F, {
              to: `/shops/${w ?? M}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case R === "شريك" && g.isLink:
            return n(F, {
              to: `/withdrawals/${f.accountId}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case U === "سحوبات" && g.isLink:
            return n(F, {
              to: `/withdrawals/${f.userId}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case U === "مصروف" && g.isLink:
            return n(F, {
              to: `${f.accountId}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case g.isLink:
            return n(F, {
              to: `${w ?? M}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          case g.isInvoice:
            return n(F, {
              to: `invoices/${M}`,
              style: { fontWeight: "bold", color: "black" },
              children: m,
            });
          default:
            return m;
        }
      };
    return A(qe, {
      children: [
        A(Co, {
          component: de,
          children: [
            A(eo, {
              sx: { minWidth: 650 },
              "aria-label": "simple table",
              children: [
                n(Mo, {
                  children: n(_e, {
                    children: T.map((g) =>
                      n(
                        se,
                        {
                          align: g.align,
                          style: { minWidth: g.minWidth },
                          children: g.label,
                        },
                        g.id
                      )
                    ),
                  }),
                }),
                n(lo, {
                  children:
                    x == null
                      ? void 0
                      : x.map((g, m) =>
                          A(
                            ea,
                            {
                              hover: !0,
                              role: "checkbox",
                              tabIndex: -1,
                              children: [
                                e.map((f) => {
                                  const w = g[f.id];
                                  return n(
                                    se,
                                    { align: f.align, children: P(f, w, g) },
                                    f.id
                                  );
                                }),
                                k.map((f, w) =>
                                  n(
                                    se,
                                    {
                                      align: f.align,
                                      children: n(X, {
                                        "aria-label": f.id,
                                        color:
                                          f.id === "delete" ? "error" : "info",
                                        onClick: () => f.onClick(g),
                                        children: f.icon,
                                      }),
                                    },
                                    f.id
                                  )
                                ),
                              ],
                            },
                            g.id ?? g.UserId
                          )
                        ),
                }),
              ],
            }),
            n(Go, {
              rowsPerPageOptions: [5, 10, 25],
              component: "div",
              count: (a == null ? void 0 : a.length) || 0,
              rowsPerPage: p,
              page: l,
              onPageChange: b,
              onRowsPerPageChange: C,
              dir: "ltr",
              labelRowsPerPage: "",
            }),
          ],
        }),
        n(Zo, {
          deletedLabel: o,
          openConfirm: s,
          setOpenConfirm: c,
          dispatchers: r,
        }),
      ],
    });
  };
function ra({
  title: e,
  dialog: t,
  setDialog: o,
  ROW_INTIAL_VALUE: a,
  validationSchema: r,
  FIELDS: s,
  rows: c,
  dispatchers: p = { add: () => {}, edit: () => {}, delete: () => {} },
}) {
  const d = () => {
      o(() => ({ selectedRow: a, status: !1, editing: !1 }));
    },
    l = Qe({
      initialValues: a,
      validationSchema: r,
      onSubmit: (i) => {
        t.editing
          ? p.edit(i)
          : p.add({
              ...i,
              value: parseFloat(i.value),
              values: parseFloat(i.values),
            }),
          l.handleReset(),
          d();
      },
      onReset: (i) => {
        d();
      },
    });
  return (
    h.useEffect(() => {
      (c == null ? void 0 : c.length) > 0 &&
        Object.keys(c[0]).map((v) => {
          l.setFieldValue(v, t.selectedRow[v]);
        });
    }, [t.editing]),
    n("div", {
      style: { textAlign: "center" },
      children: n("form", {
        autoComplete: "off",
        children: A(We, {
          open: t.status,
          onClose: l.handleReset,
          children: [
            n(He, {
              textAlign: "center",
              sx: { fontweight: "bold" },
              children: e,
            }),
            n(Ae, {
              children: A(Ze, {
                children: [
                  n(ze, {
                    sx: { mb: 2 },
                    children:
                      "يرجى كتابة المعلومات الأساسية وترك الحقل فارغ في حال عدم الحاجة له",
                  }),
                  s.map((i, v) =>
                    i != null && i.options
                      ? A(
                          et,
                          {
                            fullWidth: !0,
                            sx: { mb: 3 },
                            error: l.touched[i.id] && Boolean(l.errors[i.id]),
                            children: [
                              n(tt, {
                                id: `${i.id}-label`,
                                error:
                                  l.touched[i.id] && Boolean(l.errors[i.id]),
                                children: i.label,
                              }),
                              n(Be, {
                                labelId: `${i.id}-label`,
                                id: `${i.id}`,
                                name: i.id,
                                value: l.values[i.id],
                                onChange: l.handleChange,
                                onBlur: l.handleBlur,
                                label: i.label,
                                error:
                                  l.touched[i.accountId] &&
                                  Boolean(l.errors[i.id]),
                                children: ta(i.options)
                                  ? [
                                      i.options.map((b) => {
                                        if (b.type === "مصروف")
                                          return n(
                                            E,
                                            { value: b.id, children: b.value },
                                            b.id
                                          );
                                      }),
                                      n(
                                        ae,
                                        {
                                          sx: {
                                            borderTop: "2px solid black",
                                            color: "GrayText",
                                          },
                                          children: "- الزبائن",
                                        },
                                        "customers-select"
                                      ),
                                      i.options.map((b) => {
                                        if (b.type === "زبون")
                                          return n(
                                            E,
                                            { value: b.id, children: b.value },
                                            b.id
                                          );
                                      }),
                                      n(
                                        ae,
                                        {
                                          sx: {
                                            borderTop: "2px solid black",
                                            color: "GrayText",
                                          },
                                          children: "- تجار السوق",
                                        },
                                        "shops-select"
                                      ),
                                      i.options.map((b) => {
                                        if (b.type === "تاجر سوق")
                                          return n(
                                            E,
                                            { value: b.id, children: b.value },
                                            b.id
                                          );
                                      }),
                                      n(
                                        ae,
                                        {
                                          sx: {
                                            borderTop: "2px solid black",
                                            color: "GrayText",
                                          },
                                          children: "- الشركاء",
                                        },
                                        "partner-select"
                                      ),
                                      i.options.map((b) => {
                                        if (b.type === "شريك")
                                          return n(
                                            E,
                                            { value: b.id, children: b.value },
                                            b.id
                                          );
                                      }),
                                    ]
                                  : i.options.map((b) =>
                                      n(
                                        E,
                                        { value: b.id, children: b.value },
                                        b.id
                                      )
                                    ),
                              }),
                              l.touched[i.id] &&
                                l.errors[i.id] &&
                                n(ot, { children: l.errors[i.id] }),
                            ],
                          },
                          v
                        )
                      : n(
                          at,
                          {
                            name: i.id,
                            margin: "dense",
                            onBlur: l.handleBlur,
                            fullWidth: !0,
                            variant: "standard",
                            label: i.label,
                            type: i.type,
                            onChange: l.handleChange,
                            value: l.values[i.id],
                            error: l.touched[i.id] && Boolean(l.errors[i.id]),
                            helperText: l.touched[i.id] && l.errors[i.id],
                            sx: { mb: 3 },
                          },
                          v
                        )
                  ),
                ],
              }),
            }),
            A(Ne, {
              dir: "ltr",
              sx: { p: 2 },
              children: [
                n(q, {
                  onClick: l.handleReset,
                  color: "error",
                  variant: "outlined",
                  sx: { ml: 3 },
                  children: "الغاء",
                }),
                n(q, {
                  onClick: l.handleSubmit,
                  color: "success",
                  variant: "outlined",
                  children: t.editing ? "تعديل" : "انشاء",
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
function ta(e) {
  return e.some((t) => t.type);
}
const ia = (e) => {
  const [t, o] = h.useState({ status: !1, selectedRow: e, editing: !1 });
  return {
    dialog: t,
    setDialog: o,
    handleOpenAddDialog: () => {
      o(() => ({ editing: !1, selectedRow: e, status: !0 }));
    },
  };
};
export {
  dt as A,
  Zo as C,
  sa as M,
  eo as T,
  ra as a,
  lo as b,
  _e as c,
  Q as d,
  Co as e,
  Mo as f,
  Go as g,
  it as h,
  ce as t,
  ia as u,
};
