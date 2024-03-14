<<<<<<< HEAD
import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  page: string;
}

const TrackingCircle = React.forwardRef<HTMLInputElement, IProps>(
  ({ page }) => {
    return (
      <div className="mt-[100px] inline-flex w-full items-center justify-center ">
        <div className="flex flex-col items-center">
          <div
<<<<<<< HEAD
            className={`flex size-20 items-center justify-center rounded-full ${page === "Listing" ? "bg-ci-light-blue" : "border border-2 border-gray-300 bg-white"}`}
=======
            className={`flex h-20 w-20 items-center justify-center rounded-full ${page === "Listing" ? "bg-ci-light-blue" : "border border-2 border-gray-300 bg-white"}`}
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
          >
            <span
              className={`text-[40px] font-semibold ${page === "Listing" ? "text-ci-white" : "text-ci-dark-gray"}`}
            >
              1
            </span>
          </div>
          <span
            className={`mt-2 text-[20px] font-semibold ${page === "Listing" ? "text-ci-black" : "text-ci-dark-gray"}`}
          >
            Listing Details
          </span>
        </div>

        <hr
          className="my-2 h-1 w-40 rounded border bg-gray-300"
          style={{ marginTop: "-25px", marginRight: "-15px" } as any}
        />

        <div className="flex flex-col items-center">
          <div
<<<<<<< HEAD
            className={`flex size-20 items-center justify-center rounded-full ${page === "Listing" ? "border border-2 border-gray-300 bg-white" : "bg-ci-light-blue"}`}
=======
            className={`flex h-20 w-20 items-center justify-center rounded-full ${page === "Listing" ? "border border-2 border-gray-300 bg-white" : "bg-ci-light-blue"}`}
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
          >
            <span
              className={`text-[40px] font-semibold ${page === "Listing" ? "text-ci-dark-gray" : "text-ci-white"}`}
            >
              2
            </span>
          </div>
          <span
            className={`mt-2 text-[20px] font-semibold ${page === "Listing" ? "text-ci-dark-gray" : "text-ci-black"}`}
          >
            Additional Details
          </span>
        </div>
      </div>
    );
  }
);

export default TrackingCircle;
||||||| b074513
=======
import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  page: string;
}

const TrackingCircle = React.forwardRef<HTMLInputElement, IProps>(
  ({ page }) => {
    return (
      <div className="mt-[100px] inline-flex w-full items-center justify-center ">
        <div className="flex flex-col items-center">
          <div
            className={`flex size-20 items-center justify-center rounded-full ${page === "Listing" ? "bg-ci-light-blue" : "border border-2 border-gray-300 bg-white"}`}
          >
            <span
              className={`text-[40px] font-semibold ${page === "Listing" ? "text-ci-white" : "text-ci-dark-gray"}`}
            >
              1
            </span>
          </div>
          <span
            className={`mt-2 text-[20px] font-semibold ${page === "Listing" ? "text-ci-black" : "text-ci-dark-gray"}`}
          >
            Listing Details
          </span>
        </div>

        <hr
          className="my-2 h-1 w-40 rounded border bg-gray-300"
          style={{ marginTop: "-25px", marginRight: "-15px" } as any}
        />

        <div className="flex flex-col items-center">
          <div
            className={`flex size-20 items-center justify-center rounded-full ${page === "Listing" ? "border border-2 border-gray-300 bg-white" : "bg-ci-light-blue"}`}
          >
            <span
              className={`text-[40px] font-semibold ${page === "Listing" ? "text-ci-dark-gray" : "text-ci-white"}`}
            >
              2
            </span>
          </div>
          <span
            className={`mt-2 text-[20px] font-semibold ${page === "Listing" ? "text-ci-dark-gray" : "text-ci-black"}`}
          >
            Additional Details
          </span>
        </div>
      </div>
    );
  }
);

export default TrackingCircle;
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
