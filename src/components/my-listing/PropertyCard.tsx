import PropertyData from "../../models/PropertyData";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";
import favoriteProperty from "@/services/property/favoriteProperty";
import unfavoriteProperty from "@/services/property/unfavoriteProperty";
import deleteProperty from "@/services/property/deleteProperty";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const PropertyCard = ({
  propData,
  editable,
  imgSrc,
}: {
  propData: PropertyData;
  editable: boolean;
  imgSrc: string;
}) => {
  const [fav, setFav] = useState<boolean>(propData.is_favorite);
  const [isDeleting, setDel] = useState<boolean>(false);

  const router = useRouter();

  const { toast } = useToast();

  function formatPrice(num: number): string {
    if (num) {
      return Math.round(num)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "0";
  }

  return (
    <div
      className="h-[800px] w-full rounded-lg bg-[#ECECEC]"
      key={propData.property_id}
    >
      <div className="relative h-[300px] w-full rounded-t-lg  ">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="rounded-t-lg object-cover"
        ></Image>
      </div>
      <div className="mx-16 flex flex-col ">
        <div className="mx-1 my-8 flex h-1/6 flex-row items-center justify-between ">
          <div className="w-full  text-2xl font-semibold ">
            {propData.property_name}
          </div>
          {fav ? (
            <FavoriteIcon
              className="text-ci-red"
              sx={{ fontSize: 50 }}
              onClick={async () => {
                setFav(!fav);
                const res = await unfavoriteProperty(propData.property_id);
                console.log(res.message);
              }}
            ></FavoriteIcon>
          ) : (
            <FavoriteBorderIcon
              className="text-ci-red"
              sx={{ fontSize: 50 }}
              onClick={async () => {
                setFav(!fav);
                const res = await favoriteProperty(propData.property_id);
                console.log(res.message);
              }}
            ></FavoriteBorderIcon>
          )}
        </div>
        <hr className="border-black "></hr>

        <div className="mx-1 my-4 flex h-1/2 flex-col ">
          <div className="my-2 w-full text-xl ">
            {propData.district}, {propData.province}
          </div>
          <div className="my-2 w-full text-xl font-semibold">
            ฿{formatPrice(propData.renting.price_per_month)}/month
          </div>
        </div>

        <hr className="border-black "></hr>

        <div className="mx-1 my-8 flex h-1/6 flex-row items-center">
          <div className="flex w-1/2 flex-row items-center justify-around">
            <Image
              src="/img/mylisting/bed.svg"
              alt="bed"
              width={50}
              height={40}
            />
            <div className="text-xl">2 Bedrooms</div>
          </div>

          <div className="flex w-1/2 flex-row items-center justify-around">
            <Image
              src="/img/mylisting/arrow.svg"
              alt="arrow"
              width={50}
              height={40}
            />
            <div className="text-xl">60 m²</div>
          </div>
        </div>
        {editable ? (
          <div className="mx-1 flex flex-col items-center ">
            <button
              className="mx-0.5 my-2 h-[60px] w-full rounded-md bg-ci-blue px-4 text-xl font-semibold text-[#DFDFDF] shadow "
              //! link to edit prop page\
            >
              Edit details
            </button>
            <button
              className="mx-0.5 my-2 h-[60px] w-full rounded-md bg-ci-red px-4 text-xl font-semibold text-[#DFDFDF] shadow "
              onClick={(e) => {
                setDel(!isDeleting);
              }}
            >
              Delete property
            </button>
          </div>
        ) : (
          <div className="mx-1 flex flex-col items-center ">
            <button
              className="mx-0.5 my-2 h-[60px] w-full rounded-md bg-ci-blue px-4 text-xl font-semibold text-[#DFDFDF] shadow "
              //! link to propDesc page
            >
              Views more details
            </button>
          </div>
        )}
      </div>

      {isDeleting ? (
        <div className="fixed left-[0] top-[0] z-40 flex h-[100vh] w-[100%] flex-col items-center justify-center bg-black bg-opacity-20">
          <div className="relative flex h-2/5 w-1/3 flex-col items-center justify-around rounded-2xl bg-white p-[32px]">
            <div className="text-4xl font-bold ">Delete a Property</div>
            <div className="mb-1 mt-10 text-xl">
              Are you sure you want to delete this property ?
            </div>
            <div className="mb-10 mt-1 text-2xl font-semibold ">
              {propData.property_name}
            </div>

            <div className="flex-roe mx-1 flex w-full items-center justify-center">
              <button
                className="mx-2 my-2 h-[60px] w-1/3 rounded-md bg-[#B3B3B3] px-4 text-2xl font-bold text-[#DFDFDF] shadow "
                onClick={() => {
                  setDel(!isDeleting);
                }}
              >
                Cancel
              </button>
              <button
                className="mx-2 my-2 h-[60px] w-1/3 rounded-md bg-ci-red px-4 text-2xl font-bold text-[#DFDFDF] shadow "
                onClick={async () => {
                  setDel(!isDeleting);
                  const res = await deleteProperty(propData.property_id);
                  if (res) {
                    // router.push("listing");
                    window.location.href = "/listing"
                    toast({
                      // variant: "destructive",
                      title: "Deleted",
                      description:
                        "Your property has been deleted successfully.",
                    });
                  }
                  console.log(res.message);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <Toaster></Toaster>
    </div>
  );
};

export default PropertyCard;
