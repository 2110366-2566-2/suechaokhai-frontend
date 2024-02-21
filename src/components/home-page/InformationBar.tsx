import Image from "next/image";

export default function InformationBar() {
  return (
    <div className=" relative flex flex-col gap-y-5 px-32 py-24">
      <div className="flex flex-col gap-y-5">
        <div className="text-4xl font-semibold">Why Sue Chao Khai?</div>
        <div className="text-2xl">
          Find the most suitable property at your choices
        </div>
      </div>

      <div className="flex flex-col items-center justify-around gap-x-40 sm:flex-col md:flex-row">
        <div className="flex flex-col gap-y-5">
          <Image
            src="/img/home-page/building.svg"
            alt="building"
            width={320}
            height={320}
          />
          <div className="flex flex-col gap-y-4">
            <div className="text-3xl font-semibold">Largest selection</div>
            <div className="text-xl">
              One of the largest selection of rental and sale properties in
              Thailand
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <Image
            src="/img/home-page/handshake.svg"
            alt="building"
            width={320}
            height={320}
          />
          <div className="flex flex-col gap-y-4">
            <div className="text-3xl font-semibold">Professional</div>
            <div className="text-xl">
              Thai-international team serving you lightning fast, competent and
              with a smile
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <Image
            src="/img/home-page/like.svg"
            alt="building"
            width={320}
            height={320}
          />
          <div className="flex flex-col gap-y-4">
            <div className="text-3xl font-semibold">Best deals</div>
            <div className="text-xl">
              New and used homes for rent and sale at best available prices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
