"use client";

import { useState } from "react";
import Image from "next/image";
import PaymentList from "@/components/payment-history/PaymentList";

const paymentHistory = () => {
  const [isEmpty, setEmpty] = useState<boolean>(false);

  const handleChange = () => {
    setEmpty(!isEmpty);
  };

  return (
    <>
      <button onClick={handleChange}>change</button>
      {isEmpty ? (
        <div className="mx-72 mt-8 flex h-1/2 flex-col items-center justify-around gap-8">
          <div className="text-center text-4xl font-bold">
            Empty Payment History
          </div>

          <Image
            src="/img/payment-history/empty.svg"
            alt="empty"
            width={100}
            height={100}
          />
          <div className="m-1 text-center text-2xl">
            <div>Your payment History is empty.</div>
            <div>Let’s add some transactions.</div>
          </div>
        </div>
      ) : (
        <PaymentList totalPay={31} />
      )}
    </>
  );
};

export default paymentHistory;
