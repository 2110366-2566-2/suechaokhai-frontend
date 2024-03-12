"use client";
import PropertyData from "@/components/models/PropertyData";
import PropertyCards from "@/components/mylisting/PropertyCards";
import Image from "next/image";

import { useEffect, useState } from "react";

const myListingPage = () => {
    const [propData,setData] = useState<PropertyData[]>([]);

    function getRandomDate(): Date {
        const startMillis = (new Date(1900, 0, 1)).getTime();
        const endMillis = (new Date()).getTime();
        const randomMillis = startMillis + Math.random() * (endMillis - startMillis);
        return new Date(randomMillis);
    }

    function generatePropertyDataArray(n: number): PropertyData[] {
        const propertyDataArray:PropertyData[]=[]
        for (let i = 0; i < n; i++) {
          const propertyData: PropertyData = {
            owner_id: `owner_${i}`,
            description: `Description ${i}`,
            images: ["/img/Property.png"],
            project_name: `Project ${i}`,
            address: `Address ${i}`,
            alley: `Alley ${i}`,
            street: `Street ${i}`,
            district: `District ${i}`,
            sub_district: `Sub District ${i}`,
            province: `Province ${i}`,
            postal_code: `Postal Code ${i}`,
            residental_type: `Residential Type ${i}`,
            renting: {
              price_per_month: Math.floor(Math.random() * 100000) // Example random price
            },
            created_at:getRandomDate()
          };
      
          propertyDataArray.push(propertyData);
        }
      
        return propertyDataArray;
    }

    useEffect(()=>{
        setData(generatePropertyDataArray(30))
    },[])

    const [haveProp,setHave] = useState<boolean>(true);
    
    const handleCreate=()=>{
        console.log(haveProp)
        setHave(!haveProp)
    }
    return ( 
       <>
        {
          haveProp ? (
              <div className="flex h-full flex-col mx-80 mt-8 ">

                  <PropertyCards propData={propData} isEditable={true} additionaltext={"for rent or sales in my listing"}></PropertyCards>
                  
                  <button
                    className="fixed bottom-24 right-24 flex w-1/6 flex-row justify-around rounded-md bg-ci-blue p-4 "
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
              ) : (
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

export default myListingPage;
