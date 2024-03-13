export const MenuHamburger = () => {
  return (
    <div
      className={`fixed left-0 top-0 flex  h-full w-full flex-col items-center bg-black bg-opacity-50 text-[24px]`}
    >
      <div className="flex w-full items-center justify-center bg-ci-dark-blue pt-[84px] text-white hover:opacity-60">
        Buy
      </div>
      <div className="flex w-full items-center justify-center bg-ci-dark-blue text-white hover:opacity-60 ">
        Rent
      </div>
      <div className="flex w-full items-center justify-center bg-ci-dark-blue text-white hover:opacity-60 ">
        Appointment
      </div>
      <div className="flex w-full items-center justify-center bg-ci-dark-blue text-white hover:opacity-60 ">
        Agreement
      </div>
      <div className="flex w-full items-center justify-center bg-ci-dark-blue text-white hover:opacity-60 ">
        My Listing
      </div>
    </div>
  );
};
