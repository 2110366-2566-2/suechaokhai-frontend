'use client'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs , { Dayjs } from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { PickersDay, PickersDayProps ,DayCalendarSkeleton}  from '@mui/x-date-pickers';
import { PickersLayout } from '@mui/x-date-pickers';
const customPickerDate =({props,highlightedDays}:{props:PickersDayProps<Dayjs>,highlightedDays?: number[]})=>{

  return(
    <PickersDay {...props} ></PickersDay>
  );
   
}


const RoomTourRes = () => {
    const today = dayjs();
    return (
        <div className="flex flex-col bg-white p-4 ">
          <div className='text-xl font-medium'>Room Tour Reservation</div>
          <div className=''>Please select whenever you are free.</div>
          <form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

              {/* <DateCalendar
                minDate={today}
                slots={{ day: customPickerDate}}
                // slotProps={{day:{day:today}}}
                
              /> */}
              <DateCalendar minDate={today}></DateCalendar>

            </LocalizationProvider>
            <div className="flex-row">
              <button className="w-[50%] hover:bg-[#FFCE50] my-4 font-bold text-black py-2 px-4 rounded-md shadow shadow-violet-600/25 hover:shadow-violet-600/75"
                          type="submit"
                  >Save</button>
              <button className="w-[50%] hover:bg-[#FFCE50] my-4 font-bold text-black py-2 px-4 rounded-md shadow shadow-violet-600/25 hover:shadow-violet-600/75"
                         type="submit"
                >Reserve Now</button>
            </div>
   
          </form>
          
        </div> 
       
     );
}
 
export default RoomTourRes;