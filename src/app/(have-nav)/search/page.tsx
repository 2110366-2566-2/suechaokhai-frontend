"use client";
import PropertyData from "@/components/models/PropertyData";
import PropertyCards from "@/components/my-listing/PropertyCards";
import Image from "next/image";
import SearchSection from "@/components/home-page/SearchSection";

import { useEffect, useState } from "react";
import SearchProperty from "@/components/my-listing/SearchProperty";

const myFavPage = () => {
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
            address: "123 Main St",
            alley: "Back Alley",
            bathrooms: 2,
            bedrooms: 3,
            country: "SomeCountry",
            created_at: getRandomDate().toDateString(),
            district: "SomeDistrict",
            floor: 2,
            floor_size: 1500,
            floor_size_unit: "sqft",
            furnishing: "Furnished",
            images: {
              created_at: getRandomDate().toDateString(),
              url: "/img/Property.png"
            },
            owner_id: "owner123",
            postal_code: "12345",
            propertyId: "prop123",
            property_description: "Lorem ipsum dolor sit amet...",
            property_name: "Sample Property",
            property_type: "House",
            province: "SomeProvince",
            renting: {
              created_at: getRandomDate().toDateString(),
              is_occupied: false,
              price_per_month: Math.floor(Math.random() * 100000)
            },
            selling: {
              created_at: getRandomDate().toDateString(),
              is_sold: false,
              price: 250000
            },
            street: "Main St",
            sub_district: "SomeSubDistrict",
            unit_number: 1
          };
          propertyDataArray.push(propertyData);
        };
      return propertyDataArray;
  }

    useEffect(()=>{
        setData(generatePropertyDataArray(1000))
    },[])

    const [haveProp,setHave] = useState<boolean>(true);
    
    const handleCreate=()=>{
        console.log(haveProp)
        setHave(!haveProp)
    }
    return ( 
       <>
        {
          propData.length !==0 ? (
                
              <div className="flex h-full flex-col mx-80  ">
                    <div className="px-48 ">
                      <SearchProperty></SearchProperty>
                    </div>
                    <PropertyCards propData={propData} isEditable={false} additionaltext="from searching result" showAmount={true}></PropertyCards>

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

export default myFavPage;
