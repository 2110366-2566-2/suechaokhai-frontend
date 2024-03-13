<<<<<<< HEAD
import Image from "next/image";
const emptyCardIcon = "/img/edit-profile/empty-card.svg";
const EmptyCard = () => {
  return (
    <div className="relative flex h-72 w-5/12 cursor-pointer select-none flex-col items-center justify-center rounded-xl bg-ci-light-gray hover:bg-ci-dark-gray hover:text-white">
      <Image
        src={emptyCardIcon}
        alt={"empty-card"}
        width={84}
        height={84}
        draggable={false}
      />
      <div className="text-[20px] font-medium">Add A Credit Card</div>
    </div>
  );
};
export default EmptyCard;
||||||| b074513
=======
import Image from "next/image";
const emptyCardIcon = "/img/edit-profile/empty-card.svg";
const EmptyCard = () => {
  return (
    <div className=" flex h-56 min-w-[400px] cursor-pointer select-none flex-col items-center justify-center rounded-xl bg-ci-light-gray hover:bg-ci-dark-gray hover:text-white">
      <Image
        src={emptyCardIcon}
        alt={"empty-card"}
        width={84}
        height={84}
        draggable={false}
      />
      <div className="text-[20px] font-medium">Add A Credit Card</div>
    </div>
  );
};
export default EmptyCard;
>>>>>>> df15c90262049e0e4c2b76616c35e28d9f934767
