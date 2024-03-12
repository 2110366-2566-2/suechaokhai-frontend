import PropertyData from "../models/PropertyData";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useState } from "react";



const PropertyCard = ({propData,editable}:{propData:PropertyData,editable:boolean}) => {

    const [fav,setFav]  = useState<boolean>(false);
    const [isDeleting,setDel] = useState<boolean>(false);

    function formatPrice(num: number): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return ( 
       <div className="w-full h-[800px] rounded-lg bg-[#ECECEC]">
            <div className="w-full h-[300px] relative rounded-t-lg  ">
                <Image src={propData.images[0]} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="flex flex-col mx-16 ">
                <div className="flex flex-row h-1/6 justify-between items-center my-8 mx-1 ">
                    <div className="w-full  font-semibold text-2xl ">{propData.project_name}</div>
                    {
                        fav ? 
                        <FavoriteIcon className="text-ci-red" sx={{ fontSize: 50 }} 
                                        onClick={()=>setFav(!fav)}

                         ></FavoriteIcon> 
                        : 
                        <FavoriteBorderIcon className="text-ci-red" sx={{ fontSize: 50 }} 
                            onClick={()=>setFav(!fav)}
                        
                        ></FavoriteBorderIcon>
                    }


                </div>
                <hr className="border-black "></hr>

                <div className="flex flex-col my-4 mx-1 h-1/2 ">
                    <div className="w-full text-xl my-2 ">{propData.district}, {propData.province}</div>
                    <div className="w-full text-xl my-2 font-semibold">฿{formatPrice(propData.renting.price_per_month)}/month</div>
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
                {
                    editable ? 
                    <div className="flex flex-col items-center mx-1 ">
                        <button
                        className="mx-0.5 bg-ci-blue my-2 w-full h-[60px] rounded-md text-xl px-4 font-semibold text-[#DFDFDF] shadow "
                        //! link to edit prop page
                        >
                        Edit details
                        </button>
                        <button
                        className="mx-0.5 bg-ci-red my-2 w-full h-[60px] rounded-md text-xl px-4 font-semibold text-[#DFDFDF] shadow "
                        onClick={()=>setDel(!isDeleting)}
                        
                        >
                        Delete property
                        </button>
                    </div>
                    :
                    <div className="flex flex-col items-center mx-1 ">
                        <button
                        className="mx-0.5 bg-ci-blue my-2 w-full h-[60px] rounded-md text-xl px-4 font-semibold text-[#DFDFDF] shadow "
                        //! link to propDesc page
                        >
                        Views more details
                        </button>
                
                    </div>
                }
                
            </div>  

            {isDeleting ? (
                <div className="fixed left-[0] top-[0] z-40 flex h-[100vh] w-[100%] flex-col items-center justify-center bg-black bg-opacity-20">
                    <div className="relative flex flex-col rounded-2xl bg-white p-[32px] items-center w-1/3 h-2/5 justify-around">
                        <div className="text-4xl font-bold ">
                            Delete a Property
                        </div>
                            <div className="text-xl mt-10 mb-1">Are you sure you want to delete this property ?</div>
                            <div className="font-semibold text-2xl mt-1 mb-10 ">{propData.project_name}</div>

                        
                        <div className="flex flex-roe items-center justify-center mx-1 w-full">
                            <button
                            className="mx-2 bg-[#B3B3B3] my-2 w-1/3 h-[60px] rounded-md text-2xl px-4 font-bold text-[#DFDFDF] shadow "
                            onClick={()=>setDel(!isDeleting)}
                            >
                            Cancel
                            </button>
                            <button
                            className="mx-2 bg-ci-red my-2 w-1/3 h-[60px] rounded-md text-2xl px-4 font-bold text-[#DFDFDF] shadow "
                            onClick={()=>{setDel(!isDeleting);alert("del")}}   
                            >
                            Delete
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
       </div>
        
     );
}
 
export default PropertyCard;