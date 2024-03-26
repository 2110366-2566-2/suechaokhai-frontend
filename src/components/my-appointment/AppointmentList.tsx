import Image from "next/image";
import StatusBox from "@/components/my-appointment/StatusBox";
import {
  DetailButton,
  CancelButton,
} from "@/components/my-appointment/InteractiveButton";
import { useEffect, useState } from "react";
import UpdateAppointmentStatus from "@/services/appointments/updateAppointmentStatus";

export default function AppointmentList({
  apptId,
  propertyImgSrc,
  propertyName,
  propertySubName,
  ownerImgSrc,
  ownerName,
  date,
  time,
  status,
}: {
  apptId: string;
  propertyImgSrc: string;
  propertyName: string;
  propertySubName: string;
  ownerImgSrc: string;
  ownerName: string;
  date: string;
  time: string;
  status: string;
}) {
  const [reason, setReason] = useState("");
  const [isCancelled, setCancel] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    const updateCancel = async () => {
      if (isCancelled) {
        const data = await UpdateAppointmentStatus({
          appointmentId: apptId,
          status: "CANCELLED",
          msg: reason,
        });
        console.log(data);
        setCurrentStatus("Cancelled");
      }
    };
    updateCancel();
  }, [isCancelled]);

  return (
    <div className="h-[240px] w-full border-x-4 border-y-2 border-ci-dark-gray bg-ci-light-gray">
      <div className="mx-auto my-10 flex h-[67%] w-[90%] flex-row justify-between">
        <div className="my-auto flex w-[40%] flex-row">
          <div className="my-auto w-[40%]">
            <Image
              src={propertyImgSrc}
              alt="propertyImg"
              width={240}
              height={160}
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="my-auto ml-5 flex flex-col">
            <div className="text-2xl font-medium">{propertyName}</div>
            <div className="text-xl font-normal">{propertySubName}</div>
            <div className="mt-3 flex flex-row text-xl font-normal">
              <div>
                <Image
                  src={ownerImgSrc}
                  alt="Owner Image"
                  width={60}
                  height={60}
                  // layout="responsive"
                />
              </div>
              <div className="mx-2 my-auto">{ownerName}</div>
            </div>
          </div>
        </div>
        <div className="font-regular my-auto ml-20 flex w-[15%] flex-col text-2xl">
          <div>{date}</div>
          <div className="mt-2">{time}</div>
        </div>
        <div className="my-auto ml-20 h-[30%] w-[12.5%]">
          <StatusBox status={currentStatus} />
        </div>
        <div className="my-auto ml-28 flex h-full w-[12.5%] flex-col justify-between">
          <DetailButton appointmentId={apptId} />
          <CancelButton
            status={status}
            reasontmp={reason}
            setReason={setReason}
            setCancel={setCancel}
          />
        </div>
      </div>
    </div>
  );
}
