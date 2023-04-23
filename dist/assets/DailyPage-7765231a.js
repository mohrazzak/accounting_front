import {
  A as y,
  N,
  r as _,
  Q as r,
  S as $,
  U as B,
  V as o,
  W as g,
  a as t,
  F as P,
  j as v,
  J as k,
  X as C,
  H as M,
  Y as O,
  Z as j,
  $ as H,
} from "./index-8aa1702d.js";
import { u as V, M as Y, a as G } from "./useTable-897d4893.js";
import { C as I } from "./CustomTableHeading-05fe7feb.js";
import { P as J } from "./PageHeading-27a2275d.js";
import "./IconButton-2bd4868e.js";
import "./Toolbar-2f8e7a3d.js";
const f = "اليومية",
  h = {
    accountId: "",
    id: "",
    accountName: "",
    value: "",
    values: "",
    billType: "",
    note: "",
  },
  ee = () => {
    var p;
    const {
        data: s,
        yesterday: b,
        today: T,
        isLoading: Q,
        isSuccess: X,
      } = y((e) => e.dailyRows),
      n = y((e) => e.users),
      u =
        s == null
          ? void 0
          : s
              .map(
                ({
                  id: e,
                  values: l,
                  value: W,
                  billType: A,
                  note: q,
                  UserId: x,
                  isDaily: E,
                  User: i,
                }) =>
                  E
                    ? {
                        id: e,
                        values: l,
                        value: W,
                        billType: A,
                        note: q,
                        accountId: x,
                        accountName: i == null ? void 0 : i.name,
                        accountType: i == null ? void 0 : i.userType,
                      }
                    : null
              )
              .filter((e) => e !== null),
      a = N();
    _.useEffect(() => {
      a(r({ isDaily: !0 })), a($());
    }, []);
    const { dialog: D, setDialog: d, handleOpenAddDialog: L } = V(h),
      c = {
        add: (e) => {
          const l = {
            isDaily: !0,
            userId: e.accountId,
            value: parseFloat(e.value, 10),
            values: parseFloat(e.values, 10),
            billType: e.billType,
            note: e.note,
          };
          a(O(l)).then(() => {
            a(r({ isDaily: !0 }));
          });
        },
        edit: (e) => {
          const l = {
            isDaily: !0,
            userId: e.accountId,
            value: parseFloat(e.value, 10),
            values: parseFloat(e.values, 10),
            billType: e.billType,
            note: e.note,
            id: e.id,
          };
          a(j(l)).then(() => {
            a(r({ all: !1, userId: null, isDaily: !0 }));
          });
        },
        delete: (e) => {
          a(H(e));
        },
      },
      F = B({
        accountId: o().required("يرجى إدخال اسم الحساب"),
        value: g().required("يرجى إدخال المبلغ"),
        values: g().required("يرجى إدخال القيمة"),
        note: o(),
        billType: o().required("يرجى اختيار نوع الفاتورة"),
      }),
      S =
        (p = n == null ? void 0 : n.data) == null
          ? void 0
          : p.map((e) => ({ value: e.name, id: e.id, type: e.userType })),
      m = [
        {
          id: "id",
          label: "رقم الفاتورة",
          minWidth: 70,
          align: "center",
          isField: !1,
          isLink: !0,
          isInvoice: !0,
        },
        {
          id: "accountId",
          label: "ايدي الحساب",
          minWidth: 80,
          align: "center",
          isField: !0,
          isLink: !0,
          options: S,
          required: !0,
        },
        {
          id: "accountName",
          label: "اسم الحساب",
          minWidth: 150,
          align: "left",
        },
        {
          id: "value",
          label: "المبلغ",
          minWidth: 100,
          align: "center",
          format: (e) => e.toLocaleString("en-US"),
          isField: !0,
          required: !0,
          isBill: !0,
        },
        {
          id: "values",
          label: "القيمة",
          minWidth: 50,
          align: "center",
          format: (e) => e.toLocaleString("en-US"),
          isField: !0,
          isBill: !0,
        },
        {
          id: "billType",
          label: "نوع الفاتورة",
          type: "select",
          options: [
            { value: "ادخال", id: "ادخال" },
            { value: "صادر", id: "صادر" },
            { value: "مصروف", id: "مصروف" },
            { value: "سحوبات", id: "سحوبات" },
          ],
          required: !0,
          isField: !0,
        },
        {
          id: "note",
          label: "ملاحظة",
          minWidth: 170,
          align: "left",
          isField: !0,
        },
      ];
    return t(P, {
      children: v(k, {
        children: [
          t(J, { title: "صفحة اليومية" }),
          v(C, {
            children: [
              t(I, { rows: { ...b, title: "الاساس" } }),
              t(Y, {
                COLUMNS: m,
                deletedLabel: `فاتورة ${f}`,
                setDialog: d,
                rows: u,
                dispatchers: c,
              }),
              t(I, { rows: { ...T, title: "المدور" } }),
              t(M, {
                variant: "contained",
                sx: {
                  height: "60px",
                  margin: "2rem auto",
                  display: "block",
                  width: "50%",
                },
                color: "error",
                onClick: L,
                children: "اضافة فاتورة جديدة",
              }),
            ],
          }),
          t(G, {
            title: `فاتورة ${f}`,
            dialog: D,
            setDialog: d,
            ROW_INTIAL_VALUE: h,
            validationSchema: F,
            FIELDS: m.filter((e) => e.isField),
            rows: u,
            dispatchers: c,
          }),
        ],
      }),
    });
  };
export { ee as default };
