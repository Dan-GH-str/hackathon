import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

type TProps = {
  label: string
  sx?: object
  onChange: ((value: string) => void)
}

// Форматирование данных полученного с DatePicker в формат дд.мм.гг
function dataFormat(value: dayjs.Dayjs): string {
  return value.format('DD/MM/YYYY')
}

export default function BasicDatePicker({ label, sx, onChange }: TProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker 
        label={label} 
        onChange={e => {
          if (e) {
            let data = dataFormat(e)

            onChange(data)
          }
        }} 
        slotProps={{
        textField: {
          helperText: 'DD/MM/YYYY',
        }}}
        sx={sx}
      />
    </LocalizationProvider>
  );
}