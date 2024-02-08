'use client'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs , { Dayjs } from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { PickersDay, PickersDayProps ,DayCalendarSkeleton}  from '@mui/x-date-pickers';
import { PickersLayout } from '@mui/x-date-pickers';
import { useReducer, useState } from 'react';
import OwnerInfo from './OwnerInfo';
const customPickerDate =(props:PickersDayProps<Dayjs>)=>{

  return(
    <PickersDay {...props} selected={true} ></PickersDay>
  );
   
}



const RoomTourRes = ({Property}:{Property:string}) => {
    const today = dayjs();
    const [isReserving,setReserve] = useState<boolean>(false);

    const [selectedDate,setSelected] = useState<Array<Dayjs>>([]);

    const updateDates = (newDate:Dayjs)=>{
      // console.log(selectedDate,newDate.toDate());

        if(selectedDate.find((date:Dayjs)=>date.toDate().getTime()===newDate.toDate().getTime())!==undefined){
          setSelected(selectedDate=>selectedDate.filter((date:Dayjs)=>!date.isSame(newDate)))
        }
        else{
          setSelected(selectedDate=>[...selectedDate,newDate]);
        }

    }
    // const selectReducer = (selectedDate:Array<Dayjs>,newDate:Dayjs)=>{
    //     console.log('1',selectedDate)

    //     console.log(newDate.toDate().getTime())
    //     console.log(selectedDate.find((Date:Dayjs)=>{Date.isSame(newDate,'day')})===undefined)


    //     if(selectedDate.find((Date:Dayjs)=>{Date.toDate().getTime()===newDate.toDate().getTime()})===undefined){
    //       selectedDate.push(newDate);
    //     }
    //     else{
    //       selectedDate.filter((Date:Dayjs)=>{Date.toDate().getTime()!==newDate.toDate().getTime()});
    //     }

    //     console.log('2',selectedDate)
    //     return selectedDate;
    // }

    // const [selectedDate , dispatchSelected] = useReducer(selectReducer,new Array<Dayjs>())

    const handleReservation = () =>{
      //do something here
      setReserve(false);
      alert('Confirm Success');
    }

    const handleSave = () =>{
      alert('Save Success');

    }

    return (
        <div className="flex flex-col bg-white p-4 ">
          {isReserving ?  
          <div className='z-40 fixed top-[0] left-[0] w-[100%] h-[100vh] bg-black bg-opacity-20 flex justify-center items-center flex-col'>
                <div className='flex flex-col relative p-[32px] bg-white rounded-lg'>
                    <div className="text-2xl font-semibold ">Confirm request reservation ?</div>
                    <div className='font-semibold'>{Property}</div>
                    <OwnerInfo name='Boss' tel='45654' mail='dsvfd' imgSrc='/img/Boss.png' ></OwnerInfo>
                    <div className=''>Your selected date</div>

                    <div className='flex-col '>
                        {selectedDate.map((date:Dayjs)=>(
                            <div className=' rounded-md border-2 border-black text-center p-2' >
                          
                            {date.toDate().toDateString()}
                            </div>
                        ))}
                        
                    </div>

                    <div className="flex-row w-[60%] left-[25%] justify-around relative">                      
                      <button className="w-[40%] mx-1 bg-black hover:bg-[#DFDFDF] my-4 font-semibold text-white py-2 px-4 rounded-md shadow "
                              onClick={(e)=>{e.preventDefault(); setReserve(false);}}      
                          >No</button>                      
                     <button className="w-[40%] mx-1 bg-[#3AAEEF] hover:bg-blue-800 my-4 font-semibold text-white py-2 px-4 rounded-md shadow "                               
                                onClick={(e)=>{e.preventDefault();handleReservation();}}
                        >Yes, Confirm!</button>                    
                  </div>
              </div>
          </div> : null}

          <div className='text-xl font-medium'>Room Tour Reservation</div>
          <div className=''>Please select whenever you are free.</div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

              <DateCalendar
                minDate={today}
                onChange={(newDate)=>{updateDates(newDate)}}
                slots={{ day: customPickerDate}}
                // slotProps={{day:{day:today}}}
                
              />
            </LocalizationProvider>

            {selectedDate.length===0 ? 
                <div className="flex-row">
                  <button className="w-[50%]  my-4 font-semibold  text-[#DFDFDF] py-2 px-4 rounded-md shadow "
                              disabled
                      >Save</button>
                  <button className="w-[50%]  my-4 font-semibold  bg-[#DFDFDF] text-white py-2 px-4 rounded-md shadow"
                              disabled
                    >Reserve Now</button>
                </div>
            :     
                <div className="flex-row">
                  <button className="w-[50%] hover:bg-[#DFDFDF] my-4 font-semibold text-black py-2 px-4 rounded-md shadow "   
                            onClick={(e)=>{e.preventDefault();handleSave();}}                            
                      >Save</button>
                  <button className="w-[50%] bg-[#3AAEEF] hover:bg-blue-800 my-4 font-semibold text-white py-2 px-4 rounded-md shadow "
                            onClick={(e)=>{e.preventDefault();setReserve(true);}}
                    >Reserve Now</button>
                </div>
            }
          </div>         
        </div>      
     );
}
 
export default RoomTourRes;