'use client'
import { useReducer, useState } from 'react';

import { isSameDay } from 'date-fns';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { toast } from "sonner"

const RoomTourRes = ({Property}:{Property:string}) => {
    const today = new Date();
    const [isReserving,setReserve] = useState<boolean>(false);
    const [selectedDays, setSelectedDays] = useState<Date[]>([]);

    const handleDayClick: DayClickEventHandler = (day:Date, modifiers:any) => {
      const newSelectedDays = [...selectedDays];
      if (modifiers.selected) {
          const index = selectedDays.findIndex((selectedDay) =>isSameDay(day, selectedDay));
          newSelectedDays.splice(index, 1);
        } 
      else {
          newSelectedDays.push(day);
        }
      setSelectedDays(newSelectedDays);

    };

    const disableDate =(day:Date)=>{
        if(!isSameDay(day,today)  && day.getTime()<today.getTime()){
          return true
        }
        return false
    }
  
    const handleReservation = () =>{
      //do something here
      setReserve(false);
    }

    const handleSave = () =>{
      //save to db
      alert('Save Success');

    }

    return (
        <div className="flex flex-col bg-white p-4 ">
          {isReserving ?  
          <div className='z-40 fixed top-[0] left-[0] w-[100%] h-[100vh] bg-black bg-opacity-20 flex justify-center items-center flex-col'>
                <div className='flex flex-col relative p-[32px] bg-white rounded-lg'>
                    <div className="text-2xl font-semibold ">Confirm request reservation ?</div>
                    <div className='text-2xl font-semibold m-3'>{Property}</div>
                    <div className='m-1'>Your selected date</div>

                    <div className='flex-col '>
                        {selectedDays.map((date:Date)=>(
                            <div className=' rounded-md border-2 border-black text-center p-2' >
                          
                            {date.toDateString()}
                            </div>
                        ))}
                        
                    </div>

                    <div className="flex-row w-[100%] left-[5%] justify-around relative">                      
                      <button className="w-[40%] mx-1 bg-black hover:bg-[#DFDFDF] my-4 font-semibold text-white py-2 px-4 rounded-md shadow "
                              onClick={(e)=>{e.preventDefault(); setReserve(false);}}      
                          >No</button>                      
                     <button className="w-[40%] mx-1 bg-[#3AAEEF] hover:bg-blue-800 my-4 font-semibold text-white py-2 px-4 rounded-md shadow "                               
                                onClick={(e)=>{e.preventDefault();toast("test");handleReservation();}}
                        >Yes, Confirm!</button>                    
                  </div>
              </div>
          </div> : null}
      


          <div className='text-xl font-medium'>Room Tour Reservation</div>
          <div className=''>Please select whenever you are free.</div>
          <div>

          <DayPicker
            onDayClick={handleDayClick}
            selected={selectedDays}
            disabled={disableDate}
          />

            {selectedDays.length===0 ? 
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
                      disabled={selectedDays.length===0}>Save</button>
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