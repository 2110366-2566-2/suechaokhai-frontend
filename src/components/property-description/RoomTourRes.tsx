
"use client";
import { useEffect, useReducer, useRef, useState } from "react";

import { isSameDay } from "date-fns";
import { DayClickEventHandler, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { toast } from "sonner";
import { LocalizationProvider } from "@mui/x-date-pickers";

const RoomTourRes = ({ Property, handlePost }: { Property: string, handlePost: Function }) => {
  const today = new Date();
  const [isReserving, setReserve] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [message, setMessage] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef("");

  const handleDayClick: DayClickEventHandler = (day: Date, modifiers: any) => {
    // const newSelectedDays = [...selectedDays];
    if (modifiers.selected) {
      // const index = selectedDays.findIndex((selectedDay) =>
      //   isSameDay(day, selectedDay)
      // );
      // newSelectedDays.splice(index, 1);
      setSelectedDay(null);
    } else {
      // newSelectedDays.push(day);
      setSelectedDay(day);
    }
    // setSelectedDays(newSelectedDays);
    // console.log(selectedDays[0].toISOString().slice(0, -5) + 'Z')
  };

  useEffect(() => {
    console.log(selectedDay)
  }, [selectedDay])


  // useEffect(() => {
  //   console.log(typeof(selectedTime?.$d.toISOString()))
  //   console.log(selectedTime?.$d.toISOString().split('T')[1])
  // }, [selectedTime])

  const disableDate = (day: Date) => {
    if (!isSameDay(day, today) && day.getTime() < today.getTime()) {
      return true;
    }
    return false;
  };

  const handleReservation = () => {
    //do something here
    setReserve(false);

    //render reservation success popup
    // toast("Reservation request sent!", {
    //   description: 'Your reservation request has been sent successfully',
    // });

    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 500)
      );

    toast.promise(promise, {
      loading: "Sending reservation request...",
      success: (data) => {
        return (
          <div className="flex flex-row items-center">
            <CheckCircleIcon fontSize="large"></CheckCircleIcon>
            <div className="mx-2 flex flex-col">
              <div className="text-base font-bold">
                Reservation request sent!
              </div>
              <div className="text-sm">
                Your reservation request has been sent successfully
              </div>
              {/* <div>test data : {data.name}</div> */}
            </div>
          </div>
        );
      },
      error: "Error",
    });
  };

  const handleSave = () => {
    //save to db
    alert("Save Success");
  };

  return (
    <div className="flex flex-col  bg-white p-4 ">
      {isReserving ? (
        <div className="fixed left-[0] top-[0] z-40 flex h-[100vh] w-[100%] flex-col items-center justify-center bg-black bg-opacity-20">
          <div className="relative flex flex-col rounded-lg bg-white p-[32px]">
            <div className="font-bold">Room Tour Reservation</div>
            <div className="">Please select whenever you are free.</div>
              <div className="flex flex-row">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DayPicker
                      onDayClick={handleDayClick}
                      selected={selectedDay}
                      disabled={disableDate}
                      modifiersStyles={{
                        selected: {
                          backgroundColor: "#3AAEEF",
                          color: "white",
                          borderRadius: 8,
                        },

                        disabled: {
                          backgroundColor: "#DFDFDF",
                        },
                      }}
                      styles={{
                        day: {
                        margin: 3,
                        border: "solid 1px",
                        borderRadius: 8,
                      },
                      }}
                    />

                  </LocalizationProvider>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker 
                    label="Select time"
                    value={selectedTime}
                    onChange={(time) => {
                      setSelectedTime(time);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="">
                Message (Optional)
                <textarea 
                  className="h-[220px] w-full rounded-[10px] mx-auto border border-black p-2 text-gray-700`"
                  name="" id="" placeholder='Enter text' cols={40} rows={10}
                  value={message} ref={inputRef} 
                  onChange={(e) => {
                    messageRef.current = e.target.value;
                    setMessage(messageRef.current);
                  }}
                >
                </textarea>
              </div>

          {selectedDay === null ? (
            <div className="flex-row">
              <button
                className="mx-0.5 my-4 w-[48%] rounded-md bg-[#3AAEEF] px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
                onClick={(e) => {
                  e.preventDefault();
                  setReserve(false);
                }}
              >
                Cancel
              </button>
              <button
                className="mx-0.5  my-4 w-[48%] rounded-md  bg-[#DFDFDF] px-4 py-2 font-semibold text-white shadow"
                disabled
              >
                Reserve Now
              </button>
            </div>
          ) : (
            <div className="flex-row">
              <button
                className="mx-0.5 my-4 w-[48%] rounded-md bg-[#3AAEEF] px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
                onClick={(e) => {
                  e.preventDefault();
                  setReserve(false);
                }}
              >
                Cancel
              </button>
              <button
                className="mx-0.5 my-4 w-[48%] rounded-md bg-[#3AAEEF] px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
                onClick={(e) => {
                  e.preventDefault();
                  setReserve(true);
                  const strDay = selectedDay.toISOString().split('T')[0] + 'T' + selectedTime?.toISOString().split('T')[1].slice(0, -5) + 'Z';
                  console.log(strDay);
                  handlePost(strDay, message);
                  setReserve(false);
                }}
              >
                Reserve Now
              </button>
          </div>
        )}

          </div>
        </div>
      ) : null}
      

      <div className="flex flex-col items-center">
        <div className="text-xl font-bold">Room Tour Reservation</div>
        <button
                  className="mx-1 my-4 w-[60%] rounded-full bg-ci-blue px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
                  onClick={(e) => {
                    e.preventDefault();
                    handleReservation();
                  }}
                >
                Chat with Owner
        </button>
        <button
                  className="mx-1 my-4 w-[60%] rounded-full bg-ci-blue px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
                  onClick={(e) => {
                    e.preventDefault();
                    setReserve(true);
                  }}
                >
                Make Appointment
        </button>

      </div>

    </div>
  );
};

export default RoomTourRes;
