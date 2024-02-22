import PropertyData from "../models/PropertyData";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useState } from "react";

const PropertyCard = ({project_name,renting,images,province,district}:PropertyData) => {

    const [fav,setFav]  = useState<boolean>(false);

    return ( 
       <div className="w-full h-[800px] rounded-lg bg-[#ECECEC]">
            <div className="w-full h-[300px] relative rounded-t-lg  ">
                <Image src={images[0]} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="flex flex-col mx-16 ">
                <div className="flex flex-row h-1/6 justify-between items-center my-8 mx-1 ">
                    <div className="w-full  font-semibold text-2xl ">{project_name}</div>
                    {
                        fav ? 
                        <FavoriteIcon className="text-ci-red" sx={{ fontSize: 50 }} ></FavoriteIcon> 
                        : 
                        <FavoriteBorderIcon className="text-ci-red" sx={{ fontSize: 50 }} ></FavoriteBorderIcon>
                    }


                </div>
                <hr className="border-black "></hr>

                <div className="flex flex-col my-4 mx-1 h-1/2 ">
                    <div className="w-full text-xl my-2 ">{district}, {province}</div>
                    <div className="w-full text-xl my-2 font-semibold">฿{Math.floor(renting.price_per_month/1000)},{renting.price_per_month%1000}/month</div>
                </div>

                <hr className="border-black "></hr>

                <div className="flex flex-row h-1/6 items-center my-8 mx-1">
                    <div className="flex flex-row items-center w-1/2 justify-around">
                        <Image
                            src="/img/mylisting/bed.svg"
                            alt="bed"
                            width={50}
                            height={40}
                        />
                        <div className="text-xl">2 Bedrooms</div>
                    </div>

                    <div className="flex flex-row items-center w-1/2 justify-around">
                        <Image
                            src="/img/mylisting/arrow.svg"
                            alt="arrow"
                            width={50}
                            height={40}
                        />
                        <div className="text-xl">60 m²</div>
                    </div>
                    
                    

                </div>
                <div className="flex flex-col items-center mx-1 ">
                    <button
                    className="mx-0.5 bg-ci-blue my-2 w-full h-[60px] rounded-md text-xl px-4 font-semibold text-[#DFDFDF] shadow "
                    onClick={()=>setFav(!fav)}
                    >
                    Edit details
                    </button>
                    <button
                    className="mx-0.5 bg-ci-red my-2 w-full h-[60px] rounded-md text-xl px-4 font-semibold text-[#DFDFDF] shadow "
                    >
                    Delete property
                    </button>
                </div>
            </div>  
       </div>
        
     );
}
 
export default PropertyCard;