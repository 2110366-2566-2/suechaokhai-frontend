import Image from "next/image";
const emptyCardIcon = "/img/edit-profile/empty-card.svg";
const EmptyCard = ({setDisplay}:{setDisplay:Function}) => {
  return (
    <div className=" flex h-56 min-w-[400px] cursor-pointer select-none flex-col items-center justify-center rounded-xl bg-ci-light-gray hover:bg-ci-dark-gray hover:text-white"
    onClick={() => setDisplay(true)}
    >
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