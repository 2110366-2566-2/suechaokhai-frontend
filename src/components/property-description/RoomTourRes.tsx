"use client";
import { useReducer, useState } from "react";

import { isSameDay } from "date-fns";
import { DayClickEventHandler, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { toast } from "sonner";

const RoomTourRes = ({ Property }: { Property: string }) => {
  const today = new Date();
  const [isReserving, setReserve] = useState<boolean>(false);
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);

  const handleDayClick: DayClickEventHandler = (day: Date, modifiers: any) => {
    const newSelectedDays = [...selectedDays];
    if (modifiers.selected) {
      const index = selectedDays.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      newSelectedDays.splice(index, 1);
    } else {
      newSelectedDays.push(day);
    }
    setSelectedDays(newSelectedDays);
  };

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
            <div className="text-2xl font-semibold ">
              Confirm request reservation ?
            </div>
            <div className="my-3 text-xl font-semibold">{Property}</div>
            <div className="m-1">Your selected date</div>

            <div className="flex-col ">
              {selectedDays.map((date: Date, index) => (
                <div
                  className=" rounded-md border-2 border-black p-2 text-center"
                  key={index}
                >
                  {date.toDateString()}
                </div>
              ))}
            </div>

            <div className="relative left-[5%] w-[100%] flex-row justify-around">
              <button
                className="mx-1 my-4 w-[40%] rounded-md bg-black px-4 py-2 font-semibold text-white shadow hover:bg-gray-700 "
                onClick={(e) => {
                  e.preventDefault();
                  setReserve(false);
                }}
              >
                No
              </button>
              <button
                className="mx-1 my-4 w-[40%] rounded-md bg-[#3AAEEF] px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
                onClick={(e) => {
                  e.preventDefault();
                  handleReservation();
                }}
              >
                Yes, Confirm!
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="text-xl font-bold">Room Tour Reservation</div>
      <div className="">Please select whenever you are free.</div>
      <div>
        <DayPicker
          onDayClick={handleDayClick}
          selected={selectedDays}
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

        {selectedDays.length === 0 ? (
          <div className="flex-row">
            <button
              className="mx-0.5  my-4 w-[48%] rounded-md  px-4 py-2 font-semibold text-[#DFDFDF] shadow "
              disabled
            >
              Save
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
              className="mx-0.5 my-4 w-[48%] rounded-md border-[1px] border-black px-4 py-2 font-semibold text-black shadow hover:bg-[#DFDFDF] "
              onClick={(e) => {
                e.preventDefault();
                handleSave();
              }}
              disabled={selectedDays.length === 0}
            >
              Save
            </button>
            <button
              className="mx-0.5 my-4 w-[48%] rounded-md bg-[#3AAEEF] px-4 py-2 font-semibold text-white shadow hover:bg-blue-800 "
              onClick={(e) => {
                e.preventDefault();
                setReserve(true);
              }}
            >
              Reserve Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomTourRes;
