"use client";
import PropertyData from "@/components/models/PropertyData";
import PropertyCards from "@/components/my-listing/PropertyCards";
import getUserFavProperty from "@/services/getUserFavProperty";
import Image from "next/image";

import { useEffect, useState } from "react";

const myFavPage = () => {
    const [propData,setData] = useState<PropertyData[]>([]);
    const [total,setTotal] = useState<number>(0);


    useEffect(()=>{
      const fetchProp =  async ()=>{
        const data = await getUserFavProperty(20,1);
        if(data){
          setData(data.properties);
          setTotal(data.total)
        }
        console.log(data)
      }
      fetchProp()
    },[])

    const [haveProp,setHave] = useState<boolean>(true);
    
    const handleCreate=()=>{
        console.log(haveProp)
        setHave(!haveProp)
    }
    return ( 
       <>
        {
          total!==0 ? (
              <div className="flex h-full flex-col mx-80 mt-8 ">
                  <div className="text-4xl font-bold">My Favorites</div>
                  <PropertyCards propData={propData} totalProp={total} isEditable={false} additionaltext="for rent or sales in my favorites" showAmount={false}></PropertyCards>

                </div>
              ) : (
                //!fix this toooooooooooooooooooo
                <div className="mx-72 mt-8 flex h-1/2 flex-col items-center justify-around">
                  <div className="text-center text-4xl font-bold">
                    Empty property listing
                  </div>

                  <Image
                    src="/img/mylisting/home.svg"
                    alt="home"
                    width={100}
                    height={100}
                  />
                  <div className="">
                    <div className="m-1 text-center text-2xl">
                      Your listing is empty.
                    </div>
                    <div className="m-1 text-center text-2xl">
                      Let&apos;s create a property on your listing.
                    </div>
                  </div>

                  <button
                    className="flex w-1/5 flex-row justify-around rounded-md bg-ci-blue p-4"
                    onClick={handleCreate}
                  >
                    <Image
                      src="/img/mylisting/plusCircle.svg"
                      alt="add"
                      width={30}
                      height={30}
                    />
                    <div className="text-2xl font-bold text-white ">
                      Create Property
                    </div>
                  </button>
                </div>
      )}
    </>
  );
};

export default myFavPage;
