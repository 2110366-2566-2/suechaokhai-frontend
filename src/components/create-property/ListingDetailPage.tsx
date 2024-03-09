"use client";

import ListingType from "./ListingType";
import TrackingCircle from "./TrackingCircle";

export default function ListingDetailPage() {
  return (
    <div>
      <TrackingCircle page="Listing" />
      <div className="flex">
        <div className="m-20 flex-grow rounded-[20px] border border-2 border-gray-300 p-10">
          <div className="pb-10 text-[36px] font-bold text-ci-black">
            Listing Details
          </div>
          <div className="flex gap-[60px]">
            <div className="flex flex-col gap-[24px]">
              <div className="text-[28px] font-medium text-ci-black">Name</div>
              <input
                id="txt"
                autoComplete="off"
                className="block h-[60px] w-[480px] rounded-[10px] border border-ci-dark-gray p-2"
                type="text"
                placeholder="Property Name"
                style={{ fontSize: "20px" }}
              ></input>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="text-[28px] font-medium text-ci-black">
                Listing Type
              </div>
              <ListingType />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
