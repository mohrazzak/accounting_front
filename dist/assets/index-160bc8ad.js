import {
  U as I,
  V as n,
  a9 as W,
  aa as T,
  A as v,
  N as A,
  r as g,
  ab as d,
  Q as L,
  a as i,
  J as M,
  j as r,
  X as l,
  E as o,
  H as E,
  Z as F,
  $ as S,
} from "./index-8aa1702d.js";
import { u as $, M as q, a as w } from "./useTable-897d4893.js";
import { u as D } from "./userImage-27756418.js";
import "./IconButton-2bd4868e.js";
import "./Toolbar-2f8e7a3d.js";
const b = "الزبائن",
  u = [
    {
      id: "id",
      label: "رقم الفاتورة",
      minWidth: 80,
      align: "center",
      isField: !1,
      isInvoice: !0,
      urlPath: "invoices",
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
  p = { value: 0, values: 0, billType: "ادخال", note: "" },
  f = I().shape({
    value: n().required("المبلغ مطلوب"),
    values: n().required("القيمة مطلوبة"),
    billType: n().required("نوع الفاتورة مطلوب"),
    note: n(),
  }),
  P = () => {
    const s = W(),
      y = T(),
      a = v((e) => e.users.user),
      x = [
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
      { dialog: N, setDialog: c } = $(p),
      t = A(),
      m = v((e) => e.dailyRows.data),
      h = {
        edit: (e) => {
          t(
            F({
              ...e,
              value: parseFloat(e.value),
              values: parseFloat(e.values),
              userId: e.UserId,
            })
          ).then(() => t(d(s.id)));
        },
        delete: (e) => t(S(e)).then(() => t(d(s.id))),
      };
    return (
      g.useEffect(() => {
        t(d(s.id));
      }, []),
      g.useEffect(() => {
        t(L({ all: !0, userId: s.id, isDaily: !1 }));
      }, []),
      i(M, {
        title: "صفحة زبون",
        children: r(l, {
          children: [
            i(l, {
              sx: { width: "100px", overflow: "hidden", margin: "auto", mb: 3 },
              children: i("img", {
                src: D,
                alt: "user image",
                width: "100%",
                style: { objectFit: "contain" },
              }),
            }),
            r(l, {
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
                x.map((e) =>
                  r(
                    l,
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
            r(l, {
              children: [
                i(q, {
                  columns: u,
                  deletedLabel: `فاتورة ${b}`,
                  setDialog: c,
                  rows: m,
                  COLUMNS: u,
                  validationSchema: f,
                  dispatchers: h,
                }),
                i(E, {
                  variant: "contained",
                  sx: {
                    height: "60px",
                    margin: "2rem auto",
                    display: "block",
                    width: "50%",
                  },
                  color: "error",
                  onClick: () => y("invoices/add", { state: { t: "t" } }),
                  children: "انشاء فاتورة",
                }),
              ],
            }),
            i(w, {
              title: `فاتورة ${b}`,
              dialog: N,
              setDialog: c,
              ROW_INTIAL_VALUE: p,
              FIELDS: u.filter((e) => e.isField),
              rows: m,
              validationSchema: f,
              dispatchers: h,
            }),
          ],
        }),
      })
    );
  };
export { P as default };
