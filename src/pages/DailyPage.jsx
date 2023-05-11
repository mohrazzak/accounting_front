import React, { useEffect, useState } from 'react';
import MyTable from '../components/MyTable';
import PageLayout from '../components/PageLayout';
import MyDialog from '../components/MyDialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomTableHeading from '../components/CustomTableHeading';
import useTable from '../hooks/useTable';
import * as Yup from 'yup';
import {
  addDaily,
  addDailyRow,
  deleteDaily,
  deleteDailyRow,
  editDaily,
  editDailyRow,
} from '../store/dailyRows';
import PageHeading from '../components/PageHeading';
import axios from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { getDaily } from '../store/dailyRows';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { getUsers } from '../store/users';
import dayjs from 'dayjs';
import 'dayjs/locale/ar-sa';

const PAGE_TITLE = 'اليومية';

const DAILY_ROW_INTIAL_VALUE = {
  accountId: '',
  id: '',
  accountName: '',
  value: '',
  values: '',
  billType: '',
  note: '',
};

const DailyPage = () => {
  const { data, yesterday, today, isLoading, isSuccess } = useSelector(
    (state) => state.dailyRows
  );
  dayjs.locale('ar-sa');
  const [date, setDate] = useState(dayjs());
  const currentDate = date || dayjs();
  var selectedDate = dayjs(currentDate);
  dayjs.locale('ar');
  const reduceDateHandler = () => {
    const newDate = dayjs(date).subtract(1, 'day');
    setDate(newDate);
  };
  const increaseDateHandler = () => {
    const newDate = dayjs(date).add(1, 'day');
    setDate(newDate);
  };
  const users = useSelector((state) => state.users);
  const formattedBills = data
    ?.map(({ id, values, value, billType, note, UserId, isDaily, User }) => {
      if (isDaily)
        return {
          id,
          values,
          value,
          billType,
          note,
          accountId: UserId,
          accountName: User?.name,
          accountType: User?.userType,
        };
      return null;
    })
    .filter((e) => e !== null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    dispatch(
      getDaily({
        isDaily: true,
        date: {
          month: date.format('M'),
          day: date.format('D'),
          year: date.format('YYYY'),
        },
      })
    );
  }, [date]);

  const { dialog, setDialog, handleOpenAddDialog } = useTable(
    DAILY_ROW_INTIAL_VALUE
  );

  const dispatchers = {
    add: (row) => {
      const formattedRow = {
        isDaily: true,
        userId: row.accountId, // its id
        value: Number(parseFloat(row.value).toFixed(2)),
        values: Number(parseFloat(row.values).toFixed(2)),
        billType: row.billType,
        note: row.note,
      };
      dispatch(addDaily(formattedRow)).then(() => {
        dispatch(
          getDaily({
            isDaily: true,
            date: {
              month: date.format('M'),
              day: date.format('D'),
              year: date.format('YYYY'),
            },
          })
        );
      });
    },
    edit: (editedRow) => {
      const formattedRow = {
        isDaily: true,
        userId: editedRow.accountId,
        value: Number(parseFloat(editedRow.value, 10).toFixed(2)),
        values: Number(parseFloat(editedRow.values, 10).toFixed(2)),
        billType: editedRow.billType,
        note: editedRow.note,
        id: editedRow.id,
      };
      dispatch(editDaily(formattedRow)).then(() => {
        dispatch(getDaily({ all: false, userId: null, isDaily: true }));
      });
    },
    delete: (invoiceId) => {
      dispatch(deleteDaily(invoiceId));
    },
  };

  const validationSchema = Yup.object({
    accountId: Yup.string().required('يرجى إدخال اسم الحساب'),
    value: Yup.number().required('يرجى إدخال المبلغ'),
    values: Yup.number().required('يرجى إدخال القيمة'),
    note: Yup.string(),
    billType: Yup.string().required('يرجى اختيار نوع الفاتورة'),
  });
  const formattedUsers = users?.data?.map((user) => ({
    value: user.name,
    id: user.id,
    type: user.userType,
  }));

  const COLUMNS = [
    {
      id: 'id',
      label: 'رقم الفاتورة',
      minWidth: 70,
      align: 'center',
      isField: false,
      isLink: true,
      isInvoice: true,
    },
    {
      id: 'accountId',
      label: 'ايدي الحساب',
      minWidth: 80,
      align: 'center',
      isField: true,
      isLink: true,
      options: formattedUsers,
      required: true,
    },
    {
      id: 'accountName',
      label: 'اسم الحساب',
      minWidth: 150,
      align: 'left',
    },
    {
      id: 'value',
      label: 'المبلغ',
      minWidth: 100,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
      isField: true,
      required: true,
      isBill: true,
    },
    {
      id: 'values',
      label: 'القيمة',
      minWidth: 50,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
      isField: true,
      isBill: true,
    },
    {
      id: 'billType',
      label: 'نوع الفاتورة',
      type: 'select',
      options: [
        { value: 'ادخال', id: 'ادخال' },
        { value: 'صادر', id: 'صادر' },
        { value: 'مصروف', id: 'مصروف' },
        { value: 'سحوبات', id: 'سحوبات' },
      ],
      required: true,
      isField: true,
    },
    {
      id: 'note',
      label: 'ملاحظة',
      minWidth: 170,
      align: 'left',
      isField: true,
    },
  ];

  return (
    <>
      <PageLayout>
        <PageHeading
          title="صفحة اليومية"
          isDaily={true}
          date={selectedDate.toDate()}
          onReduce={reduceDateHandler}
          onIncrease={increaseDateHandler}
        />
        <Box>
          <CustomTableHeading rows={{ ...yesterday, title: 'الاساس' }} />
          <MyTable
            COLUMNS={COLUMNS}
            deletedLabel={`فاتورة ${PAGE_TITLE}`}
            setDialog={setDialog}
            rows={formattedBills}
            dispatchers={dispatchers}
          />
          <CustomTableHeading rows={{ ...today, title: 'المدور' }} />
          <Button
            variant="contained"
            sx={{
              height: '60px',
              margin: '2rem auto',
              display: 'block',
              width: '50%',
            }}
            color="error"
            onClick={handleOpenAddDialog}
          >
            {'إضافة فاتورة جديدة'}
          </Button>
        </Box>
        <MyDialog
          title={`فاتورة ${PAGE_TITLE}`}
          dialog={dialog}
          setDialog={setDialog}
          ROW_INTIAL_VALUE={DAILY_ROW_INTIAL_VALUE}
          validationSchema={validationSchema}
          FIELDS={COLUMNS.filter((e) => e.isField)}
          rows={formattedBills}
          dispatchers={dispatchers}
        />
      </PageLayout>
    </>
  );
};

export default DailyPage;
