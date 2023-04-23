import {
  U as x,
  V as n,
  a9 as I,
  aa as N,
  A as v,
  N as W,
  r as A,
  Q as T,
  ab as d,
  a as i,
  J as L,
  j as r,
  X as s,
  E as o,
  H as M,
  Z as F,
  $ as E,
} from "./index-8aa1702d.js";
import { u as D, M as S, a as U } from "./useTable-897d4893.js";
import { u as q } from "./userImage-27756418.js";
import "./IconButton-2bd4868e.js";
import "./Toolbar-2f8e7a3d.js";
const w = "الزبائن",
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
  b = x().shape({
    value: n().required("المبلغ مطلوب"),
    values: n().required("القيمة مطلوبة"),
    billType: n().required("نوع الفاتورة مطلوب"),
    note: n(),
  }),
  P = () => {
    const t = I(),
      p = N(),
      a = v((e) => e.users.user),
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
      c = { value: 0, values: 0, billType: "ادخال", note: "" },
      { dialog: f, setDialog: m, handleOpenAddDialog: _ } = D(c),
      l = W(),
      h = v((e) => e.dailyRows).data.filter((e) => e.UserId == t.id),
      g = {
        edit: (e) => {
          l(
            F({
              ...e,
              value: parseFloat(e.value),
              values: parseFloat(e.values),
              userId: e.UserId,
            })
          ).then(() => l(d(t.id)));
        },
        delete: (e) => l(E(e)).then(() => l(d(t.id))),
      };
    return (
      A.useEffect(() => {
        l(T({ userId: t.id, all: !0, isDaily: !1 })), l(d(t.id));
      }, []),
      i(L, {
        title: "صفحة زبون",
        children: r(s, {
          children: [
            i(s, {
              sx: { width: "100px", overflow: "hidden", margin: "auto", mb: 3 },
              children: i("img", {
                loading: "lazy",
                src: q,
                alt: "user image",
                width: "100%",
                style: { objectFit: "contain" },
              }),
            }),
            r(s, {
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
                  r(
                    s,
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
            r(s, {
              children: [
                i(S, {
                  columns: u,
                  deletedLabel: `فاتورة ${w}`,
                  setDialog: m,
                  rows: h,
                  COLUMNS: u,
                  validationSchema: b,
                  dispatchers: g,
                }),
                i(M, {
                  variant: "contained",
                  sx: {
                    height: "60px",
                    margin: "2rem auto",
                    display: "block",
                    width: "50%",
                  },
                  color: "error",
                  onClick: () => p("invoices/add"),
                  children: "انشاء فاتورة",
                }),
              ],
            }),
            i(U, {
              title: "فاتورة زبون",
              dialog: f,
              setDialog: m,
              ROW_INTIAL_VALUE: c,
              FIELDS: u.filter((e) => e.isField),
              rows: h,
              validationSchema: b,
              dispatchers: g,
            }),
          ],
        }),
      })
    );
  };
export { P as default };
