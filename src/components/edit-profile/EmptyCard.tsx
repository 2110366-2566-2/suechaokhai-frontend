import Image from "next/Image";
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
