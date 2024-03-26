import PropertyData from "../../models/PropertyData";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";
import favoriteProperty from "@/services/property/favoriteProperty";
import unfavoriteProperty from "@/services/property/unfavoriteProperty";
import deleteProperty from "@/services/property/deleteProperty";
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
    <div className="h-full w-full rounded-lg bg-[#ECECEC] pb-4 ">
      <div className="relative h-[200px] w-full rounded-t-lg lg:h-[300px]  ">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="rounded-t-lg object-cover"
        ></Image>
      </div>
      <div className="flex flex-col px-10 ">
        <div className=" my-5 flex h-1/6 flex-row items-center justify-between ">
          <div className="medium-text  w-full font-semibold ">
            {propData.property_name}
          </div>
          {fav ? (
            <FavoriteIcon
              className="text-ci-red"
              sx={{ fontSize: 30 }}
              onClick={async () => {
                setFav(!fav);
                const res = await unfavoriteProperty(propData.property_id);
                if (res) console.log(res.message);
              }}
            ></FavoriteIcon>
          ) : (
            <FavoriteBorderIcon
              className="text-ci-red"
              sx={{ fontSize: 30 }}
              onClick={async () => {
                setFav(!fav);
                const res = await favoriteProperty(propData.property_id);
                if (res) console.log(res.message);
              }}
            ></FavoriteBorderIcon>
          )}
        </div>
        <hr className="border-black "></hr>

        <div className=" my-4 flex h-1/2 flex-col ">
          <div className="small-text my-0.5 w-full ">
            {propData.district}, {propData.province}
          </div>
          <div className="small-text my-0.5 w-full font-semibold">
            ฿{formatPrice(propData.renting_property.price_per_month)}/month
          </div>
        </div>

        <hr className="border-black "></hr>

        <div className=" my-2 flex h-1/6 flex-col items-center lg:my-4 lg:flex-row">
          <div className="my-1 flex w-full flex-row items-center justify-around lg:w-1/2">
            <div className="relative h-10 w-10">
              <Image src="/img/mylisting/bed.svg" alt="bed" fill={true} />
            </div>

            <div className="small-text">2 Bedrooms</div>
          </div>

          <div className="my-1 flex  w-full flex-row items-center justify-around lg:w-1/2">
            <div className="relative h-9 w-9">
              <Image src="/img/mylisting/arrow.svg" alt="arrow" fill={true} />
            </div>

            <div className="small-text">60 m²</div>
          </div>
        </div>
        {editable ? (
          <div className=" flex flex-col items-center ">
            <button
              className="small-text  in-card-button  bg-ci-blue "
              //! link to edit prop page\
            >
              Edit details
            </button>
            <button
              className="small-text  in-card-button  bg-ci-red "
              onClick={(e) => {
                setDel(!isDeleting);
              }}
            >
              Delete property
            </button>
          </div>
        ) : (
          <div className=" flex flex-col items-center ">
            <button
              className="small-text  in-card-button  bg-ci-blue "
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
            <div className="small-text mb-1 mt-10">
              Are you sure you want to delete this property ?
            </div>
            <div className="medium-text mb-10 mt-1 font-semibold ">
              {propData.property_name}
            </div>

            <div className="flex-roe  flex w-full items-center justify-center">
              <button
                className="medium-text mx-2 my-2 h-[60px] w-1/3 rounded-md bg-[#B3B3B3] px-4 font-bold text-[#DFDFDF] shadow "
                onClick={() => {
                  setDel(!isDeleting);
                }}
              >
                Cancel
              </button>
              <button
                className="medium-text mx-2 my-2 h-[60px] w-1/3 rounded-md bg-ci-red px-4 font-bold text-[#DFDFDF] shadow "
                onClick={async () => {
                  setDel(!isDeleting);
                  const res = await deleteProperty(propData.property_id);
                  if (res) {
                    // router.push("listing");
                    window.location.href = "/listing";
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
