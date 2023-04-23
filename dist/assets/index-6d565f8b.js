import {
  U as N,
  V as r,
  a9 as I,
  aa as W,
  A as b,
  N as T,
  r as g,
  ab as n,
  Q as A,
  a as i,
  J as L,
  j as d,
  X as t,
  E as o,
  Z as M,
  $ as E,
} from "./index-8aa1702d.js";
import { u as F, M as S, a as $ } from "./useTable-897d4893.js";
import { u as q } from "./userImage-27756418.js";
import "./IconButton-2bd4868e.js";
import "./Toolbar-2f8e7a3d.js";
const v = "الزبائن",
  u = [
    {
      id: "id",
      label: "رقم الفاتورة",
      minWidth: 80,
      align: "center",
      isField: !1,
    },
    {
      id: "value",
      label: "المبلغ",
      minWidth: 100,
      align: "center",
      isField: !0,
      required: !0,
    },
    {
      id: "values",
      label: "القيمة",
      minWidth: 80,
      align: "center",
      isField: !0,
      required: !0,
    },
    {
      id: "billType",
      label: "النوع",
      minWidth: 150,
      align: "center",
      isField: !1,
      required: !0,
      options: [
        { value: "ادخال", id: "1" },
        { value: "صادر", id: "2" },
      ],
    },
    { id: "note", label: "ملاحظة", minWidth: 170, align: "left", isField: !0 },
    { id: "createdAt", label: "التاريخ", minWidth: 200, align: "center" },
  ],
  f = { value: 0, values: 0, billType: "ادخال", note: "" },
  p = N().shape({
    value: r().required("المبلغ مطلوب"),
    values: r().required("القيمة مطلوبة"),
    billType: r().required("نوع الفاتورة مطلوب"),
    note: r(),
  }),
  V = () => {
    const s = I();
    W();
    const a = b((e) => e.users.user),
      y = [
        { fieldName: "رقم الحساب", value: a.id || "لايوجد" },
        { fieldName: "النوع", value: a.userType || "لايوجد" },
        { fieldName: "رقم الهاتف", value: a.mobileNumber || "لايوجد" },
        { fieldName: "العنوان", value: a.address || "لايوجد" },
        { fieldName: "ملاحظة", value: a.note || "لايوجد" },
        {
          fieldName: "صافي الحساب",
          value: a.accountBalance || "لايوجد",
          isMoney: !0,
        },
        {
          fieldName: "قيمة صافي الحساب",
          value: a.accountBalanceValues || "لايوجد",
          isMoney: !0,
        },
      ],
      { dialog: x, setDialog: c } = F(f),
      l = T(),
      m = b((e) => e.dailyRows.data),
      h = {
        edit: (e) => {
          l(
            M({
              ...e,
              value: parseFloat(e.value),
              values: parseFloat(e.values),
              userId: e.UserId,
            })
          ).then(() => l(n(s.id)));
        },
        delete: (e) => l(E(e)).then(() => l(n(s.id))),
      };
    return (
      g.useEffect(() => {
        l(n(s.id));
      }, []),
      g.useEffect(() => {
        l(A({ all: !0, userId: s.id, isDaily: !1 }));
      }, []),
      i(L, {
        title: "صفحة زبون",
        children: d(t, {
          children: [
            i(t, {
              sx: { width: "100px", overflow: "hidden", margin: "auto", mb: 3 },
              children: i("img", {
                src: q,
                alt: "user image",
                width: "100%",
                style: { objectFit: "contain" },
              }),
            }),
            d(t, {
              sx: { mb: 6 },
              children: [
                i(o, {
                  sx: {
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    mb: 4,
                  },
                  children: a.name,
                }),
                y.map((e) =>
                  d(
                    t,
                    {
                      sx: { mb: 3 },
                      children: [
                        i(o, {
                          sx: {
                            display: "inline-block",
                            mr: 4,
                            fontWeight: "bold",
                            fontSize: "1.3rem",
                            minWidth: "120px",
                          },
                          children: `${e.fieldName}:`,
                        }),
                        i(o, {
                          sx: {
                            display: "inline-block",
                            direction: e.isMoney && "rtl",
                            textAlign: e.isMoney && "center",
                            color: e.isMoney
                              ? e.value >= 0
                                ? "green"
                                : "tomato"
                              : "inherit",
                            fontSize: "1.3rem",
                            fontWeight: e.isMoney && "bold",
                            minWidth: "120px",
                          },
                          children: `${e.value}`,
                        }),
                      ],
                    },
                    e.fieldName
                  )
                ),
              ],
            }),
            i(t, {
              children: i(S, {
                columns: u,
                deletedLabel: `فاتورة ${v}`,
                setDialog: c,
                rows: m,
                COLUMNS: u,
                validationSchema: p,
                dispatchers: h,
              }),
            }),
            i($, {
              title: `فاتورة ${v}`,
              dialog: x,
              setDialog: c,
              ROW_INTIAL_VALUE: f,
              FIELDS: u.filter((e) => e.isField),
              rows: m,
              validationSchema: p,
              dispatchers: h,
            }),
          ],
        }),
      })
    );
  };
export { V as default };
