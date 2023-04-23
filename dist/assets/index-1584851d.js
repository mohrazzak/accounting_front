import {
  U as v,
  W as o,
  V as g,
  N as b,
  A as f,
  r as T,
  Q as u,
  j as d,
  J as h,
  a as s,
  X as I,
  Z as L,
  $ as D,
} from "./index-8aa1702d.js";
import { u as S, M as U, a as A } from "./useTable-897d4893.js";
import { P as E } from "./PageHeading-27a2275d.js";
import { C as M } from "./CustomTableHeading-05fe7feb.js";
import "./IconButton-2bd4868e.js";
import "./Toolbar-2f8e7a3d.js";
const c = "سحب",
  m = {
    userId: "",
    billType: "",
    id: "",
    name: "",
    value: 0,
    values: 0,
    note: "",
  },
  W = v({
    value: o().required("يرجى كتابة المبلغ"),
    values: o().required("يرجى كتابة قيمة المبلغ"),
    note: g(),
  }),
  V = () => {
    const { dialog: p, setDialog: n, handleOpenAddDialog: F } = S(m),
      l = b();
    let a = f((e) => e.dailyRows.data).filter((e) => e.billType === "مصروف");
    a = a.map((e) => ({
      name: e.User.name,
      billType: e.billType,
      userId: e.User.id,
      id: e.id,
      value: e.value,
      values: e.values,
      note: e.note,
      userType: e.User.userType,
    }));
    const y = {
        title: "الاجمالي",
        ...a.reduce(
          (e, t) => ((e.value += t.value), (e.values += t.values), e),
          { value: 0, values: 0 }
        ),
      },
      i = [
        {
          id: "id",
          label: "رقم الفاتورة",
          minWidth: 80,
          align: "center",
          isField: !1,
        },
        {
          id: "name",
          label: "اسم الحساب",
          minWidth: 80,
          align: "center",
          isField: !1,
          isLink: !0,
        },
        {
          id: "value",
          label: "المبلغ",
          minWidth: 50,
          align: "center",
          isField: !0,
          format: (e) => e.toLocaleString("en-US"),
          isMoney: !0,
        },
        {
          id: "values",
          label: "القيمة",
          minWidth: 50,
          align: "center",
          isField: !0,
          format: (e) => e.toLocaleString("en-US"),
          isMoney: !0,
        },
        {
          id: "note",
          label: "ملاحظة",
          minWidth: 120,
          align: "left",
          isField: !0,
        },
      ],
      r = {
        edit: (e) => {
          const t = {
            userId: e.userId,
            value: parseFloat(e.value, 10),
            values: parseFloat(e.values, 10),
            billType: e.billType,
            note: e.note,
            id: e.id,
          };
          l(L(t)).then(() => {
            l(u());
          });
        },
        delete: (e) => l(D(e)),
      };
    return (
      T.useEffect(() => {
        l(u());
      }, []),
      d(h, {
        children: [
          s(E, { title: "صفحة المصروف" }),
          d(I, {
            children: [
              s(U, {
                columns: i,
                deletedLabel: `فاتورة ${c}`,
                setDialog: n,
                rows: a,
                COLUMNS: i,
                validationSchema: !0,
                dispatchers: r,
              }),
              s(M, { rows: y }),
            ],
          }),
          s(A, {
            title: `فاتورة ${c}`,
            dialog: p,
            setDialog: n,
            ROW_INTIAL_VALUE: m,
            FIELDS: i.filter((e) => e.isField),
            rows: a,
            validationSchema: W,
            dispatchers: r,
          }),
        ],
      })
    );
  };
export { V as default };
