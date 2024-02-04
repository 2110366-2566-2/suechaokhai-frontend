'use client'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs , { Dayjs } from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { PickersDay, PickersDayProps ,DayCalendarSkeleton}  from '@mui/x-date-pickers';
import { PickersLayout } from '@mui/x-date-pickers';
import { useState } from 'react';
const customPickerDate =({props,highlightedDays}:{props:PickersDayProps<Dayjs>,highlightedDays?: number[]})=>{

  return(
    <PickersDay {...props} ></PickersDay>
  );
   
}


const RoomTourRes = () => {
    const today = dayjs();
    const [date,setDate]=useState<Dayjs|null>(null);

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
              <DateCalendar minDate={today} onChange={(newDate)=>{setDate(newDate)}}></DateCalendar>

            </LocalizationProvider>
            {date ? <div className="flex-row">
              <button className="w-[50%] hover:bg-[#DFDFDF] my-4 font-semibold text-black py-2 px-4 rounded-md shadow "
                          type="submit"
                  >Save</button>
              <button className="w-[50%] bg-[#3AAEEF] hover:bg-blue-800 my-4 font-semibold text-white py-2 px-4 rounded-md shadow "
                         type="submit"
                >Reserve Now</button>
            </div>
            :
            <div className="flex-row">
              <button className="w-[50%]  my-4 font-semibold  text-[#DFDFDF] py-2 px-4 rounded-md shadow "
                          type="submit" disabled
                  >Save</button>
              <button className="w-[50%]  my-4 font-semibold  bg-[#DFDFDF] text-white py-2 px-4 rounded-md shadow"
                         type="submit" disabled
                >Reserve Now</button>
            </div>
            
            }
            
   
          </form>
          
        </div> 
       
     );
}
 
export default RoomTourRes;