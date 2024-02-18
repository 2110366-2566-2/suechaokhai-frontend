import Image from "next/image";

export default function SearchSection() {
  return (
    <div className="mt-6 flex h-52 w-1/2 flex-col gap-y-6">
      <div className="flex h-32 flex-row items-center justify-center gap-x-7 rounded-2xl bg-white px-7 text-ci-gray">
        <input
          type="text"
          className="h-1/2 w-full rounded-xl border border-ci-gray px-5 text-xl"
          placeholder="Location, building"
        ></input>
        <button className="h-1/2 w-56 rounded-xl bg-ci-blue text-xl font-semibold text-white">
          Search Now!
        </button>
      </div>

      <div className="flex flex-row gap-x-7 text-ci-black">
        <div className="flex h-16 w-80 place-content-between items-center rounded-xl bg-white px-6 text-left text-xl">
          <p>Price Range</p>
          <Image
            src="/img/home-page/arrow-down.png"
            alt="arrow-down"
            width={40}
            height={40}
          />
        </div>
        <div className="flex h-16 w-80 place-content-between items-center rounded-xl bg-white px-6 text-left text-xl">
          <p>Size</p>
          <Image
            src="/img/home-page/arrow-down.png"
            alt="arrow-down"
            width={40}
            height={40}
          />
        </div>
        <div className="flex h-16 w-80 place-content-between items-center rounded-xl bg-white px-6 text-left text-xl">
          <p>Bedrooms</p>
          <Image
            src="/img/home-page/arrow-down.png"
            alt="arrow-down"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
