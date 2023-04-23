import {
  U as I,
  W as d,
  V as j,
  a9 as C,
  N as W,
  A as y,
  r as w,
  ae as c,
  a1 as F,
  j as l,
  J as L,
  K as i,
  a as t,
  E as a,
  X as P,
  H as A,
  af as T,
  ag as E,
  ah as B,
} from "./index-8aa1702d.js";
import { u as V, M as q, a as D } from "./useTable-897d4893.js";
import "./LogsTable-19b2b46c.js";
import "./IconButton-2bd4868e.js";
import "./Toolbar-2f8e7a3d.js";
const x = "فاتورة رقم",
  b = { id: "", ProductId: "", count: 0, value: 0, values: 0, note: "" },
  f = I({
    ProductId: d().required("يرجى إدخال اسم المنتج"),
    count: d().required("يرجى إدخال الكمية المتاحة"),
    value: d().required("يرجى إدخال مبلغ القطعة الواحدة"),
    values: d().required("يرجى إدخال قيمة القطعة الواحدة"),
    note: j(),
  }),
  U = () => {
    var m;
    const { invoiceId: r } = C(),
      { dialog: v, setDialog: u, handleOpenAddDialog: g } = V(b),
      s = W(),
      n = y((e) => e.bills.data),
      h =
        (m = n == null ? void 0 : n.BillItems) == null
          ? void 0
          : m.map((e) => ({
              ...e,
              ProductId: e.ProductId,
              name: e.Product.name,
              totalValue: parseFloat(e.value, 10) * parseFloat(e.count, 10),
              totalValues: parseFloat(e.values, 10) * parseFloat(e.count, 10),
            })),
      o = [
        {
          id: "ProductId",
          label: "رقم المنتج",
          minWidth: 80,
          align: "center",
          options: y((e) => e.products.data).map((e) => ({
            value: e.name,
            id: e.id,
          })),
          isField: !0,
        },
        {
          id: "id",
          label: "رقم سطر الفاتورة",
          minWidth: 80,
          align: "center",
          isField: !1,
        },
        {
          id: "name",
          label: "اسم المنتج",
          minWidth: 150,
          align: "left",
          required: !0,
        },
        {
          id: "count",
          label: "العدد",
          minWidth: 100,
          align: "center",
          isField: !0,
          required: !0,
        },
        {
          id: "value",
          label: "المبلغ للواحدة",
          minWidth: 100,
          align: "center",
          isField: !0,
        },
        {
          id: "values",
          label: "القيمة للواحدة",
          minWidth: 100,
          align: "center",
          isField: !0,
        },
        {
          id: "totalValue",
          label: "المبلغ الاجمالي",
          minWidth: 100,
          align: "center",
          isField: !1,
        },
        {
          id: "totalValues",
          label: "القيمة الاجمالية",
          minWidth: 100,
          align: "center",
          isField: !1,
        },
        {
          id: "note",
          label: "ملاحظة",
          minWidth: 100,
          align: "center",
          isField: !0,
        },
      ],
      p = {
        add: (e) => {
          console.log(e, "test"),
            s(T({ billId: r, row: e, shop: !0 })).then(() => s(c(r)));
        },
        edit: (e) => {
          s(E({ billId: r, row: e, shop: !0, billItem: e.id })).then(() =>
            s(c(r))
          );
        },
        delete: (e) => {
          s(B({ billId: r, billItemId: e })).then(() => s(c(r)));
        },
      };
    return (
      w.useEffect(() => {
        s(c(r)), s(F());
      }, []),
      l(L, {
        title: `صفحة ${x}`,
        children: [
          l(i, {
            container: !0,
            spacing: 2,
            mb: 2,
            children: [
              t(i, {
                item: !0,
                xs: 12,
                sx: { display: "flex", justifyContent: "space-between" },
                children: t(i, {
                  container: !0,
                  children: l(i, {
                    item: !0,
                    xs: 6,
                    sx: { display: "flex", justifyContent: "space-between" },
                    children: [
                      t(a, { variant: "body1", children: "ملاحظة الفاتورة" }),
                      t(a, { variant: "body1", children: n.note || "لايوجد" }),
                    ],
                  }),
                }),
              }),
              t(i, {
                item: !0,
                xs: 12,
                sx: { display: "flex", justifyContent: "space-between" },
                children: t(i, {
                  container: !0,
                  children: l(i, {
                    item: !0,
                    xs: 6,
                    sx: { display: "flex", justifyContent: "space-between" },
                    children: [
                      t(a, { variant: "body1", children: "اجمالي المبلغ" }),
                      t(a, { variant: "body1", children: n.value || "لايوجد" }),
                    ],
                  }),
                }),
              }),
              t(i, {
                item: !0,
                xs: 12,
                sx: { display: "flex", justifyContent: "space-between" },
                children: t(i, {
                  container: !0,
                  children: l(i, {
                    item: !0,
                    xs: 6,
                    sx: { display: "flex", justifyContent: "space-between" },
                    children: [
                      t(a, { variant: "body1", children: "اجمالي القيمة" }),
                      t(a, {
                        variant: "body1",
                        children: n.values || "لايوجد",
                      }),
                    ],
                  }),
                }),
              }),
              t(i, {
                item: !0,
                xs: 12,
                sx: { display: "flex", justifyContent: "space-between" },
                children: t(i, {
                  container: !0,
                  children: l(i, {
                    item: !0,
                    xs: 6,
                    sx: { display: "flex", justifyContent: "space-between" },
                    children: [
                      t(a, { variant: "body1", children: "نوع الفاتورة" }),
                      t(a, {
                        variant: "body1",
                        children: n.billType || "لايوجد",
                      }),
                    ],
                  }),
                }),
              }),
              t(i, {
                item: !0,
                xs: 12,
                sx: { display: "flex", justifyContent: "space-between" },
                children: t(i, {
                  container: !0,
                  children: l(i, {
                    item: !0,
                    xs: 6,
                    sx: { display: "flex", justifyContent: "space-between" },
                    children: [
                      t(a, { variant: "body1", children: "تاريخ الاصدار" }),
                      t(a, {
                        variant: "body1",
                        children: n.createdAt || "لايوجد",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          l(P, {
            children: [
              t(q, {
                columns: o,
                deletedLabel: `فاتورة ${x}`,
                setDialog: u,
                rows: h,
                COLUMNS: o,
                validationSchema: f,
                dispatchers: p,
              }),
              n.billType === "ادخال" &&
                t(A, {
                  variant: "contained",
                  sx: {
                    height: "60px",
                    margin: "2rem auto",
                    display: "block",
                    width: "50%",
                  },
                  color: "error",
                  onClick: g,
                  children: "إضافة منتج للفاتورة",
                }),
            ],
          }),
          t(D, {
            title: "منتج جديد للفاتورة",
            dialog: v,
            setDialog: u,
            ROW_INTIAL_VALUE: b,
            FIELDS: o.filter((e) => e.isField),
            rows: h,
            validationSchema: f,
            dispatchers: p,
          }),
        ],
      })
    );
  };
export { U as default };
